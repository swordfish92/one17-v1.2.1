import { Body, Controller, ForbiddenException, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PortalSessionAuthGuard } from '../portal-auth/portal-session-auth.guard';
import { CurrentPortalUser } from '../portal-auth/current-portal-user.decorator';
import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { ZakatService } from '../zakat/zakat.service';
import { ElectZakatRateBasisDto, RequestZakatSubscriptionDto, DeclareZakatScheduleItemClientDto } from './portal-zakat.types';

// Invariant 26(c)'s portal side: the client VIEWS the assessment sandbox,
// AGREES to proceed, and ELECTS their own rate basis — the same
// READ+RESPOND boundary as the WM client dashboard (staff declare/verify
// schedule items on the client's behalf, see ZakatService's own header
// comment). Zakat applies to ALL company clients, not only WM ones, so
// this is its own portal controller rather than folded into PortalWmController.
@Controller('portal/zakat')
@UseGuards(PortalSessionAuthGuard)
export class PortalZakatController {
  constructor(
    private readonly zakat: ZakatService,
    private readonly prisma: PrismaService,
  ) {}

  private assertInvestor(user: AuthenticatedPortalUser): string {
    if (user.principalType !== 'INVESTOR' || !user.investorId) {
      throw new ForbiddenException('This route is for the investor portal persona only.');
    }
    return user.investorId;
  }

  @Get('subscription')
  async getSubscription(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    const investorId = this.assertInvestor(user);
    return this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
  }

  @Post('rate-basis')
  async electRateBasis(@Body() dto: ElectZakatRateBasisDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.electRateBasis(this.assertInvestor(user), dto.rateBasis);
  }

  @Get('assessments')
  async listAssessments(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.listAssessmentsForInvestor(this.assertInvestor(user));
  }

  @Get('assessments/:runId')
  async getAssessmentDetail(@Param('runId') runId: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.getAssessmentDetail(runId, this.assertInvestor(user));
  }

  @Post('assessments/:runId/agree')
  async agreeToSandbox(@Param('runId') runId: string, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.clientAgreeToSandbox(runId, this.assertInvestor(user));
  }

  // Invariant 70(h)(i): "investor requests Zakat Computation from their
  // portal page -> request lands staff-side" -- ungated (ownership is
  // inherent, same as electRateBasis above), consent-gated inside the
  // service.
  @Post('subscription-request')
  async requestSubscription(@Body() dto: RequestZakatSubscriptionDto, @CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.requestSubscription(this.assertInvestor(user), dto.consentAcknowledged);
  }

  // Invariant 70(h)(ii): the portal Zakat tab's read model — charts+tables
  // over the engine's own data. ZakatService itself throws if the
  // subscription isn't active yet (tab invisible before approval,
  // adversarial (v)) so this route needs no extra gate.
  @Get('position')
  async getPosition(@CurrentPortalUser() user: AuthenticatedPortalUser) {
    return this.zakat.getZakatPositionForClient(this.assertInvestor(user));
  }

  // Invariant 70(h)(ii): the client-portal declare path — reverses the
  // "client only ever VIEWS+AGREES+ELECTS" judgment call documented at the
  // top of ZakatService, but ONLY for this new front door: the item still
  // enters DECLARED and still requires a DIFFERENT staff officer to verify
  // via the standing Workflow Inbox (no portal verify route exists, and
  // none is added here).
  @Post('assessments/:runId/items')
  async declareScheduleItem(
    @Param('runId') runId: string,
    @Body() dto: DeclareZakatScheduleItemClientDto,
    @CurrentPortalUser() user: AuthenticatedPortalUser,
  ) {
    return this.zakat.declareScheduleItemAsClient(this.assertInvestor(user), {
      zakatAssessmentRunId: runId,
      scheduleType: dto.scheduleType,
      description: dto.description,
      amountKobo: BigInt(dto.amountKobo),
      zakatability: dto.zakatability,
    });
  }
}
