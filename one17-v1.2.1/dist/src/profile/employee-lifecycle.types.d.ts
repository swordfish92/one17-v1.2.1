export declare class EmployeeLifecycleError extends Error {
    constructor(message: string);
}
export interface RequestOnboardingInput {
    surname: string;
    firstName: string;
    middleName?: string;
    positionId: string;
    orgUnitCode: string;
    reportsToId?: string;
    hireDate: Date;
    proposedPerformanceIncentivePct?: number;
    linkedUserEmail?: string;
    requestedByUserId: string;
}
