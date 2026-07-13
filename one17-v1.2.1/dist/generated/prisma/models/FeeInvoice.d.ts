import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeeInvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$FeeInvoicePayload>;
export type AggregateFeeInvoice = {
    _count: FeeInvoiceCountAggregateOutputType | null;
    _avg: FeeInvoiceAvgAggregateOutputType | null;
    _sum: FeeInvoiceSumAggregateOutputType | null;
    _min: FeeInvoiceMinAggregateOutputType | null;
    _max: FeeInvoiceMaxAggregateOutputType | null;
};
export type FeeInvoiceAvgAggregateOutputType = {
    feeAmountKobo: number | null;
    vatKobo: number | null;
    totalKobo: number | null;
};
export type FeeInvoiceSumAggregateOutputType = {
    feeAmountKobo: bigint | null;
    vatKobo: bigint | null;
    totalKobo: bigint | null;
};
export type FeeInvoiceMinAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    counterpartyId: string | null;
    investorId: string | null;
    description: string | null;
    feeAmountKobo: bigint | null;
    vatKobo: bigint | null;
    vatRateVersionId: string | null;
    totalKobo: bigint | null;
    invoiceDate: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type FeeInvoiceMaxAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    counterpartyId: string | null;
    investorId: string | null;
    description: string | null;
    feeAmountKobo: bigint | null;
    vatKobo: bigint | null;
    vatRateVersionId: string | null;
    totalKobo: bigint | null;
    invoiceDate: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type FeeInvoiceCountAggregateOutputType = {
    id: number;
    invoiceNumber: number;
    counterpartyId: number;
    investorId: number;
    description: number;
    feeAmountKobo: number;
    vatKobo: number;
    vatRateVersionId: number;
    totalKobo: number;
    invoiceDate: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type FeeInvoiceAvgAggregateInputType = {
    feeAmountKobo?: true;
    vatKobo?: true;
    totalKobo?: true;
};
export type FeeInvoiceSumAggregateInputType = {
    feeAmountKobo?: true;
    vatKobo?: true;
    totalKobo?: true;
};
export type FeeInvoiceMinAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    counterpartyId?: true;
    investorId?: true;
    description?: true;
    feeAmountKobo?: true;
    vatKobo?: true;
    vatRateVersionId?: true;
    totalKobo?: true;
    invoiceDate?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type FeeInvoiceMaxAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    counterpartyId?: true;
    investorId?: true;
    description?: true;
    feeAmountKobo?: true;
    vatKobo?: true;
    vatRateVersionId?: true;
    totalKobo?: true;
    invoiceDate?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type FeeInvoiceCountAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    counterpartyId?: true;
    investorId?: true;
    description?: true;
    feeAmountKobo?: true;
    vatKobo?: true;
    vatRateVersionId?: true;
    totalKobo?: true;
    invoiceDate?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type FeeInvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithRelationInput | Prisma.FeeInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.FeeInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeeInvoiceCountAggregateInputType;
    _avg?: FeeInvoiceAvgAggregateInputType;
    _sum?: FeeInvoiceSumAggregateInputType;
    _min?: FeeInvoiceMinAggregateInputType;
    _max?: FeeInvoiceMaxAggregateInputType;
};
export type GetFeeInvoiceAggregateType<T extends FeeInvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateFeeInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeeInvoice[P]> : Prisma.GetScalarType<T[P], AggregateFeeInvoice[P]>;
};
export type FeeInvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithAggregationInput | Prisma.FeeInvoiceOrderByWithAggregationInput[];
    by: Prisma.FeeInvoiceScalarFieldEnum[] | Prisma.FeeInvoiceScalarFieldEnum;
    having?: Prisma.FeeInvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeInvoiceCountAggregateInputType | true;
    _avg?: FeeInvoiceAvgAggregateInputType;
    _sum?: FeeInvoiceSumAggregateInputType;
    _min?: FeeInvoiceMinAggregateInputType;
    _max?: FeeInvoiceMaxAggregateInputType;
};
export type FeeInvoiceGroupByOutputType = {
    id: string;
    invoiceNumber: string;
    counterpartyId: string | null;
    investorId: string | null;
    description: string;
    feeAmountKobo: bigint;
    vatKobo: bigint;
    vatRateVersionId: string | null;
    totalKobo: bigint;
    invoiceDate: Date;
    createdByUserId: string;
    createdAt: Date;
    _count: FeeInvoiceCountAggregateOutputType | null;
    _avg: FeeInvoiceAvgAggregateOutputType | null;
    _sum: FeeInvoiceSumAggregateOutputType | null;
    _min: FeeInvoiceMinAggregateOutputType | null;
    _max: FeeInvoiceMaxAggregateOutputType | null;
};
export type GetFeeInvoiceGroupByPayload<T extends FeeInvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeeInvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeeInvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeeInvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeeInvoiceGroupByOutputType[P]>;
}>>;
export type FeeInvoiceWhereInput = {
    AND?: Prisma.FeeInvoiceWhereInput | Prisma.FeeInvoiceWhereInput[];
    OR?: Prisma.FeeInvoiceWhereInput[];
    NOT?: Prisma.FeeInvoiceWhereInput | Prisma.FeeInvoiceWhereInput[];
    id?: Prisma.UuidFilter<"FeeInvoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"FeeInvoice"> | string;
    counterpartyId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    investorId?: Prisma.StringNullableFilter<"FeeInvoice"> | string | null;
    description?: Prisma.StringFilter<"FeeInvoice"> | string;
    feeAmountKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatRateVersionId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    totalKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
    createdByUserId?: Prisma.UuidFilter<"FeeInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    vatRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type FeeInvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    vatRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    vatRateVersion?: Prisma.TaxRateVersionOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type FeeInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invoiceNumber?: string;
    AND?: Prisma.FeeInvoiceWhereInput | Prisma.FeeInvoiceWhereInput[];
    OR?: Prisma.FeeInvoiceWhereInput[];
    NOT?: Prisma.FeeInvoiceWhereInput | Prisma.FeeInvoiceWhereInput[];
    counterpartyId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    investorId?: Prisma.StringNullableFilter<"FeeInvoice"> | string | null;
    description?: Prisma.StringFilter<"FeeInvoice"> | string;
    feeAmountKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatRateVersionId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    totalKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
    createdByUserId?: Prisma.UuidFilter<"FeeInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    vatRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "invoiceNumber">;
export type FeeInvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    vatRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FeeInvoiceCountOrderByAggregateInput;
    _avg?: Prisma.FeeInvoiceAvgOrderByAggregateInput;
    _max?: Prisma.FeeInvoiceMaxOrderByAggregateInput;
    _min?: Prisma.FeeInvoiceMinOrderByAggregateInput;
    _sum?: Prisma.FeeInvoiceSumOrderByAggregateInput;
};
export type FeeInvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeeInvoiceScalarWhereWithAggregatesInput | Prisma.FeeInvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeeInvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeeInvoiceScalarWhereWithAggregatesInput | Prisma.FeeInvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FeeInvoice"> | string;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"FeeInvoice"> | string;
    counterpartyId?: Prisma.UuidNullableWithAggregatesFilter<"FeeInvoice"> | string | null;
    investorId?: Prisma.StringNullableWithAggregatesFilter<"FeeInvoice"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"FeeInvoice"> | string;
    feeAmountKobo?: Prisma.BigIntWithAggregatesFilter<"FeeInvoice"> | bigint | number;
    vatKobo?: Prisma.BigIntWithAggregatesFilter<"FeeInvoice"> | bigint | number;
    vatRateVersionId?: Prisma.UuidNullableWithAggregatesFilter<"FeeInvoice"> | string | null;
    totalKobo?: Prisma.BigIntWithAggregatesFilter<"FeeInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeWithAggregatesFilter<"FeeInvoice"> | Date | string;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"FeeInvoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeeInvoice"> | Date | string;
};
export type FeeInvoiceCreateInput = {
    id?: string;
    invoiceNumber: string;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutFeeInvoicesInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutFeeInvoicesInput;
    vatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutFeeInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutFeeInvoicesCreatedInput;
};
export type FeeInvoiceUncheckedCreateInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutFeeInvoicesNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutFeeInvoicesNestedInput;
    vatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutFeeInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutFeeInvoicesCreatedNestedInput;
};
export type FeeInvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceCreateManyInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceListRelationFilter = {
    every?: Prisma.FeeInvoiceWhereInput;
    some?: Prisma.FeeInvoiceWhereInput;
    none?: Prisma.FeeInvoiceWhereInput;
};
export type FeeInvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeeInvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    vatRateVersionId?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeInvoiceAvgOrderByAggregateInput = {
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
};
export type FeeInvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    vatRateVersionId?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeInvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    vatRateVersionId?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeInvoiceSumOrderByAggregateInput = {
    feeAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
};
export type FeeInvoiceCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.FeeInvoiceCreateWithoutCreatedByInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCreatedByInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.FeeInvoiceCreateWithoutCreatedByInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCreatedByInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.FeeInvoiceCreateWithoutCreatedByInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCreatedByInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutCreatedByInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.FeeInvoiceCreateWithoutCreatedByInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.FeeInvoiceCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCreatedByInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutCreatedByInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput> | Prisma.FeeInvoiceCreateWithoutInvestorInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput | Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.FeeInvoiceCreateManyInvestorInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput> | Prisma.FeeInvoiceCreateWithoutInvestorInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput | Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.FeeInvoiceCreateManyInvestorInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput> | Prisma.FeeInvoiceCreateWithoutInvestorInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput | Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutInvestorInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.FeeInvoiceCreateManyInvestorInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutInvestorInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutInvestorInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput> | Prisma.FeeInvoiceCreateWithoutInvestorInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput | Prisma.FeeInvoiceCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutInvestorInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.FeeInvoiceCreateManyInvestorInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutInvestorInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutInvestorInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput> | Prisma.FeeInvoiceCreateWithoutCounterpartyInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput | Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput> | Prisma.FeeInvoiceCreateWithoutCounterpartyInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput | Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput> | Prisma.FeeInvoiceCreateWithoutCounterpartyInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput | Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCounterpartyInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutCounterpartyInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput> | Prisma.FeeInvoiceCreateWithoutCounterpartyInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput | Prisma.FeeInvoiceCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.FeeInvoiceCreateManyCounterpartyInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutCounterpartyInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceCreateNestedManyWithoutVatRateVersionInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput> | Prisma.FeeInvoiceCreateWithoutVatRateVersionInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput | Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput[];
    createMany?: Prisma.FeeInvoiceCreateManyVatRateVersionInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput> | Prisma.FeeInvoiceCreateWithoutVatRateVersionInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput | Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput[];
    createMany?: Prisma.FeeInvoiceCreateManyVatRateVersionInputEnvelope;
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
};
export type FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput> | Prisma.FeeInvoiceCreateWithoutVatRateVersionInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput | Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutVatRateVersionInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutVatRateVersionInput[];
    createMany?: Prisma.FeeInvoiceCreateManyVatRateVersionInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutVatRateVersionInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutVatRateVersionInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutVatRateVersionInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutVatRateVersionInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput> | Prisma.FeeInvoiceCreateWithoutVatRateVersionInput[] | Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput[];
    connectOrCreate?: Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput | Prisma.FeeInvoiceCreateOrConnectWithoutVatRateVersionInput[];
    upsert?: Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutVatRateVersionInput | Prisma.FeeInvoiceUpsertWithWhereUniqueWithoutVatRateVersionInput[];
    createMany?: Prisma.FeeInvoiceCreateManyVatRateVersionInputEnvelope;
    set?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    disconnect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    delete?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    connect?: Prisma.FeeInvoiceWhereUniqueInput | Prisma.FeeInvoiceWhereUniqueInput[];
    update?: Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutVatRateVersionInput | Prisma.FeeInvoiceUpdateWithWhereUniqueWithoutVatRateVersionInput[];
    updateMany?: Prisma.FeeInvoiceUpdateManyWithWhereWithoutVatRateVersionInput | Prisma.FeeInvoiceUpdateManyWithWhereWithoutVatRateVersionInput[];
    deleteMany?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
};
export type FeeInvoiceCreateWithoutCreatedByInput = {
    id?: string;
    invoiceNumber: string;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutFeeInvoicesInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutFeeInvoicesInput;
    vatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutFeeInvoicesInput;
};
export type FeeInvoiceUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
};
export type FeeInvoiceCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput>;
};
export type FeeInvoiceCreateManyCreatedByInputEnvelope = {
    data: Prisma.FeeInvoiceCreateManyCreatedByInput | Prisma.FeeInvoiceCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type FeeInvoiceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedCreateWithoutCreatedByInput>;
};
export type FeeInvoiceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutCreatedByInput, Prisma.FeeInvoiceUncheckedUpdateWithoutCreatedByInput>;
};
export type FeeInvoiceUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.FeeInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyWithoutCreatedByInput>;
};
export type FeeInvoiceScalarWhereInput = {
    AND?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
    OR?: Prisma.FeeInvoiceScalarWhereInput[];
    NOT?: Prisma.FeeInvoiceScalarWhereInput | Prisma.FeeInvoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"FeeInvoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"FeeInvoice"> | string;
    counterpartyId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    investorId?: Prisma.StringNullableFilter<"FeeInvoice"> | string | null;
    description?: Prisma.StringFilter<"FeeInvoice"> | string;
    feeAmountKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    vatRateVersionId?: Prisma.UuidNullableFilter<"FeeInvoice"> | string | null;
    totalKobo?: Prisma.BigIntFilter<"FeeInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
    createdByUserId?: Prisma.UuidFilter<"FeeInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeInvoice"> | Date | string;
};
export type FeeInvoiceCreateWithoutInvestorInput = {
    id?: string;
    invoiceNumber: string;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutFeeInvoicesInput;
    vatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutFeeInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutFeeInvoicesCreatedInput;
};
export type FeeInvoiceUncheckedCreateWithoutInvestorInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceCreateOrConnectWithoutInvestorInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput>;
};
export type FeeInvoiceCreateManyInvestorInputEnvelope = {
    data: Prisma.FeeInvoiceCreateManyInvestorInput | Prisma.FeeInvoiceCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type FeeInvoiceUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedCreateWithoutInvestorInput>;
};
export type FeeInvoiceUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutInvestorInput, Prisma.FeeInvoiceUncheckedUpdateWithoutInvestorInput>;
};
export type FeeInvoiceUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.FeeInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyWithoutInvestorInput>;
};
export type FeeInvoiceCreateWithoutCounterpartyInput = {
    id?: string;
    invoiceNumber: string;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
    investor?: Prisma.InvestorCreateNestedOneWithoutFeeInvoicesInput;
    vatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutFeeInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutFeeInvoicesCreatedInput;
};
export type FeeInvoiceUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    invoiceNumber: string;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput>;
};
export type FeeInvoiceCreateManyCounterpartyInputEnvelope = {
    data: Prisma.FeeInvoiceCreateManyCounterpartyInput | Prisma.FeeInvoiceCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type FeeInvoiceUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedCreateWithoutCounterpartyInput>;
};
export type FeeInvoiceUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutCounterpartyInput, Prisma.FeeInvoiceUncheckedUpdateWithoutCounterpartyInput>;
};
export type FeeInvoiceUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.FeeInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type FeeInvoiceCreateWithoutVatRateVersionInput = {
    id?: string;
    invoiceNumber: string;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutFeeInvoicesInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutFeeInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutFeeInvoicesCreatedInput;
};
export type FeeInvoiceUncheckedCreateWithoutVatRateVersionInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceCreateOrConnectWithoutVatRateVersionInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput>;
};
export type FeeInvoiceCreateManyVatRateVersionInputEnvelope = {
    data: Prisma.FeeInvoiceCreateManyVatRateVersionInput | Prisma.FeeInvoiceCreateManyVatRateVersionInput[];
    skipDuplicates?: boolean;
};
export type FeeInvoiceUpsertWithWhereUniqueWithoutVatRateVersionInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedUpdateWithoutVatRateVersionInput>;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedCreateWithoutVatRateVersionInput>;
};
export type FeeInvoiceUpdateWithWhereUniqueWithoutVatRateVersionInput = {
    where: Prisma.FeeInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateWithoutVatRateVersionInput, Prisma.FeeInvoiceUncheckedUpdateWithoutVatRateVersionInput>;
};
export type FeeInvoiceUpdateManyWithWhereWithoutVatRateVersionInput = {
    where: Prisma.FeeInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionInput>;
};
export type FeeInvoiceCreateManyCreatedByInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutFeeInvoicesNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutFeeInvoicesNestedInput;
    vatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutFeeInvoicesNestedInput;
};
export type FeeInvoiceUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceCreateManyInvestorInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutFeeInvoicesNestedInput;
    vatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutFeeInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutFeeInvoicesCreatedNestedInput;
};
export type FeeInvoiceUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceCreateManyCounterpartyInput = {
    id?: string;
    invoiceNumber: string;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    vatRateVersionId?: string | null;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneWithoutFeeInvoicesNestedInput;
    vatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutFeeInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutFeeInvoicesCreatedNestedInput;
};
export type FeeInvoiceUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceCreateManyVatRateVersionInput = {
    id?: string;
    invoiceNumber: string;
    counterpartyId?: string | null;
    investorId?: string | null;
    description: string;
    feeAmountKobo: bigint | number;
    vatKobo?: bigint | number;
    totalKobo: bigint | number;
    invoiceDate: Date | string;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type FeeInvoiceUpdateWithoutVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutFeeInvoicesNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutFeeInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutFeeInvoicesCreatedNestedInput;
};
export type FeeInvoiceUncheckedUpdateWithoutVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    feeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeInvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceNumber?: boolean;
    counterpartyId?: boolean;
    investorId?: boolean;
    description?: boolean;
    feeAmountKobo?: boolean;
    vatKobo?: boolean;
    vatRateVersionId?: boolean;
    totalKobo?: boolean;
    invoiceDate?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeInvoice"]>;
export type FeeInvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceNumber?: boolean;
    counterpartyId?: boolean;
    investorId?: boolean;
    description?: boolean;
    feeAmountKobo?: boolean;
    vatKobo?: boolean;
    vatRateVersionId?: boolean;
    totalKobo?: boolean;
    invoiceDate?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeInvoice"]>;
export type FeeInvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceNumber?: boolean;
    counterpartyId?: boolean;
    investorId?: boolean;
    description?: boolean;
    feeAmountKobo?: boolean;
    vatKobo?: boolean;
    vatRateVersionId?: boolean;
    totalKobo?: boolean;
    invoiceDate?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeInvoice"]>;
export type FeeInvoiceSelectScalar = {
    id?: boolean;
    invoiceNumber?: boolean;
    counterpartyId?: boolean;
    investorId?: boolean;
    description?: boolean;
    feeAmountKobo?: boolean;
    vatKobo?: boolean;
    vatRateVersionId?: boolean;
    totalKobo?: boolean;
    invoiceDate?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type FeeInvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invoiceNumber" | "counterpartyId" | "investorId" | "description" | "feeAmountKobo" | "vatKobo" | "vatRateVersionId" | "totalKobo" | "invoiceDate" | "createdByUserId" | "createdAt", ExtArgs["result"]["feeInvoice"]>;
export type FeeInvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type FeeInvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type FeeInvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.FeeInvoice$counterpartyArgs<ExtArgs>;
    investor?: boolean | Prisma.FeeInvoice$investorArgs<ExtArgs>;
    vatRateVersion?: boolean | Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $FeeInvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeeInvoice";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs> | null;
        investor: Prisma.$InvestorPayload<ExtArgs> | null;
        vatRateVersion: Prisma.$TaxRateVersionPayload<ExtArgs> | null;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invoiceNumber: string;
        counterpartyId: string | null;
        investorId: string | null;
        description: string;
        feeAmountKobo: bigint;
        vatKobo: bigint;
        vatRateVersionId: string | null;
        totalKobo: bigint;
        invoiceDate: Date;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["feeInvoice"]>;
    composites: {};
};
export type FeeInvoiceGetPayload<S extends boolean | null | undefined | FeeInvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload, S>;
export type FeeInvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeeInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeeInvoiceCountAggregateInputType | true;
};
export interface FeeInvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeeInvoice'];
        meta: {
            name: 'FeeInvoice';
        };
    };
    findUnique<T extends FeeInvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, FeeInvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeeInvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeeInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeeInvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeeInvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeeInvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeeInvoiceCreateArgs>(args: Prisma.SelectSubset<T, FeeInvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeeInvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeeInvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeeInvoiceDeleteArgs>(args: Prisma.SelectSubset<T, FeeInvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeeInvoiceUpdateArgs>(args: Prisma.SelectSubset<T, FeeInvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeeInvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeeInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeeInvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, FeeInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeeInvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeeInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeeInvoiceUpsertArgs>(args: Prisma.SelectSubset<T, FeeInvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__FeeInvoiceClient<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeeInvoiceCountArgs>(args?: Prisma.Subset<T, FeeInvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeeInvoiceCountAggregateOutputType> : number>;
    aggregate<T extends FeeInvoiceAggregateArgs>(args: Prisma.Subset<T, FeeInvoiceAggregateArgs>): Prisma.PrismaPromise<GetFeeInvoiceAggregateType<T>>;
    groupBy<T extends FeeInvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeeInvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: FeeInvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeeInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeeInvoiceFieldRefs;
}
export interface Prisma__FeeInvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.FeeInvoice$counterpartyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeInvoice$counterpartyArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    investor<T extends Prisma.FeeInvoice$investorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeInvoice$investorArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    vatRateVersion<T extends Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeInvoice$vatRateVersionArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeeInvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly investorId: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly description: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly feeAmountKobo: Prisma.FieldRef<"FeeInvoice", 'BigInt'>;
    readonly vatKobo: Prisma.FieldRef<"FeeInvoice", 'BigInt'>;
    readonly vatRateVersionId: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly totalKobo: Prisma.FieldRef<"FeeInvoice", 'BigInt'>;
    readonly invoiceDate: Prisma.FieldRef<"FeeInvoice", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"FeeInvoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeeInvoice", 'DateTime'>;
}
export type FeeInvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where: Prisma.FeeInvoiceWhereUniqueInput;
};
export type FeeInvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where: Prisma.FeeInvoiceWhereUniqueInput;
};
export type FeeInvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithRelationInput | Prisma.FeeInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.FeeInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeInvoiceScalarFieldEnum | Prisma.FeeInvoiceScalarFieldEnum[];
};
export type FeeInvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithRelationInput | Prisma.FeeInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.FeeInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeInvoiceScalarFieldEnum | Prisma.FeeInvoiceScalarFieldEnum[];
};
export type FeeInvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithRelationInput | Prisma.FeeInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.FeeInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeInvoiceScalarFieldEnum | Prisma.FeeInvoiceScalarFieldEnum[];
};
export type FeeInvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeInvoiceCreateInput, Prisma.FeeInvoiceUncheckedCreateInput>;
};
export type FeeInvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeeInvoiceCreateManyInput | Prisma.FeeInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeeInvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    data: Prisma.FeeInvoiceCreateManyInput | Prisma.FeeInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FeeInvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FeeInvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateInput, Prisma.FeeInvoiceUncheckedUpdateInput>;
    where: Prisma.FeeInvoiceWhereUniqueInput;
};
export type FeeInvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.FeeInvoiceWhereInput;
    limit?: number;
};
export type FeeInvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeInvoiceUpdateManyMutationInput, Prisma.FeeInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.FeeInvoiceWhereInput;
    limit?: number;
    include?: Prisma.FeeInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FeeInvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where: Prisma.FeeInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeInvoiceCreateInput, Prisma.FeeInvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeeInvoiceUpdateInput, Prisma.FeeInvoiceUncheckedUpdateInput>;
};
export type FeeInvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where: Prisma.FeeInvoiceWhereUniqueInput;
};
export type FeeInvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeInvoiceWhereInput;
    limit?: number;
};
export type FeeInvoice$counterpartyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartySelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWhereInput;
};
export type FeeInvoice$investorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type FeeInvoice$vatRateVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type FeeInvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
};
