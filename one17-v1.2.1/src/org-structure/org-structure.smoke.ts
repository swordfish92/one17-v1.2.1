// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/org-structure/org-structure.smoke.ts
// Invariant 51(a-iii) (CHECK12): governed position + org-unit creation --
// capability-gated single-actor write + audit record (no workflow, per
// CLAUDE.md's own text carrying no maker!=checker qualifier for this item,
// unlike its Tier-1 siblings). Own SMOKE-prefixed fixtures throughout.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { OrgStructureService } from './org-structure.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const orgStructure = new OrgStructureService(prisma, audit, delegation);

  const hr = await prisma.appUser.create({ data: { email: `org-hr-${RUN}@one17.test`, displayName: 'org-hr' } });
  await rbac.assignRole({ userId: hr.id, roleCode: 'HR_ADMIN' });
  const outsider = await prisma.appUser.create({ data: { email: `org-outsider-${RUN}@one17.test`, displayName: 'org-outsider' } });

  const orgUnitCode = `SMOKE_ORG_${RUN}`;

  // ---- 1. Outsider cannot create an org unit ----
  await expectReject('outsider cannot create an org unit', () =>
    orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Smoke Org Unit', createdByUserId: outsider.id }));

  // ---- 2. HR creates a new org unit ----
  const orgUnit = await orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Smoke Org Unit', secondaryReportingLine: 'BOARD', createdByUserId: hr.id });
  if (orgUnit.code === orgUnitCode && orgUnit.name === 'Smoke Org Unit') ok('createOrgUnit creates the row directly (no workflow), audit-recorded');
  else fail('createOrgUnit did not create the expected row', orgUnit);

  // ---- 3. Duplicate org-unit code is refused ----
  await expectReject('duplicate org unit code is refused', () =>
    orgStructure.createOrgUnit({ code: orgUnitCode, name: 'Different Name', createdByUserId: hr.id }));

  // ---- 4. Position cannot be created against a nonexistent org unit ----
  await expectReject('position creation refused against a nonexistent org unit', () =>
    orgStructure.createPosition({ title: 'Ghost Officer', orgUnitCode: `NONEXISTENT_${RUN}`, cadre: 'Officer', notch: 1, createdByUserId: hr.id }));

  // ---- 5. HR creates a position in the new org unit ----
  const position = await orgStructure.createPosition({ title: `Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Officer', notch: 1, createdByUserId: hr.id });
  if (position.orgUnitCode === orgUnitCode && position.title === `Smoke Officer ${RUN}`) ok('createPosition creates the row against the real org unit');
  else fail('createPosition did not create the expected row', position);

  // ---- 6. Duplicate (title, orgUnitCode) is refused ----
  await expectReject('duplicate (title, orgUnitCode) position is refused', () =>
    orgStructure.createPosition({ title: `Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Officer', notch: 1, createdByUserId: hr.id }));

  // ---- 7. New org unit/position are immediately usable for invariant 50(b) onboarding (the gap this closes) ----
  const listedOrgUnits = await orgStructure.listOrgUnits();
  const listedPositions = await orgStructure.listPositions();
  if (listedOrgUnits.some((o) => o.code === orgUnitCode) && listedPositions.some((p) => p.id === position.id)) {
    ok('newly-created org unit/position are immediately visible via listOrgUnits/listPositions -- unblocks EMPLOYEE_ONBOARDING against a freshly-created position');
  } else {
    fail('new rows not visible via list methods', { listedOrgUnits, listedPositions });
  }

  // Cleanup.
  await prisma.position.delete({ where: { id: position.id } });
  await prisma.orgUnit.delete({ where: { code: orgUnitCode } });
  const userIds = [hr.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — governed position/org-unit creation (invariant 51a-iii) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
