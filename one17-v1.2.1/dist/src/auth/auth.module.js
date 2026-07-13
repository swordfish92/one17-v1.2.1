"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const mfa_module_1 = require("../mfa/mfa.module");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const session_auth_guard_1 = require("./session-auth.guard");
const capability_guard_1 = require("./capability.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, audit_module_1.AuditModule, delegation_module_1.DelegationModule, (0, common_1.forwardRef)(() => mfa_module_1.MfaModule)],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard],
        exports: [auth_service_1.AuthService, session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map