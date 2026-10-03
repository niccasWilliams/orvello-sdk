import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient, OrvelloApiError } from "../src/index";
const body = { invoiceDate: "2026-10-03", dueDate: "2026-10-17", currency: "EUR", lineItems: [{ title: "Service", quantity: 1, unitPriceNet: "100.00" }] };
describe("invoice creation keys", () => {
  it.each(["body", "options"])("preserves the %s key and complete body after a lost response", async source => {
    const requests: string[] = [];
    const fetch = vi.fn(async (_url, init) => {
      requests.push(init.body);
      if (requests.length === 1) throw new TypeError("fetch failed after commit");
      return new Response(JSON.stringify({ success: true, data: { invoice: { id: 42 } } }), { status: 201, headers: { "content-type": "application/json" } });
    });
    const client = createOrvelloClient({ baseUrl: "https://bill.example.com", fetch, maxRetries: 1, retryBaseDelayMs: 1 });
    const result = source === "body"
      ? await client.invoices.create({ ...body, idempotencyKey: "shop:order-1" })
      : await client.invoices.create(body, { idempotencyKey: "shop:order-1" });
    expect(result.invoice.id).toBe(42); expect(requests).toHaveLength(2);
    expect(requests[0]).toBe(requests[1]);
    expect(JSON.parse(requests[1])).toEqual({ ...body, idempotencyKey: "shop:order-1" });
  });
  it("rejects two different keys before sending anything", async () => {
    const fetch = vi.fn();
    const client = createOrvelloClient({ baseUrl: "https://bill.example.com", fetch });
    await expect(client.invoices.create({ ...body, idempotencyKey: "a" }, { idempotencyKey: "b" })).rejects.toThrow("different idempotency keys");
    expect(fetch).not.toHaveBeenCalled();
  });
  it("does not retry a server payload conflict", async () => {
    const fetch = vi.fn(async () => new Response(JSON.stringify({ success: false, message: "IDEMPOTENCY_CONFLICT" }), { status: 409 }));
    const client = createOrvelloClient({ baseUrl: "https://bill.example.com", fetch, maxRetries: 3 });
    await expect(client.invoices.create({ ...body, idempotencyKey: "a" })).rejects.toBeInstanceOf(OrvelloApiError);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
