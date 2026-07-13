import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiTieredModelPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$AiTieredModelPolicyPayload>;
export type AggregateAiTieredModelPolicy = {
    _count: AiTieredModelPolicyCountAggregateOutputType | null;
    _min: AiTieredModelPolicyMinAggregateOutputType | null;
    _max: AiTieredModelPolicyMaxAggregateOutputType | null;
};
export type AiTieredModelPolicyMinAggregateOutputType = {
    capabilityCode: string | null;
    tier: $Enums.AiModelTier | null;
    providerName: string | null;
    modelName: string | null;
};
export type AiTieredModelPolicyMaxAggregateOutputType = {
    capabilityCode: string | null;
    tier: $Enums.AiModelTier | null;
    providerName: string | null;
    modelName: string | null;
};
export type AiTieredModelPolicyCountAggregateOutputType = {
    capabilityCode: number;
    tier: number;
    providerName: number;
    modelName: number;
    _all: number;
};
export type AiTieredModelPolicyMinAggregateInputType = {
    capabilityCode?: true;
    tier?: true;
    providerName?: true;
    modelName?: true;
};
export type AiTieredModelPolicyMaxAggregateInputType = {
    capabilityCode?: true;
    tier?: true;
    providerName?: true;
    modelName?: true;
};
export type AiTieredModelPolicyCountAggregateInputType = {
    capabilityCode?: true;
    tier?: true;
    providerName?: true;
    modelName?: true;
    _all?: true;
};
export type AiTieredModelPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTieredModelPolicyWhereInput;
    orderBy?: Prisma.AiTieredModelPolicyOrderByWithRelationInput | Prisma.AiTieredModelPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AiTieredModelPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiTieredModelPolicyCountAggregateInputType;
    _min?: AiTieredModelPolicyMinAggregateInputType;
    _max?: AiTieredModelPolicyMaxAggregateInputType;
};
export type GetAiTieredModelPolicyAggregateType<T extends AiTieredModelPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateAiTieredModelPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiTieredModelPolicy[P]> : Prisma.GetScalarType<T[P], AggregateAiTieredModelPolicy[P]>;
};
export type AiTieredModelPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTieredModelPolicyWhereInput;
    orderBy?: Prisma.AiTieredModelPolicyOrderByWithAggregationInput | Prisma.AiTieredModelPolicyOrderByWithAggregationInput[];
    by: Prisma.AiTieredModelPolicyScalarFieldEnum[] | Prisma.AiTieredModelPolicyScalarFieldEnum;
    having?: Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiTieredModelPolicyCountAggregateInputType | true;
    _min?: AiTieredModelPolicyMinAggregateInputType;
    _max?: AiTieredModelPolicyMaxAggregateInputType;
};
export type AiTieredModelPolicyGroupByOutputType = {
    capabilityCode: string;
    tier: $Enums.AiModelTier;
    providerName: string | null;
    modelName: string | null;
    _count: AiTieredModelPolicyCountAggregateOutputType | null;
    _min: AiTieredModelPolicyMinAggregateOutputType | null;
    _max: AiTieredModelPolicyMaxAggregateOutputType | null;
};
export type GetAiTieredModelPolicyGroupByPayload<T extends AiTieredModelPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiTieredModelPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiTieredModelPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiTieredModelPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiTieredModelPolicyGroupByOutputType[P]>;
}>>;
export type AiTieredModelPolicyWhereInput = {
    AND?: Prisma.AiTieredModelPolicyWhereInput | Prisma.AiTieredModelPolicyWhereInput[];
    OR?: Prisma.AiTieredModelPolicyWhereInput[];
    NOT?: Prisma.AiTieredModelPolicyWhereInput | Prisma.AiTieredModelPolicyWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiTieredModelPolicy"> | string;
    tier?: Prisma.EnumAiModelTierFilter<"AiTieredModelPolicy"> | $Enums.AiModelTier;
    providerName?: Prisma.StringNullableFilter<"AiTieredModelPolicy"> | string | null;
    modelName?: Prisma.StringNullableFilter<"AiTieredModelPolicy"> | string | null;
};
export type AiTieredModelPolicyOrderByWithRelationInput = {
    capabilityCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    providerName?: Prisma.SortOrderInput | Prisma.SortOrder;
    modelName?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type AiTieredModelPolicyWhereUniqueInput = Prisma.AtLeast<{
    capabilityCode?: string;
    AND?: Prisma.AiTieredModelPolicyWhereInput | Prisma.AiTieredModelPolicyWhereInput[];
    OR?: Prisma.AiTieredModelPolicyWhereInput[];
    NOT?: Prisma.AiTieredModelPolicyWhereInput | Prisma.AiTieredModelPolicyWhereInput[];
    tier?: Prisma.EnumAiModelTierFilter<"AiTieredModelPolicy"> | $Enums.AiModelTier;
    providerName?: Prisma.StringNullableFilter<"AiTieredModelPolicy"> | string | null;
    modelName?: Prisma.StringNullableFilter<"AiTieredModelPolicy"> | string | null;
}, "capabilityCode">;
export type AiTieredModelPolicyOrderByWithAggregationInput = {
    capabilityCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    providerName?: Prisma.SortOrderInput | Prisma.SortOrder;
    modelName?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AiTieredModelPolicyCountOrderByAggregateInput;
    _max?: Prisma.AiTieredModelPolicyMaxOrderByAggregateInput;
    _min?: Prisma.AiTieredModelPolicyMinOrderByAggregateInput;
};
export type AiTieredModelPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput | Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput | Prisma.AiTieredModelPolicyScalarWhereWithAggregatesInput[];
    capabilityCode?: Prisma.StringWithAggregatesFilter<"AiTieredModelPolicy"> | string;
    tier?: Prisma.EnumAiModelTierWithAggregatesFilter<"AiTieredModelPolicy"> | $Enums.AiModelTier;
    providerName?: Prisma.StringNullableWithAggregatesFilter<"AiTieredModelPolicy"> | string | null;
    modelName?: Prisma.StringNullableWithAggregatesFilter<"AiTieredModelPolicy"> | string | null;
};
export type AiTieredModelPolicyCreateInput = {
    capabilityCode: string;
    tier: $Enums.AiModelTier;
    providerName?: string | null;
    modelName?: string | null;
};
export type AiTieredModelPolicyUncheckedCreateInput = {
    capabilityCode: string;
    tier: $Enums.AiModelTier;
    providerName?: string | null;
    modelName?: string | null;
};
export type AiTieredModelPolicyUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumAiModelTierFieldUpdateOperationsInput | $Enums.AiModelTier;
    providerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modelName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiTieredModelPolicyUncheckedUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumAiModelTierFieldUpdateOperationsInput | $Enums.AiModelTier;
    providerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modelName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiTieredModelPolicyCreateManyInput = {
    capabilityCode: string;
    tier: $Enums.AiModelTier;
    providerName?: string | null;
    modelName?: string | null;
};
export type AiTieredModelPolicyUpdateManyMutationInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumAiModelTierFieldUpdateOperationsInput | $Enums.AiModelTier;
    providerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modelName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiTieredModelPolicyUncheckedUpdateManyInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumAiModelTierFieldUpdateOperationsInput | $Enums.AiModelTier;
    providerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modelName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiTieredModelPolicyCountOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    modelName?: Prisma.SortOrder;
};
export type AiTieredModelPolicyMaxOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    modelName?: Prisma.SortOrder;
};
export type AiTieredModelPolicyMinOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    modelName?: Prisma.SortOrder;
};
export type EnumAiModelTierFieldUpdateOperationsInput = {
    set?: $Enums.AiModelTier;
};
export type AiTieredModelPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    tier?: boolean;
    providerName?: boolean;
    modelName?: boolean;
}, ExtArgs["result"]["aiTieredModelPolicy"]>;
export type AiTieredModelPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    tier?: boolean;
    providerName?: boolean;
    modelName?: boolean;
}, ExtArgs["result"]["aiTieredModelPolicy"]>;
export type AiTieredModelPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    tier?: boolean;
    providerName?: boolean;
    modelName?: boolean;
}, ExtArgs["result"]["aiTieredModelPolicy"]>;
export type AiTieredModelPolicySelectScalar = {
    capabilityCode?: boolean;
    tier?: boolean;
    providerName?: boolean;
    modelName?: boolean;
};
export type AiTieredModelPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"capabilityCode" | "tier" | "providerName" | "modelName", ExtArgs["result"]["aiTieredModelPolicy"]>;
export type $AiTieredModelPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiTieredModelPolicy";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        capabilityCode: string;
        tier: $Enums.AiModelTier;
        providerName: string | null;
        modelName: string | null;
    }, ExtArgs["result"]["aiTieredModelPolicy"]>;
    composites: {};
};
export type AiTieredModelPolicyGetPayload<S extends boolean | null | undefined | AiTieredModelPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload, S>;
export type AiTieredModelPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiTieredModelPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiTieredModelPolicyCountAggregateInputType | true;
};
export interface AiTieredModelPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiTieredModelPolicy'];
        meta: {
            name: 'AiTieredModelPolicy';
        };
    };
    findUnique<T extends AiTieredModelPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiTieredModelPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiTieredModelPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiTieredModelPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiTieredModelPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiTieredModelPolicyCreateArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiTieredModelPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiTieredModelPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiTieredModelPolicyDeleteArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiTieredModelPolicyUpdateArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiTieredModelPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiTieredModelPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiTieredModelPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiTieredModelPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiTieredModelPolicyUpsertArgs>(args: Prisma.SelectSubset<T, AiTieredModelPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__AiTieredModelPolicyClient<runtime.Types.Result.GetResult<Prisma.$AiTieredModelPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiTieredModelPolicyCountArgs>(args?: Prisma.Subset<T, AiTieredModelPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiTieredModelPolicyCountAggregateOutputType> : number>;
    aggregate<T extends AiTieredModelPolicyAggregateArgs>(args: Prisma.Subset<T, AiTieredModelPolicyAggregateArgs>): Prisma.PrismaPromise<GetAiTieredModelPolicyAggregateType<T>>;
    groupBy<T extends AiTieredModelPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiTieredModelPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: AiTieredModelPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiTieredModelPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiTieredModelPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiTieredModelPolicyFieldRefs;
}
export interface Prisma__AiTieredModelPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiTieredModelPolicyFieldRefs {
    readonly capabilityCode: Prisma.FieldRef<"AiTieredModelPolicy", 'String'>;
    readonly tier: Prisma.FieldRef<"AiTieredModelPolicy", 'AiModelTier'>;
    readonly providerName: Prisma.FieldRef<"AiTieredModelPolicy", 'String'>;
    readonly modelName: Prisma.FieldRef<"AiTieredModelPolicy", 'String'>;
}
export type AiTieredModelPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where: Prisma.AiTieredModelPolicyWhereUniqueInput;
};
export type AiTieredModelPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where: Prisma.AiTieredModelPolicyWhereUniqueInput;
};
export type AiTieredModelPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where?: Prisma.AiTieredModelPolicyWhereInput;
    orderBy?: Prisma.AiTieredModelPolicyOrderByWithRelationInput | Prisma.AiTieredModelPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AiTieredModelPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTieredModelPolicyScalarFieldEnum | Prisma.AiTieredModelPolicyScalarFieldEnum[];
};
export type AiTieredModelPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where?: Prisma.AiTieredModelPolicyWhereInput;
    orderBy?: Prisma.AiTieredModelPolicyOrderByWithRelationInput | Prisma.AiTieredModelPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AiTieredModelPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTieredModelPolicyScalarFieldEnum | Prisma.AiTieredModelPolicyScalarFieldEnum[];
};
export type AiTieredModelPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where?: Prisma.AiTieredModelPolicyWhereInput;
    orderBy?: Prisma.AiTieredModelPolicyOrderByWithRelationInput | Prisma.AiTieredModelPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AiTieredModelPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTieredModelPolicyScalarFieldEnum | Prisma.AiTieredModelPolicyScalarFieldEnum[];
};
export type AiTieredModelPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTieredModelPolicyCreateInput, Prisma.AiTieredModelPolicyUncheckedCreateInput>;
};
export type AiTieredModelPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiTieredModelPolicyCreateManyInput | Prisma.AiTieredModelPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiTieredModelPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    data: Prisma.AiTieredModelPolicyCreateManyInput | Prisma.AiTieredModelPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiTieredModelPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTieredModelPolicyUpdateInput, Prisma.AiTieredModelPolicyUncheckedUpdateInput>;
    where: Prisma.AiTieredModelPolicyWhereUniqueInput;
};
export type AiTieredModelPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiTieredModelPolicyUpdateManyMutationInput, Prisma.AiTieredModelPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AiTieredModelPolicyWhereInput;
    limit?: number;
};
export type AiTieredModelPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTieredModelPolicyUpdateManyMutationInput, Prisma.AiTieredModelPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AiTieredModelPolicyWhereInput;
    limit?: number;
};
export type AiTieredModelPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where: Prisma.AiTieredModelPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiTieredModelPolicyCreateInput, Prisma.AiTieredModelPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiTieredModelPolicyUpdateInput, Prisma.AiTieredModelPolicyUncheckedUpdateInput>;
};
export type AiTieredModelPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
    where: Prisma.AiTieredModelPolicyWhereUniqueInput;
};
export type AiTieredModelPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTieredModelPolicyWhereInput;
    limit?: number;
};
export type AiTieredModelPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTieredModelPolicySelect<ExtArgs> | null;
    omit?: Prisma.AiTieredModelPolicyOmit<ExtArgs> | null;
};
