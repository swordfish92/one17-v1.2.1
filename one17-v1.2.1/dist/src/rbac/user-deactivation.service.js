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
exports.UserDeactivationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
let UserDeactivationService = class UserDeactivationService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async deactivateUser(userId, actorUserId, reason) {
        const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
        if (user.status === 'SUSPENDED') {
            throw new Error(`User ${userId} is already SUSPENDED.`);
        }
        await this.prisma.appUser.update({ where: { id: userId }, data: { status: 'SUSPENDED' } });
        const activeGrants = await this.prisma.delegationOfAuthority.findMany({ where: { delegateUserId: userId, status: 'ACTIVE' } });
        for (const grant of activeGrants) {
            await this.delegation.revoke(grant.id, actorUserId, reason ?? 'Delegate user deactivated (invariant 51a-iv).');
        }
        await this.prisma.userSession.updateMany({ where: { userId, revokedAt: null }, data: { revokedAt: new Date() } });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'app_user',
            entityId: userId,
            after: { status: 'SUSPENDED', reason, delegationsRevoked: activeGrants.length },
        });
        return this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    }
    async reactivateUser(userId, actorUserId) {
        const updated = await this.prisma.appUser.update({ where: { id: userId }, data: { status: 'ACTIVE' } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'app_user', entityId: userId, after: { status: 'ACTIVE' } });
        return updated;
    }
};
exports.UserDeactivationService = UserDeactivationService;
exports.UserDeactivationService = UserDeactivationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], UserDeactivationService);
//# sourceMappingURL=user-deactivation.service.js.map