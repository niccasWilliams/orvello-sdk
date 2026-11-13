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

describe("e-invoicing product via Bills (/e-invoicing)", () => {
  const ID = "0b9e2f4a-1c3d-4e5f-8a7b-6c5d4e3f2a1b";
  type Client = ReturnType<typeof createOrvelloClient>;
  const pdf = () => ({ data: new Uint8Array([0x25, 0x50, 0x44, 0x46]), filename: "beleg.pdf", mediaType: "application/pdf" });

  const cases: Array<{ operationId: string; method: string; path: string; call: (c: Client) => Promise<unknown>; body?: unknown }> = [
    { operationId: "e_invoicing_validate", method: "POST", path: "/e-invoicing/validate",
      call: (c) => c.eInvoicing.validate({ mode: "xml", xml: "<Invoice/>" }),
      body: { mode: "xml", xml: "<Invoice/>" } },
    { operationId: "e_invoicing_extractions_upload", method: "POST", path: "/e-invoicing/extractions",
      call: (c) => c.eInvoicing.extractions.upload(pdf(), { direction: "inbound" }) },
    { operationId: "e_invoicing_extractions_upload_batch", method: "POST", path: "/e-invoicing/extractions/batch",
      call: (c) => c.eInvoicing.extractions.uploadBatch([pdf(), pdf()]) },
    { operationId: "e_invoicing_extractions_list", method: "GET", path: "/e-invoicing/extractions?status=review&limit=5",
      call: (c) => c.eInvoicing.extractions.list({ status: "review", limit: 5 }) },
    { operationId: "e_invoicing_extractions_get", method: "GET", path: `/e-invoicing/extractions/${ID}`,
      call: (c) => c.eInvoicing.extractions.get(ID) },
    { operationId: "e_invoicing_extractions_save_draft", method: "PATCH", path: `/e-invoicing/extractions/${ID}/draft`,
      call: (c) => c.eInvoicing.extractions.saveDraft(ID, { notes: "n" }), body: { notes: "n" } },
    { operationId: "e_invoicing_extractions_approve", method: "POST", path: `/e-invoicing/extractions/${ID}/approve`,
      call: (c) => c.eInvoicing.extractions.approve(ID), body: {} },
    { operationId: "e_invoicing_extractions_convert", method: "POST", path: `/e-invoicing/extractions/${ID}/convert`,
      call: (c) => c.eInvoicing.extractions.convert(ID, { format: "zugferd" }), body: { format: "zugferd" } },
    { operationId: "e_invoicing_extractions_reject", method: "POST", path: `/e-invoicing/extractions/${ID}/reject`,
      call: (c) => c.eInvoicing.extractions.reject(ID, { reason: "doppelt" }), body: { reason: "doppelt" } },
    { operationId: "e_invoicing_extractions_retry", method: "POST", path: `/e-invoicing/extractions/${ID}/retry`,
      call: (c) => c.eInvoicing.extractions.retry(ID) },
    { operationId: "e_invoicing_extractions_cancel", method: "DELETE", path: `/e-invoicing/extractions/${ID}`,
      call: (c) => c.eInvoicing.extractions.cancel(ID) },
    { operationId: "e_invoicing_extraction_usage_current", method: "GET", path: "/e-invoicing/usage/extractions?yearMonth=2026-11",
      call: (c) => c.eInvoicing.usage.current({ yearMonth: "2026-11" }) },
    { operationId: "e_invoicing_extraction_usage_history", method: "GET", path: "/e-invoicing/usage/extractions/history?months=3",
      call: (c) => c.eInvoicing.usage.history({ months: 3 }) },
    { operationId: "e_invoicing_extraction_usage_job", method: "GET", path: `/e-invoicing/usage/extractions/${ID}`,
      call: (c) => c.eInvoicing.usage.job(ID) },
    { operationId: "e_invoicing_extraction_usage_set_budget", method: "PATCH", path: "/e-invoicing/usage/extractions/budget",
      call: (c) => c.eInvoicing.usage.setBudget({ monthlyBudgetCents: null }), body: { monthlyBudgetCents: null } },
  ];

  it("covers every e_invoicing operation of the contract exactly once", async () => {
    const { ROUTE_INDEX } = await import("../src/route-index.generated");
    const contractOps = Object.keys(ROUTE_INDEX).filter((op) => op.startsWith("e_invoicing_")).sort();
    expect(cases.map((c) => c.operationId).sort()).toEqual(contractOps);
    expect(contractOps).toHaveLength(15);
  });

  it.each(cases)("$operationId calls only the Bills address with the bearer credential", async ({ operationId, method, path, call, body }) => {
    const fetcher = vi.fn(async () => jsonResponse({ success: true, data: {} }));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: { apiKey: "test-key" }, fetch: fetcher });

    await call(client);

    expect(fetcher).toHaveBeenCalledTimes(1);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    const target = new URL(url);
    expect(target.origin).toBe(BILLS);
    expect(`${target.pathname}${target.search}`).toBe(path);
    expect(init.method).toBe(method);
    const headers = new Headers(init.headers);
    expect(headers.get("Authorization")).toBe("Bearer test-key");
    expect(headers.get("x-api-key")).toBeNull();
    expect(resolveOperation(method, target.pathname)?.operationId).toBe(operationId);
    if (body !== undefined) expect(JSON.parse(init.body as string)).toEqual(body);
  });

  it("uploads a single document as multipart in field file, without a hand-set Content-Type", async () => {
    const fetcher = vi.fn(async () => jsonResponse({ success: true, data: { id: ID, status: "pending" } }, 201));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: fetcher });

    await expect(client.eInvoicing.extractions.upload(pdf(), { direction: "outbound" })).resolves.toMatchObject({ id: ID });

    const [, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(new Headers(init.headers).get("Content-Type")).toBeNull();
    const form = init.body as FormData;
    expect(form).toBeInstanceOf(FormData);
    const file = form.get("file") as File;
    expect(file.name).toBe("beleg.pdf");
    expect(file.type).toBe("application/pdf");
    expect(new Uint8Array(await file.arrayBuffer())).toEqual(new Uint8Array([0x25, 0x50, 0x44, 0x46]));
    expect(form.get("direction")).toBe("outbound");

    const wire = new Request(BILLS, { method: "POST", body: form });
    expect(wire.headers.get("content-type")).toMatch(/^multipart\/form-data; boundary=/);
  });

  it("uploads a batch with one part per document and keeps Blob inputs", async () => {
    const fetcher = vi.fn(async () => jsonResponse({ success: true, data: { submitted: 2, jobs: [], errors: [] } }));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: fetcher });

    await client.eInvoicing.extractions.uploadBatch([
      pdf(),
      { data: new Blob(["<Invoice/>"], { type: "application/xml" }), filename: "rechnung.xml" },
    ]);

    const form = (fetcher.mock.calls[0] as unknown as [string, RequestInit])[1].body as FormData;
    const files = form.getAll("files") as File[];
    expect(files.map((f) => [f.name, f.type])).toEqual([["beleg.pdf", "application/pdf"], ["rechnung.xml", "application/xml"]]);
  });

  it("does not repeat a paid upload on a server error unless asked to", async () => {
    const fetcher = vi.fn(async () => jsonResponse({ success: false, message: "down" }, 503));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: fetcher, maxRetries: 3, retryBaseDelayMs: 1 });

    await expect(client.eInvoicing.extractions.upload(pdf())).rejects.toMatchObject({ status: 503 });
    expect(fetcher).toHaveBeenCalledTimes(1);

    await expect(client.eInvoicing.extractions.upload(pdf(), undefined, { maxRetries: 1 })).rejects.toMatchObject({ status: 503 });
    expect(fetcher).toHaveBeenCalledTimes(3);
  });
});
