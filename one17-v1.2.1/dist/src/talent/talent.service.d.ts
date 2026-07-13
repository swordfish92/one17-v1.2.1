import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { CreateWelfareSchemeInput, CreateRewardTypeInput, RecommendTalentInput } from './talent.types';
export declare class TalentService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    createWelfareScheme(input: CreateWelfareSchemeInput): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
    }>;
    listWelfareSchemes(): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
    }[]>;
    createRewardType(input: CreateRewardTypeInput): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
    }>;
    listRewardTypes(): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
    }[]>;
    recommendTalent(input: RecommendTalentInput): Promise<{
        recommendation: {
            id: string;
            status: import("../../generated/prisma/enums").TalentRecommendationStatus;
            createdAt: Date;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            employeeId: string;
            appraisalCycleId: string | null;
            recommendationType: import("../../generated/prisma/enums").TalentRecommendationType;
            welfareSchemeId: string | null;
            rewardTypeId: string | null;
            justification: string;
            recommendedByUserId: string;
        };
        workflowInstance: any;
    }>;
    approveRecommendation(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    } | {
        id: string;
        status: import("../../generated/prisma/enums").TalentRecommendationStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        employeeId: string;
        appraisalCycleId: string | null;
        recommendationType: import("../../generated/prisma/enums").TalentRecommendationType;
        welfareSchemeId: string | null;
        rewardTypeId: string | null;
        justification: string;
        recommendedByUserId: string;
    }>;
    rejectRecommendation(workflowInstanceId: string, approverUserId: string, notes?: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    listRecommendations(): Promise<({
        employee: {
            surname: string;
            firstName: string;
        };
        welfareScheme: {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            createdByUserId: string;
            isActive: boolean;
        } | null;
        rewardType: {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            createdByUserId: string;
            isActive: boolean;
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums").TalentRecommendationStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        employeeId: string;
        appraisalCycleId: string | null;
        recommendationType: import("../../generated/prisma/enums").TalentRecommendationType;
        welfareSchemeId: string | null;
        rewardTypeId: string | null;
        justification: string;
        recommendedByUserId: string;
    })[]>;
    private assertCapability;
}
