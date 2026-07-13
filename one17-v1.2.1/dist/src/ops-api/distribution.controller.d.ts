import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { RunHalalFundDistributionDto } from './ops-api.types';
export declare class DistributionController {
    private readonly prisma;
    private readonly halalFund;
    constructor(prisma: PrismaService, halalFund: HalalFundEngineService);
    listFundEntities(): Promise<{
        entityType: import("../../generated/prisma/enums").LedgerEntityType;
        status: import("../../generated/prisma/enums").LedgerEntityStatus;
        createdAt: Date;
        code: string;
        name: string;
        productCode: string | null;
        primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
    }[]>;
    listProductAccounts(productCode: string): Promise<{
        id: string;
        investorName: string;
        unitsHeld: string;
        dripElection: string | null;
    }[]>;
    list(ledgerEntityCode?: string): Promise<({
        lineItems: {
            id: string;
            createdAt: Date;
            productAccountId: string | null;
            ndMandateAccountId: string | null;
            distributionId: string;
            capitalKobo: bigint;
            targetRatePct: import("@prisma/client-runtime-utils").Decimal | null;
            activeDays: number | null;
            entitlementKobo: bigint | null;
            twe: import("@prisma/client-runtime-utils").Decimal | null;
            priorityPayoutKobo: bigint | null;
            surplusPayoutKobo: bigint | null;
            hibahKobo: bigint;
            unitsAtRecord: import("@prisma/client-runtime-utils").Decimal | null;
            dpsAmount: import("@prisma/client-runtime-utils").Decimal | null;
            dripUnits: import("@prisma/client-runtime-utils").Decimal | null;
            dripAmountKobo: bigint | null;
            totalPayoutKobo: bigint;
        }[];
    } & {
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
    })[]>;
    runHalalFundDistribution(dto: RunHalalFundDistributionDto, user: AuthenticatedUser): Promise<{
        result: import("../engine-halal-fund/halal-fund-engine.types").RunDistributionResult;
        distributionId: string;
        workflowInstanceId: string;
    }>;
    pay(id: string, user: AuthenticatedUser): Promise<{
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
