import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient } from "../src/index";

describe("invoice payment evidence", () => {
  it("uses the registered authenticated GET route and preserves decimal strings and negative proof", async () => {
    const evidence = { invoiceId: 42, bankPaymentConfirmed: false, bankNetAmount: "99.999999999999999999", state: "partial" };
    const fetcher = vi.fn(async () => new Response(JSON.stringify({ success: true, data: evidence }), { headers: { "content-type": "application/json" } }));
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: { apiKey: "test-key" }, fetch: fetcher });
    expect(await client.invoices.getPaymentEvidence(42)).toEqual(evidence);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://bill.example.test/invoices/external/42/payment-evidence");
    expect(init.method).toBe("GET");
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer test-key");
  });
  it("never invents evidence when the producer fails", async () => {
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: "test", maxRetries: 0,
      fetch: async () => new Response(JSON.stringify({ success: false, message: "Unavailable" }), { status: 503 }) });
    await expect(client.invoices.getPaymentEvidence(42)).rejects.toMatchObject({ status: 503 });
  });
});
