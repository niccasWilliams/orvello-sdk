// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type InternalUsersProvisionParams = undefined;
export type InternalUsersProvisionQuery = undefined;
export type InternalUsersProvisionBody = {
  externalUserId: string;
  email: string;
  emailVerifiedAt: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  locale?: string;
  idempotencyKey?: string;
};
export type InternalUsersProvisionResponseData = { userId: number; created: boolean; linked: boolean } & {};
export type InternalUsersProvisionResponse = InternalUsersProvisionResponseData;

export type InternalUsersSyncParams = undefined;
export type InternalUsersSyncQuery = undefined;
export type InternalUsersSyncBody = {
  externalUserId: string;
  fields: {
  email?: string;
  emailVerifiedAt?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
};
  sourceUpdatedAt: string;
};
export type InternalUsersSyncResponseData = { outcome: 'updated' | 'skipped_stale'; userId: number };
export type InternalUsersSyncResponse = InternalUsersSyncResponseData;

export type InternalUsersDeleteParams = {
  externalUserId: string;
};
export type InternalUsersDeleteQuery = undefined;
export type InternalUsersDeleteBody = undefined;
export type InternalUsersDeleteResponseData = { deleted: boolean; userId: number | null };
export type InternalUsersDeleteResponse = InternalUsersDeleteResponseData;

export const apiRoutes_internal = {
  // Contract source: explicit
  "internal_users_provision": {
    method: "POST",
    path: "/internal/users/provision",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["internal","users"],
      summary: "Idempotente Provisionierung: User-Anlage (oder Link via E-Mail-Match), Startrolle und App-Extras.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InternalUsersProvisionParams;
      query: InternalUsersProvisionQuery;
      body: InternalUsersProvisionBody;
      response: InternalUsersProvisionResponse;
      responseData: InternalUsersProvisionResponseData;
    },
  },
  // Contract source: explicit
  "internal_users_sync": {
    method: "POST",
    path: "/internal/users/sync",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["internal","users"],
      summary: "Update der Profil-Felder (Email/Name/Verify). Out-of-order-geschützt via sourceUpdatedAt-Vergleich.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InternalUsersSyncParams;
      query: InternalUsersSyncQuery;
      body: InternalUsersSyncBody;
      response: InternalUsersSyncResponse;
      responseData: InternalUsersSyncResponseData;
    },
  },
  // Contract source: explicit
  "internal_users_delete": {
    method: "DELETE",
    path: "/internal/users/:externalUserId",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["internal","users"],
      summary: "DSGVO Art. 17 Hard-Delete. Cascade über vorhandene FK-Constraints. Idempotent (200 mit deleted:false bei not-found).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InternalUsersDeleteParams;
      query: InternalUsersDeleteQuery;
      body: InternalUsersDeleteBody;
      response: InternalUsersDeleteResponse;
      responseData: InternalUsersDeleteResponseData;
    },
  },
} as const;