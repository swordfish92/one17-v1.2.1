export class LetterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LetterError';
  }
}

export type LetterType =
  | 'WELCOME'
  | 'MATURITY_NOTICE'
  | 'ROLLOVER_CONFIRMATION'
  | 'AD_HOC'
  // Invariant 65(b)/(c) (CHECK18): internal-only letters (no
  // investor/counterparty recipient) -- generateLetter's existing
  // all-undefined-recipient tolerance handles these unmodified.
  | 'BANK_INSTRUCTION'
  | 'TAX_REMITTANCE_INSTRUCTION';

export interface ProposeLetterTemplateInput {
  letterType: LetterType;
  bodyTemplate: string;
  proposedByUserId: string;
}

export interface ApproveLetterTemplateInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Invariant 52(c): "governed letter-template registry (merge fields from
// investor/counterparty/product/account data)." Exactly one of
// investorId/counterpartyId identifies the recipient; productAccountId/
// ndMandateAccountId are optional (an AD_HOC or WELCOME letter may have
// neither). extraMergeFields covers ad-hoc content a template's merge
// tokens can't reach purely from DB lookups (e.g. a custom subject line
// or officer name for a one-off letter).
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
