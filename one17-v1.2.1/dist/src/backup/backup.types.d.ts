export declare class ReportBackupRunDto {
    dbName: string;
    startedAt: string;
    completedAt: string;
    status: 'SUCCEEDED' | 'FAILED';
    dumpSizeBytes?: number;
    offMachineCopyOk?: boolean;
    errorMessage?: string;
}
