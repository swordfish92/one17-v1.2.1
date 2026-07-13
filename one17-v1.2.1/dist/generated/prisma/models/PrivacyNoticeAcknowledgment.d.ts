import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrivacyNoticeAcknowledgmentModel = runtime.Types.Result.DefaultSelection<Prisma.$PrivacyNoticeAcknowledgmentPayload>;
export type AggregatePrivacyNoticeAcknowledgment = {
    _count: PrivacyNoticeAcknowledgmentCountAggregateOutputType | null;
    _min: PrivacyNoticeAcknowledgmentMinAggregateOutputType | null;
    _max: PrivacyNoticeAcknowledgmentMaxAggregateOutputType | null;
};
export type PrivacyNoticeAcknowledgmentMinAggregateOutputType = {
    id: string | null;
    noticeConfigId: string | null;
    context: $Enums.PrivacyNoticeContext | null;
    investorId: string | null;
    counterpartyId: string | null;
    publicIntakeSubmissionId: string | null;
    acknowledgedAt: Date | null;
    ipAddress: string | null;
};
export type PrivacyNoticeAcknowledgmentMaxAggregateOutputType = {
    id: string | null;
    noticeConfigId: string | null;
    context: $Enums.PrivacyNoticeContext | null;
    investorId: string | null;
    counterpartyId: string | null;
    publicIntakeSubmissionId: string | null;
    acknowledgedAt: Date | null;
    ipAddress: string | null;
};
export type PrivacyNoticeAcknowledgmentCountAggregateOutputType = {
    id: number;
    noticeConfigId: number;
    context: number;
    investorId: number;
    counterpartyId: number;
    publicIntakeSubmissionId: number;
    acknowledgedAt: number;
    ipAddress: number;
    _all: number;
};
export type PrivacyNoticeAcknowledgmentMinAggregateInputType = {
    id?: true;
    noticeConfigId?: true;
    context?: true;
    investorId?: true;
    counterpartyId?: true;
    publicIntakeSubmissionId?: true;
    acknowledgedAt?: true;
    ipAddress?: true;
};
export type PrivacyNoticeAcknowledgmentMaxAggregateInputType = {
    id?: true;
    noticeConfigId?: true;
    context?: true;
    investorId?: true;
    counterpartyId?: true;
    publicIntakeSubmissionId?: true;
    acknowledgedAt?: true;
    ipAddress?: true;
};
export type PrivacyNoticeAcknowledgmentCountAggregateInputType = {
    id?: true;
    noticeConfigId?: true;
    context?: true;
    investorId?: true;
    counterpartyId?: true;
    publicIntakeSubmissionId?: true;
    acknowledgedAt?: true;
    ipAddress?: true;
    _all?: true;
};
export type PrivacyNoticeAcknowledgmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrivacyNoticeAcknowledgmentCountAggregateInputType;
    _min?: PrivacyNoticeAcknowledgmentMinAggregateInputType;
    _max?: PrivacyNoticeAcknowledgmentMaxAggregateInputType;
};
export type GetPrivacyNoticeAcknowledgmentAggregateType<T extends PrivacyNoticeAcknowledgmentAggregateArgs> = {
    [P in keyof T & keyof AggregatePrivacyNoticeAcknowledgment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrivacyNoticeAcknowledgment[P]> : Prisma.GetScalarType<T[P], AggregatePrivacyNoticeAcknowledgment[P]>;
};
export type PrivacyNoticeAcknowledgmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithAggregationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithAggregationInput[];
    by: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[] | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum;
    having?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrivacyNoticeAcknowledgmentCountAggregateInputType | true;
    _min?: PrivacyNoticeAcknowledgmentMinAggregateInputType;
    _max?: PrivacyNoticeAcknowledgmentMaxAggregateInputType;
};
export type PrivacyNoticeAcknowledgmentGroupByOutputType = {
    id: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId: string | null;
    counterpartyId: string | null;
    publicIntakeSubmissionId: string | null;
    acknowledgedAt: Date;
    ipAddress: string | null;
    _count: PrivacyNoticeAcknowledgmentCountAggregateOutputType | null;
    _min: PrivacyNoticeAcknowledgmentMinAggregateOutputType | null;
    _max: PrivacyNoticeAcknowledgmentMaxAggregateOutputType | null;
};
export type GetPrivacyNoticeAcknowledgmentGroupByPayload<T extends PrivacyNoticeAcknowledgmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrivacyNoticeAcknowledgmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrivacyNoticeAcknowledgmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrivacyNoticeAcknowledgmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrivacyNoticeAcknowledgmentGroupByOutputType[P]>;
}>>;
export type PrivacyNoticeAcknowledgmentWhereInput = {
    AND?: Prisma.PrivacyNoticeAcknowledgmentWhereInput | Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    OR?: Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    NOT?: Prisma.PrivacyNoticeAcknowledgmentWhereInput | Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    id?: Prisma.UuidFilter<"PrivacyNoticeAcknowledgment"> | string;
    noticeConfigId?: Prisma.UuidFilter<"PrivacyNoticeAcknowledgment"> | string;
    context?: Prisma.EnumPrivacyNoticeContextFilter<"PrivacyNoticeAcknowledgment"> | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    publicIntakeSubmissionId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeFilter<"PrivacyNoticeAcknowledgment"> | Date | string;
    ipAddress?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    noticeConfig?: Prisma.XOR<Prisma.PrivacyNoticeConfigScalarRelationFilter, Prisma.PrivacyNoticeConfigWhereInput>;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    publicIntakeSubmission?: Prisma.XOR<Prisma.PublicIntakeSubmissionNullableScalarRelationFilter, Prisma.PublicIntakeSubmissionWhereInput> | null;
};
export type PrivacyNoticeAcknowledgmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    noticeConfigId?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicIntakeSubmissionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    noticeConfig?: Prisma.PrivacyNoticeConfigOrderByWithRelationInput;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionOrderByWithRelationInput;
};
export type PrivacyNoticeAcknowledgmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PrivacyNoticeAcknowledgmentWhereInput | Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    OR?: Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    NOT?: Prisma.PrivacyNoticeAcknowledgmentWhereInput | Prisma.PrivacyNoticeAcknowledgmentWhereInput[];
    noticeConfigId?: Prisma.UuidFilter<"PrivacyNoticeAcknowledgment"> | string;
    context?: Prisma.EnumPrivacyNoticeContextFilter<"PrivacyNoticeAcknowledgment"> | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    publicIntakeSubmissionId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeFilter<"PrivacyNoticeAcknowledgment"> | Date | string;
    ipAddress?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    noticeConfig?: Prisma.XOR<Prisma.PrivacyNoticeConfigScalarRelationFilter, Prisma.PrivacyNoticeConfigWhereInput>;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    publicIntakeSubmission?: Prisma.XOR<Prisma.PublicIntakeSubmissionNullableScalarRelationFilter, Prisma.PublicIntakeSubmissionWhereInput> | null;
}, "id">;
export type PrivacyNoticeAcknowledgmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    noticeConfigId?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicIntakeSubmissionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PrivacyNoticeAcknowledgmentCountOrderByAggregateInput;
    _max?: Prisma.PrivacyNoticeAcknowledgmentMaxOrderByAggregateInput;
    _min?: Prisma.PrivacyNoticeAcknowledgmentMinOrderByAggregateInput;
};
export type PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string;
    noticeConfigId?: Prisma.UuidWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string;
    context?: Prisma.EnumPrivacyNoticeContextWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.StringNullableWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    counterpartyId?: Prisma.UuidNullableWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    publicIntakeSubmissionId?: Prisma.UuidNullableWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | Date | string;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"PrivacyNoticeAcknowledgment"> | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
    noticeConfig: Prisma.PrivacyNoticeConfigCreateNestedOneWithoutAcknowledgmentsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    noticeConfig?: Prisma.PrivacyNoticeConfigUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateManyInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentListRelationFilter = {
    every?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    some?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    none?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
};
export type PrivacyNoticeAcknowledgmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrivacyNoticeAcknowledgmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    noticeConfigId?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    publicIntakeSubmissionId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PrivacyNoticeAcknowledgmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    noticeConfigId?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    publicIntakeSubmissionId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PrivacyNoticeAcknowledgmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    noticeConfigId?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    publicIntakeSubmissionId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PrivacyNoticeAcknowledgmentCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutInvestorInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentCreateNestedManyWithoutPublicIntakeSubmissionInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutPublicIntakeSubmissionInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithoutPublicIntakeSubmissionNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutPublicIntakeSubmissionInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutPublicIntakeSubmissionInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutPublicIntakeSubmissionInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutPublicIntakeSubmissionNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutPublicIntakeSubmissionInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutPublicIntakeSubmissionInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutPublicIntakeSubmissionInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentCreateNestedManyWithoutNoticeConfigInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutNoticeConfigInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInputEnvelope;
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithoutNoticeConfigNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutNoticeConfigInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutNoticeConfigInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutNoticeConfigInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutNoticeConfigNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput> | Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput[] | Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput[];
    connectOrCreate?: Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput[];
    upsert?: Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutNoticeConfigInput[];
    createMany?: Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInputEnvelope;
    set?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput | Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutNoticeConfigInput[];
    updateMany?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutNoticeConfigInput[];
    deleteMany?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
};
export type EnumPrivacyNoticeContextFieldUpdateOperationsInput = {
    set?: $Enums.PrivacyNoticeContext;
};
export type PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
    noticeConfig: Prisma.PrivacyNoticeConfigCreateNestedOneWithoutAcknowledgmentsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentCreateOrConnectWithoutInvestorInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyInvestorInputEnvelope = {
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutInvestorInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutInvestorInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutInvestorInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutInvestorInput>;
};
export type PrivacyNoticeAcknowledgmentScalarWhereInput = {
    AND?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
    OR?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
    NOT?: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput | Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"PrivacyNoticeAcknowledgment"> | string;
    noticeConfigId?: Prisma.UuidFilter<"PrivacyNoticeAcknowledgment"> | string;
    context?: Prisma.EnumPrivacyNoticeContextFilter<"PrivacyNoticeAcknowledgment"> | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    publicIntakeSubmissionId?: Prisma.UuidNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeFilter<"PrivacyNoticeAcknowledgment"> | Date | string;
    ipAddress?: Prisma.StringNullableFilter<"PrivacyNoticeAcknowledgment"> | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
    noticeConfig: Prisma.PrivacyNoticeConfigCreateNestedOneWithoutAcknowledgmentsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyCounterpartyInputEnvelope = {
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutCounterpartyInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutCounterpartyInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutCounterpartyInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
    noticeConfig: Prisma.PrivacyNoticeConfigCreateNestedOneWithoutAcknowledgmentsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentCreateOrConnectWithoutPublicIntakeSubmissionInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInputEnvelope = {
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutPublicIntakeSubmissionInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutPublicIntakeSubmissionInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutPublicIntakeSubmissionInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutPublicIntakeSubmissionInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutPublicIntakeSubmissionInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutPublicIntakeSubmissionInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutPublicIntakeSubmissionInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutPublicIntakeSubmissionInput>;
};
export type PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
    investor?: Prisma.InvestorCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentCreateOrConnectWithoutNoticeConfigInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInputEnvelope = {
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeAcknowledgmentUpsertWithWhereUniqueWithoutNoticeConfigInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutNoticeConfigInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateWithoutNoticeConfigInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateWithWhereUniqueWithoutNoticeConfigInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateWithoutNoticeConfigInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutNoticeConfigInput>;
};
export type PrivacyNoticeAcknowledgmentUpdateManyWithWhereWithoutNoticeConfigInput = {
    where: Prisma.PrivacyNoticeAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutNoticeConfigInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyInvestorInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    noticeConfig?: Prisma.PrivacyNoticeConfigUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateManyCounterpartyInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    noticeConfig?: Prisma.PrivacyNoticeConfigUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateManyPublicIntakeSubmissionInput = {
    id?: string;
    noticeConfigId: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateWithoutPublicIntakeSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    noticeConfig?: Prisma.PrivacyNoticeConfigUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutPublicIntakeSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutPublicIntakeSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    noticeConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentCreateManyNoticeConfigInput = {
    id?: string;
    context: $Enums.PrivacyNoticeContext;
    investorId?: string | null;
    counterpartyId?: string | null;
    publicIntakeSubmissionId?: string | null;
    acknowledgedAt?: Date | string;
    ipAddress?: string | null;
};
export type PrivacyNoticeAcknowledgmentUpdateWithoutNoticeConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
    publicIntakeSubmission?: Prisma.PublicIntakeSubmissionUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateWithoutNoticeConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutNoticeConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.EnumPrivacyNoticeContextFieldUpdateOperationsInput | $Enums.PrivacyNoticeContext;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicIntakeSubmissionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PrivacyNoticeAcknowledgmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    noticeConfigId?: boolean;
    context?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    publicIntakeSubmissionId?: boolean;
    acknowledgedAt?: boolean;
    ipAddress?: boolean;
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeAcknowledgment"]>;
export type PrivacyNoticeAcknowledgmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    noticeConfigId?: boolean;
    context?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    publicIntakeSubmissionId?: boolean;
    acknowledgedAt?: boolean;
    ipAddress?: boolean;
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeAcknowledgment"]>;
export type PrivacyNoticeAcknowledgmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    noticeConfigId?: boolean;
    context?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    publicIntakeSubmissionId?: boolean;
    acknowledgedAt?: boolean;
    ipAddress?: boolean;
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeAcknowledgment"]>;
export type PrivacyNoticeAcknowledgmentSelectScalar = {
    id?: boolean;
    noticeConfigId?: boolean;
    context?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    publicIntakeSubmissionId?: boolean;
    acknowledgedAt?: boolean;
    ipAddress?: boolean;
};
export type PrivacyNoticeAcknowledgmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "noticeConfigId" | "context" | "investorId" | "counterpartyId" | "publicIntakeSubmissionId" | "acknowledgedAt" | "ipAddress", ExtArgs["result"]["privacyNoticeAcknowledgment"]>;
export type PrivacyNoticeAcknowledgmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
};
export type PrivacyNoticeAcknowledgmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
};
export type PrivacyNoticeAcknowledgmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    noticeConfig?: boolean | Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>;
    publicIntakeSubmission?: boolean | Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>;
};
export type $PrivacyNoticeAcknowledgmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrivacyNoticeAcknowledgment";
    objects: {
        noticeConfig: Prisma.$PrivacyNoticeConfigPayload<ExtArgs>;
        investor: Prisma.$InvestorPayload<ExtArgs> | null;
        counterparty: Prisma.$CounterpartyPayload<ExtArgs> | null;
        publicIntakeSubmission: Prisma.$PublicIntakeSubmissionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        noticeConfigId: string;
        context: $Enums.PrivacyNoticeContext;
        investorId: string | null;
        counterpartyId: string | null;
        publicIntakeSubmissionId: string | null;
        acknowledgedAt: Date;
        ipAddress: string | null;
    }, ExtArgs["result"]["privacyNoticeAcknowledgment"]>;
    composites: {};
};
export type PrivacyNoticeAcknowledgmentGetPayload<S extends boolean | null | undefined | PrivacyNoticeAcknowledgmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload, S>;
export type PrivacyNoticeAcknowledgmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrivacyNoticeAcknowledgmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrivacyNoticeAcknowledgmentCountAggregateInputType | true;
};
export interface PrivacyNoticeAcknowledgmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrivacyNoticeAcknowledgment'];
        meta: {
            name: 'PrivacyNoticeAcknowledgment';
        };
    };
    findUnique<T extends PrivacyNoticeAcknowledgmentFindUniqueArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrivacyNoticeAcknowledgmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrivacyNoticeAcknowledgmentFindFirstArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrivacyNoticeAcknowledgmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrivacyNoticeAcknowledgmentFindManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrivacyNoticeAcknowledgmentCreateArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentCreateArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrivacyNoticeAcknowledgmentCreateManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrivacyNoticeAcknowledgmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrivacyNoticeAcknowledgmentDeleteArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentDeleteArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrivacyNoticeAcknowledgmentUpdateArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentUpdateArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrivacyNoticeAcknowledgmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrivacyNoticeAcknowledgmentUpdateManyArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrivacyNoticeAcknowledgmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrivacyNoticeAcknowledgmentUpsertArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeAcknowledgmentUpsertArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrivacyNoticeAcknowledgmentCountArgs>(args?: Prisma.Subset<T, PrivacyNoticeAcknowledgmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrivacyNoticeAcknowledgmentCountAggregateOutputType> : number>;
    aggregate<T extends PrivacyNoticeAcknowledgmentAggregateArgs>(args: Prisma.Subset<T, PrivacyNoticeAcknowledgmentAggregateArgs>): Prisma.PrismaPromise<GetPrivacyNoticeAcknowledgmentAggregateType<T>>;
    groupBy<T extends PrivacyNoticeAcknowledgmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrivacyNoticeAcknowledgmentGroupByArgs['orderBy'];
    } : {
        orderBy?: PrivacyNoticeAcknowledgmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrivacyNoticeAcknowledgmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyNoticeAcknowledgmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrivacyNoticeAcknowledgmentFieldRefs;
}
export interface Prisma__PrivacyNoticeAcknowledgmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    noticeConfig<T extends Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrivacyNoticeConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    investor<T extends Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrivacyNoticeAcknowledgment$investorArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    counterparty<T extends Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    publicIntakeSubmission<T extends Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrivacyNoticeAcknowledgmentFieldRefs {
    readonly id: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
    readonly noticeConfigId: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
    readonly context: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'PrivacyNoticeContext'>;
    readonly investorId: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
    readonly publicIntakeSubmissionId: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
    readonly acknowledgedAt: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"PrivacyNoticeAcknowledgment", 'String'>;
}
export type PrivacyNoticeAcknowledgmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
};
export type PrivacyNoticeAcknowledgmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
};
export type PrivacyNoticeAcknowledgmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[];
};
export type PrivacyNoticeAcknowledgmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[];
};
export type PrivacyNoticeAcknowledgmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[];
};
export type PrivacyNoticeAcknowledgmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateInput>;
};
export type PrivacyNoticeAcknowledgmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeAcknowledgmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    data: Prisma.PrivacyNoticeAcknowledgmentCreateManyInput | Prisma.PrivacyNoticeAcknowledgmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrivacyNoticeAcknowledgmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrivacyNoticeAcknowledgmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateInput>;
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
};
export type PrivacyNoticeAcknowledgmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyInput>;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    limit?: number;
};
export type PrivacyNoticeAcknowledgmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateManyMutationInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyInput>;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    limit?: number;
    include?: Prisma.PrivacyNoticeAcknowledgmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrivacyNoticeAcknowledgmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentCreateInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrivacyNoticeAcknowledgmentUpdateInput, Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateInput>;
};
export type PrivacyNoticeAcknowledgmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
};
export type PrivacyNoticeAcknowledgmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    limit?: number;
};
export type PrivacyNoticeAcknowledgment$investorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type PrivacyNoticeAcknowledgment$counterpartyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartySelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWhereInput;
};
export type PrivacyNoticeAcknowledgment$publicIntakeSubmissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
};
export type PrivacyNoticeAcknowledgmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
};
