"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalZakatModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const portal_auth_module_1 = require("../portal-auth/portal-auth.module");
const zakat_module_1 = require("../zakat/zakat.module");
const portal_zakat_controller_1 = require("./portal-zakat.controller");
let PortalZakatModule = class PortalZakatModule {
};
exports.PortalZakatModule = PortalZakatModule;
exports.PortalZakatModule = PortalZakatModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, portal_auth_module_1.PortalAuthModule, zakat_module_1.ZakatModule],
        controllers: [portal_zakat_controller_1.PortalZakatController],
    })
], PortalZakatModule);
//# sourceMappingURL=portal-zakat.module.js.map