"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const pg_1 = require("pg");
const child_process_1 = require("child_process");
const path_1 = require("path");
async function main() {
    const dbName = process.argv[2] || 'one17_smoke_scratch';
    const url = new URL(process.env.DATABASE_URL);
    const currentDbName = url.pathname.replace(/^\//, '');
    if (dbName === currentDbName) {
        console.error(`Refusing to reset "${dbName}" -- it is the database DATABASE_URL currently points at (looks like your real dev DB, not a scratch target).`);
        process.exitCode = 1;
        return;
    }
    const adminUrl = new URL(url.toString());
    adminUrl.pathname = '/postgres';
    const admin = new pg_1.Client({ connectionString: adminUrl.toString() });
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
    }
    finally {
        await admin.end();
    }
    const scratchUrl = new URL(url.toString());
    scratchUrl.pathname = `/${dbName}`;
    const scratchDatabaseUrl = scratchUrl.toString();
    const repoRoot = (0, path_1.resolve)(__dirname, '..');
    console.log('Running migrations...');
    (0, child_process_1.execSync)('npx prisma migrate deploy', { cwd: repoRoot, stdio: 'inherit', env: { ...process.env, DATABASE_URL: scratchDatabaseUrl } });
    console.log('Running the production seed...');
    (0, child_process_1.execSync)('npm run db:seed', { cwd: repoRoot, stdio: 'inherit', env: { ...process.env, DATABASE_URL: scratchDatabaseUrl } });
    const redactedUrl = new URL(scratchDatabaseUrl);
    if (redactedUrl.password)
        redactedUrl.password = '****';
    console.log(`\n"${dbName}" is migrated, seeded, and ready.`);
    console.log(`Point DATABASE_URL at it (same host/user, database "${dbName}") before re-running the smoke suite, e.g.:\n  DATABASE_URL="${redactedUrl.toString()}" npm run smoke:all`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
//# sourceMappingURL=reset-dev-db.js.map