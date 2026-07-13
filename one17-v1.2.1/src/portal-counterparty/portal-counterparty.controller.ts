import { Body, Controller, ForbiddenException, Get, Header, Param, Post, StreamableFile, UseGuards } from '@nestjs/common';
import { PortalSessionAuthGuard } from '../portal-auth/portal-session-auth.guard';
import { CurrentPortalUser } from '../portal-auth/current-portal-user.decorator';
import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { ComplaintService } from '../complaint/complaint.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { LetterService } from '../letter/letter.service';
import { PortalRequestRestructureDto, PortalSubmitEnquiryDto, PortalRaiseComplaintDto, PortalUploadFacilityDocumentDto } from './portal-counterparty.types';

// Invariant 28(e): the SECOND Phase-5 portal slice (mirrors PortalWmController
// exactly) — every method derives its scope from
// CurrentPortalUser().counterpartyId, never a path/body parameter, making
// the cross-client-leak case structurally impossible rather than merely
// checked. assertCounterparty() is the persona-isolation check: an
// investor-typed session must never reach a counterparty-only route.
@Controller('portal/counterparty')
@UseGuards(PortalSessionAuthGuard)
export class PortalCounterpartyController {
  constructor(
    private readonly counterparty: CounterpartyService,
    private readonly complaints: ComplaintService,
    private readonly bureauGateway: BureauGatewayService,
    private readonly letters: LetterService,
  ) {}

  private assertCounterparty(user: AuthenticatedPortalUser): string {
    if (user.principalType !== 'COUNTERPARTY' || !user.counterpartyId) {
      throw new ForbiddenException('This route is for the counterparty portal persona only.');
    }
    return user.counterpartyId;
  }

  @Get('dashboard')
  async dashboard(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.getPortalDashboard(this.assertCounterparty(user));
  }

  @Post('enquiries')
  async submitEnquiry(@Body() dto: PortalSubmitEnquiryDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.submitEnquiry({ counterpartyId: this.assertCounterparty(user), ...dto });
  }

  @Post('restructure-requests')
  async requestRestructure(@Body() dto: PortalRequestRestructureDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.requestRestructure({ counterpartyId: this.assertCounterparty(user), ...dto });
  }

  @Post('complaints')
  async raiseComplaint(@Body() dto: PortalRaiseComplaintDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.complaints.raiseFromPortal({ counterpartyId: this.assertCounterparty(user), ...dto });
  }

  // Invariant 28(e)(ii): NEW facility applications initiated from the
  // portal — intake only; the standing governance chain (IC1->Risk->IC2)
  // begins once a staff member reviews and pushes it in.
  @Post('facility-applications')
  async submitFacilityApplication(@Body() dto: { requestedAmountKobo: string; purpose: string }, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.submitFacilityApplication({
      counterpartyId: this.assertCounterparty(user),
      requestedAmountKobo: BigInt(dto.requestedAmountKobo),
      purpose: dto.purpose,
    });
  }

  // Invariant 44(e) (CHECK10): document uploads AT APPLICATION TIME,
  // checklist-gated before the application can be pushed into review.
  @Post('facility-applications/:id/documents')
  async uploadFacilityApplicationDocument(
    @Param('id') id: string,
    @Body() dto: PortalUploadFacilityDocumentDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    return this.counterparty.uploadFacilityApplicationDocument({ applicationId: id, ...dto }, this.assertCounterparty(user));
  }

  @Get('facility-applications/:id/documents')
  async listFacilityApplicationDocuments(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.listFacilityApplicationDocumentsForPortal(id, this.assertCounterparty(user));
  }

  @Get('facility-applications/:id/checklist')
  async getFacilityApplicationChecklist(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.counterparty.getFacilityApplicationChecklist(id, this.assertCounterparty(user));
  }

  // Invariant 36(c): "result renders on BOTH the counterparty portal and
  // staff view (with pull date + provider)."
  @Get('bureau-pulls')
  async listBureauPulls(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.bureauGateway.listPullHistory(this.assertCounterparty(user));
  }

  // Invariant 52(d) (CHECK12): "My Documents" for the counterparty portal
  // -- letters only (certificates/statements are structurally investor-
  // only, see LetterService.getLetterInstancePdfForCounterparty's comment).
  @Get('letters')
  async listLetters(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.letters.listLetterInstances({ counterpartyId: this.assertCounterparty(user) });
  }

  @Get('letters/:id/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadLetter(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    const pdf = await this.letters.getLetterInstancePdfForCounterparty(id, this.assertCounterparty(user));
    return new StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
  }
}
