import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { IngestReplayCsvInput, ReconciliationCounts } from './replay.types';
export declare class ReplayService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    ingestCsv(input: IngestReplayCsvInput): Promise<{
        id: string;
        createdAt: Date;
        fileName: string;
        totalRows: number;
        sourceCode: string;
        ingestedByUserId: string;
    }>;
    listBatches(): Promise<{
        id: string;
        createdAt: Date;
        fileName: string;
        totalRows: number;
        sourceCode: string;
    }[]>;
    reconciliationCounts(sourceCode: string): Promise<ReconciliationCounts>;
    private assertCapability;
}
