import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get auditTrail(): Prisma.AuditTrailDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditChainState(): Prisma.AuditChainStateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get appUser(): Prisma.AppUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userSession(): Prisma.UserSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mfaBackupCode(): Prisma.MfaBackupCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mfaFinancialCapability(): Prisma.MfaFinancialCapabilityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mfaGlobalEnforcement(): Prisma.MfaGlobalEnforcementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get authPolicy(): Prisma.AuthPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userRole(): Prisma.UserRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get platformFunction(): Prisma.PlatformFunctionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roleConflict(): Prisma.RoleConflictDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get workflowType(): Prisma.WorkflowTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get approvalChainVersion(): Prisma.ApprovalChainVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get approvalRule(): Prisma.ApprovalRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get approvalRuleStep(): Prisma.ApprovalRuleStepDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get workflowInstance(): Prisma.WorkflowInstanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get workflowStepApproval(): Prisma.WorkflowStepApprovalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get delegationOfAuthority(): Prisma.DelegationOfAuthorityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productParameters(): Prisma.ProductParametersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investor(): Prisma.InvestorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorMandate(): Prisma.InvestorMandateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorMandateAmendmentRequest(): Prisma.InvestorMandateAmendmentRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorKycDocument(): Prisma.InvestorKycDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningChecklistItem(): Prisma.ScreeningChecklistItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorScreeningRecord(): Prisma.InvestorScreeningRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorBankAccount(): Prisma.InvestorBankAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorBankAccountChangeRequest(): Prisma.InvestorBankAccountChangeRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorBankAccountChangeConfig(): Prisma.InvestorBankAccountChangeConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorContactAmendmentRequest(): Prisma.InvestorContactAmendmentRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorExitRequest(): Prisma.InvestorExitRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorDormancyConfig(): Prisma.InvestorDormancyConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorSanctionsRescreeningConfig(): Prisma.InvestorSanctionsRescreeningConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bankStatementLine(): Prisma.BankStatementLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterparty(): Prisma.CounterpartyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterpartyWriteOffRequest(): Prisma.CounterpartyWriteOffRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterpartyOnboardingCase(): Prisma.CounterpartyOnboardingCaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productAccount(): Prisma.ProductAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscriptionRequest(): Prisma.SubscriptionRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get migrationBatch(): Prisma.MigrationBatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get migrationStagingRow(): Prisma.MigrationStagingRowDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get replayBatch(): Prisma.ReplayBatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get replaySourceRow(): Prisma.ReplaySourceRowDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategicPillar(): Prisma.StrategicPillarDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategicObjective(): Prisma.StrategicObjectiveDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategyStatementTypeConfig(): Prisma.StrategyStatementTypeConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get letterheadTemplate(): Prisma.LetterheadTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get documentTemplate(): Prisma.DocumentTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get certificate(): Prisma.CertificateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get letterInstance(): Prisma.LetterInstanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategyStatement(): Prisma.StrategyStatementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategyPublication(): Prisma.StrategyPublicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get strategyAcknowledgment(): Prisma.StrategyAcknowledgmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pillarObjectiveMap(): Prisma.PillarObjectiveMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orgUnit(): Prisma.OrgUnitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get enterpriseKra(): Prisma.EnterpriseKraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kraObjectiveMap(): Prisma.KraObjectiveMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kpiDefinition(): Prisma.KpiDefinitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kpiWeightMatrix(): Prisma.KpiWeightMatrixDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cadreTierMap(): Prisma.CadreTierMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get position(): Prisma.PositionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employee(): Prisma.EmployeeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get departmentHeadDesignation(): Prisma.DepartmentHeadDesignationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeOnboardingRequest(): Prisma.EmployeeOnboardingRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeOffboardingRequest(): Prisma.EmployeeOffboardingRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeIncentivePctChangeRequest(): Prisma.EmployeeIncentivePctChangeRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeePersonalRecord(): Prisma.EmployeePersonalRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeePersonalRecordChangeRequest(): Prisma.EmployeePersonalRecordChangeRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get task(): Prisma.TaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taskSubmission(): Prisma.TaskSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveType(): Prisma.LeaveTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveEntitlement(): Prisma.LeaveEntitlementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveApplication(): Prisma.LeaveApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceProvider(): Prisma.AttendanceProviderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceEvent(): Prisma.AttendanceEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceLockUserMapping(): Prisma.AttendanceLockUserMappingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceClockInPolicy(): Prisma.AttendanceClockInPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceExceptionRequest(): Prisma.AttendanceExceptionRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceLatenessGatePolicy(): Prisma.AttendanceLatenessGatePolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardDirective(): Prisma.BoardDirectiveDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardCalendarEvent(): Prisma.BoardCalendarEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardCalendarReminderConfig(): Prisma.BoardCalendarReminderConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardCalendarSubmission(): Prisma.BoardCalendarSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transmittedDocument(): Prisma.TransmittedDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transmittedDocumentRecipient(): Prisma.TransmittedDocumentRecipientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardMinutes(): Prisma.BoardMinutesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boardMinutesTransmission(): Prisma.BoardMinutesTransmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taskEscalationConfig(): Prisma.TaskEscalationConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get calendarEntry(): Prisma.CalendarEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get calendarMeetingAttendee(): Prisma.CalendarMeetingAttendeeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get calendarFeedToken(): Prisma.CalendarFeedTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get calendarGatewayProvider(): Prisma.CalendarGatewayProviderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get externalCalendarConnection(): Prisma.ExternalCalendarConnectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get calendarReminderConfig(): Prisma.CalendarReminderConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taskDefaultGatePolicy(): Prisma.TaskDefaultGatePolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emolumentStructure(): Prisma.EmolumentStructureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ledgerEntity(): Prisma.LedgerEntityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get chartOfAccount(): Prisma.ChartOfAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journalEntryLine(): Prisma.JournalEntryLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get accountingPeriod(): Prisma.AccountingPeriodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get eventJournalConfig(): Prisma.EventJournalConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get txn(): Prisma.TxnDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cashbookEntry(): Prisma.CashbookEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get documentRegisterEntry(): Prisma.DocumentRegisterEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get requiredDocumentConfig(): Prisma.RequiredDocumentConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get accountingFrameworkMap(): Prisma.AccountingFrameworkMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get statementTemplate(): Prisma.StatementTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get statementLine(): Prisma.StatementLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get statementLineMapping(): Prisma.StatementLineMappingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reportRun(): Prisma.ReportRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulatorTemplate(): Prisma.RegulatorTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulatorTemplateLine(): Prisma.RegulatorTemplateLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get riskAppetiteMatrixVersion(): Prisma.RiskAppetiteMatrixVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get riskAppetiteCategory(): Prisma.RiskAppetiteCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get riskRegisterEntry(): Prisma.RiskRegisterEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portfolioPosition(): Prisma.PortfolioPositionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get feeAccrual(): Prisma.FeeAccrualDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get navRecord(): Prisma.NavRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portfolioMarketValueEntry(): Prisma.PortfolioMarketValueEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get halalFundLaunchConfig(): Prisma.HalalFundLaunchConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get poolIncomeRecord(): Prisma.PoolIncomeRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get distribution(): Prisma.DistributionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get distributionLineItem(): Prisma.DistributionLineItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get hibahRecord(): Prisma.HibahRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budgetVersion(): Prisma.BudgetVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budgetLine(): Prisma.BudgetLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budgetLineMonthlyAmount(): Prisma.BudgetLineMonthlyAmountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budgetTarget(): Prisma.BudgetTargetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encumbrance(): Prisma.EncumbranceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vendor(): Prisma.VendorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purchaseOrderLine(): Prisma.PurchaseOrderLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get goodsReceipt(): Prisma.GoodsReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vendorInvoice(): Prisma.VendorInvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentBatch(): Prisma.PaymentBatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentBatchLine(): Prisma.PaymentBatchLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetRegisterEntry(): Prisma.AssetRegisterEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetDepreciationRun(): Prisma.AssetDepreciationRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get procurementMatchToleranceConfig(): Prisma.ProcurementMatchToleranceConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pettyCashFloat(): Prisma.PettyCashFloatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pettyCashVoucher(): Prisma.PettyCashVoucherDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pettyCashReplenishmentClaim(): Prisma.PettyCashReplenishmentClaimDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pettyCashSpotCheck(): Prisma.PettyCashSpotCheckDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budgetVarianceRagThreshold(): Prisma.BudgetVarianceRagThresholdDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ndMandateAccount(): Prisma.NdMandateAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ndMandateProvisionalAccrual(): Prisma.NdMandateProvisionalAccrualDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ssbMember(): Prisma.SsbMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ssbResolution(): Prisma.SsbResolutionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purificationRecord(): Prisma.PurificationRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get complianceCheck(): Prisma.ComplianceCheckDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kriDefinition(): Prisma.KriDefinitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kriReading(): Prisma.KriReadingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kriEscalation(): Prisma.KriEscalationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kriEngineConfig(): Prisma.KriEngineConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulatoryCapitalRequirement(): Prisma.RegulatoryCapitalRequirementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stressScenarioConfig(): Prisma.StressScenarioConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stressTestRun(): Prisma.StressTestRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dashboardManualStatus(): Prisma.DashboardManualStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get metricDefinition(): Prisma.MetricDefinitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get savedDashboard(): Prisma.SavedDashboardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dashboardTile(): Prisma.DashboardTileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ledgerReconciliationConfig(): Prisma.LedgerReconciliationConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get enterpriseRiskProfileEntry(): Prisma.EnterpriseRiskProfileEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dashboardActionItem(): Prisma.DashboardActionItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get templateCellMap(): Prisma.TemplateCellMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get templateFieldMap(): Prisma.TemplateFieldMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulatoryFilingCalendar(): Prisma.RegulatoryFilingCalendarDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulatoryFilingRun(): Prisma.RegulatoryFilingRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetClassRegistry(): Prisma.AssetClassRegistryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmClientTierConfig(): Prisma.WmClientTierConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmFxConfig(): Prisma.WmFxConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmClientProfile(): Prisma.WmClientProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmTierMigrationLog(): Prisma.WmTierMigrationLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmClientAsset(): Prisma.WmClientAssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmClientAssetValuation(): Prisma.WmClientAssetValuationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmHoldingActionRequest(): Prisma.WmHoldingActionRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmAllocationPolicy(): Prisma.WmAllocationPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmRiskProfile(): Prisma.WmRiskProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmGrowthPlan(): Prisma.WmGrowthPlanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmAdvisoryRecord(): Prisma.WmAdvisoryRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmStressScenarioConfig(): Prisma.WmStressScenarioConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wmRiskAssessmentRun(): Prisma.WmRiskAssessmentRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zakatNisabConfig(): Prisma.ZakatNisabConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zakatClientSubscription(): Prisma.ZakatClientSubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zakatSubscriptionRequest(): Prisma.ZakatSubscriptionRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zakatAssessmentRun(): Prisma.ZakatAssessmentRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zakatDeclaredItem(): Prisma.ZakatDeclaredItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portalClientUser(): Prisma.PortalClientUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portalClientSession(): Prisma.PortalClientSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roleScorecardOverride(): Prisma.RoleScorecardOverrideDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get activityReport(): Prisma.ActivityReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get appraisalCycle(): Prisma.AppraisalCycleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeScoreSubmission(): Prisma.EmployeeScoreSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeKpiScore(): Prisma.EmployeeKpiScoreDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get incentiveBandConfig(): Prisma.IncentiveBandConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pmsGateSeverityConfig(): Prisma.PmsGateSeverityConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get behaviouralGateCheck(): Prisma.BehaviouralGateCheckDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeIncentiveResult(): Prisma.EmployeeIncentiveResultDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxRuleConfig(): Prisma.TaxRuleConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payrollRun(): Prisma.PayrollRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payrollRunLine(): Prisma.PayrollRunLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get welfareScheme(): Prisma.WelfareSchemeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rewardType(): Prisma.RewardTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get talentRecommendation(): Prisma.TalentRecommendationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lead(): Prisma.LeadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get clientCommunication(): Prisma.ClientCommunicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorOnboardingConfig(): Prisma.InvestorOnboardingConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorOnboardingCase(): Prisma.InvestorOnboardingCaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentInflowLog(): Prisma.PaymentInflowLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get publicIntakeSubmission(): Prisma.PublicIntakeSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get privacyNoticeConfig(): Prisma.PrivacyNoticeConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get privacyNoticeAcknowledgment(): Prisma.PrivacyNoticeAcknowledgmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get marketingResource(): Prisma.MarketingResourceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get marketingSubscriber(): Prisma.MarketingSubscriberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get marketingSend(): Prisma.MarketingSendDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portalCounterpartyUser(): Prisma.PortalCounterpartyUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portalCounterpartySession(): Prisma.PortalCounterpartySessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterpartyRestructureRequest(): Prisma.CounterpartyRestructureRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterpartyFacilityApplication(): Prisma.CounterpartyFacilityApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investmentMemo(): Prisma.InvestmentMemoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investmentMemoThresholdConfig(): Prisma.InvestmentMemoThresholdConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get counterpartyRepaymentObligation(): Prisma.CounterpartyRepaymentObligationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentReminderLadderConfig(): Prisma.PaymentReminderLadderConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentReminderNoticeLog(): Prisma.PaymentReminderNoticeLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentReminderDispatchQueue(): Prisma.PaymentReminderDispatchQueueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get complaint(): Prisma.ComplaintDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dsrResponseConfig(): Prisma.DsrResponseConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get retentionScheduleEntry(): Prisma.RetentionScheduleEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataBreachRegisterEntry(): Prisma.DataBreachRegisterEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get execOversightSession(): Prisma.ExecOversightSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get execOversightPolicy(): Prisma.ExecOversightPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get complaintSlaConfig(): Prisma.ComplaintSlaConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get scheduledJobRun(): Prisma.ScheduledJobRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get backupRun(): Prisma.BackupRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get scheduledJobPauseState(): Prisma.ScheduledJobPauseStateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get scheduledJobRegistration(): Prisma.ScheduledJobRegistrationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiCapabilityFlag(): Prisma.AiCapabilityFlagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiKillSwitch(): Prisma.AiKillSwitchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiCapabilityContextRule(): Prisma.AiCapabilityContextRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiTieredModelPolicy(): Prisma.AiTieredModelPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiProviderCredential(): Prisma.AiProviderCredentialDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiTokenBudget(): Prisma.AiTokenBudgetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataPointCatalog(): Prisma.DataPointCatalogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiInteractionLog(): Prisma.AiInteractionLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiResponseCache(): Prisma.AiResponseCacheDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stakeholderReportRun(): Prisma.StakeholderReportRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stakeholderDistributionLog(): Prisma.StakeholderDistributionLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bureauProvider(): Prisma.BureauProviderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bureauPolicyConfig(): Prisma.BureauPolicyConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bureauPullLog(): Prisma.BureauPullLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentGatewayProvider(): Prisma.PaymentGatewayProviderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productCustodianAccount(): Prisma.ProductCustodianAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentGatewayInflow(): Prisma.PaymentGatewayInflowDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payoutCompilationBatch(): Prisma.PayoutCompilationBatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payoutCompilationLine(): Prisma.PayoutCompilationLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxRateVersion(): Prisma.TaxRateVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get investorTaxExemption(): Prisma.InvestorTaxExemptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get feeInvoice(): Prisma.FeeInvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stampDutyAssessment(): Prisma.StampDutyAssessmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxGlMapping(): Prisma.TaxGlMappingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxRemittanceDueDateConfig(): Prisma.TaxRemittanceDueDateConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxRemittanceBatch(): Prisma.TaxRemittanceBatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get activationState(): Prisma.ActivationStateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get activationStepSkip(): Prisma.ActivationStepSkipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningListSource(): Prisma.ScreeningListSourceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningListEntry(): Prisma.ScreeningListEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningListDownloadLog(): Prisma.ScreeningListDownloadLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningGatewayConfig(): Prisma.ScreeningGatewayConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get commercialScreeningProvider(): Prisma.CommercialScreeningProviderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningRun(): Prisma.ScreeningRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get screeningHit(): Prisma.ScreeningHitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
