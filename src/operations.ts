/**
 * Die Route entscheidet, welches Credential mitgeht — nicht der Aufrufer.
 *
 * orvello (node-bill) kennt zwei Bahnen nebeneinander, und sie sind nicht
 * austauschbar:
 *
 * - **bearer** — die Geschaeftsrouten (`unified_bearer`, `frontend_*`). Hier gilt
 *   ein OAuth2-Client (client_credentials) oder ein als Bearer gesendeter Token.
 *   Das Credential gehoert der *rufenden App*.
 * - **api_key** — die Verwaltungsrouten (`x_api_key_https`), also alles unter
 *   `/oauth/clients/external/*`. Hier gilt der Header `x-api-key`. Das Credential
 *   gehoert der *Kante* zwischen Verwalter und Dienst.
 *
 * Bis 0.1.0 schickte der Client alles als `Authorization: Bearer`. Die neun
 * Verwaltungsrouten waren damit zwar getippt und aufrufbar, aber grundsaetzlich
 * nicht authentisierbar — ein Loch, das erst beim ersten echten Aufruf sichtbar
 * geworden waere, und dann als `403 Forbidden: Invalid API key` ohne Hinweis auf
 * die Ursache.
 *
 * Der generierte Vertrag traegt `auth.type` an jeder einzelnen Route. Diese Datei
 * liest genau das aus und macht es zur Laufzeitentscheidung. Eine neue Route mit
 * einer neuen Auth-Art faellt damit nicht still in die falsche Bahn, sondern
 * kommt hier an.
 */

import { ROUTE_INDEX, type RouteIndexEntry } from "./route-index.generated.js";

/** Welche Kopfzeile eine Route verlangt. */
export type OrvelloAuthChannel = "bearer" | "api_key" | "none";

/**
 * Die Auth-Arten des Vertrags, die den `x-api-key`-Header verlangen.
 *
 * `x_api_key_https` erzwingt zusaetzlich HTTPS — das ist eine Frage des
 * Transports, nicht des Credentials, und aendert an der Kopfzeile nichts.
 */
const API_KEY_AUTH_TYPES: ReadonlySet<string> = new Set(["x_api_key_http", "x_api_key_https"]);

/** Auth-Arten ganz ohne Credential. */
const PUBLIC_AUTH_TYPES: ReadonlySet<string> = new Set(["public"]);

export type OrvelloOperationId = keyof typeof ROUTE_INDEX & string;

export type OrvelloOperation = {
  operationId: string;
  method: string;
  /** Die Vorlage aus dem Vertrag, Platzhalter noch als `:name`. */
  path: string;
  /** Die Auth-Art, wie sie woertlich im Vertrag steht. */
  authType: string;
  /** Was daraus fuer den Aufruf folgt. */
  channel: OrvelloAuthChannel;
  /** Was der Dienst an dieser Route validiert — aus `meta.validated`. */
  validated: { params: boolean; query: boolean; body: boolean };
  /** Die im Vertrag geforderten OAuth2-Scopes, sofern die Auth-Art welche nennt. */
  scopes: readonly string[];
};

/** Bit-Stellen der Validierungs-Angabe in {@link RouteIndexEntry}. */
const VALIDATES_PARAMS = 1;
const VALIDATES_QUERY = 2;
const VALIDATES_BODY = 4;

const CHANNEL_BY_CODE: Record<string, OrvelloAuthChannel> = {
  b: "bearer",
  k: "api_key",
  n: "none",
};

/**
 * Bildet eine Auth-Art des Vertrags auf die Bahn ab, ueber die sie bedient wird.
 *
 * Unbekannte Arten landen bewusst auf `bearer`: das ist die Bahn aller
 * Geschaeftsrouten und damit die einzige Voreinstellung, die einen neuen,
 * hier noch nicht gesehenen Routentyp nicht sofort unbrauchbar macht.
 */
export function authChannelForContractType(authType: string | undefined | null): OrvelloAuthChannel {
  if (!authType) return "bearer";
  if (API_KEY_AUTH_TYPES.has(authType)) return "api_key";
  if (PUBLIC_AUTH_TYPES.has(authType)) return "none";
  return "bearer";
}

function toOperation(operationId: string, entry: RouteIndexEntry): OrvelloOperation {
  const [method, path, channelCode, authType, validated, scopes] = entry;
  return {
    operationId,
    method,
    path,
    authType,
    // Der Code in der Tabelle ist bereits das Ergebnis von
    // `authChannelForContractType` zur Erzeugungszeit; faellt er unbekannt aus,
    // gilt dieselbe Regel noch einmal statt einer stillen Voreinstellung.
    channel: CHANNEL_BY_CODE[channelCode] ?? authChannelForContractType(authType),
    validated: {
      params: (validated & VALIDATES_PARAMS) !== 0,
      query: (validated & VALIDATES_QUERY) !== 0,
      body: (validated & VALIDATES_BODY) !== 0,
    },
    scopes: scopes ? [...scopes] : [],
  };
}

let cachedOperations: OrvelloOperation[] | null = null;

/** Alle Operationen des Vertrags, gegen den dieses SDK gebaut wurde. */
export function listOperations(): readonly OrvelloOperation[] {
  if (!cachedOperations) {
    cachedOperations = Object.entries(ROUTE_INDEX).map(([operationId, entry]) =>
      toOperation(operationId, entry)
    );
  }
  return cachedOperations;
}

/** Eine Operation nach ihrer `operationId`, oder `null`, wenn der Vertrag sie nicht kennt. */
export function describeOperation(operationId: string): OrvelloOperation | null {
  const entry = ROUTE_INDEX[operationId];
  return entry ? toOperation(operationId, entry) : null;
}

type PathIndexEntry = { segments: string[]; operation: OrvelloOperation };

let cachedPathIndex: Map<string, PathIndexEntry[]> | null = null;

function pathIndex(): Map<string, PathIndexEntry[]> {
  if (cachedPathIndex) return cachedPathIndex;
  const index = new Map<string, PathIndexEntry[]>();
  for (const operation of listOperations()) {
    const segments = splitPath(operation.path);
    const key = `${operation.method} ${segments.length}`;
    const bucket = index.get(key);
    if (bucket) bucket.push({ segments, operation });
    else index.set(key, [{ segments, operation }]);
  }
  cachedPathIndex = index;
  return index;
}

function splitPath(path: string): string[] {
  return path.split("/").filter((segment) => segment.length > 0);
}

/**
 * Findet die Route, die ein konkreter Pfad anspricht.
 *
 * ⭐ Woertliche Segmente schlagen Platzhalter. Ohne diese Regel wuerde
 * `GET /oauth/clients/external/list` auf `/oauth/clients/external/:idOrClientId`
 * fallen — beide sind GET mit vier Segmenten — und die Auflistung bekaeme die
 * Auth-Entscheidung einer anderen Route. Dass beide hier dieselbe Bahn
 * verlangen, ist Zufall und kein Verlass.
 */
export function resolveOperation(method: string, path: string): OrvelloOperation | null {
  const wanted = splitPath(path.split("?")[0] ?? path);
  const bucket = pathIndex().get(`${method.toUpperCase()} ${wanted.length}`);
  if (!bucket) return null;

  let best: { score: number; operation: OrvelloOperation } | null = null;

  for (const entry of bucket) {
    let score = 0;
    let matches = true;
    for (let i = 0; i < wanted.length; i++) {
      const template = entry.segments[i] as string;
      if (template.startsWith(":")) continue;
      if (template === decodeSegment(wanted[i] as string)) score++;
      else {
        matches = false;
        break;
      }
    }
    if (!matches) continue;
    if (!best || score > best.score) best = { score, operation: entry.operation };
  }

  return best?.operation ?? null;
}

function decodeSegment(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/** Fehlt ein Pfad-Parameter, ist der Aufruf falsch — nicht der Dienst. */
export class OrvelloOperationError extends Error {
  constructor(message: string, public readonly operationId: string) {
    super(message);
    this.name = "OrvelloOperationError";
  }
}

/**
 * Setzt die Platzhalter einer Vertrags-Route.
 *
 * Ein fehlender Parameter wirft hier, statt einen Pfad mit `:idOrClientId` darin
 * ans Netz zu geben. Der Dienst antwortete darauf mit 404 oder — schlimmer — mit
 * dem Treffer einer anderen Route.
 */
export function buildPath(operationId: string, params?: Record<string, unknown>): string {
  const operation = describeOperation(operationId);
  if (!operation) {
    throw new OrvelloOperationError(
      `Unknown orvello operation "${operationId}". It is not part of the contract this SDK was built against.`,
      operationId
    );
  }

  return (
    "/" +
    splitPath(operation.path)
      .map((segment) => {
        if (!segment.startsWith(":")) return segment;
        const name = segment.slice(1);
        const value = params?.[name];
        if (value === undefined || value === null || value === "") {
          throw new OrvelloOperationError(
            `orvello operation "${operationId}" needs the path parameter "${name}" (${operation.method} ${operation.path}).`,
            operationId
          );
        }
        return encodeURIComponent(String(value));
      })
      .join("/")
  );
}
