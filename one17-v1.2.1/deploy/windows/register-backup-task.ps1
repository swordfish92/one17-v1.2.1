<#
.SYNOPSIS
  Sets the backup passphrase and registers the daily backup Scheduled Task.

.DESCRIPTION
  Two things happen here, deliberately kept together so nobody registers
  the task without also setting the passphrase it needs:

  1. Prompts for the backup encryption passphrase (never a parameter - a
     parameter would leak into shell history / Task Scheduler's own action
     log) and stores it as a PERSISTENT MACHINE-LEVEL environment variable
     (ONE17_BACKUP_PASSPHRASE), protected by the same OS access control as
     everything else on this box (an attacker with read access to machine
     env vars already has local admin, at which point the encrypted
     backups' salt+IV scheme doesn't add protection against THAT attacker
     either - this protects the backup FILES at rest / in transit
     off-machine, not against a fully compromised host). Re-running this
     script prompts again and OVERWRITES the stored passphrase - this is
     the one exception to "never silently reset a credential" in this
     package, because the passphrase is a shared machine secret for a
     backup job, not a person's login; if you rotate it, you must also
     re-encrypt (or simply keep) old backups with the OLD passphrase, or
     they become unreadable - decrypt anything you need under the old
     passphrase BEFORE rotating.

  2. Fills in backup-task.xml.template and registers it via schtasks,
     running as SYSTEM, daily at -StartTime.

  IMPORTANT: newly-set machine environment variables are not always
  visible to already-running system processes without a reboot. Reboot
  this machine once after running this script, before relying on the
  first scheduled run - or manually run backup.ps1 once yourself first to
  confirm the passphrase is readable in a fresh process.
#>

[CmdletBinding()]
param(
  [string]$InstallRoot = 'C:\One17',
  [string]$DbName = 'one17_production',
  [string]$BackupDir = 'C:\One17\backups',
  [Parameter(Mandatory)][string]$OffMachinePath,
  [int]$RetentionDays = 30,
  [string]$StartTime = '02:00:00',
  [string]$TaskName = 'One17-Backup'
)

$ErrorActionPreference = 'Stop'

Write-Host 'Setting the backup encryption passphrase (input hidden, stored only in this machine''s environment - never written to any file in this repo or install).'
$securePw = Read-Host 'Backup passphrase' -AsSecureString
$confirmPw = Read-Host 'Confirm backup passphrase' -AsSecureString
$bstr1 = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePw)
$bstr2 = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($confirmPw)
$plain1 = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr1)
$plain2 = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr2)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr1)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr2)
if ($plain1 -ne $plain2) {
  $plain1 = $null; $plain2 = $null
  throw 'Passphrases did not match - re-run and try again.'
}
if ($plain1.Length -lt 16) {
  $plain1 = $null; $plain2 = $null
  throw 'Passphrase must be at least 16 characters - this is the only thing standing between an off-machine backup copy and anyone who gets hold of it.'
}
[Environment]::SetEnvironmentVariable('ONE17_BACKUP_PASSPHRASE', $plain1, 'Machine')
$plain1 = $null; $plain2 = $null
Write-Host 'Passphrase stored as a machine environment variable.'

# RES-001 F-02 (CHECK23, v1.0.2): OPTIONAL -- lets backup.ps1 report each
# run's outcome to the app's /ops/backup-runs/report endpoint so a failure
# surfaces in the health view instead of only in this box's local log
# file. Blank input skips it (backup.ps1 logs a WARNING and still runs the
# backup itself -- reporting is additive, never a precondition for the
# backup to proceed). The SAME value must also be set as BACKUP_REPORT_TOKEN
# in the app's .env.production -- see DEPLOYMENT_WINDOWS.md "Backup
# verification".
Write-Host "`nOptional: backup-run report token (lets backup.ps1 tell the app about each run's success/failure). Leave blank to skip."
$secureToken = Read-Host 'Backup report token (blank to skip)' -AsSecureString
$bstrToken = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
$plainToken = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstrToken)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstrToken)
if ($plainToken) {
  [Environment]::SetEnvironmentVariable('ONE17_BACKUP_REPORT_TOKEN', $plainToken, 'Machine')
  Write-Host 'Backup report token stored as a machine environment variable. Set the SAME value as BACKUP_REPORT_TOKEN in .env.production.'
} else {
  Write-Host 'No report token entered -- backup-run reporting to the app stays disabled (the backup itself is unaffected).'
}
$plainToken = $null

$startBoundary = (Get-Date -Format 'yyyy-MM-ddT') + $StartTime
$xml = Get-Content (Join-Path $PSScriptRoot 'backup-task.xml.template') -Raw
$xml = $xml.Replace('__START_BOUNDARY__', $startBoundary)
$xml = $xml.Replace('__INSTALL_ROOT__', $InstallRoot)
$xml = $xml.Replace('__DB_NAME__', $DbName)
$xml = $xml.Replace('__BACKUP_DIR__', $BackupDir)
$xml = $xml.Replace('__OFF_MACHINE_PATH__', $OffMachinePath)
$xml = $xml.Replace('__RETENTION_DAYS__', "$RetentionDays")

$xmlPath = Join-Path $InstallRoot '.backup-task.generated.xml'
Set-Content -Path $xmlPath -Value $xml -Encoding Unicode

schtasks /create /tn $TaskName /xml $xmlPath /f
if ($LASTEXITCODE -ne 0) { throw "schtasks /create failed with exit code $LASTEXITCODE" }
Remove-Item $xmlPath -Force

Write-Host "`nScheduled Task '$TaskName' registered: daily at $StartTime, runs backup.ps1 -> $BackupDir, off-machine copy -> $OffMachinePath, retention $RetentionDays days."
Write-Host 'REBOOT this machine once before relying on the first scheduled run (see script header).'
Write-Host "`nVerify registration:  Get-ScheduledTask -TaskName '$TaskName' | Format-List *"
Write-Host "Fire it manually now to confirm end-to-end (recommended before trusting the schedule):"
Write-Host "  Start-ScheduledTask -TaskName '$TaskName'"
Write-Host "  Get-Content '$BackupDir\backup.log' -Tail 30"
