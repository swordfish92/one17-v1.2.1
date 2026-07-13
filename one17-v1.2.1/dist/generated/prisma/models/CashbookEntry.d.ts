import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashbookEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$CashbookEntryPayload>;
export type AggregateCashbookEntry = {
    _count: CashbookEntryCountAggregateOutputType | null;
    _avg: CashbookEntryAvgAggregateOutputType | null;
    _sum: CashbookEntrySumAggregateOutputType | null;
    _min: CashbookEntryMinAggregateOutputType | null;
    _max: CashbookEntryMaxAggregateOutputType | null;
};
export type CashbookEntryAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type CashbookEntrySumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type CashbookEntryMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    entryDate: Date | null;
    description: string | null;
    amountKobo: bigint | null;
    bankReference: string | null;
    reconciliationStatus: $Enums.CashbookReconciliationStatus | null;
    reconciledAt: Date | null;
    createdAt: Date | null;
};
export type CashbookEntryMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    entryDate: Date | null;
    description: string | null;
    amountKobo: bigint | null;
    bankReference: string | null;
    reconciliationStatus: $Enums.CashbookReconciliationStatus | null;
    reconciledAt: Date | null;
    createdAt: Date | null;
};
export type CashbookEntryCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    entryDate: number;
    description: number;
    amountKobo: number;
    bankReference: number;
    reconciliationStatus: number;
    reconciledAt: number;
    createdAt: number;
    _all: number;
};
export type CashbookEntryAvgAggregateInputType = {
    amountKobo?: true;
};
export type CashbookEntrySumAggregateInputType = {
    amountKobo?: true;
};
export type CashbookEntryMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    entryDate?: true;
    description?: true;
    amountKobo?: true;
    bankReference?: true;
    reconciliationStatus?: true;
    reconciledAt?: true;
    createdAt?: true;
};
export type CashbookEntryMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    entryDate?: true;
    description?: true;
    amountKobo?: true;
    bankReference?: true;
    reconciliationStatus?: true;
    reconciledAt?: true;
    createdAt?: true;
};
export type CashbookEntryCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    entryDate?: true;
    description?: true;
    amountKobo?: true;
    bankReference?: true;
    reconciliationStatus?: true;
    reconciledAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CashbookEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashbookEntryWhereInput;
    orderBy?: Prisma.CashbookEntryOrderByWithRelationInput | Prisma.CashbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.CashbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashbookEntryCountAggregateInputType;
    _avg?: CashbookEntryAvgAggregateInputType;
    _sum?: CashbookEntrySumAggregateInputType;
    _min?: CashbookEntryMinAggregateInputType;
    _max?: CashbookEntryMaxAggregateInputType;
};
export type GetCashbookEntryAggregateType<T extends CashbookEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateCashbookEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashbookEntry[P]> : Prisma.GetScalarType<T[P], AggregateCashbookEntry[P]>;
};
export type CashbookEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashbookEntryWhereInput;
    orderBy?: Prisma.CashbookEntryOrderByWithAggregationInput | Prisma.CashbookEntryOrderByWithAggregationInput[];
    by: Prisma.CashbookEntryScalarFieldEnum[] | Prisma.CashbookEntryScalarFieldEnum;
    having?: Prisma.CashbookEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashbookEntryCountAggregateInputType | true;
    _avg?: CashbookEntryAvgAggregateInputType;
    _sum?: CashbookEntrySumAggregateInputType;
    _min?: CashbookEntryMinAggregateInputType;
    _max?: CashbookEntryMaxAggregateInputType;
};
export type CashbookEntryGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    entryDate: Date;
    description: string;
    amountKobo: bigint;
    bankReference: string | null;
    reconciliationStatus: $Enums.CashbookReconciliationStatus;
    reconciledAt: Date | null;
    createdAt: Date;
    _count: CashbookEntryCountAggregateOutputType | null;
    _avg: CashbookEntryAvgAggregateOutputType | null;
    _sum: CashbookEntrySumAggregateOutputType | null;
    _min: CashbookEntryMinAggregateOutputType | null;
    _max: CashbookEntryMaxAggregateOutputType | null;
};
export type GetCashbookEntryGroupByPayload<T extends CashbookEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashbookEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashbookEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashbookEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashbookEntryGroupByOutputType[P]>;
}>>;
export type CashbookEntryWhereInput = {
    AND?: Prisma.CashbookEntryWhereInput | Prisma.CashbookEntryWhereInput[];
    OR?: Prisma.CashbookEntryWhereInput[];
    NOT?: Prisma.CashbookEntryWhereInput | Prisma.CashbookEntryWhereInput[];
    id?: Prisma.UuidFilter<"CashbookEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"CashbookEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
    description?: Prisma.StringFilter<"CashbookEntry"> | string;
    amountKobo?: Prisma.BigIntFilter<"CashbookEntry"> | bigint | number;
    bankReference?: Prisma.StringNullableFilter<"CashbookEntry"> | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFilter<"CashbookEntry"> | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CashbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
};
export type CashbookEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    bankReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    reconciliationStatus?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
};
export type CashbookEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CashbookEntryWhereInput | Prisma.CashbookEntryWhereInput[];
    OR?: Prisma.CashbookEntryWhereInput[];
    NOT?: Prisma.CashbookEntryWhereInput | Prisma.CashbookEntryWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"CashbookEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
    description?: Prisma.StringFilter<"CashbookEntry"> | string;
    amountKobo?: Prisma.BigIntFilter<"CashbookEntry"> | bigint | number;
    bankReference?: Prisma.StringNullableFilter<"CashbookEntry"> | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFilter<"CashbookEntry"> | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CashbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
}, "id">;
export type CashbookEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    bankReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    reconciliationStatus?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CashbookEntryCountOrderByAggregateInput;
    _avg?: Prisma.CashbookEntryAvgOrderByAggregateInput;
    _max?: Prisma.CashbookEntryMaxOrderByAggregateInput;
    _min?: Prisma.CashbookEntryMinOrderByAggregateInput;
    _sum?: Prisma.CashbookEntrySumOrderByAggregateInput;
};
export type CashbookEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashbookEntryScalarWhereWithAggregatesInput | Prisma.CashbookEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashbookEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashbookEntryScalarWhereWithAggregatesInput | Prisma.CashbookEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CashbookEntry"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"CashbookEntry"> | string;
    entryDate?: Prisma.DateTimeWithAggregatesFilter<"CashbookEntry"> | Date | string;
    description?: Prisma.StringWithAggregatesFilter<"CashbookEntry"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"CashbookEntry"> | bigint | number;
    bankReference?: Prisma.StringNullableWithAggregatesFilter<"CashbookEntry"> | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusWithAggregatesFilter<"CashbookEntry"> | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CashbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CashbookEntry"> | Date | string;
};
export type CashbookEntryCreateInput = {
    id?: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutCashbookEntriesInput;
};
export type CashbookEntryUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CashbookEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutCashbookEntriesNestedInput;
};
export type CashbookEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntryCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CashbookEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntryListRelationFilter = {
    every?: Prisma.CashbookEntryWhereInput;
    some?: Prisma.CashbookEntryWhereInput;
    none?: Prisma.CashbookEntryWhereInput;
};
export type CashbookEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashbookEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    bankReference?: Prisma.SortOrder;
    reconciliationStatus?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CashbookEntryAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CashbookEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    bankReference?: Prisma.SortOrder;
    reconciliationStatus?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CashbookEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    bankReference?: Prisma.SortOrder;
    reconciliationStatus?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CashbookEntrySumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CashbookEntryCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.CashbookEntryCreateWithoutLedgerEntityInput[] | Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.CashbookEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
};
export type CashbookEntryUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.CashbookEntryCreateWithoutLedgerEntityInput[] | Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.CashbookEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
};
export type CashbookEntryUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.CashbookEntryCreateWithoutLedgerEntityInput[] | Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.CashbookEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.CashbookEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.CashbookEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    disconnect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    delete?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    connect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    update?: Prisma.CashbookEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.CashbookEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.CashbookEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.CashbookEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.CashbookEntryScalarWhereInput | Prisma.CashbookEntryScalarWhereInput[];
};
export type CashbookEntryUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.CashbookEntryCreateWithoutLedgerEntityInput[] | Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.CashbookEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.CashbookEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.CashbookEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.CashbookEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    disconnect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    delete?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    connect?: Prisma.CashbookEntryWhereUniqueInput | Prisma.CashbookEntryWhereUniqueInput[];
    update?: Prisma.CashbookEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.CashbookEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.CashbookEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.CashbookEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.CashbookEntryScalarWhereInput | Prisma.CashbookEntryScalarWhereInput[];
};
export type EnumCashbookReconciliationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CashbookReconciliationStatus;
};
export type CashbookEntryCreateWithoutLedgerEntityInput = {
    id?: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CashbookEntryUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CashbookEntryCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.CashbookEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type CashbookEntryCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.CashbookEntryCreateManyLedgerEntityInput | Prisma.CashbookEntryCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type CashbookEntryUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.CashbookEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashbookEntryUpdateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.CashbookEntryCreateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type CashbookEntryUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.CashbookEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashbookEntryUpdateWithoutLedgerEntityInput, Prisma.CashbookEntryUncheckedUpdateWithoutLedgerEntityInput>;
};
export type CashbookEntryUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.CashbookEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.CashbookEntryUpdateManyMutationInput, Prisma.CashbookEntryUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type CashbookEntryScalarWhereInput = {
    AND?: Prisma.CashbookEntryScalarWhereInput | Prisma.CashbookEntryScalarWhereInput[];
    OR?: Prisma.CashbookEntryScalarWhereInput[];
    NOT?: Prisma.CashbookEntryScalarWhereInput | Prisma.CashbookEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"CashbookEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"CashbookEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
    description?: Prisma.StringFilter<"CashbookEntry"> | string;
    amountKobo?: Prisma.BigIntFilter<"CashbookEntry"> | bigint | number;
    bankReference?: Prisma.StringNullableFilter<"CashbookEntry"> | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFilter<"CashbookEntry"> | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CashbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashbookEntry"> | Date | string;
};
export type CashbookEntryCreateManyLedgerEntityInput = {
    id?: string;
    entryDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    bankReference?: string | null;
    reconciliationStatus?: $Enums.CashbookReconciliationStatus;
    reconciledAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CashbookEntryUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntryUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntryUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bankReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reconciliationStatus?: Prisma.EnumCashbookReconciliationStatusFieldUpdateOperationsInput | $Enums.CashbookReconciliationStatus;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashbookEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    entryDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    bankReference?: boolean;
    reconciliationStatus?: boolean;
    reconciledAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashbookEntry"]>;
export type CashbookEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    entryDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    bankReference?: boolean;
    reconciliationStatus?: boolean;
    reconciledAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashbookEntry"]>;
export type CashbookEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    entryDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    bankReference?: boolean;
    reconciliationStatus?: boolean;
    reconciledAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashbookEntry"]>;
export type CashbookEntrySelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    entryDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    bankReference?: boolean;
    reconciliationStatus?: boolean;
    reconciledAt?: boolean;
    createdAt?: boolean;
};
export type CashbookEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "entryDate" | "description" | "amountKobo" | "bankReference" | "reconciliationStatus" | "reconciledAt" | "createdAt", ExtArgs["result"]["cashbookEntry"]>;
export type CashbookEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type CashbookEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type CashbookEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $CashbookEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashbookEntry";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        entryDate: Date;
        description: string;
        amountKobo: bigint;
        bankReference: string | null;
        reconciliationStatus: $Enums.CashbookReconciliationStatus;
        reconciledAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["cashbookEntry"]>;
    composites: {};
};
export type CashbookEntryGetPayload<S extends boolean | null | undefined | CashbookEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload, S>;
export type CashbookEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashbookEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashbookEntryCountAggregateInputType | true;
};
export interface CashbookEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashbookEntry'];
        meta: {
            name: 'CashbookEntry';
        };
    };
    findUnique<T extends CashbookEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, CashbookEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashbookEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashbookEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashbookEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, CashbookEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashbookEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashbookEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashbookEntryFindManyArgs>(args?: Prisma.SelectSubset<T, CashbookEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashbookEntryCreateArgs>(args: Prisma.SelectSubset<T, CashbookEntryCreateArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashbookEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, CashbookEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashbookEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashbookEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashbookEntryDeleteArgs>(args: Prisma.SelectSubset<T, CashbookEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashbookEntryUpdateArgs>(args: Prisma.SelectSubset<T, CashbookEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashbookEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashbookEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashbookEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, CashbookEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashbookEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashbookEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashbookEntryUpsertArgs>(args: Prisma.SelectSubset<T, CashbookEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__CashbookEntryClient<runtime.Types.Result.GetResult<Prisma.$CashbookEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashbookEntryCountArgs>(args?: Prisma.Subset<T, CashbookEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashbookEntryCountAggregateOutputType> : number>;
    aggregate<T extends CashbookEntryAggregateArgs>(args: Prisma.Subset<T, CashbookEntryAggregateArgs>): Prisma.PrismaPromise<GetCashbookEntryAggregateType<T>>;
    groupBy<T extends CashbookEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashbookEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: CashbookEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashbookEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashbookEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashbookEntryFieldRefs;
}
export interface Prisma__CashbookEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashbookEntryFieldRefs {
    readonly id: Prisma.FieldRef<"CashbookEntry", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"CashbookEntry", 'String'>;
    readonly entryDate: Prisma.FieldRef<"CashbookEntry", 'DateTime'>;
    readonly description: Prisma.FieldRef<"CashbookEntry", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"CashbookEntry", 'BigInt'>;
    readonly bankReference: Prisma.FieldRef<"CashbookEntry", 'String'>;
    readonly reconciliationStatus: Prisma.FieldRef<"CashbookEntry", 'CashbookReconciliationStatus'>;
    readonly reconciledAt: Prisma.FieldRef<"CashbookEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CashbookEntry", 'DateTime'>;
}
export type CashbookEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where: Prisma.CashbookEntryWhereUniqueInput;
};
export type CashbookEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where: Prisma.CashbookEntryWhereUniqueInput;
};
export type CashbookEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where?: Prisma.CashbookEntryWhereInput;
    orderBy?: Prisma.CashbookEntryOrderByWithRelationInput | Prisma.CashbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.CashbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashbookEntryScalarFieldEnum | Prisma.CashbookEntryScalarFieldEnum[];
};
export type CashbookEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where?: Prisma.CashbookEntryWhereInput;
    orderBy?: Prisma.CashbookEntryOrderByWithRelationInput | Prisma.CashbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.CashbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashbookEntryScalarFieldEnum | Prisma.CashbookEntryScalarFieldEnum[];
};
export type CashbookEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where?: Prisma.CashbookEntryWhereInput;
    orderBy?: Prisma.CashbookEntryOrderByWithRelationInput | Prisma.CashbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.CashbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashbookEntryScalarFieldEnum | Prisma.CashbookEntryScalarFieldEnum[];
};
export type CashbookEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashbookEntryCreateInput, Prisma.CashbookEntryUncheckedCreateInput>;
};
export type CashbookEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashbookEntryCreateManyInput | Prisma.CashbookEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashbookEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    data: Prisma.CashbookEntryCreateManyInput | Prisma.CashbookEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashbookEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashbookEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashbookEntryUpdateInput, Prisma.CashbookEntryUncheckedUpdateInput>;
    where: Prisma.CashbookEntryWhereUniqueInput;
};
export type CashbookEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashbookEntryUpdateManyMutationInput, Prisma.CashbookEntryUncheckedUpdateManyInput>;
    where?: Prisma.CashbookEntryWhereInput;
    limit?: number;
};
export type CashbookEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashbookEntryUpdateManyMutationInput, Prisma.CashbookEntryUncheckedUpdateManyInput>;
    where?: Prisma.CashbookEntryWhereInput;
    limit?: number;
    include?: Prisma.CashbookEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashbookEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where: Prisma.CashbookEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashbookEntryCreateInput, Prisma.CashbookEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashbookEntryUpdateInput, Prisma.CashbookEntryUncheckedUpdateInput>;
};
export type CashbookEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
    where: Prisma.CashbookEntryWhereUniqueInput;
};
export type CashbookEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashbookEntryWhereInput;
    limit?: number;
};
export type CashbookEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.CashbookEntryOmit<ExtArgs> | null;
    include?: Prisma.CashbookEntryInclude<ExtArgs> | null;
};
