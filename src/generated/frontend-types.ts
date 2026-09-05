// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:16.364Z
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
  externalUserId: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type UserInsert = {
  externalUserId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type NodeBillUserId = number;

export type NodeBillUserActivity = {
  userId: number;
  activityDate: string;
  /** Date of activity (YYYY-MM-DD) */
  firstActivityAt: Date;
  /** First request of the day */
  lastActivityAt: Date;
  /** Last request of the day (updated continuously) */
  requestCount?: number;
  /** Total requests this day */
  requests?: any;
  /** Array of request details (max 50, FIFO) */
  createdAt: Date;
  /** When this daily record was created */
  updatedAt: Date;
};

export type NodeBillUserActivityId = number;

export type AppSettings = {
  key: string;
  value: string;
  allowedValues?: string | null;
  /** Comma-separated list of allowed values (for enum-like settings) */
  type: AppSettingsType;
  description?: string | null;
  createdAt: Date;
};

export type AppSettingsInsert = {
  key: string;
  value: string;
  allowedValues?: string | null;
  /** Comma-separated list of allowed values (for enum-like settings) */
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
  provider: string;
  /** z. B. "Stripe", "PayPal", "Printful" */
  eventType: string;
  externalId: string;
  payload: any;
  /** Raw payload as received from the provider */
  processed: boolean;
  status: WebhookStatus;
  processMessage: string | null;
  originUrl: string | null;
  createdAt: Date;
  processedAt: Date | null;
  userAgent: string | null;
  /** User-Agent Header */
  signature: string | null;
  /** Webhook signature für Verifizierung */
  retryCount: number;
  /** Anzahl der Retry-Versuche */
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
  id: string;
  /** String format: WF_<timestamp>_<hash> */
  workflowType: string;
  payload: any;
  status: WorkflowQueueStatus;
  attemptCount: number;
  lastAttemptAt: Date | null;
  tasks: any;
  /** Array of tasks with expected duration */
  currentTask: number;
  /** Current task being processed */
  taskResults: any;
  /** Array of task results/details (logs go here, so we can see everything..) */
  createdAt: Date;
  scheduledAt: Date | null;
  updatedAt: Date | null;
  priority: number;
  /** Higher number = higher priority */
  userId: number | null;
  createdBy: WorkflowCreatedBy;
  /** Abort & Cleanup System */
  abortRequested: boolean;
  /** User requested abort */
  cleanupHandler: string | null;
  /** Cleanup function identifier */
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

export enum NodeBillAppSettingsKey {
  ApplicationName = "application_name",
  BillingPlanLimitManagingCompaniesBase = "billing_plan_limit_managing_companies_base",
  BillingPlanLimitManagingCompaniesPremium = "billing_plan_limit_managing_companies_premium",
  BillingPlanLimitManagingCompaniesEnterprise = "billing_plan_limit_managing_companies_enterprise",
  BillingPlanLimitManagingCompaniesLegacy = "billing_plan_limit_managing_companies_legacy",
  BillingPlanLimitDocumentStorageGbBase = "billing_plan_limit_document_storage_gb_base",
  BillingPlanLimitDocumentStorageGbPremium = "billing_plan_limit_document_storage_gb_premium",
  BillingPlanLimitDocumentStorageGbEnterprise = "billing_plan_limit_document_storage_gb_enterprise",
  BillingPlanLimitDocumentStorageGbLegacy = "billing_plan_limit_document_storage_gb_legacy",
  BillingStorageProviderCostEurPerGb = "billing_storage_provider_cost_eur_per_gb",
  BillingStorageCustomerPriceEurPerGb = "billing_storage_customer_price_eur_per_gb",
  BillingStorageHardLimitGbPerCompany = "billing_storage_hard_limit_gb_per_company",
  BillingOverageCurrency = "billing_overage_currency",
  BillingOveragePriceEurPerManagingCompany = "billing_overage_price_eur_per_managing_company",
  BillingOveragePriceEurPerDocumentStorageGb = "billing_overage_price_eur_per_document_storage_gb",
  BillingOverageNegativeCorrectionsEnabled = "billing_overage_negative_corrections_enabled",
  BillingOveragePullDefaultLookbackDays = "billing_overage_pull_default_lookback_days",
  BillingOveragePullMaxEvents = "billing_overage_pull_max_events",
  DunningGlobalBaseRateBGB247 = "dunning_global_base_rate_bgb_247",
  DunningPaymentReminderEnabled = "dunning_payment_reminder_enabled",
  DunningPaymentReminderAfterDays = "dunning_payment_reminder_after_days"
}

export type NodeBillAppSettingsTypeMap = {
    [NodeBillAppSettingsKey.ApplicationName]: string;
    [NodeBillAppSettingsKey.BillingPlanLimitManagingCompaniesBase]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitManagingCompaniesPremium]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitManagingCompaniesEnterprise]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitManagingCompaniesLegacy]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitDocumentStorageGbBase]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitDocumentStorageGbPremium]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitDocumentStorageGbEnterprise]: number;
    [NodeBillAppSettingsKey.BillingPlanLimitDocumentStorageGbLegacy]: number;
    [NodeBillAppSettingsKey.BillingStorageProviderCostEurPerGb]: number;
    [NodeBillAppSettingsKey.BillingStorageCustomerPriceEurPerGb]: number;
    [NodeBillAppSettingsKey.BillingStorageHardLimitGbPerCompany]: number;
    [NodeBillAppSettingsKey.BillingOverageCurrency]: string;
    [NodeBillAppSettingsKey.BillingOveragePriceEurPerManagingCompany]: number;
    [NodeBillAppSettingsKey.BillingOveragePriceEurPerDocumentStorageGb]: number;
    [NodeBillAppSettingsKey.BillingOverageNegativeCorrectionsEnabled]: boolean;
    [NodeBillAppSettingsKey.BillingOveragePullDefaultLookbackDays]: number;
    [NodeBillAppSettingsKey.BillingOveragePullMaxEvents]: number;
    // Dunning
    [NodeBillAppSettingsKey.DunningGlobalBaseRateBGB247]: number;
    [NodeBillAppSettingsKey.DunningPaymentReminderEnabled]: boolean;
    [NodeBillAppSettingsKey.DunningPaymentReminderAfterDays]: number;
};

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
  grossSalesGross: string | null;
  /** Brutto-Verkäufe inkl. Endkunden-USt (informativ) */
  providerFees: string | null;
  /** Apple/Google Service-Fee 15–30% (informativ) */
  netPayoutAmount: string;
  /** Was tatsächlich ausgezahlt wird → Erlös */
  refundsAmount: string | null;
  /** Refunds in der Periode (bereits in netto verrechnet) */
  taxesWithheld: string | null;
  /**
   * Endkunden-USt, die Apple/Google selbst abgeführt haben
   * Quelle des Reports — RevenueCat ist Default, CSV-Upload als Fallback
   */
  reportSource: string;
  /** "revenuecat_api" | "revenuecat_csv" | "apple_financial_report" | "google_earnings_report" */
  reportFileId: number | null;
  /** Optional: Original-CSV/PDF im Document-Store */
  rawReportSnapshot: any | null;
  /**
   * Original-Payload für spätere Forensik / Steuerprüfung
   * Verlinkung zur Hauptbuch-Buchung
   */
  bookkeepingRevenueId: number | null;
  /** Idempotency */
  externalRef: string;
  /**
   * z.B. "rc_payout_2026-04_apple"
   * Audit
   */
  importedAt: Date;
  importedByUserId: number | null;
  /** null = Cron-Job */
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
  grossSalesGross?: string | null;
  /** Brutto-Verkäufe inkl. Endkunden-USt (informativ) */
  providerFees?: string | null;
  /** Apple/Google Service-Fee 15–30% (informativ) */
  netPayoutAmount: string;
  /** Was tatsächlich ausgezahlt wird → Erlös */
  refundsAmount?: string | null;
  /** Refunds in der Periode (bereits in netto verrechnet) */
  taxesWithheld?: string | null;
  /**
   * Endkunden-USt, die Apple/Google selbst abgeführt haben
   * Quelle des Reports — RevenueCat ist Default, CSV-Upload als Fallback
   */
  reportSource: string;
  /** "revenuecat_api" | "revenuecat_csv" | "apple_financial_report" | "google_earnings_report" */
  reportFileId?: number | null;
  /** Optional: Original-CSV/PDF im Document-Store */
  rawReportSnapshot?: any | null;
  /**
   * Original-Payload für spätere Forensik / Steuerprüfung
   * Verlinkung zur Hauptbuch-Buchung
   */
  bookkeepingRevenueId?: number | null;
  /** Idempotency */
  externalRef: string;
  /**
   * z.B. "rc_payout_2026-04_apple"
   * Audit
   */
  importedAt?: Date;
  importedByUserId?: number | null;
  /** null = Cron-Job */
  createdAt?: Date;
};

export type CustomerCompany = {
  id: number;
  isFreelancer: boolean;
  /** wenn ein kunde freelancer ist, hat er keine company, das wollen wir hierdurch darstellen */
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
  isFreelancer?: boolean;
  /** wenn ein kunde freelancer ist, hat er keine company, das wollen wir hierdurch darstellen */
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
  externalUserId?: string | null;
};

export type CompanyEmployeeId = number;

export type CompanyEmployeeAssignment = {
  id: number;
  companyEmployeeId: number;
  companyId: number;
  companyRole: string | null;
  /** optional */
  status: CompanyEmployeeStatus;
  /**
   * active = aktuell beschäftigt in dieser Company
   * inactive = pausiert/kein Zugriff, aber nicht "ausgetreten"
   * terminated = ausgetreten
   */
  validFrom: Date;
  validTo: Date | null;
  /** null = aktuell */
  createdAt: Date;
  updatedAt: Date | null;
  assignedBy: number | null;
};

export type CompanyEmployeeAssignmentInsert = {
  companyEmployeeId: number;
  companyId: number;
  companyRole?: string | null;
  /** optional */
  status?: CompanyEmployeeStatus;
  /**
   * active = aktuell beschäftigt in dieser Company
   * inactive = pausiert/kein Zugriff, aber nicht "ausgetreten"
   * terminated = ausgetreten
   */
  validFrom?: Date;
  validTo?: Date | null;
  /** null = aktuell */
  createdAt?: Date;
  updatedAt?: Date | null;
  assignedBy?: number | null;
};

export type CompanyEmployeeAssignmentId = number;

export type Document = {
  id: number;
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId: number | null;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  createdAt: Date;
  updatedAt: Date | null;
  fileName: string;
  fileType: string;
  fileSizeBytes: number;
  s3Key: string;
  /** path in the s3 bucket */
  uploadedBy: number | null;
  /** if not set, system created */
  isLocked: boolean;
};

export type DocumentInsert = {
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId?: number | null;
  /** optional: kostenstelle der das dokument zugeordnet ist */
  createdAt: Date;
  updatedAt?: Date | null;
  fileName: string;
  fileType: string;
  fileSizeBytes: number;
  s3Key: string;
  /** path in the s3 bucket */
  uploadedBy?: number | null;
  /** if not set, system created */
  isLocked?: boolean;
};

export type DocumentId = number;

export type DocumentAssignment = {
  id: number;
  documentId: number;
  ownerType: DocumentOwnerType;
  ownerId: number | null;
  /** nullable für "internal" */
  assignedBy: number | null;
  createdAt: Date;
};

export type DocumentAssignmentInsert = {
  documentId: number;
  ownerType: DocumentOwnerType;
  ownerId?: number | null;
  /** nullable für "internal" */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Rechnungsdetails
   */
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
  /** E-Rechnung / ZUGFeRD */
  eInvoiceFormat: string | null;
  /** 'zugferd' | null */
  zugferdProfile: string | null;
  /**
   * 'BASIC' | 'COMFORT' |CompanyCostCenter 'EXTENDED'
   * Optional: Zusatzfelder
   */
  notes: string | null;
  taxRate: string | null;
  taxAmount: string | null;
  netAmount: string | null;
  /** VAT Treatment Snapshot (immutable after issue) */
  vatTreatment: VatTreatment | null;
  /** Snapshot of tax treatment */
  vatLegalRef: string | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatNote: string | null;
  /** User-facing note (e.g., "Gemäß §19 UStG wird keine Umsatzsteuer berechnet") */
  vatCustom: any | null;
  /**
   * { legalRef?, description?, vatRate?, vatAmountOverride? }
   * Dates for VAT calculation
   */
  performedAt: Date | null;
  /**
   * Leistungsdatum (when service was performed)
   * invoiceDate = Rechnungsdatum
   * Payment tracking (enterprise): we store *how* the invoice became paid.
   */
  paidAt: Date | null;
  paidSource: string | null;
  /** "manual" | "payments" | "external" | null */
  paidByPaymentId: number | null;
  /** nullable; for audit/tracing (no FK to avoid ordering/cycles) */
  paymentMethod: string | null;
  /** z.B. "card", "sepa_debit", "paypal", "bank_transfer" */
  paymentProvider: string | null;
  /**
   * z.B. "Stripe", "PayPal"
   * Optional: Kundendaten (für Rechnungen ohne Company)
   * Wird verwendet wenn companyId = null (z.B. Privatkunden, Ad-hoc Verkäufe)
   */
  customerName: string | null;
  /** Pflicht für Rechnung wenn companyId = null */
  customerStreet: string | null;
  customerStreetNr: string | null;
  customerZip: string | null;
  customerCity: string | null;
  customerCountry: string | null;
  /** Default: "Deutschland" */
  customerEmail: string | null;
  customerPhone: string | null;
  customerUstId: string | null;
  /** USt-IdNr für B2B (optional) */
  language: string;
  /** Bankverbindung: Welches Konto soll auf der Rechnung stehen? */
  paymentAccountId: number | null;
  /** Bank-Fallback bei PayPal: Welches Bankkonto erscheint als Überweisungs-Alternative? */
  bankFallbackAccountId: number | null;
  /** Zahlungsbedingungen */
  paymentTermsDays: number | null;
  /** z.B. 30 fuer "Netto 30 Tage" */
  paymentTermsText: string | null;
  /** Freitext: "Zahlbar innerhalb von 30 Tagen" */
  earlyPaymentDiscountPercent: string | null;
  /** Skonto z.B. "2.0" fuer 2% */
  earlyPaymentDiscountDays: number | null;
  /** Skonto-Frist z.B. 10 Tage */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId?: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Rechnungsdetails
   */
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
  /** E-Rechnung / ZUGFeRD */
  eInvoiceFormat?: string | null;
  /** 'zugferd' | null */
  zugferdProfile?: string | null;
  /**
   * 'BASIC' | 'COMFORT' |CompanyCostCenter 'EXTENDED'
   * Optional: Zusatzfelder
   */
  notes?: string | null;
  taxRate?: string | null;
  taxAmount?: string | null;
  netAmount?: string | null;
  /** VAT Treatment Snapshot (immutable after issue) */
  vatTreatment?: VatTreatment | null;
  /** Snapshot of tax treatment */
  vatLegalRef?: string | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatNote?: string | null;
  /** User-facing note (e.g., "Gemäß §19 UStG wird keine Umsatzsteuer berechnet") */
  vatCustom?: any | null;
  /**
   * { legalRef?, description?, vatRate?, vatAmountOverride? }
   * Dates for VAT calculation
   */
  performedAt?: Date | null;
  /**
   * Leistungsdatum (when service was performed)
   * invoiceDate = Rechnungsdatum
   * Payment tracking (enterprise): we store *how* the invoice became paid.
   */
  paidAt?: Date | null;
  paidSource?: string | null;
  /** "manual" | "payments" | "external" | null */
  paidByPaymentId?: number | null;
  /** nullable; for audit/tracing (no FK to avoid ordering/cycles) */
  paymentMethod?: string | null;
  /** z.B. "card", "sepa_debit", "paypal", "bank_transfer" */
  paymentProvider?: string | null;
  /**
   * z.B. "Stripe", "PayPal"
   * Optional: Kundendaten (für Rechnungen ohne Company)
   * Wird verwendet wenn companyId = null (z.B. Privatkunden, Ad-hoc Verkäufe)
   */
  customerName?: string | null;
  /** Pflicht für Rechnung wenn companyId = null */
  customerStreet?: string | null;
  customerStreetNr?: string | null;
  customerZip?: string | null;
  customerCity?: string | null;
  customerCountry?: string | null;
  /** Default: "Deutschland" */
  customerEmail?: string | null;
  customerPhone?: string | null;
  customerUstId?: string | null;
  /** USt-IdNr für B2B (optional) */
  language?: string;
  /** Bankverbindung: Welches Konto soll auf der Rechnung stehen? */
  paymentAccountId?: number | null;
  /** Bank-Fallback bei PayPal: Welches Bankkonto erscheint als Überweisungs-Alternative? */
  bankFallbackAccountId?: number | null;
  /** Zahlungsbedingungen */
  paymentTermsDays?: number | null;
  /** z.B. 30 fuer "Netto 30 Tage" */
  paymentTermsText?: string | null;
  /** Freitext: "Zahlbar innerhalb von 30 Tagen" */
  earlyPaymentDiscountPercent?: string | null;
  /** Skonto z.B. "2.0" fuer 2% */
  earlyPaymentDiscountDays?: number | null;
  /** Skonto-Frist z.B. 10 Tage */
  createdAt: Date;
  updatedAt?: Date | null;
};

export type InvoiceId = number;

export type InvoiceLineItem = {
  id: number;
  invoiceId: number;
  /** Item Details (denormalized for invoice immutability) */
  itemType: string;
  /** 'subscription', 'one_time', 'usage', etc. */
  title: string;
  description: string | null;
  /** Pricing */
  unitPriceNet: string;
  /** Netto-Preis pro Einheit */
  quantity: string;
  lineNetAmount: string;
  /** unitPriceNet * quantity */
  lineGrossAmount: string;
  /** lineNetAmount * (1 + taxRate) */
  taxRate: string;
  /** z.B. 0.19 für 19% */
  lineTaxAmount: string;
  /**
   * lineNetAmount * taxRate
   * Sort order
   */
  sortOrder: number;
  createdAt: Date;
};

export type InvoiceLineItemInsert = {
  invoiceId: number;
  /** Item Details (denormalized for invoice immutability) */
  itemType: string;
  /** 'subscription', 'one_time', 'usage', etc. */
  title: string;
  description?: string | null;
  /** Pricing */
  unitPriceNet: string;
  /** Netto-Preis pro Einheit */
  quantity?: string;
  lineNetAmount: string;
  /** unitPriceNet * quantity */
  lineGrossAmount: string;
  /** lineNetAmount * (1 + taxRate) */
  taxRate: string;
  /** z.B. 0.19 für 19% */
  lineTaxAmount: string;
  /**
   * lineNetAmount * taxRate
   * Sort order
   */
  sortOrder?: number;
  createdAt?: Date;
};

export type InvoiceLineItemId = number;

export type InvoiceItemTypeConfig = {
  id: number;
  managingCompanyId: number;
  value: string;
  /** unique key, e.g. "montage" */
  label: string;
  /** display name, e.g. "Montage / Einbau" */
  defaultProductType: string;
  sortOrder: number;
  isArchived: boolean;
  createdAt: Date;
  createdBy: number | null;
};

export type InvoiceItemTypeConfigInsert = {
  managingCompanyId: number;
  value: string;
  /** unique key, e.g. "montage" */
  label: string;
  /** display name, e.g. "Montage / Einbau" */
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
  productType: string;
  /** standard | reduced | custom */
  customVatRate: string | null;
  /**
   * only for productType="custom"
   * Payment terms
   */
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
  productType?: string;
  /** standard | reduced | custom */
  customVatRate?: string | null;
  /**
   * only for productType="custom"
   * Payment terms
   */
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
  stage: string;
  /** preview | create */
  status: string;
  /** active | consumed */
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
  stage?: string;
  /** preview | create */
  status?: string;
  /** active | consumed */
  quotePayload: any;
  warnings?: any;
  createdBy?: number | null;
  createdAt?: Date;
  consumedAt?: Date | null;
};

export type InvoiceQuoteId = number;

export type CurrencyRate = {
  id: number;
  /** Where it came from (for traceability + fallback order) */
  provider: string;
  /** e.g. "ecb_xml" | "frankfurter" | "openexchangerates" */
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
  /** Where it came from (for traceability + fallback order) */
  provider: string;
  /** e.g. "ecb_xml" | "frankfurter" | "openexchangerates" */
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
  companyLegalForm: LegalForm | null;
  /** Rechtsform: Nur unterstützte deutsche Rechtsformen! */
  companyManagingDirector: string | null;
  companyStreet: string | null;
  companyStreetNr: string | null;
  companyZip: string | null;
  companyCity: string | null;
  companyCountry: string | null;
  /** important for tax calculation and laws.. (urrently only germany supported, but we plan to expand later) */
  companyEmail: string | null;
  companyPhone: string | null;
  companyWebsite: string | null;
  companyCommercialRegister: string | null;
  companyRegistrationCourt: string | null;
  companyTaxId: string | null;
  companyVatId: string | null;
  /** Default-Zahlungsbedingungen (werden bei Rechnungserstellung uebernommen wenn nichts explizit angegeben) */
  defaultPaymentAccountId: number | null;
  /** FK zu paymentAccounts (kein ref wegen zirkulaerer Abhaengigkeit) */
  defaultPaymentTermsDays: number | null;
  defaultPaymentTermsText: string | null;
  defaultEarlyPaymentDiscountPercent: string | null;
  defaultEarlyPaymentDiscountDays: number | null;
  /** Configuration */
  zugferdEnable: boolean;
  zugferdDefaultProfile: ZugferdProfile;
  /**
   * ZUGFeRD Profile (official EN 16931 profiles)
   * Currency & Bookkeeping
   */
  baseCurrency: Currency;
  /** Base currency for bookkeeping (only supported currencies!) */
  bookkeepingBasis: BookkeepingBasis;
  /**
   * EÜR vs. Bilanzierung (§ 4 Abs. 3 EStG vs. § 5 EStG)
   * logos
   */
  whiteLogoKey: string | null;
  /** s3 key for white mode logo (for invoices on light background, standart vor invoices, exepts the user select something else) */
  darkLogoKey: string | null;
  /** s3 key for dark mode logo (for invoices on dark background) */
  invoiceLogoMode: string;
  /** default logo mode for invoices (white, dark) */
  invoiceLayoutVariant: string;
  /** default invoice layout variant for this company */
  createdAt: Date;
  updatedAt: Date | null;
};

export type ManagingCompanyInsert = {
  companyName: string;
  companyLegalForm?: LegalForm | null;
  /** Rechtsform: Nur unterstützte deutsche Rechtsformen! */
  companyManagingDirector?: string | null;
  companyStreet?: string | null;
  companyStreetNr?: string | null;
  companyZip?: string | null;
  companyCity?: string | null;
  companyCountry?: string | null;
  /** important for tax calculation and laws.. (urrently only germany supported, but we plan to expand later) */
  companyEmail?: string | null;
  companyPhone?: string | null;
  companyWebsite?: string | null;
  companyCommercialRegister?: string | null;
  companyRegistrationCourt?: string | null;
  companyTaxId?: string | null;
  companyVatId?: string | null;
  /** Default-Zahlungsbedingungen (werden bei Rechnungserstellung uebernommen wenn nichts explizit angegeben) */
  defaultPaymentAccountId?: number | null;
  /** FK zu paymentAccounts (kein ref wegen zirkulaerer Abhaengigkeit) */
  defaultPaymentTermsDays?: number | null;
  defaultPaymentTermsText?: string | null;
  defaultEarlyPaymentDiscountPercent?: string | null;
  defaultEarlyPaymentDiscountDays?: number | null;
  /** Configuration */
  zugferdEnable?: boolean;
  zugferdDefaultProfile?: ZugferdProfile;
  /**
   * ZUGFeRD Profile (official EN 16931 profiles)
   * Currency & Bookkeeping
   */
  baseCurrency?: Currency;
  /** Base currency for bookkeeping (only supported currencies!) */
  bookkeepingBasis?: BookkeepingBasis;
  /**
   * EÜR vs. Bilanzierung (§ 4 Abs. 3 EStG vs. § 5 EStG)
   * logos
   */
  whiteLogoKey?: string | null;
  /** s3 key for white mode logo (for invoices on light background, standart vor invoices, exepts the user select something else) */
  darkLogoKey?: string | null;
  /** s3 key for dark mode logo (for invoices on dark background) */
  invoiceLogoMode?: string;
  /** default logo mode for invoices (white, dark) */
  invoiceLayoutVariant?: string;
  /** default invoice layout variant for this company */
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
  code: string;
  /** eindeutiger code für die kostenstelle z.b. für rechnungen usw. */
  isArchived: boolean;
  /** archivierte kostenstelle, wird nicht mehr genutzt */
  colour: string | null;
  /** hex color code for this cost center */
  icon: string | null;
  /** optional icon identifier for UI separation from company logos */
  whiteLogoKey: string | null;
  /** optional S3 key for white mode cost-center logo */
  darkLogoKey: string | null;
  /** optional S3 key for dark mode cost-center logo */
  invoiceLayoutVariant: string | null;
  /** optional override; null => inherit company invoiceLayoutVariant */
  sortOrder: number | null;
  /** ortierung alphabetisch auf code, danach kommt sort order */
  sortByOrder: boolean;
};

export type CompanyCostCenterInsert = {
  managingCompanyId: number;
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
  code: string;
  /** eindeutiger code für die kostenstelle z.b. für rechnungen usw. */
  isArchived?: boolean;
  /** archivierte kostenstelle, wird nicht mehr genutzt */
  colour?: string | null;
  /** hex color code for this cost center */
  icon?: string | null;
  /** optional icon identifier for UI separation from company logos */
  whiteLogoKey?: string | null;
  /** optional S3 key for white mode cost-center logo */
  darkLogoKey?: string | null;
  /** optional S3 key for dark mode cost-center logo */
  invoiceLayoutVariant?: string | null;
  /** optional override; null => inherit company invoiceLayoutVariant */
  sortOrder?: number | null;
  /** ortierung alphabetisch auf code, danach kommt sort order */
  sortByOrder?: boolean;
};

export type CompanyCostCenterId = number;

export type UserSelectedCompany = {
  id: number;
  userId: number;
  /** One selection per user */
  managingCompanyId: number;
  updatedAt: Date;
};

export type UserSelectedCompanyInsert = {
  userId: number;
  /** One selection per user */
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
  role: string;
  /** technical role in the company (viewer, editor, admin) */
  companyRole: string | null;
  /** roles in the company (seo, developer, etc.) not technical used, only vor visualization */
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
  role?: string;
  /** technical role in the company (viewer, editor, admin) */
  companyRole?: string | null;
  /** roles in the company (seo, developer, etc.) not technical used, only vor visualization */
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
  /** Security: Argon2 hash (irreversible, includes salt) */
  apiKeyHash: string;
  /**
   * Argon2 hashes are ~96 chars, but allow room
   * Performance: SHA-256 fingerprint for fast lookups (before expensive Argon2 verification)
   */
  apiKeyFingerprint: string;
  /**
   * SHA-256 in hex = 64 chars
   * Pepper Rotation: Track which pepper version was used to create this key
   * Allows graceful pepper rotation without invalidating existing keys
   */
  pepperVersion: number;
  role: string;
  /** technical role in the company (viewer, editor, admin) */
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
  /** Security: Argon2 hash (irreversible, includes salt) */
  apiKeyHash: string;
  /**
   * Argon2 hashes are ~96 chars, but allow room
   * Performance: SHA-256 fingerprint for fast lookups (before expensive Argon2 verification)
   */
  apiKeyFingerprint: string;
  /**
   * SHA-256 in hex = 64 chars
   * Pepper Rotation: Track which pepper version was used to create this key
   * Allows graceful pepper rotation without invalidating existing keys
   */
  pepperVersion?: number;
  role?: string;
  /** technical role in the company (viewer, editor, admin) */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Revenue details
   */
  revenueDate: Date;
  /** Date when revenue was received */
  amount: string;
  /** Gross amount (in base currency after conversion) */
  currency: string;
  /** Base currency (from managing company) */
  description: string;
  category: BookkeepingRevenueCategory;
  /** Multi-Currency Support (Original values before conversion) */
  originalCurrency: string | null;
  /** Original currency before conversion (null if same as base currency) */
  originalAmount: string | null;
  /** Original amount before conversion */
  conversionRate: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionDate: Date | null;
  /** When the conversion rate was fetched */
  conversionProvider: string | null;
  /**
   * FX provider used (e.g., "ecb_xml", "frankfurter")
   * References
   */
  invoiceId: number | null;
  /** Link to customer invoice (if applicable) */
  assetId: number | null;
  /** Link to disposed asset (if applicable) */
  documentId: number | null;
  /**
   * Receipt/proof document
   * Tax details
   */
  taxRate: string | null;
  /** e.g., 0.19 for 19% VAT (optional for Kleinunternehmer) */
  taxAmount: string | null;
  /** Calculated tax amount */
  netAmount: string;
  /**
   * Net amount (before tax)
   * VAT Treatment Snapshot (immutable after confirmation)
   */
  vatTreatment: VatTreatment | null;
  /** Snapshot of tax treatment */
  vatLegalRef: string | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatCustom: any | null;
  /**
   * { legalRef?, description?, vatRate?, vatAmountOverride? }
   * Dates for VAT calculation
   */
  performedAt: Date | null;
  /**
   * Leistungsdatum (when service was performed)
   * Status & notes
   */
  isConfirmed: boolean;
  /** Confirmed by user? */
  notes: string | null;
  /** Eigenbeleg (self-created receipt) — mirrors bookkeeping_expenses pattern */
  isSelfCreatedReceipt: boolean;
  /** Eigenbeleg für Einnahmen ohne Originalbeleg (§ 146 AO) */
  selfReceiptReason: string | null;
  /** Pflicht-Begründung: warum kein Originalbeleg existiert (GoBD) */
  eigenbelegNumber: number | null;
  /**
   * Laufnummer pro Company+Jahr (numerischer Teil von ER-YYYY-NNNNN)
   * Metadata
   */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId?: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Revenue details
   */
  revenueDate: Date;
  /** Date when revenue was received */
  amount: string;
  /** Gross amount (in base currency after conversion) */
  currency?: string;
  /** Base currency (from managing company) */
  description: string;
  category: BookkeepingRevenueCategory;
  /** Multi-Currency Support (Original values before conversion) */
  originalCurrency?: string | null;
  /** Original currency before conversion (null if same as base currency) */
  originalAmount?: string | null;
  /** Original amount before conversion */
  conversionRate?: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionDate?: Date | null;
  /** When the conversion rate was fetched */
  conversionProvider?: string | null;
  /**
   * FX provider used (e.g., "ecb_xml", "frankfurter")
   * References
   */
  invoiceId?: number | null;
  /** Link to customer invoice (if applicable) */
  assetId?: number | null;
  /** Link to disposed asset (if applicable) */
  documentId?: number | null;
  /**
   * Receipt/proof document
   * Tax details
   */
  taxRate?: string | null;
  /** e.g., 0.19 for 19% VAT (optional for Kleinunternehmer) */
  taxAmount?: string | null;
  /** Calculated tax amount */
  netAmount: string;
  /**
   * Net amount (before tax)
   * VAT Treatment Snapshot (immutable after confirmation)
   */
  vatTreatment?: VatTreatment | null;
  /** Snapshot of tax treatment */
  vatLegalRef?: string | null;
  /** "UStG §19", "UStG §4 Nr. 1", etc. */
  vatCustom?: any | null;
  /**
   * { legalRef?, description?, vatRate?, vatAmountOverride? }
   * Dates for VAT calculation
   */
  performedAt?: Date | null;
  /**
   * Leistungsdatum (when service was performed)
   * Status & notes
   */
  isConfirmed?: boolean;
  /** Confirmed by user? */
  notes?: string | null;
  /** Eigenbeleg (self-created receipt) — mirrors bookkeeping_expenses pattern */
  isSelfCreatedReceipt?: boolean;
  /** Eigenbeleg für Einnahmen ohne Originalbeleg (§ 146 AO) */
  selfReceiptReason?: string | null;
  /** Pflicht-Begründung: warum kein Originalbeleg existiert (GoBD) */
  eigenbelegNumber?: number | null;
  /**
   * Laufnummer pro Company+Jahr (numerischer Teil von ER-YYYY-NNNNN)
   * Metadata
   */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Expense details
   */
  expenseDate: Date;
  /** Date when expense occurred */
  amount: string;
  /** Gross amount (in base currency after conversion) */
  currency: string;
  /** Base currency (from managing company) */
  description: string;
  category: BookkeepingExpenseCategory;
  /** Multi-Currency Support (Original values before conversion) */
  originalCurrency: string | null;
  /** Original currency before conversion (null if same as base currency) */
  originalAmount: string | null;
  /** Original amount before conversion */
  conversionRate: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionDate: Date | null;
  /** When the conversion rate was fetched */
  conversionProvider: string | null;
  /**
   * FX provider used (e.g., "ecb_xml", "frankfurter")
   * Vendor details
   */
  vendor: string | null;
  /** Vendor/supplier name (e.g., "Railway", "AWS") */
  vendorInvoiceNumber: string | null;
  /**
   * Vendor's invoice number
   * Document reference
   */
  documentId: number | null;
  /**
   * Receipt/invoice PDF
   * Tax details
   */
  taxRate: string | null;
  /** e.g., 0.19 for 19% VAT */
  taxAmount: string | null;
  /** Calculated tax amount */
  netAmount: string;
  /**
   * Net amount (before tax)
   * Status & notes
   */
  isDeductible: boolean;
  /** Tax deductible? */
  isConfirmed: boolean;
  /** Confirmed by user? */
  isSelfCreatedReceipt: boolean;
  /** Self-Created Receipt flag */
  selfReceiptReason: string | null;
  /** Reason for self-created receipt */
  notes: string | null;
  /** Metadata */
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted: boolean;
  deletedAt: Date | null;
  deletedBy: number | null;
  /** Eigenbeleg specific */
  eigenbelegNumber: number | null;
  /**
   * numeric part of vendorInvoiceNumber (EB-YYYY-00001), generated per company+year
   * Input VAT (Vorsteuer) - for deductible expenses
   */
  inputVatEligibility: InputVatEligibility;
  inputVatAmount: string | null;
  /** Vorsteuer amount */
  inputVatRate: string | null;
  /**
   * For PARTIAL eligibility (e.g., 0.7 = 70%)
   * VAT Treatment — enables §13b routing in UStVA (null = legacy/unclassified)
   */
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
  /** company */
  managingCompanyId: number;
  /** firma der das dokument gehört */
  costCenterId?: number | null;
  /**
   * optional: kostenstelle der das dokument zugeordnet ist
   * Expense details
   */
  expenseDate: Date;
  /** Date when expense occurred */
  amount: string;
  /** Gross amount (in base currency after conversion) */
  currency?: string;
  /** Base currency (from managing company) */
  description: string;
  category: BookkeepingExpenseCategory;
  /** Multi-Currency Support (Original values before conversion) */
  originalCurrency?: string | null;
  /** Original currency before conversion (null if same as base currency) */
  originalAmount?: string | null;
  /** Original amount before conversion */
  conversionRate?: string | null;
  /** Exchange rate used for conversion (e.g., 1.18 for USD->EUR) */
  conversionDate?: Date | null;
  /** When the conversion rate was fetched */
  conversionProvider?: string | null;
  /**
   * FX provider used (e.g., "ecb_xml", "frankfurter")
   * Vendor details
   */
  vendor?: string | null;
  /** Vendor/supplier name (e.g., "Railway", "AWS") */
  vendorInvoiceNumber?: string | null;
  /**
   * Vendor's invoice number
   * Document reference
   */
  documentId?: number | null;
  /**
   * Receipt/invoice PDF
   * Tax details
   */
  taxRate?: string | null;
  /** e.g., 0.19 for 19% VAT */
  taxAmount?: string | null;
  /** Calculated tax amount */
  netAmount: string;
  /**
   * Net amount (before tax)
   * Status & notes
   */
  isDeductible?: boolean;
  /** Tax deductible? */
  isConfirmed?: boolean;
  /** Confirmed by user? */
  isSelfCreatedReceipt?: boolean;
  /** Self-Created Receipt flag */
  selfReceiptReason?: string | null;
  /** Reason for self-created receipt */
  notes?: string | null;
  /** Metadata */
  createdAt?: Date;
  updatedAt?: Date | null;
  createdBy?: number | null;
  /** Soft Delete (for legal compliance - don't actually delete bookkeeping records) */
  isDeleted?: boolean;
  deletedAt?: Date | null;
  deletedBy?: number | null;
  /** Eigenbeleg specific */
  eigenbelegNumber?: number | null;
  /**
   * numeric part of vendorInvoiceNumber (EB-YYYY-00001), generated per company+year
   * Input VAT (Vorsteuer) - for deductible expenses
   */
  inputVatEligibility?: InputVatEligibility;
  inputVatAmount?: string | null;
  /** Vorsteuer amount */
  inputVatRate?: string | null;
  /**
   * For PARTIAL eligibility (e.g., 0.7 = 70%)
   * VAT Treatment — enables §13b routing in UStVA (null = legacy/unclassified)
   */
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
  name: string;
  /** display name */
  currency: string;
  /** bank specifics (nullable for cash) */
  iban: string | null;
  bic: string | null;
  bankName: string | null;
  accountOwner: string | null;
  /** paypal display (nullable for bank/cash) */
  paypalEmail: string | null;
  paypalHandle: string | null;
  /**
   * e.g. "MeinShop" -> paypal.me/MeinShop
   * paypal api integration (nullable for non-paypal accounts)
   */
  paypalClientId: string | null;
  paypalClientSecret: string | null;
  /** AES-256-GCM encrypted via encryptionService */
  paypalEnvironment: string;
  /** 'live' | 'sandbox' */
  paypalWebhookId: string | null;
  /** PayPal-registered webhook ID */
  paypalSyncEnabled: boolean;
  paypalLastSyncAt: Date | null;
  paypalSyncCursor: string | null;
  /**
   * ISO-date for incremental sync start
   * opening balance — Anfangssaldo ab Tracking-Start (Enterprise-Buchhaltung)
   */
  openingBalance: string | null;
  /** numeric string, e.g. "12345.67" */
  openingBalanceDate: Date | null;
  /**
   * ab wann der Saldo gilt
   * import preferences
   */
  allowCsvImport: boolean;
  /** lifecycle */
  isDefault: boolean;
  /** Default-Konto fuer Rechnungen */
  isArchived: boolean;
  isTransit: boolean;
  /** Durchlaufkonto (z.B. SumUp Terminal): Zahlungen sind informativ, nicht buchungsrelevant */
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
  name: string;
  /** display name */
  currency?: string;
  /** bank specifics (nullable for cash) */
  iban?: string | null;
  bic?: string | null;
  bankName?: string | null;
  accountOwner?: string | null;
  /** paypal display (nullable for bank/cash) */
  paypalEmail?: string | null;
  paypalHandle?: string | null;
  /**
   * e.g. "MeinShop" -> paypal.me/MeinShop
   * paypal api integration (nullable for non-paypal accounts)
   */
  paypalClientId?: string | null;
  paypalClientSecret?: string | null;
  /** AES-256-GCM encrypted via encryptionService */
  paypalEnvironment?: string;
  /** 'live' | 'sandbox' */
  paypalWebhookId?: string | null;
  /** PayPal-registered webhook ID */
  paypalSyncEnabled?: boolean;
  paypalLastSyncAt?: Date | null;
  paypalSyncCursor?: string | null;
  /**
   * ISO-date for incremental sync start
   * opening balance — Anfangssaldo ab Tracking-Start (Enterprise-Buchhaltung)
   */
  openingBalance?: string | null;
  /** numeric string, e.g. "12345.67" */
  openingBalanceDate?: Date | null;
  /**
   * ab wann der Saldo gilt
   * import preferences
   */
  allowCsvImport?: boolean;
  /** lifecycle */
  isDefault?: boolean;
  /** Default-Konto fuer Rechnungen */
  isArchived?: boolean;
  isTransit?: boolean;
  /** Durchlaufkonto (z.B. SumUp Terminal): Zahlungen sind informativ, nicht buchungsrelevant */
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
  feeVatRate: string | null;
  /** Derived from treatment: 0 (EXEMPT), 0.19 (INCLUSIVE/RC), null (UNKNOWN) */
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
  feeVatRate?: string | null;
  /** Derived from treatment: 0 (EXEMPT), 0.19 (INCLUSIVE/RC), null (UNKNOWN) */
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
  metadata: any | null;
  /** e.g. { autoCreateBankAccount: true } */
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
  metadata?: any | null;
  /** e.g. { autoCreateBankAccount: true } */
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
  /** core amounts */
  amount: string;
  /** signed? we store absolute and use direction; keep positive here */
  currency: string;
  /**
   * Transaction fee fields (for provider-deducted fees: PayPal, Stripe, etc.)
   * These represent fees embedded IN the payment, NOT separate account fees.
   * For account fees (Kontofuehrungsgebuehr), use the fee allocation system instead.
   */
  feeAmount: string | null;
  /** Fee deducted by provider (absolute, e.g. 1.84) */
  feeCurrency: string | null;
  /** Currency of fee (usually same as payment) */
  netAmount: string | null;
  /** amount - feeAmount = what was actually received/sent */
  feeExpenseId: number | null;
  /**
   * FX context (informational — payment.amount is ALWAYS in account currency)
   * Records the original foreign-currency amount for audit/compliance.
   * GoBD: The actual bank movement (amount/currency) is authoritative and never converted.
   * All three null when no foreign currency involved.
   */
  originalAmount: string | null;
  /** Foreign currency amount (e.g. 7.00) */
  originalCurrency: string | null;
  /** Foreign currency code (e.g. "USD") */
  conversionRate: string | null;
  /** Exchange rate (e.g. 0.87 = USD→EUR) */
  bookedAt: Date;
  /** booking date */
  valueAt: Date | null;
  /**
   * valuta date (optional)
   * counterparty / reference (best effort)
   */
  counterpartyName: string | null;
  counterpartyIban: string | null;
  counterpartyBic: string | null;
  reference: string | null;
  endToEndId: string | null;
  bankTransactionId: string | null;
  /**
   * provider specific id (if present)
   * raw import data (for audit/debug)
   */
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
  /** core amounts */
  amount: string;
  /** signed? we store absolute and use direction; keep positive here */
  currency?: string;
  /**
   * Transaction fee fields (for provider-deducted fees: PayPal, Stripe, etc.)
   * These represent fees embedded IN the payment, NOT separate account fees.
   * For account fees (Kontofuehrungsgebuehr), use the fee allocation system instead.
   */
  feeAmount?: string | null;
  /** Fee deducted by provider (absolute, e.g. 1.84) */
  feeCurrency?: string | null;
  /** Currency of fee (usually same as payment) */
  netAmount?: string | null;
  /** amount - feeAmount = what was actually received/sent */
  feeExpenseId?: number | null;
  /**
   * FX context (informational — payment.amount is ALWAYS in account currency)
   * Records the original foreign-currency amount for audit/compliance.
   * GoBD: The actual bank movement (amount/currency) is authoritative and never converted.
   * All three null when no foreign currency involved.
   */
  originalAmount?: string | null;
  /** Foreign currency amount (e.g. 7.00) */
  originalCurrency?: string | null;
  /** Foreign currency code (e.g. "USD") */
  conversionRate?: string | null;
  /** Exchange rate (e.g. 0.87 = USD→EUR) */
  bookedAt: Date;
  /** booking date */
  valueAt?: Date | null;
  /**
   * valuta date (optional)
   * counterparty / reference (best effort)
   */
  counterpartyName?: string | null;
  counterpartyIban?: string | null;
  counterpartyBic?: string | null;
  reference?: string | null;
  endToEndId?: string | null;
  bankTransactionId?: string | null;
  /**
   * provider specific id (if present)
   * raw import data (for audit/debug)
   */
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
  key: string;
  /** unique within managingCompany */
  name: string;
  description: string | null;
  delimiterHint: string | null;
  /**
   * "," | ";" | "\t"
   * CanonicalField -> list of header aliases (case-insensitive). Stored as JSON for flexibility.
   */
  headerAliases: any;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: number | null;
  updatedBy: number | null;
};

export type PaymentImportProfileInsert = {
  managingCompanyId: number;
  key: string;
  /** unique within managingCompany */
  name: string;
  description?: string | null;
  delimiterHint?: string | null;
  /**
   * "," | ";" | "\t"
   * CanonicalField -> list of header aliases (case-insensitive). Stored as JSON for flexibility.
   */
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
  entityId: number | null;
  /** optional (e.g. import preview) */
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
  entityId?: number | null;
  /** optional (e.g. import preview) */
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
  validTo: Date | null;
  /**
   * null = current period
   * Regime
   */
  regime: VatRegime;
  /** Trigger details (why did regime change?) */
  reason: VatRegimeReason;
  triggerAmount: string | null;
  /** Revenue amount that triggered the switch */
  triggerAt: Date | null;
  /** Exact timestamp when threshold was exceeded */
  triggerDocId: number | null;
  /** Invoice/Revenue ID that caused the switch */
  triggerDocType: string | null;
  /**
   * "invoice" | "revenue"
   * Metadata
   */
  createdAt: Date;
  calculatedBy: string;
};

export type VatRegimePeriodInsert = {
  /** Company */
  managingCompanyId: number;
  /** Period */
  validFrom: Date;
  validTo?: Date | null;
  /**
   * null = current period
   * Regime
   */
  regime: VatRegime;
  /** Trigger details (why did regime change?) */
  reason: VatRegimeReason;
  triggerAmount?: string | null;
  /** Revenue amount that triggered the switch */
  triggerAt?: Date | null;
  /** Exact timestamp when threshold was exceeded */
  triggerDocId?: number | null;
  /** Invoice/Revenue ID that caused the switch */
  triggerDocType?: string | null;
  /**
   * "invoice" | "revenue"
   * Metadata
   */
  createdAt?: Date;
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
  isBillable: boolean;
  /** is the work entry billable to the company? wenn false dann kostenlose arbeit (beratung, ops, etc.) */
  isBilled: boolean;
  /** wurde die arbeit schon in eine rechnung übernommen? */
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
  isBillable?: boolean;
  /** is the work entry billable to the company? wenn false dann kostenlose arbeit (beratung, ops, etc.) */
  isBilled?: boolean;
  /** wurde die arbeit schon in eine rechnung übernommen? */
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
  /** Identification */
  name: string;
  /** e.g., "MacBook Pro 16", "Firmenwagen VW Passat" */
  description: string | null;
  inventoryNumber: string | null;
  /** Inventarnummer (auto-generiert oder manuell) */
  assetType: BookkeepingAssetType;
  /** Purchase & Commissioning */
  purchaseDate: Date;
  inServiceDate: Date | null;
  /** Inbetriebnahmedatum (kann != purchaseDate!) */
  purchaseAmountNet: string;
  /** Netto-Kaufpreis (Basispreis) */
  currency: string;
  /** Anschaffungskostenmodell (§255 HGB) */
  ancillaryAcquisitionCosts: string;
  /** Anschaffungsnebenkosten (Lieferung, Montage, Zoll etc.) */
  subsequentAcquisitionCosts: string;
  /** Nachträgliche AK (spätere Verbesserungen) */
  acquisitionPriceReductions: string;
  /**
   * Preisminderungen (Rabatte, Skonti)
   * Gesamt-AK = purchaseAmountNet + ancillary + subsequent - reductions
   * Depreciation
   */
  usefulLifeMonths: number | null;
  /** Nutzungsdauer in Monaten (null = GWG Sofortabschreibung) */
  depreciationMethod: DepreciationMethod;
  residualValue: string;
  /**
   * Restwert am Ende der Nutzungsdauer
   * Degressive AfA (§7 Abs. 2 EStG)
   */
  degressiveRate: string | null;
  /** z.B. "0.25" für 25% – max 25% oder 2,5× linear */
  switchedToLinearDate: Date | null;
  /**
   * Zeitpunkt Wechsel degressive → linear (§7 Abs. 3)
   * Sonderabschreibung (§7g Abs. 5 EStG)
   */
  sonderafaApplied: boolean;
  sonderafaAmount: string | null;
  /** Betrag der Sonderabschreibung (max 20% AK) */
  sonderafaYear: number | null;
  /**
   * Jahr der Inanspruchnahme
   * Sammelposten (§6 Abs. 2a EStG)
   */
  sammelpostenPoolId: number | null;
  /** Digital-AfA (BMF 2021) */
  isDigitalAsset: boolean;
  /**
   * Computer, Peripherie, Software
   * Gebäude-AfA (§7 Abs. 4/5, §7i, §7b EStG)
   */
  buildingType: BuildingType | null;
  /** null für Nicht-Gebäude */
  constructionYear: number | null;
  /** Baujahr */
  buildingApplicationDate: Date | null;
  /** Bauantragsdatum */
  landValue: string | null;
  /** Grundstückswert (NICHT abschreibbar – wird von AK abgezogen!) */
  buildingAreaSqm: string | null;
  /** Wohnfläche in m² (für §7b Prüfung) */
  herstellungskostenPerSqm: string | null;
  /** Für §7b: ≤ 5.200€/m² */
  denkmalBescheinigung: boolean;
  /**
   * Denkmalschutzbescheinigung
   * Betriebliche Nutzung
   */
  businessUsePercentage: string;
  /**
   * Für §7g: ≥ 90% erforderlich
   * AfA-Tabellen-Referenz (BMF)
   */
  afaTableKey: string | null;
  /** BMF-Schlüssel z.B. "6.14.3.1" */
  afaTableName: string | null;
  /**
   * Klartext z.B. "Computer, Notebooks"
   * Input VAT (Vorsteuer)
   */
  inputVatAmount: string | null;
  inputVatRate: string | null;
  inputVatEligibility: InputVatEligibility;
  /** Vendor details */
  vendorName: string | null;
  vendorInvoiceNumber: string | null;
  /** References */
  expenseId: number | null;
  documentId: number | null;
  /** Lifecycle */
  isActive: boolean;
  /** false = disposed/sold */
  disposedAt: Date | null;
  disposalAmount: string | null;
  /** Veräußerungserlös */
  disposalReason: string | null;
  /** Freitext-Begründung */
  disposalType: AssetDisposalType | null;
  /** Strukturierter Abgangsgrund */
  disposalBookValue: string | null;
  /** Restbuchwert bei Abgang (berechnet & gespeichert) */
  disposalGainLoss: string | null;
  /**
   * Buchgewinn (+) / Buchverlust (−)
   * Bilanz-Readiness (in EÜR-Modus noch ungenutzt – für spätere Bilanz-Erweiterung)
   */
  accountNumber: string | null;
  /** SKR03/SKR04 Sachkonto */
  bilanzPosition: string | null;
  /**
   * z.B. "A.II.1" Sachanlagen
   * Metadata
   */
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
  /** Identification */
  name: string;
  /** e.g., "MacBook Pro 16", "Firmenwagen VW Passat" */
  description?: string | null;
  inventoryNumber?: string | null;
  /** Inventarnummer (auto-generiert oder manuell) */
  assetType: BookkeepingAssetType;
  /** Purchase & Commissioning */
  purchaseDate: Date;
  inServiceDate?: Date | null;
  /** Inbetriebnahmedatum (kann != purchaseDate!) */
  purchaseAmountNet: string;
  /** Netto-Kaufpreis (Basispreis) */
  currency?: string;
  /** Anschaffungskostenmodell (§255 HGB) */
  ancillaryAcquisitionCosts?: string;
  /** Anschaffungsnebenkosten (Lieferung, Montage, Zoll etc.) */
  subsequentAcquisitionCosts?: string;
  /** Nachträgliche AK (spätere Verbesserungen) */
  acquisitionPriceReductions?: string;
  /**
   * Preisminderungen (Rabatte, Skonti)
   * Gesamt-AK = purchaseAmountNet + ancillary + subsequent - reductions
   * Depreciation
   */
  usefulLifeMonths?: number | null;
  /** Nutzungsdauer in Monaten (null = GWG Sofortabschreibung) */
  depreciationMethod: DepreciationMethod;
  residualValue?: string;
  /**
   * Restwert am Ende der Nutzungsdauer
   * Degressive AfA (§7 Abs. 2 EStG)
   */
  degressiveRate?: string | null;
  /** z.B. "0.25" für 25% – max 25% oder 2,5× linear */
  switchedToLinearDate?: Date | null;
  /**
   * Zeitpunkt Wechsel degressive → linear (§7 Abs. 3)
   * Sonderabschreibung (§7g Abs. 5 EStG)
   */
  sonderafaApplied?: boolean;
  sonderafaAmount?: string | null;
  /** Betrag der Sonderabschreibung (max 20% AK) */
  sonderafaYear?: number | null;
  /**
   * Jahr der Inanspruchnahme
   * Sammelposten (§6 Abs. 2a EStG)
   */
  sammelpostenPoolId?: number | null;
  /** Digital-AfA (BMF 2021) */
  isDigitalAsset?: boolean;
  /**
   * Computer, Peripherie, Software
   * Gebäude-AfA (§7 Abs. 4/5, §7i, §7b EStG)
   */
  buildingType?: BuildingType | null;
  /** null für Nicht-Gebäude */
  constructionYear?: number | null;
  /** Baujahr */
  buildingApplicationDate?: Date | null;
  /** Bauantragsdatum */
  landValue?: string | null;
  /** Grundstückswert (NICHT abschreibbar – wird von AK abgezogen!) */
  buildingAreaSqm?: string | null;
  /** Wohnfläche in m² (für §7b Prüfung) */
  herstellungskostenPerSqm?: string | null;
  /** Für §7b: ≤ 5.200€/m² */
  denkmalBescheinigung?: boolean;
  /**
   * Denkmalschutzbescheinigung
   * Betriebliche Nutzung
   */
  businessUsePercentage?: string;
  /**
   * Für §7g: ≥ 90% erforderlich
   * AfA-Tabellen-Referenz (BMF)
   */
  afaTableKey?: string | null;
  /** BMF-Schlüssel z.B. "6.14.3.1" */
  afaTableName?: string | null;
  /**
   * Klartext z.B. "Computer, Notebooks"
   * Input VAT (Vorsteuer)
   */
  inputVatAmount?: string | null;
  inputVatRate?: string | null;
  inputVatEligibility?: InputVatEligibility;
  /** Vendor details */
  vendorName?: string | null;
  vendorInvoiceNumber?: string | null;
  /** References */
  expenseId?: number | null;
  documentId?: number | null;
  /** Lifecycle */
  isActive?: boolean;
  /** false = disposed/sold */
  disposedAt?: Date | null;
  disposalAmount?: string | null;
  /** Veräußerungserlös */
  disposalReason?: string | null;
  /** Freitext-Begründung */
  disposalType?: AssetDisposalType | null;
  /** Strukturierter Abgangsgrund */
  disposalBookValue?: string | null;
  /** Restbuchwert bei Abgang (berechnet & gespeichert) */
  disposalGainLoss?: string | null;
  /**
   * Buchgewinn (+) / Buchverlust (−)
   * Bilanz-Readiness (in EÜR-Modus noch ungenutzt – für spätere Bilanz-Erweiterung)
   */
  accountNumber?: string | null;
  /** SKR03/SKR04 Sachkonto */
  bilanzPosition?: string | null;
  /**
   * z.B. "A.II.1" Sachanlagen
   * Metadata
   */
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
  componentType: string;
  /** delivery | installation | customs | notary | grunderwerbsteuer | subsequent | reduction | other */
  description: string;
  amount: string;
  /** positiv = Kosten, negativ = Minderung */
  date: Date;
  /** Datum des Kostenzugangs */
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
  componentType: string;
  /** delivery | installation | customs | notary | grunderwerbsteuer | subsequent | reduction | other */
  description: string;
  amount: string;
  /** positiv = Kosten, negativ = Minderung */
  date: Date;
  /** Datum des Kostenzugangs */
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
  totalAmount: string;
  /** Summe aller WG im Pool */
  annualDepreciation: string;
  /** = totalAmount / 5 */
  isClosed: boolean;
  /** Gesperrt nach Jahresabschluss */
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
  totalAmount?: string;
  /** Summe aller WG im Pool */
  annualDepreciation?: string;
  /** = totalAmount / 5 */
  isClosed?: boolean;
  /** Gesperrt nach Jahresabschluss */
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
  periodMonth: number | null;
  /** 1–12, null für Jahresbuchung */
  periodType: string;
  /**
   * "monthly" | "annual"
   * Beträge
   */
  depreciationAmount: string;
  /** Normale AfA */
  sonderafaAmount: string;
  /** Sonder-AfA in dieser Periode */
  totalAmount: string;
  /** depreciationAmount + sonderafaAmount */
  accumulatedDepreciation: string;
  /** Kumuliert nach dieser Buchung */
  bookValueAfter: string;
  /**
   * Restbuchwert nach Buchung
   * Methoden-Tracking (Audit – welche Methode galt zum Buchungszeitpunkt)
   */
  depreciationMethod: DepreciationMethod;
  calculationBase: string;
  /** Bemessungsgrundlage */
  rateApplied: string | null;
  /**
   * z.B. "0.25" für 25% degressive
   * Status
   */
  isBooked: boolean;
  /** Finalisiert/gesperrt */
  bookedAt: Date | null;
  bookedBy: number | null;
  /** Metadata */
  notes: string | null;
  /** z.B. "Wechsel degressive → linear" */
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
  periodMonth?: number | null;
  /** 1–12, null für Jahresbuchung */
  periodType?: string;
  /**
   * "monthly" | "annual"
   * Beträge
   */
  depreciationAmount: string;
  /** Normale AfA */
  sonderafaAmount?: string;
  /** Sonder-AfA in dieser Periode */
  totalAmount: string;
  /** depreciationAmount + sonderafaAmount */
  accumulatedDepreciation: string;
  /** Kumuliert nach dieser Buchung */
  bookValueAfter: string;
  /**
   * Restbuchwert nach Buchung
   * Methoden-Tracking (Audit – welche Methode galt zum Buchungszeitpunkt)
   */
  depreciationMethod: DepreciationMethod;
  calculationBase: string;
  /** Bemessungsgrundlage */
  rateApplied?: string | null;
  /**
   * z.B. "0.25" für 25% degressive
   * Status
   */
  isBooked?: boolean;
  /** Finalisiert/gesperrt */
  bookedAt?: Date | null;
  bookedBy?: number | null;
  /** Metadata */
  notes?: string | null;
  /** z.B. "Wechsel degressive → linear" */
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
  validTo: string | null;
  /**
   * NULL = aktuell gueltig
   * Rechtsgrundlage
   */
  legalRef: string | null;
  /** z.B. "§6 Abs. 2 EStG" */
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
  validTo?: string | null;
  /**
   * NULL = aktuell gueltig
   * Rechtsgrundlage
   */
  legalRef?: string | null;
  /** z.B. "§6 Abs. 2 EStG" */
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
  changeReason: string;
  /** z.B. "JStG 2027" */
  changedBy: number | null;
  changedAt: Date;
};

export type TaxParameterHistoryInsert = {
  taxParameterId?: number | null;
  paramKey: string;
  previousValue?: any | null;
  newValue: any;
  changeReason: string;
  /** z.B. "JStG 2027" */
  changedBy?: number | null;
  changedAt?: Date;
};

export type IabEntry = {
  id: number;
  managingCompanyId: number;
  /** Geplante Investition */
  description: string;
  /** z.B. "Firmenwagen VW Passat" */
  plannedAssetType: BookkeepingAssetType;
  plannedAcquisitionCost: string;
  /** Geplante AK */
  deductionRate: string;
  /** Max 50% (§7g Abs. 1 S. 1) */
  deductionAmount: string;
  /**
   * = plannedAK * rate (max 50%)
   * Zeitraum
   */
  fiscalYearClaimed: number;
  /** Jahr in dem IAB geltend gemacht wurde */
  deadlineDate: string;
  /** Fristende: 3 Jahre nach Anschaffungsjahr-Ende */
  status: IabStatus;
  /** Aufloesung bei Kauf */
  dissolvedAt: Date | null;
  linkedAssetId: number | null;
  akReductionAmount: string | null;
  /**
   * Betrag um den AK des Assets reduziert wird
   * Rueckabwicklung bei Fristablauf
   */
  reversedAt: Date | null;
  reversalAmount: string | null;
  /** = deductionAmount (wird zum Gewinn hinzugerechnet) */
  reversalInterest: string | null;
  /** 6% p.a. Zinsen (§7g Abs. 3 EStG) */
  reversalFiscalYear: number | null;
  /**
   * Jahr der Rueckabwicklung
   * Metadata
   */
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
  /** Geplante Investition */
  description: string;
  /** z.B. "Firmenwagen VW Passat" */
  plannedAssetType: BookkeepingAssetType;
  plannedAcquisitionCost: string;
  /** Geplante AK */
  deductionRate?: string;
  /** Max 50% (§7g Abs. 1 S. 1) */
  deductionAmount: string;
  /**
   * = plannedAK * rate (max 50%)
   * Zeitraum
   */
  fiscalYearClaimed: number;
  /** Jahr in dem IAB geltend gemacht wurde */
  deadlineDate: string;
  /** Fristende: 3 Jahre nach Anschaffungsjahr-Ende */
  status?: IabStatus;
  /** Aufloesung bei Kauf */
  dissolvedAt?: Date | null;
  linkedAssetId?: number | null;
  akReductionAmount?: string | null;
  /**
   * Betrag um den AK des Assets reduziert wird
   * Rueckabwicklung bei Fristablauf
   */
  reversedAt?: Date | null;
  reversalAmount?: string | null;
  /** = deductionAmount (wird zum Gewinn hinzugerechnet) */
  reversalInterest?: string | null;
  /** 6% p.a. Zinsen (§7g Abs. 3 EStG) */
  reversalFiscalYear?: number | null;
  /**
   * Jahr der Rueckabwicklung
   * Metadata
   */
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
}


export type FullDocument = {
    document: Document;
    assignments: DocumentAssignment[];
}




export type FullSelectedCompany = {
    selection: UserSelectedCompany;
    company: ManagingCompany;
}

// Einkommensteuer types (IncomeTaxSettings standalone wegen Generator-Limitation)
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
  /** Zeile 3-6: Einkommen & einbehaltene Steuern */
  bruttoarbeitslohn: string;
  /** Zeile 3 */
  lohnsteuer: string;
  /** Zeile 4 */
  solidaritaetszuschlag: string;
  /** Zeile 5 */
  kirchensteuer: string;
  /**
   * Zeile 6
   * Zeile 8: Versorgungsbezuege
   */
  versorgungsbezuege: string | null;
  /**
   * Zeile 8
   * Zeile 15: Lohnersatzleistungen (Progressionsvorbehalt)
   */
  lohnersatzleistungen: string | null;
  /**
   * Zeile 15
   * Zeile 17-18: Steuerfreie Fahrtkostenerstattungen
   */
  steuerfreiFahrtkosten: string | null;
  /** Zeile 17 */
  pauschalBesteuertFahrtkosten: string | null;
  /**
   * Zeile 18
   * Zeile 22a-27: Sozialversicherungsbeitraege
   */
  agAnteilRV: string | null;
  /** Zeile 22a (AG-Anteil Rentenversicherung) */
  anAnteilRV: string | null;
  /** Zeile 23a (AN-Anteil Rentenversicherung) */
  agZuschussKV: string | null;
  /** Zeile 24a/b (AG-Zuschuss Krankenversicherung) */
  anBeitraegeKV: string | null;
  /** Zeile 25 (AN-Beitraege Krankenversicherung) */
  anBeitraegePV: string | null;
  /** Zeile 26 (AN-Beitraege Pflegeversicherung) */
  anBeitraegeAV: string | null;
  /**
   * Zeile 27 (AN-Beitraege Arbeitslosenversicherung)
   * Dokumentverweis (Scan der Lohnsteuerbescheinigung)
   */
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
  /** Zeile 3-6: Einkommen & einbehaltene Steuern */
  bruttoarbeitslohn: string;
  /** Zeile 3 */
  lohnsteuer?: string;
  /** Zeile 4 */
  solidaritaetszuschlag?: string;
  /** Zeile 5 */
  kirchensteuer?: string;
  /**
   * Zeile 6
   * Zeile 8: Versorgungsbezuege
   */
  versorgungsbezuege?: string | null;
  /**
   * Zeile 8
   * Zeile 15: Lohnersatzleistungen (Progressionsvorbehalt)
   */
  lohnersatzleistungen?: string | null;
  /**
   * Zeile 15
   * Zeile 17-18: Steuerfreie Fahrtkostenerstattungen
   */
  steuerfreiFahrtkosten?: string | null;
  /** Zeile 17 */
  pauschalBesteuertFahrtkosten?: string | null;
  /**
   * Zeile 18
   * Zeile 22a-27: Sozialversicherungsbeitraege
   */
  agAnteilRV?: string | null;
  /** Zeile 22a (AG-Anteil Rentenversicherung) */
  anAnteilRV?: string | null;
  /** Zeile 23a (AN-Anteil Rentenversicherung) */
  agZuschussKV?: string | null;
  /** Zeile 24a/b (AG-Zuschuss Krankenversicherung) */
  anBeitraegeKV?: string | null;
  /** Zeile 25 (AN-Beitraege Krankenversicherung) */
  anBeitraegePV?: string | null;
  /** Zeile 26 (AN-Beitraege Pflegeversicherung) */
  anBeitraegeAV?: string | null;
  /**
   * Zeile 27 (AN-Beitraege Arbeitslosenversicherung)
   * Dokumentverweis (Scan der Lohnsteuerbescheinigung)
   */
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
  amount: string;
  /** Rechnungsbetrag / Arbeitskosten (NICHT der Steuerabzug) */
  documentId: number | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type SteuerminderungenInsert = {
  managingCompanyId: number;
  taxYear: number;
  type: SteuerminderungType;
  description: string;
  amount: string;
  /** Rechnungsbetrag / Arbeitskosten (NICHT der Steuerabzug) */
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
  /** Klassifikation */
  type: CapitalMovementType;
  /** withdrawal | deposit */
  subType: CapitalMovementSubType;
  /**
   * Detailkategorie
   * Betrag (immer positiv, Richtung ergibt sich aus type)
   */
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
  /** Klassifikation */
  type: CapitalMovementType;
  /** withdrawal | deposit */
  subType: CapitalMovementSubType;
  /**
   * Detailkategorie
   * Betrag (immer positiv, Richtung ergibt sich aus type)
   */
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





export type OAuth2Client = {
  id: number;
  /** Client identification */
  clientId: string;
  clientSecretHash: string;
  clientSecretFingerprint: string;
  /** HMAC-SHA256 */
  pepperVersion: number;
  /**
   * For secret rotation
   * Metadata
   */
  name: string;
  /** e.g., "Production API Client" */
  description: string | null;
  /**
   * e.g., "Main backend service for production"
   * Tenant isolation (only used when OAUTH2_TENANT_CONFIG.enabled = true)
   * Apps with tenants set the real ID; apps without get the default 0.
   * FK constraint is added by app-specific migration, NOT in Drizzle schema (keeps file syncable).
   */
  managingCompanyId: number;
  defaultCostCenter: number | null;
  /** Default cost center for operations */
  availableCostCenters: string | null;
  /**
   * JSON array of allowed cost center IDs (null = all)
   * Access control
   */
  role: string;
  /** viewer | editor | admin */
  scopes: string | null;
  /**
   * JSON array: ["invoices:read", "invoices:write", "expenses:read"]
   * Token settings
   */
  accessTokenTtl: number;
  /** Seconds (1 hour default) */
  refreshTokenTtl: number;
  /** Seconds (30 days default) */
  maxTokensPerClient: number;
  /**
   * Max concurrent refresh tokens
   * Security
   */
  allowedIps: string | null;
  /** JSON array of whitelisted IPs (null = any) */
  allowedOrigins: string | null;
  /** JSON array of whitelisted origins for CORS */
  rateLimitPerMinute: number;
  /** Requests per minute */
  rateLimitPerHour: number;
  /**
   * Requests per hour
   * Status
   */
  isActive: boolean;
  revokedAt: Date | null;
  validFrom: Date;
  validTo: Date | null;
  /**
   * null = no expiry
   * Secret rotation & dual-secret transition window (TSK-000079, TSK-000084)
   */
  previousClientSecretHash: string | null;
  previousClientSecretFingerprint: string | null;
  previousPepperVersion: number | null;
  lastRotatedAt: Date | null;
  supersededAt: Date | null;
  /** Audit */
  createdBy: number;
  /** User ID who created this client */
  createdAt: Date;
  updatedAt: Date | null;
  lastUsedAt: Date | null;
};

export type OAuth2ClientInsert = {
  /** Client identification */
  clientId: string;
  clientSecretHash: string;
  clientSecretFingerprint: string;
  /** HMAC-SHA256 */
  pepperVersion?: number;
  /**
   * For secret rotation
   * Metadata
   */
  name: string;
  /** e.g., "Production API Client" */
  description?: string | null;
  /**
   * e.g., "Main backend service for production"
   * Tenant isolation (only used when OAUTH2_TENANT_CONFIG.enabled = true)
   * Apps with tenants set the real ID; apps without get the default 0.
   * FK constraint is added by app-specific migration, NOT in Drizzle schema (keeps file syncable).
   */
  managingCompanyId?: number;
  defaultCostCenter?: number | null;
  /** Default cost center for operations */
  availableCostCenters?: string | null;
  /**
   * JSON array of allowed cost center IDs (null = all)
   * Access control
   */
  role?: string;
  /** viewer | editor | admin */
  scopes?: string | null;
  /**
   * JSON array: ["invoices:read", "invoices:write", "expenses:read"]
   * Token settings
   */
  accessTokenTtl?: number;
  /** Seconds (1 hour default) */
  refreshTokenTtl?: number;
  /** Seconds (30 days default) */
  maxTokensPerClient?: number;
  /**
   * Max concurrent refresh tokens
   * Security
   */
  allowedIps?: string | null;
  /** JSON array of whitelisted IPs (null = any) */
  allowedOrigins?: string | null;
  /** JSON array of whitelisted origins for CORS */
  rateLimitPerMinute?: number;
  /** Requests per minute */
  rateLimitPerHour?: number;
  /**
   * Requests per hour
   * Status
   */
  isActive?: boolean;
  revokedAt?: Date | null;
  validFrom?: Date;
  validTo?: Date | null;
  /**
   * null = no expiry
   * Secret rotation & dual-secret transition window (TSK-000079, TSK-000084)
   */
  previousClientSecretHash?: string | null;
  previousClientSecretFingerprint?: string | null;
  previousPepperVersion?: number | null;
  lastRotatedAt?: Date | null;
  supersededAt?: Date | null;
  /** Audit */
  createdBy: number;
  /** User ID who created this client */
  createdAt?: Date;
  updatedAt?: Date | null;
  lastUsedAt?: Date | null;
};

export type OAuth2ClientId = OAuth2Client["id"];

export type OAuth2RefreshToken = {
  id: number;
  clientId: number;
  /** Token identification */
  tokenHash: string;
  /** Argon2 hash of refresh token */
  tokenFingerprint: string;
  /** HMAC-SHA256 for fast lookup */
  jti: string;
  /**
   * JWT ID (unique identifier)
   * Metadata
   */
  scope: string | null;
  /** Space-separated scopes granted to this token */
  issuedAt: Date;
  expiresAt: Date;
  /** Security */
  isRevoked: boolean;
  revokedAt: Date | null;
  revokedReason: string | null;
  /** Tracking */
  lastUsedAt: Date | null;
  usageCount: number;
  ipAddress: string | null;
  /** IPv4 or IPv6 */
  userAgent: string | null;
};

export type OAuth2RefreshTokenInsert = {
  clientId: number;
  /** Token identification */
  tokenHash: string;
  /** Argon2 hash of refresh token */
  tokenFingerprint: string;
  /** HMAC-SHA256 for fast lookup */
  jti: string;
  /**
   * JWT ID (unique identifier)
   * Metadata
   */
  scope?: string | null;
  /** Space-separated scopes granted to this token */
  issuedAt?: Date;
  expiresAt: Date;
  /** Security */
  isRevoked?: boolean;
  revokedAt?: Date | null;
  revokedReason?: string | null;
  /** Tracking */
  lastUsedAt?: Date | null;
  usageCount?: number;
  ipAddress?: string | null;
  /** IPv4 or IPv6 */
  userAgent?: string | null;
};

export type OAuth2AuditLog = {
  id: number;
  clientId: number | null;
  /** Request details */
  grantType: string;
  /** client_credentials | refresh_token */
  scope: string | null;
  /** Requested scope */
  success: boolean;
  errorCode: string | null;
  /** invalid_client | invalid_grant | etc. */
  errorDescription: string | null;
  /** Security context */
  ipAddress: string | null;
  userAgent: string | null;
  timestamp: Date;
  /** Rate limiting metadata */
  requestCount: number | null;
  /** Requests in current window */
  rateLimitExceeded: boolean;
};

export type OAuth2AuditLogInsert = {
  clientId?: number | null;
  /** Request details */
  grantType: string;
  /** client_credentials | refresh_token */
  scope?: string | null;
  /** Requested scope */
  success: boolean;
  errorCode?: string | null;
  /** invalid_client | invalid_grant | etc. */
  errorDescription?: string | null;
  /** Security context */
  ipAddress?: string | null;
  userAgent?: string | null;
  timestamp?: Date;
  /** Rate limiting metadata */
  requestCount?: number | null;
  /** Requests in current window */
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
> & {
    hasPreviousSecret?: boolean;
};


