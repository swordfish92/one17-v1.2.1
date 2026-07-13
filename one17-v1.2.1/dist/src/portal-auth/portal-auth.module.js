"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalAuthModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const data_protection_module_1 = require("../data-protection/data-protection.module");
const portal_auth_service_1 = require("./portal-auth.service");
const portal_session_auth_guard_1 = require("./portal-session-auth.guard");
const portal_auth_controller_1 = require("./portal-auth.controller");
let PortalAuthModule = class PortalAuthModule {
};
exports.PortalAuthModule = PortalAuthModule;
exports.PortalAuthModule = PortalAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, data_protection_module_1.DataProtectionModule],
        controllers: [portal_auth_controller_1.PortalAuthController],
        providers: [portal_auth_service_1.PortalAuthService, portal_session_auth_guard_1.PortalSessionAuthGuard],
        exports: [portal_auth_service_1.PortalAuthService, portal_session_auth_guard_1.PortalSessionAuthGuard],
    })
], PortalAuthModule);
//# sourceMappingURL=portal-auth.module.js.map