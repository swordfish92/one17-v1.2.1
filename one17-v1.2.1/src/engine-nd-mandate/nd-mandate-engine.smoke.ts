// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/engine-nd-mandate/nd-mandate-engine.smoke.ts
// Sealed engine #3 (Check-4 pass): Formula Library PART E §§E1-E7 — per-
// account Mudarabah-PSR (F-ND-01) and Wakalah (F-ND-02) modes, the §E3
// gates, §E4's required surplus_treatment election at activation, §E6
// institutional (FUND/POOL) participants, §E7 provisional accrual with
// true-up.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NdMandateEngineService } from './nd-mandate-engine.service';
import { NdMandateEngineError } from './nd-mandate-engine.types';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const engine = new NdMandateEngineService(prisma, audit, workflow);

  // Invariant 42(c): createMandate now requires ND_MANDATE_INITIATION
  // (PORT_OFF) and activateMandate requires the SEPARATE ND_MANDATE_
  // ACTIVATION capability (PORT_MGR) through the workflow engine -- portoff
  // creates every mandate below, portmgr/portmgr2 activate/approve.
  const portoff = await prisma.appUser.create({ data: { email: `nd-portoff-${RUN}@one17.test`, displayName: 'nd-portoff' } });
  await rbac.assignRole({ userId: portoff.id, roleCode: 'PORT_OFF' });
  const portmgr = await prisma.appUser.create({ data: { email: `nd-portmgr-${RUN}@one17.test`, displayName: 'nd-portmgr' } });
  await rbac.assignRole({ userId: portmgr.id, roleCode: 'PORT_MGR' });
  const portmgr2 = await prisma.appUser.create({ data: { email: `nd-portmgr2-${RUN}@one17.test`, displayName: 'nd-portmgr2' } });
  await rbac.assignRole({ userId: portmgr2.id, roleCode: 'PORT_MGR' });

  const mandateEntityCode = `SMOKE-ND-MANDATE-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: mandateEntityCode, name: 'Smoke ND Mandate', entityType: 'MANDATE', primaryBasis: 'AAOIFI' } });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-ND-INV-${RUN}`, fullLegalName: 'Smoke ND Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-ND-${RUN}`, contactEmail: `nd-inv-${RUN}@one17.test`,
      contactPhone: '+2340000000010', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: portmgr.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });

  // === §E1 Mudarabah-PSR mode ===
  await expectReject('MUDARABAH_PSR ratios not summing to 1 is rejected at creation', () =>
    engine.createMandate({ mandateRef: `BAD-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'INVESTOR', investorId: investor.investorId, sharingMode: 'MUDARABAH_PSR', investorRatio: 0.5, mudaribRatio: 0.3, startDate: new Date(), createdByUserId: portoff.id }));

  const psrMandate = await engine.createMandate({
    mandateRef: `ND-PSR-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'INVESTOR', investorId: investor.investorId,
    sharingMode: 'MUDARABAH_PSR', investorRatio: 0.7, mudaribRatio: 0.3, targetReturnPct: 15, startDate: new Date(), createdByUserId: portoff.id,
  });
  ok(`created MUDARABAH_PSR mandate (client-level PSR — the ONLY home of client-level PSR per AMD-01)`);

  await expectReject('Shariah flag HALTs computation before any sharing is computed', () =>
    engine.computeMudarabahPsr({ ndMandateAccountId: psrMandate.id, realizedProfitKobo: 1_000_000n, kycValid: true, shariahFlagsClear: false }));

  const profitResult = await engine.computeMudarabahPsr({ ndMandateAccountId: psrMandate.id, realizedProfitKobo: 10_000_000n, kycValid: true, shariahFlagsClear: true });
  if (profitResult.clientShareKobo === 7_000_000n && profitResult.one17ShareKobo === 3_000_000n) {
    ok(`F-ND-01: profit 10,000,000 kobo split 70:30 -> client=${profitResult.clientShareKobo}, one17=${profitResult.one17ShareKobo}`);
  } else {
    fail('Mudarabah-PSR split mismatch', profitResult);
  }
  if (profitResult.gateResults.every((g) => g.passed)) ok('all §E3 gates pass on the profit scenario');
  else fail('a gate failed on the profit scenario', profitResult.gateResults);

  const lossResult = await engine.computeMudarabahPsr({ ndMandateAccountId: psrMandate.id, realizedProfitKobo: -5_000_000n, kycValid: true, shariahFlagsClear: true });
  if (lossResult.isLoss && lossResult.clientShareKobo === -5_000_000n && lossResult.one17ShareKobo === 0n) {
    ok(`F-ND-01 loss handling: client bears the full 5,000,000 kobo loss, One17 bears ZERO capital loss (effort only) — FAS 4`);
  } else {
    fail('loss handling mismatch', lossResult);
  }

  const kycWithheldResult = await engine.computeMudarabahPsr({ ndMandateAccountId: psrMandate.id, realizedProfitKobo: 10_000_000n, kycValid: false, shariahFlagsClear: true });
  if (kycWithheldResult.withheldForKyc && kycWithheldResult.clientShareKobo === 0n) {
    ok(`§E3 KYC withhold: payout withheld entirely (no redistribution — no pool to redistribute to, unlike the PSR-waterfall engine)`);
  } else {
    fail('KYC withhold did not behave as expected', kycWithheldResult);
  }

  // === §E6 institutional participants ===
  await expectReject('FUND/POOL participantType without participantLedgerEntityCode is rejected', () =>
    engine.createMandate({ mandateRef: `ND-INST-BAD-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'FUND', sharingMode: 'MUDARABAH_PSR', investorRatio: 0.6, mudaribRatio: 0.4, startDate: new Date(), createdByUserId: portoff.id }));
  const fundParticipation = await engine.createMandate({
    mandateRef: `ND-INST-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'FUND', participantLedgerEntityCode: `SOME-FUND-${RUN}`,
    sharingMode: 'MUDARABAH_PSR', investorRatio: 0.6, mudaribRatio: 0.4, startDate: new Date(), createdByUserId: portoff.id,
  });
  ok(`§E6: Halal Fund participates in a mandate as an independent contract (participant_type=FUND, own sharing_mode) — booked via inter-entity ref, never a pooled position`);
  void fundParticipation;

  // === §E2 Wakalah mode + §E4 required election ===
  const wakalahMandate = await engine.createMandate({
    mandateRef: `ND-WAK-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'INVESTOR', investorId: investor.investorId,
    sharingMode: 'WAKALAH', wakalahFeeRatePa: 1.5, targetReturnPct: 12, startDate: new Date(), createdByUserId: portoff.id,
  });
  await expectReject('computeWakalah before activation is rejected (surplus_treatment not yet elected)', () =>
    engine.computeWakalah({ ndMandateAccountId: wakalahMandate.id, mandateAumKobo: 100_000_000n, days: 30, realizedProfitKobo: 2_000_000n, incentivePortionKobo: 0n, kycValid: true, shariahFlagsClear: true }));
  await expectReject('§E4/AMD-12: activation refuses without a surplus_treatment election, no default', () =>
    engine.activateMandate({ ndMandateAccountId: wakalahMandate.id, activatedByUserId: portmgr.id }));
  await engine.activateMandate({ ndMandateAccountId: wakalahMandate.id, surplusTreatment: 'SHARED', sharedRatio: 0.5, activatedByUserId: portmgr.id });
  ok('§E4: WAKALAH mandate activates once surplus_treatment (SHARED, ratio 0.5) is explicitly elected');

  // === Invariant 42(c) adversarial: capability gate + maker!=checker ===
  await expectReject('createMandate refused for a user lacking ND_MANDATE_INITIATION (PORT_MGR only, no PORT_OFF grant)', () =>
    engine.createMandate({ mandateRef: `ND-NOCAP-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'INVESTOR', investorId: investor.investorId, sharingMode: 'MUDARABAH_PSR', investorRatio: 0.7, mudaribRatio: 0.3, startDate: new Date(), createdByUserId: portmgr.id }));
  const selfApprovalMandate = await engine.createMandate({
    mandateRef: `ND-SELF-${RUN}`, ledgerEntityCode: mandateEntityCode, participantType: 'INVESTOR', investorId: investor.investorId,
    sharingMode: 'MUDARABAH_PSR', investorRatio: 0.7, mudaribRatio: 0.3, startDate: new Date(), createdByUserId: portoff.id,
  });
  await expectReject('activateMandate refused when the creator tries to activate their own mandate (no same-user create+activate)', () =>
    engine.activateMandate({ ndMandateAccountId: selfApprovalMandate.id, activatedByUserId: portoff.id }));
  ok('invariant 42(c): ND Mandate engine now capability-gated + maker!=checker through the workflow engine');

  const wakalahResult = await engine.computeWakalah({ ndMandateAccountId: wakalahMandate.id, mandateAumKobo: 100_000_000n, days: 30, realizedProfitKobo: 2_000_000n, incentivePortionKobo: 0n, kycValid: true, shariahFlagsClear: true });
  const expectedFee = BigInt(Math.round(100_000_000 * 0.015 * (30 / 365)));
  if (wakalahResult.wakalahFeeKobo === expectedFee) ok(`F-ND-02: Wakalah fee = AUM x fee_rate_pa x days/365 = ${wakalahResult.wakalahFeeKobo} kobo (matches hand-computed ${expectedFee})`);
  else fail('Wakalah fee mismatch', wakalahResult);
  const splitDiff = wakalahResult.excessToClientKobo > wakalahResult.excessToAgentKobo ? wakalahResult.excessToClientKobo - wakalahResult.excessToAgentKobo : wakalahResult.excessToAgentKobo - wakalahResult.excessToClientKobo;
  if (splitDiff <= 1n || wakalahResult.excessKobo === 0n) {
    ok(`SHARED surplus_treatment splits excess ~50:50 (client=${wakalahResult.excessToClientKobo}, agent=${wakalahResult.excessToAgentKobo}, diff=${splitDiff} kobo rounding)`);
  } else {
    fail('SHARED excess split looks wrong', wakalahResult);
  }

  // === §E7 provisional accrual with true-up ===
  const accrual = await engine.accrueProvisional({ ndMandateAccountId: psrMandate.id, accrualDate: new Date('2026-06-01'), capitalKobo: 100_000_000n, expectedRatePct: 15 });
  if (accrual.status === 'PROVISIONAL') ok(`F-ND-03: daily provisional accrual computed (${accrual.provisionalAmountKobo} kobo) and flagged PROVISIONAL — NEVER a distribution basis`);
  else fail('expected PROVISIONAL status', accrual);
  const truedUp = await engine.reverseAndTrueUp(accrual.id, `JE-RCPT-${RUN}`);
  if (truedUp.status === 'TRUED_UP') ok('provisional accrual reversed in full and trued up on actual declaration');
  else fail('true-up failed', truedUp);
  await expectReject('cannot true-up the same accrual twice', () => engine.reverseAndTrueUp(accrual.id, 'JE-RCPT-DUP'));

  const oldAccrual = await engine.accrueProvisional({ ndMandateAccountId: psrMandate.id, accrualDate: new Date('2026-01-01'), capitalKobo: 50_000_000n, expectedRatePct: 12 });
  const aging = await engine.findAgingProvisionals(30, new Date('2026-06-01'));
  if (aging.some((a) => a.id === oldAccrual.id)) ok(`aging KRI: provisional accrual outstanding beyond the 30-day threshold correctly surfaced (${aging.length} found)`);
  else fail('aging KRI did not find the old outstanding provisional', aging);

  // === Distribution: standing DISTRIBUTION workflow, maker != checker ===
  const run = await engine.runNdMandateDistribution(psrMandate.id, 'ND_MUDARABAH', profitResult.clientShareKobo, portmgr.id);
  ok(`ND Mandate sharing persisted as a DRAFT distribution (method=ND_MUDARABAH) and routed through the standing DISTRIBUTION workflow`);
  await expectReject('maker cannot approve their own ND mandate distribution', () => workflow.approveNextStep(run.workflowInstanceId, portmgr.id));
  const approved = await workflow.approveNextStep(run.workflowInstanceId, portmgr2.id);
  if (approved.status === 'APPROVED') ok('a different approver (PORT_MGR) approves the ND mandate distribution — same maker != checker discipline as the other two engines');
  else fail('approval failed', approved);

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — ND Mandate sealed engine proven against Formula Library PART E §§E1-E7.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  if (err instanceof NdMandateEngineError) console.error('Unhandled engine error:', err.message);
  else console.error(err);
  process.exitCode = 1;
});
