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
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const one17_ai_service_1 = require("../ai/one17-ai.service");
let AiController = class AiController {
    ai;
    constructor(ai) {
        this.ai = ai;
    }
    async invoke(dto, user) {
        return this.ai.invoke({
            askingUserId: user.userId,
            capabilityCode: dto.capabilityCode,
            promptText: dto.promptText,
            requestedDataPointCodes: dto.requestedDataPointCodes ?? [],
            context: dto.context,
            orgUnitCode: dto.orgUnitCode,
        });
    }
    async listInteractionLog(user) {
        return this.ai.listInteractionLog(user.userId);
    }
    async requestFlagToggle(code, user) {
        return this.ai.requestFlagToggle(code, user.userId);
    }
    async listCapabilityFlags() {
        return this.ai.listCapabilityFlags();
    }
    async listTokenBudgets() {
        return this.ai.listTokenBudgets();
    }
    async getKillSwitchStatus() {
        return this.ai.getKillSwitchStatus();
    }
    async activateKillSwitch(reason, user) {
        return this.ai.activateKillSwitch(user.userId, reason);
    }
    async deactivateKillSwitch(user) {
        return this.ai.deactivateKillSwitch(user.userId);
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('invoke'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "invoke", null);
__decorate([
    (0, common_1.Get)('interaction-log'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "listInteractionLog", null);
__decorate([
    (0, common_1.Post)('capability-flags/:code/request-toggle'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "requestFlagToggle", null);
__decorate([
    (0, common_1.Get)('capability-flags'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiController.prototype, "listCapabilityFlags", null);
__decorate([
    (0, common_1.Get)('token-budgets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiController.prototype, "listTokenBudgets", null);
__decorate([
    (0, common_1.Get)('kill-switch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiController.prototype, "getKillSwitchStatus", null);
__decorate([
    (0, common_1.Post)('kill-switch/activate'),
    __param(0, (0, common_1.Body)('reason')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "activateKillSwitch", null);
__decorate([
    (0, common_1.Post)('kill-switch/deactivate'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "deactivateKillSwitch", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [one17_ai_service_1.One17AIService])
], AiController);
//# sourceMappingURL=ai.controller.js.map