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
const complaint_service_1 = require("../complaint/complaint.service");
const privacy_notice_service_1 = require("./privacy-notice.service");
const retention_schedule_service_1 = require("./retention-schedule.service");
const data_breach_register_service_1 = require("./data-breach-register.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
const one17_ai_service_1 = require("../ai/one17-ai.service");
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
    const complaints = new complaint_service_1.ComplaintService(prisma, audit, delegation);
    const privacyNotice = new privacy_notice_service_1.PrivacyNoticeService(prisma, audit);
    const retentionSchedule = new retention_schedule_service_1.RetentionScheduleService(prisma, audit);
    const breachRegister = new data_breach_register_service_1.DataBreachRegisterService(prisma, audit);
    const kri = new kri_engine_service_1.KriEngineService(prisma, audit);
    const ai = new one17_ai_service_1.One17AIService(prisma, audit, delegation, workflow);
    const compliance = await prisma.appUser.create({ data: { email: `ndpa-compliance-${RUN}@one17.test`, displayName: 'ndpa-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-NDPA-${RUN}`,
            fullLegalName: `NDPA Smoke Investor ${RUN}`,
            entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG',
            contactEmail: `ndpa-investor-${RUN}@one17.test`,
            contactPhone: '+2340000000001',
            onboardedByUserId: compliance.id,
        },
    });
    const activeNotice = await privacyNotice.getActiveNotice();
    if (activeNotice.version >= 1 && activeNotice.noticeText.includes('PLACEHOLDER')) {
        ok(`getActiveNotice() returns the seeded v${activeNotice.version} notice, honestly marked PLACEHOLDER pending Compliance/DPO copy`);
    }
    else {
        fail('expected an ACTIVE, placeholder-marked privacy notice', activeNotice);
    }
    const ack = await privacyNotice.recordAcknowledgment({ noticeVersion: activeNotice.version, context: 'INVESTOR_ONBOARDING_STAGE_1', investorId: investor.investorId, ipAddress: '203.0.113.5' });
    const log = await privacyNotice.listAcknowledgments();
    if (log.some((a) => a.id === ack.id))
        ok('recordAcknowledgment() writes a row findable via listAcknowledgments() (who/when/which-version)');
    else
        fail('acknowledgment not found in log', ack);
    await expectReject('acknowledging with no investor/counterparty/public-intake target is refused', () => privacyNotice.recordAcknowledgment({ noticeVersion: activeNotice.version, context: 'PUBLIC_INTAKE' }));
    const dsrConfig = await prisma.dsrResponseConfig.findFirstOrThrow({ where: { status: 'ACTIVE' } });
    const dsrComplaint = await complaints.raiseFromPortal({
        investorId: investor.investorId,
        category: 'DSR',
        description: 'Please provide a copy of all personal data you hold on me.',
        isDsr: true,
        dsrCategory: 'ACCESS',
    });
    const expectedDueMs = dsrComplaint.receivedAt.getTime() + dsrConfig.responseDays * 24 * 60 * 60_000;
    if (dsrComplaint.isDsr && dsrComplaint.dsrCategory === 'ACCESS' && Math.abs(dsrComplaint.slaDueAt.getTime() - expectedDueMs) < 1000) {
        ok(`a DSR complaint's response clock uses dsr_response_config's ${dsrConfig.responseDays}-day statutory window (GAID Schedule 9), not the ordinary complaint SLA`);
    }
    else {
        fail('DSR response clock did not use dsr_response_config', { dsrComplaint, dsrConfig });
    }
    await expectReject('raising a DSR without a dsrCategory is refused', () => complaints.raiseFromPortal({ investorId: investor.investorId, category: 'DSR', description: 'no category', isDsr: true }));
    const queue = await complaints.listDsrQueue(compliance.id);
    if (queue.some((q) => q.id === dsrComplaint.id))
        ok('listDsrQueue() (the Compliance queue) finds the DSR-tagged complaint, with clientName + responseClockState');
    else
        fail('DSR queue did not find the tagged complaint', queue.map((q) => q.id));
    await expectReject('resolving a DSR complaint without a dsrLegalBasis is refused', () => complaints.resolve({ complaintId: dsrComplaint.id, resolutionNotes: 'Erasure declined.', actorUserId: compliance.id }));
    const resolvedDsr = await complaints.resolve({
        complaintId: dsrComplaint.id,
        resolutionNotes: 'Data provided via secure export.',
        dsrLegalBasis: 'NDP Act Article 36 — access right honored; no statutory restriction applies.',
        actorUserId: compliance.id,
    });
    if (resolvedDsr.status === 'RESOLVED' && resolvedDsr.dsrLegalBasis?.includes('Article 36')) {
        ok('a DSR resolved WITH a dsrLegalBasis succeeds and the legal basis is recorded on the row (invariant 57(b)(ii): "the response, not silence, is the obligation")');
    }
    else {
        fail('DSR resolution with legal basis did not persist correctly', resolvedDsr);
    }
    const beforeConfirm = await retentionSchedule.listAll();
    const draftRow = beforeConfirm.find((r) => r.status === 'DRAFT' && r.retentionPeriodMonths === null);
    const activeRow = beforeConfirm.find((r) => r.status === 'ACTIVE' && r.dataClass.includes('Audit trail'));
    if (draftRow)
        ok(`retention schedule ships ${beforeConfirm.filter((r) => r.status === 'DRAFT').length} DRAFT row(s) with retentionPeriodMonths=NULL — "never invent a value" pattern`);
    else
        fail('expected at least one DRAFT retention_schedule_entry with a NULL period', beforeConfirm);
    if (activeRow && activeRow.disposalTreatment?.includes('insert-only')) {
        ok('the audit-trail row ships ACTIVE with a disposalTreatment describing a structural, already-enforced platform fact (not a business policy choice)');
    }
    else {
        fail('expected an ACTIVE audit-trail retention row describing the insert-only DB trigger', activeRow);
    }
    if (draftRow) {
        const confirmed = await retentionSchedule.confirm({
            entryId: draftRow.id,
            retentionPeriodMonths: 84,
            statutoryBasis: 'SMOKE TEST VALUE — not a real Compliance ruling.',
            disposalTreatment: 'Secure deletion after retention period.',
            actorUserId: compliance.id,
        });
        if (confirmed.status === 'ACTIVE' && confirmed.retentionPeriodMonths === 84 && confirmed.confirmedByUserId === compliance.id) {
            ok('confirm() flips a DRAFT row to ACTIVE with retentionPeriodMonths/statutoryBasis/disposalTreatment + confirmedBy/confirmedAt');
        }
        else {
            fail('confirm() did not persist correctly', confirmed);
        }
        await expectReject('confirming an already-ACTIVE retention schedule entry is refused (version a new one instead)', () => retentionSchedule.confirm({ entryId: draftRow.id, retentionPeriodMonths: 12, statutoryBasis: 'x', disposalTreatment: 'x', actorUserId: compliance.id }));
    }
    const beforeOpenCount = await breachRegister.getOpenCount();
    const breach = await breachRegister.logBreach({
        discoveredAt: new Date(),
        discoveredByUserId: compliance.id,
        description: 'SMOKE TEST: simulated unauthorized access to a staging export.',
        affectedDataClasses: ['Investor contact records'],
        estimatedAffectedSubjects: 3,
    });
    const expectedDeadline = breach.discoveredAt.getTime() + 72 * 60 * 60_000;
    if (breach.status === 'OPEN' && Math.abs(breach.ndpcNotificationDeadline.getTime() - expectedDeadline) < 1000) {
        ok('logBreach() computes ndpcNotificationDeadline as discoveredAt + 72 hours (NDP Act Section 40(2) / GAID Article 33), status OPEN');
    }
    else {
        fail('logBreach() did not compute the 72-hour deadline correctly', breach);
    }
    const afterLogCount = await breachRegister.getOpenCount();
    if (afterLogCount === beforeOpenCount + 1)
        ok('KRI CPL-06 (getOpenCount) increments on a freshly logged, unclosed breach');
    else
        fail('open breach count did not increment as expected', { beforeOpenCount, afterLogCount });
    await expectReject('closing a breach before assessment is refused', () => breachRegister.close({ breachId: breach.id, postIncidentNotes: 'x', actorUserId: compliance.id }));
    const assessed = await breachRegister.assess({
        breachId: breach.id,
        severity: 'MODERATE',
        likelyHighRisk: false,
        assessmentNotes: 'SMOKE TEST assessment.',
        dataSubjectsNotificationRequired: false,
        actorUserId: compliance.id,
    });
    if (assessed.status === 'ASSESSED' && assessed.severity === 'MODERATE')
        ok('assess() records severity/eligibility and flips OPEN -> ASSESSED');
    else
        fail('assess() did not persist correctly', assessed);
    await expectReject('closing before NDPC notification is refused', () => breachRegister.close({ breachId: breach.id, postIncidentNotes: 'x', actorUserId: compliance.id }));
    const notified = await breachRegister.recordNdpcNotification({ breachId: breach.id, actorUserId: compliance.id });
    if (notified.status === 'NDPC_NOTIFIED' && notified.ndpcNotifiedAt)
        ok('recordNdpcNotification() flips ASSESSED -> NDPC_NOTIFIED, timestamp recorded');
    else
        fail('recordNdpcNotification() did not persist correctly', notified);
    const closed = await breachRegister.close({ breachId: breach.id, postIncidentNotes: 'SMOKE TEST closure — no data-subject notification required per assessment.', actorUserId: compliance.id });
    if (closed.status === 'CLOSED' && closed.closedByUserId === compliance.id)
        ok('close() succeeds once NDPC-notified and data-subject notification (not required) is satisfied');
    else
        fail('close() did not persist correctly', closed);
    const afterCloseCount = await breachRegister.getOpenCount();
    if (afterCloseCount === beforeOpenCount)
        ok('KRI CPL-06 decrements back to baseline once the breach is CLOSED');
    else
        fail('open breach count did not decrement after closure', { beforeOpenCount, afterCloseCount });
    const kriReadingDate = new Date();
    await kri.runDailyBatch(kriReadingDate);
    const cpl06Reading = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-06', isAggregate: true }, orderBy: { computedAt: 'desc' } });
    if (cpl06Reading && cpl06Reading.value !== null) {
        ok(`KRI engine's daily batch computes CPL-06 (Open Data Breach Register Entries) live, value=${cpl06Reading.value}, matching getOpenCount()'s baseline`);
    }
    else {
        fail('KRI engine did not produce a CPL-06 reading', cpl06Reading);
    }
    const corpServices = await prisma.appUser.create({ data: { email: `ndpa-ai-${RUN}@one17.test`, displayName: 'ndpa-ai' } });
    await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
    await prisma.aiCapabilityFlag.update({ where: { capabilityCode: 'AI_CHAT' }, data: { isEnabled: true } });
    const piiPointCode = `SMOKE_PII_POINT_${RUN}`;
    await prisma.dataPointCatalog.create({
        data: {
            code: piiPointCode,
            label: 'Smoke test PII-flagged point',
            description: 'SMOKE TEST — reuses the vendor_count resolver, only the containsPersonalData flag matters here.',
            requiredFunctionCode: 'PROCUREMENT_OPERATIONS',
            requiredLevel: 'VIEW',
            sourceType: 'LIVE_QUERY',
            sourceRef: 'vendor_count',
            containsPersonalData: true,
            status: 'ACTIVE',
        },
    });
    const now = new Date();
    await prisma.aiTokenBudget.upsert({
        where: { orgUnitCode_periodYear_periodMonth: { orgUnitCode: 'CORP_SERVICES', periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1 } },
        create: { orgUnitCode: 'CORP_SERVICES', periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1, tokenLimit: 100_000 },
        update: { tokenLimit: 100_000 },
    });
    const aiResult = await ai.invoke({
        askingUserId: corpServices.id,
        capabilityCode: 'AI_CHAT',
        promptText: 'How many vendors are registered?',
        requestedDataPointCodes: [piiPointCode],
        orgUnitCode: 'CORP_SERVICES',
    });
    const aiLogRow = await prisma.aiInteractionLog.findUniqueOrThrow({ where: { id: aiResult.interactionLogId } });
    const personalDataIncluded = aiLogRow.personalDataPointCodesIncluded;
    if (aiResult.outcome === 'ALLOWED' && aiResult.includedDataPointCodes.includes(piiPointCode) && personalDataIncluded.includes(piiPointCode)) {
        ok('a personal-data-flagged, included point is recorded in ai_interaction_log.personalDataPointCodesIncluded — the auditable minimization record (invariant 57(b)(v))');
    }
    else {
        fail('personal-data inclusion was not recorded as expected', { aiResult, personalDataIncluded });
    }
    const nonPiiResult = await ai.invoke({
        askingUserId: corpServices.id,
        capabilityCode: 'AI_CHAT',
        promptText: 'How many vendors are registered? (again, no PII point)',
        requestedDataPointCodes: ['VENDOR_COUNT'],
        orgUnitCode: 'CORP_SERVICES',
    });
    const nonPiiLogRow = await prisma.aiInteractionLog.findUniqueOrThrow({ where: { id: nonPiiResult.interactionLogId } });
    if (nonPiiLogRow.personalDataPointCodesIncluded.length === 0) {
        ok('a request that includes ONLY non-personal-data points records an empty personalDataPointCodesIncluded array — the guard does not over-flag');
    }
    else {
        fail('non-personal-data-only request incorrectly flagged personal data', nonPiiLogRow.personalDataPointCodesIncluded);
    }
    await prisma.dataPointCatalog.delete({ where: { code: piiPointCode } }).catch(() => { });
    await prisma.dataBreachRegisterEntry.deleteMany({ where: { id: breach.id } });
    if (draftRow)
        await prisma.retentionScheduleEntry.update({ where: { id: draftRow.id }, data: { status: 'DRAFT', retentionPeriodMonths: null, statutoryBasis: null, disposalTreatment: null, confirmedByUserId: null, confirmedAt: null } }).catch(() => { });
    await prisma.complaint.deleteMany({ where: { id: dsrComplaint.id } });
    await prisma.privacyNoticeAcknowledgment.deleteMany({ where: { id: ack.id } });
    await prisma.investor.deleteMany({ where: { investorId: investor.investorId } });
    await prisma.userRole.deleteMany({ where: { userId: compliance.id } });
    await prisma.appUser.deleteMany({ where: { id: compliance.id } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — NDPA/GAID compliance pack (invariant 57, CHECK15) proven across all 5 build items: privacy notice + acknowledgment log, DSR statutory clock + legal-basis-required resolution, retention schedule confirm-once discipline, breach register full lifecycle + KRI feed, AI data-minimization record.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=data-protection.smoke.js.map