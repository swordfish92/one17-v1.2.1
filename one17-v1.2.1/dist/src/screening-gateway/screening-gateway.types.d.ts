import type { ScreeningListEntry } from '../../generated/prisma/client';
export declare class ScreeningGatewayError extends Error {
    constructor(message: string);
}
export type ScreeningSourceCode = 'OFAC' | 'UN_SC' | 'UK_SANCTIONS' | 'EU_FSF' | 'NG_NFIU';
export type ScreeningSubjectTypeInput = 'INVESTOR' | 'COUNTERPARTY';
export type ScreeningProviderModeInput = 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL';
export type ScreeningHitAdjudicationOutcomeInput = 'TRUE_MATCH' | 'FALSE_POSITIVE';
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
