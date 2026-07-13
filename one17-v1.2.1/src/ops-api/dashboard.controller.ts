import { BadRequestException, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { DashboardService } from '../dashboard/dashboard.service';
import { CompanyAccountingDashboardService, CompanyAccountingDashboardError } from '../dashboard/company-accounting-dashboard.service';
import { FundAccountingDashboardService } from '../dashboard/fund-accounting-dashboard.service';
import { BdDashboardService } from '../dashboard/bd-dashboard.service';

// Thin adapter — every figure is assembled by the injected dashboard
// service from live queries; this controller adds nothing but auth/
// capability gating (same discipline as the original CEO/Board routes).
@Controller('dashboards')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly companyAccounting: CompanyAccountingDashboardService,
    private readonly fundAccounting: FundAccountingDashboardService,
    private readonly bd: BdDashboardService,
  ) {}

  @Get('ceo')
  @RequiresCapability('CONTROLS_DASHBOARD', 'VIEW')
  async ceo() {
    return this.dashboardService.getCeoDashboard();
  }

  @Get('board')
  @RequiresCapability('CONTROLS_DASHBOARD', 'VIEW')
  async board() {
    return this.dashboardService.getBoardDashboard();
  }

  // Invariant 58(a).
  @Get('company-accounting')
  @RequiresCapability('COMPANY_ACCOUNTING_DASHBOARD', 'VIEW')
  async companyAccountingDashboard() {
    return this.companyAccounting.getDashboard();
  }

  @Post('company-accounting/export')
  @RequiresCapability('COMPANY_ACCOUNTING_DASHBOARD', 'VIEW')
  async exportCompanyAccountingReportRun(@CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.companyAccounting.exportAsReportRun(user.userId);
    } catch (err) {
      if (err instanceof CompanyAccountingDashboardError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Invariant 58(b).
  @Get('fund-accounting')
  @RequiresCapability('FUND_ACCOUNTING_DASHBOARD', 'VIEW')
  async fundAccountingDashboard() {
    return this.fundAccounting.getDashboard();
  }

  // Invariant 58(c). scope=own is the default -- per-officer views scoped
  // to own book (54's not-yet-built assignment registry, honestly proxied
  // today, see BdDashboardService's own header comment); scope=enterprise
  // is available to managers (CBGO/MGR_BD hold the same VIEW grant either
  // way -- the query-param choice is a display filter, not a second
  // capability, matching the "capability-gated, not role-gated" house
  // style).
  @Get('bd')
  @RequiresCapability('BD_DASHBOARD', 'VIEW')
  async bdDashboard(@CurrentUser() user: AuthenticatedUser, @Query('scope') scope?: string) {
    return this.bd.getDashboard(user.userId, scope === 'enterprise' ? 'enterprise' : 'own');
  }
}
