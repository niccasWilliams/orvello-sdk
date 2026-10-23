/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type ManagingCompaniesPostalAccountGetParams = undefined;
export type ManagingCompaniesPostalAccountGetQuery = {

};
export type ManagingCompaniesPostalAccountGetBody = undefined;
export type ManagingCompaniesPostalAccountGetResponseData = {
  connected: boolean;
  username: string | null;
  updatedAt: string | null;
  mode: "live";
  sendingEnabled: false;
  sharedWithAmp: boolean;
};
export type ManagingCompaniesPostalAccountGetResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalAccountGetResponseData>;

export type ManagingCompaniesPostalAccountSaveParams = undefined;
export type ManagingCompaniesPostalAccountSaveQuery = {

};
export type ManagingCompaniesPostalAccountSaveBody = {
  username: string;
  apikey: string;
};
export type ManagingCompaniesPostalAccountSaveResponseData = {
  connected: boolean;
  username: string | null;
  updatedAt: string | null;
  mode: "live";
  sendingEnabled: false;
  sharedWithAmp: boolean;
};
export type ManagingCompaniesPostalAccountSaveResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalAccountSaveResponseData>;

export type ManagingCompaniesPostalAccountTestParams = undefined;
export type ManagingCompaniesPostalAccountTestQuery = {

};
export type ManagingCompaniesPostalAccountTestBody = {

};
export type ManagingCompaniesPostalAccountTestResponseData = {
  balance: number;
  currency: "EUR";
  checkedAt: string;
};
export type ManagingCompaniesPostalAccountTestResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalAccountTestResponseData>;

export type ManagingCompaniesPostalCompanyGetParams = {
  companyId: number;
};
export type ManagingCompaniesPostalCompanyGetQuery = {

};
export type ManagingCompaniesPostalCompanyGetBody = undefined;
export type ManagingCompaniesPostalCompanyGetResponseData = {
  connected: boolean;
  username: string | null;
  updatedAt: string | null;
  mode: "live";
  sendingEnabled: false;
  sharedWithAmp: boolean;
};
export type ManagingCompaniesPostalCompanyGetResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalCompanyGetResponseData>;

export type ManagingCompaniesPostalCompanySaveParams = {
  companyId: number;
};
export type ManagingCompaniesPostalCompanySaveQuery = {

};
export type ManagingCompaniesPostalCompanySaveBody = {
  username: string;
  apikey: string;
};
export type ManagingCompaniesPostalCompanySaveResponseData = {
  connected: boolean;
  username: string | null;
  updatedAt: string | null;
  mode: "live";
  sendingEnabled: false;
  sharedWithAmp: boolean;
};
export type ManagingCompaniesPostalCompanySaveResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalCompanySaveResponseData>;

export type ManagingCompaniesPostalCompanyTestParams = {
  companyId: number;
};
export type ManagingCompaniesPostalCompanyTestQuery = {

};
export type ManagingCompaniesPostalCompanyTestBody = {

};
export type ManagingCompaniesPostalCompanyTestResponseData = {
  balance: number;
  currency: "EUR";
  checkedAt: string;
};
export type ManagingCompaniesPostalCompanyTestResponse = import("../types").ApiEnvelope<ManagingCompaniesPostalCompanyTestResponseData>;

export const apiRoutes_managing_company_postal_account = {
  // Contract source: explicit
  "managing_companies_postal_account_get": {
    method: "GET",
    path: "/managing-companies/postal-account",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "LetterXpress-Verbindung der ausgewaehlten Firma lesen (Firmenadmin)",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalAccountGetParams;
      query: ManagingCompaniesPostalAccountGetQuery;
      body: ManagingCompaniesPostalAccountGetBody;
      response: ManagingCompaniesPostalAccountGetResponse;
      responseData: ManagingCompaniesPostalAccountGetResponseData;
    },
  },
  // Contract source: explicit
  "managing_companies_postal_account_save": {
    method: "PUT",
    path: "/managing-companies/postal-account",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "LetterXpress-Firmenzugang bei AMP pruefen und verschluesselt speichern (Firmenadmin)",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalAccountSaveParams;
      query: ManagingCompaniesPostalAccountSaveQuery;
      body: ManagingCompaniesPostalAccountSaveBody;
      response: ManagingCompaniesPostalAccountSaveResponse;
      responseData: ManagingCompaniesPostalAccountSaveResponseData;
    },
  },
  // Contract source: explicit
  "managing_companies_postal_account_test": {
    method: "POST",
    path: "/managing-companies/postal-account/test",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "LetterXpress-Kontostand pruefen, ohne Versand (Firmenadmin)",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalAccountTestParams;
      query: ManagingCompaniesPostalAccountTestQuery;
      body: ManagingCompaniesPostalAccountTestBody;
      response: ManagingCompaniesPostalAccountTestResponse;
      responseData: ManagingCompaniesPostalAccountTestResponseData;
    },
  },
  // Contract source: explicit
  "managing_companies_postal_company_get": {
    method: "GET",
    path: "/managing-companies/postal-account/:companyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "LetterXpress-Konto dieser Firma lesen (Firmenadmin)",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalCompanyGetParams;
      query: ManagingCompaniesPostalCompanyGetQuery;
      body: ManagingCompaniesPostalCompanyGetBody;
      response: ManagingCompaniesPostalCompanyGetResponse;
      responseData: ManagingCompaniesPostalCompanyGetResponseData;
    },
  },
  // Contract source: explicit
  "managing_companies_postal_company_save": {
    method: "PUT",
    path: "/managing-companies/postal-account/:companyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "Eigenen LetterXpress-Firmenzugang ohne Versand pruefen und speichern (Firmenadmin)",
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalCompanySaveParams;
      query: ManagingCompaniesPostalCompanySaveQuery;
      body: ManagingCompaniesPostalCompanySaveBody;
      response: ManagingCompaniesPostalCompanySaveResponse;
      responseData: ManagingCompaniesPostalCompanySaveResponseData;
    },
  },
  // Contract source: explicit
  "managing_companies_postal_company_test": {
    method: "POST",
    path: "/managing-companies/postal-account/:companyId/test",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-postal-account"],
      summary: "LetterXpress-Kontostand dieser Firma ohne Versand pruefen (Firmenadmin)",
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesPostalCompanyTestParams;
      query: ManagingCompaniesPostalCompanyTestQuery;
      body: ManagingCompaniesPostalCompanyTestBody;
      response: ManagingCompaniesPostalCompanyTestResponse;
      responseData: ManagingCompaniesPostalCompanyTestResponseData;
    },
  },
} as const;