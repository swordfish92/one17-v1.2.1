import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LedgerService } from './ledger.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [LedgerService],
  exports: [LedgerService],
})
export class LedgerModule {}
