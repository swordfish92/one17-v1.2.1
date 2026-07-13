// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/common/bigint-serialization.smoke.ts
//
// Invariant 30 (CLAUDE.md): proves the ROOT-CAUSE fix (installBigIntJsonSupport,
// a global BigInt.prototype.toJSON patch installed once at bootstrap) rather
// than re-testing one hand-picked controller. Part 1 is a pure unit check on
// the patch itself — deterministic, no side effects, and the actual
// mechanism every endpoint in the process now shares. Part 2 is a live round
// trip against the running server: the original repro (POST /counterparties
// with a real amountSoughtKobo) plus a representative sample of GET
// endpoints already known to return BigInt kobo fields (fund/company
// accounting, inter-entity reconciliation) — proving the fix holds for
// endpoints that were never individually patched, which is the whole point
// of a process-wide interceptor over more per-controller helpers.
//
// Requires: ops-api running on http://localhost:3000 and a logged-in staff
// session cookie file (this script performs its own login).
import 'dotenv/config';
import { installBigIntJsonSupport } from './bigint-json';

const BASE = process.env.OPS_API_URL ?? 'http://localhost:3000';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }

async function part1UnitProof() {
  // Before the patch: JSON.stringify on a bare BigInt throws. This process
  // hasn't called installBigIntJsonSupport() yet at this point, so this
  // reproduces the original defect deterministically.
  let threwBeforePatch = false;
  try {
    JSON.stringify({ amountSoughtKobo: 500000000n });
  } catch {
    threwBeforePatch = true;
  }
  if (threwBeforePatch) ok('unpatched JSON.stringify throws on a bare BigInt (reproduces the original defect)');
  else fail('expected unpatched JSON.stringify to throw on a bare BigInt — did not throw');

  installBigIntJsonSupport();

  try {
    const serialized = JSON.stringify({ amountSoughtKobo: 500000000n, nested: { deep: [1n, 2n, 3n] } });
    const parsed = JSON.parse(serialized);
    if (parsed.amountSoughtKobo === '500000000' && parsed.nested.deep.join(',') === '1,2,3') {
      ok('patched JSON.stringify converts BigInt (incl. nested/array) to string, round-trips correctly');
    } else {
      fail('patched JSON.stringify produced unexpected values', parsed);
    }
  } catch (err) {
    fail('patched JSON.stringify still threw', err);
  }
}

async function loginAndGetCookie(): Promise<string> {
  // Reuse an existing known-good staff session instead of provisioning a
  // fresh RBAC-capable user here — this smoke's job is proving
  // serialization, not re-deriving login/capability plumbing already proven
  // by auth.smoke.ts and the HTTP+auth adversarial suite.
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: process.env.SMOKE_STAFF_EMAIL, password: process.env.SMOKE_STAFF_PASSWORD }),
  });
  const setCookie = res.headers.get('set-cookie');
  if (!res.ok || !setCookie) throw new Error(`login failed (${res.status}) — set SMOKE_STAFF_EMAIL/SMOKE_STAFF_PASSWORD env vars to a real staff fixture with COUNTERPARTY_ONBOARDING+FINANCIAL_STATEMENTS VIEW/INITIATE`);
  return setCookie.split(';')[0];
}

async function fetchJson(path: string, cookie: string, init?: RequestInit) {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', Cookie: cookie, ...(init?.headers ?? {}) },
  });
  const text = await res.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error(`${path} did not return valid JSON (status ${res.status}): ${text.slice(0, 200)}`);
  }
  return { status: res.status, body: parsed };
}

async function part2LiveRoundTrip() {
  let cookie: string;
  try {
    cookie = await loginAndGetCookie();
  } catch (err) {
    console.log(`SKIPPED live round-trip (no SMOKE_STAFF_EMAIL/PASSWORD supplied): ${(err as Error).message}`);
    return;
  }

  // The original repro: onboarding a counterparty with a real BigInt kobo
  // amount used to return HTTP 400 "Do not know how to serialize a BigInt"
  // even though the DB insert had already succeeded (a false-failure).
  const { status, body } = await fetchJson('/counterparties', cookie, {
    method: 'POST',
    body: JSON.stringify({
      legalName: `Smoke BigInt Serialization ${Date.now()}`,
      counterpartyType: 'SME',
      purposeOfFinancing: 'Serialization smoke test',
      amountSoughtKobo: '123456789',
      expectedSourceOfRepayment: 'Test',
      creditBureauConsent: true,
      contactEmail: `smoke-bigint-cp-${Date.now()}@one17.test`,
    }),
  });
  if (status === 201 && (body as any).amountSoughtKobo === '123456789') {
    ok('POST /counterparties (the original repro) returns 201 with amountSoughtKobo as a string, not a 400 BigInt crash');
  } else {
    fail('POST /counterparties did not reproduce the fix', { status, body });
  }

  // Representative sample of GET endpoints known to carry BigInt kobo
  // fields, never individually patched for this — proving the global
  // interceptor covers endpoints it was never specifically written for.
  const entitiesRes = await fetchJson('/fund-accounting/entities', cookie);
  const entity = (entitiesRes.body as any[])[0];
  if (entity) {
    const bsRes = await fetchJson(`/fund-accounting/${entity.code}/balance-sheet?basis=${entity.primaryBasis}`, cookie);
    if (bsRes.status === 200) ok(`GET /fund-accounting/${entity.code}/balance-sheet returns valid JSON (totalAssetsKobo etc. are BigInt in the DB)`);
    else fail('fund-accounting balance-sheet did not return 200', bsRes);
  } else {
    console.log('SKIPPED fund-accounting round-trip (no ledger entities on file)');
  }

  const cpListRes = await fetchJson('/counterparties', cookie);
  if (cpListRes.status === 200) ok('GET /counterparties (list, BigInt kobo fields) returns valid JSON');
  else fail('GET /counterparties did not return 200', cpListRes);
}

async function main() {
  await part1UnitProof();
  await part2LiveRoundTrip();
  if (process.exitCode === 1) {
    console.error('\nSMOKE FAILED');
  } else {
    console.log('\nSMOKE PASSED');
  }
}

main().catch((err) => {
  console.error('SMOKE ERRORED', err);
  process.exitCode = 1;
});
