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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccountingController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const ledger_service_1 = require("../ledger/ledger.service");
let CompanyAccountingController = class CompanyAccountingController {
    ledger;
    constructor(ledger) {
        this.ledger = ledger;
    }
    async listInterEntityReconciliations() {
        return this.ledger.listInterEntityReconciliations('COMPANY');
    }
};
exports.CompanyAccountingController = CompanyAccountingController;
__decorate([
    (0, common_1.Get)('inter-entity-reconciliation'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyAccountingController.prototype, "listInterEntityReconciliations", null);
exports.CompanyAccountingController = CompanyAccountingController = __decorate([
    (0, common_1.Controller)('company-accounting'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [ledger_service_1.LedgerService])
], CompanyAccountingController);
//# sourceMappingURL=company-accounting.controller.js.map