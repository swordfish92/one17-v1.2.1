export declare class ActivationConsoleError extends Error {
    constructor(message: string);
}
export type ActivationStepStatusColor = 'GREEN' | 'AMBER' | 'RED';
export declare const ACTIVATION_STEP_CODES: readonly ["IDENTITY", "PEOPLE", "BOOKS", "TAXES", "PRODUCTS", "RISK", "RAILS", "DATA", "PROOF"];
export type ActivationStepCode = (typeof ACTIVATION_STEP_CODES)[number];
export interface ActivationSubStepStatus {
    code: string;
    label: string;
    status: ActivationStepStatusColor;
    detail: string;
    deepLink: string;
}
export interface ActivationStepStatus {
    code: ActivationStepCode;
    label: string;
    required: boolean;
    skippable: boolean;
    skipped: boolean;
    skippedAt: string | null;
    skippedByUserId: string | null;
    status: ActivationStepStatusColor;
    detail: string;
    deepLink: string;
    subSteps: ActivationSubStepStatus[];
}
export interface ActivationConsoleStatus {
    steps: ActivationStepStatus[];
    readinessScorePct: number;
    canActivate: boolean;
    activatedAt: string | null;
    activatedByUserId: string | null;
}
export interface AssignSubStepTaskInput {
    stepCode: string;
    subStepCode: string;
    assigneeEmployeeId: string;
    dueAt?: Date;
    assignedByUserId: string;
}
export interface ProofBatteryResult {
    bootCheck: ActivationSubStepStatus;
    transactionRoundTrip: ActivationSubStepStatus;
    reconciliationStatus: ActivationSubStepStatus;
    readinessScorePct: ActivationSubStepStatus;
}
