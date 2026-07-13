import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivationStateModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivationStatePayload>;
export type AggregateActivationState = {
    _count: ActivationStateCountAggregateOutputType | null;
    _avg: ActivationStateAvgAggregateOutputType | null;
    _sum: ActivationStateSumAggregateOutputType | null;
    _min: ActivationStateMinAggregateOutputType | null;
    _max: ActivationStateMaxAggregateOutputType | null;
};
export type ActivationStateAvgAggregateOutputType = {
    id: number | null;
};
export type ActivationStateSumAggregateOutputType = {
    id: number | null;
};
export type ActivationStateMinAggregateOutputType = {
    id: number | null;
    activatedAt: Date | null;
    activatedByUserId: string | null;
};
export type ActivationStateMaxAggregateOutputType = {
    id: number | null;
    activatedAt: Date | null;
    activatedByUserId: string | null;
};
export type ActivationStateCountAggregateOutputType = {
    id: number;
    activatedAt: number;
    activatedByUserId: number;
    _all: number;
};
export type ActivationStateAvgAggregateInputType = {
    id?: true;
};
export type ActivationStateSumAggregateInputType = {
    id?: true;
};
export type ActivationStateMinAggregateInputType = {
    id?: true;
    activatedAt?: true;
    activatedByUserId?: true;
};
export type ActivationStateMaxAggregateInputType = {
    id?: true;
    activatedAt?: true;
    activatedByUserId?: true;
};
export type ActivationStateCountAggregateInputType = {
    id?: true;
    activatedAt?: true;
    activatedByUserId?: true;
    _all?: true;
};
export type ActivationStateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStateWhereInput;
    orderBy?: Prisma.ActivationStateOrderByWithRelationInput | Prisma.ActivationStateOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivationStateCountAggregateInputType;
    _avg?: ActivationStateAvgAggregateInputType;
    _sum?: ActivationStateSumAggregateInputType;
    _min?: ActivationStateMinAggregateInputType;
    _max?: ActivationStateMaxAggregateInputType;
};
export type GetActivationStateAggregateType<T extends ActivationStateAggregateArgs> = {
    [P in keyof T & keyof AggregateActivationState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivationState[P]> : Prisma.GetScalarType<T[P], AggregateActivationState[P]>;
};
export type ActivationStateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStateWhereInput;
    orderBy?: Prisma.ActivationStateOrderByWithAggregationInput | Prisma.ActivationStateOrderByWithAggregationInput[];
    by: Prisma.ActivationStateScalarFieldEnum[] | Prisma.ActivationStateScalarFieldEnum;
    having?: Prisma.ActivationStateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivationStateCountAggregateInputType | true;
    _avg?: ActivationStateAvgAggregateInputType;
    _sum?: ActivationStateSumAggregateInputType;
    _min?: ActivationStateMinAggregateInputType;
    _max?: ActivationStateMaxAggregateInputType;
};
export type ActivationStateGroupByOutputType = {
    id: number;
    activatedAt: Date | null;
    activatedByUserId: string | null;
    _count: ActivationStateCountAggregateOutputType | null;
    _avg: ActivationStateAvgAggregateOutputType | null;
    _sum: ActivationStateSumAggregateOutputType | null;
    _min: ActivationStateMinAggregateOutputType | null;
    _max: ActivationStateMaxAggregateOutputType | null;
};
export type GetActivationStateGroupByPayload<T extends ActivationStateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivationStateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivationStateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivationStateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivationStateGroupByOutputType[P]>;
}>>;
export type ActivationStateWhereInput = {
    AND?: Prisma.ActivationStateWhereInput | Prisma.ActivationStateWhereInput[];
    OR?: Prisma.ActivationStateWhereInput[];
    NOT?: Prisma.ActivationStateWhereInput | Prisma.ActivationStateWhereInput[];
    id?: Prisma.IntFilter<"ActivationState"> | number;
    activatedAt?: Prisma.DateTimeNullableFilter<"ActivationState"> | Date | string | null;
    activatedByUserId?: Prisma.UuidNullableFilter<"ActivationState"> | string | null;
    activatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ActivationStateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ActivationStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ActivationStateWhereInput | Prisma.ActivationStateWhereInput[];
    OR?: Prisma.ActivationStateWhereInput[];
    NOT?: Prisma.ActivationStateWhereInput | Prisma.ActivationStateWhereInput[];
    activatedAt?: Prisma.DateTimeNullableFilter<"ActivationState"> | Date | string | null;
    activatedByUserId?: Prisma.UuidNullableFilter<"ActivationState"> | string | null;
    activatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type ActivationStateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ActivationStateCountOrderByAggregateInput;
    _avg?: Prisma.ActivationStateAvgOrderByAggregateInput;
    _max?: Prisma.ActivationStateMaxOrderByAggregateInput;
    _min?: Prisma.ActivationStateMinOrderByAggregateInput;
    _sum?: Prisma.ActivationStateSumOrderByAggregateInput;
};
export type ActivationStateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivationStateScalarWhereWithAggregatesInput | Prisma.ActivationStateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivationStateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivationStateScalarWhereWithAggregatesInput | Prisma.ActivationStateScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ActivationState"> | number;
    activatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ActivationState"> | Date | string | null;
    activatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ActivationState"> | string | null;
};
export type ActivationStateCreateInput = {
    id?: number;
    activatedAt?: Date | string | null;
    activatedBy?: Prisma.AppUserCreateNestedOneWithoutActivationsRunInput;
};
export type ActivationStateUncheckedCreateInput = {
    id?: number;
    activatedAt?: Date | string | null;
    activatedByUserId?: string | null;
};
export type ActivationStateUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedBy?: Prisma.AppUserUpdateOneWithoutActivationsRunNestedInput;
};
export type ActivationStateUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivationStateCreateManyInput = {
    id?: number;
    activatedAt?: Date | string | null;
    activatedByUserId?: string | null;
};
export type ActivationStateUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ActivationStateUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ActivationStateListRelationFilter = {
    every?: Prisma.ActivationStateWhereInput;
    some?: Prisma.ActivationStateWhereInput;
    none?: Prisma.ActivationStateWhereInput;
};
export type ActivationStateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivationStateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
};
export type ActivationStateAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ActivationStateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
};
export type ActivationStateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
};
export type ActivationStateSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ActivationStateCreateNestedManyWithoutActivatedByInput = {
    create?: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput> | Prisma.ActivationStateCreateWithoutActivatedByInput[] | Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput | Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput[];
    createMany?: Prisma.ActivationStateCreateManyActivatedByInputEnvelope;
    connect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
};
export type ActivationStateUncheckedCreateNestedManyWithoutActivatedByInput = {
    create?: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput> | Prisma.ActivationStateCreateWithoutActivatedByInput[] | Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput | Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput[];
    createMany?: Prisma.ActivationStateCreateManyActivatedByInputEnvelope;
    connect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
};
export type ActivationStateUpdateManyWithoutActivatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput> | Prisma.ActivationStateCreateWithoutActivatedByInput[] | Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput | Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput[];
    upsert?: Prisma.ActivationStateUpsertWithWhereUniqueWithoutActivatedByInput | Prisma.ActivationStateUpsertWithWhereUniqueWithoutActivatedByInput[];
    createMany?: Prisma.ActivationStateCreateManyActivatedByInputEnvelope;
    set?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    disconnect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    delete?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    connect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    update?: Prisma.ActivationStateUpdateWithWhereUniqueWithoutActivatedByInput | Prisma.ActivationStateUpdateWithWhereUniqueWithoutActivatedByInput[];
    updateMany?: Prisma.ActivationStateUpdateManyWithWhereWithoutActivatedByInput | Prisma.ActivationStateUpdateManyWithWhereWithoutActivatedByInput[];
    deleteMany?: Prisma.ActivationStateScalarWhereInput | Prisma.ActivationStateScalarWhereInput[];
};
export type ActivationStateUncheckedUpdateManyWithoutActivatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput> | Prisma.ActivationStateCreateWithoutActivatedByInput[] | Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput | Prisma.ActivationStateCreateOrConnectWithoutActivatedByInput[];
    upsert?: Prisma.ActivationStateUpsertWithWhereUniqueWithoutActivatedByInput | Prisma.ActivationStateUpsertWithWhereUniqueWithoutActivatedByInput[];
    createMany?: Prisma.ActivationStateCreateManyActivatedByInputEnvelope;
    set?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    disconnect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    delete?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    connect?: Prisma.ActivationStateWhereUniqueInput | Prisma.ActivationStateWhereUniqueInput[];
    update?: Prisma.ActivationStateUpdateWithWhereUniqueWithoutActivatedByInput | Prisma.ActivationStateUpdateWithWhereUniqueWithoutActivatedByInput[];
    updateMany?: Prisma.ActivationStateUpdateManyWithWhereWithoutActivatedByInput | Prisma.ActivationStateUpdateManyWithWhereWithoutActivatedByInput[];
    deleteMany?: Prisma.ActivationStateScalarWhereInput | Prisma.ActivationStateScalarWhereInput[];
};
export type ActivationStateCreateWithoutActivatedByInput = {
    id?: number;
    activatedAt?: Date | string | null;
};
export type ActivationStateUncheckedCreateWithoutActivatedByInput = {
    id?: number;
    activatedAt?: Date | string | null;
};
export type ActivationStateCreateOrConnectWithoutActivatedByInput = {
    where: Prisma.ActivationStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput>;
};
export type ActivationStateCreateManyActivatedByInputEnvelope = {
    data: Prisma.ActivationStateCreateManyActivatedByInput | Prisma.ActivationStateCreateManyActivatedByInput[];
    skipDuplicates?: boolean;
};
export type ActivationStateUpsertWithWhereUniqueWithoutActivatedByInput = {
    where: Prisma.ActivationStateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivationStateUpdateWithoutActivatedByInput, Prisma.ActivationStateUncheckedUpdateWithoutActivatedByInput>;
    create: Prisma.XOR<Prisma.ActivationStateCreateWithoutActivatedByInput, Prisma.ActivationStateUncheckedCreateWithoutActivatedByInput>;
};
export type ActivationStateUpdateWithWhereUniqueWithoutActivatedByInput = {
    where: Prisma.ActivationStateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivationStateUpdateWithoutActivatedByInput, Prisma.ActivationStateUncheckedUpdateWithoutActivatedByInput>;
};
export type ActivationStateUpdateManyWithWhereWithoutActivatedByInput = {
    where: Prisma.ActivationStateScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivationStateUpdateManyMutationInput, Prisma.ActivationStateUncheckedUpdateManyWithoutActivatedByInput>;
};
export type ActivationStateScalarWhereInput = {
    AND?: Prisma.ActivationStateScalarWhereInput | Prisma.ActivationStateScalarWhereInput[];
    OR?: Prisma.ActivationStateScalarWhereInput[];
    NOT?: Prisma.ActivationStateScalarWhereInput | Prisma.ActivationStateScalarWhereInput[];
    id?: Prisma.IntFilter<"ActivationState"> | number;
    activatedAt?: Prisma.DateTimeNullableFilter<"ActivationState"> | Date | string | null;
    activatedByUserId?: Prisma.UuidNullableFilter<"ActivationState"> | string | null;
};
export type ActivationStateCreateManyActivatedByInput = {
    id?: number;
    activatedAt?: Date | string | null;
};
export type ActivationStateUpdateWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ActivationStateUncheckedUpdateWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ActivationStateUncheckedUpdateManyWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ActivationStateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activatedAt?: boolean;
    activatedByUserId?: boolean;
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["activationState"]>;
export type ActivationStateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activatedAt?: boolean;
    activatedByUserId?: boolean;
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["activationState"]>;
export type ActivationStateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activatedAt?: boolean;
    activatedByUserId?: boolean;
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["activationState"]>;
export type ActivationStateSelectScalar = {
    id?: boolean;
    activatedAt?: boolean;
    activatedByUserId?: boolean;
};
export type ActivationStateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "activatedAt" | "activatedByUserId", ExtArgs["result"]["activationState"]>;
export type ActivationStateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
};
export type ActivationStateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
};
export type ActivationStateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.ActivationState$activatedByArgs<ExtArgs>;
};
export type $ActivationStatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivationState";
    objects: {
        activatedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        activatedAt: Date | null;
        activatedByUserId: string | null;
    }, ExtArgs["result"]["activationState"]>;
    composites: {};
};
export type ActivationStateGetPayload<S extends boolean | null | undefined | ActivationStateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload, S>;
export type ActivationStateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivationStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivationStateCountAggregateInputType | true;
};
export interface ActivationStateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivationState'];
        meta: {
            name: 'ActivationState';
        };
    };
    findUnique<T extends ActivationStateFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivationStateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivationStateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivationStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivationStateFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivationStateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivationStateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivationStateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivationStateFindManyArgs>(args?: Prisma.SelectSubset<T, ActivationStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivationStateCreateArgs>(args: Prisma.SelectSubset<T, ActivationStateCreateArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivationStateCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivationStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivationStateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivationStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivationStateDeleteArgs>(args: Prisma.SelectSubset<T, ActivationStateDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivationStateUpdateArgs>(args: Prisma.SelectSubset<T, ActivationStateUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivationStateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivationStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivationStateUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivationStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivationStateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivationStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivationStateUpsertArgs>(args: Prisma.SelectSubset<T, ActivationStateUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivationStateClient<runtime.Types.Result.GetResult<Prisma.$ActivationStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivationStateCountArgs>(args?: Prisma.Subset<T, ActivationStateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivationStateCountAggregateOutputType> : number>;
    aggregate<T extends ActivationStateAggregateArgs>(args: Prisma.Subset<T, ActivationStateAggregateArgs>): Prisma.PrismaPromise<GetActivationStateAggregateType<T>>;
    groupBy<T extends ActivationStateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivationStateGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivationStateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivationStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivationStateFieldRefs;
}
export interface Prisma__ActivationStateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activatedBy<T extends Prisma.ActivationState$activatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivationState$activatedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivationStateFieldRefs {
    readonly id: Prisma.FieldRef<"ActivationState", 'Int'>;
    readonly activatedAt: Prisma.FieldRef<"ActivationState", 'DateTime'>;
    readonly activatedByUserId: Prisma.FieldRef<"ActivationState", 'String'>;
}
export type ActivationStateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where: Prisma.ActivationStateWhereUniqueInput;
};
export type ActivationStateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where: Prisma.ActivationStateWhereUniqueInput;
};
export type ActivationStateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where?: Prisma.ActivationStateWhereInput;
    orderBy?: Prisma.ActivationStateOrderByWithRelationInput | Prisma.ActivationStateOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStateScalarFieldEnum | Prisma.ActivationStateScalarFieldEnum[];
};
export type ActivationStateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where?: Prisma.ActivationStateWhereInput;
    orderBy?: Prisma.ActivationStateOrderByWithRelationInput | Prisma.ActivationStateOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStateScalarFieldEnum | Prisma.ActivationStateScalarFieldEnum[];
};
export type ActivationStateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where?: Prisma.ActivationStateWhereInput;
    orderBy?: Prisma.ActivationStateOrderByWithRelationInput | Prisma.ActivationStateOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStateScalarFieldEnum | Prisma.ActivationStateScalarFieldEnum[];
};
export type ActivationStateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.ActivationStateCreateInput, Prisma.ActivationStateUncheckedCreateInput>;
};
export type ActivationStateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivationStateCreateManyInput | Prisma.ActivationStateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivationStateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    data: Prisma.ActivationStateCreateManyInput | Prisma.ActivationStateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivationStateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivationStateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationStateUpdateInput, Prisma.ActivationStateUncheckedUpdateInput>;
    where: Prisma.ActivationStateWhereUniqueInput;
};
export type ActivationStateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivationStateUpdateManyMutationInput, Prisma.ActivationStateUncheckedUpdateManyInput>;
    where?: Prisma.ActivationStateWhereInput;
    limit?: number;
};
export type ActivationStateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationStateUpdateManyMutationInput, Prisma.ActivationStateUncheckedUpdateManyInput>;
    where?: Prisma.ActivationStateWhereInput;
    limit?: number;
    include?: Prisma.ActivationStateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivationStateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where: Prisma.ActivationStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationStateCreateInput, Prisma.ActivationStateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivationStateUpdateInput, Prisma.ActivationStateUncheckedUpdateInput>;
};
export type ActivationStateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
    where: Prisma.ActivationStateWhereUniqueInput;
};
export type ActivationStateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStateWhereInput;
    limit?: number;
};
export type ActivationState$activatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ActivationStateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStateSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStateOmit<ExtArgs> | null;
    include?: Prisma.ActivationStateInclude<ExtArgs> | null;
};
