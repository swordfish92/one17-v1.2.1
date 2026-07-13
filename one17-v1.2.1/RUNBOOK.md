# One17 Enterprise Platform — Operations Runbook

**SOW D9** (`../One17_Phase1_SOW_v1.md` §3): "Documentation: schema docs generated from migrations; runbook for environments, backup/restore drill evidence." Schema documentation is the migrations themselves (`prisma/migrations/`, applied in order) plus `prisma/schema.prisma`'s inline comments — this file covers environment setup and the backup/restore drill.

## 1. Environment

Local/dev environment, per the Build Plan's pivot from Docker to native PostgreSQL (WSL2 unavailable on this machine — see `CLAUDE.md`/`README.md` for that decision):

- **PostgreSQL 16**, native Windows service (`C:\Program Files\PostgreSQL\16`), not containerized.
- Database `one17_platform`. Migration/owner role `one17_app` (`CREATEDB`, `CREATEROLE`, not superuser); least-privilege runtime role `one17_runtime` (see `.env.example` and `prisma/migrations/20260704000000_init_audit_trail/migration.sql`).
- Connection strings in `.env` (never committed — see `.env.gitignore`); `.env.example` documents the shape.
- Migrations applied via `npx prisma migrate deploy` (see `prisma/migrations/`, chronological, several hand-authored where Prisma's DSL can't express triggers/CHECK constraints — each migration's header comment explains why).
- Seed data (`npx run db:seed` / `npx tsx prisma/seed.ts`) is idempotent (upserts) and re-runnable — see that file's own header comment for the one known fragility (below).

**Known fragility, flagged (not fixed in this pass):** `seed.ts`'s approval-rule re-seed deletes and recreates `ApprovalRule`/`ApprovalRuleStep` rows for known workflow types. This breaks with a foreign-key violation once real `WorkflowInstance`/`WorkflowStepApproval` rows exist against those rules (exactly what happens once the system has been used) — encountered live during this build when re-seeding after running the AMD-11 reporting smoke suite. Workaround used: delete the blocking `workflow_step_approval`/`workflow_instance` rows for the affected workflow type before re-seeding. This is safe for dev/smoke data; it is **not** a safe production procedure. Redesigning `seed.ts` to upsert approval rules in place (rather than delete-and-recreate) is out of this pass's scope and should be picked up before any environment holds real workflow history.

## 2. Backup

Daily backup + PITR is the target posture (`CLAUDE.md` "Stack decisions": "daily backup + PITR; 7-year audit retention"). PITR (continuous WAL archiving) is a production/UAT environment concern tied to the actual hosting decision (SOW §9: "environment provisioning to One17-owned cloud account from day one") and is not configured on this local dev instance. What **is** verified on this instance is the logical backup/restore path documented below.

### Command

```
pg_dump -U one17_app -h localhost -d one17_platform -F c -f one17_platform_<UTC-timestamp>.dump --verbose
```

Custom format (`-F c`) so `pg_restore` can rebuild in dependency order (extensions/tables/indexes/triggers/FK constraints), rather than relying on statement order in a plain SQL dump.

## 3. Restore drill — evidence (run 2026-07-04)

Performed against this environment's live dev database, restoring into a scratch database (not the original), then dropped after verification — the drill proves the procedure without touching the working database.

### Steps executed

```
# 1. Backup
pg_dump -U one17_app -h localhost -d one17_platform -F c -f one17_platform_20260704T125421Z.dump --verbose

# 2. Create a scratch target (never restore over the live DB in a real drill either —
#    restore to a parallel database/instance and cut over, or restore to a point-in-time
#    recovery target)
createdb -U one17_app -h localhost one17_platform_restore_drill

# 3. Restore
pg_restore -U one17_app -h localhost -d one17_platform_restore_drill --verbose one17_platform_20260704T125421Z.dump
```

### Verification performed

1. **Row counts, source vs. restored — exact match on every table checked:**

   | Table | Source | Restored |
   |---|---|---|
   | app_user | 24 | 24 |
   | audit_trail | 932 | 932 |
   | investor | 0 | 0 |
   | journal_entry | 12 | 12 |
   | ledger_entity | 4 | 4 |
   | workflow_instance | 0 | 0 |

   (`investor`/`workflow_instance` are 0 because `investor.smoke.ts` cleans up its own rows at the end of its run — expected, not a drill defect.)

2. **Tamper-hash fidelity, byte-for-byte** — the three most recent `audit_trail` rows' `tamper_hash` values were compared source vs. restored and matched exactly (e.g. row 932: `10dfe08bf18e753783ee547499bda791cdecfa4e07d2276cd251009b00b1c318` in both). This is the load-bearing check: a restore that silently altered even one byte of a hash-chained row would be a worse failure than losing the backup entirely, since it would appear to succeed.

3. **Insert-only triggers survived the restore, and still enforce** (this is schema fidelity, not just data fidelity — `pg_restore`'s log shows `audit_trail_no_update`/`audit_trail_no_delete`/`report_run_no_update`/`report_run_no_delete` triggers and every FK constraint recreated). Verified live against the restored copy:
   - `UPDATE audit_trail SET action = 'CREATE' WHERE id = 1;` → `ERROR: audit_trail is insert-only: UPDATE is not permitted on audit_trail_2026`
   - `DELETE FROM report_run;` → `ERROR: report_run is insert-only: DELETE is not permitted on report_run`

4. **Cleanup:** `dropdb -U one17_app -h localhost one17_platform_restore_drill` — scratch database removed; the dump file itself is retained outside the repository (session scratch storage), not committed (it is a snapshot of environment data, however synthetic, and dump files are not source code).

### Result

**PASS.** Restore reproduces the source database exactly — row counts, tamper hashes, and the two hand-authored immutability triggers all verified intact — satisfying SOW §4 acceptance criterion 5 ("Backup/restore drill completed with documented recovery").

## 4. M1 condition: the dev audit chain never migrates to production

This dev database's `audit_trail` carries two kinds of history that must never reach production:

- **Synthetic/test data** (CLAUDE.md invariant #13) — every smoke-test row, every seeded role/user, every drill artifact (`entityType='integrity_drill'`, the M1 evidence pack's tamper-detection rows, etc.).
- **A hash chain with known, permanent, explained defects** — ~26 historical rows (as of the M1 evidence pass) that fail hash recomputation due to the `canonicalStringify` Date-handling bug (fixed going forward, see `M1_EVIDENCE.md` §4 deviation D10) and the deliberate tamper-detection drill (D11). These are correct, expected findings for a dev environment that has been used to build and adversarially test the platform — they would be an alarming, unexplained finding in a system that's supposed to hold real investor data from day one.

**Production provisioning rule, binding at cut-over (T-30, 30-Aug-2026, ahead of the 30-Sep-2026 cut-over per CLAUDE.md invariant #14):** production is provisioned as a **fresh database** — schema migrated from `prisma/migrations/` in order (the migration history is the thing that carries over; it's source code), seeded with real roles/functions/permissions/workflow types via the now-idempotent `prisma/seed.ts` (see this document's "Known fragility" section, resolved), and `audit_trail` starts genuinely empty with `audit_chain_state.last_hash = NULL`. No `pg_dump`/`pg_restore` of *this* dev database, or of any UAT database descended from it, into production, ever — that would carry the synthetic data and the known hash-chain defects into the one place CLAUDE.md invariant #13 forbids them. The backup/restore *mechanism* proven in §§1–3 above is exactly what production uses for its own (clean) chain thereafter — only the dev-to-prod migration path is the one-way door.

## 5. Known failure mode: a "false failure" HTTP response after a successful write

**Class of defect (CLAUDE.md invariant 30), found via `CounterpartyService.onboard()` on 2026-07-05:** a write endpoint's database insert can succeed while the client still receives an HTTP error response, if something downstream of the insert throws while building the success response. The specific case: Nest's default JSON serializer threw on a raw `BigInt` field (kobo amounts) in the response body — `POST /counterparties` returned `400 Bad Request` with `"Do not know how to serialize a BigInt"`, but the counterparty row had already been committed. A caller retrying after a 400 has no way to tell "my request never landed" from "it landed, and the response alone failed" without checking for this specific pattern.

**Root-cause fix:** `installBigIntJsonSupport()` (`src/common/bigint-json.ts`), called once at process bootstrap in `main.ts`, patches `BigInt.prototype.toJSON` globally — every `BigInt` anywhere in any response body serializes to a string, app-wide, present and future, rather than requiring each controller/service to remember its own `.toString()` boundary conversion. Proven live via `src/common/bigint-serialization.smoke.ts` (unpatched-vs-patched unit proof + a live round trip against endpoints that were never individually patched for this).

**Why this matters operationally — retries must be safe:** any endpoint that can hit this failure mode (or any other error thrown after a successful write) must have a natural key or unique constraint that makes a retried request fail loudly (e.g. a unique-constraint violation) rather than silently creating a duplicate row. `Counterparty.contactEmail` and `Investor.contactEmail` are both `@unique` in `prisma/schema.prisma` — a caller who retries `POST /counterparties` or `POST /investors` after an apparent failure gets a clear conflict error on the duplicate, not two rows for the same entity. Any NEW write endpoint introduced in a future phase should carry the same discipline: identify its natural key before shipping, and confirm a retry after an apparent failure fails safely rather than duplicating state.

## 6. Smoke suite: dev-DB scratch reset procedure

**Background:** `one17_platform` (this environment's real dev DB) has been reused across ~20 CHECK tranches without ever being reset, so it carries years of accumulated smoke-test residue. Most `*.smoke.ts` files namespace their own fixtures with a `const RUN = Date.now();` suffix specifically to be safe to run repeatedly against a shared, never-reset DB — but a handful of files were found (CHECK21's release QA gate, §5–§8 of `CHECK21_EVIDENCE.md`) using fixed, non-namespaced identifiers that collide with `Unique constraint failed on the fields: (email)` on a second run, or — for three files with a genuinely different root cause — relying on being "the only" fixture of a given kind in the DB (an assumption a 20-tranche-old DB no longer satisfies). This class of false-failure has been independently diagnosed three times across this engagement, always with the same "the DB isn't actually clean" root cause. All known-affected files are now namespaced or self-cleaning (via `try`/`finally`, so cleanup runs even when an assertion throws mid-script) — but the underlying fix only prevents *future* residue; it doesn't retroactively clean a DB that already carries years of it. When you need a genuinely clean baseline (e.g. to confirm a smoke file is deterministic in isolation, independent of `one17_platform`'s accumulated history), reset a disposable third database rather than touching `one17_platform` or `one17_walkthrough` (the demo DB) — both carry real accumulated state that must not be casually wiped.

### One-command reset

```
npx tsx scripts/reset-dev-db.ts [database-name]   # defaults to one17_smoke_scratch
```

This drops (if it exists), recreates, migrates (`prisma migrate deploy`), and seeds (`npm run db:seed`) a disposable database — by default `one17_smoke_scratch`, distinct from both `one17_platform` and `one17_walkthrough`. It refuses to run if `[database-name]` matches whatever `DATABASE_URL` currently points at, as a guard against accidentally targeting a real database. It reads `DATABASE_URL` only to derive the connection host/user and the scratch DB's own URL — it never logs or prints the credential-bearing connection string (see `.env`'s own handling convention: `set -a && source .env && set +a`, never echoed directly).

### Then run the smoke suite against it

```
DATABASE_URL="<same host/user as .env, database name '<database-name>'>" npm run smoke:all
```

(or target an individual file the same way, e.g. `DATABASE_URL="..." npx tsx src/rbac/rbac.smoke.ts`).

### Known limitation: some smoke files assume a prior activation step

A handful of files (`regulatory-reporting.smoke.ts`, `petty-cash.smoke.ts`, `period.smoke.ts`, `wm.smoke.ts`, `pms.smoke.ts`, `procurement.smoke.ts`, `stress-engine.smoke.ts`, `migration.smoke.ts`, `budget-activation.smoke.ts`) look up a pre-existing `LedgerEntity` with `entityType: 'COMPANY'` via `findFirstOrThrow` — this row is created once via a real go-live activation action (`LEDGER_ENTITY_SETUP` / the Activation Console), not by `prisma/seed.ts`, per the platform's "park, don't invent" governed-config pattern (governed rows ship empty until a real human approval happens — a bare fresh DB legitimately has none, that's correct behavior, not a defect). `one17_platform` has carried this row since early in the engagement, so these files run fine there; a bare `one17_smoke_scratch` freshly reset by the script above will fail these specific files with `No record was found for a query` until a COMPANY ledger entity is created against it (e.g. by running `ledger.smoke.ts` first and *not* letting it clean up its own entity, or by driving the Activation Console once against the scratch DB). This is a separate, pre-existing environmental prerequisite — not the residue class this section addresses.

## 7. Readiness probe (`GET /ready`) — fail-closed semantics

RES-001 item 3 (CHECK23, v1.0.2). Distinct from `GET /health` (§6a of invariant 62's own comment in `src/app.controller.ts`: deliberately process-only, no DB round-trip — answers "is the Node process alive," not "can this instance actually serve traffic").

**What it checks:** a real `SELECT 1` round-trip against the database via the same Prisma connection pool the app itself uses. Any future addition to this check (a second dependency, a cache, a downstream service) belongs inside the same `try` block for the reason below.

**Fail-closed by construction, not by convention:** the handler's only path to a `200 {status: 'ready', ...}` response is the try block completing without throwing. There is no `catch` branch that logs-and-continues to a default-healthy response — the catch branch throws `ServiceUnavailableException`, which the app's exception filter turns into a `503`. A future maintainer adding a second check to this endpoint should add it *inside* the same try block, not in a separate try/catch that could silently swallow a failure and fall through to `ready`. The bar this endpoint sets: **an unreadable/misconfigured dependency must never look identical to a working one from the outside.**

**What an operator/load-balancer should do with a `503` from `/ready`:**
- Take the instance out of rotation (stop routing new requests to it) — it is not lying about being unready; treat the response as authoritative.
- Do **not** restart the process automatically on a single `503` — a transient DB blip (a migration running, a brief network partition) will self-resolve, and `/health` staying `200` throughout confirms the process itself is fine; a restart loop against a genuinely down database accomplishes nothing and adds log noise.
- Escalate if `/ready` stays `503` for longer than a few consecutive polling intervals — that's the signal a human should look at the database, not the app process.
- This platform's current deployment (Caddy, single instance, `deploy/windows/`) does not yet act on `/ready` automatically — it is exposed for a future load-balanced/multi-instance topology or external monitoring to poll. Recorded here so the semantics are already correct and documented before anything is wired to consume them.

## 8. Multi-agent build tranches: worktree partition + sequential integration protocol

Standing practice, dictated by the CEO during the CHECK27/invariant 74 tranche after a real incident (below). Applies whenever the builder spawns more than one parallel agent against this repo in the same tranche.

**The incident this codifies:** 5 agents were spawned in parallel for the connector-pack build (Payments, Bureau, AI, Attendance, Calendar), each told it was working in "your worktree copy of `C:\...\platform-app`" — using the literal main-tree absolute path in the instruction. `isolation: "worktree"` genuinely isolated only 1 of the 5 (Bureau); the other 4 agents' own tool calls resolved against the literal path named in their prompt and landed directly in the main working tree instead of their assigned worktree. This produced real concurrent-edit churn on shared files (`ops-api.module.ts`, `ops-ui/src/lib/api.ts`, `VendorGatewaysPage.tsx`, `scheduler.service.ts`) and one duplicate-method collision in `bureau-gateway.service.ts` that required manual reconciliation. No data corruption resulted, but it was luck (the schema foundation was built upfront by the lead specifically to avoid migration collisions), not the isolation mechanism, that prevented worse.

**Root cause:** never name the main tree's literal absolute path in a spawned agent's prompt, even when describing "your worktree copy" — an agent's own tool calls can resolve against the literal path text regardless of its assigned cwd.

**Standing rules for every multi-agent tranche going forward:**

1. **Partition by non-overlapping file/module ownership before spawning.** Each agent gets a file/module list it may touch; no two agents in the same tranche may be assigned the same file. Shared infrastructure (schema migrations, DI wiring files, shared UI pages like a consolidated gateways page) is built by the lead *before* spawning, not left for an agent to touch — this is what actually prevented data-level collisions in the incident above, even though the file-level partition itself failed.
2. **Each agent works in its own worktree**, referenced only by its own agent-assigned path in its prompt — never the main tree's path, not even as a "this is what your worktree is a copy of" aside.
3. **Verify isolation held before trusting any agent's output.** After an agent reports completion, check `git worktree list` for real uncommitted changes confined to that agent's own worktree directory. An agent whose worktree shows no changes did not necessarily do nothing — it may mean its edits leaked into the main tree instead (the failure mode above). Cross-check against `git status` on the main tree.
4. **Integrate sequentially, never in parallel.** One agent's output lands, then `npx tsc --noEmit -p .` plus that agent's own touched smoke suite(s) run clean, *then* the next agent's output lands. Never merge two agents' output into the main tree back-to-back without a green gate between them.
5. **If two agents are found to have worked the same surface, the later one stops and discards — never a silent double-merge.** Reconciling two independent implementations of the same concern after the fact (as happened with `bureau-gateway.service.ts`'s duplicate `serializeProvider`) is expensive and error-prone compared to preventing the overlap at partition time.
6. **No parallel agent's output enters the main tree without the lead's own independent re-verification** — reading the actual diff, not just the agent's self-report, and re-running the relevant smoke suite directly (not trusting the agent's own claimed test run). Same standing discipline as CHECK24's precedent for reviewing agent output.
7. **A duplicate/rival agent working the identical surface is discarded, not merged**, once discovered — `git worktree remove --force` to deregister it from git, confirm no other live session (`list_sessions`) is working the same file set, and delete the leftover directory once no process still holds a handle on it. The integrated main-tree version, independently verified by the lead, is the single source of truth; a second implementation of the same fix is never folded in "just in case," even if it looks reasonable.
