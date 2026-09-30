// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type GETApiAmpMailBrandLogoParams = {
  slug: string;
};
export type GETApiAmpMailBrandLogoQuery = undefined;
export type GETApiAmpMailBrandLogoBody = undefined;
export type GETApiAmpMailBrandLogoResponseData = Blob;
export type GETApiAmpMailBrandLogoResponse = Blob;

export type GETApiAmpMailFileParams = {
  token: string;
};
export type GETApiAmpMailFileQuery = undefined;
export type GETApiAmpMailFileBody = undefined;
export type GETApiAmpMailFileResponseData = Blob;
export type GETApiAmpMailFileResponse = Blob;

export const apiRoutes_amp_mail = {
  // Contract source: explicit
  "GET__api_amp_mail_brand_logo": {
    method: "GET",
    path: "/api/amp-mail/brands/:slug/logo",
    auth: {"type":"public"},
    meta: {
      tags: ["amp-mail"],
      summary: "Logo einer Marke aus der Kopie dieser App",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: GETApiAmpMailBrandLogoParams;
      query: GETApiAmpMailBrandLogoQuery;
      body: GETApiAmpMailBrandLogoBody;
      response: GETApiAmpMailBrandLogoResponse;
      responseData: GETApiAmpMailBrandLogoResponseData;
    },
  },
  // Contract source: explicit
  "GET__api_amp_mail_file": {
    method: "GET",
    path: "/api/amp-mail/files/:token",
    auth: {"type":"public"},
    meta: {
      tags: ["amp-mail"],
      summary: "Download-Link aus einer Mail: leitet auf eine frisch signierte Adresse der Dateiablage weiter",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: GETApiAmpMailFileParams;
      query: GETApiAmpMailFileQuery;
      body: GETApiAmpMailFileBody;
      response: GETApiAmpMailFileResponse;
      responseData: GETApiAmpMailFileResponseData;
    },
  },
} as const;