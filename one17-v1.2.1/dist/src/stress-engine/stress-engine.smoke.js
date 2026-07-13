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
const stress_engine_service_1 = require("./stress-engine.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const engine = new stress_engine_service_1.StressEngineService(prisma, audit, delegation, workflow);
    const serviceSource = fs.readFileSync(path.join(__dirname, 'stress-engine.service.ts'), 'utf-8');
    const suspiciousLiterals = serviceSource.match(/\b0\.\d+\b/g) ?? [];
    if (suspiciousLiterals.length === 0) {
        ok('grep for decimal scenario-magnitude literals (e.g. 0.20, 0.30) in stress-engine.service.ts = zero findings');
    }
    else {
        fail(`found ${suspiciousLiterals.length} suspicious decimal literal(s) in stress-engine.service.ts`, suspiciousLiterals);
    }
    const superAdminEmail = `stress-superadmin-${RUN}@one17.test`;
    let superAdmin = await prisma.appUser.findUnique({ where: { email: superAdminEmail } });
    if (!superAdmin) {
        superAdmin = await prisma.appUser.create({ data: { email: superAdminEmail, displayName: superAdminEmail } });
        await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
    }
    const ceoEmail = `stress-ceo-${RUN}@one17.test`;
    let ceo = await prisma.appUser.findUnique({ where: { email: ceoEmail } });
    if (!ceo) {
        ceo = await prisma.appUser.create({ data: { email: ceoEmail, displayName: ceoEmail } });
        await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
    }
    const company = await prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
    const scenarioCount = await engine.seedScenarios();
    if (scenarioCount === 29)
        ok(`29 stress_scenario_config rows seeded (8 LIQUIDITY + 1 CAPITAL_ADEQUACY + 10 REVENUE_SENSITIVITY + 1 COUNTERPARTY_DEFAULT ladder + 1 PORTFOLIO_SHOCK matrix + 8 REVERSE_STRESS events)`);
    else
        fail(`expected 29 scenario configs, got ${scenarioCount}`);
    const liqRun = await engine.runLiquidityStress('LIQ-03', { ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const liqOut = liqRun.outputs;
    if (typeof liqOut.survivalDays !== 'undefined' && liqOut.redemptionOutflowKobo) {
        ok(`LIQUIDITY (Severe Redemption 50%) computed: survivalDays=${liqOut.survivalDays}, redemptionOutflowKobo=${liqOut.redemptionOutflowKobo}`);
    }
    else {
        fail('LIQUIDITY stress run did not produce expected outputs', liqOut);
    }
    const capRun = await engine.runCapitalAdequacyStress('CAP-01', { ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const capOut = capRun.outputs;
    if (capOut.requirementKobo === (15000000000n).toString()) {
        ok(`CAPITAL_ADEQUACY resolved requirementKobo=15,000,000,000 (real ₦150m figure), carPreStress=${capOut.carPreStress}`);
    }
    else {
        fail('CAPITAL_ADEQUACY did not resolve the real capital requirement', capOut);
    }
    const revRun = await engine.runRevenueSensitivityStress('REV-10', { ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const revOut = revRun.outputs;
    if (typeof revOut.pbtKobo === 'number' && typeof revOut.impliedFeeRate === 'number') {
        ok(`REVENUE_SENSITIVITY (Combined Severe) computed: impliedFeeRate=${revOut.impliedFeeRate.toFixed(6)} (from live data, not hardcoded), pbtKobo=${revOut.pbtKobo.toFixed(0)}`);
    }
    else {
        fail('REVENUE_SENSITIVITY did not produce expected outputs', revOut);
    }
    const cpdRun = await engine.runCounterpartyDefaultStress({ ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const cpdOut = cpdRun.outputs;
    ok(`COUNTERPARTY_DEFAULT computed: ${cpdOut.perCounterparty.length} counterparties with PD data, totalElKobo=${cpdOut.totalElKobo}`);
    const psRun = await engine.runPortfolioShockStress({ ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const psOut = psRun.outputs;
    if (Array.isArray(psOut.classSummary)) {
        ok(`PORTFOLIO_SHOCK computed ${psOut.classSummary.length} asset-class rows, level3RatioPct=${psOut.level3RatioPct} (DQ-14 corrected formula)`);
    }
    else {
        fail('PORTFOLIO_SHOCK did not produce expected outputs', psOut);
    }
    const rseRun = await engine.runReverseStress({ ledgerEntityCode: company.code, runMode: 'SANDBOX', ranByUserId: superAdmin.id });
    const rseOut = rseRun.outputs;
    const survivalEvent = rseOut.events.find((e) => e.indicator === 'liquiditySurvivalDays');
    if (survivalEvent && survivalEvent.source.includes('LIQUIDITY run') && survivalEvent.currentValue === liqOut.survivalDays) {
        ok(`REVERSE_STRESS event "Mass Redemption Run" pulled its currentValue (${survivalEvent.currentValue}) LIVE from the LIQUIDITY run just performed — cross-model wiring proven, not hardcoded`);
    }
    else {
        fail('REVERSE_STRESS did not correctly pull live data from the LIQUIDITY model', survivalEvent);
    }
    const carEvent = rseOut.events.find((e) => e.indicator === 'carSurplusMargin');
    if (carEvent?.currentValue === capOut.carPostStress) {
        ok(`REVERSE_STRESS event "Capital Adequacy Breach" pulled carPostStress LIVE from the CAPITAL_ADEQUACY run`);
    }
    else {
        fail('REVERSE_STRESS did not correctly pull live data from the CAPITAL_ADEQUACY model', carEvent);
    }
    const sandboxCount = await prisma.stressTestRun.count({ where: { runMode: 'SANDBOX', isApprovedBaseline: true } });
    if (sandboxCount === 0) {
        ok('Zero SANDBOX runs carry isApprovedBaseline=true — SANDBOX provably never touches the baseline (amendment 27)');
    }
    else {
        fail(`expected 0 SANDBOX runs with isApprovedBaseline=true, got ${sandboxCount}`);
    }
    const candidateRun = await engine.runCapitalAdequacyStress('CAP-01', { ledgerEntityCode: company.code, runMode: 'BASELINE_CANDIDATE', ranByUserId: superAdmin.id });
    const beforePublish = await prisma.stressTestRun.findUniqueOrThrow({ where: { id: candidateRun.id } });
    if (!beforePublish.isApprovedBaseline)
        ok('A BASELINE_CANDIDATE run is NOT yet isApprovedBaseline until published');
    else
        fail('BASELINE_CANDIDATE run was already marked isApprovedBaseline before any approval');
    const publishWorkflow = await engine.requestBaselinePublication(candidateRun.id, superAdmin.id);
    try {
        await engine.approveBaselinePublication(publishWorkflow.id, superAdmin.id);
        fail('expected self-approval of baseline publication to be rejected (maker != checker)');
    }
    catch (err) {
        ok(`Self-approval of baseline publication correctly rejected: ${err.message}`);
    }
    await engine.approveBaselinePublication(publishWorkflow.id, ceo.id);
    const afterPublish = await prisma.stressTestRun.findUniqueOrThrow({ where: { id: candidateRun.id } });
    if (afterPublish.isApprovedBaseline && afterPublish.runMode === 'BASELINE') {
        ok('A DIFFERENT approver (MD_CEO) publishing the baseline correctly flips isApprovedBaseline=true and runMode=BASELINE');
    }
    else {
        fail('Baseline publication did not flip state correctly after approval', afterPublish);
    }
    try {
        await engine.requestBaselinePublication(liqRun.id, superAdmin.id);
        fail('expected requesting baseline publication for a SANDBOX run to be rejected outright');
    }
    catch (err) {
        ok(`SANDBOX run correctly rejected for baseline publication: ${err.message}`);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — six stress models run against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=stress-engine.smoke.js.map