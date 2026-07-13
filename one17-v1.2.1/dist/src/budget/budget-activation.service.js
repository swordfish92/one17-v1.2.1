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
exports.BudgetActivationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const budget_types_1 = require("./budget.types");
let BudgetActivationService = class BudgetActivationService {
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
    async requestActivation(budgetVersionId, boardResolutionRef, requestedByUserId) {
        await this.assertCapability(requestedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'request budget activation');
        if (!boardResolutionRef?.trim()) {
            throw new budget_types_1.BudgetExtractionError('boardResolutionRef is required to request activation (AMD-12 named-missing-parameter refusal) — Budget Spec §5a: "Board resolution ref + attachment mandatory."');
        }
        const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: budgetVersionId } });
        if (version.status !== 'BOARD_APPROVED') {
            throw new budget_types_1.BudgetExtractionError(`Budget version ${budgetVersionId} is ${version.status}, not BOARD_APPROVED — cannot request activation.`);
        }
        const alreadyActive = await this.prisma.budgetVersion.findFirst({ where: { fiscalYear: version.fiscalYear, status: 'ACTIVE' } });
        if (alreadyActive) {
            throw new budget_types_1.BudgetExtractionError(`Fiscal year ${version.fiscalYear} already has an ACTIVE budget version (${alreadyActive.id}) — no second concurrent ACTIVE version.`);
        }
        await this.prisma.budgetVersion.update({ where: { id: budgetVersionId }, data: { boardResolutionRef } });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'BUDGET_ACTIVATION',
            entityType: 'budget_version',
            entityId: budgetVersionId,
            initiatedByUserId: requestedByUserId,
            scenario: 'STANDARD',
        });
        await this.prisma.budgetVersion.update({ where: { id: budgetVersionId }, data: { workflowInstanceId: workflowInstance.id } });
        return workflowInstance;
    }
    async approveActivation(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            const activated = await this.prisma.budgetVersion.update({
                where: { id: updated.entityId },
                data: { status: 'ACTIVE', approvedByUserId: approverUserId },
            });
            await this.audit.record({
                actorUserId: approverUserId,
                action: 'UPDATE',
                entityType: 'budget_version',
                entityId: activated.id,
                after: { status: 'ACTIVE' },
            });
        }
        return updated;
    }
    async requestEncumbrance(budgetLineId, amountKobo, description, requestedByUserId) {
        await this.assertCapability(requestedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'request an expenditure encumbrance');
        const line = await this.prisma.budgetLine.findUniqueOrThrow({
            where: { id: budgetLineId },
            include: { budgetVersion: true, monthlyAmounts: true, encumbrances: { where: { status: 'OPEN' } } },
        });
        if (line.budgetVersion.status !== 'ACTIVE') {
            throw new budget_types_1.BudgetExtractionError('NO APPROVED BUDGET — expenditure control suspended (budget version is not ACTIVE).');
        }
        const fyBudgetKobo = line.monthlyAmounts.reduce((s, m) => s + m.amountKobo, 0n);
        const alreadyEncumberedKobo = line.encumbrances.reduce((s, e) => s + e.amountKobo, 0n);
        const availableKobo = fyBudgetKobo - alreadyEncumberedKobo;
        if (amountKobo > availableKobo) {
            throw new budget_types_1.BudgetExtractionError(`System budget check failed: requesting ${amountKobo} kobo against ${availableKobo} kobo available on line "${line.lineDescription}" (FY budget ${fyBudgetKobo}, already encumbered ${alreadyEncumberedKobo}).`);
        }
        const encumbrance = await this.prisma.encumbrance.create({
            data: { budgetLineId, amountKobo, description, requestedByUserId, status: 'OPEN' },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'EXPENDITURE_REQUISITION',
                entityType: 'encumbrance',
                entityId: encumbrance.id,
                initiatedByUserId: requestedByUserId,
                amountKobo,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: requestedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'encumbrance',
                entityId: encumbrance.id,
                after: { workflowTypeCode: 'EXPENDITURE_REQUISITION', reason: err.message },
            });
            await this.prisma.encumbrance.delete({ where: { id: encumbrance.id } });
            throw err;
        }
        await this.audit.record({
            actorUserId: requestedByUserId,
            action: 'CREATE',
            entityType: 'encumbrance',
            entityId: encumbrance.id,
            after: { budgetLineId, amountKobo: amountKobo.toString(), workflowInstanceId: workflowInstance.id },
        });
        return { encumbrance, workflowInstance };
    }
    async releaseEncumbrance(encumbranceId, actorUserId) {
        await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'release an encumbrance');
        const current = await this.prisma.encumbrance.findUniqueOrThrow({ where: { id: encumbranceId } });
        if (current.status !== 'OPEN') {
            throw new budget_types_1.BudgetExtractionError(`Encumbrance ${encumbranceId} is ${current.status}, not OPEN — cannot release.`);
        }
        const encumbrance = await this.prisma.encumbrance.update({ where: { id: encumbranceId }, data: { status: 'RELEASED' } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'encumbrance', entityId: encumbranceId, after: { status: 'RELEASED' } });
        return encumbrance;
    }
    async listEncumbrances(actorUserId, filter) {
        await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'VIEW', 'view the encumbrance/requisition register');
        const encumbrances = await this.prisma.encumbrance.findMany({
            where: { budgetLineId: filter?.budgetLineId, status: filter?.status },
            include: {
                budgetLine: { select: { lineDescription: true, budgetLineGroup: true, ledgerEntityCode: true } },
                requestedBy: { select: { displayName: true, email: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
        const workflowInstances = await this.prisma.workflowInstance.findMany({
            where: { entityType: 'encumbrance', entityId: { in: encumbrances.map((e) => e.id) } },
            select: { id: true, entityId: true, status: true },
        });
        const workflowByEncumbranceId = new Map(workflowInstances.map((w) => [w.entityId, w]));
        return encumbrances.map((e) => ({ ...e, workflowInstance: workflowByEncumbranceId.get(e.id) ?? null }));
    }
    async listActiveBudgetLinesForEncumbrance(actorUserId) {
        await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'VIEW', 'view budget lines eligible for an expenditure requisition');
        return this.prisma.budgetLine.findMany({
            where: { budgetVersion: { status: 'ACTIVE' }, isActive: true },
            select: { id: true, lineDescription: true, budgetLineGroup: true, ledgerEntityCode: true },
            orderBy: { lineDescription: 'asc' },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_activation_activity', entityId: activity, after: { functionCode, level } });
            throw new budget_types_1.BudgetExtractionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BudgetActivationService = BudgetActivationService;
exports.BudgetActivationService = BudgetActivationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], BudgetActivationService);
//# sourceMappingURL=budget-activation.service.js.map