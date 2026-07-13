import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorExitRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorExitRequestPayload>;
export type AggregateInvestorExitRequest = {
    _count: InvestorExitRequestCountAggregateOutputType | null;
    _min: InvestorExitRequestMinAggregateOutputType | null;
    _max: InvestorExitRequestMaxAggregateOutputType | null;
};
export type InvestorExitRequestMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    exitType: $Enums.InvestorExitType | null;
    status: $Enums.InvestorExitRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorExitRequestMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    exitType: $Enums.InvestorExitType | null;
    status: $Enums.InvestorExitRequestStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorExitRequestCountAggregateOutputType = {
    id: number;
    investorId: number;
    exitType: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    createdAt: number;
    _all: number;
};
export type InvestorExitRequestMinAggregateInputType = {
    id?: true;
    investorId?: true;
    exitType?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorExitRequestMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    exitType?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorExitRequestCountAggregateInputType = {
    id?: true;
    investorId?: true;
    exitType?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorExitRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorExitRequestWhereInput;
    orderBy?: Prisma.InvestorExitRequestOrderByWithRelationInput | Prisma.InvestorExitRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorExitRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorExitRequestCountAggregateInputType;
    _min?: InvestorExitRequestMinAggregateInputType;
    _max?: InvestorExitRequestMaxAggregateInputType;
};
export type GetInvestorExitRequestAggregateType<T extends InvestorExitRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorExitRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorExitRequest[P]> : Prisma.GetScalarType<T[P], AggregateInvestorExitRequest[P]>;
};
export type InvestorExitRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorExitRequestWhereInput;
    orderBy?: Prisma.InvestorExitRequestOrderByWithAggregationInput | Prisma.InvestorExitRequestOrderByWithAggregationInput[];
    by: Prisma.InvestorExitRequestScalarFieldEnum[] | Prisma.InvestorExitRequestScalarFieldEnum;
    having?: Prisma.InvestorExitRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorExitRequestCountAggregateInputType | true;
    _min?: InvestorExitRequestMinAggregateInputType;
    _max?: InvestorExitRequestMaxAggregateInputType;
};
export type InvestorExitRequestGroupByOutputType = {
    id: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date;
    _count: InvestorExitRequestCountAggregateOutputType | null;
    _min: InvestorExitRequestMinAggregateOutputType | null;
    _max: InvestorExitRequestMaxAggregateOutputType | null;
};
export type GetInvestorExitRequestGroupByPayload<T extends InvestorExitRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorExitRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorExitRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorExitRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorExitRequestGroupByOutputType[P]>;
}>>;
export type InvestorExitRequestWhereInput = {
    AND?: Prisma.InvestorExitRequestWhereInput | Prisma.InvestorExitRequestWhereInput[];
    OR?: Prisma.InvestorExitRequestWhereInput[];
    NOT?: Prisma.InvestorExitRequestWhereInput | Prisma.InvestorExitRequestWhereInput[];
    id?: Prisma.UuidFilter<"InvestorExitRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorExitRequest"> | string;
    exitType?: Prisma.EnumInvestorExitTypeFilter<"InvestorExitRequest"> | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFilter<"InvestorExitRequest"> | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorExitRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorExitRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorExitRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorExitRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type InvestorExitRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    exitType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type InvestorExitRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.InvestorExitRequestWhereInput | Prisma.InvestorExitRequestWhereInput[];
    OR?: Prisma.InvestorExitRequestWhereInput[];
    NOT?: Prisma.InvestorExitRequestWhereInput | Prisma.InvestorExitRequestWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorExitRequest"> | string;
    exitType?: Prisma.EnumInvestorExitTypeFilter<"InvestorExitRequest"> | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFilter<"InvestorExitRequest"> | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorExitRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorExitRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorExitRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type InvestorExitRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    exitType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorExitRequestCountOrderByAggregateInput;
    _max?: Prisma.InvestorExitRequestMaxOrderByAggregateInput;
    _min?: Prisma.InvestorExitRequestMinOrderByAggregateInput;
};
export type InvestorExitRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorExitRequestScalarWhereWithAggregatesInput | Prisma.InvestorExitRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorExitRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorExitRequestScalarWhereWithAggregatesInput | Prisma.InvestorExitRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorExitRequest"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorExitRequest"> | string;
    exitType?: Prisma.EnumInvestorExitTypeWithAggregatesFilter<"InvestorExitRequest"> | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusWithAggregatesFilter<"InvestorExitRequest"> | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"InvestorExitRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorExitRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"InvestorExitRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorExitRequest"> | Date | string;
};
export type InvestorExitRequestCreateInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutExitRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorExitRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorExitRequestInput;
};
export type InvestorExitRequestUncheckedCreateInput = {
    id?: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutExitRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorExitRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorExitRequestNestedInput;
};
export type InvestorExitRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestCreateManyInput = {
    id?: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestListRelationFilter = {
    every?: Prisma.InvestorExitRequestWhereInput;
    some?: Prisma.InvestorExitRequestWhereInput;
    none?: Prisma.InvestorExitRequestWhereInput;
};
export type InvestorExitRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorExitRequestNullableScalarRelationFilter = {
    is?: Prisma.InvestorExitRequestWhereInput | null;
    isNot?: Prisma.InvestorExitRequestWhereInput | null;
};
export type InvestorExitRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    exitType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorExitRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    exitType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorExitRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    exitType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorExitRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorExitRequestCreateWithoutRequestedByInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
};
export type InvestorExitRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorExitRequestCreateWithoutRequestedByInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
};
export type InvestorExitRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorExitRequestCreateWithoutRequestedByInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    delete?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    update?: Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorExitRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorExitRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
};
export type InvestorExitRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorExitRequestCreateWithoutRequestedByInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorExitRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    delete?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    update?: Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorExitRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorExitRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
};
export type InvestorExitRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorExitRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorExitRequestWhereInput | boolean;
    delete?: Prisma.InvestorExitRequestWhereInput | boolean;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorExitRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorExitRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorExitRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorExitRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorExitRequestWhereInput | boolean;
    delete?: Prisma.InvestorExitRequestWhereInput | boolean;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorExitRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorExitRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorExitRequestCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorExitRequestCreateWithoutInvestorInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
};
export type InvestorExitRequestUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorExitRequestCreateWithoutInvestorInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
};
export type InvestorExitRequestUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorExitRequestCreateWithoutInvestorInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    delete?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    update?: Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorExitRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorExitRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
};
export type InvestorExitRequestUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorExitRequestCreateWithoutInvestorInput[] | Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorExitRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorExitRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorExitRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    delete?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    connect?: Prisma.InvestorExitRequestWhereUniqueInput | Prisma.InvestorExitRequestWhereUniqueInput[];
    update?: Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorExitRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorExitRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorExitRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
};
export type EnumInvestorExitTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvestorExitType;
};
export type EnumInvestorExitRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestorExitRequestStatus;
};
export type InvestorExitRequestCreateWithoutRequestedByInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutExitRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorExitRequestInput;
};
export type InvestorExitRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorExitRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.InvestorExitRequestCreateManyRequestedByInput | Prisma.InvestorExitRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorExitRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorExitRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutRequestedByInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type InvestorExitRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.InvestorExitRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateManyMutationInput, Prisma.InvestorExitRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type InvestorExitRequestScalarWhereInput = {
    AND?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
    OR?: Prisma.InvestorExitRequestScalarWhereInput[];
    NOT?: Prisma.InvestorExitRequestScalarWhereInput | Prisma.InvestorExitRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorExitRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorExitRequest"> | string;
    exitType?: Prisma.EnumInvestorExitTypeFilter<"InvestorExitRequest"> | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFilter<"InvestorExitRequest"> | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorExitRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorExitRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorExitRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorExitRequest"> | Date | string;
};
export type InvestorExitRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutExitRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorExitRequestsMadeInput;
};
export type InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type InvestorExitRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.InvestorExitRequestWhereInput;
};
export type InvestorExitRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.InvestorExitRequestWhereInput;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorExitRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutExitRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorExitRequestsMadeNestedInput;
};
export type InvestorExitRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestCreateWithoutInvestorInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorExitRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorExitRequestInput;
};
export type InvestorExitRequestUncheckedCreateWithoutInvestorInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorExitRequestCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorExitRequestCreateManyInvestorInput | Prisma.InvestorExitRequestCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorExitRequestUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorExitRequestUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateWithoutInvestorInput, Prisma.InvestorExitRequestUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorExitRequestUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorExitRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateManyMutationInput, Prisma.InvestorExitRequestUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorExitRequestCreateManyRequestedByInput = {
    id?: string;
    investorId: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutExitRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorExitRequestNestedInput;
};
export type InvestorExitRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestCreateManyInvestorInput = {
    id?: string;
    exitType: $Enums.InvestorExitType;
    status?: $Enums.InvestorExitRequestStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorExitRequestUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorExitRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorExitRequestNestedInput;
};
export type InvestorExitRequestUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    exitType?: Prisma.EnumInvestorExitTypeFieldUpdateOperationsInput | $Enums.InvestorExitType;
    status?: Prisma.EnumInvestorExitRequestStatusFieldUpdateOperationsInput | $Enums.InvestorExitRequestStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorExitRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    exitType?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorExitRequest"]>;
export type InvestorExitRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    exitType?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorExitRequest"]>;
export type InvestorExitRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    exitType?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorExitRequest"]>;
export type InvestorExitRequestSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    exitType?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
};
export type InvestorExitRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "exitType" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "createdAt", ExtArgs["result"]["investorExitRequest"]>;
export type InvestorExitRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorExitRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorExitRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>;
};
export type $InvestorExitRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorExitRequest";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        exitType: $Enums.InvestorExitType;
        status: $Enums.InvestorExitRequestStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorExitRequest"]>;
    composites: {};
};
export type InvestorExitRequestGetPayload<S extends boolean | null | undefined | InvestorExitRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload, S>;
export type InvestorExitRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorExitRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorExitRequestCountAggregateInputType | true;
};
export interface InvestorExitRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorExitRequest'];
        meta: {
            name: 'InvestorExitRequest';
        };
    };
    findUnique<T extends InvestorExitRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorExitRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorExitRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorExitRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorExitRequestFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorExitRequestCreateArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorExitRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorExitRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorExitRequestDeleteArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorExitRequestUpdateArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorExitRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorExitRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorExitRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorExitRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorExitRequestUpsertArgs>(args: Prisma.SelectSubset<T, InvestorExitRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorExitRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorExitRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorExitRequestCountArgs>(args?: Prisma.Subset<T, InvestorExitRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorExitRequestCountAggregateOutputType> : number>;
    aggregate<T extends InvestorExitRequestAggregateArgs>(args: Prisma.Subset<T, InvestorExitRequestAggregateArgs>): Prisma.PrismaPromise<GetInvestorExitRequestAggregateType<T>>;
    groupBy<T extends InvestorExitRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorExitRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorExitRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorExitRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorExitRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorExitRequestFieldRefs;
}
export interface Prisma__InvestorExitRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorExitRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorExitRequestFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorExitRequest", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorExitRequest", 'String'>;
    readonly exitType: Prisma.FieldRef<"InvestorExitRequest", 'InvestorExitType'>;
    readonly status: Prisma.FieldRef<"InvestorExitRequest", 'InvestorExitRequestStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"InvestorExitRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"InvestorExitRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"InvestorExitRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorExitRequest", 'DateTime'>;
}
export type InvestorExitRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorExitRequestWhereInput;
    orderBy?: Prisma.InvestorExitRequestOrderByWithRelationInput | Prisma.InvestorExitRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorExitRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorExitRequestScalarFieldEnum | Prisma.InvestorExitRequestScalarFieldEnum[];
};
export type InvestorExitRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorExitRequestWhereInput;
    orderBy?: Prisma.InvestorExitRequestOrderByWithRelationInput | Prisma.InvestorExitRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorExitRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorExitRequestScalarFieldEnum | Prisma.InvestorExitRequestScalarFieldEnum[];
};
export type InvestorExitRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorExitRequestWhereInput;
    orderBy?: Prisma.InvestorExitRequestOrderByWithRelationInput | Prisma.InvestorExitRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorExitRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorExitRequestScalarFieldEnum | Prisma.InvestorExitRequestScalarFieldEnum[];
};
export type InvestorExitRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorExitRequestCreateInput, Prisma.InvestorExitRequestUncheckedCreateInput>;
};
export type InvestorExitRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorExitRequestCreateManyInput | Prisma.InvestorExitRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorExitRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    data: Prisma.InvestorExitRequestCreateManyInput | Prisma.InvestorExitRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorExitRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorExitRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateInput, Prisma.InvestorExitRequestUncheckedUpdateInput>;
    where: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateManyMutationInput, Prisma.InvestorExitRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorExitRequestWhereInput;
    limit?: number;
};
export type InvestorExitRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorExitRequestUpdateManyMutationInput, Prisma.InvestorExitRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorExitRequestWhereInput;
    limit?: number;
    include?: Prisma.InvestorExitRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorExitRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorExitRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorExitRequestCreateInput, Prisma.InvestorExitRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorExitRequestUpdateInput, Prisma.InvestorExitRequestUncheckedUpdateInput>;
};
export type InvestorExitRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorExitRequestWhereUniqueInput;
};
export type InvestorExitRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorExitRequestWhereInput;
    limit?: number;
};
export type InvestorExitRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type InvestorExitRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorExitRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorExitRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorExitRequestInclude<ExtArgs> | null;
};
