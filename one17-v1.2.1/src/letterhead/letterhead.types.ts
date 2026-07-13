export class LetterheadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LetterheadError';
  }
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

// The read shape StatementService (and future certificate/letter renderers,
// invariant 52b/c) consumes -- null when no version has ever been ACTIVE
// yet, so callers fall back to their pre-52(a) behaviour rather than fail.
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
