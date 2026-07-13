import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ExecOversightError, ProposeOversightPolicyInput, StartOversightSessionInput } from './exec-oversight.types';

// Invariant 61(b)/(c) (CEO ruling, 9-Jul-2026, CHECK15): "CEO total
// visibility + Executive Oversight mode ... visibility WITHOUT initiate/
// approve fusion; maker!=checker remains inviolate for every identity
// including the CEO's." This service owns session lifecycle (start/end,
// which doubles as the standing "who viewed whom, when, duration"
// register) and the governed policy ("the dial") that can widen/narrow who
// may hold the capability WITHOUT a code change. The actual read-only data
// surface (dashboards/statements/documents/messages) is served directly by
// ExecOversightController re-calling the SAME ID-parameterized service
// methods the real portal controllers call (WmService.getPortalDashboard,
// etc.) -- deliberately NOT a shared portal session/cookie with the real
// client realm, so there is structurally no write path an oversight
// "session" could ever reach (the oversight controller defines no
// mutating routes at all -- read-only by construction, not by a checked
// flag).
@Injectable()
export class ExecOversightService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  private async assertCapability(userId: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'EXEC_OVERSIGHT', level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'exec_oversight',
        entityId: activity,
        after: { functionCode: 'EXEC_OVERSIGHT', level },
      });
      throw new ExecOversightError(`User lacks ${level} authority on EXEC_OVERSIGHT (standing or delegated), required to ${activity}.`);
    }
  }

  private async getActivePolicy() {
    return this.prisma.execOversightPolicy.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
  }

  async startSession(input: StartOversightSessionInput) {
    await this.assertCapability(input.viewedByUserId, 'APPROVE', 'start an Executive Oversight session');

    // Invariant 61(c) ("the dial"): the RBAC capability above is the
    // structural gate; the governed policy is the LIVE, board-adjustable
    // overlay on top -- narrowing takes effect the moment a new policy
    // version is approved, no redeploy required.
    const policy = await this.getActivePolicy();
    if (!policy) {
      throw new ExecOversightError('No ACTIVE ExecOversightPolicy on file -- Executive Oversight Mode is suspended until Compliance/MD_CEO approve one (never defaults to "everyone allowed").');
    }
    const grantedRoles = policy.grantedRoleCodes as string[];
    const callerRoles = await this.prisma.userRole.findMany({ where: { userId: input.viewedByUserId }, select: { roleCode: true } });
    const callerRoleCodes = new Set(callerRoles.map((r) => r.roleCode));
    const isGranted = [...callerRoleCodes].some((r) => grantedRoles.includes(r));
    if (!isGranted) {
      throw new ExecOversightError(`Executive Oversight policy v${policy.version} does not grant any of this user's roles (${[...callerRoleCodes].join(', ') || 'none'}) -- granted roles are: ${grantedRoles.join(', ')}.`);
    }

    if (input.principalType === 'INVESTOR') {
      if (!input.investorId) throw new ExecOversightError('investorId is required for an INVESTOR oversight session.');
      await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    } else {
      if (!input.counterpartyId) throw new ExecOversightError('counterpartyId is required for a COUNTERPARTY oversight session.');
      await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
    }

    const session = await this.prisma.execOversightSession.create({
      data: {
        principalType: input.principalType,
        investorId: input.principalType === 'INVESTOR' ? input.investorId : null,
        counterpartyId: input.principalType === 'COUNTERPARTY' ? input.counterpartyId : null,
        viewedByUserId: input.viewedByUserId,
        ipAddress: input.ipAddress,
      },
    });
    await this.audit.record({
      actorUserId: input.viewedByUserId,
      action: 'CREATE',
      entityType: 'exec_oversight_session',
      entityId: session.id,
      after: { principalType: input.principalType, investorId: input.investorId, counterpartyId: input.counterpartyId },
    });
    return session;
  }

  // Invariant 61(d): "the session log cannot be suppressed" -- ending a
  // session only ever SETS endedAt (a plain update on an insert-created
  // row visible via listLog() to any DATA_PROTECTION_COMPLIANCE/AUDITOR
  // VIEW holder); there is no delete path anywhere in this service.
  async endSession(sessionId: string, viewedByUserId: string) {
    const session = await this.prisma.execOversightSession.findUniqueOrThrow({ where: { id: sessionId } });
    if (session.viewedByUserId !== viewedByUserId) {
      throw new ExecOversightError('Only the user who started an oversight session may end it.');
    }
    if (session.endedAt) return session;
    const updated = await this.prisma.execOversightSession.update({ where: { id: sessionId }, data: { endedAt: new Date() } });
    await this.audit.record({
      actorUserId: viewedByUserId,
      action: 'UPDATE',
      entityType: 'exec_oversight_session',
      entityId: sessionId,
      before: { endedAt: null },
      after: { endedAt: updated.endedAt },
    });
    return updated;
  }

  async assertSessionOwnedAndActive(sessionId: string, viewedByUserId: string) {
    const session = await this.prisma.execOversightSession.findUniqueOrThrow({ where: { id: sessionId } });
    if (session.viewedByUserId !== viewedByUserId) {
      throw new ExecOversightError('This oversight session belongs to a different user.');
    }
    if (session.endedAt) {
      throw new ExecOversightError('This oversight session has already ended.');
    }
    return session;
  }

  async listLog() {
    return this.prisma.execOversightSession.findMany({
      orderBy: { startedAt: 'desc' },
      include: {
        investor: { select: { fullLegalName: true } },
        counterparty: { select: { legalName: true } },
        viewedByUser: { select: { displayName: true, email: true } },
      },
    });
  }

  // --- Governed policy ("the dial") ---

  async proposePolicy(input: ProposeOversightPolicyInput) {
    await this.assertCapability(input.proposedByUserId, 'INITIATE', 'propose an Executive Oversight policy version');
    const current = await this.prisma.execOversightPolicy.findFirst({ orderBy: { version: 'desc' } });
    const nextVersion = (current?.version ?? 0) + 1;
    const policy = await this.prisma.execOversightPolicy.create({
      data: {
        version: nextVersion,
        status: 'DRAFT',
        grantedRoleCodes: input.grantedRoleCodes,
        proposedByUserId: input.proposedByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.proposedByUserId,
      action: 'CREATE',
      entityType: 'exec_oversight_policy',
      entityId: policy.id,
      after: { version: nextVersion, grantedRoleCodes: input.grantedRoleCodes },
    });
    return policy;
  }

  async approvePolicy(policyId: string, approvedByUserId: string) {
    await this.assertCapability(approvedByUserId, 'APPROVE', 'approve an Executive Oversight policy version');
    const policy = await this.prisma.execOversightPolicy.findUniqueOrThrow({ where: { id: policyId } });
    if (policy.status !== 'DRAFT') {
      throw new ExecOversightError(`Policy version ${policy.version} is ${policy.status}, not DRAFT -- nothing to approve.`);
    }
    if (policy.proposedByUserId === approvedByUserId) {
      throw new ExecOversightError('Approver cannot be the same user who proposed this policy version (maker≠checker).');
    }
    const [, activated] = await this.prisma.$transaction([
      this.prisma.execOversightPolicy.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
      this.prisma.execOversightPolicy.update({
        where: { id: policyId },
        data: { status: 'ACTIVE', approvedByUserId, approvedAt: new Date() },
      }),
    ]);
    await this.audit.record({
      actorUserId: approvedByUserId,
      action: 'APPROVE',
      entityType: 'exec_oversight_policy',
      entityId: policyId,
      after: { version: activated.version, grantedRoleCodes: activated.grantedRoleCodes },
    });
    return activated;
  }

  async listPolicies() {
    return this.prisma.execOversightPolicy.findMany({ orderBy: { version: 'desc' } });
  }
}
