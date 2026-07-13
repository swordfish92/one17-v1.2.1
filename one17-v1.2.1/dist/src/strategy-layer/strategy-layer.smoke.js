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
const strategy_layer_service_1 = require("./strategy-layer.service");
const RUN = Date.now().toString().slice(-8);
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK: rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const strategyLayer = new strategy_layer_service_1.StrategyLayerService(prisma, audit, workflow, delegation);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `strat-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('sau', 'HEAD_SAU');
    await makeUser('ceo', 'MD_CEO');
    await makeUser('ceo2', 'MD_CEO');
    await makeUser('outsider', 'INVESTOR');
    const workflowInstanceIds = [];
    const statementIds = [];
    const publicationIds = [];
    const mission = await strategyLayer.proposeStatement({
        statementTypeCode: 'MISSION', content: 'To be the trusted Shariah-compliant capital partner for Nigerian growth.',
        explanation: 'Guides every product decision toward Shariah-first, client-trust outcomes.', proposedByUserId: id('sau'),
    });
    statementIds.push(mission.id);
    workflowInstanceIds.push(mission.workflowInstanceId);
    await expectReject('an outsider without STRATEGY_LAYER INITIATE cannot propose a statement', () => strategyLayer.proposeStatement({ statementTypeCode: 'VISION', content: 'x', proposedByUserId: id('outsider') }));
    await expectReject('approving without a boardResolutionRef is refused (invariant 28c)', () => strategyLayer.approveStatement({ workflowInstanceId: mission.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: '' }));
    await expectReject('the proposer (SAU) cannot approve their own proposal (maker != checker)', () => strategyLayer.approveStatement({ workflowInstanceId: mission.workflowInstanceId, approverUserId: id('sau'), boardResolutionRef: `BR-${RUN}-1` }));
    const approvedMission = await strategyLayer.approveStatement({
        workflowInstanceId: mission.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-1`,
    });
    if (approvedMission.status === 'ACTIVE' && approvedMission.boardResolutionRef === `BR-${RUN}-1`) {
        ok('MD_CEO approves the MISSION statement with a boardResolutionRef -> ACTIVE');
    }
    else {
        fail('MISSION approval did not activate as expected', approvedMission);
    }
    const mission2 = await strategyLayer.proposeStatement({
        statementTypeCode: 'MISSION', content: 'Updated mission statement.', proposedByUserId: id('sau'),
    });
    statementIds.push(mission2.id);
    workflowInstanceIds.push(mission2.workflowInstanceId);
    await strategyLayer.approveStatement({ workflowInstanceId: mission2.workflowInstanceId, approverUserId: id('ceo2'), boardResolutionRef: `BR-${RUN}-2` });
    const firstMissionAfter = await prisma.strategyStatement.findUniqueOrThrow({ where: { id: mission.id } });
    if (firstMissionAfter.status === 'SUPERSEDED')
        ok('a new MISSION approval supersedes the prior ACTIVE MISSION (singular-statement type)');
    else
        fail('prior MISSION was not superseded', firstMissionAfter);
    const value1 = await strategyLayer.proposeStatement({ statementTypeCode: 'CORE_VALUE', content: 'Integrity', proposedByUserId: id('sau') });
    const value2 = await strategyLayer.proposeStatement({ statementTypeCode: 'CORE_VALUE', content: 'Shariah Fidelity', proposedByUserId: id('sau') });
    statementIds.push(value1.id, value2.id);
    workflowInstanceIds.push(value1.workflowInstanceId, value2.workflowInstanceId);
    await strategyLayer.approveStatement({ workflowInstanceId: value1.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-3` });
    await strategyLayer.approveStatement({ workflowInstanceId: value2.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-4` });
    const activeValues = await prisma.strategyStatement.findMany({ where: { statementTypeCode: 'CORE_VALUE', status: 'ACTIVE', id: { in: [value1.id, value2.id] } } });
    if (activeValues.length === 2)
        ok('CORE_VALUE allows multiple concurrently-ACTIVE rows (a list, not a singular statement replaced each version)');
    else
        fail('expected both CORE_VALUE rows ACTIVE simultaneously', activeValues);
    const pillarBefore = await prisma.strategicPillar.findUniqueOrThrow({ where: { code: 'GROWTH' } });
    await strategyLayer.updatePillarGovernance({ pillarCode: 'GROWTH', explanation: 'Why Growth matters to every department.', boardResolutionRef: `BR-${RUN}-5`, actorUserId: id('sau') });
    const pillarAfter = await prisma.strategicPillar.findUniqueOrThrow({ where: { code: 'GROWTH' } });
    if (pillarAfter.explanation && pillarAfter.name === pillarBefore.name) {
        ok('governance text (explanation/boardResolutionRef) lands on the EXISTING strategic_pillar row (GROWTH) — the strategy layer OWNS it, does not duplicate it');
    }
    else {
        fail('pillar governance update did not land as expected', pillarAfter);
    }
    const typeCode = `TAGLINE_${RUN}`;
    await expectReject('proposing a statement of an unknown/inactive type is refused', () => strategyLayer.proposeStatement({ statementTypeCode: typeCode, content: 'x', proposedByUserId: id('sau') }));
    await strategyLayer.addStatementTypeConfig({
        code: typeCode, label: 'Tagline', description: 'A short public-facing tagline.', allowsMultipleActive: false, actorUserId: id('sau'),
    });
    const configs = await strategyLayer.listStatementTypeConfigs();
    if (configs.some((c) => c.code === typeCode))
        ok('a brand-new statement type is added as a data row (StrategyStatementTypeConfig) — no migration, no code change');
    else
        fail('new statement type config was not listed', configs);
    const tagline = await strategyLayer.proposeStatement({ statementTypeCode: typeCode, content: 'Growth you can trust.', proposedByUserId: id('sau') });
    statementIds.push(tagline.id);
    workflowInstanceIds.push(tagline.workflowInstanceId);
    await strategyLayer.approveStatement({ workflowInstanceId: tagline.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-6` });
    const taglineActive = await prisma.strategyStatement.findUniqueOrThrow({ where: { id: tagline.id } });
    if (taglineActive.status === 'ACTIVE')
        ok('the newly-added type flows through the SAME propose -> approve -> ACTIVE pipeline as the seeded types, immediately');
    else
        fail('the newly-added type did not activate through the standard pipeline', taglineActive);
    const active = await strategyLayer.getActiveStrategy();
    if (active.statements.some((s) => s.id === mission2.id) && active.pillars.some((p) => p.code === 'GROWTH')) {
        ok('getActiveStrategy() surfaces both ACTIVE statements and the pillar/objective spine together (every department consumes this read)');
    }
    else {
        fail('getActiveStrategy() did not surface expected content', active);
    }
    const publication = await strategyLayer.publish({ summary: `Q3 ${RUN} strategy refresh`, publishedByUserId: id('sau') });
    publicationIds.push(publication.id);
    await strategyLayer.acknowledge(publication.id, id('sau'));
    const status = await strategyLayer.getAcknowledgmentStatus();
    if (status?.publicationId === publication.id && status.acknowledgedCount === 1 && !status.outstanding.some((o) => o.id === id('sau'))) {
        ok('publish + acknowledge tracks SAU\'s read receipt; SAU no longer appears in the outstanding list (SAU\'s own KRA read surface)');
    }
    else {
        fail('acknowledgment status did not track as expected', status);
    }
    await strategyLayer.acknowledge(publication.id, id('sau'));
    const statusAfterReAck = await strategyLayer.getAcknowledgmentStatus();
    if (statusAfterReAck?.acknowledgedCount === 1)
        ok('re-acknowledging the same publication is idempotent (no duplicate count)');
    else
        fail('re-acknowledgment produced an unexpected count', statusAfterReAck);
    const pillarCode = `SMOKE_PILLAR_${RUN}`;
    const objectiveCode = `SMOKE_OBJ_${RUN}`;
    await expectReject('an outsider cannot propose a new pillar', () => strategyLayer.proposePillar({ code: pillarCode, name: 'Smoke Pillar', proposedByUserId: id('outsider') }));
    const pillarProposal = await strategyLayer.proposePillar({ code: pillarCode, name: 'Smoke Pillar', description: 'A smoke-test pillar.', proposedByUserId: id('sau') });
    workflowInstanceIds.push(pillarProposal.workflowInstanceId);
    if (pillarProposal.status === 'DRAFT')
        ok('proposePillar creates a DRAFT row, workflow initiated');
    else
        fail('proposePillar did not create the expected DRAFT row', pillarProposal);
    await expectReject('approving a pillar without a boardResolutionRef is refused', () => strategyLayer.approvePillar({ workflowInstanceId: pillarProposal.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: '' }));
    await expectReject('the proposer (SAU) cannot approve their own pillar proposal (maker != checker)', () => strategyLayer.approvePillar({ workflowInstanceId: pillarProposal.workflowInstanceId, approverUserId: id('sau'), boardResolutionRef: `BR-${RUN}-7` }));
    const approvedPillar = await strategyLayer.approvePillar({ workflowInstanceId: pillarProposal.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-7` });
    if (approvedPillar?.status === 'ACTIVE')
        ok('MD_CEO approves the new pillar with a boardResolutionRef -> ACTIVE');
    else
        fail('pillar approval did not activate as expected', approvedPillar);
    await expectReject('proposing an objective under a nonexistent pillar is refused', () => strategyLayer.proposeObjective({ code: objectiveCode, name: 'Smoke Objective', pillarCode: `NONEXISTENT_${RUN}`, proposedByUserId: id('sau') }));
    const objectiveProposal = await strategyLayer.proposeObjective({ code: objectiveCode, name: 'Smoke Objective', pillarCode, explanation: 'A smoke-test objective.', proposedByUserId: id('sau') });
    workflowInstanceIds.push(objectiveProposal.workflowInstanceId);
    const joinRow = await prisma.pillarObjectiveMap.findUnique({ where: { pillarCode_objectiveCode: { pillarCode, objectiveCode } } });
    if (objectiveProposal.status === 'DRAFT' && joinRow)
        ok('proposeObjective creates a DRAFT row AND its PillarObjectiveMap join row atomically');
    else
        fail('proposeObjective did not create the expected row/join', { objectiveProposal, joinRow });
    const approvedObjective = await strategyLayer.approveObjective({ workflowInstanceId: objectiveProposal.workflowInstanceId, approverUserId: id('ceo'), boardResolutionRef: `BR-${RUN}-8` });
    if (approvedObjective?.status === 'ACTIVE')
        ok('MD_CEO approves the new objective -> ACTIVE');
    else
        fail('objective approval did not activate as expected', approvedObjective);
    const someKra = await prisma.enterpriseKra.findFirstOrThrow();
    await expectReject('an outsider cannot map a KRA to an objective', () => strategyLayer.mapKraToObjective({ kraCode: someKra.code, objectiveCode, actorUserId: id('outsider') }));
    await strategyLayer.mapKraToObjective({ kraCode: someKra.code, objectiveCode, actorUserId: id('sau') });
    const kraMap = await strategyLayer.listKraObjectiveMap();
    if (kraMap.some((m) => m.kraCode === someKra.code && m.objectiveCode === objectiveCode)) {
        ok('mapKraToObjective creates the join row, visible via listKraObjectiveMap');
    }
    else {
        fail('KRA<->objective mapping was not created as expected', kraMap);
    }
    await expectReject('mapping the same KRA<->objective pair twice is refused (unique constraint)', () => strategyLayer.mapKraToObjective({ kraCode: someKra.code, objectiveCode, actorUserId: id('sau') }));
    await strategyLayer.unmapKraFromObjective(someKra.code, objectiveCode, id('sau'));
    const kraMapAfterUnmap = await strategyLayer.listKraObjectiveMap();
    if (!kraMapAfterUnmap.some((m) => m.kraCode === someKra.code && m.objectiveCode === objectiveCode)) {
        ok('unmapKraFromObjective removes the join row');
    }
    else {
        fail('KRA<->objective mapping was not removed as expected', kraMapAfterUnmap);
    }
    await prisma.pillarObjectiveMap.deleteMany({ where: { pillarCode } });
    await prisma.strategicObjective.deleteMany({ where: { code: objectiveCode } });
    await prisma.strategicPillar.deleteMany({ where: { code: pillarCode } });
    await prisma.strategyAcknowledgment.deleteMany({ where: { publicationId: { in: publicationIds } } });
    await prisma.strategyPublication.deleteMany({ where: { id: { in: publicationIds } } });
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
    await prisma.strategyStatement.deleteMany({ where: { id: { in: statementIds } } });
    await prisma.strategyStatementTypeConfig.delete({ where: { code: typeCode } });
    await prisma.strategicPillar.update({ where: { code: 'GROWTH' }, data: { explanation: null, boardResolutionRef: null } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — Strategy layer (CHECK5 item 5e) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=strategy-layer.smoke.js.map