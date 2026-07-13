declare const ENTITY_TYPES: readonly ["HNWI_INDIVIDUAL", "CORPORATE", "TRUST", "COOPERATIVE", "PENSION", "FAMILY_OFFICE", "OTHER"];
export declare class OnboardInvestorDto {
    fullLegalName: string;
    entityType: (typeof ENTITY_TYPES)[number];
    nationality: string;
    taxIdentificationNumber: string;
    dateOfBirthOrIncorporation?: string;
    contactEmail: string;
    contactPhone: string;
    registeredAddress: string;
    sourceOfFunds: string;
    authorisedSignatories?: unknown;
}
declare class ScreeningChecklistEntryDto {
    itemCode: string;
    listVersionOrDate: string;
    notes?: string;
}
export declare class RecordScreeningDto {
    listsChecked: ScreeningChecklistEntryDto[];
    searchTermsUsed: string;
    result: 'NO_MATCH' | 'POTENTIAL_MATCH' | 'MATCH';
    countersignerUserId?: string;
    notes?: string;
}
export declare class WorkflowDecisionDto {
    notes?: string;
}
export declare class SetAmlRiskRatingDto {
    amlRiskRating: 'LOW' | 'MEDIUM' | 'HIGH';
}
export declare class RecordInvestorRiskAssessmentDto {
    riskMetricGrades: {
        metricCode: string;
        grade: 'LOW' | 'MEDIUM' | 'HIGH';
        rationale: string;
    }[];
    pepSanctionsGrid: {
        target: 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER' | 'INVESTOR_OR_INSTITUTIONAL_NAME';
        pepResult: 'CLEAR' | 'FLAGGED';
        sanctionsResult: 'CLEAR' | 'FLAGGED';
    }[];
    complianceObservations?: string;
}
export declare class RecordInvestorIc1ReviewDto {
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    pass: boolean;
}
export declare class RecordInvestorRiskReviewDto {
    eddChecklist?: Record<string, 'DONE' | 'N_A'>;
    eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
    eddConditionsOrBasis?: string;
    periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
    riskNotes?: string;
}
export declare class RecordInvestorMdDecisionDto {
    decision: 'APPROVED' | 'DECLINED';
    conditionsOrReason?: string;
}
export declare class RecordInvestorIc2ReviewDto {
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    outcome: 'SATISFACTORY' | 'UNSATISFACTORY';
}
export declare class PrepareFilingRunDto {
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    periodStart: string;
    periodEnd: string;
}
export declare class SetEntryValueDto {
    value: string;
}
export declare class RecordSecAckDto {
    ackRef: string;
}
export declare class CertifyFilingDto {
    workflowInstanceId: string;
}
export declare class CalibrateFieldDto {
    page: number;
    xPt: number;
    yPt: number;
    label: string;
    cellClass: 'AUTO' | 'ENTRY' | 'STATIC';
    sourceKey?: string;
    staticValue?: string;
}
export declare class CalibrateCellDto {
    sheetName: string;
    cellAddress: string;
    label: string;
    cellClass: 'AUTO' | 'ENTRY' | 'STATIC';
    sourceKey?: string;
    staticValue?: string;
}
export declare class OnboardWmClientDto {
    investorId: string;
    advisorUserId?: string;
}
export declare class DeclareClientAssetDto {
    assetClassCode: string;
    description: string;
    quantity?: number;
    declaredValueKobo: string;
    valuationDate: string;
    custodyFlag: 'ONE17' | 'EXTERNAL';
    evidenceDocumentId?: string;
    maturityDate?: string;
    tenorMonths?: number;
    scheduledProfitTakingDates?: string[];
    targetReturnPct?: number;
}
export declare class UpdateWmFxRateDto {
    nairaPerUsd: number;
}
export declare class SubmitHoldingActionRequestDto {
    requestedAmountKobo: string;
    notes?: string;
}
export declare class SetShariahScreenDto {
    tag: 'SCREENED_COMPLIANT' | 'SCREENED_NON_COMPLIANT' | 'UNSCREENED';
}
export declare class SetAllocationPolicyDto {
    targetAllocations: Record<string, number>;
    riskBand: string;
}
export declare class SetRiskProfileDto {
    questionnaireResponses: Record<string, unknown>;
    riskBand: string;
}
export declare class SetGrowthPlanDto {
    horizon: string;
    milestones: unknown;
    targetGlidePath: unknown;
    reviewSchedule: string;
}
export declare class CreateAdvisoryRecordDto {
    recommendation: string;
    rationale: string;
    riskNotes?: string;
    shariahNote?: string;
}
export declare class RunSandboxRiskAssessmentDto {
    scenarioCode: string;
}
export declare class ChargeAdvisoryFeeDto {
    ledgerEntityCode: string;
    amountKobo: string;
    drAccountCodeOverride: string;
    crAccountCodeOverride: string;
    entryDate: string;
}
export declare class StartCycleDto {
    cycleType: 'INCENTIVE_CYCLE' | 'ANNUAL_APPRAISAL';
    orgUnitCode?: string;
    periodStart: string;
    periodEnd: string;
}
declare class KpiScoreEntryDto {
    kpiDefinitionId: string;
    selfScorePct: number;
}
export declare class SubmitSelfScoreDto {
    employeeId: string;
    scores: KpiScoreEntryDto[];
}
export declare class AdjustValidatedScoreDto {
    kpiDefinitionId: string;
    validatedScorePct: number;
}
export declare class RecordBehaviouralGateDto {
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string;
    evidenceRef?: string;
    severity: string;
}
export declare class ProposeScorecardOverrideDto {
    employeeId: string;
    kpiDefinitionId: string;
    overrideWeightPct: number;
    reason: string;
}
export declare class LogActivityDto {
    employeeId: string;
    kpiDefinitionId: string;
    activityText: string;
    taskRef?: string;
}
export declare class RunPayrollDto {
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    drStaffCostAccountCode: string;
    drIncentiveExpenseAccountCode: string;
    crPayePayableAccountCode: string;
    crPensionPayableAccountCode: string;
    crNhfPayableAccountCode: string;
    crNetPayPayableAccountCode: string;
}
export declare class ProposeEmolumentComponentDto {
    cadre: string;
    notch: number;
    component: string;
    componentType: 'SALARY' | 'ALLOWANCE' | 'COST_REFUND';
    annualAmountKobo: string;
    taxable: boolean;
    effectiveFrom: string;
}
export declare class CreateWelfareSchemeDto {
    name: string;
    description?: string;
}
export declare class CreateRewardTypeDto {
    name: string;
    description?: string;
}
export declare class RecommendTalentDto {
    employeeId: string;
    recommendationType: 'WELFARE' | 'REWARD';
    welfareSchemeId?: string;
    rewardTypeId?: string;
    appraisalCycleId?: string;
    justification: string;
}
export declare class PublicInvestorExpressIntakeDto {
    fullLegalName: string;
    entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
    nationality: string;
    bvn?: string;
    rcNumber?: string;
    contactEmail: string;
    contactPhone: string;
    privacyNoticeAcknowledged: boolean;
    marketingConsent?: boolean;
}
export declare class PublicCounterpartyIntakeDto {
    legalName: string;
    counterpartyType: string;
    rcNumber?: string;
    country?: string;
    purposeOfFinancing: string;
    amountSoughtKobo: string;
    expectedSourceOfRepayment: string;
    creditBureauConsent: boolean;
    privacyNoticeAcknowledged: boolean;
}
export declare class PromoteInvestorIntakeDto {
    sanctionsScreenResult: 'CLEAR' | 'FLAGGED';
}
export declare class RejectIntakeDto {
    reason: string;
}
export declare class ProposeStrategyStatementDto {
    statementTypeCode: string;
    content: string;
    explanation?: string;
}
export declare class AddStatementTypeConfigDto {
    code: string;
    label: string;
    description?: string;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
}
export declare class ApproveStrategyStatementDto {
    boardResolutionRef: string;
}
export declare class UpdatePillarGovernanceDto {
    explanation?: string;
    boardResolutionRef?: string;
}
export declare class UpdateObjectiveGovernanceDto {
    explanation?: string;
    boardResolutionRef?: string;
}
export declare class ProposePillarDto {
    code: string;
    name: string;
    description?: string;
}
export declare class ApprovePillarDto {
    boardResolutionRef: string;
}
export declare class ProposeObjectiveDto {
    code: string;
    name: string;
    pillarCode: string;
    explanation?: string;
}
export declare class ApproveObjectiveDto {
    boardResolutionRef: string;
}
export declare class MapKraToObjectiveDto {
    kraCode: string;
    objectiveCode: string;
}
export declare class ProposeKpiDefinitionDto {
    kraCode: string;
    tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
    kpiText: string;
    kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
    objectiveText?: string;
    exampleActivity?: string;
    measurementBasis?: 'AUTO' | 'MANUAL' | 'HYBRID';
    frequency?: string;
}
declare class WeightMatrixClassEntryDto {
    kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
    weightPct: number;
}
export declare class ProposeWeightMatrixVersionDto {
    orgUnitCode: string;
    tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
    weights: WeightMatrixClassEntryDto[];
}
export declare class EstablishFloatDto {
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: string;
    singleVoucherCapKobo: string;
}
export declare class AdjustFloatCapsDto {
    floatCeilingKobo?: string;
    singleVoucherCapKobo?: string;
}
export declare class CaptureVoucherDto {
    floatId: string;
    voucherDate: string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: string;
}
export declare class InitiateReplenishmentClaimDto {
    floatId: string;
    voucherIds: string[];
}
export declare class RecordSpotCheckDto {
    floatId: string;
    countedKobo: string;
    notes?: string;
}
export declare class ProposeLetterheadVersionDto {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
}
export declare class ApproveLetterheadVersionDto {
}
export declare class ProposeCertificateTemplateDto {
    productClass: 'HF_UNIT_NAV' | 'POOL_ND_PSR' | 'ND_WAKALAH';
    disclaimerText: string;
    secRuleDisclaimer: string;
}
export declare class ApproveCertificateTemplateDto {
}
declare const LETTER_TYPES: readonly ["WELCOME", "MATURITY_NOTICE", "ROLLOVER_CONFIRMATION", "AD_HOC", "BANK_INSTRUCTION", "TAX_REMITTANCE_INSTRUCTION"];
type LetterTypeDto = (typeof LETTER_TYPES)[number];
export declare class ProposeLetterTemplateDto {
    letterType: LetterTypeDto;
    bodyTemplate: string;
}
export declare class ApproveLetterTemplateDto {
}
export declare class GenerateLetterDto {
    letterType: LetterTypeDto;
    investorId?: string;
    counterpartyId?: string;
    productAccountId?: string;
    ndMandateAccountId?: string;
    extraMergeFields?: Record<string, string>;
}
export declare class RejectLetterInstanceDto {
    notes?: string;
}
export declare class PublishStrategyDto {
    summary: string;
}
export declare class UploadMarketingResourceDto {
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
}
export declare class SubscribeMarketingDto {
    email: string;
    fullName?: string;
    segments: string[];
}
export declare class UnsubscribeMarketingDto {
    email: string;
    token: string;
}
export declare class InitiateMarketingSendDto {
    subject: string;
    body: string;
    targetSegments: string[];
    resourceId?: string;
}
export declare class OnboardCounterpartyDto {
    legalName: string;
    counterpartyType: string;
    rcNumber?: string;
    country?: string;
    purposeOfFinancing: string;
    amountSoughtKobo: string;
    expectedSourceOfRepayment: string;
    creditBureauConsent: boolean;
    shariahCertRef?: string;
    shariahCertExpiry?: string;
    contactEmail?: string;
}
export declare class RecordCounterpartyRiskAssessmentDto {
    riskMetricGrades: {
        metricCode: string;
        grade: 'LOW' | 'MEDIUM' | 'HIGH';
        rationale: string;
    }[];
    pepSanctionsGrid: {
        target: 'INVESTEE_OR_INSTITUTIONAL_NAME' | 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER';
        pepResult: 'CLEAR' | 'FLAGGED';
        sanctionsResult: 'CLEAR' | 'FLAGGED';
    }[];
    complianceObservations?: string;
}
export declare class RecordCounterpartyIc1ReviewDto {
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    pass: boolean;
}
export declare class RecordCounterpartyRiskReviewDto {
    eddChecklist?: Record<string, 'DONE' | 'N_A'>;
    eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
    eddConditionsOrBasis?: string;
    periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
    riskNotes?: string;
    approvedExposureLimitKobo?: string;
}
export declare class RecordCounterpartyMdDecisionDto {
    decision: 'APPROVED' | 'DECLINED';
    conditionsOrReason?: string;
}
export declare class RecordCounterpartyIc2ReviewDto {
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    outcome: 'SATISFACTORY' | 'UNSATISFACTORY';
}
export declare class RequestCounterpartyRestructureDto {
    requestType: 'EXTENSION' | 'RESTRUCTURE';
    extensionMonths?: number;
    reason: string;
}
export declare class DecideCounterpartyRestructureDto {
    decision: 'APPROVED' | 'DECLINED';
    notes?: string;
}
export declare class ToggleRestructuringFeatureDto {
    enabled: boolean;
}
export declare class SubmitCounterpartyEnquiryDto {
    subject?: string;
    message: string;
}
export declare class RaiseComplaintDto {
    investorId?: string;
    counterpartyId?: string;
    category: string;
    description: string;
    isDsr?: boolean;
    dsrCategory?: 'ACCESS' | 'RECTIFICATION' | 'ERASURE' | 'OBJECTION' | 'PORTABILITY';
}
export declare class AssignComplaintOwnerDto {
    ownerUserId: string;
}
export declare class EscalateComplaintDto {
    escalatedToUserId: string;
}
export declare class ResolveComplaintDto {
    resolutionNotes: string;
    dsrLegalBasis?: string;
}
export declare class CreateFundProductDto {
    code: string;
    name: string;
    engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
}
export declare class ApproveProductShariahDto {
    ssbResolutionRef: string;
}
export declare class UpdateZakatNisabConfigDto {
    nisabGoldGrams: number;
    goldPricePerGramKobo: string;
}
export declare class CreateZakatAssessmentDto {
    assessmentDateGregorian: string;
    assessmentDateHijri: string;
}
export declare class DeclareZakatScheduleItemDto {
    scheduleType: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
    description: string;
    amountKobo: string;
    zakatability: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
}
export declare class CreateRepaymentObligationDto {
    facilityApplicationId?: string;
    dueDate: string;
    amountKobo: string;
}
export declare class AssignFileManagingOfficerDto {
    officerUserId: string;
}
export declare class RejectDispatchDto {
    reason?: string;
}
export declare class UpdateLadderRungDto {
    channels?: string[];
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isActive?: boolean;
}
export declare class ConfigureBureauProviderDto {
    providerSlot: number;
    name: string;
    apiConfig: Record<string, unknown>;
    costPerPullKobo: string;
    isActive: boolean;
}
export declare class UpdateBureauPolicyDto {
    minIntervalDays: number;
}
export declare class ProposeRiskMatrixVersionDto {
    cloneFromVersionId?: string;
}
export declare class UpdateRiskCategoryThresholdsDto {
    greenThreshold?: number;
    amberThreshold?: number;
    redThreshold?: number;
}
export declare class ApproveRiskMatrixVersionDto {
    boardResolutionRef: string;
}
export declare class ApproveRiskRegisterEntryDto {
    boardResolutionRef?: string;
}
export declare class RunStressTestDto {
    modelType: 'LIQUIDITY' | 'CAPITAL_ADEQUACY' | 'REVENUE_SENSITIVITY' | 'COUNTERPARTY_DEFAULT' | 'PORTFOLIO_SHOCK' | 'REVERSE_STRESS';
    scenarioCode?: string;
    ledgerEntityCode: string;
    runMode: 'SANDBOX' | 'BASELINE_CANDIDATE';
}
export declare class RecordFacilityFundAccountingTermsDto {
    targetedReturnPct: number;
}
export declare class DraftInvestmentMemoDto {
    dealSummary: string;
    structureType: string;
    amountKobo: string;
    tenorMonths: number;
    targetReturnPct: number;
    riskNotes: string;
    shariahNotes: string;
    collateralNotes: string;
}
export declare class CommitteeApproveInvestmentMemoDto {
    icResolutionRef: string;
}
export declare class ProposeInvestmentMemoThresholdDto {
    thresholdKobo: string;
}
export declare class IssueBoardDirectiveDto {
    title: string;
    description: string;
    committeeTag?: string;
    resolutionRef?: string;
    dueAt: string;
}
export declare class CreateBoardCalendarEventDto {
    title: string;
    description?: string;
    committeeTag?: string;
    startsAt: string;
    endsAt?: string;
}
export declare class UpdateBoardCalendarReminderConfigDto {
    daysBefore: number;
}
export declare class UploadBoardMinutesDto {
    title: string;
    fileReference: string;
    committeeTag?: string;
}
export declare class TransmitBoardMinutesDto {
    recipientUserId: string;
}
export declare class AttachDocumentDto {
    entityType: string;
    entityId: string;
    documentType: string;
    fileReference: string;
}
export declare class RequiredDocumentConfigDto {
    applicationType: string;
    documentType: string;
}
declare class JournalEntryLineDto {
    accountCode: string;
    debitKobo?: string;
    creditKobo?: string;
    description?: string;
}
export declare class CreateJournalEntryDto {
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: string;
    description: string;
    lines: JournalEntryLineDto[];
    journalClass?: 'BASE' | 'BASIS_ADJUSTMENT';
    divergenceType?: string;
    adjustmentForBasis?: 'IFRS' | 'AAOIFI';
}
export declare class RequestJournalPostingDto {
    journalEntryId: string;
}
declare class DistributionParticipantDto {
    productAccountId: string;
    unitsAtRecord: number;
    isDrip: boolean;
    cashPaidKobo: string;
}
export declare class RunHalalFundDistributionDto {
    ledgerEntityCode: string;
    productCode: string;
    periodStart: string;
    periodEnd: string;
    recordDate: string;
    method?: 'INCOME' | 'NAV';
    incomeBasisKobo: string;
    closingNavKobo: string;
    openingNavKobo: string;
    netSubscriptionsKobo: string;
    navHistoryComplete: boolean;
    priorDeclaredKobo: string;
    distributablePct: number;
    priorTotalDistributedKobo: string;
    exDivPricePerUnit?: number;
    participants: DistributionParticipantDto[];
}
export declare class OpenPeriodDto {
    ledgerEntityCode: string;
    periodStart: string;
    periodEnd: string;
}
export declare class RequestDelegationGrantDto {
    functionCode: string;
    delegateUserId: string;
    limitKobo?: string;
    effectiveFrom?: string;
    effectiveTo?: string;
    reason?: string;
    boardInstrumentRef?: string;
}
export declare class RevokeDelegationGrantDto {
    reason?: string;
}
export declare class ProposeAssignRoleDto {
    userId: string;
    roleCode: string;
}
export declare class CreateStaffUserDto {
    email: string;
    displayName: string;
    initialPassword?: string;
}
export declare class DeactivateUserDto {
    reason?: string;
}
export declare class SetupMandateDto {
    mandateType: 'UNRESTRICTED' | 'RESTRICTED' | 'DIRECT_DEAL' | 'RESTRICTED_PLUS_DIRECT';
    targetReturnRate: number;
    investorBaseRatio?: number;
    mudaribBaseRatio?: number;
    restrictedSectors?: string[];
    restrictedContracts?: string[];
    directDealInvestmentId?: string;
    rolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
    earlyExitWaiver?: boolean;
    ssbWaiverResolutionRef?: string;
    effectiveDate: string;
}
export declare class AssignRelationshipManagerDto {
    relationshipManagerUserId: string;
}
export declare class SendClientMessageDto {
    body: string;
    subject?: string;
}
export declare class ChartOfAccountTemplateRowDto {
    accountCode: string;
    accountName: string;
    accountType: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE';
    aaoifiRef: string;
    ifrsRef: string;
}
export declare class CreateLedgerEntityDto {
    code: string;
    name: string;
    entityType: 'COMPANY' | 'FUND' | 'POOL' | 'MANDATE' | 'CLIENT_MONEY';
    primaryBasis: 'IFRS' | 'AAOIFI';
    productCode?: string;
}
export declare class LoadChartOfAccountsDto {
    ledgerEntityCode: string;
    accounts: ChartOfAccountTemplateRowDto[];
}
export declare class ThirdPartyPayerDto {
    payerName: string;
    payerBankName?: string;
    payerAccountNumber?: string;
    declaredRelationship: string;
}
export declare class CreateTxnDto {
    txnType: 'SUBSCRIPTION' | 'REDEMPTION' | 'PLACEMENT' | 'PROFIT_ALLOCATION' | 'DISTRIBUTION' | 'ROLLOVER' | 'EARLY_EXIT' | 'FEE' | 'PURIFICATION' | 'ADJUSTMENT';
    ledgerEntityCode: string;
    productAccountId?: string;
    valueDate: string;
    amountKobo: string;
    payerBankAccountId?: string;
    thirdPartyPayer?: ThirdPartyPayerDto;
}
export declare class StageMigrationCsvDto {
    tplCode: 'TPL_01' | 'TPL_02' | 'TPL_03' | 'TPL_04' | 'TPL_05' | 'TPL_06' | 'TPL_07' | 'TPL_08' | 'TPL_09' | 'TPL_10' | 'TPL_13';
    fileName: string;
    csvContent: string;
}
export declare class IngestReplayCsvDto {
    sourceCode: string;
    fileName: string;
    csvContent: string;
    skipLeadingLines: number;
}
export declare class CreateBudgetVersionDto {
    fiscalYear: number;
    scenarioLabel: string;
    status: 'DRAFT' | 'BOARD_APPROVED';
}
export declare class RequestEncumbranceDto {
    budgetLineId: string;
    amountKobo: string;
    description: string;
}
export declare class GenerateBudgetReviewPackDto {
    templateCode: 'MONTHLY_MGMT_BUDGET_PACK' | 'QUARTERLY_BOARD_BUDGET_PACK';
    budgetVersionId: string;
    month: number;
    actualsByLineIdKobo: Record<string, string>;
    actualDriverOverrides?: {
        FUM?: number;
        MOBILIZATION?: number;
    };
}
export declare class RequestBankAccountChangeDto {
    proposedBankName: string;
    proposedAccountNumber: string;
    proposedAccountName: string;
    proposedAccountType?: string;
    proposedCurrency?: string;
}
export declare class AttachBankAccountChangeEvidenceDto {
    documentType: string;
    fileReference: string;
}
export declare class DecideBankAccountChangeDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
export declare class RequestOnboardingDto {
    surname: string;
    firstName: string;
    middleName?: string;
    positionId: string;
    orgUnitCode: string;
    reportsToId?: string;
    hireDate: string;
    proposedPerformanceIncentivePct?: number;
    linkedUserEmail?: string;
}
export declare class RequestOffboardingDto {
    employeeId: string;
    reason: string;
}
export declare class RequestIncentivePctChangeDto {
    employeeId: string;
    proposedPct: number;
}
export declare class DecideEmployeeLifecycleDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
export declare class RequestContactAmendmentDto {
    proposedContactEmail?: string;
    proposedContactPhone?: string;
    proposedRegisteredAddress?: string;
    proposedTaxIdentificationNumber?: string;
    proposedSourceOfFunds?: string;
    proposedOccupationOrBusinessNature?: string;
}
export declare class DecideContactAmendmentDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
export declare class CreateOrgUnitDto {
    code: string;
    name: string;
    secondaryReportingLine?: string;
}
export declare class CreatePositionDto {
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
}
export declare class ProposeDepartmentHeadDto {
    orgUnitCode: string;
    employeeId: string;
    effectiveFrom?: string;
}
export declare class ConfigureGatewayProviderDto {
    providerSlot: number;
    name: string;
    webhookSecret?: string;
    apiConfig?: Record<string, unknown>;
    isActive: boolean;
}
export declare class ConfigureCustodianAccountDto {
    providerId: string;
    productCode: string;
    custodianBankName: string;
    custodianAccountNumber: string;
    referenceCodePrefix: string;
    isActive: boolean;
}
export declare class ManualMatchInflowDto {
    investorId: string;
    productCode: string;
}
export declare class RejectInflowDto {
    reason: string;
}
export declare class GatewayWebhookDto {
    providerSlot: number;
    gatewayEventRef: string;
    amountKobo: string;
    settledAt: string;
    custodianAccountNumber: string;
    narration?: string;
    signature: string;
}
export declare class SubmitReportPackDto {
    calendarEventId: string;
    title: string;
    fileReference: string;
}
export declare class MarkSubmissionReceivedDto {
    status: 'RECEIVED' | 'INCOMPLETE';
    completenessNote?: string;
}
export declare class TransmitDocumentDto {
    title: string;
    fileReference: string;
    docType?: string;
    recipientUserIds: string[];
}
export declare class AssignTaskDto {
    title: string;
    description?: string;
    assigneeEmployeeId: string;
    dueAt?: string;
    deliverableUrl?: string;
    kpiDefinitionId?: string;
}
export declare class SetDeliverableUrlDto {
    deliverableUrl: string;
}
export declare class RequestInvestorExitDto {
    exitType: 'MATURITY_TRANSITION' | 'FINAL_EXIT';
}
export declare class DecideInvestorExitDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
export declare class RequestCounterpartyWriteOffDto {
    writeOffAmountKobo: string;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
}
export declare class DecideCounterpartyWriteOffDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
export declare class BankStatementLineInputDto {
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: string;
    description: string;
    amountKobo: string;
    externalRef?: string;
}
export declare class UploadBankStatementLinesDto {
    lines: BankStatementLineInputDto[];
}
export declare class MatchBankStatementLineDto {
    journalEntryLineId: string;
}
export declare class RequestMandateAmendmentDto {
    proposedTargetReturnRate?: number;
    proposedRolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
    proposedEarlyExitWaiver?: boolean;
}
export declare class DecideMandateAmendmentDto {
    decision: 'APPROVE' | 'REJECT';
    notes?: string;
}
declare const PRIVACY_NOTICE_CONTEXTS: readonly ["INVESTOR_ONBOARDING_STAGE_1", "INVESTOR_ONBOARDING_STAGE_2", "COUNTERPARTY_ONBOARDING", "INVESTOR_PORTAL_FIRST_LOGIN", "COUNTERPARTY_PORTAL_FIRST_LOGIN", "PUBLIC_INTAKE"];
export declare class AcknowledgePrivacyNoticeDto {
    noticeVersion: number;
    context: (typeof PRIVACY_NOTICE_CONTEXTS)[number];
    investorId?: string;
    counterpartyId?: string;
    publicIntakeSubmissionId?: string;
}
export declare class ConfirmRetentionScheduleEntryDto {
    retentionPeriodMonths: number;
    statutoryBasis: string;
    disposalTreatment: string;
}
export declare class LogDataBreachDto {
    discoveredAt: string;
    description: string;
    affectedDataClasses: string[];
    estimatedAffectedSubjects?: number;
}
export declare class AssessDataBreachDto {
    severity: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
    likelyHighRisk: boolean;
    assessmentNotes?: string;
    dataSubjectsNotificationRequired: boolean;
}
export declare class CloseDataBreachDto {
    postIncidentNotes: string;
}
export declare class StartOversightSessionDto {
    principalType: 'INVESTOR' | 'COUNTERPARTY';
    investorId?: string;
    counterpartyId?: string;
}
export declare class ProposeOversightPolicyDto {
    grantedRoleCodes: string[];
}
export declare class ConfirmDepositAndSetTargetDto {
    targetReturnPct: number;
    maturityDate: string;
    profitPaymentInterval?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'AT_MATURITY';
}
export declare class SubscriptionThirdPartyPayerDto {
    payerName: string;
    payerBankName: string;
    payerAccountNumber: string;
    declaredRelationship: string;
}
export declare class InitiateSubscriptionRequestDto {
    investorId: string;
    productCode: string;
    amountKobo: string;
    effectiveDate?: string;
}
export declare class ApproveSubscriptionRequestDto {
    journalInitiatorUserId: string;
    payerBankAccountId?: string;
    thirdPartyPayer?: SubscriptionThirdPartyPayerDto;
}
export declare class ProposeMarketValueEntryDto {
    valuationDate: string;
    marketValueKobo: string;
}
export declare class ConfigureAttendanceProviderDto {
    providerSlot: number;
    adapterType: 'TTLOCK' | 'FILE_IMPORT';
    name: string;
    clientId?: string;
    clientSecret?: string;
    isActive: boolean;
    ttlockUsername?: string;
    ttlockPassword?: string;
    ttlockApiBaseUrl?: string;
}
export declare class ConfigureAiProviderCredentialDto {
    providerSlot: number;
    providerName: string;
    apiKey?: string;
    baseUrl?: string;
    isActive: boolean;
}
export declare class MapLockUserDto {
    providerId: string;
    deviceUserRef: string;
    employeeId: string;
}
declare class FileImportRowDto {
    deviceUserRef: string;
    occurredAt: string;
    method: string;
    locationRef?: string;
}
export declare class ImportFileEventsDto {
    providerId: string;
    rows: FileImportRowDto[];
}
export declare class RequestExceptionDto {
    attendanceEventId?: string;
    disputedDate: string;
    reason: string;
}
export declare class DecideExceptionDto {
    decision: 'ACCEPTED' | 'REJECTED';
    notes?: string;
}
export declare class ConfigureCalendarProviderDto {
    providerSlot: number;
    adapterType: 'MICROSOFT_GRAPH' | 'GOOGLE';
    name: string;
    clientId?: string;
    clientSecret?: string;
    tenantId?: string;
    isActive: boolean;
}
export declare class ConfigureScreeningListSourceDto {
    sourceCode: 'OFAC' | 'UN_SC' | 'UK_SANCTIONS' | 'EU_FSF' | 'NG_NFIU';
    downloadUrl?: string;
    extraConfig?: Record<string, unknown>;
    isActive?: boolean;
}
export declare class UpdateScreeningGatewayConfigDto {
    activeProviderMode?: 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL';
    matchThresholdScore?: number;
    redThresholdScore?: number;
}
export declare class ConfigureScreeningCommercialProviderDto {
    providerSlot: number;
    name: string;
    apiKey?: string;
    isActive?: boolean;
}
export declare class RunScreeningDto {
    subjectType: 'INVESTOR' | 'COUNTERPARTY';
    subjectId: string;
    subjectNameScreened: string;
}
export declare class ProposeHitAdjudicationDto {
    outcome: 'TRUE_MATCH' | 'FALSE_POSITIVE';
    rationale: string;
}
export declare class ManualScreeningAttestationDto {
    subjectType: 'INVESTOR' | 'COUNTERPARTY';
    subjectId: string;
    subjectNameScreened: string;
    sourcesSearched: string[];
    searchReference: string;
    outcome: 'GREEN' | 'RED';
    fileReference: string;
}
export declare class ApplyForLeaveDto {
    leaveTypeCode: string;
    startDate: string;
    endDate: string;
    reliefOfficerEmployeeId?: string;
    reason?: string;
}
export declare class SupervisorDecideLeaveDto {
    decision: 'APPROVED' | 'REJECTED';
    notes?: string;
}
export declare class CreateSubmissionDto {
    title: string;
    description?: string;
    deliverableUrl?: string;
}
declare const TAX_TYPES: readonly ["WHT", "VAT", "STAMP_DUTY"];
type TaxTypeDto = (typeof TAX_TYPES)[number];
export declare class ProposeTaxRateVersionDto {
    taxType: TaxTypeDto;
    rates: Record<string, unknown>[];
    effectiveFrom: string;
}
export declare class GrantTaxExemptionDto {
    investorId: string;
    taxType: TaxTypeDto;
    reason: string;
}
export declare class CreateFeeInvoiceDto {
    counterpartyId?: string;
    investorId?: string;
    description: string;
    feeAmountKobo: string;
    serviceOrFeeType: string;
    invoiceDate: string;
}
export declare class RecognizeVendorInvoiceVatDto {
    serviceOrFeeType: string;
}
export declare class AssessStampDutyDto {
    instrumentType: string;
    entityType: string;
    entityId: string;
    baseAmountKobo?: string;
    transactionDate: string;
}
export declare class ConfigureTaxGlMappingDto {
    taxType: TaxTypeDto;
    payableAccountCode: string;
}
export declare class ConfigureRemittanceDueDateDto {
    taxType: TaxTypeDto;
    authority: string;
    dayOfMonthDue: number;
}
export declare class CompilePayoutBatchDto {
    periodLabel: string;
    periodStart: string;
    periodEnd: string;
}
export declare class ProspectusSheetFieldsDto {
    prospectusRef?: string;
    authorizedUnits?: number;
    fundSizeCapKobo?: string;
    offerSpreadPct?: number;
    bidSpreadPct?: number;
    valuationFrequency?: string;
    minimumSubscriptionKobo?: string;
    minimumAdditionalInvestmentKobo?: string;
    minimumRedemptionKobo?: string;
    minimumHoldingKobo?: string;
    managementFeeRatePct?: number;
    adminFeeRatePct?: number;
    custodianFeeRatePct?: number;
    secFeeRatePct?: number;
    auditFeeRatePct?: number;
    distributionMethod?: string;
    distributionFrequency?: string;
    distributableIncomePct?: number;
    minimumParticipationKobo?: string;
    poolTenorMonths?: number;
    surplusSharingEnabled?: boolean;
    psrPoolMudaribShare?: number;
    surplusInvestorShare?: number;
    surplusMudaribShare?: number;
    mandateRoleModel?: 'MUDARABAH_PSR' | 'WAKALAH';
    mandateFeeRatePct?: number;
    targetedReturnBenchmarkPct?: number;
    investmentType?: string;
    tenorLockInMonths?: number;
    minimumInvestmentKobo?: string;
    fundingStructure?: 'LUMP_SUM' | 'PERIODIC_CALL';
    offerNarrativeBrief?: string;
    offerNarrativeOpportunity?: string;
    offerNarrativeDynamics?: string;
    offerNarrativeRiskSummary?: string;
    offerNarrativeModelDescription?: string;
}
export declare class ProposeProspectusSheetDto extends ProspectusSheetFieldsDto {
    productCode: string;
}
export declare class AssignActivationSubStepTaskDto {
    stepCode: string;
    subStepCode: string;
    assigneeEmployeeId: string;
    dueAt?: string;
}
export declare class ComposeTileDto {
    metricCode: string;
    presentation: 'KPI_TILE' | 'TREND_LINE' | 'PIE' | 'BAR' | 'TABLE';
    position: number;
}
export declare class SaveDashboardDto {
    name: string;
    scope: 'PERSONAL' | 'DEPARTMENT';
    orgUnitCode?: string;
    tiles: ComposeTileDto[];
}
export {};
