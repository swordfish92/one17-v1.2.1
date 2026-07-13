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
exports.PublicIntakeService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const investor_service_1 = require("../investor/investor.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const privacy_notice_service_1 = require("../data-protection/privacy-notice.service");
const public_intake_types_1 = require("./public-intake.types");
let PublicIntakeService = class PublicIntakeService {
    prisma;
    audit;
    delegation;
    investors;
    counterparties;
    privacyNotice;
    constructor(prisma, audit, delegation, investors, counterparties, privacyNotice) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.investors = investors;
        this.counterparties = counterparties;
        this.privacyNotice = privacyNotice;
    }
    async submitInvestorExpress(payload, submittedIp) {
        if (!payload.privacyNoticeAcknowledged) {
            throw new public_intake_types_1.PublicIntakeError('The privacy notice must be acknowledged before submitting.');
        }
        const created = await this.prisma.publicIntakeSubmission.create({
            data: {
                intakeType: 'INVESTOR_EXPRESS',
                payload: payload,
                submittedIp,
            },
        });
        await this.audit.record({
            action: 'CREATE',
            entityType: 'public_intake_submission',
            entityId: created.id,
            after: { intakeType: 'INVESTOR_EXPRESS', submittedIp },
        });
        const notice = await this.privacyNotice.getActiveNotice();
        await this.privacyNotice.recordAcknowledgment({
            noticeVersion: notice.version,
            context: 'PUBLIC_INTAKE',
            publicIntakeSubmissionId: created.id,
            ipAddress: submittedIp,
        });
        if (payload.marketingConsent) {
            const existing = await this.prisma.marketingSubscriber.findUnique({ where: { email: payload.contactEmail } });
            if (!existing) {
                await this.prisma.marketingSubscriber.create({
                    data: {
                        email: payload.contactEmail,
                        fullName: payload.fullLegalName,
                        segments: [],
                        unsubscribeToken: (0, node_crypto_1.randomBytes)(24).toString('base64url'),
                        consentedAt: new Date(),
                        consentNoticeVersion: notice.version,
                    },
                });
            }
        }
        return { id: created.id, status: created.status };
    }
    async submitCounterparty(payload, submittedIp) {
        if (!payload.privacyNoticeAcknowledged) {
            throw new public_intake_types_1.PublicIntakeError('The privacy notice must be acknowledged before submitting.');
        }
        const created = await this.prisma.publicIntakeSubmission.create({
            data: {
                intakeType: 'COUNTERPARTY',
                payload: payload,
                submittedIp,
            },
        });
        await this.audit.record({
            action: 'CREATE',
            entityType: 'public_intake_submission',
            entityId: created.id,
            after: { intakeType: 'COUNTERPARTY', submittedIp },
        });
        const notice = await this.privacyNotice.getActiveNotice();
        await this.privacyNotice.recordAcknowledgment({
            noticeVersion: notice.version,
            context: 'PUBLIC_INTAKE',
            publicIntakeSubmissionId: created.id,
            ipAddress: submittedIp,
        });
        return { id: created.id, status: created.status };
    }
    async listPending(viewerUserId) {
        await this.assertViewer(viewerUserId);
        return this.prisma.publicIntakeSubmission.findMany({
            where: { status: 'PENDING' },
            orderBy: { createdAt: 'asc' },
        });
    }
    async promoteInvestorSubmission(submissionId, actorUserId, sanctionsScreenResult) {
        const submission = await this.prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.intakeType !== 'INVESTOR_EXPRESS') {
            throw new public_intake_types_1.PublicIntakeError(`Submission ${submissionId} is a ${submission.intakeType} intake, not INVESTOR_EXPRESS.`);
        }
        if (submission.status !== 'PENDING') {
            throw new public_intake_types_1.PublicIntakeError(`Submission ${submissionId} is already ${submission.status}.`);
        }
        const payload = submission.payload;
        const investor = await this.investors.onboardExpress({
            ...payload,
            onboardedByUserId: actorUserId,
            sanctionsScreenResult,
        });
        await this.prisma.publicIntakeSubmission.update({
            where: { id: submissionId },
            data: {
                status: 'PROMOTED',
                promotedByUserId: actorUserId,
                promotedAt: new Date(),
                resultingInvestorId: investor.investorId,
            },
        });
        return investor;
    }
    async promoteCounterpartySubmission(submissionId, actorUserId) {
        const submission = await this.prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.intakeType !== 'COUNTERPARTY') {
            throw new public_intake_types_1.PublicIntakeError(`Submission ${submissionId} is a ${submission.intakeType} intake, not COUNTERPARTY.`);
        }
        if (submission.status !== 'PENDING') {
            throw new public_intake_types_1.PublicIntakeError(`Submission ${submissionId} is already ${submission.status}.`);
        }
        const payload = submission.payload;
        const counterparty = await this.counterparties.onboard({
            ...payload,
            amountSoughtKobo: BigInt(payload.amountSoughtKobo),
            onboardedByUserId: actorUserId,
        });
        await this.prisma.publicIntakeSubmission.update({
            where: { id: submissionId },
            data: {
                status: 'PROMOTED',
                promotedByUserId: actorUserId,
                promotedAt: new Date(),
                resultingCounterpartyId: counterparty.id,
            },
        });
        return counterparty;
    }
    async reject(submissionId, actorUserId, reason) {
        await this.assertViewer(actorUserId);
        const updated = await this.prisma.publicIntakeSubmission.update({
            where: { id: submissionId },
            data: { status: 'REJECTED', rejectionReason: reason, promotedByUserId: actorUserId, promotedAt: new Date() },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'public_intake_submission',
            entityId: submissionId,
            after: { status: 'REJECTED', reason },
        });
        return updated;
    }
    async assertViewer(userId) {
        const [investorView, counterpartyView] = await Promise.all([
            this.delegation.hasCapability(userId, 'INVESTOR_ONBOARDING', 'VIEW'),
            this.delegation.hasCapability(userId, 'COUNTERPARTY_ONBOARDING', 'VIEW'),
        ]);
        if (!investorView.eligible && !counterpartyView.eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'public_intake_submission',
                entityId: 'register',
                after: { requiredEither: ['INVESTOR_ONBOARDING:VIEW', 'COUNTERPARTY_ONBOARDING:VIEW'] },
            });
            throw new public_intake_types_1.PublicIntakeError('User lacks VIEW authority on INVESTOR_ONBOARDING or COUNTERPARTY_ONBOARDING (standing or delegated), required to view the public intake queue.');
        }
    }
};
exports.PublicIntakeService = PublicIntakeService;
exports.PublicIntakeService = PublicIntakeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        investor_service_1.InvestorService,
        counterparty_service_1.CounterpartyService,
        privacy_notice_service_1.PrivacyNoticeService])
], PublicIntakeService);
//# sourceMappingURL=public-intake.service.js.map