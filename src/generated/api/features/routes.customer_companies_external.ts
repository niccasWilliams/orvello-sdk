// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.391Z
// Run `pnpm run api:generate` to regenerate

import type { CustomerCompany, PaginatedResult } from "../../frontend-types";

export type CustomerCompaniesSearchExternalParams = undefined;
export type CustomerCompaniesSearchExternalQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
  activeEmployeesOnly?: boolean;
};
export type CustomerCompaniesSearchExternalBody = undefined;
export type CustomerCompaniesSearchExternalResponseData = PaginatedResult<CustomerCompany>;
export type CustomerCompaniesSearchExternalResponse = import("../types").ApiEnvelope<CustomerCompaniesSearchExternalResponseData>;

export type CustomerCompaniesGetByIdExternalParams = {
  companyId: number;
};
export type CustomerCompaniesGetByIdExternalQuery = undefined;
export type CustomerCompaniesGetByIdExternalBody = undefined;
export type CustomerCompaniesGetByIdExternalResponseData = CustomerCompany;
export type CustomerCompaniesGetByIdExternalResponse = import("../types").ApiEnvelope<CustomerCompaniesGetByIdExternalResponseData>;

export type CustomerCompaniesCreateExternalParams = undefined;
export type CustomerCompaniesCreateExternalQuery = undefined;
export type CustomerCompaniesCreateExternalBody = {
  isFreelancer?: boolean;
  name: string;
  street?: string | null;
  streetNr?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: string | null;
  email: string;
  phone?: string | null;
  ustId?: string | null;
  costCenterId?: number | null;
  defaultHourlyRate?: string | null;
};
export type CustomerCompaniesCreateExternalResponseData = CustomerCompany;
export type CustomerCompaniesCreateExternalResponse = import("../types").ApiEnvelope<CustomerCompaniesCreateExternalResponseData>;

export type CustomerCompaniesUpdateExternalParams = {
  companyId: number;
};
export type CustomerCompaniesUpdateExternalQuery = undefined;
export type CustomerCompaniesUpdateExternalBody = {
  isFreelancer?: boolean;
  name?: string;
  street?: string | null;
  streetNr?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string;
  phone?: string | null;
  ustId?: string | null;
  costCenterId?: number | null;
  defaultHourlyRate?: string | null;
};
export type CustomerCompaniesUpdateExternalResponseData = CustomerCompany;
export type CustomerCompaniesUpdateExternalResponse = import("../types").ApiEnvelope<CustomerCompaniesUpdateExternalResponseData>;

export type CustomerCompaniesDeleteExternalParams = {
  companyId: number;
};
export type CustomerCompaniesDeleteExternalQuery = undefined;
export type CustomerCompaniesDeleteExternalBody = undefined;
export type CustomerCompaniesDeleteExternalResponseData = null;
export type CustomerCompaniesDeleteExternalResponse = import("../types").ApiEnvelope<CustomerCompaniesDeleteExternalResponseData>;

export const apiRoutes_customer_companies_external = {
  "customer_companies_search_external": {
    method: "GET",
    path: "/customer-companies/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["companies:read"]},
    meta: {
      tags: ["customer-companies-external"],
      summary: "Search customer companies (external API)",
      description: "Paginated search over customer companies. Filters by name, email, phone, address fields. Cost center visibility is applied per token permissions.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesSearchExternalParams;
      query: CustomerCompaniesSearchExternalQuery;
      body: CustomerCompaniesSearchExternalBody;
      response: CustomerCompaniesSearchExternalResponse;
      responseData: CustomerCompaniesSearchExternalResponseData;
    },
  },
  "customer_companies_get_by_id_external": {
    method: "GET",
    path: "/customer-companies/external/:companyId",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["companies:read"]},
    meta: {
      tags: ["customer-companies-external"],
      summary: "Get customer company by ID (external API)",
      description: "Returns a single customer company by ID. Company must belong to the token's managing company.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesGetByIdExternalParams;
      query: CustomerCompaniesGetByIdExternalQuery;
      body: CustomerCompaniesGetByIdExternalBody;
      response: CustomerCompaniesGetByIdExternalResponse;
      responseData: CustomerCompaniesGetByIdExternalResponseData;
    },
  },
  "customer_companies_create_external": {
    method: "POST",
    path: "/customer-companies/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["companies:write"]},
    meta: {
      tags: ["customer-companies-external"],
      summary: "Create customer company (external API)",
      description: "Creates a new customer company. managingCompanyId is derived from the auth token. Required fields: name, email.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesCreateExternalParams;
      query: CustomerCompaniesCreateExternalQuery;
      body: CustomerCompaniesCreateExternalBody;
      response: CustomerCompaniesCreateExternalResponse;
      responseData: CustomerCompaniesCreateExternalResponseData;
    },
  },
  "customer_companies_update_external": {
    method: "PUT",
    path: "/customer-companies/external/:companyId",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["companies:write"]},
    meta: {
      tags: ["customer-companies-external"],
      summary: "Update customer company (external API)",
      description: "Updates an existing customer company. All fields are optional (partial update). Company must belong to the token's managing company.",
      bodyContentType: "application/json",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesUpdateExternalParams;
      query: CustomerCompaniesUpdateExternalQuery;
      body: CustomerCompaniesUpdateExternalBody;
      response: CustomerCompaniesUpdateExternalResponse;
      responseData: CustomerCompaniesUpdateExternalResponseData;
    },
  },
  "customer_companies_delete_external": {
    method: "DELETE",
    path: "/customer-companies/external/:companyId",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"admin","scopes":["companies:delete"]},
    meta: {
      tags: ["customer-companies-external"],
      summary: "Delete customer company (external API)",
      description: "Deletes a customer company. Company must belong to the token's managing company. Warning: this also removes employee assignments.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesDeleteExternalParams;
      query: CustomerCompaniesDeleteExternalQuery;
      body: CustomerCompaniesDeleteExternalBody;
      response: CustomerCompaniesDeleteExternalResponse;
      responseData: CustomerCompaniesDeleteExternalResponseData;
    },
  },
} as const;