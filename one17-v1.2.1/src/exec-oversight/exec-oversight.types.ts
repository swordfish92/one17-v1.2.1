export class ExecOversightError extends Error {}

export type OversightPrincipalType = 'INVESTOR' | 'COUNTERPARTY';

export interface StartOversightSessionInput {
  principalType: OversightPrincipalType;
  investorId?: string;
  counterpartyId?: string;
  viewedByUserId: string;
  ipAddress?: string;
}

export interface ProposeOversightPolicyInput {
  grantedRoleCodes: string[];
  proposedByUserId: string;
}
