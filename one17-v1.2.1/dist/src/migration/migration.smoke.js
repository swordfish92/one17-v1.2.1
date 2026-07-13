"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const migration_service_1 = require("./migration.service");
const RUN = Date.now();
const TEMPLATES_DIR = path.join(__dirname, '..', '..', '..', 'Migration Templates');
let failed = false;
function ok(label) {
    console.log(`OK: ${label}`);
}
function fail(label, detail) {
    console.error(`FAIL: ${label}`, detail ?? '');
    failed = true;
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const migration = new migration_service_1.MigrationService(prisma, audit, delegation);
    const migratorEmail = `migration-finadmin-${RUN}@one17.test`;
    let migrator = await prisma.appUser.findUnique({ where: { email: migratorEmail } });
    if (!migrator) {
        migrator = await prisma.appUser.create({ data: { email: migratorEmail, displayName: migratorEmail } });
        await rbac.assignRole({ userId: migrator.id, roleCode: 'FIN_ADMIN' });
    }
    for (const code of ['ONE17-HALAL-FUND', 'ONE17-MUDARABAH-POOL-1']) {
        const existing = await prisma.product.findUnique({ where: { code } });
        if (!existing) {
            await prisma.product.create({
                data: { code, name: code, engineType: code === 'ONE17-HALAL-FUND' ? 'UNIT_NAV' : 'PSR_WATERFALL' },
            });
        }
    }
    for (const entity of [
        { code: 'COMPANY', name: 'One17 Capital (Company)', entityType: 'COMPANY', primaryBasis: 'IFRS' },
        { code: 'HALAL-FUND', name: 'One17 Halal Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' },
        { code: 'MUDARABAH-POOL-1', name: 'One17 Mudarabah Pool 1', entityType: 'POOL', primaryBasis: 'AAOIFI' },
    ]) {
        const existing = await prisma.ledgerEntity.findUnique({ where: { code: entity.code } });
        if (!existing)
            await prisma.ledgerEntity.create({ data: entity });
    }
    const LOAD_ORDER = ['TPL_06', 'TPL_01', 'TPL_02', 'TPL_03', 'TPL_04', 'TPL_05', 'TPL_07', 'TPL_09', 'TPL_08', 'TPL_10', 'TPL_13'];
    const FILE_NAMES = {
        TPL_01: 'TPL_01_Investor_Master.csv',
        TPL_02: 'TPL_02_Investor_Bank_Accounts.csv',
        TPL_03: 'TPL_03_KYC_Documents.csv',
        TPL_04: 'TPL_04_Product_Accounts.csv',
        TPL_05: 'TPL_05_Historical_Transactions.csv',
        TPL_06: 'TPL_06_Counterparties.csv',
        TPL_07: 'TPL_07_Opening_Trial_Balance.csv',
        TPL_08: 'TPL_08_Employees.csv',
        TPL_09: 'TPL_09_Emolument_Structure.csv',
        TPL_10: 'TPL_10_KPI_Catalogue.csv',
        TPL_13: 'TPL_13_Shariah_Governance.csv',
    };
    const reports = [];
    for (const tplCode of LOAD_ORDER) {
        const fileName = FILE_NAMES[tplCode];
        const csvContent = fs.readFileSync(path.join(TEMPLATES_DIR, fileName), 'utf-8');
        const batch = await migration.stageCsv({ tplCode, fileName, csvContent, uploadedByUserId: migrator.id });
        ok(`${tplCode}: staged ${batch.totalRows} rows from ${fileName}`);
        const validated = await migration.validateBatch(batch.id, migrator.id);
        ok(`${tplCode}: validated — ${validated.validRows} valid, ${validated.rejectedRows} rejected`);
        const promoted = await migration.promoteBatch(batch.id, migrator.id);
        ok(`${tplCode}: promoted ${promoted.promotedRows} rows`);
        const report = await migration.generateValidationReport(batch.id);
        reports.push(report);
        console.log(report);
        console.log('---');
    }
    const gateResults = await migration.runReconciliationGates();
    console.log('\n=== Reconciliation Gates ===');
    for (const g of gateResults) {
        console.log(`Gate ${g.gate} [${g.passed ? 'PASS' : 'INFO/FAIL'}]: ${g.description}\n  ${g.detail}`);
    }
    const investorCount = await prisma.investor.count({ where: { migrationSourceRef: { not: null } } });
    if (investorCount >= 2)
        ok(`TPL_01 promoted ${investorCount} migrated investors (MIG-INV-0001 overlap case included)`);
    else
        fail(`expected >=2 migrated investors, got ${investorCount}`);
    const overlapAccounts = await prisma.productAccount.count({ where: { investor: { migrationSourceRef: 'MIG-INV-0001' } } });
    if (overlapAccounts === 2)
        ok('MIG-INV-0001 correctly promoted with holdings in BOTH products (the overlap case)');
    else
        fail(`expected MIG-INV-0001 to hold 2 product accounts, got ${overlapAccounts}`);
    const txnCount = await prisma.txn.count({ where: { migrationSourceDocumentRef: { not: null } } });
    if (txnCount === 4)
        ok(`TPL_05 promoted all ${txnCount} demo transactions`);
    else
        fail(`expected 4 migrated txns, got ${txnCount}`);
    const tpl08Batch = await prisma.migrationBatch.findFirst({ where: { tplCode: 'TPL_08' }, orderBy: { createdAt: 'desc' } });
    const tpl08Rejected = await prisma.migrationStagingRow.count({ where: { batchId: tpl08Batch.id, status: 'REJECTED' } });
    if (tpl08Rejected === 1)
        ok('TPL_08 correctly rejects the 1 demo row (CEO) whose cadre has no TPL_09 emolument_structure entry');
    else
        fail(`expected exactly 1 TPL_08 demo row rejected on the cadre-exists gate, got ${tpl08Rejected}`);
    const poolAccountsWithPsr = await prisma.productAccount.count({
        where: { productCode: 'ONE17-MUDARABAH-POOL-1', migrationSourceRef: { not: null }, OR: [{ psrInvestorPct: { not: null } }, { psrMudaribPct: { not: null } }] },
    });
    if (poolAccountsWithPsr === 0)
        ok('TPL_04 v2: no promoted pool account carries per-account PSR (AMD-01 gate holds)');
    else
        fail(`expected 0 promoted pool accounts with per-account PSR, got ${poolAccountsWithPsr}`);
    const rolledOverAccount = await prisma.productAccount.findFirst({ where: { migrationSourceRef: 'MIG-ACC-0002' } });
    if (rolledOverAccount?.rolloverElection === 'ROLLOVER')
        ok('TPL_04 v2: rollover_election captured on MIG-ACC-0002 (feeds control C15)');
    else
        fail(`expected MIG-ACC-0002.rolloverElection === 'ROLLOVER', got ${rolledOverAccount?.rolloverElection}`);
    const tpl06Batch = await prisma.migrationBatch.findFirst({ where: { tplCode: 'TPL_06' }, orderBy: { createdAt: 'desc' } });
    const cpy0002Row = await prisma.migrationStagingRow.findFirst({
        where: { batchId: tpl06Batch.id, rawData: { path: ['counterparty_ref'], equals: 'MIG-CPY-0002' } },
    });
    if (cpy0002Row?.status === 'REJECTED')
        ok('TPL_06 v2: control C13 correctly rejects MIG-CPY-0002 (shariah_cert_expiry already past, as of run date)');
    else
        fail(`expected MIG-CPY-0002 REJECTED on control-c13-cert-expiry, got status=${cpy0002Row?.status}`);
    const promotedCounterparty0001 = await prisma.counterparty.findFirst({ where: { migrationSourceRef: 'MIG-CPY-0001' } });
    if (promotedCounterparty0001?.shariahCertRef === 'SSB-CERT-2025-01')
        ok('TPL_06 v2: shariah_cert_ref captured on MIG-CPY-0001 (cert not yet expired, promotes clean)');
    else
        fail(`expected MIG-CPY-0001.shariahCertRef === 'SSB-CERT-2025-01', got ${promotedCounterparty0001?.shariahCertRef}`);
    const ssbMemberCount = await prisma.ssbMember.count({ where: { migrationSourceRef: { not: null } } });
    const ssbResolutionCount = await prisma.ssbResolution.count({ where: { migrationSourceRef: { not: null } } });
    const purificationCount = await prisma.purificationRecord.count({ where: { migrationSourceRef: { not: null } } });
    const complianceCheckCount = await prisma.complianceCheck.count({ where: { migrationSourceRef: { not: null } } });
    if (ssbMemberCount === 1 && ssbResolutionCount === 1 && purificationCount === 1 && complianceCheckCount === 1) {
        ok('TPL_13 promoted all 4 record types (1 SSB member, 1 resolution, 1 purification, 1 compliance check)');
    }
    else {
        fail(`expected 1/1/1/1, got members=${ssbMemberCount} resolutions=${ssbResolutionCount} purifications=${purificationCount} checks=${complianceCheckCount}`);
    }
    const res2025003 = await prisma.ssbResolution.findFirst({ where: { migrationSourceRef: 'RES-2025-003' } });
    if (res2025003 && res2025003.proposedByMemberId === null)
        ok('TPL_13: RES-2025-003 loads with proposedByMemberId=null (references SSB002, not in the shipped demo rows — documented gap, not silently guessed)');
    else
        fail(`expected RES-2025-003 to load with proposedByMemberId=null, got ${res2025003?.proposedByMemberId}`);
    const gate4 = gateResults.find((g) => g.gate === 4);
    if (!gate4.passed)
        ok('Gate 4 correctly reports the demo TPL_07 rows as unbalanced (they are single-sided format examples, not a real opening TB — documented, not forced to pass)');
    else
        fail('Gate 4 unexpectedly passed on unbalanced demo data — investigate');
    const allBatches = await migration.listBatches();
    if (allBatches.length >= LOAD_ORDER.length && allBatches.every((b) => typeof b.tplCode === 'string')) {
        ok(`listBatches() surfaces all ${allBatches.length} staged/validated/promoted batches — the new MigrationController's read backing, not a fabricated summary`);
    }
    else {
        fail(`expected listBatches() to return at least ${LOAD_ORDER.length} real batches`, allBatches.length);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — ${LOAD_ORDER.length} templates loaded end-to-end with the real demo rows.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=migration.smoke.js.map