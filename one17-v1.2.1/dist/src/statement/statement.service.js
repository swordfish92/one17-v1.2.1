"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementService = void 0;
const common_1 = require("@nestjs/common");
const pdf_lib_1 = require("pdf-lib");
const prisma_service_1 = require("../prisma/prisma.service");
const statement_types_1 = require("./statement.types");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const pdf_writer_1 = require("../pdf/pdf-writer");
let StatementService = class StatementService {
    prisma;
    letterhead;
    constructor(prisma, letterhead) {
        this.prisma = prisma;
        this.letterhead = letterhead;
    }
    async listAccounts(investorId) {
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
                kind: 'PRODUCT',
                productCode: a.productCode,
                productName: a.product.name,
                engineType: a.product.engineType,
                status: a.status,
            })),
            ...mandateAccounts.map((m) => ({
                id: m.id,
                kind: 'MANDATE',
                productCode: m.ledgerEntity.productCode ?? m.mandateRef,
                productName: m.ledgerEntity.product?.name ?? m.ledgerEntity.name,
                engineType: 'MANDATE',
                status: m.status,
            })),
        ];
    }
    async generateStatementPdf(kind, id, investorId, periodStart, periodEnd) {
        if (kind === 'PRODUCT') {
            const account = await this.prisma.productAccount.findUnique({ where: { id }, include: { product: true, investor: true } });
            if (!account)
                throw new statement_types_1.StatementError('Product account not found.');
            if (account.investorId !== investorId) {
                throw new statement_types_1.StatementError('This product account does not belong to the requesting investor.');
            }
            if (account.product.engineType === 'UNIT_NAV') {
                return this.buildUnitNavStatement(account, periodStart, periodEnd);
            }
            return this.buildPsrStatement({
                investorName: account.investor.fullLegalName,
                productName: account.product.name,
                accountRef: account.id,
                capitalKobo: account.principalOrCommittedKobo,
                investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
                mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
                targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null,
            }, await this.prisma.distributionLineItem.findMany({
                where: { productAccountId: id, distribution: { OR: [{ paidAt: { gte: periodStart, lte: periodEnd } }, { paidAt: null, recordDate: { gte: periodStart, lte: periodEnd } }] } },
                include: { distribution: true },
                orderBy: { distribution: { recordDate: 'asc' } },
            }), periodStart, periodEnd);
        }
        const mandate = await this.prisma.ndMandateAccount.findUnique({
            where: { id },
            include: { ledgerEntity: { include: { product: true } } },
        });
        if (!mandate)
            throw new statement_types_1.StatementError('ND Mandate account not found.');
        if (mandate.investorId !== investorId) {
            throw new statement_types_1.StatementError('This ND Mandate account does not belong to the requesting investor.');
        }
        return this.buildPsrStatement({
            investorName: (await this.prisma.investor.findUniqueOrThrow({ where: { investorId } })).fullLegalName,
            productName: mandate.ledgerEntity.product?.name ?? mandate.ledgerEntity.name,
            accountRef: mandate.mandateRef,
            capitalKobo: mandate.committedCapitalKobo ?? 0n,
            investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null,
            mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null,
            targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null,
        }, await this.prisma.distributionLineItem.findMany({
            where: { ndMandateAccountId: id, distribution: { OR: [{ paidAt: { gte: periodStart, lte: periodEnd } }, { paidAt: null, recordDate: { gte: periodStart, lte: periodEnd } }] } },
            include: { distribution: true },
            orderBy: { distribution: { recordDate: 'asc' } },
        }), periodStart, periodEnd);
    }
    async buildUnitNavStatement(account, periodStart, periodEnd) {
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
        const w = new pdf_writer_1.PdfWriter(await pdf_lib_1.PDFDocument.create());
        await w.init();
        w.letterheadHeader(template, 'Investor Statement');
        w.subtitle(`${account.product.name} — Units / NAV Statement`);
        w.kv('Investor', account.investor.fullLegalName);
        w.kv('Account reference', account.id);
        w.kv('Statement period', `${(0, pdf_writer_1.fmtDate)(periodStart)} – ${(0, pdf_writer_1.fmtDate)(periodEnd)}`);
        w.gap();
        const unitsHeld = account.unitsHeld ? Number(account.unitsHeld) : 0;
        const latestNav = navHistory.length > 0 ? navHistory[navHistory.length - 1] : null;
        w.kv('Units held (as at statement date)', unitsHeld.toLocaleString(undefined, { maximumFractionDigits: 4 }));
        if (latestNav) {
            w.kv('NAV per unit (latest in period)', `NGN ${(Number(latestNav.navPerUnit)).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
            w.kv('Estimated holding value', (0, pdf_writer_1.kobo)(BigInt(Math.round(unitsHeld * Number(latestNav.navPerUnit) * 100))));
        }
        w.gap();
        w.heading('NAV History');
        w.table(['Date', 'NAV per unit', 'Total Fund NAV'], navHistory.map((n) => [(0, pdf_writer_1.fmtDate)(n.valuationDate), `NGN ${Number(n.navPerUnit).toFixed(4)}`, (0, pdf_writer_1.kobo)(n.totalNavKobo)]));
        w.gap();
        w.heading('Transactions');
        w.table(['Date', 'Type', 'Amount', 'Units'], txns.map((t) => [(0, pdf_writer_1.fmtDate)(t.valueDate), t.txnType, (0, pdf_writer_1.kobo)(t.amountKobo), t.unitsQty ? Number(t.unitsQty).toFixed(4) : '—']));
        w.gap();
        w.heading('Distributions');
        w.table(['Date', 'Total payout', 'DRIP units'], lineItems.map((li) => [(0, pdf_writer_1.fmtDate)(li.distribution.paidAt ?? li.distribution.recordDate), (0, pdf_writer_1.kobo)(li.totalPayoutKobo), li.dripUnits ? Number(li.dripUnits).toFixed(4) : '—']));
        w.footer('This statement is for informational purposes and does not constitute investment advice. NAV/unit prices are the fund\'s own published valuations, subject to revision.');
        if (template)
            w.footer(template.footerDisclaimer);
        return w.save();
    }
    async buildPsrStatement(header, lineItems, periodStart, periodEnd) {
        const template = await this.letterhead.getActiveContent();
        const w = new pdf_writer_1.PdfWriter(await pdf_lib_1.PDFDocument.create());
        await w.init();
        w.letterheadHeader(template, 'Investor Statement');
        w.subtitle(`${header.productName} — Capital / PSR Statement`);
        w.kv('Investor', header.investorName);
        w.kv('Account reference', header.accountRef);
        w.kv('Statement period', `${(0, pdf_writer_1.fmtDate)(periodStart)} – ${(0, pdf_writer_1.fmtDate)(periodEnd)}`);
        w.gap();
        w.kv('Capital / committed amount', (0, pdf_writer_1.kobo)(header.capitalKobo));
        if (header.investorRatioPct !== null && header.mudaribRatioPct !== null) {
            w.kv('Profit-Sharing Ratio (PSR)', `${(header.investorRatioPct * 100).toFixed(1)}% investor / ${(header.mudaribRatioPct * 100).toFixed(1)}% mudarib`);
        }
        if (header.targetReturnPct !== null) {
            w.kv('Target return — benchmark only, not guaranteed', `${(header.targetReturnPct * 100).toFixed(2)}% p.a.`);
        }
        w.gap();
        w.heading('Profit Distributions');
        w.table(['Date', 'Capital base', 'Priority payout', 'Surplus payout', 'Total payout'], lineItems.map((li) => [
            (0, pdf_writer_1.fmtDate)(li.distribution.paidAt ?? li.distribution.recordDate),
            (0, pdf_writer_1.kobo)(li.capitalKobo),
            li.priorityPayoutKobo !== null ? (0, pdf_writer_1.kobo)(li.priorityPayoutKobo) : '—',
            li.surplusPayoutKobo !== null ? (0, pdf_writer_1.kobo)(li.surplusPayoutKobo) : '—',
            (0, pdf_writer_1.kobo)(li.totalPayoutKobo),
        ]));
        w.footer('This is a Private Portfolio / ND Mandate participation valued on a capital and Profit-Sharing-Ratio (PSR) basis — no unit price or Net Asset Value applies. Target return is an aspirational benchmark only, never a guaranteed return. This statement is for informational purposes and does not constitute investment advice.');
        if (template)
            w.footer(template.footerDisclaimer);
        return w.save();
    }
};
exports.StatementService = StatementService;
exports.StatementService = StatementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        letterhead_service_1.LetterheadService])
], StatementService);
//# sourceMappingURL=statement.service.js.map