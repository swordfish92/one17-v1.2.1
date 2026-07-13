import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BureauPolicyConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$BureauPolicyConfigPayload>;
export type AggregateBureauPolicyConfig = {
    _count: BureauPolicyConfigCountAggregateOutputType | null;
    _avg: BureauPolicyConfigAvgAggregateOutputType | null;
    _sum: BureauPolicyConfigSumAggregateOutputType | null;
    _min: BureauPolicyConfigMinAggregateOutputType | null;
    _max: BureauPolicyConfigMaxAggregateOutputType | null;
};
export type BureauPolicyConfigAvgAggregateOutputType = {
    id: number | null;
    minIntervalDays: number | null;
};
export type BureauPolicyConfigSumAggregateOutputType = {
    id: number | null;
    minIntervalDays: number | null;
};
export type BureauPolicyConfigMinAggregateOutputType = {
    id: number | null;
    minIntervalDays: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BureauPolicyConfigMaxAggregateOutputType = {
    id: number | null;
    minIntervalDays: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BureauPolicyConfigCountAggregateOutputType = {
    id: number;
    minIntervalDays: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type BureauPolicyConfigAvgAggregateInputType = {
    id?: true;
    minIntervalDays?: true;
};
export type BureauPolicyConfigSumAggregateInputType = {
    id?: true;
    minIntervalDays?: true;
};
export type BureauPolicyConfigMinAggregateInputType = {
    id?: true;
    minIntervalDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BureauPolicyConfigMaxAggregateInputType = {
    id?: true;
    minIntervalDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BureauPolicyConfigCountAggregateInputType = {
    id?: true;
    minIntervalDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type BureauPolicyConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPolicyConfigWhereInput;
    orderBy?: Prisma.BureauPolicyConfigOrderByWithRelationInput | Prisma.BureauPolicyConfigOrderByWithRelationInput[];
    cursor?: Prisma.BureauPolicyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BureauPolicyConfigCountAggregateInputType;
    _avg?: BureauPolicyConfigAvgAggregateInputType;
    _sum?: BureauPolicyConfigSumAggregateInputType;
    _min?: BureauPolicyConfigMinAggregateInputType;
    _max?: BureauPolicyConfigMaxAggregateInputType;
};
export type GetBureauPolicyConfigAggregateType<T extends BureauPolicyConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateBureauPolicyConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBureauPolicyConfig[P]> : Prisma.GetScalarType<T[P], AggregateBureauPolicyConfig[P]>;
};
export type BureauPolicyConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPolicyConfigWhereInput;
    orderBy?: Prisma.BureauPolicyConfigOrderByWithAggregationInput | Prisma.BureauPolicyConfigOrderByWithAggregationInput[];
    by: Prisma.BureauPolicyConfigScalarFieldEnum[] | Prisma.BureauPolicyConfigScalarFieldEnum;
    having?: Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BureauPolicyConfigCountAggregateInputType | true;
    _avg?: BureauPolicyConfigAvgAggregateInputType;
    _sum?: BureauPolicyConfigSumAggregateInputType;
    _min?: BureauPolicyConfigMinAggregateInputType;
    _max?: BureauPolicyConfigMaxAggregateInputType;
};
export type BureauPolicyConfigGroupByOutputType = {
    id: number;
    minIntervalDays: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: BureauPolicyConfigCountAggregateOutputType | null;
    _avg: BureauPolicyConfigAvgAggregateOutputType | null;
    _sum: BureauPolicyConfigSumAggregateOutputType | null;
    _min: BureauPolicyConfigMinAggregateOutputType | null;
    _max: BureauPolicyConfigMaxAggregateOutputType | null;
};
export type GetBureauPolicyConfigGroupByPayload<T extends BureauPolicyConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BureauPolicyConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BureauPolicyConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BureauPolicyConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BureauPolicyConfigGroupByOutputType[P]>;
}>>;
export type BureauPolicyConfigWhereInput = {
    AND?: Prisma.BureauPolicyConfigWhereInput | Prisma.BureauPolicyConfigWhereInput[];
    OR?: Prisma.BureauPolicyConfigWhereInput[];
    NOT?: Prisma.BureauPolicyConfigWhereInput | Prisma.BureauPolicyConfigWhereInput[];
    id?: Prisma.IntFilter<"BureauPolicyConfig"> | number;
    minIntervalDays?: Prisma.IntFilter<"BureauPolicyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauPolicyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauPolicyConfig"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type BureauPolicyConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type BureauPolicyConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BureauPolicyConfigWhereInput | Prisma.BureauPolicyConfigWhereInput[];
    OR?: Prisma.BureauPolicyConfigWhereInput[];
    NOT?: Prisma.BureauPolicyConfigWhereInput | Prisma.BureauPolicyConfigWhereInput[];
    minIntervalDays?: Prisma.IntFilter<"BureauPolicyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauPolicyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauPolicyConfig"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type BureauPolicyConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BureauPolicyConfigCountOrderByAggregateInput;
    _avg?: Prisma.BureauPolicyConfigAvgOrderByAggregateInput;
    _max?: Prisma.BureauPolicyConfigMaxOrderByAggregateInput;
    _min?: Prisma.BureauPolicyConfigMinOrderByAggregateInput;
    _sum?: Prisma.BureauPolicyConfigSumOrderByAggregateInput;
};
export type BureauPolicyConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput | Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput | Prisma.BureauPolicyConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BureauPolicyConfig"> | number;
    minIntervalDays?: Prisma.IntWithAggregatesFilter<"BureauPolicyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BureauPolicyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BureauPolicyConfig"> | Date | string;
};
export type BureauPolicyConfigCreateInput = {
    id?: number;
    minIntervalDays: number;
    updatedAt?: Date | string;
    updatedBy?: Prisma.AppUserCreateNestedOneWithoutBureauPolicyConfigsUpdatedInput;
};
export type BureauPolicyConfigUncheckedCreateInput = {
    id?: number;
    minIntervalDays: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BureauPolicyConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.AppUserUpdateOneWithoutBureauPolicyConfigsUpdatedNestedInput;
};
export type BureauPolicyConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigCreateManyInput = {
    id?: number;
    minIntervalDays: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BureauPolicyConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigListRelationFilter = {
    every?: Prisma.BureauPolicyConfigWhereInput;
    some?: Prisma.BureauPolicyConfigWhereInput;
    none?: Prisma.BureauPolicyConfigWhereInput;
};
export type BureauPolicyConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BureauPolicyConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauPolicyConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
};
export type BureauPolicyConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauPolicyConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauPolicyConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minIntervalDays?: Prisma.SortOrder;
};
export type BureauPolicyConfigCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput[] | Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput | Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BureauPolicyConfigCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
};
export type BureauPolicyConfigUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput[] | Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput | Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BureauPolicyConfigCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
};
export type BureauPolicyConfigUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput[] | Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput | Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BureauPolicyConfigUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BureauPolicyConfigCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    disconnect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    delete?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    connect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    update?: Prisma.BureauPolicyConfigUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BureauPolicyConfigUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BureauPolicyConfigScalarWhereInput | Prisma.BureauPolicyConfigScalarWhereInput[];
};
export type BureauPolicyConfigUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput[] | Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput | Prisma.BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BureauPolicyConfigUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BureauPolicyConfigCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    disconnect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    delete?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    connect?: Prisma.BureauPolicyConfigWhereUniqueInput | Prisma.BureauPolicyConfigWhereUniqueInput[];
    update?: Prisma.BureauPolicyConfigUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BureauPolicyConfigUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BureauPolicyConfigUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BureauPolicyConfigScalarWhereInput | Prisma.BureauPolicyConfigScalarWhereInput[];
};
export type BureauPolicyConfigCreateWithoutUpdatedByInput = {
    id?: number;
    minIntervalDays: number;
    updatedAt?: Date | string;
};
export type BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput = {
    id?: number;
    minIntervalDays: number;
    updatedAt?: Date | string;
};
export type BureauPolicyConfigCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput>;
};
export type BureauPolicyConfigCreateManyUpdatedByInputEnvelope = {
    data: Prisma.BureauPolicyConfigCreateManyUpdatedByInput | Prisma.BureauPolicyConfigCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type BureauPolicyConfigUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.BureauPolicyConfigUpdateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.BureauPolicyConfigCreateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedCreateWithoutUpdatedByInput>;
};
export type BureauPolicyConfigUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.BureauPolicyConfigUpdateWithoutUpdatedByInput, Prisma.BureauPolicyConfigUncheckedUpdateWithoutUpdatedByInput>;
};
export type BureauPolicyConfigUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.BureauPolicyConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.BureauPolicyConfigUpdateManyMutationInput, Prisma.BureauPolicyConfigUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type BureauPolicyConfigScalarWhereInput = {
    AND?: Prisma.BureauPolicyConfigScalarWhereInput | Prisma.BureauPolicyConfigScalarWhereInput[];
    OR?: Prisma.BureauPolicyConfigScalarWhereInput[];
    NOT?: Prisma.BureauPolicyConfigScalarWhereInput | Prisma.BureauPolicyConfigScalarWhereInput[];
    id?: Prisma.IntFilter<"BureauPolicyConfig"> | number;
    minIntervalDays?: Prisma.IntFilter<"BureauPolicyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauPolicyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauPolicyConfig"> | Date | string;
};
export type BureauPolicyConfigCreateManyUpdatedByInput = {
    id?: number;
    minIntervalDays: number;
    updatedAt?: Date | string;
};
export type BureauPolicyConfigUpdateWithoutUpdatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minIntervalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPolicyConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minIntervalDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPolicyConfig"]>;
export type BureauPolicyConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minIntervalDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPolicyConfig"]>;
export type BureauPolicyConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minIntervalDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPolicyConfig"]>;
export type BureauPolicyConfigSelectScalar = {
    id?: boolean;
    minIntervalDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type BureauPolicyConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "minIntervalDays" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["bureauPolicyConfig"]>;
export type BureauPolicyConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
};
export type BureauPolicyConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
};
export type BureauPolicyConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>;
};
export type $BureauPolicyConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BureauPolicyConfig";
    objects: {
        updatedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        minIntervalDays: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["bureauPolicyConfig"]>;
    composites: {};
};
export type BureauPolicyConfigGetPayload<S extends boolean | null | undefined | BureauPolicyConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload, S>;
export type BureauPolicyConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BureauPolicyConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BureauPolicyConfigCountAggregateInputType | true;
};
export interface BureauPolicyConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BureauPolicyConfig'];
        meta: {
            name: 'BureauPolicyConfig';
        };
    };
    findUnique<T extends BureauPolicyConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BureauPolicyConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BureauPolicyConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BureauPolicyConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BureauPolicyConfigFindManyArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BureauPolicyConfigCreateArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigCreateArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BureauPolicyConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BureauPolicyConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BureauPolicyConfigDeleteArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BureauPolicyConfigUpdateArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BureauPolicyConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, BureauPolicyConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BureauPolicyConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BureauPolicyConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BureauPolicyConfigUpsertArgs>(args: Prisma.SelectSubset<T, BureauPolicyConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__BureauPolicyConfigClient<runtime.Types.Result.GetResult<Prisma.$BureauPolicyConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BureauPolicyConfigCountArgs>(args?: Prisma.Subset<T, BureauPolicyConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BureauPolicyConfigCountAggregateOutputType> : number>;
    aggregate<T extends BureauPolicyConfigAggregateArgs>(args: Prisma.Subset<T, BureauPolicyConfigAggregateArgs>): Prisma.PrismaPromise<GetBureauPolicyConfigAggregateType<T>>;
    groupBy<T extends BureauPolicyConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BureauPolicyConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: BureauPolicyConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BureauPolicyConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBureauPolicyConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BureauPolicyConfigFieldRefs;
}
export interface Prisma__BureauPolicyConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    updatedBy<T extends Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BureauPolicyConfig$updatedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BureauPolicyConfigFieldRefs {
    readonly id: Prisma.FieldRef<"BureauPolicyConfig", 'Int'>;
    readonly minIntervalDays: Prisma.FieldRef<"BureauPolicyConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"BureauPolicyConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"BureauPolicyConfig", 'DateTime'>;
}
export type BureauPolicyConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
};
export type BureauPolicyConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
};
export type BureauPolicyConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where?: Prisma.BureauPolicyConfigWhereInput;
    orderBy?: Prisma.BureauPolicyConfigOrderByWithRelationInput | Prisma.BureauPolicyConfigOrderByWithRelationInput[];
    cursor?: Prisma.BureauPolicyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPolicyConfigScalarFieldEnum | Prisma.BureauPolicyConfigScalarFieldEnum[];
};
export type BureauPolicyConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where?: Prisma.BureauPolicyConfigWhereInput;
    orderBy?: Prisma.BureauPolicyConfigOrderByWithRelationInput | Prisma.BureauPolicyConfigOrderByWithRelationInput[];
    cursor?: Prisma.BureauPolicyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPolicyConfigScalarFieldEnum | Prisma.BureauPolicyConfigScalarFieldEnum[];
};
export type BureauPolicyConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where?: Prisma.BureauPolicyConfigWhereInput;
    orderBy?: Prisma.BureauPolicyConfigOrderByWithRelationInput | Prisma.BureauPolicyConfigOrderByWithRelationInput[];
    cursor?: Prisma.BureauPolicyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPolicyConfigScalarFieldEnum | Prisma.BureauPolicyConfigScalarFieldEnum[];
};
export type BureauPolicyConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPolicyConfigCreateInput, Prisma.BureauPolicyConfigUncheckedCreateInput>;
};
export type BureauPolicyConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BureauPolicyConfigCreateManyInput | Prisma.BureauPolicyConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BureauPolicyConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    data: Prisma.BureauPolicyConfigCreateManyInput | Prisma.BureauPolicyConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BureauPolicyConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BureauPolicyConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPolicyConfigUpdateInput, Prisma.BureauPolicyConfigUncheckedUpdateInput>;
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
};
export type BureauPolicyConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BureauPolicyConfigUpdateManyMutationInput, Prisma.BureauPolicyConfigUncheckedUpdateManyInput>;
    where?: Prisma.BureauPolicyConfigWhereInput;
    limit?: number;
};
export type BureauPolicyConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPolicyConfigUpdateManyMutationInput, Prisma.BureauPolicyConfigUncheckedUpdateManyInput>;
    where?: Prisma.BureauPolicyConfigWhereInput;
    limit?: number;
    include?: Prisma.BureauPolicyConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BureauPolicyConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPolicyConfigCreateInput, Prisma.BureauPolicyConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BureauPolicyConfigUpdateInput, Prisma.BureauPolicyConfigUncheckedUpdateInput>;
};
export type BureauPolicyConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
    where: Prisma.BureauPolicyConfigWhereUniqueInput;
};
export type BureauPolicyConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPolicyConfigWhereInput;
    limit?: number;
};
export type BureauPolicyConfig$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BureauPolicyConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPolicyConfigSelect<ExtArgs> | null;
    omit?: Prisma.BureauPolicyConfigOmit<ExtArgs> | null;
    include?: Prisma.BureauPolicyConfigInclude<ExtArgs> | null;
};
