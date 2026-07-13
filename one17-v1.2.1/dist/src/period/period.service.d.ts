import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BankReconciliationService } from './bank-reconciliation.service';
import { OpenPeriodInput, RequestPeriodCloseInput, ApprovePeriodCloseInput } from './period.types';
export declare class PeriodService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly bankReconciliation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, bankReconciliation: BankReconciliationService);
    openPeriod(input: OpenPeriodInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").AccountingPeriodStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        periodStart: Date;
        periodEnd: Date;
        openedByUserId: string;
        closedByUserId: string | null;
        closedAt: Date | null;
        closeWorkflowInstanceId: string | null;
    }>;
    requestPeriodClose(input: RequestPeriodCloseInput): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    approvePeriodClose(input: ApprovePeriodCloseInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").AccountingPeriodStatus;
        createdAt: Date;
        ledgerEntityCode: string;
        periodStart: Date;
        periodEnd: Date;
        openedByUserId: string;
        closedByUserId: string | null;
        closedAt: Date | null;
        closeWorkflowInstanceId: string | null;
    } | null>;
    private assertCapability;
}
