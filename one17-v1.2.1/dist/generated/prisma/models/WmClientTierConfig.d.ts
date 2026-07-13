import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmClientTierConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$WmClientTierConfigPayload>;
export type AggregateWmClientTierConfig = {
    _count: WmClientTierConfigCountAggregateOutputType | null;
    _avg: WmClientTierConfigAvgAggregateOutputType | null;
    _sum: WmClientTierConfigSumAggregateOutputType | null;
    _min: WmClientTierConfigMinAggregateOutputType | null;
    _max: WmClientTierConfigMaxAggregateOutputType | null;
};
export type WmClientTierConfigAvgAggregateOutputType = {
    minTotalWealthUsd: runtime.Decimal | null;
    sortOrder: number | null;
};
export type WmClientTierConfigSumAggregateOutputType = {
    minTotalWealthUsd: runtime.Decimal | null;
    sortOrder: number | null;
};
export type WmClientTierConfigMinAggregateOutputType = {
    id: string | null;
    tier: $Enums.WmClientTier | null;
    minTotalWealthUsd: runtime.Decimal | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type WmClientTierConfigMaxAggregateOutputType = {
    id: string | null;
    tier: $Enums.WmClientTier | null;
    minTotalWealthUsd: runtime.Decimal | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type WmClientTierConfigCountAggregateOutputType = {
    id: number;
    tier: number;
    minTotalWealthUsd: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type WmClientTierConfigAvgAggregateInputType = {
    minTotalWealthUsd?: true;
    sortOrder?: true;
};
export type WmClientTierConfigSumAggregateInputType = {
    minTotalWealthUsd?: true;
    sortOrder?: true;
};
export type WmClientTierConfigMinAggregateInputType = {
    id?: true;
    tier?: true;
    minTotalWealthUsd?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type WmClientTierConfigMaxAggregateInputType = {
    id?: true;
    tier?: true;
    minTotalWealthUsd?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type WmClientTierConfigCountAggregateInputType = {
    id?: true;
    tier?: true;
    minTotalWealthUsd?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type WmClientTierConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientTierConfigWhereInput;
    orderBy?: Prisma.WmClientTierConfigOrderByWithRelationInput | Prisma.WmClientTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmClientTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmClientTierConfigCountAggregateInputType;
    _avg?: WmClientTierConfigAvgAggregateInputType;
    _sum?: WmClientTierConfigSumAggregateInputType;
    _min?: WmClientTierConfigMinAggregateInputType;
    _max?: WmClientTierConfigMaxAggregateInputType;
};
export type GetWmClientTierConfigAggregateType<T extends WmClientTierConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateWmClientTierConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmClientTierConfig[P]> : Prisma.GetScalarType<T[P], AggregateWmClientTierConfig[P]>;
};
export type WmClientTierConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientTierConfigWhereInput;
    orderBy?: Prisma.WmClientTierConfigOrderByWithAggregationInput | Prisma.WmClientTierConfigOrderByWithAggregationInput[];
    by: Prisma.WmClientTierConfigScalarFieldEnum[] | Prisma.WmClientTierConfigScalarFieldEnum;
    having?: Prisma.WmClientTierConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmClientTierConfigCountAggregateInputType | true;
    _avg?: WmClientTierConfigAvgAggregateInputType;
    _sum?: WmClientTierConfigSumAggregateInputType;
    _min?: WmClientTierConfigMinAggregateInputType;
    _max?: WmClientTierConfigMaxAggregateInputType;
};
export type WmClientTierConfigGroupByOutputType = {
    id: string;
    tier: $Enums.WmClientTier;
    minTotalWealthUsd: runtime.Decimal;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    _count: WmClientTierConfigCountAggregateOutputType | null;
    _avg: WmClientTierConfigAvgAggregateOutputType | null;
    _sum: WmClientTierConfigSumAggregateOutputType | null;
    _min: WmClientTierConfigMinAggregateOutputType | null;
    _max: WmClientTierConfigMaxAggregateOutputType | null;
};
export type GetWmClientTierConfigGroupByPayload<T extends WmClientTierConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmClientTierConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmClientTierConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmClientTierConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmClientTierConfigGroupByOutputType[P]>;
}>>;
export type WmClientTierConfigWhereInput = {
    AND?: Prisma.WmClientTierConfigWhereInput | Prisma.WmClientTierConfigWhereInput[];
    OR?: Prisma.WmClientTierConfigWhereInput[];
    NOT?: Prisma.WmClientTierConfigWhereInput | Prisma.WmClientTierConfigWhereInput[];
    id?: Prisma.UuidFilter<"WmClientTierConfig"> | string;
    tier?: Prisma.EnumWmClientTierFilter<"WmClientTierConfig"> | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFilter<"WmClientTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFilter<"WmClientTierConfig"> | number;
    isActive?: Prisma.BoolFilter<"WmClientTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WmClientTierConfig"> | Date | string;
};
export type WmClientTierConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientTierConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmClientTierConfigWhereInput | Prisma.WmClientTierConfigWhereInput[];
    OR?: Prisma.WmClientTierConfigWhereInput[];
    NOT?: Prisma.WmClientTierConfigWhereInput | Prisma.WmClientTierConfigWhereInput[];
    tier?: Prisma.EnumWmClientTierFilter<"WmClientTierConfig"> | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFilter<"WmClientTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFilter<"WmClientTierConfig"> | number;
    isActive?: Prisma.BoolFilter<"WmClientTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WmClientTierConfig"> | Date | string;
}, "id">;
export type WmClientTierConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmClientTierConfigCountOrderByAggregateInput;
    _avg?: Prisma.WmClientTierConfigAvgOrderByAggregateInput;
    _max?: Prisma.WmClientTierConfigMaxOrderByAggregateInput;
    _min?: Prisma.WmClientTierConfigMinOrderByAggregateInput;
    _sum?: Prisma.WmClientTierConfigSumOrderByAggregateInput;
};
export type WmClientTierConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmClientTierConfigScalarWhereWithAggregatesInput | Prisma.WmClientTierConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmClientTierConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmClientTierConfigScalarWhereWithAggregatesInput | Prisma.WmClientTierConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmClientTierConfig"> | string;
    tier?: Prisma.EnumWmClientTierWithAggregatesFilter<"WmClientTierConfig"> | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalWithAggregatesFilter<"WmClientTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"WmClientTierConfig"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"WmClientTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmClientTierConfig"> | Date | string;
};
export type WmClientTierConfigCreateInput = {
    id?: string;
    tier: $Enums.WmClientTier;
    minTotalWealthUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type WmClientTierConfigUncheckedCreateInput = {
    id?: string;
    tier: $Enums.WmClientTier;
    minTotalWealthUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type WmClientTierConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientTierConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientTierConfigCreateManyInput = {
    id?: string;
    tier: $Enums.WmClientTier;
    minTotalWealthUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type WmClientTierConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientTierConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    minTotalWealthUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientTierConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientTierConfigAvgOrderByAggregateInput = {
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type WmClientTierConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientTierConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientTierConfigSumOrderByAggregateInput = {
    minTotalWealthUsd?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EnumWmClientTierFieldUpdateOperationsInput = {
    set?: $Enums.WmClientTier;
};
export type WmClientTierConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    minTotalWealthUsd?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["wmClientTierConfig"]>;
export type WmClientTierConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    minTotalWealthUsd?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["wmClientTierConfig"]>;
export type WmClientTierConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    minTotalWealthUsd?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["wmClientTierConfig"]>;
export type WmClientTierConfigSelectScalar = {
    id?: boolean;
    tier?: boolean;
    minTotalWealthUsd?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type WmClientTierConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tier" | "minTotalWealthUsd" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["wmClientTierConfig"]>;
export type $WmClientTierConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmClientTierConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tier: $Enums.WmClientTier;
        minTotalWealthUsd: runtime.Decimal;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["wmClientTierConfig"]>;
    composites: {};
};
export type WmClientTierConfigGetPayload<S extends boolean | null | undefined | WmClientTierConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload, S>;
export type WmClientTierConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmClientTierConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmClientTierConfigCountAggregateInputType | true;
};
export interface WmClientTierConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmClientTierConfig'];
        meta: {
            name: 'WmClientTierConfig';
        };
    };
    findUnique<T extends WmClientTierConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmClientTierConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmClientTierConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmClientTierConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmClientTierConfigFindManyArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmClientTierConfigCreateArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigCreateArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmClientTierConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmClientTierConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmClientTierConfigDeleteArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmClientTierConfigUpdateArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmClientTierConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmClientTierConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmClientTierConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmClientTierConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmClientTierConfigUpsertArgs>(args: Prisma.SelectSubset<T, WmClientTierConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__WmClientTierConfigClient<runtime.Types.Result.GetResult<Prisma.$WmClientTierConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmClientTierConfigCountArgs>(args?: Prisma.Subset<T, WmClientTierConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmClientTierConfigCountAggregateOutputType> : number>;
    aggregate<T extends WmClientTierConfigAggregateArgs>(args: Prisma.Subset<T, WmClientTierConfigAggregateArgs>): Prisma.PrismaPromise<GetWmClientTierConfigAggregateType<T>>;
    groupBy<T extends WmClientTierConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmClientTierConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: WmClientTierConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmClientTierConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmClientTierConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmClientTierConfigFieldRefs;
}
export interface Prisma__WmClientTierConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmClientTierConfigFieldRefs {
    readonly id: Prisma.FieldRef<"WmClientTierConfig", 'String'>;
    readonly tier: Prisma.FieldRef<"WmClientTierConfig", 'WmClientTier'>;
    readonly minTotalWealthUsd: Prisma.FieldRef<"WmClientTierConfig", 'Decimal'>;
    readonly sortOrder: Prisma.FieldRef<"WmClientTierConfig", 'Int'>;
    readonly isActive: Prisma.FieldRef<"WmClientTierConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"WmClientTierConfig", 'DateTime'>;
}
export type WmClientTierConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where: Prisma.WmClientTierConfigWhereUniqueInput;
};
export type WmClientTierConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where: Prisma.WmClientTierConfigWhereUniqueInput;
};
export type WmClientTierConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where?: Prisma.WmClientTierConfigWhereInput;
    orderBy?: Prisma.WmClientTierConfigOrderByWithRelationInput | Prisma.WmClientTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmClientTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientTierConfigScalarFieldEnum | Prisma.WmClientTierConfigScalarFieldEnum[];
};
export type WmClientTierConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where?: Prisma.WmClientTierConfigWhereInput;
    orderBy?: Prisma.WmClientTierConfigOrderByWithRelationInput | Prisma.WmClientTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmClientTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientTierConfigScalarFieldEnum | Prisma.WmClientTierConfigScalarFieldEnum[];
};
export type WmClientTierConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where?: Prisma.WmClientTierConfigWhereInput;
    orderBy?: Prisma.WmClientTierConfigOrderByWithRelationInput | Prisma.WmClientTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmClientTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientTierConfigScalarFieldEnum | Prisma.WmClientTierConfigScalarFieldEnum[];
};
export type WmClientTierConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientTierConfigCreateInput, Prisma.WmClientTierConfigUncheckedCreateInput>;
};
export type WmClientTierConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmClientTierConfigCreateManyInput | Prisma.WmClientTierConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmClientTierConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    data: Prisma.WmClientTierConfigCreateManyInput | Prisma.WmClientTierConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmClientTierConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientTierConfigUpdateInput, Prisma.WmClientTierConfigUncheckedUpdateInput>;
    where: Prisma.WmClientTierConfigWhereUniqueInput;
};
export type WmClientTierConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmClientTierConfigUpdateManyMutationInput, Prisma.WmClientTierConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmClientTierConfigWhereInput;
    limit?: number;
};
export type WmClientTierConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientTierConfigUpdateManyMutationInput, Prisma.WmClientTierConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmClientTierConfigWhereInput;
    limit?: number;
};
export type WmClientTierConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where: Prisma.WmClientTierConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmClientTierConfigCreateInput, Prisma.WmClientTierConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmClientTierConfigUpdateInput, Prisma.WmClientTierConfigUncheckedUpdateInput>;
};
export type WmClientTierConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
    where: Prisma.WmClientTierConfigWhereUniqueInput;
};
export type WmClientTierConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientTierConfigWhereInput;
    limit?: number;
};
export type WmClientTierConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmClientTierConfigOmit<ExtArgs> | null;
};
