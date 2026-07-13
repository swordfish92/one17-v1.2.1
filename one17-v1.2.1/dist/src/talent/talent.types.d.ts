export declare class TalentError extends Error {
    constructor(message: string);
}
export interface CreateWelfareSchemeInput {
    name: string;
    description?: string;
    createdByUserId: string;
}
export interface CreateRewardTypeInput {
    name: string;
    description?: string;
    createdByUserId: string;
}
export interface RecommendTalentInput {
    employeeId: string;
    recommendationType: 'WELFARE' | 'REWARD';
    welfareSchemeId?: string;
    rewardTypeId?: string;
    appraisalCycleId?: string;
    justification: string;
    recommendedByUserId: string;
}
