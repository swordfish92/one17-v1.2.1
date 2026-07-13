import { ChartOfAccountTemplateRow } from '../ledger/ledger.types';

export class ProductFactoryError extends Error {}

export interface InitiateProductSetupInput {
  code: string;
  name: string;
  // Invariant 60(c) (CHECK15): factory coverage now extends to MANDATE --
  // closes the "MANDATE is the pre-existing engine's territory" exclusion.
  // The ND (Investment Mandate) engine remains the RUNTIME for mandate
  // Wakalah/Mudarabah-PSR participations; this factory is now the birth
  // canal (DRAFT-create + ledger-entity/CoA provisioning) for all three
  // classes.
  engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
  initiatedByUserId: string;
}

export interface ApproveProductSetupInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Invariant 44(a): the pool NEVER carries an Investment Account line the way
// a unit-NAV fund does -- capital + allocated profit only. Every other line
// mirrors the fund's set (cash, capital, distribution, fee, charity). Codes
// are the SAME ones scripts/check9-provision-fund-coa.ts already used for
// the two pre-existing walkthrough products -- copied verbatim, not
// reinvented, so a factory-created fund/pool posts against identical GL
// structure to the ones that predate this pass.
const PENDING_REF = 'PENDING -- see invariant 44b product-factory CoA template (One17_Reporting_Standards_Spec_v1.md: no authoritative per-account FAS/IFRS citation supplied yet)';

const FUND_ACCOUNTS_BASE: Omit<ChartOfAccountTemplateRow, 'aaoifiRef' | 'ifrsRef'>[] = [
  { accountCode: '1000', accountName: 'Cash', accountType: 'ASSET' },
  { accountCode: '1110', accountName: 'Investment Account', accountType: 'ASSET' },
  { accountCode: '1200', accountName: 'Accrued Income', accountType: 'ASSET' },
  { accountCode: '2000', accountName: 'Redemption Payable', accountType: 'LIABILITY' },
  { accountCode: '2020', accountName: 'Fee Payable', accountType: 'LIABILITY' },
  { accountCode: '2060', accountName: 'Distribution Payable', accountType: 'LIABILITY' },
  { accountCode: '2070', accountName: 'Charity Payable', accountType: 'LIABILITY' },
  { accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY' },
  { accountCode: '3020', accountName: 'Retained Earnings', accountType: 'EQUITY' },
  { accountCode: '4010', accountName: 'Income', accountType: 'INCOME' },
  { accountCode: '5030', accountName: 'Fee Expense', accountType: 'EXPENSE' },
  { accountCode: '6000', accountName: 'Impairment / Loss Expense', accountType: 'EXPENSE' },
];

function withPendingRefs(rows: Omit<ChartOfAccountTemplateRow, 'aaoifiRef' | 'ifrsRef'>[]): ChartOfAccountTemplateRow[] {
  return rows.map((r) => ({ ...r, aaoifiRef: PENDING_REF, ifrsRef: PENDING_REF }));
}

// Invariant 60(c): MANDATE reuses the POOL account set verbatim -- a mandate
// is structurally a Wakalah/Mudarabah-PSR participation, not a unit-NAV
// instrument, so it shares the same "no Investment Account line" vocabulary
// invariant 44(a) established for POOL, not the FUND set. Same PENDING_REF
// discipline as the other two classes -- no authoritative per-account
// FAS/IFRS citation invented.
export const COA_TEMPLATE_BY_ENGINE_TYPE: Record<'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE', ChartOfAccountTemplateRow[]> = {
  UNIT_NAV: withPendingRefs(FUND_ACCOUNTS_BASE),
  PSR_WATERFALL: withPendingRefs(FUND_ACCOUNTS_BASE.filter((a) => a.accountCode !== '1110')),
  MANDATE: withPendingRefs(FUND_ACCOUNTS_BASE.filter((a) => a.accountCode !== '1110')),
};

export const LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE: Record<'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE', 'FUND' | 'POOL' | 'MANDATE'> = {
  UNIT_NAV: 'FUND',
  PSR_WATERFALL: 'POOL',
  MANDATE: 'MANDATE',
};
