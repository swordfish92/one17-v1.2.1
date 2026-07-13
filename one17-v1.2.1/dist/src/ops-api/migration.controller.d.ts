import type { AuthenticatedUser } from '../auth/auth.types';
import { MigrationService } from '../migration/migration.service';
import { StageMigrationCsvDto } from './ops-api.types';
export declare class MigrationController {
    private readonly migration;
    constructor(migration: MigrationService);
    listBatches(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MigrationBatchStatus;
        createdAt: Date;
        tplCode: string;
        fileName: string;
        totalRows: number;
        validRows: number | null;
        rejectedRows: number | null;
        promotedRows: number | null;
    }[]>;
    stageCsv(dto: StageMigrationCsvDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MigrationBatchStatus;
        createdAt: Date;
        uploadedByUserId: string;
        tplCode: string;
        fileName: string;
        totalRows: number;
        validRows: number | null;
        rejectedRows: number | null;
        promotedRows: number | null;
        validatedAt: Date | null;
        promotedAt: Date | null;
    }>;
    validateBatch(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MigrationBatchStatus;
        createdAt: Date;
        uploadedByUserId: string;
        tplCode: string;
        fileName: string;
        totalRows: number;
        validRows: number | null;
        rejectedRows: number | null;
        promotedRows: number | null;
        validatedAt: Date | null;
        promotedAt: Date | null;
    }>;
    promoteBatch(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MigrationBatchStatus;
        createdAt: Date;
        uploadedByUserId: string;
        tplCode: string;
        fileName: string;
        totalRows: number;
        validRows: number | null;
        rejectedRows: number | null;
        promotedRows: number | null;
        validatedAt: Date | null;
        promotedAt: Date | null;
    }>;
    validationReport(id: string): Promise<{
        report: string;
    }>;
    reconciliationGates(): Promise<import("../migration/migration.types").ReconciliationGateResult[]>;
}
