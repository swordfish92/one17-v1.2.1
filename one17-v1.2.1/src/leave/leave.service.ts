import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ApplyForLeaveInput, LeaveError } from './leave.types';

// Invariant 64(e) (CHECK17): Leave -- application now, relief AUTOMATION
// stays Wave 1 (invariant 53a). Application is self-service (identity-
// gated off the caller's own AppUser -> Employee resolution, never a
// caller-supplied employeeId -- the same discipline TaskService.assignTask
// uses for self-assignment); supervisor approval is a reports-to check,
// never a capability grant (ANY supervisor approves only THEIR OWN
// reports' leave); HR acknowledgment is capability-gated (LEAVE_MANAGEMENT)
// and is the point balances actually debit and the calendar plots --
// matching "supervisor approval + HR acknowledgment" as two sequential,
// distinct gates, not one combined step.
@Injectable()
export class LeaveService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async listLeaveTypes() {
    return this.prisma.leaveType.findMany({ where: { isActive: true }, orderBy: { code: 'asc' } });
  }

  async getMyBalancesForActor(actorUserId: string, year: number) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return [];
    return this.getMyBalances(employee.id, year);
  }

  // Lazily provisions an entitlement row (governed default, never code) the
  // first time a given employee/year/type combination is touched -- avoids
  // needing a separate annual-grant scheduled job while keeping the DEFAULT
  // itself in LeaveType (config), not hardcoded here.
  async getMyBalances(employeeId: string, year: number) {
    const leaveTypes = await this.prisma.leaveType.findMany({ where: { isActive: true } });
    const balances: { leaveTypeName: string; remainingDays: string; [key: string]: unknown }[] = [];
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

  async applyForLeave(actorUserId: string, input: ApplyForLeaveInput) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) {
      throw new LeaveError('Leave application requires the caller to be a real Employee -- self-service only, never on another employee\'s behalf.');
    }
    const leaveType = await this.prisma.leaveType.findUniqueOrThrow({ where: { code: input.leaveTypeCode } });
    if (!leaveType.isActive) {
      throw new LeaveError(`Leave type ${input.leaveTypeCode} is not active.`);
    }
    const startDate = new Date(input.startDate);
    const endDate = new Date(input.endDate);
    if (endDate < startDate) {
      throw new LeaveError('endDate cannot be before startDate.');
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
      throw new LeaveError(`Leave application for ${daysRequested} day(s) exceeds the remaining balance of ${remaining} day(s) for ${input.leaveTypeCode} -- refused (invariant 64f adversarial case).`);
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

  async listMyApplications(actorUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return [];
    return this.prisma.leaveApplication.findMany({ where: { employeeId: employee.id }, orderBy: { createdAt: 'desc' } });
  }

  async listSubordinateApplications(supervisorActorUserId: string) {
    const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: supervisorActorUserId } });
    if (!supervisor) return [];
    const reports = await this.prisma.employee.findMany({ where: { reportsToId: supervisor.id }, select: { id: true } });
    if (reports.length === 0) return [];
    return this.prisma.leaveApplication.findMany({
      where: { employeeId: { in: reports.map((r) => r.id) } },
      include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async supervisorDecide(applicationId: string, decision: 'APPROVED' | 'REJECTED', decidedByUserId: string, notes?: string) {
    const application = await this.prisma.leaveApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.status !== 'PENDING') {
      throw new LeaveError(`Leave application ${applicationId} is ${application.status}, not PENDING.`);
    }
    const requester = await this.prisma.employee.findUniqueOrThrow({ where: { id: application.employeeId } });
    const decider = await this.prisma.employee.findFirst({ where: { appUserId: decidedByUserId } });
    if (!decider) {
      throw new LeaveError('Leave approval requires the decider to be a real Employee (org reports_to check).');
    }
    if (decider.id === requester.id) {
      throw new LeaveError('A supervisor cannot approve their own leave application.');
    }
    if (requester.reportsToId !== decider.id) {
      throw new LeaveError(`Leave approval requires the decider to be requester ${requester.id}'s direct supervisor (org reports_to) — invariant 64(e).`);
    }
    const updated = await this.prisma.leaveApplication.update({
      where: { id: applicationId },
      data: { status: decision === 'APPROVED' ? 'SUPERVISOR_APPROVED' : 'REJECTED', supervisorDecidedByUserId: decidedByUserId, supervisorDecidedAt: new Date(), supervisorNotes: notes },
    });
    await this.audit.record({ actorUserId: decidedByUserId, action: decision === 'APPROVED' ? 'APPROVE' : 'REJECT', entityType: 'leave_application', entityId: applicationId, after: { status: updated.status } });
    return updated;
  }

  // The final gate -- HR_ADMIN (LEAVE_MANAGEMENT INITIATE) acknowledges,
  // which is the point the balance actually debits and the calendar auto-
  // plot picks the row up on the next sweep (CalendarService.
  // syncApprovedLeave reads HR_ACKNOWLEDGED rows only).
  async hrAcknowledge(applicationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'LEAVE_MANAGEMENT', 'INITIATE', 'acknowledge an approved leave application');
    const application = await this.prisma.leaveApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.status !== 'SUPERVISOR_APPROVED') {
      throw new LeaveError(`Leave application ${applicationId} is ${application.status}, not SUPERVISOR_APPROVED -- HR acknowledgment requires supervisor approval first.`);
    }
    const year = application.startDate.getFullYear();
    const entitlement = await this.prisma.leaveEntitlement.findUniqueOrThrow({
      where: { employeeId_leaveTypeCode_year: { employeeId: application.employeeId, leaveTypeCode: application.leaveTypeCode, year } },
    });
    const remaining = Number(entitlement.entitledDays) - Number(entitlement.usedDays);
    if (Number(application.daysRequested) > remaining) {
      throw new LeaveError(`Balance for ${application.leaveTypeCode} has changed since application and no longer covers ${application.daysRequested} day(s) (${remaining} remaining) -- refused.`);
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

  // People-hub oversight register -- every application, every status.
  async listAllApplications() {
    return this.prisma.leaveApplication.findMany({
      include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'leave_activity', entityId: activity, after: { functionCode, level } });
      throw new LeaveError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
