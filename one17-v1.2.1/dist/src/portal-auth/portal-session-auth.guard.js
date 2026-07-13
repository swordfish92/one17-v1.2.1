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
exports.PortalSessionAuthGuard = exports.PORTAL_SESSION_COOKIE_NAME = void 0;
const common_1 = require("@nestjs/common");
const portal_auth_service_1 = require("./portal-auth.service");
const audit_service_1 = require("../audit/audit.service");
exports.PORTAL_SESSION_COOKIE_NAME = 'one17_portal_session';
let PortalSessionAuthGuard = class PortalSessionAuthGuard {
    portalAuth;
    audit;
    constructor(portalAuth, audit) {
        this.portalAuth = portalAuth;
        this.audit = audit;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const token = req.cookies?.[exports.PORTAL_SESSION_COOKIE_NAME];
        const user = await this.portalAuth.validateSession(token);
        if (!user) {
            await this.audit.record({
                action: 'PERMISSION_DENIED',
                entityType: 'http_request',
                entityId: `${req.method} ${req.originalUrl ?? req.url}`,
                ipAddress: req.ip,
                after: { reason: 'no valid portal session (401)' },
            });
            throw new common_1.UnauthorizedException('Not authenticated.');
        }
        req.portalUser = user;
        return true;
    }
};
exports.PortalSessionAuthGuard = PortalSessionAuthGuard;
exports.PortalSessionAuthGuard = PortalSessionAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [portal_auth_service_1.PortalAuthService,
        audit_service_1.AuditService])
], PortalSessionAuthGuard);
//# sourceMappingURL=portal-session-auth.guard.js.map