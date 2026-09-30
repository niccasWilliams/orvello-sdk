// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export * from "./types";
export * from "./catalog";
export * from "./features/routes.admin";
export * from "./base/routes.amp_mail";
export * from "./base/routes.app_info";
export * from "./base/routes.auth";
export * from "./features/routes.bookkeeping";
export * from "./features/routes.currency_rates";
export * from "./features/routes.customer_companies";
export * from "./features/routes.customer_companies_external";
export * from "./features/routes.documents";
export * from "./features/routes.dunning_external";
export * from "./features/routes.enterprise";
export * from "./base/routes.entitlements";
export * from "./features/routes.exports";
export * from "./base/routes.internal";
export * from "./features/routes.invoices";
export * from "./features/routes.invoices_external";
export * from "./base/routes.logs";
export * from "./features/routes.managing_companies";
export * from "./features/routes.managing_companies_external";
export * from "./features/routes.managing_company_logos";
export * from "./base/routes.oauth2";
export * from "./base/routes.oauth2_external";
export * from "./base/routes.permissions";
export * from "./base/routes.roles";
export * from "./base/routes.security";
export * from "./base/routes.settings";
export * from "./base/routes.user_activity";
export * from "./base/routes.users";
export * from "./base/routes.webhooks";
export * from "./features/routes.work_tracking";

import type { ApiEnvelope } from "./types";
import { apiRoutes_admin } from "./features/routes.admin";
import { apiRoutes_amp_mail } from "./base/routes.amp_mail";
import { apiRoutes_app_info } from "./base/routes.app_info";
import { apiRoutes_auth } from "./base/routes.auth";
import { apiRoutes_bookkeeping } from "./features/routes.bookkeeping";
import { apiRoutes_currency_rates } from "./features/routes.currency_rates";
import { apiRoutes_customer_companies } from "./features/routes.customer_companies";
import { apiRoutes_customer_companies_external } from "./features/routes.customer_companies_external";
import { apiRoutes_documents } from "./features/routes.documents";
import { apiRoutes_dunning_external } from "./features/routes.dunning_external";
import { apiRoutes_enterprise } from "./features/routes.enterprise";
import { apiRoutes_entitlements } from "./base/routes.entitlements";
import { apiRoutes_exports } from "./features/routes.exports";
import { apiRoutes_internal } from "./base/routes.internal";
import { apiRoutes_invoices } from "./features/routes.invoices";
import { apiRoutes_invoices_external } from "./features/routes.invoices_external";
import { apiRoutes_logs } from "./base/routes.logs";
import { apiRoutes_managing_companies } from "./features/routes.managing_companies";
import { apiRoutes_managing_companies_external } from "./features/routes.managing_companies_external";
import { apiRoutes_managing_company_logos } from "./features/routes.managing_company_logos";
import { apiRoutes_oauth2 } from "./base/routes.oauth2";
import { apiRoutes_oauth2_external } from "./base/routes.oauth2_external";
import { apiRoutes_permissions } from "./base/routes.permissions";
import { apiRoutes_roles } from "./base/routes.roles";
import { apiRoutes_security } from "./base/routes.security";
import { apiRoutes_settings } from "./base/routes.settings";
import { apiRoutes_user_activity } from "./base/routes.user_activity";
import { apiRoutes_users } from "./base/routes.users";
import { apiRoutes_webhooks } from "./base/routes.webhooks";
import { apiRoutes_work_tracking } from "./features/routes.work_tracking";

export type ApiRoutes =
  typeof apiRoutes_admin
  & typeof apiRoutes_amp_mail
  & typeof apiRoutes_app_info
  & typeof apiRoutes_auth
  & typeof apiRoutes_bookkeeping
  & typeof apiRoutes_currency_rates
  & typeof apiRoutes_customer_companies
  & typeof apiRoutes_customer_companies_external
  & typeof apiRoutes_documents
  & typeof apiRoutes_dunning_external
  & typeof apiRoutes_enterprise
  & typeof apiRoutes_entitlements
  & typeof apiRoutes_exports
  & typeof apiRoutes_internal
  & typeof apiRoutes_invoices
  & typeof apiRoutes_invoices_external
  & typeof apiRoutes_logs
  & typeof apiRoutes_managing_companies
  & typeof apiRoutes_managing_companies_external
  & typeof apiRoutes_managing_company_logos
  & typeof apiRoutes_oauth2
  & typeof apiRoutes_oauth2_external
  & typeof apiRoutes_permissions
  & typeof apiRoutes_roles
  & typeof apiRoutes_security
  & typeof apiRoutes_settings
  & typeof apiRoutes_user_activity
  & typeof apiRoutes_users
  & typeof apiRoutes_webhooks
  & typeof apiRoutes_work_tracking
;

export const apiRoutes: ApiRoutes = {
  ...apiRoutes_admin,
  ...apiRoutes_amp_mail,
  ...apiRoutes_app_info,
  ...apiRoutes_auth,
  ...apiRoutes_bookkeeping,
  ...apiRoutes_currency_rates,
  ...apiRoutes_customer_companies,
  ...apiRoutes_customer_companies_external,
  ...apiRoutes_documents,
  ...apiRoutes_dunning_external,
  ...apiRoutes_enterprise,
  ...apiRoutes_entitlements,
  ...apiRoutes_exports,
  ...apiRoutes_internal,
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
  ...apiRoutes_security,
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