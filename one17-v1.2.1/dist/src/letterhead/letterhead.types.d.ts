export declare class LetterheadError extends Error {
    constructor(message: string);
}
export interface ProposeLetterheadVersionInput {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
    proposedByUserId: string;
}
export interface ApproveLetterheadVersionInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface ActiveLetterheadContent {
    companyName: string;
    addressLine1: string;
    addressLine2: string | null;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
}
