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
var CounterpartyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterpartyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const delegation_service_1 = require("../delegation/delegation.service");
const document_service_1 = require("../document/document.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const counterparty_types_1 = require("./counterparty.types");
let CounterpartyService = class CounterpartyService {
    static { CounterpartyService_1 = this; }
    prisma;
    audit;
    workflow;
    delegation;
    documents;
    screeningGateway;
    constructor(prisma, audit, workflow, delegation, documents, screeningGateway) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.delegation = delegation;
        this.documents = documents;
        this.screeningGateway = screeningGateway;
    }
    static FACILITY_APPLICATION_TYPE = 'FACILITY_APPLICATION';
    static FACILITY_APPLICATION_ENTITY_TYPE = 'counterparty_facility_application';
    async onboard(input) {
        await this.assertCapability(input.onboardedByUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'onboard a counterparty (investee)');
        if (!input.creditBureauConsent) {
            throw new counterparty_types_1.CounterpartyLifecycleError('Credit-bureau consent is required at Step 1 (invariant 27b addition, per the payment-reminders process doc).');
        }
        const counterparty = await this.prisma.counterparty.create({
            data: {
                legalName: input.legalName,
                counterpartyType: input.counterpartyType,
                rcNumber: input.rcNumber,
                country: input.country,
                purposeOfFinancing: input.purposeOfFinancing,
                amountSoughtKobo: input.amountSoughtKobo,
                expectedSourceOfRepayment: input.expectedSourceOfRepayment,
                creditBureauConsentAt: new Date(),
                shariahCertRef: input.shariahCertRef,
                shariahCertExpiry: input.shariahCertExpiry,
                contactEmail: input.contactEmail,
                onboardingStatus: 'DRAFT',
                onboardedByUserId: input.onboardedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.onboardedByUserId,
            action: 'CREATE',
            entityType: 'counterparty',
            entityId: counterparty.id,
            after: { legalName: input.legalName, purposeOfFinancing: input.purposeOfFinancing, amountSoughtKobo: input.amountSoughtKobo.toString() },
        });
        return this.serializeCounterparty(counterparty);
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
        await this.assertCapability(input.assessedByUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a counterparty compliance risk assessment');
        if (input.riskMetricGrades.length !== 8) {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Risk assessment requires all 8 metrics graded — received ${input.riskMetricGrades.length} (Investee Onboarding Template §2b).`);
        }
        const profile = CounterpartyService_1.computeAccumulativeRiskProfile(input.riskMetricGrades);
        const eddRequired = profile === 'HIGH';
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.upsert({
            where: { counterpartyId: input.counterpartyId },
            create: {
                counterpartyId: input.counterpartyId,
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
        await this.prisma.counterparty.update({
            where: { id: input.counterpartyId },
            data: { onboardingStatus: 'IN_REVIEW' },
        });
        await this.audit.record({
            actorUserId: input.assessedByUserId,
            action: 'CREATE',
            entityType: 'counterparty_onboarding_case',
            entityId: onboardingCase.id,
            after: { counterpartyId: input.counterpartyId, accumulativeRiskProfile: profile, eddRequired },
        });
        return onboardingCase;
    }
    async recordPeriodicReview(counterpartyId, actorUserId) {
        await this.assertCapability(actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a KYC periodic review');
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUniqueOrThrow({ where: { counterpartyId } });
        const updated = await this.prisma.counterpartyOnboardingCase.update({
            where: { counterpartyId },
            data: { lastPeriodicReviewAt: new Date() },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'counterparty_onboarding_case',
            entityId: onboardingCase.id,
            after: { lastPeriodicReviewAt: updated.lastPeriodicReviewAt },
        });
        return updated;
    }
    async submitOnboardingCaseForReview(counterpartyId, initiatedByUserId) {
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUniqueOrThrow({
            where: { counterpartyId },
        });
        if (!onboardingCase.accumulativeRiskProfile) {
            throw new counterparty_types_1.CounterpartyLifecycleError('No accumulative risk profile on file — recordComplianceRiskAssessment must run before the case can be submitted for review (Step 2b/4).');
        }
        const scenario = onboardingCase.accumulativeRiskProfile === 'HIGH' ? 'HIGH_RISK' : 'LOW_MEDIUM_RISK';
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
            entityType: 'counterparty_onboarding_case',
            entityId: onboardingCase.id,
            initiatedByUserId,
            scenario,
        });
        await this.prisma.counterpartyOnboardingCase.update({
            where: { counterpartyId },
            data: { workflowInstanceId: instance.id },
        });
        return instance;
    }
    async recordIc1Review(input) {
        await this.prisma.counterpartyOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: { ic1Checklist: input.checklist, ic1Notes: input.notes },
        });
        return input.pass
            ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
            : this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.notes);
    }
    async recordRiskReview(input) {
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                eddChecklist: input.eddChecklist,
                eddRecommendation: input.eddRecommendation,
                eddConditionsOrBasis: input.eddConditionsOrBasis,
                periodicReviewFrequency: input.periodicReviewFrequency,
                riskNotes: input.riskNotes,
            },
        });
        if (input.approvedExposureLimitKobo !== undefined) {
            await this.prisma.counterparty.update({
                where: { id: onboardingCase.counterpartyId },
                data: { enterpriseLimitKobo: input.approvedExposureLimitKobo, limitCurrency: 'NGN' },
            });
        }
        return this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    }
    async recordMdDecision(input) {
        await this.prisma.counterpartyOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: { mdDecision: input.decision, mdConditionsOrReason: input.conditionsOrReason },
        });
        return input.decision === 'APPROVED'
            ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
            : this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.conditionsOrReason);
    }
    async recordIc2Review(input) {
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.update({
            where: { workflowInstanceId: input.workflowInstanceId },
            data: {
                ic2Checklist: input.checklist,
                ic2Notes: input.notes,
                ic2Outcome: input.outcome,
            },
        });
        if (input.outcome === 'UNSATISFACTORY') {
            return this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.notes);
        }
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: onboardingCase.counterpartyId }, select: { legalName: true } });
        await this.screeningGateway.ensureScreened('COUNTERPARTY', onboardingCase.counterpartyId, counterparty.legalName, input.approverUserId);
        const screeningBlock = await this.screeningGateway.hasBlockingScreeningResult('COUNTERPARTY', onboardingCase.counterpartyId);
        if (screeningBlock.blocked) {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Screening Gateway: ${screeningBlock.reason} (invariant 72(b) — IC2 cannot approve until every hit is adjudicated).`);
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status === 'APPROVED') {
            await this.prisma.counterparty.update({
                where: { id: onboardingCase.counterpartyId },
                data: { onboardingStatus: 'COMPLETE_APPROVED' },
            });
            await this.audit.record({
                actorUserId: input.approverUserId,
                action: 'UPDATE',
                entityType: 'counterparty',
                entityId: onboardingCase.counterpartyId,
                after: { onboardingStatus: 'COMPLETE_APPROVED' },
            });
        }
        return updated;
    }
    async rejectAndDecline(workflowInstanceId, approverUserId, notes) {
        const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUnique({ where: { workflowInstanceId } });
        if (onboardingCase) {
            await this.prisma.counterparty.update({
                where: { id: onboardingCase.counterpartyId },
                data: { onboardingStatus: 'DECLINED' },
            });
        }
        return rejected;
    }
    serializeCounterparty(cp) {
        return {
            ...cp,
            amountSoughtKobo: cp.amountSoughtKobo?.toString() ?? null,
            enterpriseLimitKobo: cp.enterpriseLimitKobo?.toString() ?? null,
            forcedSaleValueKobo: cp.forcedSaleValueKobo?.toString() ?? null,
        };
    }
    async getCounterparty(id) {
        const cp = await this.prisma.counterparty.findUniqueOrThrow({ where: { id }, include: { onboardingCase: true } });
        return this.serializeCounterparty(cp);
    }
    async getCounterpartyByWorkflowInstance(workflowInstanceId) {
        return this.prisma.counterpartyOnboardingCase.findUnique({ where: { workflowInstanceId } });
    }
    async listCounterparties() {
        const rows = await this.prisma.counterparty.findMany({ orderBy: { createdAt: 'desc' }, include: { onboardingCase: true } });
        return rows.map((cp) => this.serializeCounterparty(cp));
    }
    async getPortalDashboard(counterpartyId) {
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: counterpartyId } });
        const [transactions, documents, communications, restructureRequests, complaints, facilityApplications, repaymentObligations] = await Promise.all([
            this.prisma.txn.findMany({ where: { counterpartyId }, orderBy: { valueDate: 'desc' }, take: 100 }),
            this.prisma.documentRegisterEntry.findMany({ where: { entityType: 'counterparty', entityId: counterpartyId }, orderBy: { uploadedAt: 'desc' } }),
            this.prisma.clientCommunication.findMany({ where: { counterpartyId }, orderBy: { occurredAt: 'desc' } }),
            this.prisma.counterpartyRestructureRequest.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } }),
            this.prisma.complaint.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } }),
            this.listFacilityApplicationsForPortal(counterpartyId),
            this.prisma.counterpartyRepaymentObligation.findMany({ where: { counterpartyId }, orderBy: { dueDate: 'desc' } }),
        ]);
        const transactionSummary = {
            count: transactions.length,
            totalAmountKobo: transactions.reduce((s, t) => s + t.amountKobo, 0n).toString(),
        };
        return {
            profile: { counterpartyId: counterparty.id, legalName: counterparty.legalName, contactEmail: counterparty.contactEmail },
            transactionSummary,
            transactions: transactions.map((t) => ({ ...t, amountKobo: t.amountKobo.toString(), unitPriceKobo: t.unitPriceKobo?.toString() ?? null })),
            documents,
            communications,
            restructureRequests,
            complaints,
            facilityApplications,
            repaymentObligations: repaymentObligations.map((o) => ({ ...o, amountKobo: o.amountKobo.toString() })),
            restructuringRequestsEnabled: counterparty.restructuringRequestsEnabled,
        };
    }
    async submitEnquiry(input) {
        return this.prisma.clientCommunication.create({
            data: {
                counterpartyId: input.counterpartyId,
                channel: 'PORTAL_MESSAGE',
                direction: 'INBOUND',
                subject: input.subject,
                summary: input.message,
                routedToFunctionCode: input.routedToFunctionCode ?? 'PORTFOLIO_MGMT',
                occurredAt: new Date(),
            },
        });
    }
    async requestRestructure(input) {
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
        if (!counterparty.restructuringRequestsEnabled) {
            throw new counterparty_types_1.CounterpartyLifecycleError('Extension/restructuring requests are disabled for this account — contact your Portfolio Management officer.');
        }
        if (input.requestType === 'EXTENSION' && (input.extensionMonths === undefined || input.extensionMonths > 1)) {
            throw new counterparty_types_1.CounterpartyLifecycleError('An extension request cannot exceed 1 month (invariant 28e).');
        }
        if (input.obligationId) {
            const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
                where: { obligationId: input.obligationId, status: 'APPROVED', workflowInstanceId: null },
            });
            if (priorApproved) {
                throw new counterparty_types_1.CounterpartyLifecycleError('This transaction has already used its one restructure (invariant 25(4) — max 1 restructure per transaction). A further restructure requires the exception workflow.');
            }
        }
        else if (input.requestType === 'RESTRUCTURE') {
            const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
                where: { counterpartyId: input.counterpartyId, requestType: 'RESTRUCTURE', status: 'APPROVED' },
            });
            if (priorApproved) {
                throw new counterparty_types_1.CounterpartyLifecycleError('This account has already used its one restructure (invariant 28e — max 1 restructure).');
            }
        }
        return this.prisma.counterpartyRestructureRequest.create({
            data: {
                counterpartyId: input.counterpartyId,
                obligationId: input.obligationId,
                requestType: input.requestType,
                extensionMonths: input.requestType === 'EXTENSION' ? input.extensionMonths : null,
                reason: input.reason,
                status: 'PENDING',
            },
        });
    }
    async decideRestructureRequest(input) {
        await this.assertCapability(input.actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE', 'decide a counterparty extension/restructuring request');
        const request = await this.prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: input.requestId } });
        if (request.status !== 'PENDING') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Request ${input.requestId} is already ${request.status} — cannot decide it again.`);
        }
        if (input.decision === 'APPROVED' && request.obligationId) {
            const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
                where: { obligationId: request.obligationId, status: 'APPROVED', workflowInstanceId: null },
            });
            if (priorApproved) {
                throw new counterparty_types_1.CounterpartyLifecycleError(`Transaction ${request.obligationId} already has an APPROVED restructure — invariant 25(4)'s 1-per-transaction limit is DB-enforced. Use initiateRestructureException() to route this through the COUNTERPARTY_RESTRUCTURE_EXCEPTION workflow instead.`);
            }
        }
        const updated = await this.prisma.counterpartyRestructureRequest.update({
            where: { id: input.requestId },
            data: { status: input.decision, decidedByUserId: input.actorUserId, decisionNotes: input.notes, decidedAt: new Date() },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'counterparty_restructure_request',
            entityId: request.id,
            after: { status: input.decision },
        });
        return updated;
    }
    async initiateRestructureException(requestId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE', 'initiate a counterparty restructure exception');
        const request = await this.prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.status !== 'PENDING')
            throw new counterparty_types_1.CounterpartyLifecycleError(`Request ${requestId} is already ${request.status}.`);
        if (!request.obligationId)
            throw new counterparty_types_1.CounterpartyLifecycleError(`Request ${requestId} has no obligationId — the exception workflow only applies to obligation-scoped requests.`);
        const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
            where: { obligationId: request.obligationId, status: 'APPROVED', workflowInstanceId: null },
        });
        if (!priorApproved) {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Transaction ${request.obligationId} has not yet used its one restructure — decide this request normally via decideRestructureRequest(), the exception workflow is for requests that exceed the limit.`);
        }
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION',
            entityType: 'counterparty_restructure_request',
            entityId: request.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        const updated = await this.prisma.counterpartyRestructureRequest.update({ where: { id: requestId }, data: { workflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'counterparty_restructure_request', entityId: requestId, after: { workflowInstanceId: workflowInstance.id } });
        return { request: updated, workflowInstance };
    }
    async approveRestructureException(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            const request = await this.prisma.counterpartyRestructureRequest.update({
                where: { workflowInstanceId },
                data: { status: 'APPROVED', decidedByUserId: approverUserId, decidedAt: new Date() },
            });
            await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'counterparty_restructure_request', entityId: request.id, after: { status: 'APPROVED', exception: true } });
        }
        return updated;
    }
    async listPendingRestructureRequests() {
        return this.prisma.counterpartyRestructureRequest.findMany({ where: { status: 'PENDING' }, orderBy: { createdAt: 'asc' } });
    }
    async toggleRestructuringFeature(counterpartyId, enabled, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE', 'toggle the extension/restructuring feature for a counterparty');
        const updated = await this.prisma.counterparty.update({ where: { id: counterpartyId }, data: { restructuringRequestsEnabled: enabled } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty', entityId: counterpartyId, after: { restructuringRequestsEnabled: enabled } });
        return updated;
    }
    async assignFileManagingOfficer(counterpartyId, officerUserId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'assign a file-managing officer to a counterparty');
        const updated = await this.prisma.counterparty.update({ where: { id: counterpartyId }, data: { fileManagingOfficerUserId: officerUserId } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty', entityId: counterpartyId, after: { fileManagingOfficerUserId: officerUserId } });
        return updated;
    }
    async listPortfolioOfficers(actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'view the file-managing-officer roster');
        const holders = await this.prisma.userRole.findMany({
            where: { roleCode: { in: ['PORT_OFF', 'PORT_MGR'] } },
            select: { userId: true },
        });
        const userIds = [...new Set(holders.map((h) => h.userId))];
        const users = await this.prisma.appUser.findMany({
            where: { id: { in: userIds }, employeeRecord: { isNot: null } },
            select: { id: true, displayName: true, email: true },
            orderBy: { displayName: 'asc' },
        });
        return users;
    }
    async submitFacilityApplication(input) {
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
        if (counterparty.onboardingStatus !== 'COMPLETE_APPROVED') {
            throw new counterparty_types_1.CounterpartyLifecycleError('A facility application can only be submitted once onboarding has reached COMPLETE_APPROVED.');
        }
        return this.prisma.counterpartyFacilityApplication.create({
            data: { counterpartyId: input.counterpartyId, requestedAmountKobo: input.requestedAmountKobo, purpose: input.purpose, status: 'DRAFT' },
        });
    }
    async reviewAndSubmitFacilityApplication(applicationId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'push a facility application into the governance review chain');
        const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.status !== 'DRAFT') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not DRAFT — cannot resubmit.`);
        }
        const latestMemo = await this.prisma.investmentMemo.findFirst({
            where: { facilityApplicationId: applicationId },
            orderBy: { version: 'desc' },
        });
        if (!latestMemo || (latestMemo.status !== 'CIO_APPROVED' && latestMemo.status !== 'MD_APPROVED')) {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${applicationId} has no fully-approved investment memo — invariant 36(f) requires CIO (or, at/above the DoA threshold, IC + MD/CEO) approval before the multi-officer review chain.`);
        }
        const checklist = await this.documents.getChecklistStatus(CounterpartyService_1.FACILITY_APPLICATION_TYPE, CounterpartyService_1.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
        if (!checklist.complete) {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${applicationId} is missing required documents: ${checklist.missing.join(', ')} — invariant 44(e) requires the full checklist before submission for review.`);
        }
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW',
            entityType: 'counterparty_facility_application',
            entityId: applicationId,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        return this.prisma.counterpartyFacilityApplication.update({ where: { id: applicationId }, data: { status: 'SUBMITTED', workflowInstanceId: instance.id } });
    }
    async assertOwnDraftFacilityApplication(applicationId, counterpartyId) {
        const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.counterpartyId !== counterpartyId) {
            throw new counterparty_types_1.CounterpartyLifecycleError('This facility application does not belong to the requesting counterparty.');
        }
        return application;
    }
    async uploadFacilityApplicationDocument(input, counterpartyId) {
        const application = await this.assertOwnDraftFacilityApplication(input.applicationId, counterpartyId);
        if (application.status !== 'DRAFT') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${input.applicationId} is ${application.status} — documents are only accepted while the application is in DRAFT, at application time.`);
        }
        return this.documents.attachFromPortal({ entityType: CounterpartyService_1.FACILITY_APPLICATION_ENTITY_TYPE, entityId: input.applicationId, documentType: input.documentType, fileReference: input.fileReference }, counterpartyId);
    }
    async getFacilityApplicationChecklist(applicationId, counterpartyId) {
        await this.assertOwnDraftFacilityApplication(applicationId, counterpartyId);
        return this.documents.getChecklistStatus(CounterpartyService_1.FACILITY_APPLICATION_TYPE, CounterpartyService_1.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
    }
    async listFacilityApplicationDocumentsForPortal(applicationId, counterpartyId) {
        await this.assertOwnDraftFacilityApplication(applicationId, counterpartyId);
        return this.documents.listFor(CounterpartyService_1.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
    }
    async getFacilityApplicationChecklistForStaff(applicationId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'VIEW', 'view a facility application document checklist');
        return this.documents.getChecklistStatus(CounterpartyService_1.FACILITY_APPLICATION_TYPE, CounterpartyService_1.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
    }
    async approveFacilityApplicationStep(workflowInstanceId, approverUserId, notes) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status === 'APPROVED') {
            await this.prisma.counterpartyFacilityApplication.update({ where: { workflowInstanceId }, data: { status: 'APPROVED' } });
        }
        return updated;
    }
    async rejectFacilityApplication(workflowInstanceId, approverUserId, notes) {
        const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        await this.prisma.counterpartyFacilityApplication.update({ where: { workflowInstanceId }, data: { status: 'DECLINED' } });
        return rejected;
    }
    async draftInvestmentMemo(input, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'draft an investment memo');
        const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: input.facilityApplicationId } });
        if (application.status !== 'DRAFT') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${input.facilityApplicationId} is ${application.status}, not DRAFT — an investment memo is the PO's point of REQUEST, before submission.`);
        }
        const priorVersion = await this.prisma.investmentMemo.findFirst({
            where: { facilityApplicationId: input.facilityApplicationId },
            orderBy: { version: 'desc' },
        });
        const version = (priorVersion?.version ?? 0) + 1;
        const memo = await this.prisma.investmentMemo.create({
            data: {
                facilityApplicationId: input.facilityApplicationId,
                version,
                dealSummary: input.dealSummary,
                structureType: input.structureType,
                amountKobo: input.amountKobo,
                tenorMonths: input.tenorMonths,
                targetReturnPct: input.targetReturnPct,
                riskNotes: input.riskNotes,
                shariahNotes: input.shariahNotes,
                collateralNotes: input.collateralNotes,
                createdByUserId: actorUserId,
            },
        });
        await this.prisma.documentRegisterEntry.create({
            data: {
                entityType: 'counterparty_facility_application',
                entityId: input.facilityApplicationId,
                documentType: 'INVESTMENT_MEMO',
                fileReference: `investment-memo:${memo.id}:v${version}`,
                uploadedByUserId: actorUserId,
            },
        });
        return memo;
    }
    async submitInvestmentMemoForCioApproval(memoId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'submit an investment memo for CIO approval');
        const memo = await this.prisma.investmentMemo.findUniqueOrThrow({ where: { id: memoId } });
        if (memo.status !== 'DRAFT') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Investment memo ${memoId} is ${memo.status}, not DRAFT — cannot resubmit.`);
        }
        const activeThreshold = await this.prisma.investmentMemoThresholdConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        const scenario = !activeThreshold || memo.amountKobo >= activeThreshold.thresholdKobo ? 'AT_OR_ABOVE_THRESHOLD' : 'BELOW_THRESHOLD';
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'INVESTMENT_MEMO_CIO_APPROVAL',
            entityType: 'investment_memo',
            entityId: memoId,
            amountKobo: memo.amountKobo,
            initiatedByUserId: actorUserId,
            scenario,
        });
        return this.prisma.investmentMemo.update({ where: { id: memoId }, data: { status: 'SUBMITTED', workflowInstanceId: instance.id } });
    }
    async approveInvestmentMemo(workflowInstanceId, approverUserId, notes) {
        const pending = await this.pendingInvestmentMemoStep(workflowInstanceId);
        if (pending?.requiredFunctionCode === 'INVESTMENT_COMMITTEE_APPROVAL') {
            throw new counterparty_types_1.CounterpartyLifecycleError('This step requires Investment Committee approval with a mandatory icResolutionRef — use approveInvestmentMemoAsCommittee, not the generic approval path.');
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status === 'APPROVED') {
            const status = await this.terminalMemoStatus(workflowInstanceId);
            await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status } });
        }
        return updated;
    }
    async approveInvestmentMemoAsCommittee(workflowInstanceId, approverUserId, icResolutionRef) {
        if (!icResolutionRef?.trim()) {
            throw new counterparty_types_1.CounterpartyLifecycleError('An icResolutionRef is required to record Investment Committee approval (invariant 46c).');
        }
        const pending = await this.pendingInvestmentMemoStep(workflowInstanceId);
        if (pending?.requiredFunctionCode !== 'INVESTMENT_COMMITTEE_APPROVAL') {
            throw new counterparty_types_1.CounterpartyLifecycleError('This workflow instance is not currently awaiting Investment Committee approval.');
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, icResolutionRef);
        await this.prisma.investmentMemo.updateMany({ where: { workflowInstanceId }, data: { icResolutionRef } });
        if (updated.status === 'APPROVED') {
            const status = await this.terminalMemoStatus(workflowInstanceId);
            await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status } });
        }
        return updated;
    }
    async pendingInvestmentMemoStep(workflowInstanceId) {
        const instance = await this.prisma.workflowInstance.findUnique({
            where: { id: workflowInstanceId },
            include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } }, stepApprovals: true },
        });
        if (!instance)
            return null;
        const approvedStepIds = new Set(instance.stepApprovals.filter((a) => a.decision === 'APPROVE').map((a) => a.approvalRuleStepId));
        return instance.approvalRule.steps.find((s) => !approvedStepIds.has(s.id)) ?? null;
    }
    async terminalMemoStatus(workflowInstanceId) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
            include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } } },
        });
        const lastStep = instance.approvalRule.steps[instance.approvalRule.steps.length - 1];
        return lastStep?.requiredFunctionCode === 'INVESTMENT_MEMO_MD_APPROVAL' ? 'MD_APPROVED' : 'CIO_APPROVED';
    }
    async rejectInvestmentMemo(workflowInstanceId, approverUserId, notes) {
        const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status: 'CIO_REJECTED' } });
        return rejected;
    }
    async proposeInvestmentMemoThreshold(thresholdKobo, actorUserId) {
        await this.assertCapability(actorUserId, 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'INITIATE', 'propose a new investment memo DoA threshold');
        const latest = await this.prisma.investmentMemoThresholdConfig.findFirst({ orderBy: { version: 'desc' } });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.investmentMemoThresholdConfig.create({
            data: { version, thresholdKobo, status: 'DRAFT', createdByUserId: actorUserId },
        });
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'INVESTMENT_MEMO_THRESHOLD_APPROVAL',
            entityType: 'investment_memo_threshold_config',
            entityId: created.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        await this.prisma.investmentMemoThresholdConfig.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'investment_memo_threshold_config', entityId: created.id, after: { version, thresholdKobo: thresholdKobo.toString() } });
        return { config: created, workflowInstance: instance };
    }
    async approveInvestmentMemoThreshold(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return updated;
        const config = await this.prisma.investmentMemoThresholdConfig.findFirstOrThrow({ where: { workflowInstanceId } });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.investmentMemoThresholdConfig.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
            this.prisma.investmentMemoThresholdConfig.update({ where: { id: config.id }, data: { status: 'ACTIVE', approvedByUserId: approverUserId } }),
        ]);
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investment_memo_threshold_config', entityId: config.id, after: { status: 'ACTIVE', version: config.version } });
        return activated;
    }
    async getActiveInvestmentMemoThreshold(actorUserId) {
        await this.assertCapability(actorUserId, 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'VIEW', 'view the investment memo DoA threshold');
        const active = await this.prisma.investmentMemoThresholdConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        return active ? { ...active, thresholdKobo: active.thresholdKobo.toString() } : null;
    }
    async listInvestmentMemos(facilityApplicationId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'VIEW', 'view a facility application\'s investment memos');
        const memos = await this.prisma.investmentMemo.findMany({
            where: { facilityApplicationId },
            orderBy: { version: 'desc' },
        });
        return Promise.all(memos.map(async (m) => ({
            ...m,
            amountKobo: m.amountKobo.toString(),
            targetReturnPct: m.targetReturnPct.toString(),
            trail: m.workflowInstanceId ? await this.workflow.getTrail(m.workflowInstanceId) : null,
        })));
    }
    async markFacilityApplicationDisbursed(applicationId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'mark a facility application disbursed');
        const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.status !== 'APPROVED') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not APPROVED — cannot disburse.`);
        }
        return this.prisma.counterpartyFacilityApplication.update({
            where: { id: applicationId },
            data: { status: 'DISBURSED', disbursedByUserId: actorUserId, disbursedAt: new Date() },
        });
    }
    async recordFundAccountingTerms(applicationId, targetedReturnPct, actorUserId) {
        await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'INITIATE', "record a disbursed facility's targeted return");
        const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
        if (application.status !== 'DISBURSED') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not DISBURSED — Fund Accounting records terms only after disbursement.`);
        }
        const updated = await this.prisma.counterpartyFacilityApplication.update({
            where: { id: applicationId },
            data: { targetedReturnPct, termsRecordedByUserId: actorUserId, termsRecordedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty_facility_application', entityId: applicationId, after: { targetedReturnPct } });
        return updated;
    }
    async listFundAccountingReceivables(actorUserId) {
        await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'VIEW', 'view the fund-account receivables dashboard');
        const rows = await this.prisma.counterpartyRepaymentObligation.findMany({
            where: { status: 'PENDING' },
            orderBy: { dueDate: 'asc' },
            include: {
                counterparty: { select: { legalName: true } },
                facilityApplication: { select: { id: true, purpose: true, targetedReturnPct: true, requestedAmountKobo: true } },
            },
        });
        return rows.map((r) => ({
            ...r,
            amountKobo: r.amountKobo.toString(),
            facilityApplication: r.facilityApplication
                ? { ...r.facilityApplication, requestedAmountKobo: r.facilityApplication.requestedAmountKobo.toString(), targetedReturnPct: r.facilityApplication.targetedReturnPct?.toString() ?? null }
                : null,
        }));
    }
    async listFacilityApplicationsForPortal(counterpartyId) {
        const applications = await this.prisma.counterpartyFacilityApplication.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
        return Promise.all(applications.map(async (app) => {
            const { stageLabel, pendingFromCounterparty } = await this.deriveApplicationStage(app);
            return {
                id: app.id,
                requestedAmountKobo: app.requestedAmountKobo.toString(),
                purpose: app.purpose,
                status: app.status,
                stageLabel,
                pendingFromCounterparty,
                createdAt: app.createdAt,
                targetedReturnPct: app.targetedReturnPct?.toString() ?? null,
            };
        }));
    }
    async deriveApplicationStage(app) {
        if (app.status === 'DRAFT')
            return { stageLabel: 'Submitted — awaiting Portfolio Management review', pendingFromCounterparty: true };
        if (app.status === 'DISBURSED')
            return { stageLabel: 'Disbursed', pendingFromCounterparty: false };
        if (app.status === 'DECLINED')
            return { stageLabel: 'Declined', pendingFromCounterparty: false };
        if (app.status === 'APPROVED')
            return { stageLabel: 'Approved — pending disbursement', pendingFromCounterparty: false };
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: app.workflowInstanceId },
            include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } }, stepApprovals: true },
        });
        const nextStepOrder = instance.stepApprovals.length + 1;
        const pendingStep = instance.approvalRule.steps.find((s) => s.stepOrder === nextStepOrder);
        const STAGE_LABELS = {
            FACILITY_APPLICATION_RISK_REVIEW: 'Risk Review',
            FACILITY_APPLICATION_BD_REVIEW: 'Business Development Review',
            FACILITY_APPLICATION_FINANCE_REVIEW: 'Finance Review',
            FACILITY_APPLICATION_COMPLIANCE_APPROVAL: 'Compliance Approval',
        };
        return { stageLabel: pendingStep ? (STAGE_LABELS[pendingStep.requiredFunctionCode] ?? pendingStep.requiredFunctionCode) : 'Finalizing', pendingFromCounterparty: false };
    }
    async listFacilityApplicationsForStaff() {
        const applications = await this.prisma.counterpartyFacilityApplication.findMany({
            where: { status: 'DRAFT' },
            include: { counterparty: { select: { legalName: true } } },
            orderBy: { createdAt: 'asc' },
        });
        return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString() }));
    }
    async listFacilityApplicationsForLegalView(actorUserId) {
        await this.assertCapability(actorUserId, 'FACILITY_APPLICATION_LEGAL_VIEW', 'VIEW', 'view counterparty facility applications');
        const applications = await this.prisma.counterpartyFacilityApplication.findMany({
            include: { counterparty: { select: { legalName: true } } },
            orderBy: { createdAt: 'desc' },
        });
        return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString(), targetedReturnPct: a.targetedReturnPct?.toString() ?? null }));
    }
    async listDisbursedFacilityApplications(actorUserId) {
        await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'VIEW', 'view disbursed facility applications');
        const applications = await this.prisma.counterpartyFacilityApplication.findMany({
            where: { status: 'DISBURSED' },
            include: { counterparty: { select: { legalName: true } } },
            orderBy: { disbursedAt: 'desc' },
        });
        return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString(), targetedReturnPct: a.targetedReturnPct?.toString() ?? null }));
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'counterparty_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new counterparty_types_1.CounterpartyLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.CounterpartyService = CounterpartyService;
exports.CounterpartyService = CounterpartyService = CounterpartyService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        delegation_service_1.DelegationService,
        document_service_1.DocumentService,
        screening_gateway_service_1.ScreeningGatewayService])
], CounterpartyService);
//# sourceMappingURL=counterparty.service.js.map