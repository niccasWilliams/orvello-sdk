/**
 * `headers` aus der Konfiguration gehen an JEDEN Weg zum Dienst, nicht nur an den
 * Geschaeftsaufruf. Bis 0.7.0 liefen Token-Tausch, Gesundheits- und Vertragsprobe ohne
 * sie. Hinter Cloudflare Access haette damit schon der Token-Tausch an der Kante
 * geendet, und jeder Geschaeftsaufruf danach waere mit ihm gescheitert.
 */

import { describe, it, expect, vi } from "vitest";
import { createOrvelloClient, HEALTH_PATH } from "../src/index";

const ACCESS = { "CF-Access-Client-Id": "id.access", "CF-Access-Client-Secret": "geheim" };

function recordingClient(extra: { tokenUrl?: string } = {}) {
  const seen: Array<{ url: string; headers: Headers }> = [];
  const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
    seen.push({ url, headers: new Headers(init?.headers) });
    if (url.endsWith("/oauth/token")) {
      return new Response(JSON.stringify({ access_token: "tok", expires_in: 3600 }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ success: true, data: {} }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  });
  const client = createOrvelloClient({
    baseUrl: "https://bills.example.com",
    fetch: mockFetch as unknown as typeof fetch,
    auth: { clientId: "c", clientSecret: "s", ...(extra.tokenUrl ? { tokenUrl: extra.tokenUrl } : {}) },
    headers: ACCESS,
    maxRetries: 0,
  });
  return { client, seen };
}

const carriesAccess = (h: Headers) => h.get("cf-access-client-id") === "id.access" && h.get("cf-access-client-secret") === "geheim";

describe("Kopfzeilen an jedem Weg zum Dienst", () => {
  it("Token-Tausch und Geschaeftsaufruf tragen sie", async () => {
    const { client, seen } = recordingClient();
    await client.invoices.getById(1);

    const token = seen.find((r) => r.url.endsWith("/oauth/token"))!;
    const call = seen.find((r) => r.url.includes("/invoices/"))!;
    expect(carriesAccess(token.headers)).toBe(true);
    expect(token.headers.get("authorization")).toMatch(/^Basic /);
    expect(carriesAccess(call.headers)).toBe(true);
    expect(call.headers.get("authorization")).toBe("Bearer tok");
  });

  it("Gesundheitsprobe und Vertragsprobe tragen sie", async () => {
    const { client, seen } = recordingClient();
    await client.checkHealth();
    await client.diagnose();

    const health = seen.find((r) => r.url.endsWith(HEALTH_PATH))!;
    const contract = seen.find((r) => r.url.endsWith("/health/contract"))!;
    expect(carriesAccess(health.headers)).toBe(true);
    expect(carriesAccess(contract.headers)).toBe(true);
  });

  it("ein eigener Token-Endpunkt gehoert zum Dienst", async () => {
    const { client, seen } = recordingClient({ tokenUrl: "https://auth.example.com/oauth/token" });
    await client.invoices.getById(1);
    expect(carriesAccess(seen.find((r) => r.url.startsWith("https://auth.example.com"))!.headers)).toBe(true);
  });

  it("ein fremder Host bekommt sie nicht", async () => {
    const { client, seen } = recordingClient();
    await client.invoices.downloadPdfFromUrl("https://storage.example.net/x.pdf").catch(() => undefined);
    const foreign = seen.find((r) => r.url.startsWith("https://storage.example.net"))!;
    expect(foreign.headers.get("cf-access-client-id")).toBeNull();
    expect(foreign.headers.get("authorization")).toBeNull();
  });
});
