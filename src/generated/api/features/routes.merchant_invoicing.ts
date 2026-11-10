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

export type MerchantInvoicingEinvoiceRequestParams = {
  invoiceId: number;
};
export type MerchantInvoicingEinvoiceRequestQuery = undefined;
export type MerchantInvoicingEinvoiceRequestBody = {
  format: "xrechnung_ubl" | "xrechnung_cii" | "zugferd";
};
export type MerchantInvoicingEinvoiceRequestResponseData = {
  invoiceId: number;
  format: "xrechnung_ubl" | "xrechnung_cii" | "zugferd";
  orderId: string;
  invoiceRevision: string;
  status: "accepted";
  acceptedAt: string;
  replayed: boolean;
};
export type MerchantInvoicingEinvoiceRequestResponse = import("../types").ApiEnvelope<MerchantInvoicingEinvoiceRequestResponseData>;

export type MerchantInvoicingEinvoiceStatusParams = {
  invoiceId: number;
};
export type MerchantInvoicingEinvoiceStatusQuery = undefined;
export type MerchantInvoicingEinvoiceStatusBody = undefined;
export type MerchantInvoicingEinvoiceStatusResponseData = {
  invoiceId: number;
  sandbox: boolean;
  results: Array<{
  orderId: string;
  resultId: string;
  invoiceRevision: string;
  status: "completed" | "rejected" | "failed";
  format: string | null;
  code: string | null;
  retryable: boolean | null;
  validation: {
  valid: boolean;
  ruleset: string;
  issues: Array<{
  code: string;
  severity: string;
  message: string;
  location?: string;
}>;
} | null;
  completedAt: string;
  receivedAt: string;
}>;
};
export type MerchantInvoicingEinvoiceStatusResponse = import("../types").ApiEnvelope<MerchantInvoicingEinvoiceStatusResponseData>;

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
  // Contract source: explicit
  "merchant_invoicing_einvoice_request": {
    method: "POST",
    path: "/merchant-invoicing/invoices/:invoiceId/einvoice",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:publish"]},
    meta: {
      tags: ["merchant-invoicing"],
      summary: "E-Rechnung (XRechnung) zu einer eigenen ausgestellten Rechnung anfordern",
      description: "Baut aus der ausgestellten Rechnung des eigenen Mandanten einen Auftrag und gibt ihn serverseitig an den E-Rechnungsdienst. Idempotent: dieselbe Rechnung im selben Format liefert dieselbe Annahme (200, replayed). Fremde Rechnung 404, Entwurf 422. Das Ergebnis liefert GET auf denselben Pfad.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: MerchantInvoicingEinvoiceRequestParams;
      query: MerchantInvoicingEinvoiceRequestQuery;
      body: MerchantInvoicingEinvoiceRequestBody;
      response: MerchantInvoicingEinvoiceRequestResponse;
      responseData: MerchantInvoicingEinvoiceRequestResponseData;
    },
  },
  // Contract source: explicit
  "merchant_invoicing_einvoice_status": {
    method: "GET",
    path: "/merchant-invoicing/invoices/:invoiceId/einvoice",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["merchant-invoicing"],
      summary: "Ergebnisse der E-Rechnung zu einer eigenen Rechnung lesen",
      description: "Endergebnisse (completed, rejected, failed) samt KoSIT-Pruefung, neuestes zuerst. Leere Liste heisst: noch kein Ergebnis.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: MerchantInvoicingEinvoiceStatusParams;
      query: MerchantInvoicingEinvoiceStatusQuery;
      body: MerchantInvoicingEinvoiceStatusBody;
      response: MerchantInvoicingEinvoiceStatusResponse;
      responseData: MerchantInvoicingEinvoiceStatusResponseData;
    },
  },
} as const;