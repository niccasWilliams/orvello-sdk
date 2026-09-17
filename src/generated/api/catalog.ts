// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type RouteGroup = { key: string; module: string };

export const apiMountPrefixes = {
  base: [
  "/api-keys",
  "/api/amp-proxy",
  "/api/entitlements",
  "/app-info",
  "/app-logs",
  "/auth",
  "/docs",
  "/entitlements",
  "/internal/users",
  "/oauth",
  "/permissions",
  "/role-assignments",
  "/roles",
  "/security",
  "/settings",
  "/user-activity",
  "/users",
  "/webhooks"
],
  features: [
  "/admin/vat",
  "/apps/admin/work-tracking",
  "/apps/enterprise/onboarding",
  "/bookkeeping",
  "/currency-rates",
  "/customer-companies",
  "/documents",
  "/exports",
  "/invoices",
  "/managing-companies",
  "/oauth"
],
} as const;

export const apiGroups = {
  base: [
  {
    "key": "api_keys",
    "module": "./routes.api_keys"
  },
  {
    "key": "app_info",
    "module": "./routes.app_info"
  },
  {
    "key": "auth",
    "module": "./routes.auth"
  },
  {
    "key": "entitlements",
    "module": "./routes.entitlements"
  },
  {
    "key": "internal",
    "module": "./routes.internal"
  },
  {
    "key": "permissions",
    "module": "./routes.permissions"
  },
  {
    "key": "roles",
    "module": "./routes.roles"
  },
  {
    "key": "security",
    "module": "./routes.security"
  },
  {
    "key": "settings",
    "module": "./routes.settings"
  },
  {
    "key": "user_activity",
    "module": "./routes.user_activity"
  },
  {
    "key": "users",
    "module": "./routes.users"
  },
  {
    "key": "webhooks",
    "module": "./routes.webhooks"
  }
] as RouteGroup[],
  features: [
  {
    "key": "admin",
    "module": "./routes.admin"
  },
  {
    "key": "bookkeeping",
    "module": "./routes.bookkeeping"
  },
  {
    "key": "currency_rates",
    "module": "./routes.currency_rates"
  },
  {
    "key": "customer_companies",
    "module": "./routes.customer_companies"
  },
  {
    "key": "documents",
    "module": "./routes.documents"
  },
  {
    "key": "exports",
    "module": "./routes.exports"
  },
  {
    "key": "invoices",
    "module": "./routes.invoices"
  },
  {
    "key": "managing_companies",
    "module": "./routes.managing_companies"
  }
] as RouteGroup[],
  all: [
  {
    "key": "admin",
    "module": "./features/routes.admin"
  },
  {
    "key": "api_keys",
    "module": "./base/routes.api_keys"
  },
  {
    "key": "app_info",
    "module": "./base/routes.app_info"
  },
  {
    "key": "auth",
    "module": "./base/routes.auth"
  },
  {
    "key": "bookkeeping",
    "module": "./features/routes.bookkeeping"
  },
  {
    "key": "currency_rates",
    "module": "./features/routes.currency_rates"
  },
  {
    "key": "customer_companies",
    "module": "./features/routes.customer_companies"
  },
  {
    "key": "customer_companies_external",
    "module": "./features/routes.customer_companies_external"
  },
  {
    "key": "documents",
    "module": "./features/routes.documents"
  },
  {
    "key": "dunning_external",
    "module": "./features/routes.dunning_external"
  },
  {
    "key": "enterprise",
    "module": "./features/routes.enterprise"
  },
  {
    "key": "entitlements",
    "module": "./base/routes.entitlements"
  },
  {
    "key": "exports",
    "module": "./features/routes.exports"
  },
  {
    "key": "internal",
    "module": "./base/routes.internal"
  },
  {
    "key": "invoices",
    "module": "./features/routes.invoices"
  },
  {
    "key": "invoices_external",
    "module": "./features/routes.invoices_external"
  },
  {
    "key": "logs",
    "module": "./base/routes.logs"
  },
  {
    "key": "managing_companies",
    "module": "./features/routes.managing_companies"
  },
  {
    "key": "managing_companies_external",
    "module": "./features/routes.managing_companies_external"
  },
  {
    "key": "managing_company_logos",
    "module": "./features/routes.managing_company_logos"
  },
  {
    "key": "oauth2",
    "module": "./base/routes.oauth2"
  },
  {
    "key": "oauth2_external",
    "module": "./base/routes.oauth2_external"
  },
  {
    "key": "permissions",
    "module": "./base/routes.permissions"
  },
  {
    "key": "roles",
    "module": "./base/routes.roles"
  },
  {
    "key": "security",
    "module": "./base/routes.security"
  },
  {
    "key": "settings",
    "module": "./base/routes.settings"
  },
  {
    "key": "user_activity",
    "module": "./base/routes.user_activity"
  },
  {
    "key": "users",
    "module": "./base/routes.users"
  },
  {
    "key": "webhooks",
    "module": "./base/routes.webhooks"
  },
  {
    "key": "work_tracking",
    "module": "./features/routes.work_tracking"
  }
] as RouteGroup[],
} as const;

/**
 * Hinweis:
 * - Diese Klassifikation ist best-effort (Prefix->GroupKey).
 * - Für exakte Zuordnung nutzt ihr am besten die Route-Pfade in openapi.json.
 */
