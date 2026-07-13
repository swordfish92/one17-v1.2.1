import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { MarketingService } from '../marketing/marketing.service';
import {
  UploadMarketingResourceDto,
  SubscribeMarketingDto,
  UnsubscribeMarketingDto,
  InitiateMarketingSendDto,
} from './ops-api.types';

// Invariant 28(b). subscribe()/unsubscribe() are the only unauthenticated
// routes on this controller — no SessionAuthGuard/CapabilityGuard by
// design, mirroring PublicIntakeController's "public writes to a narrow,
// safe surface only" discipline. Resource/send approval flow through the
// generic Workflow Inbox (workflow-inbox.service.ts), not a dedicated
// approve endpoint here — neither has a mandatory extra field beyond
// notes, unlike strategy statements or onboarding case reviews.
@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketing: MarketingService) {}

  @Post('resources')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('MARKETING_RESOURCE', 'INITIATE')
  async uploadResource(@Body() dto: UploadMarketingResourceDto, @CurrentUser() user: AuthenticatedUser) {
    return this.marketing.uploadResource({ ...dto, proposedByUserId: user.userId });
  }

  @Get('resources')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('MARKETING_RESOURCE', 'VIEW')
  async listResources() {
    return this.marketing.listResources();
  }

  @Post('subscribe')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async subscribe(@Body() dto: SubscribeMarketingDto) {
    return this.marketing.subscribe(dto);
  }

  @Post('unsubscribe')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async unsubscribe(@Body() dto: UnsubscribeMarketingDto) {
    return this.marketing.unsubscribe(dto);
  }

  @Get('subscriber-stats')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('MARKETING_SEND', 'VIEW')
  async getSubscriberStats() {
    return this.marketing.getSubscriberStats();
  }

  @Post('sends')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('MARKETING_SEND', 'INITIATE')
  async initiateSend(@Body() dto: InitiateMarketingSendDto, @CurrentUser() user: AuthenticatedUser) {
    return this.marketing.initiateSend({ ...dto, initiatedByUserId: user.userId });
  }

  @Get('sends')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('MARKETING_SEND', 'VIEW')
  async listSends() {
    return this.marketing.listSends();
  }

}
