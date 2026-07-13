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
const document_service_1 = require("../document/document.service");
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("./investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
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
const FULL_CHECKLIST = [
    { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
    { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
    { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
    { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
    { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
    { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const RUN = Date.now();
    const emailFor = (name) => `inv-${name}-${RUN}@one17.test`;
    const users = new Map();
    const makeUser = async (email, roleCode) => {
        const user = await prisma.appUser.create({
            data: { email, displayName: email },
        });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(email, user);
        return user;
    };
    const id = (email) => users.get(email).id;
    await makeUser(emailFor('finadmin'), 'FIN_ADMIN');
    await makeUser(emailFor('compliance'), 'COMPLIANCE');
    await makeUser(emailFor('ceo'), 'MD_CEO');
    await makeUser(emailFor('ceo-deputy'), 'MD_CEO');
    await makeUser(emailFor('compliance-senior'), 'COMPLIANCE');
    await makeUser(emailFor('portmgr'), 'PORT_MGR');
    await makeUser(emailFor('shariah'), 'SHARIAH_REV');
    const investorIdsCreated = [];
    const mandateInvestorIds = [];
    const workflowInstanceIds = [];
    const delegationIds = [];
    const investor1 = await expectSucceed('onboard investor 1 (UNRESTRICTED path)', () => investors.onboard({
        fullLegalName: 'Amina Yusuf',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0001',
        contactEmail: `amina.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000001',
        registeredAddress: '1 Smoke Test Close, Abuja',
        sourceOfFunds: 'Salary income',
        onboardedByUserId: id(emailFor('finadmin')),
    }));
    if (investor1)
        investorIdsCreated.push(investor1.investorId);
    if (investor1) {
        await expectReject('KYC submission blocked without an AML risk rating (Onboarding Design Stage 5)', () => investors.submitForKycApproval(investor1.investorId, id(emailFor('finadmin'))));
        await expectSucceed('set investor 1 AML risk rating to HIGH (1-year KYC tier)', () => investors.setAmlRiskRating(investor1.investorId, 'HIGH', id(emailFor('finadmin'))));
        await expectReject('KYC submission blocked without any screening record', () => investors.submitForKycApproval(investor1.investorId, id(emailFor('finadmin'))));
        await expectReject('Manual Screening Procedure §3: incomplete checklist (missing PEP + adverse media) is rejected', () => investors.recordScreening({
            investorId: investor1.investorId,
            listsChecked: FULL_CHECKLIST.filter((c) => c.itemCode !== 'PEP_DETERMINATION' &&
                c.itemCode !== 'ADVERSE_MEDIA'),
            searchTermsUsed: 'Amina Yusuf',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('compliance')),
        }));
        await expectSucceed('COMPLIANCE (different person) records NO_MATCH screening (full checklist)', () => investors.recordScreening({
            investorId: investor1.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Amina Yusuf',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('compliance')),
        }));
        const onboardingWf = await expectSucceed('submit investor 1 for KYC approval', () => investors.submitForKycApproval(investor1.investorId, id(emailFor('finadmin'))));
        if (onboardingWf) {
            workflowInstanceIds.push(onboardingWf.id);
            const kycApproved = await expectSucceed('COMPLIANCE approves KYC (maker≠checker via engine)', () => investors.approveKyc(onboardingWf.id, id(emailFor('compliance'))));
            if (kycApproved?.kycStatus !== 'KYC_COMPLETE') {
                console.error('FAIL: expected kycStatus KYC_COMPLETE');
                process.exitCode = 1;
            }
        }
        await expectReject('AMD-01: service rejects ratios on a non-DIRECT_DEAL mandate', () => investors.setupMandate({
            investorId: investor1.investorId,
            mandateType: 'UNRESTRICTED',
            targetReturnRate: 0.15,
            investorBaseRatio: 0.6,
            mudaribBaseRatio: 0.4,
            effectiveDate: new Date(),
            approvedByUserId: id(emailFor('portmgr')),
        }));
        await expectReject('AMD-01: database CHECK also rejects it (service bypassed)', () => prisma.investorMandate.create({
            data: {
                investorId: investor1.investorId,
                mandateType: 'UNRESTRICTED',
                targetReturnRate: 0.15,
                investorBaseRatio: 0.6,
                mudaribBaseRatio: 0.4,
                effectiveDate: new Date(),
                approvedByUserId: id(emailFor('portmgr')),
            },
        }));
        await expectSucceed('setup UNRESTRICTED mandate (no ratios)', () => investors.setupMandate({
            investorId: investor1.investorId,
            mandateType: 'UNRESTRICTED',
            targetReturnRate: 0.15,
            effectiveDate: new Date(),
            approvedByUserId: id(emailFor('portmgr')),
        }));
        mandateInvestorIds.push(investor1.investorId);
        await expectReject('UNRESTRICTED mandate does not need/accept a Shariah review request', () => investors.requestMandateShariahReview(investor1.investorId, id(emailFor('finadmin'))));
        await expectSucceed('activate investor 1 (UNRESTRICTED — no Shariah gate)', () => investors.activate(investor1.investorId));
        await expectReject('SRS §4.1.4: re-activating an already-ACTIVE investor is rejected (forward-only transitions)', () => investors.activate(investor1.investorId));
        const alertsWide = await prisma.investor.count({
            where: { investorId: investor1.investorId },
        });
        const dueSoon = await investors.kycExpiryAlerts(400);
        const dueImmediately = await investors.kycExpiryAlerts(1);
        if (alertsWide === 1 &&
            dueSoon.some((i) => i.investorId === investor1.investorId) &&
            !dueImmediately.some((i) => i.investorId === investor1.investorId)) {
            console.log('OK: kycExpiryAlerts(400) finds the 1-year-out expiry; kycExpiryAlerts(1) does not');
        }
        else {
            console.error('FAIL: kycExpiryAlerts window behavior unexpected');
            process.exitCode = 1;
        }
    }
    const investor2 = await expectSucceed('onboard investor 2 (self-screening test)', () => investors.onboard({
        fullLegalName: 'Chinedu Okafor',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0002',
        contactEmail: `chinedu.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000002',
        registeredAddress: '2 Smoke Test Close, Abuja',
        sourceOfFunds: 'Business income',
        onboardedByUserId: id(emailFor('finadmin')),
    }));
    if (investor2) {
        investorIdsCreated.push(investor2.investorId);
        await expectReject('same person onboarded AND screens, no countersigner — rejected', () => investors.recordScreening({
            investorId: investor2.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Chinedu Okafor',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('finadmin')),
        }));
        await expectReject('same-person screening with a non-MD_CEO countersigner — rejected', () => investors.recordScreening({
            investorId: investor2.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Chinedu Okafor',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('finadmin')),
            countersignerUserId: id(emailFor('portmgr')),
        }));
        await expectSucceed('same-person screening WITH an MD_CEO countersigner — succeeds', () => investors.recordScreening({
            investorId: investor2.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Chinedu Okafor',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('finadmin')),
            countersignerUserId: id(emailFor('ceo')),
        }));
    }
    const investor2b = await expectSucceed('onboard investor 2b (delegated-countersign test)', () => investors.onboard({
        fullLegalName: 'Ngozi Adeyemi',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0002B',
        contactEmail: `ngozi.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000021',
        registeredAddress: '2B Smoke Test Close, Abuja',
        sourceOfFunds: 'Salary income',
        onboardedByUserId: id(emailFor('finadmin')),
    }));
    if (investor2b) {
        investorIdsCreated.push(investor2b.investorId);
        await expectReject('Compliance officer WITHOUT delegated authority cannot countersign', () => investors.recordScreening({
            investorId: investor2b.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Ngozi Adeyemi',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('finadmin')),
            countersignerUserId: id(emailFor('compliance-senior')),
        }));
        const grant = await expectSucceed('CEO delegates SCREENING_COUNTERSIGN to senior Compliance officer', () => delegation.requestGrant({
            functionCode: 'SCREENING_COUNTERSIGN',
            delegateUserId: id(emailFor('compliance-senior')),
            delegatedByUserId: id(emailFor('ceo')),
            reason: 'Reduce CEO bottleneck on screening countersignatures as the institution grows',
        }));
        if (grant) {
            delegationIds.push(grant.id);
            const grantWf = await expectSucceed('DELEGATION_GRANT workflow initiated for the countersign delegation', () => workflow.initiate({
                workflowTypeCode: 'DELEGATION_GRANT',
                entityType: 'delegation_of_authority',
                entityId: grant.id,
                initiatedByUserId: id(emailFor('ceo')),
                scenario: 'STANDARD',
            }));
            if (grantWf) {
                workflowInstanceIds.push(grantWf.id);
                await delegation.attachWorkflowInstance(grant.id, grantWf.id);
                await expectSucceed('a second MD_CEO approves the delegation grant', () => workflow.approveNextStep(grantWf.id, id(emailFor('ceo-deputy'))));
            }
            const screening = await expectSucceed('senior Compliance officer now countersigns via the delegated authority', () => investors.recordScreening({
                investorId: investor2b.investorId,
                listsChecked: FULL_CHECKLIST,
                searchTermsUsed: 'Ngozi Adeyemi',
                result: 'NO_MATCH',
                screenerUserId: id(emailFor('finadmin')),
                countersignerUserId: id(emailFor('compliance-senior')),
            }));
            if (screening) {
                const auditRow = await prisma.auditTrail.findFirst({
                    where: {
                        entityType: 'investor_screening_record',
                        entityId: screening.id,
                        action: 'CREATE',
                    },
                    orderBy: { occurredAt: 'desc' },
                });
                const viaDelegationId = auditRow?.after?.viaDelegationId;
                console.log(viaDelegationId === grant.id
                    ? 'OK: audit trail records the countersign as delegated'
                    : 'FAIL: viaDelegationId missing/mismatched');
                if (viaDelegationId !== grant.id)
                    process.exitCode = 1;
            }
        }
    }
    const investor3 = await expectSucceed('onboard investor 3 (MATCH test)', () => investors.onboard({
        fullLegalName: 'Test Sanctioned Entity',
        entityType: 'CORPORATE',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0003',
        contactEmail: `sanctioned.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000003',
        registeredAddress: '3 Smoke Test Close, Abuja',
        sourceOfFunds: 'Unknown',
        onboardedByUserId: id(emailFor('finadmin')),
    }));
    if (investor3) {
        investorIdsCreated.push(investor3.investorId);
        await investors.setAmlRiskRating(investor3.investorId, 'HIGH', id(emailFor('finadmin')));
        await expectSucceed('record MATCH screening', () => investors.recordScreening({
            investorId: investor3.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Test Sanctioned Entity',
            result: 'MATCH',
            screenerUserId: id(emailFor('compliance')),
        }));
        await expectReject('KYC submission blocked after a MATCH result', () => investors.submitForKycApproval(investor3.investorId, id(emailFor('finadmin'))));
    }
    const investor4 = await expectSucceed('onboard investor 4 (RESTRICTED mandate path)', () => investors.onboard({
        fullLegalName: 'Bello Restricted Trust',
        entityType: 'TRUST',
        nationality: 'Nigerian',
        taxIdentificationNumber: 'TIN-0004',
        contactEmail: `restricted.smoke-${RUN}@one17.test`,
        contactPhone: '+2348000000004',
        registeredAddress: '4 Smoke Test Close, Abuja',
        sourceOfFunds: 'Trust corpus',
        onboardedByUserId: id(emailFor('finadmin')),
    }));
    if (investor4) {
        investorIdsCreated.push(investor4.investorId);
        await investors.setAmlRiskRating(investor4.investorId, 'LOW', id(emailFor('finadmin')));
        await investors.recordScreening({
            investorId: investor4.investorId,
            listsChecked: FULL_CHECKLIST,
            searchTermsUsed: 'Bello Restricted Trust',
            result: 'NO_MATCH',
            screenerUserId: id(emailFor('compliance')),
        });
        const wf4 = await investors.submitForKycApproval(investor4.investorId, id(emailFor('finadmin')));
        workflowInstanceIds.push(wf4.id);
        const investor4Approved = await investors.approveKyc(wf4.id, id(emailFor('compliance')));
        const yearsOut = investor4Approved && investor4Approved.kycExpiryDate
            ? (investor4Approved.kycExpiryDate.getTime() - Date.now()) /
                (365.25 * 24 * 60 * 60 * 1000)
            : 0;
        console.log(yearsOut > 2.9 && yearsOut < 3.1
            ? 'OK: LOW-risk-rated investor 4 got a ~3-year KYC expiry tier'
            : `FAIL: expected ~3 years out for LOW risk rating, got ${yearsOut.toFixed(2)}`);
        if (!(yearsOut > 2.9 && yearsOut < 3.1))
            process.exitCode = 1;
        await expectSucceed('setup RESTRICTED mandate', () => investors.setupMandate({
            investorId: investor4.investorId,
            mandateType: 'RESTRICTED',
            targetReturnRate: 0.12,
            restrictedSectors: ['ALCOHOL', 'GAMBLING'],
            effectiveDate: new Date(),
            approvedByUserId: id(emailFor('portmgr')),
        }));
        mandateInvestorIds.push(investor4.investorId);
        await expectReject('cannot activate: restricted mandate awaiting Shariah review', () => investors.activate(investor4.investorId));
        const shariahWf = await expectSucceed('request mandate Shariah review', () => investors.requestMandateShariahReview(investor4.investorId, id(emailFor('finadmin'))));
        if (shariahWf) {
            workflowInstanceIds.push(shariahWf.id);
            await expectReject('initiator (FIN_ADMIN) cannot approve their own Shariah review request', () => investors.approveMandateShariahReview(shariahWf.id, id(emailFor('finadmin'))));
            await expectSucceed('SHARIAH_REV approves the mandate review', () => investors.approveMandateShariahReview(shariahWf.id, id(emailFor('shariah'))));
            await expectSucceed('activate investor 4 now that Shariah review is complete', () => investors.activate(investor4.investorId));
        }
    }
    await prisma.workflowStepApproval.deleteMany({
        where: { workflowInstanceId: { in: workflowInstanceIds } },
    });
    await prisma.workflowInstance.deleteMany({
        where: { id: { in: workflowInstanceIds } },
    });
    await prisma.delegationOfAuthority.deleteMany({
        where: { id: { in: delegationIds } },
    });
    await prisma.investorMandate.deleteMany({
        where: { investorId: { in: mandateInvestorIds } },
    });
    await prisma.investorScreeningRecord.deleteMany({
        where: { investorId: { in: investorIdsCreated } },
    });
    await prisma.portalClientSession.deleteMany({
        where: { portalUserId: { in: (await prisma.portalClientUser.findMany({ where: { investorId: { in: investorIdsCreated } }, select: { id: true } })).map((u) => u.id) } },
    });
    await prisma.portalClientUser.deleteMany({
        where: { investorId: { in: investorIdsCreated } },
    });
    await prisma.investor.deleteMany({
        where: { investorId: { in: investorIdsCreated } },
    });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor.smoke.js.map