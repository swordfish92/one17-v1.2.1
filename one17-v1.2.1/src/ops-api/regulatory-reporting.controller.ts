import { Body, Controller, Get, Header, Param, Post, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { RegulatoryReportingService } from '../regulatory-reporting/regulatory-reporting.service';
import {
  PrepareFilingRunDto,
  SetEntryValueDto,
  RecordSecAckDto,
  CertifyFilingDto,
  CalibrateFieldDto,
  CalibrateCellDto,
} from './ops-api.types';

// Thin adapter — every rule (immutability, unmapped-template refusal, AUTO
// resolution, certification lifecycle) lives in RegulatoryReportingService;
// this controller only maps HTTP <-> that service (CLAUDE.md Stack
// Decisions item 1). CERTIFY is a workflow decision, so it goes through the
// same @RequiresCapability('REGULATORY_REPORTING','APPROVE') gate as any
// other approval-bearing action, mirroring the maker!=checker discipline
// used everywhere else.
@Controller('regulatory-reporting')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class RegulatoryReportingController {
  constructor(private readonly service: RegulatoryReportingService) {}

  @Get('templates')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  async listTemplates() {
    return this.service.listTemplates();
  }

  @Get('templates/:id/file')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  async templateFile(@Param('id') id: string): Promise<StreamableFile> {
    const { bytes, fileName } = await this.service.getTemplateFileBytes(id);
    return new StreamableFile(bytes, { disposition: `inline; filename="${fileName}"` });
  }

  @Post('templates/:id/calibrate-field')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async calibrateField(
    @Param('id') id: string,
    @Body() dto: CalibrateFieldDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.calibrateField({ regulatorTemplateId: id, ...dto, actorUserId: user.userId });
  }

  // Invariant 52(e) (CHECK12): the XLSX analogue of calibrate-field.
  @Post('templates/:id/calibrate-cell')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async calibrateCell(
    @Param('id') id: string,
    @Body() dto: CalibrateCellDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.calibrateCell({ regulatorTemplateId: id, ...dto, actorUserId: user.userId });
  }

  @Get('filing-calendar')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  async filingCalendarStatus() {
    return this.service.filingCalendarStatus(new Date());
  }

  @Get('filing-runs')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  async listFilingRuns(@Query('regulatorTemplateId') regulatorTemplateId?: string) {
    return this.service.listFilingRuns(regulatorTemplateId);
  }

  @Get('filing-runs/:id')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  async getFilingRun(@Param('id') id: string) {
    return this.service.getFilingRun(id);
  }

  @Post('filing-runs')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async prepareFilingRun(@Body() dto: PrepareFilingRunDto, @CurrentUser() user: AuthenticatedUser) {
    return this.service.prepareFilingRun({
      regulatorTemplateId: dto.regulatorTemplateId,
      ledgerEntityCode: dto.ledgerEntityCode,
      periodStart: new Date(dto.periodStart),
      periodEnd: new Date(dto.periodEnd),
      preparedByUserId: user.userId,
    });
  }

  @Post('filing-runs/:id/entries/:mapId')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async setEntryValue(
    @Param('id') id: string,
    @Param('mapId') mapId: string,
    @Body() dto: SetEntryValueDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.setEntryValue(id, mapId, dto.value, user.userId);
  }

  @Post('filing-runs/:id/submit')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async submitForCertification(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.service.submitForCertification(id, user.userId);
  }

  @Post('filing-runs/:id/certify')
  @RequiresCapability('REGULATORY_REPORTING', 'APPROVE')
  async certify(@Body() dto: CertifyFilingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.service.certify(dto.workflowInstanceId, user.userId);
  }

  @Post('filing-runs/:id/sec-ack')
  @RequiresCapability('REGULATORY_REPORTING', 'INITIATE')
  async recordSecAck(
    @Param('id') id: string,
    @Body() dto: RecordSecAckDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.recordSecAcknowledgement(id, dto.ackRef, user.userId);
  }

  @Get('filing-runs/:id/export.xlsx')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  @Header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  async exportXlsx(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser): Promise<StreamableFile> {
    const buffer = await this.service.exportXlsx(id, user.userId);
    return new StreamableFile(buffer, { disposition: `attachment; filename="filing-${id}.xlsx"` });
  }

  @Get('filing-runs/:id/export.pdf')
  @RequiresCapability('REGULATORY_REPORTING', 'VIEW')
  @Header('Content-Type', 'application/pdf')
  async exportPdf(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser): Promise<StreamableFile> {
    const buffer = await this.service.exportPdf(id, user.userId);
    return new StreamableFile(buffer, { disposition: `attachment; filename="filing-${id}.pdf"` });
  }
}
