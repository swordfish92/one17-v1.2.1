// Run with: npx tsx src/rbac/approve-implies-view.smoke.ts
// CHECK15: the APPROVE⇒VIEW class sweep, re-verified against the LIVE
// seeded DB rather than the in-memory PERMISSIONS array prisma/seed.ts
// checks at seed-time. This is deliberately a SEPARATE check reading a
// SEPARATE source (the real rows in role_permission, not the seed
// script's own literal) -- it catches the case seed.ts's own assertion
// structurally cannot: a manual DB fix, a migration, or a future seed.ts
// refactor that stops calling the assertion, all of which would leave
// the live grants wrong while the seed script itself looks clean.
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../prisma/prisma.service';

let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();

  const opsApiDir = path.join(__dirname, '..', 'ops-api');
  const controllerFiles = fs.readdirSync(opsApiDir).filter((f) => f.endsWith('.controller.ts'));
  const realViewGatedFunctions = new Set<string>();
  for (const file of controllerFiles) {
    const content = fs.readFileSync(path.join(opsApiDir, file), 'utf8');
    for (const m of content.matchAll(/@RequiresCapability\(\s*'([A-Z_]+)'\s*,\s*'VIEW'\s*\)/g)) realViewGatedFunctions.add(m[1]);
  }
  if (realViewGatedFunctions.size > 0) {
    ok(`Found ${realViewGatedFunctions.size} VIEW-gated function(s) across ${controllerFiles.length} ops-api controller file(s)`);
  } else {
    fail('Found zero VIEW-gated functions -- the controller scan itself is broken (regex or directory path), not a real "nothing uses VIEW" state');
  }

  const grants = await prisma.rolePermission.findMany({ select: { roleCode: true, functionCode: true, level: true } });
  const byRoleFunction = new Map<string, Set<string>>();
  for (const g of grants) {
    const key = `${g.roleCode}::${g.functionCode}`;
    if (!byRoleFunction.has(key)) byRoleFunction.set(key, new Set());
    byRoleFunction.get(key)!.add(g.level);
  }

  const gaps: string[] = [];
  for (const [key, levels] of byRoleFunction) {
    const [role, func] = key.split('::');
    if (role.startsWith('SYSTEM_')) continue;
    if (!realViewGatedFunctions.has(func)) continue;
    if ((levels.has('INITIATE') || levels.has('APPROVE')) && !levels.has('VIEW')) {
      gaps.push(`${func} :: ${role} :: has [${[...levels].join(',')}] but no VIEW`);
    }
  }

  if (gaps.length === 0) {
    ok(`0 APPROVE⇒VIEW gaps across ${byRoleFunction.size} live role+function grant pair(s) (${grants.length} total grant rows) -- the live DB matches what the seed's own assertion checked`);
  } else {
    fail(`${gaps.length} APPROVE⇒VIEW gap(s) found in the LIVE database (not just the seed script)`, gaps);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — APPROVE⇒VIEW class sweep (invariant 58d, CHECK15) re-verified against the live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
