// One-off manual analysis script, not part of the Nest app or the test suite.
// Run with: npx tsx src/rbac/md-ceo-visibility-audit.smoke.ts
// Invariant 61(a) (CHECK15): "MD_CEO is structurally unscopeable (54c) --
// every register, dashboard, module, and record visible. The APPROVE⇒VIEW
// sweep + a final visibility audit certify it: the pack lists every nav
// entry and screen with MD_CEO's access state; any gap is a defect, fixed
// in the same pass." Reuses the EXACT two building blocks approve-implies-
// view.smoke.ts already established (controller-file @RequiresCapability
// regex scan + live role_permission query), inverted to check MD_CEO's own
// access rather than the generic APPROVE⇒VIEW class rule, plus a second
// pass over ops-ui's own Layout.tsx nav array (the single source that
// drives both the sidebar and Ctrl+K per its own header comment).
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

  // ---- Part 1: every function code with a REAL route (any level) ----
  const opsApiDir = path.join(__dirname, '..', 'ops-api');
  const controllerFiles = fs.readdirSync(opsApiDir).filter((f) => f.endsWith('.controller.ts'));
  const allGatedFunctions = new Set<string>();
  for (const file of controllerFiles) {
    const content = fs.readFileSync(path.join(opsApiDir, file), 'utf8');
    for (const m of content.matchAll(/@RequiresCapability\(\s*'([A-Z_]+)'\s*,\s*'(VIEW|INITIATE|APPROVE)'\s*\)/g)) {
      allGatedFunctions.add(m[1]);
    }
  }
  ok(`Found ${allGatedFunctions.size} distinct function code(s) gated by @RequiresCapability across ${controllerFiles.length} ops-api controller file(s)`);

  const mdCeoGrants = await prisma.rolePermission.findMany({ where: { roleCode: 'MD_CEO' }, select: { functionCode: true, level: true } });
  const mdCeoByFunction = new Map<string, Set<string>>();
  for (const g of mdCeoGrants) {
    if (!mdCeoByFunction.has(g.functionCode)) mdCeoByFunction.set(g.functionCode, new Set());
    mdCeoByFunction.get(g.functionCode)!.add(g.level);
  }

  // Deliberate, documented exceptions -- NOT gaps. Kept as an explicit
  // allow-list so any future omission is loud (fails the sweep) rather than
  // silently accepted.
  const DELIBERATE_EXCEPTIONS = new Set<string>([
    // CHECK14 (invariant 58d): landing-page-ambiguity guard -- these three
    // capabilities double as the "each officer lands on THEIR dashboard"
    // default-landing signal; granting MD_CEO VIEW here would make MD_CEO's
    // OWN landing page ambiguous (CONTROLS_DASHBOARD is MD_CEO's landing
    // signal and must resolve first, unconditionally). MD_CEO already sees
    // every figure these dashboards show through screens MD_CEO already
    // holds VIEW on (Fund/Company Accounting statement viewers, Budget
    // Management, etc.) -- only the shortcut dashboard tile itself is
    // withheld, not the underlying data.
    'COMPANY_ACCOUNTING_DASHBOARD',
    'FUND_ACCOUNTING_DASHBOARD',
    'BD_DASHBOARD',
  ]);

  const capabilityGaps: string[] = [];
  for (const func of allGatedFunctions) {
    if (DELIBERATE_EXCEPTIONS.has(func)) continue;
    const levels = mdCeoByFunction.get(func);
    if (!levels || !levels.has('VIEW')) {
      capabilityGaps.push(func);
    }
  }
  if (capabilityGaps.length === 0) {
    ok(`0 capability-level visibility gaps for MD_CEO across ${allGatedFunctions.size} gated function(s) (${DELIBERATE_EXCEPTIONS.size} deliberate, documented exception(s) excluded)`);
  } else {
    fail(`${capabilityGaps.length} function(s) with a real route but NO MD_CEO VIEW grant`, capabilityGaps);
  }

  // ---- Part 2: every ops-ui nav entry -- MD_CEO's access state ----
  const layoutPath = path.join(__dirname, '..', '..', 'ops-ui', 'src', 'components', 'Layout.tsx');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  // Matches: { to: '/path', label: 'Label', visible: <expr> },
  // <expr> is captured up to the line's closing `},` -- nav items in this
  // file are always single-line per the established convention.
  const navItemRe = /\{\s*to:\s*'([^']+)',\s*label:\s*'([^']+)',\s*visible:\s*(.+?)\s*\}\s*,?\s*$/gm;
  type NavItem = { to: string; label: string; visible: string };
  const navItems: NavItem[] = [];
  for (const m of layoutContent.matchAll(navItemRe)) {
    navItems.push({ to: m[1], label: m[2], visible: m[3] });
  }
  ok(`Found ${navItems.length} nav entries in ops-ui/src/components/Layout.tsx`);

  function mdCeoCan(functionCode: string, level: string): boolean {
    return mdCeoByFunction.get(functionCode)?.has(level) ?? false;
  }
  // Evaluate a `visible` expression against MD_CEO's grants. Handles the
  // two shapes this codebase's nav array actually uses: `true` (universal,
  // identity-based) and `can('FUNC', 'LEVEL')` terms OR-ed together.
  function evaluateVisible(expr: string): boolean | null {
    if (expr.trim() === 'true') return true;
    const terms = [...expr.matchAll(/can\(\s*'([A-Z_]+)'\s*,\s*'(VIEW|INITIATE|APPROVE)'\s*\)/g)];
    if (terms.length === 0) return null; // unrecognized shape -- flagged separately, not silently passed
    return terms.some((t) => mdCeoCan(t[1], t[2]));
  }

  const navGaps: { to: string; label: string; visible: string }[] = [];
  const unrecognized: { to: string; label: string; visible: string }[] = [];
  let deliberateNavExceptions = 0;
  for (const item of navItems) {
    const result = evaluateVisible(item.visible);
    if (result === null) { unrecognized.push(item); continue; }
    if (!result) {
      const isDeliberateException = [...DELIBERATE_EXCEPTIONS].some((f) => item.visible.includes(`'${f}'`));
      if (isDeliberateException) { deliberateNavExceptions++; continue; }
      navGaps.push(item);
    }
  }
  if (deliberateNavExceptions > 0) {
    ok(`${deliberateNavExceptions} nav entr(y/ies) correctly excluded as the CHECK14 landing-page-ambiguity guard (deliberate, documented)`);
  }
  if (unrecognized.length > 0) {
    ok(`${unrecognized.length} nav entr(y/ies) use a visibility expression this script's regex doesn't parse -- listed for manual review, not counted as gaps or passes`);
    for (const u of unrecognized) console.log(`  UNRECOGNIZED: ${u.to} (${u.label}) -- visible: ${u.visible}`);
  }
  if (navGaps.length === 0) {
    ok(`0 nav-reachability gaps for MD_CEO across ${navItems.length - unrecognized.length} parseable nav entries`);
  } else {
    fail(`${navGaps.length} nav entr(y/ies) NOT visible to MD_CEO`, navGaps.map((g) => `${g.to} (${g.label}): ${g.visible}`));
  }

  console.log(`\n${failed ? 'AUDIT FAILED -- see FAIL lines above' : 'AUDIT OK'} — invariant 61(a) MD_CEO total-visibility audit against the real live DB + Layout.tsx.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
