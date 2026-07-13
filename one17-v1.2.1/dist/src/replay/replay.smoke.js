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
const replay_service_1 = require("./replay.service");
const RUN = Date.now();
const WORKBOOK_DIR = path.join(__dirname, '..', '..', '..', 'Workbook_Extracts');
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
    const replay = new replay_service_1.ReplayService(prisma, audit, delegation);
    const email = `replay-finadmin-${RUN}@one17.test`;
    let user = await prisma.appUser.findUnique({ where: { email } });
    if (!user) {
        user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode: 'FIN_ADMIN' });
    }
    const investorEmail = `replay-investor-${RUN}@one17.test`;
    let investorUser = await prisma.appUser.findUnique({ where: { email: investorEmail } });
    if (!investorUser) {
        investorUser = await prisma.appUser.create({ data: { email: investorEmail, displayName: investorEmail } });
        await rbac.assignRole({ userId: investorUser.id, roleCode: 'INVESTOR' });
    }
    try {
        await replay.ingestCsv({
            sourceCode: 'SHOULD_FAIL',
            fileName: 'x.csv',
            csvContent: 'a,b\n1,2\n',
            skipLeadingLines: 0,
            uploadedByUserId: investorUser.id,
        });
        fail('INVESTOR should not be able to ingest a replay source file');
    }
    catch {
        ok('INVESTOR correctly rejected from ingesting a replay source file (no REPLAY_HARNESS capability)');
    }
    const SOURCES = [
        { sourceCode: 'HALAL_FUND_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '04_Transactions_VALUES.csv.csv'), skip: 2 },
        { sourceCode: 'HALAL_FUND_NAV_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '18_NAV_History_VALUES.csv.csv'), skip: 2 },
        { sourceCode: 'MUDARABAH_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Private_Mudarabah', '06_Investor_Transactions_VALUES.csv.csv'), skip: 3 },
    ];
    const batchIds = new Map();
    for (const src of SOURCES) {
        const csvContent = fs.readFileSync(src.file, 'utf-8');
        const batch = await replay.ingestCsv({
            sourceCode: src.sourceCode,
            fileName: path.basename(src.file),
            csvContent,
            skipLeadingLines: src.skip,
            uploadedByUserId: user.id,
        });
        batchIds.set(src.sourceCode, batch.id);
        ok(`${src.sourceCode}: ingested ${batch.totalRows} rows from ${path.basename(src.file)}`);
        const counts = await replay.reconciliationCounts(src.sourceCode);
        console.log(`  ${counts.detail}`);
    }
    const txnCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('HALAL_FUND_TXN_HISTORY') } });
    if (txnCount === 894)
        ok(`Halal Fund transaction history: all ${txnCount} historical rows staged`);
    else
        fail(`expected 894 Halal Fund txn rows, got ${txnCount}`);
    const navCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('HALAL_FUND_NAV_HISTORY') } });
    if (navCount === 367)
        ok(`Halal Fund NAV history: all ${navCount} rows staged, including the known placeholder/instruction rows and the defective negative-NAV row at year-end — not cleaned, staged as-is`);
    else
        fail(`expected 367 NAV history rows, got ${navCount}`);
    const mudarabahCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('MUDARABAH_TXN_HISTORY') } });
    if (mudarabahCount === 1001)
        ok(`Mudarabah investor transactions (placements): all ${mudarabahCount} rows staged`);
    else
        fail(`expected 1001 Mudarabah txn rows, got ${mudarabahCount}`);
    const batchesBefore = await prisma.replayBatch.count({ where: { sourceCode: 'HALAL_FUND_NAV_HISTORY' } });
    const secondBatch = await replay.ingestCsv({
        sourceCode: 'HALAL_FUND_NAV_HISTORY',
        fileName: '18_NAV_History_VALUES.csv.csv',
        csvContent: fs.readFileSync(SOURCES[1].file, 'utf-8'),
        skipLeadingLines: 2,
        uploadedByUserId: user.id,
    });
    const batchesAfter = await prisma.replayBatch.count({ where: { sourceCode: 'HALAL_FUND_NAV_HISTORY' } });
    if (batchesAfter === batchesBefore + 1 && secondBatch.totalRows === 367) {
        ok(`re-ingesting the same workbook export creates a new batch (append-only history: ${batchesBefore} -> ${batchesAfter}), not an in-place overwrite`);
    }
    else {
        fail(`expected batch count to grow by exactly 1 (${batchesBefore} -> ${batchesBefore + 1}) with totalRows=367, got ${batchesAfter} batches, latest totalRows=${secondBatch.totalRows}`);
    }
    const allReplayBatches = await replay.listBatches();
    if (allReplayBatches.length >= 2 && allReplayBatches.every((b) => typeof b.sourceCode === 'string')) {
        ok(`listBatches() surfaces all ${allReplayBatches.length} replay batches — the new ReplayController's read backing, not a fabricated summary`);
    }
    else {
        fail(`expected listBatches() to return at least 2 real batches`, allReplayBatches.length);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — replay harness ingestion + reconciliation counts proven against the real workbook CSV history.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=replay.smoke.js.map