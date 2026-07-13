import 'dotenv/config';
import { Client } from 'pg';

// Invariant 34 (fixed date, 6-Jul-2026): dedicated walkthrough database,
// created fresh (not a dump of the messy dev DB, which is full of SMOKE_/
// smoke-test residue by now) — migrated + seeded the same way the M1
// RUNBOOK documents production provisioning (fresh schema, idempotent
// prisma/seed.ts, zero synthetic residue), so "clean restore" is satisfied
// by construction rather than by scrubbing an already-dirty copy.
async function main() {
  const url = new URL(process.env.DATABASE_URL!);
  const dbName = process.argv[2] || 'one17_walkthrough';
  const adminUrl = new URL(url.toString());
  adminUrl.pathname = '/postgres';

  const client = new Client({ connectionString: adminUrl.toString() });
  await client.connect();
  const existing = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [dbName]);
  if (existing.rowCount && existing.rowCount > 0) {
    console.log(`Database "${dbName}" already exists — leaving it as-is.`);
  } else {
    await client.query(`CREATE DATABASE "${dbName}"`);
    console.log(`Created database "${dbName}".`);
  }
  await client.end();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
