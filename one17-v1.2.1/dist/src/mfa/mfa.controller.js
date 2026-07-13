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
exports.MfaController = void 0;
const common_1 = require("@nestjs/common");
const mfa_service_1 = require("./mfa.service");
const mfa_types_1 = require("./mfa.types");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const allow_mfa_pending_decorator_1 = require("../auth/allow-mfa-pending.decorator");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const capability_guard_1 = require("../auth/capability.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const auth_service_1 = require("../auth/auth.service");
let MfaController = class MfaController {
    mfa;
    authService;
    constructor(mfa, authService) {
        this.mfa = mfa;
        this.authService = authService;
    }
    async status(user) {
        return this.mfa.getStatus(user.userId);
    }
    async beginEnrollment(user) {
        return this.mfa.beginEnrollment(user.userId);
    }
    async confirmEnrollment(dto, user, req) {
        try {
            const backupCodes = await this.mfa.confirmEnrollment(user.userId, dto.code);
            const token = req.cookies?.[session_auth_guard_1.SESSION_COOKIE_NAME];
            if (token)
                await this.authService.promoteSessionPastMfa(token);
            return { backupCodes };
        }
        catch (err) {
            if (err instanceof mfa_types_1.MfaError)
                throw new common_1.UnauthorizedException(err.message);
            throw err;
        }
    }
    async verify(dto, user, req) {
        const ok = await this.mfa.verifyCode(user.userId, dto.code);
        if (!ok)
            throw new common_1.UnauthorizedException('Invalid or already-used code.');
        const token = req.cookies?.[session_auth_guard_1.SESSION_COOKIE_NAME];
        if (token)
            await this.authService.promoteSessionPastMfa(token);
        return { ok: true };
    }
    async resetUserMfa(targetUserId, user) {
        await this.mfa.resetMfa(targetUserId, user.userId);
        return { ok: true };
    }
    async listFinancialCapabilities() {
        return this.mfa.listFinancialCapabilities();
    }
    async addFinancialCapability(dto, user) {
        return this.mfa.addFinancialCapability(dto.functionCode, user.userId);
    }
    async removeFinancialCapability(functionCode, user) {
        await this.mfa.removeFinancialCapability(functionCode, user.userId);
        return { ok: true };
    }
    async setGlobalEnforcement(dto, user) {
        return this.mfa.setGlobalEnforcement(dto.allStaffMandatory, user.userId);
    }
};
exports.MfaController = MfaController;
__decorate([
    (0, common_1.Get)('status'),
    (0, allow_mfa_pending_decorator_1.AllowMfaPending)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "status", null);
__decorate([
    (0, common_1.Post)('enroll/begin'),
    (0, common_1.HttpCode)(200),
    (0, allow_mfa_pending_decorator_1.AllowMfaPending)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "beginEnrollment", null);
__decorate([
    (0, common_1.Post)('enroll/confirm'),
    (0, common_1.HttpCode)(200),
    (0, allow_mfa_pending_decorator_1.AllowMfaPending)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mfa_types_1.MfaCodeDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "confirmEnrollment", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(200),
    (0, allow_mfa_pending_decorator_1.AllowMfaPending)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mfa_types_1.MfaCodeDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('admin/reset/:userId'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MFA_ENFORCEMENT_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "resetUserMfa", null);
__decorate([
    (0, common_1.Get)('admin/financial-capabilities'),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MFA_ENFORCEMENT_CONFIG', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "listFinancialCapabilities", null);
__decorate([
    (0, common_1.Post)('admin/financial-capabilities'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MFA_ENFORCEMENT_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mfa_types_1.MfaFinancialCapabilityDto, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "addFinancialCapability", null);
__decorate([
    (0, common_1.Delete)('admin/financial-capabilities/:functionCode'),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MFA_ENFORCEMENT_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Param)('functionCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "removeFinancialCapability", null);
__decorate([
    (0, common_1.Post)('admin/global-enforcement'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MFA_ENFORCEMENT_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mfa_types_1.MfaGlobalEnforcementDto, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "setGlobalEnforcement", null);
exports.MfaController = MfaController = __decorate([
    (0, common_1.Controller)('mfa'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [mfa_service_1.MfaService,
        auth_service_1.AuthService])
], MfaController);
//# sourceMappingURL=mfa.controller.js.map