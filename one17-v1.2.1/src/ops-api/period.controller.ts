import { Body, Controller, Get, Post, Param, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { PeriodService } from '../period/period.service';
import { BankReconciliationService } from '../period/bank-reconciliation.service';
import { OpenPeriodDto, UploadBankStatementLinesDto, MatchBankStatementLineDto } from './ops-api.types';

// Invariant 39(a), Tier 1: ACCOUNTING_PERIOD_CLOSE propose/approve flow —
// PeriodService.openPeriod/requestPeriodClose/approvePeriodClose have
// existed since Phase 2 (Company Accounting Design §4 item 8) with zero
// controller wiring. This is DISTINCT from the DB-trigger-enforced
// posting-into-a-closed-period guard (journal_entry_no_posting_into_
// closed_period), which stays exactly where it is — this screen is the
// governed OPEN->CLOSED transition itself, not the posting guard.
// approvePeriodClose is NOT a route here — it dispatches through the
// standing Workflow Inbox (ACCOUNTING_PERIOD_CLOSE_STANDARD rule, single
// step, no structured data needed).
@Controller('periods')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class PeriodController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly period: PeriodService,
    private readonly bankReconciliation: BankReconciliationService,
  ) {}

  @Get()
  @RequiresCapability('ACCOUNTING_PERIOD_CLOSE', 'INITIATE')
  async list(@Query('ledgerEntityCode') ledgerEntityCode?: string) {
    return this.prisma.accountingPeriod.findMany({
      where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
      orderBy: { periodStart: 'desc' },
      take: 100,
    });
  }

  @Post()
  @RequiresCapability('ACCOUNTING_PERIOD_CLOSE', 'INITIATE')
  async open(@Body() dto: OpenPeriodDto, @CurrentUser() user: AuthenticatedUser) {
    return this.period.openPeriod({
      ledgerEntityCode: dto.ledgerEntityCode,
      periodStart: new Date(dto.periodStart),
      periodEnd: new Date(dto.periodEnd),
      openedByUserId: user.userId,
    });
  }

  @Post(':id/request-close')
  @RequiresCapability('ACCOUNTING_PERIOD_CLOSE', 'INITIATE')
  async requestClose(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.period.requestPeriodClose({ periodId: id, initiatedByUserId: user.userId });
  }

  // Invariant 51(b-ix) (CHECK13): bank reconciliation -- the hard gate
  // requestClose above calls before it will even raise a close request.
  @Get('bank-reconciliation/lines')
  @RequiresCapability('BANK_RECONCILIATION', 'VIEW')
  async listBankStatementLines(@Query('ledgerEntityCode') ledgerEntityCode: string, @Query('status') status?: 'UNMATCHED' | 'MATCHED') {
    return this.bankReconciliation.listLines(ledgerEntityCode, status);
  }

  @Get('bank-reconciliation/summary')
  @RequiresCapability('BANK_RECONCILIATION', 'VIEW')
  async bankReconciliationSummary(@Query('ledgerEntityCode') ledgerEntityCode: string, @Query('periodStart') periodStart: string, @Query('periodEnd') periodEnd: string) {
    return this.bankReconciliation.getSummary(ledgerEntityCode, new Date(periodStart), new Date(periodEnd));
  }

  @Post('bank-reconciliation/upload')
  @RequiresCapability('BANK_RECONCILIATION', 'INITIATE')
  async uploadBankStatementLines(@Body() dto: UploadBankStatementLinesDto, @CurrentUser() user: AuthenticatedUser) {
    return this.bankReconciliation.uploadStatementLines(
      dto.lines.map((line) => ({ ...line, statementDate: new Date(line.statementDate), amountKobo: BigInt(line.amountKobo) })),
      user.userId,
    );
  }

  @Post('bank-reconciliation/lines/:lineId/match')
  @RequiresCapability('BANK_RECONCILIATION', 'INITIATE')
  async matchBankStatementLine(@Param('lineId') lineId: string, @Body() dto: MatchBankStatementLineDto, @CurrentUser() user: AuthenticatedUser) {
    return this.bankReconciliation.matchLine(lineId, dto.journalEntryLineId, user.userId);
  }

  @Post('bank-reconciliation/lines/:lineId/unmatch')
  @RequiresCapability('BANK_RECONCILIATION', 'INITIATE')
  async unmatchBankStatementLine(@Param('lineId') lineId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.bankReconciliation.unmatchLine(lineId, user.userId);
  }
}
