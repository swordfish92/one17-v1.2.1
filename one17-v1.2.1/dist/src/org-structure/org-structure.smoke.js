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
const org_structure_service_1 = require("./org-structure.service");
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
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const orgStructure = new org_structure_service_1.OrgStructureService(prisma, audit, delegation);
    const hr = await prisma.appUser.create({ data: { email: `org-hr-${RUN}@one17.test`, displayName: 'org-hr' } });
    await rbac.assignRole({ userId: hr.id, roleCode: 'HR_ADMIN' });
    const outsider = await prisma.appUser.create({ data: { email: `org-outsider-${RUN}@one17.test`, displayName: 'org-outsider' } });
    const orgUnitCode = `SMOKE_ORG_${RUN}`;
    await expectReject('outsider cannot create an org unit', () => orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Smoke Org Unit', createdByUserId: outsider.id }));
    const orgUnit = await orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Smoke Org Unit', secondaryReportingLine: 'BOARD', createdByUserId: hr.id });
    if (orgUnit.code === orgUnitCode && orgUnit.name === 'Smoke Org Unit')
        ok('createOrgUnit creates the row directly (no workflow), audit-recorded');
    else
        fail('createOrgUnit did not create the expected row', orgUnit);
    await expectReject('duplicate org unit code is refused', () => orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Different Name', createdByUserId: hr.id }));
    await expectReject('position creation refused against a nonexistent org unit', () => orgStructure.createPosition({ title: 'Ghost Officer', orgUnitCode: `NONEXISTENT_${RUN}`, cadre: 'Officer', notch: 1, createdByUserId: hr.id }));
    const position = await orgStructure.createPosition({ title: `Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Officer', notch: 1, createdByUserId: hr.id });
    if (position.orgUnitCode === orgUnitCode && position.title === `Smoke Officer ${RUN}`)
        ok('createPosition creates the row against the real org unit');
    else
        fail('createPosition did not create the expected row', position);
    await expectReject('duplicate (title, orgUnitCode) position is refused', () => orgStructure.createPosition({ title: `Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Officer', notch: 1, createdByUserId: hr.id }));
    const listedOrgUnits = await orgStructure.listOrgUnits();
    const listedPositions = await orgStructure.listPositions();
    if (listedOrgUnits.some((o) => o.code === orgUnitCode) && listedPositions.some((p) => p.id === position.id)) {
        ok('newly-created org unit/position are immediately visible via listOrgUnits/listPositions -- unblocks EMPLOYEE_ONBOARDING against a freshly-created position');
    }
    else {
        fail('new rows not visible via list methods', { listedOrgUnits, listedPositions });
    }
    await prisma.position.delete({ where: { id: position.id } });
    await prisma.orgUnit.delete({ where: { code: orgUnitCode } });
    const userIds = [hr.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — governed position/org-unit creation (invariant 51a-iii) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=org-structure.smoke.js.map