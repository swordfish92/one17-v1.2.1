import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentReminderDispatchQueueModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentReminderDispatchQueuePayload>;
export type AggregatePaymentReminderDispatchQueue = {
    _count: PaymentReminderDispatchQueueCountAggregateOutputType | null;
    _avg: PaymentReminderDispatchQueueAvgAggregateOutputType | null;
    _sum: PaymentReminderDispatchQueueSumAggregateOutputType | null;
    _min: PaymentReminderDispatchQueueMinAggregateOutputType | null;
    _max: PaymentReminderDispatchQueueMaxAggregateOutputType | null;
};
export type PaymentReminderDispatchQueueAvgAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderDispatchQueueSumAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderDispatchQueueMinAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    dayOffset: number | null;
    status: $Enums.PaymentReminderDispatchStatus | null;
    generatedAt: Date | null;
    decidedByUserId: string | null;
    decidedAt: Date | null;
};
export type PaymentReminderDispatchQueueMaxAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    dayOffset: number | null;
    status: $Enums.PaymentReminderDispatchStatus | null;
    generatedAt: Date | null;
    decidedByUserId: string | null;
    decidedAt: Date | null;
};
export type PaymentReminderDispatchQueueCountAggregateOutputType = {
    id: number;
    obligationId: number;
    dayOffset: number;
    channels: number;
    status: number;
    generatedAt: number;
    decidedByUserId: number;
    decidedAt: number;
    _all: number;
};
export type PaymentReminderDispatchQueueAvgAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderDispatchQueueSumAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderDispatchQueueMinAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    status?: true;
    generatedAt?: true;
    decidedByUserId?: true;
    decidedAt?: true;
};
export type PaymentReminderDispatchQueueMaxAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    status?: true;
    generatedAt?: true;
    decidedByUserId?: true;
    decidedAt?: true;
};
export type PaymentReminderDispatchQueueCountAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    channels?: true;
    status?: true;
    generatedAt?: true;
    decidedByUserId?: true;
    decidedAt?: true;
    _all?: true;
};
export type PaymentReminderDispatchQueueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    orderBy?: Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput | Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentReminderDispatchQueueCountAggregateInputType;
    _avg?: PaymentReminderDispatchQueueAvgAggregateInputType;
    _sum?: PaymentReminderDispatchQueueSumAggregateInputType;
    _min?: PaymentReminderDispatchQueueMinAggregateInputType;
    _max?: PaymentReminderDispatchQueueMaxAggregateInputType;
};
export type GetPaymentReminderDispatchQueueAggregateType<T extends PaymentReminderDispatchQueueAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentReminderDispatchQueue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentReminderDispatchQueue[P]> : Prisma.GetScalarType<T[P], AggregatePaymentReminderDispatchQueue[P]>;
};
export type PaymentReminderDispatchQueueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    orderBy?: Prisma.PaymentReminderDispatchQueueOrderByWithAggregationInput | Prisma.PaymentReminderDispatchQueueOrderByWithAggregationInput[];
    by: Prisma.PaymentReminderDispatchQueueScalarFieldEnum[] | Prisma.PaymentReminderDispatchQueueScalarFieldEnum;
    having?: Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentReminderDispatchQueueCountAggregateInputType | true;
    _avg?: PaymentReminderDispatchQueueAvgAggregateInputType;
    _sum?: PaymentReminderDispatchQueueSumAggregateInputType;
    _min?: PaymentReminderDispatchQueueMinAggregateInputType;
    _max?: PaymentReminderDispatchQueueMaxAggregateInputType;
};
export type PaymentReminderDispatchQueueGroupByOutputType = {
    id: string;
    obligationId: string;
    dayOffset: number;
    channels: runtime.JsonValue;
    status: $Enums.PaymentReminderDispatchStatus;
    generatedAt: Date;
    decidedByUserId: string | null;
    decidedAt: Date | null;
    _count: PaymentReminderDispatchQueueCountAggregateOutputType | null;
    _avg: PaymentReminderDispatchQueueAvgAggregateOutputType | null;
    _sum: PaymentReminderDispatchQueueSumAggregateOutputType | null;
    _min: PaymentReminderDispatchQueueMinAggregateOutputType | null;
    _max: PaymentReminderDispatchQueueMaxAggregateOutputType | null;
};
export type GetPaymentReminderDispatchQueueGroupByPayload<T extends PaymentReminderDispatchQueueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentReminderDispatchQueueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentReminderDispatchQueueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentReminderDispatchQueueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentReminderDispatchQueueGroupByOutputType[P]>;
}>>;
export type PaymentReminderDispatchQueueWhereInput = {
    AND?: Prisma.PaymentReminderDispatchQueueWhereInput | Prisma.PaymentReminderDispatchQueueWhereInput[];
    OR?: Prisma.PaymentReminderDispatchQueueWhereInput[];
    NOT?: Prisma.PaymentReminderDispatchQueueWhereInput | Prisma.PaymentReminderDispatchQueueWhereInput[];
    id?: Prisma.UuidFilter<"PaymentReminderDispatchQueue"> | string;
    obligationId?: Prisma.UuidFilter<"PaymentReminderDispatchQueue"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderDispatchQueue"> | number;
    channels?: Prisma.JsonFilter<"PaymentReminderDispatchQueue">;
    status?: Prisma.EnumPaymentReminderDispatchStatusFilter<"PaymentReminderDispatchQueue"> | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFilter<"PaymentReminderDispatchQueue"> | Date | string;
    decidedByUserId?: Prisma.UuidNullableFilter<"PaymentReminderDispatchQueue"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"PaymentReminderDispatchQueue"> | Date | string | null;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput>;
    decidedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type PaymentReminderDispatchQueueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    obligation?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput;
    decidedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type PaymentReminderDispatchQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    obligationId_dayOffset?: Prisma.PaymentReminderDispatchQueueObligationIdDayOffsetCompoundUniqueInput;
    AND?: Prisma.PaymentReminderDispatchQueueWhereInput | Prisma.PaymentReminderDispatchQueueWhereInput[];
    OR?: Prisma.PaymentReminderDispatchQueueWhereInput[];
    NOT?: Prisma.PaymentReminderDispatchQueueWhereInput | Prisma.PaymentReminderDispatchQueueWhereInput[];
    obligationId?: Prisma.UuidFilter<"PaymentReminderDispatchQueue"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderDispatchQueue"> | number;
    channels?: Prisma.JsonFilter<"PaymentReminderDispatchQueue">;
    status?: Prisma.EnumPaymentReminderDispatchStatusFilter<"PaymentReminderDispatchQueue"> | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFilter<"PaymentReminderDispatchQueue"> | Date | string;
    decidedByUserId?: Prisma.UuidNullableFilter<"PaymentReminderDispatchQueue"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"PaymentReminderDispatchQueue"> | Date | string | null;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput>;
    decidedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "obligationId_dayOffset">;
export type PaymentReminderDispatchQueueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaymentReminderDispatchQueueCountOrderByAggregateInput;
    _avg?: Prisma.PaymentReminderDispatchQueueAvgOrderByAggregateInput;
    _max?: Prisma.PaymentReminderDispatchQueueMaxOrderByAggregateInput;
    _min?: Prisma.PaymentReminderDispatchQueueMinOrderByAggregateInput;
    _sum?: Prisma.PaymentReminderDispatchQueueSumOrderByAggregateInput;
};
export type PaymentReminderDispatchQueueScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput | Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput | Prisma.PaymentReminderDispatchQueueScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentReminderDispatchQueue"> | string;
    obligationId?: Prisma.UuidWithAggregatesFilter<"PaymentReminderDispatchQueue"> | string;
    dayOffset?: Prisma.IntWithAggregatesFilter<"PaymentReminderDispatchQueue"> | number;
    channels?: Prisma.JsonWithAggregatesFilter<"PaymentReminderDispatchQueue">;
    status?: Prisma.EnumPaymentReminderDispatchStatusWithAggregatesFilter<"PaymentReminderDispatchQueue"> | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentReminderDispatchQueue"> | Date | string;
    decidedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentReminderDispatchQueue"> | string | null;
    decidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PaymentReminderDispatchQueue"> | Date | string | null;
};
export type PaymentReminderDispatchQueueCreateInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedAt?: Date | string | null;
    obligation: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutDispatchQueueItemsInput;
    decidedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentReminderDispatchDecisionsInput;
};
export type PaymentReminderDispatchQueueUncheckedCreateInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneRequiredWithoutDispatchQueueItemsNestedInput;
    decidedBy?: Prisma.AppUserUpdateOneWithoutPaymentReminderDispatchDecisionsNestedInput;
};
export type PaymentReminderDispatchQueueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueCreateManyInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueListRelationFilter = {
    every?: Prisma.PaymentReminderDispatchQueueWhereInput;
    some?: Prisma.PaymentReminderDispatchQueueWhereInput;
    none?: Prisma.PaymentReminderDispatchQueueWhereInput;
};
export type PaymentReminderDispatchQueueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueObligationIdDayOffsetCompoundUniqueInput = {
    obligationId: string;
    dayOffset: number;
};
export type PaymentReminderDispatchQueueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueAvgOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    decidedByUserId?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueSumOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderDispatchQueueCreateNestedManyWithoutDecidedByInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInputEnvelope;
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
};
export type PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutDecidedByInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInputEnvelope;
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
};
export type PaymentReminderDispatchQueueUpdateManyWithoutDecidedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput[];
    upsert?: Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutDecidedByInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInputEnvelope;
    set?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    delete?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    update?: Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutDecidedByInput[];
    updateMany?: Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutDecidedByInput[];
    deleteMany?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
};
export type PaymentReminderDispatchQueueUncheckedUpdateManyWithoutDecidedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput[];
    upsert?: Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutDecidedByInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInputEnvelope;
    set?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    delete?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    update?: Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutDecidedByInput[];
    updateMany?: Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutDecidedByInput | Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutDecidedByInput[];
    deleteMany?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
};
export type PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyObligationInputEnvelope;
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
};
export type PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyObligationInputEnvelope;
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
};
export type PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyObligationInputEnvelope;
    set?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    delete?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    update?: Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
};
export type PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput[] | Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderDispatchQueueCreateManyObligationInputEnvelope;
    set?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    delete?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    connect?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput | Prisma.PaymentReminderDispatchQueueWhereUniqueInput[];
    update?: Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutObligationInput | Prisma.PaymentReminderDispatchQueueUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
};
export type EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentReminderDispatchStatus;
};
export type PaymentReminderDispatchQueueCreateWithoutDecidedByInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedAt?: Date | string | null;
    obligation: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutDispatchQueueItemsInput;
};
export type PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueCreateOrConnectWithoutDecidedByInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput>;
};
export type PaymentReminderDispatchQueueCreateManyDecidedByInputEnvelope = {
    data: Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInput | Prisma.PaymentReminderDispatchQueueCreateManyDecidedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutDecidedByInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateWithoutDecidedByInput>;
    create: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutDecidedByInput>;
};
export type PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutDecidedByInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateWithoutDecidedByInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateWithoutDecidedByInput>;
};
export type PaymentReminderDispatchQueueUpdateManyWithWhereWithoutDecidedByInput = {
    where: Prisma.PaymentReminderDispatchQueueScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateManyMutationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutDecidedByInput>;
};
export type PaymentReminderDispatchQueueScalarWhereInput = {
    AND?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
    OR?: Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
    NOT?: Prisma.PaymentReminderDispatchQueueScalarWhereInput | Prisma.PaymentReminderDispatchQueueScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentReminderDispatchQueue"> | string;
    obligationId?: Prisma.UuidFilter<"PaymentReminderDispatchQueue"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderDispatchQueue"> | number;
    channels?: Prisma.JsonFilter<"PaymentReminderDispatchQueue">;
    status?: Prisma.EnumPaymentReminderDispatchStatusFilter<"PaymentReminderDispatchQueue"> | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFilter<"PaymentReminderDispatchQueue"> | Date | string;
    decidedByUserId?: Prisma.UuidNullableFilter<"PaymentReminderDispatchQueue"> | string | null;
    decidedAt?: Prisma.DateTimeNullableFilter<"PaymentReminderDispatchQueue"> | Date | string | null;
};
export type PaymentReminderDispatchQueueCreateWithoutObligationInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedAt?: Date | string | null;
    decidedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentReminderDispatchDecisionsInput;
};
export type PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueCreateOrConnectWithoutObligationInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput>;
};
export type PaymentReminderDispatchQueueCreateManyObligationInputEnvelope = {
    data: Prisma.PaymentReminderDispatchQueueCreateManyObligationInput | Prisma.PaymentReminderDispatchQueueCreateManyObligationInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderDispatchQueueUpsertWithWhereUniqueWithoutObligationInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateWithoutObligationInput>;
    create: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateWithoutObligationInput>;
};
export type PaymentReminderDispatchQueueUpdateWithWhereUniqueWithoutObligationInput = {
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateWithoutObligationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateWithoutObligationInput>;
};
export type PaymentReminderDispatchQueueUpdateManyWithWhereWithoutObligationInput = {
    where: Prisma.PaymentReminderDispatchQueueScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateManyMutationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationInput>;
};
export type PaymentReminderDispatchQueueCreateManyDecidedByInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueUpdateWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneRequiredWithoutDispatchQueueItemsNestedInput;
};
export type PaymentReminderDispatchQueueUncheckedUpdateWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueUncheckedUpdateManyWithoutDecidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueCreateManyObligationInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Date | string;
    decidedByUserId?: string | null;
    decidedAt?: Date | string | null;
};
export type PaymentReminderDispatchQueueUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decidedBy?: Prisma.AppUserUpdateOneWithoutPaymentReminderDispatchDecisionsNestedInput;
};
export type PaymentReminderDispatchQueueUncheckedUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPaymentReminderDispatchStatusFieldUpdateOperationsInput | $Enums.PaymentReminderDispatchStatus;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentReminderDispatchQueueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    status?: boolean;
    generatedAt?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderDispatchQueue"]>;
export type PaymentReminderDispatchQueueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    status?: boolean;
    generatedAt?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderDispatchQueue"]>;
export type PaymentReminderDispatchQueueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    status?: boolean;
    generatedAt?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderDispatchQueue"]>;
export type PaymentReminderDispatchQueueSelectScalar = {
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    status?: boolean;
    generatedAt?: boolean;
    decidedByUserId?: boolean;
    decidedAt?: boolean;
};
export type PaymentReminderDispatchQueueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "obligationId" | "dayOffset" | "channels" | "status" | "generatedAt" | "decidedByUserId" | "decidedAt", ExtArgs["result"]["paymentReminderDispatchQueue"]>;
export type PaymentReminderDispatchQueueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
};
export type PaymentReminderDispatchQueueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
};
export type PaymentReminderDispatchQueueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
    decidedBy?: boolean | Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>;
};
export type $PaymentReminderDispatchQueuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentReminderDispatchQueue";
    objects: {
        obligation: Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>;
        decidedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        obligationId: string;
        dayOffset: number;
        channels: runtime.JsonValue;
        status: $Enums.PaymentReminderDispatchStatus;
        generatedAt: Date;
        decidedByUserId: string | null;
        decidedAt: Date | null;
    }, ExtArgs["result"]["paymentReminderDispatchQueue"]>;
    composites: {};
};
export type PaymentReminderDispatchQueueGetPayload<S extends boolean | null | undefined | PaymentReminderDispatchQueueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload, S>;
export type PaymentReminderDispatchQueueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentReminderDispatchQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentReminderDispatchQueueCountAggregateInputType | true;
};
export interface PaymentReminderDispatchQueueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentReminderDispatchQueue'];
        meta: {
            name: 'PaymentReminderDispatchQueue';
        };
    };
    findUnique<T extends PaymentReminderDispatchQueueFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentReminderDispatchQueueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentReminderDispatchQueueFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentReminderDispatchQueueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentReminderDispatchQueueFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentReminderDispatchQueueCreateArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentReminderDispatchQueueCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentReminderDispatchQueueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentReminderDispatchQueueDeleteArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentReminderDispatchQueueUpdateArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentReminderDispatchQueueDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderDispatchQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentReminderDispatchQueueUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentReminderDispatchQueueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentReminderDispatchQueueUpsertArgs>(args: Prisma.SelectSubset<T, PaymentReminderDispatchQueueUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderDispatchQueueClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentReminderDispatchQueueCountArgs>(args?: Prisma.Subset<T, PaymentReminderDispatchQueueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentReminderDispatchQueueCountAggregateOutputType> : number>;
    aggregate<T extends PaymentReminderDispatchQueueAggregateArgs>(args: Prisma.Subset<T, PaymentReminderDispatchQueueAggregateArgs>): Prisma.PrismaPromise<GetPaymentReminderDispatchQueueAggregateType<T>>;
    groupBy<T extends PaymentReminderDispatchQueueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentReminderDispatchQueueGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentReminderDispatchQueueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentReminderDispatchQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentReminderDispatchQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentReminderDispatchQueueFieldRefs;
}
export interface Prisma__PaymentReminderDispatchQueueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    obligation<T extends Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    decidedBy<T extends Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentReminderDispatchQueue$decidedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentReminderDispatchQueueFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'String'>;
    readonly obligationId: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'String'>;
    readonly dayOffset: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'Int'>;
    readonly channels: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'Json'>;
    readonly status: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'PaymentReminderDispatchStatus'>;
    readonly generatedAt: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'DateTime'>;
    readonly decidedByUserId: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'String'>;
    readonly decidedAt: Prisma.FieldRef<"PaymentReminderDispatchQueue", 'DateTime'>;
}
export type PaymentReminderDispatchQueueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
};
export type PaymentReminderDispatchQueueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
};
export type PaymentReminderDispatchQueueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    orderBy?: Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput | Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderDispatchQueueScalarFieldEnum | Prisma.PaymentReminderDispatchQueueScalarFieldEnum[];
};
export type PaymentReminderDispatchQueueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    orderBy?: Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput | Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderDispatchQueueScalarFieldEnum | Prisma.PaymentReminderDispatchQueueScalarFieldEnum[];
};
export type PaymentReminderDispatchQueueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    orderBy?: Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput | Prisma.PaymentReminderDispatchQueueOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderDispatchQueueScalarFieldEnum | Prisma.PaymentReminderDispatchQueueScalarFieldEnum[];
};
export type PaymentReminderDispatchQueueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateInput>;
};
export type PaymentReminderDispatchQueueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentReminderDispatchQueueCreateManyInput | Prisma.PaymentReminderDispatchQueueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderDispatchQueueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    data: Prisma.PaymentReminderDispatchQueueCreateManyInput | Prisma.PaymentReminderDispatchQueueCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentReminderDispatchQueueIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentReminderDispatchQueueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateInput>;
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
};
export type PaymentReminderDispatchQueueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateManyMutationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    limit?: number;
};
export type PaymentReminderDispatchQueueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateManyMutationInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    limit?: number;
    include?: Prisma.PaymentReminderDispatchQueueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentReminderDispatchQueueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderDispatchQueueCreateInput, Prisma.PaymentReminderDispatchQueueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentReminderDispatchQueueUpdateInput, Prisma.PaymentReminderDispatchQueueUncheckedUpdateInput>;
};
export type PaymentReminderDispatchQueueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderDispatchQueueWhereUniqueInput;
};
export type PaymentReminderDispatchQueueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
    limit?: number;
};
export type PaymentReminderDispatchQueue$decidedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type PaymentReminderDispatchQueueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderDispatchQueueSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderDispatchQueueOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderDispatchQueueInclude<ExtArgs> | null;
};
