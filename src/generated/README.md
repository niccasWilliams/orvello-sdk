# Generated API & Types (Backend → Frontend Sync)

Diese Dateien sind **auto-generiert** und dafür gedacht, 1:1 ins Frontend kopiert/gesynct zu werden, damit:

- das Frontend (und eine KI im Frontend) **alle Endpunkte kennt**
- Requests/Responses **type-safe** angebunden werden können
- Änderungen am Backend **sofort** als TypeScript-Fehler im Frontend sichtbar werden

**Wichtig:** Nichts in `generated/` manuell editieren. Änderungen immer im Backend-Code machen und dann neu generieren.

---

## Inhalte & Struktur

### `frontend-types.ts`
**DB-/Domain-Typen**, generiert aus dem Schema des backends mit wichitgen kommentaren weitergegeben.

### `openapi.json`
OpenAPI 3.1 Spezifikation mit `paths`, `security` usw.

- Wird aus echten Route-Annotationen (`contract()`/`validate()`) **und** einem Auto-Extractor erzeugt.
- Enthält dadurch **alle** Endpunkte (auch wenn noch nicht jeder Endpoint “voll typisiert” ist).

Quelle/Generator: `scripts/generate-api-contract.ts`

### `api/` (Frontend Contract SDK)
Dieser Ordner enthält die TypeScript-Seite des Contracts.

- `api/index.ts`: **ein** zentraler Importpunkt (re-export aller Gruppen + `apiRoutes` Map).
- `api/catalog.ts`: “Katalog”/Übersicht für Menschen und KI:
  - welche Mount-Prefixe **Base** (`src/routes.ts`) vs **Features** (`src/individual-routes.ts`) sind
  - welche Route-Gruppen-Module es gibt und wo sie liegen
- `api/types.ts`:
  - `ApiEnvelope<T>`: entspricht dem Backend-Envelope aus `responseHandler(...)`
  - `ContractNotReady<"...">`: sehr deutlicher Marker, dass diese Route **noch nicht** zuverlässig typisiert ist
- `api/base/*`: Route-Gruppen, die aus **Base Routes** (`src/routes.ts`) stammen
- `api/features/*`: Route-Gruppen, die aus **Feature Routes** (`src/individual-routes.ts`) stammen

---

## Source of Truth (wichtig für “Enterprise”)

### Ziel: keine Doppelpflege
Die Wahrheit liegt in:

- `*.route.ts` (Express Routing + Auth)
- `*.dto.ts` (Zod Schemas für params/query/body)

Wenn eine Route “voll typisiert” sein soll:

1. `validate({ params/query/body })` in der Route benutzen (Zod Schema aus DTO)
2. `contract({ operationId, responses, auth? })` setzen
3. Für Responses bevorzugt **TypeRefs** verwenden statt riesige Zod Response Schemas nachzubauen:
   - `typeRef("FullDocument")`, `typeRef("Invoice")`, ...
   - die Typnamen kommen aus `generated/frontend-types.ts`

---

## Wie der Contract vom Frontend/KI genutzt werden soll

### Einstiegspunkt
Im Frontend importieren:

- `generated/frontend-types.ts`
- `generated/api/index.ts` (oder `generated/api` als Modul)

### Endpunkte finden
- **Alle Routen**: `apiRoutes` Map in `generated/api/index.ts`
  - Key = `operationId`
  - Value enthält `method`, `path`, `auth` und die Typen (`params/query/body/response`)
- **Wo liegt welche Gruppe?**: `generated/api/catalog.ts`

### Auth/Permissions/Transport
OpenAPI/Contract enthält pro Route Security-Metadaten:

- `security` Schemes (z.B. `frontendBearer`, `xApiKey`)
- Vendor Extensions wie `x-transport`, `x-permissions`, `x-auth`, `x-scopes`

### “Nicht raten” Regel
Wenn ein Typ in `generated/api/...` als `ContractNotReady<"...">` markiert ist:

- **Bitte diesen Typ NICHT verwenden.**
- Das bedeutet: die Route wurde zwar gefunden (Existenz/Pfad/Methode), aber:
  - Params/Query/Body/Response sind (noch) nicht korrekt typisiert.
  - Lösung: Backend Route mit DTO + `validate()` + `contract()` nachziehen.

---


## Change Detection / Automatisierung (für KI)

Wenn sich Backend-APIs ändern, erkennt man das zuverlässig über:

1. Diff von `generated/openapi.json` (neue/entfernte/umbenannte Paths/OperationIds)
2. Diff von `generated/api/index.ts` + `generated/api/base/*` + `generated/api/features/*`
   - Route Keys (`operationId`) ändern sich → TypeScript Compile Errors im Frontend
3. `ContractNotReady` ist ein Signal: “Route existiert, aber Inputs/Outputs fehlen noch”

Empfehlung: Beim Sync ins Frontend immer den kompletten `generated/` Ordner kopieren.

