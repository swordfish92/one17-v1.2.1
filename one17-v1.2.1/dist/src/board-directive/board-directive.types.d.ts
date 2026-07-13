export declare class BoardDirectiveError extends Error {
    constructor(message: string);
}
export interface IssueBoardDirectiveInput {
    title: string;
    description: string;
    committeeTag?: string;
    resolutionRef?: string;
    dueAt: Date;
}
