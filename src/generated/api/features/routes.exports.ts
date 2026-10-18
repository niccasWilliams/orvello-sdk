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
  included: Array<string>;
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

export type ExportsDatevPreviewParams = undefined;
export type ExportsDatevPreviewQuery = {
  year: number;
  month?: number;
  skr?: "skr03" | "skr04";
  profileRevision?: number;
  from?: string;
  to?: string;
};
export type ExportsDatevPreviewBody = undefined;
export type ExportsDatevPreviewResponseData = {
  profileRevision: number;
  effectiveProfileRevision: number;
  sourceFingerprint: string;
  scope: {
  id: string;
  label: string;
  included: Array<string>;
  excluded: Array<string>;
  note: string;
};
  skr: "skr03" | "skr04";
  rowCount: number;
  period: {
  start: string;
  end: string;
};
  taxPeriodDeviations: Array<{
  reference: string;
  taxCase: "sales_19" | "sales_7" | "input_19" | "input_7" | "no_deduction" | "sales_eu_supply" | "sales_eu_service" | "sales_export" | "sales_not_taxable_abroad" | "sales_exempt" | "sales_reverse_charge" | "reverse_charge_19" | "reverse_charge_7" | "reverse_charge_no_deduction_19" | "reverse_charge_no_deduction_7";
  paymentDate: string;
  documentDate: string;
  amount: number;
}>;
  excludedNonCashCapitalMovements: Array<{
  movementId: number;
  subType: string;
  amount: number;
}>;
};
export type ExportsDatevPreviewResponse = import("../types").ApiEnvelope<ExportsDatevPreviewResponseData>;

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

export type ExportsDatevKursjournalParams = undefined;
export type ExportsDatevKursjournalQuery = {
  year: number;
  month?: number;
  skr?: "skr03" | "skr04";
  profileRevision?: number;
  from?: string;
  to?: string;
};
export type ExportsDatevKursjournalBody = undefined;
export type ExportsDatevKursjournalResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type ExportsDatevKursjournalResponse = import("../types").ApiEnvelope<ExportsDatevKursjournalResponseData>;

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
  "exports_datev_preview": {
    method: "GET",
    path: "/exports/bookkeeping/datev/preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV-Stapel prüfen",
      description: "Rechnet denselben Stapel wie der Download und liefert Umfang, Zeilenzahl, Profilfassung, Eingabefingerabdruck, abweichende Steuerperioden und bewusst nicht gebuchte Bewegungen ohne Geldfluss. Fachliche Sperren kommen als 422 wie beim Download.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ExportsDatevPreviewParams;
      query: ExportsDatevPreviewQuery;
      body: ExportsDatevPreviewBody;
      response: ExportsDatevPreviewResponse;
      responseData: ExportsDatevPreviewResponseData;
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
      description: "Generiert und liefert einen DATEV-kompatiblen Buchungsstapel (Format EXTF, Version 12) als CSV. EÜR-Buchungsjournal (euer_cash_journal_v2): bestätigte Einnahmen, abzugsfähige und nicht abzugsfähige Ausgaben, aktivierte Anschaffungen und Kapitalbewegungen mit Geldfluss, je Zahlung am Zahlungstag. Ohne AfA und offene Posten. Konten und Sonderfall-Schlüssel aus versioniertem Firmenprofil. Query-Parameter: year (Pflicht), month (optional, 1-12), skr (optional, muss Firmenprofil entsprechen), profileRevision (optional, aktuellste Fassung), from/to (optionale Tage innerhalb des Zeitraums).",
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
  // Contract source: explicit
  "exports_datev_kursjournal": {
    method: "GET",
    path: "/exports/bookkeeping/datev/kursjournal",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["exports","datev"],
      summary: "DATEV-Kursjournal herunterladen",
      description: "Eigener Buchungsstapel (EXTF) der realisierten Kursdifferenzen aus Rechnungszuordnungen in Fremdwährung, Belegfeld KD-<Zuordnung>, am Zahlungstag. Teilt den im EÜR-Stapel gebuchten Zahlbetrag in Erlös zum Buchwert und Kursgewinn/-verlust auf (Konten fxDifferenceAccounts des Firmenprofils); die EÜR-Summe bleibt gleich. Nicht zusätzlich zum EÜR-Stapel addieren.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ExportsDatevKursjournalParams;
      query: ExportsDatevKursjournalQuery;
      body: ExportsDatevKursjournalBody;
      response: ExportsDatevKursjournalResponse;
      responseData: ExportsDatevKursjournalResponseData;
    },
  },
} as const;