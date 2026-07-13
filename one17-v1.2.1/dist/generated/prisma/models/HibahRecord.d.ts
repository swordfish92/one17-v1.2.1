import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HibahRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$HibahRecordPayload>;
export type AggregateHibahRecord = {
    _count: HibahRecordCountAggregateOutputType | null;
    _avg: HibahRecordAvgAggregateOutputType | null;
    _sum: HibahRecordSumAggregateOutputType | null;
    _min: HibahRecordMinAggregateOutputType | null;
    _max: HibahRecordMaxAggregateOutputType | null;
};
export type HibahRecordAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type HibahRecordSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type HibahRecordMinAggregateOutputType = {
    id: string | null;
    distributionId: string | null;
    productAccountId: string | null;
    ledgerEntityCode: string | null;
    amountKobo: bigint | null;
    isLossPeriod: boolean | null;
    reason: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type HibahRecordMaxAggregateOutputType = {
    id: string | null;
    distributionId: string | null;
    productAccountId: string | null;
    ledgerEntityCode: string | null;
    amountKobo: bigint | null;
    isLossPeriod: boolean | null;
    reason: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type HibahRecordCountAggregateOutputType = {
    id: number;
    distributionId: number;
    productAccountId: number;
    ledgerEntityCode: number;
    amountKobo: number;
    isLossPeriod: number;
    reason: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type HibahRecordAvgAggregateInputType = {
    amountKobo?: true;
};
export type HibahRecordSumAggregateInputType = {
    amountKobo?: true;
};
export type HibahRecordMinAggregateInputType = {
    id?: true;
    distributionId?: true;
    productAccountId?: true;
    ledgerEntityCode?: true;
    amountKobo?: true;
    isLossPeriod?: true;
    reason?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type HibahRecordMaxAggregateInputType = {
    id?: true;
    distributionId?: true;
    productAccountId?: true;
    ledgerEntityCode?: true;
    amountKobo?: true;
    isLossPeriod?: true;
    reason?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type HibahRecordCountAggregateInputType = {
    id?: true;
    distributionId?: true;
    productAccountId?: true;
    ledgerEntityCode?: true;
    amountKobo?: true;
    isLossPeriod?: true;
    reason?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type HibahRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HibahRecordWhereInput;
    orderBy?: Prisma.HibahRecordOrderByWithRelationInput | Prisma.HibahRecordOrderByWithRelationInput[];
    cursor?: Prisma.HibahRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HibahRecordCountAggregateInputType;
    _avg?: HibahRecordAvgAggregateInputType;
    _sum?: HibahRecordSumAggregateInputType;
    _min?: HibahRecordMinAggregateInputType;
    _max?: HibahRecordMaxAggregateInputType;
};
export type GetHibahRecordAggregateType<T extends HibahRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateHibahRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHibahRecord[P]> : Prisma.GetScalarType<T[P], AggregateHibahRecord[P]>;
};
export type HibahRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HibahRecordWhereInput;
    orderBy?: Prisma.HibahRecordOrderByWithAggregationInput | Prisma.HibahRecordOrderByWithAggregationInput[];
    by: Prisma.HibahRecordScalarFieldEnum[] | Prisma.HibahRecordScalarFieldEnum;
    having?: Prisma.HibahRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HibahRecordCountAggregateInputType | true;
    _avg?: HibahRecordAvgAggregateInputType;
    _sum?: HibahRecordSumAggregateInputType;
    _min?: HibahRecordMinAggregateInputType;
    _max?: HibahRecordMaxAggregateInputType;
};
export type HibahRecordGroupByOutputType = {
    id: string;
    distributionId: string | null;
    productAccountId: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint;
    isLossPeriod: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt: Date;
    _count: HibahRecordCountAggregateOutputType | null;
    _avg: HibahRecordAvgAggregateOutputType | null;
    _sum: HibahRecordSumAggregateOutputType | null;
    _min: HibahRecordMinAggregateOutputType | null;
    _max: HibahRecordMaxAggregateOutputType | null;
};
export type GetHibahRecordGroupByPayload<T extends HibahRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HibahRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HibahRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HibahRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HibahRecordGroupByOutputType[P]>;
}>>;
export type HibahRecordWhereInput = {
    AND?: Prisma.HibahRecordWhereInput | Prisma.HibahRecordWhereInput[];
    OR?: Prisma.HibahRecordWhereInput[];
    NOT?: Prisma.HibahRecordWhereInput | Prisma.HibahRecordWhereInput[];
    id?: Prisma.UuidFilter<"HibahRecord"> | string;
    distributionId?: Prisma.UuidNullableFilter<"HibahRecord"> | string | null;
    productAccountId?: Prisma.StringNullableFilter<"HibahRecord"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"HibahRecord"> | string;
    amountKobo?: Prisma.BigIntFilter<"HibahRecord"> | bigint | number;
    isLossPeriod?: Prisma.BoolFilter<"HibahRecord"> | boolean;
    reason?: Prisma.StringFilter<"HibahRecord"> | string;
    approvedByUserId?: Prisma.UuidFilter<"HibahRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"HibahRecord"> | Date | string;
    distribution?: Prisma.XOR<Prisma.DistributionNullableScalarRelationFilter, Prisma.DistributionWhereInput> | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type HibahRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    distributionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    isLossPeriod?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    distribution?: Prisma.DistributionOrderByWithRelationInput;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type HibahRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HibahRecordWhereInput | Prisma.HibahRecordWhereInput[];
    OR?: Prisma.HibahRecordWhereInput[];
    NOT?: Prisma.HibahRecordWhereInput | Prisma.HibahRecordWhereInput[];
    distributionId?: Prisma.UuidNullableFilter<"HibahRecord"> | string | null;
    productAccountId?: Prisma.StringNullableFilter<"HibahRecord"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"HibahRecord"> | string;
    amountKobo?: Prisma.BigIntFilter<"HibahRecord"> | bigint | number;
    isLossPeriod?: Prisma.BoolFilter<"HibahRecord"> | boolean;
    reason?: Prisma.StringFilter<"HibahRecord"> | string;
    approvedByUserId?: Prisma.UuidFilter<"HibahRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"HibahRecord"> | Date | string;
    distribution?: Prisma.XOR<Prisma.DistributionNullableScalarRelationFilter, Prisma.DistributionWhereInput> | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type HibahRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    distributionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    isLossPeriod?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.HibahRecordCountOrderByAggregateInput;
    _avg?: Prisma.HibahRecordAvgOrderByAggregateInput;
    _max?: Prisma.HibahRecordMaxOrderByAggregateInput;
    _min?: Prisma.HibahRecordMinOrderByAggregateInput;
    _sum?: Prisma.HibahRecordSumOrderByAggregateInput;
};
export type HibahRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.HibahRecordScalarWhereWithAggregatesInput | Prisma.HibahRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.HibahRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HibahRecordScalarWhereWithAggregatesInput | Prisma.HibahRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"HibahRecord"> | string;
    distributionId?: Prisma.UuidNullableWithAggregatesFilter<"HibahRecord"> | string | null;
    productAccountId?: Prisma.StringNullableWithAggregatesFilter<"HibahRecord"> | string | null;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"HibahRecord"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"HibahRecord"> | bigint | number;
    isLossPeriod?: Prisma.BoolWithAggregatesFilter<"HibahRecord"> | boolean;
    reason?: Prisma.StringWithAggregatesFilter<"HibahRecord"> | string;
    approvedByUserId?: Prisma.UuidWithAggregatesFilter<"HibahRecord"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HibahRecord"> | Date | string;
};
export type HibahRecordCreateInput = {
    id?: string;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
    distribution?: Prisma.DistributionCreateNestedOneWithoutHibahRecordsInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHibahRecordsInput;
    approvedBy: Prisma.AppUserCreateNestedOneWithoutHibahRecordsApprovedInput;
};
export type HibahRecordUncheckedCreateInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distribution?: Prisma.DistributionUpdateOneWithoutHibahRecordsNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHibahRecordsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneRequiredWithoutHibahRecordsApprovedNestedInput;
};
export type HibahRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordCreateManyInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordListRelationFilter = {
    every?: Prisma.HibahRecordWhereInput;
    some?: Prisma.HibahRecordWhereInput;
    none?: Prisma.HibahRecordWhereInput;
};
export type HibahRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HibahRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    distributionId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    isLossPeriod?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HibahRecordAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type HibahRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    distributionId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    isLossPeriod?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HibahRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    distributionId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    isLossPeriod?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HibahRecordSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type HibahRecordCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput> | Prisma.HibahRecordCreateWithoutApprovedByInput[] | Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput | Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.HibahRecordCreateManyApprovedByInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput> | Prisma.HibahRecordCreateWithoutApprovedByInput[] | Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput | Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.HibahRecordCreateManyApprovedByInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput> | Prisma.HibahRecordCreateWithoutApprovedByInput[] | Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput | Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.HibahRecordCreateManyApprovedByInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutApprovedByInput | Prisma.HibahRecordUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput> | Prisma.HibahRecordCreateWithoutApprovedByInput[] | Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput | Prisma.HibahRecordCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.HibahRecordCreateManyApprovedByInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutApprovedByInput | Prisma.HibahRecordUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.HibahRecordCreateWithoutLedgerEntityInput[] | Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.HibahRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.HibahRecordCreateWithoutLedgerEntityInput[] | Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.HibahRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.HibahRecordCreateWithoutLedgerEntityInput[] | Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.HibahRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.HibahRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.HibahRecordCreateWithoutLedgerEntityInput[] | Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.HibahRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.HibahRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.HibahRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordCreateNestedManyWithoutDistributionInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput> | Prisma.HibahRecordCreateWithoutDistributionInput[] | Prisma.HibahRecordUncheckedCreateWithoutDistributionInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutDistributionInput | Prisma.HibahRecordCreateOrConnectWithoutDistributionInput[];
    createMany?: Prisma.HibahRecordCreateManyDistributionInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUncheckedCreateNestedManyWithoutDistributionInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput> | Prisma.HibahRecordCreateWithoutDistributionInput[] | Prisma.HibahRecordUncheckedCreateWithoutDistributionInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutDistributionInput | Prisma.HibahRecordCreateOrConnectWithoutDistributionInput[];
    createMany?: Prisma.HibahRecordCreateManyDistributionInputEnvelope;
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
};
export type HibahRecordUpdateManyWithoutDistributionNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput> | Prisma.HibahRecordCreateWithoutDistributionInput[] | Prisma.HibahRecordUncheckedCreateWithoutDistributionInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutDistributionInput | Prisma.HibahRecordCreateOrConnectWithoutDistributionInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutDistributionInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutDistributionInput[];
    createMany?: Prisma.HibahRecordCreateManyDistributionInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutDistributionInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutDistributionInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutDistributionInput | Prisma.HibahRecordUpdateManyWithWhereWithoutDistributionInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordUncheckedUpdateManyWithoutDistributionNestedInput = {
    create?: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput> | Prisma.HibahRecordCreateWithoutDistributionInput[] | Prisma.HibahRecordUncheckedCreateWithoutDistributionInput[];
    connectOrCreate?: Prisma.HibahRecordCreateOrConnectWithoutDistributionInput | Prisma.HibahRecordCreateOrConnectWithoutDistributionInput[];
    upsert?: Prisma.HibahRecordUpsertWithWhereUniqueWithoutDistributionInput | Prisma.HibahRecordUpsertWithWhereUniqueWithoutDistributionInput[];
    createMany?: Prisma.HibahRecordCreateManyDistributionInputEnvelope;
    set?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    disconnect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    delete?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    connect?: Prisma.HibahRecordWhereUniqueInput | Prisma.HibahRecordWhereUniqueInput[];
    update?: Prisma.HibahRecordUpdateWithWhereUniqueWithoutDistributionInput | Prisma.HibahRecordUpdateWithWhereUniqueWithoutDistributionInput[];
    updateMany?: Prisma.HibahRecordUpdateManyWithWhereWithoutDistributionInput | Prisma.HibahRecordUpdateManyWithWhereWithoutDistributionInput[];
    deleteMany?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
};
export type HibahRecordCreateWithoutApprovedByInput = {
    id?: string;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
    distribution?: Prisma.DistributionCreateNestedOneWithoutHibahRecordsInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHibahRecordsInput;
};
export type HibahRecordUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
};
export type HibahRecordCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput>;
};
export type HibahRecordCreateManyApprovedByInputEnvelope = {
    data: Prisma.HibahRecordCreateManyApprovedByInput | Prisma.HibahRecordCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type HibahRecordUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.HibahRecordUpdateWithoutApprovedByInput, Prisma.HibahRecordUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutApprovedByInput, Prisma.HibahRecordUncheckedCreateWithoutApprovedByInput>;
};
export type HibahRecordUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateWithoutApprovedByInput, Prisma.HibahRecordUncheckedUpdateWithoutApprovedByInput>;
};
export type HibahRecordUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.HibahRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateManyMutationInput, Prisma.HibahRecordUncheckedUpdateManyWithoutApprovedByInput>;
};
export type HibahRecordScalarWhereInput = {
    AND?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
    OR?: Prisma.HibahRecordScalarWhereInput[];
    NOT?: Prisma.HibahRecordScalarWhereInput | Prisma.HibahRecordScalarWhereInput[];
    id?: Prisma.UuidFilter<"HibahRecord"> | string;
    distributionId?: Prisma.UuidNullableFilter<"HibahRecord"> | string | null;
    productAccountId?: Prisma.StringNullableFilter<"HibahRecord"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"HibahRecord"> | string;
    amountKobo?: Prisma.BigIntFilter<"HibahRecord"> | bigint | number;
    isLossPeriod?: Prisma.BoolFilter<"HibahRecord"> | boolean;
    reason?: Prisma.StringFilter<"HibahRecord"> | string;
    approvedByUserId?: Prisma.UuidFilter<"HibahRecord"> | string;
    createdAt?: Prisma.DateTimeFilter<"HibahRecord"> | Date | string;
};
export type HibahRecordCreateWithoutLedgerEntityInput = {
    id?: string;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
    distribution?: Prisma.DistributionCreateNestedOneWithoutHibahRecordsInput;
    approvedBy: Prisma.AppUserCreateNestedOneWithoutHibahRecordsApprovedInput;
};
export type HibahRecordUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type HibahRecordCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.HibahRecordCreateManyLedgerEntityInput | Prisma.HibahRecordCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type HibahRecordUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.HibahRecordUpdateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type HibahRecordUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateWithoutLedgerEntityInput, Prisma.HibahRecordUncheckedUpdateWithoutLedgerEntityInput>;
};
export type HibahRecordUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.HibahRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateManyMutationInput, Prisma.HibahRecordUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type HibahRecordCreateWithoutDistributionInput = {
    id?: string;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHibahRecordsInput;
    approvedBy: Prisma.AppUserCreateNestedOneWithoutHibahRecordsApprovedInput;
};
export type HibahRecordUncheckedCreateWithoutDistributionInput = {
    id?: string;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordCreateOrConnectWithoutDistributionInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput>;
};
export type HibahRecordCreateManyDistributionInputEnvelope = {
    data: Prisma.HibahRecordCreateManyDistributionInput | Prisma.HibahRecordCreateManyDistributionInput[];
    skipDuplicates?: boolean;
};
export type HibahRecordUpsertWithWhereUniqueWithoutDistributionInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.HibahRecordUpdateWithoutDistributionInput, Prisma.HibahRecordUncheckedUpdateWithoutDistributionInput>;
    create: Prisma.XOR<Prisma.HibahRecordCreateWithoutDistributionInput, Prisma.HibahRecordUncheckedCreateWithoutDistributionInput>;
};
export type HibahRecordUpdateWithWhereUniqueWithoutDistributionInput = {
    where: Prisma.HibahRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateWithoutDistributionInput, Prisma.HibahRecordUncheckedUpdateWithoutDistributionInput>;
};
export type HibahRecordUpdateManyWithWhereWithoutDistributionInput = {
    where: Prisma.HibahRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.HibahRecordUpdateManyMutationInput, Prisma.HibahRecordUncheckedUpdateManyWithoutDistributionInput>;
};
export type HibahRecordCreateManyApprovedByInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    createdAt?: Date | string;
};
export type HibahRecordUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distribution?: Prisma.DistributionUpdateOneWithoutHibahRecordsNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHibahRecordsNestedInput;
};
export type HibahRecordUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordCreateManyLedgerEntityInput = {
    id?: string;
    distributionId?: string | null;
    productAccountId?: string | null;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distribution?: Prisma.DistributionUpdateOneWithoutHibahRecordsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneRequiredWithoutHibahRecordsApprovedNestedInput;
};
export type HibahRecordUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distributionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordCreateManyDistributionInput = {
    id?: string;
    productAccountId?: string | null;
    ledgerEntityCode: string;
    amountKobo: bigint | number;
    isLossPeriod?: boolean;
    reason: string;
    approvedByUserId: string;
    createdAt?: Date | string;
};
export type HibahRecordUpdateWithoutDistributionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHibahRecordsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneRequiredWithoutHibahRecordsApprovedNestedInput;
};
export type HibahRecordUncheckedUpdateWithoutDistributionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordUncheckedUpdateManyWithoutDistributionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isLossPeriod?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HibahRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    distributionId?: boolean;
    productAccountId?: boolean;
    ledgerEntityCode?: boolean;
    amountKobo?: boolean;
    isLossPeriod?: boolean;
    reason?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hibahRecord"]>;
export type HibahRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    distributionId?: boolean;
    productAccountId?: boolean;
    ledgerEntityCode?: boolean;
    amountKobo?: boolean;
    isLossPeriod?: boolean;
    reason?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hibahRecord"]>;
export type HibahRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    distributionId?: boolean;
    productAccountId?: boolean;
    ledgerEntityCode?: boolean;
    amountKobo?: boolean;
    isLossPeriod?: boolean;
    reason?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hibahRecord"]>;
export type HibahRecordSelectScalar = {
    id?: boolean;
    distributionId?: boolean;
    productAccountId?: boolean;
    ledgerEntityCode?: boolean;
    amountKobo?: boolean;
    isLossPeriod?: boolean;
    reason?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type HibahRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "distributionId" | "productAccountId" | "ledgerEntityCode" | "amountKobo" | "isLossPeriod" | "reason" | "approvedByUserId" | "createdAt", ExtArgs["result"]["hibahRecord"]>;
export type HibahRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type HibahRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type HibahRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    distribution?: boolean | Prisma.HibahRecord$distributionArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $HibahRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HibahRecord";
    objects: {
        distribution: Prisma.$DistributionPayload<ExtArgs> | null;
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        distributionId: string | null;
        productAccountId: string | null;
        ledgerEntityCode: string;
        amountKobo: bigint;
        isLossPeriod: boolean;
        reason: string;
        approvedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["hibahRecord"]>;
    composites: {};
};
export type HibahRecordGetPayload<S extends boolean | null | undefined | HibahRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload, S>;
export type HibahRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HibahRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HibahRecordCountAggregateInputType | true;
};
export interface HibahRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HibahRecord'];
        meta: {
            name: 'HibahRecord';
        };
    };
    findUnique<T extends HibahRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, HibahRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HibahRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HibahRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HibahRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, HibahRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HibahRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HibahRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HibahRecordFindManyArgs>(args?: Prisma.SelectSubset<T, HibahRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HibahRecordCreateArgs>(args: Prisma.SelectSubset<T, HibahRecordCreateArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HibahRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, HibahRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HibahRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HibahRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HibahRecordDeleteArgs>(args: Prisma.SelectSubset<T, HibahRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HibahRecordUpdateArgs>(args: Prisma.SelectSubset<T, HibahRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HibahRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, HibahRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HibahRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, HibahRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HibahRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HibahRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HibahRecordUpsertArgs>(args: Prisma.SelectSubset<T, HibahRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__HibahRecordClient<runtime.Types.Result.GetResult<Prisma.$HibahRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HibahRecordCountArgs>(args?: Prisma.Subset<T, HibahRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HibahRecordCountAggregateOutputType> : number>;
    aggregate<T extends HibahRecordAggregateArgs>(args: Prisma.Subset<T, HibahRecordAggregateArgs>): Prisma.PrismaPromise<GetHibahRecordAggregateType<T>>;
    groupBy<T extends HibahRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HibahRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: HibahRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HibahRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHibahRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HibahRecordFieldRefs;
}
export interface Prisma__HibahRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    distribution<T extends Prisma.HibahRecord$distributionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HibahRecord$distributionArgs<ExtArgs>>): Prisma.Prisma__DistributionClient<runtime.Types.Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HibahRecordFieldRefs {
    readonly id: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly distributionId: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly productAccountId: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"HibahRecord", 'BigInt'>;
    readonly isLossPeriod: Prisma.FieldRef<"HibahRecord", 'Boolean'>;
    readonly reason: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"HibahRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HibahRecord", 'DateTime'>;
}
export type HibahRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where: Prisma.HibahRecordWhereUniqueInput;
};
export type HibahRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where: Prisma.HibahRecordWhereUniqueInput;
};
export type HibahRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where?: Prisma.HibahRecordWhereInput;
    orderBy?: Prisma.HibahRecordOrderByWithRelationInput | Prisma.HibahRecordOrderByWithRelationInput[];
    cursor?: Prisma.HibahRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HibahRecordScalarFieldEnum | Prisma.HibahRecordScalarFieldEnum[];
};
export type HibahRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where?: Prisma.HibahRecordWhereInput;
    orderBy?: Prisma.HibahRecordOrderByWithRelationInput | Prisma.HibahRecordOrderByWithRelationInput[];
    cursor?: Prisma.HibahRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HibahRecordScalarFieldEnum | Prisma.HibahRecordScalarFieldEnum[];
};
export type HibahRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where?: Prisma.HibahRecordWhereInput;
    orderBy?: Prisma.HibahRecordOrderByWithRelationInput | Prisma.HibahRecordOrderByWithRelationInput[];
    cursor?: Prisma.HibahRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HibahRecordScalarFieldEnum | Prisma.HibahRecordScalarFieldEnum[];
};
export type HibahRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HibahRecordCreateInput, Prisma.HibahRecordUncheckedCreateInput>;
};
export type HibahRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HibahRecordCreateManyInput | Prisma.HibahRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HibahRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    data: Prisma.HibahRecordCreateManyInput | Prisma.HibahRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HibahRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HibahRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HibahRecordUpdateInput, Prisma.HibahRecordUncheckedUpdateInput>;
    where: Prisma.HibahRecordWhereUniqueInput;
};
export type HibahRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HibahRecordUpdateManyMutationInput, Prisma.HibahRecordUncheckedUpdateManyInput>;
    where?: Prisma.HibahRecordWhereInput;
    limit?: number;
};
export type HibahRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HibahRecordUpdateManyMutationInput, Prisma.HibahRecordUncheckedUpdateManyInput>;
    where?: Prisma.HibahRecordWhereInput;
    limit?: number;
    include?: Prisma.HibahRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HibahRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where: Prisma.HibahRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.HibahRecordCreateInput, Prisma.HibahRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HibahRecordUpdateInput, Prisma.HibahRecordUncheckedUpdateInput>;
};
export type HibahRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
    where: Prisma.HibahRecordWhereUniqueInput;
};
export type HibahRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HibahRecordWhereInput;
    limit?: number;
};
export type HibahRecord$distributionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistributionSelect<ExtArgs> | null;
    omit?: Prisma.DistributionOmit<ExtArgs> | null;
    include?: Prisma.DistributionInclude<ExtArgs> | null;
    where?: Prisma.DistributionWhereInput;
};
export type HibahRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HibahRecordSelect<ExtArgs> | null;
    omit?: Prisma.HibahRecordOmit<ExtArgs> | null;
    include?: Prisma.HibahRecordInclude<ExtArgs> | null;
};
