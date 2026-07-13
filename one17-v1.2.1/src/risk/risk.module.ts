import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { RiskService } from './risk.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [RiskService],
  exports: [RiskService],
})
export class RiskModule {}
