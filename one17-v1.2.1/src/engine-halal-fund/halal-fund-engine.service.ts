import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import {
  AccrueFeesInput,
  ComputeDailyNavInput,
  DailyNavResult,
  DistributionParticipantResult,
  HalalFundEngineError,
  ProposeMarketValueEntryInput,
  ApproveMarketValueEntryInput,
  RunDistributionInput,
  RunDistributionResult,
} from './halal-fund-engine.types';

// Sealed engine #1 (Check-3 pass): the Halal Fund unit-NAV engine per
// Formula Library Part B — F-HF-01 (daily NAV), F-HF-02 (bid/offer unit
// pricing), F-HF-03 (position accrual, folded into NAV), F-HF-04 (5-fee
// daily accrual), F-HF-06 (distribution engine, AMD-05 dual methods + the
// corrected rolling register, AMD-04 DRIP guards). Invariant 6: this file
// shares no calculation code with src/engine-psr-waterfall/ — see this
// module's types file for that note in full; every helper below is local
// to this engine on purpose, even where the math resembles the PSR side.
@Injectable()
export class HalalFundEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly delegation: DelegationService,
  ) {}

  private async assertCapability(userId: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'NAV_MARKET_VALUE_ENTRY', level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'portfolio_market_value_entry', entityId: activity, after: { functionCode: 'NAV_MARKET_VALUE_ENTRY', level } });
      throw new HalalFundEngineError(`User lacks ${level} authority on NAV_MARKET_VALUE_ENTRY (standing or delegated), required to ${activity}.`);
    }
  }

  // CHECK16 62(c): "enter/correct" -- a correction is a NEW proposal (next
  // version), never an edit of an already-approved row, so the visible
  // history stays intact.
  async proposeMarketValueEntry(input: ProposeMarketValueEntryInput) {
    await this.assertCapability(input.proposedByUserId, 'INITIATE', `propose a portfolio market value for ${input.ledgerEntityCode} on ${input.valuationDate.toISOString().slice(0, 10)}`);
    if (input.marketValueKobo <= 0n) throw new HalalFundEngineError('marketValueKobo must be positive.');
    const latest = await this.prisma.portfolioMarketValueEntry.findFirst({
      where: { ledgerEntityCode: input.ledgerEntityCode, valuationDate: input.valuationDate },
      orderBy: { version: 'desc' },
    });
    const entry = await this.prisma.portfolioMarketValueEntry.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        valuationDate: input.valuationDate,
        version: (latest?.version ?? 0) + 1,
        marketValueKobo: input.marketValueKobo,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'portfolio_market_value_entry', entityId: entry.id, after: { ledgerEntityCode: entry.ledgerEntityCode, valuationDate: entry.valuationDate.toISOString(), marketValueKobo: entry.marketValueKobo.toString(), version: entry.version } });
    return entry;
  }

  // maker≠checker: a DIFFERENT FUND_ACCT-capable user than whoever
  // proposed. Approving supersedes any prior ACTIVE row for the SAME
  // (ledgerEntityCode, valuationDate) -- never two ACTIVE rows at once.
  async approveMarketValueEntry(input: ApproveMarketValueEntryInput) {
    await this.assertCapability(input.approvedByUserId, 'APPROVE', 'approve a portfolio market value entry');
    const entry = await this.prisma.portfolioMarketValueEntry.findUniqueOrThrow({ where: { id: input.entryId } });
    if (entry.status !== 'DRAFT') throw new HalalFundEngineError(`portfolio_market_value_entry ${entry.id} is ${entry.status}, not DRAFT.`);
    if (entry.proposedByUserId === input.approvedByUserId) {
      throw new HalalFundEngineError('Approver cannot be the same user who proposed this market value entry (maker≠checker).');
    }
    const [, approved] = await this.prisma.$transaction([
      this.prisma.portfolioMarketValueEntry.updateMany({
        where: { ledgerEntityCode: entry.ledgerEntityCode, valuationDate: entry.valuationDate, status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.portfolioMarketValueEntry.update({
        where: { id: entry.id },
        data: { status: 'ACTIVE', approvedByUserId: input.approvedByUserId, approvedAt: new Date() },
      }),
    ]);
    await this.audit.record({ actorUserId: input.approvedByUserId, action: 'APPROVE', entityType: 'portfolio_market_value_entry', entityId: entry.id, after: { status: 'ACTIVE' } });
    return approved;
  }

  // Full visible history -- every version, every status, both actors.
  async listMarketValueEntries(ledgerEntityCode: string) {
    return this.prisma.portfolioMarketValueEntry.findMany({
      where: { ledgerEntityCode },
      include: {
        proposedByUser: { select: { displayName: true, email: true } },
        approvedByUser: { select: { displayName: true, email: true } },
      },
      orderBy: [{ valuationDate: 'desc' }, { version: 'desc' }],
    });
  }

  // F-HF-01 + F-HF-02 + F-HF-03 (position accrual folded in). Pure
  // computation — does not persist. See publishAndLockNav for the
  // INSERT+LOCK publication step.
  async computeDailyNav(input: ComputeDailyNavInput): Promise<DailyNavResult> {
    const { ledgerEntityCode, valuationDate } = input;

    const positions = await this.prisma.portfolioPosition.findMany({
      where: {
        ledgerEntityCode,
        entryDate: { lte: valuationDate },
        status: { not: 'EXITED' },
      },
    });

    // CHECK16 62(c): a governed, FA-confirmed manual market-value entry for
    // this EXACT (ledgerEntityCode, valuationDate) overrides the bottom-up
    // sum below entirely -- "enter/correct per-date portfolio market values
    // feeding computeDailyNav." activeOutstandingPrincipalKobo still needs
    // computing from positions regardless (uninvestedCashKobo depends on
    // it below), so the position loop always runs; only portfolioMktValKobo
    // itself gets replaced when an override exists.
    const marketValueOverride = await this.prisma.portfolioMarketValueEntry.findFirst({
      where: { ledgerEntityCode, valuationDate, status: 'ACTIVE' },
      orderBy: { version: 'desc' },
    });

    let portfolioMktValKobo = 0n;
    let activeOutstandingPrincipalKobo = 0n;
    for (const pos of positions) {
      if (pos.status === 'MATURED' && pos.maturityDate && pos.maturityDate < valuationDate) continue;
      const outstandingKobo = pos.principalKobo - pos.repaidKobo;
      if (pos.isEquity) {
        const markPrice = pos.markPriceKobo != null ? Number(pos.markPriceKobo) : Number(pos.principalKobo);
        const qty = pos.markQty != null ? Number(pos.markQty) : 0;
        portfolioMktValKobo += BigInt(Math.round(markPrice * qty));
      } else {
        const capDate = pos.maturityDate && pos.maturityDate < valuationDate ? pos.maturityDate : valuationDate;
        const days = daysBetween(pos.entryDate, capDate);
        const rate = pos.ratePct != null ? Number(pos.ratePct) / 100 : 0;
        const accruedNaira = (Number(outstandingKobo) / 100) * rate * (days / 365);
        const mktValKobo = outstandingKobo + BigInt(Math.round(accruedNaira * 100));
        portfolioMktValKobo += mktValKobo;
      }
      activeOutstandingPrincipalKobo += outstandingKobo;
    }
    const marketValueSource: 'BOTTOM_UP' | 'MANUAL_ENTRY' = marketValueOverride ? 'MANUAL_ENTRY' : 'BOTTOM_UP';
    if (marketValueOverride) portfolioMktValKobo = marketValueOverride.marketValueKobo;

    const subs = await this.prisma.txn.aggregate({
      where: { ledgerEntityCode, txnType: 'SUBSCRIPTION', valueDate: { lte: valuationDate } },
      _sum: { amountKobo: true },
    });
    const reds = await this.prisma.txn.aggregate({
      where: { ledgerEntityCode, txnType: 'REDEMPTION', valueDate: { lte: valuationDate } },
      _sum: { amountKobo: true },
    });
    const paidDistributions = await this.prisma.distribution.aggregate({
      where: { ledgerEntityCode, status: 'PAID', paidAt: { lte: valuationDate } },
      _sum: { toParticipantsKobo: true },
    });
    // REDEMPTION amounts are stored negative (Migration Data Standards
    // convention, carried through from TPL_05) — subtracting a negative
    // redemption sum would double-count, so we take the absolute value.
    const subsKobo = subs._sum.amountKobo ?? 0n;
    const redsKobo = absBigInt(reds._sum.amountKobo ?? 0n);
    const paidDistKobo = paidDistributions._sum.toParticipantsKobo ?? 0n;
    const uninvestedCashKobo = subsKobo - redsKobo - activeOutstandingPrincipalKobo - paidDistKobo;

    const feeRows = await this.prisma.feeAccrual.findMany({
      where: { ledgerEntityCode, accrualDate: { lte: valuationDate } },
      orderBy: { accrualDate: 'desc' },
    });
    const latestPerType = new Map<string, { cumulativeAmountKobo: bigint; paidAmountKobo: bigint }>();
    for (const row of feeRows) {
      if (!latestPerType.has(row.feeType)) latestPerType.set(row.feeType, row);
    }
    let accruedUnpaidFeesKobo = 0n;
    for (const row of latestPerType.values()) {
      accruedUnpaidFeesKobo += row.cumulativeAmountKobo - row.paidAmountKobo;
    }

    const totalNavKobo = portfolioMktValKobo + uninvestedCashKobo - accruedUnpaidFeesKobo;

    const unitsAgg = await this.prisma.txn.aggregate({
      where: {
        ledgerEntityCode,
        txnType: { in: ['SUBSCRIPTION', 'REDEMPTION'] },
        valueDate: { lte: valuationDate },
      },
      _sum: { unitsQty: true },
    });
    const unitsOutstanding = Number(unitsAgg._sum.unitsQty ?? 0);

    let navPerUnit: number;
    if (sameDay(valuationDate, input.launchDate)) {
      navPerUnit = input.launchPrice;
    } else if (unitsOutstanding <= 0) {
      navPerUnit = input.launchPrice;
    } else {
      navPerUnit = Number(totalNavKobo) / 100 / unitsOutstanding;
    }
    const offerPrice = round4(navPerUnit * (1 + input.offerSpreadPct));
    const bidPrice = round4(navPerUnit * (1 - input.bidSpreadPct));

    return {
      valuationDate,
      portfolioMktValKobo,
      marketValueSource,
      uninvestedCashKobo,
      accruedUnpaidFeesKobo,
      totalNavKobo,
      unitsOutstanding,
      navPerUnit: round4(navPerUnit),
      offerPrice,
      bidPrice,
    };
  }

  // "PUBLICATION: locked rows are hardcoded published values (paste-
  // special) -> in software: INSERT + LOCK at publish; published NAV never
  // drifts." One-way: the nav_record_locked_immutable DB trigger then
  // blocks any UPDATE/DELETE on this row, for good.
  async publishAndLockNav(input: ComputeDailyNavInput) {
    const existing = await this.prisma.navRecord.findUnique({
      where: { ledgerEntityCode_valuationDate: { ledgerEntityCode: input.ledgerEntityCode, valuationDate: input.valuationDate } },
    });
    if (existing) {
      throw new HalalFundEngineError(`nav_record already exists for ${input.ledgerEntityCode} on ${input.valuationDate.toISOString().slice(0, 10)} (locked=${existing.isLocked}) — publication is one-shot per date.`);
    }
    const computed = await this.computeDailyNav(input);
    return this.prisma.navRecord.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        valuationDate: computed.valuationDate,
        portfolioMktValKobo: computed.portfolioMktValKobo,
        uninvestedCashKobo: computed.uninvestedCashKobo,
        accruedUnpaidFeesKobo: computed.accruedUnpaidFeesKobo,
        totalNavKobo: computed.totalNavKobo,
        unitsOutstanding: computed.unitsOutstanding,
        navPerUnit: computed.navPerUnit,
        offerPrice: computed.offerPrice,
        bidPrice: computed.bidPrice,
        isLocked: true,
        lockedAt: new Date(),
      },
    });
  }

  // F-HF-02 subscription/redemption unit allocation: client buys at OFFER,
  // sells (redeems) at BID.
  allocateSubscriptionUnits(amountKobo: bigint, offerPrice: number): number {
    if (offerPrice <= 0) throw new HalalFundEngineError('offerPrice must be > 0 to allocate subscription units.');
    return round4(Number(amountKobo) / 100 / offerPrice);
  }

  computeRedemptionProceedsKobo(units: number, bidPrice: number): bigint {
    if (bidPrice <= 0) throw new HalalFundEngineError('bidPrice must be > 0 to compute redemption proceeds.');
    return BigInt(Math.round(units * bidPrice * 100));
  }

  // F-HF-02 in isolation, given an already-known TotalNAV and units
  // outstanding (rather than deriving TotalNAV itself from position data,
  // which computeDailyNav does). Exposed as its own pure method specifically
  // for the replay harness (task 42): the ingested workbook history has real
  // NAV/units figures but not the underlying portfolio-position book, so the
  // replay comparison can only recompute the PRICING formula, not the full
  // bottom-up NAV — a documented scope boundary, not an oversight.
  computeUnitPricingFromNav(totalNavKobo: bigint, unitsOutstanding: number, offerSpreadPct: number, bidSpreadPct: number): { navPerUnit: number; offerPrice: number; bidPrice: number } {
    if (unitsOutstanding <= 0) throw new HalalFundEngineError('unitsOutstanding must be > 0 to compute unit pricing.');
    const navPerUnit = round4(Number(totalNavKobo) / 100 / unitsOutstanding);
    return {
      navPerUnit,
      offerPrice: round4(navPerUnit * (1 + offerSpreadPct)),
      bidPrice: round4(navPerUnit * (1 - bidSpreadPct)),
    };
  }

  // F-HF-04: 5 fee types, daily, rate x NAV base / 365.
  async accrueFees(input: AccrueFeesInput) {
    const ledgerEntity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: input.ledgerEntityCode } });
    if (ledgerEntity.entityType === 'POOL') {
      throw new HalalFundEngineError(`AMD-03: ledger entity ${input.ledgerEntityCode} is a POOL — no fee accrual of any type may be posted against a Mudarabah pool.`);
    }
    const results: Awaited<ReturnType<typeof this.prisma.feeAccrual.upsert>>[] = [];
    for (const fee of input.feeRates) {
      const prior = await this.prisma.feeAccrual.findFirst({
        where: { ledgerEntityCode: input.ledgerEntityCode, feeType: fee.feeType, accrualDate: { lt: input.accrualDate } },
        orderBy: { accrualDate: 'desc' },
      });
      const priorCumulative = prior?.cumulativeAmountKobo ?? 0n;
      const dailyNaira = (Number(input.navBaseKobo) / 100) * (fee.annualRatePct / 100) / 365;
      const dailyKobo = BigInt(Math.round(dailyNaira * 100));
      const cumulativeKobo = priorCumulative + dailyKobo;
      const row = await this.prisma.feeAccrual.upsert({
        where: { ledgerEntityCode_feeType_accrualDate: { ledgerEntityCode: input.ledgerEntityCode, feeType: fee.feeType, accrualDate: input.accrualDate } },
        create: {
          ledgerEntityCode: input.ledgerEntityCode,
          feeType: fee.feeType,
          accrualDate: input.accrualDate,
          dailyAmountKobo: dailyKobo,
          cumulativeAmountKobo: cumulativeKobo,
        },
        update: { dailyAmountKobo: dailyKobo, cumulativeAmountKobo: cumulativeKobo },
      });
      results.push(row);
    }
    return results;
  }

  // F-HF-06 + AMD-05 (dual methods, corrected rolling register) + AMD-04
  // (DRIP guards). Persists a DRAFT Distribution + line items, then routes
  // it through the SAME DISTRIBUTION workflow type/approval matrix built
  // and adversarially tested in Phase 1 (<1M / 1-10M / >10M tiers,
  // DISTRIBUTION_INITIATION to initiate, DISTRIBUTION_APPROVAL to approve)
  // — no new approval machinery invented for the engine.
  async runDistribution(input: RunDistributionInput): Promise<{ result: RunDistributionResult; distributionId: string; workflowInstanceId: string }> {
    if (input.distributablePct < 0.8) {
      throw new HalalFundEngineError(`F-HF-05: distributable % (${input.distributablePct}) is below the SEC floor of 80% — never permitted below, per B0.`);
    }

    const methodUsed = input.method ?? (input.navHistoryComplete ? 'NAV' : 'INCOME');
    const rawAmountKobo = methodUsed === 'NAV'
      ? input.closingNavKobo - input.openingNavKobo - input.netSubscriptionsKobo
      : input.incomeBasisKobo;

    const netAvailableKobo = maxBig(0n, rawAmountKobo - input.priorDeclaredKobo);
    const toParticipantsKobo = maxBig(0n, BigInt(Math.round(Number(netAvailableKobo) * input.distributablePct)));
    const retainedKobo = netAvailableKobo - toParticipantsKobo;
    // AMD-05: "rolling distributable for register row n excludes row n
    // itself" — computed from PRIOR cumulative distributions only, never
    // including the amount this very run is about to declare.
    const rollingDistributableKobo = maxBig(0n, netAvailableKobo - input.priorTotalDistributedKobo);

    const totalUnits = input.participants.reduce((s, p) => s + p.unitsAtRecord, 0);
    if (totalUnits <= 0) {
      throw new HalalFundEngineError('runDistribution: total units at record date is zero — cannot compute DPS.');
    }
    const dps = round4(Number(toParticipantsKobo) / 100 / totalUnits);

    const participantResults: DistributionParticipantResult[] = [];
    for (const p of input.participants) {
      const totalPayoutKobo = BigInt(Math.round(dps * p.unitsAtRecord * 100));
      let dripAmountKobo = 0n;
      let dripUnits = 0;
      if (p.isDrip) {
        // AMD-04 HALT guards: no published ex-div price, price <= 0, or a
        // negative unit result must never silently proceed.
        if (input.exDivPricePerUnit == null || input.exDivPricePerUnit <= 0) {
          throw new HalalFundEngineError(`AMD-04: DRIP election for product_account ${p.productAccountId} has no valid ex-dividend price (${input.exDivPricePerUnit}) — HALT.`);
        }
        dripAmountKobo = maxBig(0n, totalPayoutKobo - p.cashPaidKobo);
        dripUnits = round4(Number(dripAmountKobo) / 100 / input.exDivPricePerUnit);
        if (dripUnits < 0) {
          throw new HalalFundEngineError(`AMD-04: computed DRIP units (${dripUnits}) for product_account ${p.productAccountId} are negative — HALT (this is exactly the register row D001 defect the guard exists to prevent).`);
        }
      }
      participantResults.push({ productAccountId: p.productAccountId, dpsAmount: dps, totalPayoutKobo, dripAmountKobo, dripUnits });
    }

    const distribution = await this.prisma.distribution.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        productCode: input.productCode,
        method: methodUsed,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        recordDate: input.recordDate,
        netAvailableKobo,
        toParticipantsKobo,
        retainedOrMudaribBaseKobo: retainedKobo,
        status: 'DRAFT',
        createdByUserId: input.createdByUserId,
        lineItems: {
          create: participantResults.map((p) => ({
            productAccountId: p.productAccountId,
            capitalKobo: 0n,
            unitsAtRecord: input.participants.find((x) => x.productAccountId === p.productAccountId)!.unitsAtRecord,
            dpsAmount: p.dpsAmount,
            dripUnits: p.dripUnits,
            dripAmountKobo: p.dripAmountKobo,
            totalPayoutKobo: p.totalPayoutKobo,
          })),
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
        amountKobo: toParticipantsKobo,
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
    await this.prisma.distribution.update({
      where: { id: distribution.id },
      data: { workflowInstanceId: workflowInstance.id },
    });

    return {
      result: { methodUsed, netAvailableKobo, toParticipantsKobo, retainedKobo, rollingDistributableKobo, dps, participants: participantResults },
      distributionId: distribution.id,
      workflowInstanceId: workflowInstance.id,
    };
  }

  async approveDistributionDeclaration(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const distribution = await this.prisma.distribution.findFirstOrThrow({ where: { workflowInstanceId } });
    const declared = await this.prisma.distribution.update({
      where: { id: distribution.id },
      data: { status: 'DECLARED', declaredAt: new Date() },
    });
    await this.audit.record({
      actorUserId: approverUserId,
      action: 'APPROVE',
      entityType: 'distribution',
      entityId: declared.id,
      after: { status: 'DECLARED' },
    });
    return declared;
  }

  async payDistribution(distributionId: string, actorUserId: string) {
    const distribution = await this.prisma.distribution.findUniqueOrThrow({ where: { id: distributionId } });
    if (distribution.status !== 'DECLARED') {
      throw new HalalFundEngineError(`Cannot pay distribution ${distributionId}: status is ${distribution.status}, not DECLARED.`);
    }
    const paid = await this.prisma.distribution.update({
      where: { id: distributionId },
      data: { status: 'PAID', paidAt: new Date() },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'distribution',
      entityId: paid.id,
      after: { status: 'PAID' },
    });
    return paid;
  }
}

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

function sameDay(a: Date, b: Date): boolean {
  return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
}

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

function absBigInt(n: bigint): bigint {
  return n < 0n ? -n : n;
}

function maxBig(a: bigint, b: bigint): bigint {
  return a > b ? a : b;
}
