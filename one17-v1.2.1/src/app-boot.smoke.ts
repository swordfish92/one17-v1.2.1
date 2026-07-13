// Run with: npm run build && node dist/src/app-boot.smoke.js
// -- DELIBERATELY NOT `npx tsx src/app-boot.smoke.ts` like every other
// *.smoke.ts in this codebase. tsx (esbuild) does not emit usable
// `design:paramtypes` reflection metadata for classes with many
// constructor parameters -- confirmed live: under tsx, NestJS's DI
// silently injects `undefined` for SchedulerService's 15-parameter
// constructor (Reflect.getMetadata('design:paramtypes', SchedulerService)
// returns undefined entirely) with NO resolution error, and the failure
// only surfaces later when that undefined value is dereferenced. Every
// OTHER smoke test in this codebase is immune to this because none of
// them ever call NestFactory.create() -- they construct services directly
// (`new StatementService(prisma, letterhead)`), bypassing Nest's
// reflection-based DI and esbuild's metadata gap entirely. Compiling via
// the project's real `tsc`-based `nest build` and running the emitted JS
// with plain `node` is the only invocation that reflects what actually
// runs in production (`npm run start:dev` / the deployed Windows Service
// both go through the same tsc-based compiler, never esbuild).
//
// Invariant 43(e) (CEO directive, 9-Jul-2026): a full-application boot
// check. Every other *.smoke.ts in this codebase constructs only the
// service(s) under test directly (e.g. `new StatementService(prisma,
// letterhead)`) — none of them ever call NestFactory.create(AppModule), so
// none of them can catch a missing @Module() import. That gap was real:
// StatementModule was missing its LetterheadModule import for an unknown
// number of prior tranches, and every tranche's full smoke suite still
// reported green, because nothing in the suite ever resolved the app's
// actual dependency graph. This file closes that blind spot — it boots the
// real app exactly as `npm run start:dev` would, over the real DB, and
// proves the whole module tree wires up before any other check runs.
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { installBigIntJsonSupport } from './common/bigint-json';

let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  installBigIntJsonSupport();

  let app: INestApplication;
  try {
    // The failure mode this guards against is a DI resolution error thrown
    // here (UnknownDependenciesException etc.) — the exact shape of the
    // StatementModule/LetterheadService bug.
    // logger scoped to error/warn only -- keeps this file's output as terse
    // as every other smoke test's; confirmed via a live A/B run that the
    // logger option itself has no bearing on the tsx/esbuild metadata gap
    // documented above (both a full-logger and a logger:false run failed
    // identically under tsx; both succeeded identically under tsc+node).
    app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
    ok('NestFactory.create(AppModule) resolved every module\'s full dependency graph without error');
  } catch (err) {
    fail('NestFactory.create(AppModule) failed to resolve the dependency graph', err);
    console.log(`\nSMOKE FAILED — Full-application boot check (invariant 43e).`);
    process.exitCode = 1;
    return;
  }

  try {
    // Port 0 -- OS-assigned ephemeral port, so this never collides with a
    // real dev server already listening on 3000.
    await app.listen(0);
    const url = await app.getUrl();
    ok(`app.listen() brought up the HTTP layer on an ephemeral port (${url})`);

    const res = await fetch(`${url}/version`);
    if (res.ok) {
      const body = await res.json();
      ok(`GET /version returned ${res.status} (commit: ${body.commit}) -- confirms the HTTP pipeline (guards/interceptors/filters) is wired end-to-end, not just DI`);
    } else {
      fail(`GET /version returned unexpected status ${res.status}`);
    }
  } catch (err) {
    fail('app.listen() or the health-endpoint request failed', err);
  } finally {
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
