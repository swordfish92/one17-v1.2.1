export declare class DocumentTransmissionError extends Error {
    constructor(message: string);
}
export interface TransmitDocumentInput {
    title: string;
    fileReference: string;
    docType?: string;
    recipientUserIds: string[];
}
