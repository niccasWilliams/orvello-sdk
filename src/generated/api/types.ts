// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type ApiEnvelope<T> = {
  success: boolean;
  message?: string | null;
  code?: string | null;
  data: T | null;
};

/**
 * This type indicates that the backend contract is not fully typed for this route yet.
 * Do NOT use it as a real request/response type in the frontend.
 */
export type ContractNotReady<Message extends string> = {
  __CONTRACT_NOT_READY__: Message;
};
