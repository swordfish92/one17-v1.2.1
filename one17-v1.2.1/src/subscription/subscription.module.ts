import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LedgerModule } from '../ledger/ledger.module';
import { NdMandateEngineModule } from '../engine-nd-mandate/nd-mandate-engine.module';
import { EventJournalModule } from '../event-journal/event-journal.module';
import { CertificateModule } from '../certificate/certificate.module';
import { DelegationModule } from '../delegation/delegation.module';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [AuditModule, WorkflowModule, LedgerModule, NdMandateEngineModule, EventJournalModule, CertificateModule, DelegationModule],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
