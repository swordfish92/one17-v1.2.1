import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BankReconciliationService } from './bank-reconciliation.service';
import {
  OpenPeriodInput,
  RequestPeriodCloseInput,
  ApprovePeriodCloseInput,
  PeriodLifecycleError,
} from './period.types';

// Phase 2 core (CHECK2 pass, 2026-07-04): Company Accounting Design §4 item
// 8, "Finance sign-off (checker role) locks the period; post-lock entries
// only in the next open period." This service owns the OPEN->CLOSED
// state transition via the same propose(request)->WorkflowEngineService->
// approve pattern as every other governed transition in this codebase. The
// actual enforcement against posting into a CLOSED period is a hand-
// authored DB trigger on journal_entry (journal_entry_no_posting_into_
// closed_period) — not this service — per explicit instruction; this
// service only owns the period's own lifecycle. The substantive monthly
// close checklist (engine runs, bank rec, inter-entity reconciliation,
// receivables aging, TB/P&L/BS) is Phase 3+ engine-dependent and
// deliberately not gated here.
@Injectable()
export class PeriodService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly bankReconciliation: BankReconciliationService,
  ) {}

  async openPeriod(input: OpenPeriodInput) {
    await this.assertCapability(
      input.openedByUserId,
      'ACCOUNTING_PERIOD_CLOSE',
      'INITIATE',
      'open an accounting period',
    );

    const created = await this.prisma.accountingPeriod.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        openedByUserId: input.openedByUserId,
        status: 'OPEN',
      },
    });

    await this.audit.record({
      actorUserId: input.openedByUserId,
      action: 'CREATE',
      entityType: 'accounting_period',
      entityId: created.id,
      after: {
        ledgerEntityCode: input.ledgerEntityCode,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
      },
    });

    return created;
  }

  async requestPeriodClose(input: RequestPeriodCloseInput) {
    await this.assertCapability(
      input.initiatedByUserId,
      'ACCOUNTING_PERIOD_CLOSE',
      'INITIATE',
      'request closing an accounting period',
    );

    const period = await this.prisma.accountingPeriod.findUniqueOrThrow({
      where: { id: input.periodId },
    });
    if (period.status !== 'OPEN') {
      throw new PeriodLifecycleError(
        `Cannot close accounting period ${period.id}: status is ${period.status}, not OPEN.`,
      );
    }

    // Invariant 51(b-ix) (CHECK13, CEO ruling: "now needed for the first
    // monthly close, parallel run or not"): a genuine HARD gate, not an
    // advisory dashboard -- every bank statement line dated inside this
    // period must be matched to a journal entry line before the close
    // request itself can even be raised.
    const unmatchedCount = await this.bankReconciliation.countUnmatchedInWindow(period.ledgerEntityCode, period.periodStart, period.periodEnd);
    if (unmatchedCount > 0) {
      throw new PeriodLifecycleError(
        `Cannot request closing accounting period ${period.id}: ${unmatchedCount} bank statement line(s) dated within ${period.periodStart.toISOString().slice(0, 10)}..${period.periodEnd.toISOString().slice(0, 10)} are still UNMATCHED (invariant 51(b-ix) bank reconciliation gate).`,
      );
    }

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'ACCOUNTING_PERIOD_CLOSE',
      entityType: 'accounting_period',
      entityId: period.id,
      initiatedByUserId: input.initiatedByUserId,
      scenario: 'STANDARD',
    });

    await this.prisma.accountingPeriod.update({
      where: { id: period.id },
      data: { closeWorkflowInstanceId: instance.id },
    });

    await this.audit.record({
      actorUserId: input.initiatedByUserId,
      action: 'CREATE',
      entityType: 'accounting_period_close_request',
      entityId: period.id,
      after: { workflowInstanceId: instance.id },
    });

    return instance;
  }

  async approvePeriodClose(input: ApprovePeriodCloseInput) {
    const updated = await this.workflow.approveNextStep(
      input.workflowInstanceId,
      input.approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;

    const period = await this.prisma.accountingPeriod.findFirstOrThrow({
      where: { closeWorkflowInstanceId: input.workflowInstanceId },
    });

    const closed = await this.prisma.accountingPeriod.update({
      where: { id: period.id },
      data: {
        status: 'CLOSED',
        closedByUserId: input.approverUserId,
        closedAt: new Date(),
      },
    });

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'accounting_period',
      entityId: closed.id,
      after: { status: 'CLOSED' },
    });

    return closed;
  }

  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(
      userId,
      functionCode,
      level,
    );
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'period_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new PeriodLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }
}
