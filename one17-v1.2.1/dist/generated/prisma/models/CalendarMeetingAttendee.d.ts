import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarMeetingAttendeeModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarMeetingAttendeePayload>;
export type AggregateCalendarMeetingAttendee = {
    _count: CalendarMeetingAttendeeCountAggregateOutputType | null;
    _min: CalendarMeetingAttendeeMinAggregateOutputType | null;
    _max: CalendarMeetingAttendeeMaxAggregateOutputType | null;
};
export type CalendarMeetingAttendeeMinAggregateOutputType = {
    id: string | null;
    calendarEntryId: string | null;
    attendeeUserId: string | null;
    status: $Enums.CalendarAttendeeStatus | null;
    respondedAt: Date | null;
    createdAt: Date | null;
};
export type CalendarMeetingAttendeeMaxAggregateOutputType = {
    id: string | null;
    calendarEntryId: string | null;
    attendeeUserId: string | null;
    status: $Enums.CalendarAttendeeStatus | null;
    respondedAt: Date | null;
    createdAt: Date | null;
};
export type CalendarMeetingAttendeeCountAggregateOutputType = {
    id: number;
    calendarEntryId: number;
    attendeeUserId: number;
    status: number;
    respondedAt: number;
    createdAt: number;
    _all: number;
};
export type CalendarMeetingAttendeeMinAggregateInputType = {
    id?: true;
    calendarEntryId?: true;
    attendeeUserId?: true;
    status?: true;
    respondedAt?: true;
    createdAt?: true;
};
export type CalendarMeetingAttendeeMaxAggregateInputType = {
    id?: true;
    calendarEntryId?: true;
    attendeeUserId?: true;
    status?: true;
    respondedAt?: true;
    createdAt?: true;
};
export type CalendarMeetingAttendeeCountAggregateInputType = {
    id?: true;
    calendarEntryId?: true;
    attendeeUserId?: true;
    status?: true;
    respondedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CalendarMeetingAttendeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    orderBy?: Prisma.CalendarMeetingAttendeeOrderByWithRelationInput | Prisma.CalendarMeetingAttendeeOrderByWithRelationInput[];
    cursor?: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarMeetingAttendeeCountAggregateInputType;
    _min?: CalendarMeetingAttendeeMinAggregateInputType;
    _max?: CalendarMeetingAttendeeMaxAggregateInputType;
};
export type GetCalendarMeetingAttendeeAggregateType<T extends CalendarMeetingAttendeeAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarMeetingAttendee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarMeetingAttendee[P]> : Prisma.GetScalarType<T[P], AggregateCalendarMeetingAttendee[P]>;
};
export type CalendarMeetingAttendeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    orderBy?: Prisma.CalendarMeetingAttendeeOrderByWithAggregationInput | Prisma.CalendarMeetingAttendeeOrderByWithAggregationInput[];
    by: Prisma.CalendarMeetingAttendeeScalarFieldEnum[] | Prisma.CalendarMeetingAttendeeScalarFieldEnum;
    having?: Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarMeetingAttendeeCountAggregateInputType | true;
    _min?: CalendarMeetingAttendeeMinAggregateInputType;
    _max?: CalendarMeetingAttendeeMaxAggregateInputType;
};
export type CalendarMeetingAttendeeGroupByOutputType = {
    id: string;
    calendarEntryId: string;
    attendeeUserId: string;
    status: $Enums.CalendarAttendeeStatus;
    respondedAt: Date | null;
    createdAt: Date;
    _count: CalendarMeetingAttendeeCountAggregateOutputType | null;
    _min: CalendarMeetingAttendeeMinAggregateOutputType | null;
    _max: CalendarMeetingAttendeeMaxAggregateOutputType | null;
};
export type GetCalendarMeetingAttendeeGroupByPayload<T extends CalendarMeetingAttendeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarMeetingAttendeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarMeetingAttendeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarMeetingAttendeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarMeetingAttendeeGroupByOutputType[P]>;
}>>;
export type CalendarMeetingAttendeeWhereInput = {
    AND?: Prisma.CalendarMeetingAttendeeWhereInput | Prisma.CalendarMeetingAttendeeWhereInput[];
    OR?: Prisma.CalendarMeetingAttendeeWhereInput[];
    NOT?: Prisma.CalendarMeetingAttendeeWhereInput | Prisma.CalendarMeetingAttendeeWhereInput[];
    id?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    calendarEntryId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    attendeeUserId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    status?: Prisma.EnumCalendarAttendeeStatusFilter<"CalendarMeetingAttendee"> | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.DateTimeNullableFilter<"CalendarMeetingAttendee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarMeetingAttendee"> | Date | string;
    calendarEntry?: Prisma.XOR<Prisma.CalendarEntryScalarRelationFilter, Prisma.CalendarEntryWhereInput>;
    attendee?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type CalendarMeetingAttendeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    calendarEntryId?: Prisma.SortOrder;
    attendeeUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    calendarEntry?: Prisma.CalendarEntryOrderByWithRelationInput;
    attendee?: Prisma.AppUserOrderByWithRelationInput;
};
export type CalendarMeetingAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    calendarEntryId_attendeeUserId?: Prisma.CalendarMeetingAttendeeCalendarEntryIdAttendeeUserIdCompoundUniqueInput;
    AND?: Prisma.CalendarMeetingAttendeeWhereInput | Prisma.CalendarMeetingAttendeeWhereInput[];
    OR?: Prisma.CalendarMeetingAttendeeWhereInput[];
    NOT?: Prisma.CalendarMeetingAttendeeWhereInput | Prisma.CalendarMeetingAttendeeWhereInput[];
    calendarEntryId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    attendeeUserId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    status?: Prisma.EnumCalendarAttendeeStatusFilter<"CalendarMeetingAttendee"> | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.DateTimeNullableFilter<"CalendarMeetingAttendee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarMeetingAttendee"> | Date | string;
    calendarEntry?: Prisma.XOR<Prisma.CalendarEntryScalarRelationFilter, Prisma.CalendarEntryWhereInput>;
    attendee?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "calendarEntryId_attendeeUserId">;
export type CalendarMeetingAttendeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    calendarEntryId?: Prisma.SortOrder;
    attendeeUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarMeetingAttendeeCountOrderByAggregateInput;
    _max?: Prisma.CalendarMeetingAttendeeMaxOrderByAggregateInput;
    _min?: Prisma.CalendarMeetingAttendeeMinOrderByAggregateInput;
};
export type CalendarMeetingAttendeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput | Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput | Prisma.CalendarMeetingAttendeeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CalendarMeetingAttendee"> | string;
    calendarEntryId?: Prisma.UuidWithAggregatesFilter<"CalendarMeetingAttendee"> | string;
    attendeeUserId?: Prisma.UuidWithAggregatesFilter<"CalendarMeetingAttendee"> | string;
    status?: Prisma.EnumCalendarAttendeeStatusWithAggregatesFilter<"CalendarMeetingAttendee"> | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CalendarMeetingAttendee"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarMeetingAttendee"> | Date | string;
};
export type CalendarMeetingAttendeeCreateInput = {
    id?: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
    calendarEntry: Prisma.CalendarEntryCreateNestedOneWithoutAttendeesInput;
    attendee: Prisma.AppUserCreateNestedOneWithoutCalendarMeetingInvitesInput;
};
export type CalendarMeetingAttendeeUncheckedCreateInput = {
    id?: string;
    calendarEntryId: string;
    attendeeUserId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    calendarEntry?: Prisma.CalendarEntryUpdateOneRequiredWithoutAttendeesNestedInput;
    attendee?: Prisma.AppUserUpdateOneRequiredWithoutCalendarMeetingInvitesNestedInput;
};
export type CalendarMeetingAttendeeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeCreateManyInput = {
    id?: string;
    calendarEntryId: string;
    attendeeUserId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeListRelationFilter = {
    every?: Prisma.CalendarMeetingAttendeeWhereInput;
    some?: Prisma.CalendarMeetingAttendeeWhereInput;
    none?: Prisma.CalendarMeetingAttendeeWhereInput;
};
export type CalendarMeetingAttendeeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CalendarMeetingAttendeeCalendarEntryIdAttendeeUserIdCompoundUniqueInput = {
    calendarEntryId: string;
    attendeeUserId: string;
};
export type CalendarMeetingAttendeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEntryId?: Prisma.SortOrder;
    attendeeUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarMeetingAttendeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEntryId?: Prisma.SortOrder;
    attendeeUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarMeetingAttendeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    calendarEntryId?: Prisma.SortOrder;
    attendeeUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarMeetingAttendeeCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput> | Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyAttendeeInputEnvelope;
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
};
export type CalendarMeetingAttendeeUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput> | Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyAttendeeInputEnvelope;
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
};
export type CalendarMeetingAttendeeUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput> | Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyAttendeeInputEnvelope;
    set?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    disconnect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    delete?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    update?: Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
};
export type CalendarMeetingAttendeeUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput> | Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyAttendeeInputEnvelope;
    set?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    disconnect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    delete?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    update?: Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutAttendeeInput | Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
};
export type CalendarMeetingAttendeeCreateNestedManyWithoutCalendarEntryInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput> | Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInputEnvelope;
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
};
export type CalendarMeetingAttendeeUncheckedCreateNestedManyWithoutCalendarEntryInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput> | Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInputEnvelope;
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
};
export type CalendarMeetingAttendeeUpdateManyWithoutCalendarEntryNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput> | Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput[];
    upsert?: Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutCalendarEntryInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInputEnvelope;
    set?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    disconnect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    delete?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    update?: Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutCalendarEntryInput[];
    updateMany?: Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutCalendarEntryInput[];
    deleteMany?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
};
export type CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput> | Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput[] | Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput[];
    connectOrCreate?: Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput[];
    upsert?: Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutCalendarEntryInput[];
    createMany?: Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInputEnvelope;
    set?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    disconnect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    delete?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    connect?: Prisma.CalendarMeetingAttendeeWhereUniqueInput | Prisma.CalendarMeetingAttendeeWhereUniqueInput[];
    update?: Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutCalendarEntryInput[];
    updateMany?: Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutCalendarEntryInput | Prisma.CalendarMeetingAttendeeUpdateManyWithWhereWithoutCalendarEntryInput[];
    deleteMany?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
};
export type EnumCalendarAttendeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.CalendarAttendeeStatus;
};
export type CalendarMeetingAttendeeCreateWithoutAttendeeInput = {
    id?: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
    calendarEntry: Prisma.CalendarEntryCreateNestedOneWithoutAttendeesInput;
};
export type CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput = {
    id?: string;
    calendarEntryId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeCreateOrConnectWithoutAttendeeInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput>;
};
export type CalendarMeetingAttendeeCreateManyAttendeeInputEnvelope = {
    data: Prisma.CalendarMeetingAttendeeCreateManyAttendeeInput | Prisma.CalendarMeetingAttendeeCreateManyAttendeeInput[];
    skipDuplicates?: boolean;
};
export type CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateWithoutAttendeeInput>;
    create: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutAttendeeInput>;
};
export type CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateWithoutAttendeeInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateWithoutAttendeeInput>;
};
export type CalendarMeetingAttendeeUpdateManyWithWhereWithoutAttendeeInput = {
    where: Prisma.CalendarMeetingAttendeeScalarWhereInput;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateManyMutationInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateManyWithoutAttendeeInput>;
};
export type CalendarMeetingAttendeeScalarWhereInput = {
    AND?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
    OR?: Prisma.CalendarMeetingAttendeeScalarWhereInput[];
    NOT?: Prisma.CalendarMeetingAttendeeScalarWhereInput | Prisma.CalendarMeetingAttendeeScalarWhereInput[];
    id?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    calendarEntryId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    attendeeUserId?: Prisma.UuidFilter<"CalendarMeetingAttendee"> | string;
    status?: Prisma.EnumCalendarAttendeeStatusFilter<"CalendarMeetingAttendee"> | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.DateTimeNullableFilter<"CalendarMeetingAttendee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarMeetingAttendee"> | Date | string;
};
export type CalendarMeetingAttendeeCreateWithoutCalendarEntryInput = {
    id?: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
    attendee: Prisma.AppUserCreateNestedOneWithoutCalendarMeetingInvitesInput;
};
export type CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput = {
    id?: string;
    attendeeUserId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeCreateOrConnectWithoutCalendarEntryInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput>;
};
export type CalendarMeetingAttendeeCreateManyCalendarEntryInputEnvelope = {
    data: Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInput | Prisma.CalendarMeetingAttendeeCreateManyCalendarEntryInput[];
    skipDuplicates?: boolean;
};
export type CalendarMeetingAttendeeUpsertWithWhereUniqueWithoutCalendarEntryInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateWithoutCalendarEntryInput>;
    create: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedCreateWithoutCalendarEntryInput>;
};
export type CalendarMeetingAttendeeUpdateWithWhereUniqueWithoutCalendarEntryInput = {
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateWithoutCalendarEntryInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateWithoutCalendarEntryInput>;
};
export type CalendarMeetingAttendeeUpdateManyWithWhereWithoutCalendarEntryInput = {
    where: Prisma.CalendarMeetingAttendeeScalarWhereInput;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateManyMutationInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryInput>;
};
export type CalendarMeetingAttendeeCreateManyAttendeeInput = {
    id?: string;
    calendarEntryId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    calendarEntry?: Prisma.CalendarEntryUpdateOneRequiredWithoutAttendeesNestedInput;
};
export type CalendarMeetingAttendeeUncheckedUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeUncheckedUpdateManyWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    calendarEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeCreateManyCalendarEntryInput = {
    id?: string;
    attendeeUserId: string;
    status?: $Enums.CalendarAttendeeStatus;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarMeetingAttendeeUpdateWithoutCalendarEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendee?: Prisma.AppUserUpdateOneRequiredWithoutCalendarMeetingInvitesNestedInput;
};
export type CalendarMeetingAttendeeUncheckedUpdateWithoutCalendarEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCalendarAttendeeStatusFieldUpdateOperationsInput | $Enums.CalendarAttendeeStatus;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarMeetingAttendeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEntryId?: boolean;
    attendeeUserId?: boolean;
    status?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarMeetingAttendee"]>;
export type CalendarMeetingAttendeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEntryId?: boolean;
    attendeeUserId?: boolean;
    status?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarMeetingAttendee"]>;
export type CalendarMeetingAttendeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    calendarEntryId?: boolean;
    attendeeUserId?: boolean;
    status?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarMeetingAttendee"]>;
export type CalendarMeetingAttendeeSelectScalar = {
    id?: boolean;
    calendarEntryId?: boolean;
    attendeeUserId?: boolean;
    status?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
};
export type CalendarMeetingAttendeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "calendarEntryId" | "attendeeUserId" | "status" | "respondedAt" | "createdAt", ExtArgs["result"]["calendarMeetingAttendee"]>;
export type CalendarMeetingAttendeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type CalendarMeetingAttendeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type CalendarMeetingAttendeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendarEntry?: boolean | Prisma.CalendarEntryDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $CalendarMeetingAttendeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarMeetingAttendee";
    objects: {
        calendarEntry: Prisma.$CalendarEntryPayload<ExtArgs>;
        attendee: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        calendarEntryId: string;
        attendeeUserId: string;
        status: $Enums.CalendarAttendeeStatus;
        respondedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["calendarMeetingAttendee"]>;
    composites: {};
};
export type CalendarMeetingAttendeeGetPayload<S extends boolean | null | undefined | CalendarMeetingAttendeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload, S>;
export type CalendarMeetingAttendeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarMeetingAttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarMeetingAttendeeCountAggregateInputType | true;
};
export interface CalendarMeetingAttendeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarMeetingAttendee'];
        meta: {
            name: 'CalendarMeetingAttendee';
        };
    };
    findUnique<T extends CalendarMeetingAttendeeFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarMeetingAttendeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarMeetingAttendeeFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarMeetingAttendeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarMeetingAttendeeFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarMeetingAttendeeCreateArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarMeetingAttendeeCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarMeetingAttendeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarMeetingAttendeeDeleteArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarMeetingAttendeeUpdateArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarMeetingAttendeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarMeetingAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarMeetingAttendeeUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarMeetingAttendeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarMeetingAttendeeUpsertArgs>(args: Prisma.SelectSubset<T, CalendarMeetingAttendeeUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarMeetingAttendeeClient<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarMeetingAttendeeCountArgs>(args?: Prisma.Subset<T, CalendarMeetingAttendeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarMeetingAttendeeCountAggregateOutputType> : number>;
    aggregate<T extends CalendarMeetingAttendeeAggregateArgs>(args: Prisma.Subset<T, CalendarMeetingAttendeeAggregateArgs>): Prisma.PrismaPromise<GetCalendarMeetingAttendeeAggregateType<T>>;
    groupBy<T extends CalendarMeetingAttendeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarMeetingAttendeeGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarMeetingAttendeeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarMeetingAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarMeetingAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarMeetingAttendeeFieldRefs;
}
export interface Prisma__CalendarMeetingAttendeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    calendarEntry<T extends Prisma.CalendarEntryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CalendarEntryDefaultArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attendee<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarMeetingAttendeeFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarMeetingAttendee", 'String'>;
    readonly calendarEntryId: Prisma.FieldRef<"CalendarMeetingAttendee", 'String'>;
    readonly attendeeUserId: Prisma.FieldRef<"CalendarMeetingAttendee", 'String'>;
    readonly status: Prisma.FieldRef<"CalendarMeetingAttendee", 'CalendarAttendeeStatus'>;
    readonly respondedAt: Prisma.FieldRef<"CalendarMeetingAttendee", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CalendarMeetingAttendee", 'DateTime'>;
}
export type CalendarMeetingAttendeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
};
export type CalendarMeetingAttendeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
};
export type CalendarMeetingAttendeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    orderBy?: Prisma.CalendarMeetingAttendeeOrderByWithRelationInput | Prisma.CalendarMeetingAttendeeOrderByWithRelationInput[];
    cursor?: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarMeetingAttendeeScalarFieldEnum | Prisma.CalendarMeetingAttendeeScalarFieldEnum[];
};
export type CalendarMeetingAttendeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    orderBy?: Prisma.CalendarMeetingAttendeeOrderByWithRelationInput | Prisma.CalendarMeetingAttendeeOrderByWithRelationInput[];
    cursor?: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarMeetingAttendeeScalarFieldEnum | Prisma.CalendarMeetingAttendeeScalarFieldEnum[];
};
export type CalendarMeetingAttendeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    orderBy?: Prisma.CalendarMeetingAttendeeOrderByWithRelationInput | Prisma.CalendarMeetingAttendeeOrderByWithRelationInput[];
    cursor?: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarMeetingAttendeeScalarFieldEnum | Prisma.CalendarMeetingAttendeeScalarFieldEnum[];
};
export type CalendarMeetingAttendeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateInput, Prisma.CalendarMeetingAttendeeUncheckedCreateInput>;
};
export type CalendarMeetingAttendeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarMeetingAttendeeCreateManyInput | Prisma.CalendarMeetingAttendeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarMeetingAttendeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    data: Prisma.CalendarMeetingAttendeeCreateManyInput | Prisma.CalendarMeetingAttendeeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CalendarMeetingAttendeeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CalendarMeetingAttendeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateInput>;
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
};
export type CalendarMeetingAttendeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateManyMutationInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateManyInput>;
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    limit?: number;
};
export type CalendarMeetingAttendeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateManyMutationInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateManyInput>;
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    limit?: number;
    include?: Prisma.CalendarMeetingAttendeeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CalendarMeetingAttendeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarMeetingAttendeeCreateInput, Prisma.CalendarMeetingAttendeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarMeetingAttendeeUpdateInput, Prisma.CalendarMeetingAttendeeUncheckedUpdateInput>;
};
export type CalendarMeetingAttendeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
    where: Prisma.CalendarMeetingAttendeeWhereUniqueInput;
};
export type CalendarMeetingAttendeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
    limit?: number;
};
export type CalendarMeetingAttendeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarMeetingAttendeeSelect<ExtArgs> | null;
    omit?: Prisma.CalendarMeetingAttendeeOmit<ExtArgs> | null;
    include?: Prisma.CalendarMeetingAttendeeInclude<ExtArgs> | null;
};
