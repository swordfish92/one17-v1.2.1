import 'dotenv/config';
// Production install step: create the FIRST SUPER_ADMIN login. prisma/seed.ts
// deliberately creates zero AppUser rows (config/reference-data only — no
// synthetic people in a database meant to hold real investor data from day
// one, per CLAUDE.md invariant 13). Every subsequent staff account is meant
// to be added through the live RBAC_CONFIG screen (governed, maker!=checker,
// invariant 39a task #161) — this script exists ONLY to create the one
// account that can log in to reach that screen in the first place.
//
// Idempotent and safe to re-run: if the email already holds SUPER_ADMIN,
// this is a no-op. If the email exists without SUPER_ADMIN, the role is
// added (no password change — use the ops-ui to rotate a password, never
// this script, once the system is live). If the email doesn't exist yet, a
// new user is created with the supplied password.
//
// Credentials come from environment variables, never CLI arguments (which
// would leak into shell history and the process list) and are never
// logged. install-one17.ps1 collects the password via Read-Host
// -AsSecureString and passes it through the process environment only.
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { RbacService } from '../src/rbac/rbac.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const displayName = process.env.ADMIN_NAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !displayName || !password) {
    fail('ADMIN_EMAIL, ADMIN_NAME, and ADMIN_PASSWORD must all be set in the environment.');
  }

  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);

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
