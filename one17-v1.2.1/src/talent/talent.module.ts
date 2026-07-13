import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { TalentService } from './talent.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [TalentService],
  exports: [TalentService],
})
export class TalentModule {}
