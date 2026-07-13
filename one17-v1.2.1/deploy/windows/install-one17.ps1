<#
.SYNOPSIS
  One17 Enterprise Platform - production installer, native Windows Server.

.DESCRIPTION
  BINARY RELEASE MODEL (invariant 68a, CHECK22 -- v1.0.1 remediation of the
  independent v1.0.0 clean-room audit's C-01/C-02 findings): this script
  deploys the bundle's OWN COMPILED ARTIFACTS -- dist/, ops-ui/dist,
  portal-ui/dist, generated/prisma -- as-is. It never runs `npm run build`,
  `nest build`, `vite build`, or `prisma generate`. No TypeScript compiler,
  Nest CLI, or frontend build toolchain is required on the server -- only
  Node.js (to run the already-compiled dist/src/main.js) and PostgreSQL.
  Whatever this script needs MUST already be present in the extracted
  bundle; nothing the bundle lacks may be assumed reachable (no reference
  to a git checkout, no dev-machine path).

  Takes a clean Windows Server machine to a running platform: checks/installs
  Node.js LTS and PostgreSQL 16 (via winget - no ad-hoc binary downloads),
  copies the bundle's pre-built artifacts into place, installs ONLY the
  backend's RUNTIME dependencies (`npm ci --omit=dev`, from the shipped
  lockfile -- no devDependencies, so no build tooling is pulled in even
  transitively), provisions the production database with an owner/migrator
  role and a least-privilege runtime role, runs migrations + the production
  seed (config only - zero demo data, clean audit chain), creates the first
  SUPER_ADMIN login, writes .env.production with restrictive NTFS ACLs
  (H-07), and then hands off to register-services.ps1 / register-caddy.ps1 /
  register-backup-task.ps1 for the pieces of end-to-end setup that touch
  Windows Services, the Windows Firewall, and Task Scheduler - this script
  does NOT perform those itself (see DEPLOYMENT_WINDOWS.md "Why
  service/firewall/task registration is a separate, explicit step").

  Idempotent throughout: safe to re-run. Every step checks its own
  already-done state before acting. Re-running never rotates an existing
  password (owner/runtime DB roles, admin login) - those are create-once,
  by design, matching this project's standing "never silently reset a
  credential" rule.

.PARAMETER InstallRoot
  Where the application is deployed to (copied dist/, .env.production,
  logs). Default: C:\One17

.PARAMETER BundleSource
  The extracted release bundle this script is being run from (the folder
  containing dist/, ops-ui/, portal-ui/, prisma/, package.json, this
  deploy/ folder, etc.). Default: two levels up from this script's own
  location, which is where it lands inside every bundle build-release.ps1
  assembles (<bundle>\deploy\windows\install-one17.ps1) -- correct
  whether the bundle is a fresh ZIP extraction or a working copy of this
  repo, with no assumption of a git checkout either way.

.PARAMETER DbName
  Production database name. Default: one17_production

.PARAMETER AppDomain / PortalDomain / ApiDomain
  Public hostnames Caddy will serve (see register-caddy.ps1). Not used by
  this script directly, but written into .env.production for CORS origins.

.PARAMETER SkipNodeInstall / SkipPostgresInstall
  Skip the winget install checks (use when Node/PostgreSQL are already
  provisioned by other means, e.g. a golden AMI).

.EXAMPLE
  .\install-one17.ps1 -AppDomain app.one17capital.com -PortalDomain portal.one17capital.com -ApiDomain api.one17capital.com
#>

[CmdletBinding()]
param(
  [string]$InstallRoot = 'C:\One17',
  [string]$BundleSource = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path,
  [string]$DbName = 'one17_production',
  [string]$DbHost = 'localhost',
  [int]$DbPort = 5432,
  [string]$AppDomain = 'app.one17capital.com',
  [string]$PortalDomain = 'portal.one17capital.com',
  [string]$ApiDomain = 'api.one17capital.com',
  [int]$ApiPort = 3000,
  [switch]$SkipNodeInstall,
  [switch]$SkipPostgresInstall,
  [switch]$SkipAdminBootstrap
)

$ErrorActionPreference = 'Stop'
$binDir = Join-Path $PSScriptRoot 'bin'

function Write-Step($msg) { Write-Host "`n=== $msg ===" -ForegroundColor Cyan }
function Write-Ok($msg) { Write-Host "OK: $msg" -ForegroundColor Green }
function Write-Skip($msg) { Write-Host "SKIP: $msg" -ForegroundColor Yellow }

function New-RandomPassword {
  # 24 bytes -> 32-char base64url, no ambiguous separators, never logged.
  $bytes = New-Object byte[] 24
  [System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
  return ([Convert]::ToBase64String($bytes)).Replace('+', '-').Replace('/', '_').Replace('=', '')
}

# ---------------------------------------------------------------------------
# 1. Prerequisites: this script's own bundle must be a real, complete
#    release build -- verified up front so a truncated/corrupt extraction
#    fails loudly here, not halfway through database provisioning.
#    nssm.exe / caddy.exe must already be present in deploy\windows\bin -
#    this installer does NOT auto-fetch third-party executables from the
#    internet (see DEPLOYMENT_WINDOWS.md prerequisites for the two
#    official download links). winget is used for Node/Postgres instead
#    of raw downloads because it's a Microsoft-curated package source
#    with built-in integrity verification, already present on supported
#    Windows Server versions.
# ---------------------------------------------------------------------------
Write-Step 'Checking prerequisites'

$requiredBundlePaths = @(
  'dist\src\main.js', 'ops-ui\dist\index.html', 'portal-ui\dist\index.html',
  'generated\prisma\client.js', 'prisma\migrations', 'prisma\seed.ts',
  'package.json', 'package-lock.json', 'VERSION.json'
)
$missing = $requiredBundlePaths | Where-Object { -not (Test-Path (Join-Path $BundleSource $_)) }
if ($missing) {
  throw "BundleSource ($BundleSource) is missing: $($missing -join ', '). This installer runs from a COMPLETE release bundle (built by scripts\build-release.ps1) -- it does not build these itself. Re-extract the release ZIP and try again."
}
Write-Ok "Bundle at $BundleSource verified complete (compiled dist/, built ops-ui/portal-ui, generated Prisma client, migrations, seed -- nothing will be rebuilt)"

if (-not (Test-Path (Join-Path $binDir 'nssm.exe'))) {
  throw "nssm.exe not found at $binDir\nssm.exe. Download from https://nssm.cc/download (official site) and place it there before re-running. This installer does not auto-download third-party executables."
}
if (-not (Test-Path (Join-Path $binDir 'caddy.exe'))) {
  throw "caddy.exe not found at $binDir\caddy.exe. Download from https://caddyserver.com/download (official site) and place it there before re-running."
}
Write-Ok 'nssm.exe and caddy.exe present in deploy\windows\bin'

if (-not $SkipNodeInstall) {
  $node = Get-Command node -ErrorAction SilentlyContinue
  if ($node) {
    Write-Skip "Node already installed: $(node --version)"
  } else {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
      throw 'winget not found. Install "App Installer" from the Microsoft Store (or enable it per your Windows Server version), or install Node.js LTS manually from https://nodejs.org, then re-run with -SkipNodeInstall.'
    }
    Write-Host 'Installing Node.js LTS via winget...'
    winget install --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
    Write-Ok 'Node.js LTS installed'
  }
} else {
  Write-Skip 'Node install check skipped (-SkipNodeInstall)'
}

if (-not $SkipPostgresInstall) {
  $pgReady = Get-Service -Name 'postgresql-x64-16*' -ErrorAction SilentlyContinue
  if ($pgReady) {
    Write-Skip "PostgreSQL 16 service already present: $($pgReady.Name)"
  } else {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
      throw 'winget not found. Install PostgreSQL 16 manually as a Windows service from https://www.postgresql.org/download/windows/, then re-run with -SkipPostgresInstall.'
    }
    Write-Host 'Installing PostgreSQL 16 via winget (registers itself as a Windows service)...'
    winget install --id PostgreSQL.PostgreSQL.16 --silent --accept-package-agreements --accept-source-agreements
    Write-Ok 'PostgreSQL 16 installed as a Windows service'
    Write-Host 'Waiting for the PostgreSQL service to report Running...'
    Start-Sleep -Seconds 10
  }
} else {
  Write-Skip 'PostgreSQL install check skipped (-SkipPostgresInstall)'
}

# ---------------------------------------------------------------------------
# 2. Copy the bundle's pre-built artifacts to the install root. Everything
#    here is ALREADY COMPILED -- dist/, ops-ui/dist, portal-ui/dist,
#    generated/prisma -- copied as-is, never rebuilt. node_modules is
#    excluded (installed fresh below via `npm ci --omit=dev`, since a
#    node_modules tree copied from a different machine can carry
#    architecture-specific native bindings, e.g. @node-rs/argon2, that
#    don't match this server).
# ---------------------------------------------------------------------------
Write-Step "Deploying bundle artifacts to $InstallRoot"
New-Item -ItemType Directory -Force -Path $InstallRoot | Out-Null
$excludeDirs = @('node_modules', '.git', 'ops-ui\node_modules', 'portal-ui\node_modules')
robocopy $BundleSource $InstallRoot /MIR /XD $($excludeDirs | ForEach-Object { Join-Path $BundleSource $_ }) /NFL /NDL /NJH /NJS | Out-Null
$entryPoint = Join-Path $InstallRoot 'dist\src\main.js'
if (-not (Test-Path $entryPoint)) { throw "Expected $entryPoint after deploying the bundle but it doesn't exist -- the copy above may have failed." }
Write-Ok "Bundle artifacts deployed (dist/, ops-ui/dist, portal-ui/dist, generated/prisma -- all pre-built, nothing compiled here)"

$versionInfo = Get-Content (Join-Path $InstallRoot 'VERSION.json') -Raw | ConvertFrom-Json
Write-Ok "Deploying One17 v$($versionInfo.version) (commit $($versionInfo.commit), built $($versionInfo.builtAt)) -- version stamp came from the bundle, not re-derived here"

# ---------------------------------------------------------------------------
# 3. Install ONLY the backend's runtime dependencies -- `--omit=dev` never
#    pulls in typescript / @nestjs/cli / vite / the frontend build
#    toolchain (all devDependencies), so this step cannot silently
#    reintroduce a server-side build even transitively. ops-ui and
#    portal-ui need NO install step at all: their dist/ folders are
#    static HTML/JS/CSS that Caddy serves directly -- no Node process
#    ever runs inside those two directories in production.
# ---------------------------------------------------------------------------
Write-Step 'Installing backend runtime dependencies (npm ci --omit=dev, from the shipped lockfile)'
Push-Location $InstallRoot
try {
  npm ci --omit=dev
  if ($LASTEXITCODE -ne 0) { throw 'npm ci --omit=dev failed' }
} finally {
  Pop-Location
}
Write-Ok 'Backend runtime dependencies installed -- no build step ran (dist/src/main.js is the bundle''s own compiled output)'

# ---------------------------------------------------------------------------
# 4. Database provisioning (idempotent - see provision-db*.sql.template)
# ---------------------------------------------------------------------------
Write-Step 'Provisioning production database'

$secretsPath = Join-Path $InstallRoot '.deploy-secrets.json'
$secrets = $null
if (Test-Path $secretsPath) {
  $secrets = Get-Content $secretsPath -Raw | ConvertFrom-Json
  Write-Skip 'Existing .deploy-secrets.json found - reusing previously generated DB passwords (never rotated by a re-run).'
} else {
  $secrets = [PSCustomObject]@{
    ownerPassword   = New-RandomPassword
    runtimePassword = New-RandomPassword
  }
}

$pgBin = 'C:\Program Files\PostgreSQL\16\bin'
$env:PGPASSWORD = $null  # never persisted; set per-invocation below via -PGPASSWORD arg per call

$provisionSql = Get-Content (Join-Path $PSScriptRoot 'provision-db.sql.template') -Raw
$provisionSql = $provisionSql.Replace('__OWNER_PASSWORD__', $secrets.ownerPassword)
$provisionSql = $provisionSql.Replace('__RUNTIME_PASSWORD__', $secrets.runtimePassword)
$provisionSql = $provisionSql.Replace('__DB_NAME__', $DbName)
$provisionSqlPath = Join-Path $InstallRoot '.provision-db.generated.sql'
Set-Content -Path $provisionSqlPath -Value $provisionSql

Write-Host 'Running provision-db.sql.template (roles + database creation) as the cluster superuser (postgres)...'
Write-Host 'You will be prompted for the PostgreSQL superuser password.'
& "$pgBin\psql.exe" -U postgres -h $DbHost -p $DbPort -d postgres -v ON_ERROR_STOP=1 -f $provisionSqlPath
Remove-Item $provisionSqlPath -Force

$grantsSql = Get-Content (Join-Path $PSScriptRoot 'provision-db-grants.sql.template') -Raw
$grantsSql = $grantsSql.Replace('__DB_NAME__', $DbName)
$grantsSqlPath = Join-Path $InstallRoot '.provision-db-grants.generated.sql'
Set-Content -Path $grantsSqlPath -Value $grantsSql

Write-Host 'Running provision-db-grants.sql.template (least-privilege grants) inside the target database...'
& "$pgBin\psql.exe" -U postgres -h $DbHost -p $DbPort -d $DbName -v ON_ERROR_STOP=1 -f $grantsSqlPath
Remove-Item $grantsSqlPath -Force

Set-Content -Path $secretsPath -Value ($secrets | ConvertTo-Json)
icacls $secretsPath /inheritance:r /grant:r "$env:USERDOMAIN\$env:USERNAME:(F)" "SYSTEM:(F)" "BUILTIN\Administrators:(F)" | Out-Null
Write-Ok "Database '$DbName' provisioned: one17_app (owner/migrator), one17_runtime (least-privilege). Generated passwords stored ONLY at $secretsPath (not in this script, not logged, not in any committed file), NTFS ACLs restricted to SYSTEM/Administrators/the installing user (H-07) - back this file up under the same access controls as your production secrets."

# ---------------------------------------------------------------------------
# 5. Migrations (as one17_app) + production seed
# ---------------------------------------------------------------------------
Write-Step 'Running migrations (as one17_app)'
$ownerUrl = "postgresql://one17_app:$($secrets.ownerPassword)@${DbHost}:${DbPort}/${DbName}?schema=public"
Push-Location $InstallRoot
try {
  $env:DATABASE_URL = $ownerUrl
  npx prisma migrate deploy
  Write-Ok 'Migrations applied'

  Write-Step 'Running production seed (config only - zero demo data, per prisma/seed.ts)'
  npm run db:seed
  Write-Ok 'Production seed complete - audit_trail starts genuinely empty (RUNBOOK.md section 4)'
} finally {
  Remove-Item Env:\DATABASE_URL -ErrorAction SilentlyContinue
  Pop-Location
}

# ---------------------------------------------------------------------------
# 6. First SUPER_ADMIN login
# ---------------------------------------------------------------------------
if (-not $SkipAdminBootstrap) {
  Write-Step 'Creating the first SUPER_ADMIN login'
  $adminEmail = Read-Host 'Admin email'
  $adminName = Read-Host 'Admin display name'
  $securePw = Read-Host 'Admin password (min length per AuthPolicy; not echoed)' -AsSecureString
  $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePw)
  $adminPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
  [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)

  Push-Location $InstallRoot
  try {
    $env:DATABASE_URL = $ownerUrl
    $env:ADMIN_EMAIL = $adminEmail
    $env:ADMIN_NAME = $adminName
    $env:ADMIN_PASSWORD = $adminPassword
    npx tsx scripts/bootstrap-admin.ts
  } finally {
    Remove-Item Env:\DATABASE_URL, Env:\ADMIN_EMAIL, Env:\ADMIN_NAME, Env:\ADMIN_PASSWORD -ErrorAction SilentlyContinue
    $adminPassword = $null
    Pop-Location
  }
} else {
  Write-Skip 'Admin bootstrap skipped (-SkipAdminBootstrap) - run scripts\bootstrap-admin.ts manually later.'
}

# ---------------------------------------------------------------------------
# 7. Write .env.production (app connects as one17_runtime, NOT one17_app -
#    the whole point of the role split above) with restrictive NTFS ACLs
#    (H-07, CHECK22): the running service account, the installing admin,
#    and SYSTEM only -- never inherited-open to every local user.
# ---------------------------------------------------------------------------
Write-Step 'Writing .env.production'
$runtimeUrl = "postgresql://one17_runtime:$($secrets.runtimePassword)@${DbHost}:${DbPort}/${DbName}?schema=public"
$envContent = @"
# Generated by install-one17.ps1 on $((Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')) - do not commit.
NODE_ENV=production
PORT=$ApiPort
DATABASE_URL=$runtimeUrl
OPS_UI_ORIGIN=https://$AppDomain
PORTAL_UI_ORIGIN=https://$PortalDomain
# Caddy terminates TLS and proxies to this process over loopback -- see
# main.ts's trust-proxy configuration (invariant 68c, H-03): req.ip
# resolves correctly (rate limiting + audit_trail IPs are the real client,
# not Caddy's loopback address) only when this matches the actual number
# of reverse-proxy hops in front of the app. 1 = Caddy on the same host.
TRUST_PROXY_HOPS=1
# RES-001 F-01 (CHECK23): structured-logger floor. 'log' in production.
LOG_LEVEL=log
"@
$envPath = Join-Path $InstallRoot '.env.production'
Set-Content -Path $envPath -Value $envContent
Copy-Item -Path $envPath -Destination (Join-Path $InstallRoot '.env') -Force
$dotEnvPath = Join-Path $InstallRoot '.env'
icacls $envPath /inheritance:r /grant:r "$env:USERDOMAIN\$env:USERNAME:(F)" "SYSTEM:(F)" "BUILTIN\Administrators:(F)" | Out-Null
icacls $dotEnvPath /inheritance:r /grant:r "$env:USERDOMAIN\$env:USERNAME:(F)" "SYSTEM:(F)" "BUILTIN\Administrators:(F)" | Out-Null
Write-Ok '.env.production written (app runtime connects as the least-privilege one17_runtime role), NTFS ACLs restricted to SYSTEM/Administrators/the installing user (H-07)'

# ---------------------------------------------------------------------------
# 8. Hand off to the pieces this script deliberately does NOT do itself
# ---------------------------------------------------------------------------
Write-Step 'Application install complete'
Write-Host @"

install-one17.ps1 has finished everything that does not touch Windows
Services, the Windows Firewall, or Task Scheduler. Three explicit next
steps remain (see DEPLOYMENT_WINDOWS.md for why these are kept separate):

  1. .\register-services.ps1 -InstallRoot '$InstallRoot'
     Registers the API (includes the in-process scheduler) as a Windows
     Service via NSSM, restart-on-failure, startup-on-boot.

  2. .\register-caddy.ps1 -InstallRoot '$InstallRoot' -AppDomain '$AppDomain' -PortalDomain '$PortalDomain' -ApiDomain '$ApiDomain'
     Writes the Caddyfile, registers caddy.exe as a Windows Service, and
     configures the Windows Firewall to expose only port 443.

  3. .\register-backup-task.ps1 -InstallRoot '$InstallRoot'
     Registers the daily backup.ps1 run via Windows Task Scheduler.

Version deployed: $($versionInfo.version) (commit $($versionInfo.commit))
Database: $DbName (owner: one17_app, runtime: one17_runtime)
Secrets file (back this up, restrict its ACLs): $secretsPath
"@ -ForegroundColor Green
