<#
.SYNOPSIS
  One17 Enterprise Platform - v1.0 release bundle builder (invariant 67a).

.DESCRIPTION
  Produces ONE versioned artifact from a clean build: compiled backend
  (dist/), built ops-ui + portal-ui, prisma migrations + the production
  seed (already demo-free by design -- zero fictional records; the
  walkthrough DB never ships), deploy/windows installer scripts, docs
  (DEPLOYMENT_WINDOWS.md, RUNBOOK.md, the User Manual, a freshly
  regenerated Governance Controls Register, WIRING_MANIFEST.md),
  CHANGELOG.md, and VERSION.json stamped from -Version.

  This script BUILDS and ASSEMBLES the bundle. It does not run the
  release QA gate (full smoke suite + compiled boot check + fresh-install
  replay) -- that is release-qa-gate.ps1, deliberately separate so the
  bundle can be assembled once and gated as many times as needed without
  rebuilding. "Tag v1.0 when CHECK20 closes" (invariant 67a) means the
  git tag is a human action taken after release-qa-gate.ps1 reports
  green, not something this script does itself.

.PARAMETER Version
  Semantic version for this release, e.g. "1.0.0". Used for the bundle
  folder/zip name and stamped into VERSION.json. Does not create a git
  tag -- see release-qa-gate.ps1 / the RUNBOOK for the tag step.

.PARAMETER OutputDir
  Where the assembled bundle folder and zip are written. Default:
  release\ (gitignored -- these are build artifacts, not source).

.EXAMPLE
  .\build-release.ps1 -Version 1.0.0
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Version,
  [string]$OutputDir = (Join-Path $PSScriptRoot '..\release')
)

$ErrorActionPreference = 'Stop'
# If you're piping this script's own invocation for logging, use
# Start-Transcript/Stop-Transcript, NOT `*>&1 | Tee-Object` (or `2>&1`).
# PowerShell 5.1 turns a merged native-command stderr line -- even a
# routine `npm warn deprecated ...` -- into a terminating error under
# EAP='Stop' when the outer call redirects that stream. Reproduced live
# during a CHECK23 release-ci run: identical invocation aborted on a
# plain npm deprecation warning with `*>&1 | Tee-Object`, and completed
# normally with Start-Transcript. None of the npm/npx/nest calls in this
# script redirect their own stderr, so this only bites a caller wrapping
# the top-level invocation -- a future CI integration (release-ci.ps1's
# own header notes a hosted CI service is a later upgrade) should use
# Start-Transcript for the same reason.
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

function Write-Step($msg) { Write-Host "`n=== $msg ===" -ForegroundColor Cyan }
function Write-Ok($msg) { Write-Host "OK: $msg" -ForegroundColor Green }

# This machine is x64, so npm never actually needs the win32-arm64-msvc
# optional-dependency variants of @node-rs/argon2, @unrs/resolver-binding,
# @rolldown/binding, or @tailwindcss/oxide -- but on this environment,
# something (observed repeatedly across separate `npm ci` runs during
# CHECK23) briefly locks the freshly-extracted .node binary before npm's
# own prune-mismatched-platform pass can delete it, so `npm ci` (which
# always wipes node_modules first) aborts with EPERM on that one file
# every time, even though nothing in this codebase ever imports it. Move
# any such directory out of node_modules before each `npm ci` -- moving
# (unlike deleting) succeeds even while the file inside is locked, since
# it only rewrites the parent directory entry, not the locked file's own
# handle. Best-effort: does not throw if nothing is found or a move fails.
function Clear-StaleArm64Optionals($nodeModulesPath) {
  if (-not (Test-Path $nodeModulesPath)) { return }
  $stray = Get-ChildItem -Path $nodeModulesPath -Recurse -Directory -Force -ErrorAction SilentlyContinue -Filter '*win32-arm64-msvc*' -Depth 2
  foreach ($dir in $stray) {
    $dest = Join-Path ([System.IO.Path]::GetTempPath()) ("one17-arm64-quarantine-" + [guid]::NewGuid().ToString('N'))
    try {
      Move-Item -Path $dir.FullName -Destination $dest -Force -ErrorAction Stop
      Write-Host "Moved stale win32-arm64-msvc optional out of the way: $($dir.FullName)" -ForegroundColor Yellow
    } catch {
      Write-Host "WARNING: could not clear $($dir.FullName) -- npm ci may fail on it: $($_.Exception.Message)" -ForegroundColor Yellow
    }
  }
}

Push-Location $repoRoot
try {
  # ---------------------------------------------------------------------
  # 1. Version + provenance
  # ---------------------------------------------------------------------
  Write-Step "Resolving version and commit"
  $commitHash = (git rev-parse HEAD 2>$null)
  if (-not $commitHash) { throw "Not a git checkout -- a release bundle must be built from a real commit, not a working copy with no history." }
  # Invariant 71(c): HARD-FAIL on any uncommitted change, not a warning.
  # This was ordered at the v1.0.2 round and the v1.1.0 candidate this
  # invariant corrects STILL only warned -- a real release bundle must be
  # reproducible from a real commit hash; a warning an operator can
  # scroll past is not a control. Third occurrence closes it.
  $gitStatus = git status --porcelain
  if ($gitStatus) {
    throw "Working tree has uncommitted changes -- a release bundle must be built from a clean, fully-committed working tree so its contents match a real commit hash (invariant 71(c)). Commit or stash your changes and re-run. Dirty files:`n$gitStatus"
  }
  $buildTimestamp = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')
  Write-Ok "Building One17 v$Version from commit $commitHash @ $buildTimestamp"

  # ---------------------------------------------------------------------
  # 2. Build backend, ops-ui, portal-ui (same sequence install-one17.ps1
  #    already proves works -- prisma generate before build, since nest
  #    build compiles src/ + prisma/ + scripts/ into one dist/ tree)
  # ---------------------------------------------------------------------
  Write-Step 'Building backend'
  Clear-StaleArm64Optionals (Join-Path $repoRoot 'node_modules')
  npm ci
  npx prisma generate
  npm run build
  $entryPoint = Join-Path $repoRoot 'dist\src\main.js'
  if (-not (Test-Path $entryPoint)) { throw "Expected build output at $entryPoint but it doesn't exist." }
  Write-Ok 'Backend built to dist\src\main.js'

  Write-Step 'Building ops-ui'
  $opsUiIndex = Join-Path $repoRoot 'ops-ui\dist\index.html'
  if (Test-Path $opsUiIndex) { Remove-Item $opsUiIndex -Force }
  Push-Location (Join-Path $repoRoot 'ops-ui')
  try {
    Clear-StaleArm64Optionals (Join-Path $repoRoot 'ops-ui\node_modules')
    npm ci
    if ($LASTEXITCODE -ne 0) { throw "ops-ui: npm ci failed (exit $LASTEXITCODE)" }
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "ops-ui: npm run build failed (exit $LASTEXITCODE)" }
  } finally { Pop-Location }
  if (-not (Test-Path $opsUiIndex)) { throw "Expected build output at $opsUiIndex but it doesn't exist." }
  Write-Ok 'ops-ui built to ops-ui\dist'

  Write-Step 'Building portal-ui'
  $portalUiIndex = Join-Path $repoRoot 'portal-ui\dist\index.html'
  if (Test-Path $portalUiIndex) { Remove-Item $portalUiIndex -Force }
  Push-Location (Join-Path $repoRoot 'portal-ui')
  try {
    Clear-StaleArm64Optionals (Join-Path $repoRoot 'portal-ui\node_modules')
    npm ci
    if ($LASTEXITCODE -ne 0) { throw "portal-ui: npm ci failed (exit $LASTEXITCODE)" }
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "portal-ui: npm run build failed (exit $LASTEXITCODE)" }
  } finally { Pop-Location }
  if (-not (Test-Path $portalUiIndex)) { throw "Expected build output at $portalUiIndex but it doesn't exist." }
  Write-Ok 'portal-ui built to portal-ui\dist'

  # ---------------------------------------------------------------------
  # 3. Regenerate the Governance Controls Register against current HEAD
  #    (invariant 45(b): "run at every CHECK gate" -- a release is one)
  # ---------------------------------------------------------------------
  Write-Step 'Regenerating Governance Controls Register'
  npx tsx scripts/generate-controls-register.ts
  $latestRegister = Get-ChildItem (Join-Path $repoRoot 'docs') -Filter 'GENERATED_CONTROLS_REGISTER_v*.md' |
    Where-Object { $_.Name -notmatch '\.diff\.md$' } |
    Sort-Object { [int]($_.BaseName -replace '.*_v') } -Descending |
    Select-Object -First 1
  Write-Ok "Latest Controls Register: $($latestRegister.Name)"

  # ---------------------------------------------------------------------
  # 4. VERSION.json + CHANGELOG.md
  # ---------------------------------------------------------------------
  Write-Step 'Stamping VERSION.json'
  $versionJson = @{ version = $Version; commit = $commitHash; builtAt = $buildTimestamp } | ConvertTo-Json
  Set-Content -Path (Join-Path $repoRoot 'VERSION.json') -Value $versionJson
  Copy-Item -Path (Join-Path $repoRoot 'VERSION.json') -Destination (Join-Path $repoRoot 'dist\src\VERSION.json') -Force
  Copy-Item -Path (Join-Path $repoRoot 'VERSION.json') -Destination (Join-Path $repoRoot 'ops-ui\dist\version.json') -Force
  Copy-Item -Path (Join-Path $repoRoot 'VERSION.json') -Destination (Join-Path $repoRoot 'portal-ui\dist\version.json') -Force
  Write-Ok "VERSION.json: $versionJson"

  Write-Step 'Updating CHANGELOG.md'
  $changelogPath = Join-Path $repoRoot 'CHANGELOG.md'
  $entryHeader = "## v$Version - $($buildTimestamp.Substring(0,10))"
  $existing = if (Test-Path $changelogPath) { Get-Content $changelogPath -Raw } else { "# One17 Enterprise Platform - Changelog`n`n" }
  if ($existing -notmatch [regex]::Escape($entryHeader)) {
    $recentCommits = (git log -20 --pretty=format:'- %s' | Where-Object { $_ -notmatch '^\- Merge ' })
    $entry = "$entryHeader`n`nCommit: $commitHash`n`n$($recentCommits -join "`n")`n`n"
    $newContent = $existing -replace '^(# One17 Enterprise Platform - Changelog\r?\n\r?\n)', "`$1$entry"
    if ($newContent -eq $existing) { $newContent = $entry + $existing }
    Set-Content -Path $changelogPath -Value $newContent
    Write-Ok "CHANGELOG.md updated with $entryHeader"
  } else {
    Write-Ok "CHANGELOG.md already has an entry for $entryHeader -- left as-is"
  }

  # ---------------------------------------------------------------------
  # 5. Assemble the bundle
  # ---------------------------------------------------------------------
  Write-Step 'Assembling release bundle'
  $bundleName = "one17-v$Version"
  $bundleDir = Join-Path $OutputDir $bundleName
  if (Test-Path $bundleDir) { Remove-Item $bundleDir -Recurse -Force }
  New-Item -ItemType Directory -Force -Path $bundleDir | Out-Null

  # Compiled backend
  Copy-Item -Path (Join-Path $repoRoot 'dist') -Destination (Join-Path $bundleDir 'dist') -Recurse
  # Generated Prisma Client (invariant 68a, binary release model): dist's
  # own compiled prisma.service.js does `require("../../generated/prisma/client")`
  # at a path relative to itself, so this directory must physically exist
  # at install time regardless of release model -- shipping it PRE-BUILT
  # here means install-one17.ps1 never runs `prisma generate` (or any
  # other codegen/compile step) on the server. Not committed to source
  # control (gitignored, like dist/) since it's a build output, not
  # something a human edits.
  if (-not (Test-Path (Join-Path $repoRoot 'generated\prisma'))) { throw "generated\prisma not found -- `npx prisma generate` must have run as part of the backend build step above." }
  Copy-Item -Path (Join-Path $repoRoot 'generated') -Destination (Join-Path $bundleDir 'generated') -Recurse
  # Built UIs
  Copy-Item -Path (Join-Path $repoRoot 'ops-ui\dist') -Destination (Join-Path $bundleDir 'ops-ui\dist') -Recurse
  Copy-Item -Path (Join-Path $repoRoot 'portal-ui\dist') -Destination (Join-Path $bundleDir 'portal-ui\dist') -Recurse
  # Full src/ -- discovered the hard way, via a live fresh-install replay
  # failure, that prisma/seed.ts is NOT a leaf script: it imports 4
  # roster/type modules from src/ directly, AND (CHECK15's permanent
  # APPROVE-implies-VIEW assertion) does its own fs.readdirSync over
  # src/ops-api/*.controller.ts to parse @RequiresCapability decorators
  # out of real route source at seed time -- a deliberately loud,
  # "throws rather than warns" governance check, not something to work
  # around by weakening it for a leaner bundle. `npm run db:seed` always
  # runs seed.ts via tsx against SOURCE, never dist/, so there is no
  # compiled substitute for this dependency -- shipping full src/ is the
  # correct fix, and it matches what deploy/windows/install-one17.ps1
  # already assumes (a full source checkout, not a lean compiled-only
  # tree) rather than inventing a second, thinner deployment shape this
  # codebase has never actually exercised.
  Copy-Item -Path (Join-Path $repoRoot 'src') -Destination (Join-Path $bundleDir 'src') -Recurse
  # Prisma (migrations + schema + seed -- seed runs via tsx at install
  # time, same as install-one17.ps1's existing `npm run db:seed`, so the
  # bundle ships package.json/lock too, not just dist/).
  New-Item -ItemType Directory -Force -Path (Join-Path $bundleDir 'prisma') | Out-Null
  Copy-Item -Path (Join-Path $repoRoot 'prisma\migrations') -Destination (Join-Path $bundleDir 'prisma\migrations') -Recurse
  Copy-Item -Path (Join-Path $repoRoot 'prisma\schema.prisma') -Destination (Join-Path $bundleDir 'prisma\schema.prisma')
  Copy-Item -Path (Join-Path $repoRoot 'prisma\seed.ts') -Destination (Join-Path $bundleDir 'prisma\seed.ts')
  # prisma.config.ts lives at the REPO ROOT (Prisma 7 convention), not
  # inside prisma/ -- migrate deploy fails with "datasource.url property
  # is required" without it, since DATABASE_URL alone isn't enough once
  # a prisma.config.ts is what the CLI expects to find.
  if (Test-Path (Join-Path $repoRoot 'prisma.config.ts')) {
    Copy-Item -Path (Join-Path $repoRoot 'prisma.config.ts') -Destination (Join-Path $bundleDir 'prisma.config.ts')
  }
  Copy-Item -Path (Join-Path $repoRoot 'package.json') -Destination (Join-Path $bundleDir 'package.json')
  Copy-Item -Path (Join-Path $repoRoot 'package-lock.json') -Destination (Join-Path $bundleDir 'package-lock.json')
  # scripts/ -- bootstrap-admin.ts and friends the installer shells out to
  Copy-Item -Path (Join-Path $repoRoot 'scripts') -Destination (Join-Path $bundleDir 'scripts') -Recurse
  # Deploy scripts
  Copy-Item -Path (Join-Path $repoRoot 'deploy') -Destination (Join-Path $bundleDir 'deploy') -Recurse
  # Docs (invariant 67a's named list)
  New-Item -ItemType Directory -Force -Path (Join-Path $bundleDir 'docs') | Out-Null
  Copy-Item -Path (Join-Path $repoRoot 'DEPLOYMENT_WINDOWS.md') -Destination (Join-Path $bundleDir 'DEPLOYMENT_WINDOWS.md')
  Copy-Item -Path (Join-Path $repoRoot 'RUNBOOK.md') -Destination (Join-Path $bundleDir 'RUNBOOK.md')
  # RES-001 F-... (CHECK23, v1.0.2 scope item 4): the evidence packs
  # themselves ship inside the bundle -- DEPLOYMENT_WINDOWS.md and
  # RES-001_Release_Engineering_Standard.md both already cross-reference
  # CHECK22_EVIDENCE.md by bare filename; before this, that reference
  # pointed at nothing once an operator only had the ZIP, not the dev
  # repo. Copied to the bundle ROOT (alongside RUNBOOK.md/
  # DEPLOYMENT_WINDOWS.md) so those bare-filename references resolve
  # unchanged. CHECK23_EVIDENCE.md is optional-if-present (won't exist on
  # a v1.0.1 rebuild run from this same script).
  Copy-Item -Path (Join-Path $repoRoot 'CHECK22_EVIDENCE.md') -Destination (Join-Path $bundleDir 'CHECK22_EVIDENCE.md')
  if (Test-Path (Join-Path $repoRoot 'CHECK23_EVIDENCE.md')) {
    Copy-Item -Path (Join-Path $repoRoot 'CHECK23_EVIDENCE.md') -Destination (Join-Path $bundleDir 'CHECK23_EVIDENCE.md')
  }
  Copy-Item -Path (Join-Path $repoRoot 'docs\One17_Platform_User_Manual_v1.md') -Destination (Join-Path $bundleDir 'docs\One17_Platform_User_Manual_v1.md')
  Copy-Item -Path $latestRegister.FullName -Destination (Join-Path (Join-Path $bundleDir 'docs') $latestRegister.Name)
  Copy-Item -Path (Join-Path $repoRoot 'docs\WIRING_MANIFEST.md') -Destination (Join-Path $bundleDir 'docs\WIRING_MANIFEST.md')
  # RES-001 (invariant 69): the standard itself ships in every compliant
  # release's bundle, not just referenced from the dev repo -- an operator
  # extracting only the ZIP must be able to read the standard the release
  # claims compliance with.
  Copy-Item -Path (Join-Path $repoRoot 'docs\RES-001_Release_Engineering_Standard.md') -Destination (Join-Path $bundleDir 'docs\RES-001_Release_Engineering_Standard.md')
  # RES-001 Workstream E (CHECK23, v1.0.2 scope item 5): the blank sign-off
  # template ships alongside the standard so the NEXT release's builder has
  # it without needing dev-repo access.
  Copy-Item -Path (Join-Path $repoRoot 'docs\RELEASE_SIGNOFF_SHEET_TEMPLATE.md') -Destination (Join-Path $bundleDir 'docs\RELEASE_SIGNOFF_SHEET_TEMPLATE.md')
  Copy-Item -Path (Join-Path $repoRoot 'CHANGELOG.md') -Destination (Join-Path $bundleDir 'CHANGELOG.md')
  Copy-Item -Path (Join-Path $repoRoot 'VERSION.json') -Destination (Join-Path $bundleDir 'VERSION.json')
  Write-Ok "Bundle assembled at $bundleDir"

  # ---------------------------------------------------------------------
  # 6. Zip -- "ONE versioned bundle"
  # ---------------------------------------------------------------------
  Write-Step 'Compressing bundle'
  $zipPath = Join-Path $OutputDir "$bundleName.zip"
  if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
  Compress-Archive -Path $bundleDir -DestinationPath $zipPath
  $zipSizeMb = [math]::Round((Get-Item $zipPath).Length / 1MB, 1)
  Write-Ok "Bundle compressed: $zipPath ($zipSizeMb MB)"

  # ---------------------------------------------------------------------
  # 7. SHA-256 checksum (invariant 68e, RES-001 RE-03): published alongside
  #    the bundle so an operator can verify the ZIP they downloaded/copied
  #    is byte-for-byte what this build produced, before ever running
  #    install-one17.ps1 against it. Digital signing activates once the
  #    CEO-custodied code-signing key exists (invariant 69f) -- this is
  #    the checksum half, available now.
  # ---------------------------------------------------------------------
  Write-Step 'Computing SHA-256 checksum'
  $hash = Get-FileHash -Path $zipPath -Algorithm SHA256
  $checksumPath = "$zipPath.sha256"
  # Standard sha256sum-compatible format ("<hash> *<filename>") so the
  # checksum can be verified with either PowerShell or `sha256sum -c`.
  "$($hash.Hash.ToLower()) *$bundleName.zip" | Set-Content -Path $checksumPath -NoNewline
  Write-Ok "SHA-256: $($hash.Hash) -> $checksumPath"

  Write-Host "`nRelease bundle ready: $bundleDir" -ForegroundColor Green
  Write-Host "Zip: $zipPath" -ForegroundColor Green
  Write-Host "Checksum: $checksumPath" -ForegroundColor Green
  Write-Host "Next: .\scripts\release-qa-gate.ps1 -Version $Version -BundleDir '$bundleDir'" -ForegroundColor Green
} finally {
  Pop-Location
}
