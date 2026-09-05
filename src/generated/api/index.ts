// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-05T12:10:19.599Z
// Run `pnpm run api:generate` to regenerate

export * from "./types";
export * from "./catalog";
export * from "./features/routes.admin";
export * from "./base/routes.api";
export * from "./base/routes.app_info";
export * from "./features/routes.bookkeeping";
export * from "./features/routes.currency_rates";
export * from "./features/routes.customer_companies";
export * from "./features/routes.customer_companies_external";
export * from "./features/routes.documents";
export * from "./features/routes.dunning_external";
export * from "./features/routes.enterprise";
export * from "./base/routes.entitlements";
export * from "./features/routes.exports";
export * from "./features/routes.invoices";
export * from "./features/routes.invoices_external";
export * from "./features/routes.logs";
export * from "./features/routes.managing_companies";
export * from "./features/routes.managing_companies_external";
export * from "./features/routes.managing_company_logos";
export * from "./features/routes.oauth2";
export * from "./features/routes.oauth2_external";
export * from "./base/routes.permissions";
export * from "./base/routes.roles";
export * from "./base/routes.settings";
export * from "./base/routes.user_activity";
export * from "./base/routes.users";
export * from "./base/routes.webhooks";
export * from "./features/routes.work_tracking";

import type { ApiEnvelope } from "./types";
import { apiRoutes_admin } from "./features/routes.admin";
import { apiRoutes_api } from "./base/routes.api";
import { apiRoutes_app_info } from "./base/routes.app_info";
import { apiRoutes_bookkeeping } from "./features/routes.bookkeeping";
import { apiRoutes_currency_rates } from "./features/routes.currency_rates";
import { apiRoutes_customer_companies } from "./features/routes.customer_companies";
import { apiRoutes_customer_companies_external } from "./features/routes.customer_companies_external";
import { apiRoutes_documents } from "./features/routes.documents";
import { apiRoutes_dunning_external } from "./features/routes.dunning_external";
import { apiRoutes_enterprise } from "./features/routes.enterprise";
import { apiRoutes_entitlements } from "./base/routes.entitlements";
import { apiRoutes_exports } from "./features/routes.exports";
import { apiRoutes_invoices } from "./features/routes.invoices";
import { apiRoutes_invoices_external } from "./features/routes.invoices_external";
import { apiRoutes_logs } from "./features/routes.logs";
import { apiRoutes_managing_companies } from "./features/routes.managing_companies";
import { apiRoutes_managing_companies_external } from "./features/routes.managing_companies_external";
import { apiRoutes_managing_company_logos } from "./features/routes.managing_company_logos";
import { apiRoutes_oauth2 } from "./features/routes.oauth2";
import { apiRoutes_oauth2_external } from "./features/routes.oauth2_external";
import { apiRoutes_permissions } from "./base/routes.permissions";
import { apiRoutes_roles } from "./base/routes.roles";
import { apiRoutes_settings } from "./base/routes.settings";
import { apiRoutes_user_activity } from "./base/routes.user_activity";
import { apiRoutes_users } from "./base/routes.users";
import { apiRoutes_webhooks } from "./base/routes.webhooks";
import { apiRoutes_work_tracking } from "./features/routes.work_tracking";

export const apiRoutes = {
  ...apiRoutes_admin,
  ...apiRoutes_api,
  ...apiRoutes_app_info,
  ...apiRoutes_bookkeeping,
  ...apiRoutes_currency_rates,
  ...apiRoutes_customer_companies,
  ...apiRoutes_customer_companies_external,
  ...apiRoutes_documents,
  ...apiRoutes_dunning_external,
  ...apiRoutes_enterprise,
  ...apiRoutes_entitlements,
  ...apiRoutes_exports,
  ...apiRoutes_invoices,
  ...apiRoutes_invoices_external,
  ...apiRoutes_logs,
  ...apiRoutes_managing_companies,
  ...apiRoutes_managing_companies_external,
  ...apiRoutes_managing_company_logos,
  ...apiRoutes_oauth2,
  ...apiRoutes_oauth2_external,
  ...apiRoutes_permissions,
  ...apiRoutes_roles,
  ...apiRoutes_settings,
  ...apiRoutes_user_activity,
  ...apiRoutes_users,
  ...apiRoutes_webhooks,
  ...apiRoutes_work_tracking,
} as const;

export type ApiRouteKey = keyof typeof apiRoutes;
export type ApiRoute<K extends ApiRouteKey> = (typeof apiRoutes)[K];
export type ApiRequest<K extends ApiRouteKey> = ApiRoute<K>["types"];
export type ApiResponse<K extends ApiRouteKey> = ApiRoute<K>["types"]["response"];
export type ApiResponseData<K extends ApiRouteKey> = ApiRoute<K>["types"]["responseData"];

export type { ApiEnvelope };