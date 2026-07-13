import { IsBoolean, IsIn, IsISO8601, IsInt, IsOptional, IsString, Min } from 'class-validator';

// RES-001 F-02 (CHECK23, v1.0.2): the shape backup.ps1 itself posts, one
// call per invocation (success or failure — the script always reports,
// never only on success, since a failure with nothing reported is exactly
// the "silently failing backup" the CEO named).
export class ReportBackupRunDto {
  @IsString() dbName!: string;
  @IsISO8601() startedAt!: string;
  @IsISO8601() completedAt!: string;
  @IsIn(['SUCCEEDED', 'FAILED']) status!: 'SUCCEEDED' | 'FAILED';
  @IsOptional() @IsInt() @Min(0) dumpSizeBytes?: number;
  @IsOptional() @IsBoolean() offMachineCopyOk?: boolean;
  @IsOptional() @IsString() errorMessage?: string;
}
