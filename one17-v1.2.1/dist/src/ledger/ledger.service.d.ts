import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { CreateLedgerEntityInput, LoadChartOfAccountsInput, CreateJournalEntryInput, RecordCashbookEntryInput, CreateTxnInput, RequestJournalPostingInput, ApproveJournalPostingInput, CreateInterEntityMirroredJournalsInput, TrialBalanceLine } from './ledger.types';
export declare class LedgerService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    createLedgerEntity(input: CreateLedgerEntityInput): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }>;
    loadChartOfAccountsTemplate(input: LoadChartOfAccountsInput): Promise<{
        id: string;
        isActive: boolean;
        accountName: string;
        accountType: import("../../generated/prisma/enums").AccountType;
        ledgerEntityCode: string;
        accountCode: string;
        aaoifiRef: string;
        ifrsRef: string;
    }[]>;
    createJournalEntry(input: CreateJournalEntryInput): Promise<{
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
    }>;
    requestJournalPosting(input: RequestJournalPostingInput): Promise<{
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
    }>;
    approveJournalPosting(input: ApproveJournalPostingInput): Promise<{
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
    } | null>;
    createInterEntityMirroredJournals(input: CreateInterEntityMirroredJournalsInput): Promise<{
        interEntityRef: string;
        legA: {
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
        legB: {
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
    }>;
    reconcileInterEntityRef(interEntityRef: string): Promise<{
        ok: boolean;
        legCount: number;
        reason?: string;
    }>;
    listInterEntityReconciliations(ledgerEntityCode?: string): Promise<{
        ok: boolean;
        legCount: number;
        reason?: string;
        interEntityRef: string;
        description: string;
        entryDate: Date;
        legs: {
            ledgerEntityCode: string;
            journalReference: string;
        }[];
        amountKobo: string;
    }[]>;
    listFundEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    listAllLedgerEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    listChartOfAccounts(ledgerEntityCode: string): Promise<{
        id: string;
        isActive: boolean;
        accountName: string;
        accountType: import("../../generated/prisma/enums").AccountType;
        ledgerEntityCode: string;
        accountCode: string;
        aaoifiRef: string;
        ifrsRef: string;
    }[]>;
    listJournalEntries(filter?: {
        ledgerEntityCode?: string;
    }): Promise<({
        lines: ({
            account: {
                accountName: string;
                accountCode: string;
            };
        } & {
            id: string;
            description: string | null;
            journalEntryId: string;
            accountId: string;
            debitKobo: bigint;
            creditKobo: bigint;
        })[];
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
    })[]>;
    getTrialBalance(ledgerEntityCode: string, basis: 'IFRS' | 'AAOIFI'): Promise<TrialBalanceLine[]>;
    recordCashbookEntry(input: RecordCashbookEntryInput): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        ledgerEntityCode: string;
        entryDate: Date;
        bankReference: string | null;
        reconciliationStatus: import("../../generated/prisma/enums").CashbookReconciliationStatus;
        reconciledAt: Date | null;
    }>;
    listTxns(filter?: {
        investorId?: string;
        productAccountId?: string;
    }): Promise<({
        productAccount: {
            productCode: string;
            investorId: string;
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums").TxnStatus;
        createdAt: Date;
        amountKobo: bigint;
        ledgerEntityCode: string;
        counterpartyId: string | null;
        postedJournalEntryId: string | null;
        productAccountId: string | null;
        txnType: import("../../generated/prisma/enums").TxnType;
        valueDate: Date;
        unitsQty: import("@prisma/client-runtime-utils").Decimal | null;
        unitPriceKobo: bigint | null;
        makerUserId: string;
        checkerUserId: string | null;
        migrationSourceSystem: string | null;
        migrationSourceDocumentRef: string | null;
    })[]>;
    createTxn(input: CreateTxnInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TxnStatus;
        createdAt: Date;
        amountKobo: bigint;
        ledgerEntityCode: string;
        counterpartyId: string | null;
        postedJournalEntryId: string | null;
        productAccountId: string | null;
        txnType: import("../../generated/prisma/enums").TxnType;
        valueDate: Date;
        unitsQty: import("@prisma/client-runtime-utils").Decimal | null;
        unitPriceKobo: bigint | null;
        makerUserId: string;
        checkerUserId: string | null;
        migrationSourceSystem: string | null;
        migrationSourceDocumentRef: string | null;
    }>;
    private settleDueBankAccountChangeSwaps;
    private assertCapability;
}
