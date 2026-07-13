import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarEntryPayload>;
export type AggregateCalendarEntry = {
    _count: CalendarEntryCountAggregateOutputType | null;
    _avg: CalendarEntryAvgAggregateOutputType | null;
    _sum: CalendarEntrySumAggregateOutputType | null;
    _min: CalendarEntryMinAggregateOutputType | null;
    _max: CalendarEntryMaxAggregateOutputType | null;
};
export type CalendarEntryAvgAggregateOutputType = {
    reminderLeadMinutes: number | null;
};
export type CalendarEntrySumAggregateOutputType = {
    reminderLeadMinutes: number | null;
};
export type CalendarEntryMinAggregateOutputType = {
    id: string | null;
    ownerUserId: string | null;
    kind: $Enums.CalendarEntryKind | null;
    title: string | null;
    description: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    isAutoPlotted: boolean | null;
    sourceType: string | null;
    sourceId: string | null;
    organizerUserId: string | null;
    reminderLeadMinutes: number | null;
    remindedAt: Date | null;
    createdAt: Date | null;
};
export type CalendarEntryMaxAggregateOutputType = {
    id: string | null;
    ownerUserId: string | null;
    kind: $Enums.CalendarEntryKind | null;
    title: string | null;
    description: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    isAutoPlotted: boolean | null;
    sourceType: string | null;
    sourceId: string | null;
    organizerUserId: string | null;
    reminderLeadMinutes: number | null;
    remindedAt: Date | null;
    createdAt: Date | null;
};
export type CalendarEntryCountAggregateOutputType = {
    id: number;
    ownerUserId: number;
    kind: number;
    title: number;
    description: number;
    startsAt: number;
    endsAt: number;
    isAutoPlotted: number;
    sourceType: number;
    sourceId: number;
    organizerUserId: number;
    reminderLeadMinutes: number;
    remindedAt: number;
    createdAt: number;
    _all: number;
};
export type CalendarEntryAvgAggregateInputType = {
    reminderLeadMinutes?: true;
};
export type CalendarEntrySumAggregateInputType = {
    reminderLeadMinutes?: true;
};
export type CalendarEntryMinAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    kind?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    isAutoPlotted?: true;
    sourceType?: true;
    sourceId?: true;
    organizerUserId?: true;
    reminderLeadMinutes?: true;
    remindedAt?: true;
    createdAt?: true;
};
export type CalendarEntryMaxAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    kind?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    isAutoPlotted?: true;
    sourceType?: true;
    sourceId?: true;
    organizerUserId?: true;
    reminderLeadMinutes?: true;
    remindedAt?: true;
    createdAt?: true;
};
export type CalendarEntryCountAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    kind?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    isAutoPlotted?: true;
    sourceType?: true;
    sourceId?: true;
    organizerUserId?: true;
    reminderLeadMinutes?: true;
    remindedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CalendarEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEntryWhereInput;
    orderBy?: Prisma.CalendarEntryOrderByWithRelationInput | Prisma.CalendarEntryOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarEntryCountAggregateInputType;
    _avg?: CalendarEntryAvgAggregateInputType;
    _sum?: CalendarEntrySumAggregateInputType;
    _min?: CalendarEntryMinAggregateInputType;
    _max?: CalendarEntryMaxAggregateInputType;
};
export type GetCalendarEntryAggregateType<T extends CalendarEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarEntry[P]> : Prisma.GetScalarType<T[P], AggregateCalendarEntry[P]>;
};
export type CalendarEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEntryWhereInput;
    orderBy?: Prisma.CalendarEntryOrderByWithAggregationInput | Prisma.CalendarEntryOrderByWithAggregationInput[];
    by: Prisma.CalendarEntryScalarFieldEnum[] | Prisma.CalendarEntryScalarFieldEnum;
    having?: Prisma.CalendarEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarEntryCountAggregateInputType | true;
    _avg?: CalendarEntryAvgAggregateInputType;
    _sum?: CalendarEntrySumAggregateInputType;
    _min?: CalendarEntryMinAggregateInputType;
    _max?: CalendarEntryMaxAggregateInputType;
};
export type CalendarEntryGroupByOutputType = {
    id: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description: string | null;
    startsAt: Date;
    endsAt: Date | null;
    isAutoPlotted: boolean;
    sourceType: string | null;
    sourceId: string | null;
    organizerUserId: string | null;
    reminderLeadMinutes: number | null;
    remindedAt: Date | null;
    createdAt: Date;
    _count: CalendarEntryCountAggregateOutputType | null;
    _avg: CalendarEntryAvgAggregateOutputType | null;
    _sum: CalendarEntrySumAggregateOutputType | null;
    _min: CalendarEntryMinAggregateOutputType | null;
    _max: CalendarEntryMaxAggregateOutputType | null;
};
export type GetCalendarEntryGroupByPayload<T extends CalendarEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarEntryGroupByOutputType[P]>;
}>>;
export type CalendarEntryWhereInput = {
    AND?: Prisma.CalendarEntryWhereInput | Prisma.CalendarEntryWhereInput[];
    OR?: Prisma.CalendarEntryWhereInput[];
    NOT?: Prisma.CalendarEntryWhereInput | Prisma.CalendarEntryWhereInput[];
    id?: Prisma.UuidFilter<"CalendarEntry"> | string;
    ownerUserId?: Prisma.UuidFilter<"CalendarEntry"> | string;
    kind?: Prisma.EnumCalendarEntryKindFilter<"CalendarEntry"> | $Enums.CalendarEntryKind;
    title?: Prisma.StringFilter<"CalendarEntry"> | string;
    description?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    isAutoPlotted?: Prisma.BoolFilter<"CalendarEntry"> | boolean;
    sourceType?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    sourceId?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    organizerUserId?: Prisma.UuidNullableFilter<"CalendarEntry"> | string | null;
    reminderLeadMinutes?: Prisma.IntNullableFilter<"CalendarEntry"> | number | null;
    remindedAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
    owner?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    organizer?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    attendees?: Prisma.CalendarMeetingAttendeeListRelationFilter;
};
export type CalendarEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAutoPlotted?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizerUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminderLeadMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    remindedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    owner?: Prisma.AppUserOrderByWithRelationInput;
    organizer?: Prisma.AppUserOrderByWithRelationInput;
    attendees?: Prisma.CalendarMeetingAttendeeOrderByRelationAggregateInput;
};
export type CalendarEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ownerUserId_sourceType_sourceId?: Prisma.CalendarEntryOwnerUserIdSourceTypeSourceIdCompoundUniqueInput;
    AND?: Prisma.CalendarEntryWhereInput | Prisma.CalendarEntryWhereInput[];
    OR?: Prisma.CalendarEntryWhereInput[];
    NOT?: Prisma.CalendarEntryWhereInput | Prisma.CalendarEntryWhereInput[];
    ownerUserId?: Prisma.UuidFilter<"CalendarEntry"> | string;
    kind?: Prisma.EnumCalendarEntryKindFilter<"CalendarEntry"> | $Enums.CalendarEntryKind;
    title?: Prisma.StringFilter<"CalendarEntry"> | string;
    description?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    isAutoPlotted?: Prisma.BoolFilter<"CalendarEntry"> | boolean;
    sourceType?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    sourceId?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    organizerUserId?: Prisma.UuidNullableFilter<"CalendarEntry"> | string | null;
    reminderLeadMinutes?: Prisma.IntNullableFilter<"CalendarEntry"> | number | null;
    remindedAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
    owner?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    organizer?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    attendees?: Prisma.CalendarMeetingAttendeeListRelationFilter;
}, "id" | "ownerUserId_sourceType_sourceId">;
export type CalendarEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAutoPlotted?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizerUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminderLeadMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    remindedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarEntryCountOrderByAggregateInput;
    _avg?: Prisma.CalendarEntryAvgOrderByAggregateInput;
    _max?: Prisma.CalendarEntryMaxOrderByAggregateInput;
    _min?: Prisma.CalendarEntryMinOrderByAggregateInput;
    _sum?: Prisma.CalendarEntrySumOrderByAggregateInput;
};
export type CalendarEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarEntryScalarWhereWithAggregatesInput | Prisma.CalendarEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarEntryScalarWhereWithAggregatesInput | Prisma.CalendarEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CalendarEntry"> | string;
    ownerUserId?: Prisma.UuidWithAggregatesFilter<"CalendarEntry"> | string;
    kind?: Prisma.EnumCalendarEntryKindWithAggregatesFilter<"CalendarEntry"> | $Enums.CalendarEntryKind;
    title?: Prisma.StringWithAggregatesFilter<"CalendarEntry"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CalendarEntry"> | string | null;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarEntry"> | Date | string;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CalendarEntry"> | Date | string | null;
    isAutoPlotted?: Prisma.BoolWithAggregatesFilter<"CalendarEntry"> | boolean;
    sourceType?: Prisma.StringNullableWithAggregatesFilter<"CalendarEntry"> | string | null;
    sourceId?: Prisma.StringNullableWithAggregatesFilter<"CalendarEntry"> | string | null;
    organizerUserId?: Prisma.UuidNullableWithAggregatesFilter<"CalendarEntry"> | string | null;
    reminderLeadMinutes?: Prisma.IntNullableWithAggregatesFilter<"CalendarEntry"> | number | null;
    remindedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CalendarEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarEntry"> | Date | string;
};
export type CalendarEntryCreateInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    owner: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOwnedInput;
    organizer?: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOrganizedInput;
    attendees?: Prisma.CalendarMeetingAttendeeCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryUncheckedCreateInput = {
    id?: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    organizerUserId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.AppUserUpdateOneRequiredWithoutCalendarEntriesOwnedNestedInput;
    organizer?: Prisma.AppUserUpdateOneWithoutCalendarEntriesOrganizedNestedInput;
    attendees?: Prisma.CalendarMeetingAttendeeUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryCreateManyInput = {
    id?: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    organizerUserId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEntryListRelationFilter = {
    every?: Prisma.CalendarEntryWhereInput;
    some?: Prisma.CalendarEntryWhereInput;
    none?: Prisma.CalendarEntryWhereInput;
};
export type CalendarEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CalendarEntryOwnerUserIdSourceTypeSourceIdCompoundUniqueInput = {
    ownerUserId: string;
    sourceType: string;
    sourceId: string;
};
export type CalendarEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    isAutoPlotted?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceId?: Prisma.SortOrder;
    organizerUserId?: Prisma.SortOrder;
    reminderLeadMinutes?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarEntryAvgOrderByAggregateInput = {
    reminderLeadMinutes?: Prisma.SortOrder;
};
export type CalendarEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    isAutoPlotted?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceId?: Prisma.SortOrder;
    organizerUserId?: Prisma.SortOrder;
    reminderLeadMinutes?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    isAutoPlotted?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceId?: Prisma.SortOrder;
    organizerUserId?: Prisma.SortOrder;
    reminderLeadMinutes?: Prisma.SortOrder;
    remindedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarEntrySumOrderByAggregateInput = {
    reminderLeadMinutes?: Prisma.SortOrder;
};
export type CalendarEntryScalarRelationFilter = {
    is?: Prisma.CalendarEntryWhereInput;
    isNot?: Prisma.CalendarEntryWhereInput;
};
export type CalendarEntryCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput> | Prisma.CalendarEntryCreateWithoutOwnerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput | Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOwnerInputEnvelope;
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
};
export type CalendarEntryCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput> | Prisma.CalendarEntryCreateWithoutOrganizerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput | Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOrganizerInputEnvelope;
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
};
export type CalendarEntryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput> | Prisma.CalendarEntryCreateWithoutOwnerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput | Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOwnerInputEnvelope;
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
};
export type CalendarEntryUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput> | Prisma.CalendarEntryCreateWithoutOrganizerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput | Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOrganizerInputEnvelope;
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
};
export type CalendarEntryUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput> | Prisma.CalendarEntryCreateWithoutOwnerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput | Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOwnerInput | Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOwnerInputEnvelope;
    set?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    disconnect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    delete?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    update?: Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOwnerInput | Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.CalendarEntryUpdateManyWithWhereWithoutOwnerInput | Prisma.CalendarEntryUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
};
export type CalendarEntryUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput> | Prisma.CalendarEntryCreateWithoutOrganizerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput | Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOrganizerInputEnvelope;
    set?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    disconnect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    delete?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    update?: Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.CalendarEntryUpdateManyWithWhereWithoutOrganizerInput | Prisma.CalendarEntryUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
};
export type CalendarEntryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput> | Prisma.CalendarEntryCreateWithoutOwnerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput | Prisma.CalendarEntryCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOwnerInput | Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOwnerInputEnvelope;
    set?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    disconnect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    delete?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    update?: Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOwnerInput | Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.CalendarEntryUpdateManyWithWhereWithoutOwnerInput | Prisma.CalendarEntryUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
};
export type CalendarEntryUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput> | Prisma.CalendarEntryCreateWithoutOrganizerInput[] | Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput | Prisma.CalendarEntryCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.CalendarEntryUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.CalendarEntryCreateManyOrganizerInputEnvelope;
    set?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    disconnect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    delete?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    connect?: Prisma.CalendarEntryWhereUniqueInput | Prisma.CalendarEntryWhereUniqueInput[];
    update?: Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.CalendarEntryUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.CalendarEntryUpdateManyWithWhereWithoutOrganizerInput | Prisma.CalendarEntryUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
};
export type EnumCalendarEntryKindFieldUpdateOperationsInput = {
    set?: $Enums.CalendarEntryKind;
};
export type CalendarEntryCreateNestedOneWithoutAttendeesInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedCreateWithoutAttendeesInput>;
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutAttendeesInput;
    connect?: Prisma.CalendarEntryWhereUniqueInput;
};
export type CalendarEntryUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarEntryCreateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedCreateWithoutAttendeesInput>;
    connectOrCreate?: Prisma.CalendarEntryCreateOrConnectWithoutAttendeesInput;
    upsert?: Prisma.CalendarEntryUpsertWithoutAttendeesInput;
    connect?: Prisma.CalendarEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CalendarEntryUpdateToOneWithWhereWithoutAttendeesInput, Prisma.CalendarEntryUpdateWithoutAttendeesInput>, Prisma.CalendarEntryUncheckedUpdateWithoutAttendeesInput>;
};
export type CalendarEntryCreateWithoutOwnerInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    organizer?: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOrganizedInput;
    attendees?: Prisma.CalendarMeetingAttendeeCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryUncheckedCreateWithoutOwnerInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    organizerUserId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryCreateOrConnectWithoutOwnerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput>;
};
export type CalendarEntryCreateManyOwnerInputEnvelope = {
    data: Prisma.CalendarEntryCreateManyOwnerInput | Prisma.CalendarEntryCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type CalendarEntryCreateWithoutOrganizerInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    owner: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOwnedInput;
    attendees?: Prisma.CalendarMeetingAttendeeCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedCreateNestedManyWithoutCalendarEntryInput;
};
export type CalendarEntryCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput>;
};
export type CalendarEntryCreateManyOrganizerInputEnvelope = {
    data: Prisma.CalendarEntryCreateManyOrganizerInput | Prisma.CalendarEntryCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type CalendarEntryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutOwnerInput, Prisma.CalendarEntryUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOwnerInput, Prisma.CalendarEntryUncheckedCreateWithoutOwnerInput>;
};
export type CalendarEntryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutOwnerInput, Prisma.CalendarEntryUncheckedUpdateWithoutOwnerInput>;
};
export type CalendarEntryUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.CalendarEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateManyMutationInput, Prisma.CalendarEntryUncheckedUpdateManyWithoutOwnerInput>;
};
export type CalendarEntryScalarWhereInput = {
    AND?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
    OR?: Prisma.CalendarEntryScalarWhereInput[];
    NOT?: Prisma.CalendarEntryScalarWhereInput | Prisma.CalendarEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"CalendarEntry"> | string;
    ownerUserId?: Prisma.UuidFilter<"CalendarEntry"> | string;
    kind?: Prisma.EnumCalendarEntryKindFilter<"CalendarEntry"> | $Enums.CalendarEntryKind;
    title?: Prisma.StringFilter<"CalendarEntry"> | string;
    description?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    isAutoPlotted?: Prisma.BoolFilter<"CalendarEntry"> | boolean;
    sourceType?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    sourceId?: Prisma.StringNullableFilter<"CalendarEntry"> | string | null;
    organizerUserId?: Prisma.UuidNullableFilter<"CalendarEntry"> | string | null;
    reminderLeadMinutes?: Prisma.IntNullableFilter<"CalendarEntry"> | number | null;
    remindedAt?: Prisma.DateTimeNullableFilter<"CalendarEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarEntry"> | Date | string;
};
export type CalendarEntryUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedCreateWithoutOrganizerInput>;
};
export type CalendarEntryUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutOrganizerInput, Prisma.CalendarEntryUncheckedUpdateWithoutOrganizerInput>;
};
export type CalendarEntryUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.CalendarEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateManyMutationInput, Prisma.CalendarEntryUncheckedUpdateManyWithoutOrganizerInput>;
};
export type CalendarEntryCreateWithoutAttendeesInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
    owner: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOwnedInput;
    organizer?: Prisma.AppUserCreateNestedOneWithoutCalendarEntriesOrganizedInput;
};
export type CalendarEntryUncheckedCreateWithoutAttendeesInput = {
    id?: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    organizerUserId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarEntryCreateOrConnectWithoutAttendeesInput = {
    where: Prisma.CalendarEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedCreateWithoutAttendeesInput>;
};
export type CalendarEntryUpsertWithoutAttendeesInput = {
    update: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedUpdateWithoutAttendeesInput>;
    create: Prisma.XOR<Prisma.CalendarEntryCreateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedCreateWithoutAttendeesInput>;
    where?: Prisma.CalendarEntryWhereInput;
};
export type CalendarEntryUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: Prisma.CalendarEntryWhereInput;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateWithoutAttendeesInput, Prisma.CalendarEntryUncheckedUpdateWithoutAttendeesInput>;
};
export type CalendarEntryUpdateWithoutAttendeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.AppUserUpdateOneRequiredWithoutCalendarEntriesOwnedNestedInput;
    organizer?: Prisma.AppUserUpdateOneWithoutCalendarEntriesOrganizedNestedInput;
};
export type CalendarEntryUncheckedUpdateWithoutAttendeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEntryCreateManyOwnerInput = {
    id?: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    organizerUserId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarEntryCreateManyOrganizerInput = {
    id?: string;
    ownerUserId: string;
    kind: $Enums.CalendarEntryKind;
    title: string;
    description?: string | null;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    isAutoPlotted?: boolean;
    sourceType?: string | null;
    sourceId?: string | null;
    reminderLeadMinutes?: number | null;
    remindedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CalendarEntryUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.AppUserUpdateOneWithoutCalendarEntriesOrganizedNestedInput;
    attendees?: Prisma.CalendarMeetingAttendeeUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEntryUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.AppUserUpdateOneRequiredWithoutCalendarEntriesOwnedNestedInput;
    attendees?: Prisma.CalendarMeetingAttendeeUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendees?: Prisma.CalendarMeetingAttendeeUncheckedUpdateManyWithoutCalendarEntryNestedInput;
};
export type CalendarEntryUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumCalendarEntryKindFieldUpdateOperationsInput | $Enums.CalendarEntryKind;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isAutoPlotted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sourceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reminderLeadMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remindedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEntryCountOutputType = {
    attendees: number;
};
export type CalendarEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendees?: boolean | CalendarEntryCountOutputTypeCountAttendeesArgs;
};
export type CalendarEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type CalendarEntryCountOutputTypeCountAttendeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarMeetingAttendeeWhereInput;
};
export type CalendarEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    kind?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    isAutoPlotted?: boolean;
    sourceType?: boolean;
    sourceId?: boolean;
    organizerUserId?: boolean;
    reminderLeadMinutes?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
    attendees?: boolean | Prisma.CalendarEntry$attendeesArgs<ExtArgs>;
    _count?: boolean | Prisma.CalendarEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarEntry"]>;
export type CalendarEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    kind?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    isAutoPlotted?: boolean;
    sourceType?: boolean;
    sourceId?: boolean;
    organizerUserId?: boolean;
    reminderLeadMinutes?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
}, ExtArgs["result"]["calendarEntry"]>;
export type CalendarEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    kind?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    isAutoPlotted?: boolean;
    sourceType?: boolean;
    sourceId?: boolean;
    organizerUserId?: boolean;
    reminderLeadMinutes?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
}, ExtArgs["result"]["calendarEntry"]>;
export type CalendarEntrySelectScalar = {
    id?: boolean;
    ownerUserId?: boolean;
    kind?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    isAutoPlotted?: boolean;
    sourceType?: boolean;
    sourceId?: boolean;
    organizerUserId?: boolean;
    reminderLeadMinutes?: boolean;
    remindedAt?: boolean;
    createdAt?: boolean;
};
export type CalendarEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerUserId" | "kind" | "title" | "description" | "startsAt" | "endsAt" | "isAutoPlotted" | "sourceType" | "sourceId" | "organizerUserId" | "reminderLeadMinutes" | "remindedAt" | "createdAt", ExtArgs["result"]["calendarEntry"]>;
export type CalendarEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
    attendees?: boolean | Prisma.CalendarEntry$attendeesArgs<ExtArgs>;
    _count?: boolean | Prisma.CalendarEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CalendarEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
};
export type CalendarEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.CalendarEntry$organizerArgs<ExtArgs>;
};
export type $CalendarEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarEntry";
    objects: {
        owner: Prisma.$AppUserPayload<ExtArgs>;
        organizer: Prisma.$AppUserPayload<ExtArgs> | null;
        attendees: Prisma.$CalendarMeetingAttendeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerUserId: string;
        kind: $Enums.CalendarEntryKind;
        title: string;
        description: string | null;
        startsAt: Date;
        endsAt: Date | null;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
        remindedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["calendarEntry"]>;
    composites: {};
};
export type CalendarEntryGetPayload<S extends boolean | null | undefined | CalendarEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload, S>;
export type CalendarEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarEntryCountAggregateInputType | true;
};
export interface CalendarEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarEntry'];
        meta: {
            name: 'CalendarEntry';
        };
    };
    findUnique<T extends CalendarEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarEntryFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarEntryCreateArgs>(args: Prisma.SelectSubset<T, CalendarEntryCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarEntryDeleteArgs>(args: Prisma.SelectSubset<T, CalendarEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarEntryUpdateArgs>(args: Prisma.SelectSubset<T, CalendarEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarEntryUpsertArgs>(args: Prisma.SelectSubset<T, CalendarEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarEntryClient<runtime.Types.Result.GetResult<Prisma.$CalendarEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarEntryCountArgs>(args?: Prisma.Subset<T, CalendarEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarEntryCountAggregateOutputType> : number>;
    aggregate<T extends CalendarEntryAggregateArgs>(args: Prisma.Subset<T, CalendarEntryAggregateArgs>): Prisma.PrismaPromise<GetCalendarEntryAggregateType<T>>;
    groupBy<T extends CalendarEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarEntryFieldRefs;
}
export interface Prisma__CalendarEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organizer<T extends Prisma.CalendarEntry$organizerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CalendarEntry$organizerArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attendees<T extends Prisma.CalendarEntry$attendeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CalendarEntry$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarMeetingAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarEntryFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly ownerUserId: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly kind: Prisma.FieldRef<"CalendarEntry", 'CalendarEntryKind'>;
    readonly title: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly description: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly startsAt: Prisma.FieldRef<"CalendarEntry", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"CalendarEntry", 'DateTime'>;
    readonly isAutoPlotted: Prisma.FieldRef<"CalendarEntry", 'Boolean'>;
    readonly sourceType: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly sourceId: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly organizerUserId: Prisma.FieldRef<"CalendarEntry", 'String'>;
    readonly reminderLeadMinutes: Prisma.FieldRef<"CalendarEntry", 'Int'>;
    readonly remindedAt: Prisma.FieldRef<"CalendarEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CalendarEntry", 'DateTime'>;
}
export type CalendarEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where: Prisma.CalendarEntryWhereUniqueInput;
};
export type CalendarEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where: Prisma.CalendarEntryWhereUniqueInput;
};
export type CalendarEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where?: Prisma.CalendarEntryWhereInput;
    orderBy?: Prisma.CalendarEntryOrderByWithRelationInput | Prisma.CalendarEntryOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEntryScalarFieldEnum | Prisma.CalendarEntryScalarFieldEnum[];
};
export type CalendarEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where?: Prisma.CalendarEntryWhereInput;
    orderBy?: Prisma.CalendarEntryOrderByWithRelationInput | Prisma.CalendarEntryOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEntryScalarFieldEnum | Prisma.CalendarEntryScalarFieldEnum[];
};
export type CalendarEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where?: Prisma.CalendarEntryWhereInput;
    orderBy?: Prisma.CalendarEntryOrderByWithRelationInput | Prisma.CalendarEntryOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEntryScalarFieldEnum | Prisma.CalendarEntryScalarFieldEnum[];
};
export type CalendarEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEntryCreateInput, Prisma.CalendarEntryUncheckedCreateInput>;
};
export type CalendarEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarEntryCreateManyInput | Prisma.CalendarEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    data: Prisma.CalendarEntryCreateManyInput | Prisma.CalendarEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CalendarEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CalendarEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateInput, Prisma.CalendarEntryUncheckedUpdateInput>;
    where: Prisma.CalendarEntryWhereUniqueInput;
};
export type CalendarEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarEntryUpdateManyMutationInput, Prisma.CalendarEntryUncheckedUpdateManyInput>;
    where?: Prisma.CalendarEntryWhereInput;
    limit?: number;
};
export type CalendarEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEntryUpdateManyMutationInput, Prisma.CalendarEntryUncheckedUpdateManyInput>;
    where?: Prisma.CalendarEntryWhereInput;
    limit?: number;
    include?: Prisma.CalendarEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CalendarEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where: Prisma.CalendarEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarEntryCreateInput, Prisma.CalendarEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarEntryUpdateInput, Prisma.CalendarEntryUncheckedUpdateInput>;
};
export type CalendarEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
    where: Prisma.CalendarEntryWhereUniqueInput;
};
export type CalendarEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEntryWhereInput;
    limit?: number;
};
export type CalendarEntry$organizerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type CalendarEntry$attendeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CalendarEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEntrySelect<ExtArgs> | null;
    omit?: Prisma.CalendarEntryOmit<ExtArgs> | null;
    include?: Prisma.CalendarEntryInclude<ExtArgs> | null;
};
