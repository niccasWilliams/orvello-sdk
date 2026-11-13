/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type OverviewHomeParams = undefined;
export type OverviewHomeQuery = {
  fiscalYear?: number;
};
export type OverviewHomeBody = undefined;
export type OverviewHomeResponseData = {
  companyId: number;
  baseCurrency: string;
  asOf: string;
  fiscalYear: number;
  result: {
  data: {
  period: {
  year: number;
  start: string;
  end: string;
};
  totalRevenues: number;
  totalExpenses: number;
  profit: number;
  profitMargin: number;
  revenuesByCategory: {
  total: number;
  top: Array<{
  category: string;
  total: number;
  count: number;
  percentage: number;
}>;
  rest: {
  total: number;
  count: number;
  categories: number;
} | null;
};
  expensesByCategory: {
  total: number;
  top: Array<{
  category: string;
  total: number;
  count: number;
  percentage: number;
}>;
  rest: {
  total: number;
  count: number;
  categories: number;
} | null;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  trend: {
  data: {
  year: number;
  months: Array<{
  month: number;
  monthName: string;
  revenues: number;
  expenses: number;
  profit: number;
}>;
  comparison: {
  year: number;
  throughMonth: number;
  current: {
  revenues: number;
  expenses: number;
};
  previous: {
  revenues: number;
  expenses: number;
};
  revenueChangePercent: number | null;
  expenseChangePercent: number | null;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  receivables: {
  data: {
  asOf: string;
  currencies: Array<{
  currency: string;
  open: {
  count: number;
  amount: string;
};
  overdue: {
  count: number;
  amount: string;
};
  notDue: {
  count: number;
  amount: string;
};
  dueWithin7Days: {
  count: number;
  amount: string;
};
}>;
  draftCount: number;
  overdue: {
  total: number;
  items: Array<{
  invoiceId: number;
  invoiceNumber: string;
  customerName: string | null;
  dueDate: string;
  days: number;
  currency: string;
  totalAmount: string;
  openAmount: string;
  suggestedLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeAt: string | null;
}>;
};
  upcoming: {
  total: number;
  items: Array<{
  invoiceId: number;
  invoiceNumber: string;
  customerName: string | null;
  dueDate: string;
  days: number;
  currency: string;
  totalAmount: string;
  openAmount: string;
  suggestedLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeAt: string | null;
}>;
};
  dunning: {
  recommendedCount: number;
  complete: boolean;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  reconciliation: {
  data: {
  unmatchedPayments: {
  count: number;
  totalAmount: string;
  currency: string;
  byCurrency: Array<{
  currency: string;
  count: number;
  totalAmount: string;
}>;
};
  partialPayments: {
  count: number;
  totalAmount: string;
  currency: string;
  byCurrency: Array<{
  currency: string;
  count: number;
  totalAmount: string;
}>;
};
  providerPayoutCount: number;
  autoMatchableCount: number | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  lock: {
  data: {
  state: "unlocked" | "locked_payments_only" | "locked_strict";
  tone: "neutral" | "warning" | "danger";
  isLocked: boolean;
  configuredLockMode: "payments_only" | "strict";
  effectiveLockMode: "payments_only" | "strict" | null;
  lockModeLabel: string;
  lockedUntil: string | null;
  nextOpenDate: string | null;
  reason: string | null;
  lockedAt: string | null;
  lockedBy: number | null;
  updatedAt: string;
  updatedBy: number | null;
  boundaryRule: {
  kind: "inclusive_date_cutoff";
  expression: "date <= lockedUntil";
  explanation: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  closing: {
  data: {
  suggested: {
  period: "monthly" | "quarterly" | "annual" | "none";
  lockedUntil: string | null;
  reason: string;
  periodStart: string | null;
  periodEnd: string | null;
};
  readiness: {
  period: {
  start: string;
  end: string;
};
  status: "ready" | "attention";
  issues: Array<{
  key: "unallocated_payments" | "draft_invoices" | "unconfirmed_expenses" | "unconfirmed_revenues";
  severity: "warning" | "info";
  count: number;
  message: string;
}>;
  paymentsInPeriodCount: number;
  unallocatedPaymentsCount: number;
  draftInvoicesCount: number;
  unconfirmedExpensesCount: number | null;
  unconfirmedRevenuesCount: number | null;
  unmatchedConfirmedCount: number | null;
  notes: Array<string>;
} | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  taxAlerts: {
  data: {
  activeCount: number;
  alerts: Array<{
  key: string;
  severity: "info" | "warning" | "critical";
  title: string;
  message: string;
  requiredDecision: {
  decisionKey: string;
  currentValue: string;
  suggestedValue: string;
  endpoint: string;
} | null;
}>;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  vat: {
  data: {
  regime: string | null;
  regimeValidFrom: string | null;
  accountingMethod: string;
  revenue: {
  currentYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
  previousYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
};
  userDecisionRequired: boolean;
  ustva: {
  filingPreference: string;
  recommended: "monthly" | "quarterly" | "annual" | "none";
  reason: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  recentActivity: {
  data: {
  total: number;
  items: Array<{
  id: number;
  action: string;
  entityType: string;
  entityId: number | null;
  message: string | null;
  actorUserId: number | null;
  createdAt: string;
}>;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  onboarding: {
  data: {
  required: boolean;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
};
export type OverviewHomeResponse = import("../types").ApiEnvelope<OverviewHomeResponseData>;

export type OverviewBookkeepingParams = undefined;
export type OverviewBookkeepingQuery = {
  fiscalYear?: number;
};
export type OverviewBookkeepingBody = undefined;
export type OverviewBookkeepingResponseData = {
  companyId: number;
  baseCurrency: string;
  asOf: string;
  fiscalYear: number;
  result: {
  data: {
  period: {
  year: number;
  start: string;
  end: string;
};
  totalRevenues: number;
  totalExpenses: number;
  profit: number;
  profitMargin: number;
  revenuesByCategory: {
  total: number;
  top: Array<{
  category: string;
  total: number;
  count: number;
  percentage: number;
}>;
  rest: {
  total: number;
  count: number;
  categories: number;
} | null;
};
  expensesByCategory: {
  total: number;
  top: Array<{
  category: string;
  total: number;
  count: number;
  percentage: number;
}>;
  rest: {
  total: number;
  count: number;
  categories: number;
} | null;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  trend: {
  data: {
  year: number;
  months: Array<{
  month: number;
  monthName: string;
  revenues: number;
  expenses: number;
  profit: number;
}>;
  comparison: {
  year: number;
  throughMonth: number;
  current: {
  revenues: number;
  expenses: number;
};
  previous: {
  revenues: number;
  expenses: number;
};
  revenueChangePercent: number | null;
  expenseChangePercent: number | null;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  vendors: {
  data: {
  total: number;
  top: Array<{
  vendor: string;
  total: number;
  count: number;
  percentage: number;
}>;
  rest: {
  total: number;
  count: number;
  vendors: number;
} | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  assets: {
  data: {
  year: number;
  currency: string;
  summary: {
  openingBookValue: number;
  acquisitionsNet: number;
  disposalProceeds: number;
  depreciationCurrentYear: number;
  closingBookValue: number;
  acquiredAssets: number;
  activeAssetsAtYearEnd: number;
  disposedAssetsInYear: number;
};
  iabExpiringWithin90Days: number;
  openPoolsFromPastYears: number;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  lock: {
  data: {
  state: "unlocked" | "locked_payments_only" | "locked_strict";
  tone: "neutral" | "warning" | "danger";
  isLocked: boolean;
  configuredLockMode: "payments_only" | "strict";
  effectiveLockMode: "payments_only" | "strict" | null;
  lockModeLabel: string;
  lockedUntil: string | null;
  nextOpenDate: string | null;
  reason: string | null;
  lockedAt: string | null;
  lockedBy: number | null;
  updatedAt: string;
  updatedBy: number | null;
  boundaryRule: {
  kind: "inclusive_date_cutoff";
  expression: "date <= lockedUntil";
  explanation: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  closing: {
  data: {
  suggested: {
  period: "monthly" | "quarterly" | "annual" | "none";
  lockedUntil: string | null;
  reason: string;
  periodStart: string | null;
  periodEnd: string | null;
};
  readiness: {
  period: {
  start: string;
  end: string;
};
  status: "ready" | "attention";
  issues: Array<{
  key: "unallocated_payments" | "draft_invoices" | "unconfirmed_expenses" | "unconfirmed_revenues";
  severity: "warning" | "info";
  count: number;
  message: string;
}>;
  paymentsInPeriodCount: number;
  unallocatedPaymentsCount: number;
  draftInvoicesCount: number;
  unconfirmedExpensesCount: number | null;
  unconfirmedRevenuesCount: number | null;
  unmatchedConfirmedCount: number | null;
  notes: Array<string>;
} | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  feeProposals: {
  data: {
  openCount: number;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  reconciliation: {
  data: {
  unmatchedPayments: {
  count: number;
  totalAmount: string;
  currency: string;
  byCurrency: Array<{
  currency: string;
  count: number;
  totalAmount: string;
}>;
};
  partialPayments: {
  count: number;
  totalAmount: string;
  currency: string;
  byCurrency: Array<{
  currency: string;
  count: number;
  totalAmount: string;
}>;
};
  providerPayoutCount: number;
  autoMatchableCount: number | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  vat: {
  data: {
  regime: string | null;
  regimeValidFrom: string | null;
  accountingMethod: string;
  revenue: {
  currentYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
  previousYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
};
  userDecisionRequired: boolean;
  ustva: {
  filingPreference: string;
  recommended: "monthly" | "quarterly" | "annual" | "none";
  reason: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
};
export type OverviewBookkeepingResponse = import("../types").ApiEnvelope<OverviewBookkeepingResponseData>;

export type OverviewTaxParams = undefined;
export type OverviewTaxQuery = {
  fiscalYear?: number;
};
export type OverviewTaxBody = undefined;
export type OverviewTaxResponseData = {
  companyId: number;
  baseCurrency: string;
  asOf: string;
  fiscalYear: number;
  vat: {
  data: {
  regime: string | null;
  regimeValidFrom: string | null;
  accountingMethod: string;
  revenue: {
  currentYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
  previousYear: {
  year: number;
  amount: number;
  percent: number;
  threshold: number;
};
};
  userDecisionRequired: boolean;
  ustva: {
  filingPreference: string;
  recommended: "monthly" | "quarterly" | "annual" | "none";
  reason: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  vatPeriods: {
  data: {
  count: number;
  periods: Array<{
  id: number;
  regime: string;
  validFrom: string | null;
  validTo: string | null;
  reason: string | null;
  triggerAmount: number | null;
}>;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  taxAlerts: {
  data: {
  activeCount: number;
  alerts: Array<{
  key: string;
  severity: "info" | "warning" | "critical";
  title: string;
  message: string;
  requiredDecision: {
  decisionKey: string;
  currentValue: string;
  suggestedValue: string;
  endpoint: string;
} | null;
}>;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  euer: {
  data: {
  year: number;
  period: {
  start: string;
  end: string;
};
  totalRevenues: number;
  totalExpenses: number;
  profit: number;
  warningCount: number;
  sourceFingerprint: string;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  lock: {
  data: {
  state: "unlocked" | "locked_payments_only" | "locked_strict";
  tone: "neutral" | "warning" | "danger";
  isLocked: boolean;
  configuredLockMode: "payments_only" | "strict";
  effectiveLockMode: "payments_only" | "strict" | null;
  lockModeLabel: string;
  lockedUntil: string | null;
  nextOpenDate: string | null;
  reason: string | null;
  lockedAt: string | null;
  lockedBy: number | null;
  updatedAt: string;
  updatedBy: number | null;
  boundaryRule: {
  kind: "inclusive_date_cutoff";
  expression: "date <= lockedUntil";
  explanation: string;
};
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  closing: {
  data: {
  suggested: {
  period: "monthly" | "quarterly" | "annual" | "none";
  lockedUntil: string | null;
  reason: string;
  periodStart: string | null;
  periodEnd: string | null;
};
  readiness: {
  period: {
  start: string;
  end: string;
};
  status: "ready" | "attention";
  issues: Array<{
  key: "unallocated_payments" | "draft_invoices" | "unconfirmed_expenses" | "unconfirmed_revenues";
  severity: "warning" | "info";
  count: number;
  message: string;
}>;
  paymentsInPeriodCount: number;
  unallocatedPaymentsCount: number;
  draftInvoicesCount: number;
  unconfirmedExpensesCount: number | null;
  unconfirmedRevenuesCount: number | null;
  unmatchedConfirmedCount: number | null;
  notes: Array<string>;
} | null;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
  feeProposals: {
  data: {
  openCount: number;
} | null;
  reason: {
  code: string;
  message: string;
} | null;
};
};
export type OverviewTaxResponse = import("../types").ApiEnvelope<OverviewTaxResponseData>;

export type OverviewTasksParams = undefined;
export type OverviewTasksQuery = {

};
export type OverviewTasksBody = undefined;
export type OverviewTasksResponseData = {
  companyId: number;
  asOf: string;
  tasks: Array<{
  kind: "invoices_overdue" | "dunning_due" | "tax_decisions" | "payments_unallocated" | "provider_payouts_unconfirmed" | "expenses_unconfirmed" | "revenues_unconfirmed" | "bookings_without_payment" | "fee_proposals_open" | "tax_year_steps" | "invoices_due_soon" | "invoices_draft" | "period_close_ready";
  urgency: "critical" | "attention" | "info";
  count: number;
  countIsComplete: boolean;
  amounts: Array<{
  currency: string;
  amount: string;
}>;
  oldestDays: number | null;
  hints: Array<string>;
  breakdown: {
  expenses: number;
  revenues: number;
} | null;
  target: {
  kind: "invoices";
  filter: {
  view: "overdue" | "due_soon" | "draft";
};
} | {
  kind: "dunning";
  filter: {
  view: "suggested";
};
} | {
  kind: "reconciliation";
  filter: {
  view: "unmatched" | "provider_payouts";
};
} | {
  kind: "expenses";
  filter: {
  isConfirmed: false;
};
} | {
  kind: "revenues";
  filter: {
  isConfirmed: false;
};
} | {
  kind: "bookings";
  filter: {
  isConfirmed: true;
  paymentStatus: Array<"unmatched" | "partially_matched">;
};
} | {
  kind: "fee_proposals";
  filter: {
  status: "PROPOSED";
};
} | {
  kind: "tax_settings";
  filter: {
  companyId: number;
  alertKeys: Array<string>;
};
} | {
  kind: "tax_year";
  filter: {
  year: number;
  taskKey: string | null;
};
} | {
  kind: "period_lock";
  filter: {
  lockedUntil: string;
};
};
}>;
  counts: {
  critical: number;
  attention: number;
  info: number;
};
  unavailable: Array<{
  source: string;
  reason: {
  code: string;
  message: string;
};
}>;
};
export type OverviewTasksResponse = import("../types").ApiEnvelope<OverviewTasksResponseData>;

export const apiRoutes_overview = {
  // Contract source: explicit
  "overview_home": {
    method: "GET",
    path: "/overview/home",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["overview"],
      summary: "Startseite der Buchhaltung in einem Aufruf",
      description: "Ergebnis und Monatsverlauf des Geschäftsjahres mit Vorjahresvergleich, Forderungen (Kennzahlen wie GET /invoices/summary, dazu je höchstens 10 überfällige und bald fällige Rechnungen mit Kunde, Restforderung und Mahnstufe), Zahlungsabgleich, Buchungssperre, Abschluss-Bereitschaft, Steuerhinweise, Umsatzsteuerlage, die letzten Buchungsaktivitäten und ob die Einrichtung noch läuft (onboarding.required). Die aktive Firma des Benutzers gilt; ohne Auswahl 409 NO_COMPANY_SELECTED. Jeder Teil kommt als { data, reason }: fehlt das Recht (PERMISSION_DENIED, restricted_cost_centers) oder fällt ein Teil aus, ist data null und reason nennt den Grund, der Rest wird geliefert. Beträge im Format ihrer Quelle, je Währung getrennt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: OverviewHomeParams;
      query: OverviewHomeQuery;
      body: OverviewHomeBody;
      response: OverviewHomeResponse;
      responseData: OverviewHomeResponseData;
    },
  },
  // Contract source: explicit
  "overview_bookkeeping": {
    method: "GET",
    path: "/overview/bookkeeping",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["overview"],
      summary: "Buchhaltungs-Übersicht in einem Aufruf",
      description: "Ergebnis mit den größten Einnahme- und Ausgabekategorien, Monatsverlauf, größte Lieferanten, Kennzahlen des Anlagenspiegels, Buchungssperre, Abschluss-Bereitschaft, die Zahl offener Gebührenvorschläge, die Umsatzsteuerlage (vat, wie in GET /overview/home) und der Zahlungsabgleich der Firma (reconciliation; closing.readiness.unallocatedPaymentsCount gilt dagegen nur für den Sperrzeitraum). Die aktive Firma des Benutzers gilt; ohne Auswahl 409 NO_COMPANY_SELECTED. Jeder Teil kommt als { data, reason }: fehlt das Recht (PERMISSION_DENIED, restricted_cost_centers) oder fällt ein Teil aus, ist data null und reason nennt den Grund, der Rest wird geliefert. Beträge im Format ihrer Quelle, je Währung getrennt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: OverviewBookkeepingParams;
      query: OverviewBookkeepingQuery;
      body: OverviewBookkeepingBody;
      response: OverviewBookkeepingResponse;
      responseData: OverviewBookkeepingResponseData;
    },
  },
  // Contract source: explicit
  "overview_tax": {
    method: "GET",
    path: "/overview/tax",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["overview"],
      summary: "Steuerlage in einem Aufruf",
      description: "Umsatzsteuerlage, Verlauf der USt-Regime, Steuerhinweise, Eckzahlen der EÜR des Jahres, Buchungssperre, Abschluss-Bereitschaft und die Zahl offener Gebührenvorschläge. Die aktive Firma des Benutzers gilt; ohne Auswahl 409 NO_COMPANY_SELECTED. Jeder Teil kommt als { data, reason }: fehlt das Recht (PERMISSION_DENIED, restricted_cost_centers) oder fällt ein Teil aus, ist data null und reason nennt den Grund, der Rest wird geliefert. Beträge im Format ihrer Quelle, je Währung getrennt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: OverviewTaxParams;
      query: OverviewTaxQuery;
      body: OverviewTaxBody;
      response: OverviewTaxResponse;
      responseData: OverviewTaxResponseData;
    },
  },
  // Contract source: explicit
  "overview_tasks": {
    method: "GET",
    path: "/overview/tasks",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["overview"],
      summary: "Was ist zu tun",
      description: "Offene Aufgaben der aktiven Firma als typisierte Liste, nach Dringlichkeit sortiert: Art, Anzahl, Betrag je Währung wo sinnvoll und das Ziel als fachlicher Verweis (kein Pfad). Eine Aufgabenart erscheint nur, wenn der Benutzer ihr Ziel sehen darf; Quellen, die nicht gelesen werden konnten, stehen mit Grund in unavailable. Ohne Firmenauswahl 409 NO_COMPANY_SELECTED.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: OverviewTasksParams;
      query: OverviewTasksQuery;
      body: OverviewTasksBody;
      response: OverviewTasksResponse;
      responseData: OverviewTasksResponseData;
    },
  },
} as const;