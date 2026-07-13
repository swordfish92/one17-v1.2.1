import { AsyncLocalStorage } from 'node:async_hooks';
interface RequestContextStore {
    requestId: string;
}
export declare const requestContext: AsyncLocalStorage<RequestContextStore>;
export declare function getCurrentRequestId(): string | undefined;
export {};
