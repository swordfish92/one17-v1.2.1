import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceExceptionRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceExceptionRequestPayload>;
export type AggregateAttendanceExceptionRequest = {
    _count: AttendanceExceptionRequestCountAggregateOutputType | null;
    _min: AttendanceExceptionRequestMinAggregateOutputType | null;
    _max: AttendanceExceptionRequestMaxAggregateOutputType | null;
};
export type AttendanceExceptionRequestMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    attendanceEventId: string | null;
    disputedDate: Date | null;
    reason: string | null;
    status: $Enums.ExceptionRequestStatus | null;
    decidedByUserId: string | null;
    decidedAt: Date | null;
    decisionNotes: string | null;
    createdAt: Date | null;
};
export type AttendanceExceptionRequestMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    attendanceEventId: string | null;
    disputedDate: Date | null;
    reason: string | null;
    status: $Enums.ExceptionRequestStatus | null;
    decidedByUserId: string | null;
    decidedAt: Date | null;
    decisionNotes: string | null;
    createdAt: Date | null;
};
export type AttendanceExceptionRequestCountAggregateOutputType = {
    id: number;
    employeeId: number;
    attendanceEventId: number;
    disputedDate: number;
    reason: number;
    status: number;
    decidedByUserId: number;
    decidedAt: number;
    decisionNotes: number;
    createdAt: number;
    _all: number;
};
export type AttendanceExceptionRequestMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    attendanceEventId?: true;
    disputedDate?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decidedAt?: true;
    decisionNotes?: true;
    createdAt?: true;
};
export type AttendanceExceptionRequestMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    attendanceEventId?: true;
    disputedDate?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decidedAt?: true;
    decisionNotes?: true;
    createdAt?: true;
};
export type AttendanceExceptionRequestCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    attendanceEventId?: true;
    disputedDate?: true;
    reason?: true;
    status?: true;
    decidedByUserId?: true;
    decidedAt?: true;
    decisionNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceExceptionRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    orderBy?: Prisma.AttendanceExceptionRequestOrderByWithRelationInput | Prisma.AttendanceExceptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceExceptionRequestCountAggregateInputType;
    _min?: AttendanceExceptionRequestMinAggregateInputType;
    _max?: AttendanceExceptionRequestMaxAggregateInputType;
};
export type GetAttendanceExceptionRequestAggregateType<T extends AttendanceExceptionRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceExceptionRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceExceptionRequest[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceExceptionRequest[P]>;
};
export type AttendanceExceptionRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    orderBy?: Prisma.AttendanceExceptionRequestOrderByWithAggregationInput | Prisma.AttendanceExceptionRequestOrderByWithAggregationInput[];
    by: Prisma.AttendanceExceptionRequestScalarFieldEnum[] | Prisma.AttendanceExceptionRequestScalarFieldEnum;
    having?: Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceExceptionRequestCountAggregateInputType | true;
    _min?: AttendanceExceptionRequestMinAggregateInputType;
    _max?: AttendanceExceptionRequestMaxAggregateInputType;
};
export type AttendanceExceptionRequestGroupByOutputType = {
    id: string;
    employeeId: string;
    attendanceEventId: string | null;
    disputedDate: Date;
    reason: string;
    status: $Enums.ExceptionRequestStatus;
    decidedByUserId: string | null;
    decidedAt: Date | null;
    decisionNotes: string | null;
    createdAt: Date;
    _count: AttendanceExceptionRequestCountAggregateOutputType | null;
    _min: AttendanceExceptionRequestMinAggregateOutputType | null;
    _max: AttendanceExceptionRequestMaxAggregateOutputType | null;
};
export type GetAttendanceExceptionRequestGroupByPayload<T extends AttendanceExceptionRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceExceptionRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceExceptionRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceExceptionRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceExceptionRequestGroupByOutputType[P]>;
}>>;
export type AttendanceExceptionRequestWhereInput = {
    AND?: Prisma.AttendanceExceptionRequestWhereInput | Prisma.AttendanceExceptionRequestWhereInput[];
    OR?: Prisma.AttendanceExceptionRequestWhereInput[];
    NOT?: Prisma.AttendanceExceptionRequestWhereInput | Prisma.AttendanceExceptionRequestWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceExceptionRequest"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceExceptionRequest"> | string;
    attendanceEventId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    disputedDate?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
    reason?: Prisma.StringFilter<"AttendanceExceptionRequest"> | string;
    status?: Prisma.EnumExceptionRequestStatusFilter<"AttendanceExceptionRequest"> | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"AttendanceExceptionRequest"> | Date | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"AttendanceExceptionRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    event?: Prisma.XOR<Prisma.AttendanceEventNullableScalarRelationFilter, Prisma.AttendanceEventWhereInput> | null;
};
export type AttendanceExceptionRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceEventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disputedDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    event?: Prisma.AttendanceEventOrderByWithRelationInput;
};
export type AttendanceExceptionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttendanceExceptionRequestWhereInput | Prisma.AttendanceExceptionRequestWhereInput[];
    OR?: Prisma.AttendanceExceptionRequestWhereInput[];
    NOT?: Prisma.AttendanceExceptionRequestWhereInput | Prisma.AttendanceExceptionRequestWhereInput[];
    employeeId?: Prisma.UuidFilter<"AttendanceExceptionRequest"> | string;
    attendanceEventId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    disputedDate?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
    reason?: Prisma.StringFilter<"AttendanceExceptionRequest"> | string;
    status?: Prisma.EnumExceptionRequestStatusFilter<"AttendanceExceptionRequest"> | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"AttendanceExceptionRequest"> | Date | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"AttendanceExceptionRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    event?: Prisma.XOR<Prisma.AttendanceEventNullableScalarRelationFilter, Prisma.AttendanceEventWhereInput> | null;
}, "id">;
export type AttendanceExceptionRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceEventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disputedDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceExceptionRequestCountOrderByAggregateInput;
    _max?: Prisma.AttendanceExceptionRequestMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceExceptionRequestMinOrderByAggregateInput;
};
export type AttendanceExceptionRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput | Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput | Prisma.AttendanceExceptionRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceExceptionRequest"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"AttendanceExceptionRequest"> | string;
    attendanceEventId?: Prisma.UuidNullableWithAggregatesFilter<"AttendanceExceptionRequest"> | string | null;
    disputedDate?: Prisma.DateTimeWithAggregatesFilter<"AttendanceExceptionRequest"> | Date | string;
    reason?: Prisma.StringWithAggregatesFilter<"AttendanceExceptionRequest"> | string;
    status?: Prisma.EnumExceptionRequestStatusWithAggregatesFilter<"AttendanceExceptionRequest"> | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AttendanceExceptionRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceExceptionRequest"> | Date | string | null;
    decisionNotes?: Prisma.StringNullableWithAggregatesFilter<"AttendanceExceptionRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceExceptionRequest"> | Date | string;
};
export type AttendanceExceptionRequestCreateInput = {
    id?: string;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceExceptionRequestsInput;
    event?: Prisma.AttendanceEventCreateNestedOneWithoutExceptionRequestsInput;
};
export type AttendanceExceptionRequestUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    attendanceEventId?: string | null;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceExceptionRequestsNestedInput;
    event?: Prisma.AttendanceEventUpdateOneWithoutExceptionRequestsNestedInput;
};
export type AttendanceExceptionRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestCreateManyInput = {
    id?: string;
    employeeId: string;
    attendanceEventId?: string | null;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestListRelationFilter = {
    every?: Prisma.AttendanceExceptionRequestWhereInput;
    some?: Prisma.AttendanceExceptionRequestWhereInput;
    none?: Prisma.AttendanceExceptionRequestWhereInput;
};
export type AttendanceExceptionRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceExceptionRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceEventId?: Prisma.SortOrder;
    disputedDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceExceptionRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceEventId?: Prisma.SortOrder;
    disputedDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceExceptionRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceEventId?: Prisma.SortOrder;
    disputedDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    decisionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceExceptionRequestCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
};
export type AttendanceExceptionRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
};
export type AttendanceExceptionRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    disconnect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    delete?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    update?: Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
};
export type AttendanceExceptionRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    disconnect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    delete?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    update?: Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
};
export type AttendanceExceptionRequestCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput> | Prisma.AttendanceExceptionRequestCreateWithoutEventInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEventInputEnvelope;
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
};
export type AttendanceExceptionRequestUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput> | Prisma.AttendanceExceptionRequestCreateWithoutEventInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEventInputEnvelope;
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
};
export type AttendanceExceptionRequestUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput> | Prisma.AttendanceExceptionRequestCreateWithoutEventInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEventInputEnvelope;
    set?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    disconnect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    delete?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    update?: Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEventInput | Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
};
export type AttendanceExceptionRequestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput> | Prisma.AttendanceExceptionRequestCreateWithoutEventInput[] | Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput | Prisma.AttendanceExceptionRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.AttendanceExceptionRequestCreateManyEventInputEnvelope;
    set?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    disconnect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    delete?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    connect?: Prisma.AttendanceExceptionRequestWhereUniqueInput | Prisma.AttendanceExceptionRequestWhereUniqueInput[];
    update?: Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEventInput | Prisma.AttendanceExceptionRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
};
export type EnumExceptionRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExceptionRequestStatus;
};
export type AttendanceExceptionRequestCreateWithoutEmployeeInput = {
    id?: string;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
    event?: Prisma.AttendanceEventCreateNestedOneWithoutExceptionRequestsInput;
};
export type AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    attendanceEventId?: string | null;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceExceptionRequestCreateManyEmployeeInputEnvelope = {
    data: Prisma.AttendanceExceptionRequestCreateManyEmployeeInput | Prisma.AttendanceExceptionRequestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateWithoutEmployeeInput, Prisma.AttendanceExceptionRequestUncheckedUpdateWithoutEmployeeInput>;
};
export type AttendanceExceptionRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AttendanceExceptionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateManyMutationInput, Prisma.AttendanceExceptionRequestUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AttendanceExceptionRequestScalarWhereInput = {
    AND?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
    OR?: Prisma.AttendanceExceptionRequestScalarWhereInput[];
    NOT?: Prisma.AttendanceExceptionRequestScalarWhereInput | Prisma.AttendanceExceptionRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceExceptionRequest"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceExceptionRequest"> | string;
    attendanceEventId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    disputedDate?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
    reason?: Prisma.StringFilter<"AttendanceExceptionRequest"> | string;
    status?: Prisma.EnumExceptionRequestStatusFilter<"AttendanceExceptionRequest"> | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.UuidNullableFilter<"AttendanceExceptionRequest"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"AttendanceExceptionRequest"> | Date | string | null;
    decisionNotes?: Prisma.StringNullableFilter<"AttendanceExceptionRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceExceptionRequest"> | Date | string;
};
export type AttendanceExceptionRequestCreateWithoutEventInput = {
    id?: string;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceExceptionRequestsInput;
};
export type AttendanceExceptionRequestUncheckedCreateWithoutEventInput = {
    id?: string;
    employeeId: string;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestCreateOrConnectWithoutEventInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput>;
};
export type AttendanceExceptionRequestCreateManyEventInputEnvelope = {
    data: Prisma.AttendanceExceptionRequestCreateManyEventInput | Prisma.AttendanceExceptionRequestCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type AttendanceExceptionRequestUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedCreateWithoutEventInput>;
};
export type AttendanceExceptionRequestUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateWithoutEventInput, Prisma.AttendanceExceptionRequestUncheckedUpdateWithoutEventInput>;
};
export type AttendanceExceptionRequestUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.AttendanceExceptionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateManyMutationInput, Prisma.AttendanceExceptionRequestUncheckedUpdateManyWithoutEventInput>;
};
export type AttendanceExceptionRequestCreateManyEmployeeInput = {
    id?: string;
    attendanceEventId?: string | null;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.AttendanceEventUpdateOneWithoutExceptionRequestsNestedInput;
};
export type AttendanceExceptionRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestCreateManyEventInput = {
    id?: string;
    employeeId: string;
    disputedDate: Date | string;
    reason: string;
    status?: $Enums.ExceptionRequestStatus;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
    decisionNotes?: string | null;
    createdAt?: Date | string;
};
export type AttendanceExceptionRequestUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceExceptionRequestsNestedInput;
};
export type AttendanceExceptionRequestUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    disputedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumExceptionRequestStatusFieldUpdateOperationsInput | $Enums.ExceptionRequestStatus;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceExceptionRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    attendanceEventId?: boolean;
    disputedDate?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    decisionNotes?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceExceptionRequest"]>;
export type AttendanceExceptionRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    attendanceEventId?: boolean;
    disputedDate?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    decisionNotes?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceExceptionRequest"]>;
export type AttendanceExceptionRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    attendanceEventId?: boolean;
    disputedDate?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    decisionNotes?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceExceptionRequest"]>;
export type AttendanceExceptionRequestSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    attendanceEventId?: boolean;
    disputedDate?: boolean;
    reason?: boolean;
    status?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    decisionNotes?: boolean;
    createdAt?: boolean;
};
export type AttendanceExceptionRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "attendanceEventId" | "disputedDate" | "reason" | "status" | "decidedByUserId" | "decidedAt" | "decisionNotes" | "createdAt", ExtArgs["result"]["attendanceExceptionRequest"]>;
export type AttendanceExceptionRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
};
export type AttendanceExceptionRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
};
export type AttendanceExceptionRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>;
};
export type $AttendanceExceptionRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceExceptionRequest";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        event: Prisma.$AttendanceEventPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        attendanceEventId: string | null;
        disputedDate: Date;
        reason: string;
        status: $Enums.ExceptionRequestStatus;
        decidedByUserId: string | null;
        decidedAt: Date | null;
        decisionNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceExceptionRequest"]>;
    composites: {};
};
export type AttendanceExceptionRequestGetPayload<S extends boolean | null | undefined | AttendanceExceptionRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload, S>;
export type AttendanceExceptionRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceExceptionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceExceptionRequestCountAggregateInputType | true;
};
export interface AttendanceExceptionRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceExceptionRequest'];
        meta: {
            name: 'AttendanceExceptionRequest';
        };
    };
    findUnique<T extends AttendanceExceptionRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceExceptionRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceExceptionRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceExceptionRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceExceptionRequestFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceExceptionRequestCreateArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceExceptionRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceExceptionRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceExceptionRequestDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceExceptionRequestUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceExceptionRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceExceptionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceExceptionRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceExceptionRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceExceptionRequestUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceExceptionRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceExceptionRequestClient<runtime.Types.Result.GetResult<Prisma.$AttendanceExceptionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceExceptionRequestCountArgs>(args?: Prisma.Subset<T, AttendanceExceptionRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceExceptionRequestCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceExceptionRequestAggregateArgs>(args: Prisma.Subset<T, AttendanceExceptionRequestAggregateArgs>): Prisma.PrismaPromise<GetAttendanceExceptionRequestAggregateType<T>>;
    groupBy<T extends AttendanceExceptionRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceExceptionRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceExceptionRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceExceptionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceExceptionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceExceptionRequestFieldRefs;
}
export interface Prisma__AttendanceExceptionRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceExceptionRequest$eventArgs<ExtArgs>>): Prisma.Prisma__AttendanceEventClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceExceptionRequestFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly attendanceEventId: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly disputedDate: Prisma.FieldRef<"AttendanceExceptionRequest", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly status: Prisma.FieldRef<"AttendanceExceptionRequest", 'ExceptionRequestStatus'>;
    readonly decidedByUserId: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly decidedAt: Prisma.FieldRef<"AttendanceExceptionRequest", 'DateTime'>;
    readonly decisionNotes: Prisma.FieldRef<"AttendanceExceptionRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceExceptionRequest", 'DateTime'>;
}
export type AttendanceExceptionRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
};
export type AttendanceExceptionRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
};
export type AttendanceExceptionRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceExceptionRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceExceptionRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceExceptionRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateInput, Prisma.AttendanceExceptionRequestUncheckedCreateInput>;
};
export type AttendanceExceptionRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceExceptionRequestCreateManyInput | Prisma.AttendanceExceptionRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceExceptionRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    data: Prisma.AttendanceExceptionRequestCreateManyInput | Prisma.AttendanceExceptionRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceExceptionRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceExceptionRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateInput, Prisma.AttendanceExceptionRequestUncheckedUpdateInput>;
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
};
export type AttendanceExceptionRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateManyMutationInput, Prisma.AttendanceExceptionRequestUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    limit?: number;
};
export type AttendanceExceptionRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateManyMutationInput, Prisma.AttendanceExceptionRequestUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    limit?: number;
    include?: Prisma.AttendanceExceptionRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceExceptionRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceExceptionRequestCreateInput, Prisma.AttendanceExceptionRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceExceptionRequestUpdateInput, Prisma.AttendanceExceptionRequestUncheckedUpdateInput>;
};
export type AttendanceExceptionRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
    where: Prisma.AttendanceExceptionRequestWhereUniqueInput;
};
export type AttendanceExceptionRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceExceptionRequestWhereInput;
    limit?: number;
};
export type AttendanceExceptionRequest$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEventSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEventOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEventInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEventWhereInput;
};
export type AttendanceExceptionRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceExceptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceExceptionRequestOmit<ExtArgs> | null;
    include?: Prisma.AttendanceExceptionRequestInclude<ExtArgs> | null;
};
