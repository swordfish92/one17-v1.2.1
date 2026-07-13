import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { LedgerService } from '../ledger/ledger.service';
import { PeriodService } from '../period/period.service';
import { TaskService } from '../task/task.service';
import { ActivationConsoleStatus, AssignSubStepTaskInput } from './activation-console.types';
export declare class ActivationConsoleService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly ledger;
    private readonly period;
    private readonly task;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, ledger: LedgerService, period: PeriodService, task: TaskService);
    getStatus(): Promise<ActivationConsoleStatus>;
    private probeIdentity;
    private probePeople;
    private probeBooks;
    private probeTaxes;
    private probeProducts;
    private probeRisk;
    private probeRails;
    private probeData;
    private probeProof;
    private rollUp;
    skipStep(stepCode: string, actorUserId: string): Promise<{
        id: string;
        stepCode: string;
        skippedAt: Date;
        skippedByUserId: string;
    }>;
    unskipStep(stepCode: string, actorUserId: string): Promise<{
        id: string;
        stepCode: string;
        skippedAt: Date;
        skippedByUserId: string;
    } | null>;
    activate(actorUserId: string): Promise<{
        id: number;
        activatedByUserId: string | null;
        activatedAt: Date | null;
    }>;
    assignSubStepTask(input: AssignSubStepTaskInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    runProofBattery(actorUserId: string): Promise<{
        passed: boolean;
        reason: string;
        ledgerEntityCode?: undefined;
        journalEntryId?: undefined;
        journalReference?: undefined;
        initiatedByUserId?: undefined;
        approvedByUserId?: undefined;
        postedStatus?: undefined;
    } | {
        passed: boolean;
        reason: string;
        ledgerEntityCode: string;
        journalEntryId: string;
        journalReference?: undefined;
        initiatedByUserId?: undefined;
        approvedByUserId?: undefined;
        postedStatus?: undefined;
    } | {
        passed: boolean;
        ledgerEntityCode: string;
        journalEntryId: string;
        journalReference: string;
        initiatedByUserId: string;
        approvedByUserId: string;
        postedStatus: import("../../generated/prisma/enums").JournalEntryStatus;
        reason?: undefined;
    }>;
    private findEligibleUser;
    private assertCapability;
}
