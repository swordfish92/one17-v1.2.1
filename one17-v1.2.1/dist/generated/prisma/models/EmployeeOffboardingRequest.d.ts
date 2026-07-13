import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeOffboardingRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeOffboardingRequestPayload>;
export type AggregateEmployeeOffboardingRequest = {
    _count: EmployeeOffboardingRequestCountAggregateOutputType | null;
    _min: EmployeeOffboardingRequestMinAggregateOutputType | null;
    _max: EmployeeOffboardingRequestMaxAggregateOutputType | null;
};
export type EmployeeOffboardingRequestMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    reason: string | null;
    status: $Enums.EmployeeLifecycleRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    completedAt: Date | null;
    createdAt: Date | null;
};
export type EmployeeOffboardingRequestMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    reason: string | null;
    status: $Enums.EmployeeLifecycleRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    completedAt: Date | null;
    createdAt: Date | null;
};
export type EmployeeOffboardingRequestCountAggregateOutputType = {
    id: number;
    employeeId: number;
    reason: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    completedAt: number;
    createdAt: number;
    _all: number;
};
export type EmployeeOffboardingRequestMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    completedAt?: true;
    createdAt?: true;
};
export type EmployeeOffboardingRequestMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    completedAt?: true;
    createdAt?: true;
};
export type EmployeeOffboardingRequestCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    completedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeeOffboardingRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOffboardingRequestOrderByWithRelationInput | Prisma.EmployeeOffboardingRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeOffboardingRequestCountAggregateInputType;
    _min?: EmployeeOffboardingRequestMinAggregateInputType;
    _max?: EmployeeOffboardingRequestMaxAggregateInputType;
};
export type GetEmployeeOffboardingRequestAggregateType<T extends EmployeeOffboardingRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeOffboardingRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeOffboardingRequest[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeOffboardingRequest[P]>;
};
export type EmployeeOffboardingRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOffboardingRequestOrderByWithAggregationInput | Prisma.EmployeeOffboardingRequestOrderByWithAggregationInput[];
    by: Prisma.EmployeeOffboardingRequestScalarFieldEnum[] | Prisma.EmployeeOffboardingRequestScalarFieldEnum;
    having?: Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeOffboardingRequestCountAggregateInputType | true;
    _min?: EmployeeOffboardingRequestMinAggregateInputType;
    _max?: EmployeeOffboardingRequestMaxAggregateInputType;
};
export type EmployeeOffboardingRequestGroupByOutputType = {
    id: string;
    employeeId: string;
    reason: string;
    status: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    completedAt: Date | null;
    createdAt: Date;
    _count: EmployeeOffboardingRequestCountAggregateOutputType | null;
    _min: EmployeeOffboardingRequestMinAggregateOutputType | null;
    _max: EmployeeOffboardingRequestMaxAggregateOutputType | null;
};
export type GetEmployeeOffboardingRequestGroupByPayload<T extends EmployeeOffboardingRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeOffboardingRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeOffboardingRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeOffboardingRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeOffboardingRequestGroupByOutputType[P]>;
}>>;
export type EmployeeOffboardingRequestWhereInput = {
    AND?: Prisma.EmployeeOffboardingRequestWhereInput | Prisma.EmployeeOffboardingRequestWhereInput[];
    OR?: Prisma.EmployeeOffboardingRequestWhereInput[];
    NOT?: Prisma.EmployeeOffboardingRequestWhereInput | Prisma.EmployeeOffboardingRequestWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    reason?: Prisma.StringFilter<"EmployeeOffboardingRequest"> | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeOffboardingRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeOffboardingRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeOffboardingRequest"> | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmployeeOffboardingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeOffboardingRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type EmployeeOffboardingRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type EmployeeOffboardingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.EmployeeOffboardingRequestWhereInput | Prisma.EmployeeOffboardingRequestWhereInput[];
    OR?: Prisma.EmployeeOffboardingRequestWhereInput[];
    NOT?: Prisma.EmployeeOffboardingRequestWhereInput | Prisma.EmployeeOffboardingRequestWhereInput[];
    employeeId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    reason?: Prisma.StringFilter<"EmployeeOffboardingRequest"> | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeOffboardingRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeOffboardingRequest"> | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmployeeOffboardingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeOffboardingRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type EmployeeOffboardingRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeOffboardingRequestCountOrderByAggregateInput;
    _max?: Prisma.EmployeeOffboardingRequestMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeOffboardingRequestMinOrderByAggregateInput;
};
export type EmployeeOffboardingRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput | Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput | Prisma.EmployeeOffboardingRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeOffboardingRequest"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeeOffboardingRequest"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"EmployeeOffboardingRequest"> | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusWithAggregatesFilter<"EmployeeOffboardingRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"EmployeeOffboardingRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"EmployeeOffboardingRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"EmployeeOffboardingRequest"> | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmployeeOffboardingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeOffboardingRequest"> | Date | string;
};
export type EmployeeOffboardingRequestCreateInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOffboardingRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeOffboardingRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeOffboardingRequestInput;
};
export type EmployeeOffboardingRequestUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOffboardingRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeOffboardingRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeOffboardingRequestNestedInput;
};
export type EmployeeOffboardingRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestCreateManyInput = {
    id?: string;
    employeeId: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestListRelationFilter = {
    every?: Prisma.EmployeeOffboardingRequestWhereInput;
    some?: Prisma.EmployeeOffboardingRequestWhereInput;
    none?: Prisma.EmployeeOffboardingRequestWhereInput;
};
export type EmployeeOffboardingRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeOffboardingRequestNullableScalarRelationFilter = {
    is?: Prisma.EmployeeOffboardingRequestWhereInput | null;
    isNot?: Prisma.EmployeeOffboardingRequestWhereInput | null;
};
export type EmployeeOffboardingRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeOffboardingRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeOffboardingRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeOffboardingRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
};
export type EmployeeOffboardingRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
};
export type EmployeeOffboardingRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    update?: Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
};
export type EmployeeOffboardingRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput> | Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    update?: Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
};
export type EmployeeOffboardingRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.EmployeeOffboardingRequestWhereInput | boolean;
    delete?: Prisma.EmployeeOffboardingRequestWhereInput | boolean;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUpdateWithoutWorkflowInstanceInput>, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeOffboardingRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.EmployeeOffboardingRequestWhereInput | boolean;
    delete?: Prisma.EmployeeOffboardingRequestWhereInput | boolean;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUpdateWithoutWorkflowInstanceInput>, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeOffboardingRequestCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
};
export type EmployeeOffboardingRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
};
export type EmployeeOffboardingRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    update?: Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
};
export type EmployeeOffboardingRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput[] | Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeOffboardingRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    delete?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    connect?: Prisma.EmployeeOffboardingRequestWhereUniqueInput | Prisma.EmployeeOffboardingRequestWhereUniqueInput[];
    update?: Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeOffboardingRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
};
export type EmployeeOffboardingRequestCreateWithoutRequestedByInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOffboardingRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeOffboardingRequestInput;
};
export type EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    employeeId: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput>;
};
export type EmployeeOffboardingRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.EmployeeOffboardingRequestCreateManyRequestedByInput | Prisma.EmployeeOffboardingRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutRequestedByInput>;
};
export type EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutRequestedByInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type EmployeeOffboardingRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.EmployeeOffboardingRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateManyMutationInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type EmployeeOffboardingRequestScalarWhereInput = {
    AND?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
    OR?: Prisma.EmployeeOffboardingRequestScalarWhereInput[];
    NOT?: Prisma.EmployeeOffboardingRequestScalarWhereInput | Prisma.EmployeeOffboardingRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    reason?: Prisma.StringFilter<"EmployeeOffboardingRequest"> | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFilter<"EmployeeOffboardingRequest"> | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeeOffboardingRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmployeeOffboardingRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"EmployeeOffboardingRequest"> | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmployeeOffboardingRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeOffboardingRequest"> | Date | string;
};
export type EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOffboardingRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeOffboardingRequestsMadeInput;
};
export type EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    employeeId: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type EmployeeOffboardingRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
};
export type EmployeeOffboardingRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutWorkflowInstanceInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EmployeeOffboardingRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOffboardingRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeOffboardingRequestsMadeNestedInput;
};
export type EmployeeOffboardingRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestCreateWithoutEmployeeInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEmployeeOffboardingRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutEmployeeOffboardingRequestInput;
};
export type EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeOffboardingRequestCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeeOffboardingRequestCreateManyEmployeeInput | Prisma.EmployeeOffboardingRequestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeeOffboardingRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeOffboardingRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateWithoutEmployeeInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeeOffboardingRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeeOffboardingRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateManyMutationInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeeOffboardingRequestCreateManyRequestedByInput = {
    id?: string;
    employeeId: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOffboardingRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeOffboardingRequestNestedInput;
};
export type EmployeeOffboardingRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestCreateManyEmployeeInput = {
    id?: string;
    reason: string;
    status?: $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmployeeOffboardingRequestUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEmployeeOffboardingRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutEmployeeOffboardingRequestNestedInput;
};
export type EmployeeOffboardingRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmployeeLifecycleRequestStatusFieldUpdateOperationsInput | $Enums.EmployeeLifecycleRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeOffboardingRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeOffboardingRequest"]>;
export type EmployeeOffboardingRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeOffboardingRequest"]>;
export type EmployeeOffboardingRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["employeeOffboardingRequest"]>;
export type EmployeeOffboardingRequestSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
};
export type EmployeeOffboardingRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "reason" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "completedAt" | "createdAt", ExtArgs["result"]["employeeOffboardingRequest"]>;
export type EmployeeOffboardingRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
};
export type EmployeeOffboardingRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
};
export type EmployeeOffboardingRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>;
};
export type $EmployeeOffboardingRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeOffboardingRequest";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        reason: string;
        status: $Enums.EmployeeLifecycleRequestStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        completedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["employeeOffboardingRequest"]>;
    composites: {};
};
export type EmployeeOffboardingRequestGetPayload<S extends boolean | null | undefined | EmployeeOffboardingRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload, S>;
export type EmployeeOffboardingRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeOffboardingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeOffboardingRequestCountAggregateInputType | true;
};
export interface EmployeeOffboardingRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeOffboardingRequest'];
        meta: {
            name: 'EmployeeOffboardingRequest';
        };
    };
    findUnique<T extends EmployeeOffboardingRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeOffboardingRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeOffboardingRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeOffboardingRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeOffboardingRequestFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeOffboardingRequestCreateArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeOffboardingRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeOffboardingRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeOffboardingRequestDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeOffboardingRequestUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeOffboardingRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeOffboardingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeOffboardingRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeOffboardingRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeOffboardingRequestUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeOffboardingRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeOffboardingRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeeOffboardingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeOffboardingRequestCountArgs>(args?: Prisma.Subset<T, EmployeeOffboardingRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeOffboardingRequestCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeOffboardingRequestAggregateArgs>(args: Prisma.Subset<T, EmployeeOffboardingRequestAggregateArgs>): Prisma.PrismaPromise<GetEmployeeOffboardingRequestAggregateType<T>>;
    groupBy<T extends EmployeeOffboardingRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeOffboardingRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeOffboardingRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeOffboardingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeOffboardingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeOffboardingRequestFieldRefs;
}
export interface Prisma__EmployeeOffboardingRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeOffboardingRequestFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly reason: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly status: Prisma.FieldRef<"EmployeeOffboardingRequest", 'EmployeeLifecycleRequestStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"EmployeeOffboardingRequest", 'String'>;
    readonly completedAt: Prisma.FieldRef<"EmployeeOffboardingRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"EmployeeOffboardingRequest", 'DateTime'>;
}
export type EmployeeOffboardingRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOffboardingRequestOrderByWithRelationInput | Prisma.EmployeeOffboardingRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeOffboardingRequestScalarFieldEnum | Prisma.EmployeeOffboardingRequestScalarFieldEnum[];
};
export type EmployeeOffboardingRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOffboardingRequestOrderByWithRelationInput | Prisma.EmployeeOffboardingRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeOffboardingRequestScalarFieldEnum | Prisma.EmployeeOffboardingRequestScalarFieldEnum[];
};
export type EmployeeOffboardingRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOffboardingRequestOrderByWithRelationInput | Prisma.EmployeeOffboardingRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeOffboardingRequestScalarFieldEnum | Prisma.EmployeeOffboardingRequestScalarFieldEnum[];
};
export type EmployeeOffboardingRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateInput, Prisma.EmployeeOffboardingRequestUncheckedCreateInput>;
};
export type EmployeeOffboardingRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeOffboardingRequestCreateManyInput | Prisma.EmployeeOffboardingRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeOffboardingRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    data: Prisma.EmployeeOffboardingRequestCreateManyInput | Prisma.EmployeeOffboardingRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeOffboardingRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeOffboardingRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateInput>;
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateManyMutationInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    limit?: number;
};
export type EmployeeOffboardingRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateManyMutationInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    limit?: number;
    include?: Prisma.EmployeeOffboardingRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeOffboardingRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeOffboardingRequestCreateInput, Prisma.EmployeeOffboardingRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeOffboardingRequestUpdateInput, Prisma.EmployeeOffboardingRequestUncheckedUpdateInput>;
};
export type EmployeeOffboardingRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeeOffboardingRequestWhereUniqueInput;
};
export type EmployeeOffboardingRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeOffboardingRequestWhereInput;
    limit?: number;
};
export type EmployeeOffboardingRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type EmployeeOffboardingRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOffboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOffboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOffboardingRequestInclude<ExtArgs> | null;
};
