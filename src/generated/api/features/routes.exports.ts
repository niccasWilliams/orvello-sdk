/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type ExportsDatevMetadataParams = undefined;
export type ExportsDatevMetadataQuery = {

};
export type ExportsDatevMetadataBody = undefined;
export type ExportsDatevMetadataResponseData = {
  managingCompanyId: number;
  availableYears: Array<number>;
  skrOptions: Array<{
  value: string;
  label: string;
}>;
  format: string;
  note: string;
  scope: {
  id: string;
  label: string;
  excluded: Array<string>;
  note: string;
};
  profileRevision: number;
  profiles: Array<{
  revision: number;
  validFrom: string;
  skr: "skr03" | "skr04";
  changedAt: string;
}>;
};
export type ExportsDatevMetadataResponse = import("../types").ApiEnvelope<ExportsDatevMetadataResponseData>;

export type ExportsDatevBuchungsstapelParams = undefined;
export type ExportsDatevBuchungsstapelQuery = {
  year: number;
  month?: number;
  skr?: "skr03" | "skr04";
  profileRevision?: number;
  from?: string;
  to?: string;
};
export type ExportsDatevBuchungsstapelBody = undefined;
export type ExportsDatevBuchungsstapelResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type ExportsDatevBuchungsstapelResponse = import("../types").ApiEnvelope<ExportsDatevBuchungsstapelResponseData>;

export const apiRoutes_exports = {
  // Contract source: explicit
  "exports_datev_metadata": {
    method: "GET",
    path: "/exports/bookkeeping/datev/metadata",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV Export-Metadaten",
      description: "Gibt verfügbare Jahre und SKR-Optionen für den DATEV-Export zurück.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ExportsDatevMetadataParams;
      query: ExportsDatevMetadataQuery;
      body: ExportsDatevMetadataBody;
      response: ExportsDatevMetadataResponse;
      responseData: ExportsDatevMetadataResponseData;
    },
  },
  // Contract source: explicit
  "exports_datev_buchungsstapel": {
    method: "GET",
    path: "/exports/bookkeeping/datev/buchungsstapel",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV Buchungsstapel herunterladen",
      description: "Generiert und liefert einen DATEV-kompatiblen Buchungsstapel (Format EXTF, Version 12) als CSV. EÜR-Zahlungsauszug mit bestätigten Einnahmen und abzugsfähigen Ausgaben, kein vollständiges Fibu-Journal. Konten aus versioniertem Firmenprofil. Query-Parameter: year (Pflicht), month (optional, 1-12), skr (optional, muss Firmenprofil entsprechen), profileRevision (optional, aktuellste Fassung), from/to (optionale Tage innerhalb des Zeitraums).",
      validated: {"params":false,"query":true,"body":false},
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