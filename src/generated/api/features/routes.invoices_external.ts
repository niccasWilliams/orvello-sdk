// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

import type { CustomerCompany, Invoice, PaginatedResult } from "../../frontend-types";

export type InvoicesPaymentEventsExternalParams = {
  invoiceId: number;
};
export type InvoicesPaymentEventsExternalQuery = {
  afterVersion?: number;
  limit?: number;
};
export type InvoicesPaymentEventsExternalBody = undefined;
export type InvoicesPaymentEventsExternalResponseData = {
  events: Array<{
  id: string;
  type: "invoice.payment_evidence.changed";
  schemaVersion: 1;
  invoiceId: number;
  version: number;
  cause: string;
  occurredAt: string;
  evidence: {
  invoiceId: number;
  invoiceNumber: string;
  currency: string;
  invoiceStatus: string;
  paidSource: string | null;
  receivingAccountId: number | null;
  invoiceAmount: string;
  bankReceivedAmount: string;
  bankRefundedAmount: string;
  bankNetAmount: string;
  nonCashSettlementAmount: string;
  outstandingBankAmount: string;
  overpaidBankAmount: string;
  state: "unpaid" | "partial" | "covered" | "overpaid" | "review_required" | "ineligible";
  bankPaymentConfirmed: boolean;
  issues: Array<"missing_receiving_account" | "invalid_invoice_amount" | "ineligible_invoice" | "missing_payment" | "wrong_account" | "currency_mismatch" | "invalid_amount" | "unsupported_source" | "invalid_direction" | "payment_overallocated" | "non_cash_settlement" | "status_without_bank_evidence" | "negative_bank_balance">;
  bankAllocationIds: Array<number>;
  excludedAllocationIds: Array<number>;
  reversedAllocationCount: number;
  revision: string;
  observedAt: string;
};
}>;
  nextVersion: number;
  hasMore: boolean;
};
export type InvoicesPaymentEventsExternalResponse = import("../types").ApiEnvelope<InvoicesPaymentEventsExternalResponseData>;

export type InvoicesPaymentEvidenceExternalParams = {
  invoiceId: number;
};
export type InvoicesPaymentEvidenceExternalQuery = undefined;
export type InvoicesPaymentEvidenceExternalBody = undefined;
export type InvoicesPaymentEvidenceExternalResponseData = {
  invoiceId: number;
  invoiceNumber: string;
  currency: string;
  invoiceStatus: string;
  paidSource: string | null;
  receivingAccountId: number | null;
  invoiceAmount: string;
  bankReceivedAmount: string;
  bankRefundedAmount: string;
  bankNetAmount: string;
  nonCashSettlementAmount: string;
  outstandingBankAmount: string;
  overpaidBankAmount: string;
  state: "unpaid" | "partial" | "covered" | "overpaid" | "review_required" | "ineligible";
  bankPaymentConfirmed: boolean;
  issues: Array<"missing_receiving_account" | "invalid_invoice_amount" | "ineligible_invoice" | "missing_payment" | "wrong_account" | "currency_mismatch" | "invalid_amount" | "unsupported_source" | "invalid_direction" | "payment_overallocated" | "non_cash_settlement" | "status_without_bank_evidence" | "negative_bank_balance">;
  bankAllocationIds: Array<number>;
  excludedAllocationIds: Array<number>;
  reversedAllocationCount: number;
  revision: string;
  observedAt: string;
};
export type InvoicesPaymentEvidenceExternalResponse = import("../types").ApiEnvelope<InvoicesPaymentEvidenceExternalResponseData>;

export type InvoicesPaymentInstructionsExternalParams = {
  invoiceId: number;
};
export type InvoicesPaymentInstructionsExternalQuery = undefined;
export type InvoicesPaymentInstructionsExternalBody = undefined;
export type InvoicesPaymentInstructionsExternalResponseData = {
  invoiceId: number;
  reference: string;
  accountOwner: string;
  iban: string;
  bic: string | null;
  bankName: string | null;
  currency: string;
  invoiceAmount: string;
  createdAt: string;
};
export type InvoicesPaymentInstructionsExternalResponse = import("../types").ApiEnvelope<InvoicesPaymentInstructionsExternalResponseData>;

export type InvoicesSearchExternalParams = undefined;
export type InvoicesSearchExternalQuery = {
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
export type InvoicesSearchExternalBody = undefined;
export type InvoicesSearchExternalResponseData = PaginatedResult<Invoice>;
export type InvoicesSearchExternalResponse = import("../types").ApiEnvelope<InvoicesSearchExternalResponseData>;

export type InvoicesPendingExternalParams = undefined;
export type InvoicesPendingExternalQuery = {

};
export type InvoicesPendingExternalBody = undefined;
export type InvoicesPendingExternalResponseData = { total: number; invoices: Array<{ invoice: Invoice; company: CustomerCompany | null }> };
export type InvoicesPendingExternalResponse = import("../types").ApiEnvelope<InvoicesPendingExternalResponseData>;

export type InvoicesOverdueExternalParams = undefined;
export type InvoicesOverdueExternalQuery = {

};
export type InvoicesOverdueExternalBody = undefined;
export type InvoicesOverdueExternalResponseData = { total: number; invoices: Array<{ invoice: Invoice; company: CustomerCompany | null; daysOverdue: number }> };
export type InvoicesOverdueExternalResponse = import("../types").ApiEnvelope<InvoicesOverdueExternalResponseData>;

export type InvoicesGetByIdExternalParams = {
  invoiceId: number;
};
export type InvoicesGetByIdExternalQuery = undefined;
export type InvoicesGetByIdExternalBody = undefined;
export type InvoicesGetByIdExternalResponseData = Invoice;
export type InvoicesGetByIdExternalResponse = import("../types").ApiEnvelope<InvoicesGetByIdExternalResponseData>;

export type InvoicesStatusPolicyExternalParams = {
  invoiceId: number;
};
export type InvoicesStatusPolicyExternalQuery = undefined;
export type InvoicesStatusPolicyExternalBody = undefined;
export type InvoicesStatusPolicyExternalResponseData = {
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
export type InvoicesStatusPolicyExternalResponse = import("../types").ApiEnvelope<InvoicesStatusPolicyExternalResponseData>;

export type InvoicesViewPdfExternalParams = {
  invoiceId: number;
};
export type InvoicesViewPdfExternalQuery = undefined;
export type InvoicesViewPdfExternalBody = undefined;
export type InvoicesViewPdfExternalResponseData = Blob;
export type InvoicesViewPdfExternalResponse = Blob;

export type InvoicesDownloadPdfExternalParams = {
  invoiceId: number;
};
export type InvoicesDownloadPdfExternalQuery = undefined;
export type InvoicesDownloadPdfExternalBody = undefined;
export type InvoicesDownloadPdfExternalResponseData = Blob;
export type InvoicesDownloadPdfExternalResponse = Blob;

export type InvoicesCreateExternalParams = undefined;
export type InvoicesCreateExternalQuery = undefined;
export type InvoicesCreateExternalBody = {
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
  paymentMethod?: string | null;
  paymentProvider?: string | null;
  paidAt?: string | null;
  productType?: "standard" | "reduced" | "custom";
  customVatRate?: number;
  vatOverrideReason?: string;
  lineItems: Array<{
  title: string;
  description?: string | null;
  quantity: number;
  unitPriceNet: string;
  itemType?: string | null;
  sortOrder?: number;
  productType?: "standard" | "reduced" | "custom";
  taxRate?: number;
}>;
  language?: string;
  issueImmediately?: boolean;
  generatePdf?: boolean;
  quoteHash?: string;
  quoteVersion?: string;
};
export type InvoicesCreateExternalResponseData = { invoice: Invoice; documentId: number | null; pdfUrl: string | null };
export type InvoicesCreateExternalResponse = import("../types").ApiEnvelope<InvoicesCreateExternalResponseData>;

export type InvoicesUpdateStatusExternalParams = {
  invoiceId: number;
};
export type InvoicesUpdateStatusExternalQuery = undefined;
export type InvoicesUpdateStatusExternalBody = {
  status: "draft" | "issued" | "paid" | "overdue" | "cancelled";
  source?: "api" | "sync" | "webhook";
  paymentReference?: string;
};
export type InvoicesUpdateStatusExternalResponseData = Invoice;
export type InvoicesUpdateStatusExternalResponse = import("../types").ApiEnvelope<InvoicesUpdateStatusExternalResponseData>;

export type InvoicesCreditNotePreviewExternalParams = {
  invoiceId: number;
};
export type InvoicesCreditNotePreviewExternalQuery = undefined;
export type InvoicesCreditNotePreviewExternalBody = {
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
export type InvoicesCreditNotePreviewExternalResponseData = {
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
export type InvoicesCreditNotePreviewExternalResponse = import("../types").ApiEnvelope<InvoicesCreditNotePreviewExternalResponseData>;

export type InvoicesCreditNoteIssueExternalParams = {
  invoiceId: number;
};
export type InvoicesCreditNoteIssueExternalQuery = undefined;
export type InvoicesCreditNoteIssueExternalBody = {
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
export type InvoicesCreditNoteIssueExternalResponseData = { invoice: Invoice; documentId: number; pdfUrl: string; originalInvoiceId: number };
export type InvoicesCreditNoteIssueExternalResponse = import("../types").ApiEnvelope<InvoicesCreditNoteIssueExternalResponseData>;

export type InvoicesSendEmailExternalParams = {
  invoiceId: number;
};
export type InvoicesSendEmailExternalQuery = undefined;
export type InvoicesSendEmailExternalBody = {
  to: string;
  subject?: string;
  body?: string;
  replyTo?: string;
};
export type InvoicesSendEmailExternalResponseData = { messageId: string; invoiceNumber: string; recipient: string; sentAt: string };
export type InvoicesSendEmailExternalResponse = import("../types").ApiEnvelope<InvoicesSendEmailExternalResponseData>;

export type InvoicesDeleteExternalParams = {
  invoiceId: number;
};
export type InvoicesDeleteExternalQuery = undefined;
export type InvoicesDeleteExternalBody = undefined;
export type InvoicesDeleteExternalResponseData = null;
export type InvoicesDeleteExternalResponse = import("../types").ApiEnvelope<InvoicesDeleteExternalResponseData>;

export const apiRoutes_invoices_external = {
  // Contract source: explicit
  "invoices_payment_events_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/payment-events",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Replay durable bank payment evidence events",
      description: "Per-invoice ordered journal, afterVersion exclusive. Replay does not acknowledge or delete events. Consumers persist their cursor atomically with processing and re-read current payment evidence before commerce actions. Historical invoices without frozen instructions are not enrolled. No global cursor or delivery-order promise across invoices.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesPaymentEventsExternalParams;
      query: InvoicesPaymentEventsExternalQuery;
      body: InvoicesPaymentEventsExternalBody;
      response: InvoicesPaymentEventsExternalResponse;
      responseData: InvoicesPaymentEventsExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_payment_evidence_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/payment-evidence",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Read bank payment evidence for an invoice",
      description: "Consistent read-only snapshot of imported bank payments and refunds. Separates cash from discounts, writeoffs and manual paid marks. Decimal amounts are strings. bankPaymentConfirmed requires full matching-account/currency bank coverage without unresolved issues. revision is a content digest, not an ordered event version. No bank import or payment is initiated.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesPaymentEvidenceExternalParams;
      query: InvoicesPaymentEvidenceExternalQuery;
      body: InvoicesPaymentEvidenceExternalBody;
      response: InvoicesPaymentEvidenceExternalResponse;
      responseData: InvoicesPaymentEvidenceExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_payment_instructions_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/payment-instructions",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Read immutable bank payment instructions",
      description: "Reference and recipient frozen on first issue. Decimal amount is a string. Historical invoices without a snapshot return 409; no reference is created by reading. This is not evidence of payment or permission to provision.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesPaymentInstructionsExternalParams;
      query: InvoicesPaymentInstructionsExternalQuery;
      body: InvoicesPaymentInstructionsExternalBody;
      response: InvoicesPaymentInstructionsExternalResponse;
      responseData: InvoicesPaymentInstructionsExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_search_external": {
    method: "GET",
    path: "/invoices/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Search invoices (external API)",
      description: "Paginated search over invoices. Cost center filtering is applied per token permissions. managingCompanyId is derived from the auth token.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesSearchExternalParams;
      query: InvoicesSearchExternalQuery;
      body: InvoicesSearchExternalBody;
      response: InvoicesSearchExternalResponse;
      responseData: InvoicesSearchExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_pending_external": {
    method: "GET",
    path: "/invoices/external/pending",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "List pending invoices (external API)",
      description: "Returns a list of open/pending invoices with optional company information. Useful for monitoring outstanding receivables.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesPendingExternalParams;
      query: InvoicesPendingExternalQuery;
      body: InvoicesPendingExternalBody;
      response: InvoicesPendingExternalResponse;
      responseData: InvoicesPendingExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_overdue_external": {
    method: "GET",
    path: "/invoices/external/overdue",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "List overdue invoices (external API)",
      description: "Returns overdue invoices sorted by days overdue (most overdue first). Includes daysOverdue calculation and optional company information. Essential for dunning workflows.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: InvoicesOverdueExternalParams;
      query: InvoicesOverdueExternalQuery;
      body: InvoicesOverdueExternalBody;
      response: InvoicesOverdueExternalResponse;
      responseData: InvoicesOverdueExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_get_by_id_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Get invoice by ID (external API)",
      description: "Returns a single invoice by ID. Cost center access is validated against the token permissions.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesGetByIdExternalParams;
      query: InvoicesGetByIdExternalQuery;
      body: InvoicesGetByIdExternalBody;
      response: InvoicesGetByIdExternalResponse;
      responseData: InvoicesGetByIdExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_status_policy_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/status-policy",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Get allowed status transitions (external API)",
      description: "Returns the state machine for allowed invoice status changes. Useful for external apps to know which transitions are valid before calling the status update endpoint.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesStatusPolicyExternalParams;
      query: InvoicesStatusPolicyExternalQuery;
      body: InvoicesStatusPolicyExternalBody;
      response: InvoicesStatusPolicyExternalResponse;
      responseData: InvoicesStatusPolicyExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_view_pdf_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/pdf",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "View invoice PDF (external API)",
      description: "Streams the invoice PDF inline (Content-Type: application/pdf). Auth-protected via API Key or OAuth2 – no public share token needed.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesViewPdfExternalParams;
      query: InvoicesViewPdfExternalQuery;
      body: InvoicesViewPdfExternalBody;
      response: InvoicesViewPdfExternalResponse;
      responseData: InvoicesViewPdfExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_download_pdf_external": {
    method: "GET",
    path: "/invoices/external/:invoiceId/download",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Download invoice PDF (external API)",
      description: "Downloads the invoice PDF as attachment (Content-Disposition: attachment). Auth-protected via API Key or OAuth2.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesDownloadPdfExternalParams;
      query: InvoicesDownloadPdfExternalQuery;
      body: InvoicesDownloadPdfExternalBody;
      response: InvoicesDownloadPdfExternalResponse;
      responseData: InvoicesDownloadPdfExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_create_external": {
    method: "POST",
    path: "/invoices/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Create invoice (external API)",
      description: "Creates a new invoice via API Key or OAuth2. managingCompanyId is derived from the auth token. Includes full line item support, VAT calculation, and optional PDF generation.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreateExternalParams;
      query: InvoicesCreateExternalQuery;
      body: InvoicesCreateExternalBody;
      response: InvoicesCreateExternalResponse;
      responseData: InvoicesCreateExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_update_status_external": {
    method: "PUT",
    path: "/invoices/external/:invoiceId/status",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Update invoice status (external API)",
      description: "Changes invoice status (e.g., mark as paid). State machine rules are enforced server-side. GoBD-safe: issued invoices cannot be cancelled directly; use credit note/cancellation endpoints instead.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesUpdateStatusExternalParams;
      query: InvoicesUpdateStatusExternalQuery;
      body: InvoicesUpdateStatusExternalBody;
      response: InvoicesUpdateStatusExternalResponse;
      responseData: InvoicesUpdateStatusExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_credit_note_preview_external": {
    method: "POST",
    path: "/invoices/external/:invoiceId/credit-note/preview",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Preview credit note (external API)",
      description: "GoBD-compliant credit note preview. Returns computed amounts without persisting. Use this before issuing to validate the correction.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreditNotePreviewExternalParams;
      query: InvoicesCreditNotePreviewExternalQuery;
      body: InvoicesCreditNotePreviewExternalBody;
      response: InvoicesCreditNotePreviewExternalResponse;
      responseData: InvoicesCreditNotePreviewExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_credit_note_issue_external": {
    method: "POST",
    path: "/invoices/external/:invoiceId/credit-note/issue",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:publish"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Issue credit note (external API)",
      description: "Issues a GoBD-compliant credit note or cancellation invoice. Generates PDF and creates an immutable document. Returns the new correction invoice.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesCreditNoteIssueExternalParams;
      query: InvoicesCreditNoteIssueExternalQuery;
      body: InvoicesCreditNoteIssueExternalBody;
      response: InvoicesCreditNoteIssueExternalResponse;
      responseData: InvoicesCreditNoteIssueExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_send_email_external": {
    method: "POST",
    path: "/invoices/external/:invoiceId/send-email",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Send invoice via email (external API)",
      description: "Sends the invoice PDF as email attachment to the specified recipient. Invoice must be in 'issued' status and have a generated PDF. Reply-To defaults to the managing company's email address (multi-company safe). Subject/body support placeholders: {{invoiceNumber}}, {{dueDate}}, {{totalAmount}}, {{currency}}, {{customerName}}.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InvoicesSendEmailExternalParams;
      query: InvoicesSendEmailExternalQuery;
      body: InvoicesSendEmailExternalBody;
      response: InvoicesSendEmailExternalResponse;
      responseData: InvoicesSendEmailExternalResponseData;
    },
  },
  // Contract source: explicit
  "invoices_delete_external": {
    method: "DELETE",
    path: "/invoices/external/:invoiceId",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"admin","scopes":["invoices:delete"]},
    meta: {
      tags: ["invoices-external"],
      summary: "Delete invoice (external API)",
      description: "Deletes a draft invoice and its associated documents. Only invoices in 'draft' status can be deleted. Issued/paid invoices must be corrected via credit note/cancellation.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: InvoicesDeleteExternalParams;
      query: InvoicesDeleteExternalQuery;
      body: InvoicesDeleteExternalBody;
      response: InvoicesDeleteExternalResponse;
      responseData: InvoicesDeleteExternalResponseData;
    },
  },
} as const;