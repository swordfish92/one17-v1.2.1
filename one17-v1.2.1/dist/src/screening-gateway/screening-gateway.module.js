"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreeningGatewayModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const notification_module_1 = require("../notification/notification.module");
const document_module_1 = require("../document/document.module");
const screening_gateway_service_1 = require("./screening-gateway.service");
let ScreeningGatewayModule = class ScreeningGatewayModule {
};
exports.ScreeningGatewayModule = ScreeningGatewayModule;
exports.ScreeningGatewayModule = ScreeningGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, notification_module_1.NotificationModule, document_module_1.DocumentModule],
        providers: [screening_gateway_service_1.ScreeningGatewayService],
        exports: [screening_gateway_service_1.ScreeningGatewayService],
    })
], ScreeningGatewayModule);
//# sourceMappingURL=screening-gateway.module.js.map