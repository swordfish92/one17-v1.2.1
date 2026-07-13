import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { EventJournalModule } from '../event-journal/event-journal.module';
import { WmService } from './wm.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, EventJournalModule],
  providers: [WmService],
  exports: [WmService],
})
export class WmModule {}
