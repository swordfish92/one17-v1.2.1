import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorLifecycleError } from './investor.types';

const ENTITY_TYPE = 'investor_exit_request';

export interface RequestExitInput {
  investorId: string;
  exitType: 'MATURITY_TRANSITION' | 'FINAL_EXIT';
  requestedByUserId: string;
}

// Invariant 51(b-v) (CHECK13, BA lifecycle-gap register Tier 2): "investor
// exit/closure (final statement, status, dormancy rules)." Two governed
// transitions share one request shape (mirrors
// InvestorContactAmendmentRequest): MATURITY_TRANSITION (ACTIVE -> MATURED)
// and FINAL_EXIT (ACTIVE or MATURED -> EXITED, the terminal state
// InvestorFundStatus's own comment already named). "Final statement" needs
// no new machinery here -- StatementService.generateStatementPdf never
// gates on fundStatus, so every account stays statement-able after EXITED;
// this service's job is the zero-open-holdings GATE and the status flip.
@Injectable()
export class InvestorExitService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
      throw new InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  // Zero-open-holdings gate: FINAL_EXIT requires every ProductAccount and
  // every INVESTOR-participant NdMandateAccount to be off ACTIVE (MATURED/
  // CLOSED for product accounts; anything but ACTIVE for mandate accounts —
  // DRAFT never reaches a real investor, but the check is inclusive of it
  // for safety). MATURITY_TRANSITION carries no such gate — it is itself
  // the event that would normally precede those accounts closing.
  private async assertNoOpenHoldings(investorId: string) {
    const [openProductAccounts, openMandateAccounts] = await Promise.all([
      this.prisma.productAccount.count({ where: { investorId, status: 'ACTIVE' } }),
      this.prisma.ndMandateAccount.count({ where: { investorId, participantType: 'INVESTOR', status: 'ACTIVE' } }),
    ]);
    if (openProductAccounts > 0 || openMandateAccounts > 0) {
      throw new InvestorLifecycleError(`Investor ${investorId} still has ${openProductAccounts} open product account(s) and ${openMandateAccounts} open mandate account(s) — a FINAL_EXIT cannot proceed until every holding is MATURED/CLOSED.`);
    }
  }

  async requestExit(input: RequestExitInput) {
    await this.assertCapability(input.requestedByUserId, 'INVESTOR_EXIT_INITIATION', 'INITIATE', 'propose an investor exit/maturity transition');

    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    if (input.exitType === 'MATURITY_TRANSITION' && investor.fundStatus !== 'ACTIVE') {
      throw new InvestorLifecycleError(`A MATURITY_TRANSITION request requires the investor to be ACTIVE (currently ${investor.fundStatus}).`);
    }
    if (input.exitType === 'FINAL_EXIT') {
      if (investor.fundStatus !== 'ACTIVE' && investor.fundStatus !== 'MATURED' && investor.fundStatus !== 'DORMANT') {
        throw new InvestorLifecycleError(`A FINAL_EXIT request requires the investor to be ACTIVE, MATURED, or DORMANT (currently ${investor.fundStatus}).`);
      }
      await this.assertNoOpenHoldings(input.investorId);
    }

    const request = await this.prisma.investorExitRequest.create({
      data: { investorId: input.investorId, exitType: input.exitType, requestedByUserId: input.requestedByUserId },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'INVESTOR_EXIT',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        initiatedByUserId: input.requestedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.requestedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        after: { workflowTypeCode: 'INVESTOR_EXIT', reason: (err as Error).message },
      });
      await this.prisma.investorExitRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideExit(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.investorExitRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    // TOCTOU close: re-check the same gates at decision time, since holdings
    // or status could have changed since the request was raised.
    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: request.investorId } });
    if (request.exitType === 'MATURITY_TRANSITION' && investor.fundStatus !== 'ACTIVE') {
      throw new InvestorLifecycleError(`Cannot approve: investor ${request.investorId} is no longer ACTIVE (currently ${investor.fundStatus}).`);
    }
    if (request.exitType === 'FINAL_EXIT') {
      if (investor.fundStatus !== 'ACTIVE' && investor.fundStatus !== 'MATURED' && investor.fundStatus !== 'DORMANT') {
        throw new InvestorLifecycleError(`Cannot approve: investor ${request.investorId} is no longer eligible for FINAL_EXIT (currently ${investor.fundStatus}).`);
      }
      await this.assertNoOpenHoldings(request.investorId);
    }

    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: request.id } });

    const newFundStatus = request.exitType === 'MATURITY_TRANSITION' ? 'MATURED' : 'EXITED';
    await this.prisma.investor.update({ where: { investorId: request.investorId }, data: { fundStatus: newFundStatus } });
    const finalRequest = await this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor', entityId: request.investorId, after: { fundStatus: newFundStatus } });
    return finalRequest;
  }

  async listForInvestor(investorId: string) {
    return this.prisma.investorExitRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  async getTrail(requestId: string) {
    const request = await this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: requestId } });
    const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, workflowTrail };
  }

  // Invariant 51(b-v) dormancy rules: passive detection, no maker-checker
  // (nothing is being decided, only observed). ACTIVE investors with no
  // Txn on any of their product accounts within the governed threshold flip
  // to DORMANT; the reverse (new activity detected on a DORMANT investor)
  // reactivates automatically. Investors with no ProductAccount at all are
  // skipped -- "never invested" is not "gone dormant."
  async runDormancySweep(now: Date): Promise<{ checked: number; markedDormant: number; reactivated: number }> {
    const config = await this.prisma.investorDormancyConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const cutoff = new Date(now);
    cutoff.setMonth(cutoff.getMonth() - config.monthsInactiveThreshold);

    const candidates = await this.prisma.investor.findMany({
      where: { fundStatus: { in: ['ACTIVE', 'DORMANT'] }, productAccounts: { some: {} } },
      select: { investorId: true, fundStatus: true },
    });

    let markedDormant = 0;
    let reactivated = 0;
    for (const investor of candidates) {
      const lastTxn = await this.prisma.txn.findFirst({
        where: { productAccount: { investorId: investor.investorId } },
        orderBy: { valueDate: 'desc' },
        select: { valueDate: true },
      });
      const isStale = !lastTxn || lastTxn.valueDate < cutoff;
      if (isStale && investor.fundStatus === 'ACTIVE') {
        await this.prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'DORMANT' } });
        markedDormant++;
      } else if (!isStale && investor.fundStatus === 'DORMANT') {
        await this.prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'ACTIVE' } });
        reactivated++;
      }
    }
    return { checked: candidates.length, markedDormant, reactivated };
  }
}
