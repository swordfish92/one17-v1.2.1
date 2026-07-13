// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/parameters/parameters.smoke.ts
// Proves AMD-01/02 pool constants validate (service layer AND database
// CHECK constraint, independently), and that AMD-03's pool-fee policy is
// now a governed, versioned PARAMETER — not a hard block — per CEO
// instruction 2026-07-04.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ParameterService } from './parameters.service';
import { ProductService } from '../product/product.service';

async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    console.error(`FAIL (expected rejection): ${label}`);
    process.exitCode = 1;
  } catch (err) {
    console.log(
      `OK (rejected as expected): ${label} — ${(err as Error).message.split('\n')[0]}`,
    );
  }
}

async function expectSucceed<T>(
  label: string,
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    const result = await fn();
    console.log(`OK (succeeded as expected): ${label}`);
    return result;
  } catch (err) {
    console.error(`FAIL (expected success): ${label}`, err);
    process.exitCode = 1;
    return undefined;
  }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const parameters = new ParameterService(prisma, audit, delegation);
  const product = new ProductService(prisma, audit, delegation);

  const RUN = Date.now();

  const ceo = await prisma.appUser.create({
    data: { email: `params-ceo-${RUN}@one17.test`, displayName: 'params-ceo' },
  });
  await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
  // PARAMETERS: SUPER_ADMIN holds INITIATE (creates/sets), MD_CEO holds
  // APPROVE — two different capabilities, so two different test users.
  const admin = await prisma.appUser.create({
    data: { email: `params-admin-${RUN}@one17.test`, displayName: 'params-admin' },
  });
  await rbac.assignRole({ userId: admin.id, roleCode: 'SUPER_ADMIN' });
  // Invariant 44(b): activateProduct now ALSO requires Shariah approval on
  // file, a separate capability from PARAMETERS entirely.
  const shariahRev = await prisma.appUser.create({
    data: { email: `params-shariahrev-${RUN}@one17.test`, displayName: 'params-shariahrev' },
  });
  await rbac.assignRole({ userId: shariahRev.id, roleCode: 'SHARIAH_REV' });
  // Invariant 60(b) (CHECK15): ParameterService.createProduct()'s own
  // internal gate moved from PARAMETERS to PRODUCT_SETUP_INITIATION
  // (PORT_MGR) -- a DIFFERENT capability from setPoolParameters/
  // activateProduct below, which stay on PARAMETERS (SUPER_ADMIN/MD_CEO,
  // untouched). This file is ParameterService's own direct smoke test, not
  // the full workflow-chain one (see product-factory.smoke.ts for that).
  const portMgr = await prisma.appUser.create({
    data: { email: `params-portmgr-${RUN}@one17.test`, displayName: 'params-portmgr' },
  });
  await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });

  const productCode = `SMOKE-MUDARABAH-POOL-1-${RUN}`;

  await expectReject(
    'CEO alone (no PRODUCT_SETUP_INITIATION INITIATE) cannot create a product',
    () =>
      parameters.createProduct({
        code: productCode,
        name: 'Smoke Test Mudarabah Pool',
        engineType: 'PSR_WATERFALL',
        createdByUserId: ceo.id,
      }),
  );

  await expectSucceed(
    'PORT_MGR (holds PRODUCT_SETUP_INITIATION INITIATE) creates MUDARABAH_POOL product',
    () =>
      parameters.createProduct({
        code: productCode,
        name: 'Smoke Test Mudarabah Pool',
        engineType: 'PSR_WATERFALL',
        createdByUserId: portMgr.id,
      }),
  );

  // AMD-01/02 defaults: 60:40 base split (β_pool=0.40), inverse 40:60 surplus.
  const v1 = await expectSucceed(
    'set pool constants (60:40 base, 40:60 surplus, fees blocked)',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
      }),
  );
  if (v1 && v1.feesAllowedOnPool !== false) {
    console.error(
      'FAIL: feesAllowedOnPool should default to false (AMD-03 current position)',
    );
    process.exitCode = 1;
  } else {
    console.log('OK: feesAllowedOnPool defaults to false');
  }

  await expectReject('service rejects psrPoolMudaribShare outside (0,1)', () =>
    parameters.setPoolParameters({
      productCode,
      createdByUserId: admin.id,
      psrPoolMudaribShare: 1.5,
    }),
  );
  await expectReject('service rejects surplus shares not summing to 1.0', () =>
    parameters.setPoolParameters({
      productCode,
      createdByUserId: admin.id,
      surplusInvestorShare: 0.5,
      surplusMudaribShare: 0.6,
    }),
  );

  // Bypass the service entirely to prove the DATABASE, not just
  // ParameterService, rejects an invalid row — same "not just an app-layer
  // check" standard as audit_trail's trigger.
  await expectReject(
    'database CHECK constraint rejects invalid psr share (service bypassed)',
    () =>
      prisma.productParameters.create({
        data: {
          productCode,
          version: 999,
          psrPoolMudaribShare: 1.2,
          createdByUserId: admin.id,
        },
      }),
  );
  await expectReject(
    'database CHECK constraint rejects mismatched surplus sum (service bypassed)',
    () =>
      prisma.productParameters.create({
        data: {
          productCode,
          version: 998,
          surplusInvestorShare: 0.5,
          surplusMudaribShare: 0.6,
          createdByUserId: admin.id,
        },
      }),
  );

  // AMD-03 as amended: fee policy is a versioned parameter, not a hard
  // block — simulating a future Board-approved SEC-driven policy change.
  const v2 = await expectSucceed(
    'new parameter VERSION flips feesAllowedOnPool to true (simulated future SEC change)',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true,
      }),
  );
  const current = await parameters.getCurrentParameters(productCode);
  if (
    current &&
    current.version === v2?.version &&
    current.feesAllowedOnPool === true
  ) {
    console.log(
      `OK: current parameters are version ${current.version} with feesAllowedOnPool=true`,
    );
  } else {
    console.error(
      'FAIL: getCurrentParameters did not return the latest version with the new fee policy',
    );
    process.exitCode = 1;
  }
  const history = await prisma.productParameters.findMany({
    where: { productCode },
    orderBy: { version: 'asc' },
  });
  if (
    history.length === 2 &&
    history[0].feesAllowedOnPool === false &&
    history[1].feesAllowedOnPool === true
  ) {
    console.log(
      'OK: version history preserved — v1 (fees blocked) is still on record alongside v2 (fees allowed)',
    );
  } else {
    console.error(
      'FAIL: expected exactly 2 versions with the fee-policy change visible in history',
    );
    process.exitCode = 1;
  }

  // Governance gate (CEO instruction 2026-07-04): on an ACTIVE product,
  // changing feesAllowedOnPool or a PSR constant requires BOTH
  // boardResolutionRef and ssbResolutionRef on the new version.
  await prisma.product.update({
    where: { code: productCode },
    data: { status: 'ACTIVE' },
  });

  await expectReject(
    'fee-flip on an ACTIVE product without Board/SSB refs fails',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false, // flips back from v2's true — still a change
      }),
  );
  await expectReject(
    'PSR-constant change on an ACTIVE product without Board/SSB refs fails',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.35, // different from v1/v2's 0.4 — a change
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true, // unchanged from v2, but psr change alone should still gate
      }),
  );
  await expectReject(
    'same fee-flip fails with only ONE of the two refs populated',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
        boardResolutionRef: 'BOARD-RES-2026-021',
        // ssbResolutionRef intentionally omitted
      }),
  );
  const v3 = await expectSucceed(
    'same fee-flip succeeds once BOTH refs are populated',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
        boardResolutionRef: 'BOARD-RES-2026-021',
        ssbResolutionRef: 'SSB-RES-2026-009',
      }),
  );
  if (
    v3 &&
    v3.version === 3 &&
    v3.feesAllowedOnPool === false &&
    v3.boardResolutionRef &&
    v3.ssbResolutionRef
  ) {
    console.log('OK: version 3 recorded with both governance refs populated');
  } else {
    console.error(
      'FAIL: version 3 did not persist as expected with governance refs',
    );
    process.exitCode = 1;
  }
  // A no-op resubmission (unchanged values) should NOT require refs — only
  // an actual change triggers the gate.
  await expectSucceed(
    'unchanged resubmission on an ACTIVE product does not require refs',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
      }),
  );

  // UAT-AMD-03R: "with refs, version effective-dated and fee accrual then
  // permitted on pool" — v3 above only proved the GATE by flipping fees
  // false->true->false; this closes the loop on the actual permission
  // direction (false -> true) under full governance while ACTIVE.
  const v4 = await expectSucceed(
    'fee accrual on the pool is permitted once BOTH refs back the flip to true',
    () =>
      parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true,
        boardResolutionRef: 'BOARD-RES-2026-022',
        ssbResolutionRef: 'SSB-RES-2026-010',
      }),
  );
  if (v4?.feesAllowedOnPool === true && v4.effectiveFrom) {
    console.log(
      `OK: version ${v4.version} is effective-dated (${v4.effectiveFrom.toISOString()}) with feesAllowedOnPool=true — fee accrual now permitted on this pool`,
    );
  } else {
    console.error(
      'FAIL: expected a governed version with feesAllowedOnPool=true and a populated effectiveFrom',
    );
    process.exitCode = 1;
  }

  // --- AMD-12 rule 2: product activation gate — refuses with named missing
  // governed parameters, never a generic failure. ---
  const productCode2 = `SMOKE-MUDARABAH-POOL-2-${RUN}`;
  await parameters.createProduct({
    code: productCode2,
    name: 'Smoke Test Mudarabah Pool 2 (activation gate)',
    engineType: 'PSR_WATERFALL',
    createdByUserId: portMgr.id,
  });
  await expectReject(
    'AMD-12: activation refused for a product with zero parameter versions, naming what is missing',
    () => parameters.activateProduct(productCode2, ceo.id),
  );
  await parameters.setPoolParameters({
    productCode: productCode2,
    createdByUserId: admin.id,
    // deliberately no approvedByUserId yet
    psrPoolMudaribShare: 0.4,
    surplusInvestorShare: 0.4,
    surplusMudaribShare: 0.6,
  });
  await expectReject(
    'AMD-12: activation refused while the current parameter version is unapproved',
    () => parameters.activateProduct(productCode2, ceo.id),
  );
  await parameters.setPoolParameters({
    productCode: productCode2,
    createdByUserId: admin.id,
    approvedByUserId: ceo.id,
    psrPoolMudaribShare: 0.4,
    surplusInvestorShare: 0.4,
    surplusMudaribShare: 0.6,
  });
  await expectReject(
    'AMD-12/invariant 44(b): activation still refused -- governed parameters alone do not satisfy the Shariah-approval gate',
    () => parameters.activateProduct(productCode2, ceo.id),
  );
  await product.approveProductShariah({
    productCode: productCode2,
    ssbResolutionRef: 'SMOKE-PARAMS-SSB-RES',
    approvedByUserId: shariahRev.id,
  });
  await expectSucceed(
    'AMD-12/invariant 44(b): activation succeeds once parameters exist, are approved, PSR constants are populated, AND Shariah approval is on file',
    () => parameters.activateProduct(productCode2, ceo.id),
  );

  // Cleanup.
  await prisma.productParameters.deleteMany({ where: { productCode } });
  await prisma.product.delete({ where: { code: productCode } });
  await prisma.productParameters.deleteMany({
    where: { productCode: productCode2 },
  });
  await prisma.product.delete({ where: { code: productCode2 } });
  await prisma.userRole.deleteMany({
    where: { userId: { in: [ceo.id, admin.id, shariahRev.id, portMgr.id] } },
  });
  await prisma.appUser.deleteMany({
    where: { id: { in: [ceo.id, admin.id, shariahRev.id, portMgr.id] } },
  });

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
