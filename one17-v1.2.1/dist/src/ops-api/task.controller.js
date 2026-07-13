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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const task_service_1 = require("../task/task.service");
const ops_api_types_1 = require("./ops-api.types");
let TaskController = class TaskController {
    task;
    constructor(task) {
        this.task = task;
    }
    async list(status, orgUnitCode, user) {
        return this.task.listForTasksPage(user.userId, { status, orgUnitCode });
    }
    async listAssignableEmployees(user) {
        return this.task.listAssignableEmployees(user.userId);
    }
    async assign(dto, user) {
        return this.task.assignTask({
            title: dto.title,
            description: dto.description,
            assigneeEmployeeId: dto.assigneeEmployeeId,
            dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
            deliverableUrl: dto.deliverableUrl,
            assignedByUserId: user.userId,
            kpiDefinitionId: dto.kpiDefinitionId,
        });
    }
    async getMyDayVsScorecard(user) {
        return this.task.getMyDayVsScorecard(user.userId);
    }
    async listTasksForKpi(kpiDefinitionId, employeeId) {
        return this.task.listTasksForKpi(employeeId, kpiDefinitionId);
    }
    async createSubmission(dto, user) {
        return this.task.createSubmission(user.userId, dto);
    }
    async listMySubmissions(user) {
        return this.task.listMySubmissions(user.userId);
    }
    async listSubmissionsToDecide(user) {
        return this.task.listSubmissionsToDecide(user.userId);
    }
    async acceptSubmission(id, user) {
        return this.task.acceptSubmission(id, user.userId);
    }
    async declineSubmission(id, user) {
        return this.task.declineSubmission(id, user.userId);
    }
    async start(id, user) {
        return this.task.startTask(id, user.userId);
    }
    async complete(id, user) {
        return this.task.completeTask(id, user.userId);
    }
    async setDeliverableUrl(id, dto, user) {
        return this.task.setDeliverableUrl(id, dto.deliverableUrl, user.userId);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Query)('orgUnitCode')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('assignable-employees'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listAssignableEmployees", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AssignTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "assign", null);
__decorate([
    (0, common_1.Get)('my-day-vs-scorecard'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getMyDayVsScorecard", null);
__decorate([
    (0, common_1.Get)('kpi/:kpiDefinitionId/employee/:employeeId'),
    __param(0, (0, common_1.Param)('kpiDefinitionId')),
    __param(1, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listTasksForKpi", null);
__decorate([
    (0, common_1.Post)('submissions'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateSubmissionDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createSubmission", null);
__decorate([
    (0, common_1.Get)('submissions/mine'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listMySubmissions", null);
__decorate([
    (0, common_1.Get)('submissions/to-decide'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listSubmissionsToDecide", null);
__decorate([
    (0, common_1.Post)('submissions/:id/accept'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "acceptSubmission", null);
__decorate([
    (0, common_1.Post)('submissions/:id/decline'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "declineSubmission", null);
__decorate([
    (0, common_1.Post)(':id/start'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "start", null);
__decorate([
    (0, common_1.Post)(':id/complete'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "complete", null);
__decorate([
    (0, common_1.Post)(':id/deliverable-url'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetDeliverableUrlDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "setDeliverableUrl", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map