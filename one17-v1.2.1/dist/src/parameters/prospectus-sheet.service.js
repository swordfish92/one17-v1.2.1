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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectusSheetService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const prospectus_sheet_types_1 = require("./prospectus-sheet.types");
let ProspectusSheetService = class ProspectusSheetService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async proposeSheet(input) {
        await this.assertCapability(input.initiatedByUserId, 'PROSPECTUS_SHEET_INITIATION', 'INITIATE', 'propose a prospectus parameter sheet');
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
        this.validate(input, product.engineType);
        const previous = await this.prisma.productParameters.findFirst({ where: { productCode: input.productCode }, orderBy: { version: 'desc' } });
        const nextVersion = (previous?.version ?? 0) + 1;
        const created = await this.prisma.productParameters.create({
            data: { productCode: input.productCode, version: nextVersion, createdByUserId: input.initiatedByUserId, ...this.mapFields(input) },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'PROSPECTUS_SHEET_APPROVAL',
                entityType: 'product_parameters_sheet',
                entityId: created.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'product_parameters_sheet',
                entityId: created.id,
                after: { workflowTypeCode: 'PROSPECTUS_SHEET_APPROVAL', reason: err.message },
            });
            await this.prisma.productParameters.delete({ where: { id: created.id } });
            throw err;
        }
        const updated = await this.prisma.productParameters.update({ where: { id: created.id }, data: { sheetWorkflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'product_parameters_sheet', entityId: created.id, after: { productCode: input.productCode, version: nextVersion } });
        return { sheet: this.serialize(updated), workflowInstance };
    }
    async editDraftSheet(input) {
        await this.assertCapability(input.actorUserId, 'PROSPECTUS_SHEET_INITIATION', 'INITIATE', 'edit a draft prospectus parameter sheet');
        const sheet = await this.prisma.productParameters.findUniqueOrThrow({ where: { id: input.sheetId } });
        if (sheet.approvedByUserId) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`Prospectus sheet ${input.sheetId} (v${sheet.version}) is already LOCKED (approved) -- edit refused. Propose a new version instead.`);
        }
        if (!sheet.sheetWorkflowInstanceId) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`Prospectus sheet ${input.sheetId} has no governing workflow -- cannot verify DRAFT status.`);
        }
        const wf = await this.prisma.workflowInstance.findUniqueOrThrow({ where: { id: sheet.sheetWorkflowInstanceId } });
        if (wf.status !== 'PENDING_APPROVAL') {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`Prospectus sheet ${input.sheetId}'s workflow is ${wf.status}, not PENDING_APPROVAL -- edit refused.`);
        }
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: sheet.productCode } });
        this.validate(input, product.engineType);
        const before = this.serialize(sheet);
        const updated = await this.prisma.productParameters.update({ where: { id: input.sheetId }, data: this.mapFields(input) });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'product_parameters_sheet', entityId: input.sheetId, before, after: this.serialize(updated) });
        return this.serialize(updated);
    }
    async approveSheetStep(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return { status: updated.status, sheet: null };
        const sheet = await this.prisma.productParameters.findFirstOrThrow({ where: { sheetWorkflowInstanceId: workflowInstanceId } });
        await this.verifyProvisioning(sheet.productCode);
        const locked = await this.prisma.productParameters.update({
            where: { id: sheet.id },
            data: { approvedByUserId: approverUserId, effectiveFrom: new Date() },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'product_parameters_sheet', entityId: sheet.id, after: { status: 'LOCKED', effectiveFrom: locked.effectiveFrom } });
        return { status: updated.status, sheet: this.serialize(locked) };
    }
    async proposeAmendment(input) {
        await this.assertCapability(input.proposedByUserId, 'PROSPECTUS_AMENDMENT_PROPOSAL', 'INITIATE', 'propose a prospectus sheet amendment');
        const current = await this.getSheetInForceAt(input.productCode, new Date());
        if (!current) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`Product ${input.productCode} has no LOCKED (approved) prospectus sheet to amend -- use proposeSheet for a product's first sheet.`);
        }
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
        this.validate(input, product.engineType);
        const carried = this.carryForwardFields(current);
        const overrides = this.mapFields(input);
        const nextVersion = current.version + 1;
        const created = await this.prisma.productParameters.create({
            data: { productCode: input.productCode, version: nextVersion, createdByUserId: input.proposedByUserId, ...carried, ...overrides },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'PROSPECTUS_SHEET_AMENDMENT',
                entityType: 'product_parameters_sheet',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'product_parameters_sheet',
                entityId: created.id,
                after: { workflowTypeCode: 'PROSPECTUS_SHEET_AMENDMENT', reason: err.message },
            });
            await this.prisma.productParameters.delete({ where: { id: created.id } });
            throw err;
        }
        const updated = await this.prisma.productParameters.update({ where: { id: created.id }, data: { sheetWorkflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'product_parameters_sheet_amendment', entityId: created.id, before: this.serialize(current), after: this.serialize(updated) });
        return { sheet: this.serialize(updated), workflowInstance };
    }
    async approveAmendmentStep(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return { status: updated.status, sheet: null };
        const sheet = await this.prisma.productParameters.findFirstOrThrow({ where: { sheetWorkflowInstanceId: workflowInstanceId } });
        await this.verifyProvisioning(sheet.productCode);
        const locked = await this.prisma.productParameters.update({
            where: { id: sheet.id },
            data: { approvedByUserId: approverUserId, effectiveFrom: new Date() },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'product_parameters_sheet_amendment', entityId: sheet.id, after: { status: 'LOCKED', effectiveFrom: locked.effectiveFrom } });
        return { status: updated.status, sheet: this.serialize(locked) };
    }
    async getSheetInForceAt(productCode, asOf) {
        return this.prisma.productParameters.findFirst({
            where: { productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: asOf } },
            orderBy: { effectiveFrom: 'desc' },
        });
    }
    async listSheetVersions(productCode) {
        const rows = await this.prisma.productParameters.findMany({ where: { productCode }, orderBy: { version: 'desc' } });
        return rows.map((r) => this.serialize(r));
    }
    async getSheetDetail(sheetId) {
        const row = await this.prisma.productParameters.findUniqueOrThrow({ where: { id: sheetId } });
        return this.serialize(row);
    }
    async verifyProvisioning(productCode) {
        const ledgerEntity = await this.prisma.ledgerEntity.findFirst({ where: { productCode } });
        if (!ledgerEntity) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`Product ${productCode} has no provisioned ledger entity -- cannot LOCK a prospectus sheet until the product's own PRODUCT_SETUP chain has completed (accounting spine missing).`);
        }
    }
    validate(fields, engineType) {
        if (fields.distributableIncomePct !== undefined && fields.distributableIncomePct < 0.8) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`distributableIncomePct must be >= 0.80 (SEC 80% floor per invariant 70a); got ${fields.distributableIncomePct}.`);
        }
        if (fields.surplusSharingEnabled === true && engineType !== 'PSR_WATERFALL') {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`surplusSharingEnabled only applies to PSR_WATERFALL products; product engineType is ${engineType}.`);
        }
        if (fields.psrPoolMudaribShare !== undefined && (fields.psrPoolMudaribShare <= 0 || fields.psrPoolMudaribShare >= 1)) {
            throw new prospectus_sheet_types_1.ProspectusSheetError(`psrPoolMudaribShare must be strictly between 0 and 1; got ${fields.psrPoolMudaribShare}.`);
        }
    }
    mapFields(f) {
        return {
            prospectusRef: f.prospectusRef,
            authorizedUnits: f.authorizedUnits,
            fundSizeCapKobo: f.fundSizeCapKobo,
            offerSpreadPct: f.offerSpreadPct,
            bidSpreadPct: f.bidSpreadPct,
            valuationFrequency: f.valuationFrequency,
            minimumSubscriptionKobo: f.minimumSubscriptionKobo,
            minimumAdditionalInvestmentKobo: f.minimumAdditionalInvestmentKobo,
            minimumRedemptionKobo: f.minimumRedemptionKobo,
            minimumHoldingKobo: f.minimumHoldingKobo,
            managementFeeRatePct: f.managementFeeRatePct,
            adminFeeRatePct: f.adminFeeRatePct,
            custodianFeeRatePct: f.custodianFeeRatePct,
            secFeeRatePct: f.secFeeRatePct,
            auditFeeRatePct: f.auditFeeRatePct,
            distributionMethod: f.distributionMethod,
            distributionFrequency: f.distributionFrequency,
            distributableIncomePct: f.distributableIncomePct,
            minimumParticipationKobo: f.minimumParticipationKobo,
            poolTenorMonths: f.poolTenorMonths,
            surplusSharingEnabled: f.surplusSharingEnabled,
            psrPoolMudaribShare: f.psrPoolMudaribShare,
            surplusInvestorShare: f.surplusInvestorShare,
            surplusMudaribShare: f.surplusMudaribShare,
            mandateRoleModel: f.mandateRoleModel,
            mandateFeeRatePct: f.mandateFeeRatePct,
            targetedReturnBenchmarkPct: f.targetedReturnBenchmarkPct,
            investmentType: f.investmentType,
            tenorLockInMonths: f.tenorLockInMonths,
            minimumInvestmentKobo: f.minimumInvestmentKobo,
            fundingStructure: f.fundingStructure,
            offerNarrativeBrief: f.offerNarrativeBrief,
            offerNarrativeOpportunity: f.offerNarrativeOpportunity,
            offerNarrativeDynamics: f.offerNarrativeDynamics,
            offerNarrativeRiskSummary: f.offerNarrativeRiskSummary,
            offerNarrativeModelDescription: f.offerNarrativeModelDescription,
        };
    }
    carryForwardFields(row) {
        if (!row)
            return {};
        return this.mapFields({
            prospectusRef: row.prospectusRef ?? undefined,
            authorizedUnits: row.authorizedUnits ? Number(row.authorizedUnits) : undefined,
            fundSizeCapKobo: row.fundSizeCapKobo ?? undefined,
            offerSpreadPct: row.offerSpreadPct ? Number(row.offerSpreadPct) : undefined,
            bidSpreadPct: row.bidSpreadPct ? Number(row.bidSpreadPct) : undefined,
            valuationFrequency: row.valuationFrequency ?? undefined,
            minimumSubscriptionKobo: row.minimumSubscriptionKobo ?? undefined,
            minimumAdditionalInvestmentKobo: row.minimumAdditionalInvestmentKobo ?? undefined,
            minimumRedemptionKobo: row.minimumRedemptionKobo ?? undefined,
            minimumHoldingKobo: row.minimumHoldingKobo ?? undefined,
            managementFeeRatePct: row.managementFeeRatePct ? Number(row.managementFeeRatePct) : undefined,
            adminFeeRatePct: row.adminFeeRatePct ? Number(row.adminFeeRatePct) : undefined,
            custodianFeeRatePct: row.custodianFeeRatePct ? Number(row.custodianFeeRatePct) : undefined,
            secFeeRatePct: row.secFeeRatePct ? Number(row.secFeeRatePct) : undefined,
            auditFeeRatePct: row.auditFeeRatePct ? Number(row.auditFeeRatePct) : undefined,
            distributionMethod: row.distributionMethod ?? undefined,
            distributionFrequency: row.distributionFrequency ?? undefined,
            distributableIncomePct: row.distributableIncomePct ? Number(row.distributableIncomePct) : undefined,
            minimumParticipationKobo: row.minimumParticipationKobo ?? undefined,
            poolTenorMonths: row.poolTenorMonths ?? undefined,
            surplusSharingEnabled: row.surplusSharingEnabled,
            psrPoolMudaribShare: row.psrPoolMudaribShare ? Number(row.psrPoolMudaribShare) : undefined,
            surplusInvestorShare: row.surplusInvestorShare ? Number(row.surplusInvestorShare) : undefined,
            surplusMudaribShare: row.surplusMudaribShare ? Number(row.surplusMudaribShare) : undefined,
            mandateRoleModel: row.mandateRoleModel ?? undefined,
            mandateFeeRatePct: row.mandateFeeRatePct ? Number(row.mandateFeeRatePct) : undefined,
            targetedReturnBenchmarkPct: row.targetedReturnBenchmarkPct ? Number(row.targetedReturnBenchmarkPct) : undefined,
            investmentType: row.investmentType ?? undefined,
            tenorLockInMonths: row.tenorLockInMonths ?? undefined,
            minimumInvestmentKobo: row.minimumInvestmentKobo ?? undefined,
            fundingStructure: row.fundingStructure ?? undefined,
            offerNarrativeBrief: row.offerNarrativeBrief ?? undefined,
            offerNarrativeOpportunity: row.offerNarrativeOpportunity ?? undefined,
            offerNarrativeDynamics: row.offerNarrativeDynamics ?? undefined,
            offerNarrativeRiskSummary: row.offerNarrativeRiskSummary ?? undefined,
            offerNarrativeModelDescription: row.offerNarrativeModelDescription ?? undefined,
        });
    }
    serialize(row) {
        return {
            ...row,
            fundSizeCapKobo: row.fundSizeCapKobo?.toString() ?? null,
            minimumSubscriptionKobo: row.minimumSubscriptionKobo?.toString() ?? null,
            minimumAdditionalInvestmentKobo: row.minimumAdditionalInvestmentKobo?.toString() ?? null,
            minimumRedemptionKobo: row.minimumRedemptionKobo?.toString() ?? null,
            minimumHoldingKobo: row.minimumHoldingKobo?.toString() ?? null,
            minimumParticipationKobo: row.minimumParticipationKobo?.toString() ?? null,
            minimumInvestmentKobo: row.minimumInvestmentKobo?.toString() ?? null,
            authorizedUnits: row.authorizedUnits?.toString() ?? null,
            offerSpreadPct: row.offerSpreadPct?.toString() ?? null,
            bidSpreadPct: row.bidSpreadPct?.toString() ?? null,
            managementFeeRatePct: row.managementFeeRatePct?.toString() ?? null,
            adminFeeRatePct: row.adminFeeRatePct?.toString() ?? null,
            custodianFeeRatePct: row.custodianFeeRatePct?.toString() ?? null,
            secFeeRatePct: row.secFeeRatePct?.toString() ?? null,
            auditFeeRatePct: row.auditFeeRatePct?.toString() ?? null,
            distributableIncomePct: row.distributableIncomePct?.toString() ?? null,
            psrPoolMudaribShare: row.psrPoolMudaribShare?.toString() ?? null,
            surplusInvestorShare: row.surplusInvestorShare?.toString() ?? null,
            surplusMudaribShare: row.surplusMudaribShare?.toString() ?? null,
            mandateFeeRatePct: row.mandateFeeRatePct?.toString() ?? null,
            targetedReturnBenchmarkPct: row.targetedReturnBenchmarkPct?.toString() ?? null,
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'prospectus_sheet_activity', entityId: activity, after: { functionCode, level } });
            throw new prospectus_sheet_types_1.ProspectusSheetError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ProspectusSheetService = ProspectusSheetService;
exports.ProspectusSheetService = ProspectusSheetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], ProspectusSheetService);
//# sourceMappingURL=prospectus-sheet.service.js.map