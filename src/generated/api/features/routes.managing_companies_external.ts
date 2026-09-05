// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.595Z
// Run `pnpm run api:generate` to regenerate

export type ManagingCompaniesCurrentExternalParams = undefined;
export type ManagingCompaniesCurrentExternalQuery = {

};
export type ManagingCompaniesCurrentExternalBody = undefined;
export type ManagingCompaniesCurrentExternalResponseData = {
  managingCompany: {
  id: number;
  companyName: string;
  companyCountry?: string | null;
  baseCurrency?: string | null;
  companyVatId?: string | null;
  companyTaxId?: string | null;
};
  taxation: {
  asOf: string;
  regime: string | null;
  regimeReason: string | null;
  regimeValidFrom: string | null;
  regimeValidTo: string | null;
  accountingMethod: string;
  ustvaFilingPreference: string | null;
  shouldShowVatOnInvoices: boolean;
  defaultVatTreatmentHint: "DE_STANDARD_19" | "KLEINUNTERNEHMER_0";
  legalVatHint: string;
  thresholds: {
  kleinunternehmerGraceAmount: number;
  kleinunternehmerMaxAmount: number;
};
};
  auth: {
  authType: "oauth2" | "apikey";
  role: "viewer" | "editor" | "admin" | null;
  oauth2ClientId: string | null;
  apiKeyId: number | null;
  costCenters: Array<number> | null;
  defaultCostCenter: number | null;
};
};
export type ManagingCompaniesCurrentExternalResponse = import("../types").ApiEnvelope<ManagingCompaniesCurrentExternalResponseData>;

export const apiRoutes_managing_companies_external = {
  "managing_companies_current_external": {
    method: "GET",
    path: "/managing-companies/external/current",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["companies:read"]},
    meta: {
      tags: ["managing-companies-external"],
      summary: "Get current managing company context (external API)",
      description: "Returns the managing company of the current API credential plus VAT context (regime, accounting method, display hints) for external pricing/tax logic.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCurrentExternalParams;
      query: ManagingCompaniesCurrentExternalQuery;
      body: ManagingCompaniesCurrentExternalBody;
      response: ManagingCompaniesCurrentExternalResponse;
      responseData: ManagingCompaniesCurrentExternalResponseData;
    },
  },
} as const;