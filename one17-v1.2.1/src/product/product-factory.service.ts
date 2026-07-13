import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { ParameterService } from '../parameters/parameters.service';
import { LedgerService } from '../ledger/ledger.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  ApproveProductSetupInput,
  COA_TEMPLATE_BY_ENGINE_TYPE,
  InitiateProductSetupInput,
  LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE,
  ProductFactoryError,
} from './product-factory.types';

// Invariant 44(b) (CHECK10): "designated officers get setup screens/buttons
// to create additional MUTUAL FUNDS (unit-NAV class) and PRIVATE
// PORTFOLIOS/POOLS (PSR class): capability-gated (initiator != approver),
// workflow approval + mandatory Shariah-approval gate before ACTIVE, CoA
// template + ledger entity auto-provisioned per class, class immutable
// after creation." This service is the create->approve half of that chain
// (ParameterService.createProduct/activateProduct supply the DRAFT-create
// and the final ACTIVE-flip; ProductService.approveProductShariah supplies
// the Shariah gate -- three separate services, three separate governed
// actions, composed here rather than duplicated).
//
// Invariant 60(b)/(c) (CHECK15): the create->approve chain is now a
// three-step PRODUCT_SETUP_INITIATION -> PRODUCT_SETUP_REVIEW ->
// PRODUCT_SETUP_APPROVAL rule (PORT_MGR -> CIO -> MD_CEO), and factory
// coverage extends to the MANDATE class -- the ND (Investment Mandate)
// engine remains the runtime, this service is now the birth canal for all
// three classes.
//
// Class immutability: engineType is set ONCE at createProduct() and no
// method anywhere in this codebase ever updates it afterward (verified by
// grep across every prisma.product.update call site) -- there is
// structurally no code path that could change a fund into a pool.
@Injectable()
export class ProductFactoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly parameters: ParameterService,
    private readonly ledger: LedgerService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async initiateProductSetup(input: InitiateProductSetupInput) {
    const product = await this.parameters.createProduct({
      code: input.code,
      name: input.name,
      engineType: input.engineType,
      createdByUserId: input.initiatedByUserId,
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    // ParameterService.createProduct() writes only the bare product row at
    // this stage (CoA template/ledger entity provisioning happens later, in
    // approveProductSetup) -- safe to delete outright, nothing else
    // references it yet.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'PRODUCT_SETUP',
        entityType: 'product_setup',
        entityId: product.code,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'product',
        entityId: product.code,
        after: { workflowTypeCode: 'PRODUCT_SETUP', reason: (err as Error).message },
      });
      await this.prisma.product.delete({ where: { code: product.code } });
      throw err;
    }

    await this.prisma.product.update({
      where: { code: product.code },
      data: { setupWorkflowInstanceId: workflowInstance.id },
    });

    return { product, workflowInstance };
  }

  async approveProductSetup(input: ApproveProductSetupInput) {
    const before = await this.prisma.workflowInstance.findUniqueOrThrow({ where: { id: input.workflowInstanceId } });
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return { status: updated.status, product: null, ledgerEntity: null };

    const product = await this.prisma.product.findFirstOrThrow({ where: { setupWorkflowInstanceId: input.workflowInstanceId } });
    if (product.engineType !== 'UNIT_NAV' && product.engineType !== 'PSR_WATERFALL' && product.engineType !== 'MANDATE') {
      throw new ProductFactoryError(`Product ${product.code} has engineType ${product.engineType} -- not a product-factory (invariant 60c) class.`);
    }

    // Invariant 44(b): auto-provisioning runs as the ORIGINAL INITIATOR, not
    // the approver -- PARAMETERS and LEDGER_ENTITY_SETUP share the same
    // INITIATE/APPROVE role pattern in this seed, so the person who could
    // initiate the product setup can also initiate the ledger entity/CoA
    // load; the approver here is only APPROVE-tiered on both, consistent
    // with the standing "who may decide" vs "who may touch the ledger"
    // separation (WmService.chargeAdvisoryFee precedent). Ledger entity
    // code/name are DERIVED from the product, not re-supplied by the
    // approver -- a checker approves what the maker proposed, they don't
    // invent naming details (matches ONE17-HALAL-FUND -> ONE17-HALAL-
    // FUND-01, the convention the two pre-existing walkthrough products
    // already use).
    const ledgerEntity = await this.ledger.createLedgerEntity({
      code: `${product.code}-01`,
      name: product.name,
      entityType: LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE[product.engineType],
      primaryBasis: 'AAOIFI',
      productCode: product.code,
      createdByUserId: before.initiatedByUserId,
    });

    await this.ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: ledgerEntity.code,
      accounts: COA_TEMPLATE_BY_ENGINE_TYPE[product.engineType],
      createdByUserId: before.initiatedByUserId,
    });

    return { status: updated.status, product, ledgerEntity };
  }

  // Controller-facing convenience: the product CODE is the natural handle
  // in the UI (it's what the maker just created), not the raw workflow
  // instance UUID.
  async approveProductSetupByCode(productCode: string, approverUserId: string) {
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
    if (!product.setupWorkflowInstanceId) {
      throw new ProductFactoryError(`Product ${productCode} has no pending PRODUCT_SETUP workflow (it predates the product factory, or was already approved and provisioned).`);
    }
    return this.approveProductSetup({ workflowInstanceId: product.setupWorkflowInstanceId, approverUserId });
  }

}
