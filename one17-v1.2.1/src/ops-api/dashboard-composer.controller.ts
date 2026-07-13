import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { DashboardComposerService } from '../dashboard-composer/dashboard-composer.service';
import { SaveDashboardDto } from './ops-api.types';

// Invariant 73(a) (CHECK27): no @RequiresCapability decorators here at
// all -- every authorization decision is fully data-dependent inside
// DashboardComposerService's own capability re-checks (compose-time AND
// render-time, per metric, per actor), the same posture AiController
// takes for the identical reason (src/ops-api/ai.controller.ts). Any
// signed-in staff member may reach these routes; what they can compose
// or see is entirely gated inside the service.
@Controller('dashboard-composer')
@UseGuards(SessionAuthGuard)
export class DashboardComposerController {
  constructor(private readonly composer: DashboardComposerService) {}

  @Get('composable-metrics')
  async listComposableMetrics(@CurrentUser() user: AuthenticatedUser) {
    return this.composer.listComposableMetrics(user.userId);
  }

  @Get('dashboards')
  async listMyDashboards(@CurrentUser() user: AuthenticatedUser) {
    return this.composer.listMyDashboards(user.userId);
  }

  @Get('dashboards/:id')
  async getDashboard(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.composer.getDashboard(id, user.userId);
  }

  @Post('dashboards')
  async saveDashboard(@Body() dto: SaveDashboardDto, @CurrentUser() user: AuthenticatedUser) {
    return this.composer.saveDashboard(dto, user.userId);
  }

  // POST, not DELETE -- house convention is POST-only writes from ops-ui
  // (no put/patch/delete verb anywhere in the API client), same as every
  // other destructive action on this platform.
  @Post('dashboards/:id/delete')
  async deleteDashboard(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    await this.composer.deleteDashboard(id, user.userId);
    return { deleted: true };
  }
}
