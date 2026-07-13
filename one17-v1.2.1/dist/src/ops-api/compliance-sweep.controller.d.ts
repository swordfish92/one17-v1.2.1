import { InvestorComplianceSweepService } from '../investor/investor-compliance-sweep.service';
export declare class ComplianceSweepController {
    private readonly sweep;
    constructor(sweep: InvestorComplianceSweepService);
    getQueue(): Promise<{
        overdueKycReviews: ({
            kind: "COUNTERPARTY";
            id: string;
            name: string;
            frequency: string | null;
            lastReviewedAt: Date | null;
        } | {
            kind: "INVESTOR";
            id: string;
            name: string;
            frequency: string | null;
            lastReviewedAt: Date | null;
        })[];
        sanctionsDue: {
            investorId: string;
            name: string;
            lastScreenedAt: Date | null;
        }[];
        documentExpiry: {
            documentId: string;
            investorId: string;
            name: string;
            documentType: string;
            expiryDate: Date | null;
            isExpired: boolean;
        }[];
    }>;
}
