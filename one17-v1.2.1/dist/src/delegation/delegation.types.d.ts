export interface RequestGrantInput {
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint;
    effectiveFrom?: Date;
    effectiveTo?: Date;
    reason?: string;
    boardInstrumentRef?: string;
}
export declare class DelegationAuthorizationError extends Error {
    constructor(message: string);
}
