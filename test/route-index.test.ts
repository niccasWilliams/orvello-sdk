/**
 * Die Laufzeit-Tabelle gegen den Vertrag, aus dem sie stammt.
 *
 * `src/route-index.generated.ts` ist eine Verdichtung von `apiRoutes` — sie
 * traegt nur, was ein Aufruf braucht, und spart damit rund 200 KB Prosa aus jedem
 * Bundle. Eine Verdichtung ist aber immer auch eine zweite Wahrheit, und zwei
 * Wahrheiten laufen auseinander, sobald niemand hinsieht.
 *
 * Also sieht dieser Test hin: er rechnet die Tabelle bei jedem Lauf aus dem
 * echten `apiRoutes` nach. Wer eine Route hinzufuegt, den Vertrag aktualisiert
 * oder die Tabelle von Hand anfasst und `npm run build:route-index` vergisst,
 * bekommt hier rot — statt einer Route, die still auf der falschen Bahn faehrt
 * oder gar nicht gefunden wird.
 *
 * ⭐ Der Test importiert `apiRoutes` selbst; das ist der einzige Ort im Paket,
 * an dem das noch geschieht, und er kostet kein Bundle.
 */

import { describe, it, expect } from "vitest";
import { apiRoutes } from "../src/generated/api/index";
import { ROUTE_INDEX } from "../src/route-index.generated";
import { listOperations, describeOperation, authChannelForContractType } from "../src/operations";

type RawRoute = {
  method: string;
  path: string;
  auth?: { type?: string; scopes?: readonly string[] } | null;
  meta?: { validated?: { params?: boolean; query?: boolean; body?: boolean } } | null;
};

const raw = apiRoutes as unknown as Record<string, RawRoute>;

describe("Route-Index gegen den Vertrag", () => {
  it("kennt genau die Operationen des Vertrags — keine mehr, keine weniger", () => {
    expect(Object.keys(ROUTE_INDEX).sort()).toEqual(Object.keys(raw).sort());
  });

  it("gibt zu jeder Operation Methode, Pfad und Auth-Art unveraendert wieder", () => {
    for (const [operationId, route] of Object.entries(raw)) {
      const entry = ROUTE_INDEX[operationId];
      expect(entry, `Operation ${operationId} fehlt in der Tabelle`).toBeDefined();

      const [method, path, , authType] = entry!;
      expect(method, operationId).toBe(route.method.toUpperCase());
      expect(path, operationId).toBe(route.path);
      expect(authType, operationId).toBe(route.auth?.type ?? "");
    }
  });

  it("leitet die Credential-Bahn nach derselben Regel ab wie zur Laufzeit", () => {
    for (const [operationId, route] of Object.entries(raw)) {
      const expected = authChannelForContractType(route.auth?.type);
      expect(describeOperation(operationId)?.channel, operationId).toBe(expected);
    }
  });

  it("gibt die Validierungs-Angaben verlustfrei wieder", () => {
    for (const [operationId, route] of Object.entries(raw)) {
      const validated = describeOperation(operationId)!.validated;
      expect(validated.params, `${operationId}.params`).toBe(Boolean(route.meta?.validated?.params));
      expect(validated.query, `${operationId}.query`).toBe(Boolean(route.meta?.validated?.query));
      expect(validated.body, `${operationId}.body`).toBe(Boolean(route.meta?.validated?.body));
    }
  });

  it("gibt die geforderten Scopes verlustfrei wieder", () => {
    for (const [operationId, route] of Object.entries(raw)) {
      expect(describeOperation(operationId)!.scopes, operationId).toEqual(route.auth?.scopes ?? []);
    }
  });

  it("laesst keine Operation ohne Eintrag in der Laufzeit-Liste", () => {
    expect(listOperations()).toHaveLength(Object.keys(raw).length);
  });
});
