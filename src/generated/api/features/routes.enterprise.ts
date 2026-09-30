// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run `pnpm run api:generate` to regenerate

export type EnterpriseOnboardingStateGetParams = undefined;
export type EnterpriseOnboardingStateGetQuery = {

};
export type EnterpriseOnboardingStateGetBody = undefined;
export type EnterpriseOnboardingStateGetResponseData = {
  /** ISO-Timestamp wann dieser State generiert wurde. */
  generatedAt: string;
  userId: number;
  context: {
  /** Aktuell ausgewaehlte Managing Company des Users. Null wenn noch keine ausgewaehlt. */
  selectedManagingCompanyId: number | null;
  /** Die Company fuer die der Onboarding-State gilt (i.d.R. = selectedManagingCompanyId). */
  targetManagingCompanyId: number | null;
  /** Anzahl aller Managing Companies des Users. */
  managingCompaniesCount: number;
  /** Davon mit Admin-Zugriff. */
  adminManagingCompaniesCount: number;
};
  summary: {
  /** Fortschritt in Prozent (0–100) ueber alle Schritte. */
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  /** Anzahl blocking+required Schritte, die noch nicht abgeschlossen sind. Ist 0 sobald alle Pflichtschritte erledigt sind. */
  blockingOpenSteps: number;
  /** HAUPT-SCHALTER: true = Onboarding-Overlay/Banner anzeigen, false = Onboarding abgeschlossen, App normal nutzbar. Leite den User NIEMALS in einen Hard-Block wenn showOnboarding=false, egal was andere Felder sagen. Das Frontend sollte dieses  */
  showOnboarding: boolean;
  /** Step-ID des naechsten empfohlenen Schritts. Null wenn alles erledigt. Nutze diesen Wert um den User direkt zum richtigen Tab/Screen zu navigieren. */
  recommendedNextStepId: string | null;
};
  /** Alle Onboarding-Schritte in der empfohlenen Reihenfolge. Das Frontend kann diese Liste direkt als Stepper/Sidebar rendern. */
  steps: Array<{
  /** Eindeutige Step-ID. Moegliche Werte: company_create | company_profile | tax_setup | bank_setup | invoice_setup */
  id: string;
  /** Kurzname des Schritts fuer Ueberschriften / Stepper. */
  title: string;
  /** Laengere Erklaerung des Schritts fuer Hilfetexte / Tooltips. */
  description: string;
  /** Zusaetzlicher Kontext-Hinweis (z.B. rechtlicher Hinweis). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = Pflichtschritt – darf nicht dauerhaft uebersprungen werden. */
  required: boolean;
  /** true = dieser Schritt blockiert den App-Zugang solange er offen ist. blocking=true + required=true + nicht abgeschlossen => showOnboarding=true. */
  blocking: boolean;
  /** true = User darf diesen Schritt aktiv ueberspringen (POST /skip-step). */
  skippable: boolean;
  /** true = User hat diesen Schritt aktiv uebersprungen. */
  skipped: boolean;
  /** true = Schritt wird auch dann angezeigt, wenn er optional ist. */
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  /** true = dieser Schritt wuerde normalerweise einen manuellen Abschluss-Klick benoetigen. Relevant fuer die UI: zeige dann einen 'Abschliessen'-Button, ABER nur wenn readyToComplete=true und acknowledged=false. Sobald acknowledged=true ist der */
  requiresAcknowledgement: boolean;
  /** true = alle Pflichtdaten sind vorhanden, der Schritt kann abgeschlossen werden. Der Server auto-completed solche Schritte beim naechsten GET /state automatisch. Das Frontend muss POST /complete-step NUR noch aufrufen, falls readyToComplete= */
  readyToComplete: boolean;
  /** true = Schritt ist serverseitig als abgeschlossen persistiert. Wenn acknowledged=true und status=completed/auto_completed/skipped: Schritt gilt als fertig, kein weiterer Aufruf noetig. */
  acknowledged: boolean;
  /** true = Schritt loest sich automatisch auf (z.B. company_create nach erster Firma-Erstellung). Kein Acknowledgement und kein Button noetig. */
  autoResolved: boolean;
  /** Detaillierte Checkliste mit einzelnen Datenpunkten. Null wenn kein Checklisten-Fortschritt verfuegbar. required=true Eintraege sind Pflicht, optional=false Eintraege sind nice-to-have. */
  checklist: Array<{
  /** Interner Bezeichner des Checklistenpunkts. */
  key: string;
  /** Menschenlesbarer Name des Checklistenpunkts, direkt im UI verwendbar. */
  label: string;
  /** Optionaler Hilfstext (Tooltip / Erklaerung). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = dieser Punkt ist erledigt. */
  done: boolean;
  /** true = Pflichtfeld, muss done=true sein damit der Schritt abschliessbar ist. */
  required: boolean;
}> | null;
  /** Aggregierter Fortschritt (deprecated – bitte checklist verwenden). Null wenn kein Fortschritt verfuegbar. */
  progress: {
  /** Anzahl abgeschlossener Checklistenpunkte. */
  done: number;
  /** Gesamtanzahl Checklistenpunkte. */
  total: number;
  /** Labels der noch fehlenden Pflichtfelder – direkt im UI verwendbar. */
  missing: Array<string>;
} | null;
  /** Liste der API-Operationen, die das Frontend fuer diesen Schritt benoetigt. Jeder Eintrag enthaelt key, method und path – damit weiss das Frontend genau, welchen Aufruf es machen muss. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
  description?: string | null;
}>;
}>;
  /** Zusammengefuehrte Map aller Operations aus allen Steps (Dedupliziert). Praktisch um global nachzuschlagen welcher API-Call zu welchem key gehoert. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
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
  /** ISO-Timestamp wann dieser State generiert wurde. */
  generatedAt: string;
  userId: number;
  context: {
  /** Aktuell ausgewaehlte Managing Company des Users. Null wenn noch keine ausgewaehlt. */
  selectedManagingCompanyId: number | null;
  /** Die Company fuer die der Onboarding-State gilt (i.d.R. = selectedManagingCompanyId). */
  targetManagingCompanyId: number | null;
  /** Anzahl aller Managing Companies des Users. */
  managingCompaniesCount: number;
  /** Davon mit Admin-Zugriff. */
  adminManagingCompaniesCount: number;
};
  summary: {
  /** Fortschritt in Prozent (0–100) ueber alle Schritte. */
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  /** Anzahl blocking+required Schritte, die noch nicht abgeschlossen sind. Ist 0 sobald alle Pflichtschritte erledigt sind. */
  blockingOpenSteps: number;
  /** HAUPT-SCHALTER: true = Onboarding-Overlay/Banner anzeigen, false = Onboarding abgeschlossen, App normal nutzbar. Leite den User NIEMALS in einen Hard-Block wenn showOnboarding=false, egal was andere Felder sagen. Das Frontend sollte dieses  */
  showOnboarding: boolean;
  /** Step-ID des naechsten empfohlenen Schritts. Null wenn alles erledigt. Nutze diesen Wert um den User direkt zum richtigen Tab/Screen zu navigieren. */
  recommendedNextStepId: string | null;
};
  /** Alle Onboarding-Schritte in der empfohlenen Reihenfolge. Das Frontend kann diese Liste direkt als Stepper/Sidebar rendern. */
  steps: Array<{
  /** Eindeutige Step-ID. Moegliche Werte: company_create | company_profile | tax_setup | bank_setup | invoice_setup */
  id: string;
  /** Kurzname des Schritts fuer Ueberschriften / Stepper. */
  title: string;
  /** Laengere Erklaerung des Schritts fuer Hilfetexte / Tooltips. */
  description: string;
  /** Zusaetzlicher Kontext-Hinweis (z.B. rechtlicher Hinweis). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = Pflichtschritt – darf nicht dauerhaft uebersprungen werden. */
  required: boolean;
  /** true = dieser Schritt blockiert den App-Zugang solange er offen ist. blocking=true + required=true + nicht abgeschlossen => showOnboarding=true. */
  blocking: boolean;
  /** true = User darf diesen Schritt aktiv ueberspringen (POST /skip-step). */
  skippable: boolean;
  /** true = User hat diesen Schritt aktiv uebersprungen. */
  skipped: boolean;
  /** true = Schritt wird auch dann angezeigt, wenn er optional ist. */
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  /** true = dieser Schritt wuerde normalerweise einen manuellen Abschluss-Klick benoetigen. Relevant fuer die UI: zeige dann einen 'Abschliessen'-Button, ABER nur wenn readyToComplete=true und acknowledged=false. Sobald acknowledged=true ist der */
  requiresAcknowledgement: boolean;
  /** true = alle Pflichtdaten sind vorhanden, der Schritt kann abgeschlossen werden. Der Server auto-completed solche Schritte beim naechsten GET /state automatisch. Das Frontend muss POST /complete-step NUR noch aufrufen, falls readyToComplete= */
  readyToComplete: boolean;
  /** true = Schritt ist serverseitig als abgeschlossen persistiert. Wenn acknowledged=true und status=completed/auto_completed/skipped: Schritt gilt als fertig, kein weiterer Aufruf noetig. */
  acknowledged: boolean;
  /** true = Schritt loest sich automatisch auf (z.B. company_create nach erster Firma-Erstellung). Kein Acknowledgement und kein Button noetig. */
  autoResolved: boolean;
  /** Detaillierte Checkliste mit einzelnen Datenpunkten. Null wenn kein Checklisten-Fortschritt verfuegbar. required=true Eintraege sind Pflicht, optional=false Eintraege sind nice-to-have. */
  checklist: Array<{
  /** Interner Bezeichner des Checklistenpunkts. */
  key: string;
  /** Menschenlesbarer Name des Checklistenpunkts, direkt im UI verwendbar. */
  label: string;
  /** Optionaler Hilfstext (Tooltip / Erklaerung). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = dieser Punkt ist erledigt. */
  done: boolean;
  /** true = Pflichtfeld, muss done=true sein damit der Schritt abschliessbar ist. */
  required: boolean;
}> | null;
  /** Aggregierter Fortschritt (deprecated – bitte checklist verwenden). Null wenn kein Fortschritt verfuegbar. */
  progress: {
  /** Anzahl abgeschlossener Checklistenpunkte. */
  done: number;
  /** Gesamtanzahl Checklistenpunkte. */
  total: number;
  /** Labels der noch fehlenden Pflichtfelder – direkt im UI verwendbar. */
  missing: Array<string>;
} | null;
  /** Liste der API-Operationen, die das Frontend fuer diesen Schritt benoetigt. Jeder Eintrag enthaelt key, method und path – damit weiss das Frontend genau, welchen Aufruf es machen muss. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
  description?: string | null;
}>;
}>;
  /** Zusammengefuehrte Map aller Operations aus allen Steps (Dedupliziert). Praktisch um global nachzuschlagen welcher API-Call zu welchem key gehoert. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
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
  /** ISO-Timestamp wann dieser State generiert wurde. */
  generatedAt: string;
  userId: number;
  context: {
  /** Aktuell ausgewaehlte Managing Company des Users. Null wenn noch keine ausgewaehlt. */
  selectedManagingCompanyId: number | null;
  /** Die Company fuer die der Onboarding-State gilt (i.d.R. = selectedManagingCompanyId). */
  targetManagingCompanyId: number | null;
  /** Anzahl aller Managing Companies des Users. */
  managingCompaniesCount: number;
  /** Davon mit Admin-Zugriff. */
  adminManagingCompaniesCount: number;
};
  summary: {
  /** Fortschritt in Prozent (0–100) ueber alle Schritte. */
  percent: number;
  totalSteps: number;
  completedSteps: number;
  totalRequiredSteps: number;
  completedRequiredSteps: number;
  /** Anzahl blocking+required Schritte, die noch nicht abgeschlossen sind. Ist 0 sobald alle Pflichtschritte erledigt sind. */
  blockingOpenSteps: number;
  /** HAUPT-SCHALTER: true = Onboarding-Overlay/Banner anzeigen, false = Onboarding abgeschlossen, App normal nutzbar. Leite den User NIEMALS in einen Hard-Block wenn showOnboarding=false, egal was andere Felder sagen. Das Frontend sollte dieses  */
  showOnboarding: boolean;
  /** Step-ID des naechsten empfohlenen Schritts. Null wenn alles erledigt. Nutze diesen Wert um den User direkt zum richtigen Tab/Screen zu navigieren. */
  recommendedNextStepId: string | null;
};
  /** Alle Onboarding-Schritte in der empfohlenen Reihenfolge. Das Frontend kann diese Liste direkt als Stepper/Sidebar rendern. */
  steps: Array<{
  /** Eindeutige Step-ID. Moegliche Werte: company_create | company_profile | tax_setup | bank_setup | invoice_setup */
  id: string;
  /** Kurzname des Schritts fuer Ueberschriften / Stepper. */
  title: string;
  /** Laengere Erklaerung des Schritts fuer Hilfetexte / Tooltips. */
  description: string;
  /** Zusaetzlicher Kontext-Hinweis (z.B. rechtlicher Hinweis). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = Pflichtschritt – darf nicht dauerhaft uebersprungen werden. */
  required: boolean;
  /** true = dieser Schritt blockiert den App-Zugang solange er offen ist. blocking=true + required=true + nicht abgeschlossen => showOnboarding=true. */
  blocking: boolean;
  /** true = User darf diesen Schritt aktiv ueberspringen (POST /skip-step). */
  skippable: boolean;
  /** true = User hat diesen Schritt aktiv uebersprungen. */
  skipped: boolean;
  /** true = Schritt wird auch dann angezeigt, wenn er optional ist. */
  showByDefault: boolean;
  status: "pending" | "completed" | "auto_completed" | "locked" | "skipped";
  /** true = dieser Schritt wuerde normalerweise einen manuellen Abschluss-Klick benoetigen. Relevant fuer die UI: zeige dann einen 'Abschliessen'-Button, ABER nur wenn readyToComplete=true und acknowledged=false. Sobald acknowledged=true ist der */
  requiresAcknowledgement: boolean;
  /** true = alle Pflichtdaten sind vorhanden, der Schritt kann abgeschlossen werden. Der Server auto-completed solche Schritte beim naechsten GET /state automatisch. Das Frontend muss POST /complete-step NUR noch aufrufen, falls readyToComplete= */
  readyToComplete: boolean;
  /** true = Schritt ist serverseitig als abgeschlossen persistiert. Wenn acknowledged=true und status=completed/auto_completed/skipped: Schritt gilt als fertig, kein weiterer Aufruf noetig. */
  acknowledged: boolean;
  /** true = Schritt loest sich automatisch auf (z.B. company_create nach erster Firma-Erstellung). Kein Acknowledgement und kein Button noetig. */
  autoResolved: boolean;
  /** Detaillierte Checkliste mit einzelnen Datenpunkten. Null wenn kein Checklisten-Fortschritt verfuegbar. required=true Eintraege sind Pflicht, optional=false Eintraege sind nice-to-have. */
  checklist: Array<{
  /** Interner Bezeichner des Checklistenpunkts. */
  key: string;
  /** Menschenlesbarer Name des Checklistenpunkts, direkt im UI verwendbar. */
  label: string;
  /** Optionaler Hilfstext (Tooltip / Erklaerung). Null wenn nicht vorhanden. */
  hint: string | null;
  /** true = dieser Punkt ist erledigt. */
  done: boolean;
  /** true = Pflichtfeld, muss done=true sein damit der Schritt abschliessbar ist. */
  required: boolean;
}> | null;
  /** Aggregierter Fortschritt (deprecated – bitte checklist verwenden). Null wenn kein Fortschritt verfuegbar. */
  progress: {
  /** Anzahl abgeschlossener Checklistenpunkte. */
  done: number;
  /** Gesamtanzahl Checklistenpunkte. */
  total: number;
  /** Labels der noch fehlenden Pflichtfelder – direkt im UI verwendbar. */
  missing: Array<string>;
} | null;
  /** Liste der API-Operationen, die das Frontend fuer diesen Schritt benoetigt. Jeder Eintrag enthaelt key, method und path – damit weiss das Frontend genau, welchen Aufruf es machen muss. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
  description?: string | null;
}>;
}>;
  /** Zusammengefuehrte Map aller Operations aus allen Steps (Dedupliziert). Praktisch um global nachzuschlagen welcher API-Call zu welchem key gehoert. */
  operations: Array<{
  /** Eindeutiger Bezeichner der Operation (z.B. 'companyUpdate', 'logoUpload'). Das Frontend nutzt diesen Key um zu wissen, welchen API-Aufruf es fuer diesen Schritt braucht. */
  key: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** API-Pfad der Operation, relativ zur API-Base-URL. */
  path: string;
  /** Menschenlesbare Beschreibung was diese Operation tut. */
  description?: string | null;
}>;
};
};
export type EnterpriseOnboardingSkipStepResponse = import("../types").ApiEnvelope<EnterpriseOnboardingSkipStepResponseData>;

export const apiRoutes_enterprise = {
  // Contract source: explicit
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
  // Contract source: explicit
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
  // Contract source: explicit
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