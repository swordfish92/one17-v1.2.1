import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VendorModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorPayload>;
export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type VendorAvgAggregateOutputType = {
    performanceRating: runtime.Decimal | null;
};
export type VendorSumAggregateOutputType = {
    performanceRating: runtime.Decimal | null;
};
export type VendorMinAggregateOutputType = {
    id: string | null;
    vendorCode: string | null;
    legalName: string | null;
    rcNumber: string | null;
    tin: string | null;
    bankName: string | null;
    bankAccountNumber: string | null;
    bankAccountName: string | null;
    status: $Enums.VendorStatus | null;
    performanceRating: runtime.Decimal | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type VendorMaxAggregateOutputType = {
    id: string | null;
    vendorCode: string | null;
    legalName: string | null;
    rcNumber: string | null;
    tin: string | null;
    bankName: string | null;
    bankAccountNumber: string | null;
    bankAccountName: string | null;
    status: $Enums.VendorStatus | null;
    performanceRating: runtime.Decimal | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type VendorCountAggregateOutputType = {
    id: number;
    vendorCode: number;
    legalName: number;
    rcNumber: number;
    tin: number;
    bankName: number;
    bankAccountNumber: number;
    bankAccountName: number;
    status: number;
    performanceRating: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type VendorAvgAggregateInputType = {
    performanceRating?: true;
};
export type VendorSumAggregateInputType = {
    performanceRating?: true;
};
export type VendorMinAggregateInputType = {
    id?: true;
    vendorCode?: true;
    legalName?: true;
    rcNumber?: true;
    tin?: true;
    bankName?: true;
    bankAccountNumber?: true;
    bankAccountName?: true;
    status?: true;
    performanceRating?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type VendorMaxAggregateInputType = {
    id?: true;
    vendorCode?: true;
    legalName?: true;
    rcNumber?: true;
    tin?: true;
    bankName?: true;
    bankAccountNumber?: true;
    bankAccountName?: true;
    status?: true;
    performanceRating?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type VendorCountAggregateInputType = {
    id?: true;
    vendorCode?: true;
    legalName?: true;
    rcNumber?: true;
    tin?: true;
    bankName?: true;
    bankAccountNumber?: true;
    bankAccountName?: true;
    status?: true;
    performanceRating?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type VendorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorCountAggregateInputType;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendor[P]> : Prisma.GetScalarType<T[P], AggregateVendor[P]>;
};
export type VendorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithAggregationInput | Prisma.VendorOrderByWithAggregationInput[];
    by: Prisma.VendorScalarFieldEnum[] | Prisma.VendorScalarFieldEnum;
    having?: Prisma.VendorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorCountAggregateInputType | true;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type VendorGroupByOutputType = {
    id: string;
    vendorCode: string;
    legalName: string;
    rcNumber: string | null;
    tin: string | null;
    bankName: string | null;
    bankAccountNumber: string | null;
    bankAccountName: string | null;
    status: $Enums.VendorStatus;
    performanceRating: runtime.Decimal | null;
    createdByUserId: string;
    createdAt: Date;
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]>;
}>>;
export type VendorWhereInput = {
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    id?: Prisma.UuidFilter<"Vendor"> | string;
    vendorCode?: Prisma.StringFilter<"Vendor"> | string;
    legalName?: Prisma.StringFilter<"Vendor"> | string;
    rcNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    tin?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus;
    performanceRating?: Prisma.DecimalNullableFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.UuidFilter<"Vendor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    purchaseOrders?: Prisma.PurchaseOrderListRelationFilter;
    vendorInvoices?: Prisma.VendorInvoiceListRelationFilter;
};
export type VendorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vendorCode?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    tin?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankName?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankAccountNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankAccountName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    performanceRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    purchaseOrders?: Prisma.PurchaseOrderOrderByRelationAggregateInput;
    vendorInvoices?: Prisma.VendorInvoiceOrderByRelationAggregateInput;
};
export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    vendorCode?: string;
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    legalName?: Prisma.StringFilter<"Vendor"> | string;
    rcNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    tin?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus;
    performanceRating?: Prisma.DecimalNullableFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.UuidFilter<"Vendor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    purchaseOrders?: Prisma.PurchaseOrderListRelationFilter;
    vendorInvoices?: Prisma.VendorInvoiceListRelationFilter;
}, "id" | "vendorCode">;
export type VendorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vendorCode?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    tin?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankName?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankAccountNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankAccountName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    performanceRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VendorCountOrderByAggregateInput;
    _avg?: Prisma.VendorAvgOrderByAggregateInput;
    _max?: Prisma.VendorMaxOrderByAggregateInput;
    _min?: Prisma.VendorMinOrderByAggregateInput;
    _sum?: Prisma.VendorSumOrderByAggregateInput;
};
export type VendorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Vendor"> | string;
    vendorCode?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    legalName?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    rcNumber?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    tin?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    bankName?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    bankAccountNumber?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    bankAccountName?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusWithAggregatesFilter<"Vendor"> | $Enums.VendorStatus;
    performanceRating?: Prisma.DecimalNullableWithAggregatesFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"Vendor"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vendor"> | Date | string;
};
export type VendorCreateInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorsCreatedInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutVendorInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutVendorInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorsCreatedNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutVendorNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutVendorNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateManyInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorListRelationFilter = {
    every?: Prisma.VendorWhereInput;
    some?: Prisma.VendorWhereInput;
    none?: Prisma.VendorWhereInput;
};
export type VendorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VendorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorCode?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    tin?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    bankAccountNumber?: Prisma.SortOrder;
    bankAccountName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    performanceRating?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorAvgOrderByAggregateInput = {
    performanceRating?: Prisma.SortOrder;
};
export type VendorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorCode?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    tin?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    bankAccountNumber?: Prisma.SortOrder;
    bankAccountName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    performanceRating?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorCode?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    tin?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    bankAccountNumber?: Prisma.SortOrder;
    bankAccountName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    performanceRating?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorSumOrderByAggregateInput = {
    performanceRating?: Prisma.SortOrder;
};
export type VendorScalarRelationFilter = {
    is?: Prisma.VendorWhereInput;
    isNot?: Prisma.VendorWhereInput;
};
export type VendorCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput> | Prisma.VendorCreateWithoutCreatedByInput[] | Prisma.VendorUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCreatedByInput | Prisma.VendorCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.VendorCreateManyCreatedByInputEnvelope;
    connect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
};
export type VendorUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput> | Prisma.VendorCreateWithoutCreatedByInput[] | Prisma.VendorUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCreatedByInput | Prisma.VendorCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.VendorCreateManyCreatedByInputEnvelope;
    connect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
};
export type VendorUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput> | Prisma.VendorCreateWithoutCreatedByInput[] | Prisma.VendorUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCreatedByInput | Prisma.VendorCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.VendorUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.VendorUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.VendorCreateManyCreatedByInputEnvelope;
    set?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    disconnect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    delete?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    connect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    update?: Prisma.VendorUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.VendorUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.VendorUpdateManyWithWhereWithoutCreatedByInput | Prisma.VendorUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.VendorScalarWhereInput | Prisma.VendorScalarWhereInput[];
};
export type VendorUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput> | Prisma.VendorCreateWithoutCreatedByInput[] | Prisma.VendorUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCreatedByInput | Prisma.VendorCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.VendorUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.VendorUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.VendorCreateManyCreatedByInputEnvelope;
    set?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    disconnect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    delete?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    connect?: Prisma.VendorWhereUniqueInput | Prisma.VendorWhereUniqueInput[];
    update?: Prisma.VendorUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.VendorUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.VendorUpdateManyWithWhereWithoutCreatedByInput | Prisma.VendorUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.VendorScalarWhereInput | Prisma.VendorScalarWhereInput[];
};
export type EnumVendorStatusFieldUpdateOperationsInput = {
    set?: $Enums.VendorStatus;
};
export type VendorCreateNestedOneWithoutPurchaseOrdersInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedCreateWithoutPurchaseOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutPurchaseOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedCreateWithoutPurchaseOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutPurchaseOrdersInput;
    upsert?: Prisma.VendorUpsertWithoutPurchaseOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutPurchaseOrdersInput, Prisma.VendorUpdateWithoutPurchaseOrdersInput>, Prisma.VendorUncheckedUpdateWithoutPurchaseOrdersInput>;
};
export type VendorCreateNestedOneWithoutVendorInvoicesInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutVendorInvoicesInput, Prisma.VendorUncheckedCreateWithoutVendorInvoicesInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutVendorInvoicesInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutVendorInvoicesInput, Prisma.VendorUncheckedCreateWithoutVendorInvoicesInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutVendorInvoicesInput;
    upsert?: Prisma.VendorUpsertWithoutVendorInvoicesInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutVendorInvoicesInput, Prisma.VendorUpdateWithoutVendorInvoicesInput>, Prisma.VendorUncheckedUpdateWithoutVendorInvoicesInput>;
};
export type VendorCreateWithoutCreatedByInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutVendorInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutVendorInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput>;
};
export type VendorCreateManyCreatedByInputEnvelope = {
    data: Prisma.VendorCreateManyCreatedByInput | Prisma.VendorCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type VendorUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.VendorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorUpdateWithoutCreatedByInput, Prisma.VendorUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutCreatedByInput, Prisma.VendorUncheckedCreateWithoutCreatedByInput>;
};
export type VendorUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.VendorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutCreatedByInput, Prisma.VendorUncheckedUpdateWithoutCreatedByInput>;
};
export type VendorUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.VendorScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyWithoutCreatedByInput>;
};
export type VendorScalarWhereInput = {
    AND?: Prisma.VendorScalarWhereInput | Prisma.VendorScalarWhereInput[];
    OR?: Prisma.VendorScalarWhereInput[];
    NOT?: Prisma.VendorScalarWhereInput | Prisma.VendorScalarWhereInput[];
    id?: Prisma.UuidFilter<"Vendor"> | string;
    vendorCode?: Prisma.StringFilter<"Vendor"> | string;
    legalName?: Prisma.StringFilter<"Vendor"> | string;
    rcNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    tin?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountNumber?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bankAccountName?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus;
    performanceRating?: Prisma.DecimalNullableFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.UuidFilter<"Vendor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
};
export type VendorCreateWithoutPurchaseOrdersInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorsCreatedInput;
    vendorInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutPurchaseOrdersInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutPurchaseOrdersInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedCreateWithoutPurchaseOrdersInput>;
};
export type VendorUpsertWithoutPurchaseOrdersInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedUpdateWithoutPurchaseOrdersInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedCreateWithoutPurchaseOrdersInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutPurchaseOrdersInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutPurchaseOrdersInput, Prisma.VendorUncheckedUpdateWithoutPurchaseOrdersInput>;
};
export type VendorUpdateWithoutPurchaseOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorsCreatedNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutPurchaseOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutVendorInvoicesInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorsCreatedInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutVendorInvoicesInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutVendorInvoicesInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutVendorInvoicesInput, Prisma.VendorUncheckedCreateWithoutVendorInvoicesInput>;
};
export type VendorUpsertWithoutVendorInvoicesInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutVendorInvoicesInput, Prisma.VendorUncheckedUpdateWithoutVendorInvoicesInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutVendorInvoicesInput, Prisma.VendorUncheckedCreateWithoutVendorInvoicesInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutVendorInvoicesInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutVendorInvoicesInput, Prisma.VendorUncheckedUpdateWithoutVendorInvoicesInput>;
};
export type VendorUpdateWithoutVendorInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorsCreatedNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutVendorInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateManyCreatedByInput = {
    id?: string;
    vendorCode: string;
    legalName: string;
    rcNumber?: string | null;
    tin?: string | null;
    bankName?: string | null;
    bankAccountNumber?: string | null;
    bankAccountName?: string | null;
    status?: $Enums.VendorStatus;
    performanceRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type VendorUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutVendorNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutVendorNestedInput;
    vendorInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    rcNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankAccountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    performanceRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorCountOutputType = {
    purchaseOrders: number;
    vendorInvoices: number;
};
export type VendorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrders?: boolean | VendorCountOutputTypeCountPurchaseOrdersArgs;
    vendorInvoices?: boolean | VendorCountOutputTypeCountVendorInvoicesArgs;
};
export type VendorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorCountOutputTypeSelect<ExtArgs> | null;
};
export type VendorCountOutputTypeCountPurchaseOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
};
export type VendorCountOutputTypeCountVendorInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
};
export type VendorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorCode?: boolean;
    legalName?: boolean;
    rcNumber?: boolean;
    tin?: boolean;
    bankName?: boolean;
    bankAccountNumber?: boolean;
    bankAccountName?: boolean;
    status?: boolean;
    performanceRating?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    purchaseOrders?: boolean | Prisma.Vendor$purchaseOrdersArgs<ExtArgs>;
    vendorInvoices?: boolean | Prisma.Vendor$vendorInvoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorCode?: boolean;
    legalName?: boolean;
    rcNumber?: boolean;
    tin?: boolean;
    bankName?: boolean;
    bankAccountNumber?: boolean;
    bankAccountName?: boolean;
    status?: boolean;
    performanceRating?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorCode?: boolean;
    legalName?: boolean;
    rcNumber?: boolean;
    tin?: boolean;
    bankName?: boolean;
    bankAccountNumber?: boolean;
    bankAccountName?: boolean;
    status?: boolean;
    performanceRating?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectScalar = {
    id?: boolean;
    vendorCode?: boolean;
    legalName?: boolean;
    rcNumber?: boolean;
    tin?: boolean;
    bankName?: boolean;
    bankAccountNumber?: boolean;
    bankAccountName?: boolean;
    status?: boolean;
    performanceRating?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type VendorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vendorCode" | "legalName" | "rcNumber" | "tin" | "bankName" | "bankAccountNumber" | "bankAccountName" | "status" | "performanceRating" | "createdByUserId" | "createdAt", ExtArgs["result"]["vendor"]>;
export type VendorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    purchaseOrders?: boolean | Prisma.Vendor$purchaseOrdersArgs<ExtArgs>;
    vendorInvoices?: boolean | Prisma.Vendor$vendorInvoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VendorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type VendorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $VendorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vendor";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        purchaseOrders: Prisma.$PurchaseOrderPayload<ExtArgs>[];
        vendorInvoices: Prisma.$VendorInvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vendorCode: string;
        legalName: string;
        rcNumber: string | null;
        tin: string | null;
        bankName: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
        status: $Enums.VendorStatus;
        performanceRating: runtime.Decimal | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["vendor"]>;
    composites: {};
};
export type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorPayload, S>;
export type VendorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorCountAggregateInputType | true;
};
export interface VendorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vendor'];
        meta: {
            name: 'Vendor';
        };
    };
    findUnique<T extends VendorFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorFindManyArgs>(args?: Prisma.SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorCreateArgs>(args: Prisma.SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorDeleteArgs>(args: Prisma.SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorUpdateArgs>(args: Prisma.SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorUpsertArgs>(args: Prisma.SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorCountArgs>(args?: Prisma.Subset<T, VendorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorCountAggregateOutputType> : number>;
    aggregate<T extends VendorAggregateArgs>(args: Prisma.Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>;
    groupBy<T extends VendorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorFieldRefs;
}
export interface Prisma__VendorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchaseOrders<T extends Prisma.Vendor$purchaseOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$purchaseOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vendorInvoices<T extends Prisma.Vendor$vendorInvoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$vendorInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorFieldRefs {
    readonly id: Prisma.FieldRef<"Vendor", 'String'>;
    readonly vendorCode: Prisma.FieldRef<"Vendor", 'String'>;
    readonly legalName: Prisma.FieldRef<"Vendor", 'String'>;
    readonly rcNumber: Prisma.FieldRef<"Vendor", 'String'>;
    readonly tin: Prisma.FieldRef<"Vendor", 'String'>;
    readonly bankName: Prisma.FieldRef<"Vendor", 'String'>;
    readonly bankAccountNumber: Prisma.FieldRef<"Vendor", 'String'>;
    readonly bankAccountName: Prisma.FieldRef<"Vendor", 'String'>;
    readonly status: Prisma.FieldRef<"Vendor", 'VendorStatus'>;
    readonly performanceRating: Prisma.FieldRef<"Vendor", 'Decimal'>;
    readonly createdByUserId: Prisma.FieldRef<"Vendor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Vendor", 'DateTime'>;
}
export type VendorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
};
export type VendorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type VendorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
    include?: Prisma.VendorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
};
export type VendorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type Vendor$purchaseOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Vendor$vendorInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
};
