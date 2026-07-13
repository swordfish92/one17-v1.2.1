import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentInflowLogModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentInflowLogPayload>;
export type AggregatePaymentInflowLog = {
    _count: PaymentInflowLogCountAggregateOutputType | null;
    _min: PaymentInflowLogMinAggregateOutputType | null;
    _max: PaymentInflowLogMaxAggregateOutputType | null;
};
export type PaymentInflowLogMinAggregateOutputType = {
    id: string | null;
    txnId: string | null;
    payerName: string | null;
    payerBankName: string | null;
    payerAccountNumber: string | null;
    declaredRelationship: string | null;
    beneficiaryInvestorId: string | null;
    status: $Enums.PaymentInflowStatus | null;
    complianceFlagged: boolean | null;
    declaredByUserId: string | null;
    createdAt: Date | null;
};
export type PaymentInflowLogMaxAggregateOutputType = {
    id: string | null;
    txnId: string | null;
    payerName: string | null;
    payerBankName: string | null;
    payerAccountNumber: string | null;
    declaredRelationship: string | null;
    beneficiaryInvestorId: string | null;
    status: $Enums.PaymentInflowStatus | null;
    complianceFlagged: boolean | null;
    declaredByUserId: string | null;
    createdAt: Date | null;
};
export type PaymentInflowLogCountAggregateOutputType = {
    id: number;
    txnId: number;
    payerName: number;
    payerBankName: number;
    payerAccountNumber: number;
    declaredRelationship: number;
    beneficiaryInvestorId: number;
    status: number;
    complianceFlagged: number;
    declaredByUserId: number;
    createdAt: number;
    _all: number;
};
export type PaymentInflowLogMinAggregateInputType = {
    id?: true;
    txnId?: true;
    payerName?: true;
    payerBankName?: true;
    payerAccountNumber?: true;
    declaredRelationship?: true;
    beneficiaryInvestorId?: true;
    status?: true;
    complianceFlagged?: true;
    declaredByUserId?: true;
    createdAt?: true;
};
export type PaymentInflowLogMaxAggregateInputType = {
    id?: true;
    txnId?: true;
    payerName?: true;
    payerBankName?: true;
    payerAccountNumber?: true;
    declaredRelationship?: true;
    beneficiaryInvestorId?: true;
    status?: true;
    complianceFlagged?: true;
    declaredByUserId?: true;
    createdAt?: true;
};
export type PaymentInflowLogCountAggregateInputType = {
    id?: true;
    txnId?: true;
    payerName?: true;
    payerBankName?: true;
    payerAccountNumber?: true;
    declaredRelationship?: true;
    beneficiaryInvestorId?: true;
    status?: true;
    complianceFlagged?: true;
    declaredByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PaymentInflowLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentInflowLogWhereInput;
    orderBy?: Prisma.PaymentInflowLogOrderByWithRelationInput | Prisma.PaymentInflowLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentInflowLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentInflowLogCountAggregateInputType;
    _min?: PaymentInflowLogMinAggregateInputType;
    _max?: PaymentInflowLogMaxAggregateInputType;
};
export type GetPaymentInflowLogAggregateType<T extends PaymentInflowLogAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentInflowLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentInflowLog[P]> : Prisma.GetScalarType<T[P], AggregatePaymentInflowLog[P]>;
};
export type PaymentInflowLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentInflowLogWhereInput;
    orderBy?: Prisma.PaymentInflowLogOrderByWithAggregationInput | Prisma.PaymentInflowLogOrderByWithAggregationInput[];
    by: Prisma.PaymentInflowLogScalarFieldEnum[] | Prisma.PaymentInflowLogScalarFieldEnum;
    having?: Prisma.PaymentInflowLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentInflowLogCountAggregateInputType | true;
    _min?: PaymentInflowLogMinAggregateInputType;
    _max?: PaymentInflowLogMaxAggregateInputType;
};
export type PaymentInflowLogGroupByOutputType = {
    id: string;
    txnId: string | null;
    payerName: string;
    payerBankName: string | null;
    payerAccountNumber: string | null;
    declaredRelationship: string;
    beneficiaryInvestorId: string | null;
    status: $Enums.PaymentInflowStatus;
    complianceFlagged: boolean;
    declaredByUserId: string | null;
    createdAt: Date;
    _count: PaymentInflowLogCountAggregateOutputType | null;
    _min: PaymentInflowLogMinAggregateOutputType | null;
    _max: PaymentInflowLogMaxAggregateOutputType | null;
};
export type GetPaymentInflowLogGroupByPayload<T extends PaymentInflowLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentInflowLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentInflowLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentInflowLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentInflowLogGroupByOutputType[P]>;
}>>;
export type PaymentInflowLogWhereInput = {
    AND?: Prisma.PaymentInflowLogWhereInput | Prisma.PaymentInflowLogWhereInput[];
    OR?: Prisma.PaymentInflowLogWhereInput[];
    NOT?: Prisma.PaymentInflowLogWhereInput | Prisma.PaymentInflowLogWhereInput[];
    id?: Prisma.UuidFilter<"PaymentInflowLog"> | string;
    txnId?: Prisma.UuidNullableFilter<"PaymentInflowLog"> | string | null;
    payerName?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    payerBankName?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    payerAccountNumber?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    declaredRelationship?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    beneficiaryInvestorId?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    status?: Prisma.EnumPaymentInflowStatusFilter<"PaymentInflowLog"> | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFilter<"PaymentInflowLog"> | boolean;
    declaredByUserId?: Prisma.UuidNullableFilter<"PaymentInflowLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentInflowLog"> | Date | string;
    txn?: Prisma.XOR<Prisma.TxnNullableScalarRelationFilter, Prisma.TxnWhereInput> | null;
    beneficiary?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
};
export type PaymentInflowLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    txnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payerName?: Prisma.SortOrder;
    payerBankName?: Prisma.SortOrderInput | Prisma.SortOrder;
    payerAccountNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    declaredRelationship?: Prisma.SortOrder;
    beneficiaryInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    complianceFlagged?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    txn?: Prisma.TxnOrderByWithRelationInput;
    beneficiary?: Prisma.InvestorOrderByWithRelationInput;
};
export type PaymentInflowLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    txnId?: string;
    AND?: Prisma.PaymentInflowLogWhereInput | Prisma.PaymentInflowLogWhereInput[];
    OR?: Prisma.PaymentInflowLogWhereInput[];
    NOT?: Prisma.PaymentInflowLogWhereInput | Prisma.PaymentInflowLogWhereInput[];
    payerName?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    payerBankName?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    payerAccountNumber?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    declaredRelationship?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    beneficiaryInvestorId?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    status?: Prisma.EnumPaymentInflowStatusFilter<"PaymentInflowLog"> | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFilter<"PaymentInflowLog"> | boolean;
    declaredByUserId?: Prisma.UuidNullableFilter<"PaymentInflowLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentInflowLog"> | Date | string;
    txn?: Prisma.XOR<Prisma.TxnNullableScalarRelationFilter, Prisma.TxnWhereInput> | null;
    beneficiary?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
}, "id" | "txnId">;
export type PaymentInflowLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    txnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payerName?: Prisma.SortOrder;
    payerBankName?: Prisma.SortOrderInput | Prisma.SortOrder;
    payerAccountNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    declaredRelationship?: Prisma.SortOrder;
    beneficiaryInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    complianceFlagged?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentInflowLogCountOrderByAggregateInput;
    _max?: Prisma.PaymentInflowLogMaxOrderByAggregateInput;
    _min?: Prisma.PaymentInflowLogMinOrderByAggregateInput;
};
export type PaymentInflowLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentInflowLogScalarWhereWithAggregatesInput | Prisma.PaymentInflowLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentInflowLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentInflowLogScalarWhereWithAggregatesInput | Prisma.PaymentInflowLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentInflowLog"> | string;
    txnId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentInflowLog"> | string | null;
    payerName?: Prisma.StringWithAggregatesFilter<"PaymentInflowLog"> | string;
    payerBankName?: Prisma.StringNullableWithAggregatesFilter<"PaymentInflowLog"> | string | null;
    payerAccountNumber?: Prisma.StringNullableWithAggregatesFilter<"PaymentInflowLog"> | string | null;
    declaredRelationship?: Prisma.StringWithAggregatesFilter<"PaymentInflowLog"> | string;
    beneficiaryInvestorId?: Prisma.StringNullableWithAggregatesFilter<"PaymentInflowLog"> | string | null;
    status?: Prisma.EnumPaymentInflowStatusWithAggregatesFilter<"PaymentInflowLog"> | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolWithAggregatesFilter<"PaymentInflowLog"> | boolean;
    declaredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentInflowLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentInflowLog"> | Date | string;
};
export type PaymentInflowLogCreateInput = {
    id?: string;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
    txn?: Prisma.TxnCreateNestedOneWithoutPaymentInflowLogInput;
    beneficiary?: Prisma.InvestorCreateNestedOneWithoutPaymentInflowsInput;
};
export type PaymentInflowLogUncheckedCreateInput = {
    id?: string;
    txnId?: string | null;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    beneficiaryInvestorId?: string | null;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
};
export type PaymentInflowLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    txn?: Prisma.TxnUpdateOneWithoutPaymentInflowLogNestedInput;
    beneficiary?: Prisma.InvestorUpdateOneWithoutPaymentInflowsNestedInput;
};
export type PaymentInflowLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    beneficiaryInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogCreateManyInput = {
    id?: string;
    txnId?: string | null;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    beneficiaryInvestorId?: string | null;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
};
export type PaymentInflowLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    beneficiaryInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogListRelationFilter = {
    every?: Prisma.PaymentInflowLogWhereInput;
    some?: Prisma.PaymentInflowLogWhereInput;
    none?: Prisma.PaymentInflowLogWhereInput;
};
export type PaymentInflowLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentInflowLogNullableScalarRelationFilter = {
    is?: Prisma.PaymentInflowLogWhereInput | null;
    isNot?: Prisma.PaymentInflowLogWhereInput | null;
};
export type PaymentInflowLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txnId?: Prisma.SortOrder;
    payerName?: Prisma.SortOrder;
    payerBankName?: Prisma.SortOrder;
    payerAccountNumber?: Prisma.SortOrder;
    declaredRelationship?: Prisma.SortOrder;
    beneficiaryInvestorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    complianceFlagged?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentInflowLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txnId?: Prisma.SortOrder;
    payerName?: Prisma.SortOrder;
    payerBankName?: Prisma.SortOrder;
    payerAccountNumber?: Prisma.SortOrder;
    declaredRelationship?: Prisma.SortOrder;
    beneficiaryInvestorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    complianceFlagged?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentInflowLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txnId?: Prisma.SortOrder;
    payerName?: Prisma.SortOrder;
    payerBankName?: Prisma.SortOrder;
    payerAccountNumber?: Prisma.SortOrder;
    declaredRelationship?: Prisma.SortOrder;
    beneficiaryInvestorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    complianceFlagged?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentInflowLogCreateNestedManyWithoutBeneficiaryInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput> | Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput[] | Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput[];
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput | Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput[];
    createMany?: Prisma.PaymentInflowLogCreateManyBeneficiaryInputEnvelope;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
};
export type PaymentInflowLogUncheckedCreateNestedManyWithoutBeneficiaryInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput> | Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput[] | Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput[];
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput | Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput[];
    createMany?: Prisma.PaymentInflowLogCreateManyBeneficiaryInputEnvelope;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
};
export type PaymentInflowLogUpdateManyWithoutBeneficiaryNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput> | Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput[] | Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput[];
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput | Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput[];
    upsert?: Prisma.PaymentInflowLogUpsertWithWhereUniqueWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpsertWithWhereUniqueWithoutBeneficiaryInput[];
    createMany?: Prisma.PaymentInflowLogCreateManyBeneficiaryInputEnvelope;
    set?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    disconnect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    delete?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    connect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    update?: Prisma.PaymentInflowLogUpdateWithWhereUniqueWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpdateWithWhereUniqueWithoutBeneficiaryInput[];
    updateMany?: Prisma.PaymentInflowLogUpdateManyWithWhereWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpdateManyWithWhereWithoutBeneficiaryInput[];
    deleteMany?: Prisma.PaymentInflowLogScalarWhereInput | Prisma.PaymentInflowLogScalarWhereInput[];
};
export type PaymentInflowLogUncheckedUpdateManyWithoutBeneficiaryNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput> | Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput[] | Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput[];
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput | Prisma.PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput[];
    upsert?: Prisma.PaymentInflowLogUpsertWithWhereUniqueWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpsertWithWhereUniqueWithoutBeneficiaryInput[];
    createMany?: Prisma.PaymentInflowLogCreateManyBeneficiaryInputEnvelope;
    set?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    disconnect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    delete?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    connect?: Prisma.PaymentInflowLogWhereUniqueInput | Prisma.PaymentInflowLogWhereUniqueInput[];
    update?: Prisma.PaymentInflowLogUpdateWithWhereUniqueWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpdateWithWhereUniqueWithoutBeneficiaryInput[];
    updateMany?: Prisma.PaymentInflowLogUpdateManyWithWhereWithoutBeneficiaryInput | Prisma.PaymentInflowLogUpdateManyWithWhereWithoutBeneficiaryInput[];
    deleteMany?: Prisma.PaymentInflowLogScalarWhereInput | Prisma.PaymentInflowLogScalarWhereInput[];
};
export type PaymentInflowLogCreateNestedOneWithoutTxnInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutTxnInput;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogUncheckedCreateNestedOneWithoutTxnInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutTxnInput;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogUpdateOneWithoutTxnNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutTxnInput;
    upsert?: Prisma.PaymentInflowLogUpsertWithoutTxnInput;
    disconnect?: Prisma.PaymentInflowLogWhereInput | boolean;
    delete?: Prisma.PaymentInflowLogWhereInput | boolean;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentInflowLogUpdateToOneWithWhereWithoutTxnInput, Prisma.PaymentInflowLogUpdateWithoutTxnInput>, Prisma.PaymentInflowLogUncheckedUpdateWithoutTxnInput>;
};
export type PaymentInflowLogUncheckedUpdateOneWithoutTxnNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
    connectOrCreate?: Prisma.PaymentInflowLogCreateOrConnectWithoutTxnInput;
    upsert?: Prisma.PaymentInflowLogUpsertWithoutTxnInput;
    disconnect?: Prisma.PaymentInflowLogWhereInput | boolean;
    delete?: Prisma.PaymentInflowLogWhereInput | boolean;
    connect?: Prisma.PaymentInflowLogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentInflowLogUpdateToOneWithWhereWithoutTxnInput, Prisma.PaymentInflowLogUpdateWithoutTxnInput>, Prisma.PaymentInflowLogUncheckedUpdateWithoutTxnInput>;
};
export type EnumPaymentInflowStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentInflowStatus;
};
export type PaymentInflowLogCreateWithoutBeneficiaryInput = {
    id?: string;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
    txn?: Prisma.TxnCreateNestedOneWithoutPaymentInflowLogInput;
};
export type PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput = {
    id?: string;
    txnId?: string | null;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
};
export type PaymentInflowLogCreateOrConnectWithoutBeneficiaryInput = {
    where: Prisma.PaymentInflowLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput>;
};
export type PaymentInflowLogCreateManyBeneficiaryInputEnvelope = {
    data: Prisma.PaymentInflowLogCreateManyBeneficiaryInput | Prisma.PaymentInflowLogCreateManyBeneficiaryInput[];
    skipDuplicates?: boolean;
};
export type PaymentInflowLogUpsertWithWhereUniqueWithoutBeneficiaryInput = {
    where: Prisma.PaymentInflowLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentInflowLogUpdateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedUpdateWithoutBeneficiaryInput>;
    create: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedCreateWithoutBeneficiaryInput>;
};
export type PaymentInflowLogUpdateWithWhereUniqueWithoutBeneficiaryInput = {
    where: Prisma.PaymentInflowLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateWithoutBeneficiaryInput, Prisma.PaymentInflowLogUncheckedUpdateWithoutBeneficiaryInput>;
};
export type PaymentInflowLogUpdateManyWithWhereWithoutBeneficiaryInput = {
    where: Prisma.PaymentInflowLogScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateManyMutationInput, Prisma.PaymentInflowLogUncheckedUpdateManyWithoutBeneficiaryInput>;
};
export type PaymentInflowLogScalarWhereInput = {
    AND?: Prisma.PaymentInflowLogScalarWhereInput | Prisma.PaymentInflowLogScalarWhereInput[];
    OR?: Prisma.PaymentInflowLogScalarWhereInput[];
    NOT?: Prisma.PaymentInflowLogScalarWhereInput | Prisma.PaymentInflowLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentInflowLog"> | string;
    txnId?: Prisma.UuidNullableFilter<"PaymentInflowLog"> | string | null;
    payerName?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    payerBankName?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    payerAccountNumber?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    declaredRelationship?: Prisma.StringFilter<"PaymentInflowLog"> | string;
    beneficiaryInvestorId?: Prisma.StringNullableFilter<"PaymentInflowLog"> | string | null;
    status?: Prisma.EnumPaymentInflowStatusFilter<"PaymentInflowLog"> | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFilter<"PaymentInflowLog"> | boolean;
    declaredByUserId?: Prisma.UuidNullableFilter<"PaymentInflowLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentInflowLog"> | Date | string;
};
export type PaymentInflowLogCreateWithoutTxnInput = {
    id?: string;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
    beneficiary?: Prisma.InvestorCreateNestedOneWithoutPaymentInflowsInput;
};
export type PaymentInflowLogUncheckedCreateWithoutTxnInput = {
    id?: string;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    beneficiaryInvestorId?: string | null;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
};
export type PaymentInflowLogCreateOrConnectWithoutTxnInput = {
    where: Prisma.PaymentInflowLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
};
export type PaymentInflowLogUpsertWithoutTxnInput = {
    update: Prisma.XOR<Prisma.PaymentInflowLogUpdateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedUpdateWithoutTxnInput>;
    create: Prisma.XOR<Prisma.PaymentInflowLogCreateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedCreateWithoutTxnInput>;
    where?: Prisma.PaymentInflowLogWhereInput;
};
export type PaymentInflowLogUpdateToOneWithWhereWithoutTxnInput = {
    where?: Prisma.PaymentInflowLogWhereInput;
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateWithoutTxnInput, Prisma.PaymentInflowLogUncheckedUpdateWithoutTxnInput>;
};
export type PaymentInflowLogUpdateWithoutTxnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    beneficiary?: Prisma.InvestorUpdateOneWithoutPaymentInflowsNestedInput;
};
export type PaymentInflowLogUncheckedUpdateWithoutTxnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    beneficiaryInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogCreateManyBeneficiaryInput = {
    id?: string;
    txnId?: string | null;
    payerName: string;
    payerBankName?: string | null;
    payerAccountNumber?: string | null;
    declaredRelationship: string;
    status?: $Enums.PaymentInflowStatus;
    complianceFlagged?: boolean;
    declaredByUserId?: string | null;
    createdAt?: Date | string;
};
export type PaymentInflowLogUpdateWithoutBeneficiaryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    txn?: Prisma.TxnUpdateOneWithoutPaymentInflowLogNestedInput;
};
export type PaymentInflowLogUncheckedUpdateWithoutBeneficiaryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogUncheckedUpdateManyWithoutBeneficiaryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerName?: Prisma.StringFieldUpdateOperationsInput | string;
    payerBankName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payerAccountNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declaredRelationship?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentInflowStatusFieldUpdateOperationsInput | $Enums.PaymentInflowStatus;
    complianceFlagged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentInflowLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txnId?: boolean;
    payerName?: boolean;
    payerBankName?: boolean;
    payerAccountNumber?: boolean;
    declaredRelationship?: boolean;
    beneficiaryInvestorId?: boolean;
    status?: boolean;
    complianceFlagged?: boolean;
    declaredByUserId?: boolean;
    createdAt?: boolean;
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
}, ExtArgs["result"]["paymentInflowLog"]>;
export type PaymentInflowLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txnId?: boolean;
    payerName?: boolean;
    payerBankName?: boolean;
    payerAccountNumber?: boolean;
    declaredRelationship?: boolean;
    beneficiaryInvestorId?: boolean;
    status?: boolean;
    complianceFlagged?: boolean;
    declaredByUserId?: boolean;
    createdAt?: boolean;
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
}, ExtArgs["result"]["paymentInflowLog"]>;
export type PaymentInflowLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txnId?: boolean;
    payerName?: boolean;
    payerBankName?: boolean;
    payerAccountNumber?: boolean;
    declaredRelationship?: boolean;
    beneficiaryInvestorId?: boolean;
    status?: boolean;
    complianceFlagged?: boolean;
    declaredByUserId?: boolean;
    createdAt?: boolean;
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
}, ExtArgs["result"]["paymentInflowLog"]>;
export type PaymentInflowLogSelectScalar = {
    id?: boolean;
    txnId?: boolean;
    payerName?: boolean;
    payerBankName?: boolean;
    payerAccountNumber?: boolean;
    declaredRelationship?: boolean;
    beneficiaryInvestorId?: boolean;
    status?: boolean;
    complianceFlagged?: boolean;
    declaredByUserId?: boolean;
    createdAt?: boolean;
};
export type PaymentInflowLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "txnId" | "payerName" | "payerBankName" | "payerAccountNumber" | "declaredRelationship" | "beneficiaryInvestorId" | "status" | "complianceFlagged" | "declaredByUserId" | "createdAt", ExtArgs["result"]["paymentInflowLog"]>;
export type PaymentInflowLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
};
export type PaymentInflowLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
};
export type PaymentInflowLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    txn?: boolean | Prisma.PaymentInflowLog$txnArgs<ExtArgs>;
    beneficiary?: boolean | Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>;
};
export type $PaymentInflowLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentInflowLog";
    objects: {
        txn: Prisma.$TxnPayload<ExtArgs> | null;
        beneficiary: Prisma.$InvestorPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        txnId: string | null;
        payerName: string;
        payerBankName: string | null;
        payerAccountNumber: string | null;
        declaredRelationship: string;
        beneficiaryInvestorId: string | null;
        status: $Enums.PaymentInflowStatus;
        complianceFlagged: boolean;
        declaredByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["paymentInflowLog"]>;
    composites: {};
};
export type PaymentInflowLogGetPayload<S extends boolean | null | undefined | PaymentInflowLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload, S>;
export type PaymentInflowLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentInflowLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentInflowLogCountAggregateInputType | true;
};
export interface PaymentInflowLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentInflowLog'];
        meta: {
            name: 'PaymentInflowLog';
        };
    };
    findUnique<T extends PaymentInflowLogFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentInflowLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentInflowLogFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentInflowLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentInflowLogFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentInflowLogCreateArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentInflowLogCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentInflowLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentInflowLogDeleteArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentInflowLogUpdateArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentInflowLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentInflowLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentInflowLogUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentInflowLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentInflowLogUpsertArgs>(args: Prisma.SelectSubset<T, PaymentInflowLogUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentInflowLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentInflowLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentInflowLogCountArgs>(args?: Prisma.Subset<T, PaymentInflowLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentInflowLogCountAggregateOutputType> : number>;
    aggregate<T extends PaymentInflowLogAggregateArgs>(args: Prisma.Subset<T, PaymentInflowLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentInflowLogAggregateType<T>>;
    groupBy<T extends PaymentInflowLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentInflowLogGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentInflowLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentInflowLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentInflowLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentInflowLogFieldRefs;
}
export interface Prisma__PaymentInflowLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    txn<T extends Prisma.PaymentInflowLog$txnArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentInflowLog$txnArgs<ExtArgs>>): Prisma.Prisma__TxnClient<runtime.Types.Result.GetResult<Prisma.$TxnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    beneficiary<T extends Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentInflowLog$beneficiaryArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentInflowLogFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly txnId: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly payerName: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly payerBankName: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly payerAccountNumber: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly declaredRelationship: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly beneficiaryInvestorId: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly status: Prisma.FieldRef<"PaymentInflowLog", 'PaymentInflowStatus'>;
    readonly complianceFlagged: Prisma.FieldRef<"PaymentInflowLog", 'Boolean'>;
    readonly declaredByUserId: Prisma.FieldRef<"PaymentInflowLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PaymentInflowLog", 'DateTime'>;
}
export type PaymentInflowLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentInflowLogWhereInput;
    orderBy?: Prisma.PaymentInflowLogOrderByWithRelationInput | Prisma.PaymentInflowLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentInflowLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentInflowLogScalarFieldEnum | Prisma.PaymentInflowLogScalarFieldEnum[];
};
export type PaymentInflowLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentInflowLogWhereInput;
    orderBy?: Prisma.PaymentInflowLogOrderByWithRelationInput | Prisma.PaymentInflowLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentInflowLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentInflowLogScalarFieldEnum | Prisma.PaymentInflowLogScalarFieldEnum[];
};
export type PaymentInflowLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where?: Prisma.PaymentInflowLogWhereInput;
    orderBy?: Prisma.PaymentInflowLogOrderByWithRelationInput | Prisma.PaymentInflowLogOrderByWithRelationInput[];
    cursor?: Prisma.PaymentInflowLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentInflowLogScalarFieldEnum | Prisma.PaymentInflowLogScalarFieldEnum[];
};
export type PaymentInflowLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentInflowLogCreateInput, Prisma.PaymentInflowLogUncheckedCreateInput>;
};
export type PaymentInflowLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentInflowLogCreateManyInput | Prisma.PaymentInflowLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentInflowLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    data: Prisma.PaymentInflowLogCreateManyInput | Prisma.PaymentInflowLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentInflowLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentInflowLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateInput, Prisma.PaymentInflowLogUncheckedUpdateInput>;
    where: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateManyMutationInput, Prisma.PaymentInflowLogUncheckedUpdateManyInput>;
    where?: Prisma.PaymentInflowLogWhereInput;
    limit?: number;
};
export type PaymentInflowLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentInflowLogUpdateManyMutationInput, Prisma.PaymentInflowLogUncheckedUpdateManyInput>;
    where?: Prisma.PaymentInflowLogWhereInput;
    limit?: number;
    include?: Prisma.PaymentInflowLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentInflowLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where: Prisma.PaymentInflowLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentInflowLogCreateInput, Prisma.PaymentInflowLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentInflowLogUpdateInput, Prisma.PaymentInflowLogUncheckedUpdateInput>;
};
export type PaymentInflowLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
    where: Prisma.PaymentInflowLogWhereUniqueInput;
};
export type PaymentInflowLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentInflowLogWhereInput;
    limit?: number;
};
export type PaymentInflowLog$txnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TxnSelect<ExtArgs> | null;
    omit?: Prisma.TxnOmit<ExtArgs> | null;
    include?: Prisma.TxnInclude<ExtArgs> | null;
    where?: Prisma.TxnWhereInput;
};
export type PaymentInflowLog$beneficiaryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type PaymentInflowLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentInflowLogSelect<ExtArgs> | null;
    omit?: Prisma.PaymentInflowLogOmit<ExtArgs> | null;
    include?: Prisma.PaymentInflowLogInclude<ExtArgs> | null;
};
