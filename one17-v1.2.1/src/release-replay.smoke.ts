// Run with: npm run smoke:release-replay (build + node dist/src/...) --
// same tsx/esbuild reflection-metadata gap documented at the top of
// src/app-boot.smoke.ts applies here too (this file also boots the real
// AppModule via NestFactory), so it is NOT run via `npx tsx` directly.
//
// Invariant 67(a) (CEO directive, 9-Jul-2026 -- CHECK21, the v1.0 release
// QA gate): "FRESH-INSTALL REPLAY from the bundle itself onto a scratch
// DB (install -> migrate -> seed -> boot -> Activation Console renders
// step 1) -- a release that hasn't installed itself from its own bundle
// doesn't ship." scripts/release-qa-gate.ps1 points DATABASE_URL at a
// scratch database it has already migrated + seeded before invoking this
// file -- this file's own job is just the last two legs: boot the
// compiled app against that scratch DB, then prove the Activation
// Console's own probes render step 1 (IDENTITY) live against a database
// that has NEVER been touched by anything except migrate+seed -- the
// exact state a real customer's first boot is in.
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { ActivationConsoleService } from './activation-console/activation-console.service';
import { installBigIntJsonSupport } from './common/bigint-json';

let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  installBigIntJsonSupport();

  let app: INestApplication;
  try {
    app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
    ok('NestFactory.create(AppModule) resolved the full dependency graph against the scratch DB');
  } catch (err) {
    fail('NestFactory.create(AppModule) failed to resolve the dependency graph against the scratch DB', err);
    console.log('\nSMOKE FAILED — fresh-install replay (invariant 67a).');
    process.exitCode = 1;
    return;
  }

  try {
    const activationConsole = app.get(ActivationConsoleService);
    const status = await activationConsole.getStatus();

    if (status.steps.length !== 9) {
      fail(`Activation Console reported ${status.steps.length} step(s), expected 9`);
    } else {
      ok('Activation Console reports all 9 steps (Identity/People/Books/Taxes/Products/Risk/Rails/Data/Proof)');
    }

    const step1 = status.steps[0];
    if (step1?.code !== 'IDENTITY') {
      fail(`Step 1 is "${step1?.code}", expected IDENTITY`);
    } else {
      ok(`Step 1 renders: "${step1.label}" — ${step1.status} (${step1.detail})`);
    }

    // Every probe must resolve to a real color, never throw and never
    // silently omit a step — this is what "renders" means for a console
    // whose whole design point is "never a self-attested checkbox."
    const invalidSteps = status.steps.filter((s) => !['RED', 'AMBER', 'GREEN'].includes(s.status));
    if (invalidSteps.length > 0) {
      fail(`${invalidSteps.length} step(s) did not resolve to a valid RED/AMBER/GREEN status`, invalidSteps);
    } else {
      ok('Every step probe resolved cleanly against the scratch DB (no probe threw)');
    }

    ok(`Readiness score on a freshly migrated+seeded database: ${status.readinessScorePct}% (expected low/non-100 — this is a fresh install, not an activated one)`);
  } catch (err) {
    fail('ActivationConsoleService.getStatus() threw against the scratch DB', err);
  } finally {
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
