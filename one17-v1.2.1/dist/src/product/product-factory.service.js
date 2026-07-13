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
exports.ProductFactoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const parameters_service_1 = require("../parameters/parameters.service");
const ledger_service_1 = require("../ledger/ledger.service");
const workflow_service_1 = require("../workflow/workflow.service");
const product_factory_types_1 = require("./product-factory.types");
let ProductFactoryService = class ProductFactoryService {
    prisma;
    audit;
    parameters;
    ledger;
    workflow;
    constructor(prisma, audit, parameters, ledger, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.parameters = parameters;
        this.ledger = ledger;
        this.workflow = workflow;
    }
    async initiateProductSetup(input) {
        const product = await this.parameters.createProduct({
            code: input.code,
            name: input.name,
            engineType: input.engineType,
            createdByUserId: input.initiatedByUserId,
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'PRODUCT_SETUP',
                entityType: 'product_setup',
                entityId: product.code,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'product',
                entityId: product.code,
                after: { workflowTypeCode: 'PRODUCT_SETUP', reason: err.message },
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
    async approveProductSetup(input) {
        const before = await this.prisma.workflowInstance.findUniqueOrThrow({ where: { id: input.workflowInstanceId } });
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return { status: updated.status, product: null, ledgerEntity: null };
        const product = await this.prisma.product.findFirstOrThrow({ where: { setupWorkflowInstanceId: input.workflowInstanceId } });
        if (product.engineType !== 'UNIT_NAV' && product.engineType !== 'PSR_WATERFALL' && product.engineType !== 'MANDATE') {
            throw new product_factory_types_1.ProductFactoryError(`Product ${product.code} has engineType ${product.engineType} -- not a product-factory (invariant 60c) class.`);
        }
        const ledgerEntity = await this.ledger.createLedgerEntity({
            code: `${product.code}-01`,
            name: product.name,
            entityType: product_factory_types_1.LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE[product.engineType],
            primaryBasis: 'AAOIFI',
            productCode: product.code,
            createdByUserId: before.initiatedByUserId,
        });
        await this.ledger.loadChartOfAccountsTemplate({
            ledgerEntityCode: ledgerEntity.code,
            accounts: product_factory_types_1.COA_TEMPLATE_BY_ENGINE_TYPE[product.engineType],
            createdByUserId: before.initiatedByUserId,
        });
        return { status: updated.status, product, ledgerEntity };
    }
    async approveProductSetupByCode(productCode, approverUserId) {
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
        if (!product.setupWorkflowInstanceId) {
            throw new product_factory_types_1.ProductFactoryError(`Product ${productCode} has no pending PRODUCT_SETUP workflow (it predates the product factory, or was already approved and provisioned).`);
        }
        return this.approveProductSetup({ workflowInstanceId: product.setupWorkflowInstanceId, approverUserId });
    }
};
exports.ProductFactoryService = ProductFactoryService;
exports.ProductFactoryService = ProductFactoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        parameters_service_1.ParameterService,
        ledger_service_1.LedgerService,
        workflow_service_1.WorkflowEngineService])
], ProductFactoryService);
//# sourceMappingURL=product-factory.service.js.map