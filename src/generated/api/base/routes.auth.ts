// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

import type { DirectAuthLoginResponse, DirectAuthMe, DirectAuthOkResponse, DirectAuthRequestVerificationResponse, DirectAuthResponse, DirectAuthSessionListResponse, DirectAuthTokens, DirectAuthUser, DirectAuthVerifyEmailResponse } from "../../frontend-types";

export type AuthMfaCompleteParams = undefined;
export type AuthMfaCompleteQuery = undefined;
export type AuthMfaCompleteBody = {
  challengeToken: string;
  code: string;
  kind?: "totp" | "recovery";
};
export type AuthMfaCompleteResponseData = DirectAuthResponse;
export type AuthMfaCompleteResponse = import("../types").ApiEnvelope<AuthMfaCompleteResponseData>;

export type AuthMfaStatusParams = undefined;
export type AuthMfaStatusQuery = {

};
export type AuthMfaStatusBody = undefined;
export type AuthMfaStatusResponseData = {
  enabled: boolean;
  methods: Array<string>;
  recoveryCodesRemaining: number;
};
export type AuthMfaStatusResponse = import("../types").ApiEnvelope<AuthMfaStatusResponseData>;

export type AuthMfaSetupParams = undefined;
export type AuthMfaSetupQuery = undefined;
export type AuthMfaSetupBody = {
  password: string;
};
export type AuthMfaSetupResponseData = {
  secret: string;
  otpauthUri: string;
  expiresAt: string;
};
export type AuthMfaSetupResponse = import("../types").ApiEnvelope<AuthMfaSetupResponseData>;

export type AuthMfaEnableParams = undefined;
export type AuthMfaEnableQuery = undefined;
export type AuthMfaEnableBody = {
  code: string;
};
export type AuthMfaEnableResponseData = {
  enabled: boolean;
  recoveryCodes: Array<string>;
  reauthenticationRequired: boolean;
};
export type AuthMfaEnableResponse = import("../types").ApiEnvelope<AuthMfaEnableResponseData>;

export type AuthMfaDisableParams = undefined;
export type AuthMfaDisableQuery = undefined;
export type AuthMfaDisableBody = {
  password: string;
  code: string;
  kind?: "totp" | "recovery";
};
export type AuthMfaDisableResponseData = {
  ok: boolean;
  reauthenticationRequired: boolean;
};
export type AuthMfaDisableResponse = import("../types").ApiEnvelope<AuthMfaDisableResponseData>;

export type AuthRegisterParams = undefined;
export type AuthRegisterQuery = undefined;
export type AuthRegisterBody = {
  email: string;
  password: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  device?: {
  deviceId?: string;
  deviceName?: string;
  deviceModel?: string;
  deviceOs?: string;
  appVersion?: string;
  platform?: "ios" | "android" | "web" | "expo";
};
};
export type AuthRegisterResponseData = DirectAuthResponse;
export type AuthRegisterResponse = import("../types").ApiEnvelope<AuthRegisterResponseData>;

export type AuthLoginParams = undefined;
export type AuthLoginQuery = undefined;
export type AuthLoginBody = {
  email: string;
  password: string;
  device?: {
  deviceId?: string;
  deviceName?: string;
  deviceModel?: string;
  deviceOs?: string;
  appVersion?: string;
  platform?: "ios" | "android" | "web" | "expo";
};
};
export type AuthLoginResponseData = DirectAuthLoginResponse;
export type AuthLoginResponse = import("../types").ApiEnvelope<AuthLoginResponseData>;

export type AuthRefreshParams = undefined;
export type AuthRefreshQuery = undefined;
export type AuthRefreshBody = {
  refreshToken: string;
  device?: {
  deviceId?: string;
  deviceName?: string;
  deviceModel?: string;
  deviceOs?: string;
  appVersion?: string;
  platform?: "ios" | "android" | "web" | "expo";
};
};
export type AuthRefreshResponseData = DirectAuthTokens;
export type AuthRefreshResponse = import("../types").ApiEnvelope<AuthRefreshResponseData>;

export type AuthLogoutParams = undefined;
export type AuthLogoutQuery = undefined;
export type AuthLogoutBody = {
  refreshToken?: string;
};
export type AuthLogoutResponseData = {

};
export type AuthLogoutResponse = import("../types").ApiEnvelope<AuthLogoutResponseData>;

export type AuthMeParams = undefined;
export type AuthMeQuery = {

};
export type AuthMeBody = undefined;
export type AuthMeResponseData = DirectAuthMe;
export type AuthMeResponse = import("../types").ApiEnvelope<AuthMeResponseData>;

export type AuthMeProfileUpdateParams = undefined;
export type AuthMeProfileUpdateQuery = undefined;
export type AuthMeProfileUpdateBody = {
  avatarStyle?: {
  seed?: string;
  hue?: number;
  shape?: "round" | "organic" | "boxy" | "nub" | "cloud" | "sun" | "capsule" | "triangle" | "hexagon" | "droplet";
  expression?: "idle" | "happy" | "sad" | "mad" | "surprised" | "wink" | "sleepy" | "smug" | "unsure" | "scared" | "love" | "shy" | "sick" | "thinking";
  background?: "none" | "squircle" | "circle";
} | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
export type AuthMeProfileUpdateResponseData = DirectAuthMe;
export type AuthMeProfileUpdateResponse = import("../types").ApiEnvelope<AuthMeProfileUpdateResponseData>;

export type AuthPushTokenUpsertParams = undefined;
export type AuthPushTokenUpsertQuery = undefined;
export type AuthPushTokenUpsertBody = {
  token: string;
  platform: "ios" | "android" | "web" | "expo";
};
export type AuthPushTokenUpsertResponseData = {

};
export type AuthPushTokenUpsertResponse = import("../types").ApiEnvelope<AuthPushTokenUpsertResponseData>;

export type AuthVerifyEmailRequestParams = undefined;
export type AuthVerifyEmailRequestQuery = undefined;
export type AuthVerifyEmailRequestBody = {

};
export type AuthVerifyEmailRequestResponseData = DirectAuthRequestVerificationResponse;
export type AuthVerifyEmailRequestResponse = import("../types").ApiEnvelope<AuthVerifyEmailRequestResponseData>;

export type AuthVerifyEmailConfirmParams = undefined;
export type AuthVerifyEmailConfirmQuery = undefined;
export type AuthVerifyEmailConfirmBody = {
  token: string;
};
export type AuthVerifyEmailConfirmResponseData = DirectAuthVerifyEmailResponse;
export type AuthVerifyEmailConfirmResponse = import("../types").ApiEnvelope<AuthVerifyEmailConfirmResponseData>;

export type AuthVerifyEmailLandingParams = undefined;
export type AuthVerifyEmailLandingQuery = {
  token?: string;
};
export type AuthVerifyEmailLandingBody = undefined;
export type AuthVerifyEmailLandingResponseData = Blob;
export type AuthVerifyEmailLandingResponse = Blob;

export type AuthMeEmailPatchParams = undefined;
export type AuthMeEmailPatchQuery = undefined;
export type AuthMeEmailPatchBody = {
  email: string;
  password: string;
};
export type AuthMeEmailPatchResponseData = DirectAuthUser;
export type AuthMeEmailPatchResponse = import("../types").ApiEnvelope<AuthMeEmailPatchResponseData>;

export type AuthPasswordChangeParams = undefined;
export type AuthPasswordChangeQuery = undefined;
export type AuthPasswordChangeBody = {
  currentPassword: string;
  newPassword: string;
  revokeOtherSessions?: boolean;
  refreshToken?: string;
};
export type AuthPasswordChangeResponseData = DirectAuthOkResponse;
export type AuthPasswordChangeResponse = import("../types").ApiEnvelope<AuthPasswordChangeResponseData>;

export type AuthPasswordResetRequestParams = undefined;
export type AuthPasswordResetRequestQuery = undefined;
export type AuthPasswordResetRequestBody = {
  email: string;
};
export type AuthPasswordResetRequestResponseData = DirectAuthOkResponse;
export type AuthPasswordResetRequestResponse = import("../types").ApiEnvelope<AuthPasswordResetRequestResponseData>;

export type AuthPasswordResetConfirmParams = undefined;
export type AuthPasswordResetConfirmQuery = undefined;
export type AuthPasswordResetConfirmBody = {
  token: string;
  newPassword: string;
};
export type AuthPasswordResetConfirmResponseData = DirectAuthOkResponse;
export type AuthPasswordResetConfirmResponse = import("../types").ApiEnvelope<AuthPasswordResetConfirmResponseData>;

export type AuthPasswordResetLandingParams = undefined;
export type AuthPasswordResetLandingQuery = {
  token?: string;
};
export type AuthPasswordResetLandingBody = undefined;
export type AuthPasswordResetLandingResponseData = Blob;
export type AuthPasswordResetLandingResponse = Blob;

export type AuthSessionsListParams = undefined;
export type AuthSessionsListQuery = {

};
export type AuthSessionsListBody = undefined;
export type AuthSessionsListResponseData = DirectAuthSessionListResponse;
export type AuthSessionsListResponse = import("../types").ApiEnvelope<AuthSessionsListResponseData>;

export type AuthSessionsRevokeParams = {
  sessionId: number;
};
export type AuthSessionsRevokeQuery = undefined;
export type AuthSessionsRevokeBody = undefined;
export type AuthSessionsRevokeResponseData = DirectAuthOkResponse;
export type AuthSessionsRevokeResponse = import("../types").ApiEnvelope<AuthSessionsRevokeResponseData>;

export type AuthSessionsRevokeOtherParams = undefined;
export type AuthSessionsRevokeOtherQuery = undefined;
export type AuthSessionsRevokeOtherBody = {
  refreshToken: string;
};
export type AuthSessionsRevokeOtherResponseData = DirectAuthOkResponse;
export type AuthSessionsRevokeOtherResponse = import("../types").ApiEnvelope<AuthSessionsRevokeOtherResponseData>;

export const apiRoutes_auth = {
  // Contract source: explicit
  "auth_mfa_complete": {
    method: "POST",
    path: "/auth/mfa/complete",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Complete a first-factor login with TOTP or a recovery code",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMfaCompleteParams;
      query: AuthMfaCompleteQuery;
      body: AuthMfaCompleteBody;
      response: AuthMfaCompleteResponse;
      responseData: AuthMfaCompleteResponseData;
    },
  },
  // Contract source: explicit
  "auth_mfa_status": {
    method: "GET",
    path: "/auth/mfa",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Read the current product account's MFA status",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AuthMfaStatusParams;
      query: AuthMfaStatusQuery;
      body: AuthMfaStatusBody;
      response: AuthMfaStatusResponse;
      responseData: AuthMfaStatusResponseData;
    },
  },
  // Contract source: explicit
  "auth_mfa_setup": {
    method: "POST",
    path: "/auth/mfa/setup",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Prepare TOTP enrollment after rechecking the password",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMfaSetupParams;
      query: AuthMfaSetupQuery;
      body: AuthMfaSetupBody;
      response: AuthMfaSetupResponse;
      responseData: AuthMfaSetupResponseData;
    },
  },
  // Contract source: explicit
  "auth_mfa_enable": {
    method: "POST",
    path: "/auth/mfa/enable",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Confirm TOTP enrollment and return recovery codes once",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMfaEnableParams;
      query: AuthMfaEnableQuery;
      body: AuthMfaEnableBody;
      response: AuthMfaEnableResponse;
      responseData: AuthMfaEnableResponseData;
    },
  },
  // Contract source: explicit
  "auth_mfa_disable": {
    method: "POST",
    path: "/auth/mfa/disable",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Disable MFA using both the password and a second factor",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMfaDisableParams;
      query: AuthMfaDisableQuery;
      body: AuthMfaDisableBody;
      response: AuthMfaDisableResponse;
      responseData: AuthMfaDisableResponseData;
    },
  },
  // Contract source: explicit
  "auth_register": {
    method: "POST",
    path: "/auth/register",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Register a new direct-auth account",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthRegisterParams;
      query: AuthRegisterQuery;
      body: AuthRegisterBody;
      response: AuthRegisterResponse;
      responseData: AuthRegisterResponseData;
    },
  },
  // Contract source: explicit
  "auth_login": {
    method: "POST",
    path: "/auth/login",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Log in with email + password",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthLoginParams;
      query: AuthLoginQuery;
      body: AuthLoginBody;
      response: AuthLoginResponse;
      responseData: AuthLoginResponseData;
    },
  },
  // Contract source: explicit
  "auth_refresh": {
    method: "POST",
    path: "/auth/refresh",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Rotate access + refresh tokens",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthRefreshParams;
      query: AuthRefreshQuery;
      body: AuthRefreshBody;
      response: AuthRefreshResponse;
      responseData: AuthRefreshResponseData;
    },
  },
  // Contract source: explicit
  "auth_logout": {
    method: "POST",
    path: "/auth/logout",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Revoke the current refresh token",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthLogoutParams;
      query: AuthLogoutQuery;
      body: AuthLogoutBody;
      response: AuthLogoutResponse;
      responseData: AuthLogoutResponseData;
    },
  },
  // Contract source: explicit
  "auth_me": {
    method: "GET",
    path: "/auth/me",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Get the current user incl. roles and isAdmin (Bearer access JWT)",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AuthMeParams;
      query: AuthMeQuery;
      body: AuthMeBody;
      response: AuthMeResponse;
      responseData: AuthMeResponseData;
    },
  },
  // Contract source: explicit
  "auth_me_profile_update": {
    method: "PATCH",
    path: "/auth/me/profile",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Update the current user's own profile (name, avatar)",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMeProfileUpdateParams;
      query: AuthMeProfileUpdateQuery;
      body: AuthMeProfileUpdateBody;
      response: AuthMeProfileUpdateResponse;
      responseData: AuthMeProfileUpdateResponseData;
    },
  },
  // Contract source: explicit
  "auth_push_token_upsert": {
    method: "POST",
    path: "/auth/push-token",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Register a device push token for the current user",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthPushTokenUpsertParams;
      query: AuthPushTokenUpsertQuery;
      body: AuthPushTokenUpsertBody;
      response: AuthPushTokenUpsertResponse;
      responseData: AuthPushTokenUpsertResponseData;
    },
  },
  // Contract source: explicit
  "auth_verify_email_request": {
    method: "POST",
    path: "/auth/verify-email/request",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Send a fresh email-verification link to the current user",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthVerifyEmailRequestParams;
      query: AuthVerifyEmailRequestQuery;
      body: AuthVerifyEmailRequestBody;
      response: AuthVerifyEmailRequestResponse;
      responseData: AuthVerifyEmailRequestResponseData;
    },
  },
  // Contract source: explicit
  "auth_verify_email_confirm": {
    method: "POST",
    path: "/auth/verify-email/confirm",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Confirm an email-verification token (programmatic / deep-link flow)",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthVerifyEmailConfirmParams;
      query: AuthVerifyEmailConfirmQuery;
      body: AuthVerifyEmailConfirmBody;
      response: AuthVerifyEmailConfirmResponse;
      responseData: AuthVerifyEmailConfirmResponseData;
    },
  },
  // Contract source: explicit
  "auth_verify_email_landing": {
    method: "GET",
    path: "/auth/verify-email",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Browser landing page that consumes the verification token",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AuthVerifyEmailLandingParams;
      query: AuthVerifyEmailLandingQuery;
      body: AuthVerifyEmailLandingBody;
      response: AuthVerifyEmailLandingResponse;
      responseData: AuthVerifyEmailLandingResponseData;
    },
  },
  // Contract source: explicit
  "auth_me_email_patch": {
    method: "PATCH",
    path: "/auth/me/email",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Change current user's email after password confirmation",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthMeEmailPatchParams;
      query: AuthMeEmailPatchQuery;
      body: AuthMeEmailPatchBody;
      response: AuthMeEmailPatchResponse;
      responseData: AuthMeEmailPatchResponseData;
    },
  },
  // Contract source: explicit
  "auth_password_change": {
    method: "POST",
    path: "/auth/password/change",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Change password for the current user",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthPasswordChangeParams;
      query: AuthPasswordChangeQuery;
      body: AuthPasswordChangeBody;
      response: AuthPasswordChangeResponse;
      responseData: AuthPasswordChangeResponseData;
    },
  },
  // Contract source: explicit
  "auth_password_reset_request": {
    method: "POST",
    path: "/auth/password/reset/request",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Request a password reset email",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthPasswordResetRequestParams;
      query: AuthPasswordResetRequestQuery;
      body: AuthPasswordResetRequestBody;
      response: AuthPasswordResetRequestResponse;
      responseData: AuthPasswordResetRequestResponseData;
    },
  },
  // Contract source: explicit
  "auth_password_reset_confirm": {
    method: "POST",
    path: "/auth/password/reset/confirm",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Reset password with an email token",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthPasswordResetConfirmParams;
      query: AuthPasswordResetConfirmQuery;
      body: AuthPasswordResetConfirmBody;
      response: AuthPasswordResetConfirmResponse;
      responseData: AuthPasswordResetConfirmResponseData;
    },
  },
  // Contract source: explicit
  "auth_password_reset_landing": {
    method: "GET",
    path: "/auth/password/reset",
    auth: {"type":"public"},
    meta: {
      tags: ["auth"],
      summary: "Browser landing page for password reset links",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AuthPasswordResetLandingParams;
      query: AuthPasswordResetLandingQuery;
      body: AuthPasswordResetLandingBody;
      response: AuthPasswordResetLandingResponse;
      responseData: AuthPasswordResetLandingResponseData;
    },
  },
  // Contract source: explicit
  "auth_sessions_list": {
    method: "GET",
    path: "/auth/sessions",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "List active refresh-token sessions for the current user",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: AuthSessionsListParams;
      query: AuthSessionsListQuery;
      body: AuthSessionsListBody;
      response: AuthSessionsListResponse;
      responseData: AuthSessionsListResponseData;
    },
  },
  // Contract source: explicit
  "auth_sessions_revoke": {
    method: "DELETE",
    path: "/auth/sessions/:sessionId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Revoke one active session",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: AuthSessionsRevokeParams;
      query: AuthSessionsRevokeQuery;
      body: AuthSessionsRevokeBody;
      response: AuthSessionsRevokeResponse;
      responseData: AuthSessionsRevokeResponseData;
    },
  },
  // Contract source: explicit
  "auth_sessions_revoke_other": {
    method: "POST",
    path: "/auth/sessions/revoke-other",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["auth"],
      summary: "Revoke all sessions except the supplied current refresh token",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: AuthSessionsRevokeOtherParams;
      query: AuthSessionsRevokeOtherQuery;
      body: AuthSessionsRevokeOtherBody;
      response: AuthSessionsRevokeOtherResponse;
      responseData: AuthSessionsRevokeOtherResponseData;
    },
  },
} as const;