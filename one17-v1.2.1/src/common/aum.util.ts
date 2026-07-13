import { PrismaService } from '../prisma/prisma.service';

// Invariant 43(a): the ONE canonical Total AUM computation. Before
// CHECK10, four independent copies of this calculation existed
// (dashboard.service.ts, stress-engine.service.ts, kri-engine.service.ts,
// regulatory-reporting.service.ts), all summing ONLY product_account and
// silently excluding every ND Mandate holding -- the exact defect the
// CEO's advisor named. Every AUM figure anywhere in this codebase must
// derive from this function so the four copies cannot drift again.
export async function computeTotalAumKobo(prisma: PrismaService): Promise<bigint> {
  const accounts = await prisma.productAccount.findMany({ where: { status: 'ACTIVE' }, select: { principalOrCommittedKobo: true } });
  const productAccountAum = accounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
  const mandates = await prisma.ndMandateAccount.findMany({
    where: { status: 'ACTIVE', committedCapitalKobo: { not: null } },
    select: { committedCapitalKobo: true },
  });
  const mandateAum = mandates.reduce((s, m) => s + (m.committedCapitalKobo ?? 0n), 0n);
  return productAccountAum + mandateAum;
}
