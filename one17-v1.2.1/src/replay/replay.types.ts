export interface IngestReplayCsvInput {
  sourceCode: string;
  fileName: string;
  csvContent: string;
  // Workbook exports carry 2-3 title/instruction rows above the real header
  // (verified per source file — none of the leading rows contain an
  // embedded newline inside a quoted cell, so a plain line-based skip is
  // safe here even though the real header row further down does).
  skipLeadingLines: number;
  uploadedByUserId: string;
}

export interface ReconciliationCounts {
  sourceCode: string;
  totalRows: number;
  detail: string;
}

export class ReplayError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ReplayError';
  }
}
