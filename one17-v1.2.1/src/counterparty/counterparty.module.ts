import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DelegationModule } from '../delegation/delegation.module';
import { NotificationModule } from '../notification/notification.module';
import { TaskModule } from '../task/task.module';
import { DocumentModule } from '../document/document.module';
import { EventJournalModule } from '../event-journal/event-journal.module';
import { ScreeningGatewayModule } from '../screening-gateway/screening-gateway.module';
import { CounterpartyService } from './counterparty.service';
import { PaymentReminderService } from './payment-reminder.service';
import { CounterpartyWriteOffService } from './counterparty-write-off.service';

@Module({
  imports: [AuditModule, WorkflowModule, DelegationModule, NotificationModule, TaskModule, DocumentModule, EventJournalModule, ScreeningGatewayModule],
  providers: [CounterpartyService, PaymentReminderService, CounterpartyWriteOffService],
  exports: [CounterpartyService, PaymentReminderService, CounterpartyWriteOffService],
})
export class CounterpartyModule {}
