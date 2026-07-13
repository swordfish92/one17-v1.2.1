import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduledJobRegistrationModel = runtime.Types.Result.DefaultSelection<Prisma.$ScheduledJobRegistrationPayload>;
export type AggregateScheduledJobRegistration = {
    _count: ScheduledJobRegistrationCountAggregateOutputType | null;
    _min: ScheduledJobRegistrationMinAggregateOutputType | null;
    _max: ScheduledJobRegistrationMaxAggregateOutputType | null;
};
export type ScheduledJobRegistrationMinAggregateOutputType = {
    jobCode: string | null;
    isRetired: boolean | null;
    registeredAt: Date | null;
    registeredByUserId: string | null;
    retiredAt: Date | null;
    retiredByUserId: string | null;
    retireReason: string | null;
    retireWorkflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type ScheduledJobRegistrationMaxAggregateOutputType = {
    jobCode: string | null;
    isRetired: boolean | null;
    registeredAt: Date | null;
    registeredByUserId: string | null;
    retiredAt: Date | null;
    retiredByUserId: string | null;
    retireReason: string | null;
    retireWorkflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type ScheduledJobRegistrationCountAggregateOutputType = {
    jobCode: number;
    isRetired: number;
    registeredAt: number;
    registeredByUserId: number;
    retiredAt: number;
    retiredByUserId: number;
    retireReason: number;
    retireWorkflowInstanceId: number;
    updatedAt: number;
    _all: number;
};
export type ScheduledJobRegistrationMinAggregateInputType = {
    jobCode?: true;
    isRetired?: true;
    registeredAt?: true;
    registeredByUserId?: true;
    retiredAt?: true;
    retiredByUserId?: true;
    retireReason?: true;
    retireWorkflowInstanceId?: true;
    updatedAt?: true;
};
export type ScheduledJobRegistrationMaxAggregateInputType = {
    jobCode?: true;
    isRetired?: true;
    registeredAt?: true;
    registeredByUserId?: true;
    retiredAt?: true;
    retiredByUserId?: true;
    retireReason?: true;
    retireWorkflowInstanceId?: true;
    updatedAt?: true;
};
export type ScheduledJobRegistrationCountAggregateInputType = {
    jobCode?: true;
    isRetired?: true;
    registeredAt?: true;
    registeredByUserId?: true;
    retiredAt?: true;
    retiredByUserId?: true;
    retireReason?: true;
    retireWorkflowInstanceId?: true;
    updatedAt?: true;
    _all?: true;
};
export type ScheduledJobRegistrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    orderBy?: Prisma.ScheduledJobRegistrationOrderByWithRelationInput | Prisma.ScheduledJobRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduledJobRegistrationCountAggregateInputType;
    _min?: ScheduledJobRegistrationMinAggregateInputType;
    _max?: ScheduledJobRegistrationMaxAggregateInputType;
};
export type GetScheduledJobRegistrationAggregateType<T extends ScheduledJobRegistrationAggregateArgs> = {
    [P in keyof T & keyof AggregateScheduledJobRegistration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScheduledJobRegistration[P]> : Prisma.GetScalarType<T[P], AggregateScheduledJobRegistration[P]>;
};
export type ScheduledJobRegistrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    orderBy?: Prisma.ScheduledJobRegistrationOrderByWithAggregationInput | Prisma.ScheduledJobRegistrationOrderByWithAggregationInput[];
    by: Prisma.ScheduledJobRegistrationScalarFieldEnum[] | Prisma.ScheduledJobRegistrationScalarFieldEnum;
    having?: Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduledJobRegistrationCountAggregateInputType | true;
    _min?: ScheduledJobRegistrationMinAggregateInputType;
    _max?: ScheduledJobRegistrationMaxAggregateInputType;
};
export type ScheduledJobRegistrationGroupByOutputType = {
    jobCode: string;
    isRetired: boolean;
    registeredAt: Date | null;
    registeredByUserId: string | null;
    retiredAt: Date | null;
    retiredByUserId: string | null;
    retireReason: string | null;
    retireWorkflowInstanceId: string | null;
    updatedAt: Date;
    _count: ScheduledJobRegistrationCountAggregateOutputType | null;
    _min: ScheduledJobRegistrationMinAggregateOutputType | null;
    _max: ScheduledJobRegistrationMaxAggregateOutputType | null;
};
export type GetScheduledJobRegistrationGroupByPayload<T extends ScheduledJobRegistrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduledJobRegistrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduledJobRegistrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduledJobRegistrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduledJobRegistrationGroupByOutputType[P]>;
}>>;
export type ScheduledJobRegistrationWhereInput = {
    AND?: Prisma.ScheduledJobRegistrationWhereInput | Prisma.ScheduledJobRegistrationWhereInput[];
    OR?: Prisma.ScheduledJobRegistrationWhereInput[];
    NOT?: Prisma.ScheduledJobRegistrationWhereInput | Prisma.ScheduledJobRegistrationWhereInput[];
    jobCode?: Prisma.StringFilter<"ScheduledJobRegistration"> | string;
    isRetired?: Prisma.BoolFilter<"ScheduledJobRegistration"> | boolean;
    registeredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    registeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retiredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    retiredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireReason?: Prisma.StringNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobRegistration"> | Date | string;
    registeredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    retiredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ScheduledJobRegistrationOrderByWithRelationInput = {
    jobCode?: Prisma.SortOrder;
    isRetired?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    retiredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    retiredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    retireReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    retireWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    registeredBy?: Prisma.AppUserOrderByWithRelationInput;
    retiredBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ScheduledJobRegistrationWhereUniqueInput = Prisma.AtLeast<{
    jobCode?: string;
    AND?: Prisma.ScheduledJobRegistrationWhereInput | Prisma.ScheduledJobRegistrationWhereInput[];
    OR?: Prisma.ScheduledJobRegistrationWhereInput[];
    NOT?: Prisma.ScheduledJobRegistrationWhereInput | Prisma.ScheduledJobRegistrationWhereInput[];
    isRetired?: Prisma.BoolFilter<"ScheduledJobRegistration"> | boolean;
    registeredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    registeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retiredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    retiredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireReason?: Prisma.StringNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobRegistration"> | Date | string;
    registeredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    retiredBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "jobCode">;
export type ScheduledJobRegistrationOrderByWithAggregationInput = {
    jobCode?: Prisma.SortOrder;
    isRetired?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    retiredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    retiredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    retireReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    retireWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScheduledJobRegistrationCountOrderByAggregateInput;
    _max?: Prisma.ScheduledJobRegistrationMaxOrderByAggregateInput;
    _min?: Prisma.ScheduledJobRegistrationMinOrderByAggregateInput;
};
export type ScheduledJobRegistrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput | Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput | Prisma.ScheduledJobRegistrationScalarWhereWithAggregatesInput[];
    jobCode?: Prisma.StringWithAggregatesFilter<"ScheduledJobRegistration"> | string;
    isRetired?: Prisma.BoolWithAggregatesFilter<"ScheduledJobRegistration"> | boolean;
    registeredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScheduledJobRegistration"> | Date | string | null;
    registeredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobRegistration"> | string | null;
    retiredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScheduledJobRegistration"> | Date | string | null;
    retiredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobRegistration"> | string | null;
    retireReason?: Prisma.StringNullableWithAggregatesFilter<"ScheduledJobRegistration"> | string | null;
    retireWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ScheduledJobRegistration"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ScheduledJobRegistration"> | Date | string;
};
export type ScheduledJobRegistrationCreateInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    retiredAt?: Date | string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
    registeredBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsRegisteredInput;
    retiredBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsRetiredInput;
};
export type ScheduledJobRegistrationUncheckedCreateInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    registeredByUserId?: string | null;
    retiredAt?: Date | string | null;
    retiredByUserId?: string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationUpdateInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsRegisteredNestedInput;
    retiredBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsRetiredNestedInput;
};
export type ScheduledJobRegistrationUncheckedUpdateInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationCreateManyInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    registeredByUserId?: string | null;
    retiredAt?: Date | string | null;
    retiredByUserId?: string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationUpdateManyMutationInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationUncheckedUpdateManyInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationListRelationFilter = {
    every?: Prisma.ScheduledJobRegistrationWhereInput;
    some?: Prisma.ScheduledJobRegistrationWhereInput;
    none?: Prisma.ScheduledJobRegistrationWhereInput;
};
export type ScheduledJobRegistrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScheduledJobRegistrationCountOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isRetired?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    registeredByUserId?: Prisma.SortOrder;
    retiredAt?: Prisma.SortOrder;
    retiredByUserId?: Prisma.SortOrder;
    retireReason?: Prisma.SortOrder;
    retireWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobRegistrationMaxOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isRetired?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    registeredByUserId?: Prisma.SortOrder;
    retiredAt?: Prisma.SortOrder;
    retiredByUserId?: Prisma.SortOrder;
    retireReason?: Prisma.SortOrder;
    retireWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobRegistrationMinOrderByAggregateInput = {
    jobCode?: Prisma.SortOrder;
    isRetired?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    registeredByUserId?: Prisma.SortOrder;
    retiredAt?: Prisma.SortOrder;
    retiredByUserId?: Prisma.SortOrder;
    retireReason?: Prisma.SortOrder;
    retireWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduledJobRegistrationCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
};
export type ScheduledJobRegistrationCreateNestedManyWithoutRetiredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRetiredByInputEnvelope;
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
};
export type ScheduledJobRegistrationUncheckedCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
};
export type ScheduledJobRegistrationUncheckedCreateNestedManyWithoutRetiredByInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRetiredByInputEnvelope;
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
};
export type ScheduledJobRegistrationUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRegisteredByInputEnvelope;
    set?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    update?: Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
};
export type ScheduledJobRegistrationUpdateManyWithoutRetiredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput[];
    upsert?: Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRetiredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRetiredByInputEnvelope;
    set?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    update?: Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRetiredByInput[];
    updateMany?: Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRetiredByInput[];
    deleteMany?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
};
export type ScheduledJobRegistrationUncheckedUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRegisteredByInputEnvelope;
    set?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    update?: Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRegisteredByInput | Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
};
export type ScheduledJobRegistrationUncheckedUpdateManyWithoutRetiredByNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput> | Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput[] | Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput[];
    connectOrCreate?: Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput | Prisma.ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput[];
    upsert?: Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRetiredByInput[];
    createMany?: Prisma.ScheduledJobRegistrationCreateManyRetiredByInputEnvelope;
    set?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    disconnect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    delete?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    connect?: Prisma.ScheduledJobRegistrationWhereUniqueInput | Prisma.ScheduledJobRegistrationWhereUniqueInput[];
    update?: Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRetiredByInput[];
    updateMany?: Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRetiredByInput | Prisma.ScheduledJobRegistrationUpdateManyWithWhereWithoutRetiredByInput[];
    deleteMany?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
};
export type ScheduledJobRegistrationCreateWithoutRegisteredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    retiredAt?: Date | string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
    retiredBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsRetiredInput;
};
export type ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    retiredAt?: Date | string | null;
    retiredByUserId?: string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationCreateOrConnectWithoutRegisteredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput>;
};
export type ScheduledJobRegistrationCreateManyRegisteredByInputEnvelope = {
    data: Prisma.ScheduledJobRegistrationCreateManyRegisteredByInput | Prisma.ScheduledJobRegistrationCreateManyRegisteredByInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobRegistrationCreateWithoutRetiredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    retiredAt?: Date | string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
    registeredBy?: Prisma.AppUserCreateNestedOneWithoutScheduledJobsRegisteredInput;
};
export type ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    registeredByUserId?: string | null;
    retiredAt?: Date | string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationCreateOrConnectWithoutRetiredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput>;
};
export type ScheduledJobRegistrationCreateManyRetiredByInputEnvelope = {
    data: Prisma.ScheduledJobRegistrationCreateManyRetiredByInput | Prisma.ScheduledJobRegistrationCreateManyRetiredByInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedUpdateWithoutRegisteredByInput>;
    create: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRegisteredByInput>;
};
export type ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateWithoutRegisteredByInput, Prisma.ScheduledJobRegistrationUncheckedUpdateWithoutRegisteredByInput>;
};
export type ScheduledJobRegistrationUpdateManyWithWhereWithoutRegisteredByInput = {
    where: Prisma.ScheduledJobRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateManyMutationInput, Prisma.ScheduledJobRegistrationUncheckedUpdateManyWithoutRegisteredByInput>;
};
export type ScheduledJobRegistrationScalarWhereInput = {
    AND?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
    OR?: Prisma.ScheduledJobRegistrationScalarWhereInput[];
    NOT?: Prisma.ScheduledJobRegistrationScalarWhereInput | Prisma.ScheduledJobRegistrationScalarWhereInput[];
    jobCode?: Prisma.StringFilter<"ScheduledJobRegistration"> | string;
    isRetired?: Prisma.BoolFilter<"ScheduledJobRegistration"> | boolean;
    registeredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    registeredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retiredAt?: Prisma.DateTimeNullableFilter<"ScheduledJobRegistration"> | Date | string | null;
    retiredByUserId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireReason?: Prisma.StringNullableFilter<"ScheduledJobRegistration"> | string | null;
    retireWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScheduledJobRegistration"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScheduledJobRegistration"> | Date | string;
};
export type ScheduledJobRegistrationUpsertWithWhereUniqueWithoutRetiredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedUpdateWithoutRetiredByInput>;
    create: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedCreateWithoutRetiredByInput>;
};
export type ScheduledJobRegistrationUpdateWithWhereUniqueWithoutRetiredByInput = {
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateWithoutRetiredByInput, Prisma.ScheduledJobRegistrationUncheckedUpdateWithoutRetiredByInput>;
};
export type ScheduledJobRegistrationUpdateManyWithWhereWithoutRetiredByInput = {
    where: Prisma.ScheduledJobRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateManyMutationInput, Prisma.ScheduledJobRegistrationUncheckedUpdateManyWithoutRetiredByInput>;
};
export type ScheduledJobRegistrationCreateManyRegisteredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    retiredAt?: Date | string | null;
    retiredByUserId?: string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationCreateManyRetiredByInput = {
    jobCode: string;
    isRetired?: boolean;
    registeredAt?: Date | string | null;
    registeredByUserId?: string | null;
    retiredAt?: Date | string | null;
    retireReason?: string | null;
    retireWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type ScheduledJobRegistrationUpdateWithoutRegisteredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    retiredBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsRetiredNestedInput;
};
export type ScheduledJobRegistrationUncheckedUpdateWithoutRegisteredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationUncheckedUpdateManyWithoutRegisteredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationUpdateWithoutRetiredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registeredBy?: Prisma.AppUserUpdateOneWithoutScheduledJobsRegisteredNestedInput;
};
export type ScheduledJobRegistrationUncheckedUpdateWithoutRetiredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationUncheckedUpdateManyWithoutRetiredByInput = {
    jobCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isRetired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    registeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registeredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    retireReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retireWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduledJobRegistrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isRetired?: boolean;
    registeredAt?: boolean;
    registeredByUserId?: boolean;
    retiredAt?: boolean;
    retiredByUserId?: boolean;
    retireReason?: boolean;
    retireWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRegistration"]>;
export type ScheduledJobRegistrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isRetired?: boolean;
    registeredAt?: boolean;
    registeredByUserId?: boolean;
    retiredAt?: boolean;
    retiredByUserId?: boolean;
    retireReason?: boolean;
    retireWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRegistration"]>;
export type ScheduledJobRegistrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    jobCode?: boolean;
    isRetired?: boolean;
    registeredAt?: boolean;
    registeredByUserId?: boolean;
    retiredAt?: boolean;
    retiredByUserId?: boolean;
    retireReason?: boolean;
    retireWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
}, ExtArgs["result"]["scheduledJobRegistration"]>;
export type ScheduledJobRegistrationSelectScalar = {
    jobCode?: boolean;
    isRetired?: boolean;
    registeredAt?: boolean;
    registeredByUserId?: boolean;
    retiredAt?: boolean;
    retiredByUserId?: boolean;
    retireReason?: boolean;
    retireWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
};
export type ScheduledJobRegistrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"jobCode" | "isRetired" | "registeredAt" | "registeredByUserId" | "retiredAt" | "retiredByUserId" | "retireReason" | "retireWorkflowInstanceId" | "updatedAt", ExtArgs["result"]["scheduledJobRegistration"]>;
export type ScheduledJobRegistrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
};
export type ScheduledJobRegistrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
};
export type ScheduledJobRegistrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registeredBy?: boolean | Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>;
    retiredBy?: boolean | Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>;
};
export type $ScheduledJobRegistrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScheduledJobRegistration";
    objects: {
        registeredBy: Prisma.$AppUserPayload<ExtArgs> | null;
        retiredBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        jobCode: string;
        isRetired: boolean;
        registeredAt: Date | null;
        registeredByUserId: string | null;
        retiredAt: Date | null;
        retiredByUserId: string | null;
        retireReason: string | null;
        retireWorkflowInstanceId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["scheduledJobRegistration"]>;
    composites: {};
};
export type ScheduledJobRegistrationGetPayload<S extends boolean | null | undefined | ScheduledJobRegistrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload, S>;
export type ScheduledJobRegistrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduledJobRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduledJobRegistrationCountAggregateInputType | true;
};
export interface ScheduledJobRegistrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScheduledJobRegistration'];
        meta: {
            name: 'ScheduledJobRegistration';
        };
    };
    findUnique<T extends ScheduledJobRegistrationFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduledJobRegistrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduledJobRegistrationFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduledJobRegistrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduledJobRegistrationFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduledJobRegistrationCreateArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduledJobRegistrationCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduledJobRegistrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduledJobRegistrationDeleteArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduledJobRegistrationUpdateArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduledJobRegistrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduledJobRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduledJobRegistrationUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduledJobRegistrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduledJobRegistrationUpsertArgs>(args: Prisma.SelectSubset<T, ScheduledJobRegistrationUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduledJobRegistrationClient<runtime.Types.Result.GetResult<Prisma.$ScheduledJobRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduledJobRegistrationCountArgs>(args?: Prisma.Subset<T, ScheduledJobRegistrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduledJobRegistrationCountAggregateOutputType> : number>;
    aggregate<T extends ScheduledJobRegistrationAggregateArgs>(args: Prisma.Subset<T, ScheduledJobRegistrationAggregateArgs>): Prisma.PrismaPromise<GetScheduledJobRegistrationAggregateType<T>>;
    groupBy<T extends ScheduledJobRegistrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduledJobRegistrationGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduledJobRegistrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduledJobRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledJobRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduledJobRegistrationFieldRefs;
}
export interface Prisma__ScheduledJobRegistrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    registeredBy<T extends Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduledJobRegistration$registeredByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    retiredBy<T extends Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduledJobRegistration$retiredByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduledJobRegistrationFieldRefs {
    readonly jobCode: Prisma.FieldRef<"ScheduledJobRegistration", 'String'>;
    readonly isRetired: Prisma.FieldRef<"ScheduledJobRegistration", 'Boolean'>;
    readonly registeredAt: Prisma.FieldRef<"ScheduledJobRegistration", 'DateTime'>;
    readonly registeredByUserId: Prisma.FieldRef<"ScheduledJobRegistration", 'String'>;
    readonly retiredAt: Prisma.FieldRef<"ScheduledJobRegistration", 'DateTime'>;
    readonly retiredByUserId: Prisma.FieldRef<"ScheduledJobRegistration", 'String'>;
    readonly retireReason: Prisma.FieldRef<"ScheduledJobRegistration", 'String'>;
    readonly retireWorkflowInstanceId: Prisma.FieldRef<"ScheduledJobRegistration", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"ScheduledJobRegistration", 'DateTime'>;
}
export type ScheduledJobRegistrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
};
export type ScheduledJobRegistrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
};
export type ScheduledJobRegistrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    orderBy?: Prisma.ScheduledJobRegistrationOrderByWithRelationInput | Prisma.ScheduledJobRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRegistrationScalarFieldEnum | Prisma.ScheduledJobRegistrationScalarFieldEnum[];
};
export type ScheduledJobRegistrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    orderBy?: Prisma.ScheduledJobRegistrationOrderByWithRelationInput | Prisma.ScheduledJobRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRegistrationScalarFieldEnum | Prisma.ScheduledJobRegistrationScalarFieldEnum[];
};
export type ScheduledJobRegistrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    orderBy?: Prisma.ScheduledJobRegistrationOrderByWithRelationInput | Prisma.ScheduledJobRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduledJobRegistrationScalarFieldEnum | Prisma.ScheduledJobRegistrationScalarFieldEnum[];
};
export type ScheduledJobRegistrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateInput, Prisma.ScheduledJobRegistrationUncheckedCreateInput>;
};
export type ScheduledJobRegistrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduledJobRegistrationCreateManyInput | Prisma.ScheduledJobRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduledJobRegistrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    data: Prisma.ScheduledJobRegistrationCreateManyInput | Prisma.ScheduledJobRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduledJobRegistrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobRegistrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateInput, Prisma.ScheduledJobRegistrationUncheckedUpdateInput>;
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
};
export type ScheduledJobRegistrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateManyMutationInput, Prisma.ScheduledJobRegistrationUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    limit?: number;
};
export type ScheduledJobRegistrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateManyMutationInput, Prisma.ScheduledJobRegistrationUncheckedUpdateManyInput>;
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    limit?: number;
    include?: Prisma.ScheduledJobRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduledJobRegistrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduledJobRegistrationCreateInput, Prisma.ScheduledJobRegistrationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduledJobRegistrationUpdateInput, Prisma.ScheduledJobRegistrationUncheckedUpdateInput>;
};
export type ScheduledJobRegistrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
    where: Prisma.ScheduledJobRegistrationWhereUniqueInput;
};
export type ScheduledJobRegistrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduledJobRegistrationWhereInput;
    limit?: number;
};
export type ScheduledJobRegistration$registeredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ScheduledJobRegistration$retiredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ScheduledJobRegistrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduledJobRegistrationSelect<ExtArgs> | null;
    omit?: Prisma.ScheduledJobRegistrationOmit<ExtArgs> | null;
    include?: Prisma.ScheduledJobRegistrationInclude<ExtArgs> | null;
};
