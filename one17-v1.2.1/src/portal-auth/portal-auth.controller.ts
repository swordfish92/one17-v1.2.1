import { Body, Controller, Get, HttpCode, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { Throttle } from '@nestjs/throttler';
import { PortalAuthService } from './portal-auth.service';
import { PortalAuthError, PortalLoginDto } from './portal-auth.types';
import { PortalSessionAuthGuard, PORTAL_SESSION_COOKIE_NAME } from './portal-session-auth.guard';
import { CurrentPortalUser } from './current-portal-user.decorator';
import type { AuthenticatedPortalUser } from './portal-auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';

// Mounted at /portal/auth — a DIFFERENT path root from /auth (ops), a
// DIFFERENT cookie name, and a DIFFERENT session table. No shared guard,
// no shared controller, no shared module with the ops realm.
@Controller('portal/auth')
export class PortalAuthController {
  constructor(
    private readonly portalAuth: PortalAuthService,
    private readonly prisma: PrismaService,
    private readonly privacyNotice: PrivacyNoticeService,
  ) {}

  // CHECK16 62(a): same reasoning as the ops-side login (auth.controller.ts)
  // — a per-IP throttle in front of PortalAuthService's own per-account
  // lockout, since this endpoint is reachable by the public internet, not
  // just staff on the ops network.
  @Post('login')
  @HttpCode(200)
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  async login(@Body() dto: PortalLoginDto, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    try {
      const { token, expiresAt, requiresPrivacyNoticeAcknowledgment } = await this.portalAuth.login(dto.email, dto.password, { ipAddress: req.ip });
      res.cookie(PORTAL_SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
      });
      return { ok: true, requiresPrivacyNoticeAcknowledgment };
    } catch (err) {
      if (err instanceof PortalAuthError) throw new UnauthorizedException(err.message);
      throw err;
    }
  }

  // Invariant 57(b)(i) (CHECK15): session-guarded so investorId/
  // counterpartyId are derived from the validated session, never client
  // input. The active notice's version is resolved server-side too -- the
  // portal-ui never gets to assert which version it's acknowledging.
  @Post('acknowledge-privacy-notice')
  @HttpCode(200)
  @UseGuards(PortalSessionAuthGuard)
  async acknowledgePrivacyNotice(@CurrentPortalUser() user: AuthenticatedPortalUser, @Req() req: Request) {
    const notice = await this.privacyNotice.getActiveNotice();
    const context = user.principalType === 'INVESTOR' ? 'INVESTOR_PORTAL_FIRST_LOGIN' : 'COUNTERPARTY_PORTAL_FIRST_LOGIN';
    await this.privacyNotice.recordAcknowledgment({
      noticeVersion: notice.version,
      context,
      investorId: user.principalType === 'INVESTOR' ? user.investorId : undefined,
      counterpartyId: user.principalType === 'COUNTERPARTY' ? user.counterpartyId : undefined,
      ipAddress: req.ip,
    });
    await this.portalAuth.recordFirstLoginAcknowledgment(user.portalUserId, user.principalType);
    return { ok: true };
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const token = (req as any).cookies?.[PORTAL_SESSION_COOKIE_NAME];
    if (token) await this.portalAuth.logout(token);
    res.clearCookie(PORTAL_SESSION_COOKIE_NAME);
    return { ok: true };
  }

  // NDPA/GAID (CHECK23, defect #23/#26): requiresPrivacyNoticeAcknowledgment
  // is re-derived here (not just returned once by login()) so a page
  // refresh mid-acknowledgment doesn't silently bypass the gate -- the
  // session cookie alone would still resolve /me successfully, and
  // portal-ui's Gate() has no other durable signal to fall back on.
  @Get('me')
  @UseGuards(PortalSessionAuthGuard)
  async me(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    if (user.principalType === 'COUNTERPARTY') {
      const [counterparty, portalUser] = await Promise.all([
        this.prisma.counterparty.findUniqueOrThrow({ where: { id: user.counterpartyId } }),
        this.prisma.portalCounterpartyUser.findUniqueOrThrow({ where: { id: user.portalUserId } }),
      ]);
      return {
        principalType: 'COUNTERPARTY' as const,
        counterpartyId: counterparty.id,
        legalName: counterparty.legalName,
        contactEmail: counterparty.contactEmail,
        requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null,
      };
    }
    const [investor, portalUser] = await Promise.all([
      this.prisma.investor.findUniqueOrThrow({ where: { investorId: user.investorId } }),
      this.prisma.portalClientUser.findUniqueOrThrow({ where: { id: user.portalUserId } }),
    ]);
    return {
      principalType: 'INVESTOR' as const,
      investorId: investor.investorId,
      fullLegalName: investor.fullLegalName,
      contactEmail: investor.contactEmail,
      requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null,
    };
  }
}
