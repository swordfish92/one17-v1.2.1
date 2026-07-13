import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BureauProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$BureauProviderPayload>;
export type AggregateBureauProvider = {
    _count: BureauProviderCountAggregateOutputType | null;
    _avg: BureauProviderAvgAggregateOutputType | null;
    _sum: BureauProviderSumAggregateOutputType | null;
    _min: BureauProviderMinAggregateOutputType | null;
    _max: BureauProviderMaxAggregateOutputType | null;
};
export type BureauProviderAvgAggregateOutputType = {
    providerSlot: number | null;
    costPerPullKobo: number | null;
};
export type BureauProviderSumAggregateOutputType = {
    providerSlot: number | null;
    costPerPullKobo: bigint | null;
};
export type BureauProviderMinAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    costPerPullKobo: bigint | null;
    isActive: boolean | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BureauProviderMaxAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    costPerPullKobo: bigint | null;
    isActive: boolean | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BureauProviderCountAggregateOutputType = {
    id: number;
    providerSlot: number;
    name: number;
    apiConfig: number;
    costPerPullKobo: number;
    isActive: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type BureauProviderAvgAggregateInputType = {
    providerSlot?: true;
    costPerPullKobo?: true;
};
export type BureauProviderSumAggregateInputType = {
    providerSlot?: true;
    costPerPullKobo?: true;
};
export type BureauProviderMinAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    costPerPullKobo?: true;
    isActive?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BureauProviderMaxAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    costPerPullKobo?: true;
    isActive?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BureauProviderCountAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    apiConfig?: true;
    costPerPullKobo?: true;
    isActive?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type BureauProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauProviderWhereInput;
    orderBy?: Prisma.BureauProviderOrderByWithRelationInput | Prisma.BureauProviderOrderByWithRelationInput[];
    cursor?: Prisma.BureauProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BureauProviderCountAggregateInputType;
    _avg?: BureauProviderAvgAggregateInputType;
    _sum?: BureauProviderSumAggregateInputType;
    _min?: BureauProviderMinAggregateInputType;
    _max?: BureauProviderMaxAggregateInputType;
};
export type GetBureauProviderAggregateType<T extends BureauProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateBureauProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBureauProvider[P]> : Prisma.GetScalarType<T[P], AggregateBureauProvider[P]>;
};
export type BureauProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauProviderWhereInput;
    orderBy?: Prisma.BureauProviderOrderByWithAggregationInput | Prisma.BureauProviderOrderByWithAggregationInput[];
    by: Prisma.BureauProviderScalarFieldEnum[] | Prisma.BureauProviderScalarFieldEnum;
    having?: Prisma.BureauProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BureauProviderCountAggregateInputType | true;
    _avg?: BureauProviderAvgAggregateInputType;
    _sum?: BureauProviderSumAggregateInputType;
    _min?: BureauProviderMinAggregateInputType;
    _max?: BureauProviderMaxAggregateInputType;
};
export type BureauProviderGroupByOutputType = {
    id: string;
    providerSlot: number;
    name: string;
    apiConfig: runtime.JsonValue;
    costPerPullKobo: bigint;
    isActive: boolean;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: BureauProviderCountAggregateOutputType | null;
    _avg: BureauProviderAvgAggregateOutputType | null;
    _sum: BureauProviderSumAggregateOutputType | null;
    _min: BureauProviderMinAggregateOutputType | null;
    _max: BureauProviderMaxAggregateOutputType | null;
};
export type GetBureauProviderGroupByPayload<T extends BureauProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BureauProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BureauProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BureauProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BureauProviderGroupByOutputType[P]>;
}>>;
export type BureauProviderWhereInput = {
    AND?: Prisma.BureauProviderWhereInput | Prisma.BureauProviderWhereInput[];
    OR?: Prisma.BureauProviderWhereInput[];
    NOT?: Prisma.BureauProviderWhereInput | Prisma.BureauProviderWhereInput[];
    id?: Prisma.UuidFilter<"BureauProvider"> | string;
    providerSlot?: Prisma.IntFilter<"BureauProvider"> | number;
    name?: Prisma.StringFilter<"BureauProvider"> | string;
    apiConfig?: Prisma.JsonFilter<"BureauProvider">;
    costPerPullKobo?: Prisma.BigIntFilter<"BureauProvider"> | bigint | number;
    isActive?: Prisma.BoolFilter<"BureauProvider"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauProvider"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauProvider"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    pulls?: Prisma.BureauPullLogListRelationFilter;
};
export type BureauProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.AppUserOrderByWithRelationInput;
    pulls?: Prisma.BureauPullLogOrderByRelationAggregateInput;
};
export type BureauProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerSlot?: number;
    AND?: Prisma.BureauProviderWhereInput | Prisma.BureauProviderWhereInput[];
    OR?: Prisma.BureauProviderWhereInput[];
    NOT?: Prisma.BureauProviderWhereInput | Prisma.BureauProviderWhereInput[];
    name?: Prisma.StringFilter<"BureauProvider"> | string;
    apiConfig?: Prisma.JsonFilter<"BureauProvider">;
    costPerPullKobo?: Prisma.BigIntFilter<"BureauProvider"> | bigint | number;
    isActive?: Prisma.BoolFilter<"BureauProvider"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauProvider"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauProvider"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    pulls?: Prisma.BureauPullLogListRelationFilter;
}, "id" | "providerSlot">;
export type BureauProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BureauProviderCountOrderByAggregateInput;
    _avg?: Prisma.BureauProviderAvgOrderByAggregateInput;
    _max?: Prisma.BureauProviderMaxOrderByAggregateInput;
    _min?: Prisma.BureauProviderMinOrderByAggregateInput;
    _sum?: Prisma.BureauProviderSumOrderByAggregateInput;
};
export type BureauProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.BureauProviderScalarWhereWithAggregatesInput | Prisma.BureauProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.BureauProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BureauProviderScalarWhereWithAggregatesInput | Prisma.BureauProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BureauProvider"> | string;
    providerSlot?: Prisma.IntWithAggregatesFilter<"BureauProvider"> | number;
    name?: Prisma.StringWithAggregatesFilter<"BureauProvider"> | string;
    apiConfig?: Prisma.JsonWithAggregatesFilter<"BureauProvider">;
    costPerPullKobo?: Prisma.BigIntWithAggregatesFilter<"BureauProvider"> | bigint | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"BureauProvider"> | boolean;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BureauProvider"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BureauProvider"> | Date | string;
};
export type BureauProviderCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedAt?: Date | string;
    updatedBy?: Prisma.AppUserCreateNestedOneWithoutBureauProvidersUpdatedInput;
    pulls?: Prisma.BureauPullLogCreateNestedManyWithoutProviderInput;
};
export type BureauProviderUncheckedCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
    pulls?: Prisma.BureauPullLogUncheckedCreateNestedManyWithoutProviderInput;
};
export type BureauProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.AppUserUpdateOneWithoutBureauProvidersUpdatedNestedInput;
    pulls?: Prisma.BureauPullLogUpdateManyWithoutProviderNestedInput;
};
export type BureauProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pulls?: Prisma.BureauPullLogUncheckedUpdateManyWithoutProviderNestedInput;
};
export type BureauProviderCreateManyInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BureauProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauProviderListRelationFilter = {
    every?: Prisma.BureauProviderWhereInput;
    some?: Prisma.BureauProviderWhereInput;
    none?: Prisma.BureauProviderWhereInput;
};
export type BureauProviderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BureauProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauProviderAvgOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
};
export type BureauProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BureauProviderSumOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
    costPerPullKobo?: Prisma.SortOrder;
};
export type BureauProviderScalarRelationFilter = {
    is?: Prisma.BureauProviderWhereInput;
    isNot?: Prisma.BureauProviderWhereInput;
};
export type BureauProviderCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauProviderCreateWithoutUpdatedByInput[] | Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput | Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BureauProviderCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
};
export type BureauProviderUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauProviderCreateWithoutUpdatedByInput[] | Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput | Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BureauProviderCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
};
export type BureauProviderUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauProviderCreateWithoutUpdatedByInput[] | Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput | Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BureauProviderUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauProviderUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BureauProviderCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    disconnect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    delete?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    connect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    update?: Prisma.BureauProviderUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauProviderUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BureauProviderUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BureauProviderUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BureauProviderScalarWhereInput | Prisma.BureauProviderScalarWhereInput[];
};
export type BureauProviderUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput> | Prisma.BureauProviderCreateWithoutUpdatedByInput[] | Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput | Prisma.BureauProviderCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BureauProviderUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauProviderUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BureauProviderCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    disconnect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    delete?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    connect?: Prisma.BureauProviderWhereUniqueInput | Prisma.BureauProviderWhereUniqueInput[];
    update?: Prisma.BureauProviderUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BureauProviderUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BureauProviderUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BureauProviderUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BureauProviderScalarWhereInput | Prisma.BureauProviderScalarWhereInput[];
};
export type BureauProviderCreateNestedOneWithoutPullsInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutPullsInput, Prisma.BureauProviderUncheckedCreateWithoutPullsInput>;
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutPullsInput;
    connect?: Prisma.BureauProviderWhereUniqueInput;
};
export type BureauProviderUpdateOneRequiredWithoutPullsNestedInput = {
    create?: Prisma.XOR<Prisma.BureauProviderCreateWithoutPullsInput, Prisma.BureauProviderUncheckedCreateWithoutPullsInput>;
    connectOrCreate?: Prisma.BureauProviderCreateOrConnectWithoutPullsInput;
    upsert?: Prisma.BureauProviderUpsertWithoutPullsInput;
    connect?: Prisma.BureauProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BureauProviderUpdateToOneWithWhereWithoutPullsInput, Prisma.BureauProviderUpdateWithoutPullsInput>, Prisma.BureauProviderUncheckedUpdateWithoutPullsInput>;
};
export type BureauProviderCreateWithoutUpdatedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedAt?: Date | string;
    pulls?: Prisma.BureauPullLogCreateNestedManyWithoutProviderInput;
};
export type BureauProviderUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedAt?: Date | string;
    pulls?: Prisma.BureauPullLogUncheckedCreateNestedManyWithoutProviderInput;
};
export type BureauProviderCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.BureauProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput>;
};
export type BureauProviderCreateManyUpdatedByInputEnvelope = {
    data: Prisma.BureauProviderCreateManyUpdatedByInput | Prisma.BureauProviderCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type BureauProviderUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BureauProviderWhereUniqueInput;
    update: Prisma.XOR<Prisma.BureauProviderUpdateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.BureauProviderCreateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedCreateWithoutUpdatedByInput>;
};
export type BureauProviderUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BureauProviderWhereUniqueInput;
    data: Prisma.XOR<Prisma.BureauProviderUpdateWithoutUpdatedByInput, Prisma.BureauProviderUncheckedUpdateWithoutUpdatedByInput>;
};
export type BureauProviderUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.BureauProviderScalarWhereInput;
    data: Prisma.XOR<Prisma.BureauProviderUpdateManyMutationInput, Prisma.BureauProviderUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type BureauProviderScalarWhereInput = {
    AND?: Prisma.BureauProviderScalarWhereInput | Prisma.BureauProviderScalarWhereInput[];
    OR?: Prisma.BureauProviderScalarWhereInput[];
    NOT?: Prisma.BureauProviderScalarWhereInput | Prisma.BureauProviderScalarWhereInput[];
    id?: Prisma.UuidFilter<"BureauProvider"> | string;
    providerSlot?: Prisma.IntFilter<"BureauProvider"> | number;
    name?: Prisma.StringFilter<"BureauProvider"> | string;
    apiConfig?: Prisma.JsonFilter<"BureauProvider">;
    costPerPullKobo?: Prisma.BigIntFilter<"BureauProvider"> | bigint | number;
    isActive?: Prisma.BoolFilter<"BureauProvider"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"BureauProvider"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BureauProvider"> | Date | string;
};
export type BureauProviderCreateWithoutPullsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedAt?: Date | string;
    updatedBy?: Prisma.AppUserCreateNestedOneWithoutBureauProvidersUpdatedInput;
};
export type BureauProviderUncheckedCreateWithoutPullsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BureauProviderCreateOrConnectWithoutPullsInput = {
    where: Prisma.BureauProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauProviderCreateWithoutPullsInput, Prisma.BureauProviderUncheckedCreateWithoutPullsInput>;
};
export type BureauProviderUpsertWithoutPullsInput = {
    update: Prisma.XOR<Prisma.BureauProviderUpdateWithoutPullsInput, Prisma.BureauProviderUncheckedUpdateWithoutPullsInput>;
    create: Prisma.XOR<Prisma.BureauProviderCreateWithoutPullsInput, Prisma.BureauProviderUncheckedCreateWithoutPullsInput>;
    where?: Prisma.BureauProviderWhereInput;
};
export type BureauProviderUpdateToOneWithWhereWithoutPullsInput = {
    where?: Prisma.BureauProviderWhereInput;
    data: Prisma.XOR<Prisma.BureauProviderUpdateWithoutPullsInput, Prisma.BureauProviderUncheckedUpdateWithoutPullsInput>;
};
export type BureauProviderUpdateWithoutPullsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.AppUserUpdateOneWithoutBureauProvidersUpdatedNestedInput;
};
export type BureauProviderUncheckedUpdateWithoutPullsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauProviderCreateManyUpdatedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiConfig: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo: bigint | number;
    isActive?: boolean;
    updatedAt?: Date | string;
};
export type BureauProviderUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pulls?: Prisma.BureauPullLogUpdateManyWithoutProviderNestedInput;
};
export type BureauProviderUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pulls?: Prisma.BureauPullLogUncheckedUpdateManyWithoutProviderNestedInput;
};
export type BureauProviderUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    costPerPullKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauProviderCountOutputType = {
    pulls: number;
};
export type BureauProviderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pulls?: boolean | BureauProviderCountOutputTypeCountPullsArgs;
};
export type BureauProviderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderCountOutputTypeSelect<ExtArgs> | null;
};
export type BureauProviderCountOutputTypeCountPullsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPullLogWhereInput;
};
export type BureauProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiConfig?: boolean;
    costPerPullKobo?: boolean;
    isActive?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
    pulls?: boolean | Prisma.BureauProvider$pullsArgs<ExtArgs>;
    _count?: boolean | Prisma.BureauProviderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bureauProvider"]>;
export type BureauProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiConfig?: boolean;
    costPerPullKobo?: boolean;
    isActive?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["bureauProvider"]>;
export type BureauProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiConfig?: boolean;
    costPerPullKobo?: boolean;
    isActive?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["bureauProvider"]>;
export type BureauProviderSelectScalar = {
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiConfig?: boolean;
    costPerPullKobo?: boolean;
    isActive?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type BureauProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerSlot" | "name" | "apiConfig" | "costPerPullKobo" | "isActive" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["bureauProvider"]>;
export type BureauProviderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
    pulls?: boolean | Prisma.BureauProvider$pullsArgs<ExtArgs>;
    _count?: boolean | Prisma.BureauProviderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BureauProviderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
};
export type BureauProviderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.BureauProvider$updatedByArgs<ExtArgs>;
};
export type $BureauProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BureauProvider";
    objects: {
        updatedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        pulls: Prisma.$BureauPullLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerSlot: number;
        name: string;
        apiConfig: runtime.JsonValue;
        costPerPullKobo: bigint;
        isActive: boolean;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["bureauProvider"]>;
    composites: {};
};
export type BureauProviderGetPayload<S extends boolean | null | undefined | BureauProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload, S>;
export type BureauProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BureauProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BureauProviderCountAggregateInputType | true;
};
export interface BureauProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BureauProvider'];
        meta: {
            name: 'BureauProvider';
        };
    };
    findUnique<T extends BureauProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, BureauProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BureauProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BureauProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BureauProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, BureauProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BureauProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BureauProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BureauProviderFindManyArgs>(args?: Prisma.SelectSubset<T, BureauProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BureauProviderCreateArgs>(args: Prisma.SelectSubset<T, BureauProviderCreateArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BureauProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, BureauProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BureauProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BureauProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BureauProviderDeleteArgs>(args: Prisma.SelectSubset<T, BureauProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BureauProviderUpdateArgs>(args: Prisma.SelectSubset<T, BureauProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BureauProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, BureauProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BureauProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, BureauProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BureauProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BureauProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BureauProviderUpsertArgs>(args: Prisma.SelectSubset<T, BureauProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BureauProviderCountArgs>(args?: Prisma.Subset<T, BureauProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BureauProviderCountAggregateOutputType> : number>;
    aggregate<T extends BureauProviderAggregateArgs>(args: Prisma.Subset<T, BureauProviderAggregateArgs>): Prisma.PrismaPromise<GetBureauProviderAggregateType<T>>;
    groupBy<T extends BureauProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BureauProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: BureauProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BureauProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBureauProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BureauProviderFieldRefs;
}
export interface Prisma__BureauProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    updatedBy<T extends Prisma.BureauProvider$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BureauProvider$updatedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    pulls<T extends Prisma.BureauProvider$pullsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BureauProvider$pullsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BureauProviderFieldRefs {
    readonly id: Prisma.FieldRef<"BureauProvider", 'String'>;
    readonly providerSlot: Prisma.FieldRef<"BureauProvider", 'Int'>;
    readonly name: Prisma.FieldRef<"BureauProvider", 'String'>;
    readonly apiConfig: Prisma.FieldRef<"BureauProvider", 'Json'>;
    readonly costPerPullKobo: Prisma.FieldRef<"BureauProvider", 'BigInt'>;
    readonly isActive: Prisma.FieldRef<"BureauProvider", 'Boolean'>;
    readonly updatedByUserId: Prisma.FieldRef<"BureauProvider", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"BureauProvider", 'DateTime'>;
}
export type BureauProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where: Prisma.BureauProviderWhereUniqueInput;
};
export type BureauProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where: Prisma.BureauProviderWhereUniqueInput;
};
export type BureauProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where?: Prisma.BureauProviderWhereInput;
    orderBy?: Prisma.BureauProviderOrderByWithRelationInput | Prisma.BureauProviderOrderByWithRelationInput[];
    cursor?: Prisma.BureauProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauProviderScalarFieldEnum | Prisma.BureauProviderScalarFieldEnum[];
};
export type BureauProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where?: Prisma.BureauProviderWhereInput;
    orderBy?: Prisma.BureauProviderOrderByWithRelationInput | Prisma.BureauProviderOrderByWithRelationInput[];
    cursor?: Prisma.BureauProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauProviderScalarFieldEnum | Prisma.BureauProviderScalarFieldEnum[];
};
export type BureauProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where?: Prisma.BureauProviderWhereInput;
    orderBy?: Prisma.BureauProviderOrderByWithRelationInput | Prisma.BureauProviderOrderByWithRelationInput[];
    cursor?: Prisma.BureauProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauProviderScalarFieldEnum | Prisma.BureauProviderScalarFieldEnum[];
};
export type BureauProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauProviderCreateInput, Prisma.BureauProviderUncheckedCreateInput>;
};
export type BureauProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BureauProviderCreateManyInput | Prisma.BureauProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BureauProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    data: Prisma.BureauProviderCreateManyInput | Prisma.BureauProviderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BureauProviderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BureauProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauProviderUpdateInput, Prisma.BureauProviderUncheckedUpdateInput>;
    where: Prisma.BureauProviderWhereUniqueInput;
};
export type BureauProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BureauProviderUpdateManyMutationInput, Prisma.BureauProviderUncheckedUpdateManyInput>;
    where?: Prisma.BureauProviderWhereInput;
    limit?: number;
};
export type BureauProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauProviderUpdateManyMutationInput, Prisma.BureauProviderUncheckedUpdateManyInput>;
    where?: Prisma.BureauProviderWhereInput;
    limit?: number;
    include?: Prisma.BureauProviderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BureauProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where: Prisma.BureauProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauProviderCreateInput, Prisma.BureauProviderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BureauProviderUpdateInput, Prisma.BureauProviderUncheckedUpdateInput>;
};
export type BureauProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
    where: Prisma.BureauProviderWhereUniqueInput;
};
export type BureauProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauProviderWhereInput;
    limit?: number;
};
export type BureauProvider$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BureauProvider$pullsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithRelationInput | Prisma.BureauPullLogOrderByWithRelationInput[];
    cursor?: Prisma.BureauPullLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPullLogScalarFieldEnum | Prisma.BureauPullLogScalarFieldEnum[];
};
export type BureauProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauProviderSelect<ExtArgs> | null;
    omit?: Prisma.BureauProviderOmit<ExtArgs> | null;
    include?: Prisma.BureauProviderInclude<ExtArgs> | null;
};
