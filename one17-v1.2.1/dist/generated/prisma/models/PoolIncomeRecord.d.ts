import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PoolIncomeRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$PoolIncomeRecordPayload>;
export type AggregatePoolIncomeRecord = {
    _count: PoolIncomeRecordCountAggregateOutputType | null;
    _avg: PoolIncomeRecordAvgAggregateOutputType | null;
    _sum: PoolIncomeRecordSumAggregateOutputType | null;
    _min: PoolIncomeRecordMinAggregateOutputType | null;
    _max: PoolIncomeRecordMaxAggregateOutputType | null;
};
export type PoolIncomeRecordAvgAggregateOutputType = {
    incomeReceivedKobo: number | null;
    accruedIncomeKobo: number | null;
};
export type PoolIncomeRecordSumAggregateOutputType = {
    incomeReceivedKobo: bigint | null;
    accruedIncomeKobo: bigint | null;
};
export type PoolIncomeRecordMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    incomeReceivedKobo: bigint | null;
    accruedIncomeKobo: bigint | null;
    confirmedByUserId: string | null;
    createdAt: Date | null;
};
export type PoolIncomeRecordMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    incomeReceivedKobo: bigint | null;
    accruedIncomeKobo: bigint | null;
    confirmedByUserId: string | null;
    createdAt: Date | null;
};
export type PoolIncomeRecordCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    periodStart: number;
    periodEnd: number;
    incomeReceivedKobo: number;
    accruedIncomeKobo: number;
    confirmedByUserId: number;
    createdAt: number;
    _all: number;
};
export type PoolIncomeRecordAvgAggregateInputType = {
    incomeReceivedKobo?: true;
    accruedIncomeKobo?: true;
};
export type PoolIncomeRecordSumAggregateInputType = {
    incomeReceivedKobo?: true;
    accruedIncomeKobo?: true;
};
export type PoolIncomeRecordMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    incomeReceivedKobo?: true;
    accruedIncomeKobo?: true;
    confirmedByUserId?: true;
    createdAt?: true;
};
export type PoolIncomeRecordMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    incomeReceivedKobo?: true;
    accruedIncomeKobo?: true;
    confirmedByUserId?: true;
    createdAt?: true;
};
export type PoolIncomeRecordCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    incomeReceivedKobo?: true;
    accruedIncomeKobo?: true;
    confirmedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PoolIncomeRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoolIncomeRecordWhereInput;
    orderBy?: Prisma.PoolIncomeRecordOrderByWithRelationInput | Prisma.PoolIncomeRecordOrderByWithRelationInput[];
    cursor?: Prisma.PoolIncomeRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PoolIncomeRecordCountAggregateInputType;
    _avg?: PoolIncomeRecordAvgAggregateInputType;
    _sum?: PoolIncomeRecordSumAggregateInputType;
    _min?: PoolIncomeRecordMinAggregateInputType;
    _max?: PoolIncomeRecordMaxAggregateInputType;
};
export type GetPoolIncomeRecordAggregateType<T extends PoolIncomeRecordAggregateArgs> = {
    [P in keyof T & keyof AggregatePoolIncomeRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoolIncomeRecord[P]> : Prisma.GetScalarType<T[P], AggregatePoolIncomeRecord[P]>;
};
export type PoolIncomeRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoolIncomeRecordWhereInput;
    orderBy?: Prisma.PoolIncomeRecordOrderByWithAggregationInput | Prisma.PoolIncomeRecordOrderByWithAggregationInput[];
    by: Prisma.PoolIncomeRecordScalarFieldEnum[] | Prisma.PoolIncomeRecordScalarFieldEnum;
    having?: Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PoolIncomeRecordCountAggregateInputType | true;
    _avg?: PoolIncomeRecordAvgAggregateInputType;
    _sum?: PoolIncomeRecordSumAggregateInputType;
    _min?: PoolIncomeRecordMinAggregateInputType;
    _max?: PoolIncomeRecordMaxAggregateInputType;
};
export type PoolIncomeRecordGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    periodStart: Date;
    periodEnd: Date;
    incomeReceivedKobo: bigint;
    accruedIncomeKobo: bigint;
    confirmedByUserId: string;
    createdAt: Date;
    _count: PoolIncomeRecordCountAggregateOutputType | null;
    _avg: PoolIncomeRecordAvgAggregateOutputType | null;
    _sum: PoolIncomeRecordSumAggregateOutputType | null;
    _min: PoolIncomeRecordMinAggregateOutputType | null;
    _max: PoolIncomeRecordMaxAggregateOutputType | null;
};
export type GetPoolIncomeRecordGroupByPayload<T extends PoolIncomeRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PoolIncomeRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PoolIncomeRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PoolIncomeRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PoolIncomeRecordGroupByOutputType[P]>;
}>>;
export type PoolIncomeRecordWhereInput = {
    AND?: Prisma.PoolIncomeRecordWhereInput | Prisma.PoolIncomeRecordWhereInput[];
    OR?: Prisma.PoolIncomeRecordWhereInput[];
    NOT?: Prisma.PoolIncomeRecordWhereInput | Prisma.PoolIncomeRecordWhereInput[];
    id?: Prisma.UuidFilter<"PoolIncomeRecord"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PoolIncomeRecord"> | string;
    periodStart?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    confirmedByUserId?: Prisma.UuidFilter<"PoolIncomeRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    confirmedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type PoolIncomeRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    confirmedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type PoolIncomeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PoolIncomeRecordWhereInput | Prisma.PoolIncomeRecordWhereInput[];
    OR?: Prisma.PoolIncomeRecordWhereInput[];
    NOT?: Prisma.PoolIncomeRecordWhereInput | Prisma.PoolIncomeRecordWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"PoolIncomeRecord"> | string;
    periodStart?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    confirmedByUserId?: Prisma.UuidFilter<"PoolIncomeRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    confirmedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type PoolIncomeRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PoolIncomeRecordCountOrderByAggregateInput;
    _avg?: Prisma.PoolIncomeRecordAvgOrderByAggregateInput;
    _max?: Prisma.PoolIncomeRecordMaxOrderByAggregateInput;
    _min?: Prisma.PoolIncomeRecordMinOrderByAggregateInput;
    _sum?: Prisma.PoolIncomeRecordSumOrderByAggregateInput;
};
export type PoolIncomeRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput | Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput | Prisma.PoolIncomeRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PoolIncomeRecord"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PoolIncomeRecord"> | string;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"PoolIncomeRecord"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"PoolIncomeRecord"> | Date | string;
    incomeReceivedKobo?: Prisma.BigIntWithAggregatesFilter<"PoolIncomeRecord"> | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntWithAggregatesFilter<"PoolIncomeRecord"> | bigint | number;
    confirmedByUserId?: Prisma.UuidWithAggregatesFilter<"PoolIncomeRecord"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PoolIncomeRecord"> | Date | string;
};
export type PoolIncomeRecordCreateInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPoolIncomeRecordsInput;
    confirmedBy: Prisma.AppUserCreateNestedOneWithoutPoolIncomeRecordsConfirmedInput;
};
export type PoolIncomeRecordUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    confirmedByUserId: string;
    createdAt?: Date | string;
};
export type PoolIncomeRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPoolIncomeRecordsNestedInput;
    confirmedBy?: Prisma.AppUserUpdateOneRequiredWithoutPoolIncomeRecordsConfirmedNestedInput;
};
export type PoolIncomeRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    confirmedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    confirmedByUserId: string;
    createdAt?: Date | string;
};
export type PoolIncomeRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    confirmedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordListRelationFilter = {
    every?: Prisma.PoolIncomeRecordWhereInput;
    some?: Prisma.PoolIncomeRecordWhereInput;
    none?: Prisma.PoolIncomeRecordWhereInput;
};
export type PoolIncomeRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PoolIncomeRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PoolIncomeRecordAvgOrderByAggregateInput = {
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
};
export type PoolIncomeRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PoolIncomeRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PoolIncomeRecordSumOrderByAggregateInput = {
    incomeReceivedKobo?: Prisma.SortOrder;
    accruedIncomeKobo?: Prisma.SortOrder;
};
export type PoolIncomeRecordCreateNestedManyWithoutConfirmedByInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput> | Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyConfirmedByInputEnvelope;
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
};
export type PoolIncomeRecordUncheckedCreateNestedManyWithoutConfirmedByInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput> | Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyConfirmedByInputEnvelope;
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
};
export type PoolIncomeRecordUpdateManyWithoutConfirmedByNestedInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput> | Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput[];
    upsert?: Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutConfirmedByInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyConfirmedByInputEnvelope;
    set?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    disconnect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    delete?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    update?: Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutConfirmedByInput[];
    updateMany?: Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutConfirmedByInput[];
    deleteMany?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
};
export type PoolIncomeRecordUncheckedUpdateManyWithoutConfirmedByNestedInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput> | Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput[];
    upsert?: Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutConfirmedByInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyConfirmedByInputEnvelope;
    set?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    disconnect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    delete?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    update?: Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutConfirmedByInput[];
    updateMany?: Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutConfirmedByInput | Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutConfirmedByInput[];
    deleteMany?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
};
export type PoolIncomeRecordCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
};
export type PoolIncomeRecordUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
};
export type PoolIncomeRecordUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    disconnect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    delete?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    update?: Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
};
export type PoolIncomeRecordUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput[] | Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PoolIncomeRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    disconnect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    delete?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    connect?: Prisma.PoolIncomeRecordWhereUniqueInput | Prisma.PoolIncomeRecordWhereUniqueInput[];
    update?: Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PoolIncomeRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
};
export type PoolIncomeRecordCreateWithoutConfirmedByInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPoolIncomeRecordsInput;
};
export type PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    createdAt?: Date | string;
};
export type PoolIncomeRecordCreateOrConnectWithoutConfirmedByInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput>;
};
export type PoolIncomeRecordCreateManyConfirmedByInputEnvelope = {
    data: Prisma.PoolIncomeRecordCreateManyConfirmedByInput | Prisma.PoolIncomeRecordCreateManyConfirmedByInput[];
    skipDuplicates?: boolean;
};
export type PoolIncomeRecordUpsertWithWhereUniqueWithoutConfirmedByInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoolIncomeRecordUpdateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedUpdateWithoutConfirmedByInput>;
    create: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutConfirmedByInput>;
};
export type PoolIncomeRecordUpdateWithWhereUniqueWithoutConfirmedByInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateWithoutConfirmedByInput, Prisma.PoolIncomeRecordUncheckedUpdateWithoutConfirmedByInput>;
};
export type PoolIncomeRecordUpdateManyWithWhereWithoutConfirmedByInput = {
    where: Prisma.PoolIncomeRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateManyMutationInput, Prisma.PoolIncomeRecordUncheckedUpdateManyWithoutConfirmedByInput>;
};
export type PoolIncomeRecordScalarWhereInput = {
    AND?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
    OR?: Prisma.PoolIncomeRecordScalarWhereInput[];
    NOT?: Prisma.PoolIncomeRecordScalarWhereInput | Prisma.PoolIncomeRecordScalarWhereInput[];
    id?: Prisma.UuidFilter<"PoolIncomeRecord"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PoolIncomeRecord"> | string;
    periodStart?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFilter<"PoolIncomeRecord"> | bigint | number;
    confirmedByUserId?: Prisma.UuidFilter<"PoolIncomeRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"PoolIncomeRecord"> | Date | string;
};
export type PoolIncomeRecordCreateWithoutLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    createdAt?: Date | string;
    confirmedBy: Prisma.AppUserCreateNestedOneWithoutPoolIncomeRecordsConfirmedInput;
};
export type PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    confirmedByUserId: string;
    createdAt?: Date | string;
};
export type PoolIncomeRecordCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type PoolIncomeRecordCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PoolIncomeRecordCreateManyLedgerEntityInput | Prisma.PoolIncomeRecordCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PoolIncomeRecordUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoolIncomeRecordUpdateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PoolIncomeRecordCreateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type PoolIncomeRecordUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateWithoutLedgerEntityInput, Prisma.PoolIncomeRecordUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PoolIncomeRecordUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PoolIncomeRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateManyMutationInput, Prisma.PoolIncomeRecordUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PoolIncomeRecordCreateManyConfirmedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    createdAt?: Date | string;
};
export type PoolIncomeRecordUpdateWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPoolIncomeRecordsNestedInput;
};
export type PoolIncomeRecordUncheckedUpdateWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordUncheckedUpdateManyWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordCreateManyLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    incomeReceivedKobo: bigint | number;
    accruedIncomeKobo: bigint | number;
    confirmedByUserId: string;
    createdAt?: Date | string;
};
export type PoolIncomeRecordUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedBy?: Prisma.AppUserUpdateOneRequiredWithoutPoolIncomeRecordsConfirmedNestedInput;
};
export type PoolIncomeRecordUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    confirmedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incomeReceivedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedIncomeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    confirmedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoolIncomeRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    incomeReceivedKobo?: boolean;
    accruedIncomeKobo?: boolean;
    confirmedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poolIncomeRecord"]>;
export type PoolIncomeRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    incomeReceivedKobo?: boolean;
    accruedIncomeKobo?: boolean;
    confirmedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poolIncomeRecord"]>;
export type PoolIncomeRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    incomeReceivedKobo?: boolean;
    accruedIncomeKobo?: boolean;
    confirmedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poolIncomeRecord"]>;
export type PoolIncomeRecordSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    incomeReceivedKobo?: boolean;
    accruedIncomeKobo?: boolean;
    confirmedByUserId?: boolean;
    createdAt?: boolean;
};
export type PoolIncomeRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "periodStart" | "periodEnd" | "incomeReceivedKobo" | "accruedIncomeKobo" | "confirmedByUserId" | "createdAt", ExtArgs["result"]["poolIncomeRecord"]>;
export type PoolIncomeRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type PoolIncomeRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type PoolIncomeRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    confirmedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $PoolIncomeRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PoolIncomeRecord";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        confirmedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        periodStart: Date;
        periodEnd: Date;
        incomeReceivedKobo: bigint;
        accruedIncomeKobo: bigint;
        confirmedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["poolIncomeRecord"]>;
    composites: {};
};
export type PoolIncomeRecordGetPayload<S extends boolean | null | undefined | PoolIncomeRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload, S>;
export type PoolIncomeRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PoolIncomeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PoolIncomeRecordCountAggregateInputType | true;
};
export interface PoolIncomeRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PoolIncomeRecord'];
        meta: {
            name: 'PoolIncomeRecord';
        };
    };
    findUnique<T extends PoolIncomeRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PoolIncomeRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PoolIncomeRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PoolIncomeRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PoolIncomeRecordFindManyArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PoolIncomeRecordCreateArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordCreateArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PoolIncomeRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PoolIncomeRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PoolIncomeRecordDeleteArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PoolIncomeRecordUpdateArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PoolIncomeRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, PoolIncomeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PoolIncomeRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PoolIncomeRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PoolIncomeRecordUpsertArgs>(args: Prisma.SelectSubset<T, PoolIncomeRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__PoolIncomeRecordClient<runtime.Types.Result.GetResult<Prisma.$PoolIncomeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PoolIncomeRecordCountArgs>(args?: Prisma.Subset<T, PoolIncomeRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PoolIncomeRecordCountAggregateOutputType> : number>;
    aggregate<T extends PoolIncomeRecordAggregateArgs>(args: Prisma.Subset<T, PoolIncomeRecordAggregateArgs>): Prisma.PrismaPromise<GetPoolIncomeRecordAggregateType<T>>;
    groupBy<T extends PoolIncomeRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PoolIncomeRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: PoolIncomeRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PoolIncomeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolIncomeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PoolIncomeRecordFieldRefs;
}
export interface Prisma__PoolIncomeRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    confirmedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PoolIncomeRecordFieldRefs {
    readonly id: Prisma.FieldRef<"PoolIncomeRecord", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PoolIncomeRecord", 'String'>;
    readonly periodStart: Prisma.FieldRef<"PoolIncomeRecord", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"PoolIncomeRecord", 'DateTime'>;
    readonly incomeReceivedKobo: Prisma.FieldRef<"PoolIncomeRecord", 'BigInt'>;
    readonly accruedIncomeKobo: Prisma.FieldRef<"PoolIncomeRecord", 'BigInt'>;
    readonly confirmedByUserId: Prisma.FieldRef<"PoolIncomeRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PoolIncomeRecord", 'DateTime'>;
}
export type PoolIncomeRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
};
export type PoolIncomeRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
};
export type PoolIncomeRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where?: Prisma.PoolIncomeRecordWhereInput;
    orderBy?: Prisma.PoolIncomeRecordOrderByWithRelationInput | Prisma.PoolIncomeRecordOrderByWithRelationInput[];
    cursor?: Prisma.PoolIncomeRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoolIncomeRecordScalarFieldEnum | Prisma.PoolIncomeRecordScalarFieldEnum[];
};
export type PoolIncomeRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where?: Prisma.PoolIncomeRecordWhereInput;
    orderBy?: Prisma.PoolIncomeRecordOrderByWithRelationInput | Prisma.PoolIncomeRecordOrderByWithRelationInput[];
    cursor?: Prisma.PoolIncomeRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoolIncomeRecordScalarFieldEnum | Prisma.PoolIncomeRecordScalarFieldEnum[];
};
export type PoolIncomeRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where?: Prisma.PoolIncomeRecordWhereInput;
    orderBy?: Prisma.PoolIncomeRecordOrderByWithRelationInput | Prisma.PoolIncomeRecordOrderByWithRelationInput[];
    cursor?: Prisma.PoolIncomeRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoolIncomeRecordScalarFieldEnum | Prisma.PoolIncomeRecordScalarFieldEnum[];
};
export type PoolIncomeRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoolIncomeRecordCreateInput, Prisma.PoolIncomeRecordUncheckedCreateInput>;
};
export type PoolIncomeRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PoolIncomeRecordCreateManyInput | Prisma.PoolIncomeRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PoolIncomeRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    data: Prisma.PoolIncomeRecordCreateManyInput | Prisma.PoolIncomeRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PoolIncomeRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PoolIncomeRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateInput, Prisma.PoolIncomeRecordUncheckedUpdateInput>;
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
};
export type PoolIncomeRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateManyMutationInput, Prisma.PoolIncomeRecordUncheckedUpdateManyInput>;
    where?: Prisma.PoolIncomeRecordWhereInput;
    limit?: number;
};
export type PoolIncomeRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoolIncomeRecordUpdateManyMutationInput, Prisma.PoolIncomeRecordUncheckedUpdateManyInput>;
    where?: Prisma.PoolIncomeRecordWhereInput;
    limit?: number;
    include?: Prisma.PoolIncomeRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PoolIncomeRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoolIncomeRecordCreateInput, Prisma.PoolIncomeRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PoolIncomeRecordUpdateInput, Prisma.PoolIncomeRecordUncheckedUpdateInput>;
};
export type PoolIncomeRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
    where: Prisma.PoolIncomeRecordWhereUniqueInput;
};
export type PoolIncomeRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoolIncomeRecordWhereInput;
    limit?: number;
};
export type PoolIncomeRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoolIncomeRecordSelect<ExtArgs> | null;
    omit?: Prisma.PoolIncomeRecordOmit<ExtArgs> | null;
    include?: Prisma.PoolIncomeRecordInclude<ExtArgs> | null;
};
