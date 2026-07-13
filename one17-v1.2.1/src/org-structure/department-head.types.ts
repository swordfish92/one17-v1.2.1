export class DepartmentHeadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DepartmentHeadError';
  }
}

export interface ProposeDepartmentHeadInput {
  orgUnitCode: string;
  employeeId: string;
  effectiveFrom?: Date;
}
