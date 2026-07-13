import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IncentiveBandConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$IncentiveBandConfigPayload>;
export type AggregateIncentiveBandConfig = {
    _count: IncentiveBandConfigCountAggregateOutputType | null;
    _avg: IncentiveBandConfigAvgAggregateOutputType | null;
    _sum: IncentiveBandConfigSumAggregateOutputType | null;
    _min: IncentiveBandConfigMinAggregateOutputType | null;
    _max: IncentiveBandConfigMaxAggregateOutputType | null;
};
export type IncentiveBandConfigAvgAggregateOutputType = {
    minScorePct: runtime.Decimal | null;
    payoutPct: runtime.Decimal | null;
    sortOrder: number | null;
};
export type IncentiveBandConfigSumAggregateOutputType = {
    minScorePct: runtime.Decimal | null;
    payoutPct: runtime.Decimal | null;
    sortOrder: number | null;
};
export type IncentiveBandConfigMinAggregateOutputType = {
    id: string | null;
    minScorePct: runtime.Decimal | null;
    payoutPct: runtime.Decimal | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type IncentiveBandConfigMaxAggregateOutputType = {
    id: string | null;
    minScorePct: runtime.Decimal | null;
    payoutPct: runtime.Decimal | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type IncentiveBandConfigCountAggregateOutputType = {
    id: number;
    minScorePct: number;
    payoutPct: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type IncentiveBandConfigAvgAggregateInputType = {
    minScorePct?: true;
    payoutPct?: true;
    sortOrder?: true;
};
export type IncentiveBandConfigSumAggregateInputType = {
    minScorePct?: true;
    payoutPct?: true;
    sortOrder?: true;
};
export type IncentiveBandConfigMinAggregateInputType = {
    id?: true;
    minScorePct?: true;
    payoutPct?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type IncentiveBandConfigMaxAggregateInputType = {
    id?: true;
    minScorePct?: true;
    payoutPct?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type IncentiveBandConfigCountAggregateInputType = {
    id?: true;
    minScorePct?: true;
    payoutPct?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type IncentiveBandConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncentiveBandConfigWhereInput;
    orderBy?: Prisma.IncentiveBandConfigOrderByWithRelationInput | Prisma.IncentiveBandConfigOrderByWithRelationInput[];
    cursor?: Prisma.IncentiveBandConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncentiveBandConfigCountAggregateInputType;
    _avg?: IncentiveBandConfigAvgAggregateInputType;
    _sum?: IncentiveBandConfigSumAggregateInputType;
    _min?: IncentiveBandConfigMinAggregateInputType;
    _max?: IncentiveBandConfigMaxAggregateInputType;
};
export type GetIncentiveBandConfigAggregateType<T extends IncentiveBandConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateIncentiveBandConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncentiveBandConfig[P]> : Prisma.GetScalarType<T[P], AggregateIncentiveBandConfig[P]>;
};
export type IncentiveBandConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncentiveBandConfigWhereInput;
    orderBy?: Prisma.IncentiveBandConfigOrderByWithAggregationInput | Prisma.IncentiveBandConfigOrderByWithAggregationInput[];
    by: Prisma.IncentiveBandConfigScalarFieldEnum[] | Prisma.IncentiveBandConfigScalarFieldEnum;
    having?: Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncentiveBandConfigCountAggregateInputType | true;
    _avg?: IncentiveBandConfigAvgAggregateInputType;
    _sum?: IncentiveBandConfigSumAggregateInputType;
    _min?: IncentiveBandConfigMinAggregateInputType;
    _max?: IncentiveBandConfigMaxAggregateInputType;
};
export type IncentiveBandConfigGroupByOutputType = {
    id: string;
    minScorePct: runtime.Decimal;
    payoutPct: runtime.Decimal;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    _count: IncentiveBandConfigCountAggregateOutputType | null;
    _avg: IncentiveBandConfigAvgAggregateOutputType | null;
    _sum: IncentiveBandConfigSumAggregateOutputType | null;
    _min: IncentiveBandConfigMinAggregateOutputType | null;
    _max: IncentiveBandConfigMaxAggregateOutputType | null;
};
export type GetIncentiveBandConfigGroupByPayload<T extends IncentiveBandConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncentiveBandConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncentiveBandConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncentiveBandConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncentiveBandConfigGroupByOutputType[P]>;
}>>;
export type IncentiveBandConfigWhereInput = {
    AND?: Prisma.IncentiveBandConfigWhereInput | Prisma.IncentiveBandConfigWhereInput[];
    OR?: Prisma.IncentiveBandConfigWhereInput[];
    NOT?: Prisma.IncentiveBandConfigWhereInput | Prisma.IncentiveBandConfigWhereInput[];
    id?: Prisma.UuidFilter<"IncentiveBandConfig"> | string;
    minScorePct?: Prisma.DecimalFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFilter<"IncentiveBandConfig"> | number;
    isActive?: Prisma.BoolFilter<"IncentiveBandConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"IncentiveBandConfig"> | Date | string;
};
export type IncentiveBandConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IncentiveBandConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IncentiveBandConfigWhereInput | Prisma.IncentiveBandConfigWhereInput[];
    OR?: Prisma.IncentiveBandConfigWhereInput[];
    NOT?: Prisma.IncentiveBandConfigWhereInput | Prisma.IncentiveBandConfigWhereInput[];
    minScorePct?: Prisma.DecimalFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFilter<"IncentiveBandConfig"> | number;
    isActive?: Prisma.BoolFilter<"IncentiveBandConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"IncentiveBandConfig"> | Date | string;
}, "id">;
export type IncentiveBandConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IncentiveBandConfigCountOrderByAggregateInput;
    _avg?: Prisma.IncentiveBandConfigAvgOrderByAggregateInput;
    _max?: Prisma.IncentiveBandConfigMaxOrderByAggregateInput;
    _min?: Prisma.IncentiveBandConfigMinOrderByAggregateInput;
    _sum?: Prisma.IncentiveBandConfigSumOrderByAggregateInput;
};
export type IncentiveBandConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput | Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput | Prisma.IncentiveBandConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"IncentiveBandConfig"> | string;
    minScorePct?: Prisma.DecimalWithAggregatesFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalWithAggregatesFilter<"IncentiveBandConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"IncentiveBandConfig"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"IncentiveBandConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IncentiveBandConfig"> | Date | string;
};
export type IncentiveBandConfigCreateInput = {
    id?: string;
    minScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type IncentiveBandConfigUncheckedCreateInput = {
    id?: string;
    minScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type IncentiveBandConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncentiveBandConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncentiveBandConfigCreateManyInput = {
    id?: string;
    minScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type IncentiveBandConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncentiveBandConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncentiveBandConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IncentiveBandConfigAvgOrderByAggregateInput = {
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type IncentiveBandConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IncentiveBandConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IncentiveBandConfigSumOrderByAggregateInput = {
    minScorePct?: Prisma.SortOrder;
    payoutPct?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type IncentiveBandConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minScorePct?: boolean;
    payoutPct?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["incentiveBandConfig"]>;
export type IncentiveBandConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minScorePct?: boolean;
    payoutPct?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["incentiveBandConfig"]>;
export type IncentiveBandConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minScorePct?: boolean;
    payoutPct?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["incentiveBandConfig"]>;
export type IncentiveBandConfigSelectScalar = {
    id?: boolean;
    minScorePct?: boolean;
    payoutPct?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type IncentiveBandConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "minScorePct" | "payoutPct" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["incentiveBandConfig"]>;
export type $IncentiveBandConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IncentiveBandConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        minScorePct: runtime.Decimal;
        payoutPct: runtime.Decimal;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["incentiveBandConfig"]>;
    composites: {};
};
export type IncentiveBandConfigGetPayload<S extends boolean | null | undefined | IncentiveBandConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload, S>;
export type IncentiveBandConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncentiveBandConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncentiveBandConfigCountAggregateInputType | true;
};
export interface IncentiveBandConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IncentiveBandConfig'];
        meta: {
            name: 'IncentiveBandConfig';
        };
    };
    findUnique<T extends IncentiveBandConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncentiveBandConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncentiveBandConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncentiveBandConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncentiveBandConfigFindManyArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncentiveBandConfigCreateArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigCreateArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncentiveBandConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncentiveBandConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncentiveBandConfigDeleteArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncentiveBandConfigUpdateArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncentiveBandConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncentiveBandConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncentiveBandConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncentiveBandConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncentiveBandConfigUpsertArgs>(args: Prisma.SelectSubset<T, IncentiveBandConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__IncentiveBandConfigClient<runtime.Types.Result.GetResult<Prisma.$IncentiveBandConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncentiveBandConfigCountArgs>(args?: Prisma.Subset<T, IncentiveBandConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncentiveBandConfigCountAggregateOutputType> : number>;
    aggregate<T extends IncentiveBandConfigAggregateArgs>(args: Prisma.Subset<T, IncentiveBandConfigAggregateArgs>): Prisma.PrismaPromise<GetIncentiveBandConfigAggregateType<T>>;
    groupBy<T extends IncentiveBandConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncentiveBandConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: IncentiveBandConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncentiveBandConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncentiveBandConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncentiveBandConfigFieldRefs;
}
export interface Prisma__IncentiveBandConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncentiveBandConfigFieldRefs {
    readonly id: Prisma.FieldRef<"IncentiveBandConfig", 'String'>;
    readonly minScorePct: Prisma.FieldRef<"IncentiveBandConfig", 'Decimal'>;
    readonly payoutPct: Prisma.FieldRef<"IncentiveBandConfig", 'Decimal'>;
    readonly sortOrder: Prisma.FieldRef<"IncentiveBandConfig", 'Int'>;
    readonly isActive: Prisma.FieldRef<"IncentiveBandConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"IncentiveBandConfig", 'DateTime'>;
}
export type IncentiveBandConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where: Prisma.IncentiveBandConfigWhereUniqueInput;
};
export type IncentiveBandConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where: Prisma.IncentiveBandConfigWhereUniqueInput;
};
export type IncentiveBandConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where?: Prisma.IncentiveBandConfigWhereInput;
    orderBy?: Prisma.IncentiveBandConfigOrderByWithRelationInput | Prisma.IncentiveBandConfigOrderByWithRelationInput[];
    cursor?: Prisma.IncentiveBandConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncentiveBandConfigScalarFieldEnum | Prisma.IncentiveBandConfigScalarFieldEnum[];
};
export type IncentiveBandConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where?: Prisma.IncentiveBandConfigWhereInput;
    orderBy?: Prisma.IncentiveBandConfigOrderByWithRelationInput | Prisma.IncentiveBandConfigOrderByWithRelationInput[];
    cursor?: Prisma.IncentiveBandConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncentiveBandConfigScalarFieldEnum | Prisma.IncentiveBandConfigScalarFieldEnum[];
};
export type IncentiveBandConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where?: Prisma.IncentiveBandConfigWhereInput;
    orderBy?: Prisma.IncentiveBandConfigOrderByWithRelationInput | Prisma.IncentiveBandConfigOrderByWithRelationInput[];
    cursor?: Prisma.IncentiveBandConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncentiveBandConfigScalarFieldEnum | Prisma.IncentiveBandConfigScalarFieldEnum[];
};
export type IncentiveBandConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncentiveBandConfigCreateInput, Prisma.IncentiveBandConfigUncheckedCreateInput>;
};
export type IncentiveBandConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncentiveBandConfigCreateManyInput | Prisma.IncentiveBandConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncentiveBandConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    data: Prisma.IncentiveBandConfigCreateManyInput | Prisma.IncentiveBandConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncentiveBandConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncentiveBandConfigUpdateInput, Prisma.IncentiveBandConfigUncheckedUpdateInput>;
    where: Prisma.IncentiveBandConfigWhereUniqueInput;
};
export type IncentiveBandConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncentiveBandConfigUpdateManyMutationInput, Prisma.IncentiveBandConfigUncheckedUpdateManyInput>;
    where?: Prisma.IncentiveBandConfigWhereInput;
    limit?: number;
};
export type IncentiveBandConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncentiveBandConfigUpdateManyMutationInput, Prisma.IncentiveBandConfigUncheckedUpdateManyInput>;
    where?: Prisma.IncentiveBandConfigWhereInput;
    limit?: number;
};
export type IncentiveBandConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where: Prisma.IncentiveBandConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncentiveBandConfigCreateInput, Prisma.IncentiveBandConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncentiveBandConfigUpdateInput, Prisma.IncentiveBandConfigUncheckedUpdateInput>;
};
export type IncentiveBandConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
    where: Prisma.IncentiveBandConfigWhereUniqueInput;
};
export type IncentiveBandConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncentiveBandConfigWhereInput;
    limit?: number;
};
export type IncentiveBandConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncentiveBandConfigSelect<ExtArgs> | null;
    omit?: Prisma.IncentiveBandConfigOmit<ExtArgs> | null;
};
