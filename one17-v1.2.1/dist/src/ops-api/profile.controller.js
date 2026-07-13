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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const profile_service_1 = require("../profile/profile.service");
const task_service_1 = require("../task/task.service");
const notification_service_1 = require("../notification/notification.service");
const pms_service_1 = require("../pms/pms.service");
let ProfileController = class ProfileController {
    profile;
    task;
    notification;
    pms;
    constructor(profile, task, notification, pms) {
        this.profile = profile;
        this.task = task;
        this.notification = notification;
        this.pms = pms;
    }
    async getMe(user) {
        const employee = await this.profile.getMyEmployee(user.userId);
        const [personalRecord, myTasks, directReportsTasks, notifications, performance, sopLibrary, changeRequests] = await Promise.all([
            this.profile.getPersonalRecord(employee.id, user.userId),
            this.task.listMine(employee.id),
            this.task.listDirectReportsTasks(employee.id),
            this.notification.listMine(user.userId),
            this.pms.getMyPerformanceSummary(user.userId),
            this.profile.listSopLibrary(user.userId),
            this.profile.listMyChangeRequests(employee.id),
        ]);
        return { employee, personalRecord, myTasks, directReportsTasks, notifications, performance, sopLibrary, changeRequests };
    }
    async updateFreeFields(dto, user) {
        const employee = await this.profile.getMyEmployee(user.userId);
        return this.profile.updateFreeEditFields(employee.id, user.userId, dto);
    }
    async requestChange(dto, user) {
        const employee = await this.profile.getMyEmployee(user.userId);
        return this.profile.requestGatedChange(employee.id, user.userId, dto);
    }
    async assignTask(dto, user) {
        return this.task.assignTask({
            title: dto.title,
            description: dto.description,
            assigneeEmployeeId: dto.assigneeEmployeeId,
            dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
            assignedByUserId: user.userId,
        });
    }
    async startTask(id, user) {
        return this.task.startTask(id, user.userId);
    }
    async completeTask(id, user) {
        return this.task.completeTask(id, user.userId);
    }
    async markNotificationRead(id, user) {
        return this.notification.markRead(id, user.userId);
    }
    async uploadSop(dto, user) {
        return this.profile.uploadSop(user.userId, dto.documentType, dto.fileReference);
    }
    async getEmployeePersonalRecord(employeeId, user) {
        return this.profile.getPersonalRecord(employeeId, user.userId);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('me/free-fields'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateFreeFields", null);
__decorate([
    (0, common_1.Post)('me/request-change'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "requestChange", null);
__decorate([
    (0, common_1.Post)('me/tasks'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "assignTask", null);
__decorate([
    (0, common_1.Post)('me/tasks/:id/start'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "startTask", null);
__decorate([
    (0, common_1.Post)('me/tasks/:id/complete'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "completeTask", null);
__decorate([
    (0, common_1.Post)('me/notifications/:id/read'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "markNotificationRead", null);
__decorate([
    (0, common_1.Post)('me/sop-library'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "uploadSop", null);
__decorate([
    (0, common_1.Get)('employees/:employeeId/personal-record'),
    __param(0, (0, common_1.Param)('employeeId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getEmployeePersonalRecord", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        task_service_1.TaskService,
        notification_service_1.NotificationService,
        pms_service_1.PmsService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map