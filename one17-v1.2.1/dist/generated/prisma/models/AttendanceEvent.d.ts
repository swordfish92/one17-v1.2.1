import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceEventModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceEventPayload>;
export type AggregateAttendanceEvent = {
    _count: AttendanceEventCountAggregateOutputType | null;
    _min: AttendanceEventMinAggregateOutputType | null;
    _max: AttendanceEventMaxAggregateOutputType | null;
};
export type AttendanceEventMinAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceUserRef: string | null;
    employeeId: string | null;
    locationRef: string | null;
    occurredAt: Date | null;
    method: string | null;
    rawRef: string | null;
    isTerminatedAlert: boolean | null;
    createdAt: Date | null;
};
export type AttendanceEventMaxAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceUserRef: string | null;
    employeeId: string | null;
    locationRef: string | null;
    occurredAt: Date | null;
    method: string | null;
    rawRef: string | null;
    isTerminatedAlert: boolean | null;
    createdAt: Date | null;
};
export type AttendanceEventCountAggregateOutputType = {
    id: number;
    providerId: number;
    deviceUserRef: number;
    employeeId: number;
    locationRef: number;
    occurredAt: number;
    method: number;
    rawRef: number;
    isTerminatedAlert: number;
    createdAt: number;
    _all: number;
};
export type AttendanceEventMinAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    locationRef?: true;
    occurredAt?: true;
    method?: true;
    rawRef?: true;
    isTerminatedAlert?: true;
    createdAt?: true;
};
export type AttendanceEventMaxAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    locationRef?: true;
    occurredAt?: true;
    method?: true;
    rawRef?: true;
    isTerminatedAlert?: true;
    createdAt?: true;
};
export type AttendanceEventCountAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    locationRef?: true;
    occurredAt?: true;
    method?: true;
    rawRef?: true;
    isTerminatedAlert?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEventWhereInput;
    orderBy?: Prisma.AttendanceEventOrderByWithRelationInput | Prisma.AttendanceEventOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceEventCountAggregateInputType;
    _min?: AttendanceEventMinAggregateInputType;
    _max?: AttendanceEventMaxAggregateInputType;
};
export type GetAttendanceEventAggregateType<T extends AttendanceEventAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceEvent[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceEvent[P]>;
};
export type AttendanceEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEventWhereInput;
    orderBy?: Prisma.AttendanceEventOrderByWithAggregationInput | Prisma.AttendanceEventOrderByWithAggregationInput[];
    by: Prisma.AttendanceEventScalarFieldEnum[] | Prisma.AttendanceEventScalarFieldEnum;
    having?: Prisma.AttendanceEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceEventCountAggregateInputType | true;
    _min?: AttendanceEventMinAggregateInputType;
    _max?: AttendanceEventMaxAggregateInputType;
};
export type AttendanceEventGroupByOutputType = {
    id: string;
    providerId: string;
    deviceUserRef: string;
    employeeId: string | null;
    locationRef: string | null;
    occurredAt: Date;
    method: string;
    rawRef: string;
    isTerminatedAlert: boolean;
    createdAt: Date;
    _count: AttendanceEventCountAggregateOutputType | null;
    _min: AttendanceEventMinAggregateOutputType | null;
    _max: AttendanceEventMaxAggregateOutputType | null;
};
export type GetAttendanceEventGroupByPayload<T extends AttendanceEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceEventGroupByOutputType[P]>;
}>>;
export type AttendanceEventWhereInput = {
    AND?: Prisma.AttendanceEventWhereInput | Prisma.AttendanceEventWhereInput[];
    OR?: Prisma.AttendanceEventWhereInput[];
    NOT?: Prisma.AttendanceEventWhereInput | Prisma.AttendanceEventWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceEvent"> | string;
    providerId?: Prisma.UuidFilter<"AttendanceEvent"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AttendanceEvent"> | string | null;
    locationRef?: Prisma.StringNullableFilter<"AttendanceEvent"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
    method?: Prisma.StringFilter<"AttendanceEvent"> | string;
    rawRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    isTerminatedAlert?: Prisma.BoolFilter<"AttendanceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
    provider?: Prisma.XOR<Prisma.AttendanceProviderScalarRelationFilter, Prisma.AttendanceProviderWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    exceptionRequests?: Prisma.AttendanceExceptionRequestListRelationFilter;
};
export type AttendanceEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    rawRef?: Prisma.SortOrder;
    isTerminatedAlert?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    provider?: Prisma.AttendanceProviderOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestOrderByRelationAggregateInput;
};
export type AttendanceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerId_rawRef?: Prisma.AttendanceEventProviderIdRawRefCompoundUniqueInput;
    AND?: Prisma.AttendanceEventWhereInput | Prisma.AttendanceEventWhereInput[];
    OR?: Prisma.AttendanceEventWhereInput[];
    NOT?: Prisma.AttendanceEventWhereInput | Prisma.AttendanceEventWhereInput[];
    providerId?: Prisma.UuidFilter<"AttendanceEvent"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AttendanceEvent"> | string | null;
    locationRef?: Prisma.StringNullableFilter<"AttendanceEvent"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
    method?: Prisma.StringFilter<"AttendanceEvent"> | string;
    rawRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    isTerminatedAlert?: Prisma.BoolFilter<"AttendanceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
    provider?: Prisma.XOR<Prisma.AttendanceProviderScalarRelationFilter, Prisma.AttendanceProviderWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    exceptionRequests?: Prisma.AttendanceExceptionRequestListRelationFilter;
}, "id" | "providerId_rawRef">;
export type AttendanceEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    rawRef?: Prisma.SortOrder;
    isTerminatedAlert?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceEventCountOrderByAggregateInput;
    _max?: Prisma.AttendanceEventMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceEventMinOrderByAggregateInput;
};
export type AttendanceEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceEventScalarWhereWithAggregatesInput | Prisma.AttendanceEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceEventScalarWhereWithAggregatesInput | Prisma.AttendanceEventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceEvent"> | string;
    providerId?: Prisma.UuidWithAggregatesFilter<"AttendanceEvent"> | string;
    deviceUserRef?: Prisma.StringWithAggregatesFilter<"AttendanceEvent"> | string;
    employeeId?: Prisma.UuidNullableWithAggregatesFilter<"AttendanceEvent"> | string | null;
    locationRef?: Prisma.StringNullableWithAggregatesFilter<"AttendanceEvent"> | string | null;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string;
    method?: Prisma.StringWithAggregatesFilter<"AttendanceEvent"> | string;
    rawRef?: Prisma.StringWithAggregatesFilter<"AttendanceEvent"> | string;
    isTerminatedAlert?: Prisma.BoolWithAggregatesFilter<"AttendanceEvent"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string;
};
export type AttendanceEventCreateInput = {
    id?: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    provider: Prisma.AttendanceProviderCreateNestedOneWithoutEventsInput;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAttendanceEventsInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestCreateNestedManyWithoutEventInput;
};
export type AttendanceEventUncheckedCreateInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    employeeId?: string | null;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedCreateNestedManyWithoutEventInput;
};
export type AttendanceEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.AttendanceProviderUpdateOneRequiredWithoutEventsNestedInput;
    employee?: Prisma.EmployeeUpdateOneWithoutAttendanceEventsNestedInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventCreateManyInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    employeeId?: string | null;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
};
export type AttendanceEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEventListRelationFilter = {
    every?: Prisma.AttendanceEventWhereInput;
    some?: Prisma.AttendanceEventWhereInput;
    none?: Prisma.AttendanceEventWhereInput;
};
export type AttendanceEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceEventProviderIdRawRefCompoundUniqueInput = {
    providerId: string;
    rawRef: string;
};
export type AttendanceEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    locationRef?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    rawRef?: Prisma.SortOrder;
    isTerminatedAlert?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    locationRef?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    rawRef?: Prisma.SortOrder;
    isTerminatedAlert?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    locationRef?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    rawRef?: Prisma.SortOrder;
    isTerminatedAlert?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceEventNullableScalarRelationFilter = {
    is?: Prisma.AttendanceEventWhereInput | null;
    isNot?: Prisma.AttendanceEventWhereInput | null;
};
export type AttendanceEventCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEventCreateWithoutEmployeeInput[] | Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEventCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
};
export type AttendanceEventUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEventCreateWithoutEmployeeInput[] | Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEventCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
};
export type AttendanceEventUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEventCreateWithoutEmployeeInput[] | Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceEventUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEventUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEventCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    delete?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    update?: Prisma.AttendanceEventUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEventUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceEventUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceEventUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
};
export type AttendanceEventUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEventCreateWithoutEmployeeInput[] | Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEventCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceEventUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEventUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEventCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    delete?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    update?: Prisma.AttendanceEventUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEventUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceEventUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceEventUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
};
export type AttendanceEventCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput> | Prisma.AttendanceEventCreateWithoutProviderInput[] | Prisma.AttendanceEventUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutProviderInput | Prisma.AttendanceEventCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.AttendanceEventCreateManyProviderInputEnvelope;
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
};
export type AttendanceEventUncheckedCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput> | Prisma.AttendanceEventCreateWithoutProviderInput[] | Prisma.AttendanceEventUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutProviderInput | Prisma.AttendanceEventCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.AttendanceEventCreateManyProviderInputEnvelope;
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
};
export type AttendanceEventUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput> | Prisma.AttendanceEventCreateWithoutProviderInput[] | Prisma.AttendanceEventUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutProviderInput | Prisma.AttendanceEventCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.AttendanceEventUpsertWithWhereUniqueWithoutProviderInput | Prisma.AttendanceEventUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.AttendanceEventCreateManyProviderInputEnvelope;
    set?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    delete?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    update?: Prisma.AttendanceEventUpdateWithWhereUniqueWithoutProviderInput | Prisma.AttendanceEventUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.AttendanceEventUpdateManyWithWhereWithoutProviderInput | Prisma.AttendanceEventUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
};
export type AttendanceEventUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput> | Prisma.AttendanceEventCreateWithoutProviderInput[] | Prisma.AttendanceEventUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutProviderInput | Prisma.AttendanceEventCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.AttendanceEventUpsertWithWhereUniqueWithoutProviderInput | Prisma.AttendanceEventUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.AttendanceEventCreateManyProviderInputEnvelope;
    set?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    delete?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    connect?: Prisma.AttendanceEventWhereUniqueInput | Prisma.AttendanceEventWhereUniqueInput[];
    update?: Prisma.AttendanceEventUpdateWithWhereUniqueWithoutProviderInput | Prisma.AttendanceEventUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.AttendanceEventUpdateManyWithWhereWithoutProviderInput | Prisma.AttendanceEventUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
};
export type AttendanceEventCreateNestedOneWithoutExceptionRequestsInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedCreateWithoutExceptionRequestsInput>;
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutExceptionRequestsInput;
    connect?: Prisma.AttendanceEventWhereUniqueInput;
};
export type AttendanceEventUpdateOneWithoutExceptionRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEventCreateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedCreateWithoutExceptionRequestsInput>;
    connectOrCreate?: Prisma.AttendanceEventCreateOrConnectWithoutExceptionRequestsInput;
    upsert?: Prisma.AttendanceEventUpsertWithoutExceptionRequestsInput;
    disconnect?: Prisma.AttendanceEventWhereInput | boolean;
    delete?: Prisma.AttendanceEventWhereInput | boolean;
    connect?: Prisma.AttendanceEventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceEventUpdateToOneWithWhereWithoutExceptionRequestsInput, Prisma.AttendanceEventUpdateWithoutExceptionRequestsInput>, Prisma.AttendanceEventUncheckedUpdateWithoutExceptionRequestsInput>;
};
export type AttendanceEventCreateWithoutEmployeeInput = {
    id?: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    provider: Prisma.AttendanceProviderCreateNestedOneWithoutEventsInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestCreateNestedManyWithoutEventInput;
};
export type AttendanceEventUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedCreateNestedManyWithoutEventInput;
};
export type AttendanceEventCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceEventCreateManyEmployeeInputEnvelope = {
    data: Prisma.AttendanceEventCreateManyEmployeeInput | Prisma.AttendanceEventCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEventUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceEventUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutEmployeeInput, Prisma.AttendanceEventUncheckedUpdateWithoutEmployeeInput>;
};
export type AttendanceEventUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AttendanceEventScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateManyMutationInput, Prisma.AttendanceEventUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AttendanceEventScalarWhereInput = {
    AND?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
    OR?: Prisma.AttendanceEventScalarWhereInput[];
    NOT?: Prisma.AttendanceEventScalarWhereInput | Prisma.AttendanceEventScalarWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceEvent"> | string;
    providerId?: Prisma.UuidFilter<"AttendanceEvent"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AttendanceEvent"> | string | null;
    locationRef?: Prisma.StringNullableFilter<"AttendanceEvent"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
    method?: Prisma.StringFilter<"AttendanceEvent"> | string;
    rawRef?: Prisma.StringFilter<"AttendanceEvent"> | string;
    isTerminatedAlert?: Prisma.BoolFilter<"AttendanceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEvent"> | Date | string;
};
export type AttendanceEventCreateWithoutProviderInput = {
    id?: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAttendanceEventsInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestCreateNestedManyWithoutEventInput;
};
export type AttendanceEventUncheckedCreateWithoutProviderInput = {
    id?: string;
    deviceUserRef: string;
    employeeId?: string | null;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedCreateNestedManyWithoutEventInput;
};
export type AttendanceEventCreateOrConnectWithoutProviderInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput>;
};
export type AttendanceEventCreateManyProviderInputEnvelope = {
    data: Prisma.AttendanceEventCreateManyProviderInput | Prisma.AttendanceEventCreateManyProviderInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEventUpsertWithWhereUniqueWithoutProviderInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutProviderInput, Prisma.AttendanceEventUncheckedUpdateWithoutProviderInput>;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutProviderInput, Prisma.AttendanceEventUncheckedCreateWithoutProviderInput>;
};
export type AttendanceEventUpdateWithWhereUniqueWithoutProviderInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutProviderInput, Prisma.AttendanceEventUncheckedUpdateWithoutProviderInput>;
};
export type AttendanceEventUpdateManyWithWhereWithoutProviderInput = {
    where: Prisma.AttendanceEventScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateManyMutationInput, Prisma.AttendanceEventUncheckedUpdateManyWithoutProviderInput>;
};
export type AttendanceEventCreateWithoutExceptionRequestsInput = {
    id?: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
    provider: Prisma.AttendanceProviderCreateNestedOneWithoutEventsInput;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAttendanceEventsInput;
};
export type AttendanceEventUncheckedCreateWithoutExceptionRequestsInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    employeeId?: string | null;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
};
export type AttendanceEventCreateOrConnectWithoutExceptionRequestsInput = {
    where: Prisma.AttendanceEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedCreateWithoutExceptionRequestsInput>;
};
export type AttendanceEventUpsertWithoutExceptionRequestsInput = {
    update: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedUpdateWithoutExceptionRequestsInput>;
    create: Prisma.XOR<Prisma.AttendanceEventCreateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedCreateWithoutExceptionRequestsInput>;
    where?: Prisma.AttendanceEventWhereInput;
};
export type AttendanceEventUpdateToOneWithWhereWithoutExceptionRequestsInput = {
    where?: Prisma.AttendanceEventWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateWithoutExceptionRequestsInput, Prisma.AttendanceEventUncheckedUpdateWithoutExceptionRequestsInput>;
};
export type AttendanceEventUpdateWithoutExceptionRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.AttendanceProviderUpdateOneRequiredWithoutEventsNestedInput;
    employee?: Prisma.EmployeeUpdateOneWithoutAttendanceEventsNestedInput;
};
export type AttendanceEventUncheckedUpdateWithoutExceptionRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEventCreateManyEmployeeInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
};
export type AttendanceEventUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.AttendanceProviderUpdateOneRequiredWithoutEventsNestedInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEventCreateManyProviderInput = {
    id?: string;
    deviceUserRef: string;
    employeeId?: string | null;
    locationRef?: string | null;
    occurredAt: Date | string;
    method: string;
    rawRef: string;
    isTerminatedAlert?: boolean;
    createdAt?: Date | string;
};
export type AttendanceEventUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutAttendanceEventsNestedInput;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventUncheckedUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exceptionRequests?: Prisma.AttendanceExceptionRequestUncheckedUpdateManyWithoutEventNestedInput;
};
export type AttendanceEventUncheckedUpdateManyWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    rawRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isTerminatedAlert?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEventCountOutputType = {
    exceptionRequests: number;
};
export type AttendanceEventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exceptionRequests?: boolean | AttendanceEventCountOutputTypeCountExceptionRequestsArgs;
};
export type AttendanceEventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventCountOutputTypeSelect<ExtArgs> | null;
};
export type AttendanceEventCountOutputTypeCountExceptionRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceExceptionRequestWhereInput;
};
export type AttendanceEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    locationRef?: boolean;
    occurredAt?: boolean;
    method?: boolean;
    rawRef?: boolean;
    isTerminatedAlert?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
    exceptionRequests?: boolean | Prisma.AttendanceEvent$exceptionRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceEventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEvent"]>;
export type AttendanceEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    locationRef?: boolean;
    occurredAt?: boolean;
    method?: boolean;
    rawRef?: boolean;
    isTerminatedAlert?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEvent"]>;
export type AttendanceEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    locationRef?: boolean;
    occurredAt?: boolean;
    method?: boolean;
    rawRef?: boolean;
    isTerminatedAlert?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEvent"]>;
export type AttendanceEventSelectScalar = {
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    locationRef?: boolean;
    occurredAt?: boolean;
    method?: boolean;
    rawRef?: boolean;
    isTerminatedAlert?: boolean;
    createdAt?: boolean;
};
export type AttendanceEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerId" | "deviceUserRef" | "employeeId" | "locationRef" | "occurredAt" | "method" | "rawRef" | "isTerminatedAlert" | "createdAt", ExtArgs["result"]["attendanceEvent"]>;
export type AttendanceEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
    exceptionRequests?: boolean | Prisma.AttendanceEvent$exceptionRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceEventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendanceEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
};
export type AttendanceEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AttendanceEvent$employeeArgs<ExtArgs>;
};
export type $AttendanceEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceEvent";
    objects: {
        provider: Prisma.$AttendanceProviderPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs> | null;
        exceptionRequests: Prisma.$AttendanceExceptionRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerId: string;
        deviceUserRef: string;
        employeeId: string | null;
        locationRef: string | null;
        occurredAt: Date;
        method: string;
        rawRef: string;
        isTerminatedAlert: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceEvent"]>;
    composites: {};
};
export type AttendanceEventGetPayload<S extends boolean | null | undefined | AttendanceEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload, S>;
export type AttendanceEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceEventCountAggregateInputType | true;
};
export interface AttendanceEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceEvent'];
        meta: {
            name: 'AttendanceEvent';
        };
    };
    findUnique<T extends AttendanceEventFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceEventFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceEventFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceEventCreateArgs>(args: Prisma.SelectSubset<T, AttendanceEventCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceEventCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceEventDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceEventDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceEventUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceEventUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceEventUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceEventUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceEventUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceEventCountArgs>(args?: Prisma.Subset<T, AttendanceEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceEventCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceEventAggregateArgs>(args: Prisma.Subset<T, AttendanceEventAggregateArgs>): Prisma.PrismaPromise<GetAttendanceEventAggregateType<T>>;
    groupBy<T extends AttendanceEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceEventGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceEventFieldRefs;
}
export interface Prisma__AttendanceEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    provider<T extends Prisma.AttendanceProviderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceProviderDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceProviderClient<runtime.Types.Result.GetResult<Prisma.$AttendanceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.AttendanceEvent$employeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceEvent$employeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    exceptionRequests<T extends Prisma.AttendanceEvent$exceptionRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceEvent$exceptionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceEventFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly providerId: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly deviceUserRef: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly locationRef: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly occurredAt: Prisma.FieldRef<"AttendanceEvent", 'DateTime'>;
    readonly method: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly rawRef: Prisma.FieldRef<"AttendanceEvent", 'String'>;
    readonly isTerminatedAlert: Prisma.FieldRef<"AttendanceEvent", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceEvent", 'DateTime'>;
}
export type AttendanceEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where: Prisma.AttendanceEventWhereUniqueInput;
};
export type AttendanceEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where: Prisma.AttendanceEventWhereUniqueInput;
};
export type AttendanceEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEventWhereInput;
    orderBy?: Prisma.AttendanceEventOrderByWithRelationInput | Prisma.AttendanceEventOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEventScalarFieldEnum | Prisma.AttendanceEventScalarFieldEnum[];
};
export type AttendanceEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEventWhereInput;
    orderBy?: Prisma.AttendanceEventOrderByWithRelationInput | Prisma.AttendanceEventOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEventScalarFieldEnum | Prisma.AttendanceEventScalarFieldEnum[];
};
export type AttendanceEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEventWhereInput;
    orderBy?: Prisma.AttendanceEventOrderByWithRelationInput | Prisma.AttendanceEventOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEventScalarFieldEnum | Prisma.AttendanceEventScalarFieldEnum[];
};
export type AttendanceEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEventCreateInput, Prisma.AttendanceEventUncheckedCreateInput>;
};
export type AttendanceEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceEventCreateManyInput | Prisma.AttendanceEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    data: Prisma.AttendanceEventCreateManyInput | Prisma.AttendanceEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateInput, Prisma.AttendanceEventUncheckedUpdateInput>;
    where: Prisma.AttendanceEventWhereUniqueInput;
};
export type AttendanceEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceEventUpdateManyMutationInput, Prisma.AttendanceEventUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceEventWhereInput;
    limit?: number;
};
export type AttendanceEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEventUpdateManyMutationInput, Prisma.AttendanceEventUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceEventWhereInput;
    limit?: number;
    include?: Prisma.AttendanceEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where: Prisma.AttendanceEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEventCreateInput, Prisma.AttendanceEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceEventUpdateInput, Prisma.AttendanceEventUncheckedUpdateInput>;
};
export type AttendanceEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where: Prisma.AttendanceEventWhereUniqueInput;
};
export type AttendanceEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEventWhereInput;
    limit?: number;
};
export type AttendanceEvent$employeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type AttendanceEvent$exceptionRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    orderBy?: Prisma.AttendanceExceptionRequestOrderByWithRelationInput | Prisma.AttendanceExceptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceExceptionRequestScalarFieldEnum | Prisma.AttendanceExceptionRequestScalarFieldEnum[];
};
export type AttendanceEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
};
