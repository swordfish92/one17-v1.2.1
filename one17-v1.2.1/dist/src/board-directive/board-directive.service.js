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
exports.BoardDirectiveService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const task_service_1 = require("../task/task.service");
const board_directive_types_1 = require("./board-directive.types");
let BoardDirectiveService = class BoardDirectiveService {
    prisma;
    audit;
    delegation;
    task;
    constructor(prisma, audit, delegation, task) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.task = task;
    }
    async issueDirective(input, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE', 'issue a Board/Committee directive');
        const mdUserRoles = await this.prisma.userRole.findMany({ where: { roleCode: 'MD_CEO' } });
        if (mdUserRoles.length === 0) {
            throw new board_directive_types_1.BoardDirectiveError('No user holds the MD_CEO role — cannot auto-create the directive task.');
        }
        const mdEmployee = await this.prisma.employee.findFirst({ where: { appUserId: { in: mdUserRoles.map((r) => r.userId) } } });
        if (!mdEmployee) {
            throw new board_directive_types_1.BoardDirectiveError('No MD_CEO role holder has an Employee record — cannot assign a task.');
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
    async acknowledgeDirective(directiveId, actorUserId) {
        const directive = await this.prisma.boardDirective.findUniqueOrThrow({
            where: { id: directiveId },
            include: { rootTask: { include: { assigneeEmployee: true } } },
        });
        if (!directive.rootTask || directive.rootTask.assigneeEmployee.appUserId !== actorUserId) {
            throw new board_directive_types_1.BoardDirectiveError(`Directive ${directiveId}'s root task is not assigned to this user's own employee record — only the addressed MD can acknowledge.`);
        }
        if (directive.status !== 'ISSUED') {
            throw new board_directive_types_1.BoardDirectiveError(`Directive ${directiveId} is ${directive.status}, not ISSUED — cannot acknowledge.`);
        }
        const updated = await this.prisma.boardDirective.update({
            where: { id: directiveId },
            data: { status: 'ACKNOWLEDGED', acknowledgedAt: new Date(), acknowledgedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: 'ACKNOWLEDGED' } });
        return updated;
    }
    async refreshDirectiveStatus(directiveId, actorUserId) {
        const directive = await this.prisma.boardDirective.findUniqueOrThrow({ where: { id: directiveId } });
        if (directive.status === 'ISSUED' || directive.status === 'REPORTED_BACK')
            return directive;
        const tasks = await this.prisma.task.findMany({ where: { directiveId } });
        if (tasks.length === 0)
            return directive;
        const allDone = tasks.every((t) => t.status === 'DONE');
        const anyStarted = tasks.some((t) => t.status === 'IN_PROGRESS' || t.status === 'DONE');
        let nextStatus = directive.status;
        if (allDone)
            nextStatus = 'COMPLETED';
        else if (anyStarted && directive.status === 'ACKNOWLEDGED')
            nextStatus = 'IN_PROGRESS';
        if (nextStatus === directive.status)
            return directive;
        const updated = await this.prisma.boardDirective.update({ where: { id: directiveId }, data: { status: nextStatus } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: nextStatus } });
        return updated;
    }
    async reportDirectiveBack(directiveId, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE', 'report a Board directive back as closed');
        const directive = await this.refreshDirectiveStatus(directiveId, actorUserId);
        if (directive.status !== 'COMPLETED') {
            throw new board_directive_types_1.BoardDirectiveError(`Directive ${directiveId} is ${directive.status}, not COMPLETED — cannot report back until every delegated task is DONE.`);
        }
        const updated = await this.prisma.boardDirective.update({
            where: { id: directiveId },
            data: { status: 'REPORTED_BACK', reportedBackAt: new Date(), reportedBackByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_directive', entityId: directiveId, after: { status: 'REPORTED_BACK' } });
        return updated;
    }
    async listDirectives(actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_DIRECTIVE_MANAGEMENT', 'VIEW', 'view the Board directive register');
        return this.prisma.boardDirective.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                issuedBy: { select: { displayName: true } },
                tasks: { select: { id: true, title: true, status: true, assigneeEmployeeId: true } },
            },
        });
    }
    async listOverdueDirectives() {
        return this.prisma.boardDirective.findMany({
            where: { dueAt: { lt: new Date() }, status: { notIn: ['REPORTED_BACK'] } },
            orderBy: { dueAt: 'asc' },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_directive_activity', entityId: activity, after: { functionCode, level } });
            throw new board_directive_types_1.BoardDirectiveError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BoardDirectiveService = BoardDirectiveService;
exports.BoardDirectiveService = BoardDirectiveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        task_service_1.TaskService])
], BoardDirectiveService);
//# sourceMappingURL=board-directive.service.js.map