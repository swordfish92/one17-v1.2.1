import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CadreTierMapModel = runtime.Types.Result.DefaultSelection<Prisma.$CadreTierMapPayload>;
export type AggregateCadreTierMap = {
    _count: CadreTierMapCountAggregateOutputType | null;
    _min: CadreTierMapMinAggregateOutputType | null;
    _max: CadreTierMapMaxAggregateOutputType | null;
};
export type CadreTierMapMinAggregateOutputType = {
    cadre: string | null;
    tier: $Enums.PmsTier | null;
};
export type CadreTierMapMaxAggregateOutputType = {
    cadre: string | null;
    tier: $Enums.PmsTier | null;
};
export type CadreTierMapCountAggregateOutputType = {
    cadre: number;
    tier: number;
    _all: number;
};
export type CadreTierMapMinAggregateInputType = {
    cadre?: true;
    tier?: true;
};
export type CadreTierMapMaxAggregateInputType = {
    cadre?: true;
    tier?: true;
};
export type CadreTierMapCountAggregateInputType = {
    cadre?: true;
    tier?: true;
    _all?: true;
};
export type CadreTierMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CadreTierMapWhereInput;
    orderBy?: Prisma.CadreTierMapOrderByWithRelationInput | Prisma.CadreTierMapOrderByWithRelationInput[];
    cursor?: Prisma.CadreTierMapWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CadreTierMapCountAggregateInputType;
    _min?: CadreTierMapMinAggregateInputType;
    _max?: CadreTierMapMaxAggregateInputType;
};
export type GetCadreTierMapAggregateType<T extends CadreTierMapAggregateArgs> = {
    [P in keyof T & keyof AggregateCadreTierMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCadreTierMap[P]> : Prisma.GetScalarType<T[P], AggregateCadreTierMap[P]>;
};
export type CadreTierMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CadreTierMapWhereInput;
    orderBy?: Prisma.CadreTierMapOrderByWithAggregationInput | Prisma.CadreTierMapOrderByWithAggregationInput[];
    by: Prisma.CadreTierMapScalarFieldEnum[] | Prisma.CadreTierMapScalarFieldEnum;
    having?: Prisma.CadreTierMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CadreTierMapCountAggregateInputType | true;
    _min?: CadreTierMapMinAggregateInputType;
    _max?: CadreTierMapMaxAggregateInputType;
};
export type CadreTierMapGroupByOutputType = {
    cadre: string;
    tier: $Enums.PmsTier;
    _count: CadreTierMapCountAggregateOutputType | null;
    _min: CadreTierMapMinAggregateOutputType | null;
    _max: CadreTierMapMaxAggregateOutputType | null;
};
export type GetCadreTierMapGroupByPayload<T extends CadreTierMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CadreTierMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CadreTierMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CadreTierMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CadreTierMapGroupByOutputType[P]>;
}>>;
export type CadreTierMapWhereInput = {
    AND?: Prisma.CadreTierMapWhereInput | Prisma.CadreTierMapWhereInput[];
    OR?: Prisma.CadreTierMapWhereInput[];
    NOT?: Prisma.CadreTierMapWhereInput | Prisma.CadreTierMapWhereInput[];
    cadre?: Prisma.StringFilter<"CadreTierMap"> | string;
    tier?: Prisma.EnumPmsTierFilter<"CadreTierMap"> | $Enums.PmsTier;
};
export type CadreTierMapOrderByWithRelationInput = {
    cadre?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
};
export type CadreTierMapWhereUniqueInput = Prisma.AtLeast<{
    cadre?: string;
    AND?: Prisma.CadreTierMapWhereInput | Prisma.CadreTierMapWhereInput[];
    OR?: Prisma.CadreTierMapWhereInput[];
    NOT?: Prisma.CadreTierMapWhereInput | Prisma.CadreTierMapWhereInput[];
    tier?: Prisma.EnumPmsTierFilter<"CadreTierMap"> | $Enums.PmsTier;
}, "cadre">;
export type CadreTierMapOrderByWithAggregationInput = {
    cadre?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    _count?: Prisma.CadreTierMapCountOrderByAggregateInput;
    _max?: Prisma.CadreTierMapMaxOrderByAggregateInput;
    _min?: Prisma.CadreTierMapMinOrderByAggregateInput;
};
export type CadreTierMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.CadreTierMapScalarWhereWithAggregatesInput | Prisma.CadreTierMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.CadreTierMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CadreTierMapScalarWhereWithAggregatesInput | Prisma.CadreTierMapScalarWhereWithAggregatesInput[];
    cadre?: Prisma.StringWithAggregatesFilter<"CadreTierMap"> | string;
    tier?: Prisma.EnumPmsTierWithAggregatesFilter<"CadreTierMap"> | $Enums.PmsTier;
};
export type CadreTierMapCreateInput = {
    cadre: string;
    tier: $Enums.PmsTier;
};
export type CadreTierMapUncheckedCreateInput = {
    cadre: string;
    tier: $Enums.PmsTier;
};
export type CadreTierMapUpdateInput = {
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
};
export type CadreTierMapUncheckedUpdateInput = {
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
};
export type CadreTierMapCreateManyInput = {
    cadre: string;
    tier: $Enums.PmsTier;
};
export type CadreTierMapUpdateManyMutationInput = {
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
};
export type CadreTierMapUncheckedUpdateManyInput = {
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
};
export type CadreTierMapCountOrderByAggregateInput = {
    cadre?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
};
export type CadreTierMapMaxOrderByAggregateInput = {
    cadre?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
};
export type CadreTierMapMinOrderByAggregateInput = {
    cadre?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
};
export type CadreTierMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cadre?: boolean;
    tier?: boolean;
}, ExtArgs["result"]["cadreTierMap"]>;
export type CadreTierMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cadre?: boolean;
    tier?: boolean;
}, ExtArgs["result"]["cadreTierMap"]>;
export type CadreTierMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cadre?: boolean;
    tier?: boolean;
}, ExtArgs["result"]["cadreTierMap"]>;
export type CadreTierMapSelectScalar = {
    cadre?: boolean;
    tier?: boolean;
};
export type CadreTierMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cadre" | "tier", ExtArgs["result"]["cadreTierMap"]>;
export type $CadreTierMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CadreTierMap";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cadre: string;
        tier: $Enums.PmsTier;
    }, ExtArgs["result"]["cadreTierMap"]>;
    composites: {};
};
export type CadreTierMapGetPayload<S extends boolean | null | undefined | CadreTierMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload, S>;
export type CadreTierMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CadreTierMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CadreTierMapCountAggregateInputType | true;
};
export interface CadreTierMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CadreTierMap'];
        meta: {
            name: 'CadreTierMap';
        };
    };
    findUnique<T extends CadreTierMapFindUniqueArgs>(args: Prisma.SelectSubset<T, CadreTierMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CadreTierMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CadreTierMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CadreTierMapFindFirstArgs>(args?: Prisma.SelectSubset<T, CadreTierMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CadreTierMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CadreTierMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CadreTierMapFindManyArgs>(args?: Prisma.SelectSubset<T, CadreTierMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CadreTierMapCreateArgs>(args: Prisma.SelectSubset<T, CadreTierMapCreateArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CadreTierMapCreateManyArgs>(args?: Prisma.SelectSubset<T, CadreTierMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CadreTierMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CadreTierMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CadreTierMapDeleteArgs>(args: Prisma.SelectSubset<T, CadreTierMapDeleteArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CadreTierMapUpdateArgs>(args: Prisma.SelectSubset<T, CadreTierMapUpdateArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CadreTierMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, CadreTierMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CadreTierMapUpdateManyArgs>(args: Prisma.SelectSubset<T, CadreTierMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CadreTierMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CadreTierMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CadreTierMapUpsertArgs>(args: Prisma.SelectSubset<T, CadreTierMapUpsertArgs<ExtArgs>>): Prisma.Prisma__CadreTierMapClient<runtime.Types.Result.GetResult<Prisma.$CadreTierMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CadreTierMapCountArgs>(args?: Prisma.Subset<T, CadreTierMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CadreTierMapCountAggregateOutputType> : number>;
    aggregate<T extends CadreTierMapAggregateArgs>(args: Prisma.Subset<T, CadreTierMapAggregateArgs>): Prisma.PrismaPromise<GetCadreTierMapAggregateType<T>>;
    groupBy<T extends CadreTierMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CadreTierMapGroupByArgs['orderBy'];
    } : {
        orderBy?: CadreTierMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CadreTierMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadreTierMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CadreTierMapFieldRefs;
}
export interface Prisma__CadreTierMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CadreTierMapFieldRefs {
    readonly cadre: Prisma.FieldRef<"CadreTierMap", 'String'>;
    readonly tier: Prisma.FieldRef<"CadreTierMap", 'PmsTier'>;
}
export type CadreTierMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where: Prisma.CadreTierMapWhereUniqueInput;
};
export type CadreTierMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where: Prisma.CadreTierMapWhereUniqueInput;
};
export type CadreTierMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where?: Prisma.CadreTierMapWhereInput;
    orderBy?: Prisma.CadreTierMapOrderByWithRelationInput | Prisma.CadreTierMapOrderByWithRelationInput[];
    cursor?: Prisma.CadreTierMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CadreTierMapScalarFieldEnum | Prisma.CadreTierMapScalarFieldEnum[];
};
export type CadreTierMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where?: Prisma.CadreTierMapWhereInput;
    orderBy?: Prisma.CadreTierMapOrderByWithRelationInput | Prisma.CadreTierMapOrderByWithRelationInput[];
    cursor?: Prisma.CadreTierMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CadreTierMapScalarFieldEnum | Prisma.CadreTierMapScalarFieldEnum[];
};
export type CadreTierMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where?: Prisma.CadreTierMapWhereInput;
    orderBy?: Prisma.CadreTierMapOrderByWithRelationInput | Prisma.CadreTierMapOrderByWithRelationInput[];
    cursor?: Prisma.CadreTierMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CadreTierMapScalarFieldEnum | Prisma.CadreTierMapScalarFieldEnum[];
};
export type CadreTierMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CadreTierMapCreateInput, Prisma.CadreTierMapUncheckedCreateInput>;
};
export type CadreTierMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CadreTierMapCreateManyInput | Prisma.CadreTierMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CadreTierMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    data: Prisma.CadreTierMapCreateManyInput | Prisma.CadreTierMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CadreTierMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CadreTierMapUpdateInput, Prisma.CadreTierMapUncheckedUpdateInput>;
    where: Prisma.CadreTierMapWhereUniqueInput;
};
export type CadreTierMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CadreTierMapUpdateManyMutationInput, Prisma.CadreTierMapUncheckedUpdateManyInput>;
    where?: Prisma.CadreTierMapWhereInput;
    limit?: number;
};
export type CadreTierMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CadreTierMapUpdateManyMutationInput, Prisma.CadreTierMapUncheckedUpdateManyInput>;
    where?: Prisma.CadreTierMapWhereInput;
    limit?: number;
};
export type CadreTierMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where: Prisma.CadreTierMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.CadreTierMapCreateInput, Prisma.CadreTierMapUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CadreTierMapUpdateInput, Prisma.CadreTierMapUncheckedUpdateInput>;
};
export type CadreTierMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
    where: Prisma.CadreTierMapWhereUniqueInput;
};
export type CadreTierMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CadreTierMapWhereInput;
    limit?: number;
};
export type CadreTierMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CadreTierMapSelect<ExtArgs> | null;
    omit?: Prisma.CadreTierMapOmit<ExtArgs> | null;
};
