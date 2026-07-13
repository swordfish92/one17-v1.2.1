import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxGlMappingModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxGlMappingPayload>;
export type AggregateTaxGlMapping = {
    _count: TaxGlMappingCountAggregateOutputType | null;
    _min: TaxGlMappingMinAggregateOutputType | null;
    _max: TaxGlMappingMaxAggregateOutputType | null;
};
export type TaxGlMappingMinAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    payableAccountCode: string | null;
    configuredByUserId: string | null;
    configuredAt: Date | null;
};
export type TaxGlMappingMaxAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    payableAccountCode: string | null;
    configuredByUserId: string | null;
    configuredAt: Date | null;
};
export type TaxGlMappingCountAggregateOutputType = {
    id: number;
    taxType: number;
    payableAccountCode: number;
    configuredByUserId: number;
    configuredAt: number;
    _all: number;
};
export type TaxGlMappingMinAggregateInputType = {
    id?: true;
    taxType?: true;
    payableAccountCode?: true;
    configuredByUserId?: true;
    configuredAt?: true;
};
export type TaxGlMappingMaxAggregateInputType = {
    id?: true;
    taxType?: true;
    payableAccountCode?: true;
    configuredByUserId?: true;
    configuredAt?: true;
};
export type TaxGlMappingCountAggregateInputType = {
    id?: true;
    taxType?: true;
    payableAccountCode?: true;
    configuredByUserId?: true;
    configuredAt?: true;
    _all?: true;
};
export type TaxGlMappingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxGlMappingWhereInput;
    orderBy?: Prisma.TaxGlMappingOrderByWithRelationInput | Prisma.TaxGlMappingOrderByWithRelationInput[];
    cursor?: Prisma.TaxGlMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxGlMappingCountAggregateInputType;
    _min?: TaxGlMappingMinAggregateInputType;
    _max?: TaxGlMappingMaxAggregateInputType;
};
export type GetTaxGlMappingAggregateType<T extends TaxGlMappingAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxGlMapping]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxGlMapping[P]> : Prisma.GetScalarType<T[P], AggregateTaxGlMapping[P]>;
};
export type TaxGlMappingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxGlMappingWhereInput;
    orderBy?: Prisma.TaxGlMappingOrderByWithAggregationInput | Prisma.TaxGlMappingOrderByWithAggregationInput[];
    by: Prisma.TaxGlMappingScalarFieldEnum[] | Prisma.TaxGlMappingScalarFieldEnum;
    having?: Prisma.TaxGlMappingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxGlMappingCountAggregateInputType | true;
    _min?: TaxGlMappingMinAggregateInputType;
    _max?: TaxGlMappingMaxAggregateInputType;
};
export type TaxGlMappingGroupByOutputType = {
    id: string;
    taxType: $Enums.TaxType;
    payableAccountCode: string | null;
    configuredByUserId: string | null;
    configuredAt: Date | null;
    _count: TaxGlMappingCountAggregateOutputType | null;
    _min: TaxGlMappingMinAggregateOutputType | null;
    _max: TaxGlMappingMaxAggregateOutputType | null;
};
export type GetTaxGlMappingGroupByPayload<T extends TaxGlMappingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxGlMappingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxGlMappingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxGlMappingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxGlMappingGroupByOutputType[P]>;
}>>;
export type TaxGlMappingWhereInput = {
    AND?: Prisma.TaxGlMappingWhereInput | Prisma.TaxGlMappingWhereInput[];
    OR?: Prisma.TaxGlMappingWhereInput[];
    NOT?: Prisma.TaxGlMappingWhereInput | Prisma.TaxGlMappingWhereInput[];
    id?: Prisma.UuidFilter<"TaxGlMapping"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxGlMapping"> | $Enums.TaxType;
    payableAccountCode?: Prisma.StringNullableFilter<"TaxGlMapping"> | string | null;
    configuredByUserId?: Prisma.UuidNullableFilter<"TaxGlMapping"> | string | null;
    configuredAt?: Prisma.DateTimeNullableFilter<"TaxGlMapping"> | Date | string | null;
    configuredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type TaxGlMappingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    payableAccountCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type TaxGlMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taxType?: $Enums.TaxType;
    AND?: Prisma.TaxGlMappingWhereInput | Prisma.TaxGlMappingWhereInput[];
    OR?: Prisma.TaxGlMappingWhereInput[];
    NOT?: Prisma.TaxGlMappingWhereInput | Prisma.TaxGlMappingWhereInput[];
    payableAccountCode?: Prisma.StringNullableFilter<"TaxGlMapping"> | string | null;
    configuredByUserId?: Prisma.UuidNullableFilter<"TaxGlMapping"> | string | null;
    configuredAt?: Prisma.DateTimeNullableFilter<"TaxGlMapping"> | Date | string | null;
    configuredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "taxType">;
export type TaxGlMappingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    payableAccountCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TaxGlMappingCountOrderByAggregateInput;
    _max?: Prisma.TaxGlMappingMaxOrderByAggregateInput;
    _min?: Prisma.TaxGlMappingMinOrderByAggregateInput;
};
export type TaxGlMappingScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxGlMappingScalarWhereWithAggregatesInput | Prisma.TaxGlMappingScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxGlMappingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxGlMappingScalarWhereWithAggregatesInput | Prisma.TaxGlMappingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxGlMapping"> | string;
    taxType?: Prisma.EnumTaxTypeWithAggregatesFilter<"TaxGlMapping"> | $Enums.TaxType;
    payableAccountCode?: Prisma.StringNullableWithAggregatesFilter<"TaxGlMapping"> | string | null;
    configuredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TaxGlMapping"> | string | null;
    configuredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaxGlMapping"> | Date | string | null;
};
export type TaxGlMappingCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredAt?: Date | string | null;
    configuredBy?: Prisma.AppUserCreateNestedOneWithoutTaxGlMappingsConfiguredInput;
};
export type TaxGlMappingUncheckedCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredByUserId?: string | null;
    configuredAt?: Date | string | null;
};
export type TaxGlMappingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    configuredBy?: Prisma.AppUserUpdateOneWithoutTaxGlMappingsConfiguredNestedInput;
};
export type TaxGlMappingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingCreateManyInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredByUserId?: string | null;
    configuredAt?: Date | string | null;
};
export type TaxGlMappingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingListRelationFilter = {
    every?: Prisma.TaxGlMappingWhereInput;
    some?: Prisma.TaxGlMappingWhereInput;
    none?: Prisma.TaxGlMappingWhereInput;
};
export type TaxGlMappingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxGlMappingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    payableAccountCode?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    configuredAt?: Prisma.SortOrder;
};
export type TaxGlMappingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    payableAccountCode?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    configuredAt?: Prisma.SortOrder;
};
export type TaxGlMappingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    payableAccountCode?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    configuredAt?: Prisma.SortOrder;
};
export type TaxGlMappingCreateNestedManyWithoutConfiguredByInput = {
    create?: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput> | Prisma.TaxGlMappingCreateWithoutConfiguredByInput[] | Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput | Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput[];
    createMany?: Prisma.TaxGlMappingCreateManyConfiguredByInputEnvelope;
    connect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
};
export type TaxGlMappingUncheckedCreateNestedManyWithoutConfiguredByInput = {
    create?: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput> | Prisma.TaxGlMappingCreateWithoutConfiguredByInput[] | Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput | Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput[];
    createMany?: Prisma.TaxGlMappingCreateManyConfiguredByInputEnvelope;
    connect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
};
export type TaxGlMappingUpdateManyWithoutConfiguredByNestedInput = {
    create?: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput> | Prisma.TaxGlMappingCreateWithoutConfiguredByInput[] | Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput | Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput[];
    upsert?: Prisma.TaxGlMappingUpsertWithWhereUniqueWithoutConfiguredByInput | Prisma.TaxGlMappingUpsertWithWhereUniqueWithoutConfiguredByInput[];
    createMany?: Prisma.TaxGlMappingCreateManyConfiguredByInputEnvelope;
    set?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    disconnect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    delete?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    connect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    update?: Prisma.TaxGlMappingUpdateWithWhereUniqueWithoutConfiguredByInput | Prisma.TaxGlMappingUpdateWithWhereUniqueWithoutConfiguredByInput[];
    updateMany?: Prisma.TaxGlMappingUpdateManyWithWhereWithoutConfiguredByInput | Prisma.TaxGlMappingUpdateManyWithWhereWithoutConfiguredByInput[];
    deleteMany?: Prisma.TaxGlMappingScalarWhereInput | Prisma.TaxGlMappingScalarWhereInput[];
};
export type TaxGlMappingUncheckedUpdateManyWithoutConfiguredByNestedInput = {
    create?: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput> | Prisma.TaxGlMappingCreateWithoutConfiguredByInput[] | Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput | Prisma.TaxGlMappingCreateOrConnectWithoutConfiguredByInput[];
    upsert?: Prisma.TaxGlMappingUpsertWithWhereUniqueWithoutConfiguredByInput | Prisma.TaxGlMappingUpsertWithWhereUniqueWithoutConfiguredByInput[];
    createMany?: Prisma.TaxGlMappingCreateManyConfiguredByInputEnvelope;
    set?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    disconnect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    delete?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    connect?: Prisma.TaxGlMappingWhereUniqueInput | Prisma.TaxGlMappingWhereUniqueInput[];
    update?: Prisma.TaxGlMappingUpdateWithWhereUniqueWithoutConfiguredByInput | Prisma.TaxGlMappingUpdateWithWhereUniqueWithoutConfiguredByInput[];
    updateMany?: Prisma.TaxGlMappingUpdateManyWithWhereWithoutConfiguredByInput | Prisma.TaxGlMappingUpdateManyWithWhereWithoutConfiguredByInput[];
    deleteMany?: Prisma.TaxGlMappingScalarWhereInput | Prisma.TaxGlMappingScalarWhereInput[];
};
export type TaxGlMappingCreateWithoutConfiguredByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredAt?: Date | string | null;
};
export type TaxGlMappingUncheckedCreateWithoutConfiguredByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredAt?: Date | string | null;
};
export type TaxGlMappingCreateOrConnectWithoutConfiguredByInput = {
    where: Prisma.TaxGlMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput>;
};
export type TaxGlMappingCreateManyConfiguredByInputEnvelope = {
    data: Prisma.TaxGlMappingCreateManyConfiguredByInput | Prisma.TaxGlMappingCreateManyConfiguredByInput[];
    skipDuplicates?: boolean;
};
export type TaxGlMappingUpsertWithWhereUniqueWithoutConfiguredByInput = {
    where: Prisma.TaxGlMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxGlMappingUpdateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedUpdateWithoutConfiguredByInput>;
    create: Prisma.XOR<Prisma.TaxGlMappingCreateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedCreateWithoutConfiguredByInput>;
};
export type TaxGlMappingUpdateWithWhereUniqueWithoutConfiguredByInput = {
    where: Prisma.TaxGlMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxGlMappingUpdateWithoutConfiguredByInput, Prisma.TaxGlMappingUncheckedUpdateWithoutConfiguredByInput>;
};
export type TaxGlMappingUpdateManyWithWhereWithoutConfiguredByInput = {
    where: Prisma.TaxGlMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxGlMappingUpdateManyMutationInput, Prisma.TaxGlMappingUncheckedUpdateManyWithoutConfiguredByInput>;
};
export type TaxGlMappingScalarWhereInput = {
    AND?: Prisma.TaxGlMappingScalarWhereInput | Prisma.TaxGlMappingScalarWhereInput[];
    OR?: Prisma.TaxGlMappingScalarWhereInput[];
    NOT?: Prisma.TaxGlMappingScalarWhereInput | Prisma.TaxGlMappingScalarWhereInput[];
    id?: Prisma.UuidFilter<"TaxGlMapping"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxGlMapping"> | $Enums.TaxType;
    payableAccountCode?: Prisma.StringNullableFilter<"TaxGlMapping"> | string | null;
    configuredByUserId?: Prisma.UuidNullableFilter<"TaxGlMapping"> | string | null;
    configuredAt?: Prisma.DateTimeNullableFilter<"TaxGlMapping"> | Date | string | null;
};
export type TaxGlMappingCreateManyConfiguredByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    payableAccountCode?: string | null;
    configuredAt?: Date | string | null;
};
export type TaxGlMappingUpdateWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingUncheckedUpdateWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingUncheckedUpdateManyWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    payableAccountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaxGlMappingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    payableAccountCode?: boolean;
    configuredByUserId?: boolean;
    configuredAt?: boolean;
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
}, ExtArgs["result"]["taxGlMapping"]>;
export type TaxGlMappingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    payableAccountCode?: boolean;
    configuredByUserId?: boolean;
    configuredAt?: boolean;
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
}, ExtArgs["result"]["taxGlMapping"]>;
export type TaxGlMappingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    payableAccountCode?: boolean;
    configuredByUserId?: boolean;
    configuredAt?: boolean;
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
}, ExtArgs["result"]["taxGlMapping"]>;
export type TaxGlMappingSelectScalar = {
    id?: boolean;
    taxType?: boolean;
    payableAccountCode?: boolean;
    configuredByUserId?: boolean;
    configuredAt?: boolean;
};
export type TaxGlMappingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxType" | "payableAccountCode" | "configuredByUserId" | "configuredAt", ExtArgs["result"]["taxGlMapping"]>;
export type TaxGlMappingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
};
export type TaxGlMappingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
};
export type TaxGlMappingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.TaxGlMapping$configuredByArgs<ExtArgs>;
};
export type $TaxGlMappingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxGlMapping";
    objects: {
        configuredBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taxType: $Enums.TaxType;
        payableAccountCode: string | null;
        configuredByUserId: string | null;
        configuredAt: Date | null;
    }, ExtArgs["result"]["taxGlMapping"]>;
    composites: {};
};
export type TaxGlMappingGetPayload<S extends boolean | null | undefined | TaxGlMappingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload, S>;
export type TaxGlMappingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxGlMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxGlMappingCountAggregateInputType | true;
};
export interface TaxGlMappingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxGlMapping'];
        meta: {
            name: 'TaxGlMapping';
        };
    };
    findUnique<T extends TaxGlMappingFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxGlMappingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxGlMappingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxGlMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxGlMappingFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxGlMappingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxGlMappingFindManyArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxGlMappingCreateArgs>(args: Prisma.SelectSubset<T, TaxGlMappingCreateArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxGlMappingCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxGlMappingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxGlMappingDeleteArgs>(args: Prisma.SelectSubset<T, TaxGlMappingDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxGlMappingUpdateArgs>(args: Prisma.SelectSubset<T, TaxGlMappingUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxGlMappingDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxGlMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxGlMappingUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxGlMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxGlMappingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxGlMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxGlMappingUpsertArgs>(args: Prisma.SelectSubset<T, TaxGlMappingUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxGlMappingClient<runtime.Types.Result.GetResult<Prisma.$TaxGlMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxGlMappingCountArgs>(args?: Prisma.Subset<T, TaxGlMappingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxGlMappingCountAggregateOutputType> : number>;
    aggregate<T extends TaxGlMappingAggregateArgs>(args: Prisma.Subset<T, TaxGlMappingAggregateArgs>): Prisma.PrismaPromise<GetTaxGlMappingAggregateType<T>>;
    groupBy<T extends TaxGlMappingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxGlMappingGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxGlMappingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxGlMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxGlMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxGlMappingFieldRefs;
}
export interface Prisma__TaxGlMappingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    configuredBy<T extends Prisma.TaxGlMapping$configuredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxGlMapping$configuredByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxGlMappingFieldRefs {
    readonly id: Prisma.FieldRef<"TaxGlMapping", 'String'>;
    readonly taxType: Prisma.FieldRef<"TaxGlMapping", 'TaxType'>;
    readonly payableAccountCode: Prisma.FieldRef<"TaxGlMapping", 'String'>;
    readonly configuredByUserId: Prisma.FieldRef<"TaxGlMapping", 'String'>;
    readonly configuredAt: Prisma.FieldRef<"TaxGlMapping", 'DateTime'>;
}
export type TaxGlMappingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where: Prisma.TaxGlMappingWhereUniqueInput;
};
export type TaxGlMappingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where: Prisma.TaxGlMappingWhereUniqueInput;
};
export type TaxGlMappingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where?: Prisma.TaxGlMappingWhereInput;
    orderBy?: Prisma.TaxGlMappingOrderByWithRelationInput | Prisma.TaxGlMappingOrderByWithRelationInput[];
    cursor?: Prisma.TaxGlMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxGlMappingScalarFieldEnum | Prisma.TaxGlMappingScalarFieldEnum[];
};
export type TaxGlMappingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where?: Prisma.TaxGlMappingWhereInput;
    orderBy?: Prisma.TaxGlMappingOrderByWithRelationInput | Prisma.TaxGlMappingOrderByWithRelationInput[];
    cursor?: Prisma.TaxGlMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxGlMappingScalarFieldEnum | Prisma.TaxGlMappingScalarFieldEnum[];
};
export type TaxGlMappingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where?: Prisma.TaxGlMappingWhereInput;
    orderBy?: Prisma.TaxGlMappingOrderByWithRelationInput | Prisma.TaxGlMappingOrderByWithRelationInput[];
    cursor?: Prisma.TaxGlMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxGlMappingScalarFieldEnum | Prisma.TaxGlMappingScalarFieldEnum[];
};
export type TaxGlMappingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxGlMappingCreateInput, Prisma.TaxGlMappingUncheckedCreateInput>;
};
export type TaxGlMappingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxGlMappingCreateManyInput | Prisma.TaxGlMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxGlMappingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    data: Prisma.TaxGlMappingCreateManyInput | Prisma.TaxGlMappingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaxGlMappingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaxGlMappingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxGlMappingUpdateInput, Prisma.TaxGlMappingUncheckedUpdateInput>;
    where: Prisma.TaxGlMappingWhereUniqueInput;
};
export type TaxGlMappingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxGlMappingUpdateManyMutationInput, Prisma.TaxGlMappingUncheckedUpdateManyInput>;
    where?: Prisma.TaxGlMappingWhereInput;
    limit?: number;
};
export type TaxGlMappingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxGlMappingUpdateManyMutationInput, Prisma.TaxGlMappingUncheckedUpdateManyInput>;
    where?: Prisma.TaxGlMappingWhereInput;
    limit?: number;
    include?: Prisma.TaxGlMappingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaxGlMappingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where: Prisma.TaxGlMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxGlMappingCreateInput, Prisma.TaxGlMappingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxGlMappingUpdateInput, Prisma.TaxGlMappingUncheckedUpdateInput>;
};
export type TaxGlMappingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
    where: Prisma.TaxGlMappingWhereUniqueInput;
};
export type TaxGlMappingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxGlMappingWhereInput;
    limit?: number;
};
export type TaxGlMapping$configuredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type TaxGlMappingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxGlMappingSelect<ExtArgs> | null;
    omit?: Prisma.TaxGlMappingOmit<ExtArgs> | null;
    include?: Prisma.TaxGlMappingInclude<ExtArgs> | null;
};
