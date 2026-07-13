import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentBatchModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentBatchPayload>;
export type AggregatePaymentBatch = {
    _count: PaymentBatchCountAggregateOutputType | null;
    _avg: PaymentBatchAvgAggregateOutputType | null;
    _sum: PaymentBatchSumAggregateOutputType | null;
    _min: PaymentBatchMinAggregateOutputType | null;
    _max: PaymentBatchMaxAggregateOutputType | null;
};
export type PaymentBatchAvgAggregateOutputType = {
    totalAmountKobo: number | null;
};
export type PaymentBatchSumAggregateOutputType = {
    totalAmountKobo: bigint | null;
};
export type PaymentBatchMinAggregateOutputType = {
    id: string | null;
    batchNumber: string | null;
    ledgerEntityCode: string | null;
    totalAmountKobo: bigint | null;
    status: $Enums.PaymentBatchStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    paidAt: Date | null;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
};
export type PaymentBatchMaxAggregateOutputType = {
    id: string | null;
    batchNumber: string | null;
    ledgerEntityCode: string | null;
    totalAmountKobo: bigint | null;
    status: $Enums.PaymentBatchStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    paidAt: Date | null;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
};
export type PaymentBatchCountAggregateOutputType = {
    id: number;
    batchNumber: number;
    ledgerEntityCode: number;
    totalAmountKobo: number;
    status: number;
    createdByUserId: number;
    createdAt: number;
    paidAt: number;
    journalEntryId: number;
    workflowInstanceId: number;
    _all: number;
};
export type PaymentBatchAvgAggregateInputType = {
    totalAmountKobo?: true;
};
export type PaymentBatchSumAggregateInputType = {
    totalAmountKobo?: true;
};
export type PaymentBatchMinAggregateInputType = {
    id?: true;
    batchNumber?: true;
    ledgerEntityCode?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    paidAt?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
};
export type PaymentBatchMaxAggregateInputType = {
    id?: true;
    batchNumber?: true;
    ledgerEntityCode?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    paidAt?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
};
export type PaymentBatchCountAggregateInputType = {
    id?: true;
    batchNumber?: true;
    ledgerEntityCode?: true;
    totalAmountKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    paidAt?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
    _all?: true;
};
export type PaymentBatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchWhereInput;
    orderBy?: Prisma.PaymentBatchOrderByWithRelationInput | Prisma.PaymentBatchOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentBatchCountAggregateInputType;
    _avg?: PaymentBatchAvgAggregateInputType;
    _sum?: PaymentBatchSumAggregateInputType;
    _min?: PaymentBatchMinAggregateInputType;
    _max?: PaymentBatchMaxAggregateInputType;
};
export type GetPaymentBatchAggregateType<T extends PaymentBatchAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentBatch[P]> : Prisma.GetScalarType<T[P], AggregatePaymentBatch[P]>;
};
export type PaymentBatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchWhereInput;
    orderBy?: Prisma.PaymentBatchOrderByWithAggregationInput | Prisma.PaymentBatchOrderByWithAggregationInput[];
    by: Prisma.PaymentBatchScalarFieldEnum[] | Prisma.PaymentBatchScalarFieldEnum;
    having?: Prisma.PaymentBatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentBatchCountAggregateInputType | true;
    _avg?: PaymentBatchAvgAggregateInputType;
    _sum?: PaymentBatchSumAggregateInputType;
    _min?: PaymentBatchMinAggregateInputType;
    _max?: PaymentBatchMaxAggregateInputType;
};
export type PaymentBatchGroupByOutputType = {
    id: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint;
    status: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt: Date;
    paidAt: Date | null;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
    _count: PaymentBatchCountAggregateOutputType | null;
    _avg: PaymentBatchAvgAggregateOutputType | null;
    _sum: PaymentBatchSumAggregateOutputType | null;
    _min: PaymentBatchMinAggregateOutputType | null;
    _max: PaymentBatchMaxAggregateOutputType | null;
};
export type GetPaymentBatchGroupByPayload<T extends PaymentBatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentBatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentBatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentBatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentBatchGroupByOutputType[P]>;
}>>;
export type PaymentBatchWhereInput = {
    AND?: Prisma.PaymentBatchWhereInput | Prisma.PaymentBatchWhereInput[];
    OR?: Prisma.PaymentBatchWhereInput[];
    NOT?: Prisma.PaymentBatchWhereInput | Prisma.PaymentBatchWhereInput[];
    id?: Prisma.UuidFilter<"PaymentBatch"> | string;
    batchNumber?: Prisma.StringFilter<"PaymentBatch"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PaymentBatch"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PaymentBatch"> | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFilter<"PaymentBatch"> | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.UuidFilter<"PaymentBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentBatch"> | Date | string;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentBatch"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"PaymentBatch"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PaymentBatch"> | string | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.PaymentBatchLineListRelationFilter;
};
export type PaymentBatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    lines?: Prisma.PaymentBatchLineOrderByRelationAggregateInput;
};
export type PaymentBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    batchNumber?: string;
    workflowInstanceId?: string;
    AND?: Prisma.PaymentBatchWhereInput | Prisma.PaymentBatchWhereInput[];
    OR?: Prisma.PaymentBatchWhereInput[];
    NOT?: Prisma.PaymentBatchWhereInput | Prisma.PaymentBatchWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"PaymentBatch"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PaymentBatch"> | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFilter<"PaymentBatch"> | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.UuidFilter<"PaymentBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentBatch"> | Date | string;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentBatch"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"PaymentBatch"> | string | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.PaymentBatchLineListRelationFilter;
}, "id" | "batchNumber" | "workflowInstanceId">;
export type PaymentBatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaymentBatchCountOrderByAggregateInput;
    _avg?: Prisma.PaymentBatchAvgOrderByAggregateInput;
    _max?: Prisma.PaymentBatchMaxOrderByAggregateInput;
    _min?: Prisma.PaymentBatchMinOrderByAggregateInput;
    _sum?: Prisma.PaymentBatchSumOrderByAggregateInput;
};
export type PaymentBatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentBatchScalarWhereWithAggregatesInput | Prisma.PaymentBatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentBatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentBatchScalarWhereWithAggregatesInput | Prisma.PaymentBatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentBatch"> | string;
    batchNumber?: Prisma.StringWithAggregatesFilter<"PaymentBatch"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PaymentBatch"> | string;
    totalAmountKobo?: Prisma.BigIntWithAggregatesFilter<"PaymentBatch"> | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusWithAggregatesFilter<"PaymentBatch"> | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"PaymentBatch"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentBatch"> | Date | string;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PaymentBatch"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentBatch"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentBatch"> | string | null;
};
export type PaymentBatchCreateInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPaymentBatchesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPaymentBatchesCreatedInput;
    lines?: Prisma.PaymentBatchLineCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchUncheckedCreateInput = {
    id?: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    lines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPaymentBatchesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentBatchesCreatedNestedInput;
    lines?: Prisma.PaymentBatchLineUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchCreateManyInput = {
    id?: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
};
export type PaymentBatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentBatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentBatchListRelationFilter = {
    every?: Prisma.PaymentBatchWhereInput;
    some?: Prisma.PaymentBatchWhereInput;
    none?: Prisma.PaymentBatchWhereInput;
};
export type PaymentBatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentBatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type PaymentBatchAvgOrderByAggregateInput = {
    totalAmountKobo?: Prisma.SortOrder;
};
export type PaymentBatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type PaymentBatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    totalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type PaymentBatchSumOrderByAggregateInput = {
    totalAmountKobo?: Prisma.SortOrder;
};
export type PaymentBatchScalarRelationFilter = {
    is?: Prisma.PaymentBatchWhereInput;
    isNot?: Prisma.PaymentBatchWhereInput;
};
export type PaymentBatchCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentBatchCreateWithoutCreatedByInput[] | Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput | Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PaymentBatchCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
};
export type PaymentBatchUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentBatchCreateWithoutCreatedByInput[] | Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput | Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PaymentBatchCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
};
export type PaymentBatchUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentBatchCreateWithoutCreatedByInput[] | Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput | Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PaymentBatchUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentBatchUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PaymentBatchCreateManyCreatedByInputEnvelope;
    set?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    delete?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    update?: Prisma.PaymentBatchUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentBatchUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PaymentBatchUpdateManyWithWhereWithoutCreatedByInput | Prisma.PaymentBatchUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
};
export type PaymentBatchUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentBatchCreateWithoutCreatedByInput[] | Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput | Prisma.PaymentBatchCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PaymentBatchUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentBatchUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PaymentBatchCreateManyCreatedByInputEnvelope;
    set?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    delete?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    update?: Prisma.PaymentBatchUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentBatchUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PaymentBatchUpdateManyWithWhereWithoutCreatedByInput | Prisma.PaymentBatchUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
};
export type PaymentBatchCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput> | Prisma.PaymentBatchCreateWithoutLedgerEntityInput[] | Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput | Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PaymentBatchCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
};
export type PaymentBatchUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput> | Prisma.PaymentBatchCreateWithoutLedgerEntityInput[] | Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput | Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PaymentBatchCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
};
export type PaymentBatchUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput> | Prisma.PaymentBatchCreateWithoutLedgerEntityInput[] | Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput | Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PaymentBatchUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PaymentBatchUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PaymentBatchCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    delete?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    update?: Prisma.PaymentBatchUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PaymentBatchUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PaymentBatchUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PaymentBatchUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
};
export type PaymentBatchUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput> | Prisma.PaymentBatchCreateWithoutLedgerEntityInput[] | Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput | Prisma.PaymentBatchCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PaymentBatchUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PaymentBatchUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PaymentBatchCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    disconnect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    delete?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    connect?: Prisma.PaymentBatchWhereUniqueInput | Prisma.PaymentBatchWhereUniqueInput[];
    update?: Prisma.PaymentBatchUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PaymentBatchUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PaymentBatchUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PaymentBatchUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
};
export type EnumPaymentBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentBatchStatus;
};
export type PaymentBatchCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLinesInput, Prisma.PaymentBatchUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLinesInput;
    connect?: Prisma.PaymentBatchWhereUniqueInput;
};
export type PaymentBatchUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLinesInput, Prisma.PaymentBatchUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PaymentBatchCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.PaymentBatchUpsertWithoutLinesInput;
    connect?: Prisma.PaymentBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentBatchUpdateToOneWithWhereWithoutLinesInput, Prisma.PaymentBatchUpdateWithoutLinesInput>, Prisma.PaymentBatchUncheckedUpdateWithoutLinesInput>;
};
export type PaymentBatchCreateWithoutCreatedByInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPaymentBatchesInput;
    lines?: Prisma.PaymentBatchLineCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    lines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput>;
};
export type PaymentBatchCreateManyCreatedByInputEnvelope = {
    data: Prisma.PaymentBatchCreateManyCreatedByInput | Prisma.PaymentBatchCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedCreateWithoutCreatedByInput>;
};
export type PaymentBatchUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutCreatedByInput, Prisma.PaymentBatchUncheckedUpdateWithoutCreatedByInput>;
};
export type PaymentBatchUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PaymentBatchScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateManyMutationInput, Prisma.PaymentBatchUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PaymentBatchScalarWhereInput = {
    AND?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
    OR?: Prisma.PaymentBatchScalarWhereInput[];
    NOT?: Prisma.PaymentBatchScalarWhereInput | Prisma.PaymentBatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentBatch"> | string;
    batchNumber?: Prisma.StringFilter<"PaymentBatch"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PaymentBatch"> | string;
    totalAmountKobo?: Prisma.BigIntFilter<"PaymentBatch"> | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFilter<"PaymentBatch"> | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.UuidFilter<"PaymentBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentBatch"> | Date | string;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentBatch"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"PaymentBatch"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PaymentBatch"> | string | null;
};
export type PaymentBatchCreateWithoutLedgerEntityInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPaymentBatchesCreatedInput;
    lines?: Prisma.PaymentBatchLineCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    lines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutPaymentBatchInput;
};
export type PaymentBatchCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput>;
};
export type PaymentBatchCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PaymentBatchCreateManyLedgerEntityInput | Prisma.PaymentBatchCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedCreateWithoutLedgerEntityInput>;
};
export type PaymentBatchUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutLedgerEntityInput, Prisma.PaymentBatchUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PaymentBatchUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PaymentBatchScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateManyMutationInput, Prisma.PaymentBatchUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PaymentBatchCreateWithoutLinesInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPaymentBatchesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPaymentBatchesCreatedInput;
};
export type PaymentBatchUncheckedCreateWithoutLinesInput = {
    id?: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
};
export type PaymentBatchCreateOrConnectWithoutLinesInput = {
    where: Prisma.PaymentBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLinesInput, Prisma.PaymentBatchUncheckedCreateWithoutLinesInput>;
};
export type PaymentBatchUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutLinesInput, Prisma.PaymentBatchUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.PaymentBatchCreateWithoutLinesInput, Prisma.PaymentBatchUncheckedCreateWithoutLinesInput>;
    where?: Prisma.PaymentBatchWhereInput;
};
export type PaymentBatchUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.PaymentBatchWhereInput;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateWithoutLinesInput, Prisma.PaymentBatchUncheckedUpdateWithoutLinesInput>;
};
export type PaymentBatchUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPaymentBatchesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentBatchesCreatedNestedInput;
};
export type PaymentBatchUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentBatchCreateManyCreatedByInput = {
    id?: string;
    batchNumber: string;
    ledgerEntityCode: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
};
export type PaymentBatchUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPaymentBatchesNestedInput;
    lines?: Prisma.PaymentBatchLineUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentBatchCreateManyLedgerEntityInput = {
    id?: string;
    batchNumber: string;
    totalAmountKobo: bigint | number;
    status?: $Enums.PaymentBatchStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    paidAt?: Date | string | null;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
};
export type PaymentBatchUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentBatchesCreatedNestedInput;
    lines?: Prisma.PaymentBatchLineUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutPaymentBatchNestedInput;
};
export type PaymentBatchUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPaymentBatchStatusFieldUpdateOperationsInput | $Enums.PaymentBatchStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentBatchCountOutputType = {
    lines: number;
};
export type PaymentBatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | PaymentBatchCountOutputTypeCountLinesArgs;
};
export type PaymentBatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentBatchCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchLineWhereInput;
};
export type PaymentBatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    ledgerEntityCode?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    paidAt?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PaymentBatch$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentBatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatch"]>;
export type PaymentBatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    ledgerEntityCode?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    paidAt?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatch"]>;
export type PaymentBatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    ledgerEntityCode?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    paidAt?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentBatch"]>;
export type PaymentBatchSelectScalar = {
    id?: boolean;
    batchNumber?: boolean;
    ledgerEntityCode?: boolean;
    totalAmountKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    paidAt?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
};
export type PaymentBatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchNumber" | "ledgerEntityCode" | "totalAmountKobo" | "status" | "createdByUserId" | "createdAt" | "paidAt" | "journalEntryId" | "workflowInstanceId", ExtArgs["result"]["paymentBatch"]>;
export type PaymentBatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PaymentBatch$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentBatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentBatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type PaymentBatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $PaymentBatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentBatch";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        lines: Prisma.$PaymentBatchLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batchNumber: string;
        ledgerEntityCode: string;
        totalAmountKobo: bigint;
        status: $Enums.PaymentBatchStatus;
        createdByUserId: string;
        createdAt: Date;
        paidAt: Date | null;
        journalEntryId: string | null;
        workflowInstanceId: string | null;
    }, ExtArgs["result"]["paymentBatch"]>;
    composites: {};
};
export type PaymentBatchGetPayload<S extends boolean | null | undefined | PaymentBatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload, S>;
export type PaymentBatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentBatchCountAggregateInputType | true;
};
export interface PaymentBatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentBatch'];
        meta: {
            name: 'PaymentBatch';
        };
    };
    findUnique<T extends PaymentBatchFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentBatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentBatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentBatchFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentBatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentBatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentBatchFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentBatchCreateArgs>(args: Prisma.SelectSubset<T, PaymentBatchCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentBatchCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentBatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentBatchDeleteArgs>(args: Prisma.SelectSubset<T, PaymentBatchDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentBatchUpdateArgs>(args: Prisma.SelectSubset<T, PaymentBatchUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentBatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentBatchUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentBatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentBatchUpsertArgs>(args: Prisma.SelectSubset<T, PaymentBatchUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentBatchClient<runtime.Types.Result.GetResult<Prisma.$PaymentBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentBatchCountArgs>(args?: Prisma.Subset<T, PaymentBatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentBatchCountAggregateOutputType> : number>;
    aggregate<T extends PaymentBatchAggregateArgs>(args: Prisma.Subset<T, PaymentBatchAggregateArgs>): Prisma.PrismaPromise<GetPaymentBatchAggregateType<T>>;
    groupBy<T extends PaymentBatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentBatchGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentBatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentBatchFieldRefs;
}
export interface Prisma__PaymentBatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.PaymentBatch$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentBatch$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentBatchFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentBatch", 'String'>;
    readonly batchNumber: Prisma.FieldRef<"PaymentBatch", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PaymentBatch", 'String'>;
    readonly totalAmountKobo: Prisma.FieldRef<"PaymentBatch", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PaymentBatch", 'PaymentBatchStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"PaymentBatch", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PaymentBatch", 'DateTime'>;
    readonly paidAt: Prisma.FieldRef<"PaymentBatch", 'DateTime'>;
    readonly journalEntryId: Prisma.FieldRef<"PaymentBatch", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"PaymentBatch", 'String'>;
}
export type PaymentBatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchWhereUniqueInput;
};
export type PaymentBatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchWhereUniqueInput;
};
export type PaymentBatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchWhereInput;
    orderBy?: Prisma.PaymentBatchOrderByWithRelationInput | Prisma.PaymentBatchOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchScalarFieldEnum | Prisma.PaymentBatchScalarFieldEnum[];
};
export type PaymentBatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchWhereInput;
    orderBy?: Prisma.PaymentBatchOrderByWithRelationInput | Prisma.PaymentBatchOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchScalarFieldEnum | Prisma.PaymentBatchScalarFieldEnum[];
};
export type PaymentBatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchWhereInput;
    orderBy?: Prisma.PaymentBatchOrderByWithRelationInput | Prisma.PaymentBatchOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchScalarFieldEnum | Prisma.PaymentBatchScalarFieldEnum[];
};
export type PaymentBatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchCreateInput, Prisma.PaymentBatchUncheckedCreateInput>;
};
export type PaymentBatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentBatchCreateManyInput | Prisma.PaymentBatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentBatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    data: Prisma.PaymentBatchCreateManyInput | Prisma.PaymentBatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentBatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentBatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateInput, Prisma.PaymentBatchUncheckedUpdateInput>;
    where: Prisma.PaymentBatchWhereUniqueInput;
};
export type PaymentBatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentBatchUpdateManyMutationInput, Prisma.PaymentBatchUncheckedUpdateManyInput>;
    where?: Prisma.PaymentBatchWhereInput;
    limit?: number;
};
export type PaymentBatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentBatchUpdateManyMutationInput, Prisma.PaymentBatchUncheckedUpdateManyInput>;
    where?: Prisma.PaymentBatchWhereInput;
    limit?: number;
    include?: Prisma.PaymentBatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentBatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentBatchCreateInput, Prisma.PaymentBatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentBatchUpdateInput, Prisma.PaymentBatchUncheckedUpdateInput>;
};
export type PaymentBatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
    where: Prisma.PaymentBatchWhereUniqueInput;
};
export type PaymentBatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchWhereInput;
    limit?: number;
};
export type PaymentBatch$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentBatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchInclude<ExtArgs> | null;
};
