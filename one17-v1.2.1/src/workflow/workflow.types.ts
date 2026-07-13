// Thrown by WorkflowEngineService when SRS §3.3's maker≠checker rule, or a
// missing capability/approval-limit, blocks a step. Distinct from RBAC's
// SodConflictError since this is about one transaction instance, not a
// standing role combination.
export class WorkflowAuthorizationError extends Error {
  constructor(
    message: string,
    public readonly workflowInstanceId: string,
  ) {
    super(message);
    this.name = 'WorkflowAuthorizationError';
  }
}

export interface InitiateWorkflowInput {
  workflowTypeCode: string;
  entityType: string;
  entityId: string;
  initiatedByUserId: string;
  amountKobo?: bigint;
  scenario?: string;
}
