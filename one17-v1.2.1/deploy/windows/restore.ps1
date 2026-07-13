<#
.SYNOPSIS
  Decrypts a backup.ps1 output file and restores it - companion to
  backup.ps1's AES-256-CBC encryption (same passphrase env var, same
  salt+IV-prepended format).

.DESCRIPTION
  Mirrors RUNBOOK.md's dev restore drill exactly: restores to a NEW,
  separate database (-TargetDbName), never over a live database in place -
  "restore to a parallel database/instance and cut over" is the same rule
  in production as it was in that drill. This script does not touch, stop,
  or replace the live database or the running service; cutting over
  (pointing .env.production at the restored database, or renaming
  databases) is a separate, deliberate step documented in
  DEPLOYMENT_WINDOWS.md "Rollback via backup restore" - not automated here,
  since that decision (accept the data-loss window between the backup
  timestamp and now, or not) is an operator call, not a script's to make.

.PARAMETER EncryptedFile
  Path to a *.dump.enc file produced by backup.ps1.

.PARAMETER TargetDbName
  A NEW database name to restore into (must not already exist).
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory)][string]$EncryptedFile,
  [Parameter(Mandatory)][string]$TargetDbName,
  [string]$DbHostName = 'localhost',
  [int]$DbPort = 5432,
  [string]$PgBinDir = 'C:\Program Files\PostgreSQL\16\bin'
)

$ErrorActionPreference = 'Stop'

$passphrase = $env:ONE17_BACKUP_PASSPHRASE
if (-not $passphrase) { throw 'ONE17_BACKUP_PASSPHRASE is not set in the environment - same passphrase used to encrypt is required to decrypt.' }
if (-not (Test-Path $EncryptedFile)) { throw "$EncryptedFile not found." }

$decFile = [System.IO.Path]::ChangeExtension($EncryptedFile, $null).TrimEnd('.')
if (-not $decFile.EndsWith('.dump')) { $decFile = "$decFile.dump" }
if (Test-Path $decFile) { throw "$decFile already exists - remove it first (this script refuses to overwrite a decrypted dump silently)." }

Write-Host "Decrypting $EncryptedFile -> $decFile"
$inStream = [System.IO.File]::OpenRead($EncryptedFile)
$salt = New-Object byte[] 16
[void]$inStream.Read($salt, 0, 16)

$deriveBytes = New-Object System.Security.Cryptography.Rfc2898DeriveBytes($passphrase, $salt, 210000, [System.Security.Cryptography.HashAlgorithmName]::SHA256)
$key = $deriveBytes.GetBytes(32)
$iv = $deriveBytes.GetBytes(16)

$aes = [System.Security.Cryptography.Aes]::Create()
$aes.Key = $key
$aes.IV = $iv
$aes.Mode = [System.Security.Cryptography.CipherMode]::CBC

$outStream = [System.IO.File]::Create($decFile)
try {
  $cryptoStream = New-Object System.Security.Cryptography.CryptoStream($inStream, $aes.CreateDecryptor(), [System.Security.Cryptography.CryptoStreamMode]::Read)
  $cryptoStream.CopyTo($outStream)
} catch {
  Remove-Item $decFile -Force -ErrorAction SilentlyContinue
  throw "Decryption failed - wrong passphrase, or the file is corrupt/truncated. ($($_.Exception.Message))"
} finally {
  $outStream.Close()
  $inStream.Close()
  $aes.Dispose()
}
Write-Host "Decrypted: $decFile ($((Get-Item $decFile).Length) bytes)"

Write-Host "Creating scratch target database '$TargetDbName' (never restoring over a live database in place)..."
& "$PgBinDir\createdb.exe" -U one17_app -h $DbHostName -p $DbPort $TargetDbName
if ($LASTEXITCODE -ne 0) { throw "createdb failed (exit $LASTEXITCODE) - does '$TargetDbName' already exist?" }

Write-Host "Restoring into '$TargetDbName'..."
& "$PgBinDir\pg_restore.exe" -U one17_app -h $DbHostName -p $DbPort -d $TargetDbName --verbose $decFile
if ($LASTEXITCODE -ne 0) { throw "pg_restore exited with code $LASTEXITCODE - see output above." }

Write-Host "`nRestore complete into '$TargetDbName'. Decrypted dump left at $decFile for further inspection - delete it once you're done (it is plaintext data)."
Write-Host 'Next: run RUNBOOK.md-style verification (row counts, audit_trail tamper-hash spot check, insert-only triggers still reject UPDATE/DELETE) before deciding whether to cut over.'
