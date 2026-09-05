import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  createOrvelloClient,
  OrvelloClient,
  OrvelloApiError,
  buildBase64Receipt,
  calculateVat,
  isKleinunternehmer,
  formatAmount,
  type OrvelloClientConfig,
} from "../src/index";

describe("OrvelloClient - Authentication & Configuration", () => {
  it("initializes with an explicit baseUrl and normalizes a trailing slash", async () => {
    const client = createOrvelloClient({ baseUrl: "https://orvello.example.com/" });
    expect(client).toBeInstanceOf(OrvelloClient);
    const resolvedUrl = await client.resolveBaseUrl();
    expect(resolvedUrl).toBe("https://orvello.example.com");
  });

  it("handles string Bearer token auth", async () => {
    let capturedAuth: string | null = null;
    const mockFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      capturedAuth = new Headers(init?.headers).get("Authorization");
      return new Response(JSON.stringify({ success: true, data: { id: 1 } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: "test-token-123",
      fetch: mockFetch as unknown as typeof fetch,
    });

    await client.invoices.getById(1);
    expect(capturedAuth).toBe("Bearer test-token-123");
  });

  it("handles async token function auth", async () => {
    let capturedAuth: string | null = null;
    const mockFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      capturedAuth = new Headers(init?.headers).get("Authorization");
      return new Response(JSON.stringify({ success: true, data: { id: 2 } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: async () => "dynamic-token-456",
      fetch: mockFetch as unknown as typeof fetch,
    });

    await client.invoices.getById(2);
    expect(capturedAuth).toBe("Bearer dynamic-token-456");
  });

  it("handles apiKey object auth", async () => {
    let capturedAuth: string | null = null;
    const mockFetch = vi.fn(async (_url: string, init?: RequestInit) => {
      capturedAuth = new Headers(init?.headers).get("Authorization");
      return new Response(JSON.stringify({ success: true, data: { id: 3 } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: { apiKey: "secret-api-key" },
      fetch: mockFetch as unknown as typeof fetch,
    });

    await client.invoices.getById(3);
    expect(capturedAuth).toBe("Bearer secret-api-key");
  });

  it("performs OAuth2 client_credentials exchange and caches token", async () => {
    let tokenRequests = 0;
    let apiRequests = 0;

    const mockFetch = vi.fn(async (url: string) => {
      if (url.includes("/oauth/token")) {
        tokenRequests++;
        return new Response(
          JSON.stringify({
            access_token: "oauth-token-xyz",
            expires_in: 3600,
          }),
          { status: 200, headers: { "content-type": "application/json" } }
        );
      }

      apiRequests++;
      return new Response(JSON.stringify({ success: true, data: { id: 42 } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: {
        clientId: "test-client",
        clientSecret: "test-secret",
      },
      fetch: mockFetch as unknown as typeof fetch,
    });

    // First call: fetches OAuth token then executes API call
    const res1 = await client.invoices.getById(42);
    expect(res1).toEqual({ id: 42 });
    expect(tokenRequests).toBe(1);
    expect(apiRequests).toBe(1);

    // Second call: reuses cached OAuth token
    const res2 = await client.invoices.getById(42);
    expect(res2).toEqual({ id: 42 });
    expect(tokenRequests).toBe(1);
    expect(apiRequests).toBe(2);
  });

  it("sends both Basic Auth and body parameters including scope in OAuth token request", async () => {
    let capturedBody: string | null = null;
    let capturedAuth: string | null = null;

    const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes("/oauth/token")) {
        capturedAuth = new Headers(init?.headers).get("Authorization");
        capturedBody = String(init?.body);
        return new Response(
          JSON.stringify({ access_token: "token-scoped-123", expires_in: 3600 }),
          { status: 200, headers: { "content-type": "application/json" } }
        );
      }
      return new Response(JSON.stringify({ success: true, data: { ok: true } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: {
        clientId: "my-client-id",
        clientSecret: "my-client-secret",
        scope: "invoices:read invoices:write",
      },
      fetch: mockFetch as unknown as typeof fetch,
    });

    await client.invoices.getById(1);

    expect(capturedAuth).toMatch(/^Basic /);
    expect(capturedBody).toContain("grant_type=client_credentials");
    expect(capturedBody).toContain("client_id=my-client-id");
    expect(capturedBody).toContain("client_secret=my-client-secret");
    expect(capturedBody).toContain("scope=invoices%3Aread+invoices%3Awrite");
  });

  it("invalidates cached OAuth token and recovers on 401", async () => {
    let tokenRequests = 0;
    let apiRequests = 0;

    const mockFetch = vi.fn(async (url: string) => {
      if (url.includes("/oauth/token")) {
        tokenRequests++;
        return new Response(
          JSON.stringify({ access_token: `token-${tokenRequests}`, expires_in: 3600 }),
          { status: 200, headers: { "content-type": "application/json" } }
        );
      }

      apiRequests++;
      // First API call fails with 401 (e.g. server restarted / revoked token)
      if (apiRequests === 1) {
        return new Response(JSON.stringify({ message: "Invalid or expired token" }), {
          status: 401,
          headers: { "content-type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ success: true, data: { recovered: true } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: {
        clientId: "client-1",
        clientSecret: "secret-1",
      },
      fetch: mockFetch as unknown as typeof fetch,
    });

    const res = await client.invoices.getById(99);
    expect(res).toEqual({ recovered: true });
    expect(tokenRequests).toBe(2); // Fetched initial token, then refreshed on 401
    expect(apiRequests).toBe(2);   // First request failed 401, retried and succeeded
  });

  it("auto-discovers auth and baseUrl from ORVELLO_ environment variables", async () => {
    process.env.ORVELLO_URL = "https://env.example.com";
    process.env.ORVELLO_OAUTH_CLIENT_ID = "env-id";
    process.env.ORVELLO_OAUTH_CLIENT_SECRET = "env-secret";
    process.env.ORVELLO_OAUTH_SCOPE = "invoices:read";

    try {
      let capturedBody: string | null = null;
      const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
        if (url.includes("/oauth/token")) {
          capturedBody = String(init?.body);
          return new Response(
            JSON.stringify({ access_token: "env-token", expires_in: 3600 }),
            { status: 200, headers: { "content-type": "application/json" } }
          );
        }
        return new Response(JSON.stringify({ success: true, data: { ok: true } }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      });

      const client = createOrvelloClient({ fetch: mockFetch as unknown as typeof fetch });
      expect(await client.resolveBaseUrl()).toBe("https://env.example.com");

      await client.invoices.getById(5);
      expect(capturedBody).toContain("client_id=env-id");
      expect(capturedBody).toContain("scope=invoices%3Aread");
    } finally {
      delete process.env.ORVELLO_URL;
      delete process.env.ORVELLO_OAUTH_CLIENT_ID;
      delete process.env.ORVELLO_OAUTH_CLIENT_SECRET;
      delete process.env.ORVELLO_OAUTH_SCOPE;
    }
  });

  it("throws a clear error when constructed without a baseUrl and no ORVELLO_URL", () => {
    delete process.env.ORVELLO_URL;
    expect(() => createOrvelloClient()).toThrow(/no baked-in default endpoint/i);
  });
});

describe("OrvelloClient - Envelope Unwrapping & Error Handling", () => {
  it("unwraps ApiEnvelope returning data directly", async () => {
    const mockFetch = vi.fn(async () => {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Invoice created",
          data: { invoice: { id: 100, invoiceNumber: "RE-2026-001" }, pdfUrl: "/invoices/100/pdf" },
        }),
        { status: 201, headers: { "content-type": "application/json" } }
      );
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
    });

    const result = await client.invoices.create({
      invoiceDate: "2026-09-05",
      dueDate: "2026-09-19",
      currency: "EUR",
      lineItems: [{ title: "Consulting", quantity: 1, unitPriceNet: "100.00" }],
    });

    expect(result.invoice.id).toBe(100);
    expect(result.invoice.invoiceNumber).toBe("RE-2026-001");
    expect(result.pdfUrl).toBe("/invoices/100/pdf");
  });

  it("throws OrvelloApiError when envelope success is false", async () => {
    const mockFetch = vi.fn(async () => {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Validation failed: dueDate must be after invoiceDate",
          data: null,
        }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
    });

    await expect(
      client.invoices.create({
        invoiceDate: "2026-09-20",
        dueDate: "2026-09-10",
        currency: "EUR",
        lineItems: [],
      })
    ).rejects.toThrowError(OrvelloApiError);
  });

  it("throws OrvelloApiError immediately on 400 Bad Request without retrying", async () => {
    let attempts = 0;
    const mockFetch = vi.fn(async () => {
      attempts++;
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid customer ID",
        }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      maxRetries: 3,
      fetch: mockFetch as unknown as typeof fetch,
    });

    try {
      await client.invoices.getById(9999);
      expect.fail("Should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(OrvelloApiError);
      const apiErr = err as OrvelloApiError;
      expect(apiErr.status).toBe(400);
      expect(apiErr.statusCode).toBe(400);
      expect(apiErr.body).toEqual({ success: false, message: "Invalid customer ID" });
      expect(apiErr.responseBody).toEqual({ success: false, message: "Invalid customer ID" });
      expect(attempts).toBe(1); // No retries on 400!
    }
  });
});

describe("OrvelloClient - Retry Mechanics", () => {
  it("retries on HTTP 503 and succeeds on subsequent attempt", async () => {
    let attempts = 0;
    const mockFetch = vi.fn(async () => {
      attempts++;
      if (attempts === 1) {
        return new Response("Service Unavailable", { status: 503 });
      }
      return new Response(JSON.stringify({ success: true, data: { status: "recovered" } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      maxRetries: 2,
      retryBaseDelayMs: 10,
      fetch: mockFetch as unknown as typeof fetch,
    });

    const res = await client.invoices.getById(1);
    expect(attempts).toBe(2);
    expect(res).toEqual({ status: "recovered" });
  });

  it("retries on HTTP 429 rate limit", async () => {
    let attempts = 0;
    const mockFetch = vi.fn(async () => {
      attempts++;
      if (attempts === 1) {
        return new Response(JSON.stringify({ message: "Rate limit exceeded" }), { status: 429 });
      }
      return new Response(JSON.stringify({ success: true, data: { ok: true } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      maxRetries: 2,
      retryBaseDelayMs: 10,
      fetch: mockFetch as unknown as typeof fetch,
    });

    const res = await client.invoices.getById(1);
    expect(attempts).toBe(2);
    expect(res).toEqual({ ok: true });
  });
});

describe("OrvelloClient - PDF & Binary Handling", () => {
  it("downloads PDF as Blob", async () => {
    const pdfData = new Uint8Array([0x25, 0x50, 0x44, 0x46]); // %PDF
    const mockFetch = vi.fn(async () => {
      return new Response(pdfData, {
        status: 200,
        headers: { "content-type": "application/pdf" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
    });

    const blob = await client.invoices.downloadPdf(50);
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.size).toBe(4);
  });

  it("downloads PDF from direct URL via downloadPdfFromUrl helper", async () => {
    const pdfData = new Uint8Array([0x25, 0x50, 0x44, 0x46]);
    const mockFetch = vi.fn(async (url: string) => {
      expect(url).toBe("https://bill.example.com/invoices/50/pdf");
      return new Response(pdfData, {
        status: 200,
        headers: { "content-type": "application/pdf" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
    });

    const blob = await client.invoices.downloadPdfFromUrl("/invoices/50/pdf");
    expect(blob).toBeInstanceOf(Blob);
  });
});

describe("OrvelloClient - Domain Modules & Endpoints", () => {
  let lastRequest: { url: string; method: string; headers: Headers; body?: string } | null = null;

  const createMockedClient = (responseData: unknown = {}, extra: Partial<OrvelloClientConfig> = {}) => {
    const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
      lastRequest = {
        url,
        method: init?.method || "GET",
        headers: new Headers(init?.headers),
        body: init?.body as string | undefined,
      };
      return new Response(JSON.stringify({ success: true, data: responseData }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    return createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
      ...extra,
    });
  };

  beforeEach(() => {
    lastRequest = null;
  });

  it("invoices: search, getPending, getOverdue, updateStatus, sendEmail", async () => {
    const client = createMockedClient({ invoices: [] });

    await client.invoices.search({ search: "Acme", page: 1, pageSize: 20 });
    expect(lastRequest?.url).toContain("/invoices/external?search=Acme&page=1&pageSize=20");
    expect(lastRequest?.method).toBe("GET");

    await client.invoices.getPending();
    expect(lastRequest?.url).toContain("/invoices/external/pending");

    await client.invoices.getOverdue();
    expect(lastRequest?.url).toContain("/invoices/external/overdue");

    await client.invoices.updateStatus(42, { status: "paid", paymentReference: "TX-123" });
    expect(lastRequest?.url).toContain("/invoices/external/42/status");
    expect(lastRequest?.method).toBe("PUT");
    expect(JSON.parse(lastRequest?.body || "{}")).toEqual({ status: "paid", paymentReference: "TX-123" });

    await client.invoices.sendEmail(42, { to: "customer@example.com", subject: "Rechnung" });
    expect(lastRequest?.url).toContain("/invoices/external/42/send-email");
    expect(lastRequest?.method).toBe("POST");
  });

  it("customerCompanies: search, getById, create, update, delete", async () => {
    const client = createMockedClient({ id: 10, name: "Acme GmbH" });

    await client.customerCompanies.search({ search: "Acme" });
    expect(lastRequest?.url).toContain("/customer-companies/external?search=Acme");

    await client.customerCompanies.getById(10);
    expect(lastRequest?.url).toContain("/customer-companies/external/10");

    await client.customerCompanies.create({ name: "Acme GmbH", email: "info@acme.de" });
    expect(lastRequest?.url).toContain("/customer-companies/external");
    expect(lastRequest?.method).toBe("POST");

    await client.customerCompanies.update(10, { email: "billing@acme.de" });
    expect(lastRequest?.url).toContain("/customer-companies/external/10");
    expect(lastRequest?.method).toBe("PUT");

    await client.customerCompanies.delete(10);
    expect(lastRequest?.url).toContain("/customer-companies/external/10");
    expect(lastRequest?.method).toBe("DELETE");
  });

  it("managingCompanies: getCurrent returns tax regime & context", async () => {
    const contextData = {
      managingCompany: { id: 1, companyName: "Orvello UG" },
      taxation: {
        accountingMethod: "euer",
        shouldShowVatOnInvoices: true,
        defaultVatTreatmentHint: "DE_STANDARD_19",
      },
    };
    const client = createMockedClient(contextData);

    const res = await client.managingCompanies.getCurrent();
    expect(lastRequest?.url).toContain("/managing-companies/external/current");
    expect(res.managingCompany.companyName).toBe("Orvello UG");
  });

  it("dunning: suggestions, preview, issue, settings", async () => {
    const client = createMockedClient({ items: [] });

    await client.dunning.suggestions({ limit: 10 });
    expect(lastRequest?.url).toContain("/invoices/external/dunning/suggestions?limit=10");

    await client.dunning.preview(55, { level: "level1" });
    expect(lastRequest?.url).toContain("/invoices/external/dunning/55/preview");
    expect(lastRequest?.method).toBe("POST");

    await client.dunning.issue(55, {});
    expect(lastRequest?.url).toContain("/invoices/external/dunning/55/issue");
    expect(lastRequest?.method).toBe("POST");

    await client.dunning.getSettings();
    expect(lastRequest?.url).toContain("/invoices/external/dunning/settings");

    await client.dunning.updateSettings({ isEnabled: true });
    expect(lastRequest?.url).toContain("/invoices/external/dunning/settings");
    expect(lastRequest?.method).toBe("PUT");
  });

  it("bookkeeping: revenues, expenses with base64 receipt, and settleInvoice", async () => {
    const client = createMockedClient({ created: true });

    // Revenue with externalRef as Idempotency-Key
    await client.bookkeeping.revenues.create({
      managingCompanyId: 1,
      paymentAccountId: 2,
      revenueDate: "2026-09-05",
      taxRate: "19.00",
      grossAmount: "119.00",
      netAmount: "100.00",
      taxAmount: "19.00",
      description: "Service Fee",
      externalRef: "rev-ext-999",
    });
    expect(lastRequest?.url).toContain("/bookkeeping/revenues/external");
    expect(lastRequest?.headers.get("Idempotency-Key")).toBe("rev-ext-999");

    // Expense with receipt payload
    const receipt = buildBase64Receipt(new Uint8Array([1, 2, 3]), "beleg.pdf", "application/pdf");
    await client.bookkeeping.expenses.create(
      {
        managingCompanyId: 1,
        expenseDate: "2026-09-05",
        grossAmount: "50.00",
        netAmount: "50.00",
        taxAmount: "0.00",
        taxRate: "0.00",
        paymentMethod: "bank",
        externalRef: "exp-ref-111",
      },
      { receipt }
    );
    expect(lastRequest?.url).toContain("/bookkeeping/expenses/external");
    expect(lastRequest?.headers.get("Idempotency-Key")).toBe("exp-ref-111");
    const sentExpenseBody = JSON.parse(lastRequest?.body || "{}");
    expect(sentExpenseBody.fileName).toBe("beleg.pdf");
    expect(sentExpenseBody.base64String).toBeDefined();

    // Settle invoice (one-shot settlement)
    await client.bookkeeping.payments.settleInvoice({
      invoiceId: 77,
      paymentAccountId: 3,
      payoutAmount: "97.50",
      paymentDate: "2026-09-05",
      externalRef: "payout-tx-888",
    });
    expect(lastRequest?.url).toContain("/bookkeeping/payments/external/settle-invoice");
    expect(lastRequest?.headers.get("Idempotency-Key")).toBe("payout-tx-888");
  });

  it("bookkeeping: getDefaultBankAccount retrieves and caches account", async () => {
    const mockAccounts = [
      {
        id: 1,
        type: "paypal",
        name: "PayPal",
        currency: "EUR",
        isDefault: false,
        isArchived: false,
      },
      {
        id: 2,
        type: "bank",
        name: "Business Bank",
        currency: "EUR",
        iban: "DE1234567890",
        bic: "BANKDEFFXXX",
        bankName: "Hypo Bank",
        accountOwner: "Max Mustermann",
        isDefault: true,
        isArchived: false,
      },
    ];

    let fetchCount = 0;
    const mockFetch = vi.fn(async () => {
      fetchCount++;
      return new Response(JSON.stringify({ success: true, data: mockAccounts }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    const client = createOrvelloClient({
      baseUrl: "https://bill.example.com",
      fetch: mockFetch as unknown as typeof fetch,
    });

    const bankDetails = await client.bookkeeping.getDefaultBankAccount();
    expect(bankDetails.iban).toBe("DE1234567890");
    expect(bankDetails.bic).toBe("BANKDEFFXXX");
    expect(bankDetails.bank).toBe("Hypo Bank");
    expect(bankDetails.accountHolder).toBe("Max Mustermann");
    expect(fetchCount).toBe(1);

    // Call again -> should return cached bank details without second network call
    const cachedDetails = await client.bookkeeping.getDefaultBankAccount();
    expect(cachedDetails).toEqual(bankDetails);
    expect(fetchCount).toBe(1);
  });

  it("users: getByExternalUserId, update, delete", async () => {
    const client = createMockedClient({ id: 1, externalUserId: "auth0|123" });

    await client.users.getByExternalUserId("auth0|123");
    expect(lastRequest?.url).toContain("/users/getByExternalUserId/auth0%7C123");

    await client.users.update(5, { firstName: "Anna" });
    expect(lastRequest?.url).toContain("/users/update/external/5");
    expect(lastRequest?.method).toBe("PUT");

    await client.users.delete(5);
    expect(lastRequest?.url).toContain("/users/delete/external/5");
    expect(lastRequest?.method).toBe("DELETE");
  });

  it("oauthClients: full lifecycle management", async () => {
    // Die Verwaltungsrouten verlangen den `x-api-key`-Header. Ohne diesen Wert
    // ist der Namensraum vorhanden, aber nicht benutzbar - genau das war die
    // Luecke bis 0.1.0.
    const client = createMockedClient(
      { id: 1, clientId: "client_abc" },
      { managementApiKey: "mgmt-secret" }
    );

    await client.oauthClients.list({ page: 1, pageSize: 10 });
    expect(lastRequest?.url).toContain("/oauth/clients/external/list?page=1&pageSize=10");

    await client.oauthClients.get("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc");

    await client.oauthClients.create({ name: "AMP Worker", role: "editor" });
    expect(lastRequest?.url).toContain("/oauth/clients/external");
    expect(lastRequest?.method).toBe("POST");

    await client.oauthClients.rotate("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc/rotate");

    await client.oauthClients.retire("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc/retire");

    await client.oauthClients.rollback("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc/rollback");

    await client.oauthClients.revoke("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc/revoke");

    await client.oauthClients.delete("client_abc");
    expect(lastRequest?.url).toContain("/oauth/clients/external/client_abc");
    expect(lastRequest?.method).toBe("DELETE");

    // Jeder dieser Aufrufe ging ueber die Schluessel-Bahn, keiner als Bearer.
    expect(lastRequest?.headers.get("x-api-key")).toBe("mgmt-secret");
    expect(lastRequest?.headers.get("authorization")).toBeNull();
  });
});

describe("Helper Utilities", () => {
  it("calculateVat correctly calculates 19% standard VAT", () => {
    const { net, vat, gross } = calculateVat(100, 19);
    expect(net).toBe("100.00");
    expect(vat).toBe("19.00");
    expect(gross).toBe("119.00");
  });

  it("isKleinunternehmer identifies Kleinunternehmer context", () => {
    expect(
      isKleinunternehmer({
        managingCompany: { id: 1, companyName: "Solo" },
        taxation: {
          asOf: "2026-09-05",
          regime: "kleinunternehmer",
          regimeReason: null,
          regimeValidFrom: null,
          regimeValidTo: null,
          accountingMethod: "euer",
          ustvaFilingPreference: null,
          shouldShowVatOnInvoices: false,
          defaultVatTreatmentHint: "KLEINUNTERNEHMER_0",
          legalVatHint: "§ 19 UStG",
          thresholds: { kleinunternehmerGraceAmount: 25000, kleinunternehmerMaxAmount: 22000 },
        },
        auth: {
          authType: "oauth2",
          role: "editor",
          oauth2ClientId: "c1",
          apiKeyId: null,
          costCenters: null,
          defaultCostCenter: null,
        },
      })
    ).toBe(true);
  });

  it("formatAmount formats currency in German format", () => {
    const formatted = formatAmount(1234.56, "EUR");
    expect(formatted).toContain("1.234,56");
    expect(formatted).toContain("€");
  });

  it("buildBase64Receipt converts binary data to base64 payload", () => {
    const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
    const receipt = buildBase64Receipt(bytes, "invoice.pdf", "application/pdf");
    expect(receipt.fileName).toBe("invoice.pdf");
    expect(receipt.mimeType).toBe("application/pdf");
    expect(receipt.size).toBe(5);
    expect(receipt.base64String).toBe("SGVsbG8=");
  });
});
