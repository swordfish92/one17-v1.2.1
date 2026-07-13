export interface PublicInvestorExpressIntake {
    fullLegalName: string;
    entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
    nationality: string;
    bvn?: string;
    rcNumber?: string;
    contactEmail: string;
    contactPhone: string;
    privacyNoticeAcknowledged: boolean;
    marketingConsent?: boolean;
}
export interface PublicCounterpartyIntake {
    legalName: string;
    counterpartyType: string;
    rcNumber?: string;
    country?: string;
    purposeOfFinancing: string;
    amountSoughtKobo: string;
    expectedSourceOfRepayment: string;
    creditBureauConsent: boolean;
    privacyNoticeAcknowledged: boolean;
}
export declare class PublicIntakeError extends Error {
    constructor(message: string);
}
