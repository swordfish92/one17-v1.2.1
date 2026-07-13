"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bigint_json_1 = require("./common/bigint-json");
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    (0, bigint_json_1.installBigIntJsonSupport)();
    let app;
    try {
        app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ['error', 'warn'] });
        ok('NestFactory.create(AppModule) resolved every module\'s full dependency graph without error');
    }
    catch (err) {
        fail('NestFactory.create(AppModule) failed to resolve the dependency graph', err);
        console.log(`\nSMOKE FAILED — Full-application boot check (invariant 43e).`);
        process.exitCode = 1;
        return;
    }
    try {
        await app.listen(0);
        const url = await app.getUrl();
        ok(`app.listen() brought up the HTTP layer on an ephemeral port (${url})`);
        const res = await fetch(`${url}/version`);
        if (res.ok) {
            const body = await res.json();
            ok(`GET /version returned ${res.status} (commit: ${body.commit}) -- confirms the HTTP pipeline (guards/interceptors/filters) is wired end-to-end, not just DI`);
        }
        else {
            fail(`GET /version returned unexpected status ${res.status}`);
        }
    }
    catch (err) {
        fail('app.listen() or the health-endpoint request failed', err);
    }
    finally {
        await app.close();
        ok('app.close() shut down cleanly');
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Full-application boot check (invariant 43e) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=app-boot.smoke.js.map