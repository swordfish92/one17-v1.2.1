export interface BdRegisterRow {
  source: 'LEAD' | 'INVESTOR';
  id: string;
  name: string;
  contactEmail: string | null;
  contactPhone: string | null;
  stage: 'LEAD' | 'EXPRESS' | 'FULL_KYC' | 'FUNDED';
  leadStatus?: string;
  createdAt: Date;
}

export class BdLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BdLifecycleError';
  }
}
