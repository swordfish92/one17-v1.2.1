import 'dotenv/config';
// CHECK16 62(g): click-path verification found that ONE17-ND-MANDATE-01 (the
// walkthrough ND Mandate ledger entity, created directly via
// scripts/walkthrough-seed-bulk-clients.ts's raw prisma.ledgerEntity.create()
// or scripts/invariant48-walkthrough-refresh.ts's governed
// LedgerService.createLedgerEntity() call — either path stops at entity
// creation, never a chart-of-accounts load, since that has ALWAYS been a
// separate governed step (LedgerService.loadChartOfAccountsTemplate),
// confirmed by reading ledger.service.ts directly) has ZERO ChartOfAccount
// rows — Journal Entries' account picker renders empty for this entity, so a
// Fund Accountant genuinely cannot post against it today. This is a
// walkthrough-DATA gap, not a product-code gap: ProductFactoryService's own
// factory-driven path (invariant 60c) already auto-loads
// COA_TEMPLATE_BY_ENGINE_TYPE.MANDATE for any FACTORY-created MANDATE
// product; this walkthrough entity was just never created through that path.
// Fix: load the exact same template via the same governed service call the
// factory itself uses — not a new code path, not a shortcut.
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { LedgerService } from '../src/ledger/ledger.service';
import { COA_TEMPLATE_BY_ENGINE_TYPE } from '../src/product/product-factory.types';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

const MANDATE_ENTITY_CODE = 'ONE17-ND-MANDATE-01';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);

  const entity = await prisma.ledgerEntity.findUnique({ where: { code: MANDATE_ENTITY_CODE } });
  if (!entity) fail(`Ledger entity ${MANDATE_ENTITY_CODE} not found — is this the walkthrough DB?`);
  if (entity!.entityType !== 'MANDATE') fail(`${MANDATE_ENTITY_CODE} is entityType ${entity!.entityType}, expected MANDATE.`);

  const existing = await prisma.chartOfAccount.count({ where: { ledgerEntityCode: MANDATE_ENTITY_CODE } });
  if (existing > 0) {
    ok(`${MANDATE_ENTITY_CODE} already has ${existing} chart-of-accounts rows — nothing to do (idempotent re-run).`);
    await prisma.$disconnect();
    return;
  }

  const admin = await prisma.appUser.findUniqueOrThrow({ where: { email: 'segun.afolabi@one17capital.com' } });
  await ledger.loadChartOfAccountsTemplate({
    ledgerEntityCode: MANDATE_ENTITY_CODE,
    accounts: COA_TEMPLATE_BY_ENGINE_TYPE.MANDATE,
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
