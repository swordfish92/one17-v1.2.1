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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const payment_gateway_service_1 = require("../payment-gateway/payment-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let PaymentGatewayController = class PaymentGatewayController {
    gateway;
    constructor(gateway) {
        this.gateway = gateway;
    }
    async listProviders() {
        return this.gateway.listProviders();
    }
    async proposeProviderConfig(dto, user) {
        return this.gateway.proposeProviderConfig(dto, user.userId);
    }
    async approveProviderConfig(workflowInstanceId, user) {
        return this.gateway.approveProviderConfig(workflowInstanceId, user.userId);
    }
    async listCustodianAccounts() {
        return this.gateway.listCustodianAccounts();
    }
    async proposeCustodianAccount(dto, user) {
        return this.gateway.proposeCustodianAccount(dto, user.userId);
    }
    async approveCustodianAccount(workflowInstanceId, user) {
        return this.gateway.approveCustodianAccount(workflowInstanceId, user.userId);
    }
    async listSuspenseQueue(user) {
        return this.gateway.listSuspenseQueue(user.userId);
    }
    async listAllInflows(user) {
        return this.gateway.listAllInflows(user.userId);
    }
    async manualMatch(id, dto, user) {
        return this.gateway.manualMatch({ inflowId: id, investorId: dto.investorId, productCode: dto.productCode, actorUserId: user.userId });
    }
    async proposeRejectInflow(id, dto, user) {
        return this.gateway.proposeRejectInflow(id, user.userId, dto.reason);
    }
    async proposeReverseInflow(id, user) {
        return this.gateway.proposeReverseInflow(id, user.userId);
    }
    async verifyInflowWithVendor(id, user) {
        return this.gateway.verifyInflowWithVendor(id, user.userId);
    }
    async approveInflowDecision(workflowInstanceId, user) {
        return this.gateway.approveInflowDecision(workflowInstanceId, user.userId);
    }
};
exports.PaymentGatewayController = PaymentGatewayController;
__decorate([
    (0, common_1.Get)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "listProviders", null);
__decorate([
    (0, common_1.Post)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureGatewayProviderDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "proposeProviderConfig", null);
__decorate([
    (0, common_1.Post)('providers/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "approveProviderConfig", null);
__decorate([
    (0, common_1.Get)('custodian-accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "listCustodianAccounts", null);
__decorate([
    (0, common_1.Post)('custodian-accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureCustodianAccountDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "proposeCustodianAccount", null);
__decorate([
    (0, common_1.Post)('custodian-accounts/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "approveCustodianAccount", null);
__decorate([
    (0, common_1.Get)('suspense-queue'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "listSuspenseQueue", null);
__decorate([
    (0, common_1.Get)('inflows'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "listAllInflows", null);
__decorate([
    (0, common_1.Post)('inflows/:id/match'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ManualMatchInflowDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "manualMatch", null);
__decorate([
    (0, common_1.Post)('inflows/:id/propose-reject'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RejectInflowDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "proposeRejectInflow", null);
__decorate([
    (0, common_1.Post)('inflows/:id/propose-reverse'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "proposeReverseInflow", null);
__decorate([
    (0, common_1.Post)('inflows/:id/verify-with-vendor'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "verifyInflowWithVendor", null);
__decorate([
    (0, common_1.Post)('inflow-decisions/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_GATEWAY_SUSPENSE', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayController.prototype, "approveInflowDecision", null);
exports.PaymentGatewayController = PaymentGatewayController = __decorate([
    (0, common_1.Controller)('payment-gateway'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [payment_gateway_service_1.PaymentGatewayService])
], PaymentGatewayController);
//# sourceMappingURL=payment-gateway.controller.js.map