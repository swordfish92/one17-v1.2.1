import type { AuthenticatedUser } from '../auth/auth.types';
import { ActivationConsoleService } from '../activation-console/activation-console.service';
import { AssignActivationSubStepTaskDto } from './ops-api.types';
export declare class ActivationConsoleController {
    private readonly activation;
    constructor(activation: ActivationConsoleService);
    getStatus(): Promise<import("../activation-console/activation-console.types").ActivationConsoleStatus>;
    skipStep(stepCode: string, user: AuthenticatedUser): Promise<{
        id: string;
        stepCode: string;
        skippedAt: Date;
        skippedByUserId: string;
    }>;
    unskipStep(stepCode: string, user: AuthenticatedUser): Promise<{
        id: string;
        stepCode: string;
        skippedAt: Date;
        skippedByUserId: string;
    } | null>;
    activate(user: AuthenticatedUser): Promise<{
        id: number;
        activatedByUserId: string | null;
        activatedAt: Date | null;
    }>;
    runProofBattery(user: AuthenticatedUser): Promise<{
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
    assignSubStepTask(dto: AssignActivationSubStepTaskDto, user: AuthenticatedUser): Promise<{
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
}
