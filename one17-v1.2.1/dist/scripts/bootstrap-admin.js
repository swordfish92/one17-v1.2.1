"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
async function main() {
    const email = process.env.ADMIN_EMAIL;
    const displayName = process.env.ADMIN_NAME;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !displayName || !password) {
        fail('ADMIN_EMAIL, ADMIN_NAME, and ADMIN_PASSWORD must all be set in the environment.');
    }
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const superAdminRole = await prisma.role.findUnique({ where: { code: 'SUPER_ADMIN' } });
    if (!superAdminRole) {
        fail('Role SUPER_ADMIN not found — run `npx prisma migrate deploy` and `npm run db:seed` first.');
    }
    let user = await prisma.appUser.findUnique({ where: { email } });
    if (user) {
        const existingRoles = await prisma.userRole.findMany({ where: { userId: user.id }, select: { roleCode: true } });
        if (existingRoles.some((r) => r.roleCode === 'SUPER_ADMIN')) {
            ok(`${email} already holds SUPER_ADMIN — nothing to do (idempotent re-run).`);
            await prisma.$disconnect();
            return;
        }
        await rbac.assignRole({ userId: user.id, roleCode: 'SUPER_ADMIN' });
        ok(`${email} already existed — SUPER_ADMIN role added. Password NOT changed by this script.`);
        await prisma.$disconnect();
        return;
    }
    user = await prisma.appUser.create({ data: { email, displayName } });
    await rbac.assignRole({ userId: user.id, roleCode: 'SUPER_ADMIN' });
    await authService.setPassword(user.id, password);
    ok(`Created ${displayName} <${email}> with SUPER_ADMIN. Log in once, then add further staff via RBAC_CONFIG (never this script again).`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=bootstrap-admin.js.map