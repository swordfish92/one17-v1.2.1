"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationStagingRowScalarFieldEnum = exports.MigrationBatchScalarFieldEnum = exports.SubscriptionRequestScalarFieldEnum = exports.ProductAccountScalarFieldEnum = exports.CounterpartyOnboardingCaseScalarFieldEnum = exports.CounterpartyWriteOffRequestScalarFieldEnum = exports.CounterpartyScalarFieldEnum = exports.BankStatementLineScalarFieldEnum = exports.InvestorSanctionsRescreeningConfigScalarFieldEnum = exports.InvestorDormancyConfigScalarFieldEnum = exports.InvestorExitRequestScalarFieldEnum = exports.InvestorContactAmendmentRequestScalarFieldEnum = exports.InvestorBankAccountChangeConfigScalarFieldEnum = exports.InvestorBankAccountChangeRequestScalarFieldEnum = exports.InvestorBankAccountScalarFieldEnum = exports.InvestorScreeningRecordScalarFieldEnum = exports.ScreeningChecklistItemScalarFieldEnum = exports.InvestorKycDocumentScalarFieldEnum = exports.InvestorMandateAmendmentRequestScalarFieldEnum = exports.InvestorMandateScalarFieldEnum = exports.InvestorScalarFieldEnum = exports.ProductParametersScalarFieldEnum = exports.ProductScalarFieldEnum = exports.DelegationOfAuthorityScalarFieldEnum = exports.WorkflowStepApprovalScalarFieldEnum = exports.WorkflowInstanceScalarFieldEnum = exports.ApprovalRuleStepScalarFieldEnum = exports.ApprovalRuleScalarFieldEnum = exports.ApprovalChainVersionScalarFieldEnum = exports.WorkflowTypeScalarFieldEnum = exports.RoleConflictScalarFieldEnum = exports.RolePermissionScalarFieldEnum = exports.PlatformFunctionScalarFieldEnum = exports.UserRoleScalarFieldEnum = exports.RoleScalarFieldEnum = exports.AuthPolicyScalarFieldEnum = exports.MfaGlobalEnforcementScalarFieldEnum = exports.MfaFinancialCapabilityScalarFieldEnum = exports.MfaBackupCodeScalarFieldEnum = exports.UserSessionScalarFieldEnum = exports.AppUserScalarFieldEnum = exports.AuditChainStateScalarFieldEnum = exports.AuditTrailScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
exports.CalendarFeedTokenScalarFieldEnum = exports.CalendarMeetingAttendeeScalarFieldEnum = exports.CalendarEntryScalarFieldEnum = exports.TaskEscalationConfigScalarFieldEnum = exports.BoardMinutesTransmissionScalarFieldEnum = exports.BoardMinutesScalarFieldEnum = exports.TransmittedDocumentRecipientScalarFieldEnum = exports.TransmittedDocumentScalarFieldEnum = exports.BoardCalendarSubmissionScalarFieldEnum = exports.BoardCalendarReminderConfigScalarFieldEnum = exports.BoardCalendarEventScalarFieldEnum = exports.BoardDirectiveScalarFieldEnum = exports.AttendanceLatenessGatePolicyScalarFieldEnum = exports.AttendanceExceptionRequestScalarFieldEnum = exports.AttendanceClockInPolicyScalarFieldEnum = exports.AttendanceLockUserMappingScalarFieldEnum = exports.AttendanceEventScalarFieldEnum = exports.AttendanceProviderScalarFieldEnum = exports.LeaveApplicationScalarFieldEnum = exports.LeaveEntitlementScalarFieldEnum = exports.LeaveTypeScalarFieldEnum = exports.TaskSubmissionScalarFieldEnum = exports.TaskScalarFieldEnum = exports.EmployeePersonalRecordChangeRequestScalarFieldEnum = exports.EmployeePersonalRecordScalarFieldEnum = exports.EmployeeIncentivePctChangeRequestScalarFieldEnum = exports.EmployeeOffboardingRequestScalarFieldEnum = exports.EmployeeOnboardingRequestScalarFieldEnum = exports.DepartmentHeadDesignationScalarFieldEnum = exports.EmployeeScalarFieldEnum = exports.PositionScalarFieldEnum = exports.CadreTierMapScalarFieldEnum = exports.KpiWeightMatrixScalarFieldEnum = exports.KpiDefinitionScalarFieldEnum = exports.KraObjectiveMapScalarFieldEnum = exports.EnterpriseKraScalarFieldEnum = exports.OrgUnitScalarFieldEnum = exports.PillarObjectiveMapScalarFieldEnum = exports.StrategyAcknowledgmentScalarFieldEnum = exports.StrategyPublicationScalarFieldEnum = exports.StrategyStatementScalarFieldEnum = exports.LetterInstanceScalarFieldEnum = exports.CertificateScalarFieldEnum = exports.DocumentTemplateScalarFieldEnum = exports.LetterheadTemplateScalarFieldEnum = exports.StrategyStatementTypeConfigScalarFieldEnum = exports.StrategicObjectiveScalarFieldEnum = exports.StrategicPillarScalarFieldEnum = exports.ReplaySourceRowScalarFieldEnum = exports.ReplayBatchScalarFieldEnum = void 0;
exports.ProcurementMatchToleranceConfigScalarFieldEnum = exports.AssetDepreciationRunScalarFieldEnum = exports.AssetRegisterEntryScalarFieldEnum = exports.PaymentBatchLineScalarFieldEnum = exports.PaymentBatchScalarFieldEnum = exports.VendorInvoiceScalarFieldEnum = exports.GoodsReceiptScalarFieldEnum = exports.PurchaseOrderLineScalarFieldEnum = exports.PurchaseOrderScalarFieldEnum = exports.VendorScalarFieldEnum = exports.EncumbranceScalarFieldEnum = exports.BudgetTargetScalarFieldEnum = exports.BudgetLineMonthlyAmountScalarFieldEnum = exports.BudgetLineScalarFieldEnum = exports.BudgetVersionScalarFieldEnum = exports.HibahRecordScalarFieldEnum = exports.DistributionLineItemScalarFieldEnum = exports.DistributionScalarFieldEnum = exports.PoolIncomeRecordScalarFieldEnum = exports.HalalFundLaunchConfigScalarFieldEnum = exports.PortfolioMarketValueEntryScalarFieldEnum = exports.NavRecordScalarFieldEnum = exports.FeeAccrualScalarFieldEnum = exports.PortfolioPositionScalarFieldEnum = exports.RiskRegisterEntryScalarFieldEnum = exports.RiskAppetiteCategoryScalarFieldEnum = exports.RiskAppetiteMatrixVersionScalarFieldEnum = exports.RegulatorTemplateLineScalarFieldEnum = exports.RegulatorTemplateScalarFieldEnum = exports.ReportRunScalarFieldEnum = exports.StatementLineMappingScalarFieldEnum = exports.StatementLineScalarFieldEnum = exports.StatementTemplateScalarFieldEnum = exports.AccountingFrameworkMapScalarFieldEnum = exports.RequiredDocumentConfigScalarFieldEnum = exports.DocumentRegisterEntryScalarFieldEnum = exports.CashbookEntryScalarFieldEnum = exports.TxnScalarFieldEnum = exports.EventJournalConfigScalarFieldEnum = exports.AccountingPeriodScalarFieldEnum = exports.JournalEntryLineScalarFieldEnum = exports.JournalEntryScalarFieldEnum = exports.ChartOfAccountScalarFieldEnum = exports.LedgerEntityScalarFieldEnum = exports.EmolumentStructureScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.TaskDefaultGatePolicyScalarFieldEnum = exports.CalendarReminderConfigScalarFieldEnum = exports.ExternalCalendarConnectionScalarFieldEnum = exports.CalendarGatewayProviderScalarFieldEnum = void 0;
exports.PortalClientSessionScalarFieldEnum = exports.PortalClientUserScalarFieldEnum = exports.ZakatDeclaredItemScalarFieldEnum = exports.ZakatAssessmentRunScalarFieldEnum = exports.ZakatSubscriptionRequestScalarFieldEnum = exports.ZakatClientSubscriptionScalarFieldEnum = exports.ZakatNisabConfigScalarFieldEnum = exports.WmRiskAssessmentRunScalarFieldEnum = exports.WmStressScenarioConfigScalarFieldEnum = exports.WmAdvisoryRecordScalarFieldEnum = exports.WmGrowthPlanScalarFieldEnum = exports.WmRiskProfileScalarFieldEnum = exports.WmAllocationPolicyScalarFieldEnum = exports.WmHoldingActionRequestScalarFieldEnum = exports.WmClientAssetValuationScalarFieldEnum = exports.WmClientAssetScalarFieldEnum = exports.WmTierMigrationLogScalarFieldEnum = exports.WmClientProfileScalarFieldEnum = exports.WmFxConfigScalarFieldEnum = exports.WmClientTierConfigScalarFieldEnum = exports.AssetClassRegistryScalarFieldEnum = exports.RegulatoryFilingRunScalarFieldEnum = exports.RegulatoryFilingCalendarScalarFieldEnum = exports.TemplateFieldMapScalarFieldEnum = exports.TemplateCellMapScalarFieldEnum = exports.DashboardActionItemScalarFieldEnum = exports.EnterpriseRiskProfileEntryScalarFieldEnum = exports.LedgerReconciliationConfigScalarFieldEnum = exports.DashboardTileScalarFieldEnum = exports.SavedDashboardScalarFieldEnum = exports.MetricDefinitionScalarFieldEnum = exports.DashboardManualStatusScalarFieldEnum = exports.StressTestRunScalarFieldEnum = exports.StressScenarioConfigScalarFieldEnum = exports.RegulatoryCapitalRequirementScalarFieldEnum = exports.KriEngineConfigScalarFieldEnum = exports.KriEscalationScalarFieldEnum = exports.KriReadingScalarFieldEnum = exports.KriDefinitionScalarFieldEnum = exports.ComplianceCheckScalarFieldEnum = exports.PurificationRecordScalarFieldEnum = exports.SsbResolutionScalarFieldEnum = exports.SsbMemberScalarFieldEnum = exports.NdMandateProvisionalAccrualScalarFieldEnum = exports.NdMandateAccountScalarFieldEnum = exports.BudgetVarianceRagThresholdScalarFieldEnum = exports.PettyCashSpotCheckScalarFieldEnum = exports.PettyCashReplenishmentClaimScalarFieldEnum = exports.PettyCashVoucherScalarFieldEnum = exports.PettyCashFloatScalarFieldEnum = void 0;
exports.AiCapabilityContextRuleScalarFieldEnum = exports.AiKillSwitchScalarFieldEnum = exports.AiCapabilityFlagScalarFieldEnum = exports.ScheduledJobRegistrationScalarFieldEnum = exports.ScheduledJobPauseStateScalarFieldEnum = exports.BackupRunScalarFieldEnum = exports.ScheduledJobRunScalarFieldEnum = exports.ComplaintSlaConfigScalarFieldEnum = exports.ExecOversightPolicyScalarFieldEnum = exports.ExecOversightSessionScalarFieldEnum = exports.DataBreachRegisterEntryScalarFieldEnum = exports.RetentionScheduleEntryScalarFieldEnum = exports.DsrResponseConfigScalarFieldEnum = exports.ComplaintScalarFieldEnum = exports.PaymentReminderDispatchQueueScalarFieldEnum = exports.PaymentReminderNoticeLogScalarFieldEnum = exports.PaymentReminderLadderConfigScalarFieldEnum = exports.CounterpartyRepaymentObligationScalarFieldEnum = exports.InvestmentMemoThresholdConfigScalarFieldEnum = exports.InvestmentMemoScalarFieldEnum = exports.CounterpartyFacilityApplicationScalarFieldEnum = exports.CounterpartyRestructureRequestScalarFieldEnum = exports.PortalCounterpartySessionScalarFieldEnum = exports.PortalCounterpartyUserScalarFieldEnum = exports.MarketingSendScalarFieldEnum = exports.MarketingSubscriberScalarFieldEnum = exports.MarketingResourceScalarFieldEnum = exports.PrivacyNoticeAcknowledgmentScalarFieldEnum = exports.PrivacyNoticeConfigScalarFieldEnum = exports.PublicIntakeSubmissionScalarFieldEnum = exports.PaymentInflowLogScalarFieldEnum = exports.InvestorOnboardingCaseScalarFieldEnum = exports.InvestorOnboardingConfigScalarFieldEnum = exports.ClientCommunicationScalarFieldEnum = exports.LeadScalarFieldEnum = exports.TalentRecommendationScalarFieldEnum = exports.RewardTypeScalarFieldEnum = exports.WelfareSchemeScalarFieldEnum = exports.PayrollRunLineScalarFieldEnum = exports.PayrollRunScalarFieldEnum = exports.TaxRuleConfigScalarFieldEnum = exports.EmployeeIncentiveResultScalarFieldEnum = exports.BehaviouralGateCheckScalarFieldEnum = exports.PmsGateSeverityConfigScalarFieldEnum = exports.IncentiveBandConfigScalarFieldEnum = exports.EmployeeKpiScoreScalarFieldEnum = exports.EmployeeScoreSubmissionScalarFieldEnum = exports.AppraisalCycleScalarFieldEnum = exports.ActivityReportScalarFieldEnum = exports.RoleScorecardOverrideScalarFieldEnum = void 0;
exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.ScreeningHitScalarFieldEnum = exports.ScreeningRunScalarFieldEnum = exports.CommercialScreeningProviderScalarFieldEnum = exports.ScreeningGatewayConfigScalarFieldEnum = exports.ScreeningListDownloadLogScalarFieldEnum = exports.ScreeningListEntryScalarFieldEnum = exports.ScreeningListSourceScalarFieldEnum = exports.ActivationStepSkipScalarFieldEnum = exports.ActivationStateScalarFieldEnum = exports.TaxRemittanceBatchScalarFieldEnum = exports.TaxRemittanceDueDateConfigScalarFieldEnum = exports.TaxGlMappingScalarFieldEnum = exports.StampDutyAssessmentScalarFieldEnum = exports.FeeInvoiceScalarFieldEnum = exports.InvestorTaxExemptionScalarFieldEnum = exports.TaxRateVersionScalarFieldEnum = exports.PayoutCompilationLineScalarFieldEnum = exports.PayoutCompilationBatchScalarFieldEnum = exports.PaymentGatewayInflowScalarFieldEnum = exports.ProductCustodianAccountScalarFieldEnum = exports.PaymentGatewayProviderScalarFieldEnum = exports.BureauPullLogScalarFieldEnum = exports.BureauPolicyConfigScalarFieldEnum = exports.BureauProviderScalarFieldEnum = exports.StakeholderDistributionLogScalarFieldEnum = exports.StakeholderReportRunScalarFieldEnum = exports.AiResponseCacheScalarFieldEnum = exports.AiInteractionLogScalarFieldEnum = exports.DataPointCatalogScalarFieldEnum = exports.AiTokenBudgetScalarFieldEnum = exports.AiProviderCredentialScalarFieldEnum = exports.AiTieredModelPolicyScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    AuditTrail: 'AuditTrail',
    AuditChainState: 'AuditChainState',
    AppUser: 'AppUser',
    UserSession: 'UserSession',
    MfaBackupCode: 'MfaBackupCode',
    MfaFinancialCapability: 'MfaFinancialCapability',
    MfaGlobalEnforcement: 'MfaGlobalEnforcement',
    AuthPolicy: 'AuthPolicy',
    Role: 'Role',
    UserRole: 'UserRole',
    PlatformFunction: 'PlatformFunction',
    RolePermission: 'RolePermission',
    RoleConflict: 'RoleConflict',
    WorkflowType: 'WorkflowType',
    ApprovalChainVersion: 'ApprovalChainVersion',
    ApprovalRule: 'ApprovalRule',
    ApprovalRuleStep: 'ApprovalRuleStep',
    WorkflowInstance: 'WorkflowInstance',
    WorkflowStepApproval: 'WorkflowStepApproval',
    DelegationOfAuthority: 'DelegationOfAuthority',
    Product: 'Product',
    ProductParameters: 'ProductParameters',
    Investor: 'Investor',
    InvestorMandate: 'InvestorMandate',
    InvestorMandateAmendmentRequest: 'InvestorMandateAmendmentRequest',
    InvestorKycDocument: 'InvestorKycDocument',
    ScreeningChecklistItem: 'ScreeningChecklistItem',
    InvestorScreeningRecord: 'InvestorScreeningRecord',
    InvestorBankAccount: 'InvestorBankAccount',
    InvestorBankAccountChangeRequest: 'InvestorBankAccountChangeRequest',
    InvestorBankAccountChangeConfig: 'InvestorBankAccountChangeConfig',
    InvestorContactAmendmentRequest: 'InvestorContactAmendmentRequest',
    InvestorExitRequest: 'InvestorExitRequest',
    InvestorDormancyConfig: 'InvestorDormancyConfig',
    InvestorSanctionsRescreeningConfig: 'InvestorSanctionsRescreeningConfig',
    BankStatementLine: 'BankStatementLine',
    Counterparty: 'Counterparty',
    CounterpartyWriteOffRequest: 'CounterpartyWriteOffRequest',
    CounterpartyOnboardingCase: 'CounterpartyOnboardingCase',
    ProductAccount: 'ProductAccount',
    SubscriptionRequest: 'SubscriptionRequest',
    MigrationBatch: 'MigrationBatch',
    MigrationStagingRow: 'MigrationStagingRow',
    ReplayBatch: 'ReplayBatch',
    ReplaySourceRow: 'ReplaySourceRow',
    StrategicPillar: 'StrategicPillar',
    StrategicObjective: 'StrategicObjective',
    StrategyStatementTypeConfig: 'StrategyStatementTypeConfig',
    LetterheadTemplate: 'LetterheadTemplate',
    DocumentTemplate: 'DocumentTemplate',
    Certificate: 'Certificate',
    LetterInstance: 'LetterInstance',
    StrategyStatement: 'StrategyStatement',
    StrategyPublication: 'StrategyPublication',
    StrategyAcknowledgment: 'StrategyAcknowledgment',
    PillarObjectiveMap: 'PillarObjectiveMap',
    OrgUnit: 'OrgUnit',
    EnterpriseKra: 'EnterpriseKra',
    KraObjectiveMap: 'KraObjectiveMap',
    KpiDefinition: 'KpiDefinition',
    KpiWeightMatrix: 'KpiWeightMatrix',
    CadreTierMap: 'CadreTierMap',
    Position: 'Position',
    Employee: 'Employee',
    DepartmentHeadDesignation: 'DepartmentHeadDesignation',
    EmployeeOnboardingRequest: 'EmployeeOnboardingRequest',
    EmployeeOffboardingRequest: 'EmployeeOffboardingRequest',
    EmployeeIncentivePctChangeRequest: 'EmployeeIncentivePctChangeRequest',
    EmployeePersonalRecord: 'EmployeePersonalRecord',
    EmployeePersonalRecordChangeRequest: 'EmployeePersonalRecordChangeRequest',
    Task: 'Task',
    TaskSubmission: 'TaskSubmission',
    LeaveType: 'LeaveType',
    LeaveEntitlement: 'LeaveEntitlement',
    LeaveApplication: 'LeaveApplication',
    AttendanceProvider: 'AttendanceProvider',
    AttendanceEvent: 'AttendanceEvent',
    AttendanceLockUserMapping: 'AttendanceLockUserMapping',
    AttendanceClockInPolicy: 'AttendanceClockInPolicy',
    AttendanceExceptionRequest: 'AttendanceExceptionRequest',
    AttendanceLatenessGatePolicy: 'AttendanceLatenessGatePolicy',
    BoardDirective: 'BoardDirective',
    BoardCalendarEvent: 'BoardCalendarEvent',
    BoardCalendarReminderConfig: 'BoardCalendarReminderConfig',
    BoardCalendarSubmission: 'BoardCalendarSubmission',
    TransmittedDocument: 'TransmittedDocument',
    TransmittedDocumentRecipient: 'TransmittedDocumentRecipient',
    BoardMinutes: 'BoardMinutes',
    BoardMinutesTransmission: 'BoardMinutesTransmission',
    TaskEscalationConfig: 'TaskEscalationConfig',
    CalendarEntry: 'CalendarEntry',
    CalendarMeetingAttendee: 'CalendarMeetingAttendee',
    CalendarFeedToken: 'CalendarFeedToken',
    CalendarGatewayProvider: 'CalendarGatewayProvider',
    ExternalCalendarConnection: 'ExternalCalendarConnection',
    CalendarReminderConfig: 'CalendarReminderConfig',
    TaskDefaultGatePolicy: 'TaskDefaultGatePolicy',
    Notification: 'Notification',
    EmolumentStructure: 'EmolumentStructure',
    LedgerEntity: 'LedgerEntity',
    ChartOfAccount: 'ChartOfAccount',
    JournalEntry: 'JournalEntry',
    JournalEntryLine: 'JournalEntryLine',
    AccountingPeriod: 'AccountingPeriod',
    EventJournalConfig: 'EventJournalConfig',
    Txn: 'Txn',
    CashbookEntry: 'CashbookEntry',
    DocumentRegisterEntry: 'DocumentRegisterEntry',
    RequiredDocumentConfig: 'RequiredDocumentConfig',
    AccountingFrameworkMap: 'AccountingFrameworkMap',
    StatementTemplate: 'StatementTemplate',
    StatementLine: 'StatementLine',
    StatementLineMapping: 'StatementLineMapping',
    ReportRun: 'ReportRun',
    RegulatorTemplate: 'RegulatorTemplate',
    RegulatorTemplateLine: 'RegulatorTemplateLine',
    RiskAppetiteMatrixVersion: 'RiskAppetiteMatrixVersion',
    RiskAppetiteCategory: 'RiskAppetiteCategory',
    RiskRegisterEntry: 'RiskRegisterEntry',
    PortfolioPosition: 'PortfolioPosition',
    FeeAccrual: 'FeeAccrual',
    NavRecord: 'NavRecord',
    PortfolioMarketValueEntry: 'PortfolioMarketValueEntry',
    HalalFundLaunchConfig: 'HalalFundLaunchConfig',
    PoolIncomeRecord: 'PoolIncomeRecord',
    Distribution: 'Distribution',
    DistributionLineItem: 'DistributionLineItem',
    HibahRecord: 'HibahRecord',
    BudgetVersion: 'BudgetVersion',
    BudgetLine: 'BudgetLine',
    BudgetLineMonthlyAmount: 'BudgetLineMonthlyAmount',
    BudgetTarget: 'BudgetTarget',
    Encumbrance: 'Encumbrance',
    Vendor: 'Vendor',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderLine: 'PurchaseOrderLine',
    GoodsReceipt: 'GoodsReceipt',
    VendorInvoice: 'VendorInvoice',
    PaymentBatch: 'PaymentBatch',
    PaymentBatchLine: 'PaymentBatchLine',
    AssetRegisterEntry: 'AssetRegisterEntry',
    AssetDepreciationRun: 'AssetDepreciationRun',
    ProcurementMatchToleranceConfig: 'ProcurementMatchToleranceConfig',
    PettyCashFloat: 'PettyCashFloat',
    PettyCashVoucher: 'PettyCashVoucher',
    PettyCashReplenishmentClaim: 'PettyCashReplenishmentClaim',
    PettyCashSpotCheck: 'PettyCashSpotCheck',
    BudgetVarianceRagThreshold: 'BudgetVarianceRagThreshold',
    NdMandateAccount: 'NdMandateAccount',
    NdMandateProvisionalAccrual: 'NdMandateProvisionalAccrual',
    SsbMember: 'SsbMember',
    SsbResolution: 'SsbResolution',
    PurificationRecord: 'PurificationRecord',
    ComplianceCheck: 'ComplianceCheck',
    KriDefinition: 'KriDefinition',
    KriReading: 'KriReading',
    KriEscalation: 'KriEscalation',
    KriEngineConfig: 'KriEngineConfig',
    RegulatoryCapitalRequirement: 'RegulatoryCapitalRequirement',
    StressScenarioConfig: 'StressScenarioConfig',
    StressTestRun: 'StressTestRun',
    DashboardManualStatus: 'DashboardManualStatus',
    MetricDefinition: 'MetricDefinition',
    SavedDashboard: 'SavedDashboard',
    DashboardTile: 'DashboardTile',
    LedgerReconciliationConfig: 'LedgerReconciliationConfig',
    EnterpriseRiskProfileEntry: 'EnterpriseRiskProfileEntry',
    DashboardActionItem: 'DashboardActionItem',
    TemplateCellMap: 'TemplateCellMap',
    TemplateFieldMap: 'TemplateFieldMap',
    RegulatoryFilingCalendar: 'RegulatoryFilingCalendar',
    RegulatoryFilingRun: 'RegulatoryFilingRun',
    AssetClassRegistry: 'AssetClassRegistry',
    WmClientTierConfig: 'WmClientTierConfig',
    WmFxConfig: 'WmFxConfig',
    WmClientProfile: 'WmClientProfile',
    WmTierMigrationLog: 'WmTierMigrationLog',
    WmClientAsset: 'WmClientAsset',
    WmClientAssetValuation: 'WmClientAssetValuation',
    WmHoldingActionRequest: 'WmHoldingActionRequest',
    WmAllocationPolicy: 'WmAllocationPolicy',
    WmRiskProfile: 'WmRiskProfile',
    WmGrowthPlan: 'WmGrowthPlan',
    WmAdvisoryRecord: 'WmAdvisoryRecord',
    WmStressScenarioConfig: 'WmStressScenarioConfig',
    WmRiskAssessmentRun: 'WmRiskAssessmentRun',
    ZakatNisabConfig: 'ZakatNisabConfig',
    ZakatClientSubscription: 'ZakatClientSubscription',
    ZakatSubscriptionRequest: 'ZakatSubscriptionRequest',
    ZakatAssessmentRun: 'ZakatAssessmentRun',
    ZakatDeclaredItem: 'ZakatDeclaredItem',
    PortalClientUser: 'PortalClientUser',
    PortalClientSession: 'PortalClientSession',
    RoleScorecardOverride: 'RoleScorecardOverride',
    ActivityReport: 'ActivityReport',
    AppraisalCycle: 'AppraisalCycle',
    EmployeeScoreSubmission: 'EmployeeScoreSubmission',
    EmployeeKpiScore: 'EmployeeKpiScore',
    IncentiveBandConfig: 'IncentiveBandConfig',
    PmsGateSeverityConfig: 'PmsGateSeverityConfig',
    BehaviouralGateCheck: 'BehaviouralGateCheck',
    EmployeeIncentiveResult: 'EmployeeIncentiveResult',
    TaxRuleConfig: 'TaxRuleConfig',
    PayrollRun: 'PayrollRun',
    PayrollRunLine: 'PayrollRunLine',
    WelfareScheme: 'WelfareScheme',
    RewardType: 'RewardType',
    TalentRecommendation: 'TalentRecommendation',
    Lead: 'Lead',
    ClientCommunication: 'ClientCommunication',
    InvestorOnboardingConfig: 'InvestorOnboardingConfig',
    InvestorOnboardingCase: 'InvestorOnboardingCase',
    PaymentInflowLog: 'PaymentInflowLog',
    PublicIntakeSubmission: 'PublicIntakeSubmission',
    PrivacyNoticeConfig: 'PrivacyNoticeConfig',
    PrivacyNoticeAcknowledgment: 'PrivacyNoticeAcknowledgment',
    MarketingResource: 'MarketingResource',
    MarketingSubscriber: 'MarketingSubscriber',
    MarketingSend: 'MarketingSend',
    PortalCounterpartyUser: 'PortalCounterpartyUser',
    PortalCounterpartySession: 'PortalCounterpartySession',
    CounterpartyRestructureRequest: 'CounterpartyRestructureRequest',
    CounterpartyFacilityApplication: 'CounterpartyFacilityApplication',
    InvestmentMemo: 'InvestmentMemo',
    InvestmentMemoThresholdConfig: 'InvestmentMemoThresholdConfig',
    CounterpartyRepaymentObligation: 'CounterpartyRepaymentObligation',
    PaymentReminderLadderConfig: 'PaymentReminderLadderConfig',
    PaymentReminderNoticeLog: 'PaymentReminderNoticeLog',
    PaymentReminderDispatchQueue: 'PaymentReminderDispatchQueue',
    Complaint: 'Complaint',
    DsrResponseConfig: 'DsrResponseConfig',
    RetentionScheduleEntry: 'RetentionScheduleEntry',
    DataBreachRegisterEntry: 'DataBreachRegisterEntry',
    ExecOversightSession: 'ExecOversightSession',
    ExecOversightPolicy: 'ExecOversightPolicy',
    ComplaintSlaConfig: 'ComplaintSlaConfig',
    ScheduledJobRun: 'ScheduledJobRun',
    BackupRun: 'BackupRun',
    ScheduledJobPauseState: 'ScheduledJobPauseState',
    ScheduledJobRegistration: 'ScheduledJobRegistration',
    AiCapabilityFlag: 'AiCapabilityFlag',
    AiKillSwitch: 'AiKillSwitch',
    AiCapabilityContextRule: 'AiCapabilityContextRule',
    AiTieredModelPolicy: 'AiTieredModelPolicy',
    AiProviderCredential: 'AiProviderCredential',
    AiTokenBudget: 'AiTokenBudget',
    DataPointCatalog: 'DataPointCatalog',
    AiInteractionLog: 'AiInteractionLog',
    AiResponseCache: 'AiResponseCache',
    StakeholderReportRun: 'StakeholderReportRun',
    StakeholderDistributionLog: 'StakeholderDistributionLog',
    BureauProvider: 'BureauProvider',
    BureauPolicyConfig: 'BureauPolicyConfig',
    BureauPullLog: 'BureauPullLog',
    PaymentGatewayProvider: 'PaymentGatewayProvider',
    ProductCustodianAccount: 'ProductCustodianAccount',
    PaymentGatewayInflow: 'PaymentGatewayInflow',
    PayoutCompilationBatch: 'PayoutCompilationBatch',
    PayoutCompilationLine: 'PayoutCompilationLine',
    TaxRateVersion: 'TaxRateVersion',
    InvestorTaxExemption: 'InvestorTaxExemption',
    FeeInvoice: 'FeeInvoice',
    StampDutyAssessment: 'StampDutyAssessment',
    TaxGlMapping: 'TaxGlMapping',
    TaxRemittanceDueDateConfig: 'TaxRemittanceDueDateConfig',
    TaxRemittanceBatch: 'TaxRemittanceBatch',
    ActivationState: 'ActivationState',
    ActivationStepSkip: 'ActivationStepSkip',
    ScreeningListSource: 'ScreeningListSource',
    ScreeningListEntry: 'ScreeningListEntry',
    ScreeningListDownloadLog: 'ScreeningListDownloadLog',
    ScreeningGatewayConfig: 'ScreeningGatewayConfig',
    CommercialScreeningProvider: 'CommercialScreeningProvider',
    ScreeningRun: 'ScreeningRun',
    ScreeningHit: 'ScreeningHit'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AuditTrailScalarFieldEnum = {
    id: 'id',
    occurredAt: 'occurredAt',
    actorUserId: 'actorUserId',
    actorRole: 'actorRole',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    workflowStep: 'workflowStep',
    before: 'before',
    after: 'after',
    ipAddress: 'ipAddress',
    sessionId: 'sessionId',
    requestId: 'requestId',
    previousHash: 'previousHash',
    tamperHash: 'tamperHash'
};
exports.AuditChainStateScalarFieldEnum = {
    id: 'id',
    lastHash: 'lastHash',
    updatedAt: 'updatedAt'
};
exports.AppUserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    displayName: 'displayName',
    status: 'status',
    passwordHash: 'passwordHash',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    totpSecret: 'totpSecret',
    mfaEnabledAt: 'mfaEnabledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    mfaPending: 'mfaPending'
};
exports.MfaBackupCodeScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
exports.MfaFinancialCapabilityScalarFieldEnum = {
    functionCode: 'functionCode',
    addedByUserId: 'addedByUserId',
    addedAt: 'addedAt'
};
exports.MfaGlobalEnforcementScalarFieldEnum = {
    id: 'id',
    allStaffMandatory: 'allStaffMandatory',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.AuthPolicyScalarFieldEnum = {
    id: 'id',
    maxFailedAttempts: 'maxFailedAttempts',
    lockoutMinutes: 'lockoutMinutes',
    sessionTtlMinutes: 'sessionTtlMinutes',
    minPasswordLength: 'minPasswordLength',
    mfaRequired: 'mfaRequired',
    updatedAt: 'updatedAt'
};
exports.RoleScalarFieldEnum = {
    code: 'code',
    name: 'name',
    description: 'description',
    isExclusive: 'isExclusive',
    excludesAnyApprover: 'excludesAnyApprover',
    isReadOnly: 'isReadOnly'
};
exports.UserRoleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    roleCode: 'roleCode',
    assignedAt: 'assignedAt',
    assignedById: 'assignedById'
};
exports.PlatformFunctionScalarFieldEnum = {
    code: 'code',
    description: 'description'
};
exports.RolePermissionScalarFieldEnum = {
    roleCode: 'roleCode',
    functionCode: 'functionCode',
    level: 'level',
    condition: 'condition',
    approvalLimitKobo: 'approvalLimitKobo'
};
exports.RoleConflictScalarFieldEnum = {
    roleACode: 'roleACode',
    roleBCode: 'roleBCode',
    reason: 'reason'
};
exports.WorkflowTypeScalarFieldEnum = {
    code: 'code',
    description: 'description'
};
exports.ApprovalChainVersionScalarFieldEnum = {
    id: 'id',
    workflowTypeCode: 'workflowTypeCode',
    version: 'version',
    status: 'status',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.ApprovalRuleScalarFieldEnum = {
    id: 'id',
    ruleKey: 'ruleKey',
    workflowTypeCode: 'workflowTypeCode',
    chainVersionId: 'chainVersionId',
    scenario: 'scenario',
    minAmountKobo: 'minAmountKobo',
    maxAmountKobo: 'maxAmountKobo',
    initiatorFunctionCode: 'initiatorFunctionCode',
    requiredChecksNote: 'requiredChecksNote',
    description: 'description'
};
exports.ApprovalRuleStepScalarFieldEnum = {
    id: 'id',
    approvalRuleId: 'approvalRuleId',
    stepOrder: 'stepOrder',
    requiredFunctionCode: 'requiredFunctionCode',
    requiresAmountLimitCheck: 'requiresAmountLimitCheck',
    isLockedSeat: 'isLockedSeat',
    lockedSeatRationale: 'lockedSeatRationale',
    description: 'description'
};
exports.WorkflowInstanceScalarFieldEnum = {
    id: 'id',
    workflowTypeCode: 'workflowTypeCode',
    approvalRuleId: 'approvalRuleId',
    entityType: 'entityType',
    entityId: 'entityId',
    amountKobo: 'amountKobo',
    scenario: 'scenario',
    status: 'status',
    initiatedByUserId: 'initiatedByUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WorkflowStepApprovalScalarFieldEnum = {
    id: 'id',
    workflowInstanceId: 'workflowInstanceId',
    approvalRuleStepId: 'approvalRuleStepId',
    approverUserId: 'approverUserId',
    decision: 'decision',
    decidedAt: 'decidedAt',
    notes: 'notes'
};
exports.DelegationOfAuthorityScalarFieldEnum = {
    id: 'id',
    functionCode: 'functionCode',
    delegateUserId: 'delegateUserId',
    delegatedByUserId: 'delegatedByUserId',
    limitKobo: 'limitKobo',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    status: 'status',
    reason: 'reason',
    boardInstrumentRef: 'boardInstrumentRef',
    workflowInstanceId: 'workflowInstanceId',
    revokedAt: 'revokedAt',
    revokedByUserId: 'revokedByUserId',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    code: 'code',
    name: 'name',
    engineType: 'engineType',
    status: 'status',
    createdAt: 'createdAt',
    shariahApprovedAt: 'shariahApprovedAt',
    shariahApprovalRef: 'shariahApprovalRef',
    setupWorkflowInstanceId: 'setupWorkflowInstanceId'
};
exports.ProductParametersScalarFieldEnum = {
    id: 'id',
    productCode: 'productCode',
    version: 'version',
    psrPoolMudaribShare: 'psrPoolMudaribShare',
    surplusInvestorShare: 'surplusInvestorShare',
    surplusMudaribShare: 'surplusMudaribShare',
    feesAllowedOnPool: 'feesAllowedOnPool',
    dripDefault: 'dripDefault',
    boardResolutionRef: 'boardResolutionRef',
    ssbResolutionRef: 'ssbResolutionRef',
    effectiveFrom: 'effectiveFrom',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt',
    sheetWorkflowInstanceId: 'sheetWorkflowInstanceId',
    prospectusRef: 'prospectusRef',
    authorizedUnits: 'authorizedUnits',
    fundSizeCapKobo: 'fundSizeCapKobo',
    offerSpreadPct: 'offerSpreadPct',
    bidSpreadPct: 'bidSpreadPct',
    valuationFrequency: 'valuationFrequency',
    minimumSubscriptionKobo: 'minimumSubscriptionKobo',
    minimumAdditionalInvestmentKobo: 'minimumAdditionalInvestmentKobo',
    minimumRedemptionKobo: 'minimumRedemptionKobo',
    minimumHoldingKobo: 'minimumHoldingKobo',
    managementFeeRatePct: 'managementFeeRatePct',
    adminFeeRatePct: 'adminFeeRatePct',
    custodianFeeRatePct: 'custodianFeeRatePct',
    secFeeRatePct: 'secFeeRatePct',
    auditFeeRatePct: 'auditFeeRatePct',
    distributionMethod: 'distributionMethod',
    distributionFrequency: 'distributionFrequency',
    distributableIncomePct: 'distributableIncomePct',
    minimumParticipationKobo: 'minimumParticipationKobo',
    poolTenorMonths: 'poolTenorMonths',
    surplusSharingEnabled: 'surplusSharingEnabled',
    mandateRoleModel: 'mandateRoleModel',
    mandateFeeRatePct: 'mandateFeeRatePct',
    targetedReturnBenchmarkPct: 'targetedReturnBenchmarkPct',
    investmentType: 'investmentType',
    tenorLockInMonths: 'tenorLockInMonths',
    minimumInvestmentKobo: 'minimumInvestmentKobo',
    fundingStructure: 'fundingStructure',
    offerNarrativeBrief: 'offerNarrativeBrief',
    offerNarrativeOpportunity: 'offerNarrativeOpportunity',
    offerNarrativeDynamics: 'offerNarrativeDynamics',
    offerNarrativeRiskSummary: 'offerNarrativeRiskSummary',
    offerNarrativeModelDescription: 'offerNarrativeModelDescription'
};
exports.InvestorScalarFieldEnum = {
    investorId: 'investorId',
    fullLegalName: 'fullLegalName',
    entityType: 'entityType',
    nationality: 'nationality',
    taxIdentificationNumber: 'taxIdentificationNumber',
    dateOfBirthOrIncorporation: 'dateOfBirthOrIncorporation',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    registeredAddress: 'registeredAddress',
    kycStatus: 'kycStatus',
    kycExpiryDate: 'kycExpiryDate',
    amlStatus: 'amlStatus',
    bvn: 'bvn',
    nin: 'nin',
    rcNumber: 'rcNumber',
    pepStatus: 'pepStatus',
    occupationOrBusinessNature: 'occupationOrBusinessNature',
    relationshipOfficer: 'relationshipOfficer',
    relationshipManagerUserId: 'relationshipManagerUserId',
    migrationSourceRef: 'migrationSourceRef',
    amlRiskRating: 'amlRiskRating',
    fundStatus: 'fundStatus',
    sourceOfFunds: 'sourceOfFunds',
    authorisedSignatories: 'authorisedSignatories',
    onboardingStage: 'onboardingStage',
    stage1IssuedAt: 'stage1IssuedAt',
    stage2DeadlineAt: 'stage2DeadlineAt',
    onboardedByUserId: 'onboardedByUserId',
    complianceApprovedByUserId: 'complianceApprovedByUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
};
exports.InvestorMandateScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    mandateType: 'mandateType',
    targetReturnRate: 'targetReturnRate',
    investorBaseRatio: 'investorBaseRatio',
    mudaribBaseRatio: 'mudaribBaseRatio',
    restrictedSectors: 'restrictedSectors',
    restrictedContracts: 'restrictedContracts',
    directDealInvestmentId: 'directDealInvestmentId',
    rolloverDefault: 'rolloverDefault',
    earlyExitWaiver: 'earlyExitWaiver',
    ssbWaiverResolutionRef: 'ssbWaiverResolutionRef',
    effectiveDate: 'effectiveDate',
    approvedByUserId: 'approvedByUserId',
    shariahReviewedByUserId: 'shariahReviewedByUserId',
    version: 'version',
    createdAt: 'createdAt'
};
exports.InvestorMandateAmendmentRequestScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    proposedTargetReturnRate: 'proposedTargetReturnRate',
    proposedRolloverDefault: 'proposedRolloverDefault',
    proposedEarlyExitWaiver: 'proposedEarlyExitWaiver',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.InvestorKycDocumentScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    fileReference: 'fileReference',
    issuedDate: 'issuedDate',
    expiryDate: 'expiryDate',
    verificationStatus: 'verificationStatus',
    uploadedByUserId: 'uploadedByUserId',
    verifiedByUserId: 'verifiedByUserId',
    createdAt: 'createdAt'
};
exports.ScreeningChecklistItemScalarFieldEnum = {
    id: 'id',
    itemCode: 'itemCode',
    description: 'description',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.InvestorScreeningRecordScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    screenedAt: 'screenedAt',
    listsChecked: 'listsChecked',
    searchTermsUsed: 'searchTermsUsed',
    result: 'result',
    screenerUserId: 'screenerUserId',
    countersignerUserId: 'countersignerUserId',
    notes: 'notes'
};
exports.InvestorBankAccountScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    accountType: 'accountType',
    currency: 'currency',
    isPrimary: 'isPrimary',
    verificationStatus: 'verificationStatus',
    verifiedByUserId: 'verifiedByUserId',
    createdAt: 'createdAt',
    status: 'status',
    coolingOffEndsAt: 'coolingOffEndsAt'
};
exports.InvestorBankAccountChangeRequestScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    proposedBankName: 'proposedBankName',
    proposedAccountNumber: 'proposedAccountNumber',
    proposedAccountName: 'proposedAccountName',
    proposedAccountType: 'proposedAccountType',
    proposedCurrency: 'proposedCurrency',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    reVerifiedByUserId: 'reVerifiedByUserId',
    reVerifiedAt: 'reVerifiedAt',
    reVerificationNotes: 'reVerificationNotes',
    coolingOffEndsAt: 'coolingOffEndsAt',
    resultingBankAccountId: 'resultingBankAccountId',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.InvestorBankAccountChangeConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    coolingOffDays: 'coolingOffDays',
    boardResolutionRef: 'boardResolutionRef',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.InvestorContactAmendmentRequestScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    proposedContactEmail: 'proposedContactEmail',
    proposedContactPhone: 'proposedContactPhone',
    proposedRegisteredAddress: 'proposedRegisteredAddress',
    proposedTaxIdentificationNumber: 'proposedTaxIdentificationNumber',
    proposedSourceOfFunds: 'proposedSourceOfFunds',
    proposedOccupationOrBusinessNature: 'proposedOccupationOrBusinessNature',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.InvestorExitRequestScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    exitType: 'exitType',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.InvestorDormancyConfigScalarFieldEnum = {
    id: 'id',
    monthsInactiveThreshold: 'monthsInactiveThreshold',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.InvestorSanctionsRescreeningConfigScalarFieldEnum = {
    id: 'id',
    frequencyMonths: 'frequencyMonths',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.BankStatementLineScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    glAccountCode: 'glAccountCode',
    statementDate: 'statementDate',
    description: 'description',
    amountKobo: 'amountKobo',
    externalRef: 'externalRef',
    status: 'status',
    matchedJournalEntryLineId: 'matchedJournalEntryLineId',
    matchedByUserId: 'matchedByUserId',
    matchedAt: 'matchedAt',
    uploadedByUserId: 'uploadedByUserId',
    createdAt: 'createdAt'
};
exports.CounterpartyScalarFieldEnum = {
    id: 'id',
    legalName: 'legalName',
    counterpartyType: 'counterpartyType',
    rcNumber: 'rcNumber',
    country: 'country',
    internalRating: 'internalRating',
    enterpriseLimitKobo: 'enterpriseLimitKobo',
    limitCurrency: 'limitCurrency',
    shariahCertRef: 'shariahCertRef',
    shariahCertExpiry: 'shariahCertExpiry',
    probabilityOfDefaultPct: 'probabilityOfDefaultPct',
    forcedSaleValueKobo: 'forcedSaleValueKobo',
    notes: 'notes',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt',
    onboardingStatus: 'onboardingStatus',
    purposeOfFinancing: 'purposeOfFinancing',
    amountSoughtKobo: 'amountSoughtKobo',
    expectedSourceOfRepayment: 'expectedSourceOfRepayment',
    creditBureauConsentAt: 'creditBureauConsentAt',
    onboardedByUserId: 'onboardedByUserId',
    contactEmail: 'contactEmail',
    portalProvisionedAt: 'portalProvisionedAt',
    restructuringRequestsEnabled: 'restructuringRequestsEnabled',
    fileManagingOfficerUserId: 'fileManagingOfficerUserId',
    accountStatus: 'accountStatus'
};
exports.CounterpartyWriteOffRequestScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    writeOffAmountKobo: 'writeOffAmountKobo',
    ledgerEntityCode: 'ledgerEntityCode',
    investmentAccountCode: 'investmentAccountCode',
    reason: 'reason',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    postedJournalEntryId: 'postedJournalEntryId',
    createdAt: 'createdAt'
};
exports.CounterpartyOnboardingCaseScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    pepSanctionsGrid: 'pepSanctionsGrid',
    riskMetricGrades: 'riskMetricGrades',
    accumulativeRiskProfile: 'accumulativeRiskProfile',
    eddRequired: 'eddRequired',
    complianceObservations: 'complianceObservations',
    complianceAssessedByUserId: 'complianceAssessedByUserId',
    complianceAssessedAt: 'complianceAssessedAt',
    ic1Checklist: 'ic1Checklist',
    ic1Notes: 'ic1Notes',
    eddChecklist: 'eddChecklist',
    eddRecommendation: 'eddRecommendation',
    eddConditionsOrBasis: 'eddConditionsOrBasis',
    periodicReviewFrequency: 'periodicReviewFrequency',
    lastPeriodicReviewAt: 'lastPeriodicReviewAt',
    riskNotes: 'riskNotes',
    mdDecision: 'mdDecision',
    mdConditionsOrReason: 'mdConditionsOrReason',
    ic2Checklist: 'ic2Checklist',
    ic2Outcome: 'ic2Outcome',
    ic2Notes: 'ic2Notes',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductAccountScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    productCode: 'productCode',
    startDate: 'startDate',
    maturityDate: 'maturityDate',
    principalOrCommittedKobo: 'principalOrCommittedKobo',
    currency: 'currency',
    targetReturnPctBenchmark: 'targetReturnPctBenchmark',
    psrInvestorPct: 'psrInvestorPct',
    psrMudaribPct: 'psrMudaribPct',
    unitsHeld: 'unitsHeld',
    mandateTermsRef: 'mandateTermsRef',
    liquidityClass: 'liquidityClass',
    dripElection: 'dripElection',
    rolloverElection: 'rolloverElection',
    status: 'status',
    notes: 'notes',
    migrationSourceRef: 'migrationSourceRef',
    profitPaymentInterval: 'profitPaymentInterval',
    createdAt: 'createdAt'
};
exports.SubscriptionRequestScalarFieldEnum = {
    id: 'id',
    requestType: 'requestType',
    investorId: 'investorId',
    productCode: 'productCode',
    amountKobo: 'amountKobo',
    effectiveDate: 'effectiveDate',
    status: 'status',
    computedUnits: 'computedUnits',
    navPerUnitUsed: 'navPerUnitUsed',
    resultProductAccountId: 'resultProductAccountId',
    resultNdMandateAccountId: 'resultNdMandateAccountId',
    rejectionReason: 'rejectionReason',
    initiatedByUserId: 'initiatedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt',
    decidedAt: 'decidedAt'
};
exports.MigrationBatchScalarFieldEnum = {
    id: 'id',
    tplCode: 'tplCode',
    fileName: 'fileName',
    uploadedByUserId: 'uploadedByUserId',
    status: 'status',
    totalRows: 'totalRows',
    validRows: 'validRows',
    rejectedRows: 'rejectedRows',
    promotedRows: 'promotedRows',
    createdAt: 'createdAt',
    validatedAt: 'validatedAt',
    promotedAt: 'promotedAt'
};
exports.MigrationStagingRowScalarFieldEnum = {
    id: 'id',
    batchId: 'batchId',
    rowNumber: 'rowNumber',
    rawData: 'rawData',
    isDemoRow: 'isDemoRow',
    status: 'status',
    rejectionReasons: 'rejectionReasons',
    promotedEntityId: 'promotedEntityId',
    createdAt: 'createdAt'
};
exports.ReplayBatchScalarFieldEnum = {
    id: 'id',
    sourceCode: 'sourceCode',
    fileName: 'fileName',
    totalRows: 'totalRows',
    ingestedByUserId: 'ingestedByUserId',
    createdAt: 'createdAt'
};
exports.ReplaySourceRowScalarFieldEnum = {
    id: 'id',
    batchId: 'batchId',
    rowNumber: 'rowNumber',
    rawData: 'rawData',
    createdAt: 'createdAt'
};
exports.StrategicPillarScalarFieldEnum = {
    code: 'code',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    explanation: 'explanation',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId'
};
exports.StrategicObjectiveScalarFieldEnum = {
    code: 'code',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    explanation: 'explanation',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId'
};
exports.StrategyStatementTypeConfigScalarFieldEnum = {
    code: 'code',
    label: 'label',
    description: 'description',
    allowsMultipleActive: 'allowsMultipleActive',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.LetterheadTemplateScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    companyName: 'companyName',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    rcNumber: 'rcNumber',
    secRegistrationLine: 'secRegistrationLine',
    brandPrimaryColorHex: 'brandPrimaryColorHex',
    brandAccentColorHex: 'brandAccentColorHex',
    brandDeepColorHex: 'brandDeepColorHex',
    footerDisclaimer: 'footerDisclaimer',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.DocumentTemplateScalarFieldEnum = {
    id: 'id',
    templateType: 'templateType',
    templateKey: 'templateKey',
    version: 'version',
    status: 'status',
    disclaimerText: 'disclaimerText',
    secRuleDisclaimer: 'secRuleDisclaimer',
    bodyTemplate: 'bodyTemplate',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.CertificateScalarFieldEnum = {
    id: 'id',
    certificateNumber: 'certificateNumber',
    investorId: 'investorId',
    productAccountId: 'productAccountId',
    ndMandateAccountId: 'ndMandateAccountId',
    productClass: 'productClass',
    status: 'status',
    dataSnapshot: 'dataSnapshot',
    pdfBytes: 'pdfBytes',
    documentRegisterEntryId: 'documentRegisterEntryId',
    templateId: 'templateId',
    issuedAt: 'issuedAt',
    createdAt: 'createdAt'
};
exports.LetterInstanceScalarFieldEnum = {
    id: 'id',
    letterType: 'letterType',
    templateId: 'templateId',
    investorId: 'investorId',
    counterpartyId: 'counterpartyId',
    productAccountId: 'productAccountId',
    ndMandateAccountId: 'ndMandateAccountId',
    mergedBody: 'mergedBody',
    status: 'status',
    generatedByUserId: 'generatedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    pdfBytes: 'pdfBytes',
    documentRegisterEntryId: 'documentRegisterEntryId',
    rejectionNotes: 'rejectionNotes',
    issuedAt: 'issuedAt',
    createdAt: 'createdAt'
};
exports.StrategyStatementScalarFieldEnum = {
    id: 'id',
    statementTypeCode: 'statementTypeCode',
    content: 'content',
    explanation: 'explanation',
    status: 'status',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.StrategyPublicationScalarFieldEnum = {
    id: 'id',
    summary: 'summary',
    publishedByUserId: 'publishedByUserId',
    publishedAt: 'publishedAt'
};
exports.StrategyAcknowledgmentScalarFieldEnum = {
    id: 'id',
    publicationId: 'publicationId',
    appUserId: 'appUserId',
    acknowledgedAt: 'acknowledgedAt'
};
exports.PillarObjectiveMapScalarFieldEnum = {
    pillarCode: 'pillarCode',
    objectiveCode: 'objectiveCode'
};
exports.OrgUnitScalarFieldEnum = {
    code: 'code',
    name: 'name',
    secondaryReportingLine: 'secondaryReportingLine'
};
exports.EnterpriseKraScalarFieldEnum = {
    code: 'code',
    name: 'name',
    orgUnitCode: 'orgUnitCode',
    status: 'status',
    createdAt: 'createdAt'
};
exports.KraObjectiveMapScalarFieldEnum = {
    kraCode: 'kraCode',
    objectiveCode: 'objectiveCode'
};
exports.KpiDefinitionScalarFieldEnum = {
    id: 'id',
    kraCode: 'kraCode',
    tier: 'tier',
    kpiText: 'kpiText',
    kpiClass: 'kpiClass',
    objectiveText: 'objectiveText',
    exampleActivity: 'exampleActivity',
    measurementBasis: 'measurementBasis',
    frequency: 'frequency',
    status: 'status',
    createdAt: 'createdAt',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId'
};
exports.KpiWeightMatrixScalarFieldEnum = {
    id: 'id',
    orgUnitCode: 'orgUnitCode',
    tier: 'tier',
    kpiClass: 'kpiClass',
    weightPct: 'weightPct',
    version: 'version',
    status: 'status',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.CadreTierMapScalarFieldEnum = {
    cadre: 'cadre',
    tier: 'tier'
};
exports.PositionScalarFieldEnum = {
    id: 'id',
    title: 'title',
    orgUnitCode: 'orgUnitCode',
    cadre: 'cadre',
    notch: 'notch',
    createdAt: 'createdAt'
};
exports.EmployeeScalarFieldEnum = {
    id: 'id',
    surname: 'surname',
    firstName: 'firstName',
    middleName: 'middleName',
    positionId: 'positionId',
    orgUnitCode: 'orgUnitCode',
    reportsToId: 'reportsToId',
    appUserId: 'appUserId',
    hireDate: 'hireDate',
    status: 'status',
    performanceIncentivePct: 'performanceIncentivePct',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.DepartmentHeadDesignationScalarFieldEnum = {
    id: 'id',
    orgUnitCode: 'orgUnitCode',
    employeeId: 'employeeId',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.EmployeeOnboardingRequestScalarFieldEnum = {
    id: 'id',
    surname: 'surname',
    firstName: 'firstName',
    middleName: 'middleName',
    positionId: 'positionId',
    orgUnitCode: 'orgUnitCode',
    reportsToId: 'reportsToId',
    hireDate: 'hireDate',
    proposedPerformanceIncentivePct: 'proposedPerformanceIncentivePct',
    linkedUserEmail: 'linkedUserEmail',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    resultingEmployeeId: 'resultingEmployeeId',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.EmployeeOffboardingRequestScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    reason: 'reason',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
};
exports.EmployeeIncentivePctChangeRequestScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    proposedPct: 'proposedPct',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    rejectionNotes: 'rejectionNotes',
    appliedAt: 'appliedAt',
    createdAt: 'createdAt'
};
exports.EmployeePersonalRecordScalarFieldEnum = {
    employeeId: 'employeeId',
    maritalStatus: 'maritalStatus',
    numberOfChildren: 'numberOfChildren',
    residentialAddress: 'residentialAddress',
    nextOfKinName: 'nextOfKinName',
    nextOfKinRelationship: 'nextOfKinRelationship',
    nextOfKinPhone: 'nextOfKinPhone',
    nextOfKinAddress: 'nextOfKinAddress',
    hobbiesInterests: 'hobbiesInterests',
    emergencyContactName: 'emergencyContactName',
    emergencyContactPhone: 'emergencyContactPhone',
    emergencyContactRelationship: 'emergencyContactRelationship',
    updatedAt: 'updatedAt'
};
exports.EmployeePersonalRecordChangeRequestScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    proposedMaritalStatus: 'proposedMaritalStatus',
    proposedResidentialAddress: 'proposedResidentialAddress',
    proposedNextOfKinName: 'proposedNextOfKinName',
    proposedNextOfKinRelationship: 'proposedNextOfKinRelationship',
    proposedNextOfKinPhone: 'proposedNextOfKinPhone',
    proposedNextOfKinAddress: 'proposedNextOfKinAddress',
    status: 'status',
    workflowInstanceId: 'workflowInstanceId',
    requestedByUserId: 'requestedByUserId',
    createdAt: 'createdAt'
};
exports.TaskScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    assigneeEmployeeId: 'assigneeEmployeeId',
    assignedByUserId: 'assignedByUserId',
    dueAt: 'dueAt',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    amberNotifiedAt: 'amberNotifiedAt',
    defaultedAt: 'defaultedAt',
    createdAt: 'createdAt',
    deliverableUrl: 'deliverableUrl',
    directiveId: 'directiveId',
    kpiDefinitionId: 'kpiDefinitionId'
};
exports.TaskSubmissionScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    submittedByEmployeeId: 'submittedByEmployeeId',
    supervisorEmployeeId: 'supervisorEmployeeId',
    deliverableUrl: 'deliverableUrl',
    status: 'status',
    acceptedTaskId: 'acceptedTaskId',
    decidedAt: 'decidedAt',
    createdAt: 'createdAt'
};
exports.LeaveTypeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    defaultAnnualDays: 'defaultAnnualDays',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.LeaveEntitlementScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    leaveTypeCode: 'leaveTypeCode',
    year: 'year',
    entitledDays: 'entitledDays',
    usedDays: 'usedDays',
    createdAt: 'createdAt'
};
exports.LeaveApplicationScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    leaveTypeCode: 'leaveTypeCode',
    startDate: 'startDate',
    endDate: 'endDate',
    daysRequested: 'daysRequested',
    reliefOfficerEmployeeId: 'reliefOfficerEmployeeId',
    reason: 'reason',
    status: 'status',
    supervisorDecidedByUserId: 'supervisorDecidedByUserId',
    supervisorDecidedAt: 'supervisorDecidedAt',
    supervisorNotes: 'supervisorNotes',
    hrAcknowledgedByUserId: 'hrAcknowledgedByUserId',
    hrAcknowledgedAt: 'hrAcknowledgedAt',
    createdAt: 'createdAt'
};
exports.AttendanceProviderScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    adapterType: 'adapterType',
    name: 'name',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    credentialConfig: 'credentialConfig',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenObtainedAt: 'tokenObtainedAt',
    tokenExpiresAt: 'tokenExpiresAt',
    isActive: 'isActive',
    configuredByUserId: 'configuredByUserId',
    pendingName: 'pendingName',
    pendingClientId: 'pendingClientId',
    pendingClientSecret: 'pendingClientSecret',
    pendingCredentialConfig: 'pendingCredentialConfig',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId',
    createdAt: 'createdAt'
};
exports.AttendanceEventScalarFieldEnum = {
    id: 'id',
    providerId: 'providerId',
    deviceUserRef: 'deviceUserRef',
    employeeId: 'employeeId',
    locationRef: 'locationRef',
    occurredAt: 'occurredAt',
    method: 'method',
    rawRef: 'rawRef',
    isTerminatedAlert: 'isTerminatedAlert',
    createdAt: 'createdAt'
};
exports.AttendanceLockUserMappingScalarFieldEnum = {
    id: 'id',
    providerId: 'providerId',
    deviceUserRef: 'deviceUserRef',
    employeeId: 'employeeId',
    mappedByUserId: 'mappedByUserId',
    createdAt: 'createdAt'
};
exports.AttendanceClockInPolicyScalarFieldEnum = {
    id: 'id',
    orgUnitCode: 'orgUnitCode',
    cadre: 'cadre',
    expectedStartTime: 'expectedStartTime',
    graceWindowMinutes: 'graceWindowMinutes',
    expectedHoursPerDay: 'expectedHoursPerDay',
    status: 'status',
    createdAt: 'createdAt'
};
exports.AttendanceExceptionRequestScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    attendanceEventId: 'attendanceEventId',
    disputedDate: 'disputedDate',
    reason: 'reason',
    status: 'status',
    decidedByUserId: 'decidedByUserId',
    decidedAt: 'decidedAt',
    decisionNotes: 'decisionNotes',
    createdAt: 'createdAt'
};
exports.AttendanceLatenessGatePolicyScalarFieldEnum = {
    id: 'id',
    minLateCount: 'minLateCount',
    severityCode: 'severityCode',
    isActive: 'isActive',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.BoardDirectiveScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    committeeTag: 'committeeTag',
    resolutionRef: 'resolutionRef',
    dueAt: 'dueAt',
    issuedByUserId: 'issuedByUserId',
    taskId: 'taskId',
    status: 'status',
    acknowledgedAt: 'acknowledgedAt',
    acknowledgedByUserId: 'acknowledgedByUserId',
    reportedBackAt: 'reportedBackAt',
    reportedBackByUserId: 'reportedBackByUserId',
    createdAt: 'createdAt'
};
exports.BoardCalendarEventScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    committeeTag: 'committeeTag',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdByUserId: 'createdByUserId',
    remindedAt: 'remindedAt',
    createdAt: 'createdAt'
};
exports.BoardCalendarReminderConfigScalarFieldEnum = {
    id: 'id',
    daysBefore: 'daysBefore',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.BoardCalendarSubmissionScalarFieldEnum = {
    id: 'id',
    calendarEventId: 'calendarEventId',
    title: 'title',
    fileReference: 'fileReference',
    submittedByUserId: 'submittedByUserId',
    submittedAt: 'submittedAt',
    status: 'status',
    receivedByUserId: 'receivedByUserId',
    receivedAt: 'receivedAt',
    completenessNote: 'completenessNote'
};
exports.TransmittedDocumentScalarFieldEnum = {
    id: 'id',
    title: 'title',
    fileReference: 'fileReference',
    docType: 'docType',
    transmittedByUserId: 'transmittedByUserId',
    createdAt: 'createdAt'
};
exports.TransmittedDocumentRecipientScalarFieldEnum = {
    id: 'id',
    documentId: 'documentId',
    recipientUserId: 'recipientUserId',
    taskId: 'taskId',
    acknowledgedAt: 'acknowledgedAt',
    createdAt: 'createdAt'
};
exports.BoardMinutesScalarFieldEnum = {
    id: 'id',
    title: 'title',
    fileReference: 'fileReference',
    committeeTag: 'committeeTag',
    uploadedByUserId: 'uploadedByUserId',
    createdAt: 'createdAt'
};
exports.BoardMinutesTransmissionScalarFieldEnum = {
    id: 'id',
    minutesId: 'minutesId',
    recipientUserId: 'recipientUserId',
    transmittedByUserId: 'transmittedByUserId',
    transmittedAt: 'transmittedAt',
    acknowledgedAt: 'acknowledgedAt'
};
exports.TaskEscalationConfigScalarFieldEnum = {
    id: 'id',
    amberThresholdPct: 'amberThresholdPct',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.CalendarEntryScalarFieldEnum = {
    id: 'id',
    ownerUserId: 'ownerUserId',
    kind: 'kind',
    title: 'title',
    description: 'description',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    isAutoPlotted: 'isAutoPlotted',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    organizerUserId: 'organizerUserId',
    reminderLeadMinutes: 'reminderLeadMinutes',
    remindedAt: 'remindedAt',
    createdAt: 'createdAt'
};
exports.CalendarMeetingAttendeeScalarFieldEnum = {
    id: 'id',
    calendarEntryId: 'calendarEntryId',
    attendeeUserId: 'attendeeUserId',
    status: 'status',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt'
};
exports.CalendarFeedTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt'
};
exports.CalendarGatewayProviderScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    adapterType: 'adapterType',
    name: 'name',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    tenantId: 'tenantId',
    isActive: 'isActive',
    configuredByUserId: 'configuredByUserId',
    pendingName: 'pendingName',
    pendingClientId: 'pendingClientId',
    pendingClientSecret: 'pendingClientSecret',
    pendingTenantId: 'pendingTenantId',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId',
    createdAt: 'createdAt'
};
exports.ExternalCalendarConnectionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    providerId: 'providerId',
    accessTokenEncrypted: 'accessTokenEncrypted',
    refreshTokenEncrypted: 'refreshTokenEncrypted',
    scope: 'scope',
    expiresAt: 'expiresAt',
    connectedAt: 'connectedAt',
    revokedAt: 'revokedAt',
    lastSyncedAt: 'lastSyncedAt'
};
exports.CalendarReminderConfigScalarFieldEnum = {
    id: 'id',
    defaultLeadMinutes: 'defaultLeadMinutes',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.TaskDefaultGatePolicyScalarFieldEnum = {
    id: 'id',
    minDefaultCount: 'minDefaultCount',
    severityCode: 'severityCode',
    isActive: 'isActive',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    recipientUserId: 'recipientUserId',
    recipientInvestorId: 'recipientInvestorId',
    type: 'type',
    title: 'title',
    body: 'body',
    linkPath: 'linkPath',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.EmolumentStructureScalarFieldEnum = {
    id: 'id',
    cadre: 'cadre',
    notch: 'notch',
    component: 'component',
    annualAmountKobo: 'annualAmountKobo',
    componentType: 'componentType',
    taxable: 'taxable',
    version: 'version',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.LedgerEntityScalarFieldEnum = {
    code: 'code',
    name: 'name',
    entityType: 'entityType',
    productCode: 'productCode',
    status: 'status',
    primaryBasis: 'primaryBasis',
    createdAt: 'createdAt'
};
exports.ChartOfAccountScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    accountCode: 'accountCode',
    accountName: 'accountName',
    accountType: 'accountType',
    aaoifiRef: 'aaoifiRef',
    ifrsRef: 'ifrsRef',
    isActive: 'isActive'
};
exports.JournalEntryScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    journalReference: 'journalReference',
    entryDate: 'entryDate',
    description: 'description',
    status: 'status',
    postedAt: 'postedAt',
    journalClass: 'journalClass',
    divergenceType: 'divergenceType',
    adjustmentForBasis: 'adjustmentForBasis',
    interEntityRef: 'interEntityRef',
    postingWorkflowInstanceId: 'postingWorkflowInstanceId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.JournalEntryLineScalarFieldEnum = {
    id: 'id',
    journalEntryId: 'journalEntryId',
    accountId: 'accountId',
    debitKobo: 'debitKobo',
    creditKobo: 'creditKobo',
    description: 'description'
};
exports.AccountingPeriodScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    status: 'status',
    openedByUserId: 'openedByUserId',
    closedByUserId: 'closedByUserId',
    closedAt: 'closedAt',
    closeWorkflowInstanceId: 'closeWorkflowInstanceId',
    createdAt: 'createdAt'
};
exports.EventJournalConfigScalarFieldEnum = {
    id: 'id',
    sortOrder: 'sortOrder',
    eventType: 'eventType',
    jeReferencePattern: 'jeReferencePattern',
    drAccountCode: 'drAccountCode',
    drAccountName: 'drAccountName',
    crAccountCode: 'crAccountCode',
    crAccountName: 'crAccountName',
    triggerDescription: 'triggerDescription',
    createdAt: 'createdAt'
};
exports.TxnScalarFieldEnum = {
    id: 'id',
    txnType: 'txnType',
    ledgerEntityCode: 'ledgerEntityCode',
    productAccountId: 'productAccountId',
    valueDate: 'valueDate',
    amountKobo: 'amountKobo',
    unitsQty: 'unitsQty',
    unitPriceKobo: 'unitPriceKobo',
    counterpartyId: 'counterpartyId',
    status: 'status',
    makerUserId: 'makerUserId',
    checkerUserId: 'checkerUserId',
    postedJournalEntryId: 'postedJournalEntryId',
    migrationSourceSystem: 'migrationSourceSystem',
    migrationSourceDocumentRef: 'migrationSourceDocumentRef',
    createdAt: 'createdAt'
};
exports.CashbookEntryScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    entryDate: 'entryDate',
    description: 'description',
    amountKobo: 'amountKobo',
    bankReference: 'bankReference',
    reconciliationStatus: 'reconciliationStatus',
    reconciledAt: 'reconciledAt',
    createdAt: 'createdAt'
};
exports.DocumentRegisterEntryScalarFieldEnum = {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    documentType: 'documentType',
    fileReference: 'fileReference',
    uploadedByUserId: 'uploadedByUserId',
    uploadedByCounterpartyId: 'uploadedByCounterpartyId',
    uploadedAt: 'uploadedAt'
};
exports.RequiredDocumentConfigScalarFieldEnum = {
    id: 'id',
    applicationType: 'applicationType',
    documentType: 'documentType',
    status: 'status',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.AccountingFrameworkMapScalarFieldEnum = {
    id: 'id',
    version: 'version',
    description: 'description',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.StatementTemplateScalarFieldEnum = {
    id: 'id',
    basis: 'basis',
    statementCode: 'statementCode',
    name: 'name',
    version: 'version',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.StatementLineScalarFieldEnum = {
    id: 'id',
    statementTemplateId: 'statementTemplateId',
    lineCode: 'lineCode',
    label: 'label',
    sortOrder: 'sortOrder',
    signConvention: 'signConvention',
    parentLineId: 'parentLineId',
    computationType: 'computationType',
    formulaExpression: 'formulaExpression'
};
exports.StatementLineMappingScalarFieldEnum = {
    id: 'id',
    frameworkMapId: 'frameworkMapId',
    chartOfAccountId: 'chartOfAccountId',
    statementLineId: 'statementLineId',
    createdAt: 'createdAt'
};
exports.ReportRunScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    basis: 'basis',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    frameworkMapId: 'frameworkMapId',
    statementTemplateId: 'statementTemplateId',
    figures: 'figures',
    generatedByUserId: 'generatedByUserId',
    generatedAt: 'generatedAt'
};
exports.RegulatorTemplateScalarFieldEnum = {
    id: 'id',
    regulatorCode: 'regulatorCode',
    templateCode: 'templateCode',
    name: 'name',
    filingFrequency: 'filingFrequency',
    version: 'version',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.RegulatorTemplateLineScalarFieldEnum = {
    id: 'id',
    regulatorTemplateId: 'regulatorTemplateId',
    lineCode: 'lineCode',
    label: 'label',
    sortOrder: 'sortOrder',
    mapsToStatementLineId: 'mapsToStatementLineId',
    mapsToChartOfAccountId: 'mapsToChartOfAccountId'
};
exports.RiskAppetiteMatrixVersionScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.RiskAppetiteCategoryScalarFieldEnum = {
    id: 'id',
    matrixVersionId: 'matrixVersionId',
    sortOrder: 'sortOrder',
    riskCategory: 'riskCategory',
    appetiteStatement: 'appetiteStatement',
    appetiteLevel: 'appetiteLevel',
    direction: 'direction',
    isZeroTolerance: 'isZeroTolerance',
    escalationOwner: 'escalationOwner',
    greenThreshold: 'greenThreshold',
    amberThreshold: 'amberThreshold',
    redThreshold: 'redThreshold'
};
exports.RiskRegisterEntryScalarFieldEnum = {
    id: 'id',
    sortOrder: 'sortOrder',
    riskCategory: 'riskCategory',
    subCategory: 'subCategory',
    description: 'description',
    inherentRiskRating: 'inherentRiskRating',
    residualRiskRating: 'residualRiskRating',
    riskAppetiteStatement: 'riskAppetiteStatement',
    status: 'status',
    approvedByUserId: 'approvedByUserId',
    boardResolutionRef: 'boardResolutionRef',
    createdAt: 'createdAt'
};
exports.PortfolioPositionScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    contractType: 'contractType',
    isEquity: 'isEquity',
    principalKobo: 'principalKobo',
    ratePct: 'ratePct',
    entryDate: 'entryDate',
    maturityDate: 'maturityDate',
    repaidKobo: 'repaidKobo',
    markPriceKobo: 'markPriceKobo',
    markQty: 'markQty',
    status: 'status',
    createdAt: 'createdAt'
};
exports.FeeAccrualScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    feeType: 'feeType',
    accrualDate: 'accrualDate',
    dailyAmountKobo: 'dailyAmountKobo',
    cumulativeAmountKobo: 'cumulativeAmountKobo',
    paidAmountKobo: 'paidAmountKobo',
    createdAt: 'createdAt'
};
exports.NavRecordScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    valuationDate: 'valuationDate',
    portfolioMktValKobo: 'portfolioMktValKobo',
    uninvestedCashKobo: 'uninvestedCashKobo',
    accruedUnpaidFeesKobo: 'accruedUnpaidFeesKobo',
    totalNavKobo: 'totalNavKobo',
    unitsOutstanding: 'unitsOutstanding',
    navPerUnit: 'navPerUnit',
    offerPrice: 'offerPrice',
    bidPrice: 'bidPrice',
    isLocked: 'isLocked',
    lockedAt: 'lockedAt',
    createdAt: 'createdAt'
};
exports.PortfolioMarketValueEntryScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    valuationDate: 'valuationDate',
    version: 'version',
    marketValueKobo: 'marketValueKobo',
    status: 'status',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt'
};
exports.HalalFundLaunchConfigScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    version: 'version',
    status: 'status',
    launchDate: 'launchDate',
    launchPrice: 'launchPrice',
    offerSpreadPct: 'offerSpreadPct',
    bidSpreadPct: 'bidSpreadPct',
    feeRates: 'feeRates',
    boardResolutionRef: 'boardResolutionRef',
    ssbResolutionRef: 'ssbResolutionRef',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.PoolIncomeRecordScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    incomeReceivedKobo: 'incomeReceivedKobo',
    accruedIncomeKobo: 'accruedIncomeKobo',
    confirmedByUserId: 'confirmedByUserId',
    createdAt: 'createdAt'
};
exports.DistributionScalarFieldEnum = {
    id: 'id',
    ledgerEntityCode: 'ledgerEntityCode',
    productCode: 'productCode',
    method: 'method',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    recordDate: 'recordDate',
    netAvailableKobo: 'netAvailableKobo',
    toParticipantsKobo: 'toParticipantsKobo',
    retainedOrMudaribBaseKobo: 'retainedOrMudaribBaseKobo',
    status: 'status',
    boardResolutionRef: 'boardResolutionRef',
    ssbResolutionRef: 'ssbResolutionRef',
    workflowInstanceId: 'workflowInstanceId',
    declaredAt: 'declaredAt',
    paidAt: 'paidAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.DistributionLineItemScalarFieldEnum = {
    id: 'id',
    distributionId: 'distributionId',
    productAccountId: 'productAccountId',
    ndMandateAccountId: 'ndMandateAccountId',
    capitalKobo: 'capitalKobo',
    targetRatePct: 'targetRatePct',
    activeDays: 'activeDays',
    entitlementKobo: 'entitlementKobo',
    twe: 'twe',
    priorityPayoutKobo: 'priorityPayoutKobo',
    surplusPayoutKobo: 'surplusPayoutKobo',
    hibahKobo: 'hibahKobo',
    unitsAtRecord: 'unitsAtRecord',
    dpsAmount: 'dpsAmount',
    dripUnits: 'dripUnits',
    dripAmountKobo: 'dripAmountKobo',
    totalPayoutKobo: 'totalPayoutKobo',
    createdAt: 'createdAt'
};
exports.HibahRecordScalarFieldEnum = {
    id: 'id',
    distributionId: 'distributionId',
    productAccountId: 'productAccountId',
    ledgerEntityCode: 'ledgerEntityCode',
    amountKobo: 'amountKobo',
    isLossPeriod: 'isLossPeriod',
    reason: 'reason',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.BudgetVersionScalarFieldEnum = {
    id: 'id',
    fiscalYear: 'fiscalYear',
    scenarioLabel: 'scenarioLabel',
    status: 'status',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt',
    linkedObjectiveCodes: 'linkedObjectiveCodes'
};
exports.BudgetLineScalarFieldEnum = {
    id: 'id',
    budgetVersionId: 'budgetVersionId',
    ledgerEntityCode: 'ledgerEntityCode',
    budgetLineGroup: 'budgetLineGroup',
    lineDescription: 'lineDescription',
    class: 'class',
    phasingMethod: 'phasingMethod',
    driverBasis: 'driverBasis',
    driverRateOrFactor: 'driverRateOrFactor',
    escalatorFactorsJson: 'escalatorFactorsJson',
    sourceSheetRef: 'sourceSheetRef',
    isActive: 'isActive',
    flaggedReason: 'flaggedReason',
    valuesAsGiven: 'valuesAsGiven',
    createdAt: 'createdAt'
};
exports.BudgetLineMonthlyAmountScalarFieldEnum = {
    id: 'id',
    budgetLineId: 'budgetLineId',
    month: 'month',
    amountKobo: 'amountKobo',
    recomputedAmountKobo: 'recomputedAmountKobo',
    createdAt: 'createdAt'
};
exports.BudgetTargetScalarFieldEnum = {
    id: 'id',
    budgetVersionId: 'budgetVersionId',
    targetType: 'targetType',
    month: 'month',
    value: 'value',
    unit: 'unit',
    sourceSheetRef: 'sourceSheetRef',
    createdAt: 'createdAt'
};
exports.EncumbranceScalarFieldEnum = {
    id: 'id',
    budgetLineId: 'budgetLineId',
    description: 'description',
    amountKobo: 'amountKobo',
    status: 'status',
    requestedByUserId: 'requestedByUserId',
    createdAt: 'createdAt'
};
exports.VendorScalarFieldEnum = {
    id: 'id',
    vendorCode: 'vendorCode',
    legalName: 'legalName',
    rcNumber: 'rcNumber',
    tin: 'tin',
    bankName: 'bankName',
    bankAccountNumber: 'bankAccountNumber',
    bankAccountName: 'bankAccountName',
    status: 'status',
    performanceRating: 'performanceRating',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.PurchaseOrderScalarFieldEnum = {
    id: 'id',
    poNumber: 'poNumber',
    vendorId: 'vendorId',
    encumbranceId: 'encumbranceId',
    ledgerEntityCode: 'ledgerEntityCode',
    description: 'description',
    totalAmountKobo: 'totalAmountKobo',
    status: 'status',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    issuedAt: 'issuedAt'
};
exports.PurchaseOrderLineScalarFieldEnum = {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    description: 'description',
    quantity: 'quantity',
    unitPriceKobo: 'unitPriceKobo',
    lineAmountKobo: 'lineAmountKobo'
};
exports.GoodsReceiptScalarFieldEnum = {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    receivedAmountKobo: 'receivedAmountKobo',
    receivedByUserId: 'receivedByUserId',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.VendorInvoiceScalarFieldEnum = {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    vendorId: 'vendorId',
    invoiceNumber: 'invoiceNumber',
    invoiceAmountKobo: 'invoiceAmountKobo',
    invoiceDate: 'invoiceDate',
    status: 'status',
    matchVarianceNote: 'matchVarianceNote',
    matchedAt: 'matchedAt',
    journalEntryId: 'journalEntryId',
    paidJournalEntryId: 'paidJournalEntryId',
    vatKobo: 'vatKobo',
    recognizedVatRateVersionId: 'recognizedVatRateVersionId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.PaymentBatchScalarFieldEnum = {
    id: 'id',
    batchNumber: 'batchNumber',
    ledgerEntityCode: 'ledgerEntityCode',
    totalAmountKobo: 'totalAmountKobo',
    status: 'status',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    paidAt: 'paidAt',
    journalEntryId: 'journalEntryId',
    workflowInstanceId: 'workflowInstanceId'
};
exports.PaymentBatchLineScalarFieldEnum = {
    id: 'id',
    paymentBatchId: 'paymentBatchId',
    vendorInvoiceId: 'vendorInvoiceId',
    amountKobo: 'amountKobo'
};
exports.AssetRegisterEntryScalarFieldEnum = {
    id: 'id',
    assetCode: 'assetCode',
    description: 'description',
    purchaseOrderId: 'purchaseOrderId',
    ledgerEntityCode: 'ledgerEntityCode',
    costKobo: 'costKobo',
    acquisitionDate: 'acquisitionDate',
    usefulLifeMonths: 'usefulLifeMonths',
    accumulatedDepreciationKobo: 'accumulatedDepreciationKobo',
    status: 'status',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    disposedAt: 'disposedAt'
};
exports.AssetDepreciationRunScalarFieldEnum = {
    id: 'id',
    assetRegisterEntryId: 'assetRegisterEntryId',
    periodMonth: 'periodMonth',
    periodYear: 'periodYear',
    depreciationAmountKobo: 'depreciationAmountKobo',
    journalEntryId: 'journalEntryId',
    createdAt: 'createdAt'
};
exports.ProcurementMatchToleranceConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    tolerancePct: 'tolerancePct',
    createdAt: 'createdAt'
};
exports.PettyCashFloatScalarFieldEnum = {
    id: 'id',
    floatCode: 'floatCode',
    custodianUserId: 'custodianUserId',
    officeLabel: 'officeLabel',
    ledgerEntityCode: 'ledgerEntityCode',
    floatCeilingKobo: 'floatCeilingKobo',
    singleVoucherCapKobo: 'singleVoucherCapKobo',
    status: 'status',
    establishedByUserId: 'establishedByUserId',
    createdAt: 'createdAt'
};
exports.PettyCashVoucherScalarFieldEnum = {
    id: 'id',
    floatId: 'floatId',
    voucherDate: 'voucherDate',
    payee: 'payee',
    expenseAccountCode: 'expenseAccountCode',
    amountKobo: 'amountKobo',
    status: 'status',
    claimId: 'claimId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.PettyCashReplenishmentClaimScalarFieldEnum = {
    id: 'id',
    floatId: 'floatId',
    totalVoucherKobo: 'totalVoucherKobo',
    status: 'status',
    initiatedByUserId: 'initiatedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    disbursedByUserId: 'disbursedByUserId',
    disbursedAt: 'disbursedAt',
    rejectionNotes: 'rejectionNotes',
    createdAt: 'createdAt'
};
exports.PettyCashSpotCheckScalarFieldEnum = {
    id: 'id',
    floatId: 'floatId',
    countedKobo: 'countedKobo',
    expectedKobo: 'expectedKobo',
    varianceKobo: 'varianceKobo',
    notes: 'notes',
    checkedByUserId: 'checkedByUserId',
    checkedAt: 'checkedAt'
};
exports.BudgetVarianceRagThresholdScalarFieldEnum = {
    id: 'id',
    version: 'version',
    amberPct: 'amberPct',
    redPct: 'redPct',
    effectiveFrom: 'effectiveFrom'
};
exports.NdMandateAccountScalarFieldEnum = {
    id: 'id',
    mandateRef: 'mandateRef',
    ledgerEntityCode: 'ledgerEntityCode',
    participantType: 'participantType',
    investorId: 'investorId',
    participantLedgerEntityCode: 'participantLedgerEntityCode',
    sharingMode: 'sharingMode',
    investorRatio: 'investorRatio',
    mudaribRatio: 'mudaribRatio',
    wakalahFeeRatePa: 'wakalahFeeRatePa',
    surplusTreatment: 'surplusTreatment',
    sharedRatio: 'sharedRatio',
    targetReturnPct: 'targetReturnPct',
    status: 'status',
    startDate: 'startDate',
    maturityDate: 'maturityDate',
    committedCapitalKobo: 'committedCapitalKobo',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    activationWorkflowInstanceId: 'activationWorkflowInstanceId',
    profitPaymentInterval: 'profitPaymentInterval'
};
exports.NdMandateProvisionalAccrualScalarFieldEnum = {
    id: 'id',
    ndMandateAccountId: 'ndMandateAccountId',
    accrualDate: 'accrualDate',
    capitalKobo: 'capitalKobo',
    expectedRatePct: 'expectedRatePct',
    provisionalAmountKobo: 'provisionalAmountKobo',
    status: 'status',
    trueUpJournalRef: 'trueUpJournalRef',
    reversedAt: 'reversedAt',
    createdAt: 'createdAt'
};
exports.SsbMemberScalarFieldEnum = {
    id: 'id',
    memberRef: 'memberRef',
    name: 'name',
    credentials: 'credentials',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.SsbResolutionScalarFieldEnum = {
    id: 'id',
    resolutionRef: 'resolutionRef',
    resolutionDate: 'resolutionDate',
    proposedByMemberId: 'proposedByMemberId',
    summary: 'summary',
    standardApplied: 'standardApplied',
    voteResult: 'voteResult',
    effectiveDate: 'effectiveDate',
    status: 'status',
    documentRef: 'documentRef',
    notes: 'notes',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.PurificationRecordScalarFieldEnum = {
    id: 'id',
    purificationRef: 'purificationRef',
    identifiedDate: 'identifiedDate',
    sourceDescription: 'sourceDescription',
    amountKobo: 'amountKobo',
    charityRecipient: 'charityRecipient',
    status: 'status',
    documentRef: 'documentRef',
    notes: 'notes',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.ComplianceCheckScalarFieldEnum = {
    id: 'id',
    checkCode: 'checkCode',
    description: 'description',
    standardApplied: 'standardApplied',
    result: 'result',
    frequency: 'frequency',
    reviewedByMemberId: 'reviewedByMemberId',
    documentRef: 'documentRef',
    notes: 'notes',
    migrationSourceRef: 'migrationSourceRef',
    createdAt: 'createdAt'
};
exports.KriDefinitionScalarFieldEnum = {
    code: 'code',
    name: 'name',
    category: 'category',
    direction: 'direction',
    isZeroTolerance: 'isZeroTolerance',
    riskAppetiteCategoryRef: 'riskAppetiteCategoryRef',
    computeStatus: 'computeStatus',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.KriReadingScalarFieldEnum = {
    id: 'id',
    kriCode: 'kriCode',
    ledgerEntityCode: 'ledgerEntityCode',
    isAggregate: 'isAggregate',
    readingDate: 'readingDate',
    value: 'value',
    ragStatus: 'ragStatus',
    matrixVersionId: 'matrixVersionId',
    detail: 'detail',
    computedAt: 'computedAt'
};
exports.KriEscalationScalarFieldEnum = {
    id: 'id',
    kriReadingId: 'kriReadingId',
    kriCode: 'kriCode',
    ledgerEntityCode: 'ledgerEntityCode',
    ragStatus: 'ragStatus',
    ownerLabel: 'ownerLabel',
    escalatedAt: 'escalatedAt',
    notifiedAt: 'notifiedAt'
};
exports.KriEngineConfigScalarFieldEnum = {
    id: 'id',
    provisionalAccrualAgingDays: 'provisionalAccrualAgingDays',
    updatedAt: 'updatedAt'
};
exports.RegulatoryCapitalRequirementScalarFieldEnum = {
    id: 'id',
    requirementKobo: 'requirementKobo',
    effectiveFrom: 'effectiveFrom',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.StressScenarioConfigScalarFieldEnum = {
    id: 'id',
    modelType: 'modelType',
    scenarioCode: 'scenarioCode',
    scenarioLabel: 'scenarioLabel',
    version: 'version',
    status: 'status',
    parameters: 'parameters',
    boardResolutionRef: 'boardResolutionRef',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.StressTestRunScalarFieldEnum = {
    id: 'id',
    modelType: 'modelType',
    runMode: 'runMode',
    ledgerEntityCode: 'ledgerEntityCode',
    scenarioConfigId: 'scenarioConfigId',
    inputs: 'inputs',
    outputs: 'outputs',
    ranByUserId: 'ranByUserId',
    ranAt: 'ranAt',
    isApprovedBaseline: 'isApprovedBaseline',
    approvalWorkflowInstanceId: 'approvalWorkflowInstanceId'
};
exports.DashboardManualStatusScalarFieldEnum = {
    id: 'id',
    regulatoryFilingsStatus: 'regulatoryFilingsStatus',
    shariahSsbComplianceStatus: 'shariahSsbComplianceStatus',
    operationalRiskStatus: 'operationalRiskStatus',
    kycComplianceStatus: 'kycComplianceStatus',
    amlStatus: 'amlStatus',
    reputationalRiskScore: 'reputationalRiskScore',
    reputationalRagStatus: 'reputationalRagStatus',
    secInspectionReadinessStatus: 'secInspectionReadinessStatus',
    growthTargetAumKobo: 'growthTargetAumKobo',
    updatedAt: 'updatedAt',
    updatedByUserId: 'updatedByUserId'
};
exports.MetricDefinitionScalarFieldEnum = {
    id: 'id',
    metricCode: 'metricCode',
    version: 'version',
    displayLabel: 'displayLabel',
    screenCode: 'screenCode',
    businessMeaning: 'businessMeaning',
    sourceTablesAndJoins: 'sourceTablesAndJoins',
    inclusionExclusionRules: 'inclusionExclusionRules',
    ownerRoleCode: 'ownerRoleCode',
    ledgerReconcilable: 'ledgerReconcilable',
    status: 'status',
    supersededByMetricId: 'supersededByMetricId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    requiredFunctionCode: 'requiredFunctionCode',
    composerResolverKey: 'composerResolverKey'
};
exports.SavedDashboardScalarFieldEnum = {
    id: 'id',
    name: 'name',
    scope: 'scope',
    ownerUserId: 'ownerUserId',
    orgUnitCode: 'orgUnitCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DashboardTileScalarFieldEnum = {
    id: 'id',
    dashboardId: 'dashboardId',
    metricCode: 'metricCode',
    presentation: 'presentation',
    position: 'position',
    createdAt: 'createdAt'
};
exports.LedgerReconciliationConfigScalarFieldEnum = {
    id: 'id',
    metricCode: 'metricCode',
    version: 'version',
    ledgerEntityCode: 'ledgerEntityCode',
    glAccountCodes: 'glAccountCodes',
    toleranceKobo: 'toleranceKobo',
    status: 'status',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.EnterpriseRiskProfileEntryScalarFieldEnum = {
    id: 'id',
    riskCategory: 'riskCategory',
    inherentScore: 'inherentScore',
    sortOrder: 'sortOrder',
    updatedAt: 'updatedAt'
};
exports.DashboardActionItemScalarFieldEnum = {
    id: 'id',
    audience: 'audience',
    title: 'title',
    detail: 'detail',
    owner: 'owner',
    dueLabel: 'dueLabel',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.TemplateCellMapScalarFieldEnum = {
    id: 'id',
    regulatorTemplateId: 'regulatorTemplateId',
    sheetName: 'sheetName',
    cellAddress: 'cellAddress',
    label: 'label',
    cellClass: 'cellClass',
    sourceKey: 'sourceKey',
    staticValue: 'staticValue',
    mapVersion: 'mapVersion',
    createdAt: 'createdAt'
};
exports.TemplateFieldMapScalarFieldEnum = {
    id: 'id',
    regulatorTemplateId: 'regulatorTemplateId',
    page: 'page',
    fieldName: 'fieldName',
    xPt: 'xPt',
    yPt: 'yPt',
    fontSizePt: 'fontSizePt',
    label: 'label',
    cellClass: 'cellClass',
    sourceKey: 'sourceKey',
    staticValue: 'staticValue',
    mapVersion: 'mapVersion',
    createdAt: 'createdAt'
};
exports.RegulatoryFilingCalendarScalarFieldEnum = {
    id: 'id',
    regulatorTemplateId: 'regulatorTemplateId',
    ledgerEntityCode: 'ledgerEntityCode',
    frequency: 'frequency',
    deadlineDayOfMonth: 'deadlineDayOfMonth',
    deadlineRule: 'deadlineRule',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.RegulatoryFilingRunScalarFieldEnum = {
    id: 'id',
    regulatorTemplateId: 'regulatorTemplateId',
    ledgerEntityCode: 'ledgerEntityCode',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    status: 'status',
    figures: 'figures',
    preparedByUserId: 'preparedByUserId',
    certifiedByUserId: 'certifiedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    secPortalAckRef: 'secPortalAckRef',
    submittedAt: 'submittedAt',
    generatedAt: 'generatedAt'
};
exports.AssetClassRegistryScalarFieldEnum = {
    code: 'code',
    label: 'label',
    custodyDefault: 'custodyDefault',
    shariahScreeningRule: 'shariahScreeningRule',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.WmClientTierConfigScalarFieldEnum = {
    id: 'id',
    tier: 'tier',
    minTotalWealthUsd: 'minTotalWealthUsd',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.WmFxConfigScalarFieldEnum = {
    id: 'id',
    nairaPerUsd: 'nairaPerUsd',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.WmClientProfileScalarFieldEnum = {
    investorId: 'investorId',
    currentTier: 'currentTier',
    tierUpdatedAt: 'tierUpdatedAt',
    advisorUserId: 'advisorUserId',
    onboardedAt: 'onboardedAt',
    onboardedByUserId: 'onboardedByUserId',
    portalProvisionedAt: 'portalProvisionedAt'
};
exports.WmTierMigrationLogScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    fromTier: 'fromTier',
    toTier: 'toTier',
    totalWealthKobo: 'totalWealthKobo',
    migratedAt: 'migratedAt'
};
exports.WmClientAssetScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    assetClassCode: 'assetClassCode',
    description: 'description',
    quantity: 'quantity',
    declaredValueKobo: 'declaredValueKobo',
    valuationDate: 'valuationDate',
    custodyFlag: 'custodyFlag',
    evidenceDocumentId: 'evidenceDocumentId',
    verificationTag: 'verificationTag',
    verifiedByUserId: 'verifiedByUserId',
    verifiedAt: 'verifiedAt',
    shariahScreenTag: 'shariahScreenTag',
    declaredByUserId: 'declaredByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt',
    maturityDate: 'maturityDate',
    tenorMonths: 'tenorMonths',
    scheduledProfitTakingDates: 'scheduledProfitTakingDates',
    targetReturnPct: 'targetReturnPct'
};
exports.WmClientAssetValuationScalarFieldEnum = {
    id: 'id',
    wmClientAssetId: 'wmClientAssetId',
    valuationDate: 'valuationDate',
    valueKobo: 'valueKobo',
    recordedByUserId: 'recordedByUserId',
    createdAt: 'createdAt'
};
exports.WmHoldingActionRequestScalarFieldEnum = {
    id: 'id',
    wmClientAssetId: 'wmClientAssetId',
    requestType: 'requestType',
    requestedAmountKobo: 'requestedAmountKobo',
    notes: 'notes',
    status: 'status',
    actionedByUserId: 'actionedByUserId',
    actionedAt: 'actionedAt',
    createdAt: 'createdAt'
};
exports.WmAllocationPolicyScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    version: 'version',
    targetAllocations: 'targetAllocations',
    riskBand: 'riskBand',
    isActive: 'isActive',
    clientAcknowledgedAt: 'clientAcknowledgedAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.WmRiskProfileScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    version: 'version',
    questionnaireResponses: 'questionnaireResponses',
    riskBand: 'riskBand',
    isActive: 'isActive',
    clientAcknowledgedAt: 'clientAcknowledgedAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.WmGrowthPlanScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    version: 'version',
    horizon: 'horizon',
    milestones: 'milestones',
    targetGlidePath: 'targetGlidePath',
    reviewSchedule: 'reviewSchedule',
    isActive: 'isActive',
    clientAcknowledgedAt: 'clientAcknowledgedAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.WmAdvisoryRecordScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    recommendation: 'recommendation',
    rationale: 'rationale',
    riskNotes: 'riskNotes',
    shariahNote: 'shariahNote',
    advisorUserId: 'advisorUserId',
    clientResponse: 'clientResponse',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt'
};
exports.WmStressScenarioConfigScalarFieldEnum = {
    id: 'id',
    scenarioCode: 'scenarioCode',
    label: 'label',
    shockPctByAssetClass: 'shockPctByAssetClass',
    version: 'version',
    status: 'status',
    createdAt: 'createdAt'
};
exports.WmRiskAssessmentRunScalarFieldEnum = {
    id: 'id',
    wmClientProfileId: 'wmClientProfileId',
    scenarioConfigId: 'scenarioConfigId',
    combinedBookSnapshot: 'combinedBookSnapshot',
    preShockValueKobo: 'preShockValueKobo',
    postShockValueKobo: 'postShockValueKobo',
    status: 'status',
    ranByUserId: 'ranByUserId',
    reviewedByUserId: 'reviewedByUserId',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt'
};
exports.ZakatNisabConfigScalarFieldEnum = {
    id: 'id',
    nisabGoldGrams: 'nisabGoldGrams',
    goldPricePerGramKobo: 'goldPricePerGramKobo',
    approvedByUserId: 'approvedByUserId',
    approvedAt: 'approvedAt',
    updatedAt: 'updatedAt'
};
exports.ZakatClientSubscriptionScalarFieldEnum = {
    investorId: 'investorId',
    isActive: 'isActive',
    rateBasisElection: 'rateBasisElection',
    zakatAnniversaryGregorian: 'zakatAnniversaryGregorian',
    zakatAnniversaryHijri: 'zakatAnniversaryHijri',
    activatedByUserId: 'activatedByUserId',
    activatedAt: 'activatedAt',
    deactivatedByUserId: 'deactivatedByUserId',
    deactivatedAt: 'deactivatedAt'
};
exports.ZakatSubscriptionRequestScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    status: 'status',
    consentAcknowledgedAt: 'consentAcknowledgedAt',
    requestedAt: 'requestedAt',
    approvedByUserId: 'approvedByUserId',
    approvedAt: 'approvedAt'
};
exports.ZakatAssessmentRunScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    assessmentDateGregorian: 'assessmentDateGregorian',
    assessmentDateHijri: 'assessmentDateHijri',
    rateBasis: 'rateBasis',
    status: 'status',
    oneSeventeenBalancesSnapshot: 'oneSeventeenBalancesSnapshot',
    netZakatableKobo: 'netZakatableKobo',
    zakatDueKobo: 'zakatDueKobo',
    workflowInstanceId: 'workflowInstanceId',
    certifiedByUserId: 'certifiedByUserId',
    certifiedAt: 'certifiedAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.ZakatDeclaredItemScalarFieldEnum = {
    id: 'id',
    zakatAssessmentRunId: 'zakatAssessmentRunId',
    scheduleType: 'scheduleType',
    description: 'description',
    amountKobo: 'amountKobo',
    zakatability: 'zakatability',
    custodyFlag: 'custodyFlag',
    verificationTag: 'verificationTag',
    declarationSource: 'declarationSource',
    declaredByUserId: 'declaredByUserId',
    verifiedByUserId: 'verifiedByUserId',
    verifiedAt: 'verifiedAt',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.PortalClientUserScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    passwordHash: 'passwordHash',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    status: 'status',
    firstLoginAt: 'firstLoginAt',
    createdAt: 'createdAt'
};
exports.PortalClientSessionScalarFieldEnum = {
    id: 'id',
    portalUserId: 'portalUserId',
    tokenHash: 'tokenHash',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress'
};
exports.RoleScorecardOverrideScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    kpiDefinitionId: 'kpiDefinitionId',
    overrideWeightPct: 'overrideWeightPct',
    reason: 'reason',
    status: 'status',
    createdByUserId: 'createdByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.ActivityReportScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    kpiDefinitionId: 'kpiDefinitionId',
    activityText: 'activityText',
    workflowInstanceRef: 'workflowInstanceRef',
    taskRef: 'taskRef',
    loggedAt: 'loggedAt'
};
exports.AppraisalCycleScalarFieldEnum = {
    id: 'id',
    cycleType: 'cycleType',
    orgUnitCode: 'orgUnitCode',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    status: 'status',
    createdAt: 'createdAt'
};
exports.EmployeeScoreSubmissionScalarFieldEnum = {
    id: 'id',
    appraisalCycleId: 'appraisalCycleId',
    employeeId: 'employeeId',
    status: 'status',
    workflowInstanceId: 'workflowInstanceId',
    submittedAt: 'submittedAt'
};
exports.EmployeeKpiScoreScalarFieldEnum = {
    id: 'id',
    employeeScoreSubmissionId: 'employeeScoreSubmissionId',
    kpiDefinitionId: 'kpiDefinitionId',
    selfScorePct: 'selfScorePct',
    validatedScorePct: 'validatedScorePct',
    evidenceRef: 'evidenceRef',
    createdAt: 'createdAt'
};
exports.IncentiveBandConfigScalarFieldEnum = {
    id: 'id',
    minScorePct: 'minScorePct',
    payoutPct: 'payoutPct',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.PmsGateSeverityConfigScalarFieldEnum = {
    id: 'id',
    severity: 'severity',
    outcome: 'outcome',
    cappedPct: 'cappedPct',
    createdAt: 'createdAt'
};
exports.BehaviouralGateCheckScalarFieldEnum = {
    id: 'id',
    appraisalCycleId: 'appraisalCycleId',
    employeeId: 'employeeId',
    attendanceOk: 'attendanceOk',
    ethicalConductOk: 'ethicalConductOk',
    trendsViolation: 'trendsViolation',
    disciplinaryNote: 'disciplinaryNote',
    evidenceRef: 'evidenceRef',
    outcome: 'outcome',
    cappedPct: 'cappedPct',
    assessedByUserId: 'assessedByUserId',
    createdAt: 'createdAt'
};
exports.EmployeeIncentiveResultScalarFieldEnum = {
    id: 'id',
    appraisalCycleId: 'appraisalCycleId',
    employeeId: 'employeeId',
    totalEmolumentKobo: 'totalEmolumentKobo',
    incentivePoolKobo: 'incentivePoolKobo',
    overallScorePct: 'overallScorePct',
    bandPayoutPct: 'bandPayoutPct',
    gateOutcome: 'gateOutcome',
    preGateIncentiveKobo: 'preGateIncentiveKobo',
    finalIncentiveKobo: 'finalIncentiveKobo',
    classAllocationKobo: 'classAllocationKobo',
    computedAt: 'computedAt'
};
exports.TaxRuleConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    consolidatedReliefFlatKobo: 'consolidatedReliefFlatKobo',
    consolidatedReliefPctOfGross: 'consolidatedReliefPctOfGross',
    bands: 'bands',
    pensionEmployeePct: 'pensionEmployeePct',
    nhfPct: 'nhfPct',
    status: 'status',
    validatedByUserId: 'validatedByUserId',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.PayrollRunScalarFieldEnum = {
    id: 'id',
    periodMonth: 'periodMonth',
    periodYear: 'periodYear',
    ledgerEntityCode: 'ledgerEntityCode',
    status: 'status',
    taxRuleConfigId: 'taxRuleConfigId',
    journalEntryId: 'journalEntryId',
    workflowInstanceId: 'workflowInstanceId',
    generatedByUserId: 'generatedByUserId',
    approvedByUserId: 'approvedByUserId',
    generatedAt: 'generatedAt'
};
exports.PayrollRunLineScalarFieldEnum = {
    id: 'id',
    payrollRunId: 'payrollRunId',
    employeeId: 'employeeId',
    grossKobo: 'grossKobo',
    payeKobo: 'payeKobo',
    pensionKobo: 'pensionKobo',
    nhfKobo: 'nhfKobo',
    incentiveKobo: 'incentiveKobo',
    netPayKobo: 'netPayKobo'
};
exports.WelfareSchemeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.RewardTypeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.TalentRecommendationScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    recommendationType: 'recommendationType',
    welfareSchemeId: 'welfareSchemeId',
    rewardTypeId: 'rewardTypeId',
    appraisalCycleId: 'appraisalCycleId',
    justification: 'justification',
    status: 'status',
    recommendedByUserId: 'recommendedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.LeadScalarFieldEnum = {
    id: 'id',
    fullNameOrCompany: 'fullNameOrCompany',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    source: 'source',
    status: 'status',
    convertedInvestorId: 'convertedInvestorId',
    notes: 'notes',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.ClientCommunicationScalarFieldEnum = {
    id: 'id',
    leadId: 'leadId',
    investorId: 'investorId',
    counterpartyId: 'counterpartyId',
    channel: 'channel',
    direction: 'direction',
    subject: 'subject',
    summary: 'summary',
    routedToFunctionCode: 'routedToFunctionCode',
    loggedByUserId: 'loggedByUserId',
    occurredAt: 'occurredAt',
    createdAt: 'createdAt'
};
exports.InvestorOnboardingConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    expressDepositCapKobo: 'expressDepositCapKobo',
    stage2CompletionDeadlineDays: 'stage2CompletionDeadlineDays',
    boardResolutionRef: 'boardResolutionRef',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.InvestorOnboardingCaseScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    sanctionsScreenResult: 'sanctionsScreenResult',
    sanctionsScreenedAt: 'sanctionsScreenedAt',
    pepSanctionsGrid: 'pepSanctionsGrid',
    riskMetricGrades: 'riskMetricGrades',
    accumulativeRiskProfile: 'accumulativeRiskProfile',
    eddRequired: 'eddRequired',
    complianceObservations: 'complianceObservations',
    complianceAssessedByUserId: 'complianceAssessedByUserId',
    complianceAssessedAt: 'complianceAssessedAt',
    ic1Checklist: 'ic1Checklist',
    ic1Notes: 'ic1Notes',
    eddChecklist: 'eddChecklist',
    eddRecommendation: 'eddRecommendation',
    eddConditionsOrBasis: 'eddConditionsOrBasis',
    periodicReviewFrequency: 'periodicReviewFrequency',
    lastPeriodicReviewAt: 'lastPeriodicReviewAt',
    riskNotes: 'riskNotes',
    mdDecision: 'mdDecision',
    mdConditionsOrReason: 'mdConditionsOrReason',
    ic2Checklist: 'ic2Checklist',
    ic2Outcome: 'ic2Outcome',
    ic2Notes: 'ic2Notes',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentInflowLogScalarFieldEnum = {
    id: 'id',
    txnId: 'txnId',
    payerName: 'payerName',
    payerBankName: 'payerBankName',
    payerAccountNumber: 'payerAccountNumber',
    declaredRelationship: 'declaredRelationship',
    beneficiaryInvestorId: 'beneficiaryInvestorId',
    status: 'status',
    complianceFlagged: 'complianceFlagged',
    declaredByUserId: 'declaredByUserId',
    createdAt: 'createdAt'
};
exports.PublicIntakeSubmissionScalarFieldEnum = {
    id: 'id',
    intakeType: 'intakeType',
    payload: 'payload',
    status: 'status',
    submittedIp: 'submittedIp',
    rejectionReason: 'rejectionReason',
    promotedByUserId: 'promotedByUserId',
    promotedAt: 'promotedAt',
    resultingInvestorId: 'resultingInvestorId',
    resultingCounterpartyId: 'resultingCounterpartyId',
    createdAt: 'createdAt'
};
exports.PrivacyNoticeConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    noticeText: 'noticeText',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.PrivacyNoticeAcknowledgmentScalarFieldEnum = {
    id: 'id',
    noticeConfigId: 'noticeConfigId',
    context: 'context',
    investorId: 'investorId',
    counterpartyId: 'counterpartyId',
    publicIntakeSubmissionId: 'publicIntakeSubmissionId',
    acknowledgedAt: 'acknowledgedAt',
    ipAddress: 'ipAddress'
};
exports.MarketingResourceScalarFieldEnum = {
    id: 'id',
    title: 'title',
    resourceType: 'resourceType',
    fileReference: 'fileReference',
    version: 'version',
    status: 'status',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.MarketingSubscriberScalarFieldEnum = {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    segments: 'segments',
    subscribed: 'subscribed',
    unsubscribeToken: 'unsubscribeToken',
    subscribedAt: 'subscribedAt',
    unsubscribedAt: 'unsubscribedAt',
    consentedAt: 'consentedAt',
    consentNoticeVersion: 'consentNoticeVersion'
};
exports.MarketingSendScalarFieldEnum = {
    id: 'id',
    resourceId: 'resourceId',
    subject: 'subject',
    body: 'body',
    targetSegments: 'targetSegments',
    status: 'status',
    initiatedByUserId: 'initiatedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    sentAt: 'sentAt',
    recipientCount: 'recipientCount',
    createdAt: 'createdAt'
};
exports.PortalCounterpartyUserScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    passwordHash: 'passwordHash',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    status: 'status',
    firstLoginAt: 'firstLoginAt',
    createdAt: 'createdAt'
};
exports.PortalCounterpartySessionScalarFieldEnum = {
    id: 'id',
    portalUserId: 'portalUserId',
    tokenHash: 'tokenHash',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress'
};
exports.CounterpartyRestructureRequestScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    obligationId: 'obligationId',
    requestType: 'requestType',
    extensionMonths: 'extensionMonths',
    reason: 'reason',
    status: 'status',
    decidedByUserId: 'decidedByUserId',
    decisionNotes: 'decisionNotes',
    decidedAt: 'decidedAt',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.CounterpartyFacilityApplicationScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    requestedAmountKobo: 'requestedAmountKobo',
    purpose: 'purpose',
    status: 'status',
    workflowInstanceId: 'workflowInstanceId',
    disbursedByUserId: 'disbursedByUserId',
    disbursedAt: 'disbursedAt',
    targetedReturnPct: 'targetedReturnPct',
    termsRecordedByUserId: 'termsRecordedByUserId',
    termsRecordedAt: 'termsRecordedAt',
    createdAt: 'createdAt'
};
exports.InvestmentMemoScalarFieldEnum = {
    id: 'id',
    facilityApplicationId: 'facilityApplicationId',
    version: 'version',
    dealSummary: 'dealSummary',
    structureType: 'structureType',
    amountKobo: 'amountKobo',
    tenorMonths: 'tenorMonths',
    targetReturnPct: 'targetReturnPct',
    riskNotes: 'riskNotes',
    shariahNotes: 'shariahNotes',
    collateralNotes: 'collateralNotes',
    status: 'status',
    workflowInstanceId: 'workflowInstanceId',
    icResolutionRef: 'icResolutionRef',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.InvestmentMemoThresholdConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    thresholdKobo: 'thresholdKobo',
    status: 'status',
    workflowInstanceId: 'workflowInstanceId',
    createdByUserId: 'createdByUserId',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.CounterpartyRepaymentObligationScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    facilityApplicationId: 'facilityApplicationId',
    dueDate: 'dueDate',
    amountKobo: 'amountKobo',
    status: 'status',
    paidAt: 'paidAt',
    paidByUserId: 'paidByUserId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.PaymentReminderLadderConfigScalarFieldEnum = {
    id: 'id',
    dayOffset: 'dayOffset',
    channels: 'channels',
    notifyManagement: 'notifyManagement',
    createsFollowUpCallTask: 'createsFollowUpCallTask',
    isPostGraceDefault: 'isPostGraceDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentReminderNoticeLogScalarFieldEnum = {
    id: 'id',
    obligationId: 'obligationId',
    dayOffset: 'dayOffset',
    clientCommunicationId: 'clientCommunicationId',
    sentAt: 'sentAt'
};
exports.PaymentReminderDispatchQueueScalarFieldEnum = {
    id: 'id',
    obligationId: 'obligationId',
    dayOffset: 'dayOffset',
    channels: 'channels',
    status: 'status',
    generatedAt: 'generatedAt',
    decidedByUserId: 'decidedByUserId',
    decidedAt: 'decidedAt'
};
exports.ComplaintScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    counterpartyId: 'counterpartyId',
    category: 'category',
    description: 'description',
    status: 'status',
    receivedAt: 'receivedAt',
    slaDueAt: 'slaDueAt',
    ownerUserId: 'ownerUserId',
    escalatedAt: 'escalatedAt',
    escalatedToUserId: 'escalatedToUserId',
    resolvedAt: 'resolvedAt',
    resolutionNotes: 'resolutionNotes',
    loggedByUserId: 'loggedByUserId',
    isDsr: 'isDsr',
    dsrCategory: 'dsrCategory',
    dsrLegalBasis: 'dsrLegalBasis',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DsrResponseConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    responseDays: 'responseDays',
    boardResolutionRef: 'boardResolutionRef',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.RetentionScheduleEntryScalarFieldEnum = {
    id: 'id',
    dataClass: 'dataClass',
    description: 'description',
    retentionPeriodMonths: 'retentionPeriodMonths',
    statutoryBasis: 'statutoryBasis',
    disposalTreatment: 'disposalTreatment',
    status: 'status',
    confirmedByUserId: 'confirmedByUserId',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DataBreachRegisterEntryScalarFieldEnum = {
    id: 'id',
    discoveredAt: 'discoveredAt',
    discoveredByUserId: 'discoveredByUserId',
    description: 'description',
    affectedDataClasses: 'affectedDataClasses',
    estimatedAffectedSubjects: 'estimatedAffectedSubjects',
    severity: 'severity',
    likelyHighRisk: 'likelyHighRisk',
    assessmentNotes: 'assessmentNotes',
    assessedAt: 'assessedAt',
    assessedByUserId: 'assessedByUserId',
    ndpcNotificationDeadline: 'ndpcNotificationDeadline',
    ndpcNotifiedAt: 'ndpcNotifiedAt',
    ndpcNotifiedByUserId: 'ndpcNotifiedByUserId',
    dataSubjectsNotificationRequired: 'dataSubjectsNotificationRequired',
    dataSubjectsNotifiedAt: 'dataSubjectsNotifiedAt',
    status: 'status',
    postIncidentNotes: 'postIncidentNotes',
    closedAt: 'closedAt',
    closedByUserId: 'closedByUserId',
    createdAt: 'createdAt'
};
exports.ExecOversightSessionScalarFieldEnum = {
    id: 'id',
    principalType: 'principalType',
    investorId: 'investorId',
    counterpartyId: 'counterpartyId',
    viewedByUserId: 'viewedByUserId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    ipAddress: 'ipAddress'
};
exports.ExecOversightPolicyScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    grantedRoleCodes: 'grantedRoleCodes',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt'
};
exports.ComplaintSlaConfigScalarFieldEnum = {
    id: 'id',
    version: 'version',
    status: 'status',
    slaDays: 'slaDays',
    amberThresholdPct: 'amberThresholdPct',
    boardResolutionRef: 'boardResolutionRef',
    approvedByUserId: 'approvedByUserId',
    createdAt: 'createdAt'
};
exports.ScheduledJobRunScalarFieldEnum = {
    id: 'id',
    jobCode: 'jobCode',
    scheduledFor: 'scheduledFor',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    status: 'status',
    isCatchUp: 'isCatchUp',
    isManualRerun: 'isManualRerun',
    triggeredByUserId: 'triggeredByUserId',
    resultSummary: 'resultSummary',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
};
exports.BackupRunScalarFieldEnum = {
    id: 'id',
    dbName: 'dbName',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    status: 'status',
    dumpSizeBytes: 'dumpSizeBytes',
    offMachineCopyOk: 'offMachineCopyOk',
    errorMessage: 'errorMessage',
    reportedAt: 'reportedAt'
};
exports.ScheduledJobPauseStateScalarFieldEnum = {
    jobCode: 'jobCode',
    isPaused: 'isPaused',
    pausedAt: 'pausedAt',
    pausedByUserId: 'pausedByUserId',
    pauseReason: 'pauseReason',
    pauseWorkflowInstanceId: 'pauseWorkflowInstanceId',
    resumedAt: 'resumedAt',
    resumedByUserId: 'resumedByUserId',
    updatedAt: 'updatedAt'
};
exports.ScheduledJobRegistrationScalarFieldEnum = {
    jobCode: 'jobCode',
    isRetired: 'isRetired',
    registeredAt: 'registeredAt',
    registeredByUserId: 'registeredByUserId',
    retiredAt: 'retiredAt',
    retiredByUserId: 'retiredByUserId',
    retireReason: 'retireReason',
    retireWorkflowInstanceId: 'retireWorkflowInstanceId',
    updatedAt: 'updatedAt'
};
exports.AiCapabilityFlagScalarFieldEnum = {
    capabilityCode: 'capabilityCode',
    isEnabled: 'isEnabled',
    updatedByUserId: 'updatedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    updatedAt: 'updatedAt'
};
exports.AiKillSwitchScalarFieldEnum = {
    id: 'id',
    isActive: 'isActive',
    activatedByUserId: 'activatedByUserId',
    reason: 'reason',
    updatedAt: 'updatedAt'
};
exports.AiCapabilityContextRuleScalarFieldEnum = {
    capabilityCode: 'capabilityCode',
    contextType: 'contextType',
    requiredWorkflowTypeCode: 'requiredWorkflowTypeCode',
    requiredOrgUnitCode: 'requiredOrgUnitCode'
};
exports.AiTieredModelPolicyScalarFieldEnum = {
    capabilityCode: 'capabilityCode',
    tier: 'tier',
    providerName: 'providerName',
    modelName: 'modelName'
};
exports.AiProviderCredentialScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    providerName: 'providerName',
    apiKey: 'apiKey',
    baseUrl: 'baseUrl',
    isActive: 'isActive',
    configuredByUserId: 'configuredByUserId',
    pendingProviderName: 'pendingProviderName',
    pendingApiKey: 'pendingApiKey',
    pendingBaseUrl: 'pendingBaseUrl',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId',
    createdAt: 'createdAt'
};
exports.AiTokenBudgetScalarFieldEnum = {
    id: 'id',
    orgUnitCode: 'orgUnitCode',
    periodYear: 'periodYear',
    periodMonth: 'periodMonth',
    tokenLimit: 'tokenLimit',
    tokensConsumed: 'tokensConsumed'
};
exports.DataPointCatalogScalarFieldEnum = {
    code: 'code',
    label: 'label',
    description: 'description',
    requiredFunctionCode: 'requiredFunctionCode',
    requiredLevel: 'requiredLevel',
    sourceType: 'sourceType',
    sourceRef: 'sourceRef',
    containsPersonalData: 'containsPersonalData',
    status: 'status',
    createdAt: 'createdAt'
};
exports.AiInteractionLogScalarFieldEnum = {
    id: 'id',
    askingUserId: 'askingUserId',
    capabilityCode: 'capabilityCode',
    promptText: 'promptText',
    requestedDataPointCodes: 'requestedDataPointCodes',
    includedDataPointCodes: 'includedDataPointCodes',
    excludedDataPointCodes: 'excludedDataPointCodes',
    personalDataPointCodesIncluded: 'personalDataPointCodesIncluded',
    contextJson: 'contextJson',
    gate1FlagEnabled: 'gate1FlagEnabled',
    gate2Granted: 'gate2Granted',
    gate3ContextOk: 'gate3ContextOk',
    killSwitchActive: 'killSwitchActive',
    tokenBudgetOk: 'tokenBudgetOk',
    outcome: 'outcome',
    refusalReason: 'refusalReason',
    responseText: 'responseText',
    aiDrafted: 'aiDrafted',
    cacheHit: 'cacheHit',
    tokensCharged: 'tokensCharged',
    createdAt: 'createdAt'
};
exports.AiResponseCacheScalarFieldEnum = {
    cacheKey: 'cacheKey',
    capabilityCode: 'capabilityCode',
    responseText: 'responseText',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
};
exports.StakeholderReportRunScalarFieldEnum = {
    id: 'id',
    department: 'department',
    reportType: 'reportType',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    figures: 'figures',
    aiDraftedNarrative: 'aiDraftedNarrative',
    aiInteractionLogId: 'aiInteractionLogId',
    status: 'status',
    audienceClass: 'audienceClass',
    generatedByUserId: 'generatedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.StakeholderDistributionLogScalarFieldEnum = {
    id: 'id',
    stakeholderReportRunId: 'stakeholderReportRunId',
    audienceClass: 'audienceClass',
    distributedByUserId: 'distributedByUserId',
    signOffByUserId: 'signOffByUserId',
    recipientDescription: 'recipientDescription',
    distributedAt: 'distributedAt'
};
exports.BureauProviderScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    name: 'name',
    apiConfig: 'apiConfig',
    costPerPullKobo: 'costPerPullKobo',
    isActive: 'isActive',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.BureauPolicyConfigScalarFieldEnum = {
    id: 'id',
    minIntervalDays: 'minIntervalDays',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.BureauPullLogScalarFieldEnum = {
    id: 'id',
    counterpartyId: 'counterpartyId',
    providerId: 'providerId',
    pulledByUserId: 'pulledByUserId',
    costKobo: 'costKobo',
    resultSummary: 'resultSummary',
    pulledAt: 'pulledAt'
};
exports.PaymentGatewayProviderScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    name: 'name',
    webhookSecret: 'webhookSecret',
    apiConfig: 'apiConfig',
    isActive: 'isActive',
    configuredByUserId: 'configuredByUserId',
    updatedAt: 'updatedAt',
    pendingName: 'pendingName',
    pendingWebhookSecret: 'pendingWebhookSecret',
    pendingApiConfig: 'pendingApiConfig',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId'
};
exports.ProductCustodianAccountScalarFieldEnum = {
    id: 'id',
    providerId: 'providerId',
    productCode: 'productCode',
    custodianBankName: 'custodianBankName',
    custodianAccountNumber: 'custodianAccountNumber',
    referenceCodePrefix: 'referenceCodePrefix',
    isActive: 'isActive',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt',
    pendingCustodianBankName: 'pendingCustodianBankName',
    pendingCustodianAccountNumber: 'pendingCustodianAccountNumber',
    pendingReferenceCodePrefix: 'pendingReferenceCodePrefix',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId'
};
exports.PaymentGatewayInflowScalarFieldEnum = {
    id: 'id',
    providerId: 'providerId',
    custodianAccountId: 'custodianAccountId',
    gatewayEventRef: 'gatewayEventRef',
    amountKobo: 'amountKobo',
    settledAt: 'settledAt',
    narration: 'narration',
    rawPayload: 'rawPayload',
    status: 'status',
    matchedInvestorId: 'matchedInvestorId',
    matchedByUserId: 'matchedByUserId',
    matchedAt: 'matchedAt',
    subscriptionRequestId: 'subscriptionRequestId',
    reversalRedemptionRequestId: 'reversalRedemptionRequestId',
    rejectionReason: 'rejectionReason',
    lastAttemptError: 'lastAttemptError',
    createdAt: 'createdAt',
    pendingDecisionType: 'pendingDecisionType',
    pendingRejectionReason: 'pendingRejectionReason',
    decisionProposedByUserId: 'decisionProposedByUserId',
    decisionWorkflowInstanceId: 'decisionWorkflowInstanceId'
};
exports.PayoutCompilationBatchScalarFieldEnum = {
    id: 'id',
    batchNumber: 'batchNumber',
    periodLabel: 'periodLabel',
    status: 'status',
    totalGrossKobo: 'totalGrossKobo',
    totalWhtKobo: 'totalWhtKobo',
    totalNetKobo: 'totalNetKobo',
    compiledByUserId: 'compiledByUserId',
    workflowInstanceId: 'workflowInstanceId',
    bankInstructionLetterInstanceId: 'bankInstructionLetterInstanceId',
    paidAt: 'paidAt',
    paidByUserId: 'paidByUserId',
    createdAt: 'createdAt'
};
exports.PayoutCompilationLineScalarFieldEnum = {
    id: 'id',
    batchId: 'batchId',
    investorId: 'investorId',
    productAccountId: 'productAccountId',
    ndMandateAccountId: 'ndMandateAccountId',
    grossKobo: 'grossKobo',
    whtKobo: 'whtKobo',
    netKobo: 'netKobo',
    whtExempt: 'whtExempt',
    whtRateVersionId: 'whtRateVersionId'
};
exports.TaxRateVersionScalarFieldEnum = {
    id: 'id',
    taxType: 'taxType',
    version: 'version',
    rates: 'rates',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    proposedByUserId: 'proposedByUserId',
    approvedByUserId: 'approvedByUserId',
    workflowInstanceId: 'workflowInstanceId',
    createdAt: 'createdAt'
};
exports.InvestorTaxExemptionScalarFieldEnum = {
    id: 'id',
    investorId: 'investorId',
    taxType: 'taxType',
    reason: 'reason',
    grantedByUserId: 'grantedByUserId',
    createdAt: 'createdAt'
};
exports.FeeInvoiceScalarFieldEnum = {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    counterpartyId: 'counterpartyId',
    investorId: 'investorId',
    description: 'description',
    feeAmountKobo: 'feeAmountKobo',
    vatKobo: 'vatKobo',
    vatRateVersionId: 'vatRateVersionId',
    totalKobo: 'totalKobo',
    invoiceDate: 'invoiceDate',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
exports.StampDutyAssessmentScalarFieldEnum = {
    id: 'id',
    instrumentType: 'instrumentType',
    entityType: 'entityType',
    entityId: 'entityId',
    dutyKobo: 'dutyKobo',
    taxRateVersionId: 'taxRateVersionId',
    assessedByUserId: 'assessedByUserId',
    assessedAt: 'assessedAt'
};
exports.TaxGlMappingScalarFieldEnum = {
    id: 'id',
    taxType: 'taxType',
    payableAccountCode: 'payableAccountCode',
    configuredByUserId: 'configuredByUserId',
    configuredAt: 'configuredAt'
};
exports.TaxRemittanceDueDateConfigScalarFieldEnum = {
    id: 'id',
    taxType: 'taxType',
    authority: 'authority',
    dayOfMonthDue: 'dayOfMonthDue',
    isActive: 'isActive'
};
exports.TaxRemittanceBatchScalarFieldEnum = {
    id: 'id',
    taxType: 'taxType',
    authority: 'authority',
    periodLabel: 'periodLabel',
    totalKobo: 'totalKobo',
    status: 'status',
    dueDate: 'dueDate',
    workflowInstanceId: 'workflowInstanceId',
    letterInstanceId: 'letterInstanceId',
    remittedAt: 'remittedAt',
    remittedByUserId: 'remittedByUserId',
    createdAt: 'createdAt'
};
exports.ActivationStateScalarFieldEnum = {
    id: 'id',
    activatedAt: 'activatedAt',
    activatedByUserId: 'activatedByUserId'
};
exports.ActivationStepSkipScalarFieldEnum = {
    id: 'id',
    stepCode: 'stepCode',
    skippedAt: 'skippedAt',
    skippedByUserId: 'skippedByUserId'
};
exports.ScreeningListSourceScalarFieldEnum = {
    id: 'id',
    sourceCode: 'sourceCode',
    name: 'name',
    fileFormat: 'fileFormat',
    downloadUrl: 'downloadUrl',
    extraConfig: 'extraConfig',
    isActive: 'isActive',
    isParked: 'isParked',
    parkedReason: 'parkedReason',
    lastSuccessfulDownloadAt: 'lastSuccessfulDownloadAt',
    lastListVersion: 'lastListVersion',
    lastAttemptAt: 'lastAttemptAt',
    lastAttemptStatus: 'lastAttemptStatus',
    pendingDownloadUrl: 'pendingDownloadUrl',
    pendingExtraConfig: 'pendingExtraConfig',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId',
    configuredByUserId: 'configuredByUserId',
    updatedAt: 'updatedAt'
};
exports.ScreeningListEntryScalarFieldEnum = {
    id: 'id',
    sourceCode: 'sourceCode',
    sourceRecordId: 'sourceRecordId',
    primaryName: 'primaryName',
    aliases: 'aliases',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    entityType: 'entityType',
    programme: 'programme',
    listVersion: 'listVersion',
    rawDetail: 'rawDetail',
    createdAt: 'createdAt'
};
exports.ScreeningListDownloadLogScalarFieldEnum = {
    id: 'id',
    sourceCode: 'sourceCode',
    attemptedAt: 'attemptedAt',
    status: 'status',
    recordCount: 'recordCount',
    listVersion: 'listVersion',
    errorMessage: 'errorMessage'
};
exports.ScreeningGatewayConfigScalarFieldEnum = {
    id: 'id',
    activeProviderMode: 'activeProviderMode',
    matchThresholdScore: 'matchThresholdScore',
    redThresholdScore: 'redThresholdScore',
    freshnessMaxAgeDays: 'freshnessMaxAgeDays',
    updatedByUserId: 'updatedByUserId',
    updatedAt: 'updatedAt'
};
exports.CommercialScreeningProviderScalarFieldEnum = {
    id: 'id',
    providerSlot: 'providerSlot',
    name: 'name',
    apiKey: 'apiKey',
    isActive: 'isActive',
    configuredByUserId: 'configuredByUserId',
    pendingName: 'pendingName',
    pendingApiKey: 'pendingApiKey',
    pendingIsActive: 'pendingIsActive',
    pendingProposedByUserId: 'pendingProposedByUserId',
    configWorkflowInstanceId: 'configWorkflowInstanceId',
    updatedAt: 'updatedAt'
};
exports.ScreeningRunScalarFieldEnum = {
    id: 'id',
    subjectType: 'subjectType',
    subjectId: 'subjectId',
    subjectNameScreened: 'subjectNameScreened',
    providerMode: 'providerMode',
    screenedAt: 'screenedAt',
    thresholdUsed: 'thresholdUsed',
    listVersionsScreened: 'listVersionsScreened',
    outcome: 'outcome',
    initiatedByUserId: 'initiatedByUserId',
    fingerprint: 'fingerprint'
};
exports.ScreeningHitScalarFieldEnum = {
    id: 'id',
    screeningRunId: 'screeningRunId',
    listEntryId: 'listEntryId',
    matchedName: 'matchedName',
    matchScore: 'matchScore',
    status: 'status',
    pendingOutcome: 'pendingOutcome',
    pendingRationale: 'pendingRationale',
    decisionProposedByUserId: 'decisionProposedByUserId',
    decisionWorkflowInstanceId: 'decisionWorkflowInstanceId',
    adjudicatedOutcome: 'adjudicatedOutcome',
    adjudicatedRationale: 'adjudicatedRationale',
    adjudicatedByUserId: 'adjudicatedByUserId',
    adjudicatedAt: 'adjudicatedAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map