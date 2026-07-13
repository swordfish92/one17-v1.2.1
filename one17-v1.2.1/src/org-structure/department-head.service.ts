import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DepartmentHeadError, ProposeDepartmentHeadInput } from './department-head.types';

// Invariant 74(b)/(c) (CHECK27, v1.2): the governed "who leads this org
// unit" designation. HR_ADMIN proposes (DRAFT), MD_CEO approves (flips to
// ACTIVE and supersedes whatever was previously ACTIVE for the SAME org
// unit, in the same transaction -- "one active head per unit" is enforced
// here, never a DB constraint, matching the versioned-config precedent
// this table's shape borrows from). isActiveDepartmentHead() is the one
// method every future consumer (starting with DelegationService's
// CONTROLS_DASHBOARD dynamic grant) should call rather than re-deriving
// headship from reports-to/cadre -- per 74(c)'s own reuse instruction.
@Injectable()
export class DepartmentHeadService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  private async assertCapability(userId: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'DEPARTMENT_HEAD_DESIGNATION', level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'department_head_designation', entityId: activity, after: { functionCode: 'DEPARTMENT_HEAD_DESIGNATION', level } });
      throw new DepartmentHeadError(`User lacks ${level} authority on DEPARTMENT_HEAD_DESIGNATION (standing or delegated), required to ${activity}.`);
    }
  }

  async proposeDesignation(input: ProposeDepartmentHeadInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'INITIATE', 'propose a Department Head designation');

    const orgUnit = await this.prisma.orgUnit.findUnique({ where: { code: input.orgUnitCode } });
    if (!orgUnit) throw new DepartmentHeadError(`Org unit "${input.orgUnitCode}" does not exist.`);
    const employee = await this.prisma.employee.findUnique({ where: { id: input.employeeId } });
    if (!employee) throw new DepartmentHeadError(`Employee ${input.employeeId} does not exist.`);
    if (!employee.appUserId) {
      throw new DepartmentHeadError('This employee has no linked staff login (AppUser) -- Department Head access follows the designation to a real login, which does not exist for this record yet.');
    }

    const draft = await this.prisma.departmentHeadDesignation.create({
      data: {
        orgUnitCode: input.orgUnitCode,
        employeeId: input.employeeId,
        status: 'DRAFT',
        effectiveFrom: input.effectiveFrom ?? null,
        proposedByUserId: actorUserId,
      },
    });
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'DEPARTMENT_HEAD_DESIGNATION_APPROVAL',
      entityType: 'department_head_designation',
      entityId: draft.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.departmentHeadDesignation.update({
      where: { id: draft.id },
      data: { workflowInstanceId: workflowInstance.id },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'department_head_designation', entityId: updated.id, after: { orgUnitCode: input.orgUnitCode, employeeId: input.employeeId } });
    return updated;
  }

  async approveDesignation(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const draft = await this.prisma.departmentHeadDesignation.findFirstOrThrow({ where: { workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return draft;

    const activated = await this.prisma.$transaction(async (tx) => {
      // Invariant 74(b): "one active head per org unit" -- supersede
      // whatever was previously ACTIVE for this SAME org unit, in the
      // SAME transaction the new designation activates in, so there is
      // never a window with two simultaneously-ACTIVE heads.
      await tx.departmentHeadDesignation.updateMany({
        where: { orgUnitCode: draft.orgUnitCode, status: 'ACTIVE', id: { not: draft.id } },
        data: { status: 'SUPERSEDED', effectiveTo: new Date() },
      });
      return tx.departmentHeadDesignation.update({
        where: { id: draft.id },
        data: { status: 'ACTIVE', approvedByUserId: approverUserId, effectiveFrom: draft.effectiveFrom ?? new Date() },
      });
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'department_head_designation', entityId: activated.id, after: { status: 'ACTIVE', orgUnitCode: activated.orgUnitCode, employeeId: activated.employeeId } });
    return activated;
  }

  async listDesignations(orgUnitCode?: string) {
    return this.prisma.departmentHeadDesignation.findMany({
      where: orgUnitCode ? { orgUnitCode } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        employee: { select: { surname: true, firstName: true, middleName: true } },
        orgUnit: { select: { name: true } },
      },
    });
  }

  // Invariant 74(b): the dynamic grant DelegationService.hasCapability()
  // calls for CONTROLS_DASHBOARD VIEW -- an active designation for ANY org
  // unit qualifies (Enterprise Dashboard is one fixed institutional view,
  // not per-department), keyed off the CURRENT viewer's own AppUser id,
  // never a saved/cached role.
  async isActiveDepartmentHead(userId: string): Promise<boolean> {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: userId }, select: { id: true } });
    if (!employee) return false;
    const active = await this.prisma.departmentHeadDesignation.findFirst({ where: { employeeId: employee.id, status: 'ACTIVE' } });
    return !!active;
  }
}
