import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { UserDeactivationService } from '../rbac/user-deactivation.service';
import { EmployeeLifecycleError, RequestOnboardingInput } from './employee-lifecycle.types';

// Invariant 50(b) (CHECK12): governed employee lifecycle -- a new hire is
// PROPOSED (HR) and only becomes a real Employee row once a DIFFERENT
// approver (MD_CEO) signs off; offboarding mirrors it and additionally
// deactivates the linked AppUser login. Addendum (CEO, 8-Jul-2026): the
// same governance applies to any LATER change of Employee.
// performanceIncentivePct, with an extra guard -- refused outright if the
// employee has an in-flight (not yet INCENTIVE_COMPUTED) PMS cycle, so the
// change can never be retroactive on scoring already under way.
@Injectable()
export class EmployeeLifecycleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly userDeactivation: UserDeactivationService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'employee_lifecycle', entityId: activity, after: { functionCode, level } });
      throw new EmployeeLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  async requestOnboarding(input: RequestOnboardingInput) {
    await this.assertCapability(input.requestedByUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose a new hire');
    const request = await this.prisma.employeeOnboardingRequest.create({
      data: {
        surname: input.surname,
        firstName: input.firstName,
        middleName: input.middleName,
        positionId: input.positionId,
        orgUnitCode: input.orgUnitCode,
        reportsToId: input.reportsToId,
        hireDate: input.hireDate,
        proposedPerformanceIncentivePct: input.proposedPerformanceIncentivePct ?? 25.0,
        linkedUserEmail: input.linkedUserEmail,
        requestedByUserId: input.requestedByUserId,
      },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'EMPLOYEE_ONBOARDING',
        entityType: 'employee_onboarding_request',
        entityId: request.id,
        initiatedByUserId: input.requestedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.requestedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'employee_onboarding_request',
        entityId: request.id,
        after: { workflowTypeCode: 'EMPLOYEE_ONBOARDING', reason: (err as Error).message },
      });
      await this.prisma.employeeOnboardingRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.employeeOnboardingRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideOnboarding(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.employeeOnboardingRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.employeeOnboardingRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.employeeOnboardingRequest.findUniqueOrThrow({ where: { id: request.id } });

    let appUserId: string | undefined;
    if (request.linkedUserEmail) {
      const appUser = await this.prisma.appUser.create({
        data: { email: request.linkedUserEmail, displayName: `${request.firstName} ${request.surname}` },
      });
      appUserId = appUser.id;
    }
    const employee = await this.prisma.employee.create({
      data: {
        surname: request.surname,
        firstName: request.firstName,
        middleName: request.middleName,
        positionId: request.positionId,
        orgUnitCode: request.orgUnitCode,
        reportsToId: request.reportsToId,
        hireDate: request.hireDate,
        performanceIncentivePct: request.proposedPerformanceIncentivePct,
        appUserId,
        status: 'ACTIVE',
      },
    });
    const finalRequest = await this.prisma.employeeOnboardingRequest.update({
      where: { id: request.id },
      data: { status: 'APPROVED', resultingEmployeeId: employee.id },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'CREATE', entityType: 'employee', entityId: employee.id, after: { onboardingRequestId: request.id } });
    return finalRequest;
  }

  async requestOffboarding(employeeId: string, reason: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose an offboarding');
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    if (employee.status !== 'ACTIVE') {
      throw new EmployeeLifecycleError(`Employee ${employeeId} is ${employee.status}, not ACTIVE -- cannot offboard an employee who isn't currently active.`);
    }
    const request = await this.prisma.employeeOffboardingRequest.create({ data: { employeeId, reason, requestedByUserId: actorUserId } });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'EMPLOYEE_OFFBOARDING',
        entityType: 'employee_offboarding_request',
        entityId: request.id,
        initiatedByUserId: actorUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'employee_offboarding_request',
        entityId: request.id,
        after: { workflowTypeCode: 'EMPLOYEE_OFFBOARDING', reason: (err as Error).message },
      });
      await this.prisma.employeeOffboardingRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.employeeOffboardingRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideOffboarding(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.employeeOffboardingRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.employeeOffboardingRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.employeeOffboardingRequest.findUniqueOrThrow({ where: { id: request.id } });

    const employee = await this.prisma.employee.update({ where: { id: request.employeeId }, data: { status: 'TERMINATED' } });
    if (employee.appUserId) {
      // Invariant 50(b): "offboarding that deactivates the linked login" --
      // now the SAME shared primitive as invariant 51(a-iv) (also revokes
      // any delegations the login holds + any open sessions), not a
      // duplicated inline status flip.
      await this.userDeactivation.deactivateUser(employee.appUserId, approverUserId, `Employee ${employee.id} offboarding approved.`);
    }
    const finalRequest = await this.prisma.employeeOffboardingRequest.update({
      where: { id: request.id },
      data: { status: 'APPROVED', completedAt: new Date() },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'employee', entityId: employee.id, after: { status: 'TERMINATED', loginDeactivated: !!employee.appUserId } });
    return finalRequest;
  }

  async requestIncentivePctChange(employeeId: string, proposedPct: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose a performance-incentive percentage change');
    await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    const request = await this.prisma.employeeIncentivePctChangeRequest.create({ data: { employeeId, proposedPct, requestedByUserId: actorUserId } });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'EMPLOYEE_INCENTIVE_PCT_CHANGE',
        entityType: 'employee_incentive_pct_change_request',
        entityId: request.id,
        initiatedByUserId: actorUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'employee_incentive_pct_change_request',
        entityId: request.id,
        after: { workflowTypeCode: 'EMPLOYEE_INCENTIVE_PCT_CHANGE', reason: (err as Error).message },
      });
      await this.prisma.employeeIncentivePctChangeRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.employeeIncentivePctChangeRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideIncentivePctChange(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.employeeIncentivePctChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.employeeIncentivePctChangeRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    // Invariant 50(b) addendum: "never retroactive on a computed cycle" --
    // checked BEFORE consuming the approval step at all, so a blocked
    // change leaves the workflow instance untouched (still
    // PENDING_APPROVAL) for the approver to retry once the in-flight
    // cycle closes, rather than burning the approval on a change that
    // can't actually apply.
    const inFlightSubmission = await this.prisma.employeeScoreSubmission.findFirst({
      where: {
        employeeId: request.employeeId,
        appraisalCycle: { status: { notIn: ['INCENTIVE_COMPUTED', 'PAID', 'CLOSED'] } },
      },
      include: { appraisalCycle: true },
    });
    if (inFlightSubmission) {
      throw new EmployeeLifecycleError(
        `Employee ${request.employeeId} has an in-flight PMS cycle (${inFlightSubmission.appraisalCycle.id}, status ${inFlightSubmission.appraisalCycle.status}) -- a performanceIncentivePct change cannot be approved until that cycle reaches INCENTIVE_COMPUTED (invariant 50b addendum: never retroactive). Retry once the cycle closes.`,
      );
    }

    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.employeeIncentivePctChangeRequest.findUniqueOrThrow({ where: { id: request.id } });

    await this.prisma.employee.update({ where: { id: request.employeeId }, data: { performanceIncentivePct: request.proposedPct } });
    const finalRequest = await this.prisma.employeeIncentivePctChangeRequest.update({
      where: { id: request.id },
      data: { status: 'APPROVED', appliedAt: new Date() },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'employee', entityId: request.employeeId, after: { performanceIncentivePct: request.proposedPct.toString() } });
    return finalRequest;
  }

  async listOnboardingRequests() {
    return this.prisma.employeeOnboardingRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { position: true } });
  }

  async listOffboardingRequests() {
    return this.prisma.employeeOffboardingRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { employee: { select: { firstName: true, surname: true } } } });
  }

  async listIncentivePctChangeRequests() {
    return this.prisma.employeeIncentivePctChangeRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { employee: { select: { firstName: true, surname: true, performanceIncentivePct: true } } } });
  }
}
