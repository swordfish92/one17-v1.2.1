// Thrown by RbacService.assignRole when Roles & Workflows §3 forbids the
// resulting combination. Distinct from a generic Error so callers (and
// tests) can distinguish "rejected by SoD" from "something broke".
export class SodConflictError extends Error {
  constructor(
    message: string,
    public readonly userId: string,
    public readonly attemptedRoleCode: string,
  ) {
    super(message);
    this.name = 'SodConflictError';
  }
}
