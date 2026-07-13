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
exports.PublicIntakeController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const public_intake_service_1 = require("../public-intake/public-intake.service");
const ops_api_types_1 = require("./ops-api.types");
let PublicIntakeController = class PublicIntakeController {
    publicIntake;
    constructor(publicIntake) {
        this.publicIntake = publicIntake;
    }
    async submitInvestorExpress(dto, ip) {
        return this.publicIntake.submitInvestorExpress(dto, ip);
    }
    async submitCounterparty(dto, ip) {
        return this.publicIntake.submitCounterparty(dto, ip);
    }
    async listPending(user) {
        return this.publicIntake.listPending(user.userId);
    }
    async promoteInvestor(id, dto, user) {
        return this.publicIntake.promoteInvestorSubmission(id, user.userId, dto.sanctionsScreenResult);
    }
    async promoteCounterparty(id, user) {
        return this.publicIntake.promoteCounterpartySubmission(id, user.userId);
    }
    async reject(id, dto, user) {
        return this.publicIntake.reject(id, user.userId, dto.reason);
    }
};
exports.PublicIntakeController = PublicIntakeController;
__decorate([
    (0, common_1.Post)('investor-express'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.PublicInvestorExpressIntakeDto, String]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "submitInvestorExpress", null);
__decorate([
    (0, common_1.Post)('counterparty'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.PublicCounterpartyIntakeDto, String]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "submitCounterparty", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "listPending", null);
__decorate([
    (0, common_1.Post)(':id/promote-investor'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.PromoteInvestorIntakeDto, Object]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "promoteInvestor", null);
__decorate([
    (0, common_1.Post)(':id/promote-counterparty'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "promoteCounterparty", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RejectIntakeDto, Object]),
    __metadata("design:returntype", Promise)
], PublicIntakeController.prototype, "reject", null);
exports.PublicIntakeController = PublicIntakeController = __decorate([
    (0, common_1.Controller)('public/intake'),
    __metadata("design:paramtypes", [public_intake_service_1.PublicIntakeService])
], PublicIntakeController);
//# sourceMappingURL=public-intake.controller.js.map