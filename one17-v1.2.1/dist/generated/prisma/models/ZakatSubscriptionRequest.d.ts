import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ZakatSubscriptionRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$ZakatSubscriptionRequestPayload>;
export type AggregateZakatSubscriptionRequest = {
    _count: ZakatSubscriptionRequestCountAggregateOutputType | null;
    _min: ZakatSubscriptionRequestMinAggregateOutputType | null;
    _max: ZakatSubscriptionRequestMaxAggregateOutputType | null;
};
export type ZakatSubscriptionRequestMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    status: $Enums.ZakatSubscriptionRequestStatus | null;
    consentAcknowledgedAt: Date | null;
    requestedAt: Date | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
};
export type ZakatSubscriptionRequestMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    status: $Enums.ZakatSubscriptionRequestStatus | null;
    consentAcknowledgedAt: Date | null;
    requestedAt: Date | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
};
export type ZakatSubscriptionRequestCountAggregateOutputType = {
    id: number;
    investorId: number;
    status: number;
    consentAcknowledgedAt: number;
    requestedAt: number;
    approvedByUserId: number;
    approvedAt: number;
    _all: number;
};
export type ZakatSubscriptionRequestMinAggregateInputType = {
    id?: true;
    investorId?: true;
    status?: true;
    consentAcknowledgedAt?: true;
    requestedAt?: true;
    approvedByUserId?: true;
    approvedAt?: true;
};
export type ZakatSubscriptionRequestMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    status?: true;
    consentAcknowledgedAt?: true;
    requestedAt?: true;
    approvedByUserId?: true;
    approvedAt?: true;
};
export type ZakatSubscriptionRequestCountAggregateInputType = {
    id?: true;
    investorId?: true;
    status?: true;
    consentAcknowledgedAt?: true;
    requestedAt?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    _all?: true;
};
export type ZakatSubscriptionRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    orderBy?: Prisma.ZakatSubscriptionRequestOrderByWithRelationInput | Prisma.ZakatSubscriptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZakatSubscriptionRequestCountAggregateInputType;
    _min?: ZakatSubscriptionRequestMinAggregateInputType;
    _max?: ZakatSubscriptionRequestMaxAggregateInputType;
};
export type GetZakatSubscriptionRequestAggregateType<T extends ZakatSubscriptionRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateZakatSubscriptionRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZakatSubscriptionRequest[P]> : Prisma.GetScalarType<T[P], AggregateZakatSubscriptionRequest[P]>;
};
export type ZakatSubscriptionRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    orderBy?: Prisma.ZakatSubscriptionRequestOrderByWithAggregationInput | Prisma.ZakatSubscriptionRequestOrderByWithAggregationInput[];
    by: Prisma.ZakatSubscriptionRequestScalarFieldEnum[] | Prisma.ZakatSubscriptionRequestScalarFieldEnum;
    having?: Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZakatSubscriptionRequestCountAggregateInputType | true;
    _min?: ZakatSubscriptionRequestMinAggregateInputType;
    _max?: ZakatSubscriptionRequestMaxAggregateInputType;
};
export type ZakatSubscriptionRequestGroupByOutputType = {
    id: string;
    investorId: string;
    status: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date;
    requestedAt: Date;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    _count: ZakatSubscriptionRequestCountAggregateOutputType | null;
    _min: ZakatSubscriptionRequestMinAggregateOutputType | null;
    _max: ZakatSubscriptionRequestMaxAggregateOutputType | null;
};
export type GetZakatSubscriptionRequestGroupByPayload<T extends ZakatSubscriptionRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZakatSubscriptionRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZakatSubscriptionRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZakatSubscriptionRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZakatSubscriptionRequestGroupByOutputType[P]>;
}>>;
export type ZakatSubscriptionRequestWhereInput = {
    AND?: Prisma.ZakatSubscriptionRequestWhereInput | Prisma.ZakatSubscriptionRequestWhereInput[];
    OR?: Prisma.ZakatSubscriptionRequestWhereInput[];
    NOT?: Prisma.ZakatSubscriptionRequestWhereInput | Prisma.ZakatSubscriptionRequestWhereInput[];
    id?: Prisma.UuidFilter<"ZakatSubscriptionRequest"> | string;
    investorId?: Prisma.StringFilter<"ZakatSubscriptionRequest"> | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFilter<"ZakatSubscriptionRequest"> | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    requestedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ZakatSubscriptionRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ZakatSubscriptionRequest"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
};
export type ZakatSubscriptionRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consentAcknowledgedAt?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
};
export type ZakatSubscriptionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ZakatSubscriptionRequestWhereInput | Prisma.ZakatSubscriptionRequestWhereInput[];
    OR?: Prisma.ZakatSubscriptionRequestWhereInput[];
    NOT?: Prisma.ZakatSubscriptionRequestWhereInput | Prisma.ZakatSubscriptionRequestWhereInput[];
    investorId?: Prisma.StringFilter<"ZakatSubscriptionRequest"> | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFilter<"ZakatSubscriptionRequest"> | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    requestedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ZakatSubscriptionRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ZakatSubscriptionRequest"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
}, "id">;
export type ZakatSubscriptionRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consentAcknowledgedAt?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ZakatSubscriptionRequestCountOrderByAggregateInput;
    _max?: Prisma.ZakatSubscriptionRequestMaxOrderByAggregateInput;
    _min?: Prisma.ZakatSubscriptionRequestMinOrderByAggregateInput;
};
export type ZakatSubscriptionRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput | Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput | Prisma.ZakatSubscriptionRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ZakatSubscriptionRequest"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"ZakatSubscriptionRequest"> | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusWithAggregatesFilter<"ZakatSubscriptionRequest"> | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatSubscriptionRequest"> | Date | string;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatSubscriptionRequest"> | Date | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatSubscriptionRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatSubscriptionRequest"> | Date | string | null;
};
export type ZakatSubscriptionRequestCreateInput = {
    id?: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutZakatSubscriptionRequestsInput;
};
export type ZakatSubscriptionRequestUncheckedCreateInput = {
    id?: string;
    investorId: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
};
export type ZakatSubscriptionRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutZakatSubscriptionRequestsNestedInput;
};
export type ZakatSubscriptionRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestCreateManyInput = {
    id?: string;
    investorId: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
};
export type ZakatSubscriptionRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestListRelationFilter = {
    every?: Prisma.ZakatSubscriptionRequestWhereInput;
    some?: Prisma.ZakatSubscriptionRequestWhereInput;
    none?: Prisma.ZakatSubscriptionRequestWhereInput;
};
export type ZakatSubscriptionRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ZakatSubscriptionRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consentAcknowledgedAt?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
};
export type ZakatSubscriptionRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consentAcknowledgedAt?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
};
export type ZakatSubscriptionRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consentAcknowledgedAt?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
};
export type ZakatSubscriptionRequestCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput> | Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput[] | Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput | Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ZakatSubscriptionRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
};
export type ZakatSubscriptionRequestUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput> | Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput[] | Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput | Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ZakatSubscriptionRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
};
export type ZakatSubscriptionRequestUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput> | Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput[] | Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput | Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ZakatSubscriptionRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ZakatSubscriptionRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    disconnect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    delete?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    connect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    update?: Prisma.ZakatSubscriptionRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ZakatSubscriptionRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ZakatSubscriptionRequestScalarWhereInput | Prisma.ZakatSubscriptionRequestScalarWhereInput[];
};
export type ZakatSubscriptionRequestUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput> | Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput[] | Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput | Prisma.ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ZakatSubscriptionRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ZakatSubscriptionRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    disconnect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    delete?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    connect?: Prisma.ZakatSubscriptionRequestWhereUniqueInput | Prisma.ZakatSubscriptionRequestWhereUniqueInput[];
    update?: Prisma.ZakatSubscriptionRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ZakatSubscriptionRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.ZakatSubscriptionRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ZakatSubscriptionRequestScalarWhereInput | Prisma.ZakatSubscriptionRequestScalarWhereInput[];
};
export type EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ZakatSubscriptionRequestStatus;
};
export type ZakatSubscriptionRequestCreateWithoutInvestorInput = {
    id?: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
};
export type ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput = {
    id?: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
};
export type ZakatSubscriptionRequestCreateOrConnectWithoutInvestorInput = {
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput>;
};
export type ZakatSubscriptionRequestCreateManyInvestorInputEnvelope = {
    data: Prisma.ZakatSubscriptionRequestCreateManyInvestorInput | Prisma.ZakatSubscriptionRequestCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type ZakatSubscriptionRequestUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedCreateWithoutInvestorInput>;
};
export type ZakatSubscriptionRequestUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateWithoutInvestorInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateWithoutInvestorInput>;
};
export type ZakatSubscriptionRequestUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.ZakatSubscriptionRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateManyMutationInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateManyWithoutInvestorInput>;
};
export type ZakatSubscriptionRequestScalarWhereInput = {
    AND?: Prisma.ZakatSubscriptionRequestScalarWhereInput | Prisma.ZakatSubscriptionRequestScalarWhereInput[];
    OR?: Prisma.ZakatSubscriptionRequestScalarWhereInput[];
    NOT?: Prisma.ZakatSubscriptionRequestScalarWhereInput | Prisma.ZakatSubscriptionRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"ZakatSubscriptionRequest"> | string;
    investorId?: Prisma.StringFilter<"ZakatSubscriptionRequest"> | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFilter<"ZakatSubscriptionRequest"> | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    requestedAt?: Prisma.DateTimeFilter<"ZakatSubscriptionRequest"> | Date | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ZakatSubscriptionRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ZakatSubscriptionRequest"> | Date | string | null;
};
export type ZakatSubscriptionRequestCreateManyInvestorInput = {
    id?: string;
    status?: $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt: Date | string;
    requestedAt?: Date | string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
};
export type ZakatSubscriptionRequestUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumZakatSubscriptionRequestStatusFieldUpdateOperationsInput | $Enums.ZakatSubscriptionRequestStatus;
    consentAcknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatSubscriptionRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    status?: boolean;
    consentAcknowledgedAt?: boolean;
    requestedAt?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatSubscriptionRequest"]>;
export type ZakatSubscriptionRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    status?: boolean;
    consentAcknowledgedAt?: boolean;
    requestedAt?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatSubscriptionRequest"]>;
export type ZakatSubscriptionRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    status?: boolean;
    consentAcknowledgedAt?: boolean;
    requestedAt?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatSubscriptionRequest"]>;
export type ZakatSubscriptionRequestSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    status?: boolean;
    consentAcknowledgedAt?: boolean;
    requestedAt?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
};
export type ZakatSubscriptionRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "status" | "consentAcknowledgedAt" | "requestedAt" | "approvedByUserId" | "approvedAt", ExtArgs["result"]["zakatSubscriptionRequest"]>;
export type ZakatSubscriptionRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type ZakatSubscriptionRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type ZakatSubscriptionRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type $ZakatSubscriptionRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZakatSubscriptionRequest";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        status: $Enums.ZakatSubscriptionRequestStatus;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
        approvedByUserId: string | null;
        approvedAt: Date | null;
    }, ExtArgs["result"]["zakatSubscriptionRequest"]>;
    composites: {};
};
export type ZakatSubscriptionRequestGetPayload<S extends boolean | null | undefined | ZakatSubscriptionRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload, S>;
export type ZakatSubscriptionRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZakatSubscriptionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZakatSubscriptionRequestCountAggregateInputType | true;
};
export interface ZakatSubscriptionRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZakatSubscriptionRequest'];
        meta: {
            name: 'ZakatSubscriptionRequest';
        };
    };
    findUnique<T extends ZakatSubscriptionRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ZakatSubscriptionRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ZakatSubscriptionRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ZakatSubscriptionRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ZakatSubscriptionRequestFindManyArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ZakatSubscriptionRequestCreateArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestCreateArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ZakatSubscriptionRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ZakatSubscriptionRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ZakatSubscriptionRequestDeleteArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ZakatSubscriptionRequestUpdateArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ZakatSubscriptionRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZakatSubscriptionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ZakatSubscriptionRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ZakatSubscriptionRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ZakatSubscriptionRequestUpsertArgs>(args: Prisma.SelectSubset<T, ZakatSubscriptionRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__ZakatSubscriptionRequestClient<runtime.Types.Result.GetResult<Prisma.$ZakatSubscriptionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ZakatSubscriptionRequestCountArgs>(args?: Prisma.Subset<T, ZakatSubscriptionRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZakatSubscriptionRequestCountAggregateOutputType> : number>;
    aggregate<T extends ZakatSubscriptionRequestAggregateArgs>(args: Prisma.Subset<T, ZakatSubscriptionRequestAggregateArgs>): Prisma.PrismaPromise<GetZakatSubscriptionRequestAggregateType<T>>;
    groupBy<T extends ZakatSubscriptionRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZakatSubscriptionRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: ZakatSubscriptionRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZakatSubscriptionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZakatSubscriptionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ZakatSubscriptionRequestFieldRefs;
}
export interface Prisma__ZakatSubscriptionRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ZakatSubscriptionRequestFieldRefs {
    readonly id: Prisma.FieldRef<"ZakatSubscriptionRequest", 'String'>;
    readonly investorId: Prisma.FieldRef<"ZakatSubscriptionRequest", 'String'>;
    readonly status: Prisma.FieldRef<"ZakatSubscriptionRequest", 'ZakatSubscriptionRequestStatus'>;
    readonly consentAcknowledgedAt: Prisma.FieldRef<"ZakatSubscriptionRequest", 'DateTime'>;
    readonly requestedAt: Prisma.FieldRef<"ZakatSubscriptionRequest", 'DateTime'>;
    readonly approvedByUserId: Prisma.FieldRef<"ZakatSubscriptionRequest", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"ZakatSubscriptionRequest", 'DateTime'>;
}
export type ZakatSubscriptionRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
};
export type ZakatSubscriptionRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
};
export type ZakatSubscriptionRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    orderBy?: Prisma.ZakatSubscriptionRequestOrderByWithRelationInput | Prisma.ZakatSubscriptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatSubscriptionRequestScalarFieldEnum | Prisma.ZakatSubscriptionRequestScalarFieldEnum[];
};
export type ZakatSubscriptionRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    orderBy?: Prisma.ZakatSubscriptionRequestOrderByWithRelationInput | Prisma.ZakatSubscriptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatSubscriptionRequestScalarFieldEnum | Prisma.ZakatSubscriptionRequestScalarFieldEnum[];
};
export type ZakatSubscriptionRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    orderBy?: Prisma.ZakatSubscriptionRequestOrderByWithRelationInput | Prisma.ZakatSubscriptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatSubscriptionRequestScalarFieldEnum | Prisma.ZakatSubscriptionRequestScalarFieldEnum[];
};
export type ZakatSubscriptionRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateInput, Prisma.ZakatSubscriptionRequestUncheckedCreateInput>;
};
export type ZakatSubscriptionRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ZakatSubscriptionRequestCreateManyInput | Prisma.ZakatSubscriptionRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatSubscriptionRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    data: Prisma.ZakatSubscriptionRequestCreateManyInput | Prisma.ZakatSubscriptionRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ZakatSubscriptionRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ZakatSubscriptionRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateInput>;
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
};
export type ZakatSubscriptionRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateManyMutationInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateManyInput>;
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    limit?: number;
};
export type ZakatSubscriptionRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateManyMutationInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateManyInput>;
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    limit?: number;
    include?: Prisma.ZakatSubscriptionRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ZakatSubscriptionRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatSubscriptionRequestCreateInput, Prisma.ZakatSubscriptionRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ZakatSubscriptionRequestUpdateInput, Prisma.ZakatSubscriptionRequestUncheckedUpdateInput>;
};
export type ZakatSubscriptionRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
    where: Prisma.ZakatSubscriptionRequestWhereUniqueInput;
};
export type ZakatSubscriptionRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatSubscriptionRequestWhereInput;
    limit?: number;
};
export type ZakatSubscriptionRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatSubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.ZakatSubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.ZakatSubscriptionRequestInclude<ExtArgs> | null;
};
