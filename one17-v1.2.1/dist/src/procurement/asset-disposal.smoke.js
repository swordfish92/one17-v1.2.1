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
const ledger_service_1 = require("../ledger/ledger.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const procurement_service_1 = require("./procurement.service");
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
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const procurement = new procurement_service_1.ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);
    const corpServices = await prisma.appUser.create({ data: { email: `ad-corpsvc-${RUN}@one17.test`, displayName: 'ad-corpsvc' } });
    await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
    const outsider = await prisma.appUser.create({ data: { email: `ad-outsider-${RUN}@one17.test`, displayName: 'ad-outsider' } });
    const fundCode = `SMOKE-AD-FUND-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke AD Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const accountCodes = [['1000', 'Cash', 'ASSET'], ['1170', 'Fixed Assets', 'ASSET'], ['1175', 'Accumulated Depreciation', 'ASSET'], ['6025', 'Gain/(Loss) on Disposal of Assets', 'EXPENSE']];
    for (const [accountCode, accountName, accountType] of accountCodes) {
        await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode, accountName, accountType, aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
    }
    const assetA = await prisma.assetRegisterEntry.create({
        data: { assetCode: `SMOKE-AD-A-${RUN}`, description: 'Smoke laptop A', ledgerEntityCode: fundCode, costKobo: 100000000n, acquisitionDate: new Date('2024-01-01'), usefulLifeMonths: 36, accumulatedDepreciationKobo: 60000000n, status: 'ACTIVE', createdByUserId: corpServices.id },
    });
    const assetB = await prisma.assetRegisterEntry.create({
        data: { assetCode: `SMOKE-AD-B-${RUN}`, description: 'Smoke laptop B', ledgerEntityCode: fundCode, costKobo: 100000000n, acquisitionDate: new Date('2024-01-01'), usefulLifeMonths: 36, accumulatedDepreciationKobo: 90000000n, status: 'ACTIVE', createdByUserId: corpServices.id },
    });
    await expectReject('outsider cannot dispose a fixed asset', () => procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 30000000n, gainLossAccountCode: '6025', disposedByUserId: outsider.id }));
    const disposalA = await procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 30000000n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id });
    if (disposalA.gainLossKobo === -10000000n && disposalA.asset.status === 'DISPOSED')
        ok('disposal at a LOSS computes gainLossKobo correctly (negative) and flips status DISPOSED');
    else
        fail('loss-disposal did not compute as expected', disposalA);
    const journalA = await prisma.journalEntry.findUniqueOrThrow({ where: { id: disposalA.journal.id }, include: { lines: true } });
    const totalDebitA = journalA.lines.reduce((s, l) => s + l.debitKobo, 0n);
    const totalCreditA = journalA.lines.reduce((s, l) => s + l.creditKobo, 0n);
    if (totalDebitA === totalCreditA && totalDebitA === 30000000n + 60000000n + 10000000n)
        ok('loss-disposal journal balances (Dr Cash 300k + Dr AccumDep 600k + Dr Loss 100k = Cr Asset 1,000k)');
    else
        fail('loss-disposal journal does not balance as expected', { totalDebitA, totalCreditA, lines: journalA.lines });
    const disposalB = await procurement.disposeAsset({ assetRegisterEntryId: assetB.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 25000000n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id });
    if (disposalB.gainLossKobo === 15000000n)
        ok('disposal at a GAIN computes gainLossKobo correctly (positive)');
    else
        fail('gain-disposal did not compute as expected', disposalB);
    const journalB = await prisma.journalEntry.findUniqueOrThrow({ where: { id: disposalB.journal.id }, include: { lines: true } });
    const totalDebitB = journalB.lines.reduce((s, l) => s + l.debitKobo, 0n);
    const totalCreditB = journalB.lines.reduce((s, l) => s + l.creditKobo, 0n);
    if (totalDebitB === totalCreditB && totalCreditB === 100000000n + 15000000n)
        ok('gain-disposal journal balances (Dr Cash 250k + Dr AccumDep 900k = Cr Asset 1,000k + Cr Gain 150k)');
    else
        fail('gain-disposal journal does not balance as expected', { totalDebitB, totalCreditB, lines: journalB.lines });
    if (journalB.status === 'DRAFT')
        ok('the fired disposal journal itself stays DRAFT -- a genuinely separate checker must still post it');
    else
        fail('disposal journal did not land in the expected DRAFT (awaiting posting approval) state', journalB);
    await expectReject('a second disposal attempt on an already-DISPOSED asset is refused', () => procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-10'), proceedsKobo: 10000n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id }));
    const wfInstances = await prisma.workflowInstance.findMany({ where: { entityType: 'journal_entry', entityId: { in: [disposalA.journal.id, disposalB.journal.id] } } });
    const wfIds = wfInstances.map((w) => w.id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.journalEntryLine.deleteMany({ where: { journalEntryId: { in: [disposalA.journal.id, disposalB.journal.id] } } });
    await prisma.journalEntry.deleteMany({ where: { id: { in: [disposalA.journal.id, disposalB.journal.id] } } });
    await prisma.assetRegisterEntry.deleteMany({ where: { id: { in: [assetA.id, assetB.id] } } });
    await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: fundCode } });
    await prisma.ledgerEntity.delete({ where: { code: fundCode } });
    const userIds = [corpServices.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — fixed-asset disposal/derecognition (invariant 51b-x) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=asset-disposal.smoke.js.map