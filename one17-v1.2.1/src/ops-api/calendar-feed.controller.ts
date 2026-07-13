import { Controller, Get, Header, Param } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { CalendarService } from '../calendar/calendar.service';

// Invariant 55(c2)(iv) Phase A: the THIRD unauthenticated controller in
// this codebase (after PublicIntakeController and
// PaymentGatewayWebhookController). Outlook/Google/Apple fetch this URL
// directly, holding no browser session -- the token IN the URL is the only
// authenticator, same threat model as MarketingService's unsubscribe link
// (see CalendarFeedToken's doc comment in schema.prisma). Read-only: this
// route can never write anything.
@Controller('calendar-feed')
export class CalendarFeedController {
  constructor(private readonly calendar: CalendarService) {}

  @Get(':token.ics')
  @Header('Content-Type', 'text/calendar; charset=utf-8')
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  async getFeed(@Param('token') token: string) {
    const { ics } = await this.calendar.getIcsFeedByToken(token);
    return ics;
  }
}
