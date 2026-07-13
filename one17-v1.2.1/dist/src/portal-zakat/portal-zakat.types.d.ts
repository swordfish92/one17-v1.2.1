export declare class ElectZakatRateBasisDto {
    rateBasis: 'LUNAR' | 'GREGORIAN';
}
export declare class RequestZakatSubscriptionDto {
    consentAcknowledged: boolean;
}
export declare class DeclareZakatScheduleItemClientDto {
    scheduleType: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
    description: string;
    amountKobo: string;
    zakatability: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
}
