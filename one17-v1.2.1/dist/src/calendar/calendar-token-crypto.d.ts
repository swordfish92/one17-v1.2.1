export declare function encryptToken(plaintext: string): string;
export declare function decryptToken(ciphertext: string): string;
export interface OAuthStatePayload {
    providerId: string;
    userId: string;
    nonce: string;
    iat: number;
}
export declare function signOAuthState(payload: {
    providerId: string;
    userId: string;
}): string;
export declare function verifyOAuthState(state: string): OAuthStatePayload;
