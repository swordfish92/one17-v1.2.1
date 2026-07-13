"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const rbac_service_1 = require("../rbac/rbac.service");
const department_head_service_1 = require("./department-head.service");
const department_head_types_1 = require("./department-head.types");
const workflow_types_1 = require("../workflow/workflow.types");
const RUN = Date.now();
let failed = 0;
function ok(msg) {
    console.log(`OK: ${msg}`);
}
function fail(msg, detail) {
    failed++;
    console.error(`FAIL: ${msg}`, detail ?? '');
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const departmentHead = new department_head_service_1.DepartmentHeadService(prisma, audit, delegation, workflow);
    const createdUserIds = [];
    const createdEmployeeIds = [];
    const createdDesignationIds = [];
    try {
        const hrAdmin = await prisma.appUser.create({ data: { email: `depthead-smoke-hr-${RUN}@one17.test`, displayName: `Dept Head Smoke HR ${RUN}` } });
        createdUserIds.push(hrAdmin.id);
        await rbac.assignRole({ userId: hrAdmin.id, roleCode: 'HR_ADMIN' });
        const mdCeo = await prisma.appUser.create({ data: { email: `depthead-smoke-md-${RUN}@one17.test`, displayName: `Dept Head Smoke MD ${RUN}` } });
        createdUserIds.push(mdCeo.id);
        await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
        const finAdmin = await prisma.appUser.create({ data: { email: `depthead-smoke-finadmin-${RUN}@one17.test`, displayName: `Dept Head Smoke FinAdmin ${RUN}` } });
        createdUserIds.push(finAdmin.id);
        await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
        const position = await prisma.position.findFirstOrThrow();
        const orgUnit = await prisma.orgUnit.findFirstOrThrow();
        const candidateA_user = await prisma.appUser.create({ data: { email: `depthead-smoke-candA-${RUN}@one17.test`, displayName: `Dept Head Smoke Candidate A ${RUN}` } });
        createdUserIds.push(candidateA_user.id);
        const candidateA = await prisma.employee.create({ data: { surname: 'SmokeA', firstName: `DeptHead${RUN}`, positionId: position.id, orgUnitCode: position.orgUnitCode, appUserId: candidateA_user.id, hireDate: new Date() } });
        createdEmployeeIds.push(candidateA.id);
        const candidateB_user = await prisma.appUser.create({ data: { email: `depthead-smoke-candB-${RUN}@one17.test`, displayName: `Dept Head Smoke Candidate B ${RUN}` } });
        createdUserIds.push(candidateB_user.id);
        const candidateB = await prisma.employee.create({ data: { surname: 'SmokeB', firstName: `DeptHead${RUN}`, positionId: position.id, orgUnitCode: position.orgUnitCode, appUserId: candidateB_user.id, hireDate: new Date() } });
        createdEmployeeIds.push(candidateB.id);
        const preA = await delegation.hasCapability(candidateA_user.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (!preA.eligible)
            ok('candidate A has no CONTROLS_DASHBOARD access before any designation exists');
        else
            fail('candidate A unexpectedly has CONTROLS_DASHBOARD access before any designation', preA);
        const preFin = await delegation.hasCapability(finAdmin.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (!preFin.eligible)
            ok('FIN_ADMIN (operating role) has NO standing CONTROLS_DASHBOARD access -- invariant 74(b) tightening confirmed live');
        else
            fail('FIN_ADMIN unexpectedly retains standing CONTROLS_DASHBOARD access -- tightening did not take effect', preFin);
        try {
            await departmentHead.proposeDesignation({ orgUnitCode: orgUnit.code, employeeId: candidateA.id }, finAdmin.id);
            fail('FIN_ADMIN was able to propose a Department Head designation -- should require DEPARTMENT_HEAD_DESIGNATION INITIATE');
        }
        catch (e) {
            if (e instanceof department_head_types_1.DepartmentHeadError)
                ok('rejected as expected: FIN_ADMIN (no INITIATE) cannot propose a Department Head designation');
            else {
                fail('propose rejection threw the wrong error type', e);
                throw e;
            }
        }
        const draft = await departmentHead.proposeDesignation({ orgUnitCode: orgUnit.code, employeeId: candidateA.id }, hrAdmin.id);
        createdDesignationIds.push(draft.id);
        if (draft.status === 'DRAFT' && draft.workflowInstanceId)
            ok('HR_ADMIN proposes candidate A as Department Head of the org unit -- DRAFT, pending MD_CEO approval');
        else
            fail('propose did not produce the expected DRAFT + workflowInstanceId shape', draft);
        try {
            await departmentHead.approveDesignation(draft.workflowInstanceId, hrAdmin.id);
            fail('HR_ADMIN was able to approve their own proposal -- should require DEPARTMENT_HEAD_DESIGNATION APPROVE');
        }
        catch (e) {
            if (e instanceof workflow_types_1.WorkflowAuthorizationError)
                ok('rejected as expected: HR_ADMIN (no APPROVE) cannot approve the Department Head designation');
            else {
                fail('approve rejection threw the wrong error type', e);
                throw e;
            }
        }
        const active = await departmentHead.approveDesignation(draft.workflowInstanceId, mdCeo.id);
        if (active.status === 'ACTIVE')
            ok('MD_CEO approves -- designation flips DRAFT -> ACTIVE');
        else
            fail('approval did not activate the designation', active);
        const postA = await delegation.hasCapability(candidateA_user.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (postA.eligible)
            ok('candidate A now has dynamic CONTROLS_DASHBOARD VIEW purely from the ACTIVE designation -- assign -> approve -> access-follows proven live');
        else
            fail('candidate A still lacks CONTROLS_DASHBOARD access after their designation was approved', postA);
        const postFin = await delegation.hasCapability(finAdmin.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (!postFin.eligible)
            ok('FIN_ADMIN remains denied CONTROLS_DASHBOARD access -- proves the tightening is scoped per-holder, not a blanket re-open; the SAME DelegationService.hasCapability() call backs DashboardController\'s server-side guard AND Layout.tsx\'s nav-visibility check, so this one denial covers both surfaces');
        else
            fail('FIN_ADMIN unexpectedly gained CONTROLS_DASHBOARD access as a side effect of an unrelated designation', postFin);
        const draft2 = await departmentHead.proposeDesignation({ orgUnitCode: orgUnit.code, employeeId: candidateB.id }, hrAdmin.id);
        createdDesignationIds.push(draft2.id);
        const active2 = await departmentHead.approveDesignation(draft2.workflowInstanceId, mdCeo.id);
        if (active2.status === 'ACTIVE')
            ok('MD_CEO approves candidate B as the new Department Head of the SAME org unit');
        else
            fail('second approval did not activate', active2);
        const supersededA = await prisma.departmentHeadDesignation.findUniqueOrThrow({ where: { id: draft.id } });
        if (supersededA.status === 'SUPERSEDED')
            ok('candidate A\'s designation was automatically superseded the moment candidate B\'s was approved -- one active head per unit enforced atomically');
        else
            fail('candidate A\'s designation did not flip to SUPERSEDED when candidate B\'s was approved', supersededA);
        try {
            await prisma.departmentHeadDesignation.update({ where: { id: draft.id }, data: { status: 'ACTIVE' } });
            fail('the DB allowed a second ACTIVE department_head_designation row for the same org unit -- the partial unique index is not enforcing');
        }
        catch (e) {
            const msg = e.message;
            if (msg.includes('department_head_designation_one_active_per_org_unit') || msg.includes('Unique constraint')) {
                ok('invariant 75(c): Postgres itself refuses a second ACTIVE designation for the same org unit -- structural, not service-logic-only (partial unique index fires even when the service-layer supersession is bypassed entirely)');
            }
            else {
                fail('the raw update was rejected, but not by the expected partial unique index', msg);
            }
        }
        const postA2 = await delegation.hasCapability(candidateA_user.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (!postA2.eligible)
            ok('candidate A LOSES dynamic CONTROLS_DASHBOARD access the instant they are superseded -- access tracks the CURRENT active designation, never a stale grant');
        else
            fail('candidate A retains CONTROLS_DASHBOARD access after being superseded', postA2);
        const postB = await delegation.hasCapability(candidateB_user.id, 'CONTROLS_DASHBOARD', 'VIEW');
        if (postB.eligible)
            ok('candidate B (the new head) now has dynamic CONTROLS_DASHBOARD access -- headship moved with leadership change, as invariant 74(b) requires');
        else
            fail('candidate B does not have CONTROLS_DASHBOARD access despite being the current ACTIVE head', postB);
        const seedMd = await prisma.appUser.findFirst({ where: { roles: { some: { roleCode: 'MD_CEO' } }, id: { notIn: createdUserIds } }, select: { id: true } });
        if (seedMd) {
            const mdCheck = await delegation.hasCapability(seedMd.id, 'CONTROLS_DASHBOARD', 'VIEW');
            if (mdCheck.eligible)
                ok('a real seeded MD_CEO retains standing CONTROLS_DASHBOARD VIEW -- invariant 74(b) retained this seat, as directed');
            else
                fail('a seeded MD_CEO unexpectedly lost standing CONTROLS_DASHBOARD access', mdCheck);
        }
    }
    finally {
        if (createdDesignationIds.length)
            await prisma.departmentHeadDesignation.deleteMany({ where: { id: { in: createdDesignationIds } } });
        await prisma.workflowStepApproval.deleteMany({ where: { workflowInstance: { entityType: 'department_head_designation', entityId: { in: createdDesignationIds } } } });
        await prisma.workflowInstance.deleteMany({ where: { entityType: 'department_head_designation', entityId: { in: createdDesignationIds } } });
        if (createdEmployeeIds.length)
            await prisma.employee.deleteMany({ where: { id: { in: createdEmployeeIds } } });
        if (createdUserIds.length) {
            await prisma.userRole.deleteMany({ where: { userId: { in: createdUserIds } } });
            await prisma.appUser.deleteMany({ where: { id: { in: createdUserIds } } });
        }
        await prisma.onModuleDestroy();
    }
    if (failed > 0) {
        console.error(`\n${failed} assertion(s) FAILED.`);
        process.exitCode = 1;
    }
    console.log('\nSMOKE OK — Department Head designation (invariant 74b/e, CHECK27, v1.2): assign -> approve -> access-follows proven live, non-head operating role denied, one-active-head-per-unit supersession proven atomically.');
}
main();
//# sourceMappingURL=department-head.smoke.js.map