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
exports.StrategyLayerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const delegation_service_1 = require("../delegation/delegation.service");
const strategy_layer_types_1 = require("./strategy-layer.types");
let StrategyLayerService = class StrategyLayerService {
    prisma;
    audit;
    workflow;
    delegation;
    constructor(prisma, audit, workflow, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.delegation = delegation;
    }
    async proposeStatement(input) {
        await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a strategy statement');
        const typeConfig = await this.prisma.strategyStatementTypeConfig.findUnique({
            where: { code: input.statementTypeCode },
        });
        if (!typeConfig || !typeConfig.isActive) {
            throw new strategy_layer_types_1.StrategyLayerError(`"${input.statementTypeCode}" is not an active strategy_statement_type_config row — add it via addStatementTypeConfig before proposing a statement of this type (invariant 19: vocabulary is config, not code).`);
        }
        const created = await this.prisma.strategyStatement.create({
            data: {
                statementTypeCode: input.statementTypeCode,
                content: input.content,
                explanation: input.explanation,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'STRATEGY_LAYER_APPROVAL',
                entityType: 'strategy_statement',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'strategy_statement',
                entityId: created.id,
                after: { workflowTypeCode: 'STRATEGY_LAYER_APPROVAL', reason: err.message },
            });
            await this.prisma.strategyStatement.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.strategyStatement.update({
            where: { id: created.id },
            data: { workflowInstanceId: instance.id },
        });
    }
    async approveStatement(input) {
        if (!input.boardResolutionRef) {
            throw new strategy_layer_types_1.StrategyLayerError('A boardResolutionRef is required to approve a strategy statement (invariant 28c: Board-resolution-ref on changes).');
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const statement = await this.prisma.strategyStatement.findFirstOrThrow({
            where: { workflowInstanceId: input.workflowInstanceId },
            include: { statementType: true },
        });
        const ops = [];
        if (!statement.statementType.allowsMultipleActive) {
            ops.push(this.prisma.strategyStatement.updateMany({
                where: { statementTypeCode: statement.statementTypeCode, status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }));
        }
        ops.push(this.prisma.strategyStatement.update({
            where: { id: statement.id },
            data: {
                status: 'ACTIVE',
                boardResolutionRef: input.boardResolutionRef,
                approvedByUserId: input.approverUserId,
                effectiveFrom: new Date(),
            },
        }));
        const [, activated] = await this.prisma.$transaction(ops);
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'strategy_statement',
            entityId: statement.id,
            after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
        });
        return activated;
    }
    async listPendingStatements() {
        return this.prisma.strategyStatement.findMany({
            where: { status: 'DRAFT', workflowInstanceId: { not: null } },
            include: { statementType: true },
            orderBy: { createdAt: 'asc' },
        });
    }
    async getActiveStrategy() {
        const statements = await this.prisma.strategyStatement.findMany({
            where: { status: 'ACTIVE' },
            include: { statementType: true },
            orderBy: { effectiveFrom: 'desc' },
        });
        const pillars = await this.prisma.strategicPillar.findMany({
            include: { objectiveMap: { include: { objective: true } } },
        });
        return { statements, pillars };
    }
    async listStatementTypeConfigs() {
        return this.prisma.strategyStatementTypeConfig.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
        });
    }
    async addStatementTypeConfig(input) {
        await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'add a strategy statement type');
        const created = await this.prisma.strategyStatementTypeConfig.create({
            data: {
                code: input.code,
                label: input.label,
                description: input.description,
                allowsMultipleActive: input.allowsMultipleActive ?? false,
                sortOrder: input.sortOrder ?? 0,
            },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'CREATE',
            entityType: 'strategy_statement_type_config',
            entityId: created.code,
            after: { label: input.label, allowsMultipleActive: created.allowsMultipleActive },
        });
        return created;
    }
    async updatePillarGovernance(input) {
        await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'update pillar governance text');
        const updated = await this.prisma.strategicPillar.update({
            where: { code: input.pillarCode },
            data: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'strategic_pillar',
            entityId: input.pillarCode,
            after: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
        });
        return updated;
    }
    async updateObjectiveGovernance(input) {
        await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'update objective governance text');
        const updated = await this.prisma.strategicObjective.update({
            where: { code: input.objectiveCode },
            data: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'strategic_objective',
            entityId: input.objectiveCode,
            after: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
        });
        return updated;
    }
    async proposePillar(input) {
        await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a new strategic pillar');
        const created = await this.prisma.strategicPillar.create({
            data: {
                code: input.code,
                name: input.name,
                description: input.description,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL',
                entityType: 'strategic_pillar',
                entityId: created.code,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'strategic_pillar',
                entityId: created.code,
                after: { workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL', reason: err.message },
            });
            await this.prisma.strategicPillar.delete({ where: { code: created.code } });
            throw err;
        }
        return this.prisma.strategicPillar.update({ where: { code: created.code }, data: { workflowInstanceId: instance.id } });
    }
    async approvePillar(input) {
        if (!input.boardResolutionRef) {
            throw new strategy_layer_types_1.StrategyLayerError('A boardResolutionRef is required to approve a strategic pillar (invariant 51c2, mirrors 28c).');
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const pillar = await this.prisma.strategicPillar.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const activated = await this.prisma.strategicPillar.update({
            where: { code: pillar.code },
            data: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef, approvedByUserId: input.approverUserId },
        });
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'strategic_pillar',
            entityId: pillar.code,
            after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
        });
        return activated;
    }
    async listPendingPillars() {
        return this.prisma.strategicPillar.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async proposeObjective(input) {
        await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a new strategic objective');
        const pillar = await this.prisma.strategicPillar.findUnique({ where: { code: input.pillarCode } });
        if (!pillar) {
            throw new strategy_layer_types_1.StrategyLayerError(`Pillar ${input.pillarCode} does not exist -- propose it first.`);
        }
        const created = await this.prisma.strategicObjective.create({
            data: {
                code: input.code,
                name: input.name,
                explanation: input.explanation,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        await this.prisma.pillarObjectiveMap.create({ data: { pillarCode: input.pillarCode, objectiveCode: created.code } });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL',
                entityType: 'strategic_objective',
                entityId: created.code,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'strategic_objective',
                entityId: created.code,
                after: { workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL', reason: err.message },
            });
            await this.prisma.pillarObjectiveMap.delete({ where: { pillarCode_objectiveCode: { pillarCode: input.pillarCode, objectiveCode: created.code } } });
            await this.prisma.strategicObjective.delete({ where: { code: created.code } });
            throw err;
        }
        return this.prisma.strategicObjective.update({ where: { code: created.code }, data: { workflowInstanceId: instance.id } });
    }
    async approveObjective(input) {
        if (!input.boardResolutionRef) {
            throw new strategy_layer_types_1.StrategyLayerError('A boardResolutionRef is required to approve a strategic objective (invariant 51c2, mirrors 28c).');
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const objective = await this.prisma.strategicObjective.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const activated = await this.prisma.strategicObjective.update({
            where: { code: objective.code },
            data: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef, approvedByUserId: input.approverUserId },
        });
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'strategic_objective',
            entityId: objective.code,
            after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
        });
        return activated;
    }
    async listPendingObjectives() {
        return this.prisma.strategicObjective.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async mapKraToObjective(input) {
        await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'map a KRA to a strategic objective');
        const [kra, objective] = await Promise.all([
            this.prisma.enterpriseKra.findUnique({ where: { code: input.kraCode } }),
            this.prisma.strategicObjective.findUnique({ where: { code: input.objectiveCode } }),
        ]);
        if (!kra)
            throw new strategy_layer_types_1.StrategyLayerError(`KRA ${input.kraCode} does not exist.`);
        if (!objective)
            throw new strategy_layer_types_1.StrategyLayerError(`Objective ${input.objectiveCode} does not exist.`);
        const created = await this.prisma.kraObjectiveMap.create({ data: { kraCode: input.kraCode, objectiveCode: input.objectiveCode } });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'CREATE',
            entityType: 'kra_objective_map',
            entityId: `${input.kraCode}:${input.objectiveCode}`,
            after: { kraCode: input.kraCode, objectiveCode: input.objectiveCode },
        });
        return created;
    }
    async unmapKraFromObjective(kraCode, objectiveCode, actorUserId) {
        await this.assertCapability(actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'remove a KRA<->objective mapping');
        await this.prisma.kraObjectiveMap.delete({ where: { kraCode_objectiveCode: { kraCode, objectiveCode } } });
        await this.audit.record({
            actorUserId,
            action: 'DELETE',
            entityType: 'kra_objective_map',
            entityId: `${kraCode}:${objectiveCode}`,
            after: { removed: true },
        });
    }
    async listKraObjectiveMap() {
        return this.prisma.kraObjectiveMap.findMany({ include: { kra: true, objective: true } });
    }
    async publish(input) {
        await this.assertCapability(input.publishedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'publish the strategy layer to staff');
        const created = await this.prisma.strategyPublication.create({
            data: { summary: input.summary, publishedByUserId: input.publishedByUserId },
        });
        await this.audit.record({
            actorUserId: input.publishedByUserId,
            action: 'CREATE',
            entityType: 'strategy_publication',
            entityId: created.id,
            after: { summary: input.summary },
        });
        return created;
    }
    async acknowledge(publicationId, appUserId) {
        return this.prisma.strategyAcknowledgment.upsert({
            where: { publicationId_appUserId: { publicationId, appUserId } },
            create: { publicationId, appUserId },
            update: {},
        });
    }
    async getAcknowledgmentStatus() {
        const latest = await this.prisma.strategyPublication.findFirst({
            orderBy: { publishedAt: 'desc' },
            include: { acknowledgments: { include: { appUser: true } } },
        });
        if (!latest)
            return null;
        const allUsers = await this.prisma.appUser.findMany({ where: { status: 'ACTIVE' } });
        const acknowledgedIds = new Set(latest.acknowledgments.map((a) => a.appUserId));
        return {
            publicationId: latest.id,
            summary: latest.summary,
            publishedAt: latest.publishedAt,
            acknowledgedCount: latest.acknowledgments.length,
            totalStaff: allUsers.length,
            outstanding: allUsers.filter((u) => !acknowledgedIds.has(u.id)).map((u) => ({ id: u.id, displayName: u.displayName })),
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'strategy_layer_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new strategy_layer_types_1.StrategyLayerError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.StrategyLayerService = StrategyLayerService;
exports.StrategyLayerService = StrategyLayerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        delegation_service_1.DelegationService])
], StrategyLayerService);
//# sourceMappingURL=strategy-layer.service.js.map