// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

import type { NodeBillUser, Permission, Role } from "../../frontend-types";

export type AppInfoHealthParams = undefined;
export type AppInfoHealthQuery = undefined;
export type AppInfoHealthBody = undefined;
export type AppInfoHealthResponseData = {
  status: "healthy" | "degraded" | "unhealthy";
  uptime: number;
  timestamp: string;
  version: string;
  checks: Array<{
  name: string;
  status: "ok" | "warning" | "error";
  latencyMs: number | null;
  message?: string;
  details?: Record<string, any>;
}>;
  dependencies: Array<{
  name: string;
  status: "ok" | "warning" | "error";
  latencyMs: number | null;
  message?: string;
  details?: Record<string, any>;
}>;
};
export type AppInfoHealthResponse = import("../types").ApiEnvelope<AppInfoHealthResponseData>;

export type AppInfoManifestParams = undefined;
export type AppInfoManifestQuery = undefined;
export type AppInfoManifestBody = undefined;
export type AppInfoManifestResponseData = { appId: string; manifestVersion: string; [key: string]: unknown };
export type AppInfoManifestResponse = import("../types").ApiEnvelope<AppInfoManifestResponseData>;

export type AppInfoGetParams = undefined;
export type AppInfoGetQuery = {

};
export type AppInfoGetBody = undefined;
export type AppInfoGetResponseData = { appId: string; plannerUser: NodeBillUser; userRoles: Role[]; subscriptionLimits?: { planCode: string; sourceRoles: string[]; limits: Record<string, number | null> }; subscriptionUsage?: { planCode: string; sourceRoles: string[]; metrics: Record<string, { used: number; limit: number | null; remaining: number | null; canUse: boolean }> }; subscription?: { upgradeUrl: string | null } };
export type AppInfoGetResponse = import("../types").ApiEnvelope<AppInfoGetResponseData>;

export type AppInfoOwnPermissionsGetParams = undefined;
export type AppInfoOwnPermissionsGetQuery = {

};
export type AppInfoOwnPermissionsGetBody = undefined;
export type AppInfoOwnPermissionsGetResponseData = Permission[];
export type AppInfoOwnPermissionsGetResponse = import("../types").ApiEnvelope<AppInfoOwnPermissionsGetResponseData>;

export const apiRoutes_app_info = {
  // Contract source: explicit
  "app_info_health": {
    method: "GET",
    path: "/app-info/health",
    auth: {"type":"public"},
    meta: {
      tags: ["app-info"],
      summary: "Health check",
      description: "Kern-Pruefungen des Prozesses (Datenbank, Speicher, Event-Loop, Verschluesselung). 200 bei healthy/degraded, 503 bei unhealthy.",
      validated: {"params":false,"query":false,"body":false},
    },
    types: null as unknown as {
      params: AppInfoHealthParams;
      query: AppInfoHealthQuery;
      body: AppInfoHealthBody;
      response: AppInfoHealthResponse;
      responseData: AppInfoHealthResponseData;
    },
  },
  // Contract source: explicit
  "app_info_manifest": {
    method: "GET",
    path: "/app-info/manifest",
    auth: {"type":"public"},
    meta: {
      tags: ["app-info"],
      summary: "AMP App Manifest",
      validated: {"params":false,"query":false,"body":false},
    },
    types: null as unknown as {
      params: AppInfoManifestParams;
      query: AppInfoManifestQuery;
      body: AppInfoManifestBody;
      response: AppInfoManifestResponse;
      responseData: AppInfoManifestResponseData;
    },
  },
  // Contract source: explicit
  "app_info_get": {
    method: "GET",
    path: "/app-info",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["app-info"],
      summary: "Get app info for current user",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AppInfoGetParams;
      query: AppInfoGetQuery;
      body: AppInfoGetBody;
      response: AppInfoGetResponse;
      responseData: AppInfoGetResponseData;
    },
  },
  // Contract source: explicit
  "app_info_own_permissions_get": {
    method: "GET",
    path: "/app-info/ownPermissions",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["app-info"],
      summary: "Get own permissions",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AppInfoOwnPermissionsGetParams;
      query: AppInfoOwnPermissionsGetQuery;
      body: AppInfoOwnPermissionsGetBody;
      response: AppInfoOwnPermissionsGetResponse;
      responseData: AppInfoOwnPermissionsGetResponseData;
    },
  },
} as const;