import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient, resolveOperation } from "../src/index";

const BILLS = "https://bill.example.test";

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
}

describe("e-invoice via Bills", () => {
  it("requests the e-invoice on the Bills route only, with the bearer credential and the format body", async () => {
    const accepted = {
      invoiceId: 42,
      format: "xrechnung_ubl" as const,
      orderId: "5f0c1d2e-3a4b-5c6d-8e9f-0a1b2c3d4e5f",
      invoiceRevision: "a".repeat(64),
      status: "accepted" as const,
      acceptedAt: "2026-11-12T08:00:00.000Z",
      replayed: false,
    };
    const fetcher = vi.fn(async () => jsonResponse({ success: true, data: accepted }, 202));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: { apiKey: "test-key" }, fetch: fetcher });

    expect(await client.invoices.requestEInvoice(42, { format: "xrechnung_ubl" })).toEqual(accepted);

    expect(fetcher).toHaveBeenCalledTimes(1);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(`${BILLS}/merchant-invoicing/invoices/42/einvoice`);
    expect(new URL(url).origin).toBe(BILLS);
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body as string)).toEqual({ format: "xrechnung_ubl" });
    const headers = new Headers(init.headers);
    expect(headers.get("Authorization")).toBe("Bearer test-key");
    expect(headers.get("x-api-key")).toBeNull();
    expect(resolveOperation("POST", "/merchant-invoicing/invoices/42/einvoice")?.operationId)
      .toBe("merchant_invoicing_einvoice_request");
  });

  it("returns the replayed acceptance unchanged (HTTP 200)", async () => {
    const replay = {
      invoiceId: 42, format: "xrechnung_cii" as const, orderId: "o", invoiceRevision: "r",
      status: "accepted" as const, acceptedAt: "2026-11-12T08:00:00.000Z", replayed: true,
    };
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t",
      fetch: async () => jsonResponse({ success: true, data: replay }, 200) });
    await expect(client.invoices.requestEInvoice(42, { format: "xrechnung_cii" })).resolves.toMatchObject({ replayed: true });
  });

  it("reads results with validation from the same Bills path", async () => {
    const status = {
      invoiceId: 42,
      sandbox: false,
      results: [{
        orderId: "o", resultId: "r1", invoiceRevision: "rev", status: "completed" as const,
        format: "xrechnung_ubl", code: null, retryable: null,
        validation: { valid: true, ruleset: "xrechnung-3.0", issues: [] },
        completedAt: "2026-11-12T08:01:00.000Z", receivedAt: "2026-11-12T08:01:01.000Z",
      }],
    };
    const fetcher = vi.fn(async () => jsonResponse({ success: true, data: status }));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: { apiKey: "test-key" }, fetch: fetcher });

    const read = await client.invoices.getEInvoiceStatus(42);
    expect(read.results[0]?.status).toBe("completed");
    expect(read.results[0]?.validation?.valid).toBe(true);

    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(`${BILLS}/merchant-invoicing/invoices/42/einvoice`);
    expect(init.method).toBe("GET");
    expect(init.body).toBeUndefined();
    expect(resolveOperation("GET", "/merchant-invoicing/invoices/42/einvoice")?.operationId)
      .toBe("merchant_invoicing_einvoice_status");
  });

  it("surfaces a foreign invoice (404) and a draft (422) without retrying", async () => {
    for (const code of [404, 422]) {
      const fetcher = vi.fn(async () => jsonResponse({ success: false, message: "nope" }, code));
      const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: fetcher });
      await expect(client.invoices.requestEInvoice(7, { format: "xrechnung_ubl" })).rejects.toMatchObject({ status: code });
      expect(fetcher).toHaveBeenCalledTimes(1);
    }
  });
});
