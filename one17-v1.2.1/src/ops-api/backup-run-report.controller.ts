import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { BackupService } from '../backup/backup.service';
import { BackupReportTokenGuard } from '../backup/backup-report-token.guard';
import { ReportBackupRunDto } from '../backup/backup.types';

// RES-001 F-02 (CHECK23, v1.0.2): the THIRD unauthenticated-by-session
// controller in this codebase (PublicIntakeController, invariant 28d;
// PaymentGatewayWebhookController, invariant 55a) -- deliberately a
// separate controller from the future session-guarded backup-run READ
// route, same "unauthenticated routes visually and structurally distinct"
// reasoning those two already established. backup.ps1 runs as a Windows
// Scheduled Task with no browser session; BackupReportTokenGuard is the
// authenticity check in place of a session cookie.
@Controller('ops/backup-runs')
@UseGuards(BackupReportTokenGuard)
export class BackupRunReportController {
  constructor(private readonly backup: BackupService) {}

  @Post('report')
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  async report(@Body() dto: ReportBackupRunDto) {
    const run = await this.backup.recordRun(dto);
    return { id: run.id, status: run.status };
  }
}
