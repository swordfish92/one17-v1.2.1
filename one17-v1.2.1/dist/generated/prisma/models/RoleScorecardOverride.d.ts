import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoleScorecardOverrideModel = runtime.Types.Result.DefaultSelection<Prisma.$RoleScorecardOverridePayload>;
export type AggregateRoleScorecardOverride = {
    _count: RoleScorecardOverrideCountAggregateOutputType | null;
    _avg: RoleScorecardOverrideAvgAggregateOutputType | null;
    _sum: RoleScorecardOverrideSumAggregateOutputType | null;
    _min: RoleScorecardOverrideMinAggregateOutputType | null;
    _max: RoleScorecardOverrideMaxAggregateOutputType | null;
};
export type RoleScorecardOverrideAvgAggregateOutputType = {
    overrideWeightPct: runtime.Decimal | null;
};
export type RoleScorecardOverrideSumAggregateOutputType = {
    overrideWeightPct: runtime.Decimal | null;
};
export type RoleScorecardOverrideMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    kpiDefinitionId: string | null;
    overrideWeightPct: runtime.Decimal | null;
    reason: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type RoleScorecardOverrideMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    kpiDefinitionId: string | null;
    overrideWeightPct: runtime.Decimal | null;
    reason: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type RoleScorecardOverrideCountAggregateOutputType = {
    id: number;
    employeeId: number;
    kpiDefinitionId: number;
    overrideWeightPct: number;
    reason: number;
    status: number;
    createdByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type RoleScorecardOverrideAvgAggregateInputType = {
    overrideWeightPct?: true;
};
export type RoleScorecardOverrideSumAggregateInputType = {
    overrideWeightPct?: true;
};
export type RoleScorecardOverrideMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    overrideWeightPct?: true;
    reason?: true;
    status?: true;
    createdByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type RoleScorecardOverrideMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    overrideWeightPct?: true;
    reason?: true;
    status?: true;
    createdByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type RoleScorecardOverrideCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    overrideWeightPct?: true;
    reason?: true;
    status?: true;
    createdByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type RoleScorecardOverrideAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleScorecardOverrideWhereInput;
    orderBy?: Prisma.RoleScorecardOverrideOrderByWithRelationInput | Prisma.RoleScorecardOverrideOrderByWithRelationInput[];
    cursor?: Prisma.RoleScorecardOverrideWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleScorecardOverrideCountAggregateInputType;
    _avg?: RoleScorecardOverrideAvgAggregateInputType;
    _sum?: RoleScorecardOverrideSumAggregateInputType;
    _min?: RoleScorecardOverrideMinAggregateInputType;
    _max?: RoleScorecardOverrideMaxAggregateInputType;
};
export type GetRoleScorecardOverrideAggregateType<T extends RoleScorecardOverrideAggregateArgs> = {
    [P in keyof T & keyof AggregateRoleScorecardOverride]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoleScorecardOverride[P]> : Prisma.GetScalarType<T[P], AggregateRoleScorecardOverride[P]>;
};
export type RoleScorecardOverrideGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleScorecardOverrideWhereInput;
    orderBy?: Prisma.RoleScorecardOverrideOrderByWithAggregationInput | Prisma.RoleScorecardOverrideOrderByWithAggregationInput[];
    by: Prisma.RoleScorecardOverrideScalarFieldEnum[] | Prisma.RoleScorecardOverrideScalarFieldEnum;
    having?: Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleScorecardOverrideCountAggregateInputType | true;
    _avg?: RoleScorecardOverrideAvgAggregateInputType;
    _sum?: RoleScorecardOverrideSumAggregateInputType;
    _min?: RoleScorecardOverrideMinAggregateInputType;
    _max?: RoleScorecardOverrideMaxAggregateInputType;
};
export type RoleScorecardOverrideGroupByOutputType = {
    id: string;
    employeeId: string;
    kpiDefinitionId: string;
    overrideWeightPct: runtime.Decimal;
    reason: string;
    status: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: RoleScorecardOverrideCountAggregateOutputType | null;
    _avg: RoleScorecardOverrideAvgAggregateOutputType | null;
    _sum: RoleScorecardOverrideSumAggregateOutputType | null;
    _min: RoleScorecardOverrideMinAggregateOutputType | null;
    _max: RoleScorecardOverrideMaxAggregateOutputType | null;
};
export type GetRoleScorecardOverrideGroupByPayload<T extends RoleScorecardOverrideGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleScorecardOverrideGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleScorecardOverrideGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleScorecardOverrideGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleScorecardOverrideGroupByOutputType[P]>;
}>>;
export type RoleScorecardOverrideWhereInput = {
    AND?: Prisma.RoleScorecardOverrideWhereInput | Prisma.RoleScorecardOverrideWhereInput[];
    OR?: Prisma.RoleScorecardOverrideWhereInput[];
    NOT?: Prisma.RoleScorecardOverrideWhereInput | Prisma.RoleScorecardOverrideWhereInput[];
    id?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    employeeId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    overrideWeightPct?: Prisma.DecimalFilter<"RoleScorecardOverride"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"RoleScorecardOverride"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RoleScorecardOverride"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RoleScorecardOverride"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RoleScorecardOverride"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
};
export type RoleScorecardOverrideOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    overrideWeightPct?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    kpiDefinition?: Prisma.KpiDefinitionOrderByWithRelationInput;
};
export type RoleScorecardOverrideWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.RoleScorecardOverrideWhereInput | Prisma.RoleScorecardOverrideWhereInput[];
    OR?: Prisma.RoleScorecardOverrideWhereInput[];
    NOT?: Prisma.RoleScorecardOverrideWhereInput | Prisma.RoleScorecardOverrideWhereInput[];
    employeeId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    overrideWeightPct?: Prisma.DecimalFilter<"RoleScorecardOverride"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"RoleScorecardOverride"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RoleScorecardOverride"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    createdAt?: Prisma.DateTimeFilter<"RoleScorecardOverride"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
}, "id" | "workflowInstanceId">;
export type RoleScorecardOverrideOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    overrideWeightPct?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoleScorecardOverrideCountOrderByAggregateInput;
    _avg?: Prisma.RoleScorecardOverrideAvgOrderByAggregateInput;
    _max?: Prisma.RoleScorecardOverrideMaxOrderByAggregateInput;
    _min?: Prisma.RoleScorecardOverrideMinOrderByAggregateInput;
    _sum?: Prisma.RoleScorecardOverrideSumOrderByAggregateInput;
};
export type RoleScorecardOverrideScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput | Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput | Prisma.RoleScorecardOverrideScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RoleScorecardOverride"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"RoleScorecardOverride"> | string;
    kpiDefinitionId?: Prisma.UuidWithAggregatesFilter<"RoleScorecardOverride"> | string;
    overrideWeightPct?: Prisma.DecimalWithAggregatesFilter<"RoleScorecardOverride"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringWithAggregatesFilter<"RoleScorecardOverride"> | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"RoleScorecardOverride"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"RoleScorecardOverride"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"RoleScorecardOverride"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RoleScorecardOverride"> | Date | string;
};
export type RoleScorecardOverrideCreateInput = {
    id?: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutRoleScorecardOverridesInput;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutRoleScorecardOverridesInput;
};
export type RoleScorecardOverrideUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    kpiDefinitionId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutRoleScorecardOverridesNestedInput;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutRoleScorecardOverridesNestedInput;
};
export type RoleScorecardOverrideUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideCreateManyInput = {
    id?: string;
    employeeId: string;
    kpiDefinitionId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideListRelationFilter = {
    every?: Prisma.RoleScorecardOverrideWhereInput;
    some?: Prisma.RoleScorecardOverrideWhereInput;
    none?: Prisma.RoleScorecardOverrideWhereInput;
};
export type RoleScorecardOverrideOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleScorecardOverrideCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    overrideWeightPct?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleScorecardOverrideAvgOrderByAggregateInput = {
    overrideWeightPct?: Prisma.SortOrder;
};
export type RoleScorecardOverrideMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    overrideWeightPct?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleScorecardOverrideMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    overrideWeightPct?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleScorecardOverrideSumOrderByAggregateInput = {
    overrideWeightPct?: Prisma.SortOrder;
};
export type RoleScorecardOverrideCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput> | Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
};
export type RoleScorecardOverrideUncheckedCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput> | Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
};
export type RoleScorecardOverrideUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput> | Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    disconnect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    delete?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    update?: Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
};
export type RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput> | Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    disconnect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    delete?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    update?: Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
};
export type RoleScorecardOverrideCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput> | Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyEmployeeInputEnvelope;
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
};
export type RoleScorecardOverrideUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput> | Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyEmployeeInputEnvelope;
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
};
export type RoleScorecardOverrideUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput> | Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyEmployeeInputEnvelope;
    set?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    disconnect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    delete?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    update?: Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
};
export type RoleScorecardOverrideUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput> | Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput[] | Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput | Prisma.RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.RoleScorecardOverrideCreateManyEmployeeInputEnvelope;
    set?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    disconnect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    delete?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    connect?: Prisma.RoleScorecardOverrideWhereUniqueInput | Prisma.RoleScorecardOverrideWhereUniqueInput[];
    update?: Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutEmployeeInput | Prisma.RoleScorecardOverrideUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
};
export type RoleScorecardOverrideCreateWithoutKpiDefinitionInput = {
    id?: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutRoleScorecardOverridesInput;
};
export type RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput = {
    id?: string;
    employeeId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideCreateOrConnectWithoutKpiDefinitionInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput>;
};
export type RoleScorecardOverrideCreateManyKpiDefinitionInputEnvelope = {
    data: Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInput | Prisma.RoleScorecardOverrideCreateManyKpiDefinitionInput[];
    skipDuplicates?: boolean;
};
export type RoleScorecardOverrideUpsertWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedUpdateWithoutKpiDefinitionInput>;
    create: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutKpiDefinitionInput>;
};
export type RoleScorecardOverrideUpdateWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateWithoutKpiDefinitionInput, Prisma.RoleScorecardOverrideUncheckedUpdateWithoutKpiDefinitionInput>;
};
export type RoleScorecardOverrideUpdateManyWithWhereWithoutKpiDefinitionInput = {
    where: Prisma.RoleScorecardOverrideScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateManyMutationInput, Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionInput>;
};
export type RoleScorecardOverrideScalarWhereInput = {
    AND?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
    OR?: Prisma.RoleScorecardOverrideScalarWhereInput[];
    NOT?: Prisma.RoleScorecardOverrideScalarWhereInput | Prisma.RoleScorecardOverrideScalarWhereInput[];
    id?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    employeeId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    overrideWeightPct?: Prisma.DecimalFilter<"RoleScorecardOverride"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"RoleScorecardOverride"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RoleScorecardOverride"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RoleScorecardOverride"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RoleScorecardOverride"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RoleScorecardOverride"> | Date | string;
};
export type RoleScorecardOverrideCreateWithoutEmployeeInput = {
    id?: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutRoleScorecardOverridesInput;
};
export type RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    kpiDefinitionId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput>;
};
export type RoleScorecardOverrideCreateManyEmployeeInputEnvelope = {
    data: Prisma.RoleScorecardOverrideCreateManyEmployeeInput | Prisma.RoleScorecardOverrideCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type RoleScorecardOverrideUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.RoleScorecardOverrideCreateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedCreateWithoutEmployeeInput>;
};
export type RoleScorecardOverrideUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateWithoutEmployeeInput, Prisma.RoleScorecardOverrideUncheckedUpdateWithoutEmployeeInput>;
};
export type RoleScorecardOverrideUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.RoleScorecardOverrideScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateManyMutationInput, Prisma.RoleScorecardOverrideUncheckedUpdateManyWithoutEmployeeInput>;
};
export type RoleScorecardOverrideCreateManyKpiDefinitionInput = {
    id?: string;
    employeeId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutRoleScorecardOverridesNestedInput;
};
export type RoleScorecardOverrideUncheckedUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideUncheckedUpdateManyWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideCreateManyEmployeeInput = {
    id?: string;
    kpiDefinitionId: string;
    overrideWeightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type RoleScorecardOverrideUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutRoleScorecardOverridesNestedInput;
};
export type RoleScorecardOverrideUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    overrideWeightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleScorecardOverrideSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    overrideWeightPct?: boolean;
    reason?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleScorecardOverride"]>;
export type RoleScorecardOverrideSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    overrideWeightPct?: boolean;
    reason?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleScorecardOverride"]>;
export type RoleScorecardOverrideSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    overrideWeightPct?: boolean;
    reason?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleScorecardOverride"]>;
export type RoleScorecardOverrideSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    overrideWeightPct?: boolean;
    reason?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type RoleScorecardOverrideOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "kpiDefinitionId" | "overrideWeightPct" | "reason" | "status" | "createdByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["roleScorecardOverride"]>;
export type RoleScorecardOverrideInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type RoleScorecardOverrideIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type RoleScorecardOverrideIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type $RoleScorecardOverridePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RoleScorecardOverride";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        kpiDefinition: Prisma.$KpiDefinitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        kpiDefinitionId: string;
        overrideWeightPct: runtime.Decimal;
        reason: string;
        status: $Enums.GovernedItemStatus;
        createdByUserId: string;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["roleScorecardOverride"]>;
    composites: {};
};
export type RoleScorecardOverrideGetPayload<S extends boolean | null | undefined | RoleScorecardOverrideDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload, S>;
export type RoleScorecardOverrideCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleScorecardOverrideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleScorecardOverrideCountAggregateInputType | true;
};
export interface RoleScorecardOverrideDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RoleScorecardOverride'];
        meta: {
            name: 'RoleScorecardOverride';
        };
    };
    findUnique<T extends RoleScorecardOverrideFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleScorecardOverrideFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleScorecardOverrideFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleScorecardOverrideFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleScorecardOverrideFindManyArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleScorecardOverrideCreateArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideCreateArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleScorecardOverrideCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleScorecardOverrideCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleScorecardOverrideDeleteArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleScorecardOverrideUpdateArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleScorecardOverrideDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleScorecardOverrideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleScorecardOverrideUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleScorecardOverrideUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleScorecardOverrideUpsertArgs>(args: Prisma.SelectSubset<T, RoleScorecardOverrideUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleScorecardOverrideClient<runtime.Types.Result.GetResult<Prisma.$RoleScorecardOverridePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleScorecardOverrideCountArgs>(args?: Prisma.Subset<T, RoleScorecardOverrideCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleScorecardOverrideCountAggregateOutputType> : number>;
    aggregate<T extends RoleScorecardOverrideAggregateArgs>(args: Prisma.Subset<T, RoleScorecardOverrideAggregateArgs>): Prisma.PrismaPromise<GetRoleScorecardOverrideAggregateType<T>>;
    groupBy<T extends RoleScorecardOverrideGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleScorecardOverrideGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleScorecardOverrideGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleScorecardOverrideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleScorecardOverrideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleScorecardOverrideFieldRefs;
}
export interface Prisma__RoleScorecardOverrideClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kpiDefinition<T extends Prisma.KpiDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleScorecardOverrideFieldRefs {
    readonly id: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly employeeId: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly kpiDefinitionId: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly overrideWeightPct: Prisma.FieldRef<"RoleScorecardOverride", 'Decimal'>;
    readonly reason: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly status: Prisma.FieldRef<"RoleScorecardOverride", 'GovernedItemStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"RoleScorecardOverride", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RoleScorecardOverride", 'DateTime'>;
}
export type RoleScorecardOverrideFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
};
export type RoleScorecardOverrideFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
};
export type RoleScorecardOverrideFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoleScorecardOverrideFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoleScorecardOverrideFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoleScorecardOverrideCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideCreateInput, Prisma.RoleScorecardOverrideUncheckedCreateInput>;
};
export type RoleScorecardOverrideCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleScorecardOverrideCreateManyInput | Prisma.RoleScorecardOverrideCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleScorecardOverrideCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    data: Prisma.RoleScorecardOverrideCreateManyInput | Prisma.RoleScorecardOverrideCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleScorecardOverrideIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleScorecardOverrideUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateInput, Prisma.RoleScorecardOverrideUncheckedUpdateInput>;
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
};
export type RoleScorecardOverrideUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateManyMutationInput, Prisma.RoleScorecardOverrideUncheckedUpdateManyInput>;
    where?: Prisma.RoleScorecardOverrideWhereInput;
    limit?: number;
};
export type RoleScorecardOverrideUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateManyMutationInput, Prisma.RoleScorecardOverrideUncheckedUpdateManyInput>;
    where?: Prisma.RoleScorecardOverrideWhereInput;
    limit?: number;
    include?: Prisma.RoleScorecardOverrideIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleScorecardOverrideUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleScorecardOverrideCreateInput, Prisma.RoleScorecardOverrideUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleScorecardOverrideUpdateInput, Prisma.RoleScorecardOverrideUncheckedUpdateInput>;
};
export type RoleScorecardOverrideDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
    where: Prisma.RoleScorecardOverrideWhereUniqueInput;
};
export type RoleScorecardOverrideDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleScorecardOverrideWhereInput;
    limit?: number;
};
export type RoleScorecardOverrideDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleScorecardOverrideSelect<ExtArgs> | null;
    omit?: Prisma.RoleScorecardOverrideOmit<ExtArgs> | null;
    include?: Prisma.RoleScorecardOverrideInclude<ExtArgs> | null;
};
