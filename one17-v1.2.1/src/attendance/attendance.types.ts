export class AttendanceError extends Error {}

export interface ConfigureAttendanceProviderInput {
  providerSlot: number;
  adapterType: 'TTLOCK' | 'FILE_IMPORT';
  name: string;
  clientId?: string;
  clientSecret?: string;
  isActive: boolean;
  // Invariant 73(b) (CHECK27): TTLock Open Platform's real grant is a
  // password grant (confirmed against euopen.ttlock.com/doc/oauth2) --
  // needs the integrator's TTLock cloud account username + password, in
  // ADDITION to clientId/clientSecret. ttlockPassword is plaintext over the
  // wire (same as clientSecret) but is NEVER persisted raw -- the service
  // MD5-hashes it before it ever touches pendingCredentialConfig, since
  // that's the exact wire format TTLock's own token endpoint requires.
  ttlockUsername?: string;
  ttlockPassword?: string;
  ttlockApiBaseUrl?: string;
}

// Shape of AttendanceProvider.credentialConfig / pendingCredentialConfig for
// a TTLOCK slot -- see prisma/schema.prisma's own comment above
// credentialConfig for why this lives in the free-form bag rather than
// typed columns. apiBaseUrl is deliberately NOT hardcoded/defaulted at the
// schema/type level: TTLock Open Platform has multiple live regional API
// gateways (documented at euopen.ttlock.com for the EU gateway; a global/CN
// gateway also exists) and this codebase has no way to know which one a
// given tenant's TTLock account actually lives on.
export interface TTLockCredentialConfig {
  ttlockUsername?: string;
  ttlockPasswordMd5?: string;
  apiBaseUrl?: string;
}

export interface MapLockUserInput {
  providerId: string;
  deviceUserRef: string;
  employeeId: string;
}

export interface FileImportRow {
  deviceUserRef: string;
  occurredAt: string;
  method: string;
  locationRef?: string;
}

export interface FileImportResult {
  imported: number;
  duplicates: number;
  rejected: { row: number; reason: string }[];
}

export interface RequestExceptionInput {
  employeeId: string;
  attendanceEventId?: string;
  disputedDate: string;
  reason: string;
}
