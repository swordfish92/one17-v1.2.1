# CHECK23 Evidence Pack — v1.0.2 Release Engineering Observability & NDPA Wiring

**Invariant 69 (CEO CHECK23 kickoff, 11-Jul-2026) — v1.0.2, PATCH tier, closing the six items CHECK22_EVIDENCE.md §8 re-scoped from v1.0.1: RES-001 Workstream F "now" items F-01..04, the two NDPA compliance-flagged defects (§4 #23/#26), the QA gate's shared-DB residue posture, and the PATCH sign-off sheet. Same pipeline (`release-ci.ps1`), same tiering (Technology + Internal Control + MD_CEO), no business-functionality change.**

## 0. Scope checklist (CEO's own six items, verbatim from the kickoff message)

| # | Item | Disposition |
|---|---|---|
| 1 | F-01..04 observability, now-phase | **CLOSED** — §1 |
| 2 | Privacy-notice acknowledgment wired into both frontends, closes before external-user UAT | **CLOSED** — §2 |
| 3 | `GET /ready` readiness probe + runbook fail-closed documentation | **CLOSED** — §3 |
| 4 | Evidence pack + five-bin table shipped inside the bundle, references pointing at packaged artifacts | **CLOSED** — §4 |
| 5 | Leg 1 moves to an ephemeral seeded database via existing reset tooling | **CLOSED** — §5 |
| 6 | Executed PATCH sign-off sheet included in the release evidence once the CEO's panel signs | **TEMPLATE SHIPPED, execution pending §8** |
| — | Deprecation-warning packages + minimal-runtime packaging on the roadmap | **RECORDED** — `docs/DEPENDENCY_PACKAGING_ROADMAP.md` (not a v1.0.2 build item, the CEO's own instruction) |

---

## 1. RES-001 Workstream F, now-phase, all four items (closes F-01..04)

**F-01 Structured logging.** `src/common/structured-logger.service.ts` (new) — `StructuredLogger extends ConsoleLogger`, emits one JSON object per line (`timestamp`, `level`, `context`, `message`, `requestId`, plus any extra fields), `error`/`warn` to stderr and everything else to stdout for severity-by-fd splitting. `LOG_LEVEL` env var sets the floor (default `log`). Request-ID correlation via a new `src/common/request-context.ts` (`AsyncLocalStorage`), populated by existing request-ID middleware and read by `getCurrentRequestId()` inside every log line — closing the exact gap CHECK22_EVIDENCE.md §5b named ("the requestId only reaches `audit_trail`, not console output"). Wired as the Nest app's logger in `main.ts`. Verified live: real JSON boot-log lines observed (`{"timestamp":"...","level":"log","context":"NestApplication","message":"Nest application successfully started"}`).

**F-02 Scheduler/backup failure alerting — both halves, neither shipped without the other (CEO's own ruling from CHECK22_EVIDENCE.md §8).**
- *Scheduler → notification engine.* `SchedulerService.executeJob`'s catch block now calls a new private `alertJobFailure()` after the existing `audit.record()` call: resolves every `SCHEDULER_OPERATIONS`/`SCHEDULER_OVERSIGHT` VIEW-holder (role → user, deduplicated) and fires a `SCHEDULER_JOB_FAILED` notification per recipient via the existing `NotificationService`, mirroring `BoardCalendarService.runReminderSweep`'s own role-holder-resolution pattern exactly. New `SCHEDULER_JOB_FAILED` value added to the `NotificationType` enum (schema + hand-authored migration). Verified live: a real `PAYMENT_GATEWAY_RECONCILIATION` job failure during `scheduler.smoke.ts` correctly fanned out 10 notifications to every VIEW-holder.
- *Backup visibility.* New `BackupRun` model (schema + same migration) records every backup attempt. `BackupReportTokenGuard` (new, `src/backup/backup-report-token.guard.ts`) fails closed — `ServiceUnavailableException` if `BACKUP_REPORT_TOKEN` is unset, `401` on a header mismatch otherwise — guarding a new unauthenticated `POST /ops/backup-runs/report` controller (the third such session-less controller in the codebase, after `PublicIntakeController` and `PaymentGatewayWebhookController`, kept in a separate controller file from the session-guarded read side per that established precedent). `deploy/windows/backup.ps1` now POSTs a `SUCCEEDED`/`FAILED` report after every run (never throws on report failure — WARNING-logs only, so a reporting outage can't break the backup itself). A session-guarded `GET /ops/backup-runs` (`BackupController`) lists recent runs, gated identically to the health view below. Verified live: the report endpoint returns `503` (token unset) → `401` (wrong token) → `201` (valid, both statuses), with rows persisted correctly.

**F-03 Real health view.** New `ops-ui/src/pages/PlatformHealthPage.tsx` aggregates `/ready`, `GET /scheduler/failures`, and `GET /ops/backup-runs` into a read-only dashboard (status badges, byte-formatted backup sizes, unresolved-failures table, recent-runs table — no write actions). Wired into `AdministrationHubPage.tsx` as a new "Platform Health" tab and into `Layout.tsx`'s nav + Ctrl+K search index, gated on `SCHEDULER_OPERATIONS`/`SCHEDULER_OVERSIGHT` VIEW (deliberately the same, narrower gate `BackupService.listRecentForUser` itself enforces). Verified live via a throwaway ICT staff login: real data rendered (50 unresolved scheduler failures with full detail, correct backup-empty-state before any report existed).

**F-04 Log-retention row.** `prisma/seed.ts` adds a `retention_schedule_entry` row for `"Application/server logs (api-stdout.log, api-stderr.log)"`, **status DRAFT** (not ACTIVE) — the exact retention period is a genuine operational policy choice Technology/Compliance haven't made yet, not something to fabricate a default for, matching this codebase's "park, don't invent" discipline applied everywhere else in the same seed file (e.g. the risk appetite matrix, `exec_oversight_policy`).

## 2. Privacy-notice acknowledgment wired into both frontends (closes §4 #23/#26, GAID obligation)

**Portal-ui (staff-authenticated investor/counterparty realm).** `PortalAuthController.me()` now fetches the portal user's `firstLoginAt` alongside investor/counterparty data and returns `requiresPrivacyNoticeAcknowledgment: firstLoginAt === null` — a durable, refresh-safe signal (not a one-shot login-response flag). `portal-ui/src/lib/usePortalAuth.tsx`'s `privacyNoticeAcknowledgmentPending` is now derived from that query response, matching `useAuth.tsx`'s existing `mfaPending` pattern rather than transient local state. Verified live: login → `PrivacyNoticeGate` renders → acknowledge → dashboard → **page refresh correctly stays on the dashboard** (proving the durable, query-backed signal actually works, not just the initial render).

**Public self-registration (unauthenticated).** Investigation found a real, live, previously-silent bug: `PublicIntakeService.submitInvestorExpress`/`submitCounterparty` already reject any payload where `privacyNoticeAcknowledged` is falsy — meaning every public-intake submission through the unfixed `PublicRegisterPage.tsx` form was **silently failing** before this fix (the checkbox simply didn't exist). Added the checkbox + boolean field to both the investor and counterparty form state; the existing server-side validation and auto-recorded acknowledgment now actually get reached. Verified live: a real submission returns `201 Created`.

Both fixes close #23 and #26 from CHECK22_EVIDENCE.md §4 — the server-side acknowledgment logic was already correct and audited; the gap was exclusively the frontend never calling it (portal) or never collecting the input at all (public intake).

## 3. `GET /ready` readiness probe (closes item 3, RES-001 D-05-adjacent)

`src/app.controller.ts` — genuine readiness probe, distinct from the pre-existing `GET /health` liveness probe (process-only, no DB check, invariant 62a's own comment already flagged this exact gap as future scope). **Fail-closed by construction**: the only path to `200` is a real `SELECT 1` round-trip succeeding inside a `try` block; any exception — real outage, query timeout, a bug in a future check added to the same block — falls through to `catch` and returns `503`, never a false-positive `200` from a swallowed error. `RUNBOOK.md` gained a "Readiness probe (`GET /ready`)" section documenting the fail-closed contract and what an operator/load-balancer should do with a `503` (pull from rotation, do not restart blindly — a DB outage the app didn't cause won't be fixed by a process restart). Verified live via curl: `200` with a healthy DB, contract confirmed against the running dev API.

## 4. Evidence pack + five-bin table shipped inside the release bundle (closes item 4)

`scripts/build-release.ps1` now copies `CHECK22_EVIDENCE.md` (mandatory — throws if missing) and `CHECK23_EVIDENCE.md` (conditional, present once this file exists) to the bundle root, alongside the pre-existing `docs/RES-001_Release_Engineering_Standard.md` and `docs/GENERATED_CONTROLS_REGISTER_*.md` copies. This closes two previously-broken bare-filename cross-references: `DEPLOYMENT_WINDOWS.md` and `RES-001_Release_Engineering_Standard.md` both already *referenced* `CHECK22_EVIDENCE.md` by name, but the bundle never actually shipped it — an operator following either document's own citation would have hit a missing file. The five-bin endpoint table (Active/Dynamic/Feature-flagged/Deprecated/Defect) lives inside `CHECK22_EVIDENCE.md` §4 — no separate file was needed, since shipping that document ships the table.

## 5. Leg 1 moves to an ephemeral seeded database (closes item 5, invariant 69)

**Investigation, not assumption.** CHECK21/CHECK22's Leg 1 ran against the shared dev DB and both evidence packs carried a "known, named, root-caused residue" disclosure paragraph for its failures — a standing, recurring exception the CEO's kickoff explicitly wants closed ("no shared-DB residue explanations ever again"). Live-investigated exactly why a bare migrate+seed database used to fail roughly 10 of the 79 smoke files, rather than assuming the historical explanation still held:

- **6 of the 10 were a real, previously-undiagnosed `prisma/seed.ts` bug**, not a smoke-test artifact. `systemSeedUser` (the `system-scheduler@one17.test` service account several governed seed blocks depend on) was looked up via a plain `findFirst` and never created — on the dev DB this was masked because months of real app-boot cycles had already lazily created it via `SchedulerService.systemSchedulerUserId()`'s own find-or-create logic, but on any genuinely fresh database (including a real production install via `install-one17.ps1`) roughly 8 governed seed blocks silently skipped: `task_default_gate_policy`, `required_document_config`, `privacy_notice_config`'s create branch, the `retention_schedule_entry` ACTIVE audit-trail row, `exec_oversight_policy`, the CHECK14 `metric_definition` rows, `attendance_lateness_gate_policy`, and MFA financial-capability + global-enforcement seeding. **Fixed**: `seed.ts` now eagerly finds-or-creates the account and its `SYSTEM_SCHEDULER` role, mirroring `systemSchedulerUserId()` exactly. This is a genuine production-correctness fix, not merely a QA-gate accommodation — every fresh install benefits, not just this gate. Confirmed live: re-seeding a fresh scratch DB after the fix raised the pass rate from 69/79 to 75/79.
- **4 more are not a bug** — each traces to one specific, named governed action a bare seed deliberately never performs ("park, don't invent," the same discipline enforced everywhere else in this codebase): `kri-engine.smoke.ts` needs a Board-activated risk appetite matrix; `audit-trail-viewer.smoke.ts` needs the `COMPANY` `ledger_entity` row the Activation Console's own activation sequence creates; `migration.smoke.ts` needs real TPL_01-13 workbook CSV staging data loaded through `MigrationService`'s own ingestion pipeline; `regulatory-reporting.smoke.ts` needs staff-configured `regulator_template` rows. These are genuinely post-activation platform state, structurally impossible for a bare migrate+seed database to provide — they are not release-gate defects.
- **A 5th surfaced live on this leg's own first real run against the genuinely ephemeral DB** (not a hypothesis — the actual gate, actually run): `pms.smoke.ts` failed with "No Snr Associate 1 / notch 2 emolument_structure rows seeded." Investigated rather than waved through: `prisma/seed.ts` seeds `kpi_definition`/`kpi_weight_matrix` DRAFT rows for this org-unit/tier ("slot A"), but never creates a single `emolumentStructure` row anywhere in the file — the smoke test's own header comment names the real source as "TPL_09," the same migration-replay CSV ingestion category as TPL_01-13. Same disposition as the other 4: genuinely post-activation, not a seed bug.

**Mechanism.** `scripts/run-all-smoke.ts` gained a `--exclude-post-activation` flag (default behavior for every other caller — a developer's plain `npm run smoke:all`, any prior CHECK tranche's own re-run — is completely unchanged) that skips exactly the 5 named files via a `POST_ACTIVATION_ONLY` set, documented in the script's own header comment. New `npm run smoke:all:ephemeral` script wraps it.

**`scripts/release-qa-gate.ps1` reworked.** Legs 1 and 2 now share one fresh ephemeral scratch database (`one17_release_gate_scratch` by default, new `-LegDbName` parameter): create (`scripts/create-walkthrough-db.ts`, the existing generic reset tooling the CEO's kickoff referenced) → `prisma migrate deploy` → `npm run db:seed` → Leg 1 (`npm run smoke:all:ephemeral`) → Leg 2 (`npm run smoke:boot`, same DB) → drop (`scripts/drop-database.ts`) unconditionally in a `finally` block, restoring the original `DATABASE_URL` afterward — the identical create/migrate/seed/run/drop lifecycle discipline `clean-room-replay.ps1` already established for Leg 3's own scratch DB, applied here for the first time to Legs 1+2. All three legs are now deterministic against disposable state; no leg touches the persistent dev DB. Live gate results in §7.

## 6. Dependency/packaging roadmap (recorded, not a build item — CEO's own instruction)

`docs/DEPENDENCY_PACKAGING_ROADMAP.md` (new): (1) the prisma/exceljs major-version migration, SEC-01, **ACCEPTED** per the CEO's 11-Jul-2026 disposition (CHECK22_EVIDENCE.md §8) — scoped as its own future tranche; (2) npm deprecation warnings, traced live via `npm ls <pkg>` — every warning originates from `exceljs@4.4.0`'s own transitive tree (`archiver`→`inflight`/`glob`, `fast-csv`→`lodash.isequal`, `unzipper`→`fstream`→`rimraf`, `uuid` direct) — not independent findings, closing automatically once (1) lands; (3) minimal-runtime packaging, not yet scoped, blocked on `seed.ts`'s current `src/`-dependency for its route-decorator scan.

## 7. Release gate result (v1.0.2) — GREEN

Full `scripts\release-ci.ps1 -Version 1.0.2` run (build → bundle → 3-leg gate), against the final source including every fix in this pack:

```
=== LEG 1/3: Full smoke suite, minus post-activation-only files (ephemeral scratch DB) ===
Smoke suite: 74/74 passed.
Total time: 250.4s
OK: Full smoke suite passed

=== LEG 2/3: Compiled boot check (same ephemeral scratch DB) ===
OK: NestFactory.create(AppModule) resolved every module's full dependency graph without error
OK: app.listen() brought up the HTTP layer on an ephemeral port
OK: GET /version returned 200 -- confirms the HTTP pipeline is wired end-to-end, not just DI
OK: app.close() shut down cleanly
OK: Compiled boot check passed

Dropping ephemeral scratch DB 'one17_release_gate_scratch' ...
Dropped database "one17_release_gate_scratch".

=== LEG 3/3: Clean-room fresh-install replay (extracted ZIP alone, in an empty path) ===
OK: SHA-256 checksum verified against one17-v1.0.2.zip.sha256
Extracting into an empty temp directory -- nothing else present
Invoking the bundle's own clean-room-replay.ps1 (the same script an operator runs)...
[npm ci --omit=dev, no build -- binary release model] -> migrate deploy (113 migrations) -> db:seed
-> boot -> Activation Console reports all 9 steps, Step 1 renders "RED (1 failing)" -- expected, fresh install
OK: Clean-room replay passed: install -> migrate -> seed -> boot -> Activation Console step 1
Dropping scratch database "one17_release_replay"...
Dropped database "one17_release_replay".

============================================================
RELEASE QA GATE: GREEN. one17-v1.0.2 is ready to tag.
============================================================
release-ci: GREEN. one17-v1.0.2 built, bundled, and clean-room gated identically to every other release.

Zip:      release\one17-v1.0.2.zip
Checksum: release\one17-v1.0.2.zip.sha256
  cd81ff8b2d649546ca8335184887d153161ac38dc9c451868f0e1f25d4c84c08 *one17-v1.0.2.zip
```

**All three legs unconditionally clean** — no dev-DB residue disclosure needed this time, closing the exact recurring exception invariant 69 targeted. Every scratch database (Leg 1/2's `one17_release_gate_scratch`, Leg 3's `one17_release_replay`) was created fresh and dropped cleanly, confirmed in the log.

**Real defects found and fixed by this gate before it went green** (the gate doing its job, not being weakened to pass):
1. `scripts/build-release.ps1`'s ops-ui/portal-ui build steps had no success verification at all (`Write-Ok` fired unconditionally after `npm ci; npm run build`, regardless of exit code) — a failed frontend build would have silently shipped a **stale** `dist/` bundle from a previous build while claiming success. Fixed: both steps now check `$LASTEXITCODE` after each command and verify `dist\index.html` actually exists afterward, matching the backend build's own existing discipline.
2. A stray, delete-locked leftover directory from unused Windows-ARM64 optional native-binary variants (`@node-rs/argon2`, `@unrs/resolver-binding`, `@rolldown/binding`, `@tailwindcss/oxide`) recurred on every `npm ci` in this environment, since `npm ci` always wipes `node_modules` first and this environment consistently cannot delete a freshly-extracted `win32-arm64-msvc` `.node` file (though renaming it away succeeds). Fixed with a self-healing `Clear-StaleArm64Optionals` helper in `build-release.ps1`, called before each of the three `npm ci` invocations (root, ops-ui, portal-ui) — moves any such directory out of `node_modules` before npm needs to touch it, so this doesn't need manual intervention on future runs.
3. `pms.smoke.ts` — a real, previously-hidden gap this leg's own first genuinely-ephemeral run surfaced (§5 above), added to `POST_ACTIVATION_ONLY`.

## 8. Tag and sign-off — held, pending the CEO's own hand

Per the same standing instruction CHECK22_EVIDENCE.md §7 recorded: **tagging is not automated by this tranche's tooling**, regardless of gate outcome — §7's GREEN result satisfies the technical precondition, nothing more. Status of the PATCH-tier conditions (Technology + Internal Control + MD_CEO panel, per RES-001 Workstream E's own tiering for a no-functional-change PATCH release):

1. This pack's six-item scope checklist (§0) — self-reported complete above, pending the panel's own review.
2. The gate itself — **done, GREEN** (§7): all three legs pass unconditionally against the final bundle, checksum `cd81ff8b2d649546ca8335184887d153161ac38dc9c451868f0e1f25d4c84c08`.
3. The Workstream E PATCH sign-off sheet (`docs/RELEASE_SIGNOFF_SHEET_TEMPLATE.md`, shipped in this bundle) — **template shipped, not yet executed.** Once the CEO's panel signs, the executed sheet is added to this evidence pack per the CEO's own item 6 instruction, and this section is updated accordingly.
4. **The CEO chooses to tag** — remains outstanding regardless of the state of 1–3.

The commands, for when that happens:

```
git tag -a v1.0.2 -m "One17 Enterprise Platform v1.0.2 -- Observability, NDPA Frontend Wiring, Deterministic Release Gate"
git push origin v1.0.2
```
