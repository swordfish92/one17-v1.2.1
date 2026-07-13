"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const subscription_module_1 = require("../subscription/subscription.module");
const payment_gateway_service_1 = require("./payment-gateway.service");
let PaymentGatewayModule = class PaymentGatewayModule {
};
exports.PaymentGatewayModule = PaymentGatewayModule;
exports.PaymentGatewayModule = PaymentGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, subscription_module_1.SubscriptionModule],
        providers: [payment_gateway_service_1.PaymentGatewayService],
        exports: [payment_gateway_service_1.PaymentGatewayService],
    })
], PaymentGatewayModule);
//# sourceMappingURL=payment-gateway.module.js.map