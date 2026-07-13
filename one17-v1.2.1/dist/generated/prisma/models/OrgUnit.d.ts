import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrgUnitModel = runtime.Types.Result.DefaultSelection<Prisma.$OrgUnitPayload>;
export type AggregateOrgUnit = {
    _count: OrgUnitCountAggregateOutputType | null;
    _min: OrgUnitMinAggregateOutputType | null;
    _max: OrgUnitMaxAggregateOutputType | null;
};
export type OrgUnitMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    secondaryReportingLine: string | null;
};
export type OrgUnitMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    secondaryReportingLine: string | null;
};
export type OrgUnitCountAggregateOutputType = {
    code: number;
    name: number;
    secondaryReportingLine: number;
    _all: number;
};
export type OrgUnitMinAggregateInputType = {
    code?: true;
    name?: true;
    secondaryReportingLine?: true;
};
export type OrgUnitMaxAggregateInputType = {
    code?: true;
    name?: true;
    secondaryReportingLine?: true;
};
export type OrgUnitCountAggregateInputType = {
    code?: true;
    name?: true;
    secondaryReportingLine?: true;
    _all?: true;
};
export type OrgUnitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrgUnitWhereInput;
    orderBy?: Prisma.OrgUnitOrderByWithRelationInput | Prisma.OrgUnitOrderByWithRelationInput[];
    cursor?: Prisma.OrgUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrgUnitCountAggregateInputType;
    _min?: OrgUnitMinAggregateInputType;
    _max?: OrgUnitMaxAggregateInputType;
};
export type GetOrgUnitAggregateType<T extends OrgUnitAggregateArgs> = {
    [P in keyof T & keyof AggregateOrgUnit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrgUnit[P]> : Prisma.GetScalarType<T[P], AggregateOrgUnit[P]>;
};
export type OrgUnitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrgUnitWhereInput;
    orderBy?: Prisma.OrgUnitOrderByWithAggregationInput | Prisma.OrgUnitOrderByWithAggregationInput[];
    by: Prisma.OrgUnitScalarFieldEnum[] | Prisma.OrgUnitScalarFieldEnum;
    having?: Prisma.OrgUnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrgUnitCountAggregateInputType | true;
    _min?: OrgUnitMinAggregateInputType;
    _max?: OrgUnitMaxAggregateInputType;
};
export type OrgUnitGroupByOutputType = {
    code: string;
    name: string;
    secondaryReportingLine: string | null;
    _count: OrgUnitCountAggregateOutputType | null;
    _min: OrgUnitMinAggregateOutputType | null;
    _max: OrgUnitMaxAggregateOutputType | null;
};
export type GetOrgUnitGroupByPayload<T extends OrgUnitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrgUnitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrgUnitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrgUnitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrgUnitGroupByOutputType[P]>;
}>>;
export type OrgUnitWhereInput = {
    AND?: Prisma.OrgUnitWhereInput | Prisma.OrgUnitWhereInput[];
    OR?: Prisma.OrgUnitWhereInput[];
    NOT?: Prisma.OrgUnitWhereInput | Prisma.OrgUnitWhereInput[];
    code?: Prisma.StringFilter<"OrgUnit"> | string;
    name?: Prisma.StringFilter<"OrgUnit"> | string;
    secondaryReportingLine?: Prisma.StringNullableFilter<"OrgUnit"> | string | null;
    kras?: Prisma.EnterpriseKraListRelationFilter;
    positions?: Prisma.PositionListRelationFilter;
    weightRows?: Prisma.KpiWeightMatrixListRelationFilter;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleListRelationFilter;
    aiTokenBudgets?: Prisma.AiTokenBudgetListRelationFilter;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationListRelationFilter;
};
export type OrgUnitOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secondaryReportingLine?: Prisma.SortOrderInput | Prisma.SortOrder;
    kras?: Prisma.EnterpriseKraOrderByRelationAggregateInput;
    positions?: Prisma.PositionOrderByRelationAggregateInput;
    weightRows?: Prisma.KpiWeightMatrixOrderByRelationAggregateInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleOrderByRelationAggregateInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetOrderByRelationAggregateInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationOrderByRelationAggregateInput;
};
export type OrgUnitWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.OrgUnitWhereInput | Prisma.OrgUnitWhereInput[];
    OR?: Prisma.OrgUnitWhereInput[];
    NOT?: Prisma.OrgUnitWhereInput | Prisma.OrgUnitWhereInput[];
    name?: Prisma.StringFilter<"OrgUnit"> | string;
    secondaryReportingLine?: Prisma.StringNullableFilter<"OrgUnit"> | string | null;
    kras?: Prisma.EnterpriseKraListRelationFilter;
    positions?: Prisma.PositionListRelationFilter;
    weightRows?: Prisma.KpiWeightMatrixListRelationFilter;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleListRelationFilter;
    aiTokenBudgets?: Prisma.AiTokenBudgetListRelationFilter;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationListRelationFilter;
}, "code">;
export type OrgUnitOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secondaryReportingLine?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrgUnitCountOrderByAggregateInput;
    _max?: Prisma.OrgUnitMaxOrderByAggregateInput;
    _min?: Prisma.OrgUnitMinOrderByAggregateInput;
};
export type OrgUnitScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrgUnitScalarWhereWithAggregatesInput | Prisma.OrgUnitScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrgUnitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrgUnitScalarWhereWithAggregatesInput | Prisma.OrgUnitScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"OrgUnit"> | string;
    name?: Prisma.StringWithAggregatesFilter<"OrgUnit"> | string;
    secondaryReportingLine?: Prisma.StringNullableWithAggregatesFilter<"OrgUnit"> | string | null;
};
export type OrgUnitCreateInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateManyInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
};
export type OrgUnitUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrgUnitUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrgUnitCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secondaryReportingLine?: Prisma.SortOrder;
};
export type OrgUnitMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secondaryReportingLine?: Prisma.SortOrder;
};
export type OrgUnitMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secondaryReportingLine?: Prisma.SortOrder;
};
export type OrgUnitScalarRelationFilter = {
    is?: Prisma.OrgUnitWhereInput;
    isNot?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitNullableScalarRelationFilter = {
    is?: Prisma.OrgUnitWhereInput | null;
    isNot?: Prisma.OrgUnitWhereInput | null;
};
export type OrgUnitCreateNestedOneWithoutKrasInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutKrasInput, Prisma.OrgUnitUncheckedCreateWithoutKrasInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutKrasInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneRequiredWithoutKrasNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutKrasInput, Prisma.OrgUnitUncheckedCreateWithoutKrasInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutKrasInput;
    upsert?: Prisma.OrgUnitUpsertWithoutKrasInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutKrasInput, Prisma.OrgUnitUpdateWithoutKrasInput>, Prisma.OrgUnitUncheckedUpdateWithoutKrasInput>;
};
export type OrgUnitCreateNestedOneWithoutWeightRowsInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedCreateWithoutWeightRowsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutWeightRowsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneRequiredWithoutWeightRowsNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedCreateWithoutWeightRowsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutWeightRowsInput;
    upsert?: Prisma.OrgUnitUpsertWithoutWeightRowsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutWeightRowsInput, Prisma.OrgUnitUpdateWithoutWeightRowsInput>, Prisma.OrgUnitUncheckedUpdateWithoutWeightRowsInput>;
};
export type OrgUnitCreateNestedOneWithoutPositionsInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutPositionsInput, Prisma.OrgUnitUncheckedCreateWithoutPositionsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutPositionsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutPositionsInput, Prisma.OrgUnitUncheckedCreateWithoutPositionsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutPositionsInput;
    upsert?: Prisma.OrgUnitUpsertWithoutPositionsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutPositionsInput, Prisma.OrgUnitUpdateWithoutPositionsInput>, Prisma.OrgUnitUncheckedUpdateWithoutPositionsInput>;
};
export type OrgUnitCreateNestedOneWithoutDepartmentHeadDesignationsInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedCreateWithoutDepartmentHeadDesignationsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutDepartmentHeadDesignationsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedCreateWithoutDepartmentHeadDesignationsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutDepartmentHeadDesignationsInput;
    upsert?: Prisma.OrgUnitUpsertWithoutDepartmentHeadDesignationsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUpdateWithoutDepartmentHeadDesignationsInput>, Prisma.OrgUnitUncheckedUpdateWithoutDepartmentHeadDesignationsInput>;
};
export type OrgUnitCreateNestedOneWithoutAiCapabilityContextRulesInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedCreateWithoutAiCapabilityContextRulesInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutAiCapabilityContextRulesInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneWithoutAiCapabilityContextRulesNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedCreateWithoutAiCapabilityContextRulesInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutAiCapabilityContextRulesInput;
    upsert?: Prisma.OrgUnitUpsertWithoutAiCapabilityContextRulesInput;
    disconnect?: Prisma.OrgUnitWhereInput | boolean;
    delete?: Prisma.OrgUnitWhereInput | boolean;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUpdateWithoutAiCapabilityContextRulesInput>, Prisma.OrgUnitUncheckedUpdateWithoutAiCapabilityContextRulesInput>;
};
export type OrgUnitCreateNestedOneWithoutAiTokenBudgetsInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedCreateWithoutAiTokenBudgetsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutAiTokenBudgetsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateOneRequiredWithoutAiTokenBudgetsNestedInput = {
    create?: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedCreateWithoutAiTokenBudgetsInput>;
    connectOrCreate?: Prisma.OrgUnitCreateOrConnectWithoutAiTokenBudgetsInput;
    upsert?: Prisma.OrgUnitUpsertWithoutAiTokenBudgetsInput;
    connect?: Prisma.OrgUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrgUnitUpdateToOneWithWhereWithoutAiTokenBudgetsInput, Prisma.OrgUnitUpdateWithoutAiTokenBudgetsInput>, Prisma.OrgUnitUncheckedUpdateWithoutAiTokenBudgetsInput>;
};
export type OrgUnitCreateWithoutKrasInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutKrasInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutKrasInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutKrasInput, Prisma.OrgUnitUncheckedCreateWithoutKrasInput>;
};
export type OrgUnitUpsertWithoutKrasInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutKrasInput, Prisma.OrgUnitUncheckedUpdateWithoutKrasInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutKrasInput, Prisma.OrgUnitUncheckedCreateWithoutKrasInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutKrasInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutKrasInput, Prisma.OrgUnitUncheckedUpdateWithoutKrasInput>;
};
export type OrgUnitUpdateWithoutKrasInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutKrasInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateWithoutWeightRowsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutWeightRowsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutWeightRowsInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedCreateWithoutWeightRowsInput>;
};
export type OrgUnitUpsertWithoutWeightRowsInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedUpdateWithoutWeightRowsInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedCreateWithoutWeightRowsInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutWeightRowsInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutWeightRowsInput, Prisma.OrgUnitUncheckedUpdateWithoutWeightRowsInput>;
};
export type OrgUnitUpdateWithoutWeightRowsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutWeightRowsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateWithoutPositionsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutPositionsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutPositionsInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutPositionsInput, Prisma.OrgUnitUncheckedCreateWithoutPositionsInput>;
};
export type OrgUnitUpsertWithoutPositionsInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutPositionsInput, Prisma.OrgUnitUncheckedUpdateWithoutPositionsInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutPositionsInput, Prisma.OrgUnitUncheckedCreateWithoutPositionsInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutPositionsInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutPositionsInput, Prisma.OrgUnitUncheckedUpdateWithoutPositionsInput>;
};
export type OrgUnitUpdateWithoutPositionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutPositionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateWithoutDepartmentHeadDesignationsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutDepartmentHeadDesignationsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutDepartmentHeadDesignationsInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedCreateWithoutDepartmentHeadDesignationsInput>;
};
export type OrgUnitUpsertWithoutDepartmentHeadDesignationsInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedUpdateWithoutDepartmentHeadDesignationsInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedCreateWithoutDepartmentHeadDesignationsInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutDepartmentHeadDesignationsInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutDepartmentHeadDesignationsInput, Prisma.OrgUnitUncheckedUpdateWithoutDepartmentHeadDesignationsInput>;
};
export type OrgUnitUpdateWithoutDepartmentHeadDesignationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutDepartmentHeadDesignationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateWithoutAiCapabilityContextRulesInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutAiCapabilityContextRulesInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutAiCapabilityContextRulesInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedCreateWithoutAiCapabilityContextRulesInput>;
};
export type OrgUnitUpsertWithoutAiCapabilityContextRulesInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedUpdateWithoutAiCapabilityContextRulesInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedCreateWithoutAiCapabilityContextRulesInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutAiCapabilityContextRulesInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutAiCapabilityContextRulesInput, Prisma.OrgUnitUncheckedUpdateWithoutAiCapabilityContextRulesInput>;
};
export type OrgUnitUpdateWithoutAiCapabilityContextRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutAiCapabilityContextRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiTokenBudgets?: Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCreateWithoutAiTokenBudgetsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitUncheckedCreateWithoutAiTokenBudgetsInput = {
    code: string;
    name: string;
    secondaryReportingLine?: string | null;
    kras?: Prisma.EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput;
    positions?: Prisma.PositionUncheckedCreateNestedManyWithoutOrgUnitInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput;
};
export type OrgUnitCreateOrConnectWithoutAiTokenBudgetsInput = {
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedCreateWithoutAiTokenBudgetsInput>;
};
export type OrgUnitUpsertWithoutAiTokenBudgetsInput = {
    update: Prisma.XOR<Prisma.OrgUnitUpdateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedUpdateWithoutAiTokenBudgetsInput>;
    create: Prisma.XOR<Prisma.OrgUnitCreateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedCreateWithoutAiTokenBudgetsInput>;
    where?: Prisma.OrgUnitWhereInput;
};
export type OrgUnitUpdateToOneWithWhereWithoutAiTokenBudgetsInput = {
    where?: Prisma.OrgUnitWhereInput;
    data: Prisma.XOR<Prisma.OrgUnitUpdateWithoutAiTokenBudgetsInput, Prisma.OrgUnitUncheckedUpdateWithoutAiTokenBudgetsInput>;
};
export type OrgUnitUpdateWithoutAiTokenBudgetsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitUncheckedUpdateWithoutAiTokenBudgetsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryReportingLine?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kras?: Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput;
    positions?: Prisma.PositionUncheckedUpdateManyWithoutOrgUnitNestedInput;
    weightRows?: Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput;
    aiCapabilityContextRules?: Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput;
    departmentHeadDesignations?: Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput;
};
export type OrgUnitCountOutputType = {
    kras: number;
    positions: number;
    weightRows: number;
    aiCapabilityContextRules: number;
    aiTokenBudgets: number;
    departmentHeadDesignations: number;
};
export type OrgUnitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kras?: boolean | OrgUnitCountOutputTypeCountKrasArgs;
    positions?: boolean | OrgUnitCountOutputTypeCountPositionsArgs;
    weightRows?: boolean | OrgUnitCountOutputTypeCountWeightRowsArgs;
    aiCapabilityContextRules?: boolean | OrgUnitCountOutputTypeCountAiCapabilityContextRulesArgs;
    aiTokenBudgets?: boolean | OrgUnitCountOutputTypeCountAiTokenBudgetsArgs;
    departmentHeadDesignations?: boolean | OrgUnitCountOutputTypeCountDepartmentHeadDesignationsArgs;
};
export type OrgUnitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitCountOutputTypeSelect<ExtArgs> | null;
};
export type OrgUnitCountOutputTypeCountKrasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseKraWhereInput;
};
export type OrgUnitCountOutputTypeCountPositionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
};
export type OrgUnitCountOutputTypeCountWeightRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiWeightMatrixWhereInput;
};
export type OrgUnitCountOutputTypeCountAiCapabilityContextRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityContextRuleWhereInput;
};
export type OrgUnitCountOutputTypeCountAiTokenBudgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTokenBudgetWhereInput;
};
export type OrgUnitCountOutputTypeCountDepartmentHeadDesignationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentHeadDesignationWhereInput;
};
export type OrgUnitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    secondaryReportingLine?: boolean;
    kras?: boolean | Prisma.OrgUnit$krasArgs<ExtArgs>;
    positions?: boolean | Prisma.OrgUnit$positionsArgs<ExtArgs>;
    weightRows?: boolean | Prisma.OrgUnit$weightRowsArgs<ExtArgs>;
    aiCapabilityContextRules?: boolean | Prisma.OrgUnit$aiCapabilityContextRulesArgs<ExtArgs>;
    aiTokenBudgets?: boolean | Prisma.OrgUnit$aiTokenBudgetsArgs<ExtArgs>;
    departmentHeadDesignations?: boolean | Prisma.OrgUnit$departmentHeadDesignationsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrgUnitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orgUnit"]>;
export type OrgUnitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    secondaryReportingLine?: boolean;
}, ExtArgs["result"]["orgUnit"]>;
export type OrgUnitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    secondaryReportingLine?: boolean;
}, ExtArgs["result"]["orgUnit"]>;
export type OrgUnitSelectScalar = {
    code?: boolean;
    name?: boolean;
    secondaryReportingLine?: boolean;
};
export type OrgUnitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "secondaryReportingLine", ExtArgs["result"]["orgUnit"]>;
export type OrgUnitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kras?: boolean | Prisma.OrgUnit$krasArgs<ExtArgs>;
    positions?: boolean | Prisma.OrgUnit$positionsArgs<ExtArgs>;
    weightRows?: boolean | Prisma.OrgUnit$weightRowsArgs<ExtArgs>;
    aiCapabilityContextRules?: boolean | Prisma.OrgUnit$aiCapabilityContextRulesArgs<ExtArgs>;
    aiTokenBudgets?: boolean | Prisma.OrgUnit$aiTokenBudgetsArgs<ExtArgs>;
    departmentHeadDesignations?: boolean | Prisma.OrgUnit$departmentHeadDesignationsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrgUnitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrgUnitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrgUnitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrgUnitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrgUnit";
    objects: {
        kras: Prisma.$EnterpriseKraPayload<ExtArgs>[];
        positions: Prisma.$PositionPayload<ExtArgs>[];
        weightRows: Prisma.$KpiWeightMatrixPayload<ExtArgs>[];
        aiCapabilityContextRules: Prisma.$AiCapabilityContextRulePayload<ExtArgs>[];
        aiTokenBudgets: Prisma.$AiTokenBudgetPayload<ExtArgs>[];
        departmentHeadDesignations: Prisma.$DepartmentHeadDesignationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }, ExtArgs["result"]["orgUnit"]>;
    composites: {};
};
export type OrgUnitGetPayload<S extends boolean | null | undefined | OrgUnitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload, S>;
export type OrgUnitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrgUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrgUnitCountAggregateInputType | true;
};
export interface OrgUnitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrgUnit'];
        meta: {
            name: 'OrgUnit';
        };
    };
    findUnique<T extends OrgUnitFindUniqueArgs>(args: Prisma.SelectSubset<T, OrgUnitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrgUnitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrgUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrgUnitFindFirstArgs>(args?: Prisma.SelectSubset<T, OrgUnitFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrgUnitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrgUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrgUnitFindManyArgs>(args?: Prisma.SelectSubset<T, OrgUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrgUnitCreateArgs>(args: Prisma.SelectSubset<T, OrgUnitCreateArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrgUnitCreateManyArgs>(args?: Prisma.SelectSubset<T, OrgUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrgUnitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrgUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrgUnitDeleteArgs>(args: Prisma.SelectSubset<T, OrgUnitDeleteArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrgUnitUpdateArgs>(args: Prisma.SelectSubset<T, OrgUnitUpdateArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrgUnitDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrgUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrgUnitUpdateManyArgs>(args: Prisma.SelectSubset<T, OrgUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrgUnitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrgUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrgUnitUpsertArgs>(args: Prisma.SelectSubset<T, OrgUnitUpsertArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrgUnitCountArgs>(args?: Prisma.Subset<T, OrgUnitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrgUnitCountAggregateOutputType> : number>;
    aggregate<T extends OrgUnitAggregateArgs>(args: Prisma.Subset<T, OrgUnitAggregateArgs>): Prisma.PrismaPromise<GetOrgUnitAggregateType<T>>;
    groupBy<T extends OrgUnitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrgUnitGroupByArgs['orderBy'];
    } : {
        orderBy?: OrgUnitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrgUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrgUnitFieldRefs;
}
export interface Prisma__OrgUnitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kras<T extends Prisma.OrgUnit$krasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$krasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    positions<T extends Prisma.OrgUnit$positionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    weightRows<T extends Prisma.OrgUnit$weightRowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$weightRowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    aiCapabilityContextRules<T extends Prisma.OrgUnit$aiCapabilityContextRulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$aiCapabilityContextRulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    aiTokenBudgets<T extends Prisma.OrgUnit$aiTokenBudgetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$aiTokenBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    departmentHeadDesignations<T extends Prisma.OrgUnit$departmentHeadDesignationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnit$departmentHeadDesignationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrgUnitFieldRefs {
    readonly code: Prisma.FieldRef<"OrgUnit", 'String'>;
    readonly name: Prisma.FieldRef<"OrgUnit", 'String'>;
    readonly secondaryReportingLine: Prisma.FieldRef<"OrgUnit", 'String'>;
}
export type OrgUnitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where?: Prisma.OrgUnitWhereInput;
    orderBy?: Prisma.OrgUnitOrderByWithRelationInput | Prisma.OrgUnitOrderByWithRelationInput[];
    cursor?: Prisma.OrgUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrgUnitScalarFieldEnum | Prisma.OrgUnitScalarFieldEnum[];
};
export type OrgUnitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where?: Prisma.OrgUnitWhereInput;
    orderBy?: Prisma.OrgUnitOrderByWithRelationInput | Prisma.OrgUnitOrderByWithRelationInput[];
    cursor?: Prisma.OrgUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrgUnitScalarFieldEnum | Prisma.OrgUnitScalarFieldEnum[];
};
export type OrgUnitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where?: Prisma.OrgUnitWhereInput;
    orderBy?: Prisma.OrgUnitOrderByWithRelationInput | Prisma.OrgUnitOrderByWithRelationInput[];
    cursor?: Prisma.OrgUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrgUnitScalarFieldEnum | Prisma.OrgUnitScalarFieldEnum[];
};
export type OrgUnitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrgUnitCreateInput, Prisma.OrgUnitUncheckedCreateInput>;
};
export type OrgUnitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrgUnitCreateManyInput | Prisma.OrgUnitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrgUnitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    data: Prisma.OrgUnitCreateManyInput | Prisma.OrgUnitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrgUnitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrgUnitUpdateInput, Prisma.OrgUnitUncheckedUpdateInput>;
    where: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrgUnitUpdateManyMutationInput, Prisma.OrgUnitUncheckedUpdateManyInput>;
    where?: Prisma.OrgUnitWhereInput;
    limit?: number;
};
export type OrgUnitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrgUnitUpdateManyMutationInput, Prisma.OrgUnitUncheckedUpdateManyInput>;
    where?: Prisma.OrgUnitWhereInput;
    limit?: number;
};
export type OrgUnitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where: Prisma.OrgUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrgUnitCreateInput, Prisma.OrgUnitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrgUnitUpdateInput, Prisma.OrgUnitUncheckedUpdateInput>;
};
export type OrgUnitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where: Prisma.OrgUnitWhereUniqueInput;
};
export type OrgUnitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrgUnitWhereInput;
    limit?: number;
};
export type OrgUnit$krasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithRelationInput | Prisma.EnterpriseKraOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseKraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseKraScalarFieldEnum | Prisma.EnterpriseKraScalarFieldEnum[];
};
export type OrgUnit$positionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type OrgUnit$weightRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithRelationInput | Prisma.KpiWeightMatrixOrderByWithRelationInput[];
    cursor?: Prisma.KpiWeightMatrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiWeightMatrixScalarFieldEnum | Prisma.KpiWeightMatrixScalarFieldEnum[];
};
export type OrgUnit$aiCapabilityContextRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithRelationInput | Prisma.AiCapabilityContextRuleOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityContextRuleScalarFieldEnum | Prisma.AiCapabilityContextRuleScalarFieldEnum[];
};
export type OrgUnit$aiTokenBudgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithRelationInput | Prisma.AiTokenBudgetOrderByWithRelationInput[];
    cursor?: Prisma.AiTokenBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTokenBudgetScalarFieldEnum | Prisma.AiTokenBudgetScalarFieldEnum[];
};
export type OrgUnit$departmentHeadDesignationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithRelationInput | Prisma.DepartmentHeadDesignationOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentHeadDesignationScalarFieldEnum | Prisma.DepartmentHeadDesignationScalarFieldEnum[];
};
export type OrgUnitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
};
