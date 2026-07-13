import type { AuthenticatedUser } from '../auth/auth.types';
import { ObligationsService } from '../obligations/obligations.service';
import { CompilePayoutBatchDto } from './ops-api.types';
export declare class ObligationsController {
    private readonly obligations;
    constructor(obligations: ObligationsService);
    getSchedule(periodStart: string, periodEnd: string, user: AuthenticatedUser): Promise<import("../obligations/obligations.types").ObligationsScheduleItem[]>;
    getVariance(periodStart: string, periodEnd: string, user: AuthenticatedUser): Promise<{
        projectedKobo: string;
        paidKobo: string;
        varianceKobo: string;
    }>;
    listPayoutBatches(): Promise<({
        lines: {
            id: string;
            investorId: string;
            batchId: string;
            productAccountId: string | null;
            ndMandateAccountId: string | null;
            grossKobo: bigint;
            whtKobo: bigint;
            netKobo: bigint;
            whtExempt: boolean;
            whtRateVersionId: string | null;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    })[]>;
    getPayoutBatch(id: string): Promise<{
        lines: ({
            investor: {
                fullLegalName: string;
            };
        } & {
            id: string;
            investorId: string;
            batchId: string;
            productAccountId: string | null;
            ndMandateAccountId: string | null;
            grossKobo: bigint;
            whtKobo: bigint;
            netKobo: bigint;
            whtExempt: boolean;
            whtRateVersionId: string | null;
        })[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
    compilePayoutBatch(dto: CompilePayoutBatchDto, user: AuthenticatedUser): Promise<{
        lines: {
            id: string;
            investorId: string;
            batchId: string;
            productAccountId: string | null;
            ndMandateAccountId: string | null;
            grossKobo: bigint;
            whtKobo: bigint;
            netKobo: bigint;
            whtExempt: boolean;
            whtRateVersionId: string | null;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
    submitForApproval(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
    retryBankInstructionLetter(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
    markLetterIssued(id: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
    markPaid(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayoutBatchStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        paidAt: Date | null;
        batchNumber: string;
        paidByUserId: string | null;
        periodLabel: string;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        bankInstructionLetterInstanceId: string | null;
    }>;
}
