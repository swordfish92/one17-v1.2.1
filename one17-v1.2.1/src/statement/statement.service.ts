import { Injectable } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import { PrismaService } from '../prisma/prisma.service';
import { StatementAccountKind, StatementAccountSummary, StatementError } from './statement.types';
import { LetterheadService } from '../letterhead/letterhead.service';
import { PdfWriter, fmtDate, kobo } from '../pdf/pdf-writer';

// Invariant 44(d) (CHECK10): "every investor sees and DOWNLOADS (PDF) their
// product statements from their portal account — per product account,
// period-selectable, correct template per product class (HF = units/NAV
// statement; pool/ND-PSR = capital/PSR statement)." Two structurally
// SEPARATE render paths below (renderUnitNavStatement / renderPsrStatement)
// rather than one shared path with an if-branch on a field — invariant
// 44(a)'s "no NAV/unit price in pool context, ANYWHERE, no exceptions"
// means the PSR path must have NO CODE ROUTE that can even reach a
// navPerUnit/unitsHeld value, not just a check that skips printing it.
@Injectable()
export class StatementService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly letterhead: LetterheadService,
  ) {}

  // Invariant 44(d): the portal's own "which accounts can I get a
  // statement for" list — every ProductAccount (FUND/POOL products) plus
  // every INVESTOR-participant NdMandateAccount (FUND/POOL-participant
  // mandates have no investor identity to list here, invariant 6a).
  async listAccounts(investorId: string): Promise<StatementAccountSummary[]> {
    const [productAccounts, mandateAccounts] = await Promise.all([
      this.prisma.productAccount.findMany({
        where: { investorId },
        include: { product: true },
        orderBy: { startDate: 'desc' },
      }),
      this.prisma.ndMandateAccount.findMany({
        where: { investorId, participantType: 'INVESTOR' },
        include: { ledgerEntity: { include: { product: true } } },
        orderBy: { startDate: 'desc' },
      }),
    ]);

    return [
      ...productAccounts.map((a) => ({
        id: a.id,
        kind: 'PRODUCT' as const,
        productCode: a.productCode,
        productName: a.product.name,
        engineType: a.product.engineType,
        status: a.status,
      })),
      ...mandateAccounts.map((m) => ({
        id: m.id,
        kind: 'MANDATE' as const,
        productCode: m.ledgerEntity.productCode ?? m.mandateRef,
        productName: m.ledgerEntity.product?.name ?? m.ledgerEntity.name,
        engineType: 'MANDATE' as const,
        status: m.status,
      })),
    ];
  }

  async generateStatementPdf(kind: StatementAccountKind, id: string, investorId: string, periodStart: Date, periodEnd: Date): Promise<Uint8Array> {
    if (kind === 'PRODUCT') {
      const account = await this.prisma.productAccount.findUnique({ where: { id }, include: { product: true, investor: true } });
      if (!account) throw new StatementError('Product account not found.');
      if (account.investorId !== investorId) {
        throw new StatementError('This product account does not belong to the requesting investor.');
      }
      if (account.product.engineType === 'UNIT_NAV') {
        return this.buildUnitNavStatement(account, periodStart, periodEnd);
      }
      // PSR_WATERFALL product held via a ProductAccount (the pool).
      return this.buildPsrStatement(
        {
          investorName: account.investor.fullLegalName,
          productName: account.product.name,
          accountRef: account.id,
          capitalKobo: account.principalOrCommittedKobo,
          investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
          mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
          targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null,
        },
        await this.prisma.distributionLineItem.findMany({
          where: { productAccountId: id, distribution: { OR: [{ paidAt: { gte: periodStart, lte: periodEnd } }, { paidAt: null, recordDate: { gte: periodStart, lte: periodEnd } }] } },
          include: { distribution: true },
          orderBy: { distribution: { recordDate: 'asc' } },
        }),
        periodStart,
        periodEnd,
      );
    }

    // MANDATE (ND participation) — always capital/PSR, never units/NAV.
    const mandate = await this.prisma.ndMandateAccount.findUnique({
      where: { id },
      include: { ledgerEntity: { include: { product: true } } },
    });
    if (!mandate) throw new StatementError('ND Mandate account not found.');
    if (mandate.investorId !== investorId) {
      throw new StatementError('This ND Mandate account does not belong to the requesting investor.');
    }
    return this.buildPsrStatement(
      {
        investorName: (await this.prisma.investor.findUniqueOrThrow({ where: { investorId } })).fullLegalName,
        productName: mandate.ledgerEntity.product?.name ?? mandate.ledgerEntity.name,
        accountRef: mandate.mandateRef,
        capitalKobo: mandate.committedCapitalKobo ?? 0n,
        investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null,
        mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null,
        targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null,
      },
      await this.prisma.distributionLineItem.findMany({
        where: { ndMandateAccountId: id, distribution: { OR: [{ paidAt: { gte: periodStart, lte: periodEnd } }, { paidAt: null, recordDate: { gte: periodStart, lte: periodEnd } }] } },
        include: { distribution: true },
        orderBy: { distribution: { recordDate: 'asc' } },
      }),
      periodStart,
      periodEnd,
    );
  }

  // ==========================================================================
  // UNIT_NAV (Halal Fund) statement -- units/NAV vocabulary, invariant 44(a).
  // ==========================================================================
  private async buildUnitNavStatement(
    account: { id: string; productCode: string; unitsHeld: unknown; investor: { fullLegalName: string }; product: { name: string } },
    periodStart: Date,
    periodEnd: Date,
  ): Promise<Uint8Array> {
    const ledgerEntity = await this.prisma.ledgerEntity.findFirst({ where: { productCode: account.productCode } });
    const [txns, lineItems, navHistory] = await Promise.all([
      this.prisma.txn.findMany({ where: { productAccountId: account.id, valueDate: { gte: periodStart, lte: periodEnd } }, orderBy: { valueDate: 'asc' } }),
      this.prisma.distributionLineItem.findMany({
        where: { productAccountId: account.id, distribution: { OR: [{ paidAt: { gte: periodStart, lte: periodEnd } }, { paidAt: null, recordDate: { gte: periodStart, lte: periodEnd } }] } },
        include: { distribution: true },
        orderBy: { distribution: { recordDate: 'asc' } },
      }),
      ledgerEntity
        ? this.prisma.navRecord.findMany({ where: { ledgerEntityCode: ledgerEntity.code, valuationDate: { gte: periodStart, lte: periodEnd } }, orderBy: { valuationDate: 'asc' } })
        : Promise.resolve([]),
    ]);

    const template = await this.letterhead.getActiveContent();
    const w = new PdfWriter(await PDFDocument.create());
    await w.init();
    w.letterheadHeader(template, 'Investor Statement');
    w.subtitle(`${account.product.name} — Units / NAV Statement`);
    w.kv('Investor', account.investor.fullLegalName);
    w.kv('Account reference', account.id);
    w.kv('Statement period', `${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`);
    w.gap();

    const unitsHeld = account.unitsHeld ? Number(account.unitsHeld) : 0;
    const latestNav = navHistory.length > 0 ? navHistory[navHistory.length - 1] : null;
    w.kv('Units held (as at statement date)', unitsHeld.toLocaleString(undefined, { maximumFractionDigits: 4 }));
    if (latestNav) {
      w.kv('NAV per unit (latest in period)', `NGN ${(Number(latestNav.navPerUnit)).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
      w.kv('Estimated holding value', kobo(BigInt(Math.round(unitsHeld * Number(latestNav.navPerUnit) * 100))));
    }
    w.gap();

    w.heading('NAV History');
    w.table(['Date', 'NAV per unit', 'Total Fund NAV'], navHistory.map((n) => [fmtDate(n.valuationDate), `NGN ${Number(n.navPerUnit).toFixed(4)}`, kobo(n.totalNavKobo)]));
    w.gap();

    w.heading('Transactions');
    w.table(['Date', 'Type', 'Amount', 'Units'], txns.map((t) => [fmtDate(t.valueDate), t.txnType, kobo(t.amountKobo), t.unitsQty ? Number(t.unitsQty).toFixed(4) : '—']));
    w.gap();

    w.heading('Distributions');
    w.table(
      ['Date', 'Total payout', 'DRIP units'],
      lineItems.map((li) => [fmtDate(li.distribution.paidAt ?? li.distribution.recordDate), kobo(li.totalPayoutKobo), li.dripUnits ? Number(li.dripUnits).toFixed(4) : '—']),
    );

    w.footer('This statement is for informational purposes and does not constitute investment advice. NAV/unit prices are the fund\'s own published valuations, subject to revision.');
    if (template) w.footer(template.footerDisclaimer);
    return w.save();
  }

  // ==========================================================================
  // PSR (pool / ND-Mandate) statement -- capital/PSR vocabulary ONLY.
  // No parameter here is capable of carrying a units/NAV value -- this
  // function's own signature structurally cannot render one.
  // ==========================================================================
  private async buildPsrStatement(
    header: { investorName: string; productName: string; accountRef: string; capitalKobo: bigint; investorRatioPct: number | null; mudaribRatioPct: number | null; targetReturnPct: number | null },
    lineItems: { distribution: { paidAt: Date | null; recordDate: Date }; capitalKobo: bigint; entitlementKobo: bigint | null; priorityPayoutKobo: bigint | null; surplusPayoutKobo: bigint | null; totalPayoutKobo: bigint }[],
    periodStart: Date,
    periodEnd: Date,
  ): Promise<Uint8Array> {
    const template = await this.letterhead.getActiveContent();
    const w = new PdfWriter(await PDFDocument.create());
    await w.init();
    w.letterheadHeader(template, 'Investor Statement');
    w.subtitle(`${header.productName} — Capital / PSR Statement`);
    w.kv('Investor', header.investorName);
    w.kv('Account reference', header.accountRef);
    w.kv('Statement period', `${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`);
    w.gap();

    w.kv('Capital / committed amount', kobo(header.capitalKobo));
    if (header.investorRatioPct !== null && header.mudaribRatioPct !== null) {
      w.kv('Profit-Sharing Ratio (PSR)', `${(header.investorRatioPct * 100).toFixed(1)}% investor / ${(header.mudaribRatioPct * 100).toFixed(1)}% mudarib`);
    }
    if (header.targetReturnPct !== null) {
      w.kv('Target return — benchmark only, not guaranteed', `${(header.targetReturnPct * 100).toFixed(2)}% p.a.`);
    }
    w.gap();

    w.heading('Profit Distributions');
    w.table(
      ['Date', 'Capital base', 'Priority payout', 'Surplus payout', 'Total payout'],
      lineItems.map((li) => [
        fmtDate(li.distribution.paidAt ?? li.distribution.recordDate),
        kobo(li.capitalKobo),
        li.priorityPayoutKobo !== null ? kobo(li.priorityPayoutKobo) : '—',
        li.surplusPayoutKobo !== null ? kobo(li.surplusPayoutKobo) : '—',
        kobo(li.totalPayoutKobo),
      ]),
    );

    w.footer('This is a Private Portfolio / ND Mandate participation valued on a capital and Profit-Sharing-Ratio (PSR) basis — no unit price or Net Asset Value applies. Target return is an aspirational benchmark only, never a guaranteed return. This statement is for informational purposes and does not constitute investment advice.');
    if (template) w.footer(template.footerDisclaimer);
    return w.save();
  }
}
