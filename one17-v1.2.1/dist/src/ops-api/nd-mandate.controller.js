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
exports.NdMandateController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const nd_mandate_engine_service_1 = require("../engine-nd-mandate/nd-mandate-engine.service");
let NdMandateController = class NdMandateController {
    ndMandate;
    constructor(ndMandate) {
        this.ndMandate = ndMandate;
    }
    async listAccounts(ledgerEntityCode) {
        const accounts = await this.ndMandate.listAccounts(ledgerEntityCode);
        return accounts.map((a) => ({
            ...a,
            investorRatio: a.investorRatio?.toString() ?? null,
            mudaribRatio: a.mudaribRatio?.toString() ?? null,
            wakalahFeeRatePa: a.wakalahFeeRatePa?.toString() ?? null,
            sharedRatio: a.sharedRatio?.toString() ?? null,
            targetReturnPct: a.targetReturnPct?.toString() ?? null,
        }));
    }
    async listAgingProvisionals(thresholdDays) {
        return this.ndMandate.listAgingProvisionals(thresholdDays ? Number(thresholdDays) : 30);
    }
};
exports.NdMandateController = NdMandateController;
__decorate([
    (0, common_1.Get)('accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('KYC_MANDATE', 'VIEW'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NdMandateController.prototype, "listAccounts", null);
__decorate([
    (0, common_1.Get)('provisional-accruals/aging'),
    (0, requires_capability_decorator_1.RequiresCapability)('KYC_MANDATE', 'VIEW'),
    __param(0, (0, common_1.Query)('thresholdDays')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NdMandateController.prototype, "listAgingProvisionals", null);
exports.NdMandateController = NdMandateController = __decorate([
    (0, common_1.Controller)('nd-mandate'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [nd_mandate_engine_service_1.NdMandateEngineService])
], NdMandateController);
//# sourceMappingURL=nd-mandate.controller.js.map