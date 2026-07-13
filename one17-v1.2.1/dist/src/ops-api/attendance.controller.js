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
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const attendance_service_1 = require("../attendance/attendance.service");
const ops_api_types_1 = require("./ops-api.types");
let AttendanceController = class AttendanceController {
    attendance;
    constructor(attendance) {
        this.attendance = attendance;
    }
    async listProviders() {
        return this.attendance.listProviders();
    }
    async proposeProviderConfig(dto, user) {
        return this.attendance.proposeProviderConfig(dto, user.userId);
    }
    async approveProviderConfig(workflowInstanceId, user) {
        return this.attendance.approveProviderConfig(workflowInstanceId, user.userId);
    }
    async connectTTLock(id, user) {
        return this.attendance.connectTTLock(id, user.userId);
    }
    async importFileEvents(id, dto, user) {
        return this.attendance.importFileEvents(id, dto.rows, user.userId);
    }
    async listUnmappedEvents() {
        return this.attendance.listUnmappedEvents();
    }
    async mapLockUser(dto, user) {
        return this.attendance.mapLockUser(dto, user.userId);
    }
    async requestException(dto, user) {
        return this.attendance.requestException(user.userId, dto);
    }
    async listMyExceptionRequests(user) {
        return this.attendance.listMyExceptionRequests(user.userId);
    }
    async listSubordinateExceptionRequests(user) {
        return this.attendance.listSubordinateExceptionRequests(user.userId);
    }
    async decideExceptionRequest(id, dto, user) {
        return this.attendance.decideExceptionRequest(id, dto.decision, user.userId, dto.notes);
    }
};
exports.AttendanceController = AttendanceController;
__decorate([
    (0, common_1.Get)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "listProviders", null);
__decorate([
    (0, common_1.Post)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureAttendanceProviderDto, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "proposeProviderConfig", null);
__decorate([
    (0, common_1.Post)('providers/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "approveProviderConfig", null);
__decorate([
    (0, common_1.Post)('providers/:id/connect-ttlock'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "connectTTLock", null);
__decorate([
    (0, common_1.Post)('providers/:id/import'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ImportFileEventsDto, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "importFileEvents", null);
__decorate([
    (0, common_1.Get)('unmapped-events'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "listUnmappedEvents", null);
__decorate([
    (0, common_1.Post)('lock-user-mappings'),
    (0, requires_capability_decorator_1.RequiresCapability)('ATTENDANCE_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.MapLockUserDto, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "mapLockUser", null);
__decorate([
    (0, common_1.Post)('exceptions'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestExceptionDto, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "requestException", null);
__decorate([
    (0, common_1.Get)('exceptions/mine'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "listMyExceptionRequests", null);
__decorate([
    (0, common_1.Get)('exceptions/subordinates'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "listSubordinateExceptionRequests", null);
__decorate([
    (0, common_1.Post)('exceptions/:id/decide'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideExceptionDto, Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "decideExceptionRequest", null);
exports.AttendanceController = AttendanceController = __decorate([
    (0, common_1.Controller)('attendance'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [attendance_service_1.AttendanceService])
], AttendanceController);
//# sourceMappingURL=attendance.controller.js.map