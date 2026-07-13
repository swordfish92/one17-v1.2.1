import { PrismaService } from '../prisma/prisma.service';
import { StatementAccountKind, StatementAccountSummary } from './statement.types';
import { LetterheadService } from '../letterhead/letterhead.service';
export declare class StatementService {
    private readonly prisma;
    private readonly letterhead;
    constructor(prisma: PrismaService, letterhead: LetterheadService);
    listAccounts(investorId: string): Promise<StatementAccountSummary[]>;
    generateStatementPdf(kind: StatementAccountKind, id: string, investorId: string, periodStart: Date, periodEnd: Date): Promise<Uint8Array>;
    private buildUnitNavStatement;
    private buildPsrStatement;
}
