export declare class RespondToAdvisoryDto {
    response: 'ACCEPTED' | 'DECLINED' | 'DEFERRED';
}
export declare class AcknowledgeDto {
    id: string;
}
export declare class RaiseComplaintDto {
    category: string;
    description: string;
}
export declare class SubmitHoldingActionRequestDto {
    requestedAmountKobo: string;
    notes?: string;
}
export declare class RequestProductRedemptionDto {
    amountKobo: string;
}
export declare class PortalSubscribeToOfferDto {
    amountKobo: string;
}
