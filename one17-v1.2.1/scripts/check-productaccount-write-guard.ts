// Invariant 42(a) (CHECK9): "Raw prisma.productAccount.create outside this
// service becomes seed/migration-loader-only -- add a lint/test guard."
// Run with: npx tsx scripts/check-productaccount-write-guard.ts
// Exits non-zero (and CI-failable) if any non-smoke, non-seed source file
// other than SubscriptionService itself writes a ProductAccount row
// directly -- the governed front door (initiateSubscription/
// approveSubscription) is the only legitimate live-application writer.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC_ROOT = join(__dirname, '..', 'src');
const ALLOWED_FILES = new Set([
  join(SRC_ROOT, 'subscription', 'subscription.service.ts'),
]);

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (entry.endsWith('.ts')) out.push(full);
  }
  return out;
}

function main() {
  const violations: string[] = [];
  for (const file of walk(SRC_ROOT)) {
    if (file.endsWith('.smoke.ts')) continue; // fixture setup, legitimate
    if (ALLOWED_FILES.has(file)) continue;
    const content = readFileSync(file, 'utf-8');
    if (/productAccount\.create\s*\(/.test(content)) violations.push(file);
  }
  if (violations.length > 0) {
    console.error('FAIL: raw ProductAccount writes found outside SubscriptionService (invariant 42a):');
    for (const v of violations) console.error(`  - ${v}`);
    process.exitCode = 1;
    return;
  }
  console.log('OK: no raw ProductAccount writes outside SubscriptionService or *.smoke.ts fixtures (invariant 42a).');
}

main();
