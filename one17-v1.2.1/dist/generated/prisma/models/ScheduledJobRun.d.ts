import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduledJobRunModel = runtime.Types.Result.DefaultSelection<Prisma.$ScheduledJobRunPayload>;
export type AggregateScheduledJobRun = {
    _count: ScheduledJobRunCountAggregateOutputType | null;
    _min: ScheduledJobRunMinAggregateOutputType | null;
    _max: ScheduledJobRunMaxAggregateOutputType | null;
};
export type ScheduledJobRunMinAggregateOutputType = {
    id: string | null;
    jobCode: string | null;
    scheduledFor: Date | null;
    startedAt: Date | null;
    completedAt: Date | null;
    status: $Enums.ScheduledJobRunStatus | null;
    isCatchUp: boolean | null;
    isManualRerun: boolean | null;
    triggeredByUserId: string | null;
    errorMessage: string | null;
    createdAt: Date | null;
};
export type ScheduledJobRunMaxAggregateOutputType = {
    id: string | null;
    jobCode: string | null;
    scheduledFor: Date | null;
    startedAt: Date | null;
    completedAt: Date | null;
    status: $Enums.ScheduledJobRunStatus | null;
    isCatchUp: boolean | null;
    isManualRerun: boolean | null;
    triggeredByUserId: string | null;
    errorMessage: string | null;
    createdAt: Date | null;
};
export type ScheduledJobRunCountAggregateOutputType = {
    id: number;
    jobCode: number;
    scheduledFor: number;
    startedAt: number;
    completedAt: number;
    status: number;
    isCatchUp: number;
    isManualRerun: number;
    triggeredByUserId: number;
    resultSummary: number;
    errorMessage: number;
    createdAt: number;
    _all: number;
};
export type ScheduledJobRunMinAggregateInputType = {
    id?: true;
    jobCode?: true;
    scheduledFor?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    isCatchUp?: true;
    isManualRerun?: true;
    triggeredByUserId?: true;
    errorMessage?: true;
    createdAt?: true;
};
export type ScheduledJobRunMaxAggregateInputType = {
    id?: true;
    jobCode?: true;
    scheduledFor?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    isCatchUp?: true;
    isManualRerun?: true;
    triggeredByUserId?: true;
    errorMessage?: true;
    createdAt?: true;
};
export type ScheduledJobRunCountAggregateInputType = {
    id?: true;
    jobCode?: true;
    scheduledFor?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    isCatchUp?: true;
    isManualRerun?: true;
    triggeredByUserId?: true;
    resultSummary?: true;
    errorMessage?: true;
    createdAt?: true;
    _all?: true;
};
export type ScheduledJobRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRunWhereInput;
    orderBy?: Prisma.ScheduledJobRunOrderByWithRelationInput | Prisma.ScheduledJobRunOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduledJobRunCountAggregateInputType;
    _min?: ScheduledJobRunMinAggregateInputType;
    _max?: ScheduledJobRunMaxAggregateInputType;
};
export type GetScheduledJobRunAggregateType<T extends ScheduledJobRunAggregateArgs> = {
    [P in keyof T & keyof AggregateScheduledJobRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScheduledJobRun[P]> : Prisma.GetScalarType<T[P], AggregateScheduledJobRun[P]>;
};
export type ScheduledJobRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRunWhereInput;
    orderBy?: Prisma.ScheduledJobRunOrderByWithAggregationInput | Prisma.ScheduledJobRunOrderByWithAggregationInput[];
    by: Prisma.ScheduledJobRunScalarFieldEnum[] | Prisma.ScheduledJobRunScalarFieldEnum;
    having?: Prisma.ScheduledJobRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduledJobRunCountAggregateInputType | true;
    _min?: ScheduledJobRunMinAggregateInputType;
    _max?: ScheduledJobRunMaxAggregateInputType;
};
export type ScheduledJobRunGroupByOutputType = {
    id: string;
    jobCode: string;
    scheduledFor: Date;
    startedAt: Date;
    completedAt: Date | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp: boolean;
    isManualRerun: boolean;
    triggeredByUserId: string | null;
    resultSummary: runtime.JsonValue | null;
    errorMessage: string | null;
    createdAt: Date;
    _count: ScheduledJobRunCountAggregateOutputType | null;
    _min: ScheduledJobRunMinAggregateOutputType | null;
    _max: ScheduledJobRunMaxAggregateOutputType | null;
};
export type GetScheduledJobRunGroupByPayload<T extends ScheduledJobRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduledJobRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduledJobRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduledJobRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduledJobRunGroupByOutputType[P]>;
}>>;
export type ScheduledJobRunWhereInput = {
    AND?: Prisma.ScheduledJobRunWhereInput | Prisma.ScheduledJobRunWhereInput[];
    OR?: Prisma.ScheduledJobRunWhereInput[];
    NOT?: Prisma.ScheduledJobRunWhereInput | Prisma.ScheduledJobRunWhereInput[];
    id?: Prisma.UuidFilter<"ScheduledJobRun"> | string;
    jobCode?: Prisma.StringFilter<"ScheduledJobRun"> | string;
    scheduledFor?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    startedAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRun"> | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFilter<"ScheduledJobRun"> | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    isManualRerun?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    triggeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRun"> | string | null;
    resultSummary?: Prisma.JsonNullableFilter<"ScheduledJobRun">;
    errorMessage?: Prisma.StringNullableFilter<"ScheduledJobRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    triggeredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ScheduledJobRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobCode?: Prisma.SortOrder;
    scheduledFor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isCatchUp?: Prisma.SortOrder;
    isManualRerun?: Prisma.SortOrder;
    triggeredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    triggeredBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ScheduledJobRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScheduledJobRunWhereInput | Prisma.ScheduledJobRunWhereInput[];
    OR?: Prisma.ScheduledJobRunWhereInput[];
    NOT?: Prisma.ScheduledJobRunWhereInput | Prisma.ScheduledJobRunWhereInput[];
    jobCode?: Prisma.StringFilter<"ScheduledJobRun"> | string;
    scheduledFor?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    startedAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRun"> | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFilter<"ScheduledJobRun"> | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    isManualRerun?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    triggeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRun"> | string | null;
    resultSummary?: Prisma.JsonNullableFilter<"ScheduledJobRun">;
    errorMessage?: Prisma.StringNullableFilter<"ScheduledJobRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    triggeredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type ScheduledJobRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobCode?: Prisma.SortOrder;
    scheduledFor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isCatchUp?: Prisma.SortOrder;
    isManualRerun?: Prisma.SortOrder;
    triggeredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScheduledJobRunCountOrderByAggregateInput;
    _max?: Prisma.ScheduledJobRunMaxOrderByAggregateInput;
    _min?: Prisma.ScheduledJobRunMinOrderByAggregateInput;
};
export type ScheduledJobRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduledJobRunScalarWhereWithAggregatesInput | Prisma.ScheduledJobRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduledJobRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduledJobRunScalarWhereWithAggregatesInput | Prisma.ScheduledJobRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScheduledJobRun"> | string;
    jobCode?: Prisma.StringWithAggregatesFilter<"ScheduledJobRun"> | string;
    scheduledFor?: Prisma.DateTimeWithAggregatesFilter<"ScheduledJobRun"> | Date | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"ScheduledJobRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScheduledJobRun"> | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusWithAggregatesFilter<"ScheduledJobRun"> | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolWithAggregatesFilter<"ScheduledJobRun"> | boolean;
    isManualRerun?: Prisma.BoolWithAggregatesFilter<"ScheduledJobRun"> | boolean;
    triggeredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobRun"> | string | null;
    resultSummary?: Prisma.JsonNullableWithAggregatesFilter<"ScheduledJobRun">;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"ScheduledJobRun"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScheduledJobRun"> | Date | string;
};
export type ScheduledJobRunCreateInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
    triggeredBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobRunsTriggeredInput;
};
export type ScheduledJobRunUncheckedCreateInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: string | null;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
};
export type ScheduledJobRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    triggeredBy?: Prisma.AppUserUpdateOneWithoutScheduledJobRunsTriggeredNestedInput;
};
export type ScheduledJobRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunCreateManyInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: string | null;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
};
export type ScheduledJobRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunListRelationFilter = {
    every?: Prisma.ScheduledJobRunWhereInput;
    some?: Prisma.ScheduledJobRunWhereInput;
    none?: Prisma.ScheduledJobRunWhereInput;
};
export type ScheduledJobRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScheduledJobRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCode?: Prisma.SortOrder;
    scheduledFor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isCatchUp?: Prisma.SortOrder;
    isManualRerun?: Prisma.SortOrder;
    triggeredByUserId?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScheduledJobRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCode?: Prisma.SortOrder;
    scheduledFor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isCatchUp?: Prisma.SortOrder;
    isManualRerun?: Prisma.SortOrder;
    triggeredByUserId?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScheduledJobRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCode?: Prisma.SortOrder;
    scheduledFor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isCatchUp?: Prisma.SortOrder;
    isManualRerun?: Prisma.SortOrder;
    triggeredByUserId?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScheduledJobRunCreateNestedManyWithoutTriggeredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput> | Prisma.ScheduledJobRunCreateWithoutTriggeredByInput[] | Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput | Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput[];
    createMany?: Prisma.ScheduledJobRunCreateManyTriggeredByInputEnvelope;
    connect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
};
export type ScheduledJobRunUncheckedCreateNestedManyWithoutTriggeredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput> | Prisma.ScheduledJobRunCreateWithoutTriggeredByInput[] | Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput | Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput[];
    createMany?: Prisma.ScheduledJobRunCreateManyTriggeredByInputEnvelope;
    connect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
};
export type ScheduledJobRunUpdateManyWithoutTriggeredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput> | Prisma.ScheduledJobRunCreateWithoutTriggeredByInput[] | Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput | Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput[];
    upsert?: Prisma.ScheduledJobRunUpsertWithWhereUniqueWithoutTriggeredByInput | Prisma.ScheduledJobRunUpsertWithWhereUniqueWithoutTriggeredByInput[];
    createMany?: Prisma.ScheduledJobRunCreateManyTriggeredByInputEnvelope;
    set?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    update?: Prisma.ScheduledJobRunUpdateWithWhereUniqueWithoutTriggeredByInput | Prisma.ScheduledJobRunUpdateWithWhereUniqueWithoutTriggeredByInput[];
    updateMany?: Prisma.ScheduledJobRunUpdateManyWithWhereWithoutTriggeredByInput | Prisma.ScheduledJobRunUpdateManyWithWhereWithoutTriggeredByInput[];
    deleteMany?: Prisma.ScheduledJobRunScalarWhereInput | Prisma.ScheduledJobRunScalarWhereInput[];
};
export type ScheduledJobRunUncheckedUpdateManyWithoutTriggeredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput> | Prisma.ScheduledJobRunCreateWithoutTriggeredByInput[] | Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput | Prisma.ScheduledJobRunCreateOrConnectWithoutTriggeredByInput[];
    upsert?: Prisma.ScheduledJobRunUpsertWithWhereUniqueWithoutTriggeredByInput | Prisma.ScheduledJobRunUpsertWithWhereUniqueWithoutTriggeredByInput[];
    createMany?: Prisma.ScheduledJobRunCreateManyTriggeredByInputEnvelope;
    set?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRunWhereUniqueInput | Prisma.ScheduledJobRunWhereUniqueInput[];
    update?: Prisma.ScheduledJobRunUpdateWithWhereUniqueWithoutTriggeredByInput | Prisma.ScheduledJobRunUpdateWithWhereUniqueWithoutTriggeredByInput[];
    updateMany?: Prisma.ScheduledJobRunUpdateManyWithWhereWithoutTriggeredByInput | Prisma.ScheduledJobRunUpdateManyWithWhereWithoutTriggeredByInput[];
    deleteMany?: Prisma.ScheduledJobRunScalarWhereInput | Prisma.ScheduledJobRunScalarWhereInput[];
};
export type EnumScheduledJobRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduledJobRunStatus;
};
export type ScheduledJobRunCreateWithoutTriggeredByInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
};
export type ScheduledJobRunUncheckedCreateWithoutTriggeredByInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
};
export type ScheduledJobRunCreateOrConnectWithoutTriggeredByInput = {
    where: Prisma.ScheduledJobRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput>;
};
export type ScheduledJobRunCreateManyTriggeredByInputEnvelope = {
    data: Prisma.ScheduledJobRunCreateManyTriggeredByInput | Prisma.ScheduledJobRunCreateManyTriggeredByInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobRunUpsertWithWhereUniqueWithoutTriggeredByInput = {
    where: Prisma.ScheduledJobRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduledJobRunUpdateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedUpdateWithoutTriggeredByInput>;
    create: Prisma.XOR<Prisma.ScheduledJobRunCreateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedCreateWithoutTriggeredByInput>;
};
export type ScheduledJobRunUpdateWithWhereUniqueWithoutTriggeredByInput = {
    where: Prisma.ScheduledJobRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduledJobRunUpdateWithoutTriggeredByInput, Prisma.ScheduledJobRunUncheckedUpdateWithoutTriggeredByInput>;
};
export type ScheduledJobRunUpdateManyWithWhereWithoutTriggeredByInput = {
    where: Prisma.ScheduledJobRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduledJobRunUpdateManyMutationInput, Prisma.ScheduledJobRunUncheckedUpdateManyWithoutTriggeredByInput>;
};
export type ScheduledJobRunScalarWhereInput = {
    AND?: Prisma.ScheduledJobRunScalarWhereInput | Prisma.ScheduledJobRunScalarWhereInput[];
    OR?: Prisma.ScheduledJobRunScalarWhereInput[];
    NOT?: Prisma.ScheduledJobRunScalarWhereInput | Prisma.ScheduledJobRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"ScheduledJobRun"> | string;
    jobCode?: Prisma.StringFilter<"ScheduledJobRun"> | string;
    scheduledFor?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    startedAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRun"> | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFilter<"ScheduledJobRun"> | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    isManualRerun?: Prisma.BoolFilter<"ScheduledJobRun"> | boolean;
    triggeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRun"> | string | null;
    resultSummary?: Prisma.JsonNullableFilter<"ScheduledJobRun">;
    errorMessage?: Prisma.StringNullableFilter<"ScheduledJobRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScheduledJobRun"> | Date | string;
};
export type ScheduledJobRunCreateManyTriggeredByInput = {
    id?: string;
    jobCode: string;
    scheduledFor: Date | string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    status: $Enums.ScheduledJobRunStatus;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    createdAt?: Date | string;
};
export type ScheduledJobRunUpdateWithoutTriggeredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunUncheckedUpdateWithoutTriggeredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunUncheckedUpdateManyWithoutTriggeredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledFor?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumScheduledJobRunStatusFieldUpdateOperationsInput | $Enums.ScheduledJobRunStatus;
    isCatchUp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isManualRerun?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resultSummary?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCode?: boolean;
    scheduledFor?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: boolean;
    resultSummary?: boolean;
    errorMessage?: boolean;
    createdAt?: boolean;
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRun"]>;
export type ScheduledJobRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCode?: boolean;
    scheduledFor?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: boolean;
    resultSummary?: boolean;
    errorMessage?: boolean;
    createdAt?: boolean;
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRun"]>;
export type ScheduledJobRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCode?: boolean;
    scheduledFor?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: boolean;
    resultSummary?: boolean;
    errorMessage?: boolean;
    createdAt?: boolean;
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRun"]>;
export type ScheduledJobRunSelectScalar = {
    id?: boolean;
    jobCode?: boolean;
    scheduledFor?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    isCatchUp?: boolean;
    isManualRerun?: boolean;
    triggeredByUserId?: boolean;
    resultSummary?: boolean;
    errorMessage?: boolean;
    createdAt?: boolean;
};
export type ScheduledJobRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobCode" | "scheduledFor" | "startedAt" | "completedAt" | "status" | "isCatchUp" | "isManualRerun" | "triggeredByUserId" | "resultSummary" | "errorMessage" | "createdAt", ExtArgs["result"]["scheduledJobRun"]>;
export type ScheduledJobRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
};
export type ScheduledJobRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
};
export type ScheduledJobRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    triggeredBy?: boolean | Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>;
};
export type $ScheduledJobRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScheduledJobRun";
    objects: {
        triggeredBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobCode: string;
        scheduledFor: Date;
        startedAt: Date;
        completedAt: Date | null;
        status: $Enums.ScheduledJobRunStatus;
        isCatchUp: boolean;
        isManualRerun: boolean;
        triggeredByUserId: string | null;
        resultSummary: runtime.JsonValue | null;
        errorMessage: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["scheduledJobRun"]>;
    composites: {};
};
export type ScheduledJobRunGetPayload<S extends boolean | null | undefined | ScheduledJobRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload, S>;
export type ScheduledJobRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduledJobRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduledJobRunCountAggregateInputType | true;
};
export interface ScheduledJobRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScheduledJobRun'];
        meta: {
            name: 'ScheduledJobRun';
        };
    };
    findUnique<T extends ScheduledJobRunFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduledJobRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduledJobRunFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduledJobRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduledJobRunFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduledJobRunCreateArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduledJobRunCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduledJobRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduledJobRunDeleteArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduledJobRunUpdateArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduledJobRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduledJobRunUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduledJobRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduledJobRunUpsertArgs>(args: Prisma.SelectSubset<T, ScheduledJobRunUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRunClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduledJobRunCountArgs>(args?: Prisma.Subset<T, ScheduledJobRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduledJobRunCountAggregateOutputType> : number>;
    aggregate<T extends ScheduledJobRunAggregateArgs>(args: Prisma.Subset<T, ScheduledJobRunAggregateArgs>): Prisma.PrismaPromise<GetScheduledJobRunAggregateType<T>>;
    groupBy<T extends ScheduledJobRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduledJobRunGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduledJobRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduledJobRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledJobRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduledJobRunFieldRefs;
}
export interface Prisma__ScheduledJobRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    triggeredBy<T extends Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduledJobRun$triggeredByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduledJobRunFieldRefs {
    readonly id: Prisma.FieldRef<"ScheduledJobRun", 'String'>;
    readonly jobCode: Prisma.FieldRef<"ScheduledJobRun", 'String'>;
    readonly scheduledFor: Prisma.FieldRef<"ScheduledJobRun", 'DateTime'>;
    readonly startedAt: Prisma.FieldRef<"ScheduledJobRun", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"ScheduledJobRun", 'DateTime'>;
    readonly status: Prisma.FieldRef<"ScheduledJobRun", 'ScheduledJobRunStatus'>;
    readonly isCatchUp: Prisma.FieldRef<"ScheduledJobRun", 'Boolean'>;
    readonly isManualRerun: Prisma.FieldRef<"ScheduledJobRun", 'Boolean'>;
    readonly triggeredByUserId: Prisma.FieldRef<"ScheduledJobRun", 'String'>;
    readonly resultSummary: Prisma.FieldRef<"ScheduledJobRun", 'Json'>;
    readonly errorMessage: Prisma.FieldRef<"ScheduledJobRun", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ScheduledJobRun", 'DateTime'>;
}
export type ScheduledJobRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRunWhereUniqueInput;
};
export type ScheduledJobRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRunWhereUniqueInput;
};
export type ScheduledJobRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRunWhereInput;
    orderBy?: Prisma.ScheduledJobRunOrderByWithRelationInput | Prisma.ScheduledJobRunOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRunScalarFieldEnum | Prisma.ScheduledJobRunScalarFieldEnum[];
};
export type ScheduledJobRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRunWhereInput;
    orderBy?: Prisma.ScheduledJobRunOrderByWithRelationInput | Prisma.ScheduledJobRunOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRunScalarFieldEnum | Prisma.ScheduledJobRunScalarFieldEnum[];
};
export type ScheduledJobRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRunWhereInput;
    orderBy?: Prisma.ScheduledJobRunOrderByWithRelationInput | Prisma.ScheduledJobRunOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRunScalarFieldEnum | Prisma.ScheduledJobRunScalarFieldEnum[];
};
export type ScheduledJobRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRunCreateInput, Prisma.ScheduledJobRunUncheckedCreateInput>;
};
export type ScheduledJobRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduledJobRunCreateManyInput | Prisma.ScheduledJobRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    data: Prisma.ScheduledJobRunCreateManyInput | Prisma.ScheduledJobRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduledJobRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRunUpdateInput, Prisma.ScheduledJobRunUncheckedUpdateInput>;
    where: Prisma.ScheduledJobRunWhereUniqueInput;
};
export type ScheduledJobRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduledJobRunUpdateManyMutationInput, Prisma.ScheduledJobRunUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobRunWhereInput;
    limit?: number;
};
export type ScheduledJobRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRunUpdateManyMutationInput, Prisma.ScheduledJobRunUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobRunWhereInput;
    limit?: number;
    include?: Prisma.ScheduledJobRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobRunCreateInput, Prisma.ScheduledJobRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduledJobRunUpdateInput, Prisma.ScheduledJobRunUncheckedUpdateInput>;
};
export type ScheduledJobRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRunWhereUniqueInput;
};
export type ScheduledJobRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRunWhereInput;
    limit?: number;
};
export type ScheduledJobRun$triggeredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ScheduledJobRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRunSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRunOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRunInclude<ExtArgs> | null;
};
