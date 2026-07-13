"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
function requireStaffPassword() {
    const value = process.env.WALKTHROUGH_STAFF_PASSWORD;
    if (!value)
        fail('WALKTHROUGH_STAFF_PASSWORD is not set. See .env.example.');
    return value;
}
const SERVICE_ACCOUNT_EMAILS = new Set(['system-scheduler@one17.test', 'walkthrough-ict@one17capital.com']);
async function main() {
    const password = requireStaffPassword();
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const staff = await prisma.appUser.findMany({
        where: { email: { notIn: Array.from(SERVICE_ACCOUNT_EMAILS) } },
        orderBy: { displayName: 'asc' },
    });
    if (staff.length === 0)
        fail('No staff AppUser rows found — is this the walkthrough DB?');
    for (const user of staff) {
        await authService.setPassword(user.id, password);
        ok(`Password reset: ${user.displayName} <${user.email}>`);
    }
    ok(`Done: ${staff.length} staff accounts reset.`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=reset-walkthrough-staff-passwords.js.map