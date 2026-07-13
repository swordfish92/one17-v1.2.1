import type { AuthenticatedUser } from '../auth/auth.types';
import { PettyCashService } from '../petty-cash/petty-cash.service';
import { EstablishFloatDto, AdjustFloatCapsDto, CaptureVoucherDto, InitiateReplenishmentClaimDto, RecordSpotCheckDto } from './ops-api.types';
export declare class PettyCashController {
    private readonly pettyCash;
    constructor(pettyCash: PettyCashService);
    listFloats(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashFloatStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        floatCode: string;
        custodianUserId: string;
        officeLabel: string;
        floatCeilingKobo: bigint;
        singleVoucherCapKobo: bigint;
        establishedByUserId: string;
    }[]>;
    getFloatBalance(id: string): Promise<{
        floatCeilingKobo: bigint;
        outstandingKobo: bigint;
        availableKobo: bigint;
    }>;
    establishFloat(dto: EstablishFloatDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashFloatStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        floatCode: string;
        custodianUserId: string;
        officeLabel: string;
        floatCeilingKobo: bigint;
        singleVoucherCapKobo: bigint;
        establishedByUserId: string;
    }>;
    adjustFloatCaps(id: string, dto: AdjustFloatCapsDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashFloatStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        floatCode: string;
        custodianUserId: string;
        officeLabel: string;
        floatCeilingKobo: bigint;
        singleVoucherCapKobo: bigint;
        establishedByUserId: string;
    }>;
    closeFloat(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashFloatStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        floatCode: string;
        custodianUserId: string;
        officeLabel: string;
        floatCeilingKobo: bigint;
        singleVoucherCapKobo: bigint;
        establishedByUserId: string;
    }>;
    listVouchers(floatId?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashVoucherStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        floatId: string;
        voucherDate: Date;
        payee: string;
        expenseAccountCode: string;
        claimId: string | null;
    }[]>;
    captureVoucher(dto: CaptureVoucherDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PettyCashVoucherStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        floatId: string;
        voucherDate: Date;
        payee: string;
        expenseAccountCode: string;
        claimId: string | null;
    }>;
    listClaims(floatId?: string): Promise<({
        vouchers: {
            id: string;
            status: import("../../generated/prisma/enums").PettyCashVoucherStatus;
            createdAt: Date;
            amountKobo: bigint;
            createdByUserId: string;
            floatId: string;
            voucherDate: Date;
            payee: string;
            expenseAccountCode: string;
            claimId: string | null;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PettyCashClaimStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        initiatedByUserId: string;
        rejectionNotes: string | null;
        floatId: string;
        totalVoucherKobo: bigint;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
    })[]>;
    initiateReplenishmentClaim(dto: InitiateReplenishmentClaimDto, user: AuthenticatedUser): Promise<{
        claim: {
            id: string;
            status: import("../../generated/prisma/enums").PettyCashClaimStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            initiatedByUserId: string;
            rejectionNotes: string | null;
            floatId: string;
            totalVoucherKobo: bigint;
            disbursedByUserId: string | null;
            disbursedAt: Date | null;
        };
        workflowInstance: any;
    }>;
    listSpotChecks(floatId?: string): Promise<{
        id: string;
        notes: string | null;
        floatId: string;
        countedKobo: bigint;
        expectedKobo: bigint;
        varianceKobo: bigint;
        checkedByUserId: string;
        checkedAt: Date;
    }[]>;
    recordSpotCheck(dto: RecordSpotCheckDto, user: AuthenticatedUser): Promise<{
        id: string;
        notes: string | null;
        floatId: string;
        countedKobo: bigint;
        expectedKobo: bigint;
        varianceKobo: bigint;
        checkedByUserId: string;
        checkedAt: Date;
    }>;
}
