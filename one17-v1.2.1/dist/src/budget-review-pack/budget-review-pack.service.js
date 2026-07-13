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
exports.BudgetReviewPackService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const budget_review_pack_types_1 = require("./budget-review-pack.types");
let BudgetReviewPackService = class BudgetReviewPackService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async computeVarianceView(input) {
        const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: input.budgetVersionId } });
        if (version.status !== 'ACTIVE') {
            return { suspended: true, message: 'NO APPROVED BUDGET — variance reporting suspended', lines: [] };
        }
        const threshold = await this.prisma.budgetVarianceRagThreshold.findFirst({ orderBy: { version: 'desc' } });
        const lines = await this.prisma.budgetLine.findMany({
            where: { budgetVersionId: input.budgetVersionId, isActive: true },
            include: { monthlyAmounts: true, encumbrances: true },
        });
        const result = [];
        for (const line of lines) {
            const monthAmount = line.monthlyAmounts.find((m) => m.month === input.month);
            const budgetKobo = monthAmount?.amountKobo ?? 0n;
            const committedKobo = line.encumbrances.filter((e) => e.status === 'OPEN').reduce((s, e) => s + e.amountKobo, 0n);
            const actualKobo = input.actualsByLineIdKobo[line.id] ?? 0n;
            const varianceKobo = budgetKobo - actualKobo;
            const variancePct = budgetKobo !== 0n ? Number(varianceKobo) / Number(budgetKobo) : null;
            const ytdMonths = line.monthlyAmounts.filter((m) => m.month <= input.month);
            const ytdBudgetKobo = ytdMonths.reduce((s, m) => s + m.amountKobo, 0n);
            const ytdActualKobo = actualKobo;
            const ytdVarianceKobo = ytdBudgetKobo - ytdActualKobo;
            const fyBudgetKobo = line.monthlyAmounts.reduce((s, m) => s + m.amountKobo, 0n);
            let fyReforecastKobo = null;
            if ((line.phasingMethod === 'DRIVER_PCT_OF_FUM' || line.phasingMethod === 'DRIVER_PCT_OF_MOBILIZATION') && input.actualDriverOverrides) {
                const override = line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? input.actualDriverOverrides.FUM : input.actualDriverOverrides.MOBILIZATION;
                if (override !== undefined && line.driverRateOrFactor !== null) {
                    const rate = Number(line.driverRateOrFactor);
                    const monthlyReforecast = line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? override * rate * (1 / 12) : override * rate;
                    const elapsed = line.monthlyAmounts.filter((m) => m.month <= input.month).reduce((s, m) => s + m.amountKobo, 0n);
                    const remainingMonths = 12 - input.month;
                    fyReforecastKobo = elapsed + BigInt(Math.round(monthlyReforecast * 100)) * BigInt(remainingMonths);
                }
            }
            let rag = null;
            if (threshold && variancePct !== null) {
                const absPct = Math.abs(variancePct) * 100;
                rag = absPct <= Number(threshold.amberPct) ? 'GREEN' : absPct <= Number(threshold.redPct) ? 'AMBER' : 'RED';
            }
            result.push({
                budgetLineId: line.id,
                budgetLineGroup: line.budgetLineGroup,
                lineDescription: line.lineDescription,
                budgetKobo,
                committedKobo,
                actualKobo,
                varianceKobo,
                variancePct,
                ytdBudgetKobo,
                ytdActualKobo,
                ytdVarianceKobo,
                fyBudgetKobo,
                fyReforecastKobo,
                rag,
            });
        }
        return { suspended: false, month: input.month, lines: result };
    }
    async generatePack(input) {
        await this.assertCapability(input.generatedByUserId, 'BUDGET_REVIEW_PACK', 'INITIATE', 'generate a Budget Review Pack');
        const template = await this.getOrCreateTemplate(input.templateCode, input.generatedByUserId);
        const variance = await this.computeVarianceView(input);
        const frameworkMap = await this.prisma.accountingFrameworkMap.findFirst({ orderBy: { version: 'desc' } })
            ?? await this.prisma.accountingFrameworkMap.create({ data: { version: 1, description: 'Budget Review Pack placeholder framework map', status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: input.generatedByUserId } });
        const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: input.budgetVersionId } });
        const companyEntity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
        const reportRun = await this.prisma.reportRun.create({
            data: {
                ledgerEntityCode: companyEntity.code,
                basis: 'IFRS',
                periodStart: new Date(version.fiscalYear, input.month - 1, 1),
                periodEnd: new Date(version.fiscalYear, input.month, 0),
                frameworkMapId: frameworkMap.id,
                statementTemplateId: template.id,
                figures: variance,
                generatedByUserId: input.generatedByUserId,
            },
        });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'BUDGET_REVIEW_PACK_CIRCULATION',
            entityType: 'report_run',
            entityId: reportRun.id,
            initiatedByUserId: input.generatedByUserId,
            scenario: 'STANDARD',
        });
        await this.audit.record({
            actorUserId: input.generatedByUserId,
            action: 'CREATE',
            entityType: 'report_run',
            entityId: reportRun.id,
            after: { templateCode: input.templateCode, suspended: variance.suspended, workflowInstanceId: workflowInstance.id },
        });
        return { reportRun, variance, workflowInstanceId: workflowInstance.id };
    }
    async approveForCirculation(workflowInstanceId, approverUserId) {
        return this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    }
    async listPacks() {
        const rows = await this.prisma.reportRun.findMany({
            where: { statementTemplate: { statementCode: { in: ['MONTHLY_MGMT_BUDGET_PACK', 'QUARTERLY_BOARD_BUDGET_PACK'] } } },
            include: { statementTemplate: true, generatedBy: { select: { displayName: true } } },
            orderBy: { generatedAt: 'desc' },
            take: 100,
        });
        const auditRows = await this.prisma.auditTrail.findMany({
            where: { entityType: 'report_run', entityId: { in: rows.map((r) => r.id) }, action: 'CREATE' },
        });
        const workflowIdByReportRunId = new Map(auditRows.map((a) => [a.entityId, a.after?.workflowInstanceId]));
        const workflowInstances = await this.prisma.workflowInstance.findMany({
            where: { id: { in: [...workflowIdByReportRunId.values()].filter((v) => !!v) } },
        });
        const workflowById = new Map(workflowInstances.map((w) => [w.id, w]));
        return rows.map((r) => {
            const workflowInstanceId = workflowIdByReportRunId.get(r.id);
            const workflowInstance = workflowInstanceId ? workflowById.get(workflowInstanceId) : undefined;
            return {
                reportRunId: r.id,
                templateCode: r.statementTemplate?.statementCode ?? null,
                periodStart: r.periodStart,
                periodEnd: r.periodEnd,
                generatedByName: r.generatedBy.displayName,
                generatedAt: r.generatedAt,
                workflowInstanceId: workflowInstanceId ?? null,
                circulationStatus: workflowInstance?.status ?? 'UNKNOWN',
            };
        });
    }
    async getOrCreateTemplate(templateCode, createdByUserId) {
        const existing = await this.prisma.statementTemplate.findFirst({ where: { statementCode: templateCode } });
        if (existing)
            return existing;
        return this.prisma.statementTemplate.create({
            data: { basis: 'IFRS', statementCode: templateCode, name: templateCode, status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_review_pack_activity', entityId: activity, after: { functionCode, level } });
            throw new budget_review_pack_types_1.BudgetReviewPackError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BudgetReviewPackService = BudgetReviewPackService;
exports.BudgetReviewPackService = BudgetReviewPackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], BudgetReviewPackService);
//# sourceMappingURL=budget-review-pack.service.js.map