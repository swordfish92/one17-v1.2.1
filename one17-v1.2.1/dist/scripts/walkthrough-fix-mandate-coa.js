"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const product_factory_types_1 = require("../src/product/product-factory.types");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
const MANDATE_ENTITY_CODE = 'ONE17-ND-MANDATE-01';
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const entity = await prisma.ledgerEntity.findUnique({ where: { code: MANDATE_ENTITY_CODE } });
    if (!entity)
        fail(`Ledger entity ${MANDATE_ENTITY_CODE} not found — is this the walkthrough DB?`);
    if (entity.entityType !== 'MANDATE')
        fail(`${MANDATE_ENTITY_CODE} is entityType ${entity.entityType}, expected MANDATE.`);
    const existing = await prisma.chartOfAccount.count({ where: { ledgerEntityCode: MANDATE_ENTITY_CODE } });
    if (existing > 0) {
        ok(`${MANDATE_ENTITY_CODE} already has ${existing} chart-of-accounts rows — nothing to do (idempotent re-run).`);
        await prisma.$disconnect();
        return;
    }
    const admin = await prisma.appUser.findUniqueOrThrow({ where: { email: 'segun.afolabi@one17capital.com' } });
    await ledger.loadChartOfAccountsTemplate({
        ledgerEntityCode: MANDATE_ENTITY_CODE,
        accounts: product_factory_types_1.COA_TEMPLATE_BY_ENGINE_TYPE.MANDATE,
        createdByUserId: admin.id,
    });
    const count = await prisma.chartOfAccount.count({ where: { ledgerEntityCode: MANDATE_ENTITY_CODE } });
    ok(`${MANDATE_ENTITY_CODE}: loaded ${count} chart-of-accounts rows (COA_TEMPLATE_BY_ENGINE_TYPE.MANDATE, same template the product factory itself uses).`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=walkthrough-fix-mandate-coa.js.map