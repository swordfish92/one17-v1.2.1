import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StatementLineMappingModel = runtime.Types.Result.DefaultSelection<Prisma.$StatementLineMappingPayload>;
export type AggregateStatementLineMapping = {
    _count: StatementLineMappingCountAggregateOutputType | null;
    _min: StatementLineMappingMinAggregateOutputType | null;
    _max: StatementLineMappingMaxAggregateOutputType | null;
};
export type StatementLineMappingMinAggregateOutputType = {
    id: string | null;
    frameworkMapId: string | null;
    chartOfAccountId: string | null;
    statementLineId: string | null;
    createdAt: Date | null;
};
export type StatementLineMappingMaxAggregateOutputType = {
    id: string | null;
    frameworkMapId: string | null;
    chartOfAccountId: string | null;
    statementLineId: string | null;
    createdAt: Date | null;
};
export type StatementLineMappingCountAggregateOutputType = {
    id: number;
    frameworkMapId: number;
    chartOfAccountId: number;
    statementLineId: number;
    createdAt: number;
    _all: number;
};
export type StatementLineMappingMinAggregateInputType = {
    id?: true;
    frameworkMapId?: true;
    chartOfAccountId?: true;
    statementLineId?: true;
    createdAt?: true;
};
export type StatementLineMappingMaxAggregateInputType = {
    id?: true;
    frameworkMapId?: true;
    chartOfAccountId?: true;
    statementLineId?: true;
    createdAt?: true;
};
export type StatementLineMappingCountAggregateInputType = {
    id?: true;
    frameworkMapId?: true;
    chartOfAccountId?: true;
    statementLineId?: true;
    createdAt?: true;
    _all?: true;
};
export type StatementLineMappingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineMappingWhereInput;
    orderBy?: Prisma.StatementLineMappingOrderByWithRelationInput | Prisma.StatementLineMappingOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StatementLineMappingCountAggregateInputType;
    _min?: StatementLineMappingMinAggregateInputType;
    _max?: StatementLineMappingMaxAggregateInputType;
};
export type GetStatementLineMappingAggregateType<T extends StatementLineMappingAggregateArgs> = {
    [P in keyof T & keyof AggregateStatementLineMapping]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatementLineMapping[P]> : Prisma.GetScalarType<T[P], AggregateStatementLineMapping[P]>;
};
export type StatementLineMappingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineMappingWhereInput;
    orderBy?: Prisma.StatementLineMappingOrderByWithAggregationInput | Prisma.StatementLineMappingOrderByWithAggregationInput[];
    by: Prisma.StatementLineMappingScalarFieldEnum[] | Prisma.StatementLineMappingScalarFieldEnum;
    having?: Prisma.StatementLineMappingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatementLineMappingCountAggregateInputType | true;
    _min?: StatementLineMappingMinAggregateInputType;
    _max?: StatementLineMappingMaxAggregateInputType;
};
export type StatementLineMappingGroupByOutputType = {
    id: string;
    frameworkMapId: string;
    chartOfAccountId: string;
    statementLineId: string;
    createdAt: Date;
    _count: StatementLineMappingCountAggregateOutputType | null;
    _min: StatementLineMappingMinAggregateOutputType | null;
    _max: StatementLineMappingMaxAggregateOutputType | null;
};
export type GetStatementLineMappingGroupByPayload<T extends StatementLineMappingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatementLineMappingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatementLineMappingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatementLineMappingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatementLineMappingGroupByOutputType[P]>;
}>>;
export type StatementLineMappingWhereInput = {
    AND?: Prisma.StatementLineMappingWhereInput | Prisma.StatementLineMappingWhereInput[];
    OR?: Prisma.StatementLineMappingWhereInput[];
    NOT?: Prisma.StatementLineMappingWhereInput | Prisma.StatementLineMappingWhereInput[];
    id?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    frameworkMapId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    chartOfAccountId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    statementLineId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementLineMapping"> | Date | string;
    frameworkMap?: Prisma.XOR<Prisma.AccountingFrameworkMapScalarRelationFilter, Prisma.AccountingFrameworkMapWhereInput>;
    chartOfAccount?: Prisma.XOR<Prisma.ChartOfAccountScalarRelationFilter, Prisma.ChartOfAccountWhereInput>;
    statementLine?: Prisma.XOR<Prisma.StatementLineScalarRelationFilter, Prisma.StatementLineWhereInput>;
};
export type StatementLineMappingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    chartOfAccountId?: Prisma.SortOrder;
    statementLineId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    frameworkMap?: Prisma.AccountingFrameworkMapOrderByWithRelationInput;
    chartOfAccount?: Prisma.ChartOfAccountOrderByWithRelationInput;
    statementLine?: Prisma.StatementLineOrderByWithRelationInput;
};
export type StatementLineMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    frameworkMapId_chartOfAccountId_statementLineId?: Prisma.StatementLineMappingFrameworkMapIdChartOfAccountIdStatementLineIdCompoundUniqueInput;
    AND?: Prisma.StatementLineMappingWhereInput | Prisma.StatementLineMappingWhereInput[];
    OR?: Prisma.StatementLineMappingWhereInput[];
    NOT?: Prisma.StatementLineMappingWhereInput | Prisma.StatementLineMappingWhereInput[];
    frameworkMapId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    chartOfAccountId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    statementLineId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementLineMapping"> | Date | string;
    frameworkMap?: Prisma.XOR<Prisma.AccountingFrameworkMapScalarRelationFilter, Prisma.AccountingFrameworkMapWhereInput>;
    chartOfAccount?: Prisma.XOR<Prisma.ChartOfAccountScalarRelationFilter, Prisma.ChartOfAccountWhereInput>;
    statementLine?: Prisma.XOR<Prisma.StatementLineScalarRelationFilter, Prisma.StatementLineWhereInput>;
}, "id" | "frameworkMapId_chartOfAccountId_statementLineId">;
export type StatementLineMappingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    chartOfAccountId?: Prisma.SortOrder;
    statementLineId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StatementLineMappingCountOrderByAggregateInput;
    _max?: Prisma.StatementLineMappingMaxOrderByAggregateInput;
    _min?: Prisma.StatementLineMappingMinOrderByAggregateInput;
};
export type StatementLineMappingScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatementLineMappingScalarWhereWithAggregatesInput | Prisma.StatementLineMappingScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatementLineMappingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatementLineMappingScalarWhereWithAggregatesInput | Prisma.StatementLineMappingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StatementLineMapping"> | string;
    frameworkMapId?: Prisma.UuidWithAggregatesFilter<"StatementLineMapping"> | string;
    chartOfAccountId?: Prisma.UuidWithAggregatesFilter<"StatementLineMapping"> | string;
    statementLineId?: Prisma.UuidWithAggregatesFilter<"StatementLineMapping"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StatementLineMapping"> | Date | string;
};
export type StatementLineMappingCreateInput = {
    id?: string;
    createdAt?: Date | string;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutLineMappingsInput;
    chartOfAccount: Prisma.ChartOfAccountCreateNestedOneWithoutLineMappingsInput;
    statementLine: Prisma.StatementLineCreateNestedOneWithoutAccountMappingsInput;
};
export type StatementLineMappingUncheckedCreateInput = {
    id?: string;
    frameworkMapId: string;
    chartOfAccountId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutLineMappingsNestedInput;
    chartOfAccount?: Prisma.ChartOfAccountUpdateOneRequiredWithoutLineMappingsNestedInput;
    statementLine?: Prisma.StatementLineUpdateOneRequiredWithoutAccountMappingsNestedInput;
};
export type StatementLineMappingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingCreateManyInput = {
    id?: string;
    frameworkMapId: string;
    chartOfAccountId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingListRelationFilter = {
    every?: Prisma.StatementLineMappingWhereInput;
    some?: Prisma.StatementLineMappingWhereInput;
    none?: Prisma.StatementLineMappingWhereInput;
};
export type StatementLineMappingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StatementLineMappingFrameworkMapIdChartOfAccountIdStatementLineIdCompoundUniqueInput = {
    frameworkMapId: string;
    chartOfAccountId: string;
    statementLineId: string;
};
export type StatementLineMappingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    chartOfAccountId?: Prisma.SortOrder;
    statementLineId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementLineMappingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    chartOfAccountId?: Prisma.SortOrder;
    statementLineId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementLineMappingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    chartOfAccountId?: Prisma.SortOrder;
    statementLineId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementLineMappingCreateNestedManyWithoutChartOfAccountInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput> | Prisma.StatementLineMappingCreateWithoutChartOfAccountInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput | Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput[];
    createMany?: Prisma.StatementLineMappingCreateManyChartOfAccountInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUncheckedCreateNestedManyWithoutChartOfAccountInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput> | Prisma.StatementLineMappingCreateWithoutChartOfAccountInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput | Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput[];
    createMany?: Prisma.StatementLineMappingCreateManyChartOfAccountInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUpdateManyWithoutChartOfAccountNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput> | Prisma.StatementLineMappingCreateWithoutChartOfAccountInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput | Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutChartOfAccountInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutChartOfAccountInput[];
    createMany?: Prisma.StatementLineMappingCreateManyChartOfAccountInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutChartOfAccountInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutChartOfAccountInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutChartOfAccountInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutChartOfAccountInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput> | Prisma.StatementLineMappingCreateWithoutChartOfAccountInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput | Prisma.StatementLineMappingCreateOrConnectWithoutChartOfAccountInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutChartOfAccountInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutChartOfAccountInput[];
    createMany?: Prisma.StatementLineMappingCreateManyChartOfAccountInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutChartOfAccountInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutChartOfAccountInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutChartOfAccountInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutChartOfAccountInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingCreateNestedManyWithoutFrameworkMapInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput> | Prisma.StatementLineMappingCreateWithoutFrameworkMapInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput | Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput[];
    createMany?: Prisma.StatementLineMappingCreateManyFrameworkMapInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUncheckedCreateNestedManyWithoutFrameworkMapInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput> | Prisma.StatementLineMappingCreateWithoutFrameworkMapInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput | Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput[];
    createMany?: Prisma.StatementLineMappingCreateManyFrameworkMapInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUpdateManyWithoutFrameworkMapNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput> | Prisma.StatementLineMappingCreateWithoutFrameworkMapInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput | Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutFrameworkMapInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutFrameworkMapInput[];
    createMany?: Prisma.StatementLineMappingCreateManyFrameworkMapInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutFrameworkMapInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutFrameworkMapInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutFrameworkMapInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutFrameworkMapInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingUncheckedUpdateManyWithoutFrameworkMapNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput> | Prisma.StatementLineMappingCreateWithoutFrameworkMapInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput | Prisma.StatementLineMappingCreateOrConnectWithoutFrameworkMapInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutFrameworkMapInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutFrameworkMapInput[];
    createMany?: Prisma.StatementLineMappingCreateManyFrameworkMapInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutFrameworkMapInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutFrameworkMapInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutFrameworkMapInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutFrameworkMapInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingCreateNestedManyWithoutStatementLineInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput> | Prisma.StatementLineMappingCreateWithoutStatementLineInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput | Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput[];
    createMany?: Prisma.StatementLineMappingCreateManyStatementLineInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput> | Prisma.StatementLineMappingCreateWithoutStatementLineInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput | Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput[];
    createMany?: Prisma.StatementLineMappingCreateManyStatementLineInputEnvelope;
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
};
export type StatementLineMappingUpdateManyWithoutStatementLineNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput> | Prisma.StatementLineMappingCreateWithoutStatementLineInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput | Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutStatementLineInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutStatementLineInput[];
    createMany?: Prisma.StatementLineMappingCreateManyStatementLineInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutStatementLineInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutStatementLineInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutStatementLineInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutStatementLineInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput> | Prisma.StatementLineMappingCreateWithoutStatementLineInput[] | Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput[];
    connectOrCreate?: Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput | Prisma.StatementLineMappingCreateOrConnectWithoutStatementLineInput[];
    upsert?: Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutStatementLineInput | Prisma.StatementLineMappingUpsertWithWhereUniqueWithoutStatementLineInput[];
    createMany?: Prisma.StatementLineMappingCreateManyStatementLineInputEnvelope;
    set?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    disconnect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    delete?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    connect?: Prisma.StatementLineMappingWhereUniqueInput | Prisma.StatementLineMappingWhereUniqueInput[];
    update?: Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutStatementLineInput | Prisma.StatementLineMappingUpdateWithWhereUniqueWithoutStatementLineInput[];
    updateMany?: Prisma.StatementLineMappingUpdateManyWithWhereWithoutStatementLineInput | Prisma.StatementLineMappingUpdateManyWithWhereWithoutStatementLineInput[];
    deleteMany?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
};
export type StatementLineMappingCreateWithoutChartOfAccountInput = {
    id?: string;
    createdAt?: Date | string;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutLineMappingsInput;
    statementLine: Prisma.StatementLineCreateNestedOneWithoutAccountMappingsInput;
};
export type StatementLineMappingUncheckedCreateWithoutChartOfAccountInput = {
    id?: string;
    frameworkMapId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingCreateOrConnectWithoutChartOfAccountInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput>;
};
export type StatementLineMappingCreateManyChartOfAccountInputEnvelope = {
    data: Prisma.StatementLineMappingCreateManyChartOfAccountInput | Prisma.StatementLineMappingCreateManyChartOfAccountInput[];
    skipDuplicates?: boolean;
};
export type StatementLineMappingUpsertWithWhereUniqueWithoutChartOfAccountInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedUpdateWithoutChartOfAccountInput>;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedCreateWithoutChartOfAccountInput>;
};
export type StatementLineMappingUpdateWithWhereUniqueWithoutChartOfAccountInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutChartOfAccountInput, Prisma.StatementLineMappingUncheckedUpdateWithoutChartOfAccountInput>;
};
export type StatementLineMappingUpdateManyWithWhereWithoutChartOfAccountInput = {
    where: Prisma.StatementLineMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateManyMutationInput, Prisma.StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountInput>;
};
export type StatementLineMappingScalarWhereInput = {
    AND?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
    OR?: Prisma.StatementLineMappingScalarWhereInput[];
    NOT?: Prisma.StatementLineMappingScalarWhereInput | Prisma.StatementLineMappingScalarWhereInput[];
    id?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    frameworkMapId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    chartOfAccountId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    statementLineId?: Prisma.UuidFilter<"StatementLineMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementLineMapping"> | Date | string;
};
export type StatementLineMappingCreateWithoutFrameworkMapInput = {
    id?: string;
    createdAt?: Date | string;
    chartOfAccount: Prisma.ChartOfAccountCreateNestedOneWithoutLineMappingsInput;
    statementLine: Prisma.StatementLineCreateNestedOneWithoutAccountMappingsInput;
};
export type StatementLineMappingUncheckedCreateWithoutFrameworkMapInput = {
    id?: string;
    chartOfAccountId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingCreateOrConnectWithoutFrameworkMapInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput>;
};
export type StatementLineMappingCreateManyFrameworkMapInputEnvelope = {
    data: Prisma.StatementLineMappingCreateManyFrameworkMapInput | Prisma.StatementLineMappingCreateManyFrameworkMapInput[];
    skipDuplicates?: boolean;
};
export type StatementLineMappingUpsertWithWhereUniqueWithoutFrameworkMapInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedUpdateWithoutFrameworkMapInput>;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedCreateWithoutFrameworkMapInput>;
};
export type StatementLineMappingUpdateWithWhereUniqueWithoutFrameworkMapInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutFrameworkMapInput, Prisma.StatementLineMappingUncheckedUpdateWithoutFrameworkMapInput>;
};
export type StatementLineMappingUpdateManyWithWhereWithoutFrameworkMapInput = {
    where: Prisma.StatementLineMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateManyMutationInput, Prisma.StatementLineMappingUncheckedUpdateManyWithoutFrameworkMapInput>;
};
export type StatementLineMappingCreateWithoutStatementLineInput = {
    id?: string;
    createdAt?: Date | string;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutLineMappingsInput;
    chartOfAccount: Prisma.ChartOfAccountCreateNestedOneWithoutLineMappingsInput;
};
export type StatementLineMappingUncheckedCreateWithoutStatementLineInput = {
    id?: string;
    frameworkMapId: string;
    chartOfAccountId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingCreateOrConnectWithoutStatementLineInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput>;
};
export type StatementLineMappingCreateManyStatementLineInputEnvelope = {
    data: Prisma.StatementLineMappingCreateManyStatementLineInput | Prisma.StatementLineMappingCreateManyStatementLineInput[];
    skipDuplicates?: boolean;
};
export type StatementLineMappingUpsertWithWhereUniqueWithoutStatementLineInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedUpdateWithoutStatementLineInput>;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedCreateWithoutStatementLineInput>;
};
export type StatementLineMappingUpdateWithWhereUniqueWithoutStatementLineInput = {
    where: Prisma.StatementLineMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateWithoutStatementLineInput, Prisma.StatementLineMappingUncheckedUpdateWithoutStatementLineInput>;
};
export type StatementLineMappingUpdateManyWithWhereWithoutStatementLineInput = {
    where: Prisma.StatementLineMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateManyMutationInput, Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineInput>;
};
export type StatementLineMappingCreateManyChartOfAccountInput = {
    id?: string;
    frameworkMapId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingUpdateWithoutChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutLineMappingsNestedInput;
    statementLine?: Prisma.StatementLineUpdateOneRequiredWithoutAccountMappingsNestedInput;
};
export type StatementLineMappingUncheckedUpdateWithoutChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingUncheckedUpdateManyWithoutChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingCreateManyFrameworkMapInput = {
    id?: string;
    chartOfAccountId: string;
    statementLineId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingUpdateWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chartOfAccount?: Prisma.ChartOfAccountUpdateOneRequiredWithoutLineMappingsNestedInput;
    statementLine?: Prisma.StatementLineUpdateOneRequiredWithoutAccountMappingsNestedInput;
};
export type StatementLineMappingUncheckedUpdateWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingUncheckedUpdateManyWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingCreateManyStatementLineInput = {
    id?: string;
    frameworkMapId: string;
    chartOfAccountId: string;
    createdAt?: Date | string;
};
export type StatementLineMappingUpdateWithoutStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutLineMappingsNestedInput;
    chartOfAccount?: Prisma.ChartOfAccountUpdateOneRequiredWithoutLineMappingsNestedInput;
};
export type StatementLineMappingUncheckedUpdateWithoutStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingUncheckedUpdateManyWithoutStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    chartOfAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementLineMappingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frameworkMapId?: boolean;
    chartOfAccountId?: boolean;
    statementLineId?: boolean;
    createdAt?: boolean;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementLineMapping"]>;
export type StatementLineMappingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frameworkMapId?: boolean;
    chartOfAccountId?: boolean;
    statementLineId?: boolean;
    createdAt?: boolean;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementLineMapping"]>;
export type StatementLineMappingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frameworkMapId?: boolean;
    chartOfAccountId?: boolean;
    statementLineId?: boolean;
    createdAt?: boolean;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementLineMapping"]>;
export type StatementLineMappingSelectScalar = {
    id?: boolean;
    frameworkMapId?: boolean;
    chartOfAccountId?: boolean;
    statementLineId?: boolean;
    createdAt?: boolean;
};
export type StatementLineMappingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "frameworkMapId" | "chartOfAccountId" | "statementLineId" | "createdAt", ExtArgs["result"]["statementLineMapping"]>;
export type StatementLineMappingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
};
export type StatementLineMappingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
};
export type StatementLineMappingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    chartOfAccount?: boolean | Prisma.ChartOfAccountDefaultArgs<ExtArgs>;
    statementLine?: boolean | Prisma.StatementLineDefaultArgs<ExtArgs>;
};
export type $StatementLineMappingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StatementLineMapping";
    objects: {
        frameworkMap: Prisma.$AccountingFrameworkMapPayload<ExtArgs>;
        chartOfAccount: Prisma.$ChartOfAccountPayload<ExtArgs>;
        statementLine: Prisma.$StatementLinePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        frameworkMapId: string;
        chartOfAccountId: string;
        statementLineId: string;
        createdAt: Date;
    }, ExtArgs["result"]["statementLineMapping"]>;
    composites: {};
};
export type StatementLineMappingGetPayload<S extends boolean | null | undefined | StatementLineMappingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload, S>;
export type StatementLineMappingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatementLineMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatementLineMappingCountAggregateInputType | true;
};
export interface StatementLineMappingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StatementLineMapping'];
        meta: {
            name: 'StatementLineMapping';
        };
    };
    findUnique<T extends StatementLineMappingFindUniqueArgs>(args: Prisma.SelectSubset<T, StatementLineMappingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StatementLineMappingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatementLineMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StatementLineMappingFindFirstArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StatementLineMappingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StatementLineMappingFindManyArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StatementLineMappingCreateArgs>(args: Prisma.SelectSubset<T, StatementLineMappingCreateArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StatementLineMappingCreateManyArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StatementLineMappingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StatementLineMappingDeleteArgs>(args: Prisma.SelectSubset<T, StatementLineMappingDeleteArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StatementLineMappingUpdateArgs>(args: Prisma.SelectSubset<T, StatementLineMappingUpdateArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StatementLineMappingDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatementLineMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StatementLineMappingUpdateManyArgs>(args: Prisma.SelectSubset<T, StatementLineMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StatementLineMappingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatementLineMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StatementLineMappingUpsertArgs>(args: Prisma.SelectSubset<T, StatementLineMappingUpsertArgs<ExtArgs>>): Prisma.Prisma__StatementLineMappingClient<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StatementLineMappingCountArgs>(args?: Prisma.Subset<T, StatementLineMappingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatementLineMappingCountAggregateOutputType> : number>;
    aggregate<T extends StatementLineMappingAggregateArgs>(args: Prisma.Subset<T, StatementLineMappingAggregateArgs>): Prisma.PrismaPromise<GetStatementLineMappingAggregateType<T>>;
    groupBy<T extends StatementLineMappingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatementLineMappingGroupByArgs['orderBy'];
    } : {
        orderBy?: StatementLineMappingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatementLineMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatementLineMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StatementLineMappingFieldRefs;
}
export interface Prisma__StatementLineMappingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    frameworkMap<T extends Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountingFrameworkMapClient<runtime.Types.Result.GetResult<Prisma.$AccountingFrameworkMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chartOfAccount<T extends Prisma.ChartOfAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChartOfAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statementLine<T extends Prisma.StatementLineDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementLineDefaultArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StatementLineMappingFieldRefs {
    readonly id: Prisma.FieldRef<"StatementLineMapping", 'String'>;
    readonly frameworkMapId: Prisma.FieldRef<"StatementLineMapping", 'String'>;
    readonly chartOfAccountId: Prisma.FieldRef<"StatementLineMapping", 'String'>;
    readonly statementLineId: Prisma.FieldRef<"StatementLineMapping", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StatementLineMapping", 'DateTime'>;
}
export type StatementLineMappingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    where: Prisma.StatementLineMappingWhereUniqueInput;
};
export type StatementLineMappingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    where: Prisma.StatementLineMappingWhereUniqueInput;
};
export type StatementLineMappingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementLineMappingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementLineMappingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementLineMappingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineMappingCreateInput, Prisma.StatementLineMappingUncheckedCreateInput>;
};
export type StatementLineMappingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StatementLineMappingCreateManyInput | Prisma.StatementLineMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StatementLineMappingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    data: Prisma.StatementLineMappingCreateManyInput | Prisma.StatementLineMappingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StatementLineMappingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StatementLineMappingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateInput, Prisma.StatementLineMappingUncheckedUpdateInput>;
    where: Prisma.StatementLineMappingWhereUniqueInput;
};
export type StatementLineMappingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateManyMutationInput, Prisma.StatementLineMappingUncheckedUpdateManyInput>;
    where?: Prisma.StatementLineMappingWhereInput;
    limit?: number;
};
export type StatementLineMappingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineMappingUpdateManyMutationInput, Prisma.StatementLineMappingUncheckedUpdateManyInput>;
    where?: Prisma.StatementLineMappingWhereInput;
    limit?: number;
    include?: Prisma.StatementLineMappingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StatementLineMappingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    where: Prisma.StatementLineMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineMappingCreateInput, Prisma.StatementLineMappingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StatementLineMappingUpdateInput, Prisma.StatementLineMappingUncheckedUpdateInput>;
};
export type StatementLineMappingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
    where: Prisma.StatementLineMappingWhereUniqueInput;
};
export type StatementLineMappingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineMappingWhereInput;
    limit?: number;
};
export type StatementLineMappingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineMappingSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineMappingOmit<ExtArgs> | null;
    include?: Prisma.StatementLineMappingInclude<ExtArgs> | null;
};
