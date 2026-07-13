import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterService } from '../letter/letter.service';
import { TaxService } from '../tax/tax.service';
import { CompilePayoutBatchInput, ObligationsScheduleItem } from './obligations.types';
export declare class ObligationsService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly letter;
    private readonly tax;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, letter: LetterService, tax: TaxService);
    getSchedule(actorUserId: string, periodStart: Date, periodEnd: Date): Promise<ObligationsScheduleItem[]>;
    getPaidVsProjectedVariance(actorUserId: string, periodStart: Date, periodEnd: Date): Promise<{
        projectedKobo: string;
        paidKobo: string;
        varianceKobo: string;
    }>;
    private projectedPayoutAmount;
    private projectPayoutDates;
    compilePayoutBatch(input: CompilePayoutBatchInput): Promise<{
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
    submitForApproval(batchId: string, actorUserId: string): Promise<{
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
    approveBatch(workflowInstanceId: string, approverUserId: string): Promise<{
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
    } | null>;
    retryBankInstructionLetter(batchId: string, actorUserId: string): Promise<{
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
    markLetterIssued(batchId: string): Promise<{
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
    markPaid(batchId: string, actorUserId: string): Promise<{
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
    private assertCapability;
}
