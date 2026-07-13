import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { EmployeeLifecycleService } from '../profile/employee-lifecycle.service';
import { RequestOnboardingDto, RequestOffboardingDto, RequestIncentivePctChangeDto, DecideEmployeeLifecycleDto } from './ops-api.types';
export declare class EmployeeLifecycleController {
    private readonly prisma;
    private readonly employeeLifecycle;
    constructor(prisma: PrismaService, employeeLifecycle: EmployeeLifecycleService);
    list(): Promise<({
        position: {
            id: string;
            createdAt: Date;
            orgUnitCode: string;
            cadre: string;
            title: string;
            notch: number;
        };
        appUser: {
            email: string;
            status: import("../../generated/prisma/enums").UserStatus;
        } | null;
        reportsTo: {
            id: string;
            surname: string;
            firstName: string;
            middleName: string | null;
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeStatus;
        createdAt: Date;
        migrationSourceRef: string | null;
        appUserId: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        performanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    listPositions(): Promise<({
        orgUnit: {
            code: string;
            name: string;
            secondaryReportingLine: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        orgUnitCode: string;
        cadre: string;
        title: string;
        notch: number;
    })[]>;
    listOrgUnits(): Promise<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }[]>;
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
    requestOnboarding(dto: RequestOnboardingDto, user: AuthenticatedUser): Promise<{
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
    decideOnboarding(workflowInstanceId: string, dto: DecideEmployeeLifecycleDto, user: AuthenticatedUser): Promise<{
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
    requestOffboarding(dto: RequestOffboardingDto, user: AuthenticatedUser): Promise<{
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
    decideOffboarding(workflowInstanceId: string, dto: DecideEmployeeLifecycleDto, user: AuthenticatedUser): Promise<{
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
    listIncentivePctRequests(): Promise<({
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
    requestIncentivePctChange(dto: RequestIncentivePctChangeDto, user: AuthenticatedUser): Promise<{
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
    decideIncentivePctChange(workflowInstanceId: string, dto: DecideEmployeeLifecycleDto, user: AuthenticatedUser): Promise<{
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
}
