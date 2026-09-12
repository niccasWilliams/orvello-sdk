// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.382Z
// Run `pnpm run api:generate` to regenerate

import type { PaginatedResult, SystemSettings, VatAccountingMethod, VatSettingsHistory } from "../../frontend-types";

export type AdminVatGetSystemSettingsParams = undefined;
export type AdminVatGetSystemSettingsQuery = undefined;
export type AdminVatGetSystemSettingsBody = undefined;
export type AdminVatGetSystemSettingsResponseData = SystemSettings;
export type AdminVatGetSystemSettingsResponse = import("../types").ApiEnvelope<AdminVatGetSystemSettingsResponseData>;

export type AdminVatGetSystemSettingsHistoryParams = undefined;
export type AdminVatGetSystemSettingsHistoryQuery = {
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
};
export type AdminVatGetSystemSettingsHistoryBody = undefined;
export type AdminVatGetSystemSettingsHistoryResponseData = PaginatedResult<SystemSettings>;
export type AdminVatGetSystemSettingsHistoryResponse = import("../types").ApiEnvelope<AdminVatGetSystemSettingsHistoryResponseData>;

export type AdminVatUpdateSystemSettingsParams = {
  id: number;
};
export type AdminVatUpdateSystemSettingsQuery = undefined;
export type AdminVatUpdateSystemSettingsBody = {
  defaultKleinunternehmerGraceAmount?: string;
  defaultKleinunternehmerMaxAmount?: string;
  defaultVatAccountingMethod?: "SOLL" | "IST";
  ustvaMonthlyVatDueThreshold?: string;
  ustvaAnnualVatDueExemptThreshold?: string;
  ustvaNewCompanyMonthlyYears?: number;
};
export type AdminVatUpdateSystemSettingsResponseData = SystemSettings;
export type AdminVatUpdateSystemSettingsResponse = import("../types").ApiEnvelope<AdminVatUpdateSystemSettingsResponseData>;

export type AdminVatCreateSystemSettingsParams = undefined;
export type AdminVatCreateSystemSettingsQuery = undefined;
export type AdminVatCreateSystemSettingsBody = {
  defaultKleinunternehmerGraceAmount: string;
  defaultKleinunternehmerMaxAmount: string;
  defaultVatAccountingMethod: "SOLL" | "IST";
  validFrom?: string;
  validTo?: string;
};
export type AdminVatCreateSystemSettingsResponseData = SystemSettings;
export type AdminVatCreateSystemSettingsResponse = import("../types").ApiEnvelope<AdminVatCreateSystemSettingsResponseData>;

export type AdminVatUpdateCompanySettingsParams = {
  companyId: number;
};
export type AdminVatUpdateCompanySettingsQuery = undefined;
export type AdminVatUpdateCompanySettingsBody = {
  accountingMethod: "SOLL" | "IST";
  ustvaFilingPreference?: "auto" | "monthly" | "quarterly" | "annual" | "none";
  changeReason: string;
};
export type AdminVatUpdateCompanySettingsResponseData = { accountingMethod: VatAccountingMethod; ustvaFilingPreference?: string };
export type AdminVatUpdateCompanySettingsResponse = import("../types").ApiEnvelope<AdminVatUpdateCompanySettingsResponseData>;

export type AdminVatGetCompanySettingsHistoryParams = {
  companyId: number;
};
export type AdminVatGetCompanySettingsHistoryQuery = undefined;
export type AdminVatGetCompanySettingsHistoryBody = undefined;
export type AdminVatGetCompanySettingsHistoryResponseData = VatSettingsHistory[];
export type AdminVatGetCompanySettingsHistoryResponse = import("../types").ApiEnvelope<AdminVatGetCompanySettingsHistoryResponseData>;

export const apiRoutes_admin = {
  "admin_vat_get_system_settings": {
    method: "GET",
    path: "/admin/vat/system-settings",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
    },
    types: null as unknown as {
      params: AdminVatGetSystemSettingsParams;
      query: AdminVatGetSystemSettingsQuery;
      body: AdminVatGetSystemSettingsBody;
      response: AdminVatGetSystemSettingsResponse;
      responseData: AdminVatGetSystemSettingsResponseData;
    },
  },
  "admin_vat_get_system_settings_history": {
    method: "GET",
    path: "/admin/vat/system-settings/history",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AdminVatGetSystemSettingsHistoryParams;
      query: AdminVatGetSystemSettingsHistoryQuery;
      body: AdminVatGetSystemSettingsHistoryBody;
      response: AdminVatGetSystemSettingsHistoryResponse;
      responseData: AdminVatGetSystemSettingsHistoryResponseData;
    },
  },
  "admin_vat_update_system_settings": {
    method: "PUT",
    path: "/admin/vat/system-settings/:id",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AdminVatUpdateSystemSettingsParams;
      query: AdminVatUpdateSystemSettingsQuery;
      body: AdminVatUpdateSystemSettingsBody;
      response: AdminVatUpdateSystemSettingsResponse;
      responseData: AdminVatUpdateSystemSettingsResponseData;
    },
  },
  "admin_vat_create_system_settings": {
    method: "POST",
    path: "/admin/vat/system-settings",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AdminVatCreateSystemSettingsParams;
      query: AdminVatCreateSystemSettingsQuery;
      body: AdminVatCreateSystemSettingsBody;
      response: AdminVatCreateSystemSettingsResponse;
      responseData: AdminVatCreateSystemSettingsResponseData;
    },
  },
  "admin_vat_update_company_settings": {
    method: "PUT",
    path: "/admin/vat/company/:companyId/settings",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AdminVatUpdateCompanySettingsParams;
      query: AdminVatUpdateCompanySettingsQuery;
      body: AdminVatUpdateCompanySettingsBody;
      response: AdminVatUpdateCompanySettingsResponse;
      responseData: AdminVatUpdateCompanySettingsResponseData;
    },
  },
  "admin_vat_get_company_settings_history": {
    method: "GET",
    path: "/admin/vat/company/:companyId/settings-history",
    auth: {"type":"frontend_permission_http","permission":"managing_company_admin"},
    meta: {
      tags: ["admin","vat"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: AdminVatGetCompanySettingsHistoryParams;
      query: AdminVatGetCompanySettingsHistoryQuery;
      body: AdminVatGetCompanySettingsHistoryBody;
      response: AdminVatGetCompanySettingsHistoryResponse;
      responseData: AdminVatGetCompanySettingsHistoryResponseData;
    },
  },
} as const;