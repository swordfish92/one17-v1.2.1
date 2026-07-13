import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { TaskService } from '../task/task.service';
import { IssueBoardDirectiveInput, BoardDirectiveError } from './board-directive.types';

// Invariant 37(c)(ii): Section F — Board Escalations & Directives. "CS
// inserts Board/Committee directives -> each directive auto-creates a TASK
// to the MD with the Board's timeline -> MD delegates through the
// task-management system (delegation chain preserved, roll-up status
// visible to CS/Board view); directive lifecycle (ISSUED->ACKNOWLEDGED->
// IN-PROGRESS->COMPLETED->REPORTED-BACK) audit-trailed... status feeds SAU
// tracking (their KRA-3) + CEO dashboard exceptions." No new workflow
// machinery — reuses the EXISTING TaskService (assignTask/systemAssignTask
// already implement "senior -> direct-report... delegation" per invariant
// 25) and the existing audit_trail, exactly the same "compose, don't
// duplicate" pattern this codebase already follows everywhere else.
@Injectable()
export class BoardDirectiveService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly task: TaskService,
  ) {}

  async issueDirective(input: IssueBoardDirectiveInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE', 'issue a Board/Committee directive');
    // Deliberately NOT userRole.findFirst({roleCode:'MD_CEO'}) — on a
    // shared dev DB carrying years of smoke-test residue, multiple
    // MD_CEO-role AppUsers can exist (most with no Employee row at all,
    // since many smoke tests only need the CAPABILITY, not a real
    // employee). Resolve to the first MD_CEO that actually HAS an
    // Employee record — in production there is exactly one real MD_CEO,
    // so this is deterministic there; here it just skips role-only
    // test fixtures instead of crashing on whichever one findFirst
    // happened to return.
    const mdUserRoles = await this.prisma.userRole.findMany({ where: { roleCode: 'MD_CEO' } });
    if (mdUserRoles.length === 0) {
      throw new BoardDirectiveError('No user holds the MD_CEO role — cannot auto-create the directive task.');
    }
    const mdEmployee = await this.prisma.employee.findFirst({ where: { appUserId: { in: mdUserRoles.map((r) => r.userId) } } });
    if (!mdEmployee) {
      throw new BoardDirectiveError('No MD_CEO role holder has an Employee record — cannot assign a task.');
    }

    const directive = await this.prisma.boardDirective.create({
      data: {
        title: input.title,
        description: input.description,
        committeeTag: input.committeeTag,
        resolutionRef: input.resolutionRef,
        dueAt: input.dueAt,
        issuedByUserId: actorUserId,
      },
    });
    // systemAssignTask (not assignTask) — CS issuing a task to the MD is
    // not the "manager -> direct report" relationship assignTask's
    // reports_to gate checks; same documented exception the payment-
    // reminder call tasks already use (invariant 36a).
    const task = await this.task.systemAssignTask({
      assigneeEmployeeId: mdEmployee.id,
      assignedByUserId: actorUserId,
      title: `Board directive: ${input.title}`,
      description: input.description,
      dueAt: input.dueAt,
      linkPath: '/governance/board-directives',
    });
    await this.prisma.task.update({ where: { id: task.id }, data: { directiveId: directive.id } });
    const updated = await this.prisma.boardDirective.update({ where: { id: directive.id }, data: { taskId: task.id } });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_directive', entityId: directive.id, after: { title: input.title, committeeTag: input.committeeTag, dueAt: input.dueAt } });
    return updated;
  }

  // Ownership-gated, not capability-gated — the SAME pattern
  // TaskService.assertOwnTask uses: only the specific person the root task
  // was assigned to (the addressed MD) may acknowledge their own directive.
  async acknowledgeDirective(directiveId: string, actorUserId: string) {
    const directive = await this.prisma.boardDirective.findUniqueOrThrow({
      where: { id: directiveId },
      include: { rootTask: { include: { assigneeEmployee: true } } },
    });
    if (!directive.rootTask || directive.rootTask.assigneeEmployee.appUserId !== actorUserId) {
      throw new BoardDirectiveError(`Directive ${directiveId}'s root task is not assigned to this user's own employee record — only the addressed MD can acknowledge.`);
    }
    if (directive.status !== 'ISSUED') {
      throw new BoardDirectiveError(`Directive ${directiveId} is ${directive.status}, not ISSUED — cannot acknowledge.`);
    }
    const updated = await this.prisma.boardDirective.update({
      where: { id: directiveId },
      data: { status: 'ACKNOWLEDGED', acknowledgedAt: new Date(), acknowledgedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: 'ACKNOWLEDGED' } });
    return updated;
  }

  // Roll-up derivation ("roll-up status visible to CS/Board view") — reads
  // EVERY Task sharing this directiveId (the root MD task plus any
  // delegated sub-tasks) and derives IN_PROGRESS/COMPLETED, never hand-set,
  // same "derive live off real state" doctrine as
  // CounterpartyService.deriveApplicationStage(). Persisted (not just
  // computed at read time) so each real transition gets its own
  // audit_trail row per "directive lifecycle... audit-trailed."
  async refreshDirectiveStatus(directiveId: string, actorUserId: string) {
    const directive = await this.prisma.boardDirective.findUniqueOrThrow({ where: { id: directiveId } });
    if (directive.status === 'ISSUED' || directive.status === 'REPORTED_BACK') return directive;
    const tasks = await this.prisma.task.findMany({ where: { directiveId } });
    if (tasks.length === 0) return directive;
    const allDone = tasks.every((t) => t.status === 'DONE');
    const anyStarted = tasks.some((t) => t.status === 'IN_PROGRESS' || t.status === 'DONE');
    let nextStatus = directive.status;
    if (allDone) nextStatus = 'COMPLETED';
    else if (anyStarted && directive.status === 'ACKNOWLEDGED') nextStatus = 'IN_PROGRESS';
    if (nextStatus === directive.status) return directive;
    const updated = await this.prisma.boardDirective.update({ where: { id: directiveId }, data: { status: nextStatus } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: nextStatus } });
    return updated;
  }

  async reportDirectiveBack(directiveId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE', 'report a Board directive back as closed');
    const directive = await this.refreshDirectiveStatus(directiveId, actorUserId);
    if (directive.status !== 'COMPLETED') {
      throw new BoardDirectiveError(`Directive ${directiveId} is ${directive.status}, not COMPLETED — cannot report back until every delegated task is DONE.`);
    }
    const updated = await this.prisma.boardDirective.update({
      where: { id: directiveId },
      data: { status: 'REPORTED_BACK', reportedBackAt: new Date(), reportedBackByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: 'REPORTED_BACK' } });
    return updated;
  }

  async listDirectives(actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'VIEW', 'view the Board directive register');
    return this.prisma.boardDirective.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        issuedBy: { select: { displayName: true } },
        tasks: { select: { id: true, title: true, status: true, assigneeEmployeeId: true } },
      },
    });
  }

  // Invariant 37(c)(ii): "status feeds... CEO dashboard exceptions" — past
  // due, not yet REPORTED_BACK. No capability gate — read by
  // DashboardService itself (an internal composition call), same as every
  // other dashboard data source.
  async listOverdueDirectives() {
    return this.prisma.boardDirective.findMany({
      where: { dueAt: { lt: new Date() }, status: { notIn: ['REPORTED_BACK'] } },
      orderBy: { dueAt: 'asc' },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_directive_activity', entityId: activity, after: { functionCode, level } });
      throw new BoardDirectiveError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
