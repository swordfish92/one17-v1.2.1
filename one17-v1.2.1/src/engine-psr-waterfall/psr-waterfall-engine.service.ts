import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  AllocateLossInput,
  ComputeWaterfallInput,
  ComputeWaterfallResult,
  DcGateResult,
  LossAllocationResult,
  PsrWaterfallEngineError,
  PurificationResult,
  WaterfallParticipantResult,
} from './psr-waterfall-engine.types';

// Sealed engine #2 (Check-3 pass): the Private Mudarabah PSR-waterfall
// engine per Formula Library Part A + SRS Amendment Record AMD-01/02:
// pool-constant Mudarib ratio (beta_pool), pool-constant surplus ratios
// (gamma_pool/delta_pool), TWE weighting with the hard SUM(TWE)=1+-0.0001
// assert, the 8 distribution-control (DC) gates, BR-PAE-01 confirmed-
// income-only basis, loss allocation, purification to charity. Invariant 6:
// this file shares no calculation code with src/engine-halal-fund/ — see
// this module's types file for that note in full.
//
// Documented judgment call (flagged for CHECK3_EVIDENCE.md, not silently
// resolved): the Formula Library's final CEO ruling (§A4, "canonical
// waterfall") specifies CAPITAL-weighted proportional distribution for the
// residual shortfall after any Hibah, matching the pre-ruling workbook
// engine's own `proportional_i` formula. The older SRS hard rule BR-PAE-04
// ("shortfall proportional to ENTITLEMENT weight, not capital weight")
// conflicts with this. Per this codebase's standing doctrine ("CEO ruling
// supersedes"), and because two independent sources (the workbook engine
// itself and the final CEO refinement) agree on capital-weighting while
// only the superseded SRS text says otherwise, this engine implements
// CAPITAL-weighted shortfall distribution.
@Injectable()
export class PsrWaterfallEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  computeWaterfall(input: ComputeWaterfallInput): ComputeWaterfallResult {
    if (Math.round(input.gammaPoolPct + input.deltaPoolPct) !== 100) {
      throw new PsrWaterfallEngineError(`AMD-02: gamma_pool (${input.gammaPoolPct}) + delta_pool (${input.deltaPoolPct}) must equal 100.`);
    }
    if (!(input.betaPoolPct > 0 && input.betaPoolPct < 100)) {
      throw new PsrWaterfallEngineError(`AMD-01: beta_pool (${input.betaPoolPct}) must satisfy 0 < beta_pool < 100.`);
    }
    // DC-06: Shariah flag clearance — HALT before any computation proceeds.
    if (!input.shariahFlagsClear) {
      throw new PsrWaterfallEngineError('DC-06: active Shariah non-compliance flag on this pool — distribution HALTed until cleared.');
    }

    const mudaribBaseKobo = roundKobo(Number(input.poolProfitKobo) * (input.betaPoolPct / 100));
    // PRIORITY PRINCIPLE (A4): the investor side is served first.
    const investorPoolKobo = input.poolProfitKobo - mudaribBaseKobo;

    const entitlements = new Map<string, bigint>();
    let totalEntitlementsKobo = 0n;
    for (const p of input.participants) {
      const entitlementKobo = roundKobo(Number(p.capitalKobo) * (p.targetRatePct / 100) * (p.activeDays / 365));
      entitlements.set(p.productAccountId, entitlementKobo);
      totalEntitlementsKobo += entitlementKobo;
    }

    let surplusKobo = 0n;
    let shortfallKobo = 0n;
    let hibahAppliedKobo = 0n;
    const priorityPayouts = new Map<string, bigint>();
    const hibahPerParticipant = new Map<string, bigint>();

    if (investorPoolKobo >= totalEntitlementsKobo) {
      for (const p of input.participants) priorityPayouts.set(p.productAccountId, entitlements.get(p.productAccountId)!);
      surplusKobo = investorPoolKobo - totalEntitlementsKobo;
    } else {
      shortfallKobo = totalEntitlementsKobo - investorPoolKobo;
      // AMD-01 A4: optional voluntary Hibah, funded from the Mudarib share,
      // capped at both what's offered and what shortfall actually needs,
      // and can never exceed the Mudarib's own base share.
      hibahAppliedKobo = minBig(minBig(input.hibahOfferedKobo, shortfallKobo), mudaribBaseKobo);
      const potKobo = investorPoolKobo + hibahAppliedKobo;
      const totalCapitalKobo = input.participants.reduce((s, p) => s + p.capitalKobo, 0n);
      if (totalCapitalKobo === 0n) throw new PsrWaterfallEngineError('computeWaterfall: total participant capital is zero.');
      for (const p of input.participants) {
        const share = roundKobo(Number(potKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)));
        priorityPayouts.set(p.productAccountId, share);
        if (hibahAppliedKobo > 0n) {
          hibahPerParticipant.set(p.productAccountId, roundKobo(Number(hibahAppliedKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo))));
        }
      }
    }

    // AMD-02: TWE only meaningful when a surplus actually exists to share.
    // Invariant 70(a): the TWE/gamma-delta split is itself gated on
    // surplusSharingEnabled -- when the election is off, the surplus is
    // never divided, it flows wholesale to the Mudarib (still fully
    // reconciled against poolProfitKobo by DC-01, just via
    // mudaribSurplusKobo instead of a gamma/delta split).
    const surplusPayouts = new Map<string, bigint>();
    const tweByParticipant = new Map<string, number>();
    let mudaribSurplusKobo = 0n;
    if (surplusKobo > 0n && input.surplusSharingEnabled) {
      const weightBase = input.participants.map((p) => Number(p.capitalKobo) * p.activeDays);
      const totalWeightBase = weightBase.reduce((s, w) => s + w, 0);
      if (totalWeightBase <= 0) throw new PsrWaterfallEngineError('computeWaterfall: Sigma(capital x days) is zero — cannot compute TWE.');
      let tweSum = 0;
      input.participants.forEach((p, i) => {
        const twe = weightBase[i] / totalWeightBase;
        tweByParticipant.set(p.productAccountId, twe);
        tweSum += twe;
      });
      if (Math.abs(tweSum - 1) > 0.0001) {
        throw new PsrWaterfallEngineError(`DC-03/AMD-02 hard assert: Sigma(TWE) = ${tweSum} deviates from 1.0 by more than +-0.0001 — HALT.`);
      }
      for (const p of input.participants) {
        const twe = tweByParticipant.get(p.productAccountId)!;
        surplusPayouts.set(p.productAccountId, roundKobo(Number(surplusKobo) * twe * (input.gammaPoolPct / 100)));
      }
      mudaribSurplusKobo = roundKobo(Number(surplusKobo) * (input.deltaPoolPct / 100));
    } else if (surplusKobo > 0n) {
      // Invariant 70(a): surplus-sharing NOT elected -- "runs its base PSR
      // on all profit." No TWE, no gamma/delta, no per-participant surplus
      // payout; the entire surplus is Mudarib profit.
      mudaribSurplusKobo = surplusKobo;
    }

    // DC-05: KYC withhold-and-redistribute-to-others. Withheld participants'
    // priority+surplus payouts are zeroed and the pooled amount redistributed
    // pro-rata (by capital) to the remaining KYC-valid participants.
    const validParticipants = input.participants.filter((p) => p.kycValid);
    const invalidParticipants = input.participants.filter((p) => !p.kycValid);
    let withheldKobo = 0n;
    for (const p of invalidParticipants) {
      withheldKobo += (priorityPayouts.get(p.productAccountId) ?? 0n) + (surplusPayouts.get(p.productAccountId) ?? 0n);
      priorityPayouts.set(p.productAccountId, 0n);
      surplusPayouts.set(p.productAccountId, 0n);
    }
    if (withheldKobo > 0n && validParticipants.length > 0) {
      const validCapitalTotal = validParticipants.reduce((s, p) => s + p.capitalKobo, 0n);
      for (const p of validParticipants) {
        const extra = roundKobo(Number(withheldKobo) * (Number(p.capitalKobo) / Number(validCapitalTotal)));
        priorityPayouts.set(p.productAccountId, (priorityPayouts.get(p.productAccountId) ?? 0n) + extra);
      }
    }

    const mudaribRetainedKobo = mudaribBaseKobo - hibahAppliedKobo;

    const participants: WaterfallParticipantResult[] = input.participants.map((p) => {
      const priority = priorityPayouts.get(p.productAccountId) ?? 0n;
      const surplus = surplusPayouts.get(p.productAccountId) ?? 0n;
      const hibah = hibahPerParticipant.get(p.productAccountId) ?? 0n;
      return {
        productAccountId: p.productAccountId,
        entitlementKobo: entitlements.get(p.productAccountId)!,
        twe: tweByParticipant.get(p.productAccountId) ?? 0,
        priorityPayoutKobo: priority,
        surplusPayoutKobo: surplus,
        hibahKobo: hibah,
        withheldForKyc: !p.kycValid,
        totalPayoutKobo: priority + surplus,
      };
    });

    const dcGateResults = this.runDcGates(input, {
      mudaribBaseKobo, investorPoolKobo, totalEntitlementsKobo, surplusKobo, shortfallKobo,
      mudaribRetainedKobo, mudaribSurplusKobo, participants, dcGateResults: [],
    });

    return {
      mudaribBaseKobo, investorPoolKobo, totalEntitlementsKobo, surplusKobo, shortfallKobo,
      mudaribRetainedKobo, mudaribSurplusKobo, participants, dcGateResults,
    };
  }

  // The 8 distribution control gates (DC-01..08), SRS §7.1 / Part D of the
  // Formula Library, "merge into the 25-check controls run." DC-06 (Shariah
  // flag clearance) is gated earlier, before computation even starts (a
  // HALT there prevents wasted work); the rest are checked against the
  // computed result here.
  private runDcGates(input: ComputeWaterfallInput, result: ComputeWaterfallResult): DcGateResult[] {
    const gates: DcGateResult[] = [];

    const totalFlowsKobo = result.mudaribRetainedKobo + result.mudaribSurplusKobo
      + result.participants.reduce((s, p) => s + p.totalPayoutKobo, 0n);
    const diffKobo = absBig(input.poolProfitKobo - totalFlowsKobo);
    gates.push({
      gate: 'DC-01', description: 'Reconciliation < N1 (100 kobo)',
      passed: diffKobo < 100n,
      detail: `pool_profit=${input.poolProfitKobo} vs mudarib_retained+mudarib_surplus+Sigma(payouts)=${totalFlowsKobo}, diff=${diffKobo} kobo`,
    });

    const anyNegative = result.participants.some((p) => p.totalPayoutKobo < 0n);
    gates.push({ gate: 'DC-02', description: 'No negative payouts', passed: !anyNegative, detail: anyNegative ? 'a participant payout went negative' : 'all payouts >= 0' });

    // Invariant 70(a): TWE only applies when the surplus is actually being
    // SHARED via the gamma/delta split (surplusSharingEnabled) -- when the
    // election is off, mudaribSurplusKobo absorbs 100% of any surplus and
    // no participant ever gets a TWE weight, which is correct, not a gate
    // failure.
    const tweApplicable = result.surplusKobo > 0n && input.surplusSharingEnabled;
    const tweValid = !tweApplicable || (() => {
      const sum = result.participants.reduce((s, p) => s + p.twe, 0);
      return Math.abs(sum - 1) <= 0.0001;
    })();
    gates.push({ gate: 'DC-03', description: 'Sigma(TWE) = 1 +-0.0001 when a surplus exists and surplus-sharing is elected', passed: tweValid, detail: !tweApplicable ? (result.surplusKobo === 0n ? 'no surplus this period — TWE not applicable' : 'surplus-sharing not elected on the approved prospectus sheet — surplus routed wholesale to Mudarib, TWE not applicable') : `Sigma(TWE)=${result.participants.reduce((s, p) => s + p.twe, 0)}` });

    const mutuallyExclusive = !(result.surplusKobo > 0n && result.shortfallKobo > 0n);
    gates.push({ gate: 'DC-04', description: 'Surplus and shortfall are mutually exclusive', passed: mutuallyExclusive, detail: `surplus=${result.surplusKobo}, shortfall=${result.shortfallKobo}` });

    const kycOk = result.participants.filter((p) => p.withheldForKyc).every((p) => p.totalPayoutKobo === 0n);
    gates.push({ gate: 'DC-05', description: 'KYC-invalid participants withheld and redistributed to others', passed: kycOk, detail: `${result.participants.filter((p) => p.withheldForKyc).length} participant(s) withheld` });

    gates.push({ gate: 'DC-06', description: 'Shariah flag clearance', passed: input.shariahFlagsClear, detail: input.shariahFlagsClear ? 'no active Shariah flag' : 'HALTED before computation' });

    const requiresBoard = result.investorPoolKobo > 1_000_000_000n; // > NGN10,000,000, SRS §6.2 tier 3
    gates.push({ gate: 'DC-07', description: 'Board approval required above threshold', passed: !requiresBoard || !!input.boardResolutionRef, detail: requiresBoard ? `investor_pool=${result.investorPoolKobo} kobo exceeds NGN10M tier — board_resolution_ref ${input.boardResolutionRef ? 'present' : 'MISSING'}` : 'below board-approval threshold' });

    gates.push({ gate: 'DC-08', description: 'Loss scenario requires SSB sign-off (n/a — profit period)', passed: true, detail: 'not a loss scenario' });

    return gates;
  }

  // Persists the computed waterfall as a DRAFT Distribution + line items and
  // routes it through the SAME DISTRIBUTION workflow type/approval matrix
  // as the Halal Fund engine (DISTRIBUTION_INITIATION/DISTRIBUTION_APPROVAL,
  // shared platform workflow engine — not shared engine calculation code).
  async runWaterfallDistribution(input: ComputeWaterfallInput): Promise<{ result: ComputeWaterfallResult; distributionId: string; workflowInstanceId: string }> {
    // Invariant 70(a)/(b): surplusSharingEnabled is a GOVERNANCE flag, never
    // a caller-supplied calculation input -- always overridden here from the
    // product's currently LOCKED (approvedByUserId non-null) prospectus
    // sheet in force as of recordDate, mirroring ProspectusSheetService.
    // getSheetInForceAt's own query exactly (not imported to avoid a
    // cross-module dependency for one lookup; keep this in sync if that
    // query's semantics ever change). Defaults false if no locked sheet
    // exists yet (a pool that predates invariant 70 has no election on file
    // -- "a pool without the election runs its base PSR on all profit").
    const sheet = await this.prisma.productParameters.findFirst({
      where: { productCode: input.productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: input.recordDate } },
      orderBy: { effectiveFrom: 'desc' },
    });
    const governedInput: ComputeWaterfallInput = { ...input, surplusSharingEnabled: sheet?.surplusSharingEnabled ?? false };
    const result = this.computeWaterfall(governedInput);
    const failedGate = result.dcGateResults.find((g) => !g.passed);
    if (failedGate) {
      throw new PsrWaterfallEngineError(`${failedGate.gate} failed: ${failedGate.description} — ${failedGate.detail}`);
    }

    const distribution = await this.prisma.distribution.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        productCode: input.productCode,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        recordDate: input.recordDate,
        netAvailableKobo: result.investorPoolKobo,
        toParticipantsKobo: result.participants.reduce((s, p) => s + p.totalPayoutKobo, 0n),
        retainedOrMudaribBaseKobo: result.mudaribRetainedKobo,
        boardResolutionRef: input.boardResolutionRef ?? undefined,
        status: 'DRAFT',
        createdByUserId: input.createdByUserId,
        lineItems: {
          create: result.participants.map((p) => {
            const src = input.participants.find((x) => x.productAccountId === p.productAccountId)!;
            return {
              productAccountId: p.productAccountId,
              capitalKobo: src.capitalKobo,
              targetRatePct: src.targetRatePct,
              activeDays: src.activeDays,
              entitlementKobo: p.entitlementKobo,
              twe: p.twe,
              priorityPayoutKobo: p.priorityPayoutKobo,
              surplusPayoutKobo: p.surplusPayoutKobo,
              hibahKobo: p.hibahKobo,
              totalPayoutKobo: p.totalPayoutKobo,
            };
          }),
        },
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating delete if
    // initiate() throws -- see PmsService.submitSelfScore's comment for
    // why a real $transaction can't span this call. DistributionLineItem
    // has no onDelete: Cascade on its distribution FK, so line items must
    // be deleted before the parent row.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: distribution.id,
        amountKobo: result.investorPoolKobo,
        initiatedByUserId: input.createdByUserId,
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.createdByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'distribution',
        entityId: distribution.id,
        after: { workflowTypeCode: 'DISTRIBUTION', reason: (err as Error).message },
      });
      await this.prisma.distributionLineItem.deleteMany({ where: { distributionId: distribution.id } });
      await this.prisma.distribution.delete({ where: { id: distribution.id } });
      throw err;
    }
    await this.prisma.distribution.update({ where: { id: distribution.id }, data: { workflowInstanceId: workflowInstance.id } });

    return { result, distributionId: distribution.id, workflowInstanceId: workflowInstance.id };
  }

  // Formula Library A5/F-MUD-04: "Losses borne by Rab al-Maal pro-rata to
  // capital; Mudarib loses effort only (zero capital loss) — FAS 4 sec.5."
  // DC-08: loss scenarios require SSB sign-off.
  allocateLoss(input: AllocateLossInput): LossAllocationResult {
    if (!input.ssbResolutionRef) {
      throw new PsrWaterfallEngineError('DC-08: loss scenario requires SSB sign-off (ssbResolutionRef) — none provided.');
    }
    const totalCapitalKobo = input.participants.reduce((s, p) => s + p.capitalKobo, 0n);
    if (totalCapitalKobo === 0n) throw new PsrWaterfallEngineError('allocateLoss: total participant capital is zero.');

    const participantLossKobo = input.participants.map((p) => {
      const lossKobo = roundKobo(Number(input.poolLossKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)));
      // AMD-01 A4: Hibah may also apply in LOSS periods, funded from
      // COMPANY's own funds — never from the pool, never capitalized into
      // pool NAV. Offset here is informational (reduces the investor's net
      // economic loss) but does not touch the pool-side loss allocation.
      const hibahOffsetKobo = totalCapitalKobo > 0n
        ? roundKobo(Number(input.companyFundedHibahKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)))
        : 0n;
      const netLossKobo = maxBig(0n, lossKobo - hibahOffsetKobo);
      return { productAccountId: p.productAccountId, lossKobo, hibahOffsetKobo, netLossKobo };
    });

    return { participantLossKobo };
  }

  // Formula Library A6/F-MUD-05: "Non-permissible income -> Dr Income / Cr
  // 5010 Charity Payable — never retained, never to Mudarib." Early-exit
  // penalties likewise go 100% to charity.
  purifyIncome(nonPermissibleIncomeKobo: bigint): PurificationResult {
    if (nonPermissibleIncomeKobo < 0n) {
      throw new PsrWaterfallEngineError('purifyIncome: amount must not be negative.');
    }
    return { toCharityKobo: nonPermissibleIncomeKobo };
  }
}

// All monetary values in this engine are kobo throughout (invariant #2) —
// this just rounds a kobo-scale float (produced by ratio/day-count math)
// back to an integer kobo BigInt.
function roundKobo(amountKobo: number): bigint {
  return BigInt(Math.round(amountKobo));
}

function absBig(n: bigint): bigint {
  return n < 0n ? -n : n;
}

function minBig(a: bigint, b: bigint): bigint {
  return a < b ? a : b;
}

function maxBig(a: bigint, b: bigint): bigint {
  return a > b ? a : b;
}
