import { LedgerService } from '../ledger/ledger.service';
export declare class CompanyAccountingController {
    private readonly ledger;
    constructor(ledger: LedgerService);
    listInterEntityReconciliations(): Promise<{
        ok: boolean;
        legCount: number;
        reason?: string;
        interEntityRef: string;
        description: string;
        entryDate: Date;
        legs: {
            ledgerEntityCode: string;
            journalReference: string;
        }[];
        amountKobo: string;
    }[]>;
}
