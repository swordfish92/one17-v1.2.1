export declare class ProfileError extends Error {
    constructor(message: string);
}
export interface UpdateFreeEditFieldsInput {
    numberOfChildren?: number;
    hobbiesInterests?: string;
    emergencyContactName?: string;
    emergencyContactPhone?: string;
    emergencyContactRelationship?: string;
}
export interface RequestGatedChangeInput {
    maritalStatus?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED';
    residentialAddress?: string;
    nextOfKinName?: string;
    nextOfKinRelationship?: string;
    nextOfKinPhone?: string;
    nextOfKinAddress?: string;
}
