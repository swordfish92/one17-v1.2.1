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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notification_service_1 = require("../notification/notification.service");
const task_types_1 = require("./task.types");
let TaskService = class TaskService {
    prisma;
    notification;
    constructor(prisma, notification) {
        this.prisma = prisma;
        this.notification = notification;
    }
    async assignTask(input) {
        const assignee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.assigneeEmployeeId } });
        const assignerEmployee = await this.prisma.employee.findFirst({ where: { appUserId: input.assignedByUserId } });
        const isSelfAssigned = assignerEmployee?.id === assignee.id;
        const isManagerAssigning = assignerEmployee && assignee.reportsToId === assignerEmployee.id;
        if (!isSelfAssigned && !isManagerAssigning) {
            throw new task_types_1.TaskError(`Task assignment requires the assigner to be assigning to THEMSELVES or to their own direct report (org reports_to) — invariant 25's "senior -> direct-report assignment via org reports_to" — this assigner is neither for employee ${assignee.id}.`);
        }
        if (input.kpiDefinitionId)
            await this.assertKpiInScorecard(assignee.id, input.kpiDefinitionId);
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
    async systemAssignTask(input) {
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
    async listMine(employeeId) {
        return this.prisma.task.findMany({ where: { assigneeEmployeeId: employeeId }, orderBy: [{ status: 'asc' }, { dueAt: 'asc' }] });
    }
    async listDirectReportsTasks(managerEmployeeId) {
        const reports = await this.prisma.employee.findMany({ where: { reportsToId: managerEmployeeId }, select: { id: true } });
        if (reports.length === 0)
            return [];
        return this.prisma.task.findMany({
            where: { assigneeEmployeeId: { in: reports.map((r) => r.id) } },
            include: { assigneeEmployee: { select: { surname: true, firstName: true, middleName: true } } },
            orderBy: [{ status: 'asc' }, { dueAt: 'asc' }],
        });
    }
    async startTask(taskId, actorUserId) {
        const task = await this.assertOwnTask(taskId, actorUserId);
        if (task.status !== 'OPEN')
            throw new task_types_1.TaskError(`Task ${taskId} is ${task.status}, not OPEN — cannot start.`);
        return this.prisma.task.update({ where: { id: taskId }, data: { status: 'IN_PROGRESS', startedAt: new Date() } });
    }
    async completeTask(taskId, actorUserId) {
        const task = await this.assertOwnTask(taskId, actorUserId);
        if (task.status !== 'IN_PROGRESS' && task.status !== 'OPEN')
            throw new task_types_1.TaskError(`Task ${taskId} is ${task.status} — cannot complete.`);
        return this.prisma.task.update({ where: { id: taskId }, data: { status: 'DONE', completedAt: new Date() } });
    }
    async setDeliverableUrl(taskId, deliverableUrl, actorUserId) {
        await this.assertOwnTask(taskId, actorUserId);
        return this.prisma.task.update({ where: { id: taskId }, data: { deliverableUrl } });
    }
    async listSubordinateEmployeeIds(supervisorEmployeeId) {
        const all = [];
        let frontier = [supervisorEmployeeId];
        while (frontier.length > 0) {
            const reports = await this.prisma.employee.findMany({ where: { reportsToId: { in: frontier } }, select: { id: true } });
            const nextIds = reports.map((r) => r.id);
            all.push(...nextIds);
            frontier = nextIds;
        }
        return all;
    }
    async listSubordinateTasks(supervisorEmployeeId) {
        const subordinateIds = await this.listSubordinateEmployeeIds(supervisorEmployeeId);
        if (subordinateIds.length === 0)
            return [];
        return this.prisma.task.findMany({
            where: { assigneeEmployeeId: { in: subordinateIds } },
            include: { assigneeEmployee: { select: { surname: true, firstName: true, middleName: true, orgUnitCode: true } } },
            orderBy: [{ status: 'asc' }, { dueAt: 'asc' }],
        });
    }
    async listForTasksPage(actorUserId, filters) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return { mine: [], subordinates: [] };
        const [mine, subordinates] = await Promise.all([
            this.prisma.task.findMany({ where: { assigneeEmployeeId: employee.id }, orderBy: [{ status: 'asc' }, { dueAt: 'asc' }] }),
            this.listSubordinateTasks(employee.id),
        ]);
        const applyFilters = (rows) => rows.filter((t) => (!filters?.status || t.status === filters.status));
        const applyOrgUnitFilter = (rows) => rows.filter((t) => (!filters?.status || t.status === filters.status) &&
            (!filters?.orgUnitCode || t.assigneeEmployee.orgUnitCode === filters.orgUnitCode));
        return { mine: applyFilters(mine), subordinates: applyOrgUnitFilter(subordinates) };
    }
    async listAssignableEmployees(actorUserId) {
        const self = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!self)
            return [];
        const reports = await this.prisma.employee.findMany({
            where: { reportsToId: self.id },
            select: { id: true, surname: true, firstName: true, middleName: true },
        });
        return [{ id: self.id, surname: self.surname, firstName: self.firstName, middleName: self.middleName }, ...reports];
    }
    async assertOwnTask(taskId, actorUserId) {
        const task = await this.prisma.task.findUniqueOrThrow({ where: { id: taskId }, include: { assigneeEmployee: true } });
        if (task.assigneeEmployee.appUserId !== actorUserId) {
            throw new task_types_1.TaskError(`Task ${taskId} is not assigned to this user's own employee record.`);
        }
        return task;
    }
    async assertKpiInScorecard(assigneeEmployeeId, kpiDefinitionId) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: assigneeEmployeeId }, include: { position: true } });
        const tierMap = await this.prisma.cadreTierMap.findUnique({ where: { cadre: employee.position.cadre } });
        const kpi = await this.prisma.kpiDefinition.findUnique({ where: { id: kpiDefinitionId }, include: { kra: true } });
        if (!kpi || kpi.status !== 'ACTIVE') {
            throw new task_types_1.TaskError(`KPI ${kpiDefinitionId} does not exist or is not ACTIVE — cannot tag a task to it.`);
        }
        if (!tierMap || kpi.tier !== tierMap.tier || kpi.kra.orgUnitCode !== employee.position.orgUnitCode) {
            throw new task_types_1.TaskError(`KPI ${kpiDefinitionId} is not part of employee ${assigneeEmployeeId}'s active scorecard (tier/org-unit mismatch) — invariant 64(d)(i).`);
        }
    }
    async getMyDayVsScorecard(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return { tasks: [] };
        const tasks = await this.prisma.task.findMany({
            where: { assigneeEmployeeId: employee.id, status: { in: ['OPEN', 'IN_PROGRESS'] } },
            include: { kpiDefinition: { select: { id: true, kpiText: true, kraCode: true } } },
            orderBy: [{ dueAt: 'asc' }],
        });
        return { employeeId: employee.id, tasks };
    }
    async listTasksForKpi(employeeId, kpiDefinitionId) {
        return this.prisma.task.findMany({
            where: { assigneeEmployeeId: employeeId, kpiDefinitionId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createSubmission(actorUserId, input) {
        const submitter = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!submitter)
            throw new task_types_1.TaskError('Submission requires the caller to be a real Employee.');
        if (!submitter.reportsToId)
            throw new task_types_1.TaskError(`Employee ${submitter.id} has no supervisor (reports_to) to submit to.`);
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
    async listMySubmissions(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return [];
        return this.prisma.taskSubmission.findMany({ where: { submittedByEmployeeId: employee.id }, orderBy: { createdAt: 'desc' } });
    }
    async listSubmissionsToDecide(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return [];
        return this.prisma.taskSubmission.findMany({
            where: { supervisorEmployeeId: employee.id, status: 'PENDING' },
            include: { submittedBy: { select: { surname: true, firstName: true, middleName: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async acceptSubmission(submissionId, actorUserId) {
        const submission = await this.prisma.taskSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.status !== 'PENDING')
            throw new task_types_1.TaskError(`Submission ${submissionId} is ${submission.status}, not PENDING.`);
        const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!supervisor || supervisor.id !== submission.supervisorEmployeeId) {
            throw new task_types_1.TaskError(`Only the submission's own supervisor may accept it.`);
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
    async declineSubmission(submissionId, actorUserId) {
        const submission = await this.prisma.taskSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.status !== 'PENDING')
            throw new task_types_1.TaskError(`Submission ${submissionId} is ${submission.status}, not PENDING.`);
        const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!supervisor || supervisor.id !== submission.supervisorEmployeeId) {
            throw new task_types_1.TaskError(`Only the submission's own supervisor may decline it.`);
        }
        return this.prisma.taskSubmission.update({ where: { id: submissionId }, data: { status: 'DECLINED', decidedAt: new Date() } });
    }
    async runEscalationSweep(now) {
        const config = await this.prisma.taskEscalationConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
        const openTasks = await this.prisma.task.findMany({
            where: { status: { in: ['OPEN', 'IN_PROGRESS'] }, dueAt: { not: null } },
            include: { assigneeEmployee: true },
        });
        let amberFired = 0;
        let defaulted = 0;
        for (const task of openTasks) {
            const dueAt = task.dueAt;
            if (now > dueAt) {
                await this.defaultTask(task.id);
                defaulted++;
                continue;
            }
            if (task.amberNotifiedAt)
                continue;
            const totalWindowMs = dueAt.getTime() - task.createdAt.getTime();
            if (totalWindowMs <= 0)
                continue;
            const elapsedPct = ((now.getTime() - task.createdAt.getTime()) / totalWindowMs) * 100;
            if (elapsedPct >= config.amberThresholdPct) {
                await this.fireAmberNotice(task.id, task.title, task.assigneeEmployee.appUserId);
                amberFired++;
            }
        }
        return { checked: openTasks.length, amberFired, defaulted };
    }
    async fireAmberNotice(taskId, title, assigneeAppUserId) {
        await this.prisma.task.update({ where: { id: taskId }, data: { amberNotifiedAt: new Date() } });
        const recipients = new Set();
        if (assigneeAppUserId)
            recipients.add(assigneeAppUserId);
        for (const userId of await this.roleHolderUserIds('COMPLIANCE'))
            recipients.add(userId);
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
    async defaultTask(taskId) {
        const task = await this.prisma.task.findUniqueOrThrow({ where: { id: taskId }, include: { assigneeEmployee: true } });
        if (task.status === 'DEFAULTED')
            return;
        await this.prisma.task.update({ where: { id: taskId }, data: { status: 'DEFAULTED', defaultedAt: new Date() } });
        const recipients = new Set();
        for (const userId of await this.roleHolderUserIds('HR_ADMIN'))
            recipients.add(userId);
        for (const userId of await this.roleHolderUserIds('COMPLIANCE'))
            recipients.add(userId);
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
    async roleHolderUserIds(roleCode) {
        const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
        return holders.map((h) => h.userId);
    }
    async countDefaultedTasks(employeeId) {
        return this.prisma.task.count({ where: { assigneeEmployeeId: employeeId, status: 'DEFAULTED' } });
    }
    async listEmployeeIdsWithDefaultedTasks() {
        const rows = await this.prisma.task.findMany({ where: { status: 'DEFAULTED' }, select: { assigneeEmployeeId: true }, distinct: ['assigneeEmployeeId'] });
        return rows.map((r) => r.assigneeEmployeeId);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_service_1.NotificationService])
], TaskService);
//# sourceMappingURL=task.service.js.map