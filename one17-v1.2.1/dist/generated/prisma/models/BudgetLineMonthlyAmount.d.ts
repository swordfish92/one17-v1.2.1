import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetLineMonthlyAmountModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetLineMonthlyAmountPayload>;
export type AggregateBudgetLineMonthlyAmount = {
    _count: BudgetLineMonthlyAmountCountAggregateOutputType | null;
    _avg: BudgetLineMonthlyAmountAvgAggregateOutputType | null;
    _sum: BudgetLineMonthlyAmountSumAggregateOutputType | null;
    _min: BudgetLineMonthlyAmountMinAggregateOutputType | null;
    _max: BudgetLineMonthlyAmountMaxAggregateOutputType | null;
};
export type BudgetLineMonthlyAmountAvgAggregateOutputType = {
    month: number | null;
    amountKobo: number | null;
    recomputedAmountKobo: number | null;
};
export type BudgetLineMonthlyAmountSumAggregateOutputType = {
    month: number | null;
    amountKobo: bigint | null;
    recomputedAmountKobo: bigint | null;
};
export type BudgetLineMonthlyAmountMinAggregateOutputType = {
    id: string | null;
    budgetLineId: string | null;
    month: number | null;
    amountKobo: bigint | null;
    recomputedAmountKobo: bigint | null;
    createdAt: Date | null;
};
export type BudgetLineMonthlyAmountMaxAggregateOutputType = {
    id: string | null;
    budgetLineId: string | null;
    month: number | null;
    amountKobo: bigint | null;
    recomputedAmountKobo: bigint | null;
    createdAt: Date | null;
};
export type BudgetLineMonthlyAmountCountAggregateOutputType = {
    id: number;
    budgetLineId: number;
    month: number;
    amountKobo: number;
    recomputedAmountKobo: number;
    createdAt: number;
    _all: number;
};
export type BudgetLineMonthlyAmountAvgAggregateInputType = {
    month?: true;
    amountKobo?: true;
    recomputedAmountKobo?: true;
};
export type BudgetLineMonthlyAmountSumAggregateInputType = {
    month?: true;
    amountKobo?: true;
    recomputedAmountKobo?: true;
};
export type BudgetLineMonthlyAmountMinAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    month?: true;
    amountKobo?: true;
    recomputedAmountKobo?: true;
    createdAt?: true;
};
export type BudgetLineMonthlyAmountMaxAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    month?: true;
    amountKobo?: true;
    recomputedAmountKobo?: true;
    createdAt?: true;
};
export type BudgetLineMonthlyAmountCountAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    month?: true;
    amountKobo?: true;
    recomputedAmountKobo?: true;
    createdAt?: true;
    _all?: true;
};
export type BudgetLineMonthlyAmountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput | Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetLineMonthlyAmountCountAggregateInputType;
    _avg?: BudgetLineMonthlyAmountAvgAggregateInputType;
    _sum?: BudgetLineMonthlyAmountSumAggregateInputType;
    _min?: BudgetLineMonthlyAmountMinAggregateInputType;
    _max?: BudgetLineMonthlyAmountMaxAggregateInputType;
};
export type GetBudgetLineMonthlyAmountAggregateType<T extends BudgetLineMonthlyAmountAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgetLineMonthlyAmount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudgetLineMonthlyAmount[P]> : Prisma.GetScalarType<T[P], AggregateBudgetLineMonthlyAmount[P]>;
};
export type BudgetLineMonthlyAmountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithAggregationInput | Prisma.BudgetLineMonthlyAmountOrderByWithAggregationInput[];
    by: Prisma.BudgetLineMonthlyAmountScalarFieldEnum[] | Prisma.BudgetLineMonthlyAmountScalarFieldEnum;
    having?: Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetLineMonthlyAmountCountAggregateInputType | true;
    _avg?: BudgetLineMonthlyAmountAvgAggregateInputType;
    _sum?: BudgetLineMonthlyAmountSumAggregateInputType;
    _min?: BudgetLineMonthlyAmountMinAggregateInputType;
    _max?: BudgetLineMonthlyAmountMaxAggregateInputType;
};
export type BudgetLineMonthlyAmountGroupByOutputType = {
    id: string;
    budgetLineId: string;
    month: number;
    amountKobo: bigint;
    recomputedAmountKobo: bigint | null;
    createdAt: Date;
    _count: BudgetLineMonthlyAmountCountAggregateOutputType | null;
    _avg: BudgetLineMonthlyAmountAvgAggregateOutputType | null;
    _sum: BudgetLineMonthlyAmountSumAggregateOutputType | null;
    _min: BudgetLineMonthlyAmountMinAggregateOutputType | null;
    _max: BudgetLineMonthlyAmountMaxAggregateOutputType | null;
};
export type GetBudgetLineMonthlyAmountGroupByPayload<T extends BudgetLineMonthlyAmountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetLineMonthlyAmountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetLineMonthlyAmountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetLineMonthlyAmountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetLineMonthlyAmountGroupByOutputType[P]>;
}>>;
export type BudgetLineMonthlyAmountWhereInput = {
    AND?: Prisma.BudgetLineMonthlyAmountWhereInput | Prisma.BudgetLineMonthlyAmountWhereInput[];
    OR?: Prisma.BudgetLineMonthlyAmountWhereInput[];
    NOT?: Prisma.BudgetLineMonthlyAmountWhereInput | Prisma.BudgetLineMonthlyAmountWhereInput[];
    id?: Prisma.UuidFilter<"BudgetLineMonthlyAmount"> | string;
    budgetLineId?: Prisma.UuidFilter<"BudgetLineMonthlyAmount"> | string;
    month?: Prisma.IntFilter<"BudgetLineMonthlyAmount"> | number;
    amountKobo?: Prisma.BigIntFilter<"BudgetLineMonthlyAmount"> | bigint | number;
    recomputedAmountKobo?: Prisma.BigIntNullableFilter<"BudgetLineMonthlyAmount"> | bigint | number | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetLineMonthlyAmount"> | Date | string;
    budgetLine?: Prisma.XOR<Prisma.BudgetLineScalarRelationFilter, Prisma.BudgetLineWhereInput>;
};
export type BudgetLineMonthlyAmountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    budgetLine?: Prisma.BudgetLineOrderByWithRelationInput;
};
export type BudgetLineMonthlyAmountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    budgetLineId_month?: Prisma.BudgetLineMonthlyAmountBudgetLineIdMonthCompoundUniqueInput;
    AND?: Prisma.BudgetLineMonthlyAmountWhereInput | Prisma.BudgetLineMonthlyAmountWhereInput[];
    OR?: Prisma.BudgetLineMonthlyAmountWhereInput[];
    NOT?: Prisma.BudgetLineMonthlyAmountWhereInput | Prisma.BudgetLineMonthlyAmountWhereInput[];
    budgetLineId?: Prisma.UuidFilter<"BudgetLineMonthlyAmount"> | string;
    month?: Prisma.IntFilter<"BudgetLineMonthlyAmount"> | number;
    amountKobo?: Prisma.BigIntFilter<"BudgetLineMonthlyAmount"> | bigint | number;
    recomputedAmountKobo?: Prisma.BigIntNullableFilter<"BudgetLineMonthlyAmount"> | bigint | number | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetLineMonthlyAmount"> | Date | string;
    budgetLine?: Prisma.XOR<Prisma.BudgetLineScalarRelationFilter, Prisma.BudgetLineWhereInput>;
}, "id" | "budgetLineId_month">;
export type BudgetLineMonthlyAmountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BudgetLineMonthlyAmountCountOrderByAggregateInput;
    _avg?: Prisma.BudgetLineMonthlyAmountAvgOrderByAggregateInput;
    _max?: Prisma.BudgetLineMonthlyAmountMaxOrderByAggregateInput;
    _min?: Prisma.BudgetLineMonthlyAmountMinOrderByAggregateInput;
    _sum?: Prisma.BudgetLineMonthlyAmountSumOrderByAggregateInput;
};
export type BudgetLineMonthlyAmountScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput | Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput | Prisma.BudgetLineMonthlyAmountScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BudgetLineMonthlyAmount"> | string;
    budgetLineId?: Prisma.UuidWithAggregatesFilter<"BudgetLineMonthlyAmount"> | string;
    month?: Prisma.IntWithAggregatesFilter<"BudgetLineMonthlyAmount"> | number;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"BudgetLineMonthlyAmount"> | bigint | number;
    recomputedAmountKobo?: Prisma.BigIntNullableWithAggregatesFilter<"BudgetLineMonthlyAmount"> | bigint | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BudgetLineMonthlyAmount"> | Date | string;
};
export type BudgetLineMonthlyAmountCreateInput = {
    id?: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
    budgetLine: Prisma.BudgetLineCreateNestedOneWithoutMonthlyAmountsInput;
};
export type BudgetLineMonthlyAmountUncheckedCreateInput = {
    id?: string;
    budgetLineId: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
};
export type BudgetLineMonthlyAmountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetLine?: Prisma.BudgetLineUpdateOneRequiredWithoutMonthlyAmountsNestedInput;
};
export type BudgetLineMonthlyAmountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountCreateManyInput = {
    id?: string;
    budgetLineId: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
};
export type BudgetLineMonthlyAmountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountListRelationFilter = {
    every?: Prisma.BudgetLineMonthlyAmountWhereInput;
    some?: Prisma.BudgetLineMonthlyAmountWhereInput;
    none?: Prisma.BudgetLineMonthlyAmountWhereInput;
};
export type BudgetLineMonthlyAmountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountBudgetLineIdMonthCompoundUniqueInput = {
    budgetLineId: string;
    month: number;
};
export type BudgetLineMonthlyAmountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountAvgOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountSumOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    recomputedAmountKobo?: Prisma.SortOrder;
};
export type BudgetLineMonthlyAmountCreateNestedManyWithoutBudgetLineInput = {
    create?: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput> | Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput[] | Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput[];
    createMany?: Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInputEnvelope;
    connect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
};
export type BudgetLineMonthlyAmountUncheckedCreateNestedManyWithoutBudgetLineInput = {
    create?: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput> | Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput[] | Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput[];
    createMany?: Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInputEnvelope;
    connect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
};
export type BudgetLineMonthlyAmountUpdateManyWithoutBudgetLineNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput> | Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput[] | Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput[];
    upsert?: Prisma.BudgetLineMonthlyAmountUpsertWithWhereUniqueWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpsertWithWhereUniqueWithoutBudgetLineInput[];
    createMany?: Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInputEnvelope;
    set?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    delete?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    connect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    update?: Prisma.BudgetLineMonthlyAmountUpdateWithWhereUniqueWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpdateWithWhereUniqueWithoutBudgetLineInput[];
    updateMany?: Prisma.BudgetLineMonthlyAmountUpdateManyWithWhereWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpdateManyWithWhereWithoutBudgetLineInput[];
    deleteMany?: Prisma.BudgetLineMonthlyAmountScalarWhereInput | Prisma.BudgetLineMonthlyAmountScalarWhereInput[];
};
export type BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput> | Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput[] | Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput[];
    upsert?: Prisma.BudgetLineMonthlyAmountUpsertWithWhereUniqueWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpsertWithWhereUniqueWithoutBudgetLineInput[];
    createMany?: Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInputEnvelope;
    set?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    delete?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    connect?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput | Prisma.BudgetLineMonthlyAmountWhereUniqueInput[];
    update?: Prisma.BudgetLineMonthlyAmountUpdateWithWhereUniqueWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpdateWithWhereUniqueWithoutBudgetLineInput[];
    updateMany?: Prisma.BudgetLineMonthlyAmountUpdateManyWithWhereWithoutBudgetLineInput | Prisma.BudgetLineMonthlyAmountUpdateManyWithWhereWithoutBudgetLineInput[];
    deleteMany?: Prisma.BudgetLineMonthlyAmountScalarWhereInput | Prisma.BudgetLineMonthlyAmountScalarWhereInput[];
};
export type BudgetLineMonthlyAmountCreateWithoutBudgetLineInput = {
    id?: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
};
export type BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput = {
    id?: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
};
export type BudgetLineMonthlyAmountCreateOrConnectWithoutBudgetLineInput = {
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput>;
};
export type BudgetLineMonthlyAmountCreateManyBudgetLineInputEnvelope = {
    data: Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInput | Prisma.BudgetLineMonthlyAmountCreateManyBudgetLineInput[];
    skipDuplicates?: boolean;
};
export type BudgetLineMonthlyAmountUpsertWithWhereUniqueWithoutBudgetLineInput = {
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateWithoutBudgetLineInput>;
    create: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateWithoutBudgetLineInput>;
};
export type BudgetLineMonthlyAmountUpdateWithWhereUniqueWithoutBudgetLineInput = {
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateWithoutBudgetLineInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateWithoutBudgetLineInput>;
};
export type BudgetLineMonthlyAmountUpdateManyWithWhereWithoutBudgetLineInput = {
    where: Prisma.BudgetLineMonthlyAmountScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateManyMutationInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineInput>;
};
export type BudgetLineMonthlyAmountScalarWhereInput = {
    AND?: Prisma.BudgetLineMonthlyAmountScalarWhereInput | Prisma.BudgetLineMonthlyAmountScalarWhereInput[];
    OR?: Prisma.BudgetLineMonthlyAmountScalarWhereInput[];
    NOT?: Prisma.BudgetLineMonthlyAmountScalarWhereInput | Prisma.BudgetLineMonthlyAmountScalarWhereInput[];
    id?: Prisma.UuidFilter<"BudgetLineMonthlyAmount"> | string;
    budgetLineId?: Prisma.UuidFilter<"BudgetLineMonthlyAmount"> | string;
    month?: Prisma.IntFilter<"BudgetLineMonthlyAmount"> | number;
    amountKobo?: Prisma.BigIntFilter<"BudgetLineMonthlyAmount"> | bigint | number;
    recomputedAmountKobo?: Prisma.BigIntNullableFilter<"BudgetLineMonthlyAmount"> | bigint | number | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetLineMonthlyAmount"> | Date | string;
};
export type BudgetLineMonthlyAmountCreateManyBudgetLineInput = {
    id?: string;
    month: number;
    amountKobo: bigint | number;
    recomputedAmountKobo?: bigint | number | null;
    createdAt?: Date | string;
};
export type BudgetLineMonthlyAmountUpdateWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountUncheckedUpdateWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recomputedAmountKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineMonthlyAmountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    month?: boolean;
    amountKobo?: boolean;
    recomputedAmountKobo?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLineMonthlyAmount"]>;
export type BudgetLineMonthlyAmountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    month?: boolean;
    amountKobo?: boolean;
    recomputedAmountKobo?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLineMonthlyAmount"]>;
export type BudgetLineMonthlyAmountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    month?: boolean;
    amountKobo?: boolean;
    recomputedAmountKobo?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLineMonthlyAmount"]>;
export type BudgetLineMonthlyAmountSelectScalar = {
    id?: boolean;
    budgetLineId?: boolean;
    month?: boolean;
    amountKobo?: boolean;
    recomputedAmountKobo?: boolean;
    createdAt?: boolean;
};
export type BudgetLineMonthlyAmountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "budgetLineId" | "month" | "amountKobo" | "recomputedAmountKobo" | "createdAt", ExtArgs["result"]["budgetLineMonthlyAmount"]>;
export type BudgetLineMonthlyAmountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
};
export type BudgetLineMonthlyAmountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
};
export type BudgetLineMonthlyAmountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
};
export type $BudgetLineMonthlyAmountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BudgetLineMonthlyAmount";
    objects: {
        budgetLine: Prisma.$BudgetLinePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        budgetLineId: string;
        month: number;
        amountKobo: bigint;
        recomputedAmountKobo: bigint | null;
        createdAt: Date;
    }, ExtArgs["result"]["budgetLineMonthlyAmount"]>;
    composites: {};
};
export type BudgetLineMonthlyAmountGetPayload<S extends boolean | null | undefined | BudgetLineMonthlyAmountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload, S>;
export type BudgetLineMonthlyAmountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetLineMonthlyAmountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetLineMonthlyAmountCountAggregateInputType | true;
};
export interface BudgetLineMonthlyAmountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BudgetLineMonthlyAmount'];
        meta: {
            name: 'BudgetLineMonthlyAmount';
        };
    };
    findUnique<T extends BudgetLineMonthlyAmountFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetLineMonthlyAmountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetLineMonthlyAmountFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetLineMonthlyAmountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetLineMonthlyAmountFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetLineMonthlyAmountCreateArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetLineMonthlyAmountCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetLineMonthlyAmountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetLineMonthlyAmountDeleteArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetLineMonthlyAmountUpdateArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetLineMonthlyAmountDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineMonthlyAmountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetLineMonthlyAmountUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetLineMonthlyAmountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetLineMonthlyAmountUpsertArgs>(args: Prisma.SelectSubset<T, BudgetLineMonthlyAmountUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetLineMonthlyAmountClient<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetLineMonthlyAmountCountArgs>(args?: Prisma.Subset<T, BudgetLineMonthlyAmountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetLineMonthlyAmountCountAggregateOutputType> : number>;
    aggregate<T extends BudgetLineMonthlyAmountAggregateArgs>(args: Prisma.Subset<T, BudgetLineMonthlyAmountAggregateArgs>): Prisma.PrismaPromise<GetBudgetLineMonthlyAmountAggregateType<T>>;
    groupBy<T extends BudgetLineMonthlyAmountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetLineMonthlyAmountGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetLineMonthlyAmountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetLineMonthlyAmountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetLineMonthlyAmountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetLineMonthlyAmountFieldRefs;
}
export interface Prisma__BudgetLineMonthlyAmountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgetLine<T extends Prisma.BudgetLineDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetLineDefaultArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetLineMonthlyAmountFieldRefs {
    readonly id: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'String'>;
    readonly budgetLineId: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'String'>;
    readonly month: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'Int'>;
    readonly amountKobo: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'BigInt'>;
    readonly recomputedAmountKobo: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'BigInt'>;
    readonly createdAt: Prisma.FieldRef<"BudgetLineMonthlyAmount", 'DateTime'>;
}
export type BudgetLineMonthlyAmountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
};
export type BudgetLineMonthlyAmountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
};
export type BudgetLineMonthlyAmountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput | Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineMonthlyAmountScalarFieldEnum | Prisma.BudgetLineMonthlyAmountScalarFieldEnum[];
};
export type BudgetLineMonthlyAmountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput | Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineMonthlyAmountScalarFieldEnum | Prisma.BudgetLineMonthlyAmountScalarFieldEnum[];
};
export type BudgetLineMonthlyAmountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput | Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineMonthlyAmountScalarFieldEnum | Prisma.BudgetLineMonthlyAmountScalarFieldEnum[];
};
export type BudgetLineMonthlyAmountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateInput>;
};
export type BudgetLineMonthlyAmountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetLineMonthlyAmountCreateManyInput | Prisma.BudgetLineMonthlyAmountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetLineMonthlyAmountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    data: Prisma.BudgetLineMonthlyAmountCreateManyInput | Prisma.BudgetLineMonthlyAmountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BudgetLineMonthlyAmountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BudgetLineMonthlyAmountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateInput>;
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
};
export type BudgetLineMonthlyAmountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateManyMutationInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyInput>;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    limit?: number;
};
export type BudgetLineMonthlyAmountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateManyMutationInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyInput>;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    limit?: number;
    include?: Prisma.BudgetLineMonthlyAmountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BudgetLineMonthlyAmountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineMonthlyAmountCreateInput, Prisma.BudgetLineMonthlyAmountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetLineMonthlyAmountUpdateInput, Prisma.BudgetLineMonthlyAmountUncheckedUpdateInput>;
};
export type BudgetLineMonthlyAmountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
};
export type BudgetLineMonthlyAmountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    limit?: number;
};
export type BudgetLineMonthlyAmountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
};
