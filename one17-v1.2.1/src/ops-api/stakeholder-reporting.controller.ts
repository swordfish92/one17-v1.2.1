import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { StakeholderReportingService } from '../stakeholder-reporting/stakeholder-reporting.service';
import { One17AIService } from '../ai/one17-ai.service';

// Check-6B item 2 (invariant 24). Thin adapter — every rule (unapproved
// cannot distribute, CLIENT/REGULATOR sign-off) lives in the service.
// Check-6C tranche 3 adds aiDraftNarrative(): pure orchestration (call the
// AI gateway, then attach IF allowed) — the actual authorization decision
// stays entirely inside One17AIService's own four-gate pipeline; this
// controller makes no decision of its own, same as StakeholderReportRun's
// "report workspace" context rule which the gateway itself checks.
@Controller('stakeholder-reporting')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class StakeholderReportingController {
  constructor(
    private readonly stakeholderReporting: StakeholderReportingService,
    private readonly ai: One17AIService,
  ) {}

  @Get('reports')
  @RequiresCapability('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE')
  async listReports() {
    return this.stakeholderReporting.listReports();
  }

  @Post('reports')
  @RequiresCapability('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE')
  async generateReport(
    @Body() dto: { department: string; reportType: string; periodStart: string; periodEnd: string; figures: Record<string, unknown>; audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR' },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.stakeholderReporting.generateReport({
      department: dto.department,
      reportType: dto.reportType,
      periodStart: new Date(dto.periodStart),
      periodEnd: new Date(dto.periodEnd),
      figures: dto.figures,
      audienceClass: dto.audienceClass,
      generatedByUserId: user.userId,
    });
  }

  @Post('reports/:id/submit-for-approval')
  @RequiresCapability('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE')
  async submitForApproval(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.stakeholderReporting.submitForApproval(id, user.userId);
  }

  @Post('reports/:id/ai-draft-narrative')
  @RequiresCapability('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE')
  async aiDraftNarrative(@Param('id') id: string, @Body('promptText') promptText: string, @CurrentUser() user: AuthenticatedUser) {
    const report = await this.stakeholderReporting.getReport(id);
    const result = await this.ai.invoke({
      askingUserId: user.userId,
      capabilityCode: 'AI_REPORT_DRAFT',
      promptText,
      requestedDataPointCodes: [],
      context: { stakeholderReportRunId: id },
      // Per-department token budget metering (invariant 33e) — the token
      // charge lands against the REPORT'S OWN department, never a fixed
      // literal cost centre.
      orgUnitCode: report.department,
    });
    if (result.outcome !== 'ALLOWED') return result;
    const updated = await this.stakeholderReporting.attachAiDraftedNarrative(id, result.responseText!, result.interactionLogId, user.userId);
    return { ...result, report: updated };
  }

  @Post('reports/:id/distribute')
  @RequiresCapability('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE')
  async distribute(
    @Param('id') id: string,
    @Body() dto: { audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR'; recipientDescription: string; signOffByUserId?: string },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.stakeholderReporting.distribute({
      stakeholderReportRunId: id,
      audienceClass: dto.audienceClass,
      recipientDescription: dto.recipientDescription,
      distributedByUserId: user.userId,
      signOffByUserId: dto.signOffByUserId,
    });
  }
}
