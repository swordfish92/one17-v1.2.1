export interface CreateProductInput {
    code: string;
    name: string;
    engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
    createdByUserId: string;
}
export interface SetPoolParametersInput {
    productCode: string;
    createdByUserId: string;
    approvedByUserId?: string;
    psrPoolMudaribShare?: number;
    surplusInvestorShare?: number;
    surplusMudaribShare?: number;
    feesAllowedOnPool?: boolean;
    dripDefault?: 'AUTO' | 'MANUAL' | 'NONE';
    boardResolutionRef?: string;
    ssbResolutionRef?: string;
}
