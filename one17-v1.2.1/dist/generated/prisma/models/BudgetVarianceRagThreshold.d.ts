import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetVarianceRagThresholdModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetVarianceRagThresholdPayload>;
export type AggregateBudgetVarianceRagThreshold = {
    _count: BudgetVarianceRagThresholdCountAggregateOutputType | null;
    _avg: BudgetVarianceRagThresholdAvgAggregateOutputType | null;
    _sum: BudgetVarianceRagThresholdSumAggregateOutputType | null;
    _min: BudgetVarianceRagThresholdMinAggregateOutputType | null;
    _max: BudgetVarianceRagThresholdMaxAggregateOutputType | null;
};
export type BudgetVarianceRagThresholdAvgAggregateOutputType = {
    version: number | null;
    amberPct: runtime.Decimal | null;
    redPct: runtime.Decimal | null;
};
export type BudgetVarianceRagThresholdSumAggregateOutputType = {
    version: number | null;
    amberPct: runtime.Decimal | null;
    redPct: runtime.Decimal | null;
};
export type BudgetVarianceRagThresholdMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    amberPct: runtime.Decimal | null;
    redPct: runtime.Decimal | null;
    effectiveFrom: Date | null;
};
export type BudgetVarianceRagThresholdMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    amberPct: runtime.Decimal | null;
    redPct: runtime.Decimal | null;
    effectiveFrom: Date | null;
};
export type BudgetVarianceRagThresholdCountAggregateOutputType = {
    id: number;
    version: number;
    amberPct: number;
    redPct: number;
    effectiveFrom: number;
    _all: number;
};
export type BudgetVarianceRagThresholdAvgAggregateInputType = {
    version?: true;
    amberPct?: true;
    redPct?: true;
};
export type BudgetVarianceRagThresholdSumAggregateInputType = {
    version?: true;
    amberPct?: true;
    redPct?: true;
};
export type BudgetVarianceRagThresholdMinAggregateInputType = {
    id?: true;
    version?: true;
    amberPct?: true;
    redPct?: true;
    effectiveFrom?: true;
};
export type BudgetVarianceRagThresholdMaxAggregateInputType = {
    id?: true;
    version?: true;
    amberPct?: true;
    redPct?: true;
    effectiveFrom?: true;
};
export type BudgetVarianceRagThresholdCountAggregateInputType = {
    id?: true;
    version?: true;
    amberPct?: true;
    redPct?: true;
    effectiveFrom?: true;
    _all?: true;
};
export type BudgetVarianceRagThresholdAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    orderBy?: Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput | Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetVarianceRagThresholdCountAggregateInputType;
    _avg?: BudgetVarianceRagThresholdAvgAggregateInputType;
    _sum?: BudgetVarianceRagThresholdSumAggregateInputType;
    _min?: BudgetVarianceRagThresholdMinAggregateInputType;
    _max?: BudgetVarianceRagThresholdMaxAggregateInputType;
};
export type GetBudgetVarianceRagThresholdAggregateType<T extends BudgetVarianceRagThresholdAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgetVarianceRagThreshold]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudgetVarianceRagThreshold[P]> : Prisma.GetScalarType<T[P], AggregateBudgetVarianceRagThreshold[P]>;
};
export type BudgetVarianceRagThresholdGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    orderBy?: Prisma.BudgetVarianceRagThresholdOrderByWithAggregationInput | Prisma.BudgetVarianceRagThresholdOrderByWithAggregationInput[];
    by: Prisma.BudgetVarianceRagThresholdScalarFieldEnum[] | Prisma.BudgetVarianceRagThresholdScalarFieldEnum;
    having?: Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetVarianceRagThresholdCountAggregateInputType | true;
    _avg?: BudgetVarianceRagThresholdAvgAggregateInputType;
    _sum?: BudgetVarianceRagThresholdSumAggregateInputType;
    _min?: BudgetVarianceRagThresholdMinAggregateInputType;
    _max?: BudgetVarianceRagThresholdMaxAggregateInputType;
};
export type BudgetVarianceRagThresholdGroupByOutputType = {
    id: string;
    version: number;
    amberPct: runtime.Decimal;
    redPct: runtime.Decimal;
    effectiveFrom: Date;
    _count: BudgetVarianceRagThresholdCountAggregateOutputType | null;
    _avg: BudgetVarianceRagThresholdAvgAggregateOutputType | null;
    _sum: BudgetVarianceRagThresholdSumAggregateOutputType | null;
    _min: BudgetVarianceRagThresholdMinAggregateOutputType | null;
    _max: BudgetVarianceRagThresholdMaxAggregateOutputType | null;
};
export type GetBudgetVarianceRagThresholdGroupByPayload<T extends BudgetVarianceRagThresholdGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetVarianceRagThresholdGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetVarianceRagThresholdGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetVarianceRagThresholdGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetVarianceRagThresholdGroupByOutputType[P]>;
}>>;
export type BudgetVarianceRagThresholdWhereInput = {
    AND?: Prisma.BudgetVarianceRagThresholdWhereInput | Prisma.BudgetVarianceRagThresholdWhereInput[];
    OR?: Prisma.BudgetVarianceRagThresholdWhereInput[];
    NOT?: Prisma.BudgetVarianceRagThresholdWhereInput | Prisma.BudgetVarianceRagThresholdWhereInput[];
    id?: Prisma.UuidFilter<"BudgetVarianceRagThreshold"> | string;
    version?: Prisma.IntFilter<"BudgetVarianceRagThreshold"> | number;
    amberPct?: Prisma.DecimalFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFilter<"BudgetVarianceRagThreshold"> | Date | string;
};
export type BudgetVarianceRagThresholdOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    AND?: Prisma.BudgetVarianceRagThresholdWhereInput | Prisma.BudgetVarianceRagThresholdWhereInput[];
    OR?: Prisma.BudgetVarianceRagThresholdWhereInput[];
    NOT?: Prisma.BudgetVarianceRagThresholdWhereInput | Prisma.BudgetVarianceRagThresholdWhereInput[];
    amberPct?: Prisma.DecimalFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFilter<"BudgetVarianceRagThreshold"> | Date | string;
}, "id" | "version">;
export type BudgetVarianceRagThresholdOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    _count?: Prisma.BudgetVarianceRagThresholdCountOrderByAggregateInput;
    _avg?: Prisma.BudgetVarianceRagThresholdAvgOrderByAggregateInput;
    _max?: Prisma.BudgetVarianceRagThresholdMaxOrderByAggregateInput;
    _min?: Prisma.BudgetVarianceRagThresholdMinOrderByAggregateInput;
    _sum?: Prisma.BudgetVarianceRagThresholdSumOrderByAggregateInput;
};
export type BudgetVarianceRagThresholdScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput | Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput | Prisma.BudgetVarianceRagThresholdScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BudgetVarianceRagThreshold"> | string;
    version?: Prisma.IntWithAggregatesFilter<"BudgetVarianceRagThreshold"> | number;
    amberPct?: Prisma.DecimalWithAggregatesFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalWithAggregatesFilter<"BudgetVarianceRagThreshold"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"BudgetVarianceRagThreshold"> | Date | string;
};
export type BudgetVarianceRagThresholdCreateInput = {
    id?: string;
    version: number;
    amberPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Date | string;
};
export type BudgetVarianceRagThresholdUncheckedCreateInput = {
    id?: string;
    version: number;
    amberPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Date | string;
};
export type BudgetVarianceRagThresholdUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    amberPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetVarianceRagThresholdUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    amberPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetVarianceRagThresholdCreateManyInput = {
    id?: string;
    version: number;
    amberPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Date | string;
};
export type BudgetVarianceRagThresholdUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    amberPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetVarianceRagThresholdUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    amberPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    redPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetVarianceRagThresholdCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    amberPct?: Prisma.SortOrder;
    redPct?: Prisma.SortOrder;
};
export type BudgetVarianceRagThresholdSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    amberPct?: boolean;
    redPct?: boolean;
    effectiveFrom?: boolean;
}, ExtArgs["result"]["budgetVarianceRagThreshold"]>;
export type BudgetVarianceRagThresholdSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    amberPct?: boolean;
    redPct?: boolean;
    effectiveFrom?: boolean;
}, ExtArgs["result"]["budgetVarianceRagThreshold"]>;
export type BudgetVarianceRagThresholdSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    amberPct?: boolean;
    redPct?: boolean;
    effectiveFrom?: boolean;
}, ExtArgs["result"]["budgetVarianceRagThreshold"]>;
export type BudgetVarianceRagThresholdSelectScalar = {
    id?: boolean;
    version?: boolean;
    amberPct?: boolean;
    redPct?: boolean;
    effectiveFrom?: boolean;
};
export type BudgetVarianceRagThresholdOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "amberPct" | "redPct" | "effectiveFrom", ExtArgs["result"]["budgetVarianceRagThreshold"]>;
export type $BudgetVarianceRagThresholdPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BudgetVarianceRagThreshold";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        amberPct: runtime.Decimal;
        redPct: runtime.Decimal;
        effectiveFrom: Date;
    }, ExtArgs["result"]["budgetVarianceRagThreshold"]>;
    composites: {};
};
export type BudgetVarianceRagThresholdGetPayload<S extends boolean | null | undefined | BudgetVarianceRagThresholdDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload, S>;
export type BudgetVarianceRagThresholdCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetVarianceRagThresholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetVarianceRagThresholdCountAggregateInputType | true;
};
export interface BudgetVarianceRagThresholdDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BudgetVarianceRagThreshold'];
        meta: {
            name: 'BudgetVarianceRagThreshold';
        };
    };
    findUnique<T extends BudgetVarianceRagThresholdFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetVarianceRagThresholdFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetVarianceRagThresholdFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetVarianceRagThresholdFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetVarianceRagThresholdFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetVarianceRagThresholdCreateArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetVarianceRagThresholdCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetVarianceRagThresholdCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetVarianceRagThresholdDeleteArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetVarianceRagThresholdUpdateArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetVarianceRagThresholdDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetVarianceRagThresholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetVarianceRagThresholdUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetVarianceRagThresholdUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetVarianceRagThresholdUpsertArgs>(args: Prisma.SelectSubset<T, BudgetVarianceRagThresholdUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetVarianceRagThresholdClient<runtime.Types.Result.GetResult<Prisma.$BudgetVarianceRagThresholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetVarianceRagThresholdCountArgs>(args?: Prisma.Subset<T, BudgetVarianceRagThresholdCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetVarianceRagThresholdCountAggregateOutputType> : number>;
    aggregate<T extends BudgetVarianceRagThresholdAggregateArgs>(args: Prisma.Subset<T, BudgetVarianceRagThresholdAggregateArgs>): Prisma.PrismaPromise<GetBudgetVarianceRagThresholdAggregateType<T>>;
    groupBy<T extends BudgetVarianceRagThresholdGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetVarianceRagThresholdGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetVarianceRagThresholdGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetVarianceRagThresholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetVarianceRagThresholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetVarianceRagThresholdFieldRefs;
}
export interface Prisma__BudgetVarianceRagThresholdClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetVarianceRagThresholdFieldRefs {
    readonly id: Prisma.FieldRef<"BudgetVarianceRagThreshold", 'String'>;
    readonly version: Prisma.FieldRef<"BudgetVarianceRagThreshold", 'Int'>;
    readonly amberPct: Prisma.FieldRef<"BudgetVarianceRagThreshold", 'Decimal'>;
    readonly redPct: Prisma.FieldRef<"BudgetVarianceRagThreshold", 'Decimal'>;
    readonly effectiveFrom: Prisma.FieldRef<"BudgetVarianceRagThreshold", 'DateTime'>;
}
export type BudgetVarianceRagThresholdFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
};
export type BudgetVarianceRagThresholdFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
};
export type BudgetVarianceRagThresholdFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    orderBy?: Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput | Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVarianceRagThresholdScalarFieldEnum | Prisma.BudgetVarianceRagThresholdScalarFieldEnum[];
};
export type BudgetVarianceRagThresholdFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    orderBy?: Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput | Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVarianceRagThresholdScalarFieldEnum | Prisma.BudgetVarianceRagThresholdScalarFieldEnum[];
};
export type BudgetVarianceRagThresholdFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    orderBy?: Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput | Prisma.BudgetVarianceRagThresholdOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVarianceRagThresholdScalarFieldEnum | Prisma.BudgetVarianceRagThresholdScalarFieldEnum[];
};
export type BudgetVarianceRagThresholdCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVarianceRagThresholdCreateInput, Prisma.BudgetVarianceRagThresholdUncheckedCreateInput>;
};
export type BudgetVarianceRagThresholdCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetVarianceRagThresholdCreateManyInput | Prisma.BudgetVarianceRagThresholdCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetVarianceRagThresholdCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    data: Prisma.BudgetVarianceRagThresholdCreateManyInput | Prisma.BudgetVarianceRagThresholdCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetVarianceRagThresholdUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVarianceRagThresholdUpdateInput, Prisma.BudgetVarianceRagThresholdUncheckedUpdateInput>;
    where: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
};
export type BudgetVarianceRagThresholdUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetVarianceRagThresholdUpdateManyMutationInput, Prisma.BudgetVarianceRagThresholdUncheckedUpdateManyInput>;
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    limit?: number;
};
export type BudgetVarianceRagThresholdUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVarianceRagThresholdUpdateManyMutationInput, Prisma.BudgetVarianceRagThresholdUncheckedUpdateManyInput>;
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    limit?: number;
};
export type BudgetVarianceRagThresholdUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVarianceRagThresholdCreateInput, Prisma.BudgetVarianceRagThresholdUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetVarianceRagThresholdUpdateInput, Prisma.BudgetVarianceRagThresholdUncheckedUpdateInput>;
};
export type BudgetVarianceRagThresholdDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
    where: Prisma.BudgetVarianceRagThresholdWhereUniqueInput;
};
export type BudgetVarianceRagThresholdDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVarianceRagThresholdWhereInput;
    limit?: number;
};
export type BudgetVarianceRagThresholdDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVarianceRagThresholdSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVarianceRagThresholdOmit<ExtArgs> | null;
};
