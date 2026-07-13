import { NdMandateEngineService } from '../engine-nd-mandate/nd-mandate-engine.service';
export declare class NdMandateController {
    private readonly ndMandate;
    constructor(ndMandate: NdMandateEngineService);
    listAccounts(ledgerEntityCode?: string): Promise<{
        investorRatio: string | null;
        mudaribRatio: string | null;
        wakalahFeeRatePa: string | null;
        sharedRatio: string | null;
        targetReturnPct: string | null;
        id: string;
        status: import("../../generated/prisma/enums").NdMandateStatus;
        createdAt: Date;
        createdByUserId: string;
        investorId: string | null;
        ledgerEntityCode: string;
        startDate: Date;
        maturityDate: Date | null;
        profitPaymentInterval: import("../../generated/prisma/enums").ProfitPaymentInterval | null;
        mandateRef: string;
        participantType: import("../../generated/prisma/enums").NdMandateParticipantType;
        participantLedgerEntityCode: string | null;
        sharingMode: import("../../generated/prisma/enums").NdMandateSharingMode;
        surplusTreatment: import("../../generated/prisma/enums").NdMandateSurplusTreatment | null;
        committedCapitalKobo: bigint | null;
        activationWorkflowInstanceId: string | null;
    }[]>;
    listAgingProvisionals(thresholdDays?: string): Promise<{
        capitalKobo: string;
        provisionalAmountKobo: string;
        daysOld: number;
        id: string;
        status: import("../../generated/prisma/enums").NdMandateProvisionalStatus;
        createdAt: Date;
        ndMandateAccountId: string;
        accrualDate: Date;
        expectedRatePct: import("@prisma/client-runtime-utils").Decimal;
        trueUpJournalRef: string | null;
        reversedAt: Date | null;
    }[]>;
}
