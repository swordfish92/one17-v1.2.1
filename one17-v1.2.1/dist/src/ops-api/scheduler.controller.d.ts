import type { AuthenticatedUser } from '../auth/auth.types';
import { SchedulerService } from '../scheduler/scheduler.service';
export declare class SchedulerController {
    private readonly scheduler;
    constructor(scheduler: SchedulerService);
    listJobs(user: AuthenticatedUser): Promise<{
        code: string;
        description: string;
        cadence: import("../scheduler/scheduler.types").ScheduledJobConfig["cadence"];
        isConsequential: boolean;
        ownerFunctionCode: string | null;
        pauseState: Awaited<ReturnType<SchedulerService["prisma"]["scheduledJobPauseState"]["findFirst"]>> | null;
        lastRun: Awaited<ReturnType<SchedulerService["prisma"]["scheduledJobRun"]["findFirst"]>>;
    }[]>;
    listRuns(jobCode: string | undefined, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ScheduledJobRunStatus;
        createdAt: Date;
        completedAt: Date | null;
        startedAt: Date;
        jobCode: string;
        scheduledFor: Date;
        isCatchUp: boolean;
        isManualRerun: boolean;
        triggeredByUserId: string | null;
        resultSummary: import("@prisma/client/runtime/client").JsonValue | null;
        errorMessage: string | null;
    }[]>;
    listFailures(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ScheduledJobRunStatus;
        createdAt: Date;
        completedAt: Date | null;
        startedAt: Date;
        jobCode: string;
        scheduledFor: Date;
        isCatchUp: boolean;
        isManualRerun: boolean;
        triggeredByUserId: string | null;
        resultSummary: import("@prisma/client/runtime/client").JsonValue | null;
        errorMessage: string | null;
    }[]>;
    pauseDirect(jobCode: string, reason: string, user: AuthenticatedUser): Promise<{
        updatedAt: Date;
        jobCode: string;
        isPaused: boolean;
        pausedAt: Date | null;
        pausedByUserId: string | null;
        pauseReason: string | null;
        pauseWorkflowInstanceId: string | null;
        resumedAt: Date | null;
        resumedByUserId: string | null;
    }>;
    requestPause(jobCode: string, reason: string, user: AuthenticatedUser): Promise<{
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
    resume(jobCode: string, user: AuthenticatedUser): Promise<{
        updatedAt: Date;
        jobCode: string;
        isPaused: boolean;
        pausedAt: Date | null;
        pausedByUserId: string | null;
        pauseReason: string | null;
        pauseWorkflowInstanceId: string | null;
        resumedAt: Date | null;
        resumedByUserId: string | null;
    }>;
    rerun(jobCode: string, scheduledFor: string, user: AuthenticatedUser): Promise<{
        status: "SUCCEEDED" | "FAILED";
        runId: string;
    }>;
    listJobCatalog(): Promise<{
        code: string;
        description: string;
        cadence: import("../scheduler/scheduler.types").Cadence;
        isConsequential: boolean;
        registration: {
            updatedAt: Date;
            jobCode: string;
            isRetired: boolean;
            registeredAt: Date | null;
            registeredByUserId: string | null;
            retiredAt: Date | null;
            retiredByUserId: string | null;
            retireReason: string | null;
            retireWorkflowInstanceId: string | null;
        } | null;
        isRetired: boolean;
    }[]>;
    registerJob(jobCode: string, user: AuthenticatedUser): Promise<{
        updatedAt: Date;
        jobCode: string;
        isRetired: boolean;
        registeredAt: Date | null;
        registeredByUserId: string | null;
        retiredAt: Date | null;
        retiredByUserId: string | null;
        retireReason: string | null;
        retireWorkflowInstanceId: string | null;
    }>;
    retireJob(jobCode: string, reason: string, user: AuthenticatedUser): Promise<{
        updatedAt: Date;
        jobCode: string;
        isRetired: boolean;
        registeredAt: Date | null;
        registeredByUserId: string | null;
        retiredAt: Date | null;
        retiredByUserId: string | null;
        retireReason: string | null;
        retireWorkflowInstanceId: string | null;
    }>;
    requestRetirement(jobCode: string, reason: string, user: AuthenticatedUser): Promise<{
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
}
