export class TaskError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TaskError';
  }
}

export interface AssignTaskInput {
  title: string;
  description?: string;
  assigneeEmployeeId: string;
  dueAt?: Date;
  assignedByUserId: string;
  deliverableUrl?: string;
  // Invariant 64(d)(i): "a task may be tagged to a KPI/KRA from the
  // assignee's ACTIVE scorecard." Validated against PmsService.
  // getRoleScorecard at assignment time.
  kpiDefinitionId?: string;
}

// Invariant 36(a): the one deliberate exception to assignTask()'s reports_to
// rule — the "assigner" is a scheduled job, not a person, so no managerial
// relationship exists to check. The assignee is still a REAL, specific
// employee (file-ownership as data), never a role broadcast.
export interface SystemAssignTaskInput {
  title: string;
  description?: string;
  assigneeEmployeeId: string;
  assignedByUserId: string;
  dueAt?: Date;
  linkPath?: string;
  // Invariant 51(b-vii)/(b-viii)/(c) (CHECK13): lets a sweep both link the
  // notification AND persist the same URL on the Task row itself, so a
  // re-run can dedupe ("does an OPEN task for this exact case already
  // exist") without inventing a second identity scheme.
  deliverableUrl?: string;
}
