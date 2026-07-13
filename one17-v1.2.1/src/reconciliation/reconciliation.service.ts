import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReconciliationResult } from './reconciliation.types';

// Invariant 43(b): "money metrics marked ledger-reconcilable get an
// automated recon: operational-table figure vs ledger balance, variance
// surfaced as a visible recon tile + KRI-style alert on breach (tolerance
// in governed config)." A metric only reconciles once BOTH gates are open:
// its MetricDefinition is ACTIVE + ledgerReconcilable=true, AND an ACTIVE
// LedgerReconciliationConfig row names the GL accounts that back it. Either
// gate closed -> { configured: false }, which callers (DashboardService)
// render as the "UNRECONCILED TO LEDGER" badge rather than a fabricated
// comparison.
@Injectable()
export class ReconciliationService {
  constructor(private readonly prisma: PrismaService) {}

  async reconcile(metricCode: string, operationalKobo: bigint): Promise<ReconciliationResult> {
    const metricDef = await this.prisma.metricDefinition.findFirst({
      where: { metricCode, status: 'ACTIVE', ledgerReconcilable: true },
      orderBy: { version: 'desc' },
    });
    if (!metricDef) return { configured: false };

    const config = await this.prisma.ledgerReconciliationConfig.findFirst({
      where: { metricCode, status: 'ACTIVE' },
      orderBy: { version: 'desc' },
    });
    if (!config) return { configured: false };

    const accounts = await this.prisma.chartOfAccount.findMany({
      where: {
        accountCode: { in: config.glAccountCodes },
        ...(config.ledgerEntityCode ? { ledgerEntityCode: config.ledgerEntityCode } : {}),
      },
    });
    if (accounts.length === 0) return { configured: false };

    const lines = await this.prisma.journalEntryLine.findMany({
      where: { accountId: { in: accounts.map((a) => a.id) } },
    });
    const accountTypeById = new Map(accounts.map((a) => [a.id, a.accountType]));
    const ledgerKobo = lines.reduce((sum, line) => {
      const type = accountTypeById.get(line.accountId);
      // Credit-natured (liability/equity/income) balances rise on credit;
      // debit-natured (asset/expense) balances rise on debit — same
      // convention as StressEngineService.glBalance.
      const natural = type === 'INCOME' || type === 'EQUITY' || type === 'LIABILITY' ? 1 : -1;
      return sum + BigInt(natural) * (line.creditKobo - line.debitKobo);
    }, 0n);

    const varianceKobo = operationalKobo - ledgerKobo;
    const absVarianceKobo = varianceKobo < 0n ? -varianceKobo : varianceKobo;

    return {
      configured: true,
      operationalKobo,
      ledgerKobo,
      varianceKobo,
      toleranceKobo: config.toleranceKobo,
      breached: absVarianceKobo > config.toleranceKobo,
    };
  }
}
