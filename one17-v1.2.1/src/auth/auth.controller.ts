import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { AuthError, LoginDto } from './auth.types';
import { SessionAuthGuard, SESSION_COOKIE_NAME } from './session-auth.guard';
import { CurrentUser } from './current-user.decorator';
import type { AuthenticatedUser } from './auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';

// Thin adapter only (CLAUDE.md Stack Decisions item 1): every rule here
// (password check, lockout, session lifetime) lives in AuthService. This
// controller's job is HTTP concerns — reading/writing the cookie, mapping
// AuthError to a 401.
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
    private readonly delegation: DelegationService,
  ) {}

  // CHECK16 62(a): tighter than the global 120/60s default (app.module.ts)
  // — AuthService's own per-account lockout (failedLoginAttempts) is the
  // real brute-force stop, but a per-IP throttle here means a credential-
  // stuffing sweep across many accounts from one source gets rate-limited
  // before it can even reach that per-account check.
  @Post('login')
  @HttpCode(200)
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  async login(@Body() dto: LoginDto, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    try {
      const { token, userId, expiresAt, mfaRequired, mfaEnrolled } = await this.authService.login(dto.email, dto.password, {
        ipAddress: req.ip,
        requestId: (req as any).requestId,
      });
      res.cookie(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
      });
      // Invariant 68(c) H-02: the cookie above is a PENDING session when
      // mfaRequired is true — the client must call /mfa/enroll/begin (if
      // !mfaEnrolled) or /mfa/verify (if mfaEnrolled) before anything else
      // will work; SessionAuthGuard enforces this server-side regardless
      // of what the client does with these flags.
      return { userId, mfaRequired, mfaEnrolled };
    } catch (err) {
      if (err instanceof AuthError) throw new UnauthorizedException(err.message);
      throw err;
    }
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const token = (req as any).cookies?.[SESSION_COOKIE_NAME];
    if (token) await this.authService.logout(token);
    res.clearCookie(SESSION_COOKIE_NAME);
    return { ok: true };
  }

  // The UI's one source of truth for "what can I do" — capabilities, never
  // role names (CLAUDE.md Stack Decisions: "the UI renders from
  // CAPABILITIES, never role names"). Returns every PlatformFunction the
  // user holds standing or active-delegated authority on, at each level.
  @Get('me')
  @UseGuards(SessionAuthGuard)
  async me(@CurrentUser() user: AuthenticatedUser) {
    const appUser = await this.prisma.appUser.findUniqueOrThrow({ where: { id: user.userId } });
    const functions = await this.prisma.platformFunction.findMany({ select: { code: true } });
    const capabilities: Record<string, ('INITIATE' | 'APPROVE' | 'VIEW')[]> = {};
    for (const fn of functions) {
      const levels: ('INITIATE' | 'APPROVE' | 'VIEW')[] = [];
      for (const level of ['INITIATE', 'APPROVE', 'VIEW'] as const) {
        const { eligible } = await this.delegation.hasCapability(user.userId, fn.code, level);
        if (eligible) levels.push(level);
      }
      if (levels.length > 0) capabilities[fn.code] = levels;
    }
    return {
      userId: appUser.id,
      email: appUser.email,
      displayName: appUser.displayName,
      capabilities,
    };
  }
}
