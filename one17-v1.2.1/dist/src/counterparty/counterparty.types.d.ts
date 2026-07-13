export interface OnboardCounterpartyInput {
    legalName: string;
    counterpartyType: string;
    rcNumber?: string;
    country?: string;
    purposeOfFinancing: string;
    amountSoughtKobo: bigint;
    expectedSourceOfRepayment: string;
    creditBureauConsent: boolean;
    shariahCertRef?: string;
    shariahCertExpiry?: Date;
    contactEmail?: string;
    onboardedByUserId: string;
}
export interface CounterpartyRiskMetricGrade {
    metricCode: string;
    grade: 'LOW' | 'MEDIUM' | 'HIGH';
    rationale: string;
}
export interface CounterpartyPepSanctionsCheck {
    target: 'INVESTEE_OR_INSTITUTIONAL_NAME' | 'DIRECTOR_OR_REP' | 'BENEFICIAL_OWNER';
    pepResult: 'CLEAR' | 'FLAGGED';
    sanctionsResult: 'CLEAR' | 'FLAGGED';
}
export interface RecordCounterpartyRiskAssessmentInput {
    counterpartyId: string;
    riskMetricGrades: CounterpartyRiskMetricGrade[];
    pepSanctionsGrid: CounterpartyPepSanctionsCheck[];
    complianceObservations?: string;
    assessedByUserId: string;
}
export interface RecordCounterpartyIc1ReviewInput {
    workflowInstanceId: string;
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    pass: boolean;
    approverUserId: string;
}
export interface RecordCounterpartyRiskReviewInput {
    workflowInstanceId: string;
    eddChecklist?: Record<string, 'DONE' | 'N_A'>;
    eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
    eddConditionsOrBasis?: string;
    periodicReviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
    riskNotes?: string;
    approvedExposureLimitKobo?: bigint;
    approverUserId: string;
}
export interface RecordCounterpartyMdDecisionInput {
    workflowInstanceId: string;
    decision: 'APPROVED' | 'DECLINED';
    conditionsOrReason?: string;
    approverUserId: string;
}
export interface RecordCounterpartyIc2ReviewInput {
    workflowInstanceId: string;
    checklist: Record<string, 'PASS' | 'FAIL'>;
    notes?: string;
    outcome: 'SATISFACTORY' | 'UNSATISFACTORY';
    approverUserId: string;
}
export declare class CounterpartyLifecycleError extends Error {
    constructor(message: string);
}
export interface RequestCounterpartyRestructureInput {
    counterpartyId: string;
    obligationId?: string;
    requestType: 'EXTENSION' | 'RESTRUCTURE';
    extensionMonths?: number;
    reason: string;
}
export interface DecideCounterpartyRestructureInput {
    requestId: string;
    decision: 'APPROVED' | 'DECLINED';
    notes?: string;
    actorUserId: string;
}
export interface CreateRepaymentObligationInput {
    counterpartyId: string;
    facilityApplicationId?: string;
    dueDate: Date;
    amountKobo: bigint;
    createdByUserId: string;
}
export interface SubmitCounterpartyEnquiryInput {
    counterpartyId: string;
    subject?: string;
    message: string;
    routedToFunctionCode?: string;
}
export interface SubmitFacilityApplicationInput {
    counterpartyId: string;
    requestedAmountKobo: bigint;
    purpose: string;
}
export interface FacilityApplicationProgress {
    id: string;
    requestedAmountKobo: string;
    purpose: string;
    status: string;
    stageLabel: string;
    pendingFromCounterparty: boolean;
    createdAt: Date;
    targetedReturnPct: string | null;
}
export interface DraftInvestmentMemoInput {
    facilityApplicationId: string;
    dealSummary: string;
    structureType: string;
    amountKobo: bigint;
    tenorMonths: number;
    targetReturnPct: number;
    riskNotes: string;
    shariahNotes: string;
    collateralNotes: string;
}
