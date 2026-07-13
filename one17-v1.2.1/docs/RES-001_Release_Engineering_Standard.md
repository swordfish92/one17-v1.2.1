# RES-001 — The One17 Release Engineering Standard

**Status:** Permanent standard (invariant 69, CEO ruling, 10-Jul-2026) — not a tranche, not a one-time checklist. Every future release, major or minor or patch or hotfix, complies with this document. v1.0.1 (CHECK22) is the first RES-001-compliant release; its evidence pack (`CHECK22_EVIDENCE.md`) is this standard's inaugural compliance demonstration.

**Force (invariant 69b):** CHECK packs for release tranches cite RES clause numbers. The release sign-off sheet (per tier — see Workstream E) is stored in the document register per release. The Governance Controls Register gains a release-governance section generated from this standard.

**How to read this document:** each numbered clause is a control. A release's evidence pack marks every clause **MET** / **PHASED** / **RISK-ACCEPTED** — never silently omitted. MET means the control operated as specified for this release. PHASED means this clause is on a CEO-approved multi-release rollout and this release satisfies the phase it is currently in. RISK-ACCEPTED means the control did not fully operate for this release and the CEO has signed off on shipping anyway, with the gap and its remediation plan recorded — risk acceptances are never silent and never self-granted by the builder.

---

## Workstream A — Release Engineering

**RE-01: Binary releases.** The release bundle's own compiled artifacts (`dist/`, `ops-ui/dist`, `portal-ui/dist`, `generated/prisma`) ARE the deployed artifact. The installer (`deploy/windows/install-one17.ps1`) never runs `npm run build`, `nest build`, `vite build`, or `prisma generate` — only `npm ci --omit=dev` against the bundle's own shipped lockfile. No build toolchain is required on the target server.

**RE-02: Checksum/version/build manifests + operator verification chain.** `scripts/build-release.ps1` stamps `VERSION.json` (`{version, commit, builtAt}`, also exposed at `GET /version`) into the bundle and computes a SHA-256 checksum of the release ZIP, published alongside it as `<zip>.sha256`. `DEPLOYMENT_WINDOWS.md` §2a instructs the operator to verify this checksum before extracting or running anything from the ZIP — the verification chain runs from build machine → published artifact → operator's own hash check → install.

*CF-01 amendment (added at v1.1.0): the authoritative completed evidence pack and checksum for each release are published in-repo at `docs/releases/<version>/`, independently of the artifact; the bundle carries its as-of-build evidence copy with a pointer to that location. The GitHub Release entry itself is created by the release authority (CEO) at tagging, never by the builder — see Workstream E.*

**RE-03: Signed artifacts.** SHA-256 checksums ship with every release, effective immediately. Digital signing (beyond the checksum) activates once the CEO-custodied code-signing key exists (Technology Officer holds the signing key, a sealed escrow copy is kept — a human/organizational item, not a code deliverable). Until then, checksum-only is the standard, not a gap.

**RE-04: Pipeline stages via the single `release-ci` script.** `scripts/release-ci.ps1` is the ONE sanctioned command that runs build → bundle → clean-room gate end to end, so every release is produced identically. Manual assembly of a release bundle outside this script is prohibited. A hosted CI service (fully automated triggering, artifact storage, etc.) is a v1.5 upgrade — `release-ci.ps1`, run by a human operator, is the pipeline contract until then.

**RE-05: Clean-room validation.** The release QA gate's fresh-install replay (`scripts/release-qa-gate.ps1` Leg 3) extracts the release ZIP into a fresh, empty temporary directory — no dev repo alongside, no globally-resolvable config — and runs the bundle's own shipped `scripts/clean-room-replay.ps1` from inside it: `npm ci --omit=dev` (no build) → create scratch database → `prisma migrate deploy` → production seed → boot the compiled app → confirm the Activation Console renders step 1 → drop the scratch database. The same script also ships inside every release bundle so an operator can run it standalone against a downloaded ZIP, with no dev repo present at all.

*CF-01 amendment (added at v1.1.0): the authoritative completed evidence pack and checksum for each release are published in-repo at `docs/releases/<version>/`, independently of the artifact; the bundle carries its as-of-build evidence copy with a pointer to that location. The GitHub Release entry is created by the release authority (CEO) at tagging — the tag, the Release page, and the governance sign-off sheet are one human ceremony, never the builder's — see Workstream E.*

---

## Workstream B — Security Hardening

Seven controls, closing the independent v1.0.0 clean-room audit's high findings (H-02 through H-07) plus dependency remediation, in the order the audit itself raised them:

**SEC-01: Dependency vulnerability remediation.** `npm audit fix` (non-force) clears HIGH-severity findings every release. Findings that require a breaking downgrade are excluded from an automatic fix and must be explicitly dispositioned (fixed with a scoped migration plan, or RISK-ACCEPTED with the CEO's sign-off) — never silently left in a "moderate, ignore" state without a decision recorded.

**SEC-02: Trust-proxy configuration + client-IP verification.** `main.ts` calls `app.set('trust proxy', trustProxyHops)`, gated on a `TRUST_PROXY_HOPS` environment variable the installer writes to match the actual reverse-proxy topology (1 hop for Caddy on the same host). Verified per release that `req.ip` — read by both the rate limiter and every `audit_trail` IP-recording call site — resolves to the real client address, not the reverse proxy's own loopback address.

**SEC-03: Origin/Referer (CSRF) checks on state-changing routes.** A dedicated middleware fires only for state-changing requests carrying a session cookie (staff or portal realm); rejects if Origin/Referer doesn't match the configured allow-list. Non-cookie callers (server-to-server, HMAC-authenticated webhooks) are exempt by design — CSRF exploits ambient browser cookie authority a server-to-server caller never has.

**SEC-04: Swagger disabled/gated in production.** API documentation UI is wrapped in a `NODE_ENV !== 'production'` guard.

**SEC-05: Exception-filter sanitization.** Genuinely unexpected exceptions (built-in JS runtime errors, raw database-driver errors) return a generic message to the client; full detail (method, URL, message, stack) goes to server-side logs only. Domain validation errors that are meant to reach the client (this codebase's dominant `throw new Error('human-readable message')` convention) are explicitly excluded from sanitization — a security control must not silently break legitimate application behavior.

**SEC-06: Installer-applied NTFS ACLs on environment/secrets files.** `install-one17.ps1` restricts `.env`, `.env.production`, and `.deploy-secrets.json` to SYSTEM, Administrators, and the installing user — replacing default/inherited ACLs, every install.

**SEC-07: Staff-realm MFA (TOTP) with governed enforcement tiers.** Enrollment, backup codes, and a session-blocking guard gate every route except the MFA endpoints themselves while a second factor is outstanding. A hardcoded mandatory floor (`SUPER_ADMIN`, `MD_CEO`) cannot be configured away; a governed, admin-editable extension list pulls in every financial-approval-holding seat; a global "optional-until-flipped" switch covers the rest. Portal-realm (client-facing) MFA is roadmap (Phase-2 mobile biometrics) — explicitly out of SEC-07's current scope, not a silent gap, per the CEO's own invariant 68(c) text.

---

## Workstream C — Code Hygiene

**CH-01: Five-bin endpoint classification, "no endpoint unclassified."** Every route the automated reachability check cannot prove is called from either frontend is individually classified into exactly one of: **Active (verified)** — infra/liveness, not a UI concern by design; **Dynamic (verified)** — reachable via a call site the static check missed (cited); **Feature-flagged (documented)** — behind an OFF flag or awaiting a vendor/contract, cited; **Deprecated (removed)** — genuinely dead, deleted this release; **Defect** — a real gap between a built capability and a missing UI affordance, either fixed (if small and safe) or logged and dispositioned (RISK-ACCEPTED-pending-CEO if deferred). No route may be left off the table.

**CH-02: Dead-code elimination.** Routes and their backing service methods confirmed unreachable AND redundant with an existing, live code path are deleted in the same release the triage identifies them — not left as inert cruft "for later."

**CH-03: Auto-generated API/capability/RBAC/workflow inventory per release.** `scripts/generate-controls-register.ts` regenerates, from the live database seed and the migration set on disk (never hand-typed): the role catalogue, approval-chain/workflow-type table, capability grant matrix, DB trigger and named-constraint inventory, and (as of CHECK22) a full HTTP route inventory mechanically scanned from every `*.controller.ts`. Runs as part of every `build-release.ps1` invocation; the versioned diff against the prior release ships alongside it.

---

## Workstream D — Deployment Assurance

A battery of checks that the platform can actually be deployed, backed up, and recovered — not just that its code compiles.

**D-01: Fresh-install replay** — see RE-05 above; the same clean-room gate leg serves this control.

**D-02: Backup mechanism.** `backup.ps1` (Windows Task Scheduler, daily) produces an AES-256-CBC-encrypted `pg_dump -F c` file, copies it off-machine, and applies retention. `restore.ps1` performs a full decrypt-and-restore into a scratch database, never over the live one.

**D-03: Restore-drill cadence.** `DEPLOYMENT_WINDOWS.md` §5 documents the drill procedure and recommends running it "on a schedule (quarterly at minimum)." **Honest status as of v1.0.1:** every recorded restore drill in this repo's history (`RUNBOOK.md`, `M1_EVIDENCE.md`, `CHECK2_EVIDENCE.md`, `CHECK3_EVIDENCE.md`) was run on the same single calendar day (2026-07-04, project inception) — a one-day burst of ad hoc runs, not evidence of an actually-exercised recurring cadence. No drill has run since. This is not something CHECK22 can retroactively fix in code; it is an operational-practice gap. Recorded here as **RISK-ACCEPTED-pending-CEO**, not silently marked done — recommend a recurring calendar commitment (owner: whoever holds the DBA/ops role) as the actual fix, not further code.

---

## Workstream E — Governance Sign-off

**TIERED per the CEO-endorsed calibration:**
- **MAJOR release** (new business functionality, schema-significant): full 11-function governance panel sign-off.
- **PATCH release** (no functional change — release engineering / security hardening / bug fixes only): Technology + Internal Control + MD_CEO.
- **EMERGENCY security hotfix**: Technology + MD_CEO sign off to deploy immediately; full panel ratifies post-hoc within 5 working days, recorded.

**v1.0.1 tier:** PATCH (invariant 68(e): "no business-functionality change" — release engineering and security hardening only, confirmed by this release's own scope discipline in `CHECK22_EVIDENCE.md`).

**Sign-off is a human act, never self-attested by the builder.** The release sign-off sheet for this tier (Technology / Internal Control / MD_CEO) is a document-register artifact stored per release — its existence and signatures are confirmed in the evidence pack, not fabricated by whoever assembled the release. A release with an unsigned sheet is not RES-001-compliant regardless of how green the technical gate is. `RELEASE_SIGNOFF_SHEET_TEMPLATE.md` (CHECK23, v1.0.2) is the blank template every release copies and fills — it ships in every release bundle alongside this standard.

---

## Workstream F — Operational Observability

**PHASED per the CEO-endorsed calibration.** "Now" phase (expected to exist starting with the first RES-001-compliant release) and "v1.5/fleet" phase (deferred):

**Now:**
- **F-01 Structured logging** — **honest status as of v1.0.1: NOT YET BUILT.** The backend uses NestJS's default console `Logger` (human-readable text, not JSON); no log-level configuration exists; a per-request UUID is generated and threaded into `audit_trail` rows but is not injected into `Logger` output, so console log lines are not request-correlated. **RISK-ACCEPTED-pending-CEO** for v1.0.1 — recommend as a scoped follow-up release (a logger-format change, not a schema or business-logic change, so it fits a future PATCH tier).
- **F-02 Notification-engine alerting on failed schedulers/backups/integrations** — **PARTIAL.** `SchedulerService` catches `PartialJobFailure` from any registered job (including the payment-gateway and attendance-gateway sweeps) and writes a queryable `ScheduledJobRun` row plus an `audit_trail` entry — by the code's own comment, "no notification engine exists... a persisted, always-visible failure record" is what exists today, not an active push alert (email/SMS/push). **Backup job failures are not wired into the app at all** — `backup.ps1` runs entirely outside the NestJS process; on failure it only appends to `backup.log` and exits non-zero, visible via Windows Task Scheduler history, never as a `ScheduledJobRun` or `audit_trail` row. **RISK-ACCEPTED-pending-CEO**: the scheduler-job half of this control is real and extends the AUDIT_INTEGRITY_NIGHTLY tamper-detection job as intended; the backup half and the "notification engine" (active alerting, not just a queryable record) half are not built.
- **F-03 Health dashboard** — **NOT YET BUILT beyond a bare liveness endpoint.** `GET /health` returns process-only status (no DB round-trip, no dependency checks) by explicit design ("a real readiness probe... out of this pass's scope," per its own comment). `SchedulerConsolePage` in ops-ui is a job-run console (inventory, pause/resume/re-run, run history) — useful operationally but scoped to scheduled jobs only, not a system-wide health view covering backups, gateway connectivity, or DB health. **RISK-ACCEPTED-pending-CEO.**
- **F-04 Log-retention policy in the NDPA registry** — **NOT YET a named category.** The seeded `RetentionScheduleEntry` rows cover investor KYC, investor financial records, complaints, marketing consent, employee records, payroll/tax records, and one ACTIVE row for the `audit_trail` table itself — no row exists for application/server logs (backup.log, console output). **RISK-ACCEPTED-pending-CEO.**

**v1.5/fleet (explicitly deferred, not evidenced in any release before then):** APM, capacity metrics, centralized logging.

**Disposition note for v1.0.1:** Workstream F's "now" phase was specified at invariant 69's adoption as work expected to exist starting with this release. The honest finding is that most of it does not yet exist. Per this standard's own rule ("risk acceptances signed by the CEO, none silent"), these four items are recorded here as RISK-ACCEPTED-pending-CEO rather than silently marked MET or silently omitted — the CEO's disposition (accept the gap into a follow-up release, or hold v1.0.1 until built) is recorded in `CHECK22_EVIDENCE.md`, not decided unilaterally by the builder.

---

## Appendix — Clause index for evidence-pack citation

| Clause | One-line description |
|---|---|
| RE-01 | Binary releases — no server-side build |
| RE-02 | Checksum/version manifests + operator verification |
| RE-03 | Signed artifacts (checksum now, signature pending signing key) |
| RE-04 | Single `release-ci` pipeline script |
| RE-05 | Clean-room fresh-install validation |
| CF-01 | In-repo authoritative evidence pack/checksum at `docs/releases/<version>/`, independent of the artifact; Release page is a post-tag CEO act (amends RE-02/RE-05) |
| SEC-01 | Dependency vulnerability remediation |
| SEC-02 | Trust-proxy + client-IP verification |
| SEC-03 | Origin/Referer CSRF checks |
| SEC-04 | Swagger production gating |
| SEC-05 | Exception-filter sanitization |
| SEC-06 | Installer NTFS ACLs on secrets/env files |
| SEC-07 | Staff-realm TOTP MFA + enforcement tiers |
| CH-01 | Five-bin endpoint classification, none unclassified |
| CH-02 | Dead-code elimination |
| CH-03 | Auto-generated API/capability/RBAC/workflow inventory |
| D-01 | Fresh-install replay (shared with RE-05) |
| D-02 | Backup mechanism |
| D-03 | Restore-drill cadence |
| E | Tiered governance sign-off |
| F-01 | Structured logging |
| F-02 | Scheduler/backup/integration failure alerting |
| F-03 | Health dashboard |
| F-04 | Log-retention policy |
