import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EventJournalService } from '../event-journal/event-journal.service';
export interface RequestWriteOffInput {
    counterpartyId: string;
    writeOffAmountKobo: bigint;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    requestedByUserId: string;
}
export declare class CounterpartyWriteOffService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly eventJournal;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, eventJournal: EventJournalService);
    private assertCapability;
    requestWriteOff(input: RequestWriteOffInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CounterpartyWriteOffStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        ledgerEntityCode: string;
        counterpartyId: string;
        writeOffAmountKobo: bigint;
        investmentAccountCode: string;
        postedJournalEntryId: string | null;
    }>;
    decideWriteOff(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CounterpartyWriteOffStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        ledgerEntityCode: string;
        counterpartyId: string;
        writeOffAmountKobo: bigint;
        investmentAccountCode: string;
        postedJournalEntryId: string | null;
    }>;
    listForCounterparty(counterpartyId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CounterpartyWriteOffStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        ledgerEntityCode: string;
        counterpartyId: string;
        writeOffAmountKobo: bigint;
        investmentAccountCode: string;
        postedJournalEntryId: string | null;
    }[]>;
    getTrail(requestId: string): Promise<{
        request: {
            id: string;
            status: import("../../generated/prisma/enums").CounterpartyWriteOffStatus;
            createdAt: Date;
            reason: string;
            workflowInstanceId: string | null;
            requestedByUserId: string;
            rejectionNotes: string | null;
            ledgerEntityCode: string;
            counterpartyId: string;
            writeOffAmountKobo: bigint;
            investmentAccountCode: string;
            postedJournalEntryId: string | null;
        };
        workflowTrail: {
            workflowInstanceId: string;
            workflowTypeCode: string;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            scenario: string | null;
            amountKobo: bigint | null;
            initiatedBy: {
                id: string;
                email: string;
                displayName: string;
            };
            createdAt: Date;
            updatedAt: Date;
            steps: {
                stepOrder: number;
                requiredFunctionCode: string;
                requiredFunctionDescription: string | null;
                description: string | null;
                decision: import("../../generated/prisma/enums").ApprovalDecision | null;
                approver: {
                    id: string;
                    displayName: string;
                    email: string;
                } | null;
                decidedAt: Date | null;
                notes: string | null;
            }[];
        } | null;
    }>;
}
