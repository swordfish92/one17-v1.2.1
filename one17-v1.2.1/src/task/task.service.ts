import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { AssignTaskInput, SystemAssignTaskInput, TaskError } from './task.types';

// Invariant 17 Wave-0 skeleton, invariant 25/29(a): "senior -> direct-report
// assignment via org reports_to, time tracking." Escalation (70%-elapsed
// AMBER, breach DEFAULT — invariant 25(1), Check-6 reminder-ladder tranche)
// extends this additively below.
@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notification: NotificationService,
  ) {}

  async assignTask(input: AssignTaskInput) {
    const assignee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.assigneeEmployeeId } });
    const assignerEmployee = await this.prisma.employee.findFirst({ where: { appUserId: input.assignedByUserId } });

    const isSelfAssigned = assignerEmployee?.id === assignee.id;
    const isManagerAssigning = assignerEmployee && assignee.reportsToId === assignerEmployee.id;
    if (!isSelfAssigned && !isManagerAssigning) {
      throw new TaskError(
        `Task assignment requires the assigner to be assigning to THEMSELVES or to their own direct report (org reports_to) — invariant 25's "senior -> direct-report assignment via org reports_to" — this assigner is neither for employee ${assignee.id}.`,
      );
    }
    if (input.kpiDefinitionId) await this.assertKpiInScorecard(assignee.id, input.kpiDefinitionId);

    const task = await this.prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
        assigneeEmployeeId: input.assigneeEmployeeId,
        assignedByUserId: input.assignedByUserId,
        dueAt: input.dueAt,
        deliverableUrl: input.deliverableUrl,
        kpiDefinitionId: input.kpiDefinitionId,
      },
    });

    if (assignee.appUserId && assignee.appUserId !== input.assignedByUserId) {
      await this.notification.create({
        recipientUserId: assignee.appUserId,
        type: 'TASK_ASSIGNED',
        title: 'New task assigned',
        body: input.title,
        linkPath: '/profile',
      });
    }
    return task;
  }

  // Invariant 36(a): SYSTEM-triggered deliverables (payment-reminder call
  // tasks, credit-bureau sync tasks) with a REAL, specific assignee
  // (file-ownership as data) — the reports_to check does not apply because
  // the assigner is a scheduled job, not a person whose managerial
  // relationship could be violated. Narrow, deliberate exception; never
  // used for a human-initiated assignment.
  async systemAssignTask(input: SystemAssignTaskInput) {
    const assignee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.assigneeEmployeeId } });
    const task = await this.prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
        assigneeEmployeeId: input.assigneeEmployeeId,
        assignedByUserId: input.assignedByUserId,
        dueAt: input.dueAt,
        deliverableUrl: input.deliverableUrl,
      },
    });
    if (assignee.appUserId) {
      await this.notification.create({
        recipientUserId: assignee.appUserId,
        type: 'TASK_ASSIGNED',
        title: 'New task assigned',
        body: input.title,
        linkPath: input.linkPath ?? '/profile',
      });
    }
    return task;
  }

  async listMine(employeeId: string) {
    return this.prisma.task.findMany({ where: { assigneeEmployeeId: employeeId }, orderBy: [{ status: 'asc' }, { dueAt: 'asc' }] });
  }

  // "Managers additionally see direct-reports' task/SLA summaries (org
  // reports_to)" — invariant 29(a).
  async listDirectReportsTasks(managerEmployeeId: string) {
    const reports = await this.prisma.employee.findMany({ where: { reportsToId: managerEmployeeId }, select: { id: true } });
    if (reports.length === 0) return [];
    return this.prisma.task.findMany({
      where: { assigneeEmployeeId: { in: reports.map((r) => r.id) } },
      include: { assigneeEmployee: { select: { surname: true, firstName: true, middleName: true } } },
      orderBy: [{ status: 'asc' }, { dueAt: 'asc' }],
    });
  }

  async startTask(taskId: string, actorUserId: string) {
    const task = await this.assertOwnTask(taskId, actorUserId);
    if (task.status !== 'OPEN') throw new TaskError(`Task ${taskId} is ${task.status}, not OPEN — cannot start.`);
    return this.prisma.task.update({ where: { id: taskId }, data: { status: 'IN_PROGRESS', startedAt: new Date() } });
  }

  async completeTask(taskId: string, actorUserId: string) {
    const task = await this.assertOwnTask(taskId, actorUserId);
    if (task.status !== 'IN_PROGRESS' && task.status !== 'OPEN') throw new TaskError(`Task ${taskId} is ${task.status} — cannot complete.`);
    return this.prisma.task.update({ where: { id: taskId }, data: { status: 'DONE', completedAt: new Date() } });
  }

  // Invariant 55(c): "hyperlinked deliverables" — the assignee sets this
  // once the actual deliverable exists (a document, a register row, an
  // external link); ownership-gated same as start/complete, not a
  // capability, since it's the assignee documenting their own output.
  async setDeliverableUrl(taskId: string, deliverableUrl: string, actorUserId: string) {
    await this.assertOwnTask(taskId, actorUserId);
    return this.prisma.task.update({ where: { id: taskId }, data: { deliverableUrl } });
  }

  // Invariant 55(c): "org-unit views for supervisors" — unlike
  // listDirectReportsTasks (one hop only, used by the Profile Hub's
  // existing summary card), this walks the FULL reporting subtree so a
  // senior manager can see every task belonging to anyone under them,
  // not just their immediate reports. No recursive-CTE dependency —
  // Employee.reportsToId chains are shallow (a handful of levels in any
  // real org), so a plain breadth-first walk in application code is both
  // simpler and easier to reason about than $queryRaw.
  async listSubordinateEmployeeIds(supervisorEmployeeId: string): Promise<string[]> {
    const all: string[] = [];
    let frontier = [supervisorEmployeeId];
    while (frontier.length > 0) {
      const reports = await this.prisma.employee.findMany({ where: { reportsToId: { in: frontier } }, select: { id: true } });
      const nextIds = reports.map((r) => r.id);
      all.push(...nextIds);
      frontier = nextIds;
    }
    return all;
  }

  async listSubordinateTasks(supervisorEmployeeId: string) {
    const subordinateIds = await this.listSubordinateEmployeeIds(supervisorEmployeeId);
    if (subordinateIds.length === 0) return [];
    return this.prisma.task.findMany({
      where: { assigneeEmployeeId: { in: subordinateIds } },
      include: { assigneeEmployee: { select: { surname: true, firstName: true, middleName: true, orgUnitCode: true } } },
      orderBy: [{ status: 'asc' }, { dueAt: 'asc' }],
    });
  }

  // Invariant 55(c): the dedicated Tasks page's own filtered view — "my
  // tasks + my whole subtree's tasks," union'd, with optional status/
  // org-unit filters applied app-side (the result set is small enough per
  // caller that a DB-level filter isn't worth the extra query-shape
  // complexity). actorUserId resolves to that user's OWN employee record
  // only — never a caller-supplied employeeId, same realm-isolation
  // discipline as every portal ownership check in this codebase.
  async listForTasksPage(actorUserId: string, filters?: { status?: string; orgUnitCode?: string }) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return { mine: [], subordinates: [] };
    const [mine, subordinates] = await Promise.all([
      this.prisma.task.findMany({ where: { assigneeEmployeeId: employee.id }, orderBy: [{ status: 'asc' }, { dueAt: 'asc' }] }),
      this.listSubordinateTasks(employee.id),
    ]);
    const applyFilters = (rows: typeof mine) => rows.filter((t) =>
      (!filters?.status || t.status === filters.status),
    );
    const applyOrgUnitFilter = (rows: typeof subordinates) => rows.filter((t) =>
      (!filters?.status || t.status === filters.status) &&
      (!filters?.orgUnitCode || t.assigneeEmployee.orgUnitCode === filters.orgUnitCode),
    );
    return { mine: applyFilters(mine), subordinates: applyOrgUnitFilter(subordinates) };
  }

  // Invariant 55(c): the Tasks page's own assignee picker — exactly the set
  // assignTask's reports-to check would accept (self + direct reports),
  // so the UI never offers a target the backend would reject.
  async listAssignableEmployees(actorUserId: string) {
    const self = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!self) return [];
    const reports = await this.prisma.employee.findMany({
      where: { reportsToId: self.id },
      select: { id: true, surname: true, firstName: true, middleName: true },
    });
    return [{ id: self.id, surname: self.surname, firstName: self.firstName, middleName: self.middleName }, ...reports];
  }

  private async assertOwnTask(taskId: string, actorUserId: string) {
    const task = await this.prisma.task.findUniqueOrThrow({ where: { id: taskId }, include: { assigneeEmployee: true } });
    if (task.assigneeEmployee.appUserId !== actorUserId) {
      throw new TaskError(`Task ${taskId} is not assigned to this user's own employee record.`);
    }
    return task;
  }

  // Invariant 64(d)(i): "a task may be tagged to a KPI/KRA from the
  // assignee's ACTIVE scorecard." Mirrors PmsService.getRoleScorecard's own
  // resolution filter (tier from cadre_tier_map, org-unit from the KRA)
  // directly rather than importing PmsService, keeping TaskModule's
  // dependency graph unchanged.
  private async assertKpiInScorecard(assigneeEmployeeId: string, kpiDefinitionId: string) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: assigneeEmployeeId }, include: { position: true } });
    const tierMap = await this.prisma.cadreTierMap.findUnique({ where: { cadre: employee.position.cadre } });
    const kpi = await this.prisma.kpiDefinition.findUnique({ where: { id: kpiDefinitionId }, include: { kra: true } });
    if (!kpi || kpi.status !== 'ACTIVE') {
      throw new TaskError(`KPI ${kpiDefinitionId} does not exist or is not ACTIVE — cannot tag a task to it.`);
    }
    if (!tierMap || kpi.tier !== tierMap.tier || kpi.kra.orgUnitCode !== employee.position.orgUnitCode) {
      throw new TaskError(`KPI ${kpiDefinitionId} is not part of employee ${assigneeEmployeeId}'s active scorecard (tier/org-unit mismatch) — invariant 64(d)(i).`);
    }
  }

  // Invariant 64(d)(i): "'my day vs my scorecard' view (KPIs with/without
  // scheduled work)." Every OPEN/IN_PROGRESS task the caller holds, grouped
  // by kpiDefinitionId — untagged tasks fall under a null bucket ("my day"
  // work with no KPI linkage), and any KPI with zero tasks still surfaces
  // (via the caller passing the full scorecard array) so a manager can see
  // which KPIs have no scheduled work at all this period.
  async getMyDayVsScorecard(actorUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return { tasks: [] };
    const tasks = await this.prisma.task.findMany({
      where: { assigneeEmployeeId: employee.id, status: { in: ['OPEN', 'IN_PROGRESS'] } },
      include: { kpiDefinition: { select: { id: true, kpiText: true, kraCode: true } } },
      orderBy: [{ dueAt: 'asc' }],
    });
    return { employeeId: employee.id, tasks };
  }

  // Invariant 64(d)(i): "task history surfaces as evidence per KPI in the
  // appraisal cycle detail." All tasks ever tagged to this KPI for this
  // employee, most-recent first — completed ones are the actual evidence,
  // open ones show work-in-progress.
  async listTasksForKpi(employeeId: string, kpiDefinitionId: string) {
    return this.prisma.task.findMany({
      where: { assigneeEmployeeId: employeeId, kpiDefinitionId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ==========================================================================
  // Invariant 64(d)(iii): upline submissions -- "a subordinate initiates a
  // SUBMISSION/REQUEST to their supervisor ... it lands in the supervisor's
  // workspace to ACCEPT into their own task list; never a subordinate-
  // ordered task on a senior." A SEPARATE model from Task (see schema
  // comment) -- a submission only becomes a Task at accept time, and only
  // the supervisor's own acceptance creates it (self-assigned, same as any
  // other self-created task).
  // ==========================================================================
  async createSubmission(actorUserId: string, input: { title: string; description?: string; deliverableUrl?: string }) {
    const submitter = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!submitter) throw new TaskError('Submission requires the caller to be a real Employee.');
    if (!submitter.reportsToId) throw new TaskError(`Employee ${submitter.id} has no supervisor (reports_to) to submit to.`);
    const submission = await this.prisma.taskSubmission.create({
      data: {
        title: input.title,
        description: input.description,
        deliverableUrl: input.deliverableUrl,
        submittedByEmployeeId: submitter.id,
        supervisorEmployeeId: submitter.reportsToId,
      },
    });
    const supervisor = await this.prisma.employee.findUniqueOrThrow({ where: { id: submitter.reportsToId } });
    if (supervisor.appUserId) {
      await this.notification.create({
        recipientUserId: supervisor.appUserId,
        type: 'TASK_ASSIGNED',
        title: 'New submission awaiting your acceptance',
        body: input.title,
        linkPath: '/profile',
      });
    }
    return submission;
  }

  async listMySubmissions(actorUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return [];
    return this.prisma.taskSubmission.findMany({ where: { submittedByEmployeeId: employee.id }, orderBy: { createdAt: 'desc' } });
  }

  async listSubmissionsToDecide(actorUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return [];
    return this.prisma.taskSubmission.findMany({
      where: { supervisorEmployeeId: employee.id, status: 'PENDING' },
      include: { submittedBy: { select: { surname: true, firstName: true, middleName: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Accepting creates a Task self-assigned to the supervisor (assignee AND
  // assignedBy both the supervisor) -- "into their own task list," never
  // assigned back to the subordinate, which would invert the hierarchy this
  // whole model exists to prevent.
  async acceptSubmission(submissionId: string, actorUserId: string) {
    const submission = await this.prisma.taskSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.status !== 'PENDING') throw new TaskError(`Submission ${submissionId} is ${submission.status}, not PENDING.`);
    const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!supervisor || supervisor.id !== submission.supervisorEmployeeId) {
      throw new TaskError(`Only the submission's own supervisor may accept it.`);
    }
    const task = await this.prisma.task.create({
      data: {
        title: submission.title,
        description: submission.description,
        assigneeEmployeeId: supervisor.id,
        assignedByUserId: actorUserId,
        deliverableUrl: submission.deliverableUrl,
      },
    });
    const updated = await this.prisma.taskSubmission.update({
      where: { id: submissionId },
      data: { status: 'ACCEPTED', acceptedTaskId: task.id, decidedAt: new Date() },
    });
    return { submission: updated, task };
  }

  async declineSubmission(submissionId: string, actorUserId: string) {
    const submission = await this.prisma.taskSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.status !== 'PENDING') throw new TaskError(`Submission ${submissionId} is ${submission.status}, not PENDING.`);
    const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!supervisor || supervisor.id !== submission.supervisorEmployeeId) {
      throw new TaskError(`Only the submission's own supervisor may decline it.`);
    }
    return this.prisma.taskSubmission.update({ where: { id: submissionId }, data: { status: 'DECLINED', decidedAt: new Date() } });
  }

  // ==========================================================================
  // Escalation ladder (invariant 25(1)): "at 70% of allotted time elapsed
  // uncompleted -> AMBER to assignee AND Compliance" (fires exactly once
  // per task, guarded by amberNotifiedAt) "· at breach (past due) -> DEFAULT
  // notice to HR + Compliance, task marked DEFAULTED (immutable event)."
  // Allotted time = createdAt -> dueAt; tasks with no dueAt never escalate
  // (there is no window to compute a percentage of).
  // ==========================================================================
  async runEscalationSweep(now: Date): Promise<{ checked: number; amberFired: number; defaulted: number }> {
    const config = await this.prisma.taskEscalationConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const openTasks = await this.prisma.task.findMany({
      where: { status: { in: ['OPEN', 'IN_PROGRESS'] }, dueAt: { not: null } },
      include: { assigneeEmployee: true },
    });

    let amberFired = 0;
    let defaulted = 0;
    for (const task of openTasks) {
      const dueAt = task.dueAt!;
      if (now > dueAt) {
        await this.defaultTask(task.id);
        defaulted++;
        continue;
      }
      if (task.amberNotifiedAt) continue;
      const totalWindowMs = dueAt.getTime() - task.createdAt.getTime();
      if (totalWindowMs <= 0) continue;
      const elapsedPct = ((now.getTime() - task.createdAt.getTime()) / totalWindowMs) * 100;
      if (elapsedPct >= config.amberThresholdPct) {
        await this.fireAmberNotice(task.id, task.title, task.assigneeEmployee.appUserId);
        amberFired++;
      }
    }
    return { checked: openTasks.length, amberFired, defaulted };
  }

  private async fireAmberNotice(taskId: string, title: string, assigneeAppUserId: string | null) {
    await this.prisma.task.update({ where: { id: taskId }, data: { amberNotifiedAt: new Date() } });
    const recipients = new Set<string>();
    if (assigneeAppUserId) recipients.add(assigneeAppUserId);
    for (const userId of await this.roleHolderUserIds('COMPLIANCE')) recipients.add(userId);
    for (const recipientUserId of recipients) {
      await this.notification.create({
        recipientUserId,
        type: 'GENERIC',
        title: 'Task at 70% of allotted time — AMBER',
        body: `"${title}" is at or past the governed AMBER threshold with time still remaining before its due date.`,
        linkPath: '/profile',
      });
    }
  }

  // The one time a task transitions to DEFAULTED — immutable per spec (no
  // method anywhere clears status or defaultedAt back off a defaulted task).
  private async defaultTask(taskId: string) {
    const task = await this.prisma.task.findUniqueOrThrow({ where: { id: taskId }, include: { assigneeEmployee: true } });
    if (task.status === 'DEFAULTED') return;
    await this.prisma.task.update({ where: { id: taskId }, data: { status: 'DEFAULTED', defaultedAt: new Date() } });
    const recipients = new Set<string>();
    for (const userId of await this.roleHolderUserIds('HR_ADMIN')) recipients.add(userId);
    for (const userId of await this.roleHolderUserIds('COMPLIANCE')) recipients.add(userId);
    for (const recipientUserId of recipients) {
      await this.notification.create({
        recipientUserId,
        type: 'GENERIC',
        title: 'Task DEFAULTED',
        body: `"${task.title}" (assigned to employee ${task.assigneeEmployeeId}) passed its due date without completion — DEFAULTED, an immutable event.`,
        linkPath: '/profile',
      });
    }
  }

  private async roleHolderUserIds(roleCode: string): Promise<string[]> {
    const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
    return holders.map((h) => h.userId);
  }

  // Invariant 25(1): "defaults feed PMS automatically... task history is
  // already a declared AUTO KPI feed (SDS §3.6) and defaults enter the
  // behavioural gate / incentive impact per policy structure." Counts each
  // employee's CURRENT total DEFAULTED-task count (all-time, since a
  // default is immutable and this policy maps a cumulative count to a
  // severity — not a per-cycle reset, since HR's own policy config decides
  // the thresholds, not this method).
  async countDefaultedTasks(employeeId: string): Promise<number> {
    return this.prisma.task.count({ where: { assigneeEmployeeId: employeeId, status: 'DEFAULTED' } });
  }

  async listEmployeeIdsWithDefaultedTasks(): Promise<string[]> {
    const rows = await this.prisma.task.findMany({ where: { status: 'DEFAULTED' }, select: { assigneeEmployeeId: true }, distinct: ['assigneeEmployeeId'] });
    return rows.map((r) => r.assigneeEmployeeId);
  }
}
