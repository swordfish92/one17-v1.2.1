export declare class OrgStructureError extends Error {
    constructor(message: string);
}
export interface CreateOrgUnitInput {
    code: string;
    name: string;
    secondaryReportingLine?: string;
    createdByUserId: string;
}
export interface CreatePositionInput {
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdByUserId: string;
}
