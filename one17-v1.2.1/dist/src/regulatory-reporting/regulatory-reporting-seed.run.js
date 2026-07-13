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
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const complianceEmail = 'system-compliance-officer@one17.test';
    let compliance = await prisma.appUser.findUnique({ where: { email: complianceEmail } });
    if (!compliance) {
        compliance = await prisma.appUser.create({ data: { email: complianceEmail, displayName: 'System Compliance Officer' } });
        await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    }
    const company = await prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } });
    const ledgerEntityCode = company?.code ?? 'COMPANY';
    const TEMPLATES = [
        { templateCode: 'A-FMAN', name: 'A - FMAN [Date].xlsx', filingFrequency: 'MONTHLY', deadlineDayOfMonth: 14, deadlineRule: null },
        { templateCode: 'B-COMPLAINTS', name: 'B - Customer Compliant Register.xlsx', filingFrequency: 'PERIODIC', deadlineDayOfMonth: null, deadlineRule: 'Per SEC request' },
        { templateCode: 'C-AML-CFT', name: 'C - AML-CFT-RETURNS.xlsx', filingFrequency: 'PERIODIC', deadlineDayOfMonth: null, deadlineRule: 'Weekly/periodic per SEC AML regs' },
        { templateCode: 'D-CMOS-QUARTERLY', name: 'D - CMOs Quarterly Returns.xlsx', filingFrequency: 'QUARTERLY', deadlineDayOfMonth: null, deadlineRule: 'Quarterly, per SEC CMO circular' },
        { templateCode: 'MONTHLY-PRIVATE-FUNDS', name: 'Monthly Private Funds Template.xlsx', filingFrequency: 'MONTHLY', deadlineDayOfMonth: 14, deadlineRule: null },
        { templateCode: 'E-HALF-YEARLY-CIS', name: 'E - HALF_YEARLY_RETURN_BY_CIS_SCHEMES.pdf', filingFrequency: 'HALF_YEARLY', deadlineDayOfMonth: null, deadlineRule: 'Half-yearly per SEC CIS return calendar' },
        { templateCode: 'F-QUARTERLY-CIS', name: 'F - QUARTERLY_RETURN_BY_CIS_SCHEME.pdf', filingFrequency: 'QUARTERLY', deadlineDayOfMonth: null, deadlineRule: 'Quarterly per SEC CIS return calendar' },
        { templateCode: 'G-MONTHLY-CIS', name: 'G - MONTHLY_RETURN_BY_CIS_SCHEMES.pdf', filingFrequency: 'MONTHLY', deadlineDayOfMonth: 14, deadlineRule: null },
        { templateCode: 'H-PRIVATE-PORTFOLIO', name: 'H - Private Portfolio Fund Returns Template.pdf', filingFrequency: 'PERIODIC', deadlineDayOfMonth: null, deadlineRule: 'Per SEC private portfolio circular' },
    ];
    const templateIds = {};
    for (const t of TEMPLATES) {
        const row = await prisma.regulatorTemplate.upsert({
            where: { regulatorCode_templateCode_version: { regulatorCode: 'SEC-NG', templateCode: t.templateCode, version: 1 } },
            create: { regulatorCode: 'SEC-NG', templateCode: t.templateCode, name: t.name, filingFrequency: t.filingFrequency, version: 1, status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: compliance.id },
            update: { name: t.name, filingFrequency: t.filingFrequency },
        });
        templateIds[t.templateCode] = row.id;
        const existingCalendar = await prisma.regulatoryFilingCalendar.findFirst({ where: { regulatorTemplateId: row.id, ledgerEntityCode } });
        if (!existingCalendar) {
            await prisma.regulatoryFilingCalendar.create({
                data: { regulatorTemplateId: row.id, ledgerEntityCode, frequency: t.filingFrequency, deadlineDayOfMonth: t.deadlineDayOfMonth, deadlineRule: t.deadlineRule },
            });
        }
    }
    console.log(`Registered ${TEMPLATES.length} regulator_template rows (SEC-NG) + filing calendar entries.`);
    const fmanId = templateIds['A-FMAN'];
    const existingFmanMaps = await prisma.templateCellMap.count({ where: { regulatorTemplateId: fmanId } });
    if (existingFmanMaps === 0) {
        const FMAN_CELLS = [
            { sheetName: 'Sheet1', cellAddress: 'C7', label: 'Name of Fund Manager', cellClass: 'AUTO', sourceKey: 'FUND_MANAGER_NAME' },
            { sheetName: 'Sheet1', cellAddress: 'C9', label: 'Email address', cellClass: 'AUTO', sourceKey: 'REPORTING_ENTITY_EMAIL' },
            { sheetName: 'Sheet1', cellAddress: 'C11', label: 'Reporting Month', cellClass: 'ENTRY' },
            { sheetName: 'Sheet1', cellAddress: 'C12', label: 'Reporting Date', cellClass: 'ENTRY' },
            { sheetName: 'Sheet1', cellAddress: 'A17', label: 'S/N', cellClass: 'STATIC', staticValue: '1' },
            { sheetName: 'Sheet1', cellAddress: 'B17', label: 'Name of Fund', cellClass: 'ENTRY' },
            { sheetName: 'Sheet1', cellAddress: 'C17', label: 'Class of Fund', cellClass: 'ENTRY' },
            { sheetName: 'Sheet1', cellAddress: 'D17', label: 'Asset Under Management', cellClass: 'AUTO', sourceKey: 'TOTAL_AUM_KOBO' },
            { sheetName: 'Sheet1', cellAddress: 'E17', label: 'Expenses', cellClass: 'AUTO', sourceKey: 'MONTHLY_EXPENSE_KOBO' },
            { sheetName: 'Sheet1', cellAddress: 'G17', label: 'Expense Ratio', cellClass: 'AUTO', sourceKey: 'EXPENSE_RATIO_PCT' },
        ];
        for (const c of FMAN_CELLS) {
            await prisma.templateCellMap.create({ data: { regulatorTemplateId: fmanId, mapVersion: 1, ...c } });
        }
        console.log(`Seeded ${FMAN_CELLS.length} template_cell_map rows for A-FMAN (real cell addresses from the supplied .xlsx).`);
    }
    const complaintsId = templateIds['B-COMPLAINTS'];
    const existingComplaintsMaps = await prisma.templateCellMap.count({ where: { regulatorTemplateId: complaintsId } });
    if (existingComplaintsMaps === 0) {
        await prisma.templateCellMap.create({
            data: { regulatorTemplateId: complaintsId, mapVersion: 1, sheetName: 'Sheet1', cellAddress: 'A7', label: 'Complaint register rows', cellClass: 'AUTO', sourceKey: 'COMPLAINT_REGISTER_ROWS' },
        });
        console.log('Seeded 1 template_cell_map row for B-COMPLAINTS (register anchor A7, invariant 28f).');
    }
    const cisId = templateIds['E-HALF-YEARLY-CIS'];
    const existingCisMaps = await prisma.templateFieldMap.count({ where: { regulatorTemplateId: cisId } });
    if (existingCisMaps === 0) {
        const CIS_FIELDS = [
            { page: 1, xPt: 250, yPt: 640, label: 'Name of Scheme', cellClass: 'ENTRY' },
            { page: 1, xPt: 250, yPt: 590, label: 'Name of Fund Manager', cellClass: 'AUTO', sourceKey: 'FUND_MANAGER_NAME' },
        ];
        for (const f of CIS_FIELDS) {
            await prisma.templateFieldMap.create({ data: { regulatorTemplateId: cisId, mapVersion: 1, ...f } });
        }
        console.log(`Seeded ${CIS_FIELDS.length} template_field_map rows for E-HALF-YEARLY-CIS (approximate placement — see the ops UI calibrator to refine).`);
    }
    console.log(`\ncomplianceOfficerUserId=${compliance.id}`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=regulatory-reporting-seed.run.js.map