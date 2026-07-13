import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { GenerateEventJournalInput } from './event-journal.types';
export declare class EventJournalService {
    private readonly prisma;
    private readonly ledger;
    constructor(prisma: PrismaService, ledger: LedgerService);
    generateAndRequestPosting(input: GenerateEventJournalInput): Promise<{
        journal: {
            lines: {
                id: string;
                description: string | null;
                journalEntryId: string;
                accountId: string;
                debitKobo: bigint;
                creditKobo: bigint;
            }[];
        } & {
            id: string;
            status: import("../../generated/prisma/enums").JournalEntryStatus;
            createdAt: Date;
            description: string;
            createdByUserId: string;
            ledgerEntityCode: string;
            journalReference: string;
            entryDate: Date;
            postedAt: Date | null;
            journalClass: import("../../generated/prisma/enums").JournalClass;
            divergenceType: string | null;
            adjustmentForBasis: import("../../generated/prisma/enums").AccountingBasis | null;
            interEntityRef: string | null;
            postingWorkflowInstanceId: string | null;
        };
        workflowInstance: {
            id: string;
            entityType: string;
            entityId: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            createdAt: Date;
            workflowTypeCode: string;
            scenario: string | null;
            approvalRuleId: string;
            amountKobo: bigint | null;
            initiatedByUserId: string;
        };
    }>;
    private resolveAccountCode;
}
