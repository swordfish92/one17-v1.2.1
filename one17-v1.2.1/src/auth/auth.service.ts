import { randomBytes, createHash } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { hash as argon2Hash, verify as argon2Verify } from '@node-rs/argon2';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { MfaService } from '../mfa/mfa.service';
import { AuthenticatedUser, AuthError, RequestContext } from './auth.types';

// Item 4a (HTTP + Auth layer, CLAUDE.md Stack Decisions): server-side
// sessions, argon2id hashing, config-driven lockout (invariant 10 — no
// hardcoded thresholds; see AuthPolicy). This service owns the ONLY
// password/session logic in the app — AuthController is a thin adapter
// that reads/writes the HTTP cookie and calls in here.
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly mfa: MfaService,
  ) {}

  async login(
    email: string,
    password: string,
    ctx: RequestContext,
  ): Promise<{ token: string; userId: string; expiresAt: Date; mfaRequired: boolean; mfaEnrolled: boolean }> {
    const policy = await this.getPolicy();
    const user = await this.prisma.appUser.findUnique({ where: { email } });

    if (!user || !user.passwordHash) {
      // Same generic failure for "no such user" and "no password set" —
      // never reveal which, that's a user-enumeration leak.
      await this.audit.record({
        action: 'LOGIN_FAILED',
        entityType: 'app_user',
        entityId: email,
        ipAddress: ctx.ipAddress,
        requestId: ctx.requestId,
        after: { reason: 'no account or no password set for this email' },
      });
      throw new AuthError('Invalid email or password.');
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
      throw new AuthError('Account is temporarily locked. Try again later.');
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
      throw new AuthError('Invalid email or password.');
    }

    const passwordOk = await argon2Verify(user.passwordHash, password);
    if (!passwordOk) {
      const attempts = user.failedLoginAttempts + 1;
      const lockedUntil =
        attempts >= policy.maxFailedAttempts
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
      throw new AuthError('Invalid email or password.');
    }

    // Success: reset the counter and issue a session.
    await this.prisma.appUser.update({
      where: { id: user.id },
      data: { failedLoginAttempts: 0, lockedUntil: null },
    });

    // Invariant 68(c) H-02: MFA applies if it's mandatory for this seat, OR
    // the user has voluntarily enrolled already (turning it on themselves
    // means every future login, not just some). Either way the session is
    // created PENDING — the cookie is set (so the client can call the MFA
    // endpoints with it) but SessionAuthGuard blocks every other route
    // until MfaService.verifyCode() (or a fresh enrollment) succeeds.
    // Short TTL while pending: a stalled/abandoned MFA step can't leave a
    // long-lived half-authenticated session sitting around.
    const mandatory = await this.mfa.isMfaMandatory(user.id);
    const enrolled = user.mfaEnabledAt !== null;
    const mfaRequired = mandatory || enrolled;
    const mfaPendingTtlMinutes = 10;

    const token = randomBytes(32).toString('hex');
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

  // Completes the second factor for a PENDING session — flips mfaPending
  // off and extends the session to the full policy TTL. Called by
  // MfaController after MfaService.verifyCode() (or a fresh
  // confirmEnrollment) succeeds; kept here, not in MfaService, since
  // session lifecycle is this service's job everywhere else too.
  async promoteSessionPastMfa(token: string): Promise<void> {
    const policy = await this.getPolicy();
    const tokenHash = this.hashToken(token);
    const expiresAt = new Date(Date.now() + policy.sessionTtlMinutes * 60_000);
    await this.prisma.userSession.update({
      where: { tokenHash },
      data: { mfaPending: false, expiresAt },
    });
  }

  async logout(token: string): Promise<void> {
    const tokenHash = this.hashToken(token);
    const session = await this.prisma.userSession.findUnique({ where: { tokenHash } });
    if (!session || session.revokedAt) return;
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

  async validateSession(token: string | undefined): Promise<AuthenticatedUser | null> {
    if (!token) return null;
    const tokenHash = this.hashToken(token);
    const session = await this.prisma.userSession.findUnique({ where: { tokenHash } });
    if (!session) return null;
    if (session.revokedAt) return null;
    if (session.expiresAt.getTime() <= Date.now()) return null;
    return { userId: session.userId, sessionId: session.id, mfaPending: session.mfaPending };
  }

  // Dev/admin helper — there is no self-service signup in this app (staff
  // accounts are provisioned via seed/migration), so setting a password is
  // an explicit administrative action, not a public endpoint.
  async setPassword(userId: string, plainPassword: string): Promise<void> {
    const policy = await this.getPolicy();
    if (plainPassword.length < policy.minPasswordLength) {
      throw new AuthError(`Password must be at least ${policy.minPasswordLength} characters.`);
    }
    const passwordHash = await argon2Hash(plainPassword);
    await this.prisma.appUser.update({
      where: { id: userId },
      data: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
    });
  }

  private async getPolicy() {
    const existing = await this.prisma.authPolicy.findUnique({ where: { id: 1 } });
    if (existing) return existing;
    return this.prisma.authPolicy.create({ data: { id: 1 } });
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }
}
