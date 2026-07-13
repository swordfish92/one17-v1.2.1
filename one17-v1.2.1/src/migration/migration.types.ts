export const TPL_CODES = [
  'TPL_01', 'TPL_02', 'TPL_03', 'TPL_04', 'TPL_05', 'TPL_06', 'TPL_07',
  'TPL_08', 'TPL_09', 'TPL_10', 'TPL_13',
] as const;
export type TplCode = (typeof TPL_CODES)[number];

export interface StageCsvInput {
  tplCode: TplCode;
  fileName: string;
  csvContent: string;
  uploadedByUserId: string;
}

export interface GateFailure {
  gate: string;
  reason: string;
}

export interface ReconciliationGateResult {
  gate: number;
  description: string;
  passed: boolean;
  detail: string;
}

export class MigrationValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MigrationValidationError';
  }
}
