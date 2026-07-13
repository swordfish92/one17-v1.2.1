"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const rbac_service_1 = require("./rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const rbac_types_1 = require("./rbac.types");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        if (err instanceof rbac_types_1.SodConflictError) {
            console.log(`OK (rejected as expected): ${label} — ${err.message}`);
        }
        else {
            console.log(`OK (rejected as expected): ${label} — ${err.message.split('\n')[0]}`);
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
    const emails = [
        `smoke-superadmin-${RUN}@one17.test`,
        `smoke-ceo-portmgr-${RUN}@one17.test`,
    ];
    const users = new Map();
    for (const email of emails) {
        const user = await prisma.appUser.create({
            data: { email, displayName: email },
        });
        users.set(email, user);
    }
    await expectSucceed('SUPER_ADMIN alone', () => rbac.assignRole({
        userId: users.get(`smoke-superadmin-${RUN}@one17.test`).id,
        roleCode: 'SUPER_ADMIN',
    }));
    await expectReject('SUPER_ADMIN + MD_CEO (exclusive role)', () => rbac.assignRole({
        userId: users.get(`smoke-superadmin-${RUN}@one17.test`).id,
        roleCode: 'MD_CEO',
    }));
    await expectSucceed('MD_CEO alone', () => rbac.assignRole({
        userId: users.get(`smoke-ceo-portmgr-${RUN}@one17.test`).id,
        roleCode: 'MD_CEO',
    }));
    await expectSucceed('MD_CEO + PORT_MGR (not a forbidden combination under SRS)', () => rbac.assignRole({
        userId: users.get(`smoke-ceo-portmgr-${RUN}@one17.test`).id,
        roleCode: 'PORT_MGR',
    }));
    const smokeFn = await prisma.platformFunction.create({
        data: { code: `SMOKE_AMD09_FN_${RUN}`, description: 'smoke test function' },
    });
    await expectSucceed('AUDITOR may hold a VIEW permission (baseline, not blocked)', () => prisma.rolePermission.create({
        data: {
            roleCode: 'AUDITOR',
            functionCode: smokeFn.code,
            level: 'VIEW',
        },
    }));
    await expectReject('AMD-09 §4d: AUDITOR cannot be granted INITIATE (write) permission (DB trigger)', () => prisma.rolePermission.create({
        data: {
            roleCode: 'AUDITOR',
            functionCode: smokeFn.code,
            level: 'INITIATE',
        },
    }));
    await expectReject('SoD exception attempt: granting AUDITOR APPROVE rights is rejected (DB trigger)', () => prisma.rolePermission.create({
        data: {
            roleCode: 'AUDITOR',
            functionCode: smokeFn.code,
            level: 'APPROVE',
        },
    }));
    const runtimeRoleCode = `SMOKE_RUNTIME_ROLE_${RUN}`;
    await prisma.role.create({
        data: {
            code: runtimeRoleCode,
            name: 'Smoke Runtime Role',
            isExclusive: false,
        },
    });
    await prisma.rolePermission.create({
        data: {
            roleCode: runtimeRoleCode,
            functionCode: 'AUDIT_TRAIL_VIEW',
            level: 'VIEW',
        },
    });
    const runtimeRoleUser = await prisma.appUser.create({
        data: {
            email: `smoke-runtime-role-${RUN}@one17.test`,
            displayName: 'runtime role user',
        },
    });
    await rbac.assignRole({
        userId: runtimeRoleUser.id,
        roleCode: runtimeRoleCode,
    });
    const { eligible: runtimeRoleEligible } = await delegation.hasCapability(runtimeRoleUser.id, 'AUDIT_TRAIL_VIEW', 'VIEW');
    console.log(runtimeRoleEligible
        ? 'OK: capability engine recognizes a role created at runtime, zero code change'
        : 'FAIL: runtime-created role was not recognized by hasCapability');
    if (!runtimeRoleEligible)
        process.exitCode = 1;
    const superAdminA = await prisma.appUser.create({
        data: {
            email: `smoke-rbac-superadmin-a-${RUN}@one17.test`,
            displayName: 'super admin A',
        },
    });
    const superAdminB = await prisma.appUser.create({
        data: {
            email: `smoke-rbac-superadmin-b-${RUN}@one17.test`,
            displayName: 'super admin B',
        },
    });
    const rbacTarget = await prisma.appUser.create({
        data: {
            email: `smoke-rbac-target-${RUN}@one17.test`,
            displayName: 'rbac assignment target',
        },
    });
    await rbac.assignRole({ userId: superAdminA.id, roleCode: 'SUPER_ADMIN' });
    await rbac.assignRole({ userId: superAdminB.id, roleCode: 'SUPER_ADMIN' });
    const roleAssignmentWf = await expectSucceed('SUPER_ADMIN A proposes assigning PORT_OFF to the target user', () => rbac.proposeAssignRole({
        userId: rbacTarget.id,
        roleCode: 'PORT_OFF',
        assignedById: superAdminA.id,
    }));
    let roleAssignmentWfId;
    if (roleAssignmentWf) {
        roleAssignmentWfId = roleAssignmentWf.id;
        await expectReject('AMD-09 §4b: SUPER_ADMIN A cannot approve their own RBAC change (maker≠checker)', () => rbac.approveAssignRole(roleAssignmentWfId, superAdminA.id, {
            userId: rbacTarget.id,
            roleCode: 'PORT_OFF',
        }));
        const beforeApproval = await prisma.userRole.findFirst({
            where: { userId: rbacTarget.id, roleCode: 'PORT_OFF' },
        });
        console.log(beforeApproval === null
            ? 'OK: role assignment is NOT applied merely by proposing it — still PENDING approval'
            : 'FAIL: role was assigned before the workflow was approved');
        if (beforeApproval !== null)
            process.exitCode = 1;
        await expectSucceed('SUPER_ADMIN B (a different approver) approves the RBAC change', () => rbac.approveAssignRole(roleAssignmentWfId, superAdminB.id, {
            userId: rbacTarget.id,
            roleCode: 'PORT_OFF',
        }));
        const afterApproval = await prisma.userRole.findFirst({
            where: { userId: rbacTarget.id, roleCode: 'PORT_OFF' },
        });
        console.log(afterApproval !== null
            ? 'OK: role assignment took effect only after the second approval'
            : 'FAIL: role was not assigned even after approval');
        if (afterApproval === null)
            process.exitCode = 1;
    }
    const secondWf = await expectSucceed('SUPER_ADMIN A proposes assigning FIN_ADMIN to the same target user', () => rbac.proposeAssignRole({ userId: rbacTarget.id, roleCode: 'FIN_ADMIN', assignedById: superAdminA.id }));
    let secondWfId;
    if (secondWf) {
        secondWfId = secondWf.id;
        const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, rbac, {}, {}, {}, {}, {}, {}, {}, {});
        await workflowInbox.approve(secondWfId, superAdminB.id);
        const afterInboxApproval = await prisma.userRole.findFirst({ where: { userId: rbacTarget.id, roleCode: 'FIN_ADMIN' } });
        if (afterInboxApproval !== null) {
            console.log("OK: WorkflowInboxService.approve() dispatches 'USER_ROLE_ASSIGNMENT' to approveAssignRole -> user_role created via the standing Workflow Inbox, not just rbac.approveAssignRole() called directly");
        }
        else {
            console.error('FAIL: USER_ROLE_ASSIGNMENT dispatch did not create the user_role row');
            process.exitCode = 1;
        }
    }
    const staffEmail = `smoke-newstaff-${Date.now()}@one17.test`;
    const createdStaff = await expectSucceed('createStaffUser creates a real AppUser row', () => rbac.createStaffUser({ email: staffEmail, displayName: 'Smoke New Staff', createdByUserId: superAdminA.id }));
    if (createdStaff) {
        const persisted = await prisma.appUser.findUnique({ where: { id: createdStaff.id } });
        if (persisted && persisted.email === staffEmail && persisted.status === 'ACTIVE') {
            console.log('OK: created staff user is persisted, ACTIVE, matches the requested email');
        }
        else {
            console.error('FAIL: created staff user not persisted as expected');
            process.exitCode = 1;
        }
        const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'app_user', entityId: createdStaff.id, action: 'CREATE' } });
        if (auditRow) {
            console.log('OK: staff creation is audit-logged (entityType app_user, action CREATE)');
        }
        else {
            console.error('FAIL: staff creation missing audit_trail row');
            process.exitCode = 1;
        }
    }
    await expectReject('createStaffUser refuses a duplicate email', () => rbac.createStaffUser({ email: staffEmail, displayName: 'Duplicate Attempt', createdByUserId: superAdminA.id }));
    await prisma.rolePermission.deleteMany({
        where: { functionCode: smokeFn.code },
    });
    await prisma.platformFunction.delete({ where: { code: smokeFn.code } });
    await prisma.rolePermission.deleteMany({
        where: { roleCode: runtimeRoleCode },
    });
    await prisma.userRole.deleteMany({ where: { roleCode: runtimeRoleCode } });
    await prisma.role.delete({ where: { code: runtimeRoleCode } });
    if (roleAssignmentWfId) {
        await prisma.workflowStepApproval.deleteMany({
            where: { workflowInstanceId: roleAssignmentWfId },
        });
        await prisma.workflowInstance.delete({ where: { id: roleAssignmentWfId } });
    }
    if (secondWfId) {
        await prisma.workflowStepApproval.deleteMany({
            where: { workflowInstanceId: secondWfId },
        });
        await prisma.workflowInstance.delete({ where: { id: secondWfId } });
    }
    const userIds = [
        ...[...users.values()].map((u) => u.id),
        runtimeRoleUser.id,
        superAdminA.id,
        superAdminB.id,
        rbacTarget.id,
        ...(createdStaff ? [createdStaff.id] : []),
    ];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=rbac.smoke.js.map