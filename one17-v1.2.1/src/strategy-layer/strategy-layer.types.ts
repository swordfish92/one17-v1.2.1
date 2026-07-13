// Invariant 19 (SaaS trajectory): statementTypeCode is a free string
// resolved against StrategyStatementTypeConfig at runtime, not a fixed TS
// union — a new type is a config row (see addStatementTypeConfig), never a
// code change.
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

// Invariant 51(c2) (CHECK12): governed pillar/objective CREATION -- the gap
// updatePillarGovernance/updateObjectiveGovernance never closed (those are
// bare text edits on an already-existing row, no workflow). proposePillar/
// proposeObjective are the first governed path to CREATE one.
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

// An objective is always defined under a pillar -- pillarCode creates the
// PillarObjectiveMap join row atomically alongside the objective itself,
// rather than a separate mapping screen (unlike KRA<->objective, which IS
// its own many-to-many exercise after the fact -- see mapKraToObjective).
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

export class StrategyLayerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StrategyLayerError';
  }
}
