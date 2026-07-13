"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("./src/prisma/prisma.service");
const audit_service_1 = require("./src/audit/audit.service");
const rbac_service_1 = require("./src/rbac/rbac.service");
const delegation_service_1 = require("./src/delegation/delegation.service");
const workflow_service_1 = require("./src/workflow/workflow.service");
const auth_service_1 = require("./src/auth/auth.service");
const mfa_service_1 = require("./src/mfa/mfa.service");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const RUN = 'httptest';
    const emails = [`${RUN}-finadmin@one17.test`, `${RUN}-noauth@one17.test`, `${RUN}-compliance@one17.test`, `${RUN}-md@one17.test`];
    for (const email of emails) {
        let u = await prisma.appUser.findUnique({ where: { email } });
        if (!u)
            u = await prisma.appUser.create({ data: { email, displayName: email } });
    }
    const finAdmin = await prisma.appUser.findUniqueOrThrow({ where: { email: emails[0] } });
    const hasRole = await prisma.userRole.findFirst({ where: { userId: finAdmin.id, roleCode: 'FIN_ADMIN' } });
    if (!hasRole)
        await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    await authService.setPassword(finAdmin.id, 'CorrectHorseBattery1!');
    console.log('finAdminUserId', finAdmin.id);
    const noAuth = await prisma.appUser.findUniqueOrThrow({ where: { email: emails[1] } });
    await authService.setPassword(noAuth.id, 'CorrectHorseBattery1!');
    console.log('noAuthUserId', noAuth.id);
    const compliance = await prisma.appUser.findUniqueOrThrow({ where: { email: emails[2] } });
    if (!(await prisma.userRole.findFirst({ where: { userId: compliance.id, roleCode: 'COMPLIANCE' } }))) {
        await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    }
    await authService.setPassword(compliance.id, 'CorrectHorseBattery1!');
    console.log('complianceUserId', compliance.id);
    const md = await prisma.appUser.findUniqueOrThrow({ where: { email: emails[3] } });
    if (!(await prisma.userRole.findFirst({ where: { userId: md.id, roleCode: 'MD_CEO' } }))) {
        await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
    }
    await authService.setPassword(md.id, 'CorrectHorseBattery1!');
    console.log('mdUserId', md.id);
    await prisma.$disconnect();
}
main();
//# sourceMappingURL=setup_auth_test_users.js.map