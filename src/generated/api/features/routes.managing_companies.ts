// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.399Z
// Run `pnpm run api:generate` to regenerate

import type { CompanyCostCenter, CompanyUserAssignment, CompanyUserInvite, FullSelectedCompany, ManagingCompany, PaginatedResult, UnsensitiveCompanyApiKey, UserSelectedCompany, VatSettings } from "../../frontend-types";

export type ManagingCompaniesUserAssignmentsAssignParams = undefined;
export type ManagingCompaniesUserAssignmentsAssignQuery = undefined;
export type ManagingCompaniesUserAssignmentsAssignBody = {
  companyId: number;
  email: string;
  validFrom?: string;
  validTo?: string | null;
  role: "admin" | "editor" | "viewer";
  companyRole?: string | null;
  costCenters?: Array<number>;
};
export type ManagingCompaniesUserAssignmentsAssignResponseData = { type: "invite"; inviteId: number };
export type ManagingCompaniesUserAssignmentsAssignResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsAssignResponseData>;

export type ManagingCompaniesUserAssignmentsRevokeParams = undefined;
export type ManagingCompaniesUserAssignmentsRevokeQuery = undefined;
export type ManagingCompaniesUserAssignmentsRevokeBody = {
  userId: number;
  companyId: number;
};
export type ManagingCompaniesUserAssignmentsRevokeResponseData = CompanyUserAssignment | null;
export type ManagingCompaniesUserAssignmentsRevokeResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsRevokeResponseData>;

export type ManagingCompaniesUserAssignmentsUpdateParams = {
  assignmentId: number;
};
export type ManagingCompaniesUserAssignmentsUpdateQuery = undefined;
export type ManagingCompaniesUserAssignmentsUpdateBody = {
  validTo?: string | null;
  companyRole?: string | null;
  role?: "admin" | "editor" | "viewer";
};
export type ManagingCompaniesUserAssignmentsUpdateResponseData = CompanyUserAssignment | null;
export type ManagingCompaniesUserAssignmentsUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsUpdateResponseData>;

export type ManagingCompaniesUserAssignmentsCostCentersAddParams = undefined;
export type ManagingCompaniesUserAssignmentsCostCentersAddQuery = undefined;
export type ManagingCompaniesUserAssignmentsCostCentersAddBody = {
  userId: number;
  companyId: number;
  costCenterIds: Array<number> | number;
};
export type ManagingCompaniesUserAssignmentsCostCentersAddResponseData = Array<CompanyUserAssignment>;
export type ManagingCompaniesUserAssignmentsCostCentersAddResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsCostCentersAddResponseData>;

export type ManagingCompaniesUserAssignmentsCostCentersRemoveParams = undefined;
export type ManagingCompaniesUserAssignmentsCostCentersRemoveQuery = undefined;
export type ManagingCompaniesUserAssignmentsCostCentersRemoveBody = {
  userId: number;
  companyId: number;
  costCenterIds: Array<number> | number;
};
export type ManagingCompaniesUserAssignmentsCostCentersRemoveResponseData = Array<CompanyUserAssignment>;
export type ManagingCompaniesUserAssignmentsCostCentersRemoveResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsCostCentersRemoveResponseData>;

export type ManagingCompaniesUserAssignmentsListParams = {
  companyId: number;
};
export type ManagingCompaniesUserAssignmentsListQuery = {
  active?: boolean;
  search?: string;
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesUserAssignmentsListBody = undefined;
export type ManagingCompaniesUserAssignmentsListResponseData = PaginatedResult<CompanyUserAssignment & { user?: { firstName: string | null; lastName: string | null; email: string | null } }>;
export type ManagingCompaniesUserAssignmentsListResponse = import("../types").ApiEnvelope<ManagingCompaniesUserAssignmentsListResponseData>;

export type ManagingCompaniesCostCentersCreateParams = undefined;
export type ManagingCompaniesCostCentersCreateQuery = undefined;
export type ManagingCompaniesCostCentersCreateBody = {
  managingCompanyId: number;
  name: string;
  description?: string | null;
  code: string;
  isArchived?: boolean;
  colour?: string | null;
  icon?: string | null;
  invoiceLayoutVariant?: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise" | null;
  sortOrder?: number | null;
  sortByOrder?: boolean;
};
export type ManagingCompaniesCostCentersCreateResponseData = CompanyCostCenter;
export type ManagingCompaniesCostCentersCreateResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersCreateResponseData>;

export type ManagingCompaniesCostCentersMyParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesCostCentersMyQuery = undefined;
export type ManagingCompaniesCostCentersMyBody = undefined;
export type ManagingCompaniesCostCentersMyResponseData = Array<CompanyCostCenter>;
export type ManagingCompaniesCostCentersMyResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersMyResponseData>;

export type ManagingCompaniesCostCentersByIdParams = {
  id: number;
};
export type ManagingCompaniesCostCentersByIdQuery = undefined;
export type ManagingCompaniesCostCentersByIdBody = undefined;
export type ManagingCompaniesCostCentersByIdResponseData = CompanyCostCenter;
export type ManagingCompaniesCostCentersByIdResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersByIdResponseData>;

export type ManagingCompaniesCostCentersLogosSettingsParams = {
  id: number;
};
export type ManagingCompaniesCostCentersLogosSettingsQuery = undefined;
export type ManagingCompaniesCostCentersLogosSettingsBody = undefined;
export type ManagingCompaniesCostCentersLogosSettingsResponseData = {
  whiteLogoKey: string | null;
  darkLogoKey: string | null;
  invoiceLogoMode: string;
  companyInvoiceLayoutVariant: string;
  costCenterInvoiceLayoutVariant: string | null;
  effectiveInvoiceLayoutVariant: string;
};
export type ManagingCompaniesCostCentersLogosSettingsResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersLogosSettingsResponseData>;

export type ManagingCompaniesCostCentersLogosUploadParams = {
  id: number;
  mode: "white" | "dark";
};
export type ManagingCompaniesCostCentersLogosUploadQuery = undefined;
export type ManagingCompaniesCostCentersLogosUploadBody = undefined;
export type ManagingCompaniesCostCentersLogosUploadResponseData = {
  whiteLogoKey: string | null;
  darkLogoKey: string | null;
  invoiceLogoMode: string;
  companyInvoiceLayoutVariant: string;
  costCenterInvoiceLayoutVariant: string | null;
  effectiveInvoiceLayoutVariant: string;
};
export type ManagingCompaniesCostCentersLogosUploadResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersLogosUploadResponseData>;

export type ManagingCompaniesCostCentersLogosDeleteParams = {
  id: number;
  mode: "white" | "dark";
};
export type ManagingCompaniesCostCentersLogosDeleteQuery = undefined;
export type ManagingCompaniesCostCentersLogosDeleteBody = undefined;
export type ManagingCompaniesCostCentersLogosDeleteResponseData = {
  whiteLogoKey: string | null;
  darkLogoKey: string | null;
  invoiceLogoMode: string;
  companyInvoiceLayoutVariant: string;
  costCenterInvoiceLayoutVariant: string | null;
  effectiveInvoiceLayoutVariant: string;
};
export type ManagingCompaniesCostCentersLogosDeleteResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersLogosDeleteResponseData>;

export type ManagingCompaniesCostCentersLogosUrlsParams = {
  id: number;
};
export type ManagingCompaniesCostCentersLogosUrlsQuery = undefined;
export type ManagingCompaniesCostCentersLogosUrlsBody = undefined;
export type ManagingCompaniesCostCentersLogosUrlsResponseData = {
  whiteLogoUrl: string | null;
  darkLogoUrl: string | null;
  invoiceLogoMode: string;
  companyInvoiceLayoutVariant: string;
  costCenterInvoiceLayoutVariant: string | null;
  effectiveInvoiceLayoutVariant: string;
};
export type ManagingCompaniesCostCentersLogosUrlsResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersLogosUrlsResponseData>;

export type ManagingCompaniesCostCentersByIdsParams = undefined;
export type ManagingCompaniesCostCentersByIdsQuery = {
  costCenterIds: Array<number>;
};
export type ManagingCompaniesCostCentersByIdsBody = undefined;
export type ManagingCompaniesCostCentersByIdsResponseData = Array<CompanyCostCenter>;
export type ManagingCompaniesCostCentersByIdsResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersByIdsResponseData>;

export type ManagingCompaniesCostCentersUpdateParams = {
  id: number;
};
export type ManagingCompaniesCostCentersUpdateQuery = undefined;
export type ManagingCompaniesCostCentersUpdateBody = {
  name?: string;
  description?: string | null;
  code?: string;
  isArchived?: boolean;
  colour?: string | null;
  icon?: string | null;
  invoiceLayoutVariant?: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise" | null;
  sortOrder?: number | null;
  sortByOrder?: boolean;
};
export type ManagingCompaniesCostCentersUpdateResponseData = CompanyCostCenter;
export type ManagingCompaniesCostCentersUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersUpdateResponseData>;

export type ManagingCompaniesCostCentersDeleteParams = {
  id: number;
};
export type ManagingCompaniesCostCentersDeleteQuery = undefined;
export type ManagingCompaniesCostCentersDeleteBody = undefined;
export type ManagingCompaniesCostCentersDeleteResponseData = null;
export type ManagingCompaniesCostCentersDeleteResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersDeleteResponseData>;

export type ManagingCompaniesCostCentersListParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesCostCentersListQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
  isArchived?: boolean;
};
export type ManagingCompaniesCostCentersListBody = undefined;
export type ManagingCompaniesCostCentersListResponseData = PaginatedResult<CompanyCostCenter>;
export type ManagingCompaniesCostCentersListResponse = import("../types").ApiEnvelope<ManagingCompaniesCostCentersListResponseData>;

export type ManagingCompaniesSelectedSetParams = {
  companyId: number;
};
export type ManagingCompaniesSelectedSetQuery = undefined;
export type ManagingCompaniesSelectedSetBody = undefined;
export type ManagingCompaniesSelectedSetResponseData = UserSelectedCompany;
export type ManagingCompaniesSelectedSetResponse = import("../types").ApiEnvelope<ManagingCompaniesSelectedSetResponseData>;

export type ManagingCompaniesSelectedCurrentParams = undefined;
export type ManagingCompaniesSelectedCurrentQuery = {

};
export type ManagingCompaniesSelectedCurrentBody = undefined;
export type ManagingCompaniesSelectedCurrentResponseData = FullSelectedCompany | null;
export type ManagingCompaniesSelectedCurrentResponse = import("../types").ApiEnvelope<ManagingCompaniesSelectedCurrentResponseData>;

export type ManagingCompaniesVatSettingsGetParams = {
  companyId: number;
};
export type ManagingCompaniesVatSettingsGetQuery = undefined;
export type ManagingCompaniesVatSettingsGetBody = undefined;
export type ManagingCompaniesVatSettingsGetResponseData = VatSettings | null;
export type ManagingCompaniesVatSettingsGetResponse = import("../types").ApiEnvelope<ManagingCompaniesVatSettingsGetResponseData>;

export type ManagingCompaniesVatSettingsUpsertParams = {
  companyId: number;
};
export type ManagingCompaniesVatSettingsUpsertQuery = undefined;
export type ManagingCompaniesVatSettingsUpsertBody = {
  managingCompanyId?: number;
  accountingMethod?: "SOLL" | "IST";
  ustvaFilingPreference?: "auto" | "monthly" | "quarterly" | "annual" | "none";
  taxDecisions?: Record<string, any>;
};
export type ManagingCompaniesVatSettingsUpsertResponseData = VatSettings;
export type ManagingCompaniesVatSettingsUpsertResponse = import("../types").ApiEnvelope<ManagingCompaniesVatSettingsUpsertResponseData>;

export type ManagingCompaniesVatSettingsDecisionUpsertParams = {
  companyId: number;
  decisionKey: string;
};
export type ManagingCompaniesVatSettingsDecisionUpsertQuery = undefined;
export type ManagingCompaniesVatSettingsDecisionUpsertBody = {
  value: any;
  note?: string;
  effectiveFrom?: string;
  metadata?: Record<string, any>;
};
export type ManagingCompaniesVatSettingsDecisionUpsertResponseData = { settings: VatSettings; decision: any; appliedRegimePeriod?: any };
export type ManagingCompaniesVatSettingsDecisionUpsertResponse = import("../types").ApiEnvelope<ManagingCompaniesVatSettingsDecisionUpsertResponseData>;

export type ManagingCompaniesVatSettingsTaxAlertsParams = {
  companyId: number;
};
export type ManagingCompaniesVatSettingsTaxAlertsQuery = undefined;
export type ManagingCompaniesVatSettingsTaxAlertsBody = undefined;
export type ManagingCompaniesVatSettingsTaxAlertsResponseData = { activeCount: number; alerts: Array<{ key: string; severity: 'info'|'warning'|'critical'; title: string; message: string; active: boolean; triggerAmount?: number; requiredDecision: { decisionKey: string; currentValue: string; suggestedValue: string; endpoint: string } | null; metadata: Record<string, unknown> }> };
export type ManagingCompaniesVatSettingsTaxAlertsResponse = import("../types").ApiEnvelope<ManagingCompaniesVatSettingsTaxAlertsResponseData>;

export type ManagingCompaniesInvitesPendingUserParams = undefined;
export type ManagingCompaniesInvitesPendingUserQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesInvitesPendingUserBody = undefined;
export type ManagingCompaniesInvitesPendingUserResponseData = PaginatedResult<CompanyUserInvite & { company: { id: number; companyName: string }; invitedByUser: { firstName: string | null; lastName: string | null; email: string | null } }>;
export type ManagingCompaniesInvitesPendingUserResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesPendingUserResponseData>;

export type ManagingCompaniesInvitesPendingCompanyParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvitesPendingCompanyQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesInvitesPendingCompanyBody = undefined;
export type ManagingCompaniesInvitesPendingCompanyResponseData = PaginatedResult<CompanyUserInvite>;
export type ManagingCompaniesInvitesPendingCompanyResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesPendingCompanyResponseData>;

export type ManagingCompaniesInvitesPendingCompanyPreviewParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvitesPendingCompanyPreviewQuery = {
  token: string;
};
export type ManagingCompaniesInvitesPendingCompanyPreviewBody = undefined;
export type ManagingCompaniesInvitesPendingCompanyPreviewResponseData = {
  companyName: string;
  companyLegalForm?: any | null;
  companyStreet?: string | null;
  companyStreetNr?: string | null;
  companyZip?: string | null;
  companyCity?: string | null;
  companyCountry?: string | null;
  companyEmail?: string | null;
  companyPhone?: string | null;
  companyWebsite?: string | null;
  companyManagingDirector?: string | null;
};
export type ManagingCompaniesInvitesPendingCompanyPreviewResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesPendingCompanyPreviewResponseData>;

export type ManagingCompaniesInvitesAcceptParams = {
  token: string;
};
export type ManagingCompaniesInvitesAcceptQuery = undefined;
export type ManagingCompaniesInvitesAcceptBody = undefined;
export type ManagingCompaniesInvitesAcceptResponseData = {
  success: boolean;
  assignmentId?: number;
};
export type ManagingCompaniesInvitesAcceptResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesAcceptResponseData>;

export type ManagingCompaniesInvitesRejectParams = {
  token: string;
};
export type ManagingCompaniesInvitesRejectQuery = undefined;
export type ManagingCompaniesInvitesRejectBody = undefined;
export type ManagingCompaniesInvitesRejectResponseData = null;
export type ManagingCompaniesInvitesRejectResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesRejectResponseData>;

export type ManagingCompaniesInvitesCancelParams = {
  inviteId: number;
};
export type ManagingCompaniesInvitesCancelQuery = undefined;
export type ManagingCompaniesInvitesCancelBody = {
  companyId: number;
};
export type ManagingCompaniesInvitesCancelResponseData = null;
export type ManagingCompaniesInvitesCancelResponse = import("../types").ApiEnvelope<ManagingCompaniesInvitesCancelResponseData>;

export type ManagingCompaniesApiKeysCreateParams = undefined;
export type ManagingCompaniesApiKeysCreateQuery = undefined;
export type ManagingCompaniesApiKeysCreateBody = {
  name: string;
  role: "viewer" | "editor" | "admin";
  defaultCostCenter?: number;
  availableCostCenters?: Array<number>;
  validFrom?: string;
  validTo?: string | null;
};
export type ManagingCompaniesApiKeysCreateResponseData = { apiKey: UnsensitiveCompanyApiKey; plainTextKey: string };
export type ManagingCompaniesApiKeysCreateResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysCreateResponseData>;

export type ManagingCompaniesApiKeysUpdateParams = {
  apiKeyId: number;
};
export type ManagingCompaniesApiKeysUpdateQuery = undefined;
export type ManagingCompaniesApiKeysUpdateBody = {
  name?: string;
  role?: "viewer" | "editor" | "admin";
  defaultCostCenter?: number;
  availableCostCenters?: Array<number>;
  validFrom?: string;
  validTo?: string | null;
};
export type ManagingCompaniesApiKeysUpdateResponseData = UnsensitiveCompanyApiKey;
export type ManagingCompaniesApiKeysUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysUpdateResponseData>;

export type ManagingCompaniesApiKeysDeleteParams = {
  apiKeyId: number;
};
export type ManagingCompaniesApiKeysDeleteQuery = undefined;
export type ManagingCompaniesApiKeysDeleteBody = undefined;
export type ManagingCompaniesApiKeysDeleteResponseData = null;
export type ManagingCompaniesApiKeysDeleteResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysDeleteResponseData>;

export type ManagingCompaniesApiKeysRevokeParams = {
  apiKeyId: number;
};
export type ManagingCompaniesApiKeysRevokeQuery = undefined;
export type ManagingCompaniesApiKeysRevokeBody = undefined;
export type ManagingCompaniesApiKeysRevokeResponseData = null;
export type ManagingCompaniesApiKeysRevokeResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysRevokeResponseData>;

export type ManagingCompaniesApiKeysByIdParams = {
  apiKeyId: number;
};
export type ManagingCompaniesApiKeysByIdQuery = undefined;
export type ManagingCompaniesApiKeysByIdBody = undefined;
export type ManagingCompaniesApiKeysByIdResponseData = UnsensitiveCompanyApiKey;
export type ManagingCompaniesApiKeysByIdResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysByIdResponseData>;

export type ManagingCompaniesApiKeysListParams = undefined;
export type ManagingCompaniesApiKeysListQuery = {
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesApiKeysListBody = undefined;
export type ManagingCompaniesApiKeysListResponseData = PaginatedResult<UnsensitiveCompanyApiKey>;
export type ManagingCompaniesApiKeysListResponse = import("../types").ApiEnvelope<ManagingCompaniesApiKeysListResponseData>;

export type ManagingCompaniesInvoiceLayoutsCatalogParams = undefined;
export type ManagingCompaniesInvoiceLayoutsCatalogQuery = {
  costCenterId?: number;
};
export type ManagingCompaniesInvoiceLayoutsCatalogBody = undefined;
export type ManagingCompaniesInvoiceLayoutsCatalogResponseData = {
  defaultVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  effectiveVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  source: "cost_center" | "company" | "system_default";
  costCenterId: number | null;
  variants: Array<{
  id: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  name: string;
  previewTitle: string;
  description: string;
  preview: {
  accentColor: string;
  fontFamily: string;
  density: "compact" | "comfortable";
  visualStyle: string;
};
  technical: {
  paperStandard: "DIN 5008";
  pageFormat: "A4";
  windowEnvelopeCompatible: boolean;
  renderEngine: "@react-pdf/renderer";
  eInvoice: {
  format: "ZUGFeRD";
  profileSupport: string;
  embedding: string;
};
};
}>;
  eInvoice: {
  enabled: boolean;
  format: "zugferd" | null;
  defaultProfile: string | null;
};
};
export type ManagingCompaniesInvoiceLayoutsCatalogResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceLayoutsCatalogResponseData>;

export type ManagingCompaniesInvoiceLayoutsEffectiveParams = undefined;
export type ManagingCompaniesInvoiceLayoutsEffectiveQuery = {
  costCenterId?: number;
};
export type ManagingCompaniesInvoiceLayoutsEffectiveBody = undefined;
export type ManagingCompaniesInvoiceLayoutsEffectiveResponseData = {
  managingCompanyId: number;
  costCenterId: number | null;
  companyVariant: string | null;
  costCenterVariant: string | null;
  effectiveVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  source: "cost_center" | "company" | "system_default";
  layout: {
  id: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  name: string;
  previewTitle: string;
  description: string;
  preview: {
  accentColor: string;
  fontFamily: string;
  density: "compact" | "comfortable";
  visualStyle: string;
};
  technical: {
  paperStandard: "DIN 5008";
  pageFormat: "A4";
  windowEnvelopeCompatible: boolean;
  renderEngine: "@react-pdf/renderer";
  eInvoice: {
  format: "ZUGFeRD";
  profileSupport: string;
  embedding: string;
};
};
};
  eInvoice: {
  enabled: boolean;
  format: "zugferd" | null;
  defaultProfile: string | null;
};
};
export type ManagingCompaniesInvoiceLayoutsEffectiveResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceLayoutsEffectiveResponseData>;

export type ManagingCompaniesInvoiceLayoutsPreviewParams = undefined;
export type ManagingCompaniesInvoiceLayoutsPreviewQuery = {
  layoutVariant?: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  costCenterId?: number;
  language?: "de" | "en";
};
export type ManagingCompaniesInvoiceLayoutsPreviewBody = undefined;
export type ManagingCompaniesInvoiceLayoutsPreviewResponseData = {
  requestedVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  effectiveVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  source: "cost_center" | "company" | "system_default";
  language: "de" | "en";
  s3Key: string;
  url: string;
  cached: boolean;
  expiresInSeconds: number;
  generatedAt: string;
};
export type ManagingCompaniesInvoiceLayoutsPreviewResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceLayoutsPreviewResponseData>;

export type ManagingCompaniesInvoiceLayoutsPreviewsParams = undefined;
export type ManagingCompaniesInvoiceLayoutsPreviewsQuery = {
  costCenterId?: number;
  language?: "de" | "en";
};
export type ManagingCompaniesInvoiceLayoutsPreviewsBody = undefined;
export type ManagingCompaniesInvoiceLayoutsPreviewsResponseData = {
  items: Array<{
  requestedVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  effectiveVariant: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  source: "cost_center" | "company" | "system_default";
  language: "de" | "en";
  s3Key: string;
  url: string;
  cached: boolean;
  expiresInSeconds: number;
  generatedAt: string;
}>;
};
export type ManagingCompaniesInvoiceLayoutsPreviewsResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceLayoutsPreviewsResponseData>;

export type ManagingCompaniesInvoiceTransparencyContextParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTransparencyContextQuery = undefined;
export type ManagingCompaniesInvoiceTransparencyContextBody = undefined;
export type ManagingCompaniesInvoiceTransparencyContextResponseData = {
  asOf: string;
  managingCompany: {
  id: number;
  companyName: string;
  companyCountry: string | null;
  baseCurrency: string | null;
};
  taxation: {
  regime: string | null;
  regimeValidFrom: string | null;
  regimeValidTo: string | null;
  regimeReason: string | null;
  decisionRequired: boolean;
  explicitRegimeDecision: any | null;
  shouldShowVatOnInvoices: boolean;
  defaultVatTreatmentHint: string | null;
  legalVatHint: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  thresholds: {
  kleinunternehmerGraceAmount: number;
  kleinunternehmerMaxAmount: number;
};
  revenue: {
  currentYear: {
  year: number;
  amount: number;
};
  previousYear: {
  year: number;
  amount: number;
};
};
  alerts: {
  activeCount: number;
  warnings: Array<{
  code: string;
  severity: "info" | "warning" | "critical";
  title: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  message: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  recommendation?: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
} | null;
  metadata?: Record<string, any>;
}>;
};
};
  invoiceDefaults: {
  defaultPaymentAccountId: number | null;
  defaultPaymentTermsDays: number | null;
  defaultPaymentTermsText: string | null;
  defaultEarlyPaymentDiscountPercent: number | null;
  defaultEarlyPaymentDiscountDays: number | null;
  availableProductTypes: Array<"standard" | "reduced" | "custom">;
  availableItemTypes: Array<{
  value: string;
  label: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  defaultProductType: "standard" | "reduced" | "custom";
  isSystem: boolean;
}>;
  quotePolicy: {
  requiredOnManualCreate: boolean;
  supportedQuoteVersion: string;
  staleProtectionMode: "strict";
};
};
};
export type ManagingCompaniesInvoiceTransparencyContextResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTransparencyContextResponseData>;

export type ManagingCompaniesInvoiceTransparencyQuoteParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTransparencyQuoteQuery = undefined;
export type ManagingCompaniesInvoiceTransparencyQuoteBody = {
  companyId?: number | null;
  costCenterId?: number | null;
  paymentAccountId?: number | null;
  bankFallbackAccountId?: number | null;
  customerName?: string | null;
  customerStreet?: string | null;
  customerStreetNr?: string | null;
  customerZip?: string | null;
  customerCity?: string | null;
  customerCountry?: string | null;
  customerEmail?: string | null;
  customerPhone?: string | null;
  customerUstId?: string | null;
  invoiceDate: string;
  dueDate: string;
  performedAt?: string | null;
  currency: string;
  notes?: string | null;
  paymentTermsDays?: number | null;
  paymentTermsText?: string | null;
  earlyPaymentDiscountPercent?: number | null;
  earlyPaymentDiscountDays?: number | null;
  productType?: "standard" | "reduced" | "custom";
  customVatRate?: number;
  vatOverrideReason?: string;
  lineItems: Array<{
  title: string;
  description?: string | null;
  quantity: number;
  unitPriceNet: string;
  itemType?: string | null;
  productType?: "standard" | "reduced" | "custom";
  taxRate?: number;
}>;
  language?: string;
  issueImmediately?: boolean;
  generatePdf?: boolean;
  quoteHash?: string;
  quoteVersion?: string;
};
export type ManagingCompaniesInvoiceTransparencyQuoteResponseData = {
  quoteVersion: string;
  quoteHash: string;
  computedAt: string;
  totals: {
  net: number;
  tax: number;
  gross: number;
  currency: string;
};
  vat: {
  requestedProductType: "standard" | "reduced" | "custom";
  effectiveTreatment: string;
  effectiveRate: number;
  legalReference: string | null;
  note: string | null;
  isMixedRates: boolean;
};
  lineItems: Array<{
  index: number;
  title: string;
  quantity: number;
  unitPriceNet: number;
  netAmount: number;
  effectiveTaxRate: number;
  taxAmount: number;
  grossAmount: number;
  taxSource: {
  mode: "invoice_default" | "line_item_standard" | "line_item_reduced" | "line_item_custom" | "kleinunternehmer_override";
  reason: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
};
}>;
  paymentResolution: {
  paymentAccountId: number | null;
  paymentAccountSource: "input" | "cost_center" | "company_default" | "account_default" | "sole_active" | "none";
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: number | null;
  earlyPaymentDiscountDays: number | null;
};
  warnings: Array<{
  code: string;
  severity: "info" | "warning" | "critical";
  title: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  message: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
};
  recommendation?: {
  key: string;
  defaultMessage: string;
  params?: Record<string, string | number | boolean | null>;
} | null;
  metadata?: Record<string, any>;
}>;
};
export type ManagingCompaniesInvoiceTransparencyQuoteResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTransparencyQuoteResponseData>;

export type ManagingCompaniesItemTypeConfigsCreateParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesItemTypeConfigsCreateQuery = undefined;
export type ManagingCompaniesItemTypeConfigsCreateBody = {
  value: string;
  label: string;
  defaultProductType?: "standard" | "reduced" | "custom";
  sortOrder?: number;
};
export type ManagingCompaniesItemTypeConfigsCreateResponseData = {
  id: number;
  managingCompanyId: number;
  value: string;
  label: string;
  defaultProductType: string;
  sortOrder: number;
  isArchived: boolean;
  createdAt: string;
  createdBy: number | null;
};
export type ManagingCompaniesItemTypeConfigsCreateResponse = import("../types").ApiEnvelope<ManagingCompaniesItemTypeConfigsCreateResponseData>;

export type ManagingCompaniesItemTypeConfigsUpdateParams = {
  managingCompanyId: number;
  value: string;
};
export type ManagingCompaniesItemTypeConfigsUpdateQuery = undefined;
export type ManagingCompaniesItemTypeConfigsUpdateBody = {
  label?: string;
  defaultProductType?: "standard" | "reduced" | "custom";
  sortOrder?: number;
};
export type ManagingCompaniesItemTypeConfigsUpdateResponseData = {
  id: number;
  managingCompanyId: number;
  value: string;
  label: string;
  defaultProductType: string;
  sortOrder: number;
  isArchived: boolean;
  createdAt: string;
  createdBy: number | null;
};
export type ManagingCompaniesItemTypeConfigsUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesItemTypeConfigsUpdateResponseData>;

export type ManagingCompaniesItemTypeConfigsArchiveParams = {
  managingCompanyId: number;
  value: string;
};
export type ManagingCompaniesItemTypeConfigsArchiveQuery = undefined;
export type ManagingCompaniesItemTypeConfigsArchiveBody = undefined;
export type ManagingCompaniesItemTypeConfigsArchiveResponseData = {
  id: number;
  managingCompanyId: number;
  value: string;
  label: string;
  defaultProductType: string;
  sortOrder: number;
  isArchived: boolean;
  createdAt: string;
  createdBy: number | null;
};
export type ManagingCompaniesItemTypeConfigsArchiveResponse = import("../types").ApiEnvelope<ManagingCompaniesItemTypeConfigsArchiveResponseData>;

export type ManagingCompaniesInvoiceTemplatesListParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesListQuery = {
  includeArchived?: boolean;
  search?: string;
  companyId?: number;
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesInvoiceTemplatesListBody = undefined;
export type ManagingCompaniesInvoiceTemplatesListResponseData = {
  items: Array<{
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
}>;
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
export type ManagingCompaniesInvoiceTemplatesListResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesListResponseData>;

export type ManagingCompaniesInvoiceTemplatesGetParams = {
  templateId: number;
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesGetQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesGetBody = undefined;
export type ManagingCompaniesInvoiceTemplatesGetResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesGetResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesGetResponseData>;

export type ManagingCompaniesInvoiceTemplatesCreateParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesCreateQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesCreateBody = {
  name: string;
  description?: string | null;
  companyId?: number | null;
  costCenterId?: number | null;
  paymentAccountId?: number | null;
  currency?: string;
  language?: string;
  productType?: "standard" | "reduced" | "custom";
  customVatRate?: number | null;
  paymentTermsDays?: number | null;
  paymentTermsText?: string | null;
  earlyPaymentDiscountPercent?: number | null;
  earlyPaymentDiscountDays?: number | null;
  notes?: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity?: number;
  itemType?: string;
  productType?: "standard" | "reduced" | "custom";
  taxRate?: number;
  sortOrder?: number;
}>;
  sortOrder?: number;
};
export type ManagingCompaniesInvoiceTemplatesCreateResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesCreateResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesCreateResponseData>;

export type ManagingCompaniesInvoiceTemplatesFromInvoiceParams = {
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesFromInvoiceQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesFromInvoiceBody = {
  invoiceId: number;
  name: string;
  description?: string | null;
};
export type ManagingCompaniesInvoiceTemplatesFromInvoiceResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesFromInvoiceResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesFromInvoiceResponseData>;

export type ManagingCompaniesInvoiceTemplatesUpdateParams = {
  templateId: number;
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesUpdateQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesUpdateBody = {
  name?: string;
  description?: string | null;
  companyId?: number | null;
  costCenterId?: number | null;
  paymentAccountId?: number | null;
  currency?: string;
  language?: string;
  productType?: "standard" | "reduced" | "custom";
  customVatRate?: number | null;
  paymentTermsDays?: number | null;
  paymentTermsText?: string | null;
  earlyPaymentDiscountPercent?: number | null;
  earlyPaymentDiscountDays?: number | null;
  notes?: string | null;
  lineItems?: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity?: number;
  itemType?: string;
  productType?: "standard" | "reduced" | "custom";
  taxRate?: number;
  sortOrder?: number;
}>;
  sortOrder?: number;
  isArchived?: boolean;
};
export type ManagingCompaniesInvoiceTemplatesUpdateResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesUpdateResponseData>;

export type ManagingCompaniesInvoiceTemplatesArchiveParams = {
  templateId: number;
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesArchiveQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesArchiveBody = undefined;
export type ManagingCompaniesInvoiceTemplatesArchiveResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesArchiveResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesArchiveResponseData>;

export type ManagingCompaniesInvoiceTemplatesDuplicateParams = {
  templateId: number;
  managingCompanyId: number;
};
export type ManagingCompaniesInvoiceTemplatesDuplicateQuery = undefined;
export type ManagingCompaniesInvoiceTemplatesDuplicateBody = {
  name: string;
};
export type ManagingCompaniesInvoiceTemplatesDuplicateResponseData = {
  id: number;
  managingCompanyId: number;
  name: string;
  description: string | null;
  companyId: number | null;
  costCenterId: number | null;
  paymentAccountId: number | null;
  currency: string;
  language: string;
  productType: string;
  customVatRate: string | null;
  paymentTermsDays: number | null;
  paymentTermsText: string | null;
  earlyPaymentDiscountPercent: string | null;
  earlyPaymentDiscountDays: number | null;
  notes: string | null;
  lineItems: Array<{
  title: string;
  description?: string | null;
  unitPriceNet: string;
  defaultQuantity: number;
  itemType: string;
  productType: string;
  taxRate?: number;
  sortOrder: number;
}>;
  isArchived: boolean;
  sortOrder: number;
  lastUsedAt: string | null;
  usageCount: number;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string | null;
  updatedBy: number | null;
};
export type ManagingCompaniesInvoiceTemplatesDuplicateResponse = import("../types").ApiEnvelope<ManagingCompaniesInvoiceTemplatesDuplicateResponseData>;

export type ManagingCompaniesCreateParams = undefined;
export type ManagingCompaniesCreateQuery = undefined;
export type ManagingCompaniesCreateBody = {
  companyName: string;
  companyLegalForm?: "Einzelunternehmen" | "Freiberufler" | "GbR" | "UG" | "GmbH" | "AG" | "KG" | "OHG" | "PartG" | "eK" | null;
  companyManagingDirector?: string | null;
  companyStreet?: string | null;
  companyStreetNr?: string | null;
  companyZip?: string | null;
  companyCity?: string | null;
  companyCountry?: string | null;
  companyEmail?: string | null;
  companyPhone?: string | null;
  companyWebsite?: string | null;
  companyCommercialRegister?: string | null;
  companyRegistrationCourt?: string | null;
  companyTaxId?: string | null;
  companyVatId?: string | null;
  zugferdEnable?: boolean;
  zugferdDefaultProfile?: "MINIMUM" | "BASIC_WL" | "BASIC" | "EN16931" | "EXTENDED" | "XRECHNUNG";
  baseCurrency?: "EUR" | "USD" | "GBP" | "JPY" | "CHF" | "CAD" | "AUD" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "KRW" | "SGD" | "HKD" | "NZD" | "INR" | "THB" | "MYR" | "IDR" | "PHP" | "BRL" | "MXN" | "ARS" | "CLP" | "COP" | "AED" | "SAR" | "ILS" | "ZAR" | "EGP" | "TRY" | "RUB";
  invoiceLayoutVariant?: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  bookkeepingBasis?: "eur" | "accrual";
};
export type ManagingCompaniesCreateResponseData = ManagingCompany;
export type ManagingCompaniesCreateResponse = import("../types").ApiEnvelope<ManagingCompaniesCreateResponseData>;

export type ManagingCompaniesListParams = undefined;
export type ManagingCompaniesListQuery = {
  search?: string;
  page?: number;
  pageSize?: number;
};
export type ManagingCompaniesListBody = undefined;
export type ManagingCompaniesListResponseData = PaginatedResult<ManagingCompany>;
export type ManagingCompaniesListResponse = import("../types").ApiEnvelope<ManagingCompaniesListResponseData>;

export type ManagingCompaniesGetByIdParams = {
  id: number;
};
export type ManagingCompaniesGetByIdQuery = undefined;
export type ManagingCompaniesGetByIdBody = undefined;
export type ManagingCompaniesGetByIdResponseData = ManagingCompany;
export type ManagingCompaniesGetByIdResponse = import("../types").ApiEnvelope<ManagingCompaniesGetByIdResponseData>;

export type ManagingCompaniesUpdateParams = {
  id: number;
};
export type ManagingCompaniesUpdateQuery = undefined;
export type ManagingCompaniesUpdateBody = {
  companyName?: string;
  companyLegalForm?: "Einzelunternehmen" | "Freiberufler" | "GbR" | "UG" | "GmbH" | "AG" | "KG" | "OHG" | "PartG" | "eK" | null;
  companyManagingDirector?: string | null;
  companyStreet?: string | null;
  companyStreetNr?: string | null;
  companyZip?: string | null;
  companyCity?: string | null;
  companyCountry?: string | null;
  companyEmail?: string | null;
  companyPhone?: string | null;
  companyWebsite?: string | null;
  companyCommercialRegister?: string | null;
  companyRegistrationCourt?: string | null;
  companyTaxId?: string | null;
  companyVatId?: string | null;
  zugferdEnable?: boolean;
  zugferdDefaultProfile?: "MINIMUM" | "BASIC_WL" | "BASIC" | "EN16931" | "EXTENDED" | "XRECHNUNG";
  baseCurrency?: "EUR" | "USD" | "GBP" | "JPY" | "CHF" | "CAD" | "AUD" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "KRW" | "SGD" | "HKD" | "NZD" | "INR" | "THB" | "MYR" | "IDR" | "PHP" | "BRL" | "MXN" | "ARS" | "CLP" | "COP" | "AED" | "SAR" | "ILS" | "ZAR" | "EGP" | "TRY" | "RUB";
  invoiceLayoutVariant?: "din5008_modern" | "din5008_classic" | "din5008_minimal" | "din5008_compact" | "din5008_enterprise";
  bookkeepingBasis?: "eur" | "accrual";
};
export type ManagingCompaniesUpdateResponseData = ManagingCompany;
export type ManagingCompaniesUpdateResponse = import("../types").ApiEnvelope<ManagingCompaniesUpdateResponseData>;

export type ManagingCompaniesDeleteParams = {
  id: number;
};
export type ManagingCompaniesDeleteQuery = undefined;
export type ManagingCompaniesDeleteBody = undefined;
export type ManagingCompaniesDeleteResponseData = null;
export type ManagingCompaniesDeleteResponse = import("../types").ApiEnvelope<ManagingCompaniesDeleteResponseData>;

export const apiRoutes_managing_companies = {
  "managing_companies_user_assignments_assign": {
    method: "POST",
    path: "/managing-companies/user-assignments/assign",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Benutzer zu Unternehmen einladen/zuweisen",
      description: "Weist einen Benutzer einem Unternehmen zu (oder erstellt eine Invite, falls nötig). Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsAssignParams;
      query: ManagingCompaniesUserAssignmentsAssignQuery;
      body: ManagingCompaniesUserAssignmentsAssignBody;
      response: ManagingCompaniesUserAssignmentsAssignResponse;
      responseData: ManagingCompaniesUserAssignmentsAssignResponseData;
    },
  },
  "managing_companies_user_assignments_revoke": {
    method: "POST",
    path: "/managing-companies/user-assignments/revoke",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Benutzer-Zuweisung widerrufen",
      description: "Entfernt einen Benutzer aus einem Unternehmen (Zuweisung widerrufen). Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsRevokeParams;
      query: ManagingCompaniesUserAssignmentsRevokeQuery;
      body: ManagingCompaniesUserAssignmentsRevokeBody;
      response: ManagingCompaniesUserAssignmentsRevokeResponse;
      responseData: ManagingCompaniesUserAssignmentsRevokeResponseData;
    },
  },
  "managing_companies_user_assignments_update": {
    method: "PUT",
    path: "/managing-companies/user-assignments/update/:assignmentId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Benutzer-Zuweisung aktualisieren",
      description: "Ändert Rolle/Gültigkeit/CompanyRole einer bestehenden Zuweisung. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsUpdateParams;
      query: ManagingCompaniesUserAssignmentsUpdateQuery;
      body: ManagingCompaniesUserAssignmentsUpdateBody;
      response: ManagingCompaniesUserAssignmentsUpdateResponse;
      responseData: ManagingCompaniesUserAssignmentsUpdateResponseData;
    },
  },
  "managing_companies_user_assignments_cost_centers_add": {
    method: "POST",
    path: "/managing-companies/user-assignments/cost-centers/add",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Cost Center zu Zuweisung hinzufügen",
      description: "Fügt einer Benutzer-Zuweisung zusätzliche Cost Center hinzu. Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsCostCentersAddParams;
      query: ManagingCompaniesUserAssignmentsCostCentersAddQuery;
      body: ManagingCompaniesUserAssignmentsCostCentersAddBody;
      response: ManagingCompaniesUserAssignmentsCostCentersAddResponse;
      responseData: ManagingCompaniesUserAssignmentsCostCentersAddResponseData;
    },
  },
  "managing_companies_user_assignments_cost_centers_remove": {
    method: "POST",
    path: "/managing-companies/user-assignments/cost-centers/remove",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Cost Center von Zuweisung entfernen",
      description: "Entfernt Cost Center von einer Benutzer-Zuweisung. Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsCostCentersRemoveParams;
      query: ManagingCompaniesUserAssignmentsCostCentersRemoveQuery;
      body: ManagingCompaniesUserAssignmentsCostCentersRemoveBody;
      response: ManagingCompaniesUserAssignmentsCostCentersRemoveResponse;
      responseData: ManagingCompaniesUserAssignmentsCostCentersRemoveResponseData;
    },
  },
  "managing_companies_user_assignments_list": {
    method: "GET",
    path: "/managing-companies/user-assignments/list/:companyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","user-assignments"],
      summary: "Benutzer-Zuweisungen listen",
      description: "Listet Benutzer-Zuweisungen eines Unternehmens paginiert (inkl. optionaler User-Infos). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesUserAssignmentsListParams;
      query: ManagingCompaniesUserAssignmentsListQuery;
      body: ManagingCompaniesUserAssignmentsListBody;
      response: ManagingCompaniesUserAssignmentsListResponse;
      responseData: ManagingCompaniesUserAssignmentsListResponseData;
    },
  },
  "managing_companies_cost_centers_create": {
    method: "POST",
    path: "/managing-companies/cost-centers/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center erstellen",
      description: "Erstellt einen Cost Center für ein Managing Company. Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersCreateParams;
      query: ManagingCompaniesCostCentersCreateQuery;
      body: ManagingCompaniesCostCentersCreateBody;
      response: ManagingCompaniesCostCentersCreateResponse;
      responseData: ManagingCompaniesCostCentersCreateResponseData;
    },
  },
  "managing_companies_cost_centers_my": {
    method: "GET",
    path: "/managing-companies/cost-centers/my/:managingCompanyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Meine Cost Center",
      description: "Lädt alle Cost Center für das angegebene Managing Company (nicht paginiert). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersMyParams;
      query: ManagingCompaniesCostCentersMyQuery;
      body: ManagingCompaniesCostCentersMyBody;
      response: ManagingCompaniesCostCentersMyResponse;
      responseData: ManagingCompaniesCostCentersMyResponseData;
    },
  },
  "managing_companies_cost_centers_by_id": {
    method: "GET",
    path: "/managing-companies/cost-centers/byId/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center nach ID",
      description: "Lädt einen Cost Center per ID. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersByIdParams;
      query: ManagingCompaniesCostCentersByIdQuery;
      body: ManagingCompaniesCostCentersByIdBody;
      response: ManagingCompaniesCostCentersByIdResponse;
      responseData: ManagingCompaniesCostCentersByIdResponseData;
    },
  },
  "managing_companies_cost_centers_logos_settings": {
    method: "GET",
    path: "/managing-companies/cost-centers/logos/settings/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost-Center Logo-Settings",
      description: "Lädt die aktuell hinterlegten white/dark Logo-Keys eines Cost Centers inklusive aktivem Invoice-Logo-Modus der Company.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersLogosSettingsParams;
      query: ManagingCompaniesCostCentersLogosSettingsQuery;
      body: ManagingCompaniesCostCentersLogosSettingsBody;
      response: ManagingCompaniesCostCentersLogosSettingsResponse;
      responseData: ManagingCompaniesCostCentersLogosSettingsResponseData;
    },
  },
  "managing_companies_cost_centers_logos_upload": {
    method: "POST",
    path: "/managing-companies/cost-centers/logos/upload/:id/:mode",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost-Center Logo hochladen",
      description: "Lädt ein White- oder Dark-Logo für ein Cost Center hoch (PNG/JPEG/SVG, max 5MB) und ersetzt das bestehende Logo in diesem Modus.",
      bodyContentType: "multipart/form-data",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersLogosUploadParams;
      query: ManagingCompaniesCostCentersLogosUploadQuery;
      body: ManagingCompaniesCostCentersLogosUploadBody;
      response: ManagingCompaniesCostCentersLogosUploadResponse;
      responseData: ManagingCompaniesCostCentersLogosUploadResponseData;
    },
  },
  "managing_companies_cost_centers_logos_delete": {
    method: "DELETE",
    path: "/managing-companies/cost-centers/logos/delete/:id/:mode",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost-Center Logo löschen",
      description: "Löscht das White- oder Dark-Logo eines Cost Centers und entfernt den zugehörigen Key.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersLogosDeleteParams;
      query: ManagingCompaniesCostCentersLogosDeleteQuery;
      body: ManagingCompaniesCostCentersLogosDeleteBody;
      response: ManagingCompaniesCostCentersLogosDeleteResponse;
      responseData: ManagingCompaniesCostCentersLogosDeleteResponseData;
    },
  },
  "managing_companies_cost_centers_logos_urls": {
    method: "GET",
    path: "/managing-companies/cost-centers/logos/urls/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost-Center Logo-URLs",
      description: "Lädt presigned Download-URLs (1h) für White-/Dark-Logo eines Cost Centers.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersLogosUrlsParams;
      query: ManagingCompaniesCostCentersLogosUrlsQuery;
      body: ManagingCompaniesCostCentersLogosUrlsBody;
      response: ManagingCompaniesCostCentersLogosUrlsResponse;
      responseData: ManagingCompaniesCostCentersLogosUrlsResponseData;
    },
  },
  "managing_companies_cost_centers_by_ids": {
    method: "GET",
    path: "/managing-companies/cost-centers/by-ids",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center per IDs",
      description: "Lädt mehrere Cost Center anhand einer Liste von IDs. Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersByIdsParams;
      query: ManagingCompaniesCostCentersByIdsQuery;
      body: ManagingCompaniesCostCentersByIdsBody;
      response: ManagingCompaniesCostCentersByIdsResponse;
      responseData: ManagingCompaniesCostCentersByIdsResponseData;
    },
  },
  "managing_companies_cost_centers_update": {
    method: "PUT",
    path: "/managing-companies/cost-centers/update/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center aktualisieren",
      description: "Aktualisiert Felder eines Cost Centers (Name, Code, Archiviert, Sortierung, …). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersUpdateParams;
      query: ManagingCompaniesCostCentersUpdateQuery;
      body: ManagingCompaniesCostCentersUpdateBody;
      response: ManagingCompaniesCostCentersUpdateResponse;
      responseData: ManagingCompaniesCostCentersUpdateResponseData;
    },
  },
  "managing_companies_cost_centers_delete": {
    method: "DELETE",
    path: "/managing-companies/cost-centers/delete/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center löschen",
      description: "Löscht einen Cost Center. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersDeleteParams;
      query: ManagingCompaniesCostCentersDeleteQuery;
      body: ManagingCompaniesCostCentersDeleteBody;
      response: ManagingCompaniesCostCentersDeleteResponse;
      responseData: ManagingCompaniesCostCentersDeleteResponseData;
    },
  },
  "managing_companies_cost_centers_list": {
    method: "GET",
    path: "/managing-companies/cost-centers/list/:managingCompanyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","cost-centers"],
      summary: "Cost Center listen (pagininiert)",
      description: "Listet Cost Center eines Managing Company paginiert (Filter via Query). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesCostCentersListParams;
      query: ManagingCompaniesCostCentersListQuery;
      body: ManagingCompaniesCostCentersListBody;
      response: ManagingCompaniesCostCentersListResponse;
      responseData: ManagingCompaniesCostCentersListResponseData;
    },
  },
  "managing_companies_selected_set": {
    method: "POST",
    path: "/managing-companies/selected/set/:companyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","selected-company"],
      summary: "Ausgewähltes Unternehmen setzen",
      description: "Setzt das aktuell ausgewählte Managing Company (Mandant) für den Benutzer. Auth: Bearer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesSelectedSetParams;
      query: ManagingCompaniesSelectedSetQuery;
      body: ManagingCompaniesSelectedSetBody;
      response: ManagingCompaniesSelectedSetResponse;
      responseData: ManagingCompaniesSelectedSetResponseData;
    },
  },
  "managing_companies_selected_current": {
    method: "GET",
    path: "/managing-companies/selected/current",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","selected-company"],
      summary: "Ausgewähltes Unternehmen abrufen",
      description: "Gibt das aktuell ausgewählte Managing Company (inkl. FullSelectedCompany) zurück oder `null`, falls keines gesetzt ist. Auth: Bearer.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesSelectedCurrentParams;
      query: ManagingCompaniesSelectedCurrentQuery;
      body: ManagingCompaniesSelectedCurrentBody;
      response: ManagingCompaniesSelectedCurrentResponse;
      responseData: ManagingCompaniesSelectedCurrentResponseData;
    },
  },
  "managing_companies_vat_settings_get": {
    method: "GET",
    path: "/managing-companies/vat-settings/:companyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","vat-settings"],
      summary: "USt-Einstellungen lesen",
      description: "Lädt die aktuellen USt-Einstellungen inklusive erweiterbarer Steuerentscheidungen (taxDecisions) für ein Managing Company. Gibt null zurück falls noch keine Einstellungen vorhanden. Auth: Bearer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesVatSettingsGetParams;
      query: ManagingCompaniesVatSettingsGetQuery;
      body: ManagingCompaniesVatSettingsGetBody;
      response: ManagingCompaniesVatSettingsGetResponse;
      responseData: ManagingCompaniesVatSettingsGetResponseData;
    },
  },
  "managing_companies_vat_settings_upsert": {
    method: "POST",
    path: "/managing-companies/vat-settings/:companyId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","vat-settings"],
      summary: "USt-Einstellungen speichern",
      description: "Ändert Besteuerungsverfahren (SOLL/IST), UStVA-Anmeldepräferenz und optional taxDecisions (erweiterbare Steuerentscheidungsmap) für ein Managing Company (Upsert). Für eine vollständig auditierte Änderung mit Historieneinträgen nutze stattdessen PUT /admin/vat/company/:id/settings. Auth: Bearer.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesVatSettingsUpsertParams;
      query: ManagingCompaniesVatSettingsUpsertQuery;
      body: ManagingCompaniesVatSettingsUpsertBody;
      response: ManagingCompaniesVatSettingsUpsertResponse;
      responseData: ManagingCompaniesVatSettingsUpsertResponseData;
    },
  },
  "managing_companies_vat_settings_decision_upsert": {
    method: "PUT",
    path: "/managing-companies/vat-settings/:companyId/decisions/:decisionKey",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","vat-settings"],
      summary: "Steuerentscheidung aktiv setzen",
      description: "Speichert eine explizite Steuerentscheidung des Users unter einem frei erweiterbaren Entscheidungsschluessel. Das System trifft KEINE automatischen Steuerentscheidungen – dieser Endpoint ist immer eine bewusste User-Aktion. Bekannte Keys: 'vat.regime' → value: { regime: 'kleinunternehmer' | 'regelbesteuert' } – setzt das USt-Regime. Typischer Flow: User sieht Alert (GET /tax-alerts activeCount > 0), klickt 'Jetzt umstellen', Frontend sendet diesen Call. 'vat.regime.auto_switch_consent' → value: { enabled: true|false } – opt-in: System darf bei §19-Grenzwert-Ueberschreitung automatisch umstellen. effectiveFrom: ISO-Datetime ab wann die Entscheidung gilt (default: jetzt). note: Begruendung / Notiz fuer Audit-Log. Response appliedRegimePeriod ist gesetzt wenn ein Regime-Zeitraum angelegt wurde.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesVatSettingsDecisionUpsertParams;
      query: ManagingCompaniesVatSettingsDecisionUpsertQuery;
      body: ManagingCompaniesVatSettingsDecisionUpsertBody;
      response: ManagingCompaniesVatSettingsDecisionUpsertResponse;
      responseData: ManagingCompaniesVatSettingsDecisionUpsertResponseData;
    },
  },
  "managing_companies_vat_settings_tax_alerts": {
    method: "GET",
    path: "/managing-companies/vat-settings/:companyId/tax-alerts",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","vat-settings"],
      summary: "Steuerliche Handlungshinweise abrufen",
      description: "Gibt alle aktiven (und aufgeloesten) Steuerhinweise zurueck, die eine explizite User-Entscheidung erfordern. Das System trifft KEINE automatischen Steuerentscheidungen – Alerts signalisieren nur, dass der User handeln muss. Frontend-Flow: (1) activeCount > 0 → Badge/Banner anzeigen. (2) Jeden Alert mit active=true anzeigen: title + message direkt verwendbar als Benachrichtigungstext. (3) Hat ein Alert requiredDecision != null → 'Jetzt entscheiden'-Button anzeigen:     requiredDecision.endpoint = exakter API-Pfad fuer PUT /decisions/:decisionKey,     requiredDecision.suggestedValue = empfohlener value-Wert (direkt uebergeben),     requiredDecision.currentValue = aktuell gesetzter Wert. (4) Nach User-Klick: PUT /managing-companies/vat-settings/:companyId/decisions/:decisionKey aufrufen,     dann diesen Endpoint erneut aufrufen um Badge zu aktualisieren. Aktuell implementierte Alerts: • vat.regime.current_year_exceeded – §19 UStG laufendes Jahr >= 100k → sofortige Umstellung auf regelbesteuert erforderlich. • vat.regime.previous_year_exceeded – §19 UStG Vorjahr > 25k → Umstellung auf regelbesteuert empfohlen.   metadata.autoSwitchEnabled zeigt ob User auto_switch_consent bereits aktiviert hat. activeCount = Anzahl noch ungeloester aktiver Alerts (sinnvoll fuer Badge/Dot im Frontend).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesVatSettingsTaxAlertsParams;
      query: ManagingCompaniesVatSettingsTaxAlertsQuery;
      body: ManagingCompaniesVatSettingsTaxAlertsBody;
      response: ManagingCompaniesVatSettingsTaxAlertsResponse;
      responseData: ManagingCompaniesVatSettingsTaxAlertsResponseData;
    },
  },
  "managing_companies_invites_pending_user": {
    method: "GET",
    path: "/managing-companies/invites/pending/user",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Eigene offene Einladungen",
      description: "Listet offene Einladungen für den aktuell eingeloggten Benutzer (pagininiert). Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesPendingUserParams;
      query: ManagingCompaniesInvitesPendingUserQuery;
      body: ManagingCompaniesInvitesPendingUserBody;
      response: ManagingCompaniesInvitesPendingUserResponse;
      responseData: ManagingCompaniesInvitesPendingUserResponseData;
    },
  },
  "managing_companies_invites_pending_company": {
    method: "GET",
    path: "/managing-companies/invites/pending/company/:managingCompanyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Offene Einladungen eines Unternehmens",
      description: "Listet offene Einladungen für ein Managing Company (pagininiert). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesPendingCompanyParams;
      query: ManagingCompaniesInvitesPendingCompanyQuery;
      body: ManagingCompaniesInvitesPendingCompanyBody;
      response: ManagingCompaniesInvitesPendingCompanyResponse;
      responseData: ManagingCompaniesInvitesPendingCompanyResponseData;
    },
  },
  "managing_companies_invites_pending_company_preview": {
    method: "GET",
    path: "/managing-companies/invites/pending/company/:managingCompanyId/preview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Invite-Preview (Unternehmensdaten)",
      description: "Preview von Unternehmensdaten zu einem Invite-Token (z.B. zur Anzeige vor Annahme). Auth: Bearer.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesPendingCompanyPreviewParams;
      query: ManagingCompaniesInvitesPendingCompanyPreviewQuery;
      body: ManagingCompaniesInvitesPendingCompanyPreviewBody;
      response: ManagingCompaniesInvitesPendingCompanyPreviewResponse;
      responseData: ManagingCompaniesInvitesPendingCompanyPreviewResponseData;
    },
  },
  "managing_companies_invites_accept": {
    method: "POST",
    path: "/managing-companies/invites/accept/:token",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Einladung annehmen",
      description: "Nimmt eine Einladung per Token an und legt/aktiviert die Zuweisung. Auth: Bearer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesAcceptParams;
      query: ManagingCompaniesInvitesAcceptQuery;
      body: ManagingCompaniesInvitesAcceptBody;
      response: ManagingCompaniesInvitesAcceptResponse;
      responseData: ManagingCompaniesInvitesAcceptResponseData;
    },
  },
  "managing_companies_invites_reject": {
    method: "POST",
    path: "/managing-companies/invites/reject/:token",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Einladung ablehnen",
      description: "Lehnt eine Einladung per Token ab. Auth: Bearer.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesRejectParams;
      query: ManagingCompaniesInvitesRejectQuery;
      body: ManagingCompaniesInvitesRejectBody;
      response: ManagingCompaniesInvitesRejectResponse;
      responseData: ManagingCompaniesInvitesRejectResponseData;
    },
  },
  "managing_companies_invites_cancel": {
    method: "DELETE",
    path: "/managing-companies/invites/cancel/:inviteId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invites"],
      summary: "Einladung stornieren",
      description: "Storniert eine ausstehende Einladung (i.d.R. durch Admin/Editor). Auth: Bearer.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvitesCancelParams;
      query: ManagingCompaniesInvitesCancelQuery;
      body: ManagingCompaniesInvitesCancelBody;
      response: ManagingCompaniesInvitesCancelResponse;
      responseData: ManagingCompaniesInvitesCancelResponseData;
    },
  },
  "managing_companies_api_keys_create": {
    method: "POST",
    path: "/managing-companies/api-keys/create",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Key erstellen",
      description: "Erstellt einen neuen API-Key für das ausgewählte Unternehmen (inkl. Klartext-Key in der Response). Cost-Center-Regeln: Für `role=admin` ist der Key immer unbeschränkt (`availableCostCenters = null`). Für `viewer`/`editor` ist `availableCostCenters` eine Whitelist (wenn nicht gesetzt => leere Liste). `defaultCostCenter` muss zur Company gehören und bei Nicht-Admin in der Whitelist enthalten sein.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysCreateParams;
      query: ManagingCompaniesApiKeysCreateQuery;
      body: ManagingCompaniesApiKeysCreateBody;
      response: ManagingCompaniesApiKeysCreateResponse;
      responseData: ManagingCompaniesApiKeysCreateResponseData;
    },
  },
  "managing_companies_api_keys_update": {
    method: "PUT",
    path: "/managing-companies/api-keys/update/:apiKeyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Key aktualisieren",
      description: "Ändert Name/Rolle/Gültigkeit/Cost-Center-Zuordnung eines API-Keys. Cost-Center-Regeln: Nicht-Admin-Keys sind whitelist-basiert (`availableCostCenters`), Admin-Keys werden auf unbeschränkt gesetzt (`availableCostCenters = null`).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysUpdateParams;
      query: ManagingCompaniesApiKeysUpdateQuery;
      body: ManagingCompaniesApiKeysUpdateBody;
      response: ManagingCompaniesApiKeysUpdateResponse;
      responseData: ManagingCompaniesApiKeysUpdateResponseData;
    },
  },
  "managing_companies_api_keys_delete": {
    method: "DELETE",
    path: "/managing-companies/api-keys/delete/:apiKeyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Key löschen",
      description: "Löscht einen API-Key. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysDeleteParams;
      query: ManagingCompaniesApiKeysDeleteQuery;
      body: ManagingCompaniesApiKeysDeleteBody;
      response: ManagingCompaniesApiKeysDeleteResponse;
      responseData: ManagingCompaniesApiKeysDeleteResponseData;
    },
  },
  "managing_companies_api_keys_revoke": {
    method: "POST",
    path: "/managing-companies/api-keys/revoke/:apiKeyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Key sperren (revoke)",
      description: "Setzt einen API-Key außer Kraft, ohne ihn zwingend zu löschen. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysRevokeParams;
      query: ManagingCompaniesApiKeysRevokeQuery;
      body: ManagingCompaniesApiKeysRevokeBody;
      response: ManagingCompaniesApiKeysRevokeResponse;
      responseData: ManagingCompaniesApiKeysRevokeResponseData;
    },
  },
  "managing_companies_api_keys_by_id": {
    method: "GET",
    path: "/managing-companies/api-keys/byId/:apiKeyId",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Key nach ID",
      description: "Lädt einen API-Key (ohne Klartext). `availableCostCenters` wird normalisiert zurückgegeben (Array für whitelist-basierte Keys, `null` für unbeschränkte Admin-Keys).",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysByIdParams;
      query: ManagingCompaniesApiKeysByIdQuery;
      body: ManagingCompaniesApiKeysByIdBody;
      response: ManagingCompaniesApiKeysByIdResponse;
      responseData: ManagingCompaniesApiKeysByIdResponseData;
    },
  },
  "managing_companies_api_keys_list": {
    method: "GET",
    path: "/managing-companies/api-keys/list",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies","api-keys"],
      summary: "API-Keys listen",
      description: "Listet API-Keys paginiert. `availableCostCenters` ist immer normalisiert (Array für whitelist-basierte Keys, `null` für unbeschränkte Admin-Keys).",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesApiKeysListParams;
      query: ManagingCompaniesApiKeysListQuery;
      body: ManagingCompaniesApiKeysListBody;
      response: ManagingCompaniesApiKeysListResponse;
      responseData: ManagingCompaniesApiKeysListResponseData;
    },
  },
  "managing_companies_invoice_layouts_catalog": {
    method: "GET",
    path: "/managing-companies/invoice-layouts/catalog",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-layouts"],
      summary: "Rechnungslayout-Katalog",
      description: "Liefert 5 verfügbare Rechnungslayouts inkl. technischer Details, Preview-Metadaten und E-Rechnungs-Infos.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceLayoutsCatalogParams;
      query: ManagingCompaniesInvoiceLayoutsCatalogQuery;
      body: ManagingCompaniesInvoiceLayoutsCatalogBody;
      response: ManagingCompaniesInvoiceLayoutsCatalogResponse;
      responseData: ManagingCompaniesInvoiceLayoutsCatalogResponseData;
    },
  },
  "managing_companies_invoice_layouts_effective": {
    method: "GET",
    path: "/managing-companies/invoice-layouts/effective",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-layouts"],
      summary: "Effektives Rechnungslayout",
      description: "Liefert das effektiv verwendete Layout (Company-Default mit optionalem Cost-Center-Override) inkl. technischem Profil.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceLayoutsEffectiveParams;
      query: ManagingCompaniesInvoiceLayoutsEffectiveQuery;
      body: ManagingCompaniesInvoiceLayoutsEffectiveBody;
      response: ManagingCompaniesInvoiceLayoutsEffectiveResponse;
      responseData: ManagingCompaniesInvoiceLayoutsEffectiveResponseData;
    },
  },
  "managing_companies_invoice_layouts_preview": {
    method: "GET",
    path: "/managing-companies/invoice-layouts/preview",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-layouts"],
      summary: "Layout-PDF-Preview",
      description: "Liefert eine echte PDF-Preview-URL für ein Layout. Die Preview wird per Cache-Key nur bei Änderungen neu erzeugt.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceLayoutsPreviewParams;
      query: ManagingCompaniesInvoiceLayoutsPreviewQuery;
      body: ManagingCompaniesInvoiceLayoutsPreviewBody;
      response: ManagingCompaniesInvoiceLayoutsPreviewResponse;
      responseData: ManagingCompaniesInvoiceLayoutsPreviewResponseData;
    },
  },
  "managing_companies_invoice_layouts_previews": {
    method: "GET",
    path: "/managing-companies/invoice-layouts/previews",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-layouts"],
      summary: "Alle Layout-PDF-Previews",
      description: "Liefert für alle 5 Layouts echte PDF-Preview-URLs (gecacht, nur bei Änderungen neu gerendert).",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceLayoutsPreviewsParams;
      query: ManagingCompaniesInvoiceLayoutsPreviewsQuery;
      body: ManagingCompaniesInvoiceLayoutsPreviewsBody;
      response: ManagingCompaniesInvoiceLayoutsPreviewsResponse;
      responseData: ManagingCompaniesInvoiceLayoutsPreviewsResponseData;
    },
  },
  "managing_companies_invoice_transparency_context": {
    method: "GET",
    path: "/managing-companies/invoice-transparency/:managingCompanyId/context",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-transparency"],
      summary: "Invoice-Transparenz-Kontext laden",
      description: "Liefert den aktuellen steuerlichen Kontext einer Managing Company inkl. Grenzwerten, Regime, aktiven Warnungen und relevanten Invoice-Defaults.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTransparencyContextParams;
      query: ManagingCompaniesInvoiceTransparencyContextQuery;
      body: ManagingCompaniesInvoiceTransparencyContextBody;
      response: ManagingCompaniesInvoiceTransparencyContextResponse;
      responseData: ManagingCompaniesInvoiceTransparencyContextResponseData;
    },
  },
  "managing_companies_invoice_transparency_quote": {
    method: "POST",
    path: "/managing-companies/invoice-transparency/:managingCompanyId/quote",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-transparency"],
      summary: "Rechnungsberechnung transparent vorschauen",
      description: "Berechnet eine Rechnung ohne Persistenz und liefert exakte Zahlen inkl. Steuerauflösung pro Position, i18n-faehigen Warnungsobjekten und quoteHash fuer stale-sichere Erstellung.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTransparencyQuoteParams;
      query: ManagingCompaniesInvoiceTransparencyQuoteQuery;
      body: ManagingCompaniesInvoiceTransparencyQuoteBody;
      response: ManagingCompaniesInvoiceTransparencyQuoteResponse;
      responseData: ManagingCompaniesInvoiceTransparencyQuoteResponseData;
    },
  },
  "managing_companies_item_type_configs_create": {
    method: "POST",
    path: "/managing-companies/invoice-transparency/:managingCompanyId/item-type-configs",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-transparency"],
      summary: "Eigene Positionskategorie erstellen",
      description: "Erstellt eine firmenspezifische Positionskategorie (z.B. 'Montage', 'Anfahrt'). Diese erscheint zusätzlich zu den Standardkategorien im Rechnungsformular. Der 'value'-Schlüssel muss pro Firma eindeutig sein (Kleinbuchstaben, Zahlen, Unterstriche).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesItemTypeConfigsCreateParams;
      query: ManagingCompaniesItemTypeConfigsCreateQuery;
      body: ManagingCompaniesItemTypeConfigsCreateBody;
      response: ManagingCompaniesItemTypeConfigsCreateResponse;
      responseData: ManagingCompaniesItemTypeConfigsCreateResponseData;
    },
  },
  "managing_companies_item_type_configs_update": {
    method: "PUT",
    path: "/managing-companies/invoice-transparency/:managingCompanyId/item-type-configs/:value",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-transparency"],
      summary: "Positionskategorie aktualisieren",
      description: "Aktualisiert den Anzeigenamen oder den Standard-Steuermodus einer firmenspezifischen Positionskategorie.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesItemTypeConfigsUpdateParams;
      query: ManagingCompaniesItemTypeConfigsUpdateQuery;
      body: ManagingCompaniesItemTypeConfigsUpdateBody;
      response: ManagingCompaniesItemTypeConfigsUpdateResponse;
      responseData: ManagingCompaniesItemTypeConfigsUpdateResponseData;
    },
  },
  "managing_companies_item_type_configs_archive": {
    method: "POST",
    path: "/managing-companies/invoice-transparency/:managingCompanyId/item-type-configs/:value/archive",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-transparency"],
      summary: "Positionskategorie archivieren",
      description: "Archiviert eine firmenspezifische Positionskategorie (Soft-Delete). Bereits verwendete Positionen behalten ihren Typ — die Kategorie wird nur aus der Auswahl entfernt.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesItemTypeConfigsArchiveParams;
      query: ManagingCompaniesItemTypeConfigsArchiveQuery;
      body: ManagingCompaniesItemTypeConfigsArchiveBody;
      response: ManagingCompaniesItemTypeConfigsArchiveResponse;
      responseData: ManagingCompaniesItemTypeConfigsArchiveResponseData;
    },
  },
  "managing_companies_invoice_templates_list": {
    method: "GET",
    path: "/managing-companies/invoice-templates/:managingCompanyId/list",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlagen auflisten",
      description: "Gibt eine paginierte Liste aller Rechnungsvorlagen zurück. Sortiert nach zuletzt verwendet und Nutzungshäufigkeit. Optional filterbar nach Suchbegriff, Kunde und Archivierungsstatus.",
      validated: {"params":true,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesListParams;
      query: ManagingCompaniesInvoiceTemplatesListQuery;
      body: ManagingCompaniesInvoiceTemplatesListBody;
      response: ManagingCompaniesInvoiceTemplatesListResponse;
      responseData: ManagingCompaniesInvoiceTemplatesListResponseData;
    },
  },
  "managing_companies_invoice_templates_get": {
    method: "GET",
    path: "/managing-companies/invoice-templates/:managingCompanyId/:templateId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlage laden",
      description: "Lädt eine einzelne Rechnungsvorlage mit allen Details und Positionen.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesGetParams;
      query: ManagingCompaniesInvoiceTemplatesGetQuery;
      body: ManagingCompaniesInvoiceTemplatesGetBody;
      response: ManagingCompaniesInvoiceTemplatesGetResponse;
      responseData: ManagingCompaniesInvoiceTemplatesGetResponseData;
    },
  },
  "managing_companies_invoice_templates_create": {
    method: "POST",
    path: "/managing-companies/invoice-templates/:managingCompanyId/create",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlage erstellen",
      description: "Erstellt eine neue Rechnungsvorlage mit Positionen, Zahlungsbedingungen und optionaler Kundenbindung.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesCreateParams;
      query: ManagingCompaniesInvoiceTemplatesCreateQuery;
      body: ManagingCompaniesInvoiceTemplatesCreateBody;
      response: ManagingCompaniesInvoiceTemplatesCreateResponse;
      responseData: ManagingCompaniesInvoiceTemplatesCreateResponseData;
    },
  },
  "managing_companies_invoice_templates_from_invoice": {
    method: "POST",
    path: "/managing-companies/invoice-templates/:managingCompanyId/from-invoice",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Vorlage aus bestehender Rechnung erstellen",
      description: "Erstellt eine Rechnungsvorlage basierend auf einer bestehenden Rechnung. Übernimmt Positionen, Kunde, Zahlungsbedingungen und Einstellungen. Rechnungsspezifische Daten (Nummer, Datum, Status) werden entfernt.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesFromInvoiceParams;
      query: ManagingCompaniesInvoiceTemplatesFromInvoiceQuery;
      body: ManagingCompaniesInvoiceTemplatesFromInvoiceBody;
      response: ManagingCompaniesInvoiceTemplatesFromInvoiceResponse;
      responseData: ManagingCompaniesInvoiceTemplatesFromInvoiceResponseData;
    },
  },
  "managing_companies_invoice_templates_update": {
    method: "PUT",
    path: "/managing-companies/invoice-templates/:managingCompanyId/:templateId",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlage aktualisieren",
      description: "Aktualisiert eine bestehende Rechnungsvorlage (Name, Positionen, Einstellungen).",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesUpdateParams;
      query: ManagingCompaniesInvoiceTemplatesUpdateQuery;
      body: ManagingCompaniesInvoiceTemplatesUpdateBody;
      response: ManagingCompaniesInvoiceTemplatesUpdateResponse;
      responseData: ManagingCompaniesInvoiceTemplatesUpdateResponseData;
    },
  },
  "managing_companies_invoice_templates_archive": {
    method: "POST",
    path: "/managing-companies/invoice-templates/:managingCompanyId/:templateId/archive",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlage archivieren",
      description: "Archiviert eine Rechnungsvorlage (Soft-Delete). Die Vorlage bleibt für Audit-Zwecke erhalten, wird aber nicht mehr in der Standard-Liste angezeigt.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesArchiveParams;
      query: ManagingCompaniesInvoiceTemplatesArchiveQuery;
      body: ManagingCompaniesInvoiceTemplatesArchiveBody;
      response: ManagingCompaniesInvoiceTemplatesArchiveResponse;
      responseData: ManagingCompaniesInvoiceTemplatesArchiveResponseData;
    },
  },
  "managing_companies_invoice_templates_duplicate": {
    method: "POST",
    path: "/managing-companies/invoice-templates/:managingCompanyId/:templateId/duplicate",
    auth: {"type":"frontend_bearer_http"},
    meta: {
      tags: ["managing-companies","invoice-templates"],
      summary: "Rechnungsvorlage duplizieren",
      description: "Erstellt eine Kopie einer bestehenden Rechnungsvorlage unter neuem Namen. Nutzungsstatistiken werden zurückgesetzt.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesInvoiceTemplatesDuplicateParams;
      query: ManagingCompaniesInvoiceTemplatesDuplicateQuery;
      body: ManagingCompaniesInvoiceTemplatesDuplicateBody;
      response: ManagingCompaniesInvoiceTemplatesDuplicateResponse;
      responseData: ManagingCompaniesInvoiceTemplatesDuplicateResponseData;
    },
  },
  "managing_companies_create": {
    method: "POST",
    path: "/managing-companies",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies"],
      summary: "Verwaltendes Unternehmen anlegen",
      description: "Erstellt ein neues Managing Company (Mandant) inkl. Grunddaten. Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesCreateParams;
      query: ManagingCompaniesCreateQuery;
      body: ManagingCompaniesCreateBody;
      response: ManagingCompaniesCreateResponse;
      responseData: ManagingCompaniesCreateResponseData;
    },
  },
  "managing_companies_list": {
    method: "GET",
    path: "/managing-companies",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies"],
      summary: "Verwaltende Unternehmen listen",
      description: "Gibt die Managing Companies zurück, auf die der Benutzer Zugriff hat (paginierte Liste). Erfordert `bookkeeping_access`.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesListParams;
      query: ManagingCompaniesListQuery;
      body: ManagingCompaniesListBody;
      response: ManagingCompaniesListResponse;
      responseData: ManagingCompaniesListResponseData;
    },
  },
  "managing_companies_get_by_id": {
    method: "GET",
    path: "/managing-companies/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies"],
      summary: "Verwaltendes Unternehmen nach ID",
      description: "Lädt eine Managing Company per ID. Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesGetByIdParams;
      query: ManagingCompaniesGetByIdQuery;
      body: ManagingCompaniesGetByIdBody;
      response: ManagingCompaniesGetByIdResponse;
      responseData: ManagingCompaniesGetByIdResponseData;
    },
  },
  "managing_companies_update": {
    method: "PUT",
    path: "/managing-companies/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies"],
      summary: "Verwaltendes Unternehmen aktualisieren",
      description: "Aktualisiert Stammdaten/Settings einer Managing Company (z.B. ZUGFeRD Settings). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":true},
    },
    types: null as unknown as {
      params: ManagingCompaniesUpdateParams;
      query: ManagingCompaniesUpdateQuery;
      body: ManagingCompaniesUpdateBody;
      response: ManagingCompaniesUpdateResponse;
      responseData: ManagingCompaniesUpdateResponseData;
    },
  },
  "managing_companies_delete": {
    method: "DELETE",
    path: "/managing-companies/:id",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["managing-companies"],
      summary: "Verwaltendes Unternehmen löschen",
      description: "Löscht eine Managing Company (nur wenn serverseitige Regeln es erlauben). Erfordert `bookkeeping_access`.",
      validated: {"params":true,"query":false,"body":false},
    },
    types: null as unknown as {
      params: ManagingCompaniesDeleteParams;
      query: ManagingCompaniesDeleteQuery;
      body: ManagingCompaniesDeleteBody;
      response: ManagingCompaniesDeleteResponse;
      responseData: ManagingCompaniesDeleteResponseData;
    },
  },
} as const;