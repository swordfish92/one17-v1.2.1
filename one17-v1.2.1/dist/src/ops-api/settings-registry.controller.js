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
exports.SettingsRegistryController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const settings_registry_service_1 = require("../settings-registry/settings-registry.service");
let SettingsRegistryController = class SettingsRegistryController {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    async list(user) {
        return this.registry.getRegistry(user.userId);
    }
    async export(user, res) {
        const snapshot = await this.registry.exportForAuditor(user.userId);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', `attachment; filename="settings-audit-export-${Date.now()}.json"`);
        res.send(JSON.stringify(snapshot, null, 2));
    }
};
exports.SettingsRegistryController = SettingsRegistryController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingsRegistryController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('export'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingsRegistryController.prototype, "export", null);
exports.SettingsRegistryController = SettingsRegistryController = __decorate([
    (0, common_1.Controller)('settings-registry'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [settings_registry_service_1.SettingsRegistryService])
], SettingsRegistryController);
//# sourceMappingURL=settings-registry.controller.js.map