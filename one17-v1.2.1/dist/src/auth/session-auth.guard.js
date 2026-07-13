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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAuthGuard = exports.SESSION_COOKIE_NAME = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const node_crypto_1 = require("node:crypto");
const auth_service_1 = require("./auth.service");
const audit_service_1 = require("../audit/audit.service");
const allow_mfa_pending_decorator_1 = require("./allow-mfa-pending.decorator");
exports.SESSION_COOKIE_NAME = 'one17_ops_session';
let SessionAuthGuard = class SessionAuthGuard {
    authService;
    audit;
    reflector;
    constructor(authService, audit, reflector) {
        this.authService = authService;
        this.audit = audit;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        if (!req.requestId)
            req.requestId = (0, node_crypto_1.randomUUID)();
        const token = req.cookies?.[exports.SESSION_COOKIE_NAME];
        const user = await this.authService.validateSession(token);
        if (!user) {
            await this.audit.record({
                action: 'PERMISSION_DENIED',
                entityType: 'http_request',
                entityId: `${req.method} ${req.originalUrl ?? req.url}`,
                ipAddress: req.ip,
                requestId: req.requestId,
                after: { reason: 'no valid session (401)' },
            });
            throw new common_1.UnauthorizedException('Not authenticated.');
        }
        if (user.mfaPending) {
            const allowed = this.reflector.get(allow_mfa_pending_decorator_1.ALLOW_MFA_PENDING_KEY, context.getHandler());
            if (!allowed) {
                await this.audit.record({
                    actorUserId: user.userId,
                    action: 'PERMISSION_DENIED',
                    entityType: 'http_request',
                    entityId: `${req.method} ${req.originalUrl ?? req.url}`,
                    ipAddress: req.ip,
                    sessionId: user.sessionId,
                    requestId: req.requestId,
                    after: { reason: 'MFA verification still pending (401)' },
                });
                throw new common_1.UnauthorizedException('MFA verification required.');
            }
        }
        req.user = user;
        return true;
    }
};
exports.SessionAuthGuard = SessionAuthGuard;
exports.SessionAuthGuard = SessionAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        audit_service_1.AuditService,
        core_1.Reflector])
], SessionAuthGuard);
//# sourceMappingURL=session-auth.guard.js.map