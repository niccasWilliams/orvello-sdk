/**
 * Der Probelauf: "wuerde dieser Aufruf heute klappen?" — ohne ihn zu tun.
 *
 * Ein Verbindungs-Verwalter muss zwei Dinge auseinanderhalten koennen, die sonst
 * gern zusammenfallen: *darf ich* und *habe ich*. Eine Kante anzulegen erzeugt
 * echte Daten auf beiden Seiten; das ist ein freigegebener Schritt und kein
 * Nebenprodukt einer Pruefung. Trotzdem will man jederzeit — auch turnusmaessig,
 * auch ohne Anlass — wissen, ob der Weg noch traegt.
 *
 * Genau diese Luecke fuellt der Probelauf. Er geht denselben Weg wie der echte
 * Aufruf: dieselbe Basis-URL, dieselbe Credential-Bahn, derselbe Vertrag. Er
 * hoert nur vor dem Schreiben auf. Was er beweist, ist die **Berechtigung**, nicht
 * das **Ergebnis** — und dieser Unterschied steht in jedem Bericht, damit ihn
 * niemand ueberliest.
 *
 * ⭐ Jeder Schritt traegt seinen Grund. Ein `ok: false` ohne Satz ist genau die
 * schweigende Luecke, die aussieht wie Gesundheit.
 */

import { diagnoseOrvello, type OrvelloDiagnosis } from "./diagnose.js";
import {
  describeOperation,
  OrvelloOperationError,
  buildPath,
  type OrvelloAuthChannel,
  type OrvelloOperation,
} from "./operations.js";

/** Der oeffentliche Erreichbarkeits-Endpunkt, wie ihn der Vertrag fuehrt. */
export const HEALTH_PATH = describeOperation("app_info_health")?.path ?? "/app-info/health";

export type PreflightStepName =
  | "operation"
  | "path-parameters"
  | "request-shape"
  | "reachable"
  | "contract"
  | "credential-configured"
  | "credential-accepted";

export type PreflightStep = {
  name: PreflightStepName;
  ok: boolean;
  /** Uebersprungen heisst: nicht gepruefft. Nie "in Ordnung". */
  skipped: boolean;
  /** Was geprueft wurde und was dabei herauskam — in Worten, nicht als Code. */
  detail: string;
};

export type PreflightReport = {
  ok: boolean;
  operationId: string;
  method: string | null;
  /** Der Pfad, der wirklich gerufen wuerde — Platzhalter bereits gesetzt. */
  path: string | null;
  baseUrl: string | null;
  authChannel: OrvelloAuthChannel | null;
  /**
   * Immer `"none"`. Ein Probelauf schreibt nicht — das ist seine Zusage, nicht
   * eine Eigenschaft des Einzelfalls.
   */
  sideEffects: "none";
  /**
   * Ob der Dienst selbst einen serverseitigen Probelauf dieser Operation kennt.
   * `false` heisst: das hier ist eine Wegpruefung, keine Ergebnisvorschau.
   */
  serverSideDryRun: boolean;
  steps: PreflightStep[];
  problems: string[];
  checkedAt: string;
};

/**
 * Was der Probelauf vom Client braucht. Bewusst schmal gehalten, damit die
 * Pruefung nicht am Client haengt und einzeln testbar bleibt.
 */
export type PreflightHost = {
  resolveBaseUrl(): Promise<string>;
  fetchImpl(): typeof globalThis.fetch;
  /** Ist fuer diese Bahn ueberhaupt ein Credential hinterlegt? Ohne Netz. */
  hasCredentialFor(channel: OrvelloAuthChannel): Promise<boolean>;
  /**
   * Ein echter, ausschliesslich lesender Aufruf auf derselben Bahn.
   * Beweist, dass das Credential nicht nur da ist, sondern auch angenommen wird.
   */
  probeCredential(channel: OrvelloAuthChannel, signal?: AbortSignal): Promise<{ ok: boolean; detail: string }>;
};

export type PreflightOptions = {
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
  body?: unknown;
  timeoutMs?: number;
  signal?: AbortSignal;
  /**
   * Den teuersten Schritt auslassen: kein echter Aufruf, nur die Frage, ob ein
   * Credential hinterlegt ist. Fuer Massenpruefungen ueber viele Kanten.
   */
  skipCredentialProbe?: boolean;
};

function step(name: PreflightStepName, ok: boolean, detail: string, skipped = false): PreflightStep {
  return { name, ok, skipped, detail };
}

/**
 * Prueft einen Aufrufweg, ohne ihn zu gehen.
 *
 * Die Reihenfolge ist Absicht: erst alles, was ohne Netz entschieden werden kann
 * (Vertrag, Parameter, Gestalt), dann die Erreichbarkeit, dann der Vertrag der
 * laufenden Gegenstelle, zuletzt das Credential. So nennt der Bericht bei einem
 * Fehlschlag die *frueheste* Ursache, statt einen Folgefehler zu melden.
 */
export async function preflightOrvello(
  host: PreflightHost,
  operationId: string,
  options: PreflightOptions = {}
): Promise<PreflightReport> {
  const checkedAt = new Date().toISOString();
  const steps: PreflightStep[] = [];
  const problems: string[] = [];

  const report = (extra: Partial<PreflightReport>): PreflightReport => ({
    ok: problems.length === 0,
    operationId,
    method: null,
    path: null,
    baseUrl: null,
    authChannel: null,
    sideEffects: "none",
    serverSideDryRun: false,
    steps,
    problems,
    checkedAt,
    ...extra,
  });

  // 1 — Kennt der Vertrag diese Operation ueberhaupt?
  const operation: OrvelloOperation | null = describeOperation(operationId);
  if (!operation) {
    steps.push(
      step(
        "operation",
        false,
        `Der Vertrag, gegen den dieses SDK gebaut wurde, kennt "${operationId}" nicht. `
          + "Entweder ist der Name falsch, oder das SDK ist aelter als der Dienst."
      )
    );
    problems.push(`Unbekannte Operation "${operationId}".`);
    return report({});
  }
  steps.push(
    step(
      "operation",
      true,
      `${operation.method} ${operation.path} (Auth laut Vertrag: ${operation.authType || "keine Angabe"} → Bahn "${operation.channel}").`
    )
  );

  // 2 — Sind die Platzhalter gefuellt? Ohne das ginge ein Pfad mit ":name" ans Netz.
  let path: string | null = null;
  try {
    path = buildPath(operationId, options.params);
    steps.push(step("path-parameters", true, `Gerufen wuerde: ${operation.method} ${path}`));
  } catch (error) {
    const detail = error instanceof OrvelloOperationError ? error.message : String(error);
    steps.push(step("path-parameters", false, detail));
    problems.push(detail);
    return report({ method: operation.method, authChannel: operation.channel });
  }

  // 3 — Passt die Gestalt der Anfrage zu dem, was der Dienst validiert?
  const shapeProblems: string[] = [];
  if (operation.validated.body && options.body === undefined) {
    shapeProblems.push("Der Dienst validiert einen Body, es wurde aber keiner uebergeben.");
  }
  if (!operation.validated.body && options.body !== undefined) {
    shapeProblems.push("Es wurde ein Body uebergeben, den diese Route nicht auswertet.");
  }
  if (operation.validated.query && options.query === undefined) {
    shapeProblems.push(
      "Die Route validiert Query-Parameter; ohne uebergebene Werte gelten allein die Voreinstellungen des Dienstes."
    );
  }
  if (shapeProblems.length === 0) {
    steps.push(step("request-shape", true, "Body- und Query-Erwartung des Vertrags sind erfuellt."));
  } else {
    // Bewusst kein `problem`: die Gestalt ist ein Hinweis, kein Beweis. Nur ein
    // fehlender Pflicht-Body ist hart — alles andere kann legitim sein.
    const hard = operation.validated.body && options.body === undefined;
    steps.push(step("request-shape", !hard, shapeProblems.join(" ")));
    if (hard) problems.push(shapeProblems[0] as string);
  }

  // 4 — Steht der Dienst?
  const baseUrl = await host.resolveBaseUrl().catch(() => null);
  if (!baseUrl) {
    steps.push(step("reachable", false, "Die Basis-URL des Dienstes konnte nicht aufgeloest werden."));
    problems.push("Basis-URL nicht aufloesbar.");
    return report({ method: operation.method, path, authChannel: operation.channel });
  }

  const timeoutMs = options.timeoutMs ?? 8_000;
  const reachable = await probeReachable(host, baseUrl, timeoutMs, options.signal);
  steps.push(step("reachable", reachable.ok, reachable.detail));
  if (!reachable.ok) {
    problems.push(reachable.detail);
    return report({ method: operation.method, path, baseUrl, authChannel: operation.channel });
  }

  // 5 — Spricht die laufende Gegenstelle den Vertrag, den dieses SDK kennt?
  const diagnosis: OrvelloDiagnosis = await diagnoseOrvello({
    baseUrl,
    fetch: host.fetchImpl(),
    timeoutMs,
    signal: options.signal,
  });
  if (diagnosis.contract.status === "match") {
    steps.push(step("contract", true, `Vertrag stimmt ueberein (${diagnosis.contract.sdk.slice(0, 12)}).`));
  } else if (diagnosis.contract.status === "drift") {
    const detail = diagnosis.problems[0] ?? "Vertrags-Abweichung zwischen SDK und Dienst.";
    steps.push(step("contract", false, detail));
    problems.push(detail);
  } else {
    // Unbekannt ist nicht gut und nicht schlecht — aber es ist nicht geprueft,
    // und genau so steht es im Bericht.
    steps.push(
      step(
        "contract",
        false,
        diagnosis.problems[0] ?? "Der Vertrag der Gegenstelle konnte nicht ermittelt werden.",
        true
      )
    );
  }

  // 6 — Ist fuer die von der Route verlangte Bahn ueberhaupt etwas hinterlegt?
  if (operation.channel === "none") {
    steps.push(step("credential-configured", true, "Die Route ist oeffentlich und braucht kein Credential.", true));
    steps.push(step("credential-accepted", true, "Entfaellt: oeffentliche Route.", true));
    return report({ method: operation.method, path, baseUrl, authChannel: operation.channel });
  }

  const configured = await host.hasCredentialFor(operation.channel);
  const channelName =
    operation.channel === "api_key"
      ? "der Verwaltungs-Schluessel (Header `x-api-key`)"
      : "das Bearer-Credential (OAuth2-Client oder Token)";
  steps.push(
    step(
      "credential-configured",
      configured,
      configured
        ? `${channelName} ist hinterlegt.`
        : `${channelName} fehlt. Diese Route ist ohne ihn nicht aufrufbar.`
    )
  );
  if (!configured) {
    problems.push(`Kein Credential fuer die Bahn "${operation.channel}" hinterlegt.`);
    return report({ method: operation.method, path, baseUrl, authChannel: operation.channel });
  }

  // 7 — Und wird es auch angenommen? Ein lesender Aufruf, kein schreibender.
  if (options.skipCredentialProbe) {
    steps.push(
      step("credential-accepted", false, "Auf Wunsch uebersprungen — hinterlegt ist nicht angenommen.", true)
    );
    return report({ method: operation.method, path, baseUrl, authChannel: operation.channel });
  }

  const accepted = await host.probeCredential(operation.channel, options.signal);
  steps.push(step("credential-accepted", accepted.ok, accepted.detail));
  if (!accepted.ok) problems.push(accepted.detail);

  return report({ method: operation.method, path, baseUrl, authChannel: operation.channel });
}

async function probeReachable(
  host: PreflightHost,
  baseUrl: string,
  timeoutMs: number,
  signal?: AbortSignal
): Promise<{ ok: boolean; detail: string }> {
  const doFetch = host.fetchImpl();
  const controller = new AbortController();
  const onAbort = () => controller.abort(signal?.reason);
  signal?.addEventListener("abort", onAbort, { once: true });
  if (signal?.aborted) controller.abort(signal.reason);
  const timer = setTimeout(() => controller.abort(new Error(`Reachability probe timed out after ${timeoutMs}ms`)), timeoutMs);

  const started = Date.now();
  try {
    // ⭐ Die Vertrags-Route, nicht ein geratener Pfad. `/health` gibt es bei
    // node-bill, aber es steht in keinem Vertrag -- eine andere orvello-Instanz
    // muss es nicht haben, und ein 404 saehe dann aus wie "Dienst tot".
    // `app_info_health` ist die Operation, die `capabilities()` als
    // Erreichbarkeits-Weg ausweist; beide zeigen damit auf dasselbe.
    const response = await doFetch(`${baseUrl}${HEALTH_PATH}`, {
      method: "GET",
      headers: { accept: "application/json" },
      signal: controller.signal,
    });
    const took = Date.now() - started;
    // Auch eine 4xx-Antwort beweist, dass jemand zuhoert. Erreichbarkeit ist
    // Transport, nicht Berechtigung — die Trennung ist der ganze Punkt.
    return {
      ok: response.status < 500,
      detail:
        response.status < 500
          ? `${baseUrl} antwortet (${response.status}, ${took} ms).`
          : `${baseUrl} antwortet mit ${response.status} — der Dienst laeuft, aber nicht gesund.`,
    };
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    return { ok: false, detail: `${baseUrl} ist nicht erreichbar: ${detail}` };
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }
}
