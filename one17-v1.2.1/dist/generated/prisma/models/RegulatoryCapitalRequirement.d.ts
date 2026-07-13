import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegulatoryCapitalRequirementModel = runtime.Types.Result.DefaultSelection<Prisma.$RegulatoryCapitalRequirementPayload>;
export type AggregateRegulatoryCapitalRequirement = {
    _count: RegulatoryCapitalRequirementCountAggregateOutputType | null;
    _avg: RegulatoryCapitalRequirementAvgAggregateOutputType | null;
    _sum: RegulatoryCapitalRequirementSumAggregateOutputType | null;
    _min: RegulatoryCapitalRequirementMinAggregateOutputType | null;
    _max: RegulatoryCapitalRequirementMaxAggregateOutputType | null;
};
export type RegulatoryCapitalRequirementAvgAggregateOutputType = {
    requirementKobo: number | null;
};
export type RegulatoryCapitalRequirementSumAggregateOutputType = {
    requirementKobo: bigint | null;
};
export type RegulatoryCapitalRequirementMinAggregateOutputType = {
    id: string | null;
    requirementKobo: bigint | null;
    effectiveFrom: Date | null;
    notes: string | null;
    createdAt: Date | null;
};
export type RegulatoryCapitalRequirementMaxAggregateOutputType = {
    id: string | null;
    requirementKobo: bigint | null;
    effectiveFrom: Date | null;
    notes: string | null;
    createdAt: Date | null;
};
export type RegulatoryCapitalRequirementCountAggregateOutputType = {
    id: number;
    requirementKobo: number;
    effectiveFrom: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type RegulatoryCapitalRequirementAvgAggregateInputType = {
    requirementKobo?: true;
};
export type RegulatoryCapitalRequirementSumAggregateInputType = {
    requirementKobo?: true;
};
export type RegulatoryCapitalRequirementMinAggregateInputType = {
    id?: true;
    requirementKobo?: true;
    effectiveFrom?: true;
    notes?: true;
    createdAt?: true;
};
export type RegulatoryCapitalRequirementMaxAggregateInputType = {
    id?: true;
    requirementKobo?: true;
    effectiveFrom?: true;
    notes?: true;
    createdAt?: true;
};
export type RegulatoryCapitalRequirementCountAggregateInputType = {
    id?: true;
    requirementKobo?: true;
    effectiveFrom?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type RegulatoryCapitalRequirementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    orderBy?: Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput | Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegulatoryCapitalRequirementCountAggregateInputType;
    _avg?: RegulatoryCapitalRequirementAvgAggregateInputType;
    _sum?: RegulatoryCapitalRequirementSumAggregateInputType;
    _min?: RegulatoryCapitalRequirementMinAggregateInputType;
    _max?: RegulatoryCapitalRequirementMaxAggregateInputType;
};
export type GetRegulatoryCapitalRequirementAggregateType<T extends RegulatoryCapitalRequirementAggregateArgs> = {
    [P in keyof T & keyof AggregateRegulatoryCapitalRequirement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegulatoryCapitalRequirement[P]> : Prisma.GetScalarType<T[P], AggregateRegulatoryCapitalRequirement[P]>;
};
export type RegulatoryCapitalRequirementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    orderBy?: Prisma.RegulatoryCapitalRequirementOrderByWithAggregationInput | Prisma.RegulatoryCapitalRequirementOrderByWithAggregationInput[];
    by: Prisma.RegulatoryCapitalRequirementScalarFieldEnum[] | Prisma.RegulatoryCapitalRequirementScalarFieldEnum;
    having?: Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegulatoryCapitalRequirementCountAggregateInputType | true;
    _avg?: RegulatoryCapitalRequirementAvgAggregateInputType;
    _sum?: RegulatoryCapitalRequirementSumAggregateInputType;
    _min?: RegulatoryCapitalRequirementMinAggregateInputType;
    _max?: RegulatoryCapitalRequirementMaxAggregateInputType;
};
export type RegulatoryCapitalRequirementGroupByOutputType = {
    id: string;
    requirementKobo: bigint;
    effectiveFrom: Date;
    notes: string | null;
    createdAt: Date;
    _count: RegulatoryCapitalRequirementCountAggregateOutputType | null;
    _avg: RegulatoryCapitalRequirementAvgAggregateOutputType | null;
    _sum: RegulatoryCapitalRequirementSumAggregateOutputType | null;
    _min: RegulatoryCapitalRequirementMinAggregateOutputType | null;
    _max: RegulatoryCapitalRequirementMaxAggregateOutputType | null;
};
export type GetRegulatoryCapitalRequirementGroupByPayload<T extends RegulatoryCapitalRequirementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegulatoryCapitalRequirementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegulatoryCapitalRequirementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegulatoryCapitalRequirementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegulatoryCapitalRequirementGroupByOutputType[P]>;
}>>;
export type RegulatoryCapitalRequirementWhereInput = {
    AND?: Prisma.RegulatoryCapitalRequirementWhereInput | Prisma.RegulatoryCapitalRequirementWhereInput[];
    OR?: Prisma.RegulatoryCapitalRequirementWhereInput[];
    NOT?: Prisma.RegulatoryCapitalRequirementWhereInput | Prisma.RegulatoryCapitalRequirementWhereInput[];
    id?: Prisma.StringFilter<"RegulatoryCapitalRequirement"> | string;
    requirementKobo?: Prisma.BigIntFilter<"RegulatoryCapitalRequirement"> | bigint | number;
    effectiveFrom?: Prisma.DateTimeFilter<"RegulatoryCapitalRequirement"> | Date | string;
    notes?: Prisma.StringNullableFilter<"RegulatoryCapitalRequirement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RegulatoryCapitalRequirement"> | Date | string;
};
export type RegulatoryCapitalRequirementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requirementKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RegulatoryCapitalRequirementWhereInput | Prisma.RegulatoryCapitalRequirementWhereInput[];
    OR?: Prisma.RegulatoryCapitalRequirementWhereInput[];
    NOT?: Prisma.RegulatoryCapitalRequirementWhereInput | Prisma.RegulatoryCapitalRequirementWhereInput[];
    requirementKobo?: Prisma.BigIntFilter<"RegulatoryCapitalRequirement"> | bigint | number;
    effectiveFrom?: Prisma.DateTimeFilter<"RegulatoryCapitalRequirement"> | Date | string;
    notes?: Prisma.StringNullableFilter<"RegulatoryCapitalRequirement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RegulatoryCapitalRequirement"> | Date | string;
}, "id">;
export type RegulatoryCapitalRequirementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requirementKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RegulatoryCapitalRequirementCountOrderByAggregateInput;
    _avg?: Prisma.RegulatoryCapitalRequirementAvgOrderByAggregateInput;
    _max?: Prisma.RegulatoryCapitalRequirementMaxOrderByAggregateInput;
    _min?: Prisma.RegulatoryCapitalRequirementMinOrderByAggregateInput;
    _sum?: Prisma.RegulatoryCapitalRequirementSumOrderByAggregateInput;
};
export type RegulatoryCapitalRequirementScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput | Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput | Prisma.RegulatoryCapitalRequirementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RegulatoryCapitalRequirement"> | string;
    requirementKobo?: Prisma.BigIntWithAggregatesFilter<"RegulatoryCapitalRequirement"> | bigint | number;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryCapitalRequirement"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"RegulatoryCapitalRequirement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryCapitalRequirement"> | Date | string;
};
export type RegulatoryCapitalRequirementCreateInput = {
    id?: string;
    requirementKobo: bigint | number;
    effectiveFrom: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type RegulatoryCapitalRequirementUncheckedCreateInput = {
    id?: string;
    requirementKobo: bigint | number;
    effectiveFrom: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type RegulatoryCapitalRequirementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requirementKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryCapitalRequirementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requirementKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryCapitalRequirementCreateManyInput = {
    id?: string;
    requirementKobo: bigint | number;
    effectiveFrom: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type RegulatoryCapitalRequirementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requirementKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryCapitalRequirementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requirementKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryCapitalRequirementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requirementKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementAvgOrderByAggregateInput = {
    requirementKobo?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requirementKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requirementKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementSumOrderByAggregateInput = {
    requirementKobo?: Prisma.SortOrder;
};
export type RegulatoryCapitalRequirementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requirementKobo?: boolean;
    effectiveFrom?: boolean;
    notes?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["regulatoryCapitalRequirement"]>;
export type RegulatoryCapitalRequirementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requirementKobo?: boolean;
    effectiveFrom?: boolean;
    notes?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["regulatoryCapitalRequirement"]>;
export type RegulatoryCapitalRequirementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requirementKobo?: boolean;
    effectiveFrom?: boolean;
    notes?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["regulatoryCapitalRequirement"]>;
export type RegulatoryCapitalRequirementSelectScalar = {
    id?: boolean;
    requirementKobo?: boolean;
    effectiveFrom?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type RegulatoryCapitalRequirementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requirementKobo" | "effectiveFrom" | "notes" | "createdAt", ExtArgs["result"]["regulatoryCapitalRequirement"]>;
export type $RegulatoryCapitalRequirementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegulatoryCapitalRequirement";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requirementKobo: bigint;
        effectiveFrom: Date;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["regulatoryCapitalRequirement"]>;
    composites: {};
};
export type RegulatoryCapitalRequirementGetPayload<S extends boolean | null | undefined | RegulatoryCapitalRequirementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload, S>;
export type RegulatoryCapitalRequirementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegulatoryCapitalRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegulatoryCapitalRequirementCountAggregateInputType | true;
};
export interface RegulatoryCapitalRequirementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegulatoryCapitalRequirement'];
        meta: {
            name: 'RegulatoryCapitalRequirement';
        };
    };
    findUnique<T extends RegulatoryCapitalRequirementFindUniqueArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegulatoryCapitalRequirementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegulatoryCapitalRequirementFindFirstArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegulatoryCapitalRequirementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegulatoryCapitalRequirementFindManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegulatoryCapitalRequirementCreateArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementCreateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegulatoryCapitalRequirementCreateManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegulatoryCapitalRequirementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegulatoryCapitalRequirementDeleteArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementDeleteArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegulatoryCapitalRequirementUpdateArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementUpdateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegulatoryCapitalRequirementDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryCapitalRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegulatoryCapitalRequirementUpdateManyArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegulatoryCapitalRequirementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegulatoryCapitalRequirementUpsertArgs>(args: Prisma.SelectSubset<T, RegulatoryCapitalRequirementUpsertArgs<ExtArgs>>): Prisma.Prisma__RegulatoryCapitalRequirementClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryCapitalRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegulatoryCapitalRequirementCountArgs>(args?: Prisma.Subset<T, RegulatoryCapitalRequirementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegulatoryCapitalRequirementCountAggregateOutputType> : number>;
    aggregate<T extends RegulatoryCapitalRequirementAggregateArgs>(args: Prisma.Subset<T, RegulatoryCapitalRequirementAggregateArgs>): Prisma.PrismaPromise<GetRegulatoryCapitalRequirementAggregateType<T>>;
    groupBy<T extends RegulatoryCapitalRequirementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegulatoryCapitalRequirementGroupByArgs['orderBy'];
    } : {
        orderBy?: RegulatoryCapitalRequirementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegulatoryCapitalRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulatoryCapitalRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegulatoryCapitalRequirementFieldRefs;
}
export interface Prisma__RegulatoryCapitalRequirementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegulatoryCapitalRequirementFieldRefs {
    readonly id: Prisma.FieldRef<"RegulatoryCapitalRequirement", 'String'>;
    readonly requirementKobo: Prisma.FieldRef<"RegulatoryCapitalRequirement", 'BigInt'>;
    readonly effectiveFrom: Prisma.FieldRef<"RegulatoryCapitalRequirement", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"RegulatoryCapitalRequirement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RegulatoryCapitalRequirement", 'DateTime'>;
}
export type RegulatoryCapitalRequirementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
};
export type RegulatoryCapitalRequirementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
};
export type RegulatoryCapitalRequirementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    orderBy?: Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput | Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryCapitalRequirementScalarFieldEnum | Prisma.RegulatoryCapitalRequirementScalarFieldEnum[];
};
export type RegulatoryCapitalRequirementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    orderBy?: Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput | Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryCapitalRequirementScalarFieldEnum | Prisma.RegulatoryCapitalRequirementScalarFieldEnum[];
};
export type RegulatoryCapitalRequirementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    orderBy?: Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput | Prisma.RegulatoryCapitalRequirementOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryCapitalRequirementScalarFieldEnum | Prisma.RegulatoryCapitalRequirementScalarFieldEnum[];
};
export type RegulatoryCapitalRequirementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryCapitalRequirementCreateInput, Prisma.RegulatoryCapitalRequirementUncheckedCreateInput>;
};
export type RegulatoryCapitalRequirementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegulatoryCapitalRequirementCreateManyInput | Prisma.RegulatoryCapitalRequirementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryCapitalRequirementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    data: Prisma.RegulatoryCapitalRequirementCreateManyInput | Prisma.RegulatoryCapitalRequirementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryCapitalRequirementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryCapitalRequirementUpdateInput, Prisma.RegulatoryCapitalRequirementUncheckedUpdateInput>;
    where: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
};
export type RegulatoryCapitalRequirementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegulatoryCapitalRequirementUpdateManyMutationInput, Prisma.RegulatoryCapitalRequirementUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    limit?: number;
};
export type RegulatoryCapitalRequirementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryCapitalRequirementUpdateManyMutationInput, Prisma.RegulatoryCapitalRequirementUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    limit?: number;
};
export type RegulatoryCapitalRequirementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatoryCapitalRequirementCreateInput, Prisma.RegulatoryCapitalRequirementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegulatoryCapitalRequirementUpdateInput, Prisma.RegulatoryCapitalRequirementUncheckedUpdateInput>;
};
export type RegulatoryCapitalRequirementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
    where: Prisma.RegulatoryCapitalRequirementWhereUniqueInput;
};
export type RegulatoryCapitalRequirementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryCapitalRequirementWhereInput;
    limit?: number;
};
export type RegulatoryCapitalRequirementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryCapitalRequirementSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryCapitalRequirementOmit<ExtArgs> | null;
};
