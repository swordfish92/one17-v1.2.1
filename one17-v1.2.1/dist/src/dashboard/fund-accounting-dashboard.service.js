"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundAccountingDashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const reconciliation_service_1 = require("../reconciliation/reconciliation.service");
const dashboard_aging_util_1 = require("./dashboard-aging.util");
let FundAccountingDashboardService = class FundAccountingDashboardService {
    prisma;
    reconciliation;
    constructor(prisma, reconciliation) {
        this.prisma = prisma;
        this.reconciliation = reconciliation;
    }
    async moneyMetric(label, metricCode, operationalKobo) {
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
    nextAccrualRunLabel(now) {
        const next = new Date(now);
        next.setHours(23, 0, 0, 0);
        if (next.getTime() <= now.getTime())
            next.setDate(next.getDate() + 1);
        return `Next Halal Fund daily accrual: ${next.toISOString().slice(0, 16).replace('T', ' ')} WAT`;
    }
    async getDashboard() {
        const now = new Date();
        const entities = await this.prisma.ledgerEntity.findMany({ where: { entityType: { in: ['FUND', 'POOL'] } }, orderBy: { code: 'asc' } });
        const funds = await Promise.all(entities.map(async (entity) => {
            const [latestNav, navHistory, subRequests, feeAccruals, distributions, lastAccrualRun] = await Promise.all([
                this.prisma.navRecord.findFirst({ where: { ledgerEntityCode: entity.code }, orderBy: { valuationDate: 'desc' } }),
                this.prisma.navRecord.findMany({ where: { ledgerEntityCode: entity.code }, orderBy: { valuationDate: 'desc' }, take: 30 }),
                entity.productCode
                    ? this.prisma.subscriptionRequest.findMany({ where: { productCode: entity.productCode }, orderBy: { createdAt: 'desc' }, take: 200 })
                    : Promise.resolve([]),
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
            const posted = subRequests.filter((r) => r.status === 'APPROVED' && (r.resultProductAccountId || r.resultNdMandateAccountId)).length;
            const latestFeeByType = new Map();
            for (const f of feeAccruals)
                if (!latestFeeByType.has(f.feeType))
                    latestFeeByType.set(f.feeType, f.cumulativeAmountKobo);
            const totalFeesAccruedKobo = [...latestFeeByType.values()].reduce((s, v) => s + v, 0n);
            const oldestInWindow = navHistory[navHistory.length - 1];
            const incomeAccrualProxyKobo = latestNav && oldestInWindow ? latestNav.portfolioMktValKobo - oldestInWindow.portfolioMktValKobo : null;
            const distributionLifecycle = distributions.map((d) => ({
                periodStart: d.periodStart.toISOString().slice(0, 10),
                periodEnd: d.periodEnd.toISOString().slice(0, 10),
                status: d.status,
                stage: d.status === 'DRAFT' ? 'Declared — pending approval' : d.status === 'DECLARED' ? 'Approved — pending payout' : 'Paid',
                netAvailableKobo: d.netAvailableKobo.toString(),
            }));
            const pendingSubs = subRequests.filter((r) => r.status === 'PENDING' && r.requestType === 'SUBSCRIPTION');
            const receivablesAging = (0, dashboard_aging_util_1.bucketByAge)(pendingSubs.map((r) => ({ ageDays: (0, dashboard_aging_util_1.daysBetween)(r.createdAt, now), amountKobo: r.amountKobo })));
            const groups = [
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
        }));
        return { funds, generatedAt: now.toISOString() };
    }
};
exports.FundAccountingDashboardService = FundAccountingDashboardService;
exports.FundAccountingDashboardService = FundAccountingDashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        reconciliation_service_1.ReconciliationService])
], FundAccountingDashboardService);
//# sourceMappingURL=fund-accounting-dashboard.service.js.map