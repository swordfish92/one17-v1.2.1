"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZakatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const wm_service_1 = require("../wm/wm.service");
const notification_service_1 = require("../notification/notification.service");
const zakat_types_1 = require("./zakat.types");
let ZakatService = class ZakatService {
    prisma;
    audit;
    delegation;
    workflow;
    wm;
    notification;
    constructor(prisma, audit, delegation, workflow, wm, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.wm = wm;
        this.notification = notification;
    }
    async getNisabConfig() {
        return this.prisma.zakatNisabConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    }
    async updateNisabConfig(nisabGoldGrams, goldPricePerGramKobo, actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'APPROVE', 'update the governed Zakat nisab config');
        const updated = await this.prisma.zakatNisabConfig.upsert({
            where: { id: 1 },
            create: { id: 1, nisabGoldGrams, goldPricePerGramKobo, approvedByUserId: actorUserId, approvedAt: new Date() },
            update: { nisabGoldGrams, goldPricePerGramKobo, approvedByUserId: actorUserId, approvedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_nisab_config', entityId: '1', after: { nisabGoldGrams, goldPricePerGramKobo: goldPricePerGramKobo.toString() } });
        return this.serializeNisabConfig(updated);
    }
    serializeNisabConfig(c) {
        return { ...c, goldPricePerGramKobo: c.goldPricePerGramKobo?.toString() ?? null };
    }
    async getNisabThresholdKobo() {
        const config = await this.getNisabConfig();
        if (config.nisabGoldGrams == null || config.goldPricePerGramKobo == null)
            return null;
        return BigInt(Math.round(Number(config.nisabGoldGrams) * 1000)) * config.goldPricePerGramKobo / 1000n;
    }
    async activateSubscription(investorId, actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'activate a Zakat subscription');
        const sub = await this.prisma.zakatClientSubscription.upsert({
            where: { investorId },
            create: { investorId, isActive: true, activatedByUserId: actorUserId },
            update: { isActive: true, activatedByUserId: actorUserId, activatedAt: new Date(), deactivatedByUserId: null, deactivatedAt: null },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_client_subscription', entityId: investorId, after: { isActive: true } });
        return sub;
    }
    async deactivateSubscription(investorId, actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'deactivate a Zakat subscription');
        const sub = await this.prisma.zakatClientSubscription.update({
            where: { investorId },
            data: { isActive: false, deactivatedByUserId: actorUserId, deactivatedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_client_subscription', entityId: investorId, after: { isActive: false } });
        return sub;
    }
    async electRateBasis(investorId, rateBasis) {
        const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId } });
        if (!sub.isActive)
            throw new zakat_types_1.ZakatError(`Zakat subscription for investor ${investorId} is not active.`);
        return this.prisma.zakatClientSubscription.update({ where: { investorId }, data: { rateBasisElection: rateBasis } });
    }
    async isNisabBreached(investorId) {
        const threshold = await this.getNisabThresholdKobo();
        const snapshot = await this.wm.combinedBookSnapshot(investorId);
        const totalWealthKobo = BigInt(snapshot.totalKobo);
        return {
            breached: threshold != null && totalWealthKobo >= threshold,
            totalWealthKobo: totalWealthKobo.toString(),
            nisabThresholdKobo: threshold?.toString() ?? null,
        };
    }
    async listActiveSubscriptions() {
        return this.prisma.zakatClientSubscription.findMany({ where: { isActive: true }, include: { investor: { select: { fullLegalName: true, contactEmail: true } } } });
    }
    async isZakatTabActive(investorId) {
        const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
        return sub?.isActive ?? false;
    }
    async requestSubscription(investorId, consentAcknowledged) {
        if (!consentAcknowledged) {
            throw new zakat_types_1.ZakatError('The Zakat Computation service advisory-use consent must be acknowledged before requesting this service.');
        }
        const existingSub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
        if (existingSub?.isActive) {
            throw new zakat_types_1.ZakatError(`Investor ${investorId} already has an active Zakat subscription.`);
        }
        const existingPending = await this.prisma.zakatSubscriptionRequest.findFirst({ where: { investorId, status: 'PENDING' } });
        if (existingPending)
            return existingPending;
        return this.prisma.zakatSubscriptionRequest.create({ data: { investorId, consentAcknowledgedAt: new Date() } });
    }
    async listPendingSubscriptionRequests(actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'VIEW', 'list pending Zakat subscription requests');
        return this.prisma.zakatSubscriptionRequest.findMany({
            where: { status: 'PENDING' },
            orderBy: { requestedAt: 'asc' },
            include: { investor: { select: { fullLegalName: true, contactEmail: true } } },
        });
    }
    async approveSubscriptionRequest(requestId, actorUserId) {
        const request = await this.prisma.zakatSubscriptionRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.status !== 'PENDING') {
            throw new zakat_types_1.ZakatError(`Zakat subscription request ${requestId} is already ${request.status}.`);
        }
        await this.activateSubscription(request.investorId, actorUserId);
        const updated = await this.prisma.zakatSubscriptionRequest.update({
            where: { id: requestId },
            data: { status: 'APPROVED', approvedByUserId: actorUserId, approvedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'APPROVE', entityType: 'zakat_subscription_request', entityId: requestId, after: { status: 'APPROVED', investorId: request.investorId } });
        return updated;
    }
    async createAssessmentSandbox(input) {
        await this.assertCapability(input.createdByUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'create a Zakat assessment sandbox');
        const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId: input.investorId } });
        if (!sub.isActive)
            throw new zakat_types_1.ZakatError(`Zakat subscription for investor ${input.investorId} is not active — activate it first.`);
        if (!sub.rateBasisElection) {
            throw new zakat_types_1.ZakatError(`Investor ${input.investorId} has not yet elected a Zakat rate basis (LUNAR/GREGORIAN) — required before creating an assessment.`);
        }
        const snapshot = await this.wm.combinedBookSnapshot(input.investorId);
        const run = await this.prisma.zakatAssessmentRun.create({
            data: {
                investorId: input.investorId,
                assessmentDateGregorian: input.assessmentDateGregorian,
                assessmentDateHijri: input.assessmentDateHijri,
                rateBasis: sub.rateBasisElection,
                oneSeventeenBalancesSnapshot: snapshot,
                createdByUserId: input.createdByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'zakat_assessment_run', entityId: run.id, after: { investorId: input.investorId, rateBasis: sub.rateBasisElection } });
        return this.serializeRun(run);
    }
    async clientAgreeToSandbox(runId, investorId) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId } });
        if (run.investorId !== investorId)
            throw new zakat_types_1.ZakatError(`Cross-client access denied: assessment ${runId} does not belong to investor ${investorId}.`);
        if (run.status !== 'DRAFT')
            throw new zakat_types_1.ZakatError(`Assessment ${runId} is not in DRAFT (currently ${run.status}) — cannot re-agree.`);
        return this.prisma.zakatAssessmentRun.update({ where: { id: runId }, data: { status: 'CLIENT_AGREED' } });
    }
    async declareScheduleItem(input) {
        await this.assertCapability(input.declaredByUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'declare a Zakat schedule item');
        return this.declareScheduleItemCore({
            zakatAssessmentRunId: input.zakatAssessmentRunId,
            scheduleType: input.scheduleType,
            description: input.description,
            amountKobo: input.amountKobo,
            zakatability: input.zakatability,
            declarationSource: 'STAFF',
            declaredByUserId: input.declaredByUserId,
            initiatedByUserId: input.declaredByUserId,
        });
    }
    async declareScheduleItemAsClient(investorId, input) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: input.zakatAssessmentRunId } });
        if (run.investorId !== investorId) {
            throw new zakat_types_1.ZakatError(`Cross-client access denied: assessment ${input.zakatAssessmentRunId} does not belong to investor ${investorId}.`);
        }
        const systemUserId = await this.systemPortalClientUserId();
        return this.declareScheduleItemCore({
            zakatAssessmentRunId: input.zakatAssessmentRunId,
            scheduleType: input.scheduleType,
            description: input.description,
            amountKobo: input.amountKobo,
            zakatability: input.zakatability,
            declarationSource: 'CLIENT',
            declaredByUserId: null,
            initiatedByUserId: systemUserId,
        });
    }
    async declareScheduleItemCore(input) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: input.zakatAssessmentRunId } });
        if (run.status === 'CERTIFIED')
            throw new zakat_types_1.ZakatError(`Assessment ${input.zakatAssessmentRunId} is CERTIFIED — immutable, no further items may be declared.`);
        const item = await this.prisma.zakatDeclaredItem.create({
            data: {
                zakatAssessmentRunId: input.zakatAssessmentRunId,
                scheduleType: input.scheduleType,
                description: input.description,
                amountKobo: input.amountKobo,
                zakatability: input.zakatability,
                custodyFlag: 'EXTERNAL',
                declarationSource: input.declarationSource,
                declaredByUserId: input.declaredByUserId ?? undefined,
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'ZAKAT_ITEM_VALIDATION',
                entityType: 'zakat_declared_item',
                entityId: item.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'zakat_declared_item',
                entityId: item.id,
                after: { workflowTypeCode: 'ZAKAT_ITEM_VALIDATION', reason: err.message },
            });
            await this.prisma.zakatDeclaredItem.delete({ where: { id: item.id } });
            throw err;
        }
        const updated = await this.prisma.zakatDeclaredItem.update({ where: { id: item.id }, data: { workflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'zakat_declared_item', entityId: item.id, after: { scheduleType: input.scheduleType, zakatability: input.zakatability, declarationSource: input.declarationSource } });
        return { item: this.serializeItem(updated), workflowInstance };
    }
    async systemPortalClientUserId() {
        const email = 'system-portal-client@one17.test';
        let user = await this.prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            user = await this.prisma.appUser.create({ data: { email, displayName: 'System Portal Client' } });
        }
        const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
        if (!hasRole) {
            await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
        }
        return user.id;
    }
    async verifyScheduleItem(workflowInstanceId, verifierUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, verifierUserId);
        if (updated.status === 'APPROVED') {
            const item = await this.prisma.zakatDeclaredItem.update({
                where: { workflowInstanceId },
                data: { verificationTag: 'VERIFIED', verifiedByUserId: verifierUserId, verifiedAt: new Date() },
            });
            await this.audit.record({ actorUserId: verifierUserId, action: 'APPROVE', entityType: 'zakat_declared_item', entityId: item.id, after: { verificationTag: 'VERIFIED' } });
        }
        return updated;
    }
    serializeItem(item) {
        return { ...item, amountKobo: item.amountKobo.toString() };
    }
    async computeAssessment(runId) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
        const snapshot = run.oneSeventeenBalancesSnapshot;
        const netKobo = this.computeVerifiedNetZakatableKobo(snapshot.totalKobo, run.items);
        const rateThousandths = BigInt(zakat_types_1.ZAKAT_RATE_THOUSANDTHS_OF_PERCENT[run.rateBasis]);
        const dueKobo = (netKobo * rateThousandths) / 100000n;
        const updated = await this.prisma.zakatAssessmentRun.update({
            where: { id: runId },
            data: { netZakatableKobo: netKobo, zakatDueKobo: dueKobo },
        });
        return this.serializeRun(updated);
    }
    async submitForCertification(runId, actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'submit a Zakat assessment for Shariah certification');
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
        if (run.status !== 'CLIENT_AGREED') {
            throw new zakat_types_1.ZakatError(`Assessment ${runId} must be CLIENT_AGREED before certification submission (currently ${run.status}).`);
        }
        const workflowInstanceIds = run.items.map((i) => i.workflowInstanceId).filter((id) => id != null);
        const instances = workflowInstanceIds.length
            ? await this.prisma.workflowInstance.findMany({ where: { id: { in: workflowInstanceIds } } })
            : [];
        const statusByInstanceId = new Map(instances.map((wi) => [wi.id, wi.status]));
        const outstanding = run.items.filter((item) => {
            if (item.verificationTag === 'VERIFIED')
                return false;
            const wfStatus = item.workflowInstanceId ? statusByInstanceId.get(item.workflowInstanceId) : undefined;
            return wfStatus !== 'REJECTED';
        });
        if (outstanding.length > 0) {
            throw new zakat_types_1.ZakatError(`Assessment ${runId} cannot be submitted for certification -- ${outstanding.length} declared item(s) are not yet final (neither VERIFIED nor REJECTED): ${outstanding.map((i) => `${i.description} (${i.id})`).join('; ')}. Verify or reject each item first.`);
        }
        await this.computeAssessment(runId);
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'ZAKAT_ASSESSMENT_CERTIFICATION',
            entityType: 'zakat_assessment_run',
            entityId: run.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        const updated = await this.prisma.zakatAssessmentRun.update({
            where: { id: runId },
            data: { status: 'AWAITING_SHARIAH_CERTIFICATION', workflowInstanceId: workflowInstance.id },
        });
        return { run: this.serializeRun(updated), workflowInstance };
    }
    async certifyAssessment(workflowInstanceId, certifierUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, certifierUserId);
        if (updated.status === 'APPROVED') {
            const run = await this.prisma.zakatAssessmentRun.update({
                where: { workflowInstanceId },
                data: { status: 'CERTIFIED', certifiedByUserId: certifierUserId, certifiedAt: new Date() },
            });
            await this.audit.record({ actorUserId: certifierUserId, action: 'APPROVE', entityType: 'zakat_assessment_run', entityId: run.id, after: { status: 'CERTIFIED' } });
            const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId: run.investorId } });
            if (!sub.zakatAnniversaryGregorian) {
                await this.prisma.zakatClientSubscription.update({
                    where: { investorId: run.investorId },
                    data: { zakatAnniversaryGregorian: run.assessmentDateGregorian, zakatAnniversaryHijri: run.assessmentDateHijri },
                });
            }
        }
        return updated;
    }
    serializeRun(run) {
        return { ...run, netZakatableKobo: run.netZakatableKobo?.toString() ?? null, zakatDueKobo: run.zakatDueKobo?.toString() ?? null };
    }
    async resolveAdvisorRecipients(investorId) {
        const wmProfile = await this.prisma.wmClientProfile.findUnique({ where: { investorId } });
        if (wmProfile?.advisorUserId)
            return [wmProfile.advisorUserId];
        const holders = await this.prisma.userRole.findMany({ where: { roleCode: 'WM_ADVISOR' }, select: { userId: true } });
        return holders.map((h) => h.userId);
    }
    async runNisabBreachMonitor() {
        const subs = await this.listActiveSubscriptions();
        let prompted = 0;
        for (const sub of subs) {
            const { breached } = await this.isNisabBreached(sub.investorId);
            if (!breached)
                continue;
            const openRun = await this.prisma.zakatAssessmentRun.findFirst({
                where: { investorId: sub.investorId, status: { in: ['DRAFT', 'CLIENT_AGREED', 'AWAITING_SHARIAH_CERTIFICATION'] } },
            });
            if (openRun)
                continue;
            const recipients = await this.resolveAdvisorRecipients(sub.investorId);
            for (const recipientUserId of recipients) {
                await this.notification.create({
                    recipientUserId,
                    type: 'GENERIC',
                    title: 'Zakat nisab threshold breached',
                    body: `Investor ${sub.investorId} now exceeds the governed Zakat nisab threshold — present the Zakat Assessment Sandbox.`,
                    linkPath: '/zakat',
                });
            }
            prompted++;
        }
        return { checked: subs.length, prompted };
    }
    isAnniversaryToday(anniversary, now) {
        return anniversary.getUTCMonth() === now.getUTCMonth() && anniversary.getUTCDate() === now.getUTCDate();
    }
    async runAnnualReminderSweep(scheduledFor) {
        const subs = await this.prisma.zakatClientSubscription.findMany({
            where: { isActive: true, zakatAnniversaryGregorian: { not: null } },
        });
        let reminded = 0;
        for (const sub of subs) {
            if (!this.isAnniversaryToday(sub.zakatAnniversaryGregorian, scheduledFor))
                continue;
            const recipients = await this.resolveAdvisorRecipients(sub.investorId);
            for (const recipientUserId of recipients) {
                await this.notification.create({
                    recipientUserId,
                    type: 'GENERIC',
                    title: 'Zakat annual anniversary due',
                    body: `Investor ${sub.investorId}'s Zakat anniversary is today (${sub.zakatAnniversaryHijri ?? 'Hijri date not recorded'}) — schedule the annual reassessment.`,
                    linkPath: '/zakat',
                });
            }
            reminded++;
        }
        return { checked: subs.length, reminded };
    }
    async listAssessmentsForInvestor(investorId) {
        const runs = await this.prisma.zakatAssessmentRun.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
        return runs.map((r) => this.serializeRun(r));
    }
    async getAssessmentDetail(runId, investorId) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
        if (run.investorId !== investorId) {
            throw new zakat_types_1.ZakatError(`Cross-client access denied: assessment ${runId} does not belong to investor ${investorId}.`);
        }
        return { run: this.serializeRun(run), items: run.items.map((i) => this.serializeItem(i)) };
    }
    async getAssessmentDetailStaff(runId) {
        const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
        return { run: this.serializeRun(run), items: run.items.map((i) => this.serializeItem(i)) };
    }
    async listPendingCertifications(actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_CERTIFICATION', 'VIEW', 'list assessments awaiting Shariah certification');
        const runs = await this.prisma.zakatAssessmentRun.findMany({
            where: { status: 'AWAITING_SHARIAH_CERTIFICATION' },
            orderBy: { createdAt: 'asc' },
            include: { subscription: { include: { investor: { select: { fullLegalName: true } } } } },
        });
        return runs.map((r) => this.serializeRun(r));
    }
    computeVerifiedNetZakatableKobo(oneSeventeenTotalKobo, items) {
        let netKobo = BigInt(oneSeventeenTotalKobo);
        for (const item of items) {
            if (item.zakatability !== 'ZAKATABLE')
                continue;
            if (item.verificationTag !== 'VERIFIED')
                continue;
            if (item.scheduleType === 'LIABILITY')
                netKobo -= item.amountKobo;
            else
                netKobo += item.amountKobo;
        }
        return netKobo < 0n ? 0n : netKobo;
    }
    async getZakatPositionForClient(investorId) {
        const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
        if (!sub?.isActive) {
            throw new zakat_types_1.ZakatError(`Zakat Computation is not active for investor ${investorId} — request the service and wait for staff approval first.`);
        }
        const nisab = await this.isNisabBreached(investorId);
        const latestRun = await this.prisma.zakatAssessmentRun.findFirst({
            where: { investorId },
            orderBy: { createdAt: 'desc' },
            include: { items: true },
        });
        if (!latestRun) {
            const snapshot = await this.wm.combinedBookSnapshot(investorId);
            return {
                subscription: { isActive: sub.isActive, rateBasisElection: sub.rateBasisElection },
                assessment: null,
                oneSeventeenTotalKobo: snapshot.totalKobo,
                composition: [{ scheduleType: 'ONE17_CUSTODY', zakatability: 'ZAKATABLE', amountKobo: snapshot.totalKobo, verificationTag: 'VERIFIED', declarationSource: null }],
                nisab,
                verifiedNetZakatableKobo: snapshot.totalKobo,
                officialNetZakatableKobo: null,
                officialZakatDueKobo: null,
                items: [],
            };
        }
        const oneSeventeenTotalKobo = latestRun.oneSeventeenBalancesSnapshot.totalKobo;
        const verifiedNetZakatableKobo = this.computeVerifiedNetZakatableKobo(oneSeventeenTotalKobo, latestRun.items);
        const composition = [
            { scheduleType: 'ONE17_CUSTODY', zakatability: 'ZAKATABLE', amountKobo: oneSeventeenTotalKobo, verificationTag: 'VERIFIED', declarationSource: null },
            ...latestRun.items.map((it) => ({ scheduleType: it.scheduleType, zakatability: it.zakatability, amountKobo: it.amountKobo.toString(), verificationTag: it.verificationTag, declarationSource: it.declarationSource })),
        ];
        return {
            subscription: { isActive: sub.isActive, rateBasisElection: sub.rateBasisElection },
            assessment: this.serializeRun(latestRun),
            oneSeventeenTotalKobo,
            composition,
            nisab,
            verifiedNetZakatableKobo: verifiedNetZakatableKobo.toString(),
            officialNetZakatableKobo: latestRun.netZakatableKobo?.toString() ?? null,
            officialZakatDueKobo: latestRun.zakatDueKobo?.toString() ?? null,
            items: latestRun.items.map((i) => this.serializeItem(i)),
        };
    }
    async getPortfolioAdvisoryFeed(investorId, actorUserId) {
        await this.assertCapability(actorUserId, 'ZAKAT_PORTFOLIO_ADVISORY_FEED', 'VIEW', "view a client's Zakat portfolio advisory feed");
        const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
        if (!sub?.isActive) {
            return { isActive: false, totalAssetSizeKobo: '0', mixByScheduleType: {} };
        }
        const snapshot = await this.wm.combinedBookSnapshot(investorId);
        const oneSeventeenTotalKobo = BigInt(snapshot.totalKobo);
        const latestRun = await this.prisma.zakatAssessmentRun.findFirst({ where: { investorId }, orderBy: { createdAt: 'desc' } });
        const mix = { ONE17_CUSTODY: oneSeventeenTotalKobo };
        if (latestRun) {
            const verifiedItems = await this.prisma.zakatDeclaredItem.findMany({
                where: { zakatAssessmentRunId: latestRun.id, verificationTag: 'VERIFIED', scheduleType: { not: 'LIABILITY' } },
            });
            for (const item of verifiedItems) {
                mix[item.scheduleType] = (mix[item.scheduleType] ?? 0n) + item.amountKobo;
            }
        }
        const totalAssetSizeKobo = Object.values(mix).reduce((s, v) => s + v, 0n);
        return {
            isActive: true,
            totalAssetSizeKobo: totalAssetSizeKobo.toString(),
            mixByScheduleType: Object.fromEntries(Object.entries(mix).map(([k, v]) => [k, v.toString()])),
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'zakat_activity', entityId: activity, after: { functionCode, level } });
            throw new zakat_types_1.ZakatError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ZakatService = ZakatService;
exports.ZakatService = ZakatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        wm_service_1.WmService,
        notification_service_1.NotificationService])
], ZakatService);
//# sourceMappingURL=zakat.service.js.map