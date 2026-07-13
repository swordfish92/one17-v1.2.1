import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import {
  RaiseComplaintFromPortalInput,
  RaiseComplaintByStaffInput,
  AssignOwnerInput,
  EscalateComplaintInput,
  ResolveComplaintInput,
  ComplaintSlaState,
  ComplaintError,
  DsrCategory,
} from './complaint.types';

// Invariant 28(f): client-portal + staff-backend complaint module. No
// WorkflowEngineService entry — this is an operational ticket lifecycle
// (owner/escalation/resolve), not a maker!=checker approval chain; nothing
// in the invariant calls for dual signoff to close a ticket. SLA state is
// DERIVED at read time (never stored) — same "never fake green" discipline
// as RiskService.getActiveMatrix() and every other governed-config gate in
// this codebase.
@Injectable()
export class ComplaintService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  private async getActiveSlaConfig() {
    const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!config) {
      throw new ComplaintError('No ACTIVE complaint_sla_config row — cannot raise a complaint until SLA policy is seeded/approved (invariant 12/16: never a silent default).');
    }
    return config;
  }

  // Invariant 57(b)(ii): a DSR's response clock is the NDP Act statutory
  // window (DsrResponseConfig), not the ordinary complaint SLA — same "no
  // silent default" discipline as getActiveSlaConfig().
  private async getActiveDsrResponseConfig() {
    const config = await this.prisma.dsrResponseConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!config) {
      throw new ComplaintError('No ACTIVE dsr_response_config row — cannot raise a DSR until the statutory response window is seeded/approved.');
    }
    return config;
  }

  private async createComplaint(input: { investorId?: string; counterpartyId?: string; category: string; description: string; loggedByUserId?: string; isDsr?: boolean; dsrCategory?: DsrCategory }) {
    if ((input.investorId ? 1 : 0) + (input.counterpartyId ? 1 : 0) !== 1) {
      throw new ComplaintError('A complaint must identify exactly one client (investorId XOR counterpartyId).');
    }
    if (input.isDsr && !input.dsrCategory) {
      throw new ComplaintError('A DSR must carry a dsrCategory (ACCESS/RECTIFICATION/ERASURE/OBJECTION/PORTABILITY).');
    }
    const receivedAt = new Date();
    const responseDays = input.isDsr ? (await this.getActiveDsrResponseConfig()).responseDays : (await this.getActiveSlaConfig()).slaDays;
    const slaDueAt = new Date(receivedAt.getTime() + responseDays * 24 * 60 * 60_000);
    const complaint = await this.prisma.complaint.create({
      data: {
        investorId: input.investorId,
        counterpartyId: input.counterpartyId,
        category: input.category,
        description: input.description,
        receivedAt,
        slaDueAt,
        loggedByUserId: input.loggedByUserId,
        isDsr: input.isDsr ?? false,
        dsrCategory: input.isDsr ? input.dsrCategory : undefined,
      },
    });
    await this.audit.record({
      actorUserId: input.loggedByUserId,
      action: 'CREATE',
      entityType: 'complaint',
      entityId: complaint.id,
      after: { category: input.category, investorId: input.investorId, counterpartyId: input.counterpartyId, isDsr: input.isDsr ?? false, dsrCategory: input.dsrCategory },
    });
    return complaint;
  }

  // PUBLIC (portal-safe) — no capability gate; the client raises their own
  // complaint about their own account.
  async raiseFromPortal(input: RaiseComplaintFromPortalInput) {
    return this.createComplaint(input);
  }

  async raiseByStaff(input: RaiseComplaintByStaffInput) {
    await this.assertCapability(input.loggedByUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'log a complaint on a client\'s behalf');
    return this.createComplaint(input);
  }

  async assignOwner(input: AssignOwnerInput) {
    await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'assign a complaint owner');
    const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: input.complaintId } });
    const updated = await this.prisma.complaint.update({
      where: { id: input.complaintId },
      data: { ownerUserId: input.ownerUserId, status: complaint.status === 'OPEN' ? 'IN_PROGRESS' : complaint.status },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: complaint.id, after: { ownerUserId: input.ownerUserId } });
    return updated;
  }

  async escalate(input: EscalateComplaintInput) {
    await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'escalate a complaint');
    const updated = await this.prisma.complaint.update({
      where: { id: input.complaintId },
      data: { escalatedAt: new Date(), escalatedToUserId: input.escalatedToUserId },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { escalatedToUserId: input.escalatedToUserId } });
    return updated;
  }

  async resolve(input: ResolveComplaintInput) {
    await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'resolve a complaint');
    const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: input.complaintId } });
    // Invariant 57(b)(ii): "outcome recorded WITH LEGAL BASIS (erasure
    // refusals citing SEC/AML retention are lawful — the response, not
    // silence, is the obligation)" -- a DSR cannot resolve silently.
    if (complaint.isDsr && !input.dsrLegalBasis) {
      throw new ComplaintError('A DSR must be resolved with a dsrLegalBasis (the statutory ground for the outcome, including refusals).');
    }
    const updated = await this.prisma.complaint.update({
      where: { id: input.complaintId },
      data: { status: 'RESOLVED', resolvedAt: new Date(), resolutionNotes: input.resolutionNotes, dsrLegalBasis: complaint.isDsr ? input.dsrLegalBasis : undefined },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { status: 'RESOLVED', dsrLegalBasis: input.dsrLegalBasis } });
    return updated;
  }

  async close(complaintId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'close a complaint');
    const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: complaintId } });
    if (complaint.status !== 'RESOLVED') {
      throw new ComplaintError(`Complaint ${complaintId} is ${complaint.status}, not RESOLVED — resolve it before closing.`);
    }
    const updated = await this.prisma.complaint.update({ where: { id: complaintId }, data: { status: 'CLOSED' } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { status: 'CLOSED' } });
    return updated;
  }

  // Derived, never stored — "complaint volume/aging = KRI feed" (invariant
  // 28f) and the register export both call this rather than trusting a
  // status column alone to reflect elapsed time.
  slaState(complaint: { status: string; receivedAt: Date; slaDueAt: Date }, amberThresholdPct: number, asOf: Date = new Date()): ComplaintSlaState {
    if (complaint.status === 'RESOLVED' || complaint.status === 'CLOSED') return 'CLOSED';
    const totalMs = complaint.slaDueAt.getTime() - complaint.receivedAt.getTime();
    const elapsedMs = asOf.getTime() - complaint.receivedAt.getTime();
    if (asOf.getTime() > complaint.slaDueAt.getTime()) return 'BREACHED';
    if (totalMs > 0 && (elapsedMs / totalMs) * 100 >= amberThresholdPct) return 'AMBER';
    return 'ON_TRACK';
  }

  async listForInvestor(investorId: string) {
    return this.prisma.complaint.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  async listForCounterparty(counterpartyId: string) {
    return this.prisma.complaint.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
  }

  async listAll(actorUserId: string) {
    await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'VIEW', 'view the complaint register');
    return this.prisma.complaint.findMany({ orderBy: { createdAt: 'desc' } });
  }

  // Invariant 57(b)(ii): "a Compliance queue with statutory response
  // clock" -- a derived, read-only filtered view over Complaint (same
  // "no queue table of its own" pattern as
  // InvestorComplianceSweepService.listComplianceQueue()), gated on the
  // same COMPLAINT_MANAGEMENT capability the rest of this service uses
  // (the Enquiries channel is one function, DSR is a filter on it).
  async listDsrQueue(actorUserId: string) {
    await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'VIEW', 'view the DSR queue');
    const slaConfig = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    const amberThresholdPct = slaConfig?.amberThresholdPct ?? 100;
    const rows = await this.prisma.complaint.findMany({
      where: { isDsr: true },
      orderBy: { receivedAt: 'asc' },
      include: { investor: true, counterparty: true },
    });
    return rows.map((r) => ({
      ...r,
      clientName: r.investor?.fullLegalName ?? r.counterparty?.legalName ?? 'Unknown',
      responseClockState: this.slaState(r, amberThresholdPct),
    }));
  }

  // Invariant 28(f): "complaint volume/aging = KRI feed" — CPL-03 calls
  // this. Counts complaints still open (OPEN/IN_PROGRESS) that are
  // currently AMBER or BREACHED, i.e. genuinely at-risk/overdue, not just
  // "any open complaint" (a fresh, well-within-SLA ticket is not a risk
  // signal).
  async getAgingBreachCount(asOf: Date = new Date()): Promise<number> {
    const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!config) return 0;
    const open = await this.prisma.complaint.findMany({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
    return open.filter((c) => {
      const state = this.slaState(c, config.amberThresholdPct, asOf);
      return state === 'AMBER' || state === 'BREACHED';
    }).length;
  }

  // Invariant 28(f): "every complaint AUTO-POPULATES the SEC Customer
  // Complaint Register template (reg-reporting template B)" — feeds
  // regulatory-reporting's COMPLAINT_REGISTER_ROWS AUTO source key. Row
  // shape/order matches the template's own columns (S/N, NAME OF
  // COMPLAINANT, DATE RECEIVED, NATURE OF COMPLAINT, STATUS, DATE RESOLVED,
  // REMARKS) exactly, so the export can spill it column-for-column.
  async getRegisterRows(periodStart: Date, periodEnd: Date) {
    const complaints = await this.prisma.complaint.findMany({
      where: { receivedAt: { gte: periodStart, lte: periodEnd } },
      orderBy: { receivedAt: 'asc' },
      include: { investor: true, counterparty: true },
    });
    return complaints.map((c, i) => ({
      sn: i + 1,
      name: c.investor?.fullLegalName ?? c.counterparty?.legalName ?? 'Unknown',
      dateReceived: c.receivedAt.toISOString().slice(0, 10),
      nature: `${c.category}: ${c.description}`,
      status: c.status === 'RESOLVED' || c.status === 'CLOSED' ? 'RESOLVED' : 'UNRESOLVED',
      dateResolved: c.resolvedAt ? c.resolvedAt.toISOString().slice(0, 10) : '',
      remarks: c.resolutionNotes ?? '',
    }));
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'complaint_activity', entityId: activity, after: { functionCode, level } });
      throw new ComplaintError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
