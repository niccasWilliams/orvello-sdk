// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

import type { ApiKeyAuditLogEntry, ApiKeyCapabilities, ApiKeyView, OAuth2ScopeValue, PaginatedResult } from "../../frontend-types";

export type ApiKeysMetaCapabilitiesParams = undefined;
export type ApiKeysMetaCapabilitiesQuery = {

};
export type ApiKeysMetaCapabilitiesBody = undefined;
export type ApiKeysMetaCapabilitiesResponseData = ApiKeyCapabilities;
export type ApiKeysMetaCapabilitiesResponse = import("../types").ApiEnvelope<ApiKeysMetaCapabilitiesResponseData>;

export type ApiKeysMetaScopesParams = undefined;
export type ApiKeysMetaScopesQuery = {

};
export type ApiKeysMetaScopesBody = undefined;
export type ApiKeysMetaScopesResponseData = { scopes: Array<{ value: OAuth2ScopeValue; description: string; group: string | null }>; groups: Array<{ name: string; scopes: OAuth2ScopeValue[] }>; roles: ReadonlyArray<"viewer" | "editor" | "admin">; environments: ReadonlyArray<"live" | "test"> };
export type ApiKeysMetaScopesResponse = import("../types").ApiEnvelope<ApiKeysMetaScopesResponseData>;

export type ApiKeysCreateParams = undefined;
export type ApiKeysCreateQuery = undefined;
export type ApiKeysCreateBody = {
  name: string;
  description?: string;
  role: "viewer" | "editor" | "admin";
  scopes: Array<"invoices:read" | "invoices:write" | "invoices:delete" | "invoices:publish" | "expenses:read" | "expenses:write" | "expenses:delete" | "expenses:analyze" | "revenues:read" | "revenues:write" | "revenues:delete" | "payments:read" | "payments:write" | "documents:read" | "documents:write" | "documents:delete" | "companies:read" | "companies:write" | "companies:delete" | "employees:read" | "employees:write" | "employees:delete" | "cost_centers:read" | "cost_centers:write" | "reports:read" | "admin:settings" | "admin:users" | "oauth2:clients:read" | "oauth2:clients:write">;
  environment?: "live" | "test";
  allowedIps?: Array<string> | null;
  rateLimitPerMinute?: number | null;
  rateLimitPerHour?: number | null;
  validFrom?: string;
  validTo?: string | null;
};
export type ApiKeysCreateResponseData = { apiKey: ApiKeyView; plainTextKey: string };
export type ApiKeysCreateResponse = import("../types").ApiEnvelope<ApiKeysCreateResponseData>;

export type ApiKeysListParams = undefined;
export type ApiKeysListQuery = {
  page?: number;
  pageSize?: number;
};
export type ApiKeysListBody = undefined;
export type ApiKeysListResponseData = PaginatedResult<ApiKeyView>;
export type ApiKeysListResponse = import("../types").ApiEnvelope<ApiKeysListResponseData>;

export type ApiKeysByIdParams = {
  apiKeyId: number;
};
export type ApiKeysByIdQuery = undefined;
export type ApiKeysByIdBody = undefined;
export type ApiKeysByIdResponseData = ApiKeyView;
export type ApiKeysByIdResponse = import("../types").ApiEnvelope<ApiKeysByIdResponseData>;

export type ApiKeysUpdateParams = {
  apiKeyId: number;
};
export type ApiKeysUpdateQuery = undefined;
export type ApiKeysUpdateBody = {
  name?: string;
  description?: string | null;
  role?: "viewer" | "editor" | "admin";
  scopes?: Array<"invoices:read" | "invoices:write" | "invoices:delete" | "invoices:publish" | "expenses:read" | "expenses:write" | "expenses:delete" | "expenses:analyze" | "revenues:read" | "revenues:write" | "revenues:delete" | "payments:read" | "payments:write" | "documents:read" | "documents:write" | "documents:delete" | "companies:read" | "companies:write" | "companies:delete" | "employees:read" | "employees:write" | "employees:delete" | "cost_centers:read" | "cost_centers:write" | "reports:read" | "admin:settings" | "admin:users" | "oauth2:clients:read" | "oauth2:clients:write">;
  allowedIps?: Array<string> | null;
  rateLimitPerMinute?: number | null;
  rateLimitPerHour?: number | null;
  validTo?: string | null;
  isActive?: boolean;
};
export type ApiKeysUpdateResponseData = ApiKeyView;
export type ApiKeysUpdateResponse = import("../types").ApiEnvelope<ApiKeysUpdateResponseData>;

export type ApiKeysRevokeParams = {
  apiKeyId: number;
};
export type ApiKeysRevokeQuery = undefined;
export type ApiKeysRevokeBody = {
  reason?: string;
};
export type ApiKeysRevokeResponseData = null;
export type ApiKeysRevokeResponse = import("../types").ApiEnvelope<ApiKeysRevokeResponseData>;

export type ApiKeysDeleteParams = {
  apiKeyId: number;
};
export type ApiKeysDeleteQuery = undefined;
export type ApiKeysDeleteBody = undefined;
export type ApiKeysDeleteResponseData = null;
export type ApiKeysDeleteResponse = import("../types").ApiEnvelope<ApiKeysDeleteResponseData>;

export type ApiKeysAuditParams = {
  apiKeyId: number;
};
export type ApiKeysAuditQuery = {
  page?: number;
  pageSize?: number;
};
export type ApiKeysAuditBody = undefined;
export type ApiKeysAuditResponseData = PaginatedResult<ApiKeyAuditLogEntry>;
export type ApiKeysAuditResponse = import("../types").ApiEnvelope<ApiKeysAuditResponseData>;

export const apiRoutes_api_keys = {
  "api_keys_meta_capabilities": {
    method: "GET",
    path: "/api-keys/meta/capabilities",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key Capabilities für UI",
      description: "Pre-flight Check: liefert canCreate / canList / canRevoke / canDelete plus strukturierte Gründe (INSUFFICIENT_ROLE, PLAN_LIMIT_REACHED, ...) und das aktuelle Limit/Usage. Das Frontend rendert Buttons enabled/disabled inkl. Tooltip OHNE vorherigen 4xx-Round-Trip.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysMetaCapabilitiesParams;
      query: ApiKeysMetaCapabilitiesQuery;
      body: ApiKeysMetaCapabilitiesBody;
      response: ApiKeysMetaCapabilitiesResponse;
      responseData: ApiKeysMetaCapabilitiesResponseData;
    },
  },
  "api_keys_meta_scopes": {
    method: "GET",
    path: "/api-keys/meta/scopes",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "Scope-Vokabular für UI",
      description: "Liefert die vollständige Scope-Liste samt Labels und UI-Gruppen sowie die verfügbaren Rollen + Environment-Werte. Damit das Frontend Picker rendern kann, ohne irgendetwas zu hardcoden. Auth: jeder eingeloggte User.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysMetaScopesParams;
      query: ApiKeysMetaScopesQuery;
      body: ApiKeysMetaScopesBody;
      response: ApiKeysMetaScopesResponse;
      responseData: ApiKeysMetaScopesResponseData;
    },
  },
  "api_keys_create": {
    method: "POST",
    path: "/api-keys/create",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key erstellen",
      description: "Erstellt einen neuen API-Key im aktiven Workspace. Der Klartext-Schlüssel wird genau einmal in der Response zurückgegeben — danach niemals wieder. Capability: api_key.write (admin+). Die gewählte Key-Rolle kann nicht höher sein als die Workspace-Rolle des Aufrufers.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ApiKeysCreateParams;
      query: ApiKeysCreateQuery;
      body: ApiKeysCreateBody;
      response: ApiKeysCreateResponse;
      responseData: ApiKeysCreateResponseData;
    },
  },
  "api_keys_list": {
    method: "GET",
    path: "/api-keys/list",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Keys listen",
      description: "Listet API-Keys des aktiven Workspace paginiert. Capability: api_key.read.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysListParams;
      query: ApiKeysListQuery;
      body: ApiKeysListBody;
      response: ApiKeysListResponse;
      responseData: ApiKeysListResponseData;
    },
  },
  "api_keys_by_id": {
    method: "GET",
    path: "/api-keys/byId/:apiKeyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key nach ID",
      description: "Lädt einen API-Key (Metadata, ohne Klartext). Capability: api_key.read.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysByIdParams;
      query: ApiKeysByIdQuery;
      body: ApiKeysByIdBody;
      response: ApiKeysByIdResponse;
      responseData: ApiKeysByIdResponseData;
    },
  },
  "api_keys_update": {
    method: "PUT",
    path: "/api-keys/update/:apiKeyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key aktualisieren",
      description: "Ändert Name/Rolle/Scopes/IP-Whitelist/Rate-Limit/Gültigkeit. Der eigentliche Key-Wert kann nicht aktualisiert werden — dafür einen neuen Key erstellen. Capability: api_key.write.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ApiKeysUpdateParams;
      query: ApiKeysUpdateQuery;
      body: ApiKeysUpdateBody;
      response: ApiKeysUpdateResponse;
      responseData: ApiKeysUpdateResponseData;
    },
  },
  "api_keys_revoke": {
    method: "POST",
    path: "/api-keys/revoke/:apiKeyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key sperren",
      description: "Setzt isActive=false und revokedAt=now. Der Key bleibt für Audit-Zwecke in der Tabelle, ist aber nicht mehr authentifizierbar. Capability: api_key.write.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ApiKeysRevokeParams;
      query: ApiKeysRevokeQuery;
      body: ApiKeysRevokeBody;
      response: ApiKeysRevokeResponse;
      responseData: ApiKeysRevokeResponseData;
    },
  },
  "api_keys_delete": {
    method: "DELETE",
    path: "/api-keys/delete/:apiKeyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "API-Key löschen",
      description: "Löscht einen API-Key endgültig (GDPR Right-to-Erasure). Audit-Log-Einträge bleiben mit nullified api_key_id erhalten. Capability: api_key.write.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysDeleteParams;
      query: ApiKeysDeleteQuery;
      body: ApiKeysDeleteBody;
      response: ApiKeysDeleteResponse;
      responseData: ApiKeysDeleteResponseData;
    },
  },
  "api_keys_audit": {
    method: "GET",
    path: "/api-keys/audit/:apiKeyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["api-keys"],
      summary: "Audit-Log eines Keys",
      description: "Listet Authentifizierungs-Versuche dieses Keys (Erfolg + Fehler) paginiert. Capability: api_key.read.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ApiKeysAuditParams;
      query: ApiKeysAuditQuery;
      body: ApiKeysAuditBody;
      response: ApiKeysAuditResponse;
      responseData: ApiKeysAuditResponseData;
    },
  },
} as const;