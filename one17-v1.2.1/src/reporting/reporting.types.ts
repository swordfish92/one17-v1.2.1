export interface ProposeFrameworkMapVersionInput {
  description: string;
  effectiveFrom: Date;
  effectiveTo?: Date;
  createdByUserId: string;
}

export interface AddStatementLineMappingInput {
  frameworkMapId: string;
  ledgerEntityCode: string;
  accountCode: string;
  statementTemplateId: string;
  lineCode: string;
  mappedByUserId: string;
}

export interface CreateStatementTemplateInput {
  basis: 'IFRS' | 'AAOIFI';
  statementCode: string;
  name: string;
  createdByUserId: string;
}

export interface AddStatementLineInput {
  statementTemplateId: string;
  lineCode: string;
  label: string;
  sortOrder: number;
  computationType: 'SUM_OF_ACCOUNTS' | 'SUM_OF_LINES' | 'FORMULA';
  parentLineId?: string;
  signConvention?: string;
  formulaExpression?: string;
  createdByUserId: string;
}

export interface RegisterRegulatorTemplateInput {
  regulatorCode: string;
  templateCode: string;
  name: string;
  filingFrequency?: string;
  createdByUserId: string;
}

export interface AddRegulatorTemplateLineInput {
  regulatorTemplateId: string;
  lineCode: string;
  label: string;
  sortOrder: number;
  mapsToStatementLineId?: string;
  mapsToChartOfAccountId?: string;
}

export interface GenerateReportRunInput {
  ledgerEntityCode: string;
  basis: 'IFRS' | 'AAOIFI';
  periodStart: Date;
  periodEnd: Date;
  frameworkMapId: string;
  statementTemplateId?: string;
  generatedByUserId: string;
}

// Thrown for AMD-11 reporting-layer business rules that fail before hitting
// the database — same role as LedgerLifecycleError/InvestorLifecycleError
// elsewhere in this codebase.
export class ReportingLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ReportingLifecycleError';
  }
}
