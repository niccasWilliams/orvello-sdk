# Changelog

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
