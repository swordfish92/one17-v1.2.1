import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KpiDefinitionModel = runtime.Types.Result.DefaultSelection<Prisma.$KpiDefinitionPayload>;
export type AggregateKpiDefinition = {
    _count: KpiDefinitionCountAggregateOutputType | null;
    _min: KpiDefinitionMinAggregateOutputType | null;
    _max: KpiDefinitionMaxAggregateOutputType | null;
};
export type KpiDefinitionMinAggregateOutputType = {
    id: string | null;
    kraCode: string | null;
    tier: $Enums.PmsTier | null;
    kpiText: string | null;
    kpiClass: $Enums.KpiClass | null;
    objectiveText: string | null;
    exampleActivity: string | null;
    measurementBasis: $Enums.MeasurementBasis | null;
    frequency: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type KpiDefinitionMaxAggregateOutputType = {
    id: string | null;
    kraCode: string | null;
    tier: $Enums.PmsTier | null;
    kpiText: string | null;
    kpiClass: $Enums.KpiClass | null;
    objectiveText: string | null;
    exampleActivity: string | null;
    measurementBasis: $Enums.MeasurementBasis | null;
    frequency: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type KpiDefinitionCountAggregateOutputType = {
    id: number;
    kraCode: number;
    tier: number;
    kpiText: number;
    kpiClass: number;
    objectiveText: number;
    exampleActivity: number;
    measurementBasis: number;
    frequency: number;
    status: number;
    createdAt: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    _all: number;
};
export type KpiDefinitionMinAggregateInputType = {
    id?: true;
    kraCode?: true;
    tier?: true;
    kpiText?: true;
    kpiClass?: true;
    objectiveText?: true;
    exampleActivity?: true;
    measurementBasis?: true;
    frequency?: true;
    status?: true;
    createdAt?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type KpiDefinitionMaxAggregateInputType = {
    id?: true;
    kraCode?: true;
    tier?: true;
    kpiText?: true;
    kpiClass?: true;
    objectiveText?: true;
    exampleActivity?: true;
    measurementBasis?: true;
    frequency?: true;
    status?: true;
    createdAt?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type KpiDefinitionCountAggregateInputType = {
    id?: true;
    kraCode?: true;
    tier?: true;
    kpiText?: true;
    kpiClass?: true;
    objectiveText?: true;
    exampleActivity?: true;
    measurementBasis?: true;
    frequency?: true;
    status?: true;
    createdAt?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    _all?: true;
};
export type KpiDefinitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithRelationInput | Prisma.KpiDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KpiDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KpiDefinitionCountAggregateInputType;
    _min?: KpiDefinitionMinAggregateInputType;
    _max?: KpiDefinitionMaxAggregateInputType;
};
export type GetKpiDefinitionAggregateType<T extends KpiDefinitionAggregateArgs> = {
    [P in keyof T & keyof AggregateKpiDefinition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKpiDefinition[P]> : Prisma.GetScalarType<T[P], AggregateKpiDefinition[P]>;
};
export type KpiDefinitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithAggregationInput | Prisma.KpiDefinitionOrderByWithAggregationInput[];
    by: Prisma.KpiDefinitionScalarFieldEnum[] | Prisma.KpiDefinitionScalarFieldEnum;
    having?: Prisma.KpiDefinitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KpiDefinitionCountAggregateInputType | true;
    _min?: KpiDefinitionMinAggregateInputType;
    _max?: KpiDefinitionMaxAggregateInputType;
};
export type KpiDefinitionGroupByOutputType = {
    id: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText: string | null;
    exampleActivity: string | null;
    measurementBasis: $Enums.MeasurementBasis;
    frequency: string | null;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    _count: KpiDefinitionCountAggregateOutputType | null;
    _min: KpiDefinitionMinAggregateOutputType | null;
    _max: KpiDefinitionMaxAggregateOutputType | null;
};
export type GetKpiDefinitionGroupByPayload<T extends KpiDefinitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KpiDefinitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KpiDefinitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KpiDefinitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KpiDefinitionGroupByOutputType[P]>;
}>>;
export type KpiDefinitionWhereInput = {
    AND?: Prisma.KpiDefinitionWhereInput | Prisma.KpiDefinitionWhereInput[];
    OR?: Prisma.KpiDefinitionWhereInput[];
    NOT?: Prisma.KpiDefinitionWhereInput | Prisma.KpiDefinitionWhereInput[];
    id?: Prisma.UuidFilter<"KpiDefinition"> | string;
    kraCode?: Prisma.StringFilter<"KpiDefinition"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiDefinition"> | $Enums.PmsTier;
    kpiText?: Prisma.StringFilter<"KpiDefinition"> | string;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiDefinition"> | $Enums.KpiClass;
    objectiveText?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    exampleActivity?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFilter<"KpiDefinition"> | $Enums.MeasurementBasis;
    frequency?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiDefinition"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"KpiDefinition"> | Date | string;
    proposedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    kra?: Prisma.XOR<Prisma.EnterpriseKraScalarRelationFilter, Prisma.EnterpriseKraWhereInput>;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideListRelationFilter;
    activityReports?: Prisma.ActivityReportListRelationFilter;
    kpiScores?: Prisma.EmployeeKpiScoreListRelationFilter;
    taggedTasks?: Prisma.TaskListRelationFilter;
};
export type KpiDefinitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kraCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiText?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    objectiveText?: Prisma.SortOrderInput | Prisma.SortOrder;
    exampleActivity?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementBasis?: Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    kra?: Prisma.EnterpriseKraOrderByWithRelationInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideOrderByRelationAggregateInput;
    activityReports?: Prisma.ActivityReportOrderByRelationAggregateInput;
    kpiScores?: Prisma.EmployeeKpiScoreOrderByRelationAggregateInput;
    taggedTasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type KpiDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    kraCode_tier?: Prisma.KpiDefinitionKraCodeTierCompoundUniqueInput;
    AND?: Prisma.KpiDefinitionWhereInput | Prisma.KpiDefinitionWhereInput[];
    OR?: Prisma.KpiDefinitionWhereInput[];
    NOT?: Prisma.KpiDefinitionWhereInput | Prisma.KpiDefinitionWhereInput[];
    kraCode?: Prisma.StringFilter<"KpiDefinition"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiDefinition"> | $Enums.PmsTier;
    kpiText?: Prisma.StringFilter<"KpiDefinition"> | string;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiDefinition"> | $Enums.KpiClass;
    objectiveText?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    exampleActivity?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFilter<"KpiDefinition"> | $Enums.MeasurementBasis;
    frequency?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiDefinition"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"KpiDefinition"> | Date | string;
    proposedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    kra?: Prisma.XOR<Prisma.EnterpriseKraScalarRelationFilter, Prisma.EnterpriseKraWhereInput>;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideListRelationFilter;
    activityReports?: Prisma.ActivityReportListRelationFilter;
    kpiScores?: Prisma.EmployeeKpiScoreListRelationFilter;
    taggedTasks?: Prisma.TaskListRelationFilter;
}, "id" | "workflowInstanceId" | "kraCode_tier">;
export type KpiDefinitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kraCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiText?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    objectiveText?: Prisma.SortOrderInput | Prisma.SortOrder;
    exampleActivity?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementBasis?: Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.KpiDefinitionCountOrderByAggregateInput;
    _max?: Prisma.KpiDefinitionMaxOrderByAggregateInput;
    _min?: Prisma.KpiDefinitionMinOrderByAggregateInput;
};
export type KpiDefinitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.KpiDefinitionScalarWhereWithAggregatesInput | Prisma.KpiDefinitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.KpiDefinitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KpiDefinitionScalarWhereWithAggregatesInput | Prisma.KpiDefinitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"KpiDefinition"> | string;
    kraCode?: Prisma.StringWithAggregatesFilter<"KpiDefinition"> | string;
    tier?: Prisma.EnumPmsTierWithAggregatesFilter<"KpiDefinition"> | $Enums.PmsTier;
    kpiText?: Prisma.StringWithAggregatesFilter<"KpiDefinition"> | string;
    kpiClass?: Prisma.EnumKpiClassWithAggregatesFilter<"KpiDefinition"> | $Enums.KpiClass;
    objectiveText?: Prisma.StringNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
    exampleActivity?: Prisma.StringNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisWithAggregatesFilter<"KpiDefinition"> | $Enums.MeasurementBasis;
    frequency?: Prisma.StringNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"KpiDefinition"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KpiDefinition"> | Date | string;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"KpiDefinition"> | string | null;
};
export type KpiDefinitionCreateInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionCreateManyInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type KpiDefinitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KpiDefinitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KpiDefinitionListRelationFilter = {
    every?: Prisma.KpiDefinitionWhereInput;
    some?: Prisma.KpiDefinitionWhereInput;
    none?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KpiDefinitionKraCodeTierCompoundUniqueInput = {
    kraCode: string;
    tier: $Enums.PmsTier;
};
export type KpiDefinitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kraCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiText?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    objectiveText?: Prisma.SortOrder;
    exampleActivity?: Prisma.SortOrder;
    measurementBasis?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type KpiDefinitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kraCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiText?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    objectiveText?: Prisma.SortOrder;
    exampleActivity?: Prisma.SortOrder;
    measurementBasis?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type KpiDefinitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kraCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiText?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    objectiveText?: Prisma.SortOrder;
    exampleActivity?: Prisma.SortOrder;
    measurementBasis?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type KpiDefinitionNullableScalarRelationFilter = {
    is?: Prisma.KpiDefinitionWhereInput | null;
    isNot?: Prisma.KpiDefinitionWhereInput | null;
};
export type KpiDefinitionScalarRelationFilter = {
    is?: Prisma.KpiDefinitionWhereInput;
    isNot?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionCreateNestedManyWithoutKraInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput> | Prisma.KpiDefinitionCreateWithoutKraInput[] | Prisma.KpiDefinitionUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKraInput | Prisma.KpiDefinitionCreateOrConnectWithoutKraInput[];
    createMany?: Prisma.KpiDefinitionCreateManyKraInputEnvelope;
    connect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
};
export type KpiDefinitionUncheckedCreateNestedManyWithoutKraInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput> | Prisma.KpiDefinitionCreateWithoutKraInput[] | Prisma.KpiDefinitionUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKraInput | Prisma.KpiDefinitionCreateOrConnectWithoutKraInput[];
    createMany?: Prisma.KpiDefinitionCreateManyKraInputEnvelope;
    connect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
};
export type KpiDefinitionUpdateManyWithoutKraNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput> | Prisma.KpiDefinitionCreateWithoutKraInput[] | Prisma.KpiDefinitionUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKraInput | Prisma.KpiDefinitionCreateOrConnectWithoutKraInput[];
    upsert?: Prisma.KpiDefinitionUpsertWithWhereUniqueWithoutKraInput | Prisma.KpiDefinitionUpsertWithWhereUniqueWithoutKraInput[];
    createMany?: Prisma.KpiDefinitionCreateManyKraInputEnvelope;
    set?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    disconnect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    delete?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    connect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    update?: Prisma.KpiDefinitionUpdateWithWhereUniqueWithoutKraInput | Prisma.KpiDefinitionUpdateWithWhereUniqueWithoutKraInput[];
    updateMany?: Prisma.KpiDefinitionUpdateManyWithWhereWithoutKraInput | Prisma.KpiDefinitionUpdateManyWithWhereWithoutKraInput[];
    deleteMany?: Prisma.KpiDefinitionScalarWhereInput | Prisma.KpiDefinitionScalarWhereInput[];
};
export type KpiDefinitionUncheckedUpdateManyWithoutKraNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput> | Prisma.KpiDefinitionCreateWithoutKraInput[] | Prisma.KpiDefinitionUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKraInput | Prisma.KpiDefinitionCreateOrConnectWithoutKraInput[];
    upsert?: Prisma.KpiDefinitionUpsertWithWhereUniqueWithoutKraInput | Prisma.KpiDefinitionUpsertWithWhereUniqueWithoutKraInput[];
    createMany?: Prisma.KpiDefinitionCreateManyKraInputEnvelope;
    set?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    disconnect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    delete?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    connect?: Prisma.KpiDefinitionWhereUniqueInput | Prisma.KpiDefinitionWhereUniqueInput[];
    update?: Prisma.KpiDefinitionUpdateWithWhereUniqueWithoutKraInput | Prisma.KpiDefinitionUpdateWithWhereUniqueWithoutKraInput[];
    updateMany?: Prisma.KpiDefinitionUpdateManyWithWhereWithoutKraInput | Prisma.KpiDefinitionUpdateManyWithWhereWithoutKraInput[];
    deleteMany?: Prisma.KpiDefinitionScalarWhereInput | Prisma.KpiDefinitionScalarWhereInput[];
};
export type EnumPmsTierFieldUpdateOperationsInput = {
    set?: $Enums.PmsTier;
};
export type EnumKpiClassFieldUpdateOperationsInput = {
    set?: $Enums.KpiClass;
};
export type EnumMeasurementBasisFieldUpdateOperationsInput = {
    set?: $Enums.MeasurementBasis;
};
export type KpiDefinitionCreateNestedOneWithoutTaggedTasksInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedCreateWithoutTaggedTasksInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutTaggedTasksInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionUpdateOneWithoutTaggedTasksNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedCreateWithoutTaggedTasksInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutTaggedTasksInput;
    upsert?: Prisma.KpiDefinitionUpsertWithoutTaggedTasksInput;
    disconnect?: Prisma.KpiDefinitionWhereInput | boolean;
    delete?: Prisma.KpiDefinitionWhereInput | boolean;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KpiDefinitionUpdateToOneWithWhereWithoutTaggedTasksInput, Prisma.KpiDefinitionUpdateWithoutTaggedTasksInput>, Prisma.KpiDefinitionUncheckedUpdateWithoutTaggedTasksInput>;
};
export type KpiDefinitionCreateNestedOneWithoutRoleScorecardOverridesInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedCreateWithoutRoleScorecardOverridesInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutRoleScorecardOverridesInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionUpdateOneRequiredWithoutRoleScorecardOverridesNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedCreateWithoutRoleScorecardOverridesInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutRoleScorecardOverridesInput;
    upsert?: Prisma.KpiDefinitionUpsertWithoutRoleScorecardOverridesInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KpiDefinitionUpdateToOneWithWhereWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUpdateWithoutRoleScorecardOverridesInput>, Prisma.KpiDefinitionUncheckedUpdateWithoutRoleScorecardOverridesInput>;
};
export type KpiDefinitionCreateNestedOneWithoutActivityReportsInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedCreateWithoutActivityReportsInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutActivityReportsInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionUpdateOneRequiredWithoutActivityReportsNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedCreateWithoutActivityReportsInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutActivityReportsInput;
    upsert?: Prisma.KpiDefinitionUpsertWithoutActivityReportsInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KpiDefinitionUpdateToOneWithWhereWithoutActivityReportsInput, Prisma.KpiDefinitionUpdateWithoutActivityReportsInput>, Prisma.KpiDefinitionUncheckedUpdateWithoutActivityReportsInput>;
};
export type KpiDefinitionCreateNestedOneWithoutKpiScoresInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedCreateWithoutKpiScoresInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKpiScoresInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionUpdateOneRequiredWithoutKpiScoresNestedInput = {
    create?: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedCreateWithoutKpiScoresInput>;
    connectOrCreate?: Prisma.KpiDefinitionCreateOrConnectWithoutKpiScoresInput;
    upsert?: Prisma.KpiDefinitionUpsertWithoutKpiScoresInput;
    connect?: Prisma.KpiDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KpiDefinitionUpdateToOneWithWhereWithoutKpiScoresInput, Prisma.KpiDefinitionUpdateWithoutKpiScoresInput>, Prisma.KpiDefinitionUncheckedUpdateWithoutKpiScoresInput>;
};
export type KpiDefinitionCreateWithoutKraInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateWithoutKraInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionCreateOrConnectWithoutKraInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput>;
};
export type KpiDefinitionCreateManyKraInputEnvelope = {
    data: Prisma.KpiDefinitionCreateManyKraInput | Prisma.KpiDefinitionCreateManyKraInput[];
    skipDuplicates?: boolean;
};
export type KpiDefinitionUpsertWithWhereUniqueWithoutKraInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutKraInput, Prisma.KpiDefinitionUncheckedUpdateWithoutKraInput>;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKraInput, Prisma.KpiDefinitionUncheckedCreateWithoutKraInput>;
};
export type KpiDefinitionUpdateWithWhereUniqueWithoutKraInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutKraInput, Prisma.KpiDefinitionUncheckedUpdateWithoutKraInput>;
};
export type KpiDefinitionUpdateManyWithWhereWithoutKraInput = {
    where: Prisma.KpiDefinitionScalarWhereInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateManyMutationInput, Prisma.KpiDefinitionUncheckedUpdateManyWithoutKraInput>;
};
export type KpiDefinitionScalarWhereInput = {
    AND?: Prisma.KpiDefinitionScalarWhereInput | Prisma.KpiDefinitionScalarWhereInput[];
    OR?: Prisma.KpiDefinitionScalarWhereInput[];
    NOT?: Prisma.KpiDefinitionScalarWhereInput | Prisma.KpiDefinitionScalarWhereInput[];
    id?: Prisma.UuidFilter<"KpiDefinition"> | string;
    kraCode?: Prisma.StringFilter<"KpiDefinition"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiDefinition"> | $Enums.PmsTier;
    kpiText?: Prisma.StringFilter<"KpiDefinition"> | string;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiDefinition"> | $Enums.KpiClass;
    objectiveText?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    exampleActivity?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFilter<"KpiDefinition"> | $Enums.MeasurementBasis;
    frequency?: Prisma.StringNullableFilter<"KpiDefinition"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiDefinition"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"KpiDefinition"> | Date | string;
    proposedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"KpiDefinition"> | string | null;
};
export type KpiDefinitionCreateWithoutTaggedTasksInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateWithoutTaggedTasksInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionCreateOrConnectWithoutTaggedTasksInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedCreateWithoutTaggedTasksInput>;
};
export type KpiDefinitionUpsertWithoutTaggedTasksInput = {
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedUpdateWithoutTaggedTasksInput>;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedCreateWithoutTaggedTasksInput>;
    where?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionUpdateToOneWithWhereWithoutTaggedTasksInput = {
    where?: Prisma.KpiDefinitionWhereInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutTaggedTasksInput, Prisma.KpiDefinitionUncheckedUpdateWithoutTaggedTasksInput>;
};
export type KpiDefinitionUpdateWithoutTaggedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateWithoutTaggedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionCreateWithoutRoleScorecardOverridesInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput;
    activityReports?: Prisma.ActivityReportCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateWithoutRoleScorecardOverridesInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    activityReports?: Prisma.ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionCreateOrConnectWithoutRoleScorecardOverridesInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedCreateWithoutRoleScorecardOverridesInput>;
};
export type KpiDefinitionUpsertWithoutRoleScorecardOverridesInput = {
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedUpdateWithoutRoleScorecardOverridesInput>;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedCreateWithoutRoleScorecardOverridesInput>;
    where?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionUpdateToOneWithWhereWithoutRoleScorecardOverridesInput = {
    where?: Prisma.KpiDefinitionWhereInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutRoleScorecardOverridesInput, Prisma.KpiDefinitionUncheckedUpdateWithoutRoleScorecardOverridesInput>;
};
export type KpiDefinitionUpdateWithoutRoleScorecardOverridesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput;
    activityReports?: Prisma.ActivityReportUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateWithoutRoleScorecardOverridesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activityReports?: Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionCreateWithoutActivityReportsInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateWithoutActivityReportsInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionCreateOrConnectWithoutActivityReportsInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedCreateWithoutActivityReportsInput>;
};
export type KpiDefinitionUpsertWithoutActivityReportsInput = {
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedUpdateWithoutActivityReportsInput>;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedCreateWithoutActivityReportsInput>;
    where?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionUpdateToOneWithWhereWithoutActivityReportsInput = {
    where?: Prisma.KpiDefinitionWhereInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutActivityReportsInput, Prisma.KpiDefinitionUncheckedUpdateWithoutActivityReportsInput>;
};
export type KpiDefinitionUpdateWithoutActivityReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateWithoutActivityReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionCreateWithoutKpiScoresInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionUncheckedCreateWithoutKpiScoresInput = {
    id?: string;
    kraCode: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    activityReports?: Prisma.ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput;
    taggedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutKpiDefinitionInput;
};
export type KpiDefinitionCreateOrConnectWithoutKpiScoresInput = {
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedCreateWithoutKpiScoresInput>;
};
export type KpiDefinitionUpsertWithoutKpiScoresInput = {
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedUpdateWithoutKpiScoresInput>;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedCreateWithoutKpiScoresInput>;
    where?: Prisma.KpiDefinitionWhereInput;
};
export type KpiDefinitionUpdateToOneWithWhereWithoutKpiScoresInput = {
    where?: Prisma.KpiDefinitionWhereInput;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateWithoutKpiScoresInput, Prisma.KpiDefinitionUncheckedUpdateWithoutKpiScoresInput>;
};
export type KpiDefinitionUpdateWithoutKpiScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateWithoutKpiScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionCreateManyKraInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiText: string;
    kpiClass: $Enums.KpiClass;
    objectiveText?: string | null;
    exampleActivity?: string | null;
    measurementBasis?: $Enums.MeasurementBasis;
    frequency?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type KpiDefinitionUpdateWithoutKraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateWithoutKraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    roleScorecardOverrides?: Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    activityReports?: Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
    taggedTasks?: Prisma.TaskUncheckedUpdateManyWithoutKpiDefinitionNestedInput;
};
export type KpiDefinitionUncheckedUpdateManyWithoutKraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiText?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    objectiveText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exampleActivity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementBasis?: Prisma.EnumMeasurementBasisFieldUpdateOperationsInput | $Enums.MeasurementBasis;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KpiDefinitionCountOutputType = {
    roleScorecardOverrides: number;
    activityReports: number;
    kpiScores: number;
    taggedTasks: number;
};
export type KpiDefinitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roleScorecardOverrides?: boolean | KpiDefinitionCountOutputTypeCountRoleScorecardOverridesArgs;
    activityReports?: boolean | KpiDefinitionCountOutputTypeCountActivityReportsArgs;
    kpiScores?: boolean | KpiDefinitionCountOutputTypeCountKpiScoresArgs;
    taggedTasks?: boolean | KpiDefinitionCountOutputTypeCountTaggedTasksArgs;
};
export type KpiDefinitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionCountOutputTypeSelect<ExtArgs> | null;
};
export type KpiDefinitionCountOutputTypeCountRoleScorecardOverridesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleScorecardOverrideWhereInput;
};
export type KpiDefinitionCountOutputTypeCountActivityReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityReportWhereInput;
};
export type KpiDefinitionCountOutputTypeCountKpiScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeKpiScoreWhereInput;
};
export type KpiDefinitionCountOutputTypeCountTaggedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type KpiDefinitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kraCode?: boolean;
    tier?: boolean;
    kpiText?: boolean;
    kpiClass?: boolean;
    objectiveText?: boolean;
    exampleActivity?: boolean;
    measurementBasis?: boolean;
    frequency?: boolean;
    status?: boolean;
    createdAt?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    roleScorecardOverrides?: boolean | Prisma.KpiDefinition$roleScorecardOverridesArgs<ExtArgs>;
    activityReports?: boolean | Prisma.KpiDefinition$activityReportsArgs<ExtArgs>;
    kpiScores?: boolean | Prisma.KpiDefinition$kpiScoresArgs<ExtArgs>;
    taggedTasks?: boolean | Prisma.KpiDefinition$taggedTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.KpiDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiDefinition"]>;
export type KpiDefinitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kraCode?: boolean;
    tier?: boolean;
    kpiText?: boolean;
    kpiClass?: boolean;
    objectiveText?: boolean;
    exampleActivity?: boolean;
    measurementBasis?: boolean;
    frequency?: boolean;
    status?: boolean;
    createdAt?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiDefinition"]>;
export type KpiDefinitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kraCode?: boolean;
    tier?: boolean;
    kpiText?: boolean;
    kpiClass?: boolean;
    objectiveText?: boolean;
    exampleActivity?: boolean;
    measurementBasis?: boolean;
    frequency?: boolean;
    status?: boolean;
    createdAt?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiDefinition"]>;
export type KpiDefinitionSelectScalar = {
    id?: boolean;
    kraCode?: boolean;
    tier?: boolean;
    kpiText?: boolean;
    kpiClass?: boolean;
    objectiveText?: boolean;
    exampleActivity?: boolean;
    measurementBasis?: boolean;
    frequency?: boolean;
    status?: boolean;
    createdAt?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
};
export type KpiDefinitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kraCode" | "tier" | "kpiText" | "kpiClass" | "objectiveText" | "exampleActivity" | "measurementBasis" | "frequency" | "status" | "createdAt" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId", ExtArgs["result"]["kpiDefinition"]>;
export type KpiDefinitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    roleScorecardOverrides?: boolean | Prisma.KpiDefinition$roleScorecardOverridesArgs<ExtArgs>;
    activityReports?: boolean | Prisma.KpiDefinition$activityReportsArgs<ExtArgs>;
    kpiScores?: boolean | Prisma.KpiDefinition$kpiScoresArgs<ExtArgs>;
    taggedTasks?: boolean | Prisma.KpiDefinition$taggedTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.KpiDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KpiDefinitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
};
export type KpiDefinitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
};
export type $KpiDefinitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KpiDefinition";
    objects: {
        kra: Prisma.$EnterpriseKraPayload<ExtArgs>;
        roleScorecardOverrides: Prisma.$RoleScorecardOverridePayload<ExtArgs>[];
        activityReports: Prisma.$ActivityReportPayload<ExtArgs>[];
        kpiScores: Prisma.$EmployeeKpiScorePayload<ExtArgs>[];
        taggedTasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kraCode: string;
        tier: $Enums.PmsTier;
        kpiText: string;
        kpiClass: $Enums.KpiClass;
        objectiveText: string | null;
        exampleActivity: string | null;
        measurementBasis: $Enums.MeasurementBasis;
        frequency: string | null;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
    }, ExtArgs["result"]["kpiDefinition"]>;
    composites: {};
};
export type KpiDefinitionGetPayload<S extends boolean | null | undefined | KpiDefinitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload, S>;
export type KpiDefinitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KpiDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KpiDefinitionCountAggregateInputType | true;
};
export interface KpiDefinitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KpiDefinition'];
        meta: {
            name: 'KpiDefinition';
        };
    };
    findUnique<T extends KpiDefinitionFindUniqueArgs>(args: Prisma.SelectSubset<T, KpiDefinitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KpiDefinitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KpiDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KpiDefinitionFindFirstArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KpiDefinitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KpiDefinitionFindManyArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KpiDefinitionCreateArgs>(args: Prisma.SelectSubset<T, KpiDefinitionCreateArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KpiDefinitionCreateManyArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KpiDefinitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KpiDefinitionDeleteArgs>(args: Prisma.SelectSubset<T, KpiDefinitionDeleteArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KpiDefinitionUpdateArgs>(args: Prisma.SelectSubset<T, KpiDefinitionUpdateArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KpiDefinitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, KpiDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KpiDefinitionUpdateManyArgs>(args: Prisma.SelectSubset<T, KpiDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KpiDefinitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KpiDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KpiDefinitionUpsertArgs>(args: Prisma.SelectSubset<T, KpiDefinitionUpsertArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KpiDefinitionCountArgs>(args?: Prisma.Subset<T, KpiDefinitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KpiDefinitionCountAggregateOutputType> : number>;
    aggregate<T extends KpiDefinitionAggregateArgs>(args: Prisma.Subset<T, KpiDefinitionAggregateArgs>): Prisma.PrismaPromise<GetKpiDefinitionAggregateType<T>>;
    groupBy<T extends KpiDefinitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KpiDefinitionGroupByArgs['orderBy'];
    } : {
        orderBy?: KpiDefinitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KpiDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKpiDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KpiDefinitionFieldRefs;
}
export interface Prisma__KpiDefinitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kra<T extends Prisma.EnterpriseKraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseKraDefaultArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    roleScorecardOverrides<T extends Prisma.KpiDefinition$roleScorecardOverridesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinition$roleScorecardOverridesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityReports<T extends Prisma.KpiDefinition$activityReportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinition$activityReportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    kpiScores<T extends Prisma.KpiDefinition$kpiScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinition$kpiScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    taggedTasks<T extends Prisma.KpiDefinition$taggedTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinition$taggedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KpiDefinitionFieldRefs {
    readonly id: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly kraCode: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly tier: Prisma.FieldRef<"KpiDefinition", 'PmsTier'>;
    readonly kpiText: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly kpiClass: Prisma.FieldRef<"KpiDefinition", 'KpiClass'>;
    readonly objectiveText: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly exampleActivity: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly measurementBasis: Prisma.FieldRef<"KpiDefinition", 'MeasurementBasis'>;
    readonly frequency: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly status: Prisma.FieldRef<"KpiDefinition", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"KpiDefinition", 'DateTime'>;
    readonly proposedByUserId: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"KpiDefinition", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"KpiDefinition", 'String'>;
}
export type KpiDefinitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithRelationInput | Prisma.KpiDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KpiDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiDefinitionScalarFieldEnum | Prisma.KpiDefinitionScalarFieldEnum[];
};
export type KpiDefinitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithRelationInput | Prisma.KpiDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KpiDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiDefinitionScalarFieldEnum | Prisma.KpiDefinitionScalarFieldEnum[];
};
export type KpiDefinitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithRelationInput | Prisma.KpiDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KpiDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiDefinitionScalarFieldEnum | Prisma.KpiDefinitionScalarFieldEnum[];
};
export type KpiDefinitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiDefinitionCreateInput, Prisma.KpiDefinitionUncheckedCreateInput>;
};
export type KpiDefinitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KpiDefinitionCreateManyInput | Prisma.KpiDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KpiDefinitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    data: Prisma.KpiDefinitionCreateManyInput | Prisma.KpiDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KpiDefinitionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KpiDefinitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateInput, Prisma.KpiDefinitionUncheckedUpdateInput>;
    where: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateManyMutationInput, Prisma.KpiDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.KpiDefinitionWhereInput;
    limit?: number;
};
export type KpiDefinitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiDefinitionUpdateManyMutationInput, Prisma.KpiDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.KpiDefinitionWhereInput;
    limit?: number;
    include?: Prisma.KpiDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KpiDefinitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where: Prisma.KpiDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiDefinitionCreateInput, Prisma.KpiDefinitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KpiDefinitionUpdateInput, Prisma.KpiDefinitionUncheckedUpdateInput>;
};
export type KpiDefinitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where: Prisma.KpiDefinitionWhereUniqueInput;
};
export type KpiDefinitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiDefinitionWhereInput;
    limit?: number;
};
export type KpiDefinition$roleScorecardOverridesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    where?: Prisma.RoleScorecardOverrideWhereInput;
    orderBy?: Prisma.RoleScorecardOverrideOrderByWithRelationInput | Prisma.RoleScorecardOverrideOrderByWithRelationInput[];
    cursor?: Prisma.RoleScorecardOverrideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScorecardOverrideScalarFieldEnum | Prisma.RoleScorecardOverrideScalarFieldEnum[];
};
export type KpiDefinition$activityReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    where?: Prisma.ActivityReportWhereInput;
    orderBy?: Prisma.ActivityReportOrderByWithRelationInput | Prisma.ActivityReportOrderByWithRelationInput[];
    cursor?: Prisma.ActivityReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityReportScalarFieldEnum | Prisma.ActivityReportScalarFieldEnum[];
};
export type KpiDefinition$kpiScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithRelationInput | Prisma.EmployeeKpiScoreOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeKpiScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeKpiScoreScalarFieldEnum | Prisma.EmployeeKpiScoreScalarFieldEnum[];
};
export type KpiDefinition$taggedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type KpiDefinitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
};
