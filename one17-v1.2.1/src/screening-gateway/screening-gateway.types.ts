import type { ScreeningListEntry } from '../../generated/prisma/client';

export class ScreeningGatewayError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ScreeningGatewayError';
  }
}

export type ScreeningSourceCode = 'OFAC' | 'UN_SC' | 'UK_SANCTIONS' | 'EU_FSF' | 'NG_NFIU';
export type ScreeningSubjectTypeInput = 'INVESTOR' | 'COUNTERPARTY';
export type ScreeningProviderModeInput = 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL';
export type ScreeningHitAdjudicationOutcomeInput = 'TRUE_MATCH' | 'FALSE_POSITIVE';

// One row per source's normalized parse output -- every adapter (OFAC/
// UN/UK/EU) converts its own real file format down to this shape, never
// the reverse (invariant 1: never invent a schema the source doesn't
// actually support).
export interface ParsedListEntry {
  sourceRecordId: string;
  primaryName: string;
  aliases: string[];
  dateOfBirth?: string;
  nationality?: string;
  entityType?: string;
  programme?: string;
  rawDetail: Record<string, unknown>;
}

export interface ParsedListResult {
  listVersion: string;
  entries: ParsedListEntry[];
}

export interface ConfigureScreeningListSourceInput {
  sourceCode: ScreeningSourceCode;
  downloadUrl?: string;
  extraConfig?: Record<string, unknown>;
  isActive?: boolean;
}

export interface RunScreeningInput {
  subjectType: ScreeningSubjectTypeInput;
  subjectId: string;
  subjectNameScreened: string;
  initiatedByUserId?: string;
  // Bulk callers (the invariant 72(d) re-screening sweep, iterating the
  // entire live book) fetch the active-source entry set ONCE and pass it
  // here, instead of re-querying potentially tens of thousands of rows per
  // subject -- purely a performance path, identical scoring result either
  // way.
  preloadedEntries?: ScreeningListEntry[];
}

export interface ProposeHitAdjudicationInput {
  hitId: string;
  outcome: ScreeningHitAdjudicationOutcomeInput;
  rationale: string;
  actorUserId: string;
}

export interface ManualScreeningAttestationInput {
  subjectType: ScreeningSubjectTypeInput;
  subjectId: string;
  subjectNameScreened: string;
  sourcesSearched: ScreeningSourceCode[];
  searchReference: string;
  outcome: 'GREEN' | 'RED';
  fileReference: string;
  actorUserId: string;
}
