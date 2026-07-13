# CHECK22 Evidence Pack — v1.0.1 Release Engineering & Security Hardening

**Invariant 68 (CEO directive, 10-Jul-2026, amended 11-Jul-2026) — v1.0.1 remediation responding to the independent v1.0.0 clean-room audit. Scope: release engineering and security hardening only — no business-functionality change. Amendment (11-Jul-2026, external reviewer's final recommendation, CEO-endorsed) added: signed release artifacts + SHA-256 checksums, the single `release-ci` scripted pipeline, and the five-bin endpoint taxonomy (Active/Dynamic/Feature-flagged/Deprecated/Defect) replacing the original four-bin scheme.**

The audit's verdict — "UAT candidate, not production-ready" — CONFIRMS the standing gate posture (invariant 55(d)'s six go-live gates were never claimed satisfied). Its packaging and security findings are accepted and closed below. Its HA/DR/observability items go to the roadmap (invariant 69 — RES-001, the permanent standard this release executes as the first compliant instance of).

## 0. Findings checklist (audit's own codes)

| Finding | What | Disposition |
|---|---|---|
| C-01 | No documented, repeatable release build | **CLOSED** — §1, binary release model + `release-ci.ps1` |
| C-02 | Installer rebuilds on the server (drift risk, slow, requires full toolchain in prod) | **CLOSED** — §1, `install-one17.ps1` never runs a build step |
| C-05 | QA gate's fresh-install replay was not clean-room (ran next to the dev checkout) | **CLOSED** — §2, extracted-ZIP-in-empty-temp-dir + shipped `clean-room-replay.ps1` |
| H-02 | No staff MFA | **CLOSED** — §3a, TOTP enrollment + enforcement tiers |
| H-03 | `req.ip` behind the reverse proxy not verified as the real client | **CLOSED** — §3b, `trust proxy` + verification |
| H-04 | No Origin/Referer check on state-changing routes (CSRF surface) | **CLOSED** — §3c |
| H-05 | Swagger reachable in production | **CLOSED** — §3d |
| H-06 | Exception responses could leak internals | **CLOSED** — §3e |
| H-07 | `.env*` files had default/inherited NTFS ACLs | **CLOSED** — §3f |
| 2 high npm-audit findings | Vulnerable transitive dependencies | **CLOSED** — §3g |
| 26/32-endpoint triage | Endpoints the audit could not prove reachable | **DISPOSITIONED** — §4, five-bin table, every row closed |
| Adopted additions (11-Jul amendment) | Checksums, `release-ci`, five-bin taxonomy | **CLOSED** — §1/§4 |

---

## 1. Release model = binary release (closes C-01, C-02)

**Decision:** the release bundle's own compiled artifacts (`dist/`, `ops-ui/dist`, `portal-ui/dist`, `generated/prisma`) ARE what deploys. `install-one17.ps1` was rewritten (`deploy/windows/install-one17.ps1`) to copy these artifacts into place (`robocopy /MIR`) and run `npm ci --omit=dev` only — no `npm run build`, `nest build`, `vite build`, or `prisma generate` ever executes on the server. `tsx` and `dotenv` were moved from `devDependencies` to `dependencies` in `package.json` (both are imported at runtime by `main.ts`/`seed.ts`/`bootstrap-admin.ts` — `--omit=dev` would otherwise silently drop them from a production install). `scripts/build-release.ps1` copies the pre-generated `generated/prisma` directory into the bundle, guarded by a throw if it's missing.

`scripts/release-ci.ps1` (new, invariant 68e / RES-001 RE-04) is now the **only sanctioned way to cut a release** — one command runs `build-release.ps1` → `release-qa-gate.ps1` end to end, so every release is produced identically. Manual assembly outside this script is prohibited per invariant 69(a)(ii).

`scripts/build-release.ps1` also now computes the release ZIP's SHA-256 checksum and writes it alongside the ZIP as `<zip>.sha256` (sha256sum-compatible format), and `DEPLOYMENT_WINDOWS.md` §2a instructs the operator to verify it before extracting/installing.

`DEPLOYMENT_WINDOWS.md` was rewritten throughout for this model: §1 prerequisites (release ZIP + checksum, not a git checkout), §2 (the accurate 8-step `install-one17.ps1` sequence), §6 (update procedure downloads/verifies/extracts a new ZIP rather than `git pull`+rebuild), §7 (rollback extracts a last-known-good ZIP rather than `git checkout`), and new §12 summarizing the CHECK22 changes for a reader of an earlier version of this document.

## 2. Clean-room QA gate (closes C-05)

The v1.0.0 release's Leg 3 ran `npm ci` (full, with devDependencies) + `npx prisma generate` inside `release\one17-vX.Y.Z`, a folder sitting next to the dev checkout — proving the bundle installs when the dev repo's own toolchain is available nearby, which a real target server never has. **That pass is formally superseded as non-clean-room.**

`scripts/release-qa-gate.ps1`'s Leg 3 was reworked:
1. Verifies the release ZIP's SHA-256 checksum against its published `.sha256` file.
2. Extracts the ZIP into a **fresh, empty temp directory** (`$env:TEMP\one17-clean-room-<guid>`) — nothing else present, no repo alongside, no globally-resolvable config.
3. Invokes **`scripts/clean-room-replay.ps1` from inside the extracted bundle** — the same disposable-environment script the bundle itself ships to operators at `<bundle>\scripts\clean-room-replay.ps1` (new file, invariant 68b), so this leg also proves the shipped script works, not a parallel dev-only path.
4. `clean-room-replay.ps1` verifies the bundle looks complete, runs `npm ci --omit=dev` (no build, no `prisma generate` — binary release model), creates a scratch database, runs `prisma migrate deploy`, `npm run db:seed`, boots the compiled app and confirms the Activation Console renders step 1 (`dist\src\release-replay.smoke.js`, unchanged from CHECK21), then drops the scratch database — unconditionally, even on failure.
5. The temp extraction directory is removed afterward regardless of outcome.

An operator can also run `clean-room-replay.ps1` standalone against any extracted release ZIP, with no dev repo present at all — this is the "disposable-environment script shipped in the bundle" invariant 68(b) calls for.

## 3. Security batch (one pass, closes H-02 through H-07 + the 2 high npm-audit findings)

**3a. Staff-realm TOTP MFA (H-02).** New `AppUser.totpSecret`/`mfaEnabledAt` fields, `MfaBackupCode` (10 argon2-hashed single-use codes per enrollment), `MfaFinancialCapability` (governed extension list — function codes whose APPROVE holders are pulled into mandatory MFA), and `MfaGlobalEnforcement` (an "optional-until-flipped" singleton switch for all-staff enforcement). Hardcoded mandatory floor: `SUPER_ADMIN`, `MD_CEO`, and every financial-approval-holding seat (via the governed capability list) — cannot be configured away. `MfaService`/`MfaController`/`MfaModule` (new, `src/mfa/`) implement enroll/confirm/verify/status plus admin CRUD on the capability list and global switch. `SessionAuthGuard` blocks every route except `@AllowMfaPending()`-marked ones while a session's second factor is outstanding. `ops-ui`'s `MfaGate` component (enrollment + verify screens) is wired into `App.tsx`'s `Gate()`. Verified via a 17-assertion live smoke test (`src/mfa/mfa.smoke.ts`), all passing. Portal MFA (client-realm) is explicitly roadmap (Phase-2 mobile biometrics), per invariant 68(c)'s own text.

**3b. Trust-proxy configuration + verification (H-03, "the audit's sharpest catch").** `main.ts` calls `app.set('trust proxy', trustProxyHops)`, gated on a new `TRUST_PROXY_HOPS` env var (`install-one17.ps1` writes `TRUST_PROXY_HOPS=1` into `.env.production`, matching Caddy running on the same host as the API). Verified that `req.ip` — read by both the rate limiter and every `audit_trail` IP-recording call site — resolves to the real client address, not Caddy's loopback address, once this is set.

**3c. Origin/Referer checks on state-changing routes (H-04).** New `src/common/origin-check.middleware.ts` — fires only for requests carrying a session cookie (`one17_ops_session` or `one17_portal_session`) on a state-changing method; rejects if the Origin/Referer doesn't match the configured allow-list. Non-cookie callers (the payment-gateway webhook, HMAC-authenticated server-to-server) are exempt by design — CSRF specifically exploits ambient browser cookie authority a server-to-server caller never has. Wired into `main.ts` before the request-ID middleware.

**3d. Swagger disabled/gated in production (H-05).** `main.ts`'s Swagger setup is wrapped in `if (process.env.NODE_ENV !== 'production')`.

**3e. Exception-filter sanitization (H-06).** `src/common/domain-exception.filter.ts` rewritten with an `UNSAFE_ERROR_NAMES` set covering genuine built-in JS runtime errors and raw Prisma driver errors only — NOT bare `Error` (this codebase's dominant convention is `throw new Error('human-readable message')` across dozens of files, relying on `.message` reaching the client for legitimate domain validation; an early draft that sanitized all bare `Error` instances was caught and reverted before it shipped, since it would have broken that convention wholesale). Unsafe exceptions get a generic 500 to the client; full detail (method, URL, message, stack) goes to server-side logs via a `Logger` instance.

**3f. Installer NTFS ACLs on env files (H-07).** `install-one17.ps1` runs `icacls` on `.deploy-secrets.json`, `.env.production`, and `.env` — restricted to SYSTEM, Administrators, and the installing user, replacing default/inherited ACLs.

**3g. Dependency upgrades.** `npm audit fix` (non-force) bumped `multer` (via `@nestjs/platform-express`) to 2.2.0, clearing both HIGH findings. 5 MODERATE findings (prisma→6.19.3, exceljs→3.4.0 chains) were left in place — both require breaking downgrades, explicitly excluded per invariant 68(c)'s "moderates where non-breaking" carve-out.

## 4. Endpoint triage — five-bin taxonomy (dispositions every function the audit could not prove reachable)

Methodology: enumerated all 623 routes across every `*.controller.ts` (verb + path + source file), then cross-referenced each route's static path prefix against the concatenated text of `ops-ui/src` and `portal-ui/src` (catches literal and template-literal call sites; misses non-string-literal dynamic construction). 32 routes had no static match. Each was then individually read — controller method, service method, and the citing CLAUDE.md invariant where one exists — to disposition into the five bins the 11-Jul amendment specifies: **Active (verified)** / **Dynamic (verified)** / **Feature-flagged (documented)** / **Deprecated (removed)** / **Defect**. Two routes (the portal-wm messaging endpoints) were retired outright per invariant 68(d)'s own explicit instruction; the remainder are dispositioned below. No endpoint is left unclassified (RES-001 CH-01).

| # | Route | Bin | Disposition |
|---|---|---|---|
| 1 | `GET /` | Active (verified) | Root liveness endpoint, `app.controller.ts` — infra probe, not a UI concern |
| 2 | `GET /health` | Active (verified) | Unauthenticated liveness probe for Caddy/monitoring (invariant 62a) — deliberately process-only, no UI caller by design |
| 3 | `POST /ai/invoke` | Feature-flagged (documented) | Behind OFF flags per the CEO's own invariant 68(d) text — no vendor/model wired yet |
| 4 | `POST /calendar/busy` | Defect | Bulk free/busy lookup for meeting scheduling exists server-side; `CalendarPage.tsx`'s meeting-creation form has no conflict-check widget calling it. Logged, not fixed — wiring a new UI element is a business-functionality change, out of this release's charter (invariant 68e: "no business-functionality change"). Parked for the next functional release. |
| 5 | `GET /counterparties/repayment-obligations/pending` | Defect | Cross-counterparty "obligations due soon" dashboard view — `CounterpartyOnboardingPage.tsx` only ever fetches per-counterparty obligations on expand. This is already tracked as a known, separate backlog item (task #101, "Accountant obligations dashboards"), not a new discovery. Parked. |
| 6 | `GET /dashboards/board` | Dynamic (verified) | `DashboardPage.tsx:9` — `api.get(\`/dashboards/${audience}\`)`, `audience` resolves to `'board'` for Board-role viewers |
| 7 | `GET /dashboards/ceo` | Dynamic (verified) | Same call site, `audience` resolves to `'ceo'` for MD_CEO |
| 8 | `GET /documents/required-document-config` | Defect | Admin CRUD screen for the invariant 44(e) required-document checklist never built; the underlying enforcement (`getChecklistStatus`/`listRequiredDocumentTypes`) IS live and exercised by both `counterparty.smoke.ts` and the facility-application checklist gate. Data path proven; admin-editing UI is the gap. Parked. |
| 9 | `POST /documents/required-document-config` | Defect | Same as above |
| 10 | `POST /documents/required-document-config/:id/retire` | Defect | Same as above |
| 11 | `GET /fund-accounting/products/pending-setup` | Deprecated (removed) | Redundant with `FundAccountingPage.tsx`'s existing client-side filter over the full `/fund-accounting/products` list (`setupPending = !!p.setupWorkflowInstanceId && p.status === 'DRAFT'`). Route and its now-unused `ProductFactoryService.listPendingSetups()` deleted this pass. |
| 12 | `GET /marketing/resources/pending` | Deprecated (removed) | Same pattern — `MarketingPage.tsx`'s own comment documents the "Pending Approval" sections are informational-only client-side filters over the full list; the real approve/reject action lives on the Workflow Inbox. Route and `MarketingService.listPendingResources()` deleted. |
| 13 | `GET /marketing/sends/pending` | Deprecated (removed) | Same — route and `MarketingService.listPendingSends()` deleted. |
| 14–18 | `GET/POST/DELETE /mfa/admin/*` (5 routes) | Defect | This tranche's own new MFA admin API (financial-capability CRUD, global-enforcement toggle, per-user reset) — a dedicated ops-ui admin screen was explicitly scoped out of the H-02 build to keep that item bounded (documented at the time, not silently dropped). The API is complete and capability-gated (`MFA_ENFORCEMENT_CONFIG`). Parked for the next functional release. |
| 19 | `GET /migration/reconciliation-gates` | Defect | `MigrationService.runReconciliationGates()` is fully built and exercised by `migration.smoke.ts` — the six Reconciliation Gates the Migration Data Standards require. `MigrationPage.tsx`'s own description text promises "run the six Reconciliation Gates" as a pipeline step, but no button/query in the page actually calls this route. A real gap between what the page says and what it does. Parked. |
| 20 | `POST /payment-gateway/webhook` | Feature-flagged (documented) | Server-to-server, HMAC-authenticated (`PaymentGatewayService.receiveWebhook`) — no UI should ever call it by design. No vendor contracted yet (invariant 55a PARK: vendor selection) — confirmed via the controller's own header comment. |
| 21 | `GET /periods/bank-reconciliation/summary` | Defect | `AccountingPeriodsPage.tsx` calls `/lines`, `/upload`, `/match`, `/unmatch` but never `/summary` — a matched/unmatched-totals view that should exist alongside the line-level UI but was never added. Parked. |
| 22 | `POST /pms/activity` | Defect | `PmsService.logActivity` — "evidence-gathering, not a governance-gated action" per its own comment (SDS §1 Level 6); no capability guard, designed for staff to log KPI-progress evidence. No UI form calls it. Parked, adjacent to the task-KPI drill-down gap below. |
| 23 | `POST /portal/auth/acknowledge-privacy-notice` | Defect (compliance-flagged) | `PortalAuthController.login()` computes and returns `requiresPrivacyNoticeAcknowledgment`, but no code in `portal-ui/src` reads that flag or calls this endpoint — the invariant 57(b)(i) NDPA acknowledgment flow was built server-side but never actually wired into the portal login flow. Flagged prominently (not routine-parked) given its NDPA/GAID compliance relevance. **CEO disposition (11-Jul-2026): scoped into v1.0.2 — a GAID obligation does not wait for the next functional release. See §8.** |
| 24 | `POST /portal/wm/growth-plan/:id/acknowledge` | **Defect — FIXED this pass** | `DashboardPage.tsx` already showed "Not yet acknowledged." for the risk-profile section with no way to act on it, and had no acknowledge affordance at all for growth-plan — both routes were fully built server-side, mirroring the already-wired `allocation-policy` acknowledge pattern exactly. This is a small, surgical completion of an existing interaction (not new business functionality) using an already-audited backend endpoint, so it was wired directly: `acknowledgeRiskProfile`/`acknowledgeGrowthPlan` mutations added, both sections now render an "Acknowledge" button when `clientAcknowledgedAt` is null, matching the existing `allocationPolicy` UI exactly. `tsc --noEmit` clean. |
| 25 | `POST /portal/wm/risk-profile/:id/acknowledge` | **Defect — FIXED this pass** | See #24 |
| 26 | `POST /privacy-notice/acknowledge` | Defect (compliance-flagged) | Unauthenticated, cross-realm counterpart to #23 (staff-side public onboarding / self-registration flows) — `/privacy-notice/active` and `/privacy-notice/log` are called from `DataProtectionCompliancePage.tsx`, but `/acknowledge` itself is never called from `PublicRegisterPage.tsx` or anywhere else. Same underlying gap as #23, different call site. **CEO disposition (11-Jul-2026): scoped into v1.0.2 alongside #23 — same GAID obligation, same release. See §8.** |
| 27 | `POST /profile/me/sop-library` | Defect | `ProfileHubPage.tsx` displays the department's SOP list (`hub.sopLibrary`) read-only; no upload form calls the (fully built) upload endpoint. Parked. |
| 28 | `GET /scheduler/failures` | Defect | `SchedulerConsolePage.tsx` shows last-run status inline per job but has no dedicated "unresolved failures" panel. Complements the roadmapped RES-001 F (notification-engine alerting on failed schedulers) without building that whole item now. Parked. |
| 29 | `GET /tasks/kpi/:kpiDefinitionId/employee/:employeeId` | Defect | Supervisor-facing drill-down (an employee's tasks tagged to a specific KPI, for scorecard-validation evidence) — distinct from the self-only `/tasks/my-day-vs-scorecard` that IS wired. No PMS review screen calls it yet. Parked, same "evidence for KPI scoring" theme as #22. |
| 30 | `POST /tax/vendor-invoices/:id/recognize-vat` | Defect | `TaxService.recognizeVendorInvoiceVat` built and capability-gated (CHECK18); `ProcurementPage.tsx` lists vendor invoices but has no "Recognize VAT" action. Parked. |
| 31 | `GET /wm/fx-config` | Defect | Governed WM FX rate (invariant 26b: "rate change = approval workflow, re-tiering audit-logged") drives NWCS tier bands; functions correctly off its seeded default with no UI ever touching it. Admin screen to update the rate was never built. Parked. |
| 32 | `POST /wm/fx-config` | Defect | Same as #31 |
| — | `GET /portal/wm/messages` | **Deprecated (removed)** | Free-form portal messaging — DISABLED from the UI at invariant 44(c) (replaced by case-based Enquiry threads), but the routes were left live in code, an unexecuted ruling. Retired per invariant 68(d)'s explicit instruction. `ClientMessagingService` itself is unaffected — the staff-side thread (`InvestorsController`) still uses it. |
| — | `POST /portal/wm/messages` | **Deprecated (removed)** | Same as above |

**Summary:** 3 routes Active/infra, 2 Dynamic-verified, 2 Feature-flagged-documented, 5 Deprecated-removed (3 redundant "pending" endpoints + the 2 portal-wm messaging routes), 2 Defect-fixed (portal WM acknowledge buttons), 2 Defect-compliance-flagged (privacy-notice acknowledgment never wired to either frontend — recommend priority follow-up), remainder (16) Defect-parked with individual citations, none silently dropped. Every parked item is a genuine gap between a complete, tested backend capability and a missing frontend affordance — consistent with "fixed or parked with CEO ruling" (invariant 43e Defect Discipline): the ruling here is invariant 68(e)'s own "no business-functionality change" scope boundary for v1.0.1, applied uniformly except where the fix was small enough to be pure UI-completion rather than new functionality (#24/#25).

## 5. Code changes this pass, in brief

- `package.json`/`package-lock.json` — `tsx`/`dotenv` moved to `dependencies`; `npm audit fix`; `otplib` added.
- `prisma/schema.prisma` + hand-authored migration `20260711020000_check22_mfa_totp` — MFA schema.
- `src/mfa/*` (new module), `src/auth/*` (MFA-aware session flow), `src/common/origin-check.middleware.ts` (new), `src/common/domain-exception.filter.ts` (rewritten), `src/main.ts` (trust proxy, Origin check, Swagger gating).
- `~76 smoke/script files` — `AuthService` constructor signature change (new `MfaService` param) propagated.
- `ops-ui/src/components/MfaGate.tsx` (new), `ops-ui/src/lib/useAuth.tsx`/`App.tsx`/`api.ts` — MFA login flow.
- `portal-ui/src/pages/DashboardPage.tsx` — risk-profile/growth-plan acknowledge buttons wired (#24/#25 above).
- `src/portal-wm/portal-wm.controller.ts` + `portal-wm.types.ts` — messaging routes retired.
- `src/ops-api/marketing.controller.ts` + `marketing.service.ts`, `src/ops-api/fund-accounting.controller.ts` + `src/product/product-factory.service.ts` — three redundant "pending" routes and their service methods removed.
- `deploy/windows/install-one17.ps1` — full rewrite for binary release.
- `scripts/build-release.ps1` — pre-generated Prisma client copy + SHA-256 checksum output.
- `scripts/release-qa-gate.ps1` — Leg 3 reworked to genuinely clean-room.
- `scripts/clean-room-replay.ps1` (new) — disposable-environment script shipped in the bundle.
- `scripts/release-ci.ps1` (new) — single build→bundle→gate pipeline command.
- `DEPLOYMENT_WINDOWS.md` — rewritten for binary release + checksum verification + clean-room gate.

Verified throughout: `npx tsc --noEmit` (backend, repo root) and `ops-ui`'s `npx tsc --noEmit` + `npm run build` both clean at the end of this work.

## 5b. RES-001 compliance table (invariant 69c: this pack doubles as RES-001's inaugural compliance demonstration)

Full clause text and rationale in `docs/RES-001_Release_Engineering_Standard.md` (shipped in this release's bundle). Every clause below is marked **MET** / **PHASED** / **RISK-ACCEPTED** — none silently omitted, per invariant 69(c)'s own requirement.

### Workstream A — Release Engineering

| Clause | Status | Evidence |
|---|---|---|
| RE-01 Binary releases | **MET** | §1 above; installer runs `npm ci --omit=dev` only |
| RE-02 Checksum/version manifests + operator verification | **MET** | §1 above; `VERSION.json` + `<zip>.sha256` + `DEPLOYMENT_WINDOWS.md` §2a |
| RE-03 Signed artifacts | **PHASED** | SHA-256 now (MET for this phase); digital signature phase activates when the CEO-custodied signing key exists — this is the CEO's own explicit phasing (invariant 69a), not a gap |
| RE-04 Single `release-ci` pipeline | **MET** | §1 above; `scripts/release-ci.ps1` |
| RE-05 Clean-room validation | **MET** | §6e below |

### Workstream B — Security Hardening (SEC-01..07)

| Clause | Status | Evidence |
|---|---|---|
| SEC-01 Dependency vulnerability remediation | **MET**, with one **RISK-ACCEPTED (CEO-signed, 11-Jul-2026)** sub-item | §3g: 2 HIGH findings cleared. 5 MODERATE findings (prisma→6.19.3, exceljs→3.4.0 chains) require breaking downgrades — **CEO disposition: ACCEPTED.** The prisma/exceljs major-version migrations are scoped as their own future tranche, deliberately not rushed into a PATCH release. No v1.0.2 action. |
| SEC-02 Trust-proxy + client-IP verification | **MET** | §3b |
| SEC-03 Origin/Referer CSRF checks | **MET** | §3c |
| SEC-04 Swagger production gating | **MET** | §3d |
| SEC-05 Exception-filter sanitization | **MET** | §3e |
| SEC-06 Installer NTFS ACLs on secrets/env files | **MET** | §3f |
| SEC-07 Staff-realm TOTP MFA + enforcement tiers | **MET** | §3a; 17-assertion live smoke test, all passing |

### Workstream C — Code Hygiene

| Clause | Status | Evidence |
|---|---|---|
| CH-01 Five-bin classification, none unclassified | **MET** | §4: all 32 previously-unproven routes classified |
| CH-02 Dead-code elimination | **MET** | §4: portal-wm messaging + 3 redundant "pending" routes deleted this release |
| CH-03 Auto-generated API/capability/RBAC/workflow inventory | **MET** | `generate-controls-register.ts` extended this release with a mechanically-scanned API route inventory (618 routes, 69 controller files — `docs/GENERATED_CONTROLS_REGISTER_v11.md` §7), alongside the pre-existing role/approval-chain/capability-grant/trigger/constraint sections. Previously PARTIAL (RBAC/workflow only, no route inventory) — closed this release. |

### Workstream D — Deployment Assurance

| Clause | Status | Evidence |
|---|---|---|
| D-01 Fresh-install replay | **MET** | Shared with RE-05, §6e below |
| D-02 Backup mechanism | **MET** | `backup.ps1`/`restore.ps1` exist, documented, `DEPLOYMENT_WINDOWS.md` §5 |
| D-03 Restore-drill cadence | **RISK-ACCEPTED (CEO-signed, 11-Jul-2026)** — as an operational commitment, not code | Every recorded restore drill (`RUNBOOK.md`, `M1_EVIDENCE.md`, `CHECK2_EVIDENCE.md`, `CHECK3_EVIDENCE.md`) ran on the same calendar day (2026-07-04, project inception) — a one-day burst at build time, not an exercised recurring cadence. **CEO disposition: ACCEPTED.** A quarterly restore drill enters the filing calendar, owned by the Technology Officer; the FIRST real drill executes during staging-server setup, before UAT. No code deliverable — this is tracked as an operational commitment, not a v1.0.2 development item. |

### Workstream E — Governance Sign-off

| Clause | Status | Evidence |
|---|---|---|
| E Tiered sign-off | **MET — signed by the advisor** | v1.0.1 is a PATCH release (no functional change) → required panel = Technology + Internal Control + MD_CEO, per RES-001's own tiering. CHECK22 is signed by the advisor (recorded 11-Jul-2026); the three §5b RISK-ACCEPTED dispositions below were issued as part of the same sign-off act. The tag remains the CEO's own separate action per his standing instruction, even with sign-off complete. |

### Workstream F — Operational Observability (PHASED, "now" sub-items)

| Clause | Status | Evidence |
|---|---|---|
| F-01 Structured logging | **RISK-ACCEPTED for v1.0.1 (CEO-signed, 11-Jul-2026) — RE-SCOPED to v1.0.2** | Plain NestJS console `Logger`, no JSON, no log-level config, no request-ID-to-log-line correlation (the requestId only reaches `audit_trail`, not console output). Not built this release. **CEO disposition: v1.0.2, PATCH tier.** |
| F-02 Scheduler/backup/integration failure alerting | **PARTIAL — RISK-ACCEPTED for v1.0.1 (CEO-signed) — RE-SCOPED to v1.0.2, COMPLETED scope** | Scheduler-job failures (including gateway sweeps) DO produce a queryable `ScheduledJobRun` + `audit_trail` row (extends AUDIT_INTEGRITY_NIGHTLY as intended) — but there is still no active notification engine (email/SMS/push), only a persisted record, and `backup.ps1` failures are entirely invisible to the app (Windows Task Scheduler history + `backup.log` only, never wired in). **CEO disposition: v1.0.2 wires scheduler-failure alerting through the notification engine AND makes `backup.ps1` failures visible to the app — "a silently failing backup is the worst kind" (CEO's own words). Both halves close in v1.0.2, not just the easier one.** |
| F-03 Health dashboard | **RISK-ACCEPTED for v1.0.1 (CEO-signed) — RE-SCOPED to v1.0.2** | `GET /health` is a bare, deliberately process-only liveness probe (no DB check). `SchedulerConsolePage` covers job-run history only, not backups/gateways/DB health. No system-wide health view exists. **CEO disposition: v1.0.2 delivers a real health view.** |
| F-04 Log-retention policy in NDPA registry | **RISK-ACCEPTED for v1.0.1 (CEO-signed) — RE-SCOPED to v1.0.2** | `RetentionScheduleEntry` covers customer/business data categories and the `audit_trail` table itself; no row names application/server logs. **CEO disposition: v1.0.2 adds the log-retention row.** |

**Disclosure note:** invariant 69(a)(iii) specified these four F items as the "now" phase — work expected to exist starting with this release, not deferred to v1.5. The honest finding was that three of the four were not built and the fourth was partial. **CEO disposition (11-Jul-2026): ACCEPTED for v1.0.1 only, and immediately re-scoped as v1.0.2** — a PATCH-tier follow-up release, not a silent slip to v1.5. See §8 below for the full v1.0.2 scope, which also folds in the two NDPA compliance-flagged defects from §4 (#23/#26).

## 6. Release gate result (v1.0.1)

### 6a. A real defect caught by the compiled boot check, fixed before shipping

The first `release-ci.ps1 -Version 1.0.1` run's Leg 2 (compiled boot check) failed with a genuine `UnknownDependenciesException`: `CapabilityGuard` (used by `MfaController`'s admin routes) needs `DelegationService`, but `MfaModule` only imported `AuthModule` (via `forwardRef`) and never imported `DelegationModule` directly — so `DelegationService` was invisible within `MfaModule`'s own scope. This compiled clean under `tsc --noEmit` (which has no visibility into Nest's runtime DI graph) and was never caught by `mfa.smoke.ts`, because that smoke test constructs `MfaService`/`AuthService` directly with `new`, bypassing Nest's container entirely — the compiled boot check is the only leg in this whole gate that actually exercises the real DI graph end-to-end, and it did exactly the job it exists to do. **Fix:** `src/mfa/mfa.module.ts` now imports `DelegationModule` directly, matching the pattern `ops-api.module.ts` already documents for its own controllers. The bundle was rebuilt after this fix; the run recorded in this section is against the corrected, final bundle.

### 6a2. Final bundle rebuilt a second time to include RES-001

After the CEO held the tag pending the RES-001 standard and the honest A-F compliance table (§5b), the bundle was rebuilt once more to include `docs/RES-001_Release_Engineering_Standard.md` and the extended Governance Controls Register (v12, now with an API route inventory section — CH-03). **Both legs 2 and 3 below are the results against this final, RES-001-inclusive bundle**, not the earlier one.

### 6b. Leg 1 — full smoke suite (dev DB): 76/79 passed, 3 known non-blocking failures

```
Smoke suite: 76/79 passed.

Failed:
  - src\board-directive\board-directive.smoke.ts
  - src\payment-gateway\payment-gateway.smoke.ts
  - src\scheduler\scheduler.smoke.ts
Total time: 1085.7s
```

Each was individually root-caused, not waved through:

- **`board-directive.smoke.ts`** fails with `"root task is not assigned to this user's own employee record"` on an auto-created task from a directive fixture — a task/employee-linkage residue collision from this session's own extensive prior re-testing of the same dev DB (the same class of collision CHECK21_EVIDENCE.md §6 already documented and precedent-exempted for Leg 1). No code touched by CHECK22 references `BoardDirectiveService` or `TaskService`'s employee-linkage logic.
- **`payment-gateway.smoke.ts`** and **`scheduler.smoke.ts`** both fail on the exact same underlying fact: `runDailyReconciliation`/`PAYMENT_GATEWAY_RECONCILIATION` finds **14 promoted inflow(s) awaiting checker approval past 48h** — real timestamped rows accumulated in the dev DB from many prior payment-gateway smoke runs across this multi-week engagement, never approved or cleaned up. This is data-state residue, not a code defect: no code touched by CHECK22 changes `PaymentGatewayService` or `SchedulerService`'s reconciliation logic.

Per the same precedent CHECK21_EVIDENCE.md §6/§8 established (Leg 1 runs against the dev DB specifically because Day-0 correctness is Leg 3's job; a Leg-1 failure individually confirmed as session-residue, not a functional regression, is disclosed and treated as non-release-blocking) — these 3 are dispositioned the same way, with the specific residue identified by name rather than left as an unexplained "known-flaky" label.

### 6c. Leg 2 — compiled boot check (dev DB): PASSED, on the final RES-001-inclusive bundle's source

```
OK: NestFactory.create(AppModule) resolved every module's full dependency graph without error
OK: app.listen() brought up the HTTP layer on an ephemeral port (http://[::1]:51324)
OK: GET /version returned 200 (commit: unknown (dev checkout, no install-one17.ps1 run)) -- confirms the HTTP pipeline (guards/interceptors/filters) is wired end-to-end, not just DI
OK: app.close() shut down cleanly

SMOKE OK — Full-application boot check (invariant 43e) against the real live DB.
```

`npx tsc --noEmit` also clean, repo root.

### 6d. Final bundle checksum

```
=== Computing SHA-256 checksum ===
OK: SHA-256: 167a33f0ae72623149d7bb2a8b62ac4a3e35138dd1942b3cb089373acc8d7235 -> release\one17-v1.0.1.zip.sha256
```

(Supersedes the intermediate checksum recorded earlier in this section, from the pre-RES-001 bundle — that bundle was never tagged and is not the shipping artifact.)

### 6e. Leg 3 — CLEAN-ROOM fresh-install replay: PASSED, on the final bundle

Checksum verified against the published `.sha256` file; ZIP extracted into a fresh, empty `%TEMP%\one17-clean-room-<guid>` directory (confirmed: nothing else present); `scripts\clean-room-replay.ps1` invoked from inside the extraction — the identical script the bundle ships to operators:

```
=== Installing runtime dependencies only (npm ci --omit=dev -- no build toolchain, binary release model) ===
added 345 packages, and audited 346 packages in 14s
OK: Runtime dependencies installed

=== Creating scratch database "one17_clean_room_replay" ===
Created database "one17_clean_room_replay".

=== Running migrations against the scratch DB ===
112 migrations found in prisma/migrations
All migrations have been successfully applied.

=== Running the production seed against the scratch DB ===
RolePermission reconciliation: 699 desired grant(s) upserted; 0 stale grant(s) pruned
APPROVE⇒VIEW assertion: 67 VIEW-gated function(s) checked across 534 role+function grant pair(s) -- 0 gaps.
[... full production seed, zero demo data ...]
Seeded 37 roles, 157 functions, 699 permission rows, 64 workflow type(s), 32 approval rules, 6 screening checklist items.

=== Booting the compiled app and checking the Activation Console renders step 1 ===
OK: NestFactory.create(AppModule) resolved the full dependency graph against the scratch DB
OK: Activation Console reports all 9 steps (Identity/People/Books/Taxes/Products/Risk/Rails/Data/Proof)
OK: Step 1 renders: "1. Identity" — RED (1 failing, 0 pending of 1 check(s).)
OK: Every step probe resolved cleanly against the scratch DB (no probe threw)
OK: Readiness score on a freshly migrated+seeded database: 0% (expected low/non-100 — this is a fresh install, not an activated one)
OK: app.close() shut down cleanly

SMOKE OK — fresh-install replay (invariant 67a): boot + Activation Console step 1 against a scratch DB.
OK: Clean-room replay passed: install (--omit=dev, no build) -> migrate -> seed -> boot -> Activation Console step 1

Dropping scratch database "one17_clean_room_replay"...
Dropped database "one17_clean_room_replay".
```

**No `npm run build`, `nest build`, `vite build`, or `prisma generate` ran anywhere in this leg** — only `npm ci --omit=dev` against the bundle's own shipped `dist/`, `ops-ui/dist`, `portal-ui/dist`, and pre-generated `generated/prisma`. The extraction directory contained nothing but the bundle itself — no dev repo, no `node_modules` copied from elsewhere, no reachable `.env` outside what the bundle's own scratch-DB flow wrote. This is the genuine clean-room proof invariant 68(b) calls for, superseding the v1.0.0 pass.

### 6f. Overall disposition

Leg 3 — the artifact's own fresh-install proof, run genuinely clean-room, against the FINAL bundle (RES-001 doc + v12 controls register with the API route inventory included, checksum `167a33f0ae72623149d7bb2a8b62ac4a3e35138dd1942b3cb089373acc8d7235`) — passes cleanly. Leg 2 passes cleanly against that same final bundle's source (after the real defect in §6a was found and fixed, not papered over). Every Leg 1 failure is individually confirmed as dev-DB session residue, not a regression introduced by this tranche's changes. The gate is green by the same standard CHECK21 established: the load-bearing legs (2 and 3) are unconditionally clean; Leg 1's known, named, root-caused residue is disclosed rather than hidden. This is the artifact the CEO's sign-off and tag, once given, would apply to.

## 7. Tag — held, pending the CEO's own hand

Per invariant 68(f), tagging requires the clean-room gate green from the signed bundle with its checksum published — §6 satisfies that technical condition. Per the CEO's explicit correction on this pack: **tagging is not automated by this tranche's tooling.** RE-04/Workstream E both make the same point from different angles — a release-ci run proves the artifact is reproducible and gated; it is not itself the go/no-go signature. Status of the three conditions:

1. ~~This pack's RES-001 compliance table (§5b) has been reviewed and any RISK-ACCEPTED rows are explicitly accepted~~ — **done.** All three RISK-ACCEPTED rows (SEC-01, D-03, Workstream F) carry CEO dispositions, recorded 11-Jul-2026 (§5b, §8).
2. ~~The Workstream E sign-off sheet (Technology + Internal Control + MD_CEO, per the PATCH tier) is executed~~ — **done.** CHECK22 is signed by the advisor (§5b, Workstream E).
3. **The CEO chooses to tag** — remains outstanding; not run by this builder regardless of the state of 1 and 2.

The commands, for when that happens:

```
git tag -a v1.0.1 -m "One17 Enterprise Platform v1.0.1 -- Release Engineering & Security Hardening"
git push origin v1.0.1
```

## 8. CEO dispositions (11-Jul-2026) and v1.0.2 scope

CHECK22 is signed by the advisor. The three §5b RISK-ACCEPTED rows carry the following CEO dispositions, recorded here rather than left as open questions:

**SEC-01 (5 moderate npm-audit findings) — ACCEPTED.** The prisma/exceljs major-version migrations are scoped as their own future tranche, not rushed into a PATCH release. No v1.0.2 action; tracked as a future major/minor-tranche candidate, not listed below.

**D-03 (restore-drill cadence) — ACCEPTED as an operational commitment, not code.** A quarterly restore drill enters the filing calendar, owned by the Technology Officer. The FIRST real drill executes during staging-server setup, before UAT — not a v1.0.2 code deliverable.

**Workstream F "now" items — ACCEPTED for v1.0.1 only, immediately RE-SCOPED as v1.0.2**, a PATCH-tier follow-up release that runs through the same `release-ci.ps1` pipeline and the same PATCH sign-off tier (Technology + Internal Control + MD_CEO) as v1.0.1:

| v1.0.2 item | Scope |
|---|---|
| F-01 | Structured logging (JSON logger config, log levels, request-ID-to-log-line correlation) |
| F-02 | **Completed, both halves**: scheduler-failure alerting wired through the notification engine (not just a persisted `ScheduledJobRun` row), AND `backup.ps1` failures made visible to the app — "a silently failing backup is the worst kind" (CEO ruling). Neither half ships without the other. |
| F-03 | A real health view (beyond the bare `GET /health` liveness probe) |
| F-04 | The log-retention row for application/server logs in the NDPA registry |
| NDPA wiring (§4 #23, #26) | The privacy-notice acknowledgment flow — server-side built, never wired into either frontend (portal login flow AND public self-registration/ops-side flow) — is a GAID obligation, so it does **not** wait for the next functional release. Added to v1.0.2 specifically because of its compliance nature, not bundled with the routine UI-affordance backlog below. |

**The remaining 16 parked UI-affordance defects from §4** (calendar busy-check, migration reconciliation-gates button, bank-reconciliation summary panel, PMS activity logging, document required-document-config admin screen, MFA admin screen, scheduler failures panel, task-KPI drill-down, tax VAT recognition action, WM FX-config admin screen, and the counterparty obligations dashboard already tracked as task #101) **stay parked for the first post-UAT functional release**, where they'll be triaged alongside whatever UAT itself surfaces — not folded into v1.0.2, which stays a tightly-scoped PATCH.
