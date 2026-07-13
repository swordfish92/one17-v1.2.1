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
exports.BdDashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BdDashboardService = class BdDashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard(viewerUserId, scope) {
        const now = new Date();
        const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        const sixtyDaysOut = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
        const officerFilter = scope === 'own' ? { initiatedByUserId: viewerUserId } : {};
        const [pendingIntake, openLeads, investors, approvedSubs, marketingSends, subscriberStats, upcomingMaturities] = await Promise.all([
            this.prisma.publicIntakeSubmission.count({ where: { status: 'PENDING' } }),
            this.prisma.lead.count({ where: { status: { not: 'CONVERTED' } } }),
            this.prisma.investor.findMany({ where: { isDeleted: false }, include: { productAccounts: true } }),
            this.prisma.subscriptionRequest.findMany({
                where: { requestType: 'SUBSCRIPTION', status: 'APPROVED', decidedAt: { gte: ninetyDaysAgo }, ...officerFilter },
                include: { initiator: { select: { displayName: true } } },
            }),
            this.prisma.marketingSend.findMany({ where: { status: 'SENT' }, orderBy: { sentAt: 'desc' }, take: 20 }),
            this.prisma.marketingSubscriber.count(),
            this.prisma.productAccount.findMany({
                where: { status: 'ACTIVE', maturityDate: { gte: now, lte: sixtyDaysOut } },
                include: { investor: { select: { fullLegalName: true } } },
                orderBy: { maturityDate: 'asc' },
                take: 100,
            }),
        ]);
        let expressCount = 0, fullKycCount = 0, fundedCount = 0;
        for (const investor of investors) {
            const hasFunding = investor.productAccounts.some((pa) => pa.principalOrCommittedKobo > 0n || Number(pa.unitsHeld ?? 0) > 0);
            if (hasFunding)
                fundedCount++;
            else if (investor.onboardingStage === 'STAGE_2_COMPLETE' && investor.kycStatus === 'KYC_COMPLETE')
                fullKycCount++;
            else
                expressCount++;
        }
        const funnelStages = [
            { stage: 'Public Intake (pending)', count: pendingIntake },
            { stage: 'Lead', count: openLeads },
            { stage: 'Express KYC', count: expressCount },
            { stage: 'Full KYC', count: fullKycCount },
            { stage: 'Funded', count: fundedCount },
        ];
        const conversionRows = funnelStages.map((s, i) => {
            const prev = i === 0 ? null : funnelStages[i - 1].count;
            const conversionPct = prev && prev > 0 ? Math.round((s.count / prev) * 1000) / 10 : null;
            return { stage: s.stage, count: s.count, conversionFromPrevious: conversionPct != null ? `${conversionPct}%` : '—' };
        });
        const mobilizationByProduct = new Map();
        const mobilizationByOfficer = new Map();
        for (const s of approvedSubs) {
            mobilizationByProduct.set(s.productCode, (mobilizationByProduct.get(s.productCode) ?? 0n) + s.amountKobo);
            const officerName = s.initiator.displayName;
            mobilizationByOfficer.set(officerName, (mobilizationByOfficer.get(officerName) ?? 0n) + s.amountKobo);
        }
        const totalMobilizedKobo = approvedSubs.reduce((sum, s) => sum + s.amountKobo, 0n);
        const mobilizationTarget = await this.prisma.budgetTarget.findFirst({
            where: { targetType: { contains: 'MOBIL', mode: 'insensitive' }, budgetVersion: { fiscalYear: now.getFullYear(), status: 'ACTIVE' } },
        });
        const groups = [
            {
                groupCode: 'MOBILIZATION',
                title: '💰 Mobilization Inflows (90d)',
                note: mobilizationTarget ? undefined : 'No mobilization target loaded in the active budget for this fiscal year — showing actuals only',
                metrics: [
                    { label: 'Total Mobilized (₦)', value: totalMobilizedKobo.toString() },
                    { label: 'Target (₦)', value: mobilizationTarget ? mobilizationTarget.value.toString() : null },
                ],
                tableColumns: ['dimension', 'amountKobo'],
                tableRows: [
                    ...[...mobilizationByProduct.entries()].map(([productCode, kobo]) => ({ dimension: `Product: ${productCode}`, amountKobo: kobo.toString() })),
                    ...[...mobilizationByOfficer.entries()].map(([officer, kobo]) => ({ dimension: `Officer: ${officer}`, amountKobo: kobo.toString() })),
                ],
            },
            {
                groupCode: 'LEAD_FUNNEL',
                title: '🔻 Lead Funnel & Conversion',
                note: 'Live-derived (invariant 27c) — Public Intake → Lead → Express KYC → Full KYC → Funded. No stored pipeline table.',
                tableColumns: ['stage', 'count', 'conversionFromPrevious'],
                tableRows: conversionRows,
            },
            {
                groupCode: 'AUM_GROWTH_ATTRIBUTION',
                title: '📈 AUM Growth Attribution (90d)',
                note: 'Net of approved subscriptions minus approved redemptions, by product, over the trailing 90 days — a flow-attribution view, not a balance-sheet snapshot.',
                tableColumns: ['productCode', 'netFlowKobo'],
                tableRows: [...mobilizationByProduct.entries()].map(([productCode, inflowKobo]) => ({ productCode, netFlowKobo: inflowKobo.toString() })),
            },
            {
                groupCode: 'MARKETING_PERFORMANCE',
                title: '📣 Marketing Send Performance',
                note: 'Engagement (opens/clicks) is NOT_YET_INSTRUMENTED — no tracking field exists on marketing_send yet. Sent counts are live.',
                metrics: [{ label: 'Active Subscribers', value: subscriberStats }],
                tableColumns: ['subject', 'sentAt', 'recipientCount'],
                tableRows: marketingSends.map((m) => ({ subject: m.subject, sentAt: m.sentAt?.toISOString().slice(0, 10) ?? null, recipientCount: m.recipientCount ?? 0 })),
            },
            {
                groupCode: 'RETENTION_WORKLIST',
                title: '📅 Upcoming Maturities/Rollovers (60d)',
                note: upcomingMaturities.length === 0 ? 'No ACTIVE product accounts maturing in the next 60 days' : undefined,
                tableColumns: ['investorName', 'productCode', 'maturityDate', 'principalOrCommittedKobo'],
                tableRows: upcomingMaturities.map((pa) => ({ investorName: pa.investor.fullLegalName, productCode: pa.productCode, maturityDate: pa.maturityDate.toISOString().slice(0, 10), principalOrCommittedKobo: pa.principalOrCommittedKobo.toString() })),
            },
        ];
        return { groups, generatedAt: now.toISOString() };
    }
};
exports.BdDashboardService = BdDashboardService;
exports.BdDashboardService = BdDashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BdDashboardService);
//# sourceMappingURL=bd-dashboard.service.js.map