import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DelegationModule } from '../delegation/delegation.module';
import { StrategyLayerService } from './strategy-layer.service';

@Module({
  imports: [AuditModule, WorkflowModule, DelegationModule],
  providers: [StrategyLayerService],
  exports: [StrategyLayerService],
})
export class StrategyLayerModule {}
