export declare class PortalRequestRestructureDto {
    requestType: 'EXTENSION' | 'RESTRUCTURE';
    extensionMonths?: number;
    obligationId?: string;
    reason: string;
}
export declare class PortalSubmitEnquiryDto {
    subject?: string;
    message: string;
}
export declare class PortalRaiseComplaintDto {
    category: string;
    description: string;
}
export declare class PortalUploadFacilityDocumentDto {
    documentType: string;
    fileReference: string;
}
