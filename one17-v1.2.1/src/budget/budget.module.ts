import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { BudgetExtractionService } from './budget-extraction.service';
import { BudgetActivationService } from './budget-activation.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [BudgetExtractionService, BudgetActivationService],
  exports: [BudgetExtractionService, BudgetActivationService],
})
export class BudgetModule {}
