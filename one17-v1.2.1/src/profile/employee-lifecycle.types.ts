export class EmployeeLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmployeeLifecycleError';
  }
}

export interface RequestOnboardingInput {
  surname: string;
  firstName: string;
  middleName?: string;
  positionId: string;
  orgUnitCode: string;
  reportsToId?: string;
  hireDate: Date;
  proposedPerformanceIncentivePct?: number;
  linkedUserEmail?: string;
  requestedByUserId: string;
}
