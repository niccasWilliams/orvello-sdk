import type {
  InvoicesCreateExternalBody,
  InvoicesCreateExternalResponseData,
  InvoicesGetByIdExternalResponseData,
  InvoicesSearchExternalQuery,
  InvoicesSearchExternalResponseData,
  InvoicesPendingExternalResponseData,
  InvoicesOverdueExternalResponseData,
  InvoicesStatusPolicyExternalResponseData,
  InvoicesUpdateStatusExternalBody,
  InvoicesUpdateStatusExternalResponseData,
  InvoicesCreditNotePreviewExternalBody,
  InvoicesCreditNotePreviewExternalResponseData,
  InvoicesCreditNoteIssueExternalBody,
  InvoicesCreditNoteIssueExternalResponseData,
  InvoicesDeleteExternalResponseData,
  InvoicesSendEmailExternalBody,
  InvoicesSendEmailExternalResponseData,
} from "./generated/api/features/routes.invoices_external.js";

import type {
  CustomerCompaniesSearchExternalQuery,
  CustomerCompaniesSearchExternalResponseData,
  CustomerCompaniesGetByIdExternalResponseData,
  CustomerCompaniesCreateExternalBody,
  CustomerCompaniesCreateExternalResponseData,
  CustomerCompaniesUpdateExternalBody,
  CustomerCompaniesUpdateExternalResponseData,
  CustomerCompaniesDeleteExternalResponseData,
} from "./generated/api/features/routes.customer_companies_external.js";

import type {
  ManagingCompaniesCurrentExternalResponseData,
} from "./generated/api/features/routes.managing_companies_external.js";

import type {
  DunningSuggestionsExternalQuery,
  DunningSuggestionsExternalResponseData,
  DunningPreviewExternalBody,
  DunningPreviewExternalResponseData,
  DunningIssueExternalBody,
  DunningIssueExternalResponseData,
  DunningGetSettingsExternalResponseData,
  DunningUpdateSettingsExternalBody,
  DunningUpdateSettingsExternalResponseData,
} from "./generated/api/features/routes.dunning_external.js";

import type {
  BookkeepingRevenuesCreateExternalBody,
  BookkeepingRevenuesCreateExternalResponseData,
  BookkeepingRevenuesInvoiceAdjustmentExternalBody,
  BookkeepingRevenuesInvoiceAdjustmentExternalResponseData,
  BookkeepingExpensesCreateExternalBody,
  BookkeepingExpensesCreateExternalResponseData,
  BookkeepingPaymentsListAccountsExternalQuery,
  BookkeepingPaymentsListAccountsExternalResponseData,
  BookkeepingPaymentsCreateManualExternalBody,
  BookkeepingPaymentsCreateManualExternalResponseData,
  BookkeepingPaymentsSettleInvoiceExternalBody,
  BookkeepingPaymentsSettleInvoiceExternalResponseData,
} from "./generated/api/features/routes.bookkeeping.js";

import type {
  UsersGetByExternalUserIdResponseData,
  UsersUpdateExternalBody,
  UsersUpdateExternalResponseData,
  UsersDeleteExternalResponseData,
} from "./generated/api/base/routes.users.js";

import type {
  Oauth2ExternalClientsListQuery,
  Oauth2ExternalClientsListResponseData,
  Oauth2ExternalClientsGetResponseData,
  Oauth2ExternalClientsCreateBody,
  Oauth2ExternalClientsCreateResponseData,
  Oauth2ExternalClientsUpdateBody,
  Oauth2ExternalClientsUpdateResponseData,
  Oauth2ExternalClientsRotateBody,
  Oauth2ExternalClientsRotateResponseData,
  Oauth2ExternalClientsRetireResponseData,
  Oauth2ExternalClientsRollbackResponseData,
  Oauth2ExternalClientsRevokeResponseData,
  Oauth2ExternalClientsDeleteResponseData,
} from "./generated/api/features/routes.oauth2_external.js";

import { type BaseUrlProvider } from "./diagnose.js";
import {
  type ExpenseReceiptUpload,
  type BankAccountDetails,
  mapPaymentAccountToBankDetails,
} from "./helpers.js";

export type AuthProvider =
  | string
  | (() => string | Promise<string>)
  | {
      apiKey: string;
    }
  | {
      clientId: string;
      clientSecret: string;
      scope?: string;
      tokenUrl?: string;
    };

export interface OrvelloClientConfig {
  /**
   * Base URL of the orvello accounting/invoicing service this client talks to.
   *
   * The SDK deliberately ships **no** baked-in default endpoint: every instance
   * resolves its target platform explicitly. Pass `baseUrl`, or the same value
   * via the `ORVELLO_URL` environment variable. Without either the constructor
   * throws rather than silently aiming at a fixed host.
   */
  baseUrl?: BaseUrlProvider;
  auth?: AuthProvider;
  fetch?: typeof globalThis.fetch;
  timeoutMs?: number;
  maxRetries?: number;
  retryBaseDelayMs?: number;
}

export interface RequestOptions {
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
  idempotencyKey?: string;
  rawResponse?: boolean;
  timeoutMs?: number;
  maxRetries?: number;
  signal?: AbortSignal;
}

export class OrvelloApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly endpoint: string,
    public readonly body: unknown,
    message?: string
  ) {
    super(message || `orvello request to ${endpoint} failed with status ${status}: ${statusText}`);
    this.name = "OrvelloApiError";
  }

  /** Readable alias for the primary `status` field. */
  public get statusCode(): number {
    return this.status;
  }

  /** Readable alias for the raw `body` payload. */
  public get responseBody(): unknown {
    return this.body;
  }
}

export class OrvelloClient {
  public readonly baseUrl: BaseUrlProvider;
  private readonly auth?: AuthProvider;
  private readonly doFetch: typeof globalThis.fetch;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly retryBaseDelayMs: number;
  private cachedOAuthToken: { token: string; expiresAt: number } | null = null;

  // Cached default bank account (5 minutes TTL)
  private _bankAccountCache: BankAccountDetails | null = null;
  private _bankAccountCacheTime = 0;

  constructor(config: OrvelloClientConfig = {}) {
    const baseUrl = config.baseUrl ?? this.envBaseUrl();
    if (!baseUrl) {
      throw new Error(
        "OrvelloClient requires a target platform: pass { baseUrl } or set the ORVELLO_URL " +
          "environment variable. The SDK deliberately ships no baked-in default endpoint."
      );
    }
    this.baseUrl = baseUrl;

    if (config.auth) {
      this.auth = config.auth;
    } else {
      this.auth = this.envAuth();
    }

    this.doFetch = config.fetch || globalThis.fetch;
    this.timeoutMs = config.timeoutMs ?? 15_000;
    this.maxRetries = config.maxRetries ?? 3;
    this.retryBaseDelayMs = config.retryBaseDelayMs ?? 500;
  }

  private envBaseUrl(): BaseUrlProvider | undefined {
    if (typeof process === "undefined" || !process?.env) return undefined;
    const url = process.env.ORVELLO_URL;
    return url ? url : undefined;
  }

  private envAuth(): AuthProvider | undefined {
    if (typeof process === "undefined" || !process?.env) return undefined;
    const clientId = process.env.ORVELLO_OAUTH_CLIENT_ID;
    const clientSecret = process.env.ORVELLO_OAUTH_CLIENT_SECRET;
    const apiKey = process.env.ORVELLO_API_KEY;
    const scope = process.env.ORVELLO_OAUTH_SCOPE;

    if (clientId && clientSecret && clientId !== "todo" && clientSecret !== "todo") {
      return { clientId, clientSecret, ...(scope ? { scope } : {}) };
    }
    if (apiKey) return { apiKey };
    return undefined;
  }

  public async resolveBaseUrl(): Promise<string> {
    const val = typeof this.baseUrl === "function" ? await this.baseUrl() : this.baseUrl;
    return val.replace(/\/+$/, "");
  }

  private async getAuthHeader(): Promise<string | null> {
    if (!this.auth) return null;

    if (typeof this.auth === "string") {
      return this.auth.startsWith("Bearer ") ? this.auth : `Bearer ${this.auth}`;
    }

    if (typeof this.auth === "function") {
      const token = await this.auth();
      return token.startsWith("Bearer ") ? token : `Bearer ${token}`;
    }

    if (typeof this.auth === "object" && "apiKey" in this.auth && typeof this.auth.apiKey === "string") {
      const key = this.auth.apiKey;
      return key.startsWith("Bearer ") ? key : `Bearer ${key}`;
    }

    // OAuth2 client_credentials flow
    if (
      typeof this.auth === "object" &&
      "clientId" in this.auth &&
      "clientSecret" in this.auth
    ) {
      const now = Date.now();
      if (this.cachedOAuthToken && this.cachedOAuthToken.expiresAt > now + 30_000) {
        return `Bearer ${this.cachedOAuthToken.token}`;
      }

      const baseUrl = await this.resolveBaseUrl();
      const tokenEndpoint = this.auth.tokenUrl || `${baseUrl}/oauth/token`;
      const credentials = typeof Buffer !== "undefined"
        ? Buffer.from(`${this.auth.clientId}:${this.auth.clientSecret}`).toString("base64")
        : globalThis.btoa(`${this.auth.clientId}:${this.auth.clientSecret}`);

      const bodyParams = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: this.auth.clientId,
        client_secret: this.auth.clientSecret,
      });
      if (this.auth.scope) {
        bodyParams.set("scope", this.auth.scope);
      }

      const resp = await this.doFetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Authorization": `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: bodyParams.toString(),
      });

      if (!resp.ok) {
        let errBody: unknown;
        try {
          errBody = await resp.json();
        } catch {
          errBody = await resp.text().catch(() => "");
        }
        throw new OrvelloApiError(
          resp.status,
          resp.statusText,
          tokenEndpoint,
          errBody,
          "Failed to obtain OAuth2 token from the orvello service"        );
      }

    const data = (await resp.json()) as { access_token: string; expires_in?: number };
    const expiresIn = data.expires_in || 3600;
    this.cachedOAuthToken = {
      token: data.access_token,
      expiresAt: now + expiresIn * 1000,
    };

      return `Bearer ${data.access_token}`;
    }

    return null;
  }

  private isRetriable(status: number | null, error: unknown): boolean {
    if (status !== null) {
      // 5xx = server error, 429 = rate limit
      return status >= 500 || status === 429;
    }
    if (error instanceof Error) {
      const msg = error.message.toLowerCase();
      return (
        error.name === "AbortError" ||
        error.name === "TimeoutError" ||
        msg.includes("fetch failed") ||
        msg.includes("network") ||
        msg.includes("econnrefused") ||
        msg.includes("etimedout") ||
        msg.includes("enotfound") ||
        msg.includes("socket")
      );
    }
    return false;
  }

  public async request<T = unknown>(
    path: string,
    options: RequestInit & RequestOptions = {}
  ): Promise<T> {
    const maxRetries = options.maxRetries ?? this.maxRetries;
    const timeoutMs = options.timeoutMs ?? this.timeoutMs;
    const baseUrl = await this.resolveBaseUrl();
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const url = new URL(`${baseUrl}${cleanPath}`);

    if (options.query) {
      for (const [k, v] of Object.entries(options.query)) {
        if (v !== undefined && v !== null) {
          url.searchParams.set(k, String(v));
        }
      }
    }

    let lastError: unknown;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const controller = new AbortController();
      const onAbort = () => controller.abort(options.signal?.reason);
      options.signal?.addEventListener("abort", onAbort, { once: true });
      if (options.signal?.aborted) controller.abort(options.signal.reason);

      const timer = setTimeout(
        () => controller.abort(new Error(`Request timed out after ${timeoutMs}ms`)),
        timeoutMs
      );

      try {
        const authHeader = await this.getAuthHeader();
        const headers = new Headers(options.headers);

        if (!headers.has("Accept")) {
          headers.set("Accept", options.rawResponse ? "*/*" : "application/json");
        }
        if (authHeader && !headers.has("Authorization")) {
          headers.set("Authorization", authHeader);
        }
        if (options.idempotencyKey && !headers.has("Idempotency-Key")) {
          headers.set("Idempotency-Key", options.idempotencyKey);
        }
        if (options.body && typeof options.body === "string" && !headers.has("Content-Type")) {
          headers.set("Content-Type", "application/json");
        }

        const resp = await this.doFetch(url.toString(), {
          ...options,
          headers,
          signal: controller.signal,
        });

        if (!resp.ok) {
          if (resp.status === 401) {
            const hadCachedToken = Boolean(this.cachedOAuthToken);
            this.cachedOAuthToken = null;
            // If we used a cached token and it was rejected with 401, retry once with fresh token
            if (hadCachedToken && attempt === 0 && attempt < maxRetries) {
              continue;
            }
          }

          let errBody: unknown;
          try {
            errBody = await resp.json();
          } catch {
            errBody = await resp.text().catch(() => null);
          }

          const apiMessage =
            errBody && typeof errBody === "object" && "message" in errBody && typeof (errBody as { message: unknown }).message === "string"
              ? (errBody as { message: string }).message
              : undefined;

          const error = new OrvelloApiError(resp.status, resp.statusText, cleanPath, errBody, apiMessage);

          if (!this.isRetriable(resp.status, error) || attempt >= maxRetries) {
            throw error;
          }
          lastError = error;
        } else {
          // Success response
          const contentType = resp.headers.get("content-type") || "";

          if (options.rawResponse || contentType.includes("application/pdf")) {
            return (await resp.blob()) as unknown as T;
          }

          if (contentType.includes("application/json")) {
            const json = await resp.json();

            // Check if response is wrapped in ApiEnvelope ({ success, data, message })
            if (json && typeof json === "object" && "success" in json) {
              const env = json as { success: boolean; data?: unknown; message?: string };
              if (env.success === false) {
                throw new OrvelloApiError(resp.status, resp.statusText, cleanPath, json, env.message || "API returned success=false");
              }
              return env.data as T;
            }

            return json as T;
          }

          return (await resp.text()) as unknown as T;
        }
      } catch (err) {
        lastError = err;
        if (err instanceof OrvelloApiError && !this.isRetriable(err.status, err)) {
          throw err;
        }
        if (!this.isRetriable(null, err) || attempt >= maxRetries) {
          throw err;
        }
      } finally {
        clearTimeout(timer);
        options.signal?.removeEventListener("abort", onAbort);
      }

      // Retry backoff delay: base * 2^attempt + jitter
      const jitter = Math.random() * 100;
      const delay = this.retryBaseDelayMs * Math.pow(2, attempt) + jitter;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    throw lastError;
  }

  // ── Invoices ─────────────────────────────────────────────────────────────
  public invoices = {
    search: (query?: InvoicesSearchExternalQuery, options?: RequestOptions) =>
      this.request<InvoicesSearchExternalResponseData>("/invoices/external", {
        method: "GET",
        query: query as Record<string, unknown>,
        ...options,
      }),

    getById: (id: number, options?: RequestOptions) =>
      this.request<InvoicesGetByIdExternalResponseData>(`/invoices/external/${id}`, {
        method: "GET",
        ...options,
      }),

    getPending: (options?: RequestOptions) =>
      this.request<InvoicesPendingExternalResponseData>("/invoices/external/pending", {
        method: "GET",
        ...options,
      }),

    getOverdue: (options?: RequestOptions) =>
      this.request<InvoicesOverdueExternalResponseData>("/invoices/external/overdue", {
        method: "GET",
        ...options,
      }),

    getStatusPolicy: (id: number, options?: RequestOptions) =>
      this.request<InvoicesStatusPolicyExternalResponseData>(`/invoices/external/${id}/status-policy`, {
        method: "GET",
        ...options,
      }),

    create: (body: InvoicesCreateExternalBody, options?: RequestOptions) =>
      this.request<InvoicesCreateExternalResponseData>("/invoices/external", {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    updateStatus: (id: number, body: InvoicesUpdateStatusExternalBody, options?: RequestOptions) =>
      this.request<InvoicesUpdateStatusExternalResponseData>(`/invoices/external/${id}/status`, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      }),

    previewCreditNote: (id: number, body: InvoicesCreditNotePreviewExternalBody, options?: RequestOptions) =>
      this.request<InvoicesCreditNotePreviewExternalResponseData>(`/invoices/external/${id}/credit-note/preview`, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    issueCreditNote: (id: number, body: InvoicesCreditNoteIssueExternalBody, options?: RequestOptions) =>
      this.request<InvoicesCreditNoteIssueExternalResponseData>(`/invoices/external/${id}/credit-note/issue`, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    delete: (id: number, options?: RequestOptions) =>
      this.request<InvoicesDeleteExternalResponseData>(`/invoices/external/${id}`, {
        method: "DELETE",
        ...options,
      }),

    viewPdf: (id: number, options?: RequestOptions) =>
      this.request<Blob>(`/invoices/external/${id}/pdf`, {
        method: "GET",
        rawResponse: true,
        ...options,
      }),

    downloadPdf: (id: number, options?: RequestOptions) =>
      this.request<Blob>(`/invoices/external/${id}/download`, {
        method: "GET",
        rawResponse: true,
        ...options,
      }),

    sendEmail: (id: number, body: InvoicesSendEmailExternalBody, options?: RequestOptions) =>
      this.request<InvoicesSendEmailExternalResponseData>(`/invoices/external/${id}/send-email`, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    downloadPdfFromUrl: async (pdfUrl: string, options?: RequestOptions): Promise<Blob> => {
      const baseUrl = await this.resolveBaseUrl();
      const targetUrl = pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://")
        ? pdfUrl
        : `${baseUrl}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`;

      const doFetch = this.doFetch;
      const authHeader = await this.getAuthHeader();
      const headers = new Headers(options?.headers);
      if (authHeader && !headers.has("Authorization")) {
        headers.set("Authorization", authHeader);
      }

      const resp = await doFetch(targetUrl, {
        method: "GET",
        headers,
        signal: options?.signal,
      });

      if (!resp.ok) {
        throw new OrvelloApiError(resp.status, resp.statusText, targetUrl, null, `Failed to download PDF from ${targetUrl}`);
      }
      return await resp.blob();
    },
  };

  // ── Customer Companies ───────────────────────────────────────────────────
  public customerCompanies = {
    search: (query?: CustomerCompaniesSearchExternalQuery, options?: RequestOptions) =>
      this.request<CustomerCompaniesSearchExternalResponseData>("/customer-companies/external", {
        method: "GET",
        query: query as Record<string, unknown>,
        ...options,
      }),

    getById: (id: number, options?: RequestOptions) =>
      this.request<CustomerCompaniesGetByIdExternalResponseData>(`/customer-companies/external/${id}`, {
        method: "GET",
        ...options,
      }),

    create: (body: CustomerCompaniesCreateExternalBody, options?: RequestOptions) =>
      this.request<CustomerCompaniesCreateExternalResponseData>("/customer-companies/external", {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    update: (id: number, body: CustomerCompaniesUpdateExternalBody, options?: RequestOptions) =>
      this.request<CustomerCompaniesUpdateExternalResponseData>(`/customer-companies/external/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      }),

    delete: (id: number, options?: RequestOptions) =>
      this.request<CustomerCompaniesDeleteExternalResponseData>(`/customer-companies/external/${id}`, {
        method: "DELETE",
        ...options,
      }),
  };

  // ── Managing Companies ───────────────────────────────────────────────────
  public managingCompanies = {
    getCurrent: (options?: RequestOptions) =>
      this.request<ManagingCompaniesCurrentExternalResponseData>("/managing-companies/external/current", {
        method: "GET",
        ...options,
      }),
  };

  // ── Dunning ──────────────────────────────────────────────────────────────
  public dunning = {
    suggestions: (query?: DunningSuggestionsExternalQuery, options?: RequestOptions) =>
      this.request<DunningSuggestionsExternalResponseData>("/invoices/external/dunning/suggestions", {
        method: "GET",
        query: query as Record<string, unknown>,
        ...options,
      }),

    preview: (invoiceId: number, body?: DunningPreviewExternalBody, options?: RequestOptions) =>
      this.request<DunningPreviewExternalResponseData>(`/invoices/external/dunning/${invoiceId}/preview`, {
        method: "POST",
        body: body ? JSON.stringify(body) : undefined,
        ...options,
      }),

    issue: (invoiceId: number, body: DunningIssueExternalBody, options?: RequestOptions) =>
      this.request<DunningIssueExternalResponseData>(`/invoices/external/dunning/${invoiceId}/issue`, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    getNoticePdf: (noticeId: number, options?: RequestOptions) =>
      this.request<Blob>(`/invoices/external/dunning/notices/${noticeId}/pdf`, {
        method: "GET",
        rawResponse: true,
        ...options,
      }),

    downloadNoticePdf: (noticeId: number, options?: RequestOptions) =>
      this.request<Blob>(`/invoices/external/dunning/notices/${noticeId}/download`, {
        method: "GET",
        rawResponse: true,
        ...options,
      }),

    getSettings: (options?: RequestOptions) =>
      this.request<DunningGetSettingsExternalResponseData>("/invoices/external/dunning/settings", {
        method: "GET",
        ...options,
      }),

    updateSettings: (body: DunningUpdateSettingsExternalBody, options?: RequestOptions) =>
      this.request<DunningUpdateSettingsExternalResponseData>("/invoices/external/dunning/settings", {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      }),
  };

  // ── Bookkeeping ──────────────────────────────────────────────────────────
  public bookkeeping = {
    revenues: {
      create: (body: BookkeepingRevenuesCreateExternalBody, options?: RequestOptions) => {
        const idempotencyKey = options?.idempotencyKey || (body as { externalRef?: string }).externalRef;
        return this.request<BookkeepingRevenuesCreateExternalResponseData>("/bookkeeping/revenues/external", {
          method: "POST",
          body: JSON.stringify(body),
          idempotencyKey,
          ...options,
        });
      },

      createInvoiceAdjustment: (
        body: BookkeepingRevenuesInvoiceAdjustmentExternalBody,
        options?: RequestOptions
      ) => {
        const idempotencyKey = options?.idempotencyKey || body.externalRef;
        return this.request<BookkeepingRevenuesInvoiceAdjustmentExternalResponseData>(
          "/bookkeeping/revenues/external/invoice-adjustment",
          {
            method: "POST",
            body: JSON.stringify(body),
            idempotencyKey,
            ...options,
          }
        );
      },
    },

    expenses: {
      create: (
        body: BookkeepingExpensesCreateExternalBody,
        options?: RequestOptions & { receipt?: ExpenseReceiptUpload }
      ) => {
        const { receipt, ...reqOpts } = options || {};
        const payload = receipt ? { ...body, ...receipt } : body;
        const idempotencyKey = reqOpts.idempotencyKey || (body as { externalRef?: string }).externalRef;

        return this.request<BookkeepingExpensesCreateExternalResponseData>("/bookkeeping/expenses/external", {
          method: "POST",
          body: JSON.stringify(payload),
          idempotencyKey,
          ...reqOpts,
        });
      },
    },

    payments: {
      listAccounts: (options?: BookkeepingPaymentsListAccountsExternalQuery, reqOptions?: RequestOptions) =>
        this.request<BookkeepingPaymentsListAccountsExternalResponseData>("/bookkeeping/payments/external/accounts", {
          method: "GET",
          query: options as Record<string, unknown>,
          ...reqOptions,
        }),

      createManual: (body: BookkeepingPaymentsCreateManualExternalBody, options?: RequestOptions) => {
        const idempotencyKey = options?.idempotencyKey || body.externalRef;
        return this.request<BookkeepingPaymentsCreateManualExternalResponseData>(
          "/bookkeeping/payments/external/manual",
          {
            method: "POST",
            body: JSON.stringify(body),
            idempotencyKey,
            ...options,
          }
        );
      },

      settleInvoice: (body: BookkeepingPaymentsSettleInvoiceExternalBody, options?: RequestOptions) => {
        const idempotencyKey =
          options?.idempotencyKey ||
          body.externalRef ||
          `settle-${body.invoiceId}-${Date.now()}`;

        return this.request<BookkeepingPaymentsSettleInvoiceExternalResponseData>(
          "/bookkeeping/payments/external/settle-invoice",
          {
            method: "POST",
            body: JSON.stringify(body),
            idempotencyKey,
            ...options,
          }
        );
      },
    },

    getDefaultBankAccount: async (options?: { forceRefresh?: boolean }): Promise<BankAccountDetails> => {
      const now = Date.now();
      if (
        !options?.forceRefresh &&
        this._bankAccountCache &&
        now - this._bankAccountCacheTime < 5 * 60 * 1000
      ) {
        return this._bankAccountCache;
      }

      const accounts = await this.bookkeeping.payments.listAccounts({ includeArchived: false });
      const bankAccounts = (accounts || []).filter((a) => a.type === "bank" && !a.isArchived);

      // Primary: isDefault bank account
      let target = bankAccounts.find((a) => a.isDefault);

      // Fallback: if exactly one active bank account exists, use it
      if (!target && bankAccounts.length === 1) {
        target = bankAccounts[0];
      }

      if (!target) {
        throw new Error(
          "Kein Default-Bankkonto im orvello-Dienst gefunden. Bitte dort ein Bankkonto als Standard markieren."
        );
      }

      const result = mapPaymentAccountToBankDetails(target);
      this._bankAccountCache = result;
      this._bankAccountCacheTime = now;
      return result;
    },
  };

  // ── Users ────────────────────────────────────────────────────────────────
  public users = {
    getByExternalUserId: (externalUserId: string, options?: RequestOptions) =>
      this.request<UsersGetByExternalUserIdResponseData>(`/users/getByExternalUserId/${encodeURIComponent(externalUserId)}`, {
        method: "GET",
        ...options,
      }),

    update: (frontendUserId: number, body: UsersUpdateExternalBody, options?: RequestOptions) =>
      this.request<UsersUpdateExternalResponseData>(`/users/update/external/${frontendUserId}`, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      }),

    delete: (frontendUserId: number, options?: RequestOptions) =>
      this.request<UsersDeleteExternalResponseData>(`/users/delete/external/${frontendUserId}`, {
        method: "DELETE",
        ...options,
      }),
  };

  // ── OAuth2 External Clients (Connection Manager) ─────────────────────────
  public oauthClients = {
    list: (query?: Oauth2ExternalClientsListQuery, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsListResponseData>("/oauth/clients/external/list", {
        method: "GET",
        query: query as Record<string, unknown>,
        ...options,
      }),

    get: (idOrClientId: string, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsGetResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}`, {
        method: "GET",
        ...options,
      }),

    create: (body: Oauth2ExternalClientsCreateBody, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsCreateResponseData>("/oauth/clients/external", {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    update: (idOrClientId: string, body: Oauth2ExternalClientsUpdateBody, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsUpdateResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}`, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      }),

    delete: (idOrClientId: string, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsDeleteResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}`, {
        method: "DELETE",
        ...options,
      }),

    rotate: (idOrClientId: string, body?: Oauth2ExternalClientsRotateBody, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsRotateResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}/rotate`, {
        method: "POST",
        body: body ? JSON.stringify(body) : undefined,
        ...options,
      }),

    retire: (idOrClientId: string, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsRetireResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}/retire`, {
        method: "POST",
        ...options,
      }),

    rollback: (idOrClientId: string, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsRollbackResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}/rollback`, {
        method: "POST",
        ...options,
      }),

    revoke: (idOrClientId: string, options?: RequestOptions) =>
      this.request<Oauth2ExternalClientsRevokeResponseData>(`/oauth/clients/external/${encodeURIComponent(idOrClientId)}/revoke`, {
        method: "POST",
        ...options,
      }),
  };
}

export function createOrvelloClient(config?: OrvelloClientConfig): OrvelloClient {
  return new OrvelloClient(config);
}
