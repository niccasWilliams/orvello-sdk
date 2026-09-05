/**
 * Was dieser Dienst kann — als Daten, ohne Netz und ohne Vermutung.
 *
 * Ein Verbindungs-Verwalter (node-amp) kann Kanten nur dann selbst herstellen,
 * pruefen und reparieren, wenn er weiss, *was die Gegenseite ueberhaupt anbietet*.
 * Bis hierher war das Wissen implizit: irgendwo im Verwalter stand fest
 * einprogrammiert, dass orvello Clients ausstellen kann. Wird eine Faehigkeit dort
 * angenommen und fehlt sie hier, ist das Ergebnis eine Zeile, die gesund aussieht,
 * weil nie jemand gefragt hat.
 *
 * Deshalb leitet sich der Bericht ausschliesslich aus dem mitgelieferten Vertrag
 * ab: eine Faehigkeit gilt genau dann als vorhanden, wenn die zugehoerige
 * Operation im Vertrag steht. Faellt sie in node-bill weg, verschwindet sie beim
 * naechsten `sync:contract` auch hier — niemand muss daran denken.
 *
 * ⚠ Der Bericht sagt, was der Vertrag hergibt, nicht was der Aufrufer darf. Ob ein
 * Credential wirklich traegt, beantwortet allein {@link preflightOrvello}.
 */

import { CONTRACT_SHA256 } from "./contract-hash.js";
import { listOperations, describeOperation, type OrvelloAuthChannel } from "./operations.js";

declare const __ORVELLO_SDK_VERSION__: string;
const SDK_VERSION: string =
  typeof __ORVELLO_SDK_VERSION__ === "string" ? __ORVELLO_SDK_VERSION__ : "0.0.0-unbuilt";

/**
 * Eine Faehigkeit und die Operationen, an denen sie haengt.
 *
 * `operations` ist der Beleg: wer die Angabe anzweifelt, kann sie gegen den
 * Vertrag nachschlagen, statt dem Wort zu glauben.
 */
export type OrvelloCapability = {
  supported: boolean;
  operations: string[];
  /** Warum nicht — nur gesetzt, wenn `supported` falsch ist. */
  reason?: string;
};

export type OrvelloCapabilities = {
  service: "orvello";
  sdkVersion: string;
  contractSha256: string;
  /** Wie viele Operationen der Vertrag insgesamt kennt. */
  operationCount: number;
  /** Welche Credential-Bahnen der Vertrag ueberhaupt verlangt. */
  authChannels: Record<OrvelloAuthChannel, number>;
  capabilities: {
    /** Der Dienst nennt seinen eigenen Vertrags-Fingerabdruck (`GET /health/contract`). */
    contractFingerprint: OrvelloCapability;
    /** Ein unauthentisierter Erreichbarkeits-Endpunkt. */
    healthCheck: OrvelloCapability;
    /** OAuth2-Clients fuer andere Apps anlegen, lesen, aendern, loeschen. */
    clientManagement: OrvelloCapability;
    /** Client-Geheimnis erneuern. */
    clientRotation: OrvelloCapability;
    /**
     * Gnadenfrist beim Wechsel: das alte Geheimnis bleibt gueltig, bis es
     * ausdruecklich zurueckgezogen wird — und laesst sich zurueckdrehen.
     */
    rotationGracePeriod: OrvelloCapability;
    /** Zugang sofort entziehen. */
    clientRevocation: OrvelloCapability;
    /** Berechtigungen (entitlements) lesen und setzen. */
    entitlements: OrvelloCapability;
    /** Rechnungen ueber die externe API. */
    invoicing: OrvelloCapability;
    /**
     * Ein serverseitiger Probelauf, der schreibt *als ob*, aber nichts aendert.
     *
     * ⭐ Steht hier bewusst mit dem Grund statt still auf `false`: orvello kennt
     * `dryRun` heute nur in der Buchhaltung, nicht in der Client-Verwaltung. Ein
     * Verwalter, der einen Probelauf braucht, nimmt {@link preflightOrvello} —
     * der ist nebenwirkungsfrei, aber er beweist die Berechtigung, nicht das
     * Ergebnis. Der Unterschied gehoert benannt, nicht verschwiegen.
     */
    serverSideDryRun: OrvelloCapability;
  };
};

const CLIENT_MANAGEMENT_OPS = [
  "oauth2_external_clients_list",
  "oauth2_external_clients_get",
  "oauth2_external_clients_create",
  "oauth2_external_clients_update",
  "oauth2_external_clients_delete",
];
const CLIENT_ROTATION_OPS = ["oauth2_external_clients_rotate"];
const GRACE_PERIOD_OPS = ["oauth2_external_clients_retire", "oauth2_external_clients_rollback"];
const REVOCATION_OPS = ["oauth2_external_clients_revoke"];

function capabilityFrom(operationIds: string[], reasonWhenMissing: string): OrvelloCapability {
  const present = operationIds.filter((id) => describeOperation(id) !== null);
  if (present.length === operationIds.length) {
    return { supported: true, operations: present };
  }
  const missing = operationIds.filter((id) => !present.includes(id));
  return {
    supported: false,
    operations: present,
    reason: `${reasonWhenMissing} Fehlend im Vertrag: ${missing.join(", ")}.`,
  };
}

function capabilityFromPrefix(prefix: string, reasonWhenMissing: string): OrvelloCapability {
  const present = listOperations()
    .filter((operation) => operation.operationId.startsWith(prefix))
    .map((operation) => operation.operationId);
  return present.length > 0
    ? { supported: true, operations: present }
    : { supported: false, operations: [], reason: reasonWhenMissing };
}

/**
 * Der Faehigkeitsbericht dieses Dienstes. Rein aus dem Vertrag, kein Netzzugriff,
 * kein Credential noetig — damit ein Verwalter ihn auch dann fuehren kann, wenn
 * die Verbindung gerade nicht steht.
 */
export function orvelloCapabilities(): OrvelloCapabilities {
  const operations = listOperations();
  const authChannels: Record<OrvelloAuthChannel, number> = { bearer: 0, api_key: 0, none: 0 };
  for (const operation of operations) authChannels[operation.channel]++;

  return {
    service: "orvello",
    sdkVersion: SDK_VERSION,
    contractSha256: CONTRACT_SHA256,
    operationCount: operations.length,
    authChannels,
    capabilities: {
      // `/health/contract` ist bewusst KEINE Vertrags-Route: der Endpunkt
      // beschreibt den Vertrag und kann deshalb nicht in ihm stehen. Er gehoert
      // zur Zusage dieses SDK und wird von `diagnoseOrvello` live geprueft.
      contractFingerprint: {
        supported: true,
        operations: [],
      },
      healthCheck: capabilityFrom(
        ["app_info_health"],
        "Ohne Erreichbarkeits-Endpunkt bleibt nur der Umweg ueber eine echte Anfrage."
      ),
      clientManagement: capabilityFrom(
        CLIENT_MANAGEMENT_OPS,
        "Ohne diese Routen kann ein Verwalter keine Zugaenge fuer andere Apps ausstellen."
      ),
      clientRotation: capabilityFrom(
        CLIENT_ROTATION_OPS,
        "Ohne Erneuerung ist ein einmal ausgegebenes Geheimnis dauerhaft."
      ),
      rotationGracePeriod: capabilityFrom(
        GRACE_PERIOD_OPS,
        "Ohne Rueckzug und Ruecknahme ist jede Erneuerung ein harter Schnitt."
      ),
      clientRevocation: capabilityFrom(
        REVOCATION_OPS,
        "Ohne Widerruf bleibt ein kompromittierter Zugang bis zum Ablauf gueltig."
      ),
      entitlements: capabilityFromPrefix(
        "entitlements_",
        "Dieser Vertrag kennt keine Berechtigungs-Routen."
      ),
      invoicing: capabilityFromPrefix(
        "invoices_",
        "Dieser Vertrag kennt keine Rechnungs-Routen."
      ),
      serverSideDryRun: {
        supported: false,
        operations: [],
        reason:
          "orvello bietet keinen serverseitigen Probelauf fuer die Client-Verwaltung an "
          + "(`dryRun` gibt es nur in der Buchhaltung). Nebenwirkungsfrei pruefbar ist der "
          + "Weg trotzdem: `preflightOrvello` beweist Erreichbarkeit, Vertrag und Credential, "
          + "ohne zu schreiben — es beweist damit die Berechtigung, nicht das Ergebnis.",
      },
    },
  };
}
