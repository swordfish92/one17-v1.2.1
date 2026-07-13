export interface OnboardInvestorInput {
    fullLegalName: string;
    entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
    nationality: string;
    taxIdentificationNumber: string;
    dateOfBirthOrIncorporation?: Date;
    contactEmail: string;
    contactPhone: string;
    registeredAddress: string;
    sourceOfFunds: string;
    authorisedSignatories?: unknown;
    onboardedByUserId: string;
}
export interface OnboardExpressInvestorInput {
    fullLegalName: string;
    entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
    nationality: string;
    bvn?: string;
    rcNumber?: string;
    contactEmail: string;
    contactPhone: string;
    onboardedByUserId: string;
    leadId?: string;
}
export interface Stage2FieldsInput {
    investorId: string;
    taxIdentificationNumber?: string;
    registeredAddress?: string;
    sourceOfFunds?: string;
    dateOfBirthOrIncorporation?: Date;
    authorisedSignatories?: unknown;
    actorUserId: string;
}
export interface RiskMetricGrade {
    metricCode: string;
    grade: 'LOW' | 'MEDIUM' | 'HIGH';
    rationale: string;
}
export interface PepSanctionsCheck {
    target: 'INVESTOR_OR_INSTITUTIONAL_NAME' | 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER';
    pepResult: 'CLEAR' | 'FLAGGED';
    sanctionsResult: 'CLEAR' | 'FLAGGED';
}
export interface RecordComplianceRiskAssessmentInput {
    investorId: string;
    riskMetricGrades: RiskMetricGrade[];
    pepSanctionsGrid: PepSanctionsCheck[];
    complianceObservations?: string;
    assessedByUserId: string;
}
export interface RecordIc1ReviewInput {
    workflowInstanceId: string;
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    pass: boolean;
    approverUserId: string;
}
export interface RecordRiskReviewInput {
    workflowInstanceId: string;
    eddChecklist?: Record<string, 'DONE' | 'N_A'>;
    eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
    eddConditionsOrBasis?: string;
    periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
    riskNotes?: string;
    approverUserId: string;
}
export interface RecordMdDecisionInput {
    workflowInstanceId: string;
    decision: 'APPROVED' | 'DECLINED';
    conditionsOrReason?: string;
    approverUserId: string;
}
export interface RecordIc2ReviewInput {
    workflowInstanceId: string;
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    outcome: 'SATISFACTORY' | 'UNSATISFACTORY';
    approverUserId: string;
}
export interface ScreeningChecklistEntry {
    itemCode: string;
    listVersionOrDate: string;
    notes?: string;
}
export interface RecordScreeningInput {
    investorId: string;
    listsChecked: ScreeningChecklistEntry[];
    searchTermsUsed: string;
    result: 'NO_MATCH' | 'POTENTIAL_MATCH' | 'MATCH';
    screenerUserId: string;
    countersignerUserId?: string;
    notes?: string;
}
export interface SetupMandateInput {
    investorId: string;
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
    effectiveDate: Date;
    approvedByUserId: string;
}
export declare class InvestorLifecycleError extends Error {
    constructor(message: string);
}
