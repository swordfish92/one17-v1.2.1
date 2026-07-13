export declare class PmsError extends Error {
    constructor(message: string);
}
export interface ProposeKpiDefinitionInput {
    kraCode: string;
    tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
    kpiText: string;
    kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
    objectiveText?: string;
    exampleActivity?: string;
    measurementBasis?: 'AUTO' | 'MANUAL' | 'HYBRID';
    frequency?: string;
    proposedByUserId: string;
}
export interface ApproveKpiDefinitionInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface ProposeWeightMatrixVersionInput {
    orgUnitCode: string;
    tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
    weights: {
        kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
        weightPct: number;
    }[];
    proposedByUserId: string;
}
export interface ApproveWeightMatrixVersionInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface ProposeEmolumentComponentInput {
    cadre: string;
    notch: number;
    component: string;
    componentType: 'SALARY' | 'ALLOWANCE' | 'COST_REFUND';
    annualAmountKobo: bigint;
    taxable: boolean;
    effectiveFrom: Date;
    proposedByUserId: string;
}
export declare const INCENTIVE_BANDS: {
    minScorePct: number;
    payoutPct: number;
    sortOrder: number;
}[];
export declare const GATE_SEVERITY_CONFIG: {
    severity: string;
    outcome: 'FULL_RELEASE' | 'CAPPED' | 'DEFERRED' | 'SUSPENDED';
    cappedPct?: number;
}[];
export declare const TAX_RULE_CONFIG_V1: {
    version: number;
    consolidatedReliefFlatKobo: bigint;
    consolidatedReliefPctOfGross: number;
    bands: ({
        fromKobo: string;
        toKobo: string;
        ratePct: number;
    } | {
        fromKobo: string;
        toKobo: null;
        ratePct: number;
    })[];
    pensionEmployeePct: number;
    nhfPct: number;
};
