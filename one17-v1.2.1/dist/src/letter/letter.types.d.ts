export declare class LetterError extends Error {
    constructor(message: string);
}
export type LetterType = 'WELCOME' | 'MATURITY_NOTICE' | 'ROLLOVER_CONFIRMATION' | 'AD_HOC' | 'BANK_INSTRUCTION' | 'TAX_REMITTANCE_INSTRUCTION';
export interface ProposeLetterTemplateInput {
    letterType: LetterType;
    bodyTemplate: string;
    proposedByUserId: string;
}
export interface ApproveLetterTemplateInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface GenerateLetterInput {
    letterType: LetterType;
    investorId?: string;
    counterpartyId?: string;
    productAccountId?: string;
    ndMandateAccountId?: string;
    extraMergeFields?: Record<string, string>;
    generatedByUserId: string;
}
export interface ApproveLetterInstanceInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface RejectLetterInstanceInput {
    workflowInstanceId: string;
    actorUserId: string;
    notes?: string;
}
