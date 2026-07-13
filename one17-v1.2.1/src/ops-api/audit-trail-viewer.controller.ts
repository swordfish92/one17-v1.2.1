import { BadRequestException, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { AuditTrailViewerService, AuditEventFilter } from '../audit/audit-trail-viewer.service';
import { AuditTrailViewerError } from '../audit/audit-trail-viewer.types';

// Invariant 59 (CHECK15): AUDIT_TRAIL_VIEW is held by 10 roles and was
// reachable by none -- this is that reachability fix. Every route below
// is VIEW-only (or, for export, still a read of existing data -- the
// resulting report_run is the write, not a mutation of audit_trail
// itself). No write/delete route exists on this controller, structurally
// -- the audit trail's insert-only guarantee is not this screen's job to
// enforce, but it must never be the thing that tries to bypass it either.
@Controller('audit-trail')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class AuditTrailViewerController {
  constructor(private readonly viewer: AuditTrailViewerService) {}

  @Get('events')
  @RequiresCapability('AUDIT_TRAIL_VIEW', 'VIEW')
  async listEvents(
    @Query('actorUserId') actorUserId?: string,
    @Query('entityType') entityType?: string,
    @Query('entityId') entityId?: string,
    @Query('action') action?: string,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    const filter: AuditEventFilter = {
      actorUserId: actorUserId || undefined,
      entityType: entityType || undefined,
      entityId: entityId || undefined,
      action: action || undefined,
      dateFrom: dateFrom ? new Date(dateFrom) : undefined,
      dateTo: dateTo ? new Date(dateTo) : undefined,
    };
    return this.viewer.listEvents(filter, page ? parseInt(page, 10) : 1, pageSize ? Math.min(parseInt(pageSize, 10), 200) : 50);
  }

  @Get('entity-history/:entityType/:entityId')
  @RequiresCapability('AUDIT_TRAIL_VIEW', 'VIEW')
  async entityHistory(@Param('entityType') entityType: string, @Param('entityId') entityId: string) {
    return this.viewer.getEntityHistory(entityType, entityId);
  }

  @Get('integrity')
  @RequiresCapability('AUDIT_TRAIL_VIEW', 'VIEW')
  async integrity() {
    return this.viewer.getLatestIntegrityCheck();
  }

  @Post('export')
  @RequiresCapability('AUDIT_TRAIL_VIEW', 'VIEW')
  async export(
    @CurrentUser() user: AuthenticatedUser,
    @Query('actorUserId') actorUserId?: string,
    @Query('entityType') entityType?: string,
    @Query('entityId') entityId?: string,
    @Query('action') action?: string,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    const filter: AuditEventFilter = {
      actorUserId: actorUserId || undefined,
      entityType: entityType || undefined,
      entityId: entityId || undefined,
      action: action || undefined,
      dateFrom: dateFrom ? new Date(dateFrom) : undefined,
      dateTo: dateTo ? new Date(dateTo) : undefined,
    };
    try {
      return await this.viewer.exportAsReportRun(filter, user.userId);
    } catch (err) {
      if (err instanceof AuditTrailViewerError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
