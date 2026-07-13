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
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const workflowTypeCode = `SMOKE_CHAIN_${RUN}`;
    await prisma.workflowType.create({ data: { code: workflowTypeCode, description: 'Invariant 54(e)(v) substrate smoke fixture' } });
    const initiatorUser = await prisma.appUser.create({ data: { email: `chainver-initiator-${RUN}@one17.test`, displayName: 'initiator' } });
    await rbac.assignRole({ userId: initiatorUser.id, roleCode: 'PORT_OFF' });
    const v1 = await prisma.approvalChainVersion.create({
        data: { workflowTypeCode, version: 1, status: 'ACTIVE', effectiveFrom: new Date() },
    });
    const v1Rule = await prisma.approvalRule.create({
        data: {
            workflowTypeCode,
            chainVersionId: v1.id,
            minAmountKobo: 0n,
            initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
            description: 'v1 rule',
            steps: { create: [{ stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: false }] },
        },
    });
    const instanceUnderV1 = await workflow.initiate({
        workflowTypeCode,
        entityType: 'smoke_chain_entity',
        entityId: `v1-${RUN}`,
        amountKobo: 500n,
        initiatedByUserId: initiatorUser.id,
    });
    if (instanceUnderV1.approvalRuleId === v1Rule.id) {
        ok('a fresh instance resolves against chain v1 (the only ACTIVE version so far)');
    }
    else {
        fail('instance did not resolve against v1Rule', instanceUnderV1);
    }
    const v2 = await prisma.approvalChainVersion.create({
        data: { workflowTypeCode, version: 2, status: 'DRAFT' },
    });
    const v2Rule = await prisma.approvalRule.create({
        data: {
            workflowTypeCode,
            chainVersionId: v2.id,
            minAmountKobo: 0n,
            initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
            description: 'v2 rule (DRAFT)',
            steps: { create: [{ stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: false, isLockedSeat: true, lockedSeatRationale: 'smoke fixture — invariant 54(e)(ii) locked-seat field proof' }] },
        },
    });
    const instanceStillUnderV1 = await workflow.initiate({
        workflowTypeCode,
        entityType: 'smoke_chain_entity',
        entityId: `still-v1-${RUN}`,
        amountKobo: 500n,
        initiatedByUserId: initiatorUser.id,
    });
    if (instanceStillUnderV1.approvalRuleId === v1Rule.id) {
        ok('a DRAFT v2 chain is invisible to live initiation — new instances still resolve against ACTIVE v1');
    }
    else {
        fail('a DRAFT chain leaked into live workflow resolution', instanceStillUnderV1);
    }
    await prisma.$transaction([
        prisma.approvalChainVersion.updateMany({ where: { workflowTypeCode, status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
        prisma.approvalChainVersion.update({ where: { id: v2.id }, data: { status: 'ACTIVE', effectiveFrom: new Date() } }),
    ]);
    const instanceUnderV2 = await workflow.initiate({
        workflowTypeCode,
        entityType: 'smoke_chain_entity',
        entityId: `v2-${RUN}`,
        amountKobo: 500n,
        initiatedByUserId: initiatorUser.id,
    });
    if (instanceUnderV2.approvalRuleId === v2Rule.id) {
        ok('after activation, a fresh instance resolves against the new ACTIVE v2 chain');
    }
    else {
        fail('instance did not switch over to v2Rule after activation', instanceUnderV2);
    }
    const rehydratedV1Instance = await prisma.workflowInstance.findUniqueOrThrow({ where: { id: instanceUnderV1.id } });
    if (rehydratedV1Instance.approvalRuleId === v1Rule.id) {
        ok('an instance initiated before the switchover stays pinned to its original (now-SUPERSEDED-chain) rule row — in-flight/historical pinning holds');
    }
    else {
        fail('a historical instance\'s approvalRuleId drifted after its chain was superseded', rehydratedV1Instance);
    }
    const v1AfterSupersede = await prisma.approvalChainVersion.findUniqueOrThrow({ where: { id: v1.id } });
    if (v1AfterSupersede.status === 'SUPERSEDED') {
        ok('the prior ACTIVE chain version flips to SUPERSEDED on activation, retained (not deleted) for audit');
    }
    else {
        fail('v1 chain version did not flip to SUPERSEDED', v1AfterSupersede);
    }
    const v2StepAfter = await prisma.approvalRuleStep.findFirstOrThrow({ where: { approvalRuleId: v2Rule.id } });
    if (v2StepAfter.isLockedSeat === true && v2StepAfter.lockedSeatRationale?.includes('invariant 54(e)(ii)')) {
        ok('ApprovalRuleStep.isLockedSeat + lockedSeatRationale persist correctly (invariant 54(e)(ii) substrate)');
    }
    else {
        fail('locked-seat fields did not persist as expected', v2StepAfter);
    }
    const defaultStep = await prisma.approvalRuleStep.findFirstOrThrow({ where: { approvalRuleId: v1Rule.id } });
    if (defaultStep.isLockedSeat === false && defaultStep.lockedSeatRationale === null) {
        ok('isLockedSeat defaults false / lockedSeatRationale defaults null on an ordinary (non-charter-mandated) step');
    }
    else {
        fail('locked-seat defaults were not false/null as expected', defaultStep);
    }
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstance: { workflowTypeCode } } });
    await prisma.workflowInstance.deleteMany({ where: { workflowTypeCode } });
    await prisma.approvalRuleStep.deleteMany({ where: { approvalRuleId: { in: [v1Rule.id, v2Rule.id] } } });
    await prisma.approvalRule.deleteMany({ where: { id: { in: [v1Rule.id, v2Rule.id] } } });
    await prisma.approvalChainVersion.deleteMany({ where: { workflowTypeCode } });
    await prisma.workflowType.delete({ where: { code: workflowTypeCode } });
    await prisma.userRole.deleteMany({ where: { userId: initiatorUser.id } });
    await prisma.appUser.delete({ where: { id: initiatorUser.id } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Approval chain versioning substrate (invariant 54e-v) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=approval-chain-versioning.smoke.js.map