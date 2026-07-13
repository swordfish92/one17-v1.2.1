import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { ConfirmRetentionScheduleEntryInput } from './data-protection.types';
export declare class RetentionScheduleService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    listAll(): Promise<{
        id: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        description: string | null;
        confirmedByUserId: string | null;
        dataClass: string;
        retentionPeriodMonths: number | null;
        statutoryBasis: string | null;
        disposalTreatment: string | null;
        confirmedAt: Date | null;
    }[]>;
    confirm(input: ConfirmRetentionScheduleEntryInput): Promise<{
        id: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        description: string | null;
        confirmedByUserId: string | null;
        dataClass: string;
        retentionPeriodMonths: number | null;
        statutoryBasis: string | null;
        disposalTreatment: string | null;
        confirmedAt: Date | null;
    }>;
}
