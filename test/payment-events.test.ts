import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient } from "../src/index";

describe("invoice payment event replay", () => {
  it("sends the exclusive cursor and page size on the authenticated invoice route", async () => {
    const page = { events: [{ id: "event", version: 3, evidence: { bankNetAmount: "99.999999999999999999" } }], nextVersion: 3, hasMore: true };
    const fetcher = vi.fn(async () => new Response(JSON.stringify({ success: true, data: page }), { headers: { "content-type": "application/json" } }));
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: { apiKey: "test-key" }, fetch: fetcher });
    expect(await client.invoices.getPaymentEvents(42, { afterVersion: 2, limit: 1 })).toEqual(page);
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    const parsed = new URL(url);
    expect(parsed.pathname).toBe("/invoices/external/42/payment-events");
    expect(parsed.searchParams.get("afterVersion")).toBe("2");
    expect(parsed.searchParams.get("limit")).toBe("1");
    expect(init.method).toBe("GET");
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer test-key");
  });
  it("preserves replay failures instead of inventing an empty successful page", async () => {
    const client = createOrvelloClient({ baseUrl: "https://bill.example.test", auth: "test", maxRetries: 0,
      fetch: async () => new Response(JSON.stringify({ success: false, message: "Unavailable" }), { status: 503 }) });
    await expect(client.invoices.getPaymentEvents(42)).rejects.toMatchObject({ status: 503 });
  });
});
