export type AccountingBasis = 'IFRS' | 'AAOIFI';
export interface CreateLedgerEntityInput {
    code: string;
    name: string;
    entityType: 'COMPANY' | 'FUND' | 'POOL' | 'MANDATE' | 'CLIENT_MONEY';
    primaryBasis: AccountingBasis;
    productCode?: string;
    createdByUserId: string;
}
export interface ChartOfAccountTemplateRow {
    accountCode: string;
    accountName: string;
    accountType: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE';
    aaoifiRef: string;
    ifrsRef: string;
}
export interface LoadChartOfAccountsInput {
    ledgerEntityCode: string;
    accounts: ChartOfAccountTemplateRow[];
    createdByUserId: string;
}
export interface JournalEntryLineInput {
    accountCode: string;
    debitKobo?: bigint;
    creditKobo?: bigint;
    description?: string;
}
export interface CreateJournalEntryInput {
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date;
    description: string;
    lines: JournalEntryLineInput[];
    createdByUserId: string;
    journalClass?: 'BASE' | 'BASIS_ADJUSTMENT';
    divergenceType?: string;
    adjustmentForBasis?: AccountingBasis;
}
export interface RequestJournalPostingInput {
    journalEntryId: string;
    initiatedByUserId: string;
    scenario?: string;
}
export interface ApproveJournalPostingInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface MirroredJournalLegInput {
    ledgerEntityCode: string;
    journalReference: string;
    lines: JournalEntryLineInput[];
}
export interface CreateInterEntityMirroredJournalsInput {
    interEntityRef: string;
    entryDate: Date;
    description: string;
    createdByUserId: string;
    legA: MirroredJournalLegInput;
    legB: MirroredJournalLegInput;
}
export interface TrialBalanceLine {
    accountId: string;
    accountCode: string;
    accountName: string;
    debitKobo: bigint;
    creditKobo: bigint;
}
export interface RecordCashbookEntryInput {
    ledgerEntityCode: string;
    entryDate: Date;
    description: string;
    amountKobo: bigint;
    bankReference?: string;
    createdByUserId: string;
}
export interface CreateTxnInput {
    txnType: 'SUBSCRIPTION' | 'REDEMPTION' | 'PLACEMENT' | 'PROFIT_ALLOCATION' | 'DISTRIBUTION' | 'ROLLOVER' | 'EARLY_EXIT' | 'FEE' | 'PURIFICATION' | 'ADJUSTMENT';
    ledgerEntityCode: string;
    productAccountId?: string;
    valueDate: Date;
    amountKobo: bigint;
    makerUserId: string;
    payerBankAccountId?: string;
    thirdPartyPayer?: {
        payerName: string;
        payerBankName?: string;
        payerAccountNumber?: string;
        declaredRelationship: string;
    };
    payoutBankAccountId?: string;
}
export declare class LedgerLifecycleError extends Error {
    constructor(message: string);
}
