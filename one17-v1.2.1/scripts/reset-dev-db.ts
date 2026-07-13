import 'dotenv/config';
import { Client } from 'pg';
import { execSync } from 'child_process';
import { resolve } from 'path';

// Closes a residue class that has independently cost real investigation
// time three times across this engagement (most recently CHECK21's
// release QA gate): several *.smoke.ts fixtures use fixed identifiers
// safe for exactly one run per database lifetime, and the shared dev DB
// (`one17_platform`) has been reused across ~20 CHECK tranches without
// ever being reset, so a second run of the same file collides.
//
// This does NOT touch one17_platform or one17_walkthrough -- those carry
// real accumulated history (CEO dogfooding, demo data) that must not be
// casually destroyed. It stands up a THIRD, disposable database
// (default one17_smoke_scratch) -- drop if it exists, recreate, migrate,
// seed -- so "get back to a genuinely clean DB before re-running the
// full smoke suite" is one command, never a manual decision about
// whether it's safe to wipe the database other work depends on.
//
// Usage: npx tsx scripts/reset-dev-db.ts [database-name]
// Then:  DATABASE_URL=<same host/user, database-name> npm run smoke:all
// (see RUNBOOK.md's "Resetting the smoke-suite scratch DB" section for
// the full one-command incantation).
async function main() {
  const dbName = process.argv[2] || 'one17_smoke_scratch';
  const url = new URL(process.env.DATABASE_URL!);
  const currentDbName = url.pathname.replace(/^\//, '');
  if (dbName === currentDbName) {
    console.error(`Refusing to reset "${dbName}" -- it is the database DATABASE_URL currently points at (looks like your real dev DB, not a scratch target).`);
    process.exitCode = 1;
    return;
  }

  const adminUrl = new URL(url.toString());
  adminUrl.pathname = '/postgres';
  const admin = new Client({ connectionString: adminUrl.toString() });
  await admin.connect();
  try {
    const existing = await admin.query('SELECT 1 FROM pg_database WHERE datname = $1', [dbName]);
    if (existing.rowCount) {
      console.log(`Dropping existing "${dbName}"...`);
      await admin.query('SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = $1 AND pid <> pg_backend_pid()', [dbName]);
      await admin.query(`DROP DATABASE "${dbName}"`);
    }
    console.log(`Creating "${dbName}"...`);
    await admin.query(`CREATE DATABASE "${dbName}"`);
  } finally {
    await admin.end();
  }

  const scratchUrl = new URL(url.toString());
  scratchUrl.pathname = `/${dbName}`;
  const scratchDatabaseUrl = scratchUrl.toString();
  const repoRoot = resolve(__dirname, '..');

  console.log('Running migrations...');
  execSync('npx prisma migrate deploy', { cwd: repoRoot, stdio: 'inherit', env: { ...process.env, DATABASE_URL: scratchDatabaseUrl } });

  console.log('Running the production seed...');
  execSync('npm run db:seed', { cwd: repoRoot, stdio: 'inherit', env: { ...process.env, DATABASE_URL: scratchDatabaseUrl } });

  const redactedUrl = new URL(scratchDatabaseUrl);
  if (redactedUrl.password) redactedUrl.password = '****';
  console.log(`\n"${dbName}" is migrated, seeded, and ready.`);
  console.log(`Point DATABASE_URL at it (same host/user, database "${dbName}") before re-running the smoke suite, e.g.:\n  DATABASE_URL="${redactedUrl.toString()}" npm run smoke:all`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
