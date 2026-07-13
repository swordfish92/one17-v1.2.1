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
exports.PortalAuthService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const argon2_1 = require("@node-rs/argon2");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const portal_auth_types_1 = require("./portal-auth.types");
let PortalAuthService = class PortalAuthService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async provisionForInvestor(investorId) {
        const existing = await this.prisma.portalClientUser.findUnique({ where: { investorId } });
        if (existing) {
            await this.prisma.wmClientProfile.updateMany({
                where: { investorId, portalProvisionedAt: null },
                data: { portalProvisionedAt: new Date() },
            });
            return { portalUserId: existing.id, bootstrapPassword: '' };
        }
        const bootstrapPassword = (0, node_crypto_1.randomBytes)(9).toString('base64url');
        const passwordHash = await (0, argon2_1.hash)(bootstrapPassword);
        const portalUser = await this.prisma.portalClientUser.create({
            data: { investorId, passwordHash },
        });
        await this.prisma.wmClientProfile.updateMany({
            where: { investorId },
            data: { portalProvisionedAt: new Date() },
        });
        await this.audit.record({ action: 'CREATE', entityType: 'portal_client_user', entityId: portalUser.id, after: { investorId } });
        return { portalUserId: portalUser.id, bootstrapPassword };
    }
    async provisionForCounterparty(counterpartyId) {
        const existing = await this.prisma.portalCounterpartyUser.findUnique({ where: { counterpartyId } });
        if (existing)
            return { portalUserId: existing.id, bootstrapPassword: '' };
        const bootstrapPassword = (0, node_crypto_1.randomBytes)(9).toString('base64url');
        const passwordHash = await (0, argon2_1.hash)(bootstrapPassword);
        const portalUser = await this.prisma.portalCounterpartyUser.create({
            data: { counterpartyId, passwordHash },
        });
        await this.prisma.counterparty.update({
            where: { id: counterpartyId },
            data: { portalProvisionedAt: new Date() },
        });
        await this.audit.record({ action: 'CREATE', entityType: 'portal_counterparty_user', entityId: portalUser.id, after: { counterpartyId } });
        return { portalUserId: portalUser.id, bootstrapPassword };
    }
    async login(email, password, ctx) {
        const investor = await this.prisma.investor.findUnique({ where: { contactEmail: email } });
        if (investor) {
            const portalUser = await this.prisma.portalClientUser.findUnique({ where: { investorId: investor.investorId } });
            if (portalUser)
                return this.completeLogin('portalClientUser', 'portal_client_user', 'portalClientSession', portalUser, password, ctx);
        }
        const counterparty = await this.prisma.counterparty.findUnique({ where: { contactEmail: email } });
        if (counterparty) {
            const portalUser = await this.prisma.portalCounterpartyUser.findUnique({ where: { counterpartyId: counterparty.id } });
            if (portalUser)
                return this.completeLogin('portalCounterpartyUser', 'portal_counterparty_user', 'portalCounterpartySession', portalUser, password, ctx);
        }
        await this.audit.record({
            action: 'LOGIN_FAILED',
            entityType: 'portal_login',
            entityId: email,
            ipAddress: ctx.ipAddress,
            after: { reason: 'no portal account for this email' },
        });
        throw new portal_auth_types_1.PortalAuthError('Invalid email or password.');
    }
    async completeLogin(userModel, entityType, sessionModel, portalUser, password, ctx) {
        if (!portalUser.passwordHash)
            throw new portal_auth_types_1.PortalAuthError('Invalid email or password.');
        if (portalUser.lockedUntil && portalUser.lockedUntil.getTime() > Date.now()) {
            throw new portal_auth_types_1.PortalAuthError('Account is temporarily locked. Try again later.');
        }
        if (portalUser.status !== 'ACTIVE') {
            throw new portal_auth_types_1.PortalAuthError('Invalid email or password.');
        }
        const passwordOk = await (0, argon2_1.verify)(portalUser.passwordHash, password);
        if (!passwordOk) {
            const attempts = portalUser.failedLoginAttempts + 1;
            const lockedUntil = attempts >= 5 ? new Date(Date.now() + 15 * 60_000) : null;
            await this.prisma[userModel].update({ where: { id: portalUser.id }, data: { failedLoginAttempts: attempts, lockedUntil } });
            await this.audit.record({
                action: 'LOGIN_FAILED',
                entityType,
                entityId: portalUser.id,
                ipAddress: ctx.ipAddress,
                after: { reason: 'incorrect password', failedLoginAttempts: attempts },
            });
            throw new portal_auth_types_1.PortalAuthError('Invalid email or password.');
        }
        await this.prisma[userModel].update({ where: { id: portalUser.id }, data: { failedLoginAttempts: 0, lockedUntil: null } });
        const token = (0, node_crypto_1.randomBytes)(32).toString('hex');
        const tokenHash = this.hashToken(token);
        const expiresAt = new Date(Date.now() + 60 * 60_000);
        const session = await this.prisma[sessionModel].create({
            data: { portalUserId: portalUser.id, tokenHash, expiresAt, ipAddress: ctx.ipAddress },
        });
        await this.audit.record({ action: 'LOGIN', entityType, entityId: portalUser.id, ipAddress: ctx.ipAddress, sessionId: session.id });
        return { token, portalUserId: portalUser.id, expiresAt, requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null };
    }
    async recordFirstLoginAcknowledgment(portalUserId, principalType) {
        if (principalType === 'INVESTOR') {
            await this.prisma.portalClientUser.updateMany({ where: { id: portalUserId, firstLoginAt: null }, data: { firstLoginAt: new Date() } });
        }
        else {
            await this.prisma.portalCounterpartyUser.updateMany({ where: { id: portalUserId, firstLoginAt: null }, data: { firstLoginAt: new Date() } });
        }
    }
    async logout(token) {
        const tokenHash = this.hashToken(token);
        const clientSession = await this.prisma.portalClientSession.findUnique({ where: { tokenHash } });
        if (clientSession) {
            if (!clientSession.revokedAt)
                await this.prisma.portalClientSession.update({ where: { id: clientSession.id }, data: { revokedAt: new Date() } });
            return;
        }
        const counterpartySession = await this.prisma.portalCounterpartySession.findUnique({ where: { tokenHash } });
        if (counterpartySession && !counterpartySession.revokedAt) {
            await this.prisma.portalCounterpartySession.update({ where: { id: counterpartySession.id }, data: { revokedAt: new Date() } });
        }
    }
    async validateSession(token) {
        if (!token)
            return null;
        const tokenHash = this.hashToken(token);
        const clientSession = await this.prisma.portalClientSession.findUnique({ where: { tokenHash } });
        if (clientSession) {
            if (clientSession.revokedAt || clientSession.expiresAt.getTime() <= Date.now())
                return null;
            const portalUser = await this.prisma.portalClientUser.findUniqueOrThrow({ where: { id: clientSession.portalUserId } });
            return { portalUserId: portalUser.id, principalType: 'INVESTOR', investorId: portalUser.investorId, sessionId: clientSession.id };
        }
        const counterpartySession = await this.prisma.portalCounterpartySession.findUnique({ where: { tokenHash } });
        if (counterpartySession) {
            if (counterpartySession.revokedAt || counterpartySession.expiresAt.getTime() <= Date.now())
                return null;
            const portalUser = await this.prisma.portalCounterpartyUser.findUniqueOrThrow({ where: { id: counterpartySession.portalUserId } });
            return { portalUserId: portalUser.id, principalType: 'COUNTERPARTY', counterpartyId: portalUser.counterpartyId, sessionId: counterpartySession.id };
        }
        return null;
    }
    hashToken(token) {
        return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
    }
};
exports.PortalAuthService = PortalAuthService;
exports.PortalAuthService = PortalAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], PortalAuthService);
//# sourceMappingURL=portal-auth.service.js.map