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
var InvestorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const delegation_service_1 = require("../delegation/delegation.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_types_1 = require("./investor.types");
let InvestorService = class InvestorService {
    static { InvestorService_1 = this; }
    prisma;
    audit;
    workflow;
    delegation;
    portalAuth;
    screeningGateway;
    constructor(prisma, audit, workflow, delegation, portalAuth, screeningGateway) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.delegation = delegation;
        this.portalAuth = portalAuth;
        this.screeningGateway = screeningGateway;
    }
    async onboard(input) {
        await this.assertCapability(input.onboardedByUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'onboard an investor');
        const investorId = await this.generateInvestorId();
        const investor = await this.prisma.investor.create({
            data: {
                investorId,
                fullLegalName: input.fullLegalName,
                entityType: input.entityType,
                nationality: input.nationality,
                taxIdentificationNumber: input.taxIdentificationNumber,
                dateOfBirthOrIncorporation: input.dateOfBirthOrIncorporation,
                contactEmail: input.contactEmail,
                contactPhone: input.contactPhone,
                registeredAddress: input.registeredAddress,
                sourceOfFunds: input.sourceOfFunds,
                authorisedSignatories: input.authorisedSignatories,
                onboardedByUserId: input.onboardedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.onboardedByUserId,
            action: 'CREATE',
            entityType: 'investor',
            entityId: investor.investorId,
            after: {
                fullLegalName: input.fullLegalName,
                entityType: input.entityType,
                contactEmail: input.contactEmail,
            },
        });
        return investor;
    }
    async addKycDocument(input) {
        await this.assertCapability(input.uploadedByUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'add a KYC document');
        const created = await this.prisma.investorKycDocument.create({
            data: input,
        });
        await this.audit.record({
            actorUserId: input.uploadedByUserId,
            action: 'CREATE',
            entityType: 'investor_kyc_document',
            entityId: created.id,
            after: { investorId: input.investorId, documentType: input.documentType },
        });
        return created;
    }
    async addBankAccount(input) {
        await this.assertCapability(input.addedByUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'add a bank account');
        const created = await this.prisma.investorBankAccount.create({
            data: {
                investorId: input.investorId,
                bankName: input.bankName,
                accountNumber: input.accountNumber,
                accountName: input.accountName,
            },
        });
        await this.audit.record({
            actorUserId: input.addedByUserId,
            action: 'CREATE',
            entityType: 'investor_bank_account',
            entityId: created.id,
            after: { investorId: input.investorId, bankName: input.bankName },
        });
        return created;
    }
    async recordScreening(input) {
        await this.assertCapability(input.screenerUserId, 'SCREENING_PERFORM', 'INITIATE', 'perform AML/sanctions screening');
        const activeItems = await this.prisma.screeningChecklistItem.findMany({
            where: { isActive: true },
        });
        const checkedCodes = new Set(input.listsChecked.map((c) => c.itemCode));
        const missing = activeItems.filter((i) => !checkedCodes.has(i.itemCode));
        if (missing.length > 0) {
            throw new investor_types_1.InvestorLifecycleError(`Screening checklist incomplete — missing: ${missing.map((i) => i.itemCode).join(', ')} (Manual Screening Procedure §3).`);
        }
        const investor = await this.prisma.investor.findUniqueOrThrow({
            where: { investorId: input.investorId },
        });
        let viaDelegationId;
        if (input.screenerUserId === investor.onboardedByUserId) {
            if (!input.countersignerUserId) {
                throw new investor_types_1.InvestorLifecycleError('Screener is the same person who onboarded this investor; a countersignature is required (Manual Screening Procedure §2).');
            }
            const { eligible, viaDelegationId: grantId } = await this.delegation.hasCapability(input.countersignerUserId, 'SCREENING_COUNTERSIGN', 'APPROVE');
            if (!eligible) {
                throw new investor_types_1.InvestorLifecycleError('Countersigner lacks SCREENING_COUNTERSIGN authority, standing or delegated (Manual Screening Procedure §2).');
            }
            viaDelegationId = grantId;
        }
        const created = await this.prisma.investorScreeningRecord.create({
            data: {
                investorId: input.investorId,
                listsChecked: input.listsChecked,
                searchTermsUsed: input.searchTermsUsed,
                result: input.result,
                screenerUserId: input.screenerUserId,
                countersignerUserId: input.countersignerUserId,
                notes: input.notes,
            },
        });
        await this.audit.record({
            actorUserId: input.screenerUserId,
            action: 'CREATE',
            entityType: 'investor_screening_record',
            entityId: created.id,
            after: {
                investorId: input.investorId,
                result: input.result,
                countersignerUserId: input.countersignerUserId,
                viaDelegationId,
            },
        });
        return created;
    }
    async recordPeriodicReview(investorId, actorUserId) {
        await this.assertCapability(actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a KYC periodic review');
        const onboardingCase = await this.prisma.investorOnboardingCase.findFirstOrThrow({ where: { investorId } });
        const updated = await this.prisma.investorOnboardingCase.update({
            where: { id: onboardingCase.id },
            data: { lastPeriodicReviewAt: new Date() },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'investor_onboarding_case',
            entityId: onboardingCase.id,
            after: { lastPeriodicReviewAt: updated.lastPeriodicReviewAt },
        });
        return updated;
    }
    async setAmlRiskRating(investorId, amlRiskRating, actorUserId) {
        await this.assertCapability(actorUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'set an investor AML risk rating');
        const investor = await this.prisma.investor.update({
            where: { investorId },
            data: { amlRiskRating },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'investor',
            entityId: investorId,
            after: { amlRiskRating },
        });
        return investor;
    }
    async assignRelationshipManager(investorId, relationshipManagerUserId, actorUserId) {
        await this.assertCapability(actorUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'assign an investor\'s relationship manager');
        const investor = await this.prisma.investor.update({
            where: { investorId },
            data: { relationshipManagerUserId },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'investor',
            entityId: investorId,
            after: { relationshipManagerUserId },
        });
        return investor;
    }
    async submitForKycApproval(investorId, initiatedByUserId) {
        const investor = await this.prisma.investor.findUniqueOrThrow({
            where: { investorId },
        });
        if (!investor.amlRiskRating) {
            throw new investor_types_1.InvestorLifecycleError('No AML risk rating on file — onboarding cannot proceed (Onboarding Design Stage 5).');
        }
        const latestScreening = await this.prisma.investorScreeningRecord.findFirst({
            where: { investorId },
            orderBy: { screenedAt: 'desc' },
        });
        if (!latestScreening) {
            throw new investor_types_1.InvestorLifecycleError('No screening record on file — onboarding cannot proceed (Manual Screening Procedure §4).');
        }
        if (latestScreening.result === 'MATCH') {
            throw new investor_types_1.InvestorLifecycleError('Latest screening result is MATCH — onboarding is blocked pending escalation (Manual Screening Procedure §5).');
        }
        await this.screeningGateway.ensureScreened('INVESTOR', investorId, investor.fullLegalName, initiatedByUserId);
        const screeningBlock = await this.screeningGateway.hasBlockingScreeningResult('INVESTOR', investorId);
        if (screeningBlock.blocked) {
            throw new investor_types_1.InvestorLifecycleError(`Screening Gateway: ${screeningBlock.reason} (invariant 72(b) — onboarding cannot proceed until every hit is adjudicated).`);
        }
        return this.workflow.initiate({
            workflowTypeCode: 'INVESTOR_ONBOARDING',
            entityType: 'investor',
            entityId: investorId,
            initiatedByUserId,
            scenario: 'STANDARD',
        });
    }
    static KYC_EXPIRY_YEARS_BY_RISK_RATING = { LOW: 3, MEDIUM: 2, HIGH: 1 };
    async approveKyc(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        return this.finalizeKycApproval(updated.entityId, approverUserId);
    }
    async finalizeKycApproval(investorId, approverUserId) {
        const investorBefore = await this.prisma.investor.findUniqueOrThrow({
            where: { investorId },
        });
        const years = InvestorService_1.KYC_EXPIRY_YEARS_BY_RISK_RATING[investorBefore.amlRiskRating ?? 'HIGH'];
        const kycExpiryDate = new Date();
        kycExpiryDate.setFullYear(kycExpiryDate.getFullYear() + years);
        const investor = await this.prisma.investor.update({
            where: { investorId },
            data: {
                kycStatus: 'KYC_COMPLETE',
                onboardingStage: 'STAGE_2_COMPLETE',
                complianceApprovedByUserId: approverUserId,
                kycExpiryDate,
            },
        });
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'UPDATE',
            entityType: 'investor',
            entityId: investor.investorId,
            after: {
                kycStatus: 'KYC_COMPLETE',
                kycExpiryDate,
                amlRiskRating: investorBefore.amlRiskRating,
                tierYears: years,
            },
        });
        const portal = await this.portalAuth.provisionForInvestor(investor.investorId);
        return { ...investor, portal };
    }
    async onboardExpress(input) {
        await this.assertCapability(input.onboardedByUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'onboard an investor (Stage-1 Express)');
        if (input.sanctionsScreenResult === 'FLAGGED') {
            await this.audit.record({
                actorUserId: input.onboardedByUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'investor_onboarding_express_attempt',
                entityId: input.contactEmail,
                after: {
                    fullLegalName: input.fullLegalName,
                    sanctionsScreenResult: 'FLAGGED',
                },
            });
            throw new investor_types_1.InvestorLifecycleError('Automated sanctions screen returned FLAGGED — no customer number is issued (invariant 27a). Escalate to Compliance before any further onboarding action.');
        }
        const config = await this.prisma.investorOnboardingConfig.findFirst({
            where: { status: 'ACTIVE' },
            orderBy: { version: 'desc' },
        });
        if (!config) {
            throw new investor_types_1.InvestorLifecycleError('No ACTIVE investor_onboarding_config — cannot issue a Stage-1 Express customer number without a governed deposit cap/deadline (AMD-12).');
        }
        const investorId = await this.generateInvestorId();
        const now = new Date();
        const stage2DeadlineAt = new Date(now);
        stage2DeadlineAt.setDate(stage2DeadlineAt.getDate() + config.stage2CompletionDeadlineDays);
        const investor = await this.prisma.investor.create({
            data: {
                investorId,
                fullLegalName: input.fullLegalName,
                entityType: input.entityType,
                nationality: input.nationality,
                bvn: input.bvn,
                rcNumber: input.rcNumber,
                contactEmail: input.contactEmail,
                contactPhone: input.contactPhone,
                onboardingStage: 'STAGE_1_EXPRESS',
                stage1IssuedAt: now,
                stage2DeadlineAt,
                onboardedByUserId: input.onboardedByUserId,
            },
        });
        await this.prisma.investorOnboardingCase.create({
            data: {
                investorId,
                sanctionsScreenResult: 'CLEAR',
                sanctionsScreenedAt: now,
            },
        });
        if (input.leadId) {
            await this.prisma.lead.update({
                where: { id: input.leadId },
                data: { status: 'CONVERTED', convertedInvestorId: investorId },
            });
        }
        await this.audit.record({
            actorUserId: input.onboardedByUserId,
            action: 'CREATE',
            entityType: 'investor',
            entityId: investor.investorId,
            after: {
                fullLegalName: input.fullLegalName,
                onboardingStage: 'STAGE_1_EXPRESS',
                stage2DeadlineAt,
            },
        });
        return investor;
    }
    async submitStage2Fields(input) {
        await this.assertCapability(input.actorUserId, 'INVESTOR_ONBOARDING', 'INITIATE', 'submit Stage-2 onboarding fields');
        const investor = await this.prisma.investor.update({
            where: { investorId: input.investorId },
            data: {
                taxIdentificationNumber: input.taxIdentificationNumber,
                registeredAddress: input.registeredAddress,
                sourceOfFunds: input.sourceOfFunds,
                dateOfBirthOrIncorporation: input.dateOfBirthOrIncorporation,
                authorisedSignatories: input.authorisedSignatories,
            },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'investor',
            entityId: input.investorId,
            after: { stage2FieldsSubmitted: true },
        });
        return investor;
    }
    static computeAccumulativeRiskProfile(grades) {
        const highCount = grades.filter((g) => g.grade === 'HIGH').length;
        const mediumCount = grades.filter((g) => g.grade === 'MEDIUM').length;
        if (highCount >= 1 || mediumCount >= 6)
            return 'HIGH';
        if (mediumCount >= 3)
            return 'MEDIUM_LOW';
        return 'LOW';
    }
    async recordComplianceRiskAssessment(input) {
        await this.assertCapability(input.assessedByUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a compliance risk assessment');
        if (input.riskMetricGrades.length !== 9) {
            throw new investor_types_1.InvestorLifecycleError(`Risk assessment requires all 9 metrics graded — received ${input.riskMetricGrades.length} (Investor Onboarding Template §2b).`);
        }
        const profile = InvestorService_1.computeAccumulativeRiskProfile(input.riskMetricGrades);
        const eddRequired = profile === 'HIGH';
        const onboardingCase = await this.prisma.investorOnboardingCase.upsert({
            where: { investorId: input.investorId },
            create: {
                investorId: input.investorId,
                riskMetricGrades: input.riskMetricGrades,
                pepSanctionsGrid: input.pepSanctionsGrid,
                accumulativeRiskProfile: profile,
                eddRequired,
                complianceObservations: input.complianceObservations,
                complianceAssessedByUserId: input.assessedByUserId,
                complianceAssessedAt: new Date(),
            },
            update: {
                riskMetricGrades: input.riskMetricGrades,
                pepSanctionsGrid: input.pepSanctionsGrid,
                accumulativeRiskProfile: profile,
                eddRequired,
                complianceObservations: input.complianceObservations,
                complianceAssessedByUserId: input.assessedByUserId,
                complianceAssessedAt: new Date(),
            },
        });
        await this.prisma.investor.update({
            where: { investorId: input.investorId },
            data: {
                amlRiskRating: profile === 'MEDIUM_LOW' ? 'MEDIUM' : profile,
            },
        });
        await this.audit.record({
            actorUserId: input.assessedByUserId,
            action: 'CREATE',
            entityType: 'investor_onboarding_case',
            entityId: onboardingCase.id,
            after: { investorId: input.investorId, accumulativeRiskProfile: profile, eddRequired },
        });
        return onboardingCase;
    }
    async submitOnboardingCaseForReview(investorId, initiatedByUserId) {
        const onboardingCase = await this.prisma.investorOnboardingCase.findUniqueOrThrow({
            where: { investorId },
        });
        if (!onboardingCase.accumulativeRiskProfile) {
            throw new investor_types_1.InvestorLifecycleError('No accumulative risk profile on file — recordComplianceRiskAssessment must run before the case can be submitted for review (Step 2b/4).');
        }
        const scenario = onboardingCase.accumulativeRiskProfile === 'HIGH'
            ? 'HIGH_RISK'
            : 'LOW_MEDIUM_RISK';
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'INVESTOR_ONBOARDING_CASE_REVIEW',
            entityType: 'investor_onboarding_case',
            entityId: onboardingCase.id,
            initiatedByUserId,
            scenario,
        });
        await this.prisma.investorOnboardingCase.update({
            where: { investorId },
            data: { workflowInstanceId: instance.id },
        });
        return instance;
    }
    async recordIc1Review(input) {
        await this.prisma.investorOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                ic1Checklist: input.checklist,
                ic1Notes: input.notes,
            },
        });
        return input.pass
            ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
            : this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.notes);
    }
    async recordRiskReview(input) {
        await this.prisma.investorOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                eddChecklist: input.eddChecklist,
                eddRecommendation: input.eddRecommendation,
                eddConditionsOrBasis: input.eddConditionsOrBasis,
                periodicReviewFrequency: input.periodicReviewFrequency,
                riskNotes: input.riskNotes,
            },
        });
        return this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    }
    async recordMdDecision(input) {
        await this.prisma.investorOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                mdDecision: input.decision,
                mdConditionsOrReason: input.conditionsOrReason,
            },
        });
        return input.decision === 'APPROVED'
            ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
            : this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.conditionsOrReason);
    }
    async recordIc2Review(input) {
        const onboardingCase = await this.prisma.investorOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                ic2Checklist: input.checklist,
                ic2Notes: input.notes,
                ic2Outcome: input.outcome,
            },
        });
        if (input.outcome === 'UNSATISFACTORY') {
            return this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.notes);
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status === 'APPROVED') {
            const finalized = await this.finalizeKycApproval(onboardingCase.investorId, input.approverUserId);
            return { ...updated, portal: finalized.portal };
        }
        return updated;
    }
    async setupMandate(input) {
        await this.assertCapability(input.approvedByUserId, 'MANDATE_SETUP', 'APPROVE', 'approve a mandate setup');
        const isDirectDeal = input.mandateType === 'DIRECT_DEAL' ||
            input.mandateType === 'RESTRICTED_PLUS_DIRECT';
        if (!isDirectDeal &&
            (input.investorBaseRatio !== undefined ||
                input.mudaribBaseRatio !== undefined)) {
            throw new investor_types_1.InvestorLifecycleError('investorBaseRatio/mudaribBaseRatio are valid only for DIRECT_DEAL or RESTRICTED_PLUS_DIRECT mandates (AMD-01).');
        }
        if (input.earlyExitWaiver && !input.ssbWaiverResolutionRef) {
            throw new investor_types_1.InvestorLifecycleError('earlyExitWaiver requires ssbWaiverResolutionRef.');
        }
        const created = await this.prisma.investorMandate.create({
            data: {
                investorId: input.investorId,
                mandateType: input.mandateType,
                targetReturnRate: input.targetReturnRate,
                investorBaseRatio: input.investorBaseRatio,
                mudaribBaseRatio: input.mudaribBaseRatio,
                restrictedSectors: input.restrictedSectors ?? [],
                restrictedContracts: input.restrictedContracts ?? [],
                directDealInvestmentId: input.directDealInvestmentId,
                rolloverDefault: input.rolloverDefault ?? 'AUTO',
                earlyExitWaiver: input.earlyExitWaiver ?? false,
                ssbWaiverResolutionRef: input.ssbWaiverResolutionRef,
                effectiveDate: input.effectiveDate,
                approvedByUserId: input.approvedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.approvedByUserId,
            action: 'CREATE',
            entityType: 'investor_mandate',
            entityId: created.id,
            after: { investorId: input.investorId, mandateType: input.mandateType },
        });
        return created;
    }
    async requestMandateShariahReview(investorId, initiatedByUserId) {
        const mandate = await this.prisma.investorMandate.findUniqueOrThrow({
            where: { investorId },
        });
        if (mandate.mandateType !== 'RESTRICTED' &&
            mandate.mandateType !== 'RESTRICTED_PLUS_DIRECT') {
            throw new investor_types_1.InvestorLifecycleError('Only RESTRICTED or RESTRICTED_PLUS_DIRECT mandates require Shariah review (SRS §6.1 step 6).');
        }
        return this.workflow.initiate({
            workflowTypeCode: 'INVESTOR_MANDATE_SHARIAH_REVIEW',
            entityType: 'investor_mandate',
            entityId: mandate.id,
            initiatedByUserId,
            scenario: 'STANDARD',
        });
    }
    async approveMandateShariahReview(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const mandate = await this.prisma.investorMandate.update({
            where: { id: updated.entityId },
            data: { shariahReviewedByUserId: approverUserId },
        });
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'UPDATE',
            entityType: 'investor_mandate',
            entityId: mandate.id,
            after: { shariahReviewedByUserId: approverUserId },
        });
        return mandate;
    }
    async activate(investorId, actorUserId) {
        const investor = await this.prisma.investor.findUniqueOrThrow({
            where: { investorId },
            include: { mandate: true },
        });
        if (investor.kycStatus !== 'KYC_COMPLETE') {
            throw new investor_types_1.InvestorLifecycleError('Cannot activate: KYC is not complete.');
        }
        if (investor.fundStatus !== 'PENDING_KYC') {
            throw new investor_types_1.InvestorLifecycleError(`Cannot activate: fundStatus is ${investor.fundStatus}, not PENDING_KYC — transitions are forward-only (SRS §4.1.4).`);
        }
        const mandateRestricted = investor.mandate?.mandateType === 'RESTRICTED' ||
            investor.mandate?.mandateType === 'RESTRICTED_PLUS_DIRECT';
        if (mandateRestricted && !investor.mandate?.shariahReviewedByUserId) {
            throw new investor_types_1.InvestorLifecycleError('Cannot activate: restricted mandate is awaiting Shariah review.');
        }
        const updated = await this.prisma.investor.update({
            where: { investorId },
            data: { fundStatus: 'ACTIVE' },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'investor',
            entityId: investorId,
            after: { fundStatus: 'ACTIVE' },
        });
        return updated;
    }
    async kycExpiryAlerts(windowDays) {
        const now = new Date();
        const windowEnd = new Date(now.getTime() + windowDays * 24 * 60 * 60 * 1000);
        return this.prisma.investor.findMany({
            where: {
                kycStatus: 'KYC_COMPLETE',
                kycExpiryDate: { gte: now, lte: windowEnd },
                isDeleted: false,
            },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'investor_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new investor_types_1.InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async generateInvestorId() {
        const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const [{ nextval }] = await this.prisma.$queryRaw `
      SELECT nextval('investor_id_seq')
    `;
        return `INV-${datePart}-${nextval.toString().padStart(3, '0')}`;
    }
};
exports.InvestorService = InvestorService;
exports.InvestorService = InvestorService = InvestorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        delegation_service_1.DelegationService,
        portal_auth_service_1.PortalAuthService,
        screening_gateway_service_1.ScreeningGatewayService])
], InvestorService);
//# sourceMappingURL=investor.service.js.map