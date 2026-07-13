import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { CalendarGatewayService } from '../calendar/calendar-gateway.service';
import { ConfigureCalendarProviderDto } from './ops-api.types';

// Invariant 73(b) (CHECK27): CalendarGateway staff surface. Provider config
// (ICT proposes, MD_CEO approves) is capability-gated exactly like every
// other gateway controller; the per-user connect/callback/revoke routes
// carry NO @RequiresCapability -- same "session alone is enough, everyone
// manages their own" boundary as CalendarController itself (CapabilityGuard
// lets any route with no capability metadata through once SessionAuthGuard
// has already established a session -- see capability.guard.ts's own
// comment).
//
// One controller, not two (unlike PaymentGatewayWebhookController's split
// from PaymentGatewayController): that split exists because a payment
// webhook is called server-to-server by a vendor holding no browser
// session at all, so it needs NO SessionAuthGuard. An OAuth2 authorization-
// code callback is the opposite case -- it's the SAME browser being
// redirected back by the vendor after the user's own consent, and it DOES
// carry that user's session cookie: `sameSite: 'lax'` (auth.controller.ts)
// is sent on exactly this kind of cross-site top-level GET navigation
// (Lax's whole purpose), so the callback route can and does rely on
// @CurrentUser() like any other authenticated route -- verified as this
// gateway's own defense-in-depth by also checking the signed OAuth
// `state` parameter's embedded userId against the session's userId
// (CalendarGatewayService.handleCallback).
@Controller('calendar-gateway')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class CalendarGatewayController {
  constructor(private readonly calendarGateway: CalendarGatewayService) {}

  // ---- Platform-wide provider config (ICT proposes, MD_CEO approves) -----
  @Get('providers')
  @RequiresCapability('CALENDAR_GATEWAY_POLICY', 'VIEW')
  async listProviders() {
    return this.calendarGateway.listProviders();
  }

  @Post('providers')
  @RequiresCapability('CALENDAR_GATEWAY_POLICY', 'INITIATE')
  async proposeProviderConfig(@Body() dto: ConfigureCalendarProviderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.calendarGateway.proposeProviderConfig(dto, user.userId);
  }

  @Post('providers/:workflowInstanceId/approve')
  @RequiresCapability('CALENDAR_GATEWAY_POLICY', 'APPROVE')
  async approveProviderConfig(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.calendarGateway.approveProviderConfig(workflowInstanceId, user.userId);
  }

  // ---- Per-user OAuth2 consent -- identity-scoped, no capability grant ---
  @Get('connections/mine')
  async listMyConnections(@CurrentUser() user: AuthenticatedUser) {
    return this.calendarGateway.listMyConnections(user.userId);
  }

  @Get('connect/:providerId/authorize-url')
  async getAuthorizationUrl(@Param('providerId') providerId: string, @CurrentUser() user: AuthenticatedUser, @Req() req: Request) {
    const redirectUri = this.callbackUrl(req, providerId);
    return this.calendarGateway.getAuthorizationUrl(providerId, user.userId, redirectUri);
  }

  // GET, not POST -- this is where the vendor's own redirect (a browser
  // top-level navigation, not a fetch()) lands after the user consents;
  // must exactly match the redirect_uri the authorize-url call above sent
  // (both Microsoft's and Google's docs require an exact match). code/state
  // are read as bare @Query() string params rather than through a DTO
  // class deliberately -- the global ValidationPipe's forbidNonWhitelisted
  // (main.ts) would 400 on a vendor-added extra query param (e.g. Microsoft
  // sometimes appends `session_state`) if this went through a whitelisted
  // DTO object; primitive-typed params skip that check entirely.
  @Get('connect/:providerId/callback')
  async handleCallback(@Param('providerId') providerId: string, @Query('code') code: string, @Query('state') state: string, @CurrentUser() user: AuthenticatedUser, @Req() req: Request) {
    const redirectUri = this.callbackUrl(req, providerId);
    return this.calendarGateway.handleCallback(providerId, code, state, redirectUri, user.userId);
  }

  @Post('connections/:id/revoke')
  async revokeConnection(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.calendarGateway.revokeConnection(id, user.userId);
  }

  // Built from the inbound request's own host rather than a hardcoded env
  // var -- correct regardless of deployment domain, and identical between
  // the authorize-url leg and the callback leg (as both MUST be) since both
  // derive it the same way from the same request. A tenant's ICT registers
  // this EXACT URL shape (https://<api-host>/calendar-gateway/connect/
  // <providerId>/callback) in their Azure AD / Google Cloud console app
  // registration.
  private callbackUrl(req: Request, providerId: string): string {
    return `${req.protocol}://${req.get('host')}/calendar-gateway/connect/${providerId}/callback`;
  }
}
