import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
import { CAPABILITY_KEY, RequiredCapability } from './requires-capability.decorator';

// The SECOND enforcement point (after SessionAuthGuard). Resolves through
// the exact same DelegationService.hasCapability() every service already
// calls — CLAUDE.md Stack Decisions item 3: "one resolver, two enforcement
// points, zero duplicated rules." A route with no @RequiresCapability
// metadata is allowed through (session alone is enough — e.g. GET /auth/me).
@Injectable()
export class CapabilityGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly delegation: DelegationService,
    private readonly audit: AuditService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const required = this.reflector.get<RequiredCapability[] | undefined>(
      CAPABILITY_KEY,
      context.getHandler(),
    );
    if (!required || required.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user;
    if (!user) return false; // SessionAuthGuard should have already rejected

    // OR semantics across every stacked @RequiresCapability -- see the
    // decorator's own comment (invariant 70b discovery, CHECK24): a route
    // shared by multiple approval-chain steps (e.g. "either a CIO or an
    // MD_CEO can reach the route") is satisfied if the caller holds ANY one
    // of the listed capabilities, not all of them.
    for (const candidate of required) {
      const { eligible } = await this.delegation.hasCapability(
        user.userId,
        candidate.functionCode,
        candidate.level,
      );
      if (eligible) return true;
    }

    await this.audit.record({
      actorUserId: user.userId,
      action: 'PERMISSION_DENIED',
      entityType: 'http_request',
      entityId: `${req.method} ${req.originalUrl ?? req.url}`,
      ipAddress: req.ip,
      sessionId: user.sessionId,
      requestId: req.requestId,
      after: { requiredCapabilities: required, reason: '403' },
    });
    throw new ForbiddenException(
      `Lacks required authority on any of: ${required.map((r) => `${r.level} ${r.functionCode}`).join(' OR ')} (standing or delegated).`,
    );
  }
}
