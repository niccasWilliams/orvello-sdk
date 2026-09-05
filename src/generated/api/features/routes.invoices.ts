// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.589Z
// Run `pnpm run api:generate` to regenerate

import type { CustomerCompany, Invoice, PaginatedResult } from "../../frontend-types";

export type InvoiceDunningSuggestionsParams = undefined;
export type InvoiceDunningSuggestionsQuery = {
  asOf?: string;
  limit?: number;
};
export type InvoiceDunningSuggestionsBody = undefined;
export type InvoiceDunningSuggestionsResponseData = {
  asOf: string;
  items: Array<{
  invoiceId: number;
  invoiceNumber: string;
  status: string;
  dueDate: string;
  daysOverdue: number;
  currency: string;
  invoiceTotal: string;
  openAmount: string;
  suggestedLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeLevel: "level0" | "level1" | "level2" | "level3" | null;
  latestNoticeAt: string | null;
}>;
};
export type InvoiceDunningSuggestionsResponse = import("../types").ApiEnvelope<InvoiceDunningSuggestionsResponseData>;

export type InvoiceDunningListNoticesParams = {
  invoiceId: number;
};
export type InvoiceDunningListNoticesQuery = undefined;
export type InvoiceDunningListNoticesBody = undefined;
export type InvoiceDunningListNoticesResponseData = {
  invoiceId: number;
  notices: Array<{
  id: number;
  managingCompanyId: number;
  invoiceId: number;
  documentId?: number | null;
  level: "level1" | "level2" | "level3";
  delivery: "manual" | "email" | "letter";
  issuedAt: string;
  issuedBy?: number | null;
  asOf: string;
  daysOverdue: number;
  invoiceTotal: string;
  openAmount: string;
  currency: string;
  interestAmount: string;
  feeAmount: string;
  lumpSum40Amount: string;
  totalClaimed: string;
  baseRateUsed?: string | null;
  statutoryRateUsed?: string | null;
  subject?: string | null;
  body?: string | null;
  createdAt: string;
  isPaymentReminder?: boolean;
}>;
  totalCount: number;
};
export type InvoiceDunningListNoticesResponse = import("../types").ApiEnvelope<InvoiceDunningListNoticesResponseData>;

export type InvoiceDunningPreviewParams = {
  invoiceId: number;
};
export type InvoiceDunningPreviewQuery = undefined;
export type InvoiceDunningPreviewBody = {
  asOf?: string;
  level?: "level0" | "level1" | "level2" | "level3";
};
export type InvoiceDunningPreviewResponseData = {
  invoiceId: number;
  invoiceNumber: string;
  dueDate: string;
  asOf: string;
  daysOverdue: number;
  currency: string;
  invoiceTotal: string;
  openAmount: string;
  level: "level0" | "level1" | "level2" | "level3";
  feeAmount: string;
  interestAmount: string;
  lumpSum40Amount: string;
  totalClaimed: string;
  statutoryRateUsed: string;
  baseRateUsed: string;
  notes: Array<string>;
  isPaymentReminder: boolean;
};
export type InvoiceDunningPreviewResponse = import("../types").ApiEnvelope<InvoiceDunningPreviewResponseData>;

export type InvoiceDunningIssueParams = {
  invoiceId: number;
};
export type InvoiceDunningIssueQuery = undefined;
export type InvoiceDunningIssueBody = {
  asOf?: string;
  level: "level0" | "level1" | "level2" | "level3";
  delivery?: "manual" | "email" | "letter";
  subject?: string;
  body?: string;
};
export type InvoiceDunningIssueResponseData = {
  notice: {
  id: number;
  managingCompanyId: number;
  invoiceId: number;
  documentId?: number | null;
  level: "level1" | "level2" | "level3";
  delivery: "manual" | "email" | "letter";
  issuedAt: string;
  issuedBy?: number | null;
  asOf: string;
  daysOverdue: number;
  invoiceTotal: string;
  openAmount: string;
  currency: string;
  interestAmount: string;
  feeAmount: string;
  lumpSum40Amount: string;
  totalClaimed: string;
  baseRateUsed?: string | null;
  statutoryRateUsed?: string | null;
  subject?: string | null;
  body?: string | null;
  createdAt: string;
  isPaymentReminder?: boolean;
};
  preview: {
  invoiceId: number;
  invoiceNumber: string;
  dueDate: string;
  asOf: string;
  daysOverdue: number;
  currency: string;
  invoiceTotal: string;
  openAmount: string;
  level: "level0" | "level1" | "level2" | "level3";
  feeAmount: string;
  interestAmount: string;
  lumpSum40Amount: string;
  totalClaimed: string;
  statutoryRateUsed: string;
  baseRateUsed: string;
  notes: Array<string>;
  isPaymentReminder: boolean;
};
  document: {
  id: number;
  managingCompanyId: number;
  costCenterId: number | null;
  createdAt: string;
  updatedAt: string | null;
  fileName: string;
  fileType: string;
  fileSizeBytes: number;
  s3Key: string;
  uploadedBy: number | null;
  isLocked: boolean;
};
};
export type InvoiceDunningIssueResponse = import("../types").ApiEnvelope<InvoiceDunningIssueResponseData>;

export type InvoiceDunningNoticePdfParams = {
  noticeId: number;
};
export type InvoiceDunningNoticePdfQuery = undefined;
export type InvoiceDunningNoticePdfBody = undefined;
export type InvoiceDunningNoticePdfResponseData = Blob;
export type InvoiceDunningNoticePdfResponse = Blob;

export type InvoiceDunningNoticeDownloadParams = {
  noticeId: number;
};
export type InvoiceDunningNoticeDownloadQuery = undefined;
export type InvoiceDunningNoticeDownloadBody = undefined;
export type InvoiceDunningNoticeDownloadResponseData = Blob;
export type InvoiceDunningNoticeDownloadResponse = Blob;

export type InvoiceDunningDeleteNoticeParams = {
  invoiceId: string;
  noticeId: string;
};
export type InvoiceDunningDeleteNoticeQuery = undefined;
export type InvoiceDunningDeleteNoticeBody = undefined;
export type InvoiceDunningDeleteNoticeResponseData = null;
export type InvoiceDunningDeleteNoticeResponse = import("../types").ApiEnvelope<InvoiceDunningDeleteNoticeResponseData>;

export type InvoiceDunningGetSettingsParams = undefined;
export type InvoiceDunningGetSettingsQuery = {

};
export type InvoiceDunningGetSettingsBody = undefined;
export type InvoiceDunningGetSettingsResponseData = {
  id: number;
  managingCompanyId: number;
  isEnabled: boolean;
  reminderEnabled: boolean;
  reminderAfterDays: number;
  level1AfterDays: number;
  level2AfterDays: number;
  level3AfterDays: number;
  feeLevel1: string;
  feeLevel2: string;
  feeLevel3: string;
  interestEnabled: boolean;
  baseRate: string;
  statutoryMarginB2B: string;
  statutoryMarginConsumer: string;
  lumpSum40Enabled: boolean;
  emailEnabled: boolean;
  emailFromName: string | null;
  emailReplyToAddress: string | null;
  emailSubjectLevel0: string | null;
  emailBodyLevel0: string | null;
  emailSubjectLevel1: string | null;
  emailBodyLevel1: string | null;
  emailSubjectLevel2: string | null;
  emailBodyLevel2: string | null;
  emailSubjectLevel3: string | null;
  emailBodyLevel3: string | null;
};
export type InvoiceDunningGetSettingsResponse = import("../types").ApiEnvelope<InvoiceDunningGetSettingsResponseData>;

export type InvoiceDunningUpdateSettingsParams = undefined;
export type InvoiceDunningUpdateSettingsQuery = undefined;
export type InvoiceDunningUpdateSettingsBody = {
  isEnabled?: boolean;
  reminderEnabled?: boolean;
  reminderAfterDays?: number;
  level1AfterDays?: number;
  level2AfterDays?: number;
  level3AfterDays?: number;
  feeLevel1?: string;
  feeLevel2?: string;
  feeLevel3?: string;
  interestEnabled?: boolean;
  baseRate?: string;
  statutoryMarginB2B?: string;
  statutoryMarginConsumer?: string;
  lumpSum40Enabled?: boolean;
  emailEnabled?: boolean;
  emailFromName?: string | null;
  emailReplyToAddress?: string | null;
  emailSubjectLevel0?: string | null;
  emailBodyLevel0?: string | null;
  emailSubjectLevel1?: string | null;
  emailBodyLevel1?: string | null;
  emailSubjectLevel2?: string | null;
  emailBodyLevel2?: string | null;
  emailSubjectLevel3?: string | null;
  emailBodyLevel3?: string | null;
};
export type InvoiceDunningUpdateSettingsResponseData = {
  id: number;
  managingCompanyId: number;
  isEnabled: boolean;
  reminderEnabled: boolean;
  reminderAfterDays: number;
  level1AfterDays: number;
  level2AfterDays: number;
  level3AfterDays: number;
  feeLevel1: string;
  feeLevel2: string;
  feeLevel3: string;
  interestEnabled: boolean;
  baseRate: string;
  statutoryMarginB2B: string;
  statutoryMarginConsumer: string;
  lumpSum40Enabled: boolean;
  emailEnabled: boolean;
  emailFromName: string | null;
  emailReplyToAddress: string | null;
  emailSubjectLevel0: string | null;
  emailBodyLevel0: string | null;
  emailSubjectLevel1: string | null;
  emailBodyLevel1: string | null;
  emailSubjectLevel2: string | null;
  emailBodyLevel2: string | null;
  emailSubjectLevel3: string | null;
  emailBodyLevel3: string | null;
};
export type InvoiceDunningUpdateSettingsResponse = import("../types").ApiEnvelope<InvoiceDunningUpdateSettingsResponseData>;

export type InvoicesViewPdfParams = {
  invoiceId: number;
};
export type InvoicesViewPdfQuery = {
  token: string;
};
export type InvoicesViewPdfBody = undefined;
export type InvoicesViewPdfResponseData = Blob;
export type InvoicesViewPdfResponse = Blob;

export type InvoicesDownloadPdfParams = {
  invoiceId: number;
};
export type InvoicesDownloadPdfQuery = {
  token: string;
};
export type InvoicesDownloadPdfBody = undefined;
export type InvoicesDownloadPdfResponseData = Blob;
export type InvoicesDownloadPdfResponse = Blob;

export type InvoicesCreateManualParams = undefined;
export type InvoicesCreateManualQuery = undefined;
export type InvoicesCreateManualBody = {
  companyId?: number | null;
  costCenterId?: number | null;
  paymentAccountId?: number | null;
  bankFallbackAccountId?: number | null;
  customerName?: string | null;
  customerStreet?: string | null;
  customerStreetNr?: string | null;
  customerZip?: string | null;
  customerCity?: string | null;
  customerCountry?: string | null;
  customerEmail?: string | null;
  customerPhone?: string | null;
  customerUstId?: string | null;
  invoiceDate: string;
  dueDate: string;
  performedAt?: string | null;
  currency: string;
  notes?: string | null;
  paymentTermsDays?: number | null;
  paymentTermsText?: string | null;
  earlyPaymentDiscountPercent?: number | null;
  earlyPaymentDiscountDays?: number | null;
  productType?: "standard" | "reduced" | "custom";
  customVatRate?: number;
  vatOverrideReason?: string;
  lineItems: Array<{
  title: string;
  description?: string | null;
  quantity: number;
  unitPriceNet: string;
  itemType?: string | null;
  productType?: "standard" | "reduced" | "custom";
  taxRate?: number;
}>;
  language?: string;
  issueImmediately?: boolean;
  generatePdf?: boolean;
  quoteHash: string;
  quoteVersion: string;
};
export type InvoicesCreateManualResponseData = { invoice: Invoice; documentId: number; pdfUrl: string };
export type InvoicesCreateManualResponse = import("../types").ApiEnvelope<InvoicesCreateManualResponseData>;

export type InvoicesSearchParams = undefined;
export type InvoicesSearchQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
  status?: string;
  companyId?: number;
  documentType?: string;
  invoiceDateFrom?: string;
  invoiceDateTo?: string;
  dueDateFrom?: string;
  dueDateTo?: string;
  minTotal?: string;
  maxTotal?: string;
  currency?: string;
  sortBy?: "createdAt" | "invoiceDate" | "dueDate" | "totalAmount";
  sortDir?: "asc" | "desc";
};
export type InvoicesSearchBody = undefined;
export type InvoicesSearchResponseData = PaginatedResult<Invoice & { corrections: Array<Pick<Invoice, 'id'|'invoiceNumber'|'status'|'totalAmount'|'currency'|'invoiceDate'|'s3Key'|'publicShareToken'> & { documentType: 'credit_note'|'cancellation' }> }>;
export type InvoicesSearchResponse = import("../types").ApiEnvelope<InvoicesSearchResponseData>;

export type InvoicesListPendingParams = undefined;
export type InvoicesListPendingQuery = {

};
export type InvoicesListPendingBody = undefined;
export type InvoicesListPendingResponseData = { total: number; invoices: Array<{ invoice: Invoice; company: CustomerCompany | null }> };
export type InvoicesListPendingResponse = import("../types").ApiEnvelope<InvoicesListPendingResponseData>;

export type InvoicesListOverdueParams = undefined;
export type InvoicesListOverdueQuery = {

};
export type InvoicesListOverdueBody = undefined;
export type InvoicesListOverdueResponseData = { total: number; invoices: Array<{ invoice: Invoice; company: CustomerCompany | null; daysOverdue: number }> };
export type InvoicesListOverdueResponse = import("../types").ApiEnvelope<InvoicesListOverdueResponseData>;

export type InvoicesAnalysisParams = {
  invoiceId: number;
};
export type InvoicesAnalysisQuery = undefined;
export type InvoicesAnalysisBody = undefined;
export type InvoicesAnalysisResponseData = { invoice: Invoice; company: CustomerCompany | null; marginAnalysis: null };
export type InvoicesAnalysisResponse = import("../types").ApiEnvelope<InvoicesAnalysisResponseData>;

export type InvoicesCreditNotePreviewParams = {
  invoiceId: number;
};
export type InvoicesCreditNotePreviewQuery = undefined;
export type InvoicesCreditNotePreviewBody = {
  mode?: "full" | "partial";
  reason: string;
  issueDate?: string;
  documentType?: "credit_note" | "cancellation";
  lineItems?: Array<{
  title: string;
  description?: string | null;
  quantity: number;
  unitPriceNet: string;
  itemType?: string | null;
  sortOrder?: number;
}>;
};
export type InvoicesCreditNotePreviewResponseData = {
  documentType: "credit_note" | "cancellation";
  invoice: {
  managingCompanyId: number;
  costCenterId: number | null;
  companyId: number | null;
  invoiceDate: string;
  dueDate: string;
  performedAt: string | null;
  currency: string;
  netAmount: string;
  taxAmount: string;
  taxRate: string | null;
  totalAmount: string;
  vatTreatment: any;
  vatLegalRef: string | null;
  vatNote: string | null;
  vatCustom: any;
  notes: string | null;
  correctionReason: string;
  correctsInvoiceId: number;
};
  lineItems: Array<{
  itemType: string;
  title: string;
  description: string | null;
  unitPriceNet: string;
  quantity: number;
  lineNetAmount: string;
  lineGrossAmount: string;
  taxRate: string;
  lineTaxAmount: string;
  sortOrder?: number | null;
}>;
  originalInvoice: {
  id: number;
  invoiceNumber: string;
  invoiceDate: string;
  totalAmount: string;
  currency: string;
  status: string;
};
};
export type InvoicesCreditNotePreviewResponse = import("../types").ApiEnvelope<InvoicesCreditNotePreviewResponseData>;

export type InvoicesCreditNoteIssueParams = {
  invoiceId: number;
};
export type InvoicesCreditNoteIssueQuery = undefined;
export type InvoicesCreditNoteIssueBody = {
  mode?: "full" | "partial";
  reason: string;
  issueDate?: string;
  documentType?: "credit_note" | "cancellation";
  lineItems?: Array<{
  title: string;
  description?: string | null;
  quantity: number;
  unitPriceNet: string;
  itemType?: string | null;
  sortOrder?: number;
}>;
};
export type InvoicesCreditNoteIssueResponseData = { invoice: Invoice; documentId: number; pdfUrl: string; originalInvoiceId?: number | null };
export type InvoicesCreditNoteIssueResponse = import("../types").ApiEnvelope<InvoicesCreditNoteIssueResponseData>;

export type InvoicesStatusPolicyParams = {
  invoiceId: number;
};
export type InvoicesStatusPolicyQuery = undefined;
export type InvoicesStatusPolicyBody = undefined;
export type InvoicesStatusPolicyResponseData = {
  invoiceId: number;
  documentType: "invoice" | "credit_note" | "cancellation";
  currentStatus: "draft" | "issued" | "paid" | "overdue" | "cancelled";
  allowedNextStatuses: Array<"draft" | "issued" | "paid" | "overdue" | "cancelled">;
  locked: boolean;
  lockReason?: string | null;
  flags: {
  hasAnyCorrection: boolean;
  hasCancellation: boolean;
};
  actions: {
  canSetDraft: boolean;
  canSetIssued: boolean;
  canSetPaid: boolean;
  canSetOverdue: boolean;
  canSetCancelled: boolean;
};
};
export type InvoicesStatusPolicyResponse = import("../types").ApiEnvelope<InvoicesStatusPolicyResponseData>;

export type InvoicesPaymentReconciliationParams = {
  invoiceId: number;
};
export type InvoicesPaymentReconciliationQuery = undefined;
export type InvoicesPaymentReconciliationBody = undefined;
export type InvoicesPaymentReconciliationResponseData = {
  invoiceId: number;
  invoiceTotal: number;
  settlementTotal: number;
  openAmount: number;
  status: "draft" | "issued" | "paid" | "overdue" | "cancelled";
  paidSource: string | null;
  state: "fully_settled_and_paid" | "fully_settled_but_not_paid" | "open" | "paid_but_underallocated" | "paid_marked_without_full_settlement";
  needsAttention: boolean;
  uiHintDe: string;
};
export type InvoicesPaymentReconciliationResponse = import("../types").ApiEnvelope<InvoicesPaymentReconciliationResponseData>;

export type InvoicesGetByIdParams = {
  invoiceId: number;
};
export type InvoicesGetByIdQuery = undefined;
export type InvoicesGetByIdBody = undefined;
export type InvoicesGetByIdResponseData = Invoice;
export type InvoicesGetByIdResponse = import("../types").ApiEnvelope<InvoicesGetByIdResponseData>;

export type InvoicesUpdateStatusParams = {
  invoiceId: number;
};
export type InvoicesUpdateStatusQuery = undefined;
export type InvoicesUpdateStatusBody = {
  status: "draft" | "issued" | "paid" | "overdue" | "cancelled";
};
export type InvoicesUpdateStatusResponseData = Invoice;
export type InvoicesUpdateStatusResponse = import("../types").ApiEnvelope<InvoicesUpdateStatusResponseData>;

export type InvoicesDeleteParams = {
  invoiceId: number;
};
export type InvoicesDeleteQuery = undefined;
export type InvoicesDeleteBody = undefined;
export type InvoicesDeleteResponseData = null;
export type InvoicesDeleteResponse = import("../types").ApiEnvelope<InvoicesDeleteResponseData>;

export type InvoicesRepairPdfParams = {
  invoiceId: number;
};
export type InvoicesRepairPdfQuery = undefined;
export type InvoicesRepairPdfBody = undefined;
export type InvoicesRepairPdfResponseData = {
  alreadyHadPdf: boolean;
  documentId: number;
  pdfUrl: string;
};
export type InvoicesRepairPdfResponse = import("../types").ApiEnvelope<InvoicesRepairPdfResponseData>;

export const apiRoutes_invoices = {
  "invoice_dunning_suggestions": {
    method: "GET",
    path: "/invoices/dunning/suggestions",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahn-Vorschläge ermitteln",
      description: "Liefert eine Liste von Mahn-Kandidaten (inkl. vorgeschlagenem Mahn-Level) für einen Stichtag. Es wird nichts versendet – nur Vorschläge für manuelles Mahnen. Bezahlt/draft/cancelled werden serverseitig ausgeschlossen.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningSuggestionsParams;
      query: InvoiceDunningSuggestionsQuery;
      body: InvoiceDunningSuggestionsBody;
      response: InvoiceDunningSuggestionsResponse;
      responseData: InvoiceDunningSuggestionsResponseData;
    },
  },
  "invoice_dunning_list_notices": {
    method: "GET",
    path: "/invoices/dunning/:invoiceId/notices",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahn-Verlauf einer Rechnung",
      description: "Gibt alle Mahnschreiben und Zahlungserinnerungen (inkl. level0) zu einer Rechnung zurück, chronologisch aufsteigend. Zahlungserinnerungen sind am Flag 'isPaymentReminder: true' erkennbar.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningListNoticesParams;
      query: InvoiceDunningListNoticesQuery;
      body: InvoiceDunningListNoticesBody;
      response: InvoiceDunningListNoticesResponse;
      responseData: InvoiceDunningListNoticesResponseData;
    },
  },
  "invoice_dunning_preview": {
    method: "POST",
    path: "/invoices/dunning/:invoiceId/preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahn-Vorschau berechnen",
      description: "Berechnet Gebühren/Zinsen/Lump-Sum usw. für eine konkrete Rechnung und einen Mahn-Level (oder lässt das System den Level vorschlagen). Es wird noch kein Mahnschreiben erstellt. Blockiert, wenn Rechnung bezahlt/nicht überfällig/offener Betrag=0 ist.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoiceDunningPreviewParams;
      query: InvoiceDunningPreviewQuery;
      body: InvoiceDunningPreviewBody;
      response: InvoiceDunningPreviewResponse;
      responseData: InvoiceDunningPreviewResponseData;
    },
  },
  "invoice_dunning_issue": {
    method: "POST",
    path: "/invoices/dunning/:invoiceId/issue",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnstufe ausstellen (manuell)",
      description: "Erstellt ein Mahnschreiben (Notice) für eine Rechnung auf Basis des gewählten Levels. Kein Auto-Sending; delivery=manual/email/letter wird nur als Metadatum erfasst. Blockiert, wenn Rechnung bezahlt/nicht überfällig/offener Betrag=0 ist.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoiceDunningIssueParams;
      query: InvoiceDunningIssueQuery;
      body: InvoiceDunningIssueBody;
      response: InvoiceDunningIssueResponse;
      responseData: InvoiceDunningIssueResponseData;
    },
  },
  "invoice_dunning_notice_pdf": {
    method: "GET",
    path: "/invoices/dunning/notices/:noticeId/pdf",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnschreiben-PDF anzeigen",
      description: "Streamt das PDF eines Mahnschreibens (Notice) inline (Binary, application/pdf).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningNoticePdfParams;
      query: InvoiceDunningNoticePdfQuery;
      body: InvoiceDunningNoticePdfBody;
      response: InvoiceDunningNoticePdfResponse;
      responseData: InvoiceDunningNoticePdfResponseData;
    },
  },
  "invoice_dunning_notice_download": {
    method: "GET",
    path: "/invoices/dunning/notices/:noticeId/download",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnschreiben-PDF herunterladen",
      description: "Lädt das PDF eines Mahnschreibens (Notice) als Download herunter (Binary, application/pdf).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningNoticeDownloadParams;
      query: InvoiceDunningNoticeDownloadQuery;
      body: InvoiceDunningNoticeDownloadBody;
      response: InvoiceDunningNoticeDownloadResponse;
      responseData: InvoiceDunningNoticeDownloadResponseData;
    },
  },
  "invoice_dunning_delete_notice": {
    method: "DELETE",
    path: "/invoices/dunning/:invoiceId/notices/:noticeId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnschreiben stornieren/löschen",
      description: "Löscht ein fehlerhaftes Mahnschreiben aus dem Verlauf und entfernt das zugehörige PDF aus dem Speicher.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningDeleteNoticeParams;
      query: InvoiceDunningDeleteNoticeQuery;
      body: InvoiceDunningDeleteNoticeBody;
      response: InvoiceDunningDeleteNoticeResponse;
      responseData: InvoiceDunningDeleteNoticeResponseData;
    },
  },
  "invoice_dunning_get_settings": {
    method: "GET",
    path: "/invoices/dunning/settings",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnwesen-Einstellungen lesen",
      description: "Gibt die aktuellen Mahnwesen-Einstellungen für das Unternehmen zurück (z.B. Gebühren/Schwellwerte/Templates).",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoiceDunningGetSettingsParams;
      query: InvoiceDunningGetSettingsQuery;
      body: InvoiceDunningGetSettingsBody;
      response: InvoiceDunningGetSettingsResponse;
      responseData: InvoiceDunningGetSettingsResponseData;
    },
  },
  "invoice_dunning_update_settings": {
    method: "PUT",
    path: "/invoices/dunning/settings",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices","dunning"],
      summary: "Mahnwesen-Einstellungen aktualisieren",
      description: "Aktualisiert die Mahnwesen-Einstellungen. Validierung erfolgt per DTO; Rückgabe ist der aktualisierte Settings-Stand.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoiceDunningUpdateSettingsParams;
      query: InvoiceDunningUpdateSettingsQuery;
      body: InvoiceDunningUpdateSettingsBody;
      response: InvoiceDunningUpdateSettingsResponse;
      responseData: InvoiceDunningUpdateSettingsResponseData;
    },
  },
  "invoices_view_pdf": {
    method: "GET",
    path: "/invoices/:invoiceId/pdf",
    auth: {"type":"public"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnungs-PDF im Browser anzeigen",
      description: "Gibt das PDF der Rechnung als Binary-Stream zurück (Content-Type: application/pdf). Aktuell public – sollte langfristig durch Token/Signatur geschützt werden.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesViewPdfParams;
      query: InvoicesViewPdfQuery;
      body: InvoicesViewPdfBody;
      response: InvoicesViewPdfResponse;
      responseData: InvoicesViewPdfResponseData;
    },
  },
  "invoices_download_pdf": {
    method: "GET",
    path: "/invoices/:invoiceId/download",
    auth: {"type":"public"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnungs-PDF herunterladen",
      description: "Gibt das PDF der Rechnung als Download zurück (Binary). Aktuell public – sollte langfristig durch Token/Signatur geschützt werden.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesDownloadPdfParams;
      query: InvoicesDownloadPdfQuery;
      body: InvoicesDownloadPdfBody;
      response: InvoicesDownloadPdfResponse;
      responseData: InvoicesDownloadPdfResponseData;
    },
  },
  "invoices_create_manual": {
    method: "POST",
    path: "/invoices/manual",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Manuelle Rechnung erstellen",
      description: "Erstellt eine neue Rechnung inkl. zugehörigem Dokument und liefert eine PDF-URL zurück. Validierung erfolgt via DTO; Auth: eingeloggter Benutzer.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreateManualParams;
      query: InvoicesCreateManualQuery;
      body: InvoicesCreateManualBody;
      response: InvoicesCreateManualResponse;
      responseData: InvoicesCreateManualResponseData;
    },
  },
  "invoices_search": {
    method: "GET",
    path: "/invoices",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnungen suchen/listen",
      description: "Paginierte Suche über Rechnungen. Standardmäßig werden nur Original-Rechnungen (documentType=invoice) paginiert; Korrekturdokumente (GS/ST) sind als corrections[] direkt auf der jeweiligen Rechnung eingebettet. Pagination-Limits gelten nur für Original-Rechnungen. Suche nach einer Korrekturnummer (z.B. 'GS-2026') liefert die zugehörige Original-Rechnung. Mit ?documentType=credit_note,cancellation kann ein flaches Listing nur der Korrekturdokumente abgerufen werden.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesSearchParams;
      query: InvoicesSearchQuery;
      body: InvoicesSearchBody;
      response: InvoicesSearchResponse;
      responseData: InvoicesSearchResponseData;
    },
  },
  "invoices_list_pending": {
    method: "GET",
    path: "/invoices/pending",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Offene Rechnungen (pending) listen",
      description: "Liefert eine zusammengefasste Liste offener Rechnungen inkl. optionaler Company-Infos (für Buchhaltung/Backoffice). Keine Query-Parameter.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesListPendingParams;
      query: InvoicesListPendingQuery;
      body: InvoicesListPendingBody;
      response: InvoicesListPendingResponse;
      responseData: InvoicesListPendingResponseData;
    },
  },
  "invoices_list_overdue": {
    method: "GET",
    path: "/invoices/overdue",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Überfällige Rechnungen listen",
      description: "Liefert überfällige Rechnungen inkl. daysOverdue (Tage überfällig) – für Mahnwesen/Monitoring. Keine Query-Parameter.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesListOverdueParams;
      query: InvoicesListOverdueQuery;
      body: InvoicesListOverdueBody;
      response: InvoicesListOverdueResponse;
      responseData: InvoicesListOverdueResponseData;
    },
  },
  "invoices_analysis": {
    method: "GET",
    path: "/invoices/:invoiceId/analysis",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnungs-Analyse abrufen",
      description: "Liefert Analyse-Informationen zur Rechnung (z.B. Company-Bezug; marginAnalysis aktuell null/placeholder). Für Buchhaltung/Backoffice.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesAnalysisParams;
      query: InvoicesAnalysisQuery;
      body: InvoicesAnalysisBody;
      response: InvoicesAnalysisResponse;
      responseData: InvoicesAnalysisResponseData;
    },
  },
  "invoices_credit_note_preview": {
    method: "POST",
    path: "/invoices/:invoiceId/credit-note/preview",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Gutschrift-Vorschau (Credit Note) erstellen",
      description: "Erzeugt eine Vorschau für eine GoBD-konforme Gutschrift/Storno-Rechnung basierend auf einer bestehenden Rechnung. Es wird noch nichts persistiert. `issueDate` ist optional (wenn nicht angegeben, setzt der Server es auf 'jetzt' – Backdating nur innerhalb nicht gesperrter Perioden möglich).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreditNotePreviewParams;
      query: InvoicesCreditNotePreviewQuery;
      body: InvoicesCreditNotePreviewBody;
      response: InvoicesCreditNotePreviewResponse;
      responseData: InvoicesCreditNotePreviewResponseData;
    },
  },
  "invoices_credit_note_issue": {
    method: "POST",
    path: "/invoices/:invoiceId/credit-note/issue",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Gutschrift ausstellen (Credit Note issue)",
      description: "Stellt eine GoBD-konforme Gutschrift/Storno-Rechnung aus, erzeugt Dokument + PDF und gibt die neue Rechnung zurück. `issueDate` ist optional (Default: Server-Zeitpunkt). Kann optional die OriginalInvoice referenzieren.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreditNoteIssueParams;
      query: InvoicesCreditNoteIssueQuery;
      body: InvoicesCreditNoteIssueBody;
      response: InvoicesCreditNoteIssueResponse;
      responseData: InvoicesCreditNoteIssueResponseData;
    },
  },
  "invoices_status_policy": {
    method: "GET",
    path: "/invoices/:invoiceId/status-policy",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Erlaubte Status-Transitions (Policy) abrufen",
      description: "Gibt für eine Rechnung die erlaubten Statuswechsel/Actions zurück (State-Machine). Nutzt dieselben Regeln wie das Status-Update (inkl. Korrektur-/Storno-Logik und Buchhaltungs-Locks).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesStatusPolicyParams;
      query: InvoicesStatusPolicyQuery;
      body: InvoicesStatusPolicyBody;
      response: InvoicesStatusPolicyResponse;
      responseData: InvoicesStatusPolicyResponseData;
    },
  },
  "invoices_payment_reconciliation": {
    method: "GET",
    path: "/invoices/:invoiceId/payment-reconciliation",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["invoices"],
      summary: "Abgleich Rechnung ↔ Zahlungszuordnungen",
      description: "Liefert Rechnungsbetrag, Summe der Zuordnungen (gleiche Logik wie Mahnung), offenen Betrag und einen klaren Status für die UI (ohne manuelle IDs). Hilft Inkonsistenzen zwischen Status „bezahlt“ und Bankzuordnung zu erkennen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesPaymentReconciliationParams;
      query: InvoicesPaymentReconciliationQuery;
      body: InvoicesPaymentReconciliationBody;
      response: InvoicesPaymentReconciliationResponse;
      responseData: InvoicesPaymentReconciliationResponseData;
    },
  },
  "invoices_get_by_id": {
    method: "GET",
    path: "/invoices/:invoiceId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnung nach ID abrufen",
      description: "Liefert die Rechnung (DB-Daten) für eine Detailansicht. Für PDF bitte die PDF-Endpoints verwenden. Auth: eingeloggter Benutzer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesGetByIdParams;
      query: InvoicesGetByIdQuery;
      body: InvoicesGetByIdBody;
      response: InvoicesGetByIdResponse;
      responseData: InvoicesGetByIdResponseData;
    },
  },
  "invoices_update_status": {
    method: "PUT",
    path: "/invoices/:invoiceId/status",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnungsstatus ändern",
      description: "Ändert den Status einer Rechnung. Hinweis: 'cancelled' ist nur für Entwürfe (draft) gedacht. Für Korrekturen ausgestellter Rechnungen (GoBD-konform) bitte die Gutschrift/Storno-Endpoints verwenden; das wird serverseitig enforced. Auth: eingeloggter Benutzer. Eingabe wird per DTO validiert.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesUpdateStatusParams;
      query: InvoicesUpdateStatusQuery;
      body: InvoicesUpdateStatusBody;
      response: InvoicesUpdateStatusResponse;
      responseData: InvoicesUpdateStatusResponseData;
    },
  },
  "invoices_delete": {
    method: "DELETE",
    path: "/invoices/:invoiceId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Rechnung löschen",
      description: "Löscht eine Rechnung (Server entscheidet über erlaubte Löschregeln). Auth: eingeloggter Benutzer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesDeleteParams;
      query: InvoicesDeleteQuery;
      body: InvoicesDeleteBody;
      response: InvoicesDeleteResponse;
      responseData: InvoicesDeleteResponseData;
    },
  },
  "invoices_repair_pdf": {
    method: "POST",
    path: "/invoices/:invoiceId/repair-pdf",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["invoices"],
      summary: "Fehlendes Rechnungs-PDF neu generieren",
      description: "Generiert das PDF für eine Rechnung neu, falls es fehlt. Erlaubte Zustände: issued, paid, overdue sowie alle Korrekturdokumente (credit_note, cancellation). Nicht erlaubt: draft (PDF wird erst beim Ausstellen erstellt) und cancelled. Idempotent – gibt zurück ob PDF bereits vorhanden war. Auth: eingeloggter Benutzer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesRepairPdfParams;
      query: InvoicesRepairPdfQuery;
      body: InvoicesRepairPdfBody;
      response: InvoicesRepairPdfResponse;
      responseData: InvoicesRepairPdfResponseData;
    },
  },
} as const;