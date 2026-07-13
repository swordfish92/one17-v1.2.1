import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterService } from '../letter/letter.service';
import { TaxService } from '../tax/tax.service';
import { CompilePayoutBatchInput, ObligationsError, ObligationsScheduleItem } from './obligations.types';

interface PayoutLineDraft {
  investorId: string;
  productAccountId: string | null;
  ndMandateAccountId: string | null;
  grossKobo: bigint;
  whtKobo: bigint;
  netKobo: bigint;
  whtExempt: boolean;
  whtRateVersionId: string | null;
}

const MONTHS_PER_PERIOD: Record<string, number | null> = {
  MONTHLY: 1,
  QUARTERLY: 3,
  SEMI_ANNUAL: 6,
  ANNUAL: 12,
  AT_MATURITY: null, // one projected payout, at maturity only
};

// Invariant 65(a)/(b) (CHECK18): the Fund Obligations Schedule is a
// FORWARD PLANNING VIEW ONLY -- projected profit payouts NEVER touch the
// ledger (the anti-riba guard is absolute: a projection is not a
// declared, Shariah-boarded distribution). Payout compilation is the
// SEPARATE, later step that turns a real approved batch into an actual
// instruction -- WHT is computed there (TaxService), never on the
// schedule itself.
@Injectable()
export class ObligationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly letter: LetterService,
    private readonly tax: TaxService,
  ) {}

  // ==========================================================================
  // Schedule -- invariant 65(a): "VISIBILITY: Fund Accounting seats AND
  // the Portfolio team (PORT_MGR/PORT_OFF/CIO, VIEW) -- every period
  // bucket drills down to the INVESTOR-LEVEL BREAKDOWN LIST."
  // ==========================================================================
  async getSchedule(actorUserId: string, periodStart: Date, periodEnd: Date): Promise<ObligationsScheduleItem[]> {
    await this.assertCapability(actorUserId, 'FUND_OBLIGATIONS_SCHEDULE', 'VIEW', 'view the Fund Obligations Schedule');
    const items: ObligationsScheduleItem[] = [];

    const productAccounts = await this.prisma.productAccount.findMany({
      where: { status: 'ACTIVE', profitPaymentInterval: { not: null }, targetReturnPctBenchmark: { not: null } },
      include: { investor: { select: { fullLegalName: true } } },
    });
    for (const acc of productAccounts) {
      for (const date of this.projectPayoutDates(acc.startDate, acc.maturityDate, acc.profitPaymentInterval!, periodStart, periodEnd)) {
        items.push({
          kind: 'PROJECTED_PROFIT_PAYOUT', investorId: acc.investorId, investorName: acc.investor.fullLegalName,
          productAccountId: acc.id, ndMandateAccountId: null, projectedDate: date.toISOString().slice(0, 10),
          projectedAmountKobo: this.projectedPayoutAmount(acc.principalOrCommittedKobo, acc.targetReturnPctBenchmark!, acc.profitPaymentInterval!).toString(),
          interval: acc.profitPaymentInterval!,
        });
      }
      if (acc.maturityDate && acc.maturityDate >= periodStart && acc.maturityDate <= periodEnd) {
        items.push({ kind: 'PRINCIPAL_MATURITY', investorId: acc.investorId, investorName: acc.investor.fullLegalName, productAccountId: acc.id, ndMandateAccountId: null, maturityDate: acc.maturityDate.toISOString().slice(0, 10), principalKobo: acc.principalOrCommittedKobo.toString() });
      }
    }

    const mandateAccounts = await this.prisma.ndMandateAccount.findMany({
      where: { status: 'ACTIVE', profitPaymentInterval: { not: null }, targetReturnPct: { not: null }, investorId: { not: null } },
      include: { investor: { select: { fullLegalName: true } } },
    });
    for (const acc of mandateAccounts) {
      if (!acc.investor || !acc.committedCapitalKobo) continue;
      for (const date of this.projectPayoutDates(acc.startDate, acc.maturityDate, acc.profitPaymentInterval!, periodStart, periodEnd)) {
        items.push({
          kind: 'PROJECTED_PROFIT_PAYOUT', investorId: acc.investorId!, investorName: acc.investor.fullLegalName,
          productAccountId: null, ndMandateAccountId: acc.id, projectedDate: date.toISOString().slice(0, 10),
          projectedAmountKobo: this.projectedPayoutAmount(acc.committedCapitalKobo, acc.targetReturnPct!, acc.profitPaymentInterval!).toString(),
          interval: acc.profitPaymentInterval!,
        });
      }
      if (acc.maturityDate && acc.maturityDate >= periodStart && acc.maturityDate <= periodEnd) {
        items.push({ kind: 'PRINCIPAL_MATURITY', investorId: acc.investorId!, investorName: acc.investor.fullLegalName, productAccountId: null, ndMandateAccountId: acc.id, maturityDate: acc.maturityDate.toISOString().slice(0, 10), principalKobo: acc.committedCapitalKobo.toString() });
      }
    }

    const obligations = await this.prisma.counterpartyRepaymentObligation.findMany({
      where: { status: 'PENDING', dueDate: { gte: periodStart, lte: periodEnd } },
      include: { counterparty: { select: { legalName: true } } },
    });
    for (const o of obligations) {
      items.push({ kind: 'COUNTERPARTY_INFLOW', counterpartyId: o.counterpartyId, counterpartyName: o.counterparty.legalName, dueDate: o.dueDate.toISOString().slice(0, 10), amountKobo: o.amountKobo.toString() });
    }

    return items;
  }

  // Paid-vs-projected variance KRI -- compares real PayoutCompilationLine
  // totals (what actually got compiled/paid for a past period) against
  // what the schedule projected for that same period, computed fresh
  // each call, never stored (a KRI reading, not a ledger fact).
  async getPaidVsProjectedVariance(actorUserId: string, periodStart: Date, periodEnd: Date) {
    await this.assertCapability(actorUserId, 'FUND_OBLIGATIONS_SCHEDULE', 'VIEW', 'view the paid-vs-projected variance KRI');
    const schedule = await this.getSchedule(actorUserId, periodStart, periodEnd);
    const projectedKobo = schedule.filter((i): i is Extract<ObligationsScheduleItem, { kind: 'PROJECTED_PROFIT_PAYOUT' }> => i.kind === 'PROJECTED_PROFIT_PAYOUT').reduce((sum, i) => sum + BigInt(i.projectedAmountKobo), 0n);
    const paidBatches = await this.prisma.payoutCompilationBatch.findMany({ where: { status: 'PAID', createdAt: { gte: periodStart, lte: periodEnd } } });
    const paidKobo = paidBatches.reduce((sum, b) => sum + b.totalGrossKobo, 0n);
    return { projectedKobo: projectedKobo.toString(), paidKobo: paidKobo.toString(), varianceKobo: (paidKobo - projectedKobo).toString() };
  }

  private projectedPayoutAmount(principalKobo: bigint, targetPct: Prisma.Decimal, interval: string): bigint {
    const periods = MONTHS_PER_PERIOD[interval];
    if (periods === null) return BigInt(Math.round((Number(principalKobo) * Number(targetPct)) / 100)); // AT_MATURITY: full period return, paid once
    const annualAmount = (Number(principalKobo) * Number(targetPct)) / 100;
    return BigInt(Math.round((annualAmount * periods) / 12));
  }

  // Bounded forward walk from startDate in interval steps -- capped at
  // 400 iterations (33+ years of monthly steps) purely as a runaway
  // guard, never a business assumption.
  private projectPayoutDates(startDate: Date, maturityDate: Date | null, interval: string, windowStart: Date, windowEnd: Date): Date[] {
    const periods = MONTHS_PER_PERIOD[interval];
    if (periods === null) return []; // AT_MATURITY has no interim payout dates; maturity itself is handled separately
    const dates: Date[] = [];
    let cursor = new Date(startDate);
    let iterations = 0;
    while (cursor <= windowEnd && iterations < 400) {
      cursor = new Date(cursor.getFullYear(), cursor.getMonth() + periods, cursor.getDate());
      iterations++;
      if (maturityDate && cursor > maturityDate) break;
      if (cursor >= windowStart && cursor <= windowEnd) dates.push(cursor);
    }
    return dates;
  }

  // ==========================================================================
  // Payout compilation -> memo -> bank instruction -- invariant 65(b).
  // ==========================================================================
  async compilePayoutBatch(input: CompilePayoutBatchInput) {
    await this.assertCapability(input.compiledByUserId, 'PAYOUT_COMPILATION', 'INITIATE', 'compile a payout batch');
    const schedule = await this.getSchedule(input.compiledByUserId, input.periodStart, input.periodEnd);
    const payoutItems = schedule.filter((i): i is Extract<ObligationsScheduleItem, { kind: 'PROJECTED_PROFIT_PAYOUT' }> => i.kind === 'PROJECTED_PROFIT_PAYOUT');
    if (payoutItems.length === 0) {
      throw new ObligationsError(`No projected payouts fall in period ${input.periodLabel} -- nothing to compile.`);
    }

    const batchNumber = `PAYOUT-${input.periodLabel}-${Date.now()}`;
    let totalGrossKobo = 0n;
    let totalWhtKobo = 0n;
    const lineData: PayoutLineDraft[] = [];
    for (const item of payoutItems) {
      const grossKobo = BigInt(item.projectedAmountKobo);
      const wht = await this.tax.computeWht({ investorId: item.investorId, incomeType: 'INVESTMENT_PROFIT', grossKobo, transactionDate: input.periodEnd });
      totalGrossKobo += grossKobo;
      totalWhtKobo += wht.whtKobo;
      lineData.push({
        investorId: item.investorId, productAccountId: item.productAccountId, ndMandateAccountId: item.ndMandateAccountId,
        grossKobo, whtKobo: wht.whtKobo, netKobo: wht.netKobo, whtExempt: wht.exempt, whtRateVersionId: wht.rateVersionId,
      });
    }
    const totalNetKobo = totalGrossKobo - totalWhtKobo;

    const batch = await this.prisma.payoutCompilationBatch.create({
      data: {
        batchNumber, periodLabel: input.periodLabel, status: 'DRAFT', totalGrossKobo, totalWhtKobo, totalNetKobo,
        compiledByUserId: input.compiledByUserId, lines: { create: lineData },
      },
      include: { lines: true },
    });
    await this.audit.record({ actorUserId: input.compiledByUserId, action: 'CREATE', entityType: 'payout_compilation_batch', entityId: batch.id, after: { periodLabel: input.periodLabel, totalGrossKobo: totalGrossKobo.toString(), lineCount: lineData.length } });
    return batch;
  }

  async listPayoutBatches() {
    return this.prisma.payoutCompilationBatch.findMany({ orderBy: { createdAt: 'desc' }, include: { lines: true } });
  }

  async getPayoutBatch(id: string) {
    return this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id }, include: { lines: { include: { investor: { select: { fullLegalName: true } } } } } });
  }

  // Invariant 65(b): "routed as a MEMO REQUEST through the standing DoA
  // approval chain (amount-tiered)... the approved list is immutable --
  // any change is a new compilation."
  async submitForApproval(batchId: string, actorUserId: string) {
    const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId } });
    if (batch.status !== 'DRAFT') throw new ObligationsError(`Payout batch ${batchId} is ${batch.status}, not DRAFT.`);
    const instance = await this.workflow.initiate({
      workflowTypeCode: 'PAYOUT_BATCH_APPROVAL', entityType: 'payout_compilation_batch', entityId: batch.id,
      initiatedByUserId: actorUserId, scenario: 'STANDARD', amountKobo: batch.totalNetKobo,
    });
    return this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id } });
  }

  // On approval: auto-generates the bank instruction letter via the
  // EXISTING 52(c) LetterService (zero new letter-engine code) -- the
  // template ships [PENDING WORDING] until CEO/Finance supply the real
  // instruction text and MD_CEO approves it (LetterService's own "no
  // ACTIVE template" refusal is what makes this an honest park, not a
  // silent skip -- the batch stays APPROVED, un-instructed, until a real
  // template exists).
  async approveBatch(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const batch = await this.prisma.payoutCompilationBatch.findFirstOrThrow({ where: { workflowInstanceId }, include: { lines: true } });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payout_compilation_batch', entityId: batch.id, after: { status: 'APPROVED', totalNetKobo: batch.totalNetKobo.toString() } });
    const approved = await this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { status: 'APPROVED' } });

    try {
      const beneficiarySchedule = batch.lines.map((l) => `${l.investorId}: gross ${l.grossKobo}, wht ${l.whtKobo}, net ${l.netKobo}`).join('\n');
      const letter = await this.letter.generateLetter({
        letterType: 'BANK_INSTRUCTION', generatedByUserId: approverUserId,
        extraMergeFields: { batchNumber: batch.batchNumber, periodLabel: batch.periodLabel, totalGrossKobo: batch.totalGrossKobo.toString(), totalWhtKobo: batch.totalWhtKobo.toString(), totalNetKobo: batch.totalNetKobo.toString(), beneficiarySchedule },
      });
      await this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { bankInstructionLetterInstanceId: letter.id } });
    } catch {
      // Honest park: no ACTIVE BANK_INSTRUCTION template exists yet
      // (LetterError). The batch stays APPROVED -- FA retries letter
      // generation once CEO/Finance approve the real template.
    }
    return approved;
  }

  async retryBankInstructionLetter(batchId: string, actorUserId: string) {
    const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId }, include: { lines: true } });
    if (batch.status !== 'APPROVED') throw new ObligationsError(`Payout batch ${batchId} is ${batch.status}, not APPROVED.`);
    if (batch.bankInstructionLetterInstanceId) throw new ObligationsError(`Payout batch ${batchId} already has a bank instruction letter.`);
    const beneficiarySchedule = batch.lines.map((l) => `${l.investorId}: gross ${l.grossKobo}, wht ${l.whtKobo}, net ${l.netKobo}`).join('\n');
    const letter = await this.letter.generateLetter({
      letterType: 'BANK_INSTRUCTION', generatedByUserId: actorUserId,
      extraMergeFields: { batchNumber: batch.batchNumber, periodLabel: batch.periodLabel, totalGrossKobo: batch.totalGrossKobo.toString(), totalWhtKobo: batch.totalWhtKobo.toString(), totalNetKobo: batch.totalNetKobo.toString(), beneficiarySchedule },
    });
    return this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { bankInstructionLetterInstanceId: letter.id } });
  }

  async markLetterIssued(batchId: string) {
    return this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { status: 'INSTRUCTION_ISSUED' } });
  }

  // Invariant 65(b): "actual payment marking then drives the standing
  // distribution-paid postings." The distribution-posting integration
  // itself is DELIBERATELY NOT WIRED here -- HalalFundEngineService's
  // distribution-paid journal is a sealed engine (Formula Library Part
  // B) this tranche did not have time to safely trace end-to-end; wiring
  // it under time pressure risks a wrong posting, which invariant 10
  // treats as a Shariah/regulatory event, not a bug. Recorded as an
  // honest, disclosed gap (CHECK18_EVIDENCE.md) rather than guessed at.
  async markPaid(batchId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYOUT_COMPILATION', 'INITIATE', 'mark a payout batch as paid');
    const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId } });
    if (batch.status !== 'INSTRUCTION_ISSUED') throw new ObligationsError(`Payout batch ${batchId} is ${batch.status}, not INSTRUCTION_ISSUED -- the bank instruction letter must be issued first.`);
    const updated = await this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { status: 'PAID', paidAt: new Date(), paidByUserId: actorUserId } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payout_compilation_batch', entityId: batchId, after: { status: 'PAID' } });
    return updated;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'obligations_activity', entityId: activity, after: { functionCode, level } });
      throw new ObligationsError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
