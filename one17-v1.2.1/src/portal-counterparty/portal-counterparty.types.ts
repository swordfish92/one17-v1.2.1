import { IsIn, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class PortalRequestRestructureDto {
  @IsIn(['EXTENSION', 'RESTRUCTURE']) requestType!: 'EXTENSION' | 'RESTRUCTURE';
  @IsOptional() @IsInt() extensionMonths?: number;
  // Invariant 25(4): ties the request to the specific transaction the
  // DB-enforced 1-restructure-per-obligation limit is scoped to. Optional —
  // an EXTENSION (or a RESTRUCTURE not tied to a named obligation) still
  // falls back to the older account-wide check in requestRestructure().
  @IsOptional() @IsString() obligationId?: string;
  @IsString() @MaxLength(1000) reason!: string;
}

export class PortalSubmitEnquiryDto {
  @IsOptional() @IsString() @MaxLength(200) subject?: string;
  @IsString() @MaxLength(2000) message!: string;
}

export class PortalRaiseComplaintDto {
  @IsString() @MaxLength(100) category!: string;
  @IsString() @MaxLength(2000) description!: string;
}

// Invariant 44(e) (CHECK10): reference-based, same as every other document
// register entry in this codebase (see document.service.ts's own header
// comment) -- fileReference is a path/URL string, not a binary upload.
export class PortalUploadFacilityDocumentDto {
  @IsString() @MaxLength(100) documentType!: string;
  @IsString() @MaxLength(500) fileReference!: string;
}
