import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { AuthModule } from '../auth/auth.module';
import { InvestorModule } from '../investor/investor.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RegulatoryReportingModule } from '../regulatory-reporting/regulatory-reporting.module';
import { WmModule } from '../wm/wm.module';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { PmsModule } from '../pms/pms.module';
import { BdModule } from '../bd/bd.module';
import { PublicIntakeModule } from '../public-intake/public-intake.module';
import { StrategyLayerModule } from '../strategy-layer/strategy-layer.module';
import { MarketingModule } from '../marketing/marketing.module';
import { CounterpartyModule } from '../counterparty/counterparty.module';
import { ComplaintModule } from '../complaint/complaint.module';
import { LedgerModule } from '../ledger/ledger.module';
import { ReportingModule } from '../reporting/reporting.module';
import { ParametersModule } from '../parameters/parameters.module';
import { ProductModule } from '../product/product.module';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { ShariahGovernanceModule } from '../shariah-governance/shariah-governance.module';
import { RiskModule } from '../risk/risk.module';
import { StressEngineModule } from '../stress-engine/stress-engine.module';
import { NdMandateEngineModule } from '../engine-nd-mandate/nd-mandate-engine.module';
import { ProcurementModule } from '../procurement/procurement.module';
import { AiModule } from '../ai/ai.module';
import { StakeholderReportingModule } from '../stakeholder-reporting/stakeholder-reporting.module';
import { ProfileModule } from '../profile/profile.module';
import { TaskModule } from '../task/task.module';
import { NotificationModule } from '../notification/notification.module';
import { ZakatModule } from '../zakat/zakat.module';
import { BureauGatewayModule } from '../bureau-gateway/bureau-gateway.module';
import { BoardDirectiveModule } from '../board-directive/board-directive.module';
import { BoardCalendarModule } from '../board-calendar/board-calendar.module';
import { BoardMinutesModule } from '../board-minutes/board-minutes.module';
import { TalentModule } from '../talent/talent.module';
import { DocumentModule } from '../document/document.module';
import { ClientMessagingModule } from '../client-messaging/client-messaging.module';
import { SettingsRegistryModule } from '../settings-registry/settings-registry.module';
import { BudgetModule } from '../budget/budget.module';
import { BudgetReviewPackModule } from '../budget-review-pack/budget-review-pack.module';
import { MigrationModule } from '../migration/migration.module';
import { ReplayModule } from '../replay/replay.module';
import { HalalFundEngineModule } from '../engine-halal-fund/halal-fund-engine.module';
import { PeriodModule } from '../period/period.module';
import { RbacModule } from '../rbac/rbac.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { InvestorsController } from './investors.controller';
import { WorkflowInboxController } from './workflow-inbox.controller';
import { WorkflowInboxService } from './workflow-inbox.service';
import { DashboardController } from './dashboard.controller';
import { RegulatoryReportingController } from './regulatory-reporting.controller';
import { WmController } from './wm.controller';
import { PmsController } from './pms.controller';
import { BdController } from './bd.controller';
import { PublicIntakeController } from './public-intake.controller';
import { StrategyLayerController } from './strategy-layer.controller';
import { MarketingController } from './marketing.controller';
import { CounterpartyController } from './counterparty.controller';
import { ComplaintController } from './complaint.controller';
import { FundAccountingController } from './fund-accounting.controller';
import { CompanyAccountingController } from './company-accounting.controller';
import { SchedulerController } from './scheduler.controller';
import { ShariahGovernanceController } from './shariah-governance.controller';
import { ErmController } from './erm.controller';
import { PerformanceController } from './performance.controller';
import { NdMandateController } from './nd-mandate.controller';
import { ProcurementController } from './procurement.controller';
import { AiController } from './ai.controller';
import { AiProviderCredentialController } from './ai-provider-credential.controller';
import { StakeholderReportingController } from './stakeholder-reporting.controller';
import { ProfileController } from './profile.controller';
import { EmployeeLifecycleController } from './employee-lifecycle.controller';
import { OrgStructureController } from './org-structure.controller';
import { OrgStructureModule } from '../org-structure/org-structure.module';
import { ZakatController } from './zakat.controller';
import { BoardDirectiveController } from './board-directive.controller';
import { BoardCalendarController } from './board-calendar.controller';
import { BoardMinutesController } from './board-minutes.controller';
import { TalentController } from './talent.controller';
import { DocumentController } from './document.controller';
import { LedgerController } from './ledger.controller';
import { DistributionController } from './distribution.controller';
import { PeriodController } from './period.controller';
import { DelegationController } from './delegation.controller';
import { RbacController } from './rbac.controller';
import { SettingsRegistryController } from './settings-registry.controller';
import { BudgetController } from './budget.controller';
import { BudgetReviewPackController } from './budget-review-pack.controller';
import { AuditTrailViewerController } from './audit-trail-viewer.controller';
import { MigrationController } from './migration.controller';
import { ReplayController } from './replay.controller';
import { SubscriptionController } from './subscription.controller';
import { PettyCashController } from './petty-cash.controller';
import { PettyCashModule } from '../petty-cash/petty-cash.module';
import { LetterheadController } from './letterhead.controller';
import { LetterheadModule } from '../letterhead/letterhead.module';
import { CertificateController } from './certificate.controller';
import { CertificateModule } from '../certificate/certificate.module';
import { LetterController } from './letter.controller';
import { LetterModule } from '../letter/letter.module';
import { PaymentGatewayController } from './payment-gateway.controller';
import { PaymentGatewayWebhookController } from './payment-gateway-webhook.controller';
import { PaymentGatewayModule } from '../payment-gateway/payment-gateway.module';
import { TaskController } from './task.controller';
import { DocumentTransmissionController } from './document-transmission.controller';
import { DocumentTransmissionModule } from '../document-transmission/document-transmission.module';
import { CalendarController } from './calendar.controller';
import { CalendarFeedController } from './calendar-feed.controller';
import { CalendarGatewayController } from './calendar-gateway.controller';
import { CalendarModule } from '../calendar/calendar.module';
import { ComplianceSweepController } from './compliance-sweep.controller';
import { DataProtectionModule } from '../data-protection/data-protection.module';
import { PrivacyNoticeController } from './privacy-notice.controller';
import { DataProtectionController } from './data-protection.controller';
import { StatementModule } from '../statement/statement.module';
import { ExecOversightModule } from '../exec-oversight/exec-oversight.module';
import { ExecOversightController } from './exec-oversight.controller';
import { AttendanceModule } from '../attendance/attendance.module';
import { AttendanceController } from './attendance.controller';
import { LeaveModule } from '../leave/leave.module';
import { LeaveController } from './leave.controller';
import { TaxModule } from '../tax/tax.module';
import { TaxController } from './tax.controller';
import { ObligationsModule } from '../obligations/obligations.module';
import { ObligationsController } from './obligations.controller';
import { ActivationConsoleModule } from '../activation-console/activation-console.module';
import { ActivationConsoleController } from './activation-console.controller';
import { BackupModule } from '../backup/backup.module';
import { BackupController } from './backup.controller';
import { BackupRunReportController } from './backup-run-report.controller';
import { ProspectusSheetController } from './prospectus-sheet.controller';
import { ScreeningGatewayModule } from '../screening-gateway/screening-gateway.module';
import { ScreeningGatewayController } from './screening-gateway.controller';
import { DashboardComposerModule } from '../dashboard-composer/dashboard-composer.module';
import { DashboardComposerController } from './dashboard-composer.controller';

// Item 4a/4: the HTTP surface for the 3 ops-UI screens (onboarding,
// workflow inbox, approvals) — grown screen-by-screen per CLAUDE.md Stack
// Decisions item 5, not bulk-generated ahead of consumers. AuditModule and
// DelegationModule are imported directly (not just transitively via
// AuthModule) because SessionAuthGuard/CapabilityGuard are applied via
// @UseGuards() on controllers declared HERE — Nest resolves a guard's own
// constructor dependencies against the module that hosts the controller,
// not just the module that exports the guard class.
@Module({
  imports: [AuditModule, DelegationModule, AuthModule, InvestorModule, WorkflowModule, DashboardModule, RegulatoryReportingModule, WmModule, PortalAuthModule, PmsModule, BdModule, PublicIntakeModule, StrategyLayerModule, MarketingModule, CounterpartyModule, ComplaintModule, LedgerModule, ReportingModule, ParametersModule, ProductModule, SchedulerModule, ShariahGovernanceModule, RiskModule, StressEngineModule, NdMandateEngineModule, ProcurementModule, AiModule, StakeholderReportingModule, ProfileModule, TaskModule, NotificationModule, ZakatModule, BureauGatewayModule, BoardDirectiveModule, BoardCalendarModule, BoardMinutesModule, TalentModule, DocumentModule, HalalFundEngineModule, PeriodModule, RbacModule, ClientMessagingModule, SettingsRegistryModule, BudgetModule, BudgetReviewPackModule, MigrationModule, ReplayModule, SubscriptionModule, OrgStructureModule, PettyCashModule, LetterheadModule, CertificateModule, LetterModule, PaymentGatewayModule, DocumentTransmissionModule, CalendarModule, DataProtectionModule, StatementModule, ExecOversightModule, AttendanceModule, LeaveModule, TaxModule, ObligationsModule, ActivationConsoleModule, BackupModule, ScreeningGatewayModule, DashboardComposerModule],
  controllers: [InvestorsController, WorkflowInboxController, DashboardController, RegulatoryReportingController, WmController, PmsController, BdController, PublicIntakeController, StrategyLayerController, MarketingController, CounterpartyController, ComplaintController, FundAccountingController, CompanyAccountingController, SchedulerController, ShariahGovernanceController, ErmController, PerformanceController, NdMandateController, ProcurementController, AiController, AiProviderCredentialController, StakeholderReportingController, ProfileController, EmployeeLifecycleController, OrgStructureController, ZakatController, BoardDirectiveController, BoardCalendarController, BoardMinutesController, TalentController, DocumentController, LedgerController, DistributionController, PeriodController, DelegationController, RbacController, SettingsRegistryController, BudgetController, BudgetReviewPackController, AuditTrailViewerController, MigrationController, ReplayController, SubscriptionController, PettyCashController, LetterheadController, CertificateController, LetterController, PaymentGatewayController, PaymentGatewayWebhookController, TaskController, DocumentTransmissionController, CalendarController, CalendarFeedController, CalendarGatewayController, ComplianceSweepController, PrivacyNoticeController, DataProtectionController, ExecOversightController, AttendanceController, LeaveController, TaxController, ObligationsController, ActivationConsoleController, BackupController, BackupRunReportController, ProspectusSheetController, ScreeningGatewayController, DashboardComposerController],
  providers: [WorkflowInboxService],
})
export class OpsApiModule {}
