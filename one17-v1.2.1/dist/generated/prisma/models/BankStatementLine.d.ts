import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BankStatementLineModel = runtime.Types.Result.DefaultSelection<Prisma.$BankStatementLinePayload>;
export type AggregateBankStatementLine = {
    _count: BankStatementLineCountAggregateOutputType | null;
    _avg: BankStatementLineAvgAggregateOutputType | null;
    _sum: BankStatementLineSumAggregateOutputType | null;
    _min: BankStatementLineMinAggregateOutputType | null;
    _max: BankStatementLineMaxAggregateOutputType | null;
};
export type BankStatementLineAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type BankStatementLineSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type BankStatementLineMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    glAccountCode: string | null;
    statementDate: Date | null;
    description: string | null;
    amountKobo: bigint | null;
    externalRef: string | null;
    status: $Enums.BankStatementLineStatus | null;
    matchedJournalEntryLineId: string | null;
    matchedByUserId: string | null;
    matchedAt: Date | null;
    uploadedByUserId: string | null;
    createdAt: Date | null;
};
export type BankStatementLineMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    glAccountCode: string | null;
    statementDate: Date | null;
    description: string | null;
    amountKobo: bigint | null;
    externalRef: string | null;
    status: $Enums.BankStatementLineStatus | null;
    matchedJournalEntryLineId: string | null;
    matchedByUserId: string | null;
    matchedAt: Date | null;
    uploadedByUserId: string | null;
    createdAt: Date | null;
};
export type BankStatementLineCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    glAccountCode: number;
    statementDate: number;
    description: number;
    amountKobo: number;
    externalRef: number;
    status: number;
    matchedJournalEntryLineId: number;
    matchedByUserId: number;
    matchedAt: number;
    uploadedByUserId: number;
    createdAt: number;
    _all: number;
};
export type BankStatementLineAvgAggregateInputType = {
    amountKobo?: true;
};
export type BankStatementLineSumAggregateInputType = {
    amountKobo?: true;
};
export type BankStatementLineMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    glAccountCode?: true;
    statementDate?: true;
    description?: true;
    amountKobo?: true;
    externalRef?: true;
    status?: true;
    matchedJournalEntryLineId?: true;
    matchedByUserId?: true;
    matchedAt?: true;
    uploadedByUserId?: true;
    createdAt?: true;
};
export type BankStatementLineMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    glAccountCode?: true;
    statementDate?: true;
    description?: true;
    amountKobo?: true;
    externalRef?: true;
    status?: true;
    matchedJournalEntryLineId?: true;
    matchedByUserId?: true;
    matchedAt?: true;
    uploadedByUserId?: true;
    createdAt?: true;
};
export type BankStatementLineCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    glAccountCode?: true;
    statementDate?: true;
    description?: true;
    amountKobo?: true;
    externalRef?: true;
    status?: true;
    matchedJournalEntryLineId?: true;
    matchedByUserId?: true;
    matchedAt?: true;
    uploadedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type BankStatementLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BankStatementLineWhereInput;
    orderBy?: Prisma.BankStatementLineOrderByWithRelationInput | Prisma.BankStatementLineOrderByWithRelationInput[];
    cursor?: Prisma.BankStatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BankStatementLineCountAggregateInputType;
    _avg?: BankStatementLineAvgAggregateInputType;
    _sum?: BankStatementLineSumAggregateInputType;
    _min?: BankStatementLineMinAggregateInputType;
    _max?: BankStatementLineMaxAggregateInputType;
};
export type GetBankStatementLineAggregateType<T extends BankStatementLineAggregateArgs> = {
    [P in keyof T & keyof AggregateBankStatementLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBankStatementLine[P]> : Prisma.GetScalarType<T[P], AggregateBankStatementLine[P]>;
};
export type BankStatementLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BankStatementLineWhereInput;
    orderBy?: Prisma.BankStatementLineOrderByWithAggregationInput | Prisma.BankStatementLineOrderByWithAggregationInput[];
    by: Prisma.BankStatementLineScalarFieldEnum[] | Prisma.BankStatementLineScalarFieldEnum;
    having?: Prisma.BankStatementLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BankStatementLineCountAggregateInputType | true;
    _avg?: BankStatementLineAvgAggregateInputType;
    _sum?: BankStatementLineSumAggregateInputType;
    _min?: BankStatementLineMinAggregateInputType;
    _max?: BankStatementLineMaxAggregateInputType;
};
export type BankStatementLineGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date;
    description: string;
    amountKobo: bigint;
    externalRef: string | null;
    status: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId: string | null;
    matchedByUserId: string | null;
    matchedAt: Date | null;
    uploadedByUserId: string;
    createdAt: Date;
    _count: BankStatementLineCountAggregateOutputType | null;
    _avg: BankStatementLineAvgAggregateOutputType | null;
    _sum: BankStatementLineSumAggregateOutputType | null;
    _min: BankStatementLineMinAggregateOutputType | null;
    _max: BankStatementLineMaxAggregateOutputType | null;
};
export type GetBankStatementLineGroupByPayload<T extends BankStatementLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BankStatementLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BankStatementLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BankStatementLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BankStatementLineGroupByOutputType[P]>;
}>>;
export type BankStatementLineWhereInput = {
    AND?: Prisma.BankStatementLineWhereInput | Prisma.BankStatementLineWhereInput[];
    OR?: Prisma.BankStatementLineWhereInput[];
    NOT?: Prisma.BankStatementLineWhereInput | Prisma.BankStatementLineWhereInput[];
    id?: Prisma.UuidFilter<"BankStatementLine"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    glAccountCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    statementDate?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
    description?: Prisma.StringFilter<"BankStatementLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"BankStatementLine"> | bigint | number;
    externalRef?: Prisma.StringNullableFilter<"BankStatementLine"> | string | null;
    status?: Prisma.EnumBankStatementLineStatusFilter<"BankStatementLine"> | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.UuidNullableFilter<"BankStatementLine"> | string | null;
    matchedByUserId?: Prisma.UuidNullableFilter<"BankStatementLine"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"BankStatementLine"> | Date | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BankStatementLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    matchedJournalEntryLine?: Prisma.XOR<Prisma.JournalEntryLineNullableScalarRelationFilter, Prisma.JournalEntryLineWhereInput> | null;
    matchedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type BankStatementLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCode?: Prisma.SortOrder;
    statementDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchedJournalEntryLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineOrderByWithRelationInput;
    matchedBy?: Prisma.AppUserOrderByWithRelationInput;
    uploadedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type BankStatementLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matchedJournalEntryLineId?: string;
    AND?: Prisma.BankStatementLineWhereInput | Prisma.BankStatementLineWhereInput[];
    OR?: Prisma.BankStatementLineWhereInput[];
    NOT?: Prisma.BankStatementLineWhereInput | Prisma.BankStatementLineWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    glAccountCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    statementDate?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
    description?: Prisma.StringFilter<"BankStatementLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"BankStatementLine"> | bigint | number;
    externalRef?: Prisma.StringNullableFilter<"BankStatementLine"> | string | null;
    status?: Prisma.EnumBankStatementLineStatusFilter<"BankStatementLine"> | $Enums.BankStatementLineStatus;
    matchedByUserId?: Prisma.UuidNullableFilter<"BankStatementLine"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"BankStatementLine"> | Date | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BankStatementLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    matchedJournalEntryLine?: Prisma.XOR<Prisma.JournalEntryLineNullableScalarRelationFilter, Prisma.JournalEntryLineWhereInput> | null;
    matchedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "matchedJournalEntryLineId">;
export type BankStatementLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCode?: Prisma.SortOrder;
    statementDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchedJournalEntryLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BankStatementLineCountOrderByAggregateInput;
    _avg?: Prisma.BankStatementLineAvgOrderByAggregateInput;
    _max?: Prisma.BankStatementLineMaxOrderByAggregateInput;
    _min?: Prisma.BankStatementLineMinOrderByAggregateInput;
    _sum?: Prisma.BankStatementLineSumOrderByAggregateInput;
};
export type BankStatementLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.BankStatementLineScalarWhereWithAggregatesInput | Prisma.BankStatementLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.BankStatementLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BankStatementLineScalarWhereWithAggregatesInput | Prisma.BankStatementLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BankStatementLine"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"BankStatementLine"> | string;
    glAccountCode?: Prisma.StringWithAggregatesFilter<"BankStatementLine"> | string;
    statementDate?: Prisma.DateTimeWithAggregatesFilter<"BankStatementLine"> | Date | string;
    description?: Prisma.StringWithAggregatesFilter<"BankStatementLine"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"BankStatementLine"> | bigint | number;
    externalRef?: Prisma.StringNullableWithAggregatesFilter<"BankStatementLine"> | string | null;
    status?: Prisma.EnumBankStatementLineStatusWithAggregatesFilter<"BankStatementLine"> | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.UuidNullableWithAggregatesFilter<"BankStatementLine"> | string | null;
    matchedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BankStatementLine"> | string | null;
    matchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BankStatementLine"> | Date | string | null;
    uploadedByUserId?: Prisma.UuidWithAggregatesFilter<"BankStatementLine"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BankStatementLine"> | Date | string;
};
export type BankStatementLineCreateInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBankStatementLinesInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineCreateNestedOneWithoutBankStatementLineMatchInput;
    matchedBy?: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesMatchedInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesUploadedInput;
};
export type BankStatementLineUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBankStatementLinesNestedInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineUpdateOneWithoutBankStatementLineMatchNestedInput;
    matchedBy?: Prisma.AppUserUpdateOneWithoutBankStatementLinesMatchedNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBankStatementLinesUploadedNestedInput;
};
export type BankStatementLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineListRelationFilter = {
    every?: Prisma.BankStatementLineWhereInput;
    some?: Prisma.BankStatementLineWhereInput;
    none?: Prisma.BankStatementLineWhereInput;
};
export type BankStatementLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BankStatementLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCode?: Prisma.SortOrder;
    statementDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchedJournalEntryLineId?: Prisma.SortOrder;
    matchedByUserId?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BankStatementLineAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type BankStatementLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCode?: Prisma.SortOrder;
    statementDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchedJournalEntryLineId?: Prisma.SortOrder;
    matchedByUserId?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BankStatementLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCode?: Prisma.SortOrder;
    statementDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchedJournalEntryLineId?: Prisma.SortOrder;
    matchedByUserId?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BankStatementLineSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type BankStatementLineNullableScalarRelationFilter = {
    is?: Prisma.BankStatementLineWhereInput | null;
    isNot?: Prisma.BankStatementLineWhereInput | null;
};
export type BankStatementLineCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput> | Prisma.BankStatementLineCreateWithoutUploadedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput | Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyUploadedByInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineCreateNestedManyWithoutMatchedByInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput> | Prisma.BankStatementLineCreateWithoutMatchedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput | Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyMatchedByInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput> | Prisma.BankStatementLineCreateWithoutUploadedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput | Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyUploadedByInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineUncheckedCreateNestedManyWithoutMatchedByInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput> | Prisma.BankStatementLineCreateWithoutMatchedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput | Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyMatchedByInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput> | Prisma.BankStatementLineCreateWithoutUploadedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput | Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyUploadedByInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutUploadedByInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type BankStatementLineUpdateManyWithoutMatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput> | Prisma.BankStatementLineCreateWithoutMatchedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput | Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutMatchedByInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutMatchedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyMatchedByInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutMatchedByInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutMatchedByInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutMatchedByInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutMatchedByInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type BankStatementLineUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput> | Prisma.BankStatementLineCreateWithoutUploadedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput | Prisma.BankStatementLineCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyUploadedByInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutUploadedByInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type BankStatementLineUncheckedUpdateManyWithoutMatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput> | Prisma.BankStatementLineCreateWithoutMatchedByInput[] | Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput | Prisma.BankStatementLineCreateOrConnectWithoutMatchedByInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutMatchedByInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutMatchedByInput[];
    createMany?: Prisma.BankStatementLineCreateManyMatchedByInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutMatchedByInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutMatchedByInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutMatchedByInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutMatchedByInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type EnumBankStatementLineStatusFieldUpdateOperationsInput = {
    set?: $Enums.BankStatementLineStatus;
};
export type BankStatementLineCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BankStatementLineCreateWithoutLedgerEntityInput[] | Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.BankStatementLineCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BankStatementLineCreateWithoutLedgerEntityInput[] | Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.BankStatementLineCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
};
export type BankStatementLineUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BankStatementLineCreateWithoutLedgerEntityInput[] | Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.BankStatementLineCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type BankStatementLineUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BankStatementLineCreateWithoutLedgerEntityInput[] | Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BankStatementLineCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.BankStatementLineUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.BankStatementLineUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.BankStatementLineCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    disconnect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    delete?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    connect?: Prisma.BankStatementLineWhereUniqueInput | Prisma.BankStatementLineWhereUniqueInput[];
    update?: Prisma.BankStatementLineUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.BankStatementLineUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.BankStatementLineUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.BankStatementLineUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
};
export type BankStatementLineCreateNestedOneWithoutMatchedJournalEntryLineInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedJournalEntryLineInput;
    connect?: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineUncheckedCreateNestedOneWithoutMatchedJournalEntryLineInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedJournalEntryLineInput;
    connect?: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineUpdateOneWithoutMatchedJournalEntryLineNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedJournalEntryLineInput;
    upsert?: Prisma.BankStatementLineUpsertWithoutMatchedJournalEntryLineInput;
    disconnect?: Prisma.BankStatementLineWhereInput | boolean;
    delete?: Prisma.BankStatementLineWhereInput | boolean;
    connect?: Prisma.BankStatementLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BankStatementLineUpdateToOneWithWhereWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUpdateWithoutMatchedJournalEntryLineInput>, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedJournalEntryLineInput>;
};
export type BankStatementLineUncheckedUpdateOneWithoutMatchedJournalEntryLineNestedInput = {
    create?: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
    connectOrCreate?: Prisma.BankStatementLineCreateOrConnectWithoutMatchedJournalEntryLineInput;
    upsert?: Prisma.BankStatementLineUpsertWithoutMatchedJournalEntryLineInput;
    disconnect?: Prisma.BankStatementLineWhereInput | boolean;
    delete?: Prisma.BankStatementLineWhereInput | boolean;
    connect?: Prisma.BankStatementLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BankStatementLineUpdateToOneWithWhereWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUpdateWithoutMatchedJournalEntryLineInput>, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedJournalEntryLineInput>;
};
export type BankStatementLineCreateWithoutUploadedByInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBankStatementLinesInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineCreateNestedOneWithoutBankStatementLineMatchInput;
    matchedBy?: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesMatchedInput;
};
export type BankStatementLineUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BankStatementLineCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput>;
};
export type BankStatementLineCreateManyUploadedByInputEnvelope = {
    data: Prisma.BankStatementLineCreateManyUploadedByInput | Prisma.BankStatementLineCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type BankStatementLineCreateWithoutMatchedByInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBankStatementLinesInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineCreateNestedOneWithoutBankStatementLineMatchInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesUploadedInput;
};
export type BankStatementLineUncheckedCreateWithoutMatchedByInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineCreateOrConnectWithoutMatchedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput>;
};
export type BankStatementLineCreateManyMatchedByInputEnvelope = {
    data: Prisma.BankStatementLineCreateManyMatchedByInput | Prisma.BankStatementLineCreateManyMatchedByInput[];
    skipDuplicates?: boolean;
};
export type BankStatementLineUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedCreateWithoutUploadedByInput>;
};
export type BankStatementLineUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutUploadedByInput, Prisma.BankStatementLineUncheckedUpdateWithoutUploadedByInput>;
};
export type BankStatementLineUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.BankStatementLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateManyMutationInput, Prisma.BankStatementLineUncheckedUpdateManyWithoutUploadedByInput>;
};
export type BankStatementLineScalarWhereInput = {
    AND?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
    OR?: Prisma.BankStatementLineScalarWhereInput[];
    NOT?: Prisma.BankStatementLineScalarWhereInput | Prisma.BankStatementLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"BankStatementLine"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    glAccountCode?: Prisma.StringFilter<"BankStatementLine"> | string;
    statementDate?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
    description?: Prisma.StringFilter<"BankStatementLine"> | string;
    amountKobo?: Prisma.BigIntFilter<"BankStatementLine"> | bigint | number;
    externalRef?: Prisma.StringNullableFilter<"BankStatementLine"> | string | null;
    status?: Prisma.EnumBankStatementLineStatusFilter<"BankStatementLine"> | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.UuidNullableFilter<"BankStatementLine"> | string | null;
    matchedByUserId?: Prisma.UuidNullableFilter<"BankStatementLine"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"BankStatementLine"> | Date | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BankStatementLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"BankStatementLine"> | Date | string;
};
export type BankStatementLineUpsertWithWhereUniqueWithoutMatchedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedByInput>;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedByInput>;
};
export type BankStatementLineUpdateWithWhereUniqueWithoutMatchedByInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutMatchedByInput, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedByInput>;
};
export type BankStatementLineUpdateManyWithWhereWithoutMatchedByInput = {
    where: Prisma.BankStatementLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateManyMutationInput, Prisma.BankStatementLineUncheckedUpdateManyWithoutMatchedByInput>;
};
export type BankStatementLineCreateWithoutLedgerEntityInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
    matchedJournalEntryLine?: Prisma.JournalEntryLineCreateNestedOneWithoutBankStatementLineMatchInput;
    matchedBy?: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesMatchedInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesUploadedInput;
};
export type BankStatementLineUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput>;
};
export type BankStatementLineCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.BankStatementLineCreateManyLedgerEntityInput | Prisma.BankStatementLineCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type BankStatementLineUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedCreateWithoutLedgerEntityInput>;
};
export type BankStatementLineUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutLedgerEntityInput, Prisma.BankStatementLineUncheckedUpdateWithoutLedgerEntityInput>;
};
export type BankStatementLineUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.BankStatementLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateManyMutationInput, Prisma.BankStatementLineUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type BankStatementLineCreateWithoutMatchedJournalEntryLineInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBankStatementLinesInput;
    matchedBy?: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesMatchedInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBankStatementLinesUploadedInput;
};
export type BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineCreateOrConnectWithoutMatchedJournalEntryLineInput = {
    where: Prisma.BankStatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
};
export type BankStatementLineUpsertWithoutMatchedJournalEntryLineInput = {
    update: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedJournalEntryLineInput>;
    create: Prisma.XOR<Prisma.BankStatementLineCreateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedCreateWithoutMatchedJournalEntryLineInput>;
    where?: Prisma.BankStatementLineWhereInput;
};
export type BankStatementLineUpdateToOneWithWhereWithoutMatchedJournalEntryLineInput = {
    where?: Prisma.BankStatementLineWhereInput;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateWithoutMatchedJournalEntryLineInput, Prisma.BankStatementLineUncheckedUpdateWithoutMatchedJournalEntryLineInput>;
};
export type BankStatementLineUpdateWithoutMatchedJournalEntryLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBankStatementLinesNestedInput;
    matchedBy?: Prisma.AppUserUpdateOneWithoutBankStatementLinesMatchedNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBankStatementLinesUploadedNestedInput;
};
export type BankStatementLineUncheckedUpdateWithoutMatchedJournalEntryLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineCreateManyUploadedByInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BankStatementLineCreateManyMatchedByInput = {
    id?: string;
    ledgerEntityCode: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBankStatementLinesNestedInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineUpdateOneWithoutBankStatementLineMatchNestedInput;
    matchedBy?: Prisma.AppUserUpdateOneWithoutBankStatementLinesMatchedNestedInput;
};
export type BankStatementLineUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineUpdateWithoutMatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBankStatementLinesNestedInput;
    matchedJournalEntryLine?: Prisma.JournalEntryLineUpdateOneWithoutBankStatementLineMatchNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBankStatementLinesUploadedNestedInput;
};
export type BankStatementLineUncheckedUpdateWithoutMatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineUncheckedUpdateManyWithoutMatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineCreateManyLedgerEntityInput = {
    id?: string;
    glAccountCode: string;
    statementDate: Date | string;
    description: string;
    amountKobo: bigint | number;
    externalRef?: string | null;
    status?: $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: string | null;
    matchedByUserId?: string | null;
    matchedAt?: Date | string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BankStatementLineUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedJournalEntryLine?: Prisma.JournalEntryLineUpdateOneWithoutBankStatementLineMatchNestedInput;
    matchedBy?: Prisma.AppUserUpdateOneWithoutBankStatementLinesMatchedNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBankStatementLinesUploadedNestedInput;
};
export type BankStatementLineUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    glAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    statementDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBankStatementLineStatusFieldUpdateOperationsInput | $Enums.BankStatementLineStatus;
    matchedJournalEntryLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BankStatementLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCode?: boolean;
    statementDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    externalRef?: boolean;
    status?: boolean;
    matchedJournalEntryLineId?: boolean;
    matchedByUserId?: boolean;
    matchedAt?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bankStatementLine"]>;
export type BankStatementLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCode?: boolean;
    statementDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    externalRef?: boolean;
    status?: boolean;
    matchedJournalEntryLineId?: boolean;
    matchedByUserId?: boolean;
    matchedAt?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bankStatementLine"]>;
export type BankStatementLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCode?: boolean;
    statementDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    externalRef?: boolean;
    status?: boolean;
    matchedJournalEntryLineId?: boolean;
    matchedByUserId?: boolean;
    matchedAt?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bankStatementLine"]>;
export type BankStatementLineSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCode?: boolean;
    statementDate?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    externalRef?: boolean;
    status?: boolean;
    matchedJournalEntryLineId?: boolean;
    matchedByUserId?: boolean;
    matchedAt?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
};
export type BankStatementLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "glAccountCode" | "statementDate" | "description" | "amountKobo" | "externalRef" | "status" | "matchedJournalEntryLineId" | "matchedByUserId" | "matchedAt" | "uploadedByUserId" | "createdAt", ExtArgs["result"]["bankStatementLine"]>;
export type BankStatementLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BankStatementLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BankStatementLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    matchedJournalEntryLine?: boolean | Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>;
    matchedBy?: boolean | Prisma.BankStatementLine$matchedByArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $BankStatementLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BankStatementLine";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        matchedJournalEntryLine: Prisma.$JournalEntryLinePayload<ExtArgs> | null;
        matchedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        uploadedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        glAccountCode: string;
        statementDate: Date;
        description: string;
        amountKobo: bigint;
        externalRef: string | null;
        status: $Enums.BankStatementLineStatus;
        matchedJournalEntryLineId: string | null;
        matchedByUserId: string | null;
        matchedAt: Date | null;
        uploadedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["bankStatementLine"]>;
    composites: {};
};
export type BankStatementLineGetPayload<S extends boolean | null | undefined | BankStatementLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload, S>;
export type BankStatementLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BankStatementLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BankStatementLineCountAggregateInputType | true;
};
export interface BankStatementLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BankStatementLine'];
        meta: {
            name: 'BankStatementLine';
        };
    };
    findUnique<T extends BankStatementLineFindUniqueArgs>(args: Prisma.SelectSubset<T, BankStatementLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BankStatementLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BankStatementLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BankStatementLineFindFirstArgs>(args?: Prisma.SelectSubset<T, BankStatementLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BankStatementLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BankStatementLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BankStatementLineFindManyArgs>(args?: Prisma.SelectSubset<T, BankStatementLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BankStatementLineCreateArgs>(args: Prisma.SelectSubset<T, BankStatementLineCreateArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BankStatementLineCreateManyArgs>(args?: Prisma.SelectSubset<T, BankStatementLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BankStatementLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BankStatementLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BankStatementLineDeleteArgs>(args: Prisma.SelectSubset<T, BankStatementLineDeleteArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BankStatementLineUpdateArgs>(args: Prisma.SelectSubset<T, BankStatementLineUpdateArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BankStatementLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, BankStatementLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BankStatementLineUpdateManyArgs>(args: Prisma.SelectSubset<T, BankStatementLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BankStatementLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BankStatementLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BankStatementLineUpsertArgs>(args: Prisma.SelectSubset<T, BankStatementLineUpsertArgs<ExtArgs>>): Prisma.Prisma__BankStatementLineClient<runtime.Types.Result.GetResult<Prisma.$BankStatementLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BankStatementLineCountArgs>(args?: Prisma.Subset<T, BankStatementLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BankStatementLineCountAggregateOutputType> : number>;
    aggregate<T extends BankStatementLineAggregateArgs>(args: Prisma.Subset<T, BankStatementLineAggregateArgs>): Prisma.PrismaPromise<GetBankStatementLineAggregateType<T>>;
    groupBy<T extends BankStatementLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BankStatementLineGroupByArgs['orderBy'];
    } : {
        orderBy?: BankStatementLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BankStatementLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankStatementLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BankStatementLineFieldRefs;
}
export interface Prisma__BankStatementLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matchedJournalEntryLine<T extends Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BankStatementLine$matchedJournalEntryLineArgs<ExtArgs>>): Prisma.Prisma__JournalEntryLineClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    matchedBy<T extends Prisma.BankStatementLine$matchedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BankStatementLine$matchedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    uploadedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BankStatementLineFieldRefs {
    readonly id: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly glAccountCode: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly statementDate: Prisma.FieldRef<"BankStatementLine", 'DateTime'>;
    readonly description: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"BankStatementLine", 'BigInt'>;
    readonly externalRef: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly status: Prisma.FieldRef<"BankStatementLine", 'BankStatementLineStatus'>;
    readonly matchedJournalEntryLineId: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly matchedByUserId: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly matchedAt: Prisma.FieldRef<"BankStatementLine", 'DateTime'>;
    readonly uploadedByUserId: Prisma.FieldRef<"BankStatementLine", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BankStatementLine", 'DateTime'>;
}
export type BankStatementLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where?: Prisma.BankStatementLineWhereInput;
    orderBy?: Prisma.BankStatementLineOrderByWithRelationInput | Prisma.BankStatementLineOrderByWithRelationInput[];
    cursor?: Prisma.BankStatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BankStatementLineScalarFieldEnum | Prisma.BankStatementLineScalarFieldEnum[];
};
export type BankStatementLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where?: Prisma.BankStatementLineWhereInput;
    orderBy?: Prisma.BankStatementLineOrderByWithRelationInput | Prisma.BankStatementLineOrderByWithRelationInput[];
    cursor?: Prisma.BankStatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BankStatementLineScalarFieldEnum | Prisma.BankStatementLineScalarFieldEnum[];
};
export type BankStatementLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where?: Prisma.BankStatementLineWhereInput;
    orderBy?: Prisma.BankStatementLineOrderByWithRelationInput | Prisma.BankStatementLineOrderByWithRelationInput[];
    cursor?: Prisma.BankStatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BankStatementLineScalarFieldEnum | Prisma.BankStatementLineScalarFieldEnum[];
};
export type BankStatementLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BankStatementLineCreateInput, Prisma.BankStatementLineUncheckedCreateInput>;
};
export type BankStatementLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BankStatementLineCreateManyInput | Prisma.BankStatementLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BankStatementLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    data: Prisma.BankStatementLineCreateManyInput | Prisma.BankStatementLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BankStatementLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BankStatementLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateInput, Prisma.BankStatementLineUncheckedUpdateInput>;
    where: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BankStatementLineUpdateManyMutationInput, Prisma.BankStatementLineUncheckedUpdateManyInput>;
    where?: Prisma.BankStatementLineWhereInput;
    limit?: number;
};
export type BankStatementLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BankStatementLineUpdateManyMutationInput, Prisma.BankStatementLineUncheckedUpdateManyInput>;
    where?: Prisma.BankStatementLineWhereInput;
    limit?: number;
    include?: Prisma.BankStatementLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BankStatementLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where: Prisma.BankStatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BankStatementLineCreateInput, Prisma.BankStatementLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BankStatementLineUpdateInput, Prisma.BankStatementLineUncheckedUpdateInput>;
};
export type BankStatementLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
    where: Prisma.BankStatementLineWhereUniqueInput;
};
export type BankStatementLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BankStatementLineWhereInput;
    limit?: number;
};
export type BankStatementLine$matchedJournalEntryLineArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryLineWhereInput;
};
export type BankStatementLine$matchedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BankStatementLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BankStatementLineSelect<ExtArgs> | null;
    omit?: Prisma.BankStatementLineOmit<ExtArgs> | null;
    include?: Prisma.BankStatementLineInclude<ExtArgs> | null;
};
