import type { AuthenticatedUser } from '../auth/auth.types';
import { ProspectusSheetService } from '../parameters/prospectus-sheet.service';
import { ProposeProspectusSheetDto, ProspectusSheetFieldsDto } from './ops-api.types';
export declare class ProspectusSheetController {
    private readonly prospectusSheets;
    constructor(prospectusSheets: ProspectusSheetService);
    private toBigIntFields;
    listVersions(productCode: string): Promise<any[]>;
    getDetail(sheetId: string): Promise<any>;
    propose(dto: ProposeProspectusSheetDto, user: AuthenticatedUser): Promise<any>;
    editDraft(sheetId: string, dto: ProspectusSheetFieldsDto, user: AuthenticatedUser): Promise<any>;
    approveStep(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
        status: "INITIATED" | "PENDING_APPROVAL" | "REJECTED" | "EXECUTED" | "CANCELLED";
        sheet: null;
    } | {
        status: "APPROVED";
        sheet: any;
    }>;
    proposeAmendment(productCode: string, dto: ProspectusSheetFieldsDto, user: AuthenticatedUser): Promise<any>;
    approveAmendmentStep(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
        status: "INITIATED" | "PENDING_APPROVAL" | "REJECTED" | "EXECUTED" | "CANCELLED";
        sheet: null;
    } | {
        status: "APPROVED";
        sheet: any;
    }>;
}
