import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnterpriseRiskProfileEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$EnterpriseRiskProfileEntryPayload>;
export type AggregateEnterpriseRiskProfileEntry = {
    _count: EnterpriseRiskProfileEntryCountAggregateOutputType | null;
    _avg: EnterpriseRiskProfileEntryAvgAggregateOutputType | null;
    _sum: EnterpriseRiskProfileEntrySumAggregateOutputType | null;
    _min: EnterpriseRiskProfileEntryMinAggregateOutputType | null;
    _max: EnterpriseRiskProfileEntryMaxAggregateOutputType | null;
};
export type EnterpriseRiskProfileEntryAvgAggregateOutputType = {
    inherentScore: number | null;
    sortOrder: number | null;
};
export type EnterpriseRiskProfileEntrySumAggregateOutputType = {
    inherentScore: number | null;
    sortOrder: number | null;
};
export type EnterpriseRiskProfileEntryMinAggregateOutputType = {
    id: string | null;
    riskCategory: string | null;
    inherentScore: number | null;
    sortOrder: number | null;
    updatedAt: Date | null;
};
export type EnterpriseRiskProfileEntryMaxAggregateOutputType = {
    id: string | null;
    riskCategory: string | null;
    inherentScore: number | null;
    sortOrder: number | null;
    updatedAt: Date | null;
};
export type EnterpriseRiskProfileEntryCountAggregateOutputType = {
    id: number;
    riskCategory: number;
    inherentScore: number;
    sortOrder: number;
    updatedAt: number;
    _all: number;
};
export type EnterpriseRiskProfileEntryAvgAggregateInputType = {
    inherentScore?: true;
    sortOrder?: true;
};
export type EnterpriseRiskProfileEntrySumAggregateInputType = {
    inherentScore?: true;
    sortOrder?: true;
};
export type EnterpriseRiskProfileEntryMinAggregateInputType = {
    id?: true;
    riskCategory?: true;
    inherentScore?: true;
    sortOrder?: true;
    updatedAt?: true;
};
export type EnterpriseRiskProfileEntryMaxAggregateInputType = {
    id?: true;
    riskCategory?: true;
    inherentScore?: true;
    sortOrder?: true;
    updatedAt?: true;
};
export type EnterpriseRiskProfileEntryCountAggregateInputType = {
    id?: true;
    riskCategory?: true;
    inherentScore?: true;
    sortOrder?: true;
    updatedAt?: true;
    _all?: true;
};
export type EnterpriseRiskProfileEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    orderBy?: Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput | Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnterpriseRiskProfileEntryCountAggregateInputType;
    _avg?: EnterpriseRiskProfileEntryAvgAggregateInputType;
    _sum?: EnterpriseRiskProfileEntrySumAggregateInputType;
    _min?: EnterpriseRiskProfileEntryMinAggregateInputType;
    _max?: EnterpriseRiskProfileEntryMaxAggregateInputType;
};
export type GetEnterpriseRiskProfileEntryAggregateType<T extends EnterpriseRiskProfileEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateEnterpriseRiskProfileEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnterpriseRiskProfileEntry[P]> : Prisma.GetScalarType<T[P], AggregateEnterpriseRiskProfileEntry[P]>;
};
export type EnterpriseRiskProfileEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    orderBy?: Prisma.EnterpriseRiskProfileEntryOrderByWithAggregationInput | Prisma.EnterpriseRiskProfileEntryOrderByWithAggregationInput[];
    by: Prisma.EnterpriseRiskProfileEntryScalarFieldEnum[] | Prisma.EnterpriseRiskProfileEntryScalarFieldEnum;
    having?: Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnterpriseRiskProfileEntryCountAggregateInputType | true;
    _avg?: EnterpriseRiskProfileEntryAvgAggregateInputType;
    _sum?: EnterpriseRiskProfileEntrySumAggregateInputType;
    _min?: EnterpriseRiskProfileEntryMinAggregateInputType;
    _max?: EnterpriseRiskProfileEntryMaxAggregateInputType;
};
export type EnterpriseRiskProfileEntryGroupByOutputType = {
    id: string;
    riskCategory: string;
    inherentScore: number;
    sortOrder: number;
    updatedAt: Date;
    _count: EnterpriseRiskProfileEntryCountAggregateOutputType | null;
    _avg: EnterpriseRiskProfileEntryAvgAggregateOutputType | null;
    _sum: EnterpriseRiskProfileEntrySumAggregateOutputType | null;
    _min: EnterpriseRiskProfileEntryMinAggregateOutputType | null;
    _max: EnterpriseRiskProfileEntryMaxAggregateOutputType | null;
};
export type GetEnterpriseRiskProfileEntryGroupByPayload<T extends EnterpriseRiskProfileEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnterpriseRiskProfileEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnterpriseRiskProfileEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnterpriseRiskProfileEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnterpriseRiskProfileEntryGroupByOutputType[P]>;
}>>;
export type EnterpriseRiskProfileEntryWhereInput = {
    AND?: Prisma.EnterpriseRiskProfileEntryWhereInput | Prisma.EnterpriseRiskProfileEntryWhereInput[];
    OR?: Prisma.EnterpriseRiskProfileEntryWhereInput[];
    NOT?: Prisma.EnterpriseRiskProfileEntryWhereInput | Prisma.EnterpriseRiskProfileEntryWhereInput[];
    id?: Prisma.UuidFilter<"EnterpriseRiskProfileEntry"> | string;
    riskCategory?: Prisma.StringFilter<"EnterpriseRiskProfileEntry"> | string;
    inherentScore?: Prisma.IntFilter<"EnterpriseRiskProfileEntry"> | number;
    sortOrder?: Prisma.IntFilter<"EnterpriseRiskProfileEntry"> | number;
    updatedAt?: Prisma.DateTimeFilter<"EnterpriseRiskProfileEntry"> | Date | string;
};
export type EnterpriseRiskProfileEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    riskCategory?: string;
    AND?: Prisma.EnterpriseRiskProfileEntryWhereInput | Prisma.EnterpriseRiskProfileEntryWhereInput[];
    OR?: Prisma.EnterpriseRiskProfileEntryWhereInput[];
    NOT?: Prisma.EnterpriseRiskProfileEntryWhereInput | Prisma.EnterpriseRiskProfileEntryWhereInput[];
    inherentScore?: Prisma.IntFilter<"EnterpriseRiskProfileEntry"> | number;
    sortOrder?: Prisma.IntFilter<"EnterpriseRiskProfileEntry"> | number;
    updatedAt?: Prisma.DateTimeFilter<"EnterpriseRiskProfileEntry"> | Date | string;
}, "id" | "riskCategory">;
export type EnterpriseRiskProfileEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EnterpriseRiskProfileEntryCountOrderByAggregateInput;
    _avg?: Prisma.EnterpriseRiskProfileEntryAvgOrderByAggregateInput;
    _max?: Prisma.EnterpriseRiskProfileEntryMaxOrderByAggregateInput;
    _min?: Prisma.EnterpriseRiskProfileEntryMinOrderByAggregateInput;
    _sum?: Prisma.EnterpriseRiskProfileEntrySumOrderByAggregateInput;
};
export type EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput | Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput | Prisma.EnterpriseRiskProfileEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EnterpriseRiskProfileEntry"> | string;
    riskCategory?: Prisma.StringWithAggregatesFilter<"EnterpriseRiskProfileEntry"> | string;
    inherentScore?: Prisma.IntWithAggregatesFilter<"EnterpriseRiskProfileEntry"> | number;
    sortOrder?: Prisma.IntWithAggregatesFilter<"EnterpriseRiskProfileEntry"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EnterpriseRiskProfileEntry"> | Date | string;
};
export type EnterpriseRiskProfileEntryCreateInput = {
    id?: string;
    riskCategory: string;
    inherentScore: number;
    sortOrder: number;
    updatedAt?: Date | string;
};
export type EnterpriseRiskProfileEntryUncheckedCreateInput = {
    id?: string;
    riskCategory: string;
    inherentScore: number;
    sortOrder: number;
    updatedAt?: Date | string;
};
export type EnterpriseRiskProfileEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    inherentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseRiskProfileEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    inherentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseRiskProfileEntryCreateManyInput = {
    id?: string;
    riskCategory: string;
    inherentScore: number;
    sortOrder: number;
    updatedAt?: Date | string;
};
export type EnterpriseRiskProfileEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    inherentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseRiskProfileEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    inherentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseRiskProfileEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntryAvgOrderByAggregateInput = {
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntrySumOrderByAggregateInput = {
    inherentScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EnterpriseRiskProfileEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riskCategory?: boolean;
    inherentScore?: boolean;
    sortOrder?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["enterpriseRiskProfileEntry"]>;
export type EnterpriseRiskProfileEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riskCategory?: boolean;
    inherentScore?: boolean;
    sortOrder?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["enterpriseRiskProfileEntry"]>;
export type EnterpriseRiskProfileEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riskCategory?: boolean;
    inherentScore?: boolean;
    sortOrder?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["enterpriseRiskProfileEntry"]>;
export type EnterpriseRiskProfileEntrySelectScalar = {
    id?: boolean;
    riskCategory?: boolean;
    inherentScore?: boolean;
    sortOrder?: boolean;
    updatedAt?: boolean;
};
export type EnterpriseRiskProfileEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "riskCategory" | "inherentScore" | "sortOrder" | "updatedAt", ExtArgs["result"]["enterpriseRiskProfileEntry"]>;
export type $EnterpriseRiskProfileEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EnterpriseRiskProfileEntry";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        riskCategory: string;
        inherentScore: number;
        sortOrder: number;
        updatedAt: Date;
    }, ExtArgs["result"]["enterpriseRiskProfileEntry"]>;
    composites: {};
};
export type EnterpriseRiskProfileEntryGetPayload<S extends boolean | null | undefined | EnterpriseRiskProfileEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload, S>;
export type EnterpriseRiskProfileEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnterpriseRiskProfileEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnterpriseRiskProfileEntryCountAggregateInputType | true;
};
export interface EnterpriseRiskProfileEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EnterpriseRiskProfileEntry'];
        meta: {
            name: 'EnterpriseRiskProfileEntry';
        };
    };
    findUnique<T extends EnterpriseRiskProfileEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnterpriseRiskProfileEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnterpriseRiskProfileEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnterpriseRiskProfileEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnterpriseRiskProfileEntryFindManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnterpriseRiskProfileEntryCreateArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryCreateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnterpriseRiskProfileEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnterpriseRiskProfileEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnterpriseRiskProfileEntryDeleteArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnterpriseRiskProfileEntryUpdateArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnterpriseRiskProfileEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnterpriseRiskProfileEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnterpriseRiskProfileEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnterpriseRiskProfileEntryUpsertArgs>(args: Prisma.SelectSubset<T, EnterpriseRiskProfileEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__EnterpriseRiskProfileEntryClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseRiskProfileEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnterpriseRiskProfileEntryCountArgs>(args?: Prisma.Subset<T, EnterpriseRiskProfileEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnterpriseRiskProfileEntryCountAggregateOutputType> : number>;
    aggregate<T extends EnterpriseRiskProfileEntryAggregateArgs>(args: Prisma.Subset<T, EnterpriseRiskProfileEntryAggregateArgs>): Prisma.PrismaPromise<GetEnterpriseRiskProfileEntryAggregateType<T>>;
    groupBy<T extends EnterpriseRiskProfileEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnterpriseRiskProfileEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: EnterpriseRiskProfileEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnterpriseRiskProfileEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnterpriseRiskProfileEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnterpriseRiskProfileEntryFieldRefs;
}
export interface Prisma__EnterpriseRiskProfileEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnterpriseRiskProfileEntryFieldRefs {
    readonly id: Prisma.FieldRef<"EnterpriseRiskProfileEntry", 'String'>;
    readonly riskCategory: Prisma.FieldRef<"EnterpriseRiskProfileEntry", 'String'>;
    readonly inherentScore: Prisma.FieldRef<"EnterpriseRiskProfileEntry", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"EnterpriseRiskProfileEntry", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"EnterpriseRiskProfileEntry", 'DateTime'>;
}
export type EnterpriseRiskProfileEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
};
export type EnterpriseRiskProfileEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
};
export type EnterpriseRiskProfileEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    orderBy?: Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput | Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseRiskProfileEntryScalarFieldEnum | Prisma.EnterpriseRiskProfileEntryScalarFieldEnum[];
};
export type EnterpriseRiskProfileEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    orderBy?: Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput | Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseRiskProfileEntryScalarFieldEnum | Prisma.EnterpriseRiskProfileEntryScalarFieldEnum[];
};
export type EnterpriseRiskProfileEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    orderBy?: Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput | Prisma.EnterpriseRiskProfileEntryOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseRiskProfileEntryScalarFieldEnum | Prisma.EnterpriseRiskProfileEntryScalarFieldEnum[];
};
export type EnterpriseRiskProfileEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryCreateInput, Prisma.EnterpriseRiskProfileEntryUncheckedCreateInput>;
};
export type EnterpriseRiskProfileEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnterpriseRiskProfileEntryCreateManyInput | Prisma.EnterpriseRiskProfileEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnterpriseRiskProfileEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    data: Prisma.EnterpriseRiskProfileEntryCreateManyInput | Prisma.EnterpriseRiskProfileEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnterpriseRiskProfileEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryUpdateInput, Prisma.EnterpriseRiskProfileEntryUncheckedUpdateInput>;
    where: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
};
export type EnterpriseRiskProfileEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryUpdateManyMutationInput, Prisma.EnterpriseRiskProfileEntryUncheckedUpdateManyInput>;
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    limit?: number;
};
export type EnterpriseRiskProfileEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryUpdateManyMutationInput, Prisma.EnterpriseRiskProfileEntryUncheckedUpdateManyInput>;
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    limit?: number;
};
export type EnterpriseRiskProfileEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryCreateInput, Prisma.EnterpriseRiskProfileEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnterpriseRiskProfileEntryUpdateInput, Prisma.EnterpriseRiskProfileEntryUncheckedUpdateInput>;
};
export type EnterpriseRiskProfileEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
    where: Prisma.EnterpriseRiskProfileEntryWhereUniqueInput;
};
export type EnterpriseRiskProfileEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseRiskProfileEntryWhereInput;
    limit?: number;
};
export type EnterpriseRiskProfileEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseRiskProfileEntrySelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseRiskProfileEntryOmit<ExtArgs> | null;
};
