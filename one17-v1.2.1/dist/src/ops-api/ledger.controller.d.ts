import type { AuthenticatedUser } from '../auth/auth.types';
import { LedgerService } from '../ledger/ledger.service';
import { ParameterService } from '../parameters/parameters.service';
import { CreateJournalEntryDto, RequestJournalPostingDto, CreateLedgerEntityDto, LoadChartOfAccountsDto, CreateTxnDto } from './ops-api.types';
export declare class LedgerController {
    private readonly ledger;
    private readonly parameters;
    constructor(ledger: LedgerService, parameters: ParameterService);
    listEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    listProducts(): Promise<{
        status: import("../../generated/prisma/enums").ProductStatus;
        createdAt: Date;
        code: string;
        name: string;
        engineType: import("../../generated/prisma/enums").ProductEngineType;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
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
    listJournalEntries(ledgerEntityCode?: string): Promise<({
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
    createJournalEntry(dto: CreateJournalEntryDto, user: AuthenticatedUser): Promise<{
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
    requestPosting(dto: RequestJournalPostingDto, user: AuthenticatedUser): Promise<{
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
    createEntity(dto: CreateLedgerEntityDto, user: AuthenticatedUser): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }>;
    loadChartOfAccounts(dto: LoadChartOfAccountsDto, user: AuthenticatedUser): Promise<{
        id: string;
        isActive: boolean;
        accountName: string;
        accountType: import("../../generated/prisma/enums").AccountType;
        ledgerEntityCode: string;
        accountCode: string;
        aaoifiRef: string;
        ifrsRef: string;
    }[]>;
    listTxns(investorId?: string, productAccountId?: string): Promise<({
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
    createTxn(dto: CreateTxnDto, user: AuthenticatedUser): Promise<{
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
}
