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
exports.LeaveController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const leave_service_1 = require("../leave/leave.service");
const ops_api_types_1 = require("./ops-api.types");
let LeaveController = class LeaveController {
    leave;
    constructor(leave) {
        this.leave = leave;
    }
    async listLeaveTypes() {
        return this.leave.listLeaveTypes();
    }
    async getMyBalances(year, user) {
        return this.leave.getMyBalancesForActor(user.userId, year ? Number(year) : new Date().getFullYear());
    }
    async applyForLeave(dto, user) {
        return this.leave.applyForLeave(user.userId, dto);
    }
    async listMyApplications(user) {
        return this.leave.listMyApplications(user.userId);
    }
    async listSubordinateApplications(user) {
        return this.leave.listSubordinateApplications(user.userId);
    }
    async supervisorDecide(id, dto, user) {
        return this.leave.supervisorDecide(id, dto.decision, user.userId, dto.notes);
    }
    async hrAcknowledge(id, user) {
        return this.leave.hrAcknowledge(id, user.userId);
    }
    async listAllApplications() {
        return this.leave.listAllApplications();
    }
};
exports.LeaveController = LeaveController;
__decorate([
    (0, common_1.Get)('types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "listLeaveTypes", null);
__decorate([
    (0, common_1.Get)('balances'),
    __param(0, (0, common_1.Query)('year')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "getMyBalances", null);
__decorate([
    (0, common_1.Post)('applications'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ApplyForLeaveDto, Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "applyForLeave", null);
__decorate([
    (0, common_1.Get)('applications/mine'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "listMyApplications", null);
__decorate([
    (0, common_1.Get)('applications/subordinates'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "listSubordinateApplications", null);
__decorate([
    (0, common_1.Post)('applications/:id/supervisor-decide'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SupervisorDecideLeaveDto, Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "supervisorDecide", null);
__decorate([
    (0, common_1.Post)('applications/:id/hr-acknowledge'),
    (0, requires_capability_decorator_1.RequiresCapability)('LEAVE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "hrAcknowledge", null);
__decorate([
    (0, common_1.Get)('applications'),
    (0, requires_capability_decorator_1.RequiresCapability)('LEAVE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "listAllApplications", null);
exports.LeaveController = LeaveController = __decorate([
    (0, common_1.Controller)('leave'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [leave_service_1.LeaveService])
], LeaveController);
//# sourceMappingURL=leave.controller.js.map