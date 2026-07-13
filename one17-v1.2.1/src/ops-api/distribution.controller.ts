import { Controller, Get, Param, Post, Body, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { RunHalalFundDistributionDto } from './ops-api.types';

// Invariant 39(a), Tier 1: DISTRIBUTION_INITIATION for the Halal Fund —
// HalalFundEngineService.runDistribution/approveDistributionDeclaration/
// payDistribution have existed since Phase 1/Check-3 with ZERO controller
// wiring at all (not even read-only NAV endpoints). DISTRIBUTION_APPROVAL
// and SHARIAH_SIGNOFF are NOT routes here — they flow through the standing
// Workflow Inbox (WorkflowInboxService's new 'DISTRIBUTION' dispatch,
// which calls approveDistributionDeclaration on final approval), same
// precedent as every other workflow-backed approval. PSR-waterfall/ND-
// mandate distribution initiation and the PENALTY_TO_CHARITY scenario are
// PARKED — see QUESTIONS_FOR_REVIEW.md — no business logic exists for
// early-exit-penalty computation anywhere in the codebase yet, a
// materially bigger lift than wiring this already-built engine method.
@Controller('distributions')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class DistributionController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly halalFund: HalalFundEngineService,
  ) {}

  @Get('fund-entities')
  async listFundEntities() {
    return this.prisma.ledgerEntity.findMany({ where: { entityType: 'FUND' }, orderBy: { code: 'asc' } });
  }

  @Get('product-accounts')
  async listProductAccounts(@Query('productCode') productCode: string) {
    const accounts = await this.prisma.productAccount.findMany({
      where: { productCode, status: 'ACTIVE' },
      include: { investor: { select: { fullLegalName: true } } },
      orderBy: { startDate: 'desc' },
    });
    return accounts.map((a) => ({
      id: a.id,
      investorName: a.investor?.fullLegalName ?? a.investorId,
      unitsHeld: a.unitsHeld?.toString() ?? '0',
      dripElection: a.dripElection,
    }));
  }

  @Get()
  async list(@Query('ledgerEntityCode') ledgerEntityCode?: string) {
    const rows = await this.prisma.distribution.findMany({
      where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
      orderBy: { recordDate: 'desc' },
      take: 100,
      include: { lineItems: true },
    });
    return rows;
  }

  @Post('halal-fund/run')
  @RequiresCapability('DISTRIBUTION_INITIATION', 'INITIATE')
  async runHalalFundDistribution(@Body() dto: RunHalalFundDistributionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.halalFund.runDistribution({
      ledgerEntityCode: dto.ledgerEntityCode,
      productCode: dto.productCode,
      periodStart: new Date(dto.periodStart),
      periodEnd: new Date(dto.periodEnd),
      recordDate: new Date(dto.recordDate),
      method: dto.method ?? null,
      incomeBasisKobo: BigInt(dto.incomeBasisKobo),
      closingNavKobo: BigInt(dto.closingNavKobo),
      openingNavKobo: BigInt(dto.openingNavKobo),
      netSubscriptionsKobo: BigInt(dto.netSubscriptionsKobo),
      navHistoryComplete: dto.navHistoryComplete,
      priorDeclaredKobo: BigInt(dto.priorDeclaredKobo),
      distributablePct: dto.distributablePct,
      priorTotalDistributedKobo: BigInt(dto.priorTotalDistributedKobo),
      exDivPricePerUnit: dto.exDivPricePerUnit ?? null,
      participants: dto.participants.map((p) => ({
        productAccountId: p.productAccountId,
        unitsAtRecord: p.unitsAtRecord,
        isDrip: p.isDrip,
        cashPaidKobo: BigInt(p.cashPaidKobo),
      })),
      createdByUserId: user.userId,
    });
  }

  // No distinct "PAY" capability is seeded — completing payment on an
  // already-DECLARED distribution is gated on the same DISTRIBUTION_
  // APPROVAL authority that declared it, since it is the same governed
  // action's completion step, not a new decision.
  @Post(':id/pay')
  @RequiresCapability('DISTRIBUTION_APPROVAL', 'APPROVE')
  async pay(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.halalFund.payDistribution(id, user.userId);
  }
}
