"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const wm_service_1 = require("../src/wm/wm.service");
const notification_service_1 = require("../src/notification/notification.service");
const zakat_service_1 = require("../src/zakat/zakat.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const notification = new notification_service_1.NotificationService(prisma);
    const zakat = new zakat_service_1.ZakatService(prisma, audit, delegation, workflow, wm, notification);
    const investor = await prisma.investor.findFirstOrThrow({ where: { contactEmail: 'browsertest-wm-holding-investor@one17.test' } });
    const advisor = await prisma.appUser.findFirstOrThrow({ where: { email: 'browsertest-wm-advisor@one17.test' } });
    let shariahReviewer = await prisma.appUser.findFirst({ where: { email: 'browsertest-shariah-reviewer@one17.test' } });
    if (!shariahReviewer) {
        shariahReviewer = await prisma.appUser.create({ data: { email: 'browsertest-shariah-reviewer@one17.test', displayName: 'browsertest-shariah-reviewer' } });
        await rbac.assignRole({ userId: shariahReviewer.id, roleCode: 'SHARIAH_REV' });
        const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
        await authService.setPassword(shariahReviewer.id, 'BrowserTest1!');
    }
    const existingSub = await prisma.zakatClientSubscription.findUnique({ where: { investorId: investor.investorId } });
    if (existingSub) {
        console.log(`Zakat fixture already exists for investorId ${investor.investorId}, subscription isActive=${existingSub.isActive}.`);
        const runs = await prisma.zakatAssessmentRun.findMany({ where: { investorId: investor.investorId } });
        console.log(`${runs.length} existing assessment run(s): ${runs.map((r) => `${r.id} (${r.status})`).join(', ')}`);
        await prisma.$disconnect();
        return;
    }
    await zakat.updateNisabConfig(85, 1500000n, advisor.id);
    await zakat.activateSubscription(investor.investorId, advisor.id);
    await zakat.electRateBasis(investor.investorId, 'GREGORIAN');
    const nisabStatus = await zakat.isNisabBreached(investor.investorId);
    console.log(`Nisab status for ${investor.investorId}: breached=${nisabStatus.breached}, wealth=${nisabStatus.totalWealthKobo}, threshold=${nisabStatus.nisabThresholdKobo}`);
    const run = await zakat.createAssessmentSandbox({
        investorId: investor.investorId,
        assessmentDateGregorian: new Date('2026-07-06'),
        assessmentDateHijri: '21 Muharram 1448',
        createdByUserId: advisor.id,
    });
    await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'CASH_BANK', description: 'Cash in hand + bank balances', amountKobo: 676109614n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
    await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'GOLD_SILVER', description: 'Gold jewelry + coins', amountKobo: 50000000n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
    await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'FIXED_ASSET', description: 'Personal residence (Lagos)', amountKobo: 30000000000n, zakatability: 'NON_ZAKATABLE', declaredByUserId: advisor.id });
    await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'RECEIVABLE', description: 'Money owed by business partner', amountKobo: 1700000000n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
    await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'LIABILITY', description: 'Short-term payables due within 1 year', amountKobo: 2150000000n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
    await zakat.computeAssessment(run.id);
    console.log(`Fixture created.`);
    console.log(`Investor: ${investor.fullLegalName} (${investor.investorId})`);
    console.log(`Assessment run: ${run.id} — DRAFT, awaiting client agreement (log in as the investor portal user to Agree)`);
    console.log(`Shariah reviewer ops login: browsertest-shariah-reviewer@one17.test / BrowserTest1!`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=browsertest-zakat-fixture.js.map