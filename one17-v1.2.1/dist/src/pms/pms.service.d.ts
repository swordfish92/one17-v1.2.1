import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { AttendanceService } from '../attendance/attendance.service';
import { ProposeEmolumentComponentInput, ProposeKpiDefinitionInput, ApproveKpiDefinitionInput, ProposeWeightMatrixVersionInput, ApproveWeightMatrixVersionInput } from './pms.types';
export declare class PmsService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly ledger;
    private readonly attendance;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, ledger: LedgerService, attendance: AttendanceService);
    listEmployees(): Promise<({
        position: {
            orgUnit: {
                code: string;
                name: string;
                secondaryReportingLine: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            orgUnitCode: string;
            cadre: string;
            title: string;
            notch: number;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeStatus;
        createdAt: Date;
        migrationSourceRef: string | null;
        appUserId: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        performanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    listCycles(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }[]>;
    getCycleDetail(cycleId: string): Promise<{
        cycle: {
            id: string;
            status: import("../../generated/prisma/enums").PmsCycleStatus;
            createdAt: Date;
            orgUnitCode: string | null;
            periodStart: Date;
            periodEnd: Date;
            cycleType: import("../../generated/prisma/enums").PmsCycleType;
        };
        submissions: ({
            employee: {
                id: string;
                status: import("../../generated/prisma/enums").EmployeeStatus;
                createdAt: Date;
                migrationSourceRef: string | null;
                appUserId: string | null;
                orgUnitCode: string;
                surname: string;
                firstName: string;
                middleName: string | null;
                positionId: string;
                reportsToId: string | null;
                hireDate: Date;
                performanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
            };
            kpiScores: ({
                kpiDefinition: {
                    id: string;
                    status: import("../../generated/prisma/enums").GovernedItemStatus;
                    createdAt: Date;
                    proposedByUserId: string | null;
                    approvedByUserId: string | null;
                    workflowInstanceId: string | null;
                    kraCode: string;
                    tier: import("../../generated/prisma/enums").PmsTier;
                    kpiText: string;
                    kpiClass: import("../../generated/prisma/enums").KpiClass;
                    objectiveText: string | null;
                    exampleActivity: string | null;
                    measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
                    frequency: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                kpiDefinitionId: string;
                employeeScoreSubmissionId: string;
                selfScorePct: import("@prisma/client-runtime-utils").Decimal;
                validatedScorePct: import("@prisma/client-runtime-utils").Decimal | null;
                evidenceRef: string | null;
            })[];
        } & {
            id: string;
            status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
            workflowInstanceId: string | null;
            employeeId: string;
            submittedAt: Date;
            appraisalCycleId: string;
        })[];
        gateChecks: {
            id: string;
            createdAt: Date;
            employeeId: string;
            appraisalCycleId: string;
            evidenceRef: string | null;
            outcome: import("../../generated/prisma/enums").GateOutcome;
            cappedPct: import("@prisma/client-runtime-utils").Decimal | null;
            attendanceOk: boolean;
            ethicalConductOk: boolean;
            trendsViolation: boolean;
            disciplinaryNote: string | null;
            assessedByUserId: string;
        }[];
        incentiveResults: {
            totalEmolumentKobo: string;
            incentivePoolKobo: string;
            preGateIncentiveKobo: string;
            finalIncentiveKobo: string;
            id: string;
            employeeId: string;
            computedAt: Date;
            appraisalCycleId: string;
            overallScorePct: import("@prisma/client-runtime-utils").Decimal;
            bandPayoutPct: import("@prisma/client-runtime-utils").Decimal;
            gateOutcome: import("../../generated/prisma/enums").GateOutcome;
            classAllocationKobo: import("@prisma/client/runtime/client").JsonValue;
        }[];
    }>;
    listPayrollRuns(): Promise<{
        workflowStatus: import("../../generated/prisma/enums").WorkflowStatus | null;
        lines: {
            employee: {
                surname: string;
                firstName: string;
            };
            grossKobo: string;
            payeKobo: string;
            pensionKobo: string;
            nhfKobo: string;
            incentiveKobo: string;
            netPayKobo: string;
            id: string;
            employeeId: string;
            payrollRunId: string;
        }[];
        id: string;
        status: import("../../generated/prisma/enums").PayrollRunStatus;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        ledgerEntityCode: string;
        generatedByUserId: string;
        journalEntryId: string | null;
        generatedAt: Date;
        periodMonth: number;
        periodYear: number;
        taxRuleConfigId: string;
    }[]>;
    seedReferenceData(): Promise<{
        bands: number;
        gateSeverities: number;
        taxRuleVersion: number;
    }>;
    validateTaxRuleConfig(version: number, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        effectiveFrom: Date;
        consolidatedReliefFlatKobo: bigint;
        consolidatedReliefPctOfGross: import("@prisma/client-runtime-utils").Decimal;
        bands: import("@prisma/client/runtime/client").JsonValue;
        pensionEmployeePct: import("@prisma/client-runtime-utils").Decimal;
        nhfPct: import("@prisma/client-runtime-utils").Decimal;
        validatedByUserId: string | null;
    }>;
    listEmolumentStructure(): Promise<{
        annualAmountKobo: string;
        workflowStatus: import("../../generated/prisma/enums").WorkflowStatus | null;
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        createdByUserId: string | null;
        migrationSourceRef: string | null;
        cadre: string;
        notch: number;
        component: string;
        componentType: import("../../generated/prisma/enums").EmolumentComponentType;
        taxable: boolean;
    }[]>;
    proposeEmolumentComponent(input: ProposeEmolumentComponentInput): Promise<{
        component: {
            id: string;
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            version: number;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            effectiveFrom: Date;
            createdByUserId: string | null;
            migrationSourceRef: string | null;
            cadre: string;
            notch: number;
            component: string;
            annualAmountKobo: bigint;
            componentType: import("../../generated/prisma/enums").EmolumentComponentType;
            taxable: boolean;
        };
        workflowInstance: {
            id: string;
            entityType: string;
            entityId: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            createdAt: Date;
            workflowTypeCode: string;
            scenario: string | null;
            approvalRuleId: string;
            amountKobo: bigint | null;
            initiatedByUserId: string;
        };
    }>;
    approveEmolumentComponent(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        createdByUserId: string | null;
        migrationSourceRef: string | null;
        cadre: string;
        notch: number;
        component: string;
        annualAmountKobo: bigint;
        componentType: import("../../generated/prisma/enums").EmolumentComponentType;
        taxable: boolean;
    } | null>;
    listEnterpriseKras(): Promise<({
        orgUnit: {
            code: string;
            name: string;
            secondaryReportingLine: string | null;
        };
    } & {
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        orgUnitCode: string;
    })[]>;
    listKpiDefinitions(): Promise<({
        kra: {
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            code: string;
            name: string;
            orgUnitCode: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        kraCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        objectiveText: string | null;
        exampleActivity: string | null;
        measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
        frequency: string | null;
    })[]>;
    proposeKpiDefinition(input: ProposeKpiDefinitionInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        kraCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        objectiveText: string | null;
        exampleActivity: string | null;
        measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
        frequency: string | null;
    }>;
    approveKpiDefinition(input: ApproveKpiDefinitionInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        kraCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        objectiveText: string | null;
        exampleActivity: string | null;
        measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
        frequency: string | null;
    } | null>;
    listPendingKpiDefinitions(): Promise<({
        kra: {
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            code: string;
            name: string;
            orgUnitCode: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        kraCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        objectiveText: string | null;
        exampleActivity: string | null;
        measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
        frequency: string | null;
    })[]>;
    listWeightMatrix(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdByUserId: string | null;
        orgUnitCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        weightPct: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    proposeWeightMatrixVersion(input: ProposeWeightMatrixVersionInput): Promise<{
        rows: {
            id: string;
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            version: number;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            createdByUserId: string | null;
            orgUnitCode: string;
            tier: import("../../generated/prisma/enums").PmsTier;
            kpiClass: import("../../generated/prisma/enums").KpiClass;
            weightPct: import("@prisma/client-runtime-utils").Decimal;
        }[];
        workflowInstance: any;
    }>;
    approveWeightMatrixVersion(input: ApproveWeightMatrixVersionInput): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload | null>;
    listPendingWeightMatrixProposals(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdByUserId: string | null;
        orgUnitCode: string;
        tier: import("../../generated/prisma/enums").PmsTier;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        weightPct: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    getEmployeeScorecard(employeeId: string): Promise<{
        kpiDefinitionId: string;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        weightPct: number;
        overridden: boolean;
    }[]>;
    getMyStatus(appUserId: string, cycleId: string): Promise<{
        employeeId: string;
        employeeName: string;
        cycle: {
            id: string;
            status: import("../../generated/prisma/enums").PmsCycleStatus;
            createdAt: Date;
            orgUnitCode: string | null;
            periodStart: Date;
            periodEnd: Date;
            cycleType: import("../../generated/prisma/enums").PmsCycleType;
        };
        scorecard: {
            kpiDefinitionId: string;
            kpiText: string;
            kpiClass: import("../../generated/prisma/enums").KpiClass;
            weightPct: number;
            overridden: boolean;
        }[];
        existingSubmission: {
            id: string;
            status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
            workflowInstanceId: string | null;
            employeeId: string;
            submittedAt: Date;
            appraisalCycleId: string;
        } | null;
    }>;
    getMyPerformanceSummary(appUserId: string): Promise<{
        employeeId: string;
        submissions: ({
            appraisalCycle: {
                id: string;
                status: import("../../generated/prisma/enums").PmsCycleStatus;
                createdAt: Date;
                orgUnitCode: string | null;
                periodStart: Date;
                periodEnd: Date;
                cycleType: import("../../generated/prisma/enums").PmsCycleType;
            };
            kpiScores: ({
                kpiDefinition: {
                    id: string;
                    status: import("../../generated/prisma/enums").GovernedItemStatus;
                    createdAt: Date;
                    proposedByUserId: string | null;
                    approvedByUserId: string | null;
                    workflowInstanceId: string | null;
                    kraCode: string;
                    tier: import("../../generated/prisma/enums").PmsTier;
                    kpiText: string;
                    kpiClass: import("../../generated/prisma/enums").KpiClass;
                    objectiveText: string | null;
                    exampleActivity: string | null;
                    measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
                    frequency: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                kpiDefinitionId: string;
                employeeScoreSubmissionId: string;
                selfScorePct: import("@prisma/client-runtime-utils").Decimal;
                validatedScorePct: import("@prisma/client-runtime-utils").Decimal | null;
                evidenceRef: string | null;
            })[];
        } & {
            id: string;
            status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
            workflowInstanceId: string | null;
            employeeId: string;
            submittedAt: Date;
            appraisalCycleId: string;
        })[];
        incentiveResults: {
            totalEmolumentKobo: string;
            incentivePoolKobo: string;
            preGateIncentiveKobo: string;
            finalIncentiveKobo: string;
            id: string;
            employeeId: string;
            computedAt: Date;
            appraisalCycleId: string;
            overallScorePct: import("@prisma/client-runtime-utils").Decimal;
            bandPayoutPct: import("@prisma/client-runtime-utils").Decimal;
            gateOutcome: import("../../generated/prisma/enums").GateOutcome;
            classAllocationKobo: import("@prisma/client/runtime/client").JsonValue;
        }[];
    }>;
    getRoleScorecard(positionId: string, employeeId?: string): Promise<{
        kpiDefinitionId: string;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        weightPct: number;
        overridden: boolean;
    }[]>;
    proposeScorecardOverride(input: {
        employeeId: string;
        kpiDefinitionId: string;
        overrideWeightPct: number;
        reason: string;
        createdByUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        reason: string;
        workflowInstanceId: string | null;
        createdByUserId: string;
        employeeId: string;
        kpiDefinitionId: string;
        overrideWeightPct: import("@prisma/client-runtime-utils").Decimal;
    }>;
    approveScorecardOverride(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    logActivity(input: {
        employeeId: string;
        kpiDefinitionId: string;
        activityText: string;
        workflowInstanceRef?: string;
        taskRef?: string;
    }): Promise<{
        id: string;
        employeeId: string;
        kpiDefinitionId: string;
        activityText: string;
        workflowInstanceRef: string | null;
        taskRef: string | null;
        loggedAt: Date;
    }>;
    startCycle(input: {
        cycleType: 'INCENTIVE_CYCLE' | 'ANNUAL_APPRAISAL';
        orgUnitCode?: string;
        periodStart: Date;
        periodEnd: Date;
        actorUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }>;
    openForScoring(cycleId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }>;
    submitSelfScore(input: {
        cycleId: string;
        employeeId: string;
        scores: {
            kpiDefinitionId: string;
            selfScorePct: number;
        }[];
        actorUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
        workflowInstanceId: string | null;
        employeeId: string;
        submittedAt: Date;
        appraisalCycleId: string;
    }>;
    adjustValidatedScore(submissionId: string, kpiDefinitionId: string, validatedScorePct: number, actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        kpiDefinitionId: string;
        employeeScoreSubmissionId: string;
        selfScorePct: import("@prisma/client-runtime-utils").Decimal;
        validatedScorePct: import("@prisma/client-runtime-utils").Decimal | null;
        evidenceRef: string | null;
    }>;
    validateScoreStep(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    recordBehaviouralGate(input: {
        cycleId: string;
        employeeId: string;
        attendanceOk: boolean;
        ethicalConductOk: boolean;
        trendsViolation?: boolean;
        disciplinaryNote?: string;
        evidenceRef?: string;
        severity: string;
        assessedByUserId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        employeeId: string;
        appraisalCycleId: string;
        evidenceRef: string | null;
        outcome: import("../../generated/prisma/enums").GateOutcome;
        cappedPct: import("@prisma/client-runtime-utils").Decimal | null;
        attendanceOk: boolean;
        ethicalConductOk: boolean;
        trendsViolation: boolean;
        disciplinaryNote: string | null;
        assessedByUserId: string;
    }>;
    private static readonly GATE_OUTCOME_RANK;
    applyTaskDefaultGate(input: {
        cycleId: string;
        employeeId: string;
        defaultedTaskCount: number;
        systemUserId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        employeeId: string;
        appraisalCycleId: string;
        evidenceRef: string | null;
        outcome: import("../../generated/prisma/enums").GateOutcome;
        cappedPct: import("@prisma/client-runtime-utils").Decimal | null;
        attendanceOk: boolean;
        ethicalConductOk: boolean;
        trendsViolation: boolean;
        disciplinaryNote: string | null;
        assessedByUserId: string;
    } | null>;
    runTaskDefaultGateFeed(employeeDefaultCounts: {
        employeeId: string;
        count: number;
    }[], systemUserId: string): Promise<{
        employeesChecked: number;
        gatesApplied: number;
    }>;
    applyAttendanceLatenessGate(input: {
        cycleId: string;
        employeeId: string;
        lateCount: number;
        systemUserId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        employeeId: string;
        appraisalCycleId: string;
        evidenceRef: string | null;
        outcome: import("../../generated/prisma/enums").GateOutcome;
        cappedPct: import("@prisma/client-runtime-utils").Decimal | null;
        attendanceOk: boolean;
        ethicalConductOk: boolean;
        trendsViolation: boolean;
        disciplinaryNote: string | null;
        assessedByUserId: string;
    } | null>;
    runAttendanceLatenessGateFeed(systemUserId: string): Promise<{
        cyclesChecked: number;
        gatesApplied: number;
    }>;
    submitCycleForApproval(cycleId: string, actorUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    approveCycle(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    computeIncentive(cycleId: string, actorUserId: string): Promise<{
        id: string;
        employeeId: string;
        computedAt: Date;
        appraisalCycleId: string;
        totalEmolumentKobo: bigint;
        incentivePoolKobo: bigint;
        overallScorePct: import("@prisma/client-runtime-utils").Decimal;
        bandPayoutPct: import("@prisma/client-runtime-utils").Decimal;
        gateOutcome: import("../../generated/prisma/enums").GateOutcome;
        preGateIncentiveKobo: bigint;
        finalIncentiveKobo: bigint;
        classAllocationKobo: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    computePaye(grossAnnualKobo: bigint, taxRuleVersion?: number): Promise<bigint>;
    runPayroll(input: {
        periodMonth: number;
        periodYear: number;
        ledgerEntityCode: string;
        drStaffCostAccountCode: string;
        drIncentiveExpenseAccountCode: string;
        crPayePayableAccountCode: string;
        crPensionPayableAccountCode: string;
        crNhfPayableAccountCode: string;
        crNetPayPayableAccountCode: string;
        actorUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayrollRunStatus;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        ledgerEntityCode: string;
        generatedByUserId: string;
        journalEntryId: string | null;
        generatedAt: Date;
        periodMonth: number;
        periodYear: number;
        taxRuleConfigId: string;
    }>;
    markPayrollRunPosted(payrollRunId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PayrollRunStatus;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        ledgerEntityCode: string;
        generatedByUserId: string;
        journalEntryId: string | null;
        generatedAt: Date;
        periodMonth: number;
        periodYear: number;
        taxRuleConfigId: string;
    }>;
    private assertCapability;
}
