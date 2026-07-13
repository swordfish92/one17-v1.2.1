import { Module } from '@nestjs/common';
import { LedgerModule } from '../ledger/ledger.module';
import { EventJournalService } from './event-journal.service';

@Module({
  imports: [LedgerModule],
  providers: [EventJournalService],
  exports: [EventJournalService],
})
export class EventJournalModule {}
