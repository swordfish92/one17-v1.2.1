import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { PettyCashService } from './petty-cash.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [PettyCashService],
  exports: [PettyCashService],
})
export class PettyCashModule {}
