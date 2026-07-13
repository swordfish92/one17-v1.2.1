<#
.SYNOPSIS
  Timestamped, encrypted pg_dump backup with an off-machine copy step.

.DESCRIPTION
  1. pg_dump -F c (same custom format as RUNBOOK.md's dev drill, so
     pg_restore rebuilds in dependency order - extensions/tables/indexes/
     triggers/FK constraints, not statement order).
  2. AES-256-CBC encrypts the dump using .NET's built-in
     System.Security.Cryptography (no third-party tool/dependency - 7-Zip
     etc. deliberately avoided to keep the prerequisite list short). Key is
     derived via PBKDF2 (Rfc2898DeriveBytes, 210,000 iterations) from a
     passphrase read from the ONE17_BACKUP_PASSPHRASE environment
     variable - never a script parameter (would leak into Task Scheduler's
     own history/logs), never hardcoded, never logged. Salt + IV are
     prepended to the output file (standard practice - they are not
     secret, only the passphrase is).
  3. Copies the encrypted file to -OffMachinePath (a UNC path / mapped
     drive / cloud-sync folder - this script is deliberately agnostic
     about which; see DEPLOYMENT_WINDOWS.md "Backup verification" for
     concrete options). A failed off-machine copy is logged as a WARNING,
     not a fatal error - the local encrypted backup still exists and the
     next scheduled run will retry; the intent is "don't lose today's
     local backup because the network drive hiccuped," not "silently
     pretend off-machine copy succeeded."
  4. Applies retention (-RetentionDays) to both the local and off-machine
     copies.

.PARAMETER DbName
  Database to back up. Default: one17_production

.PARAMETER BackupDir
  Local directory for encrypted dumps. Default: C:\One17\backups

.PARAMETER OffMachinePath
  Destination for the off-machine copy (UNC path, mapped drive, or
  cloud-sync folder root). Required for a real production run; omit only
  for a local-only test.

.PARAMETER RetentionDays
  Delete backups (local and off-machine) older than this many days.
  Default: 30

.PARAMETER ReportUrl
  RES-001 F-02 (CHECK23, v1.0.2): base URL of the running One17 API (e.g.
  http://localhost:3000). When set, this script POSTs a BackupRun report
  to $ReportUrl/ops/backup-runs/report on both success AND failure -- "a
  silently failing backup is the worst kind" (CEO directive). Requires
  ONE17_BACKUP_REPORT_TOKEN in the environment (see
  DEPLOYMENT_WINDOWS.md "Backup verification"); reporting is skipped
  (logged as a WARNING, never fatal -- a report-endpoint outage must not
  block the backup itself) if either is missing/unreachable.
#>

[CmdletBinding()]
param(
  [string]$DbName = 'one17_production',
  [string]$DbHostName = 'localhost',
  [int]$DbPort = 5432,
  [string]$BackupDir = 'C:\One17\backups',
  [string]$OffMachinePath = '',
  [int]$RetentionDays = 30,
  [string]$PgBinDir = 'C:\Program Files\PostgreSQL\16\bin',
  [string]$ReportUrl = 'http://localhost:3000'
)

$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $BackupDir | Out-Null
$logPath = Join-Path $BackupDir 'backup.log'
function Write-Log($msg) {
  $line = "[$((Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ'))] $msg"
  Write-Host $line
  Add-Content -Path $logPath -Value $line
}

$passphrase = $env:ONE17_BACKUP_PASSPHRASE
if (-not $passphrase) {
  Write-Log 'FATAL: ONE17_BACKUP_PASSPHRASE is not set in the environment. Set it as a persistent machine environment variable before this task runs (see DEPLOYMENT_WINDOWS.md "Backup verification").'
  exit 1
}

# RES-001 F-02 (CHECK23, v1.0.2): reports this run to the app regardless of
# outcome -- called from BOTH the success path and the catch block below.
# Never throws: a report-endpoint failure is logged as a WARNING and must
# never mask (or be mistaken for) the backup's own actual result.
function Report-BackupRun($status, $startedAt, $dumpSizeBytes, $offMachineCopyOk, $errorMessage) {
  $reportToken = $env:ONE17_BACKUP_REPORT_TOKEN
  if (-not $reportToken) {
    Write-Log 'WARNING: ONE17_BACKUP_REPORT_TOKEN is not set -- skipping backup-run report to the app (see DEPLOYMENT_WINDOWS.md "Backup verification"). The encrypted backup itself is unaffected.'
    return
  }
  $body = @{
    dbName       = $DbName
    startedAt    = $startedAt.ToUniversalTime().ToString('o')
    completedAt  = (Get-Date).ToUniversalTime().ToString('o')
    status       = $status
  }
  if ($dumpSizeBytes) { $body.dumpSizeBytes = $dumpSizeBytes }
  if ($null -ne $offMachineCopyOk) { $body.offMachineCopyOk = $offMachineCopyOk }
  if ($errorMessage) { $body.errorMessage = $errorMessage }
  try {
    Invoke-RestMethod -Uri "$ReportUrl/ops/backup-runs/report" -Method Post -Headers @{ 'X-Backup-Report-Token' = $reportToken } -ContentType 'application/json' -Body ($body | ConvertTo-Json) | Out-Null
    Write-Log "Reported backup run to the app: status=$status"
  } catch {
    Write-Log "WARNING: failed to report backup run to the app ($($_.Exception.Message)) -- the encrypted backup itself is unaffected; this run will not appear in the app's health view."
  }
}

$startedAt = Get-Date
$timestamp = $startedAt.ToUniversalTime().ToString('yyyyMMddTHHmmssZ')
$dumpFile = Join-Path $BackupDir "$DbName`_$timestamp.dump"
$encFile = "$dumpFile.enc"
$offMachineCopyOk = $null

try {
  Write-Log "Starting pg_dump: $DbName -> $dumpFile"
  & "$PgBinDir\pg_dump.exe" -U one17_app -h $DbHostName -p $DbPort -d $DbName -F c -f $dumpFile --verbose 2>&1 | Add-Content -Path $logPath
  if ($LASTEXITCODE -ne 0) { throw "pg_dump exited with code $LASTEXITCODE" }
  $dumpSize = (Get-Item $dumpFile).Length
  Write-Log "pg_dump complete: $dumpSize bytes"

  # --- Encrypt (AES-256-CBC, PBKDF2-derived key, salt+IV prepended) -------
  Write-Log "Encrypting to $encFile"
  $salt = New-Object byte[] 16
  [System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($salt)
  $deriveBytes = New-Object System.Security.Cryptography.Rfc2898DeriveBytes($passphrase, $salt, 210000, [System.Security.Cryptography.HashAlgorithmName]::SHA256)
  $key = $deriveBytes.GetBytes(32)
  $iv = $deriveBytes.GetBytes(16)

  $aes = [System.Security.Cryptography.Aes]::Create()
  $aes.Key = $key
  $aes.IV = $iv
  $aes.Mode = [System.Security.Cryptography.CipherMode]::CBC

  $inStream = [System.IO.File]::OpenRead($dumpFile)
  $outStream = [System.IO.File]::Create($encFile)
  $outStream.Write($salt, 0, $salt.Length)
  $cryptoStream = New-Object System.Security.Cryptography.CryptoStream($outStream, $aes.CreateEncryptor(), [System.Security.Cryptography.CryptoStreamMode]::Write)
  $inStream.CopyTo($cryptoStream)
  $cryptoStream.FlushFinalBlock()
  $cryptoStream.Close()
  $inStream.Close()
  $outStream.Close()
  $aes.Dispose()
  Remove-Item $dumpFile -Force
  Write-Log "Encrypted backup written: $encFile ($((Get-Item $encFile).Length) bytes). Plaintext dump removed."

  # --- Off-machine copy (non-fatal on failure) ----------------------------
  if ($OffMachinePath) {
    try {
      if (-not (Test-Path $OffMachinePath)) { New-Item -ItemType Directory -Force -Path $OffMachinePath | Out-Null }
      Copy-Item -Path $encFile -Destination $OffMachinePath -Force
      Write-Log "Off-machine copy succeeded: $OffMachinePath"
      $offMachineCopyOk = $true
    } catch {
      Write-Log "WARNING: off-machine copy failed ($($_.Exception.Message)) - local encrypted backup is still intact at $encFile; next scheduled run will retry with a new backup (this one is not auto-retried standalone)."
      $offMachineCopyOk = $false
    }
  } else {
    Write-Log 'WARNING: -OffMachinePath not supplied - this backup exists ONLY on this machine. Not acceptable for a real production run.'
  }

  # --- Retention -----------------------------------------------------------
  $cutoff = (Get-Date).AddDays(-$RetentionDays)
  Get-ChildItem -Path $BackupDir -Filter "$DbName`_*.dump.enc" | Where-Object { $_.LastWriteTime -lt $cutoff } | ForEach-Object {
    Write-Log "Retention: removing local backup older than $RetentionDays days: $($_.Name)"
    Remove-Item $_.FullName -Force
  }
  if ($OffMachinePath -and (Test-Path $OffMachinePath)) {
    Get-ChildItem -Path $OffMachinePath -Filter "$DbName`_*.dump.enc" -ErrorAction SilentlyContinue | Where-Object { $_.LastWriteTime -lt $cutoff } | ForEach-Object {
      Write-Log "Retention: removing off-machine backup older than $RetentionDays days: $($_.Name)"
      Remove-Item $_.FullName -Force
    }
  }

  Write-Log 'Backup run complete: SUCCESS'
  Report-BackupRun 'SUCCEEDED' $startedAt $dumpSize $offMachineCopyOk $null
} catch {
  Write-Log "FATAL: $($_.Exception.Message)"
  Report-BackupRun 'FAILED' $startedAt $null $offMachineCopyOk $_.Exception.Message
  if (Test-Path $dumpFile) { Remove-Item $dumpFile -Force -ErrorAction SilentlyContinue }
  exit 1
}
