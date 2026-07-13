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
const counterparty_write_off_service_1 = require("./counterparty-write-off.service");
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
    const writeOff = new counterparty_write_off_service_1.CounterpartyWriteOffService(prisma, audit, delegation, workflow, eventJournal);
    const portMgr = await prisma.appUser.create({ data: { email: `cwo-portmgr-${RUN}@one17.test`, displayName: 'cwo-portmgr' } });
    await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });
    const finAdmin = await prisma.appUser.create({ data: { email: `cwo-finadmin-${RUN}@one17.test`, displayName: 'cwo-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const outsider = await prisma.appUser.create({ data: { email: `cwo-outsider-${RUN}@one17.test`, displayName: 'cwo-outsider' } });
    const fundCode = `SMOKE-CWO-FUND-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke CWO Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const accountCodes = [['6000', 'Impairment Expense', 'EXPENSE'], ['1100', 'Investment - Murabaha A', 'ASSET']];
    for (const [accountCode, accountName, accountType] of accountCodes) {
        await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode, accountName, accountType: accountType, aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
    }
    const counterparty = await prisma.counterparty.create({ data: { legalName: `Smoke Write-Off Ltd ${RUN}`, counterpartyType: 'CORPORATE' } });
    await expectReject('outsider cannot propose a counterparty write-off', () => writeOff.requestWriteOff({ counterpartyId: counterparty.id, writeOffAmountKobo: 50000000n, ledgerEntityCode: fundCode, investmentAccountCode: '1100', reason: 'Smoke test', requestedByUserId: outsider.id }));
    await expectReject('zero write-off amount is refused', () => writeOff.requestWriteOff({ counterpartyId: counterparty.id, writeOffAmountKobo: 0n, ledgerEntityCode: fundCode, investmentAccountCode: '1100', reason: 'Smoke test', requestedByUserId: portMgr.id }));
    const request = await writeOff.requestWriteOff({
        counterpartyId: counterparty.id, writeOffAmountKobo: 50000000n, ledgerEntityCode: fundCode, investmentAccountCode: '1100', reason: 'Facility in default, recovery exhausted', requestedByUserId: portMgr.id,
    });
    if (request.status === 'PENDING' && request.workflowInstanceId)
        ok('requestWriteOff creates a PENDING request, workflow initiated');
    else
        fail('requestWriteOff did not create the expected PENDING row', request);
    await expectReject('proposer cannot approve their own write-off', () => writeOff.decideWriteOff(request.workflowInstanceId, portMgr.id, 'APPROVE'));
    await expectReject('a user without COUNTERPARTY_WRITE_OFF_APPROVAL cannot approve', () => writeOff.decideWriteOff(request.workflowInstanceId, outsider.id, 'APPROVE'));
    const approved = await writeOff.decideWriteOff(request.workflowInstanceId, finAdmin.id, 'APPROVE');
    const counterpartyAfter = await prisma.counterparty.findUniqueOrThrow({ where: { id: counterparty.id } });
    if (approved.status === 'APPROVED' && approved.postedJournalEntryId && counterpartyAfter.accountStatus === 'WRITTEN_OFF') {
        ok('FIN_ADMIN approval fires the IMPAIRMENT_CHARGE journal and flips the counterparty accountStatus to WRITTEN_OFF');
    }
    else {
        fail('write-off approval did not complete as expected', { approved, counterpartyAfter });
    }
    const journal = await prisma.journalEntry.findUniqueOrThrow({ where: { id: approved.postedJournalEntryId } });
    if (journal.status === 'DRAFT')
        ok('the fired impairment journal itself stays DRAFT (awaiting its own WorkflowInstance) — a genuinely separate checker (LedgerService.approveJournalPosting) must still post it');
    else
        fail('impairment journal did not land in the expected DRAFT (awaiting posting approval) state', journal);
    await expectReject('a second write-off is refused once the account is already WRITTEN_OFF', () => writeOff.requestWriteOff({ counterpartyId: counterparty.id, writeOffAmountKobo: 10000000n, ledgerEntityCode: fundCode, investmentAccountCode: '1100', reason: 'Second attempt', requestedByUserId: portMgr.id }));
    const counterparty2 = await prisma.counterparty.create({ data: { legalName: `Smoke Write-Off Reject Ltd ${RUN}`, counterpartyType: 'CORPORATE' } });
    const request2 = await writeOff.requestWriteOff({
        counterpartyId: counterparty2.id, writeOffAmountKobo: 20000000n, ledgerEntityCode: fundCode, investmentAccountCode: '1100', reason: 'Disputed exposure', requestedByUserId: portMgr.id,
    });
    const rejected = await writeOff.decideWriteOff(request2.workflowInstanceId, finAdmin.id, 'REJECT', 'Needs further recovery effort first.');
    const counterparty2After = await prisma.counterparty.findUniqueOrThrow({ where: { id: counterparty2.id } });
    if (rejected.status === 'REJECTED' && counterparty2After.accountStatus === 'OPEN')
        ok('rejected write-off leaves the counterparty account OPEN, no journal fired');
    else
        fail('reject path left unexpected state', { rejected, counterparty2After });
    const counterpartyIds = [counterparty.id, counterparty2.id];
    await prisma.counterpartyWriteOffRequest.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    const postingWorkflow = await prisma.workflowInstance.findFirst({ where: { entityType: 'journal_entry', entityId: approved.postedJournalEntryId } });
    const wfIds = [request.workflowInstanceId, request2.workflowInstanceId, postingWorkflow?.id].filter((id) => !!id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.journalEntryLine.deleteMany({ where: { journalEntryId: approved.postedJournalEntryId } });
    await prisma.journalEntry.deleteMany({ where: { id: approved.postedJournalEntryId } });
    await prisma.counterparty.deleteMany({ where: { id: { in: counterpartyIds } } });
    await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: fundCode } });
    await prisma.ledgerEntity.delete({ where: { code: fundCode } });
    const userIds = [portMgr.id, finAdmin.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — counterparty write-off flow (invariant 51b-vi) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=counterparty-write-off.smoke.js.map