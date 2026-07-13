import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LedgerModule } from '../ledger/ledger.module';
import { ReportingService } from './reporting.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LedgerModule],
  providers: [ReportingService],
  exports: [ReportingService],
})
export class ReportingModule {}
