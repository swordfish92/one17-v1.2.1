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
exports.InvestorComplianceSweepService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const task_service_1 = require("../task/task.service");
const kyc_periodic_review_util_1 = require("./kyc-periodic-review.util");
let InvestorComplianceSweepService = class InvestorComplianceSweepService {
    prisma;
    task;
    constructor(prisma, task) {
        this.prisma = prisma;
        this.task = task;
    }
    async listComplianceEmployeeIds() {
        const holders = await this.prisma.userRole.findMany({ where: { roleCode: 'COMPLIANCE' }, select: { userId: true } });
        const userIds = holders.map((h) => h.userId);
        if (userIds.length === 0)
            return [];
        const employees = await this.prisma.employee.findMany({ where: { appUserId: { in: userIds }, status: 'ACTIVE' }, select: { id: true } });
        return employees.map((e) => e.id);
    }
    async assignIfNotAlreadyOpen(assigneeEmployeeId, systemUserId, title, description, deliverableUrl) {
        const existing = await this.prisma.task.findFirst({
            where: { assigneeEmployeeId, title, status: { in: ['OPEN', 'IN_PROGRESS'] } },
        });
        if (existing)
            return false;
        await this.task.systemAssignTask({ title, description, assigneeEmployeeId, assignedByUserId: systemUserId, deliverableUrl, linkPath: deliverableUrl });
        return true;
    }
    async listComplianceQueue(now) {
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
                .filter((c) => (0, kyc_periodic_review_util_1.isPeriodicReviewOverdue)(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
                .map((c) => ({ kind: 'COUNTERPARTY', id: c.counterparty.id, name: c.counterparty.legalName, frequency: c.periodicReviewFrequency, lastReviewedAt: c.lastPeriodicReviewAt })),
            ...investorCases
                .filter((c) => (0, kyc_periodic_review_util_1.isPeriodicReviewOverdue)(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
                .map((c) => ({ kind: 'INVESTOR', id: c.investor.investorId, name: c.investor.fullLegalName, frequency: c.periodicReviewFrequency, lastReviewedAt: c.lastPeriodicReviewAt })),
        ];
        const config = await this.prisma.investorSanctionsRescreeningConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
        const cutoff = new Date(now);
        cutoff.setMonth(cutoff.getMonth() - config.frequencyMonths);
        const investors = await this.prisma.investor.findMany({ where: { fundStatus: { in: ['ACTIVE', 'MATURED', 'DORMANT'] } }, select: { investorId: true, fullLegalName: true } });
        const sanctionsDue = [];
        for (const investor of investors) {
            const lastScreen = await this.prisma.investorScreeningRecord.findFirst({ where: { investorId: investor.investorId }, orderBy: { screenedAt: 'desc' }, select: { screenedAt: true } });
            if (!lastScreen || lastScreen.screenedAt < cutoff)
                sanctionsDue.push({ investorId: investor.investorId, name: investor.fullLegalName, lastScreenedAt: lastScreen?.screenedAt ?? null });
        }
        const warningWindow = new Date(now.getTime() + 30 * 86_400_000);
        const documents = await this.prisma.investorKycDocument.findMany({
            where: { expiryDate: { not: null, lte: warningWindow } },
            include: { investor: { select: { investorId: true, fullLegalName: true } } },
        });
        const documentExpiry = documents.map((d) => ({ documentId: d.id, investorId: d.investor.investorId, name: d.investor.fullLegalName, documentType: d.documentType, expiryDate: d.expiryDate, isExpired: d.expiryDate < now }));
        return { overdueKycReviews, sanctionsDue, documentExpiry };
    }
    async runKycPeriodicReviewSweep(now, systemUserId) {
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
            if (!(0, kyc_periodic_review_util_1.isPeriodicReviewOverdue)(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
                continue;
            overdueCount++;
            for (const employeeId of complianceEmployeeIds) {
                const created = await this.assignIfNotAlreadyOpen(employeeId, systemUserId, `KYC periodic review due: ${c.counterparty.legalName}`, `Invariant 51(b-vii): this counterparty's ${c.periodicReviewFrequency} periodic review window has elapsed. Record the outcome from the Compliance Queue.`, `/compliance/queue`);
                if (created)
                    tasksCreated++;
            }
        }
        for (const c of investorCases) {
            if (!(0, kyc_periodic_review_util_1.isPeriodicReviewOverdue)(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, now))
                continue;
            overdueCount++;
            for (const employeeId of complianceEmployeeIds) {
                const created = await this.assignIfNotAlreadyOpen(employeeId, systemUserId, `KYC periodic review due: ${c.investor.fullLegalName}`, `Invariant 51(b-vii): this investor's ${c.periodicReviewFrequency} periodic review window has elapsed. Record the outcome from the Compliance Queue.`, `/compliance/queue`);
                if (created)
                    tasksCreated++;
            }
        }
        return { overdueCount, tasksCreated };
    }
    async runSanctionsRescreeningSweep(now, systemUserId) {
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
            if (!isDue)
                continue;
            dueCount++;
            for (const employeeId of complianceEmployeeIds) {
                const created = await this.assignIfNotAlreadyOpen(employeeId, systemUserId, `Sanctions re-screening due: ${investor.fullLegalName}`, `Invariant 51(b-viii): this investor's ${config.frequencyMonths}-month sanctions/PEP re-screening window has elapsed. Perform the check and record a fresh screening result from the Compliance Queue.`, `/compliance/queue`);
                if (created)
                    tasksCreated++;
            }
        }
        return { dueCount, tasksCreated };
    }
    async runDocumentExpirySweep(now, systemUserId, warningDays = 30) {
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
            if (!doc.expiryDate)
                continue;
            const isExpired = doc.expiryDate < now;
            if (isExpired)
                expiredCount++;
            else
                expiringCount++;
            for (const employeeId of complianceEmployeeIds) {
                const created = await this.assignIfNotAlreadyOpen(employeeId, systemUserId, `${isExpired ? 'EXPIRED' : 'Expiring'} KYC document: ${doc.investor.fullLegalName}`, `Invariant 51(c): ${doc.documentType} expires ${doc.expiryDate.toISOString().slice(0, 10)}${isExpired ? ' (already past)' : ''}. Follow up for renewal/re-KYC from the Compliance Queue.`, `/compliance/queue`);
                if (created)
                    tasksCreated++;
            }
        }
        return { expiringCount, expiredCount, tasksCreated };
    }
};
exports.InvestorComplianceSweepService = InvestorComplianceSweepService;
exports.InvestorComplianceSweepService = InvestorComplianceSweepService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        task_service_1.TaskService])
], InvestorComplianceSweepService);
//# sourceMappingURL=investor-compliance-sweep.service.js.map