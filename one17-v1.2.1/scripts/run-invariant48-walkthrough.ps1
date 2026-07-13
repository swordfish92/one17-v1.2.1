# Invariant 48(d) execution-split runner (authored by the builder, run only
# by the CEO from his own terminal - the builder never executes this).
#
# Derives a one17_walkthrough connection string from the existing
# DATABASE_URL in .env (same host/user/password, database name swapped)
# and sets it for THIS PROCESS ONLY -- .env itself is never edited.
# Run this file directly (do not copy/paste its body into a console --
# pasting a multi-line block into some PowerShell hosts can get word-
# wrapped by the terminal width and executed as fragments, which is what
# happened on the first attempt).
#
# Usage, from the platform-app directory:
#   .\scripts\run-invariant48-walkthrough.ps1

$ErrorActionPreference = 'Stop'

$envPath = Join-Path $PSScriptRoot '..\.env'
if (-not (Test-Path $envPath)) {
    Write-Error "No .env file found at $envPath -- cannot derive the walkthrough connection string."
    exit 1
}

$devLine = Get-Content $envPath | Where-Object { $_ -match '^DATABASE_URL=' } | Select-Object -First 1
if (-not $devLine) {
    Write-Error "No DATABASE_URL line found in .env."
    exit 1
}

# Pull the quoted value, e.g. postgresql://user:pass@host:port/one17_platform?schema=public
$devUrl = [regex]::Match($devLine, '"([^"]+)"').Groups[1].Value
if (-not $devUrl) {
    Write-Error "Could not parse DATABASE_URL out of .env."
    exit 1
}

# Swap ONLY the database name segment (the path component between the last
# '/' and the next '?' or end of string) from one17_platform to
# one17_walkthrough -- never touches user/password/host/port.
$walkthroughUrl = [regex]::Replace($devUrl, '/([^/?]+)(\?|$)', '/one17_walkthrough$2')

if ($walkthroughUrl -notmatch '/one17_walkthrough(\?|$)') {
    Write-Error "Failed to derive a one17_walkthrough URL from DATABASE_URL -- refusing to run against an unexpected target. Original: $devUrl"
    exit 1
}

Write-Host "Target database for this run: one17_walkthrough" -ForegroundColor Cyan
$redacted = $walkthroughUrl -replace '://([^:]+):[^@]+@', '://$1:****@'
Write-Host "Connection string (password redacted): $redacted" -ForegroundColor Cyan

if (-not $env:WALKTHROUGH_STAFF_PASSWORD) {
    # Falls back to reading it out of .env if not already set in this shell
    # (the script itself requires it to be set -- see requireStaffPassword()).
    $staffLine = Get-Content $envPath | Where-Object { $_ -match '^WALKTHROUGH_STAFF_PASSWORD=' } | Select-Object -First 1
    if ($staffLine) {
        $env:WALKTHROUGH_STAFF_PASSWORD = [regex]::Match($staffLine, '"([^"]+)"').Groups[1].Value
    }
}
if (-not $env:WALKTHROUGH_STAFF_PASSWORD) {
    Write-Error "WALKTHROUGH_STAFF_PASSWORD is not set (checked shell env and .env) -- the script will refuse to run without it."
    exit 1
}
Write-Host "WALKTHROUGH_STAFF_PASSWORD: set (redacted)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C now to abort, or wait 5 seconds to proceed..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

$env:DATABASE_URL = $walkthroughUrl
try {
    npx tsx scripts/invariant48-walkthrough-refresh.ts
} finally {
    Remove-Item Env:\DATABASE_URL -ErrorAction SilentlyContinue
}
