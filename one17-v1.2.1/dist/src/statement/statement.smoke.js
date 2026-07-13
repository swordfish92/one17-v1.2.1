"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const zlib = __importStar(require("zlib"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const statement_service_1 = require("./statement.service");
const statement_types_1 = require("./statement.types");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function extractPdfHexText(bytes) {
    const buf = Buffer.from(bytes);
    const raw = buf.toString('latin1');
    const chunks = [];
    const streamRe = /stream\r?\n/g;
    let match;
    while ((match = streamRe.exec(raw))) {
        const start = match.index + match[0].length;
        const end = raw.indexOf('endstream', start);
        if (end === -1)
            continue;
        let streamBytes = buf.subarray(start, end);
        while (streamBytes.length > 0 && (streamBytes[streamBytes.length - 1] === 0x0a || streamBytes[streamBytes.length - 1] === 0x0d)) {
            streamBytes = streamBytes.subarray(0, streamBytes.length - 1);
        }
        try {
            chunks.push(zlib.inflateSync(streamBytes).toString('latin1'));
        }
        catch { }
    }
    return chunks.join('\n');
}
function pdfContainsText(pdfHexText, needle) {
    return pdfHexText.toUpperCase().includes(Buffer.from(needle, 'latin1').toString('hex').toUpperCase());
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const statements = new statement_service_1.StatementService(prisma, letterhead);
    const staff = await prisma.appUser.create({ data: { email: `stmt-staff-${RUN}@one17.test`, displayName: 'stmt-staff' } });
    const investorA = await prisma.investor.create({
        data: {
            investorId: `SMOKE-STMT-INV-A-${RUN}`, fullLegalName: 'Smoke Statement Investor A', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-STMT-A-${RUN}`, contactEmail: `stmt-inv-a-${RUN}@one17.test`,
            contactPhone: '+2340000000020', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
            onboardedByUserId: staff.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const investorB = await prisma.investor.create({
        data: {
            investorId: `SMOKE-STMT-INV-B-${RUN}`, fullLegalName: 'Smoke Statement Investor B', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-STMT-B-${RUN}`, contactEmail: `stmt-inv-b-${RUN}@one17.test`,
            contactPhone: '+2340000000021', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
            onboardedByUserId: staff.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const periodStart = new Date('2026-01-01T00:00:00Z');
    const periodEnd = new Date('2026-06-30T00:00:00Z');
    const FUND_CODE = `SMOKE-STMT-FUND-${RUN}`;
    await prisma.product.create({ data: { code: FUND_CODE, name: 'Smoke Statement Fund', engineType: 'UNIT_NAV', status: 'ACTIVE' } });
    const fundLedger = await prisma.ledgerEntity.create({ data: { code: `${FUND_CODE}-01`, name: 'Smoke Statement Fund Ledger', entityType: 'FUND', primaryBasis: 'AAOIFI', productCode: FUND_CODE } });
    const fundAccount = await prisma.productAccount.create({
        data: { investorId: investorA.investorId, productCode: FUND_CODE, startDate: new Date('2026-01-01'), principalOrCommittedKobo: 500000000n, unitsHeld: 50000 },
    });
    await prisma.navRecord.create({
        data: {
            ledgerEntityCode: fundLedger.code, valuationDate: new Date('2026-03-31'), portfolioMktValKobo: 55000000000n,
            uninvestedCashKobo: 1000000n, accruedUnpaidFeesKobo: 50000n, totalNavKobo: 55001000000n,
            unitsOutstanding: 5_000_000, navPerUnit: 110.002, offerPrice: 110.5, bidPrice: 109.5,
        },
    });
    await prisma.txn.create({
        data: { txnType: 'SUBSCRIPTION', ledgerEntityCode: fundLedger.code, productAccountId: fundAccount.id, valueDate: new Date('2026-01-05'), amountKobo: 500000000n, unitsQty: 50000, makerUserId: staff.id, status: 'POSTED' },
    });
    const fundDistribution = await prisma.distribution.create({
        data: { ledgerEntityCode: fundLedger.code, productCode: FUND_CODE, method: 'NAV', periodStart: new Date('2026-01-01'), periodEnd: new Date('2026-03-31'), recordDate: new Date('2026-03-31'), netAvailableKobo: 100000000n, toParticipantsKobo: 90000000n, retainedOrMudaribBaseKobo: 10000000n, paidAt: new Date('2026-04-05'), createdByUserId: staff.id },
    });
    await prisma.distributionLineItem.create({
        data: { distributionId: fundDistribution.id, productAccountId: fundAccount.id, capitalKobo: 500000000n, totalPayoutKobo: 4500000n, dripUnits: 400 },
    });
    const POOL_CODE = `SMOKE-STMT-POOL-${RUN}`;
    await prisma.product.create({ data: { code: POOL_CODE, name: 'Smoke Statement Pool', engineType: 'PSR_WATERFALL', status: 'ACTIVE' } });
    const poolLedger = await prisma.ledgerEntity.create({ data: { code: `${POOL_CODE}-01`, name: 'Smoke Statement Pool Ledger', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode: POOL_CODE } });
    const poolAccount = await prisma.productAccount.create({
        data: { investorId: investorA.investorId, productCode: POOL_CODE, startDate: new Date('2026-01-01'), principalOrCommittedKobo: 2000000000n, psrInvestorPct: 0.7, psrMudaribPct: 0.3, targetReturnPctBenchmark: 0.15 },
    });
    const poolDistribution = await prisma.distribution.create({
        data: { ledgerEntityCode: poolLedger.code, productCode: POOL_CODE, method: 'ND_MUDARABAH', periodStart: new Date('2026-01-01'), periodEnd: new Date('2026-03-31'), recordDate: new Date('2026-03-31'), netAvailableKobo: 300000000n, toParticipantsKobo: 210000000n, retainedOrMudaribBaseKobo: 90000000n, paidAt: new Date('2026-04-05'), createdByUserId: staff.id },
    });
    await prisma.distributionLineItem.create({
        data: { distributionId: poolDistribution.id, productAccountId: poolAccount.id, capitalKobo: 2000000000n, priorityPayoutKobo: 25000000n, surplusPayoutKobo: 3000000n, totalPayoutKobo: 28000000n },
    });
    const MANDATE_REF = `SMOKE-STMT-MANDATE-${RUN}`;
    const mandateLedger = await prisma.ledgerEntity.create({ data: { code: `${MANDATE_REF}-LE`, name: 'Smoke Statement Mandate', entityType: 'MANDATE', primaryBasis: 'AAOIFI' } });
    const mandateAccount = await prisma.ndMandateAccount.create({
        data: { mandateRef: MANDATE_REF, ledgerEntityCode: mandateLedger.code, participantType: 'INVESTOR', investorId: investorA.investorId, sharingMode: 'MUDARABAH_PSR', investorRatio: 0.75, mudaribRatio: 0.25, targetReturnPct: 0.14, status: 'ACTIVE', startDate: new Date('2026-01-01'), committedCapitalKobo: 1000000000n, createdByUserId: staff.id },
    });
    const mandateDistribution = await prisma.distribution.create({
        data: { ledgerEntityCode: mandateLedger.code, productCode: MANDATE_REF, method: 'ND_MUDARABAH', periodStart: new Date('2026-01-01'), periodEnd: new Date('2026-03-31'), recordDate: new Date('2026-03-31'), netAvailableKobo: 150000000n, toParticipantsKobo: 112500000n, retainedOrMudaribBaseKobo: 37500000n, paidAt: new Date('2026-04-05'), createdByUserId: staff.id },
    });
    await prisma.distributionLineItem.create({
        data: { distributionId: mandateDistribution.id, ndMandateAccountId: mandateAccount.id, capitalKobo: 1000000000n, priorityPayoutKobo: 10000000n, surplusPayoutKobo: 1250000n, totalPayoutKobo: 11250000n },
    });
    const accountsA = await statements.listAccounts(investorA.investorId);
    const kinds = accountsA.map((a) => `${a.kind}:${a.engineType}`).sort();
    if (accountsA.length === 3 && kinds.join(',') === 'MANDATE:MANDATE,PRODUCT:PSR_WATERFALL,PRODUCT:UNIT_NAV') {
        ok(`listAccounts returns all 3 of investor A's holdings correctly typed: ${kinds.join(', ')}`);
    }
    else {
        fail('listAccounts did not return the expected 3 holdings', accountsA);
    }
    const accountsB = await statements.listAccounts(investorB.investorId);
    if (accountsB.length === 0) {
        ok("listAccounts for investor B (no holdings) returns empty -- confirms scoping isn't accidentally global");
    }
    else {
        fail('listAccounts for investor B unexpectedly returned rows', accountsB);
    }
    const fundPdf = await statements.generateStatementPdf('PRODUCT', fundAccount.id, investorA.investorId, periodStart, periodEnd);
    const fundRaw = Buffer.from(fundPdf).toString('latin1');
    if (fundPdf.length > 0 && fundRaw.startsWith('%PDF')) {
        ok(`UNIT_NAV statement PDF generated (${fundPdf.length} bytes, valid PDF header)`);
    }
    else {
        fail('UNIT_NAV statement did not produce a valid PDF', fundRaw.slice(0, 20));
    }
    const fundText = extractPdfHexText(fundPdf);
    if (pdfContainsText(fundText, 'Units held') && pdfContainsText(fundText, 'NAV per unit')) {
        ok('UNIT_NAV statement correctly carries units/NAV vocabulary (invariant 44a: HF is the ONLY engine allowed to)');
    }
    else {
        fail('UNIT_NAV statement is missing expected units/NAV vocabulary', { hasUnitsHeld: pdfContainsText(fundText, 'Units held'), hasNavPerUnit: pdfContainsText(fundText, 'NAV per unit') });
    }
    const poolPdf = await statements.generateStatementPdf('PRODUCT', poolAccount.id, investorA.investorId, periodStart, periodEnd);
    const poolRaw = Buffer.from(poolPdf).toString('latin1');
    const poolText = extractPdfHexText(poolPdf);
    const poolLeaks = ['Units held', 'NAV per unit', 'NAV History'].filter((s) => pdfContainsText(poolText, s));
    if (poolPdf.length > 0 && poolRaw.startsWith('%PDF') && poolLeaks.length === 0 && pdfContainsText(poolText, 'Profit-Sharing Ratio')) {
        ok('POOL statement PDF generated with capital/PSR vocabulary and NO units/NAV leakage (invariant 44a)');
    }
    else {
        fail('POOL statement failed the vocabulary sweep', { leaks: poolLeaks, hasPsr: pdfContainsText(poolText, 'Profit-Sharing Ratio') });
    }
    const mandatePdf = await statements.generateStatementPdf('MANDATE', mandateAccount.id, investorA.investorId, periodStart, periodEnd);
    const mandateRaw = Buffer.from(mandatePdf).toString('latin1');
    const mandateText = extractPdfHexText(mandatePdf);
    const mandateLeaks = ['Units held', 'NAV per unit', 'NAV History'].filter((s) => pdfContainsText(mandateText, s));
    if (mandatePdf.length > 0 && mandateRaw.startsWith('%PDF') && mandateLeaks.length === 0 && pdfContainsText(mandateText, 'Profit-Sharing Ratio')) {
        ok('MANDATE statement PDF generated with capital/PSR vocabulary and NO units/NAV leakage (invariant 44a)');
    }
    else {
        fail('MANDATE statement failed the vocabulary sweep', { leaks: mandateLeaks, hasPsr: pdfContainsText(mandateText, 'Profit-Sharing Ratio') });
    }
    await expectReject("investor B cannot fetch investor A's UNIT_NAV statement by guessing the account id", () => statements.generateStatementPdf('PRODUCT', fundAccount.id, investorB.investorId, periodStart, periodEnd));
    await expectReject("investor B cannot fetch investor A's POOL statement by guessing the account id", () => statements.generateStatementPdf('PRODUCT', poolAccount.id, investorB.investorId, periodStart, periodEnd));
    await expectReject("investor B cannot fetch investor A's MANDATE statement by guessing the account id", () => statements.generateStatementPdf('MANDATE', mandateAccount.id, investorB.investorId, periodStart, periodEnd));
    await expectReject('unknown product account id is refused with a clear message', () => statements.generateStatementPdf('PRODUCT', '00000000-0000-0000-0000-000000000000', investorA.investorId, periodStart, periodEnd));
    if (!(new statement_types_1.StatementError('x') instanceof Error))
        fail('StatementError should extend Error');
    await prisma.distributionLineItem.deleteMany({ where: { distributionId: { in: [fundDistribution.id, poolDistribution.id, mandateDistribution.id] } } });
    await prisma.distribution.deleteMany({ where: { id: { in: [fundDistribution.id, poolDistribution.id, mandateDistribution.id] } } });
    await prisma.txn.deleteMany({ where: { productAccountId: fundAccount.id } });
    await prisma.navRecord.deleteMany({ where: { ledgerEntityCode: fundLedger.code } });
    await prisma.ndMandateAccount.deleteMany({ where: { id: mandateAccount.id } });
    await prisma.productAccount.deleteMany({ where: { id: { in: [fundAccount.id, poolAccount.id] } } });
    await prisma.ledgerEntity.deleteMany({ where: { code: { in: [fundLedger.code, poolLedger.code, mandateLedger.code] } } });
    await prisma.product.deleteMany({ where: { code: { in: [FUND_CODE, POOL_CODE] } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: [investorA.investorId, investorB.investorId] } } });
    await prisma.appUser.deleteMany({ where: { id: staff.id } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — investor statements (invariant 44d) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=statement.smoke.js.map