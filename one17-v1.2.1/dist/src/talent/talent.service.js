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
exports.TalentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const talent_types_1 = require("./talent.types");
let TalentService = class TalentService {
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
    async createWelfareScheme(input) {
        await this.assertCapability(input.createdByUserId, 'TALENT_MANAGEMENT', 'INITIATE', 'create a welfare scheme');
        const scheme = await this.prisma.welfareScheme.create({
            data: { name: input.name, description: input.description, createdByUserId: input.createdByUserId },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'welfare_scheme', entityId: scheme.id, after: { name: input.name } });
        return scheme;
    }
    async listWelfareSchemes() {
        return this.prisma.welfareScheme.findMany({ orderBy: { name: 'asc' } });
    }
    async createRewardType(input) {
        await this.assertCapability(input.createdByUserId, 'TALENT_MANAGEMENT', 'INITIATE', 'create a reward type');
        const rewardType = await this.prisma.rewardType.create({
            data: { name: input.name, description: input.description, createdByUserId: input.createdByUserId },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'reward_type', entityId: rewardType.id, after: { name: input.name } });
        return rewardType;
    }
    async listRewardTypes() {
        return this.prisma.rewardType.findMany({ orderBy: { name: 'asc' } });
    }
    async recommendTalent(input) {
        await this.assertCapability(input.recommendedByUserId, 'TALENT_MANAGEMENT', 'INITIATE', 'recommend a welfare/reward action for an employee');
        if (input.recommendationType === 'WELFARE' && !input.welfareSchemeId) {
            throw new talent_types_1.TalentError('A WELFARE recommendation requires a welfareSchemeId.');
        }
        if (input.recommendationType === 'REWARD' && !input.rewardTypeId) {
            throw new talent_types_1.TalentError('A REWARD recommendation requires a rewardTypeId.');
        }
        const recommendation = await this.prisma.talentRecommendation.create({
            data: {
                employeeId: input.employeeId, recommendationType: input.recommendationType,
                welfareSchemeId: input.welfareSchemeId, rewardTypeId: input.rewardTypeId, appraisalCycleId: input.appraisalCycleId,
                justification: input.justification, recommendedByUserId: input.recommendedByUserId, status: 'PENDING',
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'TALENT_RECOMMENDATION_APPROVAL',
                entityType: 'talent_recommendation',
                entityId: recommendation.id,
                initiatedByUserId: input.recommendedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.recommendedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'talent_recommendation',
                entityId: recommendation.id,
                after: { workflowTypeCode: 'TALENT_RECOMMENDATION_APPROVAL', reason: err.message },
            });
            await this.prisma.talentRecommendation.delete({ where: { id: recommendation.id } });
            throw err;
        }
        const updated = await this.prisma.talentRecommendation.update({ where: { id: recommendation.id }, data: { workflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId: input.recommendedByUserId, action: 'CREATE', entityType: 'talent_recommendation', entityId: recommendation.id, after: { employeeId: input.employeeId, recommendationType: input.recommendationType } });
        return { recommendation: updated, workflowInstance };
    }
    async approveRecommendation(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            const recommendation = await this.prisma.talentRecommendation.update({
                where: { workflowInstanceId }, data: { status: 'APPROVED', approvedByUserId: approverUserId },
            });
            await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'talent_recommendation', entityId: recommendation.id, after: { status: 'APPROVED' } });
            return recommendation;
        }
        return updated;
    }
    async rejectRecommendation(workflowInstanceId, approverUserId, notes) {
        const updated = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        await this.prisma.talentRecommendation.update({ where: { workflowInstanceId }, data: { status: 'REJECTED' } });
        return updated;
    }
    async listRecommendations() {
        return this.prisma.talentRecommendation.findMany({
            orderBy: { createdAt: 'desc' },
            include: { employee: { select: { surname: true, firstName: true } }, welfareScheme: true, rewardType: true },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'talent_activity', entityId: activity, after: { functionCode, level } });
            throw new talent_types_1.TalentError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.TalentService = TalentService;
exports.TalentService = TalentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], TalentService);
//# sourceMappingURL=talent.service.js.map