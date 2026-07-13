import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CounterpartyRepaymentObligationModel = runtime.Types.Result.DefaultSelection<Prisma.$CounterpartyRepaymentObligationPayload>;
export type AggregateCounterpartyRepaymentObligation = {
    _count: CounterpartyRepaymentObligationCountAggregateOutputType | null;
    _avg: CounterpartyRepaymentObligationAvgAggregateOutputType | null;
    _sum: CounterpartyRepaymentObligationSumAggregateOutputType | null;
    _min: CounterpartyRepaymentObligationMinAggregateOutputType | null;
    _max: CounterpartyRepaymentObligationMaxAggregateOutputType | null;
};
export type CounterpartyRepaymentObligationAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type CounterpartyRepaymentObligationSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type CounterpartyRepaymentObligationMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    facilityApplicationId: string | null;
    dueDate: Date | null;
    amountKobo: bigint | null;
    status: $Enums.RepaymentObligationStatus | null;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type CounterpartyRepaymentObligationMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    facilityApplicationId: string | null;
    dueDate: Date | null;
    amountKobo: bigint | null;
    status: $Enums.RepaymentObligationStatus | null;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type CounterpartyRepaymentObligationCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    facilityApplicationId: number;
    dueDate: number;
    amountKobo: number;
    status: number;
    paidAt: number;
    paidByUserId: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type CounterpartyRepaymentObligationAvgAggregateInputType = {
    amountKobo?: true;
};
export type CounterpartyRepaymentObligationSumAggregateInputType = {
    amountKobo?: true;
};
export type CounterpartyRepaymentObligationMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    facilityApplicationId?: true;
    dueDate?: true;
    amountKobo?: true;
    status?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type CounterpartyRepaymentObligationMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    facilityApplicationId?: true;
    dueDate?: true;
    amountKobo?: true;
    status?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type CounterpartyRepaymentObligationCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    facilityApplicationId?: true;
    dueDate?: true;
    amountKobo?: true;
    status?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type CounterpartyRepaymentObligationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput | Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CounterpartyRepaymentObligationCountAggregateInputType;
    _avg?: CounterpartyRepaymentObligationAvgAggregateInputType;
    _sum?: CounterpartyRepaymentObligationSumAggregateInputType;
    _min?: CounterpartyRepaymentObligationMinAggregateInputType;
    _max?: CounterpartyRepaymentObligationMaxAggregateInputType;
};
export type GetCounterpartyRepaymentObligationAggregateType<T extends CounterpartyRepaymentObligationAggregateArgs> = {
    [P in keyof T & keyof AggregateCounterpartyRepaymentObligation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounterpartyRepaymentObligation[P]> : Prisma.GetScalarType<T[P], AggregateCounterpartyRepaymentObligation[P]>;
};
export type CounterpartyRepaymentObligationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithAggregationInput | Prisma.CounterpartyRepaymentObligationOrderByWithAggregationInput[];
    by: Prisma.CounterpartyRepaymentObligationScalarFieldEnum[] | Prisma.CounterpartyRepaymentObligationScalarFieldEnum;
    having?: Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CounterpartyRepaymentObligationCountAggregateInputType | true;
    _avg?: CounterpartyRepaymentObligationAvgAggregateInputType;
    _sum?: CounterpartyRepaymentObligationSumAggregateInputType;
    _min?: CounterpartyRepaymentObligationMinAggregateInputType;
    _max?: CounterpartyRepaymentObligationMaxAggregateInputType;
};
export type CounterpartyRepaymentObligationGroupByOutputType = {
    id: string;
    counterpartyId: string;
    facilityApplicationId: string | null;
    dueDate: Date;
    amountKobo: bigint;
    status: $Enums.RepaymentObligationStatus;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: CounterpartyRepaymentObligationCountAggregateOutputType | null;
    _avg: CounterpartyRepaymentObligationAvgAggregateOutputType | null;
    _sum: CounterpartyRepaymentObligationSumAggregateOutputType | null;
    _min: CounterpartyRepaymentObligationMinAggregateOutputType | null;
    _max: CounterpartyRepaymentObligationMaxAggregateOutputType | null;
};
export type GetCounterpartyRepaymentObligationGroupByPayload<T extends CounterpartyRepaymentObligationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CounterpartyRepaymentObligationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CounterpartyRepaymentObligationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CounterpartyRepaymentObligationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CounterpartyRepaymentObligationGroupByOutputType[P]>;
}>>;
export type CounterpartyRepaymentObligationWhereInput = {
    AND?: Prisma.CounterpartyRepaymentObligationWhereInput | Prisma.CounterpartyRepaymentObligationWhereInput[];
    OR?: Prisma.CounterpartyRepaymentObligationWhereInput[];
    NOT?: Prisma.CounterpartyRepaymentObligationWhereInput | Prisma.CounterpartyRepaymentObligationWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    facilityApplicationId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    dueDate?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
    amountKobo?: Prisma.BigIntFilter<"CounterpartyRepaymentObligation"> | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFilter<"CounterpartyRepaymentObligation"> | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"CounterpartyRepaymentObligation"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    facilityApplication?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationNullableScalarRelationFilter, Prisma.CounterpartyFacilityApplicationWhereInput> | null;
    restructureRequests?: Prisma.CounterpartyRestructureRequestListRelationFilter;
    reminderNotices?: Prisma.PaymentReminderNoticeLogListRelationFilter;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueListRelationFilter;
};
export type CounterpartyRepaymentObligationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    facilityApplicationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestOrderByRelationAggregateInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogOrderByRelationAggregateInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueOrderByRelationAggregateInput;
};
export type CounterpartyRepaymentObligationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CounterpartyRepaymentObligationWhereInput | Prisma.CounterpartyRepaymentObligationWhereInput[];
    OR?: Prisma.CounterpartyRepaymentObligationWhereInput[];
    NOT?: Prisma.CounterpartyRepaymentObligationWhereInput | Prisma.CounterpartyRepaymentObligationWhereInput[];
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    facilityApplicationId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    dueDate?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
    amountKobo?: Prisma.BigIntFilter<"CounterpartyRepaymentObligation"> | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFilter<"CounterpartyRepaymentObligation"> | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"CounterpartyRepaymentObligation"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    facilityApplication?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationNullableScalarRelationFilter, Prisma.CounterpartyFacilityApplicationWhereInput> | null;
    restructureRequests?: Prisma.CounterpartyRestructureRequestListRelationFilter;
    reminderNotices?: Prisma.PaymentReminderNoticeLogListRelationFilter;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueListRelationFilter;
}, "id">;
export type CounterpartyRepaymentObligationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    facilityApplicationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CounterpartyRepaymentObligationCountOrderByAggregateInput;
    _avg?: Prisma.CounterpartyRepaymentObligationAvgOrderByAggregateInput;
    _max?: Prisma.CounterpartyRepaymentObligationMaxOrderByAggregateInput;
    _min?: Prisma.CounterpartyRepaymentObligationMinOrderByAggregateInput;
    _sum?: Prisma.CounterpartyRepaymentObligationSumOrderByAggregateInput;
};
export type CounterpartyRepaymentObligationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput | Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput | Prisma.CounterpartyRepaymentObligationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CounterpartyRepaymentObligation"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"CounterpartyRepaymentObligation"> | string;
    facilityApplicationId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyRepaymentObligation"> | string | null;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"CounterpartyRepaymentObligation"> | Date | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"CounterpartyRepaymentObligation"> | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusWithAggregatesFilter<"CounterpartyRepaymentObligation"> | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CounterpartyRepaymentObligation"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyRepaymentObligation"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"CounterpartyRepaymentObligation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CounterpartyRepaymentObligation"> | Date | string;
};
export type CounterpartyRepaymentObligationCreateInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRepaymentObligationsInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRepaymentObligationsNestedInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationCreateManyInput = {
    id?: string;
    counterpartyId: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type CounterpartyRepaymentObligationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRepaymentObligationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRepaymentObligationListRelationFilter = {
    every?: Prisma.CounterpartyRepaymentObligationWhereInput;
    some?: Prisma.CounterpartyRepaymentObligationWhereInput;
    none?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRepaymentObligationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationNullableScalarRelationFilter = {
    is?: Prisma.CounterpartyRepaymentObligationWhereInput | null;
    isNot?: Prisma.CounterpartyRepaymentObligationWhereInput | null;
};
export type CounterpartyRepaymentObligationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    facilityApplicationId?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    facilityApplicationId?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    facilityApplicationId?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CounterpartyRepaymentObligationScalarRelationFilter = {
    is?: Prisma.CounterpartyRepaymentObligationWhereInput;
    isNot?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRepaymentObligationCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
};
export type CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
};
export type CounterpartyRepaymentObligationUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    delete?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    update?: Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
};
export type CounterpartyRepaymentObligationUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    delete?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    update?: Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
};
export type CounterpartyRepaymentObligationCreateNestedOneWithoutRestructureRequestsInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutRestructureRequestsInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutRestructureRequestsInput;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationUpdateOneWithoutRestructureRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutRestructureRequestsInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutRestructureRequestsInput;
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithoutRestructureRequestsInput;
    disconnect?: Prisma.CounterpartyRepaymentObligationWhereInput | boolean;
    delete?: Prisma.CounterpartyRepaymentObligationWhereInput | boolean;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUpdateWithoutRestructureRequestsInput>, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutRestructureRequestsInput>;
};
export type CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInputEnvelope;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
};
export type CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInputEnvelope;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
};
export type CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput[];
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutFacilityApplicationInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInputEnvelope;
    set?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    delete?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    update?: Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutFacilityApplicationInput[];
    updateMany?: Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutFacilityApplicationInput[];
    deleteMany?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
};
export type CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput> | Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput[] | Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput[];
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput[];
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutFacilityApplicationInput[];
    createMany?: Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInputEnvelope;
    set?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    delete?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput | Prisma.CounterpartyRepaymentObligationWhereUniqueInput[];
    update?: Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutFacilityApplicationInput[];
    updateMany?: Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationUpdateManyWithWhereWithoutFacilityApplicationInput[];
    deleteMany?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
};
export type EnumRepaymentObligationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RepaymentObligationStatus;
};
export type CounterpartyRepaymentObligationCreateNestedOneWithoutReminderNoticesInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutReminderNoticesInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutReminderNoticesInput;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationUpdateOneRequiredWithoutReminderNoticesNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutReminderNoticesInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutReminderNoticesInput;
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithoutReminderNoticesInput;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUpdateWithoutReminderNoticesInput>, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutReminderNoticesInput>;
};
export type CounterpartyRepaymentObligationCreateNestedOneWithoutDispatchQueueItemsInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutDispatchQueueItemsInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutDispatchQueueItemsInput;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationUpdateOneRequiredWithoutDispatchQueueItemsNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutDispatchQueueItemsInput>;
    connectOrCreate?: Prisma.CounterpartyRepaymentObligationCreateOrConnectWithoutDispatchQueueItemsInput;
    upsert?: Prisma.CounterpartyRepaymentObligationUpsertWithoutDispatchQueueItemsInput;
    connect?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUpdateWithoutDispatchQueueItemsInput>, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutDispatchQueueItemsInput>;
};
export type CounterpartyRepaymentObligationCreateWithoutCounterpartyInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyRepaymentObligationCreateManyCounterpartyInputEnvelope = {
    data: Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInput | Prisma.CounterpartyRepaymentObligationCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutCounterpartyInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutCounterpartyInput>;
};
export type CounterpartyRepaymentObligationUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.CounterpartyRepaymentObligationScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateManyMutationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type CounterpartyRepaymentObligationScalarWhereInput = {
    AND?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
    OR?: Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
    NOT?: Prisma.CounterpartyRepaymentObligationScalarWhereInput | Prisma.CounterpartyRepaymentObligationScalarWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    facilityApplicationId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    dueDate?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
    amountKobo?: Prisma.BigIntFilter<"CounterpartyRepaymentObligation"> | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFilter<"CounterpartyRepaymentObligation"> | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"CounterpartyRepaymentObligation"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"CounterpartyRepaymentObligation"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"CounterpartyRepaymentObligation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyRepaymentObligation"> | Date | string;
};
export type CounterpartyRepaymentObligationCreateWithoutRestructureRequestsInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRepaymentObligationsInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateWithoutRestructureRequestsInput = {
    id?: string;
    counterpartyId: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationCreateOrConnectWithoutRestructureRequestsInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutRestructureRequestsInput>;
};
export type CounterpartyRepaymentObligationUpsertWithoutRestructureRequestsInput = {
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutRestructureRequestsInput>;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutRestructureRequestsInput>;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutRestructureRequestsInput = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutRestructureRequestsInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutRestructureRequestsInput>;
};
export type CounterpartyRepaymentObligationUpdateWithoutRestructureRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRepaymentObligationsNestedInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateWithoutRestructureRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRepaymentObligationsInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput = {
    id?: string;
    counterpartyId: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationCreateOrConnectWithoutFacilityApplicationInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput>;
};
export type CounterpartyRepaymentObligationCreateManyFacilityApplicationInputEnvelope = {
    data: Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInput | Prisma.CounterpartyRepaymentObligationCreateManyFacilityApplicationInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRepaymentObligationUpsertWithWhereUniqueWithoutFacilityApplicationInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutFacilityApplicationInput>;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutFacilityApplicationInput>;
};
export type CounterpartyRepaymentObligationUpdateWithWhereUniqueWithoutFacilityApplicationInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutFacilityApplicationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutFacilityApplicationInput>;
};
export type CounterpartyRepaymentObligationUpdateManyWithWhereWithoutFacilityApplicationInput = {
    where: Prisma.CounterpartyRepaymentObligationScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateManyMutationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationInput>;
};
export type CounterpartyRepaymentObligationCreateWithoutReminderNoticesInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRepaymentObligationsInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateWithoutReminderNoticesInput = {
    id?: string;
    counterpartyId: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationCreateOrConnectWithoutReminderNoticesInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutReminderNoticesInput>;
};
export type CounterpartyRepaymentObligationUpsertWithoutReminderNoticesInput = {
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutReminderNoticesInput>;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutReminderNoticesInput>;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutReminderNoticesInput = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutReminderNoticesInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutReminderNoticesInput>;
};
export type CounterpartyRepaymentObligationUpdateWithoutReminderNoticesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRepaymentObligationsNestedInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateWithoutReminderNoticesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationCreateWithoutDispatchQueueItemsInput = {
    id?: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutRepaymentObligationsInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationUncheckedCreateWithoutDispatchQueueItemsInput = {
    id?: string;
    counterpartyId: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedCreateNestedManyWithoutObligationInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedCreateNestedManyWithoutObligationInput;
};
export type CounterpartyRepaymentObligationCreateOrConnectWithoutDispatchQueueItemsInput = {
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutDispatchQueueItemsInput>;
};
export type CounterpartyRepaymentObligationUpsertWithoutDispatchQueueItemsInput = {
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutDispatchQueueItemsInput>;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateWithoutDispatchQueueItemsInput>;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyRepaymentObligationUpdateToOneWithWhereWithoutDispatchQueueItemsInput = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateWithoutDispatchQueueItemsInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateWithoutDispatchQueueItemsInput>;
};
export type CounterpartyRepaymentObligationUpdateWithoutDispatchQueueItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRepaymentObligationsNestedInput;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateWithoutDispatchQueueItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationCreateManyCounterpartyInput = {
    id?: string;
    facilityApplicationId?: string | null;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type CounterpartyRepaymentObligationUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facilityApplication?: Prisma.CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityApplicationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRepaymentObligationCreateManyFacilityApplicationInput = {
    id?: string;
    counterpartyId: string;
    dueDate: Date | string;
    amountKobo: bigint | number;
    status?: $Enums.RepaymentObligationStatus;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type CounterpartyRepaymentObligationUpdateWithoutFacilityApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutRepaymentObligationsNestedInput;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateWithoutFacilityApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restructureRequests?: Prisma.CounterpartyRestructureRequestUncheckedUpdateManyWithoutObligationNestedInput;
    reminderNotices?: Prisma.PaymentReminderNoticeLogUncheckedUpdateManyWithoutObligationNestedInput;
    dispatchQueueItems?: Prisma.PaymentReminderDispatchQueueUncheckedUpdateManyWithoutObligationNestedInput;
};
export type CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumRepaymentObligationStatusFieldUpdateOperationsInput | $Enums.RepaymentObligationStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyRepaymentObligationCountOutputType = {
    restructureRequests: number;
    reminderNotices: number;
    dispatchQueueItems: number;
};
export type CounterpartyRepaymentObligationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restructureRequests?: boolean | CounterpartyRepaymentObligationCountOutputTypeCountRestructureRequestsArgs;
    reminderNotices?: boolean | CounterpartyRepaymentObligationCountOutputTypeCountReminderNoticesArgs;
    dispatchQueueItems?: boolean | CounterpartyRepaymentObligationCountOutputTypeCountDispatchQueueItemsArgs;
};
export type CounterpartyRepaymentObligationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationCountOutputTypeSelect<ExtArgs> | null;
};
export type CounterpartyRepaymentObligationCountOutputTypeCountRestructureRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
};
export type CounterpartyRepaymentObligationCountOutputTypeCountReminderNoticesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderNoticeLogWhereInput;
};
export type CounterpartyRepaymentObligationCountOutputTypeCountDispatchQueueItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderDispatchQueueWhereInput;
};
export type CounterpartyRepaymentObligationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    facilityApplicationId?: boolean;
    dueDate?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
    restructureRequests?: boolean | Prisma.CounterpartyRepaymentObligation$restructureRequestsArgs<ExtArgs>;
    reminderNotices?: boolean | Prisma.CounterpartyRepaymentObligation$reminderNoticesArgs<ExtArgs>;
    dispatchQueueItems?: boolean | Prisma.CounterpartyRepaymentObligation$dispatchQueueItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CounterpartyRepaymentObligationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRepaymentObligation"]>;
export type CounterpartyRepaymentObligationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    facilityApplicationId?: boolean;
    dueDate?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRepaymentObligation"]>;
export type CounterpartyRepaymentObligationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    facilityApplicationId?: boolean;
    dueDate?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyRepaymentObligation"]>;
export type CounterpartyRepaymentObligationSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    facilityApplicationId?: boolean;
    dueDate?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type CounterpartyRepaymentObligationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "facilityApplicationId" | "dueDate" | "amountKobo" | "status" | "paidAt" | "paidByUserId" | "createdByUserId" | "createdAt", ExtArgs["result"]["counterpartyRepaymentObligation"]>;
export type CounterpartyRepaymentObligationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
    restructureRequests?: boolean | Prisma.CounterpartyRepaymentObligation$restructureRequestsArgs<ExtArgs>;
    reminderNotices?: boolean | Prisma.CounterpartyRepaymentObligation$reminderNoticesArgs<ExtArgs>;
    dispatchQueueItems?: boolean | Prisma.CounterpartyRepaymentObligation$dispatchQueueItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CounterpartyRepaymentObligationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CounterpartyRepaymentObligationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
};
export type CounterpartyRepaymentObligationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    facilityApplication?: boolean | Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>;
};
export type $CounterpartyRepaymentObligationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CounterpartyRepaymentObligation";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        facilityApplication: Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs> | null;
        restructureRequests: Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>[];
        reminderNotices: Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>[];
        dispatchQueueItems: Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        facilityApplicationId: string | null;
        dueDate: Date;
        amountKobo: bigint;
        status: $Enums.RepaymentObligationStatus;
        paidAt: Date | null;
        paidByUserId: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["counterpartyRepaymentObligation"]>;
    composites: {};
};
export type CounterpartyRepaymentObligationGetPayload<S extends boolean | null | undefined | CounterpartyRepaymentObligationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload, S>;
export type CounterpartyRepaymentObligationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CounterpartyRepaymentObligationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CounterpartyRepaymentObligationCountAggregateInputType | true;
};
export interface CounterpartyRepaymentObligationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CounterpartyRepaymentObligation'];
        meta: {
            name: 'CounterpartyRepaymentObligation';
        };
    };
    findUnique<T extends CounterpartyRepaymentObligationFindUniqueArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CounterpartyRepaymentObligationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CounterpartyRepaymentObligationFindFirstArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CounterpartyRepaymentObligationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CounterpartyRepaymentObligationFindManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CounterpartyRepaymentObligationCreateArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationCreateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CounterpartyRepaymentObligationCreateManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CounterpartyRepaymentObligationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CounterpartyRepaymentObligationDeleteArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationDeleteArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CounterpartyRepaymentObligationUpdateArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationUpdateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CounterpartyRepaymentObligationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyRepaymentObligationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CounterpartyRepaymentObligationUpdateManyArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CounterpartyRepaymentObligationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CounterpartyRepaymentObligationUpsertArgs>(args: Prisma.SelectSubset<T, CounterpartyRepaymentObligationUpsertArgs<ExtArgs>>): Prisma.Prisma__CounterpartyRepaymentObligationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CounterpartyRepaymentObligationCountArgs>(args?: Prisma.Subset<T, CounterpartyRepaymentObligationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CounterpartyRepaymentObligationCountAggregateOutputType> : number>;
    aggregate<T extends CounterpartyRepaymentObligationAggregateArgs>(args: Prisma.Subset<T, CounterpartyRepaymentObligationAggregateArgs>): Prisma.PrismaPromise<GetCounterpartyRepaymentObligationAggregateType<T>>;
    groupBy<T extends CounterpartyRepaymentObligationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CounterpartyRepaymentObligationGroupByArgs['orderBy'];
    } : {
        orderBy?: CounterpartyRepaymentObligationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CounterpartyRepaymentObligationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterpartyRepaymentObligationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CounterpartyRepaymentObligationFieldRefs;
}
export interface Prisma__CounterpartyRepaymentObligationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facilityApplication<T extends Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    restructureRequests<T extends Prisma.CounterpartyRepaymentObligation$restructureRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligation$restructureRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRestructureRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reminderNotices<T extends Prisma.CounterpartyRepaymentObligation$reminderNoticesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligation$reminderNoticesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderNoticeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    dispatchQueueItems<T extends Prisma.CounterpartyRepaymentObligation$dispatchQueueItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyRepaymentObligation$dispatchQueueItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderDispatchQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CounterpartyRepaymentObligationFieldRefs {
    readonly id: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'String'>;
    readonly facilityApplicationId: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'String'>;
    readonly dueDate: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'DateTime'>;
    readonly amountKobo: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'BigInt'>;
    readonly status: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'RepaymentObligationStatus'>;
    readonly paidAt: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'DateTime'>;
    readonly paidByUserId: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CounterpartyRepaymentObligation", 'DateTime'>;
}
export type CounterpartyRepaymentObligationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput | Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRepaymentObligationScalarFieldEnum | Prisma.CounterpartyRepaymentObligationScalarFieldEnum[];
};
export type CounterpartyRepaymentObligationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput | Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRepaymentObligationScalarFieldEnum | Prisma.CounterpartyRepaymentObligationScalarFieldEnum[];
};
export type CounterpartyRepaymentObligationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput | Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRepaymentObligationScalarFieldEnum | Prisma.CounterpartyRepaymentObligationScalarFieldEnum[];
};
export type CounterpartyRepaymentObligationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateInput>;
};
export type CounterpartyRepaymentObligationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CounterpartyRepaymentObligationCreateManyInput | Prisma.CounterpartyRepaymentObligationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyRepaymentObligationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    data: Prisma.CounterpartyRepaymentObligationCreateManyInput | Prisma.CounterpartyRepaymentObligationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CounterpartyRepaymentObligationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyRepaymentObligationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateInput>;
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateManyMutationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    limit?: number;
};
export type CounterpartyRepaymentObligationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateManyMutationInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    limit?: number;
    include?: Prisma.CounterpartyRepaymentObligationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyRepaymentObligationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyRepaymentObligationCreateInput, Prisma.CounterpartyRepaymentObligationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CounterpartyRepaymentObligationUpdateInput, Prisma.CounterpartyRepaymentObligationUncheckedUpdateInput>;
};
export type CounterpartyRepaymentObligationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
};
export type CounterpartyRepaymentObligationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    limit?: number;
};
export type CounterpartyRepaymentObligation$facilityApplicationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
};
export type CounterpartyRepaymentObligation$restructureRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRestructureRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRestructureRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRestructureRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRestructureRequestWhereInput;
    orderBy?: Prisma.CounterpartyRestructureRequestOrderByWithRelationInput | Prisma.CounterpartyRestructureRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRestructureRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRestructureRequestScalarFieldEnum | Prisma.CounterpartyRestructureRequestScalarFieldEnum[];
};
export type CounterpartyRepaymentObligation$reminderNoticesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CounterpartyRepaymentObligation$dispatchQueueItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CounterpartyRepaymentObligationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
};
