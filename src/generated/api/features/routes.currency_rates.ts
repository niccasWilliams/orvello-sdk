// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.390Z
// Run `pnpm run api:generate` to regenerate

export type CurrencyRatesGetParams = {
  fromCurrency: string;
  toCurrency: string;
};
export type CurrencyRatesGetQuery = {

};
export type CurrencyRatesGetBody = undefined;
export type CurrencyRatesGetResponseData = {
  from: string;
  to: string;
  rate: number;
  provider: string;
  asOfDate: string;
  source: "db" | "provider";
  variance?: {
  spreadPct: number;
  min: number;
  max: number;
  providerRates: Array<{
  provider: string;
  rate: number;
}>;
};
};
export type CurrencyRatesGetResponse = import("../types").ApiEnvelope<CurrencyRatesGetResponseData>;

export const apiRoutes_currency_rates = {
  "currency_rates_get": {
    method: "GET",
    path: "/currency-rates/:fromCurrency/:toCurrency",
    auth: {"type":"x_api_key_http"},
    meta: {
      tags: ["currency-rates"],
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: CurrencyRatesGetParams;
      query: CurrencyRatesGetQuery;
      body: CurrencyRatesGetBody;
      response: CurrencyRatesGetResponse;
      responseData: CurrencyRatesGetResponseData;
    },
  },
} as const;