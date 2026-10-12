/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type TaxYearsGetParams = {
  year: string;
};
export type TaxYearsGetQuery = undefined;
export type TaxYearsGetBody = undefined;
export type TaxYearsGetResponseData = {
  year: number;
  revision: number;
  ruleVersion: string;
  generatedAt: string;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
  tasks: Array<{
  key: string;
  title: string;
  explanation: string;
  area: "profile" | "personal" | "business" | "filing";
  status: "blocked" | "open" | "reviewed" | "submitted" | "needs_review";
  blockers: Array<string>;
  basisFingerprint: string;
  canReview: boolean;
  canRecordSubmission: boolean;
  form: "ESt 1 A" | "Anlage N" | "Anlage G" | "Anlage S" | "Anlage EÜR" | null;
  review: {
  basisFingerprint: string;
  reviewedAt: string;
  note: string;
} | null;
  submission: {
  basisFingerprint: string;
  submittedAt: string;
  recordedAt: string;
  reference: string;
  reopenedAt?: string;
  reopenNote?: string;
} | null;
  source: {
  label: string;
  url: string;
} | null;
}>;
  businesses: Array<{
  companyId: number;
  status: "available" | "access_denied" | "unsupported" | "unavailable";
  companyName: string | null;
  reason: string | null;
  calculation?: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
} | null;
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  report: {
  sourceFingerprint: string;
  revenues: string;
  expenses: string;
  profit: string;
  currency: "EUR";
  generatedAt: string;
  warnings: Array<{
  code: string;
  source: string;
  documentId: number;
  message: string;
}>;
  evidence?: {
  version: 1;
  capitalizedExpenseIds: Array<number>;
  cashLines: Array<{
  source: string;
  documentId: number;
  category: string;
  date: string;
  amount: string;
  via: string;
  paymentId: number | null;
}>;
  revenueCategories: Record<string, string>;
  expenseCategories: Record<string, string>;
};
  sourceOperation: "bookkeeping_reports_euer";
} | null;
}>;
  summary: {
  total: number;
  reviewed: number;
  blocked: number;
  nextTaskKey: string | null;
  status: "needs_input" | "in_preparation" | "ready_for_manual_transfer" | "submission_recorded" | "needs_review";
};
  limitations: Array<string>;
};
export type TaxYearsGetResponse = import("../types").ApiEnvelope<TaxYearsGetResponseData>;

export type TaxYearsConfigureParams = {
  year: string;
};
export type TaxYearsConfigureQuery = undefined;
export type TaxYearsConfigureBody = {
  requestId: string;
  expectedRevision: number;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
};
export type TaxYearsConfigureResponseData = {
  year: number;
  revision: number;
  ruleVersion: string;
  generatedAt: string;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
  tasks: Array<{
  key: string;
  title: string;
  explanation: string;
  area: "profile" | "personal" | "business" | "filing";
  status: "blocked" | "open" | "reviewed" | "submitted" | "needs_review";
  blockers: Array<string>;
  basisFingerprint: string;
  canReview: boolean;
  canRecordSubmission: boolean;
  form: "ESt 1 A" | "Anlage N" | "Anlage G" | "Anlage S" | "Anlage EÜR" | null;
  review: {
  basisFingerprint: string;
  reviewedAt: string;
  note: string;
} | null;
  submission: {
  basisFingerprint: string;
  submittedAt: string;
  recordedAt: string;
  reference: string;
  reopenedAt?: string;
  reopenNote?: string;
} | null;
  source: {
  label: string;
  url: string;
} | null;
}>;
  businesses: Array<{
  companyId: number;
  status: "available" | "access_denied" | "unsupported" | "unavailable";
  companyName: string | null;
  reason: string | null;
  calculation?: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
} | null;
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  report: {
  sourceFingerprint: string;
  revenues: string;
  expenses: string;
  profit: string;
  currency: "EUR";
  generatedAt: string;
  warnings: Array<{
  code: string;
  source: string;
  documentId: number;
  message: string;
}>;
  evidence?: {
  version: 1;
  capitalizedExpenseIds: Array<number>;
  cashLines: Array<{
  source: string;
  documentId: number;
  category: string;
  date: string;
  amount: string;
  via: string;
  paymentId: number | null;
}>;
  revenueCategories: Record<string, string>;
  expenseCategories: Record<string, string>;
};
  sourceOperation: "bookkeeping_reports_euer";
} | null;
}>;
  summary: {
  total: number;
  reviewed: number;
  blocked: number;
  nextTaskKey: string | null;
  status: "needs_input" | "in_preparation" | "ready_for_manual_transfer" | "submission_recorded" | "needs_review";
};
  limitations: Array<string>;
};
export type TaxYearsConfigureResponse = import("../types").ApiEnvelope<TaxYearsConfigureResponseData>;

export type TaxYearsReviewParams = {
  year: string;
};
export type TaxYearsReviewQuery = undefined;
export type TaxYearsReviewBody = {
  requestId: string;
  expectedRevision: number;
  taskKey: string;
  basisFingerprint: string;
  action: "review" | "reopen";
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  note: string;
};
export type TaxYearsReviewResponseData = {
  year: number;
  revision: number;
  ruleVersion: string;
  generatedAt: string;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
  tasks: Array<{
  key: string;
  title: string;
  explanation: string;
  area: "profile" | "personal" | "business" | "filing";
  status: "blocked" | "open" | "reviewed" | "submitted" | "needs_review";
  blockers: Array<string>;
  basisFingerprint: string;
  canReview: boolean;
  canRecordSubmission: boolean;
  form: "ESt 1 A" | "Anlage N" | "Anlage G" | "Anlage S" | "Anlage EÜR" | null;
  review: {
  basisFingerprint: string;
  reviewedAt: string;
  note: string;
} | null;
  submission: {
  basisFingerprint: string;
  submittedAt: string;
  recordedAt: string;
  reference: string;
  reopenedAt?: string;
  reopenNote?: string;
} | null;
  source: {
  label: string;
  url: string;
} | null;
}>;
  businesses: Array<{
  companyId: number;
  status: "available" | "access_denied" | "unsupported" | "unavailable";
  companyName: string | null;
  reason: string | null;
  calculation?: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
} | null;
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  report: {
  sourceFingerprint: string;
  revenues: string;
  expenses: string;
  profit: string;
  currency: "EUR";
  generatedAt: string;
  warnings: Array<{
  code: string;
  source: string;
  documentId: number;
  message: string;
}>;
  evidence?: {
  version: 1;
  capitalizedExpenseIds: Array<number>;
  cashLines: Array<{
  source: string;
  documentId: number;
  category: string;
  date: string;
  amount: string;
  via: string;
  paymentId: number | null;
}>;
  revenueCategories: Record<string, string>;
  expenseCategories: Record<string, string>;
};
  sourceOperation: "bookkeeping_reports_euer";
} | null;
}>;
  summary: {
  total: number;
  reviewed: number;
  blocked: number;
  nextTaskKey: string | null;
  status: "needs_input" | "in_preparation" | "ready_for_manual_transfer" | "submission_recorded" | "needs_review";
};
  limitations: Array<string>;
};
export type TaxYearsReviewResponse = import("../types").ApiEnvelope<TaxYearsReviewResponseData>;

export type TaxYearsRecordSubmissionParams = {
  year: string;
};
export type TaxYearsRecordSubmissionQuery = undefined;
export type TaxYearsRecordSubmissionBody = {
  requestId: string;
  expectedRevision: number;
  taskKey: string;
  basisFingerprint: string;
  submittedAt: string;
  reference: string;
};
export type TaxYearsRecordSubmissionResponseData = {
  year: number;
  revision: number;
  ruleVersion: string;
  generatedAt: string;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
  tasks: Array<{
  key: string;
  title: string;
  explanation: string;
  area: "profile" | "personal" | "business" | "filing";
  status: "blocked" | "open" | "reviewed" | "submitted" | "needs_review";
  blockers: Array<string>;
  basisFingerprint: string;
  canReview: boolean;
  canRecordSubmission: boolean;
  form: "ESt 1 A" | "Anlage N" | "Anlage G" | "Anlage S" | "Anlage EÜR" | null;
  review: {
  basisFingerprint: string;
  reviewedAt: string;
  note: string;
} | null;
  submission: {
  basisFingerprint: string;
  submittedAt: string;
  recordedAt: string;
  reference: string;
  reopenedAt?: string;
  reopenNote?: string;
} | null;
  source: {
  label: string;
  url: string;
} | null;
}>;
  businesses: Array<{
  companyId: number;
  status: "available" | "access_denied" | "unsupported" | "unavailable";
  companyName: string | null;
  reason: string | null;
  calculation?: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
} | null;
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  report: {
  sourceFingerprint: string;
  revenues: string;
  expenses: string;
  profit: string;
  currency: "EUR";
  generatedAt: string;
  warnings: Array<{
  code: string;
  source: string;
  documentId: number;
  message: string;
}>;
  evidence?: {
  version: 1;
  capitalizedExpenseIds: Array<number>;
  cashLines: Array<{
  source: string;
  documentId: number;
  category: string;
  date: string;
  amount: string;
  via: string;
  paymentId: number | null;
}>;
  revenueCategories: Record<string, string>;
  expenseCategories: Record<string, string>;
};
  sourceOperation: "bookkeeping_reports_euer";
} | null;
}>;
  summary: {
  total: number;
  reviewed: number;
  blocked: number;
  nextTaskKey: string | null;
  status: "needs_input" | "in_preparation" | "ready_for_manual_transfer" | "submission_recorded" | "needs_review";
};
  limitations: Array<string>;
};
export type TaxYearsRecordSubmissionResponse = import("../types").ApiEnvelope<TaxYearsRecordSubmissionResponseData>;

export type TaxYearsHistoryParams = {
  year: string;
};
export type TaxYearsHistoryQuery = {
  beforeRevision?: any;
};
export type TaxYearsHistoryBody = undefined;
export type TaxYearsHistoryResponseData = {
  items: Array<{
  revision: number;
  action: "configure" | "review" | "reopen" | "submission";
  details: {
  taskKey: string | null;
  note: string | null;
};
  state: {
  schemaVersion: 1;
  configuration: {
  profile: {
  germanResident: "unknown" | "yes" | "no";
  assessment: "unknown" | "individual" | "joint";
  employment: "unknown" | "yes" | "no";
  selfEmployment: "unknown" | "yes" | "no";
  otherIncome: "unknown" | "yes" | "no";
};
  businesses: Array<{
  companyId: number;
  relationship: "own_sole_proprietorship";
  incomeType: "unknown" | "trade" | "freelance";
}>;
};
  reviews: Record<string, {
  basisFingerprint: string;
  reviewedAt: string;
  note: string;
}>;
  submissions: Record<string, {
  basisFingerprint: string;
  submittedAt: string;
  recordedAt: string;
  reference: string;
  reopenedAt?: string;
  reopenNote?: string;
}>;
  corrections?: Record<string, {
  sourceFingerprint: string;
  corrections: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  recordedAt: string;
  recordedBy: number;
  note: string;
}>;
  evidence?: Record<string, {
  capturedAt: string;
  capturedBy: number;
  ruleVersion: string;
  observation: {
  companyId: number;
  status: "available" | "access_denied" | "unsupported" | "unavailable";
  companyName: string | null;
  reason: string | null;
  calculation?: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
} | null;
  corrections?: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
  report: {
  sourceFingerprint: string;
  revenues: string;
  expenses: string;
  profit: string;
  currency: "EUR";
  generatedAt: string;
  warnings: Array<{
  code: string;
  source: string;
  documentId: number;
  message: string;
}>;
  evidence?: {
  version: 1;
  capitalizedExpenseIds: Array<number>;
  cashLines: Array<{
  source: string;
  documentId: number;
  category: string;
  date: string;
  amount: string;
  via: string;
  paymentId: number | null;
}>;
  revenueCategories: Record<string, string>;
  expenseCategories: Record<string, string>;
};
  sourceOperation: "bookkeeping_reports_euer";
} | null;
};
  calculation: {
  previewProfit: string;
  correctionTotal: string;
  correctedProfit: string;
  sourceFingerprint: string;
  correctionsCurrent: boolean;
  entries: Array<{
  id: string;
  profitDelta: string;
  explanation: string;
  otherYear: number | null;
}>;
};
  corrections: Array<{
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "ten_day";
  amount: string;
  flow: "revenue" | "expense";
  paidOn: string;
  dueOn: string;
  economicYear: number;
  regularlyRecurring: true;
  includedInPreview: boolean;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "other";
  profitDelta: string;
  legalBasis: string;
} | {
  id: string;
  businessOnly: true;
  reason: string;
  evidence: Array<{
  reference: string;
  description: string;
}>;
  kind: "asset_disposal";
  assetReference: string;
  disposedOn: string;
  remainingBookValue: string;
  proceedsReceivedInYear: true;
  disposalProceeds: string;
  proceedsAlreadyIncluded: string;
  bookValueAlreadyDeducted: string;
  pooledAsset: boolean;
}>;
}>;
};
  recordedAt: string;
}>;
  nextBeforeRevision: number | null;
};
export type TaxYearsHistoryResponse = import("../types").ApiEnvelope<TaxYearsHistoryResponseData>;

export const apiRoutes_tax_years = {
  // Contract source: explicit
  "tax_years_get": {
    method: "GET",
    path: "/tax-years/:year",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["tax-years"],
      summary: "Persönlichen Steuerjahr-Arbeitsbereich lesen",
      description: "Lesend, legt keine Daten an. Nur der angemeldete Nutzer, unabhängig von der ausgewählten Firma. Liefert Aufgaben, Blocker, Quellen und aktuelle betriebliche Vorschauen mit erneut geprüften Zugriffsrechten. Fehlerhafte Daten sind unbekannt, niemals Null. Kein Steuerbescheid und keine Abgabe.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: TaxYearsGetParams;
      query: TaxYearsGetQuery;
      body: TaxYearsGetBody;
      response: TaxYearsGetResponse;
      responseData: TaxYearsGetResponseData;
    },
  },
  // Contract source: explicit
  "tax_years_configure": {
    method: "PUT",
    path: "/tax-years/:year/configuration",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["tax-years"],
      summary: "Persönliche Situation und eigene Betriebe zuordnen",
      description: "Ersetzt die vollständige Konfiguration eines Jahres. expectedRevision aus GET, neue requestId pro Änderung; bei Transportfehler dieselbe Anfrage wiederholen. 409 bei konkurrierender Änderung. Betriebe erfordern unbeschränkten Verwaltungszugriff und die ausdrückliche Zuordnung als eigener Einzelbetrieb. Alte Prüfungen und Abgabereferenzen bleiben nachvollziehbar.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: TaxYearsConfigureParams;
      query: TaxYearsConfigureQuery;
      body: TaxYearsConfigureBody;
      response: TaxYearsConfigureResponse;
      responseData: TaxYearsConfigureResponseData;
    },
  },
  // Contract source: explicit
  "tax_years_review": {
    method: "POST",
    path: "/tax-years/:year/reviews",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["tax-years"],
      summary: "Prüfung eines Vorbereitungsschritts dokumentieren oder wieder öffnen",
      description: "taskKey und basisFingerprint kommen aus GET. Nur ausdrücklich geprüfte Schritte bestätigen; note benennt geprüfte Nachweise oder offene Punkte. Bei business:<id>:tax_checks ist corrections zwingend, auch als leere Liste; ersetzt die Korrekturen dieses Betriebs. Jede Korrektur verlangt betriebliche Zuordnung, Begründung und Belegreferenz. euer-Prüfung archiviert die Berechnung. reopen einer Abgabe erhält die Referenz und markiert erneuten Prüfbedarf. 409 bei geänderter Grundlage, 422 bei offenen Voraussetzungen. Kein automatisches Abschließen aufgrund vorhandener Zahlen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: TaxYearsReviewParams;
      query: TaxYearsReviewQuery;
      body: TaxYearsReviewBody;
      response: TaxYearsReviewResponse;
      responseData: TaxYearsReviewResponseData;
    },
  },
  // Contract source: explicit
  "tax_years_record_submission": {
    method: "POST",
    path: "/tax-years/:year/submissions",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["tax-years"],
      summary: "Bereits erfolgte externe Abgabe dokumentieren",
      description: "Speichert Datum und Übermittlungsreferenz. Sendet nichts an ELSTER. Auch eine Abgabe mit offenen Punkten kann ehrlich erfasst werden; sie wird als prüfbedürftig angezeigt. Wiederholte Korrekturen erzeugen eine Revision. Abgabe ist kein Nachweis steuerlicher Vollständigkeit.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: TaxYearsRecordSubmissionParams;
      query: TaxYearsRecordSubmissionQuery;
      body: TaxYearsRecordSubmissionBody;
      response: TaxYearsRecordSubmissionResponse;
      responseData: TaxYearsRecordSubmissionResponseData;
    },
  },
  // Contract source: explicit
  "tax_years_history": {
    method: "GET",
    path: "/tax-years/:year/history",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["tax-years"],
      summary: "Persönlichen Änderungsverlauf lesen",
      description: "Höchstens 50 Revisionen, absteigend. nextBeforeRevision als beforeRevision für die nächste Seite. Ausschließlich der eigene Verlauf.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: TaxYearsHistoryParams;
      query: TaxYearsHistoryQuery;
      body: TaxYearsHistoryBody;
      response: TaxYearsHistoryResponse;
      responseData: TaxYearsHistoryResponseData;
    },
  },
} as const;