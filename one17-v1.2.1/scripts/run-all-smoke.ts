import { readdirSync } from 'fs';
import { join, relative } from 'path';
import { spawnSync } from 'child_process';

// Invariant 67(a) (CHECK21): the v1.0 release QA gate's "full smoke
// suite" leg. Every prior CHECK tranche's evidence pack re-ran only the
// smoke files touched by that tranche's own changes (the right scope for
// a feature tranche) -- a RELEASE gate is different: it is the one point
// where every *.smoke.ts file in the codebase runs together, proving the
// whole platform, not just this tranche's slice of it. Two files are
// deliberately excluded: app-boot.smoke.ts and release-replay.smoke.ts
// both boot the real AppModule via NestFactory, which hits the tsx/
// esbuild reflection-metadata gap documented at the top of
// app-boot.smoke.ts -- they run separately, compiled, via `npm run
// smoke:boot` / `npm run smoke:release-replay`.
const SRC_ROOT = join(__dirname, '..', 'src');
const EXCLUDED = new Set(['app-boot.smoke.ts', 'release-replay.smoke.ts']);

// RES-001 (CHECK23, v1.0.2): live-investigated (this pass) which of the
// dev-DB-only smoke failures against a bare migrate+seed DB were a real
// seed.ts bug (systemSeedUser was found via a plain findFirst instead of
// find-or-create -- fixed) versus genuinely POST-ACTIVATION platform
// state that a bare seed deliberately never creates ("park, don't
// invent" -- the same discipline this codebase enforces everywhere).
// These 4 remain, each traced to a SPECIFIC governed action, not "the
// dev DB happens to have extra stuff":
//   - kri-engine.smoke.ts: needs an ACTIVE risk_appetite_matrix_version
//     with real numeric thresholds -- seed.ts ships it DRAFT/NULL,
//     "awaiting Board activation" (AMD-12), by design.
//   - audit-trail-viewer.smoke.ts: needs a COMPANY ledger_entity row --
//     created by the Activation Console's own activation sequence
//     (CHECK20), not seed.ts. A bare-seeded DB is explicitly
//     PRE-activation state.
//   - migration.smoke.ts: needs real TPL_01-13 workbook-sourced CSV
//     staging data loaded via MigrationService's own ingestion pipeline
//     -- structurally not seed.ts content at all.
//   - regulatory-reporting.smoke.ts: needs regulator_template rows --
//     staff-configured post-activation content (Reporting Spec §6), never
//     auto-seeded.
//   - pms.smoke.ts: needs an ACTIVE emolument_structure row for the
//     (PORTFOLIO / SENIOR / "Snr Associate 1" / notch 2) tuple its own
//     setup phase activates. Confirmed live (first real run of the
//     ephemeral-DB Leg 1, CHECK23): prisma/seed.ts seeds kpi_definition/
//     kpi_weight_matrix DRAFT rows for this org-unit/tier ("slot A"), but
//     never creates a single emolumentStructure row anywhere -- the
//     file's own header comment names the real source as "TPL_09" (the
//     same migration-replay CSV ingestion category as TPL_01-13,
//     structurally not seed.ts content).
// Pass --exclude-post-activation (release-qa-gate.ps1's ephemeral-DB Leg 1
// does) to skip these 5 -- every other caller (a developer running
// `npm run smoke:all` locally, any prior CHECK tranche's own re-run)
// gets the unchanged, full 79-file set.
const POST_ACTIVATION_ONLY = new Set([
  'kri-engine.smoke.ts',
  'audit-trail-viewer.smoke.ts',
  'migration.smoke.ts',
  'regulatory-reporting.smoke.ts',
  'pms.smoke.ts',
]);
const excludePostActivation = process.argv.includes('--exclude-post-activation');

function findSmokeFiles(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findSmokeFiles(full));
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.smoke.ts') &&
      !EXCLUDED.has(entry.name) &&
      !(excludePostActivation && POST_ACTIVATION_ONLY.has(entry.name))
    ) {
      files.push(full);
    }
  }
  return files;
}

function main() {
  const files = findSmokeFiles(SRC_ROOT).sort();
  console.log(`Found ${files.length} smoke file(s) (excluding the 2 compiled-boot files run separately${excludePostActivation ? `, plus ${POST_ACTIVATION_ONLY.size} post-activation-only files (--exclude-post-activation)` : ''}).\n`);

  const results: { file: string; ok: boolean; durationMs: number }[] = [];
  for (const file of files) {
    const relPath = relative(join(__dirname, '..'), file);
    const startedAt = Date.now();
    console.log(`--- ${relPath} ---`);
    // A single quoted command string (not an argv array) under shell:true --
    // on Windows, an argv array gets re-joined and re-tokenized by cmd.exe,
    // which breaks on the space in this repo's own path ("...One17
    // Enterprise Resource Platform\platform-app\..."). Quoting the path
    // inside one command string sidesteps that re-tokenization entirely.
    const res = spawnSync(`npx tsx "${file}"`, { stdio: 'inherit', shell: true });
    const durationMs = Date.now() - startedAt;
    const ok = res.status === 0;
    results.push({ file: relPath, ok, durationMs });
    console.log(`${ok ? 'OK' : 'FAILED'} (${(durationMs / 1000).toFixed(1)}s)\n`);
  }

  const failed = results.filter((r) => !r.ok);
  console.log('='.repeat(70));
  console.log(`Smoke suite: ${results.length - failed.length}/${results.length} passed.`);
  if (failed.length > 0) {
    console.log('\nFailed:');
    for (const f of failed) console.log(`  - ${f.file}`);
  }
  const totalSec = (results.reduce((sum, r) => sum + r.durationMs, 0) / 1000).toFixed(1);
  console.log(`Total time: ${totalSec}s`);

  process.exitCode = failed.length > 0 ? 1 : 0;
}

main();
