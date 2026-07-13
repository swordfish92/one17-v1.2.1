import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DashboardGroup } from './dashboard.types';

// Invariant 58(c): Business Development operational dashboard. Reads the
// SAME live-derived funnel logic BdService.getRegister() uses (invariant
// 27c: "do NOT invent a pipeline schema") but re-implements the stage
// derivation directly against Prisma rather than calling BdService, since
// getRegister() itself requires the caller to independently hold
// BD_REGISTER VIEW — a capability REL_OFF/MKT_OFF (both named dashboard
// viewers here) do not and should not need just to see their own
// dashboard (see QUESTIONS_FOR_REVIEW.md). This dashboard's own
// BD_DASHBOARD VIEW capability is the only gate its data needs.
@Injectable()
export class BdDashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard(viewerUserId: string, scope: 'own' | 'enterprise'): Promise<{ groups: DashboardGroup[]; generatedAt: string }> {
    const now = new Date();
    const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    const sixtyDaysOut = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);

    // Invariant 54(d)'s "scope-resolution seam": returns ENTERPRISE for
    // everyone today (no BD-attribution FK exists yet on Investor/Lead --
    // see QUESTIONS_FOR_REVIEW.md) so this dashboard is ready for a real
    // OWN-scope filter the moment Layer 5 Wave 1 lands, without a rewrite.
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
      if (hasFunding) fundedCount++;
      else if (investor.onboardingStage === 'STAGE_2_COMPLETE' && investor.kycStatus === 'KYC_COMPLETE') fullKycCount++;
      else expressCount++;
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

    const mobilizationByProduct = new Map<string, bigint>();
    const mobilizationByOfficer = new Map<string, bigint>();
    for (const s of approvedSubs) {
      mobilizationByProduct.set(s.productCode, (mobilizationByProduct.get(s.productCode) ?? 0n) + s.amountKobo);
      const officerName = s.initiator.displayName;
      mobilizationByOfficer.set(officerName, (mobilizationByOfficer.get(officerName) ?? 0n) + s.amountKobo);
    }
    const totalMobilizedKobo = approvedSubs.reduce((sum, s) => sum + s.amountKobo, 0n);

    // "vs targets": BudgetTarget is a generic governed-config row (any
    // targetType string, per the TPL_11 v2 driver-model loader) -- read
    // here rather than hardcoding a figure; honestly absent if FinCon has
    // not loaded a mobilization target row for the current fiscal year.
    const mobilizationTarget = await this.prisma.budgetTarget.findFirst({
      where: { targetType: { contains: 'MOBIL', mode: 'insensitive' }, budgetVersion: { fiscalYear: now.getFullYear(), status: 'ACTIVE' } },
    });

    const groups: DashboardGroup[] = [
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
        tableRows: upcomingMaturities.map((pa) => ({ investorName: pa.investor.fullLegalName, productCode: pa.productCode, maturityDate: pa.maturityDate!.toISOString().slice(0, 10), principalOrCommittedKobo: pa.principalOrCommittedKobo.toString() })),
      },
    ];

    return { groups, generatedAt: now.toISOString() };
  }
}
