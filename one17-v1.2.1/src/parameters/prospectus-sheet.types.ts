export class ProspectusSheetError extends Error {}

// Every field is optional -- a given product's sheet only fills in the
// group(s) relevant to its Product.engineType (invariant 70a); enforcement
// of which groups matter for which class lives in ProspectusSheetService,
// never a DB constraint (see schema.prisma's ProductParameters comment).
export interface ProspectusSheetFields {
  prospectusRef?: string;
  // Mutual Fund (UNIT_NAV) mechanics
  authorizedUnits?: number;
  fundSizeCapKobo?: bigint;
  offerSpreadPct?: number;
  bidSpreadPct?: number;
  valuationFrequency?: string;
  minimumSubscriptionKobo?: bigint;
  minimumAdditionalInvestmentKobo?: bigint;
  minimumRedemptionKobo?: bigint;
  minimumHoldingKobo?: bigint;
  // Fee stack
  managementFeeRatePct?: number;
  adminFeeRatePct?: number;
  custodianFeeRatePct?: number;
  secFeeRatePct?: number;
  auditFeeRatePct?: number;
  // Distribution policy
  distributionMethod?: string;
  distributionFrequency?: string;
  distributableIncomePct?: number;
  // PSR pool additions
  minimumParticipationKobo?: bigint;
  poolTenorMonths?: number;
  surplusSharingEnabled?: boolean;
  // Existing PSR ratio fields (already on ProductParameters, invariant 70a
  // calls the pool's base distribution ratio "existing" -- this sheet can
  // set them too, same row)
  psrPoolMudaribShare?: number;
  surplusInvestorShare?: number;
  surplusMudaribShare?: number;
  // Investment Mandate additions
  mandateRoleModel?: 'MUDARABAH_PSR' | 'WAKALAH';
  mandateFeeRatePct?: number;
  targetedReturnBenchmarkPct?: number;
  investmentType?: string;
  tenorLockInMonths?: number;
  minimumInvestmentKobo?: bigint;
  fundingStructure?: 'LUMP_SUM' | 'PERIODIC_CALL';
  // Offer narrative (invariant 70c reads these verbatim for the Offers &
  // Opportunities cards)
  offerNarrativeBrief?: string;
  offerNarrativeOpportunity?: string;
  offerNarrativeDynamics?: string;
  offerNarrativeRiskSummary?: string;
  offerNarrativeModelDescription?: string;
}

export interface ProposeSheetInput extends ProspectusSheetFields {
  productCode: string;
  initiatedByUserId: string;
}

export interface EditDraftSheetInput extends ProspectusSheetFields {
  sheetId: string;
  actorUserId: string;
}

export interface ProposeAmendmentInput extends ProspectusSheetFields {
  productCode: string;
  proposedByUserId: string;
  // SEC 80% floor context: the SEC_FEE constraint referenced by invariant
  // 70(a) is enforced in validate(), not here -- this input carries only
  // the fields being amended.
}
