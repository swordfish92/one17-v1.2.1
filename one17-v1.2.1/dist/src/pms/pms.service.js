"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PmsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ledger_service_1 = require("../ledger/ledger.service");
const attendance_service_1 = require("../attendance/attendance.service");
const pms_types_1 = require("./pms.types");
const employee_name_util_1 = require("../common/employee-name.util");
let PmsService = class PmsService {
    static { PmsService_1 = this; }
    prisma;
    audit;
    delegation;
    workflow;
    ledger;
    attendance;
    constructor(prisma, audit, delegation, workflow, ledger, attendance) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.ledger = ledger;
        this.attendance = attendance;
    }
    async listEmployees() {
        return this.prisma.employee.findMany({ include: { position: { include: { orgUnit: true } } }, orderBy: [{ surname: 'asc' }, { firstName: 'asc' }] });
    }
    async listCycles() {
        return this.prisma.appraisalCycle.findMany({ orderBy: { periodStart: 'desc' } });
    }
    async getCycleDetail(cycleId) {
        const [cycle, submissions, gateChecks, incentiveResults] = await Promise.all([
            this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } }),
            this.prisma.employeeScoreSubmission.findMany({ where: { appraisalCycleId: cycleId }, include: { employee: true, kpiScores: { include: { kpiDefinition: true } } } }),
            this.prisma.behaviouralGateCheck.findMany({ where: { appraisalCycleId: cycleId } }),
            this.prisma.employeeIncentiveResult.findMany({ where: { appraisalCycleId: cycleId } }),
        ]);
        return {
            cycle,
            submissions,
            gateChecks,
            incentiveResults: incentiveResults.map((r) => ({
                ...r,
                totalEmolumentKobo: r.totalEmolumentKobo.toString(),
                incentivePoolKobo: r.incentivePoolKobo.toString(),
                preGateIncentiveKobo: r.preGateIncentiveKobo.toString(),
                finalIncentiveKobo: r.finalIncentiveKobo.toString(),
            })),
        };
    }
    async listPayrollRuns() {
        const runs = await this.prisma.payrollRun.findMany({
            include: { lines: { include: { employee: true } } },
            orderBy: { generatedAt: 'desc' },
        });
        const instanceIds = runs.map((r) => r.workflowInstanceId).filter((id) => !!id);
        const instances = instanceIds.length
            ? await this.prisma.workflowInstance.findMany({ where: { id: { in: instanceIds } } })
            : [];
        const instanceById = new Map(instances.map((i) => [i.id, i]));
        return runs.map((r) => ({
            ...r,
            workflowStatus: r.workflowInstanceId ? (instanceById.get(r.workflowInstanceId)?.status ?? null) : null,
            lines: r.lines.map((l) => ({
                ...l,
                employee: { surname: l.employee.surname, firstName: l.employee.firstName },
                grossKobo: l.grossKobo.toString(), payeKobo: l.payeKobo.toString(), pensionKobo: l.pensionKobo.toString(),
                nhfKobo: l.nhfKobo.toString(), incentiveKobo: l.incentiveKobo.toString(), netPayKobo: l.netPayKobo.toString(),
            })),
        }));
    }
    async seedReferenceData() {
        for (const b of pms_types_1.INCENTIVE_BANDS) {
            const existing = await this.prisma.incentiveBandConfig.findFirst({ where: { minScorePct: b.minScorePct, isActive: true } });
            if (!existing)
                await this.prisma.incentiveBandConfig.create({ data: b });
        }
        for (const g of pms_types_1.GATE_SEVERITY_CONFIG) {
            await this.prisma.pmsGateSeverityConfig.upsert({
                where: { severity: g.severity },
                create: { severity: g.severity, outcome: g.outcome, cappedPct: g.cappedPct },
                update: { outcome: g.outcome, cappedPct: g.cappedPct },
            });
        }
        const existingTax = await this.prisma.taxRuleConfig.findUnique({ where: { version: pms_types_1.TAX_RULE_CONFIG_V1.version } });
        if (!existingTax) {
            await this.prisma.taxRuleConfig.create({
                data: {
                    version: pms_types_1.TAX_RULE_CONFIG_V1.version,
                    consolidatedReliefFlatKobo: pms_types_1.TAX_RULE_CONFIG_V1.consolidatedReliefFlatKobo,
                    consolidatedReliefPctOfGross: pms_types_1.TAX_RULE_CONFIG_V1.consolidatedReliefPctOfGross,
                    bands: pms_types_1.TAX_RULE_CONFIG_V1.bands,
                    pensionEmployeePct: pms_types_1.TAX_RULE_CONFIG_V1.pensionEmployeePct,
                    nhfPct: pms_types_1.TAX_RULE_CONFIG_V1.nhfPct,
                    status: 'DRAFT',
                    effectiveFrom: new Date(),
                },
            });
        }
        return { bands: pms_types_1.INCENTIVE_BANDS.length, gateSeverities: pms_types_1.GATE_SEVERITY_CONFIG.length, taxRuleVersion: pms_types_1.TAX_RULE_CONFIG_V1.version };
    }
    async validateTaxRuleConfig(version, actorUserId) {
        await this.assertCapability(actorUserId, 'PMS_PAYROLL', 'APPROVE', 'validate (FINCON) a tax_rule_config version');
        return this.prisma.taxRuleConfig.update({ where: { version }, data: { status: 'ACTIVE', validatedByUserId: actorUserId } });
    }
    async listEmolumentStructure() {
        const rows = await this.prisma.emolumentStructure.findMany({
            orderBy: [{ cadre: 'asc' }, { notch: 'asc' }, { component: 'asc' }, { version: 'desc' }],
        });
        const instanceIds = rows.map((r) => r.workflowInstanceId).filter((id) => !!id);
        const instances = instanceIds.length
            ? await this.prisma.workflowInstance.findMany({ where: { id: { in: instanceIds } } })
            : [];
        const instanceById = new Map(instances.map((i) => [i.id, i]));
        return rows.map((r) => ({
            ...r,
            annualAmountKobo: r.annualAmountKobo.toString(),
            workflowStatus: r.workflowInstanceId ? (instanceById.get(r.workflowInstanceId)?.status ?? null) : null,
        }));
    }
    async proposeEmolumentComponent(input) {
        await this.assertCapability(input.proposedByUserId, 'EMOLUMENT_STRUCTURE_MANAGEMENT', 'INITIATE', 'propose an emolument structure component');
        const latest = await this.prisma.emolumentStructure.findFirst({
            where: { cadre: input.cadre, notch: input.notch, component: input.component },
            orderBy: { version: 'desc' },
        });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.emolumentStructure.create({
            data: {
                cadre: input.cadre, notch: input.notch, component: input.component, componentType: input.componentType,
                annualAmountKobo: input.annualAmountKobo, taxable: input.taxable, effectiveFrom: input.effectiveFrom,
                version, status: 'DRAFT', createdByUserId: input.proposedByUserId,
            },
        });
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'EMOLUMENT_STRUCTURE_APPROVAL',
            entityType: 'emolument_structure',
            entityId: created.id,
            initiatedByUserId: input.proposedByUserId,
            scenario: 'STANDARD',
        });
        await this.prisma.emolumentStructure.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
        await this.audit.record({
            actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'emolument_structure', entityId: created.id,
            after: { cadre: input.cadre, notch: input.notch, component: input.component, version, annualAmountKobo: input.annualAmountKobo.toString() },
        });
        return { component: created, workflowInstance: instance };
    }
    async approveEmolumentComponent(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const proposed = await this.prisma.emolumentStructure.findFirstOrThrow({ where: { workflowInstanceId } });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.emolumentStructure.updateMany({
                where: { cadre: proposed.cadre, notch: proposed.notch, component: proposed.component, status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.emolumentStructure.update({
                where: { id: proposed.id },
                data: { status: 'ACTIVE', approvedByUserId: approverUserId },
            }),
        ]);
        await this.audit.record({
            actorUserId: approverUserId, action: 'UPDATE', entityType: 'emolument_structure', entityId: proposed.id,
            after: { status: 'ACTIVE', cadre: proposed.cadre, notch: proposed.notch, component: proposed.component, version: proposed.version },
        });
        return activated;
    }
    async listEnterpriseKras() {
        return this.prisma.enterpriseKra.findMany({ include: { orgUnit: true }, orderBy: { code: 'asc' } });
    }
    async listKpiDefinitions() {
        return this.prisma.kpiDefinition.findMany({ include: { kra: true }, orderBy: [{ kraCode: 'asc' }, { tier: 'asc' }] });
    }
    async proposeKpiDefinition(input) {
        await this.assertCapability(input.proposedByUserId, 'KPI_DEFINITION_MANAGEMENT', 'INITIATE', 'propose a new KPI definition');
        const kra = await this.prisma.enterpriseKra.findUnique({ where: { code: input.kraCode } });
        if (!kra)
            throw new pms_types_1.PmsError(`KRA ${input.kraCode} does not exist.`);
        const existing = await this.prisma.kpiDefinition.findUnique({ where: { kraCode_tier: { kraCode: input.kraCode, tier: input.tier } } });
        if (existing) {
            throw new pms_types_1.PmsError(`A KPI definition already exists for KRA ${input.kraCode} / tier ${input.tier} (status ${existing.status}) — amending an established definition is not in this build's scope; park the change.`);
        }
        const created = await this.prisma.kpiDefinition.create({
            data: {
                kraCode: input.kraCode, tier: input.tier, kpiText: input.kpiText, kpiClass: input.kpiClass,
                objectiveText: input.objectiveText, exampleActivity: input.exampleActivity,
                measurementBasis: input.measurementBasis ?? 'MANUAL', frequency: input.frequency,
                status: 'DRAFT', proposedByUserId: input.proposedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'KPI_DEFINITION_APPROVAL',
                entityType: 'kpi_definition',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'kpi_definition', entityId: created.id,
                after: { workflowTypeCode: 'KPI_DEFINITION_APPROVAL', reason: err.message },
            });
            await this.prisma.kpiDefinition.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.kpiDefinition.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveKpiDefinition(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const def = await this.prisma.kpiDefinition.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const activated = await this.prisma.kpiDefinition.update({
            where: { id: def.id },
            data: { status: 'ACTIVE', approvedByUserId: input.approverUserId },
        });
        await this.audit.record({
            actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'kpi_definition', entityId: def.id,
            after: { status: 'ACTIVE', kraCode: def.kraCode, tier: def.tier, kpiClass: def.kpiClass },
        });
        return activated;
    }
    async listPendingKpiDefinitions() {
        return this.prisma.kpiDefinition.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, include: { kra: true }, orderBy: { createdAt: 'asc' } });
    }
    async listWeightMatrix() {
        return this.prisma.kpiWeightMatrix.findMany({ orderBy: [{ orgUnitCode: 'asc' }, { tier: 'asc' }, { kpiClass: 'asc' }, { version: 'desc' }] });
    }
    async proposeWeightMatrixVersion(input) {
        await this.assertCapability(input.proposedByUserId, 'KPI_WEIGHT_MATRIX', 'INITIATE', 'propose a new KPI class-weighting matrix version');
        const classes = ['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY'];
        const seenClasses = new Set(input.weights.map((w) => w.kpiClass));
        if (seenClasses.size !== 4 || !classes.every((c) => seenClasses.has(c))) {
            throw new pms_types_1.PmsError(`A weight matrix proposal must supply exactly one weightPct for each of ${classes.join(', ')}.`);
        }
        const sum = input.weights.reduce((total, w) => total + w.weightPct, 0);
        if (Math.abs(sum - 100) > 0.01) {
            throw new pms_types_1.PmsError(`Weight percentages for ${input.orgUnitCode} / ${input.tier} must sum to 100% — got ${sum}%.`);
        }
        const latest = await this.prisma.kpiWeightMatrix.findFirst({
            where: { orgUnitCode: input.orgUnitCode, tier: input.tier },
            orderBy: { version: 'desc' },
        });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.kpiWeightMatrix.createManyAndReturn({
            data: input.weights.map((w) => ({
                orgUnitCode: input.orgUnitCode, tier: input.tier, kpiClass: w.kpiClass, weightPct: w.weightPct,
                version, status: 'DRAFT', createdByUserId: input.proposedByUserId,
            })),
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'KPI_WEIGHT_MATRIX_APPROVAL',
                entityType: 'kpi_weight_matrix',
                entityId: `${input.orgUnitCode}:${input.tier}:${version}`,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'kpi_weight_matrix',
                entityId: `${input.orgUnitCode}:${input.tier}:${version}`,
                after: { workflowTypeCode: 'KPI_WEIGHT_MATRIX_APPROVAL', reason: err.message },
            });
            await this.prisma.kpiWeightMatrix.deleteMany({ where: { orgUnitCode: input.orgUnitCode, tier: input.tier, version } });
            throw err;
        }
        await this.prisma.kpiWeightMatrix.updateMany({
            where: { orgUnitCode: input.orgUnitCode, tier: input.tier, version },
            data: { workflowInstanceId: instance.id },
        });
        return { rows: created, workflowInstance: instance };
    }
    async approveWeightMatrixVersion(input) {
        const rows = await this.prisma.kpiWeightMatrix.findMany({ where: { workflowInstanceId: input.workflowInstanceId } });
        if (rows.length === 0)
            throw new pms_types_1.PmsError(`No kpi_weight_matrix rows found for workflow instance ${input.workflowInstanceId}.`);
        const { orgUnitCode, tier, version } = rows[0];
        const affectedTierCadres = await this.prisma.cadreTierMap.findMany({ where: { tier }, select: { cadre: true } });
        const affectedCadres = affectedTierCadres.map((c) => c.cadre);
        const inFlightSubmission = await this.prisma.employeeScoreSubmission.findFirst({
            where: {
                employee: { position: { orgUnitCode, cadre: { in: affectedCadres } } },
                appraisalCycle: { status: { notIn: ['INCENTIVE_COMPUTED', 'PAID', 'CLOSED'] } },
            },
            include: { appraisalCycle: true },
        });
        if (inFlightSubmission) {
            throw new pms_types_1.PmsError(`Org unit ${orgUnitCode} / tier ${tier} has an in-flight PMS cycle (${inFlightSubmission.appraisalCycle.id}, status ${inFlightSubmission.appraisalCycle.status}) — a weight-matrix version cannot be approved until that cycle reaches INCENTIVE_COMPUTED (invariant 51c2: never retroactive). Retry once the cycle closes.`);
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const [, activated] = await this.prisma.$transaction([
            this.prisma.kpiWeightMatrix.updateMany({
                where: { orgUnitCode, tier, status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.kpiWeightMatrix.updateMany({
                where: { orgUnitCode, tier, version },
                data: { status: 'ACTIVE', approvedByUserId: input.approverUserId },
            }),
        ]);
        await this.audit.record({
            actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'kpi_weight_matrix', entityId: `${orgUnitCode}:${tier}:${version}`,
            after: { status: 'ACTIVE', orgUnitCode, tier, version },
        });
        return activated;
    }
    async listPendingWeightMatrixProposals() {
        return this.prisma.kpiWeightMatrix.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async getEmployeeScorecard(employeeId) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        return this.getRoleScorecard(employee.positionId, employeeId);
    }
    async getMyStatus(appUserId, cycleId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId } });
        if (!employee)
            throw new pms_types_1.PmsError(`No employee record is linked to this login — self-scoring requires an employee.app_user_id link.`);
        const [cycle, scorecard, existingSubmission] = await Promise.all([
            this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } }),
            this.getRoleScorecard(employee.positionId, employee.id),
            this.prisma.employeeScoreSubmission.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: employee.id } } }),
        ]);
        return { employeeId: employee.id, employeeName: (0, employee_name_util_1.formatEmployeeName)(employee), cycle, scorecard, existingSubmission };
    }
    async getMyPerformanceSummary(appUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId } });
        if (!employee)
            throw new pms_types_1.PmsError(`No employee record is linked to this login — a performance summary requires an employee.app_user_id link.`);
        const [submissions, incentiveResults] = await Promise.all([
            this.prisma.employeeScoreSubmission.findMany({
                where: { employeeId: employee.id },
                include: { appraisalCycle: true, kpiScores: { include: { kpiDefinition: true } } },
                orderBy: { submittedAt: 'desc' },
            }),
            this.prisma.employeeIncentiveResult.findMany({ where: { employeeId: employee.id }, orderBy: { computedAt: 'desc' } }),
        ]);
        return {
            employeeId: employee.id,
            submissions,
            incentiveResults: incentiveResults.map((r) => ({
                ...r,
                totalEmolumentKobo: r.totalEmolumentKobo.toString(),
                incentivePoolKobo: r.incentivePoolKobo.toString(),
                preGateIncentiveKobo: r.preGateIncentiveKobo.toString(),
                finalIncentiveKobo: r.finalIncentiveKobo.toString(),
            })),
        };
    }
    async getRoleScorecard(positionId, employeeId) {
        const position = await this.prisma.position.findUniqueOrThrow({ where: { id: positionId } });
        const tierMap = await this.prisma.cadreTierMap.findUnique({ where: { cadre: position.cadre } });
        if (!tierMap)
            throw new pms_types_1.PmsError(`No cadre_tier_map row for cadre "${position.cadre}" — cannot derive a scorecard without a governed tier mapping.`);
        const [kpiDefs, weightRows] = await Promise.all([
            this.prisma.kpiDefinition.findMany({ where: { tier: tierMap.tier, status: 'ACTIVE', kra: { orgUnitCode: position.orgUnitCode } } }),
            this.prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: position.orgUnitCode, tier: tierMap.tier, status: 'ACTIVE' } }),
        ]);
        const weightByClass = new Map(weightRows.map((w) => [w.kpiClass, Number(w.weightPct)]));
        const kpiCountByClass = new Map();
        for (const k of kpiDefs)
            kpiCountByClass.set(k.kpiClass, (kpiCountByClass.get(k.kpiClass) ?? 0) + 1);
        const overrides = employeeId
            ? await this.prisma.roleScorecardOverride.findMany({ where: { employeeId, status: 'ACTIVE' } })
            : [];
        const overrideByKpi = new Map(overrides.map((o) => [o.kpiDefinitionId, Number(o.overrideWeightPct)]));
        return kpiDefs.map((k) => {
            const classWeight = weightByClass.get(k.kpiClass) ?? 0;
            const kpiCount = kpiCountByClass.get(k.kpiClass) ?? 1;
            return {
                kpiDefinitionId: k.id,
                kpiText: k.kpiText,
                kpiClass: k.kpiClass,
                weightPct: overrideByKpi.get(k.id) ?? classWeight / kpiCount,
                overridden: overrideByKpi.has(k.id),
            };
        });
    }
    async proposeScorecardOverride(input) {
        await this.assertCapability(input.createdByUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'propose a role scorecard override');
        const override = await this.prisma.roleScorecardOverride.create({
            data: { employeeId: input.employeeId, kpiDefinitionId: input.kpiDefinitionId, overrideWeightPct: input.overrideWeightPct, reason: input.reason, createdByUserId: input.createdByUserId },
        });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'PMS_SCORECARD_OVERRIDE',
            entityType: 'role_scorecard_override',
            entityId: override.id,
            initiatedByUserId: input.createdByUserId,
            scenario: 'STANDARD',
        });
        return this.prisma.roleScorecardOverride.update({ where: { id: override.id }, data: { workflowInstanceId: workflowInstance.id } });
    }
    async approveScorecardOverride(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            await this.prisma.roleScorecardOverride.update({ where: { workflowInstanceId }, data: { status: 'ACTIVE' } });
        }
        return updated;
    }
    async logActivity(input) {
        return this.prisma.activityReport.create({ data: input });
    }
    async startCycle(input) {
        await this.assertCapability(input.actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'start an appraisal/incentive cycle');
        return this.prisma.appraisalCycle.create({
            data: { cycleType: input.cycleType, orgUnitCode: input.orgUnitCode, periodStart: input.periodStart, periodEnd: input.periodEnd, status: 'OPEN' },
        });
    }
    async openForScoring(cycleId, actorUserId) {
        await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'open a cycle for scoring');
        const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
        if (cycle.status !== 'OPEN')
            throw new pms_types_1.PmsError(`Cannot open cycle ${cycleId} for scoring: status is ${cycle.status}, not OPEN.`);
        return this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'SCORING' } });
    }
    async submitSelfScore(input) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.employeeId } });
        if (employee.appUserId !== input.actorUserId) {
            throw new pms_types_1.PmsError(`User ${input.actorUserId} cannot submit a self-score on behalf of employee ${input.employeeId} — self-scoring is restricted to the employee's own linked login.`);
        }
        const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: input.cycleId } });
        if (cycle.status !== 'SCORING')
            throw new pms_types_1.PmsError(`Cannot submit a score for cycle ${input.cycleId}: status is ${cycle.status}, not SCORING.`);
        const submission = await this.prisma.employeeScoreSubmission.create({
            data: { appraisalCycleId: input.cycleId, employeeId: input.employeeId, status: 'SELF_SCORED' },
        });
        await this.prisma.employeeKpiScore.createMany({
            data: input.scores.map((s) => ({ employeeScoreSubmissionId: submission.id, kpiDefinitionId: s.kpiDefinitionId, selfScorePct: s.selfScorePct })),
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'PMS_SCORE_VALIDATION',
                entityType: 'employee_score_submission',
                entityId: submission.id,
                initiatedByUserId: input.actorUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.actorUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'employee_score_submission',
                entityId: submission.id,
                after: { workflowTypeCode: 'PMS_SCORE_VALIDATION', reason: err.message },
            });
            await this.prisma.employeeKpiScore.deleteMany({ where: { employeeScoreSubmissionId: submission.id } });
            await this.prisma.employeeScoreSubmission.delete({ where: { id: submission.id } });
            throw err;
        }
        return this.prisma.employeeScoreSubmission.update({ where: { id: submission.id }, data: { workflowInstanceId: workflowInstance.id } });
    }
    async adjustValidatedScore(submissionId, kpiDefinitionId, validatedScorePct, actorUserId) {
        await this.assertCapability(actorUserId, 'PMS_SUPERVISOR_VALIDATION', 'INITIATE', 'adjust a validated KPI score');
        const submission = await this.prisma.employeeScoreSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.status === 'VALIDATED' || submission.status === 'REJECTED') {
            throw new pms_types_1.PmsError(`Cannot adjust scores on submission ${submissionId}: status is ${submission.status}, already finalized.`);
        }
        return this.prisma.employeeKpiScore.update({
            where: { employeeScoreSubmissionId_kpiDefinitionId: { employeeScoreSubmissionId: submissionId, kpiDefinitionId } },
            data: { validatedScorePct },
        });
    }
    async validateScoreStep(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            await this.prisma.employeeScoreSubmission.update({ where: { workflowInstanceId }, data: { status: 'VALIDATED' } });
        }
        return updated;
    }
    async recordBehaviouralGate(input) {
        await this.assertCapability(input.assessedByUserId, 'PMS_BEHAVIOURAL_GATE', 'INITIATE', 'record a behavioural gate check');
        const severityConfig = await this.prisma.pmsGateSeverityConfig.findUnique({ where: { severity: input.severity } });
        if (!severityConfig)
            throw new pms_types_1.PmsError(`No pms_gate_severity_config row for severity "${input.severity}" — cannot determine gate outcome without governed config.`);
        return this.prisma.behaviouralGateCheck.upsert({
            where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
            create: {
                appraisalCycleId: input.cycleId, employeeId: input.employeeId, attendanceOk: input.attendanceOk, ethicalConductOk: input.ethicalConductOk,
                trendsViolation: input.trendsViolation ?? false, disciplinaryNote: input.disciplinaryNote, evidenceRef: input.evidenceRef,
                outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct, assessedByUserId: input.assessedByUserId,
            },
            update: {
                attendanceOk: input.attendanceOk, ethicalConductOk: input.ethicalConductOk, trendsViolation: input.trendsViolation ?? false,
                disciplinaryNote: input.disciplinaryNote, evidenceRef: input.evidenceRef, outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
            },
        });
    }
    static GATE_OUTCOME_RANK = { FULL_RELEASE: 0, CAPPED: 1, DEFERRED: 2, SUSPENDED: 3 };
    async applyTaskDefaultGate(input) {
        const policy = await this.prisma.taskDefaultGatePolicy.findMany({
            where: { isActive: true, minDefaultCount: { lte: input.defaultedTaskCount } },
            orderBy: { minDefaultCount: 'desc' },
            take: 1,
        });
        if (policy.length === 0)
            return null;
        const severityConfig = await this.prisma.pmsGateSeverityConfig.findUniqueOrThrow({ where: { severity: policy[0].severityCode } });
        const note = `Automatic task-default gate: ${input.defaultedTaskCount} DEFAULTED task(s) -> severity ${policy[0].severityCode}.`;
        const existing = await this.prisma.behaviouralGateCheck.findUnique({
            where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
        });
        if (existing) {
            const newRank = PmsService_1.GATE_OUTCOME_RANK[severityConfig.outcome];
            const existingRank = PmsService_1.GATE_OUTCOME_RANK[existing.outcome];
            if (newRank <= existingRank)
                return existing;
            return this.prisma.behaviouralGateCheck.update({
                where: { id: existing.id },
                data: {
                    outcome: severityConfig.outcome,
                    cappedPct: severityConfig.cappedPct,
                    disciplinaryNote: existing.disciplinaryNote ? `${existing.disciplinaryNote}\n${note}` : note,
                },
            });
        }
        return this.prisma.behaviouralGateCheck.create({
            data: {
                appraisalCycleId: input.cycleId, employeeId: input.employeeId,
                attendanceOk: true, ethicalConductOk: true, trendsViolation: false,
                disciplinaryNote: note, evidenceRef: `TASK_DEFAULT_COUNT:${input.defaultedTaskCount}`,
                outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
                assessedByUserId: input.systemUserId,
            },
        });
    }
    async runTaskDefaultGateFeed(employeeDefaultCounts, systemUserId) {
        let gatesApplied = 0;
        for (const { employeeId, count } of employeeDefaultCounts) {
            const openSubmissions = await this.prisma.employeeScoreSubmission.findMany({
                where: { employeeId, appraisalCycle: { status: { in: ['OPEN', 'SCORING', 'VALIDATION', 'APPROVED'] } } },
                select: { appraisalCycleId: true },
            });
            for (const { appraisalCycleId } of openSubmissions) {
                const result = await this.applyTaskDefaultGate({ cycleId: appraisalCycleId, employeeId, defaultedTaskCount: count, systemUserId });
                if (result)
                    gatesApplied++;
            }
        }
        return { employeesChecked: employeeDefaultCounts.length, gatesApplied };
    }
    async applyAttendanceLatenessGate(input) {
        const policy = await this.prisma.attendanceLatenessGatePolicy.findMany({
            where: { isActive: true, minLateCount: { lte: input.lateCount } },
            orderBy: { minLateCount: 'desc' },
            take: 1,
        });
        if (policy.length === 0)
            return null;
        const severityConfig = await this.prisma.pmsGateSeverityConfig.findUniqueOrThrow({ where: { severity: policy[0].severityCode } });
        const note = `Automatic attendance-lateness gate: ${input.lateCount} late clock-in(s) -> severity ${policy[0].severityCode}.`;
        const existing = await this.prisma.behaviouralGateCheck.findUnique({
            where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
        });
        if (existing) {
            const newRank = PmsService_1.GATE_OUTCOME_RANK[severityConfig.outcome];
            const existingRank = PmsService_1.GATE_OUTCOME_RANK[existing.outcome];
            if (newRank <= existingRank)
                return existing;
            return this.prisma.behaviouralGateCheck.update({
                where: { id: existing.id },
                data: {
                    outcome: severityConfig.outcome,
                    cappedPct: severityConfig.cappedPct,
                    disciplinaryNote: existing.disciplinaryNote ? `${existing.disciplinaryNote}\n${note}` : note,
                },
            });
        }
        return this.prisma.behaviouralGateCheck.create({
            data: {
                appraisalCycleId: input.cycleId, employeeId: input.employeeId,
                attendanceOk: false, ethicalConductOk: true, trendsViolation: false,
                disciplinaryNote: note, evidenceRef: `ATTENDANCE_LATE_COUNT:${input.lateCount}`,
                outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
                assessedByUserId: input.systemUserId,
            },
        });
    }
    async runAttendanceLatenessGateFeed(systemUserId) {
        const openCycles = await this.prisma.appraisalCycle.findMany({
            where: { status: { in: ['OPEN', 'SCORING', 'VALIDATION', 'APPROVED'] } },
        });
        let gatesApplied = 0;
        for (const cycle of openCycles) {
            const lateCounts = await this.attendance.computeLateCounts(cycle.periodStart, cycle.periodEnd);
            for (const { employeeId, count } of lateCounts) {
                const hasSubmission = await this.prisma.employeeScoreSubmission.findFirst({ where: { employeeId, appraisalCycleId: cycle.id } });
                if (!hasSubmission)
                    continue;
                const result = await this.applyAttendanceLatenessGate({ cycleId: cycle.id, employeeId, lateCount: count, systemUserId });
                if (result)
                    gatesApplied++;
            }
        }
        return { cyclesChecked: openCycles.length, gatesApplied };
    }
    async submitCycleForApproval(cycleId, actorUserId) {
        await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'submit a cycle for CEO approval');
        const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
        if (cycle.status !== 'SCORING')
            throw new pms_types_1.PmsError(`Cannot submit cycle ${cycleId} for approval: status is ${cycle.status}, not SCORING.`);
        const submissions = await this.prisma.employeeScoreSubmission.findMany({ where: { appraisalCycleId: cycleId } });
        const unvalidated = submissions.filter((s) => s.status === 'SELF_SCORED');
        if (unvalidated.length > 0) {
            throw new pms_types_1.PmsError(`Cannot submit cycle ${cycleId} for approval: ${unvalidated.length} score submission(s) are not yet VALIDATED.`);
        }
        await this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'VALIDATION' } });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'PMS_CYCLE_APPROVAL',
            entityType: 'appraisal_cycle',
            entityId: cycleId,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        return workflowInstance;
    }
    async approveCycle(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status === 'APPROVED') {
            await this.prisma.appraisalCycle.update({ where: { id: updated.entityId }, data: { status: 'APPROVED' } });
        }
        return updated;
    }
    async computeIncentive(cycleId, actorUserId) {
        await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'compute incentive results for a cycle');
        const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
        if (cycle.cycleType !== 'INCENTIVE_CYCLE')
            throw new pms_types_1.PmsError(`Cycle ${cycleId} is an ${cycle.cycleType}, not an INCENTIVE_CYCLE — no payout to compute.`);
        if (cycle.status !== 'APPROVED')
            throw new pms_types_1.PmsError(`Cannot compute incentive for cycle ${cycleId}: status is ${cycle.status}, not APPROVED.`);
        const bands = await this.prisma.incentiveBandConfig.findMany({ where: { isActive: true }, orderBy: { minScorePct: 'desc' } });
        if (bands.length === 0)
            throw new pms_types_1.PmsError('No ACTIVE incentive_band_config rows — cannot compute a payout without governed bands (invariant 10).');
        const submissions = await this.prisma.employeeScoreSubmission.findMany({
            where: { appraisalCycleId: cycleId, status: 'VALIDATED' },
            include: { kpiScores: { include: { kpiDefinition: true } }, employee: { include: { position: true } } },
        });
        const periodMonths = Math.max(1, Math.round((cycle.periodEnd.getTime() - cycle.periodStart.getTime()) / (30.44 * 24 * 3600 * 1000)));
        const periodsPerYear = Math.max(1, Math.round(12 / periodMonths));
        const results = [];
        for (const sub of submissions) {
            const gate = await this.prisma.behaviouralGateCheck.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: sub.employeeId } } });
            if (!gate) {
                continue;
            }
            const scorecard = await this.getRoleScorecard(sub.employee.positionId, sub.employeeId);
            const weightByKpi = new Map(scorecard.map((s) => [s.kpiDefinitionId, s.weightPct]));
            let overallScorePct = 0;
            const classAllocation = {};
            for (const ks of sub.kpiScores) {
                const scorePct = Number(ks.validatedScorePct ?? ks.selfScorePct);
                const weightPct = weightByKpi.get(ks.kpiDefinitionId) ?? 0;
                overallScorePct += (scorePct * weightPct) / 100;
                classAllocation[ks.kpiDefinition.kpiClass] = (classAllocation[ks.kpiDefinition.kpiClass] ?? 0) + weightPct;
            }
            const totalEmolument = await this.prisma.emolumentStructure.findMany({
                where: { cadre: sub.employee.position.cadre, notch: sub.employee.position.notch, status: 'ACTIVE' },
            });
            const totalEmolumentKobo = totalEmolument.reduce((s, e) => s + e.annualAmountKobo, 0n);
            const performanceIncentivePct = Number((await this.prisma.employee.findUniqueOrThrow({ where: { id: sub.employeeId } })).performanceIncentivePct);
            const incentivePoolKobo = (totalEmolumentKobo * BigInt(Math.round(performanceIncentivePct * 100))) / 10000n / BigInt(periodsPerYear);
            const band = bands.find((b) => overallScorePct >= Number(b.minScorePct));
            const bandPayoutPct = band ? Number(band.payoutPct) : 0;
            const preGateIncentiveKobo = (incentivePoolKobo * BigInt(Math.round(bandPayoutPct * 100))) / 10000n;
            const gateFactor = gate.outcome === 'FULL_RELEASE' ? 100 : gate.outcome === 'CAPPED' ? Number(gate.cappedPct ?? 0) : 0;
            const finalIncentiveKobo = (preGateIncentiveKobo * BigInt(Math.round(gateFactor * 100))) / 10000n;
            const existing = await this.prisma.employeeIncentiveResult.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: sub.employeeId } } });
            if (existing)
                continue;
            const result = await this.prisma.employeeIncentiveResult.create({
                data: {
                    appraisalCycleId: cycleId,
                    employeeId: sub.employeeId,
                    totalEmolumentKobo,
                    incentivePoolKobo,
                    overallScorePct,
                    bandPayoutPct,
                    gateOutcome: gate.outcome,
                    preGateIncentiveKobo,
                    finalIncentiveKobo,
                    classAllocationKobo: classAllocation,
                },
            });
            results.push(result);
        }
        await this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'INCENTIVE_COMPUTED' } });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'employee_incentive_result', entityId: cycleId, after: { count: results.length } });
        return results;
    }
    async computePaye(grossAnnualKobo, taxRuleVersion) {
        const config = taxRuleVersion
            ? await this.prisma.taxRuleConfig.findUniqueOrThrow({ where: { version: taxRuleVersion } })
            : await this.prisma.taxRuleConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!config)
            throw new pms_types_1.PmsError('No ACTIVE tax_rule_config — cannot compute PAYE without a FINCON-validated governed version (invariant 10).');
        const flatRelief = config.consolidatedReliefFlatKobo;
        const pctRelief = (grossAnnualKobo * BigInt(Math.round(Number(config.consolidatedReliefPctOfGross) * 100))) / 10000n;
        const taxableIncome = grossAnnualKobo - flatRelief - pctRelief;
        if (taxableIncome <= 0n)
            return 0n;
        const bands = config.bands;
        let paye = 0n;
        for (const band of bands) {
            const from = BigInt(band.fromKobo);
            const to = band.toKobo == null ? null : BigInt(band.toKobo);
            if (taxableIncome <= from)
                break;
            const upper = to == null ? taxableIncome : (taxableIncome < to ? taxableIncome : to);
            const amountInBand = upper - from;
            if (amountInBand <= 0n)
                continue;
            paye += (amountInBand * BigInt(Math.round(band.ratePct * 100))) / 10000n;
            if (to != null && taxableIncome <= to)
                break;
        }
        return paye;
    }
    async runPayroll(input) {
        await this.assertCapability(input.actorUserId, 'PAYROLL_PREPARATION', 'INITIATE', 'prepare (run) monthly payroll');
        const existing = await this.prisma.payrollRun.findUnique({ where: { periodMonth_periodYear_ledgerEntityCode: { periodMonth: input.periodMonth, periodYear: input.periodYear, ledgerEntityCode: input.ledgerEntityCode } } });
        if (existing)
            throw new pms_types_1.PmsError(`A payroll_run already exists for ${input.periodMonth}/${input.periodYear} at ${input.ledgerEntityCode}.`);
        const taxConfig = await this.prisma.taxRuleConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!taxConfig)
            throw new pms_types_1.PmsError('No ACTIVE tax_rule_config — cannot run payroll without a FINCON-validated governed version.');
        const employees = await this.prisma.employee.findMany({ where: { status: 'ACTIVE' }, include: { position: true } });
        const periodStart = new Date(input.periodYear, input.periodMonth - 1, 1);
        const periodEnd = new Date(input.periodYear, input.periodMonth, 0);
        const lines = [];
        for (const emp of employees) {
            const components = await this.prisma.emolumentStructure.findMany({ where: { cadre: emp.position.cadre, notch: emp.position.notch, status: 'ACTIVE' } });
            const annualGrossKobo = components.reduce((s, c) => s + c.annualAmountKobo, 0n);
            const monthlyGrossKobo = annualGrossKobo / 12n;
            const annualPayeKobo = await this.computePaye(annualGrossKobo, taxConfig.version);
            const monthlyPayeKobo = annualPayeKobo / 12n;
            const pensionKobo = (monthlyGrossKobo * BigInt(Math.round(Number(taxConfig.pensionEmployeePct) * 100))) / 10000n;
            const nhfKobo = (monthlyGrossKobo * BigInt(Math.round(Number(taxConfig.nhfPct) * 100))) / 10000n;
            const incentiveResult = await this.prisma.employeeIncentiveResult.findFirst({
                where: { employeeId: emp.id, appraisalCycle: { cycleType: 'INCENTIVE_CYCLE', periodStart: { lte: periodEnd }, periodEnd: { gte: periodStart } } },
                orderBy: { computedAt: 'desc' },
            });
            const incentiveKobo = incentiveResult?.finalIncentiveKobo ?? 0n;
            const netPayKobo = monthlyGrossKobo - monthlyPayeKobo - pensionKobo - nhfKobo + incentiveKobo;
            lines.push({ employeeId: emp.id, grossKobo: monthlyGrossKobo, payeKobo: monthlyPayeKobo, pensionKobo, nhfKobo, incentiveKobo, netPayKobo });
        }
        const totals = lines.reduce((acc, l) => ({
            gross: acc.gross + l.grossKobo, paye: acc.paye + l.payeKobo, pension: acc.pension + l.pensionKobo,
            nhf: acc.nhf + l.nhfKobo, incentive: acc.incentive + l.incentiveKobo, netPay: acc.netPay + l.netPayKobo,
        }), { gross: 0n, paye: 0n, pension: 0n, nhf: 0n, incentive: 0n, netPay: 0n });
        const run = await this.prisma.payrollRun.create({
            data: {
                periodMonth: input.periodMonth, periodYear: input.periodYear, ledgerEntityCode: input.ledgerEntityCode,
                status: 'DRAFT', taxRuleConfigId: taxConfig.id, generatedByUserId: input.actorUserId,
            },
        });
        await this.prisma.payrollRunLine.createMany({ data: lines.map((l) => ({ payrollRunId: run.id, ...l })) });
        const journalLines = [
            { accountCode: input.drStaffCostAccountCode, debitKobo: totals.gross, description: 'Staff cost — gross emoluments' },
            { accountCode: input.crPayePayableAccountCode, creditKobo: totals.paye, description: 'PAYE payable' },
            { accountCode: input.crPensionPayableAccountCode, creditKobo: totals.pension, description: 'Pension payable' },
            { accountCode: input.crNhfPayableAccountCode, creditKobo: totals.nhf, description: 'NHF payable' },
            { accountCode: input.crNetPayPayableAccountCode, creditKobo: totals.netPay, description: 'Net pay payable' },
        ];
        if (totals.incentive > 0n) {
            journalLines.push({ accountCode: input.drIncentiveExpenseAccountCode, debitKobo: totals.incentive, description: 'Incentive expense (net of behavioural gate)' });
        }
        const journal = await this.ledger.createJournalEntry({
            ledgerEntityCode: input.ledgerEntityCode,
            journalReference: `JE-PAY-${input.periodYear}-${String(input.periodMonth).padStart(2, '0')}`,
            entryDate: periodEnd,
            description: `Payroll run ${input.periodMonth}/${input.periodYear}`,
            lines: journalLines,
            createdByUserId: input.actorUserId,
        });
        const { id: workflowInstanceId } = await this.ledger.requestJournalPosting({
            journalEntryId: journal.id,
            initiatedByUserId: input.actorUserId,
            scenario: 'PAYROLL_THREE_HAND',
        });
        return this.prisma.payrollRun.update({ where: { id: run.id }, data: { status: 'PENDING_APPROVAL', journalEntryId: journal.id, workflowInstanceId } });
    }
    async markPayrollRunPosted(payrollRunId, approverUserId) {
        return this.prisma.payrollRun.update({ where: { id: payrollRunId }, data: { status: 'POSTED', approvedByUserId: approverUserId } });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'pms_activity', entityId: activity, after: { functionCode, level } });
            throw new pms_types_1.PmsError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.PmsService = PmsService;
exports.PmsService = PmsService = PmsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        ledger_service_1.LedgerService,
        attendance_service_1.AttendanceService])
], PmsService);
//# sourceMappingURL=pms.service.js.map