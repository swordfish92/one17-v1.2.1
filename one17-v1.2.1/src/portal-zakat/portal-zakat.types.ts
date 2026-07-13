import { IsBoolean, IsIn, IsString, MaxLength } from 'class-validator';

export class ElectZakatRateBasisDto {
  @IsIn(['LUNAR', 'GREGORIAN'])
  rateBasis!: 'LUNAR' | 'GREGORIAN';
}

// Invariant 70(h)(i)/(ii): the portal's "Request Zakat Computation Service"
// CTA — consentAcknowledged is the NDPA advisory-use consent captured at
// subscription-request time (covers the Portfolio Advisory Feed use in
// (iv)); ZakatService.requestSubscription rejects the request outright if
// this is not true.
export class RequestZakatSubscriptionDto {
  @IsBoolean()
  consentAcknowledged!: boolean;
}

// Mirrors ops-api's DeclareZakatScheduleItemDto exactly (same six schedule
// types, same zakatability enum) — the client-portal declare path reuses
// the identical shape, minus nothing server-controlled (declaredByUserId
// is never client-supplied on either path).
export class DeclareZakatScheduleItemClientDto {
  @IsIn(['CASH_BANK', 'GOLD_SILVER', 'INVESTMENT', 'FIXED_ASSET', 'RECEIVABLE', 'LIABILITY'])
  scheduleType!: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
  @IsString() @MaxLength(500) description!: string;
  @IsString() amountKobo!: string;
  @IsIn(['ZAKATABLE', 'NON_ZAKATABLE', 'DOUBTFUL']) zakatability!: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
}
