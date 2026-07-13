"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bigint_json_1 = require("./bigint-json");
const BASE = process.env.OPS_API_URL ?? 'http://localhost:3000';
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function part1UnitProof() {
    let threwBeforePatch = false;
    try {
        JSON.stringify({ amountSoughtKobo: 500000000n });
    }
    catch {
        threwBeforePatch = true;
    }
    if (threwBeforePatch)
        ok('unpatched JSON.stringify throws on a bare BigInt (reproduces the original defect)');
    else
        fail('expected unpatched JSON.stringify to throw on a bare BigInt — did not throw');
    (0, bigint_json_1.installBigIntJsonSupport)();
    try {
        const serialized = JSON.stringify({ amountSoughtKobo: 500000000n, nested: { deep: [1n, 2n, 3n] } });
        const parsed = JSON.parse(serialized);
        if (parsed.amountSoughtKobo === '500000000' && parsed.nested.deep.join(',') === '1,2,3') {
            ok('patched JSON.stringify converts BigInt (incl. nested/array) to string, round-trips correctly');
        }
        else {
            fail('patched JSON.stringify produced unexpected values', parsed);
        }
    }
    catch (err) {
        fail('patched JSON.stringify still threw', err);
    }
}
async function loginAndGetCookie() {
    const res = await fetch(`${BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: process.env.SMOKE_STAFF_EMAIL, password: process.env.SMOKE_STAFF_PASSWORD }),
    });
    const setCookie = res.headers.get('set-cookie');
    if (!res.ok || !setCookie)
        throw new Error(`login failed (${res.status}) — set SMOKE_STAFF_EMAIL/SMOKE_STAFF_PASSWORD env vars to a real staff fixture with COUNTERPARTY_ONBOARDING+FINANCIAL_STATEMENTS VIEW/INITIATE`);
    return setCookie.split(';')[0];
}
async function fetchJson(path, cookie, init) {
    const res = await fetch(`${BASE}${path}`, {
        ...init,
        headers: { 'Content-Type': 'application/json', Cookie: cookie, ...(init?.headers ?? {}) },
    });
    const text = await res.text();
    let parsed;
    try {
        parsed = JSON.parse(text);
    }
    catch (err) {
        throw new Error(`${path} did not return valid JSON (status ${res.status}): ${text.slice(0, 200)}`);
    }
    return { status: res.status, body: parsed };
}
async function part2LiveRoundTrip() {
    let cookie;
    try {
        cookie = await loginAndGetCookie();
    }
    catch (err) {
        console.log(`SKIPPED live round-trip (no SMOKE_STAFF_EMAIL/PASSWORD supplied): ${err.message}`);
        return;
    }
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
    if (status === 201 && body.amountSoughtKobo === '123456789') {
        ok('POST /counterparties (the original repro) returns 201 with amountSoughtKobo as a string, not a 400 BigInt crash');
    }
    else {
        fail('POST /counterparties did not reproduce the fix', { status, body });
    }
    const entitiesRes = await fetchJson('/fund-accounting/entities', cookie);
    const entity = entitiesRes.body[0];
    if (entity) {
        const bsRes = await fetchJson(`/fund-accounting/${entity.code}/balance-sheet?basis=${entity.primaryBasis}`, cookie);
        if (bsRes.status === 200)
            ok(`GET /fund-accounting/${entity.code}/balance-sheet returns valid JSON (totalAssetsKobo etc. are BigInt in the DB)`);
        else
            fail('fund-accounting balance-sheet did not return 200', bsRes);
    }
    else {
        console.log('SKIPPED fund-accounting round-trip (no ledger entities on file)');
    }
    const cpListRes = await fetchJson('/counterparties', cookie);
    if (cpListRes.status === 200)
        ok('GET /counterparties (list, BigInt kobo fields) returns valid JSON');
    else
        fail('GET /counterparties did not return 200', cpListRes);
}
async function main() {
    await part1UnitProof();
    await part2LiveRoundTrip();
    if (process.exitCode === 1) {
        console.error('\nSMOKE FAILED');
    }
    else {
        console.log('\nSMOKE PASSED');
    }
}
main().catch((err) => {
    console.error('SMOKE ERRORED', err);
    process.exitCode = 1;
});
//# sourceMappingURL=bigint-serialization.smoke.js.map