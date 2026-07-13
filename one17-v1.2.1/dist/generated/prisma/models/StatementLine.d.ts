import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StatementLineModel = runtime.Types.Result.DefaultSelection<Prisma.$StatementLinePayload>;
export type AggregateStatementLine = {
    _count: StatementLineCountAggregateOutputType | null;
    _avg: StatementLineAvgAggregateOutputType | null;
    _sum: StatementLineSumAggregateOutputType | null;
    _min: StatementLineMinAggregateOutputType | null;
    _max: StatementLineMaxAggregateOutputType | null;
};
export type StatementLineAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type StatementLineSumAggregateOutputType = {
    sortOrder: number | null;
};
export type StatementLineMinAggregateOutputType = {
    id: string | null;
    statementTemplateId: string | null;
    lineCode: string | null;
    label: string | null;
    sortOrder: number | null;
    signConvention: string | null;
    parentLineId: string | null;
    computationType: $Enums.StatementLineComputationType | null;
    formulaExpression: string | null;
};
export type StatementLineMaxAggregateOutputType = {
    id: string | null;
    statementTemplateId: string | null;
    lineCode: string | null;
    label: string | null;
    sortOrder: number | null;
    signConvention: string | null;
    parentLineId: string | null;
    computationType: $Enums.StatementLineComputationType | null;
    formulaExpression: string | null;
};
export type StatementLineCountAggregateOutputType = {
    id: number;
    statementTemplateId: number;
    lineCode: number;
    label: number;
    sortOrder: number;
    signConvention: number;
    parentLineId: number;
    computationType: number;
    formulaExpression: number;
    _all: number;
};
export type StatementLineAvgAggregateInputType = {
    sortOrder?: true;
};
export type StatementLineSumAggregateInputType = {
    sortOrder?: true;
};
export type StatementLineMinAggregateInputType = {
    id?: true;
    statementTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    signConvention?: true;
    parentLineId?: true;
    computationType?: true;
    formulaExpression?: true;
};
export type StatementLineMaxAggregateInputType = {
    id?: true;
    statementTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    signConvention?: true;
    parentLineId?: true;
    computationType?: true;
    formulaExpression?: true;
};
export type StatementLineCountAggregateInputType = {
    id?: true;
    statementTemplateId?: true;
    lineCode?: true;
    label?: true;
    sortOrder?: true;
    signConvention?: true;
    parentLineId?: true;
    computationType?: true;
    formulaExpression?: true;
    _all?: true;
};
export type StatementLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StatementLineCountAggregateInputType;
    _avg?: StatementLineAvgAggregateInputType;
    _sum?: StatementLineSumAggregateInputType;
    _min?: StatementLineMinAggregateInputType;
    _max?: StatementLineMaxAggregateInputType;
};
export type GetStatementLineAggregateType<T extends StatementLineAggregateArgs> = {
    [P in keyof T & keyof AggregateStatementLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatementLine[P]> : Prisma.GetScalarType<T[P], AggregateStatementLine[P]>;
};
export type StatementLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithAggregationInput | Prisma.StatementLineOrderByWithAggregationInput[];
    by: Prisma.StatementLineScalarFieldEnum[] | Prisma.StatementLineScalarFieldEnum;
    having?: Prisma.StatementLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatementLineCountAggregateInputType | true;
    _avg?: StatementLineAvgAggregateInputType;
    _sum?: StatementLineSumAggregateInputType;
    _min?: StatementLineMinAggregateInputType;
    _max?: StatementLineMaxAggregateInputType;
};
export type StatementLineGroupByOutputType = {
    id: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention: string | null;
    parentLineId: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression: string | null;
    _count: StatementLineCountAggregateOutputType | null;
    _avg: StatementLineAvgAggregateOutputType | null;
    _sum: StatementLineSumAggregateOutputType | null;
    _min: StatementLineMinAggregateOutputType | null;
    _max: StatementLineMaxAggregateOutputType | null;
};
export type GetStatementLineGroupByPayload<T extends StatementLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatementLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatementLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatementLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatementLineGroupByOutputType[P]>;
}>>;
export type StatementLineWhereInput = {
    AND?: Prisma.StatementLineWhereInput | Prisma.StatementLineWhereInput[];
    OR?: Prisma.StatementLineWhereInput[];
    NOT?: Prisma.StatementLineWhereInput | Prisma.StatementLineWhereInput[];
    id?: Prisma.UuidFilter<"StatementLine"> | string;
    statementTemplateId?: Prisma.UuidFilter<"StatementLine"> | string;
    lineCode?: Prisma.StringFilter<"StatementLine"> | string;
    label?: Prisma.StringFilter<"StatementLine"> | string;
    sortOrder?: Prisma.IntFilter<"StatementLine"> | number;
    signConvention?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
    parentLineId?: Prisma.UuidNullableFilter<"StatementLine"> | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFilter<"StatementLine"> | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
    statementTemplate?: Prisma.XOR<Prisma.StatementTemplateScalarRelationFilter, Prisma.StatementTemplateWhereInput>;
    parentLine?: Prisma.XOR<Prisma.StatementLineNullableScalarRelationFilter, Prisma.StatementLineWhereInput> | null;
    childLines?: Prisma.StatementLineListRelationFilter;
    accountMappings?: Prisma.StatementLineMappingListRelationFilter;
    regulatorLines?: Prisma.RegulatorTemplateLineListRelationFilter;
};
export type StatementLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    signConvention?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    computationType?: Prisma.SortOrder;
    formulaExpression?: Prisma.SortOrderInput | Prisma.SortOrder;
    statementTemplate?: Prisma.StatementTemplateOrderByWithRelationInput;
    parentLine?: Prisma.StatementLineOrderByWithRelationInput;
    childLines?: Prisma.StatementLineOrderByRelationAggregateInput;
    accountMappings?: Prisma.StatementLineMappingOrderByRelationAggregateInput;
    regulatorLines?: Prisma.RegulatorTemplateLineOrderByRelationAggregateInput;
};
export type StatementLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    statementTemplateId_lineCode?: Prisma.StatementLineStatementTemplateIdLineCodeCompoundUniqueInput;
    AND?: Prisma.StatementLineWhereInput | Prisma.StatementLineWhereInput[];
    OR?: Prisma.StatementLineWhereInput[];
    NOT?: Prisma.StatementLineWhereInput | Prisma.StatementLineWhereInput[];
    statementTemplateId?: Prisma.UuidFilter<"StatementLine"> | string;
    lineCode?: Prisma.StringFilter<"StatementLine"> | string;
    label?: Prisma.StringFilter<"StatementLine"> | string;
    sortOrder?: Prisma.IntFilter<"StatementLine"> | number;
    signConvention?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
    parentLineId?: Prisma.UuidNullableFilter<"StatementLine"> | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFilter<"StatementLine"> | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
    statementTemplate?: Prisma.XOR<Prisma.StatementTemplateScalarRelationFilter, Prisma.StatementTemplateWhereInput>;
    parentLine?: Prisma.XOR<Prisma.StatementLineNullableScalarRelationFilter, Prisma.StatementLineWhereInput> | null;
    childLines?: Prisma.StatementLineListRelationFilter;
    accountMappings?: Prisma.StatementLineMappingListRelationFilter;
    regulatorLines?: Prisma.RegulatorTemplateLineListRelationFilter;
}, "id" | "statementTemplateId_lineCode">;
export type StatementLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    signConvention?: Prisma.SortOrderInput | Prisma.SortOrder;
    parentLineId?: Prisma.SortOrderInput | Prisma.SortOrder;
    computationType?: Prisma.SortOrder;
    formulaExpression?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StatementLineCountOrderByAggregateInput;
    _avg?: Prisma.StatementLineAvgOrderByAggregateInput;
    _max?: Prisma.StatementLineMaxOrderByAggregateInput;
    _min?: Prisma.StatementLineMinOrderByAggregateInput;
    _sum?: Prisma.StatementLineSumOrderByAggregateInput;
};
export type StatementLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatementLineScalarWhereWithAggregatesInput | Prisma.StatementLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatementLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatementLineScalarWhereWithAggregatesInput | Prisma.StatementLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StatementLine"> | string;
    statementTemplateId?: Prisma.UuidWithAggregatesFilter<"StatementLine"> | string;
    lineCode?: Prisma.StringWithAggregatesFilter<"StatementLine"> | string;
    label?: Prisma.StringWithAggregatesFilter<"StatementLine"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"StatementLine"> | number;
    signConvention?: Prisma.StringNullableWithAggregatesFilter<"StatementLine"> | string | null;
    parentLineId?: Prisma.UuidNullableWithAggregatesFilter<"StatementLine"> | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeWithAggregatesFilter<"StatementLine"> | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.StringNullableWithAggregatesFilter<"StatementLine"> | string | null;
};
export type StatementLineCreateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    statementTemplate: Prisma.StatementTemplateCreateNestedOneWithoutLinesInput;
    parentLine?: Prisma.StatementLineCreateNestedOneWithoutChildLinesInput;
    childLines?: Prisma.StatementLineCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUncheckedCreateInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    childLines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statementTemplate?: Prisma.StatementTemplateUpdateOneRequiredWithoutLinesNestedInput;
    parentLine?: Prisma.StatementLineUpdateOneWithoutChildLinesNestedInput;
    childLines?: Prisma.StatementLineUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    childLines?: Prisma.StatementLineUncheckedUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineCreateManyInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
};
export type StatementLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StatementLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StatementLineListRelationFilter = {
    every?: Prisma.StatementLineWhereInput;
    some?: Prisma.StatementLineWhereInput;
    none?: Prisma.StatementLineWhereInput;
};
export type StatementLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StatementLineNullableScalarRelationFilter = {
    is?: Prisma.StatementLineWhereInput | null;
    isNot?: Prisma.StatementLineWhereInput | null;
};
export type StatementLineStatementTemplateIdLineCodeCompoundUniqueInput = {
    statementTemplateId: string;
    lineCode: string;
};
export type StatementLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    signConvention?: Prisma.SortOrder;
    parentLineId?: Prisma.SortOrder;
    computationType?: Prisma.SortOrder;
    formulaExpression?: Prisma.SortOrder;
};
export type StatementLineAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type StatementLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    signConvention?: Prisma.SortOrder;
    parentLineId?: Prisma.SortOrder;
    computationType?: Prisma.SortOrder;
    formulaExpression?: Prisma.SortOrder;
};
export type StatementLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    lineCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    signConvention?: Prisma.SortOrder;
    parentLineId?: Prisma.SortOrder;
    computationType?: Prisma.SortOrder;
    formulaExpression?: Prisma.SortOrder;
};
export type StatementLineSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type StatementLineScalarRelationFilter = {
    is?: Prisma.StatementLineWhereInput;
    isNot?: Prisma.StatementLineWhereInput;
};
export type StatementLineCreateNestedManyWithoutStatementTemplateInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput> | Prisma.StatementLineCreateWithoutStatementTemplateInput[] | Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput | Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput[];
    createMany?: Prisma.StatementLineCreateManyStatementTemplateInputEnvelope;
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
};
export type StatementLineUncheckedCreateNestedManyWithoutStatementTemplateInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput> | Prisma.StatementLineCreateWithoutStatementTemplateInput[] | Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput | Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput[];
    createMany?: Prisma.StatementLineCreateManyStatementTemplateInputEnvelope;
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
};
export type StatementLineUpdateManyWithoutStatementTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput> | Prisma.StatementLineCreateWithoutStatementTemplateInput[] | Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput | Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput[];
    upsert?: Prisma.StatementLineUpsertWithWhereUniqueWithoutStatementTemplateInput | Prisma.StatementLineUpsertWithWhereUniqueWithoutStatementTemplateInput[];
    createMany?: Prisma.StatementLineCreateManyStatementTemplateInputEnvelope;
    set?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    disconnect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    delete?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    update?: Prisma.StatementLineUpdateWithWhereUniqueWithoutStatementTemplateInput | Prisma.StatementLineUpdateWithWhereUniqueWithoutStatementTemplateInput[];
    updateMany?: Prisma.StatementLineUpdateManyWithWhereWithoutStatementTemplateInput | Prisma.StatementLineUpdateManyWithWhereWithoutStatementTemplateInput[];
    deleteMany?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
};
export type StatementLineUncheckedUpdateManyWithoutStatementTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput> | Prisma.StatementLineCreateWithoutStatementTemplateInput[] | Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput | Prisma.StatementLineCreateOrConnectWithoutStatementTemplateInput[];
    upsert?: Prisma.StatementLineUpsertWithWhereUniqueWithoutStatementTemplateInput | Prisma.StatementLineUpsertWithWhereUniqueWithoutStatementTemplateInput[];
    createMany?: Prisma.StatementLineCreateManyStatementTemplateInputEnvelope;
    set?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    disconnect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    delete?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    update?: Prisma.StatementLineUpdateWithWhereUniqueWithoutStatementTemplateInput | Prisma.StatementLineUpdateWithWhereUniqueWithoutStatementTemplateInput[];
    updateMany?: Prisma.StatementLineUpdateManyWithWhereWithoutStatementTemplateInput | Prisma.StatementLineUpdateManyWithWhereWithoutStatementTemplateInput[];
    deleteMany?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
};
export type StatementLineCreateNestedOneWithoutChildLinesInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutChildLinesInput, Prisma.StatementLineUncheckedCreateWithoutChildLinesInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutChildLinesInput;
    connect?: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineCreateNestedManyWithoutParentLineInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput> | Prisma.StatementLineCreateWithoutParentLineInput[] | Prisma.StatementLineUncheckedCreateWithoutParentLineInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutParentLineInput | Prisma.StatementLineCreateOrConnectWithoutParentLineInput[];
    createMany?: Prisma.StatementLineCreateManyParentLineInputEnvelope;
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
};
export type StatementLineUncheckedCreateNestedManyWithoutParentLineInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput> | Prisma.StatementLineCreateWithoutParentLineInput[] | Prisma.StatementLineUncheckedCreateWithoutParentLineInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutParentLineInput | Prisma.StatementLineCreateOrConnectWithoutParentLineInput[];
    createMany?: Prisma.StatementLineCreateManyParentLineInputEnvelope;
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
};
export type EnumStatementLineComputationTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatementLineComputationType;
};
export type StatementLineUpdateOneWithoutChildLinesNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutChildLinesInput, Prisma.StatementLineUncheckedCreateWithoutChildLinesInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutChildLinesInput;
    upsert?: Prisma.StatementLineUpsertWithoutChildLinesInput;
    disconnect?: Prisma.StatementLineWhereInput | boolean;
    delete?: Prisma.StatementLineWhereInput | boolean;
    connect?: Prisma.StatementLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StatementLineUpdateToOneWithWhereWithoutChildLinesInput, Prisma.StatementLineUpdateWithoutChildLinesInput>, Prisma.StatementLineUncheckedUpdateWithoutChildLinesInput>;
};
export type StatementLineUpdateManyWithoutParentLineNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput> | Prisma.StatementLineCreateWithoutParentLineInput[] | Prisma.StatementLineUncheckedCreateWithoutParentLineInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutParentLineInput | Prisma.StatementLineCreateOrConnectWithoutParentLineInput[];
    upsert?: Prisma.StatementLineUpsertWithWhereUniqueWithoutParentLineInput | Prisma.StatementLineUpsertWithWhereUniqueWithoutParentLineInput[];
    createMany?: Prisma.StatementLineCreateManyParentLineInputEnvelope;
    set?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    disconnect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    delete?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    update?: Prisma.StatementLineUpdateWithWhereUniqueWithoutParentLineInput | Prisma.StatementLineUpdateWithWhereUniqueWithoutParentLineInput[];
    updateMany?: Prisma.StatementLineUpdateManyWithWhereWithoutParentLineInput | Prisma.StatementLineUpdateManyWithWhereWithoutParentLineInput[];
    deleteMany?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
};
export type StatementLineUncheckedUpdateManyWithoutParentLineNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput> | Prisma.StatementLineCreateWithoutParentLineInput[] | Prisma.StatementLineUncheckedCreateWithoutParentLineInput[];
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutParentLineInput | Prisma.StatementLineCreateOrConnectWithoutParentLineInput[];
    upsert?: Prisma.StatementLineUpsertWithWhereUniqueWithoutParentLineInput | Prisma.StatementLineUpsertWithWhereUniqueWithoutParentLineInput[];
    createMany?: Prisma.StatementLineCreateManyParentLineInputEnvelope;
    set?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    disconnect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    delete?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    connect?: Prisma.StatementLineWhereUniqueInput | Prisma.StatementLineWhereUniqueInput[];
    update?: Prisma.StatementLineUpdateWithWhereUniqueWithoutParentLineInput | Prisma.StatementLineUpdateWithWhereUniqueWithoutParentLineInput[];
    updateMany?: Prisma.StatementLineUpdateManyWithWhereWithoutParentLineInput | Prisma.StatementLineUpdateManyWithWhereWithoutParentLineInput[];
    deleteMany?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
};
export type StatementLineCreateNestedOneWithoutAccountMappingsInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedCreateWithoutAccountMappingsInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutAccountMappingsInput;
    connect?: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineUpdateOneRequiredWithoutAccountMappingsNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedCreateWithoutAccountMappingsInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutAccountMappingsInput;
    upsert?: Prisma.StatementLineUpsertWithoutAccountMappingsInput;
    connect?: Prisma.StatementLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StatementLineUpdateToOneWithWhereWithoutAccountMappingsInput, Prisma.StatementLineUpdateWithoutAccountMappingsInput>, Prisma.StatementLineUncheckedUpdateWithoutAccountMappingsInput>;
};
export type StatementLineCreateNestedOneWithoutRegulatorLinesInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedCreateWithoutRegulatorLinesInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutRegulatorLinesInput;
    connect?: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineUpdateOneWithoutRegulatorLinesNestedInput = {
    create?: Prisma.XOR<Prisma.StatementLineCreateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedCreateWithoutRegulatorLinesInput>;
    connectOrCreate?: Prisma.StatementLineCreateOrConnectWithoutRegulatorLinesInput;
    upsert?: Prisma.StatementLineUpsertWithoutRegulatorLinesInput;
    disconnect?: Prisma.StatementLineWhereInput | boolean;
    delete?: Prisma.StatementLineWhereInput | boolean;
    connect?: Prisma.StatementLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StatementLineUpdateToOneWithWhereWithoutRegulatorLinesInput, Prisma.StatementLineUpdateWithoutRegulatorLinesInput>, Prisma.StatementLineUncheckedUpdateWithoutRegulatorLinesInput>;
};
export type StatementLineCreateWithoutStatementTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    parentLine?: Prisma.StatementLineCreateNestedOneWithoutChildLinesInput;
    childLines?: Prisma.StatementLineCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUncheckedCreateWithoutStatementTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    childLines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineCreateOrConnectWithoutStatementTemplateInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput>;
};
export type StatementLineCreateManyStatementTemplateInputEnvelope = {
    data: Prisma.StatementLineCreateManyStatementTemplateInput | Prisma.StatementLineCreateManyStatementTemplateInput[];
    skipDuplicates?: boolean;
};
export type StatementLineUpsertWithWhereUniqueWithoutStatementTemplateInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementLineUpdateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedUpdateWithoutStatementTemplateInput>;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedCreateWithoutStatementTemplateInput>;
};
export type StatementLineUpdateWithWhereUniqueWithoutStatementTemplateInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateWithoutStatementTemplateInput, Prisma.StatementLineUncheckedUpdateWithoutStatementTemplateInput>;
};
export type StatementLineUpdateManyWithWhereWithoutStatementTemplateInput = {
    where: Prisma.StatementLineScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateManyMutationInput, Prisma.StatementLineUncheckedUpdateManyWithoutStatementTemplateInput>;
};
export type StatementLineScalarWhereInput = {
    AND?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
    OR?: Prisma.StatementLineScalarWhereInput[];
    NOT?: Prisma.StatementLineScalarWhereInput | Prisma.StatementLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"StatementLine"> | string;
    statementTemplateId?: Prisma.UuidFilter<"StatementLine"> | string;
    lineCode?: Prisma.StringFilter<"StatementLine"> | string;
    label?: Prisma.StringFilter<"StatementLine"> | string;
    sortOrder?: Prisma.IntFilter<"StatementLine"> | number;
    signConvention?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
    parentLineId?: Prisma.UuidNullableFilter<"StatementLine"> | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFilter<"StatementLine"> | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.StringNullableFilter<"StatementLine"> | string | null;
};
export type StatementLineCreateWithoutChildLinesInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    statementTemplate: Prisma.StatementTemplateCreateNestedOneWithoutLinesInput;
    parentLine?: Prisma.StatementLineCreateNestedOneWithoutChildLinesInput;
    accountMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUncheckedCreateWithoutChildLinesInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    accountMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineCreateOrConnectWithoutChildLinesInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutChildLinesInput, Prisma.StatementLineUncheckedCreateWithoutChildLinesInput>;
};
export type StatementLineCreateWithoutParentLineInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    statementTemplate: Prisma.StatementTemplateCreateNestedOneWithoutLinesInput;
    childLines?: Prisma.StatementLineCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUncheckedCreateWithoutParentLineInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    childLines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineCreateOrConnectWithoutParentLineInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput>;
};
export type StatementLineCreateManyParentLineInputEnvelope = {
    data: Prisma.StatementLineCreateManyParentLineInput | Prisma.StatementLineCreateManyParentLineInput[];
    skipDuplicates?: boolean;
};
export type StatementLineUpsertWithoutChildLinesInput = {
    update: Prisma.XOR<Prisma.StatementLineUpdateWithoutChildLinesInput, Prisma.StatementLineUncheckedUpdateWithoutChildLinesInput>;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutChildLinesInput, Prisma.StatementLineUncheckedCreateWithoutChildLinesInput>;
    where?: Prisma.StatementLineWhereInput;
};
export type StatementLineUpdateToOneWithWhereWithoutChildLinesInput = {
    where?: Prisma.StatementLineWhereInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateWithoutChildLinesInput, Prisma.StatementLineUncheckedUpdateWithoutChildLinesInput>;
};
export type StatementLineUpdateWithoutChildLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statementTemplate?: Prisma.StatementTemplateUpdateOneRequiredWithoutLinesNestedInput;
    parentLine?: Prisma.StatementLineUpdateOneWithoutChildLinesNestedInput;
    accountMappings?: Prisma.StatementLineMappingUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateWithoutChildLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUpsertWithWhereUniqueWithoutParentLineInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementLineUpdateWithoutParentLineInput, Prisma.StatementLineUncheckedUpdateWithoutParentLineInput>;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutParentLineInput, Prisma.StatementLineUncheckedCreateWithoutParentLineInput>;
};
export type StatementLineUpdateWithWhereUniqueWithoutParentLineInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateWithoutParentLineInput, Prisma.StatementLineUncheckedUpdateWithoutParentLineInput>;
};
export type StatementLineUpdateManyWithWhereWithoutParentLineInput = {
    where: Prisma.StatementLineScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateManyMutationInput, Prisma.StatementLineUncheckedUpdateManyWithoutParentLineInput>;
};
export type StatementLineCreateWithoutAccountMappingsInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    statementTemplate: Prisma.StatementTemplateCreateNestedOneWithoutLinesInput;
    parentLine?: Prisma.StatementLineCreateNestedOneWithoutChildLinesInput;
    childLines?: Prisma.StatementLineCreateNestedManyWithoutParentLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineUncheckedCreateWithoutAccountMappingsInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    childLines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutParentLineInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedCreateNestedManyWithoutMapsToStatementLineInput;
};
export type StatementLineCreateOrConnectWithoutAccountMappingsInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedCreateWithoutAccountMappingsInput>;
};
export type StatementLineUpsertWithoutAccountMappingsInput = {
    update: Prisma.XOR<Prisma.StatementLineUpdateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedUpdateWithoutAccountMappingsInput>;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedCreateWithoutAccountMappingsInput>;
    where?: Prisma.StatementLineWhereInput;
};
export type StatementLineUpdateToOneWithWhereWithoutAccountMappingsInput = {
    where?: Prisma.StatementLineWhereInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateWithoutAccountMappingsInput, Prisma.StatementLineUncheckedUpdateWithoutAccountMappingsInput>;
};
export type StatementLineUpdateWithoutAccountMappingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statementTemplate?: Prisma.StatementTemplateUpdateOneRequiredWithoutLinesNestedInput;
    parentLine?: Prisma.StatementLineUpdateOneWithoutChildLinesNestedInput;
    childLines?: Prisma.StatementLineUpdateManyWithoutParentLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateWithoutAccountMappingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    childLines?: Prisma.StatementLineUncheckedUpdateManyWithoutParentLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineCreateWithoutRegulatorLinesInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    statementTemplate: Prisma.StatementTemplateCreateNestedOneWithoutLinesInput;
    parentLine?: Prisma.StatementLineCreateNestedOneWithoutChildLinesInput;
    childLines?: Prisma.StatementLineCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingCreateNestedManyWithoutStatementLineInput;
};
export type StatementLineUncheckedCreateWithoutRegulatorLinesInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
    childLines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutParentLineInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedCreateNestedManyWithoutStatementLineInput;
};
export type StatementLineCreateOrConnectWithoutRegulatorLinesInput = {
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedCreateWithoutRegulatorLinesInput>;
};
export type StatementLineUpsertWithoutRegulatorLinesInput = {
    update: Prisma.XOR<Prisma.StatementLineUpdateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedUpdateWithoutRegulatorLinesInput>;
    create: Prisma.XOR<Prisma.StatementLineCreateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedCreateWithoutRegulatorLinesInput>;
    where?: Prisma.StatementLineWhereInput;
};
export type StatementLineUpdateToOneWithWhereWithoutRegulatorLinesInput = {
    where?: Prisma.StatementLineWhereInput;
    data: Prisma.XOR<Prisma.StatementLineUpdateWithoutRegulatorLinesInput, Prisma.StatementLineUncheckedUpdateWithoutRegulatorLinesInput>;
};
export type StatementLineUpdateWithoutRegulatorLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statementTemplate?: Prisma.StatementTemplateUpdateOneRequiredWithoutLinesNestedInput;
    parentLine?: Prisma.StatementLineUpdateOneWithoutChildLinesNestedInput;
    childLines?: Prisma.StatementLineUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUpdateManyWithoutStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateWithoutRegulatorLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    childLines?: Prisma.StatementLineUncheckedUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput;
};
export type StatementLineCreateManyStatementTemplateInput = {
    id?: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    parentLineId?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
};
export type StatementLineUpdateWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLine?: Prisma.StatementLineUpdateOneWithoutChildLinesNestedInput;
    childLines?: Prisma.StatementLineUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    childLines?: Prisma.StatementLineUncheckedUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateManyWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parentLineId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StatementLineCreateManyParentLineInput = {
    id?: string;
    statementTemplateId: string;
    lineCode: string;
    label: string;
    sortOrder: number;
    signConvention?: string | null;
    computationType: $Enums.StatementLineComputationType;
    formulaExpression?: string | null;
};
export type StatementLineUpdateWithoutParentLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statementTemplate?: Prisma.StatementTemplateUpdateOneRequiredWithoutLinesNestedInput;
    childLines?: Prisma.StatementLineUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateWithoutParentLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    childLines?: Prisma.StatementLineUncheckedUpdateManyWithoutParentLineNestedInput;
    accountMappings?: Prisma.StatementLineMappingUncheckedUpdateManyWithoutStatementLineNestedInput;
    regulatorLines?: Prisma.RegulatorTemplateLineUncheckedUpdateManyWithoutMapsToStatementLineNestedInput;
};
export type StatementLineUncheckedUpdateManyWithoutParentLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    signConvention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computationType?: Prisma.EnumStatementLineComputationTypeFieldUpdateOperationsInput | $Enums.StatementLineComputationType;
    formulaExpression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StatementLineCountOutputType = {
    childLines: number;
    accountMappings: number;
    regulatorLines: number;
};
export type StatementLineCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    childLines?: boolean | StatementLineCountOutputTypeCountChildLinesArgs;
    accountMappings?: boolean | StatementLineCountOutputTypeCountAccountMappingsArgs;
    regulatorLines?: boolean | StatementLineCountOutputTypeCountRegulatorLinesArgs;
};
export type StatementLineCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineCountOutputTypeSelect<ExtArgs> | null;
};
export type StatementLineCountOutputTypeCountChildLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineWhereInput;
};
export type StatementLineCountOutputTypeCountAccountMappingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineMappingWhereInput;
};
export type StatementLineCountOutputTypeCountRegulatorLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatorTemplateLineWhereInput;
};
export type StatementLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    signConvention?: boolean;
    parentLineId?: boolean;
    computationType?: boolean;
    formulaExpression?: boolean;
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
    childLines?: boolean | Prisma.StatementLine$childLinesArgs<ExtArgs>;
    accountMappings?: boolean | Prisma.StatementLine$accountMappingsArgs<ExtArgs>;
    regulatorLines?: boolean | Prisma.StatementLine$regulatorLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.StatementLineCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementLine"]>;
export type StatementLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    signConvention?: boolean;
    parentLineId?: boolean;
    computationType?: boolean;
    formulaExpression?: boolean;
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
}, ExtArgs["result"]["statementLine"]>;
export type StatementLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    signConvention?: boolean;
    parentLineId?: boolean;
    computationType?: boolean;
    formulaExpression?: boolean;
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
}, ExtArgs["result"]["statementLine"]>;
export type StatementLineSelectScalar = {
    id?: boolean;
    statementTemplateId?: boolean;
    lineCode?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    signConvention?: boolean;
    parentLineId?: boolean;
    computationType?: boolean;
    formulaExpression?: boolean;
};
export type StatementLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "statementTemplateId" | "lineCode" | "label" | "sortOrder" | "signConvention" | "parentLineId" | "computationType" | "formulaExpression", ExtArgs["result"]["statementLine"]>;
export type StatementLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
    childLines?: boolean | Prisma.StatementLine$childLinesArgs<ExtArgs>;
    accountMappings?: boolean | Prisma.StatementLine$accountMappingsArgs<ExtArgs>;
    regulatorLines?: boolean | Prisma.StatementLine$regulatorLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.StatementLineCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StatementLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
};
export type StatementLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementTemplate?: boolean | Prisma.StatementTemplateDefaultArgs<ExtArgs>;
    parentLine?: boolean | Prisma.StatementLine$parentLineArgs<ExtArgs>;
};
export type $StatementLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StatementLine";
    objects: {
        statementTemplate: Prisma.$StatementTemplatePayload<ExtArgs>;
        parentLine: Prisma.$StatementLinePayload<ExtArgs> | null;
        childLines: Prisma.$StatementLinePayload<ExtArgs>[];
        accountMappings: Prisma.$StatementLineMappingPayload<ExtArgs>[];
        regulatorLines: Prisma.$RegulatorTemplateLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        statementTemplateId: string;
        lineCode: string;
        label: string;
        sortOrder: number;
        signConvention: string | null;
        parentLineId: string | null;
        computationType: $Enums.StatementLineComputationType;
        formulaExpression: string | null;
    }, ExtArgs["result"]["statementLine"]>;
    composites: {};
};
export type StatementLineGetPayload<S extends boolean | null | undefined | StatementLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatementLinePayload, S>;
export type StatementLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatementLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatementLineCountAggregateInputType | true;
};
export interface StatementLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StatementLine'];
        meta: {
            name: 'StatementLine';
        };
    };
    findUnique<T extends StatementLineFindUniqueArgs>(args: Prisma.SelectSubset<T, StatementLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StatementLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatementLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StatementLineFindFirstArgs>(args?: Prisma.SelectSubset<T, StatementLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StatementLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatementLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StatementLineFindManyArgs>(args?: Prisma.SelectSubset<T, StatementLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StatementLineCreateArgs>(args: Prisma.SelectSubset<T, StatementLineCreateArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StatementLineCreateManyArgs>(args?: Prisma.SelectSubset<T, StatementLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StatementLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatementLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StatementLineDeleteArgs>(args: Prisma.SelectSubset<T, StatementLineDeleteArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StatementLineUpdateArgs>(args: Prisma.SelectSubset<T, StatementLineUpdateArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StatementLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatementLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StatementLineUpdateManyArgs>(args: Prisma.SelectSubset<T, StatementLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StatementLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatementLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StatementLineUpsertArgs>(args: Prisma.SelectSubset<T, StatementLineUpsertArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StatementLineCountArgs>(args?: Prisma.Subset<T, StatementLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatementLineCountAggregateOutputType> : number>;
    aggregate<T extends StatementLineAggregateArgs>(args: Prisma.Subset<T, StatementLineAggregateArgs>): Prisma.PrismaPromise<GetStatementLineAggregateType<T>>;
    groupBy<T extends StatementLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatementLineGroupByArgs['orderBy'];
    } : {
        orderBy?: StatementLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatementLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatementLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StatementLineFieldRefs;
}
export interface Prisma__StatementLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    statementTemplate<T extends Prisma.StatementTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parentLine<T extends Prisma.StatementLine$parentLineArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementLine$parentLineArgs<ExtArgs>>): Prisma.Prisma__StatementLineClient<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    childLines<T extends Prisma.StatementLine$childLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementLine$childLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accountMappings<T extends Prisma.StatementLine$accountMappingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementLine$accountMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLineMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    regulatorLines<T extends Prisma.StatementLine$regulatorLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementLine$regulatorLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplateLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StatementLineFieldRefs {
    readonly id: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly statementTemplateId: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly lineCode: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly label: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"StatementLine", 'Int'>;
    readonly signConvention: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly parentLineId: Prisma.FieldRef<"StatementLine", 'String'>;
    readonly computationType: Prisma.FieldRef<"StatementLine", 'StatementLineComputationType'>;
    readonly formulaExpression: Prisma.FieldRef<"StatementLine", 'String'>;
}
export type StatementLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineScalarFieldEnum | Prisma.StatementLineScalarFieldEnum[];
};
export type StatementLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineScalarFieldEnum | Prisma.StatementLineScalarFieldEnum[];
};
export type StatementLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineScalarFieldEnum | Prisma.StatementLineScalarFieldEnum[];
};
export type StatementLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineCreateInput, Prisma.StatementLineUncheckedCreateInput>;
};
export type StatementLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StatementLineCreateManyInput | Prisma.StatementLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StatementLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    data: Prisma.StatementLineCreateManyInput | Prisma.StatementLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StatementLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StatementLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineUpdateInput, Prisma.StatementLineUncheckedUpdateInput>;
    where: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StatementLineUpdateManyMutationInput, Prisma.StatementLineUncheckedUpdateManyInput>;
    where?: Prisma.StatementLineWhereInput;
    limit?: number;
};
export type StatementLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementLineUpdateManyMutationInput, Prisma.StatementLineUncheckedUpdateManyInput>;
    where?: Prisma.StatementLineWhereInput;
    limit?: number;
    include?: Prisma.StatementLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StatementLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where: Prisma.StatementLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementLineCreateInput, Prisma.StatementLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StatementLineUpdateInput, Prisma.StatementLineUncheckedUpdateInput>;
};
export type StatementLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where: Prisma.StatementLineWhereUniqueInput;
};
export type StatementLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineWhereInput;
    limit?: number;
};
export type StatementLine$parentLineArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
};
export type StatementLine$childLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineScalarFieldEnum | Prisma.StatementLineScalarFieldEnum[];
};
export type StatementLine$accountMappingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementLine$regulatorLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
};
