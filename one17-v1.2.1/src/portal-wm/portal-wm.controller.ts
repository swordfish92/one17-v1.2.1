import { BadRequestException, Body, Controller, ForbiddenException, Get, Header, Param, Post, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { PortalSessionAuthGuard } from '../portal-auth/portal-session-auth.guard';
import { CurrentPortalUser } from '../portal-auth/current-portal-user.decorator';
import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { WmService } from '../wm/wm.service';
import { ComplaintService } from '../complaint/complaint.service';
import { StatementService } from '../statement/statement.service';
import { CertificateService } from '../certificate/certificate.service';
import { LetterService } from '../letter/letter.service';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { SubscriptionServiceError } from '../subscription/subscription.types';
import { NotificationService } from '../notification/notification.service';
import { OffersService } from '../product/offers.service';
import { MarketingService } from '../marketing/marketing.service';
import { RespondToAdvisoryDto, RaiseComplaintDto, SubmitHoldingActionRequestDto, RequestProductRedemptionDto, PortalSubscribeToOfferDto } from './portal-wm.types';

// The FIRST Phase-5 portal slice, pulled forward (spec §7.5). Every method
// here derives its scope from CurrentPortalUser().investorId — the client's
// OWN session — never from a path/body parameter, which is what makes the
// cross-client-leak adversarial case structurally impossible here rather
// than merely checked: there is no code path that can even ASK for another
// client's investorId. v1 capabilities: READ + RESPOND only, no
// transactional actions (spec §7.5). Invariant 28(e) added a SECOND portal
// principal type (counterparty) to the same realm/guard — assertInvestor()
// is the persona-isolation check: a counterparty-typed session must never
// reach an investor-only route, even though both pass PortalSessionAuthGuard.
// Invariant 39(d): this controller is now every investor's portal front
// door, not just WM clients' — dashboard()/messages below serve the widened
// population directly; the WM-specific routes further down (advisory
// records, allocation policy, holdings) remain reachable only insofar as a
// non-WM investor has no such records to act on yet.
@Controller('portal/wm')
@UseGuards(PortalSessionAuthGuard)
export class PortalWmController {
  constructor(
    private readonly wm: WmService,
    private readonly complaints: ComplaintService,
    private readonly statements: StatementService,
    private readonly certificates: CertificateService,
    private readonly letters: LetterService,
    private readonly paymentGateway: PaymentGatewayService,
    private readonly subscriptions: SubscriptionService,
    private readonly notifications: NotificationService,
    private readonly offers: OffersService,
    private readonly marketing: MarketingService,
  ) {}

  private assertInvestor(user: AuthenticatedPortalUser): string {
    if (user.principalType !== 'INVESTOR' || !user.investorId) {
      throw new ForbiddenException('This route is for the investor portal persona only.');
    }
    return user.investorId;
  }

  @Get('dashboard')
  async dashboard(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.getPortalDashboard(this.assertInvestor(user));
  }

  // Invariant 68(d) (CHECK22 v1.0.1): RETIRED. Free-form portal messaging
  // was disabled from this UI at invariant 44(c) (CASE-BASED ENQUIRY
  // THREADS replaced it — see complaints below) but these GET/POST
  // /portal/wm/messages routes were left live in code, an unexecuted
  // ruling. Removed per the CEO's own 44(c) ruling, restated at 68(d).
  // ClientMessagingService itself is unaffected — the staff side
  // (InvestorsController's :investorId/messages) still reads/writes the
  // same client_communication rows for the now one-way (staff-initiated)
  // thread.

  @Post('advisory-records/:id/respond')
  async respondToAdvisory(
    @Param('id') id: string,
    @Body() dto: RespondToAdvisoryDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    return this.wm.respondToAdvisory(id, this.assertInvestor(user), dto.response);
  }

  @Post('allocation-policy/:id/acknowledge')
  async acknowledgeAllocationPolicy(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.acknowledgeAllocationPolicy(id, this.assertInvestor(user));
  }

  @Post('risk-profile/:id/acknowledge')
  async acknowledgeRiskProfile(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.acknowledgeRiskProfile(id, this.assertInvestor(user));
  }

  @Post('growth-plan/:id/acknowledge')
  async acknowledgeGrowthPlan(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.acknowledgeGrowthPlan(id, this.assertInvestor(user));
  }

  // Invariant 26(b)/Visualization Standard item 2: the NWCS pyramid with the
  // client's own live position marker.
  @Get('nwcs-pyramid')
  async nwcsPyramid(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.getNwcsPyramidData(this.assertInvestor(user));
  }

  // Invariant 29(b) holding drill-down.
  @Get('assets/:assetId/detail')
  async holdingDetail(@Param('assetId') assetId: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.getHoldingDetail(assetId, this.assertInvestor(user));
  }

  @Post('assets/:assetId/top-up')
  async requestTopUp(
    @Param('assetId') assetId: string,
    @Body() dto: SubmitHoldingActionRequestDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    return this.wm.requestTopUp(assetId, this.assertInvestor(user), BigInt(dto.requestedAmountKobo), dto.notes);
  }

  @Post('assets/:assetId/redemption')
  async requestRedemption(
    @Param('assetId') assetId: string,
    @Body() dto: SubmitHoldingActionRequestDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    return this.wm.requestRedemption(assetId, this.assertInvestor(user), BigInt(dto.requestedAmountKobo), dto.notes);
  }

  // Invariant 28(f): "client-portal ... module" — the investor side of the
  // same complaint-raising surface the counterparty portal exposes.
  @Post('complaints')
  async raiseComplaint(@Body() dto: RaiseComplaintDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.complaints.raiseFromPortal({ investorId: this.assertInvestor(user), ...dto });
  }

  // Invariant 44(d) (CHECK10): every account the investor can pull a
  // statement for -- ProductAccount + investor-participant NdMandateAccount
  // rows, id+kind is all statement-pdf below needs.
  @Get('statement-accounts')
  async listStatementAccounts(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.statements.listAccounts(this.assertInvestor(user));
  }

  // Ownership is re-checked INSIDE StatementService against the session's
  // own investorId (never trusted from :id) -- same structural-isolation
  // pattern as assertInvestor() itself, one layer deeper.
  @Get('statement-accounts/:kind/:id/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadStatement(
    @Param('kind') kind: 'PRODUCT' | 'MANDATE',
    @Param('id') id: string,
    @Query('periodStart') periodStart: string | undefined,
    @Query('periodEnd') periodEnd: string | undefined,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    const end = periodEnd ? new Date(periodEnd) : new Date();
    const start = periodStart ? new Date(periodStart) : new Date(Date.UTC(end.getUTCFullYear(), 0, 1));
    const pdf = await this.statements.generateStatementPdf(kind, id, this.assertInvestor(user), start, end);
    return new StreamableFile(pdf, { disposition: `attachment; filename="statement-${id}.pdf"` });
  }

  // Invariant 52(b) (CHECK12): "downloadable on the portal." Own routes for
  // now -- the consolidated "My Documents" surface (52d) will fold these
  // in alongside letters/statements rather than duplicate the read paths.
  @Get('certificates')
  async listCertificates(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.certificates.listCertificates(this.assertInvestor(user));
  }

  @Get('certificates/:id/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadCertificate(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    const pdf = await this.certificates.getCertificatePdfForInvestor(id, this.assertInvestor(user));
    return new StreamableFile(pdf, { disposition: `attachment; filename="certificate-${id}.pdf"` });
  }

  // Invariant 52(c) (CHECK12): same portal-download shape, for
  // client-facing letters (welcome/maturity/rollover/ad-hoc) once ISSUED.
  @Get('letters')
  async listLetters(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.letters.listLetterInstances({ investorId: this.assertInvestor(user) });
  }

  @Get('letters/:id/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadLetter(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    const pdf = await this.letters.getLetterInstancePdfForInvestor(id, this.assertInvestor(user));
    return new StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
  }

  // Invariant 55(a): no live gateway checkout SDK exists (no vendor
  // contracted yet) -- this is how "client initiates deposit (portal ...)"
  // is actually delivered: show the investor exactly where to send money
  // and their own reference code, which the webhook matcher parses back.
  @Get('deposit-instructions')
  async depositInstructions(@Query('productCode') productCode: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.paymentGateway.getDepositInstructions(this.assertInvestor(user), productCode);
  }

  // CHECK16 62(b): investor-initiated redemption on a live ProductAccount
  // holding — routes into the exact same REDEMPTION_APPROVAL chain a
  // staff-initiated redemption uses (governance unchanged).
  @Post('product-accounts/:productAccountId/redemption')
  async requestProductRedemption(
    @Param('productAccountId') productAccountId: string,
    @Body() dto: RequestProductRedemptionDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    try {
      return await this.subscriptions.initiatePortalRedemption(this.assertInvestor(user), productAccountId, BigInt(dto.amountKobo));
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // CHECK16 62(b): principal-vs-profit and asset-class pie chart data.
  @Get('principal-profit-breakdown')
  async principalProfitBreakdown(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.wm.getPrincipalProfitBreakdown(this.assertInvestor(user));
  }

  // CHECK16 62(b): the portal's notification centre.
  @Get('notifications')
  async listNotifications(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.notifications.listMineForInvestor(this.assertInvestor(user));
  }

  @Post('notifications/:id/read')
  async markNotificationRead(@Param('id') id: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.notifications.markReadForInvestor(id, this.assertInvestor(user));
  }

  // ==========================================================================
  // Invariant 70(c) (CHECK24): Offers & Opportunities tab. No
  // assertInvestor() capability check beyond the standing portal session --
  // "products visible to investors AUTOMATICALLY upon full internal
  // approval," same VIEW-only-no-special-capability shape every other GET
  // on this controller already has. assertInvestor() is still called (not
  // skipped) so a counterparty-typed session is refused the same way every
  // other route here refuses one.
  // ==========================================================================
  @Get('offers')
  async listOffers(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    this.assertInvestor(user);
    return this.offers.listActiveOffers();
  }

  @Get('offers/:productCode')
  async getOfferDetail(@Param('productCode') productCode: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    this.assertInvestor(user);
    try {
      return await this.offers.getOfferDetail(productCode);
    } catch (err) {
      throw new BadRequestException((err as Error).message);
    }
  }

  // Invariant 70(c): "general publications on the tab = Compliance-approved
  // marketing resources via the existing BD->Compliance chain."
  @Get('offer-publications')
  async listOfferPublications(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    this.assertInvestor(user);
    return this.marketing.listActiveResources();
  }

  // Invariant 70(c): "Invest/Top Up buttons route into the governed
  // deposit/subscription flow and land in holdings" -- routes into
  // SubscriptionService.initiatePortalSubscription, which delegates
  // straight into the SAME initiateSubscription/approveSubscription chain
  // every other subscription (staff-initiated or webhook-matched) uses.
  @Post('offers/:productCode/subscribe')
  async subscribeToOffer(
    @Param('productCode') productCode: string,
    @Body() dto: PortalSubscribeToOfferDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    try {
      return await this.subscriptions.initiatePortalSubscription(this.assertInvestor(user), productCode, BigInt(dto.amountKobo));
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
