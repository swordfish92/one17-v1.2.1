<#
.SYNOPSIS
  One17 v1.0.1 release QA gate (invariant 68b, CHECK22 v1.0.1
  remediation -- supersedes the v1.0.0 gate this same file used to run)
  -- the mandatory gate a release bundle must pass before it is tagged
  and shipped.

.DESCRIPTION
  Three legs, all mandatory:
    1. Full smoke suite, MINUS 5 named post-activation-only files
       (`npm run smoke:all:ephemeral`), against a FRESH, EPHEMERAL,
       migrated + seeded scratch database -- created and dropped by this
       leg alone (invariant 69, CHECK23 v1.0.2: "all three legs
       deterministic, no shared-DB residue explanations ever again").
       This supersedes the v1.0.1 gate's dev-DB Leg 1 (see git history
       for that version's own investigation notes). What CHECK23 found,
       live, investigating exactly why a bare DB used to fail ~10 files:
         - 6 of the 10 were a REAL seed.ts bug: the system-scheduler
           service account (`system-scheduler@one17.test`) was looked
           up via a plain `findFirst`, never created, so ~8 governed
           config blocks silently skipped on any DB where no scheduled
           job had ever fired yet (every real production install via
           install-one17.ps1, not just this gate). Fixed in seed.ts to
           eagerly find-or-create the account, mirroring
           SchedulerService.systemSchedulerUserId()'s own logic exactly.
         - The other 4 are NOT a seed.ts bug -- each traces to a
           SPECIFIC, named governed action that a bare seed deliberately
           never performs ("park, don't invent"): kri-engine.smoke.ts
           needs a Board-ACTIVATED risk appetite matrix;
           audit-trail-viewer.smoke.ts needs the COMPANY ledger_entity
           row the Activation Console creates; migration.smoke.ts needs
           real TPL_01-13 workbook CSV staging data; regulatory-
           reporting.smoke.ts needs staff-configured regulator_template
           rows.
         - A 5th, pms.smoke.ts, surfaced on this leg's own FIRST real run
           (against the genuinely ephemeral DB, not a hypothesis) --
           same category: it needs an ACTIVE emolument_structure row for
           (PORTFOLIO/SENIOR/"Snr Associate 1"/notch 2) that the file's
           own header comment traces to TPL_09 migration-replay CSV data,
           never seed.ts content.
         `scripts/run-all-smoke.ts`'s own header comment names these 5
         permanently -- `--exclude-post-activation` skips exactly them,
         nothing else. Every OTHER CHECK tranche's own re-run, and a
         developer's plain `npm run smoke:all`, still get the full,
         unfiltered 79-file set against whatever DB they point at.
    2. Compiled boot check (npm run smoke:boot), same ephemeral scratch
       DB -- proves the compiled app resolves its full DI graph and
       serves HTTP against the same deterministic state Leg 1 just used.
    3. CLEAN-ROOM FRESH-INSTALL REPLAY (invariant 68b -- the v1.0.0 pass
       this leg used to run was NON-clean-room: it operated on
       release\one17-v$Version, a folder sitting right next to this dev
       checkout, and ran a full `npm ci` + `npx prisma generate` --
       i.e. it proved the bundle installs when the dev repo's own
       toolchain and a build step are available nearby, which a real
       operator's server never has. That pass is formally superseded.
       This leg now: (a) extracts the release ZIP into a FRESH, EMPTY
       temp directory containing nothing else -- no repo alongside, no
       globally-resolvable config; (b) invokes clean-room-replay.ps1
       FROM INSIDE that extracted bundle -- the same script the bundle
       itself ships to operators, so this leg also proves the shipped
       script works, not a parallel dev-only path; (c) that script runs
       `npm ci --omit=dev` only (binary release model, invariant 68a --
       no build, no `prisma generate`, since dist/ and generated/prisma
       ship pre-built in the ZIP) then migrate -> seed -> boot -> confirm
       the Activation Console renders step 1, against its own scratch
       database (a true, untouched Day-0 state), created and dropped
       just for this run. The temp extraction directory is removed
       afterward regardless of outcome. "A release that hasn't installed
       itself from its own bundle doesn't ship" (invariant 67a) -- this
       is that installation, now genuinely clean-room, and it is
       deliberately the ONLY leg that exercises a bare database, since
       that is what it exists to prove.

  Exits non-zero on the first failed leg. On a clean run, prints the git
  tag command as the final human action (tagging is deliberately not
  automated -- it is the CEO's own go/no-go signature on the release).

.PARAMETER Version
  Must match the version build-release.ps1 was run with.

.PARAMETER ZipPath
  Path to the release ZIP. Default: release\one17-v$Version.zip
  (build-release.ps1's own default output location).

.PARAMETER ReplayDbName
  Scratch database for leg 3. Default: one17_release_replay. Created
  fresh and dropped at the end of every run (including a failed one).

.PARAMETER LegDbName
  Scratch database for legs 1+2 (CHECK23, v1.0.2). Default:
  one17_release_gate_scratch. Created fresh (migrate + seed), used for
  BOTH legs, then dropped at the end of every run (including a failed
  one) -- same "created and dropped unconditionally" discipline
  clean-room-replay.ps1 already uses for leg 3's own scratch DB.

.EXAMPLE
  .\release-qa-gate.ps1 -Version 1.0.1
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Version,
  [string]$ZipPath = (Join-Path $PSScriptRoot "..\release\one17-v$Version.zip"),
  [string]$ReplayDbName = 'one17_release_replay',
  [string]$LegDbName = 'one17_release_gate_scratch'
)

$ErrorActionPreference = 'Stop'
# If you're piping this script's own invocation for logging, use
# Start-Transcript/Stop-Transcript, NOT `*>&1 | Tee-Object` (or `2>&1`) --
# see build-release.ps1's own header comment for the reproduced mechanism.
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

function Write-Step($msg) { Write-Host "`n=== $msg ===" -ForegroundColor Cyan }
function Write-Ok($msg) { Write-Host "OK: $msg" -ForegroundColor Green }
function Write-GateFail($msg) { Write-Host "`nGATE FAILED: $msg" -ForegroundColor Red }
function Get-ScratchUrl($baseUrl, $dbName) {
  return [regex]::Replace($baseUrl, '(?<=\/)[A-Za-z0-9_]+(?=\?|$)', $dbName)
}

if (-not (Test-Path $ZipPath)) {
  throw "Release ZIP not found at $ZipPath -- run .\build-release.ps1 -Version $Version first."
}
$ZipPath = (Resolve-Path $ZipPath).Path

$originalDatabaseUrl = $env:DATABASE_URL
if (-not $originalDatabaseUrl) {
  # Fall back to .env, same convention every other operational script in
  # this repo uses (dotenv/config), so this gate works identically to
  # `npx tsx ...` invocations elsewhere.
  $envFile = Join-Path $repoRoot '.env'
  if (Test-Path $envFile) {
    $line = Get-Content $envFile | Where-Object { $_ -match '^DATABASE_URL=' } | Select-Object -First 1
    if ($line) { $originalDatabaseUrl = ($line -replace '^DATABASE_URL=', '') -replace '^"|"$', '' }
  }
}
if (-not $originalDatabaseUrl) { throw 'DATABASE_URL not set and not found in .env -- cannot proceed.' }

$gateFailed = $false
$legScratchUrl = Get-ScratchUrl $originalDatabaseUrl $LegDbName

Push-Location $repoRoot
try {
  # ---------------------------------------------------------------------
  # Legs 1+2 share one fresh ephemeral scratch DB (CHECK23, invariant 69):
  # create -> migrate deploy -> seed -> Leg 1 -> Leg 2 -> drop, unconditionally.
  # ---------------------------------------------------------------------
  Write-Step "Provisioning ephemeral scratch DB '$LegDbName' for legs 1+2"
  try {
    # create-walkthrough-db.ts only needs DATABASE_URL to resolve the
    # Postgres server (it always admin-connects via /postgres) -- point it
    # at the original DB explicitly rather than relying on its own
    # dotenv/config fallback.
    $env:DATABASE_URL = $originalDatabaseUrl
    npx tsx scripts/create-walkthrough-db.ts $LegDbName
    if ($LASTEXITCODE -ne 0) { throw "create-walkthrough-db.ts failed for '$LegDbName'" }

    $env:DATABASE_URL = $legScratchUrl
    npx prisma migrate deploy
    if ($LASTEXITCODE -ne 0) { throw 'prisma migrate deploy failed against the scratch DB' }
    npm run db:seed
    if ($LASTEXITCODE -ne 0) { throw 'db:seed failed against the scratch DB' }
    Write-Ok "Scratch DB '$LegDbName' created, migrated, and seeded"

    # -------------------------------------------------------------------
    # Leg 1: full smoke suite minus the 4 named post-activation-only
    # files, against the fresh ephemeral scratch DB.
    # -------------------------------------------------------------------
    Write-Step 'LEG 1/3: Full smoke suite, minus post-activation-only files (ephemeral scratch DB)'
    npm run smoke:all:ephemeral
    if ($LASTEXITCODE -ne 0) { Write-GateFail 'Full smoke suite'; $gateFailed = $true }
    else { Write-Ok 'Full smoke suite passed' }

    # -------------------------------------------------------------------
    # Leg 2: compiled boot check, same ephemeral scratch DB.
    # -------------------------------------------------------------------
    if (-not $gateFailed) {
      Write-Step 'LEG 2/3: Compiled boot check (same ephemeral scratch DB)'
      npm run smoke:boot
      if ($LASTEXITCODE -ne 0) { Write-GateFail 'Compiled boot check'; $gateFailed = $true }
      else { Write-Ok 'Compiled boot check passed' }
    }
  } finally {
    Write-Host "`nDropping ephemeral scratch DB '$LegDbName' ..."
    $env:DATABASE_URL = $originalDatabaseUrl
    npx tsx scripts/drop-database.ts $LegDbName
    if ($LASTEXITCODE -ne 0) {
      Write-Host "WARNING: failed to drop scratch DB '$LegDbName' -- drop it manually." -ForegroundColor Yellow
    }
  }
} finally {
  $env:DATABASE_URL = $originalDatabaseUrl
  Pop-Location
}

# ---------------------------------------------------------------------
# Leg 3: CLEAN-ROOM fresh-install replay -- extract the ZIP into a fresh
# empty temp directory (no repo alongside), then run the bundle's OWN
# clean-room-replay.ps1 from inside it.
# ---------------------------------------------------------------------
if (-not $gateFailed) {
  Write-Step 'LEG 3/3: Clean-room fresh-install replay (extracted ZIP alone, in an empty path)'
  $extractRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("one17-clean-room-" + [guid]::NewGuid().ToString('N'))
  New-Item -ItemType Directory -Force -Path $extractRoot | Out-Null
  try {
    $checksumPath = "$ZipPath.sha256"
    if (Test-Path $checksumPath) {
      $expected = (Get-Content $checksumPath -Raw) -split '\s+' | Select-Object -First 1
      $actual = (Get-FileHash -Path $ZipPath -Algorithm SHA256).Hash.ToLower()
      if ($actual -ne $expected.ToLower()) {
        throw "Checksum mismatch: $ZipPath does not match $checksumPath (expected $expected, got $actual)"
      }
      Write-Ok "SHA-256 checksum verified against $checksumPath"
    } else {
      Write-Host "WARNING: no checksum file found at $checksumPath -- run build-release.ps1's latest version to produce one." -ForegroundColor Yellow
    }

    Write-Host "Extracting $ZipPath into empty directory $extractRoot ..."
    Expand-Archive -Path $ZipPath -DestinationPath $extractRoot -Force

    # build-release.ps1 zips the bundle FOLDER (one17-v$Version\...), so
    # the extracted tree has one nested directory -- descend into it.
    $extractedBundle = Get-ChildItem -Path $extractRoot -Directory | Select-Object -First 1
    if (-not $extractedBundle) { throw "Extraction produced no bundle directory under $extractRoot" }
    Write-Ok "Extracted to $($extractedBundle.FullName) -- nothing else present in this directory"

    Push-Location $extractedBundle.FullName
    try {
      Write-Host 'Invoking the bundle''s own clean-room-replay.ps1 (the same script an operator runs)...'
      & (Join-Path $extractedBundle.FullName 'scripts\clean-room-replay.ps1') -DatabaseUrl $originalDatabaseUrl -ReplayDbName $ReplayDbName
      if ($LASTEXITCODE -ne 0) { throw 'clean-room-replay.ps1 failed' }
      Write-Ok 'Clean-room fresh-install replay passed: extracted ZIP, in an empty path, installed itself (--omit=dev, no build) and booted against a never-before-touched scratch DB'
    } finally {
      Pop-Location
    }
  } catch {
    Write-GateFail $_.Exception.Message
    $gateFailed = $true
  } finally {
    Write-Host "`nRemoving temp extraction directory $extractRoot ..."
    Remove-Item -Path $extractRoot -Recurse -Force -ErrorAction SilentlyContinue
    $env:DATABASE_URL = $originalDatabaseUrl
  }
}

if ($gateFailed) {
  Write-Host "`n============================================================" -ForegroundColor Red
  Write-Host "RELEASE QA GATE: FAILED. This bundle does not ship." -ForegroundColor Red
  Write-Host "============================================================" -ForegroundColor Red
  exit 1
}

Write-Host "`n============================================================" -ForegroundColor Green
Write-Host "RELEASE QA GATE: GREEN. one17-v$Version is ready to tag." -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host "`nNext (human action -- tagging is a go/no-go signature, not automated):"
Write-Host "  git tag -a v$Version -m `"One17 Enterprise Platform v$Version`"" -ForegroundColor Yellow
Write-Host "  git push origin v$Version" -ForegroundColor Yellow
