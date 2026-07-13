import 'dotenv/config';
import { PrismaService } from './prisma/prisma.service';
import { AuditService } from './audit/audit.service';
import { RbacService } from './rbac/rbac.service';
import { DelegationService } from './delegation/delegation.service';
import { WorkflowEngineService } from './workflow/workflow.service';
import { AuthService } from './auth/auth.service';
import { MfaService } from './mfa/mfa.service';

const PASSWORD = 'CorrectHorseBattery1!';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));

  const corp = await prisma.appUser.create({ data: { email: 'browsertest-corpsvc@one17.test', displayName: 'browsertest-corpsvc' } });
  await rbac.assignRole({ userId: corp.id, roleCode: 'CORP_SERVICES' });
  await authService.setPassword(corp.id, PASSWORD);

  console.log('email=browsertest-corpsvc@one17.test');
  console.log('password=' + PASSWORD);
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
