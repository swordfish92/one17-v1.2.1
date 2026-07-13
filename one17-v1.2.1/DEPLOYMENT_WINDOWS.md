# One17 Enterprise Platform — Windows Server Production Deployment

Production target: **Windows Server, native** — the same stack shape already
proven in local dev (`README.md`), taken to a running platform behind a
Caddy reverse proxy with automatic TLS. This document is written for a
competent stranger who has never touched this repo before.

**Architecture, end state:**

```
                         Internet (port 443 only)
                                  |
                          [ Caddy service ]  <- automatic TLS, one17_caddy
                          /       |        \
              app.<domain>  portal.<domain>  api.<domain>
              (ops-ui        (portal-ui       (direct API
               static +       static +         passthrough —
               /api proxy)    /api proxy)      Swagger docs,
                    \             /             future non-browser
                     \           /              consumers)
                      v         v
                [ One17-API service ]  <- Node, includes the in-process
                        |                  scheduler (SchedulerModule)
                        v
              [ PostgreSQL 16 service ]
                        |
              one17_app (owner/migrator)   one17_runtime (least-privilege,
              — DDL, runs migrations         DML only — this is what the
                only                         running API actually connects as
```

Two Windows Services, one reverse proxy, one database, one scheduled backup
task. `docker-compose.yml` remains in the repo as an alternative path for a
future Linux/cloud migration — it is not part of this deployment.

---

## 1. Prerequisites

Before running anything:

1. **Windows Server** (2022 or later recommended — `winget` ships by
   default on 2025; on 2022 install "App Installer" from the Microsoft
   Store first, or install Node/PostgreSQL manually and pass
   `-SkipNodeInstall -SkipPostgresInstall` to `install-one17.ps1`).
2. **PowerShell 5.1+** (ships with Windows Server). Run everything below
   from an elevated (Administrator) PowerShell prompt — service
   registration, firewall rules, and Task Scheduler all require it.
3. **Two third-party executables, downloaded manually from their official
   sites** (the installer deliberately does not auto-fetch binaries from
   the internet — see `install-one17.ps1`'s own header comment):
   - **NSSM** (Non-Sucking Service Manager): <https://nssm.cc/download> —
     extract `nssm.exe` (win64 build) to `deploy\windows\bin\nssm.exe`.
   - **Caddy**: <https://caddyserver.com/download> — the standard build is
     sufficient (no plugins needed for this Caddyfile). Place the
     downloaded `caddy.exe` at `deploy\windows\bin\caddy.exe`.
4. **The signed release ZIP (`one17-vX.Y.Z.zip`) and its `.sha256`
   checksum file, extracted on the target machine** (invariant 68a,
   CHECK22 v1.0.1 — BINARY RELEASE MODEL). This is a change from earlier
   builds of this document: the target machine no longer needs a git
   checkout, Node build toolchain, or internet access to fetch build
   dependencies — the ZIP already contains the compiled backend
   (`dist/`), both built UIs (`ops-ui/dist`, `portal-ui/dist`), and the
   generated Prisma Client (`generated/prisma`). **Before extracting,
   verify the checksum** (§2a below) — `install-one17.ps1` reads
   `-BundleSource` (defaults to two levels up from its own location,
   i.e. the extracted ZIP's root, since the script lives at
   `<bundle>\deploy\windows\install-one17.ps1`) and deploys a COPY to
   `-InstallRoot` (default `C:\One17`); the extracted copy itself is
   left untouched and can be discarded or kept for the update procedure
   (§7).
5. **Three DNS records**, pointed at this machine's public IP, before you
   run `register-caddy.ps1` (Caddy cannot issue TLS certificates until
   these resolve):
   - `app.<yourdomain>` — A/AAAA record for the ops UI
   - `portal.<yourdomain>` — A/AAAA record for the customer portal
   - `api.<yourdomain>` — A/AAAA record for direct API access
6. **The PostgreSQL cluster superuser password** — you'll be prompted for
   it once, interactively, by `install-one17.ps1` (never stored in any
   file this repo writes).

---

## 2. Running the installer

### 2a. Verify the checksum before extracting (invariant 68e)

Every release ships as `one17-vX.Y.Z.zip` alongside a `one17-vX.Y.Z.zip.sha256`
file (`scripts\build-release.ps1` produces both together — `release-ci.ps1`
prints both paths on a green run). **Do this before extracting or running
anything from the ZIP:**

```powershell
# PowerShell -- compare against the published hash
$expected = (Get-Content .\one17-v1.0.1.zip.sha256 -Raw) -split '\s+' | Select-Object -First 1
$actual = (Get-FileHash .\one17-v1.0.1.zip -Algorithm SHA256).Hash.ToLower()
if ($actual -ne $expected.ToLower()) { throw "CHECKSUM MISMATCH -- do not install this file." }
"Checksum verified."
```

If the hashes don't match, the ZIP was corrupted or tampered with in
transit — re-download it from the source you trust and verify again before
proceeding. Digital signing (beyond this checksum) activates once the
CEO-custodied code-signing key exists (invariant 69f); the checksum is the
available integrity check today.

Extract the ZIP, then run everything below from inside the extracted
folder's `deploy\windows\` directory.

### 2b. The three installer scripts

All three scripts live in `deploy\windows\` and are meant to be run in
order, from an elevated PowerShell prompt:

```powershell
cd C:\path\to\checkout\deploy\windows

# 1. Deploys the bundle's pre-built artifacts, installs runtime deps only
#    (no build), database, migrations, seed, first admin login.
#    Does NOT touch Windows Services, the Firewall, or Task Scheduler.
.\install-one17.ps1 -AppDomain app.one17capital.com -PortalDomain portal.one17capital.com -ApiDomain api.one17capital.com

# 2. Registers the API (includes the in-process scheduler) as a Windows
#    Service via NSSM — restart-on-failure, starts on boot.
.\register-services.ps1

# 3. Writes the Caddyfile, registers caddy.exe as a Windows Service, and
#    opens ONLY port 443 at the Windows Firewall.
.\register-caddy.ps1 -AppDomain app.one17capital.com -PortalDomain portal.one17capital.com -ApiDomain api.one17capital.com

# 4. Sets the backup passphrase and registers the daily backup Scheduled
#    Task. Requires an off-machine destination for the encrypted copy.
.\register-backup-task.ps1 -OffMachinePath '\\backup-server\one17\' 
# then reboot once before trusting the first scheduled run (script says why)
```

**Why steps 1 and 2–4 are separate scripts, not one big installer:** three
of those steps modify system-level state (Windows Service registration,
Windows Firewall rules, a Task Scheduler entry running as SYSTEM) that
deserves a deliberate, reviewable, separately-runnable action rather than
being buried inside a 200-line script an operator ran once and forgot the
details of. It also means re-running `install-one17.ps1` after a code
update (§7) never touches your firewall/service/schedule configuration by
accident — those three only change when YOU explicitly re-run them.

### What `install-one17.ps1` actually does, in order

**BINARY RELEASE MODEL (invariant 68a, CHECK22 v1.0.1):** this script never
runs `npm run build`, `nest build`, `vite build`, or `prisma generate`. It
deploys the bundle's OWN pre-built artifacts as-is — `dist/`, `ops-ui/dist`,
`portal-ui/dist`, `generated/prisma` all ship already compiled inside the
ZIP. No TypeScript compiler, Nest CLI, or frontend build toolchain is
required on the server at all; only Node.js (to run the already-compiled
`dist/src/main.js`) and PostgreSQL. This closes the independent v1.0.0
clean-room audit's C-01/C-02 findings — the earlier version of this
document (and of `install-one17.ps1`) ran a full build on the server,
which is no longer how a release is deployed.

1. Verifies the bundle it's being run from is complete (`dist/src/main.js`,
   `ops-ui/dist/index.html`, `portal-ui/dist/index.html`,
   `generated/prisma/client.js`, migrations, seed, `VERSION.json`, etc.) —
   fails loudly here, not halfway through database provisioning, if the
   ZIP extraction was truncated or the wrong artifact was pointed at.
2. Installs Node.js LTS and PostgreSQL 16 via `winget` if not already
   present (skip with `-SkipNodeInstall`/`-SkipPostgresInstall`).
3. Copies the bundle's pre-built artifacts (minus `node_modules`/`.git`) to
   `-InstallRoot` via `robocopy /MIR`. `VERSION.json` — already stamped by
   `build-release.ps1` with the commit hash + build timestamp — comes
   along as-is (also exposed at `GET /version` on the running API); this
   script does not re-derive it.
4. `npm ci --omit=dev` for the backend only — runtime dependencies from the
   shipped lockfile, no devDependencies (so no build tooling is pulled in
   even transitively). `ops-ui`/`portal-ui` need no install step: their
   `dist/` folders are static files Caddy serves directly, no Node process
   ever runs inside either directory in production.
5. Provisions the production database: creates `one17_app` (owner/
   migrator) and `one17_runtime` (least-privilege — DML only, via `ALTER
   DEFAULT PRIVILEGES` so future migrations' new tables are automatically
   covered) with randomly generated passwords, saved ONLY to
   `<InstallRoot>\.deploy-secrets.json` (see §4 below — **back this file
   up under the same access controls as your production secrets, then
   restrict its NTFS ACL to administrators only**).
6. Runs `npx prisma migrate deploy` (as `one17_app`) and `npm run db:seed`
   (config/reference data only — `prisma/seed.ts` creates zero people,
   zero investors, zero demo accounts; `audit_trail` starts genuinely
   empty, per `RUNBOOK.md` §4's production provisioning rule).
7. Prompts for an admin email/name/password and creates the first
   `SUPER_ADMIN` login via `scripts/bootstrap-admin.ts` (skip with
   `-SkipAdminBootstrap` to do this manually later — see §4).
8. Writes `.env.production` — the running app's `DATABASE_URL` points at
   `one17_runtime`, **never** `one17_app`; includes `TRUST_PROXY_HOPS=1`
   (invariant 68c, H-03 — `req.ip` resolves to the real client behind
   Caddy, not Caddy's own loopback address). NTFS ACLs on both
   `.env.production` and `.env` are restricted to SYSTEM/Administrators/
   the installing user (H-07, invariant 68c).

---

## 3. What `install-one17.ps1` deliberately does NOT do

Registering Windows Services, opening Windows Firewall ports, and creating
a SYSTEM-run Scheduled Task are all changes to this machine's security
posture — they're kept as separate, explicit scripts (§2 steps 2–4) that
you run and review on purpose, not folded into one script that does
everything silently. If you're auditing this deployment package: those
three scripts are the complete list of anything that touches Windows
Services/Firewall/Task Scheduler. Nothing else in `deploy\windows\` does.

---

## 4. Credential handoff

Four secrets exist after a full install, and none of them live in this
repository or in any file `git status` would ever show as trackable:

| Secret | Where it lives | Who needs it |
|---|---|---|
| `one17_app` / `one17_runtime` DB passwords | `<InstallRoot>\.deploy-secrets.json` | Whoever administers the database (restore drills, manual migrations). Restrict this file's NTFS ACL to administrators; back it up encrypted, same tier as the DB itself. |
| First `SUPER_ADMIN` login password | Set interactively during install, never written anywhere | The person who ran the install, relayed out-of-band (same handoff pattern `PortalAuthService`'s own header comment documents for investor/counterparty portal bootstrap passwords) to whoever will administer RBAC day one. Add every other staff account through the live RBAC_CONFIG screen (invariant 39a task #161) — never re-run `bootstrap-admin.ts` for anyone but the very first login. |
| Backup encryption passphrase | Machine environment variable `ONE17_BACKUP_PASSPHRASE`, set by `register-backup-task.ps1` | Whoever might need to run `restore.ps1` during an incident. Store a copy in your organization's actual secrets manager (1Password, Azure Key Vault, whatever you already use) — this document is not that secrets manager. |
| Backup-run report token (optional, RES-001 F-02) | Machine environment variable `ONE17_BACKUP_REPORT_TOKEN`, set by `register-backup-task.ps1`; the SAME value must also be set as `BACKUP_REPORT_TOKEN` in `.env.production` | Whoever administers the backup task. Without it, `backup.ps1` still runs the backup itself but skips reporting the run to the app (logged as a WARNING) — a purely additive feature, never a precondition for backups to work. |

---

## 5. Backup verification

RES-001 F-02 (CHECK23, v1.0.2): `backup.ps1` reports every run's outcome
(SUCCEEDED or FAILED) to `POST /ops/backup-runs/report`, provided both
`ONE17_BACKUP_REPORT_TOKEN` (machine env var, `register-backup-task.ps1`
prompts for it) and `BACKUP_REPORT_TOKEN` (same value, `.env.production`)
are set — otherwise `backup.ps1` still runs the backup itself and just
skips the report, logged as a WARNING, never fatal. A failure now shows up
in the ops-ui health view (Administration → Platform Health) instead of
only in this box's local `backup.log` — "a silently failing backup is the
worst kind" (CEO directive, CHECK23).

`backup.ps1` (run daily by the Scheduled Task, or manually) produces an
AES-256-CBC-encrypted `pg_dump -F c` file at
`<BackupDir>\<DbName>_<UTC-timestamp>.dump.enc`, copies it to
`-OffMachinePath`, and applies retention. Verify the whole pipeline works
BEFORE you need it in an emergency:

```powershell
# 1. Fire the scheduled task manually and check its log.
Start-ScheduledTask -TaskName 'One17-Backup'
Get-Content C:\One17\backups\backup.log -Tail 30

# 2. Confirm the encrypted file landed both locally and off-machine.
Get-ChildItem C:\One17\backups\*.dump.enc | Select -Last 1
Get-ChildItem '\\backup-server\one17\*.dump.enc' | Select -Last 1

# 3. Full restore drill — decrypt + restore into a SCRATCH database,
#    never over the live one (mirrors RUNBOOK.md's dev drill exactly).
.\restore.ps1 -EncryptedFile 'C:\One17\backups\one17_production_20260101T020000Z.dump.enc' -TargetDbName 'one17_restore_drill'

# 4. Verify: row counts match, audit_trail tamper hashes match byte-for-
#    byte on the most recent rows, and the insert-only triggers still
#    reject UPDATE/DELETE on the restored copy — same three checks
#    RUNBOOK.md §3 documents for the dev drill.

# 5. Clean up the scratch database when done.
& 'C:\Program Files\PostgreSQL\16\bin\dropdb.exe' -U one17_app one17_restore_drill
```

Run this drill on a schedule (quarterly at minimum) — a backup you've
never tested restoring is a hope, not a backup.

---

## 6. Update procedure

```powershell
# 1. Stop services (order matters — Caddy can stay up and will just show
#    connection-refused briefly rather than a DNS/TLS error).
nssm.exe stop One17-API

# 2. Download the new release ZIP + its .sha256 file, verify the checksum
#    (§2a — do this before extracting), then extract to a working folder
#    (does NOT need to be -InstallRoot itself; the installer copies FROM
#    here TO -InstallRoot).
cd C:\path\to\new-release
Expand-Archive .\one17-v1.0.2.zip -DestinationPath .

# 3. Re-run the installer, pointed at the newly extracted bundle, against
#    the SAME -InstallRoot and -DbName — it is idempotent: it will NOT
#    recreate the database, NOT rotate any password, NOT re-run
#    bootstrap-admin (already-SUPER_ADMIN emails are a no-op). It WILL
#    re-copy the new bundle's pre-built artifacts (robocopy /MIR — no
#    build step, per §2), reinstall runtime deps, and apply any NEW
#    migrations (`prisma migrate deploy` only applies what hasn't run yet).
cd one17-v1.0.2\deploy\windows
.\install-one17.ps1 -AppDomain app.one17capital.com -PortalDomain portal.one17capital.com -ApiDomain api.one17capital.com -SkipAdminBootstrap

# 4. Restart the service to pick up the new build.
.\register-services.ps1 -Restart

# 5. If the Caddyfile-affecting parameters (domains, API port) didn't
#    change, Caddy does not need touching. If they did:
.\register-caddy.ps1 -AppDomain app.one17capital.com -PortalDomain portal.one17capital.com -ApiDomain api.one17capital.com -Restart

# 6. Verify.
Invoke-RestMethod https://api.one17capital.com/version
```

---

## 7. Rollback via backup restore

If an update introduces a defect that data has already been written
against, or a migration needs to be undone:

1. **Stop the API service immediately** (`nssm.exe stop One17-API`) to
   stop new writes.
2. Identify the most recent GOOD backup (before the defect started
   writing bad data) — check `backup.log` timestamps against your incident
   timeline.
3. Restore it into a scratch database per §5's drill procedure.
4. Verify the scratch restore (row counts, tamper hashes, triggers).
5. **Cut over** — this is a deliberate, manual decision, not automated by
   `restore.ps1` (accepting the data-loss window between the backup
   timestamp and the incident is an operator call): rename the live
   database aside (`ALTER DATABASE one17_production RENAME TO
   one17_production_incident_<date>`), rename the scratch restore to
   `one17_production`, confirm `.env.production`'s `DATABASE_URL` still
   points at the same database name (it does, by design — only the
   underlying data changed).
6. If the defect was introduced by a migration, also roll back the code:
   extract the last-known-good release ZIP (verify its checksum first,
   §2a) and repeat the update procedure (§6) against it — **do not**
   attempt to run migrations backward; this project has no
   down-migrations by design (forward-only, per the existing
   `prisma/migrations/` discipline).
7. Restart the API service.
8. Root-cause the defect before repeating the update.

---

## 8. Troubleshooting

```powershell
# Service status / logs
Get-Service One17-API, One17-Caddy
Get-Content C:\One17\logs\api-stdout.log -Tail 100 -Wait
Get-Content C:\One17\logs\api-stderr.log -Tail 100 -Wait
Get-Content C:\One17\logs\caddy-stderr.log -Tail 100 -Wait

# Confirm what's actually deployed
Invoke-RestMethod https://api.one17capital.com/version

# Confirm firewall posture (should show ONLY the 443 rule as Allow/Inbound
# for anything One17-related)
Get-NetFirewallRule -Direction Inbound -Action Allow | Where-Object Enabled -eq True | Select DisplayName

# Confirm the scheduled backup task
Get-ScheduledTask -TaskName One17-Backup | Get-ScheduledTaskInfo
```

## 9. PowerShell script-authoring lessons (CHECK11, invariant 49e)

Two real failure modes hit while authoring the internal `.ps1` runner scripts this project
ships (`install-one17.ps1`, `deploy/windows/*.ps1`, `scripts/run-invariant48-walkthrough.ps1`)
— captured here so they aren't rediscovered the next time someone writes or hands off a new one.

**Windows PowerShell 5.1 reads a `.ps1` file without a byte-order-mark (BOM) using the system
ANSI codepage, not UTF-8.** A non-ASCII character anywhere in the file — an em dash, a smart
quote, a curly apostrophe pasted from a Word doc or a chat client — decodes as a stray byte under
the ANSI codepage and can desync string/quote parsing for the rest of the file, producing
confusing errors far from the actual bad character. Two defenses, both cheap:
- Write `.ps1` files in pure ASCII (plain hyphens for dashes, straight quotes) rather than relying
  on the editor's encoding.
- Before handing a new script to someone else to run, parse-check it without executing it:
  `[System.Management.Automation.Language.Parser]::ParseFile('path\to\script.ps1', [ref]$null, [ref]$null)`
  — this only parses, it never touches a database or the filesystem, so it's safe to run against
  a script whose logic you haven't reviewed line-by-line yet.

**A freshly authored or freshly downloaded `.ps1` file may refuse to run at all under the default
execution policy**, either because the machine's policy is `Restricted` (scripts disabled
entirely) or because the file carries an NTFS "downloaded from the internet" zone marker (common
for anything transferred via email/chat/browser) that trips `RemoteSigned`'s signature check even
when the local policy would otherwise allow it. Diagnose and fix, in order:
- `Get-ExecutionPolicy -List` shows the effective policy per scope (MachinePolicy, UserPolicy,
  Process, CurrentUser, LocalMachine) — the first non-`Undefined` one wins.
- If the block is the internet zone marker specifically: `Unblock-File -Path .\script.ps1`.
- For a one-off internal script (like this project's runners), the least-disruptive fix is a
  process-scoped bypass that reverts the moment the shell closes — it changes nothing persistent
  on the machine: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.
- Avoid `Set-ExecutionPolicy -Scope LocalMachine` or `-Scope CurrentUser` for a one-off script —
  that's a persistent, system-wide security posture change for a problem that only needed to be
  solved for one run.

**Read-only post-run verification is the standing pattern for confirming what a script actually
did, without any risk of the confirmation step itself mutating state** — `scripts/
invariant48-verify.ts` is the reference example: every query in the file is a `findMany`/
`findUnique`/`count` (grep the file for `create`/`update`/`delete`/`upsert` — there are none), it
targets the same session-scoped `DATABASE_URL` override the run itself used (never the default
`.env` target), and it prints its findings in labelled sections that map 1:1 onto the spec clauses
being verified, so the output can be pasted directly into an exit report or evidence pack as the
proof, not just a "trust me, it worked." Reuse this shape — a plain read-only script, sectioned
output, explicit target confirmation — for any future run (migration, seed, batch job) that needs
independently-checkable evidence of its resulting state.

---

## 10. CHECK16 62(j) — fresh-install replay verification against HEAD

This pack was refreshed and re-verified against the CHECK16 tranche's own HEAD (post-invariant
62(a)-(l)). Two things were checked, and the scope of each is stated plainly so a reader doesn't
mistake a partial verification for a full one:

**1. Every environment variable the running app actually reads (`grep -rhoE
"process\.env\.[A-Z_][A-Z0-9_]*"` across `src/`, `ops-ui/src/`, `portal-ui/src/`, `scripts/`,
`deploy/`) was cross-checked against §4's table and `.env.production.example`.** Result: no new
production-relevant variable exists — `.env.production.example` already documents all four
(`NODE_ENV`, `PORT`, `DATABASE_URL`, `OPS_UI_ORIGIN`/`PORTAL_UI_ORIGIN`) the running service reads.
Everything else the grep surfaced (`ADMIN_EMAIL`/`ADMIN_NAME`/`ADMIN_PASSWORD`,
`SMOKE_STAFF_EMAIL`/`SMOKE_STAFF_PASSWORD`, `WALKTHROUGH_STAFF_PASSWORD`/
`WALKTHROUGH_PORTAL_PASSWORD`, `CLIENT_COUNT`, `OPS_API_URL`) is bootstrap-script/smoke-test/
walkthrough-only, correctly excluded from a production reference file — same scoping discipline
this file has followed since it was first written (§4/task #180).

**2. The exact build commands `install-one17.ps1` runs were replayed for real, on HEAD** — `npm
run build` (API, `nest build`), and `npm run build` (`ops-ui`, `portal-ui`, each `tsc -b && vite
build`) — all three completed with zero errors. This is the actual risk surface a stale pack would
expose (a build that silently stopped compiling since the doc was last touched); it is real
evidence, not a description. All six `deploy\windows\*.ps1` scripts were also parse-checked with
the `[System.Management.Automation.Language.Parser]::ParseFile(...)` technique §9 documents — zero
syntax errors.

**What this replay deliberately did NOT do**, and why: it did not provision a database role, write
`.env.production`, register a Windows Service, open a firewall port, or register the backup
Scheduled Task. Those five actions mutate this MACHINE's actual system state (services, firewall,
task scheduler) and/or create a new `one17_production` database — appropriate for a real target
server being stood up for the first time, not for a re-verification pass run on a shared
development machine mid-session. The build-command replay above is the part of `install-one17.ps1`
that HEAD's own code changes could actually break (a compile error, a missing script, a renamed
export); the system-provisioning steps are unchanged shell/SQL/XML that this document's own §2-§7
already describe in full and that CHECK8's original build (`install-one17.ps1` written from
scratch, tasks #176-#184) already exercised for real on first authorship. A genuinely fresh target
server should still run the full `install-one17.ps1` → `register-services.ps1` →
`register-caddy.ps1` → `register-backup-task.ps1` sequence in §2 end to end before going live —
this replay is what confirms HEAD is safe to hand to that operator, not a substitute for their own
first real run.

---

## 11. Activation sequence (CHECK16 62(k), recorded intent)

This section records the intended order of events from "pack verified" to "platform live" — it
is a recorded plan, not a trigger. Nothing in this section executes anything; activation itself
remains a deliberate, CEO-authorized action taken when the six go-live readiness gates below have
actually passed.

**Step 1 — Server install from this refreshed pack.** §2's four-script sequence, run on the real
production target, by an operator with the credentials §4 describes.

**Step 2 — System setup via the Data Migration tool** (`src/migration/` — `DATA_MIGRATION`
capability, ops-ui's Data Migration screen, task #172). This is a SEPARATE mechanism from the
six go-live gates below — it has its own per-template row-level validation gates plus a numbered
set of Reconciliation Gates (`MigrationService.runReconciliationGates()` — e.g. Gate 1 checks
each fund account's `unitsHeld` reconciles to its TPL_05 transaction history) that every batch
must clear before promotion. In order:
  - Real Charts of Accounts loaded, including the team's new charts, once FinCon signs off on the
    mapping sheet (go-live gate 1 below — this step cannot start before that signature exists).
  - TPL_01 through TPL_13 template loads, each validated through its own gate machinery
    (`generateValidationReport`) before promotion — never promoted un-validated.
  - Opening balances entered and reconciled via the Reconciliation Gates, per the staggered
    cut-over dates when the business rules them (per-product-class cut-over, not necessarily a
    single date — the migration batching already supports this: `MigrationBatch` is scoped per
    TPL code, not an all-or-nothing platform-wide load).

**Step 3 — The six go-live readiness gates remain the actual switch**, unchanged by this pack
refresh or by CHECK16's build work — CLAUDE.md's own text (invariant 55(d)'s closing clause)
is the authoritative source, reproduced here so this document is self-contained for whoever runs
the sequence:

  1. FinCon mapping sheet signed → CHECK11 wirings built.
  2. Genuine SSB (Shariah Supervisory Board) resolution refs recorded on production products.
  3. Board-approved risk appetite matrix ACTIVE (not DRAFT — `RiskAppetiteMatrixVersion.status`).
  4. TPL migration executed + opening balances reconciled (Step 2 above, completed and passed).
  5. Security hardening complete — secrets vault, dev-password purge, MFA, backup-restore drill
     (§5 above), penetration test. Invariant 62(a)'s rate-limiting/helmet/CORS-allowlist/`/health`
     additions are PART of this gate, not a substitute for the rest of it (the pen test in
     particular has not run — CHECK16's own directive rebutted the external review's other claims
     but left this genuine item standing, joining the hardening gate before the pen test per the
     CEO's own framing).
  6. Witnessed UAT sign-off vs the UAT Authority + Controls Register reissued (the register this
     pass would reissue is `docs/GENERATED_CONTROLS_REGISTER_v*.md`'s next version, regenerated
     the same way v1 through v5 already were — `scripts/generate-controls-register.ts` if that
     script exists at reissue time, otherwise by hand against the same template).

Development completion — everything CHECK1 through CHECK16 built — does **not** itself flip any
of these six. They are stated here as a checklist an operator/CEO can literally tick off, not as
work items for the builder to close autonomously; several (SSB resolution refs, Board risk
appetite approval, the witnessed UAT session itself) are inherently human, off-platform actions
no amount of further code changes can satisfy.

**Parallel-run length compression** (running the new platform alongside the legacy process for a
shorter overlap than originally planned) **is an explicit CEO risk acceptance, recorded when
decided** — not a default assumption of this sequence.

---

## 12. CHECK22 v1.0.1 — release engineering & security hardening (binary release model)

This pack was rewritten for invariant 68 (CEO directive, 10-Jul-2026 — CHECK22, responding to the
independent v1.0.0 clean-room audit). Three changes to how a release is built and installed, all
reflected in the sections above rather than repeated here:

1. **Binary release model (§2, closes C-01/C-02).** The bundle now ships compiled artifacts as
   the DEPLOYED artifact — `install-one17.ps1` never builds anything on the server. §1 item 4 and
   §2's numbered sequence were rewritten to match; anyone who deployed v1.0.0 following the
   earlier version of this document (which ran a full `npm run build` server-side) is reading a
   superseded procedure — re-read §2 before your next install or update.
2. **Checksum verification (§2a, invariant 68e).** Every release now ships a `.sha256` file
   alongside the ZIP (`scripts/build-release.ps1` produces both; `scripts/release-ci.ps1` is the
   single sanctioned command that produces a release end-to-end — see below). Verify it before
   extracting.
3. **Clean-room QA gate (invariant 68b, closes C-05).** The v1.0.0 release's Leg 3 (fresh-install
   replay) ran `npm ci` + `prisma generate` inside `release\one17-vX.Y.Z`, a folder sitting next
   to this dev checkout — non-clean-room, and formally superseded. `scripts/release-qa-gate.ps1`'s
   Leg 3 now extracts the release ZIP into a fresh, empty temp directory and runs
   `scripts/clean-room-replay.ps1` (shipped INSIDE the bundle, at `<bundle>\scripts\
   clean-room-replay.ps1`) from inside it — the same disposable-environment script an operator can
   run standalone to prove a downloaded bundle installs itself with nothing else present:
   ```powershell
   # From the root of an already-extracted release ZIP, nothing else needed:
   .\scripts\clean-room-replay.ps1 -DatabaseUrl "postgresql://user:pass@host:5432/postgres"
   ```
4. **`scripts/release-ci.ps1` (invariant 68e / RES-001 RE-04) is now the only sanctioned way to
   cut a release** — one command runs build → bundle → clean-room gate identically every time:
   ```powershell
   .\scripts\release-ci.ps1 -Version 1.0.1
   ```
   Manual assembly of a release bundle outside this script is prohibited (invariant 69a-ii).

See `CHECK22_EVIDENCE.md` for the full audit findings checklist and the five-bin endpoint triage
this tranche also closed.
