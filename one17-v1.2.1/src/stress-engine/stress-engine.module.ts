import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { StressEngineService } from './stress-engine.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [StressEngineService],
  exports: [StressEngineService],
})
export class StressEngineModule {}
