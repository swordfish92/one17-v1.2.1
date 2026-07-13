"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const workflow_module_1 = require("../workflow/workflow.module");
const ledger_module_1 = require("../ledger/ledger.module");
const nd_mandate_engine_module_1 = require("../engine-nd-mandate/nd-mandate-engine.module");
const event_journal_module_1 = require("../event-journal/event-journal.module");
const certificate_module_1 = require("../certificate/certificate.module");
const delegation_module_1 = require("../delegation/delegation.module");
const subscription_service_1 = require("./subscription.service");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, workflow_module_1.WorkflowModule, ledger_module_1.LedgerModule, nd_mandate_engine_module_1.NdMandateEngineModule, event_journal_module_1.EventJournalModule, certificate_module_1.CertificateModule, delegation_module_1.DelegationModule],
        providers: [subscription_service_1.SubscriptionService],
        exports: [subscription_service_1.SubscriptionService],
    })
], SubscriptionModule);
//# sourceMappingURL=subscription.module.js.map