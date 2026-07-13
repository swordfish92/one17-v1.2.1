import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentBatchLineModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentBatchLinePayload>;
export type AggregatePaymentBatchLine = {
    _count: PaymentBatchLineCountAggregateOutputType | null;
    _avg: PaymentBatchLineAvgAggregateOutputType | null;
    _sum: PaymentBatchLineSumAggregateOutputType | null;
    _min: PaymentBatchLineMinAggregateOutputType | null;
    _max: PaymentBatchLineMaxAggregateOutputType | null;
};
export type PaymentBatchLineAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type PaymentBatchLineSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type PaymentBatchLineMinAggregateOutputType = {
    id: string | null;
    paymentBatchId: string | null;
    vendorInvoiceId: string | null;
    amountKobo: bigint | null;
};
export type PaymentBatchLineMaxAggregateOutputType = {
    id: string | null;
    paymentBatchId: string | null;
    vendorInvoiceId: string | null;
    amountKobo: bigint | null;
};
export type PaymentBatchLineCountAggregateOutputType = {
    id: number;
    paymentBatchId: number;
    vendorInvoiceId: number;
    amountKobo: number;
    _all: number;
};
export type PaymentBatchLineAvgAggregateInputType = {
    amountKobo?: true;
};
export type PaymentBatchLineSumAggregateInputType = {
    amountKobo?: true;
};
export type PaymentBatchLineMinAggregateInputType = {
    id?: true;
    paymentBatchId?: true;
    vendorInvoiceId?: true;
    amountKobo?: true;
};
export type PaymentBatchLineMaxAggregateInputType = {
    id?: true;
    paymentBatchId?: true;
    vendorInvoiceId?: true;
    amountKobo?: true;
};
export type PaymentBatchLineCountAggregateInputType = {
    id?: true;
    paymentBatchId?: true;
    vendorInvoiceId?: true;
    amountKobo?: true;
    _all?: true;
};
export type PaymentBatchLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithRelationInput | Prisma.PaymentBatchLineOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentBatchLineCountAggregateInputType;
    _avg?: PaymentBatchLineAvgAggregateInputType;
    _sum?: PaymentBatchLineSumAggregateInputType;
    _min?: PaymentBatchLineMinAggregateInputType;
    _max?: PaymentBatchLineMaxAggregateInputType;
};
export type GetPaymentBatchLineAggregateType<T extends PaymentBatchLineAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentBatchLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentBatchLine[P]> : Prisma.GetScalarType<T[P], AggregatePaymentBatchLine[P]>;
};
export type PaymentBatchLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithAggregationInput | Prisma.PaymentBatchLineOrderByWithAggregationInput[];
    by: Prisma.PaymentBatchLineScalarFieldEnum[] | Prisma.PaymentBatchLineScalarFieldEnum;
    having?: Prisma.PaymentBatchLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentBatchLineCountAggregateInputType | true;
    _avg?: PaymentBatchLineAvgAggregateInputType;
    _sum?: PaymentBatchLineSumAggregateInputType;
    _min?: PaymentBatchLineMinAggregateInputType;
    _max?: PaymentBatchLineMaxAggregateInputType;
};
export type PaymentBatchLineGroupByOutputType = {
    id: string;
    paymentBatchId: string;
    vendorInvoiceId: string;
    amountKobo: bigint;
    _count: PaymentBatchLineCountAggregateOutputType | null;
    _avg: PaymentBatchLineAvgAggregateOutputType | null;
    _sum: PaymentBatchLineSumAggregateOutputType | null;
    _min: PaymentBatchLineMinAggregateOutputType | null;
    _max: PaymentBatchLineMaxAggregateOutputType | null;
};
export type GetPaymentBatchLineGroupByPayload<T extends PaymentBatchLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentBatchLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentBatchLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentBatchLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentBatchLineGroupByOutputType[P]>;
}>>;
export type PaymentBatchLineWhereInput = {
    AND?: Prisma.PaymentBatchLineWhereInput | Prisma.PaymentBatchLineWhereInput[];
    OR?: Prisma.PaymentBatchLineWhereInput[];
    NOT?: Prisma.PaymentBatchLineWhereInput | Prisma.PaymentBatchLineWhereInput[];
    id?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    paymentBatchId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    vendorInvoiceId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"PaymentBatchLine"> | bigint | number;
    paymentBatch?: Prisma.XOR<Prisma.PaymentBatchScalarRelationFilter, Prisma.PaymentBatchWhereInput>;
    vendorInvoice?: Prisma.XOR<Prisma.VendorInvoiceScalarRelationFilter, Prisma.VendorInvoiceWhereInput>;
};
export type PaymentBatchLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentBatchId?: Prisma.SortOrder;
    vendorInvoiceId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentBatch?: Prisma.PaymentBatchOrderByWithRelationInput;
    vendorInvoice?: Prisma.VendorInvoiceOrderByWithRelationInput;
};
export type PaymentBatchLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PaymentBatchLineWhereInput | Prisma.PaymentBatchLineWhereInput[];
    OR?: Prisma.PaymentBatchLineWhereInput[];
    NOT?: Prisma.PaymentBatchLineWhereInput | Prisma.PaymentBatchLineWhereInput[];
    paymentBatchId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    vendorInvoiceId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"PaymentBatchLine"> | bigint | number;
    paymentBatch?: Prisma.XOR<Prisma.PaymentBatchScalarRelationFilter, Prisma.PaymentBatchWhereInput>;
    vendorInvoice?: Prisma.XOR<Prisma.VendorInvoiceScalarRelationFilter, Prisma.VendorInvoiceWhereInput>;
}, "id">;
export type PaymentBatchLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentBatchId?: Prisma.SortOrder;
    vendorInvoiceId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    _count?: Prisma.PaymentBatchLineCountOrderByAggregateInput;
    _avg?: Prisma.PaymentBatchLineAvgOrderByAggregateInput;
    _max?: Prisma.PaymentBatchLineMaxOrderByAggregateInput;
    _min?: Prisma.PaymentBatchLineMinOrderByAggregateInput;
    _sum?: Prisma.PaymentBatchLineSumOrderByAggregateInput;
};
export type PaymentBatchLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentBatchLineScalarWhereWithAggregatesInput | Prisma.PaymentBatchLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentBatchLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentBatchLineScalarWhereWithAggregatesInput | Prisma.PaymentBatchLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentBatchLine"> | string;
    paymentBatchId?: Prisma.UuidWithAggregatesFilter<"PaymentBatchLine"> | string;
    vendorInvoiceId?: Prisma.UuidWithAggregatesFilter<"PaymentBatchLine"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"PaymentBatchLine"> | bigint | number;
};
export type PaymentBatchLineCreateInput = {
    id?: string;
    amountKobo: bigint | number;
    paymentBatch: Prisma.PaymentBatchCreateNestedOneWithoutLinesInput;
    vendorInvoice: Prisma.VendorInvoiceCreateNestedOneWithoutPaymentBatchLinesInput;
};
export type PaymentBatchLineUncheckedCreateInput = {
    id?: string;
    paymentBatchId: string;
    vendorInvoiceId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paymentBatch?: Prisma.PaymentBatchUpdateOneRequiredWithoutLinesNestedInput;
    vendorInvoice?: Prisma.VendorInvoiceUpdateOneRequiredWithoutPaymentBatchLinesNestedInput;
};
export type PaymentBatchLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentBatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorInvoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineCreateManyInput = {
    id?: string;
    paymentBatchId: string;
    vendorInvoiceId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentBatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorInvoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineListRelationFilter = {
    every?: Prisma.PaymentBatchLineWhereInput;
    some?: Prisma.PaymentBatchLineWhereInput;
    none?: Prisma.PaymentBatchLineWhereInput;
};
export type PaymentBatchLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentBatchLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentBatchId?: Prisma.SortOrder;
    vendorInvoiceId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type PaymentBatchLineAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PaymentBatchLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentBatchId?: Prisma.SortOrder;
    vendorInvoiceId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type PaymentBatchLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentBatchId?: Prisma.SortOrder;
    vendorInvoiceId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type PaymentBatchLineSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput> | Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput | Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyVendorInvoiceInputEnvelope;
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
};
export type PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput> | Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput | Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyVendorInvoiceInputEnvelope;
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
};
export type PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput> | Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput | Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput[];
    upsert?: Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutVendorInvoiceInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyVendorInvoiceInputEnvelope;
    set?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    delete?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    update?: Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutVendorInvoiceInput[];
    updateMany?: Prisma.PaymentBatchLineUpdateManyWithWhereWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpdateManyWithWhereWithoutVendorInvoiceInput[];
    deleteMany?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
};
export type PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput> | Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput | Prisma.PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput[];
    upsert?: Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutVendorInvoiceInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyVendorInvoiceInputEnvelope;
    set?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    delete?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    update?: Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutVendorInvoiceInput[];
    updateMany?: Prisma.PaymentBatchLineUpdateManyWithWhereWithoutVendorInvoiceInput | Prisma.PaymentBatchLineUpdateManyWithWhereWithoutVendorInvoiceInput[];
    deleteMany?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
};
export type PaymentBatchLineCreateNestedManyWithoutPaymentBatchInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput> | Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput | Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyPaymentBatchInputEnvelope;
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
};
export type PaymentBatchLineUncheckedCreateNestedManyWithoutPaymentBatchInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput> | Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput | Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyPaymentBatchInputEnvelope;
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
};
export type PaymentBatchLineUpdateManyWithoutPaymentBatchNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput> | Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput | Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput[];
    upsert?: Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutPaymentBatchInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyPaymentBatchInputEnvelope;
    set?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    delete?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    update?: Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutPaymentBatchInput[];
    updateMany?: Prisma.PaymentBatchLineUpdateManyWithWhereWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpdateManyWithWhereWithoutPaymentBatchInput[];
    deleteMany?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
};
export type PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput> | Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput[] | Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput[];
    connectOrCreate?: Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput | Prisma.PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput[];
    upsert?: Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpsertWithWhereUniqueWithoutPaymentBatchInput[];
    createMany?: Prisma.PaymentBatchLineCreateManyPaymentBatchInputEnvelope;
    set?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    delete?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    connect?: Prisma.PaymentBatchLineWhereUniqueInput | Prisma.PaymentBatchLineWhereUniqueInput[];
    update?: Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpdateWithWhereUniqueWithoutPaymentBatchInput[];
    updateMany?: Prisma.PaymentBatchLineUpdateManyWithWhereWithoutPaymentBatchInput | Prisma.PaymentBatchLineUpdateManyWithWhereWithoutPaymentBatchInput[];
    deleteMany?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
};
export type PaymentBatchLineCreateWithoutVendorInvoiceInput = {
    id?: string;
    amountKobo: bigint | number;
    paymentBatch: Prisma.PaymentBatchCreateNestedOneWithoutLinesInput;
};
export type PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput = {
    id?: string;
    paymentBatchId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineCreateOrConnectWithoutVendorInvoiceInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput>;
};
export type PaymentBatchLineCreateManyVendorInvoiceInputEnvelope = {
    data: Prisma.PaymentBatchLineCreateManyVendorInvoiceInput | Prisma.PaymentBatchLineCreateManyVendorInvoiceInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchLineUpsertWithWhereUniqueWithoutVendorInvoiceInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentBatchLineUpdateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedUpdateWithoutVendorInvoiceInput>;
    create: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedCreateWithoutVendorInvoiceInput>;
};
export type PaymentBatchLineUpdateWithWhereUniqueWithoutVendorInvoiceInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateWithoutVendorInvoiceInput, Prisma.PaymentBatchLineUncheckedUpdateWithoutVendorInvoiceInput>;
};
export type PaymentBatchLineUpdateManyWithWhereWithoutVendorInvoiceInput = {
    where: Prisma.PaymentBatchLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateManyMutationInput, Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceInput>;
};
export type PaymentBatchLineScalarWhereInput = {
    AND?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
    OR?: Prisma.PaymentBatchLineScalarWhereInput[];
    NOT?: Prisma.PaymentBatchLineScalarWhereInput | Prisma.PaymentBatchLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    paymentBatchId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    vendorInvoiceId?: Prisma.UuidFilter<"PaymentBatchLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"PaymentBatchLine"> | bigint | number;
};
export type PaymentBatchLineCreateWithoutPaymentBatchInput = {
    id?: string;
    amountKobo: bigint | number;
    vendorInvoice: Prisma.VendorInvoiceCreateNestedOneWithoutPaymentBatchLinesInput;
};
export type PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput = {
    id?: string;
    vendorInvoiceId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineCreateOrConnectWithoutPaymentBatchInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput>;
};
export type PaymentBatchLineCreateManyPaymentBatchInputEnvelope = {
    data: Prisma.PaymentBatchLineCreateManyPaymentBatchInput | Prisma.PaymentBatchLineCreateManyPaymentBatchInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchLineUpsertWithWhereUniqueWithoutPaymentBatchInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentBatchLineUpdateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedUpdateWithoutPaymentBatchInput>;
    create: Prisma.XOR<Prisma.PaymentBatchLineCreateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedCreateWithoutPaymentBatchInput>;
};
export type PaymentBatchLineUpdateWithWhereUniqueWithoutPaymentBatchInput = {
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateWithoutPaymentBatchInput, Prisma.PaymentBatchLineUncheckedUpdateWithoutPaymentBatchInput>;
};
export type PaymentBatchLineUpdateManyWithWhereWithoutPaymentBatchInput = {
    where: Prisma.PaymentBatchLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateManyMutationInput, Prisma.PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchInput>;
};
export type PaymentBatchLineCreateManyVendorInvoiceInput = {
    id?: string;
    paymentBatchId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineUpdateWithoutVendorInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paymentBatch?: Prisma.PaymentBatchUpdateOneRequiredWithoutLinesNestedInput;
};
export type PaymentBatchLineUncheckedUpdateWithoutVendorInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentBatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentBatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineCreateManyPaymentBatchInput = {
    id?: string;
    vendorInvoiceId: string;
    amountKobo: bigint | number;
};
export type PaymentBatchLineUpdateWithoutPaymentBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vendorInvoice?: Prisma.VendorInvoiceUpdateOneRequiredWithoutPaymentBatchLinesNestedInput;
};
export type PaymentBatchLineUncheckedUpdateWithoutPaymentBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorInvoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorInvoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PaymentBatchLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentBatchId?: boolean;
    vendorInvoiceId?: boolean;
    amountKobo?: boolean;
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatchLine"]>;
export type PaymentBatchLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentBatchId?: boolean;
    vendorInvoiceId?: boolean;
    amountKobo?: boolean;
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatchLine"]>;
export type PaymentBatchLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentBatchId?: boolean;
    vendorInvoiceId?: boolean;
    amountKobo?: boolean;
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatchLine"]>;
export type PaymentBatchLineSelectScalar = {
    id?: boolean;
    paymentBatchId?: boolean;
    vendorInvoiceId?: boolean;
    amountKobo?: boolean;
};
export type PaymentBatchLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentBatchId" | "vendorInvoiceId" | "amountKobo", ExtArgs["result"]["paymentBatchLine"]>;
export type PaymentBatchLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
};
export type PaymentBatchLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
};
export type PaymentBatchLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentBatch?: boolean | Prisma.PaymentBatchDefaultArgs<ExtArgs>;
    vendorInvoice?: boolean | Prisma.VendorInvoiceDefaultArgs<ExtArgs>;
};
export type $PaymentBatchLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentBatchLine";
    objects: {
        paymentBatch: Prisma.$PaymentBatchPayload<ExtArgs>;
        vendorInvoice: Prisma.$VendorInvoicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentBatchId: string;
        vendorInvoiceId: string;
        amountKobo: bigint;
    }, ExtArgs["result"]["paymentBatchLine"]>;
    composites: {};
};
export type PaymentBatchLineGetPayload<S extends boolean | null | undefined | PaymentBatchLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload, S>;
export type PaymentBatchLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentBatchLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentBatchLineCountAggregateInputType | true;
};
export interface PaymentBatchLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentBatchLine'];
        meta: {
            name: 'PaymentBatchLine';
        };
    };
    findUnique<T extends PaymentBatchLineFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentBatchLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentBatchLineFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentBatchLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentBatchLineFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentBatchLineCreateArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentBatchLineCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentBatchLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentBatchLineDeleteArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentBatchLineUpdateArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentBatchLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentBatchLineUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentBatchLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentBatchLineUpsertArgs>(args: Prisma.SelectSubset<T, PaymentBatchLineUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchLineClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentBatchLineCountArgs>(args?: Prisma.Subset<T, PaymentBatchLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentBatchLineCountAggregateOutputType> : number>;
    aggregate<T extends PaymentBatchLineAggregateArgs>(args: Prisma.Subset<T, PaymentBatchLineAggregateArgs>): Prisma.PrismaPromise<GetPaymentBatchLineAggregateType<T>>;
    groupBy<T extends PaymentBatchLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentBatchLineGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentBatchLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentBatchLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentBatchLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentBatchLineFieldRefs;
}
export interface Prisma__PaymentBatchLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    paymentBatch<T extends Prisma.PaymentBatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentBatchDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendorInvoice<T extends Prisma.VendorInvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorInvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentBatchLineFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentBatchLine", 'String'>;
    readonly paymentBatchId: Prisma.FieldRef<"PaymentBatchLine", 'String'>;
    readonly vendorInvoiceId: Prisma.FieldRef<"PaymentBatchLine", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"PaymentBatchLine", 'BigInt'>;
}
export type PaymentBatchLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchLineWhereUniqueInput;
};
export type PaymentBatchLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchLineWhereUniqueInput;
};
export type PaymentBatchLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithRelationInput | Prisma.PaymentBatchLineOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchLineScalarFieldEnum | Prisma.PaymentBatchLineScalarFieldEnum[];
};
export type PaymentBatchLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithRelationInput | Prisma.PaymentBatchLineOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchLineScalarFieldEnum | Prisma.PaymentBatchLineScalarFieldEnum[];
};
export type PaymentBatchLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithRelationInput | Prisma.PaymentBatchLineOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchLineScalarFieldEnum | Prisma.PaymentBatchLineScalarFieldEnum[];
};
export type PaymentBatchLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchLineCreateInput, Prisma.PaymentBatchLineUncheckedCreateInput>;
};
export type PaymentBatchLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentBatchLineCreateManyInput | Prisma.PaymentBatchLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    data: Prisma.PaymentBatchLineCreateManyInput | Prisma.PaymentBatchLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentBatchLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentBatchLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateInput, Prisma.PaymentBatchLineUncheckedUpdateInput>;
    where: Prisma.PaymentBatchLineWhereUniqueInput;
};
export type PaymentBatchLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateManyMutationInput, Prisma.PaymentBatchLineUncheckedUpdateManyInput>;
    where?: Prisma.PaymentBatchLineWhereInput;
    limit?: number;
};
export type PaymentBatchLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchLineUpdateManyMutationInput, Prisma.PaymentBatchLineUncheckedUpdateManyInput>;
    where?: Prisma.PaymentBatchLineWhereInput;
    limit?: number;
    include?: Prisma.PaymentBatchLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentBatchLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchLineCreateInput, Prisma.PaymentBatchLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentBatchLineUpdateInput, Prisma.PaymentBatchLineUncheckedUpdateInput>;
};
export type PaymentBatchLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchLineWhereUniqueInput;
};
export type PaymentBatchLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchLineWhereInput;
    limit?: number;
};
export type PaymentBatchLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
};
