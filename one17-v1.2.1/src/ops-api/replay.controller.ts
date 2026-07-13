import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ReplayService } from '../replay/replay.service';
import { IngestReplayCsvDto } from './ops-api.types';

// Invariant 39(c), Tier 3: REPLAY_HARNESS (task #37, the Check-3 NAV/
// Mudarabah verification acceptance mechanism) has existed as a full
// service since Phase 3 but had only ever been driven by a one-off script
// — no live screen for a future re-run.
@Controller('replay')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ReplayController {
  constructor(private readonly replay: ReplayService) {}

  @Get('batches')
  @RequiresCapability('REPLAY_HARNESS', 'INITIATE')
  async listBatches() {
    return this.replay.listBatches();
  }

  @Post('batches')
  @RequiresCapability('REPLAY_HARNESS', 'INITIATE')
  async ingestCsv(@Body() dto: IngestReplayCsvDto, @CurrentUser() user: AuthenticatedUser) {
    return this.replay.ingestCsv({ ...dto, uploadedByUserId: user.userId });
  }

  @Get('reconciliation-counts/:sourceCode')
  @RequiresCapability('REPLAY_HARNESS', 'INITIATE')
  async reconciliationCounts(@Param('sourceCode') sourceCode: string) {
    return this.replay.reconciliationCounts(sourceCode);
  }
}
