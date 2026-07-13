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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmsController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const pms_service_1 = require("../pms/pms.service");
const ops_api_types_1 = require("./ops-api.types");
let PmsController = class PmsController {
    pms;
    constructor(pms) {
        this.pms = pms;
    }
    async listEmployees() {
        return this.pms.listEmployees();
    }
    async getScorecard(employeeId) {
        return this.pms.getEmployeeScorecard(employeeId);
    }
    async getMyStatus(id, user) {
        return this.pms.getMyStatus(user.userId, id);
    }
    async proposeOverride(dto, user) {
        return this.pms.proposeScorecardOverride({ ...dto, createdByUserId: user.userId });
    }
    async logActivity(dto) {
        return this.pms.logActivity(dto);
    }
    async listCycles() {
        return this.pms.listCycles();
    }
    async getCycle(id) {
        return this.pms.getCycleDetail(id);
    }
    async startCycle(dto, user) {
        return this.pms.startCycle({
            cycleType: dto.cycleType,
            orgUnitCode: dto.orgUnitCode,
            periodStart: new Date(dto.periodStart),
            periodEnd: new Date(dto.periodEnd),
            actorUserId: user.userId,
        });
    }
    async openForScoring(id, user) {
        return this.pms.openForScoring(id, user.userId);
    }
    async submitSelfScore(id, dto, user) {
        return this.pms.submitSelfScore({ cycleId: id, employeeId: dto.employeeId, scores: dto.scores, actorUserId: user.userId });
    }
    async adjustScore(id, dto, user) {
        return this.pms.adjustValidatedScore(id, dto.kpiDefinitionId, dto.validatedScorePct, user.userId);
    }
    async recordGate(id, dto, user) {
        return this.pms.recordBehaviouralGate({ cycleId: id, ...dto, assessedByUserId: user.userId });
    }
    async submitForApproval(id, user) {
        return this.pms.submitCycleForApproval(id, user.userId);
    }
    async computeIncentive(id, user) {
        return this.pms.computeIncentive(id, user.userId);
    }
    async listPayrollRuns() {
        return this.pms.listPayrollRuns();
    }
    async runPayroll(dto, user) {
        return this.pms.runPayroll({ ...dto, actorUserId: user.userId });
    }
    async listEmolumentStructure() {
        return this.pms.listEmolumentStructure();
    }
    async proposeEmolumentComponent(dto, user) {
        return this.pms.proposeEmolumentComponent({
            cadre: dto.cadre, notch: dto.notch, component: dto.component, componentType: dto.componentType,
            annualAmountKobo: BigInt(dto.annualAmountKobo), taxable: dto.taxable, effectiveFrom: new Date(dto.effectiveFrom),
            proposedByUserId: user.userId,
        });
    }
    async listEnterpriseKras() {
        return this.pms.listEnterpriseKras();
    }
    async listKpiDefinitions() {
        return this.pms.listKpiDefinitions();
    }
    async proposeKpiDefinition(dto, user) {
        return this.pms.proposeKpiDefinition({ ...dto, proposedByUserId: user.userId });
    }
    async listPendingKpiDefinitions() {
        return this.pms.listPendingKpiDefinitions();
    }
    async approveKpiDefinition(workflowInstanceId, user) {
        return this.pms.approveKpiDefinition({ workflowInstanceId, approverUserId: user.userId });
    }
    async listWeightMatrix() {
        return this.pms.listWeightMatrix();
    }
    async proposeWeightMatrixVersion(dto, user) {
        return this.pms.proposeWeightMatrixVersion({ ...dto, proposedByUserId: user.userId });
    }
    async listPendingWeightMatrixProposals() {
        return this.pms.listPendingWeightMatrixProposals();
    }
    async approveWeightMatrixVersion(workflowInstanceId, user) {
        return this.pms.approveWeightMatrixVersion({ workflowInstanceId, approverUserId: user.userId });
    }
};
exports.PmsController = PmsController;
__decorate([
    (0, common_1.Get)('employees'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listEmployees", null);
__decorate([
    (0, common_1.Get)('employees/:employeeId/scorecard'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_SELF_SCORE', 'INITIATE'),
    __param(0, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "getScorecard", null);
__decorate([
    (0, common_1.Get)('cycles/:id/my-status'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_SELF_SCORE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "getMyStatus", null);
__decorate([
    (0, common_1.Post)('scorecard-overrides'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeScorecardOverrideDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "proposeOverride", null);
__decorate([
    (0, common_1.Post)('activity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.LogActivityDto]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "logActivity", null);
__decorate([
    (0, common_1.Get)('cycles'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listCycles", null);
__decorate([
    (0, common_1.Get)('cycles/:id'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "getCycle", null);
__decorate([
    (0, common_1.Post)('cycles'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.StartCycleDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "startCycle", null);
__decorate([
    (0, common_1.Post)('cycles/:id/open-for-scoring'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "openForScoring", null);
__decorate([
    (0, common_1.Post)('cycles/:id/self-score'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_SELF_SCORE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SubmitSelfScoreDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "submitSelfScore", null);
__decorate([
    (0, common_1.Post)('score-submissions/:id/adjust'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_SUPERVISOR_VALIDATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AdjustValidatedScoreDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "adjustScore", null);
__decorate([
    (0, common_1.Post)('cycles/:id/gate'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_BEHAVIOURAL_GATE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordBehaviouralGateDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "recordGate", null);
__decorate([
    (0, common_1.Post)('cycles/:id/submit-for-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "submitForApproval", null);
__decorate([
    (0, common_1.Post)('cycles/:id/compute-incentive'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_CYCLE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "computeIncentive", null);
__decorate([
    (0, common_1.Get)('payroll'),
    (0, requires_capability_decorator_1.RequiresCapability)('PMS_PAYROLL', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listPayrollRuns", null);
__decorate([
    (0, common_1.Post)('payroll'),
    (0, requires_capability_decorator_1.RequiresCapability)('PAYROLL_PREPARATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RunPayrollDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "runPayroll", null);
__decorate([
    (0, common_1.Get)('emolument-structure'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMOLUMENT_STRUCTURE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listEmolumentStructure", null);
__decorate([
    (0, common_1.Post)('emolument-structure'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMOLUMENT_STRUCTURE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeEmolumentComponentDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "proposeEmolumentComponent", null);
__decorate([
    (0, common_1.Get)('kras'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_DEFINITION_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listEnterpriseKras", null);
__decorate([
    (0, common_1.Get)('kpi-definitions'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_DEFINITION_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listKpiDefinitions", null);
__decorate([
    (0, common_1.Post)('kpi-definitions'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_DEFINITION_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeKpiDefinitionDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "proposeKpiDefinition", null);
__decorate([
    (0, common_1.Get)('kpi-definitions/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_DEFINITION_MANAGEMENT', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listPendingKpiDefinitions", null);
__decorate([
    (0, common_1.Post)('kpi-definitions/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_DEFINITION_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "approveKpiDefinition", null);
__decorate([
    (0, common_1.Get)('kpi-weight-matrix'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_WEIGHT_MATRIX', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listWeightMatrix", null);
__decorate([
    (0, common_1.Post)('kpi-weight-matrix'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_WEIGHT_MATRIX', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeWeightMatrixVersionDto, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "proposeWeightMatrixVersion", null);
__decorate([
    (0, common_1.Get)('kpi-weight-matrix/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_WEIGHT_MATRIX', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "listPendingWeightMatrixProposals", null);
__decorate([
    (0, common_1.Post)('kpi-weight-matrix/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('KPI_WEIGHT_MATRIX', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PmsController.prototype, "approveWeightMatrixVersion", null);
exports.PmsController = PmsController = __decorate([
    (0, common_1.Controller)('pms'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [pms_service_1.PmsService])
], PmsController);
//# sourceMappingURL=pms.controller.js.map