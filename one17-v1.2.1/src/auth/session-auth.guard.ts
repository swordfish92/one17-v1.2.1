import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { randomUUID } from 'node:crypto';
import { AuthService } from './auth.service';
import { AuditService } from '../audit/audit.service';
import { ALLOW_MFA_PENDING_KEY } from './allow-mfa-pending.decorator';

export const SESSION_COOKIE_NAME = 'one17_ops_session';

// The FIRST enforcement point of every protected route: is there a live
// session at all. CapabilityGuard (which runs after this one, see
// AuthModule's APP_GUARD ordering) answers the separate "may THIS user
// touch THIS route" question. CLAUDE.md CHECK4 addition: unauthenticated
// request -> 401 + audit row (with actorUserId null — we don't know who
// they are).
@Injectable()
export class SessionAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly audit: AuditService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.requestId) req.requestId = randomUUID();

    const token = req.cookies?.[SESSION_COOKIE_NAME];
    const user = await this.authService.validateSession(token);
    if (!user) {
      await this.audit.record({
        action: 'PERMISSION_DENIED',
        entityType: 'http_request',
        entityId: `${req.method} ${req.originalUrl ?? req.url}`,
        ipAddress: req.ip,
        requestId: req.requestId,
        after: { reason: 'no valid session (401)' },
      });
      throw new UnauthorizedException('Not authenticated.');
    }

    // Invariant 68(c) H-02: a session with an outstanding second factor
    // may reach ONLY the routes explicitly marked @AllowMfaPending() (the
    // MFA enroll/verify endpoints themselves) — everything else 401s,
    // same shape as "not authenticated" from the caller's point of view,
    // since a pending session genuinely cannot act on anything yet.
    if (user.mfaPending) {
      const allowed = this.reflector.get<boolean | undefined>(ALLOW_MFA_PENDING_KEY, context.getHandler());
      if (!allowed) {
        await this.audit.record({
          actorUserId: user.userId,
          action: 'PERMISSION_DENIED',
          entityType: 'http_request',
          entityId: `${req.method} ${req.originalUrl ?? req.url}`,
          ipAddress: req.ip,
          sessionId: user.sessionId,
          requestId: req.requestId,
          after: { reason: 'MFA verification still pending (401)' },
        });
        throw new UnauthorizedException('MFA verification required.');
      }
    }

    req.user = user;
    return true;
  }
}
