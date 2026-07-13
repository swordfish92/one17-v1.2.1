import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentReminderNoticeLogModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentReminderNoticeLogPayload>;
export type AggregatePaymentReminderNoticeLog = {
    _count: PaymentReminderNoticeLogCountAggregateOutputType | null;
    _avg: PaymentReminderNoticeLogAvgAggregateOutputType | null;
    _sum: PaymentReminderNoticeLogSumAggregateOutputType | null;
    _min: PaymentReminderNoticeLogMinAggregateOutputType | null;
    _max: PaymentReminderNoticeLogMaxAggregateOutputType | null;
};
export type PaymentReminderNoticeLogAvgAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderNoticeLogSumAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderNoticeLogMinAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    dayOffset: number | null;
    clientCommunicationId: string | null;
    sentAt: Date | null;
};
export type PaymentReminderNoticeLogMaxAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    dayOffset: number | null;
    clientCommunicationId: string | null;
    sentAt: Date | null;
};
export type PaymentReminderNoticeLogCountAggregateOutputType = {
    id: number;
    obligationId: number;
    dayOffset: number;
    clientCommunicationId: number;
    sentAt: number;
    _all: number;
};
export type PaymentReminderNoticeLogAvgAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderNoticeLogSumAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderNoticeLogMinAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    clientCommunicationId?: true;
    sentAt?: true;
};
export type PaymentReminderNoticeLogMaxAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    clientCommunicationId?: true;
    sentAt?: true;
};
export type PaymentReminderNoticeLogCountAggregateInputType = {
    id?: true;
    obligationId?: true;
    dayOffset?: true;
    clientCommunicationId?: true;
    sentAt?: true;
    _all?: true;
};
export type PaymentReminderNoticeLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    orderBy?: Prisma.PaymentReminderNoticeLogOrderByWithRelationInput | Prisma.PaymentReminderNoticeLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentReminderNoticeLogCountAggregateInputType;
    _avg?: PaymentReminderNoticeLogAvgAggregateInputType;
    _sum?: PaymentReminderNoticeLogSumAggregateInputType;
    _min?: PaymentReminderNoticeLogMinAggregateInputType;
    _max?: PaymentReminderNoticeLogMaxAggregateInputType;
};
export type GetPaymentReminderNoticeLogAggregateType<T extends PaymentReminderNoticeLogAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentReminderNoticeLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentReminderNoticeLog[P]> : Prisma.GetScalarType<T[P], AggregatePaymentReminderNoticeLog[P]>;
};
export type PaymentReminderNoticeLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    orderBy?: Prisma.PaymentReminderNoticeLogOrderByWithAggregationInput | Prisma.PaymentReminderNoticeLogOrderByWithAggregationInput[];
    by: Prisma.PaymentReminderNoticeLogScalarFieldEnum[] | Prisma.PaymentReminderNoticeLogScalarFieldEnum;
    having?: Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentReminderNoticeLogCountAggregateInputType | true;
    _avg?: PaymentReminderNoticeLogAvgAggregateInputType;
    _sum?: PaymentReminderNoticeLogSumAggregateInputType;
    _min?: PaymentReminderNoticeLogMinAggregateInputType;
    _max?: PaymentReminderNoticeLogMaxAggregateInputType;
};
export type PaymentReminderNoticeLogGroupByOutputType = {
    id: string;
    obligationId: string;
    dayOffset: number;
    clientCommunicationId: string | null;
    sentAt: Date;
    _count: PaymentReminderNoticeLogCountAggregateOutputType | null;
    _avg: PaymentReminderNoticeLogAvgAggregateOutputType | null;
    _sum: PaymentReminderNoticeLogSumAggregateOutputType | null;
    _min: PaymentReminderNoticeLogMinAggregateOutputType | null;
    _max: PaymentReminderNoticeLogMaxAggregateOutputType | null;
};
export type GetPaymentReminderNoticeLogGroupByPayload<T extends PaymentReminderNoticeLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentReminderNoticeLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentReminderNoticeLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentReminderNoticeLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentReminderNoticeLogGroupByOutputType[P]>;
}>>;
export type PaymentReminderNoticeLogWhereInput = {
    AND?: Prisma.PaymentReminderNoticeLogWhereInput | Prisma.PaymentReminderNoticeLogWhereInput[];
    OR?: Prisma.PaymentReminderNoticeLogWhereInput[];
    NOT?: Prisma.PaymentReminderNoticeLogWhereInput | Prisma.PaymentReminderNoticeLogWhereInput[];
    id?: Prisma.UuidFilter<"PaymentReminderNoticeLog"> | string;
    obligationId?: Prisma.UuidFilter<"PaymentReminderNoticeLog"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderNoticeLog"> | number;
    clientCommunicationId?: Prisma.UuidNullableFilter<"PaymentReminderNoticeLog"> | string | null;
    sentAt?: Prisma.DateTimeFilter<"PaymentReminderNoticeLog"> | Date | string;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput>;
};
export type PaymentReminderNoticeLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    clientCommunicationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    obligation?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput;
};
export type PaymentReminderNoticeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    obligationId_dayOffset?: Prisma.PaymentReminderNoticeLogObligationIdDayOffsetCompoundUniqueInput;
    AND?: Prisma.PaymentReminderNoticeLogWhereInput | Prisma.PaymentReminderNoticeLogWhereInput[];
    OR?: Prisma.PaymentReminderNoticeLogWhereInput[];
    NOT?: Prisma.PaymentReminderNoticeLogWhereInput | Prisma.PaymentReminderNoticeLogWhereInput[];
    obligationId?: Prisma.UuidFilter<"PaymentReminderNoticeLog"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderNoticeLog"> | number;
    clientCommunicationId?: Prisma.UuidNullableFilter<"PaymentReminderNoticeLog"> | string | null;
    sentAt?: Prisma.DateTimeFilter<"PaymentReminderNoticeLog"> | Date | string;
    obligation?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationScalarRelationFilter, Prisma.CounterpartyRepaymentObligationWhereInput>;
}, "id" | "obligationId_dayOffset">;
export type PaymentReminderNoticeLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    clientCommunicationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentReminderNoticeLogCountOrderByAggregateInput;
    _avg?: Prisma.PaymentReminderNoticeLogAvgOrderByAggregateInput;
    _max?: Prisma.PaymentReminderNoticeLogMaxOrderByAggregateInput;
    _min?: Prisma.PaymentReminderNoticeLogMinOrderByAggregateInput;
    _sum?: Prisma.PaymentReminderNoticeLogSumOrderByAggregateInput;
};
export type PaymentReminderNoticeLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput | Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput | Prisma.PaymentReminderNoticeLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentReminderNoticeLog"> | string;
    obligationId?: Prisma.UuidWithAggregatesFilter<"PaymentReminderNoticeLog"> | string;
    dayOffset?: Prisma.IntWithAggregatesFilter<"PaymentReminderNoticeLog"> | number;
    clientCommunicationId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentReminderNoticeLog"> | string | null;
    sentAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentReminderNoticeLog"> | Date | string;
};
export type PaymentReminderNoticeLogCreateInput = {
    id?: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
    obligation: Prisma.CounterpartyRepaymentObligationCreateNestedOneWithoutReminderNoticesInput;
};
export type PaymentReminderNoticeLogUncheckedCreateInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
};
export type PaymentReminderNoticeLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligation?: Prisma.CounterpartyRepaymentObligationUpdateOneRequiredWithoutReminderNoticesNestedInput;
};
export type PaymentReminderNoticeLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogCreateManyInput = {
    id?: string;
    obligationId: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
};
export type PaymentReminderNoticeLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogListRelationFilter = {
    every?: Prisma.PaymentReminderNoticeLogWhereInput;
    some?: Prisma.PaymentReminderNoticeLogWhereInput;
    none?: Prisma.PaymentReminderNoticeLogWhereInput;
};
export type PaymentReminderNoticeLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogObligationIdDayOffsetCompoundUniqueInput = {
    obligationId: string;
    dayOffset: number;
};
export type PaymentReminderNoticeLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    clientCommunicationId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogAvgOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    clientCommunicationId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    clientCommunicationId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogSumOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput[] | Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderNoticeLogCreateManyObligationInputEnvelope;
    connect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
};
export type PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput[] | Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderNoticeLogCreateManyObligationInputEnvelope;
    connect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
};
export type PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput[] | Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.PaymentReminderNoticeLogUpsertWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderNoticeLogCreateManyObligationInputEnvelope;
    set?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    delete?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    connect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    update?: Prisma.PaymentReminderNoticeLogUpdateWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.PaymentReminderNoticeLogUpdateManyWithWhereWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.PaymentReminderNoticeLogScalarWhereInput | Prisma.PaymentReminderNoticeLogScalarWhereInput[];
};
export type PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput> | Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput[] | Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput[];
    connectOrCreate?: Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput | Prisma.PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput[];
    upsert?: Prisma.PaymentReminderNoticeLogUpsertWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpsertWithWhereUniqueWithoutObligationInput[];
    createMany?: Prisma.PaymentReminderNoticeLogCreateManyObligationInputEnvelope;
    set?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    disconnect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    delete?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    connect?: Prisma.PaymentReminderNoticeLogWhereUniqueInput | Prisma.PaymentReminderNoticeLogWhereUniqueInput[];
    update?: Prisma.PaymentReminderNoticeLogUpdateWithWhereUniqueWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpdateWithWhereUniqueWithoutObligationInput[];
    updateMany?: Prisma.PaymentReminderNoticeLogUpdateManyWithWhereWithoutObligationInput | Prisma.PaymentReminderNoticeLogUpdateManyWithWhereWithoutObligationInput[];
    deleteMany?: Prisma.PaymentReminderNoticeLogScalarWhereInput | Prisma.PaymentReminderNoticeLogScalarWhereInput[];
};
export type PaymentReminderNoticeLogCreateWithoutObligationInput = {
    id?: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
};
export type PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput = {
    id?: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
};
export type PaymentReminderNoticeLogCreateOrConnectWithoutObligationInput = {
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput>;
};
export type PaymentReminderNoticeLogCreateManyObligationInputEnvelope = {
    data: Prisma.PaymentReminderNoticeLogCreateManyObligationInput | Prisma.PaymentReminderNoticeLogCreateManyObligationInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderNoticeLogUpsertWithWhereUniqueWithoutObligationInput = {
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateWithoutObligationInput>;
    create: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedCreateWithoutObligationInput>;
};
export type PaymentReminderNoticeLogUpdateWithWhereUniqueWithoutObligationInput = {
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateWithoutObligationInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateWithoutObligationInput>;
};
export type PaymentReminderNoticeLogUpdateManyWithWhereWithoutObligationInput = {
    where: Prisma.PaymentReminderNoticeLogScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateManyMutationInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationInput>;
};
export type PaymentReminderNoticeLogScalarWhereInput = {
    AND?: Prisma.PaymentReminderNoticeLogScalarWhereInput | Prisma.PaymentReminderNoticeLogScalarWhereInput[];
    OR?: Prisma.PaymentReminderNoticeLogScalarWhereInput[];
    NOT?: Prisma.PaymentReminderNoticeLogScalarWhereInput | Prisma.PaymentReminderNoticeLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentReminderNoticeLog"> | string;
    obligationId?: Prisma.UuidFilter<"PaymentReminderNoticeLog"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderNoticeLog"> | number;
    clientCommunicationId?: Prisma.UuidNullableFilter<"PaymentReminderNoticeLog"> | string | null;
    sentAt?: Prisma.DateTimeFilter<"PaymentReminderNoticeLog"> | Date | string;
};
export type PaymentReminderNoticeLogCreateManyObligationInput = {
    id?: string;
    dayOffset: number;
    clientCommunicationId?: string | null;
    sentAt?: Date | string;
};
export type PaymentReminderNoticeLogUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogUncheckedUpdateWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    clientCommunicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderNoticeLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    clientCommunicationId?: boolean;
    sentAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderNoticeLog"]>;
export type PaymentReminderNoticeLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    clientCommunicationId?: boolean;
    sentAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderNoticeLog"]>;
export type PaymentReminderNoticeLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    clientCommunicationId?: boolean;
    sentAt?: boolean;
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentReminderNoticeLog"]>;
export type PaymentReminderNoticeLogSelectScalar = {
    id?: boolean;
    obligationId?: boolean;
    dayOffset?: boolean;
    clientCommunicationId?: boolean;
    sentAt?: boolean;
};
export type PaymentReminderNoticeLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "obligationId" | "dayOffset" | "clientCommunicationId" | "sentAt", ExtArgs["result"]["paymentReminderNoticeLog"]>;
export type PaymentReminderNoticeLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
};
export type PaymentReminderNoticeLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
};
export type PaymentReminderNoticeLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligation?: boolean | Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>;
};
export type $PaymentReminderNoticeLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentReminderNoticeLog";
    objects: {
        obligation: Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        obligationId: string;
        dayOffset: number;
        clientCommunicationId: string | null;
        sentAt: Date;
    }, ExtArgs["result"]["paymentReminderNoticeLog"]>;
    composites: {};
};
export type PaymentReminderNoticeLogGetPayload<S extends boolean | null | undefined | PaymentReminderNoticeLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload, S>;
export type PaymentReminderNoticeLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentReminderNoticeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentReminderNoticeLogCountAggregateInputType | true;
};
export interface PaymentReminderNoticeLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentReminderNoticeLog'];
        meta: {
            name: 'PaymentReminderNoticeLog';
        };
    };
    findUnique<T extends PaymentReminderNoticeLogFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentReminderNoticeLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentReminderNoticeLogFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentReminderNoticeLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentReminderNoticeLogFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentReminderNoticeLogCreateArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentReminderNoticeLogCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentReminderNoticeLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentReminderNoticeLogDeleteArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentReminderNoticeLogUpdateArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentReminderNoticeLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderNoticeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentReminderNoticeLogUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentReminderNoticeLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentReminderNoticeLogUpsertArgs>(args: Prisma.SelectSubset<T, PaymentReminderNoticeLogUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderNoticeLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentReminderNoticeLogCountArgs>(args?: Prisma.Subset<T, PaymentReminderNoticeLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentReminderNoticeLogCountAggregateOutputType> : number>;
    aggregate<T extends PaymentReminderNoticeLogAggregateArgs>(args: Prisma.Subset<T, PaymentReminderNoticeLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentReminderNoticeLogAggregateType<T>>;
    groupBy<T extends PaymentReminderNoticeLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentReminderNoticeLogGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentReminderNoticeLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentReminderNoticeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentReminderNoticeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentReminderNoticeLogFieldRefs;
}
export interface Prisma__PaymentReminderNoticeLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    obligation<T extends Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligationDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentReminderNoticeLogFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentReminderNoticeLog", 'String'>;
    readonly obligationId: Prisma.FieldRef<"PaymentReminderNoticeLog", 'String'>;
    readonly dayOffset: Prisma.FieldRef<"PaymentReminderNoticeLog", 'Int'>;
    readonly clientCommunicationId: Prisma.FieldRef<"PaymentReminderNoticeLog", 'String'>;
    readonly sentAt: Prisma.FieldRef<"PaymentReminderNoticeLog", 'DateTime'>;
}
export type PaymentReminderNoticeLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
};
export type PaymentReminderNoticeLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
};
export type PaymentReminderNoticeLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    orderBy?: Prisma.PaymentReminderNoticeLogOrderByWithRelationInput | Prisma.PaymentReminderNoticeLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderNoticeLogScalarFieldEnum | Prisma.PaymentReminderNoticeLogScalarFieldEnum[];
};
export type PaymentReminderNoticeLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    orderBy?: Prisma.PaymentReminderNoticeLogOrderByWithRelationInput | Prisma.PaymentReminderNoticeLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderNoticeLogScalarFieldEnum | Prisma.PaymentReminderNoticeLogScalarFieldEnum[];
};
export type PaymentReminderNoticeLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    orderBy?: Prisma.PaymentReminderNoticeLogOrderByWithRelationInput | Prisma.PaymentReminderNoticeLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderNoticeLogScalarFieldEnum | Prisma.PaymentReminderNoticeLogScalarFieldEnum[];
};
export type PaymentReminderNoticeLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateInput, Prisma.PaymentReminderNoticeLogUncheckedCreateInput>;
};
export type PaymentReminderNoticeLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentReminderNoticeLogCreateManyInput | Prisma.PaymentReminderNoticeLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderNoticeLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    data: Prisma.PaymentReminderNoticeLogCreateManyInput | Prisma.PaymentReminderNoticeLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentReminderNoticeLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentReminderNoticeLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateInput>;
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
};
export type PaymentReminderNoticeLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateManyMutationInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    limit?: number;
};
export type PaymentReminderNoticeLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateManyMutationInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    limit?: number;
    include?: Prisma.PaymentReminderNoticeLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentReminderNoticeLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderNoticeLogCreateInput, Prisma.PaymentReminderNoticeLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentReminderNoticeLogUpdateInput, Prisma.PaymentReminderNoticeLogUncheckedUpdateInput>;
};
export type PaymentReminderNoticeLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
    where: Prisma.PaymentReminderNoticeLogWhereUniqueInput;
};
export type PaymentReminderNoticeLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
    limit?: number;
};
export type PaymentReminderNoticeLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderNoticeLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderNoticeLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentReminderNoticeLogInclude<ExtArgs> | null;
};
