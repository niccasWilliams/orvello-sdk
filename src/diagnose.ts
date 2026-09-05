import { CONTRACT_SHA256 } from "./contract-hash.js";

// Replaced at build time by tsup/vitest `define`.
declare const __ORVELLO_SDK_VERSION__: string;
const SDK_VERSION: string = typeof __ORVELLO_SDK_VERSION__ === "string" ? __ORVELLO_SDK_VERSION__ : "0.0.0-unbuilt";

export type OrvelloContractStatus = "match" | "drift" | "unknown";

export type OrvelloDiagnosis = {
  ok: boolean;
  baseUrl: string | null;
  sdkVersion: string;
  reachable: boolean;
  contract: {
    status: OrvelloContractStatus;
    sdk: string;
    live: string | null;
    files: number | null;
  };
  problems: string[];
  checkedAt: string;
};

export type BaseUrlProvider = string | (() => string | Promise<string>);

export type OrvelloDiagnoseOptions = {
  client?: { baseUrl: BaseUrlProvider };
  baseUrl?: BaseUrlProvider;
  fetch?: typeof globalThis.fetch;
  timeoutMs?: number;
  signal?: AbortSignal;
};

type ContractResponse = {
  service?: unknown;
  contractSha256?: unknown;
  files?: unknown;
};

function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) throw new Error("Base URL cannot be empty");
  return trimmed.replace(/\/+$/, "");
}

async function resolveBaseUrl(options: OrvelloDiagnoseOptions): Promise<string> {
  const provider = options.client?.baseUrl ?? options.baseUrl;
  if (!provider) {
    throw new Error(
      "Diagnosing requires a target platform: pass { baseUrl } (the services checks its own " +
        "baseUrl) — the SDK ships no baked-in default endpoint."
    );
  }
  const value = typeof provider === "function" ? await provider() : provider;
  return normalizeBaseUrl(value);
}

/**
 * Ask a running orvello accounting/invoicing service which contract it speaks
 * and compare it to the one this SDK was built against.
 *
 * Read-only, unauthenticated, and cheap — designed for health-checks and AMP
 * connection-reconciliation (TSK-000084 / Kanten-Modell: connection_kind = 'invoicing').
 */
export async function diagnoseOrvello(options: OrvelloDiagnoseOptions = {}): Promise<OrvelloDiagnosis> {
  const checkedAt = new Date().toISOString();
  let baseUrl: string | null = null;
  try {
    baseUrl = await resolveBaseUrl(options);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      baseUrl: null,
      sdkVersion: SDK_VERSION,
      reachable: false,
      contract: { status: "unknown", sdk: CONTRACT_SHA256, live: null, files: null },
      problems: [`Invalid base URL: ${detail}`],
      checkedAt,
    };
  }

  const doFetch = options.fetch ?? globalThis.fetch;
  const timeoutMs = options.timeoutMs ?? 5_000;

  const base: OrvelloDiagnosis = {
    ok: false,
    baseUrl,
    sdkVersion: SDK_VERSION,
    reachable: false,
    contract: { status: "unknown", sdk: CONTRACT_SHA256, live: null, files: null },
    problems: [],
    checkedAt,
  };

  if (typeof doFetch !== "function") {
    return { ...base, problems: ["No fetch implementation available; pass `fetch` explicitly."] };
  }

  const controller = new AbortController();
  const onAbort = () => controller.abort(options.signal?.reason);
  options.signal?.addEventListener("abort", onAbort, { once: true });
  if (options.signal?.aborted) controller.abort(options.signal.reason);
  const timer = setTimeout(() => controller.abort(new Error(`Contract probe timed out after ${timeoutMs}ms`)), timeoutMs);

  let response: Response;
  try {
    response = await doFetch(`${baseUrl}/health/contract`, {
      method: "GET",
      headers: { accept: "application/json" },
      signal: controller.signal,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    return { ...base, problems: [`the orvello service at ${baseUrl} could not be reached: ${detail}`] };
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener("abort", onAbort);
  }

  if (response.status === 404) {
    return {
      ...base,
      reachable: true,
      problems: [
        `the orvello service at ${baseUrl} does not serve GET /health/contract, so the contract cannot be verified.`,
      ],
    };
  }

  if (!response.ok) {
    return {
      ...base,
      reachable: true,
      problems: [`the orvello service at ${baseUrl} answered ${response.status} for GET /health/contract; contract not verified.`],
    };
  }

  let body: ContractResponse;
  try {
    body = (await response.json()) as ContractResponse;
  } catch {
    return { ...base, reachable: true, problems: [`the orvello service at ${baseUrl} returned a non-JSON contract fingerprint.`] };
  }

  const live = typeof body.contractSha256 === "string" && body.contractSha256 ? body.contractSha256 : null;
  const files = typeof body.files === "number" ? body.files : null;

  if (!live) {
    return {
      ...base,
      reachable: true,
      contract: { ...base.contract, files },
      problems: [`the orvello service at ${baseUrl} could not compute its own contract fingerprint; contract not verified.`],
    };
  }

  if (live !== CONTRACT_SHA256) {
    return {
      ...base,
      reachable: true,
      contract: { status: "drift", sdk: CONTRACT_SHA256, live, files },
      problems: [
        `Contract drift: the orvello service at ${baseUrl} speaks ${live.slice(0, 12)}, `
        + `@orvello/sdk ${SDK_VERSION} was built against ${CONTRACT_SHA256.slice(0, 12)}. `
        + "Pin a newer SDK version, or deploy the orvello service the SDK was built from.",
      ],
    };
  }

  return {
    ...base,
    ok: true,
    reachable: true,
    contract: { status: "match", sdk: CONTRACT_SHA256, live, files },
  };
}
