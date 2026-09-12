// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.405Z
// Run `pnpm run api:generate` to regenerate

import type { PaginatedResult, WorkEntry, WorkEntryAssignment } from "../../frontend-types";

export type WorkTrackingAssignmentCreateParams = undefined;
export type WorkTrackingAssignmentCreateQuery = undefined;
export type WorkTrackingAssignmentCreateBody = {
  workEntryId: number;
  companyId?: number | null;
};
export type WorkTrackingAssignmentCreateResponseData = WorkEntryAssignment;
export type WorkTrackingAssignmentCreateResponse = import("../types").ApiEnvelope<WorkTrackingAssignmentCreateResponseData>;

export type WorkTrackingAssignmentUpdateParams = {
  workEntryAssignmentId: number;
};
export type WorkTrackingAssignmentUpdateQuery = undefined;
export type WorkTrackingAssignmentUpdateBody = {
  workEntryId?: number;
  companyId?: number | null;
};
export type WorkTrackingAssignmentUpdateResponseData = WorkEntryAssignment;
export type WorkTrackingAssignmentUpdateResponse = import("../types").ApiEnvelope<WorkTrackingAssignmentUpdateResponseData>;

export type WorkTrackingAssignmentDeleteParams = {
  workEntryAssignmentId: number;
};
export type WorkTrackingAssignmentDeleteQuery = undefined;
export type WorkTrackingAssignmentDeleteBody = undefined;
export type WorkTrackingAssignmentDeleteResponseData = null;
export type WorkTrackingAssignmentDeleteResponse = import("../types").ApiEnvelope<WorkTrackingAssignmentDeleteResponseData>;

export type WorkTrackingGetMyRoleParams = undefined;
export type WorkTrackingGetMyRoleQuery = {

};
export type WorkTrackingGetMyRoleBody = undefined;
export type WorkTrackingGetMyRoleResponseData = string;
export type WorkTrackingGetMyRoleResponse = import("../types").ApiEnvelope<WorkTrackingGetMyRoleResponseData>;

export type WorkTrackingListParams = undefined;
export type WorkTrackingListQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
  userId?: number;
  companyId?: number;
  status?: "pending" | "approved" | "rejected";
};
export type WorkTrackingListBody = undefined;
export type WorkTrackingListResponseData = PaginatedResult<WorkEntry>;
export type WorkTrackingListResponse = import("../types").ApiEnvelope<WorkTrackingListResponseData>;

export type WorkTrackingGetByIdParams = {
  workEntryId: number;
};
export type WorkTrackingGetByIdQuery = undefined;
export type WorkTrackingGetByIdBody = undefined;
export type WorkTrackingGetByIdResponseData = WorkEntry;
export type WorkTrackingGetByIdResponse = import("../types").ApiEnvelope<WorkTrackingGetByIdResponseData>;

export type WorkTrackingCreateParams = undefined;
export type WorkTrackingCreateQuery = undefined;
export type WorkTrackingCreateBody = {
  start: string | any;
  end?: string | any | null;
  timeInMinutes?: number | null;
  entryType: "work" | "assistance" | "service" | "consultation" | "planning" | "administration" | "meeting" | "travel" | "maintenance" | "training" | "support" | "other";
  description?: string | null;
  isBillable?: boolean;
  companyId?: number | null;
};
export type WorkTrackingCreateResponseData = WorkEntry;
export type WorkTrackingCreateResponse = import("../types").ApiEnvelope<WorkTrackingCreateResponseData>;

export type WorkTrackingUpdateParams = {
  workEntryId: number;
};
export type WorkTrackingUpdateQuery = undefined;
export type WorkTrackingUpdateBody = {
  start?: string | any;
  end?: string | any | null;
  timeInMinutes?: number | null;
  entryType?: "work" | "assistance" | "service" | "consultation" | "planning" | "administration" | "meeting" | "travel" | "maintenance" | "training" | "support" | "other";
  description?: string | null;
  isBillable?: boolean;
  companyId?: number | null;
};
export type WorkTrackingUpdateResponseData = WorkEntry;
export type WorkTrackingUpdateResponse = import("../types").ApiEnvelope<WorkTrackingUpdateResponseData>;

export type WorkTrackingDeleteParams = {
  workEntryId: number;
};
export type WorkTrackingDeleteQuery = undefined;
export type WorkTrackingDeleteBody = undefined;
export type WorkTrackingDeleteResponseData = null;
export type WorkTrackingDeleteResponse = import("../types").ApiEnvelope<WorkTrackingDeleteResponseData>;

export type WorkTrackingApproveParams = {
  workEntryId: number;
};
export type WorkTrackingApproveQuery = undefined;
export type WorkTrackingApproveBody = {
  isBilled?: boolean;
};
export type WorkTrackingApproveResponseData = WorkEntry;
export type WorkTrackingApproveResponse = import("../types").ApiEnvelope<WorkTrackingApproveResponseData>;

export type WorkTrackingRejectParams = {
  workEntryId: number;
};
export type WorkTrackingRejectQuery = undefined;
export type WorkTrackingRejectBody = {
  rejectionReason: string;
};
export type WorkTrackingRejectResponseData = WorkEntry;
export type WorkTrackingRejectResponse = import("../types").ApiEnvelope<WorkTrackingRejectResponseData>;

export type WorkTrackingBillPreviewParams = undefined;
export type WorkTrackingBillPreviewQuery = undefined;
export type WorkTrackingBillPreviewBody = {
  workEntryIds: Array<number>;
  companyId: number;
  hourlyRate: number;
  invoiceDate?: string | any;
  dueDate?: string | any;
  notes?: string;
  paymentAccountId?: number | null;
  bankFallbackAccountId?: number | null;
};
export type WorkTrackingBillPreviewResponseData = {
  quoteVersion: string;
  quoteHash: string;
  computedAt: string;
  totals: {
  net: number;
  tax: number;
  gross: number;
  currency: string;
};
  vat: {
  requestedProductType: string | null;
  effectiveTreatment: string;
  effectiveRate: number;
  legalReference: string | null;
  note: string | null;
  isMixedRates: boolean;
};
  paymentResolution: {
  paymentAccountId: number | null;
  paymentAccountSource: string;
  bankFallbackAccountId: number | null;
  bankFallbackAccountSource: string;
};
};
export type WorkTrackingBillPreviewResponse = import("../types").ApiEnvelope<WorkTrackingBillPreviewResponseData>;

export type WorkTrackingBillParams = undefined;
export type WorkTrackingBillQuery = undefined;
export type WorkTrackingBillBody = {
  workEntryIds: Array<number>;
  companyId: number;
  hourlyRate: number;
  invoiceDate?: string | any;
  dueDate?: string | any;
  notes?: string;
  paymentAccountId?: number | null;
  bankFallbackAccountId?: number | null;
};
export type WorkTrackingBillResponseData = {
  invoiceId: number;
  invoiceNumber: string;
};
export type WorkTrackingBillResponse = import("../types").ApiEnvelope<WorkTrackingBillResponseData>;

export const apiRoutes_work_tracking = {
  "work_tracking_assignment_create": {
    method: "POST",
    path: "/apps/admin/work-tracking/assignments/create",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Create a work entry assignment",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingAssignmentCreateParams;
      query: WorkTrackingAssignmentCreateQuery;
      body: WorkTrackingAssignmentCreateBody;
      response: WorkTrackingAssignmentCreateResponse;
      responseData: WorkTrackingAssignmentCreateResponseData;
    },
  },
  "work_tracking_assignment_update": {
    method: "PUT",
    path: "/apps/admin/work-tracking/assignments/update/:workEntryAssignmentId",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Update a work entry assignment",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingAssignmentUpdateParams;
      query: WorkTrackingAssignmentUpdateQuery;
      body: WorkTrackingAssignmentUpdateBody;
      response: WorkTrackingAssignmentUpdateResponse;
      responseData: WorkTrackingAssignmentUpdateResponseData;
    },
  },
  "work_tracking_assignment_delete": {
    method: "DELETE",
    path: "/apps/admin/work-tracking/assignments/delete/:workEntryAssignmentId",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Delete a work entry assignment",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: WorkTrackingAssignmentDeleteParams;
      query: WorkTrackingAssignmentDeleteQuery;
      body: WorkTrackingAssignmentDeleteBody;
      response: WorkTrackingAssignmentDeleteResponse;
      responseData: WorkTrackingAssignmentDeleteResponseData;
    },
  },
  "work_tracking_get_my_role": {
    method: "GET",
    path: "/apps/admin/work-tracking/my-role",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Get current user's work tracking role",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: WorkTrackingGetMyRoleParams;
      query: WorkTrackingGetMyRoleQuery;
      body: WorkTrackingGetMyRoleBody;
      response: WorkTrackingGetMyRoleResponse;
      responseData: WorkTrackingGetMyRoleResponseData;
    },
  },
  "work_tracking_list": {
    method: "GET",
    path: "/apps/admin/work-tracking/list",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Search and list work entries",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: WorkTrackingListParams;
      query: WorkTrackingListQuery;
      body: WorkTrackingListBody;
      response: WorkTrackingListResponse;
      responseData: WorkTrackingListResponseData;
    },
  },
  "work_tracking_get_by_id": {
    method: "GET",
    path: "/apps/admin/work-tracking/byId/:workEntryId",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Get work entry by ID",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: WorkTrackingGetByIdParams;
      query: WorkTrackingGetByIdQuery;
      body: WorkTrackingGetByIdBody;
      response: WorkTrackingGetByIdResponse;
      responseData: WorkTrackingGetByIdResponseData;
    },
  },
  "work_tracking_create": {
    method: "POST",
    path: "/apps/admin/work-tracking/create",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Create a new work entry",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingCreateParams;
      query: WorkTrackingCreateQuery;
      body: WorkTrackingCreateBody;
      response: WorkTrackingCreateResponse;
      responseData: WorkTrackingCreateResponseData;
    },
  },
  "work_tracking_update": {
    method: "PUT",
    path: "/apps/admin/work-tracking/update/:workEntryId",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Update an existing work entry",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingUpdateParams;
      query: WorkTrackingUpdateQuery;
      body: WorkTrackingUpdateBody;
      response: WorkTrackingUpdateResponse;
      responseData: WorkTrackingUpdateResponseData;
    },
  },
  "work_tracking_delete": {
    method: "DELETE",
    path: "/apps/admin/work-tracking/delete/:workEntryId",
    auth: {"type":"frontend_permission_http","permission":"work_create"},
    meta: {
      tags: ["work-tracking"],
      summary: "Delete a work entry",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: WorkTrackingDeleteParams;
      query: WorkTrackingDeleteQuery;
      body: WorkTrackingDeleteBody;
      response: WorkTrackingDeleteResponse;
      responseData: WorkTrackingDeleteResponseData;
    },
  },
  "work_tracking_approve": {
    method: "POST",
    path: "/apps/admin/work-tracking/approve/:workEntryId",
    auth: {"type":"frontend_permission_http","permission":"work_validate"},
    meta: {
      tags: ["work-tracking"],
      summary: "Approve a work entry",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingApproveParams;
      query: WorkTrackingApproveQuery;
      body: WorkTrackingApproveBody;
      response: WorkTrackingApproveResponse;
      responseData: WorkTrackingApproveResponseData;
    },
  },
  "work_tracking_reject": {
    method: "POST",
    path: "/apps/admin/work-tracking/reject/:workEntryId",
    auth: {"type":"frontend_permission_http","permission":"work_validate"},
    meta: {
      tags: ["work-tracking"],
      summary: "Reject a work entry",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingRejectParams;
      query: WorkTrackingRejectQuery;
      body: WorkTrackingRejectBody;
      response: WorkTrackingRejectResponse;
      responseData: WorkTrackingRejectResponseData;
    },
  },
  "work_tracking_bill_preview": {
    method: "POST",
    path: "/apps/admin/work-tracking/bill/preview",
    auth: {"type":"frontend_permission_http","permission":"work_validate"},
    meta: {
      tags: ["work-tracking"],
      summary: "Preview invoice from work entries (totals, VAT, payment)",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingBillPreviewParams;
      query: WorkTrackingBillPreviewQuery;
      body: WorkTrackingBillPreviewBody;
      response: WorkTrackingBillPreviewResponse;
      responseData: WorkTrackingBillPreviewResponseData;
    },
  },
  "work_tracking_bill": {
    method: "POST",
    path: "/apps/admin/work-tracking/bill",
    auth: {"type":"frontend_permission_http","permission":"work_validate"},
    meta: {
      tags: ["work-tracking"],
      summary: "Bill multiple work entries (create invoice)",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: WorkTrackingBillParams;
      query: WorkTrackingBillQuery;
      body: WorkTrackingBillBody;
      response: WorkTrackingBillResponse;
      responseData: WorkTrackingBillResponseData;
    },
  },
} as const;