export interface ProposeRiskAppetiteMatrixVersionInput {
    proposedByUserId: string;
    cloneFromVersionId?: string;
}
export interface UpdateCategoryThresholdsInput {
    matrixVersionId: string;
    sortOrder: number;
    greenThreshold?: number;
    amberThreshold?: number;
    redThreshold?: number;
    actorUserId: string;
}
export interface ApproveRiskAppetiteMatrixVersionInput {
    workflowInstanceId: string;
    approverUserId: string;
    boardResolutionRef: string;
}
export type ActiveRiskAppetiteMatrixResult = {
    status: 'AWAITING_APPROVED_MATRIX';
} | {
    status: 'ACTIVE';
    version: number;
    effectiveFrom: Date | null;
    categories: {
        riskCategory: string;
        appetiteStatement: string | null;
        direction: string;
        isZeroTolerance: boolean;
        greenThreshold: string | null;
        amberThreshold: string | null;
        redThreshold: string | null;
    }[];
};
export interface ApproveRiskRegisterEntryInput {
    id: string;
    approverUserId: string;
    boardResolutionRef?: string;
}
export declare class RiskLifecycleError extends Error {
    constructor(message: string);
}
