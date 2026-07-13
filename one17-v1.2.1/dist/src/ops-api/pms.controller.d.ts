import type { AuthenticatedUser } from '../auth/auth.types';
import { PmsService } from '../pms/pms.service';
import { StartCycleDto, SubmitSelfScoreDto, AdjustValidatedScoreDto, RecordBehaviouralGateDto, ProposeScorecardOverrideDto, LogActivityDto, RunPayrollDto, ProposeEmolumentComponentDto, ProposeKpiDefinitionDto, ProposeWeightMatrixVersionDto } from './ops-api.types';
export declare class PmsController {
    private readonly pms;
    constructor(pms: PmsService);
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
    getScorecard(employeeId: string): Promise<{
        kpiDefinitionId: string;
        kpiText: string;
        kpiClass: import("../../generated/prisma/enums").KpiClass;
        weightPct: number;
        overridden: boolean;
    }[]>;
    getMyStatus(id: string, user: AuthenticatedUser): Promise<{
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
    proposeOverride(dto: ProposeScorecardOverrideDto, user: AuthenticatedUser): Promise<{
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
    logActivity(dto: LogActivityDto): Promise<{
        id: string;
        employeeId: string;
        kpiDefinitionId: string;
        activityText: string;
        workflowInstanceRef: string | null;
        taskRef: string | null;
        loggedAt: Date;
    }>;
    listCycles(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }[]>;
    getCycle(id: string): Promise<{
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
    startCycle(dto: StartCycleDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }>;
    openForScoring(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PmsCycleStatus;
        createdAt: Date;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        cycleType: import("../../generated/prisma/enums").PmsCycleType;
    }>;
    submitSelfScore(id: string, dto: SubmitSelfScoreDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
        workflowInstanceId: string | null;
        employeeId: string;
        submittedAt: Date;
        appraisalCycleId: string;
    }>;
    adjustScore(id: string, dto: AdjustValidatedScoreDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        kpiDefinitionId: string;
        employeeScoreSubmissionId: string;
        selfScorePct: import("@prisma/client-runtime-utils").Decimal;
        validatedScorePct: import("@prisma/client-runtime-utils").Decimal | null;
        evidenceRef: string | null;
    }>;
    recordGate(id: string, dto: RecordBehaviouralGateDto, user: AuthenticatedUser): Promise<{
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
    submitForApproval(id: string, user: AuthenticatedUser): Promise<{
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
    computeIncentive(id: string, user: AuthenticatedUser): Promise<{
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
    runPayroll(dto: RunPayrollDto, user: AuthenticatedUser): Promise<{
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
    proposeEmolumentComponent(dto: ProposeEmolumentComponentDto, user: AuthenticatedUser): Promise<{
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
    proposeKpiDefinition(dto: ProposeKpiDefinitionDto, user: AuthenticatedUser): Promise<{
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
    approveKpiDefinition(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
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
    proposeWeightMatrixVersion(dto: ProposeWeightMatrixVersionDto, user: AuthenticatedUser): Promise<{
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
    approveWeightMatrixVersion(workflowInstanceId: string, user: AuthenticatedUser): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload | null>;
}
