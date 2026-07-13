// Invariant 28(d): the public form's payload shape — deliberately the SAME
// fields OnboardExpressInvestorInput/OnboardCounterpartyInput accept (minus
// onboardedByUserId, which doesn't exist yet for an anonymous submitter;
// the promoting staff member supplies that at promotion time). No parallel
// field set, no parallel validation rules — promotion literally hands this
// payload to the existing service methods.
export interface PublicInvestorExpressIntake {
  fullLegalName: string;
  entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE' | 'TRUST' | 'COOPERATIVE' | 'PENSION' | 'FAMILY_OFFICE' | 'OTHER';
  nationality: string;
  bvn?: string;
  rcNumber?: string;
  contactEmail: string;
  contactPhone: string;
  // Invariant 57(b)(i) (CHECK15): required -- the public form cannot submit
  // without acknowledging the current privacy notice. marketingConsent is
  // separate and optional (Article 18(1)(a) of the NDP Act GAID requires
  // consent specifically for direct marketing).
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

export class PublicIntakeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PublicIntakeError';
  }
}
