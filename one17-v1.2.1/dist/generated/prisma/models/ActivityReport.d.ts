import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivityReportModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivityReportPayload>;
export type AggregateActivityReport = {
    _count: ActivityReportCountAggregateOutputType | null;
    _min: ActivityReportMinAggregateOutputType | null;
    _max: ActivityReportMaxAggregateOutputType | null;
};
export type ActivityReportMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    kpiDefinitionId: string | null;
    activityText: string | null;
    workflowInstanceRef: string | null;
    taskRef: string | null;
    loggedAt: Date | null;
};
export type ActivityReportMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    kpiDefinitionId: string | null;
    activityText: string | null;
    workflowInstanceRef: string | null;
    taskRef: string | null;
    loggedAt: Date | null;
};
export type ActivityReportCountAggregateOutputType = {
    id: number;
    employeeId: number;
    kpiDefinitionId: number;
    activityText: number;
    workflowInstanceRef: number;
    taskRef: number;
    loggedAt: number;
    _all: number;
};
export type ActivityReportMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    activityText?: true;
    workflowInstanceRef?: true;
    taskRef?: true;
    loggedAt?: true;
};
export type ActivityReportMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    activityText?: true;
    workflowInstanceRef?: true;
    taskRef?: true;
    loggedAt?: true;
};
export type ActivityReportCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    kpiDefinitionId?: true;
    activityText?: true;
    workflowInstanceRef?: true;
    taskRef?: true;
    loggedAt?: true;
    _all?: true;
};
export type ActivityReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityReportWhereInput;
    orderBy?: Prisma.ActivityReportOrderByWithRelationInput | Prisma.ActivityReportOrderByWithRelationInput[];
    cursor?: Prisma.ActivityReportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivityReportCountAggregateInputType;
    _min?: ActivityReportMinAggregateInputType;
    _max?: ActivityReportMaxAggregateInputType;
};
export type GetActivityReportAggregateType<T extends ActivityReportAggregateArgs> = {
    [P in keyof T & keyof AggregateActivityReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivityReport[P]> : Prisma.GetScalarType<T[P], AggregateActivityReport[P]>;
};
export type ActivityReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityReportWhereInput;
    orderBy?: Prisma.ActivityReportOrderByWithAggregationInput | Prisma.ActivityReportOrderByWithAggregationInput[];
    by: Prisma.ActivityReportScalarFieldEnum[] | Prisma.ActivityReportScalarFieldEnum;
    having?: Prisma.ActivityReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityReportCountAggregateInputType | true;
    _min?: ActivityReportMinAggregateInputType;
    _max?: ActivityReportMaxAggregateInputType;
};
export type ActivityReportGroupByOutputType = {
    id: string;
    employeeId: string;
    kpiDefinitionId: string;
    activityText: string;
    workflowInstanceRef: string | null;
    taskRef: string | null;
    loggedAt: Date;
    _count: ActivityReportCountAggregateOutputType | null;
    _min: ActivityReportMinAggregateOutputType | null;
    _max: ActivityReportMaxAggregateOutputType | null;
};
export type GetActivityReportGroupByPayload<T extends ActivityReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityReportGroupByOutputType[P]>;
}>>;
export type ActivityReportWhereInput = {
    AND?: Prisma.ActivityReportWhereInput | Prisma.ActivityReportWhereInput[];
    OR?: Prisma.ActivityReportWhereInput[];
    NOT?: Prisma.ActivityReportWhereInput | Prisma.ActivityReportWhereInput[];
    id?: Prisma.UuidFilter<"ActivityReport"> | string;
    employeeId?: Prisma.UuidFilter<"ActivityReport"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"ActivityReport"> | string;
    activityText?: Prisma.StringFilter<"ActivityReport"> | string;
    workflowInstanceRef?: Prisma.UuidNullableFilter<"ActivityReport"> | string | null;
    taskRef?: Prisma.StringNullableFilter<"ActivityReport"> | string | null;
    loggedAt?: Prisma.DateTimeFilter<"ActivityReport"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
};
export type ActivityReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    activityText?: Prisma.SortOrder;
    workflowInstanceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    taskRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    kpiDefinition?: Prisma.KpiDefinitionOrderByWithRelationInput;
};
export type ActivityReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ActivityReportWhereInput | Prisma.ActivityReportWhereInput[];
    OR?: Prisma.ActivityReportWhereInput[];
    NOT?: Prisma.ActivityReportWhereInput | Prisma.ActivityReportWhereInput[];
    employeeId?: Prisma.UuidFilter<"ActivityReport"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"ActivityReport"> | string;
    activityText?: Prisma.StringFilter<"ActivityReport"> | string;
    workflowInstanceRef?: Prisma.UuidNullableFilter<"ActivityReport"> | string | null;
    taskRef?: Prisma.StringNullableFilter<"ActivityReport"> | string | null;
    loggedAt?: Prisma.DateTimeFilter<"ActivityReport"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
}, "id">;
export type ActivityReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    activityText?: Prisma.SortOrder;
    workflowInstanceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    taskRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
    _count?: Prisma.ActivityReportCountOrderByAggregateInput;
    _max?: Prisma.ActivityReportMaxOrderByAggregateInput;
    _min?: Prisma.ActivityReportMinOrderByAggregateInput;
};
export type ActivityReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivityReportScalarWhereWithAggregatesInput | Prisma.ActivityReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivityReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivityReportScalarWhereWithAggregatesInput | Prisma.ActivityReportScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ActivityReport"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"ActivityReport"> | string;
    kpiDefinitionId?: Prisma.UuidWithAggregatesFilter<"ActivityReport"> | string;
    activityText?: Prisma.StringWithAggregatesFilter<"ActivityReport"> | string;
    workflowInstanceRef?: Prisma.UuidNullableWithAggregatesFilter<"ActivityReport"> | string | null;
    taskRef?: Prisma.StringNullableWithAggregatesFilter<"ActivityReport"> | string | null;
    loggedAt?: Prisma.DateTimeWithAggregatesFilter<"ActivityReport"> | Date | string;
};
export type ActivityReportCreateInput = {
    id?: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutActivityReportsInput;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutActivityReportsInput;
};
export type ActivityReportUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    kpiDefinitionId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutActivityReportsNestedInput;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutActivityReportsNestedInput;
};
export type ActivityReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportCreateManyInput = {
    id?: string;
    employeeId: string;
    kpiDefinitionId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportListRelationFilter = {
    every?: Prisma.ActivityReportWhereInput;
    some?: Prisma.ActivityReportWhereInput;
    none?: Prisma.ActivityReportWhereInput;
};
export type ActivityReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivityReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    activityText?: Prisma.SortOrder;
    workflowInstanceRef?: Prisma.SortOrder;
    taskRef?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type ActivityReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    activityText?: Prisma.SortOrder;
    workflowInstanceRef?: Prisma.SortOrder;
    taskRef?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type ActivityReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    activityText?: Prisma.SortOrder;
    workflowInstanceRef?: Prisma.SortOrder;
    taskRef?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type ActivityReportCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput> | Prisma.ActivityReportCreateWithoutKpiDefinitionInput[] | Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput | Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.ActivityReportCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
};
export type ActivityReportUncheckedCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput> | Prisma.ActivityReportCreateWithoutKpiDefinitionInput[] | Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput | Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.ActivityReportCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
};
export type ActivityReportUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput> | Prisma.ActivityReportCreateWithoutKpiDefinitionInput[] | Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput | Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.ActivityReportUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.ActivityReportUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.ActivityReportCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    disconnect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    delete?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    update?: Prisma.ActivityReportUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.ActivityReportUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.ActivityReportUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.ActivityReportUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
};
export type ActivityReportUncheckedUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput> | Prisma.ActivityReportCreateWithoutKpiDefinitionInput[] | Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput | Prisma.ActivityReportCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.ActivityReportUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.ActivityReportUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.ActivityReportCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    disconnect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    delete?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    update?: Prisma.ActivityReportUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.ActivityReportUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.ActivityReportUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.ActivityReportUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
};
export type ActivityReportCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput> | Prisma.ActivityReportCreateWithoutEmployeeInput[] | Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput | Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ActivityReportCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
};
export type ActivityReportUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput> | Prisma.ActivityReportCreateWithoutEmployeeInput[] | Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput | Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ActivityReportCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
};
export type ActivityReportUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput> | Prisma.ActivityReportCreateWithoutEmployeeInput[] | Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput | Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ActivityReportUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ActivityReportUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ActivityReportCreateManyEmployeeInputEnvelope;
    set?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    disconnect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    delete?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    update?: Prisma.ActivityReportUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ActivityReportUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ActivityReportUpdateManyWithWhereWithoutEmployeeInput | Prisma.ActivityReportUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
};
export type ActivityReportUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput> | Prisma.ActivityReportCreateWithoutEmployeeInput[] | Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput | Prisma.ActivityReportCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ActivityReportUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ActivityReportUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ActivityReportCreateManyEmployeeInputEnvelope;
    set?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    disconnect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    delete?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    connect?: Prisma.ActivityReportWhereUniqueInput | Prisma.ActivityReportWhereUniqueInput[];
    update?: Prisma.ActivityReportUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ActivityReportUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ActivityReportUpdateManyWithWhereWithoutEmployeeInput | Prisma.ActivityReportUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
};
export type ActivityReportCreateWithoutKpiDefinitionInput = {
    id?: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutActivityReportsInput;
};
export type ActivityReportUncheckedCreateWithoutKpiDefinitionInput = {
    id?: string;
    employeeId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportCreateOrConnectWithoutKpiDefinitionInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput>;
};
export type ActivityReportCreateManyKpiDefinitionInputEnvelope = {
    data: Prisma.ActivityReportCreateManyKpiDefinitionInput | Prisma.ActivityReportCreateManyKpiDefinitionInput[];
    skipDuplicates?: boolean;
};
export type ActivityReportUpsertWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityReportUpdateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedUpdateWithoutKpiDefinitionInput>;
    create: Prisma.XOR<Prisma.ActivityReportCreateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedCreateWithoutKpiDefinitionInput>;
};
export type ActivityReportUpdateWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityReportUpdateWithoutKpiDefinitionInput, Prisma.ActivityReportUncheckedUpdateWithoutKpiDefinitionInput>;
};
export type ActivityReportUpdateManyWithWhereWithoutKpiDefinitionInput = {
    where: Prisma.ActivityReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityReportUpdateManyMutationInput, Prisma.ActivityReportUncheckedUpdateManyWithoutKpiDefinitionInput>;
};
export type ActivityReportScalarWhereInput = {
    AND?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
    OR?: Prisma.ActivityReportScalarWhereInput[];
    NOT?: Prisma.ActivityReportScalarWhereInput | Prisma.ActivityReportScalarWhereInput[];
    id?: Prisma.UuidFilter<"ActivityReport"> | string;
    employeeId?: Prisma.UuidFilter<"ActivityReport"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"ActivityReport"> | string;
    activityText?: Prisma.StringFilter<"ActivityReport"> | string;
    workflowInstanceRef?: Prisma.UuidNullableFilter<"ActivityReport"> | string | null;
    taskRef?: Prisma.StringNullableFilter<"ActivityReport"> | string | null;
    loggedAt?: Prisma.DateTimeFilter<"ActivityReport"> | Date | string;
};
export type ActivityReportCreateWithoutEmployeeInput = {
    id?: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutActivityReportsInput;
};
export type ActivityReportUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    kpiDefinitionId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput>;
};
export type ActivityReportCreateManyEmployeeInputEnvelope = {
    data: Prisma.ActivityReportCreateManyEmployeeInput | Prisma.ActivityReportCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type ActivityReportUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityReportUpdateWithoutEmployeeInput, Prisma.ActivityReportUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.ActivityReportCreateWithoutEmployeeInput, Prisma.ActivityReportUncheckedCreateWithoutEmployeeInput>;
};
export type ActivityReportUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ActivityReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityReportUpdateWithoutEmployeeInput, Prisma.ActivityReportUncheckedUpdateWithoutEmployeeInput>;
};
export type ActivityReportUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.ActivityReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityReportUpdateManyMutationInput, Prisma.ActivityReportUncheckedUpdateManyWithoutEmployeeInput>;
};
export type ActivityReportCreateManyKpiDefinitionInput = {
    id?: string;
    employeeId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutActivityReportsNestedInput;
};
export type ActivityReportUncheckedUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportUncheckedUpdateManyWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportCreateManyEmployeeInput = {
    id?: string;
    kpiDefinitionId: string;
    activityText: string;
    workflowInstanceRef?: string | null;
    taskRef?: string | null;
    loggedAt?: Date | string;
};
export type ActivityReportUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutActivityReportsNestedInput;
};
export type ActivityReportUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    activityText?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    activityText?: boolean;
    workflowInstanceRef?: boolean;
    taskRef?: boolean;
    loggedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activityReport"]>;
export type ActivityReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    activityText?: boolean;
    workflowInstanceRef?: boolean;
    taskRef?: boolean;
    loggedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activityReport"]>;
export type ActivityReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    activityText?: boolean;
    workflowInstanceRef?: boolean;
    taskRef?: boolean;
    loggedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activityReport"]>;
export type ActivityReportSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    kpiDefinitionId?: boolean;
    activityText?: boolean;
    workflowInstanceRef?: boolean;
    taskRef?: boolean;
    loggedAt?: boolean;
};
export type ActivityReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "kpiDefinitionId" | "activityText" | "workflowInstanceRef" | "taskRef" | "loggedAt", ExtArgs["result"]["activityReport"]>;
export type ActivityReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type ActivityReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type ActivityReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type $ActivityReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivityReport";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        kpiDefinition: Prisma.$KpiDefinitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        kpiDefinitionId: string;
        activityText: string;
        workflowInstanceRef: string | null;
        taskRef: string | null;
        loggedAt: Date;
    }, ExtArgs["result"]["activityReport"]>;
    composites: {};
};
export type ActivityReportGetPayload<S extends boolean | null | undefined | ActivityReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload, S>;
export type ActivityReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivityReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityReportCountAggregateInputType | true;
};
export interface ActivityReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivityReport'];
        meta: {
            name: 'ActivityReport';
        };
    };
    findUnique<T extends ActivityReportFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivityReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivityReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivityReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivityReportFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivityReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivityReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivityReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivityReportFindManyArgs>(args?: Prisma.SelectSubset<T, ActivityReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivityReportCreateArgs>(args: Prisma.SelectSubset<T, ActivityReportCreateArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivityReportCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivityReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivityReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivityReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivityReportDeleteArgs>(args: Prisma.SelectSubset<T, ActivityReportDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivityReportUpdateArgs>(args: Prisma.SelectSubset<T, ActivityReportUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivityReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivityReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivityReportUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivityReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivityReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivityReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivityReportUpsertArgs>(args: Prisma.SelectSubset<T, ActivityReportUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivityReportClient<runtime.Types.Result.GetResult<Prisma.$ActivityReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivityReportCountArgs>(args?: Prisma.Subset<T, ActivityReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityReportCountAggregateOutputType> : number>;
    aggregate<T extends ActivityReportAggregateArgs>(args: Prisma.Subset<T, ActivityReportAggregateArgs>): Prisma.PrismaPromise<GetActivityReportAggregateType<T>>;
    groupBy<T extends ActivityReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivityReportGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivityReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivityReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivityReportFieldRefs;
}
export interface Prisma__ActivityReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kpiDefinition<T extends Prisma.KpiDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivityReportFieldRefs {
    readonly id: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly employeeId: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly kpiDefinitionId: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly activityText: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly workflowInstanceRef: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly taskRef: Prisma.FieldRef<"ActivityReport", 'String'>;
    readonly loggedAt: Prisma.FieldRef<"ActivityReport", 'DateTime'>;
}
export type ActivityReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    where: Prisma.ActivityReportWhereUniqueInput;
};
export type ActivityReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    where: Prisma.ActivityReportWhereUniqueInput;
};
export type ActivityReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ActivityReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityReportCreateInput, Prisma.ActivityReportUncheckedCreateInput>;
};
export type ActivityReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivityReportCreateManyInput | Prisma.ActivityReportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivityReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    data: Prisma.ActivityReportCreateManyInput | Prisma.ActivityReportCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivityReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivityReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityReportUpdateInput, Prisma.ActivityReportUncheckedUpdateInput>;
    where: Prisma.ActivityReportWhereUniqueInput;
};
export type ActivityReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivityReportUpdateManyMutationInput, Prisma.ActivityReportUncheckedUpdateManyInput>;
    where?: Prisma.ActivityReportWhereInput;
    limit?: number;
};
export type ActivityReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityReportUpdateManyMutationInput, Prisma.ActivityReportUncheckedUpdateManyInput>;
    where?: Prisma.ActivityReportWhereInput;
    limit?: number;
    include?: Prisma.ActivityReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivityReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    where: Prisma.ActivityReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityReportCreateInput, Prisma.ActivityReportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivityReportUpdateInput, Prisma.ActivityReportUncheckedUpdateInput>;
};
export type ActivityReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
    where: Prisma.ActivityReportWhereUniqueInput;
};
export type ActivityReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityReportWhereInput;
    limit?: number;
};
export type ActivityReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityReportSelect<ExtArgs> | null;
    omit?: Prisma.ActivityReportOmit<ExtArgs> | null;
    include?: Prisma.ActivityReportInclude<ExtArgs> | null;
};
