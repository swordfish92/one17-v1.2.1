import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { PaymentGatewayService } from './payment-gateway.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, SubscriptionModule],
  providers: [PaymentGatewayService],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
