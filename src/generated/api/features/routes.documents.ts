// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.583Z
// Run `pnpm run api:generate` to regenerate

import type { Document, DocumentAssignment, FullDocument } from "../../frontend-types";

export type DocumentsGetByIdParams = {
  documentId: number;
};
export type DocumentsGetByIdQuery = undefined;
export type DocumentsGetByIdBody = undefined;
export type DocumentsGetByIdResponseData = FullDocument;
export type DocumentsGetByIdResponse = import("../types").ApiEnvelope<DocumentsGetByIdResponseData>;

export type DocumentsGetFullByIdParams = {
  documentId: number;
};
export type DocumentsGetFullByIdQuery = undefined;
export type DocumentsGetFullByIdBody = undefined;
export type DocumentsGetFullByIdResponseData = FullDocument;
export type DocumentsGetFullByIdResponse = import("../types").ApiEnvelope<DocumentsGetFullByIdResponseData>;

export type DocumentsSearchParams = undefined;
export type DocumentsSearchQuery = {
  q?: string;
  ownerType?: "company" | "user" | "invoice" | "internal" | "revenue" | "expense" | "asset" | "capital_movement";
  ownerId?: number;
  page?: number;
  pageSize?: number;
};
export type DocumentsSearchBody = undefined;
export type DocumentsSearchResponseData = { items: Array<Document>; total: number; page: number; pageSize: number };
export type DocumentsSearchResponse = import("../types").ApiEnvelope<DocumentsSearchResponseData>;

export type DocumentsDownloadUrlParams = {
  documentId: number;
};
export type DocumentsDownloadUrlQuery = {
  expiresInSec?: number;
};
export type DocumentsDownloadUrlBody = undefined;
export type DocumentsDownloadUrlResponseData = string;
export type DocumentsDownloadUrlResponse = import("../types").ApiEnvelope<DocumentsDownloadUrlResponseData>;

export type DocumentsStreamParams = {
  documentId: number;
};
export type DocumentsStreamQuery = {
  expiresInSec?: number;
};
export type DocumentsStreamBody = undefined;
export type DocumentsStreamResponseData = Blob;
export type DocumentsStreamResponse = Blob;

export type DocumentsCreateParams = undefined;
export type DocumentsCreateQuery = undefined;
export type DocumentsCreateBody = {
  ownerType?: "company" | "user" | "invoice" | "internal" | "revenue" | "expense" | "asset" | "capital_movement";
  ownerId?: number;
};
export type DocumentsCreateResponseData = Document;
export type DocumentsCreateResponse = import("../types").ApiEnvelope<DocumentsCreateResponseData>;

export type DocumentsAssignParams = undefined;
export type DocumentsAssignQuery = undefined;
export type DocumentsAssignBody = {
  documentId: number;
  ownerType: "company" | "user" | "invoice" | "internal" | "revenue" | "expense" | "asset" | "capital_movement";
  ownerId?: number;
};
export type DocumentsAssignResponseData = DocumentAssignment;
export type DocumentsAssignResponse = import("../types").ApiEnvelope<DocumentsAssignResponseData>;

export type DocumentsDeleteAssignmentParams = {
  assignmentId: number;
};
export type DocumentsDeleteAssignmentQuery = undefined;
export type DocumentsDeleteAssignmentBody = undefined;
export type DocumentsDeleteAssignmentResponseData = null;
export type DocumentsDeleteAssignmentResponse = import("../types").ApiEnvelope<DocumentsDeleteAssignmentResponseData>;

export type DocumentsDeleteParams = {
  documentId: number;
};
export type DocumentsDeleteQuery = {
  force?: boolean;
};
export type DocumentsDeleteBody = undefined;
export type DocumentsDeleteResponseData = null;
export type DocumentsDeleteResponse = import("../types").ApiEnvelope<DocumentsDeleteResponseData>;

export type DocumentsSetLockParams = {
  documentId: number;
};
export type DocumentsSetLockQuery = undefined;
export type DocumentsSetLockBody = {
  locked: boolean;
};
export type DocumentsSetLockResponseData = Document;
export type DocumentsSetLockResponse = import("../types").ApiEnvelope<DocumentsSetLockResponseData>;

export const apiRoutes_documents = {
  "documents_get_by_id": {
    method: "GET",
    path: "/documents/admin/byId/:documentId",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: DocumentsGetByIdParams;
      query: DocumentsGetByIdQuery;
      body: DocumentsGetByIdBody;
      response: DocumentsGetByIdResponse;
      responseData: DocumentsGetByIdResponseData;
    },
  },
  "documents_get_full_by_id": {
    method: "GET",
    path: "/documents/admin/byId/:documentId/full",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: DocumentsGetFullByIdParams;
      query: DocumentsGetFullByIdQuery;
      body: DocumentsGetFullByIdBody;
      response: DocumentsGetFullByIdResponse;
      responseData: DocumentsGetFullByIdResponseData;
    },
  },
  "documents_search": {
    method: "GET",
    path: "/documents/admin/search",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["documents"],
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentsSearchParams;
      query: DocumentsSearchQuery;
      body: DocumentsSearchBody;
      response: DocumentsSearchResponse;
      responseData: DocumentsSearchResponseData;
    },
  },
  "documents_download_url": {
    method: "GET",
    path: "/documents/admin/byId/:documentId/download-url",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentsDownloadUrlParams;
      query: DocumentsDownloadUrlQuery;
      body: DocumentsDownloadUrlBody;
      response: DocumentsDownloadUrlResponse;
      responseData: DocumentsDownloadUrlResponseData;
    },
  },
  "documents_stream": {
    method: "GET",
    path: "/documents/admin/stream/:documentId",
    auth: {"type":"frontend_permission_http","permission":"documents_access"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentsStreamParams;
      query: DocumentsStreamQuery;
      body: DocumentsStreamBody;
      response: DocumentsStreamResponse;
      responseData: DocumentsStreamResponseData;
    },
  },
  "documents_create": {
    method: "POST",
    path: "/documents/admin/create",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["documents"],
      bodyContentType: "multipart/form-data",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DocumentsCreateParams;
      query: DocumentsCreateQuery;
      body: DocumentsCreateBody;
      response: DocumentsCreateResponse;
      responseData: DocumentsCreateResponseData;
    },
  },
  "documents_assign": {
    method: "POST",
    path: "/documents/admin/assign",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["documents"],
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DocumentsAssignParams;
      query: DocumentsAssignQuery;
      body: DocumentsAssignBody;
      response: DocumentsAssignResponse;
      responseData: DocumentsAssignResponseData;
    },
  },
  "documents_delete_assignment": {
    method: "DELETE",
    path: "/documents/admin/assignments/:assignmentId",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: DocumentsDeleteAssignmentParams;
      query: DocumentsDeleteAssignmentQuery;
      body: DocumentsDeleteAssignmentBody;
      response: DocumentsDeleteAssignmentResponse;
      responseData: DocumentsDeleteAssignmentResponseData;
    },
  },
  "documents_delete": {
    method: "DELETE",
    path: "/documents/admin/delete/:documentId",
    auth: {"type":"frontend_permission_http","permission":"documents_manage"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: DocumentsDeleteParams;
      query: DocumentsDeleteQuery;
      body: DocumentsDeleteBody;
      response: DocumentsDeleteResponse;
      responseData: DocumentsDeleteResponseData;
    },
  },
  "documents_set_lock": {
    method: "PUT",
    path: "/documents/admin/lock/:documentId",
    auth: {"type":"frontend_permission_http","permission":"documents_admin"},
    meta: {
      tags: ["documents"],
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DocumentsSetLockParams;
      query: DocumentsSetLockQuery;
      body: DocumentsSetLockBody;
      response: DocumentsSetLockResponse;
      responseData: DocumentsSetLockResponseData;
    },
  },
} as const;