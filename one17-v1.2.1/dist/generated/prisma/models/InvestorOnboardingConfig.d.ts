import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorOnboardingConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorOnboardingConfigPayload>;
export type AggregateInvestorOnboardingConfig = {
    _count: InvestorOnboardingConfigCountAggregateOutputType | null;
    _avg: InvestorOnboardingConfigAvgAggregateOutputType | null;
    _sum: InvestorOnboardingConfigSumAggregateOutputType | null;
    _min: InvestorOnboardingConfigMinAggregateOutputType | null;
    _max: InvestorOnboardingConfigMaxAggregateOutputType | null;
};
export type InvestorOnboardingConfigAvgAggregateOutputType = {
    version: number | null;
    expressDepositCapKobo: number | null;
    stage2CompletionDeadlineDays: number | null;
};
export type InvestorOnboardingConfigSumAggregateOutputType = {
    version: number | null;
    expressDepositCapKobo: bigint | null;
    stage2CompletionDeadlineDays: number | null;
};
export type InvestorOnboardingConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    expressDepositCapKobo: bigint | null;
    stage2CompletionDeadlineDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorOnboardingConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    expressDepositCapKobo: bigint | null;
    stage2CompletionDeadlineDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorOnboardingConfigCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    expressDepositCapKobo: number;
    stage2CompletionDeadlineDays: number;
    boardResolutionRef: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type InvestorOnboardingConfigAvgAggregateInputType = {
    version?: true;
    expressDepositCapKobo?: true;
    stage2CompletionDeadlineDays?: true;
};
export type InvestorOnboardingConfigSumAggregateInputType = {
    version?: true;
    expressDepositCapKobo?: true;
    stage2CompletionDeadlineDays?: true;
};
export type InvestorOnboardingConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    expressDepositCapKobo?: true;
    stage2CompletionDeadlineDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestorOnboardingConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    expressDepositCapKobo?: true;
    stage2CompletionDeadlineDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestorOnboardingConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    expressDepositCapKobo?: true;
    stage2CompletionDeadlineDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorOnboardingConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    orderBy?: Prisma.InvestorOnboardingConfigOrderByWithRelationInput | Prisma.InvestorOnboardingConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorOnboardingConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorOnboardingConfigCountAggregateInputType;
    _avg?: InvestorOnboardingConfigAvgAggregateInputType;
    _sum?: InvestorOnboardingConfigSumAggregateInputType;
    _min?: InvestorOnboardingConfigMinAggregateInputType;
    _max?: InvestorOnboardingConfigMaxAggregateInputType;
};
export type GetInvestorOnboardingConfigAggregateType<T extends InvestorOnboardingConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorOnboardingConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorOnboardingConfig[P]> : Prisma.GetScalarType<T[P], AggregateInvestorOnboardingConfig[P]>;
};
export type InvestorOnboardingConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    orderBy?: Prisma.InvestorOnboardingConfigOrderByWithAggregationInput | Prisma.InvestorOnboardingConfigOrderByWithAggregationInput[];
    by: Prisma.InvestorOnboardingConfigScalarFieldEnum[] | Prisma.InvestorOnboardingConfigScalarFieldEnum;
    having?: Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorOnboardingConfigCountAggregateInputType | true;
    _avg?: InvestorOnboardingConfigAvgAggregateInputType;
    _sum?: InvestorOnboardingConfigSumAggregateInputType;
    _min?: InvestorOnboardingConfigMinAggregateInputType;
    _max?: InvestorOnboardingConfigMaxAggregateInputType;
};
export type InvestorOnboardingConfigGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    expressDepositCapKobo: bigint;
    stage2CompletionDeadlineDays: number;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: InvestorOnboardingConfigCountAggregateOutputType | null;
    _avg: InvestorOnboardingConfigAvgAggregateOutputType | null;
    _sum: InvestorOnboardingConfigSumAggregateOutputType | null;
    _min: InvestorOnboardingConfigMinAggregateOutputType | null;
    _max: InvestorOnboardingConfigMaxAggregateOutputType | null;
};
export type GetInvestorOnboardingConfigGroupByPayload<T extends InvestorOnboardingConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorOnboardingConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorOnboardingConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorOnboardingConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorOnboardingConfigGroupByOutputType[P]>;
}>>;
export type InvestorOnboardingConfigWhereInput = {
    AND?: Prisma.InvestorOnboardingConfigWhereInput | Prisma.InvestorOnboardingConfigWhereInput[];
    OR?: Prisma.InvestorOnboardingConfigWhereInput[];
    NOT?: Prisma.InvestorOnboardingConfigWhereInput | Prisma.InvestorOnboardingConfigWhereInput[];
    id?: Prisma.UuidFilter<"InvestorOnboardingConfig"> | string;
    version?: Prisma.IntFilter<"InvestorOnboardingConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestorOnboardingConfig"> | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFilter<"InvestorOnboardingConfig"> | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFilter<"InvestorOnboardingConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"InvestorOnboardingConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestorOnboardingConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorOnboardingConfig"> | Date | string;
};
export type InvestorOnboardingConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestorOnboardingConfigWhereInput | Prisma.InvestorOnboardingConfigWhereInput[];
    OR?: Prisma.InvestorOnboardingConfigWhereInput[];
    NOT?: Prisma.InvestorOnboardingConfigWhereInput | Prisma.InvestorOnboardingConfigWhereInput[];
    version?: Prisma.IntFilter<"InvestorOnboardingConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestorOnboardingConfig"> | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFilter<"InvestorOnboardingConfig"> | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFilter<"InvestorOnboardingConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"InvestorOnboardingConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestorOnboardingConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorOnboardingConfig"> | Date | string;
}, "id">;
export type InvestorOnboardingConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorOnboardingConfigCountOrderByAggregateInput;
    _avg?: Prisma.InvestorOnboardingConfigAvgOrderByAggregateInput;
    _max?: Prisma.InvestorOnboardingConfigMaxOrderByAggregateInput;
    _min?: Prisma.InvestorOnboardingConfigMinOrderByAggregateInput;
    _sum?: Prisma.InvestorOnboardingConfigSumOrderByAggregateInput;
};
export type InvestorOnboardingConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput | Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput | Prisma.InvestorOnboardingConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorOnboardingConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"InvestorOnboardingConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"InvestorOnboardingConfig"> | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntWithAggregatesFilter<"InvestorOnboardingConfig"> | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntWithAggregatesFilter<"InvestorOnboardingConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"InvestorOnboardingConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorOnboardingConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorOnboardingConfig"> | Date | string;
};
export type InvestorOnboardingConfigCreateInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    expressDepositCapKobo: bigint | number;
    stage2CompletionDeadlineDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorOnboardingConfigUncheckedCreateInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    expressDepositCapKobo: bigint | number;
    stage2CompletionDeadlineDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorOnboardingConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorOnboardingConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorOnboardingConfigCreateManyInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    expressDepositCapKobo: bigint | number;
    stage2CompletionDeadlineDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorOnboardingConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorOnboardingConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    expressDepositCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stage2CompletionDeadlineDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorOnboardingConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    expressDepositCapKobo?: Prisma.SortOrder;
    stage2CompletionDeadlineDays?: Prisma.SortOrder;
};
export type InvestorOnboardingConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    expressDepositCapKobo?: boolean;
    stage2CompletionDeadlineDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorOnboardingConfig"]>;
export type InvestorOnboardingConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    expressDepositCapKobo?: boolean;
    stage2CompletionDeadlineDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorOnboardingConfig"]>;
export type InvestorOnboardingConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    expressDepositCapKobo?: boolean;
    stage2CompletionDeadlineDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorOnboardingConfig"]>;
export type InvestorOnboardingConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    expressDepositCapKobo?: boolean;
    stage2CompletionDeadlineDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type InvestorOnboardingConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "expressDepositCapKobo" | "stage2CompletionDeadlineDays" | "boardResolutionRef" | "approvedByUserId" | "createdAt", ExtArgs["result"]["investorOnboardingConfig"]>;
export type $InvestorOnboardingConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorOnboardingConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        expressDepositCapKobo: bigint;
        stage2CompletionDeadlineDays: number;
        boardResolutionRef: string | null;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorOnboardingConfig"]>;
    composites: {};
};
export type InvestorOnboardingConfigGetPayload<S extends boolean | null | undefined | InvestorOnboardingConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload, S>;
export type InvestorOnboardingConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorOnboardingConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorOnboardingConfigCountAggregateInputType | true;
};
export interface InvestorOnboardingConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorOnboardingConfig'];
        meta: {
            name: 'InvestorOnboardingConfig';
        };
    };
    findUnique<T extends InvestorOnboardingConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorOnboardingConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorOnboardingConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorOnboardingConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorOnboardingConfigFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorOnboardingConfigCreateArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorOnboardingConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorOnboardingConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorOnboardingConfigDeleteArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorOnboardingConfigUpdateArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorOnboardingConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorOnboardingConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorOnboardingConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorOnboardingConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorOnboardingConfigUpsertArgs>(args: Prisma.SelectSubset<T, InvestorOnboardingConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorOnboardingConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorOnboardingConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorOnboardingConfigCountArgs>(args?: Prisma.Subset<T, InvestorOnboardingConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorOnboardingConfigCountAggregateOutputType> : number>;
    aggregate<T extends InvestorOnboardingConfigAggregateArgs>(args: Prisma.Subset<T, InvestorOnboardingConfigAggregateArgs>): Prisma.PrismaPromise<GetInvestorOnboardingConfigAggregateType<T>>;
    groupBy<T extends InvestorOnboardingConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorOnboardingConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorOnboardingConfigGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorOnboardingConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorOnboardingConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorOnboardingConfigFieldRefs;
}
export interface Prisma__InvestorOnboardingConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorOnboardingConfigFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorOnboardingConfig", 'String'>;
    readonly version: Prisma.FieldRef<"InvestorOnboardingConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"InvestorOnboardingConfig", 'GovernedItemStatus'>;
    readonly expressDepositCapKobo: Prisma.FieldRef<"InvestorOnboardingConfig", 'BigInt'>;
    readonly stage2CompletionDeadlineDays: Prisma.FieldRef<"InvestorOnboardingConfig", 'Int'>;
    readonly boardResolutionRef: Prisma.FieldRef<"InvestorOnboardingConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"InvestorOnboardingConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorOnboardingConfig", 'DateTime'>;
}
export type InvestorOnboardingConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorOnboardingConfigWhereUniqueInput;
};
export type InvestorOnboardingConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorOnboardingConfigWhereUniqueInput;
};
export type InvestorOnboardingConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    orderBy?: Prisma.InvestorOnboardingConfigOrderByWithRelationInput | Prisma.InvestorOnboardingConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorOnboardingConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorOnboardingConfigScalarFieldEnum | Prisma.InvestorOnboardingConfigScalarFieldEnum[];
};
export type InvestorOnboardingConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    orderBy?: Prisma.InvestorOnboardingConfigOrderByWithRelationInput | Prisma.InvestorOnboardingConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorOnboardingConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorOnboardingConfigScalarFieldEnum | Prisma.InvestorOnboardingConfigScalarFieldEnum[];
};
export type InvestorOnboardingConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    orderBy?: Prisma.InvestorOnboardingConfigOrderByWithRelationInput | Prisma.InvestorOnboardingConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorOnboardingConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorOnboardingConfigScalarFieldEnum | Prisma.InvestorOnboardingConfigScalarFieldEnum[];
};
export type InvestorOnboardingConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorOnboardingConfigCreateInput, Prisma.InvestorOnboardingConfigUncheckedCreateInput>;
};
export type InvestorOnboardingConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorOnboardingConfigCreateManyInput | Prisma.InvestorOnboardingConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorOnboardingConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    data: Prisma.InvestorOnboardingConfigCreateManyInput | Prisma.InvestorOnboardingConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorOnboardingConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorOnboardingConfigUpdateInput, Prisma.InvestorOnboardingConfigUncheckedUpdateInput>;
    where: Prisma.InvestorOnboardingConfigWhereUniqueInput;
};
export type InvestorOnboardingConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorOnboardingConfigUpdateManyMutationInput, Prisma.InvestorOnboardingConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    limit?: number;
};
export type InvestorOnboardingConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorOnboardingConfigUpdateManyMutationInput, Prisma.InvestorOnboardingConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    limit?: number;
};
export type InvestorOnboardingConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorOnboardingConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorOnboardingConfigCreateInput, Prisma.InvestorOnboardingConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorOnboardingConfigUpdateInput, Prisma.InvestorOnboardingConfigUncheckedUpdateInput>;
};
export type InvestorOnboardingConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorOnboardingConfigWhereUniqueInput;
};
export type InvestorOnboardingConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorOnboardingConfigWhereInput;
    limit?: number;
};
export type InvestorOnboardingConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorOnboardingConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOnboardingConfigOmit<ExtArgs> | null;
};
