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
exports.WorkflowInboxService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const workflow_service_1 = require("../workflow/workflow.service");
const investor_service_1 = require("../investor/investor.service");
const investor_bank_account_change_service_1 = require("../investor/investor-bank-account-change.service");
const employee_lifecycle_service_1 = require("../profile/employee-lifecycle.service");
const investor_contact_amendment_service_1 = require("../investor/investor-contact-amendment.service");
const regulatory_reporting_service_1 = require("../regulatory-reporting/regulatory-reporting.service");
const wm_service_1 = require("../wm/wm.service");
const pms_service_1 = require("../pms/pms.service");
const marketing_service_1 = require("../marketing/marketing.service");
const scheduler_service_1 = require("../scheduler/scheduler.service");
const procurement_service_1 = require("../procurement/procurement.service");
const one17_ai_service_1 = require("../ai/one17-ai.service");
const stakeholder_reporting_service_1 = require("../stakeholder-reporting/stakeholder-reporting.service");
const profile_service_1 = require("../profile/profile.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const zakat_service_1 = require("../zakat/zakat.service");
const ledger_service_1 = require("../ledger/ledger.service");
const talent_service_1 = require("../talent/talent.service");
const stress_engine_service_1 = require("../stress-engine/stress-engine.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const period_service_1 = require("../period/period.service");
const rbac_service_1 = require("../rbac/rbac.service");
const petty_cash_service_1 = require("../petty-cash/petty-cash.service");
const subscription_service_1 = require("../subscription/subscription.service");
const notification_service_1 = require("../notification/notification.service");
const tax_service_1 = require("../tax/tax.service");
const obligations_service_1 = require("../obligations/obligations.service");
let WorkflowInboxService = class WorkflowInboxService {
    prisma;
    workflow;
    investorService;
    regulatoryReporting;
    wm;
    pms;
    marketing;
    scheduler;
    procurement;
    one17AI;
    stakeholderReporting;
    profile;
    counterparty;
    zakat;
    ledger;
    talent;
    stressEngine;
    halalFundEngine;
    period;
    rbac;
    bankAccountChange;
    employeeLifecycle;
    contactAmendment;
    pettyCash;
    subscriptions;
    notifications;
    tax;
    obligations;
    constructor(prisma, workflow, investorService, regulatoryReporting, wm, pms, marketing, scheduler, procurement, one17AI, stakeholderReporting, profile, counterparty, zakat, ledger, talent, stressEngine, halalFundEngine, period, rbac, bankAccountChange, employeeLifecycle, contactAmendment, pettyCash, subscriptions, notifications, tax, obligations) {
        this.prisma = prisma;
        this.workflow = workflow;
        this.investorService = investorService;
        this.regulatoryReporting = regulatoryReporting;
        this.wm = wm;
        this.pms = pms;
        this.marketing = marketing;
        this.scheduler = scheduler;
        this.procurement = procurement;
        this.one17AI = one17AI;
        this.stakeholderReporting = stakeholderReporting;
        this.profile = profile;
        this.counterparty = counterparty;
        this.zakat = zakat;
        this.ledger = ledger;
        this.talent = talent;
        this.stressEngine = stressEngine;
        this.halalFundEngine = halalFundEngine;
        this.period = period;
        this.rbac = rbac;
        this.bankAccountChange = bankAccountChange;
        this.employeeLifecycle = employeeLifecycle;
        this.contactAmendment = contactAmendment;
        this.pettyCash = pettyCash;
        this.subscriptions = subscriptions;
        this.notifications = notifications;
        this.tax = tax;
        this.obligations = obligations;
    }
    async inbox(userId) {
        return this.workflow.getInboxForUser(userId);
    }
    async approve(workflowInstanceId, approverUserId, notes) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
        });
        if (instance.workflowTypeCode === 'INVESTOR_ONBOARDING') {
            return this.investorService.approveKyc(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'INVESTOR_BANK_ACCOUNT_CHANGE') {
            const request = await this.prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
            return this.bankAccountChange.decideChangeRequest(request.id, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_ONBOARDING') {
            return this.employeeLifecycle.decideOnboarding(workflowInstanceId, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_OFFBOARDING') {
            return this.employeeLifecycle.decideOffboarding(workflowInstanceId, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_INCENTIVE_PCT_CHANGE') {
            return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'INVESTOR_CONTACT_KYC_AMENDMENT') {
            return this.contactAmendment.decideAmendment(workflowInstanceId, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'PETTY_CASH_REPLENISHMENT_APPROVAL') {
            return this.pettyCash.decideReplenishmentClaim(workflowInstanceId, approverUserId, 'APPROVE', notes);
        }
        if (instance.workflowTypeCode === 'REGULATORY_FILING_CERTIFICATION') {
            return this.regulatoryReporting.certify(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'WM_CLAIM_VALIDATION') {
            return this.wm.verifyClientAsset(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'PMS_SCORE_VALIDATION') {
            return this.pms.validateScoreStep(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'PMS_CYCLE_APPROVAL') {
            return this.pms.approveCycle(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'PMS_SCORECARD_OVERRIDE') {
            return this.pms.approveScorecardOverride(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'EMOLUMENT_STRUCTURE_APPROVAL') {
            return this.pms.approveEmolumentComponent(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'TALENT_RECOMMENDATION_APPROVAL') {
            return this.talent.approveRecommendation(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'MARKETING_RESOURCE_APPROVAL') {
            return this.marketing.approveResource(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'MARKETING_SEND_APPROVAL') {
            return this.marketing.approveSend(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'SCHEDULER_JOB_PAUSE') {
            return this.scheduler.approvePauseRequest(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'SCHEDULER_JOB_RETIREMENT') {
            return this.scheduler.approveRetirement(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'PROCUREMENT_PAYMENT_BATCH') {
            return this.procurement.approvePaymentBatch(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'AI_CAPABILITY_FLAG_TOGGLE') {
            return this.one17AI.approveFlagToggle(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'STAKEHOLDER_REPORT_APPROVAL') {
            return this.stakeholderReporting.approveReport(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_PERSONAL_RECORD_CHANGE') {
            return this.profile.acknowledgeChange(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW') {
            return this.counterparty.approveFacilityApplicationStep(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'INVESTMENT_MEMO_CIO_APPROVAL') {
            return this.counterparty.approveInvestmentMemo(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'INVESTMENT_MEMO_THRESHOLD_APPROVAL') {
            return this.counterparty.approveInvestmentMemoThreshold(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'ZAKAT_ITEM_VALIDATION') {
            return this.zakat.verifyScheduleItem(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'ZAKAT_ASSESSMENT_CERTIFICATION') {
            return this.zakat.certifyAssessment(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'COUNTERPARTY_RESTRUCTURE_EXCEPTION') {
            return this.counterparty.approveRestructureException(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'TAX_RATE_VERSION_APPROVAL') {
            return this.tax.approveRateVersion({ workflowInstanceId, approverUserId });
        }
        if (instance.workflowTypeCode === 'TAX_REMITTANCE_BATCH_APPROVAL') {
            return this.tax.approveRemittanceBatch(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'PAYOUT_BATCH_APPROVAL') {
            return this.obligations.approveBatch(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'JOURNAL_POSTING') {
            const posted = await this.ledger.approveJournalPosting({ workflowInstanceId, approverUserId });
            if (posted) {
                const payrollRun = await this.prisma.payrollRun.findFirst({ where: { journalEntryId: posted.id } });
                if (payrollRun)
                    return this.pms.markPayrollRunPosted(payrollRun.id, approverUserId);
            }
            return posted;
        }
        if (instance.workflowTypeCode === 'STRESS_BASELINE_PUBLICATION') {
            return this.stressEngine.approveBaselinePublication(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'DISTRIBUTION') {
            return this.halalFundEngine.approveDistributionDeclaration(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'ACCOUNTING_PERIOD_CLOSE') {
            return this.period.approvePeriodClose({ workflowInstanceId, approverUserId });
        }
        if (instance.workflowTypeCode === 'USER_ROLE_ASSIGNMENT') {
            const [targetUserId, roleCode] = instance.entityId.split(':');
            return this.rbac.approveAssignRole(workflowInstanceId, approverUserId, { userId: targetUserId, roleCode });
        }
        if (instance.workflowTypeCode === 'INVESTOR_MANDATE_SHARIAH_REVIEW') {
            return this.investorService.approveMandateShariahReview(workflowInstanceId, approverUserId);
        }
        if (instance.workflowTypeCode === 'REDEMPTION_APPROVAL') {
            const decided = await this.subscriptions.approveRedemption({ workflowInstanceId, approverUserId });
            if (decided.status === 'APPROVED')
                await this.notifyInvestorOfRedemptionDecision(decided, 'APPROVED');
            return decided;
        }
        const STRUCTURED_DATA_WORKFLOW_TYPES = [
            'INVESTOR_ONBOARDING_CASE_REVIEW',
            'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
            'STRATEGY_LAYER_APPROVAL',
            'RISK_APPETITE_MATRIX_APPROVAL',
            'SUBSCRIPTION_APPROVAL',
        ];
        if (STRUCTURED_DATA_WORKFLOW_TYPES.includes(instance.workflowTypeCode)) {
            throw new Error(`${instance.workflowTypeCode} steps require structured data the generic Workflow Inbox can't capture — use the dedicated review screen for this workflow instead.`);
        }
        return this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    }
    async reject(workflowInstanceId, approverUserId, notes) {
        const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
            where: { id: workflowInstanceId },
        });
        if (instance.workflowTypeCode === 'INVESTOR_BANK_ACCOUNT_CHANGE') {
            const request = await this.prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
            return this.bankAccountChange.decideChangeRequest(request.id, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_ONBOARDING') {
            return this.employeeLifecycle.decideOnboarding(workflowInstanceId, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_OFFBOARDING') {
            return this.employeeLifecycle.decideOffboarding(workflowInstanceId, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_INCENTIVE_PCT_CHANGE') {
            return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'INVESTOR_CONTACT_KYC_AMENDMENT') {
            return this.contactAmendment.decideAmendment(workflowInstanceId, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'PETTY_CASH_REPLENISHMENT_APPROVAL') {
            return this.pettyCash.decideReplenishmentClaim(workflowInstanceId, approverUserId, 'REJECT', notes);
        }
        if (instance.workflowTypeCode === 'MARKETING_RESOURCE_APPROVAL') {
            return this.marketing.rejectResource(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'MARKETING_SEND_APPROVAL') {
            return this.marketing.rejectSend(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'EMPLOYEE_PERSONAL_RECORD_CHANGE') {
            return this.profile.rejectChange(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW') {
            return this.counterparty.rejectFacilityApplication(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'INVESTMENT_MEMO_CIO_APPROVAL') {
            return this.counterparty.rejectInvestmentMemo(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'TALENT_RECOMMENDATION_APPROVAL') {
            return this.talent.rejectRecommendation(workflowInstanceId, approverUserId, notes);
        }
        if (instance.workflowTypeCode === 'SUBSCRIPTION_APPROVAL' || instance.workflowTypeCode === 'REDEMPTION_APPROVAL') {
            const rejected = await this.subscriptions.rejectRequest(workflowInstanceId, approverUserId, notes);
            if (instance.workflowTypeCode === 'REDEMPTION_APPROVAL')
                await this.notifyInvestorOfRedemptionDecision(rejected, 'REJECTED');
            return rejected;
        }
        const STRUCTURED_DATA_WORKFLOW_TYPES = [
            'INVESTOR_ONBOARDING_CASE_REVIEW',
            'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
            'STRATEGY_LAYER_APPROVAL',
        ];
        if (STRUCTURED_DATA_WORKFLOW_TYPES.includes(instance.workflowTypeCode)) {
            throw new Error(`${instance.workflowTypeCode} steps require structured data the generic Workflow Inbox can't capture — use the dedicated review screen for this workflow instead.`);
        }
        return this.workflow.reject(workflowInstanceId, approverUserId, notes);
    }
    async notifyInvestorOfRedemptionDecision(request, decision) {
        const nairaAmount = (Number(request.amountKobo) / 100).toLocaleString();
        await this.notifications.create({
            recipientInvestorId: request.investorId,
            type: 'GENERIC',
            title: decision === 'APPROVED' ? 'Redemption approved' : 'Redemption declined',
            body: decision === 'APPROVED'
                ? `Your redemption request of ₦${nairaAmount} from ${request.productCode} has been approved and will be paid out to your registered bank account.`
                : `Your redemption request of ₦${nairaAmount} from ${request.productCode} was declined.`,
            linkPath: '/notifications',
        });
    }
};
exports.WorkflowInboxService = WorkflowInboxService;
exports.WorkflowInboxService = WorkflowInboxService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        workflow_service_1.WorkflowEngineService,
        investor_service_1.InvestorService,
        regulatory_reporting_service_1.RegulatoryReportingService,
        wm_service_1.WmService,
        pms_service_1.PmsService,
        marketing_service_1.MarketingService,
        scheduler_service_1.SchedulerService,
        procurement_service_1.ProcurementService,
        one17_ai_service_1.One17AIService,
        stakeholder_reporting_service_1.StakeholderReportingService,
        profile_service_1.ProfileService,
        counterparty_service_1.CounterpartyService,
        zakat_service_1.ZakatService,
        ledger_service_1.LedgerService,
        talent_service_1.TalentService,
        stress_engine_service_1.StressEngineService,
        halal_fund_engine_service_1.HalalFundEngineService,
        period_service_1.PeriodService,
        rbac_service_1.RbacService,
        investor_bank_account_change_service_1.InvestorBankAccountChangeService,
        employee_lifecycle_service_1.EmployeeLifecycleService,
        investor_contact_amendment_service_1.InvestorContactAmendmentService,
        petty_cash_service_1.PettyCashService,
        subscription_service_1.SubscriptionService,
        notification_service_1.NotificationService,
        tax_service_1.TaxService,
        obligations_service_1.ObligationsService])
], WorkflowInboxService);
//# sourceMappingURL=workflow-inbox.service.js.map