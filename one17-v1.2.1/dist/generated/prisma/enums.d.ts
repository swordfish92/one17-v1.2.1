export declare const AuditAction: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly APPROVE: "APPROVE";
    readonly REJECT: "REJECT";
    readonly EXECUTE: "EXECUTE";
    readonly LOGIN: "LOGIN";
    readonly LOGIN_FAILED: "LOGIN_FAILED";
    readonly PERMISSION_DENIED: "PERMISSION_DENIED";
    readonly INITIATE_FAILED_COMPENSATED: "INITIATE_FAILED_COMPENSATED";
    readonly SECURITY_ALERT: "SECURITY_ALERT";
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const PermissionLevel: {
    readonly INITIATE: "INITIATE";
    readonly APPROVE: "APPROVE";
    readonly VIEW: "VIEW";
};
export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel];
export declare const ApprovalChainStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type ApprovalChainStatus = (typeof ApprovalChainStatus)[keyof typeof ApprovalChainStatus];
export declare const WorkflowStatus: {
    readonly INITIATED: "INITIATED";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly EXECUTED: "EXECUTED";
    readonly CANCELLED: "CANCELLED";
};
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];
export declare const ApprovalDecision: {
    readonly APPROVE: "APPROVE";
    readonly REJECT: "REJECT";
};
export type ApprovalDecision = (typeof ApprovalDecision)[keyof typeof ApprovalDecision];
export declare const DelegationStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly REVOKED: "REVOKED";
    readonly EXPIRED: "EXPIRED";
};
export type DelegationStatus = (typeof DelegationStatus)[keyof typeof DelegationStatus];
export declare const ProductEngineType: {
    readonly UNIT_NAV: "UNIT_NAV";
    readonly PSR_WATERFALL: "PSR_WATERFALL";
    readonly MANDATE: "MANDATE";
};
export type ProductEngineType = (typeof ProductEngineType)[keyof typeof ProductEngineType];
export declare const ProductStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly RETIRED: "RETIRED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const MandateRoleModel: {
    readonly MUDARABAH_PSR: "MUDARABAH_PSR";
    readonly WAKALAH: "WAKALAH";
};
export type MandateRoleModel = (typeof MandateRoleModel)[keyof typeof MandateRoleModel];
export declare const FundingStructure: {
    readonly LUMP_SUM: "LUMP_SUM";
    readonly PERIODIC_CALL: "PERIODIC_CALL";
};
export type FundingStructure = (typeof FundingStructure)[keyof typeof FundingStructure];
export declare const DripDefault: {
    readonly AUTO: "AUTO";
    readonly MANUAL: "MANUAL";
    readonly NONE: "NONE";
};
export type DripDefault = (typeof DripDefault)[keyof typeof DripDefault];
export declare const InvestorEntityType: {
    readonly HNWI_INDIVIDUAL: "HNWI_INDIVIDUAL";
    readonly CORPORATE: "CORPORATE";
    readonly TRUST: "TRUST";
    readonly COOPERATIVE: "COOPERATIVE";
    readonly PENSION: "PENSION";
    readonly FAMILY_OFFICE: "FAMILY_OFFICE";
    readonly OTHER: "OTHER";
};
export type InvestorEntityType = (typeof InvestorEntityType)[keyof typeof InvestorEntityType];
export declare const InvestorKycStatus: {
    readonly PENDING_KYC: "PENDING_KYC";
    readonly KYC_COMPLETE: "KYC_COMPLETE";
    readonly LAPSED: "LAPSED";
    readonly SUSPENDED: "SUSPENDED";
    readonly EXEMPT: "EXEMPT";
};
export type InvestorKycStatus = (typeof InvestorKycStatus)[keyof typeof InvestorKycStatus];
export declare const InvestorAmlStatus: {
    readonly PENDING: "PENDING";
    readonly CLEARED: "CLEARED";
    readonly UNDER_REVIEW: "UNDER_REVIEW";
    readonly FLAGGED: "FLAGGED";
};
export type InvestorAmlStatus = (typeof InvestorAmlStatus)[keyof typeof InvestorAmlStatus];
export declare const InvestorAmlRiskRating: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
};
export type InvestorAmlRiskRating = (typeof InvestorAmlRiskRating)[keyof typeof InvestorAmlRiskRating];
export declare const InvestorFundStatus: {
    readonly PENDING_KYC: "PENDING_KYC";
    readonly ACTIVE: "ACTIVE";
    readonly MATURED: "MATURED";
    readonly EXITED: "EXITED";
    readonly SUSPENDED: "SUSPENDED";
    readonly WATCH_LIST: "WATCH_LIST";
    readonly DORMANT: "DORMANT";
};
export type InvestorFundStatus = (typeof InvestorFundStatus)[keyof typeof InvestorFundStatus];
export declare const MandateType: {
    readonly UNRESTRICTED: "UNRESTRICTED";
    readonly RESTRICTED: "RESTRICTED";
    readonly DIRECT_DEAL: "DIRECT_DEAL";
    readonly RESTRICTED_PLUS_DIRECT: "RESTRICTED_PLUS_DIRECT";
};
export type MandateType = (typeof MandateType)[keyof typeof MandateType];
export declare const RolloverDefault: {
    readonly AUTO: "AUTO";
    readonly MANUAL: "MANUAL";
    readonly NONE: "NONE";
};
export type RolloverDefault = (typeof RolloverDefault)[keyof typeof RolloverDefault];
export declare const InvestorMandateAmendmentStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type InvestorMandateAmendmentStatus = (typeof InvestorMandateAmendmentStatus)[keyof typeof InvestorMandateAmendmentStatus];
export declare const DocumentVerificationStatus: {
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
};
export type DocumentVerificationStatus = (typeof DocumentVerificationStatus)[keyof typeof DocumentVerificationStatus];
export declare const ScreeningResult: {
    readonly NO_MATCH: "NO_MATCH";
    readonly POTENTIAL_MATCH: "POTENTIAL_MATCH";
    readonly MATCH: "MATCH";
};
export type ScreeningResult = (typeof ScreeningResult)[keyof typeof ScreeningResult];
export declare const InvestorBankAccountStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type InvestorBankAccountStatus = (typeof InvestorBankAccountStatus)[keyof typeof InvestorBankAccountStatus];
export declare const BankAccountChangeStatus: {
    readonly PENDING: "PENDING";
    readonly COOLING_OFF: "COOLING_OFF";
    readonly COMPLETED: "COMPLETED";
    readonly REJECTED: "REJECTED";
};
export type BankAccountChangeStatus = (typeof BankAccountChangeStatus)[keyof typeof BankAccountChangeStatus];
export declare const InvestorContactAmendmentStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type InvestorContactAmendmentStatus = (typeof InvestorContactAmendmentStatus)[keyof typeof InvestorContactAmendmentStatus];
export declare const InvestorExitType: {
    readonly MATURITY_TRANSITION: "MATURITY_TRANSITION";
    readonly FINAL_EXIT: "FINAL_EXIT";
};
export type InvestorExitType = (typeof InvestorExitType)[keyof typeof InvestorExitType];
export declare const InvestorExitRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type InvestorExitRequestStatus = (typeof InvestorExitRequestStatus)[keyof typeof InvestorExitRequestStatus];
export declare const BankStatementLineStatus: {
    readonly UNMATCHED: "UNMATCHED";
    readonly MATCHED: "MATCHED";
};
export type BankStatementLineStatus = (typeof BankStatementLineStatus)[keyof typeof BankStatementLineStatus];
export declare const CounterpartyOnboardingStatus: {
    readonly DRAFT: "DRAFT";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly COMPLETE_APPROVED: "COMPLETE_APPROVED";
    readonly DECLINED: "DECLINED";
};
export type CounterpartyOnboardingStatus = (typeof CounterpartyOnboardingStatus)[keyof typeof CounterpartyOnboardingStatus];
export declare const CounterpartyAccountStatus: {
    readonly OPEN: "OPEN";
    readonly WRITTEN_OFF: "WRITTEN_OFF";
    readonly CLOSED: "CLOSED";
};
export type CounterpartyAccountStatus = (typeof CounterpartyAccountStatus)[keyof typeof CounterpartyAccountStatus];
export declare const CounterpartyWriteOffStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type CounterpartyWriteOffStatus = (typeof CounterpartyWriteOffStatus)[keyof typeof CounterpartyWriteOffStatus];
export declare const ProductAccountStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly MATURED: "MATURED";
    readonly CLOSED: "CLOSED";
};
export type ProductAccountStatus = (typeof ProductAccountStatus)[keyof typeof ProductAccountStatus];
export declare const SubscriptionRequestType: {
    readonly SUBSCRIPTION: "SUBSCRIPTION";
    readonly REDEMPTION: "REDEMPTION";
};
export type SubscriptionRequestType = (typeof SubscriptionRequestType)[keyof typeof SubscriptionRequestType];
export declare const SubscriptionRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type SubscriptionRequestStatus = (typeof SubscriptionRequestStatus)[keyof typeof SubscriptionRequestStatus];
export declare const MigrationBatchStatus: {
    readonly STAGED: "STAGED";
    readonly VALIDATED: "VALIDATED";
    readonly PROMOTED: "PROMOTED";
};
export type MigrationBatchStatus = (typeof MigrationBatchStatus)[keyof typeof MigrationBatchStatus];
export declare const StagingRowStatus: {
    readonly PENDING: "PENDING";
    readonly VALID: "VALID";
    readonly REJECTED: "REJECTED";
    readonly PROMOTED: "PROMOTED";
};
export type StagingRowStatus = (typeof StagingRowStatus)[keyof typeof StagingRowStatus];
export declare const DocumentTemplateType: {
    readonly CERTIFICATE: "CERTIFICATE";
    readonly LETTER: "LETTER";
};
export type DocumentTemplateType = (typeof DocumentTemplateType)[keyof typeof DocumentTemplateType];
export declare const CertificateProductClass: {
    readonly HF_UNIT_NAV: "HF_UNIT_NAV";
    readonly POOL_ND_PSR: "POOL_ND_PSR";
    readonly ND_WAKALAH: "ND_WAKALAH";
};
export type CertificateProductClass = (typeof CertificateProductClass)[keyof typeof CertificateProductClass];
export declare const CertificateStatus: {
    readonly QUEUED: "QUEUED";
    readonly ISSUED: "ISSUED";
};
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];
export declare const LetterInstanceStatus: {
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly REJECTED: "REJECTED";
    readonly ISSUED: "ISSUED";
};
export type LetterInstanceStatus = (typeof LetterInstanceStatus)[keyof typeof LetterInstanceStatus];
export declare const PmsTier: {
    readonly JUNIOR: "JUNIOR";
    readonly SENIOR: "SENIOR";
    readonly CHIEF: "CHIEF";
};
export type PmsTier = (typeof PmsTier)[keyof typeof PmsTier];
export declare const KpiClass: {
    readonly CORE: "CORE";
    readonly STRATEGIC: "STRATEGIC";
    readonly SECONDARY: "SECONDARY";
    readonly PROCESS_INTEGRITY: "PROCESS_INTEGRITY";
};
export type KpiClass = (typeof KpiClass)[keyof typeof KpiClass];
export declare const MeasurementBasis: {
    readonly AUTO: "AUTO";
    readonly MANUAL: "MANUAL";
    readonly HYBRID: "HYBRID";
};
export type MeasurementBasis = (typeof MeasurementBasis)[keyof typeof MeasurementBasis];
export declare const GovernedItemStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type GovernedItemStatus = (typeof GovernedItemStatus)[keyof typeof GovernedItemStatus];
export declare const DepartmentHeadDesignationStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
    readonly REVOKED: "REVOKED";
};
export type DepartmentHeadDesignationStatus = (typeof DepartmentHeadDesignationStatus)[keyof typeof DepartmentHeadDesignationStatus];
export declare const EmployeeStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly TERMINATED: "TERMINATED";
};
export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];
export declare const EmployeeLifecycleRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type EmployeeLifecycleRequestStatus = (typeof EmployeeLifecycleRequestStatus)[keyof typeof EmployeeLifecycleRequestStatus];
export declare const MaritalStatus: {
    readonly SINGLE: "SINGLE";
    readonly MARRIED: "MARRIED";
    readonly DIVORCED: "DIVORCED";
    readonly WIDOWED: "WIDOWED";
};
export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus];
export declare const PersonalRecordChangeStatus: {
    readonly PENDING: "PENDING";
    readonly ACKNOWLEDGED: "ACKNOWLEDGED";
    readonly REJECTED: "REJECTED";
};
export type PersonalRecordChangeStatus = (typeof PersonalRecordChangeStatus)[keyof typeof PersonalRecordChangeStatus];
export declare const TaskStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly DONE: "DONE";
    readonly CANCELLED: "CANCELLED";
    readonly DEFAULTED: "DEFAULTED";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const TaskSubmissionStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
};
export type TaskSubmissionStatus = (typeof TaskSubmissionStatus)[keyof typeof TaskSubmissionStatus];
export declare const LeaveApplicationStatus: {
    readonly PENDING: "PENDING";
    readonly SUPERVISOR_APPROVED: "SUPERVISOR_APPROVED";
    readonly HR_ACKNOWLEDGED: "HR_ACKNOWLEDGED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type LeaveApplicationStatus = (typeof LeaveApplicationStatus)[keyof typeof LeaveApplicationStatus];
export declare const AttendanceAdapterType: {
    readonly TTLOCK: "TTLOCK";
    readonly FILE_IMPORT: "FILE_IMPORT";
};
export type AttendanceAdapterType = (typeof AttendanceAdapterType)[keyof typeof AttendanceAdapterType];
export declare const ExceptionRequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
};
export type ExceptionRequestStatus = (typeof ExceptionRequestStatus)[keyof typeof ExceptionRequestStatus];
export declare const BoardDirectiveStatus: {
    readonly ISSUED: "ISSUED";
    readonly ACKNOWLEDGED: "ACKNOWLEDGED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly REPORTED_BACK: "REPORTED_BACK";
};
export type BoardDirectiveStatus = (typeof BoardDirectiveStatus)[keyof typeof BoardDirectiveStatus];
export declare const BoardCalendarSubmissionStatus: {
    readonly SUBMITTED: "SUBMITTED";
    readonly RECEIVED: "RECEIVED";
    readonly INCOMPLETE: "INCOMPLETE";
};
export type BoardCalendarSubmissionStatus = (typeof BoardCalendarSubmissionStatus)[keyof typeof BoardCalendarSubmissionStatus];
export declare const CalendarEntryKind: {
    readonly TASK_DEADLINE: "TASK_DEADLINE";
    readonly BOARD_EVENT: "BOARD_EVENT";
    readonly PMS_CYCLE: "PMS_CYCLE";
    readonly FILING_DEADLINE: "FILING_DEADLINE";
    readonly PERSONAL: "PERSONAL";
    readonly MEETING: "MEETING";
    readonly LEAVE: "LEAVE";
};
export type CalendarEntryKind = (typeof CalendarEntryKind)[keyof typeof CalendarEntryKind];
export declare const CalendarAttendeeStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
};
export type CalendarAttendeeStatus = (typeof CalendarAttendeeStatus)[keyof typeof CalendarAttendeeStatus];
export declare const CalendarAdapterType: {
    readonly MICROSOFT_GRAPH: "MICROSOFT_GRAPH";
    readonly GOOGLE: "GOOGLE";
};
export type CalendarAdapterType = (typeof CalendarAdapterType)[keyof typeof CalendarAdapterType];
export declare const NotificationType: {
    readonly TASK_ASSIGNED: "TASK_ASSIGNED";
    readonly PERSONAL_RECORD_CHANGE_DECIDED: "PERSONAL_RECORD_CHANGE_DECIDED";
    readonly GENERIC: "GENERIC";
    readonly SCHEDULER_JOB_FAILED: "SCHEDULER_JOB_FAILED";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const EmolumentComponentType: {
    readonly SALARY: "SALARY";
    readonly ALLOWANCE: "ALLOWANCE";
    readonly COST_REFUND: "COST_REFUND";
};
export type EmolumentComponentType = (typeof EmolumentComponentType)[keyof typeof EmolumentComponentType];
export declare const AccountingBasis: {
    readonly IFRS: "IFRS";
    readonly AAOIFI: "AAOIFI";
};
export type AccountingBasis = (typeof AccountingBasis)[keyof typeof AccountingBasis];
export declare const LedgerEntityType: {
    readonly COMPANY: "COMPANY";
    readonly FUND: "FUND";
    readonly POOL: "POOL";
    readonly MANDATE: "MANDATE";
    readonly CLIENT_MONEY: "CLIENT_MONEY";
};
export type LedgerEntityType = (typeof LedgerEntityType)[keyof typeof LedgerEntityType];
export declare const LedgerEntityStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly CLOSED: "CLOSED";
};
export type LedgerEntityStatus = (typeof LedgerEntityStatus)[keyof typeof LedgerEntityStatus];
export declare const AccountType: {
    readonly ASSET: "ASSET";
    readonly LIABILITY: "LIABILITY";
    readonly EQUITY: "EQUITY";
    readonly INCOME: "INCOME";
    readonly EXPENSE: "EXPENSE";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const JournalClass: {
    readonly BASE: "BASE";
    readonly BASIS_ADJUSTMENT: "BASIS_ADJUSTMENT";
};
export type JournalClass = (typeof JournalClass)[keyof typeof JournalClass];
export declare const JournalEntryStatus: {
    readonly DRAFT: "DRAFT";
    readonly POSTED: "POSTED";
    readonly REVERSED: "REVERSED";
};
export type JournalEntryStatus = (typeof JournalEntryStatus)[keyof typeof JournalEntryStatus];
export declare const AccountingPeriodStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
};
export type AccountingPeriodStatus = (typeof AccountingPeriodStatus)[keyof typeof AccountingPeriodStatus];
export declare const TxnType: {
    readonly SUBSCRIPTION: "SUBSCRIPTION";
    readonly REDEMPTION: "REDEMPTION";
    readonly PLACEMENT: "PLACEMENT";
    readonly PROFIT_ALLOCATION: "PROFIT_ALLOCATION";
    readonly DISTRIBUTION: "DISTRIBUTION";
    readonly ROLLOVER: "ROLLOVER";
    readonly EARLY_EXIT: "EARLY_EXIT";
    readonly MATURITY_PAYOUT: "MATURITY_PAYOUT";
    readonly FEE: "FEE";
    readonly PURIFICATION: "PURIFICATION";
    readonly ADJUSTMENT: "ADJUSTMENT";
    readonly HIBAH: "HIBAH";
};
export type TxnType = (typeof TxnType)[keyof typeof TxnType];
export declare const TxnStatus: {
    readonly PENDING: "PENDING";
    readonly POSTED: "POSTED";
    readonly REVERSED: "REVERSED";
    readonly CANCELLED: "CANCELLED";
};
export type TxnStatus = (typeof TxnStatus)[keyof typeof TxnStatus];
export declare const CashbookReconciliationStatus: {
    readonly UNRECONCILED: "UNRECONCILED";
    readonly RECONCILED: "RECONCILED";
    readonly DISPUTED: "DISPUTED";
};
export type CashbookReconciliationStatus = (typeof CashbookReconciliationStatus)[keyof typeof CashbookReconciliationStatus];
export declare const FrameworkMapStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type FrameworkMapStatus = (typeof FrameworkMapStatus)[keyof typeof FrameworkMapStatus];
export declare const StatementTemplateStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type StatementTemplateStatus = (typeof StatementTemplateStatus)[keyof typeof StatementTemplateStatus];
export declare const StatementLineComputationType: {
    readonly SUM_OF_ACCOUNTS: "SUM_OF_ACCOUNTS";
    readonly SUM_OF_LINES: "SUM_OF_LINES";
    readonly FORMULA: "FORMULA";
};
export type StatementLineComputationType = (typeof StatementLineComputationType)[keyof typeof StatementLineComputationType];
export declare const RegulatorTemplateStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly RETIRED: "RETIRED";
};
export type RegulatorTemplateStatus = (typeof RegulatorTemplateStatus)[keyof typeof RegulatorTemplateStatus];
export declare const RiskMatrixStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type RiskMatrixStatus = (typeof RiskMatrixStatus)[keyof typeof RiskMatrixStatus];
export declare const RiskAppetiteDirection: {
    readonly HIGHER_BETTER: "HIGHER_BETTER";
    readonly LOWER_BETTER: "LOWER_BETTER";
};
export type RiskAppetiteDirection = (typeof RiskAppetiteDirection)[keyof typeof RiskAppetiteDirection];
export declare const RiskRegisterStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
};
export type RiskRegisterStatus = (typeof RiskRegisterStatus)[keyof typeof RiskRegisterStatus];
export declare const PortfolioPositionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly MATURED: "MATURED";
    readonly EXITED: "EXITED";
};
export type PortfolioPositionStatus = (typeof PortfolioPositionStatus)[keyof typeof PortfolioPositionStatus];
export declare const DistributionMethod: {
    readonly INCOME: "INCOME";
    readonly NAV: "NAV";
    readonly ND_MUDARABAH: "ND_MUDARABAH";
    readonly ND_WAKALAH: "ND_WAKALAH";
};
export type DistributionMethod = (typeof DistributionMethod)[keyof typeof DistributionMethod];
export declare const DistributionStatus: {
    readonly DRAFT: "DRAFT";
    readonly DECLARED: "DECLARED";
    readonly PAID: "PAID";
};
export type DistributionStatus = (typeof DistributionStatus)[keyof typeof DistributionStatus];
export declare const BudgetVersionStatus: {
    readonly DRAFT: "DRAFT";
    readonly PROPOSED: "PROPOSED";
    readonly BOARD_APPROVED: "BOARD_APPROVED";
    readonly ACTIVE: "ACTIVE";
};
export type BudgetVersionStatus = (typeof BudgetVersionStatus)[keyof typeof BudgetVersionStatus];
export declare const BudgetLineClass: {
    readonly OPEX: "OPEX";
    readonly CAPEX: "CAPEX";
    readonly REVENUE: "REVENUE";
    readonly STAFF: "STAFF";
};
export type BudgetLineClass = (typeof BudgetLineClass)[keyof typeof BudgetLineClass];
export declare const BudgetPhasingMethod: {
    readonly ACTUAL_PHASED: "ACTUAL_PHASED";
    readonly EVEN_12: "EVEN_12";
    readonly DRIVER_PCT_OF_FUM: "DRIVER_PCT_OF_FUM";
    readonly DRIVER_PCT_OF_MOBILIZATION: "DRIVER_PCT_OF_MOBILIZATION";
    readonly PRIOR_YEAR_UPLIFT: "PRIOR_YEAR_UPLIFT";
    readonly ESCALATING_MONTHLY: "ESCALATING_MONTHLY";
    readonly FIXED_MONTHLY: "FIXED_MONTHLY";
};
export type BudgetPhasingMethod = (typeof BudgetPhasingMethod)[keyof typeof BudgetPhasingMethod];
export declare const EncumbranceStatus: {
    readonly OPEN: "OPEN";
    readonly RELEASED: "RELEASED";
    readonly CONVERTED: "CONVERTED";
};
export type EncumbranceStatus = (typeof EncumbranceStatus)[keyof typeof EncumbranceStatus];
export declare const VendorStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type VendorStatus = (typeof VendorStatus)[keyof typeof VendorStatus];
export declare const PurchaseOrderStatus: {
    readonly DRAFT: "DRAFT";
    readonly ISSUED: "ISSUED";
    readonly RECEIVED: "RECEIVED";
    readonly MATCHED: "MATCHED";
    readonly CLOSED: "CLOSED";
    readonly CANCELLED: "CANCELLED";
};
export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus];
export declare const VendorInvoiceStatus: {
    readonly PENDING_MATCH: "PENDING_MATCH";
    readonly MATCHED: "MATCHED";
    readonly DISPUTED: "DISPUTED";
    readonly PAID: "PAID";
};
export type VendorInvoiceStatus = (typeof VendorInvoiceStatus)[keyof typeof VendorInvoiceStatus];
export declare const PaymentBatchStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly PAID: "PAID";
};
export type PaymentBatchStatus = (typeof PaymentBatchStatus)[keyof typeof PaymentBatchStatus];
export declare const AssetStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly FULLY_DEPRECIATED: "FULLY_DEPRECIATED";
    readonly DISPOSED: "DISPOSED";
};
export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus];
export declare const PettyCashFloatStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly CLOSED: "CLOSED";
};
export type PettyCashFloatStatus = (typeof PettyCashFloatStatus)[keyof typeof PettyCashFloatStatus];
export declare const PettyCashVoucherStatus: {
    readonly OUTSTANDING: "OUTSTANDING";
    readonly REIMBURSED: "REIMBURSED";
};
export type PettyCashVoucherStatus = (typeof PettyCashVoucherStatus)[keyof typeof PettyCashVoucherStatus];
export declare const PettyCashClaimStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly REJECTED: "REJECTED";
    readonly DISBURSED: "DISBURSED";
};
export type PettyCashClaimStatus = (typeof PettyCashClaimStatus)[keyof typeof PettyCashClaimStatus];
export declare const NdMandateParticipantType: {
    readonly INVESTOR: "INVESTOR";
    readonly FUND: "FUND";
    readonly POOL: "POOL";
};
export type NdMandateParticipantType = (typeof NdMandateParticipantType)[keyof typeof NdMandateParticipantType];
export declare const NdMandateSharingMode: {
    readonly MUDARABAH_PSR: "MUDARABAH_PSR";
    readonly WAKALAH: "WAKALAH";
};
export type NdMandateSharingMode = (typeof NdMandateSharingMode)[keyof typeof NdMandateSharingMode];
export declare const NdMandateSurplusTreatment: {
    readonly CLIENT_ALL: "CLIENT_ALL";
    readonly AGENT_RETAINS: "AGENT_RETAINS";
    readonly SHARED: "SHARED";
};
export type NdMandateSurplusTreatment = (typeof NdMandateSurplusTreatment)[keyof typeof NdMandateSurplusTreatment];
export declare const NdMandateStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly MATURED: "MATURED";
    readonly CLOSED: "CLOSED";
};
export type NdMandateStatus = (typeof NdMandateStatus)[keyof typeof NdMandateStatus];
export declare const NdMandateProvisionalStatus: {
    readonly PROVISIONAL: "PROVISIONAL";
    readonly REVERSED: "REVERSED";
    readonly TRUED_UP: "TRUED_UP";
};
export type NdMandateProvisionalStatus = (typeof NdMandateProvisionalStatus)[keyof typeof NdMandateProvisionalStatus];
export declare const KriComputeStatus: {
    readonly INSTRUMENTED: "INSTRUMENTED";
    readonly NOT_YET_INSTRUMENTED: "NOT_YET_INSTRUMENTED";
    readonly RESERVED: "RESERVED";
};
export type KriComputeStatus = (typeof KriComputeStatus)[keyof typeof KriComputeStatus];
export declare const KriRagStatus: {
    readonly GREEN: "GREEN";
    readonly AMBER: "AMBER";
    readonly RED: "RED";
    readonly AWAITING_MATRIX: "AWAITING_MATRIX";
    readonly NOT_INSTRUMENTED: "NOT_INSTRUMENTED";
    readonly INFORMATIONAL: "INFORMATIONAL";
};
export type KriRagStatus = (typeof KriRagStatus)[keyof typeof KriRagStatus];
export declare const StressModelType: {
    readonly LIQUIDITY: "LIQUIDITY";
    readonly CAPITAL_ADEQUACY: "CAPITAL_ADEQUACY";
    readonly REVENUE_SENSITIVITY: "REVENUE_SENSITIVITY";
    readonly COUNTERPARTY_DEFAULT: "COUNTERPARTY_DEFAULT";
    readonly PORTFOLIO_SHOCK: "PORTFOLIO_SHOCK";
    readonly REVERSE_STRESS: "REVERSE_STRESS";
};
export type StressModelType = (typeof StressModelType)[keyof typeof StressModelType];
export declare const StressConfigStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type StressConfigStatus = (typeof StressConfigStatus)[keyof typeof StressConfigStatus];
export declare const StressRunMode: {
    readonly SANDBOX: "SANDBOX";
    readonly BASELINE_CANDIDATE: "BASELINE_CANDIDATE";
    readonly BASELINE: "BASELINE";
};
export type StressRunMode = (typeof StressRunMode)[keyof typeof StressRunMode];
export declare const DashboardScope: {
    readonly PERSONAL: "PERSONAL";
    readonly DEPARTMENT: "DEPARTMENT";
};
export type DashboardScope = (typeof DashboardScope)[keyof typeof DashboardScope];
export declare const TilePresentation: {
    readonly KPI_TILE: "KPI_TILE";
    readonly TREND_LINE: "TREND_LINE";
    readonly PIE: "PIE";
    readonly BAR: "BAR";
    readonly TABLE: "TABLE";
};
export type TilePresentation = (typeof TilePresentation)[keyof typeof TilePresentation];
export declare const CellClass: {
    readonly AUTO: "AUTO";
    readonly ENTRY: "ENTRY";
    readonly STATIC: "STATIC";
};
export type CellClass = (typeof CellClass)[keyof typeof CellClass];
export declare const RegulatoryFilingStatus: {
    readonly DRAFT: "DRAFT";
    readonly ENTRY_IN_PROGRESS: "ENTRY_IN_PROGRESS";
    readonly SUBMITTED_FOR_CERTIFICATION: "SUBMITTED_FOR_CERTIFICATION";
    readonly CERTIFIED: "CERTIFIED";
    readonly FILED: "FILED";
};
export type RegulatoryFilingStatus = (typeof RegulatoryFilingStatus)[keyof typeof RegulatoryFilingStatus];
export declare const WmCustodyFlag: {
    readonly ONE17: "ONE17";
    readonly EXTERNAL: "EXTERNAL";
};
export type WmCustodyFlag = (typeof WmCustodyFlag)[keyof typeof WmCustodyFlag];
export declare const WmVerificationTag: {
    readonly DECLARED: "DECLARED";
    readonly VERIFIED: "VERIFIED";
};
export type WmVerificationTag = (typeof WmVerificationTag)[keyof typeof WmVerificationTag];
export declare const WmShariahScreenTag: {
    readonly SCREENED_COMPLIANT: "SCREENED_COMPLIANT";
    readonly SCREENED_NON_COMPLIANT: "SCREENED_NON_COMPLIANT";
    readonly UNSCREENED: "UNSCREENED";
};
export type WmShariahScreenTag = (typeof WmShariahScreenTag)[keyof typeof WmShariahScreenTag];
export declare const WmClientTier: {
    readonly BASE_MASS: "BASE_MASS";
    readonly CORE_MASS: "CORE_MASS";
    readonly UPPER_MASS: "UPPER_MASS";
    readonly MASS_AFFLUENT: "MASS_AFFLUENT";
    readonly AFFLUENT: "AFFLUENT";
    readonly HNI: "HNI";
    readonly VHNI: "VHNI";
    readonly UHNI: "UHNI";
    readonly CENTIMILLIONAIRE: "CENTIMILLIONAIRE";
    readonly BILLIONAIRE: "BILLIONAIRE";
};
export type WmClientTier = (typeof WmClientTier)[keyof typeof WmClientTier];
export declare const WmHoldingActionType: {
    readonly TOP_UP: "TOP_UP";
    readonly REDEMPTION: "REDEMPTION";
};
export type WmHoldingActionType = (typeof WmHoldingActionType)[keyof typeof WmHoldingActionType];
export declare const WmHoldingActionStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIONED: "ACTIONED";
};
export type WmHoldingActionStatus = (typeof WmHoldingActionStatus)[keyof typeof WmHoldingActionStatus];
export declare const WmRiskBand: {
    readonly CONSERVATIVE: "CONSERVATIVE";
    readonly MODERATE: "MODERATE";
    readonly BALANCED: "BALANCED";
    readonly GROWTH: "GROWTH";
    readonly AGGRESSIVE: "AGGRESSIVE";
};
export type WmRiskBand = (typeof WmRiskBand)[keyof typeof WmRiskBand];
export declare const WmAdvisoryResponse: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
    readonly DEFERRED: "DEFERRED";
};
export type WmAdvisoryResponse = (typeof WmAdvisoryResponse)[keyof typeof WmAdvisoryResponse];
export declare const WmRiskAssessmentStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
};
export type WmRiskAssessmentStatus = (typeof WmRiskAssessmentStatus)[keyof typeof WmRiskAssessmentStatus];
export declare const ZakatRateBasis: {
    readonly LUNAR: "LUNAR";
    readonly GREGORIAN: "GREGORIAN";
};
export type ZakatRateBasis = (typeof ZakatRateBasis)[keyof typeof ZakatRateBasis];
export declare const ZakatSubscriptionRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
};
export type ZakatSubscriptionRequestStatus = (typeof ZakatSubscriptionRequestStatus)[keyof typeof ZakatSubscriptionRequestStatus];
export declare const ZakatAssessmentStatus: {
    readonly DRAFT: "DRAFT";
    readonly CLIENT_AGREED: "CLIENT_AGREED";
    readonly AWAITING_SHARIAH_CERTIFICATION: "AWAITING_SHARIAH_CERTIFICATION";
    readonly CERTIFIED: "CERTIFIED";
};
export type ZakatAssessmentStatus = (typeof ZakatAssessmentStatus)[keyof typeof ZakatAssessmentStatus];
export declare const ZakatScheduleType: {
    readonly CASH_BANK: "CASH_BANK";
    readonly GOLD_SILVER: "GOLD_SILVER";
    readonly INVESTMENT: "INVESTMENT";
    readonly FIXED_ASSET: "FIXED_ASSET";
    readonly RECEIVABLE: "RECEIVABLE";
    readonly LIABILITY: "LIABILITY";
};
export type ZakatScheduleType = (typeof ZakatScheduleType)[keyof typeof ZakatScheduleType];
export declare const ZakatItemZakatability: {
    readonly ZAKATABLE: "ZAKATABLE";
    readonly NON_ZAKATABLE: "NON_ZAKATABLE";
    readonly DOUBTFUL: "DOUBTFUL";
};
export type ZakatItemZakatability = (typeof ZakatItemZakatability)[keyof typeof ZakatItemZakatability];
export declare const ZakatDeclarationSource: {
    readonly STAFF: "STAFF";
    readonly CLIENT: "CLIENT";
};
export type ZakatDeclarationSource = (typeof ZakatDeclarationSource)[keyof typeof ZakatDeclarationSource];
export declare const PmsCycleType: {
    readonly INCENTIVE_CYCLE: "INCENTIVE_CYCLE";
    readonly ANNUAL_APPRAISAL: "ANNUAL_APPRAISAL";
};
export type PmsCycleType = (typeof PmsCycleType)[keyof typeof PmsCycleType];
export declare const PmsCycleStatus: {
    readonly OPEN: "OPEN";
    readonly SCORING: "SCORING";
    readonly VALIDATION: "VALIDATION";
    readonly APPROVED: "APPROVED";
    readonly INCENTIVE_COMPUTED: "INCENTIVE_COMPUTED";
    readonly PAID: "PAID";
    readonly CLOSED: "CLOSED";
};
export type PmsCycleStatus = (typeof PmsCycleStatus)[keyof typeof PmsCycleStatus];
export declare const ScoreSubmissionStatus: {
    readonly SELF_SCORED: "SELF_SCORED";
    readonly VALIDATED: "VALIDATED";
    readonly REJECTED: "REJECTED";
};
export type ScoreSubmissionStatus = (typeof ScoreSubmissionStatus)[keyof typeof ScoreSubmissionStatus];
export declare const GateOutcome: {
    readonly FULL_RELEASE: "FULL_RELEASE";
    readonly CAPPED: "CAPPED";
    readonly DEFERRED: "DEFERRED";
    readonly SUSPENDED: "SUSPENDED";
};
export type GateOutcome = (typeof GateOutcome)[keyof typeof GateOutcome];
export declare const PayrollRunStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly POSTED: "POSTED";
};
export type PayrollRunStatus = (typeof PayrollRunStatus)[keyof typeof PayrollRunStatus];
export declare const TalentRecommendationType: {
    readonly WELFARE: "WELFARE";
    readonly REWARD: "REWARD";
};
export type TalentRecommendationType = (typeof TalentRecommendationType)[keyof typeof TalentRecommendationType];
export declare const TalentRecommendationStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type TalentRecommendationStatus = (typeof TalentRecommendationStatus)[keyof typeof TalentRecommendationStatus];
export declare const LeadStatus: {
    readonly NEW: "NEW";
    readonly CONTACTED: "CONTACTED";
    readonly QUALIFIED: "QUALIFIED";
    readonly CONVERTED: "CONVERTED";
    readonly LOST: "LOST";
};
export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];
export declare const CommunicationDirection: {
    readonly INBOUND: "INBOUND";
    readonly OUTBOUND: "OUTBOUND";
};
export type CommunicationDirection = (typeof CommunicationDirection)[keyof typeof CommunicationDirection];
export declare const InvestorOnboardingStage: {
    readonly STAGE_1_EXPRESS: "STAGE_1_EXPRESS";
    readonly STAGE_2_COMPLETE: "STAGE_2_COMPLETE";
};
export type InvestorOnboardingStage = (typeof InvestorOnboardingStage)[keyof typeof InvestorOnboardingStage];
export declare const SanctionsScreenResult: {
    readonly CLEAR: "CLEAR";
    readonly FLAGGED: "FLAGGED";
};
export type SanctionsScreenResult = (typeof SanctionsScreenResult)[keyof typeof SanctionsScreenResult];
export declare const RiskProfileGrade: {
    readonly LOW: "LOW";
    readonly MEDIUM_LOW: "MEDIUM_LOW";
    readonly HIGH: "HIGH";
};
export type RiskProfileGrade = (typeof RiskProfileGrade)[keyof typeof RiskProfileGrade];
export declare const EddRecommendation: {
    readonly APPROVE_WITH_CONDITIONS: "APPROVE_WITH_CONDITIONS";
    readonly DECLINE: "DECLINE";
};
export type EddRecommendation = (typeof EddRecommendation)[keyof typeof EddRecommendation];
export declare const MdOnboardingDecision: {
    readonly APPROVED: "APPROVED";
    readonly DECLINED: "DECLINED";
};
export type MdOnboardingDecision = (typeof MdOnboardingDecision)[keyof typeof MdOnboardingDecision];
export declare const Ic2Outcome: {
    readonly SATISFACTORY: "SATISFACTORY";
    readonly UNSATISFACTORY: "UNSATISFACTORY";
};
export type Ic2Outcome = (typeof Ic2Outcome)[keyof typeof Ic2Outcome];
export declare const PaymentInflowStatus: {
    readonly DECLARED_MATCHED: "DECLARED_MATCHED";
    readonly SUSPENSE: "SUSPENSE";
    readonly COMPLIANCE_FLAGGED: "COMPLIANCE_FLAGGED";
};
export type PaymentInflowStatus = (typeof PaymentInflowStatus)[keyof typeof PaymentInflowStatus];
export declare const PublicIntakeType: {
    readonly INVESTOR_EXPRESS: "INVESTOR_EXPRESS";
    readonly COUNTERPARTY: "COUNTERPARTY";
};
export type PublicIntakeType = (typeof PublicIntakeType)[keyof typeof PublicIntakeType];
export declare const PublicIntakeStatus: {
    readonly PENDING: "PENDING";
    readonly PROMOTED: "PROMOTED";
    readonly REJECTED: "REJECTED";
};
export type PublicIntakeStatus = (typeof PublicIntakeStatus)[keyof typeof PublicIntakeStatus];
export declare const PrivacyNoticeContext: {
    readonly INVESTOR_ONBOARDING_STAGE_1: "INVESTOR_ONBOARDING_STAGE_1";
    readonly INVESTOR_ONBOARDING_STAGE_2: "INVESTOR_ONBOARDING_STAGE_2";
    readonly COUNTERPARTY_ONBOARDING: "COUNTERPARTY_ONBOARDING";
    readonly INVESTOR_PORTAL_FIRST_LOGIN: "INVESTOR_PORTAL_FIRST_LOGIN";
    readonly COUNTERPARTY_PORTAL_FIRST_LOGIN: "COUNTERPARTY_PORTAL_FIRST_LOGIN";
    readonly PUBLIC_INTAKE: "PUBLIC_INTAKE";
};
export type PrivacyNoticeContext = (typeof PrivacyNoticeContext)[keyof typeof PrivacyNoticeContext];
export declare const MarketingSendStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly SENT: "SENT";
    readonly REJECTED: "REJECTED";
};
export type MarketingSendStatus = (typeof MarketingSendStatus)[keyof typeof MarketingSendStatus];
export declare const CounterpartyRestructureRequestType: {
    readonly EXTENSION: "EXTENSION";
    readonly RESTRUCTURE: "RESTRUCTURE";
};
export type CounterpartyRestructureRequestType = (typeof CounterpartyRestructureRequestType)[keyof typeof CounterpartyRestructureRequestType];
export declare const CounterpartyRestructureRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly DECLINED: "DECLINED";
};
export type CounterpartyRestructureRequestStatus = (typeof CounterpartyRestructureRequestStatus)[keyof typeof CounterpartyRestructureRequestStatus];
export declare const FacilityApplicationStatus: {
    readonly DRAFT: "DRAFT";
    readonly SUBMITTED: "SUBMITTED";
    readonly APPROVED: "APPROVED";
    readonly DECLINED: "DECLINED";
    readonly DISBURSED: "DISBURSED";
};
export type FacilityApplicationStatus = (typeof FacilityApplicationStatus)[keyof typeof FacilityApplicationStatus];
export declare const InvestmentMemoStatus: {
    readonly DRAFT: "DRAFT";
    readonly SUBMITTED: "SUBMITTED";
    readonly CIO_APPROVED: "CIO_APPROVED";
    readonly MD_APPROVED: "MD_APPROVED";
    readonly CIO_REJECTED: "CIO_REJECTED";
};
export type InvestmentMemoStatus = (typeof InvestmentMemoStatus)[keyof typeof InvestmentMemoStatus];
export declare const RepaymentObligationStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly RESTRUCTURED: "RESTRUCTURED";
    readonly DEFAULTED: "DEFAULTED";
};
export type RepaymentObligationStatus = (typeof RepaymentObligationStatus)[keyof typeof RepaymentObligationStatus];
export declare const PaymentReminderDispatchStatus: {
    readonly PENDING_VALIDATION: "PENDING_VALIDATION";
    readonly DISPATCHED: "DISPATCHED";
    readonly REJECTED: "REJECTED";
};
export type PaymentReminderDispatchStatus = (typeof PaymentReminderDispatchStatus)[keyof typeof PaymentReminderDispatchStatus];
export declare const ComplaintStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type ComplaintStatus = (typeof ComplaintStatus)[keyof typeof ComplaintStatus];
export declare const DsrCategory: {
    readonly ACCESS: "ACCESS";
    readonly RECTIFICATION: "RECTIFICATION";
    readonly ERASURE: "ERASURE";
    readonly OBJECTION: "OBJECTION";
    readonly PORTABILITY: "PORTABILITY";
};
export type DsrCategory = (typeof DsrCategory)[keyof typeof DsrCategory];
export declare const BreachSeverity: {
    readonly UNASSESSED: "UNASSESSED";
    readonly LOW: "LOW";
    readonly MODERATE: "MODERATE";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type BreachSeverity = (typeof BreachSeverity)[keyof typeof BreachSeverity];
export declare const BreachRegisterStatus: {
    readonly OPEN: "OPEN";
    readonly ASSESSED: "ASSESSED";
    readonly NDPC_NOTIFIED: "NDPC_NOTIFIED";
    readonly DATA_SUBJECTS_NOTIFIED: "DATA_SUBJECTS_NOTIFIED";
    readonly CLOSED: "CLOSED";
};
export type BreachRegisterStatus = (typeof BreachRegisterStatus)[keyof typeof BreachRegisterStatus];
export declare const OversightPrincipalType: {
    readonly INVESTOR: "INVESTOR";
    readonly COUNTERPARTY: "COUNTERPARTY";
};
export type OversightPrincipalType = (typeof OversightPrincipalType)[keyof typeof OversightPrincipalType];
export declare const ScheduledJobRunStatus: {
    readonly RUNNING: "RUNNING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
};
export type ScheduledJobRunStatus = (typeof ScheduledJobRunStatus)[keyof typeof ScheduledJobRunStatus];
export declare const BackupRunStatus: {
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
};
export type BackupRunStatus = (typeof BackupRunStatus)[keyof typeof BackupRunStatus];
export declare const AiContextType: {
    readonly NONE: "NONE";
    readonly WORKFLOW_STEP: "WORKFLOW_STEP";
    readonly REPORT_WORKSPACE: "REPORT_WORKSPACE";
    readonly ORG_UNIT_SCOPED: "ORG_UNIT_SCOPED";
};
export type AiContextType = (typeof AiContextType)[keyof typeof AiContextType];
export declare const AiModelTier: {
    readonly MID_TIER: "MID_TIER";
    readonly FRONTIER_TIER: "FRONTIER_TIER";
};
export type AiModelTier = (typeof AiModelTier)[keyof typeof AiModelTier];
export declare const DataPointSourceType: {
    readonly REPORT_RUN_FIELD: "REPORT_RUN_FIELD";
    readonly LIVE_QUERY: "LIVE_QUERY";
};
export type DataPointSourceType = (typeof DataPointSourceType)[keyof typeof DataPointSourceType];
export declare const AiInteractionOutcome: {
    readonly ALLOWED: "ALLOWED";
    readonly REFUSED: "REFUSED";
};
export type AiInteractionOutcome = (typeof AiInteractionOutcome)[keyof typeof AiInteractionOutcome];
export declare const StakeholderReportStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPROVED: "APPROVED";
    readonly DISTRIBUTED: "DISTRIBUTED";
};
export type StakeholderReportStatus = (typeof StakeholderReportStatus)[keyof typeof StakeholderReportStatus];
export declare const StakeholderAudienceClass: {
    readonly INTERNAL: "INTERNAL";
    readonly CLIENT: "CLIENT";
    readonly REGULATOR: "REGULATOR";
    readonly BOARD: "BOARD";
};
export type StakeholderAudienceClass = (typeof StakeholderAudienceClass)[keyof typeof StakeholderAudienceClass];
export declare const PaymentGatewayInflowDecisionType: {
    readonly REJECT: "REJECT";
    readonly REVERSAL: "REVERSAL";
};
export type PaymentGatewayInflowDecisionType = (typeof PaymentGatewayInflowDecisionType)[keyof typeof PaymentGatewayInflowDecisionType];
export declare const PaymentGatewayInflowStatus: {
    readonly UNMATCHED: "UNMATCHED";
    readonly MATCHED: "MATCHED";
    readonly PROMOTED: "PROMOTED";
    readonly REVERSED: "REVERSED";
    readonly REJECTED: "REJECTED";
};
export type PaymentGatewayInflowStatus = (typeof PaymentGatewayInflowStatus)[keyof typeof PaymentGatewayInflowStatus];
export declare const ProfitPaymentInterval: {
    readonly MONTHLY: "MONTHLY";
    readonly QUARTERLY: "QUARTERLY";
    readonly SEMI_ANNUAL: "SEMI_ANNUAL";
    readonly ANNUAL: "ANNUAL";
    readonly AT_MATURITY: "AT_MATURITY";
};
export type ProfitPaymentInterval = (typeof ProfitPaymentInterval)[keyof typeof ProfitPaymentInterval];
export declare const PayoutBatchStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly INSTRUCTION_ISSUED: "INSTRUCTION_ISSUED";
    readonly PAID: "PAID";
};
export type PayoutBatchStatus = (typeof PayoutBatchStatus)[keyof typeof PayoutBatchStatus];
export declare const TaxType: {
    readonly WHT: "WHT";
    readonly VAT: "VAT";
    readonly STAMP_DUTY: "STAMP_DUTY";
};
export type TaxType = (typeof TaxType)[keyof typeof TaxType];
export declare const TaxRemittanceStatus: {
    readonly PENDING: "PENDING";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly INSTRUCTION_ISSUED: "INSTRUCTION_ISSUED";
    readonly REMITTED: "REMITTED";
};
export type TaxRemittanceStatus = (typeof TaxRemittanceStatus)[keyof typeof TaxRemittanceStatus];
export declare const ScreeningListSourceCode: {
    readonly OFAC: "OFAC";
    readonly UN_SC: "UN_SC";
    readonly UK_SANCTIONS: "UK_SANCTIONS";
    readonly EU_FSF: "EU_FSF";
    readonly NG_NFIU: "NG_NFIU";
};
export type ScreeningListSourceCode = (typeof ScreeningListSourceCode)[keyof typeof ScreeningListSourceCode];
export declare const ScreeningListFileFormat: {
    readonly CSV: "CSV";
    readonly XML: "XML";
};
export type ScreeningListFileFormat = (typeof ScreeningListFileFormat)[keyof typeof ScreeningListFileFormat];
export declare const ScreeningProviderMode: {
    readonly LOCAL_LISTS: "LOCAL_LISTS";
    readonly COMMERCIAL: "COMMERCIAL";
    readonly MANUAL: "MANUAL";
};
export type ScreeningProviderMode = (typeof ScreeningProviderMode)[keyof typeof ScreeningProviderMode];
export declare const ScreeningSubjectType: {
    readonly INVESTOR: "INVESTOR";
    readonly COUNTERPARTY: "COUNTERPARTY";
};
export type ScreeningSubjectType = (typeof ScreeningSubjectType)[keyof typeof ScreeningSubjectType];
export declare const ScreeningHitAdjudicationOutcome: {
    readonly TRUE_MATCH: "TRUE_MATCH";
    readonly FALSE_POSITIVE: "FALSE_POSITIVE";
};
export type ScreeningHitAdjudicationOutcome = (typeof ScreeningHitAdjudicationOutcome)[keyof typeof ScreeningHitAdjudicationOutcome];
