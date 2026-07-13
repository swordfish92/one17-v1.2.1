import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { PrismaService } from '../prisma/prisma.service';

// CHECK5 item 5k: "Portfolio Performance" per CLAUDE.md's ops-UI screen
// inventory — NAV history, distribution history, and target-vs-actual
// return per product account. Gated on FINANCIAL_STATEMENTS VIEW (already
// held by FIN_ADMIN/COMPLIANCE/SHARIAH_REV/AUDITOR/PORT_MGR/PORT_OFF/
// MD_CEO/SUPER_ADMIN) since investment performance is financial-reporting
// territory, not a new capability worth inventing.
@Controller('performance')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class PerformanceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('entities')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listEntities() {
    return this.prisma.ledgerEntity.findMany({ where: { entityType: { in: ['FUND', 'POOL'] } }, orderBy: { code: 'asc' } });
  }

  @Get(':ledgerEntityCode/nav-history')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listNavHistory(@Param('ledgerEntityCode') ledgerEntityCode: string) {
    const records = await this.prisma.navRecord.findMany({
      where: { ledgerEntityCode },
      orderBy: { valuationDate: 'asc' },
      take: 365,
    });
    return records.map((r) => ({
      valuationDate: r.valuationDate,
      navPerUnit: r.navPerUnit.toString(),
      totalNavKobo: r.totalNavKobo.toString(),
      unitsOutstanding: r.unitsOutstanding.toString(),
      isLocked: r.isLocked,
    }));
  }

  @Get(':ledgerEntityCode/distributions')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listDistributions(@Param('ledgerEntityCode') ledgerEntityCode: string) {
    const rows = await this.prisma.distribution.findMany({
      where: { ledgerEntityCode },
      orderBy: { recordDate: 'desc' },
      take: 100,
    });
    return rows.map((d) => ({
      ...d,
      netAvailableKobo: d.netAvailableKobo.toString(),
      toParticipantsKobo: d.toParticipantsKobo.toString(),
      retainedOrMudaribBaseKobo: d.retainedOrMudaribBaseKobo.toString(),
    }));
  }

  @Get(':ledgerEntityCode/accounts')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listAccounts(@Param('ledgerEntityCode') ledgerEntityCode: string) {
    const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: ledgerEntityCode } });
    const accounts = entity.productCode
      ? await this.prisma.productAccount.findMany({
          where: { productCode: entity.productCode },
          orderBy: { startDate: 'desc' },
          take: 200,
          include: { investor: { select: { fullLegalName: true } } },
        })
      : [];
    return accounts.map((a) => ({
      investorId: a.investorId,
      investorName: a.investor?.fullLegalName ?? null,
      principalOrCommittedKobo: a.principalOrCommittedKobo.toString(),
      unitsHeld: a.unitsHeld?.toString() ?? null,
      targetReturnPctBenchmark: a.targetReturnPctBenchmark?.toString() ?? null,
      psrInvestorPct: a.psrInvestorPct?.toString() ?? null,
      liquidityClass: a.liquidityClass,
      status: a.status,
    }));
  }
}
