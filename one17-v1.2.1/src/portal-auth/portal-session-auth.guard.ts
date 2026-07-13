import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { PortalAuthService } from './portal-auth.service';
import { AuditService } from '../audit/audit.service';

export const PORTAL_SESSION_COOKIE_NAME = 'one17_portal_session';

// The realm-isolation boundary itself: this guard only ever reads
// one17_portal_session and only ever validates it against
// portal_client_session — an ops session cookie has no row there, full
// stop, regardless of which route it's presented to (the "portal session
// reaches ZERO ops endpoints" case holds in the other direction too:
// SessionAuthGuard never reads this cookie name).
@Injectable()
export class PortalSessionAuthGuard implements CanActivate {
  constructor(
    private readonly portalAuth: PortalAuthService,
    private readonly audit: AuditService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.cookies?.[PORTAL_SESSION_COOKIE_NAME];
    const user = await this.portalAuth.validateSession(token);
    if (!user) {
      await this.audit.record({
        action: 'PERMISSION_DENIED',
        entityType: 'http_request',
        entityId: `${req.method} ${req.originalUrl ?? req.url}`,
        ipAddress: req.ip,
        after: { reason: 'no valid portal session (401)' },
      });
      throw new UnauthorizedException('Not authenticated.');
    }
    req.portalUser = user;
    return true;
  }
}
