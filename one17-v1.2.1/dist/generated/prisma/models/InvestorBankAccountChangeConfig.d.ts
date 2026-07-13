import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorBankAccountChangeConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorBankAccountChangeConfigPayload>;
export type AggregateInvestorBankAccountChangeConfig = {
    _count: InvestorBankAccountChangeConfigCountAggregateOutputType | null;
    _avg: InvestorBankAccountChangeConfigAvgAggregateOutputType | null;
    _sum: InvestorBankAccountChangeConfigSumAggregateOutputType | null;
    _min: InvestorBankAccountChangeConfigMinAggregateOutputType | null;
    _max: InvestorBankAccountChangeConfigMaxAggregateOutputType | null;
};
export type InvestorBankAccountChangeConfigAvgAggregateOutputType = {
    version: number | null;
    coolingOffDays: number | null;
};
export type InvestorBankAccountChangeConfigSumAggregateOutputType = {
    version: number | null;
    coolingOffDays: number | null;
};
export type InvestorBankAccountChangeConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    coolingOffDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorBankAccountChangeConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    coolingOffDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorBankAccountChangeConfigCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    coolingOffDays: number;
    boardResolutionRef: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type InvestorBankAccountChangeConfigAvgAggregateInputType = {
    version?: true;
    coolingOffDays?: true;
};
export type InvestorBankAccountChangeConfigSumAggregateInputType = {
    version?: true;
    coolingOffDays?: true;
};
export type InvestorBankAccountChangeConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    coolingOffDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestorBankAccountChangeConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    coolingOffDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestorBankAccountChangeConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    coolingOffDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorBankAccountChangeConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    orderBy?: Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput | Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorBankAccountChangeConfigCountAggregateInputType;
    _avg?: InvestorBankAccountChangeConfigAvgAggregateInputType;
    _sum?: InvestorBankAccountChangeConfigSumAggregateInputType;
    _min?: InvestorBankAccountChangeConfigMinAggregateInputType;
    _max?: InvestorBankAccountChangeConfigMaxAggregateInputType;
};
export type GetInvestorBankAccountChangeConfigAggregateType<T extends InvestorBankAccountChangeConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorBankAccountChangeConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorBankAccountChangeConfig[P]> : Prisma.GetScalarType<T[P], AggregateInvestorBankAccountChangeConfig[P]>;
};
export type InvestorBankAccountChangeConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    orderBy?: Prisma.InvestorBankAccountChangeConfigOrderByWithAggregationInput | Prisma.InvestorBankAccountChangeConfigOrderByWithAggregationInput[];
    by: Prisma.InvestorBankAccountChangeConfigScalarFieldEnum[] | Prisma.InvestorBankAccountChangeConfigScalarFieldEnum;
    having?: Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorBankAccountChangeConfigCountAggregateInputType | true;
    _avg?: InvestorBankAccountChangeConfigAvgAggregateInputType;
    _sum?: InvestorBankAccountChangeConfigSumAggregateInputType;
    _min?: InvestorBankAccountChangeConfigMinAggregateInputType;
    _max?: InvestorBankAccountChangeConfigMaxAggregateInputType;
};
export type InvestorBankAccountChangeConfigGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    coolingOffDays: number;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: InvestorBankAccountChangeConfigCountAggregateOutputType | null;
    _avg: InvestorBankAccountChangeConfigAvgAggregateOutputType | null;
    _sum: InvestorBankAccountChangeConfigSumAggregateOutputType | null;
    _min: InvestorBankAccountChangeConfigMinAggregateOutputType | null;
    _max: InvestorBankAccountChangeConfigMaxAggregateOutputType | null;
};
export type GetInvestorBankAccountChangeConfigGroupByPayload<T extends InvestorBankAccountChangeConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorBankAccountChangeConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorBankAccountChangeConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorBankAccountChangeConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorBankAccountChangeConfigGroupByOutputType[P]>;
}>>;
export type InvestorBankAccountChangeConfigWhereInput = {
    AND?: Prisma.InvestorBankAccountChangeConfigWhereInput | Prisma.InvestorBankAccountChangeConfigWhereInput[];
    OR?: Prisma.InvestorBankAccountChangeConfigWhereInput[];
    NOT?: Prisma.InvestorBankAccountChangeConfigWhereInput | Prisma.InvestorBankAccountChangeConfigWhereInput[];
    id?: Prisma.UuidFilter<"InvestorBankAccountChangeConfig"> | string;
    version?: Prisma.IntFilter<"InvestorBankAccountChangeConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestorBankAccountChangeConfig"> | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFilter<"InvestorBankAccountChangeConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"InvestorBankAccountChangeConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestorBankAccountChangeConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorBankAccountChangeConfig"> | Date | string;
};
export type InvestorBankAccountChangeConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorBankAccountChangeConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestorBankAccountChangeConfigWhereInput | Prisma.InvestorBankAccountChangeConfigWhereInput[];
    OR?: Prisma.InvestorBankAccountChangeConfigWhereInput[];
    NOT?: Prisma.InvestorBankAccountChangeConfigWhereInput | Prisma.InvestorBankAccountChangeConfigWhereInput[];
    version?: Prisma.IntFilter<"InvestorBankAccountChangeConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestorBankAccountChangeConfig"> | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFilter<"InvestorBankAccountChangeConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"InvestorBankAccountChangeConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestorBankAccountChangeConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorBankAccountChangeConfig"> | Date | string;
}, "id">;
export type InvestorBankAccountChangeConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorBankAccountChangeConfigCountOrderByAggregateInput;
    _avg?: Prisma.InvestorBankAccountChangeConfigAvgOrderByAggregateInput;
    _max?: Prisma.InvestorBankAccountChangeConfigMaxOrderByAggregateInput;
    _min?: Prisma.InvestorBankAccountChangeConfigMinOrderByAggregateInput;
    _sum?: Prisma.InvestorBankAccountChangeConfigSumOrderByAggregateInput;
};
export type InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput | Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput | Prisma.InvestorBankAccountChangeConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorBankAccountChangeConfig"> | Date | string;
};
export type InvestorBankAccountChangeConfigCreateInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    coolingOffDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorBankAccountChangeConfigUncheckedCreateInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    coolingOffDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorBankAccountChangeConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorBankAccountChangeConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorBankAccountChangeConfigCreateManyInput = {
    id?: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    coolingOffDays: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorBankAccountChangeConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorBankAccountChangeConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    coolingOffDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorBankAccountChangeConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorBankAccountChangeConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
};
export type InvestorBankAccountChangeConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorBankAccountChangeConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorBankAccountChangeConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    coolingOffDays?: Prisma.SortOrder;
};
export type EnumGovernedItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.GovernedItemStatus;
};
export type InvestorBankAccountChangeConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    coolingOffDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorBankAccountChangeConfig"]>;
export type InvestorBankAccountChangeConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    coolingOffDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorBankAccountChangeConfig"]>;
export type InvestorBankAccountChangeConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    coolingOffDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["investorBankAccountChangeConfig"]>;
export type InvestorBankAccountChangeConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    coolingOffDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type InvestorBankAccountChangeConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "coolingOffDays" | "boardResolutionRef" | "approvedByUserId" | "createdAt", ExtArgs["result"]["investorBankAccountChangeConfig"]>;
export type $InvestorBankAccountChangeConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorBankAccountChangeConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        coolingOffDays: number;
        boardResolutionRef: string | null;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorBankAccountChangeConfig"]>;
    composites: {};
};
export type InvestorBankAccountChangeConfigGetPayload<S extends boolean | null | undefined | InvestorBankAccountChangeConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload, S>;
export type InvestorBankAccountChangeConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorBankAccountChangeConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorBankAccountChangeConfigCountAggregateInputType | true;
};
export interface InvestorBankAccountChangeConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorBankAccountChangeConfig'];
        meta: {
            name: 'InvestorBankAccountChangeConfig';
        };
    };
    findUnique<T extends InvestorBankAccountChangeConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorBankAccountChangeConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorBankAccountChangeConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorBankAccountChangeConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorBankAccountChangeConfigFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorBankAccountChangeConfigCreateArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorBankAccountChangeConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorBankAccountChangeConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorBankAccountChangeConfigDeleteArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorBankAccountChangeConfigUpdateArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorBankAccountChangeConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorBankAccountChangeConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorBankAccountChangeConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorBankAccountChangeConfigUpsertArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountChangeConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorBankAccountChangeConfigCountArgs>(args?: Prisma.Subset<T, InvestorBankAccountChangeConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorBankAccountChangeConfigCountAggregateOutputType> : number>;
    aggregate<T extends InvestorBankAccountChangeConfigAggregateArgs>(args: Prisma.Subset<T, InvestorBankAccountChangeConfigAggregateArgs>): Prisma.PrismaPromise<GetInvestorBankAccountChangeConfigAggregateType<T>>;
    groupBy<T extends InvestorBankAccountChangeConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorBankAccountChangeConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorBankAccountChangeConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorBankAccountChangeConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorBankAccountChangeConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorBankAccountChangeConfigFieldRefs;
}
export interface Prisma__InvestorBankAccountChangeConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorBankAccountChangeConfigFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'String'>;
    readonly version: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'GovernedItemStatus'>;
    readonly coolingOffDays: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'Int'>;
    readonly boardResolutionRef: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorBankAccountChangeConfig", 'DateTime'>;
}
export type InvestorBankAccountChangeConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
};
export type InvestorBankAccountChangeConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
};
export type InvestorBankAccountChangeConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    orderBy?: Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput | Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountChangeConfigScalarFieldEnum | Prisma.InvestorBankAccountChangeConfigScalarFieldEnum[];
};
export type InvestorBankAccountChangeConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    orderBy?: Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput | Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountChangeConfigScalarFieldEnum | Prisma.InvestorBankAccountChangeConfigScalarFieldEnum[];
};
export type InvestorBankAccountChangeConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    orderBy?: Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput | Prisma.InvestorBankAccountChangeConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountChangeConfigScalarFieldEnum | Prisma.InvestorBankAccountChangeConfigScalarFieldEnum[];
};
export type InvestorBankAccountChangeConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigCreateInput, Prisma.InvestorBankAccountChangeConfigUncheckedCreateInput>;
};
export type InvestorBankAccountChangeConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorBankAccountChangeConfigCreateManyInput | Prisma.InvestorBankAccountChangeConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorBankAccountChangeConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    data: Prisma.InvestorBankAccountChangeConfigCreateManyInput | Prisma.InvestorBankAccountChangeConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorBankAccountChangeConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigUpdateInput, Prisma.InvestorBankAccountChangeConfigUncheckedUpdateInput>;
    where: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
};
export type InvestorBankAccountChangeConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigUpdateManyMutationInput, Prisma.InvestorBankAccountChangeConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    limit?: number;
};
export type InvestorBankAccountChangeConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigUpdateManyMutationInput, Prisma.InvestorBankAccountChangeConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    limit?: number;
};
export type InvestorBankAccountChangeConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigCreateInput, Prisma.InvestorBankAccountChangeConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorBankAccountChangeConfigUpdateInput, Prisma.InvestorBankAccountChangeConfigUncheckedUpdateInput>;
};
export type InvestorBankAccountChangeConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorBankAccountChangeConfigWhereUniqueInput;
};
export type InvestorBankAccountChangeConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountChangeConfigWhereInput;
    limit?: number;
};
export type InvestorBankAccountChangeConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeConfigOmit<ExtArgs> | null;
};
