import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GoodsReceiptModel = runtime.Types.Result.DefaultSelection<Prisma.$GoodsReceiptPayload>;
export type AggregateGoodsReceipt = {
    _count: GoodsReceiptCountAggregateOutputType | null;
    _avg: GoodsReceiptAvgAggregateOutputType | null;
    _sum: GoodsReceiptSumAggregateOutputType | null;
    _min: GoodsReceiptMinAggregateOutputType | null;
    _max: GoodsReceiptMaxAggregateOutputType | null;
};
export type GoodsReceiptAvgAggregateOutputType = {
    receivedAmountKobo: number | null;
};
export type GoodsReceiptSumAggregateOutputType = {
    receivedAmountKobo: bigint | null;
};
export type GoodsReceiptMinAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    receivedAmountKobo: bigint | null;
    receivedByUserId: string | null;
    notes: string | null;
    createdAt: Date | null;
};
export type GoodsReceiptMaxAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    receivedAmountKobo: bigint | null;
    receivedByUserId: string | null;
    notes: string | null;
    createdAt: Date | null;
};
export type GoodsReceiptCountAggregateOutputType = {
    id: number;
    purchaseOrderId: number;
    receivedAmountKobo: number;
    receivedByUserId: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type GoodsReceiptAvgAggregateInputType = {
    receivedAmountKobo?: true;
};
export type GoodsReceiptSumAggregateInputType = {
    receivedAmountKobo?: true;
};
export type GoodsReceiptMinAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    receivedAmountKobo?: true;
    receivedByUserId?: true;
    notes?: true;
    createdAt?: true;
};
export type GoodsReceiptMaxAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    receivedAmountKobo?: true;
    receivedByUserId?: true;
    notes?: true;
    createdAt?: true;
};
export type GoodsReceiptCountAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    receivedAmountKobo?: true;
    receivedByUserId?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type GoodsReceiptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodsReceiptWhereInput;
    orderBy?: Prisma.GoodsReceiptOrderByWithRelationInput | Prisma.GoodsReceiptOrderByWithRelationInput[];
    cursor?: Prisma.GoodsReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GoodsReceiptCountAggregateInputType;
    _avg?: GoodsReceiptAvgAggregateInputType;
    _sum?: GoodsReceiptSumAggregateInputType;
    _min?: GoodsReceiptMinAggregateInputType;
    _max?: GoodsReceiptMaxAggregateInputType;
};
export type GetGoodsReceiptAggregateType<T extends GoodsReceiptAggregateArgs> = {
    [P in keyof T & keyof AggregateGoodsReceipt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGoodsReceipt[P]> : Prisma.GetScalarType<T[P], AggregateGoodsReceipt[P]>;
};
export type GoodsReceiptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodsReceiptWhereInput;
    orderBy?: Prisma.GoodsReceiptOrderByWithAggregationInput | Prisma.GoodsReceiptOrderByWithAggregationInput[];
    by: Prisma.GoodsReceiptScalarFieldEnum[] | Prisma.GoodsReceiptScalarFieldEnum;
    having?: Prisma.GoodsReceiptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoodsReceiptCountAggregateInputType | true;
    _avg?: GoodsReceiptAvgAggregateInputType;
    _sum?: GoodsReceiptSumAggregateInputType;
    _min?: GoodsReceiptMinAggregateInputType;
    _max?: GoodsReceiptMaxAggregateInputType;
};
export type GoodsReceiptGroupByOutputType = {
    id: string;
    purchaseOrderId: string;
    receivedAmountKobo: bigint;
    receivedByUserId: string;
    notes: string | null;
    createdAt: Date;
    _count: GoodsReceiptCountAggregateOutputType | null;
    _avg: GoodsReceiptAvgAggregateOutputType | null;
    _sum: GoodsReceiptSumAggregateOutputType | null;
    _min: GoodsReceiptMinAggregateOutputType | null;
    _max: GoodsReceiptMaxAggregateOutputType | null;
};
export type GetGoodsReceiptGroupByPayload<T extends GoodsReceiptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GoodsReceiptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GoodsReceiptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GoodsReceiptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GoodsReceiptGroupByOutputType[P]>;
}>>;
export type GoodsReceiptWhereInput = {
    AND?: Prisma.GoodsReceiptWhereInput | Prisma.GoodsReceiptWhereInput[];
    OR?: Prisma.GoodsReceiptWhereInput[];
    NOT?: Prisma.GoodsReceiptWhereInput | Prisma.GoodsReceiptWhereInput[];
    id?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    receivedAmountKobo?: Prisma.BigIntFilter<"GoodsReceipt"> | bigint | number;
    receivedByUserId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    notes?: Prisma.StringNullableFilter<"GoodsReceipt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoodsReceipt"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    receivedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type GoodsReceiptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    receivedAmountKobo?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
    receivedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type GoodsReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GoodsReceiptWhereInput | Prisma.GoodsReceiptWhereInput[];
    OR?: Prisma.GoodsReceiptWhereInput[];
    NOT?: Prisma.GoodsReceiptWhereInput | Prisma.GoodsReceiptWhereInput[];
    purchaseOrderId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    receivedAmountKobo?: Prisma.BigIntFilter<"GoodsReceipt"> | bigint | number;
    receivedByUserId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    notes?: Prisma.StringNullableFilter<"GoodsReceipt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoodsReceipt"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    receivedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type GoodsReceiptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    receivedAmountKobo?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GoodsReceiptCountOrderByAggregateInput;
    _avg?: Prisma.GoodsReceiptAvgOrderByAggregateInput;
    _max?: Prisma.GoodsReceiptMaxOrderByAggregateInput;
    _min?: Prisma.GoodsReceiptMinOrderByAggregateInput;
    _sum?: Prisma.GoodsReceiptSumOrderByAggregateInput;
};
export type GoodsReceiptScalarWhereWithAggregatesInput = {
    AND?: Prisma.GoodsReceiptScalarWhereWithAggregatesInput | Prisma.GoodsReceiptScalarWhereWithAggregatesInput[];
    OR?: Prisma.GoodsReceiptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GoodsReceiptScalarWhereWithAggregatesInput | Prisma.GoodsReceiptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"GoodsReceipt"> | string;
    purchaseOrderId?: Prisma.UuidWithAggregatesFilter<"GoodsReceipt"> | string;
    receivedAmountKobo?: Prisma.BigIntWithAggregatesFilter<"GoodsReceipt"> | bigint | number;
    receivedByUserId?: Prisma.UuidWithAggregatesFilter<"GoodsReceipt"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"GoodsReceipt"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GoodsReceipt"> | Date | string;
};
export type GoodsReceiptCreateInput = {
    id?: string;
    receivedAmountKobo: bigint | number;
    notes?: string | null;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutGoodsReceiptsInput;
    receivedBy: Prisma.AppUserCreateNestedOneWithoutGoodsReceiptsRecordedInput;
};
export type GoodsReceiptUncheckedCreateInput = {
    id?: string;
    purchaseOrderId: string;
    receivedAmountKobo: bigint | number;
    receivedByUserId: string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutGoodsReceiptsNestedInput;
    receivedBy?: Prisma.AppUserUpdateOneRequiredWithoutGoodsReceiptsRecordedNestedInput;
};
export type GoodsReceiptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    receivedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptCreateManyInput = {
    id?: string;
    purchaseOrderId: string;
    receivedAmountKobo: bigint | number;
    receivedByUserId: string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    receivedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptListRelationFilter = {
    every?: Prisma.GoodsReceiptWhereInput;
    some?: Prisma.GoodsReceiptWhereInput;
    none?: Prisma.GoodsReceiptWhereInput;
};
export type GoodsReceiptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GoodsReceiptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    receivedAmountKobo?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoodsReceiptAvgOrderByAggregateInput = {
    receivedAmountKobo?: Prisma.SortOrder;
};
export type GoodsReceiptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    receivedAmountKobo?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoodsReceiptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    receivedAmountKobo?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoodsReceiptSumOrderByAggregateInput = {
    receivedAmountKobo?: Prisma.SortOrder;
};
export type GoodsReceiptCreateNestedManyWithoutReceivedByInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput> | Prisma.GoodsReceiptCreateWithoutReceivedByInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput | Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput[];
    createMany?: Prisma.GoodsReceiptCreateManyReceivedByInputEnvelope;
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
};
export type GoodsReceiptUncheckedCreateNestedManyWithoutReceivedByInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput> | Prisma.GoodsReceiptCreateWithoutReceivedByInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput | Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput[];
    createMany?: Prisma.GoodsReceiptCreateManyReceivedByInputEnvelope;
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
};
export type GoodsReceiptUpdateManyWithoutReceivedByNestedInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput> | Prisma.GoodsReceiptCreateWithoutReceivedByInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput | Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput[];
    upsert?: Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutReceivedByInput | Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutReceivedByInput[];
    createMany?: Prisma.GoodsReceiptCreateManyReceivedByInputEnvelope;
    set?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    disconnect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    delete?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    update?: Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutReceivedByInput | Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutReceivedByInput[];
    updateMany?: Prisma.GoodsReceiptUpdateManyWithWhereWithoutReceivedByInput | Prisma.GoodsReceiptUpdateManyWithWhereWithoutReceivedByInput[];
    deleteMany?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
};
export type GoodsReceiptUncheckedUpdateManyWithoutReceivedByNestedInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput> | Prisma.GoodsReceiptCreateWithoutReceivedByInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput | Prisma.GoodsReceiptCreateOrConnectWithoutReceivedByInput[];
    upsert?: Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutReceivedByInput | Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutReceivedByInput[];
    createMany?: Prisma.GoodsReceiptCreateManyReceivedByInputEnvelope;
    set?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    disconnect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    delete?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    update?: Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutReceivedByInput | Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutReceivedByInput[];
    updateMany?: Prisma.GoodsReceiptUpdateManyWithWhereWithoutReceivedByInput | Prisma.GoodsReceiptUpdateManyWithWhereWithoutReceivedByInput[];
    deleteMany?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
};
export type GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput> | Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput | Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.GoodsReceiptCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
};
export type GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput> | Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput | Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.GoodsReceiptCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
};
export type GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput> | Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput | Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.GoodsReceiptCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    disconnect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    delete?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    update?: Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.GoodsReceiptUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
};
export type GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput> | Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput[] | Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput | Prisma.GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.GoodsReceiptCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    disconnect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    delete?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    connect?: Prisma.GoodsReceiptWhereUniqueInput | Prisma.GoodsReceiptWhereUniqueInput[];
    update?: Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.GoodsReceiptUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.GoodsReceiptUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
};
export type GoodsReceiptCreateWithoutReceivedByInput = {
    id?: string;
    receivedAmountKobo: bigint | number;
    notes?: string | null;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutGoodsReceiptsInput;
};
export type GoodsReceiptUncheckedCreateWithoutReceivedByInput = {
    id?: string;
    purchaseOrderId: string;
    receivedAmountKobo: bigint | number;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptCreateOrConnectWithoutReceivedByInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput>;
};
export type GoodsReceiptCreateManyReceivedByInputEnvelope = {
    data: Prisma.GoodsReceiptCreateManyReceivedByInput | Prisma.GoodsReceiptCreateManyReceivedByInput[];
    skipDuplicates?: boolean;
};
export type GoodsReceiptUpsertWithWhereUniqueWithoutReceivedByInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoodsReceiptUpdateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedUpdateWithoutReceivedByInput>;
    create: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedCreateWithoutReceivedByInput>;
};
export type GoodsReceiptUpdateWithWhereUniqueWithoutReceivedByInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateWithoutReceivedByInput, Prisma.GoodsReceiptUncheckedUpdateWithoutReceivedByInput>;
};
export type GoodsReceiptUpdateManyWithWhereWithoutReceivedByInput = {
    where: Prisma.GoodsReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateManyMutationInput, Prisma.GoodsReceiptUncheckedUpdateManyWithoutReceivedByInput>;
};
export type GoodsReceiptScalarWhereInput = {
    AND?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
    OR?: Prisma.GoodsReceiptScalarWhereInput[];
    NOT?: Prisma.GoodsReceiptScalarWhereInput | Prisma.GoodsReceiptScalarWhereInput[];
    id?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    receivedAmountKobo?: Prisma.BigIntFilter<"GoodsReceipt"> | bigint | number;
    receivedByUserId?: Prisma.UuidFilter<"GoodsReceipt"> | string;
    notes?: Prisma.StringNullableFilter<"GoodsReceipt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoodsReceipt"> | Date | string;
};
export type GoodsReceiptCreateWithoutPurchaseOrderInput = {
    id?: string;
    receivedAmountKobo: bigint | number;
    notes?: string | null;
    createdAt?: Date | string;
    receivedBy: Prisma.AppUserCreateNestedOneWithoutGoodsReceiptsRecordedInput;
};
export type GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    receivedAmountKobo: bigint | number;
    receivedByUserId: string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput>;
};
export type GoodsReceiptCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.GoodsReceiptCreateManyPurchaseOrderInput | Prisma.GoodsReceiptCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type GoodsReceiptUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoodsReceiptUpdateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.GoodsReceiptCreateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedCreateWithoutPurchaseOrderInput>;
};
export type GoodsReceiptUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.GoodsReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateWithoutPurchaseOrderInput, Prisma.GoodsReceiptUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type GoodsReceiptUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.GoodsReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateManyMutationInput, Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type GoodsReceiptCreateManyReceivedByInput = {
    id?: string;
    purchaseOrderId: string;
    receivedAmountKobo: bigint | number;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptUpdateWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutGoodsReceiptsNestedInput;
};
export type GoodsReceiptUncheckedUpdateWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptUncheckedUpdateManyWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptCreateManyPurchaseOrderInput = {
    id?: string;
    receivedAmountKobo: bigint | number;
    receivedByUserId: string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type GoodsReceiptUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receivedBy?: Prisma.AppUserUpdateOneRequiredWithoutGoodsReceiptsRecordedNestedInput;
};
export type GoodsReceiptUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    receivedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    receivedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodsReceiptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    receivedAmountKobo?: boolean;
    receivedByUserId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goodsReceipt"]>;
export type GoodsReceiptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    receivedAmountKobo?: boolean;
    receivedByUserId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goodsReceipt"]>;
export type GoodsReceiptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    receivedAmountKobo?: boolean;
    receivedByUserId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goodsReceipt"]>;
export type GoodsReceiptSelectScalar = {
    id?: boolean;
    purchaseOrderId?: boolean;
    receivedAmountKobo?: boolean;
    receivedByUserId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type GoodsReceiptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseOrderId" | "receivedAmountKobo" | "receivedByUserId" | "notes" | "createdAt", ExtArgs["result"]["goodsReceipt"]>;
export type GoodsReceiptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type GoodsReceiptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type GoodsReceiptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $GoodsReceiptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GoodsReceipt";
    objects: {
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>;
        receivedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purchaseOrderId: string;
        receivedAmountKobo: bigint;
        receivedByUserId: string;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["goodsReceipt"]>;
    composites: {};
};
export type GoodsReceiptGetPayload<S extends boolean | null | undefined | GoodsReceiptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload, S>;
export type GoodsReceiptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GoodsReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoodsReceiptCountAggregateInputType | true;
};
export interface GoodsReceiptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GoodsReceipt'];
        meta: {
            name: 'GoodsReceipt';
        };
    };
    findUnique<T extends GoodsReceiptFindUniqueArgs>(args: Prisma.SelectSubset<T, GoodsReceiptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GoodsReceiptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GoodsReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GoodsReceiptFindFirstArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptFindFirstArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GoodsReceiptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GoodsReceiptFindManyArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GoodsReceiptCreateArgs>(args: Prisma.SelectSubset<T, GoodsReceiptCreateArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GoodsReceiptCreateManyArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GoodsReceiptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GoodsReceiptDeleteArgs>(args: Prisma.SelectSubset<T, GoodsReceiptDeleteArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GoodsReceiptUpdateArgs>(args: Prisma.SelectSubset<T, GoodsReceiptUpdateArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GoodsReceiptDeleteManyArgs>(args?: Prisma.SelectSubset<T, GoodsReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GoodsReceiptUpdateManyArgs>(args: Prisma.SelectSubset<T, GoodsReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GoodsReceiptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GoodsReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GoodsReceiptUpsertArgs>(args: Prisma.SelectSubset<T, GoodsReceiptUpsertArgs<ExtArgs>>): Prisma.Prisma__GoodsReceiptClient<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GoodsReceiptCountArgs>(args?: Prisma.Subset<T, GoodsReceiptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GoodsReceiptCountAggregateOutputType> : number>;
    aggregate<T extends GoodsReceiptAggregateArgs>(args: Prisma.Subset<T, GoodsReceiptAggregateArgs>): Prisma.PrismaPromise<GetGoodsReceiptAggregateType<T>>;
    groupBy<T extends GoodsReceiptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GoodsReceiptGroupByArgs['orderBy'];
    } : {
        orderBy?: GoodsReceiptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GoodsReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodsReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GoodsReceiptFieldRefs;
}
export interface Prisma__GoodsReceiptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseOrder<T extends Prisma.PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receivedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GoodsReceiptFieldRefs {
    readonly id: Prisma.FieldRef<"GoodsReceipt", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"GoodsReceipt", 'String'>;
    readonly receivedAmountKobo: Prisma.FieldRef<"GoodsReceipt", 'BigInt'>;
    readonly receivedByUserId: Prisma.FieldRef<"GoodsReceipt", 'String'>;
    readonly notes: Prisma.FieldRef<"GoodsReceipt", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GoodsReceipt", 'DateTime'>;
}
export type GoodsReceiptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where: Prisma.GoodsReceiptWhereUniqueInput;
};
export type GoodsReceiptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where: Prisma.GoodsReceiptWhereUniqueInput;
};
export type GoodsReceiptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where?: Prisma.GoodsReceiptWhereInput;
    orderBy?: Prisma.GoodsReceiptOrderByWithRelationInput | Prisma.GoodsReceiptOrderByWithRelationInput[];
    cursor?: Prisma.GoodsReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodsReceiptScalarFieldEnum | Prisma.GoodsReceiptScalarFieldEnum[];
};
export type GoodsReceiptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where?: Prisma.GoodsReceiptWhereInput;
    orderBy?: Prisma.GoodsReceiptOrderByWithRelationInput | Prisma.GoodsReceiptOrderByWithRelationInput[];
    cursor?: Prisma.GoodsReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodsReceiptScalarFieldEnum | Prisma.GoodsReceiptScalarFieldEnum[];
};
export type GoodsReceiptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where?: Prisma.GoodsReceiptWhereInput;
    orderBy?: Prisma.GoodsReceiptOrderByWithRelationInput | Prisma.GoodsReceiptOrderByWithRelationInput[];
    cursor?: Prisma.GoodsReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodsReceiptScalarFieldEnum | Prisma.GoodsReceiptScalarFieldEnum[];
};
export type GoodsReceiptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodsReceiptCreateInput, Prisma.GoodsReceiptUncheckedCreateInput>;
};
export type GoodsReceiptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GoodsReceiptCreateManyInput | Prisma.GoodsReceiptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GoodsReceiptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    data: Prisma.GoodsReceiptCreateManyInput | Prisma.GoodsReceiptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GoodsReceiptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GoodsReceiptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateInput, Prisma.GoodsReceiptUncheckedUpdateInput>;
    where: Prisma.GoodsReceiptWhereUniqueInput;
};
export type GoodsReceiptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateManyMutationInput, Prisma.GoodsReceiptUncheckedUpdateManyInput>;
    where?: Prisma.GoodsReceiptWhereInput;
    limit?: number;
};
export type GoodsReceiptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodsReceiptUpdateManyMutationInput, Prisma.GoodsReceiptUncheckedUpdateManyInput>;
    where?: Prisma.GoodsReceiptWhereInput;
    limit?: number;
    include?: Prisma.GoodsReceiptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GoodsReceiptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where: Prisma.GoodsReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoodsReceiptCreateInput, Prisma.GoodsReceiptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GoodsReceiptUpdateInput, Prisma.GoodsReceiptUncheckedUpdateInput>;
};
export type GoodsReceiptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
    where: Prisma.GoodsReceiptWhereUniqueInput;
};
export type GoodsReceiptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodsReceiptWhereInput;
    limit?: number;
};
export type GoodsReceiptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodsReceiptSelect<ExtArgs> | null;
    omit?: Prisma.GoodsReceiptOmit<ExtArgs> | null;
    include?: Prisma.GoodsReceiptInclude<ExtArgs> | null;
};
