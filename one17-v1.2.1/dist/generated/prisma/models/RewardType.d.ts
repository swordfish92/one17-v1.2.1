import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RewardTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$RewardTypePayload>;
export type AggregateRewardType = {
    _count: RewardTypeCountAggregateOutputType | null;
    _min: RewardTypeMinAggregateOutputType | null;
    _max: RewardTypeMaxAggregateOutputType | null;
};
export type RewardTypeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type RewardTypeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type RewardTypeCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    isActive: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type RewardTypeMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type RewardTypeMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type RewardTypeCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type RewardTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardTypeWhereInput;
    orderBy?: Prisma.RewardTypeOrderByWithRelationInput | Prisma.RewardTypeOrderByWithRelationInput[];
    cursor?: Prisma.RewardTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewardTypeCountAggregateInputType;
    _min?: RewardTypeMinAggregateInputType;
    _max?: RewardTypeMaxAggregateInputType;
};
export type GetRewardTypeAggregateType<T extends RewardTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateRewardType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewardType[P]> : Prisma.GetScalarType<T[P], AggregateRewardType[P]>;
};
export type RewardTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardTypeWhereInput;
    orderBy?: Prisma.RewardTypeOrderByWithAggregationInput | Prisma.RewardTypeOrderByWithAggregationInput[];
    by: Prisma.RewardTypeScalarFieldEnum[] | Prisma.RewardTypeScalarFieldEnum;
    having?: Prisma.RewardTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewardTypeCountAggregateInputType | true;
    _min?: RewardTypeMinAggregateInputType;
    _max?: RewardTypeMaxAggregateInputType;
};
export type RewardTypeGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    createdByUserId: string;
    createdAt: Date;
    _count: RewardTypeCountAggregateOutputType | null;
    _min: RewardTypeMinAggregateOutputType | null;
    _max: RewardTypeMaxAggregateOutputType | null;
};
export type GetRewardTypeGroupByPayload<T extends RewardTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewardTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewardTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewardTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewardTypeGroupByOutputType[P]>;
}>>;
export type RewardTypeWhereInput = {
    AND?: Prisma.RewardTypeWhereInput | Prisma.RewardTypeWhereInput[];
    OR?: Prisma.RewardTypeWhereInput[];
    NOT?: Prisma.RewardTypeWhereInput | Prisma.RewardTypeWhereInput[];
    id?: Prisma.UuidFilter<"RewardType"> | string;
    name?: Prisma.StringFilter<"RewardType"> | string;
    description?: Prisma.StringNullableFilter<"RewardType"> | string | null;
    isActive?: Prisma.BoolFilter<"RewardType"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"RewardType"> | string;
    createdAt?: Prisma.DateTimeFilter<"RewardType"> | Date | string;
    recommendations?: Prisma.TalentRecommendationListRelationFilter;
};
export type RewardTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    recommendations?: Prisma.TalentRecommendationOrderByRelationAggregateInput;
};
export type RewardTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.RewardTypeWhereInput | Prisma.RewardTypeWhereInput[];
    OR?: Prisma.RewardTypeWhereInput[];
    NOT?: Prisma.RewardTypeWhereInput | Prisma.RewardTypeWhereInput[];
    description?: Prisma.StringNullableFilter<"RewardType"> | string | null;
    isActive?: Prisma.BoolFilter<"RewardType"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"RewardType"> | string;
    createdAt?: Prisma.DateTimeFilter<"RewardType"> | Date | string;
    recommendations?: Prisma.TalentRecommendationListRelationFilter;
}, "id" | "name">;
export type RewardTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RewardTypeCountOrderByAggregateInput;
    _max?: Prisma.RewardTypeMaxOrderByAggregateInput;
    _min?: Prisma.RewardTypeMinOrderByAggregateInput;
};
export type RewardTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewardTypeScalarWhereWithAggregatesInput | Prisma.RewardTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewardTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewardTypeScalarWhereWithAggregatesInput | Prisma.RewardTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RewardType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"RewardType"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"RewardType"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"RewardType"> | boolean;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"RewardType"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RewardType"> | Date | string;
};
export type RewardTypeCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    recommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutRewardTypeInput;
};
export type RewardTypeUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    recommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutRewardTypeInput;
};
export type RewardTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recommendations?: Prisma.TalentRecommendationUpdateManyWithoutRewardTypeNestedInput;
};
export type RewardTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutRewardTypeNestedInput;
};
export type RewardTypeCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type RewardTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewardTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewardTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewardTypeNullableScalarRelationFilter = {
    is?: Prisma.RewardTypeWhereInput | null;
    isNot?: Prisma.RewardTypeWhereInput | null;
};
export type RewardTypeCreateNestedOneWithoutRecommendationsInput = {
    create?: Prisma.XOR<Prisma.RewardTypeCreateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedCreateWithoutRecommendationsInput>;
    connectOrCreate?: Prisma.RewardTypeCreateOrConnectWithoutRecommendationsInput;
    connect?: Prisma.RewardTypeWhereUniqueInput;
};
export type RewardTypeUpdateOneWithoutRecommendationsNestedInput = {
    create?: Prisma.XOR<Prisma.RewardTypeCreateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedCreateWithoutRecommendationsInput>;
    connectOrCreate?: Prisma.RewardTypeCreateOrConnectWithoutRecommendationsInput;
    upsert?: Prisma.RewardTypeUpsertWithoutRecommendationsInput;
    disconnect?: Prisma.RewardTypeWhereInput | boolean;
    delete?: Prisma.RewardTypeWhereInput | boolean;
    connect?: Prisma.RewardTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RewardTypeUpdateToOneWithWhereWithoutRecommendationsInput, Prisma.RewardTypeUpdateWithoutRecommendationsInput>, Prisma.RewardTypeUncheckedUpdateWithoutRecommendationsInput>;
};
export type RewardTypeCreateWithoutRecommendationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type RewardTypeUncheckedCreateWithoutRecommendationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type RewardTypeCreateOrConnectWithoutRecommendationsInput = {
    where: Prisma.RewardTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardTypeCreateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedCreateWithoutRecommendationsInput>;
};
export type RewardTypeUpsertWithoutRecommendationsInput = {
    update: Prisma.XOR<Prisma.RewardTypeUpdateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedUpdateWithoutRecommendationsInput>;
    create: Prisma.XOR<Prisma.RewardTypeCreateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedCreateWithoutRecommendationsInput>;
    where?: Prisma.RewardTypeWhereInput;
};
export type RewardTypeUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: Prisma.RewardTypeWhereInput;
    data: Prisma.XOR<Prisma.RewardTypeUpdateWithoutRecommendationsInput, Prisma.RewardTypeUncheckedUpdateWithoutRecommendationsInput>;
};
export type RewardTypeUpdateWithoutRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardTypeUncheckedUpdateWithoutRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardTypeCountOutputType = {
    recommendations: number;
};
export type RewardTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recommendations?: boolean | RewardTypeCountOutputTypeCountRecommendationsArgs;
};
export type RewardTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type RewardTypeCountOutputTypeCountRecommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
};
export type RewardTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    recommendations?: boolean | Prisma.RewardType$recommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardType"]>;
export type RewardTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["rewardType"]>;
export type RewardTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["rewardType"]>;
export type RewardTypeSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type RewardTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdByUserId" | "createdAt", ExtArgs["result"]["rewardType"]>;
export type RewardTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recommendations?: boolean | Prisma.RewardType$recommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RewardTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RewardTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RewardTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RewardType";
    objects: {
        recommendations: Prisma.$TalentRecommendationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["rewardType"]>;
    composites: {};
};
export type RewardTypeGetPayload<S extends boolean | null | undefined | RewardTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewardTypePayload, S>;
export type RewardTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewardTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewardTypeCountAggregateInputType | true;
};
export interface RewardTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RewardType'];
        meta: {
            name: 'RewardType';
        };
    };
    findUnique<T extends RewardTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, RewardTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewardTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewardTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewardTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, RewardTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewardTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewardTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewardTypeFindManyArgs>(args?: Prisma.SelectSubset<T, RewardTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewardTypeCreateArgs>(args: Prisma.SelectSubset<T, RewardTypeCreateArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewardTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, RewardTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewardTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewardTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewardTypeDeleteArgs>(args: Prisma.SelectSubset<T, RewardTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewardTypeUpdateArgs>(args: Prisma.SelectSubset<T, RewardTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewardTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewardTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewardTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, RewardTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewardTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewardTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewardTypeUpsertArgs>(args: Prisma.SelectSubset<T, RewardTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewardTypeCountArgs>(args?: Prisma.Subset<T, RewardTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewardTypeCountAggregateOutputType> : number>;
    aggregate<T extends RewardTypeAggregateArgs>(args: Prisma.Subset<T, RewardTypeAggregateArgs>): Prisma.PrismaPromise<GetRewardTypeAggregateType<T>>;
    groupBy<T extends RewardTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewardTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: RewardTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewardTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewardTypeFieldRefs;
}
export interface Prisma__RewardTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recommendations<T extends Prisma.RewardType$recommendationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RewardType$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewardTypeFieldRefs {
    readonly id: Prisma.FieldRef<"RewardType", 'String'>;
    readonly name: Prisma.FieldRef<"RewardType", 'String'>;
    readonly description: Prisma.FieldRef<"RewardType", 'String'>;
    readonly isActive: Prisma.FieldRef<"RewardType", 'Boolean'>;
    readonly createdByUserId: Prisma.FieldRef<"RewardType", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RewardType", 'DateTime'>;
}
export type RewardTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where: Prisma.RewardTypeWhereUniqueInput;
};
export type RewardTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where: Prisma.RewardTypeWhereUniqueInput;
};
export type RewardTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where?: Prisma.RewardTypeWhereInput;
    orderBy?: Prisma.RewardTypeOrderByWithRelationInput | Prisma.RewardTypeOrderByWithRelationInput[];
    cursor?: Prisma.RewardTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardTypeScalarFieldEnum | Prisma.RewardTypeScalarFieldEnum[];
};
export type RewardTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where?: Prisma.RewardTypeWhereInput;
    orderBy?: Prisma.RewardTypeOrderByWithRelationInput | Prisma.RewardTypeOrderByWithRelationInput[];
    cursor?: Prisma.RewardTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardTypeScalarFieldEnum | Prisma.RewardTypeScalarFieldEnum[];
};
export type RewardTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where?: Prisma.RewardTypeWhereInput;
    orderBy?: Prisma.RewardTypeOrderByWithRelationInput | Prisma.RewardTypeOrderByWithRelationInput[];
    cursor?: Prisma.RewardTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardTypeScalarFieldEnum | Prisma.RewardTypeScalarFieldEnum[];
};
export type RewardTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardTypeCreateInput, Prisma.RewardTypeUncheckedCreateInput>;
};
export type RewardTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewardTypeCreateManyInput | Prisma.RewardTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    data: Prisma.RewardTypeCreateManyInput | Prisma.RewardTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardTypeUpdateInput, Prisma.RewardTypeUncheckedUpdateInput>;
    where: Prisma.RewardTypeWhereUniqueInput;
};
export type RewardTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewardTypeUpdateManyMutationInput, Prisma.RewardTypeUncheckedUpdateManyInput>;
    where?: Prisma.RewardTypeWhereInput;
    limit?: number;
};
export type RewardTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardTypeUpdateManyMutationInput, Prisma.RewardTypeUncheckedUpdateManyInput>;
    where?: Prisma.RewardTypeWhereInput;
    limit?: number;
};
export type RewardTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where: Prisma.RewardTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardTypeCreateInput, Prisma.RewardTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewardTypeUpdateInput, Prisma.RewardTypeUncheckedUpdateInput>;
};
export type RewardTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where: Prisma.RewardTypeWhereUniqueInput;
};
export type RewardTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardTypeWhereInput;
    limit?: number;
};
export type RewardType$recommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithRelationInput | Prisma.TalentRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.TalentRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TalentRecommendationScalarFieldEnum | Prisma.TalentRecommendationScalarFieldEnum[];
};
export type RewardTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
};
