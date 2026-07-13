import 'dotenv/config';
// Invariant 45(b) (CHECK10): regenerates the Governance Controls Register's
// tables (role catalogue, approval chains with steps, capability grant
// matrix, DB trigger/constraint inventory) directly from the live RBAC/
// workflow seed (prisma/seed.ts, as applied to the DB this script runs
// against) and the migration set on disk -- never hand-typed. Emits a
// versioned document into docs/. Run at every CHECK gate; the diff vs the
// prior version is included in that CHECK's evidence pack.
//
// Invariant 45(d): this script NEVER writes "VERIFIED" against anything.
// Status words (VERIFIED / BUILT-PENDING / DECLARED) are a human
// certification act reserved for the CEO's advisor review + witnessed
// UAT -- see One17_Governance_Controls_Register_v1.doc's own status-marking
// table. What this script CAN state as fact, mechanically, is which
// evidence-pack files exist in the repo; it lists them and leaves the
// certification word to the reader.
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../src/prisma/prisma.service';

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const MIGRATIONS_DIR = path.join(REPO_ROOT, 'prisma', 'migrations');

function ok(label: string) { console.log(`OK: ${label}`); }

// ============================================================================
// §1: mechanical inventory of DB triggers, enforcement functions, and named
// CHECK/unique constraints across every migration.sql on disk. Best-effort
// regex extraction over real SQL text -- not a SQL parser. Where a trigger's
// enforcement function contains a RAISE EXCEPTION, that message text is the
// closest mechanical proxy for "what it makes impossible" without a human
// re-describing it.
// ============================================================================
interface TriggerEntry { name: string; table: string; functionName: string; raiseMessage: string | null; sourceMigration: string }
interface ConstraintEntry { name: string; table: string; kind: 'CHECK' | 'UNIQUE INDEX (partial)' | 'UNIQUE INDEX'; expression: string; sourceMigration: string }

function scanMigrations(): { triggers: TriggerEntry[]; constraints: ConstraintEntry[] } {
  const triggers: TriggerEntry[] = [];
  const constraints: ConstraintEntry[] = [];
  const seenTriggers = new Set<string>();
  const seenConstraints = new Set<string>();

  const dirs = fs.readdirSync(MIGRATIONS_DIR).filter((d) => fs.statSync(path.join(MIGRATIONS_DIR, d)).isDirectory()).sort();
  for (const dir of dirs) {
    const sqlPath = path.join(MIGRATIONS_DIR, dir, 'migration.sql');
    if (!fs.existsSync(sqlPath)) continue;
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Function bodies, so a trigger's RAISE EXCEPTION message can be looked
    // up by function name once we find the CREATE TRIGGER that uses it.
    const functionBodies = new Map<string, string>();
    const fnRe = /CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+"?(\w+)"?\s*\([^)]*\)[\s\S]*?\$\$([\s\S]*?)\$\$/gi;
    let fnMatch: RegExpExecArray | null;
    while ((fnMatch = fnRe.exec(sql))) {
      functionBodies.set(fnMatch[1], fnMatch[2]);
    }

    const trigRe = /CREATE\s+(?:OR\s+REPLACE\s+)?TRIGGER\s+"?(\w+)"?\s+[\s\S]*?ON\s+"?(\w+)"?[\s\S]*?EXECUTE\s+(?:FUNCTION|PROCEDURE)\s+"?(\w+)"?/gi;
    let trigMatch: RegExpExecArray | null;
    while ((trigMatch = trigRe.exec(sql))) {
      const [, name, table, functionName] = trigMatch;
      if (seenTriggers.has(name)) continue;
      seenTriggers.add(name);
      const body = functionBodies.get(functionName) ?? '';
      const raiseMatch = /RAISE\s+EXCEPTION\s+'([^']+)'/i.exec(body);
      triggers.push({ name, table, functionName, raiseMessage: raiseMatch ? raiseMatch[1] : null, sourceMigration: dir });
    }

    const checkRe = /CONSTRAINT\s+"?(\w+)"?\s+CHECK\s*\(([^;]+?)\)(?=[,\n]|$)/gi;
    let checkMatch: RegExpExecArray | null;
    while ((checkMatch = checkRe.exec(sql))) {
      const [, name, expr] = checkMatch;
      if (seenConstraints.has(name)) continue;
      seenConstraints.add(name);
      const tableMatch = new RegExp(`ALTER\\s+TABLE\\s+"?(\\w+)"?\\s+ADD\\s+CONSTRAINT\\s+"?${name}"?`, 'i').exec(sql);
      const flatExpr = expr.trim().replace(/\s+/g, ' ');
      constraints.push({ name, table: tableMatch ? tableMatch[1] : '(inline)', kind: 'CHECK', expression: flatExpr.slice(0, 200), sourceMigration: dir });
    }

    const uniqRe = /CREATE\s+UNIQUE\s+INDEX\s+"?(\w+)"?\s+ON\s+"?(\w+)"?\s*\(([^)]+)\)(\s+WHERE\s+\(([^;]+)\))?/gi;
    let uniqMatch: RegExpExecArray | null;
    while ((uniqMatch = uniqRe.exec(sql))) {
      const [, name, table, cols, , whereExpr] = uniqMatch;
      if (seenConstraints.has(name)) continue;
      seenConstraints.add(name);
      constraints.push({
        name,
        table,
        kind: whereExpr ? 'UNIQUE INDEX (partial)' : 'UNIQUE INDEX',
        expression: whereExpr ? `(${cols.trim()}) WHERE ${whereExpr.trim().slice(0, 150)}` : `(${cols.trim()})`,
        sourceMigration: dir,
      });
    }
  }
  return { triggers, constraints };
}

// ============================================================================
// §1b: mechanical inventory of every HTTP route across src/**/*.controller.ts
// (RES-001 CH-03, invariant 69a: "auto-generated API/capability/RBAC/
// workflow inventory per release"). Regex extraction over real decorator
// source -- not a compiler, so it can miss a route built from a dynamically
// composed path, but every route in this codebase (checked at CH-03's own
// introduction) uses a literal string argument to @Get/@Post/etc.
// ============================================================================
interface RouteEntry { verb: string; path: string; capability: string | null; file: string }

// Invariant 70(b) discovery (CHECK24): this scanner previously attributed
// each route to the NEAREST capability decorator BEFORE its own @Get/@Post
// match -- but the universal convention in this codebase is
// @Get(...)/@RequiresCapability(...)/method, i.e. the capability decorator
// for a route comes AFTER that route's own verb decorator, not before it.
// That made every multi-route controller's register entries show the
// PREVIOUS route's capability, not the route's own (verified against the
// live generated output: e.g. `/fund-accounting/products` POST was shown
// with FINANCIAL_STATEMENTS -- the PRECEDING GET route's capability -- when
// its actual source-level decorator is PRODUCT_SETUP_INITIATION). Fixed
// below by scanning FORWARD from each route decorator to the next route
// decorator (or EOF) and collecting every @RequiresCapability found in that
// span -- correctly handles both the single-decorator case and the OR-
// stacked multi-decorator case (see requires-capability.decorator.ts's own
// comment on why stacking is meant to be OR'd).

function scanRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [];
  const srcDir = path.join(REPO_ROOT, 'src');

  function walk(dir: string): string[] {
    let out: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) out = out.concat(walk(full));
      else if (entry.name.endsWith('.controller.ts')) out.push(full);
    }
    return out;
  }

  for (const file of walk(srcDir)) {
    const relFile = path.relative(REPO_ROOT, file).replace(/\\/g, '/');
    const text = fs.readFileSync(file, 'utf8');
    const controllerMatch = /@Controller\(\s*'([^']*)'\s*\)/.exec(text);
    const prefix = controllerMatch ? controllerMatch[1] : '';

    // Walk decorator+capability pairs in source order. Convention in this
    // codebase is @Get(...)/@Post(...) FIRST, then one or more (OR'd)
    // @RequiresCapability(...) directly below it, then the method -- so a
    // route's own capability decorator(s) appear AFTER its verb decorator,
    // not before. Collect every capability match strictly between this
    // route's index and the NEXT route decorator's index (or EOF).
    const methodRe = /@(Get|Post|Put|Patch|Delete)\(\s*(?:'([^']*)')?\s*\)/g;
    const capRe = /@RequiresCapability\(\s*'([^']+)'/g;
    const capMatches: { index: number; code: string }[] = [];
    let capMatch: RegExpExecArray | null;
    while ((capMatch = capRe.exec(text))) capMatches.push({ index: capMatch.index, code: capMatch[1] });

    const methodMatches: { index: number; verb: string; subPath: string }[] = [];
    let m: RegExpExecArray | null;
    while ((m = methodRe.exec(text))) methodMatches.push({ index: m.index, verb: m[1].toUpperCase(), subPath: m[2] ?? '' });

    methodMatches.forEach((route, i) => {
      const fullPath = '/' + [prefix, route.subPath].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/\/$/, '');
      const nextIndex = methodMatches[i + 1]?.index ?? Infinity;
      const owned = capMatches.filter((c) => c.index > route.index && c.index < nextIndex);
      const capability = owned.length > 0 ? owned.map((c) => c.code).join(' OR ') : null;
      routes.push({ verb: route.verb, path: fullPath || '/', capability, file: relFile });
    });
  }
  return routes.sort((a, b) => a.file.localeCompare(b.file) || a.path.localeCompare(b.path));
}

// ============================================================================
// §2: which evidence-pack files exist on disk right now -- a fact, not a
// certification. The reader (CEO's advisor) maps these against the register
// rows to decide VERIFIED / BUILT-PENDING / DECLARED (invariant 45d).
// ============================================================================
function listEvidencePacks(): string[] {
  return fs.readdirSync(REPO_ROOT)
    .filter((f) => /^CHECK.*EVIDENCE.*\.md$/i.test(f) || /^M1_EVIDENCE\.md$/i.test(f))
    .sort();
}

function nextVersion(): number {
  if (!fs.existsSync(DOCS_DIR)) return 1;
  const existing = fs.readdirSync(DOCS_DIR).filter((f) => /^GENERATED_CONTROLS_REGISTER_v(\d+)\.md$/.test(f));
  const versions = existing.map((f) => Number(/^GENERATED_CONTROLS_REGISTER_v(\d+)\.md$/.exec(f)![1]));
  return versions.length === 0 ? 1 : Math.max(...versions) + 1;
}

// Crude multiset line diff -- sufficient for "what changed" review of a
// mechanically-generated, line-stable Markdown table document; not a real
// LCS diff.
function diffLines(oldText: string, newText: string): string {
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');
  const oldCount = new Map<string, number>();
  for (const l of oldLines) oldCount.set(l, (oldCount.get(l) ?? 0) + 1);
  const newCount = new Map<string, number>();
  for (const l of newLines) newCount.set(l, (newCount.get(l) ?? 0) + 1);

  const removed: string[] = [];
  for (const [line, count] of oldCount) {
    const extra = count - (newCount.get(line) ?? 0);
    for (let i = 0; i < extra; i++) removed.push(line);
  }
  const added: string[] = [];
  for (const [line, count] of newCount) {
    const extra = count - (oldCount.get(line) ?? 0);
    for (let i = 0; i < extra; i++) added.push(line);
  }
  if (removed.length === 0 && added.length === 0) return 'No line-level changes.';
  const parts: string[] = [];
  if (removed.length) parts.push(`### Removed (${removed.length} line(s))\n\n\`\`\`diff\n${removed.map((l) => `- ${l}`).join('\n')}\n\`\`\``);
  if (added.length) parts.push(`### Added (${added.length} line(s))\n\n\`\`\`diff\n${added.map((l) => `+ ${l}`).join('\n')}\n\`\`\``);
  return parts.join('\n\n');
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();

  const [roles, permissions, workflowTypes] = await Promise.all([
    prisma.role.findMany({ orderBy: { code: 'asc' } }),
    prisma.rolePermission.findMany({ include: { function: true }, orderBy: [{ functionCode: 'asc' }, { roleCode: 'asc' }] }),
    prisma.workflowType.findMany({
      include: { approvalRules: { include: { steps: { include: { requiredFunction: true }, orderBy: { stepOrder: 'asc' } }, initiatorFunction: true }, orderBy: { ruleKey: 'asc' } } },
      orderBy: { code: 'asc' },
    }),
  ]);
  await prisma.$disconnect();

  const { triggers, constraints } = scanMigrations();
  const evidencePacks = listEvidencePacks();
  const routes = scanRoutes();

  const version = nextVersion();
  const generatedAt = new Date().toISOString();
  const gitRev = (() => {
    try { return require('child_process').execSync('git rev-parse --short HEAD', { cwd: REPO_ROOT }).toString().trim(); }
    catch { return 'uncommitted'; }
  })();

  const lines: string[] = [];
  const h = (s: string) => lines.push(s);

  h(`# One17 Enterprise Platform — Generated Governance Controls Register v${version}`);
  h('');
  h(`Generated ${generatedAt} from git revision \`${gitRev}\` by \`scripts/generate-controls-register.ts\` (invariant 45b). Every table below is a direct read of the live RBAC/workflow seed and the migration set on disk — nothing here is hand-typed.`);
  h('');
  h('> **Status markings are not self-assigned by this generator (invariant 45d).** This document states structural fact only: which roles/grants/chains/triggers exist. Whether a given row is VERIFIED, BUILT-PENDING, or DECLARED is a certification act reserved for the CEO\'s advisor review and witnessed UAT — see `One17_Governance_Controls_Register_v1.doc` for the authoritative human-issued status table, and §4 below for which signed evidence-pack files currently exist in this repo.');
  h('');

  h('## 1. Role Catalogue');
  h('');
  h('| Role code | Name | Description | Exclusive | Read-only |');
  h('|---|---|---|---|---|');
  for (const r of roles) {
    h(`| ${r.code} | ${r.name} | ${(r.description ?? '').replace(/\|/g, '\\|')} | ${r.isExclusive ? 'Yes' : ''} | ${r.isReadOnly ? 'Yes' : ''} |`);
  }
  h('');
  h(`${roles.length} roles, as seeded.`);
  h('');

  h('## 2. Approval Chains (workflow type → rule → ordered steps)');
  h('');
  for (const wt of workflowTypes) {
    h(`### ${wt.code}`);
    if (wt.description) h(wt.description);
    h('');
    if (wt.approvalRules.length === 0) {
      h('_No approval rules seeded for this workflow type._');
      h('');
      continue;
    }
    h('| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |');
    h('|---|---|---|---|---|');
    for (const rule of wt.approvalRules) {
      const amountRange = rule.minAmountKobo != null || rule.maxAmountKobo != null
        ? `${rule.minAmountKobo?.toString() ?? '−∞'} – ${rule.maxAmountKobo?.toString() ?? '+∞'}`
        : '—';
      const steps = rule.steps.map((s) => `${s.stepOrder}. ${s.requiredFunction.code} APPROVE${s.requiresAmountLimitCheck ? ' (amount-limit checked)' : ''}`).join('<br>');
      h(`| ${rule.ruleKey ?? rule.id.slice(0, 8)} | ${rule.scenario ?? '—'} | ${amountRange} | ${rule.initiatorFunction.code} | ${steps || '_none_'} |`);
    }
    h('');
  }

  h('## 3. Capability Grant Matrix (as seeded)');
  h('');
  h(`${permissions.length} grant rows across ${new Set(permissions.map((p) => p.functionCode)).size} platform functions. INITIATE = may start; APPROVE = may authorise; VIEW = read access.`);
  h('');
  h('| Function | Level | Roles | Approval limit (kobo) |');
  h('|---|---|---|---|');
  for (const p of permissions) {
    h(`| ${p.functionCode} | ${p.level} | ${p.roleCode} | ${p.approvalLimitKobo?.toString() ?? '—'} |`);
  }
  h('');

  h('## 4. DB Trigger Inventory (mechanically scanned from prisma/migrations/*/migration.sql)');
  h('');
  h('| Trigger | Table | Function | Enforcement message (from RAISE EXCEPTION, if present) | Introduced in |');
  h('|---|---|---|---|---|');
  for (const t of triggers) {
    h(`| ${t.name} | ${t.table} | ${t.functionName} | ${t.raiseMessage ? t.raiseMessage.replace(/\|/g, '\\|') : '_(no RAISE EXCEPTION text found — verify manually)_'} | ${t.sourceMigration} |`);
  }
  h('');
  h(`${triggers.length} triggers found.`);
  h('');

  h('## 5. Named CHECK / Unique-Index Constraint Inventory (mechanically scanned)');
  h('');
  h('| Constraint | Table | Kind | Expression | Introduced in |');
  h('|---|---|---|---|---|');
  for (const c of constraints) {
    h(`| ${c.name} | ${c.table} | ${c.kind} | \`${c.expression.replace(/\|/g, '\\|').replace(/`/g, "'")}\` | ${c.sourceMigration} |`);
  }
  h('');
  h(`${constraints.length} named constraints/partial-unique-indexes found.`);
  h('');

  h('## 6. Evidence Packs On File (fact, not certification)');
  h('');
  if (evidencePacks.length === 0) {
    h('_No CHECK/M1 evidence-pack files found in the repo root at generation time._');
  } else {
    for (const f of evidencePacks) h(`- \`${f}\``);
  }
  h('');
  h('Cross-reference these against the rows above and against `One17_Governance_Controls_Register_v1.doc`\'s status table to determine VERIFIED / BUILT-PENDING / DECLARED for any given control — that determination is the CEO\'s advisor\'s to make (invariant 45d), never this script\'s.');
  h('');

  h('## 7. API Route Inventory (mechanically scanned from src/**/*.controller.ts — RES-001 CH-03)');
  h('');
  h('Every `@Get`/`@Post`/`@Put`/`@Patch`/`@Delete` decorator found, with the controller file and the nearest preceding `@RequiresCapability` (if any — routes with none are either public by design or gated by a session guard only, per the controller\'s own header comment).');
  h('');
  h('| Verb | Path | Capability gate | Controller file |');
  h('|---|---|---|---|');
  for (const r of routes) {
    h(`| ${r.verb} | \`${r.path}\` | ${r.capability ?? '_(none — see controller comment)_'} | ${r.file} |`);
  }
  h('');
  h(`${routes.length} routes across ${new Set(routes.map((r) => r.file)).size} controller files. This is a raw inventory, not a reachability classification — see CHECK22_EVIDENCE.md's five-bin endpoint triage (RES-001 CH-01) for which of these are UI-reachable, dynamic, feature-flagged, deprecated, or a known defect.`);
  h('');

  const doc = lines.join('\n');

  if (!fs.existsSync(DOCS_DIR)) fs.mkdirSync(DOCS_DIR, { recursive: true });
  const outPath = path.join(DOCS_DIR, `GENERATED_CONTROLS_REGISTER_v${version}.md`);
  fs.writeFileSync(outPath, doc, 'utf8');
  ok(`wrote ${outPath}`);

  const priorPath = version > 1 ? path.join(DOCS_DIR, `GENERATED_CONTROLS_REGISTER_v${version - 1}.md`) : null;
  const diffPath = path.join(DOCS_DIR, `GENERATED_CONTROLS_REGISTER_v${version}.diff.md`);
  const diffText = priorPath && fs.existsSync(priorPath)
    ? diffLines(fs.readFileSync(priorPath, 'utf8'), doc)
    : 'No prior version — this is the baseline (v1).';
  fs.writeFileSync(diffPath, `# Diff: v${version - 1} → v${version}\n\n${diffText}\n`, 'utf8');
  ok(`wrote ${diffPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
