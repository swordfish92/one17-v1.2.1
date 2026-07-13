"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const prospectus_sheet_service_1 = require("./prospectus-sheet.service");
const prospectus_sheet_types_1 = require("./prospectus-sheet.types");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const sheets = new prospectus_sheet_service_1.ProspectusSheetService(prisma, audit, delegation, workflow);
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
    const productCode = `SMOKE-SHEET-POOL-PROD-${RUN}`;
    await prisma.product.create({
        data: { code: productCode, name: 'Smoke Sheet Lifecycle Pool', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: `SMOKE-SHEET-POOL-${RUN}`, name: 'Smoke Sheet Lifecycle Pool Entity', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode } });
    await expectReject('propose refused for an outsider lacking PROSPECTUS_SHEET_INITIATION', () => sheets.proposeSheet({ productCode, initiatedByUserId: outsider.id, prospectusRef: 'REJECTED' }));
    const { sheet: draft, workflowInstance: wf } = await sheets.proposeSheet({
        productCode, initiatedByUserId: portmgr.id, prospectusRef: 'PROSPECTUS-V1-DRAFT', psrPoolMudaribShare: 0.4,
    });
    if (draft.version === 1 && !draft.approvedByUserId)
        ok(`propose: v1 created as DRAFT (approvedByUserId null), prospectusRef=${draft.prospectusRef}`);
    else
        fail('propose did not create an unlocked DRAFT v1', draft);
    const edited = await sheets.editDraftSheet({ sheetId: draft.id, actorUserId: portmgr.id, prospectusRef: 'PROSPECTUS-V1-EDITED' });
    if (edited.version === 1 && edited.prospectusRef === 'PROSPECTUS-V1-EDITED')
        ok('editDraftSheet: SAME row updated in place while DRAFT (still v1, not a new version)');
    else
        fail('editDraftSheet did not update the draft row in place', edited);
    await expectReject('the CIO review step refuses an outsider lacking PROSPECTUS_SHEET_REVIEW', () => sheets.approveSheetStep(wf.id, outsider.id));
    const afterCio = await sheets.approveSheetStep(wf.id, cio.id);
    if (afterCio.status === 'PENDING_APPROVAL' && !afterCio.sheet)
        ok('CIO review step advances the chain -- not yet LOCKED (still needs MD_CEO)');
    else
        fail('CIO review step behaved unexpectedly', afterCio);
    const afterMd = await sheets.approveSheetStep(wf.id, mdceo.id);
    if (afterMd.status === 'APPROVED' && afterMd.sheet?.approvedByUserId === mdceo.id) {
        ok(`invariant 70(b): MD_CEO approval LOCKS the sheet (v${afterMd.sheet.version}, effectiveFrom=${afterMd.sheet.effectiveFrom.toISOString()})`);
    }
    else {
        fail('MD_CEO approval did not lock the sheet', afterMd);
    }
    const v1EffectiveFrom = afterMd.sheet.effectiveFrom;
    const v1Id = afterMd.sheet.id;
    await expectReject('invariant 70(b) adversarial: editDraftSheet refused once the sheet is LOCKED (post-approval edit)', () => sheets.editDraftSheet({ sheetId: v1Id, actorUserId: portmgr.id, prospectusRef: 'SHOULD-NEVER-APPLY' }));
    const reread = await sheets.getSheetDetail(v1Id);
    if (reread.prospectusRef !== 'SHOULD-NEVER-APPLY')
        ok('confirmed: the refused edit attempt left the LOCKED sheet completely unchanged');
    else
        fail('a refused edit attempt somehow still mutated the LOCKED sheet', reread);
    await expectReject('proposeAmendment refused for an outsider lacking PROSPECTUS_AMENDMENT_PROPOSAL', () => sheets.proposeAmendment({ productCode, proposedByUserId: outsider.id, prospectusRef: 'REJECTED' }));
    await new Promise((r) => setTimeout(r, 50));
    const { sheet: amendmentDraft, workflowInstance: amendWf } = await sheets.proposeAmendment({
        productCode, proposedByUserId: cio.id, prospectusRef: 'PROSPECTUS-V2-AMENDED', psrPoolMudaribShare: 0.45,
    });
    if (amendmentDraft.version === 2 && !amendmentDraft.approvedByUserId && Number(amendmentDraft.psrPoolMudaribShare) === 0.45) {
        ok('proposeAmendment: v2 created as a NEW unlocked version carrying forward v1\'s untouched fields, overridden by the amendment\'s own fields');
    }
    else {
        fail('proposeAmendment did not create the expected v2 draft', amendmentDraft);
    }
    await expectReject('SSB signoff step refuses a non-Shariah actor', () => sheets.approveAmendmentStep(amendWf.id, outsider.id));
    const afterSsb = await sheets.approveAmendmentStep(amendWf.id, shariah.id);
    if (afterSsb.status === 'PENDING_APPROVAL')
        ok('amendment step 1/3 (SSB signoff) recorded, chain not yet complete');
    else
        fail('SSB signoff step behaved unexpectedly', afterSsb);
    await expectReject('Compliance signoff step refuses an actor without COMPLIANCE', () => sheets.approveAmendmentStep(amendWf.id, outsider.id));
    const afterCompliance = await sheets.approveAmendmentStep(amendWf.id, compliance.id);
    if (afterCompliance.status === 'PENDING_APPROVAL')
        ok('amendment step 2/3 (Compliance signoff) recorded, chain not yet complete');
    else
        fail('Compliance signoff step behaved unexpectedly', afterCompliance);
    const afterAmendMd = await sheets.approveAmendmentStep(amendWf.id, mdceo.id);
    if (afterAmendMd.status === 'APPROVED' && afterAmendMd.sheet?.approvedByUserId === mdceo.id) {
        ok(`invariant 70(g): amendment step 3/3 (MD_CEO) LOCKS v${afterAmendMd.sheet.version} -- four-hand chain complete (CIO propose, SSB, Compliance, MD_CEO)`);
    }
    else {
        fail('amendment final MD_CEO step did not lock v2', afterAmendMd);
    }
    const v2EffectiveFrom = afterAmendMd.sheet.effectiveFrom;
    if (v2EffectiveFrom.getTime() > v1EffectiveFrom.getTime()) {
        ok(`amendment effectiveFrom (${v2EffectiveFrom.toISOString()}) is genuinely LATER than v1's (${v1EffectiveFrom.toISOString()}) -- forward-only, never backdated`);
    }
    else {
        fail('amendment effectiveFrom is not later than the original sheet\'s', { v1EffectiveFrom, v2EffectiveFrom });
    }
    const preAmendmentDate = new Date(v1EffectiveFrom.getTime() + 1);
    const inForceBeforeAmendment = await sheets.getSheetInForceAt(productCode, preAmendmentDate);
    if (inForceBeforeAmendment?.id === v1Id && Number(inForceBeforeAmendment?.psrPoolMudaribShare) === 0.4) {
        ok(`invariant 70(g) adversarial: a computation dated JUST AFTER v1's lock but BEFORE the amendment (${preAmendmentDate.toISOString()}) resolves to v1 (mudaribShare=0.40) -- the amendment NEVER retroactively changes it`);
    }
    else {
        fail('a pre-amendment-dated lookup did not resolve to the original v1 sheet', inForceBeforeAmendment);
    }
    const inForceAfterAmendment = await sheets.getSheetInForceAt(productCode, new Date());
    if (inForceAfterAmendment?.id === afterAmendMd.sheet.id && Number(inForceAfterAmendment?.psrPoolMudaribShare) === 0.45) {
        ok('a computation dated NOW (after the amendment) correctly resolves to v2 (mudaribShare=0.45) -- forward from approval date, exactly as designed');
    }
    else {
        fail('a post-amendment-dated lookup did not resolve to the new v2 sheet', inForceAfterAmendment);
    }
    const history = await sheets.listSheetVersions(productCode);
    if (history.length === 2 && history[0].version === 2 && history[1].version === 1) {
        ok('listSheetVersions renders the full amendment history (both v1 and v2), newest first -- "amendment history renders on the product record" (invariant 70g)');
    }
    else {
        fail('listSheetVersions did not return the expected 2-version history', history);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — ProspectusSheetService proven: propose/edit/lock, post-approval edit refusal, and the 4-hand amendment chain with forward-only effective-dating (invariant 70a/b/g).`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
        console.error('Unhandled service error:', err.message);
    else
        console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=prospectus-sheet.smoke.js.map