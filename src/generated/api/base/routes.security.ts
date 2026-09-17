// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type GETSecurityPublicParams = undefined;
export type GETSecurityPublicQuery = import("../types").ContractNotReady<"Query not typed yet. Add DTO + validate({ query }) to the route (or explicitly declare none).">;
export type GETSecurityPublicBody = undefined;
export type GETSecurityPublicResponseData = import("../types").ContractNotReady<"Response type not ready. Use typeRef(\"...\") (preferred) or a concrete Zod schema for responses[].data.">;
export type GETSecurityPublicResponse = import("../types").ApiEnvelope<GETSecurityPublicResponseData>;

export const apiRoutes_security = {
  "GET__security_public": {
    method: "GET",
    path: "/security/public",
    auth: {"type":"public"},
    meta: {
      tags: ["security"],
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