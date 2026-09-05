// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.588Z
// Run `pnpm run api:generate` to regenerate

export type ExportsDatevMetadataParams = undefined;
export type ExportsDatevMetadataQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type ExportsDatevMetadataBody = undefined;
export type ExportsDatevMetadataResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type ExportsDatevMetadataResponse = import("../types").ApiEnvelope<ExportsDatevMetadataResponseData>;

export type ExportsDatevBuchungsstapelParams = undefined;
export type ExportsDatevBuchungsstapelQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type ExportsDatevBuchungsstapelBody = undefined;
export type ExportsDatevBuchungsstapelResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type ExportsDatevBuchungsstapelResponse = import("../types").ApiEnvelope<ExportsDatevBuchungsstapelResponseData>;

export const apiRoutes_exports = {
  "exports_datev_metadata": {
    method: "GET",
    path: "/exports/bookkeeping/datev/metadata",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV Export-Metadaten",
      description: "Gibt verfügbare Jahre und SKR-Optionen für den DATEV-Export zurück.",
    },
    types: null as unknown as {
      params: ExportsDatevMetadataParams;
      query: ExportsDatevMetadataQuery;
      body: ExportsDatevMetadataBody;
      response: ExportsDatevMetadataResponse;
      responseData: ExportsDatevMetadataResponseData;
    },
  },
  "exports_datev_buchungsstapel": {
    method: "GET",
    path: "/exports/bookkeeping/datev/buchungsstapel",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV Buchungsstapel herunterladen",
      description: "Generiert und liefert einen DATEV-kompatiblen Buchungsstapel (Format EXTF, Version 12) als CSV. Enthält alle EÜR-wirksamen Einnahmen und Ausgaben für das angegebene Jahr/Monat. Query-Parameter: year (Pflicht), month (optional, 1-12), skr (optional, skr03|skr04).",
    },
    types: null as unknown as {
      params: ExportsDatevBuchungsstapelParams;
      query: ExportsDatevBuchungsstapelQuery;
      body: ExportsDatevBuchungsstapelBody;
      response: ExportsDatevBuchungsstapelResponse;
      responseData: ExportsDatevBuchungsstapelResponseData;
    },
  },
} as const;