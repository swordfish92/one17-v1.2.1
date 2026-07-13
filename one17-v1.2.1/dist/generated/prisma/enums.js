"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.PersonalRecordChangeStatus = exports.MaritalStatus = exports.EmployeeLifecycleRequestStatus = exports.EmployeeStatus = exports.DepartmentHeadDesignationStatus = exports.GovernedItemStatus = exports.MeasurementBasis = exports.KpiClass = exports.PmsTier = exports.LetterInstanceStatus = exports.CertificateStatus = exports.CertificateProductClass = exports.DocumentTemplateType = exports.StagingRowStatus = exports.MigrationBatchStatus = exports.SubscriptionRequestStatus = exports.SubscriptionRequestType = exports.ProductAccountStatus = exports.CounterpartyWriteOffStatus = exports.CounterpartyAccountStatus = exports.CounterpartyOnboardingStatus = exports.BankStatementLineStatus = exports.InvestorExitRequestStatus = exports.InvestorExitType = exports.InvestorContactAmendmentStatus = exports.BankAccountChangeStatus = exports.InvestorBankAccountStatus = exports.ScreeningResult = exports.DocumentVerificationStatus = exports.InvestorMandateAmendmentStatus = exports.RolloverDefault = exports.MandateType = exports.InvestorFundStatus = exports.InvestorAmlRiskRating = exports.InvestorAmlStatus = exports.InvestorKycStatus = exports.InvestorEntityType = exports.DripDefault = exports.FundingStructure = exports.MandateRoleModel = exports.ProductStatus = exports.ProductEngineType = exports.DelegationStatus = exports.ApprovalDecision = exports.WorkflowStatus = exports.ApprovalChainStatus = exports.PermissionLevel = exports.UserStatus = exports.AuditAction = void 0;
exports.KriRagStatus = exports.KriComputeStatus = exports.NdMandateProvisionalStatus = exports.NdMandateStatus = exports.NdMandateSurplusTreatment = exports.NdMandateSharingMode = exports.NdMandateParticipantType = exports.PettyCashClaimStatus = exports.PettyCashVoucherStatus = exports.PettyCashFloatStatus = exports.AssetStatus = exports.PaymentBatchStatus = exports.VendorInvoiceStatus = exports.PurchaseOrderStatus = exports.VendorStatus = exports.EncumbranceStatus = exports.BudgetPhasingMethod = exports.BudgetLineClass = exports.BudgetVersionStatus = exports.DistributionStatus = exports.DistributionMethod = exports.PortfolioPositionStatus = exports.RiskRegisterStatus = exports.RiskAppetiteDirection = exports.RiskMatrixStatus = exports.RegulatorTemplateStatus = exports.StatementLineComputationType = exports.StatementTemplateStatus = exports.FrameworkMapStatus = exports.CashbookReconciliationStatus = exports.TxnStatus = exports.TxnType = exports.AccountingPeriodStatus = exports.JournalEntryStatus = exports.JournalClass = exports.AccountType = exports.LedgerEntityStatus = exports.LedgerEntityType = exports.AccountingBasis = exports.EmolumentComponentType = exports.NotificationType = exports.CalendarAdapterType = exports.CalendarAttendeeStatus = exports.CalendarEntryKind = exports.BoardCalendarSubmissionStatus = exports.BoardDirectiveStatus = exports.ExceptionRequestStatus = exports.AttendanceAdapterType = exports.LeaveApplicationStatus = exports.TaskSubmissionStatus = void 0;
exports.DsrCategory = exports.ComplaintStatus = exports.PaymentReminderDispatchStatus = exports.RepaymentObligationStatus = exports.InvestmentMemoStatus = exports.FacilityApplicationStatus = exports.CounterpartyRestructureRequestStatus = exports.CounterpartyRestructureRequestType = exports.MarketingSendStatus = exports.PrivacyNoticeContext = exports.PublicIntakeStatus = exports.PublicIntakeType = exports.PaymentInflowStatus = exports.Ic2Outcome = exports.MdOnboardingDecision = exports.EddRecommendation = exports.RiskProfileGrade = exports.SanctionsScreenResult = exports.InvestorOnboardingStage = exports.CommunicationDirection = exports.LeadStatus = exports.TalentRecommendationStatus = exports.TalentRecommendationType = exports.PayrollRunStatus = exports.GateOutcome = exports.ScoreSubmissionStatus = exports.PmsCycleStatus = exports.PmsCycleType = exports.ZakatDeclarationSource = exports.ZakatItemZakatability = exports.ZakatScheduleType = exports.ZakatAssessmentStatus = exports.ZakatSubscriptionRequestStatus = exports.ZakatRateBasis = exports.WmRiskAssessmentStatus = exports.WmAdvisoryResponse = exports.WmRiskBand = exports.WmHoldingActionStatus = exports.WmHoldingActionType = exports.WmClientTier = exports.WmShariahScreenTag = exports.WmVerificationTag = exports.WmCustodyFlag = exports.RegulatoryFilingStatus = exports.CellClass = exports.TilePresentation = exports.DashboardScope = exports.StressRunMode = exports.StressConfigStatus = exports.StressModelType = void 0;
exports.ScreeningHitAdjudicationOutcome = exports.ScreeningSubjectType = exports.ScreeningProviderMode = exports.ScreeningListFileFormat = exports.ScreeningListSourceCode = exports.TaxRemittanceStatus = exports.TaxType = exports.PayoutBatchStatus = exports.ProfitPaymentInterval = exports.PaymentGatewayInflowStatus = exports.PaymentGatewayInflowDecisionType = exports.StakeholderAudienceClass = exports.StakeholderReportStatus = exports.AiInteractionOutcome = exports.DataPointSourceType = exports.AiModelTier = exports.AiContextType = exports.BackupRunStatus = exports.ScheduledJobRunStatus = exports.OversightPrincipalType = exports.BreachRegisterStatus = exports.BreachSeverity = void 0;
exports.AuditAction = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    APPROVE: 'APPROVE',
    REJECT: 'REJECT',
    EXECUTE: 'EXECUTE',
    LOGIN: 'LOGIN',
    LOGIN_FAILED: 'LOGIN_FAILED',
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    INITIATE_FAILED_COMPENSATED: 'INITIATE_FAILED_COMPENSATED',
    SECURITY_ALERT: 'SECURITY_ALERT'
};
exports.UserStatus = {
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED'
};
exports.PermissionLevel = {
    INITIATE: 'INITIATE',
    APPROVE: 'APPROVE',
    VIEW: 'VIEW'
};
exports.ApprovalChainStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.WorkflowStatus = {
    INITIATED: 'INITIATED',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    EXECUTED: 'EXECUTED',
    CANCELLED: 'CANCELLED'
};
exports.ApprovalDecision = {
    APPROVE: 'APPROVE',
    REJECT: 'REJECT'
};
exports.DelegationStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    REVOKED: 'REVOKED',
    EXPIRED: 'EXPIRED'
};
exports.ProductEngineType = {
    UNIT_NAV: 'UNIT_NAV',
    PSR_WATERFALL: 'PSR_WATERFALL',
    MANDATE: 'MANDATE'
};
exports.ProductStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    RETIRED: 'RETIRED'
};
exports.MandateRoleModel = {
    MUDARABAH_PSR: 'MUDARABAH_PSR',
    WAKALAH: 'WAKALAH'
};
exports.FundingStructure = {
    LUMP_SUM: 'LUMP_SUM',
    PERIODIC_CALL: 'PERIODIC_CALL'
};
exports.DripDefault = {
    AUTO: 'AUTO',
    MANUAL: 'MANUAL',
    NONE: 'NONE'
};
exports.InvestorEntityType = {
    HNWI_INDIVIDUAL: 'HNWI_INDIVIDUAL',
    CORPORATE: 'CORPORATE',
    TRUST: 'TRUST',
    COOPERATIVE: 'COOPERATIVE',
    PENSION: 'PENSION',
    FAMILY_OFFICE: 'FAMILY_OFFICE',
    OTHER: 'OTHER'
};
exports.InvestorKycStatus = {
    PENDING_KYC: 'PENDING_KYC',
    KYC_COMPLETE: 'KYC_COMPLETE',
    LAPSED: 'LAPSED',
    SUSPENDED: 'SUSPENDED',
    EXEMPT: 'EXEMPT'
};
exports.InvestorAmlStatus = {
    PENDING: 'PENDING',
    CLEARED: 'CLEARED',
    UNDER_REVIEW: 'UNDER_REVIEW',
    FLAGGED: 'FLAGGED'
};
exports.InvestorAmlRiskRating = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH'
};
exports.InvestorFundStatus = {
    PENDING_KYC: 'PENDING_KYC',
    ACTIVE: 'ACTIVE',
    MATURED: 'MATURED',
    EXITED: 'EXITED',
    SUSPENDED: 'SUSPENDED',
    WATCH_LIST: 'WATCH_LIST',
    DORMANT: 'DORMANT'
};
exports.MandateType = {
    UNRESTRICTED: 'UNRESTRICTED',
    RESTRICTED: 'RESTRICTED',
    DIRECT_DEAL: 'DIRECT_DEAL',
    RESTRICTED_PLUS_DIRECT: 'RESTRICTED_PLUS_DIRECT'
};
exports.RolloverDefault = {
    AUTO: 'AUTO',
    MANUAL: 'MANUAL',
    NONE: 'NONE'
};
exports.InvestorMandateAmendmentStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.DocumentVerificationStatus = {
    PENDING: 'PENDING',
    VERIFIED: 'VERIFIED',
    REJECTED: 'REJECTED',
    EXPIRED: 'EXPIRED'
};
exports.ScreeningResult = {
    NO_MATCH: 'NO_MATCH',
    POTENTIAL_MATCH: 'POTENTIAL_MATCH',
    MATCH: 'MATCH'
};
exports.InvestorBankAccountStatus = {
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.BankAccountChangeStatus = {
    PENDING: 'PENDING',
    COOLING_OFF: 'COOLING_OFF',
    COMPLETED: 'COMPLETED',
    REJECTED: 'REJECTED'
};
exports.InvestorContactAmendmentStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.InvestorExitType = {
    MATURITY_TRANSITION: 'MATURITY_TRANSITION',
    FINAL_EXIT: 'FINAL_EXIT'
};
exports.InvestorExitRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.BankStatementLineStatus = {
    UNMATCHED: 'UNMATCHED',
    MATCHED: 'MATCHED'
};
exports.CounterpartyOnboardingStatus = {
    DRAFT: 'DRAFT',
    IN_REVIEW: 'IN_REVIEW',
    COMPLETE_APPROVED: 'COMPLETE_APPROVED',
    DECLINED: 'DECLINED'
};
exports.CounterpartyAccountStatus = {
    OPEN: 'OPEN',
    WRITTEN_OFF: 'WRITTEN_OFF',
    CLOSED: 'CLOSED'
};
exports.CounterpartyWriteOffStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.ProductAccountStatus = {
    ACTIVE: 'ACTIVE',
    MATURED: 'MATURED',
    CLOSED: 'CLOSED'
};
exports.SubscriptionRequestType = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    REDEMPTION: 'REDEMPTION'
};
exports.SubscriptionRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.MigrationBatchStatus = {
    STAGED: 'STAGED',
    VALIDATED: 'VALIDATED',
    PROMOTED: 'PROMOTED'
};
exports.StagingRowStatus = {
    PENDING: 'PENDING',
    VALID: 'VALID',
    REJECTED: 'REJECTED',
    PROMOTED: 'PROMOTED'
};
exports.DocumentTemplateType = {
    CERTIFICATE: 'CERTIFICATE',
    LETTER: 'LETTER'
};
exports.CertificateProductClass = {
    HF_UNIT_NAV: 'HF_UNIT_NAV',
    POOL_ND_PSR: 'POOL_ND_PSR',
    ND_WAKALAH: 'ND_WAKALAH'
};
exports.CertificateStatus = {
    QUEUED: 'QUEUED',
    ISSUED: 'ISSUED'
};
exports.LetterInstanceStatus = {
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    REJECTED: 'REJECTED',
    ISSUED: 'ISSUED'
};
exports.PmsTier = {
    JUNIOR: 'JUNIOR',
    SENIOR: 'SENIOR',
    CHIEF: 'CHIEF'
};
exports.KpiClass = {
    CORE: 'CORE',
    STRATEGIC: 'STRATEGIC',
    SECONDARY: 'SECONDARY',
    PROCESS_INTEGRITY: 'PROCESS_INTEGRITY'
};
exports.MeasurementBasis = {
    AUTO: 'AUTO',
    MANUAL: 'MANUAL',
    HYBRID: 'HYBRID'
};
exports.GovernedItemStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.DepartmentHeadDesignationStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED',
    REVOKED: 'REVOKED'
};
exports.EmployeeStatus = {
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    TERMINATED: 'TERMINATED'
};
exports.EmployeeLifecycleRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.MaritalStatus = {
    SINGLE: 'SINGLE',
    MARRIED: 'MARRIED',
    DIVORCED: 'DIVORCED',
    WIDOWED: 'WIDOWED'
};
exports.PersonalRecordChangeStatus = {
    PENDING: 'PENDING',
    ACKNOWLEDGED: 'ACKNOWLEDGED',
    REJECTED: 'REJECTED'
};
exports.TaskStatus = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    CANCELLED: 'CANCELLED',
    DEFAULTED: 'DEFAULTED'
};
exports.TaskSubmissionStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED'
};
exports.LeaveApplicationStatus = {
    PENDING: 'PENDING',
    SUPERVISOR_APPROVED: 'SUPERVISOR_APPROVED',
    HR_ACKNOWLEDGED: 'HR_ACKNOWLEDGED',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED'
};
exports.AttendanceAdapterType = {
    TTLOCK: 'TTLOCK',
    FILE_IMPORT: 'FILE_IMPORT'
};
exports.ExceptionRequestStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED'
};
exports.BoardDirectiveStatus = {
    ISSUED: 'ISSUED',
    ACKNOWLEDGED: 'ACKNOWLEDGED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    REPORTED_BACK: 'REPORTED_BACK'
};
exports.BoardCalendarSubmissionStatus = {
    SUBMITTED: 'SUBMITTED',
    RECEIVED: 'RECEIVED',
    INCOMPLETE: 'INCOMPLETE'
};
exports.CalendarEntryKind = {
    TASK_DEADLINE: 'TASK_DEADLINE',
    BOARD_EVENT: 'BOARD_EVENT',
    PMS_CYCLE: 'PMS_CYCLE',
    FILING_DEADLINE: 'FILING_DEADLINE',
    PERSONAL: 'PERSONAL',
    MEETING: 'MEETING',
    LEAVE: 'LEAVE'
};
exports.CalendarAttendeeStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED'
};
exports.CalendarAdapterType = {
    MICROSOFT_GRAPH: 'MICROSOFT_GRAPH',
    GOOGLE: 'GOOGLE'
};
exports.NotificationType = {
    TASK_ASSIGNED: 'TASK_ASSIGNED',
    PERSONAL_RECORD_CHANGE_DECIDED: 'PERSONAL_RECORD_CHANGE_DECIDED',
    GENERIC: 'GENERIC',
    SCHEDULER_JOB_FAILED: 'SCHEDULER_JOB_FAILED'
};
exports.EmolumentComponentType = {
    SALARY: 'SALARY',
    ALLOWANCE: 'ALLOWANCE',
    COST_REFUND: 'COST_REFUND'
};
exports.AccountingBasis = {
    IFRS: 'IFRS',
    AAOIFI: 'AAOIFI'
};
exports.LedgerEntityType = {
    COMPANY: 'COMPANY',
    FUND: 'FUND',
    POOL: 'POOL',
    MANDATE: 'MANDATE',
    CLIENT_MONEY: 'CLIENT_MONEY'
};
exports.LedgerEntityStatus = {
    ACTIVE: 'ACTIVE',
    CLOSED: 'CLOSED'
};
exports.AccountType = {
    ASSET: 'ASSET',
    LIABILITY: 'LIABILITY',
    EQUITY: 'EQUITY',
    INCOME: 'INCOME',
    EXPENSE: 'EXPENSE'
};
exports.JournalClass = {
    BASE: 'BASE',
    BASIS_ADJUSTMENT: 'BASIS_ADJUSTMENT'
};
exports.JournalEntryStatus = {
    DRAFT: 'DRAFT',
    POSTED: 'POSTED',
    REVERSED: 'REVERSED'
};
exports.AccountingPeriodStatus = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
};
exports.TxnType = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    REDEMPTION: 'REDEMPTION',
    PLACEMENT: 'PLACEMENT',
    PROFIT_ALLOCATION: 'PROFIT_ALLOCATION',
    DISTRIBUTION: 'DISTRIBUTION',
    ROLLOVER: 'ROLLOVER',
    EARLY_EXIT: 'EARLY_EXIT',
    MATURITY_PAYOUT: 'MATURITY_PAYOUT',
    FEE: 'FEE',
    PURIFICATION: 'PURIFICATION',
    ADJUSTMENT: 'ADJUSTMENT',
    HIBAH: 'HIBAH'
};
exports.TxnStatus = {
    PENDING: 'PENDING',
    POSTED: 'POSTED',
    REVERSED: 'REVERSED',
    CANCELLED: 'CANCELLED'
};
exports.CashbookReconciliationStatus = {
    UNRECONCILED: 'UNRECONCILED',
    RECONCILED: 'RECONCILED',
    DISPUTED: 'DISPUTED'
};
exports.FrameworkMapStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.StatementTemplateStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.StatementLineComputationType = {
    SUM_OF_ACCOUNTS: 'SUM_OF_ACCOUNTS',
    SUM_OF_LINES: 'SUM_OF_LINES',
    FORMULA: 'FORMULA'
};
exports.RegulatorTemplateStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    RETIRED: 'RETIRED'
};
exports.RiskMatrixStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.RiskAppetiteDirection = {
    HIGHER_BETTER: 'HIGHER_BETTER',
    LOWER_BETTER: 'LOWER_BETTER'
};
exports.RiskRegisterStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE'
};
exports.PortfolioPositionStatus = {
    ACTIVE: 'ACTIVE',
    MATURED: 'MATURED',
    EXITED: 'EXITED'
};
exports.DistributionMethod = {
    INCOME: 'INCOME',
    NAV: 'NAV',
    ND_MUDARABAH: 'ND_MUDARABAH',
    ND_WAKALAH: 'ND_WAKALAH'
};
exports.DistributionStatus = {
    DRAFT: 'DRAFT',
    DECLARED: 'DECLARED',
    PAID: 'PAID'
};
exports.BudgetVersionStatus = {
    DRAFT: 'DRAFT',
    PROPOSED: 'PROPOSED',
    BOARD_APPROVED: 'BOARD_APPROVED',
    ACTIVE: 'ACTIVE'
};
exports.BudgetLineClass = {
    OPEX: 'OPEX',
    CAPEX: 'CAPEX',
    REVENUE: 'REVENUE',
    STAFF: 'STAFF'
};
exports.BudgetPhasingMethod = {
    ACTUAL_PHASED: 'ACTUAL_PHASED',
    EVEN_12: 'EVEN_12',
    DRIVER_PCT_OF_FUM: 'DRIVER_PCT_OF_FUM',
    DRIVER_PCT_OF_MOBILIZATION: 'DRIVER_PCT_OF_MOBILIZATION',
    PRIOR_YEAR_UPLIFT: 'PRIOR_YEAR_UPLIFT',
    ESCALATING_MONTHLY: 'ESCALATING_MONTHLY',
    FIXED_MONTHLY: 'FIXED_MONTHLY'
};
exports.EncumbranceStatus = {
    OPEN: 'OPEN',
    RELEASED: 'RELEASED',
    CONVERTED: 'CONVERTED'
};
exports.VendorStatus = {
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED'
};
exports.PurchaseOrderStatus = {
    DRAFT: 'DRAFT',
    ISSUED: 'ISSUED',
    RECEIVED: 'RECEIVED',
    MATCHED: 'MATCHED',
    CLOSED: 'CLOSED',
    CANCELLED: 'CANCELLED'
};
exports.VendorInvoiceStatus = {
    PENDING_MATCH: 'PENDING_MATCH',
    MATCHED: 'MATCHED',
    DISPUTED: 'DISPUTED',
    PAID: 'PAID'
};
exports.PaymentBatchStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    PAID: 'PAID'
};
exports.AssetStatus = {
    ACTIVE: 'ACTIVE',
    FULLY_DEPRECIATED: 'FULLY_DEPRECIATED',
    DISPOSED: 'DISPOSED'
};
exports.PettyCashFloatStatus = {
    ACTIVE: 'ACTIVE',
    CLOSED: 'CLOSED'
};
exports.PettyCashVoucherStatus = {
    OUTSTANDING: 'OUTSTANDING',
    REIMBURSED: 'REIMBURSED'
};
exports.PettyCashClaimStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    REJECTED: 'REJECTED',
    DISBURSED: 'DISBURSED'
};
exports.NdMandateParticipantType = {
    INVESTOR: 'INVESTOR',
    FUND: 'FUND',
    POOL: 'POOL'
};
exports.NdMandateSharingMode = {
    MUDARABAH_PSR: 'MUDARABAH_PSR',
    WAKALAH: 'WAKALAH'
};
exports.NdMandateSurplusTreatment = {
    CLIENT_ALL: 'CLIENT_ALL',
    AGENT_RETAINS: 'AGENT_RETAINS',
    SHARED: 'SHARED'
};
exports.NdMandateStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    MATURED: 'MATURED',
    CLOSED: 'CLOSED'
};
exports.NdMandateProvisionalStatus = {
    PROVISIONAL: 'PROVISIONAL',
    REVERSED: 'REVERSED',
    TRUED_UP: 'TRUED_UP'
};
exports.KriComputeStatus = {
    INSTRUMENTED: 'INSTRUMENTED',
    NOT_YET_INSTRUMENTED: 'NOT_YET_INSTRUMENTED',
    RESERVED: 'RESERVED'
};
exports.KriRagStatus = {
    GREEN: 'GREEN',
    AMBER: 'AMBER',
    RED: 'RED',
    AWAITING_MATRIX: 'AWAITING_MATRIX',
    NOT_INSTRUMENTED: 'NOT_INSTRUMENTED',
    INFORMATIONAL: 'INFORMATIONAL'
};
exports.StressModelType = {
    LIQUIDITY: 'LIQUIDITY',
    CAPITAL_ADEQUACY: 'CAPITAL_ADEQUACY',
    REVENUE_SENSITIVITY: 'REVENUE_SENSITIVITY',
    COUNTERPARTY_DEFAULT: 'COUNTERPARTY_DEFAULT',
    PORTFOLIO_SHOCK: 'PORTFOLIO_SHOCK',
    REVERSE_STRESS: 'REVERSE_STRESS'
};
exports.StressConfigStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    SUPERSEDED: 'SUPERSEDED'
};
exports.StressRunMode = {
    SANDBOX: 'SANDBOX',
    BASELINE_CANDIDATE: 'BASELINE_CANDIDATE',
    BASELINE: 'BASELINE'
};
exports.DashboardScope = {
    PERSONAL: 'PERSONAL',
    DEPARTMENT: 'DEPARTMENT'
};
exports.TilePresentation = {
    KPI_TILE: 'KPI_TILE',
    TREND_LINE: 'TREND_LINE',
    PIE: 'PIE',
    BAR: 'BAR',
    TABLE: 'TABLE'
};
exports.CellClass = {
    AUTO: 'AUTO',
    ENTRY: 'ENTRY',
    STATIC: 'STATIC'
};
exports.RegulatoryFilingStatus = {
    DRAFT: 'DRAFT',
    ENTRY_IN_PROGRESS: 'ENTRY_IN_PROGRESS',
    SUBMITTED_FOR_CERTIFICATION: 'SUBMITTED_FOR_CERTIFICATION',
    CERTIFIED: 'CERTIFIED',
    FILED: 'FILED'
};
exports.WmCustodyFlag = {
    ONE17: 'ONE17',
    EXTERNAL: 'EXTERNAL'
};
exports.WmVerificationTag = {
    DECLARED: 'DECLARED',
    VERIFIED: 'VERIFIED'
};
exports.WmShariahScreenTag = {
    SCREENED_COMPLIANT: 'SCREENED_COMPLIANT',
    SCREENED_NON_COMPLIANT: 'SCREENED_NON_COMPLIANT',
    UNSCREENED: 'UNSCREENED'
};
exports.WmClientTier = {
    BASE_MASS: 'BASE_MASS',
    CORE_MASS: 'CORE_MASS',
    UPPER_MASS: 'UPPER_MASS',
    MASS_AFFLUENT: 'MASS_AFFLUENT',
    AFFLUENT: 'AFFLUENT',
    HNI: 'HNI',
    VHNI: 'VHNI',
    UHNI: 'UHNI',
    CENTIMILLIONAIRE: 'CENTIMILLIONAIRE',
    BILLIONAIRE: 'BILLIONAIRE'
};
exports.WmHoldingActionType = {
    TOP_UP: 'TOP_UP',
    REDEMPTION: 'REDEMPTION'
};
exports.WmHoldingActionStatus = {
    PENDING: 'PENDING',
    ACTIONED: 'ACTIONED'
};
exports.WmRiskBand = {
    CONSERVATIVE: 'CONSERVATIVE',
    MODERATE: 'MODERATE',
    BALANCED: 'BALANCED',
    GROWTH: 'GROWTH',
    AGGRESSIVE: 'AGGRESSIVE'
};
exports.WmAdvisoryResponse = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
    DEFERRED: 'DEFERRED'
};
exports.WmRiskAssessmentStatus = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED'
};
exports.ZakatRateBasis = {
    LUNAR: 'LUNAR',
    GREGORIAN: 'GREGORIAN'
};
exports.ZakatSubscriptionRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED'
};
exports.ZakatAssessmentStatus = {
    DRAFT: 'DRAFT',
    CLIENT_AGREED: 'CLIENT_AGREED',
    AWAITING_SHARIAH_CERTIFICATION: 'AWAITING_SHARIAH_CERTIFICATION',
    CERTIFIED: 'CERTIFIED'
};
exports.ZakatScheduleType = {
    CASH_BANK: 'CASH_BANK',
    GOLD_SILVER: 'GOLD_SILVER',
    INVESTMENT: 'INVESTMENT',
    FIXED_ASSET: 'FIXED_ASSET',
    RECEIVABLE: 'RECEIVABLE',
    LIABILITY: 'LIABILITY'
};
exports.ZakatItemZakatability = {
    ZAKATABLE: 'ZAKATABLE',
    NON_ZAKATABLE: 'NON_ZAKATABLE',
    DOUBTFUL: 'DOUBTFUL'
};
exports.ZakatDeclarationSource = {
    STAFF: 'STAFF',
    CLIENT: 'CLIENT'
};
exports.PmsCycleType = {
    INCENTIVE_CYCLE: 'INCENTIVE_CYCLE',
    ANNUAL_APPRAISAL: 'ANNUAL_APPRAISAL'
};
exports.PmsCycleStatus = {
    OPEN: 'OPEN',
    SCORING: 'SCORING',
    VALIDATION: 'VALIDATION',
    APPROVED: 'APPROVED',
    INCENTIVE_COMPUTED: 'INCENTIVE_COMPUTED',
    PAID: 'PAID',
    CLOSED: 'CLOSED'
};
exports.ScoreSubmissionStatus = {
    SELF_SCORED: 'SELF_SCORED',
    VALIDATED: 'VALIDATED',
    REJECTED: 'REJECTED'
};
exports.GateOutcome = {
    FULL_RELEASE: 'FULL_RELEASE',
    CAPPED: 'CAPPED',
    DEFERRED: 'DEFERRED',
    SUSPENDED: 'SUSPENDED'
};
exports.PayrollRunStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    POSTED: 'POSTED'
};
exports.TalentRecommendationType = {
    WELFARE: 'WELFARE',
    REWARD: 'REWARD'
};
exports.TalentRecommendationStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.LeadStatus = {
    NEW: 'NEW',
    CONTACTED: 'CONTACTED',
    QUALIFIED: 'QUALIFIED',
    CONVERTED: 'CONVERTED',
    LOST: 'LOST'
};
exports.CommunicationDirection = {
    INBOUND: 'INBOUND',
    OUTBOUND: 'OUTBOUND'
};
exports.InvestorOnboardingStage = {
    STAGE_1_EXPRESS: 'STAGE_1_EXPRESS',
    STAGE_2_COMPLETE: 'STAGE_2_COMPLETE'
};
exports.SanctionsScreenResult = {
    CLEAR: 'CLEAR',
    FLAGGED: 'FLAGGED'
};
exports.RiskProfileGrade = {
    LOW: 'LOW',
    MEDIUM_LOW: 'MEDIUM_LOW',
    HIGH: 'HIGH'
};
exports.EddRecommendation = {
    APPROVE_WITH_CONDITIONS: 'APPROVE_WITH_CONDITIONS',
    DECLINE: 'DECLINE'
};
exports.MdOnboardingDecision = {
    APPROVED: 'APPROVED',
    DECLINED: 'DECLINED'
};
exports.Ic2Outcome = {
    SATISFACTORY: 'SATISFACTORY',
    UNSATISFACTORY: 'UNSATISFACTORY'
};
exports.PaymentInflowStatus = {
    DECLARED_MATCHED: 'DECLARED_MATCHED',
    SUSPENSE: 'SUSPENSE',
    COMPLIANCE_FLAGGED: 'COMPLIANCE_FLAGGED'
};
exports.PublicIntakeType = {
    INVESTOR_EXPRESS: 'INVESTOR_EXPRESS',
    COUNTERPARTY: 'COUNTERPARTY'
};
exports.PublicIntakeStatus = {
    PENDING: 'PENDING',
    PROMOTED: 'PROMOTED',
    REJECTED: 'REJECTED'
};
exports.PrivacyNoticeContext = {
    INVESTOR_ONBOARDING_STAGE_1: 'INVESTOR_ONBOARDING_STAGE_1',
    INVESTOR_ONBOARDING_STAGE_2: 'INVESTOR_ONBOARDING_STAGE_2',
    COUNTERPARTY_ONBOARDING: 'COUNTERPARTY_ONBOARDING',
    INVESTOR_PORTAL_FIRST_LOGIN: 'INVESTOR_PORTAL_FIRST_LOGIN',
    COUNTERPARTY_PORTAL_FIRST_LOGIN: 'COUNTERPARTY_PORTAL_FIRST_LOGIN',
    PUBLIC_INTAKE: 'PUBLIC_INTAKE'
};
exports.MarketingSendStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    SENT: 'SENT',
    REJECTED: 'REJECTED'
};
exports.CounterpartyRestructureRequestType = {
    EXTENSION: 'EXTENSION',
    RESTRUCTURE: 'RESTRUCTURE'
};
exports.CounterpartyRestructureRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    DECLINED: 'DECLINED'
};
exports.FacilityApplicationStatus = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    APPROVED: 'APPROVED',
    DECLINED: 'DECLINED',
    DISBURSED: 'DISBURSED'
};
exports.InvestmentMemoStatus = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    CIO_APPROVED: 'CIO_APPROVED',
    MD_APPROVED: 'MD_APPROVED',
    CIO_REJECTED: 'CIO_REJECTED'
};
exports.RepaymentObligationStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    RESTRUCTURED: 'RESTRUCTURED',
    DEFAULTED: 'DEFAULTED'
};
exports.PaymentReminderDispatchStatus = {
    PENDING_VALIDATION: 'PENDING_VALIDATION',
    DISPATCHED: 'DISPATCHED',
    REJECTED: 'REJECTED'
};
exports.ComplaintStatus = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED'
};
exports.DsrCategory = {
    ACCESS: 'ACCESS',
    RECTIFICATION: 'RECTIFICATION',
    ERASURE: 'ERASURE',
    OBJECTION: 'OBJECTION',
    PORTABILITY: 'PORTABILITY'
};
exports.BreachSeverity = {
    UNASSESSED: 'UNASSESSED',
    LOW: 'LOW',
    MODERATE: 'MODERATE',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
exports.BreachRegisterStatus = {
    OPEN: 'OPEN',
    ASSESSED: 'ASSESSED',
    NDPC_NOTIFIED: 'NDPC_NOTIFIED',
    DATA_SUBJECTS_NOTIFIED: 'DATA_SUBJECTS_NOTIFIED',
    CLOSED: 'CLOSED'
};
exports.OversightPrincipalType = {
    INVESTOR: 'INVESTOR',
    COUNTERPARTY: 'COUNTERPARTY'
};
exports.ScheduledJobRunStatus = {
    RUNNING: 'RUNNING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED'
};
exports.BackupRunStatus = {
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED'
};
exports.AiContextType = {
    NONE: 'NONE',
    WORKFLOW_STEP: 'WORKFLOW_STEP',
    REPORT_WORKSPACE: 'REPORT_WORKSPACE',
    ORG_UNIT_SCOPED: 'ORG_UNIT_SCOPED'
};
exports.AiModelTier = {
    MID_TIER: 'MID_TIER',
    FRONTIER_TIER: 'FRONTIER_TIER'
};
exports.DataPointSourceType = {
    REPORT_RUN_FIELD: 'REPORT_RUN_FIELD',
    LIVE_QUERY: 'LIVE_QUERY'
};
exports.AiInteractionOutcome = {
    ALLOWED: 'ALLOWED',
    REFUSED: 'REFUSED'
};
exports.StakeholderReportStatus = {
    DRAFT: 'DRAFT',
    APPROVED: 'APPROVED',
    DISTRIBUTED: 'DISTRIBUTED'
};
exports.StakeholderAudienceClass = {
    INTERNAL: 'INTERNAL',
    CLIENT: 'CLIENT',
    REGULATOR: 'REGULATOR',
    BOARD: 'BOARD'
};
exports.PaymentGatewayInflowDecisionType = {
    REJECT: 'REJECT',
    REVERSAL: 'REVERSAL'
};
exports.PaymentGatewayInflowStatus = {
    UNMATCHED: 'UNMATCHED',
    MATCHED: 'MATCHED',
    PROMOTED: 'PROMOTED',
    REVERSED: 'REVERSED',
    REJECTED: 'REJECTED'
};
exports.ProfitPaymentInterval = {
    MONTHLY: 'MONTHLY',
    QUARTERLY: 'QUARTERLY',
    SEMI_ANNUAL: 'SEMI_ANNUAL',
    ANNUAL: 'ANNUAL',
    AT_MATURITY: 'AT_MATURITY'
};
exports.PayoutBatchStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    INSTRUCTION_ISSUED: 'INSTRUCTION_ISSUED',
    PAID: 'PAID'
};
exports.TaxType = {
    WHT: 'WHT',
    VAT: 'VAT',
    STAMP_DUTY: 'STAMP_DUTY'
};
exports.TaxRemittanceStatus = {
    PENDING: 'PENDING',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    INSTRUCTION_ISSUED: 'INSTRUCTION_ISSUED',
    REMITTED: 'REMITTED'
};
exports.ScreeningListSourceCode = {
    OFAC: 'OFAC',
    UN_SC: 'UN_SC',
    UK_SANCTIONS: 'UK_SANCTIONS',
    EU_FSF: 'EU_FSF',
    NG_NFIU: 'NG_NFIU'
};
exports.ScreeningListFileFormat = {
    CSV: 'CSV',
    XML: 'XML'
};
exports.ScreeningProviderMode = {
    LOCAL_LISTS: 'LOCAL_LISTS',
    COMMERCIAL: 'COMMERCIAL',
    MANUAL: 'MANUAL'
};
exports.ScreeningSubjectType = {
    INVESTOR: 'INVESTOR',
    COUNTERPARTY: 'COUNTERPARTY'
};
exports.ScreeningHitAdjudicationOutcome = {
    TRUE_MATCH: 'TRUE_MATCH',
    FALSE_POSITIVE: 'FALSE_POSITIVE'
};
//# sourceMappingURL=enums.js.map