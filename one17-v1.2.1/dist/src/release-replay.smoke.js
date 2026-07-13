"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const activation_console_service_1 = require("./activation-console/activation-console.service");
const bigint_json_1 = require("./common/bigint-json");
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    (0, bigint_json_1.installBigIntJsonSupport)();
    let app;
    try {
        app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ['error', 'warn'] });
        ok('NestFactory.create(AppModule) resolved the full dependency graph against the scratch DB');
    }
    catch (err) {
        fail('NestFactory.create(AppModule) failed to resolve the dependency graph against the scratch DB', err);
        console.log('\nSMOKE FAILED — fresh-install replay (invariant 67a).');
        process.exitCode = 1;
        return;
    }
    try {
        const activationConsole = app.get(activation_console_service_1.ActivationConsoleService);
        const status = await activationConsole.getStatus();
        if (status.steps.length !== 9) {
            fail(`Activation Console reported ${status.steps.length} step(s), expected 9`);
        }
        else {
            ok('Activation Console reports all 9 steps (Identity/People/Books/Taxes/Products/Risk/Rails/Data/Proof)');
        }
        const step1 = status.steps[0];
        if (step1?.code !== 'IDENTITY') {
            fail(`Step 1 is "${step1?.code}", expected IDENTITY`);
        }
        else {
            ok(`Step 1 renders: "${step1.label}" — ${step1.status} (${step1.detail})`);
        }
        const invalidSteps = status.steps.filter((s) => !['RED', 'AMBER', 'GREEN'].includes(s.status));
        if (invalidSteps.length > 0) {
            fail(`${invalidSteps.length} step(s) did not resolve to a valid RED/AMBER/GREEN status`, invalidSteps);
        }
        else {
            ok('Every step probe resolved cleanly against the scratch DB (no probe threw)');
        }
        ok(`Readiness score on a freshly migrated+seeded database: ${status.readinessScorePct}% (expected low/non-100 — this is a fresh install, not an activated one)`);
    }
    catch (err) {
        fail('ActivationConsoleService.getStatus() threw against the scratch DB', err);
    }
    finally {
        await app.close();
        ok('app.close() shut down cleanly');
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — fresh-install replay (invariant 67a): boot + Activation Console step 1 against a scratch DB.`);
    process.exitCode = failed ? 1 : 0;
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=release-replay.smoke.js.map