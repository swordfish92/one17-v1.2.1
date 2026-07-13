"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const child_process_1 = require("child_process");
const SRC_ROOT = (0, path_1.join)(__dirname, '..', 'src');
const EXCLUDED = new Set(['app-boot.smoke.ts', 'release-replay.smoke.ts']);
const POST_ACTIVATION_ONLY = new Set([
    'kri-engine.smoke.ts',
    'audit-trail-viewer.smoke.ts',
    'migration.smoke.ts',
    'regulatory-reporting.smoke.ts',
    'pms.smoke.ts',
]);
const excludePostActivation = process.argv.includes('--exclude-post-activation');
function findSmokeFiles(dir) {
    const entries = (0, fs_1.readdirSync)(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const full = (0, path_1.join)(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...findSmokeFiles(full));
        }
        else if (entry.isFile() &&
            entry.name.endsWith('.smoke.ts') &&
            !EXCLUDED.has(entry.name) &&
            !(excludePostActivation && POST_ACTIVATION_ONLY.has(entry.name))) {
            files.push(full);
        }
    }
    return files;
}
function main() {
    const files = findSmokeFiles(SRC_ROOT).sort();
    console.log(`Found ${files.length} smoke file(s) (excluding the 2 compiled-boot files run separately${excludePostActivation ? `, plus ${POST_ACTIVATION_ONLY.size} post-activation-only files (--exclude-post-activation)` : ''}).\n`);
    const results = [];
    for (const file of files) {
        const relPath = (0, path_1.relative)((0, path_1.join)(__dirname, '..'), file);
        const startedAt = Date.now();
        console.log(`--- ${relPath} ---`);
        const res = (0, child_process_1.spawnSync)(`npx tsx "${file}"`, { stdio: 'inherit', shell: true });
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
        for (const f of failed)
            console.log(`  - ${f.file}`);
    }
    const totalSec = (results.reduce((sum, r) => sum + r.durationMs, 0) / 1000).toFixed(1);
    console.log(`Total time: ${totalSec}s`);
    process.exitCode = failed.length > 0 ? 1 : 0;
}
main();
//# sourceMappingURL=run-all-smoke.js.map