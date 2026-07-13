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
const event_journal_service_1 = require("./event-journal.service");
const event_journal_types_1 = require("./event-journal.types");
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
    const finadmin = await prisma.appUser.create({ data: { email: `ej-finadmin-${RUN}@one17.test`, displayName: 'ej-finadmin' } });
    await rbac.assignRole({ userId: finadmin.id, roleCode: 'FIN_ADMIN' });
    const finadmin2 = await prisma.appUser.create({ data: { email: `ej-finadmin2-${RUN}@one17.test`, displayName: 'ej-finadmin2' } });
    await rbac.assignRole({ userId: finadmin2.id, roleCode: 'FIN_ADMIN' });
    const fundCode = `SMOKE-EJ-FUND-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke EJ Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const accountCodes = [['1000', 'Cash'], ['1100', 'Investment - Murabaha A'], ['3010', 'Investor Capital'], ['2060', 'Distribution Payable']];
    for (const [accountCode, accountName] of accountCodes) {
        await prisma.chartOfAccount.create({
            data: { ledgerEntityCode: fundCode, accountCode, accountName, accountType: accountCode.startsWith('3') ? 'EQUITY' : accountCode.startsWith('2') ? 'LIABILITY' : 'ASSET', aaoifiRef: 'TEST', ifrsRef: 'TEST' },
        });
    }
    const placement = await eventJournal.generateAndRequestPosting({
        eventType: 'CAPITAL_PLACEMENT_RECEIVED',
        ledgerEntityCode: fundCode,
        entryDate: new Date('2026-07-04'),
        amountKobo: 500000000n,
        referenceTokens: { investor_id: 'HF001', date: '2026-07-04' },
        createdByUserId: finadmin.id,
    });
    if (placement.journal.journalReference === 'JE-PLC-HF001-2026-07-04' && placement.journal.status === 'DRAFT') {
        ok(`CAPITAL_PLACEMENT_RECEIVED: journal drafted with reference tokens substituted (${placement.journal.journalReference}), status DRAFT (never auto-posted)`);
    }
    else {
        fail('placement journal generation mismatch', placement.journal);
    }
    if (placement.workflowInstance.status === 'PENDING_APPROVAL') {
        ok('journal posting REQUESTED (workflow PENDING_APPROVAL) — the engine drafted and requested, a human checker still has to approve');
    }
    else {
        fail(`expected PENDING_APPROVAL, got ${placement.workflowInstance.status}`);
    }
    await expectReject('INVESTMENT_DEPLOYMENT with no override on a ranged dr_account_code (1100-1150) is rejected', () => eventJournal.generateAndRequestPosting({
        eventType: 'INVESTMENT_DEPLOYMENT', ledgerEntityCode: fundCode, entryDate: new Date('2026-07-04'),
        amountKobo: 100000000n, referenceTokens: { inv_id: 'INV-01', date: '2026-07-04' }, createdByUserId: finadmin.id,
    }));
    const deployment = await eventJournal.generateAndRequestPosting({
        eventType: 'INVESTMENT_DEPLOYMENT', ledgerEntityCode: fundCode, entryDate: new Date('2026-07-04'),
        amountKobo: 100000000n, referenceTokens: { inv_id: 'INV-01', date: '2026-07-04' },
        drAccountCodeOverride: '1100', createdByUserId: finadmin.id,
    });
    if (deployment.journal.status === 'DRAFT')
        ok('INVESTMENT_DEPLOYMENT succeeds once the specific account (1100) is supplied as an override for the ranged config code');
    else
        fail('deployment journal generation failed', deployment);
    await expectReject('an event_type with no event_journal_config row is rejected', () => eventJournal.generateAndRequestPosting({
        eventType: 'NOT_A_REAL_EVENT', ledgerEntityCode: fundCode, entryDate: new Date('2026-07-04'),
        amountKobo: 1n, referenceTokens: {}, createdByUserId: finadmin.id,
    }));
    await expectReject('the DB trigger still rejects a direct POSTED bypass even for an engine-generated journal', () => prisma.journalEntry.update({ where: { id: placement.journal.id }, data: { status: 'POSTED' } }));
    const approved = await ledger.approveJournalPosting({ workflowInstanceId: placement.workflowInstance.id, approverUserId: finadmin2.id });
    if (approved?.status === 'POSTED')
        ok('after a DIFFERENT human (FIN_ADMIN checker) approves, the journal posts through the standing maker-checker path — same machinery, no shortcut for engine-originated journals');
    else
        fail('expected approval to post the journal', approved);
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — event_journal_config activated for engine events, posting only through the existing maker-checker machinery.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    if (err instanceof event_journal_types_1.EventJournalError)
        console.error('Unhandled event-journal error:', err.message);
    else
        console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=event-journal.smoke.js.map