// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

import type { PaginatedResult, Webhook } from "../../frontend-types";

export type WebhooksSearchParams = undefined;
export type WebhooksSearchQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  provider?: string;
  eventType?: string;
  status?: "pending" | "processed" | "failed" | "skipped";
  processed?: boolean;
  externalId?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: "createdAt" | "processedAt" | "status";
  sortOrder?: "asc" | "desc";
};
export type WebhooksSearchBody = undefined;
export type WebhooksSearchResponseData = { webhooks: PaginatedResult<Webhook>; canDelete: boolean };
export type WebhooksSearchResponse = import("../types").ApiEnvelope<WebhooksSearchResponseData>;

export type WebhooksDeleteParams = {
  webhookId: number;
};
export type WebhooksDeleteQuery = undefined;
export type WebhooksDeleteBody = undefined;
export type WebhooksDeleteResponseData = null;
export type WebhooksDeleteResponse = import("../types").ApiEnvelope<WebhooksDeleteResponseData>;

export type WebhooksDeleteBulkParams = {
  webhookIds: string;
};
export type WebhooksDeleteBulkQuery = undefined;
export type WebhooksDeleteBulkBody = undefined;
export type WebhooksDeleteBulkResponseData = null;
export type WebhooksDeleteBulkResponse = import("../types").ApiEnvelope<WebhooksDeleteBulkResponseData>;

export const apiRoutes_webhooks = {
  // Contract source: explicit
  "webhooks_search": {
    method: "GET",
    path: "/webhooks/search",
    auth: {"type":"frontend_permission_http","permission":"webhook_view"},
    meta: {
      tags: ["webhooks"],
      summary: "Search webhooks (paginated)",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: WebhooksSearchParams;
      query: WebhooksSearchQuery;
      body: WebhooksSearchBody;
      response: WebhooksSearchResponse;
      responseData: WebhooksSearchResponseData;
    },
  },
  // Contract source: explicit
  "webhooks_delete": {
    method: "DELETE",
    path: "/webhooks/delete/:webhookId",
    auth: {"type":"frontend_permission_http","permission":"webhook_delete"},
    meta: {
      tags: ["webhooks"],
      summary: "Delete one webhook",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: WebhooksDeleteParams;
      query: WebhooksDeleteQuery;
      body: WebhooksDeleteBody;
      response: WebhooksDeleteResponse;
      responseData: WebhooksDeleteResponseData;
    },
  },
  // Contract source: explicit
  "webhooks_delete_bulk": {
    method: "DELETE",
    path: "/webhooks/delete/mass/:webhookIds",
    auth: {"type":"frontend_permission_http","permission":"webhook_delete"},
    meta: {
      tags: ["webhooks"],
      summary: "Delete multiple webhooks",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: WebhooksDeleteBulkParams;
      query: WebhooksDeleteBulkQuery;
      body: WebhooksDeleteBulkBody;
      response: WebhooksDeleteBulkResponse;
      responseData: WebhooksDeleteBulkResponseData;
    },
  },
} as const;