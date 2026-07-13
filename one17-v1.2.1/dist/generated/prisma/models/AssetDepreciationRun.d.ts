import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetDepreciationRunModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetDepreciationRunPayload>;
export type AggregateAssetDepreciationRun = {
    _count: AssetDepreciationRunCountAggregateOutputType | null;
    _avg: AssetDepreciationRunAvgAggregateOutputType | null;
    _sum: AssetDepreciationRunSumAggregateOutputType | null;
    _min: AssetDepreciationRunMinAggregateOutputType | null;
    _max: AssetDepreciationRunMaxAggregateOutputType | null;
};
export type AssetDepreciationRunAvgAggregateOutputType = {
    periodMonth: number | null;
    periodYear: number | null;
    depreciationAmountKobo: number | null;
};
export type AssetDepreciationRunSumAggregateOutputType = {
    periodMonth: number | null;
    periodYear: number | null;
    depreciationAmountKobo: bigint | null;
};
export type AssetDepreciationRunMinAggregateOutputType = {
    id: string | null;
    assetRegisterEntryId: string | null;
    periodMonth: number | null;
    periodYear: number | null;
    depreciationAmountKobo: bigint | null;
    journalEntryId: string | null;
    createdAt: Date | null;
};
export type AssetDepreciationRunMaxAggregateOutputType = {
    id: string | null;
    assetRegisterEntryId: string | null;
    periodMonth: number | null;
    periodYear: number | null;
    depreciationAmountKobo: bigint | null;
    journalEntryId: string | null;
    createdAt: Date | null;
};
export type AssetDepreciationRunCountAggregateOutputType = {
    id: number;
    assetRegisterEntryId: number;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: number;
    journalEntryId: number;
    createdAt: number;
    _all: number;
};
export type AssetDepreciationRunAvgAggregateInputType = {
    periodMonth?: true;
    periodYear?: true;
    depreciationAmountKobo?: true;
};
export type AssetDepreciationRunSumAggregateInputType = {
    periodMonth?: true;
    periodYear?: true;
    depreciationAmountKobo?: true;
};
export type AssetDepreciationRunMinAggregateInputType = {
    id?: true;
    assetRegisterEntryId?: true;
    periodMonth?: true;
    periodYear?: true;
    depreciationAmountKobo?: true;
    journalEntryId?: true;
    createdAt?: true;
};
export type AssetDepreciationRunMaxAggregateInputType = {
    id?: true;
    assetRegisterEntryId?: true;
    periodMonth?: true;
    periodYear?: true;
    depreciationAmountKobo?: true;
    journalEntryId?: true;
    createdAt?: true;
};
export type AssetDepreciationRunCountAggregateInputType = {
    id?: true;
    assetRegisterEntryId?: true;
    periodMonth?: true;
    periodYear?: true;
    depreciationAmountKobo?: true;
    journalEntryId?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetDepreciationRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithRelationInput | Prisma.AssetDepreciationRunOrderByWithRelationInput[];
    cursor?: Prisma.AssetDepreciationRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetDepreciationRunCountAggregateInputType;
    _avg?: AssetDepreciationRunAvgAggregateInputType;
    _sum?: AssetDepreciationRunSumAggregateInputType;
    _min?: AssetDepreciationRunMinAggregateInputType;
    _max?: AssetDepreciationRunMaxAggregateInputType;
};
export type GetAssetDepreciationRunAggregateType<T extends AssetDepreciationRunAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetDepreciationRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetDepreciationRun[P]> : Prisma.GetScalarType<T[P], AggregateAssetDepreciationRun[P]>;
};
export type AssetDepreciationRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithAggregationInput | Prisma.AssetDepreciationRunOrderByWithAggregationInput[];
    by: Prisma.AssetDepreciationRunScalarFieldEnum[] | Prisma.AssetDepreciationRunScalarFieldEnum;
    having?: Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetDepreciationRunCountAggregateInputType | true;
    _avg?: AssetDepreciationRunAvgAggregateInputType;
    _sum?: AssetDepreciationRunSumAggregateInputType;
    _min?: AssetDepreciationRunMinAggregateInputType;
    _max?: AssetDepreciationRunMaxAggregateInputType;
};
export type AssetDepreciationRunGroupByOutputType = {
    id: string;
    assetRegisterEntryId: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint;
    journalEntryId: string | null;
    createdAt: Date;
    _count: AssetDepreciationRunCountAggregateOutputType | null;
    _avg: AssetDepreciationRunAvgAggregateOutputType | null;
    _sum: AssetDepreciationRunSumAggregateOutputType | null;
    _min: AssetDepreciationRunMinAggregateOutputType | null;
    _max: AssetDepreciationRunMaxAggregateOutputType | null;
};
export type GetAssetDepreciationRunGroupByPayload<T extends AssetDepreciationRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetDepreciationRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetDepreciationRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetDepreciationRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetDepreciationRunGroupByOutputType[P]>;
}>>;
export type AssetDepreciationRunWhereInput = {
    AND?: Prisma.AssetDepreciationRunWhereInput | Prisma.AssetDepreciationRunWhereInput[];
    OR?: Prisma.AssetDepreciationRunWhereInput[];
    NOT?: Prisma.AssetDepreciationRunWhereInput | Prisma.AssetDepreciationRunWhereInput[];
    id?: Prisma.UuidFilter<"AssetDepreciationRun"> | string;
    assetRegisterEntryId?: Prisma.UuidFilter<"AssetDepreciationRun"> | string;
    periodMonth?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    periodYear?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    depreciationAmountKobo?: Prisma.BigIntFilter<"AssetDepreciationRun"> | bigint | number;
    journalEntryId?: Prisma.UuidNullableFilter<"AssetDepreciationRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetDepreciationRun"> | Date | string;
    assetRegisterEntry?: Prisma.XOR<Prisma.AssetRegisterEntryScalarRelationFilter, Prisma.AssetRegisterEntryWhereInput>;
};
export type AssetDepreciationRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetRegisterEntryId?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    assetRegisterEntry?: Prisma.AssetRegisterEntryOrderByWithRelationInput;
};
export type AssetDepreciationRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    assetRegisterEntryId_periodMonth_periodYear?: Prisma.AssetDepreciationRunAssetRegisterEntryIdPeriodMonthPeriodYearCompoundUniqueInput;
    AND?: Prisma.AssetDepreciationRunWhereInput | Prisma.AssetDepreciationRunWhereInput[];
    OR?: Prisma.AssetDepreciationRunWhereInput[];
    NOT?: Prisma.AssetDepreciationRunWhereInput | Prisma.AssetDepreciationRunWhereInput[];
    assetRegisterEntryId?: Prisma.UuidFilter<"AssetDepreciationRun"> | string;
    periodMonth?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    periodYear?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    depreciationAmountKobo?: Prisma.BigIntFilter<"AssetDepreciationRun"> | bigint | number;
    journalEntryId?: Prisma.UuidNullableFilter<"AssetDepreciationRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetDepreciationRun"> | Date | string;
    assetRegisterEntry?: Prisma.XOR<Prisma.AssetRegisterEntryScalarRelationFilter, Prisma.AssetRegisterEntryWhereInput>;
}, "id" | "assetRegisterEntryId_periodMonth_periodYear">;
export type AssetDepreciationRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetRegisterEntryId?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetDepreciationRunCountOrderByAggregateInput;
    _avg?: Prisma.AssetDepreciationRunAvgOrderByAggregateInput;
    _max?: Prisma.AssetDepreciationRunMaxOrderByAggregateInput;
    _min?: Prisma.AssetDepreciationRunMinOrderByAggregateInput;
    _sum?: Prisma.AssetDepreciationRunSumOrderByAggregateInput;
};
export type AssetDepreciationRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput | Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput | Prisma.AssetDepreciationRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AssetDepreciationRun"> | string;
    assetRegisterEntryId?: Prisma.UuidWithAggregatesFilter<"AssetDepreciationRun"> | string;
    periodMonth?: Prisma.IntWithAggregatesFilter<"AssetDepreciationRun"> | number;
    periodYear?: Prisma.IntWithAggregatesFilter<"AssetDepreciationRun"> | number;
    depreciationAmountKobo?: Prisma.BigIntWithAggregatesFilter<"AssetDepreciationRun"> | bigint | number;
    journalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"AssetDepreciationRun"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetDepreciationRun"> | Date | string;
};
export type AssetDepreciationRunCreateInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
    assetRegisterEntry: Prisma.AssetRegisterEntryCreateNestedOneWithoutDepreciationRunsInput;
};
export type AssetDepreciationRunUncheckedCreateInput = {
    id?: string;
    assetRegisterEntryId: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
};
export type AssetDepreciationRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assetRegisterEntry?: Prisma.AssetRegisterEntryUpdateOneRequiredWithoutDepreciationRunsNestedInput;
};
export type AssetDepreciationRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRegisterEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunCreateManyInput = {
    id?: string;
    assetRegisterEntryId: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
};
export type AssetDepreciationRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRegisterEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunListRelationFilter = {
    every?: Prisma.AssetDepreciationRunWhereInput;
    some?: Prisma.AssetDepreciationRunWhereInput;
    none?: Prisma.AssetDepreciationRunWhereInput;
};
export type AssetDepreciationRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetDepreciationRunAssetRegisterEntryIdPeriodMonthPeriodYearCompoundUniqueInput = {
    assetRegisterEntryId: string;
    periodMonth: number;
    periodYear: number;
};
export type AssetDepreciationRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRegisterEntryId?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetDepreciationRunAvgOrderByAggregateInput = {
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
};
export type AssetDepreciationRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRegisterEntryId?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetDepreciationRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRegisterEntryId?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetDepreciationRunSumOrderByAggregateInput = {
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    depreciationAmountKobo?: Prisma.SortOrder;
};
export type AssetDepreciationRunCreateNestedManyWithoutAssetRegisterEntryInput = {
    create?: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput> | Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput[] | Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput[];
    connectOrCreate?: Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput[];
    createMany?: Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInputEnvelope;
    connect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
};
export type AssetDepreciationRunUncheckedCreateNestedManyWithoutAssetRegisterEntryInput = {
    create?: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput> | Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput[] | Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput[];
    connectOrCreate?: Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput[];
    createMany?: Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInputEnvelope;
    connect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
};
export type AssetDepreciationRunUpdateManyWithoutAssetRegisterEntryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput> | Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput[] | Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput[];
    connectOrCreate?: Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput[];
    upsert?: Prisma.AssetDepreciationRunUpsertWithWhereUniqueWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpsertWithWhereUniqueWithoutAssetRegisterEntryInput[];
    createMany?: Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInputEnvelope;
    set?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    disconnect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    delete?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    connect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    update?: Prisma.AssetDepreciationRunUpdateWithWhereUniqueWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpdateWithWhereUniqueWithoutAssetRegisterEntryInput[];
    updateMany?: Prisma.AssetDepreciationRunUpdateManyWithWhereWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpdateManyWithWhereWithoutAssetRegisterEntryInput[];
    deleteMany?: Prisma.AssetDepreciationRunScalarWhereInput | Prisma.AssetDepreciationRunScalarWhereInput[];
};
export type AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput> | Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput[] | Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput[];
    connectOrCreate?: Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput[];
    upsert?: Prisma.AssetDepreciationRunUpsertWithWhereUniqueWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpsertWithWhereUniqueWithoutAssetRegisterEntryInput[];
    createMany?: Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInputEnvelope;
    set?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    disconnect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    delete?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    connect?: Prisma.AssetDepreciationRunWhereUniqueInput | Prisma.AssetDepreciationRunWhereUniqueInput[];
    update?: Prisma.AssetDepreciationRunUpdateWithWhereUniqueWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpdateWithWhereUniqueWithoutAssetRegisterEntryInput[];
    updateMany?: Prisma.AssetDepreciationRunUpdateManyWithWhereWithoutAssetRegisterEntryInput | Prisma.AssetDepreciationRunUpdateManyWithWhereWithoutAssetRegisterEntryInput[];
    deleteMany?: Prisma.AssetDepreciationRunScalarWhereInput | Prisma.AssetDepreciationRunScalarWhereInput[];
};
export type AssetDepreciationRunCreateWithoutAssetRegisterEntryInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
};
export type AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
};
export type AssetDepreciationRunCreateOrConnectWithoutAssetRegisterEntryInput = {
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput>;
};
export type AssetDepreciationRunCreateManyAssetRegisterEntryInputEnvelope = {
    data: Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInput | Prisma.AssetDepreciationRunCreateManyAssetRegisterEntryInput[];
    skipDuplicates?: boolean;
};
export type AssetDepreciationRunUpsertWithWhereUniqueWithoutAssetRegisterEntryInput = {
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetDepreciationRunUpdateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedUpdateWithoutAssetRegisterEntryInput>;
    create: Prisma.XOR<Prisma.AssetDepreciationRunCreateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedCreateWithoutAssetRegisterEntryInput>;
};
export type AssetDepreciationRunUpdateWithWhereUniqueWithoutAssetRegisterEntryInput = {
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetDepreciationRunUpdateWithoutAssetRegisterEntryInput, Prisma.AssetDepreciationRunUncheckedUpdateWithoutAssetRegisterEntryInput>;
};
export type AssetDepreciationRunUpdateManyWithWhereWithoutAssetRegisterEntryInput = {
    where: Prisma.AssetDepreciationRunScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetDepreciationRunUpdateManyMutationInput, Prisma.AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryInput>;
};
export type AssetDepreciationRunScalarWhereInput = {
    AND?: Prisma.AssetDepreciationRunScalarWhereInput | Prisma.AssetDepreciationRunScalarWhereInput[];
    OR?: Prisma.AssetDepreciationRunScalarWhereInput[];
    NOT?: Prisma.AssetDepreciationRunScalarWhereInput | Prisma.AssetDepreciationRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"AssetDepreciationRun"> | string;
    assetRegisterEntryId?: Prisma.UuidFilter<"AssetDepreciationRun"> | string;
    periodMonth?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    periodYear?: Prisma.IntFilter<"AssetDepreciationRun"> | number;
    depreciationAmountKobo?: Prisma.BigIntFilter<"AssetDepreciationRun"> | bigint | number;
    journalEntryId?: Prisma.UuidNullableFilter<"AssetDepreciationRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetDepreciationRun"> | Date | string;
};
export type AssetDepreciationRunCreateManyAssetRegisterEntryInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    depreciationAmountKobo: bigint | number;
    journalEntryId?: string | null;
    createdAt?: Date | string;
};
export type AssetDepreciationRunUpdateWithoutAssetRegisterEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunUncheckedUpdateWithoutAssetRegisterEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    depreciationAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetDepreciationRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRegisterEntryId?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    depreciationAmountKobo?: boolean;
    journalEntryId?: boolean;
    createdAt?: boolean;
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetDepreciationRun"]>;
export type AssetDepreciationRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRegisterEntryId?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    depreciationAmountKobo?: boolean;
    journalEntryId?: boolean;
    createdAt?: boolean;
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetDepreciationRun"]>;
export type AssetDepreciationRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRegisterEntryId?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    depreciationAmountKobo?: boolean;
    journalEntryId?: boolean;
    createdAt?: boolean;
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetDepreciationRun"]>;
export type AssetDepreciationRunSelectScalar = {
    id?: boolean;
    assetRegisterEntryId?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    depreciationAmountKobo?: boolean;
    journalEntryId?: boolean;
    createdAt?: boolean;
};
export type AssetDepreciationRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetRegisterEntryId" | "periodMonth" | "periodYear" | "depreciationAmountKobo" | "journalEntryId" | "createdAt", ExtArgs["result"]["assetDepreciationRun"]>;
export type AssetDepreciationRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
};
export type AssetDepreciationRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
};
export type AssetDepreciationRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRegisterEntry?: boolean | Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>;
};
export type $AssetDepreciationRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetDepreciationRun";
    objects: {
        assetRegisterEntry: Prisma.$AssetRegisterEntryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetRegisterEntryId: string;
        periodMonth: number;
        periodYear: number;
        depreciationAmountKobo: bigint;
        journalEntryId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["assetDepreciationRun"]>;
    composites: {};
};
export type AssetDepreciationRunGetPayload<S extends boolean | null | undefined | AssetDepreciationRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload, S>;
export type AssetDepreciationRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetDepreciationRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetDepreciationRunCountAggregateInputType | true;
};
export interface AssetDepreciationRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetDepreciationRun'];
        meta: {
            name: 'AssetDepreciationRun';
        };
    };
    findUnique<T extends AssetDepreciationRunFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetDepreciationRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetDepreciationRunFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetDepreciationRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetDepreciationRunFindManyArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetDepreciationRunCreateArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunCreateArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetDepreciationRunCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetDepreciationRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetDepreciationRunDeleteArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetDepreciationRunUpdateArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetDepreciationRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDepreciationRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetDepreciationRunUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetDepreciationRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetDepreciationRunUpsertArgs>(args: Prisma.SelectSubset<T, AssetDepreciationRunUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetDepreciationRunClient<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetDepreciationRunCountArgs>(args?: Prisma.Subset<T, AssetDepreciationRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetDepreciationRunCountAggregateOutputType> : number>;
    aggregate<T extends AssetDepreciationRunAggregateArgs>(args: Prisma.Subset<T, AssetDepreciationRunAggregateArgs>): Prisma.PrismaPromise<GetAssetDepreciationRunAggregateType<T>>;
    groupBy<T extends AssetDepreciationRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetDepreciationRunGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetDepreciationRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetDepreciationRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetDepreciationRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetDepreciationRunFieldRefs;
}
export interface Prisma__AssetDepreciationRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assetRegisterEntry<T extends Prisma.AssetRegisterEntryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRegisterEntryDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetDepreciationRunFieldRefs {
    readonly id: Prisma.FieldRef<"AssetDepreciationRun", 'String'>;
    readonly assetRegisterEntryId: Prisma.FieldRef<"AssetDepreciationRun", 'String'>;
    readonly periodMonth: Prisma.FieldRef<"AssetDepreciationRun", 'Int'>;
    readonly periodYear: Prisma.FieldRef<"AssetDepreciationRun", 'Int'>;
    readonly depreciationAmountKobo: Prisma.FieldRef<"AssetDepreciationRun", 'BigInt'>;
    readonly journalEntryId: Prisma.FieldRef<"AssetDepreciationRun", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetDepreciationRun", 'DateTime'>;
}
export type AssetDepreciationRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
};
export type AssetDepreciationRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
};
export type AssetDepreciationRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithRelationInput | Prisma.AssetDepreciationRunOrderByWithRelationInput[];
    cursor?: Prisma.AssetDepreciationRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetDepreciationRunScalarFieldEnum | Prisma.AssetDepreciationRunScalarFieldEnum[];
};
export type AssetDepreciationRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithRelationInput | Prisma.AssetDepreciationRunOrderByWithRelationInput[];
    cursor?: Prisma.AssetDepreciationRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetDepreciationRunScalarFieldEnum | Prisma.AssetDepreciationRunScalarFieldEnum[];
};
export type AssetDepreciationRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithRelationInput | Prisma.AssetDepreciationRunOrderByWithRelationInput[];
    cursor?: Prisma.AssetDepreciationRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetDepreciationRunScalarFieldEnum | Prisma.AssetDepreciationRunScalarFieldEnum[];
};
export type AssetDepreciationRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetDepreciationRunCreateInput, Prisma.AssetDepreciationRunUncheckedCreateInput>;
};
export type AssetDepreciationRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetDepreciationRunCreateManyInput | Prisma.AssetDepreciationRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetDepreciationRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    data: Prisma.AssetDepreciationRunCreateManyInput | Prisma.AssetDepreciationRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetDepreciationRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetDepreciationRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetDepreciationRunUpdateInput, Prisma.AssetDepreciationRunUncheckedUpdateInput>;
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
};
export type AssetDepreciationRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetDepreciationRunUpdateManyMutationInput, Prisma.AssetDepreciationRunUncheckedUpdateManyInput>;
    where?: Prisma.AssetDepreciationRunWhereInput;
    limit?: number;
};
export type AssetDepreciationRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetDepreciationRunUpdateManyMutationInput, Prisma.AssetDepreciationRunUncheckedUpdateManyInput>;
    where?: Prisma.AssetDepreciationRunWhereInput;
    limit?: number;
    include?: Prisma.AssetDepreciationRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetDepreciationRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetDepreciationRunCreateInput, Prisma.AssetDepreciationRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetDepreciationRunUpdateInput, Prisma.AssetDepreciationRunUncheckedUpdateInput>;
};
export type AssetDepreciationRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where: Prisma.AssetDepreciationRunWhereUniqueInput;
};
export type AssetDepreciationRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetDepreciationRunWhereInput;
    limit?: number;
};
export type AssetDepreciationRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
};
