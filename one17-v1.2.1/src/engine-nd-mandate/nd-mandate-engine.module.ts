import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { NdMandateEngineService } from './nd-mandate-engine.service';

@Module({
  imports: [AuditModule, WorkflowModule],
  providers: [NdMandateEngineService],
  exports: [NdMandateEngineService],
})
export class NdMandateEngineModule {}
