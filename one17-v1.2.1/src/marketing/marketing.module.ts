import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DelegationModule } from '../delegation/delegation.module';
import { MarketingService } from './marketing.service';

@Module({
  imports: [AuditModule, WorkflowModule, DelegationModule],
  providers: [MarketingService],
  exports: [MarketingService],
})
export class MarketingModule {}
