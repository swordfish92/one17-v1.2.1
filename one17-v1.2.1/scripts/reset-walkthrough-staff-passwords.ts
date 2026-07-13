import 'dotenv/config';
// Walkthrough-only utility: resets the shared login password for the named
// staff roster seeded by walkthrough-seed.ts, against the DEDICATED
// one17_walkthrough database (never the dev DB). Exists because the
// original password used at seed time was intentionally never persisted
// anywhere (WALKTHROUGH_STAFF_PASSWORD is env-var-only, not written to any
// tracked file) — so it is unrecoverable once the shell session that set it
// ends, and re-running walkthrough-seed.ts itself is not safe here (it
// creates full session 1-3 demo data end to end; this script only touches
// AppUser.passwordHash via the same AuthService.setPassword path the app
// itself uses). Skips the two non-human service accounts
// (system-scheduler@one17.test, walkthrough-ict@one17capital.com) — those
// authenticate via a different path and were never meant to share this
// password.
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

function requireStaffPassword(): string {
  const value = process.env.WALKTHROUGH_STAFF_PASSWORD;
  if (!value) fail('WALKTHROUGH_STAFF_PASSWORD is not set. See .env.example.');
  return value;
}

const SERVICE_ACCOUNT_EMAILS = new Set(['system-scheduler@one17.test', 'walkthrough-ict@one17capital.com']);

async function main() {
  const password = requireStaffPassword();
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));

  const staff = await prisma.appUser.findMany({
    where: { email: { notIn: Array.from(SERVICE_ACCOUNT_EMAILS) } },
    orderBy: { displayName: 'asc' },
  });
  if (staff.length === 0) fail('No staff AppUser rows found — is this the walkthrough DB?');

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
