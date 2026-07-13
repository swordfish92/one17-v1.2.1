"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const risk_service_1 = require("./risk.service");
const risk_types_1 = require("./risk.types");
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK (rejected as expected): ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function expectSucceed(label, fn) {
    try {
        const result = await fn();
        console.log(`OK (succeeded as expected): ${label}`);
        return result;
    }
    catch (err) {
        console.error(`FAIL (expected success): ${label}`, err);
        process.exitCode = 1;
        return undefined;
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const risk = new risk_service_1.RiskService(prisma, audit, delegation, workflow);
    const RUN = Date.now();
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `risk-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({
            data: { email, displayName: email },
        });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('admin', 'SUPER_ADMIN');
    await makeUser('ceo', 'MD_CEO');
    await makeUser('investor', 'INVESTOR');
    const beforeAnyApproval = await risk.getActiveMatrix();
    if (beforeAnyApproval.status === 'AWAITING_APPROVED_MATRIX') {
        console.log('OK: getActiveMatrix() returns AWAITING_APPROVED_MATRIX — no fake green before Board approval');
    }
    else {
        console.log(`INFO: an ACTIVE version (${beforeAnyApproval.version}) already exists from a prior run of this smoke test — the gate opened once already, as designed. Skipping the fresh-DB assertion.`);
    }
    const seededV1 = await prisma.riskAppetiteMatrixVersion.findUniqueOrThrow({
        where: { version: 1 },
        include: { categories: { orderBy: { sortOrder: 'asc' } } },
    });
    console.log(seededV1.categories.length === 13 && seededV1.status === 'DRAFT'
        ? 'OK: seeded version 1 has 13 categories (12 numbered + DQ-10 orphan), status DRAFT'
        : `FAIL: expected 13 DRAFT categories, got ${seededV1.categories.length} (${seededV1.status})`);
    const anyNumericPopulated = seededV1.categories.some((c) => c.greenThreshold !== null ||
        c.amberThreshold !== null ||
        c.redThreshold !== null);
    console.log(!anyNumericPopulated
        ? 'OK: no numeric thresholds populated in the seeded version — awaiting Board entry (AMD-12 rule 5)'
        : 'FAIL: seeded version should not carry any numeric thresholds yet');
    if (anyNumericPopulated)
        process.exitCode = 1;
    await expectReject('non-SUPER_ADMIN (INVESTOR) cannot propose a risk appetite matrix version', () => risk.proposeMatrixVersion({
        proposedByUserId: id('investor'),
        cloneFromVersionId: seededV1.id,
    }));
    const proposal = await expectSucceed('SUPER_ADMIN proposes version 2, cloned from the seeded v1', () => risk.proposeMatrixVersion({
        proposedByUserId: id('admin'),
        cloneFromVersionId: seededV1.id,
    }));
    if (proposal) {
        const v2Categories = await prisma.riskAppetiteCategory.findMany({
            where: { matrixVersionId: proposal.matrixVersion.id },
            orderBy: { sortOrder: 'asc' },
        });
        console.log(v2Categories.length === 13
            ? 'OK: version 2 cloned all 13 categories from v1'
            : `FAIL: expected 13 cloned categories, got ${v2Categories.length}`);
        const strategic = v2Categories.find((c) => c.sortOrder === 1);
        await expectReject('service rejects non-monotonic thresholds for a Higher=Better category', () => risk.updateCategoryThresholds({
            matrixVersionId: proposal.matrixVersion.id,
            sortOrder: 1,
            greenThreshold: 60,
            amberThreshold: 80,
            redThreshold: 40,
            actorUserId: id('admin'),
        }));
        await expectSucceed('service accepts monotonic thresholds (Higher=Better: green > amber > red)', () => risk.updateCategoryThresholds({
            matrixVersionId: proposal.matrixVersion.id,
            sortOrder: 1,
            greenThreshold: 80,
            amberThreshold: 60,
            redThreshold: 40,
            actorUserId: id('admin'),
        }));
        await expectReject('DB CHECK rejects non-monotonic thresholds (service bypassed)', () => prisma.riskAppetiteCategory.update({
            where: { id: strategic.id },
            data: { greenThreshold: 40, amberThreshold: 60, redThreshold: 80 },
        }));
        const shariah = v2Categories.find((c) => c.riskCategory === 'Compliance — Shariah');
        await expectSucceed('zero-tolerance category accepts G=0/R>=1 even though not strictly monotonic', () => prisma.riskAppetiteCategory.update({
            where: { id: shariah.id },
            data: { greenThreshold: 0, amberThreshold: 0, redThreshold: 1 },
        }));
        await expectReject('proposer cannot approve their own risk appetite matrix version (maker≠checker)', () => risk.approveMatrixVersion({
            workflowInstanceId: proposal.workflowInstance.id,
            approverUserId: id('admin'),
            boardResolutionRef: 'BOARD-RES-2026-030',
        }));
        await expectReject('AMD-12 rule 3: approval without a boardResolutionRef is rejected', () => risk.approveMatrixVersion({
            workflowInstanceId: proposal.workflowInstance.id,
            approverUserId: id('ceo'),
            boardResolutionRef: '',
        }));
        const proposedVersion = proposal.matrixVersion.version;
        await expectSucceed(`MD_CEO approves WITH a boardResolutionRef — version ${proposedVersion} goes ACTIVE`, () => risk.approveMatrixVersion({
            workflowInstanceId: proposal.workflowInstance.id,
            approverUserId: id('ceo'),
            boardResolutionRef: 'BOARD-RES-2026-030',
        }));
        const afterApproval = await risk.getActiveMatrix();
        console.log(afterApproval.status === 'ACTIVE' &&
            afterApproval.version === proposedVersion
            ? `OK: getActiveMatrix() now returns version ${proposedVersion} as ACTIVE — the gate opens only after Board approval`
            : `FAIL: expected ACTIVE version ${proposedVersion}, got ${JSON.stringify(afterApproval)}`);
        if (!(afterApproval.status === 'ACTIVE' &&
            afterApproval.version === proposedVersion)) {
            process.exitCode = 1;
        }
        const v1Reloaded = await prisma.riskAppetiteMatrixVersion.findUniqueOrThrow({ where: { id: seededV1.id } });
        console.log(v1Reloaded.status === 'DRAFT'
            ? 'OK: version 1 remains DRAFT (never itself approved, only cloned from)'
            : `FAIL: expected v1 to stay DRAFT, got ${v1Reloaded.status}`);
    }
    const draftEntry = await prisma.riskRegisterEntry.findFirstOrThrow({
        where: { status: 'DRAFT' },
    });
    await expectReject('non-MD_CEO (INVESTOR) cannot approve a risk register entry', () => risk.approveRiskRegisterEntry({
        id: draftEntry.id,
        approverUserId: id('investor'),
    }));
    await expectSucceed('MD_CEO approves a risk register entry', () => risk.approveRiskRegisterEntry({
        id: draftEntry.id,
        approverUserId: id('ceo'),
        boardResolutionRef: 'BOARD-RES-2026-031',
    }));
    const reloaded = await prisma.riskRegisterEntry.findUniqueOrThrow({
        where: { id: draftEntry.id },
    });
    console.log(reloaded.status === 'ACTIVE'
        ? 'OK: risk register entry flipped DRAFT -> ACTIVE'
        : `FAIL: expected ACTIVE, got ${reloaded.status}`);
    await prisma.riskRegisterEntry.update({
        where: { id: draftEntry.id },
        data: { status: 'DRAFT', approvedByUserId: null, boardResolutionRef: null },
    });
    await prisma.$disconnect();
}
main().catch((err) => {
    if (err instanceof risk_types_1.RiskLifecycleError) {
        console.error('Unhandled RiskLifecycleError:', err.message);
    }
    else {
        console.error(err);
    }
    process.exitCode = 1;
});
//# sourceMappingURL=risk.smoke.js.map