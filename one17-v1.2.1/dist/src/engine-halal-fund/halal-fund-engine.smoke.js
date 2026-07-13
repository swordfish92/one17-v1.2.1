"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const halal_fund_engine_service_1 = require("./halal-fund-engine.service");
const halal_fund_engine_types_1 = require("./halal-fund-engine.types");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
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
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const engine = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `hf-engine-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('portoff', 'PORT_OFF');
    await makeUser('portmgr', 'PORT_MGR');
    await makeUser('portmgr2', 'PORT_MGR');
    await makeUser('fundacct', 'FUND_ACCT');
    await makeUser('fundacct2', 'FUND_ACCT');
    const fundCode = `SMOKE-HF-ENGINE-${RUN}`;
    const poolCode = `SMOKE-HF-POOL-CHECK-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke Halal Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    await prisma.ledgerEntity.create({ data: { code: poolCode, name: 'Smoke Pool (AMD-03 check)', entityType: 'POOL', primaryBasis: 'AAOIFI' } });
    await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
    const launchDate = new Date('2024-12-20T00:00:00Z');
    const laterDate = new Date('2025-06-18T00:00:00Z');
    await prisma.portfolioPosition.create({
        data: {
            ledgerEntityCode: fundCode,
            contractType: 'MURABAHA',
            isEquity: false,
            principalKobo: 100000000n,
            ratePct: 12,
            entryDate: launchDate,
            status: 'ACTIVE',
        },
    });
    const makerForTxn = id('portoff');
    await prisma.txn.create({
        data: {
            txnType: 'SUBSCRIPTION', ledgerEntityCode: fundCode, valueDate: launchDate,
            amountKobo: 100000000n, unitsQty: 10000, status: 'POSTED', makerUserId: makerForTxn,
        },
    });
    const launchNav = await engine.computeDailyNav({
        ledgerEntityCode: fundCode, valuationDate: launchDate, launchDate, launchPrice: 100,
        offerSpreadPct: 0.015, bidSpreadPct: 0.01,
    });
    if (launchNav.navPerUnit === 100 && launchNav.offerPrice === 101.5 && launchNav.bidPrice === 99) {
        ok(`F-HF-02 launch-day override: NAV/unit=100, offer=101.5 (+1.5%), bid=99 (-1.0%)`);
    }
    else {
        fail(`launch-day NAV mismatch`, launchNav);
    }
    const laterNav = await engine.computeDailyNav({
        ledgerEntityCode: fundCode, valuationDate: laterDate, launchDate, launchPrice: 100,
        offerSpreadPct: 0.015, bidSpreadPct: 0.01,
    });
    const expectedAccruedNaira = 1_000_000 * 0.12 * (180 / 365);
    const expectedMktValKobo = BigInt(Math.round((1_000_000 + expectedAccruedNaira) * 100));
    if (laterNav.portfolioMktValKobo === expectedMktValKobo) {
        ok(`F-HF-03 position accrual: W x G x days/365 matches hand-computed value (${expectedMktValKobo} kobo)`);
    }
    else {
        fail(`F-HF-03 accrual mismatch: expected ${expectedMktValKobo}, got ${laterNav.portfolioMktValKobo}`);
    }
    if (laterNav.uninvestedCashKobo === 0n)
        ok('uninvested cash correctly nets to 0 (all cash deployed into the one position)');
    else
        fail(`expected uninvestedCashKobo=0, got ${laterNav.uninvestedCashKobo}`);
    if (laterNav.marketValueSource === 'BOTTOM_UP')
        ok('CHECK16 62(c): marketValueSource=BOTTOM_UP by default (no manual entry exists yet)');
    else
        fail('expected marketValueSource=BOTTOM_UP before any market-value entry exists', laterNav);
    await expectReject('proposeMarketValueEntry refused: actor lacks NAV_MARKET_VALUE_ENTRY (PORT_MGR is not FUND_ACCT)', () => engine.proposeMarketValueEntry({ ledgerEntityCode: fundCode, valuationDate: laterDate, marketValueKobo: 500000000n, proposedByUserId: id('portmgr') }));
    const proposed = await engine.proposeMarketValueEntry({ ledgerEntityCode: fundCode, valuationDate: laterDate, marketValueKobo: 500000000n, proposedByUserId: id('fundacct') });
    if (proposed.status === 'DRAFT' && proposed.version === 1)
        ok('62(c): market-value entry proposed as DRAFT v1');
    else
        fail('proposeMarketValueEntry did not produce the expected DRAFT v1 row', proposed);
    await expectReject('approveMarketValueEntry refused: same actor as proposer (maker≠checker)', () => engine.approveMarketValueEntry({ entryId: proposed.id, approvedByUserId: id('fundacct') }));
    const approvedEntry = await engine.approveMarketValueEntry({ entryId: proposed.id, approvedByUserId: id('fundacct2') });
    if (approvedEntry.status === 'ACTIVE')
        ok('62(c): a DIFFERENT FUND_ACCT actor approved the entry -> ACTIVE');
    else
        fail('approveMarketValueEntry did not activate the entry', approvedEntry);
    const navWithOverride = await engine.computeDailyNav({
        ledgerEntityCode: fundCode, valuationDate: laterDate, launchDate, launchPrice: 100,
        offerSpreadPct: 0.015, bidSpreadPct: 0.01,
    });
    if (navWithOverride.marketValueSource === 'MANUAL_ENTRY' && navWithOverride.portfolioMktValKobo === 500000000n) {
        ok(`62(c): computeDailyNav now uses the ACTIVE manual entry (₦5,000,000) INSTEAD of the bottom-up sum (${expectedMktValKobo} kobo) -- "feeding computeDailyNav" proven live`);
    }
    else {
        fail('computeDailyNav did not pick up the ACTIVE market-value override', navWithOverride);
    }
    const corrected = await engine.proposeMarketValueEntry({ ledgerEntityCode: fundCode, valuationDate: laterDate, marketValueKobo: 520000000n, proposedByUserId: id('fundacct') });
    if (corrected.version === 2)
        ok('62(c): a "correction" is a NEW version (v2), the ACTIVE v1 row is untouched -- visible history preserved');
    else
        fail('correction did not bump version as expected', corrected);
    await engine.approveMarketValueEntry({ entryId: corrected.id, approvedByUserId: id('fundacct2') });
    const historyAfterCorrection = await engine.listMarketValueEntries(fundCode);
    const v1AfterSupersede = historyAfterCorrection.find((e) => e.version === 1);
    const v2Active = historyAfterCorrection.find((e) => e.version === 2);
    if (v1AfterSupersede?.status === 'SUPERSEDED' && v2Active?.status === 'ACTIVE' && historyAfterCorrection.length === 2) {
        ok('62(c): approving v2 superseded v1 (never two ACTIVE rows at once); full visible history (both versions) still queryable');
    }
    else {
        fail('history after correction is not as expected', historyAfterCorrection);
    }
    const navAfterCorrection = await engine.computeDailyNav({
        ledgerEntityCode: fundCode, valuationDate: laterDate, launchDate, launchPrice: 100,
        offerSpreadPct: 0.015, bidSpreadPct: 0.01,
    });
    if (navAfterCorrection.portfolioMktValKobo === 520000000n)
        ok('62(c): computeDailyNav now reflects the CORRECTED (v2) value');
    else
        fail('computeDailyNav did not pick up the corrected value', navAfterCorrection);
    const published = await engine.publishAndLockNav({
        ledgerEntityCode: fundCode, valuationDate: laterDate, launchDate, launchPrice: 100,
        offerSpreadPct: 0.015, bidSpreadPct: 0.01,
    });
    ok(`NAV published and locked for ${laterDate.toISOString().slice(0, 10)}`);
    await expectReject('re-publishing the same date is rejected (publication is one-shot)', () => engine.publishAndLockNav({ ledgerEntityCode: fundCode, valuationDate: laterDate, launchDate, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01 }));
    await expectReject('DB trigger rejects UPDATE on a locked nav_record (service bypassed)', () => prisma.navRecord.update({ where: { id: published.id }, data: { totalNavKobo: 1n } }));
    await expectReject('DB trigger rejects DELETE on a locked nav_record (service bypassed)', () => prisma.navRecord.delete({ where: { id: published.id } }));
    const subUnits = engine.allocateSubscriptionUnits(1000000n, 101.5);
    if (Math.abs(subUnits - 98.5222) < 0.001)
        ok(`subscription unit allocation: NGN10,000 / 101.5 = ${subUnits} units`);
    else
        fail(`subscription allocation mismatch: got ${subUnits}`);
    const redProceeds = engine.computeRedemptionProceedsKobo(100, 99);
    if (redProceeds === 990000n)
        ok(`redemption proceeds: 100 units x bid 99 = ${redProceeds} kobo`);
    else
        fail(`redemption proceeds mismatch: got ${redProceeds}`);
    const feeRows = await engine.accrueFees({
        ledgerEntityCode: fundCode,
        accrualDate: laterDate,
        navBaseKobo: laterNav.totalNavKobo,
        feeRates: [
            { feeType: 'MANAGEMENT', annualRatePct: 2.0 },
            { feeType: 'TRUSTEE', annualRatePct: 0.4 },
            { feeType: 'CUSTODIAN', annualRatePct: 0.25 },
            { feeType: 'SEC_LEVY', annualRatePct: 0.03 },
            { feeType: 'ADMIN', annualRatePct: 0.1 },
        ],
    });
    if (feeRows.length === 5)
        ok(`F-HF-04: all 5 fee types accrued (Mgmt 2.00 + Trustee 0.40 + Custodian 0.25 + SEC 0.03 + Admin 0.10 = 2.78% total)`);
    else
        fail(`expected 5 fee rows, got ${feeRows.length}`);
    await expectReject('AMD-03: fee accrual rejected at service layer for a POOL ledger entity', () => engine.accrueFees({ ledgerEntityCode: poolCode, accrualDate: laterDate, navBaseKobo: 1000000n, feeRates: [{ feeType: 'MANAGEMENT', annualRatePct: 1 }] }));
    await expectReject('AMD-03: DB trigger also rejects a fee_accrual insert on a POOL (service bypassed)', () => prisma.feeAccrual.create({ data: { ledgerEntityCode: poolCode, feeType: 'MANAGEMENT', accrualDate: laterDate, dailyAmountKobo: 1n, cumulativeAmountKobo: 1n } }));
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-HF-INV-${RUN}`, fullLegalName: 'Smoke Test Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-${RUN}`, contactEmail: `hf-inv-${RUN}@one17.test`,
            contactPhone: '+2340000000000', registeredAddress: 'Test address', sourceOfFunds: 'Salary',
            onboardedByUserId: id('portoff'), kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const account = await prisma.productAccount.create({
        data: { investorId: investor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: launchDate, principalOrCommittedKobo: 100000000n, unitsHeld: 10000 },
    });
    const distA = await engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND',
        periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'INCOME', incomeBasisKobo: 5917808n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
        navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n,
        exDivPricePerUnit: null,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: false, cashPaidKobo: 0n }],
        createdByUserId: id('portoff'),
    });
    const expectedToParticipants = BigInt(Math.round(5_917_808 * 0.8));
    if (distA.result.methodUsed === 'INCOME' && distA.result.toParticipantsKobo === expectedToParticipants) {
        ok(`F-HF-06 Method A (income basis): net available x 80% = ${distA.result.toParticipantsKobo} kobo to participants (20% retained)`);
    }
    else {
        fail('Method A distribution mismatch', distA.result);
    }
    const distB = await engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND',
        periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'NAV', incomeBasisKobo: 0n, closingNavKobo: 106000000n, openingNavKobo: 100000000n, netSubscriptionsKobo: 1000000n,
        navHistoryComplete: true, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n,
        exDivPricePerUnit: null,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: false, cashPaidKobo: 0n }],
        createdByUserId: id('portoff'),
    });
    if (distB.result.methodUsed === 'NAV' && distB.result.netAvailableKobo === 5000000n) {
        ok(`AMD-05 Method B (NAV basis): ClosingNAV - OpeningNAV - NetSubs = ${distB.result.netAvailableKobo} kobo, both methods independently computable`);
    }
    else {
        fail('Method B distribution mismatch', distB.result);
    }
    await expectReject('F-HF-05: distributable % below the 80% SEC floor is rejected', () => engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND', periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'INCOME', incomeBasisKobo: 1000000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
        navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.70, priorTotalDistributedKobo: 0n, exDivPricePerUnit: null,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: false, cashPaidKobo: 0n }], createdByUserId: id('portoff'),
    }));
    await expectReject('AMD-04: DRIP election with no ex-dividend price HALTs', () => engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND', periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'INCOME', incomeBasisKobo: 1000000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
        navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n, exDivPricePerUnit: null,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: true, cashPaidKobo: 0n }], createdByUserId: id('portoff'),
    }));
    await expectReject('AMD-04: DRIP election with a zero/negative ex-dividend price HALTs (not silently divides by zero)', () => engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND', periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'INCOME', incomeBasisKobo: 1000000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
        navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n, exDivPricePerUnit: -5,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: true, cashPaidKobo: 0n }], createdByUserId: id('portoff'),
    }));
    const distDrip = await engine.runDistribution({
        ledgerEntityCode: fundCode, productCode: 'ONE17-HALAL-FUND', periodStart: launchDate, periodEnd: laterDate, recordDate: laterDate,
        method: 'INCOME', incomeBasisKobo: 1250000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
        navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n, exDivPricePerUnit: 102.5,
        participants: [{ productAccountId: account.id, unitsAtRecord: 10000, isDrip: true, cashPaidKobo: 0n }], createdByUserId: id('portoff'),
    });
    const dripLine = distDrip.result.participants[0];
    if (dripLine.dripUnits > 0 && dripLine.dripAmountKobo === dripLine.totalPayoutKobo) {
        ok(`AMD-04: full-DRIP election correctly converts entire payout (${dripLine.dripAmountKobo} kobo) to ${dripLine.dripUnits} units at ex-div price 102.5 — never negative (the D001 defect class)`);
    }
    else {
        fail('DRIP computation looks wrong', dripLine);
    }
    await expectReject('maker cannot approve their own distribution', () => engine.approveDistributionDeclaration(distA.workflowInstanceId, id('portoff')));
    const declared = await engine.approveDistributionDeclaration(distA.workflowInstanceId, id('portmgr'));
    if (declared?.status === 'DECLARED')
        ok('a different approver (PORT_MGR) declares the distribution — maker != checker enforced by the standing WorkflowEngineService');
    else
        fail('declaration failed', declared);
    const paid = await engine.payDistribution(distA.distributionId, id('portmgr'));
    if (paid.status === 'PAID')
        ok('distribution transitions DRAFT -> DECLARED -> PAID');
    else
        fail('pay transition failed', paid);
    await expectReject('cannot pay a distribution that is not DECLARED', () => engine.payDistribution(distB.distributionId, id('portmgr')));
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, engine, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
    const declaredViaInbox = await workflowInbox.approve(distB.workflowInstanceId, id('portmgr'));
    const distBAfter = await prisma.distribution.findUniqueOrThrow({ where: { id: distB.distributionId } });
    if (declaredViaInbox?.status === 'DECLARED' && distBAfter.status === 'DECLARED') {
        ok("WorkflowInboxService.approve() dispatches 'DISTRIBUTION' to approveDistributionDeclaration -> distribution.status DRAFT->DECLARED via the standing Workflow Inbox, not just the engine method called directly");
    }
    else {
        fail('WorkflowInboxService DISTRIBUTION dispatch did not declare the distribution', { declaredViaInbox, distBAfter });
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Halal Fund sealed engine (NAV, pricing, fees, distribution) proven against Formula Library Part B + AMD-03/04/05.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    if (err instanceof halal_fund_engine_types_1.HalalFundEngineError)
        console.error('Unhandled engine error:', err.message);
    else
        console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=halal-fund-engine.smoke.js.map