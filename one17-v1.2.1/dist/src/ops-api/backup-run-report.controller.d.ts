import { BackupService } from '../backup/backup.service';
import { ReportBackupRunDto } from '../backup/backup.types';
export declare class BackupRunReportController {
    private readonly backup;
    constructor(backup: BackupService);
    report(dto: ReportBackupRunDto): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BackupRunStatus;
    }>;
}
