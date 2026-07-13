import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmTierMigrationLogModel = runtime.Types.Result.DefaultSelection<Prisma.$WmTierMigrationLogPayload>;
export type AggregateWmTierMigrationLog = {
    _count: WmTierMigrationLogCountAggregateOutputType | null;
    _avg: WmTierMigrationLogAvgAggregateOutputType | null;
    _sum: WmTierMigrationLogSumAggregateOutputType | null;
    _min: WmTierMigrationLogMinAggregateOutputType | null;
    _max: WmTierMigrationLogMaxAggregateOutputType | null;
};
export type WmTierMigrationLogAvgAggregateOutputType = {
    totalWealthKobo: number | null;
};
export type WmTierMigrationLogSumAggregateOutputType = {
    totalWealthKobo: bigint | null;
};
export type WmTierMigrationLogMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    fromTier: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier | null;
    totalWealthKobo: bigint | null;
    migratedAt: Date | null;
};
export type WmTierMigrationLogMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    fromTier: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier | null;
    totalWealthKobo: bigint | null;
    migratedAt: Date | null;
};
export type WmTierMigrationLogCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    fromTier: number;
    toTier: number;
    totalWealthKobo: number;
    migratedAt: number;
    _all: number;
};
export type WmTierMigrationLogAvgAggregateInputType = {
    totalWealthKobo?: true;
};
export type WmTierMigrationLogSumAggregateInputType = {
    totalWealthKobo?: true;
};
export type WmTierMigrationLogMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    fromTier?: true;
    toTier?: true;
    totalWealthKobo?: true;
    migratedAt?: true;
};
export type WmTierMigrationLogMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    fromTier?: true;
    toTier?: true;
    totalWealthKobo?: true;
    migratedAt?: true;
};
export type WmTierMigrationLogCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    fromTier?: true;
    toTier?: true;
    totalWealthKobo?: true;
    migratedAt?: true;
    _all?: true;
};
export type WmTierMigrationLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmTierMigrationLogWhereInput;
    orderBy?: Prisma.WmTierMigrationLogOrderByWithRelationInput | Prisma.WmTierMigrationLogOrderByWithRelationInput[];
    cursor?: Prisma.WmTierMigrationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmTierMigrationLogCountAggregateInputType;
    _avg?: WmTierMigrationLogAvgAggregateInputType;
    _sum?: WmTierMigrationLogSumAggregateInputType;
    _min?: WmTierMigrationLogMinAggregateInputType;
    _max?: WmTierMigrationLogMaxAggregateInputType;
};
export type GetWmTierMigrationLogAggregateType<T extends WmTierMigrationLogAggregateArgs> = {
    [P in keyof T & keyof AggregateWmTierMigrationLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmTierMigrationLog[P]> : Prisma.GetScalarType<T[P], AggregateWmTierMigrationLog[P]>;
};
export type WmTierMigrationLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmTierMigrationLogWhereInput;
    orderBy?: Prisma.WmTierMigrationLogOrderByWithAggregationInput | Prisma.WmTierMigrationLogOrderByWithAggregationInput[];
    by: Prisma.WmTierMigrationLogScalarFieldEnum[] | Prisma.WmTierMigrationLogScalarFieldEnum;
    having?: Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmTierMigrationLogCountAggregateInputType | true;
    _avg?: WmTierMigrationLogAvgAggregateInputType;
    _sum?: WmTierMigrationLogSumAggregateInputType;
    _min?: WmTierMigrationLogMinAggregateInputType;
    _max?: WmTierMigrationLogMaxAggregateInputType;
};
export type WmTierMigrationLogGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    fromTier: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint;
    migratedAt: Date;
    _count: WmTierMigrationLogCountAggregateOutputType | null;
    _avg: WmTierMigrationLogAvgAggregateOutputType | null;
    _sum: WmTierMigrationLogSumAggregateOutputType | null;
    _min: WmTierMigrationLogMinAggregateOutputType | null;
    _max: WmTierMigrationLogMaxAggregateOutputType | null;
};
export type GetWmTierMigrationLogGroupByPayload<T extends WmTierMigrationLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmTierMigrationLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmTierMigrationLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmTierMigrationLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmTierMigrationLogGroupByOutputType[P]>;
}>>;
export type WmTierMigrationLogWhereInput = {
    AND?: Prisma.WmTierMigrationLogWhereInput | Prisma.WmTierMigrationLogWhereInput[];
    OR?: Prisma.WmTierMigrationLogWhereInput[];
    NOT?: Prisma.WmTierMigrationLogWhereInput | Prisma.WmTierMigrationLogWhereInput[];
    id?: Prisma.UuidFilter<"WmTierMigrationLog"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmTierMigrationLog"> | string;
    fromTier?: Prisma.EnumWmClientTierNullableFilter<"WmTierMigrationLog"> | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFilter<"WmTierMigrationLog"> | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFilter<"WmTierMigrationLog"> | bigint | number;
    migratedAt?: Prisma.DateTimeFilter<"WmTierMigrationLog"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
};
export type WmTierMigrationLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    fromTier?: Prisma.SortOrderInput | Prisma.SortOrder;
    toTier?: Prisma.SortOrder;
    totalWealthKobo?: Prisma.SortOrder;
    migratedAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
};
export type WmTierMigrationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmTierMigrationLogWhereInput | Prisma.WmTierMigrationLogWhereInput[];
    OR?: Prisma.WmTierMigrationLogWhereInput[];
    NOT?: Prisma.WmTierMigrationLogWhereInput | Prisma.WmTierMigrationLogWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmTierMigrationLog"> | string;
    fromTier?: Prisma.EnumWmClientTierNullableFilter<"WmTierMigrationLog"> | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFilter<"WmTierMigrationLog"> | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFilter<"WmTierMigrationLog"> | bigint | number;
    migratedAt?: Prisma.DateTimeFilter<"WmTierMigrationLog"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
}, "id">;
export type WmTierMigrationLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    fromTier?: Prisma.SortOrderInput | Prisma.SortOrder;
    toTier?: Prisma.SortOrder;
    totalWealthKobo?: Prisma.SortOrder;
    migratedAt?: Prisma.SortOrder;
    _count?: Prisma.WmTierMigrationLogCountOrderByAggregateInput;
    _avg?: Prisma.WmTierMigrationLogAvgOrderByAggregateInput;
    _max?: Prisma.WmTierMigrationLogMaxOrderByAggregateInput;
    _min?: Prisma.WmTierMigrationLogMinOrderByAggregateInput;
    _sum?: Prisma.WmTierMigrationLogSumOrderByAggregateInput;
};
export type WmTierMigrationLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput | Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput | Prisma.WmTierMigrationLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmTierMigrationLog"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmTierMigrationLog"> | string;
    fromTier?: Prisma.EnumWmClientTierNullableWithAggregatesFilter<"WmTierMigrationLog"> | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierWithAggregatesFilter<"WmTierMigrationLog"> | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntWithAggregatesFilter<"WmTierMigrationLog"> | bigint | number;
    migratedAt?: Prisma.DateTimeWithAggregatesFilter<"WmTierMigrationLog"> | Date | string;
};
export type WmTierMigrationLogCreateInput = {
    id?: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutTierMigrationsInput;
};
export type WmTierMigrationLogUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
};
export type WmTierMigrationLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutTierMigrationsNestedInput;
};
export type WmTierMigrationLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
};
export type WmTierMigrationLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogListRelationFilter = {
    every?: Prisma.WmTierMigrationLogWhereInput;
    some?: Prisma.WmTierMigrationLogWhereInput;
    none?: Prisma.WmTierMigrationLogWhereInput;
};
export type WmTierMigrationLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmTierMigrationLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    fromTier?: Prisma.SortOrder;
    toTier?: Prisma.SortOrder;
    totalWealthKobo?: Prisma.SortOrder;
    migratedAt?: Prisma.SortOrder;
};
export type WmTierMigrationLogAvgOrderByAggregateInput = {
    totalWealthKobo?: Prisma.SortOrder;
};
export type WmTierMigrationLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    fromTier?: Prisma.SortOrder;
    toTier?: Prisma.SortOrder;
    totalWealthKobo?: Prisma.SortOrder;
    migratedAt?: Prisma.SortOrder;
};
export type WmTierMigrationLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    fromTier?: Prisma.SortOrder;
    toTier?: Prisma.SortOrder;
    totalWealthKobo?: Prisma.SortOrder;
    migratedAt?: Prisma.SortOrder;
};
export type WmTierMigrationLogSumOrderByAggregateInput = {
    totalWealthKobo?: Prisma.SortOrder;
};
export type WmTierMigrationLogCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput[] | Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput | Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmTierMigrationLogCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
};
export type WmTierMigrationLogUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput[] | Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput | Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmTierMigrationLogCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
};
export type WmTierMigrationLogUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput[] | Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput | Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmTierMigrationLogUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmTierMigrationLogCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    disconnect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    delete?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    connect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    update?: Prisma.WmTierMigrationLogUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmTierMigrationLogUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmTierMigrationLogScalarWhereInput | Prisma.WmTierMigrationLogScalarWhereInput[];
};
export type WmTierMigrationLogUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput[] | Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput | Prisma.WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmTierMigrationLogUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmTierMigrationLogCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    disconnect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    delete?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    connect?: Prisma.WmTierMigrationLogWhereUniqueInput | Prisma.WmTierMigrationLogWhereUniqueInput[];
    update?: Prisma.WmTierMigrationLogUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmTierMigrationLogUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmTierMigrationLogUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmTierMigrationLogScalarWhereInput | Prisma.WmTierMigrationLogScalarWhereInput[];
};
export type NullableEnumWmClientTierFieldUpdateOperationsInput = {
    set?: $Enums.WmClientTier | null;
};
export type WmTierMigrationLogCreateWithoutWmClientProfileInput = {
    id?: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
};
export type WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
};
export type WmTierMigrationLogCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmTierMigrationLogCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmTierMigrationLogCreateManyWmClientProfileInput | Prisma.WmTierMigrationLogCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmTierMigrationLogUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmTierMigrationLogUpdateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmTierMigrationLogCreateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmTierMigrationLogUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmTierMigrationLogUpdateWithoutWmClientProfileInput, Prisma.WmTierMigrationLogUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmTierMigrationLogUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmTierMigrationLogScalarWhereInput;
    data: Prisma.XOR<Prisma.WmTierMigrationLogUpdateManyMutationInput, Prisma.WmTierMigrationLogUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmTierMigrationLogScalarWhereInput = {
    AND?: Prisma.WmTierMigrationLogScalarWhereInput | Prisma.WmTierMigrationLogScalarWhereInput[];
    OR?: Prisma.WmTierMigrationLogScalarWhereInput[];
    NOT?: Prisma.WmTierMigrationLogScalarWhereInput | Prisma.WmTierMigrationLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmTierMigrationLog"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmTierMigrationLog"> | string;
    fromTier?: Prisma.EnumWmClientTierNullableFilter<"WmTierMigrationLog"> | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFilter<"WmTierMigrationLog"> | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFilter<"WmTierMigrationLog"> | bigint | number;
    migratedAt?: Prisma.DateTimeFilter<"WmTierMigrationLog"> | Date | string;
};
export type WmTierMigrationLogCreateManyWmClientProfileInput = {
    id?: string;
    fromTier?: $Enums.WmClientTier | null;
    toTier: $Enums.WmClientTier;
    totalWealthKobo: bigint | number;
    migratedAt?: Date | string;
};
export type WmTierMigrationLogUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromTier?: Prisma.NullableEnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier | null;
    toTier?: Prisma.EnumWmClientTierFieldUpdateOperationsInput | $Enums.WmClientTier;
    totalWealthKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    migratedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmTierMigrationLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    fromTier?: boolean;
    toTier?: boolean;
    totalWealthKobo?: boolean;
    migratedAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmTierMigrationLog"]>;
export type WmTierMigrationLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    fromTier?: boolean;
    toTier?: boolean;
    totalWealthKobo?: boolean;
    migratedAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmTierMigrationLog"]>;
export type WmTierMigrationLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    fromTier?: boolean;
    toTier?: boolean;
    totalWealthKobo?: boolean;
    migratedAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmTierMigrationLog"]>;
export type WmTierMigrationLogSelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    fromTier?: boolean;
    toTier?: boolean;
    totalWealthKobo?: boolean;
    migratedAt?: boolean;
};
export type WmTierMigrationLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "fromTier" | "toTier" | "totalWealthKobo" | "migratedAt", ExtArgs["result"]["wmTierMigrationLog"]>;
export type WmTierMigrationLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmTierMigrationLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmTierMigrationLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type $WmTierMigrationLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmTierMigrationLog";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        fromTier: $Enums.WmClientTier | null;
        toTier: $Enums.WmClientTier;
        totalWealthKobo: bigint;
        migratedAt: Date;
    }, ExtArgs["result"]["wmTierMigrationLog"]>;
    composites: {};
};
export type WmTierMigrationLogGetPayload<S extends boolean | null | undefined | WmTierMigrationLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload, S>;
export type WmTierMigrationLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmTierMigrationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmTierMigrationLogCountAggregateInputType | true;
};
export interface WmTierMigrationLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmTierMigrationLog'];
        meta: {
            name: 'WmTierMigrationLog';
        };
    };
    findUnique<T extends WmTierMigrationLogFindUniqueArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmTierMigrationLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmTierMigrationLogFindFirstArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmTierMigrationLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmTierMigrationLogFindManyArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmTierMigrationLogCreateArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogCreateArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmTierMigrationLogCreateManyArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmTierMigrationLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmTierMigrationLogDeleteArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogDeleteArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmTierMigrationLogUpdateArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogUpdateArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmTierMigrationLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmTierMigrationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmTierMigrationLogUpdateManyArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmTierMigrationLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmTierMigrationLogUpsertArgs>(args: Prisma.SelectSubset<T, WmTierMigrationLogUpsertArgs<ExtArgs>>): Prisma.Prisma__WmTierMigrationLogClient<runtime.Types.Result.GetResult<Prisma.$WmTierMigrationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmTierMigrationLogCountArgs>(args?: Prisma.Subset<T, WmTierMigrationLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmTierMigrationLogCountAggregateOutputType> : number>;
    aggregate<T extends WmTierMigrationLogAggregateArgs>(args: Prisma.Subset<T, WmTierMigrationLogAggregateArgs>): Prisma.PrismaPromise<GetWmTierMigrationLogAggregateType<T>>;
    groupBy<T extends WmTierMigrationLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmTierMigrationLogGroupByArgs['orderBy'];
    } : {
        orderBy?: WmTierMigrationLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmTierMigrationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmTierMigrationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmTierMigrationLogFieldRefs;
}
export interface Prisma__WmTierMigrationLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmTierMigrationLogFieldRefs {
    readonly id: Prisma.FieldRef<"WmTierMigrationLog", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmTierMigrationLog", 'String'>;
    readonly fromTier: Prisma.FieldRef<"WmTierMigrationLog", 'WmClientTier'>;
    readonly toTier: Prisma.FieldRef<"WmTierMigrationLog", 'WmClientTier'>;
    readonly totalWealthKobo: Prisma.FieldRef<"WmTierMigrationLog", 'BigInt'>;
    readonly migratedAt: Prisma.FieldRef<"WmTierMigrationLog", 'DateTime'>;
}
export type WmTierMigrationLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
};
export type WmTierMigrationLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
};
export type WmTierMigrationLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where?: Prisma.WmTierMigrationLogWhereInput;
    orderBy?: Prisma.WmTierMigrationLogOrderByWithRelationInput | Prisma.WmTierMigrationLogOrderByWithRelationInput[];
    cursor?: Prisma.WmTierMigrationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmTierMigrationLogScalarFieldEnum | Prisma.WmTierMigrationLogScalarFieldEnum[];
};
export type WmTierMigrationLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where?: Prisma.WmTierMigrationLogWhereInput;
    orderBy?: Prisma.WmTierMigrationLogOrderByWithRelationInput | Prisma.WmTierMigrationLogOrderByWithRelationInput[];
    cursor?: Prisma.WmTierMigrationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmTierMigrationLogScalarFieldEnum | Prisma.WmTierMigrationLogScalarFieldEnum[];
};
export type WmTierMigrationLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where?: Prisma.WmTierMigrationLogWhereInput;
    orderBy?: Prisma.WmTierMigrationLogOrderByWithRelationInput | Prisma.WmTierMigrationLogOrderByWithRelationInput[];
    cursor?: Prisma.WmTierMigrationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmTierMigrationLogScalarFieldEnum | Prisma.WmTierMigrationLogScalarFieldEnum[];
};
export type WmTierMigrationLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmTierMigrationLogCreateInput, Prisma.WmTierMigrationLogUncheckedCreateInput>;
};
export type WmTierMigrationLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmTierMigrationLogCreateManyInput | Prisma.WmTierMigrationLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmTierMigrationLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    data: Prisma.WmTierMigrationLogCreateManyInput | Prisma.WmTierMigrationLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmTierMigrationLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmTierMigrationLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmTierMigrationLogUpdateInput, Prisma.WmTierMigrationLogUncheckedUpdateInput>;
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
};
export type WmTierMigrationLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmTierMigrationLogUpdateManyMutationInput, Prisma.WmTierMigrationLogUncheckedUpdateManyInput>;
    where?: Prisma.WmTierMigrationLogWhereInput;
    limit?: number;
};
export type WmTierMigrationLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmTierMigrationLogUpdateManyMutationInput, Prisma.WmTierMigrationLogUncheckedUpdateManyInput>;
    where?: Prisma.WmTierMigrationLogWhereInput;
    limit?: number;
    include?: Prisma.WmTierMigrationLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmTierMigrationLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmTierMigrationLogCreateInput, Prisma.WmTierMigrationLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmTierMigrationLogUpdateInput, Prisma.WmTierMigrationLogUncheckedUpdateInput>;
};
export type WmTierMigrationLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
    where: Prisma.WmTierMigrationLogWhereUniqueInput;
};
export type WmTierMigrationLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmTierMigrationLogWhereInput;
    limit?: number;
};
export type WmTierMigrationLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmTierMigrationLogSelect<ExtArgs> | null;
    omit?: Prisma.WmTierMigrationLogOmit<ExtArgs> | null;
    include?: Prisma.WmTierMigrationLogInclude<ExtArgs> | null;
};
