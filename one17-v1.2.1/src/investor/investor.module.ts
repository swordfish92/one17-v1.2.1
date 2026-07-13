import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DelegationModule } from '../delegation/delegation.module';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { DocumentModule } from '../document/document.module';
import { TaskModule } from '../task/task.module';
import { ScreeningGatewayModule } from '../screening-gateway/screening-gateway.module';
import { InvestorService } from './investor.service';
import { InvestorBankAccountChangeService } from './investor-bank-account-change.service';
import { InvestorContactAmendmentService } from './investor-contact-amendment.service';
import { InvestorExitService } from './investor-exit.service';
import { InvestorComplianceSweepService } from './investor-compliance-sweep.service';
import { InvestorMandateAmendmentService } from './investor-mandate-amendment.service';

@Module({
  imports: [AuditModule, WorkflowModule, DelegationModule, PortalAuthModule, DocumentModule, TaskModule, ScreeningGatewayModule],
  providers: [InvestorService, InvestorBankAccountChangeService, InvestorContactAmendmentService, InvestorExitService, InvestorComplianceSweepService, InvestorMandateAmendmentService],
  exports: [InvestorService, InvestorBankAccountChangeService, InvestorContactAmendmentService, InvestorExitService, InvestorComplianceSweepService, InvestorMandateAmendmentService],
})
export class InvestorModule {}
