import type { AuthenticatedUser } from '../auth/auth.types';
import { LedgerService } from '../ledger/ledger.service';
import { ReportingService } from '../reporting/reporting.service';
import { ParameterService } from '../parameters/parameters.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { ProductFactoryService } from '../product/product-factory.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { CreateFundProductDto, RecordFacilityFundAccountingTermsDto, ProposeMarketValueEntryDto } from './ops-api.types';
export declare class FundAccountingController {
    private readonly ledger;
    private readonly reporting;
    private readonly parameters;
    private readonly counterparty;
    private readonly productFactory;
    private readonly halalFundEngine;
    constructor(ledger: LedgerService, reporting: ReportingService, parameters: ParameterService, counterparty: CounterpartyService, productFactory: ProductFactoryService, halalFundEngine: HalalFundEngineService);
    listMarketValueEntries(ledgerEntityCode: string): Promise<({
        proposedByUser: {
            email: string;
            displayName: string;
        };
        approvedByUser: {
            email: string;
            displayName: string;
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        ledgerEntityCode: string;
        valuationDate: Date;
        marketValueKobo: bigint;
        approvedAt: Date | null;
    })[]>;
    proposeMarketValueEntry(ledgerEntityCode: string, dto: ProposeMarketValueEntryDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        ledgerEntityCode: string;
        valuationDate: Date;
        marketValueKobo: bigint;
        approvedAt: Date | null;
    }>;
    approveMarketValueEntry(entryId: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        ledgerEntityCode: string;
        valuationDate: Date;
        marketValueKobo: bigint;
        approvedAt: Date | null;
    }>;
    listReceivables(user: AuthenticatedUser): Promise<{
        amountKobo: string;
        facilityApplication: {
            requestedAmountKobo: string;
            targetedReturnPct: string | null;
            id: string;
            purpose: string;
        } | null;
        counterparty: {
            legalName: string;
        };
        id: string;
        status: import("../../generated/prisma/enums").RepaymentObligationStatus;
        createdAt: Date;
        createdByUserId: string;
        counterpartyId: string;
        paidAt: Date | null;
        facilityApplicationId: string | null;
        dueDate: Date;
        paidByUserId: string | null;
    }[]>;
    listDisbursedFacilities(user: AuthenticatedUser): Promise<{
        requestedAmountKobo: string;
        targetedReturnPct: string | null;
        counterparty: {
            legalName: string;
        };
        id: string;
        status: import("../../generated/prisma/enums").FacilityApplicationStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        counterpartyId: string;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
        purpose: string;
        termsRecordedByUserId: string | null;
        termsRecordedAt: Date | null;
    }[]>;
    recordFacilityTerms(id: string, dto: RecordFacilityFundAccountingTermsDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").FacilityApplicationStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        counterpartyId: string;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
        requestedAmountKobo: bigint;
        purpose: string;
        targetedReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
        termsRecordedByUserId: string | null;
        termsRecordedAt: Date | null;
    }>;
    listEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    getBalanceSheet(ledgerEntityCode: string, basis: "IFRS" | "AAOIFI" | undefined, user: AuthenticatedUser): Promise<{
        ledgerEntityCode: string;
        basis: "IFRS" | "AAOIFI";
        assets: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        liabilities: any[];
        equity: any[];
        totalAssetsKobo: string;
        totalLiabilitiesKobo: string;
        totalEquityKobo: string;
    }>;
    getIncomeStatement(ledgerEntityCode: string, periodStart: string, periodEnd: string, basis: "IFRS" | "AAOIFI" | undefined, user: AuthenticatedUser): Promise<{
        ledgerEntityCode: string;
        basis: "IFRS" | "AAOIFI";
        periodStart: Date;
        periodEnd: Date;
        income: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        expenses: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        totalIncomeKobo: string;
        totalExpenseKobo: string;
        netIncomeKobo: string;
    }>;
    getRecentJournals(ledgerEntityCode: string, user: AuthenticatedUser): Promise<{
        id: string;
        journalReference: string;
        entryDate: Date;
        description: string;
        lines: {
            accountCode: string;
            accountName: string;
            debitKobo: string;
            creditKobo: string;
            description: string | null;
        }[];
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
    createProduct(dto: CreateFundProductDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").ProductStatus;
        createdAt: Date;
        code: string;
        name: string;
        engineType: import("../../generated/prisma/enums").ProductEngineType;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
    }>;
    approveProductSetup(code: string, user: AuthenticatedUser): Promise<{
        status: "INITIATED" | "PENDING_APPROVAL" | "REJECTED" | "EXECUTED" | "CANCELLED";
        product: null;
        ledgerEntity: null;
    } | {
        status: "APPROVED";
        product: {
            status: import("../../generated/prisma/enums").ProductStatus;
            createdAt: Date;
            code: string;
            name: string;
            engineType: import("../../generated/prisma/enums").ProductEngineType;
            shariahApprovedAt: Date | null;
            shariahApprovalRef: string | null;
            setupWorkflowInstanceId: string | null;
        };
        ledgerEntity: {
            entityType: import("../../generated/prisma/enums").LedgerEntityType;
            status: import("../../generated/prisma/enums").LedgerEntityStatus;
            createdAt: Date;
            code: string;
            name: string;
            productCode: string | null;
            primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
        };
    }>;
    activateProduct(code: string, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").ProductStatus;
        createdAt: Date;
        code: string;
        name: string;
        engineType: import("../../generated/prisma/enums").ProductEngineType;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
    }>;
}
