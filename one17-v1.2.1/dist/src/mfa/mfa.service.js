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
exports.MfaService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const argon2_1 = require("@node-rs/argon2");
const otplib_1 = require("otplib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const mfa_types_1 = require("./mfa.types");
const BACKUP_CODE_COUNT = 10;
const ISSUER = 'One17 Enterprise Platform';
async function isValidTotpCode(secret, code) {
    if (!/^\d{6}$/.test(code))
        return false;
    const result = await (0, otplib_1.verify)({ secret, token: code, epochTolerance: 30 });
    return result.valid;
}
const MANDATORY_ROLE_CODES = ['SUPER_ADMIN', 'MD_CEO'];
let MfaService = class MfaService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async isMfaMandatory(userId) {
        const roles = await this.prisma.userRole.findMany({ where: { userId }, select: { roleCode: true } });
        const roleCodes = roles.map((r) => r.roleCode);
        if (roleCodes.some((code) => MANDATORY_ROLE_CODES.includes(code)))
            return true;
        const globalConfig = await this.prisma.mfaGlobalEnforcement.findUnique({ where: { id: 1 } });
        if (globalConfig?.allStaffMandatory)
            return true;
        if (roleCodes.length === 0)
            return false;
        const financialFunctionCodes = (await this.prisma.mfaFinancialCapability.findMany({ select: { functionCode: true } })).map((f) => f.functionCode);
        if (financialFunctionCodes.length === 0)
            return false;
        const holdsFinancialApprove = await this.prisma.rolePermission.findFirst({
            where: { roleCode: { in: roleCodes }, functionCode: { in: financialFunctionCodes }, level: 'APPROVE' },
        });
        return holdsFinancialApprove !== null;
    }
    async getStatus(userId) {
        const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
        return {
            mandatory: await this.isMfaMandatory(userId),
            enrolled: user.mfaEnabledAt !== null,
            enabledAt: user.mfaEnabledAt,
        };
    }
    async beginEnrollment(userId) {
        const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
        const secret = (0, otplib_1.generateSecret)();
        await this.prisma.appUser.update({ where: { id: userId }, data: { totpSecret: secret } });
        const otpauthUrl = (0, otplib_1.generateURI)({ issuer: ISSUER, label: user.email, secret });
        return { secret, otpauthUrl };
    }
    async confirmEnrollment(userId, code) {
        const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
        if (!user.totpSecret) {
            throw new mfa_types_1.MfaError('No enrollment in progress — call beginEnrollment first.');
        }
        if (!(await isValidTotpCode(user.totpSecret, code))) {
            throw new mfa_types_1.MfaError('Invalid code — check your authenticator app and try again.');
        }
        const backupCodes = Array.from({ length: BACKUP_CODE_COUNT }, () => (0, node_crypto_1.randomBytes)(5).toString('hex'));
        await this.prisma.$transaction(async (tx) => {
            await tx.appUser.update({ where: { id: userId }, data: { mfaEnabledAt: new Date() } });
            await tx.mfaBackupCode.deleteMany({ where: { userId } });
            for (const plainCode of backupCodes) {
                await tx.mfaBackupCode.create({ data: { userId, codeHash: await (0, argon2_1.hash)(plainCode) } });
            }
        });
        await this.audit.record({
            actorUserId: userId,
            action: 'UPDATE',
            entityType: 'app_user',
            entityId: userId,
            after: { mfaEnabled: true },
        });
        return backupCodes;
    }
    async verifyCode(userId, code) {
        const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
        if (!user.totpSecret || !user.mfaEnabledAt)
            return false;
        if (await isValidTotpCode(user.totpSecret, code))
            return true;
        const unusedCodes = await this.prisma.mfaBackupCode.findMany({ where: { userId, usedAt: null } });
        for (const backupCode of unusedCodes) {
            if (await (0, argon2_1.verify)(backupCode.codeHash, code)) {
                await this.prisma.mfaBackupCode.update({ where: { id: backupCode.id }, data: { usedAt: new Date() } });
                await this.audit.record({
                    actorUserId: userId,
                    action: 'UPDATE',
                    entityType: 'mfa_backup_code',
                    entityId: backupCode.id,
                    after: { used: true },
                });
                return true;
            }
        }
        return false;
    }
    async resetMfa(targetUserId, actorUserId) {
        await this.prisma.$transaction(async (tx) => {
            await tx.appUser.update({ where: { id: targetUserId }, data: { totpSecret: null, mfaEnabledAt: null } });
            await tx.mfaBackupCode.deleteMany({ where: { userId: targetUserId } });
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'app_user',
            entityId: targetUserId,
            after: { mfaReset: true, resetBy: actorUserId },
        });
    }
    async listFinancialCapabilities() {
        return this.prisma.mfaFinancialCapability.findMany({ orderBy: { functionCode: 'asc' } });
    }
    async addFinancialCapability(functionCode, actorUserId) {
        await this.prisma.platformFunction.findUniqueOrThrow({ where: { code: functionCode } });
        const row = await this.prisma.mfaFinancialCapability.upsert({
            where: { functionCode },
            create: { functionCode, addedByUserId: actorUserId },
            update: {},
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'mfa_financial_capability', entityId: functionCode });
        return row;
    }
    async removeFinancialCapability(functionCode, actorUserId) {
        await this.prisma.mfaFinancialCapability.delete({ where: { functionCode } });
        await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'mfa_financial_capability', entityId: functionCode });
    }
    async setGlobalEnforcement(allStaffMandatory, actorUserId) {
        const row = await this.prisma.mfaGlobalEnforcement.upsert({
            where: { id: 1 },
            create: { id: 1, allStaffMandatory, updatedByUserId: actorUserId },
            update: { allStaffMandatory, updatedByUserId: actorUserId },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'mfa_global_enforcement',
            entityId: '1',
            after: { allStaffMandatory },
        });
        return row;
    }
};
exports.MfaService = MfaService;
exports.MfaService = MfaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], MfaService);
//# sourceMappingURL=mfa.service.js.map