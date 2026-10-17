/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type DocumentLibrarySettingsParams = undefined;
export type DocumentLibrarySettingsQuery = {
  companyId: number;
};
export type DocumentLibrarySettingsBody = undefined;
export type DocumentLibrarySettingsResponseData = {
  invoiceFolderId: number | null;
  invoiceYearFolders: boolean;
  revision: number;
};
export type DocumentLibrarySettingsResponse = import("../types").ApiEnvelope<DocumentLibrarySettingsResponseData>;

export type DocumentLibrarySettingsSaveParams = undefined;
export type DocumentLibrarySettingsSaveQuery = {
  companyId: number;
};
export type DocumentLibrarySettingsSaveBody = {
  invoiceFolderId: number | null;
  invoiceYearFolders: boolean;
  revision: number;
};
export type DocumentLibrarySettingsSaveResponseData = {
  invoiceFolderId: number | null;
  invoiceYearFolders: boolean;
  revision: number;
};
export type DocumentLibrarySettingsSaveResponse = import("../types").ApiEnvelope<DocumentLibrarySettingsSaveResponseData>;

export type DocumentLibraryBrandingParams = undefined;
export type DocumentLibraryBrandingQuery = {
  companyId: number;
};
export type DocumentLibraryBrandingBody = undefined;
export type DocumentLibraryBrandingResponseData = {
  logoDataUri: string;
};
export type DocumentLibraryBrandingResponse = import("../types").ApiEnvelope<DocumentLibraryBrandingResponseData>;

export type DocumentLibraryListParams = undefined;
export type DocumentLibraryListQuery = {
  companyId: number;
  q?: string;
  sort?: "createdAt" | "name" | "size";
  order?: "asc" | "desc";
  fileKind?: "pdf" | "image" | "other";
  locked?: "true" | "false";
  invoiceStatus?: "draft" | "issued" | "paid" | "overdue" | "cancelled";
  dateFrom?: string;
  dateTo?: string;
  folderId?: number;
  scope?: "all" | "company" | "private" | "invoices";
  archived?: "true" | "false";
  page?: number;
  pageSize?: number;
};
export type DocumentLibraryListBody = undefined;
export type DocumentLibraryListResponseData = {
  items: Array<{
  id: number;
  fileName: string;
  title: string | null;
  description: string | null;
  fileType: string;
  fileSizeBytes: number;
  createdAt: string | string;
  isLocked: boolean;
  folderId: number | null;
  archivedAt: string | string | null;
  private: boolean;
  versionCount: number;
  invoice: {
  id: number;
  invoiceNumber: string;
  status: string;
  documentType: string;
  totalAmount: string;
  currency: string;
  dueDate: string;
  paidAt: string | null;
} | null;
}>;
  canManage: boolean;
  total: number;
  page: number;
  pageSize: number;
};
export type DocumentLibraryListResponse = import("../types").ApiEnvelope<DocumentLibraryListResponseData>;

export type DocumentLibraryFoldersParams = undefined;
export type DocumentLibraryFoldersQuery = {
  companyId: number;
};
export type DocumentLibraryFoldersBody = undefined;
export type DocumentLibraryFoldersResponseData = Array<{
  id: number;
  managingCompanyId: number;
  name: string;
  documentCount?: number;
  parentId: number | null;
  privateUserId: number | null;
  createdAt: string | string;
}>;
export type DocumentLibraryFoldersResponse = import("../types").ApiEnvelope<DocumentLibraryFoldersResponseData>;

export type DocumentLibraryFolderCreateParams = undefined;
export type DocumentLibraryFolderCreateQuery = {
  companyId: number;
};
export type DocumentLibraryFolderCreateBody = {
  name: string;
  parentId?: number | null;
  private?: boolean;
};
export type DocumentLibraryFolderCreateResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  documentCount?: number;
  parentId: number | null;
  privateUserId: number | null;
  createdAt: string | string;
};
export type DocumentLibraryFolderCreateResponse = import("../types").ApiEnvelope<DocumentLibraryFolderCreateResponseData>;

export type DocumentLibraryFolderUpdateParams = {
  id: number;
};
export type DocumentLibraryFolderUpdateQuery = {
  companyId: number;
};
export type DocumentLibraryFolderUpdateBody = {
  name: string;
  parentId?: number | null;
  private?: boolean;
};
export type DocumentLibraryFolderUpdateResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  documentCount?: number;
  parentId: number | null;
  privateUserId: number | null;
  createdAt: string | string;
};
export type DocumentLibraryFolderUpdateResponse = import("../types").ApiEnvelope<DocumentLibraryFolderUpdateResponseData>;

export type DocumentLibraryFolderDeleteParams = {
  id: number;
};
export type DocumentLibraryFolderDeleteQuery = {
  companyId: number;
};
export type DocumentLibraryFolderDeleteBody = undefined;
export type DocumentLibraryFolderDeleteResponseData = null;
export type DocumentLibraryFolderDeleteResponse = import("../types").ApiEnvelope<DocumentLibraryFolderDeleteResponseData>;

export type DocumentLibraryBatchParams = undefined;
export type DocumentLibraryBatchQuery = {
  companyId: number;
};
export type DocumentLibraryBatchBody = {
  ids: Array<number>;
  change: {
  action: "move";
  folderId: number | null;
} | {
  action: "archive";
} | {
  action: "restore";
};
};
export type DocumentLibraryBatchResponseData = {
  updated: number;
  ids: Array<number>;
};
export type DocumentLibraryBatchResponse = import("../types").ApiEnvelope<DocumentLibraryBatchResponseData>;

export type DocumentLibraryMetadataParams = {
  id: number;
};
export type DocumentLibraryMetadataQuery = {
  companyId: number;
};
export type DocumentLibraryMetadataBody = {
  title?: string;
  description?: string | null;
  folderId?: number | null;
  archived?: boolean;
};
export type DocumentLibraryMetadataResponseData = {
  id: number;
};
export type DocumentLibraryMetadataResponse = import("../types").ApiEnvelope<DocumentLibraryMetadataResponseData>;

export type DocumentLibraryDraftsParams = undefined;
export type DocumentLibraryDraftsQuery = {
  companyId: number;
};
export type DocumentLibraryDraftsBody = undefined;
export type DocumentLibraryDraftsResponseData = Array<{
  id: number;
  title: string;
  docType: string;
  revision: number;
  isTemplate: boolean;
  privateUserId: number | null;
  updatedAt: string | string;
}>;
export type DocumentLibraryDraftsResponse = import("../types").ApiEnvelope<DocumentLibraryDraftsResponseData>;

export type DocumentLibraryDraftGetParams = {
  id: number;
};
export type DocumentLibraryDraftGetQuery = {
  companyId: number;
};
export type DocumentLibraryDraftGetBody = undefined;
export type DocumentLibraryDraftGetResponseData = {
  id: number;
  title: string;
  docType: string;
  content: any;
  revision: number;
  isTemplate: boolean;
  privateUserId: number | null;
  updatedAt: string | string;
};
export type DocumentLibraryDraftGetResponse = import("../types").ApiEnvelope<DocumentLibraryDraftGetResponseData>;

export type DocumentLibraryDraftCreateParams = undefined;
export type DocumentLibraryDraftCreateQuery = {
  companyId: number;
};
export type DocumentLibraryDraftCreateBody = {
  title: string;
  docType: "letter" | "offer" | "confirmation" | "contract" | "report" | "other";
  content: {
  sections: Array<{
  title?: string;
  breakBefore?: boolean;
  type: "lead" | "paragraph" | "paragraphHtml" | "callout" | "note";
  content?: string;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "list";
  items: Array<string>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "orderedList";
  items: Array<string>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "simpleTable";
  rows: Array<{
  label: string;
  value: string;
  emphasize?: boolean;
}>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "gridTable";
  head: Array<string>;
  rows: Array<Array<string>>;
}>;
};
  isTemplate?: boolean;
  private?: boolean;
  revision?: number;
};
export type DocumentLibraryDraftCreateResponseData = {
  id: number;
  title: string;
  docType: string;
  content: any;
  revision: number;
  isTemplate: boolean;
  privateUserId: number | null;
  updatedAt: string | string;
};
export type DocumentLibraryDraftCreateResponse = import("../types").ApiEnvelope<DocumentLibraryDraftCreateResponseData>;

export type DocumentLibraryDraftUpdateParams = {
  id: number;
};
export type DocumentLibraryDraftUpdateQuery = {
  companyId: number;
};
export type DocumentLibraryDraftUpdateBody = {
  title: string;
  docType: "letter" | "offer" | "confirmation" | "contract" | "report" | "other";
  content: {
  sections: Array<{
  title?: string;
  breakBefore?: boolean;
  type: "lead" | "paragraph" | "paragraphHtml" | "callout" | "note";
  content?: string;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "list";
  items: Array<string>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "orderedList";
  items: Array<string>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "simpleTable";
  rows: Array<{
  label: string;
  value: string;
  emphasize?: boolean;
}>;
} | {
  title?: string;
  breakBefore?: boolean;
  type: "gridTable";
  head: Array<string>;
  rows: Array<Array<string>>;
}>;
};
  isTemplate?: boolean;
  private?: boolean;
  revision?: number;
};
export type DocumentLibraryDraftUpdateResponseData = {
  id: number;
  title: string;
  docType: string;
  content: any;
  revision: number;
  isTemplate: boolean;
  privateUserId: number | null;
  updatedAt: string | string;
};
export type DocumentLibraryDraftUpdateResponse = import("../types").ApiEnvelope<DocumentLibraryDraftUpdateResponseData>;

export type DocumentLibraryDraftDeleteParams = {
  id: number;
};
export type DocumentLibraryDraftDeleteQuery = {
  companyId: number;
};
export type DocumentLibraryDraftDeleteBody = undefined;
export type DocumentLibraryDraftDeleteResponseData = null;
export type DocumentLibraryDraftDeleteResponse = import("../types").ApiEnvelope<DocumentLibraryDraftDeleteResponseData>;

export type DocumentLibraryPreviewParams = {
  id: number;
};
export type DocumentLibraryPreviewQuery = {
  companyId: number;
};
export type DocumentLibraryPreviewBody = {
  revision: number;
  folderId?: number | null;
  variables?: Record<string, string>;
};
export type DocumentLibraryPreviewResponseData = {
  pdfBase64: string;
};
export type DocumentLibraryPreviewResponse = import("../types").ApiEnvelope<DocumentLibraryPreviewResponseData>;

export type DocumentLibraryRenderParams = {
  id: number;
};
export type DocumentLibraryRenderQuery = {
  companyId: number;
};
export type DocumentLibraryRenderBody = {
  revision: number;
  folderId?: number | null;
  variables?: Record<string, string>;
};
export type DocumentLibraryRenderResponseData = {
  documentId: number;
};
export type DocumentLibraryRenderResponse = import("../types").ApiEnvelope<DocumentLibraryRenderResponseData>;

export type DocumentLibraryDeliveriesParams = {
  id: number;
};
export type DocumentLibraryDeliveriesQuery = {
  companyId: number;
};
export type DocumentLibraryDeliveriesBody = undefined;
export type DocumentLibraryDeliveriesResponseData = Array<{
  id: number;
  documentId: number;
  recipient: string;
  subject: string;
  senderName: string;
  status: string;
  messageId: string | null;
  provider: string | null;
  createdAt: string | string;
}>;
export type DocumentLibraryDeliveriesResponse = import("../types").ApiEnvelope<DocumentLibraryDeliveriesResponseData>;

export type DocumentLibrarySendParams = {
  id: number;
};
export type DocumentLibrarySendQuery = {
  companyId: number;
};
export type DocumentLibrarySendBody = {
  requestId: string;
  to: string;
  subject: string;
  message: string;
};
export type DocumentLibrarySendResponseData = {
  id: number;
  documentId: number;
  recipient: string;
  subject: string;
  senderName: string;
  status: string;
  messageId: string | null;
  provider: string | null;
  createdAt: string | string;
};
export type DocumentLibrarySendResponse = import("../types").ApiEnvelope<DocumentLibrarySendResponseData>;

export const apiRoutes_document_library = {
  // Contract source: explicit
  "document_library_settings": {
    method: "GET",
    path: "/documents/library/settings",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibrarySettingsParams;
      query: DocumentLibrarySettingsQuery;
      body: DocumentLibrarySettingsBody;
      response: DocumentLibrarySettingsResponse;
      responseData: DocumentLibrarySettingsResponseData;
    },
  },
  // Contract source: explicit
  "document_library_settings_save": {
    method: "PUT",
    path: "/documents/library/settings",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibrarySettingsSaveParams;
      query: DocumentLibrarySettingsSaveQuery;
      body: DocumentLibrarySettingsSaveBody;
      response: DocumentLibrarySettingsSaveResponse;
      responseData: DocumentLibrarySettingsSaveResponseData;
    },
  },
  // Contract source: explicit
  "document_library_branding": {
    method: "GET",
    path: "/documents/library/branding",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryBrandingParams;
      query: DocumentLibraryBrandingQuery;
      body: DocumentLibraryBrandingBody;
      response: DocumentLibraryBrandingResponse;
      responseData: DocumentLibraryBrandingResponseData;
    },
  },
  // Contract source: explicit
  "document_library_list": {
    method: "GET",
    path: "/documents/library",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryListParams;
      query: DocumentLibraryListQuery;
      body: DocumentLibraryListBody;
      response: DocumentLibraryListResponse;
      responseData: DocumentLibraryListResponseData;
    },
  },
  // Contract source: explicit
  "document_library_folders": {
    method: "GET",
    path: "/documents/library/folders",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryFoldersParams;
      query: DocumentLibraryFoldersQuery;
      body: DocumentLibraryFoldersBody;
      response: DocumentLibraryFoldersResponse;
      responseData: DocumentLibraryFoldersResponseData;
    },
  },
  // Contract source: explicit
  "document_library_folder_create": {
    method: "POST",
    path: "/documents/library/folders",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryFolderCreateParams;
      query: DocumentLibraryFolderCreateQuery;
      body: DocumentLibraryFolderCreateBody;
      response: DocumentLibraryFolderCreateResponse;
      responseData: DocumentLibraryFolderCreateResponseData;
    },
  },
  // Contract source: explicit
  "document_library_folder_update": {
    method: "PUT",
    path: "/documents/library/folders/:id",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryFolderUpdateParams;
      query: DocumentLibraryFolderUpdateQuery;
      body: DocumentLibraryFolderUpdateBody;
      response: DocumentLibraryFolderUpdateResponse;
      responseData: DocumentLibraryFolderUpdateResponseData;
    },
  },
  // Contract source: explicit
  "document_library_folder_delete": {
    method: "DELETE",
    path: "/documents/library/folders/:id",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryFolderDeleteParams;
      query: DocumentLibraryFolderDeleteQuery;
      body: DocumentLibraryFolderDeleteBody;
      response: DocumentLibraryFolderDeleteResponse;
      responseData: DocumentLibraryFolderDeleteResponseData;
    },
  },
  // Contract source: explicit
  "document_library_batch": {
    method: "POST",
    path: "/documents/library/batch",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryBatchParams;
      query: DocumentLibraryBatchQuery;
      body: DocumentLibraryBatchBody;
      response: DocumentLibraryBatchResponse;
      responseData: DocumentLibraryBatchResponseData;
    },
  },
  // Contract source: explicit
  "document_library_metadata": {
    method: "PATCH",
    path: "/documents/library/:id/metadata",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryMetadataParams;
      query: DocumentLibraryMetadataQuery;
      body: DocumentLibraryMetadataBody;
      response: DocumentLibraryMetadataResponse;
      responseData: DocumentLibraryMetadataResponseData;
    },
  },
  // Contract source: explicit
  "document_library_drafts": {
    method: "GET",
    path: "/documents/library/drafts",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryDraftsParams;
      query: DocumentLibraryDraftsQuery;
      body: DocumentLibraryDraftsBody;
      response: DocumentLibraryDraftsResponse;
      responseData: DocumentLibraryDraftsResponseData;
    },
  },
  // Contract source: explicit
  "document_library_draft_get": {
    method: "GET",
    path: "/documents/library/drafts/:id",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryDraftGetParams;
      query: DocumentLibraryDraftGetQuery;
      body: DocumentLibraryDraftGetBody;
      response: DocumentLibraryDraftGetResponse;
      responseData: DocumentLibraryDraftGetResponseData;
    },
  },
  // Contract source: explicit
  "document_library_draft_create": {
    method: "POST",
    path: "/documents/library/drafts",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":false,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryDraftCreateParams;
      query: DocumentLibraryDraftCreateQuery;
      body: DocumentLibraryDraftCreateBody;
      response: DocumentLibraryDraftCreateResponse;
      responseData: DocumentLibraryDraftCreateResponseData;
    },
  },
  // Contract source: explicit
  "document_library_draft_update": {
    method: "PUT",
    path: "/documents/library/drafts/:id",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryDraftUpdateParams;
      query: DocumentLibraryDraftUpdateQuery;
      body: DocumentLibraryDraftUpdateBody;
      response: DocumentLibraryDraftUpdateResponse;
      responseData: DocumentLibraryDraftUpdateResponseData;
    },
  },
  // Contract source: explicit
  "document_library_draft_delete": {
    method: "DELETE",
    path: "/documents/library/drafts/:id",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryDraftDeleteParams;
      query: DocumentLibraryDraftDeleteQuery;
      body: DocumentLibraryDraftDeleteBody;
      response: DocumentLibraryDraftDeleteResponse;
      responseData: DocumentLibraryDraftDeleteResponseData;
    },
  },
  // Contract source: explicit
  "document_library_preview": {
    method: "POST",
    path: "/documents/library/drafts/:id/preview",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryPreviewParams;
      query: DocumentLibraryPreviewQuery;
      body: DocumentLibraryPreviewBody;
      response: DocumentLibraryPreviewResponse;
      responseData: DocumentLibraryPreviewResponseData;
    },
  },
  // Contract source: explicit
  "document_library_render": {
    method: "POST",
    path: "/documents/library/drafts/:id/render",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibraryRenderParams;
      query: DocumentLibraryRenderQuery;
      body: DocumentLibraryRenderBody;
      response: DocumentLibraryRenderResponse;
      responseData: DocumentLibraryRenderResponseData;
    },
  },
  // Contract source: explicit
  "document_library_deliveries": {
    method: "GET",
    path: "/documents/library/:id/deliveries",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentLibraryDeliveriesParams;
      query: DocumentLibraryDeliveriesQuery;
      body: DocumentLibraryDeliveriesBody;
      response: DocumentLibraryDeliveriesResponse;
      responseData: DocumentLibraryDeliveriesResponseData;
    },
  },
  // Contract source: explicit
  "document_library_send": {
    method: "POST",
    path: "/documents/library/:id/send",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["document_library"],
      validated: {"params":true,"query":true,"body":true},
    },
    types: null as unknown as {
      params: DocumentLibrarySendParams;
      query: DocumentLibrarySendQuery;
      body: DocumentLibrarySendBody;
      response: DocumentLibrarySendResponse;
      responseData: DocumentLibrarySendResponseData;
    },
  },
} as const;