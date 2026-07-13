import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';

// Invariant 51(a-iv) (CHECK12, advisor BA lifecycle-gap register, Tier 1):
// "user login deactivation (immediate, capability-gated, audited) +
// delegation early revocation -- same-day kill switches for resignation/
// dismissal/compromise; deactivation also invoked by 50(b) offboarding."
// Deliberately its OWN small service (not folded into RbacService) --
// RbacService is directly `new`-constructed in ~50 smoke-test fixture
// files across this codebase, and adding a required constructor
// dependency there would break every one of them for a change this
// narrowly scoped.
//
// Three things happen together, not just the status flip:
//   1. AppUser.status -> SUSPENDED (blocks future logins; AuthService.
//      login already checks this).
//   2. Every ACTIVE DelegationOfAuthority this user HOLDS as delegate is
//      revoked -- DelegationService.hasCapability never checks AppUser.
//      status, so a suspended user's still-ACTIVE grant would otherwise
//      keep silently working. Deliberately scoped to grants HELD BY this
//      user, not grants they GRANTED to others (a separate policy
//      decision -- their delegate's authority was already legitimately
//      theirs to exercise).
//   3. Every already-open UserSession is revoked -- AuthService.
//      validateSession only checks UserSession.revokedAt/expiresAt on
//      each request, never AppUser.status, so an already-logged-in
//      suspended user would otherwise keep a live, working session.
// No workflow.initiate() here, matching DelegationService.revoke's own
// documented reasoning: gating an emergency stop behind a second
// signature would leave a compromised/dismissed user empowered while
// awaiting approval.
@Injectable()
export class UserDeactivationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async deactivateUser(userId: string, actorUserId: string, reason?: string) {
    const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    if (user.status === 'SUSPENDED') {
      throw new Error(`User ${userId} is already SUSPENDED.`);
    }
    await this.prisma.appUser.update({ where: { id: userId }, data: { status: 'SUSPENDED' } });

    const activeGrants = await this.prisma.delegationOfAuthority.findMany({ where: { delegateUserId: userId, status: 'ACTIVE' } });
    for (const grant of activeGrants) {
      await this.delegation.revoke(grant.id, actorUserId, reason ?? 'Delegate user deactivated (invariant 51a-iv).');
    }

    await this.prisma.userSession.updateMany({ where: { userId, revokedAt: null }, data: { revokedAt: new Date() } });

    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'app_user',
      entityId: userId,
      after: { status: 'SUSPENDED', reason, delegationsRevoked: activeGrants.length },
    });

    return this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
  }

  async reactivateUser(userId: string, actorUserId: string) {
    const updated = await this.prisma.appUser.update({ where: { id: userId }, data: { status: 'ACTIVE' } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'app_user', entityId: userId, after: { status: 'ACTIVE' } });
    return updated;
  }
}
