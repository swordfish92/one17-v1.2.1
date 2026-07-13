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
exports.SchedulerController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const scheduler_service_1 = require("../scheduler/scheduler.service");
let SchedulerController = class SchedulerController {
    scheduler;
    constructor(scheduler) {
        this.scheduler = scheduler;
    }
    async listJobs(user) {
        return this.scheduler.listJobsForUser(user.userId);
    }
    async listRuns(jobCode, user) {
        const visible = await this.scheduler.listJobsForUser(user.userId);
        if (jobCode && !visible.some((j) => j.code === jobCode))
            return [];
        if (!jobCode)
            return this.scheduler.listRecentRuns(undefined, 200).then((runs) => runs.filter((r) => visible.some((j) => j.code === r.jobCode)));
        return this.scheduler.listRecentRuns(jobCode);
    }
    async listFailures(user) {
        const visible = await this.scheduler.listJobsForUser(user.userId);
        const failures = await this.scheduler.listUnresolvedFailures();
        return failures.filter((f) => visible.some((j) => j.code === f.jobCode));
    }
    async pauseDirect(jobCode, reason, user) {
        return this.scheduler.pauseDirect(jobCode, user.userId, reason);
    }
    async requestPause(jobCode, reason, user) {
        return this.scheduler.requestPause(jobCode, user.userId, reason);
    }
    async resume(jobCode, user) {
        return this.scheduler.resumeJob(jobCode, user.userId);
    }
    async rerun(jobCode, scheduledFor, user) {
        return this.scheduler.manualRerun(jobCode, new Date(scheduledFor), user.userId);
    }
    async listJobCatalog() {
        return this.scheduler.listJobCatalog();
    }
    async registerJob(jobCode, user) {
        return this.scheduler.registerJob(jobCode, user.userId);
    }
    async retireJob(jobCode, reason, user) {
        return this.scheduler.retireJob(jobCode, user.userId, reason);
    }
    async requestRetirement(jobCode, reason, user) {
        return this.scheduler.requestRetirement(jobCode, user.userId, reason);
    }
};
exports.SchedulerController = SchedulerController;
__decorate([
    (0, common_1.Get)('jobs'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "listJobs", null);
__decorate([
    (0, common_1.Get)('runs'),
    __param(0, (0, common_1.Query)('jobCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "listRuns", null);
__decorate([
    (0, common_1.Get)('failures'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "listFailures", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/pause-direct'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, common_1.Body)('reason')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "pauseDirect", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/request-pause'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, common_1.Body)('reason')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "requestPause", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/resume'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "resume", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/rerun'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, common_1.Body)('scheduledFor')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "rerun", null);
__decorate([
    (0, common_1.Get)('job-catalog'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "listJobCatalog", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/register'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "registerJob", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/retire'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, common_1.Body)('reason')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "retireJob", null);
__decorate([
    (0, common_1.Post)('jobs/:jobCode/request-retirement'),
    __param(0, (0, common_1.Param)('jobCode')),
    __param(1, (0, common_1.Body)('reason')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "requestRetirement", null);
exports.SchedulerController = SchedulerController = __decorate([
    (0, common_1.Controller)('scheduler'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [scheduler_service_1.SchedulerService])
], SchedulerController);
//# sourceMappingURL=scheduler.controller.js.map