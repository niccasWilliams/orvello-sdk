# Changelog

## 0.2.1 - 2026-09-05

- Erreichbarkeit wird ueber die **Vertrags-Route** `GET /app-info/health` geprueft
  (exportiert als `HEALTH_PATH`), nicht mehr ueber `/health`. Den nackten Pfad gibt
  es bei node-bill, aber in keinem Vertrag — eine andere orvello-Instanz muss ihn
  nicht haben, und ein 404 dort saehe aus wie ein toter Dienst.
  `capabilities().capabilities.healthCheck` weist dieselbe Operation aus; beide
  zeigen jetzt nachweislich auf denselben Weg.

## 0.2.0 - 2026-09-05

Die Fassung, mit der ein Verbindungs-Verwalter (node-amp) diesen Dienst wirklich
verwalten kann. 0.1.0 hatte die Verwaltungsrouten getippt, aber nicht benutzbar.

### Behoben: die Verwaltungsrouten waren nicht authentisierbar

Alle neun Routen unter `/oauth/clients/external/*` verlangen den Header
`x-api-key`. Der Client konnte ausschliesslich `Authorization: Bearer` senden —
`client.oauthClients.*` war damit vollstaendig getippt und aufrufbar, aber jeder
Aufruf haette `403 Forbidden: Invalid API key` geerntet. Die Meldung sieht nach
einem falschen Schluessel aus, nicht nach einem fehlenden; sie haette die Suche
an die falsche Stelle geschickt.

- **Die Route bestimmt jetzt das Credential.** Der generierte Vertrag traegt
  `auth.type` an jeder Route; der Client liest das und waehlt die Bahn — Bearer
  fuer die Geschaeftsrouten, `x-api-key` fuer die Verwaltungsrouten, nichts fuer
  oeffentliche. Das gilt auch fuer von Hand gebaute Pfade ueber `request()`.
- **Neu: `managementApiKey`** (Env `ORVELLO_MANAGEMENT_API_KEY`) — bewusst ein
  eigener Wert und keine zweite Schreibweise des OAuth-Credentials. Fehlt er, wirft
  der Aufruf **bevor** etwas ans Netz geht, mit der Ursache im Klartext. Eine
  gesetzte, aber leere Variable zaehlt als nicht hinterlegt.
- **Neu: `headers`** — zusaetzliche Kopfzeilen je Aufruf, auch als Funktion.

### Neu: einen Weg pruefen, ohne ihn zu gehen

- **`preflight(operationId, …)`** geht denselben Weg wie ein echter Aufruf —
  dieselbe Basis-URL, dieselbe Credential-Bahn, derselbe Vertrag — und hoert vor
  dem Schreiben auf. Sieben benannte Schritte, jeder mit seinem Grund im Klartext;
  ein uebersprungener Schritt wird als uebersprungen gemeldet, nie als bestanden.
  Was ein gruener Bericht beweist, ist die **Berechtigung**, nicht das **Ergebnis**.
- **`capabilities()`** beantwortet aus dem mitgelieferten Vertrag, was dieser
  Dienst kann — ohne Netz und ohne Credential, also auch bei stehender Stoerung.
  Jede Angabe nennt die Operationen, auf denen sie beruht. Dass es **keinen**
  serverseitigen Probelauf fuer die Client-Verwaltung gibt, steht mit Grund darin,
  statt still auf `false`.

### Neu: Zustand, ehrlich getrennt

- **`checkHealth()`** haelt Erreichbarkeit und Berechtigung auseinander.
  `authenticated: null` heisst "nicht gefragt", nie "in Ordnung".
- **Sicherungsautomat** (`isAvailable()`, `circuitState()`, `resetCircuit()`,
  Konfiguration `circuitBreaker`). Er oeffnet bei Transportfehlern und
  **ausdruecklich nicht** bei 401/403: der Dienst hat geantwortet, er hat nur nein
  gesagt. Ein Automat, der darauf aufmacht, verwandelt ein falsches Credential in
  einen scheinbaren Ausfall.

### Neu: jede Operation des Vertrags aufrufbar

- **`call(operationId, { params, query, body })`** nimmt Methode, Pfad und
  Credential-Bahn aus dem Vertrag. Ein unbekannter `operationId` und ein fehlender
  Pfad-Parameter werfen sofort, statt `/oauth/clients/external/:idOrClientId` ans
  Netz zu geben.
- **`listOperations()`, `describeOperation()`, `resolveOperation()`,
  `buildPath()`** sind oeffentlich — ein Verwalter kann den Vertrag befragen,
  statt ihn anzunehmen.

### Intern

- `src/route-index.generated.ts` (erzeugt von `scripts/build-route-index.mjs`)
  traegt je Operation nur Methode, Pfad, Bahn und Validierungs-Angabe. Das haelt
  rund 160 KB Vertrags-Prosa aus dem Laufzeit-Bundle: `dist/index.js` faellt von
  262 KB auf 98 KB. `test/route-index.test.ts` rechnet die Tabelle bei jedem Lauf
  aus `apiRoutes` nach — eine veraltete oder von Hand geaenderte Zeile ueberlebt
  keinen Testlauf.
- Tests: 61 statt 32.

## 0.1.0 - 2026-09-05

- Erste Veröffentlichung als **`@orvello/sdk`** (public) — das typisierte SDK für die
  orvello-Buchhaltungs- und Rechnungsplattform.
- **Kein eingebackener Default-Endpoint:** `OrvelloClient` und `diagnoseOrvello` verlangen
  eine explizite `baseUrl` (via Config oder `ORVELLO_URL`). Es gibt keine fixe
  Ziel-URL im Paket; jede Instanz zeigt auf das eigene orvello-Deployment.
- Public-API konsequent auf orvello umbenannt: `createOrvelloClient`, `OrvelloClient`,
  `OrvelloApiError`, `OrvelloClientConfig`, `OrvelloDiagnosis`, `diagnoseOrvello`
  (vormals `createBillClient`/`BillClient`/…). Die Autorisierung folgt `ORVELLO_*`-Umgebungsvariablen.
- Vollständige Contract-Abdeckung: Invoices (create, search, pending, overdue,
  status-policy, credit-note, email), Customer Companies, Managing Companies context,
  Dunning (suggestions, preview, issue, settings), Bookkeeping (revenues, expenses mit
  Beleg-Upload, payment accounts, manual payments, one-shot settlement), Users und
  OAuth2-Client-Management.
- `ApiEnvelope`-Auflösung, strukturierte `OrvelloApiError`-Fehler, exponentielles Backoff
  bei 5xx/429/Netzwerkfehlern.
- Native PDF-`Blob`-Handhabung, `Idempotency-Key`-Header über finanzielle Mutationen.
- Ergonomische Buchhaltungs-Helfer: `getDefaultBankAccount` (mit TTL-Cache),
  `buildBase64Receipt`, `isKleinunternehmer`, `calculateVat`, `formatAmount`.
- Re-Exports aller generierten Route-Contracts unter `@orvello/sdk/contract`.
- Eingebaute `diagnoseOrvello`-Laufzeitprüfung der Contract-Fingerprints gegen
  `GET /health/contract`.

> Hinweis: Der von `@orvello/sdk/contract` wieder-exportierte Plattform-Vertrag trägt — da er
> aus dem erzeugenden Buchhaltungs-Backend stammt — weiterhin dessen interne DTO-Präfixe
> (z. B. `NodeBillUser`). Das ist der unveränderte Dienstvertrag des Backends, kein Fehler
> des SDK. Ein eventuelles Rebranding dieser generierten Namen würde am Backend-Schema
> erfolgen, nicht hier.
