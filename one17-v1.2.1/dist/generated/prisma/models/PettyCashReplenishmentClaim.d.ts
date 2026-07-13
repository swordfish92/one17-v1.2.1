import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PettyCashReplenishmentClaimModel = runtime.Types.Result.DefaultSelection<Prisma.$PettyCashReplenishmentClaimPayload>;
export type AggregatePettyCashReplenishmentClaim = {
    _count: PettyCashReplenishmentClaimCountAggregateOutputType | null;
    _avg: PettyCashReplenishmentClaimAvgAggregateOutputType | null;
    _sum: PettyCashReplenishmentClaimSumAggregateOutputType | null;
    _min: PettyCashReplenishmentClaimMinAggregateOutputType | null;
    _max: PettyCashReplenishmentClaimMaxAggregateOutputType | null;
};
export type PettyCashReplenishmentClaimAvgAggregateOutputType = {
    totalVoucherKobo: number | null;
};
export type PettyCashReplenishmentClaimSumAggregateOutputType = {
    totalVoucherKobo: bigint | null;
};
export type PettyCashReplenishmentClaimMinAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    totalVoucherKobo: bigint | null;
    status: $Enums.PettyCashClaimStatus | null;
    initiatedByUserId: string | null;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type PettyCashReplenishmentClaimMaxAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    totalVoucherKobo: bigint | null;
    status: $Enums.PettyCashClaimStatus | null;
    initiatedByUserId: string | null;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type PettyCashReplenishmentClaimCountAggregateOutputType = {
    id: number;
    floatId: number;
    totalVoucherKobo: number;
    status: number;
    initiatedByUserId: number;
    workflowInstanceId: number;
    disbursedByUserId: number;
    disbursedAt: number;
    rejectionNotes: number;
    createdAt: number;
    _all: number;
};
export type PettyCashReplenishmentClaimAvgAggregateInputType = {
    totalVoucherKobo?: true;
};
export type PettyCashReplenishmentClaimSumAggregateInputType = {
    totalVoucherKobo?: true;
};
export type PettyCashReplenishmentClaimMinAggregateInputType = {
    id?: true;
    floatId?: true;
    totalVoucherKobo?: true;
    status?: true;
    initiatedByUserId?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type PettyCashReplenishmentClaimMaxAggregateInputType = {
    id?: true;
    floatId?: true;
    totalVoucherKobo?: true;
    status?: true;
    initiatedByUserId?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type PettyCashReplenishmentClaimCountAggregateInputType = {
    id?: true;
    floatId?: true;
    totalVoucherKobo?: true;
    status?: true;
    initiatedByUserId?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    rejectionNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type PettyCashReplenishmentClaimAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput | Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PettyCashReplenishmentClaimCountAggregateInputType;
    _avg?: PettyCashReplenishmentClaimAvgAggregateInputType;
    _sum?: PettyCashReplenishmentClaimSumAggregateInputType;
    _min?: PettyCashReplenishmentClaimMinAggregateInputType;
    _max?: PettyCashReplenishmentClaimMaxAggregateInputType;
};
export type GetPettyCashReplenishmentClaimAggregateType<T extends PettyCashReplenishmentClaimAggregateArgs> = {
    [P in keyof T & keyof AggregatePettyCashReplenishmentClaim]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePettyCashReplenishmentClaim[P]> : Prisma.GetScalarType<T[P], AggregatePettyCashReplenishmentClaim[P]>;
};
export type PettyCashReplenishmentClaimGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithAggregationInput | Prisma.PettyCashReplenishmentClaimOrderByWithAggregationInput[];
    by: Prisma.PettyCashReplenishmentClaimScalarFieldEnum[] | Prisma.PettyCashReplenishmentClaimScalarFieldEnum;
    having?: Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PettyCashReplenishmentClaimCountAggregateInputType | true;
    _avg?: PettyCashReplenishmentClaimAvgAggregateInputType;
    _sum?: PettyCashReplenishmentClaimSumAggregateInputType;
    _min?: PettyCashReplenishmentClaimMinAggregateInputType;
    _max?: PettyCashReplenishmentClaimMaxAggregateInputType;
};
export type PettyCashReplenishmentClaimGroupByOutputType = {
    id: string;
    floatId: string;
    totalVoucherKobo: bigint;
    status: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    rejectionNotes: string | null;
    createdAt: Date;
    _count: PettyCashReplenishmentClaimCountAggregateOutputType | null;
    _avg: PettyCashReplenishmentClaimAvgAggregateOutputType | null;
    _sum: PettyCashReplenishmentClaimSumAggregateOutputType | null;
    _min: PettyCashReplenishmentClaimMinAggregateOutputType | null;
    _max: PettyCashReplenishmentClaimMaxAggregateOutputType | null;
};
export type GetPettyCashReplenishmentClaimGroupByPayload<T extends PettyCashReplenishmentClaimGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PettyCashReplenishmentClaimGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PettyCashReplenishmentClaimGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PettyCashReplenishmentClaimGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PettyCashReplenishmentClaimGroupByOutputType[P]>;
}>>;
export type PettyCashReplenishmentClaimWhereInput = {
    AND?: Prisma.PettyCashReplenishmentClaimWhereInput | Prisma.PettyCashReplenishmentClaimWhereInput[];
    OR?: Prisma.PettyCashReplenishmentClaimWhereInput[];
    NOT?: Prisma.PettyCashReplenishmentClaimWhereInput | Prisma.PettyCashReplenishmentClaimWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    totalVoucherKobo?: Prisma.BigIntFilter<"PettyCashReplenishmentClaim"> | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFilter<"PettyCashReplenishmentClaim"> | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"PettyCashReplenishmentClaim"> | Date | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PettyCashReplenishmentClaim"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
    vouchers?: Prisma.PettyCashVoucherListRelationFilter;
};
export type PettyCashReplenishmentClaimOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    totalVoucherKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    float?: Prisma.PettyCashFloatOrderByWithRelationInput;
    vouchers?: Prisma.PettyCashVoucherOrderByRelationAggregateInput;
};
export type PettyCashReplenishmentClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.PettyCashReplenishmentClaimWhereInput | Prisma.PettyCashReplenishmentClaimWhereInput[];
    OR?: Prisma.PettyCashReplenishmentClaimWhereInput[];
    NOT?: Prisma.PettyCashReplenishmentClaimWhereInput | Prisma.PettyCashReplenishmentClaimWhereInput[];
    floatId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    totalVoucherKobo?: Prisma.BigIntFilter<"PettyCashReplenishmentClaim"> | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFilter<"PettyCashReplenishmentClaim"> | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    disbursedByUserId?: Prisma.UuidNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"PettyCashReplenishmentClaim"> | Date | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PettyCashReplenishmentClaim"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
    vouchers?: Prisma.PettyCashVoucherListRelationFilter;
}, "id" | "workflowInstanceId">;
export type PettyCashReplenishmentClaimOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    totalVoucherKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PettyCashReplenishmentClaimCountOrderByAggregateInput;
    _avg?: Prisma.PettyCashReplenishmentClaimAvgOrderByAggregateInput;
    _max?: Prisma.PettyCashReplenishmentClaimMaxOrderByAggregateInput;
    _min?: Prisma.PettyCashReplenishmentClaimMinOrderByAggregateInput;
    _sum?: Prisma.PettyCashReplenishmentClaimSumOrderByAggregateInput;
};
export type PettyCashReplenishmentClaimScalarWhereWithAggregatesInput = {
    AND?: Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput | Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput[];
    OR?: Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput | Prisma.PettyCashReplenishmentClaimScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string;
    floatId?: Prisma.UuidWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string;
    totalVoucherKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashReplenishmentClaim"> | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusWithAggregatesFilter<"PettyCashReplenishmentClaim"> | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.UuidWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PettyCashReplenishmentClaim"> | Date | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"PettyCashReplenishmentClaim"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PettyCashReplenishmentClaim"> | Date | string;
};
export type PettyCashReplenishmentClaimCreateInput = {
    id?: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    float: Prisma.PettyCashFloatCreateNestedOneWithoutClaimsInput;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutClaimInput;
};
export type PettyCashReplenishmentClaimUncheckedCreateInput = {
    id?: string;
    floatId: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutClaimInput;
};
export type PettyCashReplenishmentClaimUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    float?: Prisma.PettyCashFloatUpdateOneRequiredWithoutClaimsNestedInput;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutClaimNestedInput;
};
export type PettyCashReplenishmentClaimUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutClaimNestedInput;
};
export type PettyCashReplenishmentClaimCreateManyInput = {
    id?: string;
    floatId: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type PettyCashReplenishmentClaimUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashReplenishmentClaimUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashReplenishmentClaimListRelationFilter = {
    every?: Prisma.PettyCashReplenishmentClaimWhereInput;
    some?: Prisma.PettyCashReplenishmentClaimWhereInput;
    none?: Prisma.PettyCashReplenishmentClaimWhereInput;
};
export type PettyCashReplenishmentClaimOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimNullableScalarRelationFilter = {
    is?: Prisma.PettyCashReplenishmentClaimWhereInput | null;
    isNot?: Prisma.PettyCashReplenishmentClaimWhereInput | null;
};
export type PettyCashReplenishmentClaimCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    totalVoucherKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimAvgOrderByAggregateInput = {
    totalVoucherKobo?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    totalVoucherKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    totalVoucherKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimSumOrderByAggregateInput = {
    totalVoucherKobo?: Prisma.SortOrder;
};
export type PettyCashReplenishmentClaimCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput> | Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput[] | Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput | Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashReplenishmentClaimCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
};
export type PettyCashReplenishmentClaimUncheckedCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput> | Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput[] | Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput | Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashReplenishmentClaimCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
};
export type PettyCashReplenishmentClaimUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput> | Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput[] | Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput | Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashReplenishmentClaimUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashReplenishmentClaimCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    disconnect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    delete?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    update?: Prisma.PettyCashReplenishmentClaimUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashReplenishmentClaimUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashReplenishmentClaimScalarWhereInput | Prisma.PettyCashReplenishmentClaimScalarWhereInput[];
};
export type PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput> | Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput[] | Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput | Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashReplenishmentClaimUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashReplenishmentClaimCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    disconnect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    delete?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput | Prisma.PettyCashReplenishmentClaimWhereUniqueInput[];
    update?: Prisma.PettyCashReplenishmentClaimUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashReplenishmentClaimUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashReplenishmentClaimUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashReplenishmentClaimScalarWhereInput | Prisma.PettyCashReplenishmentClaimScalarWhereInput[];
};
export type PettyCashReplenishmentClaimCreateNestedOneWithoutVouchersInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutVouchersInput>;
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutVouchersInput;
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
};
export type PettyCashReplenishmentClaimUpdateOneWithoutVouchersNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutVouchersInput>;
    connectOrCreate?: Prisma.PettyCashReplenishmentClaimCreateOrConnectWithoutVouchersInput;
    upsert?: Prisma.PettyCashReplenishmentClaimUpsertWithoutVouchersInput;
    disconnect?: Prisma.PettyCashReplenishmentClaimWhereInput | boolean;
    delete?: Prisma.PettyCashReplenishmentClaimWhereInput | boolean;
    connect?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateToOneWithWhereWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUpdateWithoutVouchersInput>, Prisma.PettyCashReplenishmentClaimUncheckedUpdateWithoutVouchersInput>;
};
export type EnumPettyCashClaimStatusFieldUpdateOperationsInput = {
    set?: $Enums.PettyCashClaimStatus;
};
export type PettyCashReplenishmentClaimCreateWithoutFloatInput = {
    id?: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutClaimInput;
};
export type PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput = {
    id?: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutClaimInput;
};
export type PettyCashReplenishmentClaimCreateOrConnectWithoutFloatInput = {
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput>;
};
export type PettyCashReplenishmentClaimCreateManyFloatInputEnvelope = {
    data: Prisma.PettyCashReplenishmentClaimCreateManyFloatInput | Prisma.PettyCashReplenishmentClaimCreateManyFloatInput[];
    skipDuplicates?: boolean;
};
export type PettyCashReplenishmentClaimUpsertWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    update: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateWithoutFloatInput>;
    create: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutFloatInput>;
};
export type PettyCashReplenishmentClaimUpdateWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateWithoutFloatInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateWithoutFloatInput>;
};
export type PettyCashReplenishmentClaimUpdateManyWithWhereWithoutFloatInput = {
    where: Prisma.PettyCashReplenishmentClaimScalarWhereInput;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateManyMutationInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatInput>;
};
export type PettyCashReplenishmentClaimScalarWhereInput = {
    AND?: Prisma.PettyCashReplenishmentClaimScalarWhereInput | Prisma.PettyCashReplenishmentClaimScalarWhereInput[];
    OR?: Prisma.PettyCashReplenishmentClaimScalarWhereInput[];
    NOT?: Prisma.PettyCashReplenishmentClaimScalarWhereInput | Prisma.PettyCashReplenishmentClaimScalarWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    totalVoucherKobo?: Prisma.BigIntFilter<"PettyCashReplenishmentClaim"> | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFilter<"PettyCashReplenishmentClaim"> | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.UuidFilter<"PettyCashReplenishmentClaim"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"PettyCashReplenishmentClaim"> | Date | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"PettyCashReplenishmentClaim"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PettyCashReplenishmentClaim"> | Date | string;
};
export type PettyCashReplenishmentClaimCreateWithoutVouchersInput = {
    id?: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    float: Prisma.PettyCashFloatCreateNestedOneWithoutClaimsInput;
};
export type PettyCashReplenishmentClaimUncheckedCreateWithoutVouchersInput = {
    id?: string;
    floatId: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type PettyCashReplenishmentClaimCreateOrConnectWithoutVouchersInput = {
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutVouchersInput>;
};
export type PettyCashReplenishmentClaimUpsertWithoutVouchersInput = {
    update: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateWithoutVouchersInput>;
    create: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateWithoutVouchersInput>;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
};
export type PettyCashReplenishmentClaimUpdateToOneWithWhereWithoutVouchersInput = {
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateWithoutVouchersInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateWithoutVouchersInput>;
};
export type PettyCashReplenishmentClaimUpdateWithoutVouchersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    float?: Prisma.PettyCashFloatUpdateOneRequiredWithoutClaimsNestedInput;
};
export type PettyCashReplenishmentClaimUncheckedUpdateWithoutVouchersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashReplenishmentClaimCreateManyFloatInput = {
    id?: string;
    totalVoucherKobo: bigint | number;
    status?: $Enums.PettyCashClaimStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type PettyCashReplenishmentClaimUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutClaimNestedInput;
};
export type PettyCashReplenishmentClaimUncheckedUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutClaimNestedInput;
};
export type PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVoucherKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashClaimStatusFieldUpdateOperationsInput | $Enums.PettyCashClaimStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashReplenishmentClaimCountOutputType = {
    vouchers: number;
};
export type PettyCashReplenishmentClaimCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vouchers?: boolean | PettyCashReplenishmentClaimCountOutputTypeCountVouchersArgs;
};
export type PettyCashReplenishmentClaimCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimCountOutputTypeSelect<ExtArgs> | null;
};
export type PettyCashReplenishmentClaimCountOutputTypeCountVouchersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashVoucherWhereInput;
};
export type PettyCashReplenishmentClaimSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    totalVoucherKobo?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    vouchers?: boolean | Prisma.PettyCashReplenishmentClaim$vouchersArgs<ExtArgs>;
    _count?: boolean | Prisma.PettyCashReplenishmentClaimCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashReplenishmentClaim"]>;
export type PettyCashReplenishmentClaimSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    totalVoucherKobo?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashReplenishmentClaim"]>;
export type PettyCashReplenishmentClaimSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    totalVoucherKobo?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashReplenishmentClaim"]>;
export type PettyCashReplenishmentClaimSelectScalar = {
    id?: boolean;
    floatId?: boolean;
    totalVoucherKobo?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
};
export type PettyCashReplenishmentClaimOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "floatId" | "totalVoucherKobo" | "status" | "initiatedByUserId" | "workflowInstanceId" | "disbursedByUserId" | "disbursedAt" | "rejectionNotes" | "createdAt", ExtArgs["result"]["pettyCashReplenishmentClaim"]>;
export type PettyCashReplenishmentClaimInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
    vouchers?: boolean | Prisma.PettyCashReplenishmentClaim$vouchersArgs<ExtArgs>;
    _count?: boolean | Prisma.PettyCashReplenishmentClaimCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PettyCashReplenishmentClaimIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
};
export type PettyCashReplenishmentClaimIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
};
export type $PettyCashReplenishmentClaimPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PettyCashReplenishmentClaim";
    objects: {
        float: Prisma.$PettyCashFloatPayload<ExtArgs>;
        vouchers: Prisma.$PettyCashVoucherPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        floatId: string;
        totalVoucherKobo: bigint;
        status: $Enums.PettyCashClaimStatus;
        initiatedByUserId: string;
        workflowInstanceId: string | null;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
        rejectionNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["pettyCashReplenishmentClaim"]>;
    composites: {};
};
export type PettyCashReplenishmentClaimGetPayload<S extends boolean | null | undefined | PettyCashReplenishmentClaimDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload, S>;
export type PettyCashReplenishmentClaimCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PettyCashReplenishmentClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PettyCashReplenishmentClaimCountAggregateInputType | true;
};
export interface PettyCashReplenishmentClaimDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PettyCashReplenishmentClaim'];
        meta: {
            name: 'PettyCashReplenishmentClaim';
        };
    };
    findUnique<T extends PettyCashReplenishmentClaimFindUniqueArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PettyCashReplenishmentClaimFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PettyCashReplenishmentClaimFindFirstArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimFindFirstArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PettyCashReplenishmentClaimFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PettyCashReplenishmentClaimFindManyArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PettyCashReplenishmentClaimCreateArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimCreateArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PettyCashReplenishmentClaimCreateManyArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PettyCashReplenishmentClaimCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PettyCashReplenishmentClaimDeleteArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimDeleteArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PettyCashReplenishmentClaimUpdateArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimUpdateArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PettyCashReplenishmentClaimDeleteManyArgs>(args?: Prisma.SelectSubset<T, PettyCashReplenishmentClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PettyCashReplenishmentClaimUpdateManyArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PettyCashReplenishmentClaimUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PettyCashReplenishmentClaimUpsertArgs>(args: Prisma.SelectSubset<T, PettyCashReplenishmentClaimUpsertArgs<ExtArgs>>): Prisma.Prisma__PettyCashReplenishmentClaimClient<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PettyCashReplenishmentClaimCountArgs>(args?: Prisma.Subset<T, PettyCashReplenishmentClaimCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PettyCashReplenishmentClaimCountAggregateOutputType> : number>;
    aggregate<T extends PettyCashReplenishmentClaimAggregateArgs>(args: Prisma.Subset<T, PettyCashReplenishmentClaimAggregateArgs>): Prisma.PrismaPromise<GetPettyCashReplenishmentClaimAggregateType<T>>;
    groupBy<T extends PettyCashReplenishmentClaimGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PettyCashReplenishmentClaimGroupByArgs['orderBy'];
    } : {
        orderBy?: PettyCashReplenishmentClaimGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PettyCashReplenishmentClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPettyCashReplenishmentClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PettyCashReplenishmentClaimFieldRefs;
}
export interface Prisma__PettyCashReplenishmentClaimClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    float<T extends Prisma.PettyCashFloatDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloatDefaultArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vouchers<T extends Prisma.PettyCashReplenishmentClaim$vouchersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashReplenishmentClaim$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PettyCashReplenishmentClaimFieldRefs {
    readonly id: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly floatId: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly totalVoucherKobo: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'PettyCashClaimStatus'>;
    readonly initiatedByUserId: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly disbursedByUserId: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly disbursedAt: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'DateTime'>;
    readonly rejectionNotes: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PettyCashReplenishmentClaim", 'DateTime'>;
}
export type PettyCashReplenishmentClaimFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
};
export type PettyCashReplenishmentClaimFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
};
export type PettyCashReplenishmentClaimFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput | Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashReplenishmentClaimScalarFieldEnum | Prisma.PettyCashReplenishmentClaimScalarFieldEnum[];
};
export type PettyCashReplenishmentClaimFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput | Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashReplenishmentClaimScalarFieldEnum | Prisma.PettyCashReplenishmentClaimScalarFieldEnum[];
};
export type PettyCashReplenishmentClaimFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput | Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashReplenishmentClaimScalarFieldEnum | Prisma.PettyCashReplenishmentClaimScalarFieldEnum[];
};
export type PettyCashReplenishmentClaimCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateInput>;
};
export type PettyCashReplenishmentClaimCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PettyCashReplenishmentClaimCreateManyInput | Prisma.PettyCashReplenishmentClaimCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PettyCashReplenishmentClaimCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    data: Prisma.PettyCashReplenishmentClaimCreateManyInput | Prisma.PettyCashReplenishmentClaimCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PettyCashReplenishmentClaimIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PettyCashReplenishmentClaimUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateInput>;
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
};
export type PettyCashReplenishmentClaimUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateManyMutationInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    limit?: number;
};
export type PettyCashReplenishmentClaimUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateManyMutationInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    limit?: number;
    include?: Prisma.PettyCashReplenishmentClaimIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PettyCashReplenishmentClaimUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashReplenishmentClaimCreateInput, Prisma.PettyCashReplenishmentClaimUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PettyCashReplenishmentClaimUpdateInput, Prisma.PettyCashReplenishmentClaimUncheckedUpdateInput>;
};
export type PettyCashReplenishmentClaimDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
};
export type PettyCashReplenishmentClaimDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    limit?: number;
};
export type PettyCashReplenishmentClaim$vouchersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PettyCashReplenishmentClaimDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
};
