import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { ParameterService } from '../parameters/parameters.service';
import { LedgerService } from '../ledger/ledger.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ApproveProductSetupInput, InitiateProductSetupInput } from './product-factory.types';
export declare class ProductFactoryService {
    private readonly prisma;
    private readonly audit;
    private readonly parameters;
    private readonly ledger;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, parameters: ParameterService, ledger: LedgerService, workflow: WorkflowEngineService);
    initiateProductSetup(input: InitiateProductSetupInput): Promise<{
        product: {
            status: import("../../generated/prisma/enums").ProductStatus;
            createdAt: Date;
            code: string;
            name: string;
            engineType: import("../../generated/prisma/enums").ProductEngineType;
            shariahApprovedAt: Date | null;
            shariahApprovalRef: string | null;
            setupWorkflowInstanceId: string | null;
        };
        workflowInstance: any;
    }>;
    approveProductSetup(input: ApproveProductSetupInput): Promise<{
        status: "INITIATED" | "PENDING_APPROVAL" | "REJECTED" | "EXECUTED" | "CANCELLED";
        product: null;
        ledgerEntity: null;
    } | {
        status: "APPROVED";
        product: {
            status: import("../../generated/prisma/enums").ProductStatus;
            createdAt: Date;
            code: string;
            name: string;
            engineType: import("../../generated/prisma/enums").ProductEngineType;
            shariahApprovedAt: Date | null;
            shariahApprovalRef: string | null;
            setupWorkflowInstanceId: string | null;
        };
        ledgerEntity: {
            entityType: import("../../generated/prisma/enums").LedgerEntityType;
            status: import("../../generated/prisma/enums").LedgerEntityStatus;
            createdAt: Date;
            code: string;
            name: string;
            productCode: string | null;
            primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
        };
    }>;
    approveProductSetupByCode(productCode: string, approverUserId: string): Promise<{
        status: "INITIATED" | "PENDING_APPROVAL" | "REJECTED" | "EXECUTED" | "CANCELLED";
        product: null;
        ledgerEntity: null;
    } | {
        status: "APPROVED";
        product: {
            status: import("../../generated/prisma/enums").ProductStatus;
            createdAt: Date;
            code: string;
            name: string;
            engineType: import("../../generated/prisma/enums").ProductEngineType;
            shariahApprovedAt: Date | null;
            shariahApprovalRef: string | null;
            setupWorkflowInstanceId: string | null;
        };
        ledgerEntity: {
            entityType: import("../../generated/prisma/enums").LedgerEntityType;
            status: import("../../generated/prisma/enums").LedgerEntityStatus;
            createdAt: Date;
            code: string;
            name: string;
            productCode: string | null;
            primaryBasis: import("../../generated/prisma/enums").AccountingBasis;
        };
    }>;
}
