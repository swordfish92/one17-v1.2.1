import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PettyCashSpotCheckModel = runtime.Types.Result.DefaultSelection<Prisma.$PettyCashSpotCheckPayload>;
export type AggregatePettyCashSpotCheck = {
    _count: PettyCashSpotCheckCountAggregateOutputType | null;
    _avg: PettyCashSpotCheckAvgAggregateOutputType | null;
    _sum: PettyCashSpotCheckSumAggregateOutputType | null;
    _min: PettyCashSpotCheckMinAggregateOutputType | null;
    _max: PettyCashSpotCheckMaxAggregateOutputType | null;
};
export type PettyCashSpotCheckAvgAggregateOutputType = {
    countedKobo: number | null;
    expectedKobo: number | null;
    varianceKobo: number | null;
};
export type PettyCashSpotCheckSumAggregateOutputType = {
    countedKobo: bigint | null;
    expectedKobo: bigint | null;
    varianceKobo: bigint | null;
};
export type PettyCashSpotCheckMinAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    countedKobo: bigint | null;
    expectedKobo: bigint | null;
    varianceKobo: bigint | null;
    notes: string | null;
    checkedByUserId: string | null;
    checkedAt: Date | null;
};
export type PettyCashSpotCheckMaxAggregateOutputType = {
    id: string | null;
    floatId: string | null;
    countedKobo: bigint | null;
    expectedKobo: bigint | null;
    varianceKobo: bigint | null;
    notes: string | null;
    checkedByUserId: string | null;
    checkedAt: Date | null;
};
export type PettyCashSpotCheckCountAggregateOutputType = {
    id: number;
    floatId: number;
    countedKobo: number;
    expectedKobo: number;
    varianceKobo: number;
    notes: number;
    checkedByUserId: number;
    checkedAt: number;
    _all: number;
};
export type PettyCashSpotCheckAvgAggregateInputType = {
    countedKobo?: true;
    expectedKobo?: true;
    varianceKobo?: true;
};
export type PettyCashSpotCheckSumAggregateInputType = {
    countedKobo?: true;
    expectedKobo?: true;
    varianceKobo?: true;
};
export type PettyCashSpotCheckMinAggregateInputType = {
    id?: true;
    floatId?: true;
    countedKobo?: true;
    expectedKobo?: true;
    varianceKobo?: true;
    notes?: true;
    checkedByUserId?: true;
    checkedAt?: true;
};
export type PettyCashSpotCheckMaxAggregateInputType = {
    id?: true;
    floatId?: true;
    countedKobo?: true;
    expectedKobo?: true;
    varianceKobo?: true;
    notes?: true;
    checkedByUserId?: true;
    checkedAt?: true;
};
export type PettyCashSpotCheckCountAggregateInputType = {
    id?: true;
    floatId?: true;
    countedKobo?: true;
    expectedKobo?: true;
    varianceKobo?: true;
    notes?: true;
    checkedByUserId?: true;
    checkedAt?: true;
    _all?: true;
};
export type PettyCashSpotCheckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithRelationInput | Prisma.PettyCashSpotCheckOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashSpotCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PettyCashSpotCheckCountAggregateInputType;
    _avg?: PettyCashSpotCheckAvgAggregateInputType;
    _sum?: PettyCashSpotCheckSumAggregateInputType;
    _min?: PettyCashSpotCheckMinAggregateInputType;
    _max?: PettyCashSpotCheckMaxAggregateInputType;
};
export type GetPettyCashSpotCheckAggregateType<T extends PettyCashSpotCheckAggregateArgs> = {
    [P in keyof T & keyof AggregatePettyCashSpotCheck]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePettyCashSpotCheck[P]> : Prisma.GetScalarType<T[P], AggregatePettyCashSpotCheck[P]>;
};
export type PettyCashSpotCheckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithAggregationInput | Prisma.PettyCashSpotCheckOrderByWithAggregationInput[];
    by: Prisma.PettyCashSpotCheckScalarFieldEnum[] | Prisma.PettyCashSpotCheckScalarFieldEnum;
    having?: Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PettyCashSpotCheckCountAggregateInputType | true;
    _avg?: PettyCashSpotCheckAvgAggregateInputType;
    _sum?: PettyCashSpotCheckSumAggregateInputType;
    _min?: PettyCashSpotCheckMinAggregateInputType;
    _max?: PettyCashSpotCheckMaxAggregateInputType;
};
export type PettyCashSpotCheckGroupByOutputType = {
    id: string;
    floatId: string;
    countedKobo: bigint;
    expectedKobo: bigint;
    varianceKobo: bigint;
    notes: string | null;
    checkedByUserId: string;
    checkedAt: Date;
    _count: PettyCashSpotCheckCountAggregateOutputType | null;
    _avg: PettyCashSpotCheckAvgAggregateOutputType | null;
    _sum: PettyCashSpotCheckSumAggregateOutputType | null;
    _min: PettyCashSpotCheckMinAggregateOutputType | null;
    _max: PettyCashSpotCheckMaxAggregateOutputType | null;
};
export type GetPettyCashSpotCheckGroupByPayload<T extends PettyCashSpotCheckGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PettyCashSpotCheckGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PettyCashSpotCheckGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PettyCashSpotCheckGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PettyCashSpotCheckGroupByOutputType[P]>;
}>>;
export type PettyCashSpotCheckWhereInput = {
    AND?: Prisma.PettyCashSpotCheckWhereInput | Prisma.PettyCashSpotCheckWhereInput[];
    OR?: Prisma.PettyCashSpotCheckWhereInput[];
    NOT?: Prisma.PettyCashSpotCheckWhereInput | Prisma.PettyCashSpotCheckWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    countedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    expectedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    varianceKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"PettyCashSpotCheck"> | string | null;
    checkedByUserId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    checkedAt?: Prisma.DateTimeFilter<"PettyCashSpotCheck"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
};
export type PettyCashSpotCheckOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedByUserId?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
    float?: Prisma.PettyCashFloatOrderByWithRelationInput;
};
export type PettyCashSpotCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PettyCashSpotCheckWhereInput | Prisma.PettyCashSpotCheckWhereInput[];
    OR?: Prisma.PettyCashSpotCheckWhereInput[];
    NOT?: Prisma.PettyCashSpotCheckWhereInput | Prisma.PettyCashSpotCheckWhereInput[];
    floatId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    countedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    expectedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    varianceKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"PettyCashSpotCheck"> | string | null;
    checkedByUserId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    checkedAt?: Prisma.DateTimeFilter<"PettyCashSpotCheck"> | Date | string;
    float?: Prisma.XOR<Prisma.PettyCashFloatScalarRelationFilter, Prisma.PettyCashFloatWhereInput>;
}, "id">;
export type PettyCashSpotCheckOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedByUserId?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
    _count?: Prisma.PettyCashSpotCheckCountOrderByAggregateInput;
    _avg?: Prisma.PettyCashSpotCheckAvgOrderByAggregateInput;
    _max?: Prisma.PettyCashSpotCheckMaxOrderByAggregateInput;
    _min?: Prisma.PettyCashSpotCheckMinOrderByAggregateInput;
    _sum?: Prisma.PettyCashSpotCheckSumOrderByAggregateInput;
};
export type PettyCashSpotCheckScalarWhereWithAggregatesInput = {
    AND?: Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput | Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput[];
    OR?: Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput | Prisma.PettyCashSpotCheckScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PettyCashSpotCheck"> | string;
    floatId?: Prisma.UuidWithAggregatesFilter<"PettyCashSpotCheck"> | string;
    countedKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashSpotCheck"> | bigint | number;
    expectedKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashSpotCheck"> | bigint | number;
    varianceKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashSpotCheck"> | bigint | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PettyCashSpotCheck"> | string | null;
    checkedByUserId?: Prisma.UuidWithAggregatesFilter<"PettyCashSpotCheck"> | string;
    checkedAt?: Prisma.DateTimeWithAggregatesFilter<"PettyCashSpotCheck"> | Date | string;
};
export type PettyCashSpotCheckCreateInput = {
    id?: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
    float: Prisma.PettyCashFloatCreateNestedOneWithoutSpotChecksInput;
};
export type PettyCashSpotCheckUncheckedCreateInput = {
    id?: string;
    floatId: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
};
export type PettyCashSpotCheckUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    float?: Prisma.PettyCashFloatUpdateOneRequiredWithoutSpotChecksNestedInput;
};
export type PettyCashSpotCheckUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckCreateManyInput = {
    id?: string;
    floatId: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
};
export type PettyCashSpotCheckUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatId?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckListRelationFilter = {
    every?: Prisma.PettyCashSpotCheckWhereInput;
    some?: Prisma.PettyCashSpotCheckWhereInput;
    none?: Prisma.PettyCashSpotCheckWhereInput;
};
export type PettyCashSpotCheckOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PettyCashSpotCheckCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    checkedByUserId?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type PettyCashSpotCheckAvgOrderByAggregateInput = {
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
};
export type PettyCashSpotCheckMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    checkedByUserId?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type PettyCashSpotCheckMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatId?: Prisma.SortOrder;
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    checkedByUserId?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type PettyCashSpotCheckSumOrderByAggregateInput = {
    countedKobo?: Prisma.SortOrder;
    expectedKobo?: Prisma.SortOrder;
    varianceKobo?: Prisma.SortOrder;
};
export type PettyCashSpotCheckCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput> | Prisma.PettyCashSpotCheckCreateWithoutFloatInput[] | Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput | Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashSpotCheckCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
};
export type PettyCashSpotCheckUncheckedCreateNestedManyWithoutFloatInput = {
    create?: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput> | Prisma.PettyCashSpotCheckCreateWithoutFloatInput[] | Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput | Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput[];
    createMany?: Prisma.PettyCashSpotCheckCreateManyFloatInputEnvelope;
    connect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
};
export type PettyCashSpotCheckUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput> | Prisma.PettyCashSpotCheckCreateWithoutFloatInput[] | Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput | Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashSpotCheckUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashSpotCheckUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashSpotCheckCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    disconnect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    delete?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    connect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    update?: Prisma.PettyCashSpotCheckUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashSpotCheckUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashSpotCheckUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashSpotCheckUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashSpotCheckScalarWhereInput | Prisma.PettyCashSpotCheckScalarWhereInput[];
};
export type PettyCashSpotCheckUncheckedUpdateManyWithoutFloatNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput> | Prisma.PettyCashSpotCheckCreateWithoutFloatInput[] | Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput[];
    connectOrCreate?: Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput | Prisma.PettyCashSpotCheckCreateOrConnectWithoutFloatInput[];
    upsert?: Prisma.PettyCashSpotCheckUpsertWithWhereUniqueWithoutFloatInput | Prisma.PettyCashSpotCheckUpsertWithWhereUniqueWithoutFloatInput[];
    createMany?: Prisma.PettyCashSpotCheckCreateManyFloatInputEnvelope;
    set?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    disconnect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    delete?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    connect?: Prisma.PettyCashSpotCheckWhereUniqueInput | Prisma.PettyCashSpotCheckWhereUniqueInput[];
    update?: Prisma.PettyCashSpotCheckUpdateWithWhereUniqueWithoutFloatInput | Prisma.PettyCashSpotCheckUpdateWithWhereUniqueWithoutFloatInput[];
    updateMany?: Prisma.PettyCashSpotCheckUpdateManyWithWhereWithoutFloatInput | Prisma.PettyCashSpotCheckUpdateManyWithWhereWithoutFloatInput[];
    deleteMany?: Prisma.PettyCashSpotCheckScalarWhereInput | Prisma.PettyCashSpotCheckScalarWhereInput[];
};
export type PettyCashSpotCheckCreateWithoutFloatInput = {
    id?: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
};
export type PettyCashSpotCheckUncheckedCreateWithoutFloatInput = {
    id?: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
};
export type PettyCashSpotCheckCreateOrConnectWithoutFloatInput = {
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput>;
};
export type PettyCashSpotCheckCreateManyFloatInputEnvelope = {
    data: Prisma.PettyCashSpotCheckCreateManyFloatInput | Prisma.PettyCashSpotCheckCreateManyFloatInput[];
    skipDuplicates?: boolean;
};
export type PettyCashSpotCheckUpsertWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
    update: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedUpdateWithoutFloatInput>;
    create: Prisma.XOR<Prisma.PettyCashSpotCheckCreateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedCreateWithoutFloatInput>;
};
export type PettyCashSpotCheckUpdateWithWhereUniqueWithoutFloatInput = {
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
    data: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateWithoutFloatInput, Prisma.PettyCashSpotCheckUncheckedUpdateWithoutFloatInput>;
};
export type PettyCashSpotCheckUpdateManyWithWhereWithoutFloatInput = {
    where: Prisma.PettyCashSpotCheckScalarWhereInput;
    data: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateManyMutationInput, Prisma.PettyCashSpotCheckUncheckedUpdateManyWithoutFloatInput>;
};
export type PettyCashSpotCheckScalarWhereInput = {
    AND?: Prisma.PettyCashSpotCheckScalarWhereInput | Prisma.PettyCashSpotCheckScalarWhereInput[];
    OR?: Prisma.PettyCashSpotCheckScalarWhereInput[];
    NOT?: Prisma.PettyCashSpotCheckScalarWhereInput | Prisma.PettyCashSpotCheckScalarWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    floatId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    countedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    expectedKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    varianceKobo?: Prisma.BigIntFilter<"PettyCashSpotCheck"> | bigint | number;
    notes?: Prisma.StringNullableFilter<"PettyCashSpotCheck"> | string | null;
    checkedByUserId?: Prisma.UuidFilter<"PettyCashSpotCheck"> | string;
    checkedAt?: Prisma.DateTimeFilter<"PettyCashSpotCheck"> | Date | string;
};
export type PettyCashSpotCheckCreateManyFloatInput = {
    id?: string;
    countedKobo: bigint | number;
    expectedKobo: bigint | number;
    varianceKobo: bigint | number;
    notes?: string | null;
    checkedByUserId: string;
    checkedAt?: Date | string;
};
export type PettyCashSpotCheckUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckUncheckedUpdateWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckUncheckedUpdateManyWithoutFloatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    countedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    varianceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashSpotCheckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    countedKobo?: boolean;
    expectedKobo?: boolean;
    varianceKobo?: boolean;
    notes?: boolean;
    checkedByUserId?: boolean;
    checkedAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashSpotCheck"]>;
export type PettyCashSpotCheckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    countedKobo?: boolean;
    expectedKobo?: boolean;
    varianceKobo?: boolean;
    notes?: boolean;
    checkedByUserId?: boolean;
    checkedAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashSpotCheck"]>;
export type PettyCashSpotCheckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatId?: boolean;
    countedKobo?: boolean;
    expectedKobo?: boolean;
    varianceKobo?: boolean;
    notes?: boolean;
    checkedByUserId?: boolean;
    checkedAt?: boolean;
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashSpotCheck"]>;
export type PettyCashSpotCheckSelectScalar = {
    id?: boolean;
    floatId?: boolean;
    countedKobo?: boolean;
    expectedKobo?: boolean;
    varianceKobo?: boolean;
    notes?: boolean;
    checkedByUserId?: boolean;
    checkedAt?: boolean;
};
export type PettyCashSpotCheckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "floatId" | "countedKobo" | "expectedKobo" | "varianceKobo" | "notes" | "checkedByUserId" | "checkedAt", ExtArgs["result"]["pettyCashSpotCheck"]>;
export type PettyCashSpotCheckInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
};
export type PettyCashSpotCheckIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
};
export type PettyCashSpotCheckIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    float?: boolean | Prisma.PettyCashFloatDefaultArgs<ExtArgs>;
};
export type $PettyCashSpotCheckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PettyCashSpotCheck";
    objects: {
        float: Prisma.$PettyCashFloatPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        floatId: string;
        countedKobo: bigint;
        expectedKobo: bigint;
        varianceKobo: bigint;
        notes: string | null;
        checkedByUserId: string;
        checkedAt: Date;
    }, ExtArgs["result"]["pettyCashSpotCheck"]>;
    composites: {};
};
export type PettyCashSpotCheckGetPayload<S extends boolean | null | undefined | PettyCashSpotCheckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload, S>;
export type PettyCashSpotCheckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PettyCashSpotCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PettyCashSpotCheckCountAggregateInputType | true;
};
export interface PettyCashSpotCheckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PettyCashSpotCheck'];
        meta: {
            name: 'PettyCashSpotCheck';
        };
    };
    findUnique<T extends PettyCashSpotCheckFindUniqueArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PettyCashSpotCheckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PettyCashSpotCheckFindFirstArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckFindFirstArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PettyCashSpotCheckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PettyCashSpotCheckFindManyArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PettyCashSpotCheckCreateArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckCreateArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PettyCashSpotCheckCreateManyArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PettyCashSpotCheckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PettyCashSpotCheckDeleteArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckDeleteArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PettyCashSpotCheckUpdateArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckUpdateArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PettyCashSpotCheckDeleteManyArgs>(args?: Prisma.SelectSubset<T, PettyCashSpotCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PettyCashSpotCheckUpdateManyArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PettyCashSpotCheckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PettyCashSpotCheckUpsertArgs>(args: Prisma.SelectSubset<T, PettyCashSpotCheckUpsertArgs<ExtArgs>>): Prisma.Prisma__PettyCashSpotCheckClient<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PettyCashSpotCheckCountArgs>(args?: Prisma.Subset<T, PettyCashSpotCheckCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PettyCashSpotCheckCountAggregateOutputType> : number>;
    aggregate<T extends PettyCashSpotCheckAggregateArgs>(args: Prisma.Subset<T, PettyCashSpotCheckAggregateArgs>): Prisma.PrismaPromise<GetPettyCashSpotCheckAggregateType<T>>;
    groupBy<T extends PettyCashSpotCheckGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PettyCashSpotCheckGroupByArgs['orderBy'];
    } : {
        orderBy?: PettyCashSpotCheckGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PettyCashSpotCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPettyCashSpotCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PettyCashSpotCheckFieldRefs;
}
export interface Prisma__PettyCashSpotCheckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    float<T extends Prisma.PettyCashFloatDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloatDefaultArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PettyCashSpotCheckFieldRefs {
    readonly id: Prisma.FieldRef<"PettyCashSpotCheck", 'String'>;
    readonly floatId: Prisma.FieldRef<"PettyCashSpotCheck", 'String'>;
    readonly countedKobo: Prisma.FieldRef<"PettyCashSpotCheck", 'BigInt'>;
    readonly expectedKobo: Prisma.FieldRef<"PettyCashSpotCheck", 'BigInt'>;
    readonly varianceKobo: Prisma.FieldRef<"PettyCashSpotCheck", 'BigInt'>;
    readonly notes: Prisma.FieldRef<"PettyCashSpotCheck", 'String'>;
    readonly checkedByUserId: Prisma.FieldRef<"PettyCashSpotCheck", 'String'>;
    readonly checkedAt: Prisma.FieldRef<"PettyCashSpotCheck", 'DateTime'>;
}
export type PettyCashSpotCheckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
};
export type PettyCashSpotCheckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
};
export type PettyCashSpotCheckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithRelationInput | Prisma.PettyCashSpotCheckOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashSpotCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashSpotCheckScalarFieldEnum | Prisma.PettyCashSpotCheckScalarFieldEnum[];
};
export type PettyCashSpotCheckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithRelationInput | Prisma.PettyCashSpotCheckOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashSpotCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashSpotCheckScalarFieldEnum | Prisma.PettyCashSpotCheckScalarFieldEnum[];
};
export type PettyCashSpotCheckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithRelationInput | Prisma.PettyCashSpotCheckOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashSpotCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashSpotCheckScalarFieldEnum | Prisma.PettyCashSpotCheckScalarFieldEnum[];
};
export type PettyCashSpotCheckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashSpotCheckCreateInput, Prisma.PettyCashSpotCheckUncheckedCreateInput>;
};
export type PettyCashSpotCheckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PettyCashSpotCheckCreateManyInput | Prisma.PettyCashSpotCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PettyCashSpotCheckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    data: Prisma.PettyCashSpotCheckCreateManyInput | Prisma.PettyCashSpotCheckCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PettyCashSpotCheckIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PettyCashSpotCheckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateInput, Prisma.PettyCashSpotCheckUncheckedUpdateInput>;
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
};
export type PettyCashSpotCheckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateManyMutationInput, Prisma.PettyCashSpotCheckUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    limit?: number;
};
export type PettyCashSpotCheckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateManyMutationInput, Prisma.PettyCashSpotCheckUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    limit?: number;
    include?: Prisma.PettyCashSpotCheckIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PettyCashSpotCheckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashSpotCheckCreateInput, Prisma.PettyCashSpotCheckUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PettyCashSpotCheckUpdateInput, Prisma.PettyCashSpotCheckUncheckedUpdateInput>;
};
export type PettyCashSpotCheckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where: Prisma.PettyCashSpotCheckWhereUniqueInput;
};
export type PettyCashSpotCheckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashSpotCheckWhereInput;
    limit?: number;
};
export type PettyCashSpotCheckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
};
