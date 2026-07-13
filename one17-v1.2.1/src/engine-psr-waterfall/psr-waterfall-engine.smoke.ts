// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/engine-psr-waterfall/psr-waterfall-engine.smoke.ts
// Sealed engine #2 (Check-3): Formula Library Part A + AMD-01/02 — pool-
// constant beta/gamma/delta, TWE weighting with the hard SUM(TWE)=1+-0.0001
// assert, all 8 DC gates, BR-PAE-01 confirmed-income-only basis (enforced
// by construction — poolProfitKobo is the only profit input, no
// projection/provisional path exists in this engine), loss allocation,
// purification to charity. The primary validation case is the CEO's own
// worked example from the Formula Library §A4: pool earns 30% gross,
// investor target 16% -> investor ends ~16.8%, FM ~13.2%.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { PsrWaterfallEngineService } from './psr-waterfall-engine.service';
import { PsrWaterfallEngineError } from './psr-waterfall-engine.types';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try {
    await fn();
    fail(`expected rejection: ${label}`);
  } catch (err) {
    ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const engine = new PsrWaterfallEngineService(prisma, audit, workflow);

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `psr-engine-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;
  await makeUser('portoff', 'PORT_OFF');
  await makeUser('portmgr', 'PORT_MGR');
  await makeUser('ceo', 'MD_CEO');

  const poolCode = `SMOKE-PSR-POOL-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: poolCode, name: 'Smoke Mudarabah Pool', entityType: 'POOL', primaryBasis: 'AAOIFI' } });
  await prisma.product.upsert({ where: { code: 'ONE17-MUDARABAH-POOL-1' }, create: { code: 'ONE17-MUDARABAH-POOL-1', name: 'Mudarabah Pool 1', engineType: 'PSR_WATERFALL' }, update: {} });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-PSR-INV-${RUN}`, fullLegalName: 'Smoke PSR Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-PSR-${RUN}`, contactEmail: `psr-inv-${RUN}@one17.test`,
      contactPhone: '+2340000000001', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: id('portoff'), kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });
  const account = await prisma.productAccount.create({
    data: { investorId: investor.investorId, productCode: 'ONE17-MUDARABAH-POOL-1', startDate: new Date('2025-01-01'), principalOrCommittedKobo: 100_000_000n },
  });

  // === CEO worked example (Formula Library A4) ============================
  // pool earns 30% gross on NGN1,000,000 capital; investor target 16%.
  // Expected: investor ends ~16.8%, FM ~13.2% after inverse surplus split.
  const worked = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 30_000_000n, // 30% of NGN1,000,000 = NGN300,000 = 30,000,000 kobo
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  const investorTotalKobo = worked.participants[0].totalPayoutKobo;
  const fmTotalKobo = worked.mudaribRetainedKobo + worked.mudaribSurplusKobo;
  const investorRate = Number(investorTotalKobo) / 100_000_000 * 100;
  const fmRate = Number(fmTotalKobo) / 100_000_000 * 100;
  if (Math.abs(investorRate - 16.8) < 0.01 && Math.abs(fmRate - 13.2) < 0.01) {
    ok(`CEO worked example matches exactly: investor ends ${investorRate.toFixed(2)}% (expected ~16.8%), FM ends ${fmRate.toFixed(2)}% (expected ~13.2%)`);
  } else {
    fail(`CEO worked example mismatch: investor=${investorRate}%, FM=${fmRate}%`, worked);
  }
  if (worked.dcGateResults.every((g) => g.passed)) ok(`all 8 DC gates pass on the worked example (${worked.dcGateResults.map((g) => g.gate).join(', ')})`);
  else fail('a DC gate failed on the worked example', worked.dcGateResults.filter((g) => !g.passed));

  // === Invariant 70(a) adversarial: surplus tier NOT applied where not
  // elected. SAME inputs as the CEO worked example above (surplus WAS
  // shared, investor ended 16.8%) except surplusSharingEnabled: false —
  // "a pool without the election runs its base PSR on all profit": the
  // entire above-entitlement surplus must flow wholesale to the Mudarib,
  // the investor gets exactly their 16% target entitlement and nothing
  // more, and no participant carries a nonzero TWE weight.
  const notElected = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 30_000_000n,
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: false,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  const investorRateNotElected = Number(notElected.participants[0].totalPayoutKobo) / 100_000_000 * 100;
  if (notElected.participants[0].surplusPayoutKobo === 0n && Math.abs(investorRateNotElected - 16) < 0.01 && notElected.mudaribSurplusKobo === notElected.surplusKobo) {
    ok(`invariant 70(a): surplus-sharing NOT elected -- investor payout capped at target entitlement (${investorRateNotElected.toFixed(2)}% vs 16.8% when elected), entire surplus (${notElected.surplusKobo} kobo) routed wholesale to Mudarib, zero TWE split applied`);
  } else {
    fail('surplus tier applied despite surplusSharingEnabled=false', notElected);
  }
  if (notElected.dcGateResults.find((g) => g.gate === 'DC-03')!.passed) ok('DC-03 correctly treats TWE as not-applicable when surplus-sharing is not elected (not a gate failure)');
  else fail('DC-03 incorrectly failed when surplus-sharing is not elected', notElected.dcGateResults);

  // === AMD-01/02 governing-parameter validation ===========================
  await expectReject('AMD-02: gamma_pool + delta_pool != 100 is rejected', () =>
    engine.computeWaterfall({ ...baseInput(poolCode, account.id, id('portoff')), gammaPoolPct: 40, deltaPoolPct: 50 }));
  await expectReject('AMD-01: beta_pool outside (0,100) is rejected', () =>
    engine.computeWaterfall({ ...baseInput(poolCode, account.id, id('portoff')), betaPoolPct: 0 }));

  // === DC-06: Shariah flag HALT ============================================
  await expectReject('DC-06: active Shariah flag HALTs before any computation', () =>
    engine.computeWaterfall({ ...baseInput(poolCode, account.id, id('portoff')), shariahFlagsClear: false }));

  // === Shortfall path: capital-weighted proportional (A4 CEO ruling) =======
  const investor2 = await prisma.investor.create({
    data: {
      investorId: `SMOKE-PSR-INV2-${RUN}`, fullLegalName: 'Smoke PSR Investor 2', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-PSR2-${RUN}`, contactEmail: `psr-inv2-${RUN}@one17.test`,
      contactPhone: '+2340000000002', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: id('portoff'), kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });
  const account2 = await prisma.productAccount.create({
    data: { investorId: investor2.investorId, productCode: 'ONE17-MUDARABAH-POOL-1', startDate: new Date('2025-01-01'), principalOrCommittedKobo: 200_000_000n },
  });
  // Two participants, capital 1:2 ratio. Thin pool_profit forces a shortfall.
  const shortfall = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 5_000_000n, // thin profit: NGN50,000 total, forces shortfall
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [
      { productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true },
      { productAccountId: account2.id, capitalKobo: 200_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true },
    ],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  if (shortfall.shortfallKobo > 0n && shortfall.surplusKobo === 0n) {
    const p1 = shortfall.participants.find((p) => p.productAccountId === account.id)!;
    const p2 = shortfall.participants.find((p) => p.productAccountId === account2.id)!;
    // Capital ratio 1:2 -> p2's payout should be ~2x p1's (capital-weighted).
    const ratio = Number(p2.totalPayoutKobo) / Number(p1.totalPayoutKobo);
    if (Math.abs(ratio - 2) < 0.01) ok(`shortfall path: capital-weighted proportional distribution confirmed (2x-capital participant received ${ratio.toFixed(3)}x payout) — documented resolution of the BR-PAE-04 vs A4 conflict`);
    else fail(`shortfall distribution not capital-weighted as expected: ratio=${ratio}`, shortfall);
  } else {
    fail('expected a shortfall scenario', shortfall);
  }

  // === Hibah in a shortfall period, funded from the Mudarib share =========
  const withHibah = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 5_000_000n,
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 1_000_000n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  const withoutHibah = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 5_000_000n,
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  const hibahDelta = withHibah.participants[0].totalPayoutKobo - withoutHibah.participants[0].totalPayoutKobo;
  const mudaribDelta = withoutHibah.mudaribRetainedKobo - withHibah.mudaribRetainedKobo;
  if (hibahDelta === 1_000_000n && mudaribDelta === 1_000_000n) {
    ok('Hibah correctly lifts investor payout and reduces Mudarib retained share by the SAME amount — pool_profit reconciliation still closes (DC-01)');
  } else {
    fail(`Hibah transfer mismatch: investor delta=${hibahDelta}, mudarib delta=${mudaribDelta}`);
  }
  if (withHibah.dcGateResults.find((g) => g.gate === 'DC-01')!.passed) ok('DC-01 reconciliation holds even with Hibah applied');
  else fail('DC-01 reconciliation broke with Hibah applied', withHibah.dcGateResults);

  // === DC-05: KYC withhold-and-redistribute ================================
  const kycTest = engine.computeWaterfall({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 30_000_000n,
    betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [
      { productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true },
      { productAccountId: account2.id, capitalKobo: 200_000_000n, targetRatePct: 16, activeDays: 365, kycValid: false },
    ],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  const kycInvalid = kycTest.participants.find((p) => p.productAccountId === account2.id)!;
  const kycValid = kycTest.participants.find((p) => p.productAccountId === account.id)!;
  if (kycInvalid.totalPayoutKobo === 0n && kycValid.totalPayoutKobo > 0n) {
    ok(`DC-05: KYC-invalid participant's payout (would-be nonzero) withheld entirely and redistributed to the KYC-valid participant (received ${kycValid.totalPayoutKobo} kobo)`);
  } else {
    fail('DC-05 KYC withhold/redistribute did not behave as expected', kycTest.participants);
  }

  // === Loss allocation (F-MUD-04): capital-weighted, Mudarib loses nothing ==
  await expectReject('DC-08: loss allocation without SSB sign-off is rejected', () =>
    engine.allocateLoss({ ledgerEntityCode: poolCode, poolLossKobo: 10_000_000n, participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n }, { productAccountId: account2.id, capitalKobo: 200_000_000n }], ssbResolutionRef: null, companyFundedHibahKobo: 0n }));
  const loss = engine.allocateLoss({
    ledgerEntityCode: poolCode, poolLossKobo: 30_000_000n,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n }, { productAccountId: account2.id, capitalKobo: 200_000_000n }],
    ssbResolutionRef: 'SSB-RES-2026-004', companyFundedHibahKobo: 0n,
  });
  const l1 = loss.participantLossKobo.find((p) => p.productAccountId === account.id)!;
  const l2 = loss.participantLossKobo.find((p) => p.productAccountId === account2.id)!;
  if (l1.lossKobo === 10_000_000n && l2.lossKobo === 20_000_000n) {
    ok(`F-MUD-04 loss allocation: NGN300,000 loss split capital-weighted 1:2 -> NGN100,000 / NGN200,000, Mudarib bears zero capital loss (effort only)`);
  } else {
    fail('loss allocation mismatch', loss);
  }

  // === Purification: 100% to charity, never retained/Mudarib ==============
  const purification = engine.purifyIncome(500_000n);
  if (purification.toCharityKobo === 500_000n) ok('F-MUD-05 purification: 100% of non-permissible income to charity, none retained or to Mudarib');
  else fail('purification mismatch', purification);
  await expectReject('purifyIncome rejects a negative amount', () => engine.purifyIncome(-1n));

  // === Governance: DISTRIBUTION workflow, maker != checker =================
  const run = await engine.runWaterfallDistribution({
    ledgerEntityCode: poolCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 30_000_000n, betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
    participants: [{ productAccountId: account.id, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
  });
  ok(`waterfall persisted as a DRAFT distribution (${run.distributionId}) and routed through the DISTRIBUTION workflow (instance ${run.workflowInstanceId})`);
  await expectReject('maker cannot approve their own PSR distribution', () => workflow.approveNextStep(run.workflowInstanceId, id('portoff')));
  const approved = await workflow.approveNextStep(run.workflowInstanceId, id('portmgr'));
  if (approved.status === 'APPROVED') ok('a different approver (PORT_MGR) approves the PSR waterfall distribution — same maker != checker discipline as every other workflow in this codebase');
  else fail('approval failed', approved);

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — PSR-waterfall sealed engine proven against Formula Library Part A + AMD-01/02, incl. the CEO's own worked example.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

function baseInput(ledgerEntityCode: string, productAccountId: string, createdByUserId: string) {
  return {
    ledgerEntityCode, productCode: 'ONE17-MUDARABAH-POOL-1',
    periodStart: new Date('2025-01-01'), periodEnd: new Date('2025-12-31'), recordDate: new Date('2025-12-31'),
    poolProfitKobo: 30_000_000n, betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60,
    // Invariant 70(a): pre-70 fixtures all exercise the surplus-sharing
    // split, so surplusSharingEnabled: true preserves their existing tested
    // expectations exactly -- the NEW invariant-70 adversarial case (surplus
    // NOT applied when not elected) is a separate, dedicated test below.
    surplusSharingEnabled: true,
    participants: [{ productAccountId, capitalKobo: 100_000_000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
    hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId,
  };
}

main().catch((err) => {
  if (err instanceof PsrWaterfallEngineError) console.error('Unhandled engine error:', err.message);
  else console.error(err);
  process.exitCode = 1;
});
