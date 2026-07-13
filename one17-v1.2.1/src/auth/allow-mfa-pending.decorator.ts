import { SetMetadata } from '@nestjs/common';

export const ALLOW_MFA_PENDING_KEY = 'allowMfaPending';

// Invariant 68(c) H-02 (CHECK22): marks the small handful of routes a
// session must be able to reach WHILE its second factor is still
// outstanding — the MFA enroll/verify endpoints themselves (MfaController).
// Every other SessionAuthGuard-protected route is rejected outright while
// mfaPending is true (see SessionAuthGuard.canActivate).
export const AllowMfaPending = () => SetMetadata(ALLOW_MFA_PENDING_KEY, true);
