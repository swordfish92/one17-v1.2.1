import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LetterheadModule } from '../letterhead/letterhead.module';
import { CertificateService } from './certificate.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LetterheadModule],
  providers: [CertificateService],
  exports: [CertificateService],
})
export class CertificateModule {}
