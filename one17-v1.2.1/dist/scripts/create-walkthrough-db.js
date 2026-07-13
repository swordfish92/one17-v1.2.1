"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const pg_1 = require("pg");
async function main() {
    const url = new URL(process.env.DATABASE_URL);
    const dbName = process.argv[2] || 'one17_walkthrough';
    const adminUrl = new URL(url.toString());
    adminUrl.pathname = '/postgres';
    const client = new pg_1.Client({ connectionString: adminUrl.toString() });
    await client.connect();
    const existing = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [dbName]);
    if (existing.rowCount && existing.rowCount > 0) {
        console.log(`Database "${dbName}" already exists — leaving it as-is.`);
    }
    else {
        await client.query(`CREATE DATABASE "${dbName}"`);
        console.log(`Created database "${dbName}".`);
    }
    await client.end();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
//# sourceMappingURL=create-walkthrough-db.js.map