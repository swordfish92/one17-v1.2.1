import { PrismaService } from '../prisma/prisma.service';
export declare class PerformanceController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    listNavHistory(ledgerEntityCode: string): Promise<{
        valuationDate: Date;
        navPerUnit: string;
        totalNavKobo: string;
        unitsOutstanding: string;
        isLocked: boolean;
    }[]>;
    listDistributions(ledgerEntityCode: string): Promise<{
        netAvailableKobo: string;
        toParticipantsKobo: string;
        retainedOrMudaribBaseKobo: string;
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
        declaredAt: Date | null;
        paidAt: Date | null;
    }[]>;
    listAccounts(ledgerEntityCode: string): Promise<{
        investorId: string;
        investorName: string;
        principalOrCommittedKobo: string;
        unitsHeld: string | null;
        targetReturnPctBenchmark: string | null;
        psrInvestorPct: string | null;
        liquidityClass: string | null;
        status: import("../../generated/prisma/enums").ProductAccountStatus;
    }[]>;
}
