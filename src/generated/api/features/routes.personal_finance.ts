/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type PfAccountsOverviewParams = undefined;
export type PfAccountsOverviewQuery = {

};
export type PfAccountsOverviewBody = undefined;
export type PfAccountsOverviewResponseData = {
  accounts: Array<{
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}>;
  totals: {
  netWorthCents: number;
  liquidCents: number;
  earmarkedCents: number;
  availableCents: number;
  creditCardDebtCents: number;
  plannedAccounts: number;
  currency: string;
};
};
export type PfAccountsOverviewResponse = import("../types").ApiEnvelope<PfAccountsOverviewResponseData>;

export type PfEarmarksListParams = undefined;
export type PfEarmarksListQuery = {

};
export type PfEarmarksListBody = undefined;
export type PfEarmarksListResponseData = Array<{
  id: number;
  accountId: number;
  accountName: string | null;
  name: string;
  kind: "tax_reserve" | "savings_goal" | "buffer" | "planned_expense" | "other";
  reservedCents: number;
  targetCents: number | null;
  targetDate: string | null;
  progressPercent: number | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
}>;
export type PfEarmarksListResponse = import("../types").ApiEnvelope<PfEarmarksListResponseData>;

export type PfEarmarksCreateParams = undefined;
export type PfEarmarksCreateQuery = undefined;
export type PfEarmarksCreateBody = {
  accountId: number;
  name: string;
  kind?: "tax_reserve" | "savings_goal" | "buffer" | "planned_expense" | "other";
  reservedCents?: number;
  targetCents?: number | null;
  targetDate?: string | null;
  notes?: string | null;
};
export type PfEarmarksCreateResponseData = {
  id: number;
  accountId: number;
  accountName: string | null;
  name: string;
  kind: "tax_reserve" | "savings_goal" | "buffer" | "planned_expense" | "other";
  reservedCents: number;
  targetCents: number | null;
  targetDate: string | null;
  progressPercent: number | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
};
export type PfEarmarksCreateResponse = import("../types").ApiEnvelope<PfEarmarksCreateResponseData>;

export type PfEarmarksUpdateParams = {
  id: number;
};
export type PfEarmarksUpdateQuery = undefined;
export type PfEarmarksUpdateBody = {
  accountId?: number;
  name?: string;
  kind?: "tax_reserve" | "savings_goal" | "buffer" | "planned_expense" | "other";
  reservedCents?: number;
  targetCents?: number | null;
  targetDate?: string | null;
  notes?: string | null;
  isActive?: boolean;
};
export type PfEarmarksUpdateResponseData = {
  id: number;
  accountId: number;
  accountName: string | null;
  name: string;
  kind: "tax_reserve" | "savings_goal" | "buffer" | "planned_expense" | "other";
  reservedCents: number;
  targetCents: number | null;
  targetDate: string | null;
  progressPercent: number | null;
  notes: string | null;
  isActive: boolean;
  createdAt: string;
};
export type PfEarmarksUpdateResponse = import("../types").ApiEnvelope<PfEarmarksUpdateResponseData>;

export type PfEarmarksDeleteParams = {
  id: number;
};
export type PfEarmarksDeleteQuery = undefined;
export type PfEarmarksDeleteBody = undefined;
export type PfEarmarksDeleteResponseData = null;
export type PfEarmarksDeleteResponse = import("../types").ApiEnvelope<PfEarmarksDeleteResponseData>;

export type PfAccountsListParams = undefined;
export type PfAccountsListQuery = {
  includeInactive?: boolean;
  kind?: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  onlyPlanned?: boolean;
  onlyReal?: boolean;
};
export type PfAccountsListBody = undefined;
export type PfAccountsListResponseData = Array<{
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}>;
export type PfAccountsListResponse = import("../types").ApiEnvelope<PfAccountsListResponseData>;

export type PfAccountsCreateParams = undefined;
export type PfAccountsCreateQuery = undefined;
export type PfAccountsCreateBody = {
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose?: string | null;
  institutionName?: string | null;
  iban?: string | null;
  bic?: string | null;
  accountNumberHint?: string | null;
  currency?: string;
  currentBalanceCents?: number;
  balanceAsOf?: string | null;
  creditLimitCents?: number | null;
  includeInNetWorth?: boolean;
  isPlanned?: boolean;
  plannedFromDate?: string | null;
  color?: string | null;
  icon?: string | null;
  sortOrder?: number;
  notes?: string | null;
};
export type PfAccountsCreateResponseData = {
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfAccountsCreateResponse = import("../types").ApiEnvelope<PfAccountsCreateResponseData>;

export type PfAccountsGetParams = {
  id: number;
};
export type PfAccountsGetQuery = undefined;
export type PfAccountsGetBody = undefined;
export type PfAccountsGetResponseData = {
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfAccountsGetResponse = import("../types").ApiEnvelope<PfAccountsGetResponseData>;

export type PfAccountsUpdateParams = {
  id: number;
};
export type PfAccountsUpdateQuery = undefined;
export type PfAccountsUpdateBody = {
  name?: string;
  kind?: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose?: string | null;
  institutionName?: string | null;
  iban?: string | null;
  bic?: string | null;
  accountNumberHint?: string | null;
  currency?: string;
  currentBalanceCents?: number;
  balanceAsOf?: string | null;
  creditLimitCents?: number | null;
  includeInNetWorth?: boolean;
  isPlanned?: boolean;
  plannedFromDate?: string | null;
  color?: string | null;
  icon?: string | null;
  sortOrder?: number;
  notes?: string | null;
  isActive?: boolean;
  closedAt?: string | null;
};
export type PfAccountsUpdateResponseData = {
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfAccountsUpdateResponse = import("../types").ApiEnvelope<PfAccountsUpdateResponseData>;

export type PfAccountsSetBalanceParams = {
  id: number;
};
export type PfAccountsSetBalanceQuery = undefined;
export type PfAccountsSetBalanceBody = {
  currentBalanceCents: number;
  balanceAsOf?: string;
};
export type PfAccountsSetBalanceResponseData = {
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfAccountsSetBalanceResponse = import("../types").ApiEnvelope<PfAccountsSetBalanceResponseData>;

export type PfAccountsPromoteParams = {
  id: number;
};
export type PfAccountsPromoteQuery = undefined;
export type PfAccountsPromoteBody = {
  iban?: string | null;
  bic?: string | null;
  institutionName?: string | null;
  currentBalanceCents?: number;
  balanceAsOf?: string | null;
  includeInNetWorth?: boolean;
};
export type PfAccountsPromoteResponseData = {
  id: number;
  name: string;
  kind: "checking" | "savings" | "tax_reserve" | "credit_card" | "debit_card" | "cash" | "brokerage" | "other";
  purpose: string | null;
  institutionName: string | null;
  ibanMasked: string | null;
  hasIban: boolean;
  fintsConnectionId: number | null;
  bic: string | null;
  accountNumberHint: string | null;
  currency: string;
  currentBalanceCents: number;
  balanceAsOf: string | null;
  balanceSource: string;
  creditLimitCents: number | null;
  availableCents: number;
  earmarkedCents: number;
  includeInNetWorth: boolean;
  isPlanned: boolean;
  plannedFromDate: string | null;
  activatedAt: string | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
  closedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfAccountsPromoteResponse = import("../types").ApiEnvelope<PfAccountsPromoteResponseData>;

export type PfAccountsDeleteParams = {
  id: number;
};
export type PfAccountsDeleteQuery = undefined;
export type PfAccountsDeleteBody = undefined;
export type PfAccountsDeleteResponseData = null;
export type PfAccountsDeleteResponse = import("../types").ApiEnvelope<PfAccountsDeleteResponseData>;

export type PfCategoriesListParams = undefined;
export type PfCategoriesListQuery = {
  kind?: "expense" | "income" | "transfer";
  includeInactive?: boolean;
};
export type PfCategoriesListBody = undefined;
export type PfCategoriesListResponseData = Array<{
  id: number;
  name: string;
  slug: string;
  kind: "expense" | "income" | "transfer";
  parentId: number | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
}>;
export type PfCategoriesListResponse = import("../types").ApiEnvelope<PfCategoriesListResponseData>;

export type PfCategoriesSeedDefaultsParams = undefined;
export type PfCategoriesSeedDefaultsQuery = {

};
export type PfCategoriesSeedDefaultsBody = {

};
export type PfCategoriesSeedDefaultsResponseData = Array<{
  id: number;
  name: string;
  slug: string;
  kind: "expense" | "income" | "transfer";
  parentId: number | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
}>;
export type PfCategoriesSeedDefaultsResponse = import("../types").ApiEnvelope<PfCategoriesSeedDefaultsResponseData>;

export type PfCategoriesCreateParams = undefined;
export type PfCategoriesCreateQuery = undefined;
export type PfCategoriesCreateBody = {
  name: string;
  slug?: string;
  kind?: "expense" | "income" | "transfer";
  parentId?: number | null;
  color?: string | null;
  icon?: string | null;
  sortOrder?: number;
};
export type PfCategoriesCreateResponseData = {
  id: number;
  name: string;
  slug: string;
  kind: "expense" | "income" | "transfer";
  parentId: number | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
};
export type PfCategoriesCreateResponse = import("../types").ApiEnvelope<PfCategoriesCreateResponseData>;

export type PfCategoriesUpdateParams = {
  id: number;
};
export type PfCategoriesUpdateQuery = undefined;
export type PfCategoriesUpdateBody = {
  name?: string;
  slug?: string;
  kind?: "expense" | "income" | "transfer";
  parentId?: number | null;
  color?: string | null;
  icon?: string | null;
  sortOrder?: number;
  isActive?: boolean;
};
export type PfCategoriesUpdateResponseData = {
  id: number;
  name: string;
  slug: string;
  kind: "expense" | "income" | "transfer";
  parentId: number | null;
  color: string | null;
  icon: string | null;
  sortOrder: number;
  isActive: boolean;
};
export type PfCategoriesUpdateResponse = import("../types").ApiEnvelope<PfCategoriesUpdateResponseData>;

export type PfCategoriesDeleteParams = {
  id: number;
};
export type PfCategoriesDeleteQuery = undefined;
export type PfCategoriesDeleteBody = undefined;
export type PfCategoriesDeleteResponseData = null;
export type PfCategoriesDeleteResponse = import("../types").ApiEnvelope<PfCategoriesDeleteResponseData>;

export type PfRecurringUpcomingParams = undefined;
export type PfRecurringUpcomingQuery = {
  from?: string;
  to?: string;
  days?: number;
  accountId?: number;
  includePlanned?: boolean;
};
export type PfRecurringUpcomingBody = undefined;
export type PfRecurringUpcomingResponseData = {
  from: string;
  to: string;
  occurrences: Array<{
  date: string;
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  amountCents: number;
  amountVaries: boolean;
  currency: string;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  internalTransfer: boolean;
  isPlanned: boolean;
  categoryName: string | null;
}>;
  totalOutCents: number;
  totalInCents: number;
  totalTransferCents: number;
};
export type PfRecurringUpcomingResponse = import("../types").ApiEnvelope<PfRecurringUpcomingResponseData>;

export type PfRecurringDeadlinesParams = undefined;
export type PfRecurringDeadlinesQuery = {
  days?: number;
  includeMissed?: boolean;
};
export type PfRecurringDeadlinesBody = undefined;
export type PfRecurringDeadlinesResponseData = Array<{
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  counterpartyName: string | null;
  amountCents: number;
  monthlyEquivalentCents: number;
  cancellationUrl: string | null;
  contractNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  missed: boolean;
}>;
export type PfRecurringDeadlinesResponse = import("../types").ApiEnvelope<PfRecurringDeadlinesResponseData>;

export type PfRecurringMonthlyLoadParams = undefined;
export type PfRecurringMonthlyLoadQuery = {

};
export type PfRecurringMonthlyLoadBody = undefined;
export type PfRecurringMonthlyLoadResponseData = {
  monthlyOutCents: number;
  monthlyInCents: number;
  monthlyNetCents: number;
  monthlyTransferCents: number;
  byKind: Array<{
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  monthlyCents: number;
  count: number;
}>;
  byCategory: Array<{
  categoryId: number | null;
  categoryName: string | null;
  monthlyCents: number;
  count: number;
}>;
};
export type PfRecurringMonthlyLoadResponse = import("../types").ApiEnvelope<PfRecurringMonthlyLoadResponseData>;

export type PfRecurringRefreshParams = undefined;
export type PfRecurringRefreshQuery = {

};
export type PfRecurringRefreshBody = {

};
export type PfRecurringRefreshResponseData = {
  changed: number;
};
export type PfRecurringRefreshResponse = import("../types").ApiEnvelope<PfRecurringRefreshResponseData>;

export type PfStandingOrdersDetectParams = undefined;
export type PfStandingOrdersDetectQuery = {
  lookbackDays?: number;
  minOccurrences?: number;
};
export type PfStandingOrdersDetectBody = undefined;
export type PfStandingOrdersDetectResponseData = Array<{
  key: string;
  internal: boolean;
  evidence: "bank_confirmed" | "pattern";
  accountId: number;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  direction: "in" | "out";
  amountCents: number;
  counterpartyName: string | null;
  counterpartyIban: string | null;
  purpose: string | null;
  occurrences: number;
  firstDate: string;
  lastDate: string;
  transactionIds: Array<number>;
  nextDueDate: string | null;
  suggestedName: string;
  rhythm: {
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  regular: boolean;
  medianGapDays: number;
} | null;
  existingItemId: number | null;
}>;
export type PfStandingOrdersDetectResponse = import("../types").ApiEnvelope<PfStandingOrdersDetectResponseData>;

export type PfStandingOrdersRunParams = undefined;
export type PfStandingOrdersRunQuery = {

};
export type PfStandingOrdersRunBody = {

};
export type PfStandingOrdersRunResponseData = {
  candidates: number;
  created: number;
  proposed: number;
  alreadyKnown: number;
  skippedDecided: number;
};
export type PfStandingOrdersRunResponse = import("../types").ApiEnvelope<PfStandingOrdersRunResponseData>;

export type PfRecurringListParams = undefined;
export type PfRecurringListQuery = {
  status?: "active" | "paused" | "cancelled" | "ended";
  kind?: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction?: "out" | "in";
  accountId?: number;
  onlyCancellable?: boolean;
  includePlanned?: boolean;
  onlyPlanned?: boolean;
};
export type PfRecurringListBody = undefined;
export type PfRecurringListResponseData = Array<{
  id: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  counterpartyName: string | null;
  description: string | null;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  debtId: number | null;
  amountCents: number;
  currency: string;
  amountVaries: boolean;
  monthlyEquivalentCents: number;
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  dueMonth: number | null;
  nextDueDate: string | null;
  lastChargedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  status: "active" | "paused" | "cancelled" | "ended";
  isPlanned: boolean;
  origin: "manual" | "detected";
  detectedAt: string | null;
  contractStartDate: string | null;
  minimumTermMonths: number | null;
  autoRenewMonths: number | null;
  fixedEndDate: string | null;
  noticePeriodValue: number | null;
  noticePeriodUnit: "days" | "weeks" | "months" | null;
  noticeAnchor: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationDeadline: string | null;
  cancelledAt: string | null;
  cancellationEffectiveDate: string | null;
  cancellationUrl: string | null;
  contractNumber: string | null;
  customerNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}>;
export type PfRecurringListResponse = import("../types").ApiEnvelope<PfRecurringListResponseData>;

export type PfRecurringCreateParams = undefined;
export type PfRecurringCreateQuery = undefined;
export type PfRecurringCreateBody = {
  name: string;
  kind?: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction?: "out" | "in";
  counterpartyName?: string | null;
  description?: string | null;
  accountId?: number | null;
  counterAccountId?: number | null;
  categoryId?: number | null;
  debtId?: number | null;
  amountCents: number;
  currency?: string;
  amountVaries?: boolean;
  isPlanned?: boolean;
  interval?: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays?: number | null;
  dueDayOfMonth?: number | null;
  dueRule?: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust?: "none" | "preceding" | "following";
  dueMonth?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  contractStartDate?: string | null;
  minimumTermMonths?: number | null;
  autoRenewMonths?: number | null;
  fixedEndDate?: string | null;
  noticePeriodValue?: number | null;
  noticePeriodUnit?: "days" | "weeks" | "months" | null;
  noticeAnchor?: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationUrl?: string | null;
  contractNumber?: string | null;
  customerNumber?: string | null;
  notes?: string | null;
};
export type PfRecurringCreateResponseData = {
  id: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  counterpartyName: string | null;
  description: string | null;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  debtId: number | null;
  amountCents: number;
  currency: string;
  amountVaries: boolean;
  monthlyEquivalentCents: number;
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  dueMonth: number | null;
  nextDueDate: string | null;
  lastChargedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  status: "active" | "paused" | "cancelled" | "ended";
  isPlanned: boolean;
  origin: "manual" | "detected";
  detectedAt: string | null;
  contractStartDate: string | null;
  minimumTermMonths: number | null;
  autoRenewMonths: number | null;
  fixedEndDate: string | null;
  noticePeriodValue: number | null;
  noticePeriodUnit: "days" | "weeks" | "months" | null;
  noticeAnchor: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationDeadline: string | null;
  cancelledAt: string | null;
  cancellationEffectiveDate: string | null;
  cancellationUrl: string | null;
  contractNumber: string | null;
  customerNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfRecurringCreateResponse = import("../types").ApiEnvelope<PfRecurringCreateResponseData>;

export type PfRecurringGetParams = {
  id: number;
};
export type PfRecurringGetQuery = undefined;
export type PfRecurringGetBody = undefined;
export type PfRecurringGetResponseData = {
  id: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  counterpartyName: string | null;
  description: string | null;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  debtId: number | null;
  amountCents: number;
  currency: string;
  amountVaries: boolean;
  monthlyEquivalentCents: number;
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  dueMonth: number | null;
  nextDueDate: string | null;
  lastChargedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  status: "active" | "paused" | "cancelled" | "ended";
  isPlanned: boolean;
  origin: "manual" | "detected";
  detectedAt: string | null;
  contractStartDate: string | null;
  minimumTermMonths: number | null;
  autoRenewMonths: number | null;
  fixedEndDate: string | null;
  noticePeriodValue: number | null;
  noticePeriodUnit: "days" | "weeks" | "months" | null;
  noticeAnchor: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationDeadline: string | null;
  cancelledAt: string | null;
  cancellationEffectiveDate: string | null;
  cancellationUrl: string | null;
  contractNumber: string | null;
  customerNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfRecurringGetResponse = import("../types").ApiEnvelope<PfRecurringGetResponseData>;

export type PfRecurringUpdateParams = {
  id: number;
};
export type PfRecurringUpdateQuery = undefined;
export type PfRecurringUpdateBody = {
  name?: string;
  kind?: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction?: "out" | "in";
  counterpartyName?: string | null;
  description?: string | null;
  accountId?: number | null;
  counterAccountId?: number | null;
  categoryId?: number | null;
  debtId?: number | null;
  amountCents?: number;
  isPlanned?: boolean;
  currency?: string;
  amountVaries?: boolean;
  interval?: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays?: number | null;
  dueDayOfMonth?: number | null;
  dueRule?: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust?: "none" | "preceding" | "following";
  dueMonth?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  status?: "active" | "paused" | "cancelled" | "ended";
  contractStartDate?: string | null;
  minimumTermMonths?: number | null;
  autoRenewMonths?: number | null;
  fixedEndDate?: string | null;
  noticePeriodValue?: number | null;
  noticePeriodUnit?: "days" | "weeks" | "months" | null;
  noticeAnchor?: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationUrl?: string | null;
  contractNumber?: string | null;
  customerNumber?: string | null;
  notes?: string | null;
};
export type PfRecurringUpdateResponseData = {
  id: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  counterpartyName: string | null;
  description: string | null;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  debtId: number | null;
  amountCents: number;
  currency: string;
  amountVaries: boolean;
  monthlyEquivalentCents: number;
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  dueMonth: number | null;
  nextDueDate: string | null;
  lastChargedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  status: "active" | "paused" | "cancelled" | "ended";
  isPlanned: boolean;
  origin: "manual" | "detected";
  detectedAt: string | null;
  contractStartDate: string | null;
  minimumTermMonths: number | null;
  autoRenewMonths: number | null;
  fixedEndDate: string | null;
  noticePeriodValue: number | null;
  noticePeriodUnit: "days" | "weeks" | "months" | null;
  noticeAnchor: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationDeadline: string | null;
  cancelledAt: string | null;
  cancellationEffectiveDate: string | null;
  cancellationUrl: string | null;
  contractNumber: string | null;
  customerNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfRecurringUpdateResponse = import("../types").ApiEnvelope<PfRecurringUpdateResponseData>;

export type PfRecurringCancelParams = {
  id: number;
};
export type PfRecurringCancelQuery = undefined;
export type PfRecurringCancelBody = {
  cancelledAt?: string;
  effectiveDate?: string;
  notes?: string;
};
export type PfRecurringCancelResponseData = {
  id: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  counterpartyName: string | null;
  description: string | null;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  debtId: number | null;
  amountCents: number;
  currency: string;
  amountVaries: boolean;
  monthlyEquivalentCents: number;
  interval: "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "semiannual" | "yearly" | "custom_days";
  intervalDays: number | null;
  dueDayOfMonth: number | null;
  dueRule: "day_of_month" | "last_business_day" | "first_business_day";
  businessDayAdjust: "none" | "preceding" | "following";
  dueMonth: number | null;
  nextDueDate: string | null;
  lastChargedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  status: "active" | "paused" | "cancelled" | "ended";
  isPlanned: boolean;
  origin: "manual" | "detected";
  detectedAt: string | null;
  contractStartDate: string | null;
  minimumTermMonths: number | null;
  autoRenewMonths: number | null;
  fixedEndDate: string | null;
  noticePeriodValue: number | null;
  noticePeriodUnit: "days" | "weeks" | "months" | null;
  noticeAnchor: "any_time" | "end_of_month" | "end_of_quarter" | "end_of_billing_period" | "end_of_term" | "end_of_contract_year" | null;
  cancellationDeadline: string | null;
  cancelledAt: string | null;
  cancellationEffectiveDate: string | null;
  cancellationUrl: string | null;
  contractNumber: string | null;
  customerNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfRecurringCancelResponse = import("../types").ApiEnvelope<PfRecurringCancelResponseData>;

export type PfRecurringDeleteParams = {
  id: number;
};
export type PfRecurringDeleteQuery = undefined;
export type PfRecurringDeleteBody = undefined;
export type PfRecurringDeleteResponseData = null;
export type PfRecurringDeleteResponse = import("../types").ApiEnvelope<PfRecurringDeleteResponseData>;

export type PfDebtsOverviewParams = undefined;
export type PfDebtsOverviewQuery = {

};
export type PfDebtsOverviewBody = undefined;
export type PfDebtsOverviewResponseData = {
  debts: Array<{
  id: number;
  name: string;
  creditorName: string | null;
  kind: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber: string | null;
  originalAmountCents: number | null;
  outstandingCents: number;
  balanceAsOf: string | null;
  interestRatePercent: number | null;
  effectiveRatePercent: number | null;
  accountId: number | null;
  accountName: string | null;
  mirroredAccountId: number | null;
  startDate: string | null;
  expectedPayoffDate: string | null;
  remainingPayments: number | null;
  status: "active" | "paid_off" | "deferred" | "written_off";
  minPaymentPercent: number | null;
  minPaymentFloorCents: number | null;
  isRevolving: boolean;
  payoutCents: number | null;
  termMonths: number | null;
  payoffPriority: number | null;
  allowsExtraPayment: boolean;
  extraPaymentCapCentsPerYear: number | null;
  balanceCheckEveryDays: number;
  derivedRatePercent: number | null;
  derivedRateConfidence: "low" | "medium" | "high" | null;
  derivedRateAsOf: string | null;
  effectiveRateUsedPercent: number;
  effectiveRateSource: "derived" | "contract" | "none";
  balanceAgeDays: number | null;
  balanceCheckDue: boolean;
  monthlyPaymentCents: number | null;
  linkedRecurringItemId: number | null;
  paidOffPercent: number | null;
  projectedPayoffDate: string | null;
  projectedMonthsRemaining: number | null;
  projectedInterestCents: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}>;
  totals: {
  outstandingCents: number;
  originalAmountCents: number;
  monthlyPaymentCents: number;
  debtFreeBy: string | null;
  count: number;
};
};
export type PfDebtsOverviewResponse = import("../types").ApiEnvelope<PfDebtsOverviewResponseData>;

export type PfDebtsListParams = undefined;
export type PfDebtsListQuery = {
  status?: "active" | "paid_off" | "deferred" | "written_off";
  kind?: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
};
export type PfDebtsListBody = undefined;
export type PfDebtsListResponseData = Array<{
  id: number;
  name: string;
  creditorName: string | null;
  kind: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber: string | null;
  originalAmountCents: number | null;
  outstandingCents: number;
  balanceAsOf: string | null;
  interestRatePercent: number | null;
  effectiveRatePercent: number | null;
  accountId: number | null;
  accountName: string | null;
  mirroredAccountId: number | null;
  startDate: string | null;
  expectedPayoffDate: string | null;
  remainingPayments: number | null;
  status: "active" | "paid_off" | "deferred" | "written_off";
  minPaymentPercent: number | null;
  minPaymentFloorCents: number | null;
  isRevolving: boolean;
  payoutCents: number | null;
  termMonths: number | null;
  payoffPriority: number | null;
  allowsExtraPayment: boolean;
  extraPaymentCapCentsPerYear: number | null;
  balanceCheckEveryDays: number;
  derivedRatePercent: number | null;
  derivedRateConfidence: "low" | "medium" | "high" | null;
  derivedRateAsOf: string | null;
  effectiveRateUsedPercent: number;
  effectiveRateSource: "derived" | "contract" | "none";
  balanceAgeDays: number | null;
  balanceCheckDue: boolean;
  monthlyPaymentCents: number | null;
  linkedRecurringItemId: number | null;
  paidOffPercent: number | null;
  projectedPayoffDate: string | null;
  projectedMonthsRemaining: number | null;
  projectedInterestCents: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}>;
export type PfDebtsListResponse = import("../types").ApiEnvelope<PfDebtsListResponseData>;

export type PfDebtsCreateParams = undefined;
export type PfDebtsCreateQuery = undefined;
export type PfDebtsCreateBody = {
  name: string;
  creditorName?: string | null;
  kind?: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber?: string | null;
  originalAmountCents?: number | null;
  outstandingCents?: number;
  balanceAsOf?: string | null;
  interestRatePercent?: number | null;
  effectiveRatePercent?: number | null;
  accountId?: number | null;
  mirroredAccountId?: number | null;
  startDate?: string | null;
  expectedPayoffDate?: string | null;
  remainingPayments?: number | null;
  minPaymentPercent?: number | null;
  minPaymentFloorCents?: number | null;
  isRevolving?: boolean;
  payoutCents?: number | null;
  termMonths?: number | null;
  payoffPriority?: number | null;
  allowsExtraPayment?: boolean;
  extraPaymentCapCentsPerYear?: number | null;
  balanceCheckEveryDays?: number;
  notes?: string | null;
};
export type PfDebtsCreateResponseData = {
  id: number;
  name: string;
  creditorName: string | null;
  kind: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber: string | null;
  originalAmountCents: number | null;
  outstandingCents: number;
  balanceAsOf: string | null;
  interestRatePercent: number | null;
  effectiveRatePercent: number | null;
  accountId: number | null;
  accountName: string | null;
  mirroredAccountId: number | null;
  startDate: string | null;
  expectedPayoffDate: string | null;
  remainingPayments: number | null;
  status: "active" | "paid_off" | "deferred" | "written_off";
  minPaymentPercent: number | null;
  minPaymentFloorCents: number | null;
  isRevolving: boolean;
  payoutCents: number | null;
  termMonths: number | null;
  payoffPriority: number | null;
  allowsExtraPayment: boolean;
  extraPaymentCapCentsPerYear: number | null;
  balanceCheckEveryDays: number;
  derivedRatePercent: number | null;
  derivedRateConfidence: "low" | "medium" | "high" | null;
  derivedRateAsOf: string | null;
  effectiveRateUsedPercent: number;
  effectiveRateSource: "derived" | "contract" | "none";
  balanceAgeDays: number | null;
  balanceCheckDue: boolean;
  monthlyPaymentCents: number | null;
  linkedRecurringItemId: number | null;
  paidOffPercent: number | null;
  projectedPayoffDate: string | null;
  projectedMonthsRemaining: number | null;
  projectedInterestCents: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfDebtsCreateResponse = import("../types").ApiEnvelope<PfDebtsCreateResponseData>;

export type PfDebtPlansListParams = undefined;
export type PfDebtPlansListQuery = {

};
export type PfDebtPlansListBody = undefined;
export type PfDebtPlansListResponseData = Array<{
  id: number;
  name: string;
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
  status: "draft" | "active" | "archived";
  baselineAt: string | null;
  notes: string | null;
}>;
export type PfDebtPlansListResponse = import("../types").ApiEnvelope<PfDebtPlansListResponseData>;

export type PfDebtPlansCreateParams = undefined;
export type PfDebtPlansCreateQuery = undefined;
export type PfDebtPlansCreateBody = {
  name: string;
  strategy?: "avalanche" | "snowball" | "custom";
  extraBudgetCents?: number;
  totalBudgetCapCents?: number | null;
  rollFreedPayments?: boolean;
  startMonth?: string;
  notes?: string | null;
};
export type PfDebtPlansCreateResponseData = {
  id: number;
  name: string;
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
  status: "draft" | "active" | "archived";
  baselineAt: string | null;
  notes: string | null;
};
export type PfDebtPlansCreateResponse = import("../types").ApiEnvelope<PfDebtPlansCreateResponseData>;

export type PfDebtPlansPreviewParams = undefined;
export type PfDebtPlansPreviewQuery = {
  strategy?: "avalanche" | "snowball" | "custom";
  extraBudgetCents?: number;
  totalBudgetCapCents?: number;
  rollFreedPayments?: boolean;
  startMonth?: string;
};
export type PfDebtPlansPreviewBody = undefined;
export type PfDebtPlansPreviewResponseData = {
  plan: {
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
};
  simulation: {
  rows: Array<{
  debtId: number;
  month: string;
  monthIndex: number;
  interestCents: number;
  paymentCents: number;
  extraCents: number;
  principalCents: number;
  endBalanceCents: number;
  isPayoffMonth: boolean;
}>;
  payoffByDebt: Record<string, string>;
  debtFreeMonth: string | null;
  totalInterestCents: number;
  totalPaidCents: number;
  months: number;
  unpayableDebtIds: Array<number>;
  focusOrder: Array<number>;
};
  minimumOnly: {
  rows: Array<{
  debtId: number;
  month: string;
  monthIndex: number;
  interestCents: number;
  paymentCents: number;
  extraCents: number;
  principalCents: number;
  endBalanceCents: number;
  isPayoffMonth: boolean;
}>;
  payoffByDebt: Record<string, string>;
  debtFreeMonth: string | null;
  totalInterestCents: number;
  totalPaidCents: number;
  months: number;
  unpayableDebtIds: Array<number>;
  focusOrder: Array<number>;
};
  interestSavedCents: number | null;
  monthsSaved: number | null;
  focusDebtId: number | null;
  requiredMonthlyCents: number;
  plannedMonthlyCents: number;
  unpayable: Array<{
  debtId: number;
  name: string;
}>;
};
export type PfDebtPlansPreviewResponse = import("../types").ApiEnvelope<PfDebtPlansPreviewResponseData>;

export type PfDebtPlansProgressParams = undefined;
export type PfDebtPlansProgressQuery = {

};
export type PfDebtPlansProgressBody = undefined;
export type PfDebtPlansProgressResponseData = {
  plan: {
  id: number;
  name: string;
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
  status: "draft" | "active" | "archived";
  baselineAt: string | null;
  notes: string | null;
};
  byDebt: Array<{
  debtId: number;
  name: string;
  expectedBalanceCents: number | null;
  actualBalanceCents: number;
  aheadCents: number | null;
  pace: {
  direction: "on_track" | "faster" | "slower" | "unknown";
  confidence: "low" | "medium" | "high" | null;
  streak: number;
  averageDeltaCents: number;
  months: Array<string>;
};
  movedCents: number | null;
  movedSinceDate: string | null;
}>;
  aheadTotalCents: number | null;
  plannedDebtFreeMonth: string | null;
};
export type PfDebtPlansProgressResponse = import("../types").ApiEnvelope<PfDebtPlansProgressResponseData>;

export type PfDebtsObserveParams = undefined;
export type PfDebtsObserveQuery = undefined;
export type PfDebtsObserveBody = {

};
export type PfDebtsObserveResponseData = {
  debtsChecked: number;
  balanceDue: number;
  rateFindings: number;
  paceFindings: number;
  growthFindings: number;
  extraPayments: number;
  paidOff: number;
  planDrift: number;
  linkedPayments: number;
};
export type PfDebtsObserveResponse = import("../types").ApiEnvelope<PfDebtsObserveResponseData>;

export type PfDebtPlansUpdateParams = {
  id: number;
};
export type PfDebtPlansUpdateQuery = undefined;
export type PfDebtPlansUpdateBody = {
  name?: string;
  strategy?: "avalanche" | "snowball" | "custom";
  extraBudgetCents?: number;
  totalBudgetCapCents?: number | null;
  rollFreedPayments?: boolean;
  startMonth?: string;
  notes?: string | null;
};
export type PfDebtPlansUpdateResponseData = {
  id: number;
  name: string;
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
  status: "draft" | "active" | "archived";
  baselineAt: string | null;
  notes: string | null;
};
export type PfDebtPlansUpdateResponse = import("../types").ApiEnvelope<PfDebtPlansUpdateResponseData>;

export type PfDebtPlansActivateParams = {
  id: number;
};
export type PfDebtPlansActivateQuery = undefined;
export type PfDebtPlansActivateBody = {

};
export type PfDebtPlansActivateResponseData = {
  id: number;
  name: string;
  strategy: "avalanche" | "snowball" | "custom";
  extraBudgetCents: number;
  totalBudgetCapCents: number | null;
  rollFreedPayments: boolean;
  startMonth: string;
  status: "draft" | "active" | "archived";
  baselineAt: string | null;
  notes: string | null;
};
export type PfDebtPlansActivateResponse = import("../types").ApiEnvelope<PfDebtPlansActivateResponseData>;

export type PfDebtPlansDeleteParams = {
  id: number;
};
export type PfDebtPlansDeleteQuery = undefined;
export type PfDebtPlansDeleteBody = undefined;
export type PfDebtPlansDeleteResponseData = null;
export type PfDebtPlansDeleteResponse = import("../types").ApiEnvelope<PfDebtPlansDeleteResponseData>;

export type PfDebtsBalancesListParams = {
  id: number;
};
export type PfDebtsBalancesListQuery = undefined;
export type PfDebtsBalancesListBody = undefined;
export type PfDebtsBalancesListResponseData = Array<{
  id: number;
  debtId: number;
  asOf: string;
  balanceCents: number;
  newSpendCents: number | null;
  statedInterestCents: number | null;
  statedFeesCents: number | null;
  source: "manual" | "statement" | "fints" | "contract";
  documentRef: string | null;
  note: string | null;
  createdAt: string;
}>;
export type PfDebtsBalancesListResponse = import("../types").ApiEnvelope<PfDebtsBalancesListResponseData>;

export type PfDebtsBalancesRecordParams = {
  id: number;
};
export type PfDebtsBalancesRecordQuery = undefined;
export type PfDebtsBalancesRecordBody = {
  asOf: string;
  balanceCents: number;
  newSpendCents?: number | null;
  statedInterestCents?: number | null;
  statedFeesCents?: number | null;
  source?: "manual" | "statement" | "fints" | "contract";
  documentRef?: string | null;
  note?: string | null;
};
export type PfDebtsBalancesRecordResponseData = {
  balance: {
  id: number;
  debtId: number;
  asOf: string;
  balanceCents: number;
  newSpendCents: number | null;
  statedInterestCents: number | null;
  statedFeesCents: number | null;
  source: "manual" | "statement" | "fints" | "contract";
  documentRef: string | null;
  note: string | null;
  createdAt: string;
};
  previousEstimateCents: number;
  driftCents: number;
};
export type PfDebtsBalancesRecordResponse = import("../types").ApiEnvelope<PfDebtsBalancesRecordResponseData>;

export type PfDebtsPeriodsParams = {
  id: number;
};
export type PfDebtsPeriodsQuery = undefined;
export type PfDebtsPeriodsBody = undefined;
export type PfDebtsPeriodsResponseData = {
  debtId: number;
  periods: Array<{
  fromDate: string;
  toDate: string;
  days: number;
  startCents: number;
  endCents: number;
  paidCents: number;
  spendCents: number | null;
  costCents: number | null;
  principalCents: number | null;
  costPlusSpendCents: number;
  impliedAnnualRatePercent: number | null;
  note: string | null;
}>;
  derived: {
  ratePercent: number;
  confidence: "low" | "medium" | "high";
  periods: number;
  spreadPercentPoints: number;
  asOf: string;
} | null;
  latest: {
  id: number;
  debtId: number;
  asOf: string;
  balanceCents: number;
  newSpendCents: number | null;
  statedInterestCents: number | null;
  statedFeesCents: number | null;
  source: "manual" | "statement" | "fints" | "contract";
  documentRef: string | null;
  note: string | null;
  createdAt: string;
} | null;
  latestAgeDays: number | null;
  checkDue: boolean;
};
export type PfDebtsPeriodsResponse = import("../types").ApiEnvelope<PfDebtsPeriodsResponseData>;

export type PfDebtsBalancesDeleteParams = {
  id: number;
  balanceId: number;
};
export type PfDebtsBalancesDeleteQuery = undefined;
export type PfDebtsBalancesDeleteBody = undefined;
export type PfDebtsBalancesDeleteResponseData = null;
export type PfDebtsBalancesDeleteResponse = import("../types").ApiEnvelope<PfDebtsBalancesDeleteResponseData>;

export type PfDebtsGetParams = {
  id: number;
};
export type PfDebtsGetQuery = undefined;
export type PfDebtsGetBody = undefined;
export type PfDebtsGetResponseData = {
  id: number;
  name: string;
  creditorName: string | null;
  kind: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber: string | null;
  originalAmountCents: number | null;
  outstandingCents: number;
  balanceAsOf: string | null;
  interestRatePercent: number | null;
  effectiveRatePercent: number | null;
  accountId: number | null;
  accountName: string | null;
  mirroredAccountId: number | null;
  startDate: string | null;
  expectedPayoffDate: string | null;
  remainingPayments: number | null;
  status: "active" | "paid_off" | "deferred" | "written_off";
  minPaymentPercent: number | null;
  minPaymentFloorCents: number | null;
  isRevolving: boolean;
  payoutCents: number | null;
  termMonths: number | null;
  payoffPriority: number | null;
  allowsExtraPayment: boolean;
  extraPaymentCapCentsPerYear: number | null;
  balanceCheckEveryDays: number;
  derivedRatePercent: number | null;
  derivedRateConfidence: "low" | "medium" | "high" | null;
  derivedRateAsOf: string | null;
  effectiveRateUsedPercent: number;
  effectiveRateSource: "derived" | "contract" | "none";
  balanceAgeDays: number | null;
  balanceCheckDue: boolean;
  monthlyPaymentCents: number | null;
  linkedRecurringItemId: number | null;
  paidOffPercent: number | null;
  projectedPayoffDate: string | null;
  projectedMonthsRemaining: number | null;
  projectedInterestCents: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfDebtsGetResponse = import("../types").ApiEnvelope<PfDebtsGetResponseData>;

export type PfDebtsUpdateParams = {
  id: number;
};
export type PfDebtsUpdateQuery = undefined;
export type PfDebtsUpdateBody = {
  name?: string;
  creditorName?: string | null;
  kind?: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber?: string | null;
  originalAmountCents?: number | null;
  outstandingCents?: number;
  balanceAsOf?: string | null;
  interestRatePercent?: number | null;
  effectiveRatePercent?: number | null;
  accountId?: number | null;
  mirroredAccountId?: number | null;
  startDate?: string | null;
  expectedPayoffDate?: string | null;
  remainingPayments?: number | null;
  minPaymentPercent?: number | null;
  minPaymentFloorCents?: number | null;
  isRevolving?: boolean;
  payoutCents?: number | null;
  termMonths?: number | null;
  payoffPriority?: number | null;
  allowsExtraPayment?: boolean;
  extraPaymentCapCentsPerYear?: number | null;
  balanceCheckEveryDays?: number;
  notes?: string | null;
  status?: "active" | "paid_off" | "deferred" | "written_off";
};
export type PfDebtsUpdateResponseData = {
  id: number;
  name: string;
  creditorName: string | null;
  kind: "annuity_loan" | "installment_loan" | "credit_card_debt" | "private_loan" | "leasing" | "bnpl" | "other";
  contractNumber: string | null;
  originalAmountCents: number | null;
  outstandingCents: number;
  balanceAsOf: string | null;
  interestRatePercent: number | null;
  effectiveRatePercent: number | null;
  accountId: number | null;
  accountName: string | null;
  mirroredAccountId: number | null;
  startDate: string | null;
  expectedPayoffDate: string | null;
  remainingPayments: number | null;
  status: "active" | "paid_off" | "deferred" | "written_off";
  minPaymentPercent: number | null;
  minPaymentFloorCents: number | null;
  isRevolving: boolean;
  payoutCents: number | null;
  termMonths: number | null;
  payoffPriority: number | null;
  allowsExtraPayment: boolean;
  extraPaymentCapCentsPerYear: number | null;
  balanceCheckEveryDays: number;
  derivedRatePercent: number | null;
  derivedRateConfidence: "low" | "medium" | "high" | null;
  derivedRateAsOf: string | null;
  effectiveRateUsedPercent: number;
  effectiveRateSource: "derived" | "contract" | "none";
  balanceAgeDays: number | null;
  balanceCheckDue: boolean;
  monthlyPaymentCents: number | null;
  linkedRecurringItemId: number | null;
  paidOffPercent: number | null;
  projectedPayoffDate: string | null;
  projectedMonthsRemaining: number | null;
  projectedInterestCents: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};
export type PfDebtsUpdateResponse = import("../types").ApiEnvelope<PfDebtsUpdateResponseData>;

export type PfDebtsDeleteParams = {
  id: number;
};
export type PfDebtsDeleteQuery = undefined;
export type PfDebtsDeleteBody = undefined;
export type PfDebtsDeleteResponseData = null;
export type PfDebtsDeleteResponse = import("../types").ApiEnvelope<PfDebtsDeleteResponseData>;

export type PfStatementsAdaptersParams = undefined;
export type PfStatementsAdaptersQuery = {

};
export type PfStatementsAdaptersBody = undefined;
export type PfStatementsAdaptersResponseData = Array<{
  slug: string;
  name: string;
  delimiter: string;
  encoding: string;
  dateFormat: string;
  decimalSeparator: string;
  amountMode: "single_signed" | "debit_credit_columns" | "amount_plus_sign";
  expectedColumns: Record<string, Array<string>>;
  isBuiltIn: boolean;
}>;
export type PfStatementsAdaptersResponse = import("../types").ApiEnvelope<PfStatementsAdaptersResponseData>;

export type PfStatementsCreateAdapterParams = undefined;
export type PfStatementsCreateAdapterQuery = undefined;
export type PfStatementsCreateAdapterBody = {
  slug: string;
  name: string;
  institutionHint?: string | null;
  delimiter?: string;
  encoding?: string;
  skipRows?: number;
  hasHeader?: boolean;
  dateFormat?: string;
  decimalSeparator?: string;
  thousandsSeparator?: string | null;
  amountMode?: "single_signed" | "debit_credit_columns" | "amount_plus_sign";
  columnMap: Record<string, string | Array<string>>;
  notes?: string | null;
};
export type PfStatementsCreateAdapterResponseData = {
  id: number;
  slug: string;
  name: string;
  institutionHint: string | null;
  delimiter: string;
  encoding: string;
  skipRows: number;
  hasHeader: boolean;
  dateFormat: string;
  decimalSeparator: string;
  thousandsSeparator: string | null;
  amountMode: "single_signed" | "debit_credit_columns" | "amount_plus_sign";
  columnMap: Record<string, string | Array<string>>;
  isBuiltIn: boolean;
  isActive: boolean;
  notes: string | null;
};
export type PfStatementsCreateAdapterResponse = import("../types").ApiEnvelope<PfStatementsCreateAdapterResponseData>;

export type PfStatementsImportPreviewParams = undefined;
export type PfStatementsImportPreviewQuery = undefined;
export type PfStatementsImportPreviewBody = {
  accountId: number;
  adapterSlug?: string;
};
export type PfStatementsImportPreviewResponseData = {
  adapterSlug: string;
  adapterName: string;
  accountId: number;
  fileName: string | null;
  fileHash: string;
  rowsTotal: number;
  rowsNew: number;
  rowsDuplicate: number;
  rowsFailed: number;
  periodFrom: string | null;
  periodTo: string | null;
  closingBalanceCents: number | null;
  resultingBalanceCents: number | null;
  warnings: Array<string>;
  failures: Array<{
  line: number;
  reason: string;
  raw: string;
}>;
  detectedColumns: Array<string>;
  sample: Array<{
  bookingDate: string;
  amountCents: number;
  counterpartyName: string | null;
  purpose: string | null;
  isDuplicate: boolean;
}>;
  alreadyImported: boolean;
};
export type PfStatementsImportPreviewResponse = import("../types").ApiEnvelope<PfStatementsImportPreviewResponseData>;

export type PfStatementsImportParams = undefined;
export type PfStatementsImportQuery = undefined;
export type PfStatementsImportBody = {
  accountId: number;
  adapterSlug?: string;
  updateBalance?: boolean;
};
export type PfStatementsImportResponseData = {
  id: number;
  accountId: number;
  adapterSlug: string;
  fileName: string | null;
  rowsTotal: number;
  rowsImported: number;
  rowsDuplicate: number;
  rowsFailed: number;
  periodFrom: string | null;
  periodTo: string | null;
  closingBalanceCents: number | null;
  status: "preview" | "imported" | "failed" | "discarded";
  warnings: Array<string>;
  createdAt: string;
  committedAt: string | null;
  matchedRecurring?: number;
};
export type PfStatementsImportResponse = import("../types").ApiEnvelope<PfStatementsImportResponseData>;

export type PfStatementsListImportsParams = undefined;
export type PfStatementsListImportsQuery = {

};
export type PfStatementsListImportsBody = undefined;
export type PfStatementsListImportsResponseData = Array<{
  id: number;
  accountId: number;
  adapterSlug: string;
  fileName: string | null;
  rowsTotal: number;
  rowsImported: number;
  rowsDuplicate: number;
  rowsFailed: number;
  periodFrom: string | null;
  periodTo: string | null;
  closingBalanceCents: number | null;
  status: "preview" | "imported" | "failed" | "discarded";
  warnings: Array<string>;
  createdAt: string;
  committedAt: string | null;
  matchedRecurring?: number;
}>;
export type PfStatementsListImportsResponse = import("../types").ApiEnvelope<PfStatementsListImportsResponseData>;

export type PfStatementsDeleteImportParams = {
  id: number;
};
export type PfStatementsDeleteImportQuery = undefined;
export type PfStatementsDeleteImportBody = undefined;
export type PfStatementsDeleteImportResponseData = {
  deletedTransactions: number;
};
export type PfStatementsDeleteImportResponse = import("../types").ApiEnvelope<PfStatementsDeleteImportResponseData>;

export type PfStatementsRematchParams = {
  id: number;
};
export type PfStatementsRematchQuery = undefined;
export type PfStatementsRematchBody = undefined;
export type PfStatementsRematchResponseData = {
  matched: number;
};
export type PfStatementsRematchResponse = import("../types").ApiEnvelope<PfStatementsRematchResponseData>;

export type PfStatementsTransactionsParams = undefined;
export type PfStatementsTransactionsQuery = {
  accountId?: number;
  categoryId?: number;
  recurringItemId?: number;
  from?: string;
  to?: string;
  search?: string;
  uncategorized?: boolean;
  minAmountCents?: number;
  maxAmountCents?: number;
  includeTransfers?: boolean;
  limit?: number;
  offset?: number;
};
export type PfStatementsTransactionsBody = undefined;
export type PfStatementsTransactionsResponseData = {
  transactions: Array<{
  id: number;
  accountId: number;
  accountName: string | null;
  importBatchId: number | null;
  bookingDate: string;
  valueDate: string | null;
  amountCents: number;
  currency: string;
  counterpartyName: string | null;
  counterpartyIban: string | null;
  purpose: string | null;
  bookingText: string | null;
  balanceAfterCents: number | null;
  categoryId: number | null;
  categoryName: string | null;
  recurringItemId: number | null;
  recurringName: string | null;
  debtId: number | null;
  isInternalTransfer: boolean;
  internalCounterAccountId: number | null;
  notes: string | null;
}>;
  total: number;
  sumCents: number;
  limit: number;
  offset: number;
};
export type PfStatementsTransactionsResponse = import("../types").ApiEnvelope<PfStatementsTransactionsResponseData>;

export type PfStatementsPatchTransactionParams = {
  id: number;
};
export type PfStatementsPatchTransactionQuery = undefined;
export type PfStatementsPatchTransactionBody = {
  categoryId?: number | null;
  recurringItemId?: number | null;
  debtId?: number | null;
  isInternalTransfer?: boolean;
  notes?: string | null;
};
export type PfStatementsPatchTransactionResponseData = {
  id: number;
  accountId: number;
  accountName: string | null;
  importBatchId: number | null;
  bookingDate: string;
  valueDate: string | null;
  amountCents: number;
  currency: string;
  counterpartyName: string | null;
  counterpartyIban: string | null;
  purpose: string | null;
  bookingText: string | null;
  balanceAfterCents: number | null;
  categoryId: number | null;
  categoryName: string | null;
  recurringItemId: number | null;
  recurringName: string | null;
  debtId: number | null;
  isInternalTransfer: boolean;
  internalCounterAccountId: number | null;
  notes: string | null;
};
export type PfStatementsPatchTransactionResponse = import("../types").ApiEnvelope<PfStatementsPatchTransactionResponseData>;

export type PfStatementsBulkCategorizeParams = undefined;
export type PfStatementsBulkCategorizeQuery = undefined;
export type PfStatementsBulkCategorizeBody = {
  transactionIds: Array<number>;
  categoryId: number | null;
};
export type PfStatementsBulkCategorizeResponseData = {
  updated: number;
};
export type PfStatementsBulkCategorizeResponse = import("../types").ApiEnvelope<PfStatementsBulkCategorizeResponseData>;

export type PfStatementsDetectTransfersParams = undefined;
export type PfStatementsDetectTransfersQuery = {

};
export type PfStatementsDetectTransfersBody = {

};
export type PfStatementsDetectTransfersResponseData = {
  marked: number;
};
export type PfStatementsDetectTransfersResponse = import("../types").ApiEnvelope<PfStatementsDetectTransfersResponseData>;

export type PfStatementsSuggestRecurringParams = undefined;
export type PfStatementsSuggestRecurringQuery = {
  minOccurrences?: number;
  sinceDate?: string;
};
export type PfStatementsSuggestRecurringBody = undefined;
export type PfStatementsSuggestRecurringResponseData = Array<{
  counterpartyName: string;
  normalizedKey: string;
  occurrences: number;
  medianAmountCents: number;
  amountVaries: boolean;
  interval: string | null;
  medianGapDays: number;
  firstSeen: string;
  lastSeen: string;
  direction: "out" | "in";
  accountId: number;
  sampleTransactionIds: Array<number>;
  estimatedMonthlyCents: number;
}>;
export type PfStatementsSuggestRecurringResponse = import("../types").ApiEnvelope<PfStatementsSuggestRecurringResponseData>;

export type PfOverviewMonthParams = undefined;
export type PfOverviewMonthQuery = {
  month?: string;
};
export type PfOverviewMonthBody = undefined;
export type PfOverviewMonthResponseData = {
  month: string;
  from: string;
  to: string;
  isCurrentMonth: boolean;
  isPast: boolean;
  calculation: {
  startingAvailableCents: number;
  upcomingOutCents: number;
  upcomingInCents: number;
  remainingCents: number;
};
  accounts: {
  totals: {
  netWorthCents: number;
  liquidCents: number;
  earmarkedCents: number;
  availableCents: number;
  creditCardDebtCents: number;
  currency: string;
};
  perAccount: Array<{
  id: number;
  name: string;
  kind: string;
  currentBalanceCents: number;
  availableCents: number;
  earmarkedCents: number;
  balanceAsOf: string | null;
}>;
};
  upcoming: Array<{
  date: string;
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  amountCents: number;
  amountVaries: boolean;
  currency: string;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  internalTransfer: boolean;
  isPlanned: boolean;
  categoryName: string | null;
}>;
  booked: {
  outCents: number;
  inCents: number;
  netCents: number;
  transactionCount: number;
};
  recurring: {
  monthlyOutCents: number;
  monthlyInCents: number;
  monthlyNetCents: number;
  byKind: Array<{
  kind: string;
  monthlyCents: number;
  count: number;
}>;
};
  debts: {
  outstandingCents: number;
  monthlyPaymentCents: number;
  debtFreeBy: string | null;
  count: number;
};
  projection: {
  startingCents: number;
  points: Array<{
  date: string;
  balanceCents: number;
  changeCents: number;
}>;
  lowest: {
  date: string;
  balanceCents: number;
} | null;
  goesNegative: boolean;
  endingCents: number;
};
  comparison: {
  throughDayOfMonth: number;
  currentOutCents: number;
  currentInCents: number;
  previousMonthOutCents: number | null;
  referenceOutCents: number | null;
  referenceMonthCount: number;
  deltaCents: number | null;
  deltaRatio: number | null;
};
};
export type PfOverviewMonthResponse = import("../types").ApiEnvelope<PfOverviewMonthResponseData>;

export type PfOverviewDashboardParams = undefined;
export type PfOverviewDashboardQuery = {

};
export type PfOverviewDashboardBody = undefined;
export type PfOverviewDashboardResponseData = {
  asOf: string;
  month: {
  month: string;
  from: string;
  to: string;
  isCurrentMonth: boolean;
  isPast: boolean;
  calculation: {
  startingAvailableCents: number;
  upcomingOutCents: number;
  upcomingInCents: number;
  remainingCents: number;
};
  accounts: {
  totals: {
  netWorthCents: number;
  liquidCents: number;
  earmarkedCents: number;
  availableCents: number;
  creditCardDebtCents: number;
  currency: string;
};
  perAccount: Array<{
  id: number;
  name: string;
  kind: string;
  currentBalanceCents: number;
  availableCents: number;
  earmarkedCents: number;
  balanceAsOf: string | null;
}>;
};
  upcoming: Array<{
  date: string;
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  amountCents: number;
  amountVaries: boolean;
  currency: string;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  internalTransfer: boolean;
  isPlanned: boolean;
  categoryName: string | null;
}>;
  booked: {
  outCents: number;
  inCents: number;
  netCents: number;
  transactionCount: number;
};
  recurring: {
  monthlyOutCents: number;
  monthlyInCents: number;
  monthlyNetCents: number;
  byKind: Array<{
  kind: string;
  monthlyCents: number;
  count: number;
}>;
};
  debts: {
  outstandingCents: number;
  monthlyPaymentCents: number;
  debtFreeBy: string | null;
  count: number;
};
  projection: {
  startingCents: number;
  points: Array<{
  date: string;
  balanceCents: number;
  changeCents: number;
}>;
  lowest: {
  date: string;
  balanceCents: number;
} | null;
  goesNegative: boolean;
  endingCents: number;
};
  comparison: {
  throughDayOfMonth: number;
  currentOutCents: number;
  currentInCents: number;
  previousMonthOutCents: number | null;
  referenceOutCents: number | null;
  referenceMonthCount: number;
  deltaCents: number | null;
  deltaRatio: number | null;
};
};
  next30Days: {
  occurrences: Array<{
  date: string;
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  direction: "out" | "in";
  amountCents: number;
  amountVaries: boolean;
  currency: string;
  accountId: number | null;
  accountName: string | null;
  counterAccountId: number | null;
  counterAccountName: string | null;
  internalTransfer: boolean;
  isPlanned: boolean;
  categoryName: string | null;
}>;
  totalOutCents: number;
  totalInCents: number;
};
  cancellationDeadlines: Array<{
  recurringItemId: number;
  name: string;
  kind: "subscription" | "rent" | "insurance" | "loan_payment" | "utility" | "membership" | "tax" | "savings_plan" | "internal_transfer" | "salary" | "other_income" | "other";
  counterpartyName: string | null;
  amountCents: number;
  monthlyEquivalentCents: number;
  cancellationUrl: string | null;
  contractNumber: string | null;
  cancellation: {
  nextTermEnd: string | null;
  cancellationDeadline: string | null;
  effectiveEndIfCancelledToday: string | null;
  daysUntilDeadline: number | null;
  explanation: string;
};
  missed: boolean;
}>;
  missedDeadlines: number;
  insights: Array<{
  id: number;
  kind: string;
  severity: "info" | "warn" | "critical";
  title: string;
  detail: string | null;
  recurringItemId: number | null;
  accountId: number | null;
  monthlyImpactCents: number | null;
  hasProposal: boolean;
  firstSeenAt: string;
}>;
  insightCounts: {
  critical: number;
  warn: number;
  info: number;
  total: number;
};
  reliability: {
  windowDays: number;
  total: number;
  confirmed: number;
  amountChanged: number;
  late: number;
  missed: number;
  pending: number;
  confirmedRatio: number | null;
};
  trend: {
  changeCents: number | null;
  pointCount: number;
  latest: {
  date: string;
  netWorthCents: number;
  availableCents: number;
  earmarkedCents: number;
  staleDays: number;
  accountCount: number;
} | null;
  staleDays: number | null;
};
};
export type PfOverviewDashboardResponse = import("../types").ApiEnvelope<PfOverviewDashboardResponseData>;

export type PfInsightsListParams = undefined;
export type PfInsightsListQuery = {
  status?: "open" | "accepted" | "dismissed" | "resolved";
  kind?: "amount_changed" | "recurring_gone" | "charge_overdue" | "recurring_undeclared" | "recurring_detected" | "allocation_unexecuted" | "deadline_soon" | "deadline_missed" | "cash_short" | "balance_stale";
  limit?: number;
};
export type PfInsightsListBody = undefined;
export type PfInsightsListResponseData = Array<{
  id: number;
  kind: "amount_changed" | "recurring_gone" | "charge_overdue" | "recurring_undeclared" | "recurring_detected" | "allocation_unexecuted" | "deadline_soon" | "deadline_missed" | "cash_short" | "balance_stale";
  severity: "info" | "warn" | "critical";
  status: "open" | "accepted" | "dismissed" | "resolved";
  subjectKey: string;
  recurringItemId: number | null;
  recurringName: string | null;
  accountId: number | null;
  title: string;
  detail: string | null;
  evidence: Record<string, any>;
  proposedAction: {
  action: string;
  label?: string;
  tone?: "default" | "destructive";
} | null;
  monthlyImpactCents: number | null;
  firstSeenAt: string;
  lastSeenAt: string;
}>;
export type PfInsightsListResponse = import("../types").ApiEnvelope<PfInsightsListResponseData>;

export type PfInsightsCountsParams = undefined;
export type PfInsightsCountsQuery = undefined;
export type PfInsightsCountsBody = undefined;
export type PfInsightsCountsResponseData = {
  critical: number;
  warn: number;
  info: number;
  total: number;
};
export type PfInsightsCountsResponse = import("../types").ApiEnvelope<PfInsightsCountsResponseData>;

export type PfInsightsAcceptParams = {
  id: number;
};
export type PfInsightsAcceptQuery = undefined;
export type PfInsightsAcceptBody = undefined;
export type PfInsightsAcceptResponseData = {
  applied: string;
};
export type PfInsightsAcceptResponse = import("../types").ApiEnvelope<PfInsightsAcceptResponseData>;

export type PfInsightsDismissParams = {
  id: number;
};
export type PfInsightsDismissQuery = undefined;
export type PfInsightsDismissBody = {
  note?: string;
};
export type PfInsightsDismissResponseData = null;
export type PfInsightsDismissResponse = import("../types").ApiEnvelope<PfInsightsDismissResponseData>;

export type PfExpectationsListParams = undefined;
export type PfExpectationsListQuery = {
  from?: string;
  to?: string;
  status?: "pending" | "confirmed" | "amount_changed" | "late" | "missed" | "superseded";
  recurringItemId?: number;
  limit?: number;
};
export type PfExpectationsListBody = undefined;
export type PfExpectationsListResponseData = Array<{
  id: number;
  recurringItemId: number;
  name: string;
  kind: string;
  accountId: number | null;
  dueDate: string;
  expectedAmountCents: number;
  direction: "out" | "in";
  status: "pending" | "confirmed" | "amount_changed" | "late" | "missed" | "superseded";
  matchedTransactionId: number | null;
  matchedAmountCents: number | null;
  matchedDate: string | null;
  deltaCents: number | null;
  graceUntil: string;
}>;
export type PfExpectationsListResponse = import("../types").ApiEnvelope<PfExpectationsListResponseData>;

export type PfExpectationsReliabilityParams = undefined;
export type PfExpectationsReliabilityQuery = {
  days?: number;
};
export type PfExpectationsReliabilityBody = undefined;
export type PfExpectationsReliabilityResponseData = {
  windowDays: number;
  total: number;
  confirmed: number;
  amountChanged: number;
  late: number;
  missed: number;
  pending: number;
  confirmedRatio: number | null;
};
export type PfExpectationsReliabilityResponse = import("../types").ApiEnvelope<PfExpectationsReliabilityResponseData>;

export type PfHistoryNetWorthParams = undefined;
export type PfHistoryNetWorthQuery = {
  days?: number;
};
export type PfHistoryNetWorthBody = undefined;
export type PfHistoryNetWorthResponseData = {
  from: string;
  to: string;
  points: Array<{
  date: string;
  netWorthCents: number;
  availableCents: number;
  earmarkedCents: number;
  staleDays: number;
  accountCount: number;
}>;
  changeCents: number | null;
};
export type PfHistoryNetWorthResponse = import("../types").ApiEnvelope<PfHistoryNetWorthResponseData>;

export type PfHistorySpendingParams = undefined;
export type PfHistorySpendingQuery = {
  months?: number;
};
export type PfHistorySpendingBody = undefined;
export type PfHistorySpendingResponseData = {
  from: string;
  to: string;
  months: Array<{
  month: string;
  outCents: number;
  inCents: number;
  netCents: number;
  categories: Array<{
  categoryId: number | null;
  categoryName: string;
  categoryColor: string;
  outCents: number;
  inCents: number;
  transactionCount: number;
}>;
}>;
  averageMonthlyOutCents: number | null;
  completeMonthCount: number;
};
export type PfHistorySpendingResponse = import("../types").ApiEnvelope<PfHistorySpendingResponseData>;

export type PfHistoryCoverageParams = undefined;
export type PfHistoryCoverageQuery = {
  days?: number;
};
export type PfHistoryCoverageBody = undefined;
export type PfHistoryCoverageResponseData = {
  windowDays: number;
  transactionCount: number;
  categorizedCount: number;
  linkedToRecurringCount: number;
  categorizedRatio: number | null;
  outCents: number;
  uncategorizedOutCents: number;
};
export type PfHistoryCoverageResponse = import("../types").ApiEnvelope<PfHistoryCoverageResponseData>;

export type PfHistoryForecastParams = undefined;
export type PfHistoryForecastQuery = {
  months?: number;
};
export type PfHistoryForecastBody = undefined;
export type PfHistoryForecastResponseData = {
  startingAvailableCents: number;
  months: Array<{
  month: string;
  outCents: number;
  inCents: number;
  netCents: number;
  endingAvailableCents: number;
  negative: boolean;
}>;
  firstNegativeMonth: string | null;
};
export type PfHistoryForecastResponse = import("../types").ApiEnvelope<PfHistoryForecastResponseData>;

export type PfInsightsRunDailyParams = undefined;
export type PfInsightsRunDailyQuery = undefined;
export type PfInsightsRunDailyBody = undefined;
export type PfInsightsRunDailyResponseData = {
  runs: Array<{
  ownerUserId: number;
  derivedUpdated: number;
  expectationsCreated: number;
  reconciled: {
  confirmed: number;
  changed: number;
  late: number;
  missed: number;
};
  assessed: {
  gone: number;
  amountChanged: number;
  overdue: number;
};
  debts: {
  debtsChecked: number;
  balanceDue: number;
  rateFindings: number;
  paceFindings: number;
  growthFindings: number;
  extraPayments: number;
  paidOff: number;
  planDrift: number;
  linkedPayments: number;
};
  snapshotAccounts: number;
  insightsOpen: number;
}>;
};
export type PfInsightsRunDailyResponse = import("../types").ApiEnvelope<PfInsightsRunDailyResponseData>;

export type PfAllocationPlanParams = undefined;
export type PfAllocationPlanQuery = {
  month?: string;
  basisCents?: number;
};
export type PfAllocationPlanBody = undefined;
export type PfAllocationPlanResponseData = {
  month: string;
  from: string;
  to: string;
  basis: {
  source: "recurring_income" | "manual";
  monthlyIncomeCents: number;
  recurringIncomeCents: number;
};
  targets: Array<{
  accountId: number;
  accountName: string | null;
  accountKind: string | null;
  accountColor: string | null;
  accountIsPlanned: boolean;
  plannedCents: number;
  actualCents: number | null;
  attributedCents: number | null;
  unattributedCents: number | null;
  deltaCents: number | null;
  coverageRatio: number | null;
  rules: Array<{
  id: number;
  name: string;
  kind: "percent" | "fixed" | "remainder";
  percentBasisPoints: number | null;
  fixedCents: number | null;
  minCents: number | null;
  maxCents: number | null;
  priority: number;
  debtFreedShareBasisPoints: number | null;
  note: string | null;
  sourceAccountId: number | null;
  sourceAccountName: string | null;
  recurringItemId: number | null;
  recurringItemName: string | null;
  executed: boolean;
  plannedCents: number;
  requestedCents: number;
  clampedBy: "min" | "max" | null;
  shortfallCents: number;
  actualCents: number | null;
}>;
}>;
  unallocatedCents: number;
  overAllocatedCents: number;
  allocatedCents: number;
  measurement: {
  measurable: boolean;
  isFutureMonth: boolean;
  transferCount: number;
};
  debtFreedom: {
  freedMonthlyCents: number;
  debtFreeBy: string | null;
  perTarget: Array<{
  accountId: number;
  accountName: string | null;
  extraCents: number;
}>;
  unassignedCents: number;
};
};
export type PfAllocationPlanResponse = import("../types").ApiEnvelope<PfAllocationPlanResponseData>;

export type PfAllocationProjectionParams = undefined;
export type PfAllocationProjectionQuery = {
  months?: number;
  basisCents?: number;
};
export type PfAllocationProjectionBody = undefined;
export type PfAllocationProjectionResponseData = {
  from: string;
  to: string;
  months: Array<{
  month: string;
  from: string;
  to: string;
  incomeCents: number;
  expenseCents: number;
  transferCents: number;
  allocatedCents: number;
  unallocatedCents: number;
  overAllocatedCents: number;
  netCents: number;
  accounts: Array<{
  accountId: number;
  accountName: string;
  isPlanned: boolean;
  openingBalanceCents: number;
  inflowCents: number;
  outflowCents: number;
  netCents: number;
  closingBalanceCents: number;
}>;
}>;
  accounts: Array<{
  accountId: number;
  accountName: string;
  accountKind: string;
  accountColor: string | null;
  isPlanned: boolean;
  plannedFromDate: string | null;
  startingBalanceCents: number;
  endingBalanceCents: number;
}>;
  assumptions: {
  basisSource: "recurring_income" | "manual";
  basisCents: number | null;
  incomeAccountId: number | null;
  rulesExecutedByStandingOrder: number;
  plannedAccounts: number;
  plannedItems: number;
  note: string;
};
};
export type PfAllocationProjectionResponse = import("../types").ApiEnvelope<PfAllocationProjectionResponseData>;

export type PfAllocationRulesListParams = undefined;
export type PfAllocationRulesListQuery = {
  includeInactive?: boolean;
};
export type PfAllocationRulesListBody = undefined;
export type PfAllocationRulesListResponseData = Array<{
  id: number;
  name: string;
  targetAccountId: number;
  targetAccountName: string | null;
  targetAccountKind: string | null;
  targetAccountColor: string | null;
  targetAccountIsPlanned: boolean;
  sourceAccountId: number | null;
  sourceAccountName: string | null;
  recurringItemId: number | null;
  recurringItemName: string | null;
  executed: boolean;
  kind: "percent" | "fixed" | "remainder";
  percentBasisPoints: number | null;
  fixedCents: number | null;
  minCents: number | null;
  maxCents: number | null;
  priority: number;
  debtFreedShareBasisPoints: number | null;
  note: string | null;
  isActive: boolean;
}>;
export type PfAllocationRulesListResponse = import("../types").ApiEnvelope<PfAllocationRulesListResponseData>;

export type PfAllocationRulesCreateParams = undefined;
export type PfAllocationRulesCreateQuery = undefined;
export type PfAllocationRulesCreateBody = {
  name: string;
  targetAccountId: number;
  sourceAccountId?: number | null;
  kind: "percent" | "fixed" | "remainder";
  percentBasisPoints?: number | null;
  fixedCents?: number | null;
  minCents?: number | null;
  maxCents?: number | null;
  priority?: number;
  debtFreedShareBasisPoints?: number | null;
  note?: string | null;
  recurringItemId?: number | null;
};
export type PfAllocationRulesCreateResponseData = {
  id: number;
  name: string;
  targetAccountId: number;
  targetAccountName: string | null;
  targetAccountKind: string | null;
  targetAccountColor: string | null;
  targetAccountIsPlanned: boolean;
  sourceAccountId: number | null;
  sourceAccountName: string | null;
  recurringItemId: number | null;
  recurringItemName: string | null;
  executed: boolean;
  kind: "percent" | "fixed" | "remainder";
  percentBasisPoints: number | null;
  fixedCents: number | null;
  minCents: number | null;
  maxCents: number | null;
  priority: number;
  debtFreedShareBasisPoints: number | null;
  note: string | null;
  isActive: boolean;
};
export type PfAllocationRulesCreateResponse = import("../types").ApiEnvelope<PfAllocationRulesCreateResponseData>;

export type PfAllocationRulesUpdateParams = {
  id: number;
};
export type PfAllocationRulesUpdateQuery = undefined;
export type PfAllocationRulesUpdateBody = {
  name?: string;
  targetAccountId?: number;
  sourceAccountId?: number | null;
  kind?: "percent" | "fixed" | "remainder";
  percentBasisPoints?: number | null;
  fixedCents?: number | null;
  minCents?: number | null;
  maxCents?: number | null;
  priority?: number;
  debtFreedShareBasisPoints?: number | null;
  note?: string | null;
  recurringItemId?: number | null;
  isActive?: boolean;
};
export type PfAllocationRulesUpdateResponseData = {
  id: number;
  name: string;
  targetAccountId: number;
  targetAccountName: string | null;
  targetAccountKind: string | null;
  targetAccountColor: string | null;
  targetAccountIsPlanned: boolean;
  sourceAccountId: number | null;
  sourceAccountName: string | null;
  recurringItemId: number | null;
  recurringItemName: string | null;
  executed: boolean;
  kind: "percent" | "fixed" | "remainder";
  percentBasisPoints: number | null;
  fixedCents: number | null;
  minCents: number | null;
  maxCents: number | null;
  priority: number;
  debtFreedShareBasisPoints: number | null;
  note: string | null;
  isActive: boolean;
};
export type PfAllocationRulesUpdateResponse = import("../types").ApiEnvelope<PfAllocationRulesUpdateResponseData>;

export type PfAllocationRulesDeleteParams = {
  id: number;
};
export type PfAllocationRulesDeleteQuery = undefined;
export type PfAllocationRulesDeleteBody = undefined;
export type PfAllocationRulesDeleteResponseData = null;
export type PfAllocationRulesDeleteResponse = import("../types").ApiEnvelope<PfAllocationRulesDeleteResponseData>;

export const apiRoutes_personal_finance = {
  // Contract source: explicit
  "pf_accounts_overview": {
    method: "GET",
    path: "/personal-finance/accounts/overview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wie viel Geld liegt wo",
      description: "Alle Konten mit Saldo, gebundenem und verfügbarem Betrag, dazu die Summen: Vermögen, liquide Mittel, Zweckbindungen, offene Kartensalden.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfAccountsOverviewParams;
      query: PfAccountsOverviewQuery;
      body: PfAccountsOverviewBody;
      response: PfAccountsOverviewResponse;
      responseData: PfAccountsOverviewResponseData;
    },
  },
  // Contract source: explicit
  "pf_earmarks_list": {
    method: "GET",
    path: "/personal-finance/accounts/earmarks",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Zweckbindungen auflisten",
      description: "Geld, das auf einem Konto liegt, aber schon verplant ist — Steuerrücklage, Sparziel, Notgroschen. Wird vom verfügbaren Betrag abgezogen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfEarmarksListParams;
      query: PfEarmarksListQuery;
      body: PfEarmarksListBody;
      response: PfEarmarksListResponse;
      responseData: PfEarmarksListResponseData;
    },
  },
  // Contract source: explicit
  "pf_earmarks_create": {
    method: "POST",
    path: "/personal-finance/accounts/earmarks",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Zweckbindung anlegen",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfEarmarksCreateParams;
      query: PfEarmarksCreateQuery;
      body: PfEarmarksCreateBody;
      response: PfEarmarksCreateResponse;
      responseData: PfEarmarksCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_earmarks_update": {
    method: "PATCH",
    path: "/personal-finance/accounts/earmarks/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Zweckbindung ändern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfEarmarksUpdateParams;
      query: PfEarmarksUpdateQuery;
      body: PfEarmarksUpdateBody;
      response: PfEarmarksUpdateResponse;
      responseData: PfEarmarksUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_earmarks_delete": {
    method: "DELETE",
    path: "/personal-finance/accounts/earmarks/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Zweckbindung löschen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfEarmarksDeleteParams;
      query: PfEarmarksDeleteQuery;
      body: PfEarmarksDeleteBody;
      response: PfEarmarksDeleteResponse;
      responseData: PfEarmarksDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_list": {
    method: "GET",
    path: "/personal-finance/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Konten auflisten",
      description: "Giro, Spar, Steuerkonto, Karten und Bargeld. Eine Karte ist hier ein eigenes Konto mit eigenem Saldo, keine Zahlungsart.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfAccountsListParams;
      query: PfAccountsListQuery;
      body: PfAccountsListBody;
      response: PfAccountsListResponse;
      responseData: PfAccountsListResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_create": {
    method: "POST",
    path: "/personal-finance/accounts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Konto anlegen",
      description: "Die IBAN wird nur intern gespeichert, damit ein hochgeladener Auszug dem richtigen Konto zugeordnet werden kann. Antworten enthalten sie ausschließlich maskiert.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAccountsCreateParams;
      query: PfAccountsCreateQuery;
      body: PfAccountsCreateBody;
      response: PfAccountsCreateResponse;
      responseData: PfAccountsCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_get": {
    method: "GET",
    path: "/personal-finance/accounts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Ein Konto",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfAccountsGetParams;
      query: PfAccountsGetQuery;
      body: PfAccountsGetBody;
      response: PfAccountsGetResponse;
      responseData: PfAccountsGetResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_update": {
    method: "PATCH",
    path: "/personal-finance/accounts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Konto ändern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAccountsUpdateParams;
      query: PfAccountsUpdateQuery;
      body: PfAccountsUpdateBody;
      response: PfAccountsUpdateResponse;
      responseData: PfAccountsUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_set_balance": {
    method: "PUT",
    path: "/personal-finance/accounts/:id/balance",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kontostand setzen",
      description: "Der häufigste Schreibvorgang, deshalb ein eigener Endpunkt. Markiert den Stand als Handeingabe — ein Auszugs-Import überschreibt ihn später mit der gerechneten Zahl.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAccountsSetBalanceParams;
      query: PfAccountsSetBalanceQuery;
      body: PfAccountsSetBalanceBody;
      response: PfAccountsSetBalanceResponse;
      responseData: PfAccountsSetBalanceResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_promote": {
    method: "POST",
    path: "/personal-finance/accounts/:id/promote",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Planungskonto zu einem echten Konto machen",
      description: "Das geplante Konto ist eröffnet: IBAN und Anfangssaldo eintragen. Es bleibt dieselbe Zeile mit derselben id — Verteilungsregeln, geplante Daueraufträge und Zweckbindungen zeigen danach auf ein echtes Konto, ohne dass etwas umgehängt werden muss.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAccountsPromoteParams;
      query: PfAccountsPromoteQuery;
      body: PfAccountsPromoteBody;
      response: PfAccountsPromoteResponse;
      responseData: PfAccountsPromoteResponseData;
    },
  },
  // Contract source: explicit
  "pf_accounts_delete": {
    method: "DELETE",
    path: "/personal-finance/accounts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Konto löschen",
      description: "Löscht das Konto samt seiner importierten Buchungen. Das ist Absicht: Auszugsdaten müssen restlos entfernbar sein.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfAccountsDeleteParams;
      query: PfAccountsDeleteQuery;
      body: PfAccountsDeleteBody;
      response: PfAccountsDeleteResponse;
      responseData: PfAccountsDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_categories_list": {
    method: "GET",
    path: "/personal-finance/categories",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kategorien auflisten",
      description: "Private Kategorien, getrennt von den Firmen-Kostenstellen. Nach kind filterbar: expense, income, transfer.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfCategoriesListParams;
      query: PfCategoriesListQuery;
      body: PfCategoriesListBody;
      response: PfCategoriesListResponse;
      responseData: PfCategoriesListResponseData;
    },
  },
  // Contract source: explicit
  "pf_categories_seed_defaults": {
    method: "POST",
    path: "/personal-finance/categories/seed-defaults",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Standard-Kategorien anlegen",
      description: "Legt einen brauchbaren Grundstock an (Wohnen, Lebensmittel, Abos, Gehalt …). Tut nichts, wenn schon Kategorien existieren.",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: PfCategoriesSeedDefaultsParams;
      query: PfCategoriesSeedDefaultsQuery;
      body: PfCategoriesSeedDefaultsBody;
      response: PfCategoriesSeedDefaultsResponse;
      responseData: PfCategoriesSeedDefaultsResponseData;
    },
  },
  // Contract source: explicit
  "pf_categories_create": {
    method: "POST",
    path: "/personal-finance/categories",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kategorie anlegen",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfCategoriesCreateParams;
      query: PfCategoriesCreateQuery;
      body: PfCategoriesCreateBody;
      response: PfCategoriesCreateResponse;
      responseData: PfCategoriesCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_categories_update": {
    method: "PATCH",
    path: "/personal-finance/categories/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kategorie ändern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfCategoriesUpdateParams;
      query: PfCategoriesUpdateQuery;
      body: PfCategoriesUpdateBody;
      response: PfCategoriesUpdateResponse;
      responseData: PfCategoriesUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_categories_delete": {
    method: "DELETE",
    path: "/personal-finance/categories/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kategorie löschen",
      description: "Buchungen und Abos verlieren nur die Zuordnung, sie bleiben erhalten.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfCategoriesDeleteParams;
      query: PfCategoriesDeleteQuery;
      body: PfCategoriesDeleteBody;
      response: PfCategoriesDeleteResponse;
      responseData: PfCategoriesDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_upcoming": {
    method: "GET",
    path: "/personal-finance/recurring/upcoming",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Fälligkeitskalender",
      description: "Jede einzelne Abbuchung im Zeitfenster, nicht nur die nächste je Posten. Default: 90 Tage ab heute. Ein gekündigter Vertrag erscheint weiter, bis seine Kündigung wirkt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringUpcomingParams;
      query: PfRecurringUpcomingQuery;
      body: PfRecurringUpcomingBody;
      response: PfRecurringUpcomingResponse;
      responseData: PfRecurringUpcomingResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_deadlines": {
    method: "GET",
    path: "/personal-finance/recurring/cancellation-deadlines",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Was läuft mir davon",
      description: "Kündigungsfristen, die demnächst ablaufen — plus die bereits verpassten (missed = true), denn dort verlängert sich gerade etwas.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringDeadlinesParams;
      query: PfRecurringDeadlinesQuery;
      body: PfRecurringDeadlinesBody;
      response: PfRecurringDeadlinesResponse;
      responseData: PfRecurringDeadlinesResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_monthly_load": {
    method: "GET",
    path: "/personal-finance/recurring/monthly-load",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Was kostet mein Leben pro Monat",
      description: "Alle laufenden Verpflichtungen auf einen Monat umgerechnet — Jahresbeiträge durch 12, Quartale durch 3 — aufgeschlüsselt nach Art und Kategorie.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringMonthlyLoadParams;
      query: PfRecurringMonthlyLoadQuery;
      body: PfRecurringMonthlyLoadBody;
      response: PfRecurringMonthlyLoadResponse;
      responseData: PfRecurringMonthlyLoadResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_refresh": {
    method: "POST",
    path: "/personal-finance/recurring/refresh",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Fälligkeiten nachziehen",
      description: "Schiebt abgelaufene Termine auf den nächsten und rechnet die Kündigungsfristen neu. Reine Rechnung, kein Modell, kein Token — gedacht für einen Tageslauf.",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: PfRecurringRefreshParams;
      query: PfRecurringRefreshQuery;
      body: PfRecurringRefreshBody;
      response: PfRecurringRefreshResponse;
      responseData: PfRecurringRefreshResponseData;
    },
  },
  // Contract source: explicit
  "pf_standing_orders_detect": {
    method: "GET",
    path: "/personal-finance/recurring/standing-orders",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Dauerauftrags-Kandidaten aus den Buchungen",
      description: "Findet auch die Aufträge zwischen den EIGENEN Konten — die Abo-Erkennung übersieht sie, weil sie Umbuchungen ausklammert. Legt nichts an, zeigt nur. evidence='bank_confirmed' heisst: die Bank weist die Buchungen selbst als Dauerauftrag aus (GVC 052/152); nur solche werden beim Lauf von selbst eingetragen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfStandingOrdersDetectParams;
      query: PfStandingOrdersDetectQuery;
      body: PfStandingOrdersDetectBody;
      response: PfStandingOrdersDetectResponse;
      responseData: PfStandingOrdersDetectResponseData;
    },
  },
  // Contract source: explicit
  "pf_standing_orders_run": {
    method: "POST",
    path: "/personal-finance/recurring/standing-orders/run",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Erkennung laufen lassen",
      description: "Trägt ein, was die Bank bestätigt (mit Befund und Rückgängig-Knopf), und schlägt den Rest als Befund vor. Läuft ohnehin im Tageslauf; dieser Endpunkt ist für 'jetzt sofort'. Reine Rechnung, kein Modell, kein Token.",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: PfStandingOrdersRunParams;
      query: PfStandingOrdersRunQuery;
      body: PfStandingOrdersRunBody;
      response: PfStandingOrdersRunResponse;
      responseData: PfStandingOrdersRunResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_list": {
    method: "GET",
    path: "/personal-finance/recurring",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wiederkehrende Zahlungen auflisten",
      description: "Abos, Miete, Versicherungen, Kreditraten, Strom und Gehalt in einer Liste. Jeder Eintrag bringt sein Monatsäquivalent und seine frisch gerechnete Kündigungslage mit.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringListParams;
      query: PfRecurringListQuery;
      body: PfRecurringListBody;
      response: PfRecurringListResponse;
      responseData: PfRecurringListResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_create": {
    method: "POST",
    path: "/personal-finance/recurring",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wiederkehrende Zahlung anlegen",
      description: "Der Vertragsblock (Mindestlaufzeit, Kündigungsfrist, Verlängerung) ist optional — ein monatlich kündbares Abo braucht ihn nicht, ein Mietvertrag schon.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfRecurringCreateParams;
      query: PfRecurringCreateQuery;
      body: PfRecurringCreateBody;
      response: PfRecurringCreateResponse;
      responseData: PfRecurringCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_get": {
    method: "GET",
    path: "/personal-finance/recurring/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Eine wiederkehrende Zahlung",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringGetParams;
      query: PfRecurringGetQuery;
      body: PfRecurringGetBody;
      response: PfRecurringGetResponse;
      responseData: PfRecurringGetResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_update": {
    method: "PATCH",
    path: "/personal-finance/recurring/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wiederkehrende Zahlung ändern",
      description: "Nächste Fälligkeit und Kündigungsstichtag werden bei jeder Änderung neu gerechnet.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfRecurringUpdateParams;
      query: PfRecurringUpdateQuery;
      body: PfRecurringUpdateBody;
      response: PfRecurringUpdateResponse;
      responseData: PfRecurringUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_cancel": {
    method: "POST",
    path: "/personal-finance/recurring/:id/cancel",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Kündigung eintragen",
      description: "Setzt den Status auf gekündigt und rechnet aus, wann der Vertrag endet. Der Posten bleibt bis dahin in der Vorschau — es wird ja weiter abgebucht.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfRecurringCancelParams;
      query: PfRecurringCancelQuery;
      body: PfRecurringCancelBody;
      response: PfRecurringCancelResponse;
      responseData: PfRecurringCancelResponseData;
    },
  },
  // Contract source: explicit
  "pf_recurring_delete": {
    method: "DELETE",
    path: "/personal-finance/recurring/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wiederkehrende Zahlung löschen",
      description: "Für Fehleingaben. Einen wirklich beendeten Vertrag besser auf status = ended setzen, dann bleibt die Historie lesbar.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfRecurringDeleteParams;
      query: PfRecurringDeleteQuery;
      body: PfRecurringDeleteBody;
      response: PfRecurringDeleteResponse;
      responseData: PfRecurringDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_overview": {
    method: "GET",
    path: "/personal-finance/debts/overview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schuldenübersicht",
      description: "Alle laufenden Schulden mit Restbetrag, monatlicher Rate und geschätztem Tilgungsende. debtFreeBy nennt den Tag, an dem die letzte getilgt ist — null, solange eine Schuld ohne Rate dabei ist.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsOverviewParams;
      query: PfDebtsOverviewQuery;
      body: PfDebtsOverviewBody;
      response: PfDebtsOverviewResponse;
      responseData: PfDebtsOverviewResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_list": {
    method: "GET",
    path: "/personal-finance/debts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schulden auflisten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsListParams;
      query: PfDebtsListQuery;
      body: PfDebtsListBody;
      response: PfDebtsListResponse;
      responseData: PfDebtsListResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_create": {
    method: "POST",
    path: "/personal-finance/debts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schuld anlegen",
      description: "Die monatliche Rate gehört NICHT hierher, sondern als wiederkehrende Zahlung mit debtId — so taucht sie in der Vorschau genau einmal auf.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtsCreateParams;
      query: PfDebtsCreateQuery;
      body: PfDebtsCreateBody;
      response: PfDebtsCreateResponse;
      responseData: PfDebtsCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_list": {
    method: "GET",
    path: "/personal-finance/debts/plan",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungspläne",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfDebtPlansListParams;
      query: PfDebtPlansListQuery;
      body: PfDebtPlansListBody;
      response: PfDebtPlansListResponse;
      responseData: PfDebtPlansListResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_create": {
    method: "POST",
    path: "/personal-finance/debts/plan",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungsplan anlegen",
      description: "Legt die Regel an (Strategie, Extra-Budget, Deckel). Der Soll-Verlauf entsteht erst beim Aktivieren — ein Plan ohne Messlatte kann noch beliebig geändert werden.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtPlansCreateParams;
      query: PfDebtPlansCreateQuery;
      body: PfDebtPlansCreateBody;
      response: PfDebtPlansCreateResponse;
      responseData: PfDebtPlansCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_preview": {
    method: "GET",
    path: "/personal-finance/debts/plan/preview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungsplan durchrechnen",
      description: "Rechnet ohne zu speichern — mit den übergebenen Werten oder, wenn keine kommen, mit denen des aktiven Plans. Liefert immer auch den Vergleich ohne Extra-Budget, weil eine Laufzeit ohne Gegenprobe keine Aussage ist.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfDebtPlansPreviewParams;
      query: PfDebtPlansPreviewQuery;
      body: PfDebtPlansPreviewBody;
      response: PfDebtPlansPreviewResponse;
      responseData: PfDebtPlansPreviewResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_progress": {
    method: "GET",
    path: "/personal-finance/debts/plan/progress",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Soll gegen Ist",
      description: "Vergleicht den Bestand mit dem EINGEFRORENEN Soll-Verlauf des aktiven Plans. 404, solange kein Plan aktiv ist — ohne Messlatte gibt es keine Abweichung, nur eine Momentaufnahme.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfDebtPlansProgressParams;
      query: PfDebtPlansProgressQuery;
      body: PfDebtPlansProgressBody;
      response: PfDebtPlansProgressResponse;
      responseData: PfDebtPlansProgressResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_observe": {
    method: "POST",
    path: "/personal-finance/debts/plan/observe",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schulden abgleichen",
      description: "Ordnet Zahlungen ihren Schulden zu, rechnet Zinssätze zurück und schreibt Befunde. Läuft sonst im Tageslauf; ohne Modell und ohne Token.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtsObserveParams;
      query: PfDebtsObserveQuery;
      body: PfDebtsObserveBody;
      response: PfDebtsObserveResponse;
      responseData: PfDebtsObserveResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_update": {
    method: "PATCH",
    path: "/personal-finance/debts/plan/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungsplan ändern",
      description: "Ändert sich die Rechengrundlage, wird der eingefrorene Soll-Verlauf verworfen und beim nächsten Aktivieren neu gebaut — eine Messlatte zu einem Plan, den es nicht mehr gibt, wäre wertlos.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtPlansUpdateParams;
      query: PfDebtPlansUpdateQuery;
      body: PfDebtPlansUpdateBody;
      response: PfDebtPlansUpdateResponse;
      responseData: PfDebtPlansUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_activate": {
    method: "POST",
    path: "/personal-finance/debts/plan/:id/activate",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungsplan aktivieren",
      description: "Macht den Plan zum einzigen aktiven und friert den Soll-Verlauf ein: je Monat und Schuld eine Zeile, gegen die später gemessen wird.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtPlansActivateParams;
      query: PfDebtPlansActivateQuery;
      body: PfDebtPlansActivateBody;
      response: PfDebtPlansActivateResponse;
      responseData: PfDebtPlansActivateResponseData;
    },
  },
  // Contract source: explicit
  "pf_debt_plans_delete": {
    method: "DELETE",
    path: "/personal-finance/debts/plan/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tilgungsplan löschen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtPlansDeleteParams;
      query: PfDebtPlansDeleteQuery;
      body: PfDebtPlansDeleteBody;
      response: PfDebtPlansDeleteResponse;
      responseData: PfDebtPlansDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_balances_list": {
    method: "GET",
    path: "/personal-finance/debts/:id/balances",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Nachgetragene Stände",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsBalancesListParams;
      query: PfDebtsBalancesListQuery;
      body: PfDebtsBalancesListBody;
      response: PfDebtsBalancesListResponse;
      responseData: PfDebtsBalancesListResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_balances_record": {
    method: "POST",
    path: "/personal-finance/debts/:id/balances",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Echten Saldo nachtragen",
      description: "Der einzige Weg, auf dem die Wahrheit über eine Kreditkarte hereinkommt — das Girokonto zeigt nur die Zahlung. newSpendCents wegzulassen heißt 'unbekannt', nicht 'null Euro': ohne die Umsatzsumme lassen sich Zins und Einkauf nicht trennen.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtsBalancesRecordParams;
      query: PfDebtsBalancesRecordQuery;
      body: PfDebtsBalancesRecordBody;
      response: PfDebtsBalancesRecordResponse;
      responseData: PfDebtsBalancesRecordResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_periods": {
    method: "GET",
    path: "/personal-finance/debts/:id/periods",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Perioden und gemessener Zins",
      description: "Je zwei aufeinanderfolgende Stände ergeben eine Periode; aus den Perioden ergibt sich der Zinssatz, der WIRKLICH gezahlt wird. costCents ist null, wenn sich Zins und Umsätze nicht trennen lassen — dann fehlt die Umsatzsumme.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsPeriodsParams;
      query: PfDebtsPeriodsQuery;
      body: PfDebtsPeriodsBody;
      response: PfDebtsPeriodsResponse;
      responseData: PfDebtsPeriodsResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_balances_delete": {
    method: "DELETE",
    path: "/personal-finance/debts/:id/balances/:balanceId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Nachgetragenen Stand löschen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsBalancesDeleteParams;
      query: PfDebtsBalancesDeleteQuery;
      body: PfDebtsBalancesDeleteBody;
      response: PfDebtsBalancesDeleteResponse;
      responseData: PfDebtsBalancesDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_get": {
    method: "GET",
    path: "/personal-finance/debts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Eine Schuld",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsGetParams;
      query: PfDebtsGetQuery;
      body: PfDebtsGetBody;
      response: PfDebtsGetResponse;
      responseData: PfDebtsGetResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_update": {
    method: "PATCH",
    path: "/personal-finance/debts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schuld ändern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfDebtsUpdateParams;
      query: PfDebtsUpdateQuery;
      body: PfDebtsUpdateBody;
      response: PfDebtsUpdateResponse;
      responseData: PfDebtsUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_debts_delete": {
    method: "DELETE",
    path: "/personal-finance/debts/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Schuld löschen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfDebtsDeleteParams;
      query: PfDebtsDeleteQuery;
      body: PfDebtsDeleteBody;
      response: PfDebtsDeleteResponse;
      responseData: PfDebtsDeleteResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_adapters": {
    method: "GET",
    path: "/personal-finance/statements/adapters",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Bank-Adapter auflisten",
      description: "Eingebaut sind Sparkasse und Volksbank/VR (auch in der Soll-/Haben-Variante) plus ein allgemeiner SEPA-Adapter. Eigene Adapter überschreiben einen eingebauten mit gleichem Kurznamen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsAdaptersParams;
      query: PfStatementsAdaptersQuery;
      body: PfStatementsAdaptersBody;
      response: PfStatementsAdaptersResponse;
      responseData: PfStatementsAdaptersResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_create_adapter": {
    method: "POST",
    path: "/personal-finance/statements/adapters",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Bank-Adapter anlegen",
      description: "Eine neue Bank anzubinden heißt: Spaltenzuordnung eintragen. Kein Deployment nötig. Pflicht sind bookingDate und amount (oder debit + credit).",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsCreateAdapterParams;
      query: PfStatementsCreateAdapterQuery;
      body: PfStatementsCreateAdapterBody;
      response: PfStatementsCreateAdapterResponse;
      responseData: PfStatementsCreateAdapterResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_import_preview": {
    method: "POST",
    path: "/personal-finance/statements/import/preview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Auszug prüfen, ohne zu speichern",
      description: "Sagt, was der Import tun WÜRDE: wie viele Zeilen neu sind, welche Dubletten wären, welche nicht lesbar sind, und welchen Saldo das Konto danach hätte. Ohne adapterSlug wird der passende Adapter geraten, indem jeder probiert wird.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsImportPreviewParams;
      query: PfStatementsImportPreviewQuery;
      body: PfStatementsImportPreviewBody;
      response: PfStatementsImportPreviewResponse;
      responseData: PfStatementsImportPreviewResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_import": {
    method: "POST",
    path: "/personal-finance/statements/import",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Auszug einlesen",
      description: "Schreibt in einer Transaktion. Dieselbe Datei zweimal einzulesen wird abgelehnt (409), einzelne bereits bekannte Buchungen werden übersprungen. Frisch importierte Zeilen werden automatisch bekannten Abos zugeordnet.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsImportParams;
      query: PfStatementsImportQuery;
      body: PfStatementsImportBody;
      response: PfStatementsImportResponse;
      responseData: PfStatementsImportResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_list_imports": {
    method: "GET",
    path: "/personal-finance/statements/imports",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Importläufe auflisten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsListImportsParams;
      query: PfStatementsListImportsQuery;
      body: PfStatementsListImportsBody;
      response: PfStatementsListImportsResponse;
      responseData: PfStatementsListImportsResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_delete_import": {
    method: "DELETE",
    path: "/personal-finance/statements/imports/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Import rückgängig machen",
      description: "Löscht die Buchungen dieses Laufs. Der Kontosaldo bleibt stehen — ihn automatisch zurückzurechnen wäre falsch, sobald danach weitere Auszüge kamen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsDeleteImportParams;
      query: PfStatementsDeleteImportQuery;
      body: PfStatementsDeleteImportBody;
      response: PfStatementsDeleteImportResponse;
      responseData: PfStatementsDeleteImportResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_rematch": {
    method: "POST",
    path: "/personal-finance/statements/imports/:id/rematch",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Zuordnung nachholen",
      description: "Ordnet die Buchungen eines Laufs erneut den Abos zu — nützlich, wenn nach dem Import neue wiederkehrende Zahlungen angelegt wurden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsRematchParams;
      query: PfStatementsRematchQuery;
      body: PfStatementsRematchBody;
      response: PfStatementsRematchResponse;
      responseData: PfStatementsRematchResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_transactions": {
    method: "GET",
    path: "/personal-finance/statements/transactions",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Buchungen durchsuchen",
      description: "Gefiltert nach Konto, Zeitraum, Kategorie, Abo, Betrag oder Text. Umbuchungen zwischen eigenen Konten sind standardmäßig ausgeblendet, weil sie keine Ausgabe sind.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsTransactionsParams;
      query: PfStatementsTransactionsQuery;
      body: PfStatementsTransactionsBody;
      response: PfStatementsTransactionsResponse;
      responseData: PfStatementsTransactionsResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_patch_transaction": {
    method: "PATCH",
    path: "/personal-finance/statements/transactions/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Buchung zuordnen",
      description: "Kategorie, Abo, Schuld oder Umbuchungs-Kennzeichen setzen. Die Buchungsdaten selbst sind unveränderlich — sie kommen aus dem Auszug.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsPatchTransactionParams;
      query: PfStatementsPatchTransactionQuery;
      body: PfStatementsPatchTransactionBody;
      response: PfStatementsPatchTransactionResponse;
      responseData: PfStatementsPatchTransactionResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_bulk_categorize": {
    method: "POST",
    path: "/personal-finance/statements/transactions/bulk-categorize",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Mehrere Buchungen kategorisieren",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsBulkCategorizeParams;
      query: PfStatementsBulkCategorizeQuery;
      body: PfStatementsBulkCategorizeBody;
      response: PfStatementsBulkCategorizeResponse;
      responseData: PfStatementsBulkCategorizeResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_detect_transfers": {
    method: "POST",
    path: "/personal-finance/statements/transactions/detect-transfers",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Umbuchungen erkennen",
      description: "Findet Paare aus gleichem Betrag mit umgekehrtem Vorzeichen auf zwei eigenen Konten und markiert beide Seiten. Verhindert, dass Sparen als Ausgabe gezählt wird.",
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: PfStatementsDetectTransfersParams;
      query: PfStatementsDetectTransfersQuery;
      body: PfStatementsDetectTransfersBody;
      response: PfStatementsDetectTransfersResponse;
      responseData: PfStatementsDetectTransfersResponseData;
    },
  },
  // Contract source: explicit
  "pf_statements_suggest_recurring": {
    method: "GET",
    path: "/personal-finance/statements/transactions/suggest-recurring",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Abo-Kandidaten vorschlagen",
      description: "Findet in den Buchungen wiederkehrende Muster: gleicher Empfänger, ähnlicher Betrag, regelmäßiger Abstand, mindestens drei Vorkommen. Rein regelbasiert, kein Modell — angelegt wird nichts, es sind Vorschläge.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfStatementsSuggestRecurringParams;
      query: PfStatementsSuggestRecurringQuery;
      body: PfStatementsSuggestRecurringBody;
      response: PfStatementsSuggestRecurringResponse;
      responseData: PfStatementsSuggestRecurringResponseData;
    },
  },
  // Contract source: explicit
  "pf_overview_month": {
    method: "GET",
    path: "/personal-finance/overview/month",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wie viel bleibt diesen Monat übrig",
      description: "Die Kernfrage des Vorhabens, als nachvollziehbare Rechnung: verfügbarer Betrag heute, minus was bis Monatsende noch abgeht, plus was noch reinkommt. Ausgangspunkt ist der VERFÜGBARE Betrag — Steuerrücklagen liegen zwar auf dem Konto, gehören aber dem Finanzamt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfOverviewMonthParams;
      query: PfOverviewMonthQuery;
      body: PfOverviewMonthBody;
      response: PfOverviewMonthResponse;
      responseData: PfOverviewMonthResponseData;
    },
  },
  // Contract source: explicit
  "pf_overview_dashboard": {
    method: "GET",
    path: "/personal-finance/overview/dashboard",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Alles auf einen Blick",
      description: "Ein Aufruf für ein ganzes Dashboard: Monatsvorschau, die nächsten 30 Tage, ablaufende Kündigungsfristen und die Zahl der bereits verpassten — dazu die Befunde des Tageslaufs, die Trefferquote der Vorschau und der Vermögenstrend der letzten 90 Tage. Spart dem Frontend die Kette aus sechs Abfragen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfOverviewDashboardParams;
      query: PfOverviewDashboardQuery;
      body: PfOverviewDashboardBody;
      response: PfOverviewDashboardResponse;
      responseData: PfOverviewDashboardResponseData;
    },
  },
  // Contract source: explicit
  "pf_insights_list": {
    method: "GET",
    path: "/personal-finance/insights",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Was das System gefunden hat",
      description: "Befunde des Tageslaufs: Abos, die nicht mehr abgebucht werden; Preise, die sich geändert haben; Kündigungsfristen; veraltete Kontostände; drohende Deckungslücken. Jeder Befund trägt seinen Beleg in evidence und, wo es etwas anzuwenden gibt, einen Vorschlag in proposedAction. Ohne Angabe von status werden nur die offenen geliefert.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfInsightsListParams;
      query: PfInsightsListQuery;
      body: PfInsightsListBody;
      response: PfInsightsListResponse;
      responseData: PfInsightsListResponseData;
    },
  },
  // Contract source: explicit
  "pf_insights_counts": {
    method: "GET",
    path: "/personal-finance/insights/counts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Offene Befunde nach Schwere",
      description: "Für den Zähler an der Navigation, ohne die ganze Liste zu laden.",
    },
    types: null as unknown as {
      params: PfInsightsCountsParams;
      query: PfInsightsCountsQuery;
      body: PfInsightsCountsBody;
      response: PfInsightsCountsResponse;
      responseData: PfInsightsCountsResponseData;
    },
  },
  // Contract source: explicit
  "pf_insights_accept": {
    method: "POST",
    path: "/personal-finance/insights/:id/accept",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Vorschlag übernehmen",
      description: "Führt die in proposedAction hinterlegte Änderung aus — Betrag anpassen oder Posten beenden. Die erlaubten Aktionen stehen abschliessend im Code; ein Befund kann nichts anderes auslösen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfInsightsAcceptParams;
      query: PfInsightsAcceptQuery;
      body: PfInsightsAcceptBody;
      response: PfInsightsAcceptResponse;
      responseData: PfInsightsAcceptResponseData;
    },
  },
  // Contract source: explicit
  "pf_insights_dismiss": {
    method: "POST",
    path: "/personal-finance/insights/:id/dismiss",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Befund verwerfen",
      description: "Verworfene Befunde kommen für dieselbe Ursache nicht wieder.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfInsightsDismissParams;
      query: PfInsightsDismissQuery;
      body: PfInsightsDismissBody;
      response: PfInsightsDismissResponse;
      responseData: PfInsightsDismissResponseData;
    },
  },
  // Contract source: explicit
  "pf_expectations_list": {
    method: "GET",
    path: "/personal-finance/insights/expectations",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Erwartete Buchungen und ihr Ausgang",
      description: "Je Termin eines wiederkehrenden Postens eine Zeile: was erwartet wurde, was tatsächlich kam, und die Abweichung. status ist pending (Termin liegt vorn), confirmed, amount_changed, late (Kulanzfenster läuft noch) oder missed.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfExpectationsListParams;
      query: PfExpectationsListQuery;
      body: PfExpectationsListBody;
      response: PfExpectationsListResponse;
      responseData: PfExpectationsListResponseData;
    },
  },
  // Contract source: explicit
  "pf_expectations_reliability": {
    method: "GET",
    path: "/personal-finance/insights/reliability",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wie verlässlich ist die Vorschau",
      description: "Anteil der Termine, die tatsächlich bestätigt wurden. Eine Vorschau, von der ein Drittel nie eintrifft, muss das zeigen dürfen. confirmedRatio ist null, solange nichts zu messen ist — das ist ausdrücklich nicht dasselbe wie 0.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfExpectationsReliabilityParams;
      query: PfExpectationsReliabilityQuery;
      body: PfExpectationsReliabilityBody;
      response: PfExpectationsReliabilityResponse;
      responseData: PfExpectationsReliabilityResponseData;
    },
  },
  // Contract source: explicit
  "pf_history_net_worth": {
    method: "GET",
    path: "/personal-finance/insights/net-worth-series",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Vermögensverlauf",
      description: "Ein Punkt je Tag aus den täglichen Snapshots. staleDays nennt den ältesten beteiligten Kontostand: eine flache Kurve aus vier Wochen alten Ständen ist keine ruhige Lage, sondern fehlende Messung.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfHistoryNetWorthParams;
      query: PfHistoryNetWorthQuery;
      body: PfHistoryNetWorthBody;
      response: PfHistoryNetWorthResponse;
      responseData: PfHistoryNetWorthResponseData;
    },
  },
  // Contract source: explicit
  "pf_history_spending": {
    method: "GET",
    path: "/personal-finance/insights/spending",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Ausgaben je Kategorie je Monat",
      description: "Aus den gebuchten Bewegungen, ohne Umbuchungen zwischen eigenen Konten. Nicht zugeordnete Buchungen erscheinen als eigene Kategorie und werden nicht verschwiegen. Der Durchschnitt zählt nur abgeschlossene Monate.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfHistorySpendingParams;
      query: PfHistorySpendingQuery;
      body: PfHistorySpendingBody;
      response: PfHistorySpendingResponse;
      responseData: PfHistorySpendingResponseData;
    },
  },
  // Contract source: explicit
  "pf_history_coverage": {
    method: "GET",
    path: "/personal-finance/insights/coverage",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wie viel ist überhaupt zugeordnet",
      description: "Gehört neben jede Auswertung: eine Kategorienverteilung, in der 60 % unzugeordnet sind, beantwortet die Frage nicht, auch wenn das Diagramm vollständig aussieht.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfHistoryCoverageParams;
      query: PfHistoryCoverageQuery;
      body: PfHistoryCoverageBody;
      response: PfHistoryCoverageResponse;
      responseData: PfHistoryCoverageResponseData;
    },
  },
  // Contract source: explicit
  "pf_history_forecast": {
    method: "GET",
    path: "/personal-finance/insights/forecast",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Liquiditätsvorschau über mehrere Monate",
      description: "Schreibt den heute verfügbaren Betrag mit der wiederkehrenden Last fort. Bewusst grob: nur geplante Posten, keine Schätzung des variablen Alltags. Die Frage, die sie beantwortet, ist 'wann kippt es' — nicht 'wie viel habe ich im Mai'.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfHistoryForecastParams;
      query: PfHistoryForecastQuery;
      body: PfHistoryForecastBody;
      response: PfHistoryForecastResponse;
      responseData: PfHistoryForecastResponseData;
    },
  },
  // Contract source: explicit
  "pf_insights_run_daily": {
    method: "POST",
    path: "/personal-finance/insights/run-daily",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Tageslauf jetzt ausführen",
      description: "Fälligkeiten fortschreiben, Erwartungen anlegen und abgleichen, Schlüsse ziehen, Snapshot schreiben — für den anfragenden Nutzer. Derselbe Ablauf, den der Worker einmal am Tag fährt. Deterministisch, kostet kein Modell.",
    },
    types: null as unknown as {
      params: PfInsightsRunDailyParams;
      query: PfInsightsRunDailyQuery;
      body: PfInsightsRunDailyBody;
      response: PfInsightsRunDailyResponse;
      responseData: PfInsightsRunDailyResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_plan": {
    method: "GET",
    path: "/personal-finance/allocation/plan",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Soll und Ist der Verteilung",
      description: "Wie viel vom Einkommen auf welches Konto gehen soll, und wie viel im gewählten Monat tatsächlich dort angekommen ist. actualCents ist null, solange keine Umbuchungen eingelesen sind — 'nicht gemessen' ist etwas anderes als '0 € überwiesen'. Mit basisCents lässt sich ein anderes Einkommen durchspielen, ohne den Plan zu ändern.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfAllocationPlanParams;
      query: PfAllocationPlanQuery;
      body: PfAllocationPlanBody;
      response: PfAllocationPlanResponse;
      responseData: PfAllocationPlanResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_projection": {
    method: "GET",
    path: "/personal-finance/allocation/projection",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Wie das Kontensystem laufen würde",
      description: "Fortschreibung Monat für Monat: geplante Konten und geplante Daueraufträge zählen hier mit, in der Gegenwart zählen sie nirgends. Damit lässt sich ein Gehaltskonto-System entwerfen, bevor ein einziges Konto eröffnet ist. Hängt an einer Verteilungsregel ein Dauerauftrag, bewegt der Dauerauftrag das Geld und die Regel schweigt — sonst stünde derselbe Betrag zweimal in der Rechnung. Ohne Zinsen, Inflation und Steuern: eine Fortschreibung der eigenen Anweisungen, keine Vorhersage.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfAllocationProjectionParams;
      query: PfAllocationProjectionQuery;
      body: PfAllocationProjectionBody;
      response: PfAllocationProjectionResponse;
      responseData: PfAllocationProjectionResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_rules_list": {
    method: "GET",
    path: "/personal-finance/allocation/rules",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Verteilungsregeln auflisten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PfAllocationRulesListParams;
      query: PfAllocationRulesListQuery;
      body: PfAllocationRulesListBody;
      response: PfAllocationRulesListResponse;
      responseData: PfAllocationRulesListResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_rules_create": {
    method: "POST",
    path: "/personal-finance/allocation/rules",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Verteilungsregel anlegen",
      description: "kind=percent nimmt einen Anteil am Einkommen (Basispunkte, 2500 = 25 %), kind=fixed einen festen Betrag, kind=remainder den Rest. Eine aktive Rest-Regel je Nutzer.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAllocationRulesCreateParams;
      query: PfAllocationRulesCreateQuery;
      body: PfAllocationRulesCreateBody;
      response: PfAllocationRulesCreateResponse;
      responseData: PfAllocationRulesCreateResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_rules_update": {
    method: "PATCH",
    path: "/personal-finance/allocation/rules/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Verteilungsregel ändern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PfAllocationRulesUpdateParams;
      query: PfAllocationRulesUpdateQuery;
      body: PfAllocationRulesUpdateBody;
      response: PfAllocationRulesUpdateResponse;
      responseData: PfAllocationRulesUpdateResponseData;
    },
  },
  // Contract source: explicit
  "pf_allocation_rules_delete": {
    method: "DELETE",
    path: "/personal-finance/allocation/rules/:id",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["personal-finance"],
      summary: "Verteilungsregel löschen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PfAllocationRulesDeleteParams;
      query: PfAllocationRulesDeleteQuery;
      body: PfAllocationRulesDeleteBody;
      response: PfAllocationRulesDeleteResponse;
      responseData: PfAllocationRulesDeleteResponseData;
    },
  },
} as const;