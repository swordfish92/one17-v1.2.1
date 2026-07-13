import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskService } from '../task/task.service';
import { isPeriodicReviewOverdue } from './kyc-periodic-review.util';

// Invariant 51(b-vii)/(b-viii)/(c) (CHECK13): three Compliance-facing
// DETECTION sweeps sharing one file since they're the same shape --
// scan for a due/overdue condition, assign a real Task to a real
// Compliance-capability-holding employee, dedupe on re-run by checking for
// an already-OPEN task with the same deliverableUrl marker. None of these
// invent a determination (a real automated sanctions check, a real
// completed KYC review) -- they only detect and route, per the platform's
// own AWAITING-MATRIX "never fake" doctrine. periodicReviewFrequency
// interpretation is shared with KriEngineService's CPL-05 computation via
// kyc-periodic-review.util.ts so the KRI count and the actual tasks raised
// can never silently disagree.
@Injectable()
export class InvestorComplianceSweepService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly task: TaskService,
  ) {}

  private async listComplianceEmployeeIds(): Promise<string[]> {
    const holders = await this.prisma.userRole.findMany({ where: { roleCode: 'COMPLIANCE' }, select: { userId: true } });
    const userIds = holders.map((h) => h.userId);
    if (userIds.length === 0) return [];
    const employees = await this.prisma.employee.findMany({ where: { appUserId: { in: userIds }, status: 'ACTIVE' }, select: { id: true } });
    return employees.map((e) => e.id);
  }

  // Dedupes on (assignee, title) rather than deliverableUrl -- all three
  // sweeps deliberately share ONE deliverableUrl (the Compliance Queue page,
  // the only real navigable landing spot), so deliverableUrl alone can't
  // distinguish "already raised the KYC-review task for this case" from
  // "already raised the sanctions task for this case." Title already
  // encodes the sweep type and the specific case name, so it's a safe,
  // per-case-per-sweep dedup key.
  private async assignIfNotAlreadyOpen(assigneeEmployeeId: string, systemUserId: string, title: string, description: string, deliverableUrl: string) {
    const existing = await this.prisma.task.findFirst({
      where: { assigneeEmployeeId, title, status: { in: ['OPEN', 'IN_PROGRESS'] } },
    });
    if (existing) return false;
    await this.task.systemAssignTask({ title, description, assigneeEmployeeId, assignedByUserId: systemUserId, deliverableUrl, linkPath: deliverableUrl });
    return true;
  }

  // Invariant 51(b-vii)/(b-viii)/(c) (CHECK13): read-only view backing the
  // ops-ui Compliance Queue page -- the SAME detection logic the three
  // sweeps use, without the Task side-effects, so staff have a real place
  // to land (not just a Task description) and a "Record Review" action
  // reachable from one screen instead of hunting through onboarding-case
  // detail pages that don't exist for already-COMPLETE_APPROVED records.
  async listComplianceQueue(now: Date) {
    const [counterpartyCases, investorCases] = await Promise.all([
      this.prisma.counterpartyOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null }, counterparty: { onboardingStatus: 'COMPLETE_APPROVED' } },
        include: { counterparty: { select: { id: true, legalName: true } } },
      }),
      this.prisma.investorOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null } },
        include: { investor: { select: { investorId: true, fullLegalName: true } } },
      }),
    ]);
    const overdueKycReviews = [
      ...counterpartyCases
        .filter((c) => isPeriodicReviewOverdue(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
        .map((c) => ({ kind: 'COUNTERPARTY' as const, id: c.counterparty.id, name: c.counterparty.legalName, frequency: c.periodicReviewFrequency, lastReviewedAt: c.lastPeriodicReviewAt })),
      ...investorCases
        .filter((c) => isPeriodicReviewOverdue(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
        .map((c) => ({ kind: 'INVESTOR' as const, id: c.investor.investorId, name: c.investor.fullLegalName, frequency: c.periodicReviewFrequency, lastReviewedAt: c.lastPeriodicReviewAt })),
    ];

    const config = await this.prisma.investorSanctionsRescreeningConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const cutoff = new Date(now);
    cutoff.setMonth(cutoff.getMonth() - config.frequencyMonths);
    const investors = await this.prisma.investor.findMany({ where: { fundStatus: { in: ['ACTIVE', 'MATURED', 'DORMANT'] } }, select: { investorId: true, fullLegalName: true } });
    const sanctionsDue: { investorId: string; name: string; lastScreenedAt: Date | null }[] = [];
    for (const investor of investors) {
      const lastScreen = await this.prisma.investorScreeningRecord.findFirst({ where: { investorId: investor.investorId }, orderBy: { screenedAt: 'desc' }, select: { screenedAt: true } });
      if (!lastScreen || lastScreen.screenedAt < cutoff) sanctionsDue.push({ investorId: investor.investorId, name: investor.fullLegalName, lastScreenedAt: lastScreen?.screenedAt ?? null });
    }

    const warningWindow = new Date(now.getTime() + 30 * 86_400_000);
    const documents = await this.prisma.investorKycDocument.findMany({
      where: { expiryDate: { not: null, lte: warningWindow } },
      include: { investor: { select: { investorId: true, fullLegalName: true } } },
    });
    const documentExpiry = documents.map((d) => ({ documentId: d.id, investorId: d.investor.investorId, name: d.investor.fullLegalName, documentType: d.documentType, expiryDate: d.expiryDate, isExpired: d.expiryDate! < now }));

    return { overdueKycReviews, sanctionsDue, documentExpiry };
  }

  // Invariant 51(b-vii): raises one Task per overdue onboarding case per
  // Compliance employee (broadcast -- neither case model carries a
  // per-case owner, same limitation the research confirmed for
  // fileManagingOfficerUserId-less counterparties elsewhere).
  async runKycPeriodicReviewSweep(now: Date, systemUserId: string): Promise<{ overdueCount: number; tasksCreated: number }> {
    const complianceEmployeeIds = await this.listComplianceEmployeeIds();
    const [counterpartyCases, investorCases] = await Promise.all([
      this.prisma.counterpartyOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null }, counterparty: { onboardingStatus: 'COMPLETE_APPROVED' } },
        include: { counterparty: { select: { id: true, legalName: true } } },
      }),
      this.prisma.investorOnboardingCase.findMany({
        where: { periodicReviewFrequency: { not: null } },
        include: { investor: { select: { investorId: true, fullLegalName: true } } },
      }),
    ]);

    let overdueCount = 0;
    let tasksCreated = 0;
    for (const c of counterpartyCases) {
      if (!isPeriodicReviewOverdue(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now)) continue;
      overdueCount++;
      for (const employeeId of complianceEmployeeIds) {
        const created = await this.assignIfNotAlreadyOpen(
          employeeId, systemUserId,
          `KYC periodic review due: ${c.counterparty.legalName}`,
          `Invariant 51(b-vii): this counterparty's ${c.periodicReviewFrequency} periodic review window has elapsed. Record the outcome from the Compliance Queue.`,
          `/compliance/queue`,
        );
        if (created) tasksCreated++;
      }
    }
    for (const c of investorCases) {
      if (!isPeriodicReviewOverdue(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now)) continue;
      overdueCount++;
      for (const employeeId of complianceEmployeeIds) {
        const created = await this.assignIfNotAlreadyOpen(
          employeeId, systemUserId,
          `KYC periodic review due: ${c.investor.fullLegalName}`,
          `Invariant 51(b-vii): this investor's ${c.periodicReviewFrequency} periodic review window has elapsed. Record the outcome from the Compliance Queue.`,
          `/compliance/queue`,
        );
        if (created) tasksCreated++;
      }
    }
    return { overdueCount, tasksCreated };
  }

  // Invariant 51(b-viii): NO automated sanctions provider exists anywhere in
  // this codebase (confirmed: onboarding-time InvestorScreeningRecord rows
  // are entered from a manual check, never computed). This sweep detects
  // WHO is due and routes a real Task to Compliance to perform the actual
  // re-screen through the existing InvestorService.recordScreening path --
  // it never invents a CLEAR/FLAGGED result itself.
  async runSanctionsRescreeningSweep(now: Date, systemUserId: string): Promise<{ dueCount: number; tasksCreated: number }> {
    const config = await this.prisma.investorSanctionsRescreeningConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const cutoff = new Date(now);
    cutoff.setMonth(cutoff.getMonth() - config.frequencyMonths);

    const investors = await this.prisma.investor.findMany({
      where: { fundStatus: { in: ['ACTIVE', 'MATURED', 'DORMANT'] } },
      select: { investorId: true, fullLegalName: true },
    });
    const complianceEmployeeIds = await this.listComplianceEmployeeIds();

    let dueCount = 0;
    let tasksCreated = 0;
    for (const investor of investors) {
      const lastScreen = await this.prisma.investorScreeningRecord.findFirst({
        where: { investorId: investor.investorId },
        orderBy: { screenedAt: 'desc' },
        select: { screenedAt: true },
      });
      const isDue = !lastScreen || lastScreen.screenedAt < cutoff;
      if (!isDue) continue;
      dueCount++;
      for (const employeeId of complianceEmployeeIds) {
        const created = await this.assignIfNotAlreadyOpen(
          employeeId, systemUserId,
          `Sanctions re-screening due: ${investor.fullLegalName}`,
          `Invariant 51(b-viii): this investor's ${config.frequencyMonths}-month sanctions/PEP re-screening window has elapsed. Perform the check and record a fresh screening result from the Compliance Queue.`,
          `/compliance/queue`,
        );
        if (created) tasksCreated++;
      }
    }
    return { dueCount, tasksCreated };
  }

  // Invariant 51(c) Tier-3: "investor document-expiry alerts (mirror the
  // counterparty Shariah-cert C13 control)." C13 itself turned out to be a
  // one-time migration-load-time gate, not a live/ongoing check (confirmed:
  // no scheduler job or service anywhere re-examines shariahCertExpiry
  // post-migration) -- so there is no live mechanism to literally copy.
  // This sweep is the genuinely-live version C13's own spirit calls for,
  // built fresh against InvestorKycDocument.expiryDate.
  async runDocumentExpirySweep(now: Date, systemUserId: string, warningDays = 30): Promise<{ expiringCount: number; expiredCount: number; tasksCreated: number }> {
    const warningWindow = new Date(now.getTime() + warningDays * 86_400_000);
    const documents = await this.prisma.investorKycDocument.findMany({
      where: { expiryDate: { not: null, lte: warningWindow } },
      include: { investor: { select: { investorId: true, fullLegalName: true } } },
    });
    const complianceEmployeeIds = await this.listComplianceEmployeeIds();

    let expiringCount = 0;
    let expiredCount = 0;
    let tasksCreated = 0;
    for (const doc of documents) {
      if (!doc.expiryDate) continue;
      const isExpired = doc.expiryDate < now;
      if (isExpired) expiredCount++; else expiringCount++;
      for (const employeeId of complianceEmployeeIds) {
        const created = await this.assignIfNotAlreadyOpen(
          employeeId, systemUserId,
          `${isExpired ? 'EXPIRED' : 'Expiring'} KYC document: ${doc.investor.fullLegalName}`,
          `Invariant 51(c): ${doc.documentType} expires ${doc.expiryDate.toISOString().slice(0, 10)}${isExpired ? ' (already past)' : ''}. Follow up for renewal/re-KYC from the Compliance Queue.`,
          `/compliance/queue`,
        );
        if (created) tasksCreated++;
      }
    }
    return { expiringCount, expiredCount, tasksCreated };
  }
}
