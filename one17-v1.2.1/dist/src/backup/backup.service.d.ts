import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { ReportBackupRunDto } from './backup.types';
export declare class BackupService {
    private readonly prisma;
    private readonly delegation;
    constructor(prisma: PrismaService, delegation: DelegationService);
    recordRun(dto: ReportBackupRunDto): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BackupRunStatus;
        completedAt: Date;
        startedAt: Date;
        errorMessage: string | null;
        dbName: string;
        dumpSizeBytes: bigint | null;
        offMachineCopyOk: boolean | null;
        reportedAt: Date;
    }>;
    listRecentForUser(userId: string, limit?: number): Promise<{
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
