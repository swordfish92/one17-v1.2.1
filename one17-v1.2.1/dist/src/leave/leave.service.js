"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const leave_types_1 = require("./leave.types");
let LeaveService = class LeaveService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async listLeaveTypes() {
        return this.prisma.leaveType.findMany({ where: { isActive: true }, orderBy: { code: 'asc' } });
    }
    async getMyBalancesForActor(actorUserId, year) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return [];
        return this.getMyBalances(employee.id, year);
    }
    async getMyBalances(employeeId, year) {
        const leaveTypes = await this.prisma.leaveType.findMany({ where: { isActive: true } });
        const balances = [];
        for (const lt of leaveTypes) {
            const entitlement = await this.prisma.leaveEntitlement.upsert({
                where: { employeeId_leaveTypeCode_year: { employeeId, leaveTypeCode: lt.code, year } },
                create: { employeeId, leaveTypeCode: lt.code, year, entitledDays: lt.defaultAnnualDays },
                update: {},
            });
            balances.push({ ...entitlement, leaveTypeName: lt.name, remainingDays: (Number(entitlement.entitledDays) - Number(entitlement.usedDays)).toFixed(2) });
        }
        return balances;
    }
    async applyForLeave(actorUserId, input) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee) {
            throw new leave_types_1.LeaveError('Leave application requires the caller to be a real Employee -- self-service only, never on another employee\'s behalf.');
        }
        const leaveType = await this.prisma.leaveType.findUniqueOrThrow({ where: { code: input.leaveTypeCode } });
        if (!leaveType.isActive) {
            throw new leave_types_1.LeaveError(`Leave type ${input.leaveTypeCode} is not active.`);
        }
        const startDate = new Date(input.startDate);
        const endDate = new Date(input.endDate);
        if (endDate < startDate) {
            throw new leave_types_1.LeaveError('endDate cannot be before startDate.');
        }
        const daysRequested = Math.round((endDate.getTime() - startDate.getTime()) / 86_400_000) + 1;
        if (input.reliefOfficerEmployeeId) {
            await this.prisma.employee.findUniqueOrThrow({ where: { id: input.reliefOfficerEmployeeId } });
        }
        const year = startDate.getFullYear();
        const [balance] = await this.getMyBalances(employee.id, year);
        const entitlement = await this.prisma.leaveEntitlement.findUniqueOrThrow({
            where: { employeeId_leaveTypeCode_year: { employeeId: employee.id, leaveTypeCode: input.leaveTypeCode, year } },
        });
        const remaining = Number(entitlement.entitledDays) - Number(entitlement.usedDays);
        if (daysRequested > remaining) {
            throw new leave_types_1.LeaveError(`Leave application for ${daysRequested} day(s) exceeds the remaining balance of ${remaining} day(s) for ${input.leaveTypeCode} -- refused (invariant 64f adversarial case).`);
        }
        void balance;
        const application = await this.prisma.leaveApplication.create({
            data: {
                employeeId: employee.id,
                leaveTypeCode: input.leaveTypeCode,
                startDate,
                endDate,
                daysRequested,
                reliefOfficerEmployeeId: input.reliefOfficerEmployeeId,
                reason: input.reason,
            },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'leave_application', entityId: application.id, after: { leaveTypeCode: input.leaveTypeCode, daysRequested } });
        return application;
    }
    async listMyApplications(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return [];
        return this.prisma.leaveApplication.findMany({ where: { employeeId: employee.id }, orderBy: { createdAt: 'desc' } });
    }
    async listSubordinateApplications(supervisorActorUserId) {
        const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: supervisorActorUserId } });
        if (!supervisor)
            return [];
        const reports = await this.prisma.employee.findMany({ where: { reportsToId: supervisor.id }, select: { id: true } });
        if (reports.length === 0)
            return [];
        return this.prisma.leaveApplication.findMany({
            where: { employeeId: { in: reports.map((r) => r.id) } },
            include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async supervisorDecide(applicationId, decision, decidedByUserId, notes) {
        const application = await this.prisma.leaveApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.status !== 'PENDING') {
            throw new leave_types_1.LeaveError(`Leave application ${applicationId} is ${application.status}, not PENDING.`);
        }
        const requester = await this.prisma.employee.findUniqueOrThrow({ where: { id: application.employeeId } });
        const decider = await this.prisma.employee.findFirst({ where: { appUserId: decidedByUserId } });
        if (!decider) {
            throw new leave_types_1.LeaveError('Leave approval requires the decider to be a real Employee (org reports_to check).');
        }
        if (decider.id === requester.id) {
            throw new leave_types_1.LeaveError('A supervisor cannot approve their own leave application.');
        }
        if (requester.reportsToId !== decider.id) {
            throw new leave_types_1.LeaveError(`Leave approval requires the decider to be requester ${requester.id}'s direct supervisor (org reports_to) — invariant 64(e).`);
        }
        const updated = await this.prisma.leaveApplication.update({
            where: { id: applicationId },
            data: { status: decision === 'APPROVED' ? 'SUPERVISOR_APPROVED' : 'REJECTED', supervisorDecidedByUserId: decidedByUserId, supervisorDecidedAt: new Date(), supervisorNotes: notes },
        });
        await this.audit.record({ actorUserId: decidedByUserId, action: decision === 'APPROVED' ? 'APPROVE' : 'REJECT', entityType: 'leave_application', entityId: applicationId, after: { status: updated.status } });
        return updated;
    }
    async hrAcknowledge(applicationId, actorUserId) {
        await this.assertCapability(actorUserId, 'LEAVE_MANAGEMENT', 'INITIATE', 'acknowledge an approved leave application');
        const application = await this.prisma.leaveApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.status !== 'SUPERVISOR_APPROVED') {
            throw new leave_types_1.LeaveError(`Leave application ${applicationId} is ${application.status}, not SUPERVISOR_APPROVED -- HR acknowledgment requires supervisor approval first.`);
        }
        const year = application.startDate.getFullYear();
        const entitlement = await this.prisma.leaveEntitlement.findUniqueOrThrow({
            where: { employeeId_leaveTypeCode_year: { employeeId: application.employeeId, leaveTypeCode: application.leaveTypeCode, year } },
        });
        const remaining = Number(entitlement.entitledDays) - Number(entitlement.usedDays);
        if (Number(application.daysRequested) > remaining) {
            throw new leave_types_1.LeaveError(`Balance for ${application.leaveTypeCode} has changed since application and no longer covers ${application.daysRequested} day(s) (${remaining} remaining) -- refused.`);
        }
        const [updated] = await this.prisma.$transaction([
            this.prisma.leaveApplication.update({
                where: { id: applicationId },
                data: { status: 'HR_ACKNOWLEDGED', hrAcknowledgedByUserId: actorUserId, hrAcknowledgedAt: new Date() },
            }),
            this.prisma.leaveEntitlement.update({
                where: { id: entitlement.id },
                data: { usedDays: { increment: application.daysRequested } },
            }),
        ]);
        await this.audit.record({ actorUserId, action: 'APPROVE', entityType: 'leave_application', entityId: applicationId, after: { status: 'HR_ACKNOWLEDGED', daysDebited: application.daysRequested.toString() } });
        return updated;
    }
    async listAllApplications() {
        return this.prisma.leaveApplication.findMany({
            include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'leave_activity', entityId: activity, after: { functionCode, level } });
            throw new leave_types_1.LeaveError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.LeaveService = LeaveService;
exports.LeaveService = LeaveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], LeaveService);
//# sourceMappingURL=leave.service.js.map