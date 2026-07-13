import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PurchaseOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseOrderPayload>;
export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null;
    _avg: PurchaseOrderAvgAggregateOutputType | null;
    _sum: PurchaseOrderSumAggregateOutputType | null;
    _min: PurchaseOrderMinAggregateOutputType | null;
    _max: PurchaseOrderMaxAggregateOutputType | null;
};
export type PurchaseOrderAvgAggregateOutputType = {
    totalAmountKobo: number | null;
};
export type PurchaseOrderSumAggregateOutputType = {
    totalAmountKobo: bigint | null;
};
export type PurchaseOrderMinAggregateOutputType = {
    id: string | null;
    poNumber: string | null;
    vendorId: string | null;
    encumbranceId: string | null;
    ledgerEntityCode: string | null;
    description: string | null;
    totalAmountKobo: bigint | null;
    status: $Enums.PurchaseOrderStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    issuedAt: Date | null;
};
export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null;
    poNumber: string | null;
    vendorId: string | null;
    encumbranceId: string | null;
    ledgerEntityCode: string | null;
    description: string | null;
    totalAmountKobo: bigint | null;
    status: $Enums.PurchaseOrderStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    issuedAt: Date | null;
};
export type PurchaseOrderCountAggregateOutputType = {
    id: number;
    poNumber: number;
    vendorId: number;
    encumbranceId: number;
    ledgerEntityCode: number;
    description: number;
    totalAmountKobo: number;
    status: number;
    createdByUserId: number;
    createdAt: number;
    issuedAt: number;
    _all: number;
};
export type PurchaseOrderAvgAggregateInputType = {
    totalAmountKobo?: true;
};
export type PurchaseOrderSumAggregateInputType = {
    totalAmountKobo?: true;
};
export type PurchaseOrderMinAggregateInputType = {
    id?: true;
    poNumber?: true;
    vendorId?: true;
    encumbranceId?: true;
    ledgerEntityCode?: true;
    description?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    issuedAt?: true;
};
export type PurchaseOrderMaxAggregateInputType = {
    id?: true;
    poNumber?: true;
    vendorId?: true;
    encumbranceId?: true;
    ledgerEntityCode?: true;
    description?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    issuedAt?: true;
};
export type PurchaseOrderCountAggregateInputType = {
    id?: true;
    poNumber?: true;
    vendorId?: true;
    encumbranceId?: true;
    ledgerEntityCode?: true;
    description?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    issuedAt?: true;
    _all?: true;
};
export type PurchaseOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseOrderCountAggregateInputType;
    _avg?: PurchaseOrderAvgAggregateInputType;
    _sum?: PurchaseOrderSumAggregateInputType;
    _min?: PurchaseOrderMinAggregateInputType;
    _max?: PurchaseOrderMaxAggregateInputType;
};
export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]> : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]>;
};
export type PurchaseOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithAggregationInput | Prisma.PurchaseOrderOrderByWithAggregationInput[];
    by: Prisma.PurchaseOrderScalarFieldEnum[] | Prisma.PurchaseOrderScalarFieldEnum;
    having?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseOrderCountAggregateInputType | true;
    _avg?: PurchaseOrderAvgAggregateInputType;
    _sum?: PurchaseOrderSumAggregateInputType;
    _min?: PurchaseOrderMinAggregateInputType;
    _max?: PurchaseOrderMaxAggregateInputType;
};
export type PurchaseOrderGroupByOutputType = {
    id: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint;
    status: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt: Date;
    issuedAt: Date | null;
    _count: PurchaseOrderCountAggregateOutputType | null;
    _avg: PurchaseOrderAvgAggregateOutputType | null;
    _sum: PurchaseOrderSumAggregateOutputType | null;
    _min: PurchaseOrderMinAggregateOutputType | null;
    _max: PurchaseOrderMaxAggregateOutputType | null;
};
export type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>;
}>>;
export type PurchaseOrderWhereInput = {
    AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    OR?: Prisma.PurchaseOrderWhereInput[];
    NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    id?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string;
    vendorId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    encumbranceId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PurchaseOrder"> | string;
    description?: Prisma.StringFilter<"PurchaseOrder"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PurchaseOrder"> | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    issuedAt?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    encumbrance?: Prisma.XOR<Prisma.EncumbranceScalarRelationFilter, Prisma.EncumbranceWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.PurchaseOrderLineListRelationFilter;
    goodsReceipts?: Prisma.GoodsReceiptListRelationFilter;
    vendorInvoices?: Prisma.VendorInvoiceListRelationFilter;
    assetRegisterEntries?: Prisma.AssetRegisterEntryListRelationFilter;
};
export type PurchaseOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    encumbranceId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    vendor?: Prisma.VendorOrderByWithRelationInput;
    encumbrance?: Prisma.EncumbranceOrderByWithRelationInput;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    lines?: Prisma.PurchaseOrderLineOrderByRelationAggregateInput;
    goodsReceipts?: Prisma.GoodsReceiptOrderByRelationAggregateInput;
    vendorInvoices?: Prisma.VendorInvoiceOrderByRelationAggregateInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryOrderByRelationAggregateInput;
};
export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    poNumber?: string;
    encumbranceId?: string;
    AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    OR?: Prisma.PurchaseOrderWhereInput[];
    NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    vendorId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PurchaseOrder"> | string;
    description?: Prisma.StringFilter<"PurchaseOrder"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PurchaseOrder"> | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    issuedAt?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    encumbrance?: Prisma.XOR<Prisma.EncumbranceScalarRelationFilter, Prisma.EncumbranceWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.PurchaseOrderLineListRelationFilter;
    goodsReceipts?: Prisma.GoodsReceiptListRelationFilter;
    vendorInvoices?: Prisma.VendorInvoiceListRelationFilter;
    assetRegisterEntries?: Prisma.AssetRegisterEntryListRelationFilter;
}, "id" | "poNumber" | "encumbranceId">;
export type PurchaseOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    encumbranceId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PurchaseOrderCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseOrderAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseOrderMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseOrderMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseOrderSumOrderByAggregateInput;
};
export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    vendorId?: Prisma.UuidWithAggregatesFilter<"PurchaseOrder"> | string;
    encumbranceId?: Prisma.UuidWithAggregatesFilter<"PurchaseOrder"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    description?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    totalAmountKobo?: Prisma.BigIntWithAggregatesFilter<"PurchaseOrder"> | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"PurchaseOrder"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string;
    issuedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PurchaseOrder"> | Date | string | null;
};
export type PurchaseOrderCreateInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateManyInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
};
export type PurchaseOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseOrderListRelationFilter = {
    every?: Prisma.PurchaseOrderWhereInput;
    some?: Prisma.PurchaseOrderWhereInput;
    none?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseOrderNullableScalarRelationFilter = {
    is?: Prisma.PurchaseOrderWhereInput | null;
    isNot?: Prisma.PurchaseOrderWhereInput | null;
};
export type PurchaseOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    encumbranceId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type PurchaseOrderAvgOrderByAggregateInput = {
    totalAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    encumbranceId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type PurchaseOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    encumbranceId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type PurchaseOrderSumOrderByAggregateInput = {
    totalAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderScalarRelationFilter = {
    is?: Prisma.PurchaseOrderWhereInput;
    isNot?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput> | Prisma.PurchaseOrderCreateWithoutCreatedByInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput> | Prisma.PurchaseOrderCreateWithoutCreatedByInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput> | Prisma.PurchaseOrderCreateWithoutCreatedByInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatedByInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatedByInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput> | Prisma.PurchaseOrderCreateWithoutCreatedByInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatedByInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatedByInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput> | Prisma.PurchaseOrderCreateWithoutLedgerEntityInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput | Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PurchaseOrderCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput> | Prisma.PurchaseOrderCreateWithoutLedgerEntityInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput | Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PurchaseOrderCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput> | Prisma.PurchaseOrderCreateWithoutLedgerEntityInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput | Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PurchaseOrderCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput> | Prisma.PurchaseOrderCreateWithoutLedgerEntityInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput | Prisma.PurchaseOrderCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PurchaseOrderCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderCreateNestedOneWithoutEncumbranceInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutEncumbranceInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUncheckedCreateNestedOneWithoutEncumbranceInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutEncumbranceInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneWithoutEncumbranceNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutEncumbranceInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutEncumbranceInput;
    disconnect?: Prisma.PurchaseOrderWhereInput | boolean;
    delete?: Prisma.PurchaseOrderWhereInput | boolean;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutEncumbranceInput, Prisma.PurchaseOrderUpdateWithoutEncumbranceInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutEncumbranceInput>;
};
export type PurchaseOrderUncheckedUpdateOneWithoutEncumbranceNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutEncumbranceInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutEncumbranceInput;
    disconnect?: Prisma.PurchaseOrderWhereInput | boolean;
    delete?: Prisma.PurchaseOrderWhereInput | boolean;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutEncumbranceInput, Prisma.PurchaseOrderUpdateWithoutEncumbranceInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutEncumbranceInput>;
};
export type PurchaseOrderCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type EnumPurchaseOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseOrderStatus;
};
export type PurchaseOrderCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLinesInput, Prisma.PurchaseOrderUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLinesInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLinesInput, Prisma.PurchaseOrderUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutLinesInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutLinesInput, Prisma.PurchaseOrderUpdateWithoutLinesInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutLinesInput>;
};
export type PurchaseOrderCreateNestedOneWithoutGoodsReceiptsInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedCreateWithoutGoodsReceiptsInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutGoodsReceiptsInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneRequiredWithoutGoodsReceiptsNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedCreateWithoutGoodsReceiptsInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutGoodsReceiptsInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutGoodsReceiptsInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUpdateWithoutGoodsReceiptsInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutGoodsReceiptsInput>;
};
export type PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInvoicesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInvoicesInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInvoicesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInvoicesInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutVendorInvoicesInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutVendorInvoicesInput, Prisma.PurchaseOrderUpdateWithoutVendorInvoicesInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInvoicesInput>;
};
export type PurchaseOrderCreateNestedOneWithoutAssetRegisterEntriesInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedCreateWithoutAssetRegisterEntriesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutAssetRegisterEntriesInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneWithoutAssetRegisterEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedCreateWithoutAssetRegisterEntriesInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutAssetRegisterEntriesInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutAssetRegisterEntriesInput;
    disconnect?: Prisma.PurchaseOrderWhereInput | boolean;
    delete?: Prisma.PurchaseOrderWhereInput | boolean;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUpdateWithoutAssetRegisterEntriesInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutAssetRegisterEntriesInput>;
};
export type PurchaseOrderCreateWithoutCreatedByInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput>;
};
export type PurchaseOrderCreateManyCreatedByInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyCreatedByInput | Prisma.PurchaseOrderCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatedByInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutCreatedByInput, Prisma.PurchaseOrderUncheckedUpdateWithoutCreatedByInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PurchaseOrderScalarWhereInput = {
    AND?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
    OR?: Prisma.PurchaseOrderScalarWhereInput[];
    NOT?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
    id?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string;
    vendorId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    encumbranceId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PurchaseOrder"> | string;
    description?: Prisma.StringFilter<"PurchaseOrder"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PurchaseOrder"> | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.UuidFilter<"PurchaseOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    issuedAt?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
};
export type PurchaseOrderCreateWithoutLedgerEntityInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput>;
};
export type PurchaseOrderCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyLedgerEntityInput | Prisma.PurchaseOrderCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedCreateWithoutLedgerEntityInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutLedgerEntityInput, Prisma.PurchaseOrderUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PurchaseOrderCreateWithoutEncumbranceInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutEncumbranceInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutEncumbranceInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
};
export type PurchaseOrderUpsertWithoutEncumbranceInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedUpdateWithoutEncumbranceInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedCreateWithoutEncumbranceInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutEncumbranceInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutEncumbranceInput, Prisma.PurchaseOrderUncheckedUpdateWithoutEncumbranceInput>;
};
export type PurchaseOrderUpdateWithoutEncumbranceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutEncumbranceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateWithoutVendorInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutVendorInput = {
    id?: string;
    poNumber: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutVendorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput>;
};
export type PurchaseOrderCreateManyVendorInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyVendorInput | Prisma.PurchaseOrderCreateManyVendorInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutVendorInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutVendorInput>;
};
export type PurchaseOrderCreateWithoutLinesInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutLinesInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutLinesInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLinesInput, Prisma.PurchaseOrderUncheckedCreateWithoutLinesInput>;
};
export type PurchaseOrderUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutLinesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutLinesInput, Prisma.PurchaseOrderUncheckedCreateWithoutLinesInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutLinesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutLinesInput>;
};
export type PurchaseOrderUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateWithoutGoodsReceiptsInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutGoodsReceiptsInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutGoodsReceiptsInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedCreateWithoutGoodsReceiptsInput>;
};
export type PurchaseOrderUpsertWithoutGoodsReceiptsInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedUpdateWithoutGoodsReceiptsInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedCreateWithoutGoodsReceiptsInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutGoodsReceiptsInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutGoodsReceiptsInput, Prisma.PurchaseOrderUncheckedUpdateWithoutGoodsReceiptsInput>;
};
export type PurchaseOrderUpdateWithoutGoodsReceiptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutGoodsReceiptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateWithoutVendorInvoicesInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutVendorInvoicesInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutVendorInvoicesInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInvoicesInput>;
};
export type PurchaseOrderUpsertWithoutVendorInvoicesInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInvoicesInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInvoicesInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutVendorInvoicesInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInvoicesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInvoicesInput>;
};
export type PurchaseOrderUpdateWithoutVendorInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutVendorInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateWithoutAssetRegisterEntriesInput = {
    id?: string;
    poNumber: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput;
    encumbrance: Prisma.EncumbranceCreateNestedOneWithoutPurchaseOrderInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPurchaseOrdersInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPurchaseOrdersCreatedInput;
    lines?: Prisma.PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutAssetRegisterEntriesInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedCreateNestedManyWithoutPurchaseOrderInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutAssetRegisterEntriesInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedCreateWithoutAssetRegisterEntriesInput>;
};
export type PurchaseOrderUpsertWithoutAssetRegisterEntriesInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutAssetRegisterEntriesInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedCreateWithoutAssetRegisterEntriesInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutAssetRegisterEntriesInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutAssetRegisterEntriesInput, Prisma.PurchaseOrderUncheckedUpdateWithoutAssetRegisterEntriesInput>;
};
export type PurchaseOrderUpdateWithoutAssetRegisterEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutAssetRegisterEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateManyCreatedByInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
};
export type PurchaseOrderUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseOrderCreateManyLedgerEntityInput = {
    id?: string;
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
};
export type PurchaseOrderUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseOrderCreateManyVendorInput = {
    id?: string;
    poNumber: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PurchaseOrderStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    issuedAt?: Date | string | null;
};
export type PurchaseOrderUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    encumbrance?: Prisma.EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPurchaseOrdersCreatedNestedInput;
    lines?: Prisma.PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lines?: Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    goodsReceipts?: Prisma.GoodsReceiptUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
    assetRegisterEntries?: Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    encumbranceId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseOrderCountOutputType = {
    lines: number;
    goodsReceipts: number;
    vendorInvoices: number;
    assetRegisterEntries: number;
};
export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | PurchaseOrderCountOutputTypeCountLinesArgs;
    goodsReceipts?: boolean | PurchaseOrderCountOutputTypeCountGoodsReceiptsArgs;
    vendorInvoices?: boolean | PurchaseOrderCountOutputTypeCountVendorInvoicesArgs;
    assetRegisterEntries?: boolean | PurchaseOrderCountOutputTypeCountAssetRegisterEntriesArgs;
};
export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderCountOutputTypeSelect<ExtArgs> | null;
};
export type PurchaseOrderCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderLineWhereInput;
};
export type PurchaseOrderCountOutputTypeCountGoodsReceiptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodsReceiptWhereInput;
};
export type PurchaseOrderCountOutputTypeCountVendorInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
};
export type PurchaseOrderCountOutputTypeCountAssetRegisterEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRegisterEntryWhereInput;
};
export type PurchaseOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    vendorId?: boolean;
    encumbranceId?: boolean;
    ledgerEntityCode?: boolean;
    description?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    issuedAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PurchaseOrder$linesArgs<ExtArgs>;
    goodsReceipts?: boolean | Prisma.PurchaseOrder$goodsReceiptsArgs<ExtArgs>;
    vendorInvoices?: boolean | Prisma.PurchaseOrder$vendorInvoicesArgs<ExtArgs>;
    assetRegisterEntries?: boolean | Prisma.PurchaseOrder$assetRegisterEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    vendorId?: boolean;
    encumbranceId?: boolean;
    ledgerEntityCode?: boolean;
    description?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    issuedAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    vendorId?: boolean;
    encumbranceId?: boolean;
    ledgerEntityCode?: boolean;
    description?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    issuedAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectScalar = {
    id?: boolean;
    poNumber?: boolean;
    vendorId?: boolean;
    encumbranceId?: boolean;
    ledgerEntityCode?: boolean;
    description?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    issuedAt?: boolean;
};
export type PurchaseOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "poNumber" | "vendorId" | "encumbranceId" | "ledgerEntityCode" | "description" | "totalAmountKobo" | "status" | "createdByUserId" | "createdAt" | "issuedAt", ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PurchaseOrder$linesArgs<ExtArgs>;
    goodsReceipts?: boolean | Prisma.PurchaseOrder$goodsReceiptsArgs<ExtArgs>;
    vendorInvoices?: boolean | Prisma.PurchaseOrder$vendorInvoicesArgs<ExtArgs>;
    assetRegisterEntries?: boolean | Prisma.PurchaseOrder$assetRegisterEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    encumbrance?: boolean | Prisma.EncumbranceDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $PurchaseOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurchaseOrder";
    objects: {
        vendor: Prisma.$VendorPayload<ExtArgs>;
        encumbrance: Prisma.$EncumbrancePayload<ExtArgs>;
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        lines: Prisma.$PurchaseOrderLinePayload<ExtArgs>[];
        goodsReceipts: Prisma.$GoodsReceiptPayload<ExtArgs>[];
        vendorInvoices: Prisma.$VendorInvoicePayload<ExtArgs>[];
        assetRegisterEntries: Prisma.$AssetRegisterEntryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        poNumber: string;
        vendorId: string;
        encumbranceId: string;
        ledgerEntityCode: string;
        description: string;
        totalAmountKobo: bigint;
        status: $Enums.PurchaseOrderStatus;
        createdByUserId: string;
        createdAt: Date;
        issuedAt: Date | null;
    }, ExtArgs["result"]["purchaseOrder"]>;
    composites: {};
};
export type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload, S>;
export type PurchaseOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseOrderCountAggregateInputType | true;
};
export interface PurchaseOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'];
        meta: {
            name: 'PurchaseOrder';
        };
    };
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseOrderFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseOrderCreateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseOrderDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseOrderUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseOrderUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseOrderCountArgs>(args?: Prisma.Subset<T, PurchaseOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Prisma.Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>;
    groupBy<T extends PurchaseOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseOrderFieldRefs;
}
export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    encumbrance<T extends Prisma.EncumbranceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EncumbranceDefaultArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.PurchaseOrder$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    goodsReceipts<T extends Prisma.PurchaseOrder$goodsReceiptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$goodsReceiptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodsReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vendorInvoices<T extends Prisma.PurchaseOrder$vendorInvoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$vendorInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assetRegisterEntries<T extends Prisma.PurchaseOrder$assetRegisterEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$assetRegisterEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseOrderFieldRefs {
    readonly id: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly poNumber: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly vendorId: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly encumbranceId: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly description: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly totalAmountKobo: Prisma.FieldRef<"PurchaseOrder", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PurchaseOrder", 'PurchaseOrderStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
    readonly issuedAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
}
export type PurchaseOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>;
};
export type PurchaseOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
};
export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
    include?: Prisma.PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>;
};
export type PurchaseOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
};
export type PurchaseOrder$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithRelationInput | Prisma.PurchaseOrderLineOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderLineScalarFieldEnum | Prisma.PurchaseOrderLineScalarFieldEnum[];
};
export type PurchaseOrder$goodsReceiptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseOrder$vendorInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithRelationInput | Prisma.VendorInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.VendorInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorInvoiceScalarFieldEnum | Prisma.VendorInvoiceScalarFieldEnum[];
};
export type PurchaseOrder$assetRegisterEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithRelationInput | Prisma.AssetRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.AssetRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRegisterEntryScalarFieldEnum | Prisma.AssetRegisterEntryScalarFieldEnum[];
};
export type PurchaseOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
};
