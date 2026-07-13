import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { StakeholderReportingService } from './stakeholder-reporting.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [StakeholderReportingService],
  exports: [StakeholderReportingService],
})
export class StakeholderReportingModule {}
