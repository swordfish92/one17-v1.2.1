import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JournalEntryLineModel = runtime.Types.Result.DefaultSelection<Prisma.$JournalEntryLinePayload>;
export type AggregateJournalEntryLine = {
    _count: JournalEntryLineCountAggregateOutputType | null;
    _avg: JournalEntryLineAvgAggregateOutputType | null;
    _sum: JournalEntryLineSumAggregateOutputType | null;
    _min: JournalEntryLineMinAggregateOutputType | null;
    _max: JournalEntryLineMaxAggregateOutputType | null;
};
export type JournalEntryLineAvgAggregateOutputType = {
    debitKobo: number | null;
    creditKobo: number | null;
};
export type JournalEntryLineSumAggregateOutputType = {
    debitKobo: bigint | null;
    creditKobo: bigint | null;
};
export type JournalEntryLineMinAggregateOutputType = {
    id: string | null;
    journalEntryId: string | null;
    accountId: string | null;
    debitKobo: bigint | null;
    creditKobo: bigint | null;
    description: string | null;
};
export type JournalEntryLineMaxAggregateOutputType = {
    id: string | null;
    journalEntryId: string | null;
    accountId: string | null;
    debitKobo: bigint | null;
    creditKobo: bigint | null;
    description: string | null;
};
export type JournalEntryLineCountAggregateOutputType = {
    id: number;
    journalEntryId: number;
    accountId: number;
    debitKobo: number;
    creditKobo: number;
    description: number;
    _all: number;
};
export type JournalEntryLineAvgAggregateInputType = {
    debitKobo?: true;
    creditKobo?: true;
};
export type JournalEntryLineSumAggregateInputType = {
    debitKobo?: true;
    creditKobo?: true;
};
export type JournalEntryLineMinAggregateInputType = {
    id?: true;
    journalEntryId?: true;
    accountId?: true;
    debitKobo?: true;
    creditKobo?: true;
    description?: true;
};
export type JournalEntryLineMaxAggregateInputType = {
    id?: true;
    journalEntryId?: true;
    accountId?: true;
    debitKobo?: true;
    creditKobo?: true;
    description?: true;
};
export type JournalEntryLineCountAggregateInputType = {
    id?: true;
    journalEntryId?: true;
    accountId?: true;
    debitKobo?: true;
    creditKobo?: true;
    description?: true;
    _all?: true;
};
export type JournalEntryLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithRelationInput | Prisma.JournalEntryLineOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JournalEntryLineCountAggregateInputType;
    _avg?: JournalEntryLineAvgAggregateInputType;
    _sum?: JournalEntryLineSumAggregateInputType;
    _min?: JournalEntryLineMinAggregateInputType;
    _max?: JournalEntryLineMaxAggregateInputType;
};
export type GetJournalEntryLineAggregateType<T extends JournalEntryLineAggregateArgs> = {
    [P in keyof T & keyof AggregateJournalEntryLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJournalEntryLine[P]> : Prisma.GetScalarType<T[P], AggregateJournalEntryLine[P]>;
};
export type JournalEntryLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithAggregationInput | Prisma.JournalEntryLineOrderByWithAggregationInput[];
    by: Prisma.JournalEntryLineScalarFieldEnum[] | Prisma.JournalEntryLineScalarFieldEnum;
    having?: Prisma.JournalEntryLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JournalEntryLineCountAggregateInputType | true;
    _avg?: JournalEntryLineAvgAggregateInputType;
    _sum?: JournalEntryLineSumAggregateInputType;
    _min?: JournalEntryLineMinAggregateInputType;
    _max?: JournalEntryLineMaxAggregateInputType;
};
export type JournalEntryLineGroupByOutputType = {
    id: string;
    journalEntryId: string;
    accountId: string;
    debitKobo: bigint;
    creditKobo: bigint;
    description: string | null;
    _count: JournalEntryLineCountAggregateOutputType | null;
    _avg: JournalEntryLineAvgAggregateOutputType | null;
    _sum: JournalEntryLineSumAggregateOutputType | null;
    _min: JournalEntryLineMinAggregateOutputType | null;
    _max: JournalEntryLineMaxAggregateOutputType | null;
};
export type GetJournalEntryLineGroupByPayload<T extends JournalEntryLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JournalEntryLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JournalEntryLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JournalEntryLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JournalEntryLineGroupByOutputType[P]>;
}>>;
export type JournalEntryLineWhereInput = {
    AND?: Prisma.JournalEntryLineWhereInput | Prisma.JournalEntryLineWhereInput[];
    OR?: Prisma.JournalEntryLineWhereInput[];
    NOT?: Prisma.JournalEntryLineWhereInput | Prisma.JournalEntryLineWhereInput[];
    id?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    journalEntryId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    accountId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    debitKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    creditKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    description?: Prisma.StringNullableFilter<"JournalEntryLine"> | string | null;
    journalEntry?: Prisma.XOR<Prisma.JournalEntryScalarRelationFilter, Prisma.JournalEntryWhereInput>;
    account?: Prisma.XOR<Prisma.ChartOfAccountScalarRelationFilter, Prisma.ChartOfAccountWhereInput>;
    bankStatementLineMatch?: Prisma.XOR<Prisma.BankStatementLineNullableScalarRelationFilter, Prisma.BankStatementLineWhereInput> | null;
};
export type JournalEntryLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalEntry?: Prisma.JournalEntryOrderByWithRelationInput;
    account?: Prisma.ChartOfAccountOrderByWithRelationInput;
    bankStatementLineMatch?: Prisma.BankStatementLineOrderByWithRelationInput;
};
export type JournalEntryLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JournalEntryLineWhereInput | Prisma.JournalEntryLineWhereInput[];
    OR?: Prisma.JournalEntryLineWhereInput[];
    NOT?: Prisma.JournalEntryLineWhereInput | Prisma.JournalEntryLineWhereInput[];
    journalEntryId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    accountId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    debitKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    creditKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    description?: Prisma.StringNullableFilter<"JournalEntryLine"> | string | null;
    journalEntry?: Prisma.XOR<Prisma.JournalEntryScalarRelationFilter, Prisma.JournalEntryWhereInput>;
    account?: Prisma.XOR<Prisma.ChartOfAccountScalarRelationFilter, Prisma.ChartOfAccountWhereInput>;
    bankStatementLineMatch?: Prisma.XOR<Prisma.BankStatementLineNullableScalarRelationFilter, Prisma.BankStatementLineWhereInput> | null;
}, "id">;
export type JournalEntryLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.JournalEntryLineCountOrderByAggregateInput;
    _avg?: Prisma.JournalEntryLineAvgOrderByAggregateInput;
    _max?: Prisma.JournalEntryLineMaxOrderByAggregateInput;
    _min?: Prisma.JournalEntryLineMinOrderByAggregateInput;
    _sum?: Prisma.JournalEntryLineSumOrderByAggregateInput;
};
export type JournalEntryLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.JournalEntryLineScalarWhereWithAggregatesInput | Prisma.JournalEntryLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.JournalEntryLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JournalEntryLineScalarWhereWithAggregatesInput | Prisma.JournalEntryLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"JournalEntryLine"> | string;
    journalEntryId?: Prisma.UuidWithAggregatesFilter<"JournalEntryLine"> | string;
    accountId?: Prisma.UuidWithAggregatesFilter<"JournalEntryLine"> | string;
    debitKobo?: Prisma.BigIntWithAggregatesFilter<"JournalEntryLine"> | bigint | number;
    creditKobo?: Prisma.BigIntWithAggregatesFilter<"JournalEntryLine"> | bigint | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"JournalEntryLine"> | string | null;
};
export type JournalEntryLineCreateInput = {
    id?: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    journalEntry: Prisma.JournalEntryCreateNestedOneWithoutLinesInput;
    account: Prisma.ChartOfAccountCreateNestedOneWithoutJournalLinesInput;
    bankStatementLineMatch?: Prisma.BankStatementLineCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineUncheckedCreateInput = {
    id?: string;
    journalEntryId: string;
    accountId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journalEntry?: Prisma.JournalEntryUpdateOneRequiredWithoutLinesNestedInput;
    account?: Prisma.ChartOfAccountUpdateOneRequiredWithoutJournalLinesNestedInput;
    bankStatementLineMatch?: Prisma.BankStatementLineUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineCreateManyInput = {
    id?: string;
    journalEntryId: string;
    accountId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
};
export type JournalEntryLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JournalEntryLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JournalEntryLineNullableScalarRelationFilter = {
    is?: Prisma.JournalEntryLineWhereInput | null;
    isNot?: Prisma.JournalEntryLineWhereInput | null;
};
export type JournalEntryLineListRelationFilter = {
    every?: Prisma.JournalEntryLineWhereInput;
    some?: Prisma.JournalEntryLineWhereInput;
    none?: Prisma.JournalEntryLineWhereInput;
};
export type JournalEntryLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JournalEntryLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type JournalEntryLineAvgOrderByAggregateInput = {
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
};
export type JournalEntryLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type JournalEntryLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type JournalEntryLineSumOrderByAggregateInput = {
    debitKobo?: Prisma.SortOrder;
    creditKobo?: Prisma.SortOrder;
};
export type JournalEntryLineCreateNestedOneWithoutBankStatementLineMatchInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedCreateWithoutBankStatementLineMatchInput>;
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutBankStatementLineMatchInput;
    connect?: Prisma.JournalEntryLineWhereUniqueInput;
};
export type JournalEntryLineUpdateOneWithoutBankStatementLineMatchNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedCreateWithoutBankStatementLineMatchInput>;
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutBankStatementLineMatchInput;
    upsert?: Prisma.JournalEntryLineUpsertWithoutBankStatementLineMatchInput;
    disconnect?: Prisma.JournalEntryLineWhereInput | boolean;
    delete?: Prisma.JournalEntryLineWhereInput | boolean;
    connect?: Prisma.JournalEntryLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JournalEntryLineUpdateToOneWithWhereWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUpdateWithoutBankStatementLineMatchInput>, Prisma.JournalEntryLineUncheckedUpdateWithoutBankStatementLineMatchInput>;
};
export type JournalEntryLineCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput> | Prisma.JournalEntryLineCreateWithoutAccountInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput | Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.JournalEntryLineCreateManyAccountInputEnvelope;
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
};
export type JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput> | Prisma.JournalEntryLineCreateWithoutAccountInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput | Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.JournalEntryLineCreateManyAccountInputEnvelope;
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
};
export type JournalEntryLineUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput> | Prisma.JournalEntryLineCreateWithoutAccountInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput | Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput | Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.JournalEntryLineCreateManyAccountInputEnvelope;
    set?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    delete?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    update?: Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput | Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.JournalEntryLineUpdateManyWithWhereWithoutAccountInput | Prisma.JournalEntryLineUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
};
export type JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput> | Prisma.JournalEntryLineCreateWithoutAccountInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput | Prisma.JournalEntryLineCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput | Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.JournalEntryLineCreateManyAccountInputEnvelope;
    set?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    delete?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    update?: Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput | Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.JournalEntryLineUpdateManyWithWhereWithoutAccountInput | Prisma.JournalEntryLineUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
};
export type JournalEntryLineCreateNestedManyWithoutJournalEntryInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | Prisma.JournalEntryLineCreateWithoutJournalEntryInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput | Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput[];
    createMany?: Prisma.JournalEntryLineCreateManyJournalEntryInputEnvelope;
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
};
export type JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | Prisma.JournalEntryLineCreateWithoutJournalEntryInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput | Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput[];
    createMany?: Prisma.JournalEntryLineCreateManyJournalEntryInputEnvelope;
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
};
export type JournalEntryLineUpdateManyWithoutJournalEntryNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | Prisma.JournalEntryLineCreateWithoutJournalEntryInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput | Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput[];
    upsert?: Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput | Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput[];
    createMany?: Prisma.JournalEntryLineCreateManyJournalEntryInputEnvelope;
    set?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    delete?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    update?: Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput | Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput[];
    updateMany?: Prisma.JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput | Prisma.JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput[];
    deleteMany?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
};
export type JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | Prisma.JournalEntryLineCreateWithoutJournalEntryInput[] | Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput[];
    connectOrCreate?: Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput | Prisma.JournalEntryLineCreateOrConnectWithoutJournalEntryInput[];
    upsert?: Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput | Prisma.JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput[];
    createMany?: Prisma.JournalEntryLineCreateManyJournalEntryInputEnvelope;
    set?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    delete?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    connect?: Prisma.JournalEntryLineWhereUniqueInput | Prisma.JournalEntryLineWhereUniqueInput[];
    update?: Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput | Prisma.JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput[];
    updateMany?: Prisma.JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput | Prisma.JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput[];
    deleteMany?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
};
export type JournalEntryLineCreateWithoutBankStatementLineMatchInput = {
    id?: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    journalEntry: Prisma.JournalEntryCreateNestedOneWithoutLinesInput;
    account: Prisma.ChartOfAccountCreateNestedOneWithoutJournalLinesInput;
};
export type JournalEntryLineUncheckedCreateWithoutBankStatementLineMatchInput = {
    id?: string;
    journalEntryId: string;
    accountId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
};
export type JournalEntryLineCreateOrConnectWithoutBankStatementLineMatchInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedCreateWithoutBankStatementLineMatchInput>;
};
export type JournalEntryLineUpsertWithoutBankStatementLineMatchInput = {
    update: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedUpdateWithoutBankStatementLineMatchInput>;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedCreateWithoutBankStatementLineMatchInput>;
    where?: Prisma.JournalEntryLineWhereInput;
};
export type JournalEntryLineUpdateToOneWithWhereWithoutBankStatementLineMatchInput = {
    where?: Prisma.JournalEntryLineWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutBankStatementLineMatchInput, Prisma.JournalEntryLineUncheckedUpdateWithoutBankStatementLineMatchInput>;
};
export type JournalEntryLineUpdateWithoutBankStatementLineMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journalEntry?: Prisma.JournalEntryUpdateOneRequiredWithoutLinesNestedInput;
    account?: Prisma.ChartOfAccountUpdateOneRequiredWithoutJournalLinesNestedInput;
};
export type JournalEntryLineUncheckedUpdateWithoutBankStatementLineMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JournalEntryLineCreateWithoutAccountInput = {
    id?: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    journalEntry: Prisma.JournalEntryCreateNestedOneWithoutLinesInput;
    bankStatementLineMatch?: Prisma.BankStatementLineCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineUncheckedCreateWithoutAccountInput = {
    id?: string;
    journalEntryId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineCreateOrConnectWithoutAccountInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput>;
};
export type JournalEntryLineCreateManyAccountInputEnvelope = {
    data: Prisma.JournalEntryLineCreateManyAccountInput | Prisma.JournalEntryLineCreateManyAccountInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutAccountInput, Prisma.JournalEntryLineUncheckedUpdateWithoutAccountInput>;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutAccountInput, Prisma.JournalEntryLineUncheckedCreateWithoutAccountInput>;
};
export type JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutAccountInput, Prisma.JournalEntryLineUncheckedUpdateWithoutAccountInput>;
};
export type JournalEntryLineUpdateManyWithWhereWithoutAccountInput = {
    where: Prisma.JournalEntryLineScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateManyMutationInput, Prisma.JournalEntryLineUncheckedUpdateManyWithoutAccountInput>;
};
export type JournalEntryLineScalarWhereInput = {
    AND?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
    OR?: Prisma.JournalEntryLineScalarWhereInput[];
    NOT?: Prisma.JournalEntryLineScalarWhereInput | Prisma.JournalEntryLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    journalEntryId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    accountId?: Prisma.UuidFilter<"JournalEntryLine"> | string;
    debitKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    creditKobo?: Prisma.BigIntFilter<"JournalEntryLine"> | bigint | number;
    description?: Prisma.StringNullableFilter<"JournalEntryLine"> | string | null;
};
export type JournalEntryLineCreateWithoutJournalEntryInput = {
    id?: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    account: Prisma.ChartOfAccountCreateNestedOneWithoutJournalLinesInput;
    bankStatementLineMatch?: Prisma.BankStatementLineCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineUncheckedCreateWithoutJournalEntryInput = {
    id?: string;
    accountId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedCreateNestedOneWithoutMatchedJournalEntryLineInput;
};
export type JournalEntryLineCreateOrConnectWithoutJournalEntryInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput>;
};
export type JournalEntryLineCreateManyJournalEntryInputEnvelope = {
    data: Prisma.JournalEntryLineCreateManyJournalEntryInput | Prisma.JournalEntryLineCreateManyJournalEntryInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedUpdateWithoutJournalEntryInput>;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedCreateWithoutJournalEntryInput>;
};
export type JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput = {
    where: Prisma.JournalEntryLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateWithoutJournalEntryInput, Prisma.JournalEntryLineUncheckedUpdateWithoutJournalEntryInput>;
};
export type JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput = {
    where: Prisma.JournalEntryLineScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateManyMutationInput, Prisma.JournalEntryLineUncheckedUpdateManyWithoutJournalEntryInput>;
};
export type JournalEntryLineCreateManyAccountInput = {
    id?: string;
    journalEntryId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
};
export type JournalEntryLineUpdateWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journalEntry?: Prisma.JournalEntryUpdateOneRequiredWithoutLinesNestedInput;
    bankStatementLineMatch?: Prisma.BankStatementLineUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineUncheckedUpdateWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineUncheckedUpdateManyWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JournalEntryLineCreateManyJournalEntryInput = {
    id?: string;
    accountId: string;
    debitKobo?: bigint | number;
    creditKobo?: bigint | number;
    description?: string | null;
};
export type JournalEntryLineUpdateWithoutJournalEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    account?: Prisma.ChartOfAccountUpdateOneRequiredWithoutJournalLinesNestedInput;
    bankStatementLineMatch?: Prisma.BankStatementLineUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineUncheckedUpdateWithoutJournalEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankStatementLineMatch?: Prisma.BankStatementLineUncheckedUpdateOneWithoutMatchedJournalEntryLineNestedInput;
};
export type JournalEntryLineUncheckedUpdateManyWithoutJournalEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    debitKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creditKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JournalEntryLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journalEntryId?: boolean;
    accountId?: boolean;
    debitKobo?: boolean;
    creditKobo?: boolean;
    description?: boolean;
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    bankStatementLineMatch?: boolean | Prisma.JournalEntryLine$bankStatementLineMatchArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntryLine"]>;
export type JournalEntryLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journalEntryId?: boolean;
    accountId?: boolean;
    debitKobo?: boolean;
    creditKobo?: boolean;
    description?: boolean;
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntryLine"]>;
export type JournalEntryLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journalEntryId?: boolean;
    accountId?: boolean;
    debitKobo?: boolean;
    creditKobo?: boolean;
    description?: boolean;
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntryLine"]>;
export type JournalEntryLineSelectScalar = {
    id?: boolean;
    journalEntryId?: boolean;
    accountId?: boolean;
    debitKobo?: boolean;
    creditKobo?: boolean;
    description?: boolean;
};
export type JournalEntryLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "journalEntryId" | "accountId" | "debitKobo" | "creditKobo" | "description", ExtArgs["result"]["journalEntryLine"]>;
export type JournalEntryLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    bankStatementLineMatch?: boolean | Prisma.JournalEntryLine$bankStatementLineMatchArgs<ExtArgs>;
};
export type JournalEntryLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
};
export type JournalEntryLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journalEntry?: boolean | Prisma.JournalEntryDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
};
export type $JournalEntryLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JournalEntryLine";
    objects: {
        journalEntry: Prisma.$JournalEntryPayload<ExtArgs>;
        account: Prisma.$ChartOfAccountPayload<ExtArgs>;
        bankStatementLineMatch: Prisma.$BankStatementLinePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        journalEntryId: string;
        accountId: string;
        debitKobo: bigint;
        creditKobo: bigint;
        description: string | null;
    }, ExtArgs["result"]["journalEntryLine"]>;
    composites: {};
};
export type JournalEntryLineGetPayload<S extends boolean | null | undefined | JournalEntryLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload, S>;
export type JournalEntryLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JournalEntryLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JournalEntryLineCountAggregateInputType | true;
};
export interface JournalEntryLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JournalEntryLine'];
        meta: {
            name: 'JournalEntryLine';
        };
    };
    findUnique<T extends JournalEntryLineFindUniqueArgs>(args: Prisma.SelectSubset<T, JournalEntryLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JournalEntryLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JournalEntryLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JournalEntryLineFindFirstArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JournalEntryLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JournalEntryLineFindManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JournalEntryLineCreateArgs>(args: Prisma.SelectSubset<T, JournalEntryLineCreateArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JournalEntryLineCreateManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JournalEntryLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JournalEntryLineDeleteArgs>(args: Prisma.SelectSubset<T, JournalEntryLineDeleteArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JournalEntryLineUpdateArgs>(args: Prisma.SelectSubset<T, JournalEntryLineUpdateArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JournalEntryLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JournalEntryLineUpdateManyArgs>(args: Prisma.SelectSubset<T, JournalEntryLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JournalEntryLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JournalEntryLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JournalEntryLineUpsertArgs>(args: Prisma.SelectSubset<T, JournalEntryLineUpsertArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JournalEntryLineCountArgs>(args?: Prisma.Subset<T, JournalEntryLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JournalEntryLineCountAggregateOutputType> : number>;
    aggregate<T extends JournalEntryLineAggregateArgs>(args: Prisma.Subset<T, JournalEntryLineAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryLineAggregateType<T>>;
    groupBy<T extends JournalEntryLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JournalEntryLineGroupByArgs['orderBy'];
    } : {
        orderBy?: JournalEntryLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JournalEntryLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JournalEntryLineFieldRefs;
}
export interface Prisma__JournalEntryLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    journalEntry<T extends Prisma.JournalEntryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalEntryDefaultArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    account<T extends Prisma.ChartOfAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChartOfAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bankStatementLineMatch<T extends Prisma.JournalEntryLine$bankStatementLineMatchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalEntryLine$bankStatementLineMatchArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JournalEntryLineFieldRefs {
    readonly id: Prisma.FieldRef<"JournalEntryLine", 'String'>;
    readonly journalEntryId: Prisma.FieldRef<"JournalEntryLine", 'String'>;
    readonly accountId: Prisma.FieldRef<"JournalEntryLine", 'String'>;
    readonly debitKobo: Prisma.FieldRef<"JournalEntryLine", 'BigInt'>;
    readonly creditKobo: Prisma.FieldRef<"JournalEntryLine", 'BigInt'>;
    readonly description: Prisma.FieldRef<"JournalEntryLine", 'String'>;
}
export type JournalEntryLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where: Prisma.JournalEntryLineWhereUniqueInput;
};
export type JournalEntryLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where: Prisma.JournalEntryLineWhereUniqueInput;
};
export type JournalEntryLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithRelationInput | Prisma.JournalEntryLineOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryLineScalarFieldEnum | Prisma.JournalEntryLineScalarFieldEnum[];
};
export type JournalEntryLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithRelationInput | Prisma.JournalEntryLineOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryLineScalarFieldEnum | Prisma.JournalEntryLineScalarFieldEnum[];
};
export type JournalEntryLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithRelationInput | Prisma.JournalEntryLineOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryLineScalarFieldEnum | Prisma.JournalEntryLineScalarFieldEnum[];
};
export type JournalEntryLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryLineCreateInput, Prisma.JournalEntryLineUncheckedCreateInput>;
};
export type JournalEntryLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JournalEntryLineCreateManyInput | Prisma.JournalEntryLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    data: Prisma.JournalEntryLineCreateManyInput | Prisma.JournalEntryLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JournalEntryLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JournalEntryLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateInput, Prisma.JournalEntryLineUncheckedUpdateInput>;
    where: Prisma.JournalEntryLineWhereUniqueInput;
};
export type JournalEntryLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateManyMutationInput, Prisma.JournalEntryLineUncheckedUpdateManyInput>;
    where?: Prisma.JournalEntryLineWhereInput;
    limit?: number;
};
export type JournalEntryLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryLineUpdateManyMutationInput, Prisma.JournalEntryLineUncheckedUpdateManyInput>;
    where?: Prisma.JournalEntryLineWhereInput;
    limit?: number;
    include?: Prisma.JournalEntryLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JournalEntryLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where: Prisma.JournalEntryLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryLineCreateInput, Prisma.JournalEntryLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JournalEntryLineUpdateInput, Prisma.JournalEntryLineUncheckedUpdateInput>;
};
export type JournalEntryLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where: Prisma.JournalEntryLineWhereUniqueInput;
};
export type JournalEntryLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryLineWhereInput;
    limit?: number;
};
export type JournalEntryLine$bankStatementLineMatchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where?: Prisma.BankStatementLineWhereInput;
};
export type JournalEntryLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
};
