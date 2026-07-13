import type { AuthenticatedUser } from '../auth/auth.types';
import { BackupService } from '../backup/backup.service';
export declare class BackupController {
    private readonly backup;
    constructor(backup: BackupService);
    listRecent(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BackupRunStatus;
        completedAt: Date;
        startedAt: Date;
        errorMessage: string | null;
        dbName: string;
        dumpSizeBytes: bigint | null;
        offMachineCopyOk: boolean | null;
        reportedAt: Date;
    }[]>;
}
