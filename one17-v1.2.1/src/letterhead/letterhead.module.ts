import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LetterheadService } from './letterhead.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [LetterheadService],
  exports: [LetterheadService],
})
export class LetterheadModule {}
