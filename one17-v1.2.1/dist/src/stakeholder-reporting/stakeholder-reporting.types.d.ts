export interface GenerateStakeholderReportInput {
    department: string;
    reportType: string;
    periodStart: Date;
    periodEnd: Date;
    figures: Record<string, unknown>;
    audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR' | 'BOARD';
    generatedByUserId: string;
}
export interface DistributeStakeholderReportInput {
    stakeholderReportRunId: string;
    audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR' | 'BOARD';
    recipientDescription: string;
    distributedByUserId: string;
    signOffByUserId?: string;
}
export declare class StakeholderReportingError extends Error {
    constructor(message: string);
}
