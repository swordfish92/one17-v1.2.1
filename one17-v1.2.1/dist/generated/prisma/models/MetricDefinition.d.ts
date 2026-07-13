import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MetricDefinitionModel = runtime.Types.Result.DefaultSelection<Prisma.$MetricDefinitionPayload>;
export type AggregateMetricDefinition = {
    _count: MetricDefinitionCountAggregateOutputType | null;
    _avg: MetricDefinitionAvgAggregateOutputType | null;
    _sum: MetricDefinitionSumAggregateOutputType | null;
    _min: MetricDefinitionMinAggregateOutputType | null;
    _max: MetricDefinitionMaxAggregateOutputType | null;
};
export type MetricDefinitionAvgAggregateOutputType = {
    version: number | null;
};
export type MetricDefinitionSumAggregateOutputType = {
    version: number | null;
};
export type MetricDefinitionMinAggregateOutputType = {
    id: string | null;
    metricCode: string | null;
    version: number | null;
    displayLabel: string | null;
    screenCode: string | null;
    businessMeaning: string | null;
    sourceTablesAndJoins: string | null;
    inclusionExclusionRules: string | null;
    ownerRoleCode: string | null;
    ledgerReconcilable: boolean | null;
    status: $Enums.GovernedItemStatus | null;
    supersededByMetricId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    requiredFunctionCode: string | null;
    composerResolverKey: string | null;
};
export type MetricDefinitionMaxAggregateOutputType = {
    id: string | null;
    metricCode: string | null;
    version: number | null;
    displayLabel: string | null;
    screenCode: string | null;
    businessMeaning: string | null;
    sourceTablesAndJoins: string | null;
    inclusionExclusionRules: string | null;
    ownerRoleCode: string | null;
    ledgerReconcilable: boolean | null;
    status: $Enums.GovernedItemStatus | null;
    supersededByMetricId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    requiredFunctionCode: string | null;
    composerResolverKey: string | null;
};
export type MetricDefinitionCountAggregateOutputType = {
    id: number;
    metricCode: number;
    version: number;
    displayLabel: number;
    screenCode: number;
    businessMeaning: number;
    sourceTablesAndJoins: number;
    inclusionExclusionRules: number;
    ownerRoleCode: number;
    ledgerReconcilable: number;
    status: number;
    supersededByMetricId: number;
    createdByUserId: number;
    createdAt: number;
    requiredFunctionCode: number;
    composerResolverKey: number;
    _all: number;
};
export type MetricDefinitionAvgAggregateInputType = {
    version?: true;
};
export type MetricDefinitionSumAggregateInputType = {
    version?: true;
};
export type MetricDefinitionMinAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    displayLabel?: true;
    screenCode?: true;
    businessMeaning?: true;
    sourceTablesAndJoins?: true;
    inclusionExclusionRules?: true;
    ownerRoleCode?: true;
    ledgerReconcilable?: true;
    status?: true;
    supersededByMetricId?: true;
    createdByUserId?: true;
    createdAt?: true;
    requiredFunctionCode?: true;
    composerResolverKey?: true;
};
export type MetricDefinitionMaxAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    displayLabel?: true;
    screenCode?: true;
    businessMeaning?: true;
    sourceTablesAndJoins?: true;
    inclusionExclusionRules?: true;
    ownerRoleCode?: true;
    ledgerReconcilable?: true;
    status?: true;
    supersededByMetricId?: true;
    createdByUserId?: true;
    createdAt?: true;
    requiredFunctionCode?: true;
    composerResolverKey?: true;
};
export type MetricDefinitionCountAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    displayLabel?: true;
    screenCode?: true;
    businessMeaning?: true;
    sourceTablesAndJoins?: true;
    inclusionExclusionRules?: true;
    ownerRoleCode?: true;
    ledgerReconcilable?: true;
    status?: true;
    supersededByMetricId?: true;
    createdByUserId?: true;
    createdAt?: true;
    requiredFunctionCode?: true;
    composerResolverKey?: true;
    _all?: true;
};
export type MetricDefinitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MetricDefinitionWhereInput;
    orderBy?: Prisma.MetricDefinitionOrderByWithRelationInput | Prisma.MetricDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.MetricDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MetricDefinitionCountAggregateInputType;
    _avg?: MetricDefinitionAvgAggregateInputType;
    _sum?: MetricDefinitionSumAggregateInputType;
    _min?: MetricDefinitionMinAggregateInputType;
    _max?: MetricDefinitionMaxAggregateInputType;
};
export type GetMetricDefinitionAggregateType<T extends MetricDefinitionAggregateArgs> = {
    [P in keyof T & keyof AggregateMetricDefinition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMetricDefinition[P]> : Prisma.GetScalarType<T[P], AggregateMetricDefinition[P]>;
};
export type MetricDefinitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MetricDefinitionWhereInput;
    orderBy?: Prisma.MetricDefinitionOrderByWithAggregationInput | Prisma.MetricDefinitionOrderByWithAggregationInput[];
    by: Prisma.MetricDefinitionScalarFieldEnum[] | Prisma.MetricDefinitionScalarFieldEnum;
    having?: Prisma.MetricDefinitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MetricDefinitionCountAggregateInputType | true;
    _avg?: MetricDefinitionAvgAggregateInputType;
    _sum?: MetricDefinitionSumAggregateInputType;
    _min?: MetricDefinitionMinAggregateInputType;
    _max?: MetricDefinitionMaxAggregateInputType;
};
export type MetricDefinitionGroupByOutputType = {
    id: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status: $Enums.GovernedItemStatus;
    supersededByMetricId: string | null;
    createdByUserId: string;
    createdAt: Date;
    requiredFunctionCode: string | null;
    composerResolverKey: string | null;
    _count: MetricDefinitionCountAggregateOutputType | null;
    _avg: MetricDefinitionAvgAggregateOutputType | null;
    _sum: MetricDefinitionSumAggregateOutputType | null;
    _min: MetricDefinitionMinAggregateOutputType | null;
    _max: MetricDefinitionMaxAggregateOutputType | null;
};
export type GetMetricDefinitionGroupByPayload<T extends MetricDefinitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MetricDefinitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MetricDefinitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MetricDefinitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MetricDefinitionGroupByOutputType[P]>;
}>>;
export type MetricDefinitionWhereInput = {
    AND?: Prisma.MetricDefinitionWhereInput | Prisma.MetricDefinitionWhereInput[];
    OR?: Prisma.MetricDefinitionWhereInput[];
    NOT?: Prisma.MetricDefinitionWhereInput | Prisma.MetricDefinitionWhereInput[];
    id?: Prisma.UuidFilter<"MetricDefinition"> | string;
    metricCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    version?: Prisma.IntFilter<"MetricDefinition"> | number;
    displayLabel?: Prisma.StringFilter<"MetricDefinition"> | string;
    screenCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    businessMeaning?: Prisma.StringFilter<"MetricDefinition"> | string;
    sourceTablesAndJoins?: Prisma.StringFilter<"MetricDefinition"> | string;
    inclusionExclusionRules?: Prisma.StringFilter<"MetricDefinition"> | string;
    ownerRoleCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    ledgerReconcilable?: Prisma.BoolFilter<"MetricDefinition"> | boolean;
    status?: Prisma.EnumGovernedItemStatusFilter<"MetricDefinition"> | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.UuidNullableFilter<"MetricDefinition"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"MetricDefinition"> | string;
    createdAt?: Prisma.DateTimeFilter<"MetricDefinition"> | Date | string;
    requiredFunctionCode?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
    composerResolverKey?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type MetricDefinitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    displayLabel?: Prisma.SortOrder;
    screenCode?: Prisma.SortOrder;
    businessMeaning?: Prisma.SortOrder;
    sourceTablesAndJoins?: Prisma.SortOrder;
    inclusionExclusionRules?: Prisma.SortOrder;
    ownerRoleCode?: Prisma.SortOrder;
    ledgerReconcilable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supersededByMetricId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    composerResolverKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type MetricDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    metricCode_version?: Prisma.MetricDefinitionMetricCodeVersionCompoundUniqueInput;
    AND?: Prisma.MetricDefinitionWhereInput | Prisma.MetricDefinitionWhereInput[];
    OR?: Prisma.MetricDefinitionWhereInput[];
    NOT?: Prisma.MetricDefinitionWhereInput | Prisma.MetricDefinitionWhereInput[];
    metricCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    version?: Prisma.IntFilter<"MetricDefinition"> | number;
    displayLabel?: Prisma.StringFilter<"MetricDefinition"> | string;
    screenCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    businessMeaning?: Prisma.StringFilter<"MetricDefinition"> | string;
    sourceTablesAndJoins?: Prisma.StringFilter<"MetricDefinition"> | string;
    inclusionExclusionRules?: Prisma.StringFilter<"MetricDefinition"> | string;
    ownerRoleCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    ledgerReconcilable?: Prisma.BoolFilter<"MetricDefinition"> | boolean;
    status?: Prisma.EnumGovernedItemStatusFilter<"MetricDefinition"> | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.UuidNullableFilter<"MetricDefinition"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"MetricDefinition"> | string;
    createdAt?: Prisma.DateTimeFilter<"MetricDefinition"> | Date | string;
    requiredFunctionCode?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
    composerResolverKey?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "metricCode_version">;
export type MetricDefinitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    displayLabel?: Prisma.SortOrder;
    screenCode?: Prisma.SortOrder;
    businessMeaning?: Prisma.SortOrder;
    sourceTablesAndJoins?: Prisma.SortOrder;
    inclusionExclusionRules?: Prisma.SortOrder;
    ownerRoleCode?: Prisma.SortOrder;
    ledgerReconcilable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supersededByMetricId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    composerResolverKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MetricDefinitionCountOrderByAggregateInput;
    _avg?: Prisma.MetricDefinitionAvgOrderByAggregateInput;
    _max?: Prisma.MetricDefinitionMaxOrderByAggregateInput;
    _min?: Prisma.MetricDefinitionMinOrderByAggregateInput;
    _sum?: Prisma.MetricDefinitionSumOrderByAggregateInput;
};
export type MetricDefinitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MetricDefinitionScalarWhereWithAggregatesInput | Prisma.MetricDefinitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MetricDefinitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MetricDefinitionScalarWhereWithAggregatesInput | Prisma.MetricDefinitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MetricDefinition"> | string;
    metricCode?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    version?: Prisma.IntWithAggregatesFilter<"MetricDefinition"> | number;
    displayLabel?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    screenCode?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    businessMeaning?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    sourceTablesAndJoins?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    inclusionExclusionRules?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    ownerRoleCode?: Prisma.StringWithAggregatesFilter<"MetricDefinition"> | string;
    ledgerReconcilable?: Prisma.BoolWithAggregatesFilter<"MetricDefinition"> | boolean;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"MetricDefinition"> | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.UuidNullableWithAggregatesFilter<"MetricDefinition"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"MetricDefinition"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MetricDefinition"> | Date | string;
    requiredFunctionCode?: Prisma.StringNullableWithAggregatesFilter<"MetricDefinition"> | string | null;
    composerResolverKey?: Prisma.StringNullableWithAggregatesFilter<"MetricDefinition"> | string | null;
};
export type MetricDefinitionCreateInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
    createdBy: Prisma.AppUserCreateNestedOneWithoutMetricDefinitionsCreatedInput;
};
export type MetricDefinitionUncheckedCreateInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
};
export type MetricDefinitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutMetricDefinitionsCreatedNestedInput;
};
export type MetricDefinitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionCreateManyInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
};
export type MetricDefinitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionListRelationFilter = {
    every?: Prisma.MetricDefinitionWhereInput;
    some?: Prisma.MetricDefinitionWhereInput;
    none?: Prisma.MetricDefinitionWhereInput;
};
export type MetricDefinitionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MetricDefinitionMetricCodeVersionCompoundUniqueInput = {
    metricCode: string;
    version: number;
};
export type MetricDefinitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    displayLabel?: Prisma.SortOrder;
    screenCode?: Prisma.SortOrder;
    businessMeaning?: Prisma.SortOrder;
    sourceTablesAndJoins?: Prisma.SortOrder;
    inclusionExclusionRules?: Prisma.SortOrder;
    ownerRoleCode?: Prisma.SortOrder;
    ledgerReconcilable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supersededByMetricId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    composerResolverKey?: Prisma.SortOrder;
};
export type MetricDefinitionAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type MetricDefinitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    displayLabel?: Prisma.SortOrder;
    screenCode?: Prisma.SortOrder;
    businessMeaning?: Prisma.SortOrder;
    sourceTablesAndJoins?: Prisma.SortOrder;
    inclusionExclusionRules?: Prisma.SortOrder;
    ownerRoleCode?: Prisma.SortOrder;
    ledgerReconcilable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supersededByMetricId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    composerResolverKey?: Prisma.SortOrder;
};
export type MetricDefinitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    displayLabel?: Prisma.SortOrder;
    screenCode?: Prisma.SortOrder;
    businessMeaning?: Prisma.SortOrder;
    sourceTablesAndJoins?: Prisma.SortOrder;
    inclusionExclusionRules?: Prisma.SortOrder;
    ownerRoleCode?: Prisma.SortOrder;
    ledgerReconcilable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supersededByMetricId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    composerResolverKey?: Prisma.SortOrder;
};
export type MetricDefinitionSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type MetricDefinitionCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput> | Prisma.MetricDefinitionCreateWithoutCreatedByInput[] | Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput | Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.MetricDefinitionCreateManyCreatedByInputEnvelope;
    connect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
};
export type MetricDefinitionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput> | Prisma.MetricDefinitionCreateWithoutCreatedByInput[] | Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput | Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.MetricDefinitionCreateManyCreatedByInputEnvelope;
    connect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
};
export type MetricDefinitionUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput> | Prisma.MetricDefinitionCreateWithoutCreatedByInput[] | Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput | Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.MetricDefinitionUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.MetricDefinitionUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.MetricDefinitionCreateManyCreatedByInputEnvelope;
    set?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    disconnect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    delete?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    connect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    update?: Prisma.MetricDefinitionUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.MetricDefinitionUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.MetricDefinitionUpdateManyWithWhereWithoutCreatedByInput | Prisma.MetricDefinitionUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.MetricDefinitionScalarWhereInput | Prisma.MetricDefinitionScalarWhereInput[];
};
export type MetricDefinitionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput> | Prisma.MetricDefinitionCreateWithoutCreatedByInput[] | Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput | Prisma.MetricDefinitionCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.MetricDefinitionUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.MetricDefinitionUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.MetricDefinitionCreateManyCreatedByInputEnvelope;
    set?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    disconnect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    delete?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    connect?: Prisma.MetricDefinitionWhereUniqueInput | Prisma.MetricDefinitionWhereUniqueInput[];
    update?: Prisma.MetricDefinitionUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.MetricDefinitionUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.MetricDefinitionUpdateManyWithWhereWithoutCreatedByInput | Prisma.MetricDefinitionUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.MetricDefinitionScalarWhereInput | Prisma.MetricDefinitionScalarWhereInput[];
};
export type MetricDefinitionCreateWithoutCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
};
export type MetricDefinitionUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
};
export type MetricDefinitionCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.MetricDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput>;
};
export type MetricDefinitionCreateManyCreatedByInputEnvelope = {
    data: Prisma.MetricDefinitionCreateManyCreatedByInput | Prisma.MetricDefinitionCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type MetricDefinitionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.MetricDefinitionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MetricDefinitionUpdateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.MetricDefinitionCreateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedCreateWithoutCreatedByInput>;
};
export type MetricDefinitionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.MetricDefinitionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MetricDefinitionUpdateWithoutCreatedByInput, Prisma.MetricDefinitionUncheckedUpdateWithoutCreatedByInput>;
};
export type MetricDefinitionUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.MetricDefinitionScalarWhereInput;
    data: Prisma.XOR<Prisma.MetricDefinitionUpdateManyMutationInput, Prisma.MetricDefinitionUncheckedUpdateManyWithoutCreatedByInput>;
};
export type MetricDefinitionScalarWhereInput = {
    AND?: Prisma.MetricDefinitionScalarWhereInput | Prisma.MetricDefinitionScalarWhereInput[];
    OR?: Prisma.MetricDefinitionScalarWhereInput[];
    NOT?: Prisma.MetricDefinitionScalarWhereInput | Prisma.MetricDefinitionScalarWhereInput[];
    id?: Prisma.UuidFilter<"MetricDefinition"> | string;
    metricCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    version?: Prisma.IntFilter<"MetricDefinition"> | number;
    displayLabel?: Prisma.StringFilter<"MetricDefinition"> | string;
    screenCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    businessMeaning?: Prisma.StringFilter<"MetricDefinition"> | string;
    sourceTablesAndJoins?: Prisma.StringFilter<"MetricDefinition"> | string;
    inclusionExclusionRules?: Prisma.StringFilter<"MetricDefinition"> | string;
    ownerRoleCode?: Prisma.StringFilter<"MetricDefinition"> | string;
    ledgerReconcilable?: Prisma.BoolFilter<"MetricDefinition"> | boolean;
    status?: Prisma.EnumGovernedItemStatusFilter<"MetricDefinition"> | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.UuidNullableFilter<"MetricDefinition"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"MetricDefinition"> | string;
    createdAt?: Prisma.DateTimeFilter<"MetricDefinition"> | Date | string;
    requiredFunctionCode?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
    composerResolverKey?: Prisma.StringNullableFilter<"MetricDefinition"> | string | null;
};
export type MetricDefinitionCreateManyCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    displayLabel: string;
    screenCode: string;
    businessMeaning: string;
    sourceTablesAndJoins: string;
    inclusionExclusionRules: string;
    ownerRoleCode: string;
    ledgerReconcilable: boolean;
    status?: $Enums.GovernedItemStatus;
    supersededByMetricId?: string | null;
    createdAt?: Date | string;
    requiredFunctionCode?: string | null;
    composerResolverKey?: string | null;
};
export type MetricDefinitionUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    displayLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    screenCode?: Prisma.StringFieldUpdateOperationsInput | string;
    businessMeaning?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceTablesAndJoins?: Prisma.StringFieldUpdateOperationsInput | string;
    inclusionExclusionRules?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerRoleCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerReconcilable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    supersededByMetricId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requiredFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    composerResolverKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MetricDefinitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    displayLabel?: boolean;
    screenCode?: boolean;
    businessMeaning?: boolean;
    sourceTablesAndJoins?: boolean;
    inclusionExclusionRules?: boolean;
    ownerRoleCode?: boolean;
    ledgerReconcilable?: boolean;
    status?: boolean;
    supersededByMetricId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    requiredFunctionCode?: boolean;
    composerResolverKey?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["metricDefinition"]>;
export type MetricDefinitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    displayLabel?: boolean;
    screenCode?: boolean;
    businessMeaning?: boolean;
    sourceTablesAndJoins?: boolean;
    inclusionExclusionRules?: boolean;
    ownerRoleCode?: boolean;
    ledgerReconcilable?: boolean;
    status?: boolean;
    supersededByMetricId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    requiredFunctionCode?: boolean;
    composerResolverKey?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["metricDefinition"]>;
export type MetricDefinitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    displayLabel?: boolean;
    screenCode?: boolean;
    businessMeaning?: boolean;
    sourceTablesAndJoins?: boolean;
    inclusionExclusionRules?: boolean;
    ownerRoleCode?: boolean;
    ledgerReconcilable?: boolean;
    status?: boolean;
    supersededByMetricId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    requiredFunctionCode?: boolean;
    composerResolverKey?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["metricDefinition"]>;
export type MetricDefinitionSelectScalar = {
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    displayLabel?: boolean;
    screenCode?: boolean;
    businessMeaning?: boolean;
    sourceTablesAndJoins?: boolean;
    inclusionExclusionRules?: boolean;
    ownerRoleCode?: boolean;
    ledgerReconcilable?: boolean;
    status?: boolean;
    supersededByMetricId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    requiredFunctionCode?: boolean;
    composerResolverKey?: boolean;
};
export type MetricDefinitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "metricCode" | "version" | "displayLabel" | "screenCode" | "businessMeaning" | "sourceTablesAndJoins" | "inclusionExclusionRules" | "ownerRoleCode" | "ledgerReconcilable" | "status" | "supersededByMetricId" | "createdByUserId" | "createdAt" | "requiredFunctionCode" | "composerResolverKey", ExtArgs["result"]["metricDefinition"]>;
export type MetricDefinitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type MetricDefinitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type MetricDefinitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $MetricDefinitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MetricDefinition";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        metricCode: string;
        version: number;
        displayLabel: string;
        screenCode: string;
        businessMeaning: string;
        sourceTablesAndJoins: string;
        inclusionExclusionRules: string;
        ownerRoleCode: string;
        ledgerReconcilable: boolean;
        status: $Enums.GovernedItemStatus;
        supersededByMetricId: string | null;
        createdByUserId: string;
        createdAt: Date;
        requiredFunctionCode: string | null;
        composerResolverKey: string | null;
    }, ExtArgs["result"]["metricDefinition"]>;
    composites: {};
};
export type MetricDefinitionGetPayload<S extends boolean | null | undefined | MetricDefinitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload, S>;
export type MetricDefinitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MetricDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MetricDefinitionCountAggregateInputType | true;
};
export interface MetricDefinitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MetricDefinition'];
        meta: {
            name: 'MetricDefinition';
        };
    };
    findUnique<T extends MetricDefinitionFindUniqueArgs>(args: Prisma.SelectSubset<T, MetricDefinitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MetricDefinitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MetricDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MetricDefinitionFindFirstArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MetricDefinitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MetricDefinitionFindManyArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MetricDefinitionCreateArgs>(args: Prisma.SelectSubset<T, MetricDefinitionCreateArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MetricDefinitionCreateManyArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MetricDefinitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MetricDefinitionDeleteArgs>(args: Prisma.SelectSubset<T, MetricDefinitionDeleteArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MetricDefinitionUpdateArgs>(args: Prisma.SelectSubset<T, MetricDefinitionUpdateArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MetricDefinitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MetricDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MetricDefinitionUpdateManyArgs>(args: Prisma.SelectSubset<T, MetricDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MetricDefinitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MetricDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MetricDefinitionUpsertArgs>(args: Prisma.SelectSubset<T, MetricDefinitionUpsertArgs<ExtArgs>>): Prisma.Prisma__MetricDefinitionClient<runtime.Types.Result.GetResult<Prisma.$MetricDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MetricDefinitionCountArgs>(args?: Prisma.Subset<T, MetricDefinitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MetricDefinitionCountAggregateOutputType> : number>;
    aggregate<T extends MetricDefinitionAggregateArgs>(args: Prisma.Subset<T, MetricDefinitionAggregateArgs>): Prisma.PrismaPromise<GetMetricDefinitionAggregateType<T>>;
    groupBy<T extends MetricDefinitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MetricDefinitionGroupByArgs['orderBy'];
    } : {
        orderBy?: MetricDefinitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MetricDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MetricDefinitionFieldRefs;
}
export interface Prisma__MetricDefinitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MetricDefinitionFieldRefs {
    readonly id: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly metricCode: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly version: Prisma.FieldRef<"MetricDefinition", 'Int'>;
    readonly displayLabel: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly screenCode: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly businessMeaning: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly sourceTablesAndJoins: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly inclusionExclusionRules: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly ownerRoleCode: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly ledgerReconcilable: Prisma.FieldRef<"MetricDefinition", 'Boolean'>;
    readonly status: Prisma.FieldRef<"MetricDefinition", 'GovernedItemStatus'>;
    readonly supersededByMetricId: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MetricDefinition", 'DateTime'>;
    readonly requiredFunctionCode: Prisma.FieldRef<"MetricDefinition", 'String'>;
    readonly composerResolverKey: Prisma.FieldRef<"MetricDefinition", 'String'>;
}
export type MetricDefinitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where: Prisma.MetricDefinitionWhereUniqueInput;
};
export type MetricDefinitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where: Prisma.MetricDefinitionWhereUniqueInput;
};
export type MetricDefinitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where?: Prisma.MetricDefinitionWhereInput;
    orderBy?: Prisma.MetricDefinitionOrderByWithRelationInput | Prisma.MetricDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.MetricDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MetricDefinitionScalarFieldEnum | Prisma.MetricDefinitionScalarFieldEnum[];
};
export type MetricDefinitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where?: Prisma.MetricDefinitionWhereInput;
    orderBy?: Prisma.MetricDefinitionOrderByWithRelationInput | Prisma.MetricDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.MetricDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MetricDefinitionScalarFieldEnum | Prisma.MetricDefinitionScalarFieldEnum[];
};
export type MetricDefinitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where?: Prisma.MetricDefinitionWhereInput;
    orderBy?: Prisma.MetricDefinitionOrderByWithRelationInput | Prisma.MetricDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.MetricDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MetricDefinitionScalarFieldEnum | Prisma.MetricDefinitionScalarFieldEnum[];
};
export type MetricDefinitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MetricDefinitionCreateInput, Prisma.MetricDefinitionUncheckedCreateInput>;
};
export type MetricDefinitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MetricDefinitionCreateManyInput | Prisma.MetricDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MetricDefinitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    data: Prisma.MetricDefinitionCreateManyInput | Prisma.MetricDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MetricDefinitionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MetricDefinitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MetricDefinitionUpdateInput, Prisma.MetricDefinitionUncheckedUpdateInput>;
    where: Prisma.MetricDefinitionWhereUniqueInput;
};
export type MetricDefinitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MetricDefinitionUpdateManyMutationInput, Prisma.MetricDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.MetricDefinitionWhereInput;
    limit?: number;
};
export type MetricDefinitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MetricDefinitionUpdateManyMutationInput, Prisma.MetricDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.MetricDefinitionWhereInput;
    limit?: number;
    include?: Prisma.MetricDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MetricDefinitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where: Prisma.MetricDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MetricDefinitionCreateInput, Prisma.MetricDefinitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MetricDefinitionUpdateInput, Prisma.MetricDefinitionUncheckedUpdateInput>;
};
export type MetricDefinitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
    where: Prisma.MetricDefinitionWhereUniqueInput;
};
export type MetricDefinitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MetricDefinitionWhereInput;
    limit?: number;
};
export type MetricDefinitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MetricDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.MetricDefinitionOmit<ExtArgs> | null;
    include?: Prisma.MetricDefinitionInclude<ExtArgs> | null;
};
