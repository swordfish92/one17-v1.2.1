export interface IngestReplayCsvInput {
    sourceCode: string;
    fileName: string;
    csvContent: string;
    skipLeadingLines: number;
    uploadedByUserId: string;
}
export interface ReconciliationCounts {
    sourceCode: string;
    totalRows: number;
    detail: string;
}
export declare class ReplayError extends Error {
    constructor(message: string);
}
