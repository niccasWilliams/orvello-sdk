/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type DocumentsPrivateImportExternalParams = undefined;
export type DocumentsPrivateImportExternalQuery = undefined;
export type DocumentsPrivateImportExternalBody = {
  sourceAppId: "node-amp";
  sourceCompanyId: number;
  sourceOwnerId: number;
  accountKey: string;
  sourceEmailId: number;
  attachmentIndex: number;
  sourceMessageId?: string | null;
  fileName: string;
  pdfBase64: string;
  sha256: string;
};
export type DocumentsPrivateImportExternalResponseData = {
  status: "imported" | "already_imported";
  documentId: number;
  folderId: number;
  bindingId: number;
  ownerUserId: number;
  space: "private";
  sourceSha256: string;
};
export type DocumentsPrivateImportExternalResponse = import("../types").ApiEnvelope<DocumentsPrivateImportExternalResponseData>;

export const apiRoutes_documents_private_import = {
  // Contract source: explicit
  "documents_private_import_external": {
    method: "POST",
    path: "/documents/private-import/external",
    auth: {"type":"unified_bearer","allowUserSession":false,"allowOAuth2":true,"allowApiKey":false,"requireRole":"editor","scopes":["expenses:write"]},
    meta: {
      tags: ["documents-private-import"],
      summary: "Privaten Mailbeleg in ausdrücklich autorisierter Ablage übernehmen",
      description: "OAuth Firmenzugriff und expenses:write allein reichen nicht: eine aktive, serverseitig auditierte Bindung aus Client, Firma, Quellbenutzer und Mailkonto bestimmt den privaten Eigentümer. Keine Benutzeranlage, Buchung oder Zahlungsbestätigung. Wiederholungen derselben Mailanlage liefern den vorhandenen Beleg; abweichende oder gelöschte Belege erzeugen einen Konflikt.",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: DocumentsPrivateImportExternalParams;
      query: DocumentsPrivateImportExternalQuery;
      body: DocumentsPrivateImportExternalBody;
      response: DocumentsPrivateImportExternalResponse;
      responseData: DocumentsPrivateImportExternalResponseData;
    },
  },
} as const;