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
exports.CounterpartyController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const payment_reminder_service_1 = require("../counterparty/payment-reminder.service");
const counterparty_write_off_service_1 = require("../counterparty/counterparty-write-off.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const bureau_gateway_service_1 = require("../bureau-gateway/bureau-gateway.service");
const prisma_service_1 = require("../prisma/prisma.service");
const ops_api_types_1 = require("./ops-api.types");
let CounterpartyController = class CounterpartyController {
    counterparty;
    portalAuth;
    paymentReminders;
    bureauGateway;
    writeOff;
    prisma;
    constructor(counterparty, portalAuth, paymentReminders, bureauGateway, writeOff, prisma) {
        this.counterparty = counterparty;
        this.portalAuth = portalAuth;
        this.paymentReminders = paymentReminders;
        this.bureauGateway = bureauGateway;
        this.writeOff = writeOff;
        this.prisma = prisma;
    }
    async list() {
        return this.counterparty.listCounterparties();
    }
    async get(id) {
        return this.counterparty.getCounterparty(id);
    }
    async onboard(dto, user) {
        return this.counterparty.onboard({
            ...dto,
            amountSoughtKobo: BigInt(dto.amountSoughtKobo),
            shariahCertExpiry: dto.shariahCertExpiry ? new Date(dto.shariahCertExpiry) : undefined,
            onboardedByUserId: user.userId,
        });
    }
    async recordRiskAssessment(id, dto, user) {
        return this.counterparty.recordComplianceRiskAssessment({ counterpartyId: id, ...dto, assessedByUserId: user.userId });
    }
    async submitForReview(id, user) {
        return this.counterparty.submitOnboardingCaseForReview(id, user.userId);
    }
    async recordIc1(workflowInstanceId, dto, user) {
        return this.counterparty.recordIc1Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async recordRiskReview(workflowInstanceId, dto, user) {
        return this.counterparty.recordRiskReview({
            workflowInstanceId,
            ...dto,
            approvedExposureLimitKobo: dto.approvedExposureLimitKobo !== undefined ? BigInt(dto.approvedExposureLimitKobo) : undefined,
            approverUserId: user.userId,
        });
    }
    async recordMdDecision(workflowInstanceId, dto, user) {
        return this.counterparty.recordMdDecision({ workflowInstanceId, ...dto, approverUserId: user.userId });
    }
    async recordIc2(workflowInstanceId, dto, user) {
        const result = await this.counterparty.recordIc2Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
        if (result.status === 'APPROVED') {
            const onboardingCase = await this.counterparty.getCounterpartyByWorkflowInstance(workflowInstanceId);
            if (onboardingCase)
                await this.portalAuth.provisionForCounterparty(onboardingCase.counterpartyId);
        }
        return result;
    }
    async listPendingRestructureRequests() {
        return this.counterparty.listPendingRestructureRequests();
    }
    async decideRestructureRequest(id, dto, user) {
        return this.counterparty.decideRestructureRequest({ requestId: id, ...dto, actorUserId: user.userId });
    }
    async toggleRestructuringFeature(id, dto, user) {
        return this.counterparty.toggleRestructuringFeature(id, dto.enabled, user.userId);
    }
    async initiateRestructureException(id, user) {
        return this.counterparty.initiateRestructureException(id, user.userId);
    }
    async listPendingRepaymentObligations() {
        return this.paymentReminders.listPendingObligations();
    }
    async listRepaymentObligations(id) {
        return this.paymentReminders.listObligations(id);
    }
    async createRepaymentObligation(id, dto, user) {
        return this.paymentReminders.createObligation({
            counterpartyId: id,
            facilityApplicationId: dto.facilityApplicationId,
            dueDate: new Date(dto.dueDate),
            amountKobo: BigInt(dto.amountKobo),
            createdByUserId: user.userId,
        });
    }
    async markRepaymentObligationPaid(id, user) {
        return this.paymentReminders.markPaid(id, user.userId);
    }
    async listPendingFacilityApplications() {
        return this.counterparty.listFacilityApplicationsForStaff();
    }
    async listAllFacilityApplicationsForLegal(user) {
        return this.counterparty.listFacilityApplicationsForLegalView(user.userId);
    }
    async reviewAndSubmitFacilityApplication(id, user) {
        return this.counterparty.reviewAndSubmitFacilityApplication(id, user.userId);
    }
    async draftInvestmentMemo(id, dto, user) {
        return this.counterparty.draftInvestmentMemo({ facilityApplicationId: id, ...dto, amountKobo: BigInt(dto.amountKobo) }, user.userId);
    }
    async listInvestmentMemos(id, user) {
        return this.counterparty.listInvestmentMemos(id, user.userId);
    }
    async getFacilityApplicationChecklist(id, user) {
        return this.counterparty.getFacilityApplicationChecklistForStaff(id, user.userId);
    }
    async submitInvestmentMemoForCioApproval(id, user) {
        return this.counterparty.submitInvestmentMemoForCioApproval(id, user.userId);
    }
    async approveInvestmentMemoAsCommittee(workflowInstanceId, dto, user) {
        return this.counterparty.approveInvestmentMemoAsCommittee(workflowInstanceId, user.userId, dto.icResolutionRef);
    }
    async proposeInvestmentMemoThreshold(dto, user) {
        return this.counterparty.proposeInvestmentMemoThreshold(BigInt(dto.thresholdKobo), user.userId);
    }
    async getActiveInvestmentMemoThreshold(user) {
        return this.counterparty.getActiveInvestmentMemoThreshold(user.userId);
    }
    async markFacilityApplicationDisbursed(id, user) {
        return this.counterparty.markFacilityApplicationDisbursed(id, user.userId);
    }
    async listPortfolioOfficers(user) {
        return this.counterparty.listPortfolioOfficers(user.userId);
    }
    async assignFileManagingOfficer(id, dto, user) {
        return this.counterparty.assignFileManagingOfficer(id, dto.officerUserId, user.userId);
    }
    async listPendingDispatchQueue() {
        return this.paymentReminders.listPendingDispatchQueue();
    }
    async approveDispatch(id, user) {
        return this.paymentReminders.approveDispatch(id, user.userId);
    }
    async rejectDispatch(id, dto, user) {
        return this.paymentReminders.rejectDispatch(id, user.userId, dto.reason);
    }
    async listLadderConfig() {
        return this.paymentReminders.listLadderConfig();
    }
    async updateLadderRung(dayOffset, dto, user) {
        return this.paymentReminders.updateLadderRung(Number(dayOffset), dto, user.userId);
    }
    async triggerBureauPull(id, user) {
        return this.bureauGateway.triggerPull(id, user.userId);
    }
    async listBureauPulls(id) {
        return this.bureauGateway.listPullHistory(id);
    }
    async listWriteOffRequests(id) {
        return this.writeOff.listForCounterparty(id);
    }
    async getWriteOffRequestTrail(requestId) {
        return this.writeOff.getTrail(requestId);
    }
    async requestWriteOff(id, dto, user) {
        return this.writeOff.requestWriteOff({
            counterpartyId: id,
            writeOffAmountKobo: BigInt(dto.writeOffAmountKobo),
            ledgerEntityCode: dto.ledgerEntityCode,
            investmentAccountCode: dto.investmentAccountCode,
            reason: dto.reason,
            requestedByUserId: user.userId,
        });
    }
    async decideWriteOff(requestId, dto, user) {
        const request = await this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: requestId } });
        return this.writeOff.decideWriteOff(request.workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
    async recordPeriodicReview(id, user) {
        return this.counterparty.recordPeriodicReview(id, user.userId);
    }
};
exports.CounterpartyController = CounterpartyController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.OnboardCounterpartyDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "onboard", null);
__decorate([
    (0, common_1.Post)(':id/risk-assessment'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordCounterpartyRiskAssessmentDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordRiskAssessment", null);
__decorate([
    (0, common_1.Post)(':id/submit-for-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "submitForReview", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/ic1'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordCounterpartyIc1ReviewDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordIc1", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/risk'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordCounterpartyRiskReviewDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordRiskReview", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/md-decision'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordCounterpartyMdDecisionDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordMdDecision", null);
__decorate([
    (0, common_1.Post)('review/:workflowInstanceId/ic2'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordCounterpartyIc2ReviewDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordIc2", null);
__decorate([
    (0, common_1.Get)('restructure-requests/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listPendingRestructureRequests", null);
__decorate([
    (0, common_1.Post)('restructure-requests/:id/decide'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideCounterpartyRestructureDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "decideRestructureRequest", null);
__decorate([
    (0, common_1.Post)(':id/restructuring-feature'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ToggleRestructuringFeatureDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "toggleRestructuringFeature", null);
__decorate([
    (0, common_1.Post)('restructure-requests/:id/initiate-exception'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "initiateRestructureException", null);
__decorate([
    (0, common_1.Get)('repayment-obligations/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listPendingRepaymentObligations", null);
__decorate([
    (0, common_1.Get)(':id/repayment-obligations'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listRepaymentObligations", null);
__decorate([
    (0, common_1.Post)(':id/repayment-obligations'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CreateRepaymentObligationDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "createRepaymentObligation", null);
__decorate([
    (0, common_1.Post)('repayment-obligations/:id/mark-paid'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "markRepaymentObligationPaid", null);
__decorate([
    (0, common_1.Get)('facility-applications/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listPendingFacilityApplications", null);
__decorate([
    (0, common_1.Get)('facility-applications/all'),
    (0, requires_capability_decorator_1.RequiresCapability)('FACILITY_APPLICATION_LEGAL_VIEW', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listAllFacilityApplicationsForLegal", null);
__decorate([
    (0, common_1.Post)('facility-applications/:id/review-and-submit'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "reviewAndSubmitFacilityApplication", null);
__decorate([
    (0, common_1.Post)('facility-applications/:id/investment-memos'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DraftInvestmentMemoDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "draftInvestmentMemo", null);
__decorate([
    (0, common_1.Get)('facility-applications/:id/investment-memos'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listInvestmentMemos", null);
__decorate([
    (0, common_1.Get)('facility-applications/:id/checklist'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "getFacilityApplicationChecklist", null);
__decorate([
    (0, common_1.Post)('investment-memos/:id/submit-for-cio-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "submitInvestmentMemoForCioApproval", null);
__decorate([
    (0, common_1.Post)('investment-memos/committee-approve/:workflowInstanceId'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTMENT_COMMITTEE_APPROVAL', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CommitteeApproveInvestmentMemoDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "approveInvestmentMemoAsCommittee", null);
__decorate([
    (0, common_1.Post)('investment-memo-threshold'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeInvestmentMemoThresholdDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "proposeInvestmentMemoThreshold", null);
__decorate([
    (0, common_1.Get)('investment-memo-threshold'),
    (0, requires_capability_decorator_1.RequiresCapability)('INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "getActiveInvestmentMemoThreshold", null);
__decorate([
    (0, common_1.Post)('facility-applications/:id/disburse'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "markFacilityApplicationDisbursed", null);
__decorate([
    (0, common_1.Get)('officers/file-managing'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listPortfolioOfficers", null);
__decorate([
    (0, common_1.Post)(':id/file-managing-officer'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_ONBOARDING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AssignFileManagingOfficerDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "assignFileManagingOfficer", null);
__decorate([
    (0, common_1.Get)('payment-reminders/dispatch-queue'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_REMINDER_DISPATCH', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listPendingDispatchQueue", null);
__decorate([
    (0, common_1.Post)('payment-reminders/dispatch-queue/:id/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_REMINDER_DISPATCH', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "approveDispatch", null);
__decorate([
    (0, common_1.Post)('payment-reminders/dispatch-queue/:id/reject'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_REMINDER_DISPATCH', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RejectDispatchDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "rejectDispatch", null);
__decorate([
    (0, common_1.Get)('payment-reminders/ladder-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_REMINDER_LADDER_SETTINGS', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listLadderConfig", null);
__decorate([
    (0, common_1.Post)('payment-reminders/ladder-config/:dayOffset'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYMENT_REMINDER_LADDER_SETTINGS', 'INITIATE'),
    __param(0, (0, common_1.Param)('dayOffset')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.UpdateLadderRungDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "updateLadderRung", null);
__decorate([
    (0, common_1.Post)(':id/bureau-pull'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_PULL', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "triggerBureauPull", null);
__decorate([
    (0, common_1.Get)(':id/bureau-pulls'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_PULL', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listBureauPulls", null);
__decorate([
    (0, common_1.Get)(':id/write-off-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_WRITE_OFF_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "listWriteOffRequests", null);
__decorate([
    (0, common_1.Get)(':id/write-off-requests/:requestId'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_WRITE_OFF_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "getWriteOffRequestTrail", null);
__decorate([
    (0, common_1.Post)(':id/write-off-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('COUNTERPARTY_WRITE_OFF_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RequestCounterpartyWriteOffDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "requestWriteOff", null);
__decorate([
    (0, common_1.Post)(':id/write-off-requests/:requestId/decide'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideCounterpartyWriteOffDto, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "decideWriteOff", null);
__decorate([
    (0, common_1.Post)(':id/record-periodic-review'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CounterpartyController.prototype, "recordPeriodicReview", null);
exports.CounterpartyController = CounterpartyController = __decorate([
    (0, common_1.Controller)('counterparties'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [counterparty_service_1.CounterpartyService,
        portal_auth_service_1.PortalAuthService,
        payment_reminder_service_1.PaymentReminderService,
        bureau_gateway_service_1.BureauGatewayService,
        counterparty_write_off_service_1.CounterpartyWriteOffService,
        prisma_service_1.PrismaService])
], CounterpartyController);
//# sourceMappingURL=counterparty.controller.js.map