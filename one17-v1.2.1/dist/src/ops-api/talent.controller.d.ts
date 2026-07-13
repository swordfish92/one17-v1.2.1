import type { AuthenticatedUser } from '../auth/auth.types';
import { TalentService } from '../talent/talent.service';
import { CreateWelfareSchemeDto, CreateRewardTypeDto, RecommendTalentDto } from './ops-api.types';
export declare class TalentController {
    private readonly talent;
    constructor(talent: TalentService);
    listWelfareSchemes(): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
    }[]>;
    createWelfareScheme(dto: CreateWelfareSchemeDto, user: AuthenticatedUser): Promise<{
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
    createRewardType(dto: CreateRewardTypeDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        createdByUserId: string;
        isActive: boolean;
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
    recommendTalent(dto: RecommendTalentDto, user: AuthenticatedUser): Promise<{
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
}
