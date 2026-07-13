import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestmentMemoThresholdConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestmentMemoThresholdConfigPayload>;
export type AggregateInvestmentMemoThresholdConfig = {
    _count: InvestmentMemoThresholdConfigCountAggregateOutputType | null;
    _avg: InvestmentMemoThresholdConfigAvgAggregateOutputType | null;
    _sum: InvestmentMemoThresholdConfigSumAggregateOutputType | null;
    _min: InvestmentMemoThresholdConfigMinAggregateOutputType | null;
    _max: InvestmentMemoThresholdConfigMaxAggregateOutputType | null;
};
export type InvestmentMemoThresholdConfigAvgAggregateOutputType = {
    version: number | null;
    thresholdKobo: number | null;
};
export type InvestmentMemoThresholdConfigSumAggregateOutputType = {
    version: number | null;
    thresholdKobo: bigint | null;
};
export type InvestmentMemoThresholdConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    thresholdKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    workflowInstanceId: string | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestmentMemoThresholdConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    thresholdKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    workflowInstanceId: string | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestmentMemoThresholdConfigCountAggregateOutputType = {
    id: number;
    version: number;
    thresholdKobo: number;
    status: number;
    workflowInstanceId: number;
    createdByUserId: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type InvestmentMemoThresholdConfigAvgAggregateInputType = {
    version?: true;
    thresholdKobo?: true;
};
export type InvestmentMemoThresholdConfigSumAggregateInputType = {
    version?: true;
    thresholdKobo?: true;
};
export type InvestmentMemoThresholdConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    thresholdKobo?: true;
    status?: true;
    workflowInstanceId?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestmentMemoThresholdConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    thresholdKobo?: true;
    status?: true;
    workflowInstanceId?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type InvestmentMemoThresholdConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    thresholdKobo?: true;
    status?: true;
    workflowInstanceId?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestmentMemoThresholdConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    orderBy?: Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput | Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestmentMemoThresholdConfigCountAggregateInputType;
    _avg?: InvestmentMemoThresholdConfigAvgAggregateInputType;
    _sum?: InvestmentMemoThresholdConfigSumAggregateInputType;
    _min?: InvestmentMemoThresholdConfigMinAggregateInputType;
    _max?: InvestmentMemoThresholdConfigMaxAggregateInputType;
};
export type GetInvestmentMemoThresholdConfigAggregateType<T extends InvestmentMemoThresholdConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestmentMemoThresholdConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestmentMemoThresholdConfig[P]> : Prisma.GetScalarType<T[P], AggregateInvestmentMemoThresholdConfig[P]>;
};
export type InvestmentMemoThresholdConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    orderBy?: Prisma.InvestmentMemoThresholdConfigOrderByWithAggregationInput | Prisma.InvestmentMemoThresholdConfigOrderByWithAggregationInput[];
    by: Prisma.InvestmentMemoThresholdConfigScalarFieldEnum[] | Prisma.InvestmentMemoThresholdConfigScalarFieldEnum;
    having?: Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestmentMemoThresholdConfigCountAggregateInputType | true;
    _avg?: InvestmentMemoThresholdConfigAvgAggregateInputType;
    _sum?: InvestmentMemoThresholdConfigSumAggregateInputType;
    _min?: InvestmentMemoThresholdConfigMinAggregateInputType;
    _max?: InvestmentMemoThresholdConfigMaxAggregateInputType;
};
export type InvestmentMemoThresholdConfigGroupByOutputType = {
    id: string;
    version: number;
    thresholdKobo: bigint;
    status: $Enums.GovernedItemStatus;
    workflowInstanceId: string | null;
    createdByUserId: string;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: InvestmentMemoThresholdConfigCountAggregateOutputType | null;
    _avg: InvestmentMemoThresholdConfigAvgAggregateOutputType | null;
    _sum: InvestmentMemoThresholdConfigSumAggregateOutputType | null;
    _min: InvestmentMemoThresholdConfigMinAggregateOutputType | null;
    _max: InvestmentMemoThresholdConfigMaxAggregateOutputType | null;
};
export type GetInvestmentMemoThresholdConfigGroupByPayload<T extends InvestmentMemoThresholdConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestmentMemoThresholdConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestmentMemoThresholdConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestmentMemoThresholdConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestmentMemoThresholdConfigGroupByOutputType[P]>;
}>>;
export type InvestmentMemoThresholdConfigWhereInput = {
    AND?: Prisma.InvestmentMemoThresholdConfigWhereInput | Prisma.InvestmentMemoThresholdConfigWhereInput[];
    OR?: Prisma.InvestmentMemoThresholdConfigWhereInput[];
    NOT?: Prisma.InvestmentMemoThresholdConfigWhereInput | Prisma.InvestmentMemoThresholdConfigWhereInput[];
    id?: Prisma.UuidFilter<"InvestmentMemoThresholdConfig"> | string;
    version?: Prisma.IntFilter<"InvestmentMemoThresholdConfig"> | number;
    thresholdKobo?: Prisma.BigIntFilter<"InvestmentMemoThresholdConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestmentMemoThresholdConfig"> | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"InvestmentMemoThresholdConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestmentMemoThresholdConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type InvestmentMemoThresholdConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type InvestmentMemoThresholdConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    workflowInstanceId?: string;
    AND?: Prisma.InvestmentMemoThresholdConfigWhereInput | Prisma.InvestmentMemoThresholdConfigWhereInput[];
    OR?: Prisma.InvestmentMemoThresholdConfigWhereInput[];
    NOT?: Prisma.InvestmentMemoThresholdConfigWhereInput | Prisma.InvestmentMemoThresholdConfigWhereInput[];
    thresholdKobo?: Prisma.BigIntFilter<"InvestmentMemoThresholdConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestmentMemoThresholdConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"InvestmentMemoThresholdConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestmentMemoThresholdConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "workflowInstanceId" | "version">;
export type InvestmentMemoThresholdConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestmentMemoThresholdConfigCountOrderByAggregateInput;
    _avg?: Prisma.InvestmentMemoThresholdConfigAvgOrderByAggregateInput;
    _max?: Prisma.InvestmentMemoThresholdConfigMaxOrderByAggregateInput;
    _min?: Prisma.InvestmentMemoThresholdConfigMinOrderByAggregateInput;
    _sum?: Prisma.InvestmentMemoThresholdConfigSumOrderByAggregateInput;
};
export type InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput | Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput | Prisma.InvestmentMemoThresholdConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | number;
    thresholdKobo?: Prisma.BigIntWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestmentMemoThresholdConfig"> | Date | string;
};
export type InvestmentMemoThresholdConfigCreateInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutInvestmentMemoThresholdConfigsCreatedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutInvestmentMemoThresholdConfigsApprovedInput;
};
export type InvestmentMemoThresholdConfigUncheckedCreateInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestmentMemoThresholdConfigsCreatedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutInvestmentMemoThresholdConfigsApprovedNestedInput;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigCreateManyInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigListRelationFilter = {
    every?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    some?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    none?: Prisma.InvestmentMemoThresholdConfigWhereInput;
};
export type InvestmentMemoThresholdConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    thresholdKobo?: Prisma.SortOrder;
};
export type InvestmentMemoThresholdConfigCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
};
export type InvestmentMemoThresholdConfigCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInputEnvelope;
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
};
export type InvestmentMemoThresholdConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
};
export type InvestmentMemoThresholdConfigUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInputEnvelope;
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
};
export type InvestmentMemoThresholdConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    disconnect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    delete?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    update?: Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
};
export type InvestmentMemoThresholdConfigUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInputEnvelope;
    set?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    disconnect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    delete?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    update?: Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
};
export type InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    disconnect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    delete?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    update?: Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
};
export type InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput> | Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput[] | Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInputEnvelope;
    set?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    disconnect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    delete?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    connect?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput | Prisma.InvestmentMemoThresholdConfigWhereUniqueInput[];
    update?: Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutApprovedByInput | Prisma.InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
};
export type InvestmentMemoThresholdConfigCreateWithoutCreatedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutInvestmentMemoThresholdConfigsApprovedInput;
};
export type InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput>;
};
export type InvestmentMemoThresholdConfigCreateManyCreatedByInputEnvelope = {
    data: Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInput | Prisma.InvestmentMemoThresholdConfigCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type InvestmentMemoThresholdConfigCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutInvestmentMemoThresholdConfigsCreatedInput;
};
export type InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput>;
};
export type InvestmentMemoThresholdConfigCreateManyApprovedByInputEnvelope = {
    data: Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInput | Prisma.InvestmentMemoThresholdConfigCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutCreatedByInput>;
};
export type InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateWithoutCreatedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateWithoutCreatedByInput>;
};
export type InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateManyMutationInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutCreatedByInput>;
};
export type InvestmentMemoThresholdConfigScalarWhereInput = {
    AND?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
    OR?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
    NOT?: Prisma.InvestmentMemoThresholdConfigScalarWhereInput | Prisma.InvestmentMemoThresholdConfigScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestmentMemoThresholdConfig"> | string;
    version?: Prisma.IntFilter<"InvestmentMemoThresholdConfig"> | number;
    thresholdKobo?: Prisma.BigIntFilter<"InvestmentMemoThresholdConfig"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"InvestmentMemoThresholdConfig"> | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"InvestmentMemoThresholdConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"InvestmentMemoThresholdConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestmentMemoThresholdConfig"> | Date | string;
};
export type InvestmentMemoThresholdConfigUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateWithoutApprovedByInput>;
};
export type InvestmentMemoThresholdConfigUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateWithoutApprovedByInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateWithoutApprovedByInput>;
};
export type InvestmentMemoThresholdConfigUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.InvestmentMemoThresholdConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateManyMutationInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutApprovedByInput>;
};
export type InvestmentMemoThresholdConfigCreateManyCreatedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigCreateManyApprovedByInput = {
    id?: string;
    version: number;
    thresholdKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type InvestmentMemoThresholdConfigUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedBy?: Prisma.AppUserUpdateOneWithoutInvestmentMemoThresholdConfigsApprovedNestedInput;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestmentMemoThresholdConfigsCreatedNestedInput;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    thresholdKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestmentMemoThresholdConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    thresholdKobo?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["investmentMemoThresholdConfig"]>;
export type InvestmentMemoThresholdConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    thresholdKobo?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["investmentMemoThresholdConfig"]>;
export type InvestmentMemoThresholdConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    thresholdKobo?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["investmentMemoThresholdConfig"]>;
export type InvestmentMemoThresholdConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    thresholdKobo?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type InvestmentMemoThresholdConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "thresholdKobo" | "status" | "workflowInstanceId" | "createdByUserId" | "approvedByUserId" | "createdAt", ExtArgs["result"]["investmentMemoThresholdConfig"]>;
export type InvestmentMemoThresholdConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
};
export type InvestmentMemoThresholdConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
};
export type InvestmentMemoThresholdConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>;
};
export type $InvestmentMemoThresholdConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestmentMemoThresholdConfig";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        thresholdKobo: bigint;
        status: $Enums.GovernedItemStatus;
        workflowInstanceId: string | null;
        createdByUserId: string;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investmentMemoThresholdConfig"]>;
    composites: {};
};
export type InvestmentMemoThresholdConfigGetPayload<S extends boolean | null | undefined | InvestmentMemoThresholdConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload, S>;
export type InvestmentMemoThresholdConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestmentMemoThresholdConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestmentMemoThresholdConfigCountAggregateInputType | true;
};
export interface InvestmentMemoThresholdConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestmentMemoThresholdConfig'];
        meta: {
            name: 'InvestmentMemoThresholdConfig';
        };
    };
    findUnique<T extends InvestmentMemoThresholdConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestmentMemoThresholdConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestmentMemoThresholdConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestmentMemoThresholdConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestmentMemoThresholdConfigFindManyArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestmentMemoThresholdConfigCreateArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigCreateArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestmentMemoThresholdConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestmentMemoThresholdConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestmentMemoThresholdConfigDeleteArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestmentMemoThresholdConfigUpdateArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestmentMemoThresholdConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestmentMemoThresholdConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestmentMemoThresholdConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestmentMemoThresholdConfigUpsertArgs>(args: Prisma.SelectSubset<T, InvestmentMemoThresholdConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestmentMemoThresholdConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoThresholdConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestmentMemoThresholdConfigCountArgs>(args?: Prisma.Subset<T, InvestmentMemoThresholdConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestmentMemoThresholdConfigCountAggregateOutputType> : number>;
    aggregate<T extends InvestmentMemoThresholdConfigAggregateArgs>(args: Prisma.Subset<T, InvestmentMemoThresholdConfigAggregateArgs>): Prisma.PrismaPromise<GetInvestmentMemoThresholdConfigAggregateType<T>>;
    groupBy<T extends InvestmentMemoThresholdConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestmentMemoThresholdConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestmentMemoThresholdConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestmentMemoThresholdConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentMemoThresholdConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestmentMemoThresholdConfigFieldRefs;
}
export interface Prisma__InvestmentMemoThresholdConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestmentMemoThresholdConfigFieldRefs {
    readonly id: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'String'>;
    readonly version: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'Int'>;
    readonly thresholdKobo: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'BigInt'>;
    readonly status: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'GovernedItemStatus'>;
    readonly workflowInstanceId: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestmentMemoThresholdConfig", 'DateTime'>;
}
export type InvestmentMemoThresholdConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
};
export type InvestmentMemoThresholdConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
};
export type InvestmentMemoThresholdConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    orderBy?: Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput | Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentMemoThresholdConfigScalarFieldEnum | Prisma.InvestmentMemoThresholdConfigScalarFieldEnum[];
};
export type InvestmentMemoThresholdConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    orderBy?: Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput | Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentMemoThresholdConfigScalarFieldEnum | Prisma.InvestmentMemoThresholdConfigScalarFieldEnum[];
};
export type InvestmentMemoThresholdConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    orderBy?: Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput | Prisma.InvestmentMemoThresholdConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentMemoThresholdConfigScalarFieldEnum | Prisma.InvestmentMemoThresholdConfigScalarFieldEnum[];
};
export type InvestmentMemoThresholdConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateInput>;
};
export type InvestmentMemoThresholdConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestmentMemoThresholdConfigCreateManyInput | Prisma.InvestmentMemoThresholdConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestmentMemoThresholdConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    data: Prisma.InvestmentMemoThresholdConfigCreateManyInput | Prisma.InvestmentMemoThresholdConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestmentMemoThresholdConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestmentMemoThresholdConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateInput>;
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
};
export type InvestmentMemoThresholdConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateManyMutationInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    limit?: number;
};
export type InvestmentMemoThresholdConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateManyMutationInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    limit?: number;
    include?: Prisma.InvestmentMemoThresholdConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestmentMemoThresholdConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigCreateInput, Prisma.InvestmentMemoThresholdConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestmentMemoThresholdConfigUpdateInput, Prisma.InvestmentMemoThresholdConfigUncheckedUpdateInput>;
};
export type InvestmentMemoThresholdConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
    where: Prisma.InvestmentMemoThresholdConfigWhereUniqueInput;
};
export type InvestmentMemoThresholdConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentMemoThresholdConfigWhereInput;
    limit?: number;
};
export type InvestmentMemoThresholdConfig$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type InvestmentMemoThresholdConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoThresholdConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoThresholdConfigOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoThresholdConfigInclude<ExtArgs> | null;
};
