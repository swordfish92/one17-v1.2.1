import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PettyCashVoucherModel = runtime.Types.Result.DefaultSelection<Prisma.$PettyCashVoucherPayload>;
export type AggregatePettyCashVoucher = {
    _count: PettyCashVoucherCountAggregateOutputType | null;
    _avg: PettyCashVoucherAvgAggregateOutputType | null;
    _sum: PettyCashVoucherSumAggregateOutputType | null;
    _min: PettyCashVoucherMinAggregateOutputType | null;
    _max: PettyCashVoucherMaxAggregateOutputType | null;
};
export type PettyCashVoucherAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type PettyCashVoucherSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type PettyCashVoucherMinAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    voucherDate: Date | null;
    payee: string | null;
    expenseAccountCode: string | null;
    amountKobo: bigint | null;
    status: $Enums.PettyCashVoucherStatus | null;
    claimId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type PettyCashVoucherMaxAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    voucherDate: Date | null;
    payee: string | null;
    expenseAccountCode: string | null;
    amountKobo: bigint | null;
    status: $Enums.PettyCashVoucherStatus | null;
    claimId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type PettyCashVoucherCountAggregateOutputType = {
    id: number;
    floatId: number;
    voucherDate: number;
    payee: number;
    expenseAccountCode: number;
    amountKobo: number;
    status: number;
    claimId: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type PettyCashVoucherAvgAggregateInputType = {
    amountKobo?: true;
};
export type PettyCashVoucherSumAggregateInputType = {
    amountKobo?: true;
};
export type PettyCashVoucherMinAggregateInputType = {
    id?: true;
    floatId?: true;
    voucherDate?: true;
    payee?: true;
    expenseAccountCode?: true;
    amountKobo?: true;
    status?: true;
    claimId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type PettyCashVoucherMaxAggregateInputType = {
    id?: true;
    floatId?: true;
    voucherDate?: true;
    payee?: true;
    expenseAccountCode?: true;
    amountKobo?: true;
    status?: true;
    claimId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type PettyCashVoucherCountAggregateInputType = {
    id?: true;
    floatId?: true;
    voucherDate?: true;
    payee?: true;
    expenseAccountCode?: true;
    amountKobo?: true;
    status?: true;
    claimId?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PettyCashVoucherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithRelationInput | Prisma.PettyCashVoucherOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashVoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PettyCashVoucherCountAggregateInputType;
    _avg?: PettyCashVoucherAvgAggregateInputType;
    _sum?: PettyCashVoucherSumAggregateInputType;
    _min?: PettyCashVoucherMinAggregateInputType;
    _max?: PettyCashVoucherMaxAggregateInputType;
};
export type GetPettyCashVoucherAggregateType<T extends PettyCashVoucherAggregateArgs> = {
    [P in keyof T & keyof AggregatePettyCashVoucher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePettyCashVoucher[P]> : Prisma.GetScalarType<T[P], AggregatePettyCashVoucher[P]>;
};
export type PettyCashVoucherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithAggregationInput | Prisma.PettyCashVoucherOrderByWithAggregationInput[];
    by: Prisma.PettyCashVoucherScalarFieldEnum[] | Prisma.PettyCashVoucherScalarFieldEnum;
    having?: Prisma.PettyCashVoucherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PettyCashVoucherCountAggregateInputType | true;
    _avg?: PettyCashVoucherAvgAggregateInputType;
    _sum?: PettyCashVoucherSumAggregateInputType;
    _min?: PettyCashVoucherMinAggregateInputType;
    _max?: PettyCashVoucherMaxAggregateInputType;
};
export type PettyCashVoucherGroupByOutputType = {
    id: string;
    floatId: string;
    voucherDate: Date;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint;
    status: $Enums.PettyCashVoucherStatus;
    claimId: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: PettyCashVoucherCountAggregateOutputType | null;
    _avg: PettyCashVoucherAvgAggregateOutputType | null;
    _sum: PettyCashVoucherSumAggregateOutputType | null;
    _min: PettyCashVoucherMinAggregateOutputType | null;
    _max: PettyCashVoucherMaxAggregateOutputType | null;
};
export type GetPettyCashVoucherGroupByPayload<T extends PettyCashVoucherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PettyCashVoucherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PettyCashVoucherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PettyCashVoucherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PettyCashVoucherGroupByOutputType[P]>;
}>>;
export type PettyCashVoucherWhereInput = {
    AND?: Prisma.PettyCashVoucherWhereInput | Prisma.PettyCashVoucherWhereInput[];
    OR?: Prisma.PettyCashVoucherWhereInput[];
    NOT?: Prisma.PettyCashVoucherWhereInput | Prisma.PettyCashVoucherWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    voucherDate?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
    payee?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    expenseAccountCode?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    amountKobo?: Prisma.BigIntFilter<"PettyCashVoucher"> | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFilter<"PettyCashVoucher"> | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.UuidNullableFilter<"PettyCashVoucher"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
    claim?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimNullableScalarRelationFilter, Prisma.PettyCashReplenishmentClaimWhereInput> | null;
};
export type PettyCashVoucherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    voucherDate?: Prisma.SortOrder;
    payee?: Prisma.SortOrder;
    expenseAccountCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    float?: Prisma.PettyCashFloatOrderByWithRelationInput;
    claim?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput;
};
export type PettyCashVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PettyCashVoucherWhereInput | Prisma.PettyCashVoucherWhereInput[];
    OR?: Prisma.PettyCashVoucherWhereInput[];
    NOT?: Prisma.PettyCashVoucherWhereInput | Prisma.PettyCashVoucherWhereInput[];
    floatId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    voucherDate?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
    payee?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    expenseAccountCode?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    amountKobo?: Prisma.BigIntFilter<"PettyCashVoucher"> | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFilter<"PettyCashVoucher"> | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.UuidNullableFilter<"PettyCashVoucher"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
    claim?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimNullableScalarRelationFilter, Prisma.PettyCashReplenishmentClaimWhereInput> | null;
}, "id">;
export type PettyCashVoucherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    voucherDate?: Prisma.SortOrder;
    payee?: Prisma.SortOrder;
    expenseAccountCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PettyCashVoucherCountOrderByAggregateInput;
    _avg?: Prisma.PettyCashVoucherAvgOrderByAggregateInput;
    _max?: Prisma.PettyCashVoucherMaxOrderByAggregateInput;
    _min?: Prisma.PettyCashVoucherMinOrderByAggregateInput;
    _sum?: Prisma.PettyCashVoucherSumOrderByAggregateInput;
};
export type PettyCashVoucherScalarWhereWithAggregatesInput = {
    AND?: Prisma.PettyCashVoucherScalarWhereWithAggregatesInput | Prisma.PettyCashVoucherScalarWhereWithAggregatesInput[];
    OR?: Prisma.PettyCashVoucherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PettyCashVoucherScalarWhereWithAggregatesInput | Prisma.PettyCashVoucherScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PettyCashVoucher"> | string;
    floatId?: Prisma.UuidWithAggregatesFilter<"PettyCashVoucher"> | string;
    voucherDate?: Prisma.DateTimeWithAggregatesFilter<"PettyCashVoucher"> | Date | string;
    payee?: Prisma.StringWithAggregatesFilter<"PettyCashVoucher"> | string;
    expenseAccountCode?: Prisma.StringWithAggregatesFilter<"PettyCashVoucher"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashVoucher"> | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusWithAggregatesFilter<"PettyCashVoucher"> | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.UuidNullableWithAggregatesFilter<"PettyCashVoucher"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"PettyCashVoucher"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PettyCashVoucher"> | Date | string;
};
export type PettyCashVoucherCreateInput = {
    id?: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    float: Prisma.PettyCashFloatCreateNestedOneWithoutVouchersInput;
    claim?: Prisma.PettyCashReplenishmentClaimCreateNestedOneWithoutVouchersInput;
};
export type PettyCashVoucherUncheckedCreateInput = {
    id?: string;
    floatId: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    claimId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    float?: Prisma.PettyCashFloatUpdateOneRequiredWithoutVouchersNestedInput;
    claim?: Prisma.PettyCashReplenishmentClaimUpdateOneWithoutVouchersNestedInput;
};
export type PettyCashVoucherUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherCreateManyInput = {
    id?: string;
    floatId: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    claimId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherListRelationFilter = {
    every?: Prisma.PettyCashVoucherWhereInput;
    some?: Prisma.PettyCashVoucherWhereInput;
    none?: Prisma.PettyCashVoucherWhereInput;
};
export type PettyCashVoucherOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PettyCashVoucherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    voucherDate?: Prisma.SortOrder;
    payee?: Prisma.SortOrder;
    expenseAccountCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashVoucherAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PettyCashVoucherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    voucherDate?: Prisma.SortOrder;
    payee?: Prisma.SortOrder;
    expenseAccountCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashVoucherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    voucherDate?: Prisma.SortOrder;
    payee?: Prisma.SortOrder;
    expenseAccountCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashVoucherSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PettyCashVoucherCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput> | Prisma.PettyCashVoucherCreateWithoutFloatInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput | Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
};
export type PettyCashVoucherUncheckedCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput> | Prisma.PettyCashVoucherCreateWithoutFloatInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput | Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
};
export type PettyCashVoucherUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput> | Prisma.PettyCashVoucherCreateWithoutFloatInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput | Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    disconnect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    delete?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    update?: Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashVoucherUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashVoucherUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
};
export type PettyCashVoucherUncheckedUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput> | Prisma.PettyCashVoucherCreateWithoutFloatInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput | Prisma.PettyCashVoucherCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    disconnect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    delete?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    update?: Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashVoucherUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashVoucherUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
};
export type EnumPettyCashVoucherStatusFieldUpdateOperationsInput = {
    set?: $Enums.PettyCashVoucherStatus;
};
export type PettyCashVoucherCreateNestedManyWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput> | Prisma.PettyCashVoucherCreateWithoutClaimInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput | Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyClaimInputEnvelope;
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
};
export type PettyCashVoucherUncheckedCreateNestedManyWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput> | Prisma.PettyCashVoucherCreateWithoutClaimInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput | Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyClaimInputEnvelope;
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
};
export type PettyCashVoucherUpdateManyWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput> | Prisma.PettyCashVoucherCreateWithoutClaimInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput | Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput[];
    upsert?: Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutClaimInput | Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutClaimInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyClaimInputEnvelope;
    set?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    disconnect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    delete?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    update?: Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutClaimInput | Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutClaimInput[];
    updateMany?: Prisma.PettyCashVoucherUpdateManyWithWhereWithoutClaimInput | Prisma.PettyCashVoucherUpdateManyWithWhereWithoutClaimInput[];
    deleteMany?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
};
export type PettyCashVoucherUncheckedUpdateManyWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput> | Prisma.PettyCashVoucherCreateWithoutClaimInput[] | Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput | Prisma.PettyCashVoucherCreateOrConnectWithoutClaimInput[];
    upsert?: Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutClaimInput | Prisma.PettyCashVoucherUpsertWithWhereUniqueWithoutClaimInput[];
    createMany?: Prisma.PettyCashVoucherCreateManyClaimInputEnvelope;
    set?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    disconnect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    delete?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    connect?: Prisma.PettyCashVoucherWhereUniqueInput | Prisma.PettyCashVoucherWhereUniqueInput[];
    update?: Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutClaimInput | Prisma.PettyCashVoucherUpdateWithWhereUniqueWithoutClaimInput[];
    updateMany?: Prisma.PettyCashVoucherUpdateManyWithWhereWithoutClaimInput | Prisma.PettyCashVoucherUpdateManyWithWhereWithoutClaimInput[];
    deleteMany?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
};
export type PettyCashVoucherCreateWithoutFloatInput = {
    id?: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    claim?: Prisma.PettyCashReplenishmentClaimCreateNestedOneWithoutVouchersInput;
};
export type PettyCashVoucherUncheckedCreateWithoutFloatInput = {
    id?: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    claimId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherCreateOrConnectWithoutFloatInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput>;
};
export type PettyCashVoucherCreateManyFloatInputEnvelope = {
    data: Prisma.PettyCashVoucherCreateManyFloatInput | Prisma.PettyCashVoucherCreateManyFloatInput[];
    skipDuplicates?: boolean;
};
export type PettyCashVoucherUpsertWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    update: Prisma.XOR<Prisma.PettyCashVoucherUpdateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedUpdateWithoutFloatInput>;
    create: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedCreateWithoutFloatInput>;
};
export type PettyCashVoucherUpdateWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateWithoutFloatInput, Prisma.PettyCashVoucherUncheckedUpdateWithoutFloatInput>;
};
export type PettyCashVoucherUpdateManyWithWhereWithoutFloatInput = {
    where: Prisma.PettyCashVoucherScalarWhereInput;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateManyMutationInput, Prisma.PettyCashVoucherUncheckedUpdateManyWithoutFloatInput>;
};
export type PettyCashVoucherScalarWhereInput = {
    AND?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
    OR?: Prisma.PettyCashVoucherScalarWhereInput[];
    NOT?: Prisma.PettyCashVoucherScalarWhereInput | Prisma.PettyCashVoucherScalarWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    voucherDate?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
    payee?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    expenseAccountCode?: Prisma.StringFilter<"PettyCashVoucher"> | string;
    amountKobo?: Prisma.BigIntFilter<"PettyCashVoucher"> | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFilter<"PettyCashVoucher"> | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.UuidNullableFilter<"PettyCashVoucher"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"PettyCashVoucher"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashVoucher"> | Date | string;
};
export type PettyCashVoucherCreateWithoutClaimInput = {
    id?: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    float: Prisma.PettyCashFloatCreateNestedOneWithoutVouchersInput;
};
export type PettyCashVoucherUncheckedCreateWithoutClaimInput = {
    id?: string;
    floatId: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherCreateOrConnectWithoutClaimInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput>;
};
export type PettyCashVoucherCreateManyClaimInputEnvelope = {
    data: Prisma.PettyCashVoucherCreateManyClaimInput | Prisma.PettyCashVoucherCreateManyClaimInput[];
    skipDuplicates?: boolean;
};
export type PettyCashVoucherUpsertWithWhereUniqueWithoutClaimInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    update: Prisma.XOR<Prisma.PettyCashVoucherUpdateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedUpdateWithoutClaimInput>;
    create: Prisma.XOR<Prisma.PettyCashVoucherCreateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedCreateWithoutClaimInput>;
};
export type PettyCashVoucherUpdateWithWhereUniqueWithoutClaimInput = {
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateWithoutClaimInput, Prisma.PettyCashVoucherUncheckedUpdateWithoutClaimInput>;
};
export type PettyCashVoucherUpdateManyWithWhereWithoutClaimInput = {
    where: Prisma.PettyCashVoucherScalarWhereInput;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateManyMutationInput, Prisma.PettyCashVoucherUncheckedUpdateManyWithoutClaimInput>;
};
export type PettyCashVoucherCreateManyFloatInput = {
    id?: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    claimId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claim?: Prisma.PettyCashReplenishmentClaimUpdateOneWithoutVouchersNestedInput;
};
export type PettyCashVoucherUncheckedUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherUncheckedUpdateManyWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherCreateManyClaimInput = {
    id?: string;
    floatId: string;
    voucherDate: Date | string;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint | number;
    status?: $Enums.PettyCashVoucherStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashVoucherUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    float?: Prisma.PettyCashFloatUpdateOneRequiredWithoutVouchersNestedInput;
};
export type PettyCashVoucherUncheckedUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherUncheckedUpdateManyWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    voucherDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payee?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashVoucherStatusFieldUpdateOperationsInput | $Enums.PettyCashVoucherStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashVoucherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    voucherDate?: boolean;
    payee?: boolean;
    expenseAccountCode?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    claimId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashVoucher"]>;
export type PettyCashVoucherSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    voucherDate?: boolean;
    payee?: boolean;
    expenseAccountCode?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    claimId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashVoucher"]>;
export type PettyCashVoucherSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    voucherDate?: boolean;
    payee?: boolean;
    expenseAccountCode?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    claimId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashVoucher"]>;
export type PettyCashVoucherSelectScalar = {
    id?: boolean;
    floatId?: boolean;
    voucherDate?: boolean;
    payee?: boolean;
    expenseAccountCode?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    claimId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type PettyCashVoucherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "floatId" | "voucherDate" | "payee" | "expenseAccountCode" | "amountKobo" | "status" | "claimId" | "createdByUserId" | "createdAt", ExtArgs["result"]["pettyCashVoucher"]>;
export type PettyCashVoucherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
};
export type PettyCashVoucherIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
};
export type PettyCashVoucherIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.PettyCashVoucher$claimArgs<ExtArgs>;
};
export type $PettyCashVoucherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PettyCashVoucher";
    objects: {
        float: Prisma.$PettyCashFloatPayload<ExtArgs>;
        claim: Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        floatId: string;
        voucherDate: Date;
        payee: string;
        expenseAccountCode: string;
        amountKobo: bigint;
        status: $Enums.PettyCashVoucherStatus;
        claimId: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["pettyCashVoucher"]>;
    composites: {};
};
export type PettyCashVoucherGetPayload<S extends boolean | null | undefined | PettyCashVoucherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload, S>;
export type PettyCashVoucherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PettyCashVoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PettyCashVoucherCountAggregateInputType | true;
};
export interface PettyCashVoucherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PettyCashVoucher'];
        meta: {
            name: 'PettyCashVoucher';
        };
    };
    findUnique<T extends PettyCashVoucherFindUniqueArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PettyCashVoucherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PettyCashVoucherFindFirstArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherFindFirstArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PettyCashVoucherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PettyCashVoucherFindManyArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PettyCashVoucherCreateArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherCreateArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PettyCashVoucherCreateManyArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PettyCashVoucherCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PettyCashVoucherDeleteArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherDeleteArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PettyCashVoucherUpdateArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherUpdateArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PettyCashVoucherDeleteManyArgs>(args?: Prisma.SelectSubset<T, PettyCashVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PettyCashVoucherUpdateManyArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PettyCashVoucherUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PettyCashVoucherUpsertArgs>(args: Prisma.SelectSubset<T, PettyCashVoucherUpsertArgs<ExtArgs>>): Prisma.Prisma__PettyCashVoucherClient<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PettyCashVoucherCountArgs>(args?: Prisma.Subset<T, PettyCashVoucherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PettyCashVoucherCountAggregateOutputType> : number>;
    aggregate<T extends PettyCashVoucherAggregateArgs>(args: Prisma.Subset<T, PettyCashVoucherAggregateArgs>): Prisma.PrismaPromise<GetPettyCashVoucherAggregateType<T>>;
    groupBy<T extends PettyCashVoucherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PettyCashVoucherGroupByArgs['orderBy'];
    } : {
        orderBy?: PettyCashVoucherGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PettyCashVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPettyCashVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PettyCashVoucherFieldRefs;
}
export interface Prisma__PettyCashVoucherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    float<T extends Prisma.PettyCashFloatDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloatDefaultArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    claim<T extends Prisma.PettyCashVoucher$claimArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashVoucher$claimArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PettyCashVoucherFieldRefs {
    readonly id: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly floatId: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly voucherDate: Prisma.FieldRef<"PettyCashVoucher", 'DateTime'>;
    readonly payee: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly expenseAccountCode: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"PettyCashVoucher", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PettyCashVoucher", 'PettyCashVoucherStatus'>;
    readonly claimId: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"PettyCashVoucher", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PettyCashVoucher", 'DateTime'>;
}
export type PettyCashVoucherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where: Prisma.PettyCashVoucherWhereUniqueInput;
};
export type PettyCashVoucherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where: Prisma.PettyCashVoucherWhereUniqueInput;
};
export type PettyCashVoucherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithRelationInput | Prisma.PettyCashVoucherOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashVoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashVoucherScalarFieldEnum | Prisma.PettyCashVoucherScalarFieldEnum[];
};
export type PettyCashVoucherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithRelationInput | Prisma.PettyCashVoucherOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashVoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashVoucherScalarFieldEnum | Prisma.PettyCashVoucherScalarFieldEnum[];
};
export type PettyCashVoucherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithRelationInput | Prisma.PettyCashVoucherOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashVoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashVoucherScalarFieldEnum | Prisma.PettyCashVoucherScalarFieldEnum[];
};
export type PettyCashVoucherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashVoucherCreateInput, Prisma.PettyCashVoucherUncheckedCreateInput>;
};
export type PettyCashVoucherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PettyCashVoucherCreateManyInput | Prisma.PettyCashVoucherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PettyCashVoucherCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    data: Prisma.PettyCashVoucherCreateManyInput | Prisma.PettyCashVoucherCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PettyCashVoucherIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PettyCashVoucherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateInput, Prisma.PettyCashVoucherUncheckedUpdateInput>;
    where: Prisma.PettyCashVoucherWhereUniqueInput;
};
export type PettyCashVoucherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateManyMutationInput, Prisma.PettyCashVoucherUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashVoucherWhereInput;
    limit?: number;
};
export type PettyCashVoucherUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashVoucherUpdateManyMutationInput, Prisma.PettyCashVoucherUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashVoucherWhereInput;
    limit?: number;
    include?: Prisma.PettyCashVoucherIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PettyCashVoucherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where: Prisma.PettyCashVoucherWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashVoucherCreateInput, Prisma.PettyCashVoucherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PettyCashVoucherUpdateInput, Prisma.PettyCashVoucherUncheckedUpdateInput>;
};
export type PettyCashVoucherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where: Prisma.PettyCashVoucherWhereUniqueInput;
};
export type PettyCashVoucherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashVoucherWhereInput;
    limit?: number;
};
export type PettyCashVoucher$claimArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
};
export type PettyCashVoucherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
};
