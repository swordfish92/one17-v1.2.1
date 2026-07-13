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
const investor_contact_amendment_service_1 = require("./investor-contact-amendment.service");
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
    const amendment = new investor_contact_amendment_service_1.InvestorContactAmendmentService(prisma, audit, delegation, workflow);
    const bd = await prisma.appUser.create({ data: { email: `ica-bd-${RUN}@one17.test`, displayName: 'ica-bd' } });
    await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
    const compliance = await prisma.appUser.create({ data: { email: `ica-compliance-${RUN}@one17.test`, displayName: 'ica-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const outsider = await prisma.appUser.create({ data: { email: `ica-outsider-${RUN}@one17.test`, displayName: 'ica-outsider' } });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-ICA-INV-${RUN}`, fullLegalName: 'Smoke ICA Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-ICA-${RUN}`, contactEmail: `ica-inv-${RUN}@one17.test`,
            contactPhone: '+2340000000040', registeredAddress: 'Original address', sourceOfFunds: 'Business income',
            onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    const otherInvestor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-ICA-OTHER-${RUN}`, fullLegalName: 'Smoke ICA Other', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `ica-other-${RUN}@one17.test`, contactPhone: '+2340000000041',
            onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    await expectReject('outsider cannot propose a contact amendment', () => amendment.requestAmendment({ investorId: investor.investorId, proposedContactPhone: '+2340000000099', requestedByUserId: outsider.id }));
    await expectReject('empty proposal (no fields) is refused', () => amendment.requestAmendment({ investorId: investor.investorId, requestedByUserId: bd.id }));
    await expectReject('proposing an email already in use by another investor is refused', () => amendment.requestAmendment({ investorId: investor.investorId, proposedContactEmail: otherInvestor.contactEmail, requestedByUserId: bd.id }));
    const newPhone = '+2340000000050';
    const newAddress = 'New registered address, Lagos';
    const request = await amendment.requestAmendment({
        investorId: investor.investorId, proposedContactPhone: newPhone, proposedRegisteredAddress: newAddress, requestedByUserId: bd.id,
    });
    if (request.status === 'PENDING' && request.workflowInstanceId)
        ok('requestAmendment creates a PENDING request, workflow initiated');
    else
        fail('requestAmendment did not create the expected PENDING row', request);
    await expectReject('BD cannot approve their own contact amendment', () => amendment.decideAmendment(request.workflowInstanceId, bd.id, 'APPROVE'));
    const originalEmail = investor.contactEmail;
    const approved = await amendment.decideAmendment(request.workflowInstanceId, compliance.id, 'APPROVE');
    const investorAfter = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
    if (approved.status === 'APPROVED' && investorAfter.contactPhone === newPhone && investorAfter.registeredAddress === newAddress && investorAfter.contactEmail === originalEmail) {
        ok('approved amendment applies ONLY the proposed fields (phone + address) -- contactEmail (not proposed) stays unchanged');
    }
    else {
        fail('amendment did not apply the truthy-patch as expected', { approved, investorAfter });
    }
    const request2 = await amendment.requestAmendment({ investorId: investor.investorId, proposedContactEmail: `ica-newemail-${RUN}@one17.test`, requestedByUserId: bd.id });
    await prisma.investor.update({ where: { investorId: otherInvestor.investorId }, data: { contactEmail: `ica-newemail-${RUN}@one17.test` } });
    await expectReject('decide-time re-check refuses an email that was taken after the request was submitted (TOCTOU close)', () => amendment.decideAmendment(request2.workflowInstanceId, compliance.id, 'APPROVE'));
    await prisma.investor.update({ where: { investorId: otherInvestor.investorId }, data: { contactEmail: `ica-other-${RUN}@one17.test` } });
    const request3 = await amendment.requestAmendment({ investorId: investor.investorId, proposedSourceOfFunds: 'Inheritance', requestedByUserId: bd.id });
    const rejected = await amendment.decideAmendment(request3.workflowInstanceId, compliance.id, 'REJECT', 'Needs supporting documentation first.');
    const investorAfterReject = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
    if (rejected.status === 'REJECTED' && investorAfterReject.sourceOfFunds !== 'Inheritance')
        ok('rejected amendment never applies to the investor record');
    else
        fail('reject path left unexpected state', { rejected, investorAfterReject });
    await prisma.investorContactAmendmentRequest.deleteMany({ where: { investorId: { in: [investor.investorId, otherInvestor.investorId] } } });
    const wfIds = [request.workflowInstanceId, request2.workflowInstanceId, request3.workflowInstanceId].filter((id) => !!id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: [investor.investorId, otherInvestor.investorId] } } });
    const userIds = [bd.id, compliance.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — investor contact/KYC-data amendment flow (invariant 51a-ii) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor-contact-amendment.smoke.js.map