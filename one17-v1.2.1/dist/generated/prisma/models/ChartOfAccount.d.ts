import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChartOfAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$ChartOfAccountPayload>;
export type AggregateChartOfAccount = {
    _count: ChartOfAccountCountAggregateOutputType | null;
    _min: ChartOfAccountMinAggregateOutputType | null;
    _max: ChartOfAccountMaxAggregateOutputType | null;
};
export type ChartOfAccountMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    accountCode: string | null;
    accountName: string | null;
    accountType: $Enums.AccountType | null;
    aaoifiRef: string | null;
    ifrsRef: string | null;
    isActive: boolean | null;
};
export type ChartOfAccountMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    accountCode: string | null;
    accountName: string | null;
    accountType: $Enums.AccountType | null;
    aaoifiRef: string | null;
    ifrsRef: string | null;
    isActive: boolean | null;
};
export type ChartOfAccountCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    accountCode: number;
    accountName: number;
    accountType: number;
    aaoifiRef: number;
    ifrsRef: number;
    isActive: number;
    _all: number;
};
export type ChartOfAccountMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    accountCode?: true;
    accountName?: true;
    accountType?: true;
    aaoifiRef?: true;
    ifrsRef?: true;
    isActive?: true;
};
export type ChartOfAccountMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    accountCode?: true;
    accountName?: true;
    accountType?: true;
    aaoifiRef?: true;
    ifrsRef?: true;
    isActive?: true;
};
export type ChartOfAccountCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    accountCode?: true;
    accountName?: true;
    accountType?: true;
    aaoifiRef?: true;
    ifrsRef?: true;
    isActive?: true;
    _all?: true;
};
export type ChartOfAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChartOfAccountWhereInput;
    orderBy?: Prisma.ChartOfAccountOrderByWithRelationInput | Prisma.ChartOfAccountOrderByWithRelationInput[];
    cursor?: Prisma.ChartOfAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChartOfAccountCountAggregateInputType;
    _min?: ChartOfAccountMinAggregateInputType;
    _max?: ChartOfAccountMaxAggregateInputType;
};
export type GetChartOfAccountAggregateType<T extends ChartOfAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateChartOfAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChartOfAccount[P]> : Prisma.GetScalarType<T[P], AggregateChartOfAccount[P]>;
};
export type ChartOfAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChartOfAccountWhereInput;
    orderBy?: Prisma.ChartOfAccountOrderByWithAggregationInput | Prisma.ChartOfAccountOrderByWithAggregationInput[];
    by: Prisma.ChartOfAccountScalarFieldEnum[] | Prisma.ChartOfAccountScalarFieldEnum;
    having?: Prisma.ChartOfAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChartOfAccountCountAggregateInputType | true;
    _min?: ChartOfAccountMinAggregateInputType;
    _max?: ChartOfAccountMaxAggregateInputType;
};
export type ChartOfAccountGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive: boolean;
    _count: ChartOfAccountCountAggregateOutputType | null;
    _min: ChartOfAccountMinAggregateOutputType | null;
    _max: ChartOfAccountMaxAggregateOutputType | null;
};
export type GetChartOfAccountGroupByPayload<T extends ChartOfAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChartOfAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChartOfAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChartOfAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChartOfAccountGroupByOutputType[P]>;
}>>;
export type ChartOfAccountWhereInput = {
    AND?: Prisma.ChartOfAccountWhereInput | Prisma.ChartOfAccountWhereInput[];
    OR?: Prisma.ChartOfAccountWhereInput[];
    NOT?: Prisma.ChartOfAccountWhereInput | Prisma.ChartOfAccountWhereInput[];
    id?: Prisma.UuidFilter<"ChartOfAccount"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountName?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountType?: Prisma.EnumAccountTypeFilter<"ChartOfAccount"> | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    ifrsRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    isActive?: Prisma.BoolFilter<"ChartOfAccount"> | boolean;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    journalLines?: Prisma.JournalEntryLineListRelationFilter;
    lineMappings?: Prisma.StatementLineMappingListRelationFilter;
    regulatorLines?: Prisma.RegulatorTemplateLineListRelationFilter;
};
export type ChartOfAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    accountCode?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    aaoifiRef?: Prisma.SortOrder;
    ifrsRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    journalLines?: Prisma.JournalEntryLineOrderByRelationAggregateInput;
    lineMappings?: Prisma.StatementLineMappingOrderByRelationAggregateInput;
    regulatorLines?: Prisma.RegulatorTemplateLineOrderByRelationAggregateInput;
};
export type ChartOfAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ledgerEntityCode_accountCode?: Prisma.ChartOfAccountLedgerEntityCodeAccountCodeCompoundUniqueInput;
    AND?: Prisma.ChartOfAccountWhereInput | Prisma.ChartOfAccountWhereInput[];
    OR?: Prisma.ChartOfAccountWhereInput[];
    NOT?: Prisma.ChartOfAccountWhereInput | Prisma.ChartOfAccountWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountName?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountType?: Prisma.EnumAccountTypeFilter<"ChartOfAccount"> | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    ifrsRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    isActive?: Prisma.BoolFilter<"ChartOfAccount"> | boolean;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    journalLines?: Prisma.JournalEntryLineListRelationFilter;
    lineMappings?: Prisma.StatementLineMappingListRelationFilter;
    regulatorLines?: Prisma.RegulatorTemplateLineListRelationFilter;
}, "id" | "ledgerEntityCode_accountCode">;
export type ChartOfAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    accountCode?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    aaoifiRef?: Prisma.SortOrder;
    ifrsRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.ChartOfAccountCountOrderByAggregateInput;
    _max?: Prisma.ChartOfAccountMaxOrderByAggregateInput;
    _min?: Prisma.ChartOfAccountMinOrderByAggregateInput;
};
export type ChartOfAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChartOfAccountScalarWhereWithAggregatesInput | Prisma.ChartOfAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChartOfAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChartOfAccountScalarWhereWithAggregatesInput | Prisma.ChartOfAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ChartOfAccount"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"ChartOfAccount"> | string;
    accountCode?: Prisma.StringWithAggregatesFilter<"ChartOfAccount"> | string;
    accountName?: Prisma.StringWithAggregatesFilter<"ChartOfAccount"> | string;
    accountType?: Prisma.EnumAccountTypeWithAggregatesFilter<"ChartOfAccount"> | $Enums.AccountType;
    aaoifiRef?: Prisma.StringWithAggregatesFilter<"ChartOfAccount"> | string;
    ifrsRef?: Prisma.StringWithAggregatesFilter<"ChartOfAccount"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"ChartOfAccount"> | boolean;
};
export type ChartOfAccountCreateInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutChartOfAccountsInput;
    journalLines?: Prisma.JournalEntryLineCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutChartOfAccountsNestedInput;
    journalLines?: Prisma.JournalEntryLineUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
};
export type ChartOfAccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChartOfAccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChartOfAccountListRelationFilter = {
    every?: Prisma.ChartOfAccountWhereInput;
    some?: Prisma.ChartOfAccountWhereInput;
    none?: Prisma.ChartOfAccountWhereInput;
};
export type ChartOfAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChartOfAccountLedgerEntityCodeAccountCodeCompoundUniqueInput = {
    ledgerEntityCode: string;
    accountCode: string;
};
export type ChartOfAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    accountCode?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    aaoifiRef?: Prisma.SortOrder;
    ifrsRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ChartOfAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    accountCode?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    aaoifiRef?: Prisma.SortOrder;
    ifrsRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ChartOfAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    accountCode?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    aaoifiRef?: Prisma.SortOrder;
    ifrsRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ChartOfAccountScalarRelationFilter = {
    is?: Prisma.ChartOfAccountWhereInput;
    isNot?: Prisma.ChartOfAccountWhereInput;
};
export type ChartOfAccountNullableScalarRelationFilter = {
    is?: Prisma.ChartOfAccountWhereInput | null;
    isNot?: Prisma.ChartOfAccountWhereInput | null;
};
export type ChartOfAccountCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput> | Prisma.ChartOfAccountCreateWithoutLedgerEntityInput[] | Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput | Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.ChartOfAccountCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
};
export type ChartOfAccountUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput> | Prisma.ChartOfAccountCreateWithoutLedgerEntityInput[] | Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput | Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.ChartOfAccountCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
};
export type ChartOfAccountUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput> | Prisma.ChartOfAccountCreateWithoutLedgerEntityInput[] | Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput | Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.ChartOfAccountUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.ChartOfAccountUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.ChartOfAccountCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    disconnect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    delete?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    connect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    update?: Prisma.ChartOfAccountUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.ChartOfAccountUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.ChartOfAccountUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.ChartOfAccountUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.ChartOfAccountScalarWhereInput | Prisma.ChartOfAccountScalarWhereInput[];
};
export type ChartOfAccountUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput> | Prisma.ChartOfAccountCreateWithoutLedgerEntityInput[] | Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput | Prisma.ChartOfAccountCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.ChartOfAccountUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.ChartOfAccountUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.ChartOfAccountCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    disconnect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    delete?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    connect?: Prisma.ChartOfAccountWhereUniqueInput | Prisma.ChartOfAccountWhereUniqueInput[];
    update?: Prisma.ChartOfAccountUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.ChartOfAccountUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.ChartOfAccountUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.ChartOfAccountUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.ChartOfAccountScalarWhereInput | Prisma.ChartOfAccountScalarWhereInput[];
};
export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType;
};
export type ChartOfAccountCreateNestedOneWithoutJournalLinesInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutJournalLinesInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutJournalLinesInput;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountUpdateOneRequiredWithoutJournalLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutJournalLinesInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutJournalLinesInput;
    upsert?: Prisma.ChartOfAccountUpsertWithoutJournalLinesInput;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChartOfAccountUpdateToOneWithWhereWithoutJournalLinesInput, Prisma.ChartOfAccountUpdateWithoutJournalLinesInput>, Prisma.ChartOfAccountUncheckedUpdateWithoutJournalLinesInput>;
};
export type ChartOfAccountCreateNestedOneWithoutLineMappingsInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedCreateWithoutLineMappingsInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLineMappingsInput;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountUpdateOneRequiredWithoutLineMappingsNestedInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedCreateWithoutLineMappingsInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutLineMappingsInput;
    upsert?: Prisma.ChartOfAccountUpsertWithoutLineMappingsInput;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChartOfAccountUpdateToOneWithWhereWithoutLineMappingsInput, Prisma.ChartOfAccountUpdateWithoutLineMappingsInput>, Prisma.ChartOfAccountUncheckedUpdateWithoutLineMappingsInput>;
};
export type ChartOfAccountCreateNestedOneWithoutRegulatorLinesInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutRegulatorLinesInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutRegulatorLinesInput;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountUpdateOneWithoutRegulatorLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutRegulatorLinesInput>;
    connectOrCreate?: Prisma.ChartOfAccountCreateOrConnectWithoutRegulatorLinesInput;
    upsert?: Prisma.ChartOfAccountUpsertWithoutRegulatorLinesInput;
    disconnect?: Prisma.ChartOfAccountWhereInput | boolean;
    delete?: Prisma.ChartOfAccountWhereInput | boolean;
    connect?: Prisma.ChartOfAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChartOfAccountUpdateToOneWithWhereWithoutRegulatorLinesInput, Prisma.ChartOfAccountUpdateWithoutRegulatorLinesInput>, Prisma.ChartOfAccountUncheckedUpdateWithoutRegulatorLinesInput>;
};
export type ChartOfAccountCreateWithoutLedgerEntityInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    journalLines?: Prisma.JournalEntryLineCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput>;
};
export type ChartOfAccountCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.ChartOfAccountCreateManyLedgerEntityInput | Prisma.ChartOfAccountCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type ChartOfAccountUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedCreateWithoutLedgerEntityInput>;
};
export type ChartOfAccountUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutLedgerEntityInput, Prisma.ChartOfAccountUncheckedUpdateWithoutLedgerEntityInput>;
};
export type ChartOfAccountUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.ChartOfAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateManyMutationInput, Prisma.ChartOfAccountUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type ChartOfAccountScalarWhereInput = {
    AND?: Prisma.ChartOfAccountScalarWhereInput | Prisma.ChartOfAccountScalarWhereInput[];
    OR?: Prisma.ChartOfAccountScalarWhereInput[];
    NOT?: Prisma.ChartOfAccountScalarWhereInput | Prisma.ChartOfAccountScalarWhereInput[];
    id?: Prisma.UuidFilter<"ChartOfAccount"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountCode?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountName?: Prisma.StringFilter<"ChartOfAccount"> | string;
    accountType?: Prisma.EnumAccountTypeFilter<"ChartOfAccount"> | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    ifrsRef?: Prisma.StringFilter<"ChartOfAccount"> | string;
    isActive?: Prisma.BoolFilter<"ChartOfAccount"> | boolean;
};
export type ChartOfAccountCreateWithoutJournalLinesInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutChartOfAccountsInput;
    lineMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountUncheckedCreateWithoutJournalLinesInput = {
    id?: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    lineMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutChartOfAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountCreateOrConnectWithoutJournalLinesInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutJournalLinesInput>;
};
export type ChartOfAccountUpsertWithoutJournalLinesInput = {
    update: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedUpdateWithoutJournalLinesInput>;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutJournalLinesInput>;
    where?: Prisma.ChartOfAccountWhereInput;
};
export type ChartOfAccountUpdateToOneWithWhereWithoutJournalLinesInput = {
    where?: Prisma.ChartOfAccountWhereInput;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutJournalLinesInput, Prisma.ChartOfAccountUncheckedUpdateWithoutJournalLinesInput>;
};
export type ChartOfAccountUpdateWithoutJournalLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutChartOfAccountsNestedInput;
    lineMappings?: Prisma.StatementLineMappingUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateWithoutJournalLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lineMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountCreateWithoutLineMappingsInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutChartOfAccountsInput;
    journalLines?: Prisma.JournalEntryLineCreateNestedManyWithoutAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountUncheckedCreateWithoutLineMappingsInput = {
    id?: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToChartOfAccountInput;
};
export type ChartOfAccountCreateOrConnectWithoutLineMappingsInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedCreateWithoutLineMappingsInput>;
};
export type ChartOfAccountUpsertWithoutLineMappingsInput = {
    update: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedUpdateWithoutLineMappingsInput>;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedCreateWithoutLineMappingsInput>;
    where?: Prisma.ChartOfAccountWhereInput;
};
export type ChartOfAccountUpdateToOneWithWhereWithoutLineMappingsInput = {
    where?: Prisma.ChartOfAccountWhereInput;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutLineMappingsInput, Prisma.ChartOfAccountUncheckedUpdateWithoutLineMappingsInput>;
};
export type ChartOfAccountUpdateWithoutLineMappingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutChartOfAccountsNestedInput;
    journalLines?: Prisma.JournalEntryLineUpdateManyWithoutAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateWithoutLineMappingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountCreateWithoutRegulatorLinesInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutChartOfAccountsInput;
    journalLines?: Prisma.JournalEntryLineCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutChartOfAccountInput;
};
export type ChartOfAccountUncheckedCreateWithoutRegulatorLinesInput = {
    id?: string;
    ledgerEntityCode: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutChartOfAccountInput;
};
export type ChartOfAccountCreateOrConnectWithoutRegulatorLinesInput = {
    where: Prisma.ChartOfAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutRegulatorLinesInput>;
};
export type ChartOfAccountUpsertWithoutRegulatorLinesInput = {
    update: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedUpdateWithoutRegulatorLinesInput>;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedCreateWithoutRegulatorLinesInput>;
    where?: Prisma.ChartOfAccountWhereInput;
};
export type ChartOfAccountUpdateToOneWithWhereWithoutRegulatorLinesInput = {
    where?: Prisma.ChartOfAccountWhereInput;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateWithoutRegulatorLinesInput, Prisma.ChartOfAccountUncheckedUpdateWithoutRegulatorLinesInput>;
};
export type ChartOfAccountUpdateWithoutRegulatorLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutChartOfAccountsNestedInput;
    journalLines?: Prisma.JournalEntryLineUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUpdateManyWithoutChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateWithoutRegulatorLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountNestedInput;
};
export type ChartOfAccountCreateManyLedgerEntityInput = {
    id?: string;
    accountCode: string;
    accountName: string;
    accountType: $Enums.AccountType;
    aaoifiRef: string;
    ifrsRef: string;
    isActive?: boolean;
};
export type ChartOfAccountUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    journalLines?: Prisma.JournalEntryLineUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    journalLines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput;
    lineMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountNestedInput;
};
export type ChartOfAccountUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType;
    aaoifiRef?: Prisma.StringFieldUpdateOperationsInput | string;
    ifrsRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChartOfAccountCountOutputType = {
    journalLines: number;
    lineMappings: number;
    regulatorLines: number;
};
export type ChartOfAccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journalLines?: boolean | ChartOfAccountCountOutputTypeCountJournalLinesArgs;
    lineMappings?: boolean | ChartOfAccountCountOutputTypeCountLineMappingsArgs;
    regulatorLines?: boolean | ChartOfAccountCountOutputTypeCountRegulatorLinesArgs;
};
export type ChartOfAccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountCountOutputTypeSelect<ExtArgs> | null;
};
export type ChartOfAccountCountOutputTypeCountJournalLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryLineWhereInput;
};
export type ChartOfAccountCountOutputTypeCountLineMappingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineMappingWhereInput;
};
export type ChartOfAccountCountOutputTypeCountRegulatorLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatorTemplateLineWhereInput;
};
export type ChartOfAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    accountCode?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    aaoifiRef?: boolean;
    ifrsRef?: boolean;
    isActive?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    journalLines?: boolean | Prisma.ChartOfAccount$journalLinesArgs<ExtArgs>;
    lineMappings?: boolean | Prisma.ChartOfAccount$lineMappingsArgs<ExtArgs>;
    regulatorLines?: boolean | Prisma.ChartOfAccount$regulatorLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChartOfAccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chartOfAccount"]>;
export type ChartOfAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    accountCode?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    aaoifiRef?: boolean;
    ifrsRef?: boolean;
    isActive?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chartOfAccount"]>;
export type ChartOfAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    accountCode?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    aaoifiRef?: boolean;
    ifrsRef?: boolean;
    isActive?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chartOfAccount"]>;
export type ChartOfAccountSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    accountCode?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    aaoifiRef?: boolean;
    ifrsRef?: boolean;
    isActive?: boolean;
};
export type ChartOfAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "accountCode" | "accountName" | "accountType" | "aaoifiRef" | "ifrsRef" | "isActive", ExtArgs["result"]["chartOfAccount"]>;
export type ChartOfAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    journalLines?: boolean | Prisma.ChartOfAccount$journalLinesArgs<ExtArgs>;
    lineMappings?: boolean | Prisma.ChartOfAccount$lineMappingsArgs<ExtArgs>;
    regulatorLines?: boolean | Prisma.ChartOfAccount$regulatorLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChartOfAccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChartOfAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type ChartOfAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $ChartOfAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChartOfAccount";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        journalLines: Prisma.$JournalEntryLinePayload<ExtArgs>[];
        lineMappings: Prisma.$StatementLineMappingPayload<ExtArgs>[];
        regulatorLines: Prisma.$RegulatorTemplateLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        accountCode: string;
        accountName: string;
        accountType: $Enums.AccountType;
        aaoifiRef: string;
        ifrsRef: string;
        isActive: boolean;
    }, ExtArgs["result"]["chartOfAccount"]>;
    composites: {};
};
export type ChartOfAccountGetPayload<S extends boolean | null | undefined | ChartOfAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload, S>;
export type ChartOfAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChartOfAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChartOfAccountCountAggregateInputType | true;
};
export interface ChartOfAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChartOfAccount'];
        meta: {
            name: 'ChartOfAccount';
        };
    };
    findUnique<T extends ChartOfAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, ChartOfAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChartOfAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChartOfAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChartOfAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChartOfAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChartOfAccountFindManyArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChartOfAccountCreateArgs>(args: Prisma.SelectSubset<T, ChartOfAccountCreateArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChartOfAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChartOfAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChartOfAccountDeleteArgs>(args: Prisma.SelectSubset<T, ChartOfAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChartOfAccountUpdateArgs>(args: Prisma.SelectSubset<T, ChartOfAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChartOfAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChartOfAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChartOfAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, ChartOfAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChartOfAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChartOfAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChartOfAccountUpsertArgs>(args: Prisma.SelectSubset<T, ChartOfAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChartOfAccountCountArgs>(args?: Prisma.Subset<T, ChartOfAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChartOfAccountCountAggregateOutputType> : number>;
    aggregate<T extends ChartOfAccountAggregateArgs>(args: Prisma.Subset<T, ChartOfAccountAggregateArgs>): Prisma.PrismaPromise<GetChartOfAccountAggregateType<T>>;
    groupBy<T extends ChartOfAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChartOfAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: ChartOfAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChartOfAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChartOfAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChartOfAccountFieldRefs;
}
export interface Prisma__ChartOfAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    journalLines<T extends Prisma.ChartOfAccount$journalLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChartOfAccount$journalLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lineMappings<T extends Prisma.ChartOfAccount$lineMappingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChartOfAccount$lineMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    regulatorLines<T extends Prisma.ChartOfAccount$regulatorLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChartOfAccount$regulatorLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChartOfAccountFieldRefs {
    readonly id: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly accountCode: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly accountName: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly accountType: Prisma.FieldRef<"ChartOfAccount", 'AccountType'>;
    readonly aaoifiRef: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly ifrsRef: Prisma.FieldRef<"ChartOfAccount", 'String'>;
    readonly isActive: Prisma.FieldRef<"ChartOfAccount", 'Boolean'>;
}
export type ChartOfAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where?: Prisma.ChartOfAccountWhereInput;
    orderBy?: Prisma.ChartOfAccountOrderByWithRelationInput | Prisma.ChartOfAccountOrderByWithRelationInput[];
    cursor?: Prisma.ChartOfAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChartOfAccountScalarFieldEnum | Prisma.ChartOfAccountScalarFieldEnum[];
};
export type ChartOfAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where?: Prisma.ChartOfAccountWhereInput;
    orderBy?: Prisma.ChartOfAccountOrderByWithRelationInput | Prisma.ChartOfAccountOrderByWithRelationInput[];
    cursor?: Prisma.ChartOfAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChartOfAccountScalarFieldEnum | Prisma.ChartOfAccountScalarFieldEnum[];
};
export type ChartOfAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where?: Prisma.ChartOfAccountWhereInput;
    orderBy?: Prisma.ChartOfAccountOrderByWithRelationInput | Prisma.ChartOfAccountOrderByWithRelationInput[];
    cursor?: Prisma.ChartOfAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChartOfAccountScalarFieldEnum | Prisma.ChartOfAccountScalarFieldEnum[];
};
export type ChartOfAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChartOfAccountCreateInput, Prisma.ChartOfAccountUncheckedCreateInput>;
};
export type ChartOfAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChartOfAccountCreateManyInput | Prisma.ChartOfAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChartOfAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    data: Prisma.ChartOfAccountCreateManyInput | Prisma.ChartOfAccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChartOfAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChartOfAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateInput, Prisma.ChartOfAccountUncheckedUpdateInput>;
    where: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateManyMutationInput, Prisma.ChartOfAccountUncheckedUpdateManyInput>;
    where?: Prisma.ChartOfAccountWhereInput;
    limit?: number;
};
export type ChartOfAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChartOfAccountUpdateManyMutationInput, Prisma.ChartOfAccountUncheckedUpdateManyInput>;
    where?: Prisma.ChartOfAccountWhereInput;
    limit?: number;
    include?: Prisma.ChartOfAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChartOfAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where: Prisma.ChartOfAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChartOfAccountCreateInput, Prisma.ChartOfAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChartOfAccountUpdateInput, Prisma.ChartOfAccountUncheckedUpdateInput>;
};
export type ChartOfAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where: Prisma.ChartOfAccountWhereUniqueInput;
};
export type ChartOfAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChartOfAccountWhereInput;
    limit?: number;
};
export type ChartOfAccount$journalLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChartOfAccount$lineMappingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    where?: Prisma.StatementLineMappingWhereInput;
    orderBy?: Prisma.StatementLineMappingOrderByWithRelationInput | Prisma.StatementLineMappingOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineMappingScalarFieldEnum | Prisma.StatementLineMappingScalarFieldEnum[];
};
export type ChartOfAccount$regulatorLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    where?: Prisma.RegulatorTemplateLineWhereInput;
    orderBy?: Prisma.RegulatorTemplateLineOrderByWithRelationInput | Prisma.RegulatorTemplateLineOrderByWithRelationInput[];
    cursor?: Prisma.RegulatorTemplateLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatorTemplateLineScalarFieldEnum | Prisma.RegulatorTemplateLineScalarFieldEnum[];
};
export type ChartOfAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
};
