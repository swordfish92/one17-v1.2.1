import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiKillSwitchModel = runtime.Types.Result.DefaultSelection<Prisma.$AiKillSwitchPayload>;
export type AggregateAiKillSwitch = {
    _count: AiKillSwitchCountAggregateOutputType | null;
    _avg: AiKillSwitchAvgAggregateOutputType | null;
    _sum: AiKillSwitchSumAggregateOutputType | null;
    _min: AiKillSwitchMinAggregateOutputType | null;
    _max: AiKillSwitchMaxAggregateOutputType | null;
};
export type AiKillSwitchAvgAggregateOutputType = {
    id: number | null;
};
export type AiKillSwitchSumAggregateOutputType = {
    id: number | null;
};
export type AiKillSwitchMinAggregateOutputType = {
    id: number | null;
    isActive: boolean | null;
    activatedByUserId: string | null;
    reason: string | null;
    updatedAt: Date | null;
};
export type AiKillSwitchMaxAggregateOutputType = {
    id: number | null;
    isActive: boolean | null;
    activatedByUserId: string | null;
    reason: string | null;
    updatedAt: Date | null;
};
export type AiKillSwitchCountAggregateOutputType = {
    id: number;
    isActive: number;
    activatedByUserId: number;
    reason: number;
    updatedAt: number;
    _all: number;
};
export type AiKillSwitchAvgAggregateInputType = {
    id?: true;
};
export type AiKillSwitchSumAggregateInputType = {
    id?: true;
};
export type AiKillSwitchMinAggregateInputType = {
    id?: true;
    isActive?: true;
    activatedByUserId?: true;
    reason?: true;
    updatedAt?: true;
};
export type AiKillSwitchMaxAggregateInputType = {
    id?: true;
    isActive?: true;
    activatedByUserId?: true;
    reason?: true;
    updatedAt?: true;
};
export type AiKillSwitchCountAggregateInputType = {
    id?: true;
    isActive?: true;
    activatedByUserId?: true;
    reason?: true;
    updatedAt?: true;
    _all?: true;
};
export type AiKillSwitchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiKillSwitchWhereInput;
    orderBy?: Prisma.AiKillSwitchOrderByWithRelationInput | Prisma.AiKillSwitchOrderByWithRelationInput[];
    cursor?: Prisma.AiKillSwitchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiKillSwitchCountAggregateInputType;
    _avg?: AiKillSwitchAvgAggregateInputType;
    _sum?: AiKillSwitchSumAggregateInputType;
    _min?: AiKillSwitchMinAggregateInputType;
    _max?: AiKillSwitchMaxAggregateInputType;
};
export type GetAiKillSwitchAggregateType<T extends AiKillSwitchAggregateArgs> = {
    [P in keyof T & keyof AggregateAiKillSwitch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiKillSwitch[P]> : Prisma.GetScalarType<T[P], AggregateAiKillSwitch[P]>;
};
export type AiKillSwitchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiKillSwitchWhereInput;
    orderBy?: Prisma.AiKillSwitchOrderByWithAggregationInput | Prisma.AiKillSwitchOrderByWithAggregationInput[];
    by: Prisma.AiKillSwitchScalarFieldEnum[] | Prisma.AiKillSwitchScalarFieldEnum;
    having?: Prisma.AiKillSwitchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiKillSwitchCountAggregateInputType | true;
    _avg?: AiKillSwitchAvgAggregateInputType;
    _sum?: AiKillSwitchSumAggregateInputType;
    _min?: AiKillSwitchMinAggregateInputType;
    _max?: AiKillSwitchMaxAggregateInputType;
};
export type AiKillSwitchGroupByOutputType = {
    id: number;
    isActive: boolean;
    activatedByUserId: string | null;
    reason: string | null;
    updatedAt: Date;
    _count: AiKillSwitchCountAggregateOutputType | null;
    _avg: AiKillSwitchAvgAggregateOutputType | null;
    _sum: AiKillSwitchSumAggregateOutputType | null;
    _min: AiKillSwitchMinAggregateOutputType | null;
    _max: AiKillSwitchMaxAggregateOutputType | null;
};
export type GetAiKillSwitchGroupByPayload<T extends AiKillSwitchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiKillSwitchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiKillSwitchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiKillSwitchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiKillSwitchGroupByOutputType[P]>;
}>>;
export type AiKillSwitchWhereInput = {
    AND?: Prisma.AiKillSwitchWhereInput | Prisma.AiKillSwitchWhereInput[];
    OR?: Prisma.AiKillSwitchWhereInput[];
    NOT?: Prisma.AiKillSwitchWhereInput | Prisma.AiKillSwitchWhereInput[];
    id?: Prisma.IntFilter<"AiKillSwitch"> | number;
    isActive?: Prisma.BoolFilter<"AiKillSwitch"> | boolean;
    activatedByUserId?: Prisma.UuidNullableFilter<"AiKillSwitch"> | string | null;
    reason?: Prisma.StringNullableFilter<"AiKillSwitch"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiKillSwitch"> | Date | string;
    activatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type AiKillSwitchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    activatedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type AiKillSwitchWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AiKillSwitchWhereInput | Prisma.AiKillSwitchWhereInput[];
    OR?: Prisma.AiKillSwitchWhereInput[];
    NOT?: Prisma.AiKillSwitchWhereInput | Prisma.AiKillSwitchWhereInput[];
    isActive?: Prisma.BoolFilter<"AiKillSwitch"> | boolean;
    activatedByUserId?: Prisma.UuidNullableFilter<"AiKillSwitch"> | string | null;
    reason?: Prisma.StringNullableFilter<"AiKillSwitch"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiKillSwitch"> | Date | string;
    activatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type AiKillSwitchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AiKillSwitchCountOrderByAggregateInput;
    _avg?: Prisma.AiKillSwitchAvgOrderByAggregateInput;
    _max?: Prisma.AiKillSwitchMaxOrderByAggregateInput;
    _min?: Prisma.AiKillSwitchMinOrderByAggregateInput;
    _sum?: Prisma.AiKillSwitchSumOrderByAggregateInput;
};
export type AiKillSwitchScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiKillSwitchScalarWhereWithAggregatesInput | Prisma.AiKillSwitchScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiKillSwitchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiKillSwitchScalarWhereWithAggregatesInput | Prisma.AiKillSwitchScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AiKillSwitch"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"AiKillSwitch"> | boolean;
    activatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AiKillSwitch"> | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"AiKillSwitch"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AiKillSwitch"> | Date | string;
};
export type AiKillSwitchCreateInput = {
    id?: number;
    isActive?: boolean;
    reason?: string | null;
    updatedAt?: Date | string;
    activatedBy?: Prisma.AppUserCreateNestedOneWithoutAiKillSwitchActivationsInput;
};
export type AiKillSwitchUncheckedCreateInput = {
    id?: number;
    isActive?: boolean;
    activatedByUserId?: string | null;
    reason?: string | null;
    updatedAt?: Date | string;
};
export type AiKillSwitchUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activatedBy?: Prisma.AppUserUpdateOneWithoutAiKillSwitchActivationsNestedInput;
};
export type AiKillSwitchUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchCreateManyInput = {
    id?: number;
    isActive?: boolean;
    activatedByUserId?: string | null;
    reason?: string | null;
    updatedAt?: Date | string;
};
export type AiKillSwitchUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    activatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchListRelationFilter = {
    every?: Prisma.AiKillSwitchWhereInput;
    some?: Prisma.AiKillSwitchWhereInput;
    none?: Prisma.AiKillSwitchWhereInput;
};
export type AiKillSwitchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiKillSwitchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiKillSwitchAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AiKillSwitchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiKillSwitchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiKillSwitchSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AiKillSwitchCreateNestedManyWithoutActivatedByInput = {
    create?: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput> | Prisma.AiKillSwitchCreateWithoutActivatedByInput[] | Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput | Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput[];
    createMany?: Prisma.AiKillSwitchCreateManyActivatedByInputEnvelope;
    connect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
};
export type AiKillSwitchUncheckedCreateNestedManyWithoutActivatedByInput = {
    create?: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput> | Prisma.AiKillSwitchCreateWithoutActivatedByInput[] | Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput | Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput[];
    createMany?: Prisma.AiKillSwitchCreateManyActivatedByInputEnvelope;
    connect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
};
export type AiKillSwitchUpdateManyWithoutActivatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput> | Prisma.AiKillSwitchCreateWithoutActivatedByInput[] | Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput | Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput[];
    upsert?: Prisma.AiKillSwitchUpsertWithWhereUniqueWithoutActivatedByInput | Prisma.AiKillSwitchUpsertWithWhereUniqueWithoutActivatedByInput[];
    createMany?: Prisma.AiKillSwitchCreateManyActivatedByInputEnvelope;
    set?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    disconnect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    delete?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    connect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    update?: Prisma.AiKillSwitchUpdateWithWhereUniqueWithoutActivatedByInput | Prisma.AiKillSwitchUpdateWithWhereUniqueWithoutActivatedByInput[];
    updateMany?: Prisma.AiKillSwitchUpdateManyWithWhereWithoutActivatedByInput | Prisma.AiKillSwitchUpdateManyWithWhereWithoutActivatedByInput[];
    deleteMany?: Prisma.AiKillSwitchScalarWhereInput | Prisma.AiKillSwitchScalarWhereInput[];
};
export type AiKillSwitchUncheckedUpdateManyWithoutActivatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput> | Prisma.AiKillSwitchCreateWithoutActivatedByInput[] | Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput[];
    connectOrCreate?: Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput | Prisma.AiKillSwitchCreateOrConnectWithoutActivatedByInput[];
    upsert?: Prisma.AiKillSwitchUpsertWithWhereUniqueWithoutActivatedByInput | Prisma.AiKillSwitchUpsertWithWhereUniqueWithoutActivatedByInput[];
    createMany?: Prisma.AiKillSwitchCreateManyActivatedByInputEnvelope;
    set?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    disconnect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    delete?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    connect?: Prisma.AiKillSwitchWhereUniqueInput | Prisma.AiKillSwitchWhereUniqueInput[];
    update?: Prisma.AiKillSwitchUpdateWithWhereUniqueWithoutActivatedByInput | Prisma.AiKillSwitchUpdateWithWhereUniqueWithoutActivatedByInput[];
    updateMany?: Prisma.AiKillSwitchUpdateManyWithWhereWithoutActivatedByInput | Prisma.AiKillSwitchUpdateManyWithWhereWithoutActivatedByInput[];
    deleteMany?: Prisma.AiKillSwitchScalarWhereInput | Prisma.AiKillSwitchScalarWhereInput[];
};
export type AiKillSwitchCreateWithoutActivatedByInput = {
    id?: number;
    isActive?: boolean;
    reason?: string | null;
    updatedAt?: Date | string;
};
export type AiKillSwitchUncheckedCreateWithoutActivatedByInput = {
    id?: number;
    isActive?: boolean;
    reason?: string | null;
    updatedAt?: Date | string;
};
export type AiKillSwitchCreateOrConnectWithoutActivatedByInput = {
    where: Prisma.AiKillSwitchWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput>;
};
export type AiKillSwitchCreateManyActivatedByInputEnvelope = {
    data: Prisma.AiKillSwitchCreateManyActivatedByInput | Prisma.AiKillSwitchCreateManyActivatedByInput[];
    skipDuplicates?: boolean;
};
export type AiKillSwitchUpsertWithWhereUniqueWithoutActivatedByInput = {
    where: Prisma.AiKillSwitchWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiKillSwitchUpdateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedUpdateWithoutActivatedByInput>;
    create: Prisma.XOR<Prisma.AiKillSwitchCreateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedCreateWithoutActivatedByInput>;
};
export type AiKillSwitchUpdateWithWhereUniqueWithoutActivatedByInput = {
    where: Prisma.AiKillSwitchWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiKillSwitchUpdateWithoutActivatedByInput, Prisma.AiKillSwitchUncheckedUpdateWithoutActivatedByInput>;
};
export type AiKillSwitchUpdateManyWithWhereWithoutActivatedByInput = {
    where: Prisma.AiKillSwitchScalarWhereInput;
    data: Prisma.XOR<Prisma.AiKillSwitchUpdateManyMutationInput, Prisma.AiKillSwitchUncheckedUpdateManyWithoutActivatedByInput>;
};
export type AiKillSwitchScalarWhereInput = {
    AND?: Prisma.AiKillSwitchScalarWhereInput | Prisma.AiKillSwitchScalarWhereInput[];
    OR?: Prisma.AiKillSwitchScalarWhereInput[];
    NOT?: Prisma.AiKillSwitchScalarWhereInput | Prisma.AiKillSwitchScalarWhereInput[];
    id?: Prisma.IntFilter<"AiKillSwitch"> | number;
    isActive?: Prisma.BoolFilter<"AiKillSwitch"> | boolean;
    activatedByUserId?: Prisma.UuidNullableFilter<"AiKillSwitch"> | string | null;
    reason?: Prisma.StringNullableFilter<"AiKillSwitch"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiKillSwitch"> | Date | string;
};
export type AiKillSwitchCreateManyActivatedByInput = {
    id?: number;
    isActive?: boolean;
    reason?: string | null;
    updatedAt?: Date | string;
};
export type AiKillSwitchUpdateWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchUncheckedUpdateWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchUncheckedUpdateManyWithoutActivatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiKillSwitchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    activatedByUserId?: boolean;
    reason?: boolean;
    updatedAt?: boolean;
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiKillSwitch"]>;
export type AiKillSwitchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    activatedByUserId?: boolean;
    reason?: boolean;
    updatedAt?: boolean;
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiKillSwitch"]>;
export type AiKillSwitchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    activatedByUserId?: boolean;
    reason?: boolean;
    updatedAt?: boolean;
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiKillSwitch"]>;
export type AiKillSwitchSelectScalar = {
    id?: boolean;
    isActive?: boolean;
    activatedByUserId?: boolean;
    reason?: boolean;
    updatedAt?: boolean;
};
export type AiKillSwitchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "isActive" | "activatedByUserId" | "reason" | "updatedAt", ExtArgs["result"]["aiKillSwitch"]>;
export type AiKillSwitchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
};
export type AiKillSwitchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
};
export type AiKillSwitchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activatedBy?: boolean | Prisma.AiKillSwitch$activatedByArgs<ExtArgs>;
};
export type $AiKillSwitchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiKillSwitch";
    objects: {
        activatedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        isActive: boolean;
        activatedByUserId: string | null;
        reason: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["aiKillSwitch"]>;
    composites: {};
};
export type AiKillSwitchGetPayload<S extends boolean | null | undefined | AiKillSwitchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload, S>;
export type AiKillSwitchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiKillSwitchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiKillSwitchCountAggregateInputType | true;
};
export interface AiKillSwitchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiKillSwitch'];
        meta: {
            name: 'AiKillSwitch';
        };
    };
    findUnique<T extends AiKillSwitchFindUniqueArgs>(args: Prisma.SelectSubset<T, AiKillSwitchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiKillSwitchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiKillSwitchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiKillSwitchFindFirstArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiKillSwitchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiKillSwitchFindManyArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiKillSwitchCreateArgs>(args: Prisma.SelectSubset<T, AiKillSwitchCreateArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiKillSwitchCreateManyArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiKillSwitchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiKillSwitchDeleteArgs>(args: Prisma.SelectSubset<T, AiKillSwitchDeleteArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiKillSwitchUpdateArgs>(args: Prisma.SelectSubset<T, AiKillSwitchUpdateArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiKillSwitchDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiKillSwitchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiKillSwitchUpdateManyArgs>(args: Prisma.SelectSubset<T, AiKillSwitchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiKillSwitchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiKillSwitchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiKillSwitchUpsertArgs>(args: Prisma.SelectSubset<T, AiKillSwitchUpsertArgs<ExtArgs>>): Prisma.Prisma__AiKillSwitchClient<runtime.Types.Result.GetResult<Prisma.$AiKillSwitchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiKillSwitchCountArgs>(args?: Prisma.Subset<T, AiKillSwitchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiKillSwitchCountAggregateOutputType> : number>;
    aggregate<T extends AiKillSwitchAggregateArgs>(args: Prisma.Subset<T, AiKillSwitchAggregateArgs>): Prisma.PrismaPromise<GetAiKillSwitchAggregateType<T>>;
    groupBy<T extends AiKillSwitchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiKillSwitchGroupByArgs['orderBy'];
    } : {
        orderBy?: AiKillSwitchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiKillSwitchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiKillSwitchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiKillSwitchFieldRefs;
}
export interface Prisma__AiKillSwitchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activatedBy<T extends Prisma.AiKillSwitch$activatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AiKillSwitch$activatedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiKillSwitchFieldRefs {
    readonly id: Prisma.FieldRef<"AiKillSwitch", 'Int'>;
    readonly isActive: Prisma.FieldRef<"AiKillSwitch", 'Boolean'>;
    readonly activatedByUserId: Prisma.FieldRef<"AiKillSwitch", 'String'>;
    readonly reason: Prisma.FieldRef<"AiKillSwitch", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"AiKillSwitch", 'DateTime'>;
}
export type AiKillSwitchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where: Prisma.AiKillSwitchWhereUniqueInput;
};
export type AiKillSwitchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where: Prisma.AiKillSwitchWhereUniqueInput;
};
export type AiKillSwitchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where?: Prisma.AiKillSwitchWhereInput;
    orderBy?: Prisma.AiKillSwitchOrderByWithRelationInput | Prisma.AiKillSwitchOrderByWithRelationInput[];
    cursor?: Prisma.AiKillSwitchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiKillSwitchScalarFieldEnum | Prisma.AiKillSwitchScalarFieldEnum[];
};
export type AiKillSwitchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where?: Prisma.AiKillSwitchWhereInput;
    orderBy?: Prisma.AiKillSwitchOrderByWithRelationInput | Prisma.AiKillSwitchOrderByWithRelationInput[];
    cursor?: Prisma.AiKillSwitchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiKillSwitchScalarFieldEnum | Prisma.AiKillSwitchScalarFieldEnum[];
};
export type AiKillSwitchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where?: Prisma.AiKillSwitchWhereInput;
    orderBy?: Prisma.AiKillSwitchOrderByWithRelationInput | Prisma.AiKillSwitchOrderByWithRelationInput[];
    cursor?: Prisma.AiKillSwitchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiKillSwitchScalarFieldEnum | Prisma.AiKillSwitchScalarFieldEnum[];
};
export type AiKillSwitchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiKillSwitchCreateInput, Prisma.AiKillSwitchUncheckedCreateInput>;
};
export type AiKillSwitchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiKillSwitchCreateManyInput | Prisma.AiKillSwitchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiKillSwitchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    data: Prisma.AiKillSwitchCreateManyInput | Prisma.AiKillSwitchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiKillSwitchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiKillSwitchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiKillSwitchUpdateInput, Prisma.AiKillSwitchUncheckedUpdateInput>;
    where: Prisma.AiKillSwitchWhereUniqueInput;
};
export type AiKillSwitchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiKillSwitchUpdateManyMutationInput, Prisma.AiKillSwitchUncheckedUpdateManyInput>;
    where?: Prisma.AiKillSwitchWhereInput;
    limit?: number;
};
export type AiKillSwitchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiKillSwitchUpdateManyMutationInput, Prisma.AiKillSwitchUncheckedUpdateManyInput>;
    where?: Prisma.AiKillSwitchWhereInput;
    limit?: number;
    include?: Prisma.AiKillSwitchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiKillSwitchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where: Prisma.AiKillSwitchWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiKillSwitchCreateInput, Prisma.AiKillSwitchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiKillSwitchUpdateInput, Prisma.AiKillSwitchUncheckedUpdateInput>;
};
export type AiKillSwitchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
    where: Prisma.AiKillSwitchWhereUniqueInput;
};
export type AiKillSwitchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiKillSwitchWhereInput;
    limit?: number;
};
export type AiKillSwitch$activatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type AiKillSwitchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiKillSwitchSelect<ExtArgs> | null;
    omit?: Prisma.AiKillSwitchOmit<ExtArgs> | null;
    include?: Prisma.AiKillSwitchInclude<ExtArgs> | null;
};
