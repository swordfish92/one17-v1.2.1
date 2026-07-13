import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BureauPullLogModel = runtime.Types.Result.DefaultSelection<Prisma.$BureauPullLogPayload>;
export type AggregateBureauPullLog = {
    _count: BureauPullLogCountAggregateOutputType | null;
    _avg: BureauPullLogAvgAggregateOutputType | null;
    _sum: BureauPullLogSumAggregateOutputType | null;
    _min: BureauPullLogMinAggregateOutputType | null;
    _max: BureauPullLogMaxAggregateOutputType | null;
};
export type BureauPullLogAvgAggregateOutputType = {
    costKobo: number | null;
};
export type BureauPullLogSumAggregateOutputType = {
    costKobo: bigint | null;
};
export type BureauPullLogMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    providerId: string | null;
    pulledByUserId: string | null;
    costKobo: bigint | null;
    resultSummary: string | null;
    pulledAt: Date | null;
};
export type BureauPullLogMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    providerId: string | null;
    pulledByUserId: string | null;
    costKobo: bigint | null;
    resultSummary: string | null;
    pulledAt: Date | null;
};
export type BureauPullLogCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    providerId: number;
    pulledByUserId: number;
    costKobo: number;
    resultSummary: number;
    pulledAt: number;
    _all: number;
};
export type BureauPullLogAvgAggregateInputType = {
    costKobo?: true;
};
export type BureauPullLogSumAggregateInputType = {
    costKobo?: true;
};
export type BureauPullLogMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    providerId?: true;
    pulledByUserId?: true;
    costKobo?: true;
    resultSummary?: true;
    pulledAt?: true;
};
export type BureauPullLogMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    providerId?: true;
    pulledByUserId?: true;
    costKobo?: true;
    resultSummary?: true;
    pulledAt?: true;
};
export type BureauPullLogCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    providerId?: true;
    pulledByUserId?: true;
    costKobo?: true;
    resultSummary?: true;
    pulledAt?: true;
    _all?: true;
};
export type BureauPullLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithRelationInput | Prisma.BureauPullLogOrderByWithRelationInput[];
    cursor?: Prisma.BureauPullLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BureauPullLogCountAggregateInputType;
    _avg?: BureauPullLogAvgAggregateInputType;
    _sum?: BureauPullLogSumAggregateInputType;
    _min?: BureauPullLogMinAggregateInputType;
    _max?: BureauPullLogMaxAggregateInputType;
};
export type GetBureauPullLogAggregateType<T extends BureauPullLogAggregateArgs> = {
    [P in keyof T & keyof AggregateBureauPullLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBureauPullLog[P]> : Prisma.GetScalarType<T[P], AggregateBureauPullLog[P]>;
};
export type BureauPullLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithAggregationInput | Prisma.BureauPullLogOrderByWithAggregationInput[];
    by: Prisma.BureauPullLogScalarFieldEnum[] | Prisma.BureauPullLogScalarFieldEnum;
    having?: Prisma.BureauPullLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BureauPullLogCountAggregateInputType | true;
    _avg?: BureauPullLogAvgAggregateInputType;
    _sum?: BureauPullLogSumAggregateInputType;
    _min?: BureauPullLogMinAggregateInputType;
    _max?: BureauPullLogMaxAggregateInputType;
};
export type BureauPullLogGroupByOutputType = {
    id: string;
    counterpartyId: string;
    providerId: string;
    pulledByUserId: string;
    costKobo: bigint;
    resultSummary: string;
    pulledAt: Date;
    _count: BureauPullLogCountAggregateOutputType | null;
    _avg: BureauPullLogAvgAggregateOutputType | null;
    _sum: BureauPullLogSumAggregateOutputType | null;
    _min: BureauPullLogMinAggregateOutputType | null;
    _max: BureauPullLogMaxAggregateOutputType | null;
};
export type GetBureauPullLogGroupByPayload<T extends BureauPullLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BureauPullLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BureauPullLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BureauPullLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BureauPullLogGroupByOutputType[P]>;
}>>;
export type BureauPullLogWhereInput = {
    AND?: Prisma.BureauPullLogWhereInput | Prisma.BureauPullLogWhereInput[];
    OR?: Prisma.BureauPullLogWhereInput[];
    NOT?: Prisma.BureauPullLogWhereInput | Prisma.BureauPullLogWhereInput[];
    id?: Prisma.UuidFilter<"BureauPullLog"> | string;
    counterpartyId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    providerId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    pulledByUserId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    costKobo?: Prisma.BigIntFilter<"BureauPullLog"> | bigint | number;
    resultSummary?: Prisma.StringFilter<"BureauPullLog"> | string;
    pulledAt?: Prisma.DateTimeFilter<"BureauPullLog"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    provider?: Prisma.XOR<Prisma.BureauProviderScalarRelationFilter, Prisma.BureauProviderWhereInput>;
    pulledBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type BureauPullLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    pulledByUserId?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    pulledAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    provider?: Prisma.BureauProviderOrderByWithRelationInput;
    pulledBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type BureauPullLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BureauPullLogWhereInput | Prisma.BureauPullLogWhereInput[];
    OR?: Prisma.BureauPullLogWhereInput[];
    NOT?: Prisma.BureauPullLogWhereInput | Prisma.BureauPullLogWhereInput[];
    counterpartyId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    providerId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    pulledByUserId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    costKobo?: Prisma.BigIntFilter<"BureauPullLog"> | bigint | number;
    resultSummary?: Prisma.StringFilter<"BureauPullLog"> | string;
    pulledAt?: Prisma.DateTimeFilter<"BureauPullLog"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    provider?: Prisma.XOR<Prisma.BureauProviderScalarRelationFilter, Prisma.BureauProviderWhereInput>;
    pulledBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type BureauPullLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    pulledByUserId?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    pulledAt?: Prisma.SortOrder;
    _count?: Prisma.BureauPullLogCountOrderByAggregateInput;
    _avg?: Prisma.BureauPullLogAvgOrderByAggregateInput;
    _max?: Prisma.BureauPullLogMaxOrderByAggregateInput;
    _min?: Prisma.BureauPullLogMinOrderByAggregateInput;
    _sum?: Prisma.BureauPullLogSumOrderByAggregateInput;
};
export type BureauPullLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.BureauPullLogScalarWhereWithAggregatesInput | Prisma.BureauPullLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.BureauPullLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BureauPullLogScalarWhereWithAggregatesInput | Prisma.BureauPullLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BureauPullLog"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"BureauPullLog"> | string;
    providerId?: Prisma.UuidWithAggregatesFilter<"BureauPullLog"> | string;
    pulledByUserId?: Prisma.UuidWithAggregatesFilter<"BureauPullLog"> | string;
    costKobo?: Prisma.BigIntWithAggregatesFilter<"BureauPullLog"> | bigint | number;
    resultSummary?: Prisma.StringWithAggregatesFilter<"BureauPullLog"> | string;
    pulledAt?: Prisma.DateTimeWithAggregatesFilter<"BureauPullLog"> | Date | string;
};
export type BureauPullLogCreateInput = {
    id?: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutBureauPullsInput;
    provider: Prisma.BureauProviderCreateNestedOneWithoutPullsInput;
    pulledBy: Prisma.AppUserCreateNestedOneWithoutBureauPullsExecutedInput;
};
export type BureauPullLogUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    providerId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutBureauPullsNestedInput;
    provider?: Prisma.BureauProviderUpdateOneRequiredWithoutPullsNestedInput;
    pulledBy?: Prisma.AppUserUpdateOneRequiredWithoutBureauPullsExecutedNestedInput;
};
export type BureauPullLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogCreateManyInput = {
    id?: string;
    counterpartyId: string;
    providerId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogListRelationFilter = {
    every?: Prisma.BureauPullLogWhereInput;
    some?: Prisma.BureauPullLogWhereInput;
    none?: Prisma.BureauPullLogWhereInput;
};
export type BureauPullLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BureauPullLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    pulledByUserId?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    pulledAt?: Prisma.SortOrder;
};
export type BureauPullLogAvgOrderByAggregateInput = {
    costKobo?: Prisma.SortOrder;
};
export type BureauPullLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    pulledByUserId?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    pulledAt?: Prisma.SortOrder;
};
export type BureauPullLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    pulledByUserId?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    resultSummary?: Prisma.SortOrder;
    pulledAt?: Prisma.SortOrder;
};
export type BureauPullLogSumOrderByAggregateInput = {
    costKobo?: Prisma.SortOrder;
};
export type BureauPullLogCreateNestedManyWithoutPulledByInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput> | Prisma.BureauPullLogCreateWithoutPulledByInput[] | Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput | Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput[];
    createMany?: Prisma.BureauPullLogCreateManyPulledByInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUncheckedCreateNestedManyWithoutPulledByInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput> | Prisma.BureauPullLogCreateWithoutPulledByInput[] | Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput | Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput[];
    createMany?: Prisma.BureauPullLogCreateManyPulledByInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUpdateManyWithoutPulledByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput> | Prisma.BureauPullLogCreateWithoutPulledByInput[] | Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput | Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutPulledByInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutPulledByInput[];
    createMany?: Prisma.BureauPullLogCreateManyPulledByInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutPulledByInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutPulledByInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutPulledByInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutPulledByInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogUncheckedUpdateManyWithoutPulledByNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput> | Prisma.BureauPullLogCreateWithoutPulledByInput[] | Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput | Prisma.BureauPullLogCreateOrConnectWithoutPulledByInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutPulledByInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutPulledByInput[];
    createMany?: Prisma.BureauPullLogCreateManyPulledByInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutPulledByInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutPulledByInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutPulledByInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutPulledByInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput> | Prisma.BureauPullLogCreateWithoutCounterpartyInput[] | Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput | Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.BureauPullLogCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput> | Prisma.BureauPullLogCreateWithoutCounterpartyInput[] | Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput | Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.BureauPullLogCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput> | Prisma.BureauPullLogCreateWithoutCounterpartyInput[] | Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput | Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.BureauPullLogCreateManyCounterpartyInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutCounterpartyInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput> | Prisma.BureauPullLogCreateWithoutCounterpartyInput[] | Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput | Prisma.BureauPullLogCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.BureauPullLogCreateManyCounterpartyInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutCounterpartyInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput> | Prisma.BureauPullLogCreateWithoutProviderInput[] | Prisma.BureauPullLogUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutProviderInput | Prisma.BureauPullLogCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.BureauPullLogCreateManyProviderInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUncheckedCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput> | Prisma.BureauPullLogCreateWithoutProviderInput[] | Prisma.BureauPullLogUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutProviderInput | Prisma.BureauPullLogCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.BureauPullLogCreateManyProviderInputEnvelope;
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
};
export type BureauPullLogUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput> | Prisma.BureauPullLogCreateWithoutProviderInput[] | Prisma.BureauPullLogUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutProviderInput | Prisma.BureauPullLogCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutProviderInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.BureauPullLogCreateManyProviderInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutProviderInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutProviderInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput> | Prisma.BureauPullLogCreateWithoutProviderInput[] | Prisma.BureauPullLogUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.BureauPullLogCreateOrConnectWithoutProviderInput | Prisma.BureauPullLogCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.BureauPullLogUpsertWithWhereUniqueWithoutProviderInput | Prisma.BureauPullLogUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.BureauPullLogCreateManyProviderInputEnvelope;
    set?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    disconnect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    delete?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    connect?: Prisma.BureauPullLogWhereUniqueInput | Prisma.BureauPullLogWhereUniqueInput[];
    update?: Prisma.BureauPullLogUpdateWithWhereUniqueWithoutProviderInput | Prisma.BureauPullLogUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.BureauPullLogUpdateManyWithWhereWithoutProviderInput | Prisma.BureauPullLogUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
};
export type BureauPullLogCreateWithoutPulledByInput = {
    id?: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutBureauPullsInput;
    provider: Prisma.BureauProviderCreateNestedOneWithoutPullsInput;
};
export type BureauPullLogUncheckedCreateWithoutPulledByInput = {
    id?: string;
    counterpartyId: string;
    providerId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogCreateOrConnectWithoutPulledByInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput>;
};
export type BureauPullLogCreateManyPulledByInputEnvelope = {
    data: Prisma.BureauPullLogCreateManyPulledByInput | Prisma.BureauPullLogCreateManyPulledByInput[];
    skipDuplicates?: boolean;
};
export type BureauPullLogUpsertWithWhereUniqueWithoutPulledByInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutPulledByInput, Prisma.BureauPullLogUncheckedUpdateWithoutPulledByInput>;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutPulledByInput, Prisma.BureauPullLogUncheckedCreateWithoutPulledByInput>;
};
export type BureauPullLogUpdateWithWhereUniqueWithoutPulledByInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutPulledByInput, Prisma.BureauPullLogUncheckedUpdateWithoutPulledByInput>;
};
export type BureauPullLogUpdateManyWithWhereWithoutPulledByInput = {
    where: Prisma.BureauPullLogScalarWhereInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateManyMutationInput, Prisma.BureauPullLogUncheckedUpdateManyWithoutPulledByInput>;
};
export type BureauPullLogScalarWhereInput = {
    AND?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
    OR?: Prisma.BureauPullLogScalarWhereInput[];
    NOT?: Prisma.BureauPullLogScalarWhereInput | Prisma.BureauPullLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"BureauPullLog"> | string;
    counterpartyId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    providerId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    pulledByUserId?: Prisma.UuidFilter<"BureauPullLog"> | string;
    costKobo?: Prisma.BigIntFilter<"BureauPullLog"> | bigint | number;
    resultSummary?: Prisma.StringFilter<"BureauPullLog"> | string;
    pulledAt?: Prisma.DateTimeFilter<"BureauPullLog"> | Date | string;
};
export type BureauPullLogCreateWithoutCounterpartyInput = {
    id?: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
    provider: Prisma.BureauProviderCreateNestedOneWithoutPullsInput;
    pulledBy: Prisma.AppUserCreateNestedOneWithoutBureauPullsExecutedInput;
};
export type BureauPullLogUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    providerId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput>;
};
export type BureauPullLogCreateManyCounterpartyInputEnvelope = {
    data: Prisma.BureauPullLogCreateManyCounterpartyInput | Prisma.BureauPullLogCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type BureauPullLogUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedCreateWithoutCounterpartyInput>;
};
export type BureauPullLogUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutCounterpartyInput, Prisma.BureauPullLogUncheckedUpdateWithoutCounterpartyInput>;
};
export type BureauPullLogUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.BureauPullLogScalarWhereInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateManyMutationInput, Prisma.BureauPullLogUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type BureauPullLogCreateWithoutProviderInput = {
    id?: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutBureauPullsInput;
    pulledBy: Prisma.AppUserCreateNestedOneWithoutBureauPullsExecutedInput;
};
export type BureauPullLogUncheckedCreateWithoutProviderInput = {
    id?: string;
    counterpartyId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogCreateOrConnectWithoutProviderInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput>;
};
export type BureauPullLogCreateManyProviderInputEnvelope = {
    data: Prisma.BureauPullLogCreateManyProviderInput | Prisma.BureauPullLogCreateManyProviderInput[];
    skipDuplicates?: boolean;
};
export type BureauPullLogUpsertWithWhereUniqueWithoutProviderInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutProviderInput, Prisma.BureauPullLogUncheckedUpdateWithoutProviderInput>;
    create: Prisma.XOR<Prisma.BureauPullLogCreateWithoutProviderInput, Prisma.BureauPullLogUncheckedCreateWithoutProviderInput>;
};
export type BureauPullLogUpdateWithWhereUniqueWithoutProviderInput = {
    where: Prisma.BureauPullLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateWithoutProviderInput, Prisma.BureauPullLogUncheckedUpdateWithoutProviderInput>;
};
export type BureauPullLogUpdateManyWithWhereWithoutProviderInput = {
    where: Prisma.BureauPullLogScalarWhereInput;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateManyMutationInput, Prisma.BureauPullLogUncheckedUpdateManyWithoutProviderInput>;
};
export type BureauPullLogCreateManyPulledByInput = {
    id?: string;
    counterpartyId: string;
    providerId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogUpdateWithoutPulledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutBureauPullsNestedInput;
    provider?: Prisma.BureauProviderUpdateOneRequiredWithoutPullsNestedInput;
};
export type BureauPullLogUncheckedUpdateWithoutPulledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogUncheckedUpdateManyWithoutPulledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogCreateManyCounterpartyInput = {
    id?: string;
    providerId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.BureauProviderUpdateOneRequiredWithoutPullsNestedInput;
    pulledBy?: Prisma.AppUserUpdateOneRequiredWithoutBureauPullsExecutedNestedInput;
};
export type BureauPullLogUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogCreateManyProviderInput = {
    id?: string;
    counterpartyId: string;
    pulledByUserId: string;
    costKobo: bigint | number;
    resultSummary: string;
    pulledAt?: Date | string;
};
export type BureauPullLogUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutBureauPullsNestedInput;
    pulledBy?: Prisma.AppUserUpdateOneRequiredWithoutBureauPullsExecutedNestedInput;
};
export type BureauPullLogUncheckedUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogUncheckedUpdateManyWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    resultSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    pulledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BureauPullLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    providerId?: boolean;
    pulledByUserId?: boolean;
    costKobo?: boolean;
    resultSummary?: boolean;
    pulledAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPullLog"]>;
export type BureauPullLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    providerId?: boolean;
    pulledByUserId?: boolean;
    costKobo?: boolean;
    resultSummary?: boolean;
    pulledAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPullLog"]>;
export type BureauPullLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    providerId?: boolean;
    pulledByUserId?: boolean;
    costKobo?: boolean;
    resultSummary?: boolean;
    pulledAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bureauPullLog"]>;
export type BureauPullLogSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    providerId?: boolean;
    pulledByUserId?: boolean;
    costKobo?: boolean;
    resultSummary?: boolean;
    pulledAt?: boolean;
};
export type BureauPullLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "providerId" | "pulledByUserId" | "costKobo" | "resultSummary" | "pulledAt", ExtArgs["result"]["bureauPullLog"]>;
export type BureauPullLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BureauPullLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BureauPullLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.BureauProviderDefaultArgs<ExtArgs>;
    pulledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $BureauPullLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BureauPullLog";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        provider: Prisma.$BureauProviderPayload<ExtArgs>;
        pulledBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        providerId: string;
        pulledByUserId: string;
        costKobo: bigint;
        resultSummary: string;
        pulledAt: Date;
    }, ExtArgs["result"]["bureauPullLog"]>;
    composites: {};
};
export type BureauPullLogGetPayload<S extends boolean | null | undefined | BureauPullLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload, S>;
export type BureauPullLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BureauPullLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BureauPullLogCountAggregateInputType | true;
};
export interface BureauPullLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BureauPullLog'];
        meta: {
            name: 'BureauPullLog';
        };
    };
    findUnique<T extends BureauPullLogFindUniqueArgs>(args: Prisma.SelectSubset<T, BureauPullLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BureauPullLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BureauPullLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BureauPullLogFindFirstArgs>(args?: Prisma.SelectSubset<T, BureauPullLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BureauPullLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BureauPullLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BureauPullLogFindManyArgs>(args?: Prisma.SelectSubset<T, BureauPullLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BureauPullLogCreateArgs>(args: Prisma.SelectSubset<T, BureauPullLogCreateArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BureauPullLogCreateManyArgs>(args?: Prisma.SelectSubset<T, BureauPullLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BureauPullLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BureauPullLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BureauPullLogDeleteArgs>(args: Prisma.SelectSubset<T, BureauPullLogDeleteArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BureauPullLogUpdateArgs>(args: Prisma.SelectSubset<T, BureauPullLogUpdateArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BureauPullLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, BureauPullLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BureauPullLogUpdateManyArgs>(args: Prisma.SelectSubset<T, BureauPullLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BureauPullLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BureauPullLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BureauPullLogUpsertArgs>(args: Prisma.SelectSubset<T, BureauPullLogUpsertArgs<ExtArgs>>): Prisma.Prisma__BureauPullLogClient<runtime.Types.Result.GetResult<Prisma.$BureauPullLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BureauPullLogCountArgs>(args?: Prisma.Subset<T, BureauPullLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BureauPullLogCountAggregateOutputType> : number>;
    aggregate<T extends BureauPullLogAggregateArgs>(args: Prisma.Subset<T, BureauPullLogAggregateArgs>): Prisma.PrismaPromise<GetBureauPullLogAggregateType<T>>;
    groupBy<T extends BureauPullLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BureauPullLogGroupByArgs['orderBy'];
    } : {
        orderBy?: BureauPullLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BureauPullLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBureauPullLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BureauPullLogFieldRefs;
}
export interface Prisma__BureauPullLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    provider<T extends Prisma.BureauProviderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BureauProviderDefaultArgs<ExtArgs>>): Prisma.Prisma__BureauProviderClient<runtime.Types.Result.GetResult<Prisma.$BureauProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pulledBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BureauPullLogFieldRefs {
    readonly id: Prisma.FieldRef<"BureauPullLog", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"BureauPullLog", 'String'>;
    readonly providerId: Prisma.FieldRef<"BureauPullLog", 'String'>;
    readonly pulledByUserId: Prisma.FieldRef<"BureauPullLog", 'String'>;
    readonly costKobo: Prisma.FieldRef<"BureauPullLog", 'BigInt'>;
    readonly resultSummary: Prisma.FieldRef<"BureauPullLog", 'String'>;
    readonly pulledAt: Prisma.FieldRef<"BureauPullLog", 'DateTime'>;
}
export type BureauPullLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where: Prisma.BureauPullLogWhereUniqueInput;
};
export type BureauPullLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where: Prisma.BureauPullLogWhereUniqueInput;
};
export type BureauPullLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithRelationInput | Prisma.BureauPullLogOrderByWithRelationInput[];
    cursor?: Prisma.BureauPullLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPullLogScalarFieldEnum | Prisma.BureauPullLogScalarFieldEnum[];
};
export type BureauPullLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithRelationInput | Prisma.BureauPullLogOrderByWithRelationInput[];
    cursor?: Prisma.BureauPullLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPullLogScalarFieldEnum | Prisma.BureauPullLogScalarFieldEnum[];
};
export type BureauPullLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where?: Prisma.BureauPullLogWhereInput;
    orderBy?: Prisma.BureauPullLogOrderByWithRelationInput | Prisma.BureauPullLogOrderByWithRelationInput[];
    cursor?: Prisma.BureauPullLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BureauPullLogScalarFieldEnum | Prisma.BureauPullLogScalarFieldEnum[];
};
export type BureauPullLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPullLogCreateInput, Prisma.BureauPullLogUncheckedCreateInput>;
};
export type BureauPullLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BureauPullLogCreateManyInput | Prisma.BureauPullLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BureauPullLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    data: Prisma.BureauPullLogCreateManyInput | Prisma.BureauPullLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BureauPullLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BureauPullLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateInput, Prisma.BureauPullLogUncheckedUpdateInput>;
    where: Prisma.BureauPullLogWhereUniqueInput;
};
export type BureauPullLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BureauPullLogUpdateManyMutationInput, Prisma.BureauPullLogUncheckedUpdateManyInput>;
    where?: Prisma.BureauPullLogWhereInput;
    limit?: number;
};
export type BureauPullLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BureauPullLogUpdateManyMutationInput, Prisma.BureauPullLogUncheckedUpdateManyInput>;
    where?: Prisma.BureauPullLogWhereInput;
    limit?: number;
    include?: Prisma.BureauPullLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BureauPullLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where: Prisma.BureauPullLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BureauPullLogCreateInput, Prisma.BureauPullLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BureauPullLogUpdateInput, Prisma.BureauPullLogUncheckedUpdateInput>;
};
export type BureauPullLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
    where: Prisma.BureauPullLogWhereUniqueInput;
};
export type BureauPullLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BureauPullLogWhereInput;
    limit?: number;
};
export type BureauPullLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BureauPullLogSelect<ExtArgs> | null;
    omit?: Prisma.BureauPullLogOmit<ExtArgs> | null;
    include?: Prisma.BureauPullLogInclude<ExtArgs> | null;
};
