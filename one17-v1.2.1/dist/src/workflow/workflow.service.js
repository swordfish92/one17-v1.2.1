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
exports.WorkflowEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_types_1 = require("./workflow.types");
let WorkflowEngineService = class WorkflowEngineService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async initiate(input) {
        const rule = await this.resolveApprovalRule(input);
        const { eligible: canInitiate } = await this.delegation.hasCapability(input.initiatedByUserId, rule.initiatorFunctionCode, 'INITIATE');
        if (!canInitiate) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'workflow_instance',
                entityId: `${input.entityType}:${input.entityId}`,
                after: {
                    workflowTypeCode: input.workflowTypeCode,
                    requiredFunctionCode: rule.initiatorFunctionCode,
                },
            });
            throw new workflow_types_1.WorkflowAuthorizationError(`User lacks INITIATE permission on ${rule.initiatorFunctionCode}, required to initiate ${input.workflowTypeCode}`, `${input.entityType}:${input.entityId}`);
        }
        const instance = await this.prisma.workflowInstance.create({
            data: {
                workflowTypeCode: input.workflowTypeCode,
                approvalRuleId: rule.id,
                entityType: input.entityType,
                entityId: input.entityId,
                amountKobo: input.amountKobo,
                scenario: input.scenario,
                initiatedByUserId: input.initiatedByUserId,
                status: 'PENDING_APPROVAL',
            },
        });
        await this.audit.record({
            actorUserId: input.initiatedByUserId,
            action: 'CREATE',
            entityType: 'workflow_instance',
            entityId: instance.id,
            after: {
                workflowTypeCode: input.workflowTypeCode,
                entityType: input.entityType,
                entityId: input.entityId,
                amountKobo: input.amountKobo?.toString(),
                scenario: input.scenario,
                approvalRuleId: rule.id,
            },
        });
        return instance;
    }
    async approveNextStep(workflowInstanceId, approverUserId, notes) {
        const instance = await this.loadLiveInstance(workflowInstanceId);
        if (approverUserId === instance.initiatedByUserId) {
            await this.denyStep(instance.id, approverUserId, 'Approver is the same user who initiated this workflow instance (SRS §3.3 maker≠checker).');
            throw new workflow_types_1.WorkflowAuthorizationError('Approver cannot be the same user who initiated this workflow instance.', instance.id);
        }
        const step = this.currentPendingStep(instance);
        if (!step) {
            throw new workflow_types_1.WorkflowAuthorizationError('No pending approval step — instance may already be fully approved.', instance.id);
        }
        const eligibility = await this.resolveApproverEligibility(approverUserId, step, instance);
        if (!eligibility.eligible) {
            await this.denyStep(instance.id, approverUserId, `Approver lacks ${step.requiredFunctionCode} APPROVE capability (standing or delegated), or sufficient limit, for this step.`);
            throw new workflow_types_1.WorkflowAuthorizationError(`Approver lacks required capability/approval limit for step ${step.stepOrder} (${step.requiredFunctionCode}).`, instance.id);
        }
        await this.prisma.workflowStepApproval.create({
            data: {
                workflowInstanceId: instance.id,
                approvalRuleStepId: step.id,
                approverUserId,
                decision: 'APPROVE',
                notes,
            },
        });
        const isLastStep = step.stepOrder ===
            Math.max(...instance.approvalRule.steps.map((s) => s.stepOrder));
        const updated = await this.prisma.workflowInstance.update({
            where: { id: instance.id },
            data: isLastStep ? { status: 'APPROVED' } : {},
        });
        if (updated.status === 'APPROVED' &&
            updated.workflowTypeCode === 'DELEGATION_GRANT') {
            await this.delegation.activate(updated.entityId, approverUserId);
        }
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'APPROVE',
            entityType: 'workflow_instance',
            entityId: instance.id,
            workflowStep: `step ${step.stepOrder}: ${step.requiredFunctionCode}`,
            after: {
                decision: 'APPROVE',
                resultingStatus: updated.status,
                viaDelegationId: eligibility.viaDelegationId,
            },
        });
        return updated;
    }
    async reject(workflowInstanceId, approverUserId, notes) {
        const instance = await this.loadLiveInstance(workflowInstanceId);
        const step = this.currentPendingStep(instance);
        if (step) {
            await this.prisma.workflowStepApproval.create({
                data: {
                    workflowInstanceId: instance.id,
                    approvalRuleStepId: step.id,
                    approverUserId,
                    decision: 'REJECT',
                    notes,
                },
            });
        }
        const updated = await this.prisma.workflowInstance.update({
            where: { id: instance.id },
            data: { status: 'REJECTED' },
        });
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'REJECT',
            entityType: 'workflow_instance',
            entityId: instance.id,
            after: { notes },
        });
        return updated;
    }
    async execute(workflowInstanceId, executorUserId) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
        });
        if (instance.status !== 'APPROVED') {
            throw new workflow_types_1.WorkflowAuthorizationError(`Cannot execute a workflow instance in status ${instance.status}; must be APPROVED.`, instance.id);
        }
        const updated = await this.prisma.workflowInstance.update({
            where: { id: instance.id },
            data: { status: 'EXECUTED' },
        });
        await this.audit.record({
            actorUserId: executorUserId,
            action: 'EXECUTE',
            entityType: 'workflow_instance',
            entityId: instance.id,
        });
        return updated;
    }
    async getInboxForUser(userId) {
        const pending = await this.loadPendingInstances();
        const inbox = [];
        for (const instance of pending) {
            if (instance.initiatedByUserId === userId)
                continue;
            const step = this.currentPendingStep(instance);
            if (!step)
                continue;
            const eligibility = await this.resolveApproverEligibility(userId, step, instance);
            if (eligibility.eligible) {
                inbox.push({ instance, pendingStep: step, viaDelegationId: eligibility.viaDelegationId });
            }
        }
        return inbox;
    }
    async loadPendingInstances() {
        return this.prisma.workflowInstance.findMany({
            where: { status: 'PENDING_APPROVAL' },
            include: {
                approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } },
                stepApprovals: true,
            },
            orderBy: { createdAt: 'asc' },
        });
    }
    async resolveApprovalRule(input) {
        if (input.scenario) {
            const rule = await this.prisma.approvalRule.findFirst({
                where: {
                    workflowTypeCode: input.workflowTypeCode,
                    scenario: input.scenario,
                    chainVersion: { status: 'ACTIVE' },
                },
                include: { steps: { orderBy: { stepOrder: 'asc' } } },
            });
            if (!rule)
                throw new Error(`No approval rule configured for ${input.workflowTypeCode} scenario ${input.scenario}`);
            return rule;
        }
        if (input.amountKobo === undefined) {
            throw new Error(`amountKobo or scenario is required to resolve an approval rule for ${input.workflowTypeCode}`);
        }
        const rule = await this.prisma.approvalRule.findFirst({
            where: {
                workflowTypeCode: input.workflowTypeCode,
                scenario: null,
                chainVersion: { status: 'ACTIVE' },
                AND: [
                    {
                        OR: [
                            { minAmountKobo: null },
                            { minAmountKobo: { lte: input.amountKobo } },
                        ],
                    },
                    {
                        OR: [
                            { maxAmountKobo: null },
                            { maxAmountKobo: { gt: input.amountKobo } },
                        ],
                    },
                ],
            },
            include: { steps: { orderBy: { stepOrder: 'asc' } } },
        });
        if (!rule)
            throw new Error(`No approval rule configured for ${input.workflowTypeCode} at amount ${input.amountKobo}`);
        return rule;
    }
    async loadLiveInstance(workflowInstanceId) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
            include: {
                approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } },
                stepApprovals: true,
            },
        });
        if (instance.status !== 'PENDING_APPROVAL') {
            throw new workflow_types_1.WorkflowAuthorizationError(`Workflow instance is ${instance.status}, not PENDING_APPROVAL.`, instance.id);
        }
        return instance;
    }
    currentPendingStep(instance) {
        const approvedStepIds = new Set(instance.stepApprovals
            .filter((a) => a.decision === 'APPROVE')
            .map((a) => a.approvalRuleStepId));
        return instance.approvalRule.steps.find((s) => !approvedStepIds.has(s.id));
    }
    async resolveApproverEligibility(approverUserId, step, instance) {
        return this.delegation.hasCapability(approverUserId, step.requiredFunctionCode, 'APPROVE', {
            requiresAmountLimitCheck: step.requiresAmountLimitCheck,
            amountKobo: instance.amountKobo,
        });
    }
    async denyStep(workflowInstanceId, actorUserId, reason) {
        await this.audit.record({
            actorUserId,
            action: 'PERMISSION_DENIED',
            entityType: 'workflow_instance',
            entityId: workflowInstanceId,
            after: { reason },
        });
    }
    async getTrail(workflowInstanceId) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
            include: {
                initiatedBy: { select: { id: true, displayName: true, email: true } },
                approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' }, include: { requiredFunction: true } } } },
                stepApprovals: { include: { approver: { select: { id: true, displayName: true, email: true } } } },
            },
        });
        const approvalByStepId = new Map(instance.stepApprovals.map((a) => [a.approvalRuleStepId, a]));
        const steps = instance.approvalRule.steps.map((step) => {
            const approval = approvalByStepId.get(step.id);
            return {
                stepOrder: step.stepOrder,
                requiredFunctionCode: step.requiredFunctionCode,
                requiredFunctionDescription: step.requiredFunction.description,
                description: step.description,
                decision: approval?.decision ?? null,
                approver: approval ? { id: approval.approver.id, displayName: approval.approver.displayName, email: approval.approver.email } : null,
                decidedAt: approval?.decidedAt ?? null,
                notes: approval?.notes ?? null,
            };
        });
        return {
            workflowInstanceId: instance.id,
            workflowTypeCode: instance.workflowTypeCode,
            status: instance.status,
            scenario: instance.scenario,
            amountKobo: instance.amountKobo,
            initiatedBy: instance.initiatedBy,
            createdAt: instance.createdAt,
            updatedAt: instance.updatedAt,
            steps,
        };
    }
};
exports.WorkflowEngineService = WorkflowEngineService;
exports.WorkflowEngineService = WorkflowEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], WorkflowEngineService);
//# sourceMappingURL=workflow.service.js.map