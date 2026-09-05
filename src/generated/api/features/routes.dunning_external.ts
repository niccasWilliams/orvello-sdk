// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.585Z
// Run `pnpm run api:generate` to regenerate

export type DunningSuggestionsExternalParams = undefined;
export type DunningSuggestionsExternalQuery = {
  asOf?: string;
  limit?: number;
};
export type DunningSuggestionsExternalBody = undefined;
export type DunningSuggestionsExternalResponseData = {
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
export type DunningSuggestionsExternalResponse = import("../types").ApiEnvelope<DunningSuggestionsExternalResponseData>;

export type DunningPreviewExternalParams = {
  invoiceId: number;
};
export type DunningPreviewExternalQuery = undefined;
export type DunningPreviewExternalBody = {
  asOf?: string;
  level?: "level0" | "level1" | "level2" | "level3";
};
export type DunningPreviewExternalResponseData = {
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
export type DunningPreviewExternalResponse = import("../types").ApiEnvelope<DunningPreviewExternalResponseData>;

export type DunningNoticePdfExternalParams = {
  noticeId: number;
};
export type DunningNoticePdfExternalQuery = undefined;
export type DunningNoticePdfExternalBody = undefined;
export type DunningNoticePdfExternalResponseData = Blob;
export type DunningNoticePdfExternalResponse = Blob;

export type DunningNoticeDownloadExternalParams = {
  noticeId: number;
};
export type DunningNoticeDownloadExternalQuery = undefined;
export type DunningNoticeDownloadExternalBody = undefined;
export type DunningNoticeDownloadExternalResponseData = Blob;
export type DunningNoticeDownloadExternalResponse = Blob;

export type DunningGetSettingsExternalParams = undefined;
export type DunningGetSettingsExternalQuery = {

};
export type DunningGetSettingsExternalBody = undefined;
export type DunningGetSettingsExternalResponseData = {
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
export type DunningGetSettingsExternalResponse = import("../types").ApiEnvelope<DunningGetSettingsExternalResponseData>;

export type DunningIssueExternalParams = {
  invoiceId: number;
};
export type DunningIssueExternalQuery = undefined;
export type DunningIssueExternalBody = {
  asOf?: string;
  level: "level0" | "level1" | "level2" | "level3";
  delivery?: "manual" | "email" | "letter";
  subject?: string;
  body?: string;
};
export type DunningIssueExternalResponseData = {
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
export type DunningIssueExternalResponse = import("../types").ApiEnvelope<DunningIssueExternalResponseData>;

export type DunningUpdateSettingsExternalParams = undefined;
export type DunningUpdateSettingsExternalQuery = undefined;
export type DunningUpdateSettingsExternalBody = {
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
export type DunningUpdateSettingsExternalResponseData = {
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
export type DunningUpdateSettingsExternalResponse = import("../types").ApiEnvelope<DunningUpdateSettingsExternalResponseData>;

export const apiRoutes_dunning_external = {
  "dunning_suggestions_external": {
    method: "GET",
    path: "/invoices/external/dunning/suggestions",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Get dunning candidates (external API)",
      description: "Returns a list of overdue invoices eligible for dunning, including suggested dunning level. Nothing is sent – this is for previewing which invoices need dunning action. Paid/draft/cancelled invoices are excluded.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DunningSuggestionsExternalParams;
      query: DunningSuggestionsExternalQuery;
      body: DunningSuggestionsExternalBody;
      response: DunningSuggestionsExternalResponse;
      responseData: DunningSuggestionsExternalResponseData;
    },
  },
  "dunning_preview_external": {
    method: "POST",
    path: "/invoices/external/dunning/:invoiceId/preview",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Preview dunning fees and interest (external API)",
      description: "Calculates fees, interest, and lump sum for a specific invoice and dunning level (or lets the system suggest the level). No dunning notice is created. Blocked if invoice is paid, not overdue, or open amount is 0.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DunningPreviewExternalParams;
      query: DunningPreviewExternalQuery;
      body: DunningPreviewExternalBody;
      response: DunningPreviewExternalResponse;
      responseData: DunningPreviewExternalResponseData;
    },
  },
  "dunning_notice_pdf_external": {
    method: "GET",
    path: "/invoices/external/dunning/notices/:noticeId/pdf",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["dunning-external"],
      summary: "View dunning notice PDF (external API)",
      description: "Streams the PDF of a dunning notice inline (Content-Type: application/pdf).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: DunningNoticePdfExternalParams;
      query: DunningNoticePdfExternalQuery;
      body: DunningNoticePdfExternalBody;
      response: DunningNoticePdfExternalResponse;
      responseData: DunningNoticePdfExternalResponseData;
    },
  },
  "dunning_notice_download_external": {
    method: "GET",
    path: "/invoices/external/dunning/notices/:noticeId/download",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Download dunning notice PDF (external API)",
      description: "Downloads the PDF of a dunning notice as attachment (Content-Disposition: attachment).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: DunningNoticeDownloadExternalParams;
      query: DunningNoticeDownloadExternalQuery;
      body: DunningNoticeDownloadExternalBody;
      response: DunningNoticeDownloadExternalResponse;
      responseData: DunningNoticeDownloadExternalResponseData;
    },
  },
  "dunning_get_settings_external": {
    method: "GET",
    path: "/invoices/external/dunning/settings",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"viewer","scopes":["invoices:read"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Get dunning settings (external API)",
      description: "Returns the current dunning settings for the managing company (fee thresholds, interest rates, lump sum configuration).",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DunningGetSettingsExternalParams;
      query: DunningGetSettingsExternalQuery;
      body: DunningGetSettingsExternalBody;
      response: DunningGetSettingsExternalResponse;
      responseData: DunningGetSettingsExternalResponseData;
    },
  },
  "dunning_issue_external": {
    method: "POST",
    path: "/invoices/external/dunning/:invoiceId/issue",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"editor","scopes":["invoices:write"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Issue dunning notice (external API)",
      description: "Creates a dunning notice (Mahnschreiben) for an invoice at the specified level. Generates a PDF and creates an immutable document. delivery=manual/email/letter is recorded as metadata only (no auto-sending). Blocked if invoice is paid, not overdue, or open amount is 0.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DunningIssueExternalParams;
      query: DunningIssueExternalQuery;
      body: DunningIssueExternalBody;
      response: DunningIssueExternalResponse;
      responseData: DunningIssueExternalResponseData;
    },
  },
  "dunning_update_settings_external": {
    method: "PUT",
    path: "/invoices/external/dunning/settings",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":true,"requireRole":"admin","scopes":["invoices:write"]},
    meta: {
      tags: ["dunning-external"],
      summary: "Update dunning settings (external API)",
      description: "Updates the dunning settings (fees, interest rates, thresholds). Requires admin role. Returns the updated settings.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DunningUpdateSettingsExternalParams;
      query: DunningUpdateSettingsExternalQuery;
      body: DunningUpdateSettingsExternalBody;
      response: DunningUpdateSettingsExternalResponse;
      responseData: DunningUpdateSettingsExternalResponseData;
    },
  },
} as const;