export interface CreateProductInput {
  code: string;
  name: string;
  engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
  createdByUserId: string;
}

export interface SetPoolParametersInput {
  productCode: string;
  createdByUserId: string;
  approvedByUserId?: string;
  // AMD-01: pool-level Mudarib base share (β_pool), default 40% (60:40
  // investor:Mudarib). Must be strictly between 0 and 1 — validated here
  // AND at the database (see the check-constraints migration) for the same
  // "not just documentation" reason as the audit trail's insert-only rule.
  psrPoolMudaribShare?: number;
  // AMD-02: pool-level surplus split (γ_pool investor / δ_pool Mudarib),
  // default inverse 40:60. Must sum to exactly 1.0.
  surplusInvestorShare?: number;
  surplusMudaribShare?: number;
  // AMD-03, as amended by CEO instruction 2026-07-04: whether ANY fee may
  // be charged to this POOL. Defaults to false (today's correct position —
  // Mudarib earns PSR only, third-party costs sit on the company's books).
  // Deliberately a parameter, not a hard schema constraint, so a future
  // Board-approved SEC-driven policy change is a new parameter version, not
  // a migration.
  feesAllowedOnPool?: boolean;
  dripDefault?: 'AUTO' | 'MANUAL' | 'NONE';
  // AMD-01 Board + SSB approval workflow, gated by CEO instruction
  // 2026-07-04: required together (both, non-empty) on any version that
  // changes feesAllowedOnPool or a PSR constant on an ACTIVE product — see
  // ParameterService.setPoolParameters.
  boardResolutionRef?: string;
  ssbResolutionRef?: string;
}
