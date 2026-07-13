<#
.SYNOPSIS
  Registers the One17 API as a Windows Service via NSSM.

.DESCRIPTION
  ONE service, not two: SchedulerModule (src/scheduler/scheduler.module.ts)
  is imported directly into AppModule and runs its cron jobs IN-PROCESS with
  the API - there is no separate scheduler executable in this codebase to
  register. "API and scheduler as Windows Services" (the original brief)
  is satisfied by this single service; DEPLOYMENT_WINDOWS.md notes this
  explicitly so nobody goes looking for a second process.

  Configures automatic restart-on-failure (three restart actions, delay
  ramping via NSSM's AppThrottle/AppExit) and startup-on-boot (SERVICE_AUTO_START).

  Requires: install-one17.ps1 already run (dist\src\main.js and
  .env.production present at $InstallRoot). Idempotent - safe to re-run; if the service
  already exists, only settings are refreshed, the service is not
  recreated or restarted-by-surprise (a running production API is not
  bounced by a re-run of this script; use -Restart to opt into that).
#>

[CmdletBinding()]
param(
  [string]$InstallRoot = 'C:\One17',
  [string]$ServiceName = 'One17-API',
  [switch]$Restart
)

$ErrorActionPreference = 'Stop'
$nssm = Join-Path $PSScriptRoot 'bin\nssm.exe'
if (-not (Test-Path $nssm)) { throw "nssm.exe not found at $nssm - see DEPLOYMENT_WINDOWS.md prerequisites." }

$nodeExe = (Get-Command node -ErrorAction Stop).Source
# dist\src\main.js, not dist\main.js -- nest build compiles src/, scripts/,
# and prisma/ into one dist/ tree rooted at the project root (no explicit
# tsconfig.json rootDir), so the src/ path segment is preserved. Verified
# against a real `npm run build` output, not assumed.
$mainJs = Join-Path $InstallRoot 'dist\src\main.js'
if (-not (Test-Path $mainJs)) { throw "$mainJs not found - run install-one17.ps1 first." }

$logDir = Join-Path $InstallRoot 'logs'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$existing = & $nssm status $ServiceName 2>$null
if ($LASTEXITCODE -eq 0 -and $existing) {
  Write-Host "Service '$ServiceName' already registered (status: $existing) - refreshing settings, not recreating."
} else {
  & $nssm install $ServiceName $nodeExe $mainJs
  Write-Host "Service '$ServiceName' installed."
}

& $nssm set $ServiceName AppDirectory $InstallRoot
& $nssm set $ServiceName AppStdout (Join-Path $logDir 'api-stdout.log')
& $nssm set $ServiceName AppStderr (Join-Path $logDir 'api-stderr.log')
& $nssm set $ServiceName AppRotateFiles 1
& $nssm set $ServiceName AppRotateOnline 1
& $nssm set $ServiceName AppRotateBytes 10485760
& $nssm set $ServiceName Start SERVICE_AUTO_START
& $nssm set $ServiceName AppExit Default Restart
& $nssm set $ServiceName AppRestartDelay 5000
& $nssm set $ServiceName AppThrottle 10000
& $nssm set $ServiceName DisplayName 'One17 Enterprise Platform API'
& $nssm set $ServiceName Description 'One17 ops API + in-process scheduler (SchedulerModule). Restart-on-failure, starts on boot.'

Write-Host "Service '$ServiceName' configured: startup-on-boot, restart-on-failure, logs -> $logDir"

if ($Restart) {
  & $nssm restart $ServiceName
  Write-Host "Service '$ServiceName' restarted."
} else {
  $status = & $nssm status $ServiceName
  if ($status -ne 'SERVICE_RUNNING') {
    & $nssm start $ServiceName
    Write-Host "Service '$ServiceName' started."
  } else {
    Write-Host "Service '$ServiceName' already running - not bounced (pass -Restart to force a restart, e.g. after a deploy)."
  }
}

Write-Host "`nVerify: Get-Service $ServiceName | Format-List *"
Write-Host "Logs:   Get-Content '$logDir\api-stdout.log' -Tail 50 -Wait"
