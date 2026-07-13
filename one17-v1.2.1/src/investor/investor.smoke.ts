// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor.smoke.ts
// Exercises SRS §6.1's Onboarding Flow A end to end for both an
// UNRESTRICTED mandate (no Shariah review needed) and a RESTRICTED one
// (Shariah review required before activation), plus the Manual Screening
// Procedure §2/§4/§5 gates and the AMD-01 mandate-ratio scope rule.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { NotificationService } from '../notification/notification.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { InvestorService } from './investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';

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

// Manual Screening Procedure §3's six-item checklist, digitized as
// ScreeningChecklistItem config rows (seeded in seed.ts) — every screening
// event recordScreening accepts must cover all of them.
const FULL_CHECKLIST = [
  { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
  { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
  { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
  { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
  { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
  { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));

  const RUN = Date.now();
  const emailFor = (name: string) => `inv-${name}-${RUN}@one17.test`;

  const users = new Map<string, { id: string }>();
  const makeUser = async (email: string, roleCode: string) => {
    const user = await prisma.appUser.create({
      data: { email, displayName: email },
    });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(email, user);
    return user;
  };
  const id = (email: string) => users.get(email)!.id;

  await makeUser(emailFor('finadmin'), 'FIN_ADMIN');
  await makeUser(emailFor('compliance'), 'COMPLIANCE');
  await makeUser(emailFor('ceo'), 'MD_CEO');
  await makeUser(emailFor('ceo-deputy'), 'MD_CEO'); // approves the delegation grant below (maker≠checker vs. inv-ceo, the grantor)
  await makeUser(emailFor('compliance-senior'), 'COMPLIANCE'); // will receive delegated countersign authority
  await makeUser(emailFor('portmgr'), 'PORT_MGR');
  await makeUser(emailFor('shariah'), 'SHARIAH_REV');

  const investorIdsCreated: string[] = [];
  const mandateInvestorIds: string[] = [];
  const workflowInstanceIds: string[] = [];
  const delegationIds: string[] = [];

  // --- Flow A, UNRESTRICTED mandate: onboard -> screen -> KYC approve ->
  // mandate -> activate (no Shariah review required). ---
  const investor1 = await expectSucceed(
    'onboard investor 1 (UNRESTRICTED path)',
    () =>
      investors.onboard({
        fullLegalName: 'Amina Yusuf',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0001',
        contactEmail: `amina.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000001',
        registeredAddress: '1 Smoke Test Close, Abuja',
        sourceOfFunds: 'Salary income',
        onboardedByUserId: id(emailFor('finadmin')),
      }),
  );
  if (investor1) investorIdsCreated.push(investor1.investorId);

  if (investor1) {
    await expectReject(
      'KYC submission blocked without an AML risk rating (Onboarding Design Stage 5)',
      () =>
        investors.submitForKycApproval(
          investor1.investorId,
          id(emailFor('finadmin')),
        ),
    );

    // HIGH tier (1-year expiry) so the existing kycExpiryAlerts(400) window
    // assertion below still finds it — LOW/MEDIUM (3y/2y) would fall
    // outside a 400-day window entirely.
    await expectSucceed(
      'set investor 1 AML risk rating to HIGH (1-year KYC tier)',
      () =>
        investors.setAmlRiskRating(
          investor1.investorId,
          'HIGH',
          id(emailFor('finadmin')),
        ),
    );

    await expectReject(
      'KYC submission blocked without any screening record',
      () =>
        investors.submitForKycApproval(
          investor1.investorId,
          id(emailFor('finadmin')),
        ),
    );

    await expectReject(
      'Manual Screening Procedure §3: incomplete checklist (missing PEP + adverse media) is rejected',
      () =>
        investors.recordScreening({
          investorId: investor1.investorId,
          listsChecked: FULL_CHECKLIST.filter(
            (c) =>
              c.itemCode !== 'PEP_DETERMINATION' &&
              c.itemCode !== 'ADVERSE_MEDIA',
          ),
          searchTermsUsed: 'Amina Yusuf',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('compliance')),
        }),
    );

    await expectSucceed(
      'COMPLIANCE (different person) records NO_MATCH screening (full checklist)',
      () =>
        investors.recordScreening({
          investorId: investor1.investorId,
          listsChecked: FULL_CHECKLIST,
          searchTermsUsed: 'Amina Yusuf',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('compliance')),
        }),
    );

    const onboardingWf = await expectSucceed(
      'submit investor 1 for KYC approval',
      () =>
        investors.submitForKycApproval(
          investor1.investorId,
          id(emailFor('finadmin')),
        ),
    );
    if (onboardingWf) {
      workflowInstanceIds.push(onboardingWf.id);
      const kycApproved = await expectSucceed(
        'COMPLIANCE approves KYC (maker≠checker via engine)',
        () =>
          investors.approveKyc(
            onboardingWf.id,
            id(emailFor('compliance')),
          ),
      );
      if (kycApproved?.kycStatus !== 'KYC_COMPLETE') {
        console.error('FAIL: expected kycStatus KYC_COMPLETE');
        process.exitCode = 1;
      }
    }

    await expectReject(
      'AMD-01: service rejects ratios on a non-DIRECT_DEAL mandate',
      () =>
        investors.setupMandate({
          investorId: investor1.investorId,
          mandateType: 'UNRESTRICTED',
          targetReturnRate: 0.15,
          investorBaseRatio: 0.6,
          mudaribBaseRatio: 0.4,
          effectiveDate: new Date(),
          approvedByUserId: id(emailFor('portmgr')),
        }),
    );
    await expectReject(
      'AMD-01: database CHECK also rejects it (service bypassed)',
      () =>
        prisma.investorMandate.create({
          data: {
            investorId: investor1.investorId,
            mandateType: 'UNRESTRICTED',
            targetReturnRate: 0.15,
            investorBaseRatio: 0.6,
            mudaribBaseRatio: 0.4,
            effectiveDate: new Date(),
            approvedByUserId: id(emailFor('portmgr')),
          },
        }),
    );

    await expectSucceed('setup UNRESTRICTED mandate (no ratios)', () =>
      investors.setupMandate({
        investorId: investor1.investorId,
        mandateType: 'UNRESTRICTED',
        targetReturnRate: 0.15,
        effectiveDate: new Date(),
        approvedByUserId: id(emailFor('portmgr')),
      }),
    );
    mandateInvestorIds.push(investor1.investorId);

    await expectReject(
      'UNRESTRICTED mandate does not need/accept a Shariah review request',
      () =>
        investors.requestMandateShariahReview(
          investor1.investorId,
          id(emailFor('finadmin')),
        ),
    );

    await expectSucceed(
      'activate investor 1 (UNRESTRICTED — no Shariah gate)',
      () => investors.activate(investor1.investorId),
    );

    await expectReject(
      'SRS §4.1.4: re-activating an already-ACTIVE investor is rejected (forward-only transitions)',
      () => investors.activate(investor1.investorId),
    );

    const alertsWide = await prisma.investor.count({
      where: { investorId: investor1.investorId },
    });
    const dueSoon = await investors.kycExpiryAlerts(400);
    const dueImmediately = await investors.kycExpiryAlerts(1);
    if (
      alertsWide === 1 &&
      dueSoon.some((i) => i.investorId === investor1.investorId) &&
      !dueImmediately.some((i) => i.investorId === investor1.investorId)
    ) {
      console.log(
        'OK: kycExpiryAlerts(400) finds the 1-year-out expiry; kycExpiryAlerts(1) does not',
      );
    } else {
      console.error('FAIL: kycExpiryAlerts window behavior unexpected');
      process.exitCode = 1;
    }
  }

  // --- Screener == onboarder rule (Manual Screening Procedure §2). ---
  const investor2 = await expectSucceed(
    'onboard investor 2 (self-screening test)',
    () =>
      investors.onboard({
        fullLegalName: 'Chinedu Okafor',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0002',
        contactEmail: `chinedu.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000002',
        registeredAddress: '2 Smoke Test Close, Abuja',
        sourceOfFunds: 'Business income',
        onboardedByUserId: id(emailFor('finadmin')),
      }),
  );
  if (investor2) {
    investorIdsCreated.push(investor2.investorId);
    await expectReject(
      'same person onboarded AND screens, no countersigner — rejected',
      () =>
        investors.recordScreening({
          investorId: investor2.investorId,
          listsChecked: FULL_CHECKLIST,
          searchTermsUsed: 'Chinedu Okafor',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('finadmin')),
        }),
    );
    await expectReject(
      'same-person screening with a non-MD_CEO countersigner — rejected',
      () =>
        investors.recordScreening({
          investorId: investor2.investorId,
          listsChecked: FULL_CHECKLIST,
          searchTermsUsed: 'Chinedu Okafor',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('finadmin')),
          countersignerUserId: id(emailFor('portmgr')),
        }),
    );
    await expectSucceed(
      'same-person screening WITH an MD_CEO countersigner — succeeds',
      () =>
        investors.recordScreening({
          investorId: investor2.investorId,
          listsChecked: FULL_CHECKLIST,
          searchTermsUsed: 'Chinedu Okafor',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('finadmin')),
          countersignerUserId: id(emailFor('ceo')),
        }),
    );
  }

  // --- CEO instruction 2026-07-04: countersign authority must be delegable
  // to Compliance/a senior officer, not hard-coded to CEO. Prove a
  // Compliance officer WITHOUT standing SCREENING_COUNTERSIGN authority is
  // rejected, then that a CEO-granted delegation lets them countersign. ---
  const investor2b = await expectSucceed(
    'onboard investor 2b (delegated-countersign test)',
    () =>
      investors.onboard({
        fullLegalName: 'Ngozi Adeyemi',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0002B',
        contactEmail: `ngozi.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000021',
        registeredAddress: '2B Smoke Test Close, Abuja',
        sourceOfFunds: 'Salary income',
        onboardedByUserId: id(emailFor('finadmin')),
      }),
  );
  if (investor2b) {
    investorIdsCreated.push(investor2b.investorId);

    await expectReject(
      'Compliance officer WITHOUT delegated authority cannot countersign',
      () =>
        investors.recordScreening({
          investorId: investor2b.investorId,
          listsChecked: FULL_CHECKLIST,
          searchTermsUsed: 'Ngozi Adeyemi',
          result: 'NO_MATCH',
          screenerUserId: id(emailFor('finadmin')),
          countersignerUserId: id(emailFor('compliance-senior')),
        }),
    );

    const grant = await expectSucceed(
      'CEO delegates SCREENING_COUNTERSIGN to senior Compliance officer',
      () =>
        delegation.requestGrant({
          functionCode: 'SCREENING_COUNTERSIGN',
          delegateUserId: id(emailFor('compliance-senior')),
          delegatedByUserId: id(emailFor('ceo')),
          reason:
            'Reduce CEO bottleneck on screening countersignatures as the institution grows',
        }),
    );
    if (grant) {
      delegationIds.push(grant.id);
      const grantWf = await expectSucceed(
        'DELEGATION_GRANT workflow initiated for the countersign delegation',
        () =>
          workflow.initiate({
            workflowTypeCode: 'DELEGATION_GRANT',
            entityType: 'delegation_of_authority',
            entityId: grant.id,
            initiatedByUserId: id(emailFor('ceo')),
            scenario: 'STANDARD',
          }),
      );
      if (grantWf) {
        workflowInstanceIds.push(grantWf.id);
        await delegation.attachWorkflowInstance(grant.id, grantWf.id);
        await expectSucceed(
          'a second MD_CEO approves the delegation grant',
          () =>
            workflow.approveNextStep(
              grantWf.id,
              id(emailFor('ceo-deputy')),
            ),
        );
      }

      const screening = await expectSucceed(
        'senior Compliance officer now countersigns via the delegated authority',
        () =>
          investors.recordScreening({
            investorId: investor2b.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Ngozi Adeyemi',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('finadmin')),
            countersignerUserId: id(emailFor('compliance-senior')),
          }),
      );
      if (screening) {
        const auditRow = await prisma.auditTrail.findFirst({
          where: {
            entityType: 'investor_screening_record',
            entityId: screening.id,
            action: 'CREATE',
          },
          orderBy: { occurredAt: 'desc' },
        });
        const viaDelegationId = (
          auditRow?.after as { viaDelegationId?: string } | null
        )?.viaDelegationId;
        console.log(
          viaDelegationId === grant.id
            ? 'OK: audit trail records the countersign as delegated'
            : 'FAIL: viaDelegationId missing/mismatched',
        );
        if (viaDelegationId !== grant.id) process.exitCode = 1;
      }
    }
  }

  // --- MATCH result blocks submission (Manual Screening Procedure §5). ---
  const investor3 = await expectSucceed('onboard investor 3 (MATCH test)', () =>
    investors.onboard({
      fullLegalName: 'Test Sanctioned Entity',
      entityType: 'CORPORATE',
      nationality: 'Nigerian',
      taxIdentificationNumber: 'TIN-0003',
      contactEmail: `sanctioned.smoke-${RUN}@one17.test`,
      contactPhone: '+2348000000003',
      registeredAddress: '3 Smoke Test Close, Abuja',
      sourceOfFunds: 'Unknown',
      onboardedByUserId: id(emailFor('finadmin')),
    }),
  );
  if (investor3) {
    investorIdsCreated.push(investor3.investorId);
    await investors.setAmlRiskRating(
      investor3.investorId,
      'HIGH',
      id(emailFor('finadmin')),
    );
    await expectSucceed('record MATCH screening', () =>
      investors.recordScreening({
        investorId: investor3.investorId,
        listsChecked: FULL_CHECKLIST,
        searchTermsUsed: 'Test Sanctioned Entity',
        result: 'MATCH',
        screenerUserId: id(emailFor('compliance')),
      }),
    );
    await expectReject('KYC submission blocked after a MATCH result', () =>
      investors.submitForKycApproval(
        investor3.investorId,
        id(emailFor('finadmin')),
      ),
    );
  }

  // --- RESTRICTED mandate: Shariah review required before activation. ---
  const investor4 = await expectSucceed(
    'onboard investor 4 (RESTRICTED mandate path)',
    () =>
      investors.onboard({
        fullLegalName: 'Bello Restricted Trust',
        entityType: 'TRUST',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0004',
        contactEmail: `restricted.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000004',
        registeredAddress: '4 Smoke Test Close, Abuja',
        sourceOfFunds: 'Trust corpus',
        onboardedByUserId: id(emailFor('finadmin')),
      }),
  );
  if (investor4) {
    investorIdsCreated.push(investor4.investorId);
    await investors.setAmlRiskRating(
      investor4.investorId,
      'LOW',
      id(emailFor('finadmin')),
    );
    await investors.recordScreening({
      investorId: investor4.investorId,
      listsChecked: FULL_CHECKLIST,
      searchTermsUsed: 'Bello Restricted Trust',
      result: 'NO_MATCH',
      screenerUserId: id(emailFor('compliance')),
    });
    const wf4 = await investors.submitForKycApproval(
      investor4.investorId,
      id(emailFor('finadmin')),
    );
    workflowInstanceIds.push(wf4.id);
    const investor4Approved = await investors.approveKyc(
      wf4.id,
      id(emailFor('compliance')),
    );
    const yearsOut =
      investor4Approved && investor4Approved.kycExpiryDate
        ? (investor4Approved.kycExpiryDate.getTime() - Date.now()) /
          (365.25 * 24 * 60 * 60 * 1000)
        : 0;
    console.log(
      yearsOut > 2.9 && yearsOut < 3.1
        ? 'OK: LOW-risk-rated investor 4 got a ~3-year KYC expiry tier'
        : `FAIL: expected ~3 years out for LOW risk rating, got ${yearsOut.toFixed(2)}`,
    );
    if (!(yearsOut > 2.9 && yearsOut < 3.1)) process.exitCode = 1;

    await expectSucceed('setup RESTRICTED mandate', () =>
      investors.setupMandate({
        investorId: investor4.investorId,
        mandateType: 'RESTRICTED',
        targetReturnRate: 0.12,
        restrictedSectors: ['ALCOHOL', 'GAMBLING'],
        effectiveDate: new Date(),
        approvedByUserId: id(emailFor('portmgr')),
      }),
    );
    mandateInvestorIds.push(investor4.investorId);

    await expectReject(
      'cannot activate: restricted mandate awaiting Shariah review',
      () => investors.activate(investor4.investorId),
    );

    const shariahWf = await expectSucceed(
      'request mandate Shariah review',
      () =>
        investors.requestMandateShariahReview(
          investor4.investorId,
          id(emailFor('finadmin')),
        ),
    );
    if (shariahWf) {
      workflowInstanceIds.push(shariahWf.id);
      await expectReject(
        'initiator (FIN_ADMIN) cannot approve their own Shariah review request',
        () =>
          investors.approveMandateShariahReview(
            shariahWf.id,
            id(emailFor('finadmin')),
          ),
      );
      await expectSucceed('SHARIAH_REV approves the mandate review', () =>
        investors.approveMandateShariahReview(
          shariahWf.id,
          id(emailFor('shariah')),
        ),
      );
      await expectSucceed(
        'activate investor 4 now that Shariah review is complete',
        () => investors.activate(investor4.investorId),
      );
    }
  }

  // Cleanup.
  await prisma.workflowStepApproval.deleteMany({
    where: { workflowInstanceId: { in: workflowInstanceIds } },
  });
  await prisma.workflowInstance.deleteMany({
    where: { id: { in: workflowInstanceIds } },
  });
  await prisma.delegationOfAuthority.deleteMany({
    where: { id: { in: delegationIds } },
  });
  await prisma.investorMandate.deleteMany({
    where: { investorId: { in: mandateInvestorIds } },
  });
  await prisma.investorScreeningRecord.deleteMany({
    where: { investorId: { in: investorIdsCreated } },
  });
  // Invariant 39(d): finalizeKycApproval now auto-provisions a portal_client_user
  // for every KYC-complete investor, so it must be cleared before the investor
  // row (FK is ON DELETE RESTRICT — no cascading data loss on a live delete).
  await prisma.portalClientSession.deleteMany({
    where: { portalUserId: { in: (await prisma.portalClientUser.findMany({ where: { investorId: { in: investorIdsCreated } }, select: { id: true } })).map((u) => u.id) } },
  });
  await prisma.portalClientUser.deleteMany({
    where: { investorId: { in: investorIdsCreated } },
  });
  await prisma.investor.deleteMany({
    where: { investorId: { in: investorIdsCreated } },
  });
  const userIds = [...users.values()].map((u) => u.id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
