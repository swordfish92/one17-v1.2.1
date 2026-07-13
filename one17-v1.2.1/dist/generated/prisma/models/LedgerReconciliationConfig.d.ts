import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LedgerReconciliationConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$LedgerReconciliationConfigPayload>;
export type AggregateLedgerReconciliationConfig = {
    _count: LedgerReconciliationConfigCountAggregateOutputType | null;
    _avg: LedgerReconciliationConfigAvgAggregateOutputType | null;
    _sum: LedgerReconciliationConfigSumAggregateOutputType | null;
    _min: LedgerReconciliationConfigMinAggregateOutputType | null;
    _max: LedgerReconciliationConfigMaxAggregateOutputType | null;
};
export type LedgerReconciliationConfigAvgAggregateOutputType = {
    version: number | null;
    toleranceKobo: number | null;
};
export type LedgerReconciliationConfigSumAggregateOutputType = {
    version: number | null;
    toleranceKobo: bigint | null;
};
export type LedgerReconciliationConfigMinAggregateOutputType = {
    id: string | null;
    metricCode: string | null;
    version: number | null;
    ledgerEntityCode: string | null;
    toleranceKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type LedgerReconciliationConfigMaxAggregateOutputType = {
    id: string | null;
    metricCode: string | null;
    version: number | null;
    ledgerEntityCode: string | null;
    toleranceKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type LedgerReconciliationConfigCountAggregateOutputType = {
    id: number;
    metricCode: number;
    version: number;
    ledgerEntityCode: number;
    glAccountCodes: number;
    toleranceKobo: number;
    status: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type LedgerReconciliationConfigAvgAggregateInputType = {
    version?: true;
    toleranceKobo?: true;
};
export type LedgerReconciliationConfigSumAggregateInputType = {
    version?: true;
    toleranceKobo?: true;
};
export type LedgerReconciliationConfigMinAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    ledgerEntityCode?: true;
    toleranceKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type LedgerReconciliationConfigMaxAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    ledgerEntityCode?: true;
    toleranceKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type LedgerReconciliationConfigCountAggregateInputType = {
    id?: true;
    metricCode?: true;
    version?: true;
    ledgerEntityCode?: true;
    glAccountCodes?: true;
    toleranceKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type LedgerReconciliationConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    orderBy?: Prisma.LedgerReconciliationConfigOrderByWithRelationInput | Prisma.LedgerReconciliationConfigOrderByWithRelationInput[];
    cursor?: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LedgerReconciliationConfigCountAggregateInputType;
    _avg?: LedgerReconciliationConfigAvgAggregateInputType;
    _sum?: LedgerReconciliationConfigSumAggregateInputType;
    _min?: LedgerReconciliationConfigMinAggregateInputType;
    _max?: LedgerReconciliationConfigMaxAggregateInputType;
};
export type GetLedgerReconciliationConfigAggregateType<T extends LedgerReconciliationConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateLedgerReconciliationConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLedgerReconciliationConfig[P]> : Prisma.GetScalarType<T[P], AggregateLedgerReconciliationConfig[P]>;
};
export type LedgerReconciliationConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    orderBy?: Prisma.LedgerReconciliationConfigOrderByWithAggregationInput | Prisma.LedgerReconciliationConfigOrderByWithAggregationInput[];
    by: Prisma.LedgerReconciliationConfigScalarFieldEnum[] | Prisma.LedgerReconciliationConfigScalarFieldEnum;
    having?: Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LedgerReconciliationConfigCountAggregateInputType | true;
    _avg?: LedgerReconciliationConfigAvgAggregateInputType;
    _sum?: LedgerReconciliationConfigSumAggregateInputType;
    _min?: LedgerReconciliationConfigMinAggregateInputType;
    _max?: LedgerReconciliationConfigMaxAggregateInputType;
};
export type LedgerReconciliationConfigGroupByOutputType = {
    id: string;
    metricCode: string;
    version: number;
    ledgerEntityCode: string | null;
    glAccountCodes: string[];
    toleranceKobo: bigint;
    status: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt: Date;
    _count: LedgerReconciliationConfigCountAggregateOutputType | null;
    _avg: LedgerReconciliationConfigAvgAggregateOutputType | null;
    _sum: LedgerReconciliationConfigSumAggregateOutputType | null;
    _min: LedgerReconciliationConfigMinAggregateOutputType | null;
    _max: LedgerReconciliationConfigMaxAggregateOutputType | null;
};
export type GetLedgerReconciliationConfigGroupByPayload<T extends LedgerReconciliationConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LedgerReconciliationConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LedgerReconciliationConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LedgerReconciliationConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LedgerReconciliationConfigGroupByOutputType[P]>;
}>>;
export type LedgerReconciliationConfigWhereInput = {
    AND?: Prisma.LedgerReconciliationConfigWhereInput | Prisma.LedgerReconciliationConfigWhereInput[];
    OR?: Prisma.LedgerReconciliationConfigWhereInput[];
    NOT?: Prisma.LedgerReconciliationConfigWhereInput | Prisma.LedgerReconciliationConfigWhereInput[];
    id?: Prisma.UuidFilter<"LedgerReconciliationConfig"> | string;
    metricCode?: Prisma.StringFilter<"LedgerReconciliationConfig"> | string;
    version?: Prisma.IntFilter<"LedgerReconciliationConfig"> | number;
    ledgerEntityCode?: Prisma.StringNullableFilter<"LedgerReconciliationConfig"> | string | null;
    glAccountCodes?: Prisma.StringNullableListFilter<"LedgerReconciliationConfig">;
    toleranceKobo?: Prisma.BigIntFilter<"LedgerReconciliationConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"LedgerReconciliationConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"LedgerReconciliationConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerReconciliationConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityNullableScalarRelationFilter, Prisma.LedgerEntityWhereInput> | null;
};
export type LedgerReconciliationConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    glAccountCodes?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
};
export type LedgerReconciliationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    metricCode_version?: Prisma.LedgerReconciliationConfigMetricCodeVersionCompoundUniqueInput;
    AND?: Prisma.LedgerReconciliationConfigWhereInput | Prisma.LedgerReconciliationConfigWhereInput[];
    OR?: Prisma.LedgerReconciliationConfigWhereInput[];
    NOT?: Prisma.LedgerReconciliationConfigWhereInput | Prisma.LedgerReconciliationConfigWhereInput[];
    metricCode?: Prisma.StringFilter<"LedgerReconciliationConfig"> | string;
    version?: Prisma.IntFilter<"LedgerReconciliationConfig"> | number;
    ledgerEntityCode?: Prisma.StringNullableFilter<"LedgerReconciliationConfig"> | string | null;
    glAccountCodes?: Prisma.StringNullableListFilter<"LedgerReconciliationConfig">;
    toleranceKobo?: Prisma.BigIntFilter<"LedgerReconciliationConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"LedgerReconciliationConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"LedgerReconciliationConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerReconciliationConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityNullableScalarRelationFilter, Prisma.LedgerEntityWhereInput> | null;
}, "id" | "metricCode_version">;
export type LedgerReconciliationConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    glAccountCodes?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LedgerReconciliationConfigCountOrderByAggregateInput;
    _avg?: Prisma.LedgerReconciliationConfigAvgOrderByAggregateInput;
    _max?: Prisma.LedgerReconciliationConfigMaxOrderByAggregateInput;
    _min?: Prisma.LedgerReconciliationConfigMinOrderByAggregateInput;
    _sum?: Prisma.LedgerReconciliationConfigSumOrderByAggregateInput;
};
export type LedgerReconciliationConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput | Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput | Prisma.LedgerReconciliationConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LedgerReconciliationConfig"> | string;
    metricCode?: Prisma.StringWithAggregatesFilter<"LedgerReconciliationConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"LedgerReconciliationConfig"> | number;
    ledgerEntityCode?: Prisma.StringNullableWithAggregatesFilter<"LedgerReconciliationConfig"> | string | null;
    glAccountCodes?: Prisma.StringNullableListFilter<"LedgerReconciliationConfig">;
    toleranceKobo?: Prisma.BigIntWithAggregatesFilter<"LedgerReconciliationConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"LedgerReconciliationConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"LedgerReconciliationConfig"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LedgerReconciliationConfig"> | Date | string;
};
export type LedgerReconciliationConfigCreateInput = {
    id?: string;
    metricCode: string;
    version: number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutReconciliationConfigsCreatedInput;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutReconciliationConfigsInput;
};
export type LedgerReconciliationConfigUncheckedCreateInput = {
    id?: string;
    metricCode: string;
    version: number;
    ledgerEntityCode?: string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutReconciliationConfigsCreatedNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneWithoutReconciliationConfigsNestedInput;
};
export type LedgerReconciliationConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigCreateManyInput = {
    id?: string;
    metricCode: string;
    version: number;
    ledgerEntityCode?: string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigListRelationFilter = {
    every?: Prisma.LedgerReconciliationConfigWhereInput;
    some?: Prisma.LedgerReconciliationConfigWhereInput;
    none?: Prisma.LedgerReconciliationConfigWhereInput;
};
export type LedgerReconciliationConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigMetricCodeVersionCompoundUniqueInput = {
    metricCode: string;
    version: number;
};
export type LedgerReconciliationConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    glAccountCodes?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    toleranceKobo?: Prisma.SortOrder;
};
export type LedgerReconciliationConfigCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput> | Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
};
export type LedgerReconciliationConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput> | Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
};
export type LedgerReconciliationConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput> | Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    disconnect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    delete?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    update?: Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
};
export type LedgerReconciliationConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput> | Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    disconnect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    delete?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    update?: Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
};
export type LedgerReconciliationConfigCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
};
export type LedgerReconciliationConfigUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
};
export type LedgerReconciliationConfigUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    disconnect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    delete?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    update?: Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
};
export type LedgerReconciliationConfigUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput[] | Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    disconnect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    delete?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    connect?: Prisma.LedgerReconciliationConfigWhereUniqueInput | Prisma.LedgerReconciliationConfigWhereUniqueInput[];
    update?: Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.LedgerReconciliationConfigUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
};
export type LedgerReconciliationConfigCreateglAccountCodesInput = {
    set: string[];
};
export type LedgerReconciliationConfigUpdateglAccountCodesInput = {
    set?: string[];
    push?: string | string[];
};
export type LedgerReconciliationConfigCreateWithoutCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutReconciliationConfigsInput;
};
export type LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    ledgerEntityCode?: string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput>;
};
export type LedgerReconciliationConfigCreateManyCreatedByInputEnvelope = {
    data: Prisma.LedgerReconciliationConfigCreateManyCreatedByInput | Prisma.LedgerReconciliationConfigCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type LedgerReconciliationConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutCreatedByInput>;
};
export type LedgerReconciliationConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateWithoutCreatedByInput, Prisma.LedgerReconciliationConfigUncheckedUpdateWithoutCreatedByInput>;
};
export type LedgerReconciliationConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.LedgerReconciliationConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateManyMutationInput, Prisma.LedgerReconciliationConfigUncheckedUpdateManyWithoutCreatedByInput>;
};
export type LedgerReconciliationConfigScalarWhereInput = {
    AND?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
    OR?: Prisma.LedgerReconciliationConfigScalarWhereInput[];
    NOT?: Prisma.LedgerReconciliationConfigScalarWhereInput | Prisma.LedgerReconciliationConfigScalarWhereInput[];
    id?: Prisma.UuidFilter<"LedgerReconciliationConfig"> | string;
    metricCode?: Prisma.StringFilter<"LedgerReconciliationConfig"> | string;
    version?: Prisma.IntFilter<"LedgerReconciliationConfig"> | number;
    ledgerEntityCode?: Prisma.StringNullableFilter<"LedgerReconciliationConfig"> | string | null;
    glAccountCodes?: Prisma.StringNullableListFilter<"LedgerReconciliationConfig">;
    toleranceKobo?: Prisma.BigIntFilter<"LedgerReconciliationConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"LedgerReconciliationConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"LedgerReconciliationConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerReconciliationConfig"> | Date | string;
};
export type LedgerReconciliationConfigCreateWithoutLedgerEntityInput = {
    id?: string;
    metricCode: string;
    version: number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutReconciliationConfigsCreatedInput;
};
export type LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    metricCode: string;
    version: number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput>;
};
export type LedgerReconciliationConfigCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInput | Prisma.LedgerReconciliationConfigCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type LedgerReconciliationConfigUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedCreateWithoutLedgerEntityInput>;
};
export type LedgerReconciliationConfigUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateWithoutLedgerEntityInput, Prisma.LedgerReconciliationConfigUncheckedUpdateWithoutLedgerEntityInput>;
};
export type LedgerReconciliationConfigUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.LedgerReconciliationConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateManyMutationInput, Prisma.LedgerReconciliationConfigUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type LedgerReconciliationConfigCreateManyCreatedByInput = {
    id?: string;
    metricCode: string;
    version: number;
    ledgerEntityCode?: string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneWithoutReconciliationConfigsNestedInput;
};
export type LedgerReconciliationConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigCreateManyLedgerEntityInput = {
    id?: string;
    metricCode: string;
    version: number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigCreateglAccountCodesInput | string[];
    toleranceKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LedgerReconciliationConfigUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutReconciliationConfigsCreatedNestedInput;
};
export type LedgerReconciliationConfigUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    glAccountCodes?: Prisma.LedgerReconciliationConfigUpdateglAccountCodesInput | string[];
    toleranceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerReconciliationConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCodes?: boolean;
    toleranceKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerReconciliationConfig"]>;
export type LedgerReconciliationConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCodes?: boolean;
    toleranceKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerReconciliationConfig"]>;
export type LedgerReconciliationConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCodes?: boolean;
    toleranceKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerReconciliationConfig"]>;
export type LedgerReconciliationConfigSelectScalar = {
    id?: boolean;
    metricCode?: boolean;
    version?: boolean;
    ledgerEntityCode?: boolean;
    glAccountCodes?: boolean;
    toleranceKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type LedgerReconciliationConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "metricCode" | "version" | "ledgerEntityCode" | "glAccountCodes" | "toleranceKobo" | "status" | "createdByUserId" | "createdAt", ExtArgs["result"]["ledgerReconciliationConfig"]>;
export type LedgerReconciliationConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
};
export type LedgerReconciliationConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
};
export type LedgerReconciliationConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>;
};
export type $LedgerReconciliationConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LedgerReconciliationConfig";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        metricCode: string;
        version: number;
        ledgerEntityCode: string | null;
        glAccountCodes: string[];
        toleranceKobo: bigint;
        status: $Enums.GovernedItemStatus;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["ledgerReconciliationConfig"]>;
    composites: {};
};
export type LedgerReconciliationConfigGetPayload<S extends boolean | null | undefined | LedgerReconciliationConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload, S>;
export type LedgerReconciliationConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LedgerReconciliationConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LedgerReconciliationConfigCountAggregateInputType | true;
};
export interface LedgerReconciliationConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LedgerReconciliationConfig'];
        meta: {
            name: 'LedgerReconciliationConfig';
        };
    };
    findUnique<T extends LedgerReconciliationConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LedgerReconciliationConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LedgerReconciliationConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LedgerReconciliationConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LedgerReconciliationConfigFindManyArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LedgerReconciliationConfigCreateArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigCreateArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LedgerReconciliationConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LedgerReconciliationConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LedgerReconciliationConfigDeleteArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LedgerReconciliationConfigUpdateArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LedgerReconciliationConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, LedgerReconciliationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LedgerReconciliationConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LedgerReconciliationConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LedgerReconciliationConfigUpsertArgs>(args: Prisma.SelectSubset<T, LedgerReconciliationConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__LedgerReconciliationConfigClient<runtime.Types.Result.GetResult<Prisma.$LedgerReconciliationConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LedgerReconciliationConfigCountArgs>(args?: Prisma.Subset<T, LedgerReconciliationConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LedgerReconciliationConfigCountAggregateOutputType> : number>;
    aggregate<T extends LedgerReconciliationConfigAggregateArgs>(args: Prisma.Subset<T, LedgerReconciliationConfigAggregateArgs>): Prisma.PrismaPromise<GetLedgerReconciliationConfigAggregateType<T>>;
    groupBy<T extends LedgerReconciliationConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LedgerReconciliationConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: LedgerReconciliationConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LedgerReconciliationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerReconciliationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LedgerReconciliationConfigFieldRefs;
}
export interface Prisma__LedgerReconciliationConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ledgerEntity<T extends Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LedgerReconciliationConfigFieldRefs {
    readonly id: Prisma.FieldRef<"LedgerReconciliationConfig", 'String'>;
    readonly metricCode: Prisma.FieldRef<"LedgerReconciliationConfig", 'String'>;
    readonly version: Prisma.FieldRef<"LedgerReconciliationConfig", 'Int'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"LedgerReconciliationConfig", 'String'>;
    readonly glAccountCodes: Prisma.FieldRef<"LedgerReconciliationConfig", 'String[]'>;
    readonly toleranceKobo: Prisma.FieldRef<"LedgerReconciliationConfig", 'BigInt'>;
    readonly status: Prisma.FieldRef<"LedgerReconciliationConfig", 'GovernedItemStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"LedgerReconciliationConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LedgerReconciliationConfig", 'DateTime'>;
}
export type LedgerReconciliationConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
};
export type LedgerReconciliationConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
};
export type LedgerReconciliationConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    orderBy?: Prisma.LedgerReconciliationConfigOrderByWithRelationInput | Prisma.LedgerReconciliationConfigOrderByWithRelationInput[];
    cursor?: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerReconciliationConfigScalarFieldEnum | Prisma.LedgerReconciliationConfigScalarFieldEnum[];
};
export type LedgerReconciliationConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    orderBy?: Prisma.LedgerReconciliationConfigOrderByWithRelationInput | Prisma.LedgerReconciliationConfigOrderByWithRelationInput[];
    cursor?: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerReconciliationConfigScalarFieldEnum | Prisma.LedgerReconciliationConfigScalarFieldEnum[];
};
export type LedgerReconciliationConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    orderBy?: Prisma.LedgerReconciliationConfigOrderByWithRelationInput | Prisma.LedgerReconciliationConfigOrderByWithRelationInput[];
    cursor?: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerReconciliationConfigScalarFieldEnum | Prisma.LedgerReconciliationConfigScalarFieldEnum[];
};
export type LedgerReconciliationConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateInput, Prisma.LedgerReconciliationConfigUncheckedCreateInput>;
};
export type LedgerReconciliationConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LedgerReconciliationConfigCreateManyInput | Prisma.LedgerReconciliationConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LedgerReconciliationConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    data: Prisma.LedgerReconciliationConfigCreateManyInput | Prisma.LedgerReconciliationConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LedgerReconciliationConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LedgerReconciliationConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateInput, Prisma.LedgerReconciliationConfigUncheckedUpdateInput>;
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
};
export type LedgerReconciliationConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateManyMutationInput, Prisma.LedgerReconciliationConfigUncheckedUpdateManyInput>;
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    limit?: number;
};
export type LedgerReconciliationConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateManyMutationInput, Prisma.LedgerReconciliationConfigUncheckedUpdateManyInput>;
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    limit?: number;
    include?: Prisma.LedgerReconciliationConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LedgerReconciliationConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerReconciliationConfigCreateInput, Prisma.LedgerReconciliationConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LedgerReconciliationConfigUpdateInput, Prisma.LedgerReconciliationConfigUncheckedUpdateInput>;
};
export type LedgerReconciliationConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
    where: Prisma.LedgerReconciliationConfigWhereUniqueInput;
};
export type LedgerReconciliationConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerReconciliationConfigWhereInput;
    limit?: number;
};
export type LedgerReconciliationConfig$ledgerEntityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntitySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntityOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntityInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntityWhereInput;
};
export type LedgerReconciliationConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerReconciliationConfigSelect<ExtArgs> | null;
    omit?: Prisma.LedgerReconciliationConfigOmit<ExtArgs> | null;
    include?: Prisma.LedgerReconciliationConfigInclude<ExtArgs> | null;
};
