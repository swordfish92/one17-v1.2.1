import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduledJobPauseStateModel = runtime.Types.Result.DefaultSelection<Prisma.$ScheduledJobPauseStatePayload>;
export type AggregateScheduledJobPauseState = {
    _count: ScheduledJobPauseStateCountAggregateOutputType | null;
    _min: ScheduledJobPauseStateMinAggregateOutputType | null;
    _max: ScheduledJobPauseStateMaxAggregateOutputType | null;
};
export type ScheduledJobPauseStateMinAggregateOutputType = {
    jobCode: string | null;
    isPaused: boolean | null;
    pausedAt: Date | null;
    pausedByUserId: string | null;
    pauseReason: string | null;
    pauseWorkflowInstanceId: string | null;
    resumedAt: Date | null;
    resumedByUserId: string | null;
    updatedAt: Date | null;
};
export type ScheduledJobPauseStateMaxAggregateOutputType = {
    jobCode: string | null;
    isPaused: boolean | null;
    pausedAt: Date | null;
    pausedByUserId: string | null;
    pauseReason: string | null;
    pauseWorkflowInstanceId: string | null;
    resumedAt: Date | null;
    resumedByUserId: string | null;
    updatedAt: Date | null;
};
export type ScheduledJobPauseStateCountAggregateOutputType = {
    jobCode: number;
    isPaused: number;
    pausedAt: number;
    pausedByUserId: number;
    pauseReason: number;
    pauseWorkflowInstanceId: number;
    resumedAt: number;
    resumedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type ScheduledJobPauseStateMinAggregateInputType = {
    jobCode?: true;
    isPaused?: true;
    pausedAt?: true;
    pausedByUserId?: true;
    pauseReason?: true;
    pauseWorkflowInstanceId?: true;
    resumedAt?: true;
    resumedByUserId?: true;
    updatedAt?: true;
};
export type ScheduledJobPauseStateMaxAggregateInputType = {
    jobCode?: true;
    isPaused?: true;
    pausedAt?: true;
    pausedByUserId?: true;
    pauseReason?: true;
    pauseWorkflowInstanceId?: true;
    resumedAt?: true;
    resumedByUserId?: true;
    updatedAt?: true;
};
export type ScheduledJobPauseStateCountAggregateInputType = {
    jobCode?: true;
    isPaused?: true;
    pausedAt?: true;
    pausedByUserId?: true;
    pauseReason?: true;
    pauseWorkflowInstanceId?: true;
    resumedAt?: true;
    resumedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type ScheduledJobPauseStateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    orderBy?: Prisma.ScheduledJobPauseStateOrderByWithRelationInput | Prisma.ScheduledJobPauseStateOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduledJobPauseStateCountAggregateInputType;
    _min?: ScheduledJobPauseStateMinAggregateInputType;
    _max?: ScheduledJobPauseStateMaxAggregateInputType;
};
export type GetScheduledJobPauseStateAggregateType<T extends ScheduledJobPauseStateAggregateArgs> = {
    [P in keyof T & keyof AggregateScheduledJobPauseState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScheduledJobPauseState[P]> : Prisma.GetScalarType<T[P], AggregateScheduledJobPauseState[P]>;
};
export type ScheduledJobPauseStateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    orderBy?: Prisma.ScheduledJobPauseStateOrderByWithAggregationInput | Prisma.ScheduledJobPauseStateOrderByWithAggregationInput[];
    by: Prisma.ScheduledJobPauseStateScalarFieldEnum[] | Prisma.ScheduledJobPauseStateScalarFieldEnum;
    having?: Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduledJobPauseStateCountAggregateInputType | true;
    _min?: ScheduledJobPauseStateMinAggregateInputType;
    _max?: ScheduledJobPauseStateMaxAggregateInputType;
};
export type ScheduledJobPauseStateGroupByOutputType = {
    jobCode: string;
    isPaused: boolean;
    pausedAt: Date | null;
    pausedByUserId: string | null;
    pauseReason: string | null;
    pauseWorkflowInstanceId: string | null;
    resumedAt: Date | null;
    resumedByUserId: string | null;
    updatedAt: Date;
    _count: ScheduledJobPauseStateCountAggregateOutputType | null;
    _min: ScheduledJobPauseStateMinAggregateOutputType | null;
    _max: ScheduledJobPauseStateMaxAggregateOutputType | null;
};
export type GetScheduledJobPauseStateGroupByPayload<T extends ScheduledJobPauseStateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduledJobPauseStateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduledJobPauseStateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduledJobPauseStateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduledJobPauseStateGroupByOutputType[P]>;
}>>;
export type ScheduledJobPauseStateWhereInput = {
    AND?: Prisma.ScheduledJobPauseStateWhereInput | Prisma.ScheduledJobPauseStateWhereInput[];
    OR?: Prisma.ScheduledJobPauseStateWhereInput[];
    NOT?: Prisma.ScheduledJobPauseStateWhereInput | Prisma.ScheduledJobPauseStateWhereInput[];
    jobCode?: Prisma.StringFilter<"ScheduledJobPauseState"> | string;
    isPaused?: Prisma.BoolFilter<"ScheduledJobPauseState"> | boolean;
    pausedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    pausedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseReason?: Prisma.StringNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    resumedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    resumedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobPauseState"> | Date | string;
    pausedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    resumedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ScheduledJobPauseStateOrderByWithRelationInput = {
    jobCode?: Prisma.SortOrder;
    isPaused?: Prisma.SortOrder;
    pausedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pausedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pauseReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    pauseWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pausedBy?: Prisma.AppUserOrderByWithRelationInput;
    resumedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ScheduledJobPauseStateWhereUniqueInput = Prisma.AtLeast<{
    jobCode?: string;
    AND?: Prisma.ScheduledJobPauseStateWhereInput | Prisma.ScheduledJobPauseStateWhereInput[];
    OR?: Prisma.ScheduledJobPauseStateWhereInput[];
    NOT?: Prisma.ScheduledJobPauseStateWhereInput | Prisma.ScheduledJobPauseStateWhereInput[];
    isPaused?: Prisma.BoolFilter<"ScheduledJobPauseState"> | boolean;
    pausedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    pausedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseReason?: Prisma.StringNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    resumedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    resumedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobPauseState"> | Date | string;
    pausedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    resumedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "jobCode">;
export type ScheduledJobPauseStateOrderByWithAggregationInput = {
    jobCode?: Prisma.SortOrder;
    isPaused?: Prisma.SortOrder;
    pausedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pausedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pauseReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    pauseWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScheduledJobPauseStateCountOrderByAggregateInput;
    _max?: Prisma.ScheduledJobPauseStateMaxOrderByAggregateInput;
    _min?: Prisma.ScheduledJobPauseStateMinOrderByAggregateInput;
};
export type ScheduledJobPauseStateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput | Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput | Prisma.ScheduledJobPauseStateScalarWhereWithAggregatesInput[];
    jobCode?: Prisma.StringWithAggregatesFilter<"ScheduledJobPauseState"> | string;
    isPaused?: Prisma.BoolWithAggregatesFilter<"ScheduledJobPauseState"> | boolean;
    pausedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScheduledJobPauseState"> | Date | string | null;
    pausedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobPauseState"> | string | null;
    pauseReason?: Prisma.StringNullableWithAggregatesFilter<"ScheduledJobPauseState"> | string | null;
    pauseWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobPauseState"> | string | null;
    resumedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScheduledJobPauseState"> | Date | string | null;
    resumedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobPauseState"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ScheduledJobPauseState"> | Date | string;
};
export type ScheduledJobPauseStateCreateInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    updatedAt?: Date | string;
    pausedBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsPausedInput;
    resumedBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsResumedInput;
};
export type ScheduledJobPauseStateUncheckedCreateInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pausedByUserId?: string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    resumedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateUpdateInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pausedBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsPausedNestedInput;
    resumedBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsResumedNestedInput;
};
export type ScheduledJobPauseStateUncheckedUpdateInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pausedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resumedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateCreateManyInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pausedByUserId?: string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    resumedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateUpdateManyMutationInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateUncheckedUpdateManyInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pausedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resumedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateListRelationFilter = {
    every?: Prisma.ScheduledJobPauseStateWhereInput;
    some?: Prisma.ScheduledJobPauseStateWhereInput;
    none?: Prisma.ScheduledJobPauseStateWhereInput;
};
export type ScheduledJobPauseStateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScheduledJobPauseStateCountOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isPaused?: Prisma.SortOrder;
    pausedAt?: Prisma.SortOrder;
    pausedByUserId?: Prisma.SortOrder;
    pauseReason?: Prisma.SortOrder;
    pauseWorkflowInstanceId?: Prisma.SortOrder;
    resumedAt?: Prisma.SortOrder;
    resumedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobPauseStateMaxOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isPaused?: Prisma.SortOrder;
    pausedAt?: Prisma.SortOrder;
    pausedByUserId?: Prisma.SortOrder;
    pauseReason?: Prisma.SortOrder;
    pauseWorkflowInstanceId?: Prisma.SortOrder;
    resumedAt?: Prisma.SortOrder;
    resumedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobPauseStateMinOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isPaused?: Prisma.SortOrder;
    pausedAt?: Prisma.SortOrder;
    pausedByUserId?: Prisma.SortOrder;
    pauseReason?: Prisma.SortOrder;
    pauseWorkflowInstanceId?: Prisma.SortOrder;
    resumedAt?: Prisma.SortOrder;
    resumedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobPauseStateCreateNestedManyWithoutPausedByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyPausedByInputEnvelope;
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
};
export type ScheduledJobPauseStateCreateNestedManyWithoutResumedByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyResumedByInputEnvelope;
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
};
export type ScheduledJobPauseStateUncheckedCreateNestedManyWithoutPausedByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyPausedByInputEnvelope;
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
};
export type ScheduledJobPauseStateUncheckedCreateNestedManyWithoutResumedByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyResumedByInputEnvelope;
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
};
export type ScheduledJobPauseStateUpdateManyWithoutPausedByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput[];
    upsert?: Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutPausedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyPausedByInputEnvelope;
    set?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    delete?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    update?: Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutPausedByInput[];
    updateMany?: Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutPausedByInput[];
    deleteMany?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
};
export type ScheduledJobPauseStateUpdateManyWithoutResumedByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput[];
    upsert?: Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutResumedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyResumedByInputEnvelope;
    set?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    delete?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    update?: Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutResumedByInput[];
    updateMany?: Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutResumedByInput[];
    deleteMany?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
};
export type ScheduledJobPauseStateUncheckedUpdateManyWithoutPausedByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput[];
    upsert?: Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutPausedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyPausedByInputEnvelope;
    set?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    delete?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    update?: Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutPausedByInput[];
    updateMany?: Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutPausedByInput | Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutPausedByInput[];
    deleteMany?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
};
export type ScheduledJobPauseStateUncheckedUpdateManyWithoutResumedByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput> | Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput[] | Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput[];
    connectOrCreate?: Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput | Prisma.ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput[];
    upsert?: Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpsertWithWhereUniqueWithoutResumedByInput[];
    createMany?: Prisma.ScheduledJobPauseStateCreateManyResumedByInputEnvelope;
    set?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    delete?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    connect?: Prisma.ScheduledJobPauseStateWhereUniqueInput | Prisma.ScheduledJobPauseStateWhereUniqueInput[];
    update?: Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpdateWithWhereUniqueWithoutResumedByInput[];
    updateMany?: Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutResumedByInput | Prisma.ScheduledJobPauseStateUpdateManyWithWhereWithoutResumedByInput[];
    deleteMany?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
};
export type ScheduledJobPauseStateCreateWithoutPausedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    updatedAt?: Date | string;
    resumedBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsResumedInput;
};
export type ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    resumedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateCreateOrConnectWithoutPausedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput>;
};
export type ScheduledJobPauseStateCreateManyPausedByInputEnvelope = {
    data: Prisma.ScheduledJobPauseStateCreateManyPausedByInput | Prisma.ScheduledJobPauseStateCreateManyPausedByInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobPauseStateCreateWithoutResumedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    updatedAt?: Date | string;
    pausedBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsPausedInput;
};
export type ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pausedByUserId?: string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateCreateOrConnectWithoutResumedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput>;
};
export type ScheduledJobPauseStateCreateManyResumedByInputEnvelope = {
    data: Prisma.ScheduledJobPauseStateCreateManyResumedByInput | Prisma.ScheduledJobPauseStateCreateManyResumedByInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobPauseStateUpsertWithWhereUniqueWithoutPausedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedUpdateWithoutPausedByInput>;
    create: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutPausedByInput>;
};
export type ScheduledJobPauseStateUpdateWithWhereUniqueWithoutPausedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateWithoutPausedByInput, Prisma.ScheduledJobPauseStateUncheckedUpdateWithoutPausedByInput>;
};
export type ScheduledJobPauseStateUpdateManyWithWhereWithoutPausedByInput = {
    where: Prisma.ScheduledJobPauseStateScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateManyMutationInput, Prisma.ScheduledJobPauseStateUncheckedUpdateManyWithoutPausedByInput>;
};
export type ScheduledJobPauseStateScalarWhereInput = {
    AND?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
    OR?: Prisma.ScheduledJobPauseStateScalarWhereInput[];
    NOT?: Prisma.ScheduledJobPauseStateScalarWhereInput | Prisma.ScheduledJobPauseStateScalarWhereInput[];
    jobCode?: Prisma.StringFilter<"ScheduledJobPauseState"> | string;
    isPaused?: Prisma.BoolFilter<"ScheduledJobPauseState"> | boolean;
    pausedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    pausedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseReason?: Prisma.StringNullableFilter<"ScheduledJobPauseState"> | string | null;
    pauseWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    resumedAt?: Prisma.DateTimeNullableFilter<"ScheduledJobPauseState"> | Date | string | null;
    resumedByUserId?: Prisma.UuidNullableFilter<"ScheduledJobPauseState"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobPauseState"> | Date | string;
};
export type ScheduledJobPauseStateUpsertWithWhereUniqueWithoutResumedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedUpdateWithoutResumedByInput>;
    create: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedCreateWithoutResumedByInput>;
};
export type ScheduledJobPauseStateUpdateWithWhereUniqueWithoutResumedByInput = {
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateWithoutResumedByInput, Prisma.ScheduledJobPauseStateUncheckedUpdateWithoutResumedByInput>;
};
export type ScheduledJobPauseStateUpdateManyWithWhereWithoutResumedByInput = {
    where: Prisma.ScheduledJobPauseStateScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateManyMutationInput, Prisma.ScheduledJobPauseStateUncheckedUpdateManyWithoutResumedByInput>;
};
export type ScheduledJobPauseStateCreateManyPausedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    resumedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateCreateManyResumedByInput = {
    jobCode: string;
    isPaused?: boolean;
    pausedAt?: Date | string | null;
    pausedByUserId?: string | null;
    pauseReason?: string | null;
    pauseWorkflowInstanceId?: string | null;
    resumedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobPauseStateUpdateWithoutPausedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resumedBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsResumedNestedInput;
};
export type ScheduledJobPauseStateUncheckedUpdateWithoutPausedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resumedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateUncheckedUpdateManyWithoutPausedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resumedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateUpdateWithoutResumedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pausedBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsPausedNestedInput;
};
export type ScheduledJobPauseStateUncheckedUpdateWithoutResumedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pausedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateUncheckedUpdateManyWithoutResumedByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaused?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pausedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pausedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pauseWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobPauseStateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isPaused?: boolean;
    pausedAt?: boolean;
    pausedByUserId?: boolean;
    pauseReason?: boolean;
    pauseWorkflowInstanceId?: boolean;
    resumedAt?: boolean;
    resumedByUserId?: boolean;
    updatedAt?: boolean;
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobPauseState"]>;
export type ScheduledJobPauseStateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isPaused?: boolean;
    pausedAt?: boolean;
    pausedByUserId?: boolean;
    pauseReason?: boolean;
    pauseWorkflowInstanceId?: boolean;
    resumedAt?: boolean;
    resumedByUserId?: boolean;
    updatedAt?: boolean;
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobPauseState"]>;
export type ScheduledJobPauseStateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isPaused?: boolean;
    pausedAt?: boolean;
    pausedByUserId?: boolean;
    pauseReason?: boolean;
    pauseWorkflowInstanceId?: boolean;
    resumedAt?: boolean;
    resumedByUserId?: boolean;
    updatedAt?: boolean;
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobPauseState"]>;
export type ScheduledJobPauseStateSelectScalar = {
    jobCode?: boolean;
    isPaused?: boolean;
    pausedAt?: boolean;
    pausedByUserId?: boolean;
    pauseReason?: boolean;
    pauseWorkflowInstanceId?: boolean;
    resumedAt?: boolean;
    resumedByUserId?: boolean;
    updatedAt?: boolean;
};
export type ScheduledJobPauseStateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"jobCode" | "isPaused" | "pausedAt" | "pausedByUserId" | "pauseReason" | "pauseWorkflowInstanceId" | "resumedAt" | "resumedByUserId" | "updatedAt", ExtArgs["result"]["scheduledJobPauseState"]>;
export type ScheduledJobPauseStateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
};
export type ScheduledJobPauseStateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
};
export type ScheduledJobPauseStateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pausedBy?: boolean | Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>;
    resumedBy?: boolean | Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>;
};
export type $ScheduledJobPauseStatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScheduledJobPauseState";
    objects: {
        pausedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        resumedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        jobCode: string;
        isPaused: boolean;
        pausedAt: Date | null;
        pausedByUserId: string | null;
        pauseReason: string | null;
        pauseWorkflowInstanceId: string | null;
        resumedAt: Date | null;
        resumedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["scheduledJobPauseState"]>;
    composites: {};
};
export type ScheduledJobPauseStateGetPayload<S extends boolean | null | undefined | ScheduledJobPauseStateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload, S>;
export type ScheduledJobPauseStateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduledJobPauseStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduledJobPauseStateCountAggregateInputType | true;
};
export interface ScheduledJobPauseStateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScheduledJobPauseState'];
        meta: {
            name: 'ScheduledJobPauseState';
        };
    };
    findUnique<T extends ScheduledJobPauseStateFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduledJobPauseStateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduledJobPauseStateFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduledJobPauseStateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduledJobPauseStateFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduledJobPauseStateCreateArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduledJobPauseStateCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduledJobPauseStateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduledJobPauseStateDeleteArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduledJobPauseStateUpdateArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduledJobPauseStateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobPauseStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduledJobPauseStateUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduledJobPauseStateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduledJobPauseStateUpsertArgs>(args: Prisma.SelectSubset<T, ScheduledJobPauseStateUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobPauseStateClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobPauseStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduledJobPauseStateCountArgs>(args?: Prisma.Subset<T, ScheduledJobPauseStateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduledJobPauseStateCountAggregateOutputType> : number>;
    aggregate<T extends ScheduledJobPauseStateAggregateArgs>(args: Prisma.Subset<T, ScheduledJobPauseStateAggregateArgs>): Prisma.PrismaPromise<GetScheduledJobPauseStateAggregateType<T>>;
    groupBy<T extends ScheduledJobPauseStateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduledJobPauseStateGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduledJobPauseStateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduledJobPauseStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledJobPauseStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduledJobPauseStateFieldRefs;
}
export interface Prisma__ScheduledJobPauseStateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pausedBy<T extends Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduledJobPauseState$pausedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    resumedBy<T extends Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduledJobPauseState$resumedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduledJobPauseStateFieldRefs {
    readonly jobCode: Prisma.FieldRef<"ScheduledJobPauseState", 'String'>;
    readonly isPaused: Prisma.FieldRef<"ScheduledJobPauseState", 'Boolean'>;
    readonly pausedAt: Prisma.FieldRef<"ScheduledJobPauseState", 'DateTime'>;
    readonly pausedByUserId: Prisma.FieldRef<"ScheduledJobPauseState", 'String'>;
    readonly pauseReason: Prisma.FieldRef<"ScheduledJobPauseState", 'String'>;
    readonly pauseWorkflowInstanceId: Prisma.FieldRef<"ScheduledJobPauseState", 'String'>;
    readonly resumedAt: Prisma.FieldRef<"ScheduledJobPauseState", 'DateTime'>;
    readonly resumedByUserId: Prisma.FieldRef<"ScheduledJobPauseState", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"ScheduledJobPauseState", 'DateTime'>;
}
export type ScheduledJobPauseStateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
};
export type ScheduledJobPauseStateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
};
export type ScheduledJobPauseStateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    orderBy?: Prisma.ScheduledJobPauseStateOrderByWithRelationInput | Prisma.ScheduledJobPauseStateOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobPauseStateScalarFieldEnum | Prisma.ScheduledJobPauseStateScalarFieldEnum[];
};
export type ScheduledJobPauseStateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    orderBy?: Prisma.ScheduledJobPauseStateOrderByWithRelationInput | Prisma.ScheduledJobPauseStateOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobPauseStateScalarFieldEnum | Prisma.ScheduledJobPauseStateScalarFieldEnum[];
};
export type ScheduledJobPauseStateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    orderBy?: Prisma.ScheduledJobPauseStateOrderByWithRelationInput | Prisma.ScheduledJobPauseStateOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobPauseStateScalarFieldEnum | Prisma.ScheduledJobPauseStateScalarFieldEnum[];
};
export type ScheduledJobPauseStateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateInput, Prisma.ScheduledJobPauseStateUncheckedCreateInput>;
};
export type ScheduledJobPauseStateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduledJobPauseStateCreateManyInput | Prisma.ScheduledJobPauseStateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobPauseStateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    data: Prisma.ScheduledJobPauseStateCreateManyInput | Prisma.ScheduledJobPauseStateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduledJobPauseStateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobPauseStateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateInput, Prisma.ScheduledJobPauseStateUncheckedUpdateInput>;
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
};
export type ScheduledJobPauseStateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateManyMutationInput, Prisma.ScheduledJobPauseStateUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    limit?: number;
};
export type ScheduledJobPauseStateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateManyMutationInput, Prisma.ScheduledJobPauseStateUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    limit?: number;
    include?: Prisma.ScheduledJobPauseStateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobPauseStateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobPauseStateCreateInput, Prisma.ScheduledJobPauseStateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduledJobPauseStateUpdateInput, Prisma.ScheduledJobPauseStateUncheckedUpdateInput>;
};
export type ScheduledJobPauseStateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobPauseStateWhereUniqueInput;
};
export type ScheduledJobPauseStateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobPauseStateWhereInput;
    limit?: number;
};
export type ScheduledJobPauseState$pausedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ScheduledJobPauseState$resumedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ScheduledJobPauseStateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobPauseStateSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobPauseStateOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobPauseStateInclude<ExtArgs> | null;
};
