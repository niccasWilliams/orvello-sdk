import { describe, it, expect } from "vitest";
import { createOrvelloClient, OrvelloRequestTimeoutError } from "../src/index";

/**
 * INC-001226: ein Zeitablauf des eigenen Limits wurde nie wiederholt, weil `fetch` den
 * Abbruchgrund (ein nackter Error) weiterwarf und `isRetriable` ihn nicht erkannte.
 */

/** Wie das echte fetch: haengt, bis das Signal abbricht, und wirft dann dessen Grund. */
function hangingThenOk(hangs: number) {
  const calls: string[] = [];
  const fetchImpl = async (_url: string, init?: RequestInit) => {
    calls.push(String(init?.method ?? "GET"));
    if (calls.length <= hangs) {
      return new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal;
        signal?.addEventListener("abort", () => reject(signal.reason), { once: true });
      });
    }
    return new Response(JSON.stringify({ success: true, data: { ok: true } }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
  return { calls, fetch: fetchImpl as unknown as typeof fetch };
}

function client(fetchImpl: typeof fetch) {
  return createOrvelloClient({
    baseUrl: "https://bill.example.com",
    auth: "t",
    timeoutMs: 20,
    maxRetries: 3,
    retryBaseDelayMs: 1,
    circuitBreaker: false,
    fetch: fetchImpl,
  });
}

describe("OrvelloClient - Zeitablauf", () => {
  it("wiederholt einen GET nach dem eigenen Zeitlimit", async () => {
    const mock = hangingThenOk(1);
    const res = await client(mock.fetch).request("/managing-companies/external/current");
    expect(res).toEqual({ ok: true });
    expect(mock.calls).toEqual(["GET", "GET"]);
  });

  it("gibt nach maxRetries mit derselben Meldung auf", async () => {
    const mock = hangingThenOk(10);
    const err = (await client(mock.fetch).request("/managing-companies/external/current").catch((e: unknown) => e)) as Error;
    expect(err).toBeInstanceOf(OrvelloRequestTimeoutError);
    expect(err.message).toBe("Request timed out after 20ms");
    expect(mock.calls).toHaveLength(4);
  });

  it("wiederholt einen POST ohne Idempotency-Key nach einem Zeitablauf nicht", async () => {
    const mock = hangingThenOk(1);
    const err = await client(mock.fetch)
      .request("/invoices/external", { method: "POST", body: "{}" })
      .catch((e: unknown) => e as Error);
    expect(err).toBeInstanceOf(OrvelloRequestTimeoutError);
    expect(mock.calls).toEqual(["POST"]);
  });

  it("wiederholt einen POST mit Idempotency-Key", async () => {
    const mock = hangingThenOk(1);
    const res = await client(mock.fetch).request("/invoices/external", {
      method: "POST",
      body: "{}",
      idempotencyKey: "k-1",
    });
    expect(res).toEqual({ ok: true });
    expect(mock.calls).toEqual(["POST", "POST"]);
  });

  it("wiederholt nicht, wenn der Aufrufer selbst abbricht", async () => {
    const mock = hangingThenOk(10);
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(new DOMException("stop", "AbortError")), 5);
    const err = await createOrvelloClient({
      baseUrl: "https://bill.example.com",
      auth: "t",
      timeoutMs: 1_000,
      maxRetries: 3,
      retryBaseDelayMs: 1,
      circuitBreaker: false,
      fetch: mock.fetch,
    })
      .request("/managing-companies/external/current", { signal: ctrl.signal })
      .catch((e: unknown) => e as Error);
    expect((err as Error).name).toBe("AbortError");
    expect(mock.calls).toHaveLength(1);
  });
});
