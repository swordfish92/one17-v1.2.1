// Invariant 33(f): the ten AI capabilities. AI_ANSWER_RBAC is granted
// alongside any of the other nine (never standalone) — see seed.ts.
export type AiCapabilityCode =
  | 'AI_CHAT'
  | 'AI_SUMMARIZE'
  | 'AI_REPORT_DRAFT'
  | 'AI_KPI_EXPLAIN'
  | 'AI_RISK_INTERPRET'
  | 'AI_SHARIAH_ASSIST'
  | 'AI_PERF_COMMENTARY'
  | 'AI_WORKFLOW_SUGGEST'
  | 'AI_AUDITLOG_QUERY'
  | 'AI_ANSWER_RBAC';

export interface AiInvokeContext {
  // Gate 3 (WORKFLOW_STEP): the workflow instance the caller claims to be
  // acting inside — checked against ai_capability_context_rule's
  // requiredWorkflowTypeCode AND that the instance is still PENDING_APPROVAL
  // (a genuinely live step, not a closed/unrelated one).
  workflowInstanceId?: string;
  // Gate 3 (REPORT_WORKSPACE): the stakeholder_report_run the caller claims
  // to be drafting inside — checked that it exists and is still DRAFT.
  stakeholderReportRunId?: string;
  // Gate 3 (ORG_UNIT_SCOPED): the org unit the caller claims this request
  // is scoped to.
  orgUnitCode?: string;
}

export interface AiInvokeInput {
  askingUserId: string;
  capabilityCode: AiCapabilityCode;
  promptText: string;
  // The data_point_catalog codes the caller wants included in the assembled
  // context — gate 4 (data scope) filters this down to only what the
  // asking user's OWN capabilities already permit, never assembling a
  // context the user themselves could not see (invariant 33a).
  requestedDataPointCodes: string[];
  context?: AiInvokeContext;
  orgUnitCode: string; // the token-budget cost-centre this request charges
}

export interface AiInvokeResult {
  outcome: 'ALLOWED' | 'REFUSED';
  refusalReason?: string;
  responseText?: string;
  includedDataPointCodes: string[];
  excludedDataPointCodes: string[];
  cacheHit: boolean;
  interactionLogId: string;
}

export class AiGatewayError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AiGatewayError';
  }
}
