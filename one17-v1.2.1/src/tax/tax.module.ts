import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LetterModule } from '../letter/letter.module';
import { TaxService } from './tax.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LetterModule],
  providers: [TaxService],
  exports: [TaxService],
})
export class TaxModule {}
