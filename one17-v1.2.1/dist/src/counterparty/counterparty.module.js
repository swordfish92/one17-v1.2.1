"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterpartyModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const workflow_module_1 = require("../workflow/workflow.module");
const delegation_module_1 = require("../delegation/delegation.module");
const notification_module_1 = require("../notification/notification.module");
const task_module_1 = require("../task/task.module");
const document_module_1 = require("../document/document.module");
const event_journal_module_1 = require("../event-journal/event-journal.module");
const screening_gateway_module_1 = require("../screening-gateway/screening-gateway.module");
const counterparty_service_1 = require("./counterparty.service");
const payment_reminder_service_1 = require("./payment-reminder.service");
const counterparty_write_off_service_1 = require("./counterparty-write-off.service");
let CounterpartyModule = class CounterpartyModule {
};
exports.CounterpartyModule = CounterpartyModule;
exports.CounterpartyModule = CounterpartyModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, workflow_module_1.WorkflowModule, delegation_module_1.DelegationModule, notification_module_1.NotificationModule, task_module_1.TaskModule, document_module_1.DocumentModule, event_journal_module_1.EventJournalModule, screening_gateway_module_1.ScreeningGatewayModule],
        providers: [counterparty_service_1.CounterpartyService, payment_reminder_service_1.PaymentReminderService, counterparty_write_off_service_1.CounterpartyWriteOffService],
        exports: [counterparty_service_1.CounterpartyService, payment_reminder_service_1.PaymentReminderService, counterparty_write_off_service_1.CounterpartyWriteOffService],
    })
], CounterpartyModule);
//# sourceMappingURL=counterparty.module.js.map