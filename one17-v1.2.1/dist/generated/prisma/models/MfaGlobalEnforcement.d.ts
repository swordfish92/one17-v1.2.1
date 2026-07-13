import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MfaGlobalEnforcementModel = runtime.Types.Result.DefaultSelection<Prisma.$MfaGlobalEnforcementPayload>;
export type AggregateMfaGlobalEnforcement = {
    _count: MfaGlobalEnforcementCountAggregateOutputType | null;
    _avg: MfaGlobalEnforcementAvgAggregateOutputType | null;
    _sum: MfaGlobalEnforcementSumAggregateOutputType | null;
    _min: MfaGlobalEnforcementMinAggregateOutputType | null;
    _max: MfaGlobalEnforcementMaxAggregateOutputType | null;
};
export type MfaGlobalEnforcementAvgAggregateOutputType = {
    id: number | null;
};
export type MfaGlobalEnforcementSumAggregateOutputType = {
    id: number | null;
};
export type MfaGlobalEnforcementMinAggregateOutputType = {
    id: number | null;
    allStaffMandatory: boolean | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type MfaGlobalEnforcementMaxAggregateOutputType = {
    id: number | null;
    allStaffMandatory: boolean | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type MfaGlobalEnforcementCountAggregateOutputType = {
    id: number;
    allStaffMandatory: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type MfaGlobalEnforcementAvgAggregateInputType = {
    id?: true;
};
export type MfaGlobalEnforcementSumAggregateInputType = {
    id?: true;
};
export type MfaGlobalEnforcementMinAggregateInputType = {
    id?: true;
    allStaffMandatory?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type MfaGlobalEnforcementMaxAggregateInputType = {
    id?: true;
    allStaffMandatory?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type MfaGlobalEnforcementCountAggregateInputType = {
    id?: true;
    allStaffMandatory?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type MfaGlobalEnforcementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    orderBy?: Prisma.MfaGlobalEnforcementOrderByWithRelationInput | Prisma.MfaGlobalEnforcementOrderByWithRelationInput[];
    cursor?: Prisma.MfaGlobalEnforcementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MfaGlobalEnforcementCountAggregateInputType;
    _avg?: MfaGlobalEnforcementAvgAggregateInputType;
    _sum?: MfaGlobalEnforcementSumAggregateInputType;
    _min?: MfaGlobalEnforcementMinAggregateInputType;
    _max?: MfaGlobalEnforcementMaxAggregateInputType;
};
export type GetMfaGlobalEnforcementAggregateType<T extends MfaGlobalEnforcementAggregateArgs> = {
    [P in keyof T & keyof AggregateMfaGlobalEnforcement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfaGlobalEnforcement[P]> : Prisma.GetScalarType<T[P], AggregateMfaGlobalEnforcement[P]>;
};
export type MfaGlobalEnforcementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    orderBy?: Prisma.MfaGlobalEnforcementOrderByWithAggregationInput | Prisma.MfaGlobalEnforcementOrderByWithAggregationInput[];
    by: Prisma.MfaGlobalEnforcementScalarFieldEnum[] | Prisma.MfaGlobalEnforcementScalarFieldEnum;
    having?: Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MfaGlobalEnforcementCountAggregateInputType | true;
    _avg?: MfaGlobalEnforcementAvgAggregateInputType;
    _sum?: MfaGlobalEnforcementSumAggregateInputType;
    _min?: MfaGlobalEnforcementMinAggregateInputType;
    _max?: MfaGlobalEnforcementMaxAggregateInputType;
};
export type MfaGlobalEnforcementGroupByOutputType = {
    id: number;
    allStaffMandatory: boolean;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: MfaGlobalEnforcementCountAggregateOutputType | null;
    _avg: MfaGlobalEnforcementAvgAggregateOutputType | null;
    _sum: MfaGlobalEnforcementSumAggregateOutputType | null;
    _min: MfaGlobalEnforcementMinAggregateOutputType | null;
    _max: MfaGlobalEnforcementMaxAggregateOutputType | null;
};
export type GetMfaGlobalEnforcementGroupByPayload<T extends MfaGlobalEnforcementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MfaGlobalEnforcementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MfaGlobalEnforcementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MfaGlobalEnforcementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MfaGlobalEnforcementGroupByOutputType[P]>;
}>>;
export type MfaGlobalEnforcementWhereInput = {
    AND?: Prisma.MfaGlobalEnforcementWhereInput | Prisma.MfaGlobalEnforcementWhereInput[];
    OR?: Prisma.MfaGlobalEnforcementWhereInput[];
    NOT?: Prisma.MfaGlobalEnforcementWhereInput | Prisma.MfaGlobalEnforcementWhereInput[];
    id?: Prisma.IntFilter<"MfaGlobalEnforcement"> | number;
    allStaffMandatory?: Prisma.BoolFilter<"MfaGlobalEnforcement"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"MfaGlobalEnforcement"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"MfaGlobalEnforcement"> | Date | string;
};
export type MfaGlobalEnforcementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    allStaffMandatory?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MfaGlobalEnforcementWhereInput | Prisma.MfaGlobalEnforcementWhereInput[];
    OR?: Prisma.MfaGlobalEnforcementWhereInput[];
    NOT?: Prisma.MfaGlobalEnforcementWhereInput | Prisma.MfaGlobalEnforcementWhereInput[];
    allStaffMandatory?: Prisma.BoolFilter<"MfaGlobalEnforcement"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"MfaGlobalEnforcement"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"MfaGlobalEnforcement"> | Date | string;
}, "id">;
export type MfaGlobalEnforcementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    allStaffMandatory?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MfaGlobalEnforcementCountOrderByAggregateInput;
    _avg?: Prisma.MfaGlobalEnforcementAvgOrderByAggregateInput;
    _max?: Prisma.MfaGlobalEnforcementMaxOrderByAggregateInput;
    _min?: Prisma.MfaGlobalEnforcementMinOrderByAggregateInput;
    _sum?: Prisma.MfaGlobalEnforcementSumOrderByAggregateInput;
};
export type MfaGlobalEnforcementScalarWhereWithAggregatesInput = {
    AND?: Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput | Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput[];
    OR?: Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput | Prisma.MfaGlobalEnforcementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MfaGlobalEnforcement"> | number;
    allStaffMandatory?: Prisma.BoolWithAggregatesFilter<"MfaGlobalEnforcement"> | boolean;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"MfaGlobalEnforcement"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MfaGlobalEnforcement"> | Date | string;
};
export type MfaGlobalEnforcementCreateInput = {
    id?: number;
    allStaffMandatory?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type MfaGlobalEnforcementUncheckedCreateInput = {
    id?: number;
    allStaffMandatory?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type MfaGlobalEnforcementUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allStaffMandatory?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaGlobalEnforcementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allStaffMandatory?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaGlobalEnforcementCreateManyInput = {
    id?: number;
    allStaffMandatory?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type MfaGlobalEnforcementUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allStaffMandatory?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaGlobalEnforcementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allStaffMandatory?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaGlobalEnforcementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    allStaffMandatory?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    allStaffMandatory?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    allStaffMandatory?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MfaGlobalEnforcementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    allStaffMandatory?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["mfaGlobalEnforcement"]>;
export type MfaGlobalEnforcementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    allStaffMandatory?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["mfaGlobalEnforcement"]>;
export type MfaGlobalEnforcementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    allStaffMandatory?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["mfaGlobalEnforcement"]>;
export type MfaGlobalEnforcementSelectScalar = {
    id?: boolean;
    allStaffMandatory?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type MfaGlobalEnforcementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "allStaffMandatory" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["mfaGlobalEnforcement"]>;
export type $MfaGlobalEnforcementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MfaGlobalEnforcement";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        allStaffMandatory: boolean;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["mfaGlobalEnforcement"]>;
    composites: {};
};
export type MfaGlobalEnforcementGetPayload<S extends boolean | null | undefined | MfaGlobalEnforcementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload, S>;
export type MfaGlobalEnforcementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MfaGlobalEnforcementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MfaGlobalEnforcementCountAggregateInputType | true;
};
export interface MfaGlobalEnforcementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MfaGlobalEnforcement'];
        meta: {
            name: 'MfaGlobalEnforcement';
        };
    };
    findUnique<T extends MfaGlobalEnforcementFindUniqueArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MfaGlobalEnforcementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MfaGlobalEnforcementFindFirstArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementFindFirstArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MfaGlobalEnforcementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MfaGlobalEnforcementFindManyArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MfaGlobalEnforcementCreateArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementCreateArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MfaGlobalEnforcementCreateManyArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MfaGlobalEnforcementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MfaGlobalEnforcementDeleteArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementDeleteArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MfaGlobalEnforcementUpdateArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementUpdateArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MfaGlobalEnforcementDeleteManyArgs>(args?: Prisma.SelectSubset<T, MfaGlobalEnforcementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MfaGlobalEnforcementUpdateManyArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MfaGlobalEnforcementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MfaGlobalEnforcementUpsertArgs>(args: Prisma.SelectSubset<T, MfaGlobalEnforcementUpsertArgs<ExtArgs>>): Prisma.Prisma__MfaGlobalEnforcementClient<runtime.Types.Result.GetResult<Prisma.$MfaGlobalEnforcementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MfaGlobalEnforcementCountArgs>(args?: Prisma.Subset<T, MfaGlobalEnforcementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MfaGlobalEnforcementCountAggregateOutputType> : number>;
    aggregate<T extends MfaGlobalEnforcementAggregateArgs>(args: Prisma.Subset<T, MfaGlobalEnforcementAggregateArgs>): Prisma.PrismaPromise<GetMfaGlobalEnforcementAggregateType<T>>;
    groupBy<T extends MfaGlobalEnforcementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MfaGlobalEnforcementGroupByArgs['orderBy'];
    } : {
        orderBy?: MfaGlobalEnforcementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MfaGlobalEnforcementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaGlobalEnforcementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MfaGlobalEnforcementFieldRefs;
}
export interface Prisma__MfaGlobalEnforcementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MfaGlobalEnforcementFieldRefs {
    readonly id: Prisma.FieldRef<"MfaGlobalEnforcement", 'Int'>;
    readonly allStaffMandatory: Prisma.FieldRef<"MfaGlobalEnforcement", 'Boolean'>;
    readonly updatedByUserId: Prisma.FieldRef<"MfaGlobalEnforcement", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"MfaGlobalEnforcement", 'DateTime'>;
}
export type MfaGlobalEnforcementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where: Prisma.MfaGlobalEnforcementWhereUniqueInput;
};
export type MfaGlobalEnforcementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where: Prisma.MfaGlobalEnforcementWhereUniqueInput;
};
export type MfaGlobalEnforcementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    orderBy?: Prisma.MfaGlobalEnforcementOrderByWithRelationInput | Prisma.MfaGlobalEnforcementOrderByWithRelationInput[];
    cursor?: Prisma.MfaGlobalEnforcementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaGlobalEnforcementScalarFieldEnum | Prisma.MfaGlobalEnforcementScalarFieldEnum[];
};
export type MfaGlobalEnforcementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    orderBy?: Prisma.MfaGlobalEnforcementOrderByWithRelationInput | Prisma.MfaGlobalEnforcementOrderByWithRelationInput[];
    cursor?: Prisma.MfaGlobalEnforcementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaGlobalEnforcementScalarFieldEnum | Prisma.MfaGlobalEnforcementScalarFieldEnum[];
};
export type MfaGlobalEnforcementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    orderBy?: Prisma.MfaGlobalEnforcementOrderByWithRelationInput | Prisma.MfaGlobalEnforcementOrderByWithRelationInput[];
    cursor?: Prisma.MfaGlobalEnforcementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaGlobalEnforcementScalarFieldEnum | Prisma.MfaGlobalEnforcementScalarFieldEnum[];
};
export type MfaGlobalEnforcementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaGlobalEnforcementCreateInput, Prisma.MfaGlobalEnforcementUncheckedCreateInput>;
};
export type MfaGlobalEnforcementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MfaGlobalEnforcementCreateManyInput | Prisma.MfaGlobalEnforcementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaGlobalEnforcementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    data: Prisma.MfaGlobalEnforcementCreateManyInput | Prisma.MfaGlobalEnforcementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaGlobalEnforcementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaGlobalEnforcementUpdateInput, Prisma.MfaGlobalEnforcementUncheckedUpdateInput>;
    where: Prisma.MfaGlobalEnforcementWhereUniqueInput;
};
export type MfaGlobalEnforcementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MfaGlobalEnforcementUpdateManyMutationInput, Prisma.MfaGlobalEnforcementUncheckedUpdateManyInput>;
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    limit?: number;
};
export type MfaGlobalEnforcementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaGlobalEnforcementUpdateManyMutationInput, Prisma.MfaGlobalEnforcementUncheckedUpdateManyInput>;
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    limit?: number;
};
export type MfaGlobalEnforcementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where: Prisma.MfaGlobalEnforcementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaGlobalEnforcementCreateInput, Prisma.MfaGlobalEnforcementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MfaGlobalEnforcementUpdateInput, Prisma.MfaGlobalEnforcementUncheckedUpdateInput>;
};
export type MfaGlobalEnforcementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
    where: Prisma.MfaGlobalEnforcementWhereUniqueInput;
};
export type MfaGlobalEnforcementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaGlobalEnforcementWhereInput;
    limit?: number;
};
export type MfaGlobalEnforcementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaGlobalEnforcementSelect<ExtArgs> | null;
    omit?: Prisma.MfaGlobalEnforcementOmit<ExtArgs> | null;
};
