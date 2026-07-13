export interface OpenPeriodInput {
    ledgerEntityCode: string;
    periodStart: Date;
    periodEnd: Date;
    openedByUserId: string;
}
export interface RequestPeriodCloseInput {
    periodId: string;
    initiatedByUserId: string;
}
export interface ApprovePeriodCloseInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export declare class PeriodLifecycleError extends Error {
    constructor(message: string);
}
