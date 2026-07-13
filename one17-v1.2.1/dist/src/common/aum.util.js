"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTotalAumKobo = computeTotalAumKobo;
async function computeTotalAumKobo(prisma) {
    const accounts = await prisma.productAccount.findMany({ where: { status: 'ACTIVE' }, select: { principalOrCommittedKobo: true } });
    const productAccountAum = accounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
    const mandates = await prisma.ndMandateAccount.findMany({
        where: { status: 'ACTIVE', committedCapitalKobo: { not: null } },
        select: { committedCapitalKobo: true },
    });
    const mandateAum = mandates.reduce((s, m) => s + (m.committedCapitalKobo ?? 0n), 0n);
    return productAccountAum + mandateAum;
}
//# sourceMappingURL=aum.util.js.map