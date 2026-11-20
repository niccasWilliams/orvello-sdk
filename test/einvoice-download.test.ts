import { createHash } from "node:crypto";
import { describe, it, expect, vi } from "vitest";
import {
  createOrvelloClient,
  resolveOperation,
  OrvelloApiError,
  OrvelloIntegrityError,
  type EInvoiceStatus,
} from "../src/index";

const BILLS = "https://bill.example.test";
const XML = new TextEncoder().encode('<?xml version="1.0"?><Invoice/>');
const SHA = createHash("sha256").update(XML).digest("hex");
const PATH = "/merchant-invoicing/invoices/42/einvoice/documents/7";

function fileResponse(bytes: Uint8Array, headers: Record<string, string>) {
  return new Response(new Blob([bytes as BlobPart]), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "content-length": String(bytes.byteLength),
      "content-disposition": 'attachment; filename="RE-2026-0042.xml"',
      ...headers,
    },
  });
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
}

describe("e-invoice document download via Bills", () => {
  it("downloads the file on the contract route and returns the verified bytes", async () => {
    const fetcher = vi.fn(async () => fileResponse(XML, { "x-content-sha256": SHA }));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: { apiKey: "test-key" }, fetch: fetcher });

    const file = await client.invoices.downloadEInvoiceDocument(42, 7, { expectedSha256: SHA.toUpperCase() });

    expect(file.sha256).toBe(SHA);
    expect(file.mediaType).toBe("application/xml");
    expect(file.fileName).toBe("RE-2026-0042.xml");
    expect(file.sizeBytes).toBe(XML.byteLength);
    expect(new Uint8Array(await file.data.arrayBuffer())).toEqual(XML);

    expect(fetcher).toHaveBeenCalledTimes(1);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(`${BILLS}${PATH}`);
    expect(init.method).toBe("GET");
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer test-key");
    expect(resolveOperation("GET", PATH)?.operationId).toBe("merchant_invoicing_einvoice_download");
  });

  it("verifies against the X-Content-SHA256 header alone when no expected hash is passed", async () => {
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t",
      fetch: async () => fileResponse(XML, { "x-content-sha256": SHA }) });
    await expect(client.invoices.downloadEInvoiceDocument(42, 7)).resolves.toMatchObject({ sha256: SHA });
  });

  it("throws OrvelloIntegrityError instead of returning bytes that do not match artifacts.sha256", async () => {
    const tampered = new TextEncoder().encode('<?xml version="1.0"?><Invoice>x</Invoice>');
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t",
      fetch: async () => fileResponse(tampered, { "x-content-sha256": SHA }) });

    const error = await client.invoices.downloadEInvoiceDocument(42, 7, { expectedSha256: SHA }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(OrvelloIntegrityError);
    expect(error).toMatchObject({
      name: "OrvelloIntegrityError",
      reason: "mismatch",
      endpoint: PATH,
      expectedSha256: SHA,
      actualSha256: createHash("sha256").update(tampered).digest("hex"),
    });
  });

  it("throws when the header disagrees with the hash from artifacts, even if the bytes match artifacts", async () => {
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t",
      fetch: async () => fileResponse(XML, { "x-content-sha256": "0".repeat(64) }) });
    await expect(client.invoices.downloadEInvoiceDocument(42, 7, { expectedSha256: SHA }))
      .rejects.toMatchObject({ reason: "mismatch", expectedSha256: "0".repeat(64), actualSha256: SHA });
  });

  it("refuses a download with no hash to verify against", async () => {
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: async () => fileResponse(XML, {}) });
    await expect(client.invoices.downloadEInvoiceDocument(42, 7))
      .rejects.toMatchObject({ name: "OrvelloIntegrityError", reason: "missing", expectedSha256: null });
  });

  it("surfaces 404 (foreign invoice, other document, file still pending) as OrvelloApiError without retrying", async () => {
    const fetcher = vi.fn(async () => jsonResponse({ success: false, message: "Dokument nicht gefunden" }, 404));
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: fetcher });

    const error = await client.invoices.downloadEInvoiceDocument(42, 7, { expectedSha256: SHA }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(OrvelloApiError);
    expect(error).toMatchObject({ status: 404, message: "Dokument nicht gefunden" });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
});

describe("e-invoice status artifacts", () => {
  const result = {
    orderId: "o", resultId: "r1", invoiceRevision: "rev", status: "completed" as const,
    format: "zugferd", code: null, retryable: null,
    validation: { valid: true, ruleset: "xrechnung-3.0", issues: [] },
    completedAt: "2026-11-12T08:01:00.000Z", receivedAt: "2026-11-12T08:01:01.000Z",
  };

  it("passes artifacts through as Bills delivers them", async () => {
    const artifacts = [
      { kind: "xml" as const, mediaType: "application/xml", sizeBytes: 31, sha256: SHA, state: "available" as const, documentId: 7 },
      { kind: "pdf" as const, mediaType: "application/pdf", sizeBytes: 900, sha256: "b".repeat(64), state: "pending" as const, documentId: null },
    ];
    const body: EInvoiceStatus = { invoiceId: 42, sandbox: false, results: [{ ...result, artifacts }], orders: [] };
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: async () => jsonResponse({ success: true, data: body }) });

    const status = await client.invoices.getEInvoiceStatus(42);
    expect(status.results[0]?.artifacts).toEqual(artifacts);
  });

  it("accepts a status without artifacts from an older Bills deployment", async () => {
    // Kein `artifacts`-Feld: der Typ muss das zulassen, nicht nur die Laufzeit.
    const body: EInvoiceStatus = { invoiceId: 42, sandbox: false, results: [result], orders: [] };
    const client = createOrvelloClient({ baseUrl: BILLS, auth: "t", fetch: async () => jsonResponse({ success: true, data: body }) });

    const status = await client.invoices.getEInvoiceStatus(42);
    expect(status.results[0]?.status).toBe("completed");
    expect(status.results[0]?.artifacts).toBeUndefined();
    expect(status.results[0]?.artifacts ?? []).toEqual([]);
  });
});
