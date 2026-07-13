import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BackupService } from '../backup/backup.service';

// RES-001 F-02 (CHECK23, v1.0.2): read side of backup-run visibility --
// feeds F-03's health view. No @RequiresCapability decorator (same
// reasoning SchedulerController's own comment gives): eligibility is an OR
// across SCHEDULER_OPERATIONS/SCHEDULER_OVERSIGHT, which the decorator's
// single function+level pair cannot express -- BackupService.
// listRecentForUser does the real check.
@Controller('ops/backup-runs')
@UseGuards(SessionAuthGuard)
export class BackupController {
  constructor(private readonly backup: BackupService) {}

  @Get()
  async listRecent(@CurrentUser() user: AuthenticatedUser) {
    return this.backup.listRecentForUser(user.userId);
  }
}
