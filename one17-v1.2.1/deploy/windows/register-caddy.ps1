<#
.SYNOPSIS
  Writes the Caddyfile, registers caddy.exe as a Windows Service, and opens
  ONLY port 443 at the Windows Firewall.

.DESCRIPTION
  Windows Firewall's default inbound posture is deny-unless-allowed, so
  ports 3000 (API)/5173/5174 (dev-only, not even used in production) are
  already unreachable from outside without this script doing anything -
  this script's firewall step exists to (a) add the explicit inbound allow
  rule for 443 that Caddy actually needs, and (b) remove any pre-existing
  rule that might have opened another One17 port on an earlier, less
  careful setup, so the end state is verifiably "only 443" rather than
  "443 plus whatever nobody remembered to close."

  Idempotent: re-running updates the Caddyfile and firewall rule in place;
  the NSSM service is refreshed, not recreated, if already registered.
#>

[CmdletBinding()]
param(
  [string]$InstallRoot = 'C:\One17',
  [Parameter(Mandatory)][string]$AppDomain,
  [Parameter(Mandatory)][string]$PortalDomain,
  [Parameter(Mandatory)][string]$ApiDomain,
  [int]$ApiPort = 3000,
  [string]$ServiceName = 'One17-Caddy',
  [switch]$Restart
)

$ErrorActionPreference = 'Stop'
$nssm = Join-Path $PSScriptRoot 'bin\nssm.exe'
$caddyExe = Join-Path $PSScriptRoot 'bin\caddy.exe'
if (-not (Test-Path $nssm)) { throw "nssm.exe not found at $nssm - see DEPLOYMENT_WINDOWS.md prerequisites." }
if (-not (Test-Path $caddyExe)) { throw "caddy.exe not found at $caddyExe - see DEPLOYMENT_WINDOWS.md prerequisites." }

$logDir = Join-Path $InstallRoot 'logs'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

# --- 1. Write the Caddyfile from the template -----------------------------
$template = Get-Content (Join-Path $PSScriptRoot 'Caddyfile.template') -Raw
$template = $template.Replace('__APP_DOMAIN__', $AppDomain)
$template = $template.Replace('__PORTAL_DOMAIN__', $PortalDomain)
$template = $template.Replace('__API_DOMAIN__', $ApiDomain)
$template = $template.Replace('__API_PORT__', "$ApiPort")
$template = $template.Replace('__INSTALL_ROOT__', $InstallRoot)
$caddyfilePath = Join-Path $InstallRoot 'Caddyfile'
Set-Content -Path $caddyfilePath -Value $template
Write-Host "Caddyfile written to $caddyfilePath ($AppDomain / $PortalDomain / $ApiDomain)"

& $caddyExe validate --config $caddyfilePath
Write-Host 'Caddyfile syntax validated (caddy validate).'

# --- 2. Register caddy.exe as a Windows Service via NSSM ------------------
$existing = & $nssm status $ServiceName 2>$null
if ($LASTEXITCODE -eq 0 -and $existing) {
  Write-Host "Service '$ServiceName' already registered (status: $existing) - refreshing settings."
} else {
  & $nssm install $ServiceName $caddyExe "run --config `"$caddyfilePath`" --adapter caddyfile"
  Write-Host "Service '$ServiceName' installed."
}

& $nssm set $ServiceName AppDirectory $InstallRoot
& $nssm set $ServiceName AppStdout (Join-Path $logDir 'caddy-stdout.log')
& $nssm set $ServiceName AppStderr (Join-Path $logDir 'caddy-stderr.log')
& $nssm set $ServiceName AppRotateFiles 1
& $nssm set $ServiceName AppRotateOnline 1
& $nssm set $ServiceName AppRotateBytes 10485760
& $nssm set $ServiceName Start SERVICE_AUTO_START
& $nssm set $ServiceName AppExit Default Restart
& $nssm set $ServiceName AppRestartDelay 5000
& $nssm set $ServiceName DisplayName 'One17 Caddy Reverse Proxy'
& $nssm set $ServiceName Description 'Reverse proxy + automatic TLS for app./portal./api. subdomains. Restart-on-failure, starts on boot.'

Write-Host "Service '$ServiceName' configured."

# --- 3. Windows Firewall: only 443 inbound ---------------------------------
$ruleName = 'One17-HTTPS-443'
$existingRule = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
if ($existingRule) {
  Write-Host "Firewall rule '$ruleName' already present - leaving as-is."
} else {
  New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow | Out-Null
  Write-Host "Firewall rule '$ruleName' created: inbound TCP 443 allowed."
}

# Defensive cleanup: remove any rule from an earlier/manual setup that
# opened a One17 application port directly (3000, 5173, 5174) - these
# should only ever be reached via Caddy on 443, never directly from
# outside this machine.
foreach ($port in @($ApiPort, 5173, 5174, 80)) {
  $stale = Get-NetFirewallPortFilter -Protocol TCP | Where-Object { $_.LocalPort -eq "$port" } |
    Get-NetFirewallRule | Where-Object { $_.DisplayName -ne $ruleName -and $_.Direction -eq 'Inbound' -and $_.Action -eq 'Allow' }
  foreach ($rule in $stale) {
    Write-Host "Removing stale inbound-allow rule '$($rule.DisplayName)' for port $port (should only be reachable via 443/Caddy)."
    Remove-NetFirewallRule -Name $rule.Name
  }
}

Write-Host "`nFirewall state: only inbound TCP 443 is allowed for this application. Verify with:"
Write-Host '  Get-NetFirewallRule -Direction Inbound -Action Allow | Where-Object Enabled -eq True | Select DisplayName'

# --- 4. Start/restart -------------------------------------------------------
if ($Restart) {
  & $nssm restart $ServiceName
  Write-Host "Service '$ServiceName' restarted."
} else {
  $status = & $nssm status $ServiceName
  if ($status -ne 'SERVICE_RUNNING') {
    & $nssm start $ServiceName
    Write-Host "Service '$ServiceName' started."
  } else {
    Write-Host "Service '$ServiceName' already running - not bounced (pass -Restart to force, e.g. after a Caddyfile change)."
  }
}

Write-Host "`nDNS reminder: $AppDomain, $PortalDomain, and $ApiDomain must all resolve (A/AAAA) to this machine's public IP before Caddy can complete TLS-ALPN-01 issuance - see DEPLOYMENT_WINDOWS.md 'DNS records'."
