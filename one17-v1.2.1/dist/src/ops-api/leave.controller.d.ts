import type { AuthenticatedUser } from '../auth/auth.types';
import { LeaveService } from '../leave/leave.service';
import { ApplyForLeaveDto, SupervisorDecideLeaveDto } from './ops-api.types';
export declare class LeaveController {
    private readonly leave;
    constructor(leave: LeaveService);
    listLeaveTypes(): Promise<{
        id: string;
        createdAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        defaultAnnualDays: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    getMyBalances(year: string | undefined, user: AuthenticatedUser): Promise<{
        [key: string]: unknown;
        leaveTypeName: string;
        remainingDays: string;
    }[]>;
    applyForLeave(dto: ApplyForLeaveDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    }>;
    listMyApplications(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    }[]>;
    listSubordinateApplications(user: AuthenticatedUser): Promise<({
        employee: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    })[]>;
    supervisorDecide(id: string, dto: SupervisorDecideLeaveDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    }>;
    hrAcknowledge(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    }>;
    listAllApplications(): Promise<({
        employee: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").LeaveApplicationStatus;
        createdAt: Date;
        reason: string | null;
        startDate: Date;
        employeeId: string;
        leaveTypeCode: string;
        endDate: Date;
        daysRequested: import("@prisma/client-runtime-utils").Decimal;
        reliefOfficerEmployeeId: string | null;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
    })[]>;
}
