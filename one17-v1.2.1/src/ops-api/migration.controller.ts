import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { MigrationService } from '../migration/migration.service';
import { StageMigrationCsvDto } from './ops-api.types';

// Invariant 39(c), Tier 3: DATA_MIGRATION's stage/validate/promote pipeline
// (Migration Data Standards v0.1, task #34) has existed as a full service
// since Phase 2 but had only ever been driven by one-off scripts run
// directly against the DB (Check-2/3) — no live, capability-gated screen
// for a migration that needs to repeat post-launch.
@Controller('migration')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class MigrationController {
  constructor(private readonly migration: MigrationService) {}

  @Get('batches')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async listBatches() {
    return this.migration.listBatches();
  }

  @Post('batches')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async stageCsv(@Body() dto: StageMigrationCsvDto, @CurrentUser() user: AuthenticatedUser) {
    return this.migration.stageCsv({ ...dto, uploadedByUserId: user.userId });
  }

  @Post('batches/:id/validate')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async validateBatch(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.migration.validateBatch(id, user.userId);
  }

  @Post('batches/:id/promote')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async promoteBatch(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.migration.promoteBatch(id, user.userId);
  }

  @Get('batches/:id/report')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async validationReport(@Param('id') id: string) {
    return { report: await this.migration.generateValidationReport(id) };
  }

  @Get('reconciliation-gates')
  @RequiresCapability('DATA_MIGRATION', 'INITIATE')
  async reconciliationGates() {
    return this.migration.runReconciliationGates();
  }
}
