import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PmsService } from '../pms/pms.service';
import {
  StartCycleDto,
  SubmitSelfScoreDto,
  AdjustValidatedScoreDto,
  RecordBehaviouralGateDto,
  ProposeScorecardOverrideDto,
  LogActivityDto,
  RunPayrollDto,
  ProposeEmolumentComponentDto,
  ProposeKpiDefinitionDto,
  ProposeWeightMatrixVersionDto,
} from './ops-api.types';

// PMS entry screens (SDS §5/§8). Thin adapter — every rule (scoring-chain
// SoD, insert-only incentive results, gate can only reduce pay, tax-rule
// governed config) lives in PmsService. Score-chain step approvals
// (supervisor/SAU/Chief) and the cycle-level CEO approval both go through
// the generic Workflow Inbox (WorkflowEngineService.approveNextStep) —
// no dispatch needed here, since neither has a side effect PmsService
// itself doesn't already own via the workflowInstanceId unique constraint.
@Controller('pms')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class PmsController {
  constructor(private readonly pms: PmsService) {}

  @Get('employees')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'VIEW')
  async listEmployees() {
    return this.pms.listEmployees();
  }

  @Get('employees/:employeeId/scorecard')
  @RequiresCapability('PMS_SELF_SCORE', 'INITIATE')
  async getScorecard(@Param('employeeId') employeeId: string) {
    return this.pms.getEmployeeScorecard(employeeId);
  }

  // Self-service: any employee with PMS_SELF_SCORE can reach their OWN
  // status for a cycle without needing PMS_CYCLE_MANAGEMENT visibility
  // into the whole cycle (least privilege — a plain employee has no
  // business seeing every colleague's score just to submit their own).
  @Get('cycles/:id/my-status')
  @RequiresCapability('PMS_SELF_SCORE', 'INITIATE')
  async getMyStatus(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.getMyStatus(user.userId, id);
  }

  @Post('scorecard-overrides')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'INITIATE')
  async proposeOverride(@Body() dto: ProposeScorecardOverrideDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.proposeScorecardOverride({ ...dto, createdByUserId: user.userId });
  }

  @Post('activity')
  async logActivity(@Body() dto: LogActivityDto) {
    return this.pms.logActivity(dto);
  }

  @Get('cycles')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'VIEW')
  async listCycles() {
    return this.pms.listCycles();
  }

  @Get('cycles/:id')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'VIEW')
  async getCycle(@Param('id') id: string) {
    return this.pms.getCycleDetail(id);
  }

  @Post('cycles')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'INITIATE')
  async startCycle(@Body() dto: StartCycleDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.startCycle({
      cycleType: dto.cycleType,
      orgUnitCode: dto.orgUnitCode,
      periodStart: new Date(dto.periodStart),
      periodEnd: new Date(dto.periodEnd),
      actorUserId: user.userId,
    });
  }

  @Post('cycles/:id/open-for-scoring')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'INITIATE')
  async openForScoring(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.openForScoring(id, user.userId);
  }

  @Post('cycles/:id/self-score')
  @RequiresCapability('PMS_SELF_SCORE', 'INITIATE')
  async submitSelfScore(@Param('id') id: string, @Body() dto: SubmitSelfScoreDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.submitSelfScore({ cycleId: id, employeeId: dto.employeeId, scores: dto.scores, actorUserId: user.userId });
  }

  @Post('score-submissions/:id/adjust')
  @RequiresCapability('PMS_SUPERVISOR_VALIDATION', 'INITIATE')
  async adjustScore(@Param('id') id: string, @Body() dto: AdjustValidatedScoreDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.adjustValidatedScore(id, dto.kpiDefinitionId, dto.validatedScorePct, user.userId);
  }

  @Post('cycles/:id/gate')
  @RequiresCapability('PMS_BEHAVIOURAL_GATE', 'INITIATE')
  async recordGate(@Param('id') id: string, @Body() dto: RecordBehaviouralGateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.recordBehaviouralGate({ cycleId: id, ...dto, assessedByUserId: user.userId });
  }

  @Post('cycles/:id/submit-for-approval')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'INITIATE')
  async submitForApproval(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.submitCycleForApproval(id, user.userId);
  }

  @Post('cycles/:id/compute-incentive')
  @RequiresCapability('PMS_CYCLE_MANAGEMENT', 'INITIATE')
  async computeIncentive(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.computeIncentive(id, user.userId);
  }

  @Get('payroll')
  @RequiresCapability('PMS_PAYROLL', 'VIEW')
  async listPayrollRuns() {
    return this.pms.listPayrollRuns();
  }

  @Post('payroll')
  @RequiresCapability('PAYROLL_PREPARATION', 'INITIATE')
  async runPayroll(@Body() dto: RunPayrollDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.runPayroll({ ...dto, actorUserId: user.userId });
  }

  // Invariant 46(f): no dedicated approve/post route — Finance review and
  // MD/CEO approval both go through the generic Workflow Inbox (POST
  // /workflow/:id/approve), dispatched to PmsService.advancePayrollApproval
  // by workflow type, same shape as the facility-application review chain.

  // Invariant 37(e): Salary/Emolument setup editor. Approval itself is NOT
  // a dedicated route here — same precedent as the PMS scoring-chain steps
  // above: it has no side effect beyond the generic workflow transition
  // that PmsService.approveEmolumentComponent doesn't already own via the
  // workflowInstanceId unique constraint, so it goes through the standing
  // Workflow Inbox (WorkflowInboxService's EMOLUMENT_STRUCTURE_APPROVAL
  // dispatch), not a duplicate approve button on this page.
  @Get('emolument-structure')
  @RequiresCapability('EMOLUMENT_STRUCTURE_MANAGEMENT', 'VIEW')
  async listEmolumentStructure() {
    return this.pms.listEmolumentStructure();
  }

  @Post('emolument-structure')
  @RequiresCapability('EMOLUMENT_STRUCTURE_MANAGEMENT', 'INITIATE')
  async proposeEmolumentComponent(@Body() dto: ProposeEmolumentComponentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.proposeEmolumentComponent({
      cadre: dto.cadre, notch: dto.notch, component: dto.component, componentType: dto.componentType,
      annualAmountKobo: BigInt(dto.annualAmountKobo), taxable: dto.taxable, effectiveFrom: new Date(dto.effectiveFrom),
      proposedByUserId: user.userId,
    });
  }

  // Invariant 51(c2) (CHECK12): PMS strategy-spine KPI layer -- was
  // seed-only. Dedicated approve routes, not the generic Workflow Inbox,
  // for consistency with the weight-matrix and strategy-layer approve
  // routes in this same feature (see PmsService.approveKpiDefinition /
  // approveWeightMatrixVersion for why each needs its own transaction).
  @Get('kras')
  @RequiresCapability('KPI_DEFINITION_MANAGEMENT', 'VIEW')
  async listEnterpriseKras() {
    return this.pms.listEnterpriseKras();
  }

  @Get('kpi-definitions')
  @RequiresCapability('KPI_DEFINITION_MANAGEMENT', 'VIEW')
  async listKpiDefinitions() {
    return this.pms.listKpiDefinitions();
  }

  @Post('kpi-definitions')
  @RequiresCapability('KPI_DEFINITION_MANAGEMENT', 'INITIATE')
  async proposeKpiDefinition(@Body() dto: ProposeKpiDefinitionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.proposeKpiDefinition({ ...dto, proposedByUserId: user.userId });
  }

  @Get('kpi-definitions/pending')
  @RequiresCapability('KPI_DEFINITION_MANAGEMENT', 'APPROVE')
  async listPendingKpiDefinitions() {
    return this.pms.listPendingKpiDefinitions();
  }

  @Post('kpi-definitions/:workflowInstanceId/approve')
  @RequiresCapability('KPI_DEFINITION_MANAGEMENT', 'APPROVE')
  async approveKpiDefinition(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.approveKpiDefinition({ workflowInstanceId, approverUserId: user.userId });
  }

  @Get('kpi-weight-matrix')
  @RequiresCapability('KPI_WEIGHT_MATRIX', 'VIEW')
  async listWeightMatrix() {
    return this.pms.listWeightMatrix();
  }

  @Post('kpi-weight-matrix')
  @RequiresCapability('KPI_WEIGHT_MATRIX', 'INITIATE')
  async proposeWeightMatrixVersion(@Body() dto: ProposeWeightMatrixVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.proposeWeightMatrixVersion({ ...dto, proposedByUserId: user.userId });
  }

  @Get('kpi-weight-matrix/pending')
  @RequiresCapability('KPI_WEIGHT_MATRIX', 'APPROVE')
  async listPendingWeightMatrixProposals() {
    return this.pms.listPendingWeightMatrixProposals();
  }

  @Post('kpi-weight-matrix/:workflowInstanceId/approve')
  @RequiresCapability('KPI_WEIGHT_MATRIX', 'APPROVE')
  async approveWeightMatrixVersion(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pms.approveWeightMatrixVersion({ workflowInstanceId, approverUserId: user.userId });
  }
}
