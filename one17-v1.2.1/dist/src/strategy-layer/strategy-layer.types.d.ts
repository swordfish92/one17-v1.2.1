export interface ProposeStrategyStatementInput {
    statementTypeCode: string;
    content: string;
    explanation?: string;
    proposedByUserId: string;
}
export interface AddStatementTypeConfigInput {
    code: string;
    label: string;
    description?: string;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    actorUserId: string;
}
export interface ApproveStrategyStatementInput {
    workflowInstanceId: string;
    approverUserId: string;
    boardResolutionRef: string;
}
export interface UpdatePillarGovernanceInput {
    pillarCode: string;
    explanation?: string;
    boardResolutionRef?: string;
    actorUserId: string;
}
export interface UpdateObjectiveGovernanceInput {
    objectiveCode: string;
    explanation?: string;
    boardResolutionRef?: string;
    actorUserId: string;
}
export interface ProposePillarInput {
    code: string;
    name: string;
    description?: string;
    proposedByUserId: string;
}
export interface ApprovePillarInput {
    workflowInstanceId: string;
    approverUserId: string;
    boardResolutionRef: string;
}
export interface ProposeObjectiveInput {
    code: string;
    name: string;
    pillarCode: string;
    explanation?: string;
    proposedByUserId: string;
}
export interface ApproveObjectiveInput {
    workflowInstanceId: string;
    approverUserId: string;
    boardResolutionRef: string;
}
export interface MapKraToObjectiveInput {
    kraCode: string;
    objectiveCode: string;
    actorUserId: string;
}
export interface PublishStrategyInput {
    summary: string;
    publishedByUserId: string;
}
export declare class StrategyLayerError extends Error {
    constructor(message: string);
}
