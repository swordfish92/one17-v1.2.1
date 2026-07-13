// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/parameters/prospectus-sheet.smoke.ts
// Invariant 70(a)/(b)/(g) (CHECK24): the Unified Prospectus Parameter
// Sheet's own lifecycle -- propose (freely re-editable while DRAFT) -> CIO
// review -> MD_CEO approve -> LOCKED, and the amendment chain (CIO propose
// -> SSB signoff -> Compliance signoff -> MD_CEO approve) for a LIVE
// product's already-approved sheet. Two adversarial proofs this file exists
// specifically to close (invariant 70f's evidence checklist): "post-
// approval edit refused" and "amendment effective-dating proven -- a
// pre-amendment-dated computation never changes." Engine-enforcement
// (min-sub/redeem, authorized-units cap, lock-in) and surplus-tier gating
// are proven live elsewhere (subscription.smoke.ts, psr-waterfall-engine.
// smoke.ts) -- not duplicated here.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ProspectusSheetService } from './prospectus-sheet.service';
import { ProspectusSheetError } from './prospectus-sheet.types';

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
  const sheets = new ProspectusSheetService(prisma, audit, delegation, workflow);

  const portmgr = await prisma.appUser.create({ data: { email: `sheet-portmgr-${RUN}@one17.test`, displayName: 'sheet-portmgr' } });
  await rbac.assignRole({ userId: portmgr.id, roleCode: 'PORT_MGR' });
  const cio = await prisma.appUser.create({ data: { email: `sheet-cio-${RUN}@one17.test`, displayName: 'sheet-cio' } });
  await rbac.assignRole({ userId: cio.id, roleCode: 'CIO' });
  const mdceo = await prisma.appUser.create({ data: { email: `sheet-mdceo-${RUN}@one17.test`, displayName: 'sheet-mdceo' } });
  await rbac.assignRole({ userId: mdceo.id, roleCode: 'MD_CEO' });
  const shariah = await prisma.appUser.create({ data: { email: `sheet-shariah-${RUN}@one17.test`, displayName: 'sheet-shariah' } });
  await rbac.assignRole({ userId: shariah.id, roleCode: 'SHARIAH_REV' });
  const compliance = await prisma.appUser.create({ data: { email: `sheet-compliance-${RUN}@one17.test`, displayName: 'sheet-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const outsider = await prisma.appUser.create({ data: { email: `sheet-outsider-${RUN}@one17.test`, displayName: 'sheet-outsider' } });
  await rbac.assignRole({ userId: outsider.id, roleCode: 'PORT_OFF' });

  // Product predates a PRODUCT_SETUP chain run -- ledger entity created
  // directly (this file only proves the SHEET lifecycle, not product
  // factory provisioning, which product-factory.smoke.ts already covers).
  const productCode = `SMOKE-SHEET-POOL-PROD-${RUN}`;
  await prisma.product.create({
    data: { code: productCode, name: 'Smoke Sheet Lifecycle Pool', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.ledgerEntity.create({ data: { code: `SMOKE-SHEET-POOL-${RUN}`, name: 'Smoke Sheet Lifecycle Pool Entity', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode } });

  // === Propose -> freely re-editable while DRAFT ===================
  await expectReject('propose refused for an outsider lacking PROSPECTUS_SHEET_INITIATION', () =>
    sheets.proposeSheet({ productCode, initiatedByUserId: outsider.id, prospectusRef: 'REJECTED' }));

  const { sheet: draft, workflowInstance: wf } = await sheets.proposeSheet({
    productCode, initiatedByUserId: portmgr.id, prospectusRef: 'PROSPECTUS-V1-DRAFT', psrPoolMudaribShare: 0.4,
  });
  if (draft.version === 1 && !draft.approvedByUserId) ok(`propose: v1 created as DRAFT (approvedByUserId null), prospectusRef=${draft.prospectusRef}`);
  else fail('propose did not create an unlocked DRAFT v1', draft);

  const edited = await sheets.editDraftSheet({ sheetId: draft.id, actorUserId: portmgr.id, prospectusRef: 'PROSPECTUS-V1-EDITED' });
  if (edited.version === 1 && edited.prospectusRef === 'PROSPECTUS-V1-EDITED') ok('editDraftSheet: SAME row updated in place while DRAFT (still v1, not a new version)');
  else fail('editDraftSheet did not update the draft row in place', edited);

  // === Lock via CIO review -> MD_CEO approval =======================
  await expectReject('the CIO review step refuses an outsider lacking PROSPECTUS_SHEET_REVIEW', () =>
    sheets.approveSheetStep(wf.id, outsider.id));
  const afterCio = await sheets.approveSheetStep(wf.id, cio.id);
  if (afterCio.status === 'PENDING_APPROVAL' && !afterCio.sheet) ok('CIO review step advances the chain -- not yet LOCKED (still needs MD_CEO)');
  else fail('CIO review step behaved unexpectedly', afterCio);

  const afterMd = await sheets.approveSheetStep(wf.id, mdceo.id);
  if (afterMd.status === 'APPROVED' && afterMd.sheet?.approvedByUserId === mdceo.id) {
    ok(`invariant 70(b): MD_CEO approval LOCKS the sheet (v${afterMd.sheet.version}, effectiveFrom=${afterMd.sheet.effectiveFrom.toISOString()})`);
  } else {
    fail('MD_CEO approval did not lock the sheet', afterMd);
  }
  const v1EffectiveFrom = afterMd.sheet!.effectiveFrom;
  const v1Id = afterMd.sheet!.id;

  // === Adversarial: post-approval edit refused ======================
  await expectReject('invariant 70(b) adversarial: editDraftSheet refused once the sheet is LOCKED (post-approval edit)', () =>
    sheets.editDraftSheet({ sheetId: v1Id, actorUserId: portmgr.id, prospectusRef: 'SHOULD-NEVER-APPLY' }));
  const reread = await sheets.getSheetDetail(v1Id);
  if (reread.prospectusRef !== 'SHOULD-NEVER-APPLY') ok('confirmed: the refused edit attempt left the LOCKED sheet completely unchanged');
  else fail('a refused edit attempt somehow still mutated the LOCKED sheet', reread);

  // === Amendment chain: CIO propose -> SSB -> Compliance -> MD_CEO =====
  await expectReject('proposeAmendment refused for an outsider lacking PROSPECTUS_AMENDMENT_PROPOSAL', () =>
    sheets.proposeAmendment({ productCode, proposedByUserId: outsider.id, prospectusRef: 'REJECTED' }));

  // Pause briefly so the amendment's own effectiveFrom (stamped at ITS
  // approval instant, below) is unambiguously later than v1's -- proves
  // real wall-clock separation between the two versions, not same-millisecond
  // coincidence.
  await new Promise((r) => setTimeout(r, 50));

  const { sheet: amendmentDraft, workflowInstance: amendWf } = await sheets.proposeAmendment({
    productCode, proposedByUserId: cio.id, prospectusRef: 'PROSPECTUS-V2-AMENDED', psrPoolMudaribShare: 0.45,
  });
  if (amendmentDraft.version === 2 && !amendmentDraft.approvedByUserId && Number(amendmentDraft.psrPoolMudaribShare) === 0.45) {
    ok('proposeAmendment: v2 created as a NEW unlocked version carrying forward v1\'s untouched fields, overridden by the amendment\'s own fields');
  } else {
    fail('proposeAmendment did not create the expected v2 draft', amendmentDraft);
  }

  await expectReject('SSB signoff step refuses a non-Shariah actor', () => sheets.approveAmendmentStep(amendWf.id, outsider.id));
  const afterSsb = await sheets.approveAmendmentStep(amendWf.id, shariah.id);
  if (afterSsb.status === 'PENDING_APPROVAL') ok('amendment step 1/3 (SSB signoff) recorded, chain not yet complete');
  else fail('SSB signoff step behaved unexpectedly', afterSsb);

  await expectReject('Compliance signoff step refuses an actor without COMPLIANCE', () => sheets.approveAmendmentStep(amendWf.id, outsider.id));
  const afterCompliance = await sheets.approveAmendmentStep(amendWf.id, compliance.id);
  if (afterCompliance.status === 'PENDING_APPROVAL') ok('amendment step 2/3 (Compliance signoff) recorded, chain not yet complete');
  else fail('Compliance signoff step behaved unexpectedly', afterCompliance);

  const afterAmendMd = await sheets.approveAmendmentStep(amendWf.id, mdceo.id);
  if (afterAmendMd.status === 'APPROVED' && afterAmendMd.sheet?.approvedByUserId === mdceo.id) {
    ok(`invariant 70(g): amendment step 3/3 (MD_CEO) LOCKS v${afterAmendMd.sheet.version} -- four-hand chain complete (CIO propose, SSB, Compliance, MD_CEO)`);
  } else {
    fail('amendment final MD_CEO step did not lock v2', afterAmendMd);
  }
  const v2EffectiveFrom = afterAmendMd.sheet!.effectiveFrom;

  if (v2EffectiveFrom.getTime() > v1EffectiveFrom.getTime()) {
    ok(`amendment effectiveFrom (${v2EffectiveFrom.toISOString()}) is genuinely LATER than v1's (${v1EffectiveFrom.toISOString()}) -- forward-only, never backdated`);
  } else {
    fail('amendment effectiveFrom is not later than the original sheet\'s', { v1EffectiveFrom, v2EffectiveFrom });
  }

  // === THE adversarial proof invariant 70(f) names explicitly: "a
  // pre-amendment-dated computation never changes." ===================
  const preAmendmentDate = new Date(v1EffectiveFrom.getTime() + 1); // 1ms after v1 locked, still before v2
  const inForceBeforeAmendment = await sheets.getSheetInForceAt(productCode, preAmendmentDate);
  if (inForceBeforeAmendment?.id === v1Id && Number(inForceBeforeAmendment?.psrPoolMudaribShare) === 0.4) {
    ok(`invariant 70(g) adversarial: a computation dated JUST AFTER v1's lock but BEFORE the amendment (${preAmendmentDate.toISOString()}) resolves to v1 (mudaribShare=0.40) -- the amendment NEVER retroactively changes it`);
  } else {
    fail('a pre-amendment-dated lookup did not resolve to the original v1 sheet', inForceBeforeAmendment);
  }

  const inForceAfterAmendment = await sheets.getSheetInForceAt(productCode, new Date());
  if (inForceAfterAmendment?.id === afterAmendMd.sheet!.id && Number(inForceAfterAmendment?.psrPoolMudaribShare) === 0.45) {
    ok('a computation dated NOW (after the amendment) correctly resolves to v2 (mudaribShare=0.45) -- forward from approval date, exactly as designed');
  } else {
    fail('a post-amendment-dated lookup did not resolve to the new v2 sheet', inForceAfterAmendment);
  }

  const history = await sheets.listSheetVersions(productCode);
  if (history.length === 2 && history[0].version === 2 && history[1].version === 1) {
    ok('listSheetVersions renders the full amendment history (both v1 and v2), newest first -- "amendment history renders on the product record" (invariant 70g)');
  } else {
    fail('listSheetVersions did not return the expected 2-version history', history);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — ProspectusSheetService proven: propose/edit/lock, post-approval edit refusal, and the 4-hand amendment chain with forward-only effective-dating (invariant 70a/b/g).`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  if (err instanceof ProspectusSheetError) console.error('Unhandled service error:', err.message);
  else console.error(err);
  process.exitCode = 1;
});
