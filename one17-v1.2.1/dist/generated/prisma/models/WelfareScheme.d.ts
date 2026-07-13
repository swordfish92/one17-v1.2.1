import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WelfareSchemeModel = runtime.Types.Result.DefaultSelection<Prisma.$WelfareSchemePayload>;
export type AggregateWelfareScheme = {
    _count: WelfareSchemeCountAggregateOutputType | null;
    _min: WelfareSchemeMinAggregateOutputType | null;
    _max: WelfareSchemeMaxAggregateOutputType | null;
};
export type WelfareSchemeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WelfareSchemeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WelfareSchemeCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    isActive: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type WelfareSchemeMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WelfareSchemeMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WelfareSchemeCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type WelfareSchemeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WelfareSchemeWhereInput;
    orderBy?: Prisma.WelfareSchemeOrderByWithRelationInput | Prisma.WelfareSchemeOrderByWithRelationInput[];
    cursor?: Prisma.WelfareSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WelfareSchemeCountAggregateInputType;
    _min?: WelfareSchemeMinAggregateInputType;
    _max?: WelfareSchemeMaxAggregateInputType;
};
export type GetWelfareSchemeAggregateType<T extends WelfareSchemeAggregateArgs> = {
    [P in keyof T & keyof AggregateWelfareScheme]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWelfareScheme[P]> : Prisma.GetScalarType<T[P], AggregateWelfareScheme[P]>;
};
export type WelfareSchemeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WelfareSchemeWhereInput;
    orderBy?: Prisma.WelfareSchemeOrderByWithAggregationInput | Prisma.WelfareSchemeOrderByWithAggregationInput[];
    by: Prisma.WelfareSchemeScalarFieldEnum[] | Prisma.WelfareSchemeScalarFieldEnum;
    having?: Prisma.WelfareSchemeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WelfareSchemeCountAggregateInputType | true;
    _min?: WelfareSchemeMinAggregateInputType;
    _max?: WelfareSchemeMaxAggregateInputType;
};
export type WelfareSchemeGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    createdByUserId: string;
    createdAt: Date;
    _count: WelfareSchemeCountAggregateOutputType | null;
    _min: WelfareSchemeMinAggregateOutputType | null;
    _max: WelfareSchemeMaxAggregateOutputType | null;
};
export type GetWelfareSchemeGroupByPayload<T extends WelfareSchemeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WelfareSchemeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WelfareSchemeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WelfareSchemeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WelfareSchemeGroupByOutputType[P]>;
}>>;
export type WelfareSchemeWhereInput = {
    AND?: Prisma.WelfareSchemeWhereInput | Prisma.WelfareSchemeWhereInput[];
    OR?: Prisma.WelfareSchemeWhereInput[];
    NOT?: Prisma.WelfareSchemeWhereInput | Prisma.WelfareSchemeWhereInput[];
    id?: Prisma.UuidFilter<"WelfareScheme"> | string;
    name?: Prisma.StringFilter<"WelfareScheme"> | string;
    description?: Prisma.StringNullableFilter<"WelfareScheme"> | string | null;
    isActive?: Prisma.BoolFilter<"WelfareScheme"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"WelfareScheme"> | string;
    createdAt?: Prisma.DateTimeFilter<"WelfareScheme"> | Date | string;
    recommendations?: Prisma.TalentRecommendationListRelationFilter;
};
export type WelfareSchemeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    recommendations?: Prisma.TalentRecommendationOrderByRelationAggregateInput;
};
export type WelfareSchemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.WelfareSchemeWhereInput | Prisma.WelfareSchemeWhereInput[];
    OR?: Prisma.WelfareSchemeWhereInput[];
    NOT?: Prisma.WelfareSchemeWhereInput | Prisma.WelfareSchemeWhereInput[];
    description?: Prisma.StringNullableFilter<"WelfareScheme"> | string | null;
    isActive?: Prisma.BoolFilter<"WelfareScheme"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"WelfareScheme"> | string;
    createdAt?: Prisma.DateTimeFilter<"WelfareScheme"> | Date | string;
    recommendations?: Prisma.TalentRecommendationListRelationFilter;
}, "id" | "name">;
export type WelfareSchemeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WelfareSchemeCountOrderByAggregateInput;
    _max?: Prisma.WelfareSchemeMaxOrderByAggregateInput;
    _min?: Prisma.WelfareSchemeMinOrderByAggregateInput;
};
export type WelfareSchemeScalarWhereWithAggregatesInput = {
    AND?: Prisma.WelfareSchemeScalarWhereWithAggregatesInput | Prisma.WelfareSchemeScalarWhereWithAggregatesInput[];
    OR?: Prisma.WelfareSchemeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WelfareSchemeScalarWhereWithAggregatesInput | Prisma.WelfareSchemeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WelfareScheme"> | string;
    name?: Prisma.StringWithAggregatesFilter<"WelfareScheme"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"WelfareScheme"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"WelfareScheme"> | boolean;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"WelfareScheme"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WelfareScheme"> | Date | string;
};
export type WelfareSchemeCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    recommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutWelfareSchemeInput;
};
export type WelfareSchemeUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    recommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutWelfareSchemeInput;
};
export type WelfareSchemeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recommendations?: Prisma.TalentRecommendationUpdateManyWithoutWelfareSchemeNestedInput;
};
export type WelfareSchemeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutWelfareSchemeNestedInput;
};
export type WelfareSchemeCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WelfareSchemeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WelfareSchemeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WelfareSchemeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WelfareSchemeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WelfareSchemeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WelfareSchemeNullableScalarRelationFilter = {
    is?: Prisma.WelfareSchemeWhereInput | null;
    isNot?: Prisma.WelfareSchemeWhereInput | null;
};
export type WelfareSchemeCreateNestedOneWithoutRecommendationsInput = {
    create?: Prisma.XOR<Prisma.WelfareSchemeCreateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedCreateWithoutRecommendationsInput>;
    connectOrCreate?: Prisma.WelfareSchemeCreateOrConnectWithoutRecommendationsInput;
    connect?: Prisma.WelfareSchemeWhereUniqueInput;
};
export type WelfareSchemeUpdateOneWithoutRecommendationsNestedInput = {
    create?: Prisma.XOR<Prisma.WelfareSchemeCreateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedCreateWithoutRecommendationsInput>;
    connectOrCreate?: Prisma.WelfareSchemeCreateOrConnectWithoutRecommendationsInput;
    upsert?: Prisma.WelfareSchemeUpsertWithoutRecommendationsInput;
    disconnect?: Prisma.WelfareSchemeWhereInput | boolean;
    delete?: Prisma.WelfareSchemeWhereInput | boolean;
    connect?: Prisma.WelfareSchemeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WelfareSchemeUpdateToOneWithWhereWithoutRecommendationsInput, Prisma.WelfareSchemeUpdateWithoutRecommendationsInput>, Prisma.WelfareSchemeUncheckedUpdateWithoutRecommendationsInput>;
};
export type WelfareSchemeCreateWithoutRecommendationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WelfareSchemeUncheckedCreateWithoutRecommendationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WelfareSchemeCreateOrConnectWithoutRecommendationsInput = {
    where: Prisma.WelfareSchemeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WelfareSchemeCreateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedCreateWithoutRecommendationsInput>;
};
export type WelfareSchemeUpsertWithoutRecommendationsInput = {
    update: Prisma.XOR<Prisma.WelfareSchemeUpdateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedUpdateWithoutRecommendationsInput>;
    create: Prisma.XOR<Prisma.WelfareSchemeCreateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedCreateWithoutRecommendationsInput>;
    where?: Prisma.WelfareSchemeWhereInput;
};
export type WelfareSchemeUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: Prisma.WelfareSchemeWhereInput;
    data: Prisma.XOR<Prisma.WelfareSchemeUpdateWithoutRecommendationsInput, Prisma.WelfareSchemeUncheckedUpdateWithoutRecommendationsInput>;
};
export type WelfareSchemeUpdateWithoutRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WelfareSchemeUncheckedUpdateWithoutRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WelfareSchemeCountOutputType = {
    recommendations: number;
};
export type WelfareSchemeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recommendations?: boolean | WelfareSchemeCountOutputTypeCountRecommendationsArgs;
};
export type WelfareSchemeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeCountOutputTypeSelect<ExtArgs> | null;
};
export type WelfareSchemeCountOutputTypeCountRecommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
};
export type WelfareSchemeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    recommendations?: boolean | Prisma.WelfareScheme$recommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.WelfareSchemeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["welfareScheme"]>;
export type WelfareSchemeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["welfareScheme"]>;
export type WelfareSchemeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["welfareScheme"]>;
export type WelfareSchemeSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type WelfareSchemeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdByUserId" | "createdAt", ExtArgs["result"]["welfareScheme"]>;
export type WelfareSchemeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recommendations?: boolean | Prisma.WelfareScheme$recommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.WelfareSchemeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WelfareSchemeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WelfareSchemeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WelfareSchemePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WelfareScheme";
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
    }, ExtArgs["result"]["welfareScheme"]>;
    composites: {};
};
export type WelfareSchemeGetPayload<S extends boolean | null | undefined | WelfareSchemeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload, S>;
export type WelfareSchemeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WelfareSchemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WelfareSchemeCountAggregateInputType | true;
};
export interface WelfareSchemeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WelfareScheme'];
        meta: {
            name: 'WelfareScheme';
        };
    };
    findUnique<T extends WelfareSchemeFindUniqueArgs>(args: Prisma.SelectSubset<T, WelfareSchemeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WelfareSchemeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WelfareSchemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WelfareSchemeFindFirstArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeFindFirstArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WelfareSchemeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WelfareSchemeFindManyArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WelfareSchemeCreateArgs>(args: Prisma.SelectSubset<T, WelfareSchemeCreateArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WelfareSchemeCreateManyArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WelfareSchemeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WelfareSchemeDeleteArgs>(args: Prisma.SelectSubset<T, WelfareSchemeDeleteArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WelfareSchemeUpdateArgs>(args: Prisma.SelectSubset<T, WelfareSchemeUpdateArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WelfareSchemeDeleteManyArgs>(args?: Prisma.SelectSubset<T, WelfareSchemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WelfareSchemeUpdateManyArgs>(args: Prisma.SelectSubset<T, WelfareSchemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WelfareSchemeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WelfareSchemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WelfareSchemeUpsertArgs>(args: Prisma.SelectSubset<T, WelfareSchemeUpsertArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WelfareSchemeCountArgs>(args?: Prisma.Subset<T, WelfareSchemeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WelfareSchemeCountAggregateOutputType> : number>;
    aggregate<T extends WelfareSchemeAggregateArgs>(args: Prisma.Subset<T, WelfareSchemeAggregateArgs>): Prisma.PrismaPromise<GetWelfareSchemeAggregateType<T>>;
    groupBy<T extends WelfareSchemeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WelfareSchemeGroupByArgs['orderBy'];
    } : {
        orderBy?: WelfareSchemeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WelfareSchemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWelfareSchemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WelfareSchemeFieldRefs;
}
export interface Prisma__WelfareSchemeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recommendations<T extends Prisma.WelfareScheme$recommendationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WelfareScheme$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WelfareSchemeFieldRefs {
    readonly id: Prisma.FieldRef<"WelfareScheme", 'String'>;
    readonly name: Prisma.FieldRef<"WelfareScheme", 'String'>;
    readonly description: Prisma.FieldRef<"WelfareScheme", 'String'>;
    readonly isActive: Prisma.FieldRef<"WelfareScheme", 'Boolean'>;
    readonly createdByUserId: Prisma.FieldRef<"WelfareScheme", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WelfareScheme", 'DateTime'>;
}
export type WelfareSchemeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where: Prisma.WelfareSchemeWhereUniqueInput;
};
export type WelfareSchemeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where: Prisma.WelfareSchemeWhereUniqueInput;
};
export type WelfareSchemeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where?: Prisma.WelfareSchemeWhereInput;
    orderBy?: Prisma.WelfareSchemeOrderByWithRelationInput | Prisma.WelfareSchemeOrderByWithRelationInput[];
    cursor?: Prisma.WelfareSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WelfareSchemeScalarFieldEnum | Prisma.WelfareSchemeScalarFieldEnum[];
};
export type WelfareSchemeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where?: Prisma.WelfareSchemeWhereInput;
    orderBy?: Prisma.WelfareSchemeOrderByWithRelationInput | Prisma.WelfareSchemeOrderByWithRelationInput[];
    cursor?: Prisma.WelfareSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WelfareSchemeScalarFieldEnum | Prisma.WelfareSchemeScalarFieldEnum[];
};
export type WelfareSchemeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where?: Prisma.WelfareSchemeWhereInput;
    orderBy?: Prisma.WelfareSchemeOrderByWithRelationInput | Prisma.WelfareSchemeOrderByWithRelationInput[];
    cursor?: Prisma.WelfareSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WelfareSchemeScalarFieldEnum | Prisma.WelfareSchemeScalarFieldEnum[];
};
export type WelfareSchemeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WelfareSchemeCreateInput, Prisma.WelfareSchemeUncheckedCreateInput>;
};
export type WelfareSchemeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WelfareSchemeCreateManyInput | Prisma.WelfareSchemeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WelfareSchemeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    data: Prisma.WelfareSchemeCreateManyInput | Prisma.WelfareSchemeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WelfareSchemeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WelfareSchemeUpdateInput, Prisma.WelfareSchemeUncheckedUpdateInput>;
    where: Prisma.WelfareSchemeWhereUniqueInput;
};
export type WelfareSchemeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WelfareSchemeUpdateManyMutationInput, Prisma.WelfareSchemeUncheckedUpdateManyInput>;
    where?: Prisma.WelfareSchemeWhereInput;
    limit?: number;
};
export type WelfareSchemeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WelfareSchemeUpdateManyMutationInput, Prisma.WelfareSchemeUncheckedUpdateManyInput>;
    where?: Prisma.WelfareSchemeWhereInput;
    limit?: number;
};
export type WelfareSchemeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where: Prisma.WelfareSchemeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WelfareSchemeCreateInput, Prisma.WelfareSchemeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WelfareSchemeUpdateInput, Prisma.WelfareSchemeUncheckedUpdateInput>;
};
export type WelfareSchemeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where: Prisma.WelfareSchemeWhereUniqueInput;
};
export type WelfareSchemeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WelfareSchemeWhereInput;
    limit?: number;
};
export type WelfareScheme$recommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WelfareSchemeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
};
