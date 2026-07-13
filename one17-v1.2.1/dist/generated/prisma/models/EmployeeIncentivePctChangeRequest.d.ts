import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeIncentivePctChangeRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeIncentivePctChangeRequestPayload>;
export type AggregateEmployeeIncentivePctChangeRequest = {
    _count: EmployeeIncentivePctChangeRequestCountAggregateOutputType | null;
    _avg: EmployeeIncentivePctChangeRequestAvgAggregateOutputType | null;
    _sum: EmployeeIncentivePctChangeRequestSumAggregateOutputType | null;
    _min: EmployeeIncentivePctChangeRequestMinAggregateOutputType | null;
    _max: EmployeeIncentivePctChangeRequestMaxAggregateOutputType | null;
};
export type EmployeeIncentivePctChangeRequestAvgAggregateOutputType = {
    proposedPct: runtime.Decimal | null;
};
export type EmployeeIncentivePctChangeRequestSumAggregateOutputType = {
    proposedPct: runtime.Decimal | null;
};
export type EmployeeIncentivePctChangeRequestMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    proposedPct: runtime.Decimal | null;
    status: $Enums.EmployeeLifecycleRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    appliedAt: Date | null;
    createdAt: Date | null;
};
export type EmployeeIncentivePctChangeRequestMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    proposedPct: runtime.Decimal | null;
    status: $Enums.EmployeeLifecycleRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    appliedAt: Date | null;
    createdAt: Date | null;
};
export type EmployeeIncentivePctChangeRequestCountAggregateOutputType = {
    id: number;
    employeeId: number;
    proposedPct: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    appliedAt: number;
    createdAt: number;
    _all: number;
};
export type EmployeeIncentivePctChangeRequestAvgAggregateInputType = {
    proposedPct?: true;
};
export type EmployeeIncentivePctChangeRequestSumAggregateInputType = {
    proposedPct?: true;
};
export type EmployeeIncentivePctChangeRequestMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedPct?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    appliedAt?: true;
    createdAt?: true;
};
export type EmployeeIncentivePctChangeRequestMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedPct?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    appliedAt?: true;
    createdAt?: true;
};
export type EmployeeIncentivePctChangeRequestCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedPct?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    appliedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeeIncentivePctChangeRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    orderBy?: Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput | Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeIncentivePctChangeRequestCountAggregateInputType;
    _avg?: EmployeeIncentivePctChangeRequestAvgAggregateInputType;
    _sum?: EmployeeIncentivePctChangeRequestSumAggregateInputType;
    _min?: EmployeeIncentivePctChangeRequestMinAggregateInputType;
    _max?: EmployeeIncentivePctChangeRequestMaxAggregateInputType;
};
export type GetEmployeeIncentivePctChangeRequestAggregateType<T extends EmployeeIncentivePctChangeRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeIncentivePctChangeRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeIncentivePctChangeRequest[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeIncentivePctChangeRequest[P]>;
};
export type EmployeeIncentivePctChangeRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    orderBy?: Prisma.EmployeeIncentivePctChangeRequestOrderByWithAggregationInput | Prisma.EmployeeIncentivePctChangeRequestOrderByWithAggregationInput[];
    by: Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum[] | Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum;
    having?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeIncentivePctChangeRequestCountAggregateInputType | true;
    _avg?: EmployeeIncentivePctChangeRequestAvgAggregateInputType;
    _sum?: EmployeeIncentivePctChangeRequestSumAggregateInputType;
    _min?: EmployeeIncentivePctChangeRequestMinAggregateInputType;
    _max?: EmployeeIncentivePctChangeRequestMaxAggregateInputType;
};
export type EmployeeIncentivePctChangeRequestGroupByOutputType = {
    id: string;
    employeeId: string;
    proposedPct: runtime.Decimal;
    status: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    appliedAt: Date | null;
    createdAt: Date;
    _count: EmployeeIncentivePctChangeRequestCountAggregateOutputType | null;
    _avg: EmployeeIncentivePctChangeRequestAvgAggregateOutputType | null;
    _sum: EmployeeIncentivePctChangeRequestSumAggregateOutputType | null;
    _min: EmployeeIncentivePctChangeRequestMinAggregateOutputType | null;
    _max: EmployeeIncentivePctChangeRequestMaxAggregateOutputType | null;
};
export type GetEmployeeIncentivePctChangeRequestGroupByPayload<T extends EmployeeIncentivePctChangeRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeIncentivePctChangeRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeIncentivePctChangeRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeIncentivePctChangeRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeIncentivePctChangeRequestGroupByOutputType[P]>;
}>>;
export type EmployeeIncentivePctChangeRequestWhereInput = {
    AND?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    OR?: Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    NOT?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    proposedPct?: Prisma.DecimalFilter<"EmployeeIncentivePctChangeRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeIncentivePctChangeRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    appliedAt?: Prisma.DateTimeNullableFilter<"EmployeeIncentivePctChangeRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeIncentivePctChangeRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type EmployeeIncentivePctChangeRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type EmployeeIncentivePctChangeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    OR?: Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    NOT?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | Prisma.EmployeeIncentivePctChangeRequestWhereInput[];
    employeeId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    proposedPct?: Prisma.DecimalFilter<"EmployeeIncentivePctChangeRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeIncentivePctChangeRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    appliedAt?: Prisma.DateTimeNullableFilter<"EmployeeIncentivePctChangeRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeIncentivePctChangeRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type EmployeeIncentivePctChangeRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeIncentivePctChangeRequestCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeIncentivePctChangeRequestAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeIncentivePctChangeRequestMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeIncentivePctChangeRequestMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeIncentivePctChangeRequestSumOrderByAggregateInput;
};
export type EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | string;
    proposedPct?: Prisma.DecimalWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    appliedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeIncentivePctChangeRequest"> | Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutIncentivePctChangeRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeIncentivePctRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeIncentivePctChangeRequestInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutIncentivePctChangeRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeIncentivePctRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeIncentivePctChangeRequestNestedInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateManyInput = {
    id?: string;
    employeeId: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestListRelationFilter = {
    every?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    some?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    none?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
};
export type EmployeeIncentivePctChangeRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestNullableScalarRelationFilter = {
    is?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | null;
    isNot?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | null;
};
export type EmployeeIncentivePctChangeRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestAvgOrderByAggregateInput = {
    proposedPct?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestSumOrderByAggregateInput = {
    proposedPct?: Prisma.SortOrder;
};
export type EmployeeIncentivePctChangeRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
};
export type EmployeeIncentivePctChangeRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
};
export type EmployeeIncentivePctChangeRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | boolean;
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | boolean;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutWorkflowInstanceInput>, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | boolean;
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereInput | boolean;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutWorkflowInstanceInput>, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeIncentivePctChangeRequestCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
};
export type EmployeeIncentivePctChangeRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput | Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
};
export type EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutIncentivePctChangeRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeIncentivePctChangeRequestInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    employeeId: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput>;
};
export type EmployeeIncentivePctChangeRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInput | Prisma.EmployeeIncentivePctChangeRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutRequestedByInput>;
};
export type EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutRequestedByInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateManyMutationInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type EmployeeIncentivePctChangeRequestScalarWhereInput = {
    AND?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
    OR?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
    NOT?: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput | Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    proposedPct?: Prisma.DecimalFilter<"EmployeeIncentivePctChangeRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeIncentivePctChangeRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeIncentivePctChangeRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeIncentivePctChangeRequest"> | string | null;
    appliedAt?: Prisma.DateTimeNullableFilter<"EmployeeIncentivePctChangeRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeIncentivePctChangeRequest"> | Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutIncentivePctChangeRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeIncentivePctRequestsMadeInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    employeeId: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type EmployeeIncentivePctChangeRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
};
export type EmployeeIncentivePctChangeRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutWorkflowInstanceInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeIncentivePctChangeRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutIncentivePctChangeRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeIncentivePctRequestsMadeNestedInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeIncentivePctRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeIncentivePctChangeRequestInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeIncentivePctChangeRequestCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInput | Prisma.EmployeeIncentivePctChangeRequestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentivePctChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeIncentivePctChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateWithoutEmployeeInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeeIncentivePctChangeRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentivePctChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateManyMutationInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeeIncentivePctChangeRequestCreateManyRequestedByInput = {
    id?: string;
    employeeId: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutIncentivePctChangeRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeIncentivePctChangeRequestNestedInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestCreateManyEmployeeInput = {
    id?: string;
    proposedPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    appliedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeIncentivePctChangeRequestUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeIncentivePctRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeIncentivePctChangeRequestNestedInput;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentivePctChangeRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedPct?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    appliedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentivePctChangeRequest"]>;
export type EmployeeIncentivePctChangeRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedPct?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    appliedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentivePctChangeRequest"]>;
export type EmployeeIncentivePctChangeRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedPct?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    appliedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentivePctChangeRequest"]>;
export type EmployeeIncentivePctChangeRequestSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    proposedPct?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    appliedAt?: boolean;
    createdAt?: boolean;
};
export type EmployeeIncentivePctChangeRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "proposedPct" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "appliedAt" | "createdAt", ExtArgs["result"]["employeeIncentivePctChangeRequest"]>;
export type EmployeeIncentivePctChangeRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
};
export type EmployeeIncentivePctChangeRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
};
export type EmployeeIncentivePctChangeRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>;
};
export type $EmployeeIncentivePctChangeRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeIncentivePctChangeRequest";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        proposedPct: runtime.Decimal;
        status: $Enums.EmployeeLifecycleRequestStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        appliedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["employeeIncentivePctChangeRequest"]>;
    composites: {};
};
export type EmployeeIncentivePctChangeRequestGetPayload<S extends boolean | null | undefined | EmployeeIncentivePctChangeRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload, S>;
export type EmployeeIncentivePctChangeRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeIncentivePctChangeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeIncentivePctChangeRequestCountAggregateInputType | true;
};
export interface EmployeeIncentivePctChangeRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeIncentivePctChangeRequest'];
        meta: {
            name: 'EmployeeIncentivePctChangeRequest';
        };
    };
    findUnique<T extends EmployeeIncentivePctChangeRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeIncentivePctChangeRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeIncentivePctChangeRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeIncentivePctChangeRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeIncentivePctChangeRequestFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeIncentivePctChangeRequestCreateArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeIncentivePctChangeRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeIncentivePctChangeRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeIncentivePctChangeRequestDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeIncentivePctChangeRequestUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeIncentivePctChangeRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeIncentivePctChangeRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeIncentivePctChangeRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeIncentivePctChangeRequestUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeIncentivePctChangeRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentivePctChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentivePctChangeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeIncentivePctChangeRequestCountArgs>(args?: Prisma.Subset<T, EmployeeIncentivePctChangeRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeIncentivePctChangeRequestCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeIncentivePctChangeRequestAggregateArgs>(args: Prisma.Subset<T, EmployeeIncentivePctChangeRequestAggregateArgs>): Prisma.PrismaPromise<GetEmployeeIncentivePctChangeRequestAggregateType<T>>;
    groupBy<T extends EmployeeIncentivePctChangeRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeIncentivePctChangeRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeIncentivePctChangeRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeIncentivePctChangeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeIncentivePctChangeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeIncentivePctChangeRequestFieldRefs;
}
export interface Prisma__EmployeeIncentivePctChangeRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeIncentivePctChangeRequestFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'String'>;
    readonly proposedPct: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'Decimal'>;
    readonly status: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'EmployeeLifecycleRequestStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'String'>;
    readonly appliedAt: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"EmployeeIncentivePctChangeRequest", 'DateTime'>;
}
export type EmployeeIncentivePctChangeRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    orderBy?: Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput | Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum | Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum[];
};
export type EmployeeIncentivePctChangeRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    orderBy?: Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput | Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum | Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum[];
};
export type EmployeeIncentivePctChangeRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    orderBy?: Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput | Prisma.EmployeeIncentivePctChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum | Prisma.EmployeeIncentivePctChangeRequestScalarFieldEnum[];
};
export type EmployeeIncentivePctChangeRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateInput>;
};
export type EmployeeIncentivePctChangeRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeIncentivePctChangeRequestCreateManyInput | Prisma.EmployeeIncentivePctChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentivePctChangeRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    data: Prisma.EmployeeIncentivePctChangeRequestCreateManyInput | Prisma.EmployeeIncentivePctChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeIncentivePctChangeRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeIncentivePctChangeRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateInput>;
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateManyMutationInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    limit?: number;
};
export type EmployeeIncentivePctChangeRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateManyMutationInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    limit?: number;
    include?: Prisma.EmployeeIncentivePctChangeRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeIncentivePctChangeRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestCreateInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeIncentivePctChangeRequestUpdateInput, Prisma.EmployeeIncentivePctChangeRequestUncheckedUpdateInput>;
};
export type EmployeeIncentivePctChangeRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentivePctChangeRequestWhereUniqueInput;
};
export type EmployeeIncentivePctChangeRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentivePctChangeRequestWhereInput;
    limit?: number;
};
export type EmployeeIncentivePctChangeRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type EmployeeIncentivePctChangeRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentivePctChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentivePctChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentivePctChangeRequestInclude<ExtArgs> | null;
};
