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
exports.CapabilityGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const delegation_service_1 = require("../delegation/delegation.service");
const audit_service_1 = require("../audit/audit.service");
const requires_capability_decorator_1 = require("./requires-capability.decorator");
let CapabilityGuard = class CapabilityGuard {
    reflector;
    delegation;
    audit;
    constructor(reflector, delegation, audit) {
        this.reflector = reflector;
        this.delegation = delegation;
        this.audit = audit;
    }
    async canActivate(context) {
        const required = this.reflector.get(requires_capability_decorator_1.CAPABILITY_KEY, context.getHandler());
        if (!required || required.length === 0)
            return true;
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        if (!user)
            return false;
        for (const candidate of required) {
            const { eligible } = await this.delegation.hasCapability(user.userId, candidate.functionCode, candidate.level);
            if (eligible)
                return true;
        }
        await this.audit.record({
            actorUserId: user.userId,
            action: 'PERMISSION_DENIED',
            entityType: 'http_request',
            entityId: `${req.method} ${req.originalUrl ?? req.url}`,
            ipAddress: req.ip,
            sessionId: user.sessionId,
            requestId: req.requestId,
            after: { requiredCapabilities: required, reason: '403' },
        });
        throw new common_1.ForbiddenException(`Lacks required authority on any of: ${required.map((r) => `${r.level} ${r.functionCode}`).join(' OR ')} (standing or delegated).`);
    }
};
exports.CapabilityGuard = CapabilityGuard;
exports.CapabilityGuard = CapabilityGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        delegation_service_1.DelegationService,
        audit_service_1.AuditService])
], CapabilityGuard);
//# sourceMappingURL=capability.guard.js.map