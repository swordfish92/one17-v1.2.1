import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  AccrueProvisionalInput,
  ActivateMandateInput,
  ComputeMudarabahPsrInput,
  ComputeWakalahInput,
  CreateMandateInput,
  MudarabahPsrResult,
  NdMandateEngineError,
  WakalahResult,
} from './nd-mandate-engine.types';

// Sealed engine #3 (Check-4 pass): the ND (Non-Discretionary) Mandate
// engine per Formula Library PART E §§E1-E7 — per-account computation, NO
// pooling. Invariant 6 extends pairwise to all three engines: this file
// shares no calculation code with engine-halal-fund or engine-psr-waterfall
// — see this module's types file for that note in full.
@Injectable()
export class NdMandateEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  // Invariant 42(c) (CHECK9): createMandate is the INITIATE side of the
  // ND_MANDATE_ACTIVATION workflow (capability ND_MANDATE_INITIATION) --
  // before this pass, neither createMandate nor activateMandate checked any
  // capability at all (confirmed by grep, not assumed; flagged in
  // CHECK9_EVIDENCE.md).
  //
  // Invariant 49(a) (CHECK11, atomicity sweep): this comment previously
  // claimed the mandate row and its workflow instance were "created in one
  // transaction" -- they were not; no $transaction wrapper existed anywhere
  // in this method. Corrected here, both in code and in this comment: a
  // real cross-service DB transaction can't span into workflow.initiate()
  // (see PmsService.submitSelfScore's comment for why), so this uses the
  // same compensating-delete pattern instead -- a mandate can still never
  // be left permanently unreachable if initiate() throws.
  async createMandate(input: CreateMandateInput) {
    if (input.participantType === 'INVESTOR' && !input.investorId) {
      throw new NdMandateEngineError('participantType=INVESTOR requires investorId.');
    }
    if ((input.participantType === 'FUND' || input.participantType === 'POOL') && !input.participantLedgerEntityCode) {
      throw new NdMandateEngineError(`participantType=${input.participantType} requires participantLedgerEntityCode (§E6: books as an inter-entity linked position).`);
    }
    if (input.sharingMode === 'MUDARABAH_PSR') {
      if (input.investorRatio == null || input.mudaribRatio == null) {
        throw new NdMandateEngineError('MUDARABAH_PSR mode requires investorRatio and mudaribRatio.');
      }
      if (Math.abs(input.investorRatio + input.mudaribRatio - 1) > 0.0001) {
        throw new NdMandateEngineError(`investorRatio + mudaribRatio must equal 1 (got ${input.investorRatio + input.mudaribRatio}).`);
      }
    }
    if (input.sharingMode === 'WAKALAH' && input.wakalahFeeRatePa == null) {
      throw new NdMandateEngineError('WAKALAH mode requires wakalahFeeRatePa.');
    }

    const mandate = await this.prisma.ndMandateAccount.create({
      data: {
        mandateRef: input.mandateRef,
        ledgerEntityCode: input.ledgerEntityCode,
        participantType: input.participantType,
        investorId: input.investorId,
        participantLedgerEntityCode: input.participantLedgerEntityCode,
        sharingMode: input.sharingMode,
        investorRatio: input.investorRatio,
        mudaribRatio: input.mudaribRatio,
        wakalahFeeRatePa: input.wakalahFeeRatePa,
        targetReturnPct: input.targetReturnPct,
        startDate: input.startDate,
        maturityDate: input.maturityDate,
        committedCapitalKobo: input.committedCapitalKobo,
        createdByUserId: input.createdByUserId,
        status: 'DRAFT',
      },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'ND_MANDATE_ACTIVATION',
        entityType: 'nd_mandate_account',
        entityId: mandate.id,
        initiatedByUserId: input.createdByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.createdByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'nd_mandate_account',
        entityId: mandate.id,
        after: { workflowTypeCode: 'ND_MANDATE_ACTIVATION', reason: (err as Error).message },
      });
      await this.prisma.ndMandateAccount.delete({ where: { id: mandate.id } });
      throw err;
    }
    return this.prisma.ndMandateAccount.update({
      where: { id: mandate.id },
      data: { activationWorkflowInstanceId: instance.id },
    });
  }

  // §E4 (CEO ruling, resolved): "Wakalah surplus treatment is a REQUIRED
  // per-mandate election at COMMENCEMENT — no global default." AMD-12
  // named-missing-parameter refusal: activation refuses without it.
  //
  // Invariant 42(c): activation now runs through
  // WorkflowEngineService.approveNextStep, which structurally enforces
  // maker!=checker (the same user who called createMandate cannot be the
  // one who calls activateMandate) and the ND_MANDATE_ACTIVATION
  // capability -- not just a courtesy check, a hard refusal.
  async activateMandate(input: ActivateMandateInput) {
    const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
    if (mandate.sharingMode === 'WAKALAH') {
      if (!input.surplusTreatment) {
        throw new NdMandateEngineError('AMD-12/§E4: WAKALAH mandate cannot activate without a surplus_treatment election (CLIENT_ALL | AGENT_RETAINS | SHARED) — no default exists.');
      }
      if (input.surplusTreatment === 'SHARED' && input.sharedRatio == null) {
        throw new NdMandateEngineError('surplus_treatment=SHARED requires a sharedRatio.');
      }
    }
    if (!mandate.activationWorkflowInstanceId) {
      throw new NdMandateEngineError(`Mandate ${mandate.id} has no activation workflow instance — a mandate created before invariant 42(c) landed; retro-check required before it can activate (see CHECK9_EVIDENCE.md).`);
    }
    await this.workflow.approveNextStep(mandate.activationWorkflowInstanceId, input.activatedByUserId);
    return this.prisma.ndMandateAccount.update({
      where: { id: input.ndMandateAccountId },
      data: { status: 'ACTIVE', surplusTreatment: input.surplusTreatment, sharedRatio: input.sharedRatio },
    });
  }

  // F-ND-01 (§E1): per-mandate Mudarabah-PSR sharing.
  async computeMudarabahPsr(input: ComputeMudarabahPsrInput): Promise<MudarabahPsrResult> {
    const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
    if (mandate.sharingMode !== 'MUDARABAH_PSR') throw new NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not in MUDARABAH_PSR mode.`);
    if (!input.shariahFlagsClear) throw new NdMandateEngineError('active Shariah non-compliance flag — HALT before computation.');

    const investorRatio = Number(mandate.investorRatio ?? 0);
    const mudaribRatio = Number(mandate.mudaribRatio ?? 0);
    const isLoss = input.realizedProfitKobo < 0n;

    let clientShareKobo: bigint;
    let one17ShareKobo: bigint;
    if (isLoss) {
      // "Loss: client bears capital loss on own account; One17 bears zero
      // capital loss (effort only)" — FAS 4.
      clientShareKobo = input.realizedProfitKobo;
      one17ShareKobo = 0n;
    } else {
      clientShareKobo = BigInt(Math.round(Number(input.realizedProfitKobo) * investorRatio));
      one17ShareKobo = BigInt(Math.round(Number(input.realizedProfitKobo) * mudaribRatio));
    }

    const withheldForKyc = !input.kycValid && !isLoss;
    if (withheldForKyc) clientShareKobo = 0n; // withhold, don't redistribute — no pool to redistribute to (§E3)

    const gateResults = [
      { gate: 'confirmed-income-only', passed: true, detail: 'realizedProfitKobo is the only input — no projection/provisional path exists in this engine (BR-PAE-01 by construction)' },
      { gate: 'kyc-withhold', passed: true, detail: withheldForKyc ? 'payout withheld pending KYC, not redistributed' : 'KYC valid or loss scenario' },
      { gate: 'shariah-flag-clearance', passed: input.shariahFlagsClear, detail: 'no active Shariah flag' },
      { gate: 'no-negative-payout', passed: withheldForKyc ? true : (isLoss ? true : clientShareKobo >= 0n && one17ShareKobo >= 0n), detail: `client=${clientShareKobo}, one17=${one17ShareKobo}` },
      { gate: 'reconciliation-lt-1', passed: isLoss || absBig(input.realizedProfitKobo - (clientShareKobo + one17ShareKobo) - (withheldForKyc ? BigInt(Math.round(Number(input.realizedProfitKobo) * investorRatio)) : 0n)) < 100n, detail: 'profit = client + one17 (+withheld) within N1' },
    ];

    return { clientShareKobo, one17ShareKobo, isLoss, withheldForKyc, gateResults };
  }

  // F-ND-02 (§E2): Wakalah agency-fee mode.
  async computeWakalah(input: ComputeWakalahInput): Promise<WakalahResult> {
    const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
    if (mandate.sharingMode !== 'WAKALAH') throw new NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not in WAKALAH mode.`);
    if (mandate.status !== 'ACTIVE') throw new NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not ACTIVE — cannot compute Wakalah sharing before activation (surplus_treatment must be elected).`);
    if (!input.shariahFlagsClear) throw new NdMandateEngineError('active Shariah non-compliance flag — HALT before computation.');

    const rate = Number(mandate.wakalahFeeRatePa ?? 0) / 100;
    const wakalahFeeKobo = BigInt(Math.round(Number(input.mandateAumKobo) * rate * (input.days / 365)));
    const clientReturnKobo = input.realizedProfitKobo - wakalahFeeKobo - input.incentivePortionKobo;

    // "excess_treatment (returns above expected/benchmark)" — the expected
    // return is targetReturnPct × AUM × days/365 (benchmark ONLY, never an
    // accrual basis — SC-01); anything above that is "excess".
    const expectedReturnKobo = BigInt(Math.round(Number(input.mandateAumKobo) * (Number(mandate.targetReturnPct ?? 0) / 100) * (input.days / 365)));
    const excessKobo = maxBig(0n, clientReturnKobo - expectedReturnKobo);
    let excessToClientKobo = 0n;
    let excessToAgentKobo = 0n;
    if (excessKobo > 0n) {
      if (mandate.surplusTreatment === 'CLIENT_ALL') excessToClientKobo = excessKobo;
      else if (mandate.surplusTreatment === 'AGENT_RETAINS') excessToAgentKobo = excessKobo;
      else if (mandate.surplusTreatment === 'SHARED') {
        const ratio = Number(mandate.sharedRatio ?? 0);
        excessToClientKobo = BigInt(Math.round(Number(excessKobo) * ratio));
        excessToAgentKobo = excessKobo - excessToClientKobo;
      }
    }

    const withheldForKyc = !input.kycValid;
    const finalClientReturnKobo = withheldForKyc ? 0n : maxBig(0n, clientReturnKobo);

    const gateResults = [
      { gate: 'confirmed-income-only', passed: true, detail: 'realizedProfitKobo is the only input' },
      { gate: 'kyc-withhold', passed: true, detail: withheldForKyc ? 'payout withheld pending KYC' : 'KYC valid' },
      { gate: 'shariah-flag-clearance', passed: input.shariahFlagsClear, detail: 'no active Shariah flag' },
      { gate: 'no-negative-payout', passed: finalClientReturnKobo >= 0n, detail: `client return=${finalClientReturnKobo}` },
    ];

    return { wakalahFeeKobo, clientReturnKobo: finalClientReturnKobo, excessKobo, excessToClientKobo, excessToAgentKobo, withheldForKyc, gateResults };
  }

  // F-ND-03 (§E7): daily provisional accrual, flagged PROVISIONAL — extends
  // the SRS §5.5 is_pls precedent, NOT a new doctrine. NEVER a distribution
  // basis.
  async accrueProvisional(input: AccrueProvisionalInput) {
    const provisionalAmountKobo = BigInt(Math.round(Number(input.capitalKobo) * (input.expectedRatePct / 100) * (1 / 365)));
    return this.prisma.ndMandateProvisionalAccrual.upsert({
      where: { ndMandateAccountId_accrualDate: { ndMandateAccountId: input.ndMandateAccountId, accrualDate: input.accrualDate } },
      create: { ndMandateAccountId: input.ndMandateAccountId, accrualDate: input.accrualDate, capitalKobo: input.capitalKobo, expectedRatePct: input.expectedRatePct, provisionalAmountKobo, status: 'PROVISIONAL' },
      update: { capitalKobo: input.capitalKobo, expectedRatePct: input.expectedRatePct, provisionalAmountKobo },
    });
  }

  // "On ACTUAL declaration: reverse provisional in full, book actual
  // (JE-RCPT pattern), compute sharing on ACTUAL."
  async reverseAndTrueUp(accrualId: string, trueUpJournalRef: string) {
    const accrual = await this.prisma.ndMandateProvisionalAccrual.findUniqueOrThrow({ where: { id: accrualId } });
    if (accrual.status !== 'PROVISIONAL') {
      throw new NdMandateEngineError(`accrual ${accrualId} is already ${accrual.status} — cannot true-up twice.`);
    }
    return this.prisma.ndMandateProvisionalAccrual.update({
      where: { id: accrualId },
      data: { status: 'TRUED_UP', trueUpJournalRef, reversedAt: new Date() },
    });
  }

  // Aging KRI (§E7): provisional accruals outstanding beyond N days without
  // declaration. Config threshold, not hardcoded (invariant 10) — accepted
  // as a parameter here; the Phase 4 KRI engine (task 52) is where this
  // becomes a governed, scheduled reading.
  async findAgingProvisionals(thresholdDays: number, asOfDate: Date) {
    const cutoff = new Date(asOfDate.getTime() - thresholdDays * 24 * 60 * 60 * 1000);
    return this.prisma.ndMandateProvisionalAccrual.findMany({
      where: { status: 'PROVISIONAL', accrualDate: { lte: cutoff } },
    });
  }

  // Persists the computed sharing as a DRAFT Distribution + a single
  // DistributionLineItem (per-account, no pooling — one participation per
  // event, not N-across-a-pool) and routes it through the SAME DISTRIBUTION
  // workflow type as the other two engines (§E3: "distribution через the
  // standing DISTRIBUTION workflow, maker≠checker, Board threshold per
  // DoA").
  async runNdMandateDistribution(ndMandateAccountId: string, method: 'ND_MUDARABAH' | 'ND_WAKALAH', totalPayoutKobo: bigint, createdByUserId: string) {
    const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: ndMandateAccountId } });
    const today = new Date();
    const distribution = await this.prisma.distribution.create({
      data: {
        ledgerEntityCode: mandate.ledgerEntityCode,
        productCode: 'ONE17-ND-MANDATE',
        method,
        periodStart: mandate.startDate,
        periodEnd: mandate.maturityDate ?? today,
        recordDate: today,
        netAvailableKobo: totalPayoutKobo,
        toParticipantsKobo: totalPayoutKobo,
        retainedOrMudaribBaseKobo: 0n,
        status: 'DRAFT',
        createdByUserId,
        lineItems: {
          create: [{
            ndMandateAccountId,
            capitalKobo: 0n,
            totalPayoutKobo,
          }],
        },
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep) -- see createMandate's
    // matching comment above for why this is a compensating delete, not a
    // $transaction. The nested lineItems create() means both the
    // distribution row AND its line item are removed together on failure.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: distribution.id,
        amountKobo: totalPayoutKobo,
        initiatedByUserId: createdByUserId,
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: createdByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'distribution',
        entityId: distribution.id,
        after: { workflowTypeCode: 'DISTRIBUTION', reason: (err as Error).message },
      });
      // DistributionLineItem has no onDelete: Cascade on its distribution
      // FK -- deleting the parent first would hit a FK constraint violation.
      await this.prisma.distributionLineItem.deleteMany({ where: { distributionId: distribution.id } });
      await this.prisma.distribution.delete({ where: { id: distribution.id } });
      throw err;
    }
    await this.prisma.distribution.update({ where: { id: distribution.id }, data: { workflowInstanceId: workflowInstance.id } });

    return { distribution, workflowInstanceId: workflowInstance.id };
  }

  // CHECK5 item 5m: "ND Mandate (register + deal-consent queue)" per
  // CLAUDE.md's ops-UI screen inventory — read-only browse methods added
  // this pass; no LIST method existed before (the engine was write-path
  // only, service+smoke-tested, never exposed to a staff screen).
  async listAccounts(ledgerEntityCode?: string) {
    return this.prisma.ndMandateAccount.findMany({
      where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
  }

  async listAgingProvisionals(thresholdDays: number) {
    const rows = await this.findAgingProvisionals(thresholdDays, new Date());
    return rows.map((r) => ({
      ...r,
      capitalKobo: r.capitalKobo.toString(),
      provisionalAmountKobo: r.provisionalAmountKobo.toString(),
      daysOld: Math.floor((Date.now() - r.accrualDate.getTime()) / (24 * 60 * 60 * 1000)),
    }));
  }
}

function absBig(n: bigint): bigint {
  return n < 0n ? -n : n;
}

function maxBig(a: bigint, b: bigint): bigint {
  return a > b ? a : b;
}
