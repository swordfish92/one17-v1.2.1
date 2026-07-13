import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { ProfileError, RequestGatedChangeInput, UpdateFreeEditFieldsInput } from './profile.types';

// Invariant 29(a): employee profile hub's PERSONAL RECORDS section. Access:
// employee-self (identity check against Employee.appUserId) + Corporate
// Services HR (EMPLOYEE_PERSONAL_RECORDS VIEW/APPROVE) — never general
// staff visibility (PII discipline). Hobbies/children/emergency-contact are
// direct-write; marital status/address/next-of-kin route through an HR
// acknowledgment workflow (payroll/benefits implications).
@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly notification: NotificationService,
  ) {}

  async getMyEmployee(appUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId }, include: { position: { include: { orgUnit: true } } } });
    if (!employee) throw new ProfileError('No employee record is linked to this login — the profile hub requires an employee.app_user_id link.');
    return employee;
  }

  // PII gate: the employee themselves, OR a caller holding EMPLOYEE_
  // PERSONAL_RECORDS VIEW (Corporate Services HR + payroll where relevant).
  async getPersonalRecord(employeeId: string, requestingUserId: string) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    if (employee.appUserId !== requestingUserId) {
      const { eligible } = await this.delegation.hasCapability(requestingUserId, 'EMPLOYEE_PERSONAL_RECORDS', 'VIEW');
      if (!eligible) {
        throw new ProfileError(`User lacks EMPLOYEE_PERSONAL_RECORDS VIEW (standing or delegated) — personal records are not general-staff-visible (PII discipline, invariant 29a).`);
      }
    }
    return this.prisma.employeePersonalRecord.findUnique({ where: { employeeId } });
  }

  async updateFreeEditFields(employeeId: string, actorUserId: string, input: UpdateFreeEditFieldsInput) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    if (employee.appUserId !== actorUserId) {
      throw new ProfileError(`Only the employee's own linked login may edit their free-edit personal-record fields.`);
    }
    const updated = await this.prisma.employeePersonalRecord.upsert({
      where: { employeeId },
      create: { employeeId, ...input },
      update: input,
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'employee_personal_record', entityId: employeeId, after: input as any });
    return updated;
  }

  async requestGatedChange(employeeId: string, actorUserId: string, input: RequestGatedChangeInput) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    if (employee.appUserId !== actorUserId) {
      throw new ProfileError(`Only the employee's own linked login may request a change to their own personal record.`);
    }
    if (!input.maritalStatus && !input.residentialAddress && !input.nextOfKinName && !input.nextOfKinRelationship && !input.nextOfKinPhone && !input.nextOfKinAddress) {
      throw new ProfileError('At least one of marital status, residential address, or next-of-kin fields must be supplied.');
    }
    const request = await this.prisma.employeePersonalRecordChangeRequest.create({
      data: {
        employeeId,
        proposedMaritalStatus: input.maritalStatus,
        proposedResidentialAddress: input.residentialAddress,
        proposedNextOfKinName: input.nextOfKinName,
        proposedNextOfKinRelationship: input.nextOfKinRelationship,
        proposedNextOfKinPhone: input.nextOfKinPhone,
        proposedNextOfKinAddress: input.nextOfKinAddress,
        requestedByUserId: actorUserId,
      },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'EMPLOYEE_PERSONAL_RECORD_CHANGE',
        entityType: 'employee_personal_record_change_request',
        entityId: request.id,
        initiatedByUserId: actorUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: actorUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'employee_personal_record_change_request',
        entityId: request.id,
        after: { workflowTypeCode: 'EMPLOYEE_PERSONAL_RECORD_CHANGE', reason: (err as Error).message },
      });
      await this.prisma.employeePersonalRecordChangeRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { workflowInstanceId: workflowInstance.id } });
  }

  async listMyChangeRequests(employeeId: string) {
    return this.prisma.employeePersonalRecordChangeRequest.findMany({ where: { employeeId }, orderBy: { createdAt: 'desc' } });
  }

  // Dispatched from WorkflowInboxService.approve() for EMPLOYEE_PERSONAL_
  // RECORD_CHANGE — HR's acknowledgment IS the control (invariant 29a),
  // applying only the fields the request actually proposed.
  async acknowledgeChange(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const request = await this.prisma.employeePersonalRecordChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });

    const patch: Record<string, unknown> = {};
    if (request.proposedMaritalStatus) patch.maritalStatus = request.proposedMaritalStatus;
    if (request.proposedResidentialAddress) patch.residentialAddress = request.proposedResidentialAddress;
    if (request.proposedNextOfKinName) patch.nextOfKinName = request.proposedNextOfKinName;
    if (request.proposedNextOfKinRelationship) patch.nextOfKinRelationship = request.proposedNextOfKinRelationship;
    if (request.proposedNextOfKinPhone) patch.nextOfKinPhone = request.proposedNextOfKinPhone;
    if (request.proposedNextOfKinAddress) patch.nextOfKinAddress = request.proposedNextOfKinAddress;

    await this.prisma.employeePersonalRecord.upsert({
      where: { employeeId: request.employeeId },
      create: { employeeId: request.employeeId, ...patch },
      update: patch,
    });
    const acknowledged = await this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { status: 'ACKNOWLEDGED' } });

    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
    if (employee.appUserId) {
      await this.notification.create({
        recipientUserId: employee.appUserId,
        type: 'PERSONAL_RECORD_CHANGE_DECIDED',
        title: 'Personal record change acknowledged',
        body: 'HR has acknowledged your requested personal-record change.',
        linkPath: '/profile',
      });
    }
    return acknowledged;
  }

  // Dispatched from WorkflowInboxService.reject() for the same workflow type.
  async rejectChange(workflowInstanceId: string, approverUserId: string, notes?: string) {
    await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    const request = await this.prisma.employeePersonalRecordChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    const rejected = await this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { status: 'REJECTED' } });

    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
    if (employee.appUserId) {
      await this.notification.create({
        recipientUserId: employee.appUserId,
        type: 'PERSONAL_RECORD_CHANGE_DECIDED',
        title: 'Personal record change rejected',
        body: notes ?? 'HR has rejected your requested personal-record change.',
        linkPath: '/profile',
      });
    }
    return rejected;
  }

  // "Departmental SOP library access (document register, dept-scoped)" —
  // identity-scoped to the CALLER's own org unit, reusing the existing
  // polymorphic document_register_entry rather than a bespoke SOP model.
  async listSopLibrary(actorUserId: string) {
    const employee = await this.getMyEmployee(actorUserId);
    return this.prisma.documentRegisterEntry.findMany({
      where: { entityType: 'DEPT_SOP', entityId: employee.orgUnitCode },
      orderBy: { uploadedAt: 'desc' },
    });
  }

  async uploadSop(actorUserId: string, documentType: string, fileReference: string) {
    await this.assertCapability(actorUserId, 'DOCUMENT_REGISTER', 'INITIATE', 'upload a departmental SOP');
    const employee = await this.getMyEmployee(actorUserId);
    return this.prisma.documentRegisterEntry.create({
      data: { entityType: 'DEPT_SOP', entityId: employee.orgUnitCode, documentType, fileReference, uploadedByUserId: actorUserId },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'profile_activity', entityId: activity, after: { functionCode, level } });
      throw new ProfileError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
