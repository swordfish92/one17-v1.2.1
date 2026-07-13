import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ApplyForLeaveInput } from './leave.types';
export declare class LeaveService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    listLeaveTypes(): Promise<{
        id: string;
        createdAt: Date;
        code: string;
        name: string;
        isActive: boolean;
        defaultAnnualDays: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    getMyBalancesForActor(actorUserId: string, year: number): Promise<{
        [key: string]: unknown;
        leaveTypeName: string;
        remainingDays: string;
    }[]>;
    getMyBalances(employeeId: string, year: number): Promise<{
        [key: string]: unknown;
        leaveTypeName: string;
        remainingDays: string;
    }[]>;
    applyForLeave(actorUserId: string, input: ApplyForLeaveInput): Promise<{
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
    listMyApplications(actorUserId: string): Promise<{
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
    listSubordinateApplications(supervisorActorUserId: string): Promise<({
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
    supervisorDecide(applicationId: string, decision: 'APPROVED' | 'REJECTED', decidedByUserId: string, notes?: string): Promise<{
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
    hrAcknowledge(applicationId: string, actorUserId: string): Promise<{
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
    private assertCapability;
}
