import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient } from "../src/index";

describe("invoice payment instructions", () => {
  it("uses the registered authenticated GET route and preserves the frozen recipient and exact decimal amount", async () => {
    const evidence = { invoiceId: 42, reference: "B0123456789ABCDEF01234567", iban: "DE89370400440532013000", accountOwner: "Recipient", bic: null, bankName: null, currency: "EUR", invoiceAmount: "99.999999999999999999", createdAt: "2026-10-03T00:00:00Z" };
    const fetcher = vi.fn(async () => new Response(JSON.stringify({ success: true, data: evidence }), { headers: { "content-type": "application/json" } }));
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: { apiKey: "test-key" }, fetch: fetcher });
    expect(await client.invoices.getPaymentInstructions(42)).toEqual(evidence);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://bill.example.test/invoices/external/42/payment-instructions");
    expect(init.method).toBe("GET");
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer test-key");
  });
  it("preserves the explicit missing-snapshot conflict without inventing instructions", async () => {
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: "test", maxRetries: 0,
      fetch: async () => new Response(JSON.stringify({ success: false, message: "Unavailable" }), { status: 409 }) });
    await expect(client.invoices.getPaymentInstructions(42)).rejects.toMatchObject({ status: 409 });
  });
});
