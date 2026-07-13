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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorsController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const investor_service_1 = require("../investor/investor.service");
const investor_bank_account_change_service_1 = require("../investor/investor-bank-account-change.service");
const investor_contact_amendment_service_1 = require("../investor/investor-contact-amendment.service");
const investor_exit_service_1 = require("../investor/investor-exit.service");
const investor_mandate_amendment_service_1 = require("../investor/investor-mandate-amendment.service");
const client_messaging_service_1 = require("../client-messaging/client-messaging.service");
const ops_api_types_1 = require("./ops-api.types");
let InvestorsController = class InvestorsController {
    prisma;
    investorService;
    bankAccountChange;
    contactAmendment;
    investorExit;
    mandateAmendment;
    messaging;
    constructor(prisma, investorService, bankAccountChange, contactAmendment, investorExit, mandateAmendment, messaging) {
        this.prisma = prisma;
        this.investorService = investorService;
        this.bankAccountChange = bankAccountChange;
        this.contactAmendment = contactAmendment;
        this.investorExit = investorExit;
        this.mandateAmendment = mandateAmendment;
        this.messaging = messaging;
    }
    async list(kycStatus) {
        return this.prisma.investor.findMany({
            where: kycStatus ? { kycStatus: kycStatus } : undefined,
            orderBy: { createdAt: 'desc' },
            take: 100,
            select: {
                investorId: true,
                fullLegalName: true,
                entityType: true,
                kycStatus: true,
                amlStatus: true,
                fundStatus: true,
                amlRiskRating: true,
                createdAt: true,
            },
        });
    }
    async listCaseReview() {
        const investors = await this.prisma.investor.findMany({
            orderBy: { createdAt: 'desc' },
            take: 200,
            include: { onboardingCase: true },
        });
        const workflowIds = investors
            .map((i) => i.onboardingCase?.workflowInstanceId)
            .filter((id) => !!id);
        const instances = workflowIds.length
            ? await this.prisma.workflowInstance.findMany({ where: { id: { in: workflowIds } } })
            : [];
        const statusByInstanceId = new Map(instances.map((i) => [i.id, i.status]));
        return investors.map((i) => ({
            investorId: i.investorId,
            fullLegalName: i.fullLegalName,
            entityType: i.entityType,
            kycStatus: i.kycStatus,
            amlRiskRating: i.amlRiskRating,
            onboardingCase: i.onboardingCase,
            workflowStatus: i.onboardingCase?.workflowInstanceId
                ? (statusByInstanceId.get(i.onboardingCase.workflowInstanceId) ?? null)
                : null,
        }));
    }
    async detail(investorId) {
        return this.prisma.investor.findUniqueOrThrow({
            where: { investorId },
            include: {
                screeningRecords: { orderBy: { screenedAt: 'desc' } },
                kycDocuments: true,
                bankAccounts: true,
            },
        });
    }
    async onboard(dto, user) {
        return this.investorService.onboard({
            ...dto,
            dateOfBirthOrIncorporation: dto.dateOfBirthOrIncorporation
                ? new Date(dto.dateOfBirthOrIncorporation)
                : undefined,
            onboardedByUserId: user.userId,
        });
    }
    async recordScreening(investorId, dto, user) {
        return this.investorService.recordScreening({
            investorId,
            listsChecked: dto.listsChecked,
            searchTermsUsed: dto.searchTermsUsed,
            result: dto.result,
            screenerUserId: user.userId,
            countersignerUserId: dto.countersignerUserId,
            notes: dto.notes,
        });
    }
    async setAmlRiskRating(investorId, dto, user) {
        return this.investorService.setAmlRiskRating(investorId, dto.amlRiskRating, user.userId);
    }
    async submitForKycApproval(investorId, user) {
        return this.investorService.submitForKycApproval(investorId, user.userId);
    }
    async recordRiskAssessment(investorId, dto, user) {
        return this.investorService.recordComplianceRiskAssessment({ investorId, ...dto, assessedByUserId: user.userId });
    }
    async submitForReview(investorId, user) {
        return this.investorService.submitOnboardingCaseForReview(investorId, user.userId);
    }
    async recordIc1(workflowInstanceId, dto, user) {
        return this.investorService.recordIc1Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async recordRiskReview(workflowInstanceId, dto, user) {
        return this.investorService.recordRiskReview({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async recordMdDecision(workflowInstanceId, dto, user) {
        return this.investorService.recordMdDecision({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async recordIc2(workflowInstanceId, dto, user) {
        return this.investorService.recordIc2Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async getMandate(investorId) {
        return this.prisma.investorMandate.findUnique({ where: { investorId } });
    }
    async setupMandate(investorId, dto, user) {
        return this.investorService.setupMandate({
            investorId,
            mandateType: dto.mandateType,
            targetReturnRate: dto.targetReturnRate,
            investorBaseRatio: dto.investorBaseRatio,
            mudaribBaseRatio: dto.mudaribBaseRatio,
            restrictedSectors: dto.restrictedSectors,
            restrictedContracts: dto.restrictedContracts,
            directDealInvestmentId: dto.directDealInvestmentId,
            rolloverDefault: dto.rolloverDefault,
            earlyExitWaiver: dto.earlyExitWaiver,
            ssbWaiverResolutionRef: dto.ssbWaiverResolutionRef,
            effectiveDate: new Date(dto.effectiveDate),
            approvedByUserId: user.userId,
        });
    }
    async requestMandateShariahReview(investorId, user) {
        return this.investorService.requestMandateShariahReview(investorId, user.userId);
    }
    async assignRelationshipManager(investorId, dto, user) {
        return this.investorService.assignRelationshipManager(investorId, dto.relationshipManagerUserId, user.userId);
    }
    async listMessages(investorId, user) {
        return this.messaging.listThreadForStaff(investorId, user.userId);
    }
    async sendMessage(investorId, dto, user) {
        return this.messaging.sendFromStaff(investorId, user.userId, dto.body, dto.subject);
    }
    async listBankAccountChanges(investorId) {
        return this.bankAccountChange.listForInvestor(investorId);
    }
    async getBankAccountChangeTrail(requestId) {
        return this.bankAccountChange.getTrail(requestId);
    }
    async requestBankAccountChange(investorId, dto, user) {
        return this.bankAccountChange.requestChange({
            investorId,
            proposedBankName: dto.proposedBankName,
            proposedAccountNumber: dto.proposedAccountNumber,
            proposedAccountName: dto.proposedAccountName,
            proposedAccountType: dto.proposedAccountType,
            proposedCurrency: dto.proposedCurrency,
            requestedByUserId: user.userId,
        });
    }
    async attachBankAccountChangeEvidence(requestId, dto, user) {
        return this.bankAccountChange.attachEvidence(requestId, user.userId, dto);
    }
    async getBankAccountChangeChecklist(requestId) {
        return this.bankAccountChange.getEvidenceChecklist(requestId);
    }
    async submitBankAccountChange(requestId, user) {
        return this.bankAccountChange.submitChange(requestId, user.userId);
    }
    async decideBankAccountChange(requestId, dto, user) {
        return this.bankAccountChange.decideChangeRequest(requestId, user.userId, dto.decision, dto.notes);
    }
    async listContactAmendments(investorId) {
        return this.contactAmendment.listForInvestor(investorId);
    }
    async getContactAmendmentTrail(requestId) {
        return this.contactAmendment.getTrail(requestId);
    }
    async requestContactAmendment(investorId, dto, user) {
        return this.contactAmendment.requestAmendment({
            investorId,
            proposedContactEmail: dto.proposedContactEmail,
            proposedContactPhone: dto.proposedContactPhone,
            proposedRegisteredAddress: dto.proposedRegisteredAddress,
            proposedTaxIdentificationNumber: dto.proposedTaxIdentificationNumber,
            proposedSourceOfFunds: dto.proposedSourceOfFunds,
            proposedOccupationOrBusinessNature: dto.proposedOccupationOrBusinessNature,
            requestedByUserId: user.userId,
        });
    }
    async decideContactAmendment(requestId, dto, user) {
        const request = await this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
        return this.contactAmendment.decideAmendment(request.workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
    async listExitRequests(investorId) {
        return this.investorExit.listForInvestor(investorId);
    }
    async getExitRequestTrail(requestId) {
        return this.investorExit.getTrail(requestId);
    }
    async requestExit(investorId, dto, user) {
        return this.investorExit.requestExit({ investorId, exitType: dto.exitType, requestedByUserId: user.userId });
    }
    async decideExit(requestId, dto, user) {
        const request = await this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: requestId } });
        return this.investorExit.decideExit(request.workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
    async recordPeriodicReview(investorId, user) {
        return this.investorService.recordPeriodicReview(investorId, user.userId);
    }
    async listMandateAmendments(investorId) {
        return this.mandateAmendment.listForInvestor(investorId);
    }
    async getMandateAmendmentTrail(requestId) {
        return this.mandateAmendment.getTrail(requestId);
    }
    async requestMandateAmendment(investorId, dto, user) {
        return this.mandateAmendment.requestAmendment({
            investorId,
            proposedTargetReturnRate: dto.proposedTargetReturnRate,
            proposedRolloverDefault: dto.proposedRolloverDefault,
            proposedEarlyExitWaiver: dto.proposedEarlyExitWaiver,
            requestedByUserId: user.userId,
        });
    }
    async decideMandateAmendment(requestId, dto, user) {
        const request = await this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
        return this.mandateAmendment.decideAmendment(request.workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
};
exports.InvestorsController = InvestorsController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Query)('kycStatus')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('case-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listCaseReview", null);
__decorate([
    (0, common_1.Get)(':investorId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "detail", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.OnboardInvestorDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "onboard", null);
__decorate([
    (0, common_1.Post)(':investorId/screening'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordScreeningDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordScreening", null);
__decorate([
    (0, common_1.Post)(':investorId/aml-risk-rating'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetAmlRiskRatingDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "setAmlRiskRating", null);
__decorate([
    (0, common_1.Post)(':investorId/submit-for-kyc-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "submitForKycApproval", null);
__decorate([
    (0, common_1.Post)(':investorId/risk-assessment'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordInvestorRiskAssessmentDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordRiskAssessment", null);
__decorate([
    (0, common_1.Post)(':investorId/submit-for-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "submitForReview", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/ic1'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordInvestorIc1ReviewDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordIc1", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/risk'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordInvestorRiskReviewDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordRiskReview", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/md-decision'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordInvestorMdDecisionDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordMdDecision", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/ic2'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordInvestorIc2ReviewDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordIc2", null);
__decorate([
    (0, common_1.Get)(':investorId/mandate'),
    (0, requires_capability_decorator_1.RequiresCapability)('MANDATE_SETUP', 'APPROVE'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getMandate", null);
__decorate([
    (0, common_1.Post)(':investorId/mandate'),
    (0, requires_capability_decorator_1.RequiresCapability)('MANDATE_SETUP', 'APPROVE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetupMandateDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "setupMandate", null);
__decorate([
    (0, common_1.Post)(':investorId/mandate/request-shariah-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "requestMandateShariahReview", null);
__decorate([
    (0, common_1.Post)(':investorId/relationship-manager'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AssignRelationshipManagerDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "assignRelationshipManager", null);
__decorate([
    (0, common_1.Get)(':investorId/messages'),
    (0, requires_capability_decorator_1.RequiresCapability)('CLIENT_MESSAGING', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listMessages", null);
__decorate([
    (0, common_1.Post)(':investorId/messages'),
    (0, requires_capability_decorator_1.RequiresCapability)('CLIENT_MESSAGING', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SendClientMessageDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)(':investorId/bank-account-changes'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listBankAccountChanges", null);
__decorate([
    (0, common_1.Get)(':investorId/bank-account-changes/:requestId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getBankAccountChangeTrail", null);
__decorate([
    (0, common_1.Post)(':investorId/bank-account-changes'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RequestBankAccountChangeDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "requestBankAccountChange", null);
__decorate([
    (0, common_1.Post)(':investorId/bank-account-changes/:requestId/evidence'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AttachBankAccountChangeEvidenceDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "attachBankAccountChangeEvidence", null);
__decorate([
    (0, common_1.Get)(':investorId/bank-account-changes/:requestId/checklist'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getBankAccountChangeChecklist", null);
__decorate([
    (0, common_1.Post)(':investorId/bank-account-changes/:requestId/submit'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "submitBankAccountChange", null);
__decorate([
    (0, common_1.Post)(':investorId/bank-account-changes/:requestId/decide'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideBankAccountChangeDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "decideBankAccountChange", null);
__decorate([
    (0, common_1.Get)(':investorId/contact-amendments'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listContactAmendments", null);
__decorate([
    (0, common_1.Get)(':investorId/contact-amendments/:requestId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getContactAmendmentTrail", null);
__decorate([
    (0, common_1.Post)(':investorId/contact-amendments'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RequestContactAmendmentDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "requestContactAmendment", null);
__decorate([
    (0, common_1.Post)(':investorId/contact-amendments/:requestId/decide'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideContactAmendmentDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "decideContactAmendment", null);
__decorate([
    (0, common_1.Get)(':investorId/exit-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_EXIT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listExitRequests", null);
__decorate([
    (0, common_1.Get)(':investorId/exit-requests/:requestId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_EXIT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getExitRequestTrail", null);
__decorate([
    (0, common_1.Post)(':investorId/exit-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_EXIT_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RequestInvestorExitDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "requestExit", null);
__decorate([
    (0, common_1.Post)(':investorId/exit-requests/:requestId/decide'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideInvestorExitDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "decideExit", null);
__decorate([
    (0, common_1.Post)(':investorId/record-periodic-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "recordPeriodicReview", null);
__decorate([
    (0, common_1.Get)(':investorId/mandate-amendments'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "listMandateAmendments", null);
__decorate([
    (0, common_1.Get)(':investorId/mandate-amendments/:requestId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getMandateAmendmentTrail", null);
__decorate([
    (0, common_1.Post)(':investorId/mandate-amendments'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RequestMandateAmendmentDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "requestMandateAmendment", null);
__decorate([
    (0, common_1.Post)(':investorId/mandate-amendments/:requestId/decide'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideMandateAmendmentDto, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "decideMandateAmendment", null);
exports.InvestorsController = InvestorsController = __decorate([
    (0, common_1.Controller)('investors'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        investor_service_1.InvestorService,
        investor_bank_account_change_service_1.InvestorBankAccountChangeService,
        investor_contact_amendment_service_1.InvestorContactAmendmentService,
        investor_exit_service_1.InvestorExitService,
        investor_mandate_amendment_service_1.InvestorMandateAmendmentService,
        client_messaging_service_1.ClientMessagingService])
], InvestorsController);
//# sourceMappingURL=investors.controller.js.map