import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardCalendarEventModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardCalendarEventPayload>;
export type AggregateBoardCalendarEvent = {
    _count: BoardCalendarEventCountAggregateOutputType | null;
    _min: BoardCalendarEventMinAggregateOutputType | null;
    _max: BoardCalendarEventMaxAggregateOutputType | null;
};
export type BoardCalendarEventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    committeeTag: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdByUserId: string | null;
    remindedAt: Date | null;
    createdAt: Date | null;
};
export type BoardCalendarEventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    committeeTag: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdByUserId: string | null;
    remindedAt: Date | null;
    createdAt: Date | null;
};
export type BoardCalendarEventCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    committeeTag: number;
    startsAt: number;
    endsAt: number;
    createdByUserId: number;
    remindedAt: number;
    createdAt: number;
    _all: number;
};
export type BoardCalendarEventMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    remindedAt?: true;
    createdAt?: true;
};
export type BoardCalendarEventMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    remindedAt?: true;
    createdAt?: true;
};
export type BoardCalendarEventCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    remindedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type BoardCalendarEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarEventWhereInput;
    orderBy?: Prisma.BoardCalendarEventOrderByWithRelationInput | Prisma.BoardCalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardCalendarEventCountAggregateInputType;
    _min?: BoardCalendarEventMinAggregateInputType;
    _max?: BoardCalendarEventMaxAggregateInputType;
};
export type GetBoardCalendarEventAggregateType<T extends BoardCalendarEventAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardCalendarEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardCalendarEvent[P]> : Prisma.GetScalarType<T[P], AggregateBoardCalendarEvent[P]>;
};
export type BoardCalendarEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarEventWhereInput;
    orderBy?: Prisma.BoardCalendarEventOrderByWithAggregationInput | Prisma.BoardCalendarEventOrderByWithAggregationInput[];
    by: Prisma.BoardCalendarEventScalarFieldEnum[] | Prisma.BoardCalendarEventScalarFieldEnum;
    having?: Prisma.BoardCalendarEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCalendarEventCountAggregateInputType | true;
    _min?: BoardCalendarEventMinAggregateInputType;
    _max?: BoardCalendarEventMaxAggregateInputType;
};
export type BoardCalendarEventGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    committeeTag: string | null;
    startsAt: Date;
    endsAt: Date | null;
    createdByUserId: string;
    remindedAt: Date | null;
    createdAt: Date;
    _count: BoardCalendarEventCountAggregateOutputType | null;
    _min: BoardCalendarEventMinAggregateOutputType | null;
    _max: BoardCalendarEventMaxAggregateOutputType | null;
};
export type GetBoardCalendarEventGroupByPayload<T extends BoardCalendarEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardCalendarEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardCalendarEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardCalendarEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardCalendarEventGroupByOutputType[P]>;
}>>;
export type BoardCalendarEventWhereInput = {
    AND?: Prisma.BoardCalendarEventWhereInput | Prisma.BoardCalendarEventWhereInput[];
    OR?: Prisma.BoardCalendarEventWhereInput[];
    NOT?: Prisma.BoardCalendarEventWhereInput | Prisma.BoardCalendarEventWhereInput[];
    id?: Prisma.UuidFilter<"BoardCalendarEvent"> | string;
    title?: Prisma.StringFilter<"BoardCalendarEvent"> | string;
    description?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    committeeTag?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"BoardCalendarEvent"> | string;
    remindedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    submissions?: Prisma.BoardCalendarSubmissionListRelationFilter;
};
export type BoardCalendarEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    submissions?: Prisma.BoardCalendarSubmissionOrderByRelationAggregateInput;
};
export type BoardCalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BoardCalendarEventWhereInput | Prisma.BoardCalendarEventWhereInput[];
    OR?: Prisma.BoardCalendarEventWhereInput[];
    NOT?: Prisma.BoardCalendarEventWhereInput | Prisma.BoardCalendarEventWhereInput[];
    title?: Prisma.StringFilter<"BoardCalendarEvent"> | string;
    description?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    committeeTag?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"BoardCalendarEvent"> | string;
    remindedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    submissions?: Prisma.BoardCalendarSubmissionListRelationFilter;
}, "id">;
export type BoardCalendarEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BoardCalendarEventCountOrderByAggregateInput;
    _max?: Prisma.BoardCalendarEventMaxOrderByAggregateInput;
    _min?: Prisma.BoardCalendarEventMinOrderByAggregateInput;
};
export type BoardCalendarEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardCalendarEventScalarWhereWithAggregatesInput | Prisma.BoardCalendarEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardCalendarEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardCalendarEventScalarWhereWithAggregatesInput | Prisma.BoardCalendarEventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BoardCalendarEvent"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BoardCalendarEvent"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BoardCalendarEvent"> | string | null;
    committeeTag?: Prisma.StringNullableWithAggregatesFilter<"BoardCalendarEvent"> | string | null;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"BoardCalendarEvent"> | Date | string;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardCalendarEvent"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"BoardCalendarEvent"> | string;
    remindedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardCalendarEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BoardCalendarEvent"> | Date | string;
};
export type BoardCalendarEventCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutBoardCalendarEventsCreatedInput;
    submissions?: Prisma.BoardCalendarSubmissionCreateNestedManyWithoutCalendarEventInput;
};
export type BoardCalendarEventUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdByUserId: string;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    submissions?: Prisma.BoardCalendarSubmissionUncheckedCreateNestedManyWithoutCalendarEventInput;
};
export type BoardCalendarEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardCalendarEventsCreatedNestedInput;
    submissions?: Prisma.BoardCalendarSubmissionUpdateManyWithoutCalendarEventNestedInput;
};
export type BoardCalendarEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submissions?: Prisma.BoardCalendarSubmissionUncheckedUpdateManyWithoutCalendarEventNestedInput;
};
export type BoardCalendarEventCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdByUserId: string;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BoardCalendarEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarEventListRelationFilter = {
    every?: Prisma.BoardCalendarEventWhereInput;
    some?: Prisma.BoardCalendarEventWhereInput;
    none?: Prisma.BoardCalendarEventWhereInput;
};
export type BoardCalendarEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardCalendarEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardCalendarEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardCalendarEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardCalendarEventScalarRelationFilter = {
    is?: Prisma.BoardCalendarEventWhereInput;
    isNot?: Prisma.BoardCalendarEventWhereInput;
};
export type BoardCalendarEventCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput> | Prisma.BoardCalendarEventCreateWithoutCreatedByInput[] | Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput | Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.BoardCalendarEventCreateManyCreatedByInputEnvelope;
    connect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
};
export type BoardCalendarEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput> | Prisma.BoardCalendarEventCreateWithoutCreatedByInput[] | Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput | Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.BoardCalendarEventCreateManyCreatedByInputEnvelope;
    connect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
};
export type BoardCalendarEventUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput> | Prisma.BoardCalendarEventCreateWithoutCreatedByInput[] | Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput | Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.BoardCalendarEventUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.BoardCalendarEventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.BoardCalendarEventCreateManyCreatedByInputEnvelope;
    set?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    delete?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    connect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    update?: Prisma.BoardCalendarEventUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.BoardCalendarEventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.BoardCalendarEventUpdateManyWithWhereWithoutCreatedByInput | Prisma.BoardCalendarEventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.BoardCalendarEventScalarWhereInput | Prisma.BoardCalendarEventScalarWhereInput[];
};
export type BoardCalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput> | Prisma.BoardCalendarEventCreateWithoutCreatedByInput[] | Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput | Prisma.BoardCalendarEventCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.BoardCalendarEventUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.BoardCalendarEventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.BoardCalendarEventCreateManyCreatedByInputEnvelope;
    set?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    disconnect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    delete?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    connect?: Prisma.BoardCalendarEventWhereUniqueInput | Prisma.BoardCalendarEventWhereUniqueInput[];
    update?: Prisma.BoardCalendarEventUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.BoardCalendarEventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.BoardCalendarEventUpdateManyWithWhereWithoutCreatedByInput | Prisma.BoardCalendarEventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.BoardCalendarEventScalarWhereInput | Prisma.BoardCalendarEventScalarWhereInput[];
};
export type BoardCalendarEventCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.BoardCalendarEventWhereUniqueInput;
};
export type BoardCalendarEventUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.BoardCalendarEventCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.BoardCalendarEventUpsertWithoutSubmissionsInput;
    connect?: Prisma.BoardCalendarEventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardCalendarEventUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.BoardCalendarEventUpdateWithoutSubmissionsInput>, Prisma.BoardCalendarEventUncheckedUpdateWithoutSubmissionsInput>;
};
export type BoardCalendarEventCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    submissions?: Prisma.BoardCalendarSubmissionCreateNestedManyWithoutCalendarEventInput;
};
export type BoardCalendarEventUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    submissions?: Prisma.BoardCalendarSubmissionUncheckedCreateNestedManyWithoutCalendarEventInput;
};
export type BoardCalendarEventCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.BoardCalendarEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput>;
};
export type BoardCalendarEventCreateManyCreatedByInputEnvelope = {
    data: Prisma.BoardCalendarEventCreateManyCreatedByInput | Prisma.BoardCalendarEventCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.BoardCalendarEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardCalendarEventUpdateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedCreateWithoutCreatedByInput>;
};
export type BoardCalendarEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.BoardCalendarEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateWithoutCreatedByInput, Prisma.BoardCalendarEventUncheckedUpdateWithoutCreatedByInput>;
};
export type BoardCalendarEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.BoardCalendarEventScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateManyMutationInput, Prisma.BoardCalendarEventUncheckedUpdateManyWithoutCreatedByInput>;
};
export type BoardCalendarEventScalarWhereInput = {
    AND?: Prisma.BoardCalendarEventScalarWhereInput | Prisma.BoardCalendarEventScalarWhereInput[];
    OR?: Prisma.BoardCalendarEventScalarWhereInput[];
    NOT?: Prisma.BoardCalendarEventScalarWhereInput | Prisma.BoardCalendarEventScalarWhereInput[];
    id?: Prisma.UuidFilter<"BoardCalendarEvent"> | string;
    title?: Prisma.StringFilter<"BoardCalendarEvent"> | string;
    description?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    committeeTag?: Prisma.StringNullableFilter<"BoardCalendarEvent"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"BoardCalendarEvent"> | string;
    remindedAt?: Prisma.DateTimeNullableFilter<"BoardCalendarEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardCalendarEvent"> | Date | string;
};
export type BoardCalendarEventCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutBoardCalendarEventsCreatedInput;
};
export type BoardCalendarEventUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdByUserId: string;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BoardCalendarEventCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.BoardCalendarEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedCreateWithoutSubmissionsInput>;
};
export type BoardCalendarEventUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.BoardCalendarEventUpdateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.BoardCalendarEventCreateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.BoardCalendarEventWhereInput;
};
export type BoardCalendarEventUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.BoardCalendarEventWhereInput;
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateWithoutSubmissionsInput, Prisma.BoardCalendarEventUncheckedUpdateWithoutSubmissionsInput>;
};
export type BoardCalendarEventUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardCalendarEventsCreatedNestedInput;
};
export type BoardCalendarEventUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarEventCreateManyCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    committeeTag?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BoardCalendarEventUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submissions?: Prisma.BoardCalendarSubmissionUpdateManyWithoutCalendarEventNestedInput;
};
export type BoardCalendarEventUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submissions?: Prisma.BoardCalendarSubmissionUncheckedUpdateManyWithoutCalendarEventNestedInput;
};
export type BoardCalendarEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarEventCountOutputType = {
    submissions: number;
};
export type BoardCalendarEventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submissions?: boolean | BoardCalendarEventCountOutputTypeCountSubmissionsArgs;
};
export type BoardCalendarEventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventCountOutputTypeSelect<ExtArgs> | null;
};
export type BoardCalendarEventCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarSubmissionWhereInput;
};
export type BoardCalendarEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.BoardCalendarEvent$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCalendarEventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarEvent"]>;
export type BoardCalendarEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarEvent"]>;
export type BoardCalendarEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardCalendarEvent"]>;
export type BoardCalendarEventSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
};
export type BoardCalendarEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "committeeTag" | "startsAt" | "endsAt" | "createdByUserId" | "remindedAt" | "createdAt", ExtArgs["result"]["boardCalendarEvent"]>;
export type BoardCalendarEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.BoardCalendarEvent$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCalendarEventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BoardCalendarEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BoardCalendarEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $BoardCalendarEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardCalendarEvent";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        submissions: Prisma.$BoardCalendarSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        committeeTag: string | null;
        startsAt: Date;
        endsAt: Date | null;
        createdByUserId: string;
        remindedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["boardCalendarEvent"]>;
    composites: {};
};
export type BoardCalendarEventGetPayload<S extends boolean | null | undefined | BoardCalendarEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload, S>;
export type BoardCalendarEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardCalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCalendarEventCountAggregateInputType | true;
};
export interface BoardCalendarEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardCalendarEvent'];
        meta: {
            name: 'BoardCalendarEvent';
        };
    };
    findUnique<T extends BoardCalendarEventFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardCalendarEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardCalendarEventFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardCalendarEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardCalendarEventFindManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardCalendarEventCreateArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventCreateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardCalendarEventCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardCalendarEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardCalendarEventDeleteArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardCalendarEventUpdateArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardCalendarEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardCalendarEventUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardCalendarEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardCalendarEventUpsertArgs>(args: Prisma.SelectSubset<T, BoardCalendarEventUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarEventClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardCalendarEventCountArgs>(args?: Prisma.Subset<T, BoardCalendarEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardCalendarEventCountAggregateOutputType> : number>;
    aggregate<T extends BoardCalendarEventAggregateArgs>(args: Prisma.Subset<T, BoardCalendarEventAggregateArgs>): Prisma.PrismaPromise<GetBoardCalendarEventAggregateType<T>>;
    groupBy<T extends BoardCalendarEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardCalendarEventGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardCalendarEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardCalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardCalendarEventFieldRefs;
}
export interface Prisma__BoardCalendarEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    submissions<T extends Prisma.BoardCalendarEvent$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardCalendarEvent$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardCalendarEventFieldRefs {
    readonly id: Prisma.FieldRef<"BoardCalendarEvent", 'String'>;
    readonly title: Prisma.FieldRef<"BoardCalendarEvent", 'String'>;
    readonly description: Prisma.FieldRef<"BoardCalendarEvent", 'String'>;
    readonly committeeTag: Prisma.FieldRef<"BoardCalendarEvent", 'String'>;
    readonly startsAt: Prisma.FieldRef<"BoardCalendarEvent", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"BoardCalendarEvent", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"BoardCalendarEvent", 'String'>;
    readonly remindedAt: Prisma.FieldRef<"BoardCalendarEvent", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BoardCalendarEvent", 'DateTime'>;
}
export type BoardCalendarEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarEventWhereUniqueInput;
};
export type BoardCalendarEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarEventWhereUniqueInput;
};
export type BoardCalendarEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarEventWhereInput;
    orderBy?: Prisma.BoardCalendarEventOrderByWithRelationInput | Prisma.BoardCalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarEventScalarFieldEnum | Prisma.BoardCalendarEventScalarFieldEnum[];
};
export type BoardCalendarEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarEventWhereInput;
    orderBy?: Prisma.BoardCalendarEventOrderByWithRelationInput | Prisma.BoardCalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarEventScalarFieldEnum | Prisma.BoardCalendarEventScalarFieldEnum[];
};
export type BoardCalendarEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where?: Prisma.BoardCalendarEventWhereInput;
    orderBy?: Prisma.BoardCalendarEventOrderByWithRelationInput | Prisma.BoardCalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarEventScalarFieldEnum | Prisma.BoardCalendarEventScalarFieldEnum[];
};
export type BoardCalendarEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarEventCreateInput, Prisma.BoardCalendarEventUncheckedCreateInput>;
};
export type BoardCalendarEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardCalendarEventCreateManyInput | Prisma.BoardCalendarEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    data: Prisma.BoardCalendarEventCreateManyInput | Prisma.BoardCalendarEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BoardCalendarEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BoardCalendarEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateInput, Prisma.BoardCalendarEventUncheckedUpdateInput>;
    where: Prisma.BoardCalendarEventWhereUniqueInput;
};
export type BoardCalendarEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateManyMutationInput, Prisma.BoardCalendarEventUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarEventWhereInput;
    limit?: number;
};
export type BoardCalendarEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarEventUpdateManyMutationInput, Prisma.BoardCalendarEventUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarEventWhereInput;
    limit?: number;
    include?: Prisma.BoardCalendarEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BoardCalendarEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarEventCreateInput, Prisma.BoardCalendarEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardCalendarEventUpdateInput, Prisma.BoardCalendarEventUncheckedUpdateInput>;
};
export type BoardCalendarEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
    where: Prisma.BoardCalendarEventWhereUniqueInput;
};
export type BoardCalendarEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarEventWhereInput;
    limit?: number;
};
export type BoardCalendarEvent$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BoardCalendarEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarEventOmit<ExtArgs> | null;
    include?: Prisma.BoardCalendarEventInclude<ExtArgs> | null;
};
