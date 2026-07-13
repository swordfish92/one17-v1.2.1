import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EditDraftSheetInput, ProposeAmendmentInput, ProposeSheetInput, ProspectusSheetError, ProspectusSheetFields } from './prospectus-sheet.types';

// Invariant 70(a)/(b)/(g) (CHECK24, CEO directive 12-Jul-2026): the Unified
// Prospectus Parameter Sheet's own governed lifecycle, layered on the
// EXISTING ProductParameters table (see its schema.prisma comment for why
// this extends rather than duplicates). Two DISTINCT chains:
//   - propose/edit/approve: PORT_MGR -> CIO -> MD_CEO (PROSPECTUS_SHEET_
//     APPROVAL), for a product's FIRST sheet or a wholly fresh version.
//   - proposeAmendment/signoff: CIO -> SSB -> Compliance -> MD_CEO
//     (PROSPECTUS_SHEET_AMENDMENT), for amending an EXISTING approved
//     sheet on a LIVE product -- deliberately heavier, per invariant 70(g).
// Lock-on-approval reuses ProductParameters.approvedByUserId's existing
// nullability (null = DRAFT, non-null = LOCKED) -- no new status enum.
// effectiveFrom (already on the row) is set to the actual approval instant
// at lock time, giving forward-only effective-dating for free: "the version
// in force at a transaction's date" = the latest LOCKED version whose
// effectiveFrom <= that date, which getSheetInForceAt() below computes.
@Injectable()
export class ProspectusSheetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  // ==========================================================================
  // New-sheet chain (70a/b): PORT_MGR proposes -> CIO reviews -> MD_CEO
  // approves -> LOCKED.
  // ==========================================================================
  async proposeSheet(input: ProposeSheetInput) {
    await this.assertCapability(input.initiatedByUserId, 'PROSPECTUS_SHEET_INITIATION', 'INITIATE', 'propose a prospectus parameter sheet');
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
    this.validate(input, product.engineType);

    const previous = await this.prisma.productParameters.findFirst({ where: { productCode: input.productCode }, orderBy: { version: 'desc' } });
    const nextVersion = (previous?.version ?? 0) + 1;

    const created = await this.prisma.productParameters.create({
      data: { productCode: input.productCode, version: nextVersion, createdByUserId: input.initiatedByUserId, ...this.mapFields(input) },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see ProductFactoryService.initiateProductSetup's
    // matching comment. Safe to delete outright: nothing else references
    // this row yet at DRAFT.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'PROSPECTUS_SHEET_APPROVAL',
        entityType: 'product_parameters_sheet',
        entityId: created.id,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'product_parameters_sheet',
        entityId: created.id,
        after: { workflowTypeCode: 'PROSPECTUS_SHEET_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.productParameters.delete({ where: { id: created.id } });
      throw err;
    }

    const updated = await this.prisma.productParameters.update({ where: { id: created.id }, data: { sheetWorkflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'product_parameters_sheet', entityId: created.id, after: { productCode: input.productCode, version: nextVersion } });
    return { sheet: this.serialize(updated), workflowInstance };
  }

  // "Freely editable ... while DRAFT" (70b): updates the SAME row in place
  // -- only while its own workflow is still PENDING_APPROVAL, i.e. before
  // the LOCK. Once locked (or rejected), this refuses -- a further change
  // is a new proposeSheet/proposeAmendment call, never an edit.
  async editDraftSheet(input: EditDraftSheetInput) {
    await this.assertCapability(input.actorUserId, 'PROSPECTUS_SHEET_INITIATION', 'INITIATE', 'edit a draft prospectus parameter sheet');
    const sheet = await this.prisma.productParameters.findUniqueOrThrow({ where: { id: input.sheetId } });
    if (sheet.approvedByUserId) {
      throw new ProspectusSheetError(`Prospectus sheet ${input.sheetId} (v${sheet.version}) is already LOCKED (approved) -- edit refused. Propose a new version instead.`);
    }
    if (!sheet.sheetWorkflowInstanceId) {
      throw new ProspectusSheetError(`Prospectus sheet ${input.sheetId} has no governing workflow -- cannot verify DRAFT status.`);
    }
    const wf = await this.prisma.workflowInstance.findUniqueOrThrow({ where: { id: sheet.sheetWorkflowInstanceId } });
    if (wf.status !== 'PENDING_APPROVAL') {
      throw new ProspectusSheetError(`Prospectus sheet ${input.sheetId}'s workflow is ${wf.status}, not PENDING_APPROVAL -- edit refused.`);
    }
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: sheet.productCode } });
    this.validate(input, product.engineType);

    const before = this.serialize(sheet);
    const updated = await this.prisma.productParameters.update({ where: { id: input.sheetId }, data: this.mapFields(input) });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'product_parameters_sheet', entityId: input.sheetId, before, after: this.serialize(updated) });
    return this.serialize(updated);
  }

  // Same "generic next-step" entry point as ProductFactoryService.
  // approveProductSetup -- WorkflowEngineService resolves whichever step
  // (CIO review or MD_CEO approval) is actually pending. Only on the FINAL
  // APPROVED does this LOCK the row (approvedByUserId + effectiveFrom) and
  // run the provisioning verification.
  async approveSheetStep(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return { status: updated.status, sheet: null };

    const sheet = await this.prisma.productParameters.findFirstOrThrow({ where: { sheetWorkflowInstanceId: workflowInstanceId } });
    await this.verifyProvisioning(sheet.productCode);
    const locked = await this.prisma.productParameters.update({
      where: { id: sheet.id },
      data: { approvedByUserId: approverUserId, effectiveFrom: new Date() },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'product_parameters_sheet', entityId: sheet.id, after: { status: 'LOCKED', effectiveFrom: locked.effectiveFrom } });
    return { status: updated.status, sheet: this.serialize(locked) };
  }

  // ==========================================================================
  // Amendment chain (70g): CIO proposes -> SSB signoff -> Compliance
  // signoff -> MD_CEO approval -> new version effective FORWARD ONLY.
  // ==========================================================================
  async proposeAmendment(input: ProposeAmendmentInput) {
    await this.assertCapability(input.proposedByUserId, 'PROSPECTUS_AMENDMENT_PROPOSAL', 'INITIATE', 'propose a prospectus sheet amendment');
    const current = await this.getSheetInForceAt(input.productCode, new Date());
    if (!current) {
      throw new ProspectusSheetError(`Product ${input.productCode} has no LOCKED (approved) prospectus sheet to amend -- use proposeSheet for a product's first sheet.`);
    }
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
    this.validate(input, product.engineType);

    // The new version starts as a COPY of the current locked sheet
    // (carrying forward every field the amendment doesn't touch), overridden
    // by the amendment's own fields -- a checker signs off on a delta, not a
    // blank slate.
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
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'product_parameters_sheet',
        entityId: created.id,
        after: { workflowTypeCode: 'PROSPECTUS_SHEET_AMENDMENT', reason: (err as Error).message },
      });
      await this.prisma.productParameters.delete({ where: { id: created.id } });
      throw err;
    }

    const updated = await this.prisma.productParameters.update({ where: { id: created.id }, data: { sheetWorkflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'product_parameters_sheet_amendment', entityId: created.id, before: this.serialize(current), after: this.serialize(updated) });
    return { sheet: this.serialize(updated), workflowInstance };
  }

  // Generic next-step entry point covering all THREE amendment steps (SSB
  // signoff, Compliance signoff, MD_CEO approval) -- same resolve-whichever-
  // step-is-pending pattern as approveSheetStep. Only the FINAL MD_CEO
  // approval locks + sets the forward effective date; the two signoff steps
  // just advance the chain (WorkflowEngineService already records each as
  // its own resolution/approval row -- the amendment's audit trail).
  async approveAmendmentStep(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return { status: updated.status, sheet: null };

    const sheet = await this.prisma.productParameters.findFirstOrThrow({ where: { sheetWorkflowInstanceId: workflowInstanceId } });
    await this.verifyProvisioning(sheet.productCode);
    const locked = await this.prisma.productParameters.update({
      where: { id: sheet.id },
      data: { approvedByUserId: approverUserId, effectiveFrom: new Date() },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'product_parameters_sheet_amendment', entityId: sheet.id, after: { status: 'LOCKED', effectiveFrom: locked.effectiveFrom } });
    return { status: updated.status, sheet: this.serialize(locked) };
  }

  // ==========================================================================
  // Read models -- "the version in force at a given date" (adversarial
  // requirement: "amendment effective-dating proven -- a pre-amendment-
  // dated computation never changes"). Reads LOCKED versions only
  // (approvedByUserId non-null) whose effectiveFrom <= asOf, latest first.
  // ==========================================================================
  async getSheetInForceAt(productCode: string, asOf: Date) {
    return this.prisma.productParameters.findFirst({
      where: { productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: asOf } },
      orderBy: { effectiveFrom: 'desc' },
    });
  }

  async listSheetVersions(productCode: string) {
    const rows = await this.prisma.productParameters.findMany({ where: { productCode }, orderBy: { version: 'desc' } });
    return rows.map((r) => this.serialize(r));
  }

  async getSheetDetail(sheetId: string) {
    const row = await this.prisma.productParameters.findUniqueOrThrow({ where: { id: sheetId } });
    return this.serialize(row);
  }

  // Invariant 70(b): "approval provisions/validates the accounting spine
  // (ledger entity, CoA, event-mapping applicability per class ...) and the
  // access map." The ledger entity + CoA are provisioned by
  // ProductFactoryService.approveProductSetup at the PRODUCT's own creation
  // (a separate, earlier chain) -- this sheet-approval gate VERIFIES that
  // spine already exists rather than re-provisioning it (re-provisioning
  // would risk a second, divergent ledger entity for the same product).
  // Refuses to LOCK a sheet for a product with no ledger entity on file,
  // since a sheet with no accounting spine to post against is not
  // meaningfully "provisioned." The access-map half (every stakeholder
  // seat's capability over the product verified) is the SAME probe pattern
  // ActivationConsoleService already applies platform-wide -- re-running the
  // full multi-seat probe per product-approval is deferred (see
  // CHECK24_EVIDENCE.md open-items) rather than duplicating that engine
  // here; RBAC/PERMISSIONS coverage for every new function this build adds
  // is verified once, in seed.ts's own hard-throwing APPROVE=>VIEW
  // assertion, which already runs on every seed.
  private async verifyProvisioning(productCode: string) {
    const ledgerEntity = await this.prisma.ledgerEntity.findFirst({ where: { productCode } });
    if (!ledgerEntity) {
      throw new ProspectusSheetError(`Product ${productCode} has no provisioned ledger entity -- cannot LOCK a prospectus sheet until the product's own PRODUCT_SETUP chain has completed (accounting spine missing).`);
    }
  }

  // ==========================================================================
  // Validation -- SEC 80% distributable-income floor (invariant 70a: "floor-
  // enforced >= the SEC 80% constraint"), and the surplus-tier NEVER-
  // automatic rule (70a: surplusSharingEnabled requires an explicit
  // election, never inferred from non-null share fields alone).
  // ==========================================================================
  private validate(fields: ProspectusSheetFields, engineType: string) {
    if (fields.distributableIncomePct !== undefined && fields.distributableIncomePct < 0.8) {
      throw new ProspectusSheetError(`distributableIncomePct must be >= 0.80 (SEC 80% floor per invariant 70a); got ${fields.distributableIncomePct}.`);
    }
    if (fields.surplusSharingEnabled === true && engineType !== 'PSR_WATERFALL') {
      throw new ProspectusSheetError(`surplusSharingEnabled only applies to PSR_WATERFALL products; product engineType is ${engineType}.`);
    }
    if (fields.psrPoolMudaribShare !== undefined && (fields.psrPoolMudaribShare <= 0 || fields.psrPoolMudaribShare >= 1)) {
      throw new ProspectusSheetError(`psrPoolMudaribShare must be strictly between 0 and 1; got ${fields.psrPoolMudaribShare}.`);
    }
  }

  private mapFields(f: ProspectusSheetFields) {
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

  private carryForwardFields(row: Awaited<ReturnType<ProspectusSheetService['getSheetInForceAt']>>) {
    if (!row) return {};
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

  private serialize(row: any) {
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

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'prospectus_sheet_activity', entityId: activity, after: { functionCode, level } });
      throw new ProspectusSheetError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
