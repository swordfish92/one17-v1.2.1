import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { SchedulerService } from '../scheduler/scheduler.service';

// Check-6A item 2 / invariant 32: the scheduler console's full read+write
// path — job inventory, run history, failure states, manual re-run/catch-up
// trigger, pause/resume. No @RequiresCapability here deliberately: access is
// "ICT OR SAU/Internal Control OR CEO OR the calling user's own business-
// owner VIEW on that specific job" — a three-way OR the decorator's single
// function+level pair cannot express (src/auth/capability.guard.ts).
// SchedulerService.listJobsForUser/assertCapability do the real eligibility
// check; SessionAuthGuard here is only the "must be logged in" edge check,
// same posture as WorkflowInboxController.
@Controller('scheduler')
@UseGuards(SessionAuthGuard)
export class SchedulerController {
  constructor(private readonly scheduler: SchedulerService) {}

  @Get('jobs')
  async listJobs(@CurrentUser() user: AuthenticatedUser) {
    return this.scheduler.listJobsForUser(user.userId);
  }

  @Get('runs')
  async listRuns(@Query('jobCode') jobCode: string | undefined, @CurrentUser() user: AuthenticatedUser) {
    // A business owner's VIEW only ever covers their own job(s) — filtering
    // listJobsForUser to the requested code (or, with no jobCode, requiring
    // it appear in their visible set at all) is the same capability check
    // listJobs already applies, reused rather than re-derived.
    const visible = await this.scheduler.listJobsForUser(user.userId);
    if (jobCode && !visible.some((j) => j.code === jobCode)) return [];
    if (!jobCode) return this.scheduler.listRecentRuns(undefined, 200).then((runs) => runs.filter((r) => visible.some((j) => j.code === r.jobCode)));
    return this.scheduler.listRecentRuns(jobCode);
  }

  @Get('failures')
  async listFailures(@CurrentUser() user: AuthenticatedUser) {
    const visible = await this.scheduler.listJobsForUser(user.userId);
    const failures = await this.scheduler.listUnresolvedFailures();
    return failures.filter((f) => visible.some((j) => j.code === f.jobCode));
  }

  @Post('jobs/:jobCode/pause-direct')
  async pauseDirect(
    @Param('jobCode') jobCode: string,
    @Body('reason') reason: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.scheduler.pauseDirect(jobCode, user.userId, reason);
  }

  @Post('jobs/:jobCode/request-pause')
  async requestPause(
    @Param('jobCode') jobCode: string,
    @Body('reason') reason: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.scheduler.requestPause(jobCode, user.userId, reason);
  }

  @Post('jobs/:jobCode/resume')
  async resume(@Param('jobCode') jobCode: string, @CurrentUser() user: AuthenticatedUser) {
    return this.scheduler.resumeJob(jobCode, user.userId);
  }

  @Post('jobs/:jobCode/rerun')
  async rerun(
    @Param('jobCode') jobCode: string,
    @Body('scheduledFor') scheduledFor: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.scheduler.manualRerun(jobCode, new Date(scheduledFor), user.userId);
  }

  // Invariant 37(f): job catalog — add/remove/toggle. listJobCatalog is a
  // plain read (SessionAuthGuard only, same posture as every other route
  // here); the write routes each enforce their own capability/DoA gate
  // inside SchedulerService, exactly like pause-direct/request-pause above.
  @Get('job-catalog')
  async listJobCatalog() {
    return this.scheduler.listJobCatalog();
  }

  @Post('jobs/:jobCode/register')
  async registerJob(@Param('jobCode') jobCode: string, @CurrentUser() user: AuthenticatedUser) {
    return this.scheduler.registerJob(jobCode, user.userId);
  }

  @Post('jobs/:jobCode/retire')
  async retireJob(
    @Param('jobCode') jobCode: string,
    @Body('reason') reason: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.scheduler.retireJob(jobCode, user.userId, reason);
  }

  @Post('jobs/:jobCode/request-retirement')
  async requestRetirement(
    @Param('jobCode') jobCode: string,
    @Body('reason') reason: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.scheduler.requestRetirement(jobCode, user.userId, reason);
  }
}
