import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
export interface UploadStatementLineInput {
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date;
    description: string;
    amountKobo: bigint;
    externalRef?: string;
}
export declare class BankReconciliationService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    private assertCapability;
    uploadStatementLines(lines: UploadStatementLineInput[], uploadedByUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankStatementLineStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        uploadedByUserId: string;
        ledgerEntityCode: string;
        glAccountCode: string;
        statementDate: Date;
        externalRef: string | null;
        matchedJournalEntryLineId: string | null;
        matchedByUserId: string | null;
        matchedAt: Date | null;
    }[]>;
    matchLine(lineId: string, journalEntryLineId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankStatementLineStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        uploadedByUserId: string;
        ledgerEntityCode: string;
        glAccountCode: string;
        statementDate: Date;
        externalRef: string | null;
        matchedJournalEntryLineId: string | null;
        matchedByUserId: string | null;
        matchedAt: Date | null;
    }>;
    unmatchLine(lineId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankStatementLineStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        uploadedByUserId: string;
        ledgerEntityCode: string;
        glAccountCode: string;
        statementDate: Date;
        externalRef: string | null;
        matchedJournalEntryLineId: string | null;
        matchedByUserId: string | null;
        matchedAt: Date | null;
    }>;
    listLines(ledgerEntityCode: string, status?: 'UNMATCHED' | 'MATCHED'): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankStatementLineStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        uploadedByUserId: string;
        ledgerEntityCode: string;
        glAccountCode: string;
        statementDate: Date;
        externalRef: string | null;
        matchedJournalEntryLineId: string | null;
        matchedByUserId: string | null;
        matchedAt: Date | null;
    }[]>;
    countUnmatchedInWindow(ledgerEntityCode: string, periodStart: Date, periodEnd: Date): Promise<number>;
    getSummary(ledgerEntityCode: string, periodStart: Date, periodEnd: Date): Promise<{
        matched: number;
        unmatched: number;
        canClose: boolean;
    }>;
}
