"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BureauGatewayModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const bureau_gateway_service_1 = require("./bureau-gateway.service");
let BureauGatewayModule = class BureauGatewayModule {
};
exports.BureauGatewayModule = BureauGatewayModule;
exports.BureauGatewayModule = BureauGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule],
        providers: [bureau_gateway_service_1.BureauGatewayService],
        exports: [bureau_gateway_service_1.BureauGatewayService],
    })
], BureauGatewayModule);
//# sourceMappingURL=bureau-gateway.module.js.map