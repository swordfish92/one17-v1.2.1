import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DelegationModule } from '../delegation/delegation.module';
import { HalalFundEngineService } from './halal-fund-engine.service';
import { HalalFundLaunchConfigService } from './halal-fund-launch-config.service';

@Module({
  imports: [AuditModule, WorkflowModule, DelegationModule],
  providers: [HalalFundEngineService, HalalFundLaunchConfigService],
  exports: [HalalFundEngineService, HalalFundLaunchConfigService],
})
export class HalalFundEngineModule {}
