import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { CounterpartyLifecycleError } from './counterparty.types';

const ENTITY_TYPE = 'counterparty_write_off_request';

export interface RequestWriteOffInput {
  counterpartyId: string;
  writeOffAmountKobo: bigint;
  ledgerEntityCode: string;
  investmentAccountCode: string;
  reason: string;
  requestedByUserId: string;
}

// Invariant 51(b-vi) (CHECK13, BA lifecycle-gap register Tier 2):
// "counterparty closure/write-off workflow driving the existing
// IMPAIRMENT_CHARGE event under approval." IMPAIRMENT_CHARGE was seeded
// (dr 6000 Impairment Expense / cr 1100-1150 Investment Account, a RANGE
// needing an explicit override) but never fired anywhere in the codebase --
// this service is the first real trigger. Single-approval shape (FIN_ADMIN,
// who already holds JOURNAL_ENTRIES INITIATE -- see
// EventJournalService.generateAndRequestPosting's own capability
// requirement), flagged in QUESTIONS_FOR_REVIEW.md since Risk/MD sign-off
// is a plausible alternative for something this P&L-significant. Maker!=
// checker still holds structurally, and the resulting impairment journal
// itself still lands in PENDING_APPROVAL -- a genuinely different checker
// via the standing LedgerService.approveJournalPosting flow must approve
// it before it posts.
@Injectable()
export class CounterpartyWriteOffService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly eventJournal: EventJournalService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
      throw new CounterpartyLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  async requestWriteOff(input: RequestWriteOffInput) {
    await this.assertCapability(input.requestedByUserId, 'COUNTERPARTY_WRITE_OFF_INITIATION', 'INITIATE', 'propose a counterparty write-off');
    if (input.writeOffAmountKobo <= 0n) {
      throw new CounterpartyLifecycleError('writeOffAmountKobo must be positive.');
    }
    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
    if (counterparty.accountStatus !== 'OPEN') {
      throw new CounterpartyLifecycleError(`Counterparty ${input.counterpartyId} is already ${counterparty.accountStatus} -- a write-off can only be proposed against an OPEN account.`);
    }

    const request = await this.prisma.counterpartyWriteOffRequest.create({
      data: {
        counterpartyId: input.counterpartyId,
        writeOffAmountKobo: input.writeOffAmountKobo,
        ledgerEntityCode: input.ledgerEntityCode,
        investmentAccountCode: input.investmentAccountCode,
        reason: input.reason,
        requestedByUserId: input.requestedByUserId,
      },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'COUNTERPARTY_WRITE_OFF',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        initiatedByUserId: input.requestedByUserId,
        amountKobo: input.writeOffAmountKobo,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.requestedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        after: { workflowTypeCode: 'COUNTERPARTY_WRITE_OFF', reason: (err as Error).message },
      });
      await this.prisma.counterpartyWriteOffRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.counterpartyWriteOffRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideWriteOff(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.counterpartyWriteOffRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.counterpartyWriteOffRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: request.counterpartyId } });
    if (counterparty.accountStatus !== 'OPEN') {
      throw new CounterpartyLifecycleError(`Cannot approve: counterparty ${request.counterpartyId} is no longer OPEN (currently ${counterparty.accountStatus}).`);
    }

    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: request.id } });

    const { journal } = await this.eventJournal.generateAndRequestPosting({
      eventType: 'IMPAIRMENT_CHARGE',
      ledgerEntityCode: request.ledgerEntityCode,
      amountKobo: request.writeOffAmountKobo,
      crAccountCodeOverride: request.investmentAccountCode,
      entryDate: new Date(),
      referenceTokens: { counterparty_id: request.counterpartyId, date: new Date().toISOString().slice(0, 10) },
      createdByUserId: approverUserId,
    });

    await this.prisma.counterparty.update({ where: { id: request.counterpartyId }, data: { accountStatus: 'WRITTEN_OFF' } });
    const finalRequest = await this.prisma.counterpartyWriteOffRequest.update({
      where: { id: request.id },
      data: { status: 'APPROVED', postedJournalEntryId: journal.id },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'counterparty', entityId: request.counterpartyId, after: { accountStatus: 'WRITTEN_OFF', writeOffAmountKobo: request.writeOffAmountKobo.toString() } });
    return finalRequest;
  }

  async listForCounterparty(counterpartyId: string) {
    return this.prisma.counterpartyWriteOffRequest.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
  }

  async getTrail(requestId: string) {
    const request = await this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: requestId } });
    const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, workflowTrail };
  }
}
