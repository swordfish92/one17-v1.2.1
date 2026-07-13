import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { BudgetReviewPackService } from './budget-review-pack.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [BudgetReviewPackService],
  exports: [BudgetReviewPackService],
})
export class BudgetReviewPackModule {}
