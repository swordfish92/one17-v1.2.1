import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { EventJournalModule } from '../event-journal/event-journal.module';
import { LedgerModule } from '../ledger/ledger.module';
import { ProcurementService } from './procurement.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, EventJournalModule, LedgerModule],
  providers: [ProcurementService],
  exports: [ProcurementService],
})
export class ProcurementModule {}
