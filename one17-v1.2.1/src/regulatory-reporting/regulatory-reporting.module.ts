import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { ComplaintModule } from '../complaint/complaint.module';
import { RegulatoryReportingService } from './regulatory-reporting.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, ComplaintModule],
  providers: [RegulatoryReportingService],
  exports: [RegulatoryReportingService],
})
export class RegulatoryReportingModule {}
