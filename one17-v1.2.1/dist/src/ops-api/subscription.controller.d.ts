import type { AuthenticatedUser } from '../auth/auth.types';
import { SubscriptionService } from '../subscription/subscription.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ApproveSubscriptionRequestDto, ConfirmDepositAndSetTargetDto, InitiateSubscriptionRequestDto, WorkflowDecisionDto } from './ops-api.types';
export declare class SubscriptionController {
    private readonly subscriptions;
    private readonly workflow;
    constructor(subscriptions: SubscriptionService, workflow: WorkflowEngineService);
    list(productCode?: string, investorId?: string, requestType?: 'SUBSCRIPTION' | 'REDEMPTION', status?: 'PENDING' | 'APPROVED' | 'REJECTED'): Promise<({
        product: {
            code: string;
            name: string;
            engineType: import("../../generated/prisma/enums").ProductEngineType;
        };
        investor: {
            investorId: string;
            fullLegalName: string;
        };
        initiator: {
            id: string;
            displayName: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    })[]>;
    get(id: string): Promise<{
        request: {
            targetConfirmation: {
                targetReturnPct: number | null;
                maturityDate: string | null;
            } | null;
            product: {
                code: string;
                name: string;
                engineType: import("../../generated/prisma/enums").ProductEngineType;
            };
            investor: {
                investorId: string;
                fullLegalName: string;
                contactEmail: string;
            };
            initiator: {
                id: string;
                email: string;
                displayName: string;
            };
            id: string;
            status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            amountKobo: bigint;
            initiatedByUserId: string;
            decidedAt: Date | null;
            productCode: string;
            investorId: string;
            effectiveDate: Date;
            requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
            computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
            navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
            resultProductAccountId: string | null;
            resultNdMandateAccountId: string | null;
            rejectionReason: string | null;
        };
        trail: {
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
    initiate(dto: InitiateSubscriptionRequestDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    }>;
    confirmTarget(id: string, dto: ConfirmDepositAndSetTargetDto, user: AuthenticatedUser): Promise<{
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
        investorRatio: import("@prisma/client-runtime-utils").Decimal | null;
        mudaribRatio: import("@prisma/client-runtime-utils").Decimal | null;
        wakalahFeeRatePa: import("@prisma/client-runtime-utils").Decimal | null;
        surplusTreatment: import("../../generated/prisma/enums").NdMandateSurplusTreatment | null;
        sharedRatio: import("@prisma/client-runtime-utils").Decimal | null;
        targetReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
        committedCapitalKobo: bigint | null;
        activationWorkflowInstanceId: string | null;
    } | {
        id: string;
        status: import("../../generated/prisma/enums").ProductAccountStatus;
        createdAt: Date;
        notes: string | null;
        productCode: string;
        investorId: string;
        migrationSourceRef: string | null;
        currency: string;
        startDate: Date;
        maturityDate: Date | null;
        principalOrCommittedKobo: bigint;
        targetReturnPctBenchmark: import("@prisma/client-runtime-utils").Decimal | null;
        psrInvestorPct: import("@prisma/client-runtime-utils").Decimal | null;
        psrMudaribPct: import("@prisma/client-runtime-utils").Decimal | null;
        unitsHeld: import("@prisma/client-runtime-utils").Decimal | null;
        mandateTermsRef: string | null;
        liquidityClass: string | null;
        dripElection: string | null;
        rolloverElection: string | null;
        profitPaymentInterval: import("../../generated/prisma/enums").ProfitPaymentInterval | null;
    }>;
    approve(id: string, dto: ApproveSubscriptionRequestDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    }>;
    reject(id: string, dto: WorkflowDecisionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    }>;
}
