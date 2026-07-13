export interface MaskedSecret {
    hasSecret: boolean;
    secretPreview: string | null;
}
export declare function maskSecret(value: string | null | undefined): MaskedSecret;
export declare function hasPendingSecret(value: string | null | undefined): boolean;
export interface MaskedJsonConfigKeys {
    configuredKeys: string[];
    sensitiveKeys: string[];
}
export declare function maskJsonConfigKeys(json: unknown): MaskedJsonConfigKeys;
export declare function maskJsonConfigAllowlist(json: unknown, safeKeys: readonly string[]): Record<string, unknown>;
