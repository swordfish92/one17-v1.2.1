import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LetterModule } from '../letter/letter.module';
import { TaxModule } from '../tax/tax.module';
import { ObligationsService } from './obligations.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LetterModule, TaxModule],
  providers: [ObligationsService],
  exports: [ObligationsService],
})
export class ObligationsModule {}
