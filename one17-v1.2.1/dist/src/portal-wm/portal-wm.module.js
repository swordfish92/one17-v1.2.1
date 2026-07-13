"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalWmModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const portal_auth_module_1 = require("../portal-auth/portal-auth.module");
const wm_module_1 = require("../wm/wm.module");
const complaint_module_1 = require("../complaint/complaint.module");
const client_messaging_module_1 = require("../client-messaging/client-messaging.module");
const statement_module_1 = require("../statement/statement.module");
const certificate_module_1 = require("../certificate/certificate.module");
const letter_module_1 = require("../letter/letter.module");
const payment_gateway_module_1 = require("../payment-gateway/payment-gateway.module");
const subscription_module_1 = require("../subscription/subscription.module");
const notification_module_1 = require("../notification/notification.module");
const product_module_1 = require("../product/product.module");
const marketing_module_1 = require("../marketing/marketing.module");
const portal_wm_controller_1 = require("./portal-wm.controller");
let PortalWmModule = class PortalWmModule {
};
exports.PortalWmModule = PortalWmModule;
exports.PortalWmModule = PortalWmModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, portal_auth_module_1.PortalAuthModule, wm_module_1.WmModule, complaint_module_1.ComplaintModule, client_messaging_module_1.ClientMessagingModule, statement_module_1.StatementModule, certificate_module_1.CertificateModule, letter_module_1.LetterModule, payment_gateway_module_1.PaymentGatewayModule, subscription_module_1.SubscriptionModule, notification_module_1.NotificationModule, product_module_1.ProductModule, marketing_module_1.MarketingModule],
        controllers: [portal_wm_controller_1.PortalWmController],
    })
], PortalWmModule);
//# sourceMappingURL=portal-wm.module.js.map