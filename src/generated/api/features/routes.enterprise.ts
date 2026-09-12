// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: 2026-09-12T14:36:48.395Z
// Run `pnpm run api:generate` to regenerate

export type EnterpriseOnboardingStateGetParams = undefined;
export type EnterpriseOnboardingStateGetQuery = {

};
export type EnterpriseOnboardingStateGetBody = undefined;
export type EnterpriseOnboardingStateGetResponseData = {
  generatedAt: string;
  userId: number;
  context: {
  selectedManagingCompanyId: number | null;
  targetManagingCompanyId: number | null;
  managingCompaniesCount: number;
  adminManagingCompaniesCount: number;
};
  summary: {
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  blockingOpenSteps: number;
  showOnboarding: boolean;
  recommendedNextStepId: string | null;
};
  steps: Array<{
  id: string;
  title: string;
  description: string;
  hint: string | null;
  required: boolean;
  blocking: boolean;
  skippable: boolean;
  skipped: boolean;
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  requiresAcknowledgement: boolean;
  readyToComplete: boolean;
  acknowledged: boolean;
  autoResolved: boolean;
  checklist: Array<{
  key: string;
  label: string;
  hint: string | null;
  done: boolean;
  required: boolean;
}> | null;
  progress: {
  done: number;
  total: number;
  missing: Array<string>;
} | null;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
}>;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
};
export type EnterpriseOnboardingStateGetResponse = import("../types").ApiEnvelope<EnterpriseOnboardingStateGetResponseData>;

export type EnterpriseOnboardingCompleteStepParams = undefined;
export type EnterpriseOnboardingCompleteStepQuery = undefined;
export type EnterpriseOnboardingCompleteStepBody = {
  stepId: "company_create" | "company_profile" | "tax_setup" | "bank_setup" | "invoice_setup";
};
export type EnterpriseOnboardingCompleteStepResponseData = {
  accepted: boolean;
  stepId: string;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  blocking: boolean;
  reason: string | null;
  missing: Array<string>;
  recommendedNextStepId: string | null;
  state: {
  generatedAt: string;
  userId: number;
  context: {
  selectedManagingCompanyId: number | null;
  targetManagingCompanyId: number | null;
  managingCompaniesCount: number;
  adminManagingCompaniesCount: number;
};
  summary: {
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  blockingOpenSteps: number;
  showOnboarding: boolean;
  recommendedNextStepId: string | null;
};
  steps: Array<{
  id: string;
  title: string;
  description: string;
  hint: string | null;
  required: boolean;
  blocking: boolean;
  skippable: boolean;
  skipped: boolean;
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  requiresAcknowledgement: boolean;
  readyToComplete: boolean;
  acknowledged: boolean;
  autoResolved: boolean;
  checklist: Array<{
  key: string;
  label: string;
  hint: string | null;
  done: boolean;
  required: boolean;
}> | null;
  progress: {
  done: number;
  total: number;
  missing: Array<string>;
} | null;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
}>;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
};
};
export type EnterpriseOnboardingCompleteStepResponse = import("../types").ApiEnvelope<EnterpriseOnboardingCompleteStepResponseData>;

export type EnterpriseOnboardingSkipStepParams = undefined;
export type EnterpriseOnboardingSkipStepQuery = undefined;
export type EnterpriseOnboardingSkipStepBody = {
  stepId: "company_create" | "company_profile" | "tax_setup" | "bank_setup" | "invoice_setup";
};
export type EnterpriseOnboardingSkipStepResponseData = {
  skipped: boolean;
  stepId: string;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  reason: string | null;
  recommendedNextStepId: string | null;
  state: {
  generatedAt: string;
  userId: number;
  context: {
  selectedManagingCompanyId: number | null;
  targetManagingCompanyId: number | null;
  managingCompaniesCount: number;
  adminManagingCompaniesCount: number;
};
  summary: {
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  blockingOpenSteps: number;
  showOnboarding: boolean;
  recommendedNextStepId: string | null;
};
  steps: Array<{
  id: string;
  title: string;
  description: string;
  hint: string | null;
  required: boolean;
  blocking: boolean;
  skippable: boolean;
  skipped: boolean;
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  requiresAcknowledgement: boolean;
  readyToComplete: boolean;
  acknowledged: boolean;
  autoResolved: boolean;
  checklist: Array<{
  key: string;
  label: string;
  hint: string | null;
  done: boolean;
  required: boolean;
}> | null;
  progress: {
  done: number;
  total: number;
  missing: Array<string>;
} | null;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
}>;
  operations: Array<{
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description?: string | null;
}>;
};
};
export type EnterpriseOnboardingSkipStepResponse = import("../types").ApiEnvelope<EnterpriseOnboardingSkipStepResponseData>;

export const apiRoutes_enterprise = {
  "enterprise_onboarding_state_get": {
    method: "GET",
    path: "/apps/enterprise/onboarding/state",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["enterprise","onboarding"],
      summary: "Enterprise Onboarding Status",
      description: "Liefert den vollstaendigen Onboarding-Status fuer das Frontend. WICHTIG – Frontend-Logik: (1) summary.showOnboarding ist der einzige Gate-Schalter. Ist er false → App normal nutzbar, kein Block. (2) Schritte mit readyToComplete=true werden vom Server beim naechsten Aufruf automatisch abgeschlossen – kein manueller POST /complete-step noetig. (3) Schritte mit acknowledged=true sind bereits persistiert – kein erneuter Aufruf noetig. (4) requiresAcknowledgement=true + readyToComplete=true + acknowledged=false → optionaler 'Abschliessen'-Button anzeigen (Komfort, kein Blocker). (5) Jeder Step enthaelt operations[] mit den exakten API-Calls (key, method, path) die fuer diesen Schritt noetig sind. (6) recommendedNextStepId zeigt den naechsten offenen Schritt – direkt zur Navigation nutzbar. Auth: Bearer + BookkeepingAccess-Permission.",
      validated: {"params":false,"query":true,"body":false},
    },
    types: null as unknown as {
      params: EnterpriseOnboardingStateGetParams;
      query: EnterpriseOnboardingStateGetQuery;
      body: EnterpriseOnboardingStateGetBody;
      response: EnterpriseOnboardingStateGetResponse;
      responseData: EnterpriseOnboardingStateGetResponseData;
    },
  },
  "enterprise_onboarding_complete_step": {
    method: "POST",
    path: "/apps/enterprise/onboarding/complete-step",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["enterprise","onboarding"],
      summary: "Onboarding Step Validieren/Abschliessen",
      description: "Validiert serverseitig ob ein Schritt wirklich abgeschlossen ist und persistiert die Bestaetigung. Wann aufrufen: NUR wenn readyToComplete=true und acknowledged=false und der User explizit auf 'Abschliessen' geklickt hat. Schritte mit readyToComplete=true werden vom Server beim naechsten GET /state OHNEHIN automatisch abgeschlossen. Dieser Endpoint ist also ein optionaler Komfort-Call, kein Pflichtaufruf. Response: accepted=true wenn Schritt valide war, missing[] enthaelt fehlende Pflichtfelder falls accepted=false. state enthaelt den aktualisierten Gesamtstatus (direkt verwendbar, kein erneutes GET noetig).",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EnterpriseOnboardingCompleteStepParams;
      query: EnterpriseOnboardingCompleteStepQuery;
      body: EnterpriseOnboardingCompleteStepBody;
      response: EnterpriseOnboardingCompleteStepResponse;
      responseData: EnterpriseOnboardingCompleteStepResponseData;
    },
  },
  "enterprise_onboarding_skip_step": {
    method: "POST",
    path: "/apps/enterprise/onboarding/skip-step",
    auth: {"type":"frontend_permission_http","permission":"bookkeeping_access"},
    meta: {
      tags: ["enterprise","onboarding"],
      summary: "Onboarding Schritt Ueberspringen",
      description: "Markiert einen skippbaren Onboarding-Schritt als uebersprungen (skipped=true). Nur aufrufbar wenn step.skippable=true. Nicht-skippbare oder bereits abgeschlossene Schritte werden abgelehnt (skipped=false in Response). Uebersprungene Schritte gelten als 'erledigt' fuer blockingOpenSteps – der User kommt also weiter. Response enthaelt den aktualisierten State (direkt verwendbar, kein erneutes GET noetig).",
      bodyContentType: "application/json",
      validated: {"params":false,"query":false,"body":true},
    },
    types: null as unknown as {
      params: EnterpriseOnboardingSkipStepParams;
      query: EnterpriseOnboardingSkipStepQuery;
      body: EnterpriseOnboardingSkipStepBody;
      response: EnterpriseOnboardingSkipStepResponse;
      responseData: EnterpriseOnboardingSkipStepResponseData;
    },
  },
} as const;