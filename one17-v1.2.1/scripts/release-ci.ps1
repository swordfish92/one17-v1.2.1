<#
.SYNOPSIS
  One17 release-ci (invariant 68e / RES-001 RE-04) -- the ONE scripted
  command that runs build -> bundle -> clean-room gate end-to-end, so
  every release is produced identically. Manual assembly of a release
  outside this script is prohibited (invariant 69a-ii); a hosted CI
  service is a later upgrade -- this script IS the pipeline contract
  until then.

.DESCRIPTION
  Thin orchestrator over the two scripts that already do the real work:
    1. build-release.ps1 -Version $Version
       (compiles backend + both UIs, assembles the bundle, zips it,
       publishes the SHA-256 checksum alongside the zip)
    2. release-qa-gate.ps1 -Version $Version
       (full smoke suite + compiled boot check + CLEAN-ROOM fresh-install
       replay from the zip, in a fresh empty temp directory)

  Stops immediately if either step fails -- a release is never partially
  produced. On success, prints the checksum and the git tag command as
  the final human action (tagging remains a deliberate go/no-go
  signature, never automated).

.PARAMETER Version
  Semantic version for this release, e.g. "1.0.1".

.EXAMPLE
  .\scripts\release-ci.ps1 -Version 1.0.1
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Version
)

$ErrorActionPreference = 'Stop'
# If you're piping this script's own invocation for logging (e.g. a
# future hosted-CI wrapper, per this file's own header), use
# Start-Transcript/Stop-Transcript, NOT `*>&1 | Tee-Object` (or `2>&1`) --
# see build-release.ps1's own header comment for the reproduced mechanism.
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

function Write-Step($msg) { Write-Host "`n########## $msg ##########" -ForegroundColor Magenta }

Push-Location $repoRoot
try {
  Write-Step "release-ci: STAGE 1/2 -- build-release.ps1 -Version $Version"
  & (Join-Path $PSScriptRoot 'build-release.ps1') -Version $Version
  if ($LASTEXITCODE -ne 0) { throw 'build-release.ps1 failed -- release-ci stopping (no partial release is produced).' }

  Write-Step "release-ci: STAGE 2/2 -- release-qa-gate.ps1 -Version $Version"
  & (Join-Path $PSScriptRoot 'release-qa-gate.ps1') -Version $Version
  if ($LASTEXITCODE -ne 0) { throw 'release-qa-gate.ps1 failed -- this bundle does not ship.' }
} finally {
  Pop-Location
}

$zipPath = Join-Path $repoRoot "release\one17-v$Version.zip"
$checksumPath = "$zipPath.sha256"

Write-Host "`n============================================================" -ForegroundColor Green
Write-Host "release-ci: GREEN. one17-v$Version built, bundled, and clean-room gated identically to every other release." -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host "`nZip:      $zipPath"
Write-Host "Checksum: $checksumPath"
if (Test-Path $checksumPath) { Write-Host "  $(Get-Content $checksumPath -Raw)" }
Write-Host "`nNext (human action -- tagging is a go/no-go signature, not automated):"
Write-Host "  git tag -a v$Version -m `"One17 Enterprise Platform v$Version`"" -ForegroundColor Yellow
Write-Host "  git push origin v$Version" -ForegroundColor Yellow
Write-Host "`nPublish the .zip and .zip.sha256 together -- DEPLOYMENT_WINDOWS.md instructs the operator to verify the checksum before running install-one17.ps1." -ForegroundColor Yellow
