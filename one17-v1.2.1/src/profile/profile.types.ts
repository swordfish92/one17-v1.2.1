export class ProfileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProfileError';
  }
}

// Invariant 29(a): "hobbies free-edit" and CLAUDE.md's silence on children-
// count/emergency-contact implies the same direct-edit treatment (contrast
// with the three NAMED gated fields below) — see CHECK6C evidence pack for
// this judgment call.
export interface UpdateFreeEditFieldsInput {
  numberOfChildren?: number;
  hobbiesInterests?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelationship?: string;
}

// The gated trio — "NoK, marital status, and address changes route through
// HR acknowledgment workflow (payroll/benefits implications)."
export interface RequestGatedChangeInput {
  maritalStatus?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED';
  residentialAddress?: string;
  nextOfKinName?: string;
  nextOfKinRelationship?: string;
  nextOfKinPhone?: string;
  nextOfKinAddress?: string;
}
