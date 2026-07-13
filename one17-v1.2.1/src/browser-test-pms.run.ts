import 'dotenv/config';
import { PrismaService } from './prisma/prisma.service';
import { AuditService } from './audit/audit.service';
import { RbacService } from './rbac/rbac.service';
import { DelegationService } from './delegation/delegation.service';
import { WorkflowEngineService } from './workflow/workflow.service';
import { AuthService } from './auth/auth.service';
import { MfaService } from './mfa/mfa.service';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));

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
