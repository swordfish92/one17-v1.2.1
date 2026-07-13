import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  PettyCashError,
  EstablishFloatInput,
  AdjustFloatCapsInput,
  CaptureVoucherInput,
  InitiateReplenishmentClaimInput,
  RecordSpotCheckInput,
} from './petty-cash.types';

// Invariant 50(a) (CHECK12): petty cash = IMPREST module, deliberately NOT
// procurement/3-way match. Float establishment/adjustment is a register
// entry here -- the actual cash movement (Dr Petty Cash Float / Cr Bank)
// happens on the EXISTING manual Journal Entries maker-checker screen
// (JOURNAL_ENTRIES/JOURNAL_POSTING), which this service does not
// duplicate. Own standalone service, no construction blast radius (brand
// new, nothing else constructs it).
@Injectable()
export class PettyCashService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  // ==========================================================================
  // Float register (direct capability-gated writes -- the actual cash
  // movement is the existing Journal Entries maker-checker flow, not this).
  // ==========================================================================
  async establishFloat(input: EstablishFloatInput) {
    await this.assertCapability(input.establishedByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'establish a petty cash float');
    if (input.floatCeilingKobo <= 0n) throw new PettyCashError('floatCeilingKobo must be positive.');
    if (input.singleVoucherCapKobo <= 0n || input.singleVoucherCapKobo > input.floatCeilingKobo) {
      throw new PettyCashError('singleVoucherCapKobo must be positive and cannot exceed floatCeilingKobo.');
    }
    const created = await this.prisma.pettyCashFloat.create({
      data: {
        floatCode: input.floatCode,
        custodianUserId: input.custodianUserId,
        officeLabel: input.officeLabel,
        ledgerEntityCode: input.ledgerEntityCode ?? 'COMPANY',
        floatCeilingKobo: input.floatCeilingKobo,
        singleVoucherCapKobo: input.singleVoucherCapKobo,
        establishedByUserId: input.establishedByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.establishedByUserId, action: 'CREATE', entityType: 'petty_cash_float', entityId: created.id,
      after: { floatCode: created.floatCode, floatCeilingKobo: created.floatCeilingKobo.toString(), singleVoucherCapKobo: created.singleVoucherCapKobo.toString() },
    });
    return created;
  }

  async adjustFloatCaps(input: AdjustFloatCapsInput) {
    await this.assertCapability(input.actorUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'adjust a petty cash float cap');
    const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: input.floatId } });
    const floatCeilingKobo = input.floatCeilingKobo ?? float.floatCeilingKobo;
    const singleVoucherCapKobo = input.singleVoucherCapKobo ?? float.singleVoucherCapKobo;
    if (singleVoucherCapKobo > floatCeilingKobo) {
      throw new PettyCashError('singleVoucherCapKobo cannot exceed floatCeilingKobo.');
    }
    const updated = await this.prisma.pettyCashFloat.update({ where: { id: input.floatId }, data: { floatCeilingKobo, singleVoucherCapKobo } });
    await this.audit.record({
      actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'petty_cash_float', entityId: input.floatId,
      after: { floatCeilingKobo: floatCeilingKobo.toString(), singleVoucherCapKobo: singleVoucherCapKobo.toString() },
    });
    return updated;
  }

  async closeFloat(floatId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'close a petty cash float');
    const balance = await this.getFloatBalance(floatId);
    if (balance.outstandingKobo > 0n) {
      throw new PettyCashError(`Cannot close float ${floatId}: ${balance.outstandingKobo} kobo of vouchers are still outstanding (unreimbursed).`);
    }
    const updated = await this.prisma.pettyCashFloat.update({ where: { id: floatId }, data: { status: 'CLOSED' } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'petty_cash_float', entityId: floatId, after: { status: 'CLOSED' } });
    return updated;
  }

  async listFloats() {
    return this.prisma.pettyCashFloat.findMany({ orderBy: { floatCode: 'asc' } });
  }

  // floatCeilingKobo - Σ(OUTSTANDING vouchers) -- "unclaimed" per invariant
  // 50(a) means "spent but not yet reimbursed via a DISBURSED claim", not
  // merely "not yet attached to a claim record" -- see the schema comment.
  async getFloatBalance(floatId: string) {
    const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: floatId } });
    const outstanding = await this.prisma.pettyCashVoucher.aggregate({
      where: { floatId, status: 'OUTSTANDING' },
      _sum: { amountKobo: true },
    });
    const outstandingKobo = outstanding._sum.amountKobo ?? 0n;
    return { floatCeilingKobo: float.floatCeilingKobo, outstandingKobo, availableKobo: float.floatCeilingKobo - outstandingKobo };
  }

  // ==========================================================================
  // Voucher capture -- raw data entry, not itself an approval point (the
  // approval happens at the replenishment CLAIM level, which bundles
  // multiple vouchers together).
  // ==========================================================================
  async captureVoucher(input: CaptureVoucherInput) {
    await this.assertCapability(input.createdByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'capture a petty cash voucher');
    const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: input.floatId } });
    if (float.status !== 'ACTIVE') throw new PettyCashError(`Float ${input.floatId} is ${float.status}, not ACTIVE -- cannot capture a voucher against it.`);
    if (input.amountKobo <= 0n) throw new PettyCashError('amountKobo must be positive.');
    if (input.amountKobo > float.singleVoucherCapKobo) {
      throw new PettyCashError(`Voucher amount ${input.amountKobo} kobo exceeds the single-voucher cap of ${float.singleVoucherCapKobo} kobo for float ${float.floatCode}.`);
    }
    const account = await this.prisma.chartOfAccount.findFirst({ where: { ledgerEntityCode: float.ledgerEntityCode, accountCode: input.expenseAccountCode, accountType: 'EXPENSE' } });
    if (!account) {
      throw new PettyCashError(`"${input.expenseAccountCode}" is not an EXPENSE account on the ${float.ledgerEntityCode} chart of accounts.`);
    }
    const created = await this.prisma.pettyCashVoucher.create({
      data: {
        floatId: input.floatId, voucherDate: input.voucherDate, payee: input.payee,
        expenseAccountCode: input.expenseAccountCode, amountKobo: input.amountKobo, createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'petty_cash_voucher', entityId: created.id,
      after: { floatId: input.floatId, payee: input.payee, expenseAccountCode: input.expenseAccountCode, amountKobo: input.amountKobo.toString() },
    });
    return created;
  }

  async listVouchers(floatId?: string) {
    return this.prisma.pettyCashVoucher.findMany({ where: floatId ? { floatId } : undefined, orderBy: { voucherDate: 'desc' } });
  }

  // ==========================================================================
  // Replenishment claim: Admin/custodian initiates -> SAU Internal Control
  // verifies (BUDGET_CONTROL_REVIEW) -> DoA approves (BUDGET_MANAGEMENT) ->
  // Finance disburses (PETTY_CASH_DISBURSEMENT). "No journal at claim
  // approval -- only at replenishment disbursement" (invariant 50a):
  // decideReplenishmentClaim's APPROVED branch is where that journal call
  // would go -- PARKED pending FinCon's confirmed event_journal_config
  // mapping for PETTY_CASH_REPLENISHMENT (Mapping 6 on the advisor's
  // sheet), same standing discipline as the five CHECK9/CHECK11 parked
  // wirings (see QUESTIONS_FOR_REVIEW.md).
  // ==========================================================================
  async initiateReplenishmentClaim(input: InitiateReplenishmentClaimInput) {
    await this.assertCapability(input.initiatedByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'initiate a petty cash replenishment claim');
    if (input.voucherIds.length === 0) throw new PettyCashError('A replenishment claim requires at least one voucher.');

    const vouchers = await this.prisma.pettyCashVoucher.findMany({ where: { id: { in: input.voucherIds } } });
    if (vouchers.length !== input.voucherIds.length) throw new PettyCashError('One or more voucherIds do not exist.');
    if (vouchers.some((v) => v.floatId !== input.floatId)) throw new PettyCashError('All vouchers in a claim must belong to the same float.');
    if (vouchers.some((v) => v.status !== 'OUTSTANDING' || v.claimId !== null)) {
      throw new PettyCashError('One or more vouchers are not OUTSTANDING or are already attached to a pending claim.');
    }

    const totalVoucherKobo = vouchers.reduce((sum, v) => sum + v.amountKobo, 0n);
    const created = await this.prisma.pettyCashReplenishmentClaim.create({
      data: { floatId: input.floatId, totalVoucherKobo, status: 'DRAFT', initiatedByUserId: input.initiatedByUserId },
    });
    await this.prisma.pettyCashVoucher.updateMany({ where: { id: { in: input.voucherIds } }, data: { claimId: created.id } });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'PETTY_CASH_REPLENISHMENT_APPROVAL',
        entityType: 'petty_cash_replenishment_claim',
        entityId: created.id,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
        amountKobo: totalVoucherKobo,
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.initiatedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'petty_cash_replenishment_claim', entityId: created.id,
        after: { workflowTypeCode: 'PETTY_CASH_REPLENISHMENT_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.pettyCashVoucher.updateMany({ where: { id: { in: input.voucherIds } }, data: { claimId: null } });
      await this.prisma.pettyCashReplenishmentClaim.delete({ where: { id: created.id } });
      throw err;
    }

    const updated = await this.prisma.pettyCashReplenishmentClaim.update({
      where: { id: created.id },
      data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id },
    });
    await this.audit.record({
      actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'petty_cash_replenishment_claim', entityId: created.id,
      after: { floatId: input.floatId, totalVoucherKobo: totalVoucherKobo.toString(), voucherCount: vouchers.length },
    });
    return { claim: updated, workflowInstance: instance };
  }

  async decideReplenishmentClaim(workflowInstanceId: string, actorUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const claim = await this.prisma.pettyCashReplenishmentClaim.findFirstOrThrow({ where: { workflowInstanceId } });

    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, actorUserId, notes);
      await this.prisma.pettyCashVoucher.updateMany({ where: { claimId: claim.id }, data: { claimId: null } });
      return this.prisma.pettyCashReplenishmentClaim.update({ where: { id: claim.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    const updated = await this.workflow.approveNextStep(workflowInstanceId, actorUserId, notes);
    if (updated.status !== 'APPROVED') return null; // still mid-chain (IC review or DoA step)

    // PARKED per invariant 50(a): no event_journal_config row for
    // PETTY_CASH_REPLENISHMENT yet -- FinCon must confirm the multi-line
    // Dr-expense-accounts/Cr-Bank mapping (Mapping 6) before a journal call
    // is added here. This is the exact point it goes once unparked:
    //   const { journal } = await this.eventJournal.generateAndRequestPosting({
    //     eventType: 'PETTY_CASH_REPLENISHMENT', ledgerEntityCode: float.ledgerEntityCode,
    //     entryDate: new Date(), amountKobo: claim.totalVoucherKobo,
    //     referenceTokens: { float_code: float.floatCode }, createdByUserId: actorUserId,
    //   });
    const [, activatedClaim] = await this.prisma.$transaction([
      this.prisma.pettyCashVoucher.updateMany({ where: { claimId: claim.id }, data: { status: 'REIMBURSED' } }),
      this.prisma.pettyCashReplenishmentClaim.update({
        where: { id: claim.id },
        data: { status: 'DISBURSED', disbursedByUserId: actorUserId, disbursedAt: new Date() },
      }),
    ]);

    await this.audit.record({
      actorUserId, action: 'UPDATE', entityType: 'petty_cash_replenishment_claim', entityId: claim.id,
      after: { status: 'DISBURSED', totalVoucherKobo: claim.totalVoucherKobo.toString(), journalWiring: 'PARKED pending FinCon PETTY_CASH_REPLENISHMENT mapping (invariant 50a)' },
    });
    return activatedClaim;
  }

  async listClaims(floatId?: string) {
    return this.prisma.pettyCashReplenishmentClaim.findMany({ where: floatId ? { floatId } : undefined, include: { vouchers: true }, orderBy: { createdAt: 'desc' } });
  }

  // ==========================================================================
  // IC spot check -- a control action in its own right, not itself
  // approval-gated further (SAU Internal Control physically counting the
  // float IS the control). Gated on APPROVE, not INITIATE: SAU_INTERNAL_
  // CONTROL's only standing grant on BUDGET_CONTROL_REVIEW is APPROVE
  // (its seat in the requisition review chain) -- there is no INITIATE
  // holder for this function anywhere in the seed.
  // ==========================================================================
  async recordSpotCheck(input: RecordSpotCheckInput) {
    await this.assertCapability(input.checkedByUserId, 'BUDGET_CONTROL_REVIEW', 'APPROVE', 'record a petty cash spot check');
    const balance = await this.getFloatBalance(input.floatId);
    const expectedKobo = balance.availableKobo;
    const varianceKobo = input.countedKobo - expectedKobo;
    const created = await this.prisma.pettyCashSpotCheck.create({
      data: { floatId: input.floatId, countedKobo: input.countedKobo, expectedKobo, varianceKobo, notes: input.notes, checkedByUserId: input.checkedByUserId },
    });
    await this.audit.record({
      actorUserId: input.checkedByUserId, action: 'CREATE', entityType: 'petty_cash_spot_check', entityId: created.id,
      after: { floatId: input.floatId, countedKobo: input.countedKobo.toString(), expectedKobo: expectedKobo.toString(), varianceKobo: varianceKobo.toString() },
    });
    return created;
  }

  async listSpotChecks(floatId?: string) {
    return this.prisma.pettyCashSpotCheck.findMany({ where: floatId ? { floatId } : undefined, orderBy: { checkedAt: 'desc' } });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'petty_cash_activity', entityId: activity, after: { functionCode, level } });
      throw new PettyCashError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
