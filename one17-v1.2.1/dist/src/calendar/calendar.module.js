"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const notification_module_1 = require("../notification/notification.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const calendar_service_1 = require("./calendar.service");
const calendar_gateway_service_1 = require("./calendar-gateway.service");
let CalendarModule = class CalendarModule {
};
exports.CalendarModule = CalendarModule;
exports.CalendarModule = CalendarModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, notification_module_1.NotificationModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule],
        providers: [calendar_service_1.CalendarService, calendar_gateway_service_1.CalendarGatewayService],
        exports: [calendar_service_1.CalendarService, calendar_gateway_service_1.CalendarGatewayService],
    })
], CalendarModule);
//# sourceMappingURL=calendar.module.js.map