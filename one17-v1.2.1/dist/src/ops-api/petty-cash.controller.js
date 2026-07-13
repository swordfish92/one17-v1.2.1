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
exports.PettyCashController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const petty_cash_service_1 = require("../petty-cash/petty-cash.service");
const ops_api_types_1 = require("./ops-api.types");
let PettyCashController = class PettyCashController {
    pettyCash;
    constructor(pettyCash) {
        this.pettyCash = pettyCash;
    }
    async listFloats() {
        return this.pettyCash.listFloats();
    }
    async getFloatBalance(id) {
        return this.pettyCash.getFloatBalance(id);
    }
    async establishFloat(dto, user) {
        return this.pettyCash.establishFloat({
            floatCode: dto.floatCode, custodianUserId: dto.custodianUserId, officeLabel: dto.officeLabel,
            ledgerEntityCode: dto.ledgerEntityCode, floatCeilingKobo: BigInt(dto.floatCeilingKobo),
            singleVoucherCapKobo: BigInt(dto.singleVoucherCapKobo), establishedByUserId: user.userId,
        });
    }
    async adjustFloatCaps(id, dto, user) {
        return this.pettyCash.adjustFloatCaps({
            floatId: id, floatCeilingKobo: dto.floatCeilingKobo ? BigInt(dto.floatCeilingKobo) : undefined,
            singleVoucherCapKobo: dto.singleVoucherCapKobo ? BigInt(dto.singleVoucherCapKobo) : undefined, actorUserId: user.userId,
        });
    }
    async closeFloat(id, user) {
        return this.pettyCash.closeFloat(id, user.userId);
    }
    async listVouchers(floatId) {
        return this.pettyCash.listVouchers(floatId);
    }
    async captureVoucher(dto, user) {
        return this.pettyCash.captureVoucher({
            floatId: dto.floatId, voucherDate: new Date(dto.voucherDate), payee: dto.payee,
            expenseAccountCode: dto.expenseAccountCode, amountKobo: BigInt(dto.amountKobo), createdByUserId: user.userId,
        });
    }
    async listClaims(floatId) {
        return this.pettyCash.listClaims(floatId);
    }
    async initiateReplenishmentClaim(dto, user) {
        return this.pettyCash.initiateReplenishmentClaim({ floatId: dto.floatId, voucherIds: dto.voucherIds, initiatedByUserId: user.userId });
    }
    async listSpotChecks(floatId) {
        return this.pettyCash.listSpotChecks(floatId);
    }
    async recordSpotCheck(dto, user) {
        return this.pettyCash.recordSpotCheck({ floatId: dto.floatId, countedKobo: BigInt(dto.countedKobo), notes: dto.notes, checkedByUserId: user.userId });
    }
};
exports.PettyCashController = PettyCashController;
__decorate([
    (0, common_1.Get)('floats'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "listFloats", null);
__decorate([
    (0, common_1.Get)('floats/:id/balance'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "getFloatBalance", null);
__decorate([
    (0, common_1.Post)('floats'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.EstablishFloatDto, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "establishFloat", null);
__decorate([
    (0, common_1.Post)('floats/:id/adjust-caps'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AdjustFloatCapsDto, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "adjustFloatCaps", null);
__decorate([
    (0, common_1.Post)('floats/:id/close'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "closeFloat", null);
__decorate([
    (0, common_1.Get)('vouchers'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('floatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "listVouchers", null);
__decorate([
    (0, common_1.Post)('vouchers'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CaptureVoucherDto, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "captureVoucher", null);
__decorate([
    (0, common_1.Get)('claims'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('floatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "listClaims", null);
__decorate([
    (0, common_1.Post)('claims'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.InitiateReplenishmentClaimDto, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "initiateReplenishmentClaim", null);
__decorate([
    (0, common_1.Get)('spot-checks'),
    (0, requires_capability_decorator_1.RequiresCapability)('PETTY_CASH_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('floatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "listSpotChecks", null);
__decorate([
    (0, common_1.Post)('spot-checks'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_CONTROL_REVIEW', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RecordSpotCheckDto, Object]),
    __metadata("design:returntype", Promise)
], PettyCashController.prototype, "recordSpotCheck", null);
exports.PettyCashController = PettyCashController = __decorate([
    (0, common_1.Controller)('petty-cash'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [petty_cash_service_1.PettyCashService])
], PettyCashController);
//# sourceMappingURL=petty-cash.controller.js.map