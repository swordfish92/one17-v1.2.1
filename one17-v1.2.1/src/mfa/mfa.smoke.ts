// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/mfa/mfa.smoke.ts
// Invariant 68(c) H-02 (CHECK22 v1.0.1 remediation): staff-realm TOTP MFA.
// Proves the mandatory floor (SUPER_ADMIN/MD_CEO hardcoded + governed
// financial-capability extension), the enroll -> confirm -> backup-codes
// flow, login issuing a PENDING session for a mandatory/enrolled user,
// AuthService.validateSession exposing mfaPending, promoteSessionPastMfa
// clearing it, backup-code single-use, and the SUPER_ADMIN reset action.
import 'dotenv/config';
import { generate as totpGenerate } from 'otplib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from './mfa.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const mfa = new MfaService(prisma, audit);
  const auth = new AuthService(prisma, audit, mfa);
  const rbac = new RbacService(prisma, audit, workflow, auth);

  const emailFor = (name: string) => `mfa-${name}-${RUN}@one17.test`;
  const PASSWORD = 'SmokeTestPassword123!';

  const superAdmin = await prisma.appUser.create({ data: { email: emailFor('superadmin'), displayName: 'superadmin' } });
  await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
  await auth.setPassword(superAdmin.id, PASSWORD);

  const ordinaryStaff = await prisma.appUser.create({ data: { email: emailFor('portoff'), displayName: 'portoff' } });
  await rbac.assignRole({ userId: ordinaryStaff.id, roleCode: 'PORT_OFF' });
  await auth.setPassword(ordinaryStaff.id, PASSWORD);

  try {
    // ---- 1. Mandatory floor: fixed tier (SUPER_ADMIN) vs an ordinary seat ----
    const superAdminMandatory = await mfa.isMfaMandatory(superAdmin.id);
    const staffMandatory = await mfa.isMfaMandatory(ordinaryStaff.id);
    if (superAdminMandatory && !staffMandatory) {
      ok('MFA is mandatory for SUPER_ADMIN (fixed floor), optional for an ordinary PORT_OFF seat (invariant 68c)');
    } else {
      fail('mandatory-floor detection unexpected', { superAdminMandatory, staffMandatory });
    }

    // ---- 2. Login for a mandatory-but-unenrolled user issues a PENDING session ----
    const loginResult = await auth.login(superAdmin.email, PASSWORD, {});
    if (loginResult.mfaRequired && !loginResult.mfaEnrolled) {
      ok('login() flags mfaRequired=true, mfaEnrolled=false for an unenrolled mandatory seat');
    } else {
      fail('login() did not flag the pending-enrollment state correctly', loginResult);
    }
    const pendingSession = await auth.validateSession(loginResult.token);
    if (pendingSession?.mfaPending === true) {
      ok('validateSession() exposes mfaPending=true immediately after login — SessionAuthGuard would block every non-@AllowMfaPending route right now');
    } else {
      fail('expected the fresh session to be mfaPending', pendingSession);
    }

    // ---- 3. Enrollment: begin -> confirm with a real TOTP code -> backup codes issued ----
    await expectReject('confirmEnrollment before beginEnrollment is called', () =>
      mfa.confirmEnrollment(ordinaryStaff.id, '000000'));

    const enrollment = await mfa.beginEnrollment(superAdmin.id);
    if (enrollment.secret && enrollment.otpauthUrl.startsWith('otpauth://totp/')) {
      ok('beginEnrollment returns a base32 secret + a scannable otpauth:// URI');
    } else {
      fail('beginEnrollment did not return the expected shape', enrollment);
    }

    await expectReject('confirmEnrollment with a wrong code', () =>
      mfa.confirmEnrollment(superAdmin.id, '000000'));

    const realCode = await totpGenerate({ secret: enrollment.secret });
    const backupCodes = await mfa.confirmEnrollment(superAdmin.id, realCode);
    if (backupCodes.length === 10 && new Set(backupCodes).size === 10) {
      ok(`confirmEnrollment with the real code succeeds — 10 distinct one-time backup codes issued (never retrievable again)`);
    } else {
      fail('expected 10 distinct backup codes', backupCodes);
    }
    const statusAfterEnroll = await mfa.getStatus(superAdmin.id);
    if (statusAfterEnroll.enrolled && statusAfterEnroll.enabledAt) {
      ok('getStatus() reports enrolled=true with a populated enabledAt after confirmation');
    } else {
      fail('status did not reflect the completed enrollment', statusAfterEnroll);
    }

    // ---- 4. promoteSessionPastMfa clears the pending flag + extends the session ----
    await auth.promoteSessionPastMfa(loginResult.token);
    const promotedSession = await auth.validateSession(loginResult.token);
    if (promotedSession?.mfaPending === false) {
      ok('promoteSessionPastMfa() clears mfaPending — the session is now a normal, fully-authenticated one');
    } else {
      fail('expected mfaPending to be cleared after promotion', promotedSession);
    }

    // ---- 5. A SUBSEQUENT login (now enrolled) issues a pending session needing verifyCode, not re-enrollment ----
    const secondLogin = await auth.login(superAdmin.email, PASSWORD, {});
    if (secondLogin.mfaRequired && secondLogin.mfaEnrolled) {
      ok('a later login for the now-enrolled user flags mfaEnrolled=true — client should prompt for a code, not re-enrollment');
    } else {
      fail('second login did not reflect the enrolled state', secondLogin);
    }
    await expectReject('verifyCode with a wrong TOTP code and no matching backup code', async () => {
      const wrongCodeOk = await mfa.verifyCode(superAdmin.id, '000000');
      if (!wrongCodeOk) throw new Error('correctly rejected');
    });
    const realCode2 = await totpGenerate({ secret: enrollment.secret });
    const verifyOk = await mfa.verifyCode(superAdmin.id, realCode2);
    if (verifyOk) {
      ok('verifyCode() accepts a fresh valid TOTP code on the second login');
    } else {
      fail('verifyCode() rejected a genuinely valid TOTP code', {});
    }

    // ---- 6. Backup code: single-use ----
    const oneBackupCode = backupCodes[0];
    const backupOk1 = await mfa.verifyCode(superAdmin.id, oneBackupCode);
    const backupOk2 = await mfa.verifyCode(superAdmin.id, oneBackupCode);
    if (backupOk1 && !backupOk2) {
      ok('a backup code authenticates exactly once — the same code fails on a second attempt (single-use)');
    } else {
      fail('backup-code single-use property did not hold', { backupOk1, backupOk2 });
    }

    // ---- 7. Admin reset (SUPER_ADMIN-only capability, exercised as a direct service call here) ----
    await mfa.resetMfa(superAdmin.id, superAdmin.id);
    const statusAfterReset = await mfa.getStatus(superAdmin.id);
    if (!statusAfterReset.enrolled) {
      ok('resetMfa() clears enrollment — the user would re-enroll on next mandatory login');
    } else {
      fail('resetMfa() did not clear the enrolled state', statusAfterReset);
    }

    // ---- 8. Governed financial-capability list extends the mandatory floor for a non-fixed-tier seat ----
    // Reuse ordinaryStaff (PORT_OFF) rather than a fresh FIN_ADMIN user:
    // FIN_ADMIN already holds APPROVE on the seeded PAYMENT_GATEWAY_SUSPENSE
    // capability (a legitimately correct pre-existing mandate, not a bug),
    // which would make the "before" assertion below wrong through no fault
    // of the service. PORT_OFF was already confirmed non-mandatory at
    // baseline in step 1, so it isolates exactly this smoke-scoped grant.
    const smokeFn = await prisma.platformFunction.create({ data: { code: `MFA_SMOKE_FN_${RUN}`, description: 'smoke test function' } });
    await prisma.rolePermission.create({ data: { roleCode: 'PORT_OFF', functionCode: smokeFn.code, level: 'APPROVE' } });
    const staffMandatoryBeforeGrant = await mfa.isMfaMandatory(ordinaryStaff.id);
    await mfa.addFinancialCapability(smokeFn.code, superAdmin.id);
    const staffMandatoryAfterGrant = await mfa.isMfaMandatory(ordinaryStaff.id);
    if (!staffMandatoryBeforeGrant && staffMandatoryAfterGrant) {
      ok('adding a function to the governed financial-capability list makes MFA mandatory for every role holding APPROVE on it — the "enforcement tiers in governed config" mechanism');
    } else {
      fail('financial-capability governed extension did not behave as expected', { staffMandatoryBeforeGrant, staffMandatoryAfterGrant });
    }
    await mfa.removeFinancialCapability(smokeFn.code, superAdmin.id);
    const staffMandatoryAfterRemoval = await mfa.isMfaMandatory(ordinaryStaff.id);
    if (!staffMandatoryAfterRemoval) {
      ok('removing the function from the governed list drops the mandate again');
    } else {
      fail('removal did not drop the mandate', {});
    }
    await prisma.rolePermission.deleteMany({ where: { functionCode: smokeFn.code } });
    await prisma.platformFunction.delete({ where: { code: smokeFn.code } });

    // ---- 9. Global "optional-until-flipped" switch ----
    await mfa.setGlobalEnforcement(true, superAdmin.id);
    const staffMandatoryAfterGlobalFlip = await mfa.isMfaMandatory(ordinaryStaff.id);
    if (staffMandatoryAfterGlobalFlip) {
      ok('flipping allStaffMandatory makes MFA mandatory for an ordinary seat too (invariant 68c "optional-until-flipped for the rest")');
    } else {
      fail('global enforcement flip did not take effect', {});
    }
    await mfa.setGlobalEnforcement(false, superAdmin.id);
    const staffMandatoryAfterGlobalUnflip = await mfa.isMfaMandatory(ordinaryStaff.id);
    if (!staffMandatoryAfterGlobalUnflip) {
      ok('flipping allStaffMandatory back off restores the default (optional for ordinary seats)');
    } else {
      fail('global enforcement did not revert', {});
    }

  } finally {
    await prisma.mfaBackupCode.deleteMany({ where: { userId: { in: [superAdmin.id, ordinaryStaff.id] } } });
    await prisma.userSession.deleteMany({ where: { userId: { in: [superAdmin.id, ordinaryStaff.id] } } });
    const userIds = [superAdmin.id, ordinaryStaff.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — staff-realm TOTP MFA (invariant 68c H-02) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
