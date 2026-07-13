import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LetterheadModule } from '../letterhead/letterhead.module';
import { LetterService } from './letter.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LetterheadModule],
  providers: [LetterService],
  exports: [LetterService],
})
export class LetterModule {}
