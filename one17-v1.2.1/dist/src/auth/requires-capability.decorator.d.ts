export declare const CAPABILITY_KEY = "requiresCapability";
export interface RequiredCapability {
    functionCode: string;
    level: 'INITIATE' | 'APPROVE' | 'VIEW';
}
export declare const RequiresCapability: (functionCode: string, level: "INITIATE" | "APPROVE" | "VIEW") => (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => PropertyDescriptor;
