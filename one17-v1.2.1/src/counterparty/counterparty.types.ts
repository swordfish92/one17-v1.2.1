// Invariant 27(b): the digitized 7-step Investee Onboarding Template. Step
// 1 (Portfolio Management captures KYC + financing request); the
// credit-bureau consent and Shariah cert fields are the advisor-recommended
// additions named explicitly in the invariant.
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
  // Invariant 28(e): the portal login credential — captured at onboarding
  // so it's on file the moment onboarding reaches COMPLETE_APPROVED and
  // portal auto-provisioning fires.
  contactEmail?: string;
  onboardedByUserId: string;
}

// Step 2b's 8-metric grid (one fewer than the Investor template — no
// "Delivery Channel" metric; the template's own §2b numbering repeats "7"
// for both Beneficial Ownership and Source of Wealth Transparency).
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
  // Invariant 27(b): the approved exposure limit set at this step, feeding
  // control C20 — written onto Counterparty.enterpriseLimitKobo.
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

export class CounterpartyLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CounterpartyLifecycleError';
  }
}

// Invariant 28(e): portal persona additions.
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

// Invariant 25(4): the due-date-bearing installment the payment-reminder
// ladder keys off.
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

// Invariant 28(e)(ii)/(iii): NEW facility applications initiated from the
// portal, feeding the standing investee/facility governance chain.
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
  // Invariant 36(d): posted by Fund Accounting at/after disbursement — the
  // SAME field the fund-account receivables dashboard reads (single source).
  targetedReturnPct: string | null;
}

// Invariant 36(f): the Portfolio Officer's structured deal memo — attached
// at the facility application as their point of request, before the
// application enters the Risk/BD/Finance/Compliance review chain.
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
