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
exports.ObligationsController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const obligations_service_1 = require("../obligations/obligations.service");
const obligations_types_1 = require("../obligations/obligations.types");
const ops_api_types_1 = require("./ops-api.types");
let ObligationsController = class ObligationsController {
    obligations;
    constructor(obligations) {
        this.obligations = obligations;
    }
    async getSchedule(periodStart, periodEnd, user) {
        try {
            return await this.obligations.getSchedule(user.userId, new Date(periodStart), new Date(periodEnd));
        }
        catch (err) {
            if (err instanceof obligations_types_1.ObligationsError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async getVariance(periodStart, periodEnd, user) {
        return this.obligations.getPaidVsProjectedVariance(user.userId, new Date(periodStart), new Date(periodEnd));
    }
    async listPayoutBatches() {
        return this.obligations.listPayoutBatches();
    }
    async getPayoutBatch(id) {
        return this.obligations.getPayoutBatch(id);
    }
    async compilePayoutBatch(dto, user) {
        try {
            return await this.obligations.compilePayoutBatch({
                periodLabel: dto.periodLabel,
                periodStart: new Date(dto.periodStart),
                periodEnd: new Date(dto.periodEnd),
                compiledByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof obligations_types_1.ObligationsError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async submitForApproval(id, user) {
        try {
            return await this.obligations.submitForApproval(id, user.userId);
        }
        catch (err) {
            if (err instanceof obligations_types_1.ObligationsError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async retryBankInstructionLetter(id, user) {
        try {
            return await this.obligations.retryBankInstructionLetter(id, user.userId);
        }
        catch (err) {
            if (err instanceof obligations_types_1.ObligationsError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async markLetterIssued(id) {
        return this.obligations.markLetterIssued(id);
    }
    async markPaid(id, user) {
        try {
            return await this.obligations.markPaid(id, user.userId);
        }
        catch (err) {
            if (err instanceof obligations_types_1.ObligationsError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.ObligationsController = ObligationsController;
__decorate([
    (0, common_1.Get)('schedule'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_OBLIGATIONS_SCHEDULE', 'VIEW'),
    __param(0, (0, common_1.Query)('periodStart')),
    __param(1, (0, common_1.Query)('periodEnd')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "getSchedule", null);
__decorate([
    (0, common_1.Get)('variance'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_OBLIGATIONS_SCHEDULE', 'VIEW'),
    __param(0, (0, common_1.Query)('periodStart')),
    __param(1, (0, common_1.Query)('periodEnd')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "getVariance", null);
__decorate([
    (0, common_1.Get)('payout-batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "listPayoutBatches", null);
__decorate([
    (0, common_1.Get)('payout-batches/:id'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "getPayoutBatch", null);
__decorate([
    (0, common_1.Post)('payout-batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CompilePayoutBatchDto, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "compilePayoutBatch", null);
__decorate([
    (0, common_1.Post)('payout-batches/:id/submit-for-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "submitForApproval", null);
__decorate([
    (0, common_1.Post)('payout-batches/:id/retry-letter'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "retryBankInstructionLetter", null);
__decorate([
    (0, common_1.Post)('payout-batches/:id/mark-letter-issued'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "markLetterIssued", null);
__decorate([
    (0, common_1.Post)('payout-batches/:id/mark-paid'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYOUT_COMPILATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ObligationsController.prototype, "markPaid", null);
exports.ObligationsController = ObligationsController = __decorate([
    (0, common_1.Controller)('obligations'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [obligations_service_1.ObligationsService])
], ObligationsController);
//# sourceMappingURL=obligations.controller.js.map