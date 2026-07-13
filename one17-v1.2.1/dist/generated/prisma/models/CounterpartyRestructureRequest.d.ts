import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CounterpartyRestructureRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$CounterpartyRestructureRequestPayload>;
export type AggregateCounterpartyRestructureRequest = {
    _count: CounterpartyRestructureRequestCountAggregateOutputType | null;
    _avg: CounterpartyRestructureRequestAvgAggregateOutputType | null;
    _sum: CounterpartyRestructureRequestSumAggregateOutputType | null;
    _min: CounterpartyRestructureRequestMinAggregateOutputType | null;
    _max: CounterpartyRestructureRequestMaxAggregateOutputType | null;
};
export type CounterpartyRestructureRequestAvgAggregateOutputType = {
    extensionMonths: number | null;
};
export type CounterpartyRestructureRequestSumAggregateOutputType = {
    extensionMonths: number | null;
};
export type CounterpartyRestructureRequestMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    obligationId: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType | null;
    extensionMonths: number | null;
    reason: string | null;
    status: $Enums.CounterpartyRestructureRequestStatus | null;
    decidedByUserId: string | null;
    decisionNotes: string | null;
    decidedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type CounterpartyRestructureRequestMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    obligationId: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType | null;
    extensionMonths: number | null;
    reason: string | null;
    status: $Enums.CounterpartyRestructureRequestStatus | null;
    decidedByUserId: string | null;
    decisionNotes: string | null;
    decidedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type CounterpartyRestructureRequestCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    obligationId: number;
    requestType: number;
    extensionMonths: number;
    reason: number;
    status: number;
    decidedByUserId: number;
    decisionNotes: number;
    decidedAt: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type CounterpartyRestructureRequestAvgAggregateInputType = {
    extensionMonths?: true;
};
export type CounterpartyRestructureRequestSumAggregateInputType = {
    extensionMonths?: true;
};
export type CounterpartyRestructureRequestMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    obligationId?: true;
    requestType?: true;
    extensionMonths?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decisionNotes?: true;
    decidedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type CounterpartyRestructureRequestMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    obligationId?: true;
    requestType?: true;
    extensionMonths?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decisionNotes?: true;
    decidedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type CounterpartyRestructureRequestCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    obligationId?: true;
    requestType?: true;
    extensionMonths?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decisionNotes?: true;
    decidedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type CounterpartyRestructureRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithRelationInput | Prisma.CounterpartyRestructureRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CounterpartyRestructureRequestCountAggregateInputType;
    _avg?: CounterpartyRestructureRequestAvgAggregateInputType;
    _sum?: CounterpartyRestructureRequestSumAggregateInputType;
    _min?: CounterpartyRestructureRequestMinAggregateInputType;
    _max?: CounterpartyRestructureRequestMaxAggregateInputType;
};
export type GetCounterpartyRestructureRequestAggregateType<T extends CounterpartyRestructureRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateCounterpartyRestructureRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounterpartyRestructureRequest[P]> : Prisma.GetScalarType<T[P], AggregateCounterpartyRestructureRequest[P]>;
};
export type CounterpartyRestructureRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithAggregationInput | Prisma.CounterpartyRestructureRequestOrderByWithAggregationInput[];
    by: Prisma.CounterpartyRestructureRequestScalarFieldEnum[] | Prisma.CounterpartyRestructureRequestScalarFieldEnum;
    having?: Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CounterpartyRestructureRequestCountAggregateInputType | true;
    _avg?: CounterpartyRestructureRequestAvgAggregateInputType;
    _sum?: CounterpartyRestructureRequestSumAggregateInputType;
    _min?: CounterpartyRestructureRequestMinAggregateInputType;
    _max?: CounterpartyRestructureRequestMaxAggregateInputType;
};
export type CounterpartyRestructureRequestGroupByOutputType = {
    id: string;
    counterpartyId: string;
    obligationId: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths: number | null;
    reason: string;
    status: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId: string | null;
    decisionNotes: string | null;
    decidedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: CounterpartyRestructureRequestCountAggregateOutputType | null;
    _avg: CounterpartyRestructureRequestAvgAggregateOutputType | null;
    _sum: CounterpartyRestructureRequestSumAggregateOutputType | null;
    _min: CounterpartyRestructureRequestMinAggregateOutputType | null;
    _max: CounterpartyRestructureRequestMaxAggregateOutputType | null;
};
export type GetCounterpartyRestructureRequestGroupByPayload<T extends CounterpartyRestructureRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CounterpartyRestructureRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CounterpartyRestructureRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CounterpartyRestructureRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CounterpartyRestructureRequestGroupByOutputType[P]>;
}>>;
export type CounterpartyRestructureRequestWhereInput = {
    AND?: Prisma.CounterpartyRestructureRequestWhereInput | Prisma.CounterpartyRestructureRequestWhereInput[];
    OR?: Prisma.CounterpartyRestructureRequestWhereInput[];
    NOT?: Prisma.CounterpartyRestructureRequestWhereInput | Prisma.CounterpartyRestructureRequestWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyRestructureRequest"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRestructureRequest"> | string;
    obligationId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.IntNullableFilter<"CounterpartyRestructureRequest"> | number | null;
    reason?: Prisma.StringFilter<"CounterpartyRestructureRequest"> | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"CounterpartyRestructureRequest"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRestructureRequest"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationNullableScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput> | null;
    decidedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type CounterpartyRestructureRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    extensionMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    obligation?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput;
    decidedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type CounterpartyRestructureRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.CounterpartyRestructureRequestWhereInput | Prisma.CounterpartyRestructureRequestWhereInput[];
    OR?: Prisma.CounterpartyRestructureRequestWhereInput[];
    NOT?: Prisma.CounterpartyRestructureRequestWhereInput | Prisma.CounterpartyRestructureRequestWhereInput[];
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRestructureRequest"> | string;
    obligationId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.IntNullableFilter<"CounterpartyRestructureRequest"> | number | null;
    reason?: Prisma.StringFilter<"CounterpartyRestructureRequest"> | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"CounterpartyRestructureRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRestructureRequest"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationNullableScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput> | null;
    decidedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type CounterpartyRestructureRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    extensionMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CounterpartyRestructureRequestCountOrderByAggregateInput;
    _avg?: Prisma.CounterpartyRestructureRequestAvgOrderByAggregateInput;
    _max?: Prisma.CounterpartyRestructureRequestMaxOrderByAggregateInput;
    _min?: Prisma.CounterpartyRestructureRequestMinOrderByAggregateInput;
    _sum?: Prisma.CounterpartyRestructureRequestSumOrderByAggregateInput;
};
export type CounterpartyRestructureRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput | Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput | Prisma.CounterpartyRestructureRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CounterpartyRestructureRequest"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"CounterpartyRestructureRequest"> | string;
    obligationId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeWithAggregatesFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.IntNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | number | null;
    reason?: Prisma.StringWithAggregatesFilter<"CounterpartyRestructureRequest"> | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusWithAggregatesFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | string | null;
    decisionNotes?: Prisma.StringNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyRestructureRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CounterpartyRestructureRequest"> | Date | string;
};
export type CounterpartyRestructureRequestCreateInput = {
    id?: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRestructureRequestsInput;
    obligation?: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutRestructureRequestsInput;
    decidedBy?: Prisma.AppUserCreateNestedOneWithoutRestructureRequestsDecidedInput;
};
export type CounterpartyRestructureRequestUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRestructureRequestsNestedInput;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneWithoutRestructureRequestsNestedInput;
    decidedBy?: Prisma.AppUserUpdateOneWithoutRestructureRequestsDecidedNestedInput;
};
export type CounterpartyRestructureRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestCreateManyInput = {
    id?: string;
    counterpartyId: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestListRelationFilter = {
    every?: Prisma.CounterpartyRestructureRequestWhereInput;
    some?: Prisma.CounterpartyRestructureRequestWhereInput;
    none?: Prisma.CounterpartyRestructureRequestWhereInput;
};
export type CounterpartyRestructureRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    extensionMonths?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestAvgOrderByAggregateInput = {
    extensionMonths?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    extensionMonths?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    requestType?: Prisma.SortOrder;
    extensionMonths?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestSumOrderByAggregateInput = {
    extensionMonths?: Prisma.SortOrder;
};
export type CounterpartyRestructureRequestCreateNestedManyWithoutDecidedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput> | Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyDecidedByInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutDecidedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput> | Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyDecidedByInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUpdateManyWithoutDecidedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput> | Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutDecidedByInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyDecidedByInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutDecidedByInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutDecidedByInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutDecidedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput> | Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutDecidedByInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyDecidedByInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutDecidedByInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutDecidedByInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutDecidedByInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type CounterpartyRestructureRequestCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.CounterpartyRestructureRequestType;
};
export type EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.CounterpartyRestructureRequestStatus;
};
export type CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput> | Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyObligationInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput> | Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyObligationInputEnvelope;
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
};
export type CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput> | Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyObligationInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput> | Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput[] | Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput | Prisma.CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.CounterpartyRestructureRequestCreateManyObligationInputEnvelope;
    set?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyRestructureRequestWhereUniqueInput | Prisma.CounterpartyRestructureRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutObligationInput | Prisma.CounterpartyRestructureRequestUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
};
export type CounterpartyRestructureRequestCreateWithoutDecidedByInput = {
    id?: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRestructureRequestsInput;
    obligation?: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutRestructureRequestsInput;
};
export type CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput = {
    id?: string;
    counterpartyId: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestCreateOrConnectWithoutDecidedByInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput>;
};
export type CounterpartyRestructureRequestCreateManyDecidedByInputEnvelope = {
    data: Prisma.CounterpartyRestructureRequestCreateManyDecidedByInput | Prisma.CounterpartyRestructureRequestCreateManyDecidedByInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutDecidedByInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutDecidedByInput>;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutDecidedByInput>;
};
export type CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutDecidedByInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutDecidedByInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutDecidedByInput>;
};
export type CounterpartyRestructureRequestUpdateManyWithWhereWithoutDecidedByInput = {
    where: Prisma.CounterpartyRestructureRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateManyMutationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutDecidedByInput>;
};
export type CounterpartyRestructureRequestScalarWhereInput = {
    AND?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
    OR?: Prisma.CounterpartyRestructureRequestScalarWhereInput[];
    NOT?: Prisma.CounterpartyRestructureRequestScalarWhereInput | Prisma.CounterpartyRestructureRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyRestructureRequest"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRestructureRequest"> | string;
    obligationId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.IntNullableFilter<"CounterpartyRestructureRequest"> | number | null;
    reason?: Prisma.StringFilter<"CounterpartyRestructureRequest"> | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFilter<"CounterpartyRestructureRequest"> | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"CounterpartyRestructureRequest"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyRestructureRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRestructureRequest"> | Date | string;
};
export type CounterpartyRestructureRequestCreateWithoutCounterpartyInput = {
    id?: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    obligation?: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutRestructureRequestsInput;
    decidedBy?: Prisma.AppUserCreateNestedOneWithoutRestructureRequestsDecidedInput;
};
export type CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyRestructureRequestCreateManyCounterpartyInputEnvelope = {
    data: Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInput | Prisma.CounterpartyRestructureRequestCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutCounterpartyInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutCounterpartyInput>;
};
export type CounterpartyRestructureRequestUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRestructureRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateManyMutationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type CounterpartyRestructureRequestCreateWithoutObligationInput = {
    id?: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRestructureRequestsInput;
    decidedBy?: Prisma.AppUserCreateNestedOneWithoutRestructureRequestsDecidedInput;
};
export type CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput = {
    id?: string;
    counterpartyId: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestCreateOrConnectWithoutObligationInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput>;
};
export type CounterpartyRestructureRequestCreateManyObligationInputEnvelope = {
    data: Prisma.CounterpartyRestructureRequestCreateManyObligationInput | Prisma.CounterpartyRestructureRequestCreateManyObligationInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRestructureRequestUpsertWithWhereUniqueWithoutObligationInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutObligationInput>;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedCreateWithoutObligationInput>;
};
export type CounterpartyRestructureRequestUpdateWithWhereUniqueWithoutObligationInput = {
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateWithoutObligationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateWithoutObligationInput>;
};
export type CounterpartyRestructureRequestUpdateManyWithWhereWithoutObligationInput = {
    where: Prisma.CounterpartyRestructureRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateManyMutationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationInput>;
};
export type CounterpartyRestructureRequestCreateManyDecidedByInput = {
    id?: string;
    counterpartyId: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestUpdateWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRestructureRequestsNestedInput;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneWithoutRestructureRequestsNestedInput;
};
export type CounterpartyRestructureRequestUncheckedUpdateWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestCreateManyCounterpartyInput = {
    id?: string;
    obligationId?: string | null;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneWithoutRestructureRequestsNestedInput;
    decidedBy?: Prisma.AppUserUpdateOneWithoutRestructureRequestsDecidedNestedInput;
};
export type CounterpartyRestructureRequestUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestCreateManyObligationInput = {
    id?: string;
    counterpartyId: string;
    requestType: $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: number | null;
    reason: string;
    status?: $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: string | null;
    decisionNotes?: string | null;
    decidedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyRestructureRequestUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRestructureRequestsNestedInput;
    decidedBy?: Prisma.AppUserUpdateOneWithoutRestructureRequestsDecidedNestedInput;
};
export type CounterpartyRestructureRequestUncheckedUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestType?: Prisma.EnumCounterpartyRestructureRequestTypeFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestType;
    extensionMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyRestructureRequestStatusFieldUpdateOperationsInput | $Enums.CounterpartyRestructureRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRestructureRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    obligationId?: boolean;
    requestType?: boolean;
    extensionMonths?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decisionNotes?: boolean;
    decidedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRestructureRequest"]>;
export type CounterpartyRestructureRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    obligationId?: boolean;
    requestType?: boolean;
    extensionMonths?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decisionNotes?: boolean;
    decidedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRestructureRequest"]>;
export type CounterpartyRestructureRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    obligationId?: boolean;
    requestType?: boolean;
    extensionMonths?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decisionNotes?: boolean;
    decidedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRestructureRequest"]>;
export type CounterpartyRestructureRequestSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    obligationId?: boolean;
    requestType?: boolean;
    extensionMonths?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decisionNotes?: boolean;
    decidedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type CounterpartyRestructureRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "obligationId" | "requestType" | "extensionMonths" | "reason" | "status" | "decidedByUserId" | "decisionNotes" | "decidedAt" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["counterpartyRestructureRequest"]>;
export type CounterpartyRestructureRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
};
export type CounterpartyRestructureRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
};
export type CounterpartyRestructureRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    obligation?: boolean | Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>;
};
export type $CounterpartyRestructureRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CounterpartyRestructureRequest";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        obligation: Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs> | null;
        decidedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        obligationId: string | null;
        requestType: $Enums.CounterpartyRestructureRequestType;
        extensionMonths: number | null;
        reason: string;
        status: $Enums.CounterpartyRestructureRequestStatus;
        decidedByUserId: string | null;
        decisionNotes: string | null;
        decidedAt: Date | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["counterpartyRestructureRequest"]>;
    composites: {};
};
export type CounterpartyRestructureRequestGetPayload<S extends boolean | null | undefined | CounterpartyRestructureRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload, S>;
export type CounterpartyRestructureRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CounterpartyRestructureRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CounterpartyRestructureRequestCountAggregateInputType | true;
};
export interface CounterpartyRestructureRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CounterpartyRestructureRequest'];
        meta: {
            name: 'CounterpartyRestructureRequest';
        };
    };
    findUnique<T extends CounterpartyRestructureRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CounterpartyRestructureRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CounterpartyRestructureRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CounterpartyRestructureRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CounterpartyRestructureRequestFindManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CounterpartyRestructureRequestCreateArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestCreateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CounterpartyRestructureRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CounterpartyRestructureRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CounterpartyRestructureRequestDeleteArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CounterpartyRestructureRequestUpdateArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CounterpartyRestructureRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRestructureRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CounterpartyRestructureRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CounterpartyRestructureRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CounterpartyRestructureRequestUpsertArgs>(args: Prisma.SelectSubset<T, CounterpartyRestructureRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRestructureRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CounterpartyRestructureRequestCountArgs>(args?: Prisma.Subset<T, CounterpartyRestructureRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CounterpartyRestructureRequestCountAggregateOutputType> : number>;
    aggregate<T extends CounterpartyRestructureRequestAggregateArgs>(args: Prisma.Subset<T, CounterpartyRestructureRequestAggregateArgs>): Prisma.PrismaPromise<GetCounterpartyRestructureRequestAggregateType<T>>;
    groupBy<T extends CounterpartyRestructureRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CounterpartyRestructureRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: CounterpartyRestructureRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CounterpartyRestructureRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterpartyRestructureRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CounterpartyRestructureRequestFieldRefs;
}
export interface Prisma__CounterpartyRestructureRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    obligation<T extends Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRestructureRequest$obligationArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    decidedBy<T extends Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRestructureRequest$decidedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CounterpartyRestructureRequestFieldRefs {
    readonly id: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly obligationId: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly requestType: Prisma.FieldRef<"CounterpartyRestructureRequest", 'CounterpartyRestructureRequestType'>;
    readonly extensionMonths: Prisma.FieldRef<"CounterpartyRestructureRequest", 'Int'>;
    readonly reason: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly status: Prisma.FieldRef<"CounterpartyRestructureRequest", 'CounterpartyRestructureRequestStatus'>;
    readonly decidedByUserId: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly decisionNotes: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly decidedAt: Prisma.FieldRef<"CounterpartyRestructureRequest", 'DateTime'>;
    readonly workflowInstanceId: Prisma.FieldRef<"CounterpartyRestructureRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CounterpartyRestructureRequest", 'DateTime'>;
}
export type CounterpartyRestructureRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
};
export type CounterpartyRestructureRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
};
export type CounterpartyRestructureRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithRelationInput | Prisma.CounterpartyRestructureRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRestructureRequestScalarFieldEnum | Prisma.CounterpartyRestructureRequestScalarFieldEnum[];
};
export type CounterpartyRestructureRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithRelationInput | Prisma.CounterpartyRestructureRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRestructureRequestScalarFieldEnum | Prisma.CounterpartyRestructureRequestScalarFieldEnum[];
};
export type CounterpartyRestructureRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithRelationInput | Prisma.CounterpartyRestructureRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRestructureRequestScalarFieldEnum | Prisma.CounterpartyRestructureRequestScalarFieldEnum[];
};
export type CounterpartyRestructureRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateInput, Prisma.CounterpartyRestructureRequestUncheckedCreateInput>;
};
export type CounterpartyRestructureRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CounterpartyRestructureRequestCreateManyInput | Prisma.CounterpartyRestructureRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRestructureRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    data: Prisma.CounterpartyRestructureRequestCreateManyInput | Prisma.CounterpartyRestructureRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CounterpartyRestructureRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyRestructureRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateInput>;
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
};
export type CounterpartyRestructureRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateManyMutationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    limit?: number;
};
export type CounterpartyRestructureRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateManyMutationInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    limit?: number;
    include?: Prisma.CounterpartyRestructureRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyRestructureRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRestructureRequestCreateInput, Prisma.CounterpartyRestructureRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CounterpartyRestructureRequestUpdateInput, Prisma.CounterpartyRestructureRequestUncheckedUpdateInput>;
};
export type CounterpartyRestructureRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
};
export type CounterpartyRestructureRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    limit?: number;
};
export type CounterpartyRestructureRequest$obligationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRestructureRequest$decidedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type CounterpartyRestructureRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
};
