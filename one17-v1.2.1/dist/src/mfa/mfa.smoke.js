"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const otplib_1 = require("otplib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("./mfa.service");
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
    const mfa = new mfa_service_1.MfaService(prisma, audit);
    const auth = new auth_service_1.AuthService(prisma, audit, mfa);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, auth);
    const emailFor = (name) => `mfa-${name}-${RUN}@one17.test`;
    const PASSWORD = 'SmokeTestPassword123!';
    const superAdmin = await prisma.appUser.create({ data: { email: emailFor('superadmin'), displayName: 'superadmin' } });
    await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
    await auth.setPassword(superAdmin.id, PASSWORD);
    const ordinaryStaff = await prisma.appUser.create({ data: { email: emailFor('portoff'), displayName: 'portoff' } });
    await rbac.assignRole({ userId: ordinaryStaff.id, roleCode: 'PORT_OFF' });
    await auth.setPassword(ordinaryStaff.id, PASSWORD);
    try {
        const superAdminMandatory = await mfa.isMfaMandatory(superAdmin.id);
        const staffMandatory = await mfa.isMfaMandatory(ordinaryStaff.id);
        if (superAdminMandatory && !staffMandatory) {
            ok('MFA is mandatory for SUPER_ADMIN (fixed floor), optional for an ordinary PORT_OFF seat (invariant 68c)');
        }
        else {
            fail('mandatory-floor detection unexpected', { superAdminMandatory, staffMandatory });
        }
        const loginResult = await auth.login(superAdmin.email, PASSWORD, {});
        if (loginResult.mfaRequired && !loginResult.mfaEnrolled) {
            ok('login() flags mfaRequired=true, mfaEnrolled=false for an unenrolled mandatory seat');
        }
        else {
            fail('login() did not flag the pending-enrollment state correctly', loginResult);
        }
        const pendingSession = await auth.validateSession(loginResult.token);
        if (pendingSession?.mfaPending === true) {
            ok('validateSession() exposes mfaPending=true immediately after login — SessionAuthGuard would block every non-@AllowMfaPending route right now');
        }
        else {
            fail('expected the fresh session to be mfaPending', pendingSession);
        }
        await expectReject('confirmEnrollment before beginEnrollment is called', () => mfa.confirmEnrollment(ordinaryStaff.id, '000000'));
        const enrollment = await mfa.beginEnrollment(superAdmin.id);
        if (enrollment.secret && enrollment.otpauthUrl.startsWith('otpauth://totp/')) {
            ok('beginEnrollment returns a base32 secret + a scannable otpauth:// URI');
        }
        else {
            fail('beginEnrollment did not return the expected shape', enrollment);
        }
        await expectReject('confirmEnrollment with a wrong code', () => mfa.confirmEnrollment(superAdmin.id, '000000'));
        const realCode = await (0, otplib_1.generate)({ secret: enrollment.secret });
        const backupCodes = await mfa.confirmEnrollment(superAdmin.id, realCode);
        if (backupCodes.length === 10 && new Set(backupCodes).size === 10) {
            ok(`confirmEnrollment with the real code succeeds — 10 distinct one-time backup codes issued (never retrievable again)`);
        }
        else {
            fail('expected 10 distinct backup codes', backupCodes);
        }
        const statusAfterEnroll = await mfa.getStatus(superAdmin.id);
        if (statusAfterEnroll.enrolled && statusAfterEnroll.enabledAt) {
            ok('getStatus() reports enrolled=true with a populated enabledAt after confirmation');
        }
        else {
            fail('status did not reflect the completed enrollment', statusAfterEnroll);
        }
        await auth.promoteSessionPastMfa(loginResult.token);
        const promotedSession = await auth.validateSession(loginResult.token);
        if (promotedSession?.mfaPending === false) {
            ok('promoteSessionPastMfa() clears mfaPending — the session is now a normal, fully-authenticated one');
        }
        else {
            fail('expected mfaPending to be cleared after promotion', promotedSession);
        }
        const secondLogin = await auth.login(superAdmin.email, PASSWORD, {});
        if (secondLogin.mfaRequired && secondLogin.mfaEnrolled) {
            ok('a later login for the now-enrolled user flags mfaEnrolled=true — client should prompt for a code, not re-enrollment');
        }
        else {
            fail('second login did not reflect the enrolled state', secondLogin);
        }
        await expectReject('verifyCode with a wrong TOTP code and no matching backup code', async () => {
            const wrongCodeOk = await mfa.verifyCode(superAdmin.id, '000000');
            if (!wrongCodeOk)
                throw new Error('correctly rejected');
        });
        const realCode2 = await (0, otplib_1.generate)({ secret: enrollment.secret });
        const verifyOk = await mfa.verifyCode(superAdmin.id, realCode2);
        if (verifyOk) {
            ok('verifyCode() accepts a fresh valid TOTP code on the second login');
        }
        else {
            fail('verifyCode() rejected a genuinely valid TOTP code', {});
        }
        const oneBackupCode = backupCodes[0];
        const backupOk1 = await mfa.verifyCode(superAdmin.id, oneBackupCode);
        const backupOk2 = await mfa.verifyCode(superAdmin.id, oneBackupCode);
        if (backupOk1 && !backupOk2) {
            ok('a backup code authenticates exactly once — the same code fails on a second attempt (single-use)');
        }
        else {
            fail('backup-code single-use property did not hold', { backupOk1, backupOk2 });
        }
        await mfa.resetMfa(superAdmin.id, superAdmin.id);
        const statusAfterReset = await mfa.getStatus(superAdmin.id);
        if (!statusAfterReset.enrolled) {
            ok('resetMfa() clears enrollment — the user would re-enroll on next mandatory login');
        }
        else {
            fail('resetMfa() did not clear the enrolled state', statusAfterReset);
        }
        const smokeFn = await prisma.platformFunction.create({ data: { code: `MFA_SMOKE_FN_${RUN}`, description: 'smoke test function' } });
        await prisma.rolePermission.create({ data: { roleCode: 'PORT_OFF', functionCode: smokeFn.code, level: 'APPROVE' } });
        const staffMandatoryBeforeGrant = await mfa.isMfaMandatory(ordinaryStaff.id);
        await mfa.addFinancialCapability(smokeFn.code, superAdmin.id);
        const staffMandatoryAfterGrant = await mfa.isMfaMandatory(ordinaryStaff.id);
        if (!staffMandatoryBeforeGrant && staffMandatoryAfterGrant) {
            ok('adding a function to the governed financial-capability list makes MFA mandatory for every role holding APPROVE on it — the "enforcement tiers in governed config" mechanism');
        }
        else {
            fail('financial-capability governed extension did not behave as expected', { staffMandatoryBeforeGrant, staffMandatoryAfterGrant });
        }
        await mfa.removeFinancialCapability(smokeFn.code, superAdmin.id);
        const staffMandatoryAfterRemoval = await mfa.isMfaMandatory(ordinaryStaff.id);
        if (!staffMandatoryAfterRemoval) {
            ok('removing the function from the governed list drops the mandate again');
        }
        else {
            fail('removal did not drop the mandate', {});
        }
        await prisma.rolePermission.deleteMany({ where: { functionCode: smokeFn.code } });
        await prisma.platformFunction.delete({ where: { code: smokeFn.code } });
        await mfa.setGlobalEnforcement(true, superAdmin.id);
        const staffMandatoryAfterGlobalFlip = await mfa.isMfaMandatory(ordinaryStaff.id);
        if (staffMandatoryAfterGlobalFlip) {
            ok('flipping allStaffMandatory makes MFA mandatory for an ordinary seat too (invariant 68c "optional-until-flipped for the rest")');
        }
        else {
            fail('global enforcement flip did not take effect', {});
        }
        await mfa.setGlobalEnforcement(false, superAdmin.id);
        const staffMandatoryAfterGlobalUnflip = await mfa.isMfaMandatory(ordinaryStaff.id);
        if (!staffMandatoryAfterGlobalUnflip) {
            ok('flipping allStaffMandatory back off restores the default (optional for ordinary seats)');
        }
        else {
            fail('global enforcement did not revert', {});
        }
    }
    finally {
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
//# sourceMappingURL=mfa.smoke.js.map