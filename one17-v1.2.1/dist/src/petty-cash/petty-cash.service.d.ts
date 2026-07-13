import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EstablishFloatInput, AdjustFloatCapsInput, CaptureVoucherInput, InitiateReplenishmentClaimInput, RecordSpotCheckInput } from './petty-cash.types';
export declare class PettyCashService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    establishFloat(input: EstablishFloatInput): Promise<{
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
    adjustFloatCaps(input: AdjustFloatCapsInput): Promise<{
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
    closeFloat(floatId: string, actorUserId: string): Promise<{
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
    getFloatBalance(floatId: string): Promise<{
        floatCeilingKobo: bigint;
        outstandingKobo: bigint;
        availableKobo: bigint;
    }>;
    captureVoucher(input: CaptureVoucherInput): Promise<{
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
    initiateReplenishmentClaim(input: InitiateReplenishmentClaimInput): Promise<{
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
    decideReplenishmentClaim(workflowInstanceId: string, actorUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
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
    } | null>;
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
    recordSpotCheck(input: RecordSpotCheckInput): Promise<{
        id: string;
        notes: string | null;
        floatId: string;
        countedKobo: bigint;
        expectedKobo: bigint;
        varianceKobo: bigint;
        checkedByUserId: string;
        checkedAt: Date;
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
    private assertCapability;
}
