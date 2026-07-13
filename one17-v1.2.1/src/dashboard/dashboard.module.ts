import { Module } from '@nestjs/common';
import { BoardDirectiveModule } from '../board-directive/board-directive.module';
import { ReconciliationModule } from '../reconciliation/reconciliation.module';
import { ReportingModule } from '../reporting/reporting.module';
import { DashboardService } from './dashboard.service';
import { CompanyAccountingDashboardService } from './company-accounting-dashboard.service';
import { FundAccountingDashboardService } from './fund-accounting-dashboard.service';
import { BdDashboardService } from './bd-dashboard.service';

@Module({
  imports: [BoardDirectiveModule, ReconciliationModule, ReportingModule],
  providers: [DashboardService, CompanyAccountingDashboardService, FundAccountingDashboardService, BdDashboardService],
  exports: [DashboardService, CompanyAccountingDashboardService, FundAccountingDashboardService, BdDashboardService],
})
export class DashboardModule {}
