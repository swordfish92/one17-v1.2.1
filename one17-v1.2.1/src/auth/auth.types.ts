import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

export interface RequestContext {
  ipAddress?: string;
  requestId?: string;
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

// Attached to the request by SessionAuthGuard once a session is validated —
// deliberately minimal (id + sessionId only). Anything else a controller
// needs about the user (roles, capabilities) is looked up live through
// RbacService/DelegationService, never cached on the session, so a
// mid-session capability change takes effect immediately.
export interface AuthenticatedUser {
  userId: string;
  sessionId: string;
  // Invariant 68(c) H-02: true while the second MFA factor is still
  // outstanding for this session — SessionAuthGuard uses this to block
  // every route except the ones marked @AllowMfaPending().
  mfaPending: boolean;
}
