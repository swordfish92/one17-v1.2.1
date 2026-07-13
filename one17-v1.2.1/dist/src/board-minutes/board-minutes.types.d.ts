export declare class BoardMinutesError extends Error {
    constructor(message: string);
}
export interface UploadBoardMinutesInput {
    title: string;
    fileReference: string;
    committeeTag?: string;
}
