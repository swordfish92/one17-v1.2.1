import { IsEmail, IsString, MinLength } from 'class-validator';

// Deliberately NOT reusing auth.types.ts's LoginDto/AuthError/AuthenticatedUser
// — spec §7.5/§6a: "SEPARATE AUTH REALM (absolute)". Portal clients log in
// with their investor contactEmail, never an AppUser email.
export class PortalLoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

export interface PortalRequestContext {
  ipAddress?: string;
}

export class PortalAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PortalAuthError';
  }
}

// Attached by PortalSessionAuthGuard. Invariant 28(e): the counterparty
// persona is a SECOND principal type in the same realm — principalType is
// the discriminator; exactly one of investorId/counterpartyId is set,
// matching whichever table validateSession() resolved the token against.
// This is the ownership key every portal-side query/mutation filters on
// (cross-client leak test / own-data-only).
export interface AuthenticatedPortalUser {
  portalUserId: string;
  principalType: 'INVESTOR' | 'COUNTERPARTY';
  investorId?: string;
  counterpartyId?: string;
  sessionId: string;
}
