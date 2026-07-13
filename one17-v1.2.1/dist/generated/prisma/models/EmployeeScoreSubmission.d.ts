import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeScoreSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeScoreSubmissionPayload>;
export type AggregateEmployeeScoreSubmission = {
    _count: EmployeeScoreSubmissionCountAggregateOutputType | null;
    _min: EmployeeScoreSubmissionMinAggregateOutputType | null;
    _max: EmployeeScoreSubmissionMaxAggregateOutputType | null;
};
export type EmployeeScoreSubmissionMinAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    status: $Enums.ScoreSubmissionStatus | null;
    workflowInstanceId: string | null;
    submittedAt: Date | null;
};
export type EmployeeScoreSubmissionMaxAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    status: $Enums.ScoreSubmissionStatus | null;
    workflowInstanceId: string | null;
    submittedAt: Date | null;
};
export type EmployeeScoreSubmissionCountAggregateOutputType = {
    id: number;
    appraisalCycleId: number;
    employeeId: number;
    status: number;
    workflowInstanceId: number;
    submittedAt: number;
    _all: number;
};
export type EmployeeScoreSubmissionMinAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    status?: true;
    workflowInstanceId?: true;
    submittedAt?: true;
};
export type EmployeeScoreSubmissionMaxAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    status?: true;
    workflowInstanceId?: true;
    submittedAt?: true;
};
export type EmployeeScoreSubmissionCountAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    status?: true;
    workflowInstanceId?: true;
    submittedAt?: true;
    _all?: true;
};
export type EmployeeScoreSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput | Prisma.EmployeeScoreSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeScoreSubmissionCountAggregateInputType;
    _min?: EmployeeScoreSubmissionMinAggregateInputType;
    _max?: EmployeeScoreSubmissionMaxAggregateInputType;
};
export type GetEmployeeScoreSubmissionAggregateType<T extends EmployeeScoreSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeScoreSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeScoreSubmission[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeScoreSubmission[P]>;
};
export type EmployeeScoreSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithAggregationInput | Prisma.EmployeeScoreSubmissionOrderByWithAggregationInput[];
    by: Prisma.EmployeeScoreSubmissionScalarFieldEnum[] | Prisma.EmployeeScoreSubmissionScalarFieldEnum;
    having?: Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeScoreSubmissionCountAggregateInputType | true;
    _min?: EmployeeScoreSubmissionMinAggregateInputType;
    _max?: EmployeeScoreSubmissionMaxAggregateInputType;
};
export type EmployeeScoreSubmissionGroupByOutputType = {
    id: string;
    appraisalCycleId: string;
    employeeId: string;
    status: $Enums.ScoreSubmissionStatus;
    workflowInstanceId: string | null;
    submittedAt: Date;
    _count: EmployeeScoreSubmissionCountAggregateOutputType | null;
    _min: EmployeeScoreSubmissionMinAggregateOutputType | null;
    _max: EmployeeScoreSubmissionMaxAggregateOutputType | null;
};
export type GetEmployeeScoreSubmissionGroupByPayload<T extends EmployeeScoreSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeScoreSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeScoreSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeScoreSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeScoreSubmissionGroupByOutputType[P]>;
}>>;
export type EmployeeScoreSubmissionWhereInput = {
    AND?: Prisma.EmployeeScoreSubmissionWhereInput | Prisma.EmployeeScoreSubmissionWhereInput[];
    OR?: Prisma.EmployeeScoreSubmissionWhereInput[];
    NOT?: Prisma.EmployeeScoreSubmissionWhereInput | Prisma.EmployeeScoreSubmissionWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    status?: Prisma.EnumScoreSubmissionStatusFilter<"EmployeeScoreSubmission"> | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeScoreSubmission"> | string | null;
    submittedAt?: Prisma.DateTimeFilter<"EmployeeScoreSubmission"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiScores?: Prisma.EmployeeKpiScoreListRelationFilter;
};
export type EmployeeScoreSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    appraisalCycle?: Prisma.AppraisalCycleOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    kpiScores?: Prisma.EmployeeKpiScoreOrderByRelationAggregateInput;
};
export type EmployeeScoreSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    appraisalCycleId_employeeId?: Prisma.EmployeeScoreSubmissionAppraisalCycleIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.EmployeeScoreSubmissionWhereInput | Prisma.EmployeeScoreSubmissionWhereInput[];
    OR?: Prisma.EmployeeScoreSubmissionWhereInput[];
    NOT?: Prisma.EmployeeScoreSubmissionWhereInput | Prisma.EmployeeScoreSubmissionWhereInput[];
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    status?: Prisma.EnumScoreSubmissionStatusFilter<"EmployeeScoreSubmission"> | $Enums.ScoreSubmissionStatus;
    submittedAt?: Prisma.DateTimeFilter<"EmployeeScoreSubmission"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    kpiScores?: Prisma.EmployeeKpiScoreListRelationFilter;
}, "id" | "workflowInstanceId" | "appraisalCycleId_employeeId">;
export type EmployeeScoreSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeScoreSubmissionCountOrderByAggregateInput;
    _max?: Prisma.EmployeeScoreSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeScoreSubmissionMinOrderByAggregateInput;
};
export type EmployeeScoreSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput | Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput | Prisma.EmployeeScoreSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeScoreSubmission"> | string;
    appraisalCycleId?: Prisma.UuidWithAggregatesFilter<"EmployeeScoreSubmission"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeeScoreSubmission"> | string;
    status?: Prisma.EnumScoreSubmissionStatusWithAggregatesFilter<"EmployeeScoreSubmission"> | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"EmployeeScoreSubmission"> | string | null;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeScoreSubmission"> | Date | string;
};
export type EmployeeScoreSubmissionCreateInput = {
    id?: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutScoreSubmissionsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutScoreSubmissionsInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionUncheckedCreateInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionCreateManyInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
};
export type EmployeeScoreSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScoreSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScoreSubmissionListRelationFilter = {
    every?: Prisma.EmployeeScoreSubmissionWhereInput;
    some?: Prisma.EmployeeScoreSubmissionWhereInput;
    none?: Prisma.EmployeeScoreSubmissionWhereInput;
};
export type EmployeeScoreSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeScoreSubmissionAppraisalCycleIdEmployeeIdCompoundUniqueInput = {
    appraisalCycleId: string;
    employeeId: string;
};
export type EmployeeScoreSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type EmployeeScoreSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type EmployeeScoreSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type EmployeeScoreSubmissionScalarRelationFilter = {
    is?: Prisma.EmployeeScoreSubmissionWhereInput;
    isNot?: Prisma.EmployeeScoreSubmissionWhereInput;
};
export type EmployeeScoreSubmissionCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
};
export type EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
};
export type EmployeeScoreSubmissionUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    disconnect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    delete?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    update?: Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
};
export type EmployeeScoreSubmissionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    disconnect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    delete?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    update?: Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
};
export type EmployeeScoreSubmissionCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
};
export type EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
};
export type EmployeeScoreSubmissionUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    disconnect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    delete?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    update?: Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
};
export type EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    disconnect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    delete?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput | Prisma.EmployeeScoreSubmissionWhereUniqueInput[];
    update?: Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.EmployeeScoreSubmissionUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
};
export type EnumScoreSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScoreSubmissionStatus;
};
export type EmployeeScoreSubmissionCreateNestedOneWithoutKpiScoresInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutKpiScoresInput>;
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutKpiScoresInput;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
};
export type EmployeeScoreSubmissionUpdateOneRequiredWithoutKpiScoresNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutKpiScoresInput>;
    connectOrCreate?: Prisma.EmployeeScoreSubmissionCreateOrConnectWithoutKpiScoresInput;
    upsert?: Prisma.EmployeeScoreSubmissionUpsertWithoutKpiScoresInput;
    connect?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateToOneWithWhereWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUpdateWithoutKpiScoresInput>, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutKpiScoresInput>;
};
export type EmployeeScoreSubmissionCreateWithoutEmployeeInput = {
    id?: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutScoreSubmissionsInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeScoreSubmissionCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeeScoreSubmissionCreateManyEmployeeInput | Prisma.EmployeeScoreSubmissionCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutEmployeeInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeeScoreSubmissionUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeeScoreSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateManyMutationInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeeScoreSubmissionScalarWhereInput = {
    AND?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
    OR?: Prisma.EmployeeScoreSubmissionScalarWhereInput[];
    NOT?: Prisma.EmployeeScoreSubmissionScalarWhereInput | Prisma.EmployeeScoreSubmissionScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeScoreSubmission"> | string;
    status?: Prisma.EnumScoreSubmissionStatusFilter<"EmployeeScoreSubmission"> | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeScoreSubmission"> | string | null;
    submittedAt?: Prisma.DateTimeFilter<"EmployeeScoreSubmission"> | Date | string;
};
export type EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput = {
    id?: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutScoreSubmissionsInput;
    kpiScores?: Prisma.EmployeeKpiScoreCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type EmployeeScoreSubmissionCreateOrConnectWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput>;
};
export type EmployeeScoreSubmissionCreateManyAppraisalCycleInputEnvelope = {
    data: Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInput | Prisma.EmployeeScoreSubmissionCreateManyAppraisalCycleInput[];
    skipDuplicates?: boolean;
};
export type EmployeeScoreSubmissionUpsertWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutAppraisalCycleInput>;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutAppraisalCycleInput>;
};
export type EmployeeScoreSubmissionUpdateWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutAppraisalCycleInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutAppraisalCycleInput>;
};
export type EmployeeScoreSubmissionUpdateManyWithWhereWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeScoreSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateManyMutationInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleInput>;
};
export type EmployeeScoreSubmissionCreateWithoutKpiScoresInput = {
    id?: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutScoreSubmissionsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutScoreSubmissionsInput;
};
export type EmployeeScoreSubmissionUncheckedCreateWithoutKpiScoresInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
};
export type EmployeeScoreSubmissionCreateOrConnectWithoutKpiScoresInput = {
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutKpiScoresInput>;
};
export type EmployeeScoreSubmissionUpsertWithoutKpiScoresInput = {
    update: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutKpiScoresInput>;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedCreateWithoutKpiScoresInput>;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
};
export type EmployeeScoreSubmissionUpdateToOneWithWhereWithoutKpiScoresInput = {
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateWithoutKpiScoresInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateWithoutKpiScoresInput>;
};
export type EmployeeScoreSubmissionUpdateWithoutKpiScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateWithoutKpiScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScoreSubmissionCreateManyEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
};
export type EmployeeScoreSubmissionUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScoreSubmissionCreateManyAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: string | null;
    submittedAt?: Date | string;
};
export type EmployeeScoreSubmissionUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutScoreSubmissionsNestedInput;
    kpiScores?: Prisma.EmployeeKpiScoreUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiScores?: Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumScoreSubmissionStatusFieldUpdateOperationsInput | $Enums.ScoreSubmissionStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScoreSubmissionCountOutputType = {
    kpiScores: number;
};
export type EmployeeScoreSubmissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kpiScores?: boolean | EmployeeScoreSubmissionCountOutputTypeCountKpiScoresArgs;
};
export type EmployeeScoreSubmissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeeScoreSubmissionCountOutputTypeCountKpiScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeKpiScoreWhereInput;
};
export type EmployeeScoreSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    submittedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiScores?: boolean | Prisma.EmployeeScoreSubmission$kpiScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeScoreSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeScoreSubmission"]>;
export type EmployeeScoreSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    submittedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeScoreSubmission"]>;
export type EmployeeScoreSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    submittedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeScoreSubmission"]>;
export type EmployeeScoreSubmissionSelectScalar = {
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    submittedAt?: boolean;
};
export type EmployeeScoreSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appraisalCycleId" | "employeeId" | "status" | "workflowInstanceId" | "submittedAt", ExtArgs["result"]["employeeScoreSubmission"]>;
export type EmployeeScoreSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    kpiScores?: boolean | Prisma.EmployeeScoreSubmission$kpiScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeScoreSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeeScoreSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeeScoreSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $EmployeeScoreSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeScoreSubmission";
    objects: {
        appraisalCycle: Prisma.$AppraisalCyclePayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
        kpiScores: Prisma.$EmployeeKpiScorePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        appraisalCycleId: string;
        employeeId: string;
        status: $Enums.ScoreSubmissionStatus;
        workflowInstanceId: string | null;
        submittedAt: Date;
    }, ExtArgs["result"]["employeeScoreSubmission"]>;
    composites: {};
};
export type EmployeeScoreSubmissionGetPayload<S extends boolean | null | undefined | EmployeeScoreSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload, S>;
export type EmployeeScoreSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeScoreSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeScoreSubmissionCountAggregateInputType | true;
};
export interface EmployeeScoreSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeScoreSubmission'];
        meta: {
            name: 'EmployeeScoreSubmission';
        };
    };
    findUnique<T extends EmployeeScoreSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeScoreSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeScoreSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeScoreSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeScoreSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeScoreSubmissionCreateArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeScoreSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeScoreSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeScoreSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeScoreSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeScoreSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeScoreSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeScoreSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeScoreSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeScoreSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeScoreSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeScoreSubmissionCountArgs>(args?: Prisma.Subset<T, EmployeeScoreSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeScoreSubmissionCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeScoreSubmissionAggregateArgs>(args: Prisma.Subset<T, EmployeeScoreSubmissionAggregateArgs>): Prisma.PrismaPromise<GetEmployeeScoreSubmissionAggregateType<T>>;
    groupBy<T extends EmployeeScoreSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeScoreSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeScoreSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeScoreSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeScoreSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeScoreSubmissionFieldRefs;
}
export interface Prisma__EmployeeScoreSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appraisalCycle<T extends Prisma.AppraisalCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kpiScores<T extends Prisma.EmployeeScoreSubmission$kpiScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeScoreSubmission$kpiScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeScoreSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeScoreSubmission", 'String'>;
    readonly appraisalCycleId: Prisma.FieldRef<"EmployeeScoreSubmission", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeeScoreSubmission", 'String'>;
    readonly status: Prisma.FieldRef<"EmployeeScoreSubmission", 'ScoreSubmissionStatus'>;
    readonly workflowInstanceId: Prisma.FieldRef<"EmployeeScoreSubmission", 'String'>;
    readonly submittedAt: Prisma.FieldRef<"EmployeeScoreSubmission", 'DateTime'>;
}
export type EmployeeScoreSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
};
export type EmployeeScoreSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
};
export type EmployeeScoreSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput | Prisma.EmployeeScoreSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScoreSubmissionScalarFieldEnum | Prisma.EmployeeScoreSubmissionScalarFieldEnum[];
};
export type EmployeeScoreSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput | Prisma.EmployeeScoreSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScoreSubmissionScalarFieldEnum | Prisma.EmployeeScoreSubmissionScalarFieldEnum[];
};
export type EmployeeScoreSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput | Prisma.EmployeeScoreSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScoreSubmissionScalarFieldEnum | Prisma.EmployeeScoreSubmissionScalarFieldEnum[];
};
export type EmployeeScoreSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateInput, Prisma.EmployeeScoreSubmissionUncheckedCreateInput>;
};
export type EmployeeScoreSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeScoreSubmissionCreateManyInput | Prisma.EmployeeScoreSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeScoreSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    data: Prisma.EmployeeScoreSubmissionCreateManyInput | Prisma.EmployeeScoreSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeScoreSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeScoreSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateInput>;
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
};
export type EmployeeScoreSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateManyMutationInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    limit?: number;
};
export type EmployeeScoreSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateManyMutationInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    limit?: number;
    include?: Prisma.EmployeeScoreSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeScoreSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeScoreSubmissionCreateInput, Prisma.EmployeeScoreSubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeScoreSubmissionUpdateInput, Prisma.EmployeeScoreSubmissionUncheckedUpdateInput>;
};
export type EmployeeScoreSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
};
export type EmployeeScoreSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    limit?: number;
};
export type EmployeeScoreSubmission$kpiScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EmployeeScoreSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
};
