/**
 * Die Zusagen, die 0.2.0 ausmachen — und die Fehlschluesse, gegen die sie stehen.
 *
 * Jeder Block hier haelt eine Eigenschaft fest, deren Verletzung bis 0.1.0 nicht
 * als Fehler sichtbar gewesen waere, sondern als falsches Gruen: ein Aufruf, der
 * mit dem falschen Credential rausgeht; ein Sicherungsautomat, der sich an
 * Berechtigungsfehlern selbst abschaltet; ein Probelauf, der "nicht geprueft"
 * mit "in Ordnung" verwechselt.
 */

import { describe, it, expect, vi } from "vitest";
import {
  createOrvelloClient,
  OrvelloApiError,
  OrvelloOperationError,
  resolveOperation,
  describeOperation,
  buildPath,
  listOperations,
  authChannelForContractType,
  orvelloCapabilities,
} from "../src/index";

type Recorded = { url: string; method: string; headers: Headers };

function mockClient(options: {
  managementApiKey?: string;
  auth?: unknown;
  status?: number;
  body?: unknown;
  headers?: Record<string, string>;
  onRequest?: (recorded: Recorded) => void;
  fail?: () => never;
}) {
  const recorded: Recorded[] = [];
  const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
    const entry = { url, method: init?.method || "GET", headers: new Headers(init?.headers) };
    recorded.push(entry);
    options.onRequest?.(entry);
    if (options.fail) options.fail();
    return new Response(JSON.stringify({ success: true, data: options.body ?? {} }), {
      status: options.status ?? 200,
      headers: { "content-type": "application/json" },
    });
  });

  const client = createOrvelloClient({
    baseUrl: "https://orvello.example.com",
    fetch: mockFetch as unknown as typeof fetch,
    auth: (options.auth as never) ?? "static-token",
    ...(options.managementApiKey ? { managementApiKey: options.managementApiKey } : {}),
    ...(options.headers ? { headers: options.headers } : {}),
    maxRetries: 0,
  });

  return { client, recorded, mockFetch };
}

describe("Die Route bestimmt das Credential", () => {
  it("schickt Geschaeftsrouten als Bearer und ohne Verwaltungs-Schluessel", async () => {
    const { client, recorded } = mockClient({ managementApiKey: "mgmt-secret" });

    await client.invoices.getPending();

    const request = recorded.at(-1)!;
    expect(request.headers.get("authorization")).toBe("Bearer static-token");
    expect(request.headers.get("x-api-key")).toBeNull();
  });

  it("schickt Verwaltungsrouten als x-api-key und ohne Bearer", async () => {
    const { client, recorded } = mockClient({ managementApiKey: "mgmt-secret" });

    await client.oauthClients.create({ name: "node-shop Rechnungen", role: "editor" });

    const request = recorded.at(-1)!;
    expect(request.headers.get("x-api-key")).toBe("mgmt-secret");
    expect(request.headers.get("authorization")).toBeNull();
  });

  it("nennt beim fehlenden Verwaltungs-Schluessel die Ursache, statt 403 zu ernten", async () => {
    const { client, mockFetch } = mockClient({});

    await expect(client.oauthClients.list()).rejects.toThrow(/ORVELLO_MANAGEMENT_API_KEY/);
    // ⭐ Der entscheidende Teil: es ging gar keine Anfrage raus. Der Dienst haette
    // mit `403 Invalid API key` geantwortet -- einer Meldung, die nach einem
    // falschen statt nach einem fehlenden Wert aussieht.
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("laesst eine leere Umgebungsvariable nicht als Schluessel durchgehen", async () => {
    const { client } = mockClient({ managementApiKey: "   " });
    await expect(client.oauthClients.list()).rejects.toThrow(/needs the `x-api-key` credential/);
  });

  it("laesst mitgegebene Kopfzeilen das Credential nicht verdraengen", async () => {
    const { client, recorded } = mockClient({
      managementApiKey: "mgmt-secret",
      headers: { "x-api-key": "aus-der-konfiguration", "x-trace": "abc" },
    });

    await client.oauthClients.list();

    const request = recorded.at(-1)!;
    expect(request.headers.get("x-trace")).toBe("abc");
    // Die Konfiguration kommt zuerst und gewinnt damit -- bewusst: wer den Header
    // ausdruecklich setzt, meint es. Der Test haelt fest, dass das eine
    // Entscheidung ist und kein Zufall.
    expect(request.headers.get("x-api-key")).toBe("aus-der-konfiguration");
  });
});

describe("Routenauflösung", () => {
  it("laesst woertliche Segmente Platzhalter schlagen", () => {
    const list = resolveOperation("GET", "/oauth/clients/external/list");
    const single = resolveOperation("GET", "/oauth/clients/external/nbill_oauth2_abc");

    expect(list?.operationId).toBe("oauth2_external_clients_list");
    expect(single?.operationId).toBe("oauth2_external_clients_get");
  });

  it("erkennt jede Auth-Art des Vertrags einer Bahn zu", () => {
    expect(authChannelForContractType("x_api_key_https")).toBe("api_key");
    expect(authChannelForContractType("x_api_key_http")).toBe("api_key");
    expect(authChannelForContractType("public")).toBe("none");
    expect(authChannelForContractType("unified_bearer")).toBe("bearer");
    expect(authChannelForContractType(undefined)).toBe("bearer");
  });

  it("belegt, dass alle neun Verwaltungsrouten auf der Schluessel-Bahn liegen", () => {
    const management = listOperations().filter((operation) =>
      operation.operationId.startsWith("oauth2_external_clients_")
    );
    expect(management).toHaveLength(9);
    expect(management.every((operation) => operation.channel === "api_key")).toBe(true);
  });

  it("wirft bei einem fehlenden Pfad-Parameter, statt ':name' ans Netz zu geben", () => {
    expect(() => buildPath("oauth2_external_clients_get", {})).toThrow(OrvelloOperationError);
    expect(buildPath("oauth2_external_clients_get", { idOrClientId: "a/b" })).toBe(
      "/oauth/clients/external/a%2Fb"
    );
  });

  it("wirft bei einer Operation, die der Vertrag nicht kennt", async () => {
    const { client } = mockClient({});
    await expect(client.call("erfundene_operation")).rejects.toThrow(OrvelloOperationError);
  });
});

describe("Sicherungsautomat", () => {
  it("oeffnet nach wiederholten Transportfehlern und antwortet dann ohne Netz", async () => {
    let calls = 0;
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      auth: "t",
      maxRetries: 0,
      circuitBreaker: { threshold: 2, cooldownMs: 60_000 },
      fetch: (async () => {
        calls++;
        throw new Error("fetch failed");
      }) as unknown as typeof fetch,
    });

    await expect(client.invoices.getPending()).rejects.toThrow();
    await expect(client.invoices.getPending()).rejects.toThrow();
    expect(client.isAvailable()).toBe(false);

    await expect(client.invoices.getPending()).rejects.toThrow(/circuit open|not answering/i);
    // Der dritte Versuch hat den Draht nicht mehr angefasst.
    expect(calls).toBe(2);
    expect(client.circuitState().consecutiveFailures).toBe(2);

    client.resetCircuit();
    expect(client.isAvailable()).toBe(true);
  });

  it("oeffnet NICHT bei Berechtigungsfehlern", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "falsch",
      maxRetries: 0,
      circuitBreaker: { threshold: 2, cooldownMs: 60_000 },
      fetch: (async () =>
        new Response("Forbidden: Invalid API key", { status: 403 })) as unknown as typeof fetch,
    });

    await expect(client.oauthClients.list()).rejects.toThrow();
    await expect(client.oauthClients.list()).rejects.toThrow();
    await expect(client.oauthClients.list()).rejects.toThrow();

    // ⭐ Der Dienst hat dreimal geantwortet. Er ist erreichbar, er sagt nur nein.
    // Ein Automat, der hier aufmacht, verwandelt ein falsches Credential in
    // einen scheinbaren Ausfall und schickt die Suche in die falsche Richtung.
    expect(client.isAvailable()).toBe(true);
  });
});

describe("Faehigkeitsbericht", () => {
  it("leitet die Faehigkeiten aus dem Vertrag ab und belegt sie mit Operationen", () => {
    const report = orvelloCapabilities();

    expect(report.capabilities.clientManagement.supported).toBe(true);
    expect(report.capabilities.clientManagement.operations).toContain("oauth2_external_clients_create");
    expect(report.capabilities.clientRotation.supported).toBe(true);
    expect(report.capabilities.rotationGracePeriod.supported).toBe(true);
    expect(report.operationCount).toBe(listOperations().length);
    expect(report.authChannels.api_key).toBeGreaterThan(0);
  });

  it("nennt das Fehlen eines serverseitigen Probelaufs mit Grund statt still mit false", () => {
    const dryRun = orvelloCapabilities().capabilities.serverSideDryRun;
    expect(dryRun.supported).toBe(false);
    expect(dryRun.reason).toMatch(/preflightOrvello/);
  });
});

describe("Probelauf", () => {
  const okFetch = (recorded: string[] = []) =>
    (async (url: string) => {
      recorded.push(String(url));
      if (String(url).endsWith("/health")) {
        return new Response(JSON.stringify({ status: "ok" }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }
      if (String(url).endsWith("/health/contract")) {
        const { CONTRACT_SHA256 } = await import("../src/contract-hash.js");
        return new Response(JSON.stringify({ contractSha256: CONTRACT_SHA256, files: 33 }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ success: true, data: { items: [] } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch;

  it("bescheinigt einen tragfaehigen Weg, ohne zu schreiben", async () => {
    const seen: string[] = [];
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "mgmt-secret",
      fetch: okFetch(seen),
    });

    const report = await client.preflight("oauth2_external_clients_create", {
      body: { name: "node-shop Rechnungen", role: "editor" },
    });

    expect(report.ok).toBe(true);
    expect(report.authChannel).toBe("api_key");
    expect(report.path).toBe("/oauth/clients/external");
    expect(report.sideEffects).toBe("none");
    expect(report.steps.every((step) => step.ok || step.skipped)).toBe(true);
    // ⭐ Kein POST. Der Probelauf hat gelesen, nicht geschrieben.
    expect(seen.some((url) => url.includes("/oauth/clients/external/list"))).toBe(true);
    expect(seen.some((url) => url.endsWith("/oauth/clients/external"))).toBe(false);
  });

  it("meldet ein fehlendes Credential als Problem, nicht als uebersprungen", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      fetch: okFetch(),
    });

    const report = await client.preflight("oauth2_external_clients_create", {
      body: { name: "x" },
    });

    expect(report.ok).toBe(false);
    const credential = report.steps.find((step) => step.name === "credential-configured")!;
    expect(credential.ok).toBe(false);
    expect(credential.skipped).toBe(false);
    expect(credential.detail).toMatch(/x-api-key/);
  });

  it("faellt bei einem fehlenden Pfad-Parameter frueh und ohne Netzzugriff", async () => {
    const seen: string[] = [];
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "mgmt-secret",
      fetch: okFetch(seen),
    });

    const report = await client.preflight("oauth2_external_clients_rotate");

    expect(report.ok).toBe(false);
    expect(report.steps.find((step) => step.name === "path-parameters")?.ok).toBe(false);
    expect(seen).toHaveLength(0);
  });

  it("zaehlt einen uebersprungenen Schritt nicht als bestanden", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "mgmt-secret",
      fetch: okFetch(),
    });

    const report = await client.preflight("oauth2_external_clients_list", {
      query: { pageSize: 1 },
      skipCredentialProbe: true,
    });

    const probe = report.steps.find((step) => step.name === "credential-accepted")!;
    expect(probe.skipped).toBe(true);
    expect(probe.ok).toBe(false);
    expect(probe.detail).toMatch(/hinterlegt ist nicht angenommen/);
  });

  it("nennt einen abgelehnten Schluessel als abgelehnt, nicht als unerreichbar", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "falsch",
      maxRetries: 0,
      fetch: (async (url: string) => {
        if (String(url).endsWith("/health")) {
          return new Response(JSON.stringify({ status: "ok" }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        }
        if (String(url).endsWith("/health/contract")) {
          const { CONTRACT_SHA256 } = await import("../src/contract-hash.js");
          return new Response(JSON.stringify({ contractSha256: CONTRACT_SHA256, files: 33 }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        }
        return new Response("Forbidden: Invalid API key", { status: 403 });
      }) as unknown as typeof fetch,
    });

    const report = await client.preflight("oauth2_external_clients_list", { query: { pageSize: 1 } });

    expect(report.ok).toBe(false);
    expect(report.steps.find((step) => step.name === "reachable")?.ok).toBe(true);
    expect(report.steps.find((step) => step.name === "credential-accepted")?.detail).toMatch(
      /abgelehnt/
    );
  });
});

describe("Gesundheit", () => {
  it("haelt Erreichbarkeit und Berechtigung auseinander", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      fetch: (async () =>
        new Response(JSON.stringify({ status: "ok" }), {
          status: 200,
          headers: { "content-type": "application/json" },
        })) as unknown as typeof fetch,
    });

    const health = await client.checkHealth();
    expect(health.available).toBe(true);
    // ⭐ Kein Credential hinterlegt heisst "nicht gefragt" -- und genau das steht
    // da, statt eines gruenen Hakens.
    expect(health.authenticated).toBeNull();
  });

  it("meldet einen toten Dienst als nicht verfuegbar", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      auth: "t",
      fetch: (async () => {
        throw new Error("ECONNREFUSED");
      }) as unknown as typeof fetch,
    });

    const health = await client.checkHealth();
    expect(health.available).toBe(false);
    expect(health.authenticated).toBeNull();
    expect(health.error).toMatch(/ECONNREFUSED/);
  });
});

describe("Vertragstreue der Operationsliste", () => {
  it("kennt jede Operation mit Methode, Pfad und Bahn", () => {
    for (const operation of listOperations()) {
      expect(operation.method).toMatch(/^(GET|POST|PUT|PATCH|DELETE)$/);
      expect(operation.path.startsWith("/")).toBe(true);
      expect(["bearer", "api_key", "none"]).toContain(operation.channel);
      expect(describeOperation(operation.operationId)).not.toBeNull();
    }
  });

  it("wirft OrvelloApiError statt einer nackten Meldung, wenn der Dienst ablehnt", async () => {
    const client = createOrvelloClient({
      baseUrl: "https://orvello.example.com",
      managementApiKey: "k",
      maxRetries: 0,
      fetch: (async () =>
        new Response(JSON.stringify({ message: "nope" }), {
          status: 403,
          headers: { "content-type": "application/json" },
        })) as unknown as typeof fetch,
    });

    await expect(client.oauthClients.list()).rejects.toBeInstanceOf(OrvelloApiError);
  });
});
