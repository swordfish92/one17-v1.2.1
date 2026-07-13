import { IsString, Length } from 'class-validator';

export class MfaCodeDto {
  @IsString()
  @Length(6, 10)
  code!: string;
}

export class MfaFinancialCapabilityDto {
  @IsString()
  functionCode!: string;
}

export class MfaGlobalEnforcementDto {
  allStaffMandatory!: boolean;
}

export class MfaError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MfaError';
  }
}

export interface MfaEnrollmentStart {
  secret: string;
  otpauthUrl: string;
}

export interface MfaStatus {
  mandatory: boolean;
  enrolled: boolean;
  enabledAt: Date | null;
}
