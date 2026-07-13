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
exports.ApproveObjectiveDto = exports.ProposeObjectiveDto = exports.ApprovePillarDto = exports.ProposePillarDto = exports.UpdateObjectiveGovernanceDto = exports.UpdatePillarGovernanceDto = exports.ApproveStrategyStatementDto = exports.AddStatementTypeConfigDto = exports.ProposeStrategyStatementDto = exports.RejectIntakeDto = exports.PromoteInvestorIntakeDto = exports.PublicCounterpartyIntakeDto = exports.PublicInvestorExpressIntakeDto = exports.RecommendTalentDto = exports.CreateRewardTypeDto = exports.CreateWelfareSchemeDto = exports.ProposeEmolumentComponentDto = exports.RunPayrollDto = exports.LogActivityDto = exports.ProposeScorecardOverrideDto = exports.RecordBehaviouralGateDto = exports.AdjustValidatedScoreDto = exports.SubmitSelfScoreDto = exports.StartCycleDto = exports.ChargeAdvisoryFeeDto = exports.RunSandboxRiskAssessmentDto = exports.CreateAdvisoryRecordDto = exports.SetGrowthPlanDto = exports.SetRiskProfileDto = exports.SetAllocationPolicyDto = exports.SetShariahScreenDto = exports.SubmitHoldingActionRequestDto = exports.UpdateWmFxRateDto = exports.DeclareClientAssetDto = exports.OnboardWmClientDto = exports.CalibrateCellDto = exports.CalibrateFieldDto = exports.CertifyFilingDto = exports.RecordSecAckDto = exports.SetEntryValueDto = exports.PrepareFilingRunDto = exports.RecordInvestorIc2ReviewDto = exports.RecordInvestorMdDecisionDto = exports.RecordInvestorRiskReviewDto = exports.RecordInvestorIc1ReviewDto = exports.RecordInvestorRiskAssessmentDto = exports.SetAmlRiskRatingDto = exports.WorkflowDecisionDto = exports.RecordScreeningDto = exports.OnboardInvestorDto = void 0;
exports.ApproveRiskRegisterEntryDto = exports.ApproveRiskMatrixVersionDto = exports.UpdateRiskCategoryThresholdsDto = exports.ProposeRiskMatrixVersionDto = exports.UpdateBureauPolicyDto = exports.ConfigureBureauProviderDto = exports.UpdateLadderRungDto = exports.RejectDispatchDto = exports.AssignFileManagingOfficerDto = exports.CreateRepaymentObligationDto = exports.DeclareZakatScheduleItemDto = exports.CreateZakatAssessmentDto = exports.UpdateZakatNisabConfigDto = exports.ApproveProductShariahDto = exports.CreateFundProductDto = exports.ResolveComplaintDto = exports.EscalateComplaintDto = exports.AssignComplaintOwnerDto = exports.RaiseComplaintDto = exports.SubmitCounterpartyEnquiryDto = exports.ToggleRestructuringFeatureDto = exports.DecideCounterpartyRestructureDto = exports.RequestCounterpartyRestructureDto = exports.RecordCounterpartyIc2ReviewDto = exports.RecordCounterpartyMdDecisionDto = exports.RecordCounterpartyRiskReviewDto = exports.RecordCounterpartyIc1ReviewDto = exports.RecordCounterpartyRiskAssessmentDto = exports.OnboardCounterpartyDto = exports.InitiateMarketingSendDto = exports.UnsubscribeMarketingDto = exports.SubscribeMarketingDto = exports.UploadMarketingResourceDto = exports.PublishStrategyDto = exports.RejectLetterInstanceDto = exports.GenerateLetterDto = exports.ApproveLetterTemplateDto = exports.ProposeLetterTemplateDto = exports.ApproveCertificateTemplateDto = exports.ProposeCertificateTemplateDto = exports.ApproveLetterheadVersionDto = exports.ProposeLetterheadVersionDto = exports.RecordSpotCheckDto = exports.InitiateReplenishmentClaimDto = exports.CaptureVoucherDto = exports.AdjustFloatCapsDto = exports.EstablishFloatDto = exports.ProposeWeightMatrixVersionDto = exports.ProposeKpiDefinitionDto = exports.MapKraToObjectiveDto = void 0;
exports.RejectInflowDto = exports.ManualMatchInflowDto = exports.ConfigureCustodianAccountDto = exports.ConfigureGatewayProviderDto = exports.ProposeDepartmentHeadDto = exports.CreatePositionDto = exports.CreateOrgUnitDto = exports.DecideContactAmendmentDto = exports.RequestContactAmendmentDto = exports.DecideEmployeeLifecycleDto = exports.RequestIncentivePctChangeDto = exports.RequestOffboardingDto = exports.RequestOnboardingDto = exports.DecideBankAccountChangeDto = exports.AttachBankAccountChangeEvidenceDto = exports.RequestBankAccountChangeDto = exports.GenerateBudgetReviewPackDto = exports.RequestEncumbranceDto = exports.CreateBudgetVersionDto = exports.IngestReplayCsvDto = exports.StageMigrationCsvDto = exports.CreateTxnDto = exports.ThirdPartyPayerDto = exports.LoadChartOfAccountsDto = exports.CreateLedgerEntityDto = exports.ChartOfAccountTemplateRowDto = exports.SendClientMessageDto = exports.AssignRelationshipManagerDto = exports.SetupMandateDto = exports.DeactivateUserDto = exports.CreateStaffUserDto = exports.ProposeAssignRoleDto = exports.RevokeDelegationGrantDto = exports.RequestDelegationGrantDto = exports.OpenPeriodDto = exports.RunHalalFundDistributionDto = exports.RequestJournalPostingDto = exports.CreateJournalEntryDto = exports.RequiredDocumentConfigDto = exports.AttachDocumentDto = exports.TransmitBoardMinutesDto = exports.UploadBoardMinutesDto = exports.UpdateBoardCalendarReminderConfigDto = exports.CreateBoardCalendarEventDto = exports.IssueBoardDirectiveDto = exports.ProposeInvestmentMemoThresholdDto = exports.CommitteeApproveInvestmentMemoDto = exports.DraftInvestmentMemoDto = exports.RecordFacilityFundAccountingTermsDto = exports.RunStressTestDto = void 0;
exports.ConfigureRemittanceDueDateDto = exports.ConfigureTaxGlMappingDto = exports.AssessStampDutyDto = exports.RecognizeVendorInvoiceVatDto = exports.CreateFeeInvoiceDto = exports.GrantTaxExemptionDto = exports.ProposeTaxRateVersionDto = exports.CreateSubmissionDto = exports.SupervisorDecideLeaveDto = exports.ApplyForLeaveDto = exports.ManualScreeningAttestationDto = exports.ProposeHitAdjudicationDto = exports.RunScreeningDto = exports.ConfigureScreeningCommercialProviderDto = exports.UpdateScreeningGatewayConfigDto = exports.ConfigureScreeningListSourceDto = exports.ConfigureCalendarProviderDto = exports.DecideExceptionDto = exports.RequestExceptionDto = exports.ImportFileEventsDto = exports.MapLockUserDto = exports.ConfigureAiProviderCredentialDto = exports.ConfigureAttendanceProviderDto = exports.ProposeMarketValueEntryDto = exports.ApproveSubscriptionRequestDto = exports.InitiateSubscriptionRequestDto = exports.SubscriptionThirdPartyPayerDto = exports.ConfirmDepositAndSetTargetDto = exports.ProposeOversightPolicyDto = exports.StartOversightSessionDto = exports.CloseDataBreachDto = exports.AssessDataBreachDto = exports.LogDataBreachDto = exports.ConfirmRetentionScheduleEntryDto = exports.AcknowledgePrivacyNoticeDto = exports.DecideMandateAmendmentDto = exports.RequestMandateAmendmentDto = exports.MatchBankStatementLineDto = exports.UploadBankStatementLinesDto = exports.BankStatementLineInputDto = exports.DecideCounterpartyWriteOffDto = exports.RequestCounterpartyWriteOffDto = exports.DecideInvestorExitDto = exports.RequestInvestorExitDto = exports.SetDeliverableUrlDto = exports.AssignTaskDto = exports.TransmitDocumentDto = exports.MarkSubmissionReceivedDto = exports.SubmitReportPackDto = exports.GatewayWebhookDto = void 0;
exports.SaveDashboardDto = exports.ComposeTileDto = exports.AssignActivationSubStepTaskDto = exports.ProposeProspectusSheetDto = exports.ProspectusSheetFieldsDto = exports.CompilePayoutBatchDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ENTITY_TYPES = [
    'HNWI_INDIVIDUAL', 'CORPORATE', 'TRUST', 'COOPERATIVE',
    'PENSION', 'FAMILY_OFFICE', 'OTHER',
];
class OnboardInvestorDto {
    fullLegalName;
    entityType;
    nationality;
    taxIdentificationNumber;
    dateOfBirthOrIncorporation;
    contactEmail;
    contactPhone;
    registeredAddress;
    sourceOfFunds;
    authorisedSignatories;
}
exports.OnboardInvestorDto = OnboardInvestorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "fullLegalName", void 0);
__decorate([
    (0, class_validator_1.IsIn)(ENTITY_TYPES),
    __metadata("design:type", Object)
], OnboardInvestorDto.prototype, "entityType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "nationality", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "taxIdentificationNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "dateOfBirthOrIncorporation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "contactEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "contactPhone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "registeredAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardInvestorDto.prototype, "sourceOfFunds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], OnboardInvestorDto.prototype, "authorisedSignatories", void 0);
class ScreeningChecklistEntryDto {
    itemCode;
    listVersionOrDate;
    notes;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScreeningChecklistEntryDto.prototype, "itemCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScreeningChecklistEntryDto.prototype, "listVersionOrDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScreeningChecklistEntryDto.prototype, "notes", void 0);
class RecordScreeningDto {
    listsChecked;
    searchTermsUsed;
    result;
    countersignerUserId;
    notes;
}
exports.RecordScreeningDto = RecordScreeningDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScreeningChecklistEntryDto),
    __metadata("design:type", Array)
], RecordScreeningDto.prototype, "listsChecked", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordScreeningDto.prototype, "searchTermsUsed", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['NO_MATCH', 'POTENTIAL_MATCH', 'MATCH']),
    __metadata("design:type", String)
], RecordScreeningDto.prototype, "result", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordScreeningDto.prototype, "countersignerUserId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordScreeningDto.prototype, "notes", void 0);
class WorkflowDecisionDto {
    notes;
}
exports.WorkflowDecisionDto = WorkflowDecisionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkflowDecisionDto.prototype, "notes", void 0);
class SetAmlRiskRatingDto {
    amlRiskRating;
}
exports.SetAmlRiskRatingDto = SetAmlRiskRatingDto;
__decorate([
    (0, class_validator_1.IsIn)(['LOW', 'MEDIUM', 'HIGH']),
    __metadata("design:type", String)
], SetAmlRiskRatingDto.prototype, "amlRiskRating", void 0);
class RecordInvestorRiskAssessmentDto {
    riskMetricGrades;
    pepSanctionsGrid;
    complianceObservations;
}
exports.RecordInvestorRiskAssessmentDto = RecordInvestorRiskAssessmentDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RecordInvestorRiskAssessmentDto.prototype, "riskMetricGrades", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RecordInvestorRiskAssessmentDto.prototype, "pepSanctionsGrid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorRiskAssessmentDto.prototype, "complianceObservations", void 0);
class RecordInvestorIc1ReviewDto {
    checklist;
    notes;
    pass;
}
exports.RecordInvestorIc1ReviewDto = RecordInvestorIc1ReviewDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordInvestorIc1ReviewDto.prototype, "checklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorIc1ReviewDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RecordInvestorIc1ReviewDto.prototype, "pass", void 0);
class RecordInvestorRiskReviewDto {
    eddChecklist;
    eddRecommendation;
    eddConditionsOrBasis;
    periodicReviewFrequency;
    riskNotes;
}
exports.RecordInvestorRiskReviewDto = RecordInvestorRiskReviewDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordInvestorRiskReviewDto.prototype, "eddChecklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['APPROVE_WITH_CONDITIONS', 'DECLINE']),
    __metadata("design:type", String)
], RecordInvestorRiskReviewDto.prototype, "eddRecommendation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorRiskReviewDto.prototype, "eddConditionsOrBasis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL']),
    __metadata("design:type", String)
], RecordInvestorRiskReviewDto.prototype, "periodicReviewFrequency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorRiskReviewDto.prototype, "riskNotes", void 0);
class RecordInvestorMdDecisionDto {
    decision;
    conditionsOrReason;
}
exports.RecordInvestorMdDecisionDto = RecordInvestorMdDecisionDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVED', 'DECLINED']),
    __metadata("design:type", String)
], RecordInvestorMdDecisionDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorMdDecisionDto.prototype, "conditionsOrReason", void 0);
class RecordInvestorIc2ReviewDto {
    checklist;
    notes;
    outcome;
}
exports.RecordInvestorIc2ReviewDto = RecordInvestorIc2ReviewDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordInvestorIc2ReviewDto.prototype, "checklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordInvestorIc2ReviewDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['SATISFACTORY', 'UNSATISFACTORY']),
    __metadata("design:type", String)
], RecordInvestorIc2ReviewDto.prototype, "outcome", void 0);
class PrepareFilingRunDto {
    regulatorTemplateId;
    ledgerEntityCode;
    periodStart;
    periodEnd;
}
exports.PrepareFilingRunDto = PrepareFilingRunDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrepareFilingRunDto.prototype, "regulatorTemplateId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrepareFilingRunDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrepareFilingRunDto.prototype, "periodStart", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrepareFilingRunDto.prototype, "periodEnd", void 0);
class SetEntryValueDto {
    value;
}
exports.SetEntryValueDto = SetEntryValueDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetEntryValueDto.prototype, "value", void 0);
class RecordSecAckDto {
    ackRef;
}
exports.RecordSecAckDto = RecordSecAckDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordSecAckDto.prototype, "ackRef", void 0);
class CertifyFilingDto {
    workflowInstanceId;
}
exports.CertifyFilingDto = CertifyFilingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CertifyFilingDto.prototype, "workflowInstanceId", void 0);
class CalibrateFieldDto {
    page;
    xPt;
    yPt;
    label;
    cellClass;
    sourceKey;
    staticValue;
}
exports.CalibrateFieldDto = CalibrateFieldDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CalibrateFieldDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalibrateFieldDto.prototype, "xPt", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalibrateFieldDto.prototype, "yPt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateFieldDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['AUTO', 'ENTRY', 'STATIC']),
    __metadata("design:type", String)
], CalibrateFieldDto.prototype, "cellClass", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateFieldDto.prototype, "sourceKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateFieldDto.prototype, "staticValue", void 0);
class CalibrateCellDto {
    sheetName;
    cellAddress;
    label;
    cellClass;
    sourceKey;
    staticValue;
}
exports.CalibrateCellDto = CalibrateCellDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "sheetName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "cellAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['AUTO', 'ENTRY', 'STATIC']),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "cellClass", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "sourceKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalibrateCellDto.prototype, "staticValue", void 0);
class OnboardWmClientDto {
    investorId;
    advisorUserId;
}
exports.OnboardWmClientDto = OnboardWmClientDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardWmClientDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardWmClientDto.prototype, "advisorUserId", void 0);
class DeclareClientAssetDto {
    assetClassCode;
    description;
    quantity;
    declaredValueKobo;
    valuationDate;
    custodyFlag;
    evidenceDocumentId;
    maturityDate;
    tenorMonths;
    scheduledProfitTakingDates;
    targetReturnPct;
}
exports.DeclareClientAssetDto = DeclareClientAssetDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "assetClassCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeclareClientAssetDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "declaredValueKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "valuationDate", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['ONE17', 'EXTERNAL']),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "custodyFlag", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "evidenceDocumentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareClientAssetDto.prototype, "maturityDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeclareClientAssetDto.prototype, "tenorMonths", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], DeclareClientAssetDto.prototype, "scheduledProfitTakingDates", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeclareClientAssetDto.prototype, "targetReturnPct", void 0);
class UpdateWmFxRateDto {
    nairaPerUsd;
}
exports.UpdateWmFxRateDto = UpdateWmFxRateDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateWmFxRateDto.prototype, "nairaPerUsd", void 0);
class SubmitHoldingActionRequestDto {
    requestedAmountKobo;
    notes;
}
exports.SubmitHoldingActionRequestDto = SubmitHoldingActionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitHoldingActionRequestDto.prototype, "requestedAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitHoldingActionRequestDto.prototype, "notes", void 0);
class SetShariahScreenDto {
    tag;
}
exports.SetShariahScreenDto = SetShariahScreenDto;
__decorate([
    (0, class_validator_1.IsIn)(['SCREENED_COMPLIANT', 'SCREENED_NON_COMPLIANT', 'UNSCREENED']),
    __metadata("design:type", String)
], SetShariahScreenDto.prototype, "tag", void 0);
class SetAllocationPolicyDto {
    targetAllocations;
    riskBand;
}
exports.SetAllocationPolicyDto = SetAllocationPolicyDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], SetAllocationPolicyDto.prototype, "targetAllocations", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CONSERVATIVE', 'MODERATE', 'BALANCED', 'GROWTH', 'AGGRESSIVE']),
    __metadata("design:type", String)
], SetAllocationPolicyDto.prototype, "riskBand", void 0);
class SetRiskProfileDto {
    questionnaireResponses;
    riskBand;
}
exports.SetRiskProfileDto = SetRiskProfileDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], SetRiskProfileDto.prototype, "questionnaireResponses", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CONSERVATIVE', 'MODERATE', 'BALANCED', 'GROWTH', 'AGGRESSIVE']),
    __metadata("design:type", String)
], SetRiskProfileDto.prototype, "riskBand", void 0);
class SetGrowthPlanDto {
    horizon;
    milestones;
    targetGlidePath;
    reviewSchedule;
}
exports.SetGrowthPlanDto = SetGrowthPlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetGrowthPlanDto.prototype, "horizon", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], SetGrowthPlanDto.prototype, "milestones", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], SetGrowthPlanDto.prototype, "targetGlidePath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetGrowthPlanDto.prototype, "reviewSchedule", void 0);
class CreateAdvisoryRecordDto {
    recommendation;
    rationale;
    riskNotes;
    shariahNote;
}
exports.CreateAdvisoryRecordDto = CreateAdvisoryRecordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvisoryRecordDto.prototype, "recommendation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvisoryRecordDto.prototype, "rationale", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvisoryRecordDto.prototype, "riskNotes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvisoryRecordDto.prototype, "shariahNote", void 0);
class RunSandboxRiskAssessmentDto {
    scenarioCode;
}
exports.RunSandboxRiskAssessmentDto = RunSandboxRiskAssessmentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunSandboxRiskAssessmentDto.prototype, "scenarioCode", void 0);
class ChargeAdvisoryFeeDto {
    ledgerEntityCode;
    amountKobo;
    drAccountCodeOverride;
    crAccountCodeOverride;
    entryDate;
}
exports.ChargeAdvisoryFeeDto = ChargeAdvisoryFeeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChargeAdvisoryFeeDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChargeAdvisoryFeeDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChargeAdvisoryFeeDto.prototype, "drAccountCodeOverride", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChargeAdvisoryFeeDto.prototype, "crAccountCodeOverride", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChargeAdvisoryFeeDto.prototype, "entryDate", void 0);
class StartCycleDto {
    cycleType;
    orgUnitCode;
    periodStart;
    periodEnd;
}
exports.StartCycleDto = StartCycleDto;
__decorate([
    (0, class_validator_1.IsIn)(['INCENTIVE_CYCLE', 'ANNUAL_APPRAISAL']),
    __metadata("design:type", String)
], StartCycleDto.prototype, "cycleType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCycleDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCycleDto.prototype, "periodStart", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCycleDto.prototype, "periodEnd", void 0);
class KpiScoreEntryDto {
    kpiDefinitionId;
    selfScorePct;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KpiScoreEntryDto.prototype, "kpiDefinitionId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], KpiScoreEntryDto.prototype, "selfScorePct", void 0);
class SubmitSelfScoreDto {
    employeeId;
    scores;
}
exports.SubmitSelfScoreDto = SubmitSelfScoreDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitSelfScoreDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => KpiScoreEntryDto),
    __metadata("design:type", Array)
], SubmitSelfScoreDto.prototype, "scores", void 0);
class AdjustValidatedScoreDto {
    kpiDefinitionId;
    validatedScorePct;
}
exports.AdjustValidatedScoreDto = AdjustValidatedScoreDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdjustValidatedScoreDto.prototype, "kpiDefinitionId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AdjustValidatedScoreDto.prototype, "validatedScorePct", void 0);
class RecordBehaviouralGateDto {
    employeeId;
    attendanceOk;
    ethicalConductOk;
    trendsViolation;
    disciplinaryNote;
    evidenceRef;
    severity;
}
exports.RecordBehaviouralGateDto = RecordBehaviouralGateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordBehaviouralGateDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], RecordBehaviouralGateDto.prototype, "trendsViolation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordBehaviouralGateDto.prototype, "disciplinaryNote", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordBehaviouralGateDto.prototype, "evidenceRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordBehaviouralGateDto.prototype, "severity", void 0);
class ProposeScorecardOverrideDto {
    employeeId;
    kpiDefinitionId;
    overrideWeightPct;
    reason;
}
exports.ProposeScorecardOverrideDto = ProposeScorecardOverrideDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeScorecardOverrideDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeScorecardOverrideDto.prototype, "kpiDefinitionId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProposeScorecardOverrideDto.prototype, "overrideWeightPct", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeScorecardOverrideDto.prototype, "reason", void 0);
class LogActivityDto {
    employeeId;
    kpiDefinitionId;
    activityText;
    taskRef;
}
exports.LogActivityDto = LogActivityDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogActivityDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogActivityDto.prototype, "kpiDefinitionId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogActivityDto.prototype, "activityText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogActivityDto.prototype, "taskRef", void 0);
class RunPayrollDto {
    periodMonth;
    periodYear;
    ledgerEntityCode;
    drStaffCostAccountCode;
    drIncentiveExpenseAccountCode;
    crPayePayableAccountCode;
    crPensionPayableAccountCode;
    crNhfPayableAccountCode;
    crNetPayPayableAccountCode;
}
exports.RunPayrollDto = RunPayrollDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RunPayrollDto.prototype, "periodMonth", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RunPayrollDto.prototype, "periodYear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "drStaffCostAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "drIncentiveExpenseAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "crPayePayableAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "crPensionPayableAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "crNhfPayableAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunPayrollDto.prototype, "crNetPayPayableAccountCode", void 0);
class ProposeEmolumentComponentDto {
    cadre;
    notch;
    component;
    componentType;
    annualAmountKobo;
    taxable;
    effectiveFrom;
}
exports.ProposeEmolumentComponentDto = ProposeEmolumentComponentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeEmolumentComponentDto.prototype, "cadre", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ProposeEmolumentComponentDto.prototype, "notch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeEmolumentComponentDto.prototype, "component", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['SALARY', 'ALLOWANCE', 'COST_REFUND']),
    __metadata("design:type", String)
], ProposeEmolumentComponentDto.prototype, "componentType", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProposeEmolumentComponentDto.prototype, "annualAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProposeEmolumentComponentDto.prototype, "taxable", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeEmolumentComponentDto.prototype, "effectiveFrom", void 0);
class CreateWelfareSchemeDto {
    name;
    description;
}
exports.CreateWelfareSchemeDto = CreateWelfareSchemeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWelfareSchemeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWelfareSchemeDto.prototype, "description", void 0);
class CreateRewardTypeDto {
    name;
    description;
}
exports.CreateRewardTypeDto = CreateRewardTypeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRewardTypeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRewardTypeDto.prototype, "description", void 0);
class RecommendTalentDto {
    employeeId;
    recommendationType;
    welfareSchemeId;
    rewardTypeId;
    appraisalCycleId;
    justification;
}
exports.RecommendTalentDto = RecommendTalentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['WELFARE', 'REWARD']),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "recommendationType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "welfareSchemeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "rewardTypeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "appraisalCycleId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecommendTalentDto.prototype, "justification", void 0);
class PublicInvestorExpressIntakeDto {
    fullLegalName;
    entityType;
    nationality;
    bvn;
    rcNumber;
    contactEmail;
    contactPhone;
    privacyNoticeAcknowledged;
    marketingConsent;
}
exports.PublicInvestorExpressIntakeDto = PublicInvestorExpressIntakeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "fullLegalName", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['HNWI_INDIVIDUAL', 'CORPORATE', 'TRUST', 'COOPERATIVE', 'PENSION', 'FAMILY_OFFICE', 'OTHER']),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "entityType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "nationality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "bvn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "rcNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "contactEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], PublicInvestorExpressIntakeDto.prototype, "contactPhone", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PublicInvestorExpressIntakeDto.prototype, "privacyNoticeAcknowledged", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PublicInvestorExpressIntakeDto.prototype, "marketingConsent", void 0);
class PublicCounterpartyIntakeDto {
    legalName;
    counterpartyType;
    rcNumber;
    country;
    purposeOfFinancing;
    amountSoughtKobo;
    expectedSourceOfRepayment;
    creditBureauConsent;
    privacyNoticeAcknowledged;
}
exports.PublicCounterpartyIntakeDto = PublicCounterpartyIntakeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "legalName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "counterpartyType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "rcNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "purposeOfFinancing", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "amountSoughtKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], PublicCounterpartyIntakeDto.prototype, "expectedSourceOfRepayment", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PublicCounterpartyIntakeDto.prototype, "creditBureauConsent", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PublicCounterpartyIntakeDto.prototype, "privacyNoticeAcknowledged", void 0);
class PromoteInvestorIntakeDto {
    sanctionsScreenResult;
}
exports.PromoteInvestorIntakeDto = PromoteInvestorIntakeDto;
__decorate([
    (0, class_validator_1.IsIn)(['CLEAR', 'FLAGGED']),
    __metadata("design:type", String)
], PromoteInvestorIntakeDto.prototype, "sanctionsScreenResult", void 0);
class RejectIntakeDto {
    reason;
}
exports.RejectIntakeDto = RejectIntakeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], RejectIntakeDto.prototype, "reason", void 0);
class ProposeStrategyStatementDto {
    statementTypeCode;
    content;
    explanation;
}
exports.ProposeStrategyStatementDto = ProposeStrategyStatementDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeStrategyStatementDto.prototype, "statementTypeCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeStrategyStatementDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeStrategyStatementDto.prototype, "explanation", void 0);
class AddStatementTypeConfigDto {
    code;
    label;
    description;
    allowsMultipleActive;
    sortOrder;
}
exports.AddStatementTypeConfigDto = AddStatementTypeConfigDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddStatementTypeConfigDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], AddStatementTypeConfigDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddStatementTypeConfigDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AddStatementTypeConfigDto.prototype, "allowsMultipleActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AddStatementTypeConfigDto.prototype, "sortOrder", void 0);
class ApproveStrategyStatementDto {
    boardResolutionRef;
}
exports.ApproveStrategyStatementDto = ApproveStrategyStatementDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveStrategyStatementDto.prototype, "boardResolutionRef", void 0);
class UpdatePillarGovernanceDto {
    explanation;
    boardResolutionRef;
}
exports.UpdatePillarGovernanceDto = UpdatePillarGovernanceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePillarGovernanceDto.prototype, "explanation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePillarGovernanceDto.prototype, "boardResolutionRef", void 0);
class UpdateObjectiveGovernanceDto {
    explanation;
    boardResolutionRef;
}
exports.UpdateObjectiveGovernanceDto = UpdateObjectiveGovernanceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateObjectiveGovernanceDto.prototype, "explanation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateObjectiveGovernanceDto.prototype, "boardResolutionRef", void 0);
class ProposePillarDto {
    code;
    name;
    description;
}
exports.ProposePillarDto = ProposePillarDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ProposePillarDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], ProposePillarDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposePillarDto.prototype, "description", void 0);
class ApprovePillarDto {
    boardResolutionRef;
}
exports.ApprovePillarDto = ApprovePillarDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApprovePillarDto.prototype, "boardResolutionRef", void 0);
class ProposeObjectiveDto {
    code;
    name;
    pillarCode;
    explanation;
}
exports.ProposeObjectiveDto = ProposeObjectiveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ProposeObjectiveDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], ProposeObjectiveDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeObjectiveDto.prototype, "pillarCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeObjectiveDto.prototype, "explanation", void 0);
class ApproveObjectiveDto {
    boardResolutionRef;
}
exports.ApproveObjectiveDto = ApproveObjectiveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveObjectiveDto.prototype, "boardResolutionRef", void 0);
class MapKraToObjectiveDto {
    kraCode;
    objectiveCode;
}
exports.MapKraToObjectiveDto = MapKraToObjectiveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MapKraToObjectiveDto.prototype, "kraCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MapKraToObjectiveDto.prototype, "objectiveCode", void 0);
class ProposeKpiDefinitionDto {
    kraCode;
    tier;
    kpiText;
    kpiClass;
    objectiveText;
    exampleActivity;
    measurementBasis;
    frequency;
}
exports.ProposeKpiDefinitionDto = ProposeKpiDefinitionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "kraCode", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['JUNIOR', 'SENIOR', 'CHIEF']),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "tier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "kpiText", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY']),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "kpiClass", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "objectiveText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "exampleActivity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['AUTO', 'MANUAL', 'HYBRID']),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "measurementBasis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeKpiDefinitionDto.prototype, "frequency", void 0);
class WeightMatrixClassEntryDto {
    kpiClass;
    weightPct;
}
__decorate([
    (0, class_validator_1.IsIn)(['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY']),
    __metadata("design:type", String)
], WeightMatrixClassEntryDto.prototype, "kpiClass", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WeightMatrixClassEntryDto.prototype, "weightPct", void 0);
class ProposeWeightMatrixVersionDto {
    orgUnitCode;
    tier;
    weights;
}
exports.ProposeWeightMatrixVersionDto = ProposeWeightMatrixVersionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeWeightMatrixVersionDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['JUNIOR', 'SENIOR', 'CHIEF']),
    __metadata("design:type", String)
], ProposeWeightMatrixVersionDto.prototype, "tier", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => WeightMatrixClassEntryDto),
    __metadata("design:type", Array)
], ProposeWeightMatrixVersionDto.prototype, "weights", void 0);
class EstablishFloatDto {
    floatCode;
    custodianUserId;
    officeLabel;
    ledgerEntityCode;
    floatCeilingKobo;
    singleVoucherCapKobo;
}
exports.EstablishFloatDto = EstablishFloatDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "floatCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "custodianUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "officeLabel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "floatCeilingKobo", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], EstablishFloatDto.prototype, "singleVoucherCapKobo", void 0);
class AdjustFloatCapsDto {
    floatCeilingKobo;
    singleVoucherCapKobo;
}
exports.AdjustFloatCapsDto = AdjustFloatCapsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], AdjustFloatCapsDto.prototype, "floatCeilingKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], AdjustFloatCapsDto.prototype, "singleVoucherCapKobo", void 0);
class CaptureVoucherDto {
    floatId;
    voucherDate;
    payee;
    expenseAccountCode;
    amountKobo;
}
exports.CaptureVoucherDto = CaptureVoucherDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CaptureVoucherDto.prototype, "floatId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CaptureVoucherDto.prototype, "voucherDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CaptureVoucherDto.prototype, "payee", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CaptureVoucherDto.prototype, "expenseAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], CaptureVoucherDto.prototype, "amountKobo", void 0);
class InitiateReplenishmentClaimDto {
    floatId;
    voucherIds;
}
exports.InitiateReplenishmentClaimDto = InitiateReplenishmentClaimDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateReplenishmentClaimDto.prototype, "floatId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], InitiateReplenishmentClaimDto.prototype, "voucherIds", void 0);
class RecordSpotCheckDto {
    floatId;
    countedKobo;
    notes;
}
exports.RecordSpotCheckDto = RecordSpotCheckDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordSpotCheckDto.prototype, "floatId", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RecordSpotCheckDto.prototype, "countedKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordSpotCheckDto.prototype, "notes", void 0);
class ProposeLetterheadVersionDto {
    companyName;
    addressLine1;
    addressLine2;
    rcNumber;
    secRegistrationLine;
    brandPrimaryColorHex;
    brandAccentColorHex;
    brandDeepColorHex;
    footerDisclaimer;
}
exports.ProposeLetterheadVersionDto = ProposeLetterheadVersionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "companyName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "addressLine1", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "addressLine2", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "rcNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "secRegistrationLine", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "brandPrimaryColorHex", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "brandAccentColorHex", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "brandDeepColorHex", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterheadVersionDto.prototype, "footerDisclaimer", void 0);
class ApproveLetterheadVersionDto {
}
exports.ApproveLetterheadVersionDto = ApproveLetterheadVersionDto;
class ProposeCertificateTemplateDto {
    productClass;
    disclaimerText;
    secRuleDisclaimer;
}
exports.ProposeCertificateTemplateDto = ProposeCertificateTemplateDto;
__decorate([
    (0, class_validator_1.IsIn)(['HF_UNIT_NAV', 'POOL_ND_PSR', 'ND_WAKALAH']),
    __metadata("design:type", String)
], ProposeCertificateTemplateDto.prototype, "productClass", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeCertificateTemplateDto.prototype, "disclaimerText", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeCertificateTemplateDto.prototype, "secRuleDisclaimer", void 0);
class ApproveCertificateTemplateDto {
}
exports.ApproveCertificateTemplateDto = ApproveCertificateTemplateDto;
const LETTER_TYPES = ['WELCOME', 'MATURITY_NOTICE', 'ROLLOVER_CONFIRMATION', 'AD_HOC', 'BANK_INSTRUCTION', 'TAX_REMITTANCE_INSTRUCTION'];
class ProposeLetterTemplateDto {
    letterType;
    bodyTemplate;
}
exports.ProposeLetterTemplateDto = ProposeLetterTemplateDto;
__decorate([
    (0, class_validator_1.IsIn)(LETTER_TYPES),
    __metadata("design:type", String)
], ProposeLetterTemplateDto.prototype, "letterType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeLetterTemplateDto.prototype, "bodyTemplate", void 0);
class ApproveLetterTemplateDto {
}
exports.ApproveLetterTemplateDto = ApproveLetterTemplateDto;
class GenerateLetterDto {
    letterType;
    investorId;
    counterpartyId;
    productAccountId;
    ndMandateAccountId;
    extraMergeFields;
}
exports.GenerateLetterDto = GenerateLetterDto;
__decorate([
    (0, class_validator_1.IsIn)(LETTER_TYPES),
    __metadata("design:type", String)
], GenerateLetterDto.prototype, "letterType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLetterDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLetterDto.prototype, "counterpartyId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLetterDto.prototype, "productAccountId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLetterDto.prototype, "ndMandateAccountId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], GenerateLetterDto.prototype, "extraMergeFields", void 0);
class RejectLetterInstanceDto {
    notes;
}
exports.RejectLetterInstanceDto = RejectLetterInstanceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RejectLetterInstanceDto.prototype, "notes", void 0);
class PublishStrategyDto {
    summary;
}
exports.PublishStrategyDto = PublishStrategyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], PublishStrategyDto.prototype, "summary", void 0);
class UploadMarketingResourceDto {
    title;
    resourceType;
    fileReference;
    version;
}
exports.UploadMarketingResourceDto = UploadMarketingResourceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UploadMarketingResourceDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UploadMarketingResourceDto.prototype, "resourceType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], UploadMarketingResourceDto.prototype, "fileReference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UploadMarketingResourceDto.prototype, "version", void 0);
class SubscribeMarketingDto {
    email;
    fullName;
    segments;
}
exports.SubscribeMarketingDto = SubscribeMarketingDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SubscribeMarketingDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], SubscribeMarketingDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SubscribeMarketingDto.prototype, "segments", void 0);
class UnsubscribeMarketingDto {
    email;
    token;
}
exports.UnsubscribeMarketingDto = UnsubscribeMarketingDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UnsubscribeMarketingDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnsubscribeMarketingDto.prototype, "token", void 0);
class InitiateMarketingSendDto {
    subject;
    body;
    targetSegments;
    resourceId;
}
exports.InitiateMarketingSendDto = InitiateMarketingSendDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], InitiateMarketingSendDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateMarketingSendDto.prototype, "body", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], InitiateMarketingSendDto.prototype, "targetSegments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateMarketingSendDto.prototype, "resourceId", void 0);
class OnboardCounterpartyDto {
    legalName;
    counterpartyType;
    rcNumber;
    country;
    purposeOfFinancing;
    amountSoughtKobo;
    expectedSourceOfRepayment;
    creditBureauConsent;
    shariahCertRef;
    shariahCertExpiry;
    contactEmail;
}
exports.OnboardCounterpartyDto = OnboardCounterpartyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "legalName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "counterpartyType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "rcNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "purposeOfFinancing", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "amountSoughtKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "expectedSourceOfRepayment", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OnboardCounterpartyDto.prototype, "creditBureauConsent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "shariahCertRef", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "shariahCertExpiry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], OnboardCounterpartyDto.prototype, "contactEmail", void 0);
class RecordCounterpartyRiskAssessmentDto {
    riskMetricGrades;
    pepSanctionsGrid;
    complianceObservations;
}
exports.RecordCounterpartyRiskAssessmentDto = RecordCounterpartyRiskAssessmentDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RecordCounterpartyRiskAssessmentDto.prototype, "riskMetricGrades", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RecordCounterpartyRiskAssessmentDto.prototype, "pepSanctionsGrid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyRiskAssessmentDto.prototype, "complianceObservations", void 0);
class RecordCounterpartyIc1ReviewDto {
    checklist;
    notes;
    pass;
}
exports.RecordCounterpartyIc1ReviewDto = RecordCounterpartyIc1ReviewDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordCounterpartyIc1ReviewDto.prototype, "checklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyIc1ReviewDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RecordCounterpartyIc1ReviewDto.prototype, "pass", void 0);
class RecordCounterpartyRiskReviewDto {
    eddChecklist;
    eddRecommendation;
    eddConditionsOrBasis;
    periodicReviewFrequency;
    riskNotes;
    approvedExposureLimitKobo;
}
exports.RecordCounterpartyRiskReviewDto = RecordCounterpartyRiskReviewDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordCounterpartyRiskReviewDto.prototype, "eddChecklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['APPROVE_WITH_CONDITIONS', 'DECLINE']),
    __metadata("design:type", String)
], RecordCounterpartyRiskReviewDto.prototype, "eddRecommendation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyRiskReviewDto.prototype, "eddConditionsOrBasis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL']),
    __metadata("design:type", String)
], RecordCounterpartyRiskReviewDto.prototype, "periodicReviewFrequency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyRiskReviewDto.prototype, "riskNotes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RecordCounterpartyRiskReviewDto.prototype, "approvedExposureLimitKobo", void 0);
class RecordCounterpartyMdDecisionDto {
    decision;
    conditionsOrReason;
}
exports.RecordCounterpartyMdDecisionDto = RecordCounterpartyMdDecisionDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVED', 'DECLINED']),
    __metadata("design:type", String)
], RecordCounterpartyMdDecisionDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyMdDecisionDto.prototype, "conditionsOrReason", void 0);
class RecordCounterpartyIc2ReviewDto {
    checklist;
    notes;
    outcome;
}
exports.RecordCounterpartyIc2ReviewDto = RecordCounterpartyIc2ReviewDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RecordCounterpartyIc2ReviewDto.prototype, "checklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordCounterpartyIc2ReviewDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['SATISFACTORY', 'UNSATISFACTORY']),
    __metadata("design:type", String)
], RecordCounterpartyIc2ReviewDto.prototype, "outcome", void 0);
class RequestCounterpartyRestructureDto {
    requestType;
    extensionMonths;
    reason;
}
exports.RequestCounterpartyRestructureDto = RequestCounterpartyRestructureDto;
__decorate([
    (0, class_validator_1.IsIn)(['EXTENSION', 'RESTRUCTURE']),
    __metadata("design:type", String)
], RequestCounterpartyRestructureDto.prototype, "requestType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RequestCounterpartyRestructureDto.prototype, "extensionMonths", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], RequestCounterpartyRestructureDto.prototype, "reason", void 0);
class DecideCounterpartyRestructureDto {
    decision;
    notes;
}
exports.DecideCounterpartyRestructureDto = DecideCounterpartyRestructureDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVED', 'DECLINED']),
    __metadata("design:type", String)
], DecideCounterpartyRestructureDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideCounterpartyRestructureDto.prototype, "notes", void 0);
class ToggleRestructuringFeatureDto {
    enabled;
}
exports.ToggleRestructuringFeatureDto = ToggleRestructuringFeatureDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ToggleRestructuringFeatureDto.prototype, "enabled", void 0);
class SubmitCounterpartyEnquiryDto {
    subject;
    message;
}
exports.SubmitCounterpartyEnquiryDto = SubmitCounterpartyEnquiryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], SubmitCounterpartyEnquiryDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], SubmitCounterpartyEnquiryDto.prototype, "message", void 0);
class RaiseComplaintDto {
    investorId;
    counterpartyId;
    category;
    description;
    isDsr;
    dsrCategory;
}
exports.RaiseComplaintDto = RaiseComplaintDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "counterpartyId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RaiseComplaintDto.prototype, "isDsr", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['ACCESS', 'RECTIFICATION', 'ERASURE', 'OBJECTION', 'PORTABILITY']),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "dsrCategory", void 0);
class AssignComplaintOwnerDto {
    ownerUserId;
}
exports.AssignComplaintOwnerDto = AssignComplaintOwnerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignComplaintOwnerDto.prototype, "ownerUserId", void 0);
class EscalateComplaintDto {
    escalatedToUserId;
}
exports.EscalateComplaintDto = EscalateComplaintDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EscalateComplaintDto.prototype, "escalatedToUserId", void 0);
class ResolveComplaintDto {
    resolutionNotes;
    dsrLegalBasis;
}
exports.ResolveComplaintDto = ResolveComplaintDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], ResolveComplaintDto.prototype, "resolutionNotes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], ResolveComplaintDto.prototype, "dsrLegalBasis", void 0);
class CreateFundProductDto {
    code;
    name;
    engineType;
}
exports.CreateFundProductDto = CreateFundProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateFundProductDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateFundProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['UNIT_NAV', 'PSR_WATERFALL', 'MANDATE']),
    __metadata("design:type", String)
], CreateFundProductDto.prototype, "engineType", void 0);
class ApproveProductShariahDto {
    ssbResolutionRef;
}
exports.ApproveProductShariahDto = ApproveProductShariahDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveProductShariahDto.prototype, "ssbResolutionRef", void 0);
class UpdateZakatNisabConfigDto {
    nisabGoldGrams;
    goldPricePerGramKobo;
}
exports.UpdateZakatNisabConfigDto = UpdateZakatNisabConfigDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateZakatNisabConfigDto.prototype, "nisabGoldGrams", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateZakatNisabConfigDto.prototype, "goldPricePerGramKobo", void 0);
class CreateZakatAssessmentDto {
    assessmentDateGregorian;
    assessmentDateHijri;
}
exports.CreateZakatAssessmentDto = CreateZakatAssessmentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateZakatAssessmentDto.prototype, "assessmentDateGregorian", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateZakatAssessmentDto.prototype, "assessmentDateHijri", void 0);
class DeclareZakatScheduleItemDto {
    scheduleType;
    description;
    amountKobo;
    zakatability;
}
exports.DeclareZakatScheduleItemDto = DeclareZakatScheduleItemDto;
__decorate([
    (0, class_validator_1.IsIn)(['CASH_BANK', 'GOLD_SILVER', 'INVESTMENT', 'FIXED_ASSET', 'RECEIVABLE', 'LIABILITY']),
    __metadata("design:type", String)
], DeclareZakatScheduleItemDto.prototype, "scheduleType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], DeclareZakatScheduleItemDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareZakatScheduleItemDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['ZAKATABLE', 'NON_ZAKATABLE', 'DOUBTFUL']),
    __metadata("design:type", String)
], DeclareZakatScheduleItemDto.prototype, "zakatability", void 0);
class CreateRepaymentObligationDto {
    facilityApplicationId;
    dueDate;
    amountKobo;
}
exports.CreateRepaymentObligationDto = CreateRepaymentObligationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRepaymentObligationDto.prototype, "facilityApplicationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRepaymentObligationDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRepaymentObligationDto.prototype, "amountKobo", void 0);
class AssignFileManagingOfficerDto {
    officerUserId;
}
exports.AssignFileManagingOfficerDto = AssignFileManagingOfficerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignFileManagingOfficerDto.prototype, "officerUserId", void 0);
class RejectDispatchDto {
    reason;
}
exports.RejectDispatchDto = RejectDispatchDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], RejectDispatchDto.prototype, "reason", void 0);
class UpdateLadderRungDto {
    channels;
    notifyManagement;
    createsFollowUpCallTask;
    isActive;
}
exports.UpdateLadderRungDto = UpdateLadderRungDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateLadderRungDto.prototype, "channels", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateLadderRungDto.prototype, "notifyManagement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateLadderRungDto.prototype, "createsFollowUpCallTask", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateLadderRungDto.prototype, "isActive", void 0);
class ConfigureBureauProviderDto {
    providerSlot;
    name;
    apiConfig;
    costPerPullKobo;
    isActive;
}
exports.ConfigureBureauProviderDto = ConfigureBureauProviderDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureBureauProviderDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], ConfigureBureauProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ConfigureBureauProviderDto.prototype, "apiConfig", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureBureauProviderDto.prototype, "costPerPullKobo", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureBureauProviderDto.prototype, "isActive", void 0);
class UpdateBureauPolicyDto {
    minIntervalDays;
}
exports.UpdateBureauPolicyDto = UpdateBureauPolicyDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateBureauPolicyDto.prototype, "minIntervalDays", void 0);
class ProposeRiskMatrixVersionDto {
    cloneFromVersionId;
}
exports.ProposeRiskMatrixVersionDto = ProposeRiskMatrixVersionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeRiskMatrixVersionDto.prototype, "cloneFromVersionId", void 0);
class UpdateRiskCategoryThresholdsDto {
    greenThreshold;
    amberThreshold;
    redThreshold;
}
exports.UpdateRiskCategoryThresholdsDto = UpdateRiskCategoryThresholdsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRiskCategoryThresholdsDto.prototype, "greenThreshold", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRiskCategoryThresholdsDto.prototype, "amberThreshold", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRiskCategoryThresholdsDto.prototype, "redThreshold", void 0);
class ApproveRiskMatrixVersionDto {
    boardResolutionRef;
}
exports.ApproveRiskMatrixVersionDto = ApproveRiskMatrixVersionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRiskMatrixVersionDto.prototype, "boardResolutionRef", void 0);
class ApproveRiskRegisterEntryDto {
    boardResolutionRef;
}
exports.ApproveRiskRegisterEntryDto = ApproveRiskRegisterEntryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveRiskRegisterEntryDto.prototype, "boardResolutionRef", void 0);
class RunStressTestDto {
    modelType;
    scenarioCode;
    ledgerEntityCode;
    runMode;
}
exports.RunStressTestDto = RunStressTestDto;
__decorate([
    (0, class_validator_1.IsIn)(['LIQUIDITY', 'CAPITAL_ADEQUACY', 'REVENUE_SENSITIVITY', 'COUNTERPARTY_DEFAULT', 'PORTFOLIO_SHOCK', 'REVERSE_STRESS']),
    __metadata("design:type", String)
], RunStressTestDto.prototype, "modelType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunStressTestDto.prototype, "scenarioCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunStressTestDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['SANDBOX', 'BASELINE_CANDIDATE']),
    __metadata("design:type", String)
], RunStressTestDto.prototype, "runMode", void 0);
class RecordFacilityFundAccountingTermsDto {
    targetedReturnPct;
}
exports.RecordFacilityFundAccountingTermsDto = RecordFacilityFundAccountingTermsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecordFacilityFundAccountingTermsDto.prototype, "targetedReturnPct", void 0);
class DraftInvestmentMemoDto {
    dealSummary;
    structureType;
    amountKobo;
    tenorMonths;
    targetReturnPct;
    riskNotes;
    shariahNotes;
    collateralNotes;
}
exports.DraftInvestmentMemoDto = DraftInvestmentMemoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "dealSummary", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "structureType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], DraftInvestmentMemoDto.prototype, "tenorMonths", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DraftInvestmentMemoDto.prototype, "targetReturnPct", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "riskNotes", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "shariahNotes", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DraftInvestmentMemoDto.prototype, "collateralNotes", void 0);
class CommitteeApproveInvestmentMemoDto {
    icResolutionRef;
}
exports.CommitteeApproveInvestmentMemoDto = CommitteeApproveInvestmentMemoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CommitteeApproveInvestmentMemoDto.prototype, "icResolutionRef", void 0);
class ProposeInvestmentMemoThresholdDto {
    thresholdKobo;
}
exports.ProposeInvestmentMemoThresholdDto = ProposeInvestmentMemoThresholdDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeInvestmentMemoThresholdDto.prototype, "thresholdKobo", void 0);
class IssueBoardDirectiveDto {
    title;
    description;
    committeeTag;
    resolutionRef;
    dueAt;
}
exports.IssueBoardDirectiveDto = IssueBoardDirectiveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueBoardDirectiveDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueBoardDirectiveDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueBoardDirectiveDto.prototype, "committeeTag", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueBoardDirectiveDto.prototype, "resolutionRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueBoardDirectiveDto.prototype, "dueAt", void 0);
class CreateBoardCalendarEventDto {
    title;
    description;
    committeeTag;
    startsAt;
    endsAt;
}
exports.CreateBoardCalendarEventDto = CreateBoardCalendarEventDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBoardCalendarEventDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBoardCalendarEventDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBoardCalendarEventDto.prototype, "committeeTag", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBoardCalendarEventDto.prototype, "startsAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBoardCalendarEventDto.prototype, "endsAt", void 0);
class UpdateBoardCalendarReminderConfigDto {
    daysBefore;
}
exports.UpdateBoardCalendarReminderConfigDto = UpdateBoardCalendarReminderConfigDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateBoardCalendarReminderConfigDto.prototype, "daysBefore", void 0);
class UploadBoardMinutesDto {
    title;
    fileReference;
    committeeTag;
}
exports.UploadBoardMinutesDto = UploadBoardMinutesDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadBoardMinutesDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadBoardMinutesDto.prototype, "fileReference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadBoardMinutesDto.prototype, "committeeTag", void 0);
class TransmitBoardMinutesDto {
    recipientUserId;
}
exports.TransmitBoardMinutesDto = TransmitBoardMinutesDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransmitBoardMinutesDto.prototype, "recipientUserId", void 0);
class AttachDocumentDto {
    entityType;
    entityId;
    documentType;
    fileReference;
}
exports.AttachDocumentDto = AttachDocumentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachDocumentDto.prototype, "entityType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachDocumentDto.prototype, "entityId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachDocumentDto.prototype, "documentType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachDocumentDto.prototype, "fileReference", void 0);
class RequiredDocumentConfigDto {
    applicationType;
    documentType;
}
exports.RequiredDocumentConfigDto = RequiredDocumentConfigDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequiredDocumentConfigDto.prototype, "applicationType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequiredDocumentConfigDto.prototype, "documentType", void 0);
class JournalEntryLineDto {
    accountCode;
    debitKobo;
    creditKobo;
    description;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], JournalEntryLineDto.prototype, "accountCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], JournalEntryLineDto.prototype, "debitKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], JournalEntryLineDto.prototype, "creditKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], JournalEntryLineDto.prototype, "description", void 0);
class CreateJournalEntryDto {
    ledgerEntityCode;
    journalReference;
    entryDate;
    description;
    lines;
    journalClass;
    divergenceType;
    adjustmentForBasis;
}
exports.CreateJournalEntryDto = CreateJournalEntryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "journalReference", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "entryDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => JournalEntryLineDto),
    __metadata("design:type", Array)
], CreateJournalEntryDto.prototype, "lines", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['BASE', 'BASIS_ADJUSTMENT']),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "journalClass", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "divergenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['IFRS', 'AAOIFI']),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "adjustmentForBasis", void 0);
class RequestJournalPostingDto {
    journalEntryId;
}
exports.RequestJournalPostingDto = RequestJournalPostingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestJournalPostingDto.prototype, "journalEntryId", void 0);
class DistributionParticipantDto {
    productAccountId;
    unitsAtRecord;
    isDrip;
    cashPaidKobo;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DistributionParticipantDto.prototype, "productAccountId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DistributionParticipantDto.prototype, "unitsAtRecord", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DistributionParticipantDto.prototype, "isDrip", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], DistributionParticipantDto.prototype, "cashPaidKobo", void 0);
class RunHalalFundDistributionDto {
    ledgerEntityCode;
    productCode;
    periodStart;
    periodEnd;
    recordDate;
    method;
    incomeBasisKobo;
    closingNavKobo;
    openingNavKobo;
    netSubscriptionsKobo;
    navHistoryComplete;
    priorDeclaredKobo;
    distributablePct;
    priorTotalDistributedKobo;
    exDivPricePerUnit;
    participants;
}
exports.RunHalalFundDistributionDto = RunHalalFundDistributionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "productCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "periodStart", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "periodEnd", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "recordDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['INCOME', 'NAV']),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "incomeBasisKobo", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "closingNavKobo", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "openingNavKobo", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "netSubscriptionsKobo", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RunHalalFundDistributionDto.prototype, "navHistoryComplete", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "priorDeclaredKobo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RunHalalFundDistributionDto.prototype, "distributablePct", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RunHalalFundDistributionDto.prototype, "priorTotalDistributedKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RunHalalFundDistributionDto.prototype, "exDivPricePerUnit", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DistributionParticipantDto),
    __metadata("design:type", Array)
], RunHalalFundDistributionDto.prototype, "participants", void 0);
class OpenPeriodDto {
    ledgerEntityCode;
    periodStart;
    periodEnd;
}
exports.OpenPeriodDto = OpenPeriodDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OpenPeriodDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OpenPeriodDto.prototype, "periodStart", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OpenPeriodDto.prototype, "periodEnd", void 0);
class RequestDelegationGrantDto {
    functionCode;
    delegateUserId;
    limitKobo;
    effectiveFrom;
    effectiveTo;
    reason;
    boardInstrumentRef;
}
exports.RequestDelegationGrantDto = RequestDelegationGrantDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "functionCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "delegateUserId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "limitKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "effectiveFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "effectiveTo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDelegationGrantDto.prototype, "boardInstrumentRef", void 0);
class RevokeDelegationGrantDto {
    reason;
}
exports.RevokeDelegationGrantDto = RevokeDelegationGrantDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RevokeDelegationGrantDto.prototype, "reason", void 0);
class ProposeAssignRoleDto {
    userId;
    roleCode;
}
exports.ProposeAssignRoleDto = ProposeAssignRoleDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeAssignRoleDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeAssignRoleDto.prototype, "roleCode", void 0);
class CreateStaffUserDto {
    email;
    displayName;
    initialPassword;
}
exports.CreateStaffUserDto = CreateStaffUserDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStaffUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffUserDto.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffUserDto.prototype, "initialPassword", void 0);
class DeactivateUserDto {
    reason;
}
exports.DeactivateUserDto = DeactivateUserDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeactivateUserDto.prototype, "reason", void 0);
class SetupMandateDto {
    mandateType;
    targetReturnRate;
    investorBaseRatio;
    mudaribBaseRatio;
    restrictedSectors;
    restrictedContracts;
    directDealInvestmentId;
    rolloverDefault;
    earlyExitWaiver;
    ssbWaiverResolutionRef;
    effectiveDate;
}
exports.SetupMandateDto = SetupMandateDto;
__decorate([
    (0, class_validator_1.IsIn)(['UNRESTRICTED', 'RESTRICTED', 'DIRECT_DEAL', 'RESTRICTED_PLUS_DIRECT']),
    __metadata("design:type", String)
], SetupMandateDto.prototype, "mandateType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SetupMandateDto.prototype, "targetReturnRate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SetupMandateDto.prototype, "investorBaseRatio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SetupMandateDto.prototype, "mudaribBaseRatio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SetupMandateDto.prototype, "restrictedSectors", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SetupMandateDto.prototype, "restrictedContracts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetupMandateDto.prototype, "directDealInvestmentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['AUTO', 'MANUAL', 'NONE']),
    __metadata("design:type", String)
], SetupMandateDto.prototype, "rolloverDefault", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SetupMandateDto.prototype, "earlyExitWaiver", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetupMandateDto.prototype, "ssbWaiverResolutionRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetupMandateDto.prototype, "effectiveDate", void 0);
class AssignRelationshipManagerDto {
    relationshipManagerUserId;
}
exports.AssignRelationshipManagerDto = AssignRelationshipManagerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignRelationshipManagerDto.prototype, "relationshipManagerUserId", void 0);
class SendClientMessageDto {
    body;
    subject;
}
exports.SendClientMessageDto = SendClientMessageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendClientMessageDto.prototype, "body", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendClientMessageDto.prototype, "subject", void 0);
class ChartOfAccountTemplateRowDto {
    accountCode;
    accountName;
    accountType;
    aaoifiRef;
    ifrsRef;
}
exports.ChartOfAccountTemplateRowDto = ChartOfAccountTemplateRowDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChartOfAccountTemplateRowDto.prototype, "accountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChartOfAccountTemplateRowDto.prototype, "accountName", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE']),
    __metadata("design:type", String)
], ChartOfAccountTemplateRowDto.prototype, "accountType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChartOfAccountTemplateRowDto.prototype, "aaoifiRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChartOfAccountTemplateRowDto.prototype, "ifrsRef", void 0);
class CreateLedgerEntityDto {
    code;
    name;
    entityType;
    primaryBasis;
    productCode;
}
exports.CreateLedgerEntityDto = CreateLedgerEntityDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntityDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntityDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['COMPANY', 'FUND', 'POOL', 'MANDATE', 'CLIENT_MONEY']),
    __metadata("design:type", String)
], CreateLedgerEntityDto.prototype, "entityType", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['IFRS', 'AAOIFI']),
    __metadata("design:type", String)
], CreateLedgerEntityDto.prototype, "primaryBasis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntityDto.prototype, "productCode", void 0);
class LoadChartOfAccountsDto {
    ledgerEntityCode;
    accounts;
}
exports.LoadChartOfAccountsDto = LoadChartOfAccountsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoadChartOfAccountsDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ChartOfAccountTemplateRowDto),
    __metadata("design:type", Array)
], LoadChartOfAccountsDto.prototype, "accounts", void 0);
class ThirdPartyPayerDto {
    payerName;
    payerBankName;
    payerAccountNumber;
    declaredRelationship;
}
exports.ThirdPartyPayerDto = ThirdPartyPayerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ThirdPartyPayerDto.prototype, "payerName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ThirdPartyPayerDto.prototype, "payerBankName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ThirdPartyPayerDto.prototype, "payerAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ThirdPartyPayerDto.prototype, "declaredRelationship", void 0);
class CreateTxnDto {
    txnType;
    ledgerEntityCode;
    productAccountId;
    valueDate;
    amountKobo;
    payerBankAccountId;
    thirdPartyPayer;
}
exports.CreateTxnDto = CreateTxnDto;
__decorate([
    (0, class_validator_1.IsIn)(['SUBSCRIPTION', 'REDEMPTION', 'PLACEMENT', 'PROFIT_ALLOCATION', 'DISTRIBUTION', 'ROLLOVER', 'EARLY_EXIT', 'FEE', 'PURIFICATION', 'ADJUSTMENT']),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "txnType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "productAccountId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "valueDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTxnDto.prototype, "payerBankAccountId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ThirdPartyPayerDto),
    __metadata("design:type", ThirdPartyPayerDto)
], CreateTxnDto.prototype, "thirdPartyPayer", void 0);
class StageMigrationCsvDto {
    tplCode;
    fileName;
    csvContent;
}
exports.StageMigrationCsvDto = StageMigrationCsvDto;
__decorate([
    (0, class_validator_1.IsIn)(['TPL_01', 'TPL_02', 'TPL_03', 'TPL_04', 'TPL_05', 'TPL_06', 'TPL_07', 'TPL_08', 'TPL_09', 'TPL_10', 'TPL_13']),
    __metadata("design:type", String)
], StageMigrationCsvDto.prototype, "tplCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StageMigrationCsvDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StageMigrationCsvDto.prototype, "csvContent", void 0);
class IngestReplayCsvDto {
    sourceCode;
    fileName;
    csvContent;
    skipLeadingLines;
}
exports.IngestReplayCsvDto = IngestReplayCsvDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestReplayCsvDto.prototype, "sourceCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestReplayCsvDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestReplayCsvDto.prototype, "csvContent", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], IngestReplayCsvDto.prototype, "skipLeadingLines", void 0);
class CreateBudgetVersionDto {
    fiscalYear;
    scenarioLabel;
    status;
}
exports.CreateBudgetVersionDto = CreateBudgetVersionDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBudgetVersionDto.prototype, "fiscalYear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBudgetVersionDto.prototype, "scenarioLabel", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['DRAFT', 'BOARD_APPROVED']),
    __metadata("design:type", String)
], CreateBudgetVersionDto.prototype, "status", void 0);
class RequestEncumbranceDto {
    budgetLineId;
    amountKobo;
    description;
}
exports.RequestEncumbranceDto = RequestEncumbranceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestEncumbranceDto.prototype, "budgetLineId", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RequestEncumbranceDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestEncumbranceDto.prototype, "description", void 0);
class GenerateBudgetReviewPackDto {
    templateCode;
    budgetVersionId;
    month;
    actualsByLineIdKobo;
    actualDriverOverrides;
}
exports.GenerateBudgetReviewPackDto = GenerateBudgetReviewPackDto;
__decorate([
    (0, class_validator_1.IsIn)(['MONTHLY_MGMT_BUDGET_PACK', 'QUARTERLY_BOARD_BUDGET_PACK']),
    __metadata("design:type", String)
], GenerateBudgetReviewPackDto.prototype, "templateCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBudgetReviewPackDto.prototype, "budgetVersionId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GenerateBudgetReviewPackDto.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], GenerateBudgetReviewPackDto.prototype, "actualsByLineIdKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], GenerateBudgetReviewPackDto.prototype, "actualDriverOverrides", void 0);
class RequestBankAccountChangeDto {
    proposedBankName;
    proposedAccountNumber;
    proposedAccountName;
    proposedAccountType;
    proposedCurrency;
}
exports.RequestBankAccountChangeDto = RequestBankAccountChangeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestBankAccountChangeDto.prototype, "proposedBankName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestBankAccountChangeDto.prototype, "proposedAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestBankAccountChangeDto.prototype, "proposedAccountName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestBankAccountChangeDto.prototype, "proposedAccountType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestBankAccountChangeDto.prototype, "proposedCurrency", void 0);
class AttachBankAccountChangeEvidenceDto {
    documentType;
    fileReference;
}
exports.AttachBankAccountChangeEvidenceDto = AttachBankAccountChangeEvidenceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachBankAccountChangeEvidenceDto.prototype, "documentType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachBankAccountChangeEvidenceDto.prototype, "fileReference", void 0);
class DecideBankAccountChangeDto {
    decision;
    notes;
}
exports.DecideBankAccountChangeDto = DecideBankAccountChangeDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideBankAccountChangeDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideBankAccountChangeDto.prototype, "notes", void 0);
class RequestOnboardingDto {
    surname;
    firstName;
    middleName;
    positionId;
    orgUnitCode;
    reportsToId;
    hireDate;
    proposedPerformanceIncentivePct;
    linkedUserEmail;
}
exports.RequestOnboardingDto = RequestOnboardingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "middleName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "positionId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "reportsToId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "hireDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestOnboardingDto.prototype, "proposedPerformanceIncentivePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RequestOnboardingDto.prototype, "linkedUserEmail", void 0);
class RequestOffboardingDto {
    employeeId;
    reason;
}
exports.RequestOffboardingDto = RequestOffboardingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOffboardingDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestOffboardingDto.prototype, "reason", void 0);
class RequestIncentivePctChangeDto {
    employeeId;
    proposedPct;
}
exports.RequestIncentivePctChangeDto = RequestIncentivePctChangeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestIncentivePctChangeDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestIncentivePctChangeDto.prototype, "proposedPct", void 0);
class DecideEmployeeLifecycleDto {
    decision;
    notes;
}
exports.DecideEmployeeLifecycleDto = DecideEmployeeLifecycleDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideEmployeeLifecycleDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideEmployeeLifecycleDto.prototype, "notes", void 0);
class RequestContactAmendmentDto {
    proposedContactEmail;
    proposedContactPhone;
    proposedRegisteredAddress;
    proposedTaxIdentificationNumber;
    proposedSourceOfFunds;
    proposedOccupationOrBusinessNature;
}
exports.RequestContactAmendmentDto = RequestContactAmendmentDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedContactEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedContactPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedRegisteredAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedTaxIdentificationNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedSourceOfFunds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestContactAmendmentDto.prototype, "proposedOccupationOrBusinessNature", void 0);
class DecideContactAmendmentDto {
    decision;
    notes;
}
exports.DecideContactAmendmentDto = DecideContactAmendmentDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideContactAmendmentDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideContactAmendmentDto.prototype, "notes", void 0);
class CreateOrgUnitDto {
    code;
    name;
    secondaryReportingLine;
}
exports.CreateOrgUnitDto = CreateOrgUnitDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrgUnitDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrgUnitDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrgUnitDto.prototype, "secondaryReportingLine", void 0);
class CreatePositionDto {
    title;
    orgUnitCode;
    cadre;
    notch;
}
exports.CreatePositionDto = CreatePositionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePositionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePositionDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePositionDto.prototype, "cadre", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePositionDto.prototype, "notch", void 0);
class ProposeDepartmentHeadDto {
    orgUnitCode;
    employeeId;
    effectiveFrom;
}
exports.ProposeDepartmentHeadDto = ProposeDepartmentHeadDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeDepartmentHeadDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeDepartmentHeadDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeDepartmentHeadDto.prototype, "effectiveFrom", void 0);
class ConfigureGatewayProviderDto {
    providerSlot;
    name;
    webhookSecret;
    apiConfig;
    isActive;
}
exports.ConfigureGatewayProviderDto = ConfigureGatewayProviderDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureGatewayProviderDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureGatewayProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureGatewayProviderDto.prototype, "webhookSecret", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ConfigureGatewayProviderDto.prototype, "apiConfig", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureGatewayProviderDto.prototype, "isActive", void 0);
class ConfigureCustodianAccountDto {
    providerId;
    productCode;
    custodianBankName;
    custodianAccountNumber;
    referenceCodePrefix;
    isActive;
}
exports.ConfigureCustodianAccountDto = ConfigureCustodianAccountDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCustodianAccountDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCustodianAccountDto.prototype, "productCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCustodianAccountDto.prototype, "custodianBankName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCustodianAccountDto.prototype, "custodianAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCustodianAccountDto.prototype, "referenceCodePrefix", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureCustodianAccountDto.prototype, "isActive", void 0);
class ManualMatchInflowDto {
    investorId;
    productCode;
}
exports.ManualMatchInflowDto = ManualMatchInflowDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualMatchInflowDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualMatchInflowDto.prototype, "productCode", void 0);
class RejectInflowDto {
    reason;
}
exports.RejectInflowDto = RejectInflowDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RejectInflowDto.prototype, "reason", void 0);
class GatewayWebhookDto {
    providerSlot;
    gatewayEventRef;
    amountKobo;
    settledAt;
    custodianAccountNumber;
    narration;
    signature;
}
exports.GatewayWebhookDto = GatewayWebhookDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GatewayWebhookDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "gatewayEventRef", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "settledAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "custodianAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "narration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GatewayWebhookDto.prototype, "signature", void 0);
class SubmitReportPackDto {
    calendarEventId;
    title;
    fileReference;
}
exports.SubmitReportPackDto = SubmitReportPackDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitReportPackDto.prototype, "calendarEventId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitReportPackDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitReportPackDto.prototype, "fileReference", void 0);
class MarkSubmissionReceivedDto {
    status;
    completenessNote;
}
exports.MarkSubmissionReceivedDto = MarkSubmissionReceivedDto;
__decorate([
    (0, class_validator_1.IsIn)(['RECEIVED', 'INCOMPLETE']),
    __metadata("design:type", String)
], MarkSubmissionReceivedDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkSubmissionReceivedDto.prototype, "completenessNote", void 0);
class TransmitDocumentDto {
    title;
    fileReference;
    docType;
    recipientUserIds;
}
exports.TransmitDocumentDto = TransmitDocumentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransmitDocumentDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransmitDocumentDto.prototype, "fileReference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransmitDocumentDto.prototype, "docType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], TransmitDocumentDto.prototype, "recipientUserIds", void 0);
class AssignTaskDto {
    title;
    description;
    assigneeEmployeeId;
    dueAt;
    deliverableUrl;
    kpiDefinitionId;
}
exports.AssignTaskDto = AssignTaskDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "assigneeEmployeeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "dueAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "deliverableUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignTaskDto.prototype, "kpiDefinitionId", void 0);
class SetDeliverableUrlDto {
    deliverableUrl;
}
exports.SetDeliverableUrlDto = SetDeliverableUrlDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetDeliverableUrlDto.prototype, "deliverableUrl", void 0);
class RequestInvestorExitDto {
    exitType;
}
exports.RequestInvestorExitDto = RequestInvestorExitDto;
__decorate([
    (0, class_validator_1.IsIn)(['MATURITY_TRANSITION', 'FINAL_EXIT']),
    __metadata("design:type", String)
], RequestInvestorExitDto.prototype, "exitType", void 0);
class DecideInvestorExitDto {
    decision;
    notes;
}
exports.DecideInvestorExitDto = DecideInvestorExitDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideInvestorExitDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideInvestorExitDto.prototype, "notes", void 0);
class RequestCounterpartyWriteOffDto {
    writeOffAmountKobo;
    ledgerEntityCode;
    investmentAccountCode;
    reason;
}
exports.RequestCounterpartyWriteOffDto = RequestCounterpartyWriteOffDto;
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], RequestCounterpartyWriteOffDto.prototype, "writeOffAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestCounterpartyWriteOffDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestCounterpartyWriteOffDto.prototype, "investmentAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestCounterpartyWriteOffDto.prototype, "reason", void 0);
class DecideCounterpartyWriteOffDto {
    decision;
    notes;
}
exports.DecideCounterpartyWriteOffDto = DecideCounterpartyWriteOffDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideCounterpartyWriteOffDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideCounterpartyWriteOffDto.prototype, "notes", void 0);
class BankStatementLineInputDto {
    ledgerEntityCode;
    glAccountCode;
    statementDate;
    description;
    amountKobo;
    externalRef;
}
exports.BankStatementLineInputDto = BankStatementLineInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "ledgerEntityCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "glAccountCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "statementDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BankStatementLineInputDto.prototype, "externalRef", void 0);
class UploadBankStatementLinesDto {
    lines;
}
exports.UploadBankStatementLinesDto = UploadBankStatementLinesDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BankStatementLineInputDto),
    __metadata("design:type", Array)
], UploadBankStatementLinesDto.prototype, "lines", void 0);
class MatchBankStatementLineDto {
    journalEntryLineId;
}
exports.MatchBankStatementLineDto = MatchBankStatementLineDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MatchBankStatementLineDto.prototype, "journalEntryLineId", void 0);
class RequestMandateAmendmentDto {
    proposedTargetReturnRate;
    proposedRolloverDefault;
    proposedEarlyExitWaiver;
}
exports.RequestMandateAmendmentDto = RequestMandateAmendmentDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestMandateAmendmentDto.prototype, "proposedTargetReturnRate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['AUTO', 'MANUAL', 'NONE']),
    __metadata("design:type", String)
], RequestMandateAmendmentDto.prototype, "proposedRolloverDefault", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RequestMandateAmendmentDto.prototype, "proposedEarlyExitWaiver", void 0);
class DecideMandateAmendmentDto {
    decision;
    notes;
}
exports.DecideMandateAmendmentDto = DecideMandateAmendmentDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVE', 'REJECT']),
    __metadata("design:type", String)
], DecideMandateAmendmentDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideMandateAmendmentDto.prototype, "notes", void 0);
const PRIVACY_NOTICE_CONTEXTS = [
    'INVESTOR_ONBOARDING_STAGE_1', 'INVESTOR_ONBOARDING_STAGE_2', 'COUNTERPARTY_ONBOARDING',
    'INVESTOR_PORTAL_FIRST_LOGIN', 'COUNTERPARTY_PORTAL_FIRST_LOGIN', 'PUBLIC_INTAKE',
];
class AcknowledgePrivacyNoticeDto {
    noticeVersion;
    context;
    investorId;
    counterpartyId;
    publicIntakeSubmissionId;
}
exports.AcknowledgePrivacyNoticeDto = AcknowledgePrivacyNoticeDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AcknowledgePrivacyNoticeDto.prototype, "noticeVersion", void 0);
__decorate([
    (0, class_validator_1.IsIn)(PRIVACY_NOTICE_CONTEXTS),
    __metadata("design:type", Object)
], AcknowledgePrivacyNoticeDto.prototype, "context", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcknowledgePrivacyNoticeDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcknowledgePrivacyNoticeDto.prototype, "counterpartyId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcknowledgePrivacyNoticeDto.prototype, "publicIntakeSubmissionId", void 0);
class ConfirmRetentionScheduleEntryDto {
    retentionPeriodMonths;
    statutoryBasis;
    disposalTreatment;
}
exports.ConfirmRetentionScheduleEntryDto = ConfirmRetentionScheduleEntryDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfirmRetentionScheduleEntryDto.prototype, "retentionPeriodMonths", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], ConfirmRetentionScheduleEntryDto.prototype, "statutoryBasis", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], ConfirmRetentionScheduleEntryDto.prototype, "disposalTreatment", void 0);
class LogDataBreachDto {
    discoveredAt;
    description;
    affectedDataClasses;
    estimatedAffectedSubjects;
}
exports.LogDataBreachDto = LogDataBreachDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], LogDataBreachDto.prototype, "discoveredAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], LogDataBreachDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], LogDataBreachDto.prototype, "affectedDataClasses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LogDataBreachDto.prototype, "estimatedAffectedSubjects", void 0);
class AssessDataBreachDto {
    severity;
    likelyHighRisk;
    assessmentNotes;
    dataSubjectsNotificationRequired;
}
exports.AssessDataBreachDto = AssessDataBreachDto;
__decorate([
    (0, class_validator_1.IsIn)(['LOW', 'MODERATE', 'HIGH', 'CRITICAL']),
    __metadata("design:type", String)
], AssessDataBreachDto.prototype, "severity", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AssessDataBreachDto.prototype, "likelyHighRisk", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], AssessDataBreachDto.prototype, "assessmentNotes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AssessDataBreachDto.prototype, "dataSubjectsNotificationRequired", void 0);
class CloseDataBreachDto {
    postIncidentNotes;
}
exports.CloseDataBreachDto = CloseDataBreachDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CloseDataBreachDto.prototype, "postIncidentNotes", void 0);
class StartOversightSessionDto {
    principalType;
    investorId;
    counterpartyId;
}
exports.StartOversightSessionDto = StartOversightSessionDto;
__decorate([
    (0, class_validator_1.IsIn)(['INVESTOR', 'COUNTERPARTY']),
    __metadata("design:type", String)
], StartOversightSessionDto.prototype, "principalType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartOversightSessionDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartOversightSessionDto.prototype, "counterpartyId", void 0);
class ProposeOversightPolicyDto {
    grantedRoleCodes;
}
exports.ProposeOversightPolicyDto = ProposeOversightPolicyDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ProposeOversightPolicyDto.prototype, "grantedRoleCodes", void 0);
class ConfirmDepositAndSetTargetDto {
    targetReturnPct;
    maturityDate;
    profitPaymentInterval;
}
exports.ConfirmDepositAndSetTargetDto = ConfirmDepositAndSetTargetDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ConfirmDepositAndSetTargetDto.prototype, "targetReturnPct", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ConfirmDepositAndSetTargetDto.prototype, "maturityDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'AT_MATURITY']),
    __metadata("design:type", String)
], ConfirmDepositAndSetTargetDto.prototype, "profitPaymentInterval", void 0);
class SubscriptionThirdPartyPayerDto {
    payerName;
    payerBankName;
    payerAccountNumber;
    declaredRelationship;
}
exports.SubscriptionThirdPartyPayerDto = SubscriptionThirdPartyPayerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionThirdPartyPayerDto.prototype, "payerName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionThirdPartyPayerDto.prototype, "payerBankName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionThirdPartyPayerDto.prototype, "payerAccountNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionThirdPartyPayerDto.prototype, "declaredRelationship", void 0);
class InitiateSubscriptionRequestDto {
    investorId;
    productCode;
    amountKobo;
    effectiveDate;
}
exports.InitiateSubscriptionRequestDto = InitiateSubscriptionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateSubscriptionRequestDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitiateSubscriptionRequestDto.prototype, "productCode", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], InitiateSubscriptionRequestDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], InitiateSubscriptionRequestDto.prototype, "effectiveDate", void 0);
class ApproveSubscriptionRequestDto {
    journalInitiatorUserId;
    payerBankAccountId;
    thirdPartyPayer;
}
exports.ApproveSubscriptionRequestDto = ApproveSubscriptionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveSubscriptionRequestDto.prototype, "journalInitiatorUserId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApproveSubscriptionRequestDto.prototype, "payerBankAccountId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SubscriptionThirdPartyPayerDto),
    __metadata("design:type", SubscriptionThirdPartyPayerDto)
], ApproveSubscriptionRequestDto.prototype, "thirdPartyPayer", void 0);
class ProposeMarketValueEntryDto {
    valuationDate;
    marketValueKobo;
}
exports.ProposeMarketValueEntryDto = ProposeMarketValueEntryDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ProposeMarketValueEntryDto.prototype, "valuationDate", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProposeMarketValueEntryDto.prototype, "marketValueKobo", void 0);
class ConfigureAttendanceProviderDto {
    providerSlot;
    adapterType;
    name;
    clientId;
    clientSecret;
    isActive;
    ttlockUsername;
    ttlockPassword;
    ttlockApiBaseUrl;
}
exports.ConfigureAttendanceProviderDto = ConfigureAttendanceProviderDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureAttendanceProviderDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['TTLOCK', 'FILE_IMPORT']),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "adapterType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "clientSecret", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureAttendanceProviderDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "ttlockUsername", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "ttlockPassword", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAttendanceProviderDto.prototype, "ttlockApiBaseUrl", void 0);
class ConfigureAiProviderCredentialDto {
    providerSlot;
    providerName;
    apiKey;
    baseUrl;
    isActive;
}
exports.ConfigureAiProviderCredentialDto = ConfigureAiProviderCredentialDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureAiProviderCredentialDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAiProviderCredentialDto.prototype, "providerName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAiProviderCredentialDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureAiProviderCredentialDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureAiProviderCredentialDto.prototype, "isActive", void 0);
class MapLockUserDto {
    providerId;
    deviceUserRef;
    employeeId;
}
exports.MapLockUserDto = MapLockUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MapLockUserDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MapLockUserDto.prototype, "deviceUserRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MapLockUserDto.prototype, "employeeId", void 0);
class FileImportRowDto {
    deviceUserRef;
    occurredAt;
    method;
    locationRef;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileImportRowDto.prototype, "deviceUserRef", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileImportRowDto.prototype, "occurredAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileImportRowDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileImportRowDto.prototype, "locationRef", void 0);
class ImportFileEventsDto {
    providerId;
    rows;
}
exports.ImportFileEventsDto = ImportFileEventsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImportFileEventsDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileImportRowDto),
    __metadata("design:type", Array)
], ImportFileEventsDto.prototype, "rows", void 0);
class RequestExceptionDto {
    attendanceEventId;
    disputedDate;
    reason;
}
exports.RequestExceptionDto = RequestExceptionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestExceptionDto.prototype, "attendanceEventId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], RequestExceptionDto.prototype, "disputedDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestExceptionDto.prototype, "reason", void 0);
class DecideExceptionDto {
    decision;
    notes;
}
exports.DecideExceptionDto = DecideExceptionDto;
__decorate([
    (0, class_validator_1.IsIn)(['ACCEPTED', 'REJECTED']),
    __metadata("design:type", String)
], DecideExceptionDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DecideExceptionDto.prototype, "notes", void 0);
class ConfigureCalendarProviderDto {
    providerSlot;
    adapterType;
    name;
    clientId;
    clientSecret;
    tenantId;
    isActive;
}
exports.ConfigureCalendarProviderDto = ConfigureCalendarProviderDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureCalendarProviderDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['MICROSOFT_GRAPH', 'GOOGLE']),
    __metadata("design:type", String)
], ConfigureCalendarProviderDto.prototype, "adapterType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCalendarProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCalendarProviderDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCalendarProviderDto.prototype, "clientSecret", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureCalendarProviderDto.prototype, "tenantId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureCalendarProviderDto.prototype, "isActive", void 0);
class ConfigureScreeningListSourceDto {
    sourceCode;
    downloadUrl;
    extraConfig;
    isActive;
}
exports.ConfigureScreeningListSourceDto = ConfigureScreeningListSourceDto;
__decorate([
    (0, class_validator_1.IsIn)(['OFAC', 'UN_SC', 'UK_SANCTIONS', 'EU_FSF', 'NG_NFIU']),
    __metadata("design:type", String)
], ConfigureScreeningListSourceDto.prototype, "sourceCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureScreeningListSourceDto.prototype, "downloadUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ConfigureScreeningListSourceDto.prototype, "extraConfig", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureScreeningListSourceDto.prototype, "isActive", void 0);
class UpdateScreeningGatewayConfigDto {
    activeProviderMode;
    matchThresholdScore;
    redThresholdScore;
}
exports.UpdateScreeningGatewayConfigDto = UpdateScreeningGatewayConfigDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['LOCAL_LISTS', 'COMMERCIAL', 'MANUAL']),
    __metadata("design:type", String)
], UpdateScreeningGatewayConfigDto.prototype, "activeProviderMode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateScreeningGatewayConfigDto.prototype, "matchThresholdScore", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateScreeningGatewayConfigDto.prototype, "redThresholdScore", void 0);
class ConfigureScreeningCommercialProviderDto {
    providerSlot;
    name;
    apiKey;
    isActive;
}
exports.ConfigureScreeningCommercialProviderDto = ConfigureScreeningCommercialProviderDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureScreeningCommercialProviderDto.prototype, "providerSlot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureScreeningCommercialProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureScreeningCommercialProviderDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfigureScreeningCommercialProviderDto.prototype, "isActive", void 0);
class RunScreeningDto {
    subjectType;
    subjectId;
    subjectNameScreened;
}
exports.RunScreeningDto = RunScreeningDto;
__decorate([
    (0, class_validator_1.IsIn)(['INVESTOR', 'COUNTERPARTY']),
    __metadata("design:type", String)
], RunScreeningDto.prototype, "subjectType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunScreeningDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RunScreeningDto.prototype, "subjectNameScreened", void 0);
class ProposeHitAdjudicationDto {
    outcome;
    rationale;
}
exports.ProposeHitAdjudicationDto = ProposeHitAdjudicationDto;
__decorate([
    (0, class_validator_1.IsIn)(['TRUE_MATCH', 'FALSE_POSITIVE']),
    __metadata("design:type", String)
], ProposeHitAdjudicationDto.prototype, "outcome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeHitAdjudicationDto.prototype, "rationale", void 0);
class ManualScreeningAttestationDto {
    subjectType;
    subjectId;
    subjectNameScreened;
    sourcesSearched;
    searchReference;
    outcome;
    fileReference;
}
exports.ManualScreeningAttestationDto = ManualScreeningAttestationDto;
__decorate([
    (0, class_validator_1.IsIn)(['INVESTOR', 'COUNTERPARTY']),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "subjectType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "subjectNameScreened", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ManualScreeningAttestationDto.prototype, "sourcesSearched", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "searchReference", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['GREEN', 'RED']),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "outcome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManualScreeningAttestationDto.prototype, "fileReference", void 0);
class ApplyForLeaveDto {
    leaveTypeCode;
    startDate;
    endDate;
    reliefOfficerEmployeeId;
    reason;
}
exports.ApplyForLeaveDto = ApplyForLeaveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApplyForLeaveDto.prototype, "leaveTypeCode", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ApplyForLeaveDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ApplyForLeaveDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApplyForLeaveDto.prototype, "reliefOfficerEmployeeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApplyForLeaveDto.prototype, "reason", void 0);
class SupervisorDecideLeaveDto {
    decision;
    notes;
}
exports.SupervisorDecideLeaveDto = SupervisorDecideLeaveDto;
__decorate([
    (0, class_validator_1.IsIn)(['APPROVED', 'REJECTED']),
    __metadata("design:type", String)
], SupervisorDecideLeaveDto.prototype, "decision", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SupervisorDecideLeaveDto.prototype, "notes", void 0);
class CreateSubmissionDto {
    title;
    description;
    deliverableUrl;
}
exports.CreateSubmissionDto = CreateSubmissionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "deliverableUrl", void 0);
const TAX_TYPES = ['WHT', 'VAT', 'STAMP_DUTY'];
class ProposeTaxRateVersionDto {
    taxType;
    rates;
    effectiveFrom;
}
exports.ProposeTaxRateVersionDto = ProposeTaxRateVersionDto;
__decorate([
    (0, class_validator_1.IsIn)(TAX_TYPES),
    __metadata("design:type", String)
], ProposeTaxRateVersionDto.prototype, "taxType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ProposeTaxRateVersionDto.prototype, "rates", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ProposeTaxRateVersionDto.prototype, "effectiveFrom", void 0);
class GrantTaxExemptionDto {
    investorId;
    taxType;
    reason;
}
exports.GrantTaxExemptionDto = GrantTaxExemptionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GrantTaxExemptionDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsIn)(TAX_TYPES),
    __metadata("design:type", String)
], GrantTaxExemptionDto.prototype, "taxType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GrantTaxExemptionDto.prototype, "reason", void 0);
class CreateFeeInvoiceDto {
    counterpartyId;
    investorId;
    description;
    feeAmountKobo;
    serviceOrFeeType;
    invoiceDate;
}
exports.CreateFeeInvoiceDto = CreateFeeInvoiceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "counterpartyId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "investorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "feeAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "serviceOrFeeType", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateFeeInvoiceDto.prototype, "invoiceDate", void 0);
class RecognizeVendorInvoiceVatDto {
    serviceOrFeeType;
}
exports.RecognizeVendorInvoiceVatDto = RecognizeVendorInvoiceVatDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecognizeVendorInvoiceVatDto.prototype, "serviceOrFeeType", void 0);
class AssessStampDutyDto {
    instrumentType;
    entityType;
    entityId;
    baseAmountKobo;
    transactionDate;
}
exports.AssessStampDutyDto = AssessStampDutyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssessStampDutyDto.prototype, "instrumentType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssessStampDutyDto.prototype, "entityType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssessStampDutyDto.prototype, "entityId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], AssessStampDutyDto.prototype, "baseAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AssessStampDutyDto.prototype, "transactionDate", void 0);
class ConfigureTaxGlMappingDto {
    taxType;
    payableAccountCode;
}
exports.ConfigureTaxGlMappingDto = ConfigureTaxGlMappingDto;
__decorate([
    (0, class_validator_1.IsIn)(TAX_TYPES),
    __metadata("design:type", String)
], ConfigureTaxGlMappingDto.prototype, "taxType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureTaxGlMappingDto.prototype, "payableAccountCode", void 0);
class ConfigureRemittanceDueDateDto {
    taxType;
    authority;
    dayOfMonthDue;
}
exports.ConfigureRemittanceDueDateDto = ConfigureRemittanceDueDateDto;
__decorate([
    (0, class_validator_1.IsIn)(TAX_TYPES),
    __metadata("design:type", String)
], ConfigureRemittanceDueDateDto.prototype, "taxType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigureRemittanceDueDateDto.prototype, "authority", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ConfigureRemittanceDueDateDto.prototype, "dayOfMonthDue", void 0);
class CompilePayoutBatchDto {
    periodLabel;
    periodStart;
    periodEnd;
}
exports.CompilePayoutBatchDto = CompilePayoutBatchDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompilePayoutBatchDto.prototype, "periodLabel", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CompilePayoutBatchDto.prototype, "periodStart", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CompilePayoutBatchDto.prototype, "periodEnd", void 0);
class ProspectusSheetFieldsDto {
    prospectusRef;
    authorizedUnits;
    fundSizeCapKobo;
    offerSpreadPct;
    bidSpreadPct;
    valuationFrequency;
    minimumSubscriptionKobo;
    minimumAdditionalInvestmentKobo;
    minimumRedemptionKobo;
    minimumHoldingKobo;
    managementFeeRatePct;
    adminFeeRatePct;
    custodianFeeRatePct;
    secFeeRatePct;
    auditFeeRatePct;
    distributionMethod;
    distributionFrequency;
    distributableIncomePct;
    minimumParticipationKobo;
    poolTenorMonths;
    surplusSharingEnabled;
    psrPoolMudaribShare;
    surplusInvestorShare;
    surplusMudaribShare;
    mandateRoleModel;
    mandateFeeRatePct;
    targetedReturnBenchmarkPct;
    investmentType;
    tenorLockInMonths;
    minimumInvestmentKobo;
    fundingStructure;
    offerNarrativeBrief;
    offerNarrativeOpportunity;
    offerNarrativeDynamics;
    offerNarrativeRiskSummary;
    offerNarrativeModelDescription;
}
exports.ProspectusSheetFieldsDto = ProspectusSheetFieldsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "prospectusRef", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "authorizedUnits", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "fundSizeCapKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "offerSpreadPct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "bidSpreadPct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "valuationFrequency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumSubscriptionKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumAdditionalInvestmentKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumRedemptionKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumHoldingKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "managementFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "adminFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "custodianFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "secFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "auditFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "distributionMethod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "distributionFrequency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "distributableIncomePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumParticipationKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "poolTenorMonths", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProspectusSheetFieldsDto.prototype, "surplusSharingEnabled", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "psrPoolMudaribShare", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "surplusInvestorShare", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "surplusMudaribShare", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['MUDARABAH_PSR', 'WAKALAH']),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "mandateRoleModel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "mandateFeeRatePct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "targetedReturnBenchmarkPct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "investmentType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ProspectusSheetFieldsDto.prototype, "tenorLockInMonths", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "minimumInvestmentKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['LUMP_SUM', 'PERIODIC_CALL']),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "fundingStructure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "offerNarrativeBrief", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "offerNarrativeOpportunity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "offerNarrativeDynamics", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "offerNarrativeRiskSummary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], ProspectusSheetFieldsDto.prototype, "offerNarrativeModelDescription", void 0);
class ProposeProspectusSheetDto extends ProspectusSheetFieldsDto {
    productCode;
}
exports.ProposeProspectusSheetDto = ProposeProspectusSheetDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProposeProspectusSheetDto.prototype, "productCode", void 0);
class AssignActivationSubStepTaskDto {
    stepCode;
    subStepCode;
    assigneeEmployeeId;
    dueAt;
}
exports.AssignActivationSubStepTaskDto = AssignActivationSubStepTaskDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignActivationSubStepTaskDto.prototype, "stepCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignActivationSubStepTaskDto.prototype, "subStepCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AssignActivationSubStepTaskDto.prototype, "assigneeEmployeeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AssignActivationSubStepTaskDto.prototype, "dueAt", void 0);
class ComposeTileDto {
    metricCode;
    presentation;
    position;
}
exports.ComposeTileDto = ComposeTileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComposeTileDto.prototype, "metricCode", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['KPI_TILE', 'TREND_LINE', 'PIE', 'BAR', 'TABLE']),
    __metadata("design:type", String)
], ComposeTileDto.prototype, "presentation", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ComposeTileDto.prototype, "position", void 0);
class SaveDashboardDto {
    name;
    scope;
    orgUnitCode;
    tiles;
}
exports.SaveDashboardDto = SaveDashboardDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveDashboardDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['PERSONAL', 'DEPARTMENT']),
    __metadata("design:type", String)
], SaveDashboardDto.prototype, "scope", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveDashboardDto.prototype, "orgUnitCode", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ComposeTileDto),
    __metadata("design:type", Array)
], SaveDashboardDto.prototype, "tiles", void 0);
//# sourceMappingURL=ops-api.types.js.map