<#
.SYNOPSIS
  One17 disposable-environment clean-room replay (invariant 68b, CHECK22
  v1.0.1 remediation) -- ships INSIDE the release bundle so an operator
  (or the CI script) can prove the bundle installs itself with nothing
  else present, without needing the dev repo or this script's source
  checkout at all.

.DESCRIPTION
  Must be run from the ROOT of an already-extracted bundle (the folder
  containing package.json, dist/, generated/, prisma/, scripts/ -- i.e.
  wherever the release ZIP was unzipped to). Does NOT assume a dev
  checkout, .git, or any file outside this bundle folder exists.

  Binary release model (invariant 68a): no build step runs here.
  `npm ci --omit=dev` installs RUNTIME dependencies only, exactly what
  install-one17.ps1 does in production -- dist/, ops-ui/dist,
  portal-ui/dist and generated/prisma all ship pre-built in the ZIP.
  This script never runs `npm run build`, `nest build`, `vite build`, or
  `prisma generate`.

  Sequence: install -> create a fresh scratch DB -> migrate -> seed ->
  boot the compiled app -> confirm the Activation Console renders step 1
  -> drop the scratch DB. The scratch DB is created and dropped
  unconditionally (even on failure), so re-running this script never
  accumulates state.

.PARAMETER DatabaseUrl
  Any valid Postgres connection string for the target server (the
  scratch database itself is created/dropped by this script -- point
  this at an admin-capable connection, e.g. postgresql://user:pass@host:5432/postgres).

.PARAMETER ReplayDbName
  Scratch database name. Default: one17_clean_room_replay.

.EXAMPLE
  .\scripts\clean-room-replay.ps1 -DatabaseUrl "postgresql://postgres:pw@localhost:5432/postgres"
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$DatabaseUrl,
  [string]$ReplayDbName = 'one17_clean_room_replay'
)

$ErrorActionPreference = 'Stop'
# If you're piping this script's own invocation for logging, use
# Start-Transcript/Stop-Transcript, NOT `*>&1 | Tee-Object` (or `2>&1`) --
# see build-release.ps1's own header comment for the reproduced mechanism.
$bundleRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

function Write-Step($msg) { Write-Host "`n=== $msg ===" -ForegroundColor Cyan }
function Write-Ok($msg) { Write-Host "OK: $msg" -ForegroundColor Green }

function Get-ScratchUrl($baseUrl, $dbName) {
  return [regex]::Replace($baseUrl, '(?<=\/)[A-Za-z0-9_]+(?=\?|$)', $dbName)
}

foreach ($required in @('package.json', 'dist\src\main.js', 'generated\prisma', 'prisma\migrations', 'scripts\create-walkthrough-db.ts', 'scripts\drop-database.ts')) {
  if (-not (Test-Path (Join-Path $bundleRoot $required))) {
    throw "Bundle is missing '$required' -- this script must be run from the root of an extracted release ZIP, not a dev checkout."
  }
}

$failed = $false
Push-Location $bundleRoot
try {
  Write-Step 'Installing runtime dependencies only (npm ci --omit=dev -- no build toolchain, binary release model)'
  Remove-Item Env:\DATABASE_URL -ErrorAction SilentlyContinue
  npm ci --omit=dev
  if ($LASTEXITCODE -ne 0) { throw 'npm ci --omit=dev failed' }
  Write-Ok 'Runtime dependencies installed'

  Write-Step "Creating scratch database `"$ReplayDbName`""
  $env:DATABASE_URL = $DatabaseUrl
  npx tsx scripts/create-walkthrough-db.ts $ReplayDbName
  if ($LASTEXITCODE -ne 0) { throw 'Scratch database creation failed' }

  $replayUrl = Get-ScratchUrl $DatabaseUrl $ReplayDbName
  $env:DATABASE_URL = $replayUrl
  Write-Ok "Scratch DATABASE_URL set (database: $ReplayDbName)"

  Write-Step 'Running migrations against the scratch DB'
  npx prisma migrate deploy
  if ($LASTEXITCODE -ne 0) { throw 'prisma migrate deploy failed' }

  Write-Step 'Running the production seed against the scratch DB'
  npm run db:seed
  if ($LASTEXITCODE -ne 0) { throw 'db:seed failed' }

  Write-Step 'Booting the compiled app and checking the Activation Console renders step 1'
  node dist\src\release-replay.smoke.js
  if ($LASTEXITCODE -ne 0) { throw 'release-replay.smoke.js failed' }

  Write-Ok 'Clean-room replay passed: install (--omit=dev, no build) -> migrate -> seed -> boot -> Activation Console step 1'
} catch {
  Write-Host "`nCLEAN-ROOM REPLAY FAILED: $($_.Exception.Message)" -ForegroundColor Red
  $failed = $true
} finally {
  Write-Host "`nDropping scratch database `"$ReplayDbName`"..."
  $env:DATABASE_URL = $DatabaseUrl
  npx tsx scripts/drop-database.ts $ReplayDbName
  Remove-Item Env:\DATABASE_URL -ErrorAction SilentlyContinue
  Pop-Location
}

if ($failed) { exit 1 }
exit 0
