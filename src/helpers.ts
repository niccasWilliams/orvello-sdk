import type { ManagingCompaniesCurrentExternalResponseData } from "./generated/api/features/routes.managing_companies_external.js";
import type { PaymentAccount } from "./generated/frontend-types.js";

/**
 * Receipt upload payload for expense creation (`createExpense`).
 * Transmitted as base64 in the JSON payload, supported natively by the orvello service.
 */
export interface ExpenseReceiptUpload {
  base64String: string;
  fileName: string;
  mimeType: string;
  size: number;
}

/**
 * Simplified bank account details for invoices, UI, and external payment references.
 */
export interface BankAccountDetails {
  id?: number;
  iban: string;
  bic: string;
  bank: string;
  accountHolder: string;
  currency?: string;
  isDefault?: boolean;
}

/**
 * Convert a binary buffer / Uint8Array into a structured `ExpenseReceiptUpload`
 * object for the `createExpense` endpoint. Works seamlessly in Node.js, Next.js, and browser runtimes.
 */
export function buildBase64Receipt(
  data: Uint8Array | ArrayBuffer | string,
  fileName: string,
  mimeType: string
): ExpenseReceiptUpload {
  let base64String: string;
  let size: number;

  if (typeof data === "string") {
    // If already base64 or data URL
    base64String = data.startsWith("data:") ? data.split(",")[1] || data : data;
    size = Math.round((base64String.length * 3) / 4);
  } else {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    size = bytes.byteLength;
    if (typeof Buffer !== "undefined") {
      base64String = Buffer.from(bytes).toString("base64");
    } else {
      let binary = "";
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i] ?? 0);
      }
      base64String = globalThis.btoa(binary);
    }
  }

  return {
    base64String,
    fileName,
    mimeType,
    size,
  };
}

/**
 * Check if the current managing company is subject to the German Kleinunternehmer regulation (§ 19 UStG).
 */
export function isKleinunternehmer(context: ManagingCompaniesCurrentExternalResponseData): boolean {
  return (
    context.taxation?.defaultVatTreatmentHint === "KLEINUNTERNEHMER_0" ||
    context.taxation?.regime?.toLowerCase() === "kleinunternehmer" ||
    context.taxation?.shouldShowVatOnInvoices === false
  );
}

/**
 * Calculate net, VAT, and gross amounts with standard 2-decimal financial rounding.
 */
export function calculateVat(
  netAmount: number | string,
  vatRatePercent: number
): { net: string; vat: string; gross: string } {
  const netNum = typeof netAmount === "string" ? parseFloat(netAmount) : netAmount;
  if (isNaN(netNum)) {
    throw new Error(`Invalid net amount: "${netAmount}"`);
  }

  const vatNum = Math.round(netNum * vatRatePercent) / 100;
  const grossNum = Math.round((netNum + vatNum) * 100) / 100;

  return {
    net: netNum.toFixed(2),
    vat: vatNum.toFixed(2),
    gross: grossNum.toFixed(2),
  };
}

/**
 * Format a monetary amount (in EUR or specified currency) to localized German currency format.
 */
export function formatAmount(
  amount: number | string,
  currency = "EUR",
  locale = "de-DE"
): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) return String(amount);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(num);
}

/**
 * Extract clean `BankAccountDetails` from an orvello `PaymentAccount`.
 */
export function mapPaymentAccountToBankDetails(account: PaymentAccount): BankAccountDetails {
  return {
    id: account.id,
    iban: account.iban || "",
    bic: account.bic || "",
    bank: account.bankName || "",
    accountHolder: account.accountOwner || "",
    currency: account.currency,
    isDefault: account.isDefault,
  };
}
