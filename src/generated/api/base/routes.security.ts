// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type GETSecurityPublicParams = undefined;
export type GETSecurityPublicQuery = undefined;
export type GETSecurityPublicBody = undefined;
export type GETSecurityPublicResponseData = { schemaVersion: 2; appId: string; revision: number; publishedAt: string | null; researchers: Array<{ id: string; name: string; headline?: string; company?: string; country?: string; avatar?: string; links: { linkedin?: string; github?: string; x?: string; website?: string } }>; credits: Array<{ id: string; researcherId: string; title: { de?: string; en?: string }; summary: { de?: string; en?: string }; category: string; severity: string; acknowledgedAt: string; reportedAt?: string; fixedAt?: string }> };
export type GETSecurityPublicResponse = import("../types").ApiEnvelope<GETSecurityPublicResponseData>;

export const apiRoutes_security = {
  // Contract source: explicit
  "GET__security_public": {
    method: "GET",
    path: "/security/public",
    auth: {"type":"x_api_key_https"},
    meta: {
      tags: ["security"],
      summary: "Published security credits for the authenticated frontend edge",
      description: "The x-api-key must identify a frontend in FRONTEND_KEYS; a supplied app ID cannot select another frontend.",
      validated: {"params":false,"query":false,"body":false},
    },
    types: null as unknown as {
      params: GETSecurityPublicParams;
      query: GETSecurityPublicQuery;
      body: GETSecurityPublicBody;
      response: GETSecurityPublicResponse;
      responseData: GETSecurityPublicResponseData;
    },
  },
} as const;