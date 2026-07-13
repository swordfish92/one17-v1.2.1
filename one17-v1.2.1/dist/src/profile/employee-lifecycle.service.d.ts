import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { UserDeactivationService } from '../rbac/user-deactivation.service';
import { RequestOnboardingInput } from './employee-lifecycle.types';
export declare class EmployeeLifecycleService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly userDeactivation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, userDeactivation: UserDeactivationService);
    private assertCapability;
    requestOnboarding(input: RequestOnboardingInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        proposedPerformanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
        linkedUserEmail: string | null;
        resultingEmployeeId: string | null;
    }>;
    decideOnboarding(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        proposedPerformanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
        linkedUserEmail: string | null;
        resultingEmployeeId: string | null;
    }>;
    requestOffboarding(employeeId: string, reason: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        completedAt: Date | null;
    }>;
    decideOffboarding(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        completedAt: Date | null;
    }>;
    requestIncentivePctChange(employeeId: string, proposedPct: number, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        proposedPct: import("@prisma/client-runtime-utils").Decimal;
        appliedAt: Date | null;
    }>;
    decideIncentivePctChange(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        proposedPct: import("@prisma/client-runtime-utils").Decimal;
        appliedAt: Date | null;
    }>;
    listOnboardingRequests(): Promise<({
        position: {
            id: string;
            createdAt: Date;
            orgUnitCode: string;
            cadre: string;
            title: string;
            notch: number;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        proposedPerformanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
        linkedUserEmail: string | null;
        resultingEmployeeId: string | null;
    })[]>;
    listOffboardingRequests(): Promise<({
        employee: {
            surname: string;
            firstName: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        completedAt: Date | null;
    })[]>;
    listIncentivePctChangeRequests(): Promise<({
        employee: {
            surname: string;
            firstName: string;
            performanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeLifecycleRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
        employeeId: string;
        proposedPct: import("@prisma/client-runtime-utils").Decimal;
        appliedAt: Date | null;
    })[]>;
}
