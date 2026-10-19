/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type MerchantInvoicingTokenExternalParams = undefined;
export type MerchantInvoicingTokenExternalQuery = undefined;
export type MerchantInvoicingTokenExternalBody = {
  managingCompanyId: number;
};
export type MerchantInvoicingTokenExternalResponseData = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
  managingCompanyId: number;
  bindingId: string;
};
export type MerchantInvoicingTokenExternalResponse = import("../types").ApiEnvelope<MerchantInvoicingTokenExternalResponseData>;

export type MerchantInvoicingCompanyGetParams = {
  managingCompanyId: number;
};
export type MerchantInvoicingCompanyGetQuery = undefined;
export type MerchantInvoicingCompanyGetBody = undefined;
export type MerchantInvoicingCompanyGetResponseData = {
  managingCompanyId: number;
  enabled: boolean;
  bindingId: string | null;
  defaultCostCenterId: number | null;
};
export type MerchantInvoicingCompanyGetResponse = import("../types").ApiEnvelope<MerchantInvoicingCompanyGetResponseData>;

export type MerchantInvoicingCompanyConfigureParams = {
  managingCompanyId: number;
};
export type MerchantInvoicingCompanyConfigureQuery = undefined;
export type MerchantInvoicingCompanyConfigureBody = {
  enabled: boolean;
  defaultCostCenterId: number | null;
};
export type MerchantInvoicingCompanyConfigureResponseData = {
  managingCompanyId: number;
  enabled: boolean;
  bindingId: string | null;
  defaultCostCenterId: number | null;
};
export type MerchantInvoicingCompanyConfigureResponse = import("../types").ApiEnvelope<MerchantInvoicingCompanyConfigureResponseData>;

export const apiRoutes_merchant_invoicing = {
  // Contract source: explicit
  "merchant_invoicing_token_external": {
    method: "POST",
    path: "/merchant-invoicing/external/token",
    auth: {"type":"unified_bearer","allowOAuth2":true,"allowApiKey":false,"allowUserSession":false},
    meta: {
      tags: ["merchant-invoicing"],
      summary: "Kurzlebigen firmengebundenen Shop-Rechnungszugang beziehen",
      description: "Nur registrierter aktiver Shop-OAuth-Dienst; andere Firmen benötigen einen expliziten Firmenadmin-Grant. bindingId bleibt der Rechnungs-Idempotenznamespace.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: MerchantInvoicingTokenExternalParams;
      query: MerchantInvoicingTokenExternalQuery;
      body: MerchantInvoicingTokenExternalBody;
      response: MerchantInvoicingTokenExternalResponse;
      responseData: MerchantInvoicingTokenExternalResponseData;
    },
  },
  // Contract source: explicit
  "merchant_invoicing_company_get": {
    method: "GET",
    path: "/merchant-invoicing/companies/:managingCompanyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["merchant-invoicing"],
      summary: "Rechnungsanbindung der eigenen Firma prüfen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: MerchantInvoicingCompanyGetParams;
      query: MerchantInvoicingCompanyGetQuery;
      body: MerchantInvoicingCompanyGetBody;
      response: MerchantInvoicingCompanyGetResponse;
      responseData: MerchantInvoicingCompanyGetResponseData;
    },
  },
  // Contract source: explicit
  "merchant_invoicing_company_configure": {
    method: "PUT",
    path: "/merchant-invoicing/companies/:managingCompanyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["merchant-invoicing"],
      summary: "Shop-Rechnungsanbindung als Firmenadmin aktivieren oder sperren",
      description: "Interner Firmenworkflow ohne Kundenschlüssel. Sperrung stoppt bestehende Tokens; erneute Aktivierung behält bindingId und Rechnungs-Idempotenznamespace.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: MerchantInvoicingCompanyConfigureParams;
      query: MerchantInvoicingCompanyConfigureQuery;
      body: MerchantInvoicingCompanyConfigureBody;
      response: MerchantInvoicingCompanyConfigureResponse;
      responseData: MerchantInvoicingCompanyConfigureResponseData;
    },
  },
} as const;