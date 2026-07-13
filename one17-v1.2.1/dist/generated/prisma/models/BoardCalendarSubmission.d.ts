import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardCalendarSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardCalendarSubmissionPayload>;
export type AggregateBoardCalendarSubmission = {
    _count: BoardCalendarSubmissionCountAggregateOutputType | null;
    _min: BoardCalendarSubmissionMinAggregateOutputType | null;
    _max: BoardCalendarSubmissionMaxAggregateOutputType | null;
};
export type BoardCalendarSubmissionMinAggregateOutputType = {
    id: string | null;
    calendarEventId: string | null;
    title: string | null;
    fileReference: string | null;
    submittedByUserId: string | null;
    submittedAt: Date | null;
    status: $Enums.BoardCalendarSubmissionStatus | null;
    receivedByUserId: string | null;
    receivedAt: Date | null;
    completenessNote: string | null;
};
export type BoardCalendarSubmissionMaxAggregateOutputType = {
    id: string | null;
    calendarEventId: string | null;
    title: string | null;
    fileReference: string | null;
    submittedByUserId: string | null;
    submittedAt: Date | null;
    status: $Enums.BoardCalendarSubmissionStatus | null;
    receivedByUserId: string | null;
    receivedAt: Date | null;
    completenessNote: string | null;
};
export type BoardCalendarSubmissionCountAggregateOutputType = {
    id: number;
    calendarEventId: number;
    title: number;
    fileReference: number;
    submittedByUserId: number;
    submittedAt: number;
    status: number;
    receivedByUserId: number;
    receivedAt: number;
    completenessNote: number;
    _all: number;
};
export type BoardCalendarSubmissionMinAggregateInputType = {
    id?: true;
    calendarEventId?: true;
    title?: true;
    fileReference?: true;
    submittedByUserId?: true;
    submittedAt?: true;
    status?: true;
    receivedByUserId?: true;
    receivedAt?: true;
    completenessNote?: true;
};
export type BoardCalendarSubmissionMaxAggregateInputType = {
    id?: true;
    calendarEventId?: true;
    title?: true;
    fileReference?: true;
    submittedByUserId?: true;
    submittedAt?: true;
    status?: true;
    receivedByUserId?: true;
    receivedAt?: true;
    completenessNote?: true;
};
export type BoardCalendarSubmissionCountAggregateInputType = {
    id?: true;
    calendarEventId?: true;
    title?: true;
    fileReference?: true;
    submittedByUserId?: true;
    submittedAt?: true;
    status?: true;
    receivedByUserId?: true;
    receivedAt?: true;
    completenessNote?: true;
    _all?: true;
};
export type BoardCalendarSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    orderBy?: Prisma.BoardCalendarSubmissionOrderByWithRelationInput | Prisma.BoardCalendarSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardCalendarSubmissionCountAggregateInputType;
    _min?: BoardCalendarSubmissionMinAggregateInputType;
    _max?: BoardCalendarSubmissionMaxAggregateInputType;
};
export type GetBoardCalendarSubmissionAggregateType<T extends BoardCalendarSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardCalendarSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardCalendarSubmission[P]> : Prisma.GetScalarType<T[P], AggregateBoardCalendarSubmission[P]>;
};
export type BoardCalendarSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    orderBy?: Prisma.BoardCalendarSubmissionOrderByWithAggregationInput | Prisma.BoardCalendarSubmissionOrderByWithAggregationInput[];
    by: Prisma.BoardCalendarSubmissionScalarFieldEnum[] | Prisma.BoardCalendarSubmissionScalarFieldEnum;
    having?: Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCalendarSubmissionCountAggregateInputType | true;
    _min?: BoardCalendarSubmissionMinAggregateInputType;
    _max?: BoardCalendarSubmissionMaxAggregateInputType;
};
export type BoardCalendarSubmissionGroupByOutputType = {
    id: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt: Date;
    status: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId: string | null;
    receivedAt: Date | null;
    completenessNote: string | null;
    _count: BoardCalendarSubmissionCountAggregateOutputType | null;
    _min: BoardCalendarSubmissionMinAggregateOutputType | null;
    _max: BoardCalendarSubmissionMaxAggregateOutputType | null;
};
export type GetBoardCalendarSubmissionGroupByPayload<T extends BoardCalendarSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardCalendarSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardCalendarSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardCalendarSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardCalendarSubmissionGroupByOutputType[P]>;
}>>;
export type BoardCalendarSubmissionWhereInput = {
    AND?: Prisma.BoardCalendarSubmissionWhereInput | Prisma.BoardCalendarSubmissionWhereInput[];
    OR?: Prisma.BoardCalendarSubmissionWhereInput[];
    NOT?: Prisma.BoardCalendarSubmissionWhereInput | Prisma.BoardCalendarSubmissionWhereInput[];
    id?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    calendarEventId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    title?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    fileReference?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    submittedByUserId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    submittedAt?: Prisma.DateTimeFilter<"BoardCalendarSubmission"> | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFilter<"BoardCalendarSubmission"> | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.UuidNullableFilter<"BoardCalendarSubmission"> | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarSubmission"> | Date | string | null;
    completenessNote?: Prisma.StringNullableFilter<"BoardCalendarSubmission"> | string | null;
    calendarEvent?: Prisma.XOR<Prisma.BoardCalendarEventScalarRelationFilter, Prisma.BoardCalendarEventWhereInput>;
    submittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    receivedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type BoardCalendarSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    calendarEventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    submittedByUserId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completenessNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    calendarEvent?: Prisma.BoardCalendarEventOrderByWithRelationInput;
    submittedBy?: Prisma.AppUserOrderByWithRelationInput;
    receivedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type BoardCalendarSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BoardCalendarSubmissionWhereInput | Prisma.BoardCalendarSubmissionWhereInput[];
    OR?: Prisma.BoardCalendarSubmissionWhereInput[];
    NOT?: Prisma.BoardCalendarSubmissionWhereInput | Prisma.BoardCalendarSubmissionWhereInput[];
    calendarEventId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    title?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    fileReference?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    submittedByUserId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    submittedAt?: Prisma.DateTimeFilter<"BoardCalendarSubmission"> | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFilter<"BoardCalendarSubmission"> | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.UuidNullableFilter<"BoardCalendarSubmission"> | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarSubmission"> | Date | string | null;
    completenessNote?: Prisma.StringNullableFilter<"BoardCalendarSubmission"> | string | null;
    calendarEvent?: Prisma.XOR<Prisma.BoardCalendarEventScalarRelationFilter, Prisma.BoardCalendarEventWhereInput>;
    submittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    receivedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type BoardCalendarSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    calendarEventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    submittedByUserId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completenessNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BoardCalendarSubmissionCountOrderByAggregateInput;
    _max?: Prisma.BoardCalendarSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.BoardCalendarSubmissionMinOrderByAggregateInput;
};
export type BoardCalendarSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput | Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput | Prisma.BoardCalendarSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BoardCalendarSubmission"> | string;
    calendarEventId?: Prisma.UuidWithAggregatesFilter<"BoardCalendarSubmission"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BoardCalendarSubmission"> | string;
    fileReference?: Prisma.StringWithAggregatesFilter<"BoardCalendarSubmission"> | string;
    submittedByUserId?: Prisma.UuidWithAggregatesFilter<"BoardCalendarSubmission"> | string;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"BoardCalendarSubmission"> | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusWithAggregatesFilter<"BoardCalendarSubmission"> | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BoardCalendarSubmission"> | string | null;
    receivedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardCalendarSubmission"> | Date | string | null;
    completenessNote?: Prisma.StringNullableWithAggregatesFilter<"BoardCalendarSubmission"> | string | null;
};
export type BoardCalendarSubmissionCreateInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
    calendarEvent: Prisma.BoardCalendarEventCreateNestedOneWithoutSubmissionsInput;
    submittedBy: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsSubmittedInput;
    receivedBy?: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsReceivedInput;
};
export type BoardCalendarSubmissionUncheckedCreateInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calendarEvent?: Prisma.BoardCalendarEventUpdateOneRequiredWithoutSubmissionsNestedInput;
    submittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardCalendarSubmissionsSubmittedNestedInput;
    receivedBy?: Prisma.AppUserUpdateOneWithoutBoardCalendarSubmissionsReceivedNestedInput;
};
export type BoardCalendarSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionCreateManyInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionListRelationFilter = {
    every?: Prisma.BoardCalendarSubmissionWhereInput;
    some?: Prisma.BoardCalendarSubmissionWhereInput;
    none?: Prisma.BoardCalendarSubmissionWhereInput;
};
export type BoardCalendarSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardCalendarSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    submittedByUserId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    completenessNote?: Prisma.SortOrder;
};
export type BoardCalendarSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    submittedByUserId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    completenessNote?: Prisma.SortOrder;
};
export type BoardCalendarSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    submittedByUserId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    receivedByUserId?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    completenessNote?: Prisma.SortOrder;
};
export type BoardCalendarSubmissionCreateNestedManyWithoutSubmittedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManySubmittedByInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionCreateNestedManyWithoutReceivedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyReceivedByInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManySubmittedByInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionUncheckedCreateNestedManyWithoutReceivedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyReceivedByInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionUpdateManyWithoutSubmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManySubmittedByInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutSubmittedByInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type BoardCalendarSubmissionUpdateManyWithoutReceivedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutReceivedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyReceivedByInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutReceivedByInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutReceivedByInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManySubmittedByInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutSubmittedByInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutSubmittedByInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutReceivedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput> | Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutReceivedByInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyReceivedByInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutReceivedByInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutReceivedByInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutReceivedByInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type BoardCalendarSubmissionCreateNestedManyWithoutCalendarEventInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput> | Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyCalendarEventInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionUncheckedCreateNestedManyWithoutCalendarEventInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput> | Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyCalendarEventInputEnvelope;
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
};
export type BoardCalendarSubmissionUpdateManyWithoutCalendarEventNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput> | Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutCalendarEventInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyCalendarEventInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutCalendarEventInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutCalendarEventInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutCalendarEventNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput> | Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput[] | Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput[];
    connectOrCreate?: Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput[];
    upsert?: Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpsertWithWhereUniqueWithoutCalendarEventInput[];
    createMany?: Prisma.BoardCalendarSubmissionCreateManyCalendarEventInputEnvelope;
    set?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    delete?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    connect?: Prisma.BoardCalendarSubmissionWhereUniqueInput | Prisma.BoardCalendarSubmissionWhereUniqueInput[];
    update?: Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpdateWithWhereUniqueWithoutCalendarEventInput[];
    updateMany?: Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutCalendarEventInput | Prisma.BoardCalendarSubmissionUpdateManyWithWhereWithoutCalendarEventInput[];
    deleteMany?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
};
export type EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.BoardCalendarSubmissionStatus;
};
export type BoardCalendarSubmissionCreateWithoutSubmittedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
    calendarEvent: Prisma.BoardCalendarEventCreateNestedOneWithoutSubmissionsInput;
    receivedBy?: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsReceivedInput;
};
export type BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionCreateOrConnectWithoutSubmittedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput>;
};
export type BoardCalendarSubmissionCreateManySubmittedByInputEnvelope = {
    data: Prisma.BoardCalendarSubmissionCreateManySubmittedByInput | Prisma.BoardCalendarSubmissionCreateManySubmittedByInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarSubmissionCreateWithoutReceivedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
    calendarEvent: Prisma.BoardCalendarEventCreateNestedOneWithoutSubmissionsInput;
    submittedBy: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsSubmittedInput;
};
export type BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionCreateOrConnectWithoutReceivedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput>;
};
export type BoardCalendarSubmissionCreateManyReceivedByInputEnvelope = {
    data: Prisma.BoardCalendarSubmissionCreateManyReceivedByInput | Prisma.BoardCalendarSubmissionCreateManyReceivedByInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutSubmittedByInput>;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutSubmittedByInput>;
};
export type BoardCalendarSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutSubmittedByInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutSubmittedByInput>;
};
export type BoardCalendarSubmissionUpdateManyWithWhereWithoutSubmittedByInput = {
    where: Prisma.BoardCalendarSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateManyMutationInput, Prisma.BoardCalendarSubmissionUncheckedUpdateManyWithoutSubmittedByInput>;
};
export type BoardCalendarSubmissionScalarWhereInput = {
    AND?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
    OR?: Prisma.BoardCalendarSubmissionScalarWhereInput[];
    NOT?: Prisma.BoardCalendarSubmissionScalarWhereInput | Prisma.BoardCalendarSubmissionScalarWhereInput[];
    id?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    calendarEventId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    title?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    fileReference?: Prisma.StringFilter<"BoardCalendarSubmission"> | string;
    submittedByUserId?: Prisma.UuidFilter<"BoardCalendarSubmission"> | string;
    submittedAt?: Prisma.DateTimeFilter<"BoardCalendarSubmission"> | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFilter<"BoardCalendarSubmission"> | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.UuidNullableFilter<"BoardCalendarSubmission"> | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarSubmission"> | Date | string | null;
    completenessNote?: Prisma.StringNullableFilter<"BoardCalendarSubmission"> | string | null;
};
export type BoardCalendarSubmissionUpsertWithWhereUniqueWithoutReceivedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutReceivedByInput>;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutReceivedByInput>;
};
export type BoardCalendarSubmissionUpdateWithWhereUniqueWithoutReceivedByInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutReceivedByInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutReceivedByInput>;
};
export type BoardCalendarSubmissionUpdateManyWithWhereWithoutReceivedByInput = {
    where: Prisma.BoardCalendarSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateManyMutationInput, Prisma.BoardCalendarSubmissionUncheckedUpdateManyWithoutReceivedByInput>;
};
export type BoardCalendarSubmissionCreateWithoutCalendarEventInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
    submittedBy: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsSubmittedInput;
    receivedBy?: Prisma.AppUserCreateNestedOneWithoutBoardCalendarSubmissionsReceivedInput;
};
export type BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionCreateOrConnectWithoutCalendarEventInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput>;
};
export type BoardCalendarSubmissionCreateManyCalendarEventInputEnvelope = {
    data: Prisma.BoardCalendarSubmissionCreateManyCalendarEventInput | Prisma.BoardCalendarSubmissionCreateManyCalendarEventInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarSubmissionUpsertWithWhereUniqueWithoutCalendarEventInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutCalendarEventInput>;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedCreateWithoutCalendarEventInput>;
};
export type BoardCalendarSubmissionUpdateWithWhereUniqueWithoutCalendarEventInput = {
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateWithoutCalendarEventInput, Prisma.BoardCalendarSubmissionUncheckedUpdateWithoutCalendarEventInput>;
};
export type BoardCalendarSubmissionUpdateManyWithWhereWithoutCalendarEventInput = {
    where: Prisma.BoardCalendarSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateManyMutationInput, Prisma.BoardCalendarSubmissionUncheckedUpdateManyWithoutCalendarEventInput>;
};
export type BoardCalendarSubmissionCreateManySubmittedByInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionCreateManyReceivedByInput = {
    id?: string;
    calendarEventId: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionUpdateWithoutSubmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calendarEvent?: Prisma.BoardCalendarEventUpdateOneRequiredWithoutSubmissionsNestedInput;
    receivedBy?: Prisma.AppUserUpdateOneWithoutBoardCalendarSubmissionsReceivedNestedInput;
};
export type BoardCalendarSubmissionUncheckedUpdateWithoutSubmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutSubmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionUpdateWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calendarEvent?: Prisma.BoardCalendarEventUpdateOneRequiredWithoutSubmissionsNestedInput;
    submittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardCalendarSubmissionsSubmittedNestedInput;
};
export type BoardCalendarSubmissionUncheckedUpdateWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutReceivedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionCreateManyCalendarEventInput = {
    id?: string;
    title: string;
    fileReference: string;
    submittedByUserId: string;
    submittedAt?: Date | string;
    status?: $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: string | null;
    receivedAt?: Date | string | null;
    completenessNote?: string | null;
};
export type BoardCalendarSubmissionUpdateWithoutCalendarEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardCalendarSubmissionsSubmittedNestedInput;
    receivedBy?: Prisma.AppUserUpdateOneWithoutBoardCalendarSubmissionsReceivedNestedInput;
};
export type BoardCalendarSubmissionUncheckedUpdateWithoutCalendarEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionUncheckedUpdateManyWithoutCalendarEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardCalendarSubmissionStatusFieldUpdateOperationsInput | $Enums.BoardCalendarSubmissionStatus;
    receivedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completenessNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BoardCalendarSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEventId?: boolean;
    title?: boolean;
    fileReference?: boolean;
    submittedByUserId?: boolean;
    submittedAt?: boolean;
    status?: boolean;
    receivedByUserId?: boolean;
    receivedAt?: boolean;
    completenessNote?: boolean;
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarSubmission"]>;
export type BoardCalendarSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEventId?: boolean;
    title?: boolean;
    fileReference?: boolean;
    submittedByUserId?: boolean;
    submittedAt?: boolean;
    status?: boolean;
    receivedByUserId?: boolean;
    receivedAt?: boolean;
    completenessNote?: boolean;
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarSubmission"]>;
export type BoardCalendarSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEventId?: boolean;
    title?: boolean;
    fileReference?: boolean;
    submittedByUserId?: boolean;
    submittedAt?: boolean;
    status?: boolean;
    receivedByUserId?: boolean;
    receivedAt?: boolean;
    completenessNote?: boolean;
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarSubmission"]>;
export type BoardCalendarSubmissionSelectScalar = {
    id?: boolean;
    calendarEventId?: boolean;
    title?: boolean;
    fileReference?: boolean;
    submittedByUserId?: boolean;
    submittedAt?: boolean;
    status?: boolean;
    receivedByUserId?: boolean;
    receivedAt?: boolean;
    completenessNote?: boolean;
};
export type BoardCalendarSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "calendarEventId" | "title" | "fileReference" | "submittedByUserId" | "submittedAt" | "status" | "receivedByUserId" | "receivedAt" | "completenessNote", ExtArgs["result"]["boardCalendarSubmission"]>;
export type BoardCalendarSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
};
export type BoardCalendarSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
};
export type BoardCalendarSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEvent?: boolean | Prisma.BoardCalendarEventDefaultArgs<ExtArgs>;
    submittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    receivedBy?: boolean | Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>;
};
export type $BoardCalendarSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardCalendarSubmission";
    objects: {
        calendarEvent: Prisma.$BoardCalendarEventPayload<ExtArgs>;
        submittedBy: Prisma.$AppUserPayload<ExtArgs>;
        receivedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        calendarEventId: string;
        title: string;
        fileReference: string;
        submittedByUserId: string;
        submittedAt: Date;
        status: $Enums.BoardCalendarSubmissionStatus;
        receivedByUserId: string | null;
        receivedAt: Date | null;
        completenessNote: string | null;
    }, ExtArgs["result"]["boardCalendarSubmission"]>;
    composites: {};
};
export type BoardCalendarSubmissionGetPayload<S extends boolean | null | undefined | BoardCalendarSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload, S>;
export type BoardCalendarSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardCalendarSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCalendarSubmissionCountAggregateInputType | true;
};
export interface BoardCalendarSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardCalendarSubmission'];
        meta: {
            name: 'BoardCalendarSubmission';
        };
    };
    findUnique<T extends BoardCalendarSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardCalendarSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardCalendarSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardCalendarSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardCalendarSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardCalendarSubmissionCreateArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardCalendarSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardCalendarSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardCalendarSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardCalendarSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardCalendarSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardCalendarSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardCalendarSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardCalendarSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, BoardCalendarSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarSubmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardCalendarSubmissionCountArgs>(args?: Prisma.Subset<T, BoardCalendarSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardCalendarSubmissionCountAggregateOutputType> : number>;
    aggregate<T extends BoardCalendarSubmissionAggregateArgs>(args: Prisma.Subset<T, BoardCalendarSubmissionAggregateArgs>): Prisma.PrismaPromise<GetBoardCalendarSubmissionAggregateType<T>>;
    groupBy<T extends BoardCalendarSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardCalendarSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardCalendarSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardCalendarSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCalendarSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardCalendarSubmissionFieldRefs;
}
export interface Prisma__BoardCalendarSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    calendarEvent<T extends Prisma.BoardCalendarEventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardCalendarEventDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    submittedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receivedBy<T extends Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardCalendarSubmission$receivedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardCalendarSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly calendarEventId: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly title: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly fileReference: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly submittedByUserId: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly submittedAt: Prisma.FieldRef<"BoardCalendarSubmission", 'DateTime'>;
    readonly status: Prisma.FieldRef<"BoardCalendarSubmission", 'BoardCalendarSubmissionStatus'>;
    readonly receivedByUserId: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
    readonly receivedAt: Prisma.FieldRef<"BoardCalendarSubmission", 'DateTime'>;
    readonly completenessNote: Prisma.FieldRef<"BoardCalendarSubmission", 'String'>;
}
export type BoardCalendarSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
};
export type BoardCalendarSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
};
export type BoardCalendarSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    orderBy?: Prisma.BoardCalendarSubmissionOrderByWithRelationInput | Prisma.BoardCalendarSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarSubmissionScalarFieldEnum | Prisma.BoardCalendarSubmissionScalarFieldEnum[];
};
export type BoardCalendarSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    orderBy?: Prisma.BoardCalendarSubmissionOrderByWithRelationInput | Prisma.BoardCalendarSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarSubmissionScalarFieldEnum | Prisma.BoardCalendarSubmissionScalarFieldEnum[];
};
export type BoardCalendarSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    orderBy?: Prisma.BoardCalendarSubmissionOrderByWithRelationInput | Prisma.BoardCalendarSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarSubmissionScalarFieldEnum | Prisma.BoardCalendarSubmissionScalarFieldEnum[];
};
export type BoardCalendarSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateInput, Prisma.BoardCalendarSubmissionUncheckedCreateInput>;
};
export type BoardCalendarSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardCalendarSubmissionCreateManyInput | Prisma.BoardCalendarSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    data: Prisma.BoardCalendarSubmissionCreateManyInput | Prisma.BoardCalendarSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BoardCalendarSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BoardCalendarSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateInput, Prisma.BoardCalendarSubmissionUncheckedUpdateInput>;
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
};
export type BoardCalendarSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateManyMutationInput, Prisma.BoardCalendarSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    limit?: number;
};
export type BoardCalendarSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateManyMutationInput, Prisma.BoardCalendarSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    limit?: number;
    include?: Prisma.BoardCalendarSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BoardCalendarSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarSubmissionCreateInput, Prisma.BoardCalendarSubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardCalendarSubmissionUpdateInput, Prisma.BoardCalendarSubmissionUncheckedUpdateInput>;
};
export type BoardCalendarSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarSubmissionWhereUniqueInput;
};
export type BoardCalendarSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarSubmissionWhereInput;
    limit?: number;
};
export type BoardCalendarSubmission$receivedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BoardCalendarSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarSubmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarSubmissionInclude<ExtArgs> | null;
};
