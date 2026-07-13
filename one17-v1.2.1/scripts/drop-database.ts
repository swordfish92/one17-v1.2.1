import 'dotenv/config';
import { Client } from 'pg';

// Symmetric counterpart to create-walkthrough-db.ts, generalized to take
// any database name (invariant 67a's release QA gate needs to tear down
// its scratch replay database after each run, the same way
// create-walkthrough-db.ts stands one up). Refuses to drop the database
// named in DATABASE_URL itself -- this is a scratch-DB cleanup tool, not
// a way to accidentally wipe whatever the caller's own connection string
// points at.
async function main() {
  const url = new URL(process.env.DATABASE_URL!);
  const dbName = process.argv[2];
  if (!dbName) {
    console.error('Usage: tsx scripts/drop-database.ts <database-name>');
    process.exitCode = 1;
    return;
  }
  const currentDbName = url.pathname.replace(/^\//, '');
  if (dbName === currentDbName) {
    console.error(`Refusing to drop "${dbName}" -- it is the database DATABASE_URL currently points at.`);
    process.exitCode = 1;
    return;
  }

  const adminUrl = new URL(url.toString());
  adminUrl.pathname = '/postgres';
  const client = new Client({ connectionString: adminUrl.toString() });
  await client.connect();
  try {
    const existing = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [dbName]);
    if (!existing.rowCount) {
      console.log(`Database "${dbName}" does not exist -- nothing to drop.`);
      return;
    }
    // Terminate other backends first -- DROP DATABASE fails while any
    // session (e.g. a just-closed Prisma pool not yet fully torn down)
    // still holds a connection to it.
    await client.query('SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = $1 AND pid <> pg_backend_pid()', [dbName]);
    await client.query(`DROP DATABASE "${dbName}"`);
    console.log(`Dropped database "${dbName}".`);
  } finally {
    await client.end();
  }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
