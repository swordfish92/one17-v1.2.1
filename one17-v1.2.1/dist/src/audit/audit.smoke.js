"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const audit_service_1 = require("./audit.service");
const prisma_service_1 = require("../prisma/prisma.service");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    await audit.record({
        actorRole: 'CEO',
        action: 'LOGIN',
        entityType: 'session',
        entityId: 'smoke-1',
    });
    await audit.record({
        actorRole: 'CEO',
        action: 'APPROVE',
        entityType: 'disbursement',
        entityId: 'smoke-2',
        before: { status: 'pending' },
        after: { status: 'approved' },
    });
    const rows = await prisma.auditTrail.findMany({
        where: { entityId: { in: ['smoke-1', 'smoke-2'] } },
        orderBy: { occurredAt: 'asc' },
    });
    console.log('rows:', rows.map((r) => ({
        entityId: r.entityId,
        previousHash: r.previousHash,
        tamperHash: r.tamperHash,
    })));
    const chainOk = rows[1]?.previousHash === rows[0]?.tamperHash;
    console.log('hash chain links correctly:', chainOk);
    if (!chainOk)
        process.exitCode = 1;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=audit.smoke.js.map