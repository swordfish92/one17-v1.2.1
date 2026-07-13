import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

const ENTITY_TYPES = [
  'HNWI_INDIVIDUAL', 'CORPORATE', 'TRUST', 'COOPERATIVE',
  'PENSION', 'FAMILY_OFFICE', 'OTHER',
] as const;

export class OnboardInvestorDto {
  @IsString() fullLegalName!: string;
  @IsIn(ENTITY_TYPES) entityType!: (typeof ENTITY_TYPES)[number];
  @IsString() nationality!: string;
  @IsString() taxIdentificationNumber!: string;
  @IsOptional() @IsString() dateOfBirthOrIncorporation?: string;
  @IsString() contactEmail!: string;
  @IsString() contactPhone!: string;
  @IsString() registeredAddress!: string;
  @IsString() sourceOfFunds!: string;
  @IsOptional() authorisedSignatories?: unknown;
}

class ScreeningChecklistEntryDto {
  @IsString() itemCode!: string;
  @IsString() listVersionOrDate!: string;
  @IsOptional() @IsString() notes?: string;
}

export class RecordScreeningDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScreeningChecklistEntryDto)
  listsChecked!: ScreeningChecklistEntryDto[];

  @IsString() searchTermsUsed!: string;
  @IsIn(['NO_MATCH', 'POTENTIAL_MATCH', 'MATCH']) result!: 'NO_MATCH' | 'POTENTIAL_MATCH' | 'MATCH';
  @IsOptional() @IsString() countersignerUserId?: string;
  @IsOptional() @IsString() notes?: string;
}

export class WorkflowDecisionDto {
  @IsOptional() @IsString() notes?: string;
}

export class SetAmlRiskRatingDto {
  @IsIn(['LOW', 'MEDIUM', 'HIGH']) amlRiskRating!: 'LOW' | 'MEDIUM' | 'HIGH';
}

// CHECK5 item 5g-addendum: the graduated-onboarding case-review chain
// (Investor Onboarding Template §2b/3/5/6/7) — service+smoke-tested only
// until this pass, mirroring the same gap the counterparty review chain
// (RecordCounterpartyIc1ReviewDto etc.) had before item 5g's ops-UI build.
export class RecordInvestorRiskAssessmentDto {
  @IsArray() riskMetricGrades!: { metricCode: string; grade: 'LOW' | 'MEDIUM' | 'HIGH'; rationale: string }[];
  @IsArray() pepSanctionsGrid!: { target: 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER' | 'INVESTOR_OR_INSTITUTIONAL_NAME'; pepResult: 'CLEAR' | 'FLAGGED'; sanctionsResult: 'CLEAR' | 'FLAGGED' }[];
  @IsOptional() @IsString() complianceObservations?: string;
}

export class RecordInvestorIc1ReviewDto {
  @IsObject() checklist!: Record<string, 'PASS' | 'FAIL'>;
  @IsOptional() @IsString() notes?: string;
  @IsBoolean() pass!: boolean;
}

export class RecordInvestorRiskReviewDto {
  @IsOptional() @IsObject() eddChecklist?: Record<string, 'DONE' | 'N_A'>;
  @IsOptional() @IsIn(['APPROVE_WITH_CONDITIONS', 'DECLINE']) eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
  @IsOptional() @IsString() eddConditionsOrBasis?: string;
  @IsOptional() @IsIn(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL']) periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
  @IsOptional() @IsString() riskNotes?: string;
}

export class RecordInvestorMdDecisionDto {
  @IsIn(['APPROVED', 'DECLINED']) decision!: 'APPROVED' | 'DECLINED';
  @IsOptional() @IsString() conditionsOrReason?: string;
}

export class RecordInvestorIc2ReviewDto {
  @IsObject() checklist!: Record<string, 'PASS' | 'FAIL'>;
  @IsOptional() @IsString() notes?: string;
  @IsIn(['SATISFACTORY', 'UNSATISFACTORY']) outcome!: 'SATISFACTORY' | 'UNSATISFACTORY';
}

export class PrepareFilingRunDto {
  @IsString() regulatorTemplateId!: string;
  @IsString() ledgerEntityCode!: string;
  @IsString() periodStart!: string;
  @IsString() periodEnd!: string;
}

export class SetEntryValueDto {
  @IsString() value!: string;
}

export class RecordSecAckDto {
  @IsString() ackRef!: string;
}

export class CertifyFilingDto {
  @IsString() workflowInstanceId!: string;
}

export class CalibrateFieldDto {
  @IsInt() page!: number;
  @IsNumber() xPt!: number;
  @IsNumber() yPt!: number;
  @IsString() label!: string;
  @IsIn(['AUTO', 'ENTRY', 'STATIC']) cellClass!: 'AUTO' | 'ENTRY' | 'STATIC';
  @IsOptional() @IsString() sourceKey?: string;
  @IsOptional() @IsString() staticValue?: string;
}

// Invariant 52(e) (CHECK12): the XLSX analogue of CalibrateFieldDto.
export class CalibrateCellDto {
  @IsString() sheetName!: string;
  @IsString() cellAddress!: string;
  @IsString() label!: string;
  @IsIn(['AUTO', 'ENTRY', 'STATIC']) cellClass!: 'AUTO' | 'ENTRY' | 'STATIC';
  @IsOptional() @IsString() sourceKey?: string;
  @IsOptional() @IsString() staticValue?: string;
}

// ---- Wealth Management (CHECK5 item 3 / invariant 23) ----
export class OnboardWmClientDto {
  @IsString() investorId!: string;
  @IsOptional() @IsString() advisorUserId?: string;
}

export class DeclareClientAssetDto {
  @IsString() assetClassCode!: string;
  @IsString() description!: string;
  @IsOptional() @IsNumber() quantity?: number;
  @IsString() declaredValueKobo!: string;
  @IsString() valuationDate!: string;
  @IsIn(['ONE17', 'EXTERNAL']) custodyFlag!: 'ONE17' | 'EXTERNAL';
  @IsOptional() @IsString() evidenceDocumentId?: string;
  // Invariant 29(b) holding drill-down fields.
  @IsOptional() @IsString() maturityDate?: string;
  @IsOptional() @IsNumber() tenorMonths?: number;
  @IsOptional() @IsArray() @IsString({ each: true }) scheduledProfitTakingDates?: string[];
  @IsOptional() @IsNumber() targetReturnPct?: number;
}

// Invariant 26(b) governed FX config.
export class UpdateWmFxRateDto {
  @IsNumber() nairaPerUsd!: number;
}

// Invariant 29(b) holding drill-down: TOP_UP/REDEMPTION portal requests.
export class SubmitHoldingActionRequestDto {
  @IsString() requestedAmountKobo!: string;
  @IsOptional() @IsString() notes?: string;
}

export class SetShariahScreenDto {
  @IsIn(['SCREENED_COMPLIANT', 'SCREENED_NON_COMPLIANT', 'UNSCREENED']) tag!: 'SCREENED_COMPLIANT' | 'SCREENED_NON_COMPLIANT' | 'UNSCREENED';
}

export class SetAllocationPolicyDto {
  @IsObject() targetAllocations!: Record<string, number>;
  @IsIn(['CONSERVATIVE', 'MODERATE', 'BALANCED', 'GROWTH', 'AGGRESSIVE']) riskBand!: string;
}

export class SetRiskProfileDto {
  @IsObject() questionnaireResponses!: Record<string, unknown>;
  @IsIn(['CONSERVATIVE', 'MODERATE', 'BALANCED', 'GROWTH', 'AGGRESSIVE']) riskBand!: string;
}

export class SetGrowthPlanDto {
  @IsString() horizon!: string;
  @IsObject() milestones!: unknown;
  @IsObject() targetGlidePath!: unknown;
  @IsString() reviewSchedule!: string;
}

export class CreateAdvisoryRecordDto {
  @IsString() recommendation!: string;
  @IsString() rationale!: string;
  @IsOptional() @IsString() riskNotes?: string;
  @IsOptional() @IsString() shariahNote?: string;
}

export class RunSandboxRiskAssessmentDto {
  @IsString() scenarioCode!: string;
}

export class ChargeAdvisoryFeeDto {
  @IsString() ledgerEntityCode!: string;
  @IsString() amountKobo!: string;
  @IsString() drAccountCodeOverride!: string;
  @IsString() crAccountCodeOverride!: string;
  @IsString() entryDate!: string;
}

// ---- PMS slot B (CHECK5 item 4 / invariant 18) ----
export class StartCycleDto {
  @IsIn(['INCENTIVE_CYCLE', 'ANNUAL_APPRAISAL']) cycleType!: 'INCENTIVE_CYCLE' | 'ANNUAL_APPRAISAL';
  @IsOptional() @IsString() orgUnitCode?: string;
  @IsString() periodStart!: string;
  @IsString() periodEnd!: string;
}

class KpiScoreEntryDto {
  @IsString() kpiDefinitionId!: string;
  @IsNumber() selfScorePct!: number;
}

export class SubmitSelfScoreDto {
  @IsString() employeeId!: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => KpiScoreEntryDto)
  scores!: KpiScoreEntryDto[];
}

export class AdjustValidatedScoreDto {
  @IsString() kpiDefinitionId!: string;
  @IsNumber() validatedScorePct!: number;
}

export class RecordBehaviouralGateDto {
  @IsString() employeeId!: string;
  attendanceOk!: boolean;
  ethicalConductOk!: boolean;
  @IsOptional() trendsViolation?: boolean;
  @IsOptional() @IsString() disciplinaryNote?: string;
  @IsOptional() @IsString() evidenceRef?: string;
  @IsString() severity!: string;
}

export class ProposeScorecardOverrideDto {
  @IsString() employeeId!: string;
  @IsString() kpiDefinitionId!: string;
  @IsNumber() overrideWeightPct!: number;
  @IsString() reason!: string;
}

export class LogActivityDto {
  @IsString() employeeId!: string;
  @IsString() kpiDefinitionId!: string;
  @IsString() activityText!: string;
  @IsOptional() @IsString() taskRef?: string;
}

export class RunPayrollDto {
  @IsInt() periodMonth!: number;
  @IsInt() periodYear!: number;
  @IsString() ledgerEntityCode!: string;
  @IsString() drStaffCostAccountCode!: string;
  @IsString() drIncentiveExpenseAccountCode!: string;
  @IsString() crPayePayableAccountCode!: string;
  @IsString() crPensionPayableAccountCode!: string;
  @IsString() crNhfPayableAccountCode!: string;
  @IsString() crNetPayPayableAccountCode!: string;
}

// Invariant 37(e): Salary/Emolument setup editor — annualAmountKobo travels
// as a numeric string (BigInt-safe over JSON, same convention as every
// other kobo field crossing the HTTP boundary in this codebase).
export class ProposeEmolumentComponentDto {
  @IsString() cadre!: string;
  @IsInt() notch!: number;
  @IsString() component!: string;
  @IsIn(['SALARY', 'ALLOWANCE', 'COST_REFUND']) componentType!: 'SALARY' | 'ALLOWANCE' | 'COST_REFUND';
  @IsNumberString() annualAmountKobo!: string;
  @IsBoolean() taxable!: boolean;
  @IsString() effectiveFrom!: string;
}

// Invariant 37(e): Talent Management + Reward & Welfare spec-lite.
export class CreateWelfareSchemeDto {
  @IsString() name!: string;
  @IsOptional() @IsString() description?: string;
}

export class CreateRewardTypeDto {
  @IsString() name!: string;
  @IsOptional() @IsString() description?: string;
}

export class RecommendTalentDto {
  @IsString() employeeId!: string;
  @IsIn(['WELFARE', 'REWARD']) recommendationType!: 'WELFARE' | 'REWARD';
  @IsOptional() @IsString() welfareSchemeId?: string;
  @IsOptional() @IsString() rewardTypeId?: string;
  @IsOptional() @IsString() appraisalCycleId?: string;
  @IsString() justification!: string;
}

// Invariant 28(d): public self-registration DTOs — the ONLY unauthenticated
// write surface in this codebase. Every field is strictly validated
// (whitelist + forbidNonWhitelisted from main.ts's global ValidationPipe
// already strips/rejects anything not declared here); MaxLength caps guard
// against abuse of an anonymous, rate-limited-but-still-public endpoint.
export class PublicInvestorExpressIntakeDto {
  @IsString() @MaxLength(200) fullLegalName!: string;
  @IsIn(['HNWI_INDIVIDUAL', 'CORPORATE', 'TRUST', 'COOPERATIVE', 'PENSION', 'FAMILY_OFFICE', 'OTHER']) entityType!:
    'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
  @IsString() @MaxLength(100) nationality!: string;
  @IsOptional() @IsString() @MaxLength(20) bvn?: string;
  @IsOptional() @IsString() @MaxLength(20) rcNumber?: string;
  @IsEmail() contactEmail!: string;
  @IsString() @MaxLength(20) contactPhone!: string;
  // Invariant 57(b)(i) (CHECK15): NDPA/GAID privacy-notice + marketing consent.
  @IsBoolean() privacyNoticeAcknowledged!: boolean;
  @IsOptional() @IsBoolean() marketingConsent?: boolean;
}

export class PublicCounterpartyIntakeDto {
  @IsString() @MaxLength(200) legalName!: string;
  @IsString() @MaxLength(100) counterpartyType!: string;
  @IsOptional() @IsString() @MaxLength(20) rcNumber?: string;
  @IsOptional() @IsString() @MaxLength(100) country?: string;
  @IsString() @MaxLength(500) purposeOfFinancing!: string;
  @IsNumberString() amountSoughtKobo!: string;
  @IsString() @MaxLength(500) expectedSourceOfRepayment!: string;
  @IsBoolean() creditBureauConsent!: boolean;
  @IsBoolean() privacyNoticeAcknowledged!: boolean;
}

export class PromoteInvestorIntakeDto {
  @IsIn(['CLEAR', 'FLAGGED']) sanctionsScreenResult!: 'CLEAR' | 'FLAGGED';
}

export class RejectIntakeDto {
  @IsString() @MaxLength(500) reason!: string;
}

// Invariant 28(c): strategy layer DTOs.
// Invariant 19: statementTypeCode is validated against the live
// StrategyStatementTypeConfig table at the service layer (proposeStatement),
// not a fixed @IsIn() list here — a new tenant's type code passes DTO
// validation and is rejected (with a clear message) only if it isn't an
// active config row.
export class ProposeStrategyStatementDto {
  @IsString() statementTypeCode!: string;
  @IsString() content!: string;
  @IsOptional() @IsString() explanation?: string;
}

export class AddStatementTypeConfigDto {
  @IsString() @MaxLength(50) code!: string;
  @IsString() @MaxLength(100) label!: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsBoolean() allowsMultipleActive?: boolean;
  @IsOptional() @IsInt() sortOrder?: number;
}

export class ApproveStrategyStatementDto {
  @IsString() boardResolutionRef!: string;
}

export class UpdatePillarGovernanceDto {
  @IsOptional() @IsString() explanation?: string;
  @IsOptional() @IsString() boardResolutionRef?: string;
}

export class UpdateObjectiveGovernanceDto {
  @IsOptional() @IsString() explanation?: string;
  @IsOptional() @IsString() boardResolutionRef?: string;
}

// Invariant 51(c2) (CHECK12): PMS strategy-spine governed creation.
export class ProposePillarDto {
  @IsString() @MaxLength(50) code!: string;
  @IsString() @MaxLength(200) name!: string;
  @IsOptional() @IsString() description?: string;
}

export class ApprovePillarDto {
  @IsString() boardResolutionRef!: string;
}

export class ProposeObjectiveDto {
  @IsString() @MaxLength(50) code!: string;
  @IsString() @MaxLength(200) name!: string;
  @IsString() pillarCode!: string;
  @IsOptional() @IsString() explanation?: string;
}

export class ApproveObjectiveDto {
  @IsString() boardResolutionRef!: string;
}

export class MapKraToObjectiveDto {
  @IsString() kraCode!: string;
  @IsString() objectiveCode!: string;
}

export class ProposeKpiDefinitionDto {
  @IsString() kraCode!: string;
  @IsIn(['JUNIOR', 'SENIOR', 'CHIEF']) tier!: 'JUNIOR' | 'SENIOR' | 'CHIEF';
  @IsString() kpiText!: string;
  @IsIn(['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY']) kpiClass!: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
  @IsOptional() @IsString() objectiveText?: string;
  @IsOptional() @IsString() exampleActivity?: string;
  @IsOptional() @IsIn(['AUTO', 'MANUAL', 'HYBRID']) measurementBasis?: 'AUTO' | 'MANUAL' | 'HYBRID';
  @IsOptional() @IsString() frequency?: string;
}

class WeightMatrixClassEntryDto {
  @IsIn(['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY']) kpiClass!: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
  @IsNumber() weightPct!: number;
}

export class ProposeWeightMatrixVersionDto {
  @IsString() orgUnitCode!: string;
  @IsIn(['JUNIOR', 'SENIOR', 'CHIEF']) tier!: 'JUNIOR' | 'SENIOR' | 'CHIEF';
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WeightMatrixClassEntryDto)
  weights!: WeightMatrixClassEntryDto[];
}

// Invariant 50(a) (CHECK12): petty cash imprest module.
export class EstablishFloatDto {
  @IsString() floatCode!: string;
  @IsString() custodianUserId!: string;
  @IsString() officeLabel!: string;
  @IsOptional() @IsString() ledgerEntityCode?: string;
  @IsNumberString() floatCeilingKobo!: string;
  @IsNumberString() singleVoucherCapKobo!: string;
}

export class AdjustFloatCapsDto {
  @IsOptional() @IsNumberString() floatCeilingKobo?: string;
  @IsOptional() @IsNumberString() singleVoucherCapKobo?: string;
}

export class CaptureVoucherDto {
  @IsString() floatId!: string;
  @IsString() voucherDate!: string;
  @IsString() payee!: string;
  @IsString() expenseAccountCode!: string;
  @IsNumberString() amountKobo!: string;
}

export class InitiateReplenishmentClaimDto {
  @IsString() floatId!: string;
  @IsArray() @IsString({ each: true }) voucherIds!: string[];
}

export class RecordSpotCheckDto {
  @IsString() floatId!: string;
  @IsNumberString() countedKobo!: string;
  @IsOptional() @IsString() notes?: string;
}

// Invariant 52(a) (CHECK12): corporate letterhead template, single governed asset.
export class ProposeLetterheadVersionDto {
  @IsString() companyName!: string;
  @IsString() addressLine1!: string;
  @IsOptional() @IsString() addressLine2?: string;
  @IsString() rcNumber!: string;
  @IsString() secRegistrationLine!: string;
  @IsString() brandPrimaryColorHex!: string;
  @IsString() brandAccentColorHex!: string;
  @IsString() brandDeepColorHex!: string;
  @IsString() footerDisclaimer!: string;
}

export class ApproveLetterheadVersionDto {}

// Invariant 52(b) (CHECK12): investment certificate template registry.
export class ProposeCertificateTemplateDto {
  @IsIn(['HF_UNIT_NAV', 'POOL_ND_PSR', 'ND_WAKALAH']) productClass!: 'HF_UNIT_NAV' | 'POOL_ND_PSR' | 'ND_WAKALAH';
  @IsString() disclaimerText!: string;
  @IsString() secRuleDisclaimer!: string;
}

export class ApproveCertificateTemplateDto {}

// Invariant 52(c) (CHECK12): governed letter template registry + per-instance issuance approval.
const LETTER_TYPES = ['WELCOME', 'MATURITY_NOTICE', 'ROLLOVER_CONFIRMATION', 'AD_HOC', 'BANK_INSTRUCTION', 'TAX_REMITTANCE_INSTRUCTION'] as const;
type LetterTypeDto = (typeof LETTER_TYPES)[number];

export class ProposeLetterTemplateDto {
  @IsIn(LETTER_TYPES) letterType!: LetterTypeDto;
  @IsString() bodyTemplate!: string;
}

export class ApproveLetterTemplateDto {}

export class GenerateLetterDto {
  @IsIn(LETTER_TYPES) letterType!: LetterTypeDto;
  @IsOptional() @IsString() investorId?: string;
  @IsOptional() @IsString() counterpartyId?: string;
  @IsOptional() @IsString() productAccountId?: string;
  @IsOptional() @IsString() ndMandateAccountId?: string;
  @IsOptional() @IsObject() extraMergeFields?: Record<string, string>;
}

export class RejectLetterInstanceDto {
  @IsOptional() @IsString() notes?: string;
}

export class PublishStrategyDto {
  @IsString() @MaxLength(500) summary!: string;
}

// Invariant 28(b): BD marketing suite DTOs. Subscribe/Unsubscribe are the
// PUBLIC surface (mirrors PublicIntakeController's unauthenticated DTOs).
export class UploadMarketingResourceDto {
  @IsString() @MaxLength(200) title!: string;
  @IsString() @MaxLength(50) resourceType!: string;
  @IsString() @MaxLength(500) fileReference!: string;
  @IsOptional() @IsInt() version?: number;
}

export class SubscribeMarketingDto {
  @IsEmail() email!: string;
  @IsOptional() @IsString() @MaxLength(200) fullName?: string;
  @IsArray() @IsString({ each: true }) segments!: string[];
}

export class UnsubscribeMarketingDto {
  @IsEmail() email!: string;
  @IsString() token!: string;
}

export class InitiateMarketingSendDto {
  @IsString() @MaxLength(200) subject!: string;
  @IsString() body!: string;
  @IsArray() @IsString({ each: true }) targetSegments!: string[];
  @IsOptional() @IsString() resourceId?: string;
}

// Invariant 27(b): the staff-facing counterparty onboarding review chain —
// discovered missing an HTTP surface while building 28(e)'s portal (which
// needs a real COMPLETE_APPROVED path); built here so both land together.
export class OnboardCounterpartyDto {
  @IsString() @MaxLength(200) legalName!: string;
  @IsString() @MaxLength(100) counterpartyType!: string;
  @IsOptional() @IsString() @MaxLength(20) rcNumber?: string;
  @IsOptional() @IsString() @MaxLength(100) country?: string;
  @IsString() @MaxLength(500) purposeOfFinancing!: string;
  @IsNumberString() amountSoughtKobo!: string;
  @IsString() @MaxLength(500) expectedSourceOfRepayment!: string;
  @IsBoolean() creditBureauConsent!: boolean;
  @IsOptional() @IsString() shariahCertRef?: string;
  @IsOptional() @IsString() shariahCertExpiry?: string;
  @IsOptional() @IsEmail() contactEmail?: string;
}

export class RecordCounterpartyRiskAssessmentDto {
  @IsArray() riskMetricGrades!: { metricCode: string; grade: 'LOW' | 'MEDIUM' | 'HIGH'; rationale: string }[];
  @IsArray() pepSanctionsGrid!: { target: 'INVESTEE_OR_INSTITUTIONAL_NAME' | 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER'; pepResult: 'CLEAR' | 'FLAGGED'; sanctionsResult: 'CLEAR' | 'FLAGGED' }[];
  @IsOptional() @IsString() complianceObservations?: string;
}

export class RecordCounterpartyIc1ReviewDto {
  @IsObject() checklist!: Record<string, 'PASS' | 'FAIL'>;
  @IsOptional() @IsString() notes?: string;
  @IsBoolean() pass!: boolean;
}

export class RecordCounterpartyRiskReviewDto {
  @IsOptional() @IsObject() eddChecklist?: Record<string, 'DONE' | 'N_A'>;
  @IsOptional() @IsIn(['APPROVE_WITH_CONDITIONS', 'DECLINE']) eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
  @IsOptional() @IsString() eddConditionsOrBasis?: string;
  @IsOptional() @IsIn(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL']) periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
  @IsOptional() @IsString() riskNotes?: string;
  @IsOptional() @IsNumberString() approvedExposureLimitKobo?: string;
}

export class RecordCounterpartyMdDecisionDto {
  @IsIn(['APPROVED', 'DECLINED']) decision!: 'APPROVED' | 'DECLINED';
  @IsOptional() @IsString() conditionsOrReason?: string;
}

export class RecordCounterpartyIc2ReviewDto {
  @IsObject() checklist!: Record<string, 'PASS' | 'FAIL'>;
  @IsOptional() @IsString() notes?: string;
  @IsIn(['SATISFACTORY', 'UNSATISFACTORY']) outcome!: 'SATISFACTORY' | 'UNSATISFACTORY';
}

// Invariant 28(e): portal persona DTOs (restructure requests + enquiry).
export class RequestCounterpartyRestructureDto {
  @IsIn(['EXTENSION', 'RESTRUCTURE']) requestType!: 'EXTENSION' | 'RESTRUCTURE';
  @IsOptional() @IsInt() extensionMonths?: number;
  @IsString() @MaxLength(1000) reason!: string;
}

export class DecideCounterpartyRestructureDto {
  @IsIn(['APPROVED', 'DECLINED']) decision!: 'APPROVED' | 'DECLINED';
  @IsOptional() @IsString() notes?: string;
}

export class ToggleRestructuringFeatureDto {
  @IsBoolean() enabled!: boolean;
}

export class SubmitCounterpartyEnquiryDto {
  @IsOptional() @IsString() @MaxLength(200) subject?: string;
  @IsString() @MaxLength(2000) message!: string;
}

// Invariant 28(f): complaint module DTOs.
export class RaiseComplaintDto {
  @IsOptional() @IsString() investorId?: string;
  @IsOptional() @IsString() counterpartyId?: string;
  @IsString() @MaxLength(100) category!: string;
  @IsString() @MaxLength(2000) description!: string;
  // Invariant 57(b)(ii) (CHECK15): DSR intake on the Enquiries channel.
  @IsOptional() @IsBoolean() isDsr?: boolean;
  @IsOptional() @IsIn(['ACCESS', 'RECTIFICATION', 'ERASURE', 'OBJECTION', 'PORTABILITY']) dsrCategory?: 'ACCESS' | 'RECTIFICATION' | 'ERASURE' | 'OBJECTION' | 'PORTABILITY';
}

export class AssignComplaintOwnerDto {
  @IsString() ownerUserId!: string;
}

export class EscalateComplaintDto {
  @IsString() escalatedToUserId!: string;
}

export class ResolveComplaintDto {
  @IsString() @MaxLength(2000) resolutionNotes!: string;
  @IsOptional() @IsString() @MaxLength(2000) dsrLegalBasis?: string;
}

// CHECK5 item 5h: Fund Accounting screen — product provisioning (Step 1 of
// the 5-step process; the remaining steps are separate governed workflows
// already built elsewhere — ledger entity creation, Shariah/SEC approval).
export class CreateFundProductDto {
  @IsString() @MaxLength(50) code!: string;
  @IsString() @MaxLength(200) name!: string;
  @IsIn(['UNIT_NAV', 'PSR_WATERFALL', 'MANDATE']) engineType!: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
}

// Invariant 44(b) (CHECK10): records an existing SSB decision -- never
// invents/defaults ssbResolutionRef, see ProductService.approveProductShariah.
export class ApproveProductShariahDto {
  @IsString() ssbResolutionRef!: string;
}

// ---- Zakat Advisory (invariant 26) ----
export class UpdateZakatNisabConfigDto {
  @IsNumber() nisabGoldGrams!: number;
  @IsString() goldPricePerGramKobo!: string;
}

export class CreateZakatAssessmentDto {
  @IsString() assessmentDateGregorian!: string;
  @IsString() @MaxLength(100) assessmentDateHijri!: string;
}

export class DeclareZakatScheduleItemDto {
  @IsIn(['CASH_BANK', 'GOLD_SILVER', 'INVESTMENT', 'FIXED_ASSET', 'RECEIVABLE', 'LIABILITY'])
  scheduleType!: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
  @IsString() @MaxLength(500) description!: string;
  @IsString() amountKobo!: string;
  @IsIn(['ZAKATABLE', 'NON_ZAKATABLE', 'DOUBTFUL']) zakatability!: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
}

// Invariant 25(4): the due-date-bearing installment the payment-reminder
// ladder keys off (Check-6 reminder-ladder tranche).
export class CreateRepaymentObligationDto {
  @IsOptional() @IsString() facilityApplicationId?: string;
  @IsString() dueDate!: string;
  @IsString() amountKobo!: string;
}

// Invariant 36(a): "file-ownership as data" — the officer whose profile
// hub the system-generated call/bureau tasks route to.
export class AssignFileManagingOfficerDto {
  @IsString() officerUserId!: string;
}

// Invariant 36(a)/(b): officer-validation dispatch queue + ladder settings.
export class RejectDispatchDto {
  @IsOptional() @IsString() @MaxLength(1000) reason?: string;
}

export class UpdateLadderRungDto {
  @IsOptional() @IsArray() @IsString({ each: true }) channels?: string[];
  @IsOptional() @IsBoolean() notifyManagement?: boolean;
  @IsOptional() @IsBoolean() createsFollowUpCallTask?: boolean;
  @IsOptional() @IsBoolean() isActive?: boolean;
}

// Invariant 36(c): BureauGateway — Risk-owned provider slots + policy.
export class ConfigureBureauProviderDto {
  @IsInt() providerSlot!: number;
  @IsString() @MaxLength(200) name!: string;
  @IsObject() apiConfig!: Record<string, unknown>;
  @IsString() costPerPullKobo!: string;
  @IsBoolean() isActive!: boolean;
}

export class UpdateBureauPolicyDto {
  @IsInt() minIntervalDays!: number;
}

// Invariant 37(g) completeness audit: AMD-12's risk appetite matrix
// propose/approve chain and Phase 4's six stress models had zero
// controller wiring despite being fully built and capability-gated.
export class ProposeRiskMatrixVersionDto {
  @IsOptional() @IsString() cloneFromVersionId?: string;
}

export class UpdateRiskCategoryThresholdsDto {
  @IsOptional() @IsNumber() greenThreshold?: number;
  @IsOptional() @IsNumber() amberThreshold?: number;
  @IsOptional() @IsNumber() redThreshold?: number;
}

export class ApproveRiskMatrixVersionDto {
  @IsString() boardResolutionRef!: string;
}

export class ApproveRiskRegisterEntryDto {
  @IsOptional() @IsString() boardResolutionRef?: string;
}

export class RunStressTestDto {
  @IsIn(['LIQUIDITY', 'CAPITAL_ADEQUACY', 'REVENUE_SENSITIVITY', 'COUNTERPARTY_DEFAULT', 'PORTFOLIO_SHOCK', 'REVERSE_STRESS'])
  modelType!: 'LIQUIDITY' | 'CAPITAL_ADEQUACY' | 'REVENUE_SENSITIVITY' | 'COUNTERPARTY_DEFAULT' | 'PORTFOLIO_SHOCK' | 'REVERSE_STRESS';
  @IsOptional() @IsString() scenarioCode?: string;
  @IsString() ledgerEntityCode!: string;
  @IsIn(['SANDBOX', 'BASELINE_CANDIDATE']) runMode!: 'SANDBOX' | 'BASELINE_CANDIDATE';
}

// Invariant 36(d): Fund Accounting's own posting of a disbursed facility's
// targeted return (single source — see CounterpartyService.recordFundAccountingTerms).
export class RecordFacilityFundAccountingTermsDto {
  @IsNumber() targetedReturnPct!: number;
}

// Invariant 36(f): the Portfolio Officer's structured investment memo —
// deal summary, structure/contract type, amounts, tenor, target return,
// risk notes, Shariah notes, collateral, per the CEO's own field list.
export class DraftInvestmentMemoDto {
  @IsString() dealSummary!: string;
  @IsString() structureType!: string;
  @IsString() amountKobo!: string;
  @IsInt() tenorMonths!: number;
  @IsNumber() targetReturnPct!: number;
  @IsString() riskNotes!: string;
  @IsString() shariahNotes!: string;
  @IsString() collateralNotes!: string;
}

// Invariant 46(c): Investment Committee's structured approval action.
export class CommitteeApproveInvestmentMemoDto {
  @IsString() icResolutionRef!: string;
}

// Invariant 46(g)(i): the investment memo DoA threshold's own governance.
export class ProposeInvestmentMemoThresholdDto {
  @IsString() thresholdKobo!: string;
}

// Invariant 37(c)(ii): CS issues a Board/Committee directive — committeeTag
// null/omitted means Full-Board.
export class IssueBoardDirectiveDto {
  @IsString() title!: string;
  @IsString() description!: string;
  @IsOptional() @IsString() committeeTag?: string;
  @IsOptional() @IsString() resolutionRef?: string;
  @IsString() dueAt!: string;
}

// Invariant 37(c)(iii): Board Calendar event.
export class CreateBoardCalendarEventDto {
  @IsString() title!: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() committeeTag?: string;
  @IsString() startsAt!: string;
  @IsOptional() @IsString() endsAt?: string;
}

export class UpdateBoardCalendarReminderConfigDto {
  @IsInt() daysBefore!: number;
}

// Invariant 37(c)(v): Board Minutes.
export class UploadBoardMinutesDto {
  @IsString() title!: string;
  @IsString() fileReference!: string;
  @IsOptional() @IsString() committeeTag?: string;
}

export class TransmitBoardMinutesDto {
  @IsString() recipientUserId!: string;
}

// Invariant 39(a): DOCUMENT_REGISTER attach screen.
export class AttachDocumentDto {
  @IsString() entityType!: string;
  @IsString() entityId!: string;
  @IsString() documentType!: string;
  @IsString() fileReference!: string;
}

// Invariant 44(e) (CHECK10): admin authoring of the required-document
// checklist per application type.
export class RequiredDocumentConfigDto {
  @IsString() applicationType!: string;
  @IsString() documentType!: string;
}

// Invariant 39(a), Tier 1: manual JOURNAL_ENTRIES maker screen.
class JournalEntryLineDto {
  @IsString() accountCode!: string;
  @IsOptional() @IsNumberString() debitKobo?: string;
  @IsOptional() @IsNumberString() creditKobo?: string;
  @IsOptional() @IsString() description?: string;
}

export class CreateJournalEntryDto {
  @IsString() ledgerEntityCode!: string;
  @IsString() journalReference!: string;
  @IsString() entryDate!: string;
  @IsString() description!: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JournalEntryLineDto)
  lines!: JournalEntryLineDto[];
  @IsOptional() @IsIn(['BASE', 'BASIS_ADJUSTMENT']) journalClass?: 'BASE' | 'BASIS_ADJUSTMENT';
  @IsOptional() @IsString() divergenceType?: string;
  @IsOptional() @IsIn(['IFRS', 'AAOIFI']) adjustmentForBasis?: 'IFRS' | 'AAOIFI';
}

export class RequestJournalPostingDto {
  @IsString() journalEntryId!: string;
}

// Invariant 39(a), Tier 1: Halal Fund distribution initiation — the
// DISTRIBUTION_INITIATION scenario this session's scope covers (PSR-
// waterfall/ND-mandate initiation and the PENALTY_TO_CHARITY scenario are
// parked, see QUESTIONS_FOR_REVIEW.md — no service logic exists for either
// yet, a materially bigger lift than wiring an existing engine method).
class DistributionParticipantDto {
  @IsString() productAccountId!: string;
  @IsNumber() unitsAtRecord!: number;
  @IsBoolean() isDrip!: boolean;
  @IsNumberString() cashPaidKobo!: string;
}

export class RunHalalFundDistributionDto {
  @IsString() ledgerEntityCode!: string;
  @IsString() productCode!: string;
  @IsString() periodStart!: string;
  @IsString() periodEnd!: string;
  @IsString() recordDate!: string;
  @IsOptional() @IsIn(['INCOME', 'NAV']) method?: 'INCOME' | 'NAV';
  @IsNumberString() incomeBasisKobo!: string;
  @IsNumberString() closingNavKobo!: string;
  @IsNumberString() openingNavKobo!: string;
  @IsNumberString() netSubscriptionsKobo!: string;
  @IsBoolean() navHistoryComplete!: boolean;
  @IsNumberString() priorDeclaredKobo!: string;
  @IsNumber() distributablePct!: number;
  @IsNumberString() priorTotalDistributedKobo!: string;
  @IsOptional() @IsNumber() exDivPricePerUnit?: number;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DistributionParticipantDto)
  participants!: DistributionParticipantDto[];
}

// Invariant 39(a), Tier 1: ACCOUNTING_PERIOD_CLOSE propose/approve flow —
// PeriodService has existed since Phase 2 with zero controller wiring.
export class OpenPeriodDto {
  @IsString() ledgerEntityCode!: string;
  @IsString() periodStart!: string;
  @IsString() periodEnd!: string;
}

// Invariant 39(a), Tier 1: DELEGATION_GRANT_INITIATION/APPROVAL admin
// screens — DelegationService.requestGrant has existed since the 9a
// build-out with zero controller wiring.
export class RequestDelegationGrantDto {
  @IsString() functionCode!: string;
  @IsString() delegateUserId!: string;
  @IsOptional() @IsNumberString() limitKobo?: string;
  @IsOptional() @IsString() effectiveFrom?: string;
  @IsOptional() @IsString() effectiveTo?: string;
  @IsOptional() @IsString() reason?: string;
  @IsOptional() @IsString() boardInstrumentRef?: string;
}

export class RevokeDelegationGrantDto {
  @IsOptional() @IsString() reason?: string;
}

// Invariant 39(a), Tier 1: RBAC_CONFIG governed assignment screen — AMD-09
// §4b's "RBAC changes are maker-checker workflows" path, live for the one
// RBAC-mutating operation Phase 1 exposes (assigning an existing role to a
// user). Role/PlatformFunction/RolePermission CRUD itself stays seed/
// migration-authored per the existing MVP ruling (CLAUDE.md invariant #15).
export class ProposeAssignRoleDto {
  @IsString() userId!: string;
  @IsString() roleCode!: string;
}

// Invariant 43(c) (CHECK10): the "Staff & Users" create-account form —
// closes the gap the CEO's own failed findability attempt exposed (the
// feature didn't exist, not just poorly labeled).
export class CreateStaffUserDto {
  @IsEmail() email!: string;
  @IsString() displayName!: string;
  @IsOptional() @IsString() initialPassword?: string;
}

// Invariant 51(a-iv) (CHECK12): user deactivation.
export class DeactivateUserDto {
  @IsOptional() @IsString() reason?: string;
}

// Invariant 39(a), Tier 1: MANDATE_SETUP admin/approval screen —
// InvestorService.setupMandate has existed since SRS §6.1/AMD-01's build-
// out with zero controller wiring. MANDATE_SETUP has no INITIATE grant at
// all (PORT_MGR/MD_CEO hold APPROVE only) — it is a direct capability-
// gated action, same "one role holds it outright" pattern as
// approveRiskRegisterEntry, not a propose->workflow->approve flow.
export class SetupMandateDto {
  @IsIn(['UNRESTRICTED', 'RESTRICTED', 'DIRECT_DEAL', 'RESTRICTED_PLUS_DIRECT']) mandateType!: 'UNRESTRICTED' | 'RESTRICTED' | 'DIRECT_DEAL' | 'RESTRICTED_PLUS_DIRECT';
  @IsNumber() targetReturnRate!: number;
  @IsOptional() @IsNumber() investorBaseRatio?: number;
  @IsOptional() @IsNumber() mudaribBaseRatio?: number;
  @IsOptional() @IsArray() restrictedSectors?: string[];
  @IsOptional() @IsArray() restrictedContracts?: string[];
  @IsOptional() @IsString() directDealInvestmentId?: string;
  @IsOptional() @IsIn(['AUTO', 'MANUAL', 'NONE']) rolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
  @IsOptional() @IsBoolean() earlyExitWaiver?: boolean;
  @IsOptional() @IsString() ssbWaiverResolutionRef?: string;
  @IsString() effectiveDate!: string;
}

// Invariant 39(d)/35(a): investor portal widening — RM assignment + staff
// side of the two-way client<->RM message thread.
export class AssignRelationshipManagerDto {
  @IsString() relationshipManagerUserId!: string;
}

export class SendClientMessageDto {
  @IsString() body!: string;
  @IsOptional() @IsString() subject?: string;
}

// Invariant 39(c), Tier 3: LEDGER_ENTITY_SETUP.
export class ChartOfAccountTemplateRowDto {
  @IsString() accountCode!: string;
  @IsString() accountName!: string;
  @IsIn(['ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE']) accountType!: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE';
  // AMD-11.1: every row carries BOTH refs — not optional (see ledger.types.ts's ChartOfAccountTemplateRow).
  @IsString() aaoifiRef!: string;
  @IsString() ifrsRef!: string;
}

export class CreateLedgerEntityDto {
  @IsString() code!: string;
  @IsString() name!: string;
  @IsIn(['COMPANY', 'FUND', 'POOL', 'MANDATE', 'CLIENT_MONEY']) entityType!: 'COMPANY' | 'FUND' | 'POOL' | 'MANDATE' | 'CLIENT_MONEY';
  @IsIn(['IFRS', 'AAOIFI']) primaryBasis!: 'IFRS' | 'AAOIFI';
  @IsOptional() @IsString() productCode?: string;
}

export class LoadChartOfAccountsDto {
  @IsString() ledgerEntityCode!: string;
  @IsArray() @ValidateNested({ each: true }) @Type(() => ChartOfAccountTemplateRowDto) accounts!: ChartOfAccountTemplateRowDto[];
}

// Invariant 39(c), Tier 3: TXN_ENTRY (confirmed, not retired).
export class ThirdPartyPayerDto {
  @IsString() payerName!: string;
  @IsOptional() @IsString() payerBankName?: string;
  @IsOptional() @IsString() payerAccountNumber?: string;
  @IsString() declaredRelationship!: string;
}

export class CreateTxnDto {
  @IsIn(['SUBSCRIPTION', 'REDEMPTION', 'PLACEMENT', 'PROFIT_ALLOCATION', 'DISTRIBUTION', 'ROLLOVER', 'EARLY_EXIT', 'FEE', 'PURIFICATION', 'ADJUSTMENT'])
  txnType!: 'SUBSCRIPTION' | 'REDEMPTION' | 'PLACEMENT' | 'PROFIT_ALLOCATION' | 'DISTRIBUTION' | 'ROLLOVER' | 'EARLY_EXIT' | 'FEE' | 'PURIFICATION' | 'ADJUSTMENT';
  @IsString() ledgerEntityCode!: string;
  @IsOptional() @IsString() productAccountId?: string;
  @IsString() valueDate!: string;
  @IsString() amountKobo!: string;
  @IsOptional() @IsString() payerBankAccountId?: string;
  @IsOptional() @ValidateNested() @Type(() => ThirdPartyPayerDto) thirdPartyPayer?: ThirdPartyPayerDto;
}

// Invariant 39(c), Tier 3: DATA_MIGRATION.
export class StageMigrationCsvDto {
  @IsIn(['TPL_01', 'TPL_02', 'TPL_03', 'TPL_04', 'TPL_05', 'TPL_06', 'TPL_07', 'TPL_08', 'TPL_09', 'TPL_10', 'TPL_13'])
  tplCode!: 'TPL_01' | 'TPL_02' | 'TPL_03' | 'TPL_04' | 'TPL_05' | 'TPL_06' | 'TPL_07' | 'TPL_08' | 'TPL_09' | 'TPL_10' | 'TPL_13';
  @IsString() fileName!: string;
  @IsString() csvContent!: string;
}

// Invariant 39(c), Tier 3: REPLAY_HARNESS.
export class IngestReplayCsvDto {
  @IsString() sourceCode!: string;
  @IsString() fileName!: string;
  @IsString() csvContent!: string;
  @IsInt() skipLeadingLines!: number;
}

// Invariant 39(b), Tier 2: BUDGET_MANAGEMENT authoring screen.
export class CreateBudgetVersionDto {
  @IsInt() fiscalYear!: number;
  @IsString() scenarioLabel!: string;
  @IsIn(['DRAFT', 'BOARD_APPROVED']) status!: 'DRAFT' | 'BOARD_APPROVED';
}

// Invariant 49(c)/(g)(ii) (CHECK11): the requisitions/encumbrances screen.
export class RequestEncumbranceDto {
  @IsString() budgetLineId!: string;
  @IsNumberString() amountKobo!: string;
  @IsString() description!: string;
}

// CHECK15: Budget Review Pack reachability. actualsByLineIdKobo travels as
// numeric strings (same convention as amountKobo above) -- the controller
// converts to BigInt before calling BudgetReviewPackService, which is the
// only place actual kobo arithmetic happens.
export class GenerateBudgetReviewPackDto {
  @IsIn(['MONTHLY_MGMT_BUDGET_PACK', 'QUARTERLY_BOARD_BUDGET_PACK']) templateCode!: 'MONTHLY_MGMT_BUDGET_PACK' | 'QUARTERLY_BOARD_BUDGET_PACK';
  @IsString() budgetVersionId!: string;
  @IsInt() month!: number;
  @IsObject() actualsByLineIdKobo!: Record<string, string>;
  @IsOptional() @IsObject() actualDriverOverrides?: { FUM?: number; MOBILIZATION?: number };
}

// Invariant 51(a-i) (CHECK12): the fraud-critical investor bank-account
// change flow -- request/evidence/decide DTOs.
export class RequestBankAccountChangeDto {
  @IsString() proposedBankName!: string;
  @IsString() proposedAccountNumber!: string;
  @IsString() proposedAccountName!: string;
  @IsOptional() @IsString() proposedAccountType?: string;
  @IsOptional() @IsString() proposedCurrency?: string;
}

export class AttachBankAccountChangeEvidenceDto {
  @IsString() documentType!: string;
  @IsString() fileReference!: string;
}

export class DecideBankAccountChangeDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 50(b) (CHECK12): governed employee lifecycle DTOs.
export class RequestOnboardingDto {
  @IsString() surname!: string;
  @IsString() firstName!: string;
  @IsOptional() @IsString() middleName?: string;
  @IsString() positionId!: string;
  @IsString() orgUnitCode!: string;
  @IsOptional() @IsString() reportsToId?: string;
  @IsString() hireDate!: string;
  @IsOptional() @IsNumber() proposedPerformanceIncentivePct?: number;
  @IsOptional() @IsEmail() linkedUserEmail?: string;
}

export class RequestOffboardingDto {
  @IsString() employeeId!: string;
  @IsString() reason!: string;
}

export class RequestIncentivePctChangeDto {
  @IsString() employeeId!: string;
  @IsNumber() proposedPct!: number;
}

export class DecideEmployeeLifecycleDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 51(a-ii) (CHECK12): investor contact/KYC-data amendment DTOs.
export class RequestContactAmendmentDto {
  @IsOptional() @IsEmail() proposedContactEmail?: string;
  @IsOptional() @IsString() proposedContactPhone?: string;
  @IsOptional() @IsString() proposedRegisteredAddress?: string;
  @IsOptional() @IsString() proposedTaxIdentificationNumber?: string;
  @IsOptional() @IsString() proposedSourceOfFunds?: string;
  @IsOptional() @IsString() proposedOccupationOrBusinessNature?: string;
}

export class DecideContactAmendmentDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 51(a-iii) (CHECK12): governed position + org-unit creation.
export class CreateOrgUnitDto {
  @IsString() code!: string;
  @IsString() name!: string;
  @IsOptional() @IsString() secondaryReportingLine?: string;
}

export class CreatePositionDto {
  @IsString() title!: string;
  @IsString() orgUnitCode!: string;
  @IsString() cadre!: string;
  @IsInt() notch!: number;
}

// Invariant 74(b) (CHECK27, v1.2): Department Head designation.
export class ProposeDepartmentHeadDto {
  @IsString() orgUnitCode!: string;
  @IsString() employeeId!: string;
  @IsOptional() @IsString() effectiveFrom?: string;
}

// Invariant 55(a) (CHECK12): Payment Gateway Adapter.
export class ConfigureGatewayProviderDto {
  @IsInt() providerSlot!: number;
  @IsString() name!: string;
  @IsOptional() @IsString() webhookSecret?: string;
  // Invariant 73(b) (CHECK27): vendor-specific outbound API credentials
  // (Flutterwave secretKey, Monnify apiKey, etc) -- see each adapter's own
  // header comment in src/payment-gateway/adapters/ for which keys a given
  // vendor needs. Omit to leave the existing apiConfig unchanged.
  @IsOptional() @IsObject() apiConfig?: Record<string, unknown>;
  @IsBoolean() isActive!: boolean;
}

export class ConfigureCustodianAccountDto {
  @IsString() providerId!: string;
  @IsString() productCode!: string;
  @IsString() custodianBankName!: string;
  @IsString() custodianAccountNumber!: string;
  @IsString() referenceCodePrefix!: string;
  @IsBoolean() isActive!: boolean;
}

export class ManualMatchInflowDto {
  @IsString() investorId!: string;
  @IsString() productCode!: string;
}

export class RejectInflowDto {
  @IsString() reason!: string;
}

export class GatewayWebhookDto {
  @IsInt() providerSlot!: number;
  @IsString() gatewayEventRef!: string;
  @IsNumberString() amountKobo!: string;
  @IsString() settledAt!: string;
  @IsString() custodianAccountNumber!: string;
  @IsOptional() @IsString() narration?: string;
  @IsString() signature!: string;
}

// Invariant 55(b) (CHECK12): Board report/presentation pack submission.
export class SubmitReportPackDto {
  @IsString() calendarEventId!: string;
  @IsString() title!: string;
  @IsString() fileReference!: string;
}

export class MarkSubmissionReceivedDto {
  @IsIn(['RECEIVED', 'INCOMPLETE']) status!: 'RECEIVED' | 'INCOMPLETE';
  @IsOptional() @IsString() completenessNote?: string;
}

// Invariant 55(b) (CHECK12): MD Document Transmission.
export class TransmitDocumentDto {
  @IsString() title!: string;
  @IsString() fileReference!: string;
  @IsOptional() @IsString() docType?: string;
  @IsArray() @IsString({ each: true }) recipientUserIds!: string[];
}

// Invariant 55(c) (CHECK12): dedicated Tasks page.
export class AssignTaskDto {
  @IsString() title!: string;
  @IsOptional() @IsString() description?: string;
  @IsString() assigneeEmployeeId!: string;
  @IsOptional() @IsString() dueAt?: string;
  @IsOptional() @IsString() deliverableUrl?: string;
  @IsOptional() @IsString() kpiDefinitionId?: string;
}

export class SetDeliverableUrlDto {
  @IsString() deliverableUrl!: string;
}

// Invariant 51(b-v) (CHECK13): investor exit/closure.
export class RequestInvestorExitDto {
  @IsIn(['MATURITY_TRANSITION', 'FINAL_EXIT']) exitType!: 'MATURITY_TRANSITION' | 'FINAL_EXIT';
}

export class DecideInvestorExitDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 51(b-vi) (CHECK13): counterparty write-off.
export class RequestCounterpartyWriteOffDto {
  @IsNumberString() writeOffAmountKobo!: string;
  @IsString() ledgerEntityCode!: string;
  @IsString() investmentAccountCode!: string;
  @IsString() reason!: string;
}

export class DecideCounterpartyWriteOffDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 51(b-ix) (CHECK13): bank reconciliation.
export class BankStatementLineInputDto {
  @IsString() ledgerEntityCode!: string;
  @IsString() glAccountCode!: string;
  @IsString() statementDate!: string;
  @IsString() description!: string;
  @IsNumberString() amountKobo!: string;
  @IsOptional() @IsString() externalRef?: string;
}

export class UploadBankStatementLinesDto {
  @IsArray() @ValidateNested({ each: true }) @Type(() => BankStatementLineInputDto) lines!: BankStatementLineInputDto[];
}

export class MatchBankStatementLineDto {
  @IsString() journalEntryLineId!: string;
}

// Invariant 51(c) Tier-3 (CHECK13): investor mandate amendment.
export class RequestMandateAmendmentDto {
  @IsOptional() @IsNumber() proposedTargetReturnRate?: number;
  @IsOptional() @IsIn(['AUTO', 'MANUAL', 'NONE']) proposedRolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
  @IsOptional() @IsBoolean() proposedEarlyExitWaiver?: boolean;
}

export class DecideMandateAmendmentDto {
  @IsIn(['APPROVE', 'REJECT']) decision!: 'APPROVE' | 'REJECT';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 57 (CHECK15): NDPA/GAID compliance pack DTOs.
const PRIVACY_NOTICE_CONTEXTS = [
  'INVESTOR_ONBOARDING_STAGE_1', 'INVESTOR_ONBOARDING_STAGE_2', 'COUNTERPARTY_ONBOARDING',
  'INVESTOR_PORTAL_FIRST_LOGIN', 'COUNTERPARTY_PORTAL_FIRST_LOGIN', 'PUBLIC_INTAKE',
] as const;

export class AcknowledgePrivacyNoticeDto {
  @IsInt() noticeVersion!: number;
  @IsIn(PRIVACY_NOTICE_CONTEXTS) context!: (typeof PRIVACY_NOTICE_CONTEXTS)[number];
  @IsOptional() @IsString() investorId?: string;
  @IsOptional() @IsString() counterpartyId?: string;
  @IsOptional() @IsString() publicIntakeSubmissionId?: string;
}

export class ConfirmRetentionScheduleEntryDto {
  @IsInt() retentionPeriodMonths!: number;
  @IsString() @MaxLength(500) statutoryBasis!: string;
  @IsString() @MaxLength(500) disposalTreatment!: string;
}

export class LogDataBreachDto {
  @IsDateString() discoveredAt!: string;
  @IsString() @MaxLength(2000) description!: string;
  @IsArray() @IsString({ each: true }) affectedDataClasses!: string[];
  @IsOptional() @IsInt() estimatedAffectedSubjects?: number;
}

export class AssessDataBreachDto {
  @IsIn(['LOW', 'MODERATE', 'HIGH', 'CRITICAL']) severity!: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  @IsBoolean() likelyHighRisk!: boolean;
  @IsOptional() @IsString() @MaxLength(2000) assessmentNotes?: string;
  @IsBoolean() dataSubjectsNotificationRequired!: boolean;
}

export class CloseDataBreachDto {
  @IsString() @MaxLength(2000) postIncidentNotes!: string;
}

// Invariant 61(b)/(c) (CHECK15): Executive Oversight Mode.
export class StartOversightSessionDto {
  @IsIn(['INVESTOR', 'COUNTERPARTY']) principalType!: 'INVESTOR' | 'COUNTERPARTY';
  @IsOptional() @IsString() investorId?: string;
  @IsOptional() @IsString() counterpartyId?: string;
}

export class ProposeOversightPolicyDto {
  @IsArray() @IsString({ each: true }) grantedRoleCodes!: string[];
}

// CHECK16 62(h): FA confirm-deposit-and-set-target step. profitPaymentInterval
// added CHECK18 65(a) -- optional, same "set once, nullable until FA sets
// it" shape as targetReturnPct/maturityDate before this step existed.
export class ConfirmDepositAndSetTargetDto {
  @IsNumber() targetReturnPct!: number;
  @IsDateString() maturityDate!: string;
  @IsOptional() @IsIn(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'AT_MATURITY']) profitPaymentInterval?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'AT_MATURITY';
}

// CHECK16 62(m): SUBSCRIPTION_APPROVAL's dedicated approval screen --
// journalInitiatorUserId and the third-party-payer fields (all four
// required here, unlike the more lenient CreateTxnDto/ThirdPartyPayerDto
// pair) mirror ApproveSubscriptionInput's own required shape exactly, since
// this DTO is passed straight through to SubscriptionService.approveSubscription.
export class SubscriptionThirdPartyPayerDto {
  @IsString() payerName!: string;
  @IsString() payerBankName!: string;
  @IsString() payerAccountNumber!: string;
  @IsString() declaredRelationship!: string;
}

// Invariant 70(c) (CHECK24): staff-side "New Investment / Top Up" action on
// the investor record -- see SubscriptionController.initiate().
export class InitiateSubscriptionRequestDto {
  @IsString() investorId!: string;
  @IsString() productCode!: string;
  @IsNumberString() amountKobo!: string;
  @IsOptional() @IsDateString() effectiveDate?: string;
}

export class ApproveSubscriptionRequestDto {
  @IsString() journalInitiatorUserId!: string;
  @IsOptional() @IsString() payerBankAccountId?: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => SubscriptionThirdPartyPayerDto)
  thirdPartyPayer?: SubscriptionThirdPartyPayerDto;
}

// CHECK16 62(c): NAV market-value entry.
export class ProposeMarketValueEntryDto {
  @IsDateString() valuationDate!: string;
  @IsNumberString() marketValueKobo!: string;
}

// CHECK17 63(b)/64(c): AttendanceGateway provider config -- same masked-
// secret + MD-approved maker!=checker shape as ConfigureGatewayProviderDto.
export class ConfigureAttendanceProviderDto {
  @IsInt() providerSlot!: number;
  @IsIn(['TTLOCK', 'FILE_IMPORT']) adapterType!: 'TTLOCK' | 'FILE_IMPORT';
  @IsString() name!: string;
  @IsOptional() @IsString() clientId?: string;
  @IsOptional() @IsString() clientSecret?: string;
  @IsBoolean() isActive!: boolean;
  // Invariant 73(b) (CHECK27): TTLock's real password-grant extra fields --
  // ttlockPassword arrives plaintext here (same wire posture as
  // clientSecret above) and is MD5-hashed server-side before it is ever
  // persisted; never stored or returned raw.
  @IsOptional() @IsString() ttlockUsername?: string;
  @IsOptional() @IsString() ttlockPassword?: string;
  @IsOptional() @IsString() ttlockApiBaseUrl?: string;
}

// Invariant 73(b) (CHECK27): AI provider credential adapters -- providerSlot
// 1=Anthropic Claude, 2=OpenAI, 3=config-defined third; baseUrl only
// meaningful for slot 3. Same masked-secret + MD-approved maker!=checker
// shape as ConfigureGatewayProviderDto/ConfigureAttendanceProviderDto.
export class ConfigureAiProviderCredentialDto {
  @IsInt() providerSlot!: number;
  @IsString() providerName!: string;
  @IsOptional() @IsString() apiKey?: string;
  @IsOptional() @IsString() baseUrl?: string;
  @IsBoolean() isActive!: boolean;
}

export class MapLockUserDto {
  @IsString() providerId!: string;
  @IsString() deviceUserRef!: string;
  @IsString() employeeId!: string;
}

class FileImportRowDto {
  @IsString() deviceUserRef!: string;
  @IsString() occurredAt!: string;
  @IsString() method!: string;
  @IsOptional() @IsString() locationRef?: string;
}

export class ImportFileEventsDto {
  @IsString() providerId!: string;
  @IsArray() @ValidateNested({ each: true }) @Type(() => FileImportRowDto) rows!: FileImportRowDto[];
}

export class RequestExceptionDto {
  @IsOptional() @IsString() attendanceEventId?: string;
  @IsDateString() disputedDate!: string;
  @IsString() reason!: string;
}

export class DecideExceptionDto {
  @IsIn(['ACCEPTED', 'REJECTED']) decision!: 'ACCEPTED' | 'REJECTED';
  @IsOptional() @IsString() notes?: string;
}

// Invariant 73(b) (CHECK27): CalendarGateway DTOs -- provider config mirrors
// ConfigureAttendanceProviderDto exactly (2 slots instead of 3, plus
// tenantId for MICROSOFT_GRAPH); the per-user connect/callback/revoke DTOs
// are new shape this gateway alone needs.
export class ConfigureCalendarProviderDto {
  @IsInt() providerSlot!: number;
  @IsIn(['MICROSOFT_GRAPH', 'GOOGLE']) adapterType!: 'MICROSOFT_GRAPH' | 'GOOGLE';
  @IsString() name!: string;
  @IsOptional() @IsString() clientId?: string;
  @IsOptional() @IsString() clientSecret?: string;
  @IsOptional() @IsString() tenantId?: string;
  @IsBoolean() isActive!: boolean;
}

// Invariant 72 (CHECK26): Screening Gateway DTOs.
export class ConfigureScreeningListSourceDto {
  @IsIn(['OFAC', 'UN_SC', 'UK_SANCTIONS', 'EU_FSF', 'NG_NFIU']) sourceCode!: 'OFAC' | 'UN_SC' | 'UK_SANCTIONS' | 'EU_FSF' | 'NG_NFIU';
  @IsOptional() @IsString() downloadUrl?: string;
  @IsOptional() @IsObject() extraConfig?: Record<string, unknown>;
  @IsOptional() @IsBoolean() isActive?: boolean;
}

export class UpdateScreeningGatewayConfigDto {
  @IsOptional() @IsIn(['LOCAL_LISTS', 'COMMERCIAL', 'MANUAL']) activeProviderMode?: 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL';
  @IsOptional() @IsInt() matchThresholdScore?: number;
  @IsOptional() @IsInt() redThresholdScore?: number;
}

export class ConfigureScreeningCommercialProviderDto {
  @IsInt() providerSlot!: number;
  @IsString() name!: string;
  @IsOptional() @IsString() apiKey?: string;
  @IsOptional() @IsBoolean() isActive?: boolean;
}

export class RunScreeningDto {
  @IsIn(['INVESTOR', 'COUNTERPARTY']) subjectType!: 'INVESTOR' | 'COUNTERPARTY';
  @IsString() subjectId!: string;
  @IsString() subjectNameScreened!: string;
}

export class ProposeHitAdjudicationDto {
  @IsIn(['TRUE_MATCH', 'FALSE_POSITIVE']) outcome!: 'TRUE_MATCH' | 'FALSE_POSITIVE';
  @IsString() rationale!: string;
}

export class ManualScreeningAttestationDto {
  @IsIn(['INVESTOR', 'COUNTERPARTY']) subjectType!: 'INVESTOR' | 'COUNTERPARTY';
  @IsString() subjectId!: string;
  @IsString() subjectNameScreened!: string;
  @IsArray() @IsString({ each: true }) sourcesSearched!: string[];
  @IsString() searchReference!: string;
  @IsIn(['GREEN', 'RED']) outcome!: 'GREEN' | 'RED';
  @IsString() fileReference!: string;
}

// CHECK17 64(e): Leave.
export class ApplyForLeaveDto {
  @IsString() leaveTypeCode!: string;
  @IsDateString() startDate!: string;
  @IsDateString() endDate!: string;
  @IsOptional() @IsString() reliefOfficerEmployeeId?: string;
  @IsOptional() @IsString() reason?: string;
}

export class SupervisorDecideLeaveDto {
  @IsIn(['APPROVED', 'REJECTED']) decision!: 'APPROVED' | 'REJECTED';
  @IsOptional() @IsString() notes?: string;
}

// CHECK17 64(d)(iii): upline submissions.
export class CreateSubmissionDto {
  @IsString() title!: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() deliverableUrl?: string;
}

// ============================================================================
// CHECK18: unified Tax Configuration framework (invariant 65c) + Fund
// Obligations Schedule / payout compilation (invariant 65a/b).
// ============================================================================

const TAX_TYPES = ['WHT', 'VAT', 'STAMP_DUTY'] as const;
type TaxTypeDto = (typeof TAX_TYPES)[number];

export class ProposeTaxRateVersionDto {
  @IsIn(TAX_TYPES) taxType!: TaxTypeDto;
  // Shape depends on taxType -- WhtRateRow[]/VatRateRow[]/StampDutyRateRow[]
  // (see tax.types.ts). Validated at the object level; the service itself
  // rejects an empty array (park-don't-invent: never an empty-array version).
  @IsArray() rates!: Record<string, unknown>[];
  @IsDateString() effectiveFrom!: string;
}

export class GrantTaxExemptionDto {
  @IsString() investorId!: string;
  @IsIn(TAX_TYPES) taxType!: TaxTypeDto;
  @IsString() reason!: string;
}

export class CreateFeeInvoiceDto {
  @IsOptional() @IsString() counterpartyId?: string;
  @IsOptional() @IsString() investorId?: string;
  @IsString() description!: string;
  @IsNumberString() feeAmountKobo!: string;
  @IsString() serviceOrFeeType!: string;
  @IsDateString() invoiceDate!: string;
}

export class RecognizeVendorInvoiceVatDto {
  @IsString() serviceOrFeeType!: string;
}

export class AssessStampDutyDto {
  @IsString() instrumentType!: string;
  @IsString() entityType!: string;
  @IsString() entityId!: string;
  @IsOptional() @IsNumberString() baseAmountKobo?: string;
  @IsDateString() transactionDate!: string;
}

// The row itself ships with payableAccountCode: null at seed time (park-
// don't-invent) -- this endpoint is FinCon's later action to fill it in
// once Mapping-7 is signed, so the code is required here, not optional.
export class ConfigureTaxGlMappingDto {
  @IsIn(TAX_TYPES) taxType!: TaxTypeDto;
  @IsString() payableAccountCode!: string;
}

export class ConfigureRemittanceDueDateDto {
  @IsIn(TAX_TYPES) taxType!: TaxTypeDto;
  @IsString() authority!: string;
  @IsInt() dayOfMonthDue!: number;
}

// Invariant 65(a)/(b): Fund Obligations Schedule + payout compilation.
export class CompilePayoutBatchDto {
  @IsString() periodLabel!: string;
  @IsDateString() periodStart!: string;
  @IsDateString() periodEnd!: string;
}

// Invariant 70(a)/(b)/(g) (CHECK24): Unified Prospectus Parameter Sheet --
// one DTO shape reused across propose/edit/amend (ProspectusSheetService
// itself decides what a given call is allowed to touch; every field here is
// optional since a given product's sheet only fills in the group(s)
// relevant to its engineType).
export class ProspectusSheetFieldsDto {
  @IsOptional() @IsString() @MaxLength(200) prospectusRef?: string;
  @IsOptional() @IsNumber() authorizedUnits?: number;
  @IsOptional() @IsNumberString() fundSizeCapKobo?: string;
  @IsOptional() @IsNumber() offerSpreadPct?: number;
  @IsOptional() @IsNumber() bidSpreadPct?: number;
  @IsOptional() @IsString() valuationFrequency?: string;
  @IsOptional() @IsNumberString() minimumSubscriptionKobo?: string;
  @IsOptional() @IsNumberString() minimumAdditionalInvestmentKobo?: string;
  @IsOptional() @IsNumberString() minimumRedemptionKobo?: string;
  @IsOptional() @IsNumberString() minimumHoldingKobo?: string;
  @IsOptional() @IsNumber() managementFeeRatePct?: number;
  @IsOptional() @IsNumber() adminFeeRatePct?: number;
  @IsOptional() @IsNumber() custodianFeeRatePct?: number;
  @IsOptional() @IsNumber() secFeeRatePct?: number;
  @IsOptional() @IsNumber() auditFeeRatePct?: number;
  @IsOptional() @IsString() distributionMethod?: string;
  @IsOptional() @IsString() distributionFrequency?: string;
  @IsOptional() @IsNumber() distributableIncomePct?: number;
  @IsOptional() @IsNumberString() minimumParticipationKobo?: string;
  @IsOptional() @IsInt() poolTenorMonths?: number;
  @IsOptional() @IsBoolean() surplusSharingEnabled?: boolean;
  @IsOptional() @IsNumber() psrPoolMudaribShare?: number;
  @IsOptional() @IsNumber() surplusInvestorShare?: number;
  @IsOptional() @IsNumber() surplusMudaribShare?: number;
  @IsOptional() @IsIn(['MUDARABAH_PSR', 'WAKALAH']) mandateRoleModel?: 'MUDARABAH_PSR' | 'WAKALAH';
  @IsOptional() @IsNumber() mandateFeeRatePct?: number;
  @IsOptional() @IsNumber() targetedReturnBenchmarkPct?: number;
  @IsOptional() @IsString() investmentType?: string;
  @IsOptional() @IsInt() tenorLockInMonths?: number;
  @IsOptional() @IsNumberString() minimumInvestmentKobo?: string;
  @IsOptional() @IsIn(['LUMP_SUM', 'PERIODIC_CALL']) fundingStructure?: 'LUMP_SUM' | 'PERIODIC_CALL';
  @IsOptional() @IsString() @MaxLength(4000) offerNarrativeBrief?: string;
  @IsOptional() @IsString() @MaxLength(4000) offerNarrativeOpportunity?: string;
  @IsOptional() @IsString() @MaxLength(4000) offerNarrativeDynamics?: string;
  @IsOptional() @IsString() @MaxLength(4000) offerNarrativeRiskSummary?: string;
  @IsOptional() @IsString() @MaxLength(4000) offerNarrativeModelDescription?: string;
}

export class ProposeProspectusSheetDto extends ProspectusSheetFieldsDto {
  @IsString() productCode!: string;
}

// Invariant 66 (CHECK20): Activation Console.
export class AssignActivationSubStepTaskDto {
  @IsString() stepCode!: string;
  @IsString() subStepCode!: string;
  @IsString() assigneeEmployeeId!: string;
  @IsOptional() @IsDateString() dueAt?: string;
}

// Invariant 73(a) (CHECK27): Dashboard Composer.
export class ComposeTileDto {
  @IsString() metricCode!: string;
  @IsIn(['KPI_TILE', 'TREND_LINE', 'PIE', 'BAR', 'TABLE']) presentation!: 'KPI_TILE' | 'TREND_LINE' | 'PIE' | 'BAR' | 'TABLE';
  @IsInt() position!: number;
}

export class SaveDashboardDto {
  @IsString() name!: string;
  @IsIn(['PERSONAL', 'DEPARTMENT']) scope!: 'PERSONAL' | 'DEPARTMENT';
  @IsOptional() @IsString() orgUnitCode?: string;
  @IsArray() @ValidateNested({ each: true }) @Type(() => ComposeTileDto) tiles!: ComposeTileDto[];
}
