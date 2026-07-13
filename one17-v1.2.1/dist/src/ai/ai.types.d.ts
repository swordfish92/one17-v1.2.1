export type AiCapabilityCode = 'AI_CHAT' | 'AI_SUMMARIZE' | 'AI_REPORT_DRAFT' | 'AI_KPI_EXPLAIN' | 'AI_RISK_INTERPRET' | 'AI_SHARIAH_ASSIST' | 'AI_PERF_COMMENTARY' | 'AI_WORKFLOW_SUGGEST' | 'AI_AUDITLOG_QUERY' | 'AI_ANSWER_RBAC';
export interface AiInvokeContext {
    workflowInstanceId?: string;
    stakeholderReportRunId?: string;
    orgUnitCode?: string;
}
export interface AiInvokeInput {
    askingUserId: string;
    capabilityCode: AiCapabilityCode;
    promptText: string;
    requestedDataPointCodes: string[];
    context?: AiInvokeContext;
    orgUnitCode: string;
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
export declare class AiGatewayError extends Error {
    constructor(message: string);
}
