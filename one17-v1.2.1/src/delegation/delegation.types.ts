export interface RequestGrantInput {
  functionCode: string;
  delegateUserId: string;
  delegatedByUserId: string;
  limitKobo?: bigint;
  effectiveFrom?: Date;
  effectiveTo?: Date;
  reason?: string;
  // A Board resolution reference that lets this grant bypass the "grantor's
  // own effective authority must cover limitKobo" check (CLAUDE.md 9a) —
  // the Board itself can authorize a delegation exceeding what any one
  // individual holds.
  boardInstrumentRef?: string;
}

// Thrown by DelegationService for the two hard-rejection cases CLAUDE.md 9a
// requires happen before any workflow instance is even created: self-
// delegation, and a grantor exceeding their own effective authority without
// a boardInstrumentRef.
export class DelegationAuthorizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DelegationAuthorizationError';
  }
}
