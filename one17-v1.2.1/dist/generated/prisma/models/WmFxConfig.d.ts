import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmFxConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$WmFxConfigPayload>;
export type AggregateWmFxConfig = {
    _count: WmFxConfigCountAggregateOutputType | null;
    _avg: WmFxConfigAvgAggregateOutputType | null;
    _sum: WmFxConfigSumAggregateOutputType | null;
    _min: WmFxConfigMinAggregateOutputType | null;
    _max: WmFxConfigMaxAggregateOutputType | null;
};
export type WmFxConfigAvgAggregateOutputType = {
    id: number | null;
    nairaPerUsd: runtime.Decimal | null;
};
export type WmFxConfigSumAggregateOutputType = {
    id: number | null;
    nairaPerUsd: runtime.Decimal | null;
};
export type WmFxConfigMinAggregateOutputType = {
    id: number | null;
    nairaPerUsd: runtime.Decimal | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type WmFxConfigMaxAggregateOutputType = {
    id: number | null;
    nairaPerUsd: runtime.Decimal | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type WmFxConfigCountAggregateOutputType = {
    id: number;
    nairaPerUsd: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type WmFxConfigAvgAggregateInputType = {
    id?: true;
    nairaPerUsd?: true;
};
export type WmFxConfigSumAggregateInputType = {
    id?: true;
    nairaPerUsd?: true;
};
export type WmFxConfigMinAggregateInputType = {
    id?: true;
    nairaPerUsd?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type WmFxConfigMaxAggregateInputType = {
    id?: true;
    nairaPerUsd?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type WmFxConfigCountAggregateInputType = {
    id?: true;
    nairaPerUsd?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type WmFxConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmFxConfigWhereInput;
    orderBy?: Prisma.WmFxConfigOrderByWithRelationInput | Prisma.WmFxConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmFxConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmFxConfigCountAggregateInputType;
    _avg?: WmFxConfigAvgAggregateInputType;
    _sum?: WmFxConfigSumAggregateInputType;
    _min?: WmFxConfigMinAggregateInputType;
    _max?: WmFxConfigMaxAggregateInputType;
};
export type GetWmFxConfigAggregateType<T extends WmFxConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateWmFxConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmFxConfig[P]> : Prisma.GetScalarType<T[P], AggregateWmFxConfig[P]>;
};
export type WmFxConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmFxConfigWhereInput;
    orderBy?: Prisma.WmFxConfigOrderByWithAggregationInput | Prisma.WmFxConfigOrderByWithAggregationInput[];
    by: Prisma.WmFxConfigScalarFieldEnum[] | Prisma.WmFxConfigScalarFieldEnum;
    having?: Prisma.WmFxConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmFxConfigCountAggregateInputType | true;
    _avg?: WmFxConfigAvgAggregateInputType;
    _sum?: WmFxConfigSumAggregateInputType;
    _min?: WmFxConfigMinAggregateInputType;
    _max?: WmFxConfigMaxAggregateInputType;
};
export type WmFxConfigGroupByOutputType = {
    id: number;
    nairaPerUsd: runtime.Decimal;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: WmFxConfigCountAggregateOutputType | null;
    _avg: WmFxConfigAvgAggregateOutputType | null;
    _sum: WmFxConfigSumAggregateOutputType | null;
    _min: WmFxConfigMinAggregateOutputType | null;
    _max: WmFxConfigMaxAggregateOutputType | null;
};
export type GetWmFxConfigGroupByPayload<T extends WmFxConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmFxConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmFxConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmFxConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmFxConfigGroupByOutputType[P]>;
}>>;
export type WmFxConfigWhereInput = {
    AND?: Prisma.WmFxConfigWhereInput | Prisma.WmFxConfigWhereInput[];
    OR?: Prisma.WmFxConfigWhereInput[];
    NOT?: Prisma.WmFxConfigWhereInput | Prisma.WmFxConfigWhereInput[];
    id?: Prisma.IntFilter<"WmFxConfig"> | number;
    nairaPerUsd?: Prisma.DecimalFilter<"WmFxConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.UuidNullableFilter<"WmFxConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"WmFxConfig"> | Date | string;
};
export type WmFxConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WmFxConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.WmFxConfigWhereInput | Prisma.WmFxConfigWhereInput[];
    OR?: Prisma.WmFxConfigWhereInput[];
    NOT?: Prisma.WmFxConfigWhereInput | Prisma.WmFxConfigWhereInput[];
    nairaPerUsd?: Prisma.DecimalFilter<"WmFxConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.UuidNullableFilter<"WmFxConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"WmFxConfig"> | Date | string;
}, "id">;
export type WmFxConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WmFxConfigCountOrderByAggregateInput;
    _avg?: Prisma.WmFxConfigAvgOrderByAggregateInput;
    _max?: Prisma.WmFxConfigMaxOrderByAggregateInput;
    _min?: Prisma.WmFxConfigMinOrderByAggregateInput;
    _sum?: Prisma.WmFxConfigSumOrderByAggregateInput;
};
export type WmFxConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmFxConfigScalarWhereWithAggregatesInput | Prisma.WmFxConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmFxConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmFxConfigScalarWhereWithAggregatesInput | Prisma.WmFxConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"WmFxConfig"> | number;
    nairaPerUsd?: Prisma.DecimalWithAggregatesFilter<"WmFxConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"WmFxConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WmFxConfig"> | Date | string;
};
export type WmFxConfigCreateInput = {
    id?: number;
    nairaPerUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type WmFxConfigUncheckedCreateInput = {
    id?: number;
    nairaPerUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type WmFxConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nairaPerUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmFxConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nairaPerUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmFxConfigCreateManyInput = {
    id?: number;
    nairaPerUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type WmFxConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nairaPerUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmFxConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nairaPerUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmFxConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WmFxConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
};
export type WmFxConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WmFxConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WmFxConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nairaPerUsd?: Prisma.SortOrder;
};
export type WmFxConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nairaPerUsd?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["wmFxConfig"]>;
export type WmFxConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nairaPerUsd?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["wmFxConfig"]>;
export type WmFxConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nairaPerUsd?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["wmFxConfig"]>;
export type WmFxConfigSelectScalar = {
    id?: boolean;
    nairaPerUsd?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type WmFxConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nairaPerUsd" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["wmFxConfig"]>;
export type $WmFxConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmFxConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nairaPerUsd: runtime.Decimal;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["wmFxConfig"]>;
    composites: {};
};
export type WmFxConfigGetPayload<S extends boolean | null | undefined | WmFxConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload, S>;
export type WmFxConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmFxConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmFxConfigCountAggregateInputType | true;
};
export interface WmFxConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmFxConfig'];
        meta: {
            name: 'WmFxConfig';
        };
    };
    findUnique<T extends WmFxConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, WmFxConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmFxConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmFxConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmFxConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, WmFxConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmFxConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmFxConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmFxConfigFindManyArgs>(args?: Prisma.SelectSubset<T, WmFxConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmFxConfigCreateArgs>(args: Prisma.SelectSubset<T, WmFxConfigCreateArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmFxConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, WmFxConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmFxConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmFxConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmFxConfigDeleteArgs>(args: Prisma.SelectSubset<T, WmFxConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmFxConfigUpdateArgs>(args: Prisma.SelectSubset<T, WmFxConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmFxConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmFxConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmFxConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, WmFxConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmFxConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmFxConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmFxConfigUpsertArgs>(args: Prisma.SelectSubset<T, WmFxConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__WmFxConfigClient<runtime.Types.Result.GetResult<Prisma.$WmFxConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmFxConfigCountArgs>(args?: Prisma.Subset<T, WmFxConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmFxConfigCountAggregateOutputType> : number>;
    aggregate<T extends WmFxConfigAggregateArgs>(args: Prisma.Subset<T, WmFxConfigAggregateArgs>): Prisma.PrismaPromise<GetWmFxConfigAggregateType<T>>;
    groupBy<T extends WmFxConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmFxConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: WmFxConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmFxConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmFxConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmFxConfigFieldRefs;
}
export interface Prisma__WmFxConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmFxConfigFieldRefs {
    readonly id: Prisma.FieldRef<"WmFxConfig", 'Int'>;
    readonly nairaPerUsd: Prisma.FieldRef<"WmFxConfig", 'Decimal'>;
    readonly updatedByUserId: Prisma.FieldRef<"WmFxConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"WmFxConfig", 'DateTime'>;
}
export type WmFxConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where: Prisma.WmFxConfigWhereUniqueInput;
};
export type WmFxConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where: Prisma.WmFxConfigWhereUniqueInput;
};
export type WmFxConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where?: Prisma.WmFxConfigWhereInput;
    orderBy?: Prisma.WmFxConfigOrderByWithRelationInput | Prisma.WmFxConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmFxConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmFxConfigScalarFieldEnum | Prisma.WmFxConfigScalarFieldEnum[];
};
export type WmFxConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where?: Prisma.WmFxConfigWhereInput;
    orderBy?: Prisma.WmFxConfigOrderByWithRelationInput | Prisma.WmFxConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmFxConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmFxConfigScalarFieldEnum | Prisma.WmFxConfigScalarFieldEnum[];
};
export type WmFxConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where?: Prisma.WmFxConfigWhereInput;
    orderBy?: Prisma.WmFxConfigOrderByWithRelationInput | Prisma.WmFxConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmFxConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmFxConfigScalarFieldEnum | Prisma.WmFxConfigScalarFieldEnum[];
};
export type WmFxConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmFxConfigCreateInput, Prisma.WmFxConfigUncheckedCreateInput>;
};
export type WmFxConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmFxConfigCreateManyInput | Prisma.WmFxConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmFxConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    data: Prisma.WmFxConfigCreateManyInput | Prisma.WmFxConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmFxConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmFxConfigUpdateInput, Prisma.WmFxConfigUncheckedUpdateInput>;
    where: Prisma.WmFxConfigWhereUniqueInput;
};
export type WmFxConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmFxConfigUpdateManyMutationInput, Prisma.WmFxConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmFxConfigWhereInput;
    limit?: number;
};
export type WmFxConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmFxConfigUpdateManyMutationInput, Prisma.WmFxConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmFxConfigWhereInput;
    limit?: number;
};
export type WmFxConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where: Prisma.WmFxConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmFxConfigCreateInput, Prisma.WmFxConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmFxConfigUpdateInput, Prisma.WmFxConfigUncheckedUpdateInput>;
};
export type WmFxConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
    where: Prisma.WmFxConfigWhereUniqueInput;
};
export type WmFxConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmFxConfigWhereInput;
    limit?: number;
};
export type WmFxConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmFxConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmFxConfigOmit<ExtArgs> | null;
};
