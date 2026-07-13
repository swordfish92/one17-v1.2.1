"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("./prisma/prisma.service");
const audit_service_1 = require("./audit/audit.service");
const rbac_service_1 = require("./rbac/rbac.service");
const delegation_service_1 = require("./delegation/delegation.service");
const workflow_service_1 = require("./workflow/workflow.service");
const auth_service_1 = require("./auth/auth.service");
const mfa_service_1 = require("./mfa/mfa.service");
const PASSWORD = 'CorrectHorseBattery1!';
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const corp = await prisma.appUser.create({ data: { email: 'browsertest-corpsvc@one17.test', displayName: 'browsertest-corpsvc' } });
    await rbac.assignRole({ userId: corp.id, roleCode: 'CORP_SERVICES' });
    await authService.setPassword(corp.id, PASSWORD);
    console.log('email=browsertest-corpsvc@one17.test');
    console.log('password=' + PASSWORD);
    await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
//# sourceMappingURL=browser-test-procurement.run.js.map