export class OrgStructureError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrgStructureError';
  }
}

export interface CreateOrgUnitInput {
  code: string;
  name: string;
  secondaryReportingLine?: string;
  createdByUserId: string;
}

export interface CreatePositionInput {
  title: string;
  orgUnitCode: string;
  cadre: string;
  notch: number;
  createdByUserId: string;
}
