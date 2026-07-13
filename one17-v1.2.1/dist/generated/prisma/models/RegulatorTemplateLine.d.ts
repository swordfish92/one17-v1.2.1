import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegulatorTemplateLineModel = runtime.Types.Result.DefaultSelection<Prisma.$RegulatorTemplateLinePayload>;
export type AggregateRegulatorTemplateLine = {
    _count: RegulatorTemplateLineCountAggregateOutputType | null;
    _avg: RegulatorTemplateLineAvgAggregateOutputType | null;
    _sum: RegulatorTemplateLineSumAggregateOutputType | null;
    _min: RegulatorTemplateLineMinAggregateOutputType | null;
    _max: RegulatorTemplateLineMaxAggregateOutputType | null;
};
export type RegulatorTemplateLineAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type RegulatorTemplateLineSumAggregateOutputType = {
    sortOrder: number | null;
};
export type RegulatorTemplateLineMinAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    lineCode: string | null;
    label: string | null;
    sortOrder: number | null;
    mapsToStatementLineId: string | null;
    mapsToChartOfAccountId: string | null;
};
export type RegulatorTemplateLineMaxAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    lineCode: string | null;
    label: string | null;
    sortOrder: number | null;
    mapsToStatementLineId: string | null;
    mapsToChartOfAccountId: string | null;
};
export type RegulatorTemplateLineCountAggregateOutputType = {
    id: number;
    regulatorTemplateId: number;
    lineCode: number;
    label: number;
    sortOrder: number;
    mapsToStatementLineId: number;
    mapsToChartOfAccountId: number;
    _all: number;
};
export type RegulatorTemplateLineAvgAggregateInputType = {
    sortOrder?: true;
};
export type RegulatorTemplateLineSumAggregateInputType = {
    sortOrder?: true;
};
export type RegulatorTemplateLineMinAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    mapsToStatementLineId?: true;
    mapsToChartOfAccountId?: true;
};
export type RegulatorTemplateLineMaxAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    mapsToStatementLineId?: true;
    mapsToChartOfAccountId?: true;
};
export type RegulatorTemplateLineCountAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    mapsToStatementLineId?: true;
    mapsToChartOfAccountId?: true;
    _all?: true;
};
export type RegulatorTemplateLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatorTemplateLineWhereInput;
    orderBy?: Prisma.RegulatorTemplateLineOrderByWithRelationInput | Prisma.RegulatorTemplateLineOrderByWithRelationInput[];
    cursor?: Prisma.RegulatorTemplateLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegulatorTemplateLineCountAggregateInputType;
    _avg?: RegulatorTemplateLineAvgAggregateInputType;
    _sum?: RegulatorTemplateLineSumAggregateInputType;
    _min?: RegulatorTemplateLineMinAggregateInputType;
    _max?: RegulatorTemplateLineMaxAggregateInputType;
};
export type GetRegulatorTemplateLineAggregateType<T extends RegulatorTemplateLineAggregateArgs> = {
    [P in keyof T & keyof AggregateRegulatorTemplateLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegulatorTemplateLine[P]> : Prisma.GetScalarType<T[P], AggregateRegulatorTemplateLine[P]>;
};
export type RegulatorTemplateLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatorTemplateLineWhereInput;
    orderBy?: Prisma.RegulatorTemplateLineOrderByWithAggregationInput | Prisma.RegulatorTemplateLineOrderByWithAggregationInput[];
    by: Prisma.RegulatorTemplateLineScalarFieldEnum[] | Prisma.RegulatorTemplateLineScalarFieldEnum;
    having?: Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegulatorTemplateLineCountAggregateInputType | true;
    _avg?: RegulatorTemplateLineAvgAggregateInputType;
    _sum?: RegulatorTemplateLineSumAggregateInputType;
    _min?: RegulatorTemplateLineMinAggregateInputType;
    _max?: RegulatorTemplateLineMaxAggregateInputType;
};
export type RegulatorTemplateLineGroupByOutputType = {
    id: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId: string | null;
    mapsToChartOfAccountId: string | null;
    _count: RegulatorTemplateLineCountAggregateOutputType | null;
    _avg: RegulatorTemplateLineAvgAggregateOutputType | null;
    _sum: RegulatorTemplateLineSumAggregateOutputType | null;
    _min: RegulatorTemplateLineMinAggregateOutputType | null;
    _max: RegulatorTemplateLineMaxAggregateOutputType | null;
};
export type GetRegulatorTemplateLineGroupByPayload<T extends RegulatorTemplateLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegulatorTemplateLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegulatorTemplateLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegulatorTemplateLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegulatorTemplateLineGroupByOutputType[P]>;
}>>;
export type RegulatorTemplateLineWhereInput = {
    AND?: Prisma.RegulatorTemplateLineWhereInput | Prisma.RegulatorTemplateLineWhereInput[];
    OR?: Prisma.RegulatorTemplateLineWhereInput[];
    NOT?: Prisma.RegulatorTemplateLineWhereInput | Prisma.RegulatorTemplateLineWhereInput[];
    id?: Prisma.UuidFilter<"RegulatorTemplateLine"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatorTemplateLine"> | string;
    lineCode?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    label?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    sortOrder?: Prisma.IntFilter<"RegulatorTemplateLine"> | number;
    mapsToStatementLineId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
    mapsToChartOfAccountId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
    mapsToStatementLine?: Prisma.XOR<Prisma.StatementLineNullableScalarRelationFilter, Prisma.StatementLineWhereInput> | null;
    mapsToChartOfAccount?: Prisma.XOR<Prisma.ChartOfAccountNullableScalarRelationFilter, Prisma.ChartOfAccountWhereInput> | null;
};
export type RegulatorTemplateLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    mapsToStatementLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapsToChartOfAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    regulatorTemplate?: Prisma.RegulatorTemplateOrderByWithRelationInput;
    mapsToStatementLine?: Prisma.StatementLineOrderByWithRelationInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountOrderByWithRelationInput;
};
export type RegulatorTemplateLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    regulatorTemplateId_lineCode?: Prisma.RegulatorTemplateLineRegulatorTemplateIdLineCodeCompoundUniqueInput;
    AND?: Prisma.RegulatorTemplateLineWhereInput | Prisma.RegulatorTemplateLineWhereInput[];
    OR?: Prisma.RegulatorTemplateLineWhereInput[];
    NOT?: Prisma.RegulatorTemplateLineWhereInput | Prisma.RegulatorTemplateLineWhereInput[];
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatorTemplateLine"> | string;
    lineCode?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    label?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    sortOrder?: Prisma.IntFilter<"RegulatorTemplateLine"> | number;
    mapsToStatementLineId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
    mapsToChartOfAccountId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
    mapsToStatementLine?: Prisma.XOR<Prisma.StatementLineNullableScalarRelationFilter, Prisma.StatementLineWhereInput> | null;
    mapsToChartOfAccount?: Prisma.XOR<Prisma.ChartOfAccountNullableScalarRelationFilter, Prisma.ChartOfAccountWhereInput> | null;
}, "id" | "regulatorTemplateId_lineCode">;
export type RegulatorTemplateLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    mapsToStatementLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapsToChartOfAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RegulatorTemplateLineCountOrderByAggregateInput;
    _avg?: Prisma.RegulatorTemplateLineAvgOrderByAggregateInput;
    _max?: Prisma.RegulatorTemplateLineMaxOrderByAggregateInput;
    _min?: Prisma.RegulatorTemplateLineMinOrderByAggregateInput;
    _sum?: Prisma.RegulatorTemplateLineSumOrderByAggregateInput;
};
export type RegulatorTemplateLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput | Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput | Prisma.RegulatorTemplateLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RegulatorTemplateLine"> | string;
    regulatorTemplateId?: Prisma.UuidWithAggregatesFilter<"RegulatorTemplateLine"> | string;
    lineCode?: Prisma.StringWithAggregatesFilter<"RegulatorTemplateLine"> | string;
    label?: Prisma.StringWithAggregatesFilter<"RegulatorTemplateLine"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"RegulatorTemplateLine"> | number;
    mapsToStatementLineId?: Prisma.UuidNullableWithAggregatesFilter<"RegulatorTemplateLine"> | string | null;
    mapsToChartOfAccountId?: Prisma.UuidNullableWithAggregatesFilter<"RegulatorTemplateLine"> | string | null;
};
export type RegulatorTemplateLineCreateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutLinesInput;
    mapsToStatementLine?: Prisma.StatementLineCreateNestedOneWithoutRegulatorLinesInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountCreateNestedOneWithoutRegulatorLinesInput;
};
export type RegulatorTemplateLineUncheckedCreateInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutLinesNestedInput;
    mapsToStatementLine?: Prisma.StatementLineUpdateOneWithoutRegulatorLinesNestedInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountUpdateOneWithoutRegulatorLinesNestedInput;
};
export type RegulatorTemplateLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineCreateManyInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegulatorTemplateLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineListRelationFilter = {
    every?: Prisma.RegulatorTemplateLineWhereInput;
    some?: Prisma.RegulatorTemplateLineWhereInput;
    none?: Prisma.RegulatorTemplateLineWhereInput;
};
export type RegulatorTemplateLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegulatorTemplateLineRegulatorTemplateIdLineCodeCompoundUniqueInput = {
    regulatorTemplateId: string;
    lineCode: string;
};
export type RegulatorTemplateLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    mapsToStatementLineId?: Prisma.SortOrder;
    mapsToChartOfAccountId?: Prisma.SortOrder;
};
export type RegulatorTemplateLineAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type RegulatorTemplateLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    mapsToStatementLineId?: Prisma.SortOrder;
    mapsToChartOfAccountId?: Prisma.SortOrder;
};
export type RegulatorTemplateLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    mapsToStatementLineId?: Prisma.SortOrder;
    mapsToChartOfAccountId?: Prisma.SortOrder;
};
export type RegulatorTemplateLineSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type RegulatorTemplateLineCreateNestedManyWithoutMapsToChartOfAccountInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToChartOfAccountInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUpdateManyWithoutMapsToChartOfAccountNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToChartOfAccountInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToChartOfAccountInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToChartOfAccountInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToChartOfAccountInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToChartOfAccountInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToChartOfAccountInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToStatementLineInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToStatementLineInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToStatementLineInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput> | Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToStatementLineInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToStatementLineInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToStatementLineInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToStatementLineInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUncheckedCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
};
export type RegulatorTemplateLineUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    disconnect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    delete?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    connect?: Prisma.RegulatorTemplateLineWhereUniqueInput | Prisma.RegulatorTemplateLineWhereUniqueInput[];
    update?: Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatorTemplateLineUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
};
export type RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutLinesInput;
    mapsToStatementLine?: Prisma.StatementLineCreateNestedOneWithoutRegulatorLinesInput;
};
export type RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
};
export type RegulatorTemplateLineCreateOrConnectWithoutMapsToChartOfAccountInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput>;
};
export type RegulatorTemplateLineCreateManyMapsToChartOfAccountInputEnvelope = {
    data: Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInput | Prisma.RegulatorTemplateLineCreateManyMapsToChartOfAccountInput[];
    skipDuplicates?: boolean;
};
export type RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToChartOfAccountInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutMapsToChartOfAccountInput>;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToChartOfAccountInput>;
};
export type RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToChartOfAccountInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutMapsToChartOfAccountInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutMapsToChartOfAccountInput>;
};
export type RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToChartOfAccountInput = {
    where: Prisma.RegulatorTemplateLineScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateManyMutationInput, Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountInput>;
};
export type RegulatorTemplateLineScalarWhereInput = {
    AND?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
    OR?: Prisma.RegulatorTemplateLineScalarWhereInput[];
    NOT?: Prisma.RegulatorTemplateLineScalarWhereInput | Prisma.RegulatorTemplateLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"RegulatorTemplateLine"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatorTemplateLine"> | string;
    lineCode?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    label?: Prisma.StringFilter<"RegulatorTemplateLine"> | string;
    sortOrder?: Prisma.IntFilter<"RegulatorTemplateLine"> | number;
    mapsToStatementLineId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
    mapsToChartOfAccountId?: Prisma.UuidNullableFilter<"RegulatorTemplateLine"> | string | null;
};
export type RegulatorTemplateLineCreateWithoutMapsToStatementLineInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutLinesInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountCreateNestedOneWithoutRegulatorLinesInput;
};
export type RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineCreateOrConnectWithoutMapsToStatementLineInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput>;
};
export type RegulatorTemplateLineCreateManyMapsToStatementLineInputEnvelope = {
    data: Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInput | Prisma.RegulatorTemplateLineCreateManyMapsToStatementLineInput[];
    skipDuplicates?: boolean;
};
export type RegulatorTemplateLineUpsertWithWhereUniqueWithoutMapsToStatementLineInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutMapsToStatementLineInput>;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutMapsToStatementLineInput>;
};
export type RegulatorTemplateLineUpdateWithWhereUniqueWithoutMapsToStatementLineInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutMapsToStatementLineInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutMapsToStatementLineInput>;
};
export type RegulatorTemplateLineUpdateManyWithWhereWithoutMapsToStatementLineInput = {
    where: Prisma.RegulatorTemplateLineScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateManyMutationInput, Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineInput>;
};
export type RegulatorTemplateLineCreateWithoutRegulatorTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLine?: Prisma.StatementLineCreateNestedOneWithoutRegulatorLinesInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountCreateNestedOneWithoutRegulatorLinesInput;
};
export type RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineCreateOrConnectWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatorTemplateLineCreateManyRegulatorTemplateInputEnvelope = {
    data: Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInput | Prisma.RegulatorTemplateLineCreateManyRegulatorTemplateInput[];
    skipDuplicates?: boolean;
};
export type RegulatorTemplateLineUpsertWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutRegulatorTemplateInput>;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatorTemplateLineUpdateWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateWithoutRegulatorTemplateInput, Prisma.RegulatorTemplateLineUncheckedUpdateWithoutRegulatorTemplateInput>;
};
export type RegulatorTemplateLineUpdateManyWithWhereWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatorTemplateLineScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateManyMutationInput, Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutRegulatorTemplateInput>;
};
export type RegulatorTemplateLineCreateManyMapsToChartOfAccountInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
};
export type RegulatorTemplateLineUpdateWithoutMapsToChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutLinesNestedInput;
    mapsToStatementLine?: Prisma.StatementLineUpdateOneWithoutRegulatorLinesNestedInput;
};
export type RegulatorTemplateLineUncheckedUpdateWithoutMapsToChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToChartOfAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineCreateManyMapsToStatementLineInput = {
    id?: string;
    regulatorTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineUpdateWithoutMapsToStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutLinesNestedInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountUpdateOneWithoutRegulatorLinesNestedInput;
};
export type RegulatorTemplateLineUncheckedUpdateWithoutMapsToStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineCreateManyRegulatorTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    mapsToStatementLineId?: string | null;
    mapsToChartOfAccountId?: string | null;
};
export type RegulatorTemplateLineUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLine?: Prisma.StatementLineUpdateOneWithoutRegulatorLinesNestedInput;
    mapsToChartOfAccount?: Prisma.ChartOfAccountUpdateOneWithoutRegulatorLinesNestedInput;
};
export type RegulatorTemplateLineUncheckedUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineUncheckedUpdateManyWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    mapsToStatementLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapsToChartOfAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RegulatorTemplateLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    mapsToStatementLineId?: boolean;
    mapsToChartOfAccountId?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
}, ExtArgs["result"]["regulatorTemplateLine"]>;
export type RegulatorTemplateLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    mapsToStatementLineId?: boolean;
    mapsToChartOfAccountId?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
}, ExtArgs["result"]["regulatorTemplateLine"]>;
export type RegulatorTemplateLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    mapsToStatementLineId?: boolean;
    mapsToChartOfAccountId?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
}, ExtArgs["result"]["regulatorTemplateLine"]>;
export type RegulatorTemplateLineSelectScalar = {
    id?: boolean;
    regulatorTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    mapsToStatementLineId?: boolean;
    mapsToChartOfAccountId?: boolean;
};
export type RegulatorTemplateLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatorTemplateId" | "lineCode" | "label" | "sortOrder" | "mapsToStatementLineId" | "mapsToChartOfAccountId", ExtArgs["result"]["regulatorTemplateLine"]>;
export type RegulatorTemplateLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
};
export type RegulatorTemplateLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
};
export type RegulatorTemplateLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
    mapsToStatementLine?: boolean | Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>;
    mapsToChartOfAccount?: boolean | Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>;
};
export type $RegulatorTemplateLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegulatorTemplateLine";
    objects: {
        regulatorTemplate: Prisma.$RegulatorTemplatePayload<ExtArgs>;
        mapsToStatementLine: Prisma.$StatementLinePayload<ExtArgs> | null;
        mapsToChartOfAccount: Prisma.$ChartOfAccountPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        regulatorTemplateId: string;
        lineCode: string;
        label: string;
        sortOrder: number;
        mapsToStatementLineId: string | null;
        mapsToChartOfAccountId: string | null;
    }, ExtArgs["result"]["regulatorTemplateLine"]>;
    composites: {};
};
export type RegulatorTemplateLineGetPayload<S extends boolean | null | undefined | RegulatorTemplateLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload, S>;
export type RegulatorTemplateLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegulatorTemplateLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegulatorTemplateLineCountAggregateInputType | true;
};
export interface RegulatorTemplateLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegulatorTemplateLine'];
        meta: {
            name: 'RegulatorTemplateLine';
        };
    };
    findUnique<T extends RegulatorTemplateLineFindUniqueArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegulatorTemplateLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegulatorTemplateLineFindFirstArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegulatorTemplateLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegulatorTemplateLineFindManyArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegulatorTemplateLineCreateArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineCreateArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegulatorTemplateLineCreateManyArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegulatorTemplateLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegulatorTemplateLineDeleteArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineDeleteArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegulatorTemplateLineUpdateArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineUpdateArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegulatorTemplateLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegulatorTemplateLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegulatorTemplateLineUpdateManyArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegulatorTemplateLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegulatorTemplateLineUpsertArgs>(args: Prisma.SelectSubset<T, RegulatorTemplateLineUpsertArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateLineClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegulatorTemplateLineCountArgs>(args?: Prisma.Subset<T, RegulatorTemplateLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegulatorTemplateLineCountAggregateOutputType> : number>;
    aggregate<T extends RegulatorTemplateLineAggregateArgs>(args: Prisma.Subset<T, RegulatorTemplateLineAggregateArgs>): Prisma.PrismaPromise<GetRegulatorTemplateLineAggregateType<T>>;
    groupBy<T extends RegulatorTemplateLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegulatorTemplateLineGroupByArgs['orderBy'];
    } : {
        orderBy?: RegulatorTemplateLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegulatorTemplateLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulatorTemplateLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegulatorTemplateLineFieldRefs;
}
export interface Prisma__RegulatorTemplateLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regulatorTemplate<T extends Prisma.RegulatorTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mapsToStatementLine<T extends Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mapsToChartOfAccount<T extends Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs>>): Prisma.Prisma__ChartOfAccountClient<runtime.Types.Result.GetResult<Prisma.$ChartOfAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegulatorTemplateLineFieldRefs {
    readonly id: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
    readonly regulatorTemplateId: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
    readonly lineCode: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
    readonly label: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"RegulatorTemplateLine", 'Int'>;
    readonly mapsToStatementLineId: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
    readonly mapsToChartOfAccountId: Prisma.FieldRef<"RegulatorTemplateLine", 'String'>;
}
export type RegulatorTemplateLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
};
export type RegulatorTemplateLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
};
export type RegulatorTemplateLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegulatorTemplateLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegulatorTemplateLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegulatorTemplateLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineCreateInput, Prisma.RegulatorTemplateLineUncheckedCreateInput>;
};
export type RegulatorTemplateLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegulatorTemplateLineCreateManyInput | Prisma.RegulatorTemplateLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulatorTemplateLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    data: Prisma.RegulatorTemplateLineCreateManyInput | Prisma.RegulatorTemplateLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegulatorTemplateLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegulatorTemplateLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateInput, Prisma.RegulatorTemplateLineUncheckedUpdateInput>;
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
};
export type RegulatorTemplateLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateManyMutationInput, Prisma.RegulatorTemplateLineUncheckedUpdateManyInput>;
    where?: Prisma.RegulatorTemplateLineWhereInput;
    limit?: number;
};
export type RegulatorTemplateLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateManyMutationInput, Prisma.RegulatorTemplateLineUncheckedUpdateManyInput>;
    where?: Prisma.RegulatorTemplateLineWhereInput;
    limit?: number;
    include?: Prisma.RegulatorTemplateLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegulatorTemplateLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatorTemplateLineCreateInput, Prisma.RegulatorTemplateLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegulatorTemplateLineUpdateInput, Prisma.RegulatorTemplateLineUncheckedUpdateInput>;
};
export type RegulatorTemplateLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
    where: Prisma.RegulatorTemplateLineWhereUniqueInput;
};
export type RegulatorTemplateLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatorTemplateLineWhereInput;
    limit?: number;
};
export type RegulatorTemplateLine$mapsToStatementLineArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
};
export type RegulatorTemplateLine$mapsToChartOfAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChartOfAccountSelect<ExtArgs> | null;
    omit?: Prisma.ChartOfAccountOmit<ExtArgs> | null;
    include?: Prisma.ChartOfAccountInclude<ExtArgs> | null;
    where?: Prisma.ChartOfAccountWhereInput;
};
export type RegulatorTemplateLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatorTemplateLineSelect<ExtArgs> | null;
    omit?: Prisma.RegulatorTemplateLineOmit<ExtArgs> | null;
    include?: Prisma.RegulatorTemplateLineInclude<ExtArgs> | null;
};
