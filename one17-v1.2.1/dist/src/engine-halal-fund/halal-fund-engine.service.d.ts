import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import { AccrueFeesInput, ComputeDailyNavInput, DailyNavResult, ProposeMarketValueEntryInput, ApproveMarketValueEntryInput, RunDistributionInput, RunDistributionResult } from './halal-fund-engine.types';
export declare class HalalFundEngineService {
    private readonly prisma;
    private readonly audit;
    private readonly workflow;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, workflow: WorkflowEngineService, delegation: DelegationService);
    private assertCapability;
    proposeMarketValueEntry(input: ProposeMarketValueEntryInput): Promise<{
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
    approveMarketValueEntry(input: ApproveMarketValueEntryInput): Promise<{
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
    computeDailyNav(input: ComputeDailyNavInput): Promise<DailyNavResult>;
    publishAndLockNav(input: ComputeDailyNavInput): Promise<{
        id: string;
        createdAt: Date;
        ledgerEntityCode: string;
        valuationDate: Date;
        portfolioMktValKobo: bigint;
        uninvestedCashKobo: bigint;
        accruedUnpaidFeesKobo: bigint;
        totalNavKobo: bigint;
        unitsOutstanding: import("@prisma/client-runtime-utils").Decimal;
        navPerUnit: import("@prisma/client-runtime-utils").Decimal;
        offerPrice: import("@prisma/client-runtime-utils").Decimal;
        bidPrice: import("@prisma/client-runtime-utils").Decimal;
        isLocked: boolean;
        lockedAt: Date | null;
    }>;
    allocateSubscriptionUnits(amountKobo: bigint, offerPrice: number): number;
    computeRedemptionProceedsKobo(units: number, bidPrice: number): bigint;
    computeUnitPricingFromNav(totalNavKobo: bigint, unitsOutstanding: number, offerSpreadPct: number, bidSpreadPct: number): {
        navPerUnit: number;
        offerPrice: number;
        bidPrice: number;
    };
    accrueFees(input: AccrueFeesInput): Promise<{
        id: string;
        createdAt: Date;
        ledgerEntityCode: string;
        feeType: string;
        accrualDate: Date;
        dailyAmountKobo: bigint;
        cumulativeAmountKobo: bigint;
        paidAmountKobo: bigint;
    }[]>;
    runDistribution(input: RunDistributionInput): Promise<{
        result: RunDistributionResult;
        distributionId: string;
        workflowInstanceId: string;
    }>;
    approveDistributionDeclaration(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DistributionStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        productCode: string;
        boardResolutionRef: string | null;
        ssbResolutionRef: string | null;
        createdByUserId: string;
        ledgerEntityCode: string;
        method: import("../../generated/prisma/enums").DistributionMethod | null;
        periodStart: Date;
        periodEnd: Date;
        recordDate: Date;
        netAvailableKobo: bigint;
        toParticipantsKobo: bigint;
        retainedOrMudaribBaseKobo: bigint;
        declaredAt: Date | null;
        paidAt: Date | null;
    } | null>;
    payDistribution(distributionId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DistributionStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        productCode: string;
        boardResolutionRef: string | null;
        ssbResolutionRef: string | null;
        createdByUserId: string;
        ledgerEntityCode: string;
        method: import("../../generated/prisma/enums").DistributionMethod | null;
        periodStart: Date;
        periodEnd: Date;
        recordDate: Date;
        netAvailableKobo: bigint;
        toParticipantsKobo: bigint;
        retainedOrMudaribBaseKobo: bigint;
        declaredAt: Date | null;
        paidAt: Date | null;
    }>;
}
