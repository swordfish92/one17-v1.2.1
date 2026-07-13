import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmHoldingActionRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$WmHoldingActionRequestPayload>;
export type AggregateWmHoldingActionRequest = {
    _count: WmHoldingActionRequestCountAggregateOutputType | null;
    _avg: WmHoldingActionRequestAvgAggregateOutputType | null;
    _sum: WmHoldingActionRequestSumAggregateOutputType | null;
    _min: WmHoldingActionRequestMinAggregateOutputType | null;
    _max: WmHoldingActionRequestMaxAggregateOutputType | null;
};
export type WmHoldingActionRequestAvgAggregateOutputType = {
    requestedAmountKobo: number | null;
};
export type WmHoldingActionRequestSumAggregateOutputType = {
    requestedAmountKobo: bigint | null;
};
export type WmHoldingActionRequestMinAggregateOutputType = {
    id: string | null;
    wmClientAssetId: string | null;
    requestType: $Enums.WmHoldingActionType | null;
    requestedAmountKobo: bigint | null;
    notes: string | null;
    status: $Enums.WmHoldingActionStatus | null;
    actionedByUserId: string | null;
    actionedAt: Date | null;
    createdAt: Date | null;
};
export type WmHoldingActionRequestMaxAggregateOutputType = {
    id: string | null;
    wmClientAssetId: string | null;
    requestType: $Enums.WmHoldingActionType | null;
    requestedAmountKobo: bigint | null;
    notes: string | null;
    status: $Enums.WmHoldingActionStatus | null;
    actionedByUserId: string | null;
    actionedAt: Date | null;
    createdAt: Date | null;
};
export type WmHoldingActionRequestCountAggregateOutputType = {
    id: number;
    wmClientAssetId: number;
    requestType: number;
    requestedAmountKobo: number;
    notes: number;
    status: number;
    actionedByUserId: number;
    actionedAt: number;
    createdAt: number;
    _all: number;
};
export type WmHoldingActionRequestAvgAggregateInputType = {
    requestedAmountKobo?: true;
};
export type WmHoldingActionRequestSumAggregateInputType = {
    requestedAmountKobo?: true;
};
export type WmHoldingActionRequestMinAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    requestType?: true;
    requestedAmountKobo?: true;
    notes?: true;
    status?: true;
    actionedByUserId?: true;
    actionedAt?: true;
    createdAt?: true;
};
export type WmHoldingActionRequestMaxAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    requestType?: true;
    requestedAmountKobo?: true;
    notes?: true;
    status?: true;
    actionedByUserId?: true;
    actionedAt?: true;
    createdAt?: true;
};
export type WmHoldingActionRequestCountAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    requestType?: true;
    requestedAmountKobo?: true;
    notes?: true;
    status?: true;
    actionedByUserId?: true;
    actionedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type WmHoldingActionRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmHoldingActionRequestWhereInput;
    orderBy?: Prisma.WmHoldingActionRequestOrderByWithRelationInput | Prisma.WmHoldingActionRequestOrderByWithRelationInput[];
    cursor?: Prisma.WmHoldingActionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmHoldingActionRequestCountAggregateInputType;
    _avg?: WmHoldingActionRequestAvgAggregateInputType;
    _sum?: WmHoldingActionRequestSumAggregateInputType;
    _min?: WmHoldingActionRequestMinAggregateInputType;
    _max?: WmHoldingActionRequestMaxAggregateInputType;
};
export type GetWmHoldingActionRequestAggregateType<T extends WmHoldingActionRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateWmHoldingActionRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmHoldingActionRequest[P]> : Prisma.GetScalarType<T[P], AggregateWmHoldingActionRequest[P]>;
};
export type WmHoldingActionRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmHoldingActionRequestWhereInput;
    orderBy?: Prisma.WmHoldingActionRequestOrderByWithAggregationInput | Prisma.WmHoldingActionRequestOrderByWithAggregationInput[];
    by: Prisma.WmHoldingActionRequestScalarFieldEnum[] | Prisma.WmHoldingActionRequestScalarFieldEnum;
    having?: Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmHoldingActionRequestCountAggregateInputType | true;
    _avg?: WmHoldingActionRequestAvgAggregateInputType;
    _sum?: WmHoldingActionRequestSumAggregateInputType;
    _min?: WmHoldingActionRequestMinAggregateInputType;
    _max?: WmHoldingActionRequestMaxAggregateInputType;
};
export type WmHoldingActionRequestGroupByOutputType = {
    id: string;
    wmClientAssetId: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint;
    notes: string | null;
    status: $Enums.WmHoldingActionStatus;
    actionedByUserId: string | null;
    actionedAt: Date | null;
    createdAt: Date;
    _count: WmHoldingActionRequestCountAggregateOutputType | null;
    _avg: WmHoldingActionRequestAvgAggregateOutputType | null;
    _sum: WmHoldingActionRequestSumAggregateOutputType | null;
    _min: WmHoldingActionRequestMinAggregateOutputType | null;
    _max: WmHoldingActionRequestMaxAggregateOutputType | null;
};
export type GetWmHoldingActionRequestGroupByPayload<T extends WmHoldingActionRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmHoldingActionRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmHoldingActionRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmHoldingActionRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmHoldingActionRequestGroupByOutputType[P]>;
}>>;
export type WmHoldingActionRequestWhereInput = {
    AND?: Prisma.WmHoldingActionRequestWhereInput | Prisma.WmHoldingActionRequestWhereInput[];
    OR?: Prisma.WmHoldingActionRequestWhereInput[];
    NOT?: Prisma.WmHoldingActionRequestWhereInput | Prisma.WmHoldingActionRequestWhereInput[];
    id?: Prisma.UuidFilter<"WmHoldingActionRequest"> | string;
    wmClientAssetId?: Prisma.UuidFilter<"WmHoldingActionRequest"> | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFilter<"WmHoldingActionRequest"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"WmHoldingActionRequest"> | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.UuidNullableFilter<"WmHoldingActionRequest"> | string | null;
    actionedAt?: Prisma.DateTimeNullableFilter<"WmHoldingActionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmHoldingActionRequest"> | Date | string;
    wmClientAsset?: Prisma.XOR<Prisma.WmClientAssetScalarRelationFilter, Prisma.WmClientAssetWhereInput>;
};
export type WmHoldingActionRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    actionedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actionedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientAsset?: Prisma.WmClientAssetOrderByWithRelationInput;
};
export type WmHoldingActionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmHoldingActionRequestWhereInput | Prisma.WmHoldingActionRequestWhereInput[];
    OR?: Prisma.WmHoldingActionRequestWhereInput[];
    NOT?: Prisma.WmHoldingActionRequestWhereInput | Prisma.WmHoldingActionRequestWhereInput[];
    wmClientAssetId?: Prisma.UuidFilter<"WmHoldingActionRequest"> | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFilter<"WmHoldingActionRequest"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"WmHoldingActionRequest"> | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.UuidNullableFilter<"WmHoldingActionRequest"> | string | null;
    actionedAt?: Prisma.DateTimeNullableFilter<"WmHoldingActionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmHoldingActionRequest"> | Date | string;
    wmClientAsset?: Prisma.XOR<Prisma.WmClientAssetScalarRelationFilter, Prisma.WmClientAssetWhereInput>;
}, "id">;
export type WmHoldingActionRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    actionedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actionedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmHoldingActionRequestCountOrderByAggregateInput;
    _avg?: Prisma.WmHoldingActionRequestAvgOrderByAggregateInput;
    _max?: Prisma.WmHoldingActionRequestMaxOrderByAggregateInput;
    _min?: Prisma.WmHoldingActionRequestMinOrderByAggregateInput;
    _sum?: Prisma.WmHoldingActionRequestSumOrderByAggregateInput;
};
export type WmHoldingActionRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput | Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput | Prisma.WmHoldingActionRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmHoldingActionRequest"> | string;
    wmClientAssetId?: Prisma.UuidWithAggregatesFilter<"WmHoldingActionRequest"> | string;
    requestType?: Prisma.EnumWmHoldingActionTypeWithAggregatesFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntWithAggregatesFilter<"WmHoldingActionRequest"> | bigint | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"WmHoldingActionRequest"> | string | null;
    status?: Prisma.EnumWmHoldingActionStatusWithAggregatesFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"WmHoldingActionRequest"> | string | null;
    actionedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmHoldingActionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmHoldingActionRequest"> | Date | string;
};
export type WmHoldingActionRequestCreateInput = {
    id?: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
    wmClientAsset: Prisma.WmClientAssetCreateNestedOneWithoutActionRequestsInput;
};
export type WmHoldingActionRequestUncheckedCreateInput = {
    id?: string;
    wmClientAssetId: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmHoldingActionRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientAsset?: Prisma.WmClientAssetUpdateOneRequiredWithoutActionRequestsNestedInput;
};
export type WmHoldingActionRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientAssetId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestCreateManyInput = {
    id?: string;
    wmClientAssetId: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmHoldingActionRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientAssetId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestListRelationFilter = {
    every?: Prisma.WmHoldingActionRequestWhereInput;
    some?: Prisma.WmHoldingActionRequestWhereInput;
    none?: Prisma.WmHoldingActionRequestWhereInput;
};
export type WmHoldingActionRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmHoldingActionRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    actionedByUserId?: Prisma.SortOrder;
    actionedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmHoldingActionRequestAvgOrderByAggregateInput = {
    requestedAmountKobo?: Prisma.SortOrder;
};
export type WmHoldingActionRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    actionedByUserId?: Prisma.SortOrder;
    actionedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmHoldingActionRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    actionedByUserId?: Prisma.SortOrder;
    actionedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmHoldingActionRequestSumOrderByAggregateInput = {
    requestedAmountKobo?: Prisma.SortOrder;
};
export type WmHoldingActionRequestCreateNestedManyWithoutWmClientAssetInput = {
    create?: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput[] | Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput[];
    createMany?: Prisma.WmHoldingActionRequestCreateManyWmClientAssetInputEnvelope;
    connect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
};
export type WmHoldingActionRequestUncheckedCreateNestedManyWithoutWmClientAssetInput = {
    create?: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput[] | Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput[];
    createMany?: Prisma.WmHoldingActionRequestCreateManyWmClientAssetInputEnvelope;
    connect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
};
export type WmHoldingActionRequestUpdateManyWithoutWmClientAssetNestedInput = {
    create?: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput[] | Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput[];
    upsert?: Prisma.WmHoldingActionRequestUpsertWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpsertWithWhereUniqueWithoutWmClientAssetInput[];
    createMany?: Prisma.WmHoldingActionRequestCreateManyWmClientAssetInputEnvelope;
    set?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    disconnect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    delete?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    connect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    update?: Prisma.WmHoldingActionRequestUpdateWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpdateWithWhereUniqueWithoutWmClientAssetInput[];
    updateMany?: Prisma.WmHoldingActionRequestUpdateManyWithWhereWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpdateManyWithWhereWithoutWmClientAssetInput[];
    deleteMany?: Prisma.WmHoldingActionRequestScalarWhereInput | Prisma.WmHoldingActionRequestScalarWhereInput[];
};
export type WmHoldingActionRequestUncheckedUpdateManyWithoutWmClientAssetNestedInput = {
    create?: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput[] | Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput[];
    upsert?: Prisma.WmHoldingActionRequestUpsertWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpsertWithWhereUniqueWithoutWmClientAssetInput[];
    createMany?: Prisma.WmHoldingActionRequestCreateManyWmClientAssetInputEnvelope;
    set?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    disconnect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    delete?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    connect?: Prisma.WmHoldingActionRequestWhereUniqueInput | Prisma.WmHoldingActionRequestWhereUniqueInput[];
    update?: Prisma.WmHoldingActionRequestUpdateWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpdateWithWhereUniqueWithoutWmClientAssetInput[];
    updateMany?: Prisma.WmHoldingActionRequestUpdateManyWithWhereWithoutWmClientAssetInput | Prisma.WmHoldingActionRequestUpdateManyWithWhereWithoutWmClientAssetInput[];
    deleteMany?: Prisma.WmHoldingActionRequestScalarWhereInput | Prisma.WmHoldingActionRequestScalarWhereInput[];
};
export type EnumWmHoldingActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.WmHoldingActionType;
};
export type EnumWmHoldingActionStatusFieldUpdateOperationsInput = {
    set?: $Enums.WmHoldingActionStatus;
};
export type WmHoldingActionRequestCreateWithoutWmClientAssetInput = {
    id?: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput = {
    id?: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmHoldingActionRequestCreateOrConnectWithoutWmClientAssetInput = {
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput>;
};
export type WmHoldingActionRequestCreateManyWmClientAssetInputEnvelope = {
    data: Prisma.WmHoldingActionRequestCreateManyWmClientAssetInput | Prisma.WmHoldingActionRequestCreateManyWmClientAssetInput[];
    skipDuplicates?: boolean;
};
export type WmHoldingActionRequestUpsertWithWhereUniqueWithoutWmClientAssetInput = {
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedUpdateWithoutWmClientAssetInput>;
    create: Prisma.XOR<Prisma.WmHoldingActionRequestCreateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedCreateWithoutWmClientAssetInput>;
};
export type WmHoldingActionRequestUpdateWithWhereUniqueWithoutWmClientAssetInput = {
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateWithoutWmClientAssetInput, Prisma.WmHoldingActionRequestUncheckedUpdateWithoutWmClientAssetInput>;
};
export type WmHoldingActionRequestUpdateManyWithWhereWithoutWmClientAssetInput = {
    where: Prisma.WmHoldingActionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateManyMutationInput, Prisma.WmHoldingActionRequestUncheckedUpdateManyWithoutWmClientAssetInput>;
};
export type WmHoldingActionRequestScalarWhereInput = {
    AND?: Prisma.WmHoldingActionRequestScalarWhereInput | Prisma.WmHoldingActionRequestScalarWhereInput[];
    OR?: Prisma.WmHoldingActionRequestScalarWhereInput[];
    NOT?: Prisma.WmHoldingActionRequestScalarWhereInput | Prisma.WmHoldingActionRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmHoldingActionRequest"> | string;
    wmClientAssetId?: Prisma.UuidFilter<"WmHoldingActionRequest"> | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFilter<"WmHoldingActionRequest"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"WmHoldingActionRequest"> | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFilter<"WmHoldingActionRequest"> | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.UuidNullableFilter<"WmHoldingActionRequest"> | string | null;
    actionedAt?: Prisma.DateTimeNullableFilter<"WmHoldingActionRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmHoldingActionRequest"> | Date | string;
};
export type WmHoldingActionRequestCreateManyWmClientAssetInput = {
    id?: string;
    requestType: $Enums.WmHoldingActionType;
    requestedAmountKobo: bigint | number;
    notes?: string | null;
    status?: $Enums.WmHoldingActionStatus;
    actionedByUserId?: string | null;
    actionedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmHoldingActionRequestUpdateWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestUncheckedUpdateWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestUncheckedUpdateManyWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumWmHoldingActionTypeFieldUpdateOperationsInput | $Enums.WmHoldingActionType;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWmHoldingActionStatusFieldUpdateOperationsInput | $Enums.WmHoldingActionStatus;
    actionedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmHoldingActionRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    requestType?: boolean;
    requestedAmountKobo?: boolean;
    notes?: boolean;
    status?: boolean;
    actionedByUserId?: boolean;
    actionedAt?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmHoldingActionRequest"]>;
export type WmHoldingActionRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    requestType?: boolean;
    requestedAmountKobo?: boolean;
    notes?: boolean;
    status?: boolean;
    actionedByUserId?: boolean;
    actionedAt?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmHoldingActionRequest"]>;
export type WmHoldingActionRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    requestType?: boolean;
    requestedAmountKobo?: boolean;
    notes?: boolean;
    status?: boolean;
    actionedByUserId?: boolean;
    actionedAt?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmHoldingActionRequest"]>;
export type WmHoldingActionRequestSelectScalar = {
    id?: boolean;
    wmClientAssetId?: boolean;
    requestType?: boolean;
    requestedAmountKobo?: boolean;
    notes?: boolean;
    status?: boolean;
    actionedByUserId?: boolean;
    actionedAt?: boolean;
    createdAt?: boolean;
};
export type WmHoldingActionRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientAssetId" | "requestType" | "requestedAmountKobo" | "notes" | "status" | "actionedByUserId" | "actionedAt" | "createdAt", ExtArgs["result"]["wmHoldingActionRequest"]>;
export type WmHoldingActionRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type WmHoldingActionRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type WmHoldingActionRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type $WmHoldingActionRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmHoldingActionRequest";
    objects: {
        wmClientAsset: Prisma.$WmClientAssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientAssetId: string;
        requestType: $Enums.WmHoldingActionType;
        requestedAmountKobo: bigint;
        notes: string | null;
        status: $Enums.WmHoldingActionStatus;
        actionedByUserId: string | null;
        actionedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["wmHoldingActionRequest"]>;
    composites: {};
};
export type WmHoldingActionRequestGetPayload<S extends boolean | null | undefined | WmHoldingActionRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload, S>;
export type WmHoldingActionRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmHoldingActionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmHoldingActionRequestCountAggregateInputType | true;
};
export interface WmHoldingActionRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmHoldingActionRequest'];
        meta: {
            name: 'WmHoldingActionRequest';
        };
    };
    findUnique<T extends WmHoldingActionRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmHoldingActionRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmHoldingActionRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmHoldingActionRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmHoldingActionRequestFindManyArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmHoldingActionRequestCreateArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestCreateArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmHoldingActionRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmHoldingActionRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmHoldingActionRequestDeleteArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmHoldingActionRequestUpdateArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmHoldingActionRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmHoldingActionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmHoldingActionRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmHoldingActionRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmHoldingActionRequestUpsertArgs>(args: Prisma.SelectSubset<T, WmHoldingActionRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__WmHoldingActionRequestClient<runtime.Types.Result.GetResult<Prisma.$WmHoldingActionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmHoldingActionRequestCountArgs>(args?: Prisma.Subset<T, WmHoldingActionRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmHoldingActionRequestCountAggregateOutputType> : number>;
    aggregate<T extends WmHoldingActionRequestAggregateArgs>(args: Prisma.Subset<T, WmHoldingActionRequestAggregateArgs>): Prisma.PrismaPromise<GetWmHoldingActionRequestAggregateType<T>>;
    groupBy<T extends WmHoldingActionRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmHoldingActionRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: WmHoldingActionRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmHoldingActionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmHoldingActionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmHoldingActionRequestFieldRefs;
}
export interface Prisma__WmHoldingActionRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientAsset<T extends Prisma.WmClientAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmHoldingActionRequestFieldRefs {
    readonly id: Prisma.FieldRef<"WmHoldingActionRequest", 'String'>;
    readonly wmClientAssetId: Prisma.FieldRef<"WmHoldingActionRequest", 'String'>;
    readonly requestType: Prisma.FieldRef<"WmHoldingActionRequest", 'WmHoldingActionType'>;
    readonly requestedAmountKobo: Prisma.FieldRef<"WmHoldingActionRequest", 'BigInt'>;
    readonly notes: Prisma.FieldRef<"WmHoldingActionRequest", 'String'>;
    readonly status: Prisma.FieldRef<"WmHoldingActionRequest", 'WmHoldingActionStatus'>;
    readonly actionedByUserId: Prisma.FieldRef<"WmHoldingActionRequest", 'String'>;
    readonly actionedAt: Prisma.FieldRef<"WmHoldingActionRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WmHoldingActionRequest", 'DateTime'>;
}
export type WmHoldingActionRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
};
export type WmHoldingActionRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
};
export type WmHoldingActionRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where?: Prisma.WmHoldingActionRequestWhereInput;
    orderBy?: Prisma.WmHoldingActionRequestOrderByWithRelationInput | Prisma.WmHoldingActionRequestOrderByWithRelationInput[];
    cursor?: Prisma.WmHoldingActionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmHoldingActionRequestScalarFieldEnum | Prisma.WmHoldingActionRequestScalarFieldEnum[];
};
export type WmHoldingActionRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where?: Prisma.WmHoldingActionRequestWhereInput;
    orderBy?: Prisma.WmHoldingActionRequestOrderByWithRelationInput | Prisma.WmHoldingActionRequestOrderByWithRelationInput[];
    cursor?: Prisma.WmHoldingActionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmHoldingActionRequestScalarFieldEnum | Prisma.WmHoldingActionRequestScalarFieldEnum[];
};
export type WmHoldingActionRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where?: Prisma.WmHoldingActionRequestWhereInput;
    orderBy?: Prisma.WmHoldingActionRequestOrderByWithRelationInput | Prisma.WmHoldingActionRequestOrderByWithRelationInput[];
    cursor?: Prisma.WmHoldingActionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmHoldingActionRequestScalarFieldEnum | Prisma.WmHoldingActionRequestScalarFieldEnum[];
};
export type WmHoldingActionRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmHoldingActionRequestCreateInput, Prisma.WmHoldingActionRequestUncheckedCreateInput>;
};
export type WmHoldingActionRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmHoldingActionRequestCreateManyInput | Prisma.WmHoldingActionRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmHoldingActionRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    data: Prisma.WmHoldingActionRequestCreateManyInput | Prisma.WmHoldingActionRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmHoldingActionRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmHoldingActionRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateInput, Prisma.WmHoldingActionRequestUncheckedUpdateInput>;
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
};
export type WmHoldingActionRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateManyMutationInput, Prisma.WmHoldingActionRequestUncheckedUpdateManyInput>;
    where?: Prisma.WmHoldingActionRequestWhereInput;
    limit?: number;
};
export type WmHoldingActionRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateManyMutationInput, Prisma.WmHoldingActionRequestUncheckedUpdateManyInput>;
    where?: Prisma.WmHoldingActionRequestWhereInput;
    limit?: number;
    include?: Prisma.WmHoldingActionRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmHoldingActionRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmHoldingActionRequestCreateInput, Prisma.WmHoldingActionRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmHoldingActionRequestUpdateInput, Prisma.WmHoldingActionRequestUncheckedUpdateInput>;
};
export type WmHoldingActionRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
    where: Prisma.WmHoldingActionRequestWhereUniqueInput;
};
export type WmHoldingActionRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmHoldingActionRequestWhereInput;
    limit?: number;
};
export type WmHoldingActionRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmHoldingActionRequestSelect<ExtArgs> | null;
    omit?: Prisma.WmHoldingActionRequestOmit<ExtArgs> | null;
    include?: Prisma.WmHoldingActionRequestInclude<ExtArgs> | null;
};
