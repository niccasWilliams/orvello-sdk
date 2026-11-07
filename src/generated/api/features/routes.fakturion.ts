/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type InternalFakturionResultsRecordParams = undefined;
export type InternalFakturionResultsRecordQuery = undefined;
export type InternalFakturionResultsRecordBody = {
  contractVersion: "bills-fakturion/v1";
  orderId: string;
  idempotencyKey: string;
  billsTenantId: number;
  sandbox: boolean;
  billsInvoiceId: number;
  invoiceRevision: string;
  operation: "generate_einvoice";
  resultId: string;
  completedAt: string;
  status: "completed";
  format: "xrechnung_ubl" | "xrechnung_cii" | "zugferd";
  invoiceNumber: string;
  artifacts: {
  xml: {
  artifactId: string;
  sha256: string;
  sizeBytes: number;
  mediaType: "application/xml";
};
  pdf?: {
  artifactId: string;
  sha256: string;
  sizeBytes: number;
  mediaType: "application/pdf";
};
};
  validation: {
  validator: "kosit";
  ruleset: string;
  issues: Array<{
  code: string;
  severity: "error" | "warning" | "info";
  message: string;
  location?: string;
}>;
  valid: true;
};
} | {
  contractVersion: "bills-fakturion/v1";
  orderId: string;
  idempotencyKey: string;
  billsTenantId: number;
  sandbox: boolean;
  billsInvoiceId: number;
  invoiceRevision: string;
  operation: "generate_einvoice";
  resultId: string;
  completedAt: string;
  status: "rejected";
  code: "invalid_invoice";
  retryable: false;
  validation: {
  validator: "kosit";
  ruleset: string;
  issues: Array<{
  code: string;
  severity: "error" | "warning" | "info";
  message: string;
  location?: string;
}>;
  valid: false;
};
} | {
  contractVersion: "bills-fakturion/v1";
  orderId: string;
  idempotencyKey: string;
  billsTenantId: number;
  sandbox: boolean;
  billsInvoiceId: number;
  invoiceRevision: string;
  operation: "generate_einvoice";
  resultId: string;
  completedAt: string;
  status: "failed";
  code: "dependency_unavailable" | "processing_failed";
  retryable: boolean;
};
export type InternalFakturionResultsRecordResponseData = {
  resultId: string;
  replayed: boolean;
};
export type InternalFakturionResultsRecordResponse = InternalFakturionResultsRecordResponseData;

export const apiRoutes_fakturion = {
  // Contract source: explicit
  "internal_fakturion_results_record": {
    method: "POST",
    path: "/internal/fakturion/v1/results",
    auth: {"type":"amp_service_identity"},
    meta: {
      tags: ["fakturion"],
      summary: "Endergebnis eines Fakturion-Auftrags idempotent ablegen (nur Fakturion mit AMP-Dienstausweis).",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: InternalFakturionResultsRecordParams;
      query: InternalFakturionResultsRecordQuery;
      body: InternalFakturionResultsRecordBody;
      response: InternalFakturionResultsRecordResponse;
      responseData: InternalFakturionResultsRecordResponseData;
    },
  },
} as const;