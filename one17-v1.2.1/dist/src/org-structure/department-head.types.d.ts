export declare class DepartmentHeadError extends Error {
    constructor(message: string);
}
export interface ProposeDepartmentHeadInput {
    orgUnitCode: string;
    employeeId: string;
    effectiveFrom?: Date;
}
