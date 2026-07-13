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
exports.RiskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const risk_types_1 = require("./risk.types");
let RiskService = class RiskService {
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
    async proposeMatrixVersion(input) {
        await this.assertCapability(input.proposedByUserId, 'RISK_APPETITE_MATRIX', 'INITIATE', 'propose a new risk appetite matrix version');
        const latest = await this.prisma.riskAppetiteMatrixVersion.findFirst({
            orderBy: { version: 'desc' },
        });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.riskAppetiteMatrixVersion.create({
            data: {
                version,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        if (input.cloneFromVersionId) {
            const sourceCategories = await this.prisma.riskAppetiteCategory.findMany({
                where: { matrixVersionId: input.cloneFromVersionId },
            });
            for (const c of sourceCategories) {
                await this.prisma.riskAppetiteCategory.create({
                    data: {
                        matrixVersionId: created.id,
                        sortOrder: c.sortOrder,
                        riskCategory: c.riskCategory,
                        appetiteStatement: c.appetiteStatement,
                        appetiteLevel: c.appetiteLevel,
                        direction: c.direction,
                        isZeroTolerance: c.isZeroTolerance,
                        escalationOwner: c.escalationOwner,
                        greenThreshold: c.greenThreshold,
                        amberThreshold: c.amberThreshold,
                        redThreshold: c.redThreshold,
                    },
                });
            }
        }
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'RISK_APPETITE_MATRIX_APPROVAL',
                entityType: 'risk_appetite_matrix_version',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'risk_appetite_matrix_version',
                entityId: created.id,
                after: { workflowTypeCode: 'RISK_APPETITE_MATRIX_APPROVAL', reason: err.message },
            });
            await this.prisma.riskAppetiteCategory.deleteMany({ where: { matrixVersionId: created.id } });
            await this.prisma.riskAppetiteMatrixVersion.delete({ where: { id: created.id } });
            throw err;
        }
        await this.prisma.riskAppetiteMatrixVersion.update({
            where: { id: created.id },
            data: { workflowInstanceId: instance.id },
        });
        await this.audit.record({
            actorUserId: input.proposedByUserId,
            action: 'CREATE',
            entityType: 'risk_appetite_matrix_version',
            entityId: created.id,
            after: { version, clonedFrom: input.cloneFromVersionId },
        });
        return { matrixVersion: created, workflowInstance: instance };
    }
    async updateCategoryThresholds(input) {
        await this.assertCapability(input.actorUserId, 'RISK_APPETITE_MATRIX', 'INITIATE', 'set risk appetite category thresholds');
        const version = await this.prisma.riskAppetiteMatrixVersion.findUniqueOrThrow({
            where: { id: input.matrixVersionId },
        });
        if (version.status !== 'DRAFT') {
            throw new risk_types_1.RiskLifecycleError(`Cannot edit thresholds on version ${version.version}: status is ${version.status}, not DRAFT.`);
        }
        const category = await this.prisma.riskAppetiteCategory.findFirstOrThrow({
            where: {
                matrixVersionId: input.matrixVersionId,
                sortOrder: input.sortOrder,
            },
        });
        if (!category.isZeroTolerance &&
            input.greenThreshold !== undefined &&
            input.amberThreshold !== undefined &&
            input.redThreshold !== undefined) {
            const monotonic = category.direction === 'HIGHER_BETTER'
                ? input.greenThreshold > input.amberThreshold &&
                    input.amberThreshold > input.redThreshold
                : input.greenThreshold < input.amberThreshold &&
                    input.amberThreshold < input.redThreshold;
            if (!monotonic) {
                throw new risk_types_1.RiskLifecycleError(`Thresholds for "${category.riskCategory}" are not monotonic per Direction ${category.direction} (AMD-06).`);
            }
        }
        const updated = await this.prisma.riskAppetiteCategory.update({
            where: { id: category.id },
            data: {
                greenThreshold: input.greenThreshold,
                amberThreshold: input.amberThreshold,
                redThreshold: input.redThreshold,
            },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'risk_appetite_category',
            entityId: updated.id,
            after: {
                greenThreshold: input.greenThreshold,
                amberThreshold: input.amberThreshold,
                redThreshold: input.redThreshold,
            },
        });
        return updated;
    }
    async approveMatrixVersion(input) {
        if (!input.boardResolutionRef) {
            throw new risk_types_1.RiskLifecycleError('A boardResolutionRef is required to approve a risk appetite matrix version (AMD-12 rule 3).');
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const version = await this.prisma.riskAppetiteMatrixVersion.findFirstOrThrow({
            where: { workflowInstanceId: input.workflowInstanceId },
        });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.riskAppetiteMatrixVersion.updateMany({
                where: { status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.riskAppetiteMatrixVersion.update({
                where: { id: version.id },
                data: {
                    status: 'ACTIVE',
                    approvedByUserId: input.approverUserId,
                    boardResolutionRef: input.boardResolutionRef,
                    effectiveFrom: new Date(),
                },
            }),
        ]);
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'risk_appetite_matrix_version',
            entityId: version.id,
            after: {
                status: 'ACTIVE',
                version: version.version,
                boardResolutionRef: input.boardResolutionRef,
            },
        });
        return activated;
    }
    async getActiveMatrix() {
        const active = await this.prisma.riskAppetiteMatrixVersion.findFirst({
            where: { status: 'ACTIVE' },
            include: { categories: { orderBy: { sortOrder: 'asc' } } },
        });
        if (!active)
            return { status: 'AWAITING_APPROVED_MATRIX' };
        return {
            status: 'ACTIVE',
            version: active.version,
            effectiveFrom: active.effectiveFrom,
            categories: active.categories.map((c) => ({
                riskCategory: c.riskCategory,
                appetiteStatement: c.appetiteStatement,
                direction: c.direction,
                isZeroTolerance: c.isZeroTolerance,
                greenThreshold: c.greenThreshold?.toString() ?? null,
                amberThreshold: c.amberThreshold?.toString() ?? null,
                redThreshold: c.redThreshold?.toString() ?? null,
            })),
        };
    }
    async getRiskRegister(status) {
        return this.prisma.riskRegisterEntry.findMany({
            where: status ? { status } : undefined,
            orderBy: { sortOrder: 'asc' },
        });
    }
    async approveRiskRegisterEntry(input) {
        await this.assertCapability(input.approverUserId, 'RISK_REGISTER', 'APPROVE', 'approve a risk register entry');
        const entry = await this.prisma.riskRegisterEntry.findUniqueOrThrow({
            where: { id: input.id },
        });
        if (entry.status !== 'DRAFT') {
            throw new risk_types_1.RiskLifecycleError(`Cannot approve risk_register_entry ${entry.id}: status is ${entry.status}, not DRAFT.`);
        }
        const updated = await this.prisma.riskRegisterEntry.update({
            where: { id: entry.id },
            data: {
                status: 'ACTIVE',
                approvedByUserId: input.approverUserId,
                boardResolutionRef: input.boardResolutionRef,
            },
        });
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'risk_register_entry',
            entityId: updated.id,
            after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
        });
        return updated;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'risk_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new risk_types_1.RiskLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.RiskService = RiskService;
exports.RiskService = RiskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], RiskService);
//# sourceMappingURL=risk.service.js.map