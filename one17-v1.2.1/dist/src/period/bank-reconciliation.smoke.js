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
const period_service_1 = require("./period.service");
const bank_reconciliation_service_1 = require("./bank-reconciliation.service");
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
    const bankReconciliation = new bank_reconciliation_service_1.BankReconciliationService(prisma, audit, delegation);
    const period = new period_service_1.PeriodService(prisma, audit, delegation, workflow, bankReconciliation);
    const finAdmin = await prisma.appUser.create({ data: { email: `br-finadmin-${RUN}@one17.test`, displayName: 'br-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const outsider = await prisma.appUser.create({ data: { email: `br-outsider-${RUN}@one17.test`, displayName: 'br-outsider' } });
    const fundCode = `SMOKE-BR-FUND-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke BR Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const cashAccount = await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
    const capitalAccount = await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
    const journal = await prisma.journalEntry.create({
        data: { ledgerEntityCode: fundCode, journalReference: `JE-BR-${RUN}`, entryDate: new Date('2026-06-15'), description: 'Smoke deposit', createdByUserId: finAdmin.id },
    });
    const journalLine = await prisma.journalEntryLine.create({ data: { journalEntryId: journal.id, accountId: cashAccount.id, debitKobo: 50000000n } });
    await prisma.journalEntryLine.create({ data: { journalEntryId: journal.id, accountId: capitalAccount.id, creditKobo: 50000000n } });
    await expectReject('outsider cannot upload bank statement lines', () => bankReconciliation.uploadStatementLines([{ ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-15'), description: 'Deposit', amountKobo: 50000000n }], outsider.id));
    const [line1, line2] = await bankReconciliation.uploadStatementLines([
        { ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-15'), description: 'Deposit', amountKobo: 50000000n },
        { ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-20'), description: 'Unexplained credit', amountKobo: 7500000n },
    ], finAdmin.id);
    if (line1.status === 'UNMATCHED' && line2.status === 'UNMATCHED')
        ok('uploaded statement lines start UNMATCHED');
    else
        fail('uploaded lines did not start UNMATCHED', { line1, line2 });
    const juneperiod = await period.openPeriod({ ledgerEntityCode: fundCode, periodStart: new Date('2026-06-01'), periodEnd: new Date('2026-06-30'), openedByUserId: finAdmin.id });
    await expectReject('requestPeriodClose refuses while unmatched statement lines exist in the period window (hard gate, not advisory)', () => period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id }));
    const matched = await bankReconciliation.matchLine(line1.id, journalLine.id, finAdmin.id);
    if (matched.status === 'MATCHED' && matched.matchedJournalEntryLineId === journalLine.id)
        ok('matchLine links the statement line to a real JournalEntryLine and flips it MATCHED');
    else
        fail('matchLine did not behave as expected', matched);
    await expectReject('requestPeriodClose still refused with one statement line (line2) still unmatched', () => period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id }));
    const journal2 = await prisma.journalEntry.create({ data: { ledgerEntityCode: fundCode, journalReference: `JE-BR2-${RUN}`, entryDate: new Date('2026-06-20'), description: 'Smoke unexplained credit', createdByUserId: finAdmin.id } });
    const journalLine2 = await prisma.journalEntryLine.create({ data: { journalEntryId: journal2.id, accountId: cashAccount.id, debitKobo: 7500000n } });
    await prisma.journalEntryLine.create({ data: { journalEntryId: journal2.id, accountId: capitalAccount.id, creditKobo: 7500000n } });
    await bankReconciliation.matchLine(line2.id, journalLine2.id, finAdmin.id);
    const summary = await bankReconciliation.getSummary(fundCode, new Date('2026-06-01'), new Date('2026-06-30'));
    if (summary.matched === 2 && summary.unmatched === 0 && summary.canClose)
        ok('getSummary reports both lines matched and canClose=true once the window is fully reconciled');
    else
        fail('getSummary did not report full reconciliation as expected', summary);
    const closeRequest = await period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id });
    if (closeRequest.id)
        ok('requestPeriodClose succeeds once every statement line in the window is MATCHED');
    else
        fail('requestPeriodClose did not succeed as expected', closeRequest);
    const otherFundCode = `SMOKE-BR-OTHER-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: otherFundCode, name: 'Smoke BR Other Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const [line3] = await bankReconciliation.uploadStatementLines([{ ledgerEntityCode: otherFundCode, glAccountCode: '1000', statementDate: new Date('2026-06-22'), description: 'Cross-entity', amountKobo: 1000000n }], finAdmin.id);
    await expectReject('matching a statement line to a journal entry line in a DIFFERENT ledger entity is refused', () => bankReconciliation.matchLine(line3.id, journalLine.id, finAdmin.id));
    await prisma.bankStatementLine.deleteMany({ where: { ledgerEntityCode: { in: [fundCode, otherFundCode] } } });
    const wfIds = [closeRequest.id].filter((id) => !!id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.accountingPeriod.update({ where: { id: juneperiod.id }, data: { closeWorkflowInstanceId: null } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.accountingPeriod.delete({ where: { id: juneperiod.id } });
    await prisma.journalEntryLine.deleteMany({ where: { journalEntryId: { in: [journal.id, journal2.id] } } });
    await prisma.journalEntry.deleteMany({ where: { id: { in: [journal.id, journal2.id] } } });
    await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: { in: [fundCode, otherFundCode] } } });
    await prisma.ledgerEntity.deleteMany({ where: { code: { in: [fundCode, otherFundCode] } } });
    const userIds = [finAdmin.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — bank reconciliation + period-close hard gate (invariant 51b-ix) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=bank-reconciliation.smoke.js.map