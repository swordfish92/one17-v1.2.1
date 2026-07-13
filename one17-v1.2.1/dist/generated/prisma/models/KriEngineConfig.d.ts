import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KriEngineConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$KriEngineConfigPayload>;
export type AggregateKriEngineConfig = {
    _count: KriEngineConfigCountAggregateOutputType | null;
    _avg: KriEngineConfigAvgAggregateOutputType | null;
    _sum: KriEngineConfigSumAggregateOutputType | null;
    _min: KriEngineConfigMinAggregateOutputType | null;
    _max: KriEngineConfigMaxAggregateOutputType | null;
};
export type KriEngineConfigAvgAggregateOutputType = {
    id: number | null;
    provisionalAccrualAgingDays: number | null;
};
export type KriEngineConfigSumAggregateOutputType = {
    id: number | null;
    provisionalAccrualAgingDays: number | null;
};
export type KriEngineConfigMinAggregateOutputType = {
    id: number | null;
    provisionalAccrualAgingDays: number | null;
    updatedAt: Date | null;
};
export type KriEngineConfigMaxAggregateOutputType = {
    id: number | null;
    provisionalAccrualAgingDays: number | null;
    updatedAt: Date | null;
};
export type KriEngineConfigCountAggregateOutputType = {
    id: number;
    provisionalAccrualAgingDays: number;
    updatedAt: number;
    _all: number;
};
export type KriEngineConfigAvgAggregateInputType = {
    id?: true;
    provisionalAccrualAgingDays?: true;
};
export type KriEngineConfigSumAggregateInputType = {
    id?: true;
    provisionalAccrualAgingDays?: true;
};
export type KriEngineConfigMinAggregateInputType = {
    id?: true;
    provisionalAccrualAgingDays?: true;
    updatedAt?: true;
};
export type KriEngineConfigMaxAggregateInputType = {
    id?: true;
    provisionalAccrualAgingDays?: true;
    updatedAt?: true;
};
export type KriEngineConfigCountAggregateInputType = {
    id?: true;
    provisionalAccrualAgingDays?: true;
    updatedAt?: true;
    _all?: true;
};
export type KriEngineConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEngineConfigWhereInput;
    orderBy?: Prisma.KriEngineConfigOrderByWithRelationInput | Prisma.KriEngineConfigOrderByWithRelationInput[];
    cursor?: Prisma.KriEngineConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KriEngineConfigCountAggregateInputType;
    _avg?: KriEngineConfigAvgAggregateInputType;
    _sum?: KriEngineConfigSumAggregateInputType;
    _min?: KriEngineConfigMinAggregateInputType;
    _max?: KriEngineConfigMaxAggregateInputType;
};
export type GetKriEngineConfigAggregateType<T extends KriEngineConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateKriEngineConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKriEngineConfig[P]> : Prisma.GetScalarType<T[P], AggregateKriEngineConfig[P]>;
};
export type KriEngineConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEngineConfigWhereInput;
    orderBy?: Prisma.KriEngineConfigOrderByWithAggregationInput | Prisma.KriEngineConfigOrderByWithAggregationInput[];
    by: Prisma.KriEngineConfigScalarFieldEnum[] | Prisma.KriEngineConfigScalarFieldEnum;
    having?: Prisma.KriEngineConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KriEngineConfigCountAggregateInputType | true;
    _avg?: KriEngineConfigAvgAggregateInputType;
    _sum?: KriEngineConfigSumAggregateInputType;
    _min?: KriEngineConfigMinAggregateInputType;
    _max?: KriEngineConfigMaxAggregateInputType;
};
export type KriEngineConfigGroupByOutputType = {
    id: number;
    provisionalAccrualAgingDays: number;
    updatedAt: Date;
    _count: KriEngineConfigCountAggregateOutputType | null;
    _avg: KriEngineConfigAvgAggregateOutputType | null;
    _sum: KriEngineConfigSumAggregateOutputType | null;
    _min: KriEngineConfigMinAggregateOutputType | null;
    _max: KriEngineConfigMaxAggregateOutputType | null;
};
export type GetKriEngineConfigGroupByPayload<T extends KriEngineConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KriEngineConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KriEngineConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KriEngineConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KriEngineConfigGroupByOutputType[P]>;
}>>;
export type KriEngineConfigWhereInput = {
    AND?: Prisma.KriEngineConfigWhereInput | Prisma.KriEngineConfigWhereInput[];
    OR?: Prisma.KriEngineConfigWhereInput[];
    NOT?: Prisma.KriEngineConfigWhereInput | Prisma.KriEngineConfigWhereInput[];
    id?: Prisma.IntFilter<"KriEngineConfig"> | number;
    provisionalAccrualAgingDays?: Prisma.IntFilter<"KriEngineConfig"> | number;
    updatedAt?: Prisma.DateTimeFilter<"KriEngineConfig"> | Date | string;
};
export type KriEngineConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KriEngineConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.KriEngineConfigWhereInput | Prisma.KriEngineConfigWhereInput[];
    OR?: Prisma.KriEngineConfigWhereInput[];
    NOT?: Prisma.KriEngineConfigWhereInput | Prisma.KriEngineConfigWhereInput[];
    provisionalAccrualAgingDays?: Prisma.IntFilter<"KriEngineConfig"> | number;
    updatedAt?: Prisma.DateTimeFilter<"KriEngineConfig"> | Date | string;
}, "id">;
export type KriEngineConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.KriEngineConfigCountOrderByAggregateInput;
    _avg?: Prisma.KriEngineConfigAvgOrderByAggregateInput;
    _max?: Prisma.KriEngineConfigMaxOrderByAggregateInput;
    _min?: Prisma.KriEngineConfigMinOrderByAggregateInput;
    _sum?: Prisma.KriEngineConfigSumOrderByAggregateInput;
};
export type KriEngineConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.KriEngineConfigScalarWhereWithAggregatesInput | Prisma.KriEngineConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.KriEngineConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KriEngineConfigScalarWhereWithAggregatesInput | Prisma.KriEngineConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"KriEngineConfig"> | number;
    provisionalAccrualAgingDays?: Prisma.IntWithAggregatesFilter<"KriEngineConfig"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"KriEngineConfig"> | Date | string;
};
export type KriEngineConfigCreateInput = {
    id?: number;
    provisionalAccrualAgingDays?: number;
    updatedAt?: Date | string;
};
export type KriEngineConfigUncheckedCreateInput = {
    id?: number;
    provisionalAccrualAgingDays?: number;
    updatedAt?: Date | string;
};
export type KriEngineConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    provisionalAccrualAgingDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriEngineConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    provisionalAccrualAgingDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriEngineConfigCreateManyInput = {
    id?: number;
    provisionalAccrualAgingDays?: number;
    updatedAt?: Date | string;
};
export type KriEngineConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    provisionalAccrualAgingDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriEngineConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    provisionalAccrualAgingDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriEngineConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KriEngineConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
};
export type KriEngineConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KriEngineConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KriEngineConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provisionalAccrualAgingDays?: Prisma.SortOrder;
};
export type KriEngineConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provisionalAccrualAgingDays?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["kriEngineConfig"]>;
export type KriEngineConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provisionalAccrualAgingDays?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["kriEngineConfig"]>;
export type KriEngineConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provisionalAccrualAgingDays?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["kriEngineConfig"]>;
export type KriEngineConfigSelectScalar = {
    id?: boolean;
    provisionalAccrualAgingDays?: boolean;
    updatedAt?: boolean;
};
export type KriEngineConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "provisionalAccrualAgingDays" | "updatedAt", ExtArgs["result"]["kriEngineConfig"]>;
export type $KriEngineConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KriEngineConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        provisionalAccrualAgingDays: number;
        updatedAt: Date;
    }, ExtArgs["result"]["kriEngineConfig"]>;
    composites: {};
};
export type KriEngineConfigGetPayload<S extends boolean | null | undefined | KriEngineConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload, S>;
export type KriEngineConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KriEngineConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KriEngineConfigCountAggregateInputType | true;
};
export interface KriEngineConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KriEngineConfig'];
        meta: {
            name: 'KriEngineConfig';
        };
    };
    findUnique<T extends KriEngineConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, KriEngineConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KriEngineConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KriEngineConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KriEngineConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KriEngineConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KriEngineConfigFindManyArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KriEngineConfigCreateArgs>(args: Prisma.SelectSubset<T, KriEngineConfigCreateArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KriEngineConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KriEngineConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KriEngineConfigDeleteArgs>(args: Prisma.SelectSubset<T, KriEngineConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KriEngineConfigUpdateArgs>(args: Prisma.SelectSubset<T, KriEngineConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KriEngineConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, KriEngineConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KriEngineConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, KriEngineConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KriEngineConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KriEngineConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KriEngineConfigUpsertArgs>(args: Prisma.SelectSubset<T, KriEngineConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__KriEngineConfigClient<runtime.Types.Result.GetResult<Prisma.$KriEngineConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KriEngineConfigCountArgs>(args?: Prisma.Subset<T, KriEngineConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KriEngineConfigCountAggregateOutputType> : number>;
    aggregate<T extends KriEngineConfigAggregateArgs>(args: Prisma.Subset<T, KriEngineConfigAggregateArgs>): Prisma.PrismaPromise<GetKriEngineConfigAggregateType<T>>;
    groupBy<T extends KriEngineConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KriEngineConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: KriEngineConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KriEngineConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKriEngineConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KriEngineConfigFieldRefs;
}
export interface Prisma__KriEngineConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KriEngineConfigFieldRefs {
    readonly id: Prisma.FieldRef<"KriEngineConfig", 'Int'>;
    readonly provisionalAccrualAgingDays: Prisma.FieldRef<"KriEngineConfig", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"KriEngineConfig", 'DateTime'>;
}
export type KriEngineConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where: Prisma.KriEngineConfigWhereUniqueInput;
};
export type KriEngineConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where: Prisma.KriEngineConfigWhereUniqueInput;
};
export type KriEngineConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where?: Prisma.KriEngineConfigWhereInput;
    orderBy?: Prisma.KriEngineConfigOrderByWithRelationInput | Prisma.KriEngineConfigOrderByWithRelationInput[];
    cursor?: Prisma.KriEngineConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEngineConfigScalarFieldEnum | Prisma.KriEngineConfigScalarFieldEnum[];
};
export type KriEngineConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where?: Prisma.KriEngineConfigWhereInput;
    orderBy?: Prisma.KriEngineConfigOrderByWithRelationInput | Prisma.KriEngineConfigOrderByWithRelationInput[];
    cursor?: Prisma.KriEngineConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEngineConfigScalarFieldEnum | Prisma.KriEngineConfigScalarFieldEnum[];
};
export type KriEngineConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where?: Prisma.KriEngineConfigWhereInput;
    orderBy?: Prisma.KriEngineConfigOrderByWithRelationInput | Prisma.KriEngineConfigOrderByWithRelationInput[];
    cursor?: Prisma.KriEngineConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEngineConfigScalarFieldEnum | Prisma.KriEngineConfigScalarFieldEnum[];
};
export type KriEngineConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEngineConfigCreateInput, Prisma.KriEngineConfigUncheckedCreateInput>;
};
export type KriEngineConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KriEngineConfigCreateManyInput | Prisma.KriEngineConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriEngineConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    data: Prisma.KriEngineConfigCreateManyInput | Prisma.KriEngineConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriEngineConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEngineConfigUpdateInput, Prisma.KriEngineConfigUncheckedUpdateInput>;
    where: Prisma.KriEngineConfigWhereUniqueInput;
};
export type KriEngineConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KriEngineConfigUpdateManyMutationInput, Prisma.KriEngineConfigUncheckedUpdateManyInput>;
    where?: Prisma.KriEngineConfigWhereInput;
    limit?: number;
};
export type KriEngineConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEngineConfigUpdateManyMutationInput, Prisma.KriEngineConfigUncheckedUpdateManyInput>;
    where?: Prisma.KriEngineConfigWhereInput;
    limit?: number;
};
export type KriEngineConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where: Prisma.KriEngineConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriEngineConfigCreateInput, Prisma.KriEngineConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KriEngineConfigUpdateInput, Prisma.KriEngineConfigUncheckedUpdateInput>;
};
export type KriEngineConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
    where: Prisma.KriEngineConfigWhereUniqueInput;
};
export type KriEngineConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEngineConfigWhereInput;
    limit?: number;
};
export type KriEngineConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEngineConfigSelect<ExtArgs> | null;
    omit?: Prisma.KriEngineConfigOmit<ExtArgs> | null;
};
