// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.383Z
// Run `pnpm run api:generate` to regenerate

import type { AssetCostComponent, BookkeepingAsset, BookkeepingAuditLog, BookkeepingExpense, BookkeepingLockState, BookkeepingRevenue, CapitalMovement, EStCalculationResult, EmploymentIncome, IapPayoutImport, IncomeTaxSettings, IncomeTaxSummary, Invoice, PaginatedResult, Payment, PaymentAccount, PaymentAllocation, PaymentImportProfile, PaymentProviderConnection, ResolvedPaymentAllocation, Sonderausgaben, Steuerminderungen, VorauszahlungResult, Vorsorgeaufwendungen, Werbungskosten } from "../../frontend-types";

export type BookkeepingRevenuesSearchParams = undefined;
export type BookkeepingRevenuesSearchQuery = {
  q?: string;
  startDate?: string;
  endDate?: string;
  category?: "customer_invoice" | "interest" | "refund" | "other" | "asset_disposal" | "pos_sale" | "saas_revenue_apple_iap" | "saas_revenue_google_iap";
  isConfirmed?: boolean;
  paymentStatus?: "unmatched" | "cash_confirmed" | "partially_matched" | "fully_matched";
  minAmount?: string;
  maxAmount?: string;
  invoiceId?: number;
  assetId?: number;
  page?: number;
  pageSize?: number;
  sortBy?: "createdAt" | "revenueDate" | "amount";
  sortDir?: "asc" | "desc";
};
export type BookkeepingRevenuesSearchBody = undefined;
export type BookkeepingRevenuesSearchResponseData = PaginatedResult<BookkeepingRevenue>;
export type BookkeepingRevenuesSearchResponse = import("../types").ApiEnvelope<BookkeepingRevenuesSearchResponseData>;

export type BookkeepingRevenuesGetByIdParams = {
  id: number;
};
export type BookkeepingRevenuesGetByIdQuery = undefined;
export type BookkeepingRevenuesGetByIdBody = undefined;
export type BookkeepingRevenuesGetByIdResponseData = BookkeepingRevenue & { paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingRevenuesGetByIdResponse = import("../types").ApiEnvelope<BookkeepingRevenuesGetByIdResponseData>;

export type BookkeepingRevenuesAnalyzeReceiptParams = undefined;
export type BookkeepingRevenuesAnalyzeReceiptQuery = undefined;
export type BookkeepingRevenuesAnalyzeReceiptBody = undefined;
export type BookkeepingRevenuesAnalyzeReceiptResponseData = {
  extracted: {
  vendor?: string;
  vendorInvoiceNumber?: string;
  revenueDate?: string;
  amount?: string;
  netAmount?: string;
  taxAmount?: string;
  taxRate?: number;
  currency?: string;
  category?: "customer_invoice" | "interest" | "refund" | "other" | "asset_disposal" | "pos_sale" | "saas_revenue_apple_iap" | "saas_revenue_google_iap";
  description?: string;
};
  confidence: {
  vendor: number;
  date: number;
  amount: number;
  overall: number;
};
  rawText: string;
};
export type BookkeepingRevenuesAnalyzeReceiptResponse = import("../types").ApiEnvelope<BookkeepingRevenuesAnalyzeReceiptResponseData>;

export type BookkeepingRevenuesCreateParams = undefined;
export type BookkeepingRevenuesCreateQuery = undefined;
export type BookkeepingRevenuesCreateBody = {
  costCenterId?: number | null;
  revenueDate: string;
  performedAt?: string | null;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number | null;
  taxRate?: string | number | null;
  currency?: string;
  originalCurrency?: string | null;
  originalAmount?: string | number | null;
  description: string;
  category: "customer_invoice" | "interest" | "refund" | "other" | "asset_disposal" | "pos_sale" | "saas_revenue_apple_iap" | "saas_revenue_google_iap";
  invoiceId?: number | null;
  assetId?: number | null;
  documentId?: number | null;
  notes?: string | null;
  isSelfCreatedReceipt?: boolean;
  selfReceiptReason?: string | null;
  signatureName?: string | null;
  place?: string | null;
  language?: string | null;
};
export type BookkeepingRevenuesCreateResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesCreateResponse = import("../types").ApiEnvelope<BookkeepingRevenuesCreateResponseData>;

export type BookkeepingRevenuesUpdateParams = {
  id: number;
};
export type BookkeepingRevenuesUpdateQuery = undefined;
export type BookkeepingRevenuesUpdateBody = {
  costCenterId?: number | null;
  revenueDate: string;
  performedAt?: string | null;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number | null;
  taxRate?: string | number | null;
  currency?: string;
  originalCurrency?: string | null;
  originalAmount?: string | number | null;
  description: string;
  category: "customer_invoice" | "interest" | "refund" | "other" | "asset_disposal" | "pos_sale" | "saas_revenue_apple_iap" | "saas_revenue_google_iap";
  invoiceId?: number | null;
  assetId?: number | null;
  documentId?: number | null;
  notes?: string | null;
  isSelfCreatedReceipt?: boolean;
  selfReceiptReason?: string | null;
  signatureName?: string | null;
  place?: string | null;
  language?: string | null;
};
export type BookkeepingRevenuesUpdateResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesUpdateResponse = import("../types").ApiEnvelope<BookkeepingRevenuesUpdateResponseData>;

export type BookkeepingRevenuesUploadReceiptParams = {
  id: number;
};
export type BookkeepingRevenuesUploadReceiptQuery = undefined;
export type BookkeepingRevenuesUploadReceiptBody = undefined;
export type BookkeepingRevenuesUploadReceiptResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesUploadReceiptResponse = import("../types").ApiEnvelope<BookkeepingRevenuesUploadReceiptResponseData>;

export type BookkeepingRevenuesBulkConfirmParams = undefined;
export type BookkeepingRevenuesBulkConfirmQuery = undefined;
export type BookkeepingRevenuesBulkConfirmBody = {
  ids: Array<number>;
};
export type BookkeepingRevenuesBulkConfirmResponseData = {
  results: Array<{
  id: number;
  success: boolean;
  error?: string;
}>;
  totalSuccess: number;
  totalFailed: number;
};
export type BookkeepingRevenuesBulkConfirmResponse = import("../types").ApiEnvelope<BookkeepingRevenuesBulkConfirmResponseData>;

export type BookkeepingRevenuesConfirmParams = {
  id: number;
};
export type BookkeepingRevenuesConfirmQuery = undefined;
export type BookkeepingRevenuesConfirmBody = undefined;
export type BookkeepingRevenuesConfirmResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesConfirmResponse = import("../types").ApiEnvelope<BookkeepingRevenuesConfirmResponseData>;

export type BookkeepingRevenuesConfirmCashParams = {
  id: number;
};
export type BookkeepingRevenuesConfirmCashQuery = undefined;
export type BookkeepingRevenuesConfirmCashBody = {
  confirmedAt?: string;
};
export type BookkeepingRevenuesConfirmCashResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesConfirmCashResponse = import("../types").ApiEnvelope<BookkeepingRevenuesConfirmCashResponseData>;

export type BookkeepingRevenuesRevokeCashConfirmParams = {
  id: number;
};
export type BookkeepingRevenuesRevokeCashConfirmQuery = undefined;
export type BookkeepingRevenuesRevokeCashConfirmBody = {
  reason: string;
};
export type BookkeepingRevenuesRevokeCashConfirmResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesRevokeCashConfirmResponse = import("../types").ApiEnvelope<BookkeepingRevenuesRevokeCashConfirmResponseData>;

export type BookkeepingRevenuesDeleteParams = {
  id: number;
};
export type BookkeepingRevenuesDeleteQuery = undefined;
export type BookkeepingRevenuesDeleteBody = undefined;
export type BookkeepingRevenuesDeleteResponseData = null;
export type BookkeepingRevenuesDeleteResponse = import("../types").ApiEnvelope<BookkeepingRevenuesDeleteResponseData>;

export type BookkeepingRevenuesCreateExternalParams = undefined;
export type BookkeepingRevenuesCreateExternalQuery = undefined;
export type BookkeepingRevenuesCreateExternalBody = {
  costCenterId?: number | null;
  revenueDate: string;
  performedAt?: string | null;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number | null;
  taxRate?: string | number | null;
  currency?: string;
  description: string;
  category?: "customer_invoice" | "interest" | "refund" | "other" | "asset_disposal" | "pos_sale" | "saas_revenue_apple_iap" | "saas_revenue_google_iap";
  invoiceId?: number | null;
  notes?: string | null;
  confirm?: boolean;
};
export type BookkeepingRevenuesCreateExternalResponseData = BookkeepingRevenue;
export type BookkeepingRevenuesCreateExternalResponse = import("../types").ApiEnvelope<BookkeepingRevenuesCreateExternalResponseData>;

export type BookkeepingRevenuesInvoiceAdjustmentExternalParams = undefined;
export type BookkeepingRevenuesInvoiceAdjustmentExternalQuery = undefined;
export type BookkeepingRevenuesInvoiceAdjustmentExternalBody = {
  invoiceId: number;
  payoutAmount: string | number;
  revenueDate: string;
  externalRef: string;
  costCenterId?: number | null;
  description?: string;
  notes?: string | null;
  confirm?: boolean;
};
export type BookkeepingRevenuesInvoiceAdjustmentExternalResponseData = { created: boolean; idempotent: boolean; invoiceId: number; invoiceNumber: string; payoutAmount: string; invoiceTotal: string; adjustmentAmount: string; revenue: BookkeepingRevenue };
export type BookkeepingRevenuesInvoiceAdjustmentExternalResponse = import("../types").ApiEnvelope<BookkeepingRevenuesInvoiceAdjustmentExternalResponseData>;

export type BookkeepingExpensesSearchParams = undefined;
export type BookkeepingExpensesSearchQuery = {
  q?: string;
  startDate?: string;
  endDate?: string;
  category?: "infrastructure" | "office" | "software" | "hardware" | "travel" | "marketing" | "legal" | "accounting" | "insurance" | "personnel" | "depreciation" | "interest_expense" | "rent" | "bank_fees" | "professional_services" | "other" | "private_withdrawal" | "ust_payment";
  vendor?: string;
  currency?: string;
  isConfirmed?: boolean;
  paymentStatus?: "unmatched" | "cash_confirmed" | "partially_matched" | "fully_matched";
  isDeductible?: boolean;
  minAmount?: string;
  maxAmount?: string;
  page?: number;
  pageSize?: number;
  sortBy?: "createdAt" | "expenseDate" | "amount";
  sortDir?: "asc" | "desc";
};
export type BookkeepingExpensesSearchBody = undefined;
export type BookkeepingExpensesSearchResponseData = PaginatedResult<BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] }>;
export type BookkeepingExpensesSearchResponse = import("../types").ApiEnvelope<BookkeepingExpensesSearchResponseData>;

export type BookkeepingExpensesGetByIdParams = {
  id: number;
};
export type BookkeepingExpensesGetByIdQuery = undefined;
export type BookkeepingExpensesGetByIdBody = undefined;
export type BookkeepingExpensesGetByIdResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesGetByIdResponse = import("../types").ApiEnvelope<BookkeepingExpensesGetByIdResponseData>;

export type BookkeepingExpensesAnalyzeReceiptParams = undefined;
export type BookkeepingExpensesAnalyzeReceiptQuery = undefined;
export type BookkeepingExpensesAnalyzeReceiptBody = undefined;
export type BookkeepingExpensesAnalyzeReceiptResponseData = {
  extracted: {
  vendor?: string;
  vendorInvoiceNumber?: string;
  expenseDate?: string;
  amount?: string;
  netAmount?: string;
  taxAmount?: string;
  taxRate?: number;
  currency?: string;
  category?: "infrastructure" | "office" | "software" | "hardware" | "travel" | "marketing" | "legal" | "accounting" | "insurance" | "personnel" | "depreciation" | "interest_expense" | "rent" | "bank_fees" | "professional_services" | "other" | "ust_payment";
  description?: string;
};
  confidence: {
  vendor: number;
  date: number;
  amount: number;
  overall: number;
};
  rawText: string;
};
export type BookkeepingExpensesAnalyzeReceiptResponse = import("../types").ApiEnvelope<BookkeepingExpensesAnalyzeReceiptResponseData>;

export type BookkeepingExpensesCreateParams = undefined;
export type BookkeepingExpensesCreateQuery = undefined;
export type BookkeepingExpensesCreateBody = {
  costCenterId?: number | null;
  expenseDate: string;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number | null;
  taxRate?: string | number | null;
  currency?: string;
  description: string;
  category: "infrastructure" | "office" | "software" | "hardware" | "travel" | "marketing" | "legal" | "accounting" | "insurance" | "personnel" | "depreciation" | "interest_expense" | "rent" | "bank_fees" | "professional_services" | "other" | "ust_payment";
  vendor?: string | null;
  vendorInvoiceNumber?: string | null;
  notes?: string | null;
  isDeductible?: boolean;
  isConfirmed?: boolean;
  isSelfCreatedReceipt?: boolean;
  selfReceiptReason?: string | null;
  signatureName?: string | null;
  place?: string | null;
  language?: string | null;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | number | null;
  inputVatRate?: string | number | null;
  createAsAsset?: boolean;
  asset?: {
  name?: string;
  description?: string | null;
  assetType?: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "other";
  purchaseDate?: string;
  purchaseAmountNet?: string | number;
  currency?: string;
  usefulLifeMonths?: number;
  depreciationMethod?: "linear" | "immediate_gwg" | "none";
  residualValue?: string | number;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | number | null;
  inputVatRate?: string | number | null;
  vendorName?: string | null;
  vendorInvoiceNumber?: string | null;
  costCenterId?: number | null;
  documentId?: number | null;
  inheritExpenseDocument?: boolean;
};
};
export type BookkeepingExpensesCreateResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesCreateResponse = import("../types").ApiEnvelope<BookkeepingExpensesCreateResponseData>;

export type BookkeepingExpensesUpdateParams = {
  id: number;
};
export type BookkeepingExpensesUpdateQuery = undefined;
export type BookkeepingExpensesUpdateBody = {
  costCenterId?: number | null;
  expenseDate: string;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number | null;
  taxRate?: string | number | null;
  currency?: string;
  description: string;
  category: "infrastructure" | "office" | "software" | "hardware" | "travel" | "marketing" | "legal" | "accounting" | "insurance" | "personnel" | "depreciation" | "interest_expense" | "rent" | "bank_fees" | "professional_services" | "other" | "ust_payment";
  vendor?: string | null;
  vendorInvoiceNumber?: string | null;
  notes?: string | null;
  isDeductible?: boolean;
  isConfirmed?: boolean;
  isSelfCreatedReceipt?: boolean;
  selfReceiptReason?: string | null;
  signatureName?: string | null;
  place?: string | null;
  language?: string | null;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | number | null;
  inputVatRate?: string | number | null;
};
export type BookkeepingExpensesUpdateResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesUpdateResponse = import("../types").ApiEnvelope<BookkeepingExpensesUpdateResponseData>;

export type BookkeepingExpensesUploadReceiptParams = {
  id: number;
};
export type BookkeepingExpensesUploadReceiptQuery = undefined;
export type BookkeepingExpensesUploadReceiptBody = undefined;
export type BookkeepingExpensesUploadReceiptResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesUploadReceiptResponse = import("../types").ApiEnvelope<BookkeepingExpensesUploadReceiptResponseData>;

export type BookkeepingExpensesBulkConfirmParams = undefined;
export type BookkeepingExpensesBulkConfirmQuery = undefined;
export type BookkeepingExpensesBulkConfirmBody = {
  ids: Array<number>;
};
export type BookkeepingExpensesBulkConfirmResponseData = {
  results: Array<{
  id: number;
  success: boolean;
  error?: string;
}>;
  totalSuccess: number;
  totalFailed: number;
};
export type BookkeepingExpensesBulkConfirmResponse = import("../types").ApiEnvelope<BookkeepingExpensesBulkConfirmResponseData>;

export type BookkeepingExpensesConfirmParams = {
  id: number;
};
export type BookkeepingExpensesConfirmQuery = undefined;
export type BookkeepingExpensesConfirmBody = undefined;
export type BookkeepingExpensesConfirmResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesConfirmResponse = import("../types").ApiEnvelope<BookkeepingExpensesConfirmResponseData>;

export type BookkeepingExpensesConfirmCashParams = {
  id: number;
};
export type BookkeepingExpensesConfirmCashQuery = undefined;
export type BookkeepingExpensesConfirmCashBody = {
  confirmedAt?: string;
};
export type BookkeepingExpensesConfirmCashResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesConfirmCashResponse = import("../types").ApiEnvelope<BookkeepingExpensesConfirmCashResponseData>;

export type BookkeepingExpensesRevokeCashConfirmParams = {
  id: number;
};
export type BookkeepingExpensesRevokeCashConfirmQuery = undefined;
export type BookkeepingExpensesRevokeCashConfirmBody = {
  reason: string;
};
export type BookkeepingExpensesRevokeCashConfirmResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesRevokeCashConfirmResponse = import("../types").ApiEnvelope<BookkeepingExpensesRevokeCashConfirmResponseData>;

export type BookkeepingExpensesMarkAsAssetParams = {
  id: number;
};
export type BookkeepingExpensesMarkAsAssetQuery = undefined;
export type BookkeepingExpensesMarkAsAssetBody = {
  name?: string;
  description?: string | null;
  assetType?: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "other";
  purchaseDate?: string;
  purchaseAmountNet?: string | number;
  currency?: string;
  usefulLifeMonths?: number;
  depreciationMethod?: "linear" | "immediate_gwg" | "none";
  residualValue?: string | number;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | number | null;
  inputVatRate?: string | number | null;
  vendorName?: string | null;
  vendorInvoiceNumber?: string | null;
  costCenterId?: number | null;
  documentId?: number | null;
  inheritExpenseDocument?: boolean;
};
export type BookkeepingExpensesMarkAsAssetResponseData = { expense: BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] }; asset: BookkeepingAsset; createdFromExpense: true };
export type BookkeepingExpensesMarkAsAssetResponse = import("../types").ApiEnvelope<BookkeepingExpensesMarkAsAssetResponseData>;

export type BookkeepingExpensesDeleteParams = {
  id: number;
};
export type BookkeepingExpensesDeleteQuery = undefined;
export type BookkeepingExpensesDeleteBody = undefined;
export type BookkeepingExpensesDeleteResponseData = null;
export type BookkeepingExpensesDeleteResponse = import("../types").ApiEnvelope<BookkeepingExpensesDeleteResponseData>;

export type BookkeepingExpensesCreateExternalParams = undefined;
export type BookkeepingExpensesCreateExternalQuery = undefined;
export type BookkeepingExpensesCreateExternalBody = {
  s3Key?: string;
  amount: string | number;
  netAmount: string | number;
  taxAmount?: string | number;
  taxRate?: string | number;
  expenseDate: string;
  vendor?: string;
  description: string;
  currency?: string;
  category: "infrastructure" | "office" | "software" | "hardware" | "travel" | "marketing" | "legal" | "accounting" | "insurance" | "personnel" | "depreciation" | "interest_expense" | "rent" | "bank_fees" | "professional_services" | "other" | "ust_payment";
  vendorInvoiceNumber?: string;
  notes?: string;
  isDeductible?: boolean;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | number;
  inputVatRate?: string | number;
  costCenterId?: number | null;
};
export type BookkeepingExpensesCreateExternalResponseData = BookkeepingExpense & { assetInfo: { hasLinkedAsset: boolean; linkedAssetId: number | null; linkedAssetIsActive: boolean | null; linkedAssetStatus: "none" | "active" | "disposed"; accountingTreatment: "immediate_expense" | "capitalized_asset"; reportingImpact: "expense" | "depreciation" }; paymentAllocations: ResolvedPaymentAllocation[] };
export type BookkeepingExpensesCreateExternalResponse = import("../types").ApiEnvelope<BookkeepingExpensesCreateExternalResponseData>;

export type BookkeepingAssetsListSammelpostenPoolsParams = undefined;
export type BookkeepingAssetsListSammelpostenPoolsQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type BookkeepingAssetsListSammelpostenPoolsBody = undefined;
export type BookkeepingAssetsListSammelpostenPoolsResponseData = Array<any>;
export type BookkeepingAssetsListSammelpostenPoolsResponse = import("../types").ApiEnvelope<BookkeepingAssetsListSammelpostenPoolsResponseData>;

export type BookkeepingAssetsGetSammelpostenPoolParams = {
  poolId: number;
};
export type BookkeepingAssetsGetSammelpostenPoolQuery = undefined;
export type BookkeepingAssetsGetSammelpostenPoolBody = undefined;
export type BookkeepingAssetsGetSammelpostenPoolResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsGetSammelpostenPoolResponse = import("../types").ApiEnvelope<BookkeepingAssetsGetSammelpostenPoolResponseData>;

export type BookkeepingAssetsGenerateDepreciationParams = undefined;
export type BookkeepingAssetsGenerateDepreciationQuery = undefined;
export type BookkeepingAssetsGenerateDepreciationBody = {
  fiscalYear: number;
};
export type BookkeepingAssetsGenerateDepreciationResponseData = Array<any>;
export type BookkeepingAssetsGenerateDepreciationResponse = import("../types").ApiEnvelope<BookkeepingAssetsGenerateDepreciationResponseData>;

export type BookkeepingAssetsGetDepreciationRecordsParams = undefined;
export type BookkeepingAssetsGetDepreciationRecordsQuery = {
  fiscalYear: number;
};
export type BookkeepingAssetsGetDepreciationRecordsBody = undefined;
export type BookkeepingAssetsGetDepreciationRecordsResponseData = Array<any>;
export type BookkeepingAssetsGetDepreciationRecordsResponse = import("../types").ApiEnvelope<BookkeepingAssetsGetDepreciationRecordsResponseData>;

export type BookkeepingAssetsFinalizeDepreciationParams = undefined;
export type BookkeepingAssetsFinalizeDepreciationQuery = undefined;
export type BookkeepingAssetsFinalizeDepreciationBody = {
  fiscalYear: number;
};
export type BookkeepingAssetsFinalizeDepreciationResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsFinalizeDepreciationResponse = import("../types").ApiEnvelope<BookkeepingAssetsFinalizeDepreciationResponseData>;

export type BookkeepingAssetsIabListParams = undefined;
export type BookkeepingAssetsIabListQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type BookkeepingAssetsIabListBody = undefined;
export type BookkeepingAssetsIabListResponseData = Array<any>;
export type BookkeepingAssetsIabListResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabListResponseData>;

export type BookkeepingAssetsIabCreateParams = undefined;
export type BookkeepingAssetsIabCreateQuery = undefined;
export type BookkeepingAssetsIabCreateBody = {
  description: string;
  plannedAssetType: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "land" | "building" | "building_equipment" | "intangible" | "digital_asset" | "other";
  plannedAcquisitionCost: string;
  deductionRate?: string;
  fiscalYearClaimed: number;
};
export type BookkeepingAssetsIabCreateResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsIabCreateResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabCreateResponseData>;

export type BookkeepingAssetsIabGetParams = {
  iabId: number;
};
export type BookkeepingAssetsIabGetQuery = undefined;
export type BookkeepingAssetsIabGetBody = undefined;
export type BookkeepingAssetsIabGetResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsIabGetResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabGetResponseData>;

export type BookkeepingAssetsIabDissolveParams = {
  iabId: number;
};
export type BookkeepingAssetsIabDissolveQuery = undefined;
export type BookkeepingAssetsIabDissolveBody = {
  linkedAssetId: number;
};
export type BookkeepingAssetsIabDissolveResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsIabDissolveResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabDissolveResponseData>;

export type BookkeepingAssetsIabReverseParams = {
  iabId: number;
};
export type BookkeepingAssetsIabReverseQuery = undefined;
export type BookkeepingAssetsIabReverseBody = {
  reversalFiscalYear: number;
};
export type BookkeepingAssetsIabReverseResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingAssetsIabReverseResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabReverseResponseData>;

export type BookkeepingAssetsIabDeleteParams = {
  iabId: number;
};
export type BookkeepingAssetsIabDeleteQuery = undefined;
export type BookkeepingAssetsIabDeleteBody = undefined;
export type BookkeepingAssetsIabDeleteResponseData = null;
export type BookkeepingAssetsIabDeleteResponse = import("../types").ApiEnvelope<BookkeepingAssetsIabDeleteResponseData>;

export type BookkeepingAssetsSearchParams = undefined;
export type BookkeepingAssetsSearchQuery = {
  page?: number;
  limit?: number;
  assetType?: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "land" | "building" | "building_equipment" | "intangible" | "digital_asset" | "other";
  depreciationMethod?: "linear" | "degressive" | "immediate_gwg" | "sammelposten" | "digital_afa" | "none";
  buildingType?: "wohngebaeude_post2022" | "wohngebaeude_1925_2022" | "wohngebaeude_pre1925" | "nichtwohngebaeude" | "denkmal_7i" | "mietwohnungsbau_7b";
  isActive?: "true" | "false";
  isDigitalAsset?: "true" | "false";
  search?: string;
  sortBy?: "purchaseDate" | "name" | "purchaseAmountNet" | "inventoryNumber" | "inServiceDate";
  sortOrder?: "asc" | "desc";
};
export type BookkeepingAssetsSearchBody = undefined;
export type BookkeepingAssetsSearchResponseData = PaginatedResult<BookkeepingAsset>;
export type BookkeepingAssetsSearchResponse = import("../types").ApiEnvelope<BookkeepingAssetsSearchResponseData>;

export type BookkeepingAssetsCreateParams = undefined;
export type BookkeepingAssetsCreateQuery = undefined;
export type BookkeepingAssetsCreateBody = {
  costCenterId?: number;
  name: string;
  description?: string;
  assetType: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "land" | "building" | "building_equipment" | "intangible" | "digital_asset" | "other";
  purchaseDate: string;
  inServiceDate?: string;
  purchaseAmountNet: string;
  currency?: string;
  inventoryNumber?: string;
  ancillaryAcquisitionCosts?: string;
  acquisitionPriceReductions?: string;
  usefulLifeMonths?: number;
  depreciationMethod: "linear" | "degressive" | "immediate_gwg" | "sammelposten" | "digital_afa" | "none";
  residualValue?: string;
  degressiveRate?: string;
  isDigitalAsset?: boolean;
  buildingType?: "wohngebaeude_post2022" | "wohngebaeude_1925_2022" | "wohngebaeude_pre1925" | "nichtwohngebaeude" | "denkmal_7i" | "mietwohnungsbau_7b";
  constructionYear?: number;
  buildingApplicationDate?: string;
  landValue?: string;
  buildingAreaSqm?: string;
  herstellungskostenPerSqm?: string;
  denkmalBescheinigung?: boolean;
  businessUsePercentage?: string;
  afaTableKey?: string;
  afaTableName?: string;
  inputVatAmount?: string;
  inputVatRate?: string;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  vendorName?: string;
  vendorInvoiceNumber?: string;
  expenseId?: number;
  documentId?: number;
};
export type BookkeepingAssetsCreateResponseData = BookkeepingAsset;
export type BookkeepingAssetsCreateResponse = import("../types").ApiEnvelope<BookkeepingAssetsCreateResponseData>;

export type BookkeepingAssetsGetByIdParams = {
  assetId: number;
};
export type BookkeepingAssetsGetByIdQuery = undefined;
export type BookkeepingAssetsGetByIdBody = undefined;
export type BookkeepingAssetsGetByIdResponseData = {
  asset: any;
  depreciationSchedule: any;
  linkedDisposalRevenue: {
  id: number;
  amount: string;
  revenueDate: any;
  isConfirmed: boolean;
} | null;
};
export type BookkeepingAssetsGetByIdResponse = import("../types").ApiEnvelope<BookkeepingAssetsGetByIdResponseData>;

export type BookkeepingAssetsUpdateParams = {
  assetId: number;
};
export type BookkeepingAssetsUpdateQuery = undefined;
export type BookkeepingAssetsUpdateBody = {
  costCenterId?: number;
  name?: string;
  description?: string;
  assetType?: "equipment" | "vehicle" | "software" | "furniture" | "leasehold_improvement" | "land" | "building" | "building_equipment" | "intangible" | "digital_asset" | "other";
  purchaseDate?: string;
  inServiceDate?: string;
  purchaseAmountNet?: string;
  currency?: string;
  inventoryNumber?: string;
  usefulLifeMonths?: number;
  depreciationMethod?: "linear" | "degressive" | "immediate_gwg" | "sammelposten" | "digital_afa" | "none";
  residualValue?: string;
  degressiveRate?: string;
  isDigitalAsset?: boolean;
  buildingType?: "wohngebaeude_post2022" | "wohngebaeude_1925_2022" | "wohngebaeude_pre1925" | "nichtwohngebaeude" | "denkmal_7i" | "mietwohnungsbau_7b";
  constructionYear?: number;
  buildingApplicationDate?: string;
  landValue?: string;
  buildingAreaSqm?: string;
  herstellungskostenPerSqm?: string;
  denkmalBescheinigung?: boolean;
  businessUsePercentage?: string;
  afaTableKey?: string;
  afaTableName?: string;
  inputVatAmount?: string;
  inputVatRate?: string;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  vendorName?: string;
  vendorInvoiceNumber?: string;
  expenseId?: number;
  documentId?: number;
  accountNumber?: string;
  bilanzPosition?: string;
};
export type BookkeepingAssetsUpdateResponseData = BookkeepingAsset;
export type BookkeepingAssetsUpdateResponse = import("../types").ApiEnvelope<BookkeepingAssetsUpdateResponseData>;

export type BookkeepingAssetsDisposeParams = {
  assetId: number;
};
export type BookkeepingAssetsDisposeQuery = undefined;
export type BookkeepingAssetsDisposeBody = {
  disposedAt: string;
  disposalType: "sale" | "scrapping" | "theft" | "private_withdrawal" | "insurance_claim" | "donation" | "destruction";
  disposalAmount?: string;
  disposalReason: string;
};
export type BookkeepingAssetsDisposeResponseData = BookkeepingAsset;
export type BookkeepingAssetsDisposeResponse = import("../types").ApiEnvelope<BookkeepingAssetsDisposeResponseData>;

export type BookkeepingAssetsDeleteParams = {
  assetId: number;
};
export type BookkeepingAssetsDeleteQuery = undefined;
export type BookkeepingAssetsDeleteBody = undefined;
export type BookkeepingAssetsDeleteResponseData = null;
export type BookkeepingAssetsDeleteResponse = import("../types").ApiEnvelope<BookkeepingAssetsDeleteResponseData>;

export type BookkeepingAssetsApplySonderafaParams = {
  assetId: number;
};
export type BookkeepingAssetsApplySonderafaQuery = undefined;
export type BookkeepingAssetsApplySonderafaBody = {
  amount: string;
};
export type BookkeepingAssetsApplySonderafaResponseData = BookkeepingAsset;
export type BookkeepingAssetsApplySonderafaResponse = import("../types").ApiEnvelope<BookkeepingAssetsApplySonderafaResponseData>;

export type BookkeepingAssetsSwitchToLinearParams = {
  assetId: number;
};
export type BookkeepingAssetsSwitchToLinearQuery = undefined;
export type BookkeepingAssetsSwitchToLinearBody = {
  switchDate: string;
};
export type BookkeepingAssetsSwitchToLinearResponseData = BookkeepingAsset;
export type BookkeepingAssetsSwitchToLinearResponse = import("../types").ApiEnvelope<BookkeepingAssetsSwitchToLinearResponseData>;

export type BookkeepingAssetsAddCostComponentParams = {
  assetId: number;
};
export type BookkeepingAssetsAddCostComponentQuery = undefined;
export type BookkeepingAssetsAddCostComponentBody = {
  componentType: "delivery" | "installation" | "customs" | "notary" | "grunderwerbsteuer" | "subsequent" | "reduction" | "other";
  description: string;
  amount: string;
  date: string;
  documentId?: number;
};
export type BookkeepingAssetsAddCostComponentResponseData = AssetCostComponent;
export type BookkeepingAssetsAddCostComponentResponse = import("../types").ApiEnvelope<BookkeepingAssetsAddCostComponentResponseData>;

export type BookkeepingAssetsListCostComponentsParams = {
  assetId: number;
};
export type BookkeepingAssetsListCostComponentsQuery = undefined;
export type BookkeepingAssetsListCostComponentsBody = undefined;
export type BookkeepingAssetsListCostComponentsResponseData = Array<any>;
export type BookkeepingAssetsListCostComponentsResponse = import("../types").ApiEnvelope<BookkeepingAssetsListCostComponentsResponseData>;

export type BookkeepingAssetsDeleteCostComponentParams = {
  assetId: number;
  componentId: number;
};
export type BookkeepingAssetsDeleteCostComponentQuery = undefined;
export type BookkeepingAssetsDeleteCostComponentBody = undefined;
export type BookkeepingAssetsDeleteCostComponentResponseData = null;
export type BookkeepingAssetsDeleteCostComponentResponse = import("../types").ApiEnvelope<BookkeepingAssetsDeleteCostComponentResponseData>;

export type BookkeepingReportsEuerParams = undefined;
export type BookkeepingReportsEuerQuery = {
  year?: number;
  format?: "json" | "csv";
};
export type BookkeepingReportsEuerBody = undefined;
export type BookkeepingReportsEuerResponseData = {
  year: number;
  period: {
  start: string;
  end: string;
};
  revenues: {
  customerInvoices: number;
  interest: number;
  refunds: number;
  assetDisposal: number;
  posSales: number;
  other: number;
  total: number;
};
  expenses: {
  infrastructure: number;
  office: number;
  software: number;
  hardware: number;
  travel: number;
  marketing: number;
  legal: number;
  accounting: number;
  insurance: number;
  personnel: number;
  depreciation: number;
  interestExpense: number;
  rent: number;
  bankFees: number;
  professionalServices: number;
  ustPayment: number;
  other: number;
  total: number;
};
  kapitalkonto: {
  entnahmenGesamt: number;
  entnahmenGeld: number;
  einlagenGesamt: number;
  einlagenGeld: number;
};
  profit: number;
  taxableAmount: number;
  currency: string;
  generatedAt: string;
  bookkeepingBasis: "eur" | "accrual";
  summary: {
  totalRevenues: number;
  totalExpenses: number;
  profitMargin: number;
};
};
export type BookkeepingReportsEuerResponse = import("../types").ApiEnvelope<BookkeepingReportsEuerResponseData>;

export type BookkeepingReportsSummaryParams = undefined;
export type BookkeepingReportsSummaryQuery = {
  year?: number;
  month?: number;
};
export type BookkeepingReportsSummaryBody = undefined;
export type BookkeepingReportsSummaryResponseData = {
  period: {
  year: number;
  month: number | null;
  start: string;
  end: string;
};
  summary: {
  totalRevenues: number;
  totalExpenses: number;
  profit: number;
  profitMargin: number;
};
  revenuesByCategory: Array<{
  category: string;
  total: number;
  count: number;
}>;
  expensesByCategory: Array<{
  category: string;
  total: number;
  count: number;
}>;
};
export type BookkeepingReportsSummaryResponse = import("../types").ApiEnvelope<BookkeepingReportsSummaryResponseData>;

export type BookkeepingReportsMonthlyTrendParams = undefined;
export type BookkeepingReportsMonthlyTrendQuery = {
  year?: number;
};
export type BookkeepingReportsMonthlyTrendBody = undefined;
export type BookkeepingReportsMonthlyTrendResponseData = {
  year: number;
  months: Array<{
  month: number;
  monthName: string;
  revenues: number;
  expenses: number;
  profit: number;
}>;
};
export type BookkeepingReportsMonthlyTrendResponse = import("../types").ApiEnvelope<BookkeepingReportsMonthlyTrendResponseData>;

export type BookkeepingReportsAssetRegisterParams = undefined;
export type BookkeepingReportsAssetRegisterQuery = {
  year?: number;
};
export type BookkeepingReportsAssetRegisterBody = undefined;
export type BookkeepingReportsAssetRegisterResponseData = {
  year: number;
  period: {
  start: string;
  end: string;
};
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
  items: Array<{
  assetId: number;
  name: string;
  assetType: string;
  isActive: boolean;
  purchaseDate: string;
  purchaseAmountNet: number;
  depreciationMethod: string;
  usefulLifeMonths: number | null;
  residualValue: number;
  depreciationCurrentYear: number;
  accumulatedDepreciation: number;
  bookValueStartOfYear: number;
  bookValueEndOfYear: number;
  bookValueAtDisposal: number | null;
  disposedAt: string | null;
  disposalAmount: number | null;
  linkedDisposalRevenueId: number | null;
  sourceExpenseId: number | null;
  sourceExpenseConfirmed: boolean | null;
}>;
  generatedAt: string;
  currency: string;
};
export type BookkeepingReportsAssetRegisterResponse = import("../types").ApiEnvelope<BookkeepingReportsAssetRegisterResponseData>;

export type BookkeepingReportsCategoryBreakdownParams = undefined;
export type BookkeepingReportsCategoryBreakdownQuery = {
  year?: number;
  type?: "expense" | "revenue";
};
export type BookkeepingReportsCategoryBreakdownBody = undefined;
export type BookkeepingReportsCategoryBreakdownResponseData = {
  year: number;
  type: string;
  breakdown: Array<{
  category: string;
  total: number;
  count: number;
  percentage: number;
}>;
  total: number;
};
export type BookkeepingReportsCategoryBreakdownResponse = import("../types").ApiEnvelope<BookkeepingReportsCategoryBreakdownResponseData>;

export type BookkeepingReportsVendorBreakdownParams = undefined;
export type BookkeepingReportsVendorBreakdownQuery = {
  year?: number;
};
export type BookkeepingReportsVendorBreakdownBody = undefined;
export type BookkeepingReportsVendorBreakdownResponseData = {
  year: number;
  breakdown: Array<{
  vendor: string;
  total: number;
  count: number;
  percentage: number;
}>;
  total: number;
};
export type BookkeepingReportsVendorBreakdownResponse = import("../types").ApiEnvelope<BookkeepingReportsVendorBreakdownResponseData>;

export type BookkeepingReportsVatStatusParams = undefined;
export type BookkeepingReportsVatStatusQuery = undefined;
export type BookkeepingReportsVatStatusBody = undefined;
export type BookkeepingReportsVatStatusResponseData = {
  currentRegime: {
  regime: string | null;
  validFrom?: any | null;
  validTo?: any | null;
  reason?: string | null;
};
  thresholds: {
  kleinunternehmerGraceAmount: number;
  kleinunternehmerMaxAmount: number;
};
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
  warning: string | null;
  warningLevel: "none" | "info" | "warning" | "critical";
  userDecisionRequired: boolean;
  regimeRecommendation: {
  currentYear: any;
  nextYear: any;
};
  taxDecisions: Record<string, any>;
  accountingMethod: string;
  ustva: {
  filingPreference: string;
  recommendation: any;
  thresholds: {
  monthlyVatDueThreshold: number;
  annualVatDueExemptThreshold: number;
  newCompanyMonthlyYears: number;
};
};
};
export type BookkeepingReportsVatStatusResponse = import("../types").ApiEnvelope<BookkeepingReportsVatStatusResponseData>;

export type BookkeepingReportsVatPeriodsParams = undefined;
export type BookkeepingReportsVatPeriodsQuery = undefined;
export type BookkeepingReportsVatPeriodsBody = undefined;
export type BookkeepingReportsVatPeriodsResponseData = {
  count: number;
  periods: Array<{
  id: number;
  regime: string;
  validFrom?: any | null;
  validTo?: any | null;
  reason?: string | null;
  triggerAmount: number | null;
  triggerAt?: any | null;
  triggerDocId?: number | null;
  triggerDocType?: string | null;
  createdAt?: any | null;
}>;
};
export type BookkeepingReportsVatPeriodsResponse = import("../types").ApiEnvelope<BookkeepingReportsVatPeriodsResponseData>;

export type BookkeepingReportsVatUstvaParams = undefined;
export type BookkeepingReportsVatUstvaQuery = {
  year?: number;
  period?: "monthly" | "quarterly" | "annual";
  periodNumber?: number;
  format?: "json" | "csv";
};
export type BookkeepingReportsVatUstvaBody = undefined;
export type BookkeepingReportsVatUstvaResponseData = {
  period: {
  year: number;
  quarter?: number;
  month?: number;
  startDate: string;
  endDate: string;
};
  generatedAt: string;
  outputVat: {
  standard19: any;
  reduced7: any;
  reverseCharge: any;
  section13bReceived: any;
  section13bTax: any;
  euB2b: any;
  export: any;
  exempt: any;
  total: number;
};
  inputVat: {
  standard19: any;
  reduced7: any;
  section13b: any;
  other: any;
  total: number;
};
  taxLiability: {
  outputVat: number;
  inputVat: number;
  netLiability: number;
};
  currency: string;
  regime?: string;
  accountingMethod?: string;
  hasKleinunternehmerSegments?: boolean;
  kleinunternehmerNote?: string;
};
export type BookkeepingReportsVatUstvaResponse = import("../types").ApiEnvelope<BookkeepingReportsVatUstvaResponseData>;

export type PaymentsImportCsvParams = undefined;
export type PaymentsImportCsvQuery = undefined;
export type PaymentsImportCsvBody = {
  paymentAccountId: number;
  delimiter?: string;
  profile?: string;
  dryRun?: boolean;
};
export type PaymentsImportCsvResponseData = {
  inserted: number;
  skipped: number;
  autoSyncSkipped?: number;
  preview: {
  headers: Array<string>;
  rowCount: number;
};
};
export type PaymentsImportCsvResponse = import("../types").ApiEnvelope<PaymentsImportCsvResponseData>;

export type PaymentsImportCsvPreviewParams = undefined;
export type PaymentsImportCsvPreviewQuery = undefined;
export type PaymentsImportCsvPreviewBody = {
  paymentAccountId: number;
  delimiter?: string;
  profile?: string;
  dryRun?: boolean;
  previewRows?: number;
  maxRows?: number;
};
export type PaymentsImportCsvPreviewResponseData = {
  profileKey: string | null;
  delimiter: string;
  preview: {
  headers: Array<string>;
  rowCount: number;
};
  mappedRows: Array<any>;
  errors: Array<any>;
  stats: {
  validRows: number;
  invalidRows: number;
};
};
export type PaymentsImportCsvPreviewResponse = import("../types").ApiEnvelope<PaymentsImportCsvPreviewResponseData>;

export type PaymentsListCsvProfilesParams = undefined;
export type PaymentsListCsvProfilesQuery = undefined;
export type PaymentsListCsvProfilesBody = undefined;
export type PaymentsListCsvProfilesResponseData = Array<{
  key: string;
  name: string;
  description: string | null;
  delimiterHint: string | null;
}>;
export type PaymentsListCsvProfilesResponse = import("../types").ApiEnvelope<PaymentsListCsvProfilesResponseData>;

export type PaymentsDownloadCsvTemplateParams = {
  profileKey: string;
};
export type PaymentsDownloadCsvTemplateQuery = undefined;
export type PaymentsDownloadCsvTemplateBody = undefined;
export type PaymentsDownloadCsvTemplateResponseData = Blob;
export type PaymentsDownloadCsvTemplateResponse = Blob;

export type PaymentsListImportProfilesParams = undefined;
export type PaymentsListImportProfilesQuery = {
  includeArchived?: boolean;
};
export type PaymentsListImportProfilesBody = undefined;
export type PaymentsListImportProfilesResponseData = PaymentImportProfile[];
export type PaymentsListImportProfilesResponse = import("../types").ApiEnvelope<PaymentsListImportProfilesResponseData>;

export type PaymentsCreateImportProfileParams = undefined;
export type PaymentsCreateImportProfileQuery = undefined;
export type PaymentsCreateImportProfileBody = {
  key: string;
  name: string;
  description?: string;
  delimiterHint?: "," | ";" | "\t";
  headerAliases: Record<string, Array<string>>;
};
export type PaymentsCreateImportProfileResponseData = PaymentImportProfile;
export type PaymentsCreateImportProfileResponse = import("../types").ApiEnvelope<PaymentsCreateImportProfileResponseData>;

export type PaymentsUpdateImportProfileParams = {
  id: number;
};
export type PaymentsUpdateImportProfileQuery = undefined;
export type PaymentsUpdateImportProfileBody = {
  key?: string;
  name?: string;
  description?: string;
  delimiterHint?: "," | ";" | "\t";
  headerAliases?: Record<string, Array<string>>;
  isArchived?: boolean;
};
export type PaymentsUpdateImportProfileResponseData = PaymentImportProfile;
export type PaymentsUpdateImportProfileResponse = import("../types").ApiEnvelope<PaymentsUpdateImportProfileResponseData>;

export type PaymentsSearchParams = undefined;
export type PaymentsSearchQuery = {
  paymentAccountId?: number;
  direction?: "in" | "out";
  q?: string;
  startDate?: string;
  endDate?: string;
  allocationStatus?: "allocated" | "partial" | "unallocated";
  page?: number;
  pageSize?: number;
};
export type PaymentsSearchBody = undefined;
export type PaymentsSearchResponseData = PaginatedResult<Payment & { allocatedAmount: string; allocationCount: number }>;
export type PaymentsSearchResponse = import("../types").ApiEnvelope<PaymentsSearchResponseData>;

export type PaymentsCreateManualParams = undefined;
export type PaymentsCreateManualQuery = undefined;
export type PaymentsCreateManualBody = {
  paymentAccountId: number;
  bookedAt: string;
  valueAt?: string;
  amount: string;
  currency?: string;
  counterpartyName?: string;
  counterpartyIban?: string;
  counterpartyBic?: string;
  reference?: string;
  endToEndId?: string;
  bankTransactionId?: string;
  raw?: any;
  allocations?: Array<{
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  amount: string;
}>;
};
export type PaymentsCreateManualResponseData = Payment;
export type PaymentsCreateManualResponse = import("../types").ApiEnvelope<PaymentsCreateManualResponseData>;

export type PaymentsTransferLinkParams = undefined;
export type PaymentsTransferLinkQuery = undefined;
export type PaymentsTransferLinkBody = {
  paymentIdA: number;
  paymentIdB: number;
  fxRate?: string;
};
export type PaymentsTransferLinkResponseData = { outPayment: Payment; inPayment: Payment; fxRate: string | null };
export type PaymentsTransferLinkResponse = import("../types").ApiEnvelope<PaymentsTransferLinkResponseData>;

export type PaymentsCashbookParams = undefined;
export type PaymentsCashbookQuery = {
  paymentAccountId: number;
  startDate?: string;
  endDate?: string;
};
export type PaymentsCashbookBody = undefined;
export type PaymentsCashbookResponseData = { account: PaymentAccount & { paypalApiConfigured: boolean; sumupConnected: boolean; sumupMerchantCode: string | null; sumupMerchantLabel: string | null; sumupLastSyncAt: Date | null; sumupSyncEnabled: boolean; sumupReauthRequired: boolean; feeVatTreatment: string | null; feeVatRate: string | null; allowCsvImport: boolean; openingBalanceLocked: boolean; canEditOpeningBalance: boolean; openingBalanceLockReason: string | null; canCreateBalanceSnapshot: boolean; balanceCorrectionMode: 'opening_balance' | 'snapshot_only' }; openingBalance: string; closingBalance: string; movements: PaginatedResult<Payment> };
export type PaymentsCashbookResponse = import("../types").ApiEnvelope<PaymentsCashbookResponseData>;

export type PaymentsMatchSuggestionsParams = {
  paymentId: number;
};
export type PaymentsMatchSuggestionsQuery = {
  limit?: number;
  includePaid?: boolean;
  includeDraft?: boolean;
};
export type PaymentsMatchSuggestionsBody = undefined;
export type PaymentsMatchSuggestionsResponseData = {
  payment: any;
  remainingAmount: string;
  suggestions: Array<any>;
  allocations: Array<any>;
  providerPayoutSuggestion: {
  payoutId: string;
  providerAccountId: number;
  providerAccountName: string;
  existingPayoutPaymentId: number | null;
  transactionCount: number;
  totalGross: string;
  totalNet: string;
  totalFees: string;
  bankDepositAmount: string;
  difference: string;
  confidence: "high" | "medium" | "low";
} | null;
};
export type PaymentsMatchSuggestionsResponse = import("../types").ApiEnvelope<PaymentsMatchSuggestionsResponseData>;

export type PaymentsBookingPaymentSuggestionsParams = {
  targetType: "expense" | "revenue";
  targetId: number;
};
export type PaymentsBookingPaymentSuggestionsQuery = {
  limit?: number;
  paymentAccountId?: number;
};
export type PaymentsBookingPaymentSuggestionsBody = undefined;
export type PaymentsBookingPaymentSuggestionsResponseData = {
  targetType: "expense" | "revenue";
  targetId: number;
  targetAmount: string;
  targetCurrency: string;
  openAmount: string;
  suggestions: Array<any>;
};
export type PaymentsBookingPaymentSuggestionsResponse = import("../types").ApiEnvelope<PaymentsBookingPaymentSuggestionsResponseData>;

export type PaymentsAllocateParams = {
  paymentId: number;
};
export type PaymentsAllocateQuery = undefined;
export type PaymentsAllocateBody = {
  allocations: Array<{
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  amount: string;
  kind?: "payment" | "refund";
}>;
};
export type PaymentsAllocateResponseData = PaymentAllocation[];
export type PaymentsAllocateResponse = import("../types").ApiEnvelope<PaymentsAllocateResponseData>;

export type PaymentsUnallocateParams = {
  paymentId: number;
  allocationId: number;
};
export type PaymentsUnallocateQuery = undefined;
export type PaymentsUnallocateBody = undefined;
export type PaymentsUnallocateResponseData = {
  message: string;
};
export type PaymentsUnallocateResponse = import("../types").ApiEnvelope<PaymentsUnallocateResponseData>;

export type PaymentsUpdateParams = {
  paymentId: number;
};
export type PaymentsUpdateQuery = undefined;
export type PaymentsUpdateBody = {
  bookedAt?: string;
  valueAt?: string | null;
  amount?: string;
  currency?: string;
  counterpartyName?: string;
  counterpartyIban?: string;
  counterpartyBic?: string;
  reference?: string;
  endToEndId?: string;
  bankTransactionId?: string;
  raw?: any;
};
export type PaymentsUpdateResponseData = Payment;
export type PaymentsUpdateResponse = import("../types").ApiEnvelope<PaymentsUpdateResponseData>;

export type PaymentsReversalPreviewParams = {
  paymentId: number;
};
export type PaymentsReversalPreviewQuery = undefined;
export type PaymentsReversalPreviewBody = undefined;
export type PaymentsReversalPreviewResponseData = {
  payment: any;
  allocations: Array<any>;
  warnings: Array<string>;
  canReverse: boolean;
  blockers: Array<string>;
};
export type PaymentsReversalPreviewResponse = import("../types").ApiEnvelope<PaymentsReversalPreviewResponseData>;

export type PaymentsReverseParams = {
  paymentId: number;
};
export type PaymentsReverseQuery = undefined;
export type PaymentsReverseBody = {
  reason: string;
};
export type PaymentsReverseResponseData = {
  reversalPayment: any;
  reversedAllocations: Array<any>;
  updatedInvoices: Array<any>;
};
export type PaymentsReverseResponse = import("../types").ApiEnvelope<PaymentsReverseResponseData>;

export type PaymentsTransferUnlinkParams = {
  paymentId: number;
};
export type PaymentsTransferUnlinkQuery = undefined;
export type PaymentsTransferUnlinkBody = {
  reason: string;
};
export type PaymentsTransferUnlinkResponseData = { paymentA: Payment; paymentB: Payment };
export type PaymentsTransferUnlinkResponse = import("../types").ApiEnvelope<PaymentsTransferUnlinkResponseData>;

export type PaymentsTransferLinkableParams = {
  paymentId: number;
};
export type PaymentsTransferLinkableQuery = {
  paymentAccountId: number;
  direction?: "in" | "out";
  startDate?: string;
  endDate?: string;
  amountMin?: string;
  amountMax?: string;
  q?: string;
  page?: number;
  pageSize?: number;
};
export type PaymentsTransferLinkableBody = undefined;
export type PaymentsTransferLinkableResponseData = PaginatedResult<Payment>;
export type PaymentsTransferLinkableResponse = import("../types").ApiEnvelope<PaymentsTransferLinkableResponseData>;

export type PaymentsAllocationReversalPreviewParams = {
  paymentId: number;
  allocationId: number;
};
export type PaymentsAllocationReversalPreviewQuery = undefined;
export type PaymentsAllocationReversalPreviewBody = undefined;
export type PaymentsAllocationReversalPreviewResponseData = {
  allocation: any;
  invoice: any | null;
  newInvoiceStatus: string | null;
  remainingAllocationAfterReversal: string;
  impact: string;
  canReverse: boolean;
  blockers: Array<string>;
};
export type PaymentsAllocationReversalPreviewResponse = import("../types").ApiEnvelope<PaymentsAllocationReversalPreviewResponseData>;

export type PaymentsAllocationReverseParams = {
  paymentId: number;
  allocationId: number;
};
export type PaymentsAllocationReverseQuery = undefined;
export type PaymentsAllocationReverseBody = undefined;
export type PaymentsAllocationReverseResponseData = {
  reversalAllocation: any;
  updatedInvoice: any | null;
};
export type PaymentsAllocationReverseResponse = import("../types").ApiEnvelope<PaymentsAllocationReverseResponseData>;

export type PaymentsDeleteParams = {
  paymentId: number;
};
export type PaymentsDeleteQuery = undefined;
export type PaymentsDeleteBody = undefined;
export type PaymentsDeleteResponseData = {
  message: string;
};
export type PaymentsDeleteResponse = import("../types").ApiEnvelope<PaymentsDeleteResponseData>;

export type PaymentsBookParams = {
  paymentId: number;
};
export type PaymentsBookQuery = undefined;
export type PaymentsBookBody = {
  category: string;
  description: string;
  notes?: string | null;
  amount?: string;
  netAmount?: string;
  taxAmount?: string | null;
  taxRate?: string | number | null;
  inputVatEligibility?: "NONE" | "FULL" | "PARTIAL";
  inputVatAmount?: string | null;
  inputVatRate?: string | null;
  isDeductible?: boolean;
  isConfirmed?: boolean;
  vendor?: string | null;
  vendorInvoiceNumber?: string | null;
};
export type PaymentsBookResponseData = {
  targetType: "expense" | "revenue";
  targetId: number;
  allocationId: number;
  paymentId: number;
};
export type PaymentsBookResponse = import("../types").ApiEnvelope<PaymentsBookResponseData>;

export type PaymentsRecordFeeParams = {
  paymentId: number;
};
export type PaymentsRecordFeeQuery = undefined;
export type PaymentsRecordFeeBody = {
  amount: string;
  description?: string;
};
export type PaymentsRecordFeeResponseData = PaymentAllocation;
export type PaymentsRecordFeeResponse = import("../types").ApiEnvelope<PaymentsRecordFeeResponseData>;

export type PaymentsWriteoffParams = {
  paymentId: number;
};
export type PaymentsWriteoffQuery = undefined;
export type PaymentsWriteoffBody = {
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  amount: string;
  reason: string;
};
export type PaymentsWriteoffResponseData = PaymentAllocation;
export type PaymentsWriteoffResponse = import("../types").ApiEnvelope<PaymentsWriteoffResponseData>;

export type PaymentsApplyDiscountParams = {
  paymentId: number;
};
export type PaymentsApplyDiscountQuery = undefined;
export type PaymentsApplyDiscountBody = {
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  amount: string;
  reason?: string;
};
export type PaymentsApplyDiscountResponseData = PaymentAllocation;
export type PaymentsApplyDiscountResponse = import("../types").ApiEnvelope<PaymentsApplyDiscountResponseData>;

export type PaymentsGetAccountByIdParams = {
  accountId: number;
};
export type PaymentsGetAccountByIdQuery = undefined;
export type PaymentsGetAccountByIdBody = undefined;
export type PaymentsGetAccountByIdResponseData = PaymentAccount & { paypalApiConfigured: boolean; sumupConnected: boolean; sumupMerchantCode: string | null; sumupMerchantLabel: string | null; sumupLastSyncAt: Date | null; sumupSyncEnabled: boolean; sumupReauthRequired: boolean; feeVatTreatment: string | null; feeVatRate: string | null; allowCsvImport: boolean; openingBalanceLocked: boolean; canEditOpeningBalance: boolean; openingBalanceLockReason: string | null; canCreateBalanceSnapshot: boolean; balanceCorrectionMode: 'opening_balance' | 'snapshot_only' };
export type PaymentsGetAccountByIdResponse = import("../types").ApiEnvelope<PaymentsGetAccountByIdResponseData>;

export type PaymentsListAccountsParams = undefined;
export type PaymentsListAccountsQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
};
export type PaymentsListAccountsBody = undefined;
export type PaymentsListAccountsResponseData = PaginatedResult<PaymentAccount & { paypalApiConfigured: boolean; sumupConnected: boolean; sumupMerchantCode: string | null; sumupMerchantLabel: string | null; sumupLastSyncAt: Date | null; sumupSyncEnabled: boolean; sumupReauthRequired: boolean; feeVatTreatment: string | null; feeVatRate: string | null; allowCsvImport: boolean; openingBalanceLocked: boolean; canEditOpeningBalance: boolean; openingBalanceLockReason: string | null; canCreateBalanceSnapshot: boolean; balanceCorrectionMode: 'opening_balance' | 'snapshot_only' }>;
export type PaymentsListAccountsResponse = import("../types").ApiEnvelope<PaymentsListAccountsResponseData>;

export type PaymentsCreateAccountParams = undefined;
export type PaymentsCreateAccountQuery = undefined;
export type PaymentsCreateAccountBody = {
  type: "bank" | "cash" | "paypal" | "sumup";
  name: string;
  currency?: string;
  costCenterId?: number | null;
  iban?: string | null;
  bic?: string | null;
  bankName?: string | null;
  accountOwner?: string | null;
  paypalEmail?: string | null;
  paypalHandle?: string | null;
  paypalClientId?: string | null;
  paypalClientSecret?: string | null;
  paypalEnvironment?: "live" | "sandbox";
  paypalSyncEnabled?: boolean;
  sumupSyncEnabled?: boolean;
  isDefault?: boolean;
  openingBalance?: string | null;
  openingBalanceDate?: string | any | {
  year: number;
  month: number;
  day: number;
} | null;
};
export type PaymentsCreateAccountResponseData = PaymentAccount & { paypalApiConfigured: boolean; sumupConnected: boolean; sumupMerchantCode: string | null; sumupMerchantLabel: string | null; sumupLastSyncAt: Date | null; sumupSyncEnabled: boolean; sumupReauthRequired: boolean; feeVatTreatment: string | null; feeVatRate: string | null; allowCsvImport: boolean; openingBalanceLocked: boolean; canEditOpeningBalance: boolean; openingBalanceLockReason: string | null; canCreateBalanceSnapshot: boolean; balanceCorrectionMode: 'opening_balance' | 'snapshot_only' };
export type PaymentsCreateAccountResponse = import("../types").ApiEnvelope<PaymentsCreateAccountResponseData>;

export type PaymentsUpdateAccountParams = {
  accountId: number;
};
export type PaymentsUpdateAccountQuery = undefined;
export type PaymentsUpdateAccountBody = {
  type?: "bank" | "cash" | "paypal" | "sumup";
  name?: string;
  currency?: string;
  costCenterId?: number | null;
  iban?: string | null;
  bic?: string | null;
  bankName?: string | null;
  accountOwner?: string | null;
  paypalEmail?: string | null;
  paypalHandle?: string | null;
  paypalClientId?: string | null;
  paypalClientSecret?: string | null;
  paypalEnvironment?: "live" | "sandbox";
  paypalSyncEnabled?: boolean;
  sumupSyncEnabled?: boolean;
  isDefault?: boolean;
  openingBalance?: string | null;
  openingBalanceDate?: string | any | {
  year: number;
  month: number;
  day: number;
} | null;
  isArchived?: boolean;
  allowCsvImport?: boolean;
};
export type PaymentsUpdateAccountResponseData = PaymentAccount & { paypalApiConfigured: boolean; sumupConnected: boolean; sumupMerchantCode: string | null; sumupMerchantLabel: string | null; sumupLastSyncAt: Date | null; sumupSyncEnabled: boolean; sumupReauthRequired: boolean; feeVatTreatment: string | null; feeVatRate: string | null; allowCsvImport: boolean; openingBalanceLocked: boolean; canEditOpeningBalance: boolean; openingBalanceLockReason: string | null; canCreateBalanceSnapshot: boolean; balanceCorrectionMode: 'opening_balance' | 'snapshot_only' };
export type PaymentsUpdateAccountResponse = import("../types").ApiEnvelope<PaymentsUpdateAccountResponseData>;

export type PaymentsArchiveAccountParams = {
  accountId: number;
};
export type PaymentsArchiveAccountQuery = undefined;
export type PaymentsArchiveAccountBody = undefined;
export type PaymentsArchiveAccountResponseData = {
  archived: boolean;
  message: string;
};
export type PaymentsArchiveAccountResponse = import("../types").ApiEnvelope<PaymentsArchiveAccountResponseData>;

export type PaymentsDeleteAccountParams = {
  accountId: number;
};
export type PaymentsDeleteAccountQuery = undefined;
export type PaymentsDeleteAccountBody = undefined;
export type PaymentsDeleteAccountResponseData = {
  deleted: boolean;
  message: string;
};
export type PaymentsDeleteAccountResponse = import("../types").ApiEnvelope<PaymentsDeleteAccountResponseData>;

export type PaymentsPaypalSyncParams = {
  accountId: number;
};
export type PaymentsPaypalSyncQuery = {
  fromDate?: string;
  toDate?: string;
};
export type PaymentsPaypalSyncBody = undefined;
export type PaymentsPaypalSyncResponseData = { inserted: number; skipped: number; syncedFrom: string; syncedUntil: string; accountId: number };
export type PaymentsPaypalSyncResponse = import("../types").ApiEnvelope<PaymentsPaypalSyncResponseData>;

export type PaymentsSumupOauthStartParams = {
  accountId: number;
};
export type PaymentsSumupOauthStartQuery = undefined;
export type PaymentsSumupOauthStartBody = {
  autoCreateBankAccount?: boolean;
};
export type PaymentsSumupOauthStartResponseData = { authorizeUrl: string; state: string; expiresAt: string | Date };
export type PaymentsSumupOauthStartResponse = import("../types").ApiEnvelope<PaymentsSumupOauthStartResponseData>;

export type PaymentsSumupSyncParams = {
  accountId: number;
};
export type PaymentsSumupSyncQuery = {
  fromDate?: string;
  toDate?: string;
};
export type PaymentsSumupSyncBody = undefined;
export type PaymentsSumupSyncResponseData = { inserted: number; skipped: number; payoutsInserted: number; payoutsSkipped: number; syncedFrom: string; syncedUntil: string; accountId: number };
export type PaymentsSumupSyncResponse = import("../types").ApiEnvelope<PaymentsSumupSyncResponseData>;

export type PaymentsSumupOauthDisconnectParams = {
  accountId: number;
};
export type PaymentsSumupOauthDisconnectQuery = undefined;
export type PaymentsSumupOauthDisconnectBody = undefined;
export type PaymentsSumupOauthDisconnectResponseData = { disconnected: boolean };
export type PaymentsSumupOauthDisconnectResponse = import("../types").ApiEnvelope<PaymentsSumupOauthDisconnectResponseData>;

export type PaymentsPaypalWebhookRegisterParams = {
  accountId: number;
};
export type PaymentsPaypalWebhookRegisterQuery = undefined;
export type PaymentsPaypalWebhookRegisterBody = {
  callbackUrl: string;
};
export type PaymentsPaypalWebhookRegisterResponseData = { webhookId: string; callbackUrl: string };
export type PaymentsPaypalWebhookRegisterResponse = import("../types").ApiEnvelope<PaymentsPaypalWebhookRegisterResponseData>;

export type PaymentsPaypalWebhookDeregisterParams = {
  accountId: number;
};
export type PaymentsPaypalWebhookDeregisterQuery = undefined;
export type PaymentsPaypalWebhookDeregisterBody = undefined;
export type PaymentsPaypalWebhookDeregisterResponseData = { removed: boolean };
export type PaymentsPaypalWebhookDeregisterResponse = import("../types").ApiEnvelope<PaymentsPaypalWebhookDeregisterResponseData>;

export type PaymentsListBalanceSnapshotsParams = undefined;
export type PaymentsListBalanceSnapshotsQuery = {
  paymentAccountId: number;
  includeVoided?: boolean;
  page?: number;
  pageSize?: number;
};
export type PaymentsListBalanceSnapshotsBody = undefined;
export type PaymentsListBalanceSnapshotsResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type PaymentsListBalanceSnapshotsResponse = import("../types").ApiEnvelope<PaymentsListBalanceSnapshotsResponseData>;

export type PaymentsCreateBalanceSnapshotParams = undefined;
export type PaymentsCreateBalanceSnapshotQuery = undefined;
export type PaymentsCreateBalanceSnapshotBody = {
  paymentAccountId: number;
  asOfAt: string;
  balanceType?: "bank_statement" | "manual_count" | "api_reported";
  balance: string;
  currency?: string;
  source?: "manual" | "csv_import" | "paypal_api" | "sumup_api";
  externalRef?: string | null;
  note?: string | null;
  raw?: any;
};
export type PaymentsCreateBalanceSnapshotResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type PaymentsCreateBalanceSnapshotResponse = import("../types").ApiEnvelope<PaymentsCreateBalanceSnapshotResponseData>;

export type PaymentsVoidBalanceSnapshotParams = {
  snapshotId: number;
};
export type PaymentsVoidBalanceSnapshotQuery = undefined;
export type PaymentsVoidBalanceSnapshotBody = {
  reason: string;
};
export type PaymentsVoidBalanceSnapshotResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type PaymentsVoidBalanceSnapshotResponse = import("../types").ApiEnvelope<PaymentsVoidBalanceSnapshotResponseData>;

export type PaymentsUpdateFeeVatTreatmentParams = {
  accountId: number;
};
export type PaymentsUpdateFeeVatTreatmentQuery = undefined;
export type PaymentsUpdateFeeVatTreatmentBody = {
  feeVatTreatment: "UNKNOWN" | "EXEMPT" | "INCLUSIVE_STANDARD" | "REVERSE_CHARGE_13B";
  feeVatRate?: string;
};
export type PaymentsUpdateFeeVatTreatmentResponseData = PaymentProviderConnection;
export type PaymentsUpdateFeeVatTreatmentResponse = import("../types").ApiEnvelope<PaymentsUpdateFeeVatTreatmentResponseData>;

export type PaymentsListFeeProposalsParams = undefined;
export type PaymentsListFeeProposalsQuery = {
  accountId?: number;
  status?: "PROPOSED" | "CONFIRMED" | "REJECTED";
  page?: number;
  pageSize?: number;
};
export type PaymentsListFeeProposalsBody = undefined;
export type PaymentsListFeeProposalsResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type PaymentsListFeeProposalsResponse = import("../types").ApiEnvelope<PaymentsListFeeProposalsResponseData>;

export type PaymentsConfirmFeeProposalsParams = undefined;
export type PaymentsConfirmFeeProposalsQuery = undefined;
export type PaymentsConfirmFeeProposalsBody = {
  expenseIds: Array<number>;
};
export type PaymentsConfirmFeeProposalsResponseData = {
  confirmed: number;
};
export type PaymentsConfirmFeeProposalsResponse = import("../types").ApiEnvelope<PaymentsConfirmFeeProposalsResponseData>;

export type PaymentsRejectFeeProposalsParams = undefined;
export type PaymentsRejectFeeProposalsQuery = undefined;
export type PaymentsRejectFeeProposalsBody = {
  expenseIds: Array<number>;
};
export type PaymentsRejectFeeProposalsResponseData = {
  rejected: number;
};
export type PaymentsRejectFeeProposalsResponse = import("../types").ApiEnvelope<PaymentsRejectFeeProposalsResponseData>;

export type PaymentsPaypalWebhookReceiveParams = undefined;
export type PaymentsPaypalWebhookReceiveQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type PaymentsPaypalWebhookReceiveBody = import("../types").ContractNotReady<"Body not typed yet. Add DTO + validate({ body }) or contract({ request: ... }) to the route.">;
export type PaymentsPaypalWebhookReceiveResponseData = { status: string };
export type PaymentsPaypalWebhookReceiveResponse = import("../types").ApiEnvelope<PaymentsPaypalWebhookReceiveResponseData>;

export type PaymentsSumupOauthCallbackParams = undefined;
export type PaymentsSumupOauthCallbackQuery = {
  state: string;
  code?: string;
  error?: string;
  error_description?: string;
};
export type PaymentsSumupOauthCallbackBody = undefined;
export type PaymentsSumupOauthCallbackResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type PaymentsSumupOauthCallbackResponse = import("../types").ApiEnvelope<PaymentsSumupOauthCallbackResponseData>;

export type BookkeepingPaymentsListAccountsExternalParams = undefined;
export type BookkeepingPaymentsListAccountsExternalQuery = {
  search?: string;
  includeArchived?: boolean;
};
export type BookkeepingPaymentsListAccountsExternalBody = undefined;
export type BookkeepingPaymentsListAccountsExternalResponseData = PaymentAccount[];
export type BookkeepingPaymentsListAccountsExternalResponse = import("../types").ApiEnvelope<BookkeepingPaymentsListAccountsExternalResponseData>;

export type BookkeepingPaymentsCreateManualExternalParams = undefined;
export type BookkeepingPaymentsCreateManualExternalQuery = undefined;
export type BookkeepingPaymentsCreateManualExternalBody = {
  paymentAccountId: number;
  bookedAt: string;
  valueAt?: string;
  amount: string;
  currency?: string;
  counterpartyName?: string;
  counterpartyIban?: string;
  counterpartyBic?: string;
  reference?: string;
  endToEndId?: string;
  bankTransactionId?: string;
  externalRef?: string;
  raw?: any;
};
export type BookkeepingPaymentsCreateManualExternalResponseData = Payment;
export type BookkeepingPaymentsCreateManualExternalResponse = import("../types").ApiEnvelope<BookkeepingPaymentsCreateManualExternalResponseData>;

export type BookkeepingPaymentsSettleInvoiceExternalParams = undefined;
export type BookkeepingPaymentsSettleInvoiceExternalQuery = undefined;
export type BookkeepingPaymentsSettleInvoiceExternalBody = {
  invoiceId: number;
  paymentAccountId: number;
  bookedAt: string;
  valueAt?: string;
  payoutAmount: string | number;
  currency?: string;
  counterpartyName?: string;
  counterpartyIban?: string;
  counterpartyBic?: string;
  reference?: string;
  endToEndId?: string;
  bankTransactionId?: string;
  externalRef?: string;
  closeGapStrategy?: "none" | "discount";
  closeGapReason?: string;
  markInvoicePaid?: boolean;
  raw?: any;
};
export type BookkeepingPaymentsSettleInvoiceExternalResponseData = { createdPayment: boolean; idempotent: boolean; payment: Payment; allocations: PaymentAllocation[]; invoice: Invoice; closed: boolean; shortfallAmount: string; gapClosed: boolean };
export type BookkeepingPaymentsSettleInvoiceExternalResponse = import("../types").ApiEnvelope<BookkeepingPaymentsSettleInvoiceExternalResponseData>;

export type BookkeepingAuditLogsParams = undefined;
export type BookkeepingAuditLogsQuery = {
  page?: number;
  pageSize?: number;
  action?: string;
  entityType?: string;
  entityId?: number;
  startDate?: string;
  endDate?: string;
};
export type BookkeepingAuditLogsBody = undefined;
export type BookkeepingAuditLogsResponseData = PaginatedResult<BookkeepingAuditLog>;
export type BookkeepingAuditLogsResponse = import("../types").ApiEnvelope<BookkeepingAuditLogsResponseData>;

export type BookkeepingLocksGetStateParams = undefined;
export type BookkeepingLocksGetStateQuery = undefined;
export type BookkeepingLocksGetStateBody = undefined;
export type BookkeepingLocksGetStateResponseData = BookkeepingLockState;
export type BookkeepingLocksGetStateResponse = import("../types").ApiEnvelope<BookkeepingLocksGetStateResponseData>;

export type BookkeepingLocksRecommendationParams = undefined;
export type BookkeepingLocksRecommendationQuery = {
  asOf?: string;
};
export type BookkeepingLocksRecommendationBody = undefined;
export type BookkeepingLocksRecommendationResponseData = {
  asOf: string;
  companyPreference: string;
  vatRegime: string | null;
  ustvaRecommendation: any;
  thresholds: {
  ustvaMonthlyVatDueThreshold: number;
  ustvaAnnualVatDueExemptThreshold: number;
  ustvaNewCompanyMonthlyYears: number;
};
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
};
export type BookkeepingLocksRecommendationResponse = import("../types").ApiEnvelope<BookkeepingLocksRecommendationResponseData>;

export type BookkeepingLocksOverviewParams = undefined;
export type BookkeepingLocksOverviewQuery = {
  asOf?: string;
};
export type BookkeepingLocksOverviewBody = undefined;
export type BookkeepingLocksOverviewResponseData = {
  asOf: string;
  current: {
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
};
  states: Array<{
  key: "unlocked" | "locked_payments_only" | "locked_strict";
  label: string;
  tone: "neutral" | "warning" | "danger";
  explanation: string;
}>;
  modes: Array<{
  key: "payments_only" | "strict";
  label: string;
  description: string;
}>;
  areas: Array<{
  key: "payments" | "payment_import" | "payment_allocations" | "invoices" | "expenses" | "revenues" | "assets";
  label: string;
  blockedWhen: Array<"payments_only" | "strict">;
  blockedNow: boolean;
  explanation: string;
}>;
  constraints: {
  reducingOrClearingRequiresReason: boolean;
};
};
export type BookkeepingLocksOverviewResponse = import("../types").ApiEnvelope<BookkeepingLocksOverviewResponseData>;

export type BookkeepingLocksSetParams = undefined;
export type BookkeepingLocksSetQuery = undefined;
export type BookkeepingLocksSetBody = {
  lockedUntil: string | null;
  reason?: string;
  lockMode?: "payments_only" | "strict";
};
export type BookkeepingLocksSetResponseData = BookkeepingLockState;
export type BookkeepingLocksSetResponse = import("../types").ApiEnvelope<BookkeepingLocksSetResponseData>;

export type BookkeepingTaxParamsHealthParams = undefined;
export type BookkeepingTaxParamsHealthQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type BookkeepingTaxParamsHealthBody = undefined;
export type BookkeepingTaxParamsHealthResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingTaxParamsHealthResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsHealthResponseData>;

export type BookkeepingTaxParamsSyncParams = undefined;
export type BookkeepingTaxParamsSyncQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type BookkeepingTaxParamsSyncBody = import("../types").ContractNotReady<"Body not typed yet. Add DTO + validate({ body }) or contract({ request: ... }) to the route.">;
export type BookkeepingTaxParamsSyncResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingTaxParamsSyncResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsSyncResponseData>;

export type BookkeepingTaxParamsListParams = undefined;
export type BookkeepingTaxParamsListQuery = {
  category?: "afa" | "vat" | "threshold" | "building";
  paramKey?: string;
  effectiveDate?: string;
};
export type BookkeepingTaxParamsListBody = undefined;
export type BookkeepingTaxParamsListResponseData = Array<any>;
export type BookkeepingTaxParamsListResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsListResponseData>;

export type BookkeepingTaxParamsHistoryParams = {
  key: string;
};
export type BookkeepingTaxParamsHistoryQuery = undefined;
export type BookkeepingTaxParamsHistoryBody = undefined;
export type BookkeepingTaxParamsHistoryResponseData = Array<any>;
export type BookkeepingTaxParamsHistoryResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsHistoryResponseData>;

export type BookkeepingTaxParamsCreateParams = undefined;
export type BookkeepingTaxParamsCreateQuery = undefined;
export type BookkeepingTaxParamsCreateBody = {
  paramKey: string;
  category: "afa" | "vat" | "threshold" | "building";
  value: Record<string, any>;
  validFrom: string;
  validTo?: string | null;
  legalRef?: string;
  description?: string;
  changeReason: string;
};
export type BookkeepingTaxParamsCreateResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingTaxParamsCreateResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsCreateResponseData>;

export type BookkeepingTaxParamsUpdateParams = {
  id: number;
};
export type BookkeepingTaxParamsUpdateQuery = undefined;
export type BookkeepingTaxParamsUpdateBody = {
  value?: Record<string, any>;
  validTo?: string | null;
  legalRef?: string;
  description?: string;
  changeReason: string;
};
export type BookkeepingTaxParamsUpdateResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type BookkeepingTaxParamsUpdateResponse = import("../types").ApiEnvelope<BookkeepingTaxParamsUpdateResponseData>;

export type BookkeepingIncomeTaxGetSettingsParams = undefined;
export type BookkeepingIncomeTaxGetSettingsQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type BookkeepingIncomeTaxGetSettingsBody = undefined;
export type BookkeepingIncomeTaxGetSettingsResponseData = IncomeTaxSettings;
export type BookkeepingIncomeTaxGetSettingsResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxGetSettingsResponseData>;

export type BookkeepingIncomeTaxUpsertSettingsParams = undefined;
export type BookkeepingIncomeTaxUpsertSettingsQuery = undefined;
export type BookkeepingIncomeTaxUpsertSettingsBody = {
  bundesland?: "BW" | "BY" | "BE" | "BB" | "HB" | "HH" | "HE" | "MV" | "NI" | "NW" | "RP" | "SL" | "SN" | "ST" | "SH" | "TH";
  kirchensteuerpflichtig: boolean;
  kirchensteuerRate?: string | number;
  gewerbesteuerHebesatz?: string | number;
  isGewerbetreibend?: boolean;
  anzahlKinder?: number;
  hatSchwerbehinderung?: boolean;
  gradDerBehinderung?: number;
  quartalsVorauszahlungESt?: string | number;
  quartalsVorauszahlungSoli?: string | number;
  quartalsVorauszahlungKiSt?: string | number;
};
export type BookkeepingIncomeTaxUpsertSettingsResponseData = IncomeTaxSettings;
export type BookkeepingIncomeTaxUpsertSettingsResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpsertSettingsResponseData>;

export type BookkeepingIncomeTaxListEmploymentParams = undefined;
export type BookkeepingIncomeTaxListEmploymentQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxListEmploymentBody = undefined;
export type BookkeepingIncomeTaxListEmploymentResponseData = EmploymentIncome[];
export type BookkeepingIncomeTaxListEmploymentResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxListEmploymentResponseData>;

export type BookkeepingIncomeTaxGetEmploymentParams = {
  id: number;
};
export type BookkeepingIncomeTaxGetEmploymentQuery = undefined;
export type BookkeepingIncomeTaxGetEmploymentBody = undefined;
export type BookkeepingIncomeTaxGetEmploymentResponseData = EmploymentIncome;
export type BookkeepingIncomeTaxGetEmploymentResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxGetEmploymentResponseData>;

export type BookkeepingIncomeTaxCreateEmploymentParams = undefined;
export type BookkeepingIncomeTaxCreateEmploymentQuery = undefined;
export type BookkeepingIncomeTaxCreateEmploymentBody = {
  taxYear: number;
  employerName: string;
  employerSteuernummer?: string;
  employmentPeriodFrom?: string;
  employmentPeriodTo?: string;
  bruttoarbeitslohn: string | number;
  lohnsteuer?: string | number;
  solidaritaetszuschlag?: string | number;
  kirchensteuer?: string | number;
  versorgungsbezuege?: string | number;
  lohnersatzleistungen?: string | number;
  steuerfreiFahrtkosten?: string | number;
  pauschalBesteuertFahrtkosten?: string | number;
  agAnteilRV?: string | number;
  anAnteilRV?: string | number;
  agZuschussKV?: string | number;
  anBeitraegeKV?: string | number;
  anBeitraegePV?: string | number;
  anBeitraegeAV?: string | number;
  documentId?: number;
  notes?: string;
};
export type BookkeepingIncomeTaxCreateEmploymentResponseData = EmploymentIncome;
export type BookkeepingIncomeTaxCreateEmploymentResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxCreateEmploymentResponseData>;

export type BookkeepingIncomeTaxUpdateEmploymentParams = {
  id: number;
};
export type BookkeepingIncomeTaxUpdateEmploymentQuery = undefined;
export type BookkeepingIncomeTaxUpdateEmploymentBody = {
  taxYear?: number;
  employerName?: string;
  employerSteuernummer?: string;
  employmentPeriodFrom?: string;
  employmentPeriodTo?: string;
  bruttoarbeitslohn?: string | number;
  lohnsteuer?: string | number;
  solidaritaetszuschlag?: string | number;
  kirchensteuer?: string | number;
  versorgungsbezuege?: string | number;
  lohnersatzleistungen?: string | number;
  steuerfreiFahrtkosten?: string | number;
  pauschalBesteuertFahrtkosten?: string | number;
  agAnteilRV?: string | number;
  anAnteilRV?: string | number;
  agZuschussKV?: string | number;
  anBeitraegeKV?: string | number;
  anBeitraegePV?: string | number;
  anBeitraegeAV?: string | number;
  documentId?: number;
  notes?: string;
};
export type BookkeepingIncomeTaxUpdateEmploymentResponseData = EmploymentIncome;
export type BookkeepingIncomeTaxUpdateEmploymentResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpdateEmploymentResponseData>;

export type BookkeepingIncomeTaxDeleteEmploymentParams = {
  id: number;
};
export type BookkeepingIncomeTaxDeleteEmploymentQuery = undefined;
export type BookkeepingIncomeTaxDeleteEmploymentBody = undefined;
export type BookkeepingIncomeTaxDeleteEmploymentResponseData = null;
export type BookkeepingIncomeTaxDeleteEmploymentResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxDeleteEmploymentResponseData>;

export type BookkeepingIncomeTaxListWerbungskostenParams = undefined;
export type BookkeepingIncomeTaxListWerbungskostenQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxListWerbungskostenBody = undefined;
export type BookkeepingIncomeTaxListWerbungskostenResponseData = Werbungskosten[];
export type BookkeepingIncomeTaxListWerbungskostenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxListWerbungskostenResponseData>;

export type BookkeepingIncomeTaxCreateWerbungskostenParams = undefined;
export type BookkeepingIncomeTaxCreateWerbungskostenQuery = undefined;
export type BookkeepingIncomeTaxCreateWerbungskostenBody = {
  taxYear: number;
  type: "entfernungspauschale" | "homeoffice" | "arbeitsmittel" | "fortbildung" | "bewerbungskosten" | "doppelte_haushaltsfuehrung" | "reisekosten" | "kontogebuehren" | "fachliteratur" | "berufskleidung" | "gewerkschaft" | "other";
  description: string;
  amount: string | number;
  details?: {
  distanceKm?: number;
  workDaysPerYear?: number;
  daysWorkedFromHome?: number;
};
  documentId?: number;
};
export type BookkeepingIncomeTaxCreateWerbungskostenResponseData = Werbungskosten;
export type BookkeepingIncomeTaxCreateWerbungskostenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxCreateWerbungskostenResponseData>;

export type BookkeepingIncomeTaxUpdateWerbungskostenParams = {
  id: number;
};
export type BookkeepingIncomeTaxUpdateWerbungskostenQuery = undefined;
export type BookkeepingIncomeTaxUpdateWerbungskostenBody = {
  taxYear?: number;
  type?: "entfernungspauschale" | "homeoffice" | "arbeitsmittel" | "fortbildung" | "bewerbungskosten" | "doppelte_haushaltsfuehrung" | "reisekosten" | "kontogebuehren" | "fachliteratur" | "berufskleidung" | "gewerkschaft" | "other";
  description?: string;
  amount?: string | number;
  details?: {
  distanceKm?: number;
  workDaysPerYear?: number;
  daysWorkedFromHome?: number;
};
  documentId?: number;
};
export type BookkeepingIncomeTaxUpdateWerbungskostenResponseData = Werbungskosten;
export type BookkeepingIncomeTaxUpdateWerbungskostenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpdateWerbungskostenResponseData>;

export type BookkeepingIncomeTaxDeleteWerbungskostenParams = {
  id: number;
};
export type BookkeepingIncomeTaxDeleteWerbungskostenQuery = undefined;
export type BookkeepingIncomeTaxDeleteWerbungskostenBody = undefined;
export type BookkeepingIncomeTaxDeleteWerbungskostenResponseData = null;
export type BookkeepingIncomeTaxDeleteWerbungskostenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxDeleteWerbungskostenResponseData>;

export type BookkeepingIncomeTaxListSonderausgabenParams = undefined;
export type BookkeepingIncomeTaxListSonderausgabenQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxListSonderausgabenBody = undefined;
export type BookkeepingIncomeTaxListSonderausgabenResponseData = Sonderausgaben[];
export type BookkeepingIncomeTaxListSonderausgabenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxListSonderausgabenResponseData>;

export type BookkeepingIncomeTaxCreateSonderausgabenParams = undefined;
export type BookkeepingIncomeTaxCreateSonderausgabenQuery = undefined;
export type BookkeepingIncomeTaxCreateSonderausgabenBody = {
  taxYear: number;
  type: "kirchensteuer" | "spenden" | "parteibeitraege" | "berufsausbildung" | "other";
  description: string;
  amount: string | number;
  documentId?: number;
};
export type BookkeepingIncomeTaxCreateSonderausgabenResponseData = Sonderausgaben;
export type BookkeepingIncomeTaxCreateSonderausgabenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxCreateSonderausgabenResponseData>;

export type BookkeepingIncomeTaxUpdateSonderausgabenParams = {
  id: number;
};
export type BookkeepingIncomeTaxUpdateSonderausgabenQuery = undefined;
export type BookkeepingIncomeTaxUpdateSonderausgabenBody = {
  taxYear?: number;
  type?: "kirchensteuer" | "spenden" | "parteibeitraege" | "berufsausbildung" | "other";
  description?: string;
  amount?: string | number;
  documentId?: number;
};
export type BookkeepingIncomeTaxUpdateSonderausgabenResponseData = Sonderausgaben;
export type BookkeepingIncomeTaxUpdateSonderausgabenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpdateSonderausgabenResponseData>;

export type BookkeepingIncomeTaxDeleteSonderausgabenParams = {
  id: number;
};
export type BookkeepingIncomeTaxDeleteSonderausgabenQuery = undefined;
export type BookkeepingIncomeTaxDeleteSonderausgabenBody = undefined;
export type BookkeepingIncomeTaxDeleteSonderausgabenResponseData = null;
export type BookkeepingIncomeTaxDeleteSonderausgabenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxDeleteSonderausgabenResponseData>;

export type BookkeepingIncomeTaxListVorsorgeParams = undefined;
export type BookkeepingIncomeTaxListVorsorgeQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxListVorsorgeBody = undefined;
export type BookkeepingIncomeTaxListVorsorgeResponseData = Vorsorgeaufwendungen[];
export type BookkeepingIncomeTaxListVorsorgeResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxListVorsorgeResponseData>;

export type BookkeepingIncomeTaxCreateVorsorgeParams = undefined;
export type BookkeepingIncomeTaxCreateVorsorgeQuery = undefined;
export type BookkeepingIncomeTaxCreateVorsorgeBody = {
  taxYear: number;
  type: "altersvorsorge" | "basis_kv" | "pflegeversicherung" | "sonstige_vorsorge";
  description: string;
  amount: string | number;
  isFromEmployment: boolean;
  documentId?: number;
};
export type BookkeepingIncomeTaxCreateVorsorgeResponseData = Vorsorgeaufwendungen;
export type BookkeepingIncomeTaxCreateVorsorgeResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxCreateVorsorgeResponseData>;

export type BookkeepingIncomeTaxUpdateVorsorgeParams = {
  id: number;
};
export type BookkeepingIncomeTaxUpdateVorsorgeQuery = undefined;
export type BookkeepingIncomeTaxUpdateVorsorgeBody = {
  taxYear?: number;
  type?: "altersvorsorge" | "basis_kv" | "pflegeversicherung" | "sonstige_vorsorge";
  description?: string;
  amount?: string | number;
  isFromEmployment?: boolean;
  documentId?: number;
};
export type BookkeepingIncomeTaxUpdateVorsorgeResponseData = Vorsorgeaufwendungen;
export type BookkeepingIncomeTaxUpdateVorsorgeResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpdateVorsorgeResponseData>;

export type BookkeepingIncomeTaxDeleteVorsorgeParams = {
  id: number;
};
export type BookkeepingIncomeTaxDeleteVorsorgeQuery = undefined;
export type BookkeepingIncomeTaxDeleteVorsorgeBody = undefined;
export type BookkeepingIncomeTaxDeleteVorsorgeResponseData = null;
export type BookkeepingIncomeTaxDeleteVorsorgeResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxDeleteVorsorgeResponseData>;

export type BookkeepingIncomeTaxListSteuerminderungenParams = undefined;
export type BookkeepingIncomeTaxListSteuerminderungenQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxListSteuerminderungenBody = undefined;
export type BookkeepingIncomeTaxListSteuerminderungenResponseData = Steuerminderungen[];
export type BookkeepingIncomeTaxListSteuerminderungenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxListSteuerminderungenResponseData>;

export type BookkeepingIncomeTaxCreateSteuerminderungenParams = undefined;
export type BookkeepingIncomeTaxCreateSteuerminderungenQuery = undefined;
export type BookkeepingIncomeTaxCreateSteuerminderungenBody = {
  taxYear: number;
  type: "haushaltsnahe_beschaeftigung" | "haushaltsnahe_dienstleistung" | "handwerkerleistung" | "behindertenpauschbetrag" | "other";
  description: string;
  amount: string | number;
  documentId?: number;
};
export type BookkeepingIncomeTaxCreateSteuerminderungenResponseData = Steuerminderungen;
export type BookkeepingIncomeTaxCreateSteuerminderungenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxCreateSteuerminderungenResponseData>;

export type BookkeepingIncomeTaxUpdateSteuerminderungenParams = {
  id: number;
};
export type BookkeepingIncomeTaxUpdateSteuerminderungenQuery = undefined;
export type BookkeepingIncomeTaxUpdateSteuerminderungenBody = {
  taxYear?: number;
  type?: "haushaltsnahe_beschaeftigung" | "haushaltsnahe_dienstleistung" | "handwerkerleistung" | "behindertenpauschbetrag" | "other";
  description?: string;
  amount?: string | number;
  documentId?: number;
};
export type BookkeepingIncomeTaxUpdateSteuerminderungenResponseData = Steuerminderungen;
export type BookkeepingIncomeTaxUpdateSteuerminderungenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxUpdateSteuerminderungenResponseData>;

export type BookkeepingIncomeTaxDeleteSteuerminderungenParams = {
  id: number;
};
export type BookkeepingIncomeTaxDeleteSteuerminderungenQuery = undefined;
export type BookkeepingIncomeTaxDeleteSteuerminderungenBody = undefined;
export type BookkeepingIncomeTaxDeleteSteuerminderungenResponseData = null;
export type BookkeepingIncomeTaxDeleteSteuerminderungenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxDeleteSteuerminderungenResponseData>;

export type BookkeepingIncomeTaxGetEstimateParams = undefined;
export type BookkeepingIncomeTaxGetEstimateQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxGetEstimateBody = undefined;
export type BookkeepingIncomeTaxGetEstimateResponseData = EStCalculationResult;
export type BookkeepingIncomeTaxGetEstimateResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxGetEstimateResponseData>;

export type BookkeepingIncomeTaxGetVorauszahlungenParams = undefined;
export type BookkeepingIncomeTaxGetVorauszahlungenQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxGetVorauszahlungenBody = undefined;
export type BookkeepingIncomeTaxGetVorauszahlungenResponseData = VorauszahlungResult;
export type BookkeepingIncomeTaxGetVorauszahlungenResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxGetVorauszahlungenResponseData>;

export type BookkeepingIncomeTaxGetSummaryParams = undefined;
export type BookkeepingIncomeTaxGetSummaryQuery = {
  taxYear: number;
};
export type BookkeepingIncomeTaxGetSummaryBody = undefined;
export type BookkeepingIncomeTaxGetSummaryResponseData = IncomeTaxSummary;
export type BookkeepingIncomeTaxGetSummaryResponse = import("../types").ApiEnvelope<BookkeepingIncomeTaxGetSummaryResponseData>;

export type ReconciliationDashboardParams = undefined;
export type ReconciliationDashboardQuery = {
  startDate?: string;
  endDate?: string;
  paymentAccountId?: number;
  costCenterId?: number;
  estimateActionCounts?: boolean;
};
export type ReconciliationDashboardBody = undefined;
export type ReconciliationDashboardResponseData = {
  payments: {
  unmatched: {
  count: number;
  totalAmount: string;
  currency: string;
};
  partial: {
  count: number;
  totalAmount: string;
  currency: string;
};
};
  invoices: {
  unmatched: {
  count: number;
  totalAmount: string;
  currency: string;
};
  partial: {
  count: number;
  totalAmount: string;
  currency: string;
};
};
  expenses: {
  unmatched: {
  count: number;
  totalAmount: string;
  currency: string;
};
  partial: {
  count: number;
  totalAmount: string;
  currency: string;
};
};
  revenues: {
  unmatched: {
  count: number;
  totalAmount: string;
  currency: string;
};
  partial: {
  count: number;
  totalAmount: string;
  currency: string;
};
};
  aging: {
  days0to7: {
  count: number;
  totalAmount: string;
};
  days7to30: {
  count: number;
  totalAmount: string;
};
  days30to90: {
  count: number;
  totalAmount: string;
};
  days90plus: {
  count: number;
  totalAmount: string;
};
};
  actionSummary: {
  providerPayoutCount: number;
  autoMatchableCount: number | null;
} | null;
};
export type ReconciliationDashboardResponse = import("../types").ApiEnvelope<ReconciliationDashboardResponseData>;

export type ReconciliationQueueParams = undefined;
export type ReconciliationQueueQuery = {
  direction?: "in" | "out";
  paymentAccountId?: number;
  costCenterId?: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
};
export type ReconciliationQueueBody = undefined;
export type ReconciliationQueueResponseData = {
  items: Array<{
  payment: {
  id: number;
  amount: string;
  currency: string;
  direction: string;
  bookedAt: any;
  counterpartyName: string | null;
  counterpartyIban: string | null;
  reference: string | null;
  paymentAccountId: number;
  paymentAccountName: string | null;
  paymentAccountType: string | null;
  paymentAccountIban: string | null;
  remainingAmount: string;
  source: string;
  feeAmount: string | null;
  netAmount: string | null;
  originalAmount: string | null;
  originalCurrency: string | null;
};
  existingAllocations: Array<{
  id: number;
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  kind: string;
  allocatedAmount: string;
  targetLabel: string;
  createdAt: any;
}>;
  suggestions: Array<{
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  score: number;
  confidence: "high" | "medium" | "low";
  isAllocatable: boolean;
  blockedReason?: string;
  reasons: Array<string>;
  suggestedAllocateAmount: string;
  targetCurrency: string;
  totalAmount: string;
  openAmount: string;
  label: string;
  invoiceNumber?: string;
  customerName?: string | null;
  invoiceDate?: any;
  dueDate?: any;
  status?: string;
  vendor?: string | null;
  vendorInvoiceNumber?: string | null;
  description?: string | null;
  expenseDate?: any;
  revenueDate?: any;
  isConfirmed?: boolean;
}>;
  bestMatch: {
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  score: number;
  confidence: "high" | "medium" | "low";
  isAllocatable: boolean;
  blockedReason?: string;
  reasons: Array<string>;
  suggestedAllocateAmount: string;
  targetCurrency: string;
  totalAmount: string;
  openAmount: string;
  label: string;
  invoiceNumber?: string;
  customerName?: string | null;
  invoiceDate?: any;
  dueDate?: any;
  status?: string;
  vendor?: string | null;
  vendorInvoiceNumber?: string | null;
  description?: string | null;
  expenseDate?: any;
  revenueDate?: any;
  isConfirmed?: boolean;
} | null;
  transferSuggestion: {
  counterpartPaymentId: number;
  counterpartAmount: string;
  counterpartAccountId: number;
  counterpartAccountName: string | null;
  counterpartAccountType: string | null;
  counterpartDate: any;
  counterpartName: string | null;
  confidence: "high" | "medium" | "low";
} | null;
  providerPayoutSuggestion: {
  payoutId: string;
  providerAccountId: number;
  providerAccountName: string;
  existingPayoutPaymentId: number | null;
  transactionCount: number;
  totalGross: string;
  totalNet: string;
  totalFees: string;
  bankDepositAmount: string;
  difference: string;
  confidence: "high" | "medium" | "low";
} | null;
  counterpartyContext: {
  knownCustomerNames: Array<string> | null;
  knownVendorNames: Array<string> | null;
  recurringPattern: {
  frequency: "weekly" | "monthly" | "quarterly";
} | null;
  lastMatchedCategory: string | null;
} | null;
  matchCount: number;
  priority: "high" | "medium" | "low";
}>;
  summary: {
  totalWithSuggestions: number;
  totalWithTransfers: number;
  totalWithProviderPayouts: number;
  totalHighConfidence: number;
};
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};
export type ReconciliationQueueResponse = import("../types").ApiEnvelope<ReconciliationQueueResponseData>;

export type ReconciliationBatchSuggestionsParams = undefined;
export type ReconciliationBatchSuggestionsQuery = undefined;
export type ReconciliationBatchSuggestionsBody = {
  items: Array<{
  paymentId: number;
}>;
  limit?: number;
};
export type ReconciliationBatchSuggestionsResponseData = {
  results: Array<{
  paymentId: number;
  remainingAmount: string;
  suggestions: Array<any>;
}>;
};
export type ReconciliationBatchSuggestionsResponse = import("../types").ApiEnvelope<ReconciliationBatchSuggestionsResponseData>;

export type ReconciliationAutoMatchPreviewParams = undefined;
export type ReconciliationAutoMatchPreviewQuery = {
  direction?: "in" | "out";
  paymentAccountId?: number;
  minScore?: number;
};
export type ReconciliationAutoMatchPreviewBody = undefined;
export type ReconciliationAutoMatchPreviewResponseData = {
  candidates: Array<{
  paymentId: number;
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  score: number;
  confidence: "high" | "medium" | "low";
  reasons: Array<string>;
  isAllocatable: boolean;
  allocateAmount: string;
  paymentLabel: string;
  targetLabel: string;
}>;
  totalCount: number;
};
export type ReconciliationAutoMatchPreviewResponse = import("../types").ApiEnvelope<ReconciliationAutoMatchPreviewResponseData>;

export type ReconciliationAutoMatchConfirmParams = undefined;
export type ReconciliationAutoMatchConfirmQuery = undefined;
export type ReconciliationAutoMatchConfirmBody = {
  candidates: Array<{
  paymentId: number;
  targetType: "invoice" | "expense" | "revenue";
  targetId: number;
  amount: string;
}>;
};
export type ReconciliationAutoMatchConfirmResponseData = {
  results: Array<{
  paymentId: number;
  success: boolean;
  error?: string;
}>;
  totalSuccess: number;
  totalFailed: number;
};
export type ReconciliationAutoMatchConfirmResponse = import("../types").ApiEnvelope<ReconciliationAutoMatchConfirmResponseData>;

export type ReconciliationConfirmProviderPayoutParams = undefined;
export type ReconciliationConfirmProviderPayoutQuery = undefined;
export type ReconciliationConfirmProviderPayoutBody = {
  bankPaymentId: number;
  providerAccountId: number;
  payoutId: string;
};
export type ReconciliationConfirmProviderPayoutResponseData = {
  payoutPaymentId: number;
  bankPaymentId: number;
  linked: boolean;
  aggregateCreated: boolean;
  revenueId: number | null;
};
export type ReconciliationConfirmProviderPayoutResponse = import("../types").ApiEnvelope<ReconciliationConfirmProviderPayoutResponseData>;

export type ReconciliationGroupsParams = undefined;
export type ReconciliationGroupsQuery = {
  direction?: "in" | "out";
  paymentAccountId?: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
};
export type ReconciliationGroupsBody = undefined;
export type ReconciliationGroupsResponseData = {
  groups: Array<{
  groupType: "split_payment" | "overpayment";
  confidence: "high" | "medium" | "low";
  target: {
  type: string;
  id: number;
  label: string;
  totalAmount: string;
  openAmount: string;
  currency: string;
};
  payments: Array<{
  id: number;
  amount: string;
  remainingAmount: string;
  currency: string;
  bookedAt: any;
  counterpartyName: string | null;
  reference: string | null;
}>;
  sumOfPayments: string;
  difference: string;
}>;
  page: number;
  total: number;
};
export type ReconciliationGroupsResponse = import("../types").ApiEnvelope<ReconciliationGroupsResponseData>;

export type BookkeepingCapitalMovementsSearchParams = undefined;
export type BookkeepingCapitalMovementsSearchQuery = {
  q?: string;
  type?: "withdrawal" | "deposit";
  subType?: "cash_withdrawal" | "private_purchase" | "private_asset_use" | "est_payment" | "soli_payment" | "kist_payment" | "gewst_payment" | "other_withdrawal" | "cash_deposit" | "private_expense_paid" | "private_asset_transfer" | "est_refund" | "soli_refund" | "kist_refund" | "gewst_refund" | "other_deposit";
  taxYear?: number;
  startDate?: string;
  endDate?: string;
  isConfirmed?: boolean;
  paymentStatus?: "unmatched" | "cash_confirmed" | "partially_matched" | "fully_matched";
  page?: number;
  pageSize?: number;
  sortBy?: "createdAt" | "movementDate" | "amount";
  sortDir?: "asc" | "desc";
};
export type BookkeepingCapitalMovementsSearchBody = undefined;
export type BookkeepingCapitalMovementsSearchResponseData = PaginatedResult<CapitalMovement>;
export type BookkeepingCapitalMovementsSearchResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsSearchResponseData>;

export type BookkeepingCapitalMovementsKapitalkontoParams = undefined;
export type BookkeepingCapitalMovementsKapitalkontoQuery = {
  taxYear: number;
};
export type BookkeepingCapitalMovementsKapitalkontoBody = undefined;
export type BookkeepingCapitalMovementsKapitalkontoResponseData = {
  entnahmenGesamt: number;
  entnahmenGeld: number;
  einlagenGesamt: number;
  einlagenGeld: number;
};
export type BookkeepingCapitalMovementsKapitalkontoResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsKapitalkontoResponseData>;

export type BookkeepingCapitalMovementsGetByIdParams = {
  id: number;
};
export type BookkeepingCapitalMovementsGetByIdQuery = undefined;
export type BookkeepingCapitalMovementsGetByIdBody = undefined;
export type BookkeepingCapitalMovementsGetByIdResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsGetByIdResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsGetByIdResponseData>;

export type BookkeepingCapitalMovementsCreateParams = undefined;
export type BookkeepingCapitalMovementsCreateQuery = undefined;
export type BookkeepingCapitalMovementsCreateBody = {
  type: "withdrawal" | "deposit";
  subType: "cash_withdrawal" | "private_purchase" | "private_asset_use" | "est_payment" | "soli_payment" | "kist_payment" | "gewst_payment" | "other_withdrawal" | "cash_deposit" | "private_expense_paid" | "private_asset_transfer" | "est_refund" | "soli_refund" | "kist_refund" | "gewst_refund" | "other_deposit";
  amount: string | number;
  currency?: string;
  description: string;
  movementDate: string;
  notes?: string | null;
  taxPaymentMetadata?: {
  finanzamtName?: string;
  steuernummer?: string;
  vorauszahlungQuarter?: "Q1" | "Q2" | "Q3" | "Q4";
  vorauszahlungYear?: number;
  bescheidDate?: string;
  bescheidYear?: number;
} | null;
  isConfirmed?: boolean;
};
export type BookkeepingCapitalMovementsCreateResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsCreateResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsCreateResponseData>;

export type BookkeepingCapitalMovementsUpdateParams = {
  id: number;
};
export type BookkeepingCapitalMovementsUpdateQuery = undefined;
export type BookkeepingCapitalMovementsUpdateBody = {
  type?: "withdrawal" | "deposit";
  subType?: "cash_withdrawal" | "private_purchase" | "private_asset_use" | "est_payment" | "soli_payment" | "kist_payment" | "gewst_payment" | "other_withdrawal" | "cash_deposit" | "private_expense_paid" | "private_asset_transfer" | "est_refund" | "soli_refund" | "kist_refund" | "gewst_refund" | "other_deposit";
  amount?: string | number;
  currency?: string;
  description?: string;
  movementDate?: string;
  notes?: string | null;
  taxPaymentMetadata?: {
  finanzamtName?: string;
  steuernummer?: string;
  vorauszahlungQuarter?: "Q1" | "Q2" | "Q3" | "Q4";
  vorauszahlungYear?: number;
  bescheidDate?: string;
  bescheidYear?: number;
} | null;
  isConfirmed?: boolean;
};
export type BookkeepingCapitalMovementsUpdateResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsUpdateResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsUpdateResponseData>;

export type BookkeepingCapitalMovementsConfirmParams = {
  id: number;
};
export type BookkeepingCapitalMovementsConfirmQuery = undefined;
export type BookkeepingCapitalMovementsConfirmBody = undefined;
export type BookkeepingCapitalMovementsConfirmResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsConfirmResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsConfirmResponseData>;

export type BookkeepingCapitalMovementsCashConfirmParams = {
  id: number;
};
export type BookkeepingCapitalMovementsCashConfirmQuery = undefined;
export type BookkeepingCapitalMovementsCashConfirmBody = {
  confirmedAt?: string;
};
export type BookkeepingCapitalMovementsCashConfirmResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsCashConfirmResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsCashConfirmResponseData>;

export type BookkeepingCapitalMovementsRevokeCashConfirmParams = {
  id: number;
};
export type BookkeepingCapitalMovementsRevokeCashConfirmQuery = undefined;
export type BookkeepingCapitalMovementsRevokeCashConfirmBody = {
  reason: string;
};
export type BookkeepingCapitalMovementsRevokeCashConfirmResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsRevokeCashConfirmResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsRevokeCashConfirmResponseData>;

export type BookkeepingCapitalMovementsReverseParams = {
  id: number;
};
export type BookkeepingCapitalMovementsReverseQuery = undefined;
export type BookkeepingCapitalMovementsReverseBody = {
  reason: string;
};
export type BookkeepingCapitalMovementsReverseResponseData = CapitalMovement;
export type BookkeepingCapitalMovementsReverseResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsReverseResponseData>;

export type BookkeepingCapitalMovementsDeleteParams = {
  id: number;
};
export type BookkeepingCapitalMovementsDeleteQuery = undefined;
export type BookkeepingCapitalMovementsDeleteBody = undefined;
export type BookkeepingCapitalMovementsDeleteResponseData = null;
export type BookkeepingCapitalMovementsDeleteResponse = import("../types").ApiEnvelope<BookkeepingCapitalMovementsDeleteResponseData>;

export type BookkeepingIapPayoutsImportParams = undefined;
export type BookkeepingIapPayoutsImportQuery = undefined;
export type BookkeepingIapPayoutsImportBody = {
  platform: "apple" | "google";
  periodStart: string;
  periodEnd: string;
  source?: "revenuecat_api" | "revenuecat_csv" | "apple_financial_report" | "google_earnings_report";
  period?: {
  currency: string;
  netRevenue: string | number;
  grossSales?: string | number | null;
  providerFees?: string | number | null;
  refunds?: string | number | null;
  taxesWithheld?: string | number | null;
  raw?: any;
};
  reportFileId?: number | null;
};
export type BookkeepingIapPayoutsImportResponseData = { created: boolean; import: IapPayoutImport; revenueId: number | null; skipped?: { reason: string; detail: string } };
export type BookkeepingIapPayoutsImportResponse = import("../types").ApiEnvelope<BookkeepingIapPayoutsImportResponseData>;

export type BookkeepingIapPayoutsListParams = undefined;
export type BookkeepingIapPayoutsListQuery = {
  year?: number;
  platform?: "apple" | "google";
};
export type BookkeepingIapPayoutsListBody = undefined;
export type BookkeepingIapPayoutsListResponseData = { items: IapPayoutImport[] };
export type BookkeepingIapPayoutsListResponse = import("../types").ApiEnvelope<BookkeepingIapPayoutsListResponseData>;

export const apiRoutes_bookkeeping = {
  "bookkeeping_revenues_search": {
    method: "GET",
    path: "/bookkeeping/revenues",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahmen suchen",
      description: "Paginierte Suche über alle Einnahmen mit Filteroptionen (Zeitraum, Status, Suchbegriff). Optional kann nach `invoiceId` oder `assetId` gefiltert werden, um z.B. Veräußerungserlöse einer Anlage direkt zu finden.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesSearchParams;
      query: BookkeepingRevenuesSearchQuery;
      body: BookkeepingRevenuesSearchBody;
      response: BookkeepingRevenuesSearchResponse;
      responseData: BookkeepingRevenuesSearchResponseData;
    },
  },
  "bookkeeping_revenues_get_by_id": {
    method: "GET",
    path: "/bookkeeping/revenues/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahme nach ID laden",
      description: "Lädt eine einzelne Einnahme anhand ihrer ID mit allen Details (Betrag, Datum, Status, zugehörige Rechnung oder verknüpfte Anlage) plus aufgelöste Zahlungszuordnungen (`paymentAllocations`) mit Zahlungs- und Kontodetails.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesGetByIdParams;
      query: BookkeepingRevenuesGetByIdQuery;
      body: BookkeepingRevenuesGetByIdBody;
      response: BookkeepingRevenuesGetByIdResponse;
      responseData: BookkeepingRevenuesGetByIdResponseData;
    },
  },
  "bookkeeping_revenues_analyze_receipt": {
    method: "POST",
    path: "/bookkeeping/revenues/analyze-receipt",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Beleg per OCR analysieren (Einnahme)",
      description: "Sendet ein Belegbild (Foto/Scan) an die OCR-Erkennung und gibt die extrahierten Daten zurück (Betrag, Datum, MwSt.). Nutze die Ergebnisse um eine Einnahme vorzubefüllen.",
      bodyContentType: "multipart/form-data",
    },
    types: null as unknown as {
      params: BookkeepingRevenuesAnalyzeReceiptParams;
      query: BookkeepingRevenuesAnalyzeReceiptQuery;
      body: BookkeepingRevenuesAnalyzeReceiptBody;
      response: BookkeepingRevenuesAnalyzeReceiptResponse;
      responseData: BookkeepingRevenuesAnalyzeReceiptResponseData;
    },
  },
  "bookkeeping_revenues_create": {
    method: "POST",
    path: "/bookkeeping/revenues",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Neue Einnahme anlegen",
      description: "Erstellt einen neuen Einnahme-Entwurf, optional mit Beleganhang (multipart). Optional kann über `assetId` ein Anlagen-Abgangserlös explizit mit einer Anlage verknüpft werden. Der Entwurf muss separat über /confirm bestätigt werden, um buchhaltungstechnisch wirksam zu werden.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesCreateParams;
      query: BookkeepingRevenuesCreateQuery;
      body: BookkeepingRevenuesCreateBody;
      response: BookkeepingRevenuesCreateResponse;
      responseData: BookkeepingRevenuesCreateResponseData;
    },
  },
  "bookkeeping_revenues_update": {
    method: "PUT",
    path: "/bookkeeping/revenues/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahme aktualisieren",
      description: "Aktualisiert eine bestehende Einnahme. Bestätigte Einnahmen können nicht mehr geändert werden, wenn die Periode gesperrt ist.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesUpdateParams;
      query: BookkeepingRevenuesUpdateQuery;
      body: BookkeepingRevenuesUpdateBody;
      response: BookkeepingRevenuesUpdateResponse;
      responseData: BookkeepingRevenuesUpdateResponseData;
    },
  },
  "bookkeeping_revenues_upload_receipt": {
    method: "POST",
    path: "/bookkeeping/revenues/:id/upload-receipt",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Beleg zu Einnahme hochladen",
      description: "Lädt einen Beleg zu einer bestehenden Einnahme hoch. Ersetzt einen eventuell vorhandenen Beleg. Nur für unbestätigte Einnahmen (Entwürfe).",
      bodyContentType: "multipart/form-data",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesUploadReceiptParams;
      query: BookkeepingRevenuesUploadReceiptQuery;
      body: BookkeepingRevenuesUploadReceiptBody;
      response: BookkeepingRevenuesUploadReceiptResponse;
      responseData: BookkeepingRevenuesUploadReceiptResponseData;
    },
  },
  "bookkeeping_revenues_bulk_confirm": {
    method: "POST",
    path: "/bookkeeping/revenues/bulk-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Mehrere Einnahmen bestätigen",
      description: "Bestätigt mehrere Einnahme-Entwürfe auf einmal (Datenpflege-Bestätigung). Gibt für jede ID das Ergebnis zurück — Fehler bei einzelnen Einträgen stoppen nicht den Rest.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesBulkConfirmParams;
      query: BookkeepingRevenuesBulkConfirmQuery;
      body: BookkeepingRevenuesBulkConfirmBody;
      response: BookkeepingRevenuesBulkConfirmResponse;
      responseData: BookkeepingRevenuesBulkConfirmResponseData;
    },
  },
  "bookkeeping_revenues_confirm": {
    method: "POST",
    path: "/bookkeeping/revenues/:id/confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahme bestätigen",
      description: "Bestätigt einen Einnahme-Entwurf (Datenpflege-Bestätigung). Um die Einnahme in der EÜR zu erfassen, muss zusätzlich ein Zahlungsnachweis vorliegen (via Payment-Zuordnung oder /confirm-cash).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesConfirmParams;
      query: BookkeepingRevenuesConfirmQuery;
      body: BookkeepingRevenuesConfirmBody;
      response: BookkeepingRevenuesConfirmResponse;
      responseData: BookkeepingRevenuesConfirmResponseData;
    },
  },
  "bookkeeping_revenues_confirm_cash": {
    method: "POST",
    path: "/bookkeeping/revenues/:id/confirm-cash",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahme als Barzahlung bestätigen",
      description: "Markiert eine Einnahme als Bareinnahme mit einem expliziten Zahlungsdatum (confirmedAt). Die Einnahme wird mit diesem Datum in die EÜR aufgenommen (Zufluss-Prinzip § 4 Abs. 3 EStG). Kann nicht auf bereits durch Payment zugeordnete Einnahmen angewendet werden.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesConfirmCashParams;
      query: BookkeepingRevenuesConfirmCashQuery;
      body: BookkeepingRevenuesConfirmCashBody;
      response: BookkeepingRevenuesConfirmCashResponse;
      responseData: BookkeepingRevenuesConfirmCashResponseData;
    },
  },
  "bookkeeping_revenues_revoke_cash_confirm": {
    method: "POST",
    path: "/bookkeeping/revenues/:id/revoke-cash-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Barzahlungs-Bestätigung widerrufen",
      description: "Widerruft die Barzahlungs-Bestätigung einer Einnahme. Setzt den paymentStatus zurück auf 'unmatched' und entfernt das EÜR-Wirksamkeitsdatum. Nur möglich wenn paymentStatus = 'cash_confirmed'. Grund ist GoBD-Pflicht.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesRevokeCashConfirmParams;
      query: BookkeepingRevenuesRevokeCashConfirmQuery;
      body: BookkeepingRevenuesRevokeCashConfirmBody;
      response: BookkeepingRevenuesRevokeCashConfirmResponse;
      responseData: BookkeepingRevenuesRevokeCashConfirmResponseData;
    },
  },
  "bookkeeping_revenues_delete": {
    method: "DELETE",
    path: "/bookkeeping/revenues/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","revenues"],
      summary: "Einnahme löschen",
      description: "Löscht eine Einnahme. Bestätigte Einnahmen in gesperrten Perioden können nicht gelöscht werden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesDeleteParams;
      query: BookkeepingRevenuesDeleteQuery;
      body: BookkeepingRevenuesDeleteBody;
      response: BookkeepingRevenuesDeleteResponse;
      responseData: BookkeepingRevenuesDeleteResponseData;
    },
  },
  "bookkeeping_revenues_create_external": {
    method: "POST",
    path: "/bookkeeping/revenues/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["revenues:write"]},
    meta: {
      tags: ["bookkeeping","revenues-external"],
      summary: "Create revenue via external API",
      description: "Creates a revenue entry through OAuth2/API key for automation scenarios. Tenant and permission scope are derived from the token. Keep usage intentional (no full external CRUD exposed).",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesCreateExternalParams;
      query: BookkeepingRevenuesCreateExternalQuery;
      body: BookkeepingRevenuesCreateExternalBody;
      response: BookkeepingRevenuesCreateExternalResponse;
      responseData: BookkeepingRevenuesCreateExternalResponseData;
    },
  },
  "bookkeeping_revenues_invoice_adjustment_external": {
    method: "POST",
    path: "/bookkeeping/revenues/external/invoice-adjustment",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["revenues:write"]},
    meta: {
      tags: ["bookkeeping","revenues-external"],
      summary: "Create invoice payout adjustment via external API",
      description: "Creates an invoice-linked revenue adjustment for payout gaps (e.g., payment provider deductions). Idempotent by externalRef to handle webhook retries safely.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingRevenuesInvoiceAdjustmentExternalParams;
      query: BookkeepingRevenuesInvoiceAdjustmentExternalQuery;
      body: BookkeepingRevenuesInvoiceAdjustmentExternalBody;
      response: BookkeepingRevenuesInvoiceAdjustmentExternalResponse;
      responseData: BookkeepingRevenuesInvoiceAdjustmentExternalResponseData;
    },
  },
  "bookkeeping_expenses_search": {
    method: "GET",
    path: "/bookkeeping/expenses",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgaben suchen",
      description: "Paginierte Suche über alle Ausgaben mit Filteroptionen (Zeitraum, Status, Kategorie, Suchbegriff). Gibt eine paginierte Liste von BookkeepingExpense-Objekten zurück.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingExpensesSearchParams;
      query: BookkeepingExpensesSearchQuery;
      body: BookkeepingExpensesSearchBody;
      response: BookkeepingExpensesSearchResponse;
      responseData: BookkeepingExpensesSearchResponseData;
    },
  },
  "bookkeeping_expenses_get_by_id": {
    method: "GET",
    path: "/bookkeeping/expenses/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe nach ID laden",
      description: "Lädt eine einzelne Ausgabe anhand ihrer ID mit allen Details (Betrag, Datum, Kategorie, Status, Beleg-Anhang) plus `assetInfo`, damit das Frontend sofort erkennen kann, ob die Ausgabe bereits als Anlage erfasst wurde und ob sie fachlich als Sofortaufwand oder über AfA läuft.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingExpensesGetByIdParams;
      query: BookkeepingExpensesGetByIdQuery;
      body: BookkeepingExpensesGetByIdBody;
      response: BookkeepingExpensesGetByIdResponse;
      responseData: BookkeepingExpensesGetByIdResponseData;
    },
  },
  "bookkeeping_expenses_analyze_receipt": {
    method: "POST",
    path: "/bookkeeping/expenses/analyze-receipt",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Beleg per OCR analysieren",
      description: "Sendet ein Belegbild (Foto/Scan) an die OCR-Erkennung und gibt die extrahierten Daten zurück (Betrag, Datum, Lieferant, MwSt.). Nutze die Ergebnisse um eine Ausgabe vorzubefüllen.",
      bodyContentType: "multipart/form-data",
    },
    types: null as unknown as {
      params: BookkeepingExpensesAnalyzeReceiptParams;
      query: BookkeepingExpensesAnalyzeReceiptQuery;
      body: BookkeepingExpensesAnalyzeReceiptBody;
      response: BookkeepingExpensesAnalyzeReceiptResponse;
      responseData: BookkeepingExpensesAnalyzeReceiptResponseData;
    },
  },
  "bookkeeping_expenses_create": {
    method: "POST",
    path: "/bookkeeping/expenses",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Neue Ausgabe anlegen",
      description: "Erstellt einen neuen Ausgabe-Entwurf, optional mit Beleganhang (multipart). Mit `createAsAsset=true` kann die Ausgabe in derselben Operation direkt zusätzlich als Anlage angelegt werden. In diesem Fall liefert die Response weiterhin die Ausgabe zurück, aber `assetInfo` ist sofort gesetzt und enthält die verknüpfte `linkedAssetId`.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesCreateParams;
      query: BookkeepingExpensesCreateQuery;
      body: BookkeepingExpensesCreateBody;
      response: BookkeepingExpensesCreateResponse;
      responseData: BookkeepingExpensesCreateResponseData;
    },
  },
  "bookkeeping_expenses_update": {
    method: "PUT",
    path: "/bookkeeping/expenses/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe aktualisieren",
      description: "Aktualisiert eine bestehende Ausgabe, optional mit neuem Beleganhang. Bestätigte Ausgaben in gesperrten Perioden können nicht mehr geändert werden.",
      bodyContentType: "multipart/form-data",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesUpdateParams;
      query: BookkeepingExpensesUpdateQuery;
      body: BookkeepingExpensesUpdateBody;
      response: BookkeepingExpensesUpdateResponse;
      responseData: BookkeepingExpensesUpdateResponseData;
    },
  },
  "bookkeeping_expenses_upload_receipt": {
    method: "POST",
    path: "/bookkeeping/expenses/:id/upload-receipt",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Beleg zu Ausgabe hochladen",
      description: "Lädt einen Beleg zu einer bestehenden Ausgabe hoch. Ersetzt einen eventuell vorhandenen Beleg. Nur für unbestätigte Ausgaben (Entwürfe).",
      bodyContentType: "multipart/form-data",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingExpensesUploadReceiptParams;
      query: BookkeepingExpensesUploadReceiptQuery;
      body: BookkeepingExpensesUploadReceiptBody;
      response: BookkeepingExpensesUploadReceiptResponse;
      responseData: BookkeepingExpensesUploadReceiptResponseData;
    },
  },
  "bookkeeping_expenses_bulk_confirm": {
    method: "POST",
    path: "/bookkeeping/expenses/bulk-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Mehrere Ausgaben bestätigen",
      description: "Bestätigt mehrere Ausgabe-Entwürfe auf einmal (Datenpflege-Bestätigung). Gibt für jede ID das Ergebnis zurück — Fehler bei einzelnen Einträgen stoppen nicht den Rest.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesBulkConfirmParams;
      query: BookkeepingExpensesBulkConfirmQuery;
      body: BookkeepingExpensesBulkConfirmBody;
      response: BookkeepingExpensesBulkConfirmResponse;
      responseData: BookkeepingExpensesBulkConfirmResponseData;
    },
  },
  "bookkeeping_expenses_confirm": {
    method: "POST",
    path: "/bookkeeping/expenses/:id/confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe bestätigen",
      description: "Bestätigt einen Ausgabe-Entwurf (Datenpflege-Bestätigung). Um die Ausgabe in der EÜR zu erfassen, muss zusätzlich ein Zahlungsnachweis vorliegen (via Payment-Zuordnung oder /confirm-cash).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingExpensesConfirmParams;
      query: BookkeepingExpensesConfirmQuery;
      body: BookkeepingExpensesConfirmBody;
      response: BookkeepingExpensesConfirmResponse;
      responseData: BookkeepingExpensesConfirmResponseData;
    },
  },
  "bookkeeping_expenses_confirm_cash": {
    method: "POST",
    path: "/bookkeeping/expenses/:id/confirm-cash",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe als Barzahlung bestätigen",
      description: "Markiert eine Ausgabe als Barausgabe mit einem expliziten Zahlungsdatum (confirmedAt). Die Ausgabe wird mit diesem Datum in die EÜR aufgenommen (Abfluss-Prinzip § 4 Abs. 3 EStG). Kann nicht auf bereits durch Payment zugeordnete Ausgaben angewendet werden.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesConfirmCashParams;
      query: BookkeepingExpensesConfirmCashQuery;
      body: BookkeepingExpensesConfirmCashBody;
      response: BookkeepingExpensesConfirmCashResponse;
      responseData: BookkeepingExpensesConfirmCashResponseData;
    },
  },
  "bookkeeping_expenses_revoke_cash_confirm": {
    method: "POST",
    path: "/bookkeeping/expenses/:id/revoke-cash-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Barzahlungs-Bestätigung widerrufen",
      description: "Widerruft die Barzahlungs-Bestätigung einer Ausgabe. Setzt den paymentStatus zurück auf 'unmatched' und entfernt das EÜR-Wirksamkeitsdatum. Nur möglich wenn paymentStatus = 'cash_confirmed'. Grund ist GoBD-Pflicht.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesRevokeCashConfirmParams;
      query: BookkeepingExpensesRevokeCashConfirmQuery;
      body: BookkeepingExpensesRevokeCashConfirmBody;
      response: BookkeepingExpensesRevokeCashConfirmResponse;
      responseData: BookkeepingExpensesRevokeCashConfirmResponseData;
    },
  },
  "bookkeeping_expenses_mark_as_asset": {
    method: "POST",
    path: "/bookkeeping/expenses/:id/mark-as-asset",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe als Anlage erfassen",
      description: "Erstellt aus einer bestehenden Ausgabe einen verknüpften Anlagen-Datensatz. Standardwerte werden aus der Ausgabe übernommen (Datum, Netto-Betrag, Lieferant, Beleg), können aber überschrieben werden. Der Endpoint ist für den produktiven Buchhaltungs-Workflow gedacht: strikte Periodensperren werden respektiert, doppelte Asset-Erzeugung für dieselbe Ausgabe wird verhindert und das Frontend erhält sowohl die erzeugte Anlage als auch den aktualisierten `assetInfo`-Status der Ausgabe.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesMarkAsAssetParams;
      query: BookkeepingExpensesMarkAsAssetQuery;
      body: BookkeepingExpensesMarkAsAssetBody;
      response: BookkeepingExpensesMarkAsAssetResponse;
      responseData: BookkeepingExpensesMarkAsAssetResponseData;
    },
  },
  "bookkeeping_expenses_delete": {
    method: "DELETE",
    path: "/bookkeeping/expenses/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","expenses"],
      summary: "Ausgabe löschen",
      description: "Löscht eine Ausgabe. Bestätigte Ausgaben in gesperrten Perioden können nicht gelöscht werden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingExpensesDeleteParams;
      query: BookkeepingExpensesDeleteQuery;
      body: BookkeepingExpensesDeleteBody;
      response: BookkeepingExpensesDeleteResponse;
      responseData: BookkeepingExpensesDeleteResponseData;
    },
  },
  "bookkeeping_expenses_create_external": {
    method: "POST",
    path: "/bookkeeping/expenses/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["expenses:write"]},
    meta: {
      tags: ["bookkeeping","expenses-external"],
      summary: "Ausgabe von externer App anlegen",
      description: "Erstellt eine Ausgabe über eine externe Anwendung mittels OAuth2 oder API-Key (kein User-Session). Gedacht für automatisierte Integrationen (z.B. Rechnungseingänge aus drittseitiger Software). Scope: expenses:write. Ein Beleg kann als multipart-Datei oder als base64 im JSON-Body mitgeschickt werden. Der `Idempotency-Key`-Header ist Pflicht und verhindert Doppelbuchungen bei Wiederholungen.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingExpensesCreateExternalParams;
      query: BookkeepingExpensesCreateExternalQuery;
      body: BookkeepingExpensesCreateExternalBody;
      response: BookkeepingExpensesCreateExternalResponse;
      responseData: BookkeepingExpensesCreateExternalResponseData;
    },
  },
  "bookkeeping_assets_list_sammelposten_pools": {
    method: "GET",
    path: "/bookkeeping/assets/sammelposten-pools",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Sammelposten-Pools auflisten",
      description: "Listet alle Sammelposten-Pools (§6 Abs. 2a EStG) eines Unternehmens auf, sortiert nach Wirtschaftsjahr.",
    },
    types: null as unknown as {
      params: BookkeepingAssetsListSammelpostenPoolsParams;
      query: BookkeepingAssetsListSammelpostenPoolsQuery;
      body: BookkeepingAssetsListSammelpostenPoolsBody;
      response: BookkeepingAssetsListSammelpostenPoolsResponse;
      responseData: BookkeepingAssetsListSammelpostenPoolsResponseData;
    },
  },
  "bookkeeping_assets_get_sammelposten_pool": {
    method: "GET",
    path: "/bookkeeping/assets/sammelposten-pools/:poolId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Sammelposten-Pool mit Assets laden",
      description: "Lädt einen Sammelposten-Pool mit allen zugehörigen Wirtschaftsgütern.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsGetSammelpostenPoolParams;
      query: BookkeepingAssetsGetSammelpostenPoolQuery;
      body: BookkeepingAssetsGetSammelpostenPoolBody;
      response: BookkeepingAssetsGetSammelpostenPoolResponse;
      responseData: BookkeepingAssetsGetSammelpostenPoolResponseData;
    },
  },
  "bookkeeping_assets_generate_depreciation": {
    method: "POST",
    path: "/bookkeeping/assets/depreciation/generate",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Jahresende-AfA generieren",
      description: "Generiert AfA-Buchungen für alle aktiven Assets eines Wirtschaftsjahres. Erstellt persistierte depreciation_records für GoBD-Audit-Trail. Sammelposten werden auf Pool-Ebene gebucht.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsGenerateDepreciationParams;
      query: BookkeepingAssetsGenerateDepreciationQuery;
      body: BookkeepingAssetsGenerateDepreciationBody;
      response: BookkeepingAssetsGenerateDepreciationResponse;
      responseData: BookkeepingAssetsGenerateDepreciationResponseData;
    },
  },
  "bookkeeping_assets_get_depreciation_records": {
    method: "GET",
    path: "/bookkeeping/assets/depreciation/records",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "AfA-Buchungen abfragen",
      description: "Gibt alle persistierten AfA-Buchungen für ein Wirtschaftsjahr zurück.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsGetDepreciationRecordsParams;
      query: BookkeepingAssetsGetDepreciationRecordsQuery;
      body: BookkeepingAssetsGetDepreciationRecordsBody;
      response: BookkeepingAssetsGetDepreciationRecordsResponse;
      responseData: BookkeepingAssetsGetDepreciationRecordsResponseData;
    },
  },
  "bookkeeping_assets_finalize_depreciation": {
    method: "POST",
    path: "/bookkeeping/assets/depreciation/finalize",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "AfA-Jahresabschluss finalisieren (GoBD-Sperrung)",
      description: "Sperrt alle offenen AfA-Buchungen eines Wirtschaftsjahres. Gesperrte Buchungen können nicht mehr geändert werden (GoBD-konform). Erfordert Admin-Berechtigung.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsFinalizeDepreciationParams;
      query: BookkeepingAssetsFinalizeDepreciationQuery;
      body: BookkeepingAssetsFinalizeDepreciationBody;
      response: BookkeepingAssetsFinalizeDepreciationResponse;
      responseData: BookkeepingAssetsFinalizeDepreciationResponseData;
    },
  },
  "bookkeeping_assets_iab_list": {
    method: "GET",
    path: "/bookkeeping/assets/iab",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB-Einträge auflisten",
      description: "Alle Investitionsabzugsbeträge (§7g Abs. 1) eines Unternehmens. Zeigt aktive, aufgelöste und rückabgewickelte IABs.",
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabListParams;
      query: BookkeepingAssetsIabListQuery;
      body: BookkeepingAssetsIabListBody;
      response: BookkeepingAssetsIabListResponse;
      responseData: BookkeepingAssetsIabListResponseData;
    },
  },
  "bookkeeping_assets_iab_create": {
    method: "POST",
    path: "/bookkeeping/assets/iab",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB anlegen (geplante Investition)",
      description: "Erstellt einen Investitionsabzugsbetrag: Bis zu 50% der geplanten AK werden vom Gewinn des Abzugsjahres abgezogen. Prüft §7g-Gewinngrenze automatisch. 3-Jahres-Frist wird gesetzt.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabCreateParams;
      query: BookkeepingAssetsIabCreateQuery;
      body: BookkeepingAssetsIabCreateBody;
      response: BookkeepingAssetsIabCreateResponse;
      responseData: BookkeepingAssetsIabCreateResponseData;
    },
  },
  "bookkeeping_assets_iab_get": {
    method: "GET",
    path: "/bookkeeping/assets/iab/:iabId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB-Eintrag laden",
      description: "Einzelnen Investitionsabzugsbetrag mit allen Details laden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabGetParams;
      query: BookkeepingAssetsIabGetQuery;
      body: BookkeepingAssetsIabGetBody;
      response: BookkeepingAssetsIabGetResponse;
      responseData: BookkeepingAssetsIabGetResponseData;
    },
  },
  "bookkeeping_assets_iab_dissolve": {
    method: "POST",
    path: "/bookkeeping/assets/iab/:iabId/dissolve",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB auflösen (bei Kauf)",
      description: "Löst den IAB auf und verknüpft ihn mit dem gekauften Asset. Die AK-Basis des Assets wird um den Abzugsbetrag reduziert.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabDissolveParams;
      query: BookkeepingAssetsIabDissolveQuery;
      body: BookkeepingAssetsIabDissolveBody;
      response: BookkeepingAssetsIabDissolveResponse;
      responseData: BookkeepingAssetsIabDissolveResponseData;
    },
  },
  "bookkeeping_assets_iab_reverse": {
    method: "POST",
    path: "/bookkeeping/assets/iab/:iabId/reverse",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB rückabwickeln (Frist abgelaufen)",
      description: "Rückabwicklung: Abzugsbetrag wird zum Gewinn hinzugerechnet + 6% Zinsen pro Jahr (§7g Abs. 3).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabReverseParams;
      query: BookkeepingAssetsIabReverseQuery;
      body: BookkeepingAssetsIabReverseBody;
      response: BookkeepingAssetsIabReverseResponse;
      responseData: BookkeepingAssetsIabReverseResponseData;
    },
  },
  "bookkeeping_assets_iab_delete": {
    method: "DELETE",
    path: "/bookkeeping/assets/iab/:iabId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "IAB löschen (nur aktive)",
      description: "Soft-Delete eines aktiven IAB-Eintrags. Aufgelöste/rückabgewickelte IABs können nicht gelöscht werden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsIabDeleteParams;
      query: BookkeepingAssetsIabDeleteQuery;
      body: BookkeepingAssetsIabDeleteBody;
      response: BookkeepingAssetsIabDeleteResponse;
      responseData: BookkeepingAssetsIabDeleteResponseData;
    },
  },
  "bookkeeping_assets_search": {
    method: "GET",
    path: "/bookkeeping/assets",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Anlagevermögen suchen",
      description: "Paginierte Suche über alle Anlagegüter mit erweiterten Filteroptionen (Typ, AfA-Methode, Gebäudetyp, Digital-Asset, Status). Unterstützt Sortierung nach Inventarnummer, Inbetriebnahmedatum etc.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsSearchParams;
      query: BookkeepingAssetsSearchQuery;
      body: BookkeepingAssetsSearchBody;
      response: BookkeepingAssetsSearchResponse;
      responseData: BookkeepingAssetsSearchResponseData;
    },
  },
  "bookkeeping_assets_create": {
    method: "POST",
    path: "/bookkeeping/assets",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Neue Anlage anlegen",
      description: "Erstellt ein Anlagegut mit vollständiger Validierung nach deutschem Steuerrecht. Unterstützt: lineare AfA, degressive AfA (§7 Abs. 2), GWG-Sofortabschreibung (≤800€), Sammelposten (250,01–1.000€), Digital-AfA (BMF 2021), Gebäude-AfA (§7 Abs. 4/5, §7i, §7b). Auto-Generierung von Inventarnummer. Sammelposten-Konsistenz wird pro Wirtschaftsjahr geprüft.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsCreateParams;
      query: BookkeepingAssetsCreateQuery;
      body: BookkeepingAssetsCreateBody;
      response: BookkeepingAssetsCreateResponse;
      responseData: BookkeepingAssetsCreateResponseData;
    },
  },
  "bookkeeping_assets_get_by_id": {
    method: "GET",
    path: "/bookkeeping/assets/:assetId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Anlage mit AfA-Plan laden",
      description: "Lädt ein Anlagegut mit vollständigem AfA-Plan (alle Methoden: linear, degressive, GWG, Sammelposten, Digital-AfA, Gebäude-AfA). Enthält Sonderabschreibung, Buchgewinn/-verlust bei Abgang, und verknüpfte Erlöse.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsGetByIdParams;
      query: BookkeepingAssetsGetByIdQuery;
      body: BookkeepingAssetsGetByIdBody;
      response: BookkeepingAssetsGetByIdResponse;
      responseData: BookkeepingAssetsGetByIdResponseData;
    },
  },
  "bookkeeping_assets_update": {
    method: "PUT",
    path: "/bookkeeping/assets/:assetId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Anlage aktualisieren",
      description: "Aktualisiert ein Anlagegut. Anschaffungsdaten sollten nach GoBD nur vor Finalisierung korrigiert werden. Veräußerte Anlagen können nicht bearbeitet werden.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsUpdateParams;
      query: BookkeepingAssetsUpdateQuery;
      body: BookkeepingAssetsUpdateBody;
      response: BookkeepingAssetsUpdateResponse;
      responseData: BookkeepingAssetsUpdateResponseData;
    },
  },
  "bookkeeping_assets_dispose": {
    method: "POST",
    path: "/bookkeeping/assets/:assetId/dispose",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Anlage veräußern / aussondern",
      description: "Markiert Anlage als abgegangen. Berechnet automatisch Restbuchwert und Buchgewinn/-verlust. Bei Verkauf wird Revenue-Eintrag mit Kategorie 'asset_disposal' erstellt. Bei Sammelposten: Asset wird inaktiv, Pool-AfA läuft weiter.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsDisposeParams;
      query: BookkeepingAssetsDisposeQuery;
      body: BookkeepingAssetsDisposeBody;
      response: BookkeepingAssetsDisposeResponse;
      responseData: BookkeepingAssetsDisposeResponseData;
    },
  },
  "bookkeeping_assets_delete": {
    method: "DELETE",
    path: "/bookkeeping/assets/:assetId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Anlage löschen (soft-delete, GoBD-konform)",
      description: "Soft-Delete: isDeleted=true, Daten bleiben für Revision erhalten.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsDeleteParams;
      query: BookkeepingAssetsDeleteQuery;
      body: BookkeepingAssetsDeleteBody;
      response: BookkeepingAssetsDeleteResponse;
      responseData: BookkeepingAssetsDeleteResponseData;
    },
  },
  "bookkeeping_assets_apply_sonderafa": {
    method: "POST",
    path: "/bookkeeping/assets/:assetId/sonderafa",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Sonderabschreibung §7g Abs. 5 anwenden",
      description: "Wendet Sonderabschreibung (max 20% der AK) an. Nur im Anschaffungsjahr, nur für bewegliche WG, ≥90% betriebliche Nutzung.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsApplySonderafaParams;
      query: BookkeepingAssetsApplySonderafaQuery;
      body: BookkeepingAssetsApplySonderafaBody;
      response: BookkeepingAssetsApplySonderafaResponse;
      responseData: BookkeepingAssetsApplySonderafaResponseData;
    },
  },
  "bookkeeping_assets_switch_to_linear": {
    method: "POST",
    path: "/bookkeeping/assets/:assetId/switch-to-linear",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "Wechsel degressive → lineare AfA (§7 Abs. 3)",
      description: "Wechselt von degressiver zu linearer AfA. Restbuchwert wird über verbleibende Nutzungsdauer linear abgeschrieben.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsSwitchToLinearParams;
      query: BookkeepingAssetsSwitchToLinearQuery;
      body: BookkeepingAssetsSwitchToLinearBody;
      response: BookkeepingAssetsSwitchToLinearResponse;
      responseData: BookkeepingAssetsSwitchToLinearResponseData;
    },
  },
  "bookkeeping_assets_add_cost_component": {
    method: "POST",
    path: "/bookkeeping/assets/:assetId/cost-components",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "AK-Bestandteil hinzufügen",
      description: "Fügt einen Anschaffungskostenbestandteil hinzu (Lieferung, Montage, Zoll, nachträgliche AK, Rabatte). Aktualisiert automatisch die AK-Summenfelder am Asset.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingAssetsAddCostComponentParams;
      query: BookkeepingAssetsAddCostComponentQuery;
      body: BookkeepingAssetsAddCostComponentBody;
      response: BookkeepingAssetsAddCostComponentResponse;
      responseData: BookkeepingAssetsAddCostComponentResponseData;
    },
  },
  "bookkeeping_assets_list_cost_components": {
    method: "GET",
    path: "/bookkeeping/assets/:assetId/cost-components",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "AK-Bestandteile auflisten",
      description: "Listet alle Anschaffungskostenbestandteile eines Assets auf.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsListCostComponentsParams;
      query: BookkeepingAssetsListCostComponentsQuery;
      body: BookkeepingAssetsListCostComponentsBody;
      response: BookkeepingAssetsListCostComponentsResponse;
      responseData: BookkeepingAssetsListCostComponentsResponseData;
    },
  },
  "bookkeeping_assets_delete_cost_component": {
    method: "DELETE",
    path: "/bookkeeping/assets/:assetId/cost-components/:componentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","assets"],
      summary: "AK-Bestandteil löschen",
      description: "Soft-Delete eines AK-Bestandteils. Aktualisiert AK-Summenfelder.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAssetsDeleteCostComponentParams;
      query: BookkeepingAssetsDeleteCostComponentQuery;
      body: BookkeepingAssetsDeleteCostComponentBody;
      response: BookkeepingAssetsDeleteCostComponentResponse;
      responseData: BookkeepingAssetsDeleteCostComponentResponseData;
    },
  },
  "bookkeeping_reports_euer": {
    method: "GET",
    path: "/bookkeeping/reports/euer",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "EÜR-Bericht",
      description: "Erzeugt den Einnahmen-Überschuss-Rechnung (EÜR) Bericht für ein bestimmtes Jahr. Enthält alle relevanten Einnahmen- und Ausgabenposten nach Kategorie aggregiert. Ausgaben, die als Anlage erfasst wurden, werden dabei nicht mehr doppelt als Sofortaufwand gezählt; stattdessen erscheint deren AfA als Kategorie `depreciation`.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsEuerParams;
      query: BookkeepingReportsEuerQuery;
      body: BookkeepingReportsEuerBody;
      response: BookkeepingReportsEuerResponse;
      responseData: BookkeepingReportsEuerResponseData;
    },
  },
  "bookkeeping_reports_summary": {
    method: "GET",
    path: "/bookkeeping/reports/summary",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Monatliche/Jährliche Zusammenfassung",
      description: "Gibt eine Zusammenfassung über Einnahmen, Ausgaben und Gewinn für einen bestimmten Zeitraum (Monat oder Jahr). Anlage-verknüpfte Ausgaben werden für diese Auswertung nicht als Sofortaufwand doppelt gezählt; stattdessen wird AfA als Ausgabenkategorie berücksichtigt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsSummaryParams;
      query: BookkeepingReportsSummaryQuery;
      body: BookkeepingReportsSummaryBody;
      response: BookkeepingReportsSummaryResponse;
      responseData: BookkeepingReportsSummaryResponseData;
    },
  },
  "bookkeeping_reports_monthly_trend": {
    method: "GET",
    path: "/bookkeeping/reports/monthly-trend",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Monatlicher Umsatztrend",
      description: "Gibt monatliche Umsatz- und Ausgabendaten für ein gesamtes Jahr zurück. Geeignet für Trendgrafiken und Zeitreihenanalysen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsMonthlyTrendParams;
      query: BookkeepingReportsMonthlyTrendQuery;
      body: BookkeepingReportsMonthlyTrendBody;
      response: BookkeepingReportsMonthlyTrendResponse;
      responseData: BookkeepingReportsMonthlyTrendResponseData;
    },
  },
  "bookkeeping_reports_asset_register": {
    method: "GET",
    path: "/bookkeeping/reports/assets",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Anlagen-Spiegel / AfA-Bericht",
      description: "Gibt für ein Jahr ein Anlagenverzeichnis mit allen relevanten Anlagegütern zurück, inklusive Buchwert zu Jahresanfang/-ende, AfA des Jahres, Zugängen, Abgängen, `linkedDisposalRevenueId` für verknüpfte Verkaufserlöse und dem Verknüpfungsstatus zur Ursprungs-Ausgabe. Für veräußerte Anlagen endet die AfA im Bericht mit dem Abgang.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsAssetRegisterParams;
      query: BookkeepingReportsAssetRegisterQuery;
      body: BookkeepingReportsAssetRegisterBody;
      response: BookkeepingReportsAssetRegisterResponse;
      responseData: BookkeepingReportsAssetRegisterResponseData;
    },
  },
  "bookkeeping_reports_category_breakdown": {
    method: "GET",
    path: "/bookkeeping/reports/category-breakdown",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Aufschlüsselung nach Kategorie",
      description: "Gibt eine Aufschlüsselung der Ausgaben nach Kategorie für einen bestimmten Zeitraum zurück. Enthält bei Anlagevermögen zusätzlich die Kategorie `depreciation`, während verknüpfte Anschaffungsausgaben nicht doppelt als Sofortaufwand erscheinen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsCategoryBreakdownParams;
      query: BookkeepingReportsCategoryBreakdownQuery;
      body: BookkeepingReportsCategoryBreakdownBody;
      response: BookkeepingReportsCategoryBreakdownResponse;
      responseData: BookkeepingReportsCategoryBreakdownResponseData;
    },
  },
  "bookkeeping_reports_vendor_breakdown": {
    method: "GET",
    path: "/bookkeeping/reports/vendor-breakdown",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Aufschlüsselung nach Lieferant",
      description: "Gibt eine Aufschlüsselung der Ausgaben nach Lieferant für ein bestimmtes Jahr zurück. Zeigt die größten Lieferanten und zugehörige Beträge.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsVendorBreakdownParams;
      query: BookkeepingReportsVendorBreakdownQuery;
      body: BookkeepingReportsVendorBreakdownBody;
      response: BookkeepingReportsVendorBreakdownResponse;
      responseData: BookkeepingReportsVendorBreakdownResponseData;
    },
  },
  "bookkeeping_reports_vat_status": {
    method: "GET",
    path: "/bookkeeping/reports/vat/status",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "Aktueller USt-Status",
      description: "Gibt den aktuellen USt-Status zurück: aktuelles Besteuerungsverfahren (SOLL/IST), Kleinunternehmer-Status, UStVA-Anmeldepräferenz und aktuelle Schwellenwert-Warnungen (z.B. Nähe zur 25k-Grenze). Zentraler Baustein für die Tax-Übersicht.",
    },
    types: null as unknown as {
      params: BookkeepingReportsVatStatusParams;
      query: BookkeepingReportsVatStatusQuery;
      body: BookkeepingReportsVatStatusBody;
      response: BookkeepingReportsVatStatusResponse;
      responseData: BookkeepingReportsVatStatusResponseData;
    },
  },
  "bookkeeping_reports_vat_periods": {
    method: "GET",
    path: "/bookkeeping/reports/vat/periods",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "USt-Regimeperioden-Verlauf",
      description: "Gibt die historische Liste aller USt-Regimeperioden zurück (Kleinunternehmer ↔ Regelbesteuert Übergänge). Zeigt, seit wann das Unternehmen in welchem USt-Regime ist.",
    },
    types: null as unknown as {
      params: BookkeepingReportsVatPeriodsParams;
      query: BookkeepingReportsVatPeriodsQuery;
      body: BookkeepingReportsVatPeriodsBody;
      response: BookkeepingReportsVatPeriodsResponse;
      responseData: BookkeepingReportsVatPeriodsResponseData;
    },
  },
  "bookkeeping_reports_vat_ustva": {
    method: "GET",
    path: "/bookkeeping/reports/vat/ustva",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reports"],
      summary: "UStVA-Voranmeldung",
      description: "Erzeugt die Umsatzsteuer-Voranmeldung (UStVA) für eine bestimmte Periode (Monat/Quartal/Jahr). Enthält Umsatzsteuer-Eingangsteuer, Ausgangsteuer und den zu zahlenden/erstattbaren Betrag.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingReportsVatUstvaParams;
      query: BookkeepingReportsVatUstvaQuery;
      body: BookkeepingReportsVatUstvaBody;
      response: BookkeepingReportsVatUstvaResponse;
      responseData: BookkeepingReportsVatUstvaResponseData;
    },
  },
  "payments_import_csv": {
    method: "POST",
    path: "/bookkeeping/payments/import/csv",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungen aus CSV importieren",
      description: "Importiert Zahlungen aus einer CSV-Datei mittels eines Importprofils. Gibt Anzahl eingefügter und übersprungener Zeilen zurück. Nutze vorher /import/csv/preview um die Daten zu überprüfen.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsImportCsvParams;
      query: PaymentsImportCsvQuery;
      body: PaymentsImportCsvBody;
      response: PaymentsImportCsvResponse;
      responseData: PaymentsImportCsvResponseData;
    },
  },
  "payments_import_csv_preview": {
    method: "POST",
    path: "/bookkeeping/payments/import/csv/preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "CSV-Import vorschau",
      description: "Vorschau eines CSV-Imports: erkennt automatisch das Profil und Trennzeichen, mappt die Spalten und gibt eine Vorschau der validierten Zeilen mit Fehlern zurück.",
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsImportCsvPreviewParams;
      query: PaymentsImportCsvPreviewQuery;
      body: PaymentsImportCsvPreviewBody;
      response: PaymentsImportCsvPreviewResponse;
      responseData: PaymentsImportCsvPreviewResponseData;
    },
  },
  "payments_list_csv_profiles": {
    method: "GET",
    path: "/bookkeeping/payments/import/csv/profiles",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Verfügbare CSV-Importprofile",
      description: "Gibt eine Liste aller verfügbaren CSV-Importprofile zurück (vordefinierte Bankformat-Profile wie VKB, ING, etc.) mit Name und Trennzeichen-Hinweis.",
    },
    types: null as unknown as {
      params: PaymentsListCsvProfilesParams;
      query: PaymentsListCsvProfilesQuery;
      body: PaymentsListCsvProfilesBody;
      response: PaymentsListCsvProfilesResponse;
      responseData: PaymentsListCsvProfilesResponseData;
    },
  },
  "payments_download_csv_template": {
    method: "GET",
    path: "/bookkeeping/payments/import/csv/template/:profileKey",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "CSV-Vorlage herunterladen",
      description: "Gibt eine Musterdatei (CSV-Template) für ein bestimmtes Importprofil zum Download zurück. Hilfreich um das erwartete Format zu verstehen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsDownloadCsvTemplateParams;
      query: PaymentsDownloadCsvTemplateQuery;
      body: PaymentsDownloadCsvTemplateBody;
      response: PaymentsDownloadCsvTemplateResponse;
      responseData: PaymentsDownloadCsvTemplateResponseData;
    },
  },
  "payments_list_import_profiles": {
    method: "GET",
    path: "/bookkeeping/payments/import/profiles",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Benutzerdefinierte Importprofile auflisten",
      description: "Gibt alle benutzerdefinierten Importprofile zurück. Optional einschließlich archivierter Profile. Diese Profile werden vom Benutzer erstellt und pflegen die Spalten-Mappings für CSV-Imports.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsListImportProfilesParams;
      query: PaymentsListImportProfilesQuery;
      body: PaymentsListImportProfilesBody;
      response: PaymentsListImportProfilesResponse;
      responseData: PaymentsListImportProfilesResponseData;
    },
  },
  "payments_create_import_profile": {
    method: "POST",
    path: "/bookkeeping/payments/import/profiles",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Neues Importprofil anlegen",
      description: "Erstellt ein neues benutzerdefiniertes Importprofil mit Spalten-Mapping für CSV-Imports.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsCreateImportProfileParams;
      query: PaymentsCreateImportProfileQuery;
      body: PaymentsCreateImportProfileBody;
      response: PaymentsCreateImportProfileResponse;
      responseData: PaymentsCreateImportProfileResponseData;
    },
  },
  "payments_update_import_profile": {
    method: "PUT",
    path: "/bookkeeping/payments/import/profiles/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Importprofil aktualisieren",
      description: "Aktualisiert ein benutzerdefiniertes Importprofil (Name, Spalten-Mapping, Archivierung).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsUpdateImportProfileParams;
      query: PaymentsUpdateImportProfileQuery;
      body: PaymentsUpdateImportProfileBody;
      response: PaymentsUpdateImportProfileResponse;
      responseData: PaymentsUpdateImportProfileResponseData;
    },
  },
  "payments_search": {
    method: "GET",
    path: "/bookkeeping/payments/search",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungen suchen",
      description: "Paginierte Suche über alle Zahlungen mit Filteroptionen (Zeitraum, Konto, Zuweisungsstatus, Suchbegriff). Hauptliste für die Zahlungsübersicht.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsSearchParams;
      query: PaymentsSearchQuery;
      body: PaymentsSearchBody;
      response: PaymentsSearchResponse;
      responseData: PaymentsSearchResponseData;
    },
  },
  "payments_create_manual": {
    method: "POST",
    path: "/bookkeeping/payments/manual",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Manuell Zahlung anlegen",
      description: "Erstellt eine manuell eingetragene Zahlung (z.B. Bargeld, überwiesenes Nicht-CSV). Alternative zum CSV-Import für einzelne Einträge.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsCreateManualParams;
      query: PaymentsCreateManualQuery;
      body: PaymentsCreateManualBody;
      response: PaymentsCreateManualResponse;
      responseData: PaymentsCreateManualResponseData;
    },
  },
  "payments_transfer_link": {
    method: "POST",
    path: "/bookkeeping/payments/transfer/link",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zwei bestehende Zahlungen als Umbuchung verknüpfen",
      description: "Verknüpft zwei bestehende Zahlungen (z.B. aus Bankimporten) als Umbuchungspaar. Beide Zahlungen müssen auf unterschiedlichen Konten sein, eine eingehend und eine ausgehend. Die Zahlungen werden bidirektional via linkedPaymentId verknüpft. Es werden KEINE neuen Zahlungen erstellt.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsTransferLinkParams;
      query: PaymentsTransferLinkQuery;
      body: PaymentsTransferLinkBody;
      response: PaymentsTransferLinkResponse;
      responseData: PaymentsTransferLinkResponseData;
    },
  },
  "payments_cashbook": {
    method: "GET",
    path: "/bookkeeping/payments/cashbook",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Kassenbestand / Kontobuch",
      description: "Gibt das Kontobuch für ein bestimmtes Zahlungskonto zurück: Eröffnungsbetrag, Schlussbetrag und paginierte Liste der Bewegungen im Zeitraum.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsCashbookParams;
      query: PaymentsCashbookQuery;
      body: PaymentsCashbookBody;
      response: PaymentsCashbookResponse;
      responseData: PaymentsCashbookResponseData;
    },
  },
  "payments_match_suggestions": {
    method: "GET",
    path: "/bookkeeping/payments/match/:paymentId/suggestions",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zuweisungsvorschläge für Zahlung",
      description: "Gibt Vorschläge für die Zuordnung einer Zahlung zu Rechnungen/Ausgaben zurück (automatische Matching-Logik basierend auf Betrag und Zeitraum). Zeigt auch den verbleibenden Betrag an.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsMatchSuggestionsParams;
      query: PaymentsMatchSuggestionsQuery;
      body: PaymentsMatchSuggestionsBody;
      response: PaymentsMatchSuggestionsResponse;
      responseData: PaymentsMatchSuggestionsResponseData;
    },
  },
  "payments_booking_payment_suggestions": {
    method: "GET",
    path: "/bookkeeping/payments/booking-match/:targetType/:targetId/payment-suggestions",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungsvorschläge für Buchung",
      description: "Gibt Zahlungsvorschläge für eine Ausgabe oder Einnahme zurück (spiegelbildlich zu match-suggestions). Ermöglicht die Zuordnung von der Buchungsseite aus.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsBookingPaymentSuggestionsParams;
      query: PaymentsBookingPaymentSuggestionsQuery;
      body: PaymentsBookingPaymentSuggestionsBody;
      response: PaymentsBookingPaymentSuggestionsResponse;
      responseData: PaymentsBookingPaymentSuggestionsResponseData;
    },
  },
  "payments_allocate": {
    method: "POST",
    path: "/bookkeeping/payments/allocate/:paymentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlung einer Rechnung zuweisen",
      description: "Weist eine Zahlung einer oder mehreren Rechnungen/Ausgaben zu (Allokation). Gibt die aktualisierten Allokations-Einträge zurück.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsAllocateParams;
      query: PaymentsAllocateQuery;
      body: PaymentsAllocateBody;
      response: PaymentsAllocateResponse;
      responseData: PaymentsAllocateResponseData;
    },
  },
  "payments_unallocate": {
    method: "DELETE",
    path: "/bookkeeping/payments/allocations/:paymentId/:allocationId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "[DEPRECATED] Zuweisung entfernen — gesperrt (GoBD)",
      description: "GoBD-konform: Zuordnungen dürfen nicht gelöscht werden. Verwende stattdessen POST /:paymentId/allocations/:allocationId/reverse für eine Stornierung.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsUnallocateParams;
      query: PaymentsUnallocateQuery;
      body: PaymentsUnallocateBody;
      response: PaymentsUnallocateResponse;
      responseData: PaymentsUnallocateResponseData;
    },
  },
  "payments_update": {
    method: "PUT",
    path: "/bookkeeping/payments/update/:paymentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlung aktualisieren",
      description: "Aktualisiert eine bestehende Zahlung (z.B. Notiz, Kategorie). Zahlungen in gesperrten Perioden können nicht mehr geändert werden.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsUpdateParams;
      query: PaymentsUpdateQuery;
      body: PaymentsUpdateBody;
      response: PaymentsUpdateResponse;
      responseData: PaymentsUpdateResponseData;
    },
  },
  "payments_reversal_preview": {
    method: "GET",
    path: "/bookkeeping/payments/:paymentId/reversal-preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Storno-Vorschau für Zahlung",
      description: "Zeigt eine Vorschau aller Auswirkungen einer Stornierung: betroffene Zuordnungen, Rechnungs-Status-Änderungen, Warnungen und Blocker. Muss VOR der Stornierung aufgerufen werden um dem User die Konsequenzen zu zeigen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsReversalPreviewParams;
      query: PaymentsReversalPreviewQuery;
      body: PaymentsReversalPreviewBody;
      response: PaymentsReversalPreviewResponse;
      responseData: PaymentsReversalPreviewResponseData;
    },
  },
  "payments_reverse": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/reverse",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlung stornieren (GoBD-konform)",
      description: "Erstellt eine Gegenbuchung (Storno-Payment) mit umgekehrtem Vorzeichen und storniert alle zugehörigen Zuordnungen. Die ursprüngliche Zahlung wird als storniert markiert, aber NICHT gelöscht. Rechnungen werden ggf. auf 'issued' zurückgesetzt. Idempotent: doppelte Aufrufe geben das bestehende Storno zurück.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsReverseParams;
      query: PaymentsReverseQuery;
      body: PaymentsReverseBody;
      response: PaymentsReverseResponse;
      responseData: PaymentsReverseResponseData;
    },
  },
  "payments_transfer_unlink": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/transfer/unlink",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Umbuchung auflösen (Verknüpfung entfernen)",
      description: "Entfernt die Verknüpfung zwischen zwei als Umbuchung verknüpften Zahlungen. Die Zahlungen selbst bleiben bestehen, nur die bidirektionale Verknüpfung wird aufgehoben. Begründung ist Pflicht (GoBD).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsTransferUnlinkParams;
      query: PaymentsTransferUnlinkQuery;
      body: PaymentsTransferUnlinkBody;
      response: PaymentsTransferUnlinkResponse;
      responseData: PaymentsTransferUnlinkResponseData;
    },
  },
  "payments_transfer_linkable": {
    method: "GET",
    path: "/bookkeeping/payments/:paymentId/transfer/linkable",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Verknüpfbare Zahlungen für Umbuchung suchen",
      description: "Gibt eine paginierte Liste von Zahlungen zurück, die als Umbuchungs-Gegenstück zur angegebenen Zahlung verknüpft werden könnten. Filtert nach Konto, Richtung, Zeitraum und Betrag. Nur unverknüpfte, nicht-stornierte Zahlungen werden zurückgegeben.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsTransferLinkableParams;
      query: PaymentsTransferLinkableQuery;
      body: PaymentsTransferLinkableBody;
      response: PaymentsTransferLinkableResponse;
      responseData: PaymentsTransferLinkableResponseData;
    },
  },
  "payments_allocation_reversal_preview": {
    method: "GET",
    path: "/bookkeeping/payments/:paymentId/allocations/:allocationId/reversal-preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Storno-Vorschau für Zuordnung",
      description: "Zeigt die Auswirkungen einer Zuordnungs-Stornierung: betroffene Rechnung, neuer Status, verbleibender Zuordnungsbetrag nach Storno.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsAllocationReversalPreviewParams;
      query: PaymentsAllocationReversalPreviewQuery;
      body: PaymentsAllocationReversalPreviewBody;
      response: PaymentsAllocationReversalPreviewResponse;
      responseData: PaymentsAllocationReversalPreviewResponseData;
    },
  },
  "payments_allocation_reverse": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/allocations/:allocationId/reverse",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zuordnung stornieren (GoBD-konform)",
      description: "Erstellt eine Gegen-Zuordnung mit negativem Betrag auf derselben Zahlung. Die ursprüngliche Zuordnung wird als storniert markiert, aber NICHT gelöscht. Die Rechnung wird ggf. auf 'issued' zurückgesetzt. Idempotent: doppelte Aufrufe geben das bestehende Storno zurück.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsAllocationReverseParams;
      query: PaymentsAllocationReverseQuery;
      body: PaymentsAllocationReverseBody;
      response: PaymentsAllocationReverseResponse;
      responseData: PaymentsAllocationReverseResponseData;
    },
  },
  "payments_delete": {
    method: "DELETE",
    path: "/bookkeeping/payments/:paymentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "[DEPRECATED] Zahlung löschen — gesperrt (GoBD)",
      description: "GoBD-konform: Zahlungen dürfen nicht gelöscht werden. Verwende stattdessen POST /:paymentId/reverse für eine Stornierung.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsDeleteParams;
      query: PaymentsDeleteQuery;
      body: PaymentsDeleteBody;
      response: PaymentsDeleteResponse;
      responseData: PaymentsDeleteResponseData;
    },
  },
  "payments_book": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/book",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Kontoauszugszeile direkt buchen (Bank-First)",
      description: "Erstellt eine Buchung (Ausgabe oder Einnahme) direkt aus einer Zahlungstransaktion und verknüpft sie atomisch via Allokation. Eingehende Zahlungen (direction=in) erzeugen eine Einnahme, ausgehende (direction=out) eine Ausgabe. Diese Route ist der empfohlene Einstiegspunkt für den Bank-First-Buchungsflow.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsBookParams;
      query: PaymentsBookQuery;
      body: PaymentsBookBody;
      response: PaymentsBookResponse;
      responseData: PaymentsBookResponseData;
    },
  },
  "payments_record_fee": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/fee",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Bankgebühr auf Zahlung buchen",
      description: "Erfasst eine Bankgebühr (z.B. Kontoführung, Überweisungsgebühr) für eine Zahlung. Erstellt automatisch eine Ausgabe mit Kategorie 'bank_fees' und verknüpft sie mit der Zahlung via Allokation (kind=fee). Die Gebühr reduziert den verfügbaren Betrag für weitere Zuweisungen.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsRecordFeeParams;
      query: PaymentsRecordFeeQuery;
      body: PaymentsRecordFeeBody;
      response: PaymentsRecordFeeResponse;
      responseData: PaymentsRecordFeeResponseData;
    },
  },
  "payments_writeoff": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/writeoff",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Forderung/Schuld abschreiben",
      description: "Schreibt einen nicht-einbringlichen Betrag ab (z.B. Kunde insolvent, Forderung uneinbringlich). Erstellt eine Allokation mit kind=writeoff, die den offenen Betrag auf der Zielrechnung/Ausgabe reduziert. Der abgeschriebene Betrag wird steuerlich als Forderungsausfall behandelt. Grund muss angegeben werden (GoBD-konform).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsWriteoffParams;
      query: PaymentsWriteoffQuery;
      body: PaymentsWriteoffBody;
      response: PaymentsWriteoffResponse;
      responseData: PaymentsWriteoffResponseData;
    },
  },
  "payments_apply_discount": {
    method: "POST",
    path: "/bookkeeping/payments/:paymentId/discount",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Skonto / Rabatt anwenden",
      description: "Wendet einen Skonto (Zahlungszielrabatt) oder Rabatt auf eine Rechnung/Ausgabe an. Erstellt eine Allokation mit kind=discount, die den offenen Betrag reduziert. Typische Anwendung: 2% Skonto bei Zahlung innerhalb 10 Tagen. Der Grund kann optional angegeben werden (z.B. 'Skonto 2%, Zahlung innerhalb 10 Tagen').",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsApplyDiscountParams;
      query: PaymentsApplyDiscountQuery;
      body: PaymentsApplyDiscountBody;
      response: PaymentsApplyDiscountResponse;
      responseData: PaymentsApplyDiscountResponseData;
    },
  },
  "payments_get_account_by_id": {
    method: "GET",
    path: "/bookkeeping/payments/accounts/bdId/:accountId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungskonto nach ID laden",
      description: "Lädt ein einzelnes Zahlungskonto (Bank/Kasse) anhand seiner ID mit allen Details (Name, IBAN, Typ, Eröffnungsbetrag).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsGetAccountByIdParams;
      query: PaymentsGetAccountByIdQuery;
      body: PaymentsGetAccountByIdBody;
      response: PaymentsGetAccountByIdResponse;
      responseData: PaymentsGetAccountByIdResponseData;
    },
  },
  "payments_list_accounts": {
    method: "GET",
    path: "/bookkeeping/payments/accounts",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungskonten auflisten",
      description: "Gibt eine paginierte Liste aller Zahlungskonten (Bankkonten, Kassenkonten) zurück, optional gefiltert per Suchbegriff.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsListAccountsParams;
      query: PaymentsListAccountsQuery;
      body: PaymentsListAccountsBody;
      response: PaymentsListAccountsResponse;
      responseData: PaymentsListAccountsResponseData;
    },
  },
  "payments_create_account": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Neues Zahlungskonto anlegen",
      description: "Erstellt ein neues Zahlungskonto (Bankkonto oder Kasse) mit Name, IBAN und optionalem Eröffnungsbetrag.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsCreateAccountParams;
      query: PaymentsCreateAccountQuery;
      body: PaymentsCreateAccountBody;
      response: PaymentsCreateAccountResponse;
      responseData: PaymentsCreateAccountResponseData;
    },
  },
  "payments_update_account": {
    method: "PUT",
    path: "/bookkeeping/payments/accounts/update/:accountId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungskonto aktualisieren",
      description: "Aktualisiert ein bestehendes Zahlungskonto (Name, IBAN, Typ, PayPal-Credentials).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsUpdateAccountParams;
      query: PaymentsUpdateAccountQuery;
      body: PaymentsUpdateAccountBody;
      response: PaymentsUpdateAccountResponse;
      responseData: PaymentsUpdateAccountResponseData;
    },
  },
  "payments_archive_account": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/:accountId/archive",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Zahlungskonto archivieren",
      description: "Archiviert ein Zahlungskonto (Soft-Delete). Nur möglich wenn: keine offenen Zahlungen, keine aktiven Provider-Verbindungen, kein verknüpftes Bankkonto von einem anderen Konto, und kein Standard-Konto. GoBD-konform: Konto bleibt in der DB erhalten.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsArchiveAccountParams;
      query: PaymentsArchiveAccountQuery;
      body: PaymentsArchiveAccountBody;
      response: PaymentsArchiveAccountResponse;
      responseData: PaymentsArchiveAccountResponseData;
    },
  },
  "payments_delete_account": {
    method: "DELETE",
    path: "/bookkeeping/payments/accounts/:accountId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Unbenutztes Zahlungskonto löschen",
      description: "Löscht ein Zahlungskonto permanent. Nur möglich wenn das Konto keinerlei Zahlungen, Verbindungen, Rechnungsreferenzen oder Snapshots hat. Für Konten mit Daten: /archive verwenden.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsDeleteAccountParams;
      query: PaymentsDeleteAccountQuery;
      body: PaymentsDeleteAccountBody;
      response: PaymentsDeleteAccountResponse;
      responseData: PaymentsDeleteAccountResponseData;
    },
  },
  "payments_paypal_sync": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/:accountId/paypal/sync",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "PayPal-Konto manuell synchronisieren",
      description: "Ruft Transaktionen über die PayPal REST API ab und importiert sie idempotent (fingerprint-basiert, keine Duplikate). Optionaler 'fromDate' überschreibt den gespeicherten Sync-Cursor.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsPaypalSyncParams;
      query: PaymentsPaypalSyncQuery;
      body: PaymentsPaypalSyncBody;
      response: PaymentsPaypalSyncResponse;
      responseData: PaymentsPaypalSyncResponseData;
    },
  },
  "payments_sumup_oauth_start": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/:accountId/sumup/oauth/start",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "SumUp OAuth starten",
      description: "Erzeugt einen kurzlebigen OAuth-State und gibt die Authorize-URL fuer den SumUp Sign-in Flow zurueck. autoCreateBankAccount steuert ob nach OAuth automatisch ein Bankkonto aus den SumUp-Payout-Settings angelegt wird.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsSumupOauthStartParams;
      query: PaymentsSumupOauthStartQuery;
      body: PaymentsSumupOauthStartBody;
      response: PaymentsSumupOauthStartResponse;
      responseData: PaymentsSumupOauthStartResponseData;
    },
  },
  "payments_sumup_sync": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/:accountId/sumup/sync",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "SumUp-Konto manuell synchronisieren",
      description: "Importiert SumUp-Transaktionen und Payouts idempotent ueber die SumUp API.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsSumupSyncParams;
      query: PaymentsSumupSyncQuery;
      body: PaymentsSumupSyncBody;
      response: PaymentsSumupSyncResponse;
      responseData: PaymentsSumupSyncResponseData;
    },
  },
  "payments_sumup_oauth_disconnect": {
    method: "DELETE",
    path: "/bookkeeping/payments/accounts/:accountId/sumup/oauth",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "SumUp-Verbindung trennen",
      description: "Trennt die gespeicherte SumUp OAuth-Verbindung fuer ein Zahlungskonto und deaktiviert den automatischen Sync.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsSumupOauthDisconnectParams;
      query: PaymentsSumupOauthDisconnectQuery;
      body: PaymentsSumupOauthDisconnectBody;
      response: PaymentsSumupOauthDisconnectResponse;
      responseData: PaymentsSumupOauthDisconnectResponseData;
    },
  },
  "payments_paypal_webhook_register": {
    method: "POST",
    path: "/bookkeeping/payments/accounts/:accountId/paypal/webhook/register",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "PayPal-Webhook registrieren",
      description: "Registriert eine HTTPS-Callback-URL bei PayPal für Echtzeit-Zahlungsbenachrichtigungen. Überschreibt einen vorhandenen Webhook automatisch.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsPaypalWebhookRegisterParams;
      query: PaymentsPaypalWebhookRegisterQuery;
      body: PaymentsPaypalWebhookRegisterBody;
      response: PaymentsPaypalWebhookRegisterResponse;
      responseData: PaymentsPaypalWebhookRegisterResponseData;
    },
  },
  "payments_paypal_webhook_deregister": {
    method: "DELETE",
    path: "/bookkeeping/payments/accounts/:accountId/paypal/webhook",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "PayPal-Webhook entfernen",
      description: "Entfernt den registrierten PayPal-Webhook und löscht die webhookId aus der Datenbank.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: PaymentsPaypalWebhookDeregisterParams;
      query: PaymentsPaypalWebhookDeregisterQuery;
      body: PaymentsPaypalWebhookDeregisterBody;
      response: PaymentsPaypalWebhookDeregisterResponse;
      responseData: PaymentsPaypalWebhookDeregisterResponseData;
    },
  },
  "payments_list_balance_snapshots": {
    method: "GET",
    path: "/bookkeeping/payments/snapshots",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Ist-Saldo Snapshots auflisten",
      description: "Gibt alle externen Saldo-Snapshots für ein Zahlungskonto zurück (Bank/PayPal/SumUp). Nicht-stornierte Einträge werden standardmäßig zurückgegeben. Dient der Anzeige von Systemsaldo vs. Ist-Saldo und Abweichung. GoBD: Einträge werden nie gelöscht — nur storniert.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsListBalanceSnapshotsParams;
      query: PaymentsListBalanceSnapshotsQuery;
      body: PaymentsListBalanceSnapshotsBody;
      response: PaymentsListBalanceSnapshotsResponse;
      responseData: PaymentsListBalanceSnapshotsResponseData;
    },
  },
  "payments_create_balance_snapshot": {
    method: "POST",
    path: "/bookkeeping/payments/snapshots",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Ist-Saldo Snapshot anlegen",
      description: "Erfasst einen externen Saldo-Snapshot (z.B. Kontoauszug, PayPal-Saldo). Jeder Snapshot ist ein unveränderlicher Eintrag. Korrekturen erfolgen durch Stornierung und Neuanlage. GoBD: append-only, kein DELETE.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsCreateBalanceSnapshotParams;
      query: PaymentsCreateBalanceSnapshotQuery;
      body: PaymentsCreateBalanceSnapshotBody;
      response: PaymentsCreateBalanceSnapshotResponse;
      responseData: PaymentsCreateBalanceSnapshotResponseData;
    },
  },
  "payments_void_balance_snapshot": {
    method: "POST",
    path: "/bookkeeping/payments/snapshots/:snapshotId/void",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Ist-Saldo Snapshot stornieren (GoBD)",
      description: "Storniert einen fehlerhaften Saldo-Snapshot. Der Eintrag wird als storniert markiert (isVoided = true) und aus der aktiven Anzeige ausgeblendet, bleibt aber dauerhaft im Audit-Trail erhalten. Begründung ist Pflicht (GoBD). Keine Datenlöschung.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsVoidBalanceSnapshotParams;
      query: PaymentsVoidBalanceSnapshotQuery;
      body: PaymentsVoidBalanceSnapshotBody;
      response: PaymentsVoidBalanceSnapshotResponse;
      responseData: PaymentsVoidBalanceSnapshotResponseData;
    },
  },
  "payments_update_fee_vat_treatment": {
    method: "PUT",
    path: "/bookkeeping/payments/accounts/:accountId/fee-vat-treatment",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Gebuehren-Steuerbehandlung der Provider-Verbindung setzen",
      description: "Legt fest wie Provider-Gebuehren steuerlich behandelt werden: EXEMPT (steuerfrei, §4 Nr. 8 UStG), INCLUSIVE_STANDARD (19% inklusive, deutsche Entity), REVERSE_CHARGE_13B (§13b, EU-Entity). Gilt pro Verbindung, nicht global.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsUpdateFeeVatTreatmentParams;
      query: PaymentsUpdateFeeVatTreatmentQuery;
      body: PaymentsUpdateFeeVatTreatmentBody;
      response: PaymentsUpdateFeeVatTreatmentResponse;
      responseData: PaymentsUpdateFeeVatTreatmentResponseData;
    },
  },
  "payments_list_fee_proposals": {
    method: "GET",
    path: "/bookkeeping/payments/fee-proposals",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Gebuehren-Vorschlaege auflisten",
      description: "Listet alle vom Sync vorgeschlagenen Fee-Expenses die auf Bestaetigung warten. Diese Vorschlaege wurden automatisch beim Import erstellt und muessen vom User bestaetigt werden bevor sie in die UStVA einfliessen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsListFeeProposalsParams;
      query: PaymentsListFeeProposalsQuery;
      body: PaymentsListFeeProposalsBody;
      response: PaymentsListFeeProposalsResponse;
      responseData: PaymentsListFeeProposalsResponseData;
    },
  },
  "payments_confirm_fee_proposals": {
    method: "POST",
    path: "/bookkeeping/payments/fee-proposals/confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Gebuehren-Vorschlaege bestaetigen",
      description: "Bestaetigt ausgewaehlte Fee-Vorschlaege. Nach Bestaetigung werden sie als regulaere Ausgaben gebucht und fliessen in die UStVA ein.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsConfirmFeeProposalsParams;
      query: PaymentsConfirmFeeProposalsQuery;
      body: PaymentsConfirmFeeProposalsBody;
      response: PaymentsConfirmFeeProposalsResponse;
      responseData: PaymentsConfirmFeeProposalsResponseData;
    },
  },
  "payments_reject_fee_proposals": {
    method: "POST",
    path: "/bookkeeping/payments/fee-proposals/reject",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "Gebuehren-Vorschlaege ablehnen",
      description: "Lehnt ausgewaehlte Fee-Vorschlaege ab. Abgelehnte Vorschlaege werden als geloescht markiert. Beim naechsten Sync koennen neue Vorschlaege erstellt werden.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: PaymentsRejectFeeProposalsParams;
      query: PaymentsRejectFeeProposalsQuery;
      body: PaymentsRejectFeeProposalsBody;
      response: PaymentsRejectFeeProposalsResponse;
      responseData: PaymentsRejectFeeProposalsResponseData;
    },
  },
  "payments_paypal_webhook_receive": {
    method: "POST",
    path: "/bookkeeping/payments/public/paypal/webhook",
    auth: {"type":"public"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "PayPal-Webhook empfangen (public)",
      description: "Öffentlicher Endpunkt für eingehende PayPal-Webhook-Events. Signatur wird intern via PayPal API verifiziert. Gibt immer HTTP 200 zurück.",
    },
    types: null as unknown as {
      params: PaymentsPaypalWebhookReceiveParams;
      query: PaymentsPaypalWebhookReceiveQuery;
      body: PaymentsPaypalWebhookReceiveBody;
      response: PaymentsPaypalWebhookReceiveResponse;
      responseData: PaymentsPaypalWebhookReceiveResponseData;
    },
  },
  "payments_sumup_oauth_callback": {
    method: "GET",
    path: "/bookkeeping/payments/public/sumup/oauth/callback",
    auth: {"type":"public"},
    meta: {
      tags: ["bookkeeping","payments"],
      summary: "SumUp OAuth Callback (public)",
      description: "Öffentlicher Callback-Endpunkt für den SumUp OAuth Authorization-Code-Flow. Validiert den OAuth-State, speichert Tokens serverseitig und leitet zurück ins Frontend.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: PaymentsSumupOauthCallbackParams;
      query: PaymentsSumupOauthCallbackQuery;
      body: PaymentsSumupOauthCallbackBody;
      response: PaymentsSumupOauthCallbackResponse;
      responseData: PaymentsSumupOauthCallbackResponseData;
    },
  },
  "bookkeeping_payments_list_accounts_external": {
    method: "GET",
    path: "/bookkeeping/payments/external/accounts",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["payments:read"]},
    meta: {
      tags: ["bookkeeping","payments-external"],
      summary: "List payment accounts via external API",
      description: "Returns payment accounts accessible for the token (cost center filtered). Use this to resolve paymentAccountId before calling settle-invoice.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingPaymentsListAccountsExternalParams;
      query: BookkeepingPaymentsListAccountsExternalQuery;
      body: BookkeepingPaymentsListAccountsExternalBody;
      response: BookkeepingPaymentsListAccountsExternalResponse;
      responseData: BookkeepingPaymentsListAccountsExternalResponseData;
    },
  },
  "bookkeeping_payments_create_manual_external": {
    method: "POST",
    path: "/bookkeeping/payments/external/manual",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["payments:write"]},
    meta: {
      tags: ["bookkeeping","payments-external"],
      summary: "Create manual payment via external API",
      description: "Creates a manual payment entry via OAuth2/API key for integration scenarios (e.g. PSP clearing events). Kept intentionally narrow; allocation/reconciliation remains an internal or CSV-led workflow.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingPaymentsCreateManualExternalParams;
      query: BookkeepingPaymentsCreateManualExternalQuery;
      body: BookkeepingPaymentsCreateManualExternalBody;
      response: BookkeepingPaymentsCreateManualExternalResponse;
      responseData: BookkeepingPaymentsCreateManualExternalResponseData;
    },
  },
  "bookkeeping_payments_settle_invoice_external": {
    method: "POST",
    path: "/bookkeeping/payments/external/settle-invoice",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["payments:write","invoices:write"]},
    meta: {
      tags: ["bookkeeping","payments-external"],
      summary: "Settle invoice via external API",
      description: "One-shot settlement for shop/payment-provider flows: creates payment, allocates it to the invoice, and can auto-close shortfall as discount so no manual allocation step remains.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingPaymentsSettleInvoiceExternalParams;
      query: BookkeepingPaymentsSettleInvoiceExternalQuery;
      body: BookkeepingPaymentsSettleInvoiceExternalBody;
      response: BookkeepingPaymentsSettleInvoiceExternalResponse;
      responseData: BookkeepingPaymentsSettleInvoiceExternalResponseData;
    },
  },
  "bookkeeping_audit_logs": {
    method: "GET",
    path: "/bookkeeping/audit/logs",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","audit"],
      summary: "Buchungs-Audit-Protokoll",
      description: "Gibt eine paginierte Liste aller Buchungs-Audit-Einträge zurück: Sperränderungen, Zahlungsoperationen, Rechnungsänderungen, USt-Änderungen etc. Vollständiges Prüfprotokoll für das Unternehmen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingAuditLogsParams;
      query: BookkeepingAuditLogsQuery;
      body: BookkeepingAuditLogsBody;
      response: BookkeepingAuditLogsResponse;
      responseData: BookkeepingAuditLogsResponseData;
    },
  },
  "bookkeeping_locks_get_state": {
    method: "GET",
    path: "/bookkeeping/locks/state",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","locks"],
      summary: "Aktueller Buchungssperre-Status",
      description: "Gibt den aktuellen Buchungssperre-Zustand zurück: welche Periode gesperrt ist, seit wann und in welchem Modus (payments_only = nur Zahlungen blockiert, strict = alles blockiert). Basis für die Sperrübersicht im Frontend.",
    },
    types: null as unknown as {
      params: BookkeepingLocksGetStateParams;
      query: BookkeepingLocksGetStateQuery;
      body: BookkeepingLocksGetStateBody;
      response: BookkeepingLocksGetStateResponse;
      responseData: BookkeepingLocksGetStateResponseData;
    },
  },
  "bookkeeping_locks_recommendation": {
    method: "GET",
    path: "/bookkeeping/locks/recommendation",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","locks"],
      summary: "Empfohlene nächste Buchungssperre",
      description: "Berechnet dynamisch die nächste empfohlene Buchungssperre basierend auf der UStVA-Anmeldepräferenz des Unternehmens (monatlich/vierteljährlich/jährlich). Gibt die vorgeschlagene Periode, Beginn/Ende, Begründung und Readiness-Checks zurück (offene Entwürfe, nicht zugewiesene Zahlungen etc.). Das ist die 'was ist geplant'-Information für Locks.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingLocksRecommendationParams;
      query: BookkeepingLocksRecommendationQuery;
      body: BookkeepingLocksRecommendationBody;
      response: BookkeepingLocksRecommendationResponse;
      responseData: BookkeepingLocksRecommendationResponseData;
    },
  },
  "bookkeeping_locks_overview": {
    method: "GET",
    path: "/bookkeeping/locks/overview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","locks"],
      summary: "Frontend-Übersicht für Buchungssperre",
      description: "Liefert den aktuellen Sperr-UI-State inkl. Bedeutung (State-Legende), betroffener Bereiche, Modi und klarer Boundary-Regel. Diese Antwort ist speziell für eine leicht verständliche Frontend-Anzeige gedacht.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingLocksOverviewParams;
      query: BookkeepingLocksOverviewQuery;
      body: BookkeepingLocksOverviewBody;
      response: BookkeepingLocksOverviewResponse;
      responseData: BookkeepingLocksOverviewResponseData;
    },
  },
  "bookkeeping_locks_set": {
    method: "POST",
    path: "/bookkeeping/locks/set",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","locks"],
      summary: "Buchungssperre setzen oder aufheben",
      description: "Setzt eine neue Buchungssperre bis zu einem bestimmten Datum in einem gewählten Modus (payments_only oder strict), oder hebt eine bestehende Sperre auf. Erzeugt einen Eintrag im Buchungs-Audit-Log. Sollte erst nach einer positiven Empfehlung von /recommendation verwendet werden.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingLocksSetParams;
      query: BookkeepingLocksSetQuery;
      body: BookkeepingLocksSetBody;
      response: BookkeepingLocksSetResponse;
      responseData: BookkeepingLocksSetResponseData;
    },
  },
  "bookkeeping_tax_params_health": {
    method: "GET",
    path: "/bookkeeping/tax-params/health",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Tax-Parameter Health Check",
      description: "Prüft ob alle erwarteten Steuerparameter in der DB vorhanden sind. Zeigt fehlende Keys und aktuelle Werte. Status 503 wenn Parameter fehlen.",
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsHealthParams;
      query: BookkeepingTaxParamsHealthQuery;
      body: BookkeepingTaxParamsHealthBody;
      response: BookkeepingTaxParamsHealthResponse;
      responseData: BookkeepingTaxParamsHealthResponseData;
    },
  },
  "bookkeeping_tax_params_sync": {
    method: "POST",
    path: "/bookkeeping/tax-params/sync",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Tax-Parameter synchronisieren",
      description: "Fügt fehlende Seed-Daten ein ohne bestehende zu überschreiben. Sicher für Produktion – idempotent.",
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsSyncParams;
      query: BookkeepingTaxParamsSyncQuery;
      body: BookkeepingTaxParamsSyncBody;
      response: BookkeepingTaxParamsSyncResponse;
      responseData: BookkeepingTaxParamsSyncResponseData;
    },
  },
  "bookkeeping_tax_params_list": {
    method: "GET",
    path: "/bookkeeping/tax-params",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Steuerparameter auflisten",
      description: "Listet alle gesetzlichen Steuerparameter mit zeitlicher Gueltigkeit. Filterbar nach Kategorie (afa, vat, threshold, building) und Stichtag.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsListParams;
      query: BookkeepingTaxParamsListQuery;
      body: BookkeepingTaxParamsListBody;
      response: BookkeepingTaxParamsListResponse;
      responseData: BookkeepingTaxParamsListResponseData;
    },
  },
  "bookkeeping_tax_params_history": {
    method: "GET",
    path: "/bookkeeping/tax-params/:key/history",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Parameter-Aenderungshistorie",
      description: "Zeigt die vollstaendige Aenderungshistorie eines Steuerparameters (Audit-Trail).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsHistoryParams;
      query: BookkeepingTaxParamsHistoryQuery;
      body: BookkeepingTaxParamsHistoryBody;
      response: BookkeepingTaxParamsHistoryResponse;
      responseData: BookkeepingTaxParamsHistoryResponseData;
    },
  },
  "bookkeeping_tax_params_create": {
    method: "POST",
    path: "/bookkeeping/tax-params",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Neuen Steuerparameter-Zeitraum anlegen",
      description: "Erstellt einen neuen Gueltigkeitszeitraum fuer einen Steuerparameter. Setzt automatisch validTo auf dem bisherigen aktiven Eintrag. Nur Platform-Admins.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsCreateParams;
      query: BookkeepingTaxParamsCreateQuery;
      body: BookkeepingTaxParamsCreateBody;
      response: BookkeepingTaxParamsCreateResponse;
      responseData: BookkeepingTaxParamsCreateResponseData;
    },
  },
  "bookkeeping_tax_params_update": {
    method: "PATCH",
    path: "/bookkeeping/tax-params/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","tax-params"],
      summary: "Steuerparameter aendern (nur zukuenftige)",
      description: "Aendert einen noch nicht gueltigen Steuerparameter. Bereits gueltige/vergangene Parameter koennen nicht geaendert werden.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingTaxParamsUpdateParams;
      query: BookkeepingTaxParamsUpdateQuery;
      body: BookkeepingTaxParamsUpdateBody;
      response: BookkeepingTaxParamsUpdateResponse;
      responseData: BookkeepingTaxParamsUpdateResponseData;
    },
  },
  "bookkeeping_income_tax_get_settings": {
    method: "GET",
    path: "/bookkeeping/income-tax/settings",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "ESt-Einstellungen laden",
      description: "Laedt die Einkommensteuer-Einstellungen (Bundesland, Kirchensteuer, Gewerbesteuer-Hebesatz, Vorauszahlungen, etc.) fuer das ausgewaehlte Unternehmen.",
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxGetSettingsParams;
      query: BookkeepingIncomeTaxGetSettingsQuery;
      body: BookkeepingIncomeTaxGetSettingsBody;
      response: BookkeepingIncomeTaxGetSettingsResponse;
      responseData: BookkeepingIncomeTaxGetSettingsResponseData;
    },
  },
  "bookkeeping_income_tax_upsert_settings": {
    method: "POST",
    path: "/bookkeeping/income-tax/settings",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "ESt-Einstellungen speichern",
      description: "Erstellt oder aktualisiert die Einkommensteuer-Einstellungen fuer das ausgewaehlte Unternehmen. Alle Felder sind optional; vorhandene Werte werden ueberschrieben.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpsertSettingsParams;
      query: BookkeepingIncomeTaxUpsertSettingsQuery;
      body: BookkeepingIncomeTaxUpsertSettingsBody;
      response: BookkeepingIncomeTaxUpsertSettingsResponse;
      responseData: BookkeepingIncomeTaxUpsertSettingsResponseData;
    },
  },
  "bookkeeping_income_tax_list_employment": {
    method: "GET",
    path: "/bookkeeping/income-tax/employment",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Angestellteneinkommen auflisten",
      description: "Listet alle erfassten Angestellteneinkommen fuer ein Steuerjahr auf.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxListEmploymentParams;
      query: BookkeepingIncomeTaxListEmploymentQuery;
      body: BookkeepingIncomeTaxListEmploymentBody;
      response: BookkeepingIncomeTaxListEmploymentResponse;
      responseData: BookkeepingIncomeTaxListEmploymentResponseData;
    },
  },
  "bookkeeping_income_tax_get_employment": {
    method: "GET",
    path: "/bookkeeping/income-tax/employment/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Angestellteneinkommen nach ID laden",
      description: "Laedt ein einzelnes Angestellteneinkommen anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxGetEmploymentParams;
      query: BookkeepingIncomeTaxGetEmploymentQuery;
      body: BookkeepingIncomeTaxGetEmploymentBody;
      response: BookkeepingIncomeTaxGetEmploymentResponse;
      responseData: BookkeepingIncomeTaxGetEmploymentResponseData;
    },
  },
  "bookkeeping_income_tax_create_employment": {
    method: "POST",
    path: "/bookkeeping/income-tax/employment",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Angestellteneinkommen anlegen",
      description: "Erstellt ein neues Angestellteneinkommen (Lohnsteuerbescheinigung). Alle Betraege koennen als String oder Zahl uebergeben werden.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxCreateEmploymentParams;
      query: BookkeepingIncomeTaxCreateEmploymentQuery;
      body: BookkeepingIncomeTaxCreateEmploymentBody;
      response: BookkeepingIncomeTaxCreateEmploymentResponse;
      responseData: BookkeepingIncomeTaxCreateEmploymentResponseData;
    },
  },
  "bookkeeping_income_tax_update_employment": {
    method: "PUT",
    path: "/bookkeeping/income-tax/employment/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Angestellteneinkommen aktualisieren",
      description: "Aktualisiert ein bestehendes Angestellteneinkommen. Alle Felder sind optional (Partial Update).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpdateEmploymentParams;
      query: BookkeepingIncomeTaxUpdateEmploymentQuery;
      body: BookkeepingIncomeTaxUpdateEmploymentBody;
      response: BookkeepingIncomeTaxUpdateEmploymentResponse;
      responseData: BookkeepingIncomeTaxUpdateEmploymentResponseData;
    },
  },
  "bookkeeping_income_tax_delete_employment": {
    method: "DELETE",
    path: "/bookkeeping/income-tax/employment/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Angestellteneinkommen loeschen",
      description: "Loescht ein Angestellteneinkommen anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxDeleteEmploymentParams;
      query: BookkeepingIncomeTaxDeleteEmploymentQuery;
      body: BookkeepingIncomeTaxDeleteEmploymentBody;
      response: BookkeepingIncomeTaxDeleteEmploymentResponse;
      responseData: BookkeepingIncomeTaxDeleteEmploymentResponseData;
    },
  },
  "bookkeeping_income_tax_list_werbungskosten": {
    method: "GET",
    path: "/bookkeeping/income-tax/werbungskosten",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Werbungskosten auflisten",
      description: "Listet alle erfassten Werbungskosten fuer ein Steuerjahr auf.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxListWerbungskostenParams;
      query: BookkeepingIncomeTaxListWerbungskostenQuery;
      body: BookkeepingIncomeTaxListWerbungskostenBody;
      response: BookkeepingIncomeTaxListWerbungskostenResponse;
      responseData: BookkeepingIncomeTaxListWerbungskostenResponseData;
    },
  },
  "bookkeeping_income_tax_create_werbungskosten": {
    method: "POST",
    path: "/bookkeeping/income-tax/werbungskosten",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Werbungskosten anlegen",
      description: "Erstellt einen neuen Werbungskosten-Eintrag (Entfernungspauschale, Homeoffice, Arbeitsmittel, etc.).",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxCreateWerbungskostenParams;
      query: BookkeepingIncomeTaxCreateWerbungskostenQuery;
      body: BookkeepingIncomeTaxCreateWerbungskostenBody;
      response: BookkeepingIncomeTaxCreateWerbungskostenResponse;
      responseData: BookkeepingIncomeTaxCreateWerbungskostenResponseData;
    },
  },
  "bookkeeping_income_tax_update_werbungskosten": {
    method: "PUT",
    path: "/bookkeeping/income-tax/werbungskosten/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Werbungskosten aktualisieren",
      description: "Aktualisiert einen bestehenden Werbungskosten-Eintrag.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpdateWerbungskostenParams;
      query: BookkeepingIncomeTaxUpdateWerbungskostenQuery;
      body: BookkeepingIncomeTaxUpdateWerbungskostenBody;
      response: BookkeepingIncomeTaxUpdateWerbungskostenResponse;
      responseData: BookkeepingIncomeTaxUpdateWerbungskostenResponseData;
    },
  },
  "bookkeeping_income_tax_delete_werbungskosten": {
    method: "DELETE",
    path: "/bookkeeping/income-tax/werbungskosten/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Werbungskosten loeschen",
      description: "Loescht einen Werbungskosten-Eintrag anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxDeleteWerbungskostenParams;
      query: BookkeepingIncomeTaxDeleteWerbungskostenQuery;
      body: BookkeepingIncomeTaxDeleteWerbungskostenBody;
      response: BookkeepingIncomeTaxDeleteWerbungskostenResponse;
      responseData: BookkeepingIncomeTaxDeleteWerbungskostenResponseData;
    },
  },
  "bookkeeping_income_tax_list_sonderausgaben": {
    method: "GET",
    path: "/bookkeeping/income-tax/sonderausgaben",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Sonderausgaben auflisten",
      description: "Listet alle erfassten Sonderausgaben fuer ein Steuerjahr auf.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxListSonderausgabenParams;
      query: BookkeepingIncomeTaxListSonderausgabenQuery;
      body: BookkeepingIncomeTaxListSonderausgabenBody;
      response: BookkeepingIncomeTaxListSonderausgabenResponse;
      responseData: BookkeepingIncomeTaxListSonderausgabenResponseData;
    },
  },
  "bookkeeping_income_tax_create_sonderausgaben": {
    method: "POST",
    path: "/bookkeeping/income-tax/sonderausgaben",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Sonderausgaben anlegen",
      description: "Erstellt einen neuen Sonderausgaben-Eintrag (Kirchensteuer, Spenden, Ausbildungskosten, etc.).",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxCreateSonderausgabenParams;
      query: BookkeepingIncomeTaxCreateSonderausgabenQuery;
      body: BookkeepingIncomeTaxCreateSonderausgabenBody;
      response: BookkeepingIncomeTaxCreateSonderausgabenResponse;
      responseData: BookkeepingIncomeTaxCreateSonderausgabenResponseData;
    },
  },
  "bookkeeping_income_tax_update_sonderausgaben": {
    method: "PUT",
    path: "/bookkeeping/income-tax/sonderausgaben/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Sonderausgaben aktualisieren",
      description: "Aktualisiert einen bestehenden Sonderausgaben-Eintrag.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpdateSonderausgabenParams;
      query: BookkeepingIncomeTaxUpdateSonderausgabenQuery;
      body: BookkeepingIncomeTaxUpdateSonderausgabenBody;
      response: BookkeepingIncomeTaxUpdateSonderausgabenResponse;
      responseData: BookkeepingIncomeTaxUpdateSonderausgabenResponseData;
    },
  },
  "bookkeeping_income_tax_delete_sonderausgaben": {
    method: "DELETE",
    path: "/bookkeeping/income-tax/sonderausgaben/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Sonderausgaben loeschen",
      description: "Loescht einen Sonderausgaben-Eintrag anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxDeleteSonderausgabenParams;
      query: BookkeepingIncomeTaxDeleteSonderausgabenQuery;
      body: BookkeepingIncomeTaxDeleteSonderausgabenBody;
      response: BookkeepingIncomeTaxDeleteSonderausgabenResponse;
      responseData: BookkeepingIncomeTaxDeleteSonderausgabenResponseData;
    },
  },
  "bookkeeping_income_tax_list_vorsorge": {
    method: "GET",
    path: "/bookkeeping/income-tax/vorsorge",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Vorsorgeaufwendungen auflisten",
      description: "Listet alle erfassten Vorsorgeaufwendungen fuer ein Steuerjahr auf.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxListVorsorgeParams;
      query: BookkeepingIncomeTaxListVorsorgeQuery;
      body: BookkeepingIncomeTaxListVorsorgeBody;
      response: BookkeepingIncomeTaxListVorsorgeResponse;
      responseData: BookkeepingIncomeTaxListVorsorgeResponseData;
    },
  },
  "bookkeeping_income_tax_create_vorsorge": {
    method: "POST",
    path: "/bookkeeping/income-tax/vorsorge",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Vorsorgeaufwendungen anlegen",
      description: "Erstellt einen neuen Vorsorgeaufwendungen-Eintrag (Krankenversicherung, Rentenversicherung, Haftpflicht, etc.).",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxCreateVorsorgeParams;
      query: BookkeepingIncomeTaxCreateVorsorgeQuery;
      body: BookkeepingIncomeTaxCreateVorsorgeBody;
      response: BookkeepingIncomeTaxCreateVorsorgeResponse;
      responseData: BookkeepingIncomeTaxCreateVorsorgeResponseData;
    },
  },
  "bookkeeping_income_tax_update_vorsorge": {
    method: "PUT",
    path: "/bookkeeping/income-tax/vorsorge/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Vorsorgeaufwendungen aktualisieren",
      description: "Aktualisiert einen bestehenden Vorsorgeaufwendungen-Eintrag.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpdateVorsorgeParams;
      query: BookkeepingIncomeTaxUpdateVorsorgeQuery;
      body: BookkeepingIncomeTaxUpdateVorsorgeBody;
      response: BookkeepingIncomeTaxUpdateVorsorgeResponse;
      responseData: BookkeepingIncomeTaxUpdateVorsorgeResponseData;
    },
  },
  "bookkeeping_income_tax_delete_vorsorge": {
    method: "DELETE",
    path: "/bookkeeping/income-tax/vorsorge/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Vorsorgeaufwendungen loeschen",
      description: "Loescht einen Vorsorgeaufwendungen-Eintrag anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxDeleteVorsorgeParams;
      query: BookkeepingIncomeTaxDeleteVorsorgeQuery;
      body: BookkeepingIncomeTaxDeleteVorsorgeBody;
      response: BookkeepingIncomeTaxDeleteVorsorgeResponse;
      responseData: BookkeepingIncomeTaxDeleteVorsorgeResponseData;
    },
  },
  "bookkeeping_income_tax_list_steuerminderungen": {
    method: "GET",
    path: "/bookkeeping/income-tax/steuerminderungen",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Steuerminderungen auflisten",
      description: "Listet alle erfassten Steuerminderungen (§35a EStG) fuer ein Steuerjahr auf.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxListSteuerminderungenParams;
      query: BookkeepingIncomeTaxListSteuerminderungenQuery;
      body: BookkeepingIncomeTaxListSteuerminderungenBody;
      response: BookkeepingIncomeTaxListSteuerminderungenResponse;
      responseData: BookkeepingIncomeTaxListSteuerminderungenResponseData;
    },
  },
  "bookkeeping_income_tax_create_steuerminderungen": {
    method: "POST",
    path: "/bookkeeping/income-tax/steuerminderungen",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Steuerminderungen anlegen",
      description: "Erstellt einen neuen Steuerminderungen-Eintrag (haushaltsnahe Dienstleistungen, Handwerkerleistungen, energetische Sanierung).",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxCreateSteuerminderungenParams;
      query: BookkeepingIncomeTaxCreateSteuerminderungenQuery;
      body: BookkeepingIncomeTaxCreateSteuerminderungenBody;
      response: BookkeepingIncomeTaxCreateSteuerminderungenResponse;
      responseData: BookkeepingIncomeTaxCreateSteuerminderungenResponseData;
    },
  },
  "bookkeeping_income_tax_update_steuerminderungen": {
    method: "PUT",
    path: "/bookkeeping/income-tax/steuerminderungen/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Steuerminderungen aktualisieren",
      description: "Aktualisiert einen bestehenden Steuerminderungen-Eintrag.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxUpdateSteuerminderungenParams;
      query: BookkeepingIncomeTaxUpdateSteuerminderungenQuery;
      body: BookkeepingIncomeTaxUpdateSteuerminderungenBody;
      response: BookkeepingIncomeTaxUpdateSteuerminderungenResponse;
      responseData: BookkeepingIncomeTaxUpdateSteuerminderungenResponseData;
    },
  },
  "bookkeeping_income_tax_delete_steuerminderungen": {
    method: "DELETE",
    path: "/bookkeeping/income-tax/steuerminderungen/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Steuerminderungen loeschen",
      description: "Loescht einen Steuerminderungen-Eintrag anhand seiner ID.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxDeleteSteuerminderungenParams;
      query: BookkeepingIncomeTaxDeleteSteuerminderungenQuery;
      body: BookkeepingIncomeTaxDeleteSteuerminderungenBody;
      response: BookkeepingIncomeTaxDeleteSteuerminderungenResponse;
      responseData: BookkeepingIncomeTaxDeleteSteuerminderungenResponseData;
    },
  },
  "bookkeeping_income_tax_get_estimate": {
    method: "GET",
    path: "/bookkeeping/income-tax/estimate",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "ESt-Schaetzung berechnen",
      description: "Berechnet die vollstaendige Einkommensteuer-Schaetzung fuer ein Steuerjahr. Beruecksichtigt EUeR-Gewinn, Angestellteneinkommen, alle Abzuege und Vorauszahlungen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxGetEstimateParams;
      query: BookkeepingIncomeTaxGetEstimateQuery;
      body: BookkeepingIncomeTaxGetEstimateBody;
      response: BookkeepingIncomeTaxGetEstimateResponse;
      responseData: BookkeepingIncomeTaxGetEstimateResponseData;
    },
  },
  "bookkeeping_income_tax_get_vorauszahlungen": {
    method: "GET",
    path: "/bookkeeping/income-tax/vorauszahlungen",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "Vorauszahlungen berechnen",
      description: "Berechnet die empfohlenen quartalsweisen Steuervorauszahlungen (ESt, Soli, KiSt) basierend auf der aktuellen Schaetzung.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxGetVorauszahlungenParams;
      query: BookkeepingIncomeTaxGetVorauszahlungenQuery;
      body: BookkeepingIncomeTaxGetVorauszahlungenBody;
      response: BookkeepingIncomeTaxGetVorauszahlungenResponse;
      responseData: BookkeepingIncomeTaxGetVorauszahlungenResponseData;
    },
  },
  "bookkeeping_income_tax_get_summary": {
    method: "GET",
    path: "/bookkeeping/income-tax/summary",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","income-tax"],
      summary: "ESt-Zusammenfassung",
      description: "Gibt eine kompakte Zusammenfassung der Steuerberechnung zurueck: zvE, ESt, Soli, KiSt, GewSt, Gesamtlast und Nachzahlung/Erstattung.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIncomeTaxGetSummaryParams;
      query: BookkeepingIncomeTaxGetSummaryQuery;
      body: BookkeepingIncomeTaxGetSummaryBody;
      response: BookkeepingIncomeTaxGetSummaryResponse;
      responseData: BookkeepingIncomeTaxGetSummaryResponseData;
    },
  },
  "reconciliation_dashboard": {
    method: "GET",
    path: "/bookkeeping/reconciliation/dashboard",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Reconciliation Dashboard",
      description: "Übersicht aller nicht zugeordneten Zahlungen, Rechnungen, Ausgaben und Einnahmen mit Summen und Anzahlen. SumUp-Terminal-Konten werden automatisch ausgeschlossen. Mit estimateActionCounts=true werden zusätzlich Provider-Payout-Counts geschätzt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ReconciliationDashboardParams;
      query: ReconciliationDashboardQuery;
      body: ReconciliationDashboardBody;
      response: ReconciliationDashboardResponse;
      responseData: ReconciliationDashboardResponseData;
    },
  },
  "reconciliation_queue": {
    method: "GET",
    path: "/bookkeeping/reconciliation/queue",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Smart Reconciliation Queue",
      description: "Payment-zentrierte Queue: Zeigt nicht zugeordnete Zahlungen mit ihrem besten Match-Vorschlag, priorisiert nach Confidence, Betrag und Alter. Leitet den User durch die Zuordnungsarbeit.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ReconciliationQueueParams;
      query: ReconciliationQueueQuery;
      body: ReconciliationQueueBody;
      response: ReconciliationQueueResponse;
      responseData: ReconciliationQueueResponseData;
    },
  },
  "reconciliation_batch_suggestions": {
    method: "POST",
    path: "/bookkeeping/reconciliation/batch-suggestions",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Batch Match-Vorschläge",
      description: "Gibt Match-Vorschläge für bis zu 20 Zahlungen gleichzeitig zurück. Effizienter als Einzelabfragen.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ReconciliationBatchSuggestionsParams;
      query: ReconciliationBatchSuggestionsQuery;
      body: ReconciliationBatchSuggestionsBody;
      response: ReconciliationBatchSuggestionsResponse;
      responseData: ReconciliationBatchSuggestionsResponseData;
    },
  },
  "reconciliation_auto_match_preview": {
    method: "GET",
    path: "/bookkeeping/reconciliation/auto-match/preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Auto-Match Vorschau",
      description: "Zeigt alle High-Confidence Match-Kandidaten (Score >= minScore) als Vorschau. Der User kann diese dann per Confirm-Endpoint bestätigen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ReconciliationAutoMatchPreviewParams;
      query: ReconciliationAutoMatchPreviewQuery;
      body: ReconciliationAutoMatchPreviewBody;
      response: ReconciliationAutoMatchPreviewResponse;
      responseData: ReconciliationAutoMatchPreviewResponseData;
    },
  },
  "reconciliation_auto_match_confirm": {
    method: "POST",
    path: "/bookkeeping/reconciliation/auto-match/confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Auto-Match Bestätigen",
      description: "Führt die ausgewählten Auto-Match-Zuordnungen durch. Nutzt intern die bestehende Allocate-Logik für GoBD-Compliance.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ReconciliationAutoMatchConfirmParams;
      query: ReconciliationAutoMatchConfirmQuery;
      body: ReconciliationAutoMatchConfirmBody;
      response: ReconciliationAutoMatchConfirmResponse;
      responseData: ReconciliationAutoMatchConfirmResponseData;
    },
  },
  "reconciliation_confirm_provider_payout": {
    method: "POST",
    path: "/bookkeeping/reconciliation/confirm-provider-payout",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Provider-Payout bestätigen",
      description: "Verknüpft eine Bank-Einzahlung mit einem Provider-Payout (z.B. SumUp). Falls kein Payout-Record existiert, wird ein aggregierter Payout aus den Terminal-Transaktionen erstellt und per Transfer-Link verknüpft.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ReconciliationConfirmProviderPayoutParams;
      query: ReconciliationConfirmProviderPayoutQuery;
      body: ReconciliationConfirmProviderPayoutBody;
      response: ReconciliationConfirmProviderPayoutResponse;
      responseData: ReconciliationConfirmProviderPayoutResponseData;
    },
  },
  "reconciliation_groups": {
    method: "GET",
    path: "/bookkeeping/reconciliation/groups",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","reconciliation"],
      summary: "Split-Payment-Gruppenerkennung",
      description: "Erkennt Gruppen von Zahlungen vom selben Counterparty die zusammen einen offenen Betrag (Rechnung/Ausgabe) ergeben könnten. Hilfreich für Ratenzahlungen und Split-Payments.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ReconciliationGroupsParams;
      query: ReconciliationGroupsQuery;
      body: ReconciliationGroupsBody;
      response: ReconciliationGroupsResponse;
      responseData: ReconciliationGroupsResponseData;
    },
  },
  "bookkeeping_capital_movements_search": {
    method: "GET",
    path: "/bookkeeping/capital-movements",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegungen suchen",
      description: "Paginierte Suche über Privatentnahmen und Privateinlagen mit Filteroptionen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsSearchParams;
      query: BookkeepingCapitalMovementsSearchQuery;
      body: BookkeepingCapitalMovementsSearchBody;
      response: BookkeepingCapitalMovementsSearchResponse;
      responseData: BookkeepingCapitalMovementsSearchResponseData;
    },
  },
  "bookkeeping_capital_movements_kapitalkonto": {
    method: "GET",
    path: "/bookkeeping/capital-movements/kapitalkonto",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalkonto abrufen",
      description: "Aggregierte Entnahmen und Einlagen für ein Steuerjahr (Anlage EÜR Zeile 122-125).",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsKapitalkontoParams;
      query: BookkeepingCapitalMovementsKapitalkontoQuery;
      body: BookkeepingCapitalMovementsKapitalkontoBody;
      response: BookkeepingCapitalMovementsKapitalkontoResponse;
      responseData: BookkeepingCapitalMovementsKapitalkontoResponseData;
    },
  },
  "bookkeeping_capital_movements_get_by_id": {
    method: "GET",
    path: "/bookkeeping/capital-movements/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung nach ID",
      description: "Lädt eine einzelne Privatentnahme oder Privateinlage.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsGetByIdParams;
      query: BookkeepingCapitalMovementsGetByIdQuery;
      body: BookkeepingCapitalMovementsGetByIdBody;
      response: BookkeepingCapitalMovementsGetByIdResponse;
      responseData: BookkeepingCapitalMovementsGetByIdResponseData;
    },
  },
  "bookkeeping_capital_movements_create": {
    method: "POST",
    path: "/bookkeeping/capital-movements",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung erstellen",
      description: "Erstellt eine neue Privatentnahme oder Privateinlage.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsCreateParams;
      query: BookkeepingCapitalMovementsCreateQuery;
      body: BookkeepingCapitalMovementsCreateBody;
      response: BookkeepingCapitalMovementsCreateResponse;
      responseData: BookkeepingCapitalMovementsCreateResponseData;
    },
  },
  "bookkeeping_capital_movements_update": {
    method: "PATCH",
    path: "/bookkeeping/capital-movements/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung aktualisieren",
      description: "Aktualisiert eine bestehende Kapitalbewegung. Bestätigte Einträge in gesperrten Perioden sind blockiert.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsUpdateParams;
      query: BookkeepingCapitalMovementsUpdateQuery;
      body: BookkeepingCapitalMovementsUpdateBody;
      response: BookkeepingCapitalMovementsUpdateResponse;
      responseData: BookkeepingCapitalMovementsUpdateResponseData;
    },
  },
  "bookkeeping_capital_movements_confirm": {
    method: "POST",
    path: "/bookkeeping/capital-movements/:id/confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung bestätigen",
      description: "Bestätigt die Datenqualität einer Kapitalbewegung.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsConfirmParams;
      query: BookkeepingCapitalMovementsConfirmQuery;
      body: BookkeepingCapitalMovementsConfirmBody;
      response: BookkeepingCapitalMovementsConfirmResponse;
      responseData: BookkeepingCapitalMovementsConfirmResponseData;
    },
  },
  "bookkeeping_capital_movements_cash_confirm": {
    method: "POST",
    path: "/bookkeeping/capital-movements/:id/cash-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Barzahlung bestätigen",
      description: "Markiert eine Kapitalbewegung als bar/direkt abgewickelt. Setzt eurEffectiveDate für das Kapitalkonto.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsCashConfirmParams;
      query: BookkeepingCapitalMovementsCashConfirmQuery;
      body: BookkeepingCapitalMovementsCashConfirmBody;
      response: BookkeepingCapitalMovementsCashConfirmResponse;
      responseData: BookkeepingCapitalMovementsCashConfirmResponseData;
    },
  },
  "bookkeeping_capital_movements_revoke_cash_confirm": {
    method: "POST",
    path: "/bookkeeping/capital-movements/:id/revoke-cash-confirm",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Cash-Confirm widerrufen",
      description: "Widerruft die Barzahlungs-Bestätigung.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsRevokeCashConfirmParams;
      query: BookkeepingCapitalMovementsRevokeCashConfirmQuery;
      body: BookkeepingCapitalMovementsRevokeCashConfirmBody;
      response: BookkeepingCapitalMovementsRevokeCashConfirmResponse;
      responseData: BookkeepingCapitalMovementsRevokeCashConfirmResponseData;
    },
  },
  "bookkeeping_capital_movements_reverse": {
    method: "POST",
    path: "/bookkeeping/capital-movements/:id/reverse",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung stornieren (GoBD)",
      description: "Erstellt eine GoBD-konforme Gegenbuchung. Das Original wird als storniert markiert.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsReverseParams;
      query: BookkeepingCapitalMovementsReverseQuery;
      body: BookkeepingCapitalMovementsReverseBody;
      response: BookkeepingCapitalMovementsReverseResponse;
      responseData: BookkeepingCapitalMovementsReverseResponseData;
    },
  },
  "bookkeeping_capital_movements_delete": {
    method: "DELETE",
    path: "/bookkeeping/capital-movements/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","capital-movements"],
      summary: "Kapitalbewegung löschen",
      description: "Soft-Delete einer Kapitalbewegung (GoBD-konform).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingCapitalMovementsDeleteParams;
      query: BookkeepingCapitalMovementsDeleteQuery;
      body: BookkeepingCapitalMovementsDeleteBody;
      response: BookkeepingCapitalMovementsDeleteResponse;
      responseData: BookkeepingCapitalMovementsDeleteResponseData;
    },
  },
  "bookkeeping_iap_payouts_import": {
    method: "POST",
    path: "/bookkeeping/iap-payouts/import",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","iap-payouts"],
      summary: "Apple/Google IAP-Auszahlung importieren",
      description: "Importiert eine monatliche Apple- oder Google-IAP-Auszahlung. Idempotent über externalRef = rc_payout_<period>_<platform>. Default-Quelle ist die RevenueCat-API (env: REVENUECAT_SECRET_API_KEY, REVENUECAT_PROJECT_ID); alternativ kann der Caller die Werte im Body unter `period` direkt mitliefern (manueller CSV-Import-Fallback). Bucht eine bookkeepingRevenue mit vatTreatment=REVERSE_CHARGE_13B in der Kategorie saas_revenue_apple_iap bzw. saas_revenue_google_iap.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: BookkeepingIapPayoutsImportParams;
      query: BookkeepingIapPayoutsImportQuery;
      body: BookkeepingIapPayoutsImportBody;
      response: BookkeepingIapPayoutsImportResponse;
      responseData: BookkeepingIapPayoutsImportResponseData;
    },
  },
  "bookkeeping_iap_payouts_list": {
    method: "GET",
    path: "/bookkeeping/iap-payouts",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["bookkeeping","iap-payouts"],
      summary: "IAP-Auszahlungs-Imports auflisten",
      description: "Liste aller importierten Apple/Google-Auszahlungs-Belege für die gewählte Firma. Optional filterbar nach Jahr und Plattform.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: BookkeepingIapPayoutsListParams;
      query: BookkeepingIapPayoutsListQuery;
      body: BookkeepingIapPayoutsListBody;
      response: BookkeepingIapPayoutsListResponse;
      responseData: BookkeepingIapPayoutsListResponseData;
    },
  },
} as const;