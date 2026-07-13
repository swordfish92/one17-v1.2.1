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
exports.AuthService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const argon2_1 = require("@node-rs/argon2");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const mfa_service_1 = require("../mfa/mfa.service");
const auth_types_1 = require("./auth.types");
let AuthService = class AuthService {
    prisma;
    audit;
    mfa;
    constructor(prisma, audit, mfa) {
        this.prisma = prisma;
        this.audit = audit;
        this.mfa = mfa;
    }
    async login(email, password, ctx) {
        const policy = await this.getPolicy();
        const user = await this.prisma.appUser.findUnique({ where: { email } });
        if (!user || !user.passwordHash) {
            await this.audit.record({
                action: 'LOGIN_FAILED',
                entityType: 'app_user',
                entityId: email,
                ipAddress: ctx.ipAddress,
                requestId: ctx.requestId,
                after: { reason: 'no account or no password set for this email' },
            });
            throw new auth_types_1.AuthError('Invalid email or password.');
        }
        if (user.lockedUntil && user.lockedUntil.getTime() > Date.now()) {
            await this.audit.record({
                actorUserId: user.id,
                action: 'LOGIN_FAILED',
                entityType: 'app_user',
                entityId: user.id,
                ipAddress: ctx.ipAddress,
                requestId: ctx.requestId,
                after: { reason: `account locked until ${user.lockedUntil.toISOString()}` },
            });
            throw new auth_types_1.AuthError('Account is temporarily locked. Try again later.');
        }
        if (user.status !== 'ACTIVE') {
            await this.audit.record({
                actorUserId: user.id,
                action: 'LOGIN_FAILED',
                entityType: 'app_user',
                entityId: user.id,
                ipAddress: ctx.ipAddress,
                requestId: ctx.requestId,
                after: { reason: `account status is ${user.status}, not ACTIVE` },
            });
            throw new auth_types_1.AuthError('Invalid email or password.');
        }
        const passwordOk = await (0, argon2_1.verify)(user.passwordHash, password);
        if (!passwordOk) {
            const attempts = user.failedLoginAttempts + 1;
            const lockedUntil = attempts >= policy.maxFailedAttempts
                ? new Date(Date.now() + policy.lockoutMinutes * 60_000)
                : null;
            await this.prisma.appUser.update({
                where: { id: user.id },
                data: { failedLoginAttempts: attempts, lockedUntil },
            });
            await this.audit.record({
                actorUserId: user.id,
                action: 'LOGIN_FAILED',
                entityType: 'app_user',
                entityId: user.id,
                ipAddress: ctx.ipAddress,
                requestId: ctx.requestId,
                after: {
                    reason: 'incorrect password',
                    failedLoginAttempts: attempts,
                    lockedUntil: lockedUntil?.toISOString() ?? null,
                },
            });
            throw new auth_types_1.AuthError('Invalid email or password.');
        }
        await this.prisma.appUser.update({
            where: { id: user.id },
            data: { failedLoginAttempts: 0, lockedUntil: null },
        });
        const mandatory = await this.mfa.isMfaMandatory(user.id);
        const enrolled = user.mfaEnabledAt !== null;
        const mfaRequired = mandatory || enrolled;
        const mfaPendingTtlMinutes = 10;
        const token = (0, node_crypto_1.randomBytes)(32).toString('hex');
        const tokenHash = this.hashToken(token);
        const expiresAt = mfaRequired
            ? new Date(Date.now() + mfaPendingTtlMinutes * 60_000)
            : new Date(Date.now() + policy.sessionTtlMinutes * 60_000);
        const session = await this.prisma.userSession.create({
            data: {
                userId: user.id,
                tokenHash,
                expiresAt,
                ipAddress: ctx.ipAddress,
                userAgent: undefined,
                mfaPending: mfaRequired,
            },
        });
        await this.audit.record({
            actorUserId: user.id,
            action: 'LOGIN',
            entityType: 'app_user',
            entityId: user.id,
            ipAddress: ctx.ipAddress,
            sessionId: session.id,
            requestId: ctx.requestId,
            after: mfaRequired ? { mfaPending: true } : undefined,
        });
        return { token, userId: user.id, expiresAt, mfaRequired, mfaEnrolled: enrolled };
    }
    async promoteSessionPastMfa(token) {
        const policy = await this.getPolicy();
        const tokenHash = this.hashToken(token);
        const expiresAt = new Date(Date.now() + policy.sessionTtlMinutes * 60_000);
        await this.prisma.userSession.update({
            where: { tokenHash },
            data: { mfaPending: false, expiresAt },
        });
    }
    async logout(token) {
        const tokenHash = this.hashToken(token);
        const session = await this.prisma.userSession.findUnique({ where: { tokenHash } });
        if (!session || session.revokedAt)
            return;
        await this.prisma.userSession.update({
            where: { id: session.id },
            data: { revokedAt: new Date() },
        });
        await this.audit.record({
            actorUserId: session.userId,
            action: 'UPDATE',
            entityType: 'user_session',
            entityId: session.id,
            after: { revoked: true },
        });
    }
    async validateSession(token) {
        if (!token)
            return null;
        const tokenHash = this.hashToken(token);
        const session = await this.prisma.userSession.findUnique({ where: { tokenHash } });
        if (!session)
            return null;
        if (session.revokedAt)
            return null;
        if (session.expiresAt.getTime() <= Date.now())
            return null;
        return { userId: session.userId, sessionId: session.id, mfaPending: session.mfaPending };
    }
    async setPassword(userId, plainPassword) {
        const policy = await this.getPolicy();
        if (plainPassword.length < policy.minPasswordLength) {
            throw new auth_types_1.AuthError(`Password must be at least ${policy.minPasswordLength} characters.`);
        }
        const passwordHash = await (0, argon2_1.hash)(plainPassword);
        await this.prisma.appUser.update({
            where: { id: userId },
            data: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
        });
    }
    async getPolicy() {
        const existing = await this.prisma.authPolicy.findUnique({ where: { id: 1 } });
        if (existing)
            return existing;
        return this.prisma.authPolicy.create({ data: { id: 1 } });
    }
    hashToken(token) {
        return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        mfa_service_1.MfaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map