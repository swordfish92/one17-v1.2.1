import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { CreateWelfareSchemeInput, CreateRewardTypeInput, RecommendTalentInput, TalentError } from './talent.types';

// Invariant 37(e), task #153: Talent Management + Reward & Welfare
// spec-lite. Welfare schemes and reward types are governed CONFIG catalogs
// (invariant 10) — plain INITIATE-gated CRUD, not maker!=checker versioned,
// since the catalog itself carries no monetary commitment. A
// TalentRecommendation (linking an employee, optionally an appraisal
// cycle's outcome, to a specific scheme/reward) is where the actual
// governance decision lives, and THAT is what carries the approval
// workflow (HR recommends -> MD_CEO approves), same propose/approve shape
// as PMS_SCORECARD_OVERRIDE.
@Injectable()
export class TalentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async createWelfareScheme(input: CreateWelfareSchemeInput) {
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

  async createRewardType(input: CreateRewardTypeInput) {
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

  async recommendTalent(input: RecommendTalentInput) {
    await this.assertCapability(input.recommendedByUserId, 'TALENT_MANAGEMENT', 'INITIATE', 'recommend a welfare/reward action for an employee');
    if (input.recommendationType === 'WELFARE' && !input.welfareSchemeId) {
      throw new TalentError('A WELFARE recommendation requires a welfareSchemeId.');
    }
    if (input.recommendationType === 'REWARD' && !input.rewardTypeId) {
      throw new TalentError('A REWARD recommendation requires a rewardTypeId.');
    }

    const recommendation = await this.prisma.talentRecommendation.create({
      data: {
        employeeId: input.employeeId, recommendationType: input.recommendationType,
        welfareSchemeId: input.welfareSchemeId, rewardTypeId: input.rewardTypeId, appraisalCycleId: input.appraisalCycleId,
        justification: input.justification, recommendedByUserId: input.recommendedByUserId, status: 'PENDING',
      },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'TALENT_RECOMMENDATION_APPROVAL',
        entityType: 'talent_recommendation',
        entityId: recommendation.id,
        initiatedByUserId: input.recommendedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.recommendedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'talent_recommendation',
        entityId: recommendation.id,
        after: { workflowTypeCode: 'TALENT_RECOMMENDATION_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.talentRecommendation.delete({ where: { id: recommendation.id } });
      throw err;
    }
    const updated = await this.prisma.talentRecommendation.update({ where: { id: recommendation.id }, data: { workflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId: input.recommendedByUserId, action: 'CREATE', entityType: 'talent_recommendation', entityId: recommendation.id, after: { employeeId: input.employeeId, recommendationType: input.recommendationType } });
    return { recommendation: updated, workflowInstance };
  }

  async approveRecommendation(workflowInstanceId: string, approverUserId: string) {
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

  async rejectRecommendation(workflowInstanceId: string, approverUserId: string, notes?: string) {
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

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'talent_activity', entityId: activity, after: { functionCode, level } });
      throw new TalentError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
