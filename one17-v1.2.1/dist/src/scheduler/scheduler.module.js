"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const kri_engine_module_1 = require("../kri-engine/kri-engine.module");
const stress_engine_module_1 = require("../stress-engine/stress-engine.module");
const halal_fund_engine_module_1 = require("../engine-halal-fund/halal-fund-engine.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const procurement_module_1 = require("../procurement/procurement.module");
const zakat_module_1 = require("../zakat/zakat.module");
const task_module_1 = require("../task/task.module");
const counterparty_module_1 = require("../counterparty/counterparty.module");
const pms_module_1 = require("../pms/pms.module");
const board_calendar_module_1 = require("../board-calendar/board-calendar.module");
const payment_gateway_module_1 = require("../payment-gateway/payment-gateway.module");
const calendar_module_1 = require("../calendar/calendar.module");
const investor_module_1 = require("../investor/investor.module");
const attendance_module_1 = require("../attendance/attendance.module");
const tax_module_1 = require("../tax/tax.module");
const notification_module_1 = require("../notification/notification.module");
const screening_gateway_module_1 = require("../screening-gateway/screening-gateway.module");
const scheduler_service_1 = require("./scheduler.service");
let SchedulerModule = class SchedulerModule {
};
exports.SchedulerModule = SchedulerModule;
exports.SchedulerModule = SchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, kri_engine_module_1.KriEngineModule, stress_engine_module_1.StressEngineModule, halal_fund_engine_module_1.HalalFundEngineModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, procurement_module_1.ProcurementModule, zakat_module_1.ZakatModule, task_module_1.TaskModule, counterparty_module_1.CounterpartyModule, pms_module_1.PmsModule, board_calendar_module_1.BoardCalendarModule, payment_gateway_module_1.PaymentGatewayModule, calendar_module_1.CalendarModule, investor_module_1.InvestorModule, attendance_module_1.AttendanceModule, tax_module_1.TaxModule, notification_module_1.NotificationModule, screening_gateway_module_1.ScreeningGatewayModule],
        providers: [scheduler_service_1.SchedulerService],
        exports: [scheduler_service_1.SchedulerService],
    })
], SchedulerModule);
//# sourceMappingURL=scheduler.module.js.map