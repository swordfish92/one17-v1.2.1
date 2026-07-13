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
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const hrUser = await prisma.appUser.create({ data: { email: 'browsertest-hr@one17.test', displayName: 'browsertest-hr' } });
    await rbac.assignRole({ userId: hrUser.id, roleCode: 'HR_ADMIN' });
    await authService.setPassword(hrUser.id, 'CorrectHorseBattery1!');
    const selfUser = await prisma.appUser.create({ data: { email: 'browsertest-pms-employee@one17.test', displayName: 'browsertest-pms-employee' } });
    await rbac.assignRole({ userId: selfUser.id, roleCode: 'PORT_OFF' });
    await authService.setPassword(selfUser.id, 'CorrectHorseBattery1!');
    const position = await prisma.position.create({ data: { title: 'Browser Test Officer', orgUnitCode: 'PORTFOLIO', cadre: 'Snr Associate 1', notch: 2 } });
    const employee = await prisma.employee.create({ data: { surname: 'BrowserTest', firstName: 'PMS', middleName: 'Employee', positionId: position.id, orgUnitCode: 'PORTFOLIO', appUserId: selfUser.id, hireDate: new Date() } });
    console.log('hrEmail=browsertest-hr@one17.test');
    console.log('selfEmployeeEmail=browsertest-pms-employee@one17.test');
    console.log('employeeId=' + employee.id);
    await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
//# sourceMappingURL=browser-test-pms.run.js.map