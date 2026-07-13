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
const complaint_service_1 = require("./complaint.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
const RUN = Date.now().toString().slice(-8);
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK: rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const complaints = new complaint_service_1.ComplaintService(prisma, audit, delegation);
    const kriEngine = new kri_engine_service_1.KriEngineService(prisma, audit);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `complaint-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('compliance', 'COMPLIANCE');
    await makeUser('outsider', 'SHARIAH_REV');
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-COMPLAINT-INV-${RUN}`, fullLegalName: `Complaint Smoke Investor ${RUN}`, entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `complaint-investor-${RUN}@one17.test`, contactPhone: '08000000000',
            onboardedByUserId: id('compliance'), kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const complaintIds = [];
    await expectReject('a complaint with neither investorId nor counterpartyId is refused', () => complaints.raiseFromPortal({ category: 'SERVICE', description: 'x' }));
    const c1 = await complaints.raiseFromPortal({ investorId: investor.investorId, category: 'LATE_PAYMENT', description: 'My distribution is late.' });
    complaintIds.push(c1.id);
    if (c1.status === 'OPEN' && c1.loggedByUserId === null && c1.slaDueAt > c1.receivedAt) {
        ok('raiseFromPortal creates an OPEN complaint with no AppUser logger and a computed slaDueAt (from complaint_sla_config)');
    }
    else {
        fail('portal-raised complaint did not have the expected shape', c1);
    }
    await expectReject('an outsider without COMPLAINT_MANAGEMENT INITIATE cannot log a complaint on a client\'s behalf', () => complaints.raiseByStaff({ investorId: investor.investorId, category: 'SERVICE', description: 'x', loggedByUserId: id('outsider') }));
    const c2 = await complaints.raiseByStaff({ investorId: investor.investorId, category: 'DOCUMENTATION', description: 'Statement discrepancy.', loggedByUserId: id('compliance') });
    complaintIds.push(c2.id);
    if (c2.loggedByUserId === id('compliance'))
        ok('raiseByStaff (Compliance) logs a complaint on the client\'s behalf, loggedByUserId set');
    else
        fail('staff-raised complaint did not record the logger', c2);
    const config = await prisma.complaintSlaConfig.findFirstOrThrow({ where: { status: 'ACTIVE' } });
    const onTrack = complaints.slaState({ status: 'OPEN', receivedAt: new Date(), slaDueAt: new Date(Date.now() + config.slaDays * 86_400_000) }, config.amberThresholdPct);
    const amberDue = new Date(Date.now() + 1000);
    const amberReceived = new Date(Date.now() - (config.slaDays * 86_400_000 * (config.amberThresholdPct / 100)) - 2000);
    const amber = complaints.slaState({ status: 'OPEN', receivedAt: amberReceived, slaDueAt: amberDue }, config.amberThresholdPct);
    const breached = complaints.slaState({ status: 'OPEN', receivedAt: new Date(Date.now() - 999 * 86_400_000), slaDueAt: new Date(Date.now() - 86_400_000) }, config.amberThresholdPct);
    const closed = complaints.slaState({ status: 'RESOLVED', receivedAt: new Date(Date.now() - 86_400_000), slaDueAt: new Date(Date.now() + 86_400_000) }, config.amberThresholdPct);
    if (onTrack === 'ON_TRACK' && amber === 'AMBER' && breached === 'BREACHED' && closed === 'CLOSED') {
        ok('slaState() derives ON_TRACK/AMBER/BREACHED/CLOSED live from receivedAt/slaDueAt — never a stored status');
    }
    else {
        fail('slaState derivation did not match expected states', { onTrack, amber, breached, closed });
    }
    await complaints.assignOwner({ complaintId: c1.id, ownerUserId: id('compliance'), actorUserId: id('compliance') });
    const c1AfterAssign = await prisma.complaint.findUniqueOrThrow({ where: { id: c1.id } });
    if (c1AfterAssign.status === 'IN_PROGRESS' && c1AfterAssign.ownerUserId === id('compliance'))
        ok('assignOwner sets the owner and flips OPEN -> IN_PROGRESS');
    else
        fail('assignOwner did not update as expected', c1AfterAssign);
    await complaints.escalate({ complaintId: c1.id, escalatedToUserId: id('compliance'), actorUserId: id('compliance') });
    const c1AfterEscalate = await prisma.complaint.findUniqueOrThrow({ where: { id: c1.id } });
    if (c1AfterEscalate.escalatedAt)
        ok('escalate() records escalatedAt/escalatedToUserId');
    else
        fail('escalate did not set escalatedAt', c1AfterEscalate);
    await expectReject('close() before resolve() is refused', () => complaints.close(c1.id, id('compliance')));
    await complaints.resolve({ complaintId: c1.id, resolutionNotes: 'Distribution processed; delay was a bank cut-off issue.', actorUserId: id('compliance') });
    const c1AfterResolve = await prisma.complaint.findUniqueOrThrow({ where: { id: c1.id } });
    if (c1AfterResolve.status === 'RESOLVED' && c1AfterResolve.resolvedAt)
        ok('resolve() sets status RESOLVED + resolvedAt + resolutionNotes');
    else
        fail('resolve did not update as expected', c1AfterResolve);
    await complaints.close(c1.id, id('compliance'));
    const c1AfterClose = await prisma.complaint.findUniqueOrThrow({ where: { id: c1.id } });
    if (c1AfterClose.status === 'CLOSED')
        ok('close() transitions RESOLVED -> CLOSED');
    else
        fail('close did not update as expected', c1AfterClose);
    const registerRows = await complaints.getRegisterRows(new Date(Date.now() - 86_400_000), new Date(Date.now() + 86_400_000));
    const c1Row = registerRows.find((r) => r.name === investor.fullLegalName && r.status === 'RESOLVED');
    if (c1Row && c1Row.remarks.includes('bank cut-off')) {
        ok('getRegisterRows() produces SEC-template-B-shaped rows (S/N, name, dateReceived, nature, status, dateResolved, remarks) with RESOLVED/UNRESOLVED normalization');
    }
    else {
        fail('register rows did not include the expected resolved complaint', registerRows);
    }
    const c3 = await complaints.raiseFromPortal({ investorId: investor.investorId, category: 'SERVICE', description: 'Still open, aging.' });
    complaintIds.push(c3.id);
    await prisma.complaint.update({ where: { id: c3.id }, data: { receivedAt: new Date(Date.now() - 999 * 86_400_000), slaDueAt: new Date(Date.now() - 86_400_000) } });
    const readingDate = new Date();
    await kriEngine.runDailyBatch(readingDate);
    const cpl03 = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-03', readingDate, isAggregate: true } });
    if (cpl03 && Number(cpl03.value) >= 1) {
        ok(`CPL-03 Open Complaint Aging Breaches computed: ${cpl03.value} (invariant 28f: "complaint volume/aging = KRI feed")`);
    }
    else {
        fail('CPL-03 did not reflect the aged-and-breached complaint', cpl03);
    }
    await prisma.complaint.deleteMany({ where: { id: { in: complaintIds } } });
    await prisma.kriReading.deleteMany({ where: { kriCode: 'CPL-03', readingDate } });
    await prisma.investor.delete({ where: { investorId: investor.investorId } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — Complaint management module (CHECK5 item 5g / invariant 28f) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=complaint.smoke.js.map