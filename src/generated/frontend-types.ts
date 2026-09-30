// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `npm run types:generate` to regenerate this file

// ============================================================================
// ENUMS & LITERAL TYPES
// ============================================================================

export type AppSettingsType = 'string' | 'number' | 'boolean' | 'json' | 'select';
export type WebhookStatus = 'pending' | 'processed' | 'failed' | 'skipped';
export type AppLogLevel = 'info' | 'warn' | 'error' | 'debug' | 'fatal' | 'critical';
export type RoleAssignmentStatus = 'active' | 'expired' | 'revoked';
export type EntitlementSyncType = 'role' | 'area';
export type EntitlementSyncOperation = 'assign' | 'update' | 'revoke' | 'state_check';
export type WorkflowQueueStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'canceled';
export type WorkflowCreatedBy = 'user' | 'system';
export type IdentityProvider = 'frontend' | 'direct';
export type UserSyncAction = 'provision_created' | 'provision_linked' | 'provision_existing' | 'sync_updated' | 'sync_skipped_stale' | 'sync_not_found' | 'delete_executed' | 'delete_not_found' | 'conflict_email_taken';
export type CreditConsumptionStatus = 'pending' | 'synced' | 'failed';
export type Gender = 'male' | 'female' | 'other';
export type CompanyStatus = 'pending' | 'active' | 'inactive' | 'suspended';
export type CompanyEmployeeStatus = 'active' | 'inactive' | 'terminated';
export type InvoiceStatus = 'draft' | 'issued' | 'paid' | 'overdue' | 'cancelled';
export type InvoiceDocumentType = 'invoice' | 'credit_note' | 'cancellation';
export type InviteStatus = 'pending' | 'accepted' | 'rejected' | 'expired' | 'cancelled';
export type OnboardingProgressStatus = 'pending' | 'completed' | 'skipped';
export type BookkeepingBasis = 'eur' | 'accrual';
export type LegalForm = 'Einzelunternehmen' | 'Freiberufler' | 'GbR' | 'UG' | 'GmbH' | 'AG' | 'KG' | 'OHG' | 'PartG' | 'eK';
export type Currency = 'EUR' | 'USD' | 'GBP' | 'JPY' | 'CHF' | 'CAD' | 'AUD' | 'CNY' | 'SEK' | 'NOK' | 'DKK' | 'PLN' | 'CZK' | 'HUF' | 'RON' | 'BGN' | 'KRW' | 'SGD' | 'HKD' | 'NZD' | 'INR' | 'THB' | 'MYR' | 'IDR' | 'PHP' | 'BRL' | 'MXN' | 'ARS' | 'CLP' | 'COP' | 'AED' | 'SAR' | 'ILS' | 'ZAR' | 'EGP' | 'TRY' | 'RUB';
export type ZugferdProfile = 'MINIMUM' | 'BASIC_WL' | 'BASIC' | 'EN16931' | 'EXTENDED' | 'XRECHNUNG';
export type BookkeepingPaymentStatus = 'unmatched' | 'cash_confirmed' | 'partially_matched' | 'fully_matched';
export type BookkeepingRevenueCategory = 'customer_invoice' | 'interest' | 'refund' | 'other' | 'asset_disposal' | 'pos_sale' | 'saas_revenue_apple_iap' | 'saas_revenue_google_iap';
export type IapPayoutPlatform = 'apple' | 'google';
export type BookkeepingExpenseCategory = 'infrastructure' | 'office' | 'software' | 'hardware' | 'travel' | 'marketing' | 'legal' | 'accounting' | 'insurance' | 'personnel' | 'depreciation' | 'interest_expense' | 'rent' | 'bank_fees' | 'professional_services' | 'other' | 'private_withdrawal' | 'ust_payment';
export type BookkeepingAssetType = 'equipment' | 'vehicle' | 'software' | 'furniture' | 'leasehold_improvement' | 'land' | 'building' | 'building_equipment' | 'intangible' | 'digital_asset' | 'other';
export type DepreciationMethod = 'linear' | 'degressive' | 'immediate_gwg' | 'sammelposten' | 'digital_afa' | 'none';
export type BuildingType = 'wohngebaeude_post2022' | 'wohngebaeude_1925_2022' | 'wohngebaeude_pre1925' | 'nichtwohngebaeude' | 'denkmal_7i' | 'mietwohnungsbau_7b';
export type AssetDisposalType = 'sale' | 'scrapping' | 'theft' | 'private_withdrawal' | 'insurance_claim' | 'donation' | 'destruction';
export type VatRegime = 'kleinunternehmer' | 'regelbesteuert';
export type VatAccountingMethod = 'SOLL' | 'IST';
export type VatTreatment = 'KLEINUNTERNEHMER_0' | 'DE_STANDARD_19' | 'DE_REDUCED_7' | 'REVERSE_CHARGE_13B' | 'EU_B2B_0' | 'EXPORT_0' | 'EXEMPT_4' | 'CUSTOM';
export type InputVatEligibility = 'NONE' | 'FULL' | 'PARTIAL';
export type FeeVatTreatment = 'UNKNOWN' | 'EXEMPT' | 'INCLUSIVE_STANDARD' | 'REVERSE_CHARGE_13B';
export type FeeProposalStatus = 'PROPOSED' | 'CONFIRMED' | 'REJECTED';
export type VatRegimeReason = 'initial' | 'vorjahr_exceeded' | 'current_year_exceeded' | 'manual_decision';
export type DocumentOwnerType = 'company' | 'user' | 'invoice' | 'internal' | 'revenue' | 'expense' | 'asset' | 'capital_movement';
export type Bundesland = 'BW' | 'BY' | 'BE' | 'BB' | 'HB' | 'HH' | 'HE' | 'MV' | 'NI' | 'NW' | 'RP' | 'SL' | 'SN' | 'ST' | 'SH' | 'TH';
export type WerbungskostenType = 'entfernungspauschale' | 'homeoffice' | 'arbeitsmittel' | 'fortbildung' | 'bewerbungskosten' | 'doppelte_haushaltsfuehrung' | 'reisekosten' | 'kontogebuehren' | 'fachliteratur' | 'berufskleidung' | 'gewerkschaft' | 'other';
export type SonderausgabenType = 'kirchensteuer' | 'spenden' | 'parteibeitraege' | 'berufsausbildung' | 'other';
export type VorsorgeType = 'altersvorsorge' | 'basis_kv' | 'pflegeversicherung' | 'sonstige_vorsorge';
export type SteuerminderungType = 'haushaltsnahe_beschaeftigung' | 'haushaltsnahe_dienstleistung' | 'handwerkerleistung' | 'behindertenpauschbetrag' | 'other';
export type CapitalMovementType = 'withdrawal' | 'deposit';
export type CapitalMovementSubType = 'cash_withdrawal' | 'private_purchase' | 'private_asset_use' | 'est_payment' | 'soli_payment' | 'kist_payment' | 'gewst_payment' | 'other_withdrawal' | 'cash_deposit' | 'private_expense_paid' | 'private_asset_transfer' | 'est_refund' | 'soli_refund' | 'kist_refund' | 'gewst_refund' | 'other_deposit';
export type WorkEntryStatus = 'pending' | 'approved' | 'rejected';
export type WorkEntryType = 'work' | 'assistance' | 'service' | 'consultation' | 'planning' | 'administration' | 'meeting' | 'travel' | 'maintenance' | 'training' | 'support' | 'other';
export type InvoiceDunningLevel = 'level1' | 'level2' | 'level3';
export type InvoiceDunningDelivery = 'manual' | 'email' | 'letter';
export type PaymentAccountType = 'bank' | 'cash' | 'paypal' | 'sumup';
export type PaymentDirection = 'in' | 'out';
export type PaymentSource = 'bank_import' | 'manual' | 'transfer' | 'paypal_api' | 'sumup_api';
export type PaymentAllocationTarget = 'invoice' | 'expense' | 'revenue' | 'capital_movement';
export type PaymentAllocationKind = 'payment' | 'refund' | 'fee' | 'writeoff' | 'discount';
export type IabStatus = 'active' | 'dissolved' | 'reversed' | 'warning';
export type BookkeepingAuditEntity = 'payment' | 'payment_allocation' | 'payment_account' | 'payment_import_profile' | 'period_lock' | 'invoice' | 'expense' | 'revenue' | 'asset' | 'sammelposten_pool' | 'depreciation_record' | 'iab' | 'capital_movement';
export type BookkeepingAuditAction = 'payment_create_manual' | 'payment_update_manual' | 'payment_import_csv' | 'payment_import_csv_preview' | 'payment_allocate' | 'payment_unallocate' | 'payment_reverse' | 'payment_allocation_reverse' | 'transfer_create' | 'transfer_reverse' | 'transfer_link' | 'transfer_unlink' | 'payment_import_profile_create' | 'payment_import_profile_update' | 'expense_create' | 'expense_update' | 'expense_confirm' | 'expense_cash_confirm' | 'expense_cash_confirm_revoke' | 'expense_delete' | 'revenue_create' | 'revenue_update' | 'revenue_confirm' | 'revenue_cash_confirm' | 'revenue_cash_confirm_revoke' | 'revenue_delete' | 'invoice_status_change' | 'invoice_delete' | 'invoice_credit_note_preview' | 'invoice_credit_note_issue' | 'invoice_email_sent' | 'asset_create' | 'asset_update' | 'asset_dispose' | 'asset_delete' | 'asset_method_change' | 'asset_sonderafa_apply' | 'sammelposten_pool_create' | 'sammelposten_pool_close' | 'depreciation_record_create' | 'depreciation_record_adjust' | 'iab_create' | 'iab_dissolve' | 'iab_reverse' | 'dunning_notice_issued' | 'dunning_settings_updated' | 'period_lock_set' | 'period_lock_clear' | 'capital_movement_create' | 'capital_movement_update' | 'capital_movement_confirm' | 'capital_movement_reverse' | 'capital_movement_delete' | 'capital_movement_cash_confirm' | 'capital_movement_cash_confirm_revoke';
export type PaymentProvider = 'sumup';
export type PaymentAccountBalanceSnapshotSource = 'manual' | 'csv_import' | 'paypal_api' | 'sumup_api';
export type PaymentAccountBalanceType = 'bank_statement' | 'manual_count' | 'api_reported';
export type TaxParamScope = 'global' | 'company';
export type TaxParamCategory = 'afa' | 'vat' | 'threshold' | 'building' | 'est' | 'soli' | 'gewst' | 'wk' | 'vorsorge' | 'fees';

// ============================================================================
// BASE APP TYPES (schema.ts)
// ============================================================================

export type NodeBillUser = {
  id: number;
  /** Wer den Nutzer fuehrt. "frontend": das Next-Frontend legt ihn ueber /internal/users an. */
  identityProvider: IdentityProvider;
  externalUserId: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  /** direct-auth fields (null bei identityProvider "frontend") */
  passwordHash: string | null;
  name: string | null;
  emailVerifiedAt: Date | null;
  /**
   * Letzter Sync-Zeitpunkt vom Frontend. Vergleich gegen sourceUpdatedAt
   * im /internal/users/sync schützt vor Out-of-order-Updates.
   */
  syncedAt: Date | null;
  /**
   * DSGVO-Loeschantrag: gesetzt, sobald der Nutzer die Loeschung bestaetigt hat. Frist,
   * Wiederherstellen und endgueltiges Loeschen gehoeren der App (in node-qr 30 Tage).
   */
  deletionRequestedAt: Date | null;
  /**
   * Optionaler Freitext-Grund — rein für interne Analytics ("warum kündigen
   * NodeBillUser?"). Nicht öffentlich, nicht in Audit-Exports.
   */
  deletionReason: string | null;
  /**
   * Systemkonten stehen fuer Dienste, die ohne menschliche Anmeldung handeln (gebunden ueber
   * oauth2_clients.systemUserId). Sie erscheinen wie normale Nutzer (Zustaendige, Autor),
   * bekommen aber keine Mails oder Benachrichtigungen und koennen sich nicht per Passwort anmelden.
   */
  isSystemAccount: boolean;
  /**
   * Gewaehlter Avatar (blobatar), Pruefung in routes/auth/users/user/avatar-style.ts. Im
   * williams-Modus spiegelt das Frontend seinen Wert hierher, im direct-Modus setzt ihn der
   * Nutzer selbst ueber PATCH /auth/me/profile. null = nie gewaehlt.
   */
  avatarStyle: AvatarStyle | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type UserInsert = {
  /** Wer den Nutzer fuehrt. "frontend": das Next-Frontend legt ihn ueber /internal/users an. */
  identityProvider?: IdentityProvider;
  externalUserId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** direct-auth fields (null bei identityProvider "frontend") */
  passwordHash?: string | null;
  name?: string | null;
  emailVerifiedAt?: Date | null;
  /**
   * Letzter Sync-Zeitpunkt vom Frontend. Vergleich gegen sourceUpdatedAt
   * im /internal/users/sync schützt vor Out-of-order-Updates.
   */
  syncedAt?: Date | null;
  /**
   * DSGVO-Loeschantrag: gesetzt, sobald der Nutzer die Loeschung bestaetigt hat. Frist,
   * Wiederherstellen und endgueltiges Loeschen gehoeren der App (in node-qr 30 Tage).
   */
  deletionRequestedAt?: Date | null;
  /**
   * Optionaler Freitext-Grund — rein für interne Analytics ("warum kündigen
   * NodeBillUser?"). Nicht öffentlich, nicht in Audit-Exports.
   */
  deletionReason?: string | null;
  /**
   * Systemkonten stehen fuer Dienste, die ohne menschliche Anmeldung handeln (gebunden ueber
   * oauth2_clients.systemUserId). Sie erscheinen wie normale Nutzer (Zustaendige, Autor),
   * bekommen aber keine Mails oder Benachrichtigungen und koennen sich nicht per Passwort anmelden.
   */
  isSystemAccount?: boolean;
  /**
   * Gewaehlter Avatar (blobatar), Pruefung in routes/auth/users/user/avatar-style.ts. Im
   * williams-Modus spiegelt das Frontend seinen Wert hierher, im direct-Modus setzt ihn der
   * Nutzer selbst ueber PATCH /auth/me/profile. null = nie gewaehlt.
   */
  avatarStyle?: AvatarStyle | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type NodeBillUserId = number;

export type UserFrontendIdentity = {
  id: number;
  frontendAppId: string;
  externalUserId: string;
  userId: number;
  createdAt: Date;
};

export type UserSyncAuditRow = {
  id: number;
  externalUserId: string;
  action: UserSyncAction;
  userId: number | null;
  idempotencyKey: string | null;
  details: any;
  requestIp: string | null;
  occurredAt: Date;
};

export type UserSyncAuditInsert = {
  externalUserId: string;
  action: UserSyncAction;
  userId?: number | null;
  idempotencyKey?: string | null;
  details?: any;
  requestIp?: string | null;
  occurredAt?: Date;
};

export type AuthRefreshToken = {
  id: number;
  userId: number;
  tokenHash: string;
  expiresAt: Date;
  revokedAt: Date | null;
  replacedByTokenHash: string | null;
  userAgent: string | null;
  ipAddress: string | null;
  createdAt: Date;
};

export type AuthRefreshTokenInsert = {
  userId: number;
  tokenHash: string;
  expiresAt: Date;
  revokedAt?: Date | null;
  replacedByTokenHash?: string | null;
  userAgent?: string | null;
  ipAddress?: string | null;
  createdAt: Date;
};

export type AuthPushToken = {
  id: number;
  userId: number;
  token: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthPushTokenInsert = {
  userId: number;
  token: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthEmailVerificationToken = {
  id: number;
  userId: number;
  tokenHash: string;
  email: string;
  expiresAt: Date;
  consumedAt: Date | null;
  createdAt: Date;
};

export type AuthEmailVerificationTokenInsert = {
  userId: number;
  tokenHash: string;
  email: string;
  expiresAt: Date;
  consumedAt?: Date | null;
  createdAt: Date;
};

export type AvatarShape = | "round" | "organic" | "boxy" | "nub" | "cloud" | "sun" | "capsule" | "triangle" | "hexagon" | "droplet";

export type AvatarExpression = | "idle" | "happy" | "sad" | "mad" | "surprised" | "wink" | "sleepy" | "smug" | "unsure" | "scared"
  | "love" | "shy" | "sick" | "thinking";

export type AvatarBackground = "none" | "squircle" | "circle";

export type AvatarStyle = {
  seed?: string;
  hue?: number;
  shape?: AvatarShape;
  expression?: AvatarExpression;
  background?: AvatarBackground;
};

export type DirectAuthUser = {
  id: number;
  email: string | null;
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  avatarStyle: AvatarStyle | null;
  emailVerified: boolean;
  emailVerifiedAt: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type DirectAuthRole = {
  id: number;
  name: string;
};

export type DirectAuthMe = DirectAuthUser & {
  isAdmin: boolean;
  roles: DirectAuthRole[];
};

export type DirectAuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type DirectAuthResponse = {
  user: DirectAuthUser;
  accessToken: string;
  refreshToken: string;
};

export type DirectAuthVerifyEmailResponse = {
  ok: true;
  user: DirectAuthUser;
};

export type DirectAuthRequestVerificationResponse = {
  ok: true;
  alreadyVerified?: boolean;
};

export type NodeBillUserActivity = {
  userId: number;
  /** Date of activity (YYYY-MM-DD) */
  activityDate: string;
  /** First request of the day */
  firstActivityAt: Date;
  /** Last request of the day (updated continuously) */
  lastActivityAt: Date;
  /** Total requests this day */
  requestCount?: number;
  /** Array of request details (max 50, FIFO) */
  requests?: any;
  /** When this daily record was created */
  createdAt: Date;
  /** When this daily record was last updated */
  updatedAt: Date;
};

export type NodeBillUserActivityId = number;

export type AppSettings = {
  key: string;
  value: string;
  /** Comma-separated list of allowed values (for enum-like settings) */
  allowedValues?: string | null;
  type: AppSettingsType;
  description?: string | null;
  createdAt: Date;
};

export type AppSettingsInsert = {
  key: string;
  value: string;
  /** Comma-separated list of allowed values (for enum-like settings) */
  allowedValues?: string | null;
  type: AppSettingsType;
  description?: string | null;
  createdAt: Date;
};

export type AppSettingsId = number;

export type AppLog = {
  id: number;
  level: AppLogLevel;
  message: string;
  context: any;
  createdAt: Date;
};

export type AppLogId = number;

export type Webhook = {
  id: number;
  /** z. B. "Stripe", "PayPal", "Printful" */
  provider: string;
  eventType: string;
  externalId: string;
  /** Raw payload as received from the provider */
  payload: any;
  processed: boolean;
  status: WebhookStatus;
  processMessage: string | null;
  originUrl: string | null;
  createdAt: Date;
  processedAt: Date | null;
  /** NodeBillUser-Agent Header */
  userAgent: string | null;
  /** Webhook signature für Verifizierung */
  signature: string | null;
  /** Anzahl der Retry-Versuche */
  retryCount: number;
  /** Letzter Retry-Versuch */
  lastRetryAt: Date | null;
};

export type WebhookId = number;

export type Permission = {
  id: number;
  name: string;
  description: string | null;
};

export type PermissionId = number;

export type Role = {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
  /** Kann diese Rolle verkauft werden, oder ist die nur durch admin steuerbar? */
  isSellable: boolean;
};

export type RoleId = number;

export type RolePermission = {
  id: number;
  roleId: number;
  permissionId: number;
  assignedBy: number;
  revokedBy: number | null;
  createdAt: Date;
  validTo: Date | null;
};

export type RolePermissionId = number;

export type RoleAssignment = {
  id: number;
  userId: number;
  status: RoleAssignmentStatus;
  roleId: number;
  validFrom: Date;
  validTo: Date | null;
  assignedBy: number;
  revokedBy: number | null;
  createdAt: Date;
};

export type RoleAssignmentId = number;

export type EntitlementSyncLink = {
  id: number;
  linkKey: string;
  externalUserId: string;
  externalIdentifier: string;
  entitlementType: EntitlementSyncType;
  userId: number | null;
  roleId: number | null;
  roleAssignmentId: number | null;
  shopSyncVersion: string | null;
  shopAssignmentId: string | null;
  shopEntitlementId: string | null;
  shopCustomerId: string | null;
  shopOrderId: string | null;
  shopOrderItemId: string | null;
  sourceAppId: string | null;
  sourceTargetAppId: string | null;
  sourceClientId: string | null;
  lastOperation: EntitlementSyncOperation | null;
  isActive: boolean;
  validFrom: Date | null;
  expiresAt: Date | null;
  revokedAt: Date | null;
  context: any;
  createdAt: Date;
  updatedAt: Date | null;
  lastSeenAt: Date;
  /** Spalten der App (src/db/individual/base-table-columns.ts). */
  accountId: number | null;
};

export type EntitlementSyncLinkId = number;

export type UsageOverageEvent = {
  id: number;
  externalEventId: string;
  sourceFingerprint: string;
  externalUserId: string;
  shopAssignmentId: string | null;
  externalIdentifier: string;
  entitlementType: EntitlementSyncType;
  metricKey: string;
  unit: string;
  periodStart: Date;
  periodEnd: Date;
  occurredAt: Date;
  includedQuantity: string;
  usedQuantity: string;
  overageQuantity: string;
  overageAmount: string;
  currency: string;
  note: string | null;
  pricingPayload: any;
  createdAt: Date;
  updatedAt: Date | null;
  /** Spalten der App (src/db/individual/base-table-columns.ts). */
  reportedAt: Date | null;
};

export type UsageOverageEventId = number;

export type ShopLimitConfig = {
  id: number;
  externalUserId: string;
  metricKey: string;
  includedQuantity: string;
  limitBehavior: string;
  payAsYouGoActive: boolean;
  maxOverageQuantity: string | null;
  overagePricePerUnit: string | null;
  lastSyncedAt: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type ShopLimitConfigInsert = {
  externalUserId: string;
  metricKey: string;
  includedQuantity?: string;
  limitBehavior?: string;
  payAsYouGoActive?: boolean;
  maxOverageQuantity?: string | null;
  overagePricePerUnit?: string | null;
  lastSyncedAt?: Date | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type ShopCreditBalance = {
  id: number;
  externalUserId: string;
  metricKey: string;
  totalRemaining: string;
  localUsed: string;
  lastShopSync: Date | null;
  pools: any;
  createdAt: Date;
  updatedAt: Date | null;
};

export type ShopCreditBalanceInsert = {
  externalUserId: string;
  metricKey: string;
  totalRemaining?: string;
  localUsed?: string;
  lastShopSync?: Date | null;
  pools?: any;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type CreditConsumptionQueueEntry = {
  id: number;
  externalUserId: string;
  metricKey: string;
  amount: string;
  idempotencyKey: string;
  status: CreditConsumptionStatus;
  attempts: number;
  shopResponse: any | null;
  lastAttemptAt: Date | null;
  createdAt: Date;
};

export type CreditConsumptionQueueInsert = {
  externalUserId: string;
  metricKey: string;
  amount: string;
  idempotencyKey: string;
  status?: CreditConsumptionStatus;
  attempts?: number;
  shopResponse?: any | null;
  lastAttemptAt?: Date | null;
  createdAt: Date;
};

export type WorkflowQueue = {
  /** String format: WF_<timestamp>_<hash> */
  id: string;
  workflowType: string;
  payload: any;
  status: WorkflowQueueStatus;
  attemptCount: number;
  lastAttemptAt: Date | null;
  /** Array of tasks with expected duration */
  tasks: any;
  /** Current task being processed */
  currentTask: number;
  /** Array of task results/details (logs go here, so we can see everything..) */
  taskResults: any;
  createdAt: Date;
  scheduledAt: Date | null;
  updatedAt: Date | null;
  /** Higher number = higher priority */
  priority: number;
  userId: number | null;
  createdBy: WorkflowCreatedBy;
  /**
   * Abort & Cleanup System
   * NodeBillUser requested abort
   */
  abortRequested: boolean;
  /** Cleanup function identifier */
  cleanupHandler: string | null;
  /** Automatic timeout timestamp */
  timeoutAt: Date | null;
};

export type WorkflowQueueId = string;

export type QuickStats = {
  lastActivity: string | null;
  requestsToday: number;
  requestsThisWeek: number;
  requestsThisMonth: number;
};

export type UserWithStats = {
  user: {
    id: number;
    externalUserId: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date;
    updatedAt: Date | null;
  };
  activityStats: QuickStats | null;
};

export type UserWithActivityOverview = {
  user: {
    id: number;
    externalUserId: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date;
    updatedAt: Date | null;
  };
  activityOverview: any;
};

export type PaginatedUsersWithActivityOverview = {
  data: UserWithActivityOverview[];
  pagination: {
    page: number;
    resultsPerPage: number;
    totalPages: number;
    totalResults: number;
    availableStatusCodes: number[];
  };
};


// ============================================================================
// APP PERMISSIONS
// ============================================================================

export enum NodeBillAppPermissions {
  UsersManage = "users_manage",
  UsersView = "users_view",
  SettingsEdit = "settings_edit",
  PermissionsManage = "permissions_manage",
  PermissionsHistoryView = "permissions_history_view",
  RolesManage = "roles_manage",
  RolesHistoryView = "roles_history_view",
  WebhookView = "webhook_view",
  WebhookDelete = "webhook_delete",
  LogView = "log_view",
  LogDelete = "log_delete"
}

export type NodeBillAppPermissionValue = (typeof NodeBillAppPermissions)[keyof typeof NodeBillAppPermissions];

// ============================================================================
// APP SETTINGS
// ============================================================================

// No settings defined



// ============================================================================
// SHARED UTILITY TYPES
// ============================================================================

export type Languages = "DE" | "EN";

export type Prettify<T> = {
  [K in keyof T]: T[K];
};

export type PaginatedResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

// ============================================================================
// FEATURE TYPES (individual schema)
// ============================================================================

export type IapPayoutImport = {
  id: number;
  managingCompanyId: number;
  platform: IapPayoutPlatform;
  /** Reporting-Periode (in der Regel ein Kalendermonat) */
  periodStart: string;
  periodEnd: string;
  /** Beträge (alle als String numeric — Drizzle-Konvention) */
  payoutCurrency: string;
  /** Brutto-Verkäufe inkl. Endkunden-USt (informativ) */
  grossSalesGross: string | null;
  /** Apple/Google Service-Fee 15–30% (informativ) */
  providerFees: string | null;
  /** Was tatsächlich ausgezahlt wird → Erlös */
  netPayoutAmount: string;
  /** Refunds in der Periode (bereits in netto verrechnet) */
  refundsAmount: string | null;
  /** Endkunden-USt, die Apple/Google selbst abgeführt haben */
  taxesWithheld: string | null;
  /**
   * Quelle des Reports — RevenueCat ist Default, CSV-Upload als Fallback
   * "revenuecat_api" | "revenuecat_csv" | "apple_financial_report" | "google_earnings_report"
   */
  reportSource: string;
  /** Optional: Original-CSV/PDF im Document-Store */
  reportFileId: number | null;
  /** Original-Payload für spätere Forensik / Steuerprüfung */
  rawReportSnapshot: any | null;
  /** Verlinkung zur Hauptbuch-Buchung */
  bookkeepingRevenueId: number | null;
  /**
   * Idempotency
   * z.B. "rc_payout_2026-04_apple"
   */
  externalRef: string;
  /** Audit */
  importedAt: Date;
  /** null = Cron-Job */
  importedByUserId: number | null;
  createdAt: Date;
};

export type IapPayoutImportInsert = {
  managingCompanyId: number;
  platform: IapPayoutPlatform;
  /** Reporting-Periode (in der Regel ein Kalendermonat) */
  periodStart: string;
  periodEnd: string;
  /** Beträge (alle als String numeric — Drizzle-Konvention) */
  payoutCurrency: string;
  /** Brutto-Verkäufe inkl. Endkunden-USt (informativ) */
  grossSalesGross?: string | null;
  /** Apple/Google Service-Fee 15–30% (informativ) */
  providerFees?: string | null;
  /** Was tatsächlich ausgezahlt wird → Erlös */
  netPayoutAmount: string;
  /** Refunds in der Periode (bereits in netto verrechnet) */
  refundsAmount?: string | null;
  /** Endkunden-USt, die Apple/Google selbst abgeführt haben */
  taxesWithheld?: string | null;
  /**
   * Quelle des Reports — RevenueCat ist Default, CSV-Upload als Fallback
   * "revenuecat_api" | "revenuecat_csv" | "apple_financial_report" | "google_earnings_report"
   */
  reportSource: string;
  /** Optional: Original-CSV/PDF im Document-Store */
  reportFileId?: number | null;
  /** Original-Payload für spätere Forensik / Steuerprüfung */
  rawReportSnapshot?: any | null;
  /** Verlinkung zur Hauptbuch-Buchung */
  bookkeepingRevenueId?: number | null;
  /**
   * Idempotency
   * z.B. "rc_payout_2026-04_apple"
   */
  externalRef: string;
  /** Audit */
  importedAt?: Date;
  /** null = Cron-Job */
  importedByUserId?: number | null;
  createdAt?: Date;
};

export type CustomerCompany = {
  id: number;
  /** wenn ein kunde freelancer ist, hat er keine company, das wollen wir hierdurch darstellen */
  isFreelancer: boolean;
  name: string;
  street: string | null;
  streetNr: string | null;
  zip: string | null;
  city: string | null;
  country: string | null;
  email: string;
  phone: string | null;
  ustId: string | null;
  status: CompanyStatus;
  createdAt: Date;
  updatedAt: Date | null;
  managingCompanyId: number;
  costCenterId: number | null;
  defaultHourlyRate: string | null;
};

export type CustomerCompanyInsert = {
  /** wenn ein kunde freelancer ist, hat er keine company, das wollen wir hierdurch darstellen */
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
  status?: CompanyStatus;
  createdAt: Date;
  updatedAt?: Date | null;
  managingCompanyId: number;
  costCenterId?: number | null;
  defaultHourlyRate?: string | null;
};

export type CustomerCompanyId = number;

export type CompanyEmployee = {
  id: number;
  firstName: string | null;
  lastName: string | null;
  birthDate: Date | null;
  gender: Gender | null;
  street: string | null;
  streetNr: string | null;
  zip: string | null;
  city: string | null;
  country: string | null;
  email: string;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  /** id of the user in the target app */
  externalUserId: string | null;
};

export type CompanyEmployeeInsert = {
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: Date | null;
  gender?: Gender | null;
  street?: string | null;
  streetNr?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: string | null;
  email: string;
  phone?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
  /** id of the user in the target app */
  externalUserId?: string | null;
};

export type CompanyEmployeeId = number;

export type CompanyEmployeeAssignment = {
  id: number;
  companyEmployeeId: number;
  companyId: number;
  /** optional */
  companyRole: string | null;
  status: CompanyEmployeeStatus;
  /**
   * active = aktuell beschäftigt in dieser Company
   * inactive = pausiert/kein Zugriff, aber nicht "ausgetreten"
   * terminated = ausgetreten
   */
  validFrom: Date;
  /** null = aktuell */
  validTo: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
  assignedBy: number | null;
};

export type CompanyEmployeeAssignmentInsert = {
  companyEmployeeId: number;
  companyId: number;
  /** optional */
  companyRole?: string | null;
  status?: CompanyEmployeeStatus;
  /**
   * active = aktuell beschäftigt in dieser Company
   * inactive = pausiert/kein Zugriff, aber nicht "ausgetreten"
   * terminated = ausgetreten
   */
  validFrom?: Date;
  /** null = aktuell */
  validTo?: Date | null;
  createdAt?: Date;
  updatedAt?: Date | null;
  assignedBy?: number | null;
};

export type CompanyEmployeeAssignmentId = number;

export type Document = {
  id: number;
  /** firma der das dokument gehört */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
  fileName: string;
  fileType: string;
  fileSizeBytes: number;
  /** path in the s3 bucket */
  s3Key: string;
  /** if not set, system created */
  uploadedBy: number | null;
  /** if true, document cannot be deleted or modified (for compliance) */
  isLocked: boolean;
};

export type DocumentInsert = {
  /** firma der das dokument gehört */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId?: number | null;
  createdAt: Date;
  updatedAt?: Date | null;
  fileName: string;
  fileType: string;
  fileSizeBytes: number;
  /** path in the s3 bucket */
  s3Key: string;
  /** if not set, system created */
  uploadedBy?: number | null;
  /** if true, document cannot be deleted or modified (for compliance) */
  isLocked?: boolean;
};

export type DocumentId = number;

export type DocumentAssignment = {
  id: number;
  documentId: number;
  ownerType: DocumentOwnerType;
  /** nullable für "internal" */
  ownerId: number | null;
  assignedBy: number | null;
  createdAt: Date;
};

export type DocumentAssignmentInsert = {
  documentId: number;
  ownerType: DocumentOwnerType;
  /** nullable für "internal" */
  ownerId?: number | null;
  assignedBy?: number | null;
  createdAt: Date;
};

export type DocumentAssignmentId = number;

export type Invoice = {
  id: number;
  invoiceNumber: string;
  companyId: number | null;
  /** Enterprise corrections (Gutschrift/Storno): never mutate originals; create a correction document referencing the original. */
  documentType: InvoiceDocumentType;
  correctsInvoiceId: number | null;
  correctionReason: string | null;
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId: number | null;
  /** Rechnungsdetails */
  invoiceDate: Date;
  dueDate: Date;
  totalAmount: string;
  currency: string;
  /** PDF & Status */
  s3Key: string | null;
  status: InvoiceStatus;
  /**
   * Public access token for secure PDF sharing (multi-tenancy security)
   * Generated on invoice creation, allows access to PDF without authentication
   */
  publicShareToken: string | null;
  /**
   * E-Rechnung / ZUGFeRD
   * 'zugferd' | null
   */
  eInvoiceFormat: string | null;
  /** 'BASIC' | 'COMFORT' |CompanyCostCenter 'EXTENDED' */
  zugferdProfile: string | null;
  /** Optional: Zusatzfelder */
  notes: string | null;
  taxRate: string | null;
  taxAmount: string | null;
  netAmount: string | null;
  /**
   * VAT Treatment Snapshot (immutable after issue)
   * Snapshot of tax treatment
   */
  vatTreatment: VatTreatment | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatLegalRef: string | null;
  /** NodeBillUser-facing note (e.g., "Gemäß §19 UStG wird keine Umsatzsteuer berechnet") */
  vatNote: string | null;
  /** { legalRef?, description?, vatRate?, vatAmountOverride? } */
  vatCustom: any | null;
  /**
   * Dates for VAT calculation
   * Leistungsdatum (when service was performed)
   */
  performedAt: Date | null;
  /**
   * invoiceDate = Rechnungsdatum
   * Payment tracking (enterprise): we store *how* the invoice became paid.
   */
  paidAt: Date | null;
  /** "manual" | "payments" | "external" | null */
  paidSource: string | null;
  /** nullable; for audit/tracing (no FK to avoid ordering/cycles) */
  paidByPaymentId: number | null;
  /** z.B. "card", "sepa_debit", "paypal", "bank_transfer" */
  paymentMethod: string | null;
  /** z.B. "Stripe", "PayPal" */
  paymentProvider: string | null;
  /**
   * Optional: Kundendaten (für Rechnungen ohne Company)
   * Wird verwendet wenn companyId = null (z.B. Privatkunden, Ad-hoc Verkäufe)
   * Pflicht für Rechnung wenn companyId = null
   */
  customerName: string | null;
  customerStreet: string | null;
  customerStreetNr: string | null;
  customerZip: string | null;
  customerCity: string | null;
  /** Default: "Deutschland" */
  customerCountry: string | null;
  customerEmail: string | null;
  customerPhone: string | null;
  /** USt-IdNr für B2B (optional) */
  customerUstId: string | null;
  language: string;
  /** Bankverbindung: Welches Konto soll auf der Rechnung stehen? */
  paymentAccountId: number | null;
  /** Bank-Fallback bei PayPal: Welches Bankkonto erscheint als Überweisungs-Alternative? */
  bankFallbackAccountId: number | null;
  /**
   * Zahlungsbedingungen
   * z.B. 30 fuer "Netto 30 Tage"
   */
  paymentTermsDays: number | null;
  /** Freitext: "Zahlbar innerhalb von 30 Tagen" */
  paymentTermsText: string | null;
  /** Skonto z.B. "2.0" fuer 2% */
  earlyPaymentDiscountPercent: string | null;
  /** Skonto-Frist z.B. 10 Tage */
  earlyPaymentDiscountDays: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type InvoiceInsert = {
  invoiceNumber: string;
  companyId?: number | null;
  /** Enterprise corrections (Gutschrift/Storno): never mutate originals; create a correction document referencing the original. */
  documentType?: InvoiceDocumentType;
  correctsInvoiceId?: number | null;
  correctionReason?: string | null;
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId?: number | null;
  /** Rechnungsdetails */
  invoiceDate: Date;
  dueDate: Date;
  totalAmount: string;
  currency?: string;
  /** PDF & Status */
  s3Key?: string | null;
  status?: InvoiceStatus;
  /**
   * Public access token for secure PDF sharing (multi-tenancy security)
   * Generated on invoice creation, allows access to PDF without authentication
   */
  publicShareToken?: string | null;
  /**
   * E-Rechnung / ZUGFeRD
   * 'zugferd' | null
   */
  eInvoiceFormat?: string | null;
  /** 'BASIC' | 'COMFORT' |CompanyCostCenter 'EXTENDED' */
  zugferdProfile?: string | null;
  /** Optional: Zusatzfelder */
  notes?: string | null;
  taxRate?: string | null;
  taxAmount?: string | null;
  netAmount?: string | null;
  /**
   * VAT Treatment Snapshot (immutable after issue)
   * Snapshot of tax treatment
   */
  vatTreatment?: VatTreatment | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatLegalRef?: string | null;
  /** NodeBillUser-facing note (e.g., "Gemäß §19 UStG wird keine Umsatzsteuer berechnet") */
  vatNote?: string | null;
  /** { legalRef?, description?, vatRate?, vatAmountOverride? } */
  vatCustom?: any | null;
  /**
   * Dates for VAT calculation
   * Leistungsdatum (when service was performed)
   */
  performedAt?: Date | null;
  /**
   * invoiceDate = Rechnungsdatum
   * Payment tracking (enterprise): we store *how* the invoice became paid.
   */
  paidAt?: Date | null;
  /** "manual" | "payments" | "external" | null */
  paidSource?: string | null;
  /** nullable; for audit/tracing (no FK to avoid ordering/cycles) */
  paidByPaymentId?: number | null;
  /** z.B. "card", "sepa_debit", "paypal", "bank_transfer" */
  paymentMethod?: string | null;
  /** z.B. "Stripe", "PayPal" */
  paymentProvider?: string | null;
  /**
   * Optional: Kundendaten (für Rechnungen ohne Company)
   * Wird verwendet wenn companyId = null (z.B. Privatkunden, Ad-hoc Verkäufe)
   * Pflicht für Rechnung wenn companyId = null
   */
  customerName?: string | null;
  customerStreet?: string | null;
  customerStreetNr?: string | null;
  customerZip?: string | null;
  customerCity?: string | null;
  /** Default: "Deutschland" */
  customerCountry?: string | null;
  customerEmail?: string | null;
  customerPhone?: string | null;
  /** USt-IdNr für B2B (optional) */
  customerUstId?: string | null;
  language?: string;
  /** Bankverbindung: Welches Konto soll auf der Rechnung stehen? */
  paymentAccountId?: number | null;
  /** Bank-Fallback bei PayPal: Welches Bankkonto erscheint als Überweisungs-Alternative? */
  bankFallbackAccountId?: number | null;
  /**
   * Zahlungsbedingungen
   * z.B. 30 fuer "Netto 30 Tage"
   */
  paymentTermsDays?: number | null;
  /** Freitext: "Zahlbar innerhalb von 30 Tagen" */
  paymentTermsText?: string | null;
  /** Skonto z.B. "2.0" fuer 2% */
  earlyPaymentDiscountPercent?: string | null;
  /** Skonto-Frist z.B. 10 Tage */
  earlyPaymentDiscountDays?: number | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type InvoiceId = number;

export type InvoiceLineItem = {
  id: number;
  invoiceId: number;
  /**
   * Item Details (denormalized for invoice immutability)
   * 'subscription', 'one_time', 'usage', etc.
   */
  itemType: string;
  title: string;
  description: string | null;
  /**
   * Pricing
   * Netto-Preis pro Einheit
   */
  unitPriceNet: string;
  quantity: string;
  /** unitPriceNet * quantity */
  lineNetAmount: string;
  /** lineNetAmount * (1 + taxRate) */
  lineGrossAmount: string;
  /** z.B. 0.19 für 19% */
  taxRate: string;
  /** lineNetAmount * taxRate */
  lineTaxAmount: string;
  /** Sort order */
  sortOrder: number;
  createdAt: Date;
};

export type InvoiceLineItemInsert = {
  invoiceId: number;
  /**
   * Item Details (denormalized for invoice immutability)
   * 'subscription', 'one_time', 'usage', etc.
   */
  itemType: string;
  title: string;
  description?: string | null;
  /**
   * Pricing
   * Netto-Preis pro Einheit
   */
  unitPriceNet: string;
  quantity?: string;
  /** unitPriceNet * quantity */
  lineNetAmount: string;
  /** lineNetAmount * (1 + taxRate) */
  lineGrossAmount: string;
  /** z.B. 0.19 für 19% */
  taxRate: string;
  /** lineNetAmount * taxRate */
  lineTaxAmount: string;
  /** Sort order */
  sortOrder?: number;
  createdAt?: Date;
};

export type InvoiceLineItemId = number;

export type InvoiceItemTypeConfig = {
  id: number;
  managingCompanyId: number;
  /** unique key, e.g. "montage" */
  value: string;
  /** display name, e.g. "Montage / Einbau" */
  label: string;
  defaultProductType: string;
  sortOrder: number;
  isArchived: boolean;
  createdAt: Date;
  createdBy: number | null;
};

export type InvoiceItemTypeConfigInsert = {
  managingCompanyId: number;
  /** unique key, e.g. "montage" */
  value: string;
  /** display name, e.g. "Montage / Einbau" */
  label: string;
  defaultProductType?: string;
  sortOrder?: number;
  isArchived?: boolean;
  createdAt?: Date;
  createdBy?: number | null;
};

export type InvoiceTemplate = {
  id: number;
  managingCompanyId: number;
  /** Template identity */
  name: string;
  description: string | null;
  /** Optional: bind to a specific customer (null = generic template) */
  companyId: number | null;
  /** Invoice defaults */
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  /** standard | reduced | custom */
  productType: string;
  /** only for productType="custom" */
  customVatRate: string | null;
  /** Payment terms */
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  /** Content */
  notes: string | null;
  lineItems: any;
  /**
   * JSONB Array: [{ title, description, unitPriceNet, defaultQuantity, itemType, productType, taxRate?, sortOrder }]
   * Lifecycle
   */
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: Date | null;
  usageCount: number;
  /** Audit */
  createdAt: Date;
  createdBy: number | null;
  updatedAt: Date | null;
  updatedBy: number | null;
};

export type InvoiceTemplateInsert = {
  managingCompanyId: number;
  /** Template identity */
  name: string;
  description?: string | null;
  /** Optional: bind to a specific customer (null = generic template) */
  companyId?: number | null;
  /** Invoice defaults */
  costCenterId?: number | null;
  paymentAccountId?: number | null;
  currency?: string;
  language?: string;
  /** standard | reduced | custom */
  productType?: string;
  /** only for productType="custom" */
  customVatRate?: string | null;
  /** Payment terms */
  paymentTermsDays?: number | null;
  paymentTermsText?: string | null;
  earlyPaymentDiscountPercent?: string | null;
  earlyPaymentDiscountDays?: number | null;
  /** Content */
  notes?: string | null;
  lineItems?: any;
  /**
   * JSONB Array: [{ title, description, unitPriceNet, defaultQuantity, itemType, productType, taxRate?, sortOrder }]
   * Lifecycle
   */
  isArchived?: boolean;
  sortOrder?: number;
  lastUsedAt?: Date | null;
  usageCount?: number;
  /** Audit */
  createdAt?: Date;
  createdBy?: number | null;
  updatedAt?: Date | null;
  updatedBy?: number | null;
};

export type InvoiceTemplateId = number;

export type InvoiceQuote = {
  id: number;
  managingCompanyId: number;
  invoiceId: number | null;
  quoteHash: string;
  quoteVersion: string;
  source: string;
  /** preview | create */
  stage: string;
  /** active | consumed */
  status: string;
  quotePayload: any;
  warnings: any;
  createdBy: number | null;
  createdAt: Date;
  consumedAt: Date | null;
};

export type InvoiceQuoteInsert = {
  managingCompanyId: number;
  invoiceId?: number | null;
  quoteHash: string;
  quoteVersion: string;
  source?: string;
  /** preview | create */
  stage?: string;
  /** active | consumed */
  status?: string;
  quotePayload: any;
  warnings?: any;
  createdBy?: number | null;
  createdAt?: Date;
  consumedAt?: Date | null;
};

export type InvoiceQuoteId = number;

export type CurrencyRate = {
  id: number;
  /**
   * Where it came from (for traceability + fallback order)
   * e.g. "ecb_xml" | "frankfurter" | "openexchangerates"
   */
  provider: string;
  fromCurrency: string;
  toCurrency: string;
  /** Stichtag der Rate (z.B. EZB/Frankfurter "date"). Für Renewals extrem wichtig. */
  asOfDate: string;
  /**
   * Use explicit precision/scale for FX rates (safe for USD/EUR/GBP)
   * 20 total digits, 10 decimals is usually plenty.
   */
  rate: string;
  fetchedAt: Date;
};

export type CurrencyRateInsert = {
  /**
   * Where it came from (for traceability + fallback order)
   * e.g. "ecb_xml" | "frankfurter" | "openexchangerates"
   */
  provider: string;
  fromCurrency: string;
  toCurrency: string;
  /** Stichtag der Rate (z.B. EZB/Frankfurter "date"). Für Renewals extrem wichtig. */
  asOfDate: string;
  /**
   * Use explicit precision/scale for FX rates (safe for USD/EUR/GBP)
   * 20 total digits, 10 decimals is usually plenty.
   */
  rate: string;
  fetchedAt: Date;
};

export type CurrencyRateId = number;

export type ManagingCompany = {
  id: number;
  companyName: string;
  /** Rechtsform: Nur unterstützte deutsche Rechtsformen! */
  companyLegalForm: LegalForm | null;
  companyManagingDirector: string | null;
  companyStreet: string | null;
  companyStreetNr: string | null;
  companyZip: string | null;
  companyCity: string | null;
  /** important for tax calculation and laws.. (urrently only germany supported, but we plan to expand later) */
  companyCountry: string | null;
  companyEmail: string | null;
  companyPhone: string | null;
  companyWebsite: string | null;
  companyCommercialRegister: string | null;
  companyRegistrationCourt: string | null;
  companyTaxId: string | null;
  companyVatId: string | null;
  /**
   * Default-Zahlungsbedingungen (werden bei Rechnungserstellung uebernommen wenn nichts explizit angegeben)
   * FK zu paymentAccounts (kein ref wegen zirkulaerer Abhaengigkeit)
   */
  defaultPaymentAccountId: number | null;
  defaultPaymentTermsDays: number | null;
  defaultPaymentTermsText: string | null;
  defaultEarlyPaymentDiscountPercent: string | null;
  defaultEarlyPaymentDiscountDays: number | null;
  /** Configuration */
  zugferdEnable: boolean;
  /** ZUGFeRD Profile (official EN 16931 profiles) */
  zugferdDefaultProfile: ZugferdProfile;
  /**
   * Currency & Bookkeeping
   * Base currency for bookkeeping (only supported currencies!)
   */
  baseCurrency: Currency;
  /** EÜR vs. Bilanzierung (§ 4 Abs. 3 EStG vs. § 5 EStG) */
  bookkeepingBasis: BookkeepingBasis;
  /**
   * logos
   * s3 key for white mode logo (for invoices on light background, standart vor invoices, exepts the user select something else)
   */
  whiteLogoKey: string | null;
  /** s3 key for dark mode logo (for invoices on dark background) */
  darkLogoKey: string | null;
  /** default logo mode for invoices (white, dark) */
  invoiceLogoMode: string;
  /** default invoice layout variant for this company */
  invoiceLayoutVariant: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type ManagingCompanyInsert = {
  companyName: string;
  /** Rechtsform: Nur unterstützte deutsche Rechtsformen! */
  companyLegalForm?: LegalForm | null;
  companyManagingDirector?: string | null;
  companyStreet?: string | null;
  companyStreetNr?: string | null;
  companyZip?: string | null;
  companyCity?: string | null;
  /** important for tax calculation and laws.. (urrently only germany supported, but we plan to expand later) */
  companyCountry?: string | null;
  companyEmail?: string | null;
  companyPhone?: string | null;
  companyWebsite?: string | null;
  companyCommercialRegister?: string | null;
  companyRegistrationCourt?: string | null;
  companyTaxId?: string | null;
  companyVatId?: string | null;
  /**
   * Default-Zahlungsbedingungen (werden bei Rechnungserstellung uebernommen wenn nichts explizit angegeben)
   * FK zu paymentAccounts (kein ref wegen zirkulaerer Abhaengigkeit)
   */
  defaultPaymentAccountId?: number | null;
  defaultPaymentTermsDays?: number | null;
  defaultPaymentTermsText?: string | null;
  defaultEarlyPaymentDiscountPercent?: string | null;
  defaultEarlyPaymentDiscountDays?: number | null;
  /** Configuration */
  zugferdEnable?: boolean;
  /** ZUGFeRD Profile (official EN 16931 profiles) */
  zugferdDefaultProfile?: ZugferdProfile;
  /**
   * Currency & Bookkeeping
   * Base currency for bookkeeping (only supported currencies!)
   */
  baseCurrency?: Currency;
  /** EÜR vs. Bilanzierung (§ 4 Abs. 3 EStG vs. § 5 EStG) */
  bookkeepingBasis?: BookkeepingBasis;
  /**
   * logos
   * s3 key for white mode logo (for invoices on light background, standart vor invoices, exepts the user select something else)
   */
  whiteLogoKey?: string | null;
  /** s3 key for dark mode logo (for invoices on dark background) */
  darkLogoKey?: string | null;
  /** default logo mode for invoices (white, dark) */
  invoiceLogoMode?: string;
  /** default invoice layout variant for this company */
  invoiceLayoutVariant?: string;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type ManagingCompanyId = number;

export type CompanyCostCenter = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  /** eindeutiger code für die kostenstelle z.b. für rechnungen usw. */
  code: string;
  /** archivierte kostenstelle, wird nicht mehr genutzt */
  isArchived: boolean;
  /** hex color code for this cost center */
  colour: string | null;
  /** optional icon identifier for UI separation from company logos */
  icon: string | null;
  /** optional S3 key for white mode cost-center logo */
  whiteLogoKey: string | null;
  /** optional S3 key for dark mode cost-center logo */
  darkLogoKey: string | null;
  /** optional override; null => inherit company invoiceLayoutVariant */
  invoiceLayoutVariant: string | null;
  /** ortierung alphabetisch auf code, danach kommt sort order */
  sortOrder: number | null;
  /** wenn true, dann wird nach sort order sortiert, sonst erst alphabetisch nach code dann sort order */
  sortByOrder: boolean;
};

export type CompanyCostCenterInsert = {
  managingCompanyId: number;
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
  /** eindeutiger code für die kostenstelle z.b. für rechnungen usw. */
  code: string;
  /** archivierte kostenstelle, wird nicht mehr genutzt */
  isArchived?: boolean;
  /** hex color code for this cost center */
  colour?: string | null;
  /** optional icon identifier for UI separation from company logos */
  icon?: string | null;
  /** optional S3 key for white mode cost-center logo */
  whiteLogoKey?: string | null;
  /** optional S3 key for dark mode cost-center logo */
  darkLogoKey?: string | null;
  /** optional override; null => inherit company invoiceLayoutVariant */
  invoiceLayoutVariant?: string | null;
  /** ortierung alphabetisch auf code, danach kommt sort order */
  sortOrder?: number | null;
  /** wenn true, dann wird nach sort order sortiert, sonst erst alphabetisch nach code dann sort order */
  sortByOrder?: boolean;
};

export type CompanyCostCenterId = number;

export type UserSelectedCompany = {
  id: number;
  /** One selection per user */
  userId: number;
  managingCompanyId: number;
  updatedAt: Date;
};

export type UserSelectedCompanyInsert = {
  /** One selection per user */
  userId: number;
  managingCompanyId: number;
  updatedAt: Date;
};

export type UserSelectedCompanyId = number;

export type OnboardingProgress = {
  id: number;
  userId: number;
  managingCompanyId: number | null;
  scopeKey: string;
  stepId: string;
  status: OnboardingProgressStatus;
  required: boolean;
  autoResolved: boolean;
  missingFields: any;
  meta: any;
  firstSeenAt: Date;
  lastCheckedAt: Date;
  completedAt: Date | null;
  skippedAt: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type OnboardingProgressInsert = {
  userId: number;
  managingCompanyId?: number | null;
  scopeKey: string;
  stepId: string;
  status?: OnboardingProgressStatus;
  required?: boolean;
  autoResolved?: boolean;
  missingFields?: any;
  meta?: any;
  firstSeenAt?: Date;
  lastCheckedAt?: Date;
  completedAt?: Date | null;
  skippedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type OnboardingProgressId = number;

export type CompanyUserAssignment = {
  id: number;
  companyId: number;
  userId: number;
  /** technical role in the company (viewer, editor, admin) */
  role: string;
  /** roles in the company (seo, developer, etc.) not technical used, only vor visualization */
  companyRole: string | null;
  createdAt: Date;
  validFrom: Date;
  validTo: Date | null;
  isActive: boolean;
  costCenters: any | null;
  assignedBy: number | null;
  revokedBy: number | null;
};

export type CompanyUserAssignmentInsert = {
  companyId: number;
  userId: number;
  /** technical role in the company (viewer, editor, admin) */
  role?: string;
  /** roles in the company (seo, developer, etc.) not technical used, only vor visualization */
  companyRole?: string | null;
  createdAt: Date;
  validFrom: Date;
  validTo?: Date | null;
  isActive?: boolean;
  costCenters?: any | null;
  assignedBy?: number | null;
  revokedBy?: number | null;
};

export type CompanyUserAssignmentId = number;

export type CompanyUserInvite = {
  id: number;
  companyId: number;
  email: string;
  role: string;
  companyRole: string | null;
  invitedBy: number;
  token: string;
  status: InviteStatus;
  validFrom: Date | null;
  validTo: Date | null;
  costCenters: any | null;
  expiresAt: Date;
  acceptedAt: Date | null;
  createdAt: Date;
};

export type CompanyUserInviteInsert = {
  companyId: number;
  email: string;
  role?: string;
  companyRole?: string | null;
  invitedBy: number;
  token: string;
  status?: InviteStatus;
  validFrom?: Date | null;
  validTo?: Date | null;
  costCenters?: any | null;
  expiresAt: Date;
  acceptedAt?: Date | null;
  createdAt: Date;
};

export type CompanyUserInviteId = number;

export type CompanyApiKey = {
  id: number;
  managingCompanyId: number;
  name: string;
  /**
   * Security: Argon2 hash (irreversible, includes salt)
   * Argon2 hashes are ~96 chars, but allow room
   */
  apiKeyHash: string;
  /**
   * Performance: SHA-256 fingerprint for fast lookups (before expensive Argon2 verification)
   * SHA-256 in hex = 64 chars
   */
  apiKeyFingerprint: string;
  /**
   * Pepper Rotation: Track which pepper version was used to create this key
   * Allows graceful pepper rotation without invalidating existing keys
   */
  pepperVersion: number;
  /** technical role in the company (viewer, editor, admin) */
  role: string;
  defaultCostCenter: number | null;
  /**
   * Cost center policy:
   * - admin keys: null => unrestricted
   * - non-admin keys: explicit whitelist array (empty array => no scoped access)
   */
  availableCostCenters: any | null;
  revokedAt: Date | null;
  isActive: boolean;
  createdAt: Date;
  createdBy: number | null;
  updatedAt: Date | null;
  validFrom: Date;
  validTo: Date | null;
};

export type CompanyApiKeyInsert = {
  managingCompanyId: number;
  name: string;
  /**
   * Security: Argon2 hash (irreversible, includes salt)
   * Argon2 hashes are ~96 chars, but allow room
   */
  apiKeyHash: string;
  /**
   * Performance: SHA-256 fingerprint for fast lookups (before expensive Argon2 verification)
   * SHA-256 in hex = 64 chars
   */
  apiKeyFingerprint: string;
  /**
   * Pepper Rotation: Track which pepper version was used to create this key
   * Allows graceful pepper rotation without invalidating existing keys
   */
  pepperVersion?: number;
  /** technical role in the company (viewer, editor, admin) */
  role?: string;
  defaultCostCenter?: number | null;
  /**
   * Cost center policy:
   * - admin keys: null => unrestricted
   * - non-admin keys: explicit whitelist array (empty array => no scoped access)
   */
  availableCostCenters?: any | null;
  revokedAt?: Date | null;
  isActive?: boolean;
  createdAt: Date;
  createdBy?: number | null;
  updatedAt?: Date | null;
  validFrom: Date;
  validTo?: Date | null;
};

export type CompanyApiKeyId = number;

export type BookkeepingRevenue = {
  id: number;
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId: number | null;
  /**
   * Revenue details
   * Date when revenue was received
   */
  revenueDate: Date;
  /** Gross amount (in base currency after conversion) */
  amount: string;
  /** Base currency (from managing company) */
  currency: string;
  description: string;
  category: BookkeepingRevenueCategory;
  /**
   * Multi-Currency Support (Original values before conversion)
   * Original currency before conversion (null if same as base currency)
   */
  originalCurrency: string | null;
  /** Original amount before conversion */
  originalAmount: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionRate: string | null;
  /** When the conversion rate was fetched */
  conversionDate: Date | null;
  /** FX provider used (e.g., "ecb_xml", "frankfurter") */
  conversionProvider: string | null;
  /**
   * References
   * Link to customer invoice (if applicable)
   */
  invoiceId: number | null;
  /** Link to disposed asset (if applicable) */
  assetId: number | null;
  /** Receipt/proof document */
  documentId: number | null;
  /**
   * Tax details
   * e.g., 0.19 for 19% VAT (optional for Kleinunternehmer)
   */
  taxRate: string | null;
  /** Calculated tax amount */
  taxAmount: string | null;
  /** Net amount (before tax) */
  netAmount: string;
  /**
   * VAT Treatment Snapshot (immutable after confirmation)
   * Snapshot of tax treatment
   */
  vatTreatment: VatTreatment | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatLegalRef: string | null;
  /** { legalRef?, description?, vatRate?, vatAmountOverride? } */
  vatCustom: any | null;
  /**
   * Dates for VAT calculation
   * Leistungsdatum (when service was performed)
   */
  performedAt: Date | null;
  /**
   * Status & notes
   * Confirmed by user?
   */
  isConfirmed: boolean;
  notes: string | null;
  /**
   * Eigenbeleg (self-created receipt) — mirrors bookkeeping_expenses pattern
   * Eigenbeleg für Einnahmen ohne Originalbeleg (§ 146 AO)
   */
  isSelfCreatedReceipt: boolean;
  /** Pflicht-Begründung: warum kein Originalbeleg existiert (GoBD) */
  selfReceiptReason: string | null;
  /** Laufnummer pro Company+Jahr (numerischer Teil von ER-YYYY-NNNNN) */
  eigenbelegNumber: number | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
  /** Idempotency (for external API calls – prevents duplicate entries from webhook retries) */
  idempotencyKey: string | null;
  /** EÜR Payment Status (Zufluss-Prinzip) */
  paymentStatus: BookkeepingPaymentStatus;
  /** Date the cash payment was confirmed by the user (only set for cash_confirmed) */
  cashConfirmedAt: Date | null;
  cashConfirmedBy: number | null;
};

export type BookkeepingRevenueInsert = {
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId?: number | null;
  /**
   * Revenue details
   * Date when revenue was received
   */
  revenueDate: Date;
  /** Gross amount (in base currency after conversion) */
  amount: string;
  /** Base currency (from managing company) */
  currency?: string;
  description: string;
  category: BookkeepingRevenueCategory;
  /**
   * Multi-Currency Support (Original values before conversion)
   * Original currency before conversion (null if same as base currency)
   */
  originalCurrency?: string | null;
  /** Original amount before conversion */
  originalAmount?: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionRate?: string | null;
  /** When the conversion rate was fetched */
  conversionDate?: Date | null;
  /** FX provider used (e.g., "ecb_xml", "frankfurter") */
  conversionProvider?: string | null;
  /**
   * References
   * Link to customer invoice (if applicable)
   */
  invoiceId?: number | null;
  /** Link to disposed asset (if applicable) */
  assetId?: number | null;
  /** Receipt/proof document */
  documentId?: number | null;
  /**
   * Tax details
   * e.g., 0.19 for 19% VAT (optional for Kleinunternehmer)
   */
  taxRate?: string | null;
  /** Calculated tax amount */
  taxAmount?: string | null;
  /** Net amount (before tax) */
  netAmount: string;
  /**
   * VAT Treatment Snapshot (immutable after confirmation)
   * Snapshot of tax treatment
   */
  vatTreatment?: VatTreatment | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatLegalRef?: string | null;
  /** { legalRef?, description?, vatRate?, vatAmountOverride? } */
  vatCustom?: any | null;
  /**
   * Dates for VAT calculation
   * Leistungsdatum (when service was performed)
   */
  performedAt?: Date | null;
  /**
   * Status & notes
   * Confirmed by user?
   */
  isConfirmed?: boolean;
  notes?: string | null;
  /**
   * Eigenbeleg (self-created receipt) — mirrors bookkeeping_expenses pattern
   * Eigenbeleg für Einnahmen ohne Originalbeleg (§ 146 AO)
   */
  isSelfCreatedReceipt?: boolean;
  /** Pflicht-Begründung: warum kein Originalbeleg existiert (GoBD) */
  selfReceiptReason?: string | null;
  /** Laufnummer pro Company+Jahr (numerischer Teil von ER-YYYY-NNNNN) */
  eigenbelegNumber?: number | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
  /** Idempotency (for external API calls – prevents duplicate entries from webhook retries) */
  idempotencyKey?: string | null;
  /** EÜR Payment Status (Zufluss-Prinzip) */
  paymentStatus?: BookkeepingPaymentStatus;
  /** Date the cash payment was confirmed by the user (only set for cash_confirmed) */
  cashConfirmedAt?: Date | null;
  cashConfirmedBy?: number | null;
};

export type BookkeepingRevenueId = number;

export type BookkeepingExpense = {
  id: number;
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId: number | null;
  /**
   * Expense details
   * Date when expense occurred
   */
  expenseDate: Date;
  /** Gross amount (in base currency after conversion) */
  amount: string;
  /** Base currency (from managing company) */
  currency: string;
  description: string;
  category: BookkeepingExpenseCategory;
  /**
   * Multi-Currency Support (Original values before conversion)
   * Original currency before conversion (null if same as base currency)
   */
  originalCurrency: string | null;
  /** Original amount before conversion */
  originalAmount: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionRate: string | null;
  /** When the conversion rate was fetched */
  conversionDate: Date | null;
  /** FX provider used (e.g., "ecb_xml", "frankfurter") */
  conversionProvider: string | null;
  /**
   * Vendor details
   * Vendor/supplier name (e.g., "Railway", "AWS")
   */
  vendor: string | null;
  /** Vendor's invoice number */
  vendorInvoiceNumber: string | null;
  /**
   * Document reference
   * Receipt/invoice PDF
   */
  documentId: number | null;
  /**
   * Tax details
   * e.g., 0.19 for 19% VAT
   */
  taxRate: string | null;
  /** Calculated tax amount */
  taxAmount: string | null;
  /** Net amount (before tax) */
  netAmount: string;
  /**
   * Status & notes
   * Tax deductible?
   */
  isDeductible: boolean;
  /** Confirmed by user? */
  isConfirmed: boolean;
  /** Self-Created Receipt flag */
  isSelfCreatedReceipt: boolean;
  /** Reason for self-created receipt */
  selfReceiptReason: string | null;
  notes: string | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
  /**
   * Eigenbeleg specific
   * numeric part of vendorInvoiceNumber (EB-YYYY-00001), generated per company+year
   */
  eigenbelegNumber: number | null;
  /** Input VAT (Vorsteuer) - for deductible expenses */
  inputVatEligibility: InputVatEligibility;
  /** Vorsteuer amount */
  inputVatAmount: string | null;
  /** For PARTIAL eligibility (e.g., 0.7 = 70%) */
  inputVatRate: string | null;
  /** VAT Treatment — enables §13b routing in UStVA (null = legacy/unclassified) */
  vatTreatment: VatTreatment | null;
  /** Fee Proposal — for provider fee expenses that require user confirmation before booking */
  feeProposalStatus: FeeProposalStatus | null;
  /** Idempotency (for external API calls – prevents duplicate entries from webhook retries) */
  idempotencyKey: string | null;
  /** EÜR Payment Status (Abfluss-Prinzip) */
  paymentStatus: BookkeepingPaymentStatus;
  cashConfirmedAt: Date | null;
  cashConfirmedBy: number | null;
  /** GoBD Storno (reversal) fields — expenses are NEVER deleted, only reversed */
  reversalOfId: number | null;
  isReversed: boolean;
  reversedAt: Date | null;
  reversedBy: number | null;
};

export type BookkeepingExpenseInsert = {
  /**
   * company
   * firma der das dokument gehört
   */
  managingCompanyId: number;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  costCenterId?: number | null;
  /**
   * Expense details
   * Date when expense occurred
   */
  expenseDate: Date;
  /** Gross amount (in base currency after conversion) */
  amount: string;
  /** Base currency (from managing company) */
  currency?: string;
  description: string;
  category: BookkeepingExpenseCategory;
  /**
   * Multi-Currency Support (Original values before conversion)
   * Original currency before conversion (null if same as base currency)
   */
  originalCurrency?: string | null;
  /** Original amount before conversion */
  originalAmount?: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionRate?: string | null;
  /** When the conversion rate was fetched */
  conversionDate?: Date | null;
  /** FX provider used (e.g., "ecb_xml", "frankfurter") */
  conversionProvider?: string | null;
  /**
   * Vendor details
   * Vendor/supplier name (e.g., "Railway", "AWS")
   */
  vendor?: string | null;
  /** Vendor's invoice number */
  vendorInvoiceNumber?: string | null;
  /**
   * Document reference
   * Receipt/invoice PDF
   */
  documentId?: number | null;
  /**
   * Tax details
   * e.g., 0.19 for 19% VAT
   */
  taxRate?: string | null;
  /** Calculated tax amount */
  taxAmount?: string | null;
  /** Net amount (before tax) */
  netAmount: string;
  /**
   * Status & notes
   * Tax deductible?
   */
  isDeductible?: boolean;
  /** Confirmed by user? */
  isConfirmed?: boolean;
  /** Self-Created Receipt flag */
  isSelfCreatedReceipt?: boolean;
  /** Reason for self-created receipt */
  selfReceiptReason?: string | null;
  notes?: string | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
  /**
   * Eigenbeleg specific
   * numeric part of vendorInvoiceNumber (EB-YYYY-00001), generated per company+year
   */
  eigenbelegNumber?: number | null;
  /** Input VAT (Vorsteuer) - for deductible expenses */
  inputVatEligibility?: InputVatEligibility;
  /** Vorsteuer amount */
  inputVatAmount?: string | null;
  /** For PARTIAL eligibility (e.g., 0.7 = 70%) */
  inputVatRate?: string | null;
  /** VAT Treatment — enables §13b routing in UStVA (null = legacy/unclassified) */
  vatTreatment?: VatTreatment | null;
  /** Fee Proposal — for provider fee expenses that require user confirmation before booking */
  feeProposalStatus?: FeeProposalStatus | null;
  /** Idempotency (for external API calls – prevents duplicate entries from webhook retries) */
  idempotencyKey?: string | null;
  /** EÜR Payment Status (Abfluss-Prinzip) */
  paymentStatus?: BookkeepingPaymentStatus;
  cashConfirmedAt?: Date | null;
  cashConfirmedBy?: number | null;
  /** GoBD Storno (reversal) fields — expenses are NEVER deleted, only reversed */
  reversalOfId?: number | null;
  isReversed?: boolean;
  reversedAt?: Date | null;
  reversedBy?: number | null;
};

export type BookkeepingExpenseId = number;

export type PaymentAccount = {
  id: number;
  /** tenant */
  managingCompanyId: number;
  /** optional cost center default/restriction */
  costCenterId: number | null;
  /** account details */
  type: PaymentAccountType;
  /** display name */
  name: string;
  currency: string;
  /** bank specifics (nullable for cash) */
  iban: string | null;
  bic: string | null;
  bankName: string | null;
  accountOwner: string | null;
  /** paypal display (nullable for bank/cash) */
  paypalEmail: string | null;
  /** e.g. "MeinShop" -> paypal.me/MeinShop */
  paypalHandle: string | null;
  /** paypal api integration (nullable for non-paypal accounts) */
  paypalClientId: string | null;
  /** AES-256-GCM encrypted via encryptionService */
  paypalClientSecret: string | null;
  /** 'live' | 'sandbox' */
  paypalEnvironment: string;
  /** PayPal-registered webhook ID */
  paypalWebhookId: string | null;
  paypalSyncEnabled: boolean;
  paypalLastSyncAt: Date | null;
  /** ISO-date for incremental sync start */
  paypalSyncCursor: string | null;
  /**
   * PayPal hat den Zugang abgelehnt (401 invalid_client oder fehlende Berechtigung).
   * Der Stundenjob laesst das Konto dann aus, bis neue Zugangsdaten gespeichert sind
   * oder ein manueller Abruf wieder klappt. Sonst meldet er denselben Zustand stuendlich.
   */
  paypalReauthRequired: boolean;
  paypalLastError: string | null;
  /**
   * opening balance — Anfangssaldo ab Tracking-Start (Enterprise-Buchhaltung)
   * numeric string, e.g. "12345.67"
   */
  openingBalance: string | null;
  /** ab wann der Saldo gilt */
  openingBalanceDate: Date | null;
  /** import preferences */
  allowCsvImport: boolean;
  /**
   * lifecycle
   * Default-Konto fuer Rechnungen
   */
  isDefault: boolean;
  isArchived: boolean;
  /** Durchlaufkonto (z.B. SumUp Terminal): Zahlungen sind informativ, nicht buchungsrelevant */
  isTransit: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};

export type PaymentAccountInsert = {
  /** tenant */
  managingCompanyId: number;
  /** optional cost center default/restriction */
  costCenterId?: number | null;
  /** account details */
  type: PaymentAccountType;
  /** display name */
  name: string;
  currency?: string;
  /** bank specifics (nullable for cash) */
  iban?: string | null;
  bic?: string | null;
  bankName?: string | null;
  accountOwner?: string | null;
  /** paypal display (nullable for bank/cash) */
  paypalEmail?: string | null;
  /** e.g. "MeinShop" -> paypal.me/MeinShop */
  paypalHandle?: string | null;
  /** paypal api integration (nullable for non-paypal accounts) */
  paypalClientId?: string | null;
  /** AES-256-GCM encrypted via encryptionService */
  paypalClientSecret?: string | null;
  /** 'live' | 'sandbox' */
  paypalEnvironment?: string;
  /** PayPal-registered webhook ID */
  paypalWebhookId?: string | null;
  paypalSyncEnabled?: boolean;
  paypalLastSyncAt?: Date | null;
  /** ISO-date for incremental sync start */
  paypalSyncCursor?: string | null;
  /**
   * PayPal hat den Zugang abgelehnt (401 invalid_client oder fehlende Berechtigung).
   * Der Stundenjob laesst das Konto dann aus, bis neue Zugangsdaten gespeichert sind
   * oder ein manueller Abruf wieder klappt. Sonst meldet er denselben Zustand stuendlich.
   */
  paypalReauthRequired?: boolean;
  paypalLastError?: string | null;
  /**
   * opening balance — Anfangssaldo ab Tracking-Start (Enterprise-Buchhaltung)
   * numeric string, e.g. "12345.67"
   */
  openingBalance?: string | null;
  /** ab wann der Saldo gilt */
  openingBalanceDate?: Date | null;
  /** import preferences */
  allowCsvImport?: boolean;
  /**
   * lifecycle
   * Default-Konto fuer Rechnungen
   */
  isDefault?: boolean;
  isArchived?: boolean;
  /** Durchlaufkonto (z.B. SumUp Terminal): Zahlungen sind informativ, nicht buchungsrelevant */
  isTransit?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type PaymentAccountId = number;

export type PaymentProviderConnection = {
  id: number;
  managingCompanyId: number;
  paymentAccountId: number;
  provider: PaymentProvider;
  externalMerchantCode: string | null;
  externalMerchantId: string | null;
  externalMerchantLabel: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiresAt: Date | null;
  scope: string | null;
  syncEnabled: boolean;
  syncCursor: string | null;
  lastSyncAt: Date | null;
  reauthRequired: boolean;
  lastError: string | null;
  connectedAt: Date | null;
  disconnectedAt: Date | null;
  /** Fee VAT Treatment — determines how provider fees are taxed (per-connection, not global) */
  feeVatTreatment: FeeVatTreatment;
  /** Derived from treatment: 0 (EXEMPT), 0.19 (INCLUSIVE/RC), null (UNKNOWN) */
  feeVatRate: string | null;
  createdAt: Date;
  createdBy: number | null;
  updatedAt: Date | null;
  updatedBy: number | null;
};

export type PaymentProviderConnectionInsert = {
  managingCompanyId: number;
  paymentAccountId: number;
  provider: PaymentProvider;
  externalMerchantCode?: string | null;
  externalMerchantId?: string | null;
  externalMerchantLabel?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  accessTokenExpiresAt?: Date | null;
  scope?: string | null;
  syncEnabled?: boolean;
  syncCursor?: string | null;
  lastSyncAt?: Date | null;
  reauthRequired?: boolean;
  lastError?: string | null;
  connectedAt?: Date | null;
  disconnectedAt?: Date | null;
  /** Fee VAT Treatment — determines how provider fees are taxed (per-connection, not global) */
  feeVatTreatment?: FeeVatTreatment;
  /** Derived from treatment: 0 (EXEMPT), 0.19 (INCLUSIVE/RC), null (UNKNOWN) */
  feeVatRate?: string | null;
  createdAt?: Date;
  createdBy?: number | null;
  updatedAt?: Date | null;
  updatedBy?: number | null;
};

export type PaymentProviderOAuthState = {
  id: number;
  managingCompanyId: number;
  paymentAccountId: number;
  initiatedBy: number;
  provider: PaymentProvider;
  state: string;
  redirectUri: string;
  /** e.g. { autoCreateBankAccount: true } */
  metadata: any | null;
  expiresAt: Date;
  consumedAt: Date | null;
  createdAt: Date;
};

export type PaymentProviderOAuthStateInsert = {
  managingCompanyId: number;
  paymentAccountId: number;
  initiatedBy: number;
  provider: PaymentProvider;
  state: string;
  redirectUri: string;
  /** e.g. { autoCreateBankAccount: true } */
  metadata?: any | null;
  expiresAt: Date;
  consumedAt?: Date | null;
  createdAt?: Date;
};

export type PaymentAccountBalanceSnapshot = {
  id: number;
  /** tenant */
  managingCompanyId: number;
  /** account reference */
  paymentAccountId: number;
  /** Effective timestamp of the external balance (Berlin timezone, day-boundary normalized for date-only sources) */
  asOfAt: Date;
  /** Classification */
  balanceType: PaymentAccountBalanceType;
  /** The externally reported balance at asOfAt */
  balance: string;
  currency: string;
  /** Source of the snapshot */
  source: PaymentAccountBalanceSnapshotSource;
  /** Optional external reference (account statement number, PayPal report ID, etc.) */
  externalRef: string | null;
  /** Optional user note */
  note: string | null;
  /** Optional raw evidence payload (JSON from API, parsed CSV row, etc.) */
  raw: any | null;
  /** Audit — immutable after insert */
  createdAt: Date;
  createdBy: number | null;
  /**
   * GoBD-compliant voiding: records are NEVER deleted.
   * A voided snapshot is excluded from UI balance display but preserved in the audit trail.
   */
  isVoided: boolean;
  voidedAt: Date | null;
  voidedBy: number | null;
  voidReason: string | null;
};

export type PaymentAccountBalanceSnapshotInsert = {
  /** tenant */
  managingCompanyId: number;
  /** account reference */
  paymentAccountId: number;
  /** Effective timestamp of the external balance (Berlin timezone, day-boundary normalized for date-only sources) */
  asOfAt: Date;
  /** Classification */
  balanceType?: PaymentAccountBalanceType;
  /** The externally reported balance at asOfAt */
  balance: string;
  currency?: string;
  /** Source of the snapshot */
  source?: PaymentAccountBalanceSnapshotSource;
  /** Optional external reference (account statement number, PayPal report ID, etc.) */
  externalRef?: string | null;
  /** Optional user note */
  note?: string | null;
  /** Optional raw evidence payload (JSON from API, parsed CSV row, etc.) */
  raw?: any | null;
  /** Audit — immutable after insert */
  createdAt?: Date;
  createdBy?: number | null;
  /**
   * GoBD-compliant voiding: records are NEVER deleted.
   * A voided snapshot is excluded from UI balance display but preserved in the audit trail.
   */
  isVoided?: boolean;
  voidedAt?: Date | null;
  voidedBy?: number | null;
  voidReason?: string | null;
};

export type PaymentAccountBalanceSnapshotId = number;

export type Payment = {
  id: number;
  /** tenant */
  managingCompanyId: number;
  paymentAccountId: number;
  source: PaymentSource;
  direction: PaymentDirection;
  /**
   * core amounts
   * signed? we store absolute and use direction; keep positive here
   */
  amount: string;
  currency: string;
  /**
   * Transaction fee fields (for provider-deducted fees: PayPal, Stripe, etc.)
   * These represent fees embedded IN the payment, NOT separate account fees.
   * For account fees (Kontofuehrungsgebuehr), use the fee allocation system instead.
   * Fee deducted by provider (absolute, e.g. 1.84)
   */
  feeAmount: string | null;
  /** Currency of fee (usually same as payment) */
  feeCurrency: string | null;
  /** amount - feeAmount = what was actually received/sent */
  netAmount: string | null;
  feeExpenseId: number | null;
  /**
   * FX context (informational — payment.amount is ALWAYS in account currency)
   * Records the original foreign-currency amount for audit/compliance.
   * GoBD: The actual bank movement (amount/currency) is authoritative and never converted.
   * All three null when no foreign currency involved.
   * Foreign currency amount (e.g. 7.00)
   */
  originalAmount: string | null;
  /** Foreign currency code (e.g. "USD") */
  originalCurrency: string | null;
  /** Exchange rate (e.g. 0.87 = USD→EUR) */
  conversionRate: string | null;
  /** booking date */
  bookedAt: Date;
  /** valuta date (optional) */
  valueAt: Date | null;
  /** counterparty / reference (best effort) */
  counterpartyName: string | null;
  counterpartyIban: string | null;
  counterpartyBic: string | null;
  reference: string | null;
  endToEndId: string | null;
  /** provider specific id (if present) */
  bankTransactionId: string | null;
  /** raw import data (for audit/debug) */
  raw: any | null;
  /**
   * Provider payout ID for fast lookup (e.g. SumUp PID "381815369").
   * Set during SumUp sync (from payout.id), aggregate creation, or bank import (extracted from reference).
   */
  payoutId: string | null;
  /** dedupe key (sha256 hex) for idempotent imports */
  fingerprint: string;
  createdAt: Date;
  createdBy: number | null;
  /** Update audit (for manual corrections before reconciliation) */
  updatedAt: Date | null;
  updatedBy: number | null;
  /** GoBD Storno (reversal) fields — payments are NEVER deleted, only reversed */
  reversalOfId: number | null;
  isReversed: boolean;
  reversedAt: Date | null;
  reversedBy: number | null;
  reversalReason: string | null;
  /**
   * ── Internal transfer link ──────────────────────────────────
   * Bidirectional: OUT payment links to IN payment and vice versa
   */
  linkedPaymentId: number | null;
  /** ── FX snapshot for cross-currency transfers ──────────────── */
  transferFxRate: string | null;
  transferFxProvider: string | null;
  transferFxAsOfDate: string | null;
};

export type PaymentInsert = {
  /** tenant */
  managingCompanyId: number;
  paymentAccountId: number;
  source?: PaymentSource;
  direction: PaymentDirection;
  /**
   * core amounts
   * signed? we store absolute and use direction; keep positive here
   */
  amount: string;
  currency?: string;
  /**
   * Transaction fee fields (for provider-deducted fees: PayPal, Stripe, etc.)
   * These represent fees embedded IN the payment, NOT separate account fees.
   * For account fees (Kontofuehrungsgebuehr), use the fee allocation system instead.
   * Fee deducted by provider (absolute, e.g. 1.84)
   */
  feeAmount?: string | null;
  /** Currency of fee (usually same as payment) */
  feeCurrency?: string | null;
  /** amount - feeAmount = what was actually received/sent */
  netAmount?: string | null;
  feeExpenseId?: number | null;
  /**
   * FX context (informational — payment.amount is ALWAYS in account currency)
   * Records the original foreign-currency amount for audit/compliance.
   * GoBD: The actual bank movement (amount/currency) is authoritative and never converted.
   * All three null when no foreign currency involved.
   * Foreign currency amount (e.g. 7.00)
   */
  originalAmount?: string | null;
  /** Foreign currency code (e.g. "USD") */
  originalCurrency?: string | null;
  /** Exchange rate (e.g. 0.87 = USD→EUR) */
  conversionRate?: string | null;
  /** booking date */
  bookedAt: Date;
  /** valuta date (optional) */
  valueAt?: Date | null;
  /** counterparty / reference (best effort) */
  counterpartyName?: string | null;
  counterpartyIban?: string | null;
  counterpartyBic?: string | null;
  reference?: string | null;
  endToEndId?: string | null;
  /** provider specific id (if present) */
  bankTransactionId?: string | null;
  /** raw import data (for audit/debug) */
  raw?: any | null;
  /**
   * Provider payout ID for fast lookup (e.g. SumUp PID "381815369").
   * Set during SumUp sync (from payout.id), aggregate creation, or bank import (extracted from reference).
   */
  payoutId?: string | null;
  /** dedupe key (sha256 hex) for idempotent imports */
  fingerprint: string;
  createdAt?: Date;
  createdBy?: number | null;
  /** Update audit (for manual corrections before reconciliation) */
  updatedAt?: Date | null;
  updatedBy?: number | null;
  /** GoBD Storno (reversal) fields — payments are NEVER deleted, only reversed */
  reversalOfId?: number | null;
  isReversed?: boolean;
  reversedAt?: Date | null;
  reversedBy?: number | null;
  reversalReason?: string | null;
  /**
   * ── Internal transfer link ──────────────────────────────────
   * Bidirectional: OUT payment links to IN payment and vice versa
   */
  linkedPaymentId?: number | null;
  /** ── FX snapshot for cross-currency transfers ──────────────── */
  transferFxRate?: string | null;
  transferFxProvider?: string | null;
  transferFxAsOfDate?: string | null;
};

export type PaymentId = number;

export type PaymentAllocation = {
  id: number;
  managingCompanyId: number;
  paymentId: number;
  targetType: PaymentAllocationTarget;
  targetId: number;
  kind: PaymentAllocationKind;
  targetCurrency: string | null;
  /** FX snapshot (only set when paymentCurrency != targetCurrency) */
  fxRate: string | null;
  fxProvider: string | null;
  fxAsOfDate: string | null;
  fxConvertedAt: Date | null;
  createdAt: Date;
  createdBy: number | null;
  /** GoBD Storno (reversal) fields — allocations are NEVER deleted, only reversed */
  reversalOfId: number | null;
  isReversed: boolean;
};

export type PaymentAllocationInsert = {
  managingCompanyId: number;
  paymentId: number;
  targetType: PaymentAllocationTarget;
  targetId: number;
  kind?: PaymentAllocationKind;
  targetCurrency?: string | null;
  /** FX snapshot (only set when paymentCurrency != targetCurrency) */
  fxRate?: string | null;
  fxProvider?: string | null;
  fxAsOfDate?: string | null;
  fxConvertedAt?: Date | null;
  createdAt?: Date;
  createdBy?: number | null;
  /** GoBD Storno (reversal) fields — allocations are NEVER deleted, only reversed */
  reversalOfId?: number | null;
  isReversed?: boolean;
};

export type PaymentAllocationId = number;

export type ResolvedPaymentAllocation = {
    allocationId: number;
    paymentId: number;
    allocatedAmount: string;
    targetAmount: string | null;
    paymentCurrency: string;
    targetCurrency: string | null;
    kind: string;
    createdAt: Date;
    isReversed: boolean;
    reversalOfId: number | null;
    payment: {
        bookedAt: Date | null;
        reference: string | null;
        counterpartyName: string | null;
        counterpartyIban: string | null;
        paymentAccountId: number | null;
        paymentAccountName: string | null;
        currency: string;
        amount: string;
        direction: string;
    };
};

export type PaymentImportProfile = {
  id: number;
  managingCompanyId: number;
  /** unique within managingCompany */
  key: string;
  name: string;
  description: string | null;
  /** "," | ";" | "\t" */
  delimiterHint: string | null;
  /** CanonicalField -> list of header aliases (case-insensitive). Stored as JSON for flexibility. */
  headerAliases: any;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  updatedBy: number | null;
};

export type PaymentImportProfileInsert = {
  managingCompanyId: number;
  /** unique within managingCompany */
  key: string;
  name: string;
  description?: string | null;
  /** "," | ";" | "\t" */
  delimiterHint?: string | null;
  /** CanonicalField -> list of header aliases (case-insensitive). Stored as JSON for flexibility. */
  headerAliases: any;
  isArchived?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  updatedBy?: number | null;
};

export type PaymentImportProfileId = number;

export type BookkeepingAuditLog = {
  id: number;
  managingCompanyId: number;
  costCenterId: number | null;
  actorUserId: number | null;
  entityType: BookkeepingAuditEntity;
  /** optional (e.g. import preview) */
  entityId: number | null;
  action: BookkeepingAuditAction;
  message: string | null;
  details: any | null;
  ip: string | null;
  userAgent: string | null;
  createdAt: Date;
};

export type BookkeepingAuditLogInsert = {
  managingCompanyId: number;
  costCenterId?: number | null;
  actorUserId?: number | null;
  entityType: BookkeepingAuditEntity;
  /** optional (e.g. import preview) */
  entityId?: number | null;
  action: BookkeepingAuditAction;
  message?: string | null;
  details?: any | null;
  ip?: string | null;
  userAgent?: string | null;
  createdAt?: Date;
};

export type BookkeepingAuditLogId = number;

export type BookkeepingLockState = {
  id: number;
  managingCompanyId: number;
  /** If set: anything with a relevant date <= lockedUntil is immutable (blocked) */
  lockedUntil: Date | null;
  reason: string | null;
  /**
   * Enterprise: how strict should locking be?
   * - payments_only: blocks edits to payments/imports based on payment.bookedAt
   * - strict: also blocks allocations that affect targets dated in the locked window
   */
  lockMode: string;
  lockedBy: number | null;
  lockedAt: Date | null;
  updatedAt: Date;
  updatedBy: number | null;
};

export type BookkeepingLockStateInsert = {
  managingCompanyId: number;
  /** If set: anything with a relevant date <= lockedUntil is immutable (blocked) */
  lockedUntil?: Date | null;
  reason?: string | null;
  /**
   * Enterprise: how strict should locking be?
   * - payments_only: blocks edits to payments/imports based on payment.bookedAt
   * - strict: also blocks allocations that affect targets dated in the locked window
   */
  lockMode?: string;
  lockedBy?: number | null;
  lockedAt?: Date | null;
  updatedAt?: Date;
  updatedBy?: number | null;
};

export type BookkeepingLockStateId = number;

export type VatSettings = {
  id: number;
  /** Company */
  managingCompanyId: number;
  /** VAT Accounting Method (SOLL vs IST) - This is the ONLY company-specific choice */
  accountingMethod: VatAccountingMethod;
  /**
   * UStVA filing preference (enterprise: company decides; system can recommend)
   * NOTE: legal thresholds are global system settings; this is only the user's preference/override.
   */
  ustvaFilingPreference: string;
  /**
   * Extensible tax-decision map:
   * {
   * "vat.regime": { value: { regime: "regelbesteuert" }, decidedAt, decidedBy, ... },
   * "ustva.filing": { value: { filingPreference: "monthly" }, ... },
   * ...
   * }
   * This keeps future tax decisions flexible without schema migrations.
   */
  taxDecisions: any;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
};

export type VatSettingsInsert = {
  /** Company */
  managingCompanyId: number;
  /** VAT Accounting Method (SOLL vs IST) - This is the ONLY company-specific choice */
  accountingMethod?: VatAccountingMethod;
  /**
   * UStVA filing preference (enterprise: company decides; system can recommend)
   * NOTE: legal thresholds are global system settings; this is only the user's preference/override.
   */
  ustvaFilingPreference?: string;
  /**
   * Extensible tax-decision map:
   * {
   * "vat.regime": { value: { regime: "regelbesteuert" }, decidedAt, decidedBy, ... },
   * "ustva.filing": { value: { filingPreference: "monthly" }, ... },
   * ...
   * }
   * This keeps future tax decisions flexible without schema migrations.
   */
  taxDecisions?: any;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type VatSettingsId = number;

export type VatRegimePeriod = {
  id: number;
  /** Company */
  managingCompanyId: number;
  /** Period */
  validFrom: Date;
  /** null = current period */
  validTo: Date | null;
  /** Regime */
  regime: VatRegime;
  /** Trigger details (why did regime change?) */
  reason: VatRegimeReason;
  /** Revenue amount that triggered the switch */
  triggerAmount: string | null;
  /** Exact timestamp when threshold was exceeded */
  triggerAt: Date | null;
  /** Invoice/Revenue ID that caused the switch */
  triggerDocId: number | null;
  /** "invoice" | "revenue" */
  triggerDocType: string | null;
  /** Metadata */
  createdAt: Date;
  /** Always AUTO (no manual overrides) */
  calculatedBy: string;
};

export type VatRegimePeriodInsert = {
  /** Company */
  managingCompanyId: number;
  /** Period */
  validFrom: Date;
  /** null = current period */
  validTo?: Date | null;
  /** Regime */
  regime: VatRegime;
  /** Trigger details (why did regime change?) */
  reason: VatRegimeReason;
  /** Revenue amount that triggered the switch */
  triggerAmount?: string | null;
  /** Exact timestamp when threshold was exceeded */
  triggerAt?: Date | null;
  /** Invoice/Revenue ID that caused the switch */
  triggerDocId?: number | null;
  /** "invoice" | "revenue" */
  triggerDocType?: string | null;
  /** Metadata */
  createdAt?: Date;
  /** Always AUTO (no manual overrides) */
  calculatedBy?: string;
};

export type VatRegimePeriodId = number;

export type SystemSettings = {
  id: number;
  /**
   * VAT Thresholds (German Law - as of 2025)
   * These apply EQUALLY to all legal forms (Einzelunternehmen, GmbH, etc.)
   */
  defaultKleinunternehmerGraceAmount: string;
  /** Previous year revenue ≤ 25.000 EUR (ab 2025) */
  defaultKleinunternehmerMaxAmount: string;
  /** Current year revenue < 100.000 EUR (ab 2025) */
  defaultVatAccountingMethod: VatAccountingMethod;
  /**
   * Default accounting method for new companies
   * UStVA (VAT pre-declaration) filing frequency thresholds (Germany, §18 UStG)
   * NOTE: These are legal thresholds and therefore GLOBAL defaults (admin configurable for law changes).
   */
  ustvaMonthlyVatDueThreshold: string;
  /** If prior-year VAT due > threshold -> typically monthly (§18 Abs. 2 S. 2 UStG) */
  ustvaAnnualVatDueExemptThreshold: string;
  /** If prior-year VAT due <= threshold -> typically can be exempt from advance returns (§18 Abs. 2 S. 3 UStG) */
  ustvaNewCompanyMonthlyYears: number;
  /**
   * Newly founded businesses often have monthly filing in foundation year + following year
   * valid
   */
  validFrom: Date;
  validTo: Date | null;
  /** Metadata */
  updatedAt: Date;
  updatedBy: number | null;
};

export type SystemSettingsInsert = {
  /**
   * VAT Thresholds (German Law - as of 2025)
   * These apply EQUALLY to all legal forms (Einzelunternehmen, GmbH, etc.)
   */
  defaultKleinunternehmerGraceAmount?: string;
  /** Previous year revenue ≤ 25.000 EUR (ab 2025) */
  defaultKleinunternehmerMaxAmount?: string;
  /** Current year revenue < 100.000 EUR (ab 2025) */
  defaultVatAccountingMethod?: VatAccountingMethod;
  /**
   * Default accounting method for new companies
   * UStVA (VAT pre-declaration) filing frequency thresholds (Germany, §18 UStG)
   * NOTE: These are legal thresholds and therefore GLOBAL defaults (admin configurable for law changes).
   */
  ustvaMonthlyVatDueThreshold?: string;
  /** If prior-year VAT due > threshold -> typically monthly (§18 Abs. 2 S. 2 UStG) */
  ustvaAnnualVatDueExemptThreshold?: string;
  /** If prior-year VAT due <= threshold -> typically can be exempt from advance returns (§18 Abs. 2 S. 3 UStG) */
  ustvaNewCompanyMonthlyYears?: number;
  /**
   * Newly founded businesses often have monthly filing in foundation year + following year
   * valid
   */
  validFrom: Date;
  validTo?: Date | null;
  /** Metadata */
  updatedAt: Date;
  updatedBy?: number | null;
};

export type SystemSettingsId = number;

export type VatSettingsHistory = {
  id: number;
  /** Reference to company */
  managingCompanyId: number;
  /** What changed? (Only accounting method can be changed per company) */
  accountingMethod: VatAccountingMethod;
  previousAccountingMethod: VatAccountingMethod;
  /** Optional: track UStVA filing preference changes (nullable for legacy rows) */
  ustvaFilingPreference: string | null;
  previousUstvaFilingPreference: string | null;
  /** Why did it change? */
  changeReason: string;
  /**
   * e.g., "Switched to IST method for better cash flow management", "Company request"
   * Who changed it?
   */
  changedBy: number | null;
  changedAt: Date;
};

export type VatSettingsHistoryInsert = {
  /** Reference to company */
  managingCompanyId: number;
  /** What changed? (Only accounting method can be changed per company) */
  accountingMethod: VatAccountingMethod;
  previousAccountingMethod: VatAccountingMethod;
  /** Optional: track UStVA filing preference changes (nullable for legacy rows) */
  ustvaFilingPreference?: string | null;
  previousUstvaFilingPreference?: string | null;
  /** Why did it change? */
  changeReason: string;
  /**
   * e.g., "Switched to IST method for better cash flow management", "Company request"
   * Who changed it?
   */
  changedBy?: number | null;
  changedAt?: Date;
};

export type VatSettingsHistoryId = number;

export type UnsensitiveCompanyApiKey = Omit<CompanyApiKey, "apiKeyHash" | "apiKeyFingerprint" | "pepperVersion">;

export type WorkEntry = {
  id: number;
  userId: number;
  start: Date;
  end: Date | null;
  timeInMinutes: number | null;
  entryType: WorkEntryType;
  description: string | null;
  /** is the work entry billable to the company? wenn false dann kostenlose arbeit (beratung, ops, etc.) */
  isBillable: boolean;
  /** wurde die arbeit schon in eine rechnung übernommen? */
  isBilled: boolean;
  status: WorkEntryStatus;
  approvedBy: number | null;
  approvedAt: Date | null;
  rejectedBy: number | null;
  rejectedAt: Date | null;
  rejectionReason: string | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type WorkEntryInsert = {
  userId: number;
  start: Date;
  end?: Date | null;
  timeInMinutes?: number | null;
  entryType: WorkEntryType;
  description?: string | null;
  /** is the work entry billable to the company? wenn false dann kostenlose arbeit (beratung, ops, etc.) */
  isBillable?: boolean;
  /** wurde die arbeit schon in eine rechnung übernommen? */
  isBilled?: boolean;
  status?: WorkEntryStatus;
  approvedBy?: number | null;
  approvedAt?: Date | null;
  rejectedBy?: number | null;
  rejectedAt?: Date | null;
  rejectionReason?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type WorkEntryId = number;

export type WorkEntryAssignment = {
  id: number;
  workEntryId: number;
  managingCompanyId: number;
  companyId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type WorkEntryAssignmentInsert = {
  workEntryId: number;
  managingCompanyId: number;
  companyId?: number | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type WorkEntryAssignmentId = number;

export type BookkeepingAsset = {
  id: number;
  /** Company */
  managingCompanyId: number;
  costCenterId: number | null;
  /**
   * Identification
   * e.g., "MacBook Pro 16", "Firmenwagen VW Passat"
   */
  name: string;
  description: string | null;
  /** Inventarnummer (auto-generiert oder manuell) */
  inventoryNumber: string | null;
  assetType: BookkeepingAssetType;
  /** Purchase & Commissioning */
  purchaseDate: Date;
  /** Inbetriebnahmedatum (kann != purchaseDate!) */
  inServiceDate: Date | null;
  /** Netto-Kaufpreis (Basispreis) */
  purchaseAmountNet: string;
  currency: string;
  /**
   * Anschaffungskostenmodell (§255 HGB)
   * Anschaffungsnebenkosten (Lieferung, Montage, Zoll etc.)
   */
  ancillaryAcquisitionCosts: string;
  /** Nachträgliche AK (spätere Verbesserungen) */
  subsequentAcquisitionCosts: string;
  /** Preisminderungen (Rabatte, Skonti) */
  acquisitionPriceReductions: string;
  /**
   * Gesamt-AK = purchaseAmountNet + ancillary + subsequent - reductions
   * Depreciation
   * Nutzungsdauer in Monaten (null = GWG Sofortabschreibung)
   */
  usefulLifeMonths: number | null;
  depreciationMethod: DepreciationMethod;
  /** Restwert am Ende der Nutzungsdauer */
  residualValue: string;
  /**
   * Degressive AfA (§7 Abs. 2 EStG)
   * z.B. "0.25" für 25% – max 25% oder 2,5× linear
   */
  degressiveRate: string | null;
  /** Zeitpunkt Wechsel degressive → linear (§7 Abs. 3) */
  switchedToLinearDate: Date | null;
  /** Sonderabschreibung (§7g Abs. 5 EStG) */
  sonderafaApplied: boolean;
  /** Betrag der Sonderabschreibung (max 20% AK) */
  sonderafaAmount: string | null;
  /** Jahr der Inanspruchnahme */
  sonderafaYear: number | null;
  /** Sammelposten (§6 Abs. 2a EStG) */
  sammelpostenPoolId: number | null;
  /**
   * Digital-AfA (BMF 2021)
   * Computer, Peripherie, Software
   */
  isDigitalAsset: boolean;
  /**
   * Gebäude-AfA (§7 Abs. 4/5, §7i, §7b EStG)
   * null für Nicht-Gebäude
   */
  buildingType: BuildingType | null;
  /** Baujahr */
  constructionYear: number | null;
  /** Bauantragsdatum */
  buildingApplicationDate: Date | null;
  /** Grundstückswert (NICHT abschreibbar – wird von AK abgezogen!) */
  landValue: string | null;
  /** Wohnfläche in m² (für §7b Prüfung) */
  buildingAreaSqm: string | null;
  /** Für §7b: ≤ 5.200€/m² */
  herstellungskostenPerSqm: string | null;
  /** Denkmalschutzbescheinigung */
  denkmalBescheinigung: boolean;
  /**
   * Betriebliche Nutzung
   * Für §7g: ≥ 90% erforderlich
   */
  businessUsePercentage: string;
  /**
   * AfA-Tabellen-Referenz (BMF)
   * BMF-Schlüssel z.B. "6.14.3.1"
   */
  afaTableKey: string | null;
  /** Klartext z.B. "Computer, Notebooks" */
  afaTableName: string | null;
  /** Input VAT (Vorsteuer) */
  inputVatAmount: string | null;
  inputVatRate: string | null;
  inputVatEligibility: InputVatEligibility;
  /** Vendor details */
  vendorName: string | null;
  vendorInvoiceNumber: string | null;
  /** References */
  expenseId: number | null;
  documentId: number | null;
  /**
   * Lifecycle
   * false = disposed/sold
   */
  isActive: boolean;
  disposedAt: Date | null;
  /** Veräußerungserlös */
  disposalAmount: string | null;
  /** Freitext-Begründung */
  disposalReason: string | null;
  /** Strukturierter Abgangsgrund */
  disposalType: AssetDisposalType | null;
  /** Restbuchwert bei Abgang (berechnet & gespeichert) */
  disposalBookValue: string | null;
  /** Buchgewinn (+) / Buchverlust (−) */
  disposalGainLoss: string | null;
  /**
   * Bilanz-Readiness (in EÜR-Modus noch ungenutzt – für spätere Bilanz-Erweiterung)
   * SKR03/SKR04 Sachkonto
   */
  accountNumber: string | null;
  /** z.B. "A.II.1" Sachanlagen */
  bilanzPosition: string | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** Soft Delete (GoBD compliance) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
};

export type BookkeepingAssetInsert = {
  /** Company */
  managingCompanyId: number;
  costCenterId?: number | null;
  /**
   * Identification
   * e.g., "MacBook Pro 16", "Firmenwagen VW Passat"
   */
  name: string;
  description?: string | null;
  /** Inventarnummer (auto-generiert oder manuell) */
  inventoryNumber?: string | null;
  assetType: BookkeepingAssetType;
  /** Purchase & Commissioning */
  purchaseDate: Date;
  /** Inbetriebnahmedatum (kann != purchaseDate!) */
  inServiceDate?: Date | null;
  /** Netto-Kaufpreis (Basispreis) */
  purchaseAmountNet: string;
  currency?: string;
  /**
   * Anschaffungskostenmodell (§255 HGB)
   * Anschaffungsnebenkosten (Lieferung, Montage, Zoll etc.)
   */
  ancillaryAcquisitionCosts?: string;
  /** Nachträgliche AK (spätere Verbesserungen) */
  subsequentAcquisitionCosts?: string;
  /** Preisminderungen (Rabatte, Skonti) */
  acquisitionPriceReductions?: string;
  /**
   * Gesamt-AK = purchaseAmountNet + ancillary + subsequent - reductions
   * Depreciation
   * Nutzungsdauer in Monaten (null = GWG Sofortabschreibung)
   */
  usefulLifeMonths?: number | null;
  depreciationMethod: DepreciationMethod;
  /** Restwert am Ende der Nutzungsdauer */
  residualValue?: string;
  /**
   * Degressive AfA (§7 Abs. 2 EStG)
   * z.B. "0.25" für 25% – max 25% oder 2,5× linear
   */
  degressiveRate?: string | null;
  /** Zeitpunkt Wechsel degressive → linear (§7 Abs. 3) */
  switchedToLinearDate?: Date | null;
  /** Sonderabschreibung (§7g Abs. 5 EStG) */
  sonderafaApplied?: boolean;
  /** Betrag der Sonderabschreibung (max 20% AK) */
  sonderafaAmount?: string | null;
  /** Jahr der Inanspruchnahme */
  sonderafaYear?: number | null;
  /** Sammelposten (§6 Abs. 2a EStG) */
  sammelpostenPoolId?: number | null;
  /**
   * Digital-AfA (BMF 2021)
   * Computer, Peripherie, Software
   */
  isDigitalAsset?: boolean;
  /**
   * Gebäude-AfA (§7 Abs. 4/5, §7i, §7b EStG)
   * null für Nicht-Gebäude
   */
  buildingType?: BuildingType | null;
  /** Baujahr */
  constructionYear?: number | null;
  /** Bauantragsdatum */
  buildingApplicationDate?: Date | null;
  /** Grundstückswert (NICHT abschreibbar – wird von AK abgezogen!) */
  landValue?: string | null;
  /** Wohnfläche in m² (für §7b Prüfung) */
  buildingAreaSqm?: string | null;
  /** Für §7b: ≤ 5.200€/m² */
  herstellungskostenPerSqm?: string | null;
  /** Denkmalschutzbescheinigung */
  denkmalBescheinigung?: boolean;
  /**
   * Betriebliche Nutzung
   * Für §7g: ≥ 90% erforderlich
   */
  businessUsePercentage?: string;
  /**
   * AfA-Tabellen-Referenz (BMF)
   * BMF-Schlüssel z.B. "6.14.3.1"
   */
  afaTableKey?: string | null;
  /** Klartext z.B. "Computer, Notebooks" */
  afaTableName?: string | null;
  /** Input VAT (Vorsteuer) */
  inputVatAmount?: string | null;
  inputVatRate?: string | null;
  inputVatEligibility?: InputVatEligibility;
  /** Vendor details */
  vendorName?: string | null;
  vendorInvoiceNumber?: string | null;
  /** References */
  expenseId?: number | null;
  documentId?: number | null;
  /**
   * Lifecycle
   * false = disposed/sold
   */
  isActive?: boolean;
  disposedAt?: Date | null;
  /** Veräußerungserlös */
  disposalAmount?: string | null;
  /** Freitext-Begründung */
  disposalReason?: string | null;
  /** Strukturierter Abgangsgrund */
  disposalType?: AssetDisposalType | null;
  /** Restbuchwert bei Abgang (berechnet & gespeichert) */
  disposalBookValue?: string | null;
  /** Buchgewinn (+) / Buchverlust (−) */
  disposalGainLoss?: string | null;
  /**
   * Bilanz-Readiness (in EÜR-Modus noch ungenutzt – für spätere Bilanz-Erweiterung)
   * SKR03/SKR04 Sachkonto
   */
  accountNumber?: string | null;
  /** z.B. "A.II.1" Sachanlagen */
  bilanzPosition?: string | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** Soft Delete (GoBD compliance) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
};

export type BookkeepingAssetId = number;

export type AssetCostComponent = {
  id: number;
  assetId: number;
  managingCompanyId: number;
  /** delivery | installation | customs | notary | grunderwerbsteuer | subsequent | reduction | other */
  componentType: string;
  description: string;
  /** positiv = Kosten, negativ = Minderung */
  amount: string;
  /** Datum des Kostenzugangs */
  date: Date;
  documentId: number | null;
  createdAt: Date;
  createdBy: number | null;
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
};

export type AssetCostComponentInsert = {
  assetId: number;
  managingCompanyId: number;
  /** delivery | installation | customs | notary | grunderwerbsteuer | subsequent | reduction | other */
  componentType: string;
  description: string;
  /** positiv = Kosten, negativ = Minderung */
  amount: string;
  /** Datum des Kostenzugangs */
  date: Date;
  documentId?: number | null;
  createdAt?: Date;
  createdBy?: number | null;
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
};

export type AssetCostComponentId = number;

export type SammelpostenPool = {
  id: number;
  managingCompanyId: number;
  fiscalYear: number;
  /** Summe aller WG im Pool */
  totalAmount: string;
  /** = totalAmount / 5 */
  annualDepreciation: string;
  /** Gesperrt nach Jahresabschluss */
  isClosed: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
};

export type SammelpostenPoolInsert = {
  managingCompanyId: number;
  fiscalYear: number;
  /** Summe aller WG im Pool */
  totalAmount?: string;
  /** = totalAmount / 5 */
  annualDepreciation?: string;
  /** Gesperrt nach Jahresabschluss */
  isClosed?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
};

export type SammelpostenPoolId = number;

export type DepreciationRecord = {
  id: number;
  managingCompanyId: number;
  /** Was wird abgeschrieben (entweder Asset ODER Sammelposten-Pool) */
  assetId: number | null;
  sammelpostenPoolId: number | null;
  /** Periode */
  fiscalYear: number;
  /** 1–12, null für Jahresbuchung */
  periodMonth: number | null;
  /** "monthly" | "annual" */
  periodType: string;
  /**
   * Beträge
   * Normale AfA
   */
  depreciationAmount: string;
  /** Sonder-AfA in dieser Periode */
  sonderafaAmount: string;
  /** depreciationAmount + sonderafaAmount */
  totalAmount: string;
  /** Kumuliert nach dieser Buchung */
  accumulatedDepreciation: string;
  /** Restbuchwert nach Buchung */
  bookValueAfter: string;
  /** Methoden-Tracking (Audit – welche Methode galt zum Buchungszeitpunkt) */
  depreciationMethod: DepreciationMethod;
  /** Bemessungsgrundlage */
  calculationBase: string;
  /** z.B. "0.25" für 25% degressive */
  rateApplied: string | null;
  /**
   * Status
   * Finalisiert/gesperrt
   */
  isBooked: boolean;
  bookedAt: Date | null;
  bookedBy: number | null;
  /**
   * Metadata
   * z.B. "Wechsel degressive → linear"
   */
  notes: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
};

export type DepreciationRecordInsert = {
  managingCompanyId: number;
  /** Was wird abgeschrieben (entweder Asset ODER Sammelposten-Pool) */
  assetId?: number | null;
  sammelpostenPoolId?: number | null;
  /** Periode */
  fiscalYear: number;
  /** 1–12, null für Jahresbuchung */
  periodMonth?: number | null;
  /** "monthly" | "annual" */
  periodType?: string;
  /**
   * Beträge
   * Normale AfA
   */
  depreciationAmount: string;
  /** Sonder-AfA in dieser Periode */
  sonderafaAmount?: string;
  /** depreciationAmount + sonderafaAmount */
  totalAmount: string;
  /** Kumuliert nach dieser Buchung */
  accumulatedDepreciation: string;
  /** Restbuchwert nach Buchung */
  bookValueAfter: string;
  /** Methoden-Tracking (Audit – welche Methode galt zum Buchungszeitpunkt) */
  depreciationMethod: DepreciationMethod;
  /** Bemessungsgrundlage */
  calculationBase: string;
  /** z.B. "0.25" für 25% degressive */
  rateApplied?: string | null;
  /**
   * Status
   * Finalisiert/gesperrt
   */
  isBooked?: boolean;
  bookedAt?: Date | null;
  bookedBy?: number | null;
  /**
   * Metadata
   * z.B. "Wechsel degressive → linear"
   */
  notes?: string | null;
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
};

export type DepreciationRecordId = number;

export type TaxParameter = {
  id: number;
  /** Hierarchischer Schluessel: z.B. "afa.gwg_threshold", "vat.standard_rate" */
  paramKey: string;
  scope: TaxParamScope;
  category: TaxParamCategory;
  /** Nur fuer scope=company – NULL bei globalen Parametern */
  managingCompanyId: number | null;
  /**
   * Wert als JSONB: z.B. {"amount": 800}, {"rate": 0.03},
   * oder strukturiert: {"steps": [{"years": 8, "rate": 0.09}, {"years": 4, "rate": 0.07}]}
   */
  value: any;
  /** Zeitliche Gueltigkeit (date statt timestamp – Steuerrecht operiert auf Kalendertagen) */
  validFrom: string;
  /** NULL = aktuell gueltig */
  validTo: string | null;
  /**
   * Rechtsgrundlage
   * z.B. "§6 Abs. 2 EStG"
   */
  legalRef: string | null;
  description: string | null;
  createdAt: Date;
  updatedBy: number | null;
};

export type TaxParameterInsert = {
  /** Hierarchischer Schluessel: z.B. "afa.gwg_threshold", "vat.standard_rate" */
  paramKey: string;
  scope?: TaxParamScope;
  category: TaxParamCategory;
  /** Nur fuer scope=company – NULL bei globalen Parametern */
  managingCompanyId?: number | null;
  /**
   * Wert als JSONB: z.B. {"amount": 800}, {"rate": 0.03},
   * oder strukturiert: {"steps": [{"years": 8, "rate": 0.09}, {"years": 4, "rate": 0.07}]}
   */
  value: any;
  /** Zeitliche Gueltigkeit (date statt timestamp – Steuerrecht operiert auf Kalendertagen) */
  validFrom: string;
  /** NULL = aktuell gueltig */
  validTo?: string | null;
  /**
   * Rechtsgrundlage
   * z.B. "§6 Abs. 2 EStG"
   */
  legalRef?: string | null;
  description?: string | null;
  createdAt?: Date;
  updatedBy?: number | null;
};

export type TaxParameterId = number;

export type TaxParameterHistory = {
  id: number;
  taxParameterId: number | null;
  paramKey: string;
  previousValue: any | null;
  newValue: any;
  /** z.B. "JStG 2027" */
  changeReason: string;
  changedBy: number | null;
  changedAt: Date;
};

export type TaxParameterHistoryInsert = {
  taxParameterId?: number | null;
  paramKey: string;
  previousValue?: any | null;
  newValue: any;
  /** z.B. "JStG 2027" */
  changeReason: string;
  changedBy?: number | null;
  changedAt?: Date;
};

export type IabEntry = {
  id: number;
  managingCompanyId: number;
  /**
   * Geplante Investition
   * z.B. "Firmenwagen VW Passat"
   */
  description: string;
  plannedAssetType: BookkeepingAssetType;
  /** Geplante AK */
  plannedAcquisitionCost: string;
  /** Max 50% (§7g Abs. 1 S. 1) */
  deductionRate: string;
  /** = plannedAK * rate (max 50%) */
  deductionAmount: string;
  /**
   * Zeitraum
   * Jahr in dem IAB geltend gemacht wurde
   */
  fiscalYearClaimed: number;
  /** Fristende: 3 Jahre nach Anschaffungsjahr-Ende */
  deadlineDate: string;
  status: IabStatus;
  /** Aufloesung bei Kauf */
  dissolvedAt: Date | null;
  linkedAssetId: number | null;
  /** Betrag um den AK des Assets reduziert wird */
  akReductionAmount: string | null;
  /** Rueckabwicklung bei Fristablauf */
  reversedAt: Date | null;
  /** = deductionAmount (wird zum Gewinn hinzugerechnet) */
  reversalAmount: string | null;
  /** 6% p.a. Zinsen (§7g Abs. 3 EStG) */
  reversalInterest: string | null;
  /** Jahr der Rueckabwicklung */
  reversalFiscalYear: number | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** Soft Delete (GoBD) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
};

export type IabEntryInsert = {
  managingCompanyId: number;
  /**
   * Geplante Investition
   * z.B. "Firmenwagen VW Passat"
   */
  description: string;
  plannedAssetType: BookkeepingAssetType;
  /** Geplante AK */
  plannedAcquisitionCost: string;
  /** Max 50% (§7g Abs. 1 S. 1) */
  deductionRate?: string;
  /** = plannedAK * rate (max 50%) */
  deductionAmount: string;
  /**
   * Zeitraum
   * Jahr in dem IAB geltend gemacht wurde
   */
  fiscalYearClaimed: number;
  /** Fristende: 3 Jahre nach Anschaffungsjahr-Ende */
  deadlineDate: string;
  status?: IabStatus;
  /** Aufloesung bei Kauf */
  dissolvedAt?: Date | null;
  linkedAssetId?: number | null;
  /** Betrag um den AK des Assets reduziert wird */
  akReductionAmount?: string | null;
  /** Rueckabwicklung bei Fristablauf */
  reversedAt?: Date | null;
  /** = deductionAmount (wird zum Gewinn hinzugerechnet) */
  reversalAmount?: string | null;
  /** 6% p.a. Zinsen (§7g Abs. 3 EStG) */
  reversalInterest?: string | null;
  /** Jahr der Rueckabwicklung */
  reversalFiscalYear?: number | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** Soft Delete (GoBD) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
};

export type IabEntryId = number;

export type EmployeeSearchItem = {
    employee: CompanyEmployee;
    company?: CustomerCompany;
    assignments: CompanyEmployeeAssignment[];
};

export type FullCompany = {
    company: CustomerCompany;
    employees: [CompanyEmployee, CompanyEmployeeAssignment][];
};

export type FullDocument = {
    document: Document;
    assignments: DocumentAssignment[];
};

export type FullSelectedCompany = {
    selection: UserSelectedCompany;
    company: ManagingCompany;
};

export type IncomeTaxSettingsInsert = Partial<Omit<IncomeTaxSettings, 'id' | 'createdAt'>> & { managingCompanyId: number };

export type IncomeTaxSettingsId = number;

export type EmploymentIncome = {
  id: number;
  managingCompanyId: number;
  taxYear: number;
  employerName: string;
  employerSteuernummer: string | null;
  employmentPeriodFrom: string | null;
  employmentPeriodTo: string | null;
  /**
   * Zeile 3-6: Einkommen & einbehaltene Steuern
   * Zeile 3
   */
  bruttoarbeitslohn: string;
  /** Zeile 4 */
  lohnsteuer: string;
  /** Zeile 5 */
  solidaritaetszuschlag: string;
  /** Zeile 6 */
  kirchensteuer: string;
  /**
   * Zeile 8: Versorgungsbezuege
   * Zeile 8
   */
  versorgungsbezuege: string | null;
  /**
   * Zeile 15: Lohnersatzleistungen (Progressionsvorbehalt)
   * Zeile 15
   */
  lohnersatzleistungen: string | null;
  /**
   * Zeile 17-18: Steuerfreie Fahrtkostenerstattungen
   * Zeile 17
   */
  steuerfreiFahrtkosten: string | null;
  /** Zeile 18 */
  pauschalBesteuertFahrtkosten: string | null;
  /**
   * Zeile 22a-27: Sozialversicherungsbeitraege
   * Zeile 22a (AG-Anteil Rentenversicherung)
   */
  agAnteilRV: string | null;
  /** Zeile 23a (AN-Anteil Rentenversicherung) */
  anAnteilRV: string | null;
  /** Zeile 24a/b (AG-Zuschuss Krankenversicherung) */
  agZuschussKV: string | null;
  /** Zeile 25 (AN-Beitraege Krankenversicherung) */
  anBeitraegeKV: string | null;
  /** Zeile 26 (AN-Beitraege Pflegeversicherung) */
  anBeitraegePV: string | null;
  /** Zeile 27 (AN-Beitraege Arbeitslosenversicherung) */
  anBeitraegeAV: string | null;
  /** Dokumentverweis (Scan der Lohnsteuerbescheinigung) */
  documentId: number | null;
  notes: string | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
};

export type EmploymentIncomeInsert = {
  managingCompanyId: number;
  taxYear: number;
  employerName: string;
  employerSteuernummer?: string | null;
  employmentPeriodFrom?: string | null;
  employmentPeriodTo?: string | null;
  /**
   * Zeile 3-6: Einkommen & einbehaltene Steuern
   * Zeile 3
   */
  bruttoarbeitslohn: string;
  /** Zeile 4 */
  lohnsteuer?: string;
  /** Zeile 5 */
  solidaritaetszuschlag?: string;
  /** Zeile 6 */
  kirchensteuer?: string;
  /**
   * Zeile 8: Versorgungsbezuege
   * Zeile 8
   */
  versorgungsbezuege?: string | null;
  /**
   * Zeile 15: Lohnersatzleistungen (Progressionsvorbehalt)
   * Zeile 15
   */
  lohnersatzleistungen?: string | null;
  /**
   * Zeile 17-18: Steuerfreie Fahrtkostenerstattungen
   * Zeile 17
   */
  steuerfreiFahrtkosten?: string | null;
  /** Zeile 18 */
  pauschalBesteuertFahrtkosten?: string | null;
  /**
   * Zeile 22a-27: Sozialversicherungsbeitraege
   * Zeile 22a (AG-Anteil Rentenversicherung)
   */
  agAnteilRV?: string | null;
  /** Zeile 23a (AN-Anteil Rentenversicherung) */
  anAnteilRV?: string | null;
  /** Zeile 24a/b (AG-Zuschuss Krankenversicherung) */
  agZuschussKV?: string | null;
  /** Zeile 25 (AN-Beitraege Krankenversicherung) */
  anBeitraegeKV?: string | null;
  /** Zeile 26 (AN-Beitraege Pflegeversicherung) */
  anBeitraegePV?: string | null;
  /** Zeile 27 (AN-Beitraege Arbeitslosenversicherung) */
  anBeitraegeAV?: string | null;
  /** Dokumentverweis (Scan der Lohnsteuerbescheinigung) */
  documentId?: number | null;
  notes?: string | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
};

export type EmploymentIncomeId = number;

export type Werbungskosten = {
  id: number;
  managingCompanyId: number;
  taxYear: number;
  type: WerbungskostenType;
  description: string;
  amount: string;
  /**
   * Typ-spezifische Details (JSONB fuer Flexibilitaet)
   * entfernungspauschale: { distanceKm: number, workDaysPerYear: number }
   * homeoffice: { daysWorkedFromHome: number }
   */
  details: any | null;
  documentId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type WerbungskostenInsert = {
  managingCompanyId: number;
  taxYear: number;
  type: WerbungskostenType;
  description: string;
  amount: string;
  /**
   * Typ-spezifische Details (JSONB fuer Flexibilitaet)
   * entfernungspauschale: { distanceKm: number, workDaysPerYear: number }
   * homeoffice: { daysWorkedFromHome: number }
   */
  details?: any | null;
  documentId?: number | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type WerbungskostenId = number;

export type Sonderausgaben = {
  id: number;
  managingCompanyId: number;
  taxYear: number;
  type: SonderausgabenType;
  description: string;
  amount: string;
  documentId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type SonderausgabenInsert = {
  managingCompanyId: number;
  taxYear: number;
  type: SonderausgabenType;
  description: string;
  amount: string;
  documentId?: number | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type SonderausgabenId = number;

export type Vorsorgeaufwendungen = {
  id: number;
  managingCompanyId: number;
  taxYear: number;
  type: VorsorgeType;
  description: string;
  amount: string;
  /** Wenn true: stammt aus Lohnsteuerbescheinigung (nicht doppelt zaehlen) */
  isFromEmployment: boolean;
  documentId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type VorsorgeaufwendungenInsert = {
  managingCompanyId: number;
  taxYear: number;
  type: VorsorgeType;
  description: string;
  amount: string;
  /** Wenn true: stammt aus Lohnsteuerbescheinigung (nicht doppelt zaehlen) */
  isFromEmployment?: boolean;
  documentId?: number | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type VorsorgeaufwendungenId = number;

export type Steuerminderungen = {
  id: number;
  managingCompanyId: number;
  taxYear: number;
  type: SteuerminderungType;
  description: string;
  /** Rechnungsbetrag / Arbeitskosten (NICHT der Steuerabzug) */
  amount: string;
  documentId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type SteuerminderungenInsert = {
  managingCompanyId: number;
  taxYear: number;
  type: SteuerminderungType;
  description: string;
  /** Rechnungsbetrag / Arbeitskosten (NICHT der Steuerabzug) */
  amount: string;
  documentId?: number | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type SteuerminderungenId = number;

export type IncomeTaxSettings = {
    id: number;
    managingCompanyId: number;
    bundesland: Bundesland | null;
    kirchensteuerpflichtig: boolean;
    kirchensteuerRate: string | null;
    gewerbesteuerHebesatz: string | null;
    isGewerbetreibend: boolean | null;
    anzahlKinder: number;
    hatSchwerbehinderung: boolean;
    gradDerBehinderung: number | null;
    quartalsVorauszahlungESt: string | null;
    quartalsVorauszahlungSoli: string | null;
    quartalsVorauszahlungKiSt: string | null;
    createdAt: Date;
    updatedAt: Date | null;
};

export type EStCalculationResult = {
    einkuenfteAusGewerbebetrieb: number;
    einkuenfteAusSelbstaendigerArbeit: number;
    einkuenfteAusNichtselbstaendigerArbeit: number;
    gesamtbetragDerEinkuenfte: number;
    abzugWerbungskosten: number;
    abzugSonderausgaben: number;
    abzugVorsorge: number;
    abzugAussergewoehnlicheBelastungen: number;
    zuVersteuerndesEinkommen: number;
    tariflicheEinkommensteuer: number;
    progressionsvorbehaltBetrag: number;
    estNachProgressionsvorbehalt: number;
    gewerbeertrag: number;
    gewerbesteuerMessbetrag: number;
    gewerbesteuer: number;
    gewstAnrechnung: number;
    estNachGewstAnrechnung: number;
    steuerminderung35a: number;
    estNachSteuerminderungen: number;
    solidaritaetszuschlag: number;
    kirchensteuer: number;
    gesamtSteuerlast: number;
    summeLohnsteuer: number;
    summeSoli: number;
    summeKirchensteuer: number;
    summeVorauszahlungen: number;
    vorauszahlungenESt: number;
    vorauszahlungenSoli: number;
    vorauszahlungenKiSt: number;
    /** "actual" = tatsächliche Zahlungen aus capitalMovements, "estimated" = Settings-basierte Schätzung */
    vorauszahlungenSource: "actual" | "estimated";
    nachzahlungESt: number;
    nachzahlungSoli: number;
    nachzahlungKiSt: number;
    nachzahlungGesamt: number;
    empfohleneQuartalsVorauszahlungESt: number;
    empfohleneQuartalsVorauszahlungSoli: number;
    empfohleneQuartalsVorauszahlungKiSt: number;
    accuracy: "full" | "partial";
    limitations: string[];
    legalDisclaimer: string;
};

export type VorauszahlungResult = {
    quarterlyESt: number;
    quarterlySoli: number;
    quarterlyKiSt: number;
    annualESt: number;
    annualSoli: number;
    annualKiSt: number;
    paymentDates: string[];
};

export type IncomeTaxSummary = {
    taxYear: number;
    zuVersteuerndesEinkommen: number;
    einkommensteuer: number;
    solidaritaetszuschlag: number;
    kirchensteuer: number;
    gewerbesteuer: number;
    gesamtSteuerlast: number;
    nachzahlungGesamt: number;
    vorauszahlungen: {
        est: number;
        soli: number;
        kist: number;
        /** "actual" = tatsächliche Zahlungen aus capitalMovements, "estimated" = Settings-basierte Schätzung */
        source: "actual" | "estimated";
    };
    empfohleneQuartalsVorauszahlung: {
        est: number;
        soli: number;
        kist: number;
    };
    accuracy: "full" | "partial";
    limitations: string[];
    legalDisclaimer: string;
};

export type CapitalMovement = {
  id: number;
  /** Mandant */
  managingCompanyId: number;
  /**
   * Klassifikation
   * withdrawal | deposit
   */
  type: CapitalMovementType;
  /** Detailkategorie */
  subType: CapitalMovementSubType;
  /** Betrag (immer positiv, Richtung ergibt sich aus type) */
  amount: string;
  currency: string;
  /** Beschreibung & Beleg */
  description: string;
  documentId: number | null;
  /** Steuerliches Jahr (für Kapitalkonto-Auswertung / Anlage EÜR) */
  taxYear: number;
  /** Datum der Bewegung + EÜR-autoritatives Datum (Abfluss-/Zuflussprinzip §4 Abs. 3 EStG) */
  movementDate: Date;
  eurEffectiveDate: Date | null;
  /** Payment-Status (gleicher Flow wie Expenses: unmatched → fully_matched) */
  paymentStatus: BookkeepingPaymentStatus;
  cashConfirmedAt: Date | null;
  cashConfirmedBy: number | null;
  /** Steuerzahlungs-Metadaten (nur für est_payment, soli_payment, etc.) */
  taxPaymentMetadata: any | null;
  /**
   * Erwartete Struktur: {
   * finanzamtName?: string,
   * steuernummer?: string,
   * vorauszahlungQuarter?: "Q1" | "Q2" | "Q3" | "Q4",
   * vorauszahlungYear?: number,
   * bescheidDate?: string,  // Datum des Steuerbescheids (bei Erstattungen)
   * bescheidYear?: number,  // Veranlagungsjahr des Bescheids
   * }
   * Bestätigung
   */
  isConfirmed: boolean;
  notes: string | null;
  /** Metadaten */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** GoBD Soft-Delete (kein Hard-Delete) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
  /** GoBD Storno (Gegenbuchung, kein Löschen) */
  reversalOfId: number | null;
  isReversed: boolean;
  reversedAt: Date | null;
  reversedBy: number | null;
};

export type CapitalMovementInsert = {
  /** Mandant */
  managingCompanyId: number;
  /**
   * Klassifikation
   * withdrawal | deposit
   */
  type: CapitalMovementType;
  /** Detailkategorie */
  subType: CapitalMovementSubType;
  /** Betrag (immer positiv, Richtung ergibt sich aus type) */
  amount: string;
  currency?: string;
  /** Beschreibung & Beleg */
  description: string;
  documentId?: number | null;
  /** Steuerliches Jahr (für Kapitalkonto-Auswertung / Anlage EÜR) */
  taxYear: number;
  /** Datum der Bewegung + EÜR-autoritatives Datum (Abfluss-/Zuflussprinzip §4 Abs. 3 EStG) */
  movementDate: Date;
  eurEffectiveDate?: Date | null;
  /** Payment-Status (gleicher Flow wie Expenses: unmatched → fully_matched) */
  paymentStatus?: BookkeepingPaymentStatus;
  cashConfirmedAt?: Date | null;
  cashConfirmedBy?: number | null;
  /** Steuerzahlungs-Metadaten (nur für est_payment, soli_payment, etc.) */
  taxPaymentMetadata?: any | null;
  /**
   * Erwartete Struktur: {
   * finanzamtName?: string,
   * steuernummer?: string,
   * vorauszahlungQuarter?: "Q1" | "Q2" | "Q3" | "Q4",
   * vorauszahlungYear?: number,
   * bescheidDate?: string,  // Datum des Steuerbescheids (bei Erstattungen)
   * bescheidYear?: number,  // Veranlagungsjahr des Bescheids
   * }
   * Bestätigung
   */
  isConfirmed?: boolean;
  notes?: string | null;
  /** Metadaten */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** GoBD Soft-Delete (kein Hard-Delete) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
  /** GoBD Storno (Gegenbuchung, kein Löschen) */
  reversalOfId?: number | null;
  isReversed?: boolean;
  reversedAt?: Date | null;
  reversedBy?: number | null;
};


// ============================================================================
// OAUTH2 TYPES
// ============================================================================

export enum OAuth2Scope {
  INVOICES_READ = "invoices:read",
  INVOICES_WRITE = "invoices:write",
  INVOICES_DELETE = "invoices:delete",
  INVOICES_PUBLISH = "invoices:publish",
  EXPENSES_READ = "expenses:read",
  EXPENSES_WRITE = "expenses:write",
  EXPENSES_DELETE = "expenses:delete",
  EXPENSES_ANALYZE = "expenses:analyze",
  REVENUES_READ = "revenues:read",
  REVENUES_WRITE = "revenues:write",
  REVENUES_DELETE = "revenues:delete",
  PAYMENTS_READ = "payments:read",
  PAYMENTS_WRITE = "payments:write",
  DOCUMENTS_READ = "documents:read",
  DOCUMENTS_WRITE = "documents:write",
  DOCUMENTS_DELETE = "documents:delete",
  COMPANIES_READ = "companies:read",
  COMPANIES_WRITE = "companies:write",
  COMPANIES_DELETE = "companies:delete",
  EMPLOYEES_READ = "employees:read",
  EMPLOYEES_WRITE = "employees:write",
  EMPLOYEES_DELETE = "employees:delete",
  COST_CENTERS_READ = "cost_centers:read",
  COST_CENTERS_WRITE = "cost_centers:write",
  REPORTS_READ = "reports:read",
  ADMIN_SETTINGS = "admin:settings",
  ADMIN_USERS = "admin:users",
  OAUTH2_CLIENTS_READ = "oauth2:clients:read",
  OAUTH2_CLIENTS_WRITE = "oauth2:clients:write"
}

export type OAuth2ScopeValue = `${OAuth2Scope}`;

export const ALL_OAUTH2_SCOPES = [
  "invoices:read",
  "invoices:write",
  "invoices:delete",
  "invoices:publish",
  "expenses:read",
  "expenses:write",
  "expenses:delete",
  "expenses:analyze",
  "revenues:read",
  "revenues:write",
  "revenues:delete",
  "payments:read",
  "payments:write",
  "documents:read",
  "documents:write",
  "documents:delete",
  "companies:read",
  "companies:write",
  "companies:delete",
  "employees:read",
  "employees:write",
  "employees:delete",
  "cost_centers:read",
  "cost_centers:write",
  "reports:read",
  "admin:settings",
  "admin:users",
  "oauth2:clients:read",
  "oauth2:clients:write",
] as const satisfies readonly OAuth2ScopeValue[];

export const SCOPE_DESCRIPTIONS: Record<OAuth2ScopeValue, string> = {
    [OAuth2Scope.INVOICES_READ]: "Rechnungen lesen",
    [OAuth2Scope.INVOICES_WRITE]: "Rechnungen erstellen und bearbeiten",
    [OAuth2Scope.INVOICES_DELETE]: "Rechnungen loeschen",
    [OAuth2Scope.INVOICES_PUBLISH]: "Rechnungen veroeffentlichen und versenden",

    [OAuth2Scope.EXPENSES_READ]: "Ausgaben lesen",
    [OAuth2Scope.EXPENSES_WRITE]: "Ausgaben erstellen und bearbeiten",
    [OAuth2Scope.EXPENSES_DELETE]: "Ausgaben loeschen",
    [OAuth2Scope.EXPENSES_ANALYZE]: "Belege mit OCR analysieren",

    [OAuth2Scope.REVENUES_READ]: "Einnahmen lesen",
    [OAuth2Scope.REVENUES_WRITE]: "Einnahmen erstellen und bearbeiten",
    [OAuth2Scope.REVENUES_DELETE]: "Einnahmen loeschen",

    [OAuth2Scope.PAYMENTS_READ]: "Zahlungen lesen",
    [OAuth2Scope.PAYMENTS_WRITE]: "Zahlungen erstellen und bearbeiten",

    [OAuth2Scope.DOCUMENTS_READ]: "Dokumente lesen",
    [OAuth2Scope.DOCUMENTS_WRITE]: "Dokumente hochladen",
    [OAuth2Scope.DOCUMENTS_DELETE]: "Dokumente loeschen",

    [OAuth2Scope.COMPANIES_READ]: "Firmen lesen",
    [OAuth2Scope.COMPANIES_WRITE]: "Firmen erstellen und bearbeiten",
    [OAuth2Scope.COMPANIES_DELETE]: "Firmen loeschen",

    [OAuth2Scope.EMPLOYEES_READ]: "Mitarbeiter lesen",
    [OAuth2Scope.EMPLOYEES_WRITE]: "Mitarbeiter erstellen und bearbeiten",
    [OAuth2Scope.EMPLOYEES_DELETE]: "Mitarbeiter loeschen",

    [OAuth2Scope.COST_CENTERS_READ]: "Kostenstellen lesen",
    [OAuth2Scope.COST_CENTERS_WRITE]: "Kostenstellen erstellen und bearbeiten",

    [OAuth2Scope.REPORTS_READ]: "Berichte und Statistiken lesen",

    [OAuth2Scope.ADMIN_SETTINGS]: "App-Einstellungen verwalten",
    [OAuth2Scope.ADMIN_USERS]: "Benutzer verwalten",
    [OAuth2Scope.OAUTH2_CLIENTS_READ]: "OAuth2-Clients lesen und pruefen",
    [OAuth2Scope.OAUTH2_CLIENTS_WRITE]: "OAuth2-Clients verwalten, anlegen und rotieren",

} as const;

export const SCOPE_GROUPS: Partial<Record<string, readonly OAuth2ScopeValue[]>> = {
    "Rechnungen": [
        OAuth2Scope.INVOICES_READ,
        OAuth2Scope.INVOICES_WRITE,
        OAuth2Scope.INVOICES_DELETE,
        OAuth2Scope.INVOICES_PUBLISH,
    ],
    "Ausgaben": [
        OAuth2Scope.EXPENSES_READ,
        OAuth2Scope.EXPENSES_WRITE,
        OAuth2Scope.EXPENSES_DELETE,
        OAuth2Scope.EXPENSES_ANALYZE,
    ],
    "Einnahmen": [
        OAuth2Scope.REVENUES_READ,
        OAuth2Scope.REVENUES_WRITE,
        OAuth2Scope.REVENUES_DELETE,
    ],
    "Zahlungen": [
        OAuth2Scope.PAYMENTS_READ,
        OAuth2Scope.PAYMENTS_WRITE,
    ],
    "Dokumente": [
        OAuth2Scope.DOCUMENTS_READ,
        OAuth2Scope.DOCUMENTS_WRITE,
        OAuth2Scope.DOCUMENTS_DELETE,
    ],
    "Firmen & Mitarbeiter": [
        OAuth2Scope.COMPANIES_READ,
        OAuth2Scope.COMPANIES_WRITE,
        OAuth2Scope.COMPANIES_DELETE,
        OAuth2Scope.EMPLOYEES_READ,
        OAuth2Scope.EMPLOYEES_WRITE,
        OAuth2Scope.EMPLOYEES_DELETE,
    ],
    "Verwaltung": [
        OAuth2Scope.COST_CENTERS_READ,
        OAuth2Scope.COST_CENTERS_WRITE,
        OAuth2Scope.REPORTS_READ,
    ],
    "Admin": [
        OAuth2Scope.ADMIN_SETTINGS,
        OAuth2Scope.ADMIN_USERS,
        OAuth2Scope.OAUTH2_CLIENTS_READ,
        OAuth2Scope.OAUTH2_CLIENTS_WRITE,
    ],
} as const;

export type OAuth2Client = {
  id: number;
  /** Client identification */
  clientId: string;
  clientSecretHash: string;
  /** HMAC-SHA256 */
  clientSecretFingerprint: string;
  /** For secret rotation */
  pepperVersion: number;
  /**
   * Das abgeloeste Geheimnis, befristet weiter gueltig (retireClientSecret). Erst rotieren,
   * dann in Ruhe ausrollen; scheitert das Ausrollen, rollbackClientSecret statt Ausfall.
   * Der Abdruck steht daneben, weil die Anmeldung ueber ihn vorselektiert.
   */
  previousClientSecretHash: string | null;
  previousClientSecretFingerprint: string | null;
  previousPepperVersion: number | null;
  previousClientSecretExpiresAt: Date | null;
  /**
   * Metadata
   * e.g., "Production API Client"
   */
  name: string;
  /** e.g., "Main backend service for production" */
  description: string | null;
  /**
   * Tenant isolation (only used when OAUTH2_TENANT_CONFIG.enabled = true)
   * Apps with tenants set the real ID; apps without get the default 0.
   * FK constraint is added by app-specific migration, NOT in Drizzle schema (keeps file syncable).
   */
  managingCompanyId: number;
  /** Default cost center for operations */
  defaultCostCenter: number | null;
  /** JSON array of allowed cost center IDs (null = all) */
  availableCostCenters: string | null;
  /**
   * Access control
   * viewer | editor | admin
   */
  role: string;
  /** JSON array: ["invoices:read", "invoices:write", "expenses:read"] */
  scopes: string | null;
  /**
   * Token settings
   * Seconds (1 hour default)
   */
  accessTokenTtl: number;
  /** Seconds (30 days default) */
  refreshTokenTtl: number;
  /** Max concurrent refresh tokens */
  maxTokensPerClient: number;
  /**
   * Security
   * JSON array of whitelisted IPs (null = any)
   */
  allowedIps: string | null;
  /** JSON array of whitelisted origins for CORS */
  allowedOrigins: string | null;
  /** Requests per minute */
  rateLimitPerMinute: number;
  /** Requests per hour */
  rateLimitPerHour: number;
  /** Status */
  isActive: boolean;
  revokedAt: Date | null;
  validFrom: Date;
  /** null = no expiry */
  validTo: Date | null;
  /**
   * Audit
   * NodeBillUser ID who created this client
   */
  createdBy: number;
  createdAt: Date;
  updatedAt: Date | null;
  /** Track last successful authentication */
  lastUsedAt: Date | null;
  /**
   * Systemkonto: ist der Client an einen Nutzer gebunden (users.isSystemAccount), handelt
   * jedes Token dieses Clients als dieser Nutzer (Claim actorUserId). Der Fremdschluessel
   * auf users.id steht nicht im Schema, um den Import-Kreis zu vermeiden.
   */
  systemUserId: number | null;
  /** Spalten der App (src/routes/oauth2/individual/oauth2-client.columns.ts). */
  lastRotatedAt: Date | null;
  supersededAt: Date | null;
};

export type OAuth2ClientInsert = {
  /** Client identification */
  clientId: string;
  clientSecretHash: string;
  /** HMAC-SHA256 */
  clientSecretFingerprint: string;
  /** For secret rotation */
  pepperVersion?: number;
  /**
   * Das abgeloeste Geheimnis, befristet weiter gueltig (retireClientSecret). Erst rotieren,
   * dann in Ruhe ausrollen; scheitert das Ausrollen, rollbackClientSecret statt Ausfall.
   * Der Abdruck steht daneben, weil die Anmeldung ueber ihn vorselektiert.
   */
  previousClientSecretHash?: string | null;
  previousClientSecretFingerprint?: string | null;
  previousPepperVersion?: number | null;
  previousClientSecretExpiresAt?: Date | null;
  /**
   * Metadata
   * e.g., "Production API Client"
   */
  name: string;
  /** e.g., "Main backend service for production" */
  description?: string | null;
  /**
   * Tenant isolation (only used when OAUTH2_TENANT_CONFIG.enabled = true)
   * Apps with tenants set the real ID; apps without get the default 0.
   * FK constraint is added by app-specific migration, NOT in Drizzle schema (keeps file syncable).
   */
  managingCompanyId?: number;
  /** Default cost center for operations */
  defaultCostCenter?: number | null;
  /** JSON array of allowed cost center IDs (null = all) */
  availableCostCenters?: string | null;
  /**
   * Access control
   * viewer | editor | admin
   */
  role?: string;
  /** JSON array: ["invoices:read", "invoices:write", "expenses:read"] */
  scopes?: string | null;
  /**
   * Token settings
   * Seconds (1 hour default)
   */
  accessTokenTtl?: number;
  /** Seconds (30 days default) */
  refreshTokenTtl?: number;
  /** Max concurrent refresh tokens */
  maxTokensPerClient?: number;
  /**
   * Security
   * JSON array of whitelisted IPs (null = any)
   */
  allowedIps?: string | null;
  /** JSON array of whitelisted origins for CORS */
  allowedOrigins?: string | null;
  /** Requests per minute */
  rateLimitPerMinute?: number;
  /** Requests per hour */
  rateLimitPerHour?: number;
  /** Status */
  isActive?: boolean;
  revokedAt?: Date | null;
  validFrom?: Date;
  /** null = no expiry */
  validTo?: Date | null;
  /**
   * Audit
   * NodeBillUser ID who created this client
   */
  createdBy: number;
  createdAt?: Date;
  updatedAt?: Date | null;
  /** Track last successful authentication */
  lastUsedAt?: Date | null;
  /**
   * Systemkonto: ist der Client an einen Nutzer gebunden (users.isSystemAccount), handelt
   * jedes Token dieses Clients als dieser Nutzer (Claim actorUserId). Der Fremdschluessel
   * auf users.id steht nicht im Schema, um den Import-Kreis zu vermeiden.
   */
  systemUserId?: number | null;
  /** Spalten der App (src/routes/oauth2/individual/oauth2-client.columns.ts). */
  lastRotatedAt?: Date | null;
  supersededAt?: Date | null;
};

export type OAuth2ClientId = OAuth2Client["id"];

export type OAuth2RefreshToken = {
  id: number;
  clientId: number;
  /**
   * Token identification
   * Argon2 hash of refresh token
   */
  tokenHash: string;
  /** HMAC-SHA256 for fast lookup */
  tokenFingerprint: string;
  /** JWT ID (unique identifier) */
  jti: string;
  /**
   * Metadata
   * Space-separated scopes granted to this token
   */
  scope: string | null;
  issuedAt: Date;
  expiresAt: Date;
  /** Security */
  isRevoked: boolean;
  revokedAt: Date | null;
  revokedReason: string | null;
  /** Tracking */
  lastUsedAt: Date | null;
  usageCount: number;
  /** IPv4 or IPv6 */
  ipAddress: string | null;
  userAgent: string | null;
};

export type OAuth2RefreshTokenInsert = {
  clientId: number;
  /**
   * Token identification
   * Argon2 hash of refresh token
   */
  tokenHash: string;
  /** HMAC-SHA256 for fast lookup */
  tokenFingerprint: string;
  /** JWT ID (unique identifier) */
  jti: string;
  /**
   * Metadata
   * Space-separated scopes granted to this token
   */
  scope?: string | null;
  issuedAt?: Date;
  expiresAt: Date;
  /** Security */
  isRevoked?: boolean;
  revokedAt?: Date | null;
  revokedReason?: string | null;
  /** Tracking */
  lastUsedAt?: Date | null;
  usageCount?: number;
  /** IPv4 or IPv6 */
  ipAddress?: string | null;
  userAgent?: string | null;
};

export type OAuth2AuditLog = {
  id: number;
  clientId: number | null;
  /**
   * Request details
   * client_credentials | refresh_token
   */
  grantType: string;
  /** Requested scope */
  scope: string | null;
  success: boolean;
  /** invalid_client | invalid_grant | etc. */
  errorCode: string | null;
  errorDescription: string | null;
  /** Security context */
  ipAddress: string | null;
  userAgent: string | null;
  timestamp: Date;
  /**
   * Rate limiting metadata
   * Requests in current window
   */
  requestCount: number | null;
  rateLimitExceeded: boolean;
};

export type OAuth2AuditLogInsert = {
  clientId?: number | null;
  /**
   * Request details
   * client_credentials | refresh_token
   */
  grantType: string;
  /** Requested scope */
  scope?: string | null;
  success: boolean;
  /** invalid_client | invalid_grant | etc. */
  errorCode?: string | null;
  errorDescription?: string | null;
  /** Security context */
  ipAddress?: string | null;
  userAgent?: string | null;
  timestamp?: Date;
  /**
   * Rate limiting metadata
   * Requests in current window
   */
  requestCount?: number | null;
  rateLimitExceeded?: boolean;
};

export type UnsensitiveOAuth2Client = Omit<
    OAuth2Client,
    | "clientSecretHash"
    | "clientSecretFingerprint"
    | "pepperVersion"
    | "previousClientSecretHash"
    | "previousClientSecretFingerprint"
    | "previousPepperVersion"
> & { hasPreviousSecret?: boolean };



// ============================================================================
// API KEY TYPES
// ============================================================================

export type ApiKey = {
  id: number;
  /**
   * The person who minted the key. Without a tenant column this is also the owner. Set null on user delete
   * so we don't cascade-delete keys when the creator's account is removed.
   */
  createdByUserId: number | null;
  /**
   * Display metadata
   * e.g. "Production CI", "Zapier integration"
   */
  name: string;
  description: string | null;
  /**
   * Visible prefix shown in UI lists (e.g. "qr_live_8k2abc34").
   * Stored separately so list endpoints never need to touch the hash.
   */
  keyPrefix: string;
  /** "live" | "test" */
  environment: string;
  /** Security: Argon2id hash (irreversible) */
  apiKeyHash: string;
  /** Performance: HMAC-SHA256 fingerprint (pepper-bound) for fast lookups */
  apiKeyFingerprint: string;
  /** Pepper rotation: which version produced the fingerprint above */
  pepperVersion: number;
  /**
   * Authorization — the key's effective role inside its tenant. Must
   * be <= creator's role at creation time (use-case enforces).
   * `owner` is intentionally not allowed; a leaked key must never be
   * able to transfer ownership.
   * viewer | editor | admin
   */
  role: string;
  /** OAuth2Scope values */
  scopes: string[];
  /**
   * Security policy (all optional)
   * null = any IP
   */
  allowedIps: string[] | null | null;
  /** null = no per-key limit */
  rateLimitPerMinute: number | null;
  /** null = no per-key limit */
  rateLimitPerHour: number | null;
  /** Lifecycle */
  isActive: boolean;
  validFrom: Date;
  /** null = no expiry */
  validTo: Date | null;
  revokedAt: Date | null;
  revokedReason: string | null;
  /** Usage tracking */
  lastUsedAt: Date | null;
  lastUsedIp: string | null;
  usageCount: number;
  /** Audit */
  createdAt: Date;
  updatedAt: Date | null;
};

export type ApiKeyInsert = {
  /**
   * The person who minted the key. Without a tenant column this is also the owner. Set null on user delete
   * so we don't cascade-delete keys when the creator's account is removed.
   */
  createdByUserId?: number | null;
  /**
   * Display metadata
   * e.g. "Production CI", "Zapier integration"
   */
  name: string;
  description?: string | null;
  /**
   * Visible prefix shown in UI lists (e.g. "qr_live_8k2abc34").
   * Stored separately so list endpoints never need to touch the hash.
   */
  keyPrefix: string;
  /** "live" | "test" */
  environment?: string;
  /** Security: Argon2id hash (irreversible) */
  apiKeyHash: string;
  /** Performance: HMAC-SHA256 fingerprint (pepper-bound) for fast lookups */
  apiKeyFingerprint: string;
  /** Pepper rotation: which version produced the fingerprint above */
  pepperVersion?: number;
  /**
   * Authorization — the key's effective role inside its tenant. Must
   * be <= creator's role at creation time (use-case enforces).
   * `owner` is intentionally not allowed; a leaked key must never be
   * able to transfer ownership.
   * viewer | editor | admin
   */
  role?: string;
  /** OAuth2Scope values */
  scopes?: string[];
  /**
   * Security policy (all optional)
   * null = any IP
   */
  allowedIps?: string[] | null | null;
  /** null = no per-key limit */
  rateLimitPerMinute?: number | null;
  /** null = no per-key limit */
  rateLimitPerHour?: number | null;
  /** Lifecycle */
  isActive?: boolean;
  validFrom?: Date;
  /** null = no expiry */
  validTo?: Date | null;
  revokedAt?: Date | null;
  revokedReason?: string | null;
  /** Usage tracking */
  lastUsedAt?: Date | null;
  lastUsedIp?: string | null;
  usageCount?: number;
  /** Audit */
  createdAt?: Date;
  updatedAt?: Date | null;
};

export type ApiKeyId = ApiKey["id"];

export type ApiKeyAuditLogEntry = {
  id: number;
  apiKeyId: number | null;
  /** Outcome */
  success: boolean;
  errorCode: string | null;
  /**
   * invalid_key | revoked | expired | ip_not_allowed | rate_limited |
   * insufficient_scope | insufficient_role
   */
  errorDescription: string | null;
  /** Request context */
  method: string | null;
  path: string | null;
  requestedScope: string | null;
  /** Security context */
  ipAddress: string | null;
  userAgent: string | null;
  timestamp: Date;
  /** Mandant, denormalisiert, damit das Log auch nach dem Loeschen des Schluessels filterbar bleibt. */
  workspaceId: number | null;
};

export type ApiKeyAuditLogInsert = {
  apiKeyId?: number | null;
  /** Outcome */
  success: boolean;
  errorCode?: string | null;
  /**
   * invalid_key | revoked | expired | ip_not_allowed | rate_limited |
   * insufficient_scope | insufficient_role
   */
  errorDescription?: string | null;
  /** Request context */
  method?: string | null;
  path?: string | null;
  requestedScope?: string | null;
  /** Security context */
  ipAddress?: string | null;
  userAgent?: string | null;
  timestamp?: Date;
  /** Mandant, denormalisiert, damit das Log auch nach dem Loeschen des Schluessels filterbar bleibt. */
  workspaceId?: number | null;
};

export type UnsensitiveApiKey = Omit<ApiKey, "apiKeyHash" | "apiKeyFingerprint" | "pepperVersion">;

export type ApiKeyRole = "viewer" | "editor" | "admin";

export type ApiKeyEnvironment = "live" | "test";

export type ApiKeyStatus = "active" | "pending" | "expired" | "inactive" | "revoked";

export type ApiKeyView = Omit<UnsensitiveApiKey, "role" | "environment" | "scopes" | "allowedIps"> & {
        role: ApiKeyRole;
        environment: ApiKeyEnvironment;
        scopes: OAuth2ScopeValue[];
        allowedIps: string[] | null;
        status: ApiKeyStatus;
    };

export type ApiKeyDenyCode = | "INSUFFICIENT_ROLE"      // caller's role too low
    | "PLAN_LIMIT_REACHED"     // tenant has hit its api_keys cap
    | "WORKSPACE_INACTIVE"     // tenant suspended / billing issue
    | "NOT_AUTHENTICATED"      // no session — only ever from capabilities pre-flight
    | "ROLE_TOO_HIGH"          // caller cannot mint a key with role > own role
    | "API_KEY_NOT_FOUND"      // key id does not belong to the caller's tenant
    | "VALIDATION_FAILED"      // body/params didn't match schema
    | "INVALID_SCOPE"          // scope not in OAuth2Scope enum
    | "INVALID_IP";

export type ApiKeyDenyReason = {
    code: ApiKeyDenyCode;
    message: string;
    /** Optional extra context — e.g. { required: "admin", actual: "editor" } */
    details?: Record<string, string | number | boolean | null>;
};

export type ApiKeyCapabilities = {
    canCreate: boolean;
    canList: boolean;
    canRevoke: boolean;
    canDelete: boolean;
    /** Role of the caller in the tenant — drives most checks. */
    role: "owner" | "admin" | "editor" | "viewer" | null;
    /**
     * Capacity from the tenant hook (`maxActiveKeys`). `max=null` = unlimited.
     * `remaining=null` = unlimited.
     */
    limits: {
        max: number | null;
        current: number;
        remaining: number | null;
    };
    /** Set only for actions where the corresponding `can*` is `false`. */
    reasons: {
        create?: ApiKeyDenyReason;
        list?: ApiKeyDenyReason;
        revoke?: ApiKeyDenyReason;
        delete?: ApiKeyDenyReason;
    };
};



// ============================================================================
// WEBHOOK PAYLOADS
// ============================================================================

export type WebhookPayloadStripe = {
    provider: "stripe";
    id: string;
    type: string;
    api_version?: string | null;
    created: number;
    livemode?: boolean;
    request?: { id?: string | null; idempotency_key?: string | null } | null;
    data: {
        object: Record<string, unknown>;
        previous_attributes?: Record<string, unknown>;
    };
};

export type WebhookPayloadPayPal = {
    provider: "paypal";
    id: string;
    event_type: string;
    create_time: string;
    resource_type: string;
    resource: Record<string, unknown>;
    summary?: string;
};

export type WebhookPayloadPrintful = {
    provider: "printful";
    type: string;
    created: number;
    retries?: number;
    store: number;
    data: Record<string, unknown>;
};

export type WebhookPayloadGeneric = {
    provider: string;
    raw: Record<string, unknown>;
};

export type WebhookPayload = | WebhookPayloadStripe
    | WebhookPayloadPayPal
    | WebhookPayloadPrintful
    | WebhookPayloadGeneric;
