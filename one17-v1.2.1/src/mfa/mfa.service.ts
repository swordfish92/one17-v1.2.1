import { randomBytes } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { hash as argon2Hash, verify as argon2Verify } from '@node-rs/argon2';
import { generateSecret, generateURI, verify as totpVerify } from 'otplib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { MfaError, MfaEnrollmentStart, MfaStatus } from './mfa.types';

const BACKUP_CODE_COUNT = 10;
const ISSUER = 'One17 Enterprise Platform';

// otplib's totpVerify() THROWS (TokenLengthError) rather than returning
// { valid: false } when the token isn't a well-formed 6-digit TOTP code --
// verifyCode() also has to accept 10-character hex backup codes on the
// same input field, so a backup code would otherwise crash this call
// instead of falling through to the backup-code check below it.
async function isValidTotpCode(secret: string, code: string): Promise<boolean> {
  if (!/^\d{6}$/.test(code)) return false;
  const result = await totpVerify({ secret, token: code, epochTolerance: 30 });
  return result.valid;
}

// Invariant 68(c) H-02 (CHECK22 v1.0.1 remediation). The MANDATORY floor
// itself is fixed here, not in a config table a SUPER_ADMIN could quietly
// turn off — the CEO's directive names these two roles explicitly.
// Everything ABOVE this floor (financial-approval-holding seats, and the
// eventual all-staff switch) is governed config, per MfaFinancialCapability
// and MfaGlobalEnforcement.
const MANDATORY_ROLE_CODES = ['SUPER_ADMIN', 'MD_CEO'];

@Injectable()
export class MfaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async isMfaMandatory(userId: string): Promise<boolean> {
    const roles = await this.prisma.userRole.findMany({ where: { userId }, select: { roleCode: true } });
    const roleCodes = roles.map((r) => r.roleCode);
    if (roleCodes.some((code) => MANDATORY_ROLE_CODES.includes(code))) return true;

    const globalConfig = await this.prisma.mfaGlobalEnforcement.findUnique({ where: { id: 1 } });
    if (globalConfig?.allStaffMandatory) return true;

    if (roleCodes.length === 0) return false;
    const financialFunctionCodes = (await this.prisma.mfaFinancialCapability.findMany({ select: { functionCode: true } })).map((f) => f.functionCode);
    if (financialFunctionCodes.length === 0) return false;
    const holdsFinancialApprove = await this.prisma.rolePermission.findFirst({
      where: { roleCode: { in: roleCodes }, functionCode: { in: financialFunctionCodes }, level: 'APPROVE' },
    });
    return holdsFinancialApprove !== null;
  }

  async getStatus(userId: string): Promise<MfaStatus> {
    const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    return {
      mandatory: await this.isMfaMandatory(userId),
      enrolled: user.mfaEnabledAt !== null,
      enabledAt: user.mfaEnabledAt,
    };
  }

  // Called BEGIN of enrollment — stores an UNCONFIRMED secret. Re-callable
  // (a user who abandons enrollment mid-way and comes back gets a fresh
  // secret+QR, never stuck on one they failed to scan correctly).
  async beginEnrollment(userId: string): Promise<MfaEnrollmentStart> {
    const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    const secret = generateSecret();
    await this.prisma.appUser.update({ where: { id: userId }, data: { totpSecret: secret } });
    const otpauthUrl = generateURI({ issuer: ISSUER, label: user.email, secret });
    return { secret, otpauthUrl };
  }

  // Proves possession of the enrolled device by requiring one valid code
  // before flipping mfaEnabledAt — the actual "MFA is ON" moment. Issues
  // backup codes ONCE, in plaintext, in the return value only (never
  // retrievable again — matches this codebase's own "never re-print a
  // credential" convention, see reset-dev-db.ts's DATABASE_URL handling).
  async confirmEnrollment(userId: string, code: string): Promise<string[]> {
    const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    if (!user.totpSecret) {
      throw new MfaError('No enrollment in progress — call beginEnrollment first.');
    }
    if (!(await isValidTotpCode(user.totpSecret, code))) {
      throw new MfaError('Invalid code — check your authenticator app and try again.');
    }

    const backupCodes = Array.from({ length: BACKUP_CODE_COUNT }, () => randomBytes(5).toString('hex'));
    await this.prisma.$transaction(async (tx) => {
      await tx.appUser.update({ where: { id: userId }, data: { mfaEnabledAt: new Date() } });
      await tx.mfaBackupCode.deleteMany({ where: { userId } });
      for (const plainCode of backupCodes) {
        await tx.mfaBackupCode.create({ data: { userId, codeHash: await argon2Hash(plainCode) } });
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

  // The login second-factor check: a valid TOTP code, OR a valid unused
  // backup code (marked used on success — single-use by design).
  async verifyCode(userId: string, code: string): Promise<boolean> {
    const user = await this.prisma.appUser.findUniqueOrThrow({ where: { id: userId } });
    if (!user.totpSecret || !user.mfaEnabledAt) return false;

    if (await isValidTotpCode(user.totpSecret, code)) return true;

    const unusedCodes = await this.prisma.mfaBackupCode.findMany({ where: { userId, usedAt: null } });
    for (const backupCode of unusedCodes) {
      if (await argon2Verify(backupCode.codeHash, code)) {
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

  // SUPER_ADMIN-only recovery action (lost device, no backup codes left) —
  // clears enrollment entirely; the user re-enrolls on next login if MFA
  // is still mandatory for them. Always audited under the ADMIN's id, not
  // silently self-serviceable.
  async resetMfa(targetUserId: string, actorUserId: string): Promise<void> {
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

  async addFinancialCapability(functionCode: string, actorUserId: string) {
    await this.prisma.platformFunction.findUniqueOrThrow({ where: { code: functionCode } });
    const row = await this.prisma.mfaFinancialCapability.upsert({
      where: { functionCode },
      create: { functionCode, addedByUserId: actorUserId },
      update: {},
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'mfa_financial_capability', entityId: functionCode });
    return row;
  }

  async removeFinancialCapability(functionCode: string, actorUserId: string) {
    await this.prisma.mfaFinancialCapability.delete({ where: { functionCode } });
    await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'mfa_financial_capability', entityId: functionCode });
  }

  async setGlobalEnforcement(allStaffMandatory: boolean, actorUserId: string) {
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
}
