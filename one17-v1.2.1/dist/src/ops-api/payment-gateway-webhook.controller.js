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
exports.PaymentGatewayWebhookController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const payment_gateway_service_1 = require("../payment-gateway/payment-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let PaymentGatewayWebhookController = class PaymentGatewayWebhookController {
    gateway;
    constructor(gateway) {
        this.gateway = gateway;
    }
    async receive(dto) {
        const result = await this.gateway.receiveWebhook(dto);
        return { id: result.id, status: result.status };
    }
    async receivePaystack(headers, body) {
        const result = await this.gateway.receiveVendorWebhook('PAYSTACK', headers, body);
        return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
    }
    async receiveFlutterwave(headers, body, req) {
        const result = await this.gateway.receiveVendorWebhook('FLUTTERWAVE', headers, body, req.rawBody);
        return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
    }
    async receiveMonnify(headers, body) {
        const result = await this.gateway.receiveVendorWebhook('MONNIFY', headers, body);
        return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
    }
};
exports.PaymentGatewayWebhookController = PaymentGatewayWebhookController;
__decorate([
    (0, common_1.Post)(),
    (0, throttler_1.Throttle)({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.GatewayWebhookDto]),
    __metadata("design:returntype", Promise)
], PaymentGatewayWebhookController.prototype, "receive", null);
__decorate([
    (0, common_1.Post)('paystack'),
    (0, throttler_1.Throttle)({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayWebhookController.prototype, "receivePaystack", null);
__decorate([
    (0, common_1.Post)('flutterwave'),
    (0, throttler_1.Throttle)({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayWebhookController.prototype, "receiveFlutterwave", null);
__decorate([
    (0, common_1.Post)('monnify'),
    (0, throttler_1.Throttle)({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentGatewayWebhookController.prototype, "receiveMonnify", null);
exports.PaymentGatewayWebhookController = PaymentGatewayWebhookController = __decorate([
    (0, common_1.Controller)('payment-gateway/webhook'),
    __metadata("design:paramtypes", [payment_gateway_service_1.PaymentGatewayService])
], PaymentGatewayWebhookController);
//# sourceMappingURL=payment-gateway-webhook.controller.js.map