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
exports.ActivationConsoleController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const activation_console_service_1 = require("../activation-console/activation-console.service");
const activation_console_types_1 = require("../activation-console/activation-console.types");
const ops_api_types_1 = require("./ops-api.types");
let ActivationConsoleController = class ActivationConsoleController {
    activation;
    constructor(activation) {
        this.activation = activation;
    }
    async getStatus() {
        return this.activation.getStatus();
    }
    async skipStep(stepCode, user) {
        try {
            return await this.activation.skipStep(stepCode, user.userId);
        }
        catch (err) {
            if (err instanceof activation_console_types_1.ActivationConsoleError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async unskipStep(stepCode, user) {
        try {
            return await this.activation.unskipStep(stepCode, user.userId);
        }
        catch (err) {
            if (err instanceof activation_console_types_1.ActivationConsoleError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async activate(user) {
        try {
            return await this.activation.activate(user.userId);
        }
        catch (err) {
            if (err instanceof activation_console_types_1.ActivationConsoleError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async runProofBattery(user) {
        try {
            return await this.activation.runProofBattery(user.userId);
        }
        catch (err) {
            if (err instanceof Error)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async assignSubStepTask(dto, user) {
        try {
            return await this.activation.assignSubStepTask({
                stepCode: dto.stepCode,
                subStepCode: dto.subStepCode,
                assigneeEmployeeId: dto.assigneeEmployeeId,
                dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
                assignedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof Error)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.ActivationConsoleController = ActivationConsoleController;
__decorate([
    (0, common_1.Get)('status'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Post)('steps/:stepCode/skip'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'INITIATE'),
    __param(0, (0, common_1.Param)('stepCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "skipStep", null);
__decorate([
    (0, common_1.Post)('steps/:stepCode/unskip'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'INITIATE'),
    __param(0, (0, common_1.Param)('stepCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "unskipStep", null);
__decorate([
    (0, common_1.Post)('activate'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'APPROVE'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('proof-battery/run'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'INITIATE'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "runProofBattery", null);
__decorate([
    (0, common_1.Post)('tasks'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACTIVATION_CONSOLE', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AssignActivationSubStepTaskDto, Object]),
    __metadata("design:returntype", Promise)
], ActivationConsoleController.prototype, "assignSubStepTask", null);
exports.ActivationConsoleController = ActivationConsoleController = __decorate([
    (0, common_1.Controller)('activation-console'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [activation_console_service_1.ActivationConsoleService])
], ActivationConsoleController);
//# sourceMappingURL=activation-console.controller.js.map