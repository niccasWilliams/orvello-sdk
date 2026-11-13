/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type EInvoicingValidateParams = undefined;
export type EInvoicingValidateQuery = undefined;
export type EInvoicingValidateBody = {
  mode: "canonical";
  format: "xrechnung_ubl" | "xrechnung_cii" | "zugferd";
  data: {
  id: string;
  issueDate: string;
  typeCode: "380" | "381" | "384" | "389" | "751";
  currencyCode?: string;
  taxCurrencyCode?: string;
  taxPointDate?: string;
  dueDate?: string;
  buyerReference?: string;
  projectReference?: string;
  contractReference?: string;
  orderReference?: string;
  salesOrderReference?: string;
  processControl: {
  profileId?: string;
  specificationId: string;
};
  precedingInvoiceRefs?: Array<{
  id: string;
  issueDate?: string;
}>;
  seller?: {
  name: string;
  tradingName?: string;
  identifiers?: Array<{
  id: string;
  scheme?: string;
}>;
  legalRegistration?: {
  id?: string;
  scheme?: string;
};
  vatId?: string;
  taxRegistrationId?: string;
  electronicAddress?: {
  id: string;
  scheme: string;
};
  address: {
  streetName?: string;
  additionalStreet?: string;
  additionalInfo?: string;
  city?: string;
  postalCode?: string;
  subdivision?: string;
  countryCode: string;
};
  contact?: {
  name?: string;
  phone?: string;
  email?: string;
};
};
  buyer: {
  name: string;
  tradingName?: string;
  identifiers?: Array<{
  id: string;
  scheme?: string;
}>;
  legalRegistration?: {
  id?: string;
  scheme?: string;
};
  vatId?: string;
  taxRegistrationId?: string;
  electronicAddress?: {
  id: string;
  scheme: string;
};
  address: {
  streetName?: string;
  additionalStreet?: string;
  additionalInfo?: string;
  city?: string;
  postalCode?: string;
  subdivision?: string;
  countryCode: string;
};
  contact?: {
  name?: string;
  phone?: string;
  email?: string;
};
};
  payee?: {
  name: string;
  identifier?: {
  id: string;
  scheme?: string;
};
  legalRegistrationId?: string;
};
  sellerTaxRepresentative?: {
  name: string;
  vatId: string;
  address: {
  streetName?: string;
  additionalStreet?: string;
  additionalInfo?: string;
  city?: string;
  postalCode?: string;
  subdivision?: string;
  countryCode: string;
};
};
  delivery?: {
  name?: string;
  locationId?: {
  id: string;
  scheme?: string;
};
  date?: string;
  period?: {
  startDate?: string;
  endDate?: string;
};
  address?: {
  streetName?: string;
  additionalStreet?: string;
  additionalInfo?: string;
  city?: string;
  postalCode?: string;
  subdivision?: string;
  countryCode: string;
};
};
  paymentMeans?: Array<{
  typeCode: string;
  text?: string;
  remittanceInfo?: string;
  creditTransfer?: {
  accountId: string;
  accountName?: string;
  serviceProviderId?: string;
};
  paymentCard?: {
  pan: string;
  holderName?: string;
};
  directDebit?: {
  mandateId?: string;
  creditorId?: string;
  debitAccountId?: string;
};
}>;
  paymentTerms?: string;
  documentAllowances?: Array<{
  isCharge: boolean;
  amount: string;
  baseAmount?: string;
  percentage?: string;
  reason?: string;
  reasonCode?: string;
  taxCategoryCode?: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  taxRate?: string;
}>;
  documentCharges?: Array<{
  isCharge: boolean;
  amount: string;
  baseAmount?: string;
  percentage?: string;
  reason?: string;
  reasonCode?: string;
  taxCategoryCode?: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  taxRate?: string;
}>;
  totals?: {
  lineTotalAmount?: string;
  allowanceTotalAmount?: string;
  chargeTotalAmount?: string;
  taxExclusiveAmount?: string;
  taxAmount?: string;
  taxAmountInAccountingCurrency?: string;
  taxInclusiveAmount?: string;
  prepaidAmount?: string;
  roundingAmount?: string;
  dueAmount?: string;
};
  taxBreakdowns?: Array<{
  taxableAmount: string;
  taxAmount: string;
  categoryCode: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  rate?: string;
  exemptionReason?: string;
  exemptionReasonCode?: string;
}>;
  lines: Array<{
  id: string;
  note?: string;
  objectId?: {
  id: string;
  scheme?: string;
};
  quantity: string;
  unitCode: string;
  netAmount?: string;
  orderLineReference?: string;
  accountingCost?: string;
  period?: {
  startDate?: string;
  endDate?: string;
};
  allowances?: Array<{
  isCharge: boolean;
  amount: string;
  baseAmount?: string;
  percentage?: string;
  reason?: string;
  reasonCode?: string;
  taxCategoryCode?: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  taxRate?: string;
}>;
  charges?: Array<{
  isCharge: boolean;
  amount: string;
  baseAmount?: string;
  percentage?: string;
  reason?: string;
  reasonCode?: string;
  taxCategoryCode?: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  taxRate?: string;
}>;
  price: {
  netPrice: string;
  discount?: string;
  grossPrice?: string;
  baseQuantity?: string;
  baseQuantityUnit?: string;
};
  tax: {
  categoryCode: "S" | "Z" | "E" | "AE" | "K" | "G" | "O" | "L" | "M";
  rate?: string;
};
  item: {
  name: string;
  description?: string;
  sellerId?: string;
  buyerId?: string;
  standardId?: {
  id: string;
  scheme: string;
};
  classificationIds?: Array<{
  id: string;
  scheme: string;
  version?: string;
}>;
  originCountry?: string;
  attributes?: Array<{
  name: string;
  value: string;
}>;
};
}>;
  additionalDocuments?: Array<{
  id: string;
  description?: string;
  externalUri?: string;
  embeddedDocument?: string;
  mimeCode?: string;
  filename?: string;
}>;
  notes?: Array<{
  subjectCode?: string;
  text: string;
}>;
};
} | {
  mode: "xml";
  xml: string;
};
export type EInvoicingValidateResponseData = {
  valid: boolean;
  format?: string;
  businessRules?: {
  valid: boolean;
  violations: Array<{
  ruleId: string;
  severity: "error" | "warning";
  message: string;
  location?: string;
}>;
};
  kosit: {
  accepted: boolean;
  valid: boolean;
  messages: Array<{
  code: string | null;
  level: "error" | "warning" | "information";
  text: string;
  lineNumber: number | null;
  columnNumber: number | null;
  xpathLocation: string | null;
}>;
  documentHash: string | null;
};
  xml?: string;
};
export type EInvoicingValidateResponse = import("../types").ApiEnvelope<EInvoicingValidateResponseData>;

export type EInvoicingExtractionsUploadParams = undefined;
export type EInvoicingExtractionsUploadQuery = undefined;
export type EInvoicingExtractionsUploadBody = {
  direction?: "inbound" | "outbound";
};
export type EInvoicingExtractionsUploadResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
  documentHash: string;
  rawText: string | null;
  structuredText: Record<string, any> | null;
  extractedData: Record<string, any> | null;
  extractionConfidence: Record<string, number> | null;
  extractionTokensUsed: number | null;
  extractionCostCents: number | null;
  xmlQualityReport: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  globalModifier: number;
  hasAutoFixes: boolean;
  profileCompliance: {
  claimedTier: "minimum" | "basic_wl" | "basic" | "en16931" | "extended";
  actuallyCompliant: boolean;
  missingForProfile: Array<string>;
};
  kositResult: {
  status: "passed" | "warnings" | "failed" | "unavailable";
  errorCount: number;
  warningCount: number;
} | null;
  warnings: Array<string>;
  fieldCount: number;
  autoFixedFields: Array<{
  field: string;
  originalValue?: string;
}>;
  confidenceSummary: {
  high: number;
  medium: number;
  low: number;
  missing: number;
};
} | null;
  validationResult: Record<string, any> | null;
  textBackCheckResult: Record<string, any> | null;
  reviewedData: Record<string, any> | null;
  reviewNotes: string | null;
  failureReason: string | null;
  senderKnowledgeId: string | null;
  trafficLights: {
  fields: Array<{
  field: string;
  light: "green" | "yellow" | "red";
  reasons: Array<string>;
}>;
  summary: {
  green: number;
  yellow: number;
  red: number;
};
} | null;
  senderTrust: {
  trustLevel: string;
  totalReviews: number;
  successfulReviews: number;
  lastReviewDate: string | null;
  averageInvoiceAmount: string | null;
  knownFacts: Record<string, any> | null;
} | null;
  anomalies: Record<string, any> | null;
  templateWarnings: Array<Record<string, any>> | null;
  exportReadiness: {
  options: Array<{
  key: string;
  label: string;
  ready: boolean;
  errors: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  warnings: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  missingFields: number;
}>;
} | null;
  reviewSummary: {
  overallStatus: string | null;
  errorCount: number;
  warningCount: number;
  anomalyRiskLevel: string;
  anomalyCount: number;
  templateWarningCount: number;
  trafficLightSummary: {
  green: number;
  yellow: number;
  red: number;
};
  hasFailure: boolean;
  isAutoAccepted: boolean;
  provider: string | null;
  costCents: number;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
  hasAutoFixes: boolean;
} | null;
};
};
export type EInvoicingExtractionsUploadResponse = import("../types").ApiEnvelope<EInvoicingExtractionsUploadResponseData>;

export type EInvoicingExtractionsUploadBatchParams = undefined;
export type EInvoicingExtractionsUploadBatchQuery = undefined;
export type EInvoicingExtractionsUploadBatchBody = undefined;
export type EInvoicingExtractionsUploadBatchResponseData = {
  submitted: number;
  jobs: Array<{
  id: string;
  status: string;
  documentMimeType: string;
}>;
  errors: Array<{
  index: number;
  filename?: string;
  error: string;
}>;
};
export type EInvoicingExtractionsUploadBatchResponse = import("../types").ApiEnvelope<EInvoicingExtractionsUploadBatchResponseData>;

export type EInvoicingExtractionsListParams = undefined;
export type EInvoicingExtractionsListQuery = {
  status?: "pending" | "preprocessing" | "extracting" | "validating" | "review" | "approved" | "rejected" | "converting" | "completed" | "failed";
  senderFingerprint?: string;
  cursor?: string;
  limit?: number;
};
export type EInvoicingExtractionsListBody = undefined;
export type EInvoicingExtractionsListResponseData = {
  items: Array<{
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
}>;
  pagination: {
  cursor?: string;
  hasMore: boolean;
};
};
export type EInvoicingExtractionsListResponse = import("../types").ApiEnvelope<EInvoicingExtractionsListResponseData>;

export type EInvoicingExtractionUsageCurrentParams = undefined;
export type EInvoicingExtractionUsageCurrentQuery = {
  yearMonth?: string;
};
export type EInvoicingExtractionUsageCurrentBody = undefined;
export type EInvoicingExtractionUsageCurrentResponseData = {
  yearMonth: string;
  totalExtractions: number;
  totalTokensUsed: number;
  totalCostCents: number;
  providers: {
  ollama: {
  extractions: number;
  tokens: number;
  costCents: number;
};
  claude: {
  extractions: number;
  tokens: number;
  costCents: number;
};
};
  fallbackTriggered: number;
  budget: {
  monthlyLimitCents: number | null;
  usedCents: number;
  remainingCents: number | null;
  usedPercent: number | null;
  warningEmitted: boolean;
  exceeded: boolean;
};
} | null;
export type EInvoicingExtractionUsageCurrentResponse = import("../types").ApiEnvelope<EInvoicingExtractionUsageCurrentResponseData>;

export type EInvoicingExtractionUsageHistoryParams = undefined;
export type EInvoicingExtractionUsageHistoryQuery = {
  months?: number;
};
export type EInvoicingExtractionUsageHistoryBody = undefined;
export type EInvoicingExtractionUsageHistoryResponseData = Array<{
  yearMonth: string;
  totalExtractions: number;
  totalTokensUsed: number;
  totalCostCents: number;
  providers: {
  ollama: {
  extractions: number;
  tokens: number;
  costCents: number;
};
  claude: {
  extractions: number;
  tokens: number;
  costCents: number;
};
};
  fallbackTriggered: number;
  budget: {
  monthlyLimitCents: number | null;
  usedCents: number;
  remainingCents: number | null;
  usedPercent: number | null;
  warningEmitted: boolean;
  exceeded: boolean;
};
}>;
export type EInvoicingExtractionUsageHistoryResponse = import("../types").ApiEnvelope<EInvoicingExtractionUsageHistoryResponseData>;

export type EInvoicingExtractionUsageSetBudgetParams = undefined;
export type EInvoicingExtractionUsageSetBudgetQuery = undefined;
export type EInvoicingExtractionUsageSetBudgetBody = {
  monthlyBudgetCents: number | null;
  yearMonth?: string;
};
export type EInvoicingExtractionUsageSetBudgetResponseData = {
  yearMonth: string;
  monthlyBudgetCents: number | null;
};
export type EInvoicingExtractionUsageSetBudgetResponse = import("../types").ApiEnvelope<EInvoicingExtractionUsageSetBudgetResponseData>;

export type EInvoicingExtractionsGetParams = {
  id: string;
};
export type EInvoicingExtractionsGetQuery = undefined;
export type EInvoicingExtractionsGetBody = undefined;
export type EInvoicingExtractionsGetResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
  documentHash: string;
  rawText: string | null;
  structuredText: Record<string, any> | null;
  extractedData: Record<string, any> | null;
  extractionConfidence: Record<string, number> | null;
  extractionTokensUsed: number | null;
  extractionCostCents: number | null;
  xmlQualityReport: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  globalModifier: number;
  hasAutoFixes: boolean;
  profileCompliance: {
  claimedTier: "minimum" | "basic_wl" | "basic" | "en16931" | "extended";
  actuallyCompliant: boolean;
  missingForProfile: Array<string>;
};
  kositResult: {
  status: "passed" | "warnings" | "failed" | "unavailable";
  errorCount: number;
  warningCount: number;
} | null;
  warnings: Array<string>;
  fieldCount: number;
  autoFixedFields: Array<{
  field: string;
  originalValue?: string;
}>;
  confidenceSummary: {
  high: number;
  medium: number;
  low: number;
  missing: number;
};
} | null;
  validationResult: Record<string, any> | null;
  textBackCheckResult: Record<string, any> | null;
  reviewedData: Record<string, any> | null;
  reviewNotes: string | null;
  failureReason: string | null;
  senderKnowledgeId: string | null;
  trafficLights: {
  fields: Array<{
  field: string;
  light: "green" | "yellow" | "red";
  reasons: Array<string>;
}>;
  summary: {
  green: number;
  yellow: number;
  red: number;
};
} | null;
  senderTrust: {
  trustLevel: string;
  totalReviews: number;
  successfulReviews: number;
  lastReviewDate: string | null;
  averageInvoiceAmount: string | null;
  knownFacts: Record<string, any> | null;
} | null;
  anomalies: Record<string, any> | null;
  templateWarnings: Array<Record<string, any>> | null;
  exportReadiness: {
  options: Array<{
  key: string;
  label: string;
  ready: boolean;
  errors: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  warnings: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  missingFields: number;
}>;
} | null;
  reviewSummary: {
  overallStatus: string | null;
  errorCount: number;
  warningCount: number;
  anomalyRiskLevel: string;
  anomalyCount: number;
  templateWarningCount: number;
  trafficLightSummary: {
  green: number;
  yellow: number;
  red: number;
};
  hasFailure: boolean;
  isAutoAccepted: boolean;
  provider: string | null;
  costCents: number;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
  hasAutoFixes: boolean;
} | null;
};
};
export type EInvoicingExtractionsGetResponse = import("../types").ApiEnvelope<EInvoicingExtractionsGetResponseData>;

export type EInvoicingExtractionsSaveDraftParams = {
  id: string;
};
export type EInvoicingExtractionsSaveDraftQuery = undefined;
export type EInvoicingExtractionsSaveDraftBody = {
  corrections?: Record<string, any>;
  notes?: string | null;
};
export type EInvoicingExtractionsSaveDraftResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
  documentHash: string;
  rawText: string | null;
  structuredText: Record<string, any> | null;
  extractedData: Record<string, any> | null;
  extractionConfidence: Record<string, number> | null;
  extractionTokensUsed: number | null;
  extractionCostCents: number | null;
  xmlQualityReport: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  globalModifier: number;
  hasAutoFixes: boolean;
  profileCompliance: {
  claimedTier: "minimum" | "basic_wl" | "basic" | "en16931" | "extended";
  actuallyCompliant: boolean;
  missingForProfile: Array<string>;
};
  kositResult: {
  status: "passed" | "warnings" | "failed" | "unavailable";
  errorCount: number;
  warningCount: number;
} | null;
  warnings: Array<string>;
  fieldCount: number;
  autoFixedFields: Array<{
  field: string;
  originalValue?: string;
}>;
  confidenceSummary: {
  high: number;
  medium: number;
  low: number;
  missing: number;
};
} | null;
  validationResult: Record<string, any> | null;
  textBackCheckResult: Record<string, any> | null;
  reviewedData: Record<string, any> | null;
  reviewNotes: string | null;
  failureReason: string | null;
  senderKnowledgeId: string | null;
  trafficLights: {
  fields: Array<{
  field: string;
  light: "green" | "yellow" | "red";
  reasons: Array<string>;
}>;
  summary: {
  green: number;
  yellow: number;
  red: number;
};
} | null;
  senderTrust: {
  trustLevel: string;
  totalReviews: number;
  successfulReviews: number;
  lastReviewDate: string | null;
  averageInvoiceAmount: string | null;
  knownFacts: Record<string, any> | null;
} | null;
  anomalies: Record<string, any> | null;
  templateWarnings: Array<Record<string, any>> | null;
  exportReadiness: {
  options: Array<{
  key: string;
  label: string;
  ready: boolean;
  errors: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  warnings: Array<{
  field: string;
  btId?: string;
  rule?: string;
  message: string;
  category: string;
}>;
  missingFields: number;
}>;
} | null;
  reviewSummary: {
  overallStatus: string | null;
  errorCount: number;
  warningCount: number;
  anomalyRiskLevel: string;
  anomalyCount: number;
  templateWarningCount: number;
  trafficLightSummary: {
  green: number;
  yellow: number;
  red: number;
};
  hasFailure: boolean;
  isAutoAccepted: boolean;
  provider: string | null;
  costCents: number;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
  hasAutoFixes: boolean;
} | null;
};
};
export type EInvoicingExtractionsSaveDraftResponse = import("../types").ApiEnvelope<EInvoicingExtractionsSaveDraftResponseData>;

export type EInvoicingExtractionsApproveParams = {
  id: string;
};
export type EInvoicingExtractionsApproveQuery = undefined;
export type EInvoicingExtractionsApproveBody = {
  corrections?: Record<string, any>;
  notes?: string;
  skipTemplateLearning?: boolean;
};
export type EInvoicingExtractionsApproveResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
};
export type EInvoicingExtractionsApproveResponse = import("../types").ApiEnvelope<EInvoicingExtractionsApproveResponseData>;

export type EInvoicingExtractionsConvertParams = {
  id: string;
};
export type EInvoicingExtractionsConvertQuery = undefined;
export type EInvoicingExtractionsConvertBody = {
  format?: "xrechnung_ubl" | "xrechnung_cii" | "zugferd";
  sellerProfileId?: string;
  triggerOutboundPipeline?: boolean;
};
export type EInvoicingExtractionsConvertResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
};
export type EInvoicingExtractionsConvertResponse = import("../types").ApiEnvelope<EInvoicingExtractionsConvertResponseData>;

export type EInvoicingExtractionsRejectParams = {
  id: string;
};
export type EInvoicingExtractionsRejectQuery = undefined;
export type EInvoicingExtractionsRejectBody = {
  reason: string;
};
export type EInvoicingExtractionsRejectResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
};
export type EInvoicingExtractionsRejectResponse = import("../types").ApiEnvelope<EInvoicingExtractionsRejectResponseData>;

export type EInvoicingExtractionsRetryParams = {
  id: string;
};
export type EInvoicingExtractionsRetryQuery = undefined;
export type EInvoicingExtractionsRetryBody = undefined;
export type EInvoicingExtractionsRetryResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
};
export type EInvoicingExtractionsRetryResponse = import("../types").ApiEnvelope<EInvoicingExtractionsRetryResponseData>;

export type EInvoicingExtractionsCancelParams = {
  id: string;
};
export type EInvoicingExtractionsCancelQuery = undefined;
export type EInvoicingExtractionsCancelBody = undefined;
export type EInvoicingExtractionsCancelResponseData = {
  id: string;
  tenantId: string;
  status: string;
  direction: string;
  documentMimeType: string;
  extractionProvider: string | null;
  senderFingerprint: string | null;
  invoiceId: string | null;
  sandbox: boolean;
  createdAt: string;
  updatedAt: string;
  xmlQuality: {
  qualityTier: "high" | "medium" | "low" | "untrusted";
  profileCompliant: boolean;
} | null;
};
export type EInvoicingExtractionsCancelResponse = import("../types").ApiEnvelope<EInvoicingExtractionsCancelResponseData>;

export type EInvoicingExtractionUsageJobParams = {
  id: string;
};
export type EInvoicingExtractionUsageJobQuery = undefined;
export type EInvoicingExtractionUsageJobBody = undefined;
export type EInvoicingExtractionUsageJobResponseData = {
  extractionJobId: string;
  provider: string | null;
  tokensUsed: number | null;
  costCents: number | null;
  createdAt: string;
};
export type EInvoicingExtractionUsageJobResponse = import("../types").ApiEnvelope<EInvoicingExtractionUsageJobResponseData>;

export const apiRoutes_e_invoicing = {
  // Contract source: explicit
  "e_invoicing_validate": {
    method: "POST",
    path: "/e-invoicing/validate",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "E-Rechnung pruefen (XRechnung/ZUGFeRD, KoSIT)",
      description: "Prueft eine Rechnung als kanonische Daten oder als XML gegen Geschaeftsregeln und KoSIT. Speichert nichts.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingValidateParams;
      query: EInvoicingValidateQuery;
      body: EInvoicingValidateBody;
      response: EInvoicingValidateResponse;
      responseData: EInvoicingValidateResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_upload": {
    method: "POST",
    path: "/e-invoicing/extractions",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Beleg zur Erkennung hochladen",
      description: "Ein Beleg (PDF, Bild, Office, XML, hoechstens 10 MB) im Feld file; direction inbound oder outbound.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsUploadParams;
      query: EInvoicingExtractionsUploadQuery;
      body: EInvoicingExtractionsUploadBody;
      response: EInvoicingExtractionsUploadResponse;
      responseData: EInvoicingExtractionsUploadResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_upload_batch": {
    method: "POST",
    path: "/e-invoicing/extractions/batch",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Bis zu 20 Belege zur Erkennung hochladen",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsUploadBatchParams;
      query: EInvoicingExtractionsUploadBatchQuery;
      body: EInvoicingExtractionsUploadBatchBody;
      response: EInvoicingExtractionsUploadBatchResponse;
      responseData: EInvoicingExtractionsUploadBatchResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_list": {
    method: "GET",
    path: "/e-invoicing/extractions",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Belegerkennungen des eigenen Mandanten auflisten",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsListParams;
      query: EInvoicingExtractionsListQuery;
      body: EInvoicingExtractionsListBody;
      response: EInvoicingExtractionsListResponse;
      responseData: EInvoicingExtractionsListResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extraction_usage_current": {
    method: "GET",
    path: "/e-invoicing/usage/extractions",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Verbrauch der Belegerkennung im Monat",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionUsageCurrentParams;
      query: EInvoicingExtractionUsageCurrentQuery;
      body: EInvoicingExtractionUsageCurrentBody;
      response: EInvoicingExtractionUsageCurrentResponse;
      responseData: EInvoicingExtractionUsageCurrentResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extraction_usage_history": {
    method: "GET",
    path: "/e-invoicing/usage/extractions/history",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Verbrauch der Belegerkennung der letzten Monate",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionUsageHistoryParams;
      query: EInvoicingExtractionUsageHistoryQuery;
      body: EInvoicingExtractionUsageHistoryBody;
      response: EInvoicingExtractionUsageHistoryResponse;
      responseData: EInvoicingExtractionUsageHistoryResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extraction_usage_set_budget": {
    method: "PATCH",
    path: "/e-invoicing/usage/extractions/budget",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"admin","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Monatsbudget der Belegerkennung setzen",
      description: "Betrag in Cent, null hebt die Grenze auf.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionUsageSetBudgetParams;
      query: EInvoicingExtractionUsageSetBudgetQuery;
      body: EInvoicingExtractionUsageSetBudgetBody;
      response: EInvoicingExtractionUsageSetBudgetResponse;
      responseData: EInvoicingExtractionUsageSetBudgetResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_get": {
    method: "GET",
    path: "/e-invoicing/extractions/:id",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Belegerkennung mit Ergebnis lesen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsGetParams;
      query: EInvoicingExtractionsGetQuery;
      body: EInvoicingExtractionsGetBody;
      response: EInvoicingExtractionsGetResponse;
      responseData: EInvoicingExtractionsGetResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_save_draft": {
    method: "PATCH",
    path: "/e-invoicing/extractions/:id/draft",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Korrekturen an einer Belegerkennung zwischenspeichern",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsSaveDraftParams;
      query: EInvoicingExtractionsSaveDraftQuery;
      body: EInvoicingExtractionsSaveDraftBody;
      response: EInvoicingExtractionsSaveDraftResponse;
      responseData: EInvoicingExtractionsSaveDraftResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_approve": {
    method: "POST",
    path: "/e-invoicing/extractions/:id/approve",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Belegerkennung mit Korrekturen freigeben",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsApproveParams;
      query: EInvoicingExtractionsApproveQuery;
      body: EInvoicingExtractionsApproveBody;
      response: EInvoicingExtractionsApproveResponse;
      responseData: EInvoicingExtractionsApproveResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_convert": {
    method: "POST",
    path: "/e-invoicing/extractions/:id/convert",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Freigegebene Belegerkennung in eine E-Rechnung umwandeln",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsConvertParams;
      query: EInvoicingExtractionsConvertQuery;
      body: EInvoicingExtractionsConvertBody;
      response: EInvoicingExtractionsConvertResponse;
      responseData: EInvoicingExtractionsConvertResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_reject": {
    method: "POST",
    path: "/e-invoicing/extractions/:id/reject",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Belegerkennung ablehnen",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsRejectParams;
      query: EInvoicingExtractionsRejectQuery;
      body: EInvoicingExtractionsRejectBody;
      response: EInvoicingExtractionsRejectResponse;
      responseData: EInvoicingExtractionsRejectResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_retry": {
    method: "POST",
    path: "/e-invoicing/extractions/:id/retry",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Fehlgeschlagene Belegerkennung erneut starten",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsRetryParams;
      query: EInvoicingExtractionsRetryQuery;
      body: EInvoicingExtractionsRetryBody;
      response: EInvoicingExtractionsRetryResponse;
      responseData: EInvoicingExtractionsRetryResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extractions_cancel": {
    method: "DELETE",
    path: "/e-invoicing/extractions/:id",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Laufende Belegerkennung abbrechen",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionsCancelParams;
      query: EInvoicingExtractionsCancelQuery;
      body: EInvoicingExtractionsCancelBody;
      response: EInvoicingExtractionsCancelResponse;
      responseData: EInvoicingExtractionsCancelResponseData;
    },
  },
  // Contract source: explicit
  "e_invoicing_extraction_usage_job": {
    method: "GET",
    path: "/e-invoicing/usage/extractions/:id",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["e-invoicing"],
      summary: "Verbrauch einer einzelnen Belegerkennung",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: EInvoicingExtractionUsageJobParams;
      query: EInvoicingExtractionUsageJobQuery;
      body: EInvoicingExtractionUsageJobBody;
      response: EInvoicingExtractionUsageJobResponse;
      responseData: EInvoicingExtractionUsageJobResponseData;
    },
  },
} as const;