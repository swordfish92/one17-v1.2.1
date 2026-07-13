export declare class WorkflowAuthorizationError extends Error {
    readonly workflowInstanceId: string;
    constructor(message: string, workflowInstanceId: string);
}
export interface InitiateWorkflowInput {
    workflowTypeCode: string;
    entityType: string;
    entityId: string;
    initiatedByUserId: string;
    amountKobo?: bigint;
    scenario?: string;
}
