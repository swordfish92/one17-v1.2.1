export interface OnboardInvestorInput {
  fullLegalName: string;
  entityType:
    | 'HNWI_INDIVIDUAL'
    | 'CORPORATE'
    | 'TRUST'
    | 'COOPERATIVE'
    | 'PENSION'
    | 'FAMILY_OFFICE'
    | 'OTHER';
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

// Invariant 27(a) Stage-1 Express: identity core + BVN/RC + contact only —
// deliberately a strict subset of OnboardInvestorInput (no TIN, no address,
// no source of funds — those are Stage-2 fields).
export interface OnboardExpressInvestorInput {
  fullLegalName: string;
  entityType:
    | 'HNWI_INDIVIDUAL'
    | 'CORPORATE'
    | 'TRUST'
    | 'COOPERATIVE'
    | 'PENSION'
    | 'FAMILY_OFFICE'
    | 'OTHER';
  nationality: string;
  bvn?: string;
  rcNumber?: string;
  contactEmail: string;
  contactPhone: string;
  onboardedByUserId: string;
  leadId?: string;
}

// Invariant 27(a) Stage-2: the remaining template fields (Part A/B +
// common fields) collected in graduated, save-and-resume steps. All
// optional at the type level — submitStage2Fields merges whatever the
// caller supplies onto the existing row; recordComplianceRiskAssessment is
// what actually gates progress on completeness, not this DTO.
export interface Stage2FieldsInput {
  investorId: string;
  taxIdentificationNumber?: string;
  registeredAddress?: string;
  sourceOfFunds?: string;
  dateOfBirthOrIncorporation?: Date;
  authorisedSignatories?: unknown;
  actorUserId: string;
}

// Invariant 27(a) Step 2a/2b — the template's exact 9-metric grid + 3-target
// PEP/sanctions grid. metricCode values are the template's own numbering
// (GEOGRAPHY, CLIENT_TYPE, SOURCE_OF_FUNDS, PEP_STATUS, SANCTIONS_STATUS,
// TRANSACTION_COMPLEXITY, DELIVERY_CHANNEL, BENEFICIAL_OWNERSHIP,
// SOURCE_OF_WEALTH) — a fixed set the template itself defines, not governed
// config (this is the Board-approved AML/CFT Policy's own aggregation
// formula, implementing the spec per invariant 1, not a business threshold
// invariant 10 would require as config).
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
  // HIGH_RISK path
  eddChecklist?: Record<string, 'DONE' | 'N_A'>;
  eddRecommendation?: 'APPROVE_WITH_CONDITIONS' | 'DECLINE';
  eddConditionsOrBasis?: string;
  // LOW/MEDIUM_LOW path
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

// Manual Screening Procedure §4's evidence template item: "lists checked
// with version/date." One entry per ScreeningChecklistItem the caller
// actually checked — recordScreening validates this covers every ACTIVE
// checklist item (see schema.prisma's ScreeningChecklistItem comment).
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
  mandateType:
    'UNRESTRICTED' | 'RESTRICTED' | 'DIRECT_DEAL' | 'RESTRICTED_PLUS_DIRECT';
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

// Thrown by InvestorService for onboarding-gate violations (no/insufficient
// screening record, wrong lifecycle state for the requested transition,
// etc.) — distinct from RBAC/workflow errors since these are investor
// lifecycle business rules, not authorization failures.
export class InvestorLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvestorLifecycleError';
  }
}
