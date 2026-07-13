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
exports.DataProtectionController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const retention_schedule_service_1 = require("../data-protection/retention-schedule.service");
const data_breach_register_service_1 = require("../data-protection/data-breach-register.service");
const data_protection_types_1 = require("../data-protection/data-protection.types");
const ops_api_types_1 = require("./ops-api.types");
let DataProtectionController = class DataProtectionController {
    retentionSchedule;
    breachRegister;
    constructor(retentionSchedule, breachRegister) {
        this.retentionSchedule = retentionSchedule;
        this.breachRegister = breachRegister;
    }
    async listRetentionSchedule() {
        return this.retentionSchedule.listAll();
    }
    async confirmRetentionScheduleEntry(id, dto, user) {
        try {
            return await this.retentionSchedule.confirm({ entryId: id, ...dto, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listBreaches() {
        return this.breachRegister.listAll();
    }
    async logBreach(dto, user) {
        return this.breachRegister.logBreach({ ...dto, discoveredAt: new Date(dto.discoveredAt), discoveredByUserId: user.userId });
    }
    async assessBreach(id, dto, user) {
        try {
            return await this.breachRegister.assess({ breachId: id, ...dto, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async recordNdpcNotification(id, user) {
        try {
            return await this.breachRegister.recordNdpcNotification({ breachId: id, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async recordDataSubjectNotification(id, user) {
        try {
            return await this.breachRegister.recordDataSubjectNotification({ breachId: id, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async closeBreach(id, dto, user) {
        try {
            return await this.breachRegister.close({ breachId: id, ...dto, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.DataProtectionController = DataProtectionController;
__decorate([
    (0, common_1.Get)('retention-schedule'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "listRetentionSchedule", null);
__decorate([
    (0, common_1.Post)('retention-schedule/:id/confirm'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ConfirmRetentionScheduleEntryDto, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "confirmRetentionScheduleEntry", null);
__decorate([
    (0, common_1.Get)('breach-register'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "listBreaches", null);
__decorate([
    (0, common_1.Post)('breach-register'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.LogDataBreachDto, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "logBreach", null);
__decorate([
    (0, common_1.Post)('breach-register/:id/assess'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AssessDataBreachDto, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "assessBreach", null);
__decorate([
    (0, common_1.Post)('breach-register/:id/notify-ndpc'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "recordNdpcNotification", null);
__decorate([
    (0, common_1.Post)('breach-register/:id/notify-data-subjects'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "recordDataSubjectNotification", null);
__decorate([
    (0, common_1.Post)('breach-register/:id/close'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CloseDataBreachDto, Object]),
    __metadata("design:returntype", Promise)
], DataProtectionController.prototype, "closeBreach", null);
exports.DataProtectionController = DataProtectionController = __decorate([
    (0, common_1.Controller)('data-protection'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [retention_schedule_service_1.RetentionScheduleService,
        data_breach_register_service_1.DataBreachRegisterService])
], DataProtectionController);
//# sourceMappingURL=data-protection.controller.js.map