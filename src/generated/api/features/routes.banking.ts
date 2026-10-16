/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type BankingPrivateAccountsParams = undefined;
export type BankingPrivateAccountsQuery = {

};
export type BankingPrivateAccountsBody = undefined;
export type BankingPrivateAccountsResponseData = {
  scope: "private" | "company";
  canManageConnections: boolean;
  accounts: Array<{
  id: number;
  scope: "private" | "company";
  name: string;
  kind: string;
  provider: "manual" | "fints" | "paypal" | "sumup" | "stripe";
  currency: string;
  ibanMasked: string | null;
  balance: string;
  archived: boolean;
  connectionId: number | null;
  connectionStatus: "not_connected" | "connected" | "locked" | "reauth_required" | "error" | null;
  capabilities: {
  canSync: boolean;
  requiresUserConsent: boolean;
  canManageConnection: boolean;
  canImportFile: boolean;
  canCreateBalanceSnapshot: boolean;
  canLinkFints: boolean;
  syncAction: "fints_sync" | "payments_paypal_sync" | "payments_sumup_sync" | null;
};
}>;
};
export type BankingPrivateAccountsResponse = import("../types").ApiEnvelope<BankingPrivateAccountsResponseData>;

export type BankingPrivateProvidersParams = undefined;
export type BankingPrivateProvidersQuery = {

};
export type BankingPrivateProvidersBody = undefined;
export type BankingPrivateProvidersResponseData = {
  providers: Array<{
  provider: "manual" | "fints" | "paypal" | "sumup" | "stripe";
  label: string;
  available: boolean;
  requiresUserConsent: boolean;
  accountKinds: Array<string>;
}>;
};
export type BankingPrivateProvidersResponse = import("../types").ApiEnvelope<BankingPrivateProvidersResponseData>;

export type BankingPrivateFintsInstitutesParams = undefined;
export type BankingPrivateFintsInstitutesQuery = {
  q: string;
  limit?: number;
};
export type BankingPrivateFintsInstitutesBody = undefined;
export type BankingPrivateFintsInstitutesResponseData = {
  institutes: Array<{
  blz: string;
  name: string;
  city: string;
  bic: string;
  serverUrl: string;
}>;
};
export type BankingPrivateFintsInstitutesResponse = import("../types").ApiEnvelope<BankingPrivateFintsInstitutesResponseData>;

export type BankingPrivateFintsConnectionsParams = undefined;
export type BankingPrivateFintsConnectionsQuery = {

};
export type BankingPrivateFintsConnectionsBody = undefined;
export type BankingPrivateFintsConnectionsResponseData = {
  connections: Array<{
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
}>;
};
export type BankingPrivateFintsConnectionsResponse = import("../types").ApiEnvelope<BankingPrivateFintsConnectionsResponseData>;

export type BankingPrivateFintsCreateConnectionParams = undefined;
export type BankingPrivateFintsCreateConnectionQuery = undefined;
export type BankingPrivateFintsCreateConnectionBody = {
  bankName?: string;
  blz: string;
  serverUrl?: string;
  username: string;
  pin: string;
  accountHolder?: string;
  tanMechanism?: string;
  tanMedium?: string;
};
export type BankingPrivateFintsCreateConnectionResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingPrivateFintsCreateConnectionResponse = import("../types").ApiEnvelope<BankingPrivateFintsCreateConnectionResponseData>;

export type BankingPrivateFintsUpdateCredentialsParams = {
  connectionId: number;
};
export type BankingPrivateFintsUpdateCredentialsQuery = undefined;
export type BankingPrivateFintsUpdateCredentialsBody = {
  username?: string;
  pin?: string;
};
export type BankingPrivateFintsUpdateCredentialsResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingPrivateFintsUpdateCredentialsResponse = import("../types").ApiEnvelope<BankingPrivateFintsUpdateCredentialsResponseData>;

export type BankingPrivateFintsDeleteConnectionParams = {
  connectionId: number;
};
export type BankingPrivateFintsDeleteConnectionQuery = undefined;
export type BankingPrivateFintsDeleteConnectionBody = undefined;
export type BankingPrivateFintsDeleteConnectionResponseData = {
  ok: true;
};
export type BankingPrivateFintsDeleteConnectionResponse = import("../types").ApiEnvelope<BankingPrivateFintsDeleteConnectionResponseData>;

export type BankingPrivateFintsUnlockParams = {
  connectionId: number;
};
export type BankingPrivateFintsUnlockQuery = undefined;
export type BankingPrivateFintsUnlockBody = {
  confirmed: true;
};
export type BankingPrivateFintsUnlockResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingPrivateFintsUnlockResponse = import("../types").ApiEnvelope<BankingPrivateFintsUnlockResponseData>;

export type BankingPrivateFintsAuditParams = {
  connectionId: number;
};
export type BankingPrivateFintsAuditQuery = {

};
export type BankingPrivateFintsAuditBody = undefined;
export type BankingPrivateFintsAuditResponseData = {
  entries: Array<{
  id: number;
  connectionId: number | null;
  action: string;
  origin: string;
  actor: string | null;
  remoteIp: string | null;
  success: boolean;
  message: string | null;
  createdAt: string;
}>;
};
export type BankingPrivateFintsAuditResponse = import("../types").ApiEnvelope<BankingPrivateFintsAuditResponseData>;

export type BankingPrivateFintsCatalogParams = {
  connectionId: number;
};
export type BankingPrivateFintsCatalogQuery = {

};
export type BankingPrivateFintsCatalogBody = undefined;
export type BankingPrivateFintsCatalogResponseData = {
  accounts: Array<{
  id: number;
  connectionId: number;
  kind: string;
  productName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  currency: string | null;
  balanceCents: number | null;
  balanceCurrency: string | null;
  balanceDate: string | null;
  ignored: boolean;
  gone: boolean;
  accountId: number | null;
  canBind: boolean;
  canSyncTransactions: boolean;
}>;
};
export type BankingPrivateFintsCatalogResponse = import("../types").ApiEnvelope<BankingPrivateFintsCatalogResponseData>;

export type BankingPrivateFintsBindParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingPrivateFintsBindQuery = undefined;
export type BankingPrivateFintsBindBody = {
  accountId: number;
};
export type BankingPrivateFintsBindResponseData = {
  ok: true;
};
export type BankingPrivateFintsBindResponse = import("../types").ApiEnvelope<BankingPrivateFintsBindResponseData>;

export type BankingPrivateFintsUnbindParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingPrivateFintsUnbindQuery = undefined;
export type BankingPrivateFintsUnbindBody = undefined;
export type BankingPrivateFintsUnbindResponseData = {
  ok: true;
};
export type BankingPrivateFintsUnbindResponse = import("../types").ApiEnvelope<BankingPrivateFintsUnbindResponseData>;

export type BankingPrivateFintsIgnoreParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingPrivateFintsIgnoreQuery = undefined;
export type BankingPrivateFintsIgnoreBody = {
  ignored: boolean;
};
export type BankingPrivateFintsIgnoreResponseData = {
  ok: true;
};
export type BankingPrivateFintsIgnoreResponse = import("../types").ApiEnvelope<BankingPrivateFintsIgnoreResponseData>;

export type BankingPrivateFintsSyncParams = {
  connectionId: number;
};
export type BankingPrivateFintsSyncQuery = undefined;
export type BankingPrivateFintsSyncBody = {
  consent: true;
  daysBack?: number;
  startDate?: string;
  endDate?: string;
};
export type BankingPrivateFintsSyncResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingPrivateFintsSyncResponse = import("../types").ApiEnvelope<BankingPrivateFintsSyncResponseData>;

export type BankingPrivateFintsOperationParams = {
  connectionId: number;
  operationId: number;
};
export type BankingPrivateFintsOperationQuery = {

};
export type BankingPrivateFintsOperationBody = undefined;
export type BankingPrivateFintsOperationResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingPrivateFintsOperationResponse = import("../types").ApiEnvelope<BankingPrivateFintsOperationResponseData>;

export type BankingPrivateFintsContinueParams = {
  connectionId: number;
  operationId: number;
};
export type BankingPrivateFintsContinueQuery = undefined;
export type BankingPrivateFintsContinueBody = {
  consent: true;
  tan?: string;
};
export type BankingPrivateFintsContinueResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingPrivateFintsContinueResponse = import("../types").ApiEnvelope<BankingPrivateFintsContinueResponseData>;

export type BankingPrivateFintsCancelParams = {
  connectionId: number;
  operationId: number;
};
export type BankingPrivateFintsCancelQuery = undefined;
export type BankingPrivateFintsCancelBody = {

};
export type BankingPrivateFintsCancelResponseData = {
  ok: true;
};
export type BankingPrivateFintsCancelResponse = import("../types").ApiEnvelope<BankingPrivateFintsCancelResponseData>;

export type BankingPrivateFintsImportParams = {
  connectionId: number;
  operationId: number;
};
export type BankingPrivateFintsImportQuery = undefined;
export type BankingPrivateFintsImportBody = {

};
export type BankingPrivateFintsImportResponseData = {
  state: "imported" | "already_imported";
  operationId: number;
  accounts: Array<{
  accountId: number;
  inserted: number;
  duplicates: number;
}>;
};
export type BankingPrivateFintsImportResponse = import("../types").ApiEnvelope<BankingPrivateFintsImportResponseData>;

export type BankingPrivateFintsDiscardParams = {
  connectionId: number;
  operationId: number;
};
export type BankingPrivateFintsDiscardQuery = undefined;
export type BankingPrivateFintsDiscardBody = {
  confirmed: true;
};
export type BankingPrivateFintsDiscardResponseData = {
  ok: true;
};
export type BankingPrivateFintsDiscardResponse = import("../types").ApiEnvelope<BankingPrivateFintsDiscardResponseData>;

export type BankingCompanyAccountsParams = undefined;
export type BankingCompanyAccountsQuery = {

};
export type BankingCompanyAccountsBody = undefined;
export type BankingCompanyAccountsResponseData = {
  scope: "private" | "company";
  canManageConnections: boolean;
  accounts: Array<{
  id: number;
  scope: "private" | "company";
  name: string;
  kind: string;
  provider: "manual" | "fints" | "paypal" | "sumup" | "stripe";
  currency: string;
  ibanMasked: string | null;
  balance: string;
  archived: boolean;
  connectionId: number | null;
  connectionStatus: "not_connected" | "connected" | "locked" | "reauth_required" | "error" | null;
  capabilities: {
  canSync: boolean;
  requiresUserConsent: boolean;
  canManageConnection: boolean;
  canImportFile: boolean;
  canCreateBalanceSnapshot: boolean;
  canLinkFints: boolean;
  syncAction: "fints_sync" | "payments_paypal_sync" | "payments_sumup_sync" | null;
};
}>;
};
export type BankingCompanyAccountsResponse = import("../types").ApiEnvelope<BankingCompanyAccountsResponseData>;

export type BankingCompanyProvidersParams = undefined;
export type BankingCompanyProvidersQuery = {

};
export type BankingCompanyProvidersBody = undefined;
export type BankingCompanyProvidersResponseData = {
  providers: Array<{
  provider: "manual" | "fints" | "paypal" | "sumup" | "stripe";
  label: string;
  available: boolean;
  requiresUserConsent: boolean;
  accountKinds: Array<string>;
}>;
};
export type BankingCompanyProvidersResponse = import("../types").ApiEnvelope<BankingCompanyProvidersResponseData>;

export type BankingCompanyFintsInstitutesParams = undefined;
export type BankingCompanyFintsInstitutesQuery = {
  q: string;
  limit?: number;
};
export type BankingCompanyFintsInstitutesBody = undefined;
export type BankingCompanyFintsInstitutesResponseData = {
  institutes: Array<{
  blz: string;
  name: string;
  city: string;
  bic: string;
  serverUrl: string;
}>;
};
export type BankingCompanyFintsInstitutesResponse = import("../types").ApiEnvelope<BankingCompanyFintsInstitutesResponseData>;

export type BankingCompanyFintsConnectionsParams = undefined;
export type BankingCompanyFintsConnectionsQuery = {

};
export type BankingCompanyFintsConnectionsBody = undefined;
export type BankingCompanyFintsConnectionsResponseData = {
  connections: Array<{
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
}>;
};
export type BankingCompanyFintsConnectionsResponse = import("../types").ApiEnvelope<BankingCompanyFintsConnectionsResponseData>;

export type BankingCompanyFintsCreateConnectionParams = undefined;
export type BankingCompanyFintsCreateConnectionQuery = undefined;
export type BankingCompanyFintsCreateConnectionBody = {
  bankName?: string;
  blz: string;
  serverUrl?: string;
  username: string;
  pin: string;
  accountHolder?: string;
  tanMechanism?: string;
  tanMedium?: string;
};
export type BankingCompanyFintsCreateConnectionResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingCompanyFintsCreateConnectionResponse = import("../types").ApiEnvelope<BankingCompanyFintsCreateConnectionResponseData>;

export type BankingCompanyFintsUpdateCredentialsParams = {
  connectionId: number;
};
export type BankingCompanyFintsUpdateCredentialsQuery = undefined;
export type BankingCompanyFintsUpdateCredentialsBody = {
  username?: string;
  pin?: string;
};
export type BankingCompanyFintsUpdateCredentialsResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingCompanyFintsUpdateCredentialsResponse = import("../types").ApiEnvelope<BankingCompanyFintsUpdateCredentialsResponseData>;

export type BankingCompanyFintsDeleteConnectionParams = {
  connectionId: number;
};
export type BankingCompanyFintsDeleteConnectionQuery = undefined;
export type BankingCompanyFintsDeleteConnectionBody = undefined;
export type BankingCompanyFintsDeleteConnectionResponseData = {
  ok: true;
};
export type BankingCompanyFintsDeleteConnectionResponse = import("../types").ApiEnvelope<BankingCompanyFintsDeleteConnectionResponseData>;

export type BankingCompanyFintsUnlockParams = {
  connectionId: number;
};
export type BankingCompanyFintsUnlockQuery = undefined;
export type BankingCompanyFintsUnlockBody = {
  confirmed: true;
};
export type BankingCompanyFintsUnlockResponseData = {
  connection: {
  id: number;
  bankName: string;
  blz: string;
  serverUrl: string;
  username: string;
  accountHolder: string | null;
  tanMechanism: string | null;
  tanMedium: string | null;
  status: string;
  failedAuthAttempts: number;
  locked: boolean;
  lockedAt: string | null;
  lockedReason: string | null;
  scaValid: boolean;
  scaValidUntil: string | null;
  hasStoredSession: boolean;
  accountsTotal: number;
  accountsIgnored: number;
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
} | null;
  lastSyncedAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastErrorAt: string | null;
  createdAt: string;
  updatedAt: string;
};
};
export type BankingCompanyFintsUnlockResponse = import("../types").ApiEnvelope<BankingCompanyFintsUnlockResponseData>;

export type BankingCompanyFintsAuditParams = {
  connectionId: number;
};
export type BankingCompanyFintsAuditQuery = {

};
export type BankingCompanyFintsAuditBody = undefined;
export type BankingCompanyFintsAuditResponseData = {
  entries: Array<{
  id: number;
  connectionId: number | null;
  action: string;
  origin: string;
  actor: string | null;
  remoteIp: string | null;
  success: boolean;
  message: string | null;
  createdAt: string;
}>;
};
export type BankingCompanyFintsAuditResponse = import("../types").ApiEnvelope<BankingCompanyFintsAuditResponseData>;

export type BankingCompanyFintsCatalogParams = {
  connectionId: number;
};
export type BankingCompanyFintsCatalogQuery = {

};
export type BankingCompanyFintsCatalogBody = undefined;
export type BankingCompanyFintsCatalogResponseData = {
  accounts: Array<{
  id: number;
  connectionId: number;
  kind: string;
  productName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  currency: string | null;
  balanceCents: number | null;
  balanceCurrency: string | null;
  balanceDate: string | null;
  ignored: boolean;
  gone: boolean;
  accountId: number | null;
  canBind: boolean;
  canSyncTransactions: boolean;
}>;
};
export type BankingCompanyFintsCatalogResponse = import("../types").ApiEnvelope<BankingCompanyFintsCatalogResponseData>;

export type BankingCompanyFintsBindParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingCompanyFintsBindQuery = undefined;
export type BankingCompanyFintsBindBody = {
  accountId: number;
};
export type BankingCompanyFintsBindResponseData = {
  ok: true;
};
export type BankingCompanyFintsBindResponse = import("../types").ApiEnvelope<BankingCompanyFintsBindResponseData>;

export type BankingCompanyFintsUnbindParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingCompanyFintsUnbindQuery = undefined;
export type BankingCompanyFintsUnbindBody = undefined;
export type BankingCompanyFintsUnbindResponseData = {
  ok: true;
};
export type BankingCompanyFintsUnbindResponse = import("../types").ApiEnvelope<BankingCompanyFintsUnbindResponseData>;

export type BankingCompanyFintsIgnoreParams = {
  connectionId: number;
  bankAccountId: number;
};
export type BankingCompanyFintsIgnoreQuery = undefined;
export type BankingCompanyFintsIgnoreBody = {
  ignored: boolean;
};
export type BankingCompanyFintsIgnoreResponseData = {
  ok: true;
};
export type BankingCompanyFintsIgnoreResponse = import("../types").ApiEnvelope<BankingCompanyFintsIgnoreResponseData>;

export type BankingCompanyFintsSyncParams = {
  connectionId: number;
};
export type BankingCompanyFintsSyncQuery = undefined;
export type BankingCompanyFintsSyncBody = {
  consent: true;
  daysBack?: number;
  startDate?: string;
  endDate?: string;
};
export type BankingCompanyFintsSyncResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingCompanyFintsSyncResponse = import("../types").ApiEnvelope<BankingCompanyFintsSyncResponseData>;

export type BankingCompanyFintsOperationParams = {
  connectionId: number;
  operationId: number;
};
export type BankingCompanyFintsOperationQuery = {

};
export type BankingCompanyFintsOperationBody = undefined;
export type BankingCompanyFintsOperationResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingCompanyFintsOperationResponse = import("../types").ApiEnvelope<BankingCompanyFintsOperationResponseData>;

export type BankingCompanyFintsContinueParams = {
  connectionId: number;
  operationId: number;
};
export type BankingCompanyFintsContinueQuery = undefined;
export type BankingCompanyFintsContinueBody = {
  consent: true;
  tan?: string;
};
export type BankingCompanyFintsContinueResponseData = {
  operation: {
  id: number;
  connectionId: number;
  status: "running" | "awaiting_app" | "awaiting_confirmation" | "awaiting_tan" | "done" | "failed" | "cancelled" | "expired";
  decoupled: boolean;
  challenge: string | null;
  hint: string;
  pollCount: number;
  expiresAt: string;
  startedAt: string;
  updatedAt: string;
  resultReady: boolean;
  errorCode: string | null;
  message: string | null;
};
};
export type BankingCompanyFintsContinueResponse = import("../types").ApiEnvelope<BankingCompanyFintsContinueResponseData>;

export type BankingCompanyFintsCancelParams = {
  connectionId: number;
  operationId: number;
};
export type BankingCompanyFintsCancelQuery = undefined;
export type BankingCompanyFintsCancelBody = {

};
export type BankingCompanyFintsCancelResponseData = {
  ok: true;
};
export type BankingCompanyFintsCancelResponse = import("../types").ApiEnvelope<BankingCompanyFintsCancelResponseData>;

export type BankingCompanyFintsImportParams = {
  connectionId: number;
  operationId: number;
};
export type BankingCompanyFintsImportQuery = undefined;
export type BankingCompanyFintsImportBody = {

};
export type BankingCompanyFintsImportResponseData = {
  state: "imported" | "already_imported";
  operationId: number;
  accounts: Array<{
  accountId: number;
  inserted: number;
  duplicates: number;
}>;
};
export type BankingCompanyFintsImportResponse = import("../types").ApiEnvelope<BankingCompanyFintsImportResponseData>;

export type BankingCompanyFintsDiscardParams = {
  connectionId: number;
  operationId: number;
};
export type BankingCompanyFintsDiscardQuery = undefined;
export type BankingCompanyFintsDiscardBody = {
  confirmed: true;
};
export type BankingCompanyFintsDiscardResponseData = {
  ok: true;
};
export type BankingCompanyFintsDiscardResponse = import("../types").ApiEnvelope<BankingCompanyFintsDiscardResponseData>;

export const apiRoutes_banking = {
  // Contract source: explicit
  "banking_private_accounts": {
    method: "GET",
    path: "/banking/private/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Konten und Anbieterfähigkeiten des geprüften Bereichs",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateAccountsParams;
      query: BankingPrivateAccountsQuery;
      body: BankingPrivateAccountsBody;
      response: BankingPrivateAccountsResponse;
      responseData: BankingPrivateAccountsResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_providers": {
    method: "GET",
    path: "/banking/private/providers",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Verfügbare Bankanbieter",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateProvidersParams;
      query: BankingPrivateProvidersQuery;
      body: BankingPrivateProvidersBody;
      response: BankingPrivateProvidersResponse;
      responseData: BankingPrivateProvidersResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_institutes": {
    method: "GET",
    path: "/banking/private/fints/institutes",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankinstitut suchen, ohne Bankkontakt",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsInstitutesParams;
      query: BankingPrivateFintsInstitutesQuery;
      body: BankingPrivateFintsInstitutesBody;
      response: BankingPrivateFintsInstitutesResponse;
      responseData: BankingPrivateFintsInstitutesResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_connections": {
    method: "GET",
    path: "/banking/private/fints/connections",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Eigene Bankverbindungen ohne Zugangsdaten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsConnectionsParams;
      query: BankingPrivateFintsConnectionsQuery;
      body: BankingPrivateFintsConnectionsBody;
      response: BankingPrivateFintsConnectionsResponse;
      responseData: BankingPrivateFintsConnectionsResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_create_connection": {
    method: "POST",
    path: "/banking/private/fints/connections",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankzugang verschlüsselt anlegen, ohne Bankkontakt",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsCreateConnectionParams;
      query: BankingPrivateFintsCreateConnectionQuery;
      body: BankingPrivateFintsCreateConnectionBody;
      response: BankingPrivateFintsCreateConnectionResponse;
      responseData: BankingPrivateFintsCreateConnectionResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_update_credentials": {
    method: "PATCH",
    path: "/banking/private/fints/connections/:connectionId/credentials",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Zugangsdaten korrigieren und Sperrzähler erhalten",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsUpdateCredentialsParams;
      query: BankingPrivateFintsUpdateCredentialsQuery;
      body: BankingPrivateFintsUpdateCredentialsBody;
      response: BankingPrivateFintsUpdateCredentialsResponse;
      responseData: BankingPrivateFintsUpdateCredentialsResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_delete_connection": {
    method: "DELETE",
    path: "/banking/private/fints/connections/:connectionId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Unverknüpften Bankzugang löschen, Sperrzähler schützen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsDeleteConnectionParams;
      query: BankingPrivateFintsDeleteConnectionQuery;
      body: BankingPrivateFintsDeleteConnectionBody;
      response: BankingPrivateFintsDeleteConnectionResponse;
      responseData: BankingPrivateFintsDeleteConnectionResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_unlock": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/unlock",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Banksperre nach bewusster Prüfung zurücksetzen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsUnlockParams;
      query: BankingPrivateFintsUnlockQuery;
      body: BankingPrivateFintsUnlockBody;
      response: BankingPrivateFintsUnlockResponse;
      responseData: BankingPrivateFintsUnlockResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_audit": {
    method: "GET",
    path: "/banking/private/fints/connections/:connectionId/audit",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bereinigtes Zugriffsprotokoll des Bankzugangs",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsAuditParams;
      query: BankingPrivateFintsAuditQuery;
      body: BankingPrivateFintsAuditBody;
      response: BankingPrivateFintsAuditResponse;
      responseData: BankingPrivateFintsAuditResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_catalog": {
    method: "GET",
    path: "/banking/private/fints/connections/:connectionId/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonten aus gespeichertem Zustand, ohne Bankkontakt",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsCatalogParams;
      query: BankingPrivateFintsCatalogQuery;
      body: BankingPrivateFintsCatalogBody;
      response: BankingPrivateFintsCatalogResponse;
      responseData: BankingPrivateFintsCatalogResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_bind": {
    method: "PUT",
    path: "/banking/private/fints/connections/:connectionId/accounts/:bankAccountId/binding",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonto ausdrücklich dem passenden Zielkonto zuordnen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsBindParams;
      query: BankingPrivateFintsBindQuery;
      body: BankingPrivateFintsBindBody;
      response: BankingPrivateFintsBindResponse;
      responseData: BankingPrivateFintsBindResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_unbind": {
    method: "DELETE",
    path: "/banking/private/fints/connections/:connectionId/accounts/:bankAccountId/binding",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Kontozuordnung ohne Bankkontakt lösen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsUnbindParams;
      query: BankingPrivateFintsUnbindQuery;
      body: BankingPrivateFintsUnbindBody;
      response: BankingPrivateFintsUnbindResponse;
      responseData: BankingPrivateFintsUnbindResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_ignore": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/accounts/:bankAccountId/ignore",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonto von künftigen Abfragen ausschließen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsIgnoreParams;
      query: BankingPrivateFintsIgnoreQuery;
      body: BankingPrivateFintsIgnoreBody;
      response: BankingPrivateFintsIgnoreResponse;
      responseData: BankingPrivateFintsIgnoreResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_sync": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/sync",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Nach Nutzerauslösung Bankdialog starten; niemals automatisch",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsSyncParams;
      query: BankingPrivateFintsSyncQuery;
      body: BankingPrivateFintsSyncBody;
      response: BankingPrivateFintsSyncResponse;
      responseData: BankingPrivateFintsSyncResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_operation": {
    method: "GET",
    path: "/banking/private/fints/connections/:connectionId/operations/:operationId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Gespeicherten Bankvorgang lesen, ohne neue Anmeldung",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingPrivateFintsOperationParams;
      query: BankingPrivateFintsOperationQuery;
      body: BankingPrivateFintsOperationBody;
      response: BankingPrivateFintsOperationResponse;
      responseData: BankingPrivateFintsOperationResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_continue": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/operations/:operationId/continue",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Nach Nutzerauslösung TAN senden oder Freigabe weiter abfragen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsContinueParams;
      query: BankingPrivateFintsContinueQuery;
      body: BankingPrivateFintsContinueBody;
      response: BankingPrivateFintsContinueResponse;
      responseData: BankingPrivateFintsContinueResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_cancel": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/operations/:operationId/cancel",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Laufenden Bankvorgang abbrechen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsCancelParams;
      query: BankingPrivateFintsCancelQuery;
      body: BankingPrivateFintsCancelBody;
      response: BankingPrivateFintsCancelResponse;
      responseData: BankingPrivateFintsCancelResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_import": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/operations/:operationId/import",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankergebnis atomar und wiederholbar in zugeordnete Konten übernehmen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsImportParams;
      query: BankingPrivateFintsImportQuery;
      body: BankingPrivateFintsImportBody;
      response: BankingPrivateFintsImportResponse;
      responseData: BankingPrivateFintsImportResponseData;
    },
  },
  // Contract source: explicit
  "banking_private_fints_discard": {
    method: "POST",
    path: "/banking/private/fints/connections/:connectionId/operations/:operationId/discard",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bereitliegendes Bankergebnis bewusst verwerfen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingPrivateFintsDiscardParams;
      query: BankingPrivateFintsDiscardQuery;
      body: BankingPrivateFintsDiscardBody;
      response: BankingPrivateFintsDiscardResponse;
      responseData: BankingPrivateFintsDiscardResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_accounts": {
    method: "GET",
    path: "/banking/company/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Konten und Anbieterfähigkeiten des geprüften Bereichs",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyAccountsParams;
      query: BankingCompanyAccountsQuery;
      body: BankingCompanyAccountsBody;
      response: BankingCompanyAccountsResponse;
      responseData: BankingCompanyAccountsResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_providers": {
    method: "GET",
    path: "/banking/company/providers",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Verfügbare Bankanbieter",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyProvidersParams;
      query: BankingCompanyProvidersQuery;
      body: BankingCompanyProvidersBody;
      response: BankingCompanyProvidersResponse;
      responseData: BankingCompanyProvidersResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_institutes": {
    method: "GET",
    path: "/banking/company/fints/institutes",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankinstitut suchen, ohne Bankkontakt",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsInstitutesParams;
      query: BankingCompanyFintsInstitutesQuery;
      body: BankingCompanyFintsInstitutesBody;
      response: BankingCompanyFintsInstitutesResponse;
      responseData: BankingCompanyFintsInstitutesResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_connections": {
    method: "GET",
    path: "/banking/company/fints/connections",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Eigene Bankverbindungen ohne Zugangsdaten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsConnectionsParams;
      query: BankingCompanyFintsConnectionsQuery;
      body: BankingCompanyFintsConnectionsBody;
      response: BankingCompanyFintsConnectionsResponse;
      responseData: BankingCompanyFintsConnectionsResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_create_connection": {
    method: "POST",
    path: "/banking/company/fints/connections",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankzugang verschlüsselt anlegen, ohne Bankkontakt",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsCreateConnectionParams;
      query: BankingCompanyFintsCreateConnectionQuery;
      body: BankingCompanyFintsCreateConnectionBody;
      response: BankingCompanyFintsCreateConnectionResponse;
      responseData: BankingCompanyFintsCreateConnectionResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_update_credentials": {
    method: "PATCH",
    path: "/banking/company/fints/connections/:connectionId/credentials",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Zugangsdaten korrigieren und Sperrzähler erhalten",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsUpdateCredentialsParams;
      query: BankingCompanyFintsUpdateCredentialsQuery;
      body: BankingCompanyFintsUpdateCredentialsBody;
      response: BankingCompanyFintsUpdateCredentialsResponse;
      responseData: BankingCompanyFintsUpdateCredentialsResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_delete_connection": {
    method: "DELETE",
    path: "/banking/company/fints/connections/:connectionId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Unverknüpften Bankzugang löschen, Sperrzähler schützen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsDeleteConnectionParams;
      query: BankingCompanyFintsDeleteConnectionQuery;
      body: BankingCompanyFintsDeleteConnectionBody;
      response: BankingCompanyFintsDeleteConnectionResponse;
      responseData: BankingCompanyFintsDeleteConnectionResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_unlock": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/unlock",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Banksperre nach bewusster Prüfung zurücksetzen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsUnlockParams;
      query: BankingCompanyFintsUnlockQuery;
      body: BankingCompanyFintsUnlockBody;
      response: BankingCompanyFintsUnlockResponse;
      responseData: BankingCompanyFintsUnlockResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_audit": {
    method: "GET",
    path: "/banking/company/fints/connections/:connectionId/audit",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bereinigtes Zugriffsprotokoll des Bankzugangs",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsAuditParams;
      query: BankingCompanyFintsAuditQuery;
      body: BankingCompanyFintsAuditBody;
      response: BankingCompanyFintsAuditResponse;
      responseData: BankingCompanyFintsAuditResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_catalog": {
    method: "GET",
    path: "/banking/company/fints/connections/:connectionId/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonten aus gespeichertem Zustand, ohne Bankkontakt",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsCatalogParams;
      query: BankingCompanyFintsCatalogQuery;
      body: BankingCompanyFintsCatalogBody;
      response: BankingCompanyFintsCatalogResponse;
      responseData: BankingCompanyFintsCatalogResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_bind": {
    method: "PUT",
    path: "/banking/company/fints/connections/:connectionId/accounts/:bankAccountId/binding",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonto ausdrücklich dem passenden Zielkonto zuordnen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsBindParams;
      query: BankingCompanyFintsBindQuery;
      body: BankingCompanyFintsBindBody;
      response: BankingCompanyFintsBindResponse;
      responseData: BankingCompanyFintsBindResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_unbind": {
    method: "DELETE",
    path: "/banking/company/fints/connections/:connectionId/accounts/:bankAccountId/binding",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Kontozuordnung ohne Bankkontakt lösen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsUnbindParams;
      query: BankingCompanyFintsUnbindQuery;
      body: BankingCompanyFintsUnbindBody;
      response: BankingCompanyFintsUnbindResponse;
      responseData: BankingCompanyFintsUnbindResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_ignore": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/accounts/:bankAccountId/ignore",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankkonto von künftigen Abfragen ausschließen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsIgnoreParams;
      query: BankingCompanyFintsIgnoreQuery;
      body: BankingCompanyFintsIgnoreBody;
      response: BankingCompanyFintsIgnoreResponse;
      responseData: BankingCompanyFintsIgnoreResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_sync": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/sync",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Nach Nutzerauslösung Bankdialog starten; niemals automatisch",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsSyncParams;
      query: BankingCompanyFintsSyncQuery;
      body: BankingCompanyFintsSyncBody;
      response: BankingCompanyFintsSyncResponse;
      responseData: BankingCompanyFintsSyncResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_operation": {
    method: "GET",
    path: "/banking/company/fints/connections/:connectionId/operations/:operationId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Gespeicherten Bankvorgang lesen, ohne neue Anmeldung",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BankingCompanyFintsOperationParams;
      query: BankingCompanyFintsOperationQuery;
      body: BankingCompanyFintsOperationBody;
      response: BankingCompanyFintsOperationResponse;
      responseData: BankingCompanyFintsOperationResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_continue": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/operations/:operationId/continue",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Nach Nutzerauslösung TAN senden oder Freigabe weiter abfragen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsContinueParams;
      query: BankingCompanyFintsContinueQuery;
      body: BankingCompanyFintsContinueBody;
      response: BankingCompanyFintsContinueResponse;
      responseData: BankingCompanyFintsContinueResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_cancel": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/operations/:operationId/cancel",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Laufenden Bankvorgang abbrechen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsCancelParams;
      query: BankingCompanyFintsCancelQuery;
      body: BankingCompanyFintsCancelBody;
      response: BankingCompanyFintsCancelResponse;
      responseData: BankingCompanyFintsCancelResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_import": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/operations/:operationId/import",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bankergebnis atomar und wiederholbar in zugeordnete Konten übernehmen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsImportParams;
      query: BankingCompanyFintsImportQuery;
      body: BankingCompanyFintsImportBody;
      response: BankingCompanyFintsImportResponse;
      responseData: BankingCompanyFintsImportResponseData;
    },
  },
  // Contract source: explicit
  "banking_company_fints_discard": {
    method: "POST",
    path: "/banking/company/fints/connections/:connectionId/operations/:operationId/discard",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["banking"],
      summary: "Bereitliegendes Bankergebnis bewusst verwerfen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BankingCompanyFintsDiscardParams;
      query: BankingCompanyFintsDiscardQuery;
      body: BankingCompanyFintsDiscardBody;
      response: BankingCompanyFintsDiscardResponse;
      responseData: BankingCompanyFintsDiscardResponseData;
    },
  },
} as const;