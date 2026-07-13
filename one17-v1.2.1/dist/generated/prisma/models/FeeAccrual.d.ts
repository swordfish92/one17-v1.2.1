import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeeAccrualModel = runtime.Types.Result.DefaultSelection<Prisma.$FeeAccrualPayload>;
export type AggregateFeeAccrual = {
    _count: FeeAccrualCountAggregateOutputType | null;
    _avg: FeeAccrualAvgAggregateOutputType | null;
    _sum: FeeAccrualSumAggregateOutputType | null;
    _min: FeeAccrualMinAggregateOutputType | null;
    _max: FeeAccrualMaxAggregateOutputType | null;
};
export type FeeAccrualAvgAggregateOutputType = {
    dailyAmountKobo: number | null;
    cumulativeAmountKobo: number | null;
    paidAmountKobo: number | null;
};
export type FeeAccrualSumAggregateOutputType = {
    dailyAmountKobo: bigint | null;
    cumulativeAmountKobo: bigint | null;
    paidAmountKobo: bigint | null;
};
export type FeeAccrualMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    feeType: string | null;
    accrualDate: Date | null;
    dailyAmountKobo: bigint | null;
    cumulativeAmountKobo: bigint | null;
    paidAmountKobo: bigint | null;
    createdAt: Date | null;
};
export type FeeAccrualMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    feeType: string | null;
    accrualDate: Date | null;
    dailyAmountKobo: bigint | null;
    cumulativeAmountKobo: bigint | null;
    paidAmountKobo: bigint | null;
    createdAt: Date | null;
};
export type FeeAccrualCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    feeType: number;
    accrualDate: number;
    dailyAmountKobo: number;
    cumulativeAmountKobo: number;
    paidAmountKobo: number;
    createdAt: number;
    _all: number;
};
export type FeeAccrualAvgAggregateInputType = {
    dailyAmountKobo?: true;
    cumulativeAmountKobo?: true;
    paidAmountKobo?: true;
};
export type FeeAccrualSumAggregateInputType = {
    dailyAmountKobo?: true;
    cumulativeAmountKobo?: true;
    paidAmountKobo?: true;
};
export type FeeAccrualMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    feeType?: true;
    accrualDate?: true;
    dailyAmountKobo?: true;
    cumulativeAmountKobo?: true;
    paidAmountKobo?: true;
    createdAt?: true;
};
export type FeeAccrualMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    feeType?: true;
    accrualDate?: true;
    dailyAmountKobo?: true;
    cumulativeAmountKobo?: true;
    paidAmountKobo?: true;
    createdAt?: true;
};
export type FeeAccrualCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    feeType?: true;
    accrualDate?: true;
    dailyAmountKobo?: true;
    cumulativeAmountKobo?: true;
    paidAmountKobo?: true;
    createdAt?: true;
    _all?: true;
};
export type FeeAccrualAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeAccrualWhereInput;
    orderBy?: Prisma.FeeAccrualOrderByWithRelationInput | Prisma.FeeAccrualOrderByWithRelationInput[];
    cursor?: Prisma.FeeAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeeAccrualCountAggregateInputType;
    _avg?: FeeAccrualAvgAggregateInputType;
    _sum?: FeeAccrualSumAggregateInputType;
    _min?: FeeAccrualMinAggregateInputType;
    _max?: FeeAccrualMaxAggregateInputType;
};
export type GetFeeAccrualAggregateType<T extends FeeAccrualAggregateArgs> = {
    [P in keyof T & keyof AggregateFeeAccrual]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeeAccrual[P]> : Prisma.GetScalarType<T[P], AggregateFeeAccrual[P]>;
};
export type FeeAccrualGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeAccrualWhereInput;
    orderBy?: Prisma.FeeAccrualOrderByWithAggregationInput | Prisma.FeeAccrualOrderByWithAggregationInput[];
    by: Prisma.FeeAccrualScalarFieldEnum[] | Prisma.FeeAccrualScalarFieldEnum;
    having?: Prisma.FeeAccrualScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeAccrualCountAggregateInputType | true;
    _avg?: FeeAccrualAvgAggregateInputType;
    _sum?: FeeAccrualSumAggregateInputType;
    _min?: FeeAccrualMinAggregateInputType;
    _max?: FeeAccrualMaxAggregateInputType;
};
export type FeeAccrualGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    feeType: string;
    accrualDate: Date;
    dailyAmountKobo: bigint;
    cumulativeAmountKobo: bigint;
    paidAmountKobo: bigint;
    createdAt: Date;
    _count: FeeAccrualCountAggregateOutputType | null;
    _avg: FeeAccrualAvgAggregateOutputType | null;
    _sum: FeeAccrualSumAggregateOutputType | null;
    _min: FeeAccrualMinAggregateOutputType | null;
    _max: FeeAccrualMaxAggregateOutputType | null;
};
export type GetFeeAccrualGroupByPayload<T extends FeeAccrualGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeeAccrualGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeeAccrualGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeeAccrualGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeeAccrualGroupByOutputType[P]>;
}>>;
export type FeeAccrualWhereInput = {
    AND?: Prisma.FeeAccrualWhereInput | Prisma.FeeAccrualWhereInput[];
    OR?: Prisma.FeeAccrualWhereInput[];
    NOT?: Prisma.FeeAccrualWhereInput | Prisma.FeeAccrualWhereInput[];
    id?: Prisma.UuidFilter<"FeeAccrual"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"FeeAccrual"> | string;
    feeType?: Prisma.StringFilter<"FeeAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
    dailyAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    paidAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    createdAt?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
};
export type FeeAccrualOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    feeType?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
};
export type FeeAccrualWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ledgerEntityCode_feeType_accrualDate?: Prisma.FeeAccrualLedgerEntityCodeFeeTypeAccrualDateCompoundUniqueInput;
    AND?: Prisma.FeeAccrualWhereInput | Prisma.FeeAccrualWhereInput[];
    OR?: Prisma.FeeAccrualWhereInput[];
    NOT?: Prisma.FeeAccrualWhereInput | Prisma.FeeAccrualWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"FeeAccrual"> | string;
    feeType?: Prisma.StringFilter<"FeeAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
    dailyAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    paidAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    createdAt?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
}, "id" | "ledgerEntityCode_feeType_accrualDate">;
export type FeeAccrualOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    feeType?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FeeAccrualCountOrderByAggregateInput;
    _avg?: Prisma.FeeAccrualAvgOrderByAggregateInput;
    _max?: Prisma.FeeAccrualMaxOrderByAggregateInput;
    _min?: Prisma.FeeAccrualMinOrderByAggregateInput;
    _sum?: Prisma.FeeAccrualSumOrderByAggregateInput;
};
export type FeeAccrualScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeeAccrualScalarWhereWithAggregatesInput | Prisma.FeeAccrualScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeeAccrualScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeeAccrualScalarWhereWithAggregatesInput | Prisma.FeeAccrualScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FeeAccrual"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"FeeAccrual"> | string;
    feeType?: Prisma.StringWithAggregatesFilter<"FeeAccrual"> | string;
    accrualDate?: Prisma.DateTimeWithAggregatesFilter<"FeeAccrual"> | Date | string;
    dailyAmountKobo?: Prisma.BigIntWithAggregatesFilter<"FeeAccrual"> | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntWithAggregatesFilter<"FeeAccrual"> | bigint | number;
    paidAmountKobo?: Prisma.BigIntWithAggregatesFilter<"FeeAccrual"> | bigint | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeeAccrual"> | Date | string;
};
export type FeeAccrualCreateInput = {
    id?: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutFeeAccrualsInput;
};
export type FeeAccrualUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
};
export type FeeAccrualUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutFeeAccrualsNestedInput;
};
export type FeeAccrualUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
};
export type FeeAccrualUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualListRelationFilter = {
    every?: Prisma.FeeAccrualWhereInput;
    some?: Prisma.FeeAccrualWhereInput;
    none?: Prisma.FeeAccrualWhereInput;
};
export type FeeAccrualOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeeAccrualLedgerEntityCodeFeeTypeAccrualDateCompoundUniqueInput = {
    ledgerEntityCode: string;
    feeType: string;
    accrualDate: Date | string;
};
export type FeeAccrualCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    feeType?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeAccrualAvgOrderByAggregateInput = {
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
};
export type FeeAccrualMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    feeType?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeAccrualMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    feeType?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeAccrualSumOrderByAggregateInput = {
    dailyAmountKobo?: Prisma.SortOrder;
    cumulativeAmountKobo?: Prisma.SortOrder;
    paidAmountKobo?: Prisma.SortOrder;
};
export type FeeAccrualCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput> | Prisma.FeeAccrualCreateWithoutLedgerEntityInput[] | Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput | Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.FeeAccrualCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
};
export type FeeAccrualUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput> | Prisma.FeeAccrualCreateWithoutLedgerEntityInput[] | Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput | Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.FeeAccrualCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
};
export type FeeAccrualUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput> | Prisma.FeeAccrualCreateWithoutLedgerEntityInput[] | Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput | Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.FeeAccrualUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.FeeAccrualUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.FeeAccrualCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    disconnect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    delete?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    connect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    update?: Prisma.FeeAccrualUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.FeeAccrualUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.FeeAccrualUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.FeeAccrualUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.FeeAccrualScalarWhereInput | Prisma.FeeAccrualScalarWhereInput[];
};
export type FeeAccrualUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput> | Prisma.FeeAccrualCreateWithoutLedgerEntityInput[] | Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput | Prisma.FeeAccrualCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.FeeAccrualUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.FeeAccrualUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.FeeAccrualCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    disconnect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    delete?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    connect?: Prisma.FeeAccrualWhereUniqueInput | Prisma.FeeAccrualWhereUniqueInput[];
    update?: Prisma.FeeAccrualUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.FeeAccrualUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.FeeAccrualUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.FeeAccrualUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.FeeAccrualScalarWhereInput | Prisma.FeeAccrualScalarWhereInput[];
};
export type FeeAccrualCreateWithoutLedgerEntityInput = {
    id?: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
};
export type FeeAccrualUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
};
export type FeeAccrualCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.FeeAccrualWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput>;
};
export type FeeAccrualCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.FeeAccrualCreateManyLedgerEntityInput | Prisma.FeeAccrualCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type FeeAccrualUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.FeeAccrualWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeAccrualUpdateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.FeeAccrualCreateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedCreateWithoutLedgerEntityInput>;
};
export type FeeAccrualUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.FeeAccrualWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeAccrualUpdateWithoutLedgerEntityInput, Prisma.FeeAccrualUncheckedUpdateWithoutLedgerEntityInput>;
};
export type FeeAccrualUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.FeeAccrualScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeAccrualUpdateManyMutationInput, Prisma.FeeAccrualUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type FeeAccrualScalarWhereInput = {
    AND?: Prisma.FeeAccrualScalarWhereInput | Prisma.FeeAccrualScalarWhereInput[];
    OR?: Prisma.FeeAccrualScalarWhereInput[];
    NOT?: Prisma.FeeAccrualScalarWhereInput | Prisma.FeeAccrualScalarWhereInput[];
    id?: Prisma.UuidFilter<"FeeAccrual"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"FeeAccrual"> | string;
    feeType?: Prisma.StringFilter<"FeeAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
    dailyAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    paidAmountKobo?: Prisma.BigIntFilter<"FeeAccrual"> | bigint | number;
    createdAt?: Prisma.DateTimeFilter<"FeeAccrual"> | Date | string;
};
export type FeeAccrualCreateManyLedgerEntityInput = {
    id?: string;
    feeType: string;
    accrualDate: Date | string;
    dailyAmountKobo: bigint | number;
    cumulativeAmountKobo: bigint | number;
    paidAmountKobo?: bigint | number;
    createdAt?: Date | string;
};
export type FeeAccrualUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feeType?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dailyAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cumulativeAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeAccrualSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    feeType?: boolean;
    accrualDate?: boolean;
    dailyAmountKobo?: boolean;
    cumulativeAmountKobo?: boolean;
    paidAmountKobo?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeAccrual"]>;
export type FeeAccrualSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    feeType?: boolean;
    accrualDate?: boolean;
    dailyAmountKobo?: boolean;
    cumulativeAmountKobo?: boolean;
    paidAmountKobo?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeAccrual"]>;
export type FeeAccrualSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    feeType?: boolean;
    accrualDate?: boolean;
    dailyAmountKobo?: boolean;
    cumulativeAmountKobo?: boolean;
    paidAmountKobo?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeAccrual"]>;
export type FeeAccrualSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    feeType?: boolean;
    accrualDate?: boolean;
    dailyAmountKobo?: boolean;
    cumulativeAmountKobo?: boolean;
    paidAmountKobo?: boolean;
    createdAt?: boolean;
};
export type FeeAccrualOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "feeType" | "accrualDate" | "dailyAmountKobo" | "cumulativeAmountKobo" | "paidAmountKobo" | "createdAt", ExtArgs["result"]["feeAccrual"]>;
export type FeeAccrualInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type FeeAccrualIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type FeeAccrualIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $FeeAccrualPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeeAccrual";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        feeType: string;
        accrualDate: Date;
        dailyAmountKobo: bigint;
        cumulativeAmountKobo: bigint;
        paidAmountKobo: bigint;
        createdAt: Date;
    }, ExtArgs["result"]["feeAccrual"]>;
    composites: {};
};
export type FeeAccrualGetPayload<S extends boolean | null | undefined | FeeAccrualDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload, S>;
export type FeeAccrualCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeeAccrualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeeAccrualCountAggregateInputType | true;
};
export interface FeeAccrualDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeeAccrual'];
        meta: {
            name: 'FeeAccrual';
        };
    };
    findUnique<T extends FeeAccrualFindUniqueArgs>(args: Prisma.SelectSubset<T, FeeAccrualFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeeAccrualFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeeAccrualFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeeAccrualFindFirstArgs>(args?: Prisma.SelectSubset<T, FeeAccrualFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeeAccrualFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeeAccrualFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeeAccrualFindManyArgs>(args?: Prisma.SelectSubset<T, FeeAccrualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeeAccrualCreateArgs>(args: Prisma.SelectSubset<T, FeeAccrualCreateArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeeAccrualCreateManyArgs>(args?: Prisma.SelectSubset<T, FeeAccrualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeeAccrualCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeeAccrualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeeAccrualDeleteArgs>(args: Prisma.SelectSubset<T, FeeAccrualDeleteArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeeAccrualUpdateArgs>(args: Prisma.SelectSubset<T, FeeAccrualUpdateArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeeAccrualDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeeAccrualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeeAccrualUpdateManyArgs>(args: Prisma.SelectSubset<T, FeeAccrualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeeAccrualUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeeAccrualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeeAccrualUpsertArgs>(args: Prisma.SelectSubset<T, FeeAccrualUpsertArgs<ExtArgs>>): Prisma.Prisma__FeeAccrualClient<runtime.Types.Result.GetResult<Prisma.$FeeAccrualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeeAccrualCountArgs>(args?: Prisma.Subset<T, FeeAccrualCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeeAccrualCountAggregateOutputType> : number>;
    aggregate<T extends FeeAccrualAggregateArgs>(args: Prisma.Subset<T, FeeAccrualAggregateArgs>): Prisma.PrismaPromise<GetFeeAccrualAggregateType<T>>;
    groupBy<T extends FeeAccrualGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeeAccrualGroupByArgs['orderBy'];
    } : {
        orderBy?: FeeAccrualGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeeAccrualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeAccrualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeeAccrualFieldRefs;
}
export interface Prisma__FeeAccrualClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeeAccrualFieldRefs {
    readonly id: Prisma.FieldRef<"FeeAccrual", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"FeeAccrual", 'String'>;
    readonly feeType: Prisma.FieldRef<"FeeAccrual", 'String'>;
    readonly accrualDate: Prisma.FieldRef<"FeeAccrual", 'DateTime'>;
    readonly dailyAmountKobo: Prisma.FieldRef<"FeeAccrual", 'BigInt'>;
    readonly cumulativeAmountKobo: Prisma.FieldRef<"FeeAccrual", 'BigInt'>;
    readonly paidAmountKobo: Prisma.FieldRef<"FeeAccrual", 'BigInt'>;
    readonly createdAt: Prisma.FieldRef<"FeeAccrual", 'DateTime'>;
}
export type FeeAccrualFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where: Prisma.FeeAccrualWhereUniqueInput;
};
export type FeeAccrualFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where: Prisma.FeeAccrualWhereUniqueInput;
};
export type FeeAccrualFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where?: Prisma.FeeAccrualWhereInput;
    orderBy?: Prisma.FeeAccrualOrderByWithRelationInput | Prisma.FeeAccrualOrderByWithRelationInput[];
    cursor?: Prisma.FeeAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeAccrualScalarFieldEnum | Prisma.FeeAccrualScalarFieldEnum[];
};
export type FeeAccrualFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where?: Prisma.FeeAccrualWhereInput;
    orderBy?: Prisma.FeeAccrualOrderByWithRelationInput | Prisma.FeeAccrualOrderByWithRelationInput[];
    cursor?: Prisma.FeeAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeAccrualScalarFieldEnum | Prisma.FeeAccrualScalarFieldEnum[];
};
export type FeeAccrualFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where?: Prisma.FeeAccrualWhereInput;
    orderBy?: Prisma.FeeAccrualOrderByWithRelationInput | Prisma.FeeAccrualOrderByWithRelationInput[];
    cursor?: Prisma.FeeAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeAccrualScalarFieldEnum | Prisma.FeeAccrualScalarFieldEnum[];
};
export type FeeAccrualCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeAccrualCreateInput, Prisma.FeeAccrualUncheckedCreateInput>;
};
export type FeeAccrualCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeeAccrualCreateManyInput | Prisma.FeeAccrualCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeeAccrualCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    data: Prisma.FeeAccrualCreateManyInput | Prisma.FeeAccrualCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FeeAccrualIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FeeAccrualUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeAccrualUpdateInput, Prisma.FeeAccrualUncheckedUpdateInput>;
    where: Prisma.FeeAccrualWhereUniqueInput;
};
export type FeeAccrualUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeeAccrualUpdateManyMutationInput, Prisma.FeeAccrualUncheckedUpdateManyInput>;
    where?: Prisma.FeeAccrualWhereInput;
    limit?: number;
};
export type FeeAccrualUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeAccrualUpdateManyMutationInput, Prisma.FeeAccrualUncheckedUpdateManyInput>;
    where?: Prisma.FeeAccrualWhereInput;
    limit?: number;
    include?: Prisma.FeeAccrualIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FeeAccrualUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where: Prisma.FeeAccrualWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeAccrualCreateInput, Prisma.FeeAccrualUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeeAccrualUpdateInput, Prisma.FeeAccrualUncheckedUpdateInput>;
};
export type FeeAccrualDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
    where: Prisma.FeeAccrualWhereUniqueInput;
};
export type FeeAccrualDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeAccrualWhereInput;
    limit?: number;
};
export type FeeAccrualDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeAccrualSelect<ExtArgs> | null;
    omit?: Prisma.FeeAccrualOmit<ExtArgs> | null;
    include?: Prisma.FeeAccrualInclude<ExtArgs> | null;
};
