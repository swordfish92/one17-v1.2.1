export declare function encryptSecret(plaintext: string): string;
export declare function decryptSecret(value: string): string;
export declare function encryptSecretNullable(value: string | null | undefined): string | null;
export declare function decryptSecretNullable(value: string | null | undefined): string | null;
interface EncryptedJsonEnvelope {
    __one17Enc: true;
    v: string;
}
export declare function encryptJsonSecret(obj: Record<string, unknown> | null | undefined): EncryptedJsonEnvelope | null;
export declare function decryptJsonSecret(value: unknown): Record<string, unknown> | null;
export {};
