import { CanActivate, ExecutionContext, Injectable, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';

// RES-001 F-02 (CHECK23, v1.0.2): backup.ps1 runs as a Windows Scheduled
// Task with no browser session -- authenticity here is a shared secret
// (BACKUP_REPORT_TOKEN), the same posture PaymentGatewayWebhookController's
// HMAC check documents for a non-browser server-to-server caller, just a
// static token rather than a per-request signature (there is no per-run
// payload to sign against a rotating secret -- one script, one machine,
// one operator-provisioned token). FAILS CLOSED: if the operator never set
// BACKUP_REPORT_TOKEN, the endpoint refuses every request rather than
// silently accepting an unauthenticated one -- see DEPLOYMENT_WINDOWS.md.
@Injectable()
export class BackupReportTokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const configuredToken = process.env.BACKUP_REPORT_TOKEN;
    if (!configuredToken) {
      throw new ServiceUnavailableException('BACKUP_REPORT_TOKEN is not configured on this server -- backup-run reporting is disabled until an operator sets it.');
    }
    const req = context.switchToHttp().getRequest();
    const provided = req.headers['x-backup-report-token'];
    if (provided !== configuredToken) {
      throw new UnauthorizedException('Invalid or missing backup report token.');
    }
    return true;
  }
}
