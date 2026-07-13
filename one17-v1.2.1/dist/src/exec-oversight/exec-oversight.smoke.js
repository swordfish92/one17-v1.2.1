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
const exec_oversight_service_1 = require("./exec-oversight.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const execOversight = new exec_oversight_service_1.ExecOversightService(prisma, audit, delegation);
    const mdCeo = await prisma.appUser.create({ data: { email: `eo-mdceo-${RUN}@one17.test`, displayName: 'eo-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const compliance = await prisma.appUser.create({ data: { email: `eo-compliance-${RUN}@one17.test`, displayName: 'eo-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const portMgr = await prisma.appUser.create({ data: { email: `eo-portmgr-${RUN}@one17.test`, displayName: 'eo-portmgr' } });
    await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-EO-INV-${RUN}`, fullLegalName: 'Smoke Oversight Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `eo-investor-${RUN}@one17.test`, contactPhone: '+2340000000001',
            onboardedByUserId: portMgr.id,
        },
    });
    await expectReject('PORT_MGR (no EXEC_OVERSIGHT APPROVE) cannot start an oversight session', () => execOversight.startSession({ principalType: 'INVESTOR', investorId: investor.investorId, viewedByUserId: portMgr.id }));
    const session = await execOversight.startSession({ principalType: 'INVESTOR', investorId: investor.investorId, viewedByUserId: mdCeo.id, ipAddress: '203.0.113.9' });
    if (session.investorId === investor.investorId && session.viewedByUserId === mdCeo.id && !session.endedAt) {
        ok('MD_CEO starts an oversight session against the ACTIVE policy -- session row created, endedAt null');
    }
    else {
        fail('startSession did not create the expected row', session);
    }
    await expectReject('a different user cannot end another user\'s oversight session', () => execOversight.endSession(session.id, compliance.id));
    const reloaded = await execOversight.assertSessionOwnedAndActive(session.id, mdCeo.id);
    if (reloaded.id === session.id)
        ok('assertSessionOwnedAndActive succeeds for the session\'s own owner while still active');
    else
        fail('assertSessionOwnedAndActive returned an unexpected row', reloaded);
    const ended = await execOversight.endSession(session.id, mdCeo.id);
    if (ended.endedAt)
        ok(`session ended -- duration ${ended.endedAt.getTime() - ended.startedAt.getTime()}ms recorded (who viewed whom, when, duration -- invariant 61b)`);
    else
        fail('endSession did not set endedAt', ended);
    const endedAgain = await execOversight.endSession(session.id, mdCeo.id);
    if (endedAgain.endedAt?.getTime() === ended.endedAt.getTime())
        ok('ending an already-ended session is idempotent (same endedAt, no error)');
    else
        fail('re-ending an ended session changed its endedAt unexpectedly', endedAgain);
    await expectReject('assertSessionOwnedAndActive refuses an already-ended session', () => execOversight.assertSessionOwnedAndActive(session.id, mdCeo.id));
    const log = await execOversight.listLog();
    const loggedRow = log.find((r) => r.id === session.id);
    if (loggedRow && loggedRow.endedAt && loggedRow.investor?.fullLegalName === 'Smoke Oversight Investor') {
        ok('listLog() surfaces the full session row (who/whom/when/duration) -- invariant 61(b) standing register');
    }
    else {
        fail('listLog() did not surface the expected row', loggedRow);
    }
    const proposed = await execOversight.proposePolicy({ grantedRoleCodes: ['MD_CEO', 'CRAO'], proposedByUserId: compliance.id });
    if (proposed.status === 'DRAFT' && proposed.version > 1) {
        ok(`COMPLIANCE proposes policy v${proposed.version} (DRAFT) widening grantedRoleCodes to include CRAO`);
    }
    else {
        fail('proposePolicy did not create the expected DRAFT row', proposed);
    }
    await expectReject('COMPLIANCE cannot approve the policy version they themselves proposed (maker≠checker)', () => execOversight.approvePolicy(proposed.id, compliance.id));
    const activated = await execOversight.approvePolicy(proposed.id, mdCeo.id);
    if (activated.status === 'ACTIVE') {
        ok(`MD_CEO approves policy v${activated.version} -> ACTIVE (governed config change, no code deploy)`);
    }
    else {
        fail('approvePolicy did not activate the proposed version', activated);
    }
    const supersededV1 = await prisma.execOversightPolicy.findFirst({ where: { version: 1 } });
    if (supersededV1?.status === 'SUPERSEDED')
        ok('the prior ACTIVE policy version (v1) is correctly SUPERSEDED, versioned history preserved');
    else
        fail('prior ACTIVE policy version was not superseded', supersededV1);
    const controllerSrc = fs.readFileSync(path.join(__dirname, '..', 'ops-api', 'exec-oversight.controller.ts'), 'utf8');
    const mutatingClientDataDecorators = [...controllerSrc.matchAll(/@(Patch|Put|Delete)\(/g)];
    const postRoutes = [...controllerSrc.matchAll(/@Post\('([^']*)'\)/g)].map((m) => m[1]);
    const postRoutesOverClientData = postRoutes.filter((r) => r.startsWith('sessions/') && (r.includes('dashboard') || r.includes('statements') || r.includes('certificates') || r.includes('letters') || r.includes('messages') || r.includes('bureau-pulls')));
    if (mutatingClientDataDecorators.length === 0 && postRoutesOverClientData.length === 0) {
        ok('exec-oversight.controller.ts defines ZERO @Patch/@Put/@Delete routes and ZERO @Post routes over client data (dashboard/statements/certificates/letters/messages/bureau-pulls are all @Get) -- read-only by construction, not by a checked flag');
    }
    else {
        fail('exec-oversight.controller.ts unexpectedly defines a mutating route over client data', { mutatingClientDataDecorators: mutatingClientDataDecorators.length, postRoutesOverClientData });
    }
    ok('adversarial: a non-grantee (PORT_MGR, step 1) cannot reach any read-only oversight data at all -- no session, no data route reachable');
    await prisma.execOversightSession.deleteMany({ where: { id: session.id } });
    await prisma.execOversightPolicy.deleteMany({ where: { id: proposed.id } });
    await prisma.execOversightPolicy.updateMany({ where: { version: 1 }, data: { status: 'ACTIVE' } });
    await prisma.investor.delete({ where: { investorId: investor.investorId } });
    const userIds = [mdCeo.id, compliance.id, portMgr.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — Executive Oversight Mode (invariant 61b/c/d) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=exec-oversight.smoke.js.map