// Run with: npx tsx src/tax/tax-adversarial.smoke.ts
// Invariant 65(c)(iv): adversarial proof set for the unified Tax
// Configuration framework, against the real live DB.
//   1. Effective-dating: approving a NEW rate version never alters the
//      computation for a transaction dated under the PRIOR version.
//   2. Exempt party: an investor with a WHT exemption is NEVER deducted,
//      even when an ACTIVE rate version covers the transaction date.
//   3. Unconfigured tax types refuse honestly (VAT/Stamp Duty) rather
//      than fabricating a rate, while WHT degrades to a visible zero
//      (deliberately, to protect the payout pipeline).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterService } from '../letter/letter.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { TaxService } from './tax.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const letterhead = new LetterheadService(prisma, audit, delegation, workflow);
  const letter = new LetterService(prisma, audit, delegation, workflow, letterhead);
  const tax = new TaxService(prisma, audit, delegation, workflow, letter);

  const finAdmin = await prisma.appUser.create({ data: { email: `tax-smoke-fin-${RUN}@one17.test`, displayName: 'tax-smoke-fin' } });
  await prisma.userRole.create({ data: { userId: finAdmin.id, roleCode: 'FIN_ADMIN' } });
  const mdCeo = await prisma.appUser.create({ data: { email: `tax-smoke-ceo-${RUN}@one17.test`, displayName: 'tax-smoke-ceo' } });
  await prisma.userRole.create({ data: { userId: mdCeo.id, roleCode: 'MD_CEO' } });

  const investor = await prisma.investor.findFirst({ where: { entityType: 'HNWI_INDIVIDUAL' } });
  if (!investor) { fail('fixture: no HNWI_INDIVIDUAL investor found in DB — cannot run adversarial set'); await prisma.onModuleDestroy(); process.exit(1); }

  const uniqueTaxType = 'WHT' as const;

  // --- Adversarial 1: effective-dating never touches a prior-dated computation ---
  const janDate = new Date('2026-01-15');
  const v1 = await tax.proposeRateVersion({
    taxType: uniqueTaxType,
    rates: [{ category: 'INDIVIDUAL', incomeType: 'ADVERSARIAL_SMOKE_INCOME', ratePct: 5 }],
    effectiveFrom: new Date('2026-01-01'),
    proposedByUserId: finAdmin.id,
  });
  const v1Approved = await tax.approveRateVersion({ workflowInstanceId: v1.workflowInstanceId!, approverUserId: mdCeo.id });
  if (v1Approved?.status === 'ACTIVE') ok('adversarial 1a: v1 (5%, eff 2026-01-01) approved ACTIVE');
  else fail('adversarial 1a: v1 did not become ACTIVE', v1Approved);

  const janCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 100_00n, transactionDate: janDate });
  if (janCompute.configured && janCompute.whtKobo === 5_00n) ok(`adversarial 1b: Jan transaction computes at v1's 5% (${janCompute.whtKobo} kobo)`);
  else fail('adversarial 1b: Jan transaction did not compute at v1 rate', janCompute);

  const v2 = await tax.proposeRateVersion({
    taxType: uniqueTaxType,
    rates: [{ category: 'INDIVIDUAL', incomeType: 'ADVERSARIAL_SMOKE_INCOME', ratePct: 15 }],
    effectiveFrom: new Date('2026-06-01'),
    proposedByUserId: finAdmin.id,
  });
  const v2Approved = await tax.approveRateVersion({ workflowInstanceId: v2.workflowInstanceId!, approverUserId: mdCeo.id });
  if (v2Approved?.status === 'ACTIVE') ok('adversarial 1c: v2 (15%, eff 2026-06-01) approved ACTIVE, supersedes v1');
  else fail('adversarial 1c: v2 did not become ACTIVE', v2Approved);

  const v1AfterSupersession = await prisma.taxRateVersion.findUniqueOrThrow({ where: { id: v1.id } });
  if (v1AfterSupersession.status === 'SUPERSEDED') ok('adversarial 1d: v1 correctly flipped to SUPERSEDED (never deleted)');
  else fail('adversarial 1d: v1 status wrong after v2 approval', v1AfterSupersession.status);

  const janComputeAfter = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 100_00n, transactionDate: janDate });
  if (janComputeAfter.configured && janComputeAfter.whtKobo === 5_00n) ok(`adversarial 1e (THE ADVERSARIAL PROOF): Jan transaction STILL computes at v1's 5% (${janComputeAfter.whtKobo} kobo) after v2 approval -- never retroactive`);
  else fail('adversarial 1e: Jan transaction computation changed after v2 approval — RETROACTIVE BUG', janComputeAfter);

  const juneCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 100_00n, transactionDate: new Date('2026-06-15') });
  if (juneCompute.configured && juneCompute.whtKobo === 15_00n) ok(`adversarial 1f: June transaction (after v2's effectiveFrom) correctly computes at v2's 15% (${juneCompute.whtKobo} kobo)`);
  else fail('adversarial 1f: June transaction did not compute at v2 rate', juneCompute);

  // --- Adversarial 2: exempt party never deducted ---
  await tax.grantExemption({ investorId: investor.investorId, taxType: uniqueTaxType, reason: 'ADVERSARIAL_SMOKE exemption', grantedByUserId: finAdmin.id });
  const exemptCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 100_00n, transactionDate: new Date('2026-06-15') });
  if (exemptCompute.exempt && exemptCompute.whtKobo === 0n && exemptCompute.netKobo === 100_00n) ok('adversarial 2: exempt investor computes whtKobo=0, netKobo=gross -- never deducted despite an ACTIVE 15% rate covering the date');
  else fail('adversarial 2: exempt investor was still deducted', exemptCompute);
  await tax.revokeExemption(investor.investorId, uniqueTaxType, finAdmin.id);

  // --- Adversarial 3a: VAT refuses honestly when unconfigured ---
  try {
    await tax.computeVat({ serviceOrFeeType: `ADVERSARIAL_SMOKE_UNCONFIGURED_${RUN}`, amountKobo: 100_00n, transactionDate: new Date() });
    fail('adversarial 3a: computeVat did not refuse for an unconfigured service/fee type');
  } catch (err) {
    ok(`adversarial 3a: computeVat refuses honestly when unconfigured -- ${(err as Error).message.split('\n')[0]}`);
  }

  // --- Adversarial 3b: WHT degrades to visible zero (never blocks payout pipeline) when no ACTIVE version covers the type ---
  const noConfigCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: `ADVERSARIAL_SMOKE_NO_VERSION_${RUN}`, grossKobo: 100_00n, transactionDate: new Date() });
  if (!noConfigCompute.configured && noConfigCompute.whtKobo === 0n && noConfigCompute.netKobo === 100_00n) ok('adversarial 3b: unconfigured WHT income type degrades to visible zero (configured:false) rather than fabricating or blocking');
  else fail('adversarial 3b: unconfigured WHT did not degrade honestly', noConfigCompute);

  console.log(failed ? '\nADVERSARIAL SET: FAILURES FOUND' : '\nADVERSARIAL SET OK — invariant 65(c)(iv) proven live against the real DB.');
  await prisma.onModuleDestroy();
  process.exit(failed ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });
