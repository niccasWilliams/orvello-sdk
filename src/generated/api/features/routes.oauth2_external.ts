// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.403Z
// Run `pnpm run api:generate` to regenerate

import type { PaginatedResult, UnsensitiveOAuth2Client } from "../../frontend-types";

export type Oauth2ExternalClientsListParams = undefined;
export type Oauth2ExternalClientsListQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  isActive?: boolean;
  role?: "viewer" | "editor" | "admin";
  managingCompanyId?: number;
};
export type Oauth2ExternalClientsListBody = undefined;
export type Oauth2ExternalClientsListResponseData = PaginatedResult<UnsensitiveOAuth2Client>;
export type Oauth2ExternalClientsListResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsListResponseData>;

export type Oauth2ExternalClientsGetParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsGetQuery = undefined;
export type Oauth2ExternalClientsGetBody = undefined;
export type Oauth2ExternalClientsGetResponseData = {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
export type Oauth2ExternalClientsGetResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsGetResponseData>;

export type Oauth2ExternalClientsCreateParams = undefined;
export type Oauth2ExternalClientsCreateQuery = undefined;
export type Oauth2ExternalClientsCreateBody = {
  name: string;
  description?: string;
  role?: "viewer" | "editor" | "admin";
  scopes?: Array<string>;
  managingCompanyId?: number;
  defaultCostCenter?: number;
  availableCostCenters?: Array<number>;
  accessTokenTtl?: number;
  refreshTokenTtl?: number;
  allowedIps?: Array<string>;
  rateLimitPerMinute?: number;
  rateLimitPerHour?: number;
  validTo?: string;
};
export type Oauth2ExternalClientsCreateResponseData = {
  client: {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
  credentials: {
  client_id: string;
  client_secret: string;
  warning: string;
};
};
export type Oauth2ExternalClientsCreateResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsCreateResponseData>;

export type Oauth2ExternalClientsUpdateParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsUpdateQuery = undefined;
export type Oauth2ExternalClientsUpdateBody = {
  name?: string;
  description?: string;
  role?: "viewer" | "editor" | "admin";
  scopes?: Array<string>;
  managingCompanyId?: number;
  defaultCostCenter?: number;
  availableCostCenters?: Array<number>;
  accessTokenTtl?: number;
  refreshTokenTtl?: number;
  allowedIps?: Array<string>;
  rateLimitPerMinute?: number;
  rateLimitPerHour?: number;
  validTo?: string;
  isActive?: boolean;
};
export type Oauth2ExternalClientsUpdateResponseData = {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
export type Oauth2ExternalClientsUpdateResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsUpdateResponseData>;

export type Oauth2ExternalClientsRotateParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsRotateQuery = undefined;
export type Oauth2ExternalClientsRotateBody = undefined;
export type Oauth2ExternalClientsRotateResponseData = {
  client: {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
  credentials: {
  client_id: string;
  client_secret: string;
  warning: string;
};
  lastRotatedAt: any;
};
export type Oauth2ExternalClientsRotateResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsRotateResponseData>;

export type Oauth2ExternalClientsRetireParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsRetireQuery = undefined;
export type Oauth2ExternalClientsRetireBody = undefined;
export type Oauth2ExternalClientsRetireResponseData = {
  client: {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
  retired: boolean;
};
export type Oauth2ExternalClientsRetireResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsRetireResponseData>;

export type Oauth2ExternalClientsRollbackParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsRollbackQuery = undefined;
export type Oauth2ExternalClientsRollbackBody = undefined;
export type Oauth2ExternalClientsRollbackResponseData = {
  client: {
  id: number;
  clientId: string;
  name: string;
  description?: string | null;
  managingCompanyId: number;
  defaultCostCenter?: number | null;
  availableCostCenters?: string | null;
  role: string;
  scopes?: string | null;
  accessTokenTtl: number;
  refreshTokenTtl: number;
  maxTokensPerClient: number;
  allowedIps?: string | null;
  allowedOrigins?: string | null;
  rateLimitPerMinute: number;
  rateLimitPerHour: number;
  isActive: boolean;
  revokedAt?: any | null;
  validFrom: any;
  validTo?: any | null;
  createdBy: number;
  createdAt: any;
  updatedAt?: any | null;
  lastUsedAt?: any | null;
  lastRotatedAt?: any | null;
  supersededAt?: any | null;
  hasPreviousSecret?: boolean;
};
  retired: boolean;
};
export type Oauth2ExternalClientsRollbackResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsRollbackResponseData>;

export type Oauth2ExternalClientsRevokeParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsRevokeQuery = undefined;
export type Oauth2ExternalClientsRevokeBody = undefined;
export type Oauth2ExternalClientsRevokeResponseData = null;
export type Oauth2ExternalClientsRevokeResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsRevokeResponseData>;

export type Oauth2ExternalClientsDeleteParams = {
  idOrClientId: string;
};
export type Oauth2ExternalClientsDeleteQuery = undefined;
export type Oauth2ExternalClientsDeleteBody = undefined;
export type Oauth2ExternalClientsDeleteResponseData = null;
export type Oauth2ExternalClientsDeleteResponse = import("../types").ApiEnvelope<Oauth2ExternalClientsDeleteResponseData>;

export const apiRoutes_oauth2_external = {
  "oauth2_external_clients_list": {
    method: "GET",
    path: "/oauth/clients/external/list",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsListParams;
      query: Oauth2ExternalClientsListQuery;
      body: Oauth2ExternalClientsListBody;
      response: Oauth2ExternalClientsListResponse;
      responseData: Oauth2ExternalClientsListResponseData;
    },
  },
  "oauth2_external_clients_get": {
    method: "GET",
    path: "/oauth/clients/external/:idOrClientId",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsGetParams;
      query: Oauth2ExternalClientsGetQuery;
      body: Oauth2ExternalClientsGetBody;
      response: Oauth2ExternalClientsGetResponse;
      responseData: Oauth2ExternalClientsGetResponseData;
    },
  },
  "oauth2_external_clients_create": {
    method: "POST",
    path: "/oauth/clients/external",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsCreateParams;
      query: Oauth2ExternalClientsCreateQuery;
      body: Oauth2ExternalClientsCreateBody;
      response: Oauth2ExternalClientsCreateResponse;
      responseData: Oauth2ExternalClientsCreateResponseData;
    },
  },
  "oauth2_external_clients_update": {
    method: "PUT",
    path: "/oauth/clients/external/:idOrClientId",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsUpdateParams;
      query: Oauth2ExternalClientsUpdateQuery;
      body: Oauth2ExternalClientsUpdateBody;
      response: Oauth2ExternalClientsUpdateResponse;
      responseData: Oauth2ExternalClientsUpdateResponseData;
    },
  },
  "oauth2_external_clients_rotate": {
    method: "POST",
    path: "/oauth/clients/external/:idOrClientId/rotate",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsRotateParams;
      query: Oauth2ExternalClientsRotateQuery;
      body: Oauth2ExternalClientsRotateBody;
      response: Oauth2ExternalClientsRotateResponse;
      responseData: Oauth2ExternalClientsRotateResponseData;
    },
  },
  "oauth2_external_clients_retire": {
    method: "POST",
    path: "/oauth/clients/external/:idOrClientId/retire",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsRetireParams;
      query: Oauth2ExternalClientsRetireQuery;
      body: Oauth2ExternalClientsRetireBody;
      response: Oauth2ExternalClientsRetireResponse;
      responseData: Oauth2ExternalClientsRetireResponseData;
    },
  },
  "oauth2_external_clients_rollback": {
    method: "POST",
    path: "/oauth/clients/external/:idOrClientId/rollback",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsRollbackParams;
      query: Oauth2ExternalClientsRollbackQuery;
      body: Oauth2ExternalClientsRollbackBody;
      response: Oauth2ExternalClientsRollbackResponse;
      responseData: Oauth2ExternalClientsRollbackResponseData;
    },
  },
  "oauth2_external_clients_revoke": {
    method: "POST",
    path: "/oauth/clients/external/:idOrClientId/revoke",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsRevokeParams;
      query: Oauth2ExternalClientsRevokeQuery;
      body: Oauth2ExternalClientsRevokeBody;
      response: Oauth2ExternalClientsRevokeResponse;
      responseData: Oauth2ExternalClientsRevokeResponseData;
    },
  },
  "oauth2_external_clients_delete": {
    method: "DELETE",
    path: "/oauth/clients/external/:idOrClientId",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["oauth2-external"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: Oauth2ExternalClientsDeleteParams;
      query: Oauth2ExternalClientsDeleteQuery;
      body: Oauth2ExternalClientsDeleteBody;
      response: Oauth2ExternalClientsDeleteResponse;
      responseData: Oauth2ExternalClientsDeleteResponseData;
    },
  },
} as const;