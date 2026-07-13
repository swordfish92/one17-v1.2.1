import { randomBytes, createHash } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { hash as argon2Hash, verify as argon2Verify } from '@node-rs/argon2';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { AuthenticatedPortalUser, PortalAuthError, PortalRequestContext } from './portal-auth.types';

// CHECK5 item 3 (invariant 23, spec §7.5/§6a): the SEPARATE auth realm,
// absolute — a completely independent identity/session table from
// AppUser/UserSession (auth.service.ts). A portal session token can never
// validate against SessionAuthGuard (different table entirely), and an ops
// session token can never validate here — the literal mechanism behind the
// "realm isolation" adversarial case, not just a routing convention.
@Injectable()
export class PortalAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  // Invariant 39(d): auto-provisions portal access for EVERY investor at
  // Stage-2 KYC completion (called from InvestorService.finalizeKycApproval),
  // not just WM admits — WM onboarding (Flow-C, WmService.onboardWmClient())
  // also calls this since a WM client's Stage-2 KYC already completed long
  // before WM admission. Idempotent for exactly that reason: whichever path
  // runs second is a no-op. Returns the bootstrap plaintext password once (no
  // email/SMS delivery pipeline exists in this codebase yet — a compliance
  // officer relays it out of band, same as any other first-login credential
  // handoff; flagged as a deferred integration, not silently assumed away).
  async provisionForInvestor(investorId: string): Promise<{ portalUserId: string; bootstrapPassword: string }> {
    const existing = await this.prisma.portalClientUser.findUnique({ where: { investorId } });
    if (existing) {
      // Still stamp WM bookkeeping even on the idempotent no-op path — a WM
      // admission that comes AFTER a Flow-A/graduated KYC completion already
      // provisioned the portal login, but wm_client_profile.portalProvisionedAt
      // still needs to reflect "provisioned by the time this became a WM
      // client" (updateMany, not update, so non-WM investors don't 500).
      await this.prisma.wmClientProfile.updateMany({
        where: { investorId, portalProvisionedAt: null },
        data: { portalProvisionedAt: new Date() },
      });
      return { portalUserId: existing.id, bootstrapPassword: '' };
    }

    const bootstrapPassword = randomBytes(9).toString('base64url');
    const passwordHash = await argon2Hash(bootstrapPassword);
    const portalUser = await this.prisma.portalClientUser.create({
      data: { investorId, passwordHash },
    });
    // WM-specific bookkeeping only applies when a WmClientProfile exists for
    // this investor (updateMany, not update, so non-WM investors don't 500).
    await this.prisma.wmClientProfile.updateMany({
      where: { investorId },
      data: { portalProvisionedAt: new Date() },
    });
    await this.audit.record({ action: 'CREATE', entityType: 'portal_client_user', entityId: portalUser.id, after: { investorId } });
    return { portalUserId: portalUser.id, bootstrapPassword };
  }

  // Invariant 28(e): counterparty onboarding-completion auto-provisions this
  // — mirrors provisionForClient exactly, just against the Counterparty
  // table rather than WmClientProfile.
  async provisionForCounterparty(counterpartyId: string): Promise<{ portalUserId: string; bootstrapPassword: string }> {
    const existing = await this.prisma.portalCounterpartyUser.findUnique({ where: { counterpartyId } });
    if (existing) return { portalUserId: existing.id, bootstrapPassword: '' };

    const bootstrapPassword = randomBytes(9).toString('base64url');
    const passwordHash = await argon2Hash(bootstrapPassword);
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

  // Invariant 28(e): "second portal-realm persona" — one login form, one
  // cookie, one guard; login tries the investor table first, then the
  // counterparty table (an account only ever has ONE type of credential, so
  // there's no ambiguity in which branch resolves it).
  async login(email: string, password: string, ctx: PortalRequestContext): Promise<{ token: string; portalUserId: string; expiresAt: Date; requiresPrivacyNoticeAcknowledgment: boolean }> {
    const investor = await this.prisma.investor.findUnique({ where: { contactEmail: email } });
    if (investor) {
      const portalUser = await this.prisma.portalClientUser.findUnique({ where: { investorId: investor.investorId } });
      if (portalUser) return this.completeLogin('portalClientUser', 'portal_client_user', 'portalClientSession', portalUser, password, ctx);
    }

    const counterparty = await this.prisma.counterparty.findUnique({ where: { contactEmail: email } });
    if (counterparty) {
      const portalUser = await this.prisma.portalCounterpartyUser.findUnique({ where: { counterpartyId: counterparty.id } });
      if (portalUser) return this.completeLogin('portalCounterpartyUser', 'portal_counterparty_user', 'portalCounterpartySession', portalUser, password, ctx);
    }

    await this.audit.record({
      action: 'LOGIN_FAILED',
      entityType: 'portal_login',
      entityId: email,
      ipAddress: ctx.ipAddress,
      after: { reason: 'no portal account for this email' },
    });
    throw new PortalAuthError('Invalid email or password.');
  }

  private async completeLogin(
    userModel: 'portalClientUser' | 'portalCounterpartyUser',
    entityType: string,
    sessionModel: 'portalClientSession' | 'portalCounterpartySession',
    portalUser: { id: string; passwordHash: string | null; lockedUntil: Date | null; status: string; failedLoginAttempts: number; firstLoginAt: Date | null },
    password: string,
    ctx: PortalRequestContext,
  ): Promise<{ token: string; portalUserId: string; expiresAt: Date; requiresPrivacyNoticeAcknowledgment: boolean }> {
    if (!portalUser.passwordHash) throw new PortalAuthError('Invalid email or password.');
    if (portalUser.lockedUntil && portalUser.lockedUntil.getTime() > Date.now()) {
      throw new PortalAuthError('Account is temporarily locked. Try again later.');
    }
    if (portalUser.status !== 'ACTIVE') {
      throw new PortalAuthError('Invalid email or password.');
    }

    const passwordOk = await argon2Verify(portalUser.passwordHash, password);
    if (!passwordOk) {
      const attempts = portalUser.failedLoginAttempts + 1;
      const lockedUntil = attempts >= 5 ? new Date(Date.now() + 15 * 60_000) : null;
      await (this.prisma[userModel] as any).update({ where: { id: portalUser.id }, data: { failedLoginAttempts: attempts, lockedUntil } });
      await this.audit.record({
        action: 'LOGIN_FAILED',
        entityType,
        entityId: portalUser.id,
        ipAddress: ctx.ipAddress,
        after: { reason: 'incorrect password', failedLoginAttempts: attempts },
      });
      throw new PortalAuthError('Invalid email or password.');
    }

    await (this.prisma[userModel] as any).update({ where: { id: portalUser.id }, data: { failedLoginAttempts: 0, lockedUntil: null } });

    const token = randomBytes(32).toString('hex');
    const tokenHash = this.hashToken(token);
    const expiresAt = new Date(Date.now() + 60 * 60_000);
    const session = await (this.prisma[sessionModel] as any).create({
      data: { portalUserId: portalUser.id, tokenHash, expiresAt, ipAddress: ctx.ipAddress },
    });
    await this.audit.record({ action: 'LOGIN', entityType, entityId: portalUser.id, ipAddress: ctx.ipAddress, sessionId: session.id });
    // Invariant 57(b)(i) (CHECK15): firstLoginAt is null until the
    // privacy-notice acknowledgment gate is completed (see
    // acknowledgePrivacyNoticeAtFirstLogin) -- signals the portal-ui to show
    // the notice before anything else on this session.
    return { token, portalUserId: portalUser.id, expiresAt, requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null };
  }

  // Invariant 57(b)(i): called by the portal controller's session-guarded
  // acknowledge route -- investorId/counterpartyId are derived from the
  // validated session, never taken from client input.
  async recordFirstLoginAcknowledgment(portalUserId: string, principalType: 'INVESTOR' | 'COUNTERPARTY'): Promise<void> {
    if (principalType === 'INVESTOR') {
      await this.prisma.portalClientUser.updateMany({ where: { id: portalUserId, firstLoginAt: null }, data: { firstLoginAt: new Date() } });
    } else {
      await this.prisma.portalCounterpartyUser.updateMany({ where: { id: portalUserId, firstLoginAt: null }, data: { firstLoginAt: new Date() } });
    }
  }

  async logout(token: string): Promise<void> {
    const tokenHash = this.hashToken(token);
    const clientSession = await this.prisma.portalClientSession.findUnique({ where: { tokenHash } });
    if (clientSession) {
      if (!clientSession.revokedAt) await this.prisma.portalClientSession.update({ where: { id: clientSession.id }, data: { revokedAt: new Date() } });
      return;
    }
    const counterpartySession = await this.prisma.portalCounterpartySession.findUnique({ where: { tokenHash } });
    if (counterpartySession && !counterpartySession.revokedAt) {
      await this.prisma.portalCounterpartySession.update({ where: { id: counterpartySession.id }, data: { revokedAt: new Date() } });
    }
  }

  async validateSession(token: string | undefined): Promise<AuthenticatedPortalUser | null> {
    if (!token) return null;
    const tokenHash = this.hashToken(token);

    const clientSession = await this.prisma.portalClientSession.findUnique({ where: { tokenHash } });
    if (clientSession) {
      if (clientSession.revokedAt || clientSession.expiresAt.getTime() <= Date.now()) return null;
      const portalUser = await this.prisma.portalClientUser.findUniqueOrThrow({ where: { id: clientSession.portalUserId } });
      return { portalUserId: portalUser.id, principalType: 'INVESTOR', investorId: portalUser.investorId, sessionId: clientSession.id };
    }

    const counterpartySession = await this.prisma.portalCounterpartySession.findUnique({ where: { tokenHash } });
    if (counterpartySession) {
      if (counterpartySession.revokedAt || counterpartySession.expiresAt.getTime() <= Date.now()) return null;
      const portalUser = await this.prisma.portalCounterpartyUser.findUniqueOrThrow({ where: { id: counterpartySession.portalUserId } });
      return { portalUserId: portalUser.id, principalType: 'COUNTERPARTY', counterpartyId: portalUser.counterpartyId, sessionId: counterpartySession.id };
    }

    return null;
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }
}
