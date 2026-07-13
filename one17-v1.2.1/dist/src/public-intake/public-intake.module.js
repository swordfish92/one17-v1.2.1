"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicIntakeModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const investor_module_1 = require("../investor/investor.module");
const counterparty_module_1 = require("../counterparty/counterparty.module");
const data_protection_module_1 = require("../data-protection/data-protection.module");
const public_intake_service_1 = require("./public-intake.service");
let PublicIntakeModule = class PublicIntakeModule {
};
exports.PublicIntakeModule = PublicIntakeModule;
exports.PublicIntakeModule = PublicIntakeModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, investor_module_1.InvestorModule, counterparty_module_1.CounterpartyModule, data_protection_module_1.DataProtectionModule],
        providers: [public_intake_service_1.PublicIntakeService],
        exports: [public_intake_service_1.PublicIntakeService],
    })
], PublicIntakeModule);
//# sourceMappingURL=public-intake.module.js.map