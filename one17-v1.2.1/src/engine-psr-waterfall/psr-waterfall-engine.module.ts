import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { PsrWaterfallEngineService } from './psr-waterfall-engine.service';

@Module({
  imports: [AuditModule, WorkflowModule],
  providers: [PsrWaterfallEngineService],
  exports: [PsrWaterfallEngineService],
})
export class PsrWaterfallEngineModule {}
