export interface GenerateEventJournalInput {
    eventType: string;
    ledgerEntityCode: string;
    entryDate: Date;
    amountKobo: bigint;
    referenceTokens: Record<string, string>;
    drAccountCodeOverride?: string;
    crAccountCodeOverride?: string;
    createdByUserId: string;
}
export declare class EventJournalError extends Error {
    constructor(message: string);
}
