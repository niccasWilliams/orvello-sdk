// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.390Z
// Run `pnpm run api:generate` to regenerate

import type { CompanyEmployee, CompanyEmployeeAssignment, CustomerCompany, EmployeeSearchItem, FullCompany, PaginatedResult } from "../../frontend-types";

export type CustomerCompaniesEmployeesCreateParams = undefined;
export type CustomerCompaniesEmployeesCreateQuery = undefined;
export type CustomerCompaniesEmployeesCreateBody = {
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: string | null;
  gender?: "male" | "female" | "other" | null;
  street?: string | null;
  streetNr?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: string | null;
  email: string;
  phone?: string | null;
  externalUserId?: string | null;
  companyId?: number;
  companyRole?: string;
};
export type CustomerCompaniesEmployeesCreateResponseData = CompanyEmployee;
export type CustomerCompaniesEmployeesCreateResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeesCreateResponseData>;

export type CustomerCompaniesEmployeesDeleteParams = {
  employeeId: number;
};
export type CustomerCompaniesEmployeesDeleteQuery = undefined;
export type CustomerCompaniesEmployeesDeleteBody = undefined;
export type CustomerCompaniesEmployeesDeleteResponseData = null;
export type CustomerCompaniesEmployeesDeleteResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeesDeleteResponseData>;

export type CustomerCompaniesEmployeesUpdateParams = {
  employeeId: number;
};
export type CustomerCompaniesEmployeesUpdateQuery = undefined;
export type CustomerCompaniesEmployeesUpdateBody = {
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: string | null;
  gender?: "male" | "female" | "other" | null;
  street?: string | null;
  streetNr?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string;
  phone?: string | null;
  externalUserId?: string | null;
};
export type CustomerCompaniesEmployeesUpdateResponseData = CompanyEmployee;
export type CustomerCompaniesEmployeesUpdateResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeesUpdateResponseData>;

export type CustomerCompaniesEmployeesGetByIdParams = {
  employeeId: number;
};
export type CustomerCompaniesEmployeesGetByIdQuery = undefined;
export type CustomerCompaniesEmployeesGetByIdBody = undefined;
export type CustomerCompaniesEmployeesGetByIdResponseData = CompanyEmployee;
export type CustomerCompaniesEmployeesGetByIdResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeesGetByIdResponseData>;

export type CustomerCompaniesEmployeesSearchParams = undefined;
export type CustomerCompaniesEmployeesSearchQuery = {
  q?: string;
  search?: string;
  page?: number;
  pageSize?: number;
  activeEmployeesOnly?: boolean;
  companyId?: number;
};
export type CustomerCompaniesEmployeesSearchBody = undefined;
export type CustomerCompaniesEmployeesSearchResponseData = PaginatedResult<EmployeeSearchItem>;
export type CustomerCompaniesEmployeesSearchResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeesSearchResponseData>;

export type CustomerCompaniesEmployeeAssignmentsCreateParams = undefined;
export type CustomerCompaniesEmployeeAssignmentsCreateQuery = undefined;
export type CustomerCompaniesEmployeeAssignmentsCreateBody = {
  companyEmployeeId: number;
  companyId: number;
  companyRole?: string | null;
  status?: "active" | "inactive" | "terminated";
  validFrom?: string;
  validTo?: string | null;
};
export type CustomerCompaniesEmployeeAssignmentsCreateResponseData = CompanyEmployeeAssignment;
export type CustomerCompaniesEmployeeAssignmentsCreateResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeeAssignmentsCreateResponseData>;

export type CustomerCompaniesEmployeeAssignmentsUpdateParams = {
  assignmentId: number;
};
export type CustomerCompaniesEmployeeAssignmentsUpdateQuery = undefined;
export type CustomerCompaniesEmployeeAssignmentsUpdateBody = {
  forceUpdate?: boolean;
  companyId?: number;
  companyRole?: string | null;
  status?: "active" | "inactive" | "terminated";
  validTo?: string | null;
};
export type CustomerCompaniesEmployeeAssignmentsUpdateResponseData = CompanyEmployeeAssignment;
export type CustomerCompaniesEmployeeAssignmentsUpdateResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeeAssignmentsUpdateResponseData>;

export type CustomerCompaniesEmployeeAssignmentsByCompanyIdParams = {
  companyId: number;
};
export type CustomerCompaniesEmployeeAssignmentsByCompanyIdQuery = {
  activeEmployeesOnly?: boolean;
};
export type CustomerCompaniesEmployeeAssignmentsByCompanyIdBody = undefined;
export type CustomerCompaniesEmployeeAssignmentsByCompanyIdResponseData = Array<CompanyEmployeeAssignment>;
export type CustomerCompaniesEmployeeAssignmentsByCompanyIdResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeeAssignmentsByCompanyIdResponseData>;

export type CustomerCompaniesEmployeeAssignmentsByEmployeeIdParams = {
  employeeId: number;
};
export type CustomerCompaniesEmployeeAssignmentsByEmployeeIdQuery = {
  activeEmployeesOnly?: boolean;
};
export type CustomerCompaniesEmployeeAssignmentsByEmployeeIdBody = undefined;
export type CustomerCompaniesEmployeeAssignmentsByEmployeeIdResponseData = Array<CompanyEmployeeAssignment>;
export type CustomerCompaniesEmployeeAssignmentsByEmployeeIdResponse = import("../types").ApiEnvelope<CustomerCompaniesEmployeeAssignmentsByEmployeeIdResponseData>;

export type CustomerCompaniesCreateParams = undefined;
export type CustomerCompaniesCreateQuery = undefined;
export type CustomerCompaniesCreateBody = {
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
export type CustomerCompaniesCreateResponseData = CustomerCompany;
export type CustomerCompaniesCreateResponse = import("../types").ApiEnvelope<CustomerCompaniesCreateResponseData>;

export type CustomerCompaniesDeleteParams = {
  companyId: number;
};
export type CustomerCompaniesDeleteQuery = undefined;
export type CustomerCompaniesDeleteBody = undefined;
export type CustomerCompaniesDeleteResponseData = null;
export type CustomerCompaniesDeleteResponse = import("../types").ApiEnvelope<CustomerCompaniesDeleteResponseData>;

export type CustomerCompaniesUpdateParams = {
  companyId: number;
};
export type CustomerCompaniesUpdateQuery = undefined;
export type CustomerCompaniesUpdateBody = {
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
export type CustomerCompaniesUpdateResponseData = CustomerCompany;
export type CustomerCompaniesUpdateResponse = import("../types").ApiEnvelope<CustomerCompaniesUpdateResponseData>;

export type CustomerCompaniesGetByIdParams = {
  companyId: number;
};
export type CustomerCompaniesGetByIdQuery = undefined;
export type CustomerCompaniesGetByIdBody = undefined;
export type CustomerCompaniesGetByIdResponseData = CustomerCompany;
export type CustomerCompaniesGetByIdResponse = import("../types").ApiEnvelope<CustomerCompaniesGetByIdResponseData>;

export type CustomerCompaniesGetFullByIdParams = {
  companyId: number;
};
export type CustomerCompaniesGetFullByIdQuery = {
  activeEmployeesOnly?: boolean;
};
export type CustomerCompaniesGetFullByIdBody = undefined;
export type CustomerCompaniesGetFullByIdResponseData = FullCompany;
export type CustomerCompaniesGetFullByIdResponse = import("../types").ApiEnvelope<CustomerCompaniesGetFullByIdResponseData>;

export type CustomerCompaniesSearchParams = undefined;
export type CustomerCompaniesSearchQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
  activeEmployeesOnly?: boolean;
};
export type CustomerCompaniesSearchBody = undefined;
export type CustomerCompaniesSearchResponseData = PaginatedResult<FullCompany>;
export type CustomerCompaniesSearchResponse = import("../types").ApiEnvelope<CustomerCompaniesSearchResponseData>;

export const apiRoutes_customer_companies = {
  "customer_companies_employees_create": {
    method: "POST",
    path: "/customer-companies/employees/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employees"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeesCreateParams;
      query: CustomerCompaniesEmployeesCreateQuery;
      body: CustomerCompaniesEmployeesCreateBody;
      response: CustomerCompaniesEmployeesCreateResponse;
      responseData: CustomerCompaniesEmployeesCreateResponseData;
    },
  },
  "customer_companies_employees_delete": {
    method: "DELETE",
    path: "/customer-companies/employees/delete/:employeeId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employees"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeesDeleteParams;
      query: CustomerCompaniesEmployeesDeleteQuery;
      body: CustomerCompaniesEmployeesDeleteBody;
      response: CustomerCompaniesEmployeesDeleteResponse;
      responseData: CustomerCompaniesEmployeesDeleteResponseData;
    },
  },
  "customer_companies_employees_update": {
    method: "PUT",
    path: "/customer-companies/employees/update/:employeeId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employees"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeesUpdateParams;
      query: CustomerCompaniesEmployeesUpdateQuery;
      body: CustomerCompaniesEmployeesUpdateBody;
      response: CustomerCompaniesEmployeesUpdateResponse;
      responseData: CustomerCompaniesEmployeesUpdateResponseData;
    },
  },
  "customer_companies_employees_get_by_id": {
    method: "GET",
    path: "/customer-companies/employees/byId/:employeeId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employees"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeesGetByIdParams;
      query: CustomerCompaniesEmployeesGetByIdQuery;
      body: CustomerCompaniesEmployeesGetByIdBody;
      response: CustomerCompaniesEmployeesGetByIdResponse;
      responseData: CustomerCompaniesEmployeesGetByIdResponseData;
    },
  },
  "customer_companies_employees_search": {
    method: "GET",
    path: "/customer-companies/employees/search",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employees"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeesSearchParams;
      query: CustomerCompaniesEmployeesSearchQuery;
      body: CustomerCompaniesEmployeesSearchBody;
      response: CustomerCompaniesEmployeesSearchResponse;
      responseData: CustomerCompaniesEmployeesSearchResponseData;
    },
  },
  "customer_companies_employee_assignments_create": {
    method: "POST",
    path: "/customer-companies/employee-assignments/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employee-assignments"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeeAssignmentsCreateParams;
      query: CustomerCompaniesEmployeeAssignmentsCreateQuery;
      body: CustomerCompaniesEmployeeAssignmentsCreateBody;
      response: CustomerCompaniesEmployeeAssignmentsCreateResponse;
      responseData: CustomerCompaniesEmployeeAssignmentsCreateResponseData;
    },
  },
  "customer_companies_employee_assignments_update": {
    method: "PUT",
    path: "/customer-companies/employee-assignments/update/:assignmentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employee-assignments"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeeAssignmentsUpdateParams;
      query: CustomerCompaniesEmployeeAssignmentsUpdateQuery;
      body: CustomerCompaniesEmployeeAssignmentsUpdateBody;
      response: CustomerCompaniesEmployeeAssignmentsUpdateResponse;
      responseData: CustomerCompaniesEmployeeAssignmentsUpdateResponseData;
    },
  },
  "customer_companies_employee_assignments_by_company_id": {
    method: "GET",
    path: "/customer-companies/employee-assignments/byCompanyId/:companyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employee-assignments"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeeAssignmentsByCompanyIdParams;
      query: CustomerCompaniesEmployeeAssignmentsByCompanyIdQuery;
      body: CustomerCompaniesEmployeeAssignmentsByCompanyIdBody;
      response: CustomerCompaniesEmployeeAssignmentsByCompanyIdResponse;
      responseData: CustomerCompaniesEmployeeAssignmentsByCompanyIdResponseData;
    },
  },
  "customer_companies_employee_assignments_by_employee_id": {
    method: "GET",
    path: "/customer-companies/employee-assignments/byEmployeeId/:employeeId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies","employee-assignments"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesEmployeeAssignmentsByEmployeeIdParams;
      query: CustomerCompaniesEmployeeAssignmentsByEmployeeIdQuery;
      body: CustomerCompaniesEmployeeAssignmentsByEmployeeIdBody;
      response: CustomerCompaniesEmployeeAssignmentsByEmployeeIdResponse;
      responseData: CustomerCompaniesEmployeeAssignmentsByEmployeeIdResponseData;
    },
  },
  "customer_companies_create": {
    method: "POST",
    path: "/customer-companies/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesCreateParams;
      query: CustomerCompaniesCreateQuery;
      body: CustomerCompaniesCreateBody;
      response: CustomerCompaniesCreateResponse;
      responseData: CustomerCompaniesCreateResponseData;
    },
  },
  "customer_companies_delete": {
    method: "DELETE",
    path: "/customer-companies/delete/:companyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesDeleteParams;
      query: CustomerCompaniesDeleteQuery;
      body: CustomerCompaniesDeleteBody;
      response: CustomerCompaniesDeleteResponse;
      responseData: CustomerCompaniesDeleteResponseData;
    },
  },
  "customer_companies_update": {
    method: "PUT",
    path: "/customer-companies/update/:companyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: CustomerCompaniesUpdateParams;
      query: CustomerCompaniesUpdateQuery;
      body: CustomerCompaniesUpdateBody;
      response: CustomerCompaniesUpdateResponse;
      responseData: CustomerCompaniesUpdateResponseData;
    },
  },
  "customer_companies_get_by_id": {
    method: "GET",
    path: "/customer-companies/byId/:companyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesGetByIdParams;
      query: CustomerCompaniesGetByIdQuery;
      body: CustomerCompaniesGetByIdBody;
      response: CustomerCompaniesGetByIdResponse;
      responseData: CustomerCompaniesGetByIdResponseData;
    },
  },
  "customer_companies_get_full_by_id": {
    method: "GET",
    path: "/customer-companies/byId/:companyId/full",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesGetFullByIdParams;
      query: CustomerCompaniesGetFullByIdQuery;
      body: CustomerCompaniesGetFullByIdBody;
      response: CustomerCompaniesGetFullByIdResponse;
      responseData: CustomerCompaniesGetFullByIdResponseData;
    },
  },
  "customer_companies_search": {
    method: "GET",
    path: "/customer-companies/search",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["customer-companies"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CustomerCompaniesSearchParams;
      query: CustomerCompaniesSearchQuery;
      body: CustomerCompaniesSearchBody;
      response: CustomerCompaniesSearchResponse;
      responseData: CustomerCompaniesSearchResponseData;
    },
  },
} as const;