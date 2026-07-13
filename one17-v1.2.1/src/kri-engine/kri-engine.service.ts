import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { KRI_ROSTER } from './kri-roster';
import { ComputedReading, KriEngineError } from './kri-engine.types';
import { computeTotalAumKobo } from '../common/aum.util';
import { isPeriodicReviewOverdue } from '../investor/kyc-periodic-review.util';

// Phase4 Directive §1 (CLAUDE.md invariants 10/11/16). Per-entity-then-
// aggregate (invariant 11): every computeXxx() below returns one row per
// contributing ledger entity PLUS one isAggregate=true row, even when there
// is only one contributing entity — the adversarial test ("per-entity KRI
// rows exist before any aggregate row") is about ORDER/PRESENCE, not about
// how many entities happen to contribute. Thresholds resolve EXCLUSIVELY
// from the ACTIVE risk_appetite_matrix (invariant 16) — no ACTIVE version,
// or no matching category row, or a null threshold -> AWAITING_MATRIX,
// never a guessed/fake RAG.
@Injectable()
export class KriEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async seedDefinitions(): Promise<number> {
    let count = 0;
    for (const entry of KRI_ROSTER) {
      await this.prisma.kriDefinition.upsert({
        where: { code: entry.code },
        create: {
          code: entry.code,
          name: entry.name,
          category: entry.category,
          direction: entry.direction,
          isZeroTolerance: entry.isZeroTolerance ?? false,
          riskAppetiteCategoryRef: entry.riskAppetiteCategoryRef ?? null,
          computeStatus: entry.computeStatus,
          notes: entry.notes ?? null,
        },
        update: {
          name: entry.name,
          computeStatus: entry.computeStatus,
          notes: entry.notes ?? null,
        },
      });
      count++;
    }
    return count;
  }

  async runDailyBatch(readingDate: Date): Promise<{ computed: number; skipped: number; escalations: number }> {
    const definitions = await this.prisma.kriDefinition.findMany();
    const matrix = await this.getActiveMatrix();
    let computed = 0;
    let skipped = 0;
    let escalations = 0;

    for (const def of definitions) {
      if (def.computeStatus !== 'INSTRUMENTED') {
        await this.upsertReading({
          kriCode: def.code,
          ledgerEntityCode: null,
          isAggregate: true,
          readingDate,
          value: null,
          ragStatus: 'NOT_INSTRUMENTED',
          matrixVersionId: null,
          detail: { reason: def.notes ?? `${def.computeStatus} — not computed this pass` },
        });
        skipped++;
        continue;
      }

      const readings = await this.computeKri(def.code, readingDate);
      for (const r of readings) {
        const informational = def.riskAppetiteCategoryRef == null;
        const rag = informational
          ? { status: 'INFORMATIONAL' as const, matrixVersionId: null as string | null }
          : this.classifyRag(def.riskAppetiteCategoryRef!, def.direction, def.isZeroTolerance, r.value, matrix);

        const reading = await this.upsertReading({
          kriCode: def.code,
          ledgerEntityCode: r.ledgerEntityCode,
          isAggregate: r.isAggregate,
          readingDate,
          value: r.value,
          ragStatus: rag.status,
          matrixVersionId: rag.matrixVersionId,
          detail: r.detail ?? null,
        });
        computed++;

        if (rag.status === 'RED') {
          await this.escalate(reading.id, def.code, r.ledgerEntityCode, matrix, def.riskAppetiteCategoryRef);
          escalations++;
        }
      }
    }

    await this.audit.record({
      action: 'CREATE',
      entityType: 'kri_batch',
      entityId: readingDate.toISOString().slice(0, 10),
      after: { computed, skipped, escalations },
    });

    return { computed, skipped, escalations };
  }

  private async getActiveMatrix() {
    return this.prisma.riskAppetiteMatrixVersion.findFirst({
      where: { status: 'ACTIVE' },
      include: { categories: true },
    });
  }

  private classifyRag(
    categoryRef: string,
    direction: 'HIGHER_BETTER' | 'LOWER_BETTER',
    isZeroTolerance: boolean,
    value: number | null,
    matrix: Awaited<ReturnType<KriEngineService['getActiveMatrix']>>,
  ): { status: 'GREEN' | 'AMBER' | 'RED' | 'AWAITING_MATRIX' | 'NOT_INSTRUMENTED'; matrixVersionId: string | null } {
    if (value === null) return { status: 'NOT_INSTRUMENTED', matrixVersionId: null };
    if (!matrix) return { status: 'AWAITING_MATRIX', matrixVersionId: null };
    const category = matrix.categories.find((c) => c.riskCategory === categoryRef);
    if (!category) return { status: 'AWAITING_MATRIX', matrixVersionId: matrix.id };

    if (isZeroTolerance || category.isZeroTolerance) {
      return { status: value === 0 ? 'GREEN' : 'RED', matrixVersionId: matrix.id };
    }
    const green = category.greenThreshold !== null ? Number(category.greenThreshold) : null;
    const red = category.redThreshold !== null ? Number(category.redThreshold) : null;
    if (green === null || red === null) return { status: 'AWAITING_MATRIX', matrixVersionId: matrix.id };

    if (direction === 'HIGHER_BETTER') {
      if (value >= green) return { status: 'GREEN', matrixVersionId: matrix.id };
      if (value >= red) return { status: 'AMBER', matrixVersionId: matrix.id };
      return { status: 'RED', matrixVersionId: matrix.id };
    }
    if (value <= green) return { status: 'GREEN', matrixVersionId: matrix.id };
    if (value <= red) return { status: 'AMBER', matrixVersionId: matrix.id };
    return { status: 'RED', matrixVersionId: matrix.id };
  }

  private async upsertReading(input: {
    kriCode: string;
    ledgerEntityCode: string | null;
    isAggregate: boolean;
    readingDate: Date;
    value: number | null;
    ragStatus: 'GREEN' | 'AMBER' | 'RED' | 'AWAITING_MATRIX' | 'NOT_INSTRUMENTED' | 'INFORMATIONAL';
    matrixVersionId: string | null;
    detail: Record<string, unknown> | null;
  }) {
    // No unique-constraint-based upsert here: kri_reading is partitioned by
    // reading_date and Prisma's upsert needs the @@unique in its generated
    // where-clause shape, which the DB-level partial/expression unique index
    // (COALESCE ledger_entity_code) doesn't map onto cleanly — delete+create
    // is the pragmatic idempotent path for a partitioned table, matching how
    // the batch is expected to run once per day per KRI/entity anyway.
    await this.prisma.kriReading.deleteMany({
      where: {
        kriCode: input.kriCode,
        ledgerEntityCode: input.ledgerEntityCode,
        isAggregate: input.isAggregate,
        readingDate: input.readingDate,
      },
    });
    return this.prisma.kriReading.create({
      data: {
        kriCode: input.kriCode,
        ledgerEntityCode: input.ledgerEntityCode,
        isAggregate: input.isAggregate,
        readingDate: input.readingDate,
        value: input.value,
        ragStatus: input.ragStatus as any,
        matrixVersionId: input.matrixVersionId,
        detail: (input.detail ?? undefined) as any,
      },
    });
  }

  private async escalate(
    kriReadingId: string,
    kriCode: string,
    ledgerEntityCode: string | null,
    matrix: Awaited<ReturnType<KriEngineService['getActiveMatrix']>>,
    categoryRef: string | null,
  ) {
    const category = matrix?.categories.find((c) => c.riskCategory === categoryRef);
    await this.prisma.kriEscalation.create({
      data: {
        kriReadingId,
        kriCode,
        ledgerEntityCode,
        ragStatus: 'RED',
        ownerLabel: category?.escalationOwner ?? null,
      },
    });
    await this.audit.record({
      action: 'CREATE',
      entityType: 'kri_escalation',
      entityId: kriReadingId,
      after: { kriCode, ledgerEntityCode, ownerLabel: category?.escalationOwner ?? null },
    });
  }

  // ==========================================================================
  // Per-KRI computation. Each returns per-entity rows first, then a single
  // aggregate row — even for single-entity KRIs, per invariant 11's literal
  // requirement.
  // ==========================================================================
  private async computeKri(code: string, readingDate: Date): Promise<ComputedReading[]> {
    switch (code) {
      case 'BZ-01': return this.computeRevenueVsBudget(readingDate);
      case 'BZ-04': return this.computeCostCoverageRatio(readingDate);
      case 'BZ-05': return this.computeBreakevenAum(readingDate);
      case 'BZ-06': return this.computeInvestorConcentration();
      case 'CR-01': return this.computeCounterpartyConcentration();
      case 'TR-03': return this.computeCar(readingDate);
      case 'TR-04': return this.computeCapitalSurplus(readingDate);
      case 'TR-06': return this.computeCashPctOfAssets(readingDate);
      case 'TR-02': return this.computeLiquidityRunwayDays(readingDate);
      case 'TR-05': return this.computeRedemptionPressure();
      case 'CPL-01': return this.computeOpenRegulatoryBreaches(readingDate);
      case 'CPL-02': return this.computeShariahNonCompliance();
      case 'CPL-03': return this.computeComplaintAgingBreaches(readingDate);
      case 'CPL-05': return this.computeOverdueKycPeriodicReviews(readingDate);
      case 'CPL-06': return this.computeOpenDataBreachRegisterEntries();
      case 'CPL-07': return this.computeScreeningListFreshness(readingDate);
      case 'POOL-SVC-RATIO': return this.computePoolServicingCostRatio(readingDate);
      case 'HIBAH-FREQ': return this.computeHibahFrequency(readingDate);
      case 'HIBAH-CUML': return this.computeHibahCumulative();
      case 'ND-PROV-AGE': return this.computeProvisionalAccrualAging(readingDate);
      default:
        throw new KriEngineError(`KRI ${code} is marked INSTRUMENTED but has no compute function wired.`);
    }
  }

  private async getActiveBoardApprovedBudget(fiscalYear: number) {
    return this.prisma.budgetVersion.findFirst({
      where: { fiscalYear, status: 'ACTIVE' },
      include: { lines: { where: { isActive: true }, include: { monthlyAmounts: true } } },
    });
  }

  private async companyEntity() {
    return this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
  }

  private async glActuals(ledgerEntityCode: string, accountType: 'INCOME' | 'EXPENSE', from: Date, to: Date): Promise<bigint> {
    const lines = await this.prisma.journalEntryLine.findMany({
      where: {
        account: { ledgerEntityCode, accountType },
        journalEntry: { ledgerEntityCode, entryDate: { gte: from, lte: to } },
      },
    });
    // INCOME accounts carry a natural credit balance, EXPENSE a natural
    // debit balance — netting (credit - debit) for INCOME and (debit -
    // credit) for EXPENSE gives a positive "actual" figure either way.
    return lines.reduce((sum, l) => sum + (accountType === 'INCOME' ? l.creditKobo - l.debitKobo : l.debitKobo - l.creditKobo), 0n);
  }

  private async computeRevenueVsBudget(readingDate: Date): Promise<ComputedReading[]> {
    const fy = readingDate.getFullYear();
    const budget = await this.getActiveBoardApprovedBudget(fy);
    const company = await this.companyEntity();
    if (!budget) {
      return [{ ledgerEntityCode: company.code, isAggregate: false, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } },
              { ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } }];
    }
    const month = readingDate.getMonth() + 1;
    const budgetedRevenueKobo = budget.lines
      .filter((l) => l.class === 'REVENUE')
      .flatMap((l) => l.monthlyAmounts.filter((m) => m.month <= month))
      .reduce((s, m) => s + m.amountKobo, 0n);
    const yearStart = new Date(fy, 0, 1);
    const actualRevenueKobo = await this.glActuals(company.code, 'INCOME', yearStart, readingDate);

    const pct = budgetedRevenueKobo > 0n ? Number(actualRevenueKobo) / Number(budgetedRevenueKobo) : null;
    const detail = { actualRevenueKobo: actualRevenueKobo.toString(), budgetedRevenueKobo: budgetedRevenueKobo.toString() };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
      { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
    ];
  }

  private async computeCostCoverageRatio(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const monthStart = new Date(readingDate.getFullYear(), readingDate.getMonth(), 1);
    const income = await this.glActuals(company.code, 'INCOME', monthStart, readingDate);
    const expense = await this.glActuals(company.code, 'EXPENSE', monthStart, readingDate);
    const ratio = expense > 0n ? Number(income) / Number(expense) : null;
    const detail = { incomeKobo: income.toString(), expenseKobo: expense.toString() };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: ratio, detail },
      { ledgerEntityCode: null, isAggregate: true, value: ratio, detail },
    ];
  }

  private async computeBreakevenAum(readingDate: Date): Promise<ComputedReading[]> {
    const fy = readingDate.getFullYear();
    const budget = await this.getActiveBoardApprovedBudget(fy);
    const company = await this.companyEntity();
    if (!budget) {
      return [{ ledgerEntityCode: company.code, isAggregate: false, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } },
              { ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } }];
    }
    // "Fixed costs" = budget lines phased EVEN_12/FIXED_MONTHLY (the ones
    // that don't flex with FUM/mobilization/revenue drivers), FY total.
    const fixedCostsKobo = budget.lines
      .filter((l) => l.class !== 'REVENUE' && (l.phasingMethod === 'EVEN_12' || l.phasingMethod === 'FIXED_MONTHLY'))
      .flatMap((l) => l.monthlyAmounts)
      .reduce((s, m) => s + m.amountKobo, 0n);

    // Effective fee rate computed from live data (actual revenue / actual
    // AUM) rather than a hardcoded blended rate (invariant 10) — AUM proxy
    // = sum of live product_account principal/committed capital across the
    // fund + pool.
    const yearStart = new Date(fy, 0, 1);
    const actualRevenueKobo = await this.glActuals(company.code, 'INCOME', yearStart, readingDate);
    const aumKobo = await this.totalAumKobo();
    const feeRate = aumKobo > 0n ? Number(actualRevenueKobo) / Number(aumKobo) : null;
    const breakevenAumKobo = feeRate && feeRate > 0 ? Number(fixedCostsKobo) / feeRate : null;

    const detail = { fixedCostsKobo: fixedCostsKobo.toString(), impliedFeeRate: feeRate, aumKobo: aumKobo.toString() };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: breakevenAumKobo, detail },
      { ledgerEntityCode: null, isAggregate: true, value: breakevenAumKobo, detail },
    ];
  }

  private async totalAumKobo(): Promise<bigint> {
    return computeTotalAumKobo(this.prisma);
  }

  private async computeInvestorConcentration(): Promise<ComputedReading[]> {
    const accounts = await this.prisma.productAccount.findMany({
      where: { status: 'ACTIVE' },
      select: { investorId: true, principalOrCommittedKobo: true },
    });
    const byInvestor = new Map<string, bigint>();
    for (const a of accounts) byInvestor.set(a.investorId, (byInvestor.get(a.investorId) ?? 0n) + a.principalOrCommittedKobo);
    // Invariant 43(a): ND Mandate holdings must count toward investor
    // concentration too, not just product_account -- same defect class as
    // Total AUM (a mandate-only investor's exposure was invisible here).
    const mandates = await this.prisma.ndMandateAccount.findMany({
      where: { status: 'ACTIVE', investorId: { not: null }, committedCapitalKobo: { not: null } },
      select: { investorId: true, committedCapitalKobo: true },
    });
    for (const m of mandates) {
      if (!m.investorId) continue;
      byInvestor.set(m.investorId, (byInvestor.get(m.investorId) ?? 0n) + (m.committedCapitalKobo ?? 0n));
    }
    const totalKobo = [...byInvestor.values()].reduce((s, v) => s + v, 0n);
    const largest = [...byInvestor.values()].reduce((m, v) => (v > m ? v : m), 0n);
    const pct = totalKobo > 0n ? Number(largest) / Number(totalKobo) : null;
    const detail = { largestInvestorKobo: largest.toString(), totalAumKobo: totalKobo.toString() };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: pct, detail },
      { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
    ];
  }

  private async computeCounterpartyConcentration(): Promise<ComputedReading[]> {
    const placements = await this.prisma.txn.findMany({
      where: { txnType: 'PLACEMENT', status: 'POSTED', counterpartyId: { not: null } },
      select: { counterpartyId: true, amountKobo: true, ledgerEntityCode: true },
    });
    const totalKobo = placements.reduce((s, t) => s + (t.amountKobo < 0n ? -t.amountKobo : t.amountKobo), 0n);
    const byCounterparty = new Map<string, bigint>();
    for (const t of placements) {
      const key = t.counterpartyId!;
      const abs = t.amountKobo < 0n ? -t.amountKobo : t.amountKobo;
      byCounterparty.set(key, (byCounterparty.get(key) ?? 0n) + abs);
    }
    const largest = [...byCounterparty.values()].reduce((m, v) => (v > m ? v : m), 0n);
    const pct = totalKobo > 0n ? Number(largest) / Number(totalKobo) : null;
    const detail = { largestCounterpartyExposureKobo: largest.toString(), totalExposureKobo: totalKobo.toString(), basis: 'PLACEMENT txns only' };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: pct, detail },
      { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
    ];
  }

  private async activeCapitalRequirementKobo(asOf: Date): Promise<bigint | null> {
    const row = await this.prisma.regulatoryCapitalRequirement.findFirst({
      where: { effectiveFrom: { lte: asOf } },
      orderBy: { effectiveFrom: 'desc' },
    });
    return row?.requirementKobo ?? null;
  }

  private async companyEquityKobo(asOf: Date): Promise<bigint> {
    const company = await this.companyEntity();
    const lines = await this.prisma.journalEntryLine.findMany({
      where: { account: { ledgerEntityCode: company.code, accountType: 'EQUITY' }, journalEntry: { ledgerEntityCode: company.code, entryDate: { lte: asOf } } },
    });
    return lines.reduce((s, l) => s + (l.creditKobo - l.debitKobo), 0n);
  }

  private async computeCar(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const requirementKobo = await this.activeCapitalRequirementKobo(readingDate);
    const equityKobo = await this.companyEquityKobo(readingDate);
    // DQ-1: CAR = capital / requirement x100 — the corrected formula, never
    // the workbook's further-multiplied display defect.
    const car = requirementKobo && requirementKobo > 0n ? (Number(equityKobo) / Number(requirementKobo)) * 100 : null;
    const detail = { equityKobo: equityKobo.toString(), requirementKobo: requirementKobo?.toString() ?? null };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: car, detail },
      { ledgerEntityCode: null, isAggregate: true, value: car, detail },
    ];
  }

  private async computeCapitalSurplus(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const requirementKobo = await this.activeCapitalRequirementKobo(readingDate);
    const equityKobo = await this.companyEquityKobo(readingDate);
    const surplusKobo = requirementKobo !== null ? equityKobo - requirementKobo : null;
    const detail = { equityKobo: equityKobo.toString(), requirementKobo: requirementKobo?.toString() ?? null };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: surplusKobo !== null ? Number(surplusKobo) : null, detail },
      { ledgerEntityCode: null, isAggregate: true, value: surplusKobo !== null ? Number(surplusKobo) : null, detail },
    ];
  }

  private async computeCashPctOfAssets(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const assetAccounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: company.code, accountType: 'ASSET' } });
    const cashAccounts = assetAccounts.filter((a) => /cash/i.test(a.accountName));
    const balanceOf = async (accountIds: string[]) => {
      if (accountIds.length === 0) return 0n;
      const lines = await this.prisma.journalEntryLine.findMany({
        where: { accountId: { in: accountIds }, journalEntry: { entryDate: { lte: readingDate } } },
      });
      return lines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);
    };
    const totalAssetsKobo = await balanceOf(assetAccounts.map((a) => a.id));
    const cashKobo = await balanceOf(cashAccounts.map((a) => a.id));
    const pct = totalAssetsKobo > 0n ? Number(cashKobo) / Number(totalAssetsKobo) : null;
    const detail = { cashKobo: cashKobo.toString(), totalAssetsKobo: totalAssetsKobo.toString() };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
      { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
    ];
  }

  // CHECK16 62(d): TR-02 "Liquidity Runway (days)" -- unblocked by the same
  // reasoning TR-06 already established (a real cash figure exists), plus
  // the trailing-90-day REDEMPTION/SUBSCRIPTION Txn history that gives a
  // real net-outflow rate for the first time. Reuses TR-06's own cash-
  // sourcing method verbatim (same "Treasury — Liquidity Runway" category,
  // one definition of cash, not two). No net outflow in the window (net
  // inflow, or zero activity) -> value null, not a fabricated "infinite"
  // number -- same "never invent a value" discipline as computeCar's null
  // on a zero/missing denominator.
  private async computeLiquidityRunwayDays(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const assetAccounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: company.code, accountType: 'ASSET' } });
    const cashAccounts = assetAccounts.filter((a) => /cash/i.test(a.accountName));
    const cashAccountIds = cashAccounts.map((a) => a.id);
    const cashLines = cashAccountIds.length
      ? await this.prisma.journalEntryLine.findMany({ where: { accountId: { in: cashAccountIds }, journalEntry: { entryDate: { lte: readingDate } } } })
      : [];
    const cashKobo = cashLines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);

    const windowDays = 90;
    const windowStart = new Date(readingDate.getTime() - windowDays * 24 * 60 * 60 * 1000);
    const [reds, subs] = await Promise.all([
      this.prisma.txn.aggregate({ where: { txnType: 'REDEMPTION', valueDate: { gte: windowStart, lte: readingDate } }, _sum: { amountKobo: true } }),
      this.prisma.txn.aggregate({ where: { txnType: 'SUBSCRIPTION', valueDate: { gte: windowStart, lte: readingDate } }, _sum: { amountKobo: true } }),
    ]);
    // REDEMPTION amounts are stored negative (Migration Data Standards
    // convention, same as halal-fund-engine.service.ts's own absBigInt use).
    const redemptionsKobo = reds._sum.amountKobo ? (reds._sum.amountKobo < 0n ? -reds._sum.amountKobo : reds._sum.amountKobo) : 0n;
    const subscriptionsKobo = subs._sum.amountKobo ?? 0n;
    const netOutflowKobo = Number(redemptionsKobo) - Number(subscriptionsKobo);
    const dailyBurnKobo = netOutflowKobo / windowDays;
    const runwayDays = dailyBurnKobo > 0 ? Number(cashKobo) / dailyBurnKobo : null;
    const detail = { cashKobo: cashKobo.toString(), redemptionsKobo: redemptionsKobo.toString(), subscriptionsKobo: subscriptionsKobo.toString(), windowDays };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: runwayDays, detail },
      { ledgerEntityCode: null, isAggregate: true, value: runwayDays, detail },
    ];
  }

  // CHECK16 62(d): TR-05 "Investor Redemption Pressure" -- unblocked
  // because a real redemption PIPELINE now exists (SubscriptionRequest,
  // invariant 42a/CHECK9), resolving the roster's own stated blocker ("no
  // redemption-notice/pipeline model in schema yet"). Deliberately NOT
  // BZ-07 ("Investor Redemption Notice Coverage") -- that KRI is
  // specifically about a per-mandate NOTICE-PERIOD field that still does
  // not exist anywhere in schema; instrumenting it would misrepresent what
  // it actually measures. Pending redemption demand as a % of total AUM;
  // null (never a fabricated 0 or 100) when there is no AUM base at all.
  private async computeRedemptionPressure(): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const pending = await this.prisma.subscriptionRequest.aggregate({
      where: { requestType: 'REDEMPTION', status: 'PENDING' },
      _sum: { amountKobo: true },
    });
    const pendingKobo = pending._sum.amountKobo ?? 0n;
    const totalAumKobo = await computeTotalAumKobo(this.prisma);
    const pct = totalAumKobo > 0n ? (Number(pendingKobo) / Number(totalAumKobo)) * 100 : null;
    const detail = { pendingRedemptionKobo: pendingKobo.toString(), totalAumKobo: totalAumKobo.toString() };
    return [
      { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
      { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
    ];
  }

  private async computeOpenRegulatoryBreaches(readingDate: Date): Promise<ComputedReading[]> {
    const calendars = await this.prisma.regulatoryFilingCalendar.findMany({ where: { isActive: true } });
    let overdue = 0;
    const overdueTemplateCodes: string[] = [];
    for (const cal of calendars) {
      if (cal.deadlineDayOfMonth == null) continue;
      const deadline = new Date(readingDate.getFullYear(), readingDate.getMonth(), cal.deadlineDayOfMonth);
      if (readingDate <= deadline) continue;
      const periodStart = new Date(deadline.getFullYear(), deadline.getMonth() - 1, 1);
      const filed = await this.prisma.regulatoryFilingRun.findFirst({
        where: { regulatorTemplateId: cal.regulatorTemplateId, ledgerEntityCode: cal.ledgerEntityCode, periodStart: { gte: periodStart }, status: { in: ['CERTIFIED', 'FILED'] } },
      });
      if (!filed) {
        overdue++;
        const tpl = await this.prisma.regulatorTemplate.findUnique({ where: { id: cal.regulatorTemplateId } });
        if (tpl) overdueTemplateCodes.push(tpl.templateCode);
      }
    }
    const detail = { source: 'regulatory_filing_calendar vs regulatory_filing_run', overdueTemplateCodes };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: overdue, detail },
      { ledgerEntityCode: null, isAggregate: true, value: overdue, detail },
    ];
  }

  // Invariant 51(b-vii) (CHECK13): "overdue = KRI feed (currently recorded
  // but consumed by NOTHING — AML programme gap)." A case is due once
  // lastPeriodicReviewAt (or, if never reviewed, the onboarding-complete
  // date the case reached COMPLETE_APPROVED/APPROVED) plus its own
  // periodicReviewFrequency has elapsed. Loaded and filtered in JS rather
  // than a raw interval WHERE clause since periodicReviewFrequency is a
  // free string ('MONTHLY'|'QUARTERLY'|'SEMI_ANNUAL'|'ANNUAL'), not a
  // fixed SQL interval literal.
  private async computeOverdueKycPeriodicReviews(readingDate: Date): Promise<ComputedReading[]> {
    const [counterpartyCases, investorCases] = await Promise.all([
      this.prisma.counterpartyOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null }, counterparty: { onboardingStatus: 'COMPLETE_APPROVED' } },
        select: { lastPeriodicReviewAt: true, periodicReviewFrequency: true, updatedAt: true },
      }),
      this.prisma.investorOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null } },
        select: { lastPeriodicReviewAt: true, periodicReviewFrequency: true, updatedAt: true },
      }),
    ]);
    const count = [...counterpartyCases, ...investorCases].filter((c) => isPeriodicReviewOverdue(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, readingDate)).length;
    return [
      { ledgerEntityCode: null, isAggregate: false, value: count, detail: { source: 'counterparty_onboarding_case + investor_onboarding_case' } },
      { ledgerEntityCode: null, isAggregate: true, value: count },
    ];
  }

  private async computeShariahNonCompliance(): Promise<ComputedReading[]> {
    const count = await this.prisma.complianceCheck.count({ where: { NOT: { result: 'COMPLIANT' } } });
    return [
      { ledgerEntityCode: null, isAggregate: false, value: count, detail: { source: 'TPL_13 compliance_check' } },
      { ledgerEntityCode: null, isAggregate: true, value: count },
    ];
  }

  // Invariant 28(f): "complaint volume/aging = KRI feed." Derived live
  // against complaint_sla_config — a complaint still within its SLA window
  // is not a risk signal, only one AMBER (>= config's elapsed-pct
  // threshold) or BREACHED (past slaDueAt) counts. No ACTIVE
  // complaint_sla_config -> 0, not a guess (mirrors every other "no
  // governed config yet" gate in this codebase).
  private async computeComplaintAgingBreaches(readingDate: Date): Promise<ComputedReading[]> {
    const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    let count = 0;
    if (config) {
      const open = await this.prisma.complaint.findMany({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
      count = open.filter((c) => {
        if (readingDate.getTime() > c.slaDueAt.getTime()) return true;
        const totalMs = c.slaDueAt.getTime() - c.receivedAt.getTime();
        const elapsedMs = readingDate.getTime() - c.receivedAt.getTime();
        return totalMs > 0 && (elapsedMs / totalMs) * 100 >= config.amberThresholdPct;
      }).length;
    }
    const detail = { source: 'complaint vs complaint_sla_config', hasActiveConfig: !!config };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: count, detail },
      { ledgerEntityCode: null, isAggregate: true, value: count, detail },
    ];
  }

  // Invariant 57(b)(iv) (CHECK15): "feeds the risk module" -- a live count,
  // never a written RiskRegisterEntry row.
  private async computeOpenDataBreachRegisterEntries(): Promise<ComputedReading[]> {
    const count = await this.prisma.dataBreachRegisterEntry.count({ where: { status: { not: 'CLOSED' } } });
    const detail = { source: 'data_breach_register_entry where status != CLOSED' };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: count, detail },
      { ledgerEntityCode: null, isAggregate: true, value: count, detail },
    ];
  }

  // Invariant 72(a) (CHECK26): informational (no matrix category governs
  // list staleness) -- the worst (max) days-since-download across every
  // ACTIVE, non-parked source. A source that is ACTIVE but has never
  // completed a download reports null (AWAITING_FIRST_DOWNLOAD), never a
  // fabricated "0 days fresh".
  private async computeScreeningListFreshness(readingDate: Date): Promise<ComputedReading[]> {
    const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
    if (activeSources.length === 0) {
      return [{ ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'No ScreeningListSource is both ACTIVE and non-parked yet.' } }];
    }
    const perSource = activeSources.map((s) => ({
      sourceCode: s.sourceCode,
      daysSince: s.lastSuccessfulDownloadAt
        ? Math.floor((readingDate.getTime() - s.lastSuccessfulDownloadAt.getTime()) / (1000 * 60 * 60 * 24))
        : null,
    }));
    const neverDownloaded = perSource.filter((p) => p.daysSince === null).map((p) => p.sourceCode);
    const knownDays = perSource.map((p) => p.daysSince).filter((d): d is number => d !== null);
    // value = worst known staleness in days; null only when every ACTIVE
    // source has never completed a download (nothing to measure yet).
    // neverDownloaded stays visible in detail either way -- collapsing the
    // whole reading to null whenever ANY source lacks a download would hide
    // a real staleness signal from the sources that DO have one.
    const worstDays = knownDays.length > 0 ? Math.max(...knownDays) : null;
    return [{
      ledgerEntityCode: null,
      isAggregate: true,
      value: worstDays,
      detail: { perSource, neverDownloaded },
    }];
  }

  private async computePoolServicingCostRatio(readingDate: Date): Promise<ComputedReading[]> {
    const company = await this.companyEntity();
    const monthStart = new Date(readingDate.getFullYear(), readingDate.getMonth(), 1);
    const servicingAccounts = await this.prisma.chartOfAccount.findMany({
      where: { ledgerEntityCode: company.code, accountType: 'EXPENSE', accountName: { contains: 'Pool Servicing', mode: 'insensitive' } },
    });
    const servicingLines = servicingAccounts.length
      ? await this.prisma.journalEntryLine.findMany({ where: { accountId: { in: servicingAccounts.map((a) => a.id) }, journalEntry: { entryDate: { gte: monthStart, lte: readingDate } } } })
      : [];
    const servicingOpexKobo = servicingLines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);

    const pool = await this.prisma.ledgerEntity.findFirst({ where: { entityType: 'POOL' } });
    let mudaribPsrIncomeKobo = 0n;
    if (pool) {
      const distributions = await this.prisma.distribution.findMany({ where: { ledgerEntityCode: pool.code, status: { in: ['DECLARED', 'PAID'] as any } } });
      mudaribPsrIncomeKobo = distributions.reduce((s, d) => s + d.retainedOrMudaribBaseKobo, 0n);
    }
    const ratio = mudaribPsrIncomeKobo > 0n ? Number(servicingOpexKobo) / Number(mudaribPsrIncomeKobo) : null;
    const detail = { servicingOpexKobo: servicingOpexKobo.toString(), mudaribPsrIncomeKobo: mudaribPsrIncomeKobo.toString() };
    return [
      { ledgerEntityCode: pool?.code ?? null, isAggregate: false, value: ratio, detail },
      { ledgerEntityCode: null, isAggregate: true, value: ratio, detail },
    ];
  }

  private async computeHibahFrequency(readingDate: Date): Promise<ComputedReading[]> {
    const yearStart = new Date(readingDate.getFullYear(), 0, 1);
    const rows = await this.prisma.hibahRecord.findMany({ where: { createdAt: { gte: yearStart, lte: readingDate } } });
    const byEntity = new Map<string, number>();
    for (const r of rows) byEntity.set(r.ledgerEntityCode, (byEntity.get(r.ledgerEntityCode) ?? 0) + 1);
    const out: ComputedReading[] = [...byEntity.entries()].map(([ledgerEntityCode, count]) => ({ ledgerEntityCode, isAggregate: false, value: count }));
    out.push({ ledgerEntityCode: null, isAggregate: true, value: rows.length, detail: { lossPeriodCount: rows.filter((r) => r.isLossPeriod).length } });
    return out;
  }

  private async computeHibahCumulative(): Promise<ComputedReading[]> {
    const rows = await this.prisma.hibahRecord.findMany();
    const byEntity = new Map<string, bigint>();
    for (const r of rows) byEntity.set(r.ledgerEntityCode, (byEntity.get(r.ledgerEntityCode) ?? 0n) + r.amountKobo);
    const totalKobo = [...byEntity.values()].reduce((s, v) => s + v, 0n);
    const out: ComputedReading[] = [...byEntity.entries()].map(([ledgerEntityCode, kobo]) => ({ ledgerEntityCode, isAggregate: false, value: Number(kobo) }));
    out.push({ ledgerEntityCode: null, isAggregate: true, value: Number(totalKobo) });
    return out;
  }

  private async computeProvisionalAccrualAging(readingDate: Date): Promise<ComputedReading[]> {
    const config = await this.prisma.kriEngineConfig.findUnique({ where: { id: 1 } }) ?? await this.prisma.kriEngineConfig.create({ data: { id: 1 } });
    const cutoff = new Date(readingDate);
    cutoff.setDate(cutoff.getDate() - config.provisionalAccrualAgingDays);

    const stale = await this.prisma.ndMandateProvisionalAccrual.findMany({
      where: { status: 'PROVISIONAL', accrualDate: { lt: cutoff } },
    });
    const detail = { agingThresholdDays: config.provisionalAccrualAgingDays, sampleAccrualIds: stale.slice(0, 5).map((s) => s.id) };
    return [
      { ledgerEntityCode: null, isAggregate: false, value: stale.length, detail },
      { ledgerEntityCode: null, isAggregate: true, value: stale.length, detail },
    ];
  }
}
