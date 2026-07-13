@echo off
setlocal EnableDelayedExpansion
title One17 Enterprise Platform - Deployment Launcher

:: ---------------------------------------------------------------------
:: Self-elevate to Administrator. Every menu option below needs admin
:: rights (winget installs, DB provisioning, Windows Service/Firewall/
:: Task Scheduler registration) -- asking once here, up front, is less
:: confusing than each underlying .ps1 failing partway through with an
:: "Access is denied" error.
:: ---------------------------------------------------------------------
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Requesting administrator privileges...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

:: %~dp0 is THIS script's own directory (with trailing backslash),
:: regardless of the current working directory or how it was launched --
:: matches install-one17.ps1's own $PSScriptRoot-relative resolution, so
:: this launcher works from wherever the deployment package was extracted.
set SCRIPT_DIR=%~dp0

:MENU
cls
echo ============================================================
echo   One17 Enterprise Platform -- Deployment Launcher
echo ============================================================
echo.
echo   Each option below runs one of the reviewable scripts in
echo   deploy\windows\ directly -- nothing here duplicates their
echo   logic. See DEPLOYMENT_WINDOWS.md for full documentation.
echo.
echo   1) Install  (Node / PostgreSQL / deploy bundle / database / first admin login)
echo   2) Register Windows Service (API + scheduler)
echo   3) Register Caddy (reverse proxy + automatic TLS + firewall)
echo   4) Register daily backup task
echo   5) Exit
echo.
set /p CHOICE=Choose an option [1-5]:

if "%CHOICE%"=="1" goto INSTALL
if "%CHOICE%"=="2" goto SERVICES
if "%CHOICE%"=="3" goto CADDY
if "%CHOICE%"=="4" goto BACKUP
if "%CHOICE%"=="5" goto END
echo.
echo Invalid choice -- pick a number from 1 to 5.
timeout /t 2 >nul
goto MENU

:INSTALL
cls
echo ============================================================
echo   Step 1: Install
echo ============================================================
echo.
echo Leave any prompt blank to accept the default shown in [brackets].
echo.
set /p INSTALLROOT=Install root [C:\One17]:
if "%INSTALLROOT%"=="" set INSTALLROOT=C:\One17
set /p APPDOMAIN=App (ops UI) domain [app.one17capital.com]:
if "%APPDOMAIN%"=="" set APPDOMAIN=app.one17capital.com
set /p PORTALDOMAIN=Portal domain [portal.one17capital.com]:
if "%PORTALDOMAIN%"=="" set PORTALDOMAIN=portal.one17capital.com
set /p APIDOMAIN=API domain [api.one17capital.com]:
if "%APIDOMAIN%"=="" set APIDOMAIN=api.one17capital.com
echo.
echo Running install-one17.ps1 ...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%install-one17.ps1" -InstallRoot "%INSTALLROOT%" -AppDomain "%APPDOMAIN%" -PortalDomain "%PORTALDOMAIN%" -ApiDomain "%APIDOMAIN%"
echo.
echo Install step finished (see output above for success/failure).
pause
goto MENU

:SERVICES
cls
echo ============================================================
echo   Step 2: Register Windows Service
echo ============================================================
echo.
set /p INSTALLROOT=Install root [C:\One17]:
if "%INSTALLROOT%"=="" set INSTALLROOT=C:\One17
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%register-services.ps1" -InstallRoot "%INSTALLROOT%"
echo.
pause
goto MENU

:CADDY
cls
echo ============================================================
echo   Step 3: Register Caddy (reverse proxy + TLS + firewall)
echo ============================================================
echo.
set /p INSTALLROOT=Install root [C:\One17]:
if "%INSTALLROOT%"=="" set INSTALLROOT=C:\One17
set /p APPDOMAIN=App (ops UI) domain [app.one17capital.com]:
if "%APPDOMAIN%"=="" set APPDOMAIN=app.one17capital.com
set /p PORTALDOMAIN=Portal domain [portal.one17capital.com]:
if "%PORTALDOMAIN%"=="" set PORTALDOMAIN=portal.one17capital.com
set /p APIDOMAIN=API domain [api.one17capital.com]:
if "%APIDOMAIN%"=="" set APIDOMAIN=api.one17capital.com
echo.
echo Reminder: %APPDOMAIN%, %PORTALDOMAIN%, and %APIDOMAIN% must already
echo resolve (DNS A/AAAA) to this machine's public IP before Caddy can
echo complete certificate issuance -- see DEPLOYMENT_WINDOWS.md.
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%register-caddy.ps1" -InstallRoot "%INSTALLROOT%" -AppDomain "%APPDOMAIN%" -PortalDomain "%PORTALDOMAIN%" -ApiDomain "%APIDOMAIN%"
echo.
pause
goto MENU

:BACKUP
cls
echo ============================================================
echo   Step 4: Register daily backup task
echo ============================================================
echo.
set /p INSTALLROOT=Install root [C:\One17]:
if "%INSTALLROOT%"=="" set INSTALLROOT=C:\One17
set /p OFFMACHINE=Off-machine backup destination (UNC path, required):
if "%OFFMACHINE%"=="" (
    echo.
    echo An off-machine destination is required -- a local-only backup is
    echo not an acceptable production posture. Returning to menu.
    pause
    goto MENU
)
echo.
echo You will be prompted for a backup encryption passphrase next ^(hidden input^).
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%register-backup-task.ps1" -InstallRoot "%INSTALLROOT%" -OffMachinePath "%OFFMACHINE%"
echo.
pause
goto MENU

:END
echo.
echo Exiting.
endlocal
exit /b
