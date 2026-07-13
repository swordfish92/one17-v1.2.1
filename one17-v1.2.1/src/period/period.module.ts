import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { PeriodService } from './period.service';
import { BankReconciliationService } from './bank-reconciliation.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [PeriodService, BankReconciliationService],
  exports: [PeriodService, BankReconciliationService],
})
export class PeriodModule {}
