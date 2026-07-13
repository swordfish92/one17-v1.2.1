import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuditModule } from './audit/audit.module';
import { RbacModule } from './rbac/rbac.module';
import { WorkflowModule } from './workflow/workflow.module';
import { DelegationModule } from './delegation/delegation.module';
import { ParametersModule } from './parameters/parameters.module';
import { InvestorModule } from './investor/investor.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { BdModule } from './bd/bd.module';
import { LedgerModule } from './ledger/ledger.module';
import { ReportingModule } from './reporting/reporting.module';
import { RiskModule } from './risk/risk.module';
import { PeriodModule } from './period/period.module';
import { MigrationModule } from './migration/migration.module';
import { ReplayModule } from './replay/replay.module';
import { HalalFundEngineModule } from './engine-halal-fund/halal-fund-engine.module';
import { PsrWaterfallEngineModule } from './engine-psr-waterfall/psr-waterfall-engine.module';
import { EventJournalModule } from './event-journal/event-journal.module';
import { ReplayComparisonModule } from './replay-comparison/replay-comparison.module';
import { BudgetModule } from './budget/budget.module';
import { BudgetReviewPackModule } from './budget-review-pack/budget-review-pack.module';
import { NdMandateEngineModule } from './engine-nd-mandate/nd-mandate-engine.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { MfaModule } from './mfa/mfa.module';
import { OpsApiModule } from './ops-api/ops-api.module';
import { KriEngineModule } from './kri-engine/kri-engine.module';
import { StressEngineModule } from './stress-engine/stress-engine.module';
import { PortalWmModule } from './portal-wm/portal-wm.module';
import { PortalCounterpartyModule } from './portal-counterparty/portal-counterparty.module';
import { PortalZakatModule } from './portal-zakat/portal-zakat.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [
    PrismaModule,
    AuditModule,
    RbacModule,
    WorkflowModule,
    DelegationModule,
    ParametersModule,
    InvestorModule,
    CounterpartyModule,
    BdModule,
    LedgerModule,
    ReportingModule,
    RiskModule,
    PeriodModule,
    MigrationModule,
    ReplayModule,
    HalalFundEngineModule,
    PsrWaterfallEngineModule,
    EventJournalModule,
    ReplayComparisonModule,
    BudgetModule,
    BudgetReviewPackModule,
    NdMandateEngineModule,
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    AuthModule,
    MfaModule,
    OpsApiModule,
    KriEngineModule,
    StressEngineModule,
    PortalWmModule,
    PortalCounterpartyModule,
    PortalZakatModule,
    SchedulerModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
