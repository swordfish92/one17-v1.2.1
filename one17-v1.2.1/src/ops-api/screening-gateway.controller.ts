import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import type { ScreeningSourceCode } from '../screening-gateway/screening-gateway.types';
import {
  ConfigureScreeningCommercialProviderDto,
  ConfigureScreeningListSourceDto,
  ManualScreeningAttestationDto,
  ProposeHitAdjudicationDto,
  RunScreeningDto,
  UpdateScreeningGatewayConfigDto,
} from './ops-api.types';

// Invariant 72 (CHECK26): the Screening Gateway staff surface -- source/
// provider/mode config (Risk/Compliance-owned, MD-approved), on-demand
// screening + manual attestation, and the hit-adjudication queue
// (Compliance/IC, adjudicator != initiator via WorkflowEngineService).
@Controller('screening-gateway')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ScreeningGatewayController {
  constructor(private readonly screening: ScreeningGatewayService) {}

  @Get('sources')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'VIEW')
  async listSources() {
    return this.screening.listSources();
  }

  @Post('sources')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'INITIATE')
  async proposeSourceConfig(@Body() dto: ConfigureScreeningListSourceDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.proposeSourceConfig(dto, user.userId);
  }

  @Post('sources/:workflowInstanceId/approve')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'APPROVE')
  async approveSourceConfig(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.approveSourceConfig(workflowInstanceId, user.userId);
  }

  @Get('freshness')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'VIEW')
  async listFreshness() {
    return this.screening.listFreshnessDaysSinceDownload();
  }

  @Get('config')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'VIEW')
  async getConfig() {
    return this.screening.getConfig();
  }

  @Post('config')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'APPROVE')
  async updateConfig(@Body() dto: UpdateScreeningGatewayConfigDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.updateConfig(dto, user.userId);
  }

  @Get('commercial-providers')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'VIEW')
  async listCommercialProviders() {
    return this.screening.listCommercialProviders();
  }

  @Post('commercial-providers')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'INITIATE')
  async proposeCommercialProviderConfig(@Body() dto: ConfigureScreeningCommercialProviderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.proposeCommercialProviderConfig(dto, user.userId);
  }

  @Post('commercial-providers/:workflowInstanceId/approve')
  @RequiresCapability('SCREENING_GATEWAY_POLICY', 'APPROVE')
  async approveCommercialProviderConfig(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.approveCommercialProviderConfig(workflowInstanceId, user.userId);
  }

  @Post('screen')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async screenSubject(@Body() dto: RunScreeningDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.screenSubject({ ...dto, initiatedByUserId: user.userId });
  }

  @Post('manual-attestation')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async recordManualAttestation(@Body() dto: ManualScreeningAttestationDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.recordManualAttestation({ ...dto, sourcesSearched: dto.sourcesSearched as ScreeningSourceCode[], actorUserId: user.userId });
  }

  @Get('hits/open')
  @RequiresCapability('SCREENING_PERFORM', 'VIEW')
  async listOpenHits() {
    return this.screening.listOpenHits();
  }

  @Post('hits/:hitId/propose-adjudication')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async proposeHitAdjudication(@Param('hitId') hitId: string, @Body() dto: ProposeHitAdjudicationDto, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.proposeHitAdjudication({ hitId, outcome: dto.outcome, rationale: dto.rationale, actorUserId: user.userId });
  }

  @Post('hits/:workflowInstanceId/approve-adjudication')
  @RequiresCapability('SCREENING_PERFORM', 'APPROVE')
  async approveHitAdjudication(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.screening.approveHitAdjudication(workflowInstanceId, user.userId);
  }
}
