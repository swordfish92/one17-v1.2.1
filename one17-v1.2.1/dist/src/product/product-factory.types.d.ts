import { ChartOfAccountTemplateRow } from '../ledger/ledger.types';
export declare class ProductFactoryError extends Error {
}
export interface InitiateProductSetupInput {
    code: string;
    name: string;
    engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
    initiatedByUserId: string;
}
export interface ApproveProductSetupInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export declare const COA_TEMPLATE_BY_ENGINE_TYPE: Record<'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE', ChartOfAccountTemplateRow[]>;
export declare const LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE: Record<'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE', 'FUND' | 'POOL' | 'MANDATE'>;
