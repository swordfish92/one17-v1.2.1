import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { KriEngineModule } from '../kri-engine/kri-engine.module';
import { StressEngineModule } from '../stress-engine/stress-engine.module';
import { HalalFundEngineModule } from '../engine-halal-fund/halal-fund-engine.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { ProcurementModule } from '../procurement/procurement.module';
import { ZakatModule } from '../zakat/zakat.module';
import { TaskModule } from '../task/task.module';
import { CounterpartyModule } from '../counterparty/counterparty.module';
import { PmsModule } from '../pms/pms.module';
import { BoardCalendarModule } from '../board-calendar/board-calendar.module';
import { PaymentGatewayModule } from '../payment-gateway/payment-gateway.module';
import { CalendarModule } from '../calendar/calendar.module';
import { InvestorModule } from '../investor/investor.module';
import { AttendanceModule } from '../attendance/attendance.module';
import { TaxModule } from '../tax/tax.module';
import { NotificationModule } from '../notification/notification.module';
import { ScreeningGatewayModule } from '../screening-gateway/screening-gateway.module';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [AuditModule, KriEngineModule, StressEngineModule, HalalFundEngineModule, DelegationModule, WorkflowModule, ProcurementModule, ZakatModule, TaskModule, CounterpartyModule, PmsModule, BoardCalendarModule, PaymentGatewayModule, CalendarModule, InvestorModule, AttendanceModule, TaxModule, NotificationModule, ScreeningGatewayModule],
  providers: [SchedulerService],
  exports: [SchedulerService],
})
export class SchedulerModule {}
