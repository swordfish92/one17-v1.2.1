"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const SRC_ROOT = (0, node_path_1.join)(__dirname, '..', 'src');
const ALLOWED_FILES = new Set([
    (0, node_path_1.join)(SRC_ROOT, 'subscription', 'subscription.service.ts'),
]);
function walk(dir, out = []) {
    for (const entry of (0, node_fs_1.readdirSync)(dir)) {
        const full = (0, node_path_1.join)(dir, entry);
        const stat = (0, node_fs_1.statSync)(full);
        if (stat.isDirectory())
            walk(full, out);
        else if (entry.endsWith('.ts'))
            out.push(full);
    }
    return out;
}
function main() {
    const violations = [];
    for (const file of walk(SRC_ROOT)) {
        if (file.endsWith('.smoke.ts'))
            continue;
        if (ALLOWED_FILES.has(file))
            continue;
        const content = (0, node_fs_1.readFileSync)(file, 'utf-8');
        if (/productAccount\.create\s*\(/.test(content))
            violations.push(file);
    }
    if (violations.length > 0) {
        console.error('FAIL: raw ProductAccount writes found outside SubscriptionService (invariant 42a):');
        for (const v of violations)
            console.error(`  - ${v}`);
        process.exitCode = 1;
        return;
    }
    console.log('OK: no raw ProductAccount writes outside SubscriptionService or *.smoke.ts fixtures (invariant 42a).');
}
main();
//# sourceMappingURL=check-productaccount-write-guard.js.map