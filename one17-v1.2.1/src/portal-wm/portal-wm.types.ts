import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

export class RespondToAdvisoryDto {
  @IsIn(['ACCEPTED', 'DECLINED', 'DEFERRED'])
  response!: 'ACCEPTED' | 'DECLINED' | 'DEFERRED';
}

export class AcknowledgeDto {
  @IsString()
  id!: string;
}

export class RaiseComplaintDto {
  @IsString() @MaxLength(100) category!: string;
  @IsString() @MaxLength(2000) description!: string;
}

export class SubmitHoldingActionRequestDto {
  @IsString() requestedAmountKobo!: string;
  @IsOptional() @IsString() @MaxLength(1000) notes?: string;
}

// CHECK16 62(b): investor-initiated redemption on a live ProductAccount
// holding (distinct from SubmitHoldingActionRequestDto above, which is the
// pre-existing WM external-asset ticket — this one goes through
// SubscriptionService.initiateRedemption into the SAME REDEMPTION_APPROVAL
// chain a staff-initiated redemption uses). No notes field — see
// SubscriptionService.initiatePortalRedemption's comment on why.
export class RequestProductRedemptionDto {
  @IsString() amountKobo!: string;
}

// Invariant 70(c) (CHECK24): the Offers & Opportunities tab's Invest/Top Up
// button body -- routes into SubscriptionService.initiatePortalSubscription,
// the SAME governed SUBSCRIPTION_APPROVAL chain a staff-initiated
// subscription uses (governance unchanged). No notes field, same reasoning
// as RequestProductRedemptionDto above.
export class PortalSubscribeToOfferDto {
  @IsString() amountKobo!: string;
}
