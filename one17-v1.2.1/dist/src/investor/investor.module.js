"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const workflow_module_1 = require("../workflow/workflow.module");
const delegation_module_1 = require("../delegation/delegation.module");
const portal_auth_module_1 = require("../portal-auth/portal-auth.module");
const document_module_1 = require("../document/document.module");
const task_module_1 = require("../task/task.module");
const screening_gateway_module_1 = require("../screening-gateway/screening-gateway.module");
const investor_service_1 = require("./investor.service");
const investor_bank_account_change_service_1 = require("./investor-bank-account-change.service");
const investor_contact_amendment_service_1 = require("./investor-contact-amendment.service");
const investor_exit_service_1 = require("./investor-exit.service");
const investor_compliance_sweep_service_1 = require("./investor-compliance-sweep.service");
const investor_mandate_amendment_service_1 = require("./investor-mandate-amendment.service");
let InvestorModule = class InvestorModule {
};
exports.InvestorModule = InvestorModule;
exports.InvestorModule = InvestorModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, workflow_module_1.WorkflowModule, delegation_module_1.DelegationModule, portal_auth_module_1.PortalAuthModule, document_module_1.DocumentModule, task_module_1.TaskModule, screening_gateway_module_1.ScreeningGatewayModule],
        providers: [investor_service_1.InvestorService, investor_bank_account_change_service_1.InvestorBankAccountChangeService, investor_contact_amendment_service_1.InvestorContactAmendmentService, investor_exit_service_1.InvestorExitService, investor_compliance_sweep_service_1.InvestorComplianceSweepService, investor_mandate_amendment_service_1.InvestorMandateAmendmentService],
        exports: [investor_service_1.InvestorService, investor_bank_account_change_service_1.InvestorBankAccountChangeService, investor_contact_amendment_service_1.InvestorContactAmendmentService, investor_exit_service_1.InvestorExitService, investor_compliance_sweep_service_1.InvestorComplianceSweepService, investor_mandate_amendment_service_1.InvestorMandateAmendmentService],
    })
], InvestorModule);
//# sourceMappingURL=investor.module.js.map