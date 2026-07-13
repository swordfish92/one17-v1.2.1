"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObligationsModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const letter_module_1 = require("../letter/letter.module");
const tax_module_1 = require("../tax/tax.module");
const obligations_service_1 = require("./obligations.service");
let ObligationsModule = class ObligationsModule {
};
exports.ObligationsModule = ObligationsModule;
exports.ObligationsModule = ObligationsModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, letter_module_1.LetterModule, tax_module_1.TaxModule],
        providers: [obligations_service_1.ObligationsService],
        exports: [obligations_service_1.ObligationsService],
    })
], ObligationsModule);
//# sourceMappingURL=obligations.module.js.map