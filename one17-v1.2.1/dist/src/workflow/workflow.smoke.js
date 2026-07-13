"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("./workflow.service");
const workflow_types_1 = require("./workflow.types");
const kobo = (naira) => BigInt(naira) * 100n;
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        if (err instanceof workflow_types_1.WorkflowAuthorizationError) {
            console.log(`OK (rejected as expected): ${label} — ${err.message}`);
        }
        else {
            console.error(`FAIL (wrong error type): ${label}`, err);
            process.exitCode = 1;
        }
    }
}
async function expectSucceed(label, fn) {
    try {
        const result = await fn();
        console.log(`OK (succeeded as expected): ${label}`);
        return result;
    }
    catch (err) {
        console.error(`FAIL (expected success): ${label}`, err);
        process.exitCode = 1;
        return undefined;
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const RUN = Date.now();
    const emailFor = (name) => `wf-${name}-${RUN}@one17.test`;
    const users = new Map();
    const makeUser = async (email, roleCode) => {
        const user = await prisma.appUser.create({
            data: { email, displayName: email },
        });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(email, user);
        return user;
    };
    const id = (email) => users.get(email).id;
    await makeUser(emailFor('portoff'), 'PORT_OFF');
    await makeUser(emailFor('portmgr-approver'), 'PORT_MGR');
    await makeUser(emailFor('portmgr-initiator'), 'PORT_MGR');
    await makeUser(emailFor('mdceo'), 'MD_CEO');
    await makeUser(emailFor('shariah'), 'SHARIAH_REV');
    await makeUser(emailFor('finadmin'), 'FIN_ADMIN');
    await makeUser(emailFor('compliance'), 'COMPLIANCE');
    const t1 = await expectSucceed('initiate <₦1M distribution (PORT_OFF)', () => workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: 'smoke-t1',
        initiatedByUserId: id(emailFor('portoff')),
        amountKobo: kobo(500_000),
    }));
    if (t1) {
        await expectReject('same user (initiator) approves own <₦1M distribution', () => workflow.approveNextStep(t1.id, id(emailFor('portoff'))));
        const approved1 = await expectSucceed('PORT_MGR approves <₦1M distribution (maker≠checker satisfied)', () => workflow.approveNextStep(t1.id, id(emailFor('portmgr-approver'))));
        if (approved1?.status === 'APPROVED') {
            await expectSucceed('execute() after APPROVED', () => workflow.execute(t1.id, id(emailFor('mdceo'))));
        }
        else {
            console.error('FAIL: tier-1 instance not APPROVED after single required step');
            process.exitCode = 1;
        }
    }
    const t2 = await expectSucceed('initiate ₦5M distribution (PORT_MGR)', () => workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: 'smoke-t2',
        initiatedByUserId: id(emailFor('portmgr-initiator')),
        amountKobo: kobo(5_000_000),
    }));
    if (t2) {
        await expectReject('capped PORT_MGR cannot approve ₦5M (exceeds ₦1M limit)', () => workflow.approveNextStep(t2.id, id(emailFor('portmgr-approver'))));
        await expectSucceed('MD_CEO (uncapped) approves ₦5M distribution', () => workflow.approveNextStep(t2.id, id(emailFor('mdceo'))));
    }
    const t3 = await expectSucceed('initiate ₦15M distribution (PORT_MGR)', () => workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: 'smoke-t3',
        initiatedByUserId: id(emailFor('portmgr-initiator')),
        amountKobo: kobo(15_000_000),
    }));
    if (t3) {
        await expectSucceed('MD_CEO approves step 1 (financial) of ₦15M distribution', () => workflow.approveNextStep(t3.id, id(emailFor('mdceo'))));
        await expectReject('MD_CEO cannot also satisfy step 2 (lacks SHARIAH_SIGNOFF)', () => workflow.approveNextStep(t3.id, id(emailFor('mdceo'))));
        const approved3 = await expectSucceed('SHARIAH_REV approves step 2 of ₦15M distribution', () => workflow.approveNextStep(t3.id, id(emailFor('shariah'))));
        if (approved3?.status !== 'APPROVED') {
            console.error('FAIL: tier-3 instance not APPROVED after both steps');
            process.exitCode = 1;
        }
    }
    const loss = await expectSucceed('initiate LOSS scenario distribution (PORT_MGR)', () => workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: 'smoke-loss',
        initiatedByUserId: id(emailFor('portmgr-initiator')),
        scenario: 'LOSS',
    }));
    if (loss) {
        await expectReject('capped PORT_MGR cannot approve LOSS scenario (uncapped-only)', () => workflow.approveNextStep(loss.id, id(emailFor('portmgr-approver'))));
        await expectSucceed('MD_CEO (uncapped) approves LOSS scenario step 1', () => workflow.approveNextStep(loss.id, id(emailFor('mdceo'))));
        await expectSucceed('SHARIAH_REV approves LOSS scenario step 2', () => workflow.approveNextStep(loss.id, id(emailFor('shariah'))));
    }
    const penalty = await expectSucceed('initiate PENALTY_TO_CHARITY (FIN_ADMIN)', () => workflow.initiate({
        workflowTypeCode: 'DISTRIBUTION',
        entityType: 'distribution',
        entityId: 'smoke-penalty',
        initiatedByUserId: id(emailFor('finadmin')),
        scenario: 'PENALTY_TO_CHARITY',
    }));
    if (penalty) {
        await expectSucceed('COMPLIANCE approves PENALTY_TO_CHARITY step 1', () => workflow.approveNextStep(penalty.id, id(emailFor('compliance'))));
        await expectSucceed('SHARIAH_REV approves PENALTY_TO_CHARITY step 2', () => workflow.approveNextStep(penalty.id, id(emailFor('shariah'))));
    }
    const instanceIds = [t1, t2, t3, loss, penalty]
        .filter((x) => !!x)
        .map((i) => i.id);
    await prisma.workflowStepApproval.deleteMany({
        where: { workflowInstanceId: { in: instanceIds } },
    });
    await prisma.workflowInstance.deleteMany({
        where: { id: { in: instanceIds } },
    });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=workflow.smoke.js.map