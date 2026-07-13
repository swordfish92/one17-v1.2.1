import { BadRequestException, Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ProspectusSheetService } from '../parameters/prospectus-sheet.service';
import { ProspectusSheetError } from '../parameters/prospectus-sheet.types';
import { ProposeProspectusSheetDto, ProspectusSheetFieldsDto } from './ops-api.types';

// Invariant 70(a)/(b)/(g) (CHECK24): the Unified Prospectus Parameter
// Sheet's HTTP surface — new-sheet chain (propose/edit/approve) and the
// amendment chain (proposeAmendment/approve) share the same generic
// "approve next step" pattern FundAccountingController already established
// for PRODUCT_SETUP (WorkflowEngineService resolves whichever step is
// actually pending).
@Controller('prospectus-sheets')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ProspectusSheetController {
  constructor(private readonly prospectusSheets: ProspectusSheetService) {}

  private toBigIntFields(dto: ProspectusSheetFieldsDto) {
    return {
      ...dto,
      fundSizeCapKobo: dto.fundSizeCapKobo !== undefined ? BigInt(dto.fundSizeCapKobo) : undefined,
      minimumSubscriptionKobo: dto.minimumSubscriptionKobo !== undefined ? BigInt(dto.minimumSubscriptionKobo) : undefined,
      minimumAdditionalInvestmentKobo: dto.minimumAdditionalInvestmentKobo !== undefined ? BigInt(dto.minimumAdditionalInvestmentKobo) : undefined,
      minimumRedemptionKobo: dto.minimumRedemptionKobo !== undefined ? BigInt(dto.minimumRedemptionKobo) : undefined,
      minimumHoldingKobo: dto.minimumHoldingKobo !== undefined ? BigInt(dto.minimumHoldingKobo) : undefined,
      minimumParticipationKobo: dto.minimumParticipationKobo !== undefined ? BigInt(dto.minimumParticipationKobo) : undefined,
      minimumInvestmentKobo: dto.minimumInvestmentKobo !== undefined ? BigInt(dto.minimumInvestmentKobo) : undefined,
    };
  }

  @Get('products/:productCode/versions')
  @RequiresCapability('PROSPECTUS_SHEET_INITIATION', 'VIEW')
  async listVersions(@Param('productCode') productCode: string) {
    return this.prospectusSheets.listSheetVersions(productCode);
  }

  @Get(':sheetId')
  @RequiresCapability('PROSPECTUS_SHEET_INITIATION', 'VIEW')
  async getDetail(@Param('sheetId') sheetId: string) {
    return this.prospectusSheets.getSheetDetail(sheetId);
  }

  @Post()
  @RequiresCapability('PROSPECTUS_SHEET_INITIATION', 'INITIATE')
  async propose(@Body() dto: ProposeProspectusSheetDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      const { sheet } = await this.prospectusSheets.proposeSheet({ ...this.toBigIntFields(dto), productCode: dto.productCode, initiatedByUserId: user.userId });
      return sheet;
    } catch (err) {
      if (err instanceof ProspectusSheetError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post(':sheetId/edit')
  @RequiresCapability('PROSPECTUS_SHEET_INITIATION', 'INITIATE')
  async editDraft(@Param('sheetId') sheetId: string, @Body() dto: ProspectusSheetFieldsDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.prospectusSheets.editDraftSheet({ ...this.toBigIntFields(dto), sheetId, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof ProspectusSheetError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Serves both PROSPECTUS_SHEET_REVIEW (CIO) and PROSPECTUS_SHEET_APPROVAL
  // (MD_CEO) steps — same union-of-capabilities pattern as
  // FundAccountingController.approveProductSetup.
  @Post('workflow/:workflowInstanceId/approve')
  @RequiresCapability('PROSPECTUS_SHEET_REVIEW', 'APPROVE')
  @RequiresCapability('PROSPECTUS_SHEET_APPROVAL', 'APPROVE')
  async approveStep(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.prospectusSheets.approveSheetStep(workflowInstanceId, user.userId);
    } catch (err) {
      if (err instanceof ProspectusSheetError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('products/:productCode/amendments')
  @RequiresCapability('PROSPECTUS_AMENDMENT_PROPOSAL', 'INITIATE')
  async proposeAmendment(@Param('productCode') productCode: string, @Body() dto: ProspectusSheetFieldsDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      const { sheet } = await this.prospectusSheets.proposeAmendment({ ...this.toBigIntFields(dto), productCode, proposedByUserId: user.userId });
      return sheet;
    } catch (err) {
      if (err instanceof ProspectusSheetError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Serves all THREE amendment steps (SSB signoff, Compliance signoff,
  // MD_CEO approval) — WorkflowEngineService resolves which is pending.
  @Post('amendments/:workflowInstanceId/approve')
  @RequiresCapability('PROSPECTUS_AMENDMENT_SSB_SIGNOFF', 'APPROVE')
  @RequiresCapability('PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', 'APPROVE')
  @RequiresCapability('PROSPECTUS_AMENDMENT_APPROVAL', 'APPROVE')
  async approveAmendmentStep(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.prospectusSheets.approveAmendmentStep(workflowInstanceId, user.userId);
    } catch (err) {
      if (err instanceof ProspectusSheetError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
