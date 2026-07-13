"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
function section(title) { console.log(`\n=== ${title} ===`); }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    section('Staff roster (invariant 48 §1)');
    const staffEmails = [
        'aisha.mohammed@one17capital.com', 'emeka.nwosu@one17capital.com', 'halima.garba@one17capital.com',
        'olumide.fashola@one17capital.com', 'ibrahim.yusuf.ii@one17capital.com', 'grace.adeleke@one17capital.com',
        'yemi.alabi@one17capital.com', 'kemi.adewale@one17capital.com', 'musa.danjuma@one17capital.com',
        'blessing.okoro@one17capital.com', 'femi.ogunleye@one17capital.com', 'ronke.bello@one17capital.com',
    ];
    const staff = await prisma.appUser.findMany({ where: { email: { in: staffEmails } }, include: { roles: true } });
    console.log(`${staff.length}/12 new staff users found`);
    for (const s of staff)
        console.log(`  ${s.displayName} <${s.email}> — ${s.roles.map((r) => r.roleCode).join(',')}`);
    section('Product Shariah gate + activation (§2)');
    const products = await prisma.product.findMany({ where: { code: { in: ['ONE17-HALAL-FUND', 'ONE17-MUDARABAH-POOL-1', 'ONE17-ND-MANDATE-1'] } } });
    for (const p of products)
        console.log(`  ${p.code}: status=${p.status}, shariahApprovedAt=${p.shariahApprovedAt?.toISOString().slice(0, 10)}, ref=${p.shariahApprovalRef}`);
    section('Ledger entity <-> product linkage (§2b)');
    const entities = await prisma.ledgerEntity.findMany({ where: { code: { in: ['ONE17-HALAL-FUND-01', 'ONE17-MUDARABAH-POOL-01'] } } });
    for (const e of entities)
        console.log(`  ${e.code} -> productCode=${e.productCode}`);
    const ndEntity = await prisma.ledgerEntity.findFirst({ where: { productCode: 'ONE17-ND-MANDATE-1' } });
    console.log(`  ND mandate ledger entity: ${ndEntity ? ndEntity.code : 'NOT FOUND'}`);
    section('NAV time-series depth (§3a)');
    const navRecords = await prisma.navRecord.findMany({ where: { ledgerEntityCode: 'ONE17-HALAL-FUND-01' }, orderBy: { valuationDate: 'asc' } });
    console.log(`${navRecords.length} NAV records total for ONE17-HALAL-FUND-01`);
    for (const n of navRecords)
        console.log(`  ${n.valuationDate.toISOString().slice(0, 10)}: NAV/unit ${n.navPerUnit}`);
    section('Subscriptions + redemptions (§3b/3c)');
    const subReqs = await prisma.subscriptionRequest.findMany({ where: { productCode: { in: ['ONE17-HALAL-FUND', 'ONE17-MUDARABAH-POOL-1', 'ONE17-ND-MANDATE-1'] } }, orderBy: { createdAt: 'asc' } });
    const byStatus = {};
    for (const r of subReqs)
        byStatus[`${r.requestType}:${r.status}`] = (byStatus[`${r.requestType}:${r.status}`] ?? 0) + 1;
    console.log(`${subReqs.length} subscription_request rows across the 3 products:`, byStatus);
    section('Distributions (§4)');
    const distributions = await prisma.distribution.findMany({ where: { productCode: { in: ['ONE17-HALAL-FUND', 'ONE17-MUDARABAH-POOL-1', 'ONE17-ND-MANDATE'] } }, orderBy: { periodEnd: 'asc' } });
    for (const d of distributions)
        console.log(`  ${d.productCode} period ${d.periodStart.toISOString().slice(0, 10)}..${d.periodEnd.toISOString().slice(0, 10)}: status=${d.status}`);
    section('Facility application + investment memo (§5)');
    const sahel = await prisma.counterparty.findFirst({ where: { legalName: 'Sahel AgroProcessing Ltd' } });
    if (sahel) {
        const apps = await prisma.counterpartyFacilityApplication.findMany({ where: { counterpartyId: sahel.id } });
        for (const a of apps)
            console.log(`  facility application ${a.id}: status=${a.status}, requestedAmountKobo=${a.requestedAmountKobo}`);
        const memos = await prisma.investmentMemo.findMany({ where: { facilityApplicationId: { in: apps.map((a) => a.id) } } });
        for (const m of memos)
            console.log(`  investment memo ${m.id}: status=${m.status}`);
    }
    section('Requisitions + procurement + payroll (§6)');
    const encumbrances = await prisma.encumbrance.findMany({ where: { description: { contains: 'walkthrough' } } });
    for (const e of encumbrances)
        console.log(`  encumbrance "${e.description}": status=${e.status}, amountKobo=${e.amountKobo}`);
    const paymentBatch = await prisma.paymentBatch.findFirst({ where: { batchNumber: 'PB-WT-2026-001' } });
    console.log(`  payment batch PB-WT-2026-001: ${paymentBatch ? paymentBatch.status : 'NOT FOUND'}`);
    const payrollRun = await prisma.payrollRun.findFirst({ where: { periodMonth: 8, periodYear: 2026, ledgerEntityCode: 'COMPANY' } });
    console.log(`  payroll run Aug-2026: ${payrollRun ? payrollRun.status : 'NOT FOUND'}`);
    section('PMS scoring (§7)');
    const cycle = await prisma.appraisalCycle.findFirst({ where: { cycleType: 'ANNUAL_APPRAISAL', orgUnitCode: 'FINCON', periodStart: new Date('2026-01-01') } });
    console.log(`  FY2026 appraisal cycle: ${cycle ? cycle.status : 'NOT FOUND'}`);
    section('Complaints, marketing, stakeholder reports (§7)');
    const complaintCount = await prisma.complaint.count();
    console.log(`  ${complaintCount} complaint rows total on this database`);
    const sends = await prisma.marketingSend.findMany({ where: { subject: { contains: 'One17' } } });
    for (const s of sends)
        console.log(`  marketing send "${s.subject}": status=${s.status}, recipientCount=${s.recipientCount}`);
    const reports = await prisma.stakeholderReportRun.findMany({ where: { periodStart: new Date('2026-04-01') } });
    for (const r of reports)
        console.log(`  stakeholder report ${r.reportType}: status=${r.status}`);
    section('Accounting periods (§8)');
    const periods = await prisma.accountingPeriod.findMany({ where: { ledgerEntityCode: 'COMPANY' }, orderBy: { periodStart: 'asc' } });
    for (const p of periods)
        console.log(`  ${p.periodStart.toISOString().slice(0, 10)}..${p.periodEnd.toISOString().slice(0, 10)}: status=${p.status}`);
    await prisma.$disconnect();
}
main().catch((err) => { console.error(err); process.exitCode = 1; });
//# sourceMappingURL=invariant48-verify.js.map