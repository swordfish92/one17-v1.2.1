"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("./delegation.service");
const delegation_types_1 = require("./delegation.types");
const workflow_service_1 = require("../workflow/workflow.service");
const workflow_types_1 = require("../workflow/workflow.types");
const kobo = (naira) => BigInt(naira) * 100n;
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        if (err instanceof delegation_types_1.DelegationAuthorizationError ||
            err instanceof workflow_types_1.WorkflowAuthorizationError) {
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
    const emailFor = (name) => `doa-${name}-${RUN}@one17.test`;
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
    await makeUser(emailFor('grantor'), 'MD_CEO');
    await makeUser(emailFor('approver'), 'MD_CEO');
    await makeUser(emailFor('delegate'), 'PORT_MGR');
    await makeUser(emailFor('dist-initiator'), 'PORT_MGR');
    await makeUser(emailFor('capped-grantor'), 'PORT_MGR');
    await expectReject('self-delegation rejected outright', () => delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: id(emailFor('grantor')),
        delegatedByUserId: id(emailFor('grantor')),
    }));
    await expectReject("capped grantor can't grant beyond their own authority (no boardInstrumentRef)", () => delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: id(emailFor('delegate')),
        delegatedByUserId: id(emailFor('capped-grantor')),
    }));
    const boardBackedGrant = await expectSucceed('same over-delegation succeeds WITH a boardInstrumentRef', () => delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: id(emailFor('delegate')),
        delegatedByUserId: id(emailFor('capped-grantor')),
        boardInstrumentRef: 'BOARD-RES-2026-014',
    }));
    if (boardBackedGrant && boardBackedGrant.status !== 'PENDING') {
        console.error('FAIL: board-backed grant should still start PENDING, not auto-active');
        process.exitCode = 1;
    }
    const grant = await expectSucceed('uncapped grantor requests delegation (no boardInstrumentRef needed)', () => delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: id(emailFor('delegate')),
        delegatedByUserId: id(emailFor('grantor')),
        reason: 'CEO travel — standing delegation per Roles & Workflows §6',
    }));
    if (grant) {
        const grantWorkflow = await expectSucceed('DELEGATION_GRANT workflow instance initiated', () => workflow.initiate({
            workflowTypeCode: 'DELEGATION_GRANT',
            entityType: 'delegation_of_authority',
            entityId: grant.id,
            initiatedByUserId: id(emailFor('grantor')),
            scenario: 'STANDARD',
        }));
        if (grantWorkflow) {
            await expectSucceed('grant linked to its workflow instance', () => delegation.attachWorkflowInstance(grant.id, grantWorkflow.id));
            const t1 = await expectSucceed('initiate ₦15M distribution while grant is still PENDING', () => workflow.initiate({
                workflowTypeCode: 'DISTRIBUTION',
                entityType: 'distribution',
                entityId: 'smoke-doa-pending',
                initiatedByUserId: id(emailFor('dist-initiator')),
                amountKobo: kobo(15_000_000),
            }));
            if (t1) {
                await expectReject('PENDING (unapproved) grant does not authorize approval — inert', () => workflow.approveNextStep(t1.id, id(emailFor('delegate'))));
            }
            await expectReject('grantor cannot approve their own DELEGATION_GRANT request', () => workflow.approveNextStep(grantWorkflow.id, id(emailFor('grantor'))));
            const grantApproved = await expectSucceed('second MD_CEO approves the DELEGATION_GRANT request', () => workflow.approveNextStep(grantWorkflow.id, id(emailFor('approver'))));
            if (grantApproved?.status === 'APPROVED') {
                const activated = await prisma.delegationOfAuthority.findUniqueOrThrow({
                    where: { id: grant.id },
                });
                if (activated.status === 'ACTIVE') {
                    console.log('OK: delegation activated automatically on DELEGATION_GRANT approval');
                }
                else {
                    console.error(`FAIL: expected delegation status ACTIVE after approval, got ${activated.status}`);
                    process.exitCode = 1;
                }
                const t2 = await expectSucceed('initiate a second ₦15M distribution', () => workflow.initiate({
                    workflowTypeCode: 'DISTRIBUTION',
                    entityType: 'distribution',
                    entityId: 'smoke-doa-active',
                    initiatedByUserId: id(emailFor('dist-initiator')),
                    amountKobo: kobo(15_000_000),
                }));
                if (t2) {
                    const approvedViaGrant = await expectSucceed('capped delegate now approves via the ACTIVE delegation', () => workflow.approveNextStep(t2.id, id(emailFor('delegate'))));
                    if (approvedViaGrant) {
                        const auditRow = await prisma.auditTrail.findFirst({
                            where: {
                                entityType: 'workflow_instance',
                                entityId: t2.id,
                                action: 'APPROVE',
                            },
                            orderBy: { occurredAt: 'desc' },
                        });
                        const viaDelegationId = auditRow?.after?.viaDelegationId;
                        console.log(viaDelegationId === grant.id
                            ? 'OK: audit trail records the approval as delegated'
                            : 'FAIL: viaDelegationId missing/mismatched');
                        if (viaDelegationId !== grant.id)
                            process.exitCode = 1;
                    }
                    await prisma.workflowStepApproval.deleteMany({
                        where: { workflowInstanceId: t2.id },
                    });
                    await prisma.workflowInstance.delete({ where: { id: t2.id } });
                }
                await expectSucceed('grantor revokes the (now active) delegation immediately', () => delegation.revoke(grant.id, id(emailFor('grantor')), 'Back from travel'));
                const t3 = await expectSucceed('initiate a third ₦15M distribution', () => workflow.initiate({
                    workflowTypeCode: 'DISTRIBUTION',
                    entityType: 'distribution',
                    entityId: 'smoke-doa-revoked',
                    initiatedByUserId: id(emailFor('dist-initiator')),
                    amountKobo: kobo(15_000_000),
                }));
                if (t3) {
                    await expectReject('revoked delegation no longer authorizes the delegate', () => workflow.approveNextStep(t3.id, id(emailFor('delegate'))));
                    await prisma.workflowStepApproval.deleteMany({
                        where: { workflowInstanceId: t3.id },
                    });
                    await prisma.workflowInstance.delete({ where: { id: t3.id } });
                }
            }
            await prisma.workflowStepApproval.deleteMany({
                where: {
                    workflowInstanceId: {
                        in: [t1?.id, grantWorkflow.id].filter((x) => !!x),
                    },
                },
            });
            await prisma.delegationOfAuthority
                .update({ where: { id: grant.id }, data: { workflowInstanceId: null } })
                .catch(() => undefined);
            if (t1)
                await prisma.workflowInstance
                    .delete({ where: { id: t1.id } })
                    .catch(() => undefined);
            await prisma.workflowInstance
                .delete({ where: { id: grantWorkflow.id } })
                .catch(() => undefined);
        }
    }
    const expiredGrant = await expectSucceed('grantor requests a delegation with effectiveTo already in the past', () => delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: id(emailFor('delegate')),
        delegatedByUserId: id(emailFor('grantor')),
        effectiveFrom: new Date(Date.now() - 48 * 60 * 60 * 1000),
        effectiveTo: new Date(Date.now() - 24 * 60 * 60 * 1000),
        reason: 'smoke test: expiry enforcement',
    }));
    if (expiredGrant) {
        const expiredGrantWorkflow = await workflow.initiate({
            workflowTypeCode: 'DELEGATION_GRANT',
            entityType: 'delegation_of_authority',
            entityId: expiredGrant.id,
            initiatedByUserId: id(emailFor('grantor')),
            scenario: 'STANDARD',
        });
        await delegation.attachWorkflowInstance(expiredGrant.id, expiredGrantWorkflow.id);
        await workflow.approveNextStep(expiredGrantWorkflow.id, id(emailFor('approver')));
        const activatedExpired = await prisma.delegationOfAuthority.findUniqueOrThrow({
            where: { id: expiredGrant.id },
        });
        console.log(activatedExpired.status === 'ACTIVE'
            ? 'OK: grant reaches ACTIVE status despite an already-past effectiveTo (status alone does not encode expiry)'
            : `FAIL: expected ACTIVE, got ${activatedExpired.status}`);
        const t4 = await expectSucceed('initiate a fourth ₦15M distribution (against the expired grant)', () => workflow.initiate({
            workflowTypeCode: 'DISTRIBUTION',
            entityType: 'distribution',
            entityId: 'smoke-doa-expired',
            initiatedByUserId: id(emailFor('dist-initiator')),
            amountKobo: kobo(15_000_000),
        }));
        if (t4) {
            await expectReject('UAT-AMD-10: an ACTIVE but time-expired grant does not authorize approval', () => workflow.approveNextStep(t4.id, id(emailFor('delegate'))));
            await prisma.workflowStepApproval.deleteMany({
                where: { workflowInstanceId: t4.id },
            });
            await prisma.workflowInstance.delete({ where: { id: t4.id } });
        }
        await prisma.delegationOfAuthority
            .update({
            where: { id: expiredGrant.id },
            data: { workflowInstanceId: null },
        })
            .catch(() => undefined);
        await prisma.workflowStepApproval.deleteMany({
            where: { workflowInstanceId: expiredGrantWorkflow.id },
        });
        await prisma.workflowInstance
            .delete({ where: { id: expiredGrantWorkflow.id } })
            .catch(() => undefined);
    }
    await prisma.delegationOfAuthority.deleteMany({
        where: { delegateUserId: id(emailFor('delegate')) },
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
//# sourceMappingURL=delegation.smoke.js.map