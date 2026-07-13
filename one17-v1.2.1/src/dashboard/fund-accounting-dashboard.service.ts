import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReconciliationService } from '../reconciliation/reconciliation.service';
import { DashboardGroup, DashboardMetric } from './dashboard.types';
import { bucketByAge, daysBetween } from './dashboard-aging.util';

// Invariant 58(b): Fund Accounting operational dashboard — per-fund tiles
// for every FUND/POOL ledger entity, distinct from FundAccountingPage (the
// existing NAV/BS/IS/facilities STATEMENT VIEWER built under CHECK5 5h,
// which this dashboard links out to). "Per-fund" = one card per FUND/POOL
// ledger_entity (same set PerformanceController.listEntities() already
// serves), not per-product-class.
@Injectable()
export class FundAccountingDashboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly reconciliation: ReconciliationService,
  ) {}

  private async moneyMetric(label: string, metricCode: string, operationalKobo: bigint): Promise<DashboardMetric> {
    const result = await this.reconciliation.reconcile(metricCode, operationalKobo);
    if (!result.configured) {
      return { label, value: operationalKobo.toString(), note: 'UNRECONCILED TO LEDGER — operational sum, not journal-verified (invariant 43b)' };
    }
    return {
      label,
      value: result.operationalKobo.toString(),
      ragStatus: result.breached ? 'RED' : 'GREEN',
      note: result.breached ? `LEDGER VARIANCE BREACH — ₦${result.varianceKobo} kobo outside ₦${result.toleranceKobo} kobo tolerance` : undefined,
      reconTile: {
        operationalKobo: result.operationalKobo.toString(),
        ledgerKobo: result.ledgerKobo.toString(),
        varianceKobo: result.varianceKobo.toString(),
        toleranceKobo: result.toleranceKobo.toString(),
        breached: result.breached,
      },
    };
  }

  // HF_DAILY_ACCRUAL's own cadence, per scheduler.service.ts's buildJobs()
  // config ("daily accrual 23:00 WAT") — read here for display only, not
  // duplicated execution logic; importing SchedulerModule would pull its
  // full 17-dependency graph into DashboardModule for one display string.
  private nextAccrualRunLabel(now: Date): string {
    const next = new Date(now);
    next.setHours(23, 0, 0, 0);
    if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
    return `Next Halal Fund daily accrual: ${next.toISOString().slice(0, 16).replace('T', ' ')} WAT`;
  }

  async getDashboard(): Promise<{ funds: { ledgerEntityCode: string; name: string; groups: DashboardGroup[] }[]; generatedAt: string }> {
    const now = new Date();
    const entities = await this.prisma.ledgerEntity.findMany({ where: { entityType: { in: ['FUND', 'POOL'] } }, orderBy: { code: 'asc' } });

    const funds = await Promise.all(
      entities.map(async (entity) => {
        const [latestNav, navHistory, subRequests, feeAccruals, distributions, lastAccrualRun] = await Promise.all([
          this.prisma.navRecord.findFirst({ where: { ledgerEntityCode: entity.code }, orderBy: { valuationDate: 'desc' } }),
          this.prisma.navRecord.findMany({ where: { ledgerEntityCode: entity.code }, orderBy: { valuationDate: 'desc' }, take: 30 }),
          entity.productCode
            ? this.prisma.subscriptionRequest.findMany({ where: { productCode: entity.productCode }, orderBy: { createdAt: 'desc' }, take: 200 })
            : Promise.resolve([] as Awaited<ReturnType<typeof this.prisma.subscriptionRequest.findMany>>),
          this.prisma.feeAccrual.findMany({ where: { ledgerEntityCode: entity.code }, orderBy: { accrualDate: 'desc' }, take: 60 }),
          this.prisma.distribution.findMany({ where: { ledgerEntityCode: entity.code }, orderBy: { recordDate: 'desc' }, take: 20 }),
          this.prisma.scheduledJobRun.findFirst({ where: { jobCode: 'HF_DAILY_ACCRUAL' }, orderBy: { scheduledFor: 'desc' } }),
        ]);

        const pipelineCounts = { PENDING: 0, APPROVED: 0, REJECTED: 0 };
        const pipelineAmounts = { PENDING: 0n, APPROVED: 0n, REJECTED: 0n };
        for (const r of subRequests) {
          pipelineCounts[r.status] = (pipelineCounts[r.status] ?? 0) + 1;
          pipelineAmounts[r.status] = (pipelineAmounts[r.status] ?? 0n) + r.amountKobo;
        }
        // "Posted" = an APPROVED request that has actually resulted in a
        // booked account -- resultProductAccountId/resultNdMandateAccountId
        // set, per the explore finding that this table has no 4th status.
        const posted = subRequests.filter((r) => r.status === 'APPROVED' && (r.resultProductAccountId || r.resultNdMandateAccountId)).length;

        const latestFeeByType = new Map<string, bigint>();
        for (const f of feeAccruals) if (!latestFeeByType.has(f.feeType)) latestFeeByType.set(f.feeType, f.cumulativeAmountKobo);
        const totalFeesAccruedKobo = [...latestFeeByType.values()].reduce((s, v) => s + v, 0n);

        // Income-accrual proxy: portfolio market-value delta since the
        // oldest row in the 30-row window -- there is no separate
        // "income_accrual" ledger table distinct from NAV itself (see
        // QUESTIONS_FOR_REVIEW.md). Honestly labeled as a proxy, not a
        // fabricated distinct figure.
        const oldestInWindow = navHistory[navHistory.length - 1];
        const incomeAccrualProxyKobo = latestNav && oldestInWindow ? latestNav.portfolioMktValKobo - oldestInWindow.portfolioMktValKobo : null;

        const distributionLifecycle = distributions.map((d) => ({
          periodStart: d.periodStart.toISOString().slice(0, 10),
          periodEnd: d.periodEnd.toISOString().slice(0, 10),
          status: d.status,
          stage: d.status === 'DRAFT' ? 'Declared — pending approval' : d.status === 'DECLARED' ? 'Approved — pending payout' : 'Paid',
          netAvailableKobo: d.netAvailableKobo.toString(),
        }));

        // Fund receivables: PENDING subscription requests aged by days
        // outstanding since request date -- money investors have
        // committed that hasn't posted yet. Distinct on purpose from the
        // Company dashboard's counterparty-lending AR (see
        // QUESTIONS_FOR_REVIEW.md).
        const pendingSubs = subRequests.filter((r) => r.status === 'PENDING' && r.requestType === 'SUBSCRIPTION');
        const receivablesAging = bucketByAge(pendingSubs.map((r) => ({ ageDays: daysBetween(r.createdAt, now), amountKobo: r.amountKobo })));

        const groups: DashboardGroup[] = [
          {
            groupCode: 'NAV_AND_UNITS',
            title: '📈 NAV Trend & Units in Issue',
            note: latestNav ? undefined : 'No NAV record published yet for this entity',
            metrics: latestNav
              ? [
                  { label: 'NAV per Unit', value: latestNav.navPerUnit.toString() },
                  { label: 'Total NAV (₦)', value: latestNav.totalNavKobo.toString() },
                  { label: 'Units Outstanding', value: latestNav.unitsOutstanding.toString() },
                  { label: 'Latest Valuation Date', value: latestNav.valuationDate.toISOString().slice(0, 10) },
                ]
              : [],
            tableColumns: ['valuationDate', 'navPerUnit', 'totalNavKobo'],
            tableRows: navHistory.slice().reverse().map((n) => ({ valuationDate: n.valuationDate.toISOString().slice(0, 10), navPerUnit: n.navPerUnit.toString(), totalNavKobo: n.totalNavKobo.toString() })),
          },
          {
            groupCode: 'SUBSCRIPTION_REDEMPTION_PIPELINE',
            title: '🔄 Subscription/Redemption Pipeline',
            metrics: [
              { label: 'Pending', value: pipelineCounts.PENDING, note: `₦${pipelineAmounts.PENDING} kobo` },
              { label: 'Approved', value: pipelineCounts.APPROVED, note: `₦${pipelineAmounts.APPROVED} kobo` },
              { label: 'Posted (booked)', value: posted },
              { label: 'Rejected', value: pipelineCounts.REJECTED },
            ],
          },
          {
            groupCode: 'ACCRUALS_VS_FEES',
            title: '💵 Income Accruals vs Fees',
            note: 'Income accrual is a proxy (portfolio market-value delta over the last 30 NAV rows) — no distinct income-accrual ledger table exists separate from NAV (see QUESTIONS_FOR_REVIEW.md).',
            metrics: [
              { label: 'Income Accrual (proxy, 30d, ₦)', value: incomeAccrualProxyKobo?.toString() ?? null },
              await this.moneyMetric('Fees Accrued — Cumulative (₦)', 'FUND_ACCT_DASHBOARD.FEES_ACCRUED', totalFeesAccruedKobo),
            ],
            tableColumns: ['feeType', 'cumulativeAmountKobo'],
            tableRows: [...latestFeeByType.entries()].map(([feeType, kobo]) => ({ feeType, cumulativeAmountKobo: kobo.toString() })),
          },
          {
            groupCode: 'DISTRIBUTION_LIFECYCLE',
            title: '🎁 Distribution Lifecycle',
            note: distributionLifecycle.length === 0 ? 'No distributions declared yet' : undefined,
            tableColumns: ['periodStart', 'periodEnd', 'stage', 'netAvailableKobo'],
            tableRows: distributionLifecycle,
          },
          {
            groupCode: 'FUND_RECEIVABLES_AGEING',
            title: '📋 Fund Receivables Ageing',
            note: 'Pending SUBSCRIPTION requests aged by days since request — money committed, not yet posted.',
            tableColumns: ['bucket', 'amountKobo', 'count'],
            tableRows: receivablesAging.map((r) => ({ ...r })),
          },
          {
            groupCode: 'UPCOMING_SCHEDULER_RUNS',
            title: '⏱️ Upcoming Scheduler Runs',
            metrics: [
              { label: 'Accrual Cadence', value: this.nextAccrualRunLabel(now) },
              { label: 'Last Accrual Run', value: lastAccrualRun ? `${lastAccrualRun.scheduledFor.toISOString().slice(0, 16).replace('T', ' ')} — ${lastAccrualRun.status}` : 'No run recorded yet' },
            ],
          },
        ];

        return { ledgerEntityCode: entity.code, name: entity.name, groups };
      }),
    );

    return { funds, generatedAt: now.toISOString() };
  }
}
