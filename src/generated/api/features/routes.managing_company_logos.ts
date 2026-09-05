// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.595Z
// Run `pnpm run api:generate` to regenerate

export type ManagingCompaniesLogosSettingsParams = undefined;
export type ManagingCompaniesLogosSettingsQuery = {

};
export type ManagingCompaniesLogosSettingsBody = undefined;
export type ManagingCompaniesLogosSettingsResponseData = {
  whiteLogoKey: string | null;
  darkLogoKey: string | null;
  invoiceLogoMode: string;
};
export type ManagingCompaniesLogosSettingsResponse = import("../types").ApiEnvelope<ManagingCompaniesLogosSettingsResponseData>;

export type ManagingCompaniesLogosUrlsParams = undefined;
export type ManagingCompaniesLogosUrlsQuery = {

};
export type ManagingCompaniesLogosUrlsBody = undefined;
export type ManagingCompaniesLogosUrlsResponseData = {
  whiteLogoUrl: string | null;
  darkLogoUrl: string | null;
  invoiceLogoMode: string;
};
export type ManagingCompaniesLogosUrlsResponse = import("../types").ApiEnvelope<ManagingCompaniesLogosUrlsResponseData>;

export type ManagingCompaniesLogosSetModeParams = undefined;
export type ManagingCompaniesLogosSetModeQuery = undefined;
export type ManagingCompaniesLogosSetModeBody = {
  mode: "white" | "dark";
};
export type ManagingCompaniesLogosSetModeResponseData = {
  invoiceLogoMode: string;
};
export type ManagingCompaniesLogosSetModeResponse = import("../types").ApiEnvelope<ManagingCompaniesLogosSetModeResponseData>;

export type ManagingCompaniesLogosUploadParams = {
  mode: "white" | "dark";
};
export type ManagingCompaniesLogosUploadQuery = undefined;
export type ManagingCompaniesLogosUploadBody = undefined;
export type ManagingCompaniesLogosUploadResponseData = {
  invoiceLogoMode: string;
};
export type ManagingCompaniesLogosUploadResponse = import("../types").ApiEnvelope<ManagingCompaniesLogosUploadResponseData>;

export type ManagingCompaniesLogosDeleteParams = {
  mode: "white" | "dark";
};
export type ManagingCompaniesLogosDeleteQuery = undefined;
export type ManagingCompaniesLogosDeleteBody = undefined;
export type ManagingCompaniesLogosDeleteResponseData = null;
export type ManagingCompaniesLogosDeleteResponse = import("../types").ApiEnvelope<ManagingCompaniesLogosDeleteResponseData>;

export const apiRoutes_managing_company_logos = {
  "managing_companies_logos_settings": {
    method: "GET",
    path: "/managing-companies/logos/settings",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-logos"],
      summary: "Logo-Settings abrufen",
      description: "Gibt die aktuellen Logo-Einstellungen (S3-Keys + Modus) der ausgewaehlten Managing Company zurueck.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesLogosSettingsParams;
      query: ManagingCompaniesLogosSettingsQuery;
      body: ManagingCompaniesLogosSettingsBody;
      response: ManagingCompaniesLogosSettingsResponse;
      responseData: ManagingCompaniesLogosSettingsResponseData;
    },
  },
  "managing_companies_logos_urls": {
    method: "GET",
    path: "/managing-companies/logos/urls",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-logos"],
      summary: "Logo-Download-URLs abrufen",
      description: "Gibt presigned Download-URLs (1h gueltig) fuer beide Logos zurueck. Null wenn kein Logo hochgeladen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesLogosUrlsParams;
      query: ManagingCompaniesLogosUrlsQuery;
      body: ManagingCompaniesLogosUrlsBody;
      response: ManagingCompaniesLogosUrlsResponse;
      responseData: ManagingCompaniesLogosUrlsResponseData;
    },
  },
  "managing_companies_logos_set_mode": {
    method: "PUT",
    path: "/managing-companies/logos/mode",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-logos"],
      summary: "Logo-Modus setzen",
      description: "Setzt den Standard-Logo-Modus fuer Rechnungen (white oder dark). Bestimmt welches Logo auf PDFs verwendet wird.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesLogosSetModeParams;
      query: ManagingCompaniesLogosSetModeQuery;
      body: ManagingCompaniesLogosSetModeBody;
      response: ManagingCompaniesLogosSetModeResponse;
      responseData: ManagingCompaniesLogosSetModeResponseData;
    },
  },
  "managing_companies_logos_upload": {
    method: "POST",
    path: "/managing-companies/logos/upload/:mode",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-logos"],
      summary: "Logo hochladen",
      description: "Laedt ein Logo (white oder dark) fuer die Managing Company hoch. Erlaubte Formate: PNG, JPEG, SVG. Max 5MB. Ersetzt ein eventuell vorhandenes Logo.",
      bodyContentType: "multipart/form-data",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesLogosUploadParams;
      query: ManagingCompaniesLogosUploadQuery;
      body: ManagingCompaniesLogosUploadBody;
      response: ManagingCompaniesLogosUploadResponse;
      responseData: ManagingCompaniesLogosUploadResponseData;
    },
  },
  "managing_companies_logos_delete": {
    method: "DELETE",
    path: "/managing-companies/logos/delete/:mode",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-company-logos"],
      summary: "Logo loeschen",
      description: "Loescht das Logo (white oder dark) der Managing Company aus S3 und setzt den DB-Eintrag zurueck.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesLogosDeleteParams;
      query: ManagingCompaniesLogosDeleteQuery;
      body: ManagingCompaniesLogosDeleteBody;
      response: ManagingCompaniesLogosDeleteResponse;
      responseData: ManagingCompaniesLogosDeleteResponseData;
    },
  },
} as const;